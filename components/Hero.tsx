import { cn } from '@/lib/utils';
import React from 'react';
import AnimatedShinyText from './ui/animated-shiny-text';
import { IconPhone } from '@tabler/icons-react';
import smilingperson from '@/assets/doctor.webp';;
import heroimage from '@/assets/slider-img.png';;
import Image from 'next/image';

const Hero = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 bg-[#EFF8FF] pt-24 md:pt-0 h-screen relative">
            <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left px-8 sm:px-16 lg:px-24 py-16 md:py-0">
                {/* Shiny Button */}
                <div className="z-10 mb-8 flex items-center justify-center">
                    <div className={cn("group rounded-full border border-black/5 bg-bgreen/50 text-base text-white px-4 py-1 transition-all ease-in hover:cursor-pointer hover:bg-bgreen dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800")}>
                        <AnimatedShinyText className="inline-flex items-center justify-center transition ease-out hover:text-neutral-700 hover:duration-300 hover:dark:text-neutral-400">
                            <span>🤩 Votre sourire, notre priorité</span>
                        </AnimatedShinyText>
                    </div>
                </div>

                {/* Main Heading and Subheading */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-4">
                    Ton <span className="bg-gradient-to-r from-ggreen via-bgreen to-bblue text-transparent bg-clip-text">Sourire Parfait</span> Commence Ici!
                </h1>
                <p className="text-sm md:text-lg font-medium text-gray-500 max-w-lg mb-8">
                    Offrant des soins dentaires de qualité, pour un sourire éclatant et une santé bucco-dentaire optimale. Votre bien-être est notre priorité absolue.
                </p>

                {/* Buttons */}
                <div className="flex flex-col md:flex-row gap-6 items-center justify-center md:justify-start w-full">
                    <a href='/rendez-vous'>
                    <button className="relative inline-block px-6 py-3 text-black font-medium rounded-lg bg-gradient-to-r from-ggreen to-bgreen">
                        Prendre rendez-vous
                    </button>

                    </a>
                    <a href='#form'>
                    <button className="flex items-center gap-3 text-black font-medium transition hover:text-ggreen">
                        Contactez-nous <IconPhone stroke={2} />
                    </button>

                    </a>
                </div>
            </div>

            {/* Image and Gradient Background for Second Column */}
            <div className="relative flex items-center justify-center overflow-hidden">
                <Image src={smilingperson} width={490} alt="heroperson" className="z-10  flex items-center justify-center" />
                <div className="absolute top-0 right-0 h-full w-full md:w-1/2 bg-gradient-to-b from-ggreen via-bblue to-bgreen  opacity-70"></div>
            </div>
        </section>
    );
}

export default Hero;
