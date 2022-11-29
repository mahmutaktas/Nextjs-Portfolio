import React, { useState } from "react";
import { Box, Tooltip } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import Image from "next/image";

const ProjectContainer = styled(Box)(({ showAllDescription }) => ({
    display: "flex",
    width: 500,
    height: showAllDescription ? "100%" : 100,
    cursor: "pointer",
    marginBottom: "2rem",
}));

const ProjectInfoContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    marginLeft: "2rem",
}));

const ProjectTitleText = styled(Box)(({ isHovered }) => ({
    color: isHovered ? "#51cfb7" : "#8892b0",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: "1rem",
}));

const ProjectDescriptionText = styled(Box)(({ showAllDescription }) => ({
    display: "-webkit-box",
    WebkitBoxOrient: showAllDescription ? "inherit" : "vertical",
    alignItems: "center",
    color: "#A9B6DD",
    fontSize: 16,
    width: "100%",
    overflow: showAllDescription ? "visible" : "hidden",
    textOverflow: showAllDescription ? "-moz-initial" : "ellipsis",
    height: "100%",
}));

export default function ProjectItem({ project }) {
    const [isHovered, setIsHovered] = useState(false);
    const [showAllDescription, setShowAllDescription] = useState(false);
    return (
        <ProjectContainer
            showAllDescription={showAllDescription}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => window.open(project.link, "_blank")}
        >
            <Image
                src={`/images/${project.image}`}
                srcSet={`/images/${project.image}`}
                alt={"profile picture"}
                width={90}
                height={90}
            />
            <ProjectInfoContainer>
                <ProjectTitleText isHovered={isHovered}>{project.title}</ProjectTitleText>
                {showAllDescription ? (
                    <Tooltip title={"Click to see less description"} followCursor>
                        <ProjectDescriptionText
                            showAllDescription={true}
                            onClick={(e) => {
                                e.stopPropagation();
                                setShowAllDescription(false);
                            }}
                        >
                            {project.description}
                        </ProjectDescriptionText>
                    </Tooltip>
                ) : (
                    <Tooltip title={"Click to see full description"} followCursor>
                        <ProjectDescriptionText
                            showAllDescription={false}
                            onClick={(e) => {
                                e.stopPropagation();
                                setShowAllDescription(true);
                            }}
                        >
                            {project.description.split(" ").slice(0, 18).join(" ")}
                        </ProjectDescriptionText>
                    </Tooltip>
                )}
            </ProjectInfoContainer>
        </ProjectContainer>
    );
}
