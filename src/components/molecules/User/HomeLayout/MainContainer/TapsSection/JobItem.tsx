"use client";
import React from 'react';
import { Box, Rating, Stack, Typography, Drawer } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import Chip from '@mui/joy/Chip';
import VerifiedIcon from '@mui/icons-material/Verified';
import PlaceIcon from '@mui/icons-material/Place';
import { PATHS } from '@/constants/Paths';
// import { useNavigate } from 'react-router-dom';
import DrawerContent from './DrawerContent';

type Anchor = 'right';

const JobItem = () => {
  const [state, setState] = React.useState({
    right: false,
  });
  // const navigate = useNavigate();

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      setState({ ...state, [anchor]: open });
      open
    //     ? navigate(PATHS.HOME.DETAILS.replace(':id', '1'), { replace: true })
    //     : navigate(PATHS.HOME.ROOT, { replace: true });
    };

  return (
    <>
      <Box
        onClick={toggleDrawer('right', true)}
        sx={{
          borderBottom: '1px solid #ddd',
          width: '100%',
          padding: '1rem ',
          cursor: 'pointer',
          '&:hover': { background: '#f2f7f2' },
          '&:hover h3': { color: '#41a000' },
        }}>
        <Stack
          direction={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}
          sx={{ paddingBottom: '1rem' }}>
          <Typography
            variant={'h3'}
            sx={{
              fontSize: '1.3rem',
              color: '#001e00',
              '&:hover': { textDecoration: 'underline', cursor: 'pointer' },
            }}>
            Jobs you might like
          </Typography>
          <Stack direction={'row'} spacing={1} alignItems={'center'}>
            <Box
              sx={{
                width: '2rem',
                height: '2rem',
                border: '1px solid #ddd',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}>
              <ThumbDownOffAltIcon sx={{ color: '#41a000' }} />
            </Box>
            <Box
              sx={{
                width: '2rem',
                height: '2rem',
                border: '1px solid #ddd',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}>
              <FavoriteBorderIcon sx={{ color: '#41a000' }} />
            </Box>
          </Stack>
        </Stack>
        <Stack direction='column' spacing={0.5} sx={{ paddingBottom: '1rem' }}>
          <Typography
            variant='caption'
            sx={{
              fontSize: '12px',
              lineHeight: '18px',
              letterSpacing: '0.6px',
              color: '#5e6d55',
            }}>
            Fixed-price - Entry level - Est. Budget: $200 - Posted 5 hours ago
          </Typography>
          <Typography
            variant='caption'
            sx={{
              fontSize: '12px',
              lineHeight: '20px',
              letterSpacing: '0.6px',
              color: '#5e6d55',
              textOverflow: 'ellipsis',
              wordWrap: 'break-word',
              overflow: 'hidden',
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
            }}>
            The Php version of my PHP / Laravel project is now 7.4. I&apos;d like to
            upgrade it to 7.4 from 8.2 (current stable PHP version). The script
            should work perfectly without any errors after upgrading the PHP
            version. It should be completed within two days and the script is my
            own and copyrighted, so it cannot be used for any other purpose. You
            can accept the invitation if you agree with this. Thanks a lot
          </Typography>
          <Stack
            direction='row'
            spacing={0.5}
            sx={{ paddingTop: '1rem', color: '#5e6d55' }}>
            <Chip sx={{ fontSize: '12px', color: '#5e6d55' }}>Wordpress </Chip>
            <Chip sx={{ fontSize: '12px', color: '#5e6d55' }}>
              Web Development{' '}
            </Chip>
            <Chip sx={{ fontSize: '12px', color: '#5e6d55' }}>PHP </Chip>
            <Chip sx={{ fontSize: '12px', color: '#5e6d55' }}>HTML </Chip>
            <Chip sx={{ fontSize: '12px', color: '#5e6d55' }}>Web Design </Chip>
            <Chip sx={{ fontSize: '12px', color: '#5e6d55' }}>MySql </Chip>
          </Stack>
          <Stack direction='row' spacing={0.5} sx={{ padding: '.5rem 0' }}>
            <Typography
              variant='body1'
              sx={{
                fontSize: '12px',
                lineHeight: '18px',
                letterSpacing: '0.6px',
                color: '#5e6d55',
              }}>
              Proposals:{' '}
            </Typography>
            <Typography
              variant='body1'
              sx={{
                fontSize: '12px',
                lineHeight: '18px',
                letterSpacing: '0.6px',
                color: '#001e00',
              }}>
              5 to 10
            </Typography>
          </Stack>
          <Stack direction='row' alignItems={'center'}>
            <VerifiedIcon sx={{ fill: '#1f57c3', width: '1rem' }} />
            <Typography
              variant='body1'
              sx={{
                fontSize: '12px',
                lineHeight: '18px',
                letterSpacing: '0.6px',
                color: '#5e6d55',
                fontWeight: 500,
              }}>
              Payment verified
            </Typography>
            <Rating
              sx={{ color: '#108A00', paddingLeft: '.5rem' }}
              size='small'
              name='read-only'
              value={5}
              readOnly
            />
            <Typography
              variant='body1'
              sx={{
                paddingLeft: '.5rem',
                fontSize: '12px',
                lineHeight: '18px',
                letterSpacing: '0.6px',
                color: '#001e00',
              }}>
              $45
            </Typography>
            <Typography
              variant='body1'
              sx={{
                paddingLeft: '.2rem',
                fontSize: '12px',
                lineHeight: '18px',
                letterSpacing: '0.6px',
                color: '#5e6d55',
              }}>
              spent
            </Typography>
            <PlaceIcon sx={{ color: '#5e6d55', paddingLeft: '.5rem' }} />
            <Typography
              variant='body1'
              sx={{
                fontSize: '12px',
                lineHeight: '18px',
                letterSpacing: '0.6px',
                color: '#5e6d55',
              }}>
              Gaza
            </Typography>
          </Stack>
        </Stack>
      </Box>
      <Drawer
        sx={{
          '& .css-1160xiw-MuiPaper-root-MuiDrawer-paper': {
            width: '70%',
            borderTopLeftRadius: '2rem',
            borderBottomLeftRadius: '2rem',
          },
        }}
        anchor={'right'}
        open={state['right']}
        onClose={toggleDrawer('right', false)}>
        <DrawerContent />
      </Drawer>
    </>
  );
};
export default JobItem;