import React, { useState } from 'react';
import usePomodoroStore from '../../../stores/pomodoroStore';

const CustomTimeInput = () => {
  const { setCustomTime } = usePomodoroStore();
  const [customMinutes, setCustomMinutes] = useState('');

  const handleSetTime = (minutes) => {
    setCustomTime(minutes * 60);
    setCustomMinutes('');
  };

  const handleInputChange = (e) => {
    setCustomMinutes(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const minutes = parseInt(customMinutes, 10);
    if (!isNaN(minutes) && minutes > 0) {
      handleSetTime(minutes);
    }
  };

  return (
    <div className="custom-time-input">
      <div>
        <button onClick={() => handleSetTime(15)}>15 min</button>
        <button onClick={() => handleSetTime(25)}>25 min</button>
        <button onClick={() => handleSetTime(45)}>45 min</button>
        <button onClick={() => handleSetTime(60)}>60 min</button>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={customMinutes}
          onChange={handleInputChange}
          placeholder="Custom minutes"
        />
        <button type="submit">Set</button>
      </form>
    </div>
  );
};

export default CustomTimeInput; 