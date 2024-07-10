
import bgphoto from '../src/assets/JeraldBg.png'
import bgFreak from '../src/assets/Freak5.jpg'
import bglavineGimp from '../src/assets/ZachLavineGimp.jpg'
import bgLavinePS from '../src/assets/ZachLavinePhotoshop.jpg'
import bgCity from '../src/assets/CityVetLogo.png'
import bgGtcut from '../src/assets/GTCut3.jpg'

import { FaHtml5, FaCss3, FaPython, FaFacebook, FaGithub, FaFacebookMessenger, FaCode, FaBasketballBall, FaGamepad, FaBook   } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io"
import {BiLogoGmail} from 'react-icons/bi'
import { MdAlternateEmail } from "react-icons/md"
import './App.css';
// import { LayerOne } from './components/layer_one'

function App() {
  return (
    <>
    {/* <LayerOne/> */}
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
          className=' mt-[-590px] h-[725px] mx-[150px]'/>
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
    <div className=' h-[730px] w-auto mt-40'>
      <div>
        <div className='m-10 text-left '>
          <span className='text-[200px] font-black text-[#A79277]'>/About Me</span>
        </div>
        <div className='text-center mx-[400px]'>
          <p className='text-justify font-thin'>I am Jerald D. Banalan, I'm 22-year-old from the city of Batangas. I am fourth year at Batangas State University TNEU waiting for graduation, where he is pursuing a Bachelor of Science in Information Technology with a major in Business Analytics.
          My academic path is driven by a profecient interest in UI/UX design and data analytics. As a new web designer, I'm enthusiastic about building intuitive and engaging digital experiences. My analytical abilities are similarly excellent, indicating a strong future in the field of business analytics.</p>
        </div>
      </div>
    </div>

    <div className='h-[730px] w-auto mt-40 bg-[#A79277]'>
      <div>
        <div className='w-auto text-right'>
          <span className='text-[200px] font-black text-white'>Achievements</span>
        </div>
        <div className='text-sm text-right mx-10 text-white font-bold  list-none '>
          <li><span className='tracking-widest'>Dean Lister 3rd Year First Semester 2022-2023 </span></li>
          <li><span className='tracking-widest'>Top 9 Overall in 3rd Year First Semester  2022-2023 </span></li>
          <li><span className='tracking-widest'>With Honors - Grade 12 First Quarter 2019-2020</span></li>
          <li><span className='tracking-widest'>Rank 9 - Grade 11 Second Quarter 2018-2019</span></li>
          <li><span className='tracking-widest'>Rank 8 - Grade 11 First Quarter 2018-2019</span></li>
        </div>
      </div>
    </div>

    <div className='h-[730px] w-auto mt-40'>
      <div className='font-black m-10'>
        <span className='text-[200px] text-[#A79277] text-left'>Hobbies</span>
      </div>
      <div className='flex justify-between'>

        <div className='h-[200px] w-[250px] mx-16'>
          <div className='w-auto mt-8 flex justify-center hover:animate-bounce'>
            <FaBasketballBall size={'100px'} className=' text-orange-300'/>
          </div>
          <div className='text-center mt-4 '>
            <span className='p-1 rounded-md bg-orange-300 text-white font-bold'>Play Sports</span>
          </div>
        </div>

        <div className='h-[200px] w-[250px] mx-16'>
          <div className='w-auto mt-8 flex justify-center hover:animate-bounce'>
            <FaGamepad size={'100px'} className=' text-blue-300'/>
          </div>
          <div className='text-center mt-4 '>
            <span className='p-1 rounded-md bg-blue-300 text-white font-bold'>Play Games</span>
          </div>
        </div>

        <div className='h-[200px] w-[250px] mx-16'>
          <div className='w-auto mt-8 flex justify-center hover:animate-bounce'>
            <FaBook size={'100px'} className=' text-yellow-200'/>
          </div>
          <div className='text-center mt-4 '>
            <span className='p-1 rounded-md bg-yellow-200 text-white font-bold'>Read Books</span>
          </div>
        </div>

        <div className='h-[200px] w-[250px] mx-16'>
          <div className='w-auto mt-8 flex justify-center hover:animate-bounce'>
            <FaCode size={'100px'} className=' text-violet-300'/>
          </div>
          <div className='text-center mt-4 '>
            <span className='p-1 rounded-md bg-violet-300 text-white font-bold'>Play Sports</span>
          </div>
        </div>

      </div>
    </div>

    <div className='h-[730px] w-auto mt-40 bg-[#A79277]'>
      <div className='font-black m-10 text-right'>
        <span className='text-[200px] text-white'>Desire Job</span>
      </div>
      <div className='text-lg text-right mx-14 text-white font-bold  list-none '>
          <li><span className='tracking-widest'>Jr. Business Analyst</span></li>
          <li><span className='tracking-widest'>Jr. Frontend Developers</span></li>
          <li><span className='tracking-widest'>UI / UX Designer</span></li>
          <li><span className='tracking-widest'>JR. Data Analyst</span></li>
          <li><span className='tracking-widest'>Software Engineer</span></li>
      </div>
    </div>

    <div className='h-[730px] w-auto mt-40'>
      <div className='font-black m-10 text-right'>
        <span className='text-[200px] text-[#A79277]'>MY WORK</span>
      </div>
      <div className='text-lg text-right mx-14 text-[#A79277] font-bold grid '>

        <div className='flex'>
          <img
          src={bgFreak}
          className='h-[350px] w-[300px] m-2'/>
          <div className='text-center w-full mt-[100px]'>
            <span className=' text-3xl '>GIANNIS ANTETOKOUNMPO FREAK 5 POSTER CARD</span>
          </div>
        </div>

        <div className='flex'>
        <div className='text-center w-full mt-[100px]'>
            <span className=' text-3xl '>CITY VET LOGO</span>
          </div>
          <img
          src={bgCity}
          className='h-[350px] w-[550px] m-2'/>
        </div>

        <div className='flex'>
          <img
          src={bgGtcut}
          className='h-[350px] w-[300px] m-2'/>
          <div className='text-center w-full mt-[100px]'>
            <span className=' text-3xl '>NIKE GTCUT 3 POSTER CARD</span>
          </div>
        </div>

        <div className='flex'>
        <div className='text-center w-full mt-[100px]'>
            <span className=' text-3xl '>Zach Lavine Poster Card - Adobe Photoshop</span>
          </div>
          <img
          src={bgLavinePS}
          className='h-[350px] w-[300px] m-2'/>
        </div>

        <div className='flex'>
          <img
          src={bglavineGimp}
          className='h-[350px] w-[300px] m-2'/>
          <div className='text-center w-full mt-[100px]'>
            <span className=' text-3xl '>Zach Lavine Poster Card - GIMP </span>
          </div>
        </div>
        {/* <div><img
        src={bgCity}
        className='h-[350px] w-[300px] m-2 '/></div>
        <div><img
        src={bgGtcut}
        className='h-[350px] w-[300px] m-2'/></div>
        <div><img
        src={bgLavinePS}
        className='h-[350px] w-[300px] m-2'/></div>
        <div><img
        src={bglavineGimp}
        className='h-[350px] w-[300px] m-2'/></div> */}
      </div>
    </div>
    </>
  );
}

export default App;
