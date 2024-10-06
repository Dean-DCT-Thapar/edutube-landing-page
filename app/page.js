import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="bg-[#e3e3e3] h-20">
        <ul className="flex flex-row justify-between">
          <li>
            <img className="h-16 ml-3 pt-3" src="/thaparLogo.webp" alt="thapar logo" />
          </li>
        </ul>
      </div>
      <div>
        <Image className="h-80 w-screen opacity-65" src="/mHostel.jpg" alt="Photo" width={500} height={500} />
        <h1 className="absolute top-32 pt-14 pl-10 text-black text-center text-5xl font-bold" style={{left:'3%'}}>THAPAR DIGITAL CONTENT MANAGEMENT SYSTEM</h1>
        <h2 className="text-black absolute top-52 pt-6 text-center" style={{left: '4%'}}>-Empowering Education Empowering Nation</h2>
      </div>
      <div className="bg-[#eeedec] h-full">
        <div>
          <h1 className="text-black text-5xl text-center pt-20 font-serif font-medium">Unlock a World of Knowledge</h1>
          <p className="text-black text-center pt-2">Access a wide range of structured learning materials and take your academic journey to the enxt level.</p>
          <div className="flex flex-row justify-center mt-4">
            <button className="text-white bg-[#570f07] h-10 w-48 rounded-3xl font-semibold mr-5">Browse Courses</button>
            <button className="text-[#570f07] w-48 h-10 border-2 border-[#570f07] rounded-3xl font-semibold">Explore Confrences</button>
          </div>
        </div>
        <div className="flex flex-row ml-48 mt-20">
          <img className="h-96 w-96 mr-10" src="/library.jpg" alt="photo" />
          <div>
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
          <h1 className="font-serif text-black text-3xl text-center mt-10">About Us</h1>
          <div className="grid grid-cols-3 gap-0">
            <div className="border border-black w-4/5 h-6/7 mt-3 ml-5 p-3 rounded-xl">
              <div className="flex flex-row justify-between">
                <img className="rounded-3xl h-32 w-32" src="/profile.png" alt="personal photo"/>
                <h1 className="text-black pr-16 ml-5 pt-10 font-serif text-2xl">NAME</h1>
              </div>
              <p className="text-black mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
            <div className="border border-black w-4/5 h-6/7 mt-3 ml-5 p-3 rounded-xl">
              <div className="flex flex-row justify-between">
                <img className="rounded-3xl h-32 w-32" src="/profile.png" alt="personal photo"/>
                <h1 className="text-black pr-16 ml-5 pt-10 font-serif text-2xl">NAME</h1>
              </div>
              <p className="text-black mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
            <div className="border border-black w-4/5 h-6/7 mt-3 ml-5 p-3 rounded-xl">
              <div className="flex flex-row justify-between">
                <img className="rounded-3xl h-32 w-32" src="/profile.png" alt="personal photo"/>
                <h1 className="text-black pr-16 ml-5 pt-10 font-serif text-2xl">NAME</h1>
              </div>
              <p className="text-black mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
            <div className="border border-black w-4/5 h-6/7 mt-3 ml-5 p-3 rounded-xl">
              <div className="flex flex-row justify-between">
                <img className="rounded-3xl h-32 w-32" src="/profile.png" alt="personal photo"/>
                <h1 className="text-black pr-16 ml-5 pt-10 font-serif text-2xl">NAME</h1>
              </div>
              <p className="text-black mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
            <div className="border border-black w-4/5 h-6/7 mt-3 ml-5 p-3 rounded-xl">
              <div className="flex flex-row justify-between">
                <img className="rounded-3xl h-32 w-32" src="/profile.png" alt="personal photo"/>
                <h1 className="text-black pr-16 ml-5 pt-10 font-serif text-2xl">NAME</h1>
              </div>
              <p className="text-black mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
              <div className="border border-black w-4/5 h-6/7 mt-3 ml-5 p-3 rounded-xl">
                <div className="flex flex-row justify-between">
                  <img className="rounded-3xl h-32 w-32" src="/profile.png" alt="personal photo"/>
                  <h1 className="text-black pr-16 ml-5 pt-10 font-serif text-2xl">NAME</h1>
                </div>
                <p className="text-black mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
              </div>
          </div>
        </div>
        <div className="mt-5 bg-[#e3e3e3] h-72">
          <img className="mx-auto" src="/footerLogo.png" alt="footer"/>
          <ul className="text-black flex flex-row justify-center">
            <li className="mr-3">Info</li>
            <li className="mr-3">About</li>
            <li className="mr-3"><a href="https://www.instagram.com/tietofficial?igsh=emFnanNkYW9uaWpu">Socials</a></li>
            <li className="mr-3"><a href="https://thapar.edu/">Official Website</a></li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </>
  );
}

