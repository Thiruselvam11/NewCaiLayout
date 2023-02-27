import React, { useEffect, useRef } from "react";
import "./CAINewLayout1.css";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CAINewLayout1 = () => {
  const videoRef = useRef();


  useEffect(() => {
    gsap.from(".gif-section-icon", {
      x: innerWidth * 1,
      scrollTrigger: {
        trigger: ".gif-section",
        start: "center 70%",
        end: "bottom 70%",
        scrub: true,
      }
    });
    gsap.from(".text-container", {
      x: innerWidth * -1,
      scrollTrigger: {
        trigger: ".timeless",
        start: "center 80%",
        end: "bottom 40%",
        scrub: true,
      }
    });
    gsap.from(".cai-image2-3", {
      x: innerWidth * 1,
      scrollTrigger: {
        trigger: ".imagecontainer",
        start: "center 80%",
        end: "bottom 40%",
        scrub: true,
      }
    });
    gsap.from(".cai-image4-4-wrapper", {
      x: innerWidth * -1,
      scrollTrigger: {
        trigger: ".fashion",
        start: "center 100%",
            end: "bottom 70%",
        scrub: true,
      }
    });
    gsap.from(".text-container1", {
      x: innerWidth * 1,
      scrollTrigger: {
        trigger: ".fashion",
        start: "center 100%",
            end: "bottom 70%",
        scrub: true,
      }
    });

  }, []);


  return (
    <main className="cainewlayout1">
      <section className="perfect-fit">
        <div className="perfectcontent">
          <h1 className="prefectheading">PERFECT FIT</h1>
          <p className="perfectdescription">
            Bring out your festive personality with poise and maximise comfort
            by 'opting for a size larger than usual for wider feet.' Mix comfort
            and style with ease with the Maroon Studded Heels.
          </p>
        </div>
      </section>
      <section className="modeldesc" data-animate-on-scroll>
        <img
          className="modelimage-icon"
          alt=""
          src="../frame-52features-of-cai-1@2x.png"
        />
      </section>
      <div className="video-section" >
        <video className="video-section1" autoPlay muted loop>
          <source src="https://asset.weaveroo.io/cai/Heels/maroon-studded-heels/videos/cai.mp4" />
        </video>
      </div>
      <section className="blendcontainer">
        <img className="blendimage-icon" alt="" src="../vector-5.svg" />
      </section>
      <section className="timeless">
        <div className="text-container">
          <h1 className="timeless-and-comfy">Timeless and comfy</h1>
          <p className="bring-out-your">
            Bring out your festive personality with poise and maximise comfort
            by 'opting for a size larger than usual for wider feet.' Mix comfort
            and style with ease with the Maroon Studded Heels.
          </p>
        </div>
        <div className="imagecontainer">
          <img className="cai-image2-3" alt="" src="../cai-image2-3@2x.png" />
        </div>
      </section>
      <section className="gif-section" ref={videoRef}>
        <img
          className="gif-section-icon"
          alt=""
          src="../c1a0732d-378c-4b50-9434-a4d709c126ef.gif"
        />
      </section>
      <section className="fashion">
        <div className="cai-image4-4-wrapper">
          <img className="cai-image4-4" alt="" src="../cai-image4-4@2x.png" />
        </div>
        <div className="text-container1">
          <h1 className="fashion-meets-comfort">Fashion meets comfort</h1>
          <p className="a-chic-addition">
            A chic addition to your look, these strappy sandals have super soft
            nubuck sheet inner soles that provide comfort and are stylish in
            equal measure. They feel as good as they look!
          </p>
        </div>
      </section>
      <section className="blendcontainer">
        <img className="blendimage-icon" alt="" src="../vector-5.svg" />
      </section>
      <section className="cosy-style">
        <div className="cosytext">
          <h1 className="timeless-and-comfy">Cosy Style</h1>
          <p className="bring-out-your">
            Thoughtfully crafted footwear in PU leather with maroon studded
            straps and mid heels, which look amazing and feel like the perfect
            pair of everyday footwear.
          </p>
        </div>
        <div className="imagecontainer1">
          <img className="modelimage-icon" alt="" src="../cai-image-6@2x.png" />
        </div>
      </section>
      <section className="imagegallery">
        <section className="gallery">
          <div className="galleryleft">
            <img
              className="modelimage-icon"
              alt=""
              src="../04a1a36bb0d44ab7b4e07709675b5ef7-1@2x.png"
            />
          </div>
          <div className="galleryright">
            <div className="sectiontop">
              <img
                className="modelimage-icon"
                alt=""
                src="../galleryrightimage1@2x.png"
              />
            </div>
            <div className="sectionbottom">
              <img
                className="modelimage-icon"
                alt=""
                src="../galleryrightimage2@2x.png"
              />
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default CAINewLayout1;
