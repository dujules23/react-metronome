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

  const playClick = () => {
    const { count, beatsPerMeasure } = initialValues

    // The first beat will have a different sound than the others 
    if (count % beatsPerMeasure === 0) {
      audio.click2.play();
    } else {
      audio.click1.play();
    }

    //Keeps track of what beat we're on
    setInitialValues(state => ({
      count: (state.count + 1) % state.beatsPerMeasure
    }));
  };

  const startStop = () => {
    if (initialValues.playing) {
      clearInterval(initialValues.timer);
      
      setInitialValues({
        playing: false
      })
    } else {
      initialValues.timer = setInterval(
        playClick,
        (60 / initialValues.bpm) * 1000
      );
      setInitialValues({
        count: 0,
        playing: true
      },
      playClick
      );
    }
  };



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