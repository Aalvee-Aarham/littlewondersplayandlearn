import Head from 'next/head'
import  Navhero  from '../components/nav-hero'
import Nav from '../components/nav'
import Hero from '../components/hero'
import Carousel from '../components/carousel'
import Footer from '../components/footer'
import {useEffect} from "react";
import Image from 'next/image'
import Galleryimage from '../components/gallery'



export default function Home() {
  useEffect(() => {
      require('tw-elements');;
    }, []);
    const numbers =[]
    for (let i = 1; i < 28; i++) {
      numbers.push(i);
      
    }
  return (
    <section className=''>

      <Head>
        <title>Little Wonders Play and Learn</title>
        <meta name='description' content='Little Wonders play & learn is an early learning center with separate hours for regular preschool and inclusive preschool as well as after school programs offered for children aged between 2 to 6 years old'/>
        <meta property='og:title' content='Little Wonders play & learn'/>
        <link rel="icon" href="/whitelogo.svg" />
        
      </Head>
    <div className="hidden sm:block relative">
    <Image
      layout="fill"
      className="object-center object-cover pointer-events-none"
      src="/hero.webp"
      loading='eager'
      alt="hero image"
    />
   <div className="relative z-1">
      <Navhero/>
      <Hero />
   </div>

      </div>
    <div className="sm:hidden  ">
      <Nav/>
    <div className=" sm:hidden relative">
    <div className=" bg-no-repeat bg-cover" style=
            {{backgroundPosition: "50%",
            backgroundImage: "url('/hero-mobile.webp')",
            height: "500px"}}
            >
        <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
          style={{backgroundColor: "rgba(0, 0, 0, 0.4)"}}>
          <div className="flex justify-center items-end h-full">
            <div className="text- text-white  px-6 py-6 md:py-0 md:px-12 max-w-[800px]">
              <h2 className="text-2xl font-sans font-bold tracking-tight leading-tight mb-6">
                Little Wonders  <span className='text-blue-600 text-base'>play and learn</span>
              </h2>
              <strong className="mt-4 font-bold text-sm leading-3 text-white dark:text-gray-400">we aim at success by creating skllls necessary for kids
to enrich & empower in studies & sports</strong>
            </div>
          </div>
        </div>
      </div>

    </div>

      </div>
      <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 pb-10 items-center justify-center flex-col">
      <h1 className="title-font sm:text-4xl text center text-3xl my-4 py-6 font-medium text-gray-900">Our mission</h1>
    <div className="lg:w-2/6 relative md:w-3/6 w-5/6 mb-10">
    <Image width="720" height={600} className="lg:w-2/6 md:w-3/6 rounded-2xl w-5/6 mb-10" alt="hero" src="/mission.webp"/>
   </div>
   <p className='text-gray-700 px-6 text-base sm:text-2xl'>At Little wonders, our mission consists of providing a warm and nurturing environment where children feel safe. Our Preschool offers various activities that are specifically designed to encourage each child’s growth. Through cooperative play and creative activities, kids reach their social, emotional and physical milestones naturally and with ease.</p>
  </div>
</section>
      <Carousel/>
      <section className="text-gray-600 body-font">
  <div className="container lg:w-3/4 px-5 pb-10 mx-auto">

    <div className="flex flex-wrap -m-1 md:-m-2">
            {numbers.map(((num) => (
            <Galleryimage title="image" number={num} key={num}/>
          )))}
  </div>

    </div>
    </section>
    <Footer/>
    </section>
  )
}