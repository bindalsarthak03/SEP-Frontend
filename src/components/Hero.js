import {
    Box,
    Button,
    Flex,
    Heading,
    Image,
    Text,
    useColorMode,
    useColorModeValue,
  } from '@chakra-ui/react';
  import React from 'react';
  import { IoIosCreate } from 'react-icons/io';
  import { HiOutlineCursorClick } from 'react-icons/hi';
  import { Link } from 'react-router-dom';
  const Hero = () => {
    const { colorMode } = useColorMode();
    return (
      <Flex direction={'column'} justifyContent={'center'} align={'center'}>
        <Heading
          mb={6}
          fontSize={{ base: '4xl', md: '6xl' }}
          fontWeight="bold"
          lineHeight="none"
          letterSpacing={{ base: 'normal', md: 'tight' }}
          color={useColorModeValue('gray.900', 'gray.100')}
        >
        Your Code is a {' '}
          <Text
            display={{ base: 'block', lg: 'inline' }}
            w="full"
            bgClip="text"
            bgGradient="linear(to-r, green.400,purple.500)"
            fontWeight="extrabold"
          >
            Piece of Shit
          </Text>{' '}
          and you know it.
        </Heading>
        <Text
          px={{ base: 0, lg: 24 }}
          mb={6}
          fontSize={{ base: 'lg', md: 'xl' }}
          color={useColorModeValue('gray.600', 'gray.300')}
        >
          So create a room and share it to your friend and watch them fix your code. 
        </Text>
        <Flex justifyContent={'center'} m={10}>
          <Link to="/quizzes">
            <Button
              variantColor="blue"
              colorScheme={'red'}
              rightIcon={<HiOutlineCursorClick />}
              size={'lg'}
            >
              Create Room 
            </Button>
          </Link>
        </Flex>
        <Flex justifyContent={'center'}>
          <Box
            width={['100%', '100%', '100%', '75%']}
            maxWidth={'1000px'}
            borderRadius={[2, 10, 10, 10]}
            boxShadow={
              colorMode === 'light'
                ? 'rgba(0, 0, 0, 0.75) 0px 7px 29px 0px'
                : 'rgba(255, 255, 255, 0.2) 0px 7px 29px 0px'
            }
            m={10}
          >
            <Image
              src="hero.png"
              alt="Hero Image"
              borderRadius={[2, 10, 10, 10]}
            />
          </Box>
        </Flex>
      </Flex>
    );
  };
  
  export default Hero;