import React, { useState } from 'react';
import './Metronome.css';

const Metronome = () => {
  const [initialValues, setInitialValues] = useState({
    playing: false,
    count: 0,
    bpm: 100,
    beatsPerMeasure: 4
  })

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
      <button>{initialValues.playing ? 'Stop': 'Start'}</button>
    </div>
  )
}

export default Metronome;