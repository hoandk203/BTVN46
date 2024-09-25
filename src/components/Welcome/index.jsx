import React from "react";
import welcomeImage from "../../assets/images/image-7-CnRqi10K.svg";

export default function Welcome() {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 pt-[136px]">
            <div className="lg:order-1">
                <img
                    src={welcomeImage}
                    alt="welcome image"
                    className="w-full"
                />
            </div>
            <div className="py-5 flex flex-col justify-center gap-y-5">
                <h1 className="text-[2rem] lg:text-[3rem] font-[600] leading-[60px]">
                    Welcome to my Web Development Portofolio!
                </h1>
                <div className="text-[#A3A3A3]">
                    I'm Lily Smith, a passionate web developer based in USA.
                    Here, you'll get a glimpse of my journey in the world of web
                    development, where creativity meets functionality.
                </div>
                <div>
                    <form action="" className="flex gap-2">
                        <div>
                            <label htmlFor="welcome-input">Your Email</label>
                            <div className="flex mt-1 gap-x-4">
                                <input
                                    type="email"
                                    id="welcome-input"
                                    required
                                    placeholder="Enter your email!"
                                    className="block border-[#d3d2d2] border-[2px] rounded-[5px] p-2"
                                />
                                <button className="bg-[#000] block text-[#fff] p-2 uppercase font-[600] rounded-[5px]">
                                    Required offer
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="text-[#A3A3A3]">
                    Read my{" "}
                    <a className="underline" href="#">
                        Terms and Conditions
                    </a>
                </div>
            </div>
        </section>
    );
}
