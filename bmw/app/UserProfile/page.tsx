"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import jwtDecoder from "jwt-decode";
import Cookies from "universal-cookie";
import axios from "axios";
import "../UserProfile/profile.css"

type Props = {}

interface UserData {
  coverpic: string
  profilepic: string
  firstname: string
  lastname: string
  username: string
}

const Page = (props: Props) => {
  const [data, setData] = useState<UserData | null>(null)
  const router = useRouter()

  useEffect(() => {
    userinfo()
  }, [])

  const userinfo = () => {
    const cookie = new Cookies()
    const token = jwtDecoder(cookie.get("jwt-token")) as {
      role: string
      username: string
    }

    if (token.role === "Client") {
      axios
        .post<UserData>("http://localhost:3000/client/findOne", {
          username: token.username,
        })
        .then((res) => {
          setData(res.data)
        })
        .catch((err) => console.log(err))
    } else {

      setData(null)
    }
  }

  const updateClick = () => {
    router.push("/UserProfile")
  }

  return data ? (
    <div className="banners">
      <img className="coverImage" alt="" src={data?.coverpic} />
      <div className="editProfile">
        <div className="editProfile1" onClick={updateClick}>
          Edit Profile
        </div>
      </div>
      <img className="profilePic" alt="" src={data?.profilepic} />
      <div className="text1">
        <div className="name">{data?.firstname + " " + data?.lastname}</div>
        <div className="surName">@{data?.username}</div>
      </div>
    </div>
  ) : null
}

export default Page
