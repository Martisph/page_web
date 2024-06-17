import Image from "next/image";
import Nav from "./components/nav";
import Foot from "./components/foot";
import style from "./background_image.module.css";
export default function Home() {
  return (
    <>
    <Nav image="/images/logo.png"/>
    <main>
      <section className={style.section_main}>
        <div>
          <div>
            <h1>Sunset Roofing and Gutters Services</h1>
            <Image
              //className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src="/images/logo-white.png"
              alt="SunSet Roofing and Gutters Services LLC"
              width={200}
              height={200}
              priority
            />
          <img src="/images/logo-white.png" alt="SunSet Roofing and Gutters Services LLC"/>
          </div>
          <p>At Sunset Roofing and Gutters Services, we take pride in providing high-quality solutions for your roofing and gutter needs. Our commitment to excellence is reflected in every project we undertake. With years of experience in the industry, our team of experts is dedicated to protecting your home or business from the elements. Trust us for professional service and lasting results.</p>
          <button><a>Get a quote</a></button>
        </div>
      </section>
      <section>
        <div>
          <h2>
          Unyielding commitment to excellence, <span>service that knows no equal</span>
          </h2>
          <p>Our dedication to quality and attention to detail is unparalleled. Whether you need a new roof installation, reliable repairs, or comprehensive gutter services, we're here for you. Our trained team strives to deliver long-lasting results and exceptional service on every project. Your satisfaction is our top priority. Trust us to protect and enhance your property.</p>
        </div>
        <div><img src="/images/resource-home.png"/></div>
      </section>
      <section>
        <div>
          <div>
            <img src="" alt=""/>
            <h3>ULTRA QUALITY</h3>
            <p>At Sunset Roofing and Gutters Services, quality is our core principle. We take pride in delivering excellence in every project</p>
          </div>
          <div>
            <img src="" alt=""/>
            <h3>MATERIAL OF THE BEST</h3>
            <p>We use the highest quality materials for your home, always taking care of your economy.</p>
          </div>
          <div>
            <img src="" alt=""/>
            <h3>COMMITTED TO THE PROJECT</h3>
            <p>All our projects are guaranteed and delivered on time. We are the experts.</p>
          </div>
        </div>
      </section>
      <section>
        <div>
          <h2>Our <span>services</span></h2>
        </div>
        <div>
          <div>
            <h3></h3>
            <img src="/images/services-1.png" alt="image services"/>
          </div>
          <div>
            <h3></h3>
            <img src="/images/services-2.png" alt="image services"/>
          </div>
          <div>
            <h3></h3>
            <img src="/images/services-3.png" alt="image services"/>
          </div>
          <div>
            <h3></h3>
            <img src="/images/services-4.png" alt="image services"/>
          </div>
          <div>
            <h3></h3>
            <img src="/images/services-5.png" alt="image services"/>
          </div>
          <div>
            <h3></h3>
            <img src="/images/services-6.png" alt="image services"/>
          </div>
        </div>
        <div>
          <button><a>Contact now</a></button>
        </div>
      </section>
      <section>
        <h2>Check out our <span>quality work</span></h2>
        <div>
          <img src="/images/work-1.jpg" alt="work image’s"/>
          <img src="/images/work-2.jpg" alt="work image’s"/>
          <img src="/images/work-3.jpg" alt="work image’s"/>
        </div>
        <div>
          <button>See all projects</button>
        </div>
      </section>
      <section>
        <div className={style.c_about}>
          <h2>More about us</h2>
          <p>At Sunset Roofing and Gutters Services, our story is one of dedication and expertise. We began as a team of individuals passionate about construction and safeguarding homes and businesses. Over time, our commitment to quality and customer satisfaction led us to become a leading company in the roofing and gutters industry. For years, we have provided reliable solutions for a wide range of projects. From the installation of high-performance roofs to expert gutter repairs, we have left a mark of excellence on every job we undertake. Our team consists of trained professionals who understand the importance of keeping your property safe and protected. We take pride in being a vital part of your investment in your home or business.</p>
          <img src="/images/logo-white.png" alt="Sunset Roofing white logo's"/>
        </div>
        <div className={style.c_contact}>
          <img src="/images/logo.png" alt="Sunset Roofing logo's"/>
        </div>
        <div>
          <h2>
          Life is full of surprises some good , some not so good. <span>Your investment has to be secured by certified professionals</span>
          </h2>
          <p>Tell us more about your dream project ! our team will get in touch with you ASAP</p>
          <form>
            <div>
              <label>
                <span></span>
                <input></input>
              </label>
              <label>
                <span></span>
                <input></input>
              </label>
            </div>
            <label>
              <span></span>
              <input></input>
            </label>
            <label>
              <span></span>
              <select>
                <option>None selected</option>
                <option>Planning (Deciding to commint 1-2 months from now)</option>
                <option>Ready to rock’n roll (Decided to commit ASAP)</option>
                <option>Just want to get prices for personal records</option>
              </select>
            </label>
            <label>
              <span></span>
              <textarea placeholder="label area"></textarea>
            </label>
            <div>
              <p>The personal information collected is only used by our team giving a use that complies with these purposes. <span> We do not share or sell your information with any third parties.</span></p>
            </div>
            <button>Submit information</button>
          </form>
        </div>
      </section>
    </main>
    <Foot image="/images/logo-orange.png"/>
    </>
  );
}
