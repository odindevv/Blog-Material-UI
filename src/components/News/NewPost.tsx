import { Box, Typography } from '@mui/material';
import { ReactNode } from 'react';

interface Props {
  title: string;
  date: string;
  author: string;
  children: ReactNode;
}

export const NewPost: React.FC<Props> = ({ title, date, author, children }) => {
  return (
    <Box sx={{ mb: 8 }}>
      <Typography
        mt={2}
        variant='h3'
      >
        {title}
      </Typography>
      <Typography
        component='h1'
        variant='body1'
        sx={{ my: 1, fontStyle: 'italic', display: 'flex', gap: 0.5 }}
      >
        {date} by{' '}
        <Typography
          component='a'
          color='primary'
          href='#'
        >
          {author}
        </Typography>
      </Typography>
      <Typography variant='body1'>{children}</Typography>
    </Box>
  );
};
