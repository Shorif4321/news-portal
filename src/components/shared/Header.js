import { Box, Container, Typography } from "@mui/material";
import headerImage from '@/assets/The Dragon News.png';
import Image from "next/image";
import { getCurrentDate } from "@/utils/getCurrentDate";

const Header = () => {
    const currentDate = getCurrentDate()
    return (
        <Box className="w-full my-6 " >
            <Container>
                <Image className="mx-auto w-4/6 md:w-3/6 h-4/6 md:h-3/6" src={headerImage} alt="the daragon news" />

                <Typography className="my-3" variant="body2" textAlign='center'>
                    Journalist Without Fear or Favour
                </Typography>

                <Typography textAlign='center'>
                    {currentDate}
                </Typography>
            </Container>
        </Box>
    );
};

export default Header;