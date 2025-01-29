import React from "react";

import { FaGithub , FaLinkedin} from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6"
import { useFetchdata } from "../../hooks/useFetchdata";
const Card = ({myData}) => {
    useFetchdata();
    const{name,avatar_url,bio,twitter_username,login} = myData;

   

  return (
    <div className="card bg-base-100 w-96 shadow-sm">
    <figure>
      <img
        src={avatar_url}
        alt="profile" />
    </figure>
    <div className="card-body">
        <h1 className="card-title">{name}</h1>
      <h2 className="card-title">{login}</h2>
      <p>{bio}</p>
      
    </div>
  </div>
  );
};

export default Card;
