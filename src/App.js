import React from 'react';
import backgroundimg from "./images/heroo.png";


const App = () => {
  return (
    <>
      <nav className="">
        <div className="  flex bg-green-400 fixed items-center w-full justify-between items-center p-10  ">
          {/* <!--logo-->  */}
          <div className="pl-10">LOGO HERE</div>
          {/* <!--menu--> */}
          <ul className=" hidden md:flex gap-10 pr-10 ">
            <li>Home</li>
            <li>Gallery</li>
            <li>About</li>
            <li>Contact</li>
            <li>Map</li>
          </ul>
          {/* <!--mobile muji--> */}
          <div className="md:hidden flex pr-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <ul className=" justify-start   md:hidden  gap-10 ">
              <li>Home</li>
              <li>Gallery</li>
              <li>About</li>
              <li>Contacts</li>
              <li>Map</li>
            </ul>
          </div>
        </div>
        {/* <!--mobile menu ho ni--> */}
      </nav>

      {/* <!--image--> */}
      <div
        className="h-screen bg-cover bg-top-right bg-fixed flex overflow-hidden justify-center items-center "
        style={{ backgroundImage: `url(${backgroundimg})`  }}
      >
        <div className="flex flex-col gap-10">
          <div className="text-lg font-bold font-family-Luxurious Script text-white">
            Welcome To Urbara
          </div>
          <button className=" border border-green-500 rounded-full mx-4 p-3 text-white hover:text-green-100 hover:bg-green-500">
            EXPLORE
          </button>
        </div>
      </div>
      {/* <!--arko--> */}
      <div className="grid grid-cols-3 px-20 gap-10  pt-20 bg-neutral-100 h-96 w-full overflow-hidden">
        <div className="flex flex-row gap-5">
          <div className="flex h-20 place-items-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
              />
            </svg>
          </div>
          <div>
            <p className="text-center">WIFI</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
              commodi maxime laudantium laborum quidem deserunt natus earum!
              Itaque, nisi deleniti ullam ducimus harum architecto in possimus,
              \assumenda mollitia ea nobis.
            </p>
          </div>
        </div>
        <div>food</div>
        <div>nature</div>
      </div>
    </>
  );
};

export default App;
