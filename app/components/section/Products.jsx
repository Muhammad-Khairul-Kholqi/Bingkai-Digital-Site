'use client';

import { useState } from 'react';
import { productsData } from '@/app/data/static/products';

export default function ProductsSection() {
    const [activeTab, setActiveTab] = useState('figma');

    const currentProducts = productsData[activeTab];

    const tabs = [
        { id: 'figma', label: 'UI Kits'},
        { id: 'code', label: 'Code Templates'},
        { id: 'components', label: 'UI Components'},
        { id: 'bundle', label: 'Bundle Pack'}
    ];

    return (
        <section id="products" className="bg-[#111111] py-24 px-4 sm:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-end justify-between gap-8 flex-wrap mb-12">
                    <div>
                        <div className="flex items-center gap-2 text-orange-500 text-xs font-bold tracking-[0.14em] uppercase mb-4">
                            <span>Our Products</span>
                            <div className="flex-1 h-px bg-gray-800 max-w-[60px]"></div>
                        </div>
                        <h2 className="text-[clamp(2.8rem,6vw,5rem)] leading-[0.95] tracking-[0.02em] text-white">
                            DIGITAL<br/>
                            <span className="text-orange-500">TEMPLATES</span>
                        </h2>
                    </div>
                    <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
                        Professional, ready-to-launch UI kits and code templates for every project type.
                    </p>
                </div>

                <div className="mb-10">
                    <div className="flex overflow-x-auto scrollbar-hide lg:overflow-visible lg:justify-start">
                        <div className="flex gap-1 min-w-max lg:min-w-0">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`
                                        relative px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold 
                                        transition-all duration-300 rounded-lg whitespace-nowrap
                                        ${activeTab === tab.id 
                                            ? 'text-white' 
                                            : 'text-gray-500 hover:text-gray-300'
                                        }
                                    `}
                                >
                                    <span className="flex items-center gap-2 uppercase tracking-wider">
                                        <span>{tab.label}</span>
                                    </span>
                                    
                                    {activeTab === tab.id && (
                                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 rounded-full" />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                    
                    <div className="lg:hidden flex justify-center mt-2">
                        <span className="text-[10px] text-gray-600 flex items-center gap-1">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="9 18 15 12 9 6"/>
                            </svg>
                            Scroll for more
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    {currentProducts.map((product) => (
                        <div
                            key={product.id}
                            className="group bg-[#111111] border border-gray-800 rounded-xl p-6 relative overflow-hidden transition-all duration-300 hover:border-orange-500 hover:-translate-y-1 cursor-pointer"
                        >
                            <div className="text-6xl text-gray-800 absolute top-4 right-5 transition-colors duration-300 group-hover:text-orange-500/20">
                                {product.number}
                            </div>

                            <span className={`inline-flex items-center gap-1.5 text-[0.65rem] font-bold tracking-[0.08em] uppercase px-2 py-1 rounded mb-4 ${
                                product.badgeColor === 'orange'
                                    ? 'bg-orange-500/10 text-orange-500'
                                    : product.badgeColor === 'blue'
                                    ? 'bg-blue-500/10 text-blue-400'
                                    : product.badgeColor === 'purple'
                                    ? 'bg-purple-500/10 text-purple-400'
                                    : 'bg-green-500/10 text-green-400'
                            }`}>
                                {product.badgeColor === 'orange' ? (
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M5 5.5A3.5 3.5 0 018.5 2H12v7H8.5A3.5 3.5 0 015 5.5z"/>
                                        <path d="M12 2h3.5a3.5 3.5 0 110 7H12V2z"/>
                                        <path d="M12 12.5a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0z"/>
                                        <path d="M5 19.5A3.5 3.5 0 018.5 16H12v3.5a3.5 3.5 0 11-7 0z"/>
                                        <path d="M5 12.5A3.5 3.5 0 018.5 9H12v7H8.5A3.5 3.5 0 015 12.5z"/>
                                    </svg>
                                ) : product.badgeColor === 'blue' ? (
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <polyline points="16 18 22 12 16 6"/>
                                        <polyline points="8 6 2 12 8 18"/>
                                    </svg>
                                ) : product.badgeColor === 'purple' ? (
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                                        <rect x="2" y="2" width="20" height="20" rx="4" fill="currentColor"/>
                                        <path d="M8 12h8M12 8v8" stroke="white" strokeWidth="1.5"/>
                                    </svg>
                                ) : (
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                                    </svg>
                                )}
                                {product.badge}
                            </span>

                            <h3 className="text-white font-bold text-base mb-2">
                                {product.title}
                            </h3>

                            <p className="text-gray-500 text-sm leading-relaxed mb-5">
                                {product.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
}