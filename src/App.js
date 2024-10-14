import { useState } from "react";
import data from "./data/data.json";
import MainMenu from "./components/mainMenu";
import FeaturedVideo from "./components/featuredVideo";
import TrendingSection from "./components/trendingSection";
import './index.css'

function App() {

  const [selectedVideo, setSelectedVideo] = useState(data.Featured);

  return (
    <div className='h-screen w-screen'>
      <MainMenu />
      <FeaturedVideo selectedMovie={selectedVideo} />
      <TrendingSection onVideoClick={setSelectedVideo} />
    </div>
  );
}

export default App;
