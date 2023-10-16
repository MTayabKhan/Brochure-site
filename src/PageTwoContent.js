import {
  chakra,
  Flex,
  Heading,
  Text,
  Box,
  Image,
  VStack,
  Slide,
  SlideFade,
  Divider,
  Center,
  Spacer,
} from '@chakra-ui/react';
import { useState } from 'react';
import LAKnight from './img/LA Knight.jpg';
import Ospreay from './img/Ospreay.jpeg';
import BryanDanielson from './img/BryanDanielson.jpg';
import { useDisclosure } from '@chakra-ui/react';

function SwitchPhoto() {
  const [photo, setPhoto] = useState(Ospreay);
  const { isOpen, onToggle } = useDisclosure();
  function dimDanielson() {
    document.getElementById('danielson').style.color = 'grey';
    document.getElementById('danielson').style.borderBottom = null;
  }

  function dimLaKnight() {
    document.getElementById('laKnight').style.color = 'grey';
    document.getElementById('laKnight').style.borderBottom = null;
  }

  function dimOspreay() {
    document.getElementById('ospreay').style.color = 'grey';
    document.getElementById('ospreay').style.borderBottom = null;
  }

  const updateOspreay = () => {
    onToggle();
    setPhoto(photo => {
      return Ospreay;
    });
    document.getElementById('ospreay').style.color = 'white';
    document.getElementById('ospreay').style.borderBottom = 'red 2px solid';
    dimDanielson();
    dimLaKnight();
  };

  const updateLAKnight = () => {
    setPhoto(photo => {
      return LAKnight;
    });
    document.getElementById('laKnight').style.color = 'white';
    document.getElementById('laKnight').style.borderBottom = 'red 2px solid';
    dimOspreay();
    dimDanielson();
  };

  const updateDanielson = () => {
    setPhoto(photo => {
      return BryanDanielson;
    });
    document.getElementById('danielson').style.color = 'white';
    document.getElementById('danielson').style.borderBottom = 'red 2px solid';
    dimLaKnight();
    dimOspreay();
  };
  return (
    <>
      <VStack alignItems={'baseline'}>
        <Text
          id="ospreay"
          fontSize={30}
          textColor={'GrayText'}
          letterSpacing={2}
          onClick={updateOspreay}
        >
          Ospreay
        </Text>
        <Spacer />
        <Text
          id="laKnight"
          fontSize={30}
          textColor={'GrayText'}
          letterSpacing={2}
          onClick={updateLAKnight}
        >
          LA Knight
        </Text>
        <Spacer />

        <Text
          id="danielson"
          fontSize={30}
          textColor={'GrayText'}
          letterSpacing={2}
          onClick={updateDanielson}
        >
          Bryan Danielson
        </Text>
      </VStack>
      <Spacer />
      <Image id="Photo" src={photo} fit="scale-down" width="50%" />
    </>
  );
}

export default function PageTwoContent() {
  return (
    <chakra.body id="body" bg="background.100" color="white">
      <Box maxWidth="70%" margin={'auto'} textAlign={'center'} paddingTop={100}>
        <Heading letterSpacing="10px" fontWeight="bold" pb={2}>
          Designed for all types of knowledge
        </Heading>
        <Text fontWeight={300}>
          From onboarding guides to all hands notes, Slite is flexible to easily
          document all types of company knowledge with your teammates.
        </Text>
      </Box>
      <br></br>
      <Center maxWidth="50%" margin={'auto'} textAlign={'center'}>
        <SwitchPhoto />
      </Center>
    </chakra.body>
  );
}
