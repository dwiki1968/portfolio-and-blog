import { Box, Container, Flex } from '@chakra-ui/react';
import React from 'react';
import BlogCard from '../components/BlogCard';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { MotionBox } from '../components/Motion';
import Navbar from '../components/Navbar';
import PaginationContainer from '../components/Pagination';
import articleAll from '../data/article-all';

const BlogPost = () => {
  console.log('articleAll', articleAll);
  return (
    <>
      <Flex flexDir="column" minH="100vh">
        <Navbar />

        <Container maxW="4xl" mt={16}>
          <MotionBox
            whileHover={{ translateY: -5 }}
            width="max-content"
            mb={16}
          >
            <Header
              underlineColor="blue.400"
              cursor="pointer"
              width="max-content"
            >
              Blog Post
            </Header>
          </MotionBox>
          <BlogCard articles={articleAll()} />
        </Container>

        <PaginationContainer />
        <Box flex={1}></Box>
        <Footer />
      </Flex>
    </>
  );
};

export default BlogPost;
