
import bgphoto from '../src/assets/JeraldBg.png'
import { FaHtml5, FaCss3, FaPython, FaFacebook, FaGithub, FaFacebookMessenger, FaCode   } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io"
import {BiLogoGmail} from 'react-icons/bi'
import { MdAlternateEmail } from "react-icons/md"
import './App.css';

function App() {
  return (
    <>
    <div className='m-0 p-0 max-h-[948px]'>
      <div className=' text-[#A79277] text-center font-black italic'>
        <div className='mt-[-100px]'><span className=' text-[300px]'>JERALD</span></div>
        <br/>
        <div className='mt-[-200px]'><span className=' text-[280px]'>BANALAN</span></div>
      </div>

      <div className=''>
        <div className=''>
          <img
          src={bgphoto}
          className=' mt-[-590px] h-[720px] mx-[150px]'/>
        </div>
        <div className='text-center'>

          <div className='relative mx-[900px] mt-[-490px] h-[150px] w-[250px] bg-white rounded-md shadow-lg '>
            <div className=' bg-white relative rounded-md  h-auto w-auto'>
              <span><FaFacebook  size={'50px'} className='text-[#0DA6FC] mt-[-30px]  mx-[20px] absolute bg-white rounded-full '/></span>
              <div className='text-left h-auto w-auto absolute mt-6 mx-6 text-[#0DA6FC] '>
                <div><span className='text-4xl font-black'>1.9k </span></div>
                <div><span className='text-xl font-semibold'>Active Friends</span></div>
                  <a href='https://www.facebook.com/Jbanalan10'>
                    <button className=' h-6 w-32 bg-[#0DA6FC] text-center font-bold text-white rounded-md'>View</button>
                  </a>
              </div>
              <span className='h-auto w-auto bg-white rounded-full text-[#0DA6FC] absolute mt-[120px] mx-[90px]'><FaFacebookMessenger size={'50px'}/></span>
            </div>
          </div>

          <div className=' mx-[350px] relative bg-white rounded-md shadow-lg h-[150px] w-[250px]'>
            <div className=' bg-white h-auto w-auto'>
              <span><FaGithub   size={'50px'} className=' mt-[-30px] mx-[170px] absolute bg-white rounded-full '/></span>
              <div className='text-left h-auto w-auto absolute mt-6 mx-6'>
                <div><span className='text-4xl font-black'>2 </span></div>
                <div><span className='text-xl font-semibold'>Repositories</span></div>
                <a href='https://github.com/JeraldBanalan'>
                  <button className=' h-6 w-32 bg-black text-center font-bold text-white rounded-md'>View</button>
                </a>
              </div>
              <span className='h-auto w-auto rounded-full text-black absolute mt-[120px] mx-[90px]'><FaCode size={'50px'}/></span>
            </div>
          </div>

          <div className=' mx-[900px] bg- rounded-md bg-white shadow-lg h-[150px] w-[250px] relative'>
            <div className=' relative '>
            <span><BiLogoGmail size={'50px'} className='text-red-500 mt-[-20px] mx-[170px] absolute bg-white rounded-full '/></span>
            <div className='text-left h-auto w-auto absolute mt-6 mx-6 text-red-500 '>
                <div><span className='text-3xl font-black'> Send some Question? </span></div>
                <a href='mailto:jeraldbanalan1@gmail.com'>
                <button className=' h-6 w-32 bg-red-500 text-center font-bold text-white rounded-md'>Message</button>
                </a>
              </div>
            </div>
            <span className='h-auto w-auto rounded-full text-red-500 absolute mt-[120px] mx-[90px]'><MdAlternateEmail size={'50px'}/></span>
          </div>
        </div>
      </div>

      <div className='my-[-120px] mx-[70px]'>
        <div><span className='text-xl font-medium text-[#AF8F6F]'>Information Technology - Business Analytics</span></div>
        <div><span className='text-2xl font-bold text-[#74512D]'>BATANGAS STATE UNIVERSITY TNEU</span></div>
        <div><span className='text-xl font-bold text-[#74512D]'>2020-2024</span></div>
      </div>

      <div className='mt-[-150px] mx-[1100px]'>
        <hr className='mt-[25px] absolute w-[180px] mx-[135px]'/>
        <div className='mx-[70px]'><span className='text-2xl font-medium text-[#D1BB9E]'>SKILL</span></div>
        <div className='flex text-[#A79277] w-[250px] justify-between mx-[70px]'>
            <div><FaHtml5 size={'35px'}/></div>
            <div><FaCss3 size={'35px'}/></div>
            <div><FaPython size={'35px'}/></div>
            <div><IoLogoJavascript size={'35px'}/></div>
        </div>
      </div>

    </div>
    </>
  );
}

export default App;
