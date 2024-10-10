
import bgphoto from '../src/assets/JeraldBg.png'
import bgFreak from '../src/assets/Freak5.jpg'
import bglavineGimp from '../src/assets/ZachLavineGimp.jpg'
import bgLavinePS from '../src/assets/ZachLavinePhotoshop.jpg'
import bgCity from '../src/assets/CityVetLogo.png'
import bgGtcut from '../src/assets/GTCut3.jpg'
import home from '../src/assets/HOME.png'
import lifestyle from '../src/assets/LIFESTYLE.png'
import basketball from '../src/assets/BASKETBALL.png'
import running from '../src/assets/RUNNING.png'
import product from '../src/assets/PRODUCT.png'
import Cloud from '../src/assets/Aws_cloudArc.png'
import Arch from '../src/assets/Aws_cloudArc.png'
import Lipa from '../src/assets/LipaCert.png'
import Dean from '../src/assets/Deanlist.png'
import SAP from '../src/assets/Sap_cert.png'
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
          <p className='text-justify font-thin'>  I am Jerald D. Banalan, I'm 23-years-old,I'm born in the City of Calamba. I lived in Tangisan, Libjo, Batangas City. I am Graduate Student in Bachelor's of Science in Information and Technology Major at Business analytics at Batangas State University The National Engineering University. My hobbies is to play basketball, practice frontend design,  practicing Graphic Design, reading books and play online games. Given my academic background, strong foundation in business analytics, and emphasis on information technology, Throughout my education, I worked on several intriguing initiatives. One of my example that my project in C++ project in our subject in school that i create a simple Ordering Menu System that use of basic C++ function and  also our Capstone project, that entitled "Data-Driven Livestock Management System: A Web-Based Solution for The Office of City Veterinary and Agricultural Service's Livestock Dispersal Program," which utilized advanced analytics to improve resource allocation.I also conduct my 400 hours in my OJT/Internship in Makati as a Front-end Designer at testronix, Inc. We develop a Management system that store all the company business partners and their sales and expenses. My academic path is driven by a proficient interest in UI/UX design, Web Design, Web development and data analytics. As a fresh graduate student, I'm enthusiastic about building intuitive and engaging digital experiences. My analytical abilities are not excellent but proficient , indicating a strong future in the field of business analytics or any web development.</p>
        </div>
      </div>
    </div>

    <div className='h-[750px] w-auto mt-40 bg-[#A79277]'>
      <div>
        <div className='w-auto text-right'>
          <span className='text-[150px] font-semibold text-white'>Achievements</span>
        </div>
        <div className='text-sm text-right mx-10 text-white font-bold  list-none '>
          <li><span className='tracking-widest'>Dean Lister 3rd Year First Semester 2022-2023 </span></li>
          <li><span className='tracking-widest'>Top 9 Overall in 3rd Year First Semester  2022-2023 </span></li>
          <li><span className='tracking-widest'>With Honors - Grade 12 First Quarter 2019-2020</span></li>
          <li><span className='tracking-widest'>Rank 9 - Grade 11 Second Quarter 2018-2019</span></li>
          <li><span className='tracking-widest'>Rank 8 - Grade 11 First Quarter 2018-2019</span></li>
        </div>
      </div>
      <div>
        <div className='w-auto text-left'>
          <span className='text-[150px] font-semibold text-white'>Certification</span>
        </div>
        <div className='m-10 ml-20 grid grid-cols-5 my-[-15px] text-center gap-4'>
          <div className=''>
            <img src={Cloud} className='h-[150px] rounded-lg hover:h-[200px] duration-200 '/>
          </div>
          <div>
            <img src={Arch} className='h-[150px] rounded-lg hover:h-[200px] duration-200'/>
          </div>
          <div>
            <img src={Lipa} className='h-[150px] rounded-lg hover:h-[200px] duration-200'/>
          </div>
          <div>
            <img src={Dean} className='h-[150px] rounded-lg hover:h-[200px] duration-200'/>
          </div>
          <div>
            <img src={SAP} className='h-[150px] rounded-lg hover:h-[200px] duration-200'/>
          </div>
        </div>
      </div>
    </div>

    <div className='h-[500px] w-auto mt-40'>
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
          <li><span className='tracking-widest'>Web Designer</span></li>
          
      </div>
    </div>

    <div className='h-[700px] w-auto mt-36'>
      <div className='font-black m-8 text-left'>
        <span className='text-[200px] text-[#A79277]'>MY WORK</span>
      </div>
      <div className='text-lg text-right mx-14 text-[#A79277] font-bold grid '>

        
        <div className='text-left mt-10 text-2xl'>
          <span>WEB DESIGN</span>
          <div className='flex'>
            <img
            src={home}
            className='h-[250px] w-[300px] m-2'/>

            <img
            src={lifestyle}
            className='h-[250px] w-[250px] m-2'/>

            <img
            src={basketball}
            className='h-[250px] w-[250px] m-2'/>

            <img
            src={running}
            className='h-[250px] w-[250px] m-2'/>

            <img
            src={product}
            className='h-[250px] w-[300px] m-2'/>

          </div>  
          <div className='text-center'>
          <span>NIKE E-COMMERCE WEB DESIGN</span>
          </div>
        </div>

        <span>MY DIGITAL DESIGN</span>
        <div className='flex m-2'>
          
          <div>
            <img
            src={bgCity}
            className='h-[350px] w-[650px] m-2'/>
          </div>
          <div>
            <img
            src={bgFreak}
            className='h-[350px] w-[300px] m-2'/>
          </div>
          <div>
            <img
            src={bgGtcut}
            className='h-[350px] w-[300px] m-2'/>
          </div>
          <div>
            <img
            src={bgLavinePS}
            className='h-[350px] w-[300px] m-2'/>
          </div>
          <div>
            <img
            src={bglavineGimp}
            className='h-[350px] w-[300px] m-2'/>
          </div>
        </div>
      </div>
    </div>
    <div className='h-[700px] w-auto mt-[550px] bg-[#A79277]'>
      <div className='font-black m-10 text-right'>
        <span className='text-[200px] text-white'>My Project</span>
      </div>
      <div className='text-lg text-right mx-14 text-white font-bold  list-none '>
          <li><span className='tracking-widest'>City Veterinary Management System - Frontend Developer Member</span></li>
          <li><span className='tracking-widest'>Bet And Eat Ordering Menu System C++ Basic Fundamentals</span></li>
          <li><span className='tracking-widest'>Payroll System - Netbeans</span></li>
      </div>
    </div>
    </>
  );
}

export default App;
