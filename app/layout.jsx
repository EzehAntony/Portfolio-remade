import "./globals.css";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
export default function RootLayout({ children }) {
  gsap.registerPlugin(ScrollTrigger);
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>{children}</body>
    </html>
  );
}
