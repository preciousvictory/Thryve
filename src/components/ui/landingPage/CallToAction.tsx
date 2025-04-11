import Image from 'next/image'
import Button from '@/components/ui/Button'

const CallToAction = () => {
    return (
        <section className="py-16 px-6 bg-[#25066D]/90 text-white text-center relative ">
            <div className='absolute -z-0  left-0 w-full h-full top-0'>
                <Image src="/images/bbg.jpeg"
                    width={100}
                    height={100}
                    alt="user Image"
                    className="w-full h-full object-cover opacity-15"
                />
            </div>
            <h2 className="text-3xl font-bold mb-4">Ready to Supercharge Your Learning?</h2>
            <p className="mb-6 max-w-xl mx-auto">
                Unlock AI-powered summaries, fun challenges, and collaborative tools to help you thrive in school.
            </p>
            <Button variant="primary">Try it out</Button>
            
        </section>
    )
}

export default CallToAction