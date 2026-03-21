import { Box, Heading, Flex, HStack, Link, Tooltip, Image, Text, useToast } from '@chakra-ui/react';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaPhoneAlt } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import Svg2 from './Svg2';

const ContactMe = () => {
    const form = useRef();
    const toast = useToast();

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
            });

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
            });
        });
    };

    return (
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
                                </Box>
                            </Tooltip>
                        </Link>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    );
};

export default ContactMe;