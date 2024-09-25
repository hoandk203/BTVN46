import React from "react";
import "../../assets/css/feedback.css";
import client1 from "../../assets/images/client1.jpg";
import client2 from "../../assets/images/client2.jpg";
import client3 from "../../assets/images/client3.jpg";

export default function Feedback() {
    return (
        <section>
            <div className="mb-20">
                <h2 className="text-[2rem] mb-6 font-[600] text-center">
                    What Clients Say
                </h2>
                <p className="w-[70%] mx-auto text-center text-[#B8B8B8]">
                    Discover what clients have to say about their experiences
                    working with me. My client's satisfaction is my greatest
                    achievement!
                </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4 mx-[100px]">
                <div className="flex flex-col gap-y-3 col-span-2 mb-10">
                    <h3 className="text-[1.5rem] font-[600]">
                        Mobile App Development
                    </h3>
                    <p className="text-[#B8B8B8]">
                        I had the pleasure of working with Lily on a critical
                        web development project, and I can confidently say that
                        their expertise and professionalism exceeded my
                        expectations.
                    </p>
                    <strong>Michael - Technical Manager</strong>
                    <p className="text-[#B8B8B8]">Marketing @ APPLE INC.</p>
                    <div className="client-img flex gap-3">
                        <img src={client1} alt="img" />
                        <div className="w-[1px] h-[36px] bg-[#B8B8B8]"></div>
                        <img src={client2} alt="img" />
                        <div className="w-[1px] h-[36px] bg-[#B8B8B8]"></div>
                        <img src={client3} alt="img" />
                    </div>
                </div>
                <div className="hidden lg:block"></div>
                <div className="flex lg:justify-center items-center">
                    <img
                        src={client1}
                        alt="img"
                        className="object-contain rounded-xl"
                    />
                </div>
            </div>
        </section>
    );
}
