import React, { useState, useEffect } from 'react';
import { Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import data from '../data/data.json';
import 'swiper/swiper-bundle.css';

const TrendingSection = ({ onVideoClick }) => {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    let sortedTendingData = []
    const storedMovieId = sessionStorage.getItem('movieId');
    if(storedMovieId) {
      sortedTendingData=[data.TendingNow.find(item=>item.Id===storedMovieId), ...data.TendingNow.filter(item=>item.Id!==storedMovieId)]
    } else {
      sortedTendingData = data.TendingNow.sort((a, b) => {
        const dateA = new Date(a.Date).getTime(); 
        const dateB = new Date(b.Date).getTime();
        return dateB - dateA;
    });
    }
    setVideos(sortedTendingData.slice(0, 50));
  }, []);

  const handleVideoClick = (video) => {
    onVideoClick(video)
    sessionStorage.setItem('movieId', video.Id);
  }

  return (
    <div className='w-full fixed bottom-0 z-10 pl-28'>
      <p className='text-white pb-4 text-lg'>Trending now</p>
      <Swiper
          spaceBetween={50}
          slidesPerView={8}
          modules={[ Scrollbar ]}
          scrollbar={{ draggable: true }}
        >
          {videos.map(video=>(
          <SwiperSlide key={video.Id} onClick={()=>handleVideoClick(video)}>
            <img src={`../assets/images/${video.CoverImage}`} alt={video.Title} width={200} height={400} />
          </SwiperSlide>
            
          ))} 
        </Swiper>
    </div>
  );
};

export default TrendingSection;