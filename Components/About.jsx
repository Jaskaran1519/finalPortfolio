import React from "react";

const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] md:m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widst text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-xl text-[#5651e5]">
            As a passionate frontend developer, I'm on a continuous quest to
            turn ideas into captivating web experiences. With a deep commitment
            to user-centric design and a sharp eye for detail, I thrive on
            crafting websites that not only look stunning but also deliver
            seamless functionality.
          </p>
          <p className="py-2 text-xl text-[#5651e5]">
            I'm equally comfortable working independently or collaborating
            closely with multidisciplinary teams, and I take pride in my ability
            to transform complex challenges into elegant solutions. From
            responsive designs to utilizing cutting-edge frameworks, I'm
            well-versed in the ever-evolving world of frontend technologies.
          </p>
        </div>

        <div className="flex items-center justify-center w-full h-auto shadow-gray-400 rounded-xl p-4 hover:scale-105 ease-in duration-400">
          <img
            className="rounded-xl "
            src="https://images.unsplash.com/photo-1669023414171-56f0740e34cd?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzE5fHxkZXZlbG9wbWVudHxlbnwwfHwwfHx8MA%3D%3D"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
