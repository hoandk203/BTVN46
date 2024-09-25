import React from "react";
import amazonLogo from "../../assets/images/logo-amazon-BTZwwmKv.svg";
import coinbaseLogo from "../../assets/images/logo-coinbase-BJ4ptnZI.svg";
import googleLogo from "../../assets/images/logo-google-Dl8V4Kol.svg";
import netflixLogo from "../../assets/images/netflix.svg";
import printerestLogo from "../../assets/images/logo-pinterest-BSbdbfgj.svg";
import spotifyLogo from "../../assets/images/logo-spotify-pvzNm50I.svg";

export const brands = [
    {
        name: "Amazon",
        image: amazonLogo,
    },
    {
        name: "Coinbase",
        image: coinbaseLogo,
    },
    {
        name: "Google",
        image: googleLogo,
    },
    {
        name: "Netflix",
        image: netflixLogo,
    },
    {
        name: "Pinterest",
        image: printerestLogo,
    },
    {
        name: "Spotify",
        image: spotifyLogo,
    },
];
export default function Brand() {
    return (
        <section>
            <h2 className="text-lg mb-8 font-[600] text-center">
                My awesome clients
            </h2>
            <div className="px-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
                {brands.map((brand, index) => {
                    return (
                        <div key={index} className="flex justify-center">
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
