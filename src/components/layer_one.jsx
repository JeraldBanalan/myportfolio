// import React from 'react'
// import BgPhoto from '../assets/JeraldBg.png'
// import { FaHtml5, FaCss3, FaPython, FaFacebook, FaGithub, FaFacebookMessenger, FaCode, FaBasketballBall, FaGamepad, FaBook   } from "react-icons/fa"
// import { IoLogoJavascript } from "react-icons/io"
// import {BiLogoGmail} from 'react-icons/bi'
// import { MdAlternateEmail } from "react-icons/md"

// export const LayerOne = () => {
//   return (
//     <>
//     <div className=''>
//       <div className='text-[#A79277] mt-28 xl:mt-0'>
//         <div className='text-center text-[80px] font-black italic md:mt-[-100px] md:text-[150px] xl:mt-[-100px] xl:text-center xl:text-[300px]'>
//         <span className=''>JERALD</span>
//         </div>
//         <div className='text-center text-[70px] mt-[-40px] md:mt-[-80px] font-black italic md:text-[140px] xl:mt-[-170px] xl:text-center xl:text-[280px]'>
//           <span className=''>BANALAN</span></div>
//       </div>
//       <div className=' flex list-none m-3 md:hidden lg:hidden xl:hidden  text-gray-400'>
//         <li><a href='https://www.facebook.com/Jbanalan10'><FaFacebook size={30} className='mx-2 hover:text-sky-300'/></a></li>
//         <li><a href='https://github.com/JeraldBanalan'><FaGithub size={30} className='mx-2 hover:text-black' /></a></li>
//         <li><a href='mailto:jeraldbanalan1@gmail.com'><BiLogoGmail size={30} className='mx-2 hover:text-red-300'/></a></li>
//       </div>
//       <div className='invisible md:visible lg:visible'>
//         <img src={BgPhoto} alt="" className=' h-[337px] m-0 w-auto md: xl:mt-[-610px] xl:mx-[150px] xl:h-[738px] xl:w-auto' />
//       </div>

//       <div className='mt-[-630px] invisible md:invisible lg:visible xl:visible'>
        
//         <div className=' relative h-20 w-[250px] bg-white rounded-md shadow-lg m-2 md:h-40 md:w-48 xl:h-[150px] xl:w-[250px] md:mx-[500px] md:mt-[-290px] xl:mx-[900px] xl:mt-[-490px]'>
//           <span><FaFacebook  size={'50px'} className='absolute text-[#0DA6FC] md:mt-[-10px]  md:mx-[20px] lg:mt-[-30px]  lg:mx-[20px] bg-white rounded-full '/></span>
//           <div className='absolute text-left h-auto w-auto mt-6 mx-6 text-[#0DA6FC]'>
//             <span className='text-4xl font-black'>1.9K</span><br/>
//             <span className='text-xl font-semibold'>Active Friends</span><br/>
//             <a href='https://www.facebook.com/Jbanalan10'>
//                     <button className=' h-6 w-32 mt-3 bg-[#0DA6FC] text-center font-bold text-white rounded-md'>View</button>
//             </a>
//           </div>
//           <span className='h-auto w-auto bg-white rounded-full text-[#0DA6FC] absolute md:mt-[100px] md:mx-[50px] lg:mt-[120px] lg:mx-[190px] '><FaFacebookMessenger size={'50px'}/></span>
          
//         </div>
//         <div className='relative h-20 w-[250px] bg-white rounded-md shadow-lg m-2 md:h-40 md:w-48 md:mx-[350px] xl:h-[150px] xl:w-[250px] xl:mx-[350px] xl:my-10'>
//           <span><FaGithub   size={'50px'} className='absolute md:mt-[-30px] md:mx-[170px] bg-white rounded-full '/></span>
//           <div className='absolute text-left h-auto w-auto mt-6 mx-6 '>
//             <span className='text-4xl font-black'>2</span><br/>
//             <span className='text-xl font-semibold'>Repositories</span><br/>
//             <a href='https://github.com/JeraldBanalan'>
//                     <button className=' h-6 w-32 mt-3 bg-black text-center font-bold text-white rounded-md'>View</button>
//             </a>
//             <span className='h-auto w-auto rounded-full text-black absolute mt-[30px] mx-[60px]'><FaCode size={'50px'}/></span>
//           </div>
//         </div>
//         <div className='relative h-20 w-[250px] bg-white rounded-md shadow-lg m-2 md:h-40 md:w-48 xl:h-[150px] xl:w-[250px] md:mx-[500px] md:mt-[-290px] xl:mx-[900px] xl:mt-[90px]'>
//           <span><BiLogoGmail size={'50px'} className='absolute text-red-500 md:mt-[-20px] md:mx-[170px] bg-white rounded-full '/></span>
//           <div className='absolute text-left h-auto w-auto mt-6 mx-6 text-red-500'>
//             <span className='text-4xl font-black'>Send some Question?</span><br/>
//             <a href='mailto:jeraldbanalan1@gmail.com'>
//                     <button className=' h-6 w-32 mt-3 bg-red-500 text-center font-bold text-white rounded-md'>Message</button>
//             </a>
//           </div>
//           <span className='h-auto w-auto rounded-full text-red-500 absolute mt-[120px] mx-[150px]'><MdAlternateEmail size={'50px'}/></span>
//         </div>
//       </div>
      
//       <div className=' ml-6 mt-10 grid md:my-[-120px] md:mx-[70px]'>
//         <div><span className='text-md md:text-xl font-medium text-[#AF8F6F]'>Information Technology - Business Analytics</span></div>
//         <div><span className='text-md md:text-2xl font-bold text-[#74512D]'>BATANGAS STATE UNIVERSITY TNEU</span></div>
//         <div><span className='text-md md:text-xl font-bold text-[#74512D]'>2020-2024</span></div>
//       </div>

//       <div className='mx-8 md:mt-7 md:mx-[1100px]'>
//         <hr className='absolute md:mt-[25px] md:w-[180px] md:mx-[135px]'/>
//         <div className='md:mx-[70px]'><span className='text-md font-medium text-[#D1BB9E] md:text-2xl'>SKILL</span></div>
//         <div className='grid grid-cols-2  text-[#A79277] md:flex md:w-[250px] md:mx-[70px]'>
//             <div className=' p-5 md:mx-5 md:p-0 hover:text-white hover:bg-[#AF8F6F] flex '>
//               <FaHtml5 size={'35px'}/>
//               <span className='visible md:hidden'>HTML 5</span>
//             </div>
//             <div className=' p-5 md:mx-5 md:p-0 hover:text-white hover:bg-[#AF8F6F] flex '>
//               <FaCss3 size={'35px'} />
//               <span className='visible md:hidden'>CSS 3</span>
//             </div>
//             <div className=' p-5 md:mx-5 md:p-0 hover:text-white hover:bg-[#AF8F6F] flex '>
//               <FaPython size={'35px'} />
//               <span className='visible md:hidden'>PYTHON </span>
//             </div>
//             <div className=' p-5 md:mx-5 md:p-0 hover:text-white hover:bg-[#AF8F6F] flex '>
//               <IoLogoJavascript size={'35px'}/>
//               <span className='visible md:hidden'>JAVASCRIPT </span>
//             </div>
//         </div>
//       </div>

//     </div>
//     </>
//   )
// }
