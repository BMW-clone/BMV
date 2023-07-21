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
}
const Update = (props: CarsId) => {
  const [price ,setPrice] =useState<number |string>("")
  const [image, setImage] = useState <String | null>(null)
  const [color , setColor] =useState<String |"">("")

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
    
      // setTrigger(true);
      try {
        await axios.put(`http://localhost:5000/usedcars/update/${props.id}`, info);
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

    

      const handleChange =(e:any)=>{
      setPrice(e.target.value)
      setColor(e.target.value)
      if(e.target.files){
        handleImageUpload(e.target.files[0] )
        console.log(e.target.files)
       }
     }
    
   

    

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Update
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>

          <TextField autoFocus margin="dense"  id="name"  label="price"         variant="standard"  onChange={handleChange} />
          <TextField autoFocus margin="dense"  id="name"  label="color"          variant="standard"  onChange={handleChange}/>
         
          <input type='file' onChange={handleChange} />
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={() => { handleSubmit(); handleClose(); }}>Submit</Button>
        </DialogActions>    
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Update