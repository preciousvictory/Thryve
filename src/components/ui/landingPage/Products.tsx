import Button from "../Button"
import { ArrowrightCircle } from "../Icon"
import Image from "next/image"

const Products = () => {
    return (
        <div>
            {/* AI Powered Summaries */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-12 flex flex-col lg:flex-row lg:justify-between gap-20 items-center">
                    <div>
                        <h3 className="text-lg font-semibold text-[var(--success)] bg-[var(--successBg)] mb-4 w-fit py-2 px-4 rounded-full">AI-Powered Summaries</h3>
                        <h2 className="text-4xl font-semibold mb-4 text-[var(--neutral)] lg:w-2/3">Turn Pages into Insights - <span className="font-bold text-[var(--success)] ">Instantly!</span></h2>
                        <p className="text-[var(--neutral2)] mb-6 lg:w-2/3">
                            Upload your notes or any piece of content and let our AI engine provide instant summaries.
                        </p>
                        <Button icon={<ArrowrightCircle />} iconPosition="right" variant="success">Summarize Now</Button>
                    </div>
                    <div>
                        <Image src="/images/AIPoweredSearch.svg"
                            width={100}
                            height={100}
                            alt="AI Powered Search"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Study Mode */}
            <section className="py-16 bg-[#F4EFFF]">
                <div className="max-w-6xl mx-auto px-12 flex flex-col-reverse lg:flex-row lg:justify-between gap-24 items-center">
                    <div className="lg:w-1/2">
                        <Image src="/images/StudyMode.svg"
                            width={100}
                            height={100}
                            alt="StudyMode"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                    <div className="lg:w-1/2">
                        <h3 className="text-lg font-semibold text-[var(--primary)] bg-[#EAE2FD] mb-4 w-fit py-2 px-4 rounded-full">Study Mode</h3>
                        <h2 className="text-4xl font-semibold mb-4 text-[var(--neutral)] lg:w-2/3">Master Topics with Smart AI Quizzes <span className="font-bold text-[var(--primary)] ">AI Quizzes</span></h2>
                        <p className="text-[var(--neutral2)] mb-6 lg:w-2/3">
                            Upload any document or PDF, and let AI generate concise, easy-to-read summaries, saving you time and effort.
                        </p>
                        <Button icon={<ArrowrightCircle />} iconPosition="right" variant="primary">Start Quiz Now</Button>
                    </div>

                </div>
            </section>

            {/* Practice Mode */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-12 flex flex-col lg:flex-row lg:justify-between gap-20 items-center">
                    <div>
                        <h3 className="text-lg font-semibold text-[var(--secondary)] bg-[var(--successBg)] mb-4 w-fit py-2 px-4 rounded-full">Practice Mode</h3>
                        <h2 className="text-4xl font-semibold mb-4 text-[var(--neutral)] lg:w-2/3">Turn Pages into Insights - <span className="font-bold text-[var(--secondary)] ">Instantly!</span></h2>
                        <p className="text-[var(--neutral2)] mb-6 lg:w-2/3">
                            Engage in solo challenges or multiplayer practice sessions tailored to reinforce what you&apos;ve learned.
                        </p>
                        <Button icon={<ArrowrightCircle />} iconPosition="right" variant="secondary">Start Practicing</Button>
                    </div>
                    <div>
                        <Image src="/images/PracticeMode.svg"
                            width={100}
                            height={100}
                            alt="Practice Mode"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Play with Friends */}
            <section className="py-16 bg-[#F4EFFF]">
                <div className="max-w-6xl mx-auto px-12 flex flex-col lg:flex-row lg:justify-between gap-20 eitems-center">
                    <div className="lg:w-1/2">
                        <Image src="/images/PlayWithFriends.svg"
                            width={100}
                            height={100}
                            alt="Elipses"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                    <div className="lg:w-1/2">
                        <h3 className="text-lg font-semibold text-[var(--primary)] bg-[#EAE2FD] mb-4 w-fit py-2 px-4 rounded-full">Play with Friends</h3>
                        <h2 className="text-4xl font-semibold mb-4 text-[var(--neutral)] lg:w-2/3">Learning is Better Together!</h2>
                        <p className="text-[var(--neutral2)] mb-6 lg:w-2/3">
                            Challenge your peers in real-time educational games designed to make learning fun and engaging.
                        </p>
                        <Button icon={<ArrowrightCircle />} iconPosition="right" variant="primary">Challenge a Friend</Button>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Products