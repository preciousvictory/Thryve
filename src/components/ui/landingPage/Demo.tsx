import { VideoItem } from "@/types/components";
import Button from "../Button"
import { Arrowright } from "../Icon";
import { videos } from "@/data";

const video: VideoItem = videos[0]; 

const Demo = () => {
    const renderVideoPlayer = (video: VideoItem) => {
        if (video.type === 'youtube') {
            const videoId = video.url.split('v=')[1]?.split('&')[0];
            return (
                <iframe
                    className="w-full aspect-video rounded-lg"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            );
        } else {
            return (
                <video
                    className="w-full aspect-video rounded-lg"
                    controls
                    poster={video.thumbnail}
                >
                    <source src={video.url} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            );
        }
    };

    return (
        <section className="py-16 text-center bg-[#1A1A1A] px-6">
            <h2 className="text-2xl md:text-4xl font-bold mb-10 text-white">Watch A Demo</h2>
            <div className="flex flex-col items-center justify-center gap-8">
                <div className="w-full aspect-video max-w-2xl">
                    {renderVideoPlayer(video)}
                </div>
                <Button variant="white" icon={<Arrowright />} iconPosition="right" >
                    Get started Now
                </Button>
            </div>
        </section>
    )
}

export default Demo