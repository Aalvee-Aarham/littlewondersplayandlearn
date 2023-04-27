import  Nav  from '../components/nav'
import Head from 'next/head'
import Footer from '../components/footer'
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot,faPhone,faEnvelope} from '@fortawesome/free-solid-svg-icons';
import Galleryuttara from '../components/gallaryuttara';
import Gallerygulshan from '../components/gallarygulshan';


import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import { Banner } from '../components/banner';

export default function Contact() {
  useEffect(() => {
    require('tw-elements');;
  }, []);
  const numbers =[]
  for (let i = 1; i < 7; i++) {
    numbers.push(i);
    
  }
    return (
      <div className='bg-zinc-100'>
        <Nav/>
        <Head>
          <title>Contct Us</title>
          <meta property='og:title' content='Contact Us'/>
          <meta name='description' content='Contact us to learn more about our preschool programs and how we can help your child grow and learn. Our experienced teachers are dedicated to providing a safe and nurturing environment where children can thrive'/>
          <link rel="icon" href="/whitelogo.svg" />
          
        </Head>
        <Banner title="Our Branches" />
        {/* <h1 className="max-w-lg my-6 pt-4 font-sans text-center text-4xl font-bold leading-none tracking-tight text-gray-900 sm:text-5xl md:mx-auto">
            Our branches
        </h1> */}
      <div >
        <div className="px-4 my-16 block rounded-lg shadow-lg bg-white py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
      <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            Gulshan Branch
        </h2>
      </div>
      <div className="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
        <div className="flex flex-col justify-center">
          <div className="flex">
            <div className="mr-4">
              <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full">
              <FontAwesomeIcon className='w-8 h-8 bg-white' icon={faLocationDot} />
              </div>
            </div>
            <div>
              <h6 className="mb-2 font-semibold leading-5">
                Address
              </h6>
              <p className="text-sm text-gray-900">
              House 22,Road 108, Appt 1F Gulshan 2,  Dhaka
              </p>
              <hr className="w-full my-6 border-gray-300" />
            </div>
          </div>
          <div className="flex">
            <div className="mr-4">
              <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
              <FontAwesomeIcon className='w-8 h-8 bg-white' icon={faPhone} />

              </div>
            </div>
            <div>
              <h6 className="mb-2 font-semibold leading-5">
                Phone number
              </h6>
              <p className="text-sm text-gray-900">01746503232</p>
              <p className="text-sm text-gray-900">02222298584</p>
              <hr className="w-full my-6 border-gray-300" />
            </div>
          </div>
          <div className="flex">
            <div className="mr-4">
              <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
              <FontAwesomeIcon className='w-8 h-8 bg-white' icon={faEnvelope} />

              </div>
            </div>
            <div>
              <h6 className="mb-2 font-semibold leading-5">
                Email
              </h6>
              <p className="text-sm text-gray-900">littlewondersgulshan2@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="w-full">
    <div className=" h-96 w-full bg-gray-300 rounded-lg overflow-hidden p-10 flex items-end justify-start relative">
      <iframe width="100%" height="100%" className="absolute inset-0" frameBorder="0" title="map" 
      marginHeight={0} marginWidth={0} scrolling="no" 
      src="https://maps.google.com/maps?width=100%25&
      amp;height=600&amp;hl=en&amp;q=Road%20108,%20Gulshan
      %202,%20Dhaka+(Little%20wonders%20Play%20and%20Learn)&amp
      ;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" 
      style={{filter: "opacity(1);"}}></iframe>

      </div>
      
    </div>
    </div>
    <section className="block rounded-lg  bg-white text-gray-800">
    <h1 className="font-medium title-font mb-4 text-gray-900 tracking-widest text-center py-10 text-3xl ">Images of Gulshan Branch</h1>
    <section className="text-gray-600 body-font">
  <div className="container lg:w-3/4 px-5 pb-10 mx-auto">

    <div className="flex flex-wrap -m-1 md:-m-2">
            {numbers.map(((num) => (
            <Gallerygulshan number={num} key={num}/>
          )))}
  </div>

    </div>
    </section>
  </section>

      </div>
        <div className="px-4  my-16 block rounded-lg shadow-lg bg-white  py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            Uttara Branch
        </h2>
      </div>
      <div className="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
        <div className="flex flex-col justify-center">
          <div className="flex">
            <div className="mr-4">
            <FontAwesomeIcon className='w-8 h-8 bg-white' icon={faLocationDot} />

            </div>
            <div>
              <h6 className="mb-2 font-semibold leading-5">
                Address
              </h6>
              <p className="text-sm text-gray-900">
              House 56, Road 13, Sector 3, Uttara, Dhaka
              </p>
              <hr className="w-full my-6 border-gray-300" />
            </div>
          </div>
          <div className="flex">
            <div className="mr-4">
            <FontAwesomeIcon className='w-8 h-8 bg-white' icon={faPhone} />

            </div>
            <div>
              <h6 className="mb-2 font-semibold leading-5">
                Phone number
              </h6>
              <p className="text-sm text-gray-900">01746503232</p>
             <p className="text-sm text-gray-900">0248950214</p>
              <hr className="w-full my-6 border-gray-300" />
            </div>
          </div>
          <div className="flex">
            <div className="mr-4">
            <FontAwesomeIcon className='w-8 h-8 bg-white' icon={faEnvelope} />

            </div>
            <div>
              <h6 className="mb-2 font-semibold leading-5">
                Email
              </h6>
              <p className="text-sm text-gray-900">littlewonders_uttara@yahoo.com</p>
            </div>
          </div>
        </div>
        <div className="w-full">
    <div className=" h-96 w-full bg-gray-300 rounded-lg overflow-hidden p-10 flex items-end justify-start relative">
      <iframe width="100%" height="100%" className="absolute inset-0" frameBorder="0" title="map" 
      marginHeight={0} marginWidth={0} scrolling="no" 
      src="https://maps.google.com/maps?width=100%25&amp;height=600&amp
      ;hl=en&amp;q=Road%2013,%20Sector%203,%20Uttara,%20Dhaka+(Little%20wonders
      %20Play%20and%20Learn)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      style={{filter: "opacity(.6);"}}></iframe>

      </div>
    </div>
    </div>
 
    <section className="block rounded-lg  bg-white text-gray-800">
    <h1 className="font-medium title-font mb-4 text-gray-900 tracking-widest text-center py-10 text-3xl ">Images of Uttara Branch</h1>
    <section className="text-gray-600 body-font">
  <div className="container lg:w-3/4 px-5 pb-10 mx-auto">

    <div className="flex flex-wrap -m-1 md:-m-2">
            {numbers.map(((num) => (
            <Galleryuttara number={num} key={num}/>
          )))}
  </div>

    </div>
    </section>
  </section>
      </div>

                    </div>
        <Footer/>
        </div>
    )
  }