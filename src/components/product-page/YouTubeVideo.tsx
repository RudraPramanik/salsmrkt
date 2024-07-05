import React from 'react';
import YouTube from 'react-youtube';

interface YouTubeVideoProps {
  videoUrl: string;
}

const YouTubeVideo: React.FC<YouTubeVideoProps> = ({ videoUrl }) => {
  const videoId = getYouTubeVideoId(videoUrl);

  const onPlayerReady = (event: any) => {
    event.target.playVideo();
  };

  if (!videoId) {
    return <div>Invalid YouTube URL</div>;
  }

  return (
    <div className="flex items-center justify-center w-full h-full px-4 sm:px-8 xl:px-16 2xl:px-20 ">
      <div className="w-full max-w-7xl rounded-lg overflow-hidden relative pb-40pct">
        <div className="absolute top-0 left-0 w-full h-full">
          <YouTube
            videoId={videoId}
            opts={{
              height: '100%',
              width: '100%',
              playerVars: {
                autoplay: 1,
              },
            }}
            onReady={onPlayerReady}
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default YouTubeVideo;

const getYouTubeVideoId = (url: string): string | null => {
  const match = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  return match ? match[1] : null;
};
