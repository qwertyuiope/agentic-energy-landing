import React from 'react';

const Hero = ({ onScheduleClick }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[600px] pt-[228px] pb-20">
            <div className="box-border content-stretch flex flex-col gap-[48px] items-center justify-center px-[64px] relative">
                <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full">
                    <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[1.1] not-italic relative shrink-0 text-[64px] text-white text-center tracking-[-1.28px] w-[740px]">
                        <h1 className="block mb-0">Imagine operations that run themselves</h1>
                        <h2 className="block font-normal mt-4 text-[32px] text-blue-100/90">
                            Not magic — just AI where it matters most.
                        </h2>
                    </div>
                </div>
                <div className="content-center cursor-pointer flex flex-wrap gap-[16px] items-center justify-center relative shrink-0">
                    <button
                        onClick={onScheduleClick}
                        className="relative overflow-hidden rounded-[12px] transition-all duration-300 backdrop-blur-md shadow-md border border-white/20 bg-white/10 hover:bg-white/20 text-white hover:border-blue-400/40"
                    >
                        <div className="relative z-10">
                            <div className="px-[16px] py-[12px] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-nowrap tracking-[-0.09px]">
                                <p className="leading-[1.45] whitespace-pre">Schedule a Call</p>
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
