// In C: Audience Ensemble — Button Controller
// Handles keyboard input (keys 1-0), renders visual button states.

import { CONFIG } from './config.js';

export class ButtonController {
  constructor(ensemble) {
    this.ensemble = ensemble;
    this.buttons = []; // DOM elements
    this._onPress = null; // callback
    this._init();
  }

  _init() {
    // Zone containers for site-plan overlay (3 left, 4 center, 3 right)
    const zoneLeft = document.getElementById('zone-left');
    const zoneCenter = document.getElementById('zone-center');
    const zoneRight = document.getElementById('zone-right');
    const zones = [zoneLeft, zoneCenter, zoneRight];
    // Map musician index → zone: 0-2 left, 3-6 center, 7-9 right
    const zoneAssignment = [0, 0, 0, 1, 1, 1, 1, 2, 2, 2];

    for (let i = 0; i < CONFIG.musicianCount; i++) {
      const station = document.createElement('div');
      station.className = 'station';

      const btn = document.createElement('div');
      btn.className = 'station-button ineligible';
      btn.style.setProperty('--station-color', CONFIG.musicianColors[i]);
      btn.dataset.musicianId = i;

      const label = document.createElement('div');
      label.className = 'station-label';
      label.style.setProperty('--station-color', CONFIG.musicianColors[i]);
      label.textContent = CONFIG.musicianLabels[i];

      const key = document.createElement('div');
      key.className = 'station-key';
      const keyLabels = CONFIG.keyLabels;
      key.textContent = i < keyLabels.length ? `Key: ${keyLabels[i]}` : '';

      station.appendChild(btn);
      station.appendChild(label);
      station.appendChild(key);

      // Place into the correct zone, falling back to center if beyond 10
      const zoneIdx = i < zoneAssignment.length ? zoneAssignment[i] : 1;
      if (zones[zoneIdx]) {
        zones[zoneIdx].appendChild(station);
      }

      this.buttons.push(btn);

      // Click support
      btn.addEventListener('click', () => this._handlePress(i));
    }

    // Keyboard support
    document.addEventListener('keydown', (e) => {
      if (e.repeat) return;
      const musicianId = CONFIG.keyMap[e.code];
      if (musicianId !== undefined) {
        e.preventDefault();
        this._handlePress(musicianId);
      }
    });
  }

  _handlePress(musicianId) {
    const success = this.ensemble.tryAdvance(musicianId);
    if (success) {
      // Flash animation
      const btn = this.buttons[musicianId];
      btn.classList.add('pressed');
      setTimeout(() => btn.classList.remove('pressed'), 200);

      if (this._onPress) this._onPress(musicianId);
    }
  }

  onPress(callback) {
    this._onPress = callback;
  }

  // Update visual state of all buttons based on ensemble state
  updateStates() {
    for (let i = 0; i < CONFIG.musicianCount; i++) {
      const m = this.ensemble.musicians[i];
      const btn = this.buttons[i];

      btn.classList.remove('eligible', 'queued', 'cooldown', 'ineligible');

      if (m.offline) {
        btn.classList.add('ineligible');
      } else if (m.advanceQueued) {
        btn.classList.add('queued');
      } else if (m.cooldownActive) {
        btn.classList.add('cooldown');
      } else if (this.ensemble.isEligible(i)) {
        btn.classList.add('eligible');
      } else {
        btn.classList.add('ineligible');
      }
    }
  }
}
