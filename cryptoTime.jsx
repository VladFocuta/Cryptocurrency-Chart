import React from 'react';

const CryptoTime = ({ onTimeSelect, selectedTime }) => {
  return (
    <div className="dropdown">
      <button
        className="btn btn-warning dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-bs-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {selectedTime ? selectedTime : 'Time Stamp'}
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <button
          className="dropdown-item"
          type="button"
          onClick={() => onTimeSelect('OneDay')}
        >
          One Day
        </button>
        <button
          className="dropdown-item"
          type="button"
          onClick={() => onTimeSelect('OneWeek')}
        >
          One Week
        </button>
        <button
          className="dropdown-item"
          type="button"
          onClick={() => onTimeSelect('OneMonth')}
        >
          One Month
        </button>
        <button
          className="dropdown-item"
          type="button"
          onClick={() => onTimeSelect('OneYear')}
        >
          One Year
        </button>
      </div>
    </div>
  );
};
export default CryptoTime;
