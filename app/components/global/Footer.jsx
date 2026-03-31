export default function FooterSection() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#111111] border-t border-gray-800 py-12 px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div>
                        <div className="text-xl tracking-[0.05em] text-white font-semibold">
                            Bingkai <span className="text-orange-500">Digital</span>
                        </div>
                        <p className="text-gray-500 text-xs max-w-xs leading-relaxed">
                            Modern UI kits and web templates for developers and creators.
                        </p>
                    </div>

                    <div className="flex gap-6 flex-wrap justify-center">
                        <a href="#home" className="text-gray-500 hover:text-orange-500 text-xs transition-colors duration-200">
                            Home
                        </a>
                        <a href="#about" className="text-gray-500 hover:text-orange-500 text-xs transition-colors duration-200">
                            About
                        </a>
                        <a href="#products" className="text-gray-500 hover:text-orange-500 text-xs transition-colors duration-200">
                            Products
                        </a>
                        <a href="#services" className="text-gray-500 hover:text-orange-500 text-xs transition-colors duration-200">
                            Services
                        </a>
                        <a href="#social" className="text-gray-500 hover:text-orange-500 text-xs transition-colors duration-200">
                            Social
                        </a>
                    </div>
                    
                    <div className="text-gray-600 text-xs">
                        © {currentYear} Bingkai Digital. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}