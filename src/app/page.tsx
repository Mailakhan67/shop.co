'use client'
import { useEffect } from 'react'
import AllFonts from "@/components/AllFonts";
import Hero from "@/components/Hero";
import TopSelling from "./(pages)/product/TopSelling";
import BestSelling from "./(pages)/product/BestSelling";
import CustomerReviews from "@/components/CustomerReviews";
import BrowseDresses from "@/components/BrowseDresses";
import AOS from 'aos'
 import "aos/dist/aos.css"

export default function Home() {
 useEffect(()=>{
    AOS.init({
      easing: "ease-out-back",
      duration: 1200,
      delay: 100,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      offset: 160,
    });
    AOS.refresh()
      }, [])


  return (
  <div>
    <Hero/>
    <AllFonts/>
    <BestSelling/>
    <TopSelling/>
    <BrowseDresses/>
    <CustomerReviews/>
  </div>
  );
}