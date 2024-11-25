import React, { useState } from 'react'

import { BsWhatsapp } from "react-icons/bs";
import { AnimatePresence, delay, easeInOut, motion, transform } from "framer-motion";



import headphoneImage from "../../assets/images/headphone.png";
import headphoneImage2 from "../../assets/images/headphone2.png";
import headphoneImage3 from "../../assets/images/headphone3.png";



const fadeUp = (delay) => {
    return {
        hidden: {
            opacity: 0,
            y: 100,
            scale: 0.5,

        },
        show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                delay: delay,
                ease: easeInOut,
            },
        },
        exit: {
            opacity: 1,
            y: 50,
            scale: 1,
            transition: {
                duration: 0.2,
                delay: delay,
                ease: easeInOut,
            },
        }
    };
};




const headphoneData = [
    {
        id: 1,
        image: headphoneImage,
        title: "Headphones Wireless ",
        subtitle: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto dolorem voluptatibus quaerat, est officiis soluta. Repellendus?",
        price: "$100",
        modal: "Modal Brown",
        bgColor: "#8b5958",
    },
    {
        id: 2,
        image: headphoneImage2,
        title: "Headphones Wireless 2",
        subtitle: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto dolorem voluptatibus quaerat , est officiis soluta. Repellendus?",
        price: "$100",
        modal: "Lime Green",
        bgColor: "#638153",
    },
    {
        id: 3,
        image: headphoneImage3,
        title: "Headphones Wireless 3",
        subtitle: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto dolorem voluptatibus quaerat , est officiis soluta. Repellendus?",
        price: "$100",
        modal: "Ocen Blue",
        bgColor: "#5d818c",
    },

];



const Hero = () => {
    const [activeData, setActiveData] = useState(headphoneData[0]);

    const handleActiveData = (Data) => {
        setActiveData(Data);
    }
    return (
        <>
            <section className='bg-brandDark text-white font-varela'>
                <div className='container grid grid-cols-1 md:grid-cols-2 min-h-[700px]'>
                    {/* Headphone info */}
                    <div className='flex flex-col justify-end py-14 md:py- xl:max-w-[500px]'>
                        {/* Hero images */}
                        {/* <div className='flex flex-col justify-end items-center'>
                            <img src={activeData.image} alt="" className='w-[300px] md:w-[400px] xl:w-[550px]' />
                        </div> */}

                        {/* WhatsApp Icon */}
                        <div className='text-3xl text-white fixed bottom-10 right-10 hover:rotate-[360deg] duration-500 z-[99999] mix-blend-difference'>
                            <a href=''>
                                <BsWhatsapp />
                            </a>
                        </div>
                        <div className='mt-30 mb-36 '>
                            <div className='space-y-5 text-center md:text-left'>
                                <AnimatePresence mode='wait'>
                                    <motion.h1 key={activeData.id}
                                        variants={fadeUp(0.2)}
                                        initial="hidden"
                                        animate="show"
                                        exit="exit"
                                        className='text-3xl lg:text-6xl font-bold font-varela'>{activeData.title}</motion.h1>
                                </AnimatePresence>

                                <AnimatePresence mode='wait'>
                                    <motion.p key={activeData.id}
                                        variants={fadeUp(0.3)}
                                        initial="hidden"
                                        animate="show"
                                        exit="exit"
                                        className='text-sm leading-loose'>{activeData.subtitle}
                                    </motion.p>
                                </AnimatePresence>

                                <AnimatePresence mode='wait'>

                                    <motion.button key={activeData.id}
                                        variants={fadeUp(0.3)}
                                        initial="hidden"
                                        animate="show"
                                        exit="exit"

                                        className='px-4 py-2  bg-brandBrown inline-block font-normal rounded-sm'>
                                        Bye and Lsten
                                    </motion.button>
                                </AnimatePresence >
                            </div>


                            <div className='mt-4'>
                        
                                <div className='flex items-center justify-center md:justify-start gap-4 !mt-white py-4 '>
                                    <div className='w-20 h-[1px] bg-white mt-10'></div>


                                    <p className='uppercase text-sm mt-10'>  Top Headphones for you</p>

                                    <div className='w-20 h-[1px] bg-white mt-10'> </div>

                                </div>
                                <div>
                                    
                                    <div className='grid grid-cols-3 '>
                                        {headphoneData.map((item) => {
                                            return (
                                                <div key={item.id} onClick={() => handleActiveData(item)} className='grid grid-cols-2 place-items-center cursor-pointer'>
                                                    <div>
                                                        <img src={item.image} alt="Headphone" className='w-[200px]' />
                                                    </div>
                                                    <div className='space-y-2'>
                                                        <p className='text-base font-bold'>{item.price}</p>
                                                        <p className='text-xs font-normal text-nowrap'>{item.modal}</p>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>
           


                    <div className='flex flex-col justify-end items-center'>
                        <AnimatePresence mode='wait'>

                            <motion.img
                                key={activeData.id}
                                initial={{ opacity: 0, scale: 0.9, y: 100 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.2, ease: easeInOut }}
                                exit={{
                                    opacity: 0,
                                    y: 100,
                                    scale: 0.9,
                                    transition: {
                                        duration: 0.2,
                                    },
                                }}

                                src={activeData.image} alt="" className='w-[300px] md:w-[400px] xl:w-[550px]' />

                        </AnimatePresence>
                    </div>
                </div>


            </section>
        </>
    )
}

export default Hero

