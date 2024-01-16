"use client";

import Image from "next/image";
import { Inter, Ubuntu } from "@next/font/google";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Snowfall from "react-snowfall";
import { ClapSpinner } from "react-spinners-kit";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Power4 } from "gsap";

const inter = Inter({ subsets: ["latin"] });
const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["700", "300", "500"] });

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);
  const skills = [
    {
      img: "mongodb.svg",
      text: "mongoDB ",
    },
    {
      img: "express.svg",
      text: "express",
    },
    {
      img: "react.svg",
      text: "react",
    },
    {
      img: "nodejs.svg",
      text: "node",
    },
    {
      img: "html5.svg",
      text: "HTML5",
    },
    {
      img: "css.svg",
      text: "CSS3",
    },
    {
      img: "gsap.svg",
      text: "Greensock animation platform",
    },
    {
      img: "javascript.svg",
      text: "javascript",
    },
    {
      img: "adobe.svg",
      text: "adobe Photoshop",
    },
    {
      img: "next.svg",
      text: "next",
    },
    {
      img: "github.svg",
      text: "github",
    },
    {
      img: "jquery.svg",
      text: "jquery",
    },
  ];

  const project = [
    {
      title: "Daniel wylde",
      img: "/wylde.png",
      link: "https://danielwylde.com/",
      description:
        "An e-commerce application with sleek product displays to a streamlined checkout process. Every aspect of the website has been carefully tailored to enhance the user experience. The responsive design ensures a seamless transition from desktop to mobile, allowing users to explore the world of DanielWylde effortlessly. This project demonstrates my proficiency in creating scalable and visually appealing e-commerce solutions, providing both clients and users with a digital storefront that mirrors the elegance and uniqueness of the DanielWylde brand. Explore the DanielWylde E-Commerce Clothing Store—an embodiment of my commitment to delivering impactful and visually stunning web experiences",
    },
    {
      title: "Nazario",
      img: "/nazario.png",
      link: "https://nazario.vercel.app/",
      description:
        "Welcome to my Importation and Exportation Landing Page project, a dynamic and user-centric web platform designed to showcase the services and expertise of a global trade facilitator. This project represents my commitment to creating seamless digital experiences for businesses engaged in international commerce.",
    },
    {
      title: "Jotter notepad",
      img: "/jotter.png",
      link: "https://crayonne-jotter.vercel.app",
      description:
        "Introducing Jotter, my personalized React Notepad application designed to elevate your note-taking experience. Jotter seamlessly combines user authentication with a dynamic note management system using MongoDB, providing each registered user with an individual space to create, update, and delete notes. With a user-friendly interface, this application ensures a secure and tailored environment for organizing thoughts, ideas, and important information. Leveraging the power of React, Jotter showcases my skills in creating responsive and interactive web applications. Whether you're a student, professional, or anyone seeking an organized digital space, Jotter exemplifies my commitment to delivering user-centric solutions that enhance productivity and streamline daily tasks.",
    },
    {
      title: "Blogville (uncompleted) ",
      img: "/blogville.png",
      link: "https://blogville.vercel.app",
      description:
        "Embark on a journey of ideas and insights with my upcoming personal blog. This project is a testament to my passion for sharing knowledge, experiences, and musings with a global audience. While the blog is currently under construction, it promises to be a digital haven for those seeking inspiration, information, and a glimpse into my world.",
    },

    {
      title: "Stopwatch",
      img: "/stopwatch.png",
      link: "https://crayonnestopwatch.vercel.app/",
      description:
        "A sleek and functional timekeeping solution built with the power of React hooks. This innovative stopwatch allows users to effortlessly track time, with features such as start, pause, and reset functionalities. The user-friendly design ensures a seamless experience, making time management a breeze. Powered by React, this application showcases my proficiency in leveraging cutting-edge technologies to create efficient and responsive user interfaces. Whether you need a simple timer for personal use or want to integrate timekeeping features into a larger project, this React Stopwatch Application demonstrates my commitment to delivering intuitive and robust solutions in web development.",
    },
  ];

  const [input, setInput] = useState({
    from: "",
    text: "",
  });

  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    const { from, text } = input;
    setLoading(true);
    await axios({
      method: "POST",
      url: "/api/contact",
      data: {
        from: from,
        text: text,
      },
    })
      .then((res) => {
        setLoading(false);
        toast.success("Mail sent to Anthony", {
          autoClose: 3000,
          hideProgressBar: true,
          theme: "dark",
        });
      })
      .catch((err) => {
        setLoading(false);
        toast.success(`${err.response.data}`, {
          autoClose: 3000,
          hideProgressBar: true,
          theme: "dark",
        });
      });
    console.log(from, text);
  };
  const router = useRouter();

  const ref = useRef(null);
  const g = gsap.utils.selector(ref);
  const hero = gsap.timeline({ defaults: { opacity: 0 } });
  const skill = gsap.timeline({ defaults: { opacity: 0 } });
  const projects = gsap.timeline({ defaults: { opacity: 0 } });
  const contact = gsap.timeline({ defaults: { opacity: 0 } });

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(g("#main *"), 1, {
        visibility: "visible",
      });

      const heroAnimate = (() => {
        hero
          .from(g("#main header"), { x: 100 })
          .from(g("#hero h1"), { y: 100 })
          .from(g("#hero p"), { x: 100 });
        gsap.fromTo(
          g("#hero button"),
          { y: 50 },
          { y: 0, ease: Power4.bounce, delay: 1 }
        );
      })();

      const skillsAnimate = (() => {
        skill.from(g("#skills h3"), {
          x: 50,
          opacity: 0,
          scrollTrigger: {
            trigger: "#skills h3",
            start: "top 80%",
            end: "top 90%",
            scrub: 1,
          },
        });
        for (var i = 1; i < 13; i++) {
          //li
          skill.fromTo(
            g(`#skills li:nth-of-type(${i})`),
            {
              y: 80,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              scrollTrigger: {
                trigger: `#skills li:nth-of-type(${i})`,
                start: "top 80%",
                end: "top 70%",
                scrub: 1,
              },
            }
          );

          //p
          skill.fromTo(
            g(`#skills li:nth-of-type(${i}) p`),
            {
              x: 50,
              opacity: 0,
            },
            {
              x: 0,
              opacity: 1,
              scrollTrigger: {
                trigger: `#skills li:nth-of-type(${i}) p`,
                start: "top 80%",
                end: "top 70%",
                scrub: 1,
              },
            }
          );

          //img
          skill.fromTo(
            g(`#skills li:nth-of-type(${i}) img`),
            {
              x: -50,
              opacity: 0,
            },
            {
              x: 0,
              opacity: 1,
              scrollTrigger: {
                trigger: `#skills li:nth-of-type(${i}) img`,
                start: "top 80%",
                end: "top 70%",
                scrub: 1,
              },
            }
          );
        }
      })();

      const projectAnimate = (() => {
        projects.from(g("#projects h3"), {
          x: 50,
          opacity: 0,
          scrollTrigger: {
            trigger: "#projects h3",
            start: "top 80%",
            end: "top 90%",
            scrub: 1,
          },
        });
        for (var i = 1; i < 13; i++) {
          //li
          projects.fromTo(
            g(`#projects li:nth-of-type(${i})`),
            {
              y: 80,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              scrollTrigger: {
                trigger: `#projects li:nth-of-type(${i})`,
                start: "top 80%",
                end: "top 70%",
                scrub: 1,
              },
            }
          );

          //h3
          projects.fromTo(
            g(`#projects li:nth-of-type(${i}) h3`),
            {
              x: 50,
              opacity: 0,
            },
            {
              x: 0,
              opacity: 1,
              scrollTrigger: {
                trigger: `#projects li:nth-of-type(${i}) h3`,
                start: "top 80%",
                end: "top 70%",
                scrub: 1,
              },
            }
          );

          //img
          projects.fromTo(
            g(`#projects li:nth-of-type(${i}) img`),
            {
              y: 50,
              scale: 1.2,
              opacity: 0,
            },
            {
              scale: 1,
              y: 0,
              opacity: 1,
              scrollTrigger: {
                trigger: `#projects li:nth-of-type(${i}) img`,
                start: "top 80%",
                end: "top 70%",
                scrub: 1,
              },
            }
          );

          //p
          projects.fromTo(
            g(`#projects li:nth-of-type(${i}) p`),
            {
              x: -50,
              opacity: 0,
            },
            {
              x: 0,
              opacity: 1,
              scrollTrigger: {
                trigger: `#projects li:nth-of-type(${i}) p`,
                start: "top 90%",
                end: "top 80%",
                scrub: 1,
              },
            }
          );
        }
      })();

      const contactAnimate = (() => {
        //h3
        contact
          .fromTo(
            g("#contact h3"),
            {
              x: 50,
              opacity: 0,
            },
            {
              x: 0,
              opacity: 1,
              scrollTrigger: {
                trigger: g("#contact h3"),
                start: "top 90%",
                end: "top 80%",
                scrub: 1,
              },
            }
          )

          //input

          .fromTo(
            g("#form input"),
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              scrollTrigger: {
                trigger: g("#form input"),
                start: "top 80%",
                end: "top 70%",
                scrub: 1,
              },
            }
          )

          //textarea

          .fromTo(
            g("#form textarea"),
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              scrollTrigger: {
                trigger: g("#form textarea"),
                start: "top 80%",
                end: "top 70%",
                scrub: 1,
              },
            }
          );
      })();
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className={`${styles.main} lg:px-20 px-4 `} ref={ref} id="main">
      <header className="lg:px-20 px-4 ">
        <h1 className={ubuntu.className}>
          Anthony <br /> ezeh
        </h1>
      </header>

      <div id="hero" className={`${styles.hero}  `}>
        <h1 className={ubuntu.className}>Web Developer</h1>
        <p className={ubuntu.className}>
          Hello, i'm Anthony Ezeh, a web developer with a few years of
          experience. I have acquired experience that has improved my
          productivity in the long run, having worked on personal projects with
          a few friends, This has impacted on my skills, problem solving
          ability, communication ability, and ability to carry out research
          pertaining to what is required for a job.
        </p>
        <button
          onClick={() => {
            gsap.to("#heroButton"), { duration: 1, scrollTo: "#contact" };
          }}
          id="heroButton"
          className={`text-black  ${ubuntu.className}`}
        >
          Let's talk <img src="/upright.svg" alt="" />
        </button>
      </div>

      <div className={` ${styles.skills} lg:px-20 px-4 `} id="skills">
        <h3 className={ubuntu.className}>Skills</h3>
        {skills.map((e, i) => (
          <li key={i}>
            <img src={e.img} alt="" />
            <p className={ubuntu.className}>{e.text}</p>
          </li>
        ))}
      </div>

      <div id="projects" className="lg:px-20 px-4 my-4">
        <h3 className={"text-3xl"}>Projects</h3>

        <div className="grid md:grid-cols-2 list-none gap-x-4">
          {project.map((p) => (
            <li onClick={() => router.push(p.link)}>
              <h3
                className={`bg-colored bg-clip-text my-4 text-transparent text-2xl font-bold capitalize `}
              >
                {p.title}
              </h3>
              <img src={p.img} alt={p.title} />
              <p className={`${ubuntu.className} my-4 `}>{p.description}</p>
            </li>
          ))}
        </div>
      </div>

      {/*       <div className={styles.coffee}>
        <h3 className={ubuntu.className}>Tip me</h3>

        <img src="/coffee.svg" alt="" />
        <button className={ubuntu.className}>
          send tip
          <img src="/money.svg" alt="" />
          <Snowfall snowflakeCount={30} />
        </button>
      </div> */}

      <div id="contact" className={`${styles.contact} lg:px-20 px-4 `}>
        <h3 className={ubuntu.className}>Contact</h3>

        <div id="form" className={styles.form}>
          <input
            value={input.from}
            onChange={(e) =>
              setInput((prev) => ({ ...prev, from: e.target.value }))
            }
            type="text"
            id="form"
            placeholder="Your mail or number"
          />
          <textarea
            id="form"
            onChange={(e) =>
              setInput((prev) => ({ ...prev, text: e.target.value }))
            }
            value={input.text}
            placeholder="Your Message"
          ></textarea>
          <button
            type={"submit"}
            onClick={sendMessage}
            className={ubuntu.className}
          >
            <ClapSpinner loading={loading} size={14} />
            {!loading && "send "}
          </button>
        </div>
        <Snowfall snowflakeCount={30} />
      </div>

      <footer>
        <div className={styles.social}>
          <img
            src="/facebook.svg"
            onClick={() =>
              router.push(
                "https://www.facebook.com/profile.php?id=100088849056244&mibextid=ZbWKwL"
              )
            }
            alt=""
          />
          <img
            src="/instagram.svg"
            alt="instagram profile"
            onClick={() => router.push("https://www.instagram.com/nazvillle")}
          />
          <img
            src="/twitter.svg"
            onClick={() =>
              router.push(
                "https://twitter.com/Nazvillle?t=xW9sj0bfObU9LG6vkx74UQ&s=09"
              )
            }
            alt=""
          />
          <img
            src="/whatsapp.svg"
            onClick={() => router.push("https://wa.link/1vaasu")}
            alt=""
          />
        </div>
        <h3 className={ubuntu.className}>made with love</h3>
      </footer>
      <Snowfall snowflakeCount={30} />
      <ToastContainer />
    </main>
  );
}
