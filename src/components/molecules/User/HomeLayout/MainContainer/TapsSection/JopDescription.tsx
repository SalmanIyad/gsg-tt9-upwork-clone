import React, { useState } from 'react';
import JobItem from './JobItem';
import { Box } from '@mui/material';

const JopDescription = () => {
  return (
    <Box sx={{ paddingBottom: '4rem' }}>
      <JobItem />
      <JobItem />
      <JobItem />
    </Box>
  );
};

export default JopDescription;
