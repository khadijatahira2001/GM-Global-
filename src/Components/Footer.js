import React from "react";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTelegram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import FooterBar from "../Components/Home/FooterBar";

function Footer() {
  return (
    <footer class=" bg-blue-950  relative text-gray-200 ">
      <FooterBar />
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-12">
          <div class="col-span-12">
            <div class="py-[60px] px-0">
              <div class="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                <div class="lg:col-span-4 md:col-span-12">
                  <a href="#" class="text-[22px] focus:outline-none">
                    <img
                      class="h-12"
                      src="https://res.cloudinary.com/daiyj7fxl/image/upload/v1676395206/Logo/NAV-BROWN_qbsht2.svg"
                      alt=""
                    />
                  </a>
                  <p class="mt-6 text-gray-300">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <ul class="list-none mt-6 space-x-2 flex">
                    <li class="inline">
                      <a
                        href=""
                        class="font-semibold tracking-wide align-middle transition duration-500 ease-in-out p-1 h-9 w-9 inline-flex items-center text-center justify-center text-sm border !border-white rounded-md hover:border-yellow-600  hover:bg-yellow-600 "
                      >
                        <FontAwesomeIcon icon={faFacebook} />
                      </a>
                    </li>
                    <li class="inline">
                      <a
                        href=""
                        class="font-semibold tracking-wide align-middle transition duration-500 ease-in-out p-1 h-9 w-9 inline-flex items-center text-center justify-center text-sm border !border-white rounded-md hover:border-yellow-600  hover:bg-yellow-600 "
                      >
                        <FontAwesomeIcon icon={faTwitter} />
                      </a>
                    </li>
                    <li class="inline">
                      <a
                        href=""
                        class="font-semibold tracking-wide align-middle transition duration-500 ease-in-out p-1 h-9 w-9 inline-flex items-center text-center justify-center text-sm border !border-white rounded-md hover:border-yellow-600  hover:bg-yellow-600 "
                      >
                        <FontAwesomeIcon icon={faLinkedin} />
                      </a>
                    </li>
                    <li class="inline">
                      <a
                        href=""
                        class="font-semibold tracking-wide align-middle transition duration-500 ease-in-out p-0 h-9 w-9 inline-flex items-center text-center justify-center text-sm border !border-white rounded-md hover:border-yellow-600  hover:bg-yellow-600 "
                      >
                        <FontAwesomeIcon icon={faInstagram} />
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="lg:col-span-2 md:col-span-4">
                  <h5 class="tracking-[1px] text-gray-100 font-semibold text-4xl hover:text-orange-400">
                    Company
                  </h5>
                  <ul class="list-none  mt-6">
                    <li>
                      <a
                        href="#"
                        class="text-gray-300 hover:text-gray-400 transition-all duration-500 ease-in-out"
                      >
                        About us
                      </a>
                    </li>
                    <li class="mt-[10px]">
                      <a
                        href="#"
                        class="text-gray-300 hover:text-gray-400 transition-all duration-500 ease-in-out"
                      >
                        Services
                      </a>
                    </li>
                    <li class="mt-[10px]">
                      <a
                        href="#"
                        class="text-gray-300 hover:text-gray-400 transition-all duration-500 ease-in-out"
                      >
                        Vision{" "}
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="lg:col-span-3 md:col-span-4">
                  <h5 class="tracking-[1px] text-gray-100 font-semibold text-4xl hover:text-orange-400">
                    Contact Us
                  </h5>
                  <ul class="list-none  mt-6">
                    <li>
                      {" "}
                      <FontAwesomeIcon icon={faEnvelope} />
                      <a href="mailto:info@mcintoshperry.com">
                        &nbsp;&nbsp;&nbsp;info@mcintoshperry.com
                      </a>
                    </li>
                    <li class="mt-[10px]">
                      <FontAwesomeIcon icon={faPhone} />
                      <a href="tel:1-888-348-8991" data-wpel-link="internal">
                        &nbsp;&nbsp;&nbsp;1-888-348-8991
                      </a>
                    </li>
                    <li class="mt-[10px]">
                      <FontAwesomeIcon icon={faTelegram} />
                      <a href="/about/contact-us/" data-wpel-link="internal">
                        &nbsp;&nbsp;&nbsp;Send us a message
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="lg:col-span-3 md:col-span-4">
                  <h5 class="tracking-[1px] text-gray-100 font-semibold text-4xl hover:text-orange-400">
                    Our Locations
                  </h5>
                  <ul class="list-none  mt-6">
                    <li>
                      <a
                        href="#"
                        class="text-gray-300 hover:text-gray-400 transition-all duration-500 ease-in-out"
                      >
                        Toronto
                      </a>
                    </li>
                    <li class="mt-[10px]">
                      <a
                        href="#"
                        class="text-gray-300 hover:text-gray-400 transition-all duration-500 ease-in-out"
                      >
                        London
                      </a>
                    </li>
                    <li class="mt-[10px]">
                      <a
                        href="#"
                        class="text-gray-300 hover:text-gray-400 transition-all duration-500 ease-in-out"
                      >
                        Waterloo Region
                      </a>
                    </li>
                    <li class="mt-[10px]">
                      <a
                        href="#"
                        class="text-gray-300 hover:text-gray-400 transition-all duration-500 ease-in-out"
                      >
                        Niagara Falls
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="py-7 px-0 border-t border-white ">
        <div class="container mx-auto px-6 text-center mt-10">
          <div class="grid md:grid-cols-2 items-center">
            <div class="md:text-left text-center">
              <p>Copyright © 2024 GM Global Inc. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
