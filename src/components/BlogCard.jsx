import {
  Avatar,
  AvatarGroup,
  Box,
  Container,
  Divider,
  HStack,
  Link,
  Stack,
  Tag,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { Fragment } from 'react';

const BlogCard = ({ articles }) => {
  return (
    <VStack spacing={8}>
      {articles.map((article, index) => (
        <Fragment key={index}>
          <Stack direction="column" spacing={4} pb={4} w="full">
            <HStack spacing={2} mb={1}>
              {article.tags.map(cat => (
                <Tag
                  key={cat}
                  // colorScheme={useColorModeValue('blackAlpha', 'gray')}
                  borderRadius="full"
                >
                  {cat}
                </Tag>
              ))}
            </HStack>
            <Box textAlign="left">
              <Link
                fontSize="xl"
                lineHeight={1.2}
                fontWeight="bold"
                w="100%"
                _hover={{ color: 'blue.400', textDecoration: 'underline' }}
              >
                {article.title}
              </Link>
              <Text
                fontSize="md"
                color="gray.500"
                noOfLines={2}
                lineHeight="normal"
              >
                {article.content}
              </Text>
            </Box>
            <Box>
              <AvatarGroup size="sm" max={3} mb={1}>
                <Avatar name="Ryan Florence" src={article.userAvatar} />
                <Avatar
                  name="Segun Adebayo"
                  src="https://bit.ly/sage-adebayo"
                />
                <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
              </AvatarGroup>
              <Stack
                justify="space-between"
                direction={{ base: 'column', sm: 'row' }}
              >
                <Box>
                  <Text fontSize="sm" fontWeight="bold">
                    {article.usernames}
                  </Text>
                  <Text fontSize="sm" color="gray.500">
                    {article.created_at}
                  </Text>
                </Box>
              </Stack>
            </Box>
          </Stack>
          <Divider />
        </Fragment>
      ))}
    </VStack>
  );
};

export default BlogCard;
