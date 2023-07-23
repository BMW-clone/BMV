import React, { useState } from 'react'
import axios from 'axios'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


type idSeller={
    id:Number | null
    setTrigger: (value: boolean) => void
}
export default function UpdateSellerProfile(props:idSeller) {

    const[firstname,setFirstName] = useState<string >("")
    const[lastname,setLastName] = useState<string >("")
    const[profilepic,setProfilepic] = useState<string >("")
     const[coverpic,setCoverPic] = useState<string >("")

     const [open, setOpen] = useState<boolean |false>(false)

     const info= {
      firstname:firstname,
      lastname:lastname,
      profilepic:profilepic,
      coverpic:coverpic
     }
  const handleSubmit = async () => {
      props.setTrigger(true)
    try {
      console.log(info)
      await axios.put(`http://localhost:5000/seller/update/${props.id}`, info);
      props.setTrigger(false)
    } catch (err) {
      console.log(err);
    }
  };


  const handleProfileImage = (file:string) => {
    const form = new FormData();
    form.append('file', file);
    form.append('upload_preset', 'bmwclone');
       axios.post('https://api.cloudinary.com/v1_1/dhz4wb76m/image/upload', form, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => setProfilepic(res.data.secure_url))
      .catch((err)=>{
        console.log(err);
      })
  }


  const handleCoverImage = (file :string) => {
    const form = new FormData();
    form.append('file', file);
    form.append('upload_preset', 'bmwclone');
       axios.post('https://api.cloudinary.com/v1_1/dhz4wb76m/image/upload', form, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => setCoverPic(res.data.secure_url))
      .catch((err)=>{
        console.log(err);
      })
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false); 
  };

  const handleChanage =(e:any)=>{
    console.log(firstname)
    console.log(lastname)
    setFirstName(e.target.value)
    setLastName(e.target.value)
   
  }

  

  return (
    <div>
    <Button variant="outlined"  id="editprofile" onClick={handleClickOpen}>
      Edit profile
    </Button>
    <Dialog open={open} onClose={handleClose}>
      <DialogContent>
        <TextField autoFocus margin="dense" id="name"  label="firstName"  type="email"  fullWidth  variant="standard" onChange={handleChanage}/>
        <TextField  autoFocus  margin="dense"  id="name"  label="lastName"  type="email" fullWidth  variant="standard" onChange={handleChanage}/>
        <input type='file' onChange={(e)=>handleProfileImage(e.target.files[0])} />
        <input type='file' onChange={(e)=>handleCoverImage(e.target.files[0])} />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={() => { handleSubmit(); handleClose(); }}>Submit</Button>
      </DialogActions>
    </Dialog>
  </div>
  )
}