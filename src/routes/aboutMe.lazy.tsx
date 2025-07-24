import { createLazyFileRoute } from "@tanstack/react-router";
import { Download, MoveUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { AboutCard } from "@/components/cards/AboutCard";
import drawingAboutMe1 from "@/assets/drawing_aboutMe.svg";
import photoAboutMe1 from "@/assets/photo_aboutMe_1.svg";
import photoAboutMe2 from "@/assets/photo_aboutMe_2.svg";
import photoAboutMe3 from "@/assets/photo_aboutMe_3.svg";
import photoAboutMe4 from "@/assets/photo_aboutMe_4.svg";
import photoAboutMe5 from "@/assets/photo_aboutMe_5.svg";
import photoAboutMe6 from "@/assets/photo_aboutMe_6.svg";
import photoAboutMe7 from "@/assets/photo_aboutMe_7.svg";
import photoAboutMe8 from "@/assets/photo_aboutMe_8.svg";
import photoAboutMe9 from "@/assets/photo_aboutMe_9.svg";
import photoAboutMe10 from "@/assets/photo_aboutMe_10.svg";
import photoAboutMe11 from "@/assets/photo_aboutMe_11.svg";
import photoAboutMe12 from "@/assets/photo_aboutMe_12.svg";
import photoAboutMe13 from "@/assets/photo_aboutMe_13.svg";
import photoAboutMe14 from "@/assets/photo_aboutMe_14.svg";
import photoAboutMe15 from "@/assets/photo_aboutMe_15.svg";
import photoAboutMe16 from "@/assets/photo_aboutMe_16.svg";
import photoAboutMe17 from "@/assets/photo_aboutMe_17.svg";
import aboutMeCard1 from "@/assets/aboutMe_card_1.svg";
import aboutMeCard2 from "@/assets/aboutMe_card_2.svg";

export const Route = createLazyFileRoute("/aboutMe")({
  component: AboutMe,
});

function AboutMe() {
  return (
    <div className="grid grid-cols-10 gap-6">
      <div className="col-span-6 text-xl">
        <h2>Get to know the adventurer behind the adventures</h2>
        <p className="pt-6 leading-6.5">
          Hi, you can call me Carol! 😊 I'm a Brazilian designer living in
          Portugal. I have more than 6 years of experience in Design and
          Illustration, working with Product Design, Graphic Design, and
          Illustration for digital and printed services.
          <br />
          <br />
          For the last 4 years, I've focused my career on Product Design. I love
          creating pleasant experiences for users while adding value to the
          company's business. As an illustrator, I also bring this skill to
          everyday life, contributing with icons and customized illustration
          libraries.
          <br />
          <br />
          Below, I'll share some photos of the companies I've worked for,
          courses I've enjoyed and even an illustration I created for the Design
          Team of one of the companies where I made great friends. Later on,
          I'll also tell you a bit about my personal side.
        </p>
        <div className="pt-6 leading-6">
          <Button variant="secondary" className="w-37 text-base">
            Download CV <Download />
          </Button>
          <Button
            variant="ghostSecondary"
            className="ml-6 w-37 text-base"
            asChild
          >
            <a href="https://www.linkedin.com/in/carolmiguel" target="_blank">
              Go to Linkedin <MoveUpRight />
            </a>
          </Button>
        </div>
      </div>
      <div className="col-span-4 self-center justify-self-center">
        <img src={drawingAboutMe1} alt="Drawing AboutMe" />
      </div>
      <img
        src={photoAboutMe1}
        alt="Photo AboutMe 1"
        className="row-span-2 col-span-6 pt-10"
      />
      <img
        src={photoAboutMe2}
        alt="Photo AboutMe 2"
        className="col-span-4 pt-10"
      />
      <img src={photoAboutMe3} alt="Photo AboutMe 3" className="col-span-4" />
      <img src={photoAboutMe4} alt="Photo AboutMe 4" className="col-span-10" />
      <img
        src={photoAboutMe5}
        alt="Photo AboutMe 5"
        className="row-span-2 col-span-6"
      />
      <img src={photoAboutMe6} alt="Photo AboutMe 6" className="col-span-4" />
      <img src={photoAboutMe7} alt="Photo AboutMe 7" className="col-span-4" />
      <div className="col-span-10 text-xl pt-12">
        <i>
          <h2>“Creative adult is the child who survived”</h2>
          <h2 className="font-normal">Ursula K. Le Guin</h2>
        </i>
        <p className="pt-6 leading-6.5">
          Well, I think it's important to know a little about Carol beyond the
          professional side. After all, a lot of what we are in our personal
          lives says a lot about who we are at work, doesn't it?
          <br />
          <br />
          I'm a little nerd who loves getting lost in the world of imagination.
          I always say that my imagination has saved me at various times in my
          life. It's what I use to do the things I love most: play tabletop
          role-playing games with my friends (I'm a player as well as a dungeon
          master), draw, write stories and talk about silly things at an
          afternoon coffee table or on a pizza night.
          <br />
          <br />
          I love telling stories, dancing, drinking coffee, listening to people
          laugh, playing with dogs, playing video games and, of course,
          collecting Taylor Swift stuff.
          <br />
          <br />
          I think that as long as I have my creativity and imagination, no
          matter how much I get lost in life-I'll always come back to myself.
          <br />
          <br />
          Fun fact: I have a degree in Veterinary Medicine! Before diving 100%
          into design, I fulfilled every child's (and my) childhood dream of
          becoming a veterinarian. As an outspoken curiosity seeker, I love
          studying animals. So if you need any health tips for your pet or any
          trivia about the area, just give me a call! 😊
        </p>
      </div>
      <img src={photoAboutMe8} alt="Photo AboutMe 8" className="col-span-10" />
      <div className="col-span-4">
        <img src={photoAboutMe9} alt="Photo AboutMe 9" />
        <img src={photoAboutMe10} alt="Photo AboutMe 10" className="pt-6" />
      </div>
      <img src={photoAboutMe11} alt="Photo AboutMe 11" className="col-span-6" />
      <div className="col-span-4">
        <img src={photoAboutMe12} alt="Photo AboutMe 12" />
        <img src={photoAboutMe13} alt="Photo AboutMe 13" className="pt-6" />
      </div>
      <img src={photoAboutMe14} alt="Photo AboutMe 14" className="col-span-6" />
      <img
        src={photoAboutMe15}
        alt="Photo AboutMe 15"
        className="col-span-10"
      />
      <img
        src={photoAboutMe16}
        alt="Photo AboutMe 16"
        className="col-span-5  pb-12"
      />
      <img
        src={photoAboutMe17}
        alt="Photo AboutMe 17"
        className="col-span-5 pb-12"
      />
      <div className="col-span-5">
        <p className="pb-4 font-medium">Design cases</p>
        <AboutCard
          title="My job as a Product Designer"
          content="Check out some case from the companies I’ve worked for and study projects. Here, you can see a bit of my Research and Visual process."
          image={{
            src: aboutMeCard1,
            alt: "AboutMe Card 1",
            className: "max-w-31 h-43 mt-6",
          }}
          redirectLink={{
            href: "https://carolinamiguel.medium.com/",
            target: "_target",
            text: "View all",
          }}
        />
      </div>
      <div className="col-span-5">
        <p className="pb-4 font-medium">Illustrations jobs</p>
        <AboutCard
          title="My job as a Illustrator"
          content="Check out some of my work as an illustrator, including projects for digital companies, book illustrations, and personal work."
          image={{
            src: aboutMeCard2,
            alt: "AboutMe Card 2",
            className: "max-w-30 h-40 ml-4",
          }}
          redirectLink={{
            href: "/illustration",
            target: "_self",
            text: "View all",
          }}
        />
      </div>
    </div>
  );
}
