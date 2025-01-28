import React from "react";

const Card = ({myData}) => {

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
      <div className="flex justify-between">
        <button className="btn bg-blue-700">LinkedIn</button>
        <button className="btn bg-blue-700">{twitter_username}</button>
      </div>
    </div>
  </div>
  );
};

export default Card;
