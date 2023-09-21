import { Box, Typography, Grid, Button } from '@mui/material';

const PlansConnect = () => {
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: '#1F57C3',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        borderRadius: '1rem',
        marginBottom: '1rem',
        padding: '1rem 4rem',
      }}>
      <Grid sx={{ width: '100%', margin: '0 auto', gap: '3rem' }} container>
        <Grid xs={6} md={8} sx={{}}>
          <Typography
            variant='h6'
            sx={{
              fontSize: '20px',
              letterSpacing: '0.6px',
              lineHeight: '30px',
              fontWeight: 600,
              paddingBottom: '.5rem',
            }}>
            Get 80 Connects each month
          </Typography>
          <Typography
            variant='h6'
            sx={{
              fontSize: '14px',
              letterSpacing: '0.6px',
              lineHeight: '16px',
              paddingBottom: '.5rem',
            }}>
            Join Freelancer Plus to start each month fresh with 80 Connects.
            You'll get a lot of other perks too! Join now to unlock new features
            to help you grow your network and market your skills.
          </Typography>
          <Button
            sx={{
              background: '#fff',
              borderRadius: '2rem',
              color: '#14a800',
              textTransform: 'none',
              padding: ' .2rem .8rem',
              '&:hover': {
                background: '#fff',
              },
            }}>
            Learn more
          </Button>
        </Grid>
        <Grid xs={6} md={2} sx={{}}>
          <svg
            height={'100%'}
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 145 130'
            aria-hidden='true'
            role='img'>
            <linearGradient
              id='jumpstarter-158-a-uid-3'
              gradientUnits='userSpaceOnUse'
              x1={38.557}
              y1={19.258}
              x2={131.082}
              y2={19.258}
              gradientTransform='matrix(1 0 0 -1 .006 129.994)'>
              <stop offset={0} stopColor='#c3d2c3' stopOpacity={0} />
              <stop offset={0.01} stopColor='#c3d2c3' stopOpacity={0.05} />
              <stop offset={0.03} stopColor='#c3d2c3' stopOpacity={0.3} />
              <stop offset={0.06} stopColor='#c3d2c3' stopOpacity={0.51} />
              <stop offset={0.09} stopColor='#c3d2c3' stopOpacity={0.69} />
              <stop offset={0.12} stopColor='#c3d2c3' stopOpacity={0.83} />
              <stop offset={0.14} stopColor='#c3d2c3' stopOpacity={0.92} />
              <stop offset={0.17} stopColor='#c3d2c3' stopOpacity={0.98} />
              <stop offset={0.2} stopColor='#c3d2c3' />
              <stop offset={0.29} stopColor='#c3d2c3' />
              <stop offset={0.84} stopColor='#c3d2c3' />
              <stop offset={0.87} stopColor='#c3d2c3' stopOpacity={0.78} />
              <stop offset={0.96} stopColor='#c3d2c3' stopOpacity={0.23} />
              <stop offset={1} stopColor='#c3d2c3' stopOpacity={0.01} />
            </linearGradient>
            <path
              d='M130.1 111.8H39.6c-.6 0-1-.5-1-1 0-.6.5-1 1-1h90.5c.6 0 1 .5 1 1s-.5 1-1 1z'
              fill='url(#jumpstarter-158-a-uid-3)'
            />
            <linearGradient
              id='jumpstarter-158-b-uid-3'
              gradientUnits='userSpaceOnUse'
              x1={7.26}
              y1={83.86}
              x2={52.248}
              y2={83.86}
              gradientTransform='matrix(1 0 0 -1 .006 129.994)'>
              <stop offset={0} stopColor='#c3d2c3' stopOpacity={0} />
              <stop offset={0.01} stopColor='#c3d2c3' stopOpacity={0.05} />
              <stop offset={0.03} stopColor='#c3d2c3' stopOpacity={0.3} />
              <stop offset={0.06} stopColor='#c3d2c3' stopOpacity={0.51} />
              <stop offset={0.09} stopColor='#c3d2c3' stopOpacity={0.69} />
              <stop offset={0.12} stopColor='#c3d2c3' stopOpacity={0.83} />
              <stop offset={0.14} stopColor='#c3d2c3' stopOpacity={0.92} />
              <stop offset={0.17} stopColor='#c3d2c3' stopOpacity={0.98} />
              <stop offset={0.2} stopColor='#c3d2c3' />
              <stop offset={0.29} stopColor='#c3d2c3' />
              <stop offset={0.84} stopColor='#c3d2c3' />
              <stop offset={0.87} stopColor='#c3d2c3' stopOpacity={0.78} />
              <stop offset={0.96} stopColor='#c3d2c3' stopOpacity={0.23} />
              <stop offset={1} stopColor='#c3d2c3' stopOpacity={0.01} />
            </linearGradient>
            <path
              d='M51.4 47H8.1c-.5 0-.8-.4-.8-.8v-.1c.1-.4.4-.7.8-.7h43.3c.5 0 .8.4.8.8v.1c0 .4-.4.7-.8.7z'
              fill='url(#jumpstarter-158-b-uid-3)'
            />
            <linearGradient
              id='jumpstarter-158-c-uid-3'
              gradientUnits='userSpaceOnUse'
              x1={-0.006}
              y1={69.621}
              x2={50.493}
              y2={69.621}
              gradientTransform='matrix(1 0 0 -1 .006 129.994)'>
              <stop offset={0} stopColor='#c3d2c3' stopOpacity={0} />
              <stop offset={0.01} stopColor='#c3d2c3' stopOpacity={0.05} />
              <stop offset={0.03} stopColor='#c3d2c3' stopOpacity={0.3} />
              <stop offset={0.06} stopColor='#c3d2c3' stopOpacity={0.51} />
              <stop offset={0.09} stopColor='#c3d2c3' stopOpacity={0.69} />
              <stop offset={0.12} stopColor='#c3d2c3' stopOpacity={0.83} />
              <stop offset={0.14} stopColor='#c3d2c3' stopOpacity={0.92} />
              <stop offset={0.17} stopColor='#c3d2c3' stopOpacity={0.98} />
              <stop offset={0.2} stopColor='#c3d2c3' />
              <stop offset={0.29} stopColor='#c3d2c3' />
              <stop offset={0.84} stopColor='#c3d2c3' />
              <stop offset={0.87} stopColor='#c3d2c3' stopOpacity={0.78} />
              <stop offset={0.96} stopColor='#c3d2c3' stopOpacity={0.23} />
              <stop offset={1} stopColor='#c3d2c3' stopOpacity={0.01} />
            </linearGradient>
            <path
              d='M49.7 61.2H.8c-.5 0-.8-.4-.8-.8v-.1c.1-.4.4-.7.8-.7h48.8c.5 0 .8.4.8.8v.1c0 .4-.3.7-.7.7z'
              fill='url(#jumpstarter-158-c-uid-3)'
            />
            <linearGradient
              id='jumpstarter-158-d-uid-3'
              gradientUnits='userSpaceOnUse'
              x1={3.763}
              y1={55.382}
              x2={48.745}
              y2={55.382}
              gradientTransform='matrix(1 0 0 -1 .006 129.994)'>
              <stop offset={0} stopColor='#c3d2c3' stopOpacity={0} />
              <stop offset={0.01} stopColor='#c3d2c3' stopOpacity={0.05} />
              <stop offset={0.03} stopColor='#c3d2c3' stopOpacity={0.3} />
              <stop offset={0.06} stopColor='#c3d2c3' stopOpacity={0.51} />
              <stop offset={0.09} stopColor='#c3d2c3' stopOpacity={0.69} />
              <stop offset={0.12} stopColor='#c3d2c3' stopOpacity={0.83} />
              <stop offset={0.14} stopColor='#c3d2c3' stopOpacity={0.92} />
              <stop offset={0.17} stopColor='#c3d2c3' stopOpacity={0.98} />
              <stop offset={0.2} stopColor='#c3d2c3' />
              <stop offset={0.29} stopColor='#c3d2c3' />
              <stop offset={0.84} stopColor='#c3d2c3' />
              <stop offset={0.87} stopColor='#c3d2c3' stopOpacity={0.78} />
              <stop offset={0.96} stopColor='#c3d2c3' stopOpacity={0.23} />
              <stop offset={1} stopColor='#c3d2c3' stopOpacity={0.01} />
            </linearGradient>
            <path
              d='M47.9 75.4H4.6c-.5 0-.8-.4-.8-.8v-.1c.1-.4.4-.7.8-.7h43.3c.5 0 .8.4.8.8v.1c0 .4-.4.7-.8.7z'
              fill='url(#jumpstarter-158-d-uid-3)'
            />
            <path
              d='M129.2 18.2h-1.1c2.2 0 3.7 1.7 3.4 3.9L121 107.9c-.3 2.2-2.2 3.9-4.4 3.9h1.1c2.2 0 4.1-1.7 4.4-3.9l10.5-85.7c.3-2.2-1.3-4-3.4-4z'
              fill='#9aaa97'
            />
            <linearGradient
              id='jumpstarter-158-e-uid-3'
              gradientUnits='userSpaceOnUse'
              x1={48.216}
              y1={22.282}
              x2={133.643}
              y2={107.707}
              gradientTransform='matrix(1 0 0 -1 .006 129.994)'>
              <stop offset={0.31} stopColor='#e4ebe4' />
              <stop offset={0.57} stopColor='#e1e9e1' />
              <stop offset={0.74} stopColor='#d9e2d9' />
              <stop offset={0.89} stopColor='#cad7ca' />
              <stop offset={0.93} stopColor='#c3d2c3' />
            </linearGradient>
            <path
              d='M116.6 111.8H53.8c-2.2 0-3.7-1.7-3.4-3.9l10.5-85.7c.3-2.2 2.2-3.9 4.4-3.9h62.9c2.2 0 3.7 1.7 3.4 3.9L121 107.9c-.3 2.1-2.2 3.9-4.4 3.9z'
              fill='url(#jumpstarter-158-e-uid-3)'
            />
            <path
              d='M102.2 81.9H74.5c-.4 0-.7-.3-.7-.7v-.1c.1-.4.4-.8.9-.8h27.7c.4 0 .7.3.7.7v.1c-.1.5-.5.8-.9.8zm8.7 6H64.3c-.4 0-.7-.3-.7-.7v-.1c.1-.4.4-.8.9-.8h46.7c.4 0 .7.3.7.7v.1c-.2.5-.5.8-1 .8z'
              fill='#14a800'
            />
            <polygon
              points='125.3,81.4 117.9,79.6 111.3,80.7 106.6,83.3 117.2,109.3 122.4,104.8'
              fill='#c3d2c3'
            />
            <polygon
              points='122.4,104.8 125.3,81.4 124.3,81.2 121.3,105.8'
              fill='#65735b'
            />
            <path
              d='M111.1 86.4h-3.2l.6 1.6h2.4c.4 0 .8-.3.9-.8.1-.4-.2-.7-.6-.8h-.1z'
              fill='#126b00'
            />
            <ellipse
              transform='rotate(-43.501 92.727 50.334)'
              cx={92.7}
              cy={50.3}
              rx={18.3}
              ry={16.5}
              fill='#c3d2c3'
            />
            <linearGradient
              id='jumpstarter-158-f-uid-3'
              gradientUnits='userSpaceOnUse'
              x1={79.287}
              y1={79.056}
              x2={87.284}
              y2={79.056}
              gradientTransform='matrix(1 0 .11 -1 .286 129.994)'>
              <stop offset={0.52} stopColor='#eb9546' />
              <stop offset={0.75} stopColor='#e08c42' />
              <stop offset={1} stopColor='#ce7e3c' />
            </linearGradient>
            <polygon
              points='96.4,53.5 96.2,48.4 89.7,48.4 88.4,53.5'
              fill='url(#jumpstarter-158-f-uid-3)'
            />
            <path
              d='M92.6 51.5c2 0 3.8 1 3.8 1l-.1-2h-4.1l.4 1z'
              fill='#ce7e3c'
            />
            <radialGradient
              id='jumpstarter-158-g-uid-3'
              cx={-1647.163}
              cy={866.166}
              r={8.405}
              gradientTransform='matrix(.99 0 .1 -.99 1635.581 899.7)'
              gradientUnits='userSpaceOnUse'>
              <stop offset={0.68} stopColor='#eb9546' />
              <stop offset={0.92} stopColor='#d6853f' />
              <stop offset={1} stopColor='#ce7e3c' />
            </radialGradient>
            <path
              d='M88.7 50.2l.1.1c1.1.8 2.4 1.2 3.8 1.2 1.5 0 3-.5 4.2-1.3 1.9-1.3 3.3-3.3 3.5-5.7.4-3.8-2.4-6.9-6.2-7s-7.3 3-7.8 6.9c-.2 2.4.7 4.6 2.4 5.8z'
              fill='url(#jumpstarter-158-g-uid-3)'
            />
            <radialGradient
              id='jumpstarter-158-h-uid-3'
              cx={-1646.517}
              cy={856.255}
              r={21.301}
              gradientTransform='matrix(.99 0 .1 -.99 1635.581 899.7)'
              gradientUnits='userSpaceOnUse'>
              <stop offset={0.68} stopColor='#bda1e7' />
              <stop offset={0.77} stopColor='#ab92d2' />
              <stop offset={0.97} stopColor='#7d6b9d' />
              <stop offset={1} stopColor='#746493' />
            </radialGradient>
            <path
              d='M107.1 55.5c-1.2-2.2-3.5-3.5-6.1-3.5-.7 0-1.4.1-2.1.3l-1.9.5c-3 .8-6.2.8-9 0l-1.8-.5c-.7-.2-1.4-.3-2-.3-2.6 0-5.2 1.3-6.8 3.5-.4.6-.8 1.2-1.1 1.9 2.1 6.1 7.7 10.3 14.8 10.3s13.6-4.2 17-10.3c-.4-.7-.7-1.3-1-1.9z'
              fill='url(#jumpstarter-158-h-uid-3)'
            />
            <linearGradient
              id='jumpstarter-158-i-uid-3'
              gradientUnits='userSpaceOnUse'
              x1={-51.918}
              y1={58.679}
              x2={-34.037}
              y2={64.187}
              gradientTransform='scale(1 -1) rotate(-20.138 -387.937 -441.327)'>
              <stop offset={0} stopColor='#01cdbe' />
              <stop offset={0.24} stopColor='#22d3bb' />
              <stop offset={0.77} stopColor='#76e1b4' />
              <stop offset={0.93} stopColor='#91e6b2' />
            </linearGradient>
            <polygon
              points='109.9,72.9 118.4,103.8 121.2,75.7'
              fill='url(#jumpstarter-158-i-uid-3)'
            />
            <linearGradient
              id='jumpstarter-158-j-uid-3'
              gradientUnits='userSpaceOnUse'
              x1={-25.913}
              y1={65.988}
              x2={-8.95}
              y2={58.093}
              gradientTransform='scale(1 -1) rotate(-20.138 -387.937 -441.327)'>
              <stop offset={0} stopColor='#01cdbe' />
              <stop offset={0.24} stopColor='#22d3bb' />
              <stop offset={0.77} stopColor='#76e1b4' />
              <stop offset={0.93} stopColor='#91e6b2' />
            </linearGradient>
            <polygon
              points='134.5,80.6 118.4,103.8 145,85.7'
              fill='url(#jumpstarter-158-j-uid-3)'
            />
            <linearGradient
              id='jumpstarter-158-k-uid-3'
              gradientUnits='userSpaceOnUse'
              x1={-42.001}
              y1={57.518}
              x2={-24.669}
              y2={64.565}
              gradientTransform='scale(1 -1) rotate(-20.138 -387.937 -441.327)'>
              <stop offset={0} stopColor='#01cdbe' />
              <stop offset={0.24} stopColor='#22d3bb' />
              <stop offset={0.77} stopColor='#76e1b4' />
              <stop offset={0.93} stopColor='#91e6b2' />
            </linearGradient>
            <polyline
              points='117.3,79.7 118.4,103.8 134.9,86.1'
              fill='url(#jumpstarter-158-k-uid-3)'
            />
            <linearGradient
              id='jumpstarter-158-l-uid-3'
              gradientUnits='userSpaceOnUse'
              x1={-35.813}
              y1={73.022}
              x2={-21.63}
              y2={87.205}
              gradientTransform='scale(1 -1) rotate(-20.138 -387.937 -441.327)'>
              <stop offset={0} stopColor='#01cdbe' />
              <stop offset={0.24} stopColor='#22d3bb' />
              <stop offset={0.77} stopColor='#76e1b4' />
              <stop offset={0.93} stopColor='#91e6b2' />
            </linearGradient>
            <polygon
              points='136.5,75.1 123.2,70.3 115.5,70.6 121.2,75.7 134.5,80.6 142.2,80.3'
              fill='url(#jumpstarter-158-l-uid-3)'
            />
            <linearGradient
              id='jumpstarter-158-m-uid-3'
              gradientUnits='userSpaceOnUse'
              x1={-31.622}
              y1={70.571}
              x2={-24.911}
              y2={77.389}
              gradientTransform='scale(1 -1) rotate(-20.138 -387.937 -441.327)'>
              <stop offset={0} stopColor='#01cdbe' />
              <stop offset={0.24} stopColor='#22d3bb' />
              <stop offset={0.77} stopColor='#76e1b4' />
              <stop offset={0.93} stopColor='#91e6b2' />
            </linearGradient>
            <polygon
              points='134.9,86.1 117.3,79.7 121.2,75.7 134.5,80.6'
              fill='url(#jumpstarter-158-m-uid-3)'
            />
            <linearGradient
              id='jumpstarter-158-n-uid-3'
              gradientUnits='userSpaceOnUse'
              x1={-23.502}
              y1={81.306}
              x2={-14.389}
              y2={74.102}
              gradientTransform='scale(1 -1) rotate(-20.138 -387.937 -441.327)'>
              <stop offset={0} stopColor='#01cdbe' />
              <stop offset={0.24} stopColor='#22d3bb' />
              <stop offset={0.77} stopColor='#76e1b4' />
              <stop offset={0.93} stopColor='#91e6b2' />
            </linearGradient>
            <polygon
              points='142.2,80.3 134.5,80.6 134.9,86.1 145,85.7'
              fill='url(#jumpstarter-158-n-uid-3)'
            />
            <linearGradient
              id='jumpstarter-158-o-uid-3'
              gradientUnits='userSpaceOnUse'
              x1={-46.977}
              y1={73.287}
              x2={-36.336}
              y2={77.951}
              gradientTransform='scale(1 -1) rotate(-20.138 -387.937 -441.327)'>
              <stop offset={0} stopColor='#01cdbe' />
              <stop offset={0.24} stopColor='#22d3bb' />
              <stop offset={0.77} stopColor='#76e1b4' />
              <stop offset={0.93} stopColor='#91e6b2' />
            </linearGradient>
            <polygon
              points='115.5,70.6 109.9,72.9 117.3,79.7 121.2,75.7'
              fill='url(#jumpstarter-158-o-uid-3)'
            />
          </svg>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PlansConnect;
