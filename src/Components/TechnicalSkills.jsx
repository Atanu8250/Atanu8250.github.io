import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { skills } from '../Utils/data';

const TechnicalSkills = () => {
    return (
        <Box id="skills">
            <Heading>
                Technical
                <span className="themeText"> Skills</span>
            </Heading>
            <Flex className='skills'>
                <Flex>
                    <Heading size="lg">Front<span className='themeText'>end</span></Heading>
                    <Box>
                        {
                            skills.filter((el) => el.tag === "frontend").map(skill => <Box
                                key={skill.id}
                                className="skill"
                                data-aos="zoom-in-up">
                                <Box>
                                    <Image src={skill.icon} alt={`${skill.title} icon`} />
                                </Box>
                                <Text>{skill.title}</Text>
                            </Box>)
                        }
                    </Box>
                </Flex>
                <Flex>
                    <Heading size="lg">Back<span className='themeText'>end</span></Heading>
                    <Box>
                        {
                            skills.filter((el) => el.tag === "backend").map(skill => <Box
                                key={skill.id}
                                className="skill"
                                data-aos="zoom-in-down">
                                <Box>
                                    <Image src={skill.icon} alt={`${skill.title} icon`} />
                                </Box>
                                <Text>{skill.title}</Text>
                            </Box>)
                        }
                    </Box>
                </Flex>
                <Flex>
                    <Heading size="lg">Platforms <span className='themeText'>& Tools</span></Heading>
                    <Box>
                        {
                            skills.filter((el) => el.tag === "platform").map(skill => <Box
                                key={skill.id} className="skill"
                                data-aos="zoom-in">
                                <Box>
                                    <Image src={skill.icon} alt={`${skill.title} icon`} />
                                </Box>
                                <Text>{skill.title}</Text>
                            </Box>)
                        }
                    </Box>
                </Flex>
            </Flex>
        </Box>
    );
};

export default TechnicalSkills;