"use client";
import Link from "next/link";
import React, { useRef } from "react";
import NavComponent from "./components/navComponent";
import Image from "next/image";

const Page = () => {
  const homeContainer = useRef();
  return (
    <div ref={homeContainer} className="site-container w-full h-full">
      <main className="w-full h-full px-6">
        <header className="fixed left-0 top-0 w-full p-4 bg-white z-[99]">
          <NavComponent />
        </header>
        <hr className="w-full h-[1px] border-gray-200" />
        <section className="hero-section w-full h-full flex items-center justify-center flex-col xl:h-full">
          <div className="w-full h-full flex items-center justify-between">
            <div className="w-full px-4 flex items-center justify-between flex-col gap-6 text-center lg:items-start lg:text-left">
              <p className="main-blue uppercase text-xs bg-gray-100 p-2 rounded">
                We Enhance Beauty, You Shine.
              </p>
              <h1 className="dark-font primary-font font-normal capitalize text-[3rem] leading-[3.5rem] lg:w-full xl:text-[4rem] xl:leading-[4rem]">
                Finding the <span className="main-blue font-bold">Perfect</span>{" "}
                Solution for Your Beauty{" "}
                <span className="main-blue font-bold">Desires</span>
              </h1>
              <p className="dark-font primary-font font-thin text-[1.25rem] lg:w-full">
                Enhance your confidence and your beauty under the expert care of
                our specialists. We pride ourselves on creating a supportive
                atmosphere where people of every race, skin tone, and body shape
                can achieve their beauty goals.
              </p>
              <button className="primary-font p-4 text-white border border-main-blue bg-main-blue rounded duration-300 ease-in-out hover:bg-white hover:main-blue lg:block">
                Book an appointment
              </button>
              <div className="w-full pt-6 flex items-center justify-between lg:w-3/4">
                <div className="relative px-4 h-[120px] flex items-center justify-center flex-col lg:items-start">
                  <div className="absolute top-0 left-0 h-full w-[2px] bg-gray-200 after:content-[''] after:absolute after:w-full after:h-2/5 after:bottom-0 after:left-0 after:bg-main-blue after:rounded"></div>
                  <p className="w-full primary-font font-thin xl:w-3/4">
                    Years of expert medical care
                  </p>
                  <span className="primary-font main-blue font-bold text-[2rem] lg:text-[2.5rem]">
                    5Y+
                  </span>
                </div>
                <div className="relative px-4 h-[120px] flex items-center justify-center flex-col lg:items-start">
                  <div className="absolute top-0 left-0 h-full w-[2px] bg-gray-200 after:content-[''] after:absolute after:w-full after:h-2/5 after:bottom-0 after:left-0 after:bg-main-blue after:rounded"></div>
                  <p className="w-full primary-font font-thin">
                    Amount of successful procedures
                  </p>
                  <span className="primary-font main-blue font-bold text-[2rem] lg:text-[2.5rem]">
                    120+
                  </span>
                </div>
                <div className="relative px-4 h-[120px] flex items-center justify-center flex-col lg:items-start">
                  <div className="absolute top-0 left-0 h-full w-[2px] bg-gray-200 after:content-[''] after:absolute after:w-full after:h-2/5 after:bottom-0 after:left-0 after:bg-main-blue after:rounded"></div>
                  <p className="w-full primary-font font-thin xl:w-3/4">
                    Medical journals published in
                  </p>
                  <span className="primary-font main-blue font-bold text-[2rem] lg:text-[2.5rem]">
                    4
                  </span>
                </div>
              </div>
            </div>
            <div className="hidden relative w-full h-full items-center justify-center lg:flex">
              <figure className="p-4 z-[9] bg-white border border-main-blue">
                <Image
                  src="/doctor.jpeg"
                  width={800}
                  height={800}
                  alt="Dr. Sheraz Amhad Cosmetic Aesthetics"
                />
              </figure>
              <div className="absolute left-[-75px] bottom-[25px] w-full h-[300px] bg-blue-100 border border-gray-200"></div>
              <div className="absolute right-0 top-[35px] w-[400px] h-[200px] bg-[#0080ff7e] border border-gray-200"></div>
            </div>
          </div>
        </section>
        <section className="services-section w-full h-auto mb-8 px-8 py-12 flex items-center justify-start flex-col gap-14 rounded-lg border border-gray-200">
          <div className="w-full flex items-center justify-center text-center xl:text-left">
            <div className="w-full px-2 flex items-center justify-center flex-col gap-4 xl:items-start">
              <h1 className="dark-blue primary-font font-semibold capitalize text-[1.75rem] xl:text-[2.5rem] xl:w-3/4">
                Trusted cosmetic treatment options for all
              </h1>
              <p className="w-full dark-blue font-light xl:text-[1.25rem] xl:w-3/4">
                Experience personalized care that respects and enhances your
                unique beauty. Join the countless satisfied clients who trust us
                with their aesthetic needs.
              </p>
            </div>
            <div className="hidden w-full items-start justify-center xl:flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 128 128"
                className="dark-fill stroke-main-blue w-1/4 h-full"
              >
                <path d="M83.411 125.74H44.329V99.408L20.871 112.89.16 77.84l23.532-13.838L0 50.156l20.898-35.048 23.431 13.483V2.26h39.082v26.333l23.358-13.484 20.662 35.048-23.559 13.846 23.681 13.838-20.805 35.051-23.337-13.484v26.332zm-30.854-8.232h22.627V84.662l28.671 16.658 12.068-20.453-28.759-16.865 28.839-16.873-12.162-20.45-28.658 16.659V10.492H52.557V43.34L23.786 26.68 11.667 47.13l28.731 16.873L11.55 80.867l12.256 20.453 28.751-16.658v32.846z" />
              </svg>
            </div>
          </div>
          <div className="w-full h-[400px] flex items-center gap-6">
            <div className="w-full h-full p-4 flex items-center justify-center flex-col gap-4 text-center bg-light-blue border border-gray-100 rounded xl:gap-8 xl:items-start xl:text-left">
              <span className="icon-container w-[100px] h-[100px] border border-white rounded"></span>
              <h2 className="dark-blue font-medium text-[1.25rem] text-white xl:text-[1.5rem]">
                Hydrafacial
              </h2>
              <p className="text-white font-light xl:text-[1.075rem]">
                Revitalize your skin with our Hydrafacial treatment, designed to
                cleanse, extract, and hydrate for a luminous, healthy glow.
              </p>
              <button className="p-4 text-white border border-white rounded duration-300 ease-in-out hover:bg-white hover:main-blue">
                Learn More
              </button>
            </div>
            <div className="w-full h-full p-4 flex items-center justify-center flex-col gap-4 text-center bg-light-blue border border-gray-100 rounded xl:gap-8 xl:items-start xl:text-left">
              <span className="icon-container w-[100px] h-[100px] border border-white rounded"></span>
              <h2 className="dark-blue font-medium text-[1.25rem] text-white xl:text-[1.5rem]">
                Non-Surgical Bbl
              </h2>
              <p className="text-white font-light xl:text-[1.075rem]">
                Achieve a fuller, more sculpted appearance without surgery
                through our advanced non-surgical Brazilian Butt Lift
                techniques.
              </p>
              <button className="p-4 text-white border border-white rounded duration-300 ease-in-out hover:bg-white hover:main-blue">
                Learn More
              </button>
            </div>
            <div className="hidden p-4 w-full h-full items-center justify-center flex-col gap-4 text-center bg-light-blue border border-gray-100 rounded xl:flex xl:gap-8 xl:items-start xl:text-left">
              <span className="icon-container w-[100px] h-[100px] border border-white rounded"></span>
              <h2 className="dark-blue font-medium text-[1.25rem] text-white xl:text-[1.5rem]">
                Lip Fillers
              </h2>
              <p className="text-white font-light xl:text-[1.075rem]">
                Enhance your lips with our premium fillers that offer
                natural-looking volume and definition for a perfect pout.
              </p>
              <button className="p-4 text-white border border-white rounded duration-300 ease-in-out hover:bg-white hover:main-blue">
                Learn More
              </button>
            </div>
            <div className="hidden p-4 w-full h-full items-center justify-center flex-col gap-4 text-center bg-light-blue border border-gray-100 rounded xl:flex xl:gap-8 xl:items-start xl:text-left">
              <span className="icon-container w-[100px] h-[100px] border border-white rounded"></span>
              <h2 className="dark-blue font-medium text-[1.25rem] text-white xl:text-[1.5rem]">
                Laser Treatments
              </h2>
              <p className="text-white font-light xl:text-[1.075rem]">
                Experience cutting-edge laser treatments to address a variety of
                skin concerns, from rejuvenation to precise contouring.
              </p>
              <button className="p-4 text-white border border-white rounded duration-300 ease-in-out hover:bg-white hover:main-blue">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Page;
