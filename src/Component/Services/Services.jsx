import React, { useEffect } from 'react';
import icon1 from '../../assets/icons/obj1.png';
import icon2 from '../../assets/icons/obj2.png';
import icon3 from '../../assets/icons/obj3.png';
import { UpdateFollower } from 'react-mouse-follower';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';

const ServicesData = [
    {
        id: 1,
        title: "Security",
        link: "#",
        icon: icon1,
        desc: "Lorem Officia reiciendis delectus expedita alias beatae nesciunt corporis, placeat luptate iste modi veritatis quis nostrum aut",
        delay: 0.5,
    },
    {
        id: 2,
        title: "Guarantee",
        link: "#",
        icon: icon2,
        desc: "Lorem Officia reiciendis delectus expedita alias beatae nesciunt corporis, placeat luptate iste modi veritatis quis nostrum aut",
        delay: 0.5,
    },
    {
        id: 3,
        title: "Affordability",
        link: "#",
        icon: icon3,
        desc: "Lorem Officia reiciendis delectus expedita alias beatae nesciunt corporis, placeat luptate iste modi veritatis quis nostrum aut",
        delay: 0.5,
    },
];

const Services = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <section className="bg-gray-100 font-poppins py-8">
            <div className="container py-14">
                <h1 className="text-3xl font-bold text-center pb-10">Services</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" data-aos="zoom-in" data-aos-duration="1000">
                    {ServicesData.map((data) => (
                        <UpdateFollower
                            key={data.id}
                            mouseOptions={{
                                backgroundColor: "white",
                                zIndex: 9999,
                                followSpeed: 1.5,
                                scale: 5,
                                rotate: 720,
                                mixBlendMode: "darken",
                                backgroundElement: (
                                    <div>
                                        <img src={data.icon} alt={data.title} />
                                    </div>
                                ),
                            }}
                        >
                            <motion.div
                                className="flex flex-col items-center justify-center p-5 max-w-[300px] mx-auto shadow-lg rounded-xl bg-white"
                                whileHover={{ scale: 1.05, rotate: 3 }}
                                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                            >
                                <img src={data.icon} alt={data.title} className="w-[100px] mb-4" />
                                <div className="text-center space-y-2">
                                    <h1 className="text-2xl font-bold">{data.title}</h1>
                                    <p className="text-center text-sm text-black/75">{data.desc}</p>
                                </div>
                            </motion.div>
                        </UpdateFollower>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;

