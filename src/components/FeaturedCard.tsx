import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Link,
  Typography,
} from '@mui/material';

type Date = `${string} ${number}`;
type Href = `https://${string}`;

interface Props {
  title: string;
  date: Date;
  description: string;
  href: Href;
  picture: string;
}

export const FeaturedCard: React.FC<Props> = ({
  title,
  date,
  description,
  href,
  picture,
}) => {
  return (
    <Card
      sx={{
        height: { xs: 'auto', sm: 'auto', md: 'auto', lg: '200px' },
        boxShadow: 4,
      }}
    >
      <CardActionArea
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: { xs: 'center', sm: 'start' },
          gap: { xs: 1, sm: 0 },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1,

            padding: 2,
            textAlign: { xs: 'center', sm: 'start' },
          }}
        >
          <Typography variant='h5'>{title}</Typography>
          <Typography variant='body1'>{date}</Typography>
          <Typography variant='body1'>{description}</Typography>
          <Typography
            variant='h6'
            sx={{ mt: 1 }}
          >
            <Link
              href={href}
              color='primary'
              underline='hover'
            >
              Continue reading...
            </Link>
          </Typography>
        </Box>

        <CardMedia
          component='img'
          image={picture}
          alt={title}
          sx={{
            width: { xs: '100%', sm: '150px' },
            height: { xs: '200px', md: '100%' },
            objectFit: 'cover',
          }}
        />
      </CardActionArea>
    </Card>
  );
};
