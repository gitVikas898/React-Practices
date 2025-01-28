import Card from "../components/UI/Card";
import { useSelector } from "react-redux";
import { useFetchdata } from "../hooks/useFetchdata.js";
const Contact = () => {
  useFetchdata();
  const myData = useSelector((store) => store.userStore?.bio);

  return (
    <div>
        <Card myData={myData}/>
    </div>
  )
}

export default Contact