import { useSelector } from "react-redux";
import Profile from "../components/Profile";
import { useFetchdata } from "../hooks/useFetchdata";
import TechStack from "../components/TechStack";
import Info from "../components/Info";
import info from "../utils/info.json"
const Home = () => {
  useFetchdata();
  const myData = useSelector((store) => store.userStore?.bio);

  return (
    myData && (
      <div className="min-h-screen flex items-center justify-between">
        <div className="flex flex-col max-w-[640px] border-r-2">
          <Profile myData={myData} />
          <TechStack />
        </div>
        <Info info={info}/>
      </div>
    )
  );
};

export default Home;
