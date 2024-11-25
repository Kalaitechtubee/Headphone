import React, { useEffect } from 'react';
import headphoneImage4 from "../../assets/images/headphone4.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';


const Banner = () => {
 
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <section>
        <div className='container py-14 grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 gap-12'>
          
          <div data-aos="fade-right" data-aos-duration="1000">
            <img src={headphoneImage4} alt="Headphones" className='w-[300px] md:w-[400px]' />
          </div>

         
          <div className='flex flex-col justify-center'>
            <div className='text-center md:text-left space-y-4 lg:max-w-[450px]' data-aos="fade-left">
              <h1 className='text-3xl lg:text-4xl font font-poppins font-semibold'>
                The Latest Headphone with The Latest Technology
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam minus laboriosam velit dolores sapiente magnam laudantium ab, eum facere officia excepturi voluptatem exercitationem dolorum nobis cupiditate error, vel delectus recusandae.
              </p>

              
              <button
                className='border-2 border-[#e33343] text-[#e33343] px-6 py-2 rounded-md hover:bg-[#e33343] hover:text-white'
                data-aos="fade-up"
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
        
        <motion.div
      className='bg-primary py-16 mt-5 m-20 rounded-3xl shadow-lg text-center '
      data-aos="zoom-in"
      whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)" }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'tween', duration: 0.15, ease: 'easeInOut' }}
    >
      <h1 className='text-4xl font-varela font-bold text-white '>
        Headphones With Good Quality And Affordable Price
      </h1>
    </motion.div>

      </section>
      
    </>
  );
};

export default Banner;
