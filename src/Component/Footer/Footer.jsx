import React, { useEffect } from 'react';
import { FaPhoneAlt, FaFacebook, FaTwitter, FaInstagram, FaTelegram } from "react-icons/fa";
import cards from "../../assets/images/credit-cards.webp";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); 
    }, []);

    return (
        <section className="bg-primary text-white py-10 "> 
            <div className="container mx-auto text-center w-1/2 flex flex-col md:flex-row justify-between items-center gap-8 ">
                {/* Contact Section */}
                <div data-aos="fade-up">
                    <h1 className="text-2xl font-bold mb-4 ">PLAYING</h1>
                    <p className="text-gray-300 mb-4 text-lg">
                        Lorem ipsum, adipisicing elit. Nobis quaerat repudiandae delectus.
                    </p>
                    <p className="flex items-center justify-center gap-2">
                        <FaPhoneAlt className="text-lg" /> +1 (123) 456-7890
                    </p>
                    <h2 className="mt-2">Noida, Uttar Pradesh</h2>

                        {/* Social Media Section */}
                <div data-aos="fade-up" data-aos-delay="200">
                    <h1 className="text-2xl font-bold mb-4 mt-5">FOLLOW US</h1>
                    <div className="flex gap-6 justify-center">
                        {[FaFacebook, FaTwitter, FaInstagram, FaTelegram].map((Icon, index) => (
                            <a key={index} href="#" className="text-white hover:text-gray-300 transition">
                                <Icon size={50} />
                            </a>
                        ))}
                    </div>
                </div>
                
                {/* Payment Section */}
                <div data-aos="fade-up" data-aos-delay="400" className="text-center mt-8">
                    <h1 className="text-2xl font-bold mb-4">PAYMENT</h1>
                    <img src={cards} alt="Payment Methods" className="mx-auto" />
                </div>
                </div>

            
            </div>

           
        </section>
    );
};

export default Footer;
