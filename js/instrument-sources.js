// In C: Audience Ensemble — Instrument Source Abstraction
// Supports two audio sources:
//   'soundfont' — 128 General MIDI instruments via soundfont-player (MusyngKite)
//   'tonejs'    — 20 high-quality sampled instruments via Tone.js + tonejs-instruments

// ─── Tone.js Instrument Bank ─────────────────────────────────────────────────

export const TONEJS_INSTRUMENT_BANK = {
  'Piano': ['piano'],
  'Strings': ['violin', 'cello', 'contrabass'],
  'Brass': ['french-horn', 'trumpet', 'trombone', 'tuba'],
  'Woodwinds': ['flute', 'clarinet', 'bassoon', 'saxophone'],
  'Guitar': ['guitar-acoustic', 'guitar-electric', 'guitar-nylon'],
  'Other Strings': ['harp'],
  'Keys': ['harmonium', 'organ'],
  'Bass': ['bass-electric'],
  'Percussion': ['xylophone'],
};

export const ALL_TONEJS_INSTRUMENTS = Object.values(TONEJS_INSTRUMENT_BANK).flat();

// ─── Tone.js Sample Maps ────────────────────────────────────────────────────
// Each instrument maps note names to filenames. Tone.Sampler interpolates
// between available samples automatically.
// Samples hosted at: https://nbrosowsky.github.io/tonejs-instruments/samples/

const TONEJS_BASE_URL = 'https://nbrosowsky.github.io/tonejs-instruments/samples/';

const TONEJS_SAMPLE_MAPS = {
  'bass-electric': {
    'A#1':'As1.mp3','A#2':'As2.mp3','A#3':'As3.mp3','A#4':'As4.mp3',
    'C#1':'Cs1.mp3','C#2':'Cs2.mp3','C#3':'Cs3.mp3','C#4':'Cs4.mp3',
    'E1':'E1.mp3','E2':'E2.mp3','E3':'E3.mp3','E4':'E4.mp3',
    'G1':'G1.mp3','G2':'G2.mp3','G3':'G3.mp3','G4':'G4.mp3',
  },
  'bassoon': {
    'A2':'A2.mp3','A3':'A3.mp3','A4':'A4.mp3',
    'C3':'C3.mp3','C4':'C4.mp3','C5':'C5.mp3',
    'E4':'E4.mp3','G2':'G2.mp3','G3':'G3.mp3','G4':'G4.mp3',
  },
  'cello': {
    'A2':'A2.mp3','A3':'A3.mp3','A4':'A4.mp3',
    'A#2':'As2.mp3','A#3':'As3.mp3',
    'B2':'B2.mp3','B3':'B3.mp3','B4':'B4.mp3',
    'C2':'C2.mp3','C3':'C3.mp3','C4':'C4.mp3','C5':'C5.mp3',
    'C#3':'Cs3.mp3','C#4':'Cs4.mp3',
    'D2':'D2.mp3','D3':'D3.mp3','D4':'D4.mp3',
    'D#2':'Ds2.mp3','D#3':'Ds3.mp3','D#4':'Ds4.mp3',
    'E2':'E2.mp3','E3':'E3.mp3','E4':'E4.mp3',
    'F2':'F2.mp3','F3':'F3.mp3','F4':'F4.mp3',
    'F#3':'Fs3.mp3','F#4':'Fs4.mp3',
    'G2':'G2.mp3','G3':'G3.mp3','G4':'G4.mp3',
    'G#2':'Gs2.mp3','G#3':'Gs3.mp3','G#4':'Gs4.mp3',
  },
  'clarinet': {
    'A#3':'As3.mp3','A#4':'As4.mp3','A#5':'As5.mp3',
    'D3':'D3.mp3','D4':'D4.mp3','D5':'D5.mp3','D6':'D6.mp3',
    'F3':'F3.mp3','F4':'F4.mp3','F5':'F5.mp3','F#6':'Fs6.mp3',
  },
  'contrabass': {
    'A2':'A2.mp3','A#1':'As1.mp3','B3':'B3.mp3',
    'C2':'C2.mp3','C#3':'Cs3.mp3','D2':'D2.mp3',
    'E2':'E2.mp3','E3':'E3.mp3',
    'F#1':'Fs1.mp3','F#2':'Fs2.mp3',
    'G1':'G1.mp3','G#2':'Gs2.mp3','G#3':'Gs3.mp3',
  },
  'flute': {
    'A4':'A4.mp3','A5':'A5.mp3','A6':'A6.mp3',
    'C4':'C4.mp3','C5':'C5.mp3','C6':'C6.mp3','C7':'C7.mp3',
    'E4':'E4.mp3','E5':'E5.mp3','E6':'E6.mp3',
  },
  'french-horn': {
    'A1':'A1.mp3','A3':'A3.mp3',
    'C2':'C2.mp3','C4':'C4.mp3',
    'D3':'D3.mp3','D5':'D5.mp3',
    'D#2':'Ds2.mp3',
    'F3':'F3.mp3','F5':'F5.mp3',
    'G2':'G2.mp3',
  },
  'guitar-acoustic': {
    'A2':'A2.mp3','A3':'A3.mp3','A4':'A4.mp3',
    'A#2':'As2.mp3','A#3':'As3.mp3','A#4':'As4.mp3',
    'B2':'B2.mp3','B3':'B3.mp3','B4':'B4.mp3',
    'C3':'C3.mp3','C4':'C4.mp3','C5':'C5.mp3',
    'C#3':'Cs3.mp3','C#4':'Cs4.mp3','C#5':'Cs5.mp3',
    'D2':'D2.mp3','D3':'D3.mp3','D4':'D4.mp3','D5':'D5.mp3',
    'D#2':'Ds2.mp3','D#3':'Ds3.mp3','D#4':'Ds4.mp3',
    'E2':'E2.mp3','E3':'E3.mp3','E4':'E4.mp3',
    'F2':'F2.mp3','F3':'F3.mp3','F4':'F4.mp3',
    'F#2':'Fs2.mp3','F#3':'Fs3.mp3','F#4':'Fs4.mp3',
    'G2':'G2.mp3','G3':'G3.mp3','G4':'G4.mp3',
    'G#2':'Gs2.mp3','G#3':'Gs3.mp3','G#4':'Gs4.mp3',
  },
  'guitar-electric': {
    'A2':'A2.mp3','A3':'A3.mp3','A4':'A4.mp3','A5':'A5.mp3',
    'C3':'C3.mp3','C4':'C4.mp3','C5':'C5.mp3','C6':'C6.mp3',
    'C#2':'Cs2.mp3',
    'D#3':'Ds3.mp3','D#4':'Ds4.mp3','D#5':'Ds5.mp3',
    'E2':'E2.mp3',
    'F#2':'Fs2.mp3','F#3':'Fs3.mp3','F#4':'Fs4.mp3','F#5':'Fs5.mp3',
  },
  'guitar-nylon': {
    'A2':'A2.mp3','A3':'A3.mp3','A4':'A4.mp3','A5':'A5.mp3','A#5':'As5.mp3',
    'B1':'B1.mp3','B2':'B2.mp3','B3':'B3.mp3','B4':'B4.mp3',
    'C#3':'Cs3.mp3','C#4':'Cs4.mp3','C#5':'Cs5.mp3',
    'D2':'D2.mp3','D3':'D3.mp3','D5':'D5.mp3',
    'D#4':'Ds4.mp3',
    'E2':'E2.mp3','E3':'E3.mp3','E4':'E4.mp3','E5':'E5.mp3',
    'F#2':'Fs2.mp3','F#3':'Fs3.mp3','F#4':'Fs4.mp3','F#5':'Fs5.mp3',
    'G3':'G3.mp3','G5':'G5.mp3',
    'G#2':'Gs2.mp3','G#4':'Gs4.mp3','G#5':'Gs5.mp3',
  },
  'harmonium': {
    'A2':'A2.mp3','A3':'A3.mp3','A4':'A4.mp3',
    'A#2':'As2.mp3','A#3':'As3.mp3','A#4':'As4.mp3',
    'C2':'C2.mp3','C3':'C3.mp3','C4':'C4.mp3','C5':'C5.mp3',
    'C#2':'Cs2.mp3','C#3':'Cs3.mp3','C#4':'Cs4.mp3','C#5':'Cs5.mp3',
    'D2':'D2.mp3','D3':'D3.mp3','D4':'D4.mp3','D5':'D5.mp3',
    'D#2':'Ds2.mp3','D#3':'Ds3.mp3','D#4':'Ds4.mp3',
    'E2':'E2.mp3','E3':'E3.mp3','E4':'E4.mp3',
    'F2':'F2.mp3','F3':'F3.mp3','F4':'F4.mp3',
    'F#2':'Fs2.mp3','F#3':'Fs3.mp3',
    'G2':'G2.mp3','G3':'G3.mp3','G4':'G4.mp3',
    'G#2':'Gs2.mp3','G#3':'Gs3.mp3','G#4':'Gs4.mp3',
  },
  'harp': {
    'A2':'A2.mp3','A4':'A4.mp3','A6':'A6.mp3',
    'B1':'B1.mp3','B3':'B3.mp3','B5':'B5.mp3','B6':'B6.mp3',
    'C3':'C3.mp3','C5':'C5.mp3',
    'D2':'D2.mp3','D4':'D4.mp3','D6':'D6.mp3','D7':'D7.mp3',
    'E1':'E1.mp3','E3':'E3.mp3','E5':'E5.mp3',
    'F2':'F2.mp3','F4':'F4.mp3','F6':'F6.mp3','F7':'F7.mp3',
    'G1':'G1.mp3','G3':'G3.mp3','G5':'G5.mp3',
  },
  'organ': {
    'A1':'A1.mp3','A2':'A2.mp3','A3':'A3.mp3','A4':'A4.mp3','A5':'A5.mp3',
    'C1':'C1.mp3','C2':'C2.mp3','C3':'C3.mp3','C4':'C4.mp3','C5':'C5.mp3','C6':'C6.mp3',
    'D#1':'Ds1.mp3','D#2':'Ds2.mp3','D#3':'Ds3.mp3','D#4':'Ds4.mp3','D#5':'Ds5.mp3',
    'F#1':'Fs1.mp3','F#2':'Fs2.mp3','F#3':'Fs3.mp3','F#4':'Fs4.mp3','F#5':'Fs5.mp3',
  },
  'piano': {
    'A1':'A1.mp3','A2':'A2.mp3','A3':'A3.mp3','A4':'A4.mp3','A5':'A5.mp3','A6':'A6.mp3','A7':'A7.mp3',
    'B1':'B1.mp3','B2':'B2.mp3','B3':'B3.mp3','B4':'B4.mp3','B5':'B5.mp3','B6':'B6.mp3','B7':'B7.mp3',
    'C1':'C1.mp3','C2':'C2.mp3','C3':'C3.mp3','C4':'C4.mp3','C5':'C5.mp3','C6':'C6.mp3','C7':'C7.mp3',
    'C#1':'Cs1.mp3','C#2':'Cs2.mp3','C#3':'Cs3.mp3','C#4':'Cs4.mp3','C#5':'Cs5.mp3','C#6':'Cs6.mp3','C#7':'Cs7.mp3',
    'D1':'D1.mp3','D2':'D2.mp3','D3':'D3.mp3','D4':'D4.mp3','D5':'D5.mp3','D6':'D6.mp3','D7':'D7.mp3',
    'D#1':'Ds1.mp3','D#2':'Ds2.mp3','D#3':'Ds3.mp3','D#4':'Ds4.mp3','D#5':'Ds5.mp3','D#6':'Ds6.mp3','D#7':'Ds7.mp3',
    'E1':'E1.mp3','E2':'E2.mp3','E3':'E3.mp3','E4':'E4.mp3','E5':'E5.mp3','E6':'E6.mp3','E7':'E7.mp3',
    'F1':'F1.mp3','F2':'F2.mp3','F3':'F3.mp3','F4':'F4.mp3','F5':'F5.mp3','F6':'F6.mp3','F7':'F7.mp3',
    'F#1':'Fs1.mp3','F#2':'Fs2.mp3','F#3':'Fs3.mp3','F#4':'Fs4.mp3','F#5':'Fs5.mp3','F#6':'Fs6.mp3','F#7':'Fs7.mp3',
    'G1':'G1.mp3','G2':'G2.mp3','G3':'G3.mp3','G4':'G4.mp3','G5':'G5.mp3','G6':'G6.mp3','G7':'G7.mp3',
    'G#1':'Gs1.mp3','G#2':'Gs2.mp3','G#3':'Gs3.mp3','G#4':'Gs4.mp3','G#5':'Gs5.mp3','G#6':'Gs6.mp3','G#7':'Gs7.mp3',
  },
  'saxophone': {
    'A4':'A4.mp3','A5':'A5.mp3',
    'A#3':'As3.mp3','A#4':'As4.mp3',
    'B3':'B3.mp3','B4':'B4.mp3',
    'C4':'C4.mp3','C5':'C5.mp3',
    'C#3':'Cs3.mp3','C#4':'Cs4.mp3','C#5':'Cs5.mp3',
    'D3':'D3.mp3','D4':'D4.mp3','D5':'D5.mp3',
    'D#3':'Ds3.mp3','D#4':'Ds4.mp3','D#5':'Ds5.mp3',
    'E3':'E3.mp3','E4':'E4.mp3','E5':'E5.mp3',
    'F3':'F3.mp3','F4':'F4.mp3','F5':'F5.mp3',
    'F#3':'Fs3.mp3','F#4':'Fs4.mp3','F#5':'Fs5.mp3',
    'G3':'G3.mp3','G4':'G4.mp3','G5':'G5.mp3',
    'G#3':'Gs3.mp3','G#4':'Gs4.mp3','G#5':'Gs5.mp3',
  },
  'trombone': {
    'A#1':'As1.mp3','A#2':'As2.mp3','A#3':'As3.mp3',
    'C3':'C3.mp3','C4':'C4.mp3',
    'C#2':'Cs2.mp3','C#4':'Cs4.mp3',
    'D3':'D3.mp3','D4':'D4.mp3',
    'D#2':'Ds2.mp3','D#3':'Ds3.mp3','D#4':'Ds4.mp3',
    'F2':'F2.mp3','F3':'F3.mp3','F4':'F4.mp3',
    'G#2':'Gs2.mp3','G#3':'Gs3.mp3',
  },
  'trumpet': {
    'A3':'A3.mp3','A5':'A5.mp3',
    'A#4':'As4.mp3',
    'C4':'C4.mp3','C6':'C6.mp3',
    'D5':'D5.mp3','D#4':'Ds4.mp3',
    'F3':'F3.mp3','F4':'F4.mp3','F5':'F5.mp3',
    'G4':'G4.mp3',
  },
  'tuba': {
    'A#1':'As1.mp3','A#2':'As2.mp3','A#3':'As3.mp3',
    'D3':'D3.mp3','D4':'D4.mp3',
    'D#2':'Ds2.mp3',
    'F1':'F1.mp3','F2':'F2.mp3','F3':'F3.mp3',
  },
  'violin': {
    'A3':'A3.mp3','A4':'A4.mp3','A5':'A5.mp3','A6':'A6.mp3',
    'C4':'C4.mp3','C5':'C5.mp3','C6':'C6.mp3','C7':'C7.mp3',
    'E4':'E4.mp3','E5':'E5.mp3','E6':'E6.mp3',
    'G4':'G4.mp3','G5':'G5.mp3','G6':'G6.mp3',
  },
  'xylophone': {
    'C5':'C5.mp3','C6':'C6.mp3','C7':'C7.mp3','C8':'C8.mp3',
    'G4':'G4.mp3','G5':'G5.mp3','G6':'G6.mp3','G7':'G7.mp3',
  },
};

// ─── Name Mappings (SoundFont ↔ Tone.js) ────────────────────────────────────

export const SOUNDFONT_TO_TONEJS = {
  // Piano
  acoustic_grand_piano: 'piano',
  bright_acoustic_piano: 'piano',
  electric_grand_piano: 'piano',
  honkytonk_piano: 'piano',
  electric_piano_1: 'piano',
  electric_piano_2: 'piano',
  harpsichord: 'piano',
  clavinet: 'piano',
  // Chromatic Percussion
  celesta: 'xylophone',
  glockenspiel: 'xylophone',
  music_box: 'piano',
  vibraphone: 'xylophone',
  marimba: 'xylophone',
  xylophone: 'xylophone',
  tubular_bells: 'xylophone',
  dulcimer: 'piano',
  // Organ
  drawbar_organ: 'organ',
  percussive_organ: 'organ',
  rock_organ: 'organ',
  church_organ: 'organ',
  reed_organ: 'harmonium',
  accordion: 'harmonium',
  harmonica: 'harmonium',
  tango_accordion: 'harmonium',
  // Guitar
  acoustic_guitar_nylon: 'guitar-nylon',
  acoustic_guitar_steel: 'guitar-acoustic',
  electric_guitar_jazz: 'guitar-electric',
  electric_guitar_clean: 'guitar-electric',
  electric_guitar_muted: 'guitar-electric',
  overdriven_guitar: 'guitar-electric',
  distortion_guitar: 'guitar-electric',
  guitar_harmonics: 'guitar-acoustic',
  // Bass
  acoustic_bass: 'contrabass',
  electric_bass_finger: 'bass-electric',
  electric_bass_pick: 'bass-electric',
  fretless_bass: 'bass-electric',
  slap_bass_1: 'bass-electric',
  slap_bass_2: 'bass-electric',
  synth_bass_1: 'bass-electric',
  synth_bass_2: 'bass-electric',
  // Strings
  violin: 'violin',
  viola: 'violin',
  cello: 'cello',
  contrabass: 'contrabass',
  tremolo_strings: 'violin',
  pizzicato_strings: 'violin',
  orchestral_harp: 'harp',
  timpani: 'xylophone',
  // Ensemble
  string_ensemble_1: 'violin',
  string_ensemble_2: 'cello',
  synth_strings_1: 'violin',
  synth_strings_2: 'cello',
  choir_aahs: 'harmonium',
  voice_oohs: 'harmonium',
  synth_choir: 'harmonium',
  orchestra_hit: 'piano',
  // Brass
  trumpet: 'trumpet',
  trombone: 'trombone',
  tuba: 'tuba',
  muted_trumpet: 'trumpet',
  french_horn: 'french-horn',
  brass_section: 'trombone',
  synth_brass_1: 'trumpet',
  synth_brass_2: 'trombone',
  // Reed
  soprano_sax: 'saxophone',
  alto_sax: 'saxophone',
  tenor_sax: 'saxophone',
  baritone_sax: 'saxophone',
  // Pipe
  oboe: 'clarinet',
  english_horn: 'clarinet',
  bassoon: 'bassoon',
  clarinet: 'clarinet',
  piccolo: 'flute',
  flute: 'flute',
  recorder: 'flute',
  pan_flute: 'flute',
  blown_bottle: 'flute',
  shakuhachi: 'flute',
  whistle: 'flute',
  ocarina: 'flute',
  // Synth Lead
  lead_1_square: 'organ',
  lead_2_sawtooth: 'organ',
  lead_3_calliope: 'organ',
  lead_4_chiff: 'organ',
  lead_5_charang: 'guitar-electric',
  lead_6_voice: 'harmonium',
  lead_7_fifths: 'organ',
  lead_8_bass__lead: 'bass-electric',
  // Synth Pad
  pad_1_new_age: 'harmonium',
  pad_2_warm: 'harmonium',
  pad_3_polysynth: 'organ',
  pad_4_choir: 'harmonium',
  pad_5_bowed: 'cello',
  pad_6_metallic: 'xylophone',
  pad_7_halo: 'harmonium',
  pad_8_sweep: 'harmonium',
  // Synth Effects
  fx_1_rain: 'piano',
  fx_2_soundtrack: 'harmonium',
  fx_3_crystal: 'xylophone',
  fx_4_atmosphere: 'harmonium',
  fx_5_brightness: 'piano',
  fx_6_goblins: 'organ',
  fx_7_echoes: 'piano',
  fx_8_scifi: 'organ',
  // Ethnic
  sitar: 'guitar-nylon',
  banjo: 'guitar-acoustic',
  shamisen: 'guitar-nylon',
  koto: 'harp',
  kalimba: 'xylophone',
  bagpipe: 'harmonium',
  fiddle: 'violin',
  shanai: 'clarinet',
  // Percussive
  tinkle_bell: 'xylophone',
  agogo: 'xylophone',
  steel_drums: 'xylophone',
  woodblock: 'xylophone',
  taiko_drum: 'xylophone',
  melodic_tom: 'xylophone',
  synth_drum: 'xylophone',
  reverse_cymbal: 'xylophone',
  // Sound Effects
  guitar_fret_noise: 'guitar-acoustic',
  breath_noise: 'flute',
  seashore: 'piano',
  bird_tweet: 'flute',
  telephone_ring: 'xylophone',
  helicopter: 'piano',
  applause: 'piano',
  gunshot: 'piano',
};

export const TONEJS_TO_SOUNDFONT = {
  'piano': 'acoustic_grand_piano',
  'french-horn': 'french_horn',
  'trumpet': 'trumpet',
  'trombone': 'trombone',
  'tuba': 'tuba',
  'violin': 'violin',
  'cello': 'cello',
  'contrabass': 'contrabass',
  'flute': 'flute',
  'clarinet': 'clarinet',
  'bassoon': 'bassoon',
  'saxophone': 'alto_sax',
  'guitar-acoustic': 'acoustic_guitar_steel',
  'guitar-electric': 'electric_guitar_clean',
  'guitar-nylon': 'acoustic_guitar_nylon',
  'harp': 'orchestral_harp',
  'xylophone': 'xylophone',
  'organ': 'church_organ',
  'harmonium': 'accordion',
  'bass-electric': 'electric_bass_finger',
};

// ─── Soft Tones Synth Bank ─────────────────────────────────────────────────
// Chillhop / lofi-style soft synthesizer presets using Tone.js built-in synths.
// No samples to load — instant, warm, mellow sounds.

export const SOFT_TONES_BANK = {
  'Keys': ['rhodes', 'wurlitzer', 'kalimba'],
  'Pads': ['lofi-pad', 'tape-pad', 'vinyl-wash'],
  'Plucks': ['muted-guitar', 'music-box'],
  'Bass': ['sub-bass', 'round-bass'],
};

export const ALL_SOFT_TONES = Object.values(SOFT_TONES_BANK).flat();

// Drum sample kits hosted by Tone.js — real drum sounds
const DRUM_SAMPLE_BASE = 'https://tonejs.github.io/audio/drum-samples/';

// Each preset uses a different drum kit. MIDI notes are mapped to drum hits:
//   ≤58 = kick, 59-63 = snare, 64-68 = tom1, 69-73 = tom2, 74-78 = tom3, ≥79 = hihat
const SOFT_TONE_CONFIGS = {
  'rhodes':       { kit: 'CR78' },       // vintage analog drum machine
  'wurlitzer':    { kit: 'KPR77' },      // lo-fi drum machine
  'kalimba':      { kit: 'Kit3' },       // soft acoustic kit
  'lofi-pad':     { kit: 'Kit8' },       // warm muffled kit
  'tape-pad':     { kit: 'Stark' },      // minimal, dry hits
  'vinyl-wash':   { kit: 'R8' },         // classic R8 samples
  'muted-guitar': { kit: 'breakbeat8' }, // breakbeat chops
  'music-box':    { kit: 'Bongos' },     // hand percussion
  'sub-bass':     { kit: 'LINN' },       // LinnDrum — iconic lo-fi
  'round-bass':   { kit: 'breakbeat9' }, // chopped break
};

// Mapping tables: Soft Tones ↔ SoundFont / Tone.js
const SOUNDFONT_TO_SOFTTONES = {
  acoustic_grand_piano: 'rhodes', bright_acoustic_piano: 'wurlitzer',
  electric_piano_1: 'rhodes', electric_piano_2: 'wurlitzer',
  harpsichord: 'kalimba', clavinet: 'wurlitzer',
  celesta: 'music-box', glockenspiel: 'music-box', music_box: 'music-box',
  vibraphone: 'kalimba', marimba: 'kalimba', xylophone: 'kalimba',
  church_organ: 'lofi-pad', drawbar_organ: 'tape-pad', reed_organ: 'tape-pad',
  accordion: 'tape-pad', harmonica: 'tape-pad',
  violin: 'vinyl-wash', viola: 'vinyl-wash', cello: 'tape-pad',
  contrabass: 'sub-bass', string_ensemble_1: 'lofi-pad', string_ensemble_2: 'vinyl-wash',
  trumpet: 'wurlitzer', trombone: 'tape-pad', tuba: 'sub-bass',
  french_horn: 'lofi-pad', brass_section: 'lofi-pad',
  flute: 'music-box', clarinet: 'tape-pad', bassoon: 'round-bass',
  alto_sax: 'wurlitzer', tenor_sax: 'rhodes',
  acoustic_guitar_nylon: 'muted-guitar', acoustic_guitar_steel: 'muted-guitar',
  electric_guitar_clean: 'muted-guitar', orchestral_harp: 'kalimba',
  electric_bass_finger: 'round-bass',
};

const SOFTTONES_TO_SOUNDFONT = {
  'rhodes': 'electric_piano_1', 'wurlitzer': 'electric_piano_2',
  'kalimba': 'celesta', 'lofi-pad': 'pad_2_warm',
  'tape-pad': 'pad_7_halo', 'vinyl-wash': 'synth_strings_1',
  'muted-guitar': 'acoustic_guitar_nylon', 'music-box': 'music_box',
  'sub-bass': 'synth_bass_1', 'round-bass': 'electric_bass_finger',
};

const SOFTTONES_TO_TONEJS = {
  'rhodes': 'piano', 'wurlitzer': 'piano', 'kalimba': 'xylophone',
  'lofi-pad': 'harmonium', 'tape-pad': 'organ', 'vinyl-wash': 'harmonium',
  'muted-guitar': 'guitar-nylon', 'music-box': 'xylophone',
  'sub-bass': 'bass-electric', 'round-bass': 'bass-electric',
};

const TONEJS_TO_SOFTTONES = {
  'piano': 'rhodes', 'french-horn': 'lofi-pad', 'trumpet': 'wurlitzer',
  'trombone': 'tape-pad', 'tuba': 'sub-bass', 'violin': 'vinyl-wash',
  'cello': 'tape-pad', 'contrabass': 'sub-bass', 'flute': 'music-box',
  'clarinet': 'tape-pad', 'bassoon': 'round-bass', 'saxophone': 'wurlitzer',
  'guitar-acoustic': 'muted-guitar', 'guitar-electric': 'muted-guitar',
  'guitar-nylon': 'muted-guitar', 'harp': 'kalimba', 'xylophone': 'kalimba',
  'organ': 'lofi-pad', 'harmonium': 'tape-pad', 'bass-electric': 'round-bass',
};

// ─── Soft Tone Adapter (Drum Samples) ─────────────────────────────────────
// Maps MIDI note numbers to drum hits from Tone.js hosted sample kits.
// Low notes = kicks, mid = snares/toms, high = hihats.

const DRUM_HITS = ['kick', 'snare', 'tom1', 'tom2', 'tom3', 'hihat'];

// MIDI note → drum hit index
function midiToDrumHit(midi) {
  if (midi <= 58) return 'kick';
  if (midi <= 63) return 'snare';
  if (midi <= 68) return 'tom1';
  if (midi <= 73) return 'tom2';
  if (midi <= 78) return 'tom3';
  return 'hihat';
}

class SoftToneAdapter {
  constructor(players, filter, reverb) {
    this.players = players; // { kick: Tone.Player, snare: ..., etc }
    this.filter = filter;
    this.reverb = reverb;
  }

  play(noteName, when, options = {}) {
    const { gain = 0.8 } = options;

    // Convert note name back to MIDI to pick the drum hit
    const midi = this._noteNameToMidi(noteName);
    const hit = midiToDrumHit(midi);
    const player = this.players[hit];
    if (!player || !player.loaded) return { stop() {} };

    try {
      player.volume.value = this._gainToDb(gain * 0.7);
      const now = Tone.now();
      const offset = Math.max(0, when - Tone.context.currentTime);
      player.start(now + offset);
    } catch (e) {
      // Ignore scheduling errors
    }

    return {
      stop() {
        try { player.stop(); } catch (_) {}
      }
    };
  }

  _noteNameToMidi(name) {
    const match = name.match(/^([A-G]#?)(\d+)$/);
    if (!match) return 60;
    const noteMap = { C:0,'C#':1,D:2,'D#':3,E:4,F:5,'F#':6,G:7,'G#':8,A:9,'A#':10,B:11 };
    const semitone = noteMap[match[1]] ?? 0;
    const octave = parseInt(match[2]);
    return (octave + 1) * 12 + semitone;
  }

  _gainToDb(gain) {
    if (gain <= 0) return -Infinity;
    return 20 * Math.log10(gain);
  }
}

export async function loadSoftToneInstrument(name, destination) {
  const Tone = window.Tone;
  if (!Tone) throw new Error('Tone.js library not loaded');

  const config = SOFT_TONE_CONFIGS[name];
  if (!config) throw new Error(`Unknown soft tone preset: ${name}`);

  // Lo-fi effect chain
  const filter = new Tone.Filter(2500, 'lowpass', -12);
  const reverb = new Tone.Reverb({ decay: 1.8, wet: 0.3 });
  await reverb.generate();

  // Load all drum hits for this kit
  const kitUrl = `${DRUM_SAMPLE_BASE}${config.kit}/`;
  const players = {};

  const loadPromises = DRUM_HITS.map(hit => {
    return new Promise((resolve) => {
      const player = new Tone.Player({
        url: `${kitUrl}${hit}.mp3`,
        onload: () => resolve(),
        onerror: () => resolve(), // skip missing samples gracefully
      });
      player.chain(filter, reverb);
      if (destination) {
        reverb.connect(destination);
      } else {
        reverb.toDestination();
      }
      players[hit] = player;
    });
  });

  await Promise.all(loadPromises);
  return new SoftToneAdapter(players, filter, reverb);
}

// ─── Tone.js Instrument Adapter ─────────────────────────────────────────────
// Wraps a Tone.Sampler to present the same interface as soundfont-player:
//   .play(noteName, when, {duration, gain}) => {stop()}

class ToneJSInstrumentAdapter {
  constructor(sampler) {
    this.sampler = sampler;
  }

  play(noteName, when, options = {}) {
    const { duration = 1, gain = 0.8 } = options;
    try {
      this.sampler.volume.value = this._gainToDb(gain);
      this.sampler.triggerAttackRelease(noteName, duration, when);
    } catch (e) {
      // Ignore out-of-range or scheduling errors
    }

    // Return a node-like object with .stop() for MusicianVoice.stopAll()
    const sampler = this.sampler;
    return {
      stop() {
        try { sampler.releaseAll(); } catch (_) {}
      }
    };
  }

  _gainToDb(gain) {
    if (gain <= 0) return -Infinity;
    return 20 * Math.log10(gain);
  }
}

// ─── Loader Functions ───────────────────────────────────────────────────────

export async function loadSoundfontInstrument(audioCtx, instrumentName, destination) {
  const Soundfont = window.Soundfont;
  if (!Soundfont) throw new Error('Soundfont library not loaded');
  return Soundfont.instrument(audioCtx, instrumentName, {
    soundfont: 'MusyngKite',
    destination,
  });
}

export async function loadToneJSInstrument(instrumentName, destination) {
  const Tone = window.Tone;
  if (!Tone) throw new Error('Tone.js library not loaded');

  const sampleMap = TONEJS_SAMPLE_MAPS[instrumentName];
  if (!sampleMap) throw new Error(`No sample map for Tone.js instrument: ${instrumentName}`);

  const baseUrl = `${TONEJS_BASE_URL}${instrumentName}/`;

  return new Promise((resolve, reject) => {
    try {
      const sampler = new Tone.Sampler({
        urls: sampleMap,
        baseUrl,
        onload: () => resolve(new ToneJSInstrumentAdapter(sampler)),
        onerror: (err) => reject(err),
      });
      // Connect to our masterGain node instead of Tone.Destination
      if (destination) {
        sampler.connect(destination);
      } else {
        sampler.toDestination();
      }
    } catch (err) {
      reject(err);
    }
  });
}

// ─── Helpers ────────────────────────────────────────────────────────────────

export function initToneContext(audioCtx) {
  const Tone = window.Tone;
  if (Tone) {
    Tone.setContext(audioCtx);
  }
}

export function mapInstrumentToSource(currentInstrument, targetSource) {
  if (targetSource === 'softtones') {
    // From SoundFont or Tone.js → Soft Tones
    return SOUNDFONT_TO_SOFTTONES[currentInstrument]
      || TONEJS_TO_SOFTTONES[currentInstrument]
      || 'warm-pad';
  } else if (targetSource === 'tonejs') {
    // From SoundFont or Soft Tones → Tone.js
    return SOFTTONES_TO_TONEJS[currentInstrument]
      || SOUNDFONT_TO_TONEJS[currentInstrument]
      || 'piano';
  } else {
    // From Tone.js or Soft Tones → SoundFont
    return SOFTTONES_TO_SOUNDFONT[currentInstrument]
      || TONEJS_TO_SOUNDFONT[currentInstrument]
      || 'acoustic_grand_piano';
  }
}
