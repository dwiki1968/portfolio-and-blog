import {
  Avatar,
  Box,
  Flex,
  HStack,
  IconButton,
  Link,
  Stack,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Link as Link2 } from 'react-router-dom';

const navLinks = [
  { name: 'Project', path: '/project' },
  { name: 'Blog', path: '/blog' },
];

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      width="100%"
      position="fixed"
      bg={useColorModeValue('white', 'gray.800')}
      zIndex={99}
      boxShadow="md"
    >
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
        maxW={'4xl'}
        mx="auto"
        px={4}
      >
        <IconButton
          size="md"
          icon={isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
          aria-label="Open Menu"
          display={['inherit', 'inherit', 'none']}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems="center">
          <Avatar
            as={Link2}
            to="/"
            size="sm"
            showBorder={true}
            borderColor="blue.400"
            rounded="full"
            src="https://i.pravatar.cc/300?img=6"
          />
          <HStack
            as="nav"
            spacing={1}
            display={{ base: 'none', md: 'flex' }}
            alignItems="center"
          >
            {navLinks.map((link, index) => (
              <NavLink key={index} {...link} onClose={onClose} />
            ))}
          </HStack>
        </HStack>

        <ColorModeSwitcher />
      </Flex>

      {/* Mobile Screen Links */}
      {isOpen ? (
        <Box pb={4} display={['inherit', 'inherit', 'none']}>
          <Stack as="nav" spacing={2}>
            {navLinks.map((link, index) => (
              <NavLink key={index} {...link} onClose={onClose} />
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}

const NavLink = ({ name, path, onClose }) => {
  const link = {
    bg: useColorModeValue('gray.200', 'gray.700'),
    color: useColorModeValue('blue.500', 'blue.200'),
  };

  return (
    <Link
      as={Link2}
      fontWeight="medium"
      to={path}
      px={3}
      py={1}
      lineHeight="inherit"
      rounded="md"
      _hover={{
        textDecoration: 'none',
        bg: link.bg,
        color: link.color,
      }}
      onClick={() => onClose()}
    >
      {name}
    </Link>
  );
};
