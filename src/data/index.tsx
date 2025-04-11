import { VideoItem } from "@/types/components";

export const videos: VideoItem[] = [
    {
        id: '1',
        title: 'Getting Started with React',
        type: "youtube",
        url: 'https://www.youtube.com/watch?v=w7ejDZ8SWv8',
        thumbnail: '',
        description: 'Learn the basics of React in this comprehensive tutorial',
    },
    {
        id: '2',
        title: 'Tailwind CSS Crash Course',
        type: "youtube",
        url: 'https://www.youtube.com/watch?v=UBOj6rqRUME',
        thumbnail: '',
        description: 'Master Tailwind CSS in one hour',
    },
    {
        id: '3',
        title: 'Local Demo Video',
        type: "local",
        url: '/videos/demo.mp4',
        thumbnail: '/images/video-thumbnail.jpg',
        description: 'Master Tailwind CSS in one hour',
    },
];
