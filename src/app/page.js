import Image from "next/image";
import Nav from "./components/nav";
import Foot from "./components/foot";
export default function Home() {
  return (
    <>
    <Nav/>
    <main>
      <section>
        <div>
          <div>
            <h1>Sunset Roofing and Gutters Services</h1>
          <img src="" alt="SunSet Roofing and Gutters Services LLC"/>
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
        <div><img src=""/></div>
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
            <img src=""/>
          </div>
          <div>
            <h3></h3>
            <img src=""/>
          </div>
          <div>
            <h3></h3>
            <img src=""/>
          </div>
          <div>
            <h3></h3>
            <img src=""/>
          </div>
          <div>
            <h3></h3>
            <img src=""/>
          </div>
          <div>
            <h3></h3>
            <img src=""/>
          </div>
        </div>
        <div>
          <button><a>Contact now</a></button>
        </div>
      </section>
      <section>
        <h2>Check out our <span>quality work</span></h2>
        <div>
          <img src="" alt=""/>
          <img src="" alt=""/>
          <img src="" alt=""/>
        </div>
        <div>
          <button>See all projects</button>
        </div>
      </section>
      <section>
        <div>
          <h2></h2>
          <p></p>
          <img src="" alt=""/>
        </div>
        <div>
          <img/>
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
    <Foot/>
    </>
  );
}
