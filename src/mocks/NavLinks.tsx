import {
  MailOutline as SubscribeIcon,
  Search as SearchIcon,
  PersonAdd as SignUpIcon,
  Computer as ComputerIcon,
  DesignServices as DesignIcon,
  Business as BusinessIcon,
  AccountBalance as PoliticsIcon,
  Comment as OpinionIcon,
  Science as ScienceIcon,
  HealthAndSafety as HealthIcon,
  Style as StyleIcon,
  Flight as TravelIcon,
} from '@mui/icons-material';

import type { NavLinks } from '../types';

export const navLinksTop: NavLinks = [
  { label: 'Subscribe', icon: <SubscribeIcon /> },
  { label: 'Search', icon: <SearchIcon /> },
  { label: 'Sign up', icon: <SignUpIcon /> },
];

export const navLinksBottom: NavLinks = [
  { label: 'Technology', icon: <ComputerIcon /> },
  { label: 'Design', icon: <DesignIcon /> },
  { label: 'Business', icon: <BusinessIcon /> },
  { label: 'Politics', icon: <PoliticsIcon /> },
  { label: 'Opinion', icon: <OpinionIcon /> },
  { label: 'Science', icon: <ScienceIcon /> },
  { label: 'Health', icon: <HealthIcon /> },
  { label: 'Style', icon: <StyleIcon /> },
  { label: 'Travel', icon: <TravelIcon /> },
];
