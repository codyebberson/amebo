import { initGameboy } from './amebo';

const gameboy = initGameboy('default.gbc', document.getElementById('gameboy') as HTMLCanvasElement);

function loadROMfileReader(evt: Event) {
  var file = ((evt.target as HTMLInputElement).files as FileList)[0];
  var reader = new FileReader();
  reader.onload = (function (theFile) {
    return function (e) {
      console.log('loadROMfileReader', theFile);
      console.log('gameboy', gameboy);
      gameboy.loadROMBuffer((e.target as FileReader).result);
    };
  })(file);
  reader.readAsArrayBuffer(file);
}

// function loadBatteryfileReader(evt) {
//   var file = evt.target.files[0];
//   var reader = new FileReader();
//   reader.onload = (function (theFile) {
//     return function (e) {
//       var CRAM = gameboy.scopeEval('CRAM');
//       CRAM.set(new Uint8Array(e.target.result.slice(0, CRAM.length)));
//       gameboy.scopeEval('saveBattery(); reset();');
//     };
//   })(file);
//   reader.readAsArrayBuffer(file);
// }

(document.getElementById('file') as HTMLInputElement).addEventListener('change', loadROMfileReader, false);
// document.getElementById('file2').addEventListener('change', loadBatteryfileReader, false);
