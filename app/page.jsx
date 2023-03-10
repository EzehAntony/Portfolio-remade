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
    <main className={styles.main} ref={ref} id="main">
      <header>
        <h1 className={ubuntu.className}>
          Anthony <br /> ezeh
        </h1>
      </header>

      <div id="hero" className={styles.hero}>
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
          className={ubuntu.className}
        >
          Let's talk <img src="/upright.svg" alt="" />
        </button>
      </div>

      <div className={styles.skills} id="skills">
        <h3 className={ubuntu.className}>Skills</h3>
        {skills.map((e, i) => (
          <li key={i}>
            <img src={e.img} alt="" />
            <p className={ubuntu.className}>{e.text}</p>
          </li>
        ))}
      </div>

      <div id="projects" className={styles.projects}>
        <h3 className={ubuntu.className}>Projects</h3>

        <li onClick={() => router.push("https://crayonne-jotter.vercel.app")}>
          <h3 className={ubuntu.className}>Jotter</h3>
          <img src="/jotter.png" alt="" />
          <p className={ubuntu.className}>
            A simple notepad web application with user authentication that
            receives, stores, updates and delete data stored using mongoDB.
          </p>
        </li>

        <li onClick={() => router.push("https://crayonnedict.vercel.app/")}>
          <h3 className={ubuntu.className}>Dictionary</h3>
          <img src="/dictionary.png" alt="" />
          <p className={ubuntu.className}>
            An online dictionary that searches a limited list of words and
            diplays the data fetched.
          </p>
        </li>

        <li onClick={() => router.push("https://amanaui.vercel.app")}>
          <h3 className={ubuntu.className}>amana</h3>
          <img src="/amana.png" alt="" />
          <p className={ubuntu.className}>
            Amana Landing page, a figma design I was given by a senior ui/ux
            developer to build and add to my projects.
          </p>
        </li>

        <li onClick={() => router.push("https://crayonne-loan.vercel.app")}>
          <h3 className={ubuntu.className}>Loan app</h3>
          <img src="/loan.png" alt="" />
          <p className={ubuntu.className}>
            Loan app landing page, a figma design i was given by a random ui/ux
            designer on twitter so i could add to my projectss.
          </p>
        </li>

        <li onClick={() => router.push("https://ezehanthony.vercel.app")}>
          <h3 className={ubuntu.className}>Portfolio</h3>
          <img src="/portfolio.png" alt="" />
          <p className={ubuntu.className}>
            A portfolio website about me that displays the basic data about my
            coding career.
          </p>
        </li>
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

      <div id="contact" className={styles.contact}>
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
