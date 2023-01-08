import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Heading, Image, Input, Link, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import logo from '../Images/favicon.png'
import { GiHamburgerMenu } from 'react-icons/gi'
import { VscChromeClose } from 'react-icons/vsc'

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
                    <Button><span>Home</span></Button>
                </Box>
                <Box>
                    <Button><span>About me</span></Button>
                </Box>
                <Box>
                    <Button><span>Skills</span></Button>
                </Box>
                <Box>
                    <Button><span>Projects</span></Button>
                </Box>
                <Box>
                    <Button><span>Resume</span></Button>
                </Box>
                <Box>
                    <Button><span>Contact</span></Button>
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
                        <Box><Link href='#home' onClick={() => onClose()}>Home</Link></Box>
                        <Box><Link href='#' onClick={() => onClose()}>About me</Link></Box>
                        <Box><Link href='#' onClick={() => onClose()}>Skills</Link></Box>
                        <Box><Link href='#' onClick={() => onClose()}>Projects</Link></Box>
                        <Box><Link href='#' onClick={() => onClose()}>Resume</Link></Box>
                        <Box><Link href='#' onClick={() => onClose()}>Contact</Link></Box>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    )
}

export default Navbar