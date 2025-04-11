import Button from "@/components/ui/Button"
import { GameIcons, WatchDemo } from "@/components/ui/Icon"
import CallToAction from "@/components/ui/landingPage/CallToAction"
import Footer from "@/components/ui/landingPage/Footer"
import Testimonial from "@/components/ui/landingPage/Testimonial"

const GameMode = () => {
    return (
        <div className="font-sans ">
            <div className="m-12">
                <div className="max-w-6xl py-3 lg:py-8 mx-auto text-left flex flex-col lg:w-2/3 lg:justify-center lg:items-center">
                    <h1 className="text-3xl md:text-5xl text-[var(--primary)] font-bold leading-tight text-center">
                        Play. Learn. Win!
                        <br className="hidden md:block " />
                        <span className="text-[#333333]">Turn Studying into an Epic Game </span>
                    </h1>
                    <p className="mt-2 text-[#4A4A4A] text-center text-lg font-medium">
                        Challenge your friends, test your knowledge, and level up your learning with AI-powered quizzes and brain-teasing games. Learning has never been this fun!
                    </p>
                </div>

                <div className="flex  justify-center gap-4">
                    <Button variant="gradient">Try For Free Now</Button>
                    <Button variant="outlinePrimary" icon={<WatchDemo />}>Watch Demo</Button>
                </div>
            </div>

            <div className="flex flex-row items-center justify-center mt-20 mb-10">
                <div className="bg-[#584CF4]/20 shadow-xl w-[600px] h-[400px] rounded-xl"></div>
            </div>
            <div className="p-12 m-12">
                <h2 className="text-4xl font-bold mb-4">Explore our Game</h2>
                <p className="lg:max-w-1/2 mb-8">Choose the perfect plan that fits your learning style, whether you&apos;re studying solo, competing with friends, or collaborating in Jams.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    <div className="bg-white shadow-xl rounded-lg p-4 hover:shadow-xl transition-transform transform hover:scale-105 duration-300 ease-in-out">
                        <GameIcons color="#8B5CF6" />
                        <h3 className="text-xl font-semibold text-left mt-8">QRush & Fast QRush</h3>
                        <p className="mt-2 text-[var(--neutral)] text-left">A fast-paced quiz challenge where every second counts! Test your reflexes and knowledge as you race against time to score points and climb the leaderboard.</p>
                        <Button variant="outlinePrimary" className="mt-4 w-full">Start Game Now</Button>
                    </div>
                    <div className="bg-white shadow-xl rounded-lg p-4 hover:shadow-xl transition-transform transform hover:scale-105 duration-300 ease-in-out">
                        <GameIcons color="#FB9650" />
                        <h3 className="text-xl font-semibold text-left mt-8">Qrush Survival Mode</h3>
                        <p className="mt-2 text-[var(--neutral)] text-left">Answer correctly to keep playing—one mistake, and you&apos;re out! Push your limits and see how long you can survive in this thrilling, high-stakes quiz battle.</p>
                        <Button variant="outlineSecondary" className="mt-4 w-full">Start Game Now</Button>
                    </div>
                    <div className="bg-white shadow-xl rounded-lg p-4 hover:shadow-xl transition-transform transform hover:scale-105 duration-300 ease-in-out">
                        <GameIcons color="#1FC16B" />
                        <h3 className="text-xl font-semibold text-left mt-8">Two Lies & a Truth</h3>
                        <p className="mt-2 text-[var(--neutral)] text-left">Read three statements, but only one is true. Use your critical thinking skills to separate facts from fiction and prove your knowledge!</p>
                        <Button variant="outlineSuccess" className="mt-4 w-full">Start Game Now</Button>
                    </div>
                    <div className="bg-white shadow-xl rounded-lg p-4 hover:shadow-xl transition-transform transform hover:scale-105 duration-300 ease-in-out">
                        <GameIcons color="#1FC16B" />
                        <h3 className="text-xl font-semibold text-left mt-8">Two Truths & a Lie</h3>
                        <p className="mt-2 text-[var(--neutral)] text-left">Test your ability to detect misinformation by identifying which of the three statements is false. A fun and engaging way to sharpen your reasoning skills!</p>
                        <Button variant="outlineSuccess" className="mt-4 w-full">Start Game Now</Button>
                    </div>
                    <div className="bg-white shadow-xl rounded-lg p-4 hover:shadow-xl transition-transform transform hover:scale-105 duration-300 ease-in-out">
                        <GameIcons color="#8B5CF6" />
                        <h3 className="text-xl font-semibold text-left mt-8">Riddle Me This</h3>
                        <p className="mt-2 text-[var(--neutral)] text-left">AI-generated riddles based on your learning materials challenge you to think outside the box. Can you figure out the answer before time runs out?</p>
                        <Button variant="outlinePrimary" className="mt-4 w-full">Start Game Now</Button>
                    </div>
                    <div className="bg-white shadow-xl rounded-lg p-4 hover:shadow-xl transition-transform transform hover:scale-105 duration-300 ease-in-out">
                        <div className="flex flex-row justify-between items-center">
                            <GameIcons color="#FB9650" />
                            <p className="text-[var(--secondary)] bg-[#FFF6F0] rounded-full">Upcoming</p>
                        </div>
                        <p className="bg-[#FFF6F0] text-[var(--secondary)]"></p>
                        <h3 className="text-xl font-semibold text-left mt-8">Host & Join Jams</h3>
                        <p className="mt-2 text-[var(--neutral)] text-left">Organize or join Jams where learners collaborate, challenge each other, and climb the leaderboard.</p>
                        <Button variant="outlineSecondary" className="mt-4 w-full">Coming Soon</Button>
                    </div>
                </div>
            </div>

            {/* Testimonial */}
            <Testimonial />

            {/* Call to Action */}
            <CallToAction />

            {/* Footer */}
            <Footer />
        </div>
    )
}

export default GameMode