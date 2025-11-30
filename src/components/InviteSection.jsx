import React from 'react';
import { Calendar } from 'lucide-react';

const InviteSection = () => {
    return (
        <section id="schedule" className="py-20 px-6 md:px-10">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
                        We're inviting a limited number of teams to shape what comes next.
                    </h2>
                    <p className="text-xl md:text-2xl text-blue-100 mb-8">
                        AI is redefining operations. <span className="font-medium text-[#00a3ff]">Be early.</span>
                    </p>
                </div>

                <div className="mx-auto max-w-4xl">
                    <div className="h-full">
                        <div className="w-full bg-[#102040]/70 backdrop-blur-md rounded-[24px] overflow-hidden shadow-lg border border-blue-900/40">
                            <div className="p-6 border-b border-blue-900/30">
                                <div className="flex items-center gap-4">
                                    <div className="bg-[#0084ff] rounded-full p-3">
                                        <Calendar className="text-white" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white">Schedule a 30-minute call</h3>
                                        <p className="text-blue-100/80">See how AI can transform your operations</p>
                                    </div>
                                </div>
                            </div>
                            <div className="calendly-container w-full h-[600px]">
                                <iframe
                                    src="https://calendly.com/nadav-perlholdings/30min"
                                    width="100%"
                                    height="100%"
                                    frameBorder="0"
                                    title="Schedule a meeting with Calendly"
                                    className="w-full h-full bg-transparent"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InviteSection;
