import { Box, Grid } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import { data } from "../data/data";
import Container from "../components/Container";
import ProjectItem from "../components/projects/ProjectItem";

const PageContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    marginLeft: "10vw",
    marginTop: "5vh",
}));

export default function Projects() {
    return (
        <Container title={`${data.name} | Projects`}>
            <PageContainer>
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
            </PageContainer>
        </Container>
    );
}
