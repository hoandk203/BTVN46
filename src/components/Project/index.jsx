import React from "react";
import projectImage from "../../assets/images/product.svg";

const projects = [
    {
        image: projectImage,
        name: "Mobile App Development",
        description:
            "Mobile app designed to help users discover and explore local restaurants and cuisines.",
    },
    {
        image: projectImage,
        name: "Mobile App Development",
        description:
            "Mobile app designed to help users discover and explore local restaurants and cuisines.",
    },
    {
        image: projectImage,
        name: "Mobile App Development",
        description:
            "Mobile app designed to help users discover and explore local restaurants and cuisines.",
    },
    {
        image: projectImage,
        name: "Mobile App Development",
        description:
            "Mobile app designed to help users discover and explore local restaurants and cuisines.",
    },
    {
        image: projectImage,
        name: "Mobile App Development",
        description:
            "Mobile app designed to help users discover and explore local restaurants and cuisines.",
    },
    {
        image: projectImage,
        name: "Mobile App Development",
        description:
            "Mobile app designed to help users discover and explore local restaurants and cuisines.",
    },
    {
        image: projectImage,
        name: "Mobile App Development",
        description:
            "Mobile app designed to help users discover and explore local restaurants and cuisines.",
    },
    {
        image: projectImage,
        name: "Mobile App Development",
        description:
            "Mobile app designed to help users discover and explore local restaurants and cuisines.",
    },
];
export default function Project() {
    return (
        <section>
            <div className="flex flex-col gap-y-3 items-center mb-20">
                <h2 className="text-[2rem] font-[600]">My Projects</h2>
                <p className="text-[#CACACA] w-[70%] text-center">
                    Whether you have a mobile app idea that needs to come to
                    life or a website that requires a facelift, I'm here to turn
                    your digital dreams into reality.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10">
                {projects.map((project, index) => {
                    return (
                        <div key={index} className="flex flex-col gap-y-3">
                            <div className="skill-icon text-3xl mb-3 flex justify-center">
                                <img src={project.image} alt="project-image" />
                            </div>
                            <div>
                                <h3 className="text-xl font-[600]">
                                    {project.name}
                                </h3>
                            </div>
                            <div>{project.description}</div>
                            <button className="inline-block uppercase text-white text-[0.75rem] font-[600] p-2 bg-black w-[100px] rounded-md">
                                See Details
                            </button>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
