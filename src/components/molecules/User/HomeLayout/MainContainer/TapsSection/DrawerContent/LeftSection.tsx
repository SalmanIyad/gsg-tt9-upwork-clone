import React from 'react';
import { Stack, Typography, Divider } from '@mui/material';
import { Chip } from '@mui/joy';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PsychologyIcon from '@mui/icons-material/Psychology';
import AlarmIcon from '@mui/icons-material/Alarm';
import HelpIcon from '@mui/icons-material/Help';

const LeftSection = () => {
  return (
    <Stack
      sx={{
        flex: 3,
        padding: '1rem',
      }}>
      <Typography
        variant='h3'
        sx={{
          fontSize: '22px',
          lineHeight: '28px',
          letterSpacing: '0.6px',
          textTransform: 'capitalize',
          color: '#001e00',
          padding: '1rem 0',
        }}>
        need cold fusion programmer{' '}
      </Typography>
      <Typography
        variant='h4'
        sx={{
          fontSize: '14px',
          lineHeight: '20px',
          letterSpacing: '.6px',
          color: '#108a00',
          paddingTop: '.5rem',
        }}>
        FullStack Developer
      </Typography>
      <Typography
        variant='caption'
        sx={{
          fontSize: '14px',
          lineHeight: '20px',
          letterSpacing: '.6px',
          color: '#5e6d55',
          paddingTop: '.5rem',
        }}>
        Posted 19 hours ago
      </Typography>
      <Stack direction='row' spacing={0.5} sx={{ padding: '1.5rem 0 1rem   ' }}>
        <svg
          width='1rem'
          fill='#1F57C3'
          xmlns='http://www.w3.org/2000/svg'
          aria-hidden='true'
          viewBox='0 0 14 14'
          role='img'
          className='st-current'>
          <path d='M10.8 2.692C10.214.93 8.439-.188 6.558.025c-1.062.12-1.961.566-2.631 1.384-.866 1.058-1.17 2.244-.722 3.569.266.782.649 1.511 1.063 2.225.758 1.308 1.618 2.547 2.529 3.754l.199.261c.029-.034.049-.056.065-.077a39.597 39.597 0 002.367-3.432c.458-.752.888-1.518 1.216-2.332.153-.381.287-.768.334-1.174.061-.517-.016-1.021-.178-1.511zM6.982 5.611c-.955 0-1.699-.736-1.699-1.684 0-.946.748-1.682 1.707-1.681.979.002 1.723.728 1.723 1.682.002.958-.745 1.683-1.731 1.683zm3.248 4.078c2.23.383 3.77 1.138 3.77 2.02C14 12.973 10.866 14 7 14c-3.867 0-7-1.027-7-2.291 0-.881 1.533-1.635 3.756-2.018.324.49.678.996 1.059 1.52-.883.128-1.578.313-2.004.494.733.311 2.19.659 4.189.659 2 0 3.456-.349 4.189-.659-.428-.184-1.127-.369-2.017-.498.375-.516.728-1.021 1.058-1.518z' />
        </svg>
        <Typography
          variant='caption'
          sx={{
            fontSize: '14px',
            lineHeight: '20px',
            letterSpacing: '.6px',
            color: '#001e00',
          }}>
          Gaza
        </Typography>
      </Stack>
      <Divider orientation='horizontal' variant='fullWidth' />
      <Typography
        variant='body1'
        sx={{
          fontSize: '14px',
          lineHeight: '25px',
          letterSpacing: '.6px',
          color: '#001e00',
          padding: '1rem 0',
        }}>
        We need a cold fusion developer for a ecommerce based data base and
        admin panel. You will be given tasks and breakdown of pages to develop.
        You will build it on a HTML5 based template and the forms are simple.
      </Typography>
      <Divider orientation='horizontal' variant='fullWidth' />
      <Stack
        sx={{ padding: '1rem 0' }}
        spacing={2}
        direction={'row'}
        flexWrap={'wrap'}>
        <Stack direction='row' spacing={1}>
          <HistoryToggleOffIcon sx={{ width: '1rem', fill: '#001e00' }} />
          <Stack>
            <Typography
              variant='body1'
              sx={{
                fontSize: '14px',
                lineHeight: '20px',
                letterSpacing: '.6px',
                color: '#001e00',
              }}>
              Less than 30 hrs/week
            </Typography>
            <Typography
              variant='body1'
              sx={{
                fontSize: '12px',
                lineHeight: '18px',
                letterSpacing: '.6px',
                color: '#5e6d55',
              }}>
              Hourly
            </Typography>
          </Stack>
        </Stack>
        <Stack direction='row' spacing={1} sx={{ margin: 0 }}>
          <CalendarMonthIcon sx={{ width: '1rem', fill: '#001e00' }} />
          <Stack>
            <Typography
              variant='body1'
              sx={{
                fontSize: '14px',
                lineHeight: '20px',
                letterSpacing: '.6px',
                color: '#001e00',
              }}>
              3 to 6 months
            </Typography>
            <Typography
              variant='body1'
              sx={{
                fontSize: '12px',
                lineHeight: '18px',
                letterSpacing: '.6px',
                color: '#5e6d55',
              }}>
              Project Length
            </Typography>
          </Stack>
        </Stack>
        <Stack direction='row' spacing={1} sx={{ margin: 0 }}>
          <PsychologyIcon sx={{ width: '1rem', fill: '#001e00' }} />
          <Stack>
            <Typography
              variant='body1'
              sx={{
                fontSize: '14px',
                lineHeight: '20px',
                letterSpacing: '.6px',
                color: '#001e00',
              }}>
              Expert
            </Typography>
            <Typography
              variant='body1'
              sx={{
                fontSize: '12px',
                lineHeight: '18px',
                letterSpacing: '.6px',
                color: '#5e6d55',
                maxWidth: '200px',
              }}>
              I am willing to pay higher rates for the most experienced
              freelancers
            </Typography>
          </Stack>
        </Stack>
        <Stack direction='row' spacing={1} sx={{ margin: 0 }}>
          <AlarmIcon sx={{ width: '1rem', fill: '#001e00' }} />
          <Stack>
            <Typography
              variant='body1'
              sx={{
                fontSize: '14px',
                lineHeight: '20px',
                letterSpacing: '.6px',
                color: '#001e00',
              }}>
              $5.00 - $15.00
            </Typography>
            <Typography
              variant='body1'
              sx={{
                fontSize: '12px',
                lineHeight: '18px',
                letterSpacing: '.6px',
                color: '#5e6d55',
              }}>
              Hourly
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Divider orientation='horizontal' variant='fullWidth' />
      <Stack sx={{ padding: '1rem 0' }}>
        <Typography
          variant='body1'
          sx={{
            fontSize: '16px',
            lineHeight: '22px',
            letterSpacing: '.6px',
            color: '#001e00',
            padding: '.5rem 0',
          }}>
          Skills and Expertise
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
      </Stack>
      <Divider orientation='horizontal' variant='fullWidth' />
      <Stack spacing={1} sx={{ padding: '1rem 0' }}>
        <Typography
          variant='body1'
          sx={{
            fontSize: '16px',
            lineHeight: '22px',
            letterSpacing: '.6px',
            color: '#001e00',
            padding: '.5rem 0 1rem',
          }}>
          Activity on this job
        </Typography>
        <Stack direction='row' spacing={1} sx={{}}>
          <Typography
            variant='caption'
            sx={{
              fontSize: '14px',
              lineHeight: '20px',
              letterSpacing: '.6px',
              color: '#5e6d55',
            }}>
            Proposals:
          </Typography>
          <HelpIcon sx={{ width: '1rem', color: '#3c8224' }} />
          <Typography
            variant='caption'
            sx={{
              fontSize: '14px',
              lineHeight: '20px',
              letterSpacing: '.6px',
              color: '#001e00',
            }}>
            20 to 50
          </Typography>
        </Stack>
        <Stack direction='row' spacing={1} sx={{}}>
          <Typography
            variant='caption'
            sx={{
              fontSize: '14px',
              lineHeight: '20px',
              letterSpacing: '.6px',
              color: '#5e6d55',
            }}>
            Interviewing:
          </Typography>
          <Typography
            variant='caption'
            sx={{
              fontSize: '14px',
              lineHeight: '20px',
              letterSpacing: '.6px',
              color: '#001e00',
            }}>
            0
          </Typography>
        </Stack>
        <Stack direction='row' spacing={1}>
          <Typography
            variant='caption'
            sx={{
              fontSize: '14px',
              lineHeight: '20px',
              letterSpacing: '.6px',
              color: '#5e6d55',
            }}>
            Invites sent:
          </Typography>
          <Typography
            variant='caption'
            sx={{
              fontSize: '14px',
              lineHeight: '20px',
              letterSpacing: '.6px',
              color: '#001e00',
            }}>
            0
          </Typography>
        </Stack>
        <Stack direction='row' spacing={1} sx={{}}>
          <Typography
            variant='caption'
            sx={{
              fontSize: '14px',
              lineHeight: '20px',
              letterSpacing: '.6px',
              color: '#5e6d55',
            }}>
            Unanswered invites:
          </Typography>
          <Typography
            variant='caption'
            sx={{
              fontSize: '14px',
              lineHeight: '20px',
              letterSpacing: '.6px',
              color: '#001e00',
            }}>
            0
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default LeftSection;
