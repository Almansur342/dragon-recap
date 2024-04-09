import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLoaderData } from 'react-router-dom';



const Details = () => {
  const {id} = useParams();
  const newsDetails = useLoaderData();
  const [matched, setMatched] = useState({});
  // console.log(newsDetails)
  // console.log(id);
  useEffect(()=>{
    if(newsDetails){
      const singleDetails = newsDetails.find((item) =>item._id==id);
      setMatched(singleDetails);
    }
  },[id,newsDetails])
  // console.log(matched);
  const { rating, total_view, title,details, image_url,} =matched || {};

  return (
    <div className=" min-h-screen bg-base-200">
    <div className="gap-10 grid grid-cols-5 p-2">
      <div className="col-span-2">
        <img className="min-h-screen object-cover" src={image_url} alt="" />
      </div>
      <div className="col-span-3">
        <h1 className="text-5xl font-bold">{title}</h1>
        <p className="py-6">{details}</p>
        <div className="flex justify-between items-center">
        <p>{rating==undefined ? 'undefined' : `${rating.number}`}</p>
        <p>{rating==undefined ? 'undefined' : `${rating.badge}`}</p>
        <p>{total_view}</p>
        <p></p>
        </div>
         
      </div>
    </div>
  </div>
  );
};

export default Details;