import React from 'react';
import { FileCheck, ChartNoAxesColumn, Brain } from 'lucide-react';

const ContentSection = () => {
    return (
        <div className="pb-20">
            <div className="container mx-auto max-w-6xl px-6 pb-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="relative rounded-[24px] bg-[#102040]/60 backdrop-blur-md p-8 text-center shadow-lg transition-transform duration-300 cursor-default group border border-blue-900/30">
                        <div className="pointer-events-none absolute inset-0 rounded-[24px] border border-transparent group-hover:border-blue-400/50 group-hover:shadow-[0_0_15px_rgba(0,150,255,0.3)] transition-all duration-300"></div>
                        <div className="mb-6 mx-auto relative">
                            <div className="size-20 flex items-center justify-center mx-auto bg-[#0a1628]/80 rounded-full mb-4 shadow-inner p-4 border border-blue-800/30">
                                <FileCheck
                                    className="group-hover:scale-110 transition-transform duration-300"
                                    size={36}
                                    stroke="rgba(0, 163, 255, 0.9)"
                                    strokeWidth={2}
                                />
                            </div>
                        </div>
                        <p className="relative z-10 text-xl md:text-2xl font-medium text-blue-100 leading-snug">
                            What if every report closed itself?
                        </p>
                        <div className="absolute top-6 right-6 size-2 rounded-full bg-[rgba(0,163,255,0.9)] shadow-[0_0_8.84px_1.54px_rgba(0,163,255,0.9)]" style={{ transform: 'scale(1.23)' }}></div>
                        <div className="absolute bottom-6 left-6 size-2 rounded-full bg-[rgba(0,163,255,0.9)] shadow-[0_0_7.95px_1.97px_rgba(0,163,255,0.9)]" style={{ transform: 'scale(1.20)' }}></div>
                    </div>

                    {/* Card 2 */}
                    <div className="relative rounded-[24px] bg-[#102040]/60 backdrop-blur-md p-8 text-center shadow-lg transition-transform duration-300 cursor-default group border border-blue-900/30">
                        <div className="pointer-events-none absolute inset-0 rounded-[24px] border border-transparent group-hover:border-blue-400/50 group-hover:shadow-[0_0_15px_rgba(0,150,255,0.3)] transition-all duration-300"></div>
                        <div className="mb-6 mx-auto relative">
                            <div className="size-20 flex items-center justify-center mx-auto bg-[#0a1628]/80 rounded-full mb-4 shadow-inner p-4 border border-blue-800/30">
                                <ChartNoAxesColumn
                                    className="group-hover:scale-110 transition-transform duration-300"
                                    size={36}
                                    stroke="rgba(0, 200, 255, 0.9)"
                                    strokeWidth={2}
                                />
                            </div>
                        </div>
                        <p className="relative z-10 text-xl md:text-2xl font-medium text-blue-100 leading-snug">
                            What if every variance explained itself?
                        </p>
                        <div className="absolute top-6 right-6 size-2 rounded-full bg-[rgba(0,200,255,0.9)] shadow-[0_0_8.84px_1.54px_rgba(0,200,255,0.9)]" style={{ transform: 'scale(1.23)' }}></div>
                        <div className="absolute bottom-6 left-6 size-2 rounded-full bg-[rgba(0,200,255,0.9)] shadow-[0_0_7.95px_1.97px_rgba(0,200,255,0.9)]" style={{ transform: 'scale(1.20)' }}></div>
                    </div>

                    {/* Card 3 */}
                    <div className="relative rounded-[24px] bg-[#102040]/60 backdrop-blur-md p-8 text-center shadow-lg transition-transform duration-300 cursor-default group border border-blue-900/30">
                        <div className="pointer-events-none absolute inset-0 rounded-[24px] border border-transparent group-hover:border-blue-400/50 group-hover:shadow-[0_0_15px_rgba(0,150,255,0.3)] transition-all duration-300"></div>
                        <div className="mb-6 mx-auto relative">
                            <div className="size-20 flex items-center justify-center mx-auto bg-[#0a1628]/80 rounded-full mb-4 shadow-inner p-4 border border-blue-800/30">
                                <Brain
                                    className="group-hover:scale-110 transition-transform duration-300"
                                    size={36}
                                    stroke="rgba(80, 220, 255, 0.9)"
                                    strokeWidth={2}
                                />
                            </div>
                        </div>
                        <p className="relative z-10 text-xl md:text-2xl font-medium text-blue-100 leading-snug">
                            What if every decision made itself?
                        </p>
                        <div className="absolute top-6 right-6 size-2 rounded-full bg-[rgba(80,220,255,0.9)] shadow-[0_0_8.84px_1.54px_rgba(80,220,255,0.9)]" style={{ transform: 'scale(1.23)' }}></div>
                        <div className="absolute bottom-6 left-6 size-2 rounded-full bg-[rgba(80,220,255,0.9)] shadow-[0_0_7.95px_1.97px_rgba(80,220,255,0.9)]" style={{ transform: 'scale(1.20)' }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContentSection;
