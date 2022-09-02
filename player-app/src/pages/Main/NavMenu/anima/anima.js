import React, { createRef, useEffect, useRef, useState } from "react";
import songFile from "./m.mp3";

// Changing Variables
let x_end, y_end, bar_height;

// constants
const width = window.innerWidth;
const height = window.innerHeight;
const bars = 555;
const bar_width = 1;
const radius = 0;
const center_x = width / 2;
const center_y = height / 2;

const Canvas = (props, ref) => {
  const audio = useRef(null);
  const frequency_array = useRef();
  const context = useRef(null);
  const source = useRef(null);
  const analyser = useRef(null);
  const rafId = useRef(null);
  const canvas = createRef();
  const ctx = useRef();

  const animationLooper = (canvas) => {
    canvas.width = width;
    canvas.height = height;

    ctx.current = canvas.getContext("2d");

    for (var i = 0; i < bars; i++) {
      //divide a circle into equal part
      const rads = (Math.PI * 2) / bars;

      // Math is magical
      bar_height = frequency_array.current[i] * 2;

      const x = center_x + Math.cos(rads * i) * radius;
      const y = center_y + Math.sin(rads * i) * radius;
      x_end = center_x + Math.cos(rads * i) * (radius + bar_height);
      y_end = center_y + Math.sin(rads * i) * (radius + bar_height);

      //draw a bar
      drawBar(
        x,
        y,
        x_end,
        y_end,
        frequency_array.current[i],
        ctx.current,
        canvas
      );
    }
  };

  function drawBar(x1 = 0, y1 = 0, x2 = 0, y2 = 0, frequency, ctx, canvas) {
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, "rgba(35, 7, 77, 1)");
    gradient.addColorStop(1, "rgba(204, 83, 51, 1)");
    ctx.fillStyle = gradient;

    const lineColor = "rgb(" + frequency + ", " + frequency + ", " + 205 + ")";
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = bar_width;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  }

  useEffect(() => {
    context.current = new (window.AudioContext || window.webkitAudioContext)();
    source.current = context.current.createMediaElementSource(audio.current);
    analyser.current = context.current.createAnalyser();
    source.current.connect(analyser.current);
    analyser.current.connect(context.current.destination);
    frequency_array.current = new Uint8Array(
      analyser.current.frequencyBinCount
    );
  }, []);

  const togglePlay = () => {
    console.log(rafId.current);
    if (audio.current.paused) {
      audio.current.play();
      rafId.current = requestAnimationFrame(tick);
    } else {
      audio.current.pause();
      cancelAnimationFrame(rafId.current);
    }
  };

  function tick() {
    console.log(width);
    animationLooper(canvas.current);
    analyser.current.getByteTimeDomainData(frequency_array.current);
    rafId.current = requestAnimationFrame(tick);
  }

  useEffect(() => {
    return () => {
      cancelAnimationFrame(rafId.current);
      analyser.current.disconnect();
      source.current.disconnect();
    };
  }, []);

  return (
    <>
      <button onClick={togglePlay} style={{ color: "white" }}>
        Play/Pause
      </button>
      <audio
        onPlay={() => context.current.resume()}
        autoPlay={false}
        ref={audio}
        src={songFile}
      ></audio>
      <canvas ref={canvas} />
    </>
  );
};

export default Canvas;
