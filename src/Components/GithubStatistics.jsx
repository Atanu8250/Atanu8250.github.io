import { Box, Heading, Center, Image } from '@chakra-ui/react';
import GitHubCalendar from 'react-github-calendar';
import { Tooltip as ReactTooltip } from 'react-tooltip';

const GithubStatistics = () => {
    return (
        <Box id="githubStats">
            <Heading textAlign="center">Github <span className='themeText'>stats</span></Heading>
            <Center className='github-stats'>
                <Image src="https://github-readme-stats.vercel.app/api/top-langs/?username=Atanu8250&layout=compact&hide_border=true&theme=radical" alt="Atanu's most used languages" />
                <Image src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=atanu8250&theme=radical" alt="Atanu's github Stats" />
            </Center>

            <Center className='github-stats'>
                <Image src="https://github-readme-stats.vercel.app/api?username=Atanu8250&show_icons=true&locale=en&layout=compact&hide_border=true&theme=radical" alt="Atanu's github stats" />
                <Image src="https://github-readme-streak-stats.herokuapp.com/?user=Atanu8250&layout=compact&hide_border=true&theme=radical" alt="Atanu's current Streaks" />
            </Center>

            <Center className='github-calendar'>
                <GitHubCalendar username="atanu8250" color="#4a8af4" children={<ReactTooltip />} />
            </Center>
        </Box>
    );
};

export default GithubStatistics;