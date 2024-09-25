import React from "react";
import "../../assets/css/footer.css";

export default function Footer() {
    return (
        <section>
            <div className="footer flex flex-col gap-y-4 lg:flex-row justify-between items-center">
                <div>
                    <p>© 2024 Made with Material Tailwind by Creative Tim.</p>
                </div>
                <div className="flex gap-x-3 items-center">
                    <a href="#">Home</a>
                    <a href="#">About Us</a>
                    <a href="#">Blog</a>
                    <a href="#">Service</a>
                    <a
                        href="#"
                        className="text-[12px] uppercase font-bold p-2 bg-black text-white rounded-md"
                    >
                        Subcribe
                    </a>
                </div>
            </div>
        </section>
    );
}
