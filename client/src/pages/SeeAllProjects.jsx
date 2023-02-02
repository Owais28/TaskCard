import React from "react";
import { MobileContainer } from "../components/Container/MobileContainer";
import { ProjectCard } from "../components/Card/ProjectCard";
import { VerticalContainer } from "../components/Container/VerticalContainer";
import { NavigationalAppBar } from "../components/NavigationalAppBar";

export default function SeeAllProjects(props) {
  return (
    <MobileContainer>
      <NavigationalAppBar title={"Recent Project"} />
      <VerticalContainer>
        {[...Array(15)].map((item, index) => (
          <ProjectCard
            priority={1}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt esse amet consectetur iste labore similique neque voluptatibus quo sed repellendus officia eaque error, facere rerum architecto laboriosam rem impedit beatae"
            }
          />
        ))}
      </VerticalContainer>
    </MobileContainer>
  );
}
