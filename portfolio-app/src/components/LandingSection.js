import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Abrar!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

const avatarUrl = 'https://i.pravatar.cc/150?img=7';
// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={4} align='center'>
      {/* Avatar with a given URL */}
      <Avatar src={avatarUrl} size='2xl' name='abrar' />

      {/* Greeting as a Heading */}
      <Heading as='h1' size='2xl' color='white'>
        {greeting}
      </Heading>

      {/* Bio description as multiple Heading components */}
      <Heading as='h2' size='lg' color='white'>
        {bio1}
      </Heading>
      <Heading as='h2' size='lg' color='white'>
        {bio2}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
