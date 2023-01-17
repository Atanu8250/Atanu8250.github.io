import { Box, Button, Flex, Heading, HStack, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { BiLinkExternal } from "react-icons/bi";
import { VscGithub } from "react-icons/vsc";

const ProjectCard = ({ id, title, image, description, techStack, github, liveDemo }) => {
  return (
    <Flex flexDirection="column" className='ProjectCard'>
      <Box className='cardImg' backgroundImage={image} />
      <Box p="15px">
        <Heading size="md">{title}</Heading>
        <Text color="whiteAlpha.400">Tech Stacks: {
          techStack.join(", ")
        }</Text>
        <Text>{description}</Text>
      </Box>
      <Box p="10px">
        <HStack>
          <Link href={liveDemo} target="_blank">
            <Button colorScheme="facebook">Live Demo <BiLinkExternal /></Button>
          </Link>
          <Link href={github} target="_blank">
            <Button colorScheme="facebook">Code Base <VscGithub /></Button>
          </Link>
        </HStack>
      </Box>
    </Flex>
  )
}

export default ProjectCard