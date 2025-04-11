"use client"
import React, { useEffect, useRef, useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const navbar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
        }
    }),
    closed: {
        clipPath: "circle(30px at 40px 40px)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
};

const NavMobile = () => {
    const [isOpen, setOpen] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();

    const isActive = (href: string) => {
        return pathname === href ? "font-bold" : ""
    }
    
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div className="NavMobile md:hidden bg-white shadow-xl flex flex-row justify-between items-center mx-8 my-6 relative" ref={navRef}>
            <div>
                <Link href="/" className="flex flex-row items-center justify-baseline">
                    <div className="w-[40px] h-[40px] bg-[#D8C9FC]"></div>
                    <div className="text-2xl font-bold text-[var(--primary)]">Thryve</div>
                </Link>
            </div>

            {/* Hamburger Menu Icon */}
            {isOpen ? <div></div> : (
                <div className="child:text-white">
                    <Hamburger
                        toggled={isOpen}
                        size={20}
                        toggle={setOpen}
                        color="var(--primary)"
                    />
                </div>
            )}

            <AnimatePresence>
                {isOpen && (
                    <motion.nav
                        initial={false}
                        animate={isOpen ? "open" : "closed"}
                        custom={window.innerHeight}
                        className="fixed top-18 left-0 h-fit w-[100%] z-50"
                    >
                        {/* Close Button on the Right */}
                        <div className="flex justify-end p-5 child:text-white">
                            <Hamburger
                                toggled={isOpen}
                                size={20}
                                toggle={setOpen}
                                color="var(--primary)"
                            />
                        </div>

                        <motion.div className="background" variants={navbar} />

                        {/* Navbar Content */}
                        <div className="Navbar navbar text-white bg-gradient-to-r from-[var(--primary2)] to-[var(--complement2)] via-[#4E61CA] via-60%  flex flex-col gap-6 text-[16px] items-center py-8">
                            <Link href='/' className={`text-white hover:p-2 hover:px-4 transition hover:rounded-lg hover:bg-white hover:text-[var(--primary)] ${isActive('/')}`}>
                                Home
                            </Link>
                            <Link href='#features' className={`text-white hover:p-2 hover:px-4 transition hover:rounded-lg hover:bg-white hover:text-[var(--primary)] ${isActive('/#features')}`}>
                                Our Features
                            </Link>
                            <Link href='/gamemode' className={`text-white hover:p-2 hover:px-4 transition hover:rounded-lg hover:bg-white hover:text-[var(--primary)] ${isActive('/gamemode')}`}>
                                Game Mode
                            </Link>
                            <Link href='#testimonials' className={`text-white hover:p-2 hover:px-4 transition hover:rounded-lg hover:bg-white hover:text-[var(--primary)] ${isActive('/#testimonials')}`}>
                                Testimonial
                            </Link>
                            <Link href='#contact' className={`text-white hover:p-2 hover:px-4 transition hover:rounded-lg hover:bg-white hover:text-[var(--primary)] ${isActive('/#contact')}`}>
                                Contact Us
                            </Link>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </div>
    );
};

export default NavMobile;