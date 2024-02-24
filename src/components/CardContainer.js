'use client'
import * as React from 'react';
import Card from '@mui/material/Card';




export default function CardContainer({ children, props }) {
  return (
    <Card {...props} sx={{borderRadius: 2, marginTop: 2}} variant="outlined">
      {children}
    </Card>
  );
}