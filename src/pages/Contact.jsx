import Card from "../components/UI/Card";
import { useSelector } from "react-redux";
import { useFetchdata } from "../hooks/useFetchdata.js";
const Contact = () => {
  useFetchdata();
  const myData = useSelector((store) => store.userStore?.bio);

  if(!myData){
    return(
      <div className="flex w-52 flex-col gap-4">
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
    )
  }

  return (
    <div>
        <Card myData={myData}/>
    </div>
  )
}

export default Contact