import { Card, CardContent, Typography } from '@mui/material';
interface Props {
  description: string;
}

export const CardAbout: React.FC<Props> = ({ description }) => {
  return (
    <Card sx={{ bgcolor: 'primary', boxShadow: 3 }}>
      <CardContent>
        <Typography
          variant='h6'
          sx={{ fontWeight: 'bold' }}
        >
          About
        </Typography>
        <Typography variant='body1'>{description}</Typography>
      </CardContent>
    </Card>
  );
};
