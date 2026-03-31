import { featuresData } from '@/app/data/static/features';
import {
    LayoutGrid,
    Smartphone,
    Smile,
    Code2,
    FileText,
    Search,
    Zap,
    Settings,
    Headphones
} from 'lucide-react';

export default function FeaturesSection() {
    const getIcon = (iconName) => {
        const iconProps = {
            size: 18,
            strokeWidth: 1.5,
            className: "text-orange-500"
        };

        switch (iconName) {
            case 'grid':
                return <LayoutGrid {...iconProps} />;
            case 'responsive':
                return <Smartphone {...iconProps} />;
            case 'modern':
                return <Smile {...iconProps} />;
            case 'code':
                return <Code2 {...iconProps} />;
            case 'documentation':
                return <FileText {...iconProps} />;
            case 'seo':
                return <Search {...iconProps} />;
            case 'performance':
                return <Zap {...iconProps} />;
            case 'customizable':
                return <Settings {...iconProps} />;
            case 'support':
                return <Headphones {...iconProps} />;
            default:
                return <LayoutGrid {...iconProps} />;
        }
    };

    return (
        <section id="services" className="py-24 px-8 bg-[#0A0A0A]">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-end justify-between gap-8 flex-wrap mb-16">
                    <div>
                        <div className="flex items-center gap-2 text-orange-500 text-xs font-bold tracking-[0.14em] uppercase mb-4">
                            <span>Features</span>
                            <div className="flex-1 h-px bg-gray-800 max-w-[60px]"></div>
                        </div>
                        <h2 className="text-[clamp(2.8rem,6vw,5rem)] leading-[0.95] tracking-[0.02em] text-white">
                            WHAT YOU<br/>
                            <span className="text-orange-500">GET</span>
                        </h2>
                    </div>
                    <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
                        Everything you need to ship fast and look professional from day one.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-800 rounded-2xl overflow-hidden">
                    {featuresData.map((feature) => (
                        <div
                            key={feature.id}
                            className="group bg-[#111111] p-8 transition-all duration-300 hover:bg-[#161616] relative"
                        >
                            <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110">
                                {getIcon(feature.icon)}
                            </div>

                            <h3 className="text-white font-bold text-sm mb-1.5">
                                {feature.title}
                            </h3>

                            <p className="text-gray-500 text-xs leading-relaxed">
                                {feature.description}
                            </p>

                            <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-orange-500 scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}