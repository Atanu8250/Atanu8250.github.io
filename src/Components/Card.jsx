import { Badge, Box, Button, Flex, Heading, HStack, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { BiLinkExternal } from "react-icons/bi";
import { VscGithub } from "react-icons/vsc";

const ProjectCard = ({ title, type, image, description, techStack, github, liveDemo }) => {
  return (
    <Flex flexDirection="column" className='ProjectCard'>
      <Box className='cardImg' backgroundImage={image} />
      <Box>
        <Flex>
          <Heading size="md">{title}</Heading>
          <Badge variant='outline' colorScheme='green'>{type}</Badge>
        </Flex>
        <Text>Tech Stacks: {
          techStack.join(", ")
        }</Text>
        <Text>{description}</Text>
      </Box>
      <Box>
        <HStack>
          <Link href={liveDemo} target="_blank">
            <Button>Live Demo <BiLinkExternal /></Button>
          </Link>
          <Link href={github} target="_blank">
            <Button>Code Base <VscGithub /></Button>
          </Link>
        </HStack>
      </Box>
    </Flex>
  )
}

export default ProjectCard