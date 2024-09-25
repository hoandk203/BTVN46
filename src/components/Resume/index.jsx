import React from "react";
import "../../assets/css/resume.css";

const resumes = [
    {
        image: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
            >
                <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z"></path>
            </svg>
        ),
        description: "Bachelor of Science in Computer Science",
    },
    {
        image: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
            >
                <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z"></path>
            </svg>
        ),
        description: "Bachelor of Science in Computer Science",
    },
    {
        image: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
            >
                <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z"></path>
            </svg>
        ),
        description: "Bachelor of Science in Computer Science",
    },
];
export default function Resume() {
    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="flex flex-col mb-12">
                    <h2 className="text-[2rem] font-[600] mb-5">My Resume</h2>
                    <p className="text-[#B8B8B8]">
                        Highly skilled and creative Web Developer with 5+ years
                        of experience in crafting visually stunning and
                        functionally robust websites and web applications.
                    </p>
                    <a
                        href="#"
                        className="inline-block mt-4 uppercase text-[0.75rem] font-[500]"
                    >
                        view more <i class="fa-solid fa-arrow-right"></i>
                    </a>
                </div>
                <div className="flex flex-col gap-y-5 lg:items-center">
                    {resumes.map((resume, index) => {
                        return (
                            <div
                                key={index}
                                className="flex gap-x-2 items-center"
                            >
                                <div className=" resume-icon w-[40px] bg-black rounded-md">
                                    {resume.image}
                                </div>

                                <div className="text-[#B8B8B8]">
                                    {resume.description}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
