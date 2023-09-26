import getYouTubeId from "get-youtube-id";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

export const YtPreview: React.FC<{ url: string }> = ({ url }) => {
  if (!url) {
    return <div>Missing YouTube URL</div>;
  }
  const id = getYouTubeId(url);
  if (!id) {
    return <div>Missing YouTube id,something went wrong!!</div>;
  }
  return <LiteYouTubeEmbed title="" id={id} />;
};
