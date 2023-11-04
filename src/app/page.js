"use client";
import { Carousel, Partners } from "@/components";
import imageOne from "../../public/1.jpeg";
import imageTwo from "../../public/2.jpeg";
import imageThree from "../../public/3.jpeg";
import imageFour from "../../public/033.jpg";
import Link from "next/link";
import thumb from "../../public/turnkeys.jpg";
import location from "../../public/slider2.jpg";
import benefit from "../../public/tower.jpeg";
import Image from "next/image";
import HexComponent from "@/components/About/Component";
import { useSpring, animated } from "react-spring";
import {
  FaCaretDown,
  FaLightbulb,
  FaPhoneAlt,
  FaRecycle,
  FaSignOutAlt,
} from "react-icons/fa";

const slides = [
  {
    image: imageOne,
    heading: "Specfic Tools & Techniques Limited",
    content:
      "Specific Tools & Techniques Ltd (ST&T) started its operations in 2007 to provide engineering and integrated facility management services to optimize productivity and enabling customers to concentrate on their core line of businesses",
  },
  {
    image: imageTwo,
    heading: "Enriched Experience",
    content:
      "With our enriched experience, technical & functional expertise on O&M, we have gained highly satisfied clients by ensuring smooth service to our clients 24/7, 365 days a year.",
  },
  // {
  //   image: imageThree,
  //   heading: "Quality Assurance Policy (QAP)",
  //   content:
  //     "Our quality and assurance plan ensures that appropriate process and system is practiced. This involves the provision of tools for record keeping activities that cover all systems of operations",
  // },
  {
    image: imageThree,
    heading: "ISO 9001",
    content: "We adhere to ISO 9001 in all we do ",
  },
];

export default function Home() {
  const springProps = useSpring({
    from: { opacity: 0, transform: "translateY(-50px)" },
    to: async (next) => {
      await next({ opacity: 1, transform: "translateY(0)" });
      await next({ opacity: 0.5, transform: "translateY(-20px)" });
      await next({ opacity: 1, transform: "translateY(0)" });
    },
    config: { duration: 1000 },
  });

  const springProps2 = useSpring({
    from: { opacity: 0, transform: "scale(0.8)" },
    to: async (next) => {
      await next({ opacity: 1, transform: "scale(1)" });
      await next({ opacity: 0.5, transform: "scale(0.9)" });
      await next({ opacity: 1, transform: "scale(1)" });
    },
    config: { duration: 1000 },
  });

  return (
    <>
      <Carousel slides={slides} />
      <Partners />
      <div className="aboutHomeContainer">
        <animated.div className="aboutImageFlex" style={springProps}>
          <Image src={thumb} alt="ST & T" priority />
        </animated.div>

        <animated.div className="aboutTextContainer" style={springProps2}>
          <h4>ABOUT US</h4>
          <h2>Specfic Tools & Techniques Limited</h2>
          <br />
          <p>
            Specific Tools & Techniques Ltd (ST&T) started its operations in
            2007 to provide engineering and integrated facility management
            services to optimize productivity and enabling customers to
            concentrate on their core line of businesses.
            <br />
            <br /> In 2020, ST&T expanded its operations to Addis Ababa as
            Specific Tools and Techniques Consultancy PLC to provide service in
            the area of engineering, construction and integrated facility
            management.
          </p>
          <br />
          <div className="btnContainer">
            <Link href="/about" className="btn blackBorder">
              SEE MORE
            </Link>
          </div>
        </animated.div>
      </div>
      <div className="locationContainer">
        <div className="locationBackdrop">
          <Image src={location} alt="ST & T" priority />
        </div>
        <div className="locationTextContainer">
          <h2>Specfic Tools & Technique Limited</h2>
          <br />
          <p>
            ST&T has operations in Nigeria, West Africa and East African
            countries
          </p>
          <br />
          <div className="btnContainer">
            <Link href="/locations" className="btn lightBorder">
              OPERATIONAL LOCATIONS
            </Link>
          </div>
        </div>
      </div>
      <HexComponent />
      <div className="benefits">
        <h2>Benefits of Engaging ST&T</h2>
        <br />
        <br />
        <div className="benefitFlex">
          <div className="benefitImage">
            <Image src={benefit} alt="ST & T" priority />
          </div>

          <div className="benefitContainer">
            <div className="benefitItemContainer">
              <div className="circleContainer">
                <div className="circle"></div>
                <div className="circleLine"></div>
              </div>
              <div className="benefitTextContainer">
                <h4>ISO 9001</h4>
                <p>We adhere to ISO 9001 in all we do</p>
              </div>
            </div>
            {/* start */}
            <div className="benefitItemContainer">
              <div className="circleContainer">
                <div className="circle"></div>
                <div className="circleLine"></div>
              </div>
              <div className="benefitTextContainer">
                <h4>COST</h4>
                <p>We aim to serve at optimal cost</p>
              </div>
            </div>
            {/* end */}
            {/* start */}
            <div className="benefitItemContainer">
              <div className="circleContainer">
                <div className="circle"></div>
                <div className="circleLine"></div>
              </div>
              <div className="benefitTextContainer">
                <h4>SPEED</h4>
                <p>
                  We do things quickly in response to customers demands and
                  offer short lead times also between when customers order
                  service and when they receive it.
                </p>
              </div>
            </div>
            {/* end */}
            {/* start */}
            <div className="benefitItemContainer">
              <div className="circleContainer">
                <div className="circle"></div>
                <div className="circleLine"></div>
              </div>
              <div className="benefitTextContainer">
                <h4>QUALITY</h4>
                <p>
                  We aim to serve according to specifications as well as beat
                  our customers expectations without error.
                </p>
              </div>
            </div>
            {/* end */}
            {/* start */}
            <div className="benefitItemContainer">
              <div className="circleContainer">
                <div className="circle"></div>
                <div className="circleLine"></div>
              </div>
              <div className="benefitTextContainer">
                <h4>DEPENDABILITY</h4>
                <p>We make reliable delivery with promises to customers</p>
              </div>
            </div>
            {/* end */}
            {/* start */}
            <div className="benefitItemContainer">
              <div className="circleContainer">
                <div className="circle"></div>
                <div className="circleLine"></div>
              </div>
              <div className="benefitTextContainer">
                <h4>FLEXIBILITY</h4>
                <p>We innovate, able to deliver in volume and on time.</p>
              </div>
            </div>
            {/* end */}
            {/* start */}
            <div className="benefitItemContainer">
              <div className="circleContainer">
                <div className="circle"></div>
                {/* <div className="circleLine"></div> */}
              </div>
              <div className="benefitTextContainer">
                <h4>AFFORDABILITY</h4>
                <p>
                  We offer our services at very competitive and attractive
                  prices.
                </p>
              </div>
            </div>
            {/* end */}
          </div>
        </div>
      </div>
      <div className="whistleBlower">
        <div className="whistle">
          <h1>
            <FaSignOutAlt />
          </h1>
          <h4>REPORT A CONCERN ONLINE</h4>
          <p>
            Click here to submit a suspected violation of ST & T code of conduct
            or policies
          </p>
          <h6>
            <FaCaretDown />
          </h6>
        </div>
        <div className="whistle">
          <h1>
            <FaPhoneAlt />
          </h1>
          <h4>MAKE A CALL</h4>
          <p>
            Click here and find details of the contact center you can call to
            report a concern or ask a question
          </p>
          <h6>
            <FaCaretDown />
          </h6>
        </div>
        <div className="whistle">
          <h1>
            <FaLightbulb />
          </h1>
          <h4>ASK A QUESTION</h4>
          <p>
            Click here to ask a compliance and ethics related question or ask
            guidance
          </p>
          <h6>
            <FaCaretDown />
          </h6>
        </div>
        <div className="whistle">
          <h1>
            <FaRecycle />
          </h1>
          <h4>FOLLOW UP</h4>
          <p>Click here to follow up on your report or request</p>
          <h6>
            <FaCaretDown />
          </h6>
        </div>
      </div>
    </>
  );
}
