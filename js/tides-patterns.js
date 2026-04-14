// Tides — 38 Patterns
//
// An original composition for the Audience Ensemble engine.
// Mode: E Phrygian (E F G A B C D), 92 BPM, 38 patterns.
//
// Arc: Still -> Surge -> Deep -> Crest -> Shore
//
// Design goals:
// - The Phrygian half-step (E-F) as a recurring signature color
// - Open fifths (E-B) as the harmonic anchor
// - Slower BPM for a wave-like, breathing quality
// - Pattern lengths chosen for rich phasing (3, 5, 6, 7, 8, 9, 10, 12, 14, 16, 24)
// - Adjacent patterns always share common tones within E Phrygian
// - Clear registral arc: low -> mid -> wide -> high -> settling
//
// Each pattern is an array of note events: { note, duration }
// - note: MIDI note number (0 = rest)
// - duration: in eighth-note units (1 = eighth, 2 = quarter, 4 = half, 8 = whole)
//   Grace notes have duration 0.
//
// MIDI note mapping (E Phrygian):
//   E2=40, F2=41, G2=43, A2=45, B2=47, C3=48, D3=50
//   E3=52, F3=53, G3=55, A3=57, B3=59, C4=60, D4=62
//   E4=64, F4=65, G4=67, A4=69, B4=71, C5=72, D5=74
//   E5=76

export const TIDES_PATTERNS = [

  // ===== Pattern 0: Silence =====
  [
    { note: 0, duration: 8 },
  ],

  // =========================================================================
  // SECTION 1: STILL (Patterns 1-8)
  // Open fifths, low drones, and the first hint of the Phrygian half-step.
  // The ensemble finds the pitch world before anything moves.
  // =========================================================================

  // Pattern 1: signature call — open fifth, grace-note E into B
  [
    { note: 52, duration: 0 },    // E3 grace
    { note: 59, duration: 3 },    // B3 dotted quarter
    { note: 52, duration: 0 },    // E3 grace
    { note: 59, duration: 3 },    // B3 dotted quarter
  ],

  // Pattern 2: low drone
  [
    { note: 40, duration: 16 },   // E2 double whole
  ],

  // Pattern 3: Phrygian whisper — the half-step color appears
  [
    { note: 64, duration: 2 },    // E4 quarter
    { note: 65, duration: 1 },    // F4 eighth
    { note: 64, duration: 3 },    // E4 dotted quarter
  ],

  // Pattern 4: gentle rise from rest
  [
    { note: 0, duration: 2 },     // quarter rest
    { note: 55, duration: 2 },    // G3 quarter
    { note: 57, duration: 2 },    // A3 quarter
    { note: 59, duration: 2 },    // B3 quarter
  ],

  // Pattern 5: low fifth answer
  [
    { note: 40, duration: 4 },    // E2 half
    { note: 47, duration: 4 },    // B2 half
  ],

  // Pattern 6: tiny Phrygian turn
  [
    { note: 65, duration: 0.5 },  // F4 sixteenth
    { note: 64, duration: 0.5 },  // E4 sixteenth
  ],

  // Pattern 7: sustained upper E — harmonic anchor
  [
    { note: 64, duration: 8 },    // E4 whole
  ],

  // Pattern 8: first melody — stepwise arc
  [
    { note: 59, duration: 2 },    // B3 quarter
    { note: 60, duration: 2 },    // C4 quarter
    { note: 62, duration: 2 },    // D4 quarter
    { note: 60, duration: 2 },    // C4 quarter
    { note: 59, duration: 2 },    // B3 quarter
  ],

  // =========================================================================
  // SECTION 2: SURGE (Patterns 9-17)
  // Mid-register motion arrives. The Phrygian E-F pull becomes a recurring
  // gesture. Patterns get shorter and more rhythmically active.
  // =========================================================================

  // Pattern 9: rising tide
  [
    { note: 52, duration: 1 },    // E3 eighth
    { note: 55, duration: 1 },    // G3 eighth
    { note: 57, duration: 1 },    // A3 eighth
    { note: 59, duration: 1 },    // B3 eighth
    { note: 60, duration: 2 },    // C4 quarter
    { note: 59, duration: 2 },    // B3 quarter
  ],

  // Pattern 10: Phrygian cascade
  [
    { note: 64, duration: 1 },    // E4 eighth
    { note: 62, duration: 1 },    // D4 eighth
    { note: 60, duration: 1 },    // C4 eighth
    { note: 59, duration: 1 },    // B3 eighth
    { note: 57, duration: 2 },    // A3 quarter
  ],

  // Pattern 11: rocking figure — builds momentum
  [
    { note: 59, duration: 1 },    // B3 eighth
    { note: 64, duration: 1 },    // E4 eighth
    { note: 59, duration: 1 },    // B3 eighth
    { note: 64, duration: 1 },    // E4 eighth
    { note: 59, duration: 1 },    // B3 eighth
    { note: 64, duration: 1 },    // E4 eighth
    { note: 67, duration: 2 },    // G4 quarter
  ],

  // Pattern 12: the pull — F against E, the modal heart
  [
    { note: 52, duration: 0 },    // E3 grace
    { note: 65, duration: 2 },    // F4 quarter
    { note: 64, duration: 4 },    // E4 half
    { note: 65, duration: 1 },    // F4 eighth
    { note: 64, duration: 1 },    // E4 eighth
  ],

  // Pattern 13: undercurrent
  [
    { note: 45, duration: 3 },    // A2 dotted quarter
    { note: 47, duration: 3 },    // B2 dotted quarter
    { note: 48, duration: 2 },    // C3 quarter
  ],

  // Pattern 14: burst and settle
  [
    { note: 0, duration: 1 },     // eighth rest
    { note: 67, duration: 0.5 },  // G4 sixteenth
    { note: 69, duration: 0.5 },  // A4 sixteenth
    { note: 71, duration: 2 },    // B4 quarter
    { note: 69, duration: 2 },    // A4 quarter
    { note: 67, duration: 2 },    // G4 quarter
  ],

  // Pattern 15: stacked fifths — vertical anchor
  [
    { note: 52, duration: 3 },    // E3 dotted quarter
    { note: 59, duration: 3 },    // B3 dotted quarter
    { note: 64, duration: 3 },    // E4 dotted quarter
  ],

  // Pattern 16: quick turn
  [
    { note: 62, duration: 1 },    // D4 eighth
    { note: 60, duration: 1 },    // C4 eighth
    { note: 59, duration: 1 },    // B3 eighth
    { note: 60, duration: 1 },    // C4 eighth
    { note: 62, duration: 1 },    // D4 eighth
  ],

  // Pattern 17: tidal swell — longest in this section
  [
    { note: 55, duration: 2 },    // G3 quarter
    { note: 57, duration: 2 },    // A3 quarter
    { note: 59, duration: 2 },    // B3 quarter
    { note: 60, duration: 2 },    // C4 quarter
    { note: 62, duration: 2 },    // D4 quarter
    { note: 64, duration: 4 },    // E4 half
  ],

  // =========================================================================
  // SECTION 3: DEEP (Patterns 18-25)
  // The widest register span. Low bells answer high laments. The texture
  // reaches its most complex layering before the crest.
  // =========================================================================

  // Pattern 18: deep bell — low E tolling with silence between
  [
    { note: 40, duration: 4 },    // E2 half
    { note: 0, duration: 4 },     // half rest
    { note: 40, duration: 4 },    // E2 half
    { note: 47, duration: 4 },    // B2 half
  ],

  // Pattern 19: high lament
  [
    { note: 76, duration: 2 },    // E5 quarter
    { note: 74, duration: 1 },    // D5 eighth
    { note: 72, duration: 1 },    // C5 eighth
    { note: 71, duration: 2 },    // B4 quarter
    { note: 69, duration: 2 },    // A4 quarter
  ],

  // Pattern 20: wandering arpeggio
  [
    { note: 0, duration: 1 },     // eighth rest
    { note: 64, duration: 1 },    // E4 eighth
    { note: 67, duration: 1 },    // G4 eighth
    { note: 71, duration: 1 },    // B4 eighth
    { note: 72, duration: 2 },    // C5 quarter
    { note: 71, duration: 2 },    // B4 quarter
    { note: 67, duration: 2 },    // G4 quarter
  ],

  // Pattern 21: Phrygian cadence — the mode's gravity
  [
    { note: 65, duration: 3 },    // F4 dotted quarter
    { note: 64, duration: 6 },    // E4 dotted half
  ],

  // Pattern 22: spinning figure
  [
    { note: 71, duration: 0.5 },  // B4 sixteenth
    { note: 72, duration: 0.5 },  // C5 sixteenth
    { note: 71, duration: 0.5 },  // B4 sixteenth
    { note: 69, duration: 0.5 },  // A4 sixteenth
    { note: 71, duration: 0.5 },  // B4 sixteenth
    { note: 67, duration: 0.5 },  // G4 sixteenth
  ],

  // Pattern 23: wide arc — spans nearly the full range
  [
    { note: 52, duration: 2 },    // E3 quarter
    { note: 59, duration: 2 },    // B3 quarter
    { note: 67, duration: 2 },    // G4 quarter
    { note: 71, duration: 2 },    // B4 quarter
    { note: 76, duration: 4 },    // E5 half
  ],

  // Pattern 24: darkness — the Phrygian floor (F resolving to E)
  [
    { note: 41, duration: 2 },    // F2 quarter
    { note: 40, duration: 6 },    // E2 dotted half
  ],

  // Pattern 25: answering fall
  [
    { note: 74, duration: 1 },    // D5 eighth
    { note: 72, duration: 1 },    // C5 eighth
    { note: 71, duration: 1 },    // B4 eighth
    { note: 69, duration: 1 },    // A4 eighth
    { note: 67, duration: 2 },    // G4 quarter
    { note: 64, duration: 2 },    // E4 quarter
  ],

  // =========================================================================
  // SECTION 4: CREST (Patterns 26-32)
  // The piece reaches its brightest and most active point. Fast loops,
  // registral extremes, and the densest interlocking texture.
  // =========================================================================

  // Pattern 26: racing scale — up and back
  [
    { note: 64, duration: 1 },    // E4 eighth
    { note: 67, duration: 1 },    // G4 eighth
    { note: 69, duration: 1 },    // A4 eighth
    { note: 71, duration: 1 },    // B4 eighth
    { note: 72, duration: 1 },    // C5 eighth
    { note: 71, duration: 1 },    // B4 eighth
    { note: 69, duration: 1 },    // A4 eighth
    { note: 67, duration: 1 },    // G4 eighth
  ],

  // Pattern 27: quick Phrygian bite
  [
    { note: 65, duration: 0.5 },  // F4 sixteenth
    { note: 64, duration: 0.5 },  // E4 sixteenth
    { note: 65, duration: 0.5 },  // F4 sixteenth
    { note: 67, duration: 0.5 },  // G4 sixteenth
    { note: 64, duration: 1 },    // E4 eighth
  ],

  // Pattern 28: high beacon
  [
    { note: 76, duration: 2 },    // E5 quarter
    { note: 72, duration: 2 },    // C5 quarter
    { note: 76, duration: 4 },    // E5 half
  ],

  // Pattern 29: tumbling down from rest
  [
    { note: 0, duration: 1 },     // eighth rest
    { note: 72, duration: 1 },    // C5 eighth
    { note: 71, duration: 1 },    // B4 eighth
    { note: 69, duration: 1 },    // A4 eighth
    { note: 67, duration: 1 },    // G4 eighth
    { note: 64, duration: 1 },    // E4 eighth
    { note: 62, duration: 1 },    // D4 eighth
  ],

  // Pattern 30: bright whirl
  [
    { note: 69, duration: 0.5 },  // A4 sixteenth
    { note: 71, duration: 0.5 },  // B4 sixteenth
    { note: 72, duration: 0.5 },  // C5 sixteenth
    { note: 74, duration: 0.5 },  // D5 sixteenth
    { note: 76, duration: 2 },    // E5 quarter
    { note: 74, duration: 1 },    // D5 eighth
    { note: 72, duration: 1 },    // C5 eighth
  ],

  // Pattern 31: pedal with sparks
  [
    { note: 64, duration: 4 },    // E4 half
    { note: 71, duration: 0.5 },  // B4 sixteenth
    { note: 72, duration: 0.5 },  // C5 sixteenth
    { note: 64, duration: 4 },    // E4 half
  ],

  // Pattern 32: two-note cry — Phrygian tension at maximum height
  [
    { note: 65, duration: 1 },    // F4 eighth
    { note: 76, duration: 1 },    // E5 eighth
  ],

  // =========================================================================
  // SECTION 5: SHORE (Patterns 33-38)
  // The motion opens back out. Density trades for resonance. The Phrygian
  // half-step makes a final appearance before the open fifth returns.
  // =========================================================================

  // Pattern 33: retreating — stepwise descent to B
  [
    { note: 67, duration: 2 },    // G4 quarter
    { note: 64, duration: 2 },    // E4 quarter
    { note: 62, duration: 2 },    // D4 quarter
    { note: 60, duration: 2 },    // C4 quarter
    { note: 59, duration: 4 },    // B3 half
  ],

  // Pattern 34: memory of the call — signature transformed
  [
    { note: 52, duration: 0 },    // E3 grace
    { note: 59, duration: 3 },    // B3 dotted quarter
    { note: 57, duration: 3 },    // A3 dotted quarter
    { note: 55, duration: 2 },    // G3 quarter
  ],

  // Pattern 35: last whisper of F
  [
    { note: 0, duration: 2 },     // quarter rest
    { note: 53, duration: 1 },    // F3 eighth
    { note: 52, duration: 3 },    // E3 dotted quarter
  ],

  // Pattern 36: settling — stacked thirds descend to drone
  [
    { note: 59, duration: 4 },    // B3 half
    { note: 55, duration: 4 },    // G3 half
    { note: 52, duration: 8 },    // E3 whole
  ],

  // Pattern 37: last breath — octave E flicker
  [
    { note: 64, duration: 0.5 },  // E4 sixteenth
    { note: 52, duration: 0.5 },  // E3 sixteenth
  ],

  // Pattern 38: final horizon — low open fifths dissolving
  [
    { note: 40, duration: 8 },    // E2 whole
    { note: 47, duration: 8 },    // B2 whole
    { note: 52, duration: 8 },    // E3 whole
  ],
];
