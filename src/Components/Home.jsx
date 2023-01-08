import { Box, Center, Flex, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
import GitHubCalendar from 'react-github-calendar';
import ReactTooltip from 'react-tooltip'


import { useEffect } from 'react';
import ProjectCard from './Card';
import img1 from '../Images/nifty.png'
import Contact_me from './Contact_me';
import Svg from './Svg1';

const Home = () => {
    useEffect(() => {
        Aos.init()
    }, [])


    return (
        <Box>
            <Box id='home'>
                <Flex flexDirection={['column-reverse', 'column-reverse', 'row']} m="auto" justifyContent="space-around" alignItems="center" h="100%" zIndex="3">
                    <Box maxW="500px">
                        <Heading>I'm Atanu k.</Heading>
                        <Text>An ambitious Learner, very much qurius about tech world. Currently learning Mern-stack in Masai School, Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, doloribus! Assumenda laborum inventore, exercitationem quod sequi provident commodi quisquam nam.</Text>
                    </Box>
                    <Box>
                        <Image
                            borderRadius='full'
                            boxSize='300px'
                            src='https://bit.ly/dan-abramov'
                            alt='Dan Abramov' />
                    </Box>
                </Flex>
            </Box>

            {/* Technical Skills section */}



            {/* show projects */}
            <Box>
                <Heading>Featured Projects:</Heading>
                <Grid gridTemplateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(3, 1fr)"]} className='projects'>
                    <GridItem data-aos="zoom-in">
                        <ProjectCard cardImg={img1} />
                    </GridItem>
                    <GridItem data-aos="zoom-in">
                        <ProjectCard cardImg={img1} />
                    </GridItem>
                    <GridItem data-aos="zoom-in">
                        <ProjectCard cardImg={img1} />
                    </GridItem>
                    <GridItem data-aos="zoom-in">
                        <ProjectCard cardImg={img1} />
                    </GridItem>
                    <GridItem data-aos="zoom-in">
                        <ProjectCard cardImg={img1} />
                    </GridItem>
                    <GridItem data-aos="zoom-in">
                        <ProjectCard cardImg={img1} />
                    </GridItem>
                </Grid>
            </Box>


            {/* Github Statistics */}

            <Center>
                <Image src="https://github-readme-stats.vercel.app/api/top-langs/?username=Atanu8250&layout=compact&hide_border=true&theme=radical" alt="Most used languages" />
            </Center>

            <Center className='github-stats'>
                <Image src="https://github-readme-stats.vercel.app/api?username=Atanu8250&show_icons=true&locale=en&layout=compact&hide_border=true&theme=radical" alt="Github stats" />
                <Image src="https://github-readme-streak-stats.herokuapp.com/?user=Atanu8250&layout=compact&hide_border=true&theme=radical" alt="Current Streaks" />
            </Center>

            <Center><GitHubCalendar username="atanu8250" children={<ReactTooltip html />} /></Center>

            <Contact_me />

            

        </Box>
    )
}

export default Home