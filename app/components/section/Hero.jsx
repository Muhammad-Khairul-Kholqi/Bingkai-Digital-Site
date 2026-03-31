"use client";

import { useEffect, useRef } from "react";

export default function HeroSection() {
    const tickerRef = useRef(null);

    useEffect(() => {
        const tickerInner = tickerRef.current;
        if (tickerInner) {
            const items = tickerInner.children;
            const itemsArray = Array.from(items);
            itemsArray.forEach(item => {
                const clone = item.cloneNode(true);
                tickerInner.appendChild(clone);
            });
        }
    }, []);

    const tickerItems = [
        "UI KITS",
        "TEMPLATES",
        "DEV ASSETS",
        "FIGMA",
        "CODE",
        "UI KITS",
        "TEMPLATES",
        "DEV ASSETS",
        "FIGMA",
        "CODE"
    ];

    return (
        <section id="home" className="relative pt-30 pb-15 flex flex-col justify-center overflow-hidden bg-[#0A0A0A]">
            <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: `
                        linear-gradient(#242424 1px, transparent 1px),
                        linear-gradient(90deg, #242424 1px, transparent 1px)
                    `,
                    backgroundSize: "60px 60px",
                    opacity: 0.4
                }}
            />
            
            <div 
                className="absolute top-[20%] right-[10%] w-[600px] h-[600px] pointer-events-none"
                style={{
                    background: "radial-gradient(ellipse, rgba(255,107,0,0.08) 0%, transparent 65%)"
                }}
            />

            <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 pointer-events-none overflow-hidden whitespace-nowrap">
                <div 
                    ref={tickerRef}
                    className="inline-flex animate-ticker"
                >
                    {tickerItems.map((item, index) => (
                        <span
                            key={index}
                            className="text-[clamp(4rem,12vw,10rem)] text-transparent [-webkit-text-stroke:1px_#2e2e2e] tracking-[0.02em] px-5 font-black select-none"
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </div>

            <div className="relative z-10 max-w-[1200px] mx-auto w-full px-8">
                <div className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.12em] uppercase text-orange-500 mb-2">
                    <span className="w-6 h-px bg-orange-500" />
                    Bingkai Digital
                </div>

                <h1 className="font-black text-white mb-10 leading-[1.2] tracking-wider">
                    <span className="text-[clamp(3rem,8vw,6rem)] block">MODERN</span>
                    <span className="text-[clamp(2.8rem,7vw,5.5rem)] block">
                        <span>UI KITS</span> &amp;
                    </span>
                    <span className="text-[clamp(3rem,8vw,6rem)] block">
                        WEB <span className="text-orange-500">TEMPLATES</span>
                    </span>
                </h1>

                <div className="flex flex-wrap items-center justify-between gap-8">
                    <p className="text-[0.95rem] text-[#888] leading-relaxed max-w-[380px]">
                        Ready-to-use Figma UI kits and website code templates to help developers, startups, and creators launch faster and look more professional.
                    </p>
                    
                    <a
                        href="https://lynk.id/bingkaidigital.id"
                        target="_blank"
                        className="text-center px-6 py-3 border border-orange-500 text-orange-500 font-semibold text-sm rounded-lg hover:-translate-y-1 transition-all"
                    >
                        Lynk.id Store
                    </a>
                </div>
            </div>

            <style jsx global>{`
                @keyframes ticker {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                .animate-ticker {
                    animation: ticker 50s linear infinite;
                }
            `}</style>
        </section>
    );
}