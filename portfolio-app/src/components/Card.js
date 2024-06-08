import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack
      spacing={4}
      backgroundColor='white'
      borderRadius='lg'
      boxShadow='md'
      align='center'
    >
      <Image
        src={imageSrc}
        alt={title}
        borderRadius='lg'
      />
      <VStack align='start' spacing={4} color='black' p={4}>
        <Heading size='md'>{title}</Heading>
        <Text>{description}</Text>
        <HStack>
          <Text>See more</Text>
          <FontAwesomeIcon icon={faArrowRight} size='1x' />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
