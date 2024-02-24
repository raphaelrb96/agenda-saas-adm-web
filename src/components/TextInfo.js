'use client'
import * as React from 'react';

import { Typography, styled } from "@mui/material";



const TextInfoComp = styled(Typography)`
    ${props => props.theme.breakpoints.down("sm")} {
        font-size: ${props => props.size ? props.size : '14px'};
    }
    font-size: ${props => props.size ? props.size : '18px'};
    font-family: Roboto, sans-serif;
    font-weight: ${props => props.bold ? 900 : 500};
    letter-spacing: -0.28px;
    color: ${props => props.color ? props.color : '#000'};
    width: 100%;
`;

export default function TextInfo({ children, props, size, color, bold }) {
  return (
    <TextInfoComp color={color} bold={bold} size={size} {...props}>
      {children ? children : 'Empresas'}
    </TextInfoComp>
  );
}