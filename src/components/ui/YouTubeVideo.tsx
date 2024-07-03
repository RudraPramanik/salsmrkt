import React, { useState } from 'react';
import YouTube from 'react-youtube';

interface YouTubeVideoProps {
  videoUrl: string;
}

const YouTubeVideo: React.FC<YouTubeVideoProps> = ({ videoUrl }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const videoId = getYouTubeVideoId(videoUrl);

  const onPlayerReady = (event: any) => {
    event.target.playVideo();
  };

  const handleOpen = () => {
    setIsVideoPlaying(true);
  };

  if (!videoId) {
    return <div>Invalid YouTube URL</div>;
  }

  return (
    <div className="flex items-center justify-center h-screen">
      {!isVideoPlaying ? (
        <button
          onClick={handleOpen}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
        >
          Play Video
        </button>
      ) : (
        <YouTube
          videoId={videoId}
          opts={{
            playerVars: {
              autoplay: 1,
            },
          }}
          onReady={onPlayerReady}
          className="w-full max-w-3xl aspect-video"
        />
      )}
    </div>
  );
};

export default YouTubeVideo;

const getYouTubeVideoId = (url: string): string | null => {
  const match = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  return match ? match[1] : null;
};
