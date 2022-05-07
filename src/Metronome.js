import React from 'react';

const Metronome = () => {
  let bpm = 100;
  let playing = false;

    return(
    <div className="metronome">
      <div className="bpm-slider">
        <div>{bpm} BPM</div>
        <input type="range" min="20" max="500" value={bpm} />
      </div>
      <button>{playing ? 'Stop': 'Start'}</button>
    </div>
  )
}

export default Metronome;