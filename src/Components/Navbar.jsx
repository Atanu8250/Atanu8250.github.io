import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Heading, Image, Link, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import logo from '../Images/favicon.png'
import { GiHamburgerMenu } from 'react-icons/gi'
import { VscChromeClose } from 'react-icons/vsc'

import Resume from '../Resume/Atanu_Karmakar_Resume.pdf'

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <Box className='navbar'>
            <Box className='logo'>
                <Box>
                    <Image src={logo} />
                </Box>
                <Box className='name'>
                    <Heading>Atanu K.</Heading>
                    <Heading>Atanu K.</Heading>
                </Box>
            </Box>
            <Box display={["none", 'none', 'none', 'flex']} className="nav-options">
                <Box>
                    <Button><Link href="#"><span>Home</span></Link></Button>
                </Box>
                <Box>
                    <Button><Link href="#aboutMe"><span>About me</span></Link></Button>
                </Box>
                <Box>
                    <Button><Link href="#skills"><span>Skills</span></Link></Button>
                </Box>
                <Box>
                    <Button><Link href="#projects"><span>Projects</span></Link></Button>
                </Box>
                <Box>
                    <Button onClick={()=>{window.open("https://1drv.ms/b/s!AjfSNL-3_Mfng0dVyp7QsLXQT92h?e=uncCFn", '_blank')}}><a href={Resume} download="fw21_1249-Atanu-Karmakar-Resume"><span>Resume</span></a></Button>
                </Box>
                <Box>
                    <Button><Link href="#contactMe"><span>Contact</span></Link></Button>
                </Box>
            </Box>
            <Button ref={btnRef} display={["block", 'block', 'block', 'none']} onClick={() => {
                isOpen ? onClose() : onOpen()
            }}>
                {
                    isOpen ? <VscChromeClose /> : <GiHamburgerMenu />
                }
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
                size="full"
            >
                <DrawerOverlay />
                <DrawerContent className="drawer">
                    <DrawerCloseButton />
                    <DrawerHeader>
                        <Box display={['flex', 'none']} className='logo'>
                            <Box>
                                <Image src={logo} />
                            </Box>
                            <Box className='name'>
                                <Heading>Atanu K.</Heading>
                                <Heading>Atanu K.</Heading>
                            </Box>
                        </Box>
                    </DrawerHeader>

                    <DrawerBody>
                        <Box><Link href='#' onClick={() => onClose()}>Home</Link></Box>
                        <Box><Link href='#aboutMe' onClick={() => onClose()}>About me</Link></Box>
                        <Box><Link href='#skills' onClick={() => onClose()}>Skills</Link></Box>
                        <Box><Link href='#projects' onClick={() => onClose()}>Projects</Link></Box>
                        <Box><Link href='#resume' onClick={() => onClose()}>Resume</Link></Box>
                        <Box><Link href='#contactMe' onClick={() => onClose()}>Contact</Link></Box>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    )
}

export default Navbar