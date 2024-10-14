import React from "react";
import hero from '../assets/images/hero.jpg'
const HeroSection = () => {
        const bgStyle = {
            background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${hero})`,
            backgroundPosition: 'center',
            backgroundRepeat:  'no-repeat',
            backgroundSize: 'cover'

        }
    return ( 
        <>
            <div  className={`rounded-lg h-[92vh]  bg-cover bg-no-repeat text-white`} style={bgStyle}>
            {/* <div className="bg-black opacity-50 absolute inset-0"></div> */}

                <div className="container h-full mx-auto">
                <div className="h-full">
                    <div className="flex flex-col gap-4 justify-center items-start h-full  pt-20">
                        <div className="content">
                            <p className="font-semibold">Featured</p>
                        </div>
                        <div className="blog-topic">
                            <p className="md:text-6xl font-semibold text-2xl">Breaking into Product Design</p>
                            <p className="md:text-6xl font-semibold text-2xl">Advice from Untitled Founder, Frankie</p>
                        </div>
                        <div className="blog-content">
                            <p className="md:w-2/4 text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur sapiente obcaecati optio commodi molestias dicta id earum nesciunt magni incidunt quis, ipsam blanditiis illo impedit excepturi ipsa tenetur. Quisquam, quibusdam.</p>
                        </div>
                    </div>
                </div>
                </div>
                
            </div>
        </>
     );
}
 
export default HeroSection;