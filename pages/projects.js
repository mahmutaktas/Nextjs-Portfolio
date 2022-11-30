import { Box, Grid } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import { data } from "../data/data";
import Container from "../components/Container";
import ProjectItem from "../components/projects/ProjectItem";
import useMediaQuery from "@mui/material/useMediaQuery";

const PageContainer = styled(Box)(({ isMobile }) => ({
    display: "flex",
    flexDirection: "row",
    marginLeft: isMobile ? "0px" : "10vw",
    marginBottom: isMobile ? "3rem" : "1rem",
    padding: isMobile ? "2rem" : "1rem",
}));

const PageTitle = styled(Box)(({ isMobile }) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    color: "#ccd6f6",
    fontSize: 40,
    fontWeight: "bold",
    marginTop: isMobile ? "11vh" : "12vh",
    marginBottom: isMobile ? "1rem" : "2rem",
}));

export default function Projects() {
    const isMobile = useMediaQuery("(max-width:600px)");

    return (
        <Container title={`${data.name} | Projects`}>
            <PageTitle isMobile={isMobile}>Projects</PageTitle>
            <PageContainer isMobile={isMobile}>
                {isMobile ? (
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                        {data.projects.map((project, idx) => (
                            <ProjectItem key={idx} project={project} isMobile={isMobile} />
                        ))}
                    </Box>
                ) : (
                    <>
                        <Box sx={{ display: "flex", flexDirection: "column", marginRight: "7rem" }}>
                            {data.projects
                                .filter((project, idx) => idx % 2 == 0)
                                .map((project, idx) => (
                                    <ProjectItem key={idx} project={project} />
                                ))}
                        </Box>
                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                            {data.projects
                                .filter((project, idx) => idx % 2 == 1)
                                .map((project, idx) => (
                                    <ProjectItem key={idx} project={project} />
                                ))}
                        </Box>
                    </>
                )}
            </PageContainer>
        </Container>
    );
}
