import Image from 'next/image'
import { StarIcon, StarIconWhite } from '../Icon'

const Testimonial = () => {
    return (
        <section className="py-16 px-12 bg-white flex flex-col gap-12 lg:flex-row justify-between" id='testimonials'>
            <div className="max-w-[400px] max-h-[500px] flex flex-row justify-end mx-auto rounded-lg relative w-1/2 ">
                <div className='w-full h-full rounded-lg z-10'>
                    <Image src="/images/userImage2.png"
                        width={100}
                        height={100}
                        alt="user Image"
                        className="w-full h-full object-cover rounded-xl"
                    />
                </div>
                <div className='absolute z-15 bg-white/50 border border-white/70 px-6 py-2 bottom-0 left-0 w-full h-1/4 flex flex-col justify-center'>
                    <div className='flex flex-row justify-between items-center w-full mb-3 '>
                        <h4 className="text-xl font-semibold text-white">Praise Tolulope</h4>
                        <div className='flex flex-row items-center justify-center '>
                            <StarIconWhite />
                            <StarIconWhite />
                            <StarIconWhite />
                            <StarIconWhite />
                            <StarIconWhite />
                        </div>
                    </div>
                    <p className="text-sm text-white">Student </p>
                    <p className="text-sm text-white">Lagos Nigeria</p>
                </div>
                <div>
                    <Image src="/images/EllipseComplement.svg"
                        width={100}
                        height={100}
                        alt="user Image"
                        className="absolute w-10 h-10 top-0 z-5 left-4 -mt-6"
                    />
                </div>
            </div>
            <div className='flex flex-col items-start mt-8 md:w-1/2'>
                <div className='flex flex-row justify-center mt-4'>
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                </div>
                <h2 className="text-[var(--neutral)] text-4xl text-left mt-4 font-bold">
                    &quot;Thryve makes studying effortless! The AI summaries and fun quizzes keep me engaged and learning faster. 🚀&quot;
                </h2>
            </div>
        </section>
    )
}

export default Testimonial