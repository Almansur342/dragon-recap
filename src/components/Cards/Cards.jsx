import { Link } from "react-router-dom";

const Cards = ({ news }) => {
  const { rating, total_view, title, image_url,_id } = news;
  return (
    <Link to={`/details/${_id}`}>
      <div className="card flex bg-base-100 shadow-xl border-2 p-2">
        <figure><img src={image_url} alt="Shoes" /></figure>
        <div className="">
          <h2 className="card-title">{title}</h2>
          <hr className="my-2" />
          <div className="flex justify-between items-center flex">
            <p>{rating.number}</p>
            <p>{rating.badge}</p>
            <p>{total_view}</p>
          </div>
          <p></p>
        </div>
      </div>
    </Link>
  );
};

export default Cards;