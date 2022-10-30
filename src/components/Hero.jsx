import * as React from 'react';
import { Flex, Avatar, Box, Container, Button } from '@chakra-ui/react';
import { MotionBox, MotionFlex } from './Motion';
import Header from './Header';

const ANIMATION_DURATION = 0.5;

const Hero = () => {
  const color = 'blue.400';

  return (
    <Container maxW="4xl" mt="16" py={16}>
      <Flex
        direction={['column-reverse', 'column-reverse', 'row']}
        justifyContent="space-between"
      >
        <MotionFlex
          position="relative"
          mr={['auto', 'auto', 16]}
          m={['auto', 'initial']}
          w={['90%', '85%', '80%']}
          maxW="800px"
          opacity="0"
          justify="center"
          direction="column"
          initial={{
            opacity: 0,
            translateX: 150,
          }}
          animate={{
            opacity: 1,
            translateX: 0,
            transition: {
              duration: ANIMATION_DURATION,
            },
          }}
        >
          <Box position="relative">
            <MotionBox whileHover={{ translateY: -5 }} width="max-content">
              <Header
                underlineColor={color}
                mt={0}
                cursor="pointer"
                width="max-content"
              >
                Hi, I’m Dwiki! 👋
              </Header>
            </MotionBox>
          </Box>
          <Box as="h2" fontSize="2xl" fontWeight="400" textAlign="left">
            My name is{' '}
            <Box as="strong" fontWeight="600">
              Dwiki
            </Box>{' '}
            and I&apos;m a{' '}
            <Box as="span" whiteSpace="nowrap">
              Front-end Web Developer
            </Box>{' '}
            from{' '}
            <Box as="span" whiteSpace="nowrap">
              Indonesia ID
            </Box>
          </Box>

          <Button
            width="193px"
            mt="6"
            bg="#FF6464"
            color="white"
            colorScheme="red"
            borderRadius="xl"
          >
            Contact Me
          </Button>
        </MotionFlex>
        <MotionBox
          opacity="0"
          initial={{
            translateX: -150,
            opacity: 0,
          }}
          animate={{
            translateX: 0,
            opacity: 1,
            transition: {
              duration: ANIMATION_DURATION,
            },
          }}
          m="auto"
          mb={[16, 16, 'auto']}
        >
          <MotionBox whileHover={{ scale: 1.2 }} rounded="full" shadow="lg">
            <Avatar
              size="2xl"
              showBorder={true}
              borderColor={color}
              src={'https://i.pravatar.cc/300?img=6'}
            />
          </MotionBox>
        </MotionBox>
      </Flex>
    </Container>
  );
};

export default Hero;
