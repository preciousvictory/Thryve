"use client"
import Link from "next/link"
import Button from "../Button"
import { ArrowrightCircle } from "../Icon"
import NavbarMobile from "./NavbarMobile"
import { usePathname } from "next/navigation"

const Navbar = () => {
    const pathname = usePathname()

    const isActive = (href: string) => {
        return pathname === href ? "font-bold" : ""
    }
    return (
        <div>
            <div className="hidden md:block">
                <nav className="bg-white shadow-xl py-4 px-12 flex justify-between items-center">
                    <div className="flex md:flex-row items-center gap-6">
                        <Link href="/" className="flex flex-row items-center justify-baseline">
                            <div className="w-[40px] h-[40px] bg-[#D8C9FC]"></div>
                            <div className="text-2xl font-bold text-[var(--primary)]">Thryve</div>
                        </Link>
                        <div className="flex space-x-4 text-lg">
                            <Link href='/' className={`text-[var(--neutral)] text-lg hover:text-white p-2 hover:px-4 hover:rounded-lg hover:bg-[var(--primary)] ${isActive('/')}`}>
                                Home
                            </Link>
                            <Link href='#features' className={`text-[var(--neutral)] text-lg hover:text-white p-2 hover:px-4 hover:rounded-lg hover:bg-[var(--primary)] ${isActive('/#features')}`}>
                                Our Features
                            </Link>
                            <Link href='/gamemode' className={`text-[var(--neutral)] text-lg hover:text-white p-2 hover:px-4 hover:rounded-lg hover:bg-[var(--primary)] ${isActive('/gamemode')}`}>
                                Game Mode
                            </Link>
                            <Link href='#testimonials' className={`text-[var(--neutral)] text-lg hover:text-white p-2 hover:px-4 hover:rounded-lg hover:bg-[var(--primary)] ${isActive('/#testimonials')}`}>
                                Testimonial
                            </Link>
                            <Link href='#contact' className={`text-[var(--neutral)] text-lg hover:text-white p-2 hover:px-4 hover:rounded-lg hover:bg-[var(--primary)]  ${isActive('/#contact')}`}>
                                Contact Us
                            </Link>
                        </div>
                    </div>
                    <Button variant="gradient" icon={<ArrowrightCircle />} iconPosition="right" >Start for Free</Button>
                </nav>
            </div>
            <div className="md:hidden">
                <NavbarMobile />
            </div>
        </div>
    )
}

export default Navbar