import { getCategoryNews } from '@/utils/getCategoryNews';
import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
    title: "newses categories",
    description: "this news portal website made by ali shorif",
};

const DynamicNewsPage = async ({ params, searchParams }) => {
    const { data } = await getCategoryNews(searchParams.category)
    // console.log(data);
    return (
        <Box className="mt-5">
            <Grid className="mt-5" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {
                    data.map((news) => <Grid key={news.id} className="mb-5" item xs={12} md={6}>
                        <Link href={`/${news.category.toLowerCase()}/${news._id}`}>
                            <Card >
                                <CardActionArea>
                                    <CardMedia sx={{
                                        "& img": {
                                            width: '100%',
                                            height: '250px'
                                        }
                                    }} >
                                        <Image className='w-full' src={news.thumbnail_url} width={400} height={700} alt="top news" />
                                    </CardMedia>
                                    <CardContent>
                                        <p className="text-white bg-red-500 p-2 my-5 rounded-lg inline-block">{news.category}</p>
                                        <Typography className='my-2' gutterBottom variant='h6'>
                                            {news.title.length > 30 ? news.title.slice(0, 30) + " ...." : news.title}
                                        </Typography>
                                        <Typography gutterBottom className="my-4" >
                                            By {news.author.name} - {news.author.published_date}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {
                                                news.details.length > 200 ? news.details.slice(0, 200) + " ....." : news.details
                                            }
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Link>
                    </Grid>)
                }


            </Grid>

        </Box>
    );
};

export default DynamicNewsPage;