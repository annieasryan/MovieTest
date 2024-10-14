import { useEffect, useState } from 'react';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FeaturedVideo = ({ selectedMovie }) => {

const [isPlaying, setIsPlaying] = useState(false);

useEffect(() => {
  if (selectedMovie && selectedMovie.VideoUrl) {
    const timer = setTimeout(() => setIsPlaying(true), 2000);
    return () => clearTimeout(timer);
  }
}, [selectedMovie]);

const formatedDuration = (duration) => {
  const totalMinutes = Math.floor( duration / 60)
  const hours = Math.floor(totalMinutes / 60)
  const minutes = totalMinutes % 60
  return `${hours}h ${minutes}m `
}

  return (
    <div className='w-full h-full' style={{
      backgroundImage: isPlaying ? 'none' : `url(/assets/images/${selectedMovie.CoverImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      {isPlaying && 
       <video 
       src={selectedMovie.VideoUrl} 
       autoPlay 
       muted 
       loop 
       style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        objectFit: 'cover',
        zIndex: -1,
      }}
      onError={() => {
        setIsPlaying(false)
        alert('Error loading video')
      }}
     />
    }
       
       <div className='p-28 flex flex-col items-start justify-center gap-4' 
          style={{
            position: 'relative',
            zIndex: 1,
          }}
       >
          <p className='text-xl uppercase' style={{color:'#858688'}}>{selectedMovie.Category}</p>
          <img src={`../assets/images/${selectedMovie.TitleImage}`} alt='irish'/>
          <div className='text-white text-lg flex gap-2'>
            <span>{selectedMovie.ReleaseYear}</span> 
            <span>{selectedMovie.MpaRating}</span>
            <span>{formatedDuration(selectedMovie.Duration)}</span>
          </div>
          <p className='text-white text-lg'>{selectedMovie.Description}</p>
          <div className='flex gap-4'>
            <button className='rounded-3xl bg-white px-8 py-2'>
              <FontAwesomeIcon icon={faPlay} />
              <span className='ml-4'>Play</span>
            </button>
            <button className='rounded-3xl bg-blue-700 px-8 py-2' 
            style={{background: 'linear-gradient(93deg, rgba(31,35,219,1) 0%, rgba(5,24,132,1) 100%)'}}
            >
              More Info
            </button> 
          </div>
        </div>
    </div>
  );
};

export default FeaturedVideo;