import { Box, Heading, Text, Link } from '@chakra-ui/react';
import { professionalExperience } from '../Utils/data';

const ProfessionalExperience = () => {
    return (
        <Box className="experience-timeline">
            <Heading>Professional
                <span className="themeText"> Experience</span>
            </Heading>
            <Box className='timeline'>
                <ul>
                    {professionalExperience.map((item) => (
                        <li key={item.id}>
                            <Box className='content'>
                                <Heading size="lg">{item.role}</Heading>
                                <Text>
                                    {item.companySite ? (
                                        <Link href={item.companySite} target='_blank'>{item.companyName}</Link>
                                    ) : (
                                        item.companyName
                                    )}
                                    {item.workingLocation ? ` (${item.workingLocation})` : ''}
                                    {item.companyAddress ? ` | ${item.companyAddress}` : ''}
                                </Text>
                            </Box>
                            <Box className='time'>
                                <Text>{item.timeline}</Text>
                            </Box>
                        </li>
                    ))}
                </ul>
            </Box>
        </Box>
    );
};

export default ProfessionalExperience;