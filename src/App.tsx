import { Box, Container } from '@mui/material';
import { NavBar } from './components/Navbar/NavBar';
import { CardBig } from './components/CardBig';
import { FeaturedCard } from './components/FeaturedCard';
import { News } from './components/News/News';
import { SideBar } from './components/News/Sidebar';

function App() {
  const responsiveContentLayout = {
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'column', md: 'row' },
    gap: 2,
    mt: 2,
  };

  const responsiveNewsLayout = {
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'column', md: 'row' },
    mt: 8,
  };

  return (
    <Container>
      <NavBar />
      <CardBig />
      <Box sx={responsiveContentLayout}>
        <FeaturedCard
          title='Featured post'
          date='Dec 12'
          description='This is a wider card with supporting text below as a natural lead-in to additional content.'
          href='https://google.com'
          picture='https://picsum.photos/200/300'
        />
        <FeaturedCard
          title='Post Title'
          date='May 02'
          description='This is a wider card with supporting text below as a natural lead-in to additional content.'
          href='https://google.com'
          picture='https://picsum.photos/200/300'
        />
      </Box>
      <Box sx={responsiveNewsLayout}>
        <Box sx={{ flexGrow: 1 }}>
          <News />
        </Box>
        <Box sx={{ width: '100%', pl: { xs: 0, sm: 0, md: 5 } }}>
          <SideBar />
        </Box>
      </Box>
    </Container>
  );
}

export default App;
