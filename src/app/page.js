import Image from "next/image";
import Nav from "./components/nav";
import Foot from "./components/foot";
import style from "./background_image.module.css";
export default function Home() {
  return (
    <>
    <main>
    <Nav image="/images/logo.png"/>
      <section className= {`${style.section_main} h-screen flex justify-center items-center`}>
        <div className="w-11/12 bg-orange-600 bg-opacity-50 box-border p-5 sm:w-4/5">
          <div className="flex flex-col sm:flex-row items-center my-5">
            <h1 className="text-white font-bold text-3xl grow text-center sm:text-5xl">Sunset Roofing and Gutters Services</h1>
            <img className="grow-0 h-32 mt-5 sm:h-20" src="/images/logo-white.png" alt="SunSet Roofing and Gutters Services LLC"/>
          </div>
          <p className="text-white my-10">At Sunset Roofing and Gutters Services, we take pride in providing high-quality solutions for your roofing and gutter needs. Our commitment to excellence is reflected in every project we undertake. With years of experience in the industry, our team of experts is dedicated to protecting your home or business from the elements. Trust us for professional service and lasting results.</p>
          <div className="w-full flex justify-center">
            <button className="bg-white"><a className="text-orange-500 block py-4 px-5">Get a quote</a></button>
          </div>
        </div>
      </section>
      <section id="about-us" className="flex flex-col w-full mx-auto sm:flex-row sm:w-10/12 min-h-screen">
        <div className="flex flex-col justify-center w-11/12 mx-auto min-h-96 p-4">
          <h2 className="text-3xl font-semibold my-6">
          Unyielding commitment to excellence, <span className="text-orange-500">service that knows no equal</span>
          </h2>
          <p className="text-lg leading-9">Our dedication to quality and attention to detail is unparalleled. Whether you need a new roof installation, reliable repairs, or comprehensive gutter services, we're here for you. Our trained team strives to deliver long-lasting results and exceptional service on every project. Your satisfaction is our top priority. Trust us to protect and enhance your property.</p>
        </div>
        <div className="flex items-center w-10/12 mx-auto p-4 lg:w-3/4">
          <img className="w-72 mx-auto m-12 lg:w-11/12" src="/images/resource-home.png"/>
          </div>
      </section>
      <section>
        <div className="flex justify-between gap-4 py-8 my-8 w-11/12 mx-auto flex-col md:flex-row md:w-4/5">
          <div className="flex flex-col mx-auto max-w-80 p-4 shadow-2xl rounded md:w-2/6">
            <img className="w-11/12 h-40 my-5" src="https://firebasestorage.googleapis.com/v0/b/dslb-wsb-cdn-americas.appspot.com/o/sunset-roofing-llc%2Fresource-002-quality.svg?alt=media&token=29146e75-a763-431d-b37e-64b2e5d095c4" alt=""/>
            <h3 className="text-center font-semibold">ULTRA QUALITY</h3>
            <p className="my-4 text-center text-gray-600 leading-6">At Sunset Roofing and Gutters Services, quality is our core principle. We take pride in delivering excellence in every project</p>
          </div>
          <div className="flex flex-col mx-auto max-w-80 p-4 shadow-2xl rounded md:w-2/6">
            <img className="w-11/12 h-40 my-5" src="https://firebasestorage.googleapis.com/v0/b/dslb-wsb-cdn-americas.appspot.com/o/sunset-roofing-llc%2Fresource-003-diamond.svg?alt=media&token=32cfc992-3f19-4570-9f0c-eacb3d6447aa" alt=""/>
            <h3 className="text-center font-semibold">MATERIAL OF THE BEST</h3>
            <p className="my-4 text-center text-gray-600 leading-6">We use the highest quality materials for your home, always taking care of your economy.</p>
          </div>
          <div className="flex flex-col mx-auto max-w-80 p-4 shadow-2xl rounded md:w-2/6">
            <img className="w-11/12 h-40 my-5" src="https://firebasestorage.googleapis.com/v0/b/dslb-wsb-cdn-americas.appspot.com/o/sunset-roofing-llc%2Fresource-004-check.svg?alt=media&token=375035ca-8543-4cb5-b7b0-43d5214e1cda" alt=""/>
            <h3 className="text-center font-semibold">COMMITTED TO THE PROJECT</h3>
            <p className="my-4 text-center text-gray-600 leading-6">All our projects are guaranteed and delivered on time. We are the experts.</p>
          </div>
        </div>
      </section>
      <section id="services" className="my-8">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl text-center font-bold sm:text-6xl">Our <span className="text-orange-500">services</span></h2>
          <img className="w-1/4" src="https://firebasestorage.googleapis.com/v0/b/dslb-wsb-cdn-americas.appspot.com/o/sunset-roofing-llc%2Fresource-005-orange-line.svg?alt=media&token=133e78b5-87b3-4497-abfb-b601ed658aef"/>
        </div>
        <div className="flex flex-wrap gap-5 justify-evenly m-8">
          <div className="w-10/12 mx-auto sm:w-1/4">
            <h3></h3>
            <img src="/images/services-1.png" alt="image services"/>
          </div>
          <div className="w-10/12 mx-auto sm:w-1/4">
            <h3></h3>
            <img src="/images/services-2.png" alt="image services"/>
          </div>
          <div className="w-10/12 mx-auto sm:w-1/4">
            <h3></h3>
            <img src="/images/services-3.png" alt="image services"/>
          </div>
          <div className="w-10/12 mx-auto sm:w-1/4">
            <h3></h3>
            <img src="/images/services-4.png" alt="image services"/>
          </div>
          <div className="w-10/12 mx-auto sm:w-1/4">
            <h3></h3>
            <img src="/images/services-5.png" alt="image services"/>
          </div>
          <div className="w-10/12 mx-auto sm:w-1/4">
            <h3></h3>
            <img src="/images/services-6.png" alt="image services"/>
          </div>
        </div>
        <div className="flex justify-center p-8">
          <button className="bg-orange-500 border-2 border-orange-500 rounded-2xl hover:bg-white"><a className="text-white font-semibold py-4 px-10 sm:px-20 block text-lg hover:text-orange-500" href="#">Contact now</a></button>
        </div>
      </section>
      <section id="project" className="my-10">
        <h2 className="text-4xl font-bold text-center sm:text-6xl">Check out our <span className="text-orange-500">quality work</span></h2>
        <div className="flex flex-col flex-wrap justify-between w-11/12 mx-auto sm:flex-row">
          <img className="w-11/12 mx-auto p-6 h-80 sm:h-96 object-cover sm:w-1/2 sm:mx-0" src="/images/work-1.jpg" alt="work image’s"/>
          <img className="w-11/12 mx-auto p-6 h-80 sm:h-96 object-cover sm:w-1/2 sm:mx-0" src="/images/work-2.jpg" alt="work image’s"/>
          <img className="w-11/12 mx-auto p-6 h-80 sm:h-96 object-cover sm:w-1/2 sm:mx-0" src="/images/work-3.jpg" alt="work image’s"/>
        </div>
        <div className="flex justify-center">
          <button className="bg-orange-500 rounded-full shadow-lg m-6 hover:bg-white"><a className="text-white font-semibold block py-5 px-10 sm:px-20 text-lg hover:text-orange-500" href="#">See all projects</a></button>
        </div>
      </section>
      <section>
        <div className={`${style.c_about} h-screen flex items-center`}>
          <div className="w-11/12 mx-auto my-8 py-8">
            <h2 className="my-8 text-white text-5xl text-right font-semibold sm:text-6xl">More about us</h2>
            <p className="my-8 text-white text-right font-medium leading-6">At Sunset Roofing and Gutters Services, our story is one of dedication and expertise. We began as a team of individuals passionate about construction and safeguarding homes and businesses. Over time, our commitment to quality and customer satisfaction led us to become a leading company in the roofing and gutters industry. For years, we have provided reliable solutions for a wide range of projects. From the installation of high-performance roofs to expert gutter repairs, we have left a mark of excellence on every job we undertake. Our team consists of trained professionals who understand the importance of keeping your property safe and protected. We take pride in being a vital part of your investment in your home or business.</p>
            <img className="my-8 mx-auto" src="/images/logo-white.png" alt="Sunset Roofing white logo's"/>
          </div>
        </div>
      </section>
      <section id="contact" className="flex flex-col bg-orange-100 min-h-screen md:flex-row">
        <div className={`${style.c_contact} w-full min-h-screen md:w-1/2`}>
          <img className="w-40 my-10 mx-auto sm:w-72" src="/images/logo.png" alt="Sunset Roofing logo's"/>
        </div>
        <div className="w-full p-7 py-10 md:w-1/2">
          <h2 className="text-4xl text-center font-semibold my-6">
          Life is full of surprises some good , some not so good. <span className="text-gray-500">Your investment has to be secured by certified professionals</span>
          </h2>
          <p className="text-xl font-normal text-gray-600 text-center m-6 my-8">Tell us more about your dream project ! our team will get in touch with you ASAP</p>
          <form className="my-8">
            <div className=" flex flex-col justify-between gap-8 sm:flex-row">
              <label className="flex flex-col my-4 sm:w-1/2">
                <span className="font-bold my-3">First and last name</span>
                <input className="w-full p-2 rounded-lg border-2 border-gray-300 text-lg"></input>
              </label>
              <label className="flex flex-col my-4 sm:w-1/2">
                <span className="font-bold my-3">Phone number</span>
                <input className="w-full p-2 rounded-lg border-2 border-gray-300 text-lg"></input>
              </label>
            </div>
            <label className="flex flex-col my-4">
              <span className="font-bold my-3">Email</span>
              <input className="p-2 rounded-lg border-2 border-gray-300 text-lg"></input>
            </label>
            <label className="flex flex-col my-4">
              <span className="font-bold my-3">Project stage</span>
              <select className="w-full p-2 rounded-lg border-2 border-gray-300 text-lg">
                <option>None selected</option>
                <option>Planning (Deciding to commint 1-2 months from now)</option>
                <option>Ready to rock’n roll (Decided to commit ASAP)</option>
                <option>Just want to get prices for personal records</option>
              </select>
            </label>
            <label className="flex flex-col my-4">
              <span className="font-bold my-3">Project description</span>
              <textarea rows={4} className="p-2 rounded-lg border-2 border-gray-300 text-lg"></textarea>
            </label>
            <div className="py-5">
              <p className="font-normal text-gray-600">The personal information collected is only used by our team giving a use that complies with these purposes. <span className="text-orange-600 font-semibold">We do not share or sell your information with any third parties.</span></p>
            </div>
            <div className="flex justify-center my-6">
              <button className="bg-orange-600 w-full py-3 rounded-lg  text-white font-semibold">Submit information</button>
            </div>
          </form>
        </div>
      </section>
    <Foot image="/images/logo-orange.png"/>
    </main>
    </>
  );
}
