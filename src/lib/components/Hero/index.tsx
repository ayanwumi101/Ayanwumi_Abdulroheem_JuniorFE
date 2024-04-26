import { Box, Image, Flex, VStack, Text, Heading } from '@chakra-ui/react';

import type { CarouselProps } from '~/lib/utilities/schema';

const Hero = ({ image, title, description }: CarouselProps) => {
  return (
    <Box
      w='100%'
      h="100vh"
      px="50px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgImage={image}
      backgroundRepeat='no-repeat'
      backgroundSize='cover'
    >
      <VStack spacing="30px" alignItems="center" justifyContent="center" maxW='700px' color='#FFFF'>
        <Box textAlign="center" color="text.500">
          <Heading fontSize={40} fontWeight={900} mb="15px" lineHeight='45px'>
            {title}
          </Heading>
          <Text fontSize={19} lineHeight="38px">
            {description}
          </Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default Hero;
