import React from 'react';
import Image from 'next/image';
import doctor from '@/assets/doctor.webp';

const About = () => {
    return (
        <section id='apropos' className="grid grid-cols-1 lg:grid-cols-2 py-24 gap-8 px-8 lg:px-24">
            {/* About Text Section - Make first on small screens */}
            <div className="flex flex-col justify-center order-1 md:order-2  lg:px-0">
                <div className="flex items-center gap-4 md:gap-2 mb-4">
                    <div className="h-2 w-8 bg-ggreen"></div>
                    <h1 className="text-2xl lg:text-3xl font-semibold">
                        À Propos de Dr. <span className="bg-gradient-to-r from-ggreen to-bgreen text-transparent bg-clip-text">Léon Durand</span>
                    </h1>
                </div>
                <p className="text-lg text-gray-600">
                    Dr. Léon Durand, reconnu pour son expertise en soins dentaires modernes, 
                    possède plus de 10 ans d’expérience dans le domaine de la dentisterie. Passionné par l’art de restaurer les sourires et de veiller au bien-être bucco-dentaire, il met en avant des soins personnalisés pour chacun de ses patients. Son approche allie les technologies de pointe à une touche humaine, garantissant des résultats durables et une expérience confortable.
                </p>
            </div>

            {/* Stats and Image Section */}
            <div className="grid grid-cols-1 sm:grid-cols-3 sm:grid-rows-2 gap-4 order-2 md:order-1 ">
                {/* First Stats Card */}
                <div className="bg-ggreen rounded-xl p-8 flex flex-col justify-center items-center">
                    <h3 className="text-3xl font-semibold mb-2">10+</h3>
                    <p className="text-gray-700 text-center">Années d'Expérience</p>
                </div>

                {/* Second Stats Card */}
                <div className="bg-bgreen rounded-xl p-8 flex flex-col justify-center items-center sm:row-start-2 sm:col-start-1">
                    <h3 className="text-2xl font-semibold mb-2">1000+</h3>
                    <p className="text-gray-700 text-center">Patients Satisfaits</p>
                </div>

                {/* Doctor Image */}
                <div className="sm:col-span-2 sm:row-span-2 sm:col-start-2 sm:row-start-1 bg-[#EFF8FF] rounded-xl flex items-center justify-center">
                    <Image src={doctor} width={250} height={250} className="object-cover" alt="doctor" />
                </div>
            </div>
        </section>
    );
}

export default About;
