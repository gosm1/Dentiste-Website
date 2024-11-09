import React from 'react'
import { Compare } from './ui/compare'
import after1 from '@/assets/after1.jpg'
import after2 from '@/assets/after2.jpg'
import before1 from '@/assets/before1.jpg'
import before2 from '@/assets/before2.jpg'
import tooth from '@/assets/tooth.svg'
import Image from 'next/image'

const Comparision = () => {
    return (
        <section id='après-avant' className=' bg-[#EFF8FF]'>
            <div className='py-12 flex-col items-center justify-center'>
                <div className=' flex items-center justify-center  pb-4 gap-2'>
                    <Image src={tooth}  alt='tooth'/>
                    <p className='text-sm text-center text-ggreen'>VOIR LES TRANSFORMATIONS</p>
                </div>
                <h1 className='text-3xl md:text-4xl  text-center font-semibold mb-2  lg:mb-4 mx-2  lg:mx-0'>Découvrez les <span className='bg-gradient-to-r from-ggreen via-bgreen to-bblue bg-clip-text text-transparent'>transformations spectaculaires</span> et les sourires revitalisés</h1>
            </div>
            <div className='px-12 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 '>
                <div className="p-2 inline-block border rounded-3xl bg-neutral-900   border-neutral-200 dark:border-neutral-800 px-2">
                    <Compare
                        firstImage={before1.src}
                        secondImage={after1.src}
                        firstImageClassName="object-cover "
                        secondImageClassname="object-cover object-left-top"
                        className="h-[180px] w-[320px] md:h-[330px] md:w-[550px]"
                        slideMode="hover"
                    />
                </div>
                <div className="p-2 inline-block border rounded-3xl bg-neutral-900   border-neutral-200 dark:border-neutral-800 px-2">
                    <Compare
                        firstImage={before2.src}
                        secondImage={after2.src}
                        firstImageClassName="object-cover object-left-top"
                        secondImageClassname="object-cover object-left-top"
                        className="h-[180px] w-[320px] md:h-[330px] md:w-[550px]"
                        slideMode="hover"
                    />
                </div>
            </div>
        </section>
    )
}

export default Comparision
