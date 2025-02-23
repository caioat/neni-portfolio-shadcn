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
          redirectLink="https://carolinamiguel.medium.com/developing-a-veterinary-system-for-pet-anjo-acquired-by-one-of-the-largest-pet-shops-in-brazil-fe230521345b"
        />
        <br />
        <ProjectHighlightCard
          title="How a Redesign Increased Our Company’s Conversion by 15%"
          content="Fintech Company"
          image={acordoCertoCard}
          redirectLink="https://carolinamiguel.medium.com/how-a-simple-redesign-increased-our-companys-conversion-by-15-7a3e99fa1e46"
        />
        <br />
        <ProjectHighlightCard
          title="Creating a platform to help donors and volunteers"
          content="Final project for the postgraduate course"
          image={postGraduationCard}
          redirectLink="https://medium.com/design-bootcamp/creating-a-platform-to-help-donors-and-volunteers-find-ngos-that-align-with-their-profile-db371852a7f8"
        />
      </div>
      <div className="pb-16 flex w-full gap-6">
        <div className="w-full">
          <p className="pb-4 font-medium">Other projects</p>
          <MiniCard
            title="Childhood Education Scenario in Brazil"
            content="User Research project for postgraduate course"
            redirectLink="https://carolinamiguel.medium.com/the-early-childhood-education-scenario-in-brazil-during-the-2020-pandemic-case-study-974c10041e51"
            className="mb-4"
          />
          <MiniCard
            title="Creating an App for Pet Owners"
            content="UX/UI project for the postgraduate course"
            redirectLink="https://carolinamiguel.medium.com/creating-an-app-that-connects-pet-owners-and-veterinarians-case-study-aac77693542c"
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
            redirectLink="https://carolinamiguel.medium.com/esse-tal-de-design-5c38ac60c905"
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
            redirectLink="/aboutMe"
          />
        </div>
        <div className="w-full">
          <p className="pb-4 font-medium">Testimonials</p>
          <TestimonialCard
            content="“Carol is the most aggressive learner I have ever meet with, always scaling her hard and soft skills and listening to each feedback. (...) Definitely, one of the finest designers I have ever work with; trust my words.”"
            author="Matheus Serafim"
            redirectLink="https://www.linkedin.com/in/carolmiguel/details/recommendations/?detailScreenTabIndex=0"
          />
        </div>
      </div>
    </>
  );
}
