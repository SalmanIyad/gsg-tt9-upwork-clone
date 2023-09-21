"use client";
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Search from './Search';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { Stack } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { signOut } from '@/redux/slices/AuthSlice';
import { useAppDispatch } from '@/redux/store';

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  // const dispatch = useAppDispatch();
  // const navigate = useNavigate();

  // const handleSignOut: any = () => {
  //   dispatch(signOut());
  //   handleCloseUserMenu();
  //   navigate('/login', { replace: true });
  // };

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <AppBar sx={{ background: '#fff', boxShadow: 'none', maxWidth: '1440px', margin: '0 auto' }} position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
              color: '#001a00',
            }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'>
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign='center'>Find Work</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign='center'>My Jops</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign='center'>Reports</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign='center'>Messages</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <svg
            width={82}
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 102 28'
            role='img'
            aria-hidden='true'>
            <path
              fill='#14a800'
              d='M28.18,19.06A6.54,6.54,0,0,1,23,16c.67-5.34,2.62-7,5.2-7s4.54,2,4.54,5-2,5-4.54,5m0-13.34a7.77,7.77,0,0,0-7.9,6.08,26,26,0,0,1-1.93-5.62H12v7.9c0,2.87-1.3,5-3.85,5s-4-2.12-4-5l0-7.9H.49v7.9A8.61,8.61,0,0,0,2.6,20a7.27,7.27,0,0,0,5.54,2.35c4.41,0,7.5-3.39,7.5-8.24V8.77a25.87,25.87,0,0,0,3.66,8.05L17.34,28h3.72l1.29-7.92a11,11,0,0,0,1.36,1,8.32,8.32,0,0,0,4.14,1.28h.34A8.1,8.1,0,0,0,36.37,14a8.12,8.12,0,0,0-8.19-8.31'
            />
            <path
              fill='#14a800'
              d='M80.8,7.86V6.18H77.2V21.81h3.65V15.69c0-3.77.34-6.48,5.4-6.13V6c-2.36-.18-4.2.31-5.45,1.87'
            />
            <polygon
              fill='#14a800'
              points='55.51 6.17 52.87 17.11 50.05 6.17 45.41 6.17 42.59 17.11 39.95 6.17 36.26 6.17 40.31 21.82 44.69 21.82 47.73 10.71 50.74 21.82 55.12 21.82 59.4 6.17 55.51 6.17'
            />
            <path
              fill='#14a800'
              d='M67.42,19.07c-2.59,0-4.53-2.05-4.53-5s2-5,4.53-5S72,11,72,14s-2,5-4.54,5m0-13.35A8.1,8.1,0,0,0,59.25,14,8.18,8.18,0,1,0,75.6,14a8.11,8.11,0,0,0-8.18-8.31'
            />
            <path
              fill='#14a800'
              d='M91.47,14.13h.84l5.09,7.69h4.11l-5.85-8.53a7.66,7.66,0,0,0,4.74-7.11H96.77c0,3.37-2.66,4.65-5.3,4.65V0H87.82V21.82h3.64Z'
            />
          </svg>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              paddingLeft: '1.5rem',
              '& button': {
                color: '#001a00',
                fontSize: '12px',
              },
              '& button:hover': {
                background: '#fff',
              },
            }}>
            <Button
              onClick={handleCloseNavMenu}
              endIcon={<KeyboardArrowDownIcon />}
              sx={{
                display: 'flex',
                '& .css-9tj150-MuiButton-endIcon': { marginLeft: 0 },
              }}>
              Find Work
            </Button>

            <Button
              onClick={handleCloseNavMenu}
              endIcon={<KeyboardArrowDownIcon />}
              sx={{
                display: 'flex',
                '& .css-9tj150-MuiButton-endIcon': { marginLeft: 0 },
              }}>
              My Jops
            </Button>

            <Button
              onClick={handleCloseNavMenu}
              endIcon={<KeyboardArrowDownIcon />}
              sx={{
                display: 'flex',
                '& .css-9tj150-MuiButton-endIcon': { marginLeft: 0 },
              }}>
              Reports
            </Button>

            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, display: 'block' }}>
              Messages
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0, display: 'flex', gap: '.5rem' }}>
            <Search />
            <Tooltip title='Help' arrow>
              <QuestionMarkIcon
                sx={{ color: '#001e00', alignSelf: 'center' }}
              />
            </Tooltip>
            <Tooltip title='Direct Contracts' arrow>
              <svg
                width='1.6rem'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                aria-hidden='true'
                viewBox='0 0 24 24'
                role='img'>
                <path
                  vectorEffect='non-scaling-stroke'
                  stroke=' #001e00'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeMiterlimit={10}
                  strokeWidth={1.5}
                  d='M15.34 15.999l4.26-2.364c.533-.272.533-1.181 0-1.454L3 3l2.13 17.271c.09.545.71.909 1.155.636l4.616-2.545'
                />
                <path
                  vectorEffect='non-scaling-stroke'
                  stroke='#001e00'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeMiterlimit={10}
                  strokeWidth={1.5}
                  d='M10.9 18.362l2.753 2.09c.532.364 1.243.092 1.331-.636l.355-3.908L3 3l7.9 15.362z'
                />
              </svg>
            </Tooltip>
            <Tooltip title='Notifications' arrow>
              <NotificationsNoneIcon
                sx={{ color: '#001e00', alignSelf: 'center' }}
              />
            </Tooltip>
            <Tooltip title='Profile' arrow>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt='Remy Sharp' src='/static/images/avatar/2.jpg' />
              </IconButton>
            </Tooltip>
            <Menu
              onClose={handleCloseUserMenu}
              sx={{ mt: '45px' }}
              id='menu-appbar'
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}>
              <MenuItem onClick={handleCloseUserMenu}>
                <Stack direction='column' alignItems='center'>
                  <Avatar alt='Remy Sharp' src='/static/images/avatar/2.jpg' />
                  <Typography variant='body1' sx={{ fontSize: '14px' }}>
                    Mohammed Raida{' '}
                  </Typography>
                  <Typography sx={{ fontSize: '12px' }} variant='body2'>
                    Freelancer
                  </Typography>
                </Stack>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Stack direction='row' spacing={1} alignItems='center'>
                  <SettingsIcon />
                  <Typography variant='body1' sx={{ fontSize: '14px' }}>
                    Settings{' '}
                  </Typography>
                </Stack>
              </MenuItem>
              {/* <MenuItem onClick={handleSignOut}> */}
              <MenuItem >
                <Stack direction='row' spacing={1} alignItems='center'>
                  <ExitToAppIcon sx={{ transform: 'rotate(180deg)' }} />
                  <Typography variant='body1' sx={{ fontSize: '14px' }}>
                    logout
                  </Typography>
                </Stack>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
