import Head from "next/head";
import {useEffect} from "react";
import { Banner } from "../components/banner";
import Footer from "../components/footer";
import  Nav  from '../components/nav'

import Member from "../components/team-member";
export default function About() {
    useEffect(() => {
        require('tw-elements');;
      }, []);
    return (
      <>
              <Head>
          <title>About Us</title>
          <meta name='description' content='Little Wonders play & learn is an early learning center with separate hours for regular preschool and inclusive preschool as well as after school programs offered for children aged between 2 to 6 years old'/>
          <link rel="icon" href="/whitelogo.svg" />
          
        </Head>
        <section className="bg-slate-100">
            <Nav/>
            <Banner title="About Us" />
        <div className="container  px-6 py-6  mx-auto">
            
  
  <section className="mb-32 block rounded-lg shadow-lg bg-white text-gray-800">
    <h1 className="font-medium title-font mb-4 text-gray-900 tracking-widest text-center py-10 text-3xl ">About Little Wonders</h1>




    <div className="text-gray-500 text-lg px-6 py-6 ">
    <p>Little Wonders Play &amp; Learn Center offers quality preschool program with unique ambience and curriculum where children of age 2-6 years get the opportunity to develop learning abilities through play based approach.</p>

<p>Development during early childhood stage is so important that they cannot be left to chance; quality interventions</p>

<p>during preschool years have lasting effects on learning and motivations. Little Wonders is committed to give your child the best beginning to unlock the true possibilities for the rest of their lives.</p>

<p>At little wonders, we believe children learn best when at play. That is why we have used a play oriented curriculum. Our early childhood curriculum encourages discovery, exploration, creative learning and problem solving skills.</p>

<p>Here, at Little Wonders, we have a classroom full of friends to sing a song, teachers to dance along, corners to build a bridge with blocks, a wall to paint colors at liberty, a canvas to draw whatever the child imagines, an open field to run around, a green patch to soothe their eyes, a tree-house to count the birds, a soccer-field to fight over matches, a basketball court to aim for scores, a garden where children learn to grow their own vegetables and flowers, a sand shore to build their castles. And after a busy day they can take a nap in a caring hand.</p>

<p>We aim to develop your precious ones focusing on their social, emotional, intellectual, pre-academic and physical development that increase their interest to learn and help develop their confidence for the years ahead!</p>
    </div>
  </section>
  <section className="mb-32 text-gray-800">
    <div className="block rounded-lg shadow-lg bg-white">
            <h1 className="font-medium title-font mb-4 text-gray-900 tracking-widest text-center pt-10 text-3xl ">Our founders</h1>
      <div className="flex-wrap items-center container mx-auto flex px-5 py-12 md:flex-row flex-col">
        <div className="lg:flex grow-0 shrink-0 basis-auto lg:w-6/12 xl:w-4/12">
          <img src="/Team/Nazneen.webp" alt="Trendy Pants and Shoes"
            className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" />
        </div>
        <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
          <div className="px-6 py-6 md:px-12">
            <h2 className="text-2xl font-bold mb-4">Nazneen Akhter Ahmed</h2>
            <p className="uppercase font-bold mb-6 flex items-center">
             Founder
            </p>
            <p className="text-gray-500 mb-6">
            Ms. Nazneen Akhter Ahmed, an early childhood educator is the principal of Little Wonders play and learn
center. She Completed her Post Graduation in Early Childhood Development from BRAC University. For
the Year 2012 she has achieved Vice Chancellor&#39;s Gold Medal and Certificate for her highest distinction
in MSECD from BRAC University. She completed Level 1ABA Therapist Training from ABIA Melbourne
Australia. She is also a Business Graduate, majoring Finance &amp; Economics from North South University.            </p>
            <p className="text-gray-500">
            <p className="text-gray-500 mb-6">
            Ms. Ahmed is actively working with institution like BRAC and ICHD (Institute of Child And Human
Development). Little Wonders is jointly working with ICHD in many early childhood projects. She runs a
team of highly involved early childhood practitioners to organize preschool sessions, preschool play
based curriculum, caregivers training manuals, daycare management process and positive parenting
sessions and counseling.            </p>
            With two loving kids and caring spouse she is now settled in Dhaka and prefers to promote early
childhood development and inclusive education. Her professional commitment reflects her strong
standpoint for early childhood education. In future she intends to develop inclusive preschool curriculum
and carry on her researches and contribution in the field of ECD.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="mb-32 text-gray-800">
    <div className="block rounded-lg shadow-lg bg-white">
      <div className="flex-wrap items-center container mx-auto flex px-5 py-24 md:flex-row flex-col">
        <div className="lg:flex grow-0 shrink-0 basis-auto lg:w-6/12 xl:w-4/12">
          <img src="/Team/Mahmooda.webp" alt="Trendy Pants and Shoes"
            className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" />
        </div>
        <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
          <div className="px-6 py-12 md:px-12">
            <h2 className="text-2xl font-bold mb-4">Ms. Mahmuda Akhter</h2>
            <p className="uppercase font-bold mb-6 flex items-center">
             Advisor
            </p>
            <p className="text-gray-500 mb-6">
            Ms. Mahmuda Akhter, an Executive Director of ICHD (Institute of Child & Human Development), is also the founder of ECD Resource Centre at IED, BRAC University. She headed the ECD resource center there from 2005 to 2011. She is also a Member of Asia Pacific Regional Network for Early Childhood (ARNEC) Steering Committee and Member Secretary, Bangladesh ECD Network since 2005. She received professional courses on child development from Southampton University and London University. Under her guidance significant number of researches has been conducted in the field of ECD.
            </p>
            <p className="text-gray-500">
            Muzahid Ali, Country Coordinator, Enfants du Monde (Switzerland), Bangladesh is involved for long in multi language skill and basic education curriculum development. He holds Master’s in Education and Development, Université de Ouagadougou, Burkina Faso and Master’s in Linguistics, Université de Rouen, France.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="text-gray-600 block rounded-lg shadow-lg bg-white body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">OUR TEAM</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">At Little Wonders, we have a team of teachers who put their best to make children storng and knowledgeable. Let's meet our respective teachers</p>
    </div>
</div>
<div className="flex flex-wrap -m-4">
    <Member 
    staff_name="Ms. Shalina Akhter" 
    postition="Vice-Principal of Little Wonders play and learn." 
    joining_date="since 1st March, 2012 till now."
    view="I strongly believe that as early educators we need to work on our ability to teach every child. If we can teach in their way they can actually learn."  
    />
    <Member 
    staff_name="Farzana Mahin Anu" 
    postition="Centre in charge – Uttara branch, Little Wonders play and learn." 
    joining_date="Since November 2013 till now."
    view="I love to work with little kids. I believe all my kids can actually perform and meet our expectation if only we believe that they can."  
    />
    <Member 
    staff_name="Lutfun Nahar (Lata)" 
    postition="Executive Admin and Accounts Little Wonders play and learn " 
    joining_date="Since April 2015"
    view="I belief that every person should complete his/her work on time. So I am honest and serious with my work."  
    />
    <Member 
    staff_name="Kawser Akter" 
    postition="Centre in charge – Gulshan branch Little Wonders play and learn " 
    joining_date="Since March 2015"
    view="I love to work with special kids and I feel like a very special teacher around them."  
    />
    <Member 
    staff_name="Ishana Fariha" 
    postition="Executive, Classroom Intervention Support Program" 
    joining_date="Since 1st February 2017 till now"
    view="I love to work with children. I always prefer to follow child’s direction while communicating with them."  
    />
    <Member 
    staff_name="Zarin Tasnim" 
    postition="Executive, classroom Intervention Support Program." 
    joining_date="1st April, 2017 to till today."
    view="I like to work with kids and I’m honest to serve them best thus they can achieve best."  
    />
    <Member 
    staff_name="Md. Aminul Haque" 
    postition="Occupational Therapist at Little Wonders play and learn centre." 
    joining_date="13th March 1018"
    view="I love my professions, I prefer to provide service to the special need children and work in different settings."  
    />
    <Member 
    staff_name="Jahanara Khatun Urmi" 
    postition="Executive, classroom Intervention Support Program." 
    joining_date="Since 1st December, 2018 to till today"
    view="I prefer to work with special need kids to improve their functional skills by providing appropriate 
    service so that they can achieve their highest target.
    "  
    />
    <Member 
    staff_name="Layla Afrin Luna" 
    postition="Occupational Therapist at Little Wonders play and learn centre." 
    joining_date="Since 11th December, 2018 to till today."
    view="I respect my profession most as why I honestly dedicate my knowledge and experience to enabling
    the engagement in daily living activities and promoting both physical and mental health of the person 
   with disabilities of all ages.     
   "  
    />
    <Member 
    staff_name="Rasida Akter" 
    postition="Executive, classroom Intervention Support Program" 
    joining_date="Since 15th July, 2019 to till today."
    view="I like to working with kids and I’m willing to serve my best for the betterment of the children with special need. "  
    />
    <Member 
    staff_name="Fairooz Rabiah Anika" 
    postition="Speech and Language Therapist at Little Wonders play and learn centre." 
    joining_date="Since November 2021"
    view="Helping individuals at all ability levels to communicate more effectively enables me to change the world one word at a time and thus I am proud to be part of such a glorious profession."  
    />
    
</div>
</section>
</div>
        
        </section>
        <Footer/>
                  </>
    )
  }
  