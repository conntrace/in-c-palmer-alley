// In C: Audience Ensemble — Walker (Pedestrian Simulator)
// A glowing dot the user controls with arrow keys to walk through Palmer Alley.
// Hovering over a musician circle for 2 seconds triggers that musician.

import { CONFIG } from './config.js';

// Building collision rectangles (percentages of site-plan container)
const BUILDINGS = [
  { x: 2, y: 5,  w: 24, h: 38 },   // bldg-left-top
  { x: 2, y: 57, w: 24, h: 38 },   // bldg-left-bottom
  { x: 30, y: 5,  w: 38, h: 35 },  // bldg-center-top
  { x: 30, y: 60, w: 38, h: 35 },  // bldg-center-bottom
  { x: 72, y: 5,  w: 26, h: 35 },  // bldg-right-top
  { x: 72, y: 60, w: 26, h: 35 },  // bldg-right-bottom
];

const SPEED = 0.35;           // % per frame
const TRIGGER_DELAY = 2000;   // ms hovering over a musician before triggering
const TRIGGER_COOLDOWN = 3000; // ms before same musician can trigger again
const DOT_SIZE = 1;           // % radius for collision

export class Walker {
  constructor(ensemble) {
    this.ensemble = ensemble;
    this.active = false;

    // Position in % of site-plan
    this.x = 99;
    this.y = 50;

    // Keys held
    this._keys = { up: false, down: false, left: false, right: false };

    // Musician hover tracking
    this._hoverMusician = null;   // musicianId currently hovered
    this._hoverEnterTime = 0;
    this._musicianCooldowns = {}; // musicianId → timestamp when cooldown expires

    // DOM
    this._dot = document.getElementById('walker-dot');
    this._sitePlan = document.getElementById('site-plan');
    this._rafId = null;

    // Button elements (populated by setButtons)
    this._buttons = [];

    this._initKeys();
  }

  // Called by app.js after ButtonController creates the button elements
  setButtons(buttons) {
    this._buttons = buttons;
  }

  _initKeys() {
    document.addEventListener('keydown', (e) => {
      if (!this.active) return;
      switch (e.code) {
        case 'ArrowUp':    this._keys.up = true; e.preventDefault(); break;
        case 'ArrowDown':  this._keys.down = true; e.preventDefault(); break;
        case 'ArrowLeft':  this._keys.left = true; e.preventDefault(); break;
        case 'ArrowRight': this._keys.right = true; e.preventDefault(); break;
      }
    });

    document.addEventListener('keyup', (e) => {
      switch (e.code) {
        case 'ArrowUp':    this._keys.up = false; break;
        case 'ArrowDown':  this._keys.down = false; break;
        case 'ArrowLeft':  this._keys.left = false; break;
        case 'ArrowRight': this._keys.right = false; break;
      }
    });
  }

  toggle() {
    if (this.active) {
      this.stop();
    } else {
      this.start();
    }
    return this.active;
  }

  start() {
    this.active = true;
    this.x = 99;
    this.y = 50;
    this._hoverMusician = null;
    this._musicianCooldowns = {};
    this._dot.classList.add('visible');
    this._updateDotPosition();
    this._loop();
  }

  stop() {
    this.active = false;
    this._dot.classList.remove('visible');
    this._keys = { up: false, down: false, left: false, right: false };
    if (this._rafId) {
      cancelAnimationFrame(this._rafId);
      this._rafId = null;
    }
    // Clear any button hover highlights
    this._clearHoverHighlight();
  }

  _loop() {
    if (!this.active) return;
    this._move();
    this._checkMusicianHover();
    this._updateDotPosition();
    this._rafId = requestAnimationFrame(() => this._loop());
  }

  _move() {
    let dx = 0, dy = 0;
    if (this._keys.left)  dx -= SPEED;
    if (this._keys.right) dx += SPEED;
    if (this._keys.up)    dy -= SPEED;
    if (this._keys.down)  dy += SPEED;

    // Diagonal normalization
    if (dx !== 0 && dy !== 0) {
      dx *= 0.707;
      dy *= 0.707;
    }

    if (dx === 0 && dy === 0) return;

    // Try x movement
    const newX = Math.max(0, Math.min(100, this.x + dx));
    if (!this._collidesWithBuilding(newX, this.y)) {
      this.x = newX;
    }

    // Try y movement independently (allows wall sliding)
    const newY = Math.max(0, Math.min(100, this.y + dy));
    if (!this._collidesWithBuilding(this.x, newY)) {
      this.y = newY;
    }
  }

  _collidesWithBuilding(px, py) {
    for (const b of BUILDINGS) {
      if (px + DOT_SIZE > b.x && px - DOT_SIZE < b.x + b.w &&
          py + DOT_SIZE > b.y && py - DOT_SIZE < b.y + b.h) {
        return true;
      }
    }
    return false;
  }

  // Check if the walker dot overlaps any musician button element
  _getHoveredMusician() {
    if (!this._sitePlan || this._buttons.length === 0) return null;

    const planRect = this._sitePlan.getBoundingClientRect();
    // Walker position in screen pixels
    const dotX = planRect.left + (this.x / 100) * planRect.width;
    const dotY = planRect.top + (this.y / 100) * planRect.height;

    for (let i = 0; i < this._buttons.length; i++) {
      const btn = this._buttons[i];
      if (!btn) continue;
      const r = btn.getBoundingClientRect();
      // Check if dot center is inside the button's bounding circle
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const radius = r.width / 2;
      const dist = Math.sqrt((dotX - cx) ** 2 + (dotY - cy) ** 2);
      if (dist <= radius) {
        return i;
      }
    }
    return null;
  }

  _checkMusicianHover() {
    const hoveredId = this._getHoveredMusician();
    const now = Date.now();

    // Left previous musician
    if (this._hoverMusician !== null && hoveredId !== this._hoverMusician) {
      this._clearHoverHighlight();
      this._hoverMusician = null;
    }

    if (hoveredId === null) return;

    // Check cooldown
    const cooldownEnd = this._musicianCooldowns[hoveredId] || 0;
    if (now < cooldownEnd) return;

    // Entered new musician
    if (this._hoverMusician !== hoveredId) {
      this._hoverMusician = hoveredId;
      this._hoverEnterTime = now;
      // Add hover highlight to button
      if (this._buttons[hoveredId]) {
        this._buttons[hoveredId].classList.add('walker-hover');
      }
    }

    // Update progress visual on button
    const elapsed = now - this._hoverEnterTime;
    const progress = Math.min(elapsed / TRIGGER_DELAY, 1);
    if (this._buttons[hoveredId]) {
      this._buttons[hoveredId].style.setProperty('--walker-progress', progress);
    }

    // Trigger!
    if (elapsed >= TRIGGER_DELAY) {
      this._triggerMusician(hoveredId);
      this._musicianCooldowns[hoveredId] = now + TRIGGER_COOLDOWN;
      this._clearHoverHighlight();
      this._hoverMusician = null;
    }
  }

  _triggerMusician(musicianId) {
    if (!this.ensemble.isEligible(musicianId)) return;
    const success = this.ensemble.tryAdvance(musicianId);
    if (success) {
      this._onTrigger?.(musicianId);
    }
  }

  _clearHoverHighlight() {
    for (const btn of this._buttons) {
      if (btn) {
        btn.classList.remove('walker-hover');
        btn.style.removeProperty('--walker-progress');
      }
    }
  }

  onTrigger(callback) {
    this._onTrigger = callback;
  }

  _updateDotPosition() {
    this._dot.style.left = this.x + '%';
    this._dot.style.top = this.y + '%';
  }
}
