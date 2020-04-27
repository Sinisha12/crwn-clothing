import React from 'react'
import './button.scss'
import {CustomButtonContainer } from './button_styles'


const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButton;



