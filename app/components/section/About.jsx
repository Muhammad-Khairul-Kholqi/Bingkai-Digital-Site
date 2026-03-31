export default function AboutSection() {
    return (
        <section id="about" className="py-24 px-8 bg-[#0A0A0A]">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <div className="flex items-center gap-2 text-orange-500 text-xs font-bold tracking-[0.14em] uppercase mb-4">
                            <span>About Us</span>
                            <div className="flex-1 h-px bg-gray-800 max-w-[60px]"></div>
                        </div>
                        <h2 className="text-3xl font-bold tracking-wider text-white mb-2">
                            WHO WE ARE
                        </h2>
                        <p className="text-gray-400 text-[0.95rem] leading-relaxed mb-4">
                            Bingkai Digital provides ready-to-use UI kits and website templates designed for developers, startups, freelancers, and digital product creators.
                        </p>
                        <p className="text-gray-400 text-[0.95rem] leading-relaxed">
                            Each template is structured cleanly, responsive, and optimized for fast development workflow - so you ship faster and look professional from day one.
                        </p>
                    </div>

                    <div className="bg-[#111111] border border-gray-800 rounded-2xl p-8 relative overflow-hidden">
                        <div className="bg-black rounded-lg overflow-hidden border border-gray-800">
                            <div className="bg-[#1a1a1a] px-4 py-2.5 flex items-center gap-2 border-b border-gray-800">
                                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]"></span>
                                <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]"></span>
                                <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]"></span>
                                <span className="flex-1 text-center text-[0.65rem] text-gray-600">bingkai-template.html</span>
                            </div>
                            <div className="p-5 font-mono text-[0.72rem] leading-relaxed text-[#cdd9e5]">
                                <div className="text-gray-600">1  <span className="text-[#79c0ff]">&lt;!DOCTYPE html&gt;</span></div>
                                <div>2  <span className="text-[#ff7b72]">&lt;html</span> <span className="text-[#ffa657]">lang</span>=<span className="text-[#a5d6ff]">"en"</span><span className="text-[#ff7b72]">&gt;</span></div>
                                <div>3    <span className="text-[#ff7b72]">&lt;head&gt;</span></div>
                                <div className="text-orange-500">4      <span className="text-[#7ee787]">/* Bingkai Digital Template */</span></div>
                                <div>5      <span className="text-[#79c0ff]">title</span>: <span className="text-[#a5d6ff]">"SaaS Landing Page"</span></div>
                                <div>6      <span className="text-[#79c0ff]">style</span>: <span className="text-[#a5d6ff]">"clean + responsive"</span></div>
                                <div>7      <span className="text-[#79c0ff]">seo</span>: <span className="text-[#56d364]">true</span></div>
                                <div>8      <span className="text-[#79c0ff]">ready</span>: <span className="text-[#56d364]">true</span></div>
                                <div>9  <span className="text-[#ff7b72]">&lt;/head&gt;</span></div>
                                <div className="text-gray-600">10 <span className="text-gray-500">/* yours to customize */</span></div>
                            </div>
                        </div>

                        <div className="flex gap-3 mt-4 flex-wrap">
                            <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg px-4 py-2.5 flex-1 min-w-[120px]">
                                <div className="text-[0.65rem] text-orange-500 font-bold tracking-[0.08em] uppercase mb-1">Figma</div>
                            </div>
                            <div className="bg-[rgba(99,132,235,0.08)] border border-[rgba(99,132,235,0.2)] rounded-lg px-4 py-2.5 flex-1 min-w-[120px]">
                                <div className="text-[0.65rem] text-[#6384EB] font-bold tracking-[0.08em] uppercase mb-1">Code</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}