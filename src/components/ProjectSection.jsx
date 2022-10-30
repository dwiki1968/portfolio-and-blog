import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import projectList from '../data/project-list';
import ProjectCard from './ProjectCard';

const ProjectSection = () => {
  return (
    <Box bg={useColorModeValue('#EDF7FA', 'gray.700')} py={16} w="full">
      <Container maxW="4xl" mx="auto">
        <HStack justifyContent="space-between" alignItems="center" mb={8}>
          <Heading as="h2" fontSize="24px">
            Recent Project
          </Heading>
          <Button
            as={Link}
            to="/project"
            variant="link"
            colorScheme="teal"
            color="#00A8CC"
            fontSize="md"
            rightIcon={<FiArrowRight />}
          >
            View all
          </Button>
        </HStack>
        <SimpleGrid columns={[1, 3]} spacing={4}>
          {projectList().map((repo, index) => (
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
    </Box>
  );
};

export default ProjectSection;
