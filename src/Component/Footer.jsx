import React from "react";
const Footer = () => {
  const products = ["Overview","Features","Solution","Tutorial","Pricing","Releasing"]
  const companys = ["About Us","Careers","Press","News","Media","Contact"]
  const resources = ["Blog","Newsletter","Events","Help center","Tutorial","Support"]
  const usecases = ["Startup","Enterprises","Solution","Government","Saas center","Market Place"]
  const socials = ["Twitter","LinkedIn","Instagram","Facebook","Github","Dribble"]
  const legal = ["Terms","Privacy","Cookies","Licenses","Settings","Contact"]
  return (
    <>
      <div className="container mx-auto my-10">
        <div className="bg-black container mx-auto rounded-lg text-white">
          <div className="container mx-auto py-5">
            <div className="header flex md:flex-col flex-wrap items-center justify-center gap-3">
                <p className="font-semibold text-xl text-white text-center">Let's get started on something great</p>
                <p className="text-center">Join over 4000+ startups already growing with blog</p>
                <div className="btn flex gap-4 items-center mt-4 ">
                  <button className="border-2 rounded-lg  h-10 px-2">Chat to Us</button>
                  <button className="border-2 rounded-lg  h-10 px-2 bg-zinc-600">Get Started</button>

                </div>
            </div>
            <div className="footer-links container grid md:grid-cols-6 grid-cols-2 gap-3  w-[90%] mx-auto mt-5 px-10 py-6">
              <ul className="container mx-auto">
                <p className="font-semibold py-2">Product</p>
                <div className="container mx-auto flex flex-col gap-1">
                {
                  products.map((product,index) =>(
                    <li key={index}>{product}</li>
                  ))
                }
                </div>
              
              </ul>
              <ul className="container mx-auto">
                <p className="font-semibold py-2">Company</p>
                <div className="container mx-auto flex flex-col gap-1">
                {
                  companys.map((product,index) =>(
                    <li key={index}>{product}</li>
                  ))
                }
                </div>
              
              </ul>
              <ul className="container mx-auto">
                <p className="font-semibold py-2">Resources</p>
                <div className="container mx-auto flex flex-col gap-1">
                {
                  resources.map((product,index) =>(
                    <li key={index}>{product}</li>
                  ))
                }
                </div>
              
              </ul>
              <ul className="container mx-auto">
                <p className="font-semibold py-2">Use Cases</p>
                <div className="container mx-auto flex flex-col gap-1">
                {
                  usecases.map((product,index) =>(
                    <li key={index}>{product}</li>
                  ))
                }
                </div>
              
              </ul>
              <ul className="container mx-auto">
                <p className="font-semibold py-2">Social</p>
                <div className="container mx-auto flex flex-col gap-1">
                {
                  socials.map((product,index) =>(
                    <li key={index}>{product}</li>
                  ))
                }
                </div>
              
              </ul>
              <ul className="container mx-auto">
                <p className="font-semibold py-2">Legal</p>
                <div className="container mx-auto flex flex-col gap-1">
                {
                  legal.map((product,index) =>(
                    <li key={index}>{product}</li>
                  ))
                }
                </div>
              
              </ul>
            </div>
            <div className="footer-bottom w-[90%] container mx-auto mt-8">
                <div className="flex justify-between">
                  <p>Blogs</p>
                  <p> &copy; 2024 hr-blog.All right reserved</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
