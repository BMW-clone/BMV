import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

interface idSeller{
  idSeller:Number | null
  setTrigger: (value: boolean) => void
  
}




const Post=(props:idSeller ) =>{
  
  const [price ,setPrice] =useState<Number |string >("")
  const [category,setCategory ] = useState<CarCategory |string>("")
  const [color , setColor] =useState<string >("")
  const [year , setYear] = useState <Number |string>("")
  const [image, setImage] = useState <string|null >(null)
  const [model,setModel]= useState<string>("")
  const [mileage,setMileage] = useState<string >("")
  const [hp,setHp] =useState<Number | string>("")
  const [transmition,setTransmition] = useState<CarTransmition|string> ("")
  const [carburant , setCarburant ] = useState<CarCarburant |string> ("")
  const [onStock , setOnStock ] = useState<onStock |string> ("")

  
  const [open, setOpen] = useState<boolean |false>(false)

  
  
  
 
  const info = {
    price: Number(price),
    category: category,
    color: color,
    year: Number(year),
    image: image,
    model: model,
    mileage: mileage,
    hp: Number(hp),
    transmition: transmition,
    carburant: carburant,
    onStock : "available",
    SellerId:props?.idSeller
  };
  
 
  
  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const handleImageUpload = (file:string) => {
    
    const form = new FormData();
    form.append('file', file);
    form.append('upload_preset', 'bmwclone');
       axios.post('https://api.cloudinary.com/v1_1/dhz4wb76m/image/upload', form, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => setImage(res.data.secure_url))
      .catch((err)=>{
        console.log(err);
      })
  }


  const handleSubmit = () => { 
  props.setTrigger(true)
    axios
      .post("http://localhost:5000/usedcars/post",info)
      .then((res) => {
      
        console.log(res);
  props.setTrigger(false)
        
      })
      .catch((err) => {
        console.log({err : err.message});
      });
  };


  return (
    
      <div>
        <Button variant="outlined" id='post' onClick={() => handleClickOpen()}>
          Post
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogContent>
            <TextField autoFocus margin="dense" id="name" label="price"  variant="standard" onChange={(e) => setPrice(e.target.value)} />
            <TextField autoFocus margin="dense" id="name" label="category" variant="standard" onChange={(e) => setCategory(e.target.value)} />
            <TextField autoFocus margin="dense" id="name" label="color" variant="standard" onChange={(e)=>setColor(e.target.value)} />
            <TextField autoFocus margin="dense" id="name" label="year" variant="standard" onChange={(e)=>setYear(e.target.value)} />
            <TextField autoFocus margin="dense" id="name" label="mileage" variant="standard" onChange={(e)=>setMileage(e.target.value)} />
            <TextField autoFocus margin="dense" id="name" label="model" variant="standard" onChange={(e)=>setModel(e.target.value)} />
            <TextField autoFocus margin="dense" id="name" label="transmition" variant="standard" onChange={(e)=>setTransmition(e.target.value)} />
            <TextField autoFocus margin="dense" id="name" label="hp" variant="standard" onChange={(e)=>setHp(e.target.value)} />
            <TextField autoFocus margin="dense" id="name" label="carburant" variant="standard" onChange={(e)=>setCarburant(e.target.value)} />
            <TextField autoFocus margin="dense" id="name" label="onStock" variant="standard" onChange={(e)=>setOnStock(e.target.value)} />

            <input type='file' onChange={(e)=>handleImageUpload(e.target.files[0])} />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={() => {  handleSubmit(); handleClose() }}>Submit</Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  
}

export default Post