"use client";

import Image from "next/image";
import { Inter, Ubuntu } from "@next/font/google";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });
const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["700", "300", "500"] });

export default function Home() {
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

  const sendMessage = async () => {
    const { from, text } = input;
    await fetch({
      method: "POST",
      url: "/api/contact",
      body: {
        from: from,
        text: text,
      },
    });
    console.log(from, text);
  };
  const router = useRouter();
  return (
    <main className={styles.main}>
      <header>
        <h1 className={ubuntu.className}>
          Anthony <br /> ezeh
        </h1>
      </header>

      <div className={styles.hero}>
        <h1 className={ubuntu.className}>Web Developer</h1>
        <p className={ubuntu.className}>
          Hello, i'm Anthony Ezeh, a web developer with a few years of
          experience. I have acquired experience that has improved my
          productivity in the long run, having worked on personal projects with
          a few friends, This has impacted on my skills, problem solving
          ability, communication ability, and ability to carry out research
          pertaining to what is required for a job.
        </p>
        <button className={ubuntu.className}>
          Let's talk <img src="/upright.svg" alt="" />
        </button>
      </div>

      <div className={styles.skills}>
        <h3 className={ubuntu.className}>Skills</h3>
        {skills.map((e) => (
          <li>
            <img src={e.img} alt="" />
            <p className={ubuntu.className}>{e.text}</p>
          </li>
        ))}
      </div>

      <div className={styles.projects}>
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

        <li>
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

      <div className={styles.coffee}>
        <h3 className={ubuntu.className}>Tip me</h3>

        <img src="/coffee.svg" alt="" />
        <button className={ubuntu.className}>
          send Tip
          <img src="/money.svg" alt="" />
        </button>
      </div>

      <div className={styles.contact}>
        <h3 className={ubuntu.className}>Contact</h3>

        <div className={styles.form}>
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
            Send
          </button>
        </div>
      </div>

      <footer>
        <div className={styles.social}>
          <img src="/facebook.svg" alt="" />
          <img src="/instagram.svg" alt="" />
          <img src="/twitter.svg" alt="" />
          <img src="/whatsapp.svg" alt="" />
        </div>
        <h3 className={ubuntu.className}>made with love</h3>
      </footer>
    </main>
  );
}
