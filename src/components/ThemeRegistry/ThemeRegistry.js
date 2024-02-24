'use client';
import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import NextAppDirEmotionCacheProvider from './EmotionCache';
import theme from './theme';
import { Box } from '@mui/material';

export default function ThemeRegistry({ children }) {
  return (
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Box sx={{ display: 'flex'}}>
          {children}
        </Box>
        
      </ThemeProvider>
  );
}