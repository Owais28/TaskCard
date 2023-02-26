import React from "react";
import { MobileContainer } from "../Container/MobileContainer";
import { IconButton, Stack, Typography } from "@mui/material";
import {
  ImageOutlined,
  ListAltRounded,
  SearchOutlined,
} from "@mui/icons-material";
import { VerticalContainer } from "../Container/VerticalContainer";
import { ProjectCard } from "../Card/ProjectCard";
import { useState } from "react";

export const ProjectSection = () => {
  const [withImg, setWithImg] = useState(false);
  return (
    <MobileContainer>
      <Stack
        direction="row"
        alignItems="center"
        px={2}
        py={1}
        justifyContent="space-between"
      >
        <Typography fontWeight="bold" fontFamily="Rubik" fontSize="small">
          My Project
        </Typography>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-evenly"
        >
          <IconButton>
            <SearchOutlined fontSize="small" color="black" />
          </IconButton>
          <IconButton onClick={(e) => setWithImg(true)}>
            <ImageOutlined
              fontSize="small"
              color={withImg == true ? "blue" : "black"}
            />
          </IconButton>
          <IconButton onClick={(e) => setWithImg(false)}>
            <ListAltRounded
              fontSize="small"
              color={withImg == false ? "blue" : "black"}
            />
          </IconButton>
        </Stack>
      </Stack>
      <VerticalContainer>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </VerticalContainer>
    </MobileContainer>
  );
};
