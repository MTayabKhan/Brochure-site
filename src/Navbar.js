import {
  Link,
  Image,
  Flex,
  Button,
  HStack,
  chakra,
  Box,
  ButtonGroup,
} from '@chakra-ui/react';
import React from 'react';
import logo from './img/LanaLogo.png';

export default function Navbar() {
  return (
    <chakra.header id="header">
      <Flex w="100%" px="6" py="5" align="center" justify="space-between">
        <HStack as="logo">
          <Box class="logo">
            <Image src={logo} />
          </Box>
          <Box fontWeight={600} fontSize={'24px'}>
            Lana
          </Box>
        </HStack>
        <HStack fontWeight={600} spacing={5} fontSize={'20px'}>
          <Link>Product</Link>
          <Link>Solutions</Link>
          <Link>Pricing</Link>
          <Link>Resources</Link>
          <Link>Sign in</Link>
        </HStack>
        <ButtonGroup>
          <Button colorScheme="black" variant="outline" borderRadius={'none'}>
            Book a Demo
          </Button>
          <Button colorScheme="red" variant="solid" borderRadius={'none'}>
            Start for Free
          </Button>
        </ButtonGroup>
      </Flex>
    </chakra.header>
  );
}
