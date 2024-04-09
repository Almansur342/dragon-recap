
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cards from '../components/Cards/Cards';
const Home = () => {
  const [allNews, setAllNews] = useState(useLoaderData());
  // console.log(allNews)
  return (
    <div className='grid grid-cols-3 gap-10'>
      {
        allNews.map(news => <Cards key={news._id} news={news}></Cards>)
      }
    </div>
  );
};

export default Home;