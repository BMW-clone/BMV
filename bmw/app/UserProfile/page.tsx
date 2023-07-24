"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import jwtDecoder from "jwt-decode";
import Cookies from "universal-cookie";
import axios from "axios";
import "../UserProfile/profile.css"
import { carData } from "./data"

type Props = {}

interface UserData {
  coverpic: string
  profilepic: string
  firstname: string
  lastname: string
  username: string
}

interface CarData {
  id: number;
  image: string;
  brand: string;
  description: string;
}

const Page = (props: Props) => {
  const [data, setData] = useState<UserData | null>(null);
  const router = useRouter();

  useEffect(() => {
    userinfo();
  }, []);

  const userinfo = () => {
    const cookie = new Cookies();
    const token = jwtDecoder(cookie.get("jwt-token")) as {
      role: string;
      username: string;
    };

    if (token.role === "Client") {
      axios
        .post<UserData>("http://localhost:3000/client/findOne", {
          username: token.username,
        })
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => console.log(err));
    } else {
      setData(null);
    }
  };

  const updateClick = () => {
    router.push("/UserProfile");
  };

  return (
    <div className="profilePage">
      {data ? (
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
      ) : null}

      {/* Display cards for cars */}
      <div className="product-details">
        {carData.map((car) => (
          <div key={car.id} className="card1">
            <img className="rectangle-icon" src={car.image} alt="" />
            <div className="name1">{car.brand}</div>
            <div className="surName1">{car.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;

 
   

