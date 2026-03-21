import { Box } from '@chakra-ui/react'
import Aos from 'aos';
import 'aos/dist/aos.css'

import Landing from '../Components/Landing';
import AboutMe from '../Components/AboutMe';
import EducationalHistory from '../Components/EducationalHistory';
import TechnicalSkills from '../Components/TechnicalSkills';
import ProfessionalExperience from '../Components/ProfessionalExperience';
import Projects from '../Components/Projects';
import GithubStatistics from '../Components/GithubStatistics';
import ContactMe from '../Components/ContactMe';
import Footer from '../Components/Footer';
import { useEffect } from 'react';


const Home = () => {

    useEffect(() => {
        // * it's from Aos library to to use scroll designing
        Aos.init()
    }, [])

    return (
        <Box>
            <Landing />

            <AboutMe />

            <EducationalHistory />

            <TechnicalSkills />

            <ProfessionalExperience />

            <Projects />

            <GithubStatistics />

            <ContactMe />

            <Footer />
        </Box >
    )
}

export default Home
