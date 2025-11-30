import React from 'react';

const Header = ({ onScheduleClick }) => {
    return (
        <header className="fixed top-0 left-1/2 -translate-x-1/2 z-[9999] w-[375px] sm:w-[800px] lg:w-[1280px]">
            <div className="flex justify-center items-center px-6 py-8 sm:px-16 sm:py-8 lg:px-80 lg:py-6">
                <div className="relative flex-shrink-0 flex-1 min-w-[1px] min-h-[1px]">
                    <div className="relative flex-shrink-0 flex-1 rounded-2xl">
                        <div className="absolute inset-0 pointer-events-none bg-white/20 backdrop-blur-[6px] rounded-2xl"></div>
                        <div aria-hidden="true" className="absolute inset-0 overflow-visible pointer-events-none border border-white/15 rounded-2xl"></div>
                        <div className="rounded-[inherit] flex flex-row items-center w-full h-full">
                            <div className="box-border py-2 px-4 pr-2 flex justify-between items-center relative w-full">
                                <div className="w-[111px] sm:w-[115px] lg:w-[124px] relative flex-shrink-0 flex items-center gap-2 p-0">
                                    <div className="w-7 h-7 sm:w-8 sm:h-8 relative flex-shrink-0 block">
                                        <img
                                            alt="Logomark"
                                            className="max-w-none w-full h-full object-cover object-center absolute inset-0"
                                            src="https://drop-haven-17472657.figma.site/_assets/v11/5b94b68947f8b548e93e77e9ae76bd9188ecc7c8.png"
                                        />
                                    </div>
                                    <div className="relative flex-shrink-0 flex flex-col justify-center">
                                        <p className="whitespace-nowrap font-['Inter:Semi_Bold',sans-serif] font-semibold text-lg sm:text-xl tracking-tight text-white leading-[1.4]">
                                            Agentic Energy
                                        </p>
                                    </div>
                                </div>
                                <a className="relative flex-shrink-0" href="https://calendly.com/nadav-perlholdings" target="_blank" rel="noopener noreferrer">
                                    <nav className="w-full h-full block cursor-pointer flex items-center gap-6 p-0">
                                        <div className="relative flex-shrink-0 rounded-lg box-border py-2 px-3 flex justify-center items-center gap-2 cursor-pointer bg-white overflow-clip">
                                            <div className="relative flex-shrink-0 flex flex-col justify-center">
                                                <p className="whitespace-nowrap font-['Inter:Medium',sans-serif] font-medium text-base tracking-tight text-center text-black leading-[1.45]">
                                                    Schedule Call
                                                </p>
                                            </div>
                                        </div>
                                    </nav>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
