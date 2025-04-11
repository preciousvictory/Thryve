import { FeaturesList } from "@/constants"
import FeatureCard from "../FeatureCard"
import Image from "next/image"

const Features = () => {
    return (
        <section className="bg-[#1A1A1A] text-white py-16" id="features">
            <div className="max-w-6xl mx-auto px-12 flex items-start flex-col gap-10">
                <div className="mt-3 lg:m-0 lg:w-1/2">
                    <h2 className="text-2xl md:text-4xl font-bold text-left mb-6">
                        Everything you need to excel
                    </h2>
                    <p className="text-[var(--gray)] ">Our platform combines the thrill of competition with effective learning methods to help you achieve your goals.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full h-full relative">
                    <div className="absolute -top-6 left-5 lg:-left-7 ">
                        <Image src="/images/FeatureEllipsePrimary.svg"
                            width={100}
                            height={100}
                            alt="Elipses"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                    <div className="absolute -bottom-6 lg:-right-8 right-5 ">
                        <Image src="/images/FeatureEllipseSecondary.svg"
                            width={100}
                            height={100}
                            alt="Elipses"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                    {FeaturesList.map((feature, idx) => (
                        <div key={idx} className="w-full h-full">
                            <FeatureCard {...feature} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features