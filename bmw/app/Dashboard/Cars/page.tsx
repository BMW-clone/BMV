import {FC,useState ,useEffect} from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import './Cars.css'



interface Props{
  data :NewCarsData[]
  el:NewCarsData
  delete:NewCarsData
}



export const Cars=(props:Props )=>{

  const [price,setPrice]=useState('')

  const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
    setPrice(event.target.value)}


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
          field: '',
          placeholder:" enter the new price",
      
          headerName: 'Updated Price',
          width: 150,
          editable: true,

          renderCell:(cellValues:any)=>{
            return (

              <input
               onChange={handleChange}
                      />
             
            )
          }
   
      
        },
      
      
        {
          renderCell: (cellValues :any) => {
            
            return (
             
              <IconButton aria-label="share"    onClick={()=> {props.update(props.el.price)}}   >
             
            
                <EditIcon 
                />
              </IconButton>
            
            ); 
          }
          
        },
      
        {
          field: "",
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
