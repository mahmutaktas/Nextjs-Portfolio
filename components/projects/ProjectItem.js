import React, { useState } from "react";
import { Box, Tooltip } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import Link from "next/link";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";

const ProjectContainer = styled(Box)(({ isMobile }) => ({
    display: "flex",
    width: isMobile ? "95%" : 560,
    cursor: "pointer",
    marginBottom: "2rem",
    justifyContent: isMobile ? "center" : "flex-start",
    alignItems: isMobile ? "center" : "flex-start",
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

const IconContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    marginTop: "1rem",
}));

const Icon = styled(Box)(({ theme }) => ({
    fontSize: 30,
    cursor: "pointer",
    "&:hover": {
        color: "#51cfb7",
    },
}));

export default function ProjectItem({ project, isMobile }) {
    const [isHovered, setIsHovered] = useState(false);
    const [showAllDescription, setShowAllDescription] = useState(false);
    return (
        <ProjectContainer isMobile={isMobile}>
            <Box sx={{ display: "flex", flexDirection: "column", width: 130 }}>
                <img
                    src={`/images/${project.image}`}
                    alt={"profile picture"}
                    width={120}
                    height={90}
                    style={{ border: "3px solid #A9B6DD", borderRadius: 4 }}
                />
                <IconContainer>
                    {project.github ? (
                        <Tooltip title="Github">
                            <Link href={project.github} target="_blank">
                                <Icon>
                                    <AiFillGithub></AiFillGithub>
                                </Icon>
                            </Link>
                        </Tooltip>
                    ) : null}

                    {project.github && project.website ? (
                        <Box sx={{ width: "1rem", visibility: "hidden" }}></Box>
                    ) : null}

                    {project.website ? (
                        <Tooltip title="Website">
                            <Link href={project.website} target="_blank">
                                <Icon>
                                    <CgWebsite></CgWebsite>
                                </Icon>
                            </Link>
                        </Tooltip>
                    ) : null}
                </IconContainer>
            </Box>
            <ProjectInfoContainer>
                <ProjectTitleText
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    isHovered={isHovered}
                >
                    {project.title}
                </ProjectTitleText>
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
