import {useState ,useEffect} from 'react';
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
import './Cars.css'



interface Props{
  data :NewCarsData[]
  el:NewCarsData
  delete:NewCarsData
  update:NewCarsData
}



export const Cars=(props:Props )=>{

  const [price,setPrice]=useState('')

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  console.log('p',props);
  
    const columns :any= [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'brand',
          headerName: 'Brand',
          width: 150,
          editable: true,
        },
        {
          field: 'model',
          headerName: 'Model',
          width: 150,
          editable: true,
        },
      
      
        
      
        {
          field: 'color',
          headerName: 'Color',
          width: 150,
          editable: true,
        },
      
        {
          field: 'price',
      
           
          headerName: 'Price',
          width: 150,
          editable: true,
          
   
      
        },

    
      
      
        {
          renderCell: (cellValues :any) => {
            
            return (
              <div>

         <IconButton type="submit" variant="outlined"  onClick={handleClickOpen} >
      < EditIcon/>
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle> New Price</DialogTitle>
        <DialogContent>
          <DialogContentText>
   
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Price"
            onChange={(e)=>{setPrice(e.target.value)}}
           
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>

        <IconButton onClick={handleClose}>
           <CloseIcon/>
          </IconButton>

          <IconButton   >
           <DoneIcon       onClick={()=> {props.update(props.el.id,price);console.log("id",props.el.id) }}/>
          </IconButton>
        </DialogActions>
      </Dialog>






              </div>
            
            
            ); 
          }
          
        },
      
        {
          field: "delete",
          type: 'actions',
          renderCell: (cellValues:any ) => {
            return (
          
              <IconButton aria-label="delete" type="submit"   onClick={()=> {props.delete(props.el.id); console.log("id",props.el.id)} }>
                <DeleteIcon    />
              </IconButton>
           
           
            ); 
          }
          }
       
        
        
         
          
       
      
      ]
      
      
      
      const rows =props.data



  return (
    
    <div>
      <div className='statistics '>
    <Box sx={{ height: 400, width: '100%' }}>
   
      <DataGrid 
    
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
