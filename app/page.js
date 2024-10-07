'use client'
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="bg-[#e3e3e3] h-20 sm:h-20 sm:w-full">
        <ul className="flex flex-row justify-between w-1/2">
          <li className="hover:scale-105 transition-all duration-300">
            <a href="https://thapar.edu/">
              <img src="/logomob.webp" className="h-16 w-24 ml-3 pt-5 block sm:hidden"/>
              <img className="h-16 w-28 ml-3 pt-3 sm:h-16 hidden sm:block" src="/thaparLogo.webp" alt="thapar logo"/>
            </a>
          </li>
          <li className="mt-6 hover:scale-110 transition-all duration-300">
            <a href="https://thapar.edu/" className="text-black opacity-0 md:opacity-100">HOME</a>
          </li>
          <li className="mt-6 hover:scale-110 transition-all duration-300">
            <a href="https://nptel.ac.in/" className="text-black opacity-0 md:opacity-100">NPTEL</a>
          </li>
          <li className="mt-6 hover:scale-110 transition-all duration-300">
            <a href="https://cl.thapar.edu/" className="text-black opacity-0 md:opacity-100">LIBRARY</a>
          </li>
          <li className="mt-6 hover:scale-110 transition-all duration-300">
            <a href="https://shodhratna.thapar.edu:8443/jspui/" className="text-black opacity-0 md:opacity-100">ARCHIVE</a>
          </li>
        </ul>
      </div>
      <div>
        <Image className="h-80 w-screen opacity-65" src="/mHostel.jpg" alt="Photo" width={500} height={500} />
        <div className="absolute top-32 left-1/2 transform -translate-x-1/2 w-3/4 py-5 bg-black opacity-65" style={{left: '15%', animation: 'slide 1s ease-in-out forwards'}}>
          <h1 className="text-center text-xl sm:text-5xl font-bold" style={{animation: 'slide 1s ease-in-out forwards'}}>THAPAR DIGITAL CONTENT MANAGEMENT SYSTEM</h1>
          <h2 className="text-center"> -Empowering Education Empowering Nation</h2>
        </div> 
      </div>

      <style>{`
        @keyframes slide {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
      <div className="bg-[#eeedec] h-full">
        <div>
          <h1 className="text-black sm:text-5xl text-3xl text-center pt-20 font-serif font-medium">Unlock a World of Knowledge</h1>
          <p className="text-black text-center pt-2">Access a wide range of structured learning materials and take your academic journey to the next level.</p>
          <div className="flex flex-col sm:justify-center ml-18 sm:flex-row">
            <button className="text-white bg-[#570f07] h-10 w-48 mt-5 rounded-3xl font-semibold mr-5" onClick={() => alert("Coming Soon!")}>Browse Courses</button>
            <a href="http://www.conferenceranks.com/">
              <button type="button" className="text-[#570f07] mt-5 w-48 h-10 border-2 border-[#570f07] rounded-3xl font-semibold">Explore Confrences</button>
            </a>
          </div>
        </div>
        <div className="flex flex-row mt-28 sm:ml-28 ml-14">
          <img className="h-96 w-96 mt-0 md:mt-0 mr-10 -ml-14 hidden md:block" src="/library.jpg" alt="photo" />
          <div className="w-50">
            <div className="mb-5">
              <h1 className="text-black font-serif text-3xl">Structured Learning</h1>
              <p className="text-black w-3/4">Students will have access to a comprehensive, centralized repository of all course materials, including lectures, presentations, and notes, organized in a clear and intuitive format.</p>
            </div>
            <div className="mb-5">
              <h1 className="text-black font-serif text-3xl">Flexible Teaching</h1>
              <p className="text-black w-3/4">Students enjoy the freedom to customize their learning experience by selecting different instructors for various course components or even exploring the same topic from multiple perspectives to gain a deeper understanding.</p>
            </div>
            <div className="mb-5">
              <h1 className="text-black font-serif text-3xl">Personalized Tracking</h1>
              <p className="text-black w-3/4"> Each student can monitor and maintain a detailed record of their academic progress, including the number of lectures completed, to ensure a personalized and efficient learning journey</p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="font-serif text-black text-4xl font-medium text-center mt-10">Our Team</h1>
          <div className="grid grid-cols-4 sm:grid-cols-4 gap-0 sm:ml-5 pb-3">
            <div className="w-2/3 mt-3 ml-5 group hover:cursor pointer">
              <img src="/neeraj.jpg" className="h-3/4 mx-auto transition duration-500 group-hover:opacity-45"/>
              <div className="text-black w-full relative -top-1/2 opacity-0 transition duration-500 group-hover:opacity-100">
                <p className="text-center text-[#570f07] font-serif">PROF. NEERAJ KUMAR</p>
                <p className="text-center font-serif">DEAN-DCT</p>
              </div>
              <div className="text-black mx-auto w-full -mt-10 opacity-100 transition duration-500 group-hover:opacity-0">
                <p className="text-center text-[#570f07] font-serif">PROF. NEERAJ KUMAR</p>
                <p className="text-center font-serif">DEAN-DCT</p>
              </div>
            </div>
            <div className="w-2/3 mt-3 ml-5 group hover:cursor pointer">
              <img src="/hemdutt.jpg" className="mx-auto h-3/4 transition duration-500 group-hover:opacity-45"/>
              <div className="text-black w-full relative -top-1/2 left-6 opacity-0 transition duration-500 group-hover:opacity-100">
                <p className="text-[#570f07] font-serif">DR. HEM DUTT JOSHI</p>
                <p className="text-cente font-serif">ASSOCIATE DEAN-DCT</p>
              </div>
              <div className="text-black mx-auto w-full -mt-10 opacity-100 transition duration-500 group-hover:opacity-0">
                <p className="text-center text-[#570f07] font-serif">DR. HEM DUTT JOSHI</p>
                <p className="text-center font-serif">ASSOCIATE DEAN-DCT</p>
              </div>
            </div>
            <div className="w-2/3 mt-3 ml-5 group hover:cursor pointer">
              <img src="/ashutosh.jpg" className="mx-auto h-3/4 transition duration-500 group-hover:opacity-45"/>
              <div className="text-black w-full relative -top-1/2 opacity-0 transition duration-500 group-hover:opacity-100">
                <p className="text-center text-[#570f07] font-serif">DR. ASHUTOSH KUMAR SINGH</p>
                <p className="text-center font-serif">LIBRARIAN</p>
              </div>
              <div className="text-black mx-auto w-full -mt-16 opacity-100 transition duration-500 group-hover:opacity-0">
                <p className="text-center text-[#570f07] font-serif">DR. ASHUTOSH KUMAR SINGH</p>
                <p className="text-center font-serif">LIBRARIAN</p>
              </div>
            </div>
            <div className="w-2/3 mt-3 ml-5 group hover:cursor pointer">
              <img src="/pulkit.jpg" alt="pulkit ma'am photo" className="mx-auto h-3/4 transition duration-500 group-hover:opacity-45"/>
              <div className="text-black w-full relative -top-1/2 left-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <p className="text-center text-[#570f07] font-serif">PULKIT SHARMA</p>
                <p className="text-center font-serif">TEAM LEADER</p>
              </div>
              <div className="text-black mx-auto w-full -mt-10 opacity-100 transition duration-500 group-hover:opacity-0">
                <p className="text-center text-[#570f07] font-serif">PULKIT SHARMA</p>
                <p className="text-center font-serif">TEAM LEADER</p>
              </div>
            </div>
            
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-3 gap-0 sm:ml-5 pb-3 mt-5">
            <div className="w-2/3 mt-3 ml-5 group hover:cursor pointer">
              <img src="/jia.jpg" className="mx-auto h-3/4 transition duration-500 group-hover:opacity-45"/>
              <div className="text-black w-full relative -top-1/2 left-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <p className="text-center text-[#570f07] font-serif">JAYANTIKA</p>
                <p className="text-center font-serif">TEAM MEMBER</p>
              </div>
              <div className="text-black mx-auto w-full -mt-10 opacity-100 transition duration-500 group-hover:opacity-0">
                <p className="text-center text-[#570f07] font-serif">JAYANTIKA</p>
                <p className="text-center font-serif">TEAM MEMBER</p>
              </div>
            </div>
            <div className="w-2/3 mt-3 ml-5 group hover:cursor pointer">
              <img src="/aahil.jpg" className="mx-auto h-3/4 transition duration-500 group-hover:opacity-45"/>
              <div className="text-black w-full relative -top-1/2 left-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <p className="text-center text-[#570f07] font-serif">AAHIL KHAN</p>
                <p className="text-center font-serif">TEAM MEMBER</p>
              </div>
              <div className="text-black mx-auto w-full -mt-10 opacity-100 transition duration-500 group-hover:opacity-0">
                <p className="text-center text-[#570f07] font-serif">AAHIL KHAN</p>
                <p className="text-center font-serif">TEAM MEMBER</p>
              </div>
            </div>
            <div className="w-4/5 mt-3 -ml-6 group hover:cursor pointer">
              <img src="/gaurav.jpg" className="mx-auto h-3/4 transition duration-500 group-hover:opacity-45"/>
              <div className="text-black w-full relative -top-1/2 left-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <p className="text-center text-[#570f07] font-serif">GAURAV SRIVASTAVA</p>
                <p className="text-center font-serif">TEAM MEMBER</p>
              </div>
              <div className="text-black mx-auto w-full -mt-10 opacity-100 transition duration-500 group-hover:opacity-0">
                <p className="text-center text-[#570f07] font-serif">GAURAV SRIVASTAVA</p>
                <p className="text-center font-serif">TEAM MEMBER</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 bg-[#e3e3e3] h-72 hidden sm:block">
          <img className="mx-auto" src="/footerLogo.png" alt="footer"/>
          <ul className="text-black flex flex-row justify-center">
            <li className="mr-3 hover:scale-110 transition-all duration-300"><a href="https://www.thapar.edu/academics">Academics</a></li>
            <li className="mr-3 hover:scale-110 transition-all duration-300"><a href="https://thapar.edu/aboutus">About</a></li>
            <li className="mr-3 hover:scale-110 transition-all duration-300"><a href="https://www.instagram.com/tietofficial?igsh=emFnanNkYW9uaWpu">Socials</a></li>
            <li className="mr-3 hover:scale-110 transition-all duration-300"><a href="https://thapar.edu/">Official Website</a></li>
            <li className="mr-3 hover:scale-110 transition-all duration-300"><a href="https://www.thapar.edu/pages/contactus">Contact Us</a></li>
          </ul>
        </div>
      </div>
    </>
  );
}

