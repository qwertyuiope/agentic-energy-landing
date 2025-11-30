import React from 'react';
import { Zap } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#050a14] py-8 px-6 relative z-10 border-t border-blue-900/30">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <div className="flex items-center">
                            <div className="text-[#00a3ff] font-bold text-2xl mr-2 flex items-center">
                                <Zap className="mr-1" size={20} />
                                AE
                            </div>
                            <h3 className="text-xl font-bold text-white">Agentic Energy</h3>
                        </div>
                    </div>
                    <div className="text-center md:text-left mb-4 md:mb-0">
                        <p className="text-blue-100/70">© Agentic Energy — Autonomy for Oil & Gas Operations</p>
                    </div>
                    <div className="flex gap-6">
                        <a href="#" className="text-blue-200/60 text-sm hover:text-[#00a3ff] transition-colors">
                            Terms
                        </a>
                        <a href="#" className="text-blue-200/60 text-sm hover:text-[#00a3ff] transition-colors">
                            Privacy
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
