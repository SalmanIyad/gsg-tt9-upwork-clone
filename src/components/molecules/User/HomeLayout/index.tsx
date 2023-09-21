import { Box, Stack } from '@mui/material';
import MainContainer from './MainContainer';
import Sidebar from './Sidebar';
import Footer from '../Footer';

const HomeLayout = () => {
  return (
    <Box mt="1rem" sx={{ width: "100%", maxWidth: '1440px', margin: '0 auto' }}>
      <Stack
        sx={{ margin: '0 auto' }}
        width={'80%'}
        spacing={4}
        direction='row'>
        <Box sx={{ flex: 3 }}>
          <MainContainer />
        </Box>

        <Box sx={{ flex: 1 }}>
          <Sidebar />
        </Box>
      </Stack>
      <Footer />
    </Box>
  );
};

export default HomeLayout;
