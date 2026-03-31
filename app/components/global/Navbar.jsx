"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Effect to prevent body scrolling when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            // Save the current scroll position
            const scrollY = window.scrollY;
            
            // Prevent scrolling on body
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollY}px`;
            document.body.style.width = '100%';
            
            return () => {
                // Restore scrolling when menu closes
                document.body.style.position = '';
                document.body.style.top = '';
                document.body.style.width = '';
                window.scrollTo(0, scrollY);
            };
        }
    }, [isOpen]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Products", href: "#products" },
        { name: "Services", href: "#services" },
        { name: "Social", href: "#social" },
    ];

    return (
        <>
            <nav 
                className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
                    scrolled ? "bg-black/92 backdrop-blur-xl border-b border-white/10" : "border-b border-transparent"
                }`}
            >
                <div className="max-w-[1200px] mx-auto px-8 h-18 flex justify-between items-center">
                    <a href="#" className="text-white text-xl tracking-wide font-semibold">
                        Bingkai <span className="text-orange-500">Digital</span>
                    </a>

                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                className="text-[#888] text-sm font-medium uppercase tracking-wide hover:text-white transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <a
                        href="https://lynk.id/bingkaidigital.id"
                        target="_blank"
                        className="hidden md:inline-flex items-center gap-2 text-black text-sm font-semibold uppercase tracking-wider bg-orange-500 px-5 py-2 rounded-md hover:bg-orange-400 hover:-translate-y-0.5 transition-all"
                    >
                        View Templates
                    </a>

                    <button
                        onClick={toggleMenu}
                        className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            <div
                className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "visible" : "invisible"
                }`}
            >
                <div
                    className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
                        isOpen ? "opacity-100" : "opacity-0"
                    }`}
                    onClick={closeMenu}
                />

                <div
                    className={`absolute top-0 right-0 h-full w-full max-w-sm bg-black border-l border-white/20 shadow-xl transform transition-transform duration-300 ease-in-out ${
                        isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                >
                    <div className="flex flex-col h-full">
                        <div className="flex justify-between items-center p-5 border-b border-white/20">
                            <div className="text-xl font-semibold text-white">
                                Bingkai <span className="text-orange-500">Digital</span>
                            </div>
                            <button
                                onClick={closeMenu}
                                className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                                aria-label="Close menu"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        <div className="flex-1 flex flex-col py-8 overflow-y-auto">
                            {navLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    className="px-8 py-4 text-[#888] hover:text-white hover:bg-white/5 transition-all text-lg tracking-wider"
                                    onClick={closeMenu}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>

                        <div className="p-5 border-t border-white/20">
                            <a
                                href="https://lynk.id/bingkaidigital.id"
                                target="_blank"
                                className="flex items-center justify-center gap-2 text-center text-black tracking-widest font-bold bg-orange-500 px-5 py-3 rounded-md hover:bg-orange-400 transition-all"
                                onClick={closeMenu}
                            >
                                View Templates
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}