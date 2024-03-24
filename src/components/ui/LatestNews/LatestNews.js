import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import topNews from '@/assets/top-news.png';
import topNews2 from '@/assets/top-news2.png';
import Image from "next/image";
import { getAllNews } from "@/utils/getAllNews";

const LatestNews = async () => {
    const { data } = await getAllNews();

    // console.log(data[0]);

    return (
        <Box className="my-5">
            <Card >
                <CardActionArea>
                    <CardMedia>
                        <Image src={data[0].thumbnail_url} width={800} height={600} alt="top news" />
                    </CardMedia>
                    <CardContent>
                        <p className="text-white bg-red-500 p-2 my-5 rounded-lg inline-block">Technology</p>

                        <Typography gutterBottom variant="h5" component="div">
                            {data[0].title}
                        </Typography>
                        <Typography gutterBottom className="my-4" >
                            By    {data[0].author.name} - {data[0].author.published_date}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {data[0].details.length > 200 ? data[0].details.slice(0, 300) + ' ..... ' : data[0].details}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            <Grid className="mt-5" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {
                    data.slice(1, 5).map((news) => (
                        <Grid key={news.id} className="mb-5" item xs={6}>
                            <Card>
                                <CardActionArea>
                                    <CardMedia sx={{
                                        "& img": {
                                            width: "100%",
                                            height: "230px"
                                        }
                                    }}>
                                        <Image src={news.thumbnail_url} width={800} height={400} alt="top news" />
                                    </CardMedia>
                                    <CardContent>
                                        <Typography gutterBottom >
                                            {news.title}
                                        </Typography>
                                        <p className="text-white text-sm bg-red-500 py-1 px-2 rounded-lg inline-block">Technology</p>

                                        <Typography gutterBottom className="my-4" >
                                            By {news.author.name} - {news.author.published_date}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {news.details.length > 100 ? news.details.slice(0, 145) + ' ..... ' : news.details}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))
                }


            </Grid>

        </Box >
    );
};

export default LatestNews;