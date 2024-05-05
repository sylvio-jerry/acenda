import React from "react";
import { CiFacebook } from "react-icons/ci";
import { AiOutlineYoutube } from "react-icons/ai";
import { PiTiktokLogo } from "react-icons/pi";
import { TfiTwitter } from "react-icons/tfi";
import Payement from "../../assets/images/payement.png";

function Footer() {
  return (
    <div className="w-full bg-black text-white container-margin ">
      <div className="container container-padding  grid gap-y-10 sm:grid-cols-2f md:grid-cols-4 py-5">
        <div className="space-y-5">
          <p className="font-semibold text-lg">Support</p>
          <div className="text-white/60 text-sm space-y-2 ">
            <p>Help Center</p>
            <p>Safety information</p>
            <p>Cancellation options</p>
          </div>
        </div>
        <div className="space-y-5">
          <p className="font-semibold text-lg">Company</p>
          <div className="text-white/60 text-sm space-y-2 ">
            <p>About us</p>
            <p>Community Blog</p>
            <p>Terms of service</p>
          </div>
        </div>
        <div className="space-y-5">
          <p className="font-semibold text-lg">Contact</p>
          <div className="text-white/60 text-sm space-y-2 ">
            <p>FAQ</p>
            <p>Get in touch</p>
            <p>Partnerships</p>
          </div>
        </div>
        <div className="space-y-5">
          <p className="font-semibold text-lg">Social</p>
          <div className="text-white text-sm flex  items-center gap-5 ">
            <CiFacebook className="text-3xl" />
            <AiOutlineYoutube className="text-3xl" />
            <PiTiktokLogo className="text-3xl" />
            <TfiTwitter className="text-3xl" />
          </div>
        </div>
      </div>
      <div className="container  border-t border-white/50 py-10 text-center sm:text-starte space-y-10 text-[12px]">
        <div className="grid sm:grid-cols-2 gap-5 sm:place-items-start place-items-center ">
          <div className="space-y-2 ">
            <p className="">© 2024 Acenda. All rights reserved</p>
            <p>
              Made with ❤️ by{" "}
              <a href="https://github.com/sylvio-jerry">
                Sylvio jerry Rajaonarivony
              </a>
            </p>
          </div>
          <div className="sm:justify-self-end">
            <img
              src={Payement}
              alt="payement"
              className="w-[250px] h-[20px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
