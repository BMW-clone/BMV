import React, { useState } from "react"
import axios from "axios"
import { Box } from "@mui/material"
import Input from "@mui/material/Input"

interface UserUpdateProps {}

interface CloudinaryResponse {
  secure_url: string
}

const UserUpdate: React.FC<UserUpdateProps> = () => {
  const ariaLabel = { 'aria-label': 'description' }
  const [userData, setUserData] = useState({
    profilepic: null as string | null,
    coverpic: null as string | null,
    email: null as string | null,
    firstname: null as string | null,
    lastname: null as string | null,
    phoneNumber: null as string | null,
    username: null as string | null,
  })

  const handleSubmit = () => {
    axios
      .put("http://localhost:3000/client/update", userData)
      .then((res) => {
        console.log("res ", res)
      })
      .catch((err) => {
        console.log(err)
      })
  }

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>, type: "profilepic" | "coverpic") => {
      const file = event.currentTarget.files?.[0];
      if (file) {
      const form = new FormData();
      form.append("file", file);
      form.append("upload_preset", "bmwclone");
      axios
        .post<CloudinaryResponse>(
          "https://api.cloudinary.com/v1_1/dhz4wb76m/upload",
          form,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((res) => {
          setUserData((prevData) => ({
            ...prevData,
            [type]: res.data.secure_url,
          }))
        })
        .catch((err) => {
          console.log(err);
        })
    }
  };
  


  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1 },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <Input
        type="text"
        className="username1"
        name="username"
        placeholder="user name"
        onChange={(e) => {
          setUserData({ ...userData, username: e.target.value })
        }}
        inputProps={ariaLabel}
      />
      <Input
        type="text"
        className="firstname1"
        name="firstname"
        placeholder="first name"
        onChange={(e) => {
          setUserData({ ...userData, firstname: e.target.value })
        }}
        inputProps={ariaLabel}
      />

      <Input
        type="text"
        className="lastname1"
        name="lastname"
        placeholder="last name"
        onChange={(e) => {
          setUserData({ ...userData, lastname: e.target.value })
        }}
        inputProps={ariaLabel}
      />

      <Input
        type="email"
        className="email1"
        name="email"
        placeholder="email"
        onChange={(e) => {
          setUserData({ ...userData, email: e.target.value })
        }}
        inputProps={ariaLabel}
      />
      <Input
        type="tel"
        className="phonenumber1"
        name="phonenumber"
        placeholder="phone number"
        onChange={(e) => {
          setUserData({ ...userData, phoneNumber: e.target.value })
        }}
        inputProps={ariaLabel}
      />
{/* 
      <Input type="file" onChange={(e) => handleImageUpload(e.target.files[0], "profilepic")} />
      <Input type="file" onChange={(e) => handleImageUpload(e.target.files[0], "coverpic")} /> */}

      <button type="button" onClick={handleSubmit}>Save Changes</button>
    </Box>
  )
}


export default UserUpdate
