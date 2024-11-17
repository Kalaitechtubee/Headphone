import React, { useEffect } from 'react'; 
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer1 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

  return (
    <>
      {/* Payment Section */}
      <div  className="text-center  bg-primary py-8">
    <p  className="text-white">© 2024. All Rights Reserved || The Coding Journey</p>
      </div>
    </>
  );
};

export default Footer1;
