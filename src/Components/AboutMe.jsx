import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import Svg3 from './Svg3';

const AboutMe = () => {
    return (
        <Box id="aboutMe">
            <Heading>About <span className='themeText'>me</span></Heading>
            <Flex flexDirection={['column-reverse', 'column-reverse', 'column-reverse', 'row']} alignItems="center" h="100%">
                <div data-aos="fade-right">
                    <Svg3 />
                </div>

                <Flex data-aos="fade-left">
                    <Flex w="100%" gap="10%" justifyContent="center">
                        <Image
                            borderRadius='full'
                            boxSize='250px'
                            src='/portfolio-profile-pic.webp'
                            alt='Atanu Karmakar Avatar' />
                        <Svg3 />
                    </Flex>

                    <Box>
                        <Text>An ambitious and self-motivated web developer with a considerable technical skill who possesses self-discipline and ability to work with minimum of super vision. Able to play a key role in website development to ensure maximum accessibility, user experience and usability.A  quick-learner who can absorb new ideas and can communicate clearly and effectively. Have 1200+ hours of coding experience and solved around 600+ DSA problems.</Text>
                    </Box>
                </Flex>
            </Flex>
        </Box>
    );
}

export default AboutMe;
