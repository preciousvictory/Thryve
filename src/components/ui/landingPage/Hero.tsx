import Button from "../Button";
import { WatchDemo } from "../Icon";
import Image from "next/image";

const Hero = () => {
    return (
        <section className="bg-[#f2f1fc] p-6 md:p-12">
            <div className="flex flex-col justify-between items-center lg:flex-row lg:items-start gap-3">
                <div className="max-w-6xl py-3 lg:py-12 mx-auto text-left  flex flex-col lg:w-1/2 lg:justify-baseline lg:items-start">
                    <div>
                        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                            Learn Faster with <br className="hidden md:block" />
                            <span className="text-[var(--primary)]">AI Tools & Competitive Games</span>
                        </h1>
                        <p className="mt-4 text-[var(--gray)]">
                            Engage in exciting head-to-head competitions, quizzes, and challenges while mastering new skills. Make learning an adventure!
                        </p>
                    </div>
                    <div className="mt-6 flex  justify-center gap-4">
                        <Button variant="gradient">Try For Free Now</Button>
                        <Button variant="outlinePrimary" icon={<WatchDemo />}>Watch Demo</Button>
                    </div>
                </div>
                {/* Hero Image */}
                <div className="lg:mt-8 max-w-4xl mx-auto lg:w-1/3 flex items-start -my-6 p-3 lg:p-0">
                    <Image src="/images/HeroImage.svg"
                        width={100}
                        height={100}
                        alt="HeroImage"
                        className="w-full h-auto"
                    />
                    <Image src="/images/send-2.svg"
                        width={10}
                        height={10}
                        alt="send"
                        className="w-fit h-auto "

                    />
                </div>
            </div>
            <div className="pt-12 lg:p-12">
                <Image src="/images/Hero+.svg"
                    width={100}
                    height={100}
                    alt="HeroImage"
                    className="w-full h-auto object-cover"
                />
            </div>

        </section>
    )
}

export default Hero;