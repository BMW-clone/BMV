import React, { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import axios from 'axios';

type Props = {}

interface CarsId{
    id:Number | null
    setTrigger: (value: boolean) => void
}
const Update = (props: CarsId) => {
  const [price ,setPrice] =useState<Number |string>("")
  const [image, setImage] = useState <string >("")
  const [color , setColor] =useState<string >("")

  const [open, setOpen] = useState<boolean |false>(false)

  const info = { 
    price: Number(price),
    color: color,
    image: image
    }

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleSubmit = async () => {
    
      props.setTrigger(true);
      try {
        await axios.put(`http://localhost:5000/usedcars/update/${props.id}`, info);
        props.setTrigger(false)
      } catch (err) {
        console.log(err);
      }
    }

    
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

    

  return (
     <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Update
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>

          <TextField autoFocus margin="dense"  id="name"  label="price"         variant="standard"  onChange={(e) => setPrice(e.target.value)} />
          <TextField autoFocus margin="dense"  id="name"  label="color"          variant="standard"  onChange={(e) => setColor(e.target.value)}/>
         
          <input type='file' onChange={(e)=>handleImageUpload(e.target.files[0])} />
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={() => { handleSubmit() ;handleClose() }}>Submit</Button>
        </DialogActions>    
        </DialogContent>
      </Dialog>
    </>
  )
}

export default Update