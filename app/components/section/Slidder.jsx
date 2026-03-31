export default function SlidderSection() {
    const items = [
        "Figma UI Kits",
        "HTML Templates",
        "SaaS Landing",
        "Portfolio Kit",
        "AI Tool UI",
        "Agency Pages",
        "Developer Ready",
        "SEO Optimized"
    ];

    return (
        <section className="py-2 overflow-hidden bg-[#111111] border border-[#242424]">
            <div className="strip relative overflow-hidden">
                <div 
                    className="strip-inner flex"
                    style={{
                        animation: 'slide 10s linear infinite'
                    }}
                >
                    {[...items, ...items].map((item, index) => (
                        <div 
                            key={index}
                            className="strip-item text-sm flex items-center gap-5 px-12 py-3 whitespace-nowrap text-[#555] font-medium uppercase tracking-wide"
                        >
                            <span className="strip-dot w-1 h-1 rounded-full bg-orange-500"></span>
                            {item}
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes slide {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                
                .strip-inner:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
}