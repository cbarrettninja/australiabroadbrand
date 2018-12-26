import React from 'react';
import ArrowDown from '../../../assets/svgs/angle-down-solid.svg';
import './style.scss';

const ImpInformation = () => (
  <div className="imp-information">
    Important information
    <div className="imp-information__img">
      <img src={ArrowDown} />
    </div>
  </div>
);

export default ImpInformation;