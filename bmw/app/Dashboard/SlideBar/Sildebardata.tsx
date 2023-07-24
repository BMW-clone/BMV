import * as React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
export const SlideBarData=[

       {  
         title:"Home",
         icons:<HomeIcon /> ,
         link:  '/home', 


       },
 
       {  
        title:"Mail Box",
        icons:< MailIcon /> ,
        link:  '/mail', 
      },

      
      {  
        title:"Calender",
        icons:<CalendarMonthIcon /> ,
        link:  '', 
    },
    
    {  
        title:"Client",
        icons:<PersonIcon/> ,
        link:  './Dashboard/Client', 


      },
      {  
        title:"Seller",
        icons:<PersonIcon/> ,
       


      },

      {  
        title:"Add Product",
        icons:<AddIcon/> ,
        link:  './Dashboard/Add', 


      },
      

      

]

