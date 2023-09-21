import React from 'react';
import { Stack, Divider, Typography, Rating, TextField } from '@mui/material';
import { Button } from '@mui/joy';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FlagIcon from '@mui/icons-material/Flag';
import VerifiedIcon from '@mui/icons-material/Verified';

const RightSection = () => {
  return (
    <Stack spacing={1} sx={{ flex: 1, padding: '2rem 1rem' }}>
      <Button
        className='login_button'
        sx={{
          backgroundColor: '#108a00',
          color: '#fff',
          borderRadius: '2rem',
          textTransform: 'capitalize',
          '&:hover': {
            backgroundColor: '#14a800',
          },
        }}>
        Apply now
      </Button>
      <Button
        startDecorator={<FavoriteBorderIcon />}
        sx={{
          backgroundColor: '#fff',
          color: '#14a800',
          borderRadius: '2rem',
          border: '1px solid #14a800',
          padding: '0',
          width: '100%',
          textTransform: 'capitalize',

          '&:hover': {
            backgroundColor: '#fff',
          },

          '& .MuiButton-startDecorator svg': {
            width: '1rem',
            height: '1rem',
          },
        }}>
        saved Jop
      </Button>
      <Stack
        direction='row'
        alignItems={'center'}
        spacing={1}
        sx={{ paddingTop: '1rem' }}>
        <FlagIcon sx={{ width: '1.2rem', color: '#14a800' }} />
        <Typography
          variant='body1'
          sx={{
            fontSize: '15px',
            lineHeight: '20px',
            letterSpacing: '0.6px',
            color: '#14a800',
            textDecoration: 'underline',
          }}>
          {' '}
          Flag as inappropriate
        </Typography>
      </Stack>
      <Typography
        variant='body1'
        sx={{
          fontSize: '12px',
          lineHeight: '20px',
          letterSpacing: '0.6px',
          color: '#001e00',
        }}>
        {' '}
        Send a proposal for: 16 Connects
      </Typography>
      <Typography
        variant='body1'
        sx={{
          fontSize: '12px',
          lineHeight: '20px',
          letterSpacing: '0.6px',
          color: '#001e00',
          paddingBottom: '1rem',
        }}>
        Available Connects: 120
      </Typography>
      <Divider orientation='horizontal' variant='fullWidth' />
      <Typography
        variant='body1'
        sx={{
          fontSize: '14px',
          lineHeight: '20px',
          letterSpacing: '0.6px',
          color: '#001e00',
          padding: '1rem 0',
        }}>
        About the client
      </Typography>
      <Stack direction='row' spacing={1} alignItems={'center'}>
        <VerifiedIcon sx={{ fill: '#14a800', width: '1rem' }} />
        <Typography
          variant='body1'
          sx={{
            fontSize: '14px',
            lineHeight: '20px',
            letterSpacing: '0.6px',
            color: '#001e00',
            fontWeight: 300,
          }}>
          Payment method verified
        </Typography>
      </Stack>
      <Stack>
        <Rating
          sx={{ color: '#108A00' }}
          size='small'
          name='read-only'
          value={5}
          readOnly
        />
        <Typography
          variant='body1'
          sx={{
            fontSize: '14px',
            lineHeight: '20px',
            letterSpacing: '0.6px',
            color: '#5e6d55',
            fontWeight: 300,
          }}>
          5.00 of 12 reviews
        </Typography>
      </Stack>
      <Stack>
        <Typography
          variant='body1'
          sx={{
            fontSize: '14px',
            lineHeight: '20px',
            letterSpacing: '0.6px',
            color: '#001e00',
            fontWeight: 300,
          }}>
          United States
        </Typography>
        <Typography
          variant='body1'
          sx={{
            fontSize: '14px',
            lineHeight: '20px',
            letterSpacing: '0.6px',
            color: '#5e6d55',
            fontWeight: 300,
          }}>
          San Pedro 12:48 pm
        </Typography>
      </Stack>
      <Stack>
        <Typography
          variant='body1'
          sx={{
            fontSize: '14px',
            lineHeight: '20px',
            letterSpacing: '0.6px',
            color: '#001e00',
            fontWeight: 300,
          }}>
          14 jobs posted
        </Typography>
        <Typography
          variant='body1'
          sx={{
            fontSize: '14px',
            lineHeight: '20px',
            letterSpacing: '0.6px',
            color: '#5e6d55',
            fontWeight: 300,
          }}>
          100% hire rate, 1 open job
        </Typography>
      </Stack>
      <Stack>
        <Typography
          variant='body1'
          sx={{
            fontSize: '14px',
            lineHeight: '20px',
            letterSpacing: '0.6px',
            color: '#001e00',
            fontWeight: 300,
          }}>
          $54K total spent
        </Typography>
        <Typography
          variant='body1'
          sx={{
            fontSize: '14px',
            lineHeight: '20px',
            letterSpacing: '0.6px',
            color: '#5e6d55',
            fontWeight: 300,
          }}>
          19 hires, 3 active
        </Typography>
      </Stack>
      <Stack>
        <Typography
          variant='body1'
          sx={{
            fontSize: '14px',
            lineHeight: '20px',
            letterSpacing: '0.6px',
            color: '#001e00',
            fontWeight: 300,
          }}>
          $9.88 /hr avg hourly rate paid
        </Typography>
        <Typography
          variant='body1'
          sx={{
            fontSize: '14px',
            lineHeight: '20px',
            letterSpacing: '0.6px',
            color: '#5e6d55',
            fontWeight: 300,
          }}>
          5,351 hours
        </Typography>
      </Stack>

      <Typography
        variant='body1'
        sx={{
          fontSize: '12px',
          lineHeight: '18px',
          letterSpacing: '0.6px',
          color: '#5e6d55',
          fontWeight: 300,
          paddingBottom: '1rem',
        }}>
        Member since Nov 4, 2014
      </Typography>
      <Divider orientation='horizontal' variant='fullWidth' />
      <Typography
        variant='body1'
        sx={{
          fontSize: '14px',
          lineHeight: '20px',
          letterSpacing: '0.6px',
          color: '#001e00',
          padding: '1rem 0',
        }}>
        Job link
      </Typography>
      <TextField
        sx={{
          '& .css-1ff8729-MuiInputBase-root-MuiFilledInput-root': {
            borderRadius: '1rem',
          },
          '& .css-10botns-MuiInputBase-input-MuiFilledInput-input': {
            padding: '1rem',
            fontSize: '12px',
          },
          '& .css-1ff8729-MuiInputBase-root-MuiFilledInput-root:before,.css-1ff8729-MuiInputBase-root-MuiFilledInput-root:after':
            {
              border: 'none',
            },
          '& .css-1ff8729-MuiInputBase-root-MuiFilledInput-root.Mui-disabled:before':
            {
              borderBottomStyle: 'none',
            },
        }}
        disabled
        id='filled-disabled'
        defaultValue='Hello World'
        variant='filled'
      />
      <Typography
        variant='body1'
        sx={{
          fontSize: '14px',
          lineHeight: '14px',
          letterSpacing: '0.6px',
          color: '#108a00',
          padding: '.5rem 0 1rem',
          cursor: 'pointer',
          '&:hover': {
            textDecoration: 'underline',
          },
        }}>
        Copy link
      </Typography>
    </Stack>
  );
};

export default RightSection;
