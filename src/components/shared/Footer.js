import { Box, Button, Container, IconButton, Stack, Typography } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import { LinkedIn, Twitter, WhatsApp, YouTube } from '@mui/icons-material';
import Link from "next/link";

const Footer = () => {

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
            route: 'Category',
            path: "/category"
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


    return (
        <Box className="bg-black px-2 py-10">
            <Container>
                <Box className="w-full text-center" sx={{
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

                </Box>

                <Box className="w-full text-center">
                    {
                        navItems.map((item) => (
                            <Link key={item} href={item.path}>
                                <Button className='text-white'>{item.route}</Button>
                            </Link>
                        ))
                    }
                </Box >
                <Typography variant="body2" color="gray" textAlign='center'>
                    @2024 The News Portal. Design by Developer Shoriful Islaml
                </Typography>
            </Container>

        </Box>
    );
};

export default Footer;