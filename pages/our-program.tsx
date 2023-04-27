import { useEffect } from "react";
import Glasscard from "../components/glasscard";
import Nav from "../components/nav";
import Image from "next/image";
import Footer from "../components/footer";
import Head from "next/head";
import { Banner } from "../components/banner";

export default function Feature(){
  useEffect(() => {
    require('tw-elements');;
  }, []);
    return (
      <>
              <Head>
          <title>Our Program</title>
          <meta name='description' content='Our preschool offers play-based learning programs for children aged 2-6 years old that are designed to be both fun and educational.'/>

          <link rel="icon" href="/whitelogo.svg" />
          
        </Head>
      <Nav/>
      <Banner title="our Program" />
      <div className="relative bg-bluee">
    <Image
      layout="fill"
      className="object-center object-contain opacity-10 pointer-events-none"
      src="/toy-bg.svg"
      alt="hero image"
    />
   <div className="relative z-1">
   <section className=" body-font">

<div className="px-4 py-16 z-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
  <div className="md:mx-auto ">
    <h2 className="max-w-lg mb-6 text-center font-sans text-3xl font-bold leading-none tracking-tight text-gray-100 sm:text-4xl md:mx-auto">
  Regular Program
    </h2>
    <div className="p-8 mt-4 space-y-4 rounded-xl">
              <div className="flex items-center justify-between text-gray-200 ">
                  <p className="text-base sm:text-lg"> 6 hours program (8:40 - 2:40)</p>
              </div>
              <div className="flex items-center justify-between text-gray-200 ">
                  <p className="text-base sm:text-lg"> 4 hours program (8:40 - 12:40)</p>
              </div>
              <div className="flex items-center justify-between text-gray-200 ">
                  <p className="text-base sm:text-lg"> 2 : 30 hours program (1:30 - 4:00)</p>
              </div>
      </div>
  <h2 className="pl-8 mb-6 font-sans text-2xl font-bold leading-none tracking-tight text-gray-100 sm:text-2xl md:mx-auto">
      Stages
    </h2>
  </div>
  <div className="grid gap-4 row-gap-5 text-white sm:grid-cols-2 lg:grid-cols-4">
    <div className="flex flex-col justify-between p-5 ">
    <Image height={192} width={288} layout="responsive" alt="content" className="object-cover object-center rounded-3xl h-44 w-auto" src="/Adjustment/adjustment (1).webp"/>

      <p className="py-2 font-semibold text-center">Adjustment</p>
    </div>
    <div className="flex flex-col justify-between p-5 ">
    <Image height={192} width={288} layout="responsive" alt="content" className="object-cover object-center rounded-3xl h-44 w-auto" src="/Adjustment/adjustment (2).webp"/>

      <p className="py-2 font-semibold text-center">Begginers</p>
    </div>
    <div className="flex flex-col justify-between p-5 ">
    <Image height={192} width={288} layout="responsive" alt="content" className="object-cover object-center rounded-3xl h-44 w-auto" src="/Adjustment/adjustment (3).webp"/>

      <p className="py-2 font-semibold text-center">Advance</p>
    </div>
    <div className="flex flex-col justify-between p-5 ">
    <Image height={192} width={288} layout="responsive" alt="content" className="object-cover object-center rounded-3xl h-44 w-auto" src="/Adjustment/adjustment (4).webp"/>

    <p className="py-2 font-semibold text-center">School Readiness</p>
    </div>
  </div>
</div>
</section>
   </div>
      </div>
      <div className="relative bg-green-500 ">
    <Image
      layout="fill"
      className="object-center object-cover opacity-10 pointer-events-none"
      src="/toy-bg.svg"
      alt="hero image"
    />
   <div className="relative z-1">
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
      <h1 className="sm:text-3xl text-4xl font-medium title-font mb-2 text-gray-100">Short term development Program</h1>
    </div>
    <div className="flex flex-wrap -m-4">
      
      <Glasscard title="Begginer 1" months="3" hours="1" />
      <Glasscard title="Begginer 2" months="3" hours="1" />
      <Glasscard title="Intermediate 1" months="3" hours="" />
      <Glasscard title="Intermediate 2" months="3" hours="1" />
      <Glasscard title="Advance 1" months="3" hours="1" />
      <Glasscard title="Advance 2" months="3" hours="1" />
      <Glasscard title="School Readiness 1" months="3" hours="1" />
      <Glasscard title="School Readiness 2" months="3" hours="1" />
    </div>
  </div>
</section>
  </div>
  </div>
  <div className="relative bg-orange-400 ">
    <Image
      layout="fill"
      className="object-center object-cover opacity-10 pointer-events-none"
      src="/toy-bg.svg"
      alt="hero image"
    />
   <div className="relative z-1">
      <section className="text-gray-600  body-font">
  <div className="container flex items-center flex-col px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
      <h1 className="sm:text-3xl text-3xl font-medium title-font mb-2 text-gray-100">After school program</h1>
    </div>
<div className="flex text-white text-xl items-center justify-center lg:w-4/5 flex-wrap -m-4">

      <div className=" md:w-1/2 w-full p-4">
      <div className="flex flex-col justify-between p-5 ">
          <Image height={256} width={512} layout="responsive" alt="content" className="object-cover object-center rounded-3xl h-auto w-auto" src="/after school/afterschool (1).webp"/>

            <p className="py-2 text-center">Intensive school support program</p>
          </div>
      </div>
      <div className=" md:w-1/2 w-full p-4">
      <div className="flex flex-col justify-between p-5 ">
          <Image height={256} width={512} layout="responsive" alt="content" className="object-cover object-center rounded-3xl h-auto  w-auto" src="/after school/afterschool (2).webp"/>

            <p className="py-2 text-center">piano</p>
          </div>
      </div>
      <div className=" md:w-1/2 w-full p-4">
      <div className="flex flex-col justify-between p-5 ">
          <Image height={256} width={512} layout="responsive" alt="content" className="object-cover object-center rounded-3xl h-auto w-auto" src="/after school/afterschool (3).webp"/>

            <p className="py-2 text-center">Home management program</p>
          </div>
      </div>
      <div className=" md:w-1/2 w-full p-4">
      <div className="flex flex-col justify-between p-5 ">
          <Image height={256} width={512} layout="responsive" alt="content" className="object-cover object-center rounded-3xl h-auto  w-auto" src="/after school/afterschool (4).webp"/>

            <p className="py-2 text-center">Karate</p>
          </div>
      </div>

   
        </div>

  </div>
</section>
  </div>
  </div>
  <div className="relative bg-sky-500 ">
    <Image
      layout="fill"
      className="object-center object-cover opacity-10 pointer-events-none"
      src="/toy-bg.svg"
      alt="hero image"
    />
   <div className="relative z-1">
      <section className="text-gray-100 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
      <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-100">Professionals Involved Providing Services</h1>
    </div>
    <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
      <div className="p-2 sm:w-1/2 w-full">
        <div className="p-6 shadow-2xl w-full h-full bg-white rounded-xl bg-opacity-20 backdrop-filter backdrop-blur-3xl max-w-sm">
          
          <span className="title-font font-medium">Occupational Therapy</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="p-6 shadow-2xl w-full h-full bg-white rounded-xl bg-opacity-20 backdrop-filter backdrop-blur-3xl max-w-sm">
          
          <span className="title-font font-medium">Speech and Language Therapy</span>
        </div>
      </div>
 
      <div className="p-2 sm:w-1/2 w-full">
        <div className="p-6 shadow-2xl w-full h-full bg-white rounded-xl bg-opacity-20 backdrop-filter backdrop-blur-3xl max-w-sm">
          
          <span className="title-font font-medium">Psycho Behaviour Therapy</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="p-6 shadow-2xl w-full h-full bg-white rounded-xl bg-opacity-20 backdrop-filter backdrop-blur-3xl max-w-sm">
          
          <span className="title-font font-medium">Physio Therapy</span>
        </div>
      </div>
    </div>
  </div>
</section>
  </div>

  </div>
  <Footer/>
     </>
    );
  };