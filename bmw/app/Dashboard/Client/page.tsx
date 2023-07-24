"use client"
import {FC,useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';

import  './Client.css'
import { colors } from '@mui/material';


interface Props{
  data :ClientData[],
  e:ClientData,
  delete:ClientData,
  update:ClientData

}

export  const Client=(props:Props )=>{

  const [open, setOpen] = useState(false);
  const [role,setRole]=useState("")


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  console.log('p',props);
  
    const columns :any=     [
        
        { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'firstname',
      headerName: 'FirstName',
      width: 150,
      editable: true,
    },
    {
        field: 'lastname',
        headerName: 'LastName',
        width: 150,
        editable: true,
      },
    {
      field: 'username',
      headerName: 'UserName',
      width: 150,
      editable: true,
    },
  
    {
      field: 'role',
      headerName: 'Role',
      width: 150,
      editable: true,
    },
  

  
    
    {
      renderCell:(cellValues:any) => {
        return (
          <div>
      <IconButton type="submit" variant="outlined"  onClick={handleClickOpen} >
      < EditIcon/>
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle> Role</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Select a role
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Role"
            onChange={(e)=>{setRole(e.target.value)}}
           
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>

        <IconButton onClick={handleClose}>
           <CloseIcon/>
          </IconButton>

          <IconButton   >
           <DoneIcon       onClick={()=> {props.update(props.e.username,role); }}/>
          </IconButton>
        </DialogActions>
      </Dialog>
      </div>)
      }
      
    },
  
    {
      field: "delete",
      type: 'actions',
      renderCell: (cellValues:any) => {
        return (
      
          <IconButton aria-label="delete"   type="submit"   onClick={()=> {props.delete(props.e.id); console.log("id",props.e.id)} }  >
            <DeleteIcon />
          </IconButton>
       
       
        ); 
      }
      }
   
  
  ]
        
         
          
       
      
      
      
      
      
      const rows =props.data



  return (
    
    <div>
      <div className='client'>
    <Box sx={{ height: 400, width: '80%'  }}>
   
      <DataGrid 
      sx={{fontFamily:"Plus Jakarta Sans, sans-serif", color:'#EEF1F6',}}
        rows={rows}
        columns ={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
             
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
    </div>
    </div>
  );}
