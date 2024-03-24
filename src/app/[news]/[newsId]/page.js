import { getSingleNews } from '@/utils/getSingleNews';
import { Avatar, Box, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';

const NewsDetailPage = async ({ params }) => {
    const { data: news } = await getSingleNews(params.newsId);
    // console.log(data);

    return (
        <Box className='my-10'>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Image src={news.thumbnail_url} width={800} height={500} alt={news.title} />

                        <Grid className="mt-2" container spacing={2}>
                            <Grid item xs={6}>
                                <Image src={news.image_url} width={800} height={500} alt={news.title} />
                            </Grid>
                            <Grid item xs={6}>
                                <Image src={news.image_url} width={800} height={500} alt={news.title} />
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" component='h2'>
                            {news.title}
                        </Typography>
                        <Box className='flex items-center gap-3 my-3'>
                            <Avatar alt="author" src={news.author.img} />
                            <Typography >
                                By {news.author.name}
                            </Typography>
                            <Typography >
                                - {news.author.published_date}
                            </Typography>
                        </Box>
                        <Typography className='mt-5 mb-3 text-gray-600  text-justify whitespace-pre-line'>
                            {news.details}
                        </Typography>

                        <Typography variant='h6'>
                            ``Many Destop publishing packages and web page editors now use as their default model text!
                        </Typography>
                        <Typography variant='h6'>
                            - Shoriful Islam Ali
                        </Typography>
                    </Grid>

                </Grid>

            </Container>
        </Box>
    );
};

export default NewsDetailPage;