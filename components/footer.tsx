import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"


export default function Footer() {
    return(

<footer className="bg-slate-800 text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center flex-row ">
    <a className="flex title-font font-medium items-center justify-start  text-gray-900">
    <Image className="" height="50" width="100" layout="fixed" src="/lwlogo.svg"  alt=""
      loading="lazy" />
      <span className="ml-3 text-white text-sm md:text-xl">Little Wonders <br className="md:hidden flex"/> Play and learn</span>
    </a>
    <div>
    <p className="text-sm text-gray-500 ml-4 pl-4 flex border-l-2 border-gray-200 py-.2 mt-0">
    <FontAwesomeIcon className='px-2 h-4' icon={faPhone} />

      +8802222298584   </p>
    <p className="text-sm text-gray-500 ml-4 pl-4 flex border-l-2 border-gray-200 py-.2 mt-0">
    <FontAwesomeIcon className='px-2 h-4' icon={faPhone} />
      +880248950214   </p>
    </div>
    <div className="hidden sm:flex  ml-auto mt-0 ">
    <div>
    <p className="text-sm text-gray-500 ml-4 pl-4 flex border-l-2 border-gray-200 py-.2 mt-0">
    <FontAwesomeIcon className=' px-2 h-4 ' icon={faEnvelope} />

    littlewonders_uttara@yahoo.com   </p>
    <p className="text-sm text-gray-500 ml-4 pl-4 flex border-l-2 border-gray-200 py-.2 mt-0">
    <FontAwesomeIcon className='px-2 h-4 ' icon={faEnvelope} />
    littlewondersgulshan2@gmail.com   </p>
    </div>
    </div>
  </div>
</footer>
    )
}