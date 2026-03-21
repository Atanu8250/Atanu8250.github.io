import { Box, Heading } from '@chakra-ui/react';
import { projects } from '../Utils/data';
import ProjectCard from './Card';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 2200 },
        items: 5
    },
    largeDesktop: {
        breakpoint: { max: 2200, min: 1920 },
        items: 4
    },
    desktop: {
        breakpoint: { max: 1920, min: 1075 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1075, min: 780 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 780, min: 0 },
        items: 1
    }
};

const Projects = () => {
    return (
        <Box id="projects">
            <Heading textAlign="center">Featured <span className='themeText'>Projects</span></Heading>
            <Carousel
                containerClass="carousel-container"
                swipeable={true}
                draggable={true}
                showDots={false}
                keyBoardControl={true}
                responsive={responsive}
                infinite={false}>
                {
                    projects.map((project) => <ProjectCard key={project.id} {...project} />)
                }
            </Carousel>
        </Box>
    );
};

export default Projects;