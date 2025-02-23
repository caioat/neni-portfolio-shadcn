import { ProjectHighlightCard } from "@/components/cards/ProjectHighlightCard";
import { createLazyFileRoute } from "@tanstack/react-router";

import { MiniCard } from "@/components/cards/MiniCard";
import { AboutCard } from "@/components/cards/AboutCard";

import vetSystemCard from "../assets/vet_system_card.svg";
import acordoCertoCard from "../assets/acordo_certo_card.svg";
import postGraduationCard from "../assets/post_graduation_card.svg";
import avatar from "../assets/avatar.svg";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { CaptainWidget } from "@/components/CaptainWidget";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <CaptainWidget />
      <div className="pb-16">
        <p className="pb-4 font-medium">Highlight projects</p>
        <ProjectHighlightCard
          title="Creating a Veterinary System for the Biggest Pet Shop in Brazil"
          content="Ecommerce Company"
          image={vetSystemCard}
          redirectLink="/vet-system"
        />
        <br />
        <ProjectHighlightCard
          title="How a Redesign Increased Our Company’s Conversion by 15%"
          content="Fintech Company"
          image={acordoCertoCard}
          redirectLink="/vet-system"
        />
        <br />
        <ProjectHighlightCard
          title="Creating a platform to help donors and volunteers"
          content="Final project for the postgraduate course"
          image={postGraduationCard}
          redirectLink="/vet-system"
        />
      </div>
      <div className="pb-16 flex w-full gap-6">
        <div className="w-full">
          <p className="pb-4 font-medium">Other projects</p>
          <MiniCard
            title="Childhood Education Scenario in Brazil"
            content="User Research project for postgraduate course"
            redirectLink="/vet-system"
            className="mb-4"
          />
          <MiniCard
            title="Creating an App for Pet Owners"
            content="UX/UI project for the postgraduate course"
            redirectLink="/vet-system"
          />
        </div>
        <div className="w-full">
          <p className="pb-4 font-medium">Medium articles</p>
          <MiniCard
            title="Storytelling de dados"
            content="Lorem Ipsum is simply dummy "
            redirectLink="/vet-system"
            className="mb-4"
          />
          <MiniCard
            title="So, what is this thing called “Design” anyway?"
            content="A girl explaining Design with humor"
            redirectLink="/vet-system"
          />
        </div>
      </div>
      <div className="flex w-full gap-6">
        <div className="w-full">
          <p className="pb-4 font-medium">Get to know me</p>
          <AboutCard
            title="Hello, I’m Carol!"
            content="I have more than 6 years of experience in Design and Illustration, working with Product Design, Graphic Design, and Illustration for digital and printed."
            image={avatar}
            redirectLink="/vet-system"
          />
        </div>
        <div className="w-full">
          <p className="pb-4 font-medium">Testimonials</p>
          <TestimonialCard
            content="“Carol is the most aggressive learner I have ever meet with, always scaling her hard and soft skills and listening to each feedback. (...) Definitely, one of the finest designers I have ever work with; trust my words.”"
            author="Matheus Serafim"
            redirectLink="/vet-system"
          />
        </div>
      </div>
    </>
  );
}
