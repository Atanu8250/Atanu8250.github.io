import { Box, Heading, Text, Link } from '@chakra-ui/react';
import { educationalHistory } from '../Utils/data';

const EducationalHistory = () => {
    return (
        <Box className="education-timeline">
            <Heading>Education
                <span className="themeText"> History</span>
            </Heading>
            <Box className='timeline'>
                <ul>
                    {educationalHistory.map((item) => (
                        <li key={item.id}>
                            <Box className='content'>
                                <Heading size="lg">{item.degree}</Heading>
                                <Text>
                                    {item.institutionSite ? (
                                        <Link href={item.institutionSite} target='_blank'>{item.institution}</Link>
                                    ) : (
                                        item.institution
                                    )}
                                    {item.workingLocation ? ` (${item.workingLocation})` : ''}
                                    {item.location ? ` | ${item.location}` : ''}
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

export default EducationalHistory;