import { useSelector } from "react-redux";
import { useFetchdata } from "../hooks/useFetchdata";
import Drawer from "../components/UI/Drawer";
import Accordion from "../components/UI/Accordion";

const Home = () => {
  useFetchdata();
  const myData = useSelector((store) => store.userStore?.bio);
  if (!myData) {
    return (
      <div className="flex w-52 flex-col gap-4">
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
    );  
  }

  const { name, avatar_url, bio, twitter_username, login } = myData;


  return (
    <div className="hero bg-base-200 min-h-[85vh]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={avatar_url} class="max-w-sm rounded-lg shadow-2xl" />
        <div className="flex flex-col gap-4">
          <h1 className="text-7xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text leading-tight overflow-visible">{name}</h1>
          <p className="text-2xl font-bold bg-gradient-to-r from-white via-blue-300 to-purple-300 text-transparent bg-clip-text leading-tight">{bio}</p>
          <div className="">
              <Drawer/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
