import React from 'react';
import './calibrationResults.css';

const CalibrationResults = () => {
  const handleBack = () => {
    window.location.href = '/';
  };

  return (
    <div>
      <title>Calibration Results</title>
      <h1>Calibration Results</h1>
      <div className="dashboard">
        <div className="dashboard-heading">Acceptable ranges</div>
        <ul className="angle-list">
          <li className="angle-list-item">
            <span className="angle-name">Upper back</span>
            <span className="angle-values">minAngle to maxAngle</span>
          </li>
          <li className="angle-list-item">
            <span className="angle-name">Middle back</span>
            <span className="angle-values">minAngle to maxAngle</span>
          </li>
          <li className="angle-list-item">
            <span className="angle-name">Lower back</span>
            <span className="angle-values">minAngle to maxAngle</span>
          </li>
          <li className="angle-list-item">
            <span className="angle-name">Left shoulder</span>
            <span className="angle-values">minAngle to maxAngle</span>
          </li>
          <li className="angle-list-item">
            <span className="angle-name">Right shoulder</span>
            <span className="angle-values">minAngle to maxAngle</span>
          </li>
          <li className="angle-list-item">
            <span className="angle-name">Left side</span>
            <span className="angle-values">minAngle to maxAngle</span>
          </li>
          <li className="angle-list-item">
            <span className="angle-name">Right side</span>
            <span className="angle-values">minAngle to maxAngle</span>
          </li>
        </ul>
      </div>
      <button className="back-button" onClick={handleBack}>Back</button>
    </div>
  );
};

export default CalibrationResults;
