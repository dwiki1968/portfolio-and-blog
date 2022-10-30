import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import BlogSection from '../components/BlogSection';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import ProjectSection from '../components/ProjectSection';

const Landing = () => {
  return (
    <>
      <Flex flexDir="column" minH="100vh">
        <Navbar />
        <Hero />
        <ProjectSection />
        <BlogSection />
        <Box flex={1}></Box>
        <Footer />
      </Flex>
    </>
  );
};

export default Landing;
