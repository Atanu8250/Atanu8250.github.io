import { Box, Button, Flex, Heading, HStack, Text } from "@chakra-ui/react";
import Svg1 from "./Svg1";
import Resume from '../Resume/Atanu_Karmakar_Resume.pdf'
import { LuCloudDownload } from "react-icons/lu";


const Landing = () => {
    return (
        <Box id='home'>
            <Flex flexDirection={['column-reverse', 'column-reverse', 'row']} m="auto" justifyContent="space-around" alignItems="center" h="100%">
                <Box data-aos="fade-down">
                    <Heading>Hey! <span className='themeText'>I'm</span></Heading>
                    <Box className='content'>
                        <Heading fontSize="3.3em" className='text' data-text="Atanu Karmakar"><span className='themeText'>Atanu Karmakar</span></Heading>
                    </Box>
                    <Text>A seasoned Software Developer passionate about building innovative, secure, lightweight web applications.</Text>
                    <HStack className='hireMe' onClick={() => { window.open("https://drive.google.com/file/d/1jBa-w_YRCtrqAD7xrFaRw20mwkTO6QhH/view", '_blank') }}>
                        <a href={Resume} download="Atanu-Karmakar-Resume">
                            <Button>Resume <LuCloudDownload /></Button>
                        </a>
                    </HStack>
                </Box>
                <Box data-aos="fade-down">
                    <Svg1 />
                </Box>
            </Flex>
        </Box>
    );
}

export default Landing;
