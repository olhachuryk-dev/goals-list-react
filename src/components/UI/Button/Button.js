//Using CSS modules:

import React from 'react';
import styles from './Button.module.css';
const Button = props => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

//Using Styled components:

// import styled from 'styled-components';

// const Button = styled.button`
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #6c094b;
//   color: white;
//   background: #6c094b;
//   box-shadow: 0 0 4px rgba(234, 234, 234, 0.26);
//   cursor: pointer;

// &:focus {
//   outline: none;
// }

// &:hover,
// &:active {
//   background: #6c094b;
//   border-color: #6c094b;
//   box-shadow: 0 0 8px rgba(234, 234, 234, 0.26);
// }`

export default Button;
