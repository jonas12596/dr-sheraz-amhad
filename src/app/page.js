"use client";
import Link from "next/link";
import React from "react";
import NavComponent from "./components/navComponent";
import Image from "next/image";

const page = () => {
  return (
    <div className="site-container w-full h-full">
      <main className="w-full h-full px-6">
        <header className="w-full py-4">
          <NavComponent />
        </header>
        <hr className="w-full h-[1px] border-gray-200" />
        <section className="hero-section w-full h-[90vh] flex items-center justify-center flex-col">
          <div className="w-full h-full flex items-center justify-between">
            <div className="w-full px-4 flex items-center justify-between flex-col gap-4 text-center lg:items-start lg:text-left">
              <p className="main-blue uppercase text-xs bg-gray-100 p-2 rounded">
                We take care of your health
              </p>
              <h1 className="dark-font primary-font font-medium capitalize text-[3rem] leading-[3.5rem] lg:w-full xl:text-[4rem] xl:leading-[4rem]">
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
            </div>
            <div className="hidden relative w-full h-full items-center justify-center lg:flex">
              <Image
                src="/doctor.jpeg"
                width={800}
                height={800}
                alt="Dr. Sheraz Amhad Cosmetic Aesthetics"
                className="z-[9]"
              />

              <div className="absolute left-0 bottom-[25px] w-full h-[300px] bg-blue-100"></div>
              <div className="absolute right-0 top-[35px] w-[400px] h-[200px] bg-[#0080ff7e]"></div>
            </div>
          </div>
        </section>
        <section className="service-section w-full h-full flex items-center justify-center flex-col"></section>
      </main>
    </div>
  );
};

export default page;
