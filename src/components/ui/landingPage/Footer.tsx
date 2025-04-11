import Link from "next/link"
import { ArrowrightCircle, FacebookIcon, InstagramIcon, LinkedinIcon, TiktokIcon, TwitterIcon } from "../Icon"
import Button from "../Button"

const Footer = () => {
    return (
        <footer className="bg-white border-t py-6 px-12 text-sm text-center text-[var(--neutral)]" id="footer">
            <div className="py-8 flex flex-col md:flex-row justify-between items-start">
                <div className="flex flex-col w-4/5 gap-8 mb-4 md:mb-0 text-left items-start justify-baseline">
                    <div className="w-1/2">
                        <Link href="/" className="flex items-center justify-baseline mb-4">
                            <div className="w-[100px] h-[40px] bg-[#D8C9FC]"></div>
                        </Link>
                        <p>Thryve makes learning smarter, faster, and way more fun—study, play, and grow all in one place.</p>
                    </div>

                    <ul className="flex flex-wrap space-x-6 text-left w-full">
                        <li className="mb-4 max-w-[200px]"><Link href="#" className="hover:text-[var(--primary)] w-fit">Features</Link></li>
                        <li className="mb-4 max-w-[200px]"><Link href="#" className="hover:text-[var(--primary)] w-fit">Game Mode</Link></li>
                        <li className="mb-4 max-w-[200px]"><Link href="#" className="hover:text-[var(--primary)] w-fit">Pricing Plans</Link></li>
                        <li className="mb-4 max-w-[200px]"><Link href="#" className="hover:text-[var(--primary)] w-fit">Testimonials</Link></li>
                        <li className="mb-4 max-w-[200px]"><Link href="#" className="hover:text-[var(--primary)]">Contact Us</Link></li>
                        <li className="mb-4 max-w-[200px]"><Link href="#" className="hover:text-[var(--primary)]">Privacy Policy</Link></li>
                        <li className="mb-4 max-w-[200px]"><Link href="#" className="hover:text-[var(--primary)]">Terms Of Use</Link></li>
                    </ul>
                </div>
                <div>
                    <p className="mb-2 text-left">Explore More</p>
                    <Button variant="gradient" icon={<ArrowrightCircle />} iconPosition="right" >Get Started Now</Button>
                </div>
            </div>
            <div className="flex flex-col-reverse md:flex-row md:justify-between md:items-center mb-4">
                <p className="mt-4 md:mt-0">&copy; 2025 Thryve. All rights reserved.</p>

                <div className="flex items-center md:items-end gap-5">
                    <Link href="#" aria-label="LinkedIn"><LinkedinIcon /></Link>
                    <Link href="#" aria-label="Instagram"><InstagramIcon /></Link>
                    <Link href="#" aria-label="Facebook"><FacebookIcon /></Link>
                    <Link href="#" aria-label="TikTok"><TiktokIcon /></Link>
                    <Link href="#" aria-label="Twitter"><TwitterIcon /></Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer