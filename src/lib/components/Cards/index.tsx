import { Box, Image, Heading, Text, Stack, Flex, Button, VStack, Avatar } from '@chakra-ui/react';
import { CapsuleCardProps } from '~/lib/utilities/schema';
import { ButtonComponent } from '../Button';





const CapsuleCard = ({id, type, status, serial, onClick }: CapsuleCardProps) => {
  return (
    <Box
      w="100%"
      py='4'
      px='6'
      bg="#ededed"
      borderRadius="12px"
      boxShadow='md'
      id={id}
    >
      <Flex alignItems='center' justifyContent='space-between' flexWrap='wrap'>
        <Avatar size='md' src='https://live.staticflickr.com/65535/52761468185_c03c55d516_b.jpg' />
        <Text>ID: {id}</Text>
        <Text>Type: {type}</Text>
        <Text>Status: {status}</Text>
        <Text>Serial No: {serial}</Text>
        <ButtonComponent 
          width='150px'
          text='See Details'
          bg='lightgray'
          color='black'
          onClick={onClick}
        />
      </Flex>
    </Box>
  );
};

export default CapsuleCard;
