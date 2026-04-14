// In C: Audience Ensemble — Demo Mode
// Auto-triggers random valid button presses for hands-free demonstration.

import { CONFIG } from './config.js';

export class DemoMode {
  constructor(ensemble) {
    this.ensemble = ensemble;
    this.active = false;
    this._intervalId = null;
    this._onPress = null; // callback when demo triggers a press
  }

  onPress(callback) {
    this._onPress = callback;
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
    if (this.active) return;
    this.active = true;
    this._intervalId = setInterval(() => this._tick(), CONFIG.demoIntervalMs);
  }

  stop() {
    this.active = false;
    if (this._intervalId !== null) {
      clearInterval(this._intervalId);
      this._intervalId = null;
    }
  }

  _tick() {
    const eligible = this.ensemble.getEligible();
    if (eligible.length === 0) return;

    // ~30% chance to skip this tick entirely (do nothing)
    if (Math.random() < 0.3) return;

    // ~20% chance to advance two musicians at once
    const advanceTwo = Math.random() < 0.2 && eligible.length >= 2;

    // Pick first musician
    const idx1 = Math.floor(Math.random() * eligible.length);
    const id1 = eligible[idx1];
    const success1 = this.ensemble.tryAdvance(id1);
    if (success1 && this._onPress) {
      this._onPress(id1);
    }

    // Optionally pick a second (different) musician
    if (advanceTwo) {
      const remaining = eligible.filter(id => id !== id1);
      if (remaining.length > 0) {
        const idx2 = Math.floor(Math.random() * remaining.length);
        const id2 = remaining[idx2];
        const success2 = this.ensemble.tryAdvance(id2);
        if (success2 && this._onPress) {
          this._onPress(id2);
        }
      }
    }
  }
}
