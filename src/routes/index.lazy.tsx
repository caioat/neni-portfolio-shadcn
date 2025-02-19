import { ProjectHighlightCard } from "@/components/cards/ProjectHighlightCard";
import { createLazyFileRoute } from "@tanstack/react-router";

import vetSystemCard from "../assets/vet_system_card.svg";
import acordoCertoCard from "../assets/acordo_certo_card.svg";
import postGraduationCard from "../assets/post_graduation_card.svg";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <div>captain image</div>
      <div>
        <p>Highlight projects</p>
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
    </>
  );
}
