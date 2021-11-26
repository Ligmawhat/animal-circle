import React from 'react';
import Box from '@material-ui/core/Box';
import { purple } from '@material-ui/core/colors';
import { NavMenu, NavItem } from '@mui-treasury/components/menu/navigation';
import { usePointNavigationMenuStyles } from '@mui-treasury/styles/navigationMenu/point';
// import { Font, FontProvider } from 'website/src/components/Font';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';



export const PointNavigationMenuStyle = React.memo(
  function PointNavigationMenu() {
    const [index, setIndex] = React.useState(1);
    const handleClick = i => (e: React.SyntheticEvent) => {
      e.preventDefault();
      setIndex(i);
    };
    return (
      <Box sx={{display: 'flex',
      flexDirection: 'column',
      height: '200px',
      border: '10px solid red'
      }}   >
  
          <NavMenu 
          sx={{display: 'flex',
      flexDirection: 'column',
      border: '10px solid red'
      }}
          
          useStyles={usePointNavigationMenuStyles}
          >
            <NavItem 
            sx={{height: '50px'}}
            
            as={'div'} active={index === 0} onClick={handleClick(0)}>
            <VolunteerActivismIcon />

            </NavItem>
            <NavItem as={'div'} active={index === 1} onClick={handleClick(1)}>
            <ShoppingBagIcon />
            </NavItem>
            <NavItem as={'div'} active={index === 2} onClick={handleClick(2)}>
       <PublicOutlinedIcon />
            </NavItem>
          </NavMenu>

      </Box>
    );
  }
);