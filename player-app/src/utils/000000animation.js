// const audioCtx = window.AudioContext || window.webkitAudioContext;

// let canvas;
// let audioContext;
// let canvasContext;
// let analyser;
// let width;
// let height;

// let dataArray;
// let bufferLength;

// export const animation = (ref) => {
//   audioContext = new audioCtx();

//   if (audioContext.state !== 'running') {
//     audioContext.resume();
//   }

//   canvas = document.querySelector('#myCanvas');
//   width = canvas.width;
//   height = canvas.height;
//   canvasContext = canvas.getContext('2d');

//   // const mediaElement = document.getElementById('player');
//   const mediaElement = ref;
//   console.log(ref);
//   // console.log(mediaElement);
//   // var mediaElement = new Audio();
//   mediaElement.onplay = (e) => {
//     audioContext.resume();
//   };

//   // исправлено для политики автозапуска
//   mediaElement.addEventListener('play', () => {
//     // console.log('yay');
//     return audioContext.resume();
//   });

//   const sourceNode = audioContext.createMediaElementSource(mediaElement);

//   // Создать узел анализатора
//   analyser = audioContext.createAnalyser();

//   // Попробуйте изменить на более низкие значения: 512, 256, 128, 64 ...
//   analyser.fftSize = 512;
//   bufferLength = analyser.frequencyBinCount;
//   dataArray = new Uint8Array(bufferLength);

//   sourceNode.connect(analyser);
//   analyser.connect(audioContext.destination);

//   requestAnimationFrame(visualize);
// };

// function visualize() {
//   // очистить canvas
//   if (!canvasContext) {
//     return;
//   }
//   canvasContext.clearRect(0, 0, width, height);

//   // Или используйте заливку RGBA, чтобы получить небольшой эффект размытия
//   //canvasContext.fillStyle = 'rgba (0, 0, 0, 0.5)';
//   //canvasContext.fillRect(0, 0, width, height);

//   // Получить данные анализатора
//   analyser.getByteFrequencyData(dataArray);

//   const barWidth = width / bufferLength;
//   let barHeight;
//   let x = 0;

//   // значения изменяются от 0 до 256, а высота холста равна 100. Давайте изменим масштаб
//   // перед отрисовкой. Это масштабный коэффициент
//   const heightScale = height / 128;

//   for (let i = 0; i < bufferLength; i++) {
//     barHeight = dataArray[i];

//     canvasContext.fillStyle = 'rgb(' + (barHeight + 0) + ',4,160)';
//     barHeight *= heightScale;
//     canvasContext.fillRect(x, height - barHeight / 2, barWidth, barHeight / 2);

//     // 2 - количество пикселей между столбцами
//     x += barWidth + 2;
//   }

//   // вызовите снова функцию визуализации со скоростью 60 кадров / с
//   requestAnimationFrame(visualize);
// }
