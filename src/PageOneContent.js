import {
  Box,
  Flex,
  chakra,
  Text,
  Image,
  FormControl,
  Input,
  FormHelperText,
  Button,
  Heading,
  Spacer,
  Center,
  Card,
  CardBody,
} from '@chakra-ui/react';
import image1 from './img/image1.PNG';

export default function PageOneContent() {
  return (
    <chakra.body id="body">
      <Center>
        <Flex maxWidth="70%">
          <Box maxWidth="50%" m={10}>
            <Text letterSpacing="20px" fontSize="95px" fontWeight="bold" pb={2}>
              Autopilot
            </Text>
            <Text fontSize="28px" maxWidth="90%" lineHeight="4rem" pb={4}>
              Free up your team from the burdens of creating, managing and
              finding trusted company information.
            </Text>
            <FormControl maxWidth="80%">
              <Flex>
                <Input
                  type="email"
                  variant="flushed"
                  height={12}
                  placeholder="name@company.com"
                />
                <Button
                  colorScheme="red"
                  size={'lg'}
                  borderRadius={'none'}
                  fontWeight={400}
                >
                  Sign up for free
                </Button>
              </Flex>
              <FormHelperText fontWeight="500" lineHeight="200%">
                Single source of truth is finally possible with Slite's
                collaborative knowledge base, powered by AI
              </FormHelperText>
            </FormControl>
          </Box>
          <Box flex={1}>
            <Image
              boxSize="100%"
              src={image1}
              alt="Johnny Silverhand"
              fit="scale-down"
            />
          </Box>
        </Flex>
      </Center>
      <Center>
        <Flex width="60%" alignItems="center" gap={1}>
          <Box p={2}>
            <Heading letterSpacing={2}> 200,000 +</Heading>
          </Box>
          <Spacer />
          <Box>
            <Text fontSize={24} letterSpacing={1} fontWeight={400}>
              growing startups use Slights as their single source of truth
            </Text>
          </Box>
        </Flex>
      </Center>
      <br></br>
      <Center paddingBottom={100}>
        <Center>
          <Card width={200} height={150}>
            <CardBody display={'flex'}>
              <Image src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2019/09/attachment_72779759-e1568296955544.jpg?auto=format&q=60&fit=max&w=930" />
            </CardBody>
          </Card>
        </Center>
        <Card width={200} height={150}>
          <CardBody>
            <Center>
              <Image src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2019/09/attachment_69358233-e1567625444355.jpg?auto=format&q=60&fit=max&w=930" />
            </Center>
          </CardBody>
        </Card>
        <Card width={200} height={150}>
          <CardBody>
            <Image src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2019/09/attachment_109861736-e1567623620590-1.png?auto=format&q=60&w=2000&h=862&fit=crop&crop=faces" />
          </CardBody>
        </Card>
        <Card width={200} height={150}>
          <CardBody>
            <Image src="https://i.ebayimg.com/images/g/VzEAAOSw9LJkSsZv/s-l1200.webp" />
          </CardBody>
        </Card>
        <Card width={200} height={150}>
          <CardBody>
            <Image src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2019/09/attachment_86984283-e1567625508357.jpg?auto=format&q=60&fit=max&w=930" />
          </CardBody>
        </Card>
      </Center>
    </chakra.body>
  );
}
