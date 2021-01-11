import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline']
const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {
  //creates a default in case there is no button style or size specified
  const checkButtonStyle = STYLES.includes(buttonStyle)
  ? buttonStyle
  : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize)
  ? buttonSize
  : SIZES[0];

  return(
    <Link to='/sign-up' className='btn-mobile'>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {/* implements on the children specified */}
        {children}
      </button>
    </Link>
  )

};
