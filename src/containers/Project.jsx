import { Box, Container, Flex, Heading, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { MotionBox } from '../components/Motion';
import Navbar from '../components/Navbar';
import PaginationContainer from '../components/Pagination';
import ProjectCard from '../components/ProjectCard';
import projectAll from '../data/project-all';

const Project = () => {
  return (
    <>
      <Flex flexDir="column" minH="100vh">
        <Navbar />

        <Container maxW="4xl" mt={16}>
          <MotionBox whileHover={{ translateY: -5 }} width="max-content">
            <Header
              underlineColor="blue.400"
              cursor="pointer"
              width="max-content"
            >
              Project
            </Header>
          </MotionBox>
          <SimpleGrid columns={[1, 3]} spacing={4} my={16}>
            {projectAll().map((repo, index) => (
              <ProjectCard
                key={index}
                title={repo.title}
                description={repo.description}
                cover={repo.cover}
                techStack={repo.techStack}
                url={repo.url}
                stargazers_count={repo.stargazers_count}
              />
            ))}
          </SimpleGrid>
        </Container>
        <PaginationContainer />
        <Box flex={1}></Box>
        <Footer />
      </Flex>
    </>
  );
};

export default Project;
