import { Box, Button, Center, Flex, Heading, HStack, Link, Tooltip, Image, Text } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Aos from 'aos';
import 'aos/dist/aos.css'
import GitHubCalendar from 'react-github-calendar';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import { useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LuCloudDownload } from 'react-icons/lu'
import { FaPhoneAlt } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'

import { projects, skills } from '../Utils/data';

import ProjectCard from '../Components/Card';
import Svg1 from '../Components/Svg1';
import Svg2 from '../Components/Svg2';
import Svg3 from '../Components/Svg3';
import Slider from 'react-slick';
import Resume from '../Resume/Atanu-karmakar-Resume.pdf'

const Home = () => {

    const form = useRef();
    const toast = useToast()

    const settings = {
        dots: false,
        infinite: false,
        slidesToShow: matchMedia("(max-width: 430px)").matches ? 1 : matchMedia("(max-width: 1024px)").matches ? 2 : 3,
        slidesToScroll: 1,
    };

    useEffect(() => {
        // * it's from Aos library to to use scroll designing
        Aos.init()
    }, [])

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_SERVICE_TEMPLATE, form.current, import.meta.env.VITE_SERVICE_SECRET).then((result) => {

            toast({
                position: 'top-right',
                title: 'Email Sent ✔',
                description: `Thank You ${form.current.from_name.value.split(" ")[0]} for the message!`,
                status: 'success',
                duration: 5000,
                isClosable: true,
            })

            form.current.reset();
        }, (error) => {
            console.log(error.text);
            toast({
                position: 'top-right',
                title: 'Email Not sent.',
                description: "There is some error",
                status: 'warning',
                duration: 5000,
                isClosable: true,
            })
        });;

    };

    return (
        <Box>
            <Box id='home'>
                <Flex flexDirection={['column-reverse', 'column-reverse', 'row']} m="auto" justifyContent="space-around" alignItems="center" h="100%">
                    <Box data-aos="fade-down">
                        <Heading>Hey! <span className='themeText'>I'm</span></Heading>
                        <Box className='content'>
                            <Heading fontSize="3.3em" className='text' data-text="Atanu Karmakar"><span className='themeText'>Atanu Karmakar</span></Heading>
                        </Box>
                        <Text>Am a Software Developer, passionate and experienced in building Web applications.</Text>
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

            {/* About me */}

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

            {/* Educational history */}
            <Box className="education-timeline">
                <Heading>Education
                    <span className="themeText"> History</span>
                </Heading>
                <Box className='timeline'>
                    <ul>
                        <li>
                            <Box className='content'>
                                <Heading size="lg">Bachelor of Computer Application</Heading>
                                <Text>
                                    <Link href='https://www.ignou.ac.in/' target='_blank'>Indira Gandhi National Open University (IGNOU)</Link> | Kolkata</Text>
                            </Box>
                            <Box className='time'>
                                <Text>2023 - Present</Text>
                            </Box>
                        </li>
                        <li>
                            <Box className='content'>
                                <Heading size="lg">Full Stack Web Development (MERN)</Heading>
                                <Text>
                                    <Link href='https://www.masaischool.com/' target='_blank'>Masai School</Link> (Remote) | Bengaluru</Text>
                            </Box>
                            <Box className='time'>
                                <Text>2022 - 2023</Text>
                            </Box>
                        </li>
                        <li>
                            <Box className='content'>
                                <Heading size="lg">Higher Secondary Education</Heading>
                                <Text>
                                    <Link href='https://g.co/kgs/D9GbXj2' target='_blank'>Rajgram Vivekananda Hindu Vidyalaya</Link> | Bankura</Text>
                            </Box>
                            <Box className='time'>
                                <Text>2019 - 2021</Text>
                            </Box>
                        </li>
                    </ul>
                </Box>
            </Box>

            {/* Technical Skills section */}
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

            {/* Professional experience */}
            <Box className="experience-timeline">
                <Heading>Professional
                    <span className="themeText"> Experience</span>
                </Heading>
                <Box className='timeline'>
                    <ul>
                        <li>
                            <Box className='content'>
                                <Heading size="lg">Senior Developer</Heading>
                                <Text>
                                    <Link href='https://design.yantramayaa.com/' target='_blank'>Yantramayaa Designs</Link> (Remote) | Vadodara, Gujarat</Text>
                            </Box>
                            <Box className='time'>
                                <Text>Jun, 2024 - Present</Text>
                            </Box>
                        </li>
                        <li>
                            <Box className='content'>
                                <Heading size="lg">Full Stack Developer</Heading>
                                <Text>
                                    <Link href='https://design.yantramayaa.com/' target='_blank'>Yantramayaa Designs</Link> (Remote) | Vadodara, Gujarat</Text>
                            </Box>
                            <Box className='time'>
                                <Text>Jul, 2023 - Aug, 2024</Text>
                            </Box>
                        </li>
                        <li>
                            <Box className='content'>
                                <Heading size="lg">Freelancing</Heading>
                                <Text>Freelancing on Wordpress, College Projects</Text>
                            </Box>
                            <Box className='time'>
                                <Text>Jan, 2023 - Jul, 2023</Text>
                            </Box>
                        </li>
                    </ul>
                </Box>
            </Box>

            {/* show projects */}
            <Box id="projects">
                <Heading textAlign="center">Featured <span className='themeText'>Projects</span></Heading>
                <Slider {...settings}>
                    {
                        projects.map((project, i) => <ProjectCard key={i} {...project} />)
                    }
                </Slider>
            </Box>


            {/* Github Statistics */}
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

                <Center>
                    <GitHubCalendar username="atanu8250" color="#4a8af4" children={<ReactTooltip html />} />
                </Center>
            </Box>


            {/* Contact me */}
            <Box id='contactMe'>
                <Heading textAlign="center">Contact <span className='themeText'>Me</span></Heading>
                <Flex flexDirection={["column", "column", "column", "row"]} alignItems="center">

                    <Box>
                        <Svg2 />
                    </Box>


                    <Box className='form-section'>
                        <form ref={form} onSubmit={sendEmail}>
                            <div className='inputBox'>
                                <input type="text" name="from_name" required />
                                <span>Full Name</span>
                            </div>
                            <div className='inputBox'>
                                <input type="email" name="from_mail" required />
                                <span>Email</span>
                            </div>
                            <div>
                                <textarea placeholder='Message 📧' name="message" />
                            </div>
                            <input type="submit" value="Send Message" />
                        </form>
                        <Flex className='contact-info'>
                            <HStack>
                                <SiGmail color="#e34133" />
                                <Text>atanu.karmakar201@gmail.com</Text>
                            </HStack>
                            <HStack>
                                <FaPhoneAlt color="#00a14f" />
                                <Text>+91 81013 03481</Text>
                            </HStack>
                        </Flex>
                        <Flex gap={["10px", "20px", "20px", "40px"]}>
                            <Link href='https://wa.me/918101303481' target="_blank">
                                <Tooltip label='+91 81013 03481'>
                                    <Box className='social-icons'>
                                        <Box>
                                            <Image w="100%" src="https://brandlogos.net/wp-content/uploads/2018/10/whatsapp-logo.png" alt='Whatsapp brand logo' />
                                        </Box>
                                    </Box>
                                </Tooltip>
                            </Link>

                            <Link href='https://www.linkedin.com/in/atanu-karmakar-dev/' target="_blank">
                                <Tooltip label='Atanu Karmakar'>
                                    <Box className='social-icons'>
                                        <Box>
                                            <Image w="100%" src="https://openvisualfx.com/wp-content/uploads/2019/10/linkedin-icon-logo-png-transparent.png" alt='Linkedin brand logo' />
                                        </Box>
                                    </Box>
                                </Tooltip>
                            </Link>

                            <Link href="https://github.com/Atanu8250" target="_blank">
                                <Tooltip label='Atanu8250'>
                                    <Box className='social-icons'>
                                        <Box>
                                            <Image w="100%" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt='Github brand logo' />
                                        </Box>
                                    </Box>
                                </Tooltip>
                            </Link>

                            <Link href="mailto:atanu.karmakar201@gmail.com" target="_blank">
                                <Tooltip label='atanu.karmakar201@gmail.com'>
                                    <Box className='social-icons'>
                                        <Box>
                                            <Image w="100%" src="https://1000logos.net/wp-content/uploads/2021/05/Gmail-logo.png" alt='Gmail brand logo' />
                                        </Box>
                                    </Box >
                                </Tooltip>
                            </Link>
                        </Flex >
                    </Box >
                </Flex >
            </Box >

            {/* footer */}
            <Flex id='footer'>
                <Text>© Portfolio by Atanu k. | All rights reserved.</Text>
                <Text>Made with 💖 by Atanu</Text>
            </Flex>
        </Box >
    )
}

export default Home