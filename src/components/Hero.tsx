
import Image from "next/image";

export default function Hero(){
    return (
        <main className="bg-[#F2F0F1] mt-20 md:mt-24 lg:h-[615px] md:px-10 sm:pt-4  flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start max-w-screen-2xl mx-auto">
              {/* left */}
               <div className="  md:pl-0  lg:w-[600px] space-y-5  sm:pt-7 mt-10 px-3">
  

               <h1 className={`text-4xl md:text-5xl lg:text-7xl lg:w-[690px] font-extrabold `} data-aos="flip-left">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                <p className="text-sm" data-aos="flip-left">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                <button className="w-full sm:w-[140px] text-sm bg-black text-white py-2 px-8 rounded-[20px]" data-aos="flip-left" >Shop Now</button>
                <div className=" flex justify-evenly md:justify-between flex-wrap md:flex-nowrap gap-y-4 mt-4 ml-4 space-x-4">
                  <div className="border-r pr-2">
                    <h1 className="text-2xl md:text-5xl  " data-aos="flip-left">200+</h1>
                    <p className="text-xs md:text-[15px] text-gray-500" data-aos="flip-left">International Brands</p>
                  </div>
                  <div className="border-r pr-5">
                    <h1 className="text-2xl md:text-5xl  " data-aos="flip-left">2,000+</h1>
                    <p className="text-xs md:text-[15px] text-gray-500" data-aos="flip-left">High-Quality Products</p>
                  </div>
                  <div>
                    <h1 className="text-2xl md:text-5xl " data-aos="flip-left">30,000+</h1>
                    <p className="text-xs md:text-[15px] text-gray-500" data-aos="flip-left">Happy Customers</p>
                  </div>
               </div>
               </div>
               {/* mid div */}
              
              {/* right */}
              <div className="relative">
              <Image src={"/profile.png"}
               className="w-[500px] h-[600px]"
              width={200} height={200} alt="hero-image" data-aos="flip-left"></Image> 
               <Image src={"/star.png"}
               className="w-[70px] sm:w-[100px] absolute top-[60px] right-6 "
              width={200} height={200} alt="hero-image" data-aos="flip-left"></Image> 
               <Image src={"/star.png"}
               className="w-[50px] sm:w-[70px]  absolute top-[230px] left-[0px] sm:left-[-30px] "
              width={200} height={200} alt="hero-image" data-aos="flip-left"></Image> 
              </div>
             
        </main>
    )
}





