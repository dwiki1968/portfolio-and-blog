import { Button, Container, Heading, HStack } from '@chakra-ui/react';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import BlogCard from './BlogCard';

const articles = [
  {
    id: 1,
    tags: ['News'],
    title: 'Build a Modern User Interface with Chakra UI',
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. simply dummy text...`,
    userAvatar:
      'https://images.unsplash.com/photo-1606513542745-97629752a13b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
    usernames: 'Danilo, Sam, Olivier, and more.',
    created_at: 'Wed Apr 06 2022',
  },
  {
    id: 2,
    tags: ['Web Development', 'Video'],
    title: 'The Complete Guide to Ruby on Rails Encrypted Credentials',
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    userAvatar:
      'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&auto=format&fit=crop&w=334&q=80',
    usernames: 'Timo Delangle, Olivier, and more.',
    created_at: 'Sun Apr 03 2022',
  },
];

const BlogSection = () => {
  return (
    <>
      <Container maxW="4xl" py={16}>
        <HStack justifyContent="space-between" alignItems="center" mb={8}>
          <Heading as="h2" fontSize="24px">
            Recent Posts
          </Heading>
          <Button
            variant="link"
            colorScheme="teal"
            color="#00A8CC"
            fontSize="md"
            rightIcon={<FiArrowRight />}
          >
            View all
          </Button>
        </HStack>
        <BlogCard articles={articles} />
      </Container>
    </>
  );
};

export default BlogSection;
