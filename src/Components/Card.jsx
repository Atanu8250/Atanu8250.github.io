import { Box, Button, Flex, Heading, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import { BiLinkExternal } from "react-icons/bi";
import { VscGithub } from "react-icons/vsc";

const ProjectCard = ({ cardImg }) => {
  return (
    <Flex flexDirection="column" className='ProjectCard'>
      <Box className='cardImg' backgroundImage={cardImg}/>
      <Box p="15px">
        <Heading size="md">Title show</Heading>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora eos suscipit amet aut quisquam quidem quasi quo illum.</Text>
      </Box>
      <Box p="10px">
        <HStack>
          <Button colorScheme="facebook">Live Demo <BiLinkExternal/></Button>
          <Button colorScheme="facebook">Code Base <VscGithub/></Button>
        </HStack>
      </Box>
    </Flex>
  )
}

export default ProjectCard