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
          <div className="flex flex-col sm:flex-row justify-center items-center my-5">
            <h1 className="text-white font-bold text-3xl text-center sm:text-5xl">Sunset Roofing and Gutters Services</h1>
            <Image
              className="w-40 h-32 mt-5 sm:w-32 sm:h-20"
              src="/images/logo-white.png"
              alt="SunSet Roofing and Gutters Services LLC"
              width={500}
              height={1000}
            />
          </div>
          <p className="text-white my-10 sm:text-xl">At Sunset Roofing and Gutters Services, we take pride in providing high-quality solutions for your roofing and gutter needs. Our commitment to excellence is reflected in every project we undertake. With years of experience in the industry, our team of experts is dedicated to protecting your home or business from the elements. Trust us for professional service and lasting results.</p>
          <div className="w-full flex justify-center mt-10">
            <button className="bg-white">
              <a className="text-orange-500 py-4 px-10 flex gap-2 stroke-2 items-center" href="tel:4253193252">Get a quote
                <svg className="w-6 h-6 fill-orange-500" data-name="Layer 1" id="Layer_1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M478,256,302,432l-21.21-21.2L420.6,271H34V241H420.6L280.75,101.16,302,80Z"/></svg>
                </a></button>
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
          <Image
            width={1000}
            className="w-72 mx-auto m-12 lg:w-11/12"
            src="/images/resource-home.png"
            height={1000}
          />
        </div>
      </section>
      <section>
        <div className="flex justify-between gap-4 py-8 my-8 w-11/12 mx-auto flex-col md:flex-row md:w-4/5">
          <div className="flex flex-col mx-auto max-w-80 p-4 shadow-2xl rounded md:w-2/6">
          <svg className="w-11/12 h-40 my-5"
          width="160" height="149" viewBox="0 0 160 149" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M65.8233 125.983C65.8233 127.308 65.8233 128.963 65.4918 130.62L64.6636 146.682C64.6636 147.842 63.6702 148.835 62.5105 148.835L37.5062 148.67C36.3464 148.67 35.3531 147.677 35.3531 146.517L34.8564 133.269L11.0118 104.622C7.53377 100.979 5.05046 96.6739 4.38868 91.7058L4.22351 90.2157L0.0824831 49.9765C-0.247876 47.9897 0.413996 46.0019 2.0704 44.6781C3.89199 43.188 6.87203 42.6913 9.02533 45.1748C10.5154 46.9963 11.3436 52.4612 11.5088 53.9512C12.337 59.2508 13.3303 66.7022 13.4955 72.0006V73.1603C13.6607 75.4786 14.1574 77.6316 15.1519 79.7835C20.4515 91.3747 31.2145 106.113 31.2145 106.113L31.8764 106.941C32.3731 107.603 33.2013 107.769 33.8631 107.437C34.6913 106.941 34.8565 105.947 34.525 105.284L20.284 82.1019C18.7939 79.4521 19.6221 75.809 22.437 74.1537C25.252 72.4973 28.8952 73.3255 30.3852 75.9753L45.2881 95.0179C46.2814 96.3428 48.103 97.998 49.4279 98.9925C62.8407 108.597 64.4972 118.367 65.6558 123.335C65.6581 123.168 65.6581 124.328 65.8233 125.983ZM14.9861 47.9887C15.4828 49.4787 15.6479 50.8036 15.9795 52.1285C16.8077 56.5998 17.801 64.8795 17.9662 69.1846V70.5095C18.4629 70.0128 18.9596 69.6813 19.6226 69.3498C20.2845 68.8531 21.1127 68.5216 21.9409 68.3564C21.9409 68.3564 21.9409 68.1912 22.1061 68.1912C21.6094 64.0514 20.1193 56.1032 18.9595 52.1287C18.2976 50.1408 17.1391 48.6506 14.9858 47.9888L14.9861 47.9887ZM22.9343 53.6185C23.5961 56.5986 25.2525 62.2297 25.7492 65.0448L26.0807 67.0316V67.5283C27.2404 67.5283 28.5641 67.8598 29.7238 68.1901C29.3923 65.5404 27.5707 60.0757 26.9088 57.5921C26.2458 55.7717 25.0872 54.4468 22.9343 53.6185ZM124.443 146.516L124.94 133.269L148.786 104.621C152.264 100.978 154.747 96.6731 155.409 91.705L155.574 90.215L159.714 49.9758C159.879 47.989 159.217 46.0012 157.727 44.6762C155.905 43.1861 152.925 42.6894 150.772 45.1729C149.282 46.9945 148.454 52.4593 148.289 53.9493C147.46 59.2489 146.467 66.7003 146.302 71.9987V73.1584C146.137 75.4767 145.64 77.6297 144.645 79.7816C139.346 91.3728 128.583 106.111 128.583 106.111L127.92 107.104C127.423 107.766 126.595 107.932 125.933 107.601C125.105 107.104 124.94 106.111 125.271 105.448L139.512 82.2652C141.002 79.6154 140.174 75.9723 137.359 74.317C134.544 72.6606 130.901 73.4888 129.411 76.1385L114.508 95.1812C113.515 96.5061 111.693 98.1613 110.368 99.1558C96.9555 108.76 95.299 118.53 94.1404 123.498C94.1404 123.498 93.9752 124.658 93.9752 126.148C93.9752 127.473 93.9752 129.128 94.3067 130.784L95.1349 146.847C95.1349 148.007 96.1283 149 97.288 149L122.292 148.835C123.615 148.668 124.443 147.674 124.443 146.515L124.443 146.516ZM137.856 68.1908C138.684 68.5223 139.512 69.019 140.174 69.3505C140.836 69.682 141.334 70.1787 141.831 70.5102V69.1853C141.996 64.8802 142.99 56.6005 143.817 52.1292C143.982 50.8043 144.314 49.3142 144.811 47.9893C142.824 48.6512 141.499 50.1424 141.002 52.1292C139.843 56.2678 138.518 64.0509 137.856 68.1908ZM133.716 67.1974L134.048 65.2106C134.379 62.2305 136.201 56.7656 136.862 53.7844C134.876 54.4462 133.716 55.9374 133.054 57.9242C132.392 60.4076 130.571 65.8724 130.239 68.5222C131.399 68.0255 132.557 67.8603 133.882 67.8603C133.716 67.5277 133.716 67.3626 133.716 67.1974ZM108.546 32.2572V32.4223C108.711 32.919 108.877 33.4157 109.042 33.9124H130.901C131.563 33.9124 132.061 33.0842 131.563 32.5875L126.265 26.2959C126.099 26.1307 126.099 25.7992 126.265 25.634L131.564 19.0108C132.061 18.5141 131.564 17.6859 130.902 17.6859L109.042 17.6848C108.877 18.1815 108.711 18.8445 108.546 19.3412V19.5064L108.711 19.6715C110.532 21.3279 111.526 23.6461 111.526 26.1297C111.527 28.6143 110.367 30.601 108.546 32.2575L108.546 32.2572ZM51.2502 32.4223V32.2572C49.4286 30.6008 48.4352 28.2826 48.4352 25.799C48.4352 23.3154 49.4286 20.9974 51.4153 19.3409L51.5805 19.1757V19.0105C51.4153 18.5138 51.249 18.0171 51.0838 17.5204L28.8946 17.5193C28.2327 17.5193 27.7348 18.3475 28.2327 18.8442L33.5323 25.3023C33.6975 25.4675 33.6975 25.799 33.5323 25.9642L28.2327 32.5873C27.736 33.084 28.2327 33.9122 28.8946 33.9122H50.7535C50.9187 33.4156 51.0838 32.919 51.2502 32.4223ZM64.3315 64.2163L59.0319 63.8848L57.0451 58.9167C56.7136 57.9233 55.3887 57.9233 55.0583 58.9167L53.0716 63.8848L47.772 64.2163C46.7786 64.2163 46.4471 65.5412 47.1101 66.2031L51.25 69.6811L49.9251 74.8142C49.7599 75.8076 50.7533 76.6358 51.5815 75.9739L56.0528 73.159L60.5241 75.9739C61.3523 76.4706 62.5109 75.8087 62.1805 74.8142L60.8556 69.6811L64.9955 66.2031C65.8214 65.5412 65.3248 64.2163 64.3315 64.2163ZM86.0239 74.8143L84.8653 69.5159L89.0052 66.0378C89.8334 65.3759 89.3367 64.2162 88.3433 64.051L83.0437 63.7195L81.057 58.7514C80.7254 57.7581 79.4005 57.7581 79.0702 58.7514L77.0834 63.7195L71.6177 64.2162C70.6243 64.2162 70.2928 65.5411 70.9558 66.203L75.0956 69.6811L73.7707 74.8142C73.6056 75.8075 74.5989 76.6357 75.4271 75.9739L79.8985 73.1589L84.3698 75.9739C85.1968 76.4706 86.3554 75.6425 86.0239 74.8143ZM99.2717 75.974L103.743 73.159L108.214 75.974C109.043 76.4707 110.201 75.8088 109.871 74.8143L108.546 69.6812L112.686 66.2031C113.514 65.5412 113.017 64.3815 112.024 64.2163L106.724 63.8848L104.737 58.9167C104.406 57.9234 103.081 57.9234 102.751 58.9167L100.764 63.8848L95.4643 64.2163C94.4709 64.2163 94.1394 65.5412 94.8025 66.2031L98.9423 69.6812L97.6174 74.8143C97.2847 75.6425 98.4435 76.4707 99.2717 75.974ZM76.2542 84.0875L70.9546 83.756L68.9678 78.7879C68.6363 77.7945 67.3114 77.7945 66.9811 78.7879L64.9943 83.756L59.6947 84.0875C58.7013 84.0875 58.3698 85.4124 59.0329 86.0742L63.1727 89.5523L61.8478 94.6854C61.6826 95.6788 62.676 96.507 63.5042 95.8451L67.9755 93.0302L72.4468 95.8451C73.275 96.3418 74.4336 95.6799 74.1032 94.6854L72.7784 89.5523L76.9182 86.0742C77.7441 85.4124 77.2476 84.0875 76.2542 84.0875ZM97.9466 94.5202L96.6217 89.3871L100.762 85.909C101.59 85.2471 101.093 84.0874 100.1 83.9222L94.8001 83.5907L92.8134 78.6226C92.4818 77.6292 91.1569 77.6292 90.8266 78.6226L88.8398 83.5907L83.5402 83.9222C82.5469 83.9222 82.2153 85.2471 82.8784 85.909L87.0182 89.3871L85.6933 94.5202C85.5281 95.5135 86.5215 96.3418 87.3497 95.6799L91.821 92.8649L96.2924 95.6799C97.2846 96.3418 98.2781 95.5135 97.9466 94.5202ZM67.643 25.7989C67.643 19.0092 73.1076 13.5446 79.8972 13.5446C86.6869 13.5446 92.1515 19.0092 92.1515 25.7989C92.1515 32.5885 86.6869 38.0531 79.8972 38.0531C73.1076 37.8867 67.643 32.422 67.643 25.7989ZM72.6111 26.2956L78.0757 31.7601L87.1836 22.6522L84.3687 19.8373L78.0759 26.1301L75.4261 23.4803L72.6111 26.2956ZM66.153 47.16C64.1662 47.4916 62.1784 46.0003 62.1784 43.8485V42.5236C62.1784 41.0335 61.0187 39.7086 59.695 39.377L58.3701 39.0455C56.3834 38.5488 55.39 36.2305 56.2171 34.4089L56.7137 33.084C57.2104 31.7591 56.8789 30.1039 55.8855 29.1094L54.8922 28.2812C53.4021 26.9563 53.4021 24.4729 54.8922 23.1481L55.8855 22.3199C57.0452 21.3265 57.3756 19.8365 56.7137 18.3454L56.2171 17.0205C55.3889 15.0337 56.5486 12.8806 58.5353 12.3839L59.8602 12.0524C61.3503 11.7208 62.3436 10.3959 62.3436 8.90578V7.58089C62.5088 5.42782 64.3304 3.93783 66.3182 4.43432L67.6431 4.59949C69.1331 4.93101 70.6232 4.1028 71.2861 2.94309L71.948 1.78337C72.9414 -0.038219 75.2596 -0.534881 76.9161 0.623653L78.0758 1.45186C79.2355 2.28006 80.8907 2.28006 82.0503 1.45186L83.2101 0.623653C84.8665 -0.536063 87.1846 -0.038219 88.1782 1.78337L88.84 2.94309C89.5019 4.26798 90.9931 4.92985 92.4831 4.76467L93.808 4.5995C95.7947 4.26798 97.7825 5.75921 97.7825 7.91107V9.23597C97.7825 10.726 98.9422 12.0509 100.266 12.3825L101.591 12.7141C103.578 13.2107 104.571 15.529 103.744 17.3507L103.247 18.6756C102.751 20.0005 103.082 21.6557 104.075 22.6501L105.069 23.4783C106.559 24.8032 106.559 27.2867 105.069 28.6114L104.075 29.4396C102.916 30.433 102.585 31.923 103.247 33.4142L103.744 34.739C104.572 36.7258 103.412 38.8789 101.426 39.3757L100.265 39.542C98.7747 39.8735 97.7814 41.1984 97.7814 42.6886V44.0135C97.6162 46.1665 95.7946 47.6565 93.8068 47.16L92.4819 46.9949C90.9919 46.6633 89.5018 47.4916 88.8389 48.6513L88.177 49.811C87.1836 51.6326 84.8654 52.1292 83.2089 50.9707L82.0492 50.1425C80.8895 49.3143 79.2342 49.3143 78.0746 50.1425L76.9149 50.9707C75.2585 52.1304 72.9404 51.6326 71.9468 49.811L71.285 48.6513C70.6231 47.3264 69.1319 46.6645 67.6419 46.8297L66.153 47.16ZM79.8972 42.6887C89.1702 42.6887 96.7881 35.0708 96.7881 25.7979C96.7881 16.5249 89.1702 8.90706 79.8972 8.90706C70.6243 8.90706 63.0064 16.5249 63.0064 25.7979C63.0064 35.072 70.6243 42.6887 79.8972 42.6887Z" fill="#D27531"/>
          </svg>
            <h3 className="text-center font-semibold">ULTRA QUALITY</h3>
            <p className="my-4 text-center text-gray-600 leading-6">At Sunset Roofing and Gutters Services, quality is our core principle. We take pride in delivering excellence in every project</p>
          </div>
          <div className="flex flex-col mx-auto max-w-80 p-4 shadow-2xl rounded md:w-2/6">
            <svg className="w-11/12 h-40 my-5"
            width="124" height="123" viewBox="0 0 124 123" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_7_165)">
            <path d="M123.328 35.4894L106.527 3.36332C105.547 1.49141 103.01 -0.0422422 100.9 -0.0422422H62.2317C62.1894 -0.0460859 62.1472 -0.0537734 62.1049 -0.0576172C62.0703 -0.0576172 62.0357 -0.0460859 62.0011 -0.0422422H24.0249C21.9108 -0.0422422 19.3701 1.48757 18.3745 3.35179L1.61964 34.859C0.624107 36.7271 0.823982 39.656 2.05398 41.378L59.7141 121.755C60.3329 122.616 61.1555 123.054 61.9742 123.054C62.7891 123.054 63.6039 122.631 64.2305 121.782L122.836 41.993C124.085 40.2864 124.308 37.3651 123.328 35.4932V35.4894ZM114.157 34.5477H93.5621L101.811 10.9317L114.157 34.5477ZM70.0691 7.6491H94.8075L87.1315 29.62L70.0691 7.6491ZM81.2275 34.5477H45.4768L62.3739 10.2705L81.2275 34.5477ZM38.6657 30.8807L30.9551 7.6491H54.8364L38.6657 30.8807ZM82.7305 42.2352L62.0664 101.398L42.4326 42.2352H82.7305ZM53.4449 99.8261L12.1323 42.2352H34.3338L53.4449 99.8261ZM90.8754 42.2352H113.119L70.7226 99.9606L90.8754 42.2352ZM23.602 9.8977L31.7815 34.5477H10.491L23.602 9.8977Z" fill="#D27531"/>
            </g>
            <defs>
            <clipPath id="clip0_7_165">
            <rect width="123" height="123" fill="white" transform="translate(0.962402)"/>
            </clipPath>
            </defs>
            </svg>
            <h3 className="text-center font-semibold">MATERIAL OF THE BEST</h3>
            <p className="my-4 text-center text-gray-600 leading-6">We use the highest quality materials for your home, always taking care of your economy.</p>
          </div>
          <div className="flex flex-col mx-auto max-w-80 p-4 shadow-2xl rounded md:w-2/6">
            <svg className="w-11/12 h-40 my-5"
            width="136" height="170" viewBox="0 0 136 170" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M121.112 22.8344C102.73 37.9871 85.3967 54.386 69.2318 71.9168C63.0353 66.3 56.7713 60.7512 50.3318 55.4336C49.9268 55.0664 48.8873 55.5016 48.0098 56.3856C47.1323 57.2696 46.6598 58.3304 47.0513 58.7384L47.1458 58.8608C53.3648 66.5584 59.7908 74.052 66.4238 81.3416C67.1903 82.1887 68.2593 82.6946 69.3959 82.7482C70.5324 82.8017 71.6436 82.3985 72.4853 81.6272L72.7823 81.3416C91.3405 64.2294 108.643 45.7848 124.555 26.1528C124.879 25.704 124.447 24.6568 123.556 23.7456C122.665 22.8344 121.612 22.3856 121.166 22.7392L121.112 22.8344Z" fill="#D27531"/>
            <path d="M13.2473 84.9727C15.2167 91.2668 18.2044 97.1899 22.0898 102.503C27.8352 110.473 35.4974 116.84 44.3566 121.007C53.2158 125.173 62.9811 127.003 72.7349 126.323C82.4887 125.643 91.9108 122.476 100.116 117.12C108.321 111.764 115.04 104.394 119.641 95.7031C125.563 84.3507 127.531 71.3244 125.23 58.7111C125.171 58.0479 124.855 57.435 124.348 57.0067C123.842 56.5785 123.188 56.3698 122.53 56.4263C121.91 56.6077 121.38 57.014 121.041 57.5667C120.702 58.1194 120.578 58.7791 120.694 59.4183V59.8263C121.832 71.2256 119.254 82.6882 113.35 92.4799C107.502 102.086 98.6851 109.493 88.2533 113.56C77.9362 117.513 66.6174 117.953 56.0288 114.811C45.5246 111.686 36.3436 105.143 29.9198 96.2063C16.7033 78.5943 17.4863 52.1151 31.6748 35.0063C38.7676 26.2994 48.4747 20.1476 59.3363 17.4759C70.4411 14.8731 82.0865 16.0052 92.4923 20.6991C93.0768 20.9898 93.7459 21.0577 94.3761 20.8902C95.0064 20.7227 95.5552 20.3312 95.9213 19.7879C96.055 19.4755 96.1261 19.1395 96.1306 18.7993C96.135 18.4591 96.0728 18.1213 95.9473 17.8054C95.8219 17.4895 95.6358 17.2017 95.3997 16.9584C95.1635 16.7152 94.882 16.5213 94.5713 16.3879L94.1933 16.1839C82.931 10.2271 70.0074 8.25839 57.5003 10.5943C44.6838 13.0465 33.0764 19.8176 24.5854 29.7951C16.0944 39.7726 11.2248 52.363 10.7768 65.4975C10.5519 72.081 11.3862 78.6578 13.2473 84.9727Z" fill="#D27531"/>
            </svg>
            <h3 className="text-center font-semibold">COMMITTED TO THE PROJECT</h3>
            <p className="my-4 text-center text-gray-600 leading-6">All our projects are guaranteed and delivered on time. We are the experts.</p>
          </div>
        </div>
      </section>
      <section id="services" className="my-8">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl text-center font-bold sm:text-6xl">Our <span className="text-orange-500">services</span></h2>
          <svg className="w-1/4"
          width="677" height="81" viewBox="0 0 677 81" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.1171 73.2774C13.0831 75.7029 6.48702 78.1201 0.363163 80.4718C6.88852 77.7962 13.4768 75.4057 20.1171 73.2774C86.1758 50.4982 190.854 26.9881 305.674 50.192C410.377 71.3515 591.28 31.5155 676.881 0.661455C586.911 35.6294 410.977 84.1709 335.04 78.8367C247.276 72.6717 126.973 39.0277 20.1171 73.2774Z" fill="#FC6A00"/>
          </svg>
        </div>
        <div className="flex flex-wrap gap-5 justify-evenly m-8">
          <div className="w-10/12 mx-auto sm:w-1/4">
            <h3></h3>
            <Image
              width={1000}
              height={1000}
              src="/images/services-1.png"
              alt="image services"
            />
          </div>
          <div className="w-10/12 mx-auto sm:w-1/4">
            <h3></h3>
            <Image
              width={1000}
              height={1000}
              src="/images/services-2.png"
              alt="image services"
            />
          </div>
          <div className="w-10/12 mx-auto sm:w-1/4">
            <h3></h3>
            <Image
              width={1000}
              height={1000}
              src="/images/services-3.png"
              alt="image services"
            />
          </div>
          <div className="w-10/12 mx-auto sm:w-1/4">
            <h3></h3>
            <Image
              width={1000}
              height={1000}
              src="/images/services-4.png"
              alt="image services"
            />
          </div>
          <div className="w-10/12 mx-auto sm:w-1/4">
            <h3></h3>
            <Image
              width={1000}
              height={1000}
              src="/images/services-5.png"
              alt="image services"
            />
          </div>
          <div className="w-10/12 mx-auto sm:w-1/4">
            <h3></h3>
            <Image
              width={1000}
              height={1000}
              src="/images/services-6.png"
              alt="image services"
            />
          </div>
        </div>
        <div className="flex justify-center p-8">
          <button className="bg-orange-500 border-2 border-orange-500 rounded-2xl hover:bg-white"><a className="text-white font-semibold py-4 px-10 sm:px-20 block text-lg hover:text-orange-500" href="#">Contact now
            <Image
              className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] stroke-2 dark:invert inline"
              src="/icon_next.svg"
              alt="option"
              width={20}
              height={20}
              priority
            />
            </a></button>
        </div>
      </section>
      <section id="project" className="my-10">
        <h2 className="text-4xl font-bold text-center sm:text-6xl">Check out our <span className="text-orange-500">quality work</span></h2>
        <div className="flex flex-col flex-wrap justify-between w-11/12 mx-auto sm:flex-row">
          <Image
            width={1000}
            height={1000}
            className="w-11/12 mx-auto p-6 h-80 sm:h-96 object-cover sm:w-1/2 sm:mx-0"
            src="/images/work-1.jpg"
            alt="work image"
          />
          <Image
            width={1000}
            height={1000}
            className="w-11/12 mx-auto p-6 h-80 sm:h-96 object-cover sm:w-1/2 sm:mx-0"
            src="/images/work-2.jpg"
            alt="work image"
          />
          <Image
            width={1000}
            height={1000}
            className="w-11/12 mx-auto p-6 h-80 sm:h-96 object-cover sm:w-1/2 sm:mx-0"
            src="/images/work-3.jpg"
            alt="work image"
          />
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
            <Image
              width={1000}
              height={1000}
            className="my-8 mx-auto"
            src="/images/logo-white.png" 
            alt="Sunset Roofing white logo"
            />
          </div>
        </div>
      </section>
      <section id="contact" className="flex flex-col bg-orange-100 min-h-screen md:flex-row">
        <div className={`${style.c_contact} w-full min-h-screen md:w-1/2`}>
          <Image
            width={1000}
            height={1000}
          className="w-40 my-10 mx-auto sm:w-72"
          src="/images/logo.png"
          alt="Sunset Roofing logo"
          />
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
                <option>Ready to rock\’n roll (Decided to commit ASAP)</option>
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
