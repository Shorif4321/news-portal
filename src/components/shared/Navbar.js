"use client"
import * as React from 'react';
import Header from './Header';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Image from 'next/image';
import logo from "@/assets/logo.png"

// icons
import FacebookIcon from '@mui/icons-material/Facebook';
import { IconButton, Stack } from '@mui/material';
import Link from 'next/link';
import { LinkedIn, Twitter, WhatsApp, YouTube } from '@mui/icons-material';

const navItems = [
    {
        route: 'Home',
        path: "/"
    },
    {
        route: 'Pages',
        path: "/pages"
    },
    {
        route: 'Categories',
        path: "/categories/news?category=all-news"
    },
    {
        route: 'About',
        path: "/about"
    },
    {
        route: 'Contact',
        path: "/contact"
    },
];

function Navbar() {


    return (
        <>
            <Header></Header>

            <Box className='bg-black'>
                <Container>
                    <Box className="md:flex justify-between items-center py-5">
                        <Link href='/'>
                            <Image className='my-5 md:my-0 block mx-auto' src={logo} width={100} height={100} alt="logo" />
                        </Link>

                        <Box className="block text-center">
                            {
                                navItems.map((item) => (
                                    <Link key={item} href={item.path}>
                                        <Button className='text-white'>{item.route}</Button>
                                    </Link>
                                ))
                            }
                        </Box >

                        <Box className="text-center">
                            <Stack className='block' direction="row" sx={{
                                "& svg": {
                                    color: 'white'
                                }
                            }}>
                                <IconButton>
                                    <FacebookIcon></FacebookIcon>
                                </IconButton>
                                <IconButton>
                                    <YouTube></YouTube>
                                </IconButton>
                                <IconButton>
                                    <LinkedIn></LinkedIn>
                                </IconButton>
                                <IconButton>
                                    <Twitter></Twitter>
                                </IconButton>
                                <IconButton>
                                    <WhatsApp></WhatsApp>
                                </IconButton>
                            </Stack>
                        </Box>
                    </Box>

                </Container>
            </Box>

        </>
    );
}
export default Navbar;