import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
} from '@mui/material';

export const CardBig: React.FC = () => {
  return (
    <Card
      sx={{
        mt: 2,
        backgroundColor: '#000',
        position: 'relative',
        color: '#fff',
        height: '300px',
        overflow: 'hidden',
      }}
    >
      <CardActionArea sx={{ height: '100%' }}>
        <CardMedia
          component='img'
          height='100%'
          image='https://picsum.photos/1100/350'
          alt='Background image'
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1,
            opacity: '40%',
          }}
        />
        <CardContent
          sx={{
            padding: 3,
            width: '100%',
            position: 'relative',
            zIndex: 2,
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            height: '100%',
            boxSizing: 'border-box',
          }}
        >
          <Typography
            variant='h3'
            gutterBottom
            sx={{
              fontSize: {
                xs: '1.5rem',
                sm: '2rem',
                md: '2.5rem',
                lg: '3rem',
              },
            }}
          >
            Title of a longer featured big post
          </Typography>
          <Typography
            variant='h5'
            gutterBottom
            sx={{
              fontSize: {
                xs: '1rem',
                sm: '1.25rem',
                md: '1.5rem',
                lg: '1.75rem',
              },
              whiteSpace: 'wrap',
              overflow: 'hidden',
            }}
          >
            Multiple lines of text that form the lede, informing new readers
            quickly and efficiently about what's most interesting in this post's
            contents.
          </Typography>
          <Typography
            variant='body1'
            component='a'
            href='#'
            color='primary'
            sx={{
              fontSize: {
                xs: '0.75rem',
                sm: '0.875rem',
                md: '1rem',
                lg: '1.125rem',
              },
            }}
          >
            Continue reading...
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
