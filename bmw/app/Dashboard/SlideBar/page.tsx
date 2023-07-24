import * as React from 'react';
import { SlideBarData } from './Sildebardata';
import './Slide.css'


export const SlideBar=()=> {
  return (
    <div className='dashboard-sidebar'>
        <ul className="sidebar-list">
          {
            SlideBarData.map<any,number>((val,key)=>{
              return (
               <li 
             
                key={key} 

                className='sidebar-row'
                onClick={()=>{window.location.pathname=val.link}} >  
               {""}
               <div id="icon">{val.icons} </div> {""}
           
               <div id="title"> {val.title}</div>
               </li>


              )
            })
          }
        </ul>


       
       </div>


  );
}
