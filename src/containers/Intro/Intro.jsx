import { useRef, useState } from 'react';

import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

import { meal } from '@/constants';

import '@/containers/Intro/Intro.css';

const RenderPauseOrPlayIcon = ({ playVideo }) => {
  if (!playVideo) return <BsFillPlayFill color="#fff" fontSize={50} />;

  return <BsPauseFill color="#fff" fontSize={50} />;
};

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);

  const videoRef = useRef(null);

  const handleVideo = () => {
    setPlayVideo((previousPlayVideo) => !previousPlayVideo);

    if (playVideo) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };

  return (
    <div className="app__video">
      <video
        src={meal}
        ref={videoRef}
        type="video/mp4"
        loop
        controls={false}
        muted
      />
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={handleVideo}
        >
          <RenderPauseOrPlayIcon playVideo={playVideo} />
        </div>
      </div>
    </div>
  );
};

export default Intro;
