import React from "react";
import { brands } from "../Brand";

export default function Customer() {
    return (
        <section className="grayscale">
            <div className="text-center mb-10">
                <h2 className="uppercase font-[600]">Popular clients</h2>
                <p className="text-[2rem] font-[700]">
                    Trusted by over 10,000+ clients
                </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
                {brands.map((brand, index) => {
                    return (
                        <div key={index}>
                            <img
                                className="w-[160px]"
                                src={brand.image}
                                alt="brand-logo"
                            />
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
