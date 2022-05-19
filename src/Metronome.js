import React, { useState } from 'react';
import './Metronome.css';
import click1 from './sound-files/click1.wav';
import click2 from './sound-files/click2.wav';

const Metronome = () => {
  // Slice of state for the initial values of the metronome
  const [initialValues, setInitialValues] = useState({
    playing: false,
    count: 0,
    bpm: 100,
    beatsPerMeasure: 4
  })
  // Slice of state for audio files
  const [audio, setAudio] = useState({
    click1: new Audio (click1),
    click2: new Audio (click2)
  })

  const startStop = () => {
    audio.click1.play();
  }

  // change handler for bpm slider
  const handleBpmChange = e => {
    const bpm = e.target.value;
    setInitialValues({bpm});
  }

  return(
    <div className="metronome">
      <div className="bpm-slider">
        <div>{initialValues.bpm} BPM</div>
        <input 
          type="range" 
          min="20" 
          max="500" 
          value={initialValues.bpm} 
          onChange={handleBpmChange}/>
      </div>
      <button onClick={startStop}>{initialValues.playing ? 'Stop': 'Start'}</button>
    </div>
  )
}

export default Metronome;