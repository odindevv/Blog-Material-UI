import { Box, Typography } from '@mui/material';
import {
  GitHub as GithubIcon,
  Twitter as TwitterIcon,
  Facebook as FacebookIcon,
} from '@mui/icons-material';
import { CardAbout } from './CardAbout';

export const SideBar: React.FC = () => {
  const archiveList = [
    'March 2020',
    'February 2020',
    'January 2020',
    'November 1999',
    'September 1999',
    'August 1999',
    'July 1999',
    'June 1999',
    'May 1999',
    'April 1999',
  ];

  const socialMediaLinks = [
    { label: 'Github', icon: <GithubIcon /> },
    { label: 'X', icon: <TwitterIcon /> },
    { label: 'Facebook', icon: <FacebookIcon /> },
  ];
  return (
    <Box sx={{ width: { xs: '100%', sm: '100%', md: '350px' } }}>
      <CardAbout description='Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.' />
      <Typography
        variant='h6'
        mt={4}
        sx={{ fontWeight: 'bold' }}
      >
        Archives
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        {archiveList.map((archive) => (
          <Typography
            key={archive}
            variant='body1'
            component='a'
            color='primary'
            href='#'
          >
            {archive}
          </Typography>
        ))}
      </Box>
      <Typography
        variant='h6'
        mt={2}
        sx={{ fontWeight: 'bold' }}
      >
        Social
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        {socialMediaLinks.map((social) => (
          <Box
            key={social.label}
            component='a'
            href='#'
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              textDecoration: 'underline',
              color: 'primary.main',
            }}
          >
            {social.icon}
            <Typography variant='h6'>{social.label}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
