import React from 'react'

const Footer = () => {
    return (
        <section className="py-16   lg:py-24">
    <div className="max-w-5xl px-4 mx-auto sm:px-6 ">
        <div className=" text-center">
            <h2 className="text-3xl md:text-4xl leading-tight text-black font-semibold">FAQ - Questions Fréquemment Posées</h2>
            <p className="text-lg font-normal  text-center text-gray-700 max-w-xl mx-auto mt-4 leading-relaxed ">Explorez les questions et réponses courantes sur les soins</p>
        </div>

        <div className="grid grid-cols-1 mt-12  md:grid-cols-2 gap-y-8 gap-x-20">
            <div className="flex items-start">
                <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gradient-to-r from-ggreen via-bgreen to-bblue rounded-full">
                    <span className="text-lg font-semibold text-black  ">?</span>
                </div>
                <div className="ml-4">
                    <p className="text-xl font-semibold text-black">Quels types de soins proposez-vous ?</p>
                    <p className="mt-4 text-base text-gray-700">Nous offrons une gamme complète de soins dentaires, allant de la prévention aux traitements spécialisés comme l’implantologie, l’orthodontie et le blanchiment des dents</p>
                </div>
            </div>

            <div className="flex items-start">
                <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gradient-to-r from-ggreen via-bgreen to-bblue rounded-full">
                    <span className="text-lg font-semibold text-black">?</span>
                </div>
                <div className="ml-4">
                    <p className="text-xl font-semibold text-black">Comment prendre rendez-vous ?</p>
                    <p className="mt-4 text-base text-gray-700">Vous pouvez facilement prendre rendez-vous en ligne via notre formulaire ou nous contacter directement par téléphone</p>
                </div>
            </div>

            <div className="flex items-start">
                <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gradient-to-r from-ggreen via-bgreen to-bblue rounded-full">
                    <span className="text-lg font-semibold text-black">?</span>
                </div>
                <div className="ml-4">
                    <p className="text-xl font-semibold text-black">Acceptez-vous les urgences dentaires ?</p>
                    <p className="mt-4 text-base text-gray-700">Oui, nous sommes disponibles pour les urgences dentaires et nous ferons de notre mieux pour vous accueillir rapidement en cas de douleur ou de situation nécessitant une intervention immédiate.</p>
                </div>
            </div>

            <div className="flex items-start">
                <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gradient-to-r from-ggreen via-bgreen to-bblue rounded-full">
                    <span className="text-lg font-semibold text-black">?</span>
                </div>
                <div className="ml-4">
                    <p className="text-xl font-semibold text-black">Quels types d’équipements utilisez-vous?</p>
                    <p className="mt-4 text-base text-gray-700">Nous utilisons des équipements modernes et avancés pour garantir des soins de qualité, plus précis et plus confortables pour chaque patient.</p>
                </div>
            </div>
        </div>

        
    </div>
</section>

    )
}

export default Footer
