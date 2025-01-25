import { useSelector } from "react-redux";
import Profile from "../components/Profile";
import { useFetchdata } from "../hooks/useFetchdata";
import TechStack from "../components/TechStack";
import Info from "../components/Info";
import info from "../utils/info.json"
const Home = () => {
  useFetchdata();
  const adviceData = useSelector((store) => store.userStore?.bio);

  return (
    adviceData && (
      <div className="min-h-screen flex items-center justify-between">
        <div className="flex flex-col max-w-[640px] border-r-2">
          <Profile adviceData={adviceData} />
          <TechStack />
        </div>
        <Info info={info}/>
      </div>
    )
  );
};

export default Home;
