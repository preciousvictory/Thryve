import Button from "../Button"
import { TickCriclePrimary, TickCricleWhite } from "../Icon"

const Pricing = () => {
    return (
        <section className="py-16 bg-gray-50" id="pricing">
            <div className="max-w-4xl mx-auto text-left flex justify-center items-center flex-col px-4">
                <h2 className="text-3xl font-bold mb-6 text-center">Our Pricing Plans</h2>
                <p className="max-w-2xl mb-5 text-center">Choose the perfect plan that fits your learning style, whether you&apos;re studying solo, competing with friends, or collaborating in Jams.</p>
                <div className="flex flex-col md:flex-row gap-12 items-start md:justify-center mx-auto mt-8">
                    <div className="p-6 bg-[#FBFBFB] rounded-xl shadow-lg lg:w-[70%] lg:max-w-[350px]">
                        <p className="text-sm text-[var(--neutral)] mb-4 font-semibold ">Free Plan</p>
                        <div className="mb-4 flex flex-row justify-between items-center">
                            <h4 className="text-xl font-bold mb-2">Learn for Free</h4>
                            <p className="text-xl text-[var(--neutral)] font-bold  mb-4">$0 / Month</p>
                        </div>
                        <p className="text-sm text-[var(--neutral)] mb-4 ">Key Features</p>

                        <ul className="text-left text-sm text-gray-700 list-disc mb-10">
                            <li className="flex gap-2 items-start mb-2">
                                <div>
                                    <TickCriclePrimary />
                                </div>
                                <p className="w-7/8">AI-powered PDF summaries (limited to 5 per month)</p>
                            </li>
                            <li className="flex gap-2 items-start mb-2">
                                <div>
                                    <TickCriclePrimary />
                                </div>
                                <p className="w-7/8">Access to Study Mode (basic quizzes)</p>
                            </li>
                            <li className="flex gap-2 items-start mb-2">
                                <div>
                                    <TickCriclePrimary />
                                </div>
                                <p className="w-7/8">Solo practice mode</p>
                            </li>
                            <li className="flex gap-2 items-start mb-2">
                                <div>
                                    <TickCriclePrimary />
                                </div>
                                <p className="w-7/8">Limited AI-generated riddles and games</p>
                            </li>
                        </ul>
                        <Button className="w-full" variant="gradient">Start for Free</Button>
                    </div>
                    <div className="p-6 lg:w-[70%] lg:max-w-[350px] text-white fkex-as bg-gradient-to-r from-[var(--primary2)] to-[var(--complement2)] via-[#4E61CA] via-60%  rounded-xl shadow-lg">
                        <p className="text-sm text-white mb-4 font-semibold  ">Premium Plan</p>
                        <div className="mb-4 flex flex-row justify-between items-center">
                            <h4 className="text-xl font-bold mb-2">Level Up Your Learning</h4>
                            <p className="text-xl text-white font-bold  mb-4">$4.99/month</p>
                        </div>
                        <p className="text-sm text-white mb-4 ">Key Features</p>


                        <ul className="text-left text-sm text-white list-disc mb-10">
                            <li className="flex gap-2 items-start mb-2">
                                <div>
                                    <TickCricleWhite />
                                </div>
                                <p className="w-7/8">Unlimited AI-powered PDF summaries</p>
                            </li>
                            <li className="flex gap-2 items-start mb-2">
                                <div>
                                    <TickCricleWhite />
                                </div>
                                <p className="w-7/8">Full access to Study Mode with advanced AI explanations</p>
                            </li>
                            <li className="flex gap-2 items-start mb-2">
                                <div>
                                    <TickCricleWhite />
                                </div>
                                <p className="w-7/8">Unlimited solo & multiplayer practice mode</p>
                            </li>
                            <li className="flex gap-2 items-start mb-2">
                                <div>
                                    <TickCricleWhite />
                                </div>
                                <p className="w-7/8">Exclusive access to leaderboard competitions</p>
                            </li>
                            <li className="flex gap-2 items-start mb-2">
                                <div>
                                    <TickCricleWhite />
                                </div>
                                <p className="w-7/8">Custom AI-generated riddles & statement games</p>
                            </li>
                        </ul>
                        <Button className="w-full" variant="white">Upgrade to Pro</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing