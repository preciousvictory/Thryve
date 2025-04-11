import { AIPoweredSumaries, Award, Game, InteractiveQuizzes } from "@/components/ui/Icon";
import { FeatureProps } from "@/types/components";

export const FeaturesList: FeatureProps[] = [
    { title: "AI Powered Summaries", desc: "Summarize complex documents instantly with AI-powered insights for quicker, smarter learning.", Icon: AIPoweredSumaries },
    { title: "Competitive Games", desc: "Challenge your peers in real-time educational games designed to make learning fun and engaging.", Icon: Game },
    { title: "Interactive Quizzes", desc: "Test your knowledge with dynamic quizzes that adapt to your learning pace and style.", Icon: InteractiveQuizzes },
    { title: "Achievements System", desc: "Earn badges, trophies, and climb the leaderboard as you master new concepts and skills.", Icon: Award }
]