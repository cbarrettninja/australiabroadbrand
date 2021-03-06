import React from 'react';
import PropTypes from 'prop-types';
import ExCircle from '../ExCircle';
import './style.scss';

const path1 = (
  <path
    d={`
      M 43,0 
      C 70,45 35,75 35,90
    `}
    fill="none"
    stroke="#8f6afc"
    strokeWidth={1}
  />
);

const path2 = (
  <path
    d={`
      M 53,0 
      C 40,40 35,75 45,90
    `}
    fill="none"
    stroke="#2c69a9"
    strokeWidth={1}
  />
);

const CircleLink = ({ ImgPaths }) => (
  <div className="circle-link">
    {ImgPaths.map((item, index) => {
      if (index < ImgPaths.length - 1) {
        return (
          <div key={index} className="circle-link__one-circle">
            <ExCircle BgImgPath={item} ChildContent={index + 1} />
            <svg viewBox="0 0 85 85" style={{ maxHeight: 90, maxWidth: 90 }}>
              {path1}
              {path2}
            </svg>
          </div>
        );
      } else {
        return (
          <div key={index} className="circle-link__one-circle">
            <ExCircle BgImgPath={item} ChildContent={index + 1} />
          </div>
        );
      }
    })}
  </div>
);

CircleLink.propTypes = {
  ImgPaths: PropTypes.array,
};

CircleLink.defaultProps = {
  ImgPaths: [],
};

export default CircleLink;
