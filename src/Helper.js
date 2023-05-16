import CEV from "./sounds/Cev_H2.mp3";
import DSC from "./sounds/Dsc_Oh.mp3";
import Heater1 from "./sounds/Heater-1.mp3";
import Heater2 from "./sounds/Heater-2.mp3";
import heater3 from "./sounds/Heater-3.mp3";
import heater4 from "./sounds/Heater-4_1.mp3";
import heater6 from "./sounds/Heater-6.mp3";
import kick from "./sounds/Kick_n_Hat.mp3";
import rp4 from "./sounds/RP4_KICK_1.mp3";

export const objects = [
  {
    audio: CEV,
    letter: "Q",
    sound: 'closed hihat',
    keyCode:'81'
  },
  { audio: DSC, letter: "W",sound:'open hihat',keycode:'87' },
  { audio: Heater1, letter: "E",sound:'Heater 1',keycode:'69' },
  { audio: Heater2, letter: "A", sound: 'Heater 2',keycode:'65' },
  { audio: heater3, letter: "S", sound: 'Heater 3',keycode:'83' },
  { audio: heater4, letter: "D", sound: 'Heater 4',keycode:'68' },
  { audio: heater6, letter: "Z" ,sound:'Clap',keycode:'90'},
  { audio: kick, letter: "X", sound: 'Kick & Hat' ,keycode:'88'},
  { audio: rp4, letter: "C", sound: 'Kick' ,keycode:'67'},
];
