import { Box, Button, Center, Flex, HStack, Image, Link, Tooltip } from '@chakra-ui/react'
import React from 'react'

import Svg2 from './Svg2'

const Contact_me = () => {
    return (
        <Box className='contact-me'>
            <Center></Center>
            <Flex flexDirection={["column", "column", "row"]}>

                <Box>
                    <Svg2 />
                </Box>


                <Box className='form-section'>
                    <div className='inputBox'>
                        <input type="text" required />
                        <span>First Name</span>
                    </div>
                    <div className='inputBox'>
                        <input type="text" required />
                        <span>Last Name</span>
                    </div>
                    <div className='inputBox'>
                        <input type="email" required />
                        <span>Email</span>
                    </div>
                    <div>
                        <textarea placeholder='Message 📧' />
                    </div>
                    <Button variant="outline" width="full" borderRadius="22px" mt="-20px">Submit</Button>
                    <Flex gap={["10px", "40px"]}>
                        <Link>
                            <Tooltip label='+91 81013 03481'>
                                <Box className='social-icons'>
                                    <Box>
                                        <Image w="100%" src="https://i.ibb.co/1057jXJ/png-transparent-telephone-logo-iphone-telephone-call-smartphone-phone-electronics-text-trademark-thu.png" />
                                    </Box>
                                </Box>
                            </Tooltip>
                        </Link>

                        <Link href='https://www.linkedin.com/in/atanu-karmakar-7ab110227/'>
                            <Tooltip label='Linked-in'>
                                <Box className='social-icons'>
                                    <Box>
                                        <Image w="100%" src="https://openvisualfx.com/wp-content/uploads/2019/10/linkedin-icon-logo-png-transparent.png" />
                                    </Box>
                                </Box>
                            </Tooltip>
                        </Link>

                        <Link href="https://github.com/Atanu8250">
                            <Tooltip label='Atanu8250'>
                                <Box className='social-icons'>
                                    <Box>
                                        <Image w="100%" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" />
                                    </Box>
                                </Box>
                            </Tooltip>
                        </Link>

                        <Link href="https://mail.google.com/mail/u/0/#inbox?compose=VpCqJKjFpWNfPwzpLxQBSsJZcJXkQQztWwwvdLtVMggsDRTMHPmGbsDwfWxzhNwdNlhDTZL">
                            <Tooltip label='atanu20uparsole@gmail.com'>
                                <Box className='social-icons'>
                                    <Box>
                                        <Image w="100%" src="https://1000logos.net/wp-content/uploads/2021/05/Gmail-logo.png" />
                                    </Box>
                                </Box >
                            </Tooltip>
                        </Link>
                    </Flex >
                </Box >
            </Flex >
        </Box >
    )
}

export default Contact_me