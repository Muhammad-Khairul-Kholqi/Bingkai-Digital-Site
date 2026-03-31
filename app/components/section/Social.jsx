import { socialData } from '@/app/data/static/social';

export default function SocialSection() {
    const getBorderColor = (color) => {
        switch (color) {
            case 'instagram':
                return 'hover:border-pink-500';
            case 'orange':
                return 'hover:border-orange-500';
            case 'facebook':
                return 'hover:border-blue-500';
            default:
                return 'hover:border-orange-500';
        }
    };

    const getTextColor = (color) => {
        switch (color) {
            case 'instagram':
                return 'group-hover:text-pink-500';
            case 'orange':
                return 'group-hover:text-orange-500';
            case 'facebook':
                return 'group-hover:text-blue-500';
            default:
                return 'group-hover:text-orange-500';
        }
    };

    const getButtonBg = (color) => {
        switch (color) {
            case 'instagram':
                return 'group-hover:bg-pink-500 group-hover:border-pink-500';
            case 'orange':
                return 'group-hover:bg-orange-500 group-hover:border-orange-500';
            case 'facebook':
                return 'group-hover:bg-blue-500 group-hover:border-blue-500';
            default:
                return 'group-hover:bg-orange-500 group-hover:border-orange-500';
        }
    };

    return (
        <section id="social" className="bg-[#111111] py-24 px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center gap-2 text-orange-500 text-xs font-bold tracking-[0.14em] uppercase mb-4">
                        <div className="h-px bg-gray-800 w-12"></div>
                        <span>Find Us Online</span>
                        <div className="h-px bg-gray-800 w-12"></div>
                    </div>
                    <h2 className="text-[clamp(2.8rem,6vw,5rem)] leading-[0.95] tracking-[0.02em] text-white">
                        CONNECT<br/>
                        <span className="text-transparent [-webkit-text-stroke:1.5px_white]">WITH US</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {socialData.map((social) => (
                        <a
                            key={social.id}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`group rounded-2xl p-8 border border-gray-800 bg-[#111111] transition-all duration-300 hover:-translate-y-1.5 ${getBorderColor(social.color)} hover:border-transparent relative overflow-hidden`}
                        >
                            <div className="mb-4">
                                <div className="text-gray-500 text-[0.65rem] font-bold tracking-[0.1em] uppercase mb-1">
                                    {social.name === "Lynk.id" ? "Shop on" : social.name === "Instagram" ? "Follow on" : "Like on"}
                                </div>
                                <div className={`text-3xl tracking-[0.02em] text-white transition-colors duration-300 ${getTextColor(social.color)}`}>
                                    {social.name}
                                </div>
                            </div>

                            <div className="text-gray-400 text-sm mb-3">
                                {social.handle}
                            </div>

                            <p className="text-gray-500 text-xs mb-4">
                                {social.description}
                            </p>

                            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-700 text-gray-500 text-xs font-semibold transition-all duration-300 ${getButtonBg(social.color)} group-hover:text-white group-hover:border-transparent`}>
                                <span>{social.name === "Lynk.id" ? "Shop Now" : social.name === "Instagram" ? "Follow" : "Like"}</span>
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                    <polyline points="12 5 19 12 12 19" />
                                </svg>
                            </div>

                            <div className={`absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none ${
                                social.color === 'instagram' ? 'bg-gradient-to-br from-pink-500/5 via-pink-500/5 to-pink-500/5' :
                                social.color === 'orange' ? 'bg-orange-500/5' :
                                'bg-blue-500/5'
                            }`}></div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}