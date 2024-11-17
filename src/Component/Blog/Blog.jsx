import React, { useEffect } from 'react';
import blog1 from '../../assets/blogs/blog1.jpg';
import blog2 from '../../assets/blogs/blog2.jpg';
import blog3 from '../../assets/blogs/blog3.jpg';
import blog4 from '../../assets/blogs/blog4.jpg';

import AOS from 'aos';
import 'aos/dist/aos.css';

const blogsData = [
    {
        id: 1,
        title: "Lorem ipsum dolor sit amet.",
        link: "#",
        blog: blog1,
        desc: "Lorem ipsum, dolorrepudiandae. Nobis,  corrupti ullam voluptas rerum doloribus!",
    },
    {
        id: 2,
        title: "Lorem ipsum dolor sit amet.",
        link: "#",
        blog: blog2,
        desc: "Lorem ipsum, dolorrepudiandae. Nobis,  corrupti ullam voluptas rerum doloribus!",
    },
    {
        id: 3,
        title: "Lorem ipsum dolor sit amet.",
        link: "#",
        blog: blog3,
        desc: "Lorem ipsum, dolorrepudiandae. Nobis,  corrupti ullam voluptas rerum doloribus!",
    },
    {
        id: 4,
        title: "Lorem ipsum dolor sit amet.",
        link: "#",
        blog: blog4,
        desc: "Lorem ipsum, dolorrepudiandae. Nobis,  corrupti ullam voluptas rerum doloribus!",
    },
];

function Blog() {
    useEffect(() => {
        AOS.init({ duration: 1000 }); 
    }, []);

    return (
        <section className="py-10 bg-gray-100">
            <div className="container mx-auto">
                <h1 className="text-4xl font-bold text-center mb-8">Blogs</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 m-24">
                    {blogsData.map((data, index) => (
                        <div
                            key={data.id}
                            className="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg"
                            data-aos="fade-up"
                            data-aos-delay={index * 200} 
                        >
                            <img
                                src={data.blog}
                                alt={data.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="text-2xl font-semibold">{data.title}</h2>
                                <p className="text-gray-700 mt-2">{data.desc}</p>
                                <a
                                    href={data.link}
                                    className="text-blue-500 hover:underline mt-4 inline-block"
                                >
                                    Read More
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Blog;
