
export const Profile = ({myData}) => {

   

    const{name,avatar_url,bio,twitter_username,login} = myData;
  return (
    <div className="max-w-[30rem] flex flex-col gap-4 items-center justify-between p-2">
      <div className="h-52 w-52 rounded-full">
        <img src={avatar_url} className="w-full rounded-full"></img>
      </div>
       <div className=" flex flex-col items-center justify-between gap-4">
           <p className="text-4xl">{name}</p>
           <p>{login}</p>
           <p className="text-wrap">{bio}</p>
           <p>X : @{twitter_username}</p>
       </div>
    </div>
  )
}

export default Profile