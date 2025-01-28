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
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={avatar_url} class="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">{name}</h1>
          <p className="py-6">{bio}</p>
          <div>
              <Drawer/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
