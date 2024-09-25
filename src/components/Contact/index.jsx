import React from "react";
import "../../assets/css/contact.css";

export default function Contact() {
    return (
        <section>
            <div className="text-center mb-10">
                <h2 className="text-[2rem] font-[700] mb-3">Contact Us</h2>
                <p className="text-[#B8B8B8] w-[60%] mx-auto">
                    Ready to get started? Feel free to reach out through the
                    contact form, and let's embark on a journey of innovation
                    and success.
                </p>
            </div>
            <div className="p-5 grid grid-cols-1 lg:grid-cols-2 border-gray-500 border rounded-xl">
                <div className="p-14 text-white bg-black rounded-2xl">
                    <div className="mb-8">
                        <h4 className="text-[1.5rem] font-bold">
                            Contact Information
                        </h4>
                        <p className="w-[70%]">
                            Fill up the form and our Team will get back to you
                            within 24 hours.
                        </p>
                    </div>
                    <div className="flex flex-col gap-y-5">
                        <div className="flex gap-x-2 items-center">
                            <i class="fa-solid fa-phone"></i>
                            <p className="font-bold">+1(424) 535 3523</p>
                        </div>
                        <div className="flex gap-x-2 items-center">
                            <i class="fa-solid fa-envelope"></i>
                            <p className="font-bold">hello@mail.com</p>
                        </div>
                        <div className="flex gap-x-2 items-center">
                            <i class="fa-solid fa-ticket"></i>
                            <p className="font-bold">Open Support Ticket</p>
                        </div>
                    </div>
                </div>
                <div className="p-5 text-[#8f9a9c]">
                    <form action="" className="flex flex-col gap-y-5">
                        <div className="flex justify-between">
                            <div>
                                <label htmlFor="firstname">First Name</label>
                                <input
                                    type="text"
                                    placeholder="eg.Lucas"
                                    className="w-full text-[#333] outline-none border-b-[1px] border-[#555] p-2 placeholder:text-[#555]"
                                />
                            </div>
                            <div>
                                <label htmlFor="lastname">Last Name</label>
                                <input
                                    type="text"
                                    placeholder="eg.Jones"
                                    className="w-full text-[#333] outline-none border-b-[1px] border-[#555] p-2 placeholder:text-[#555]"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                placeholder="eg.lucas@gmail.com"
                                className="w-full text-[#333] outline-none border-b-[1px] border-[#555] p-2 placeholder:text-[#555]"
                            />
                        </div>
                        <div>
                            <label htmlFor="">
                                What are you interested on?
                            </label>
                            <div className="flex flex-wrap gap-x-3">
                                <div className="flex gap-x-2 items-center">
                                    <input
                                        type="radio"
                                        name="interested"
                                        id="design"
                                        className="mr-2"
                                        hidden
                                    />
                                    <label
                                        htmlFor="design"
                                        className="flex justify-center items-center w-[16px] h-[16px] bg-black rounded-full"
                                    >
                                        <div className="hidden w-[8px] h-[8px] bg-white rounded-full"></div>
                                    </label>
                                    <label htmlFor="design">Design</label>
                                </div>
                                <div className="flex gap-x-2 items-center">
                                    <input
                                        type="radio"
                                        name="interested"
                                        id="development"
                                        className="mr-2"
                                        hidden
                                    />
                                    <label
                                        htmlFor="development"
                                        className="flex justify-center items-center w-[16px] h-[16px] bg-black rounded-full"
                                    >
                                        <div className="hidden w-[8px] h-[8px] bg-white rounded-full"></div>
                                    </label>
                                    <label htmlFor="development">
                                        Development
                                    </label>
                                </div>
                                <div className="flex gap-x-2 items-center">
                                    <input
                                        type="radio"
                                        name="interested"
                                        id="support"
                                        className="mr-2"
                                        hidden
                                    />
                                    <label
                                        htmlFor="support"
                                        className="flex justify-center items-center w-[16px] h-[16px] bg-black rounded-full"
                                    >
                                        <div className="hidden w-[8px] h-[8px] bg-white rounded-full"></div>
                                    </label>
                                    <label htmlFor="support">Support</label>
                                </div>
                                <div className="flex gap-x-2 items-center">
                                    <input
                                        type="radio"
                                        name="interested"
                                        id="other"
                                        className="mr-2"
                                        hidden
                                    />
                                    <label
                                        htmlFor="other"
                                        className="flex justify-center items-center w-[16px] h-[16px] bg-black rounded-full"
                                    >
                                        <div className="hidden w-[8px] h-[8px] bg-white rounded-full"></div>
                                    </label>
                                    <label htmlFor="other">Other</label>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="message">Your Message</label>
                            <textarea
                                id="message"
                                rows="5"
                                placeholder="Enter your message..."
                                className="w-full text-[#333] outline-none border-b-[1px] border-[#555] p-2 placeholder:text-[#555]"
                            ></textarea>
                        </div>
                        <div>
                            <button className="p-3 text-white bg-black text-[0.75rem] font-bold uppercase rounded-lg">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
