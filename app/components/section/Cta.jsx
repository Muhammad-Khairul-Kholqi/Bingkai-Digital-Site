export default function CTASection() {
    return (
        <section className="py-24 px-8 bg-[#0A0A0A]">
            <div className="max-w-7xl mx-auto">
                <div className="relative bg-[#111111] border border-gray-800 rounded-3xl p-12 md:p-16 lg:p-20 overflow-hidden text-center">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-r from-orange-500/10 via-orange-500/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>

                    <div className="inline-flex items-center gap-2 mb-6">
                        <div className="w-5 h-px bg-orange-500"></div>
                        <span className="text-orange-500 text-xs font-bold tracking-[0.12em] uppercase">
                            Ready to ship faster?
                        </span>
                        <div className="w-5 h-px bg-orange-500"></div>
                    </div>

                    <h2 className="text-[clamp(3rem,7vw,6rem)] leading-[0.95] tracking-[0.02em] text-white mb-6">
                        START BUILDING<br/>
                        <span className="text-transparent [-webkit-text-stroke:2px_white]">
                            FASTER TODAY
                        </span>
                    </h2>

                    <p className="text-gray-400 text-sm max-w-md mx-auto mb-8 leading-relaxed">
                        Stop building from scratch. Pick a template, customize it, and launch your project today.
                    </p>

                    <a
                        href="https://lynk.id/bingkaidigital.id"
                        target="_blank"
                        className="bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm px-8 py-3 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-500/25"
                    >
                        Browse Templates
                    </a>
                </div>
            </div>
        </section>
    );
}