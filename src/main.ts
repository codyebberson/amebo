import { initGameboy } from './amebo';

function loadROMfileReader(evt: Event) {
  var file = ((evt.target as HTMLInputElement).files as FileList)[0];
  var reader = new FileReader();
  reader.onload = (e) => {
    // const gameboy = initGameboy('default.gbc', document.getElementById('gameboy') as HTMLCanvasElement);
    // gameboy.loadROMBuffer((e.target as FileReader).result);
    initGameboy(
      (e.target as FileReader).result as ArrayBuffer,
      document.getElementById('gameboy') as HTMLCanvasElement
    );
  };
  reader.readAsArrayBuffer(file);
}

(document.getElementById('file') as HTMLInputElement).addEventListener('change', loadROMfileReader, false);
