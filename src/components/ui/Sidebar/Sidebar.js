import { Avatar, Box, ButtonBase, Card, CardActionArea, CardContent, CardMedia, Divider, Grid, Paper, Typography } from "@mui/material";
import Image from "next/image";
import sidebarTopNews from '@/assets/side-top-news.png'
import blankImage from '@/assets/blankImage.png'
import sideBottom from '@/assets/side-bottom-img.png'
import { getCurrentDate } from "@/utils/getCurrentDate";

const Sidebar = () => {
    const getDate = getCurrentDate()
    return (
        <Box className="mt-5">
            <Card >
                <CardActionArea>
                    <CardMedia>
                        <Image className="w-full" src={sidebarTopNews} alt="top news" />
                    </CardMedia>
                    <CardContent>
                        <p className="text-white bg-red-500 p-2 my-5 rounded-lg inline-block">Technology</p>

                        <Typography gutterBottom variant="body1" fontWeight='bold'>
                            Bitcoin - Open source P2P money for your bussiness imporovment
                        </Typography>
                        <Typography gutterBottom className="my-4" >
                            By Shoriful Islam - Mar 18 2024
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            {/* small optin  option card*/}
            <Box>
                <Card className="my-5 ">
                    <Grid className="py-5 saddow-0" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid className="" item xs={3}>
                            <Image src={blankImage} alt="top news" />
                        </Grid>
                        <Grid className="" item xs={9}>
                            <Typography gutterBottom variant="body1" fontWeight='bold'>
                                Bitcoin - Open source P2P money for your bussiness imporovment
                            </Typography>
                            <Typography className="text-purple-400" gutterBottom variant="body2" >
                                {getDate}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Divider></Divider>
                    <Grid className="py-5 saddow-0" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid className="" item xs={3}>
                            <Image src={blankImage} alt="top news" />
                        </Grid>
                        <Grid className="" item xs={9}>
                            <Typography gutterBottom variant="body1" fontWeight='bold'>
                                Bitcoin - Open source P2P money for your bussiness imporovment
                            </Typography>
                            <Typography className="text-purple-400" gutterBottom variant="body2" >
                                {getDate}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Divider></Divider>
                    <Grid className="py-5 saddow-0" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid className="" item xs={3}>
                            <Image src={blankImage} alt="top news" />
                        </Grid>
                        <Grid className="" item xs={9}>
                            <Typography gutterBottom variant="body1" fontWeight='bold'>
                                Bitcoin - Open source P2P money for your bussiness imporovment
                            </Typography>
                            <Typography className="text-purple-400" gutterBottom variant="body2" >
                                {getDate}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Divider></Divider>
                    <Grid className="py-5 saddow-0" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid className="" item xs={3}>
                            <Image src={blankImage} alt="top news" />
                        </Grid>
                        <Grid className="" item xs={9}>
                            <Typography gutterBottom variant="body1" fontWeight='bold'>
                                Bitcoin - Open source P2P money for your bussiness imporovment
                            </Typography>
                            <Typography className="text-purple-400" gutterBottom variant="body2" >
                                {getDate}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Divider></Divider>
                    <Grid className="py-5 saddow-0" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid className="" item xs={3}>
                            <Image src={blankImage} alt="top news" />
                        </Grid>
                        <Grid className="" item xs={9}>
                            <Typography gutterBottom variant="body1" fontWeight='bold'>
                                Bitcoin - Open source P2P money for your bussiness imporovment
                            </Typography>
                            <Typography className="text-purple-400" gutterBottom variant="body2" >
                                {getDate}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Divider></Divider>
                    <Grid className="py-5 saddow-0" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid className="" item xs={3}>
                            <Image src={blankImage} alt="top news" />
                        </Grid>
                        <Grid className="" item xs={9}>
                            <Typography gutterBottom variant="body1" fontWeight='bold'>
                                Bitcoin - Open source P2P money for your bussiness imporovment
                            </Typography>
                            <Typography className="text-purple-400" gutterBottom variant="body2" >
                                {getDate}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Divider></Divider>





                </Card>
            </Box>

            <Card className="mb-5 md:mb-0">
                <CardActionArea>
                    <CardMedia>
                        <Image className="w-full" src={sideBottom} alt="side Bottom" />
                    </CardMedia>
                </CardActionArea>
            </Card>





        </Box>



    );
};

export default Sidebar;