import LatestNews from '@/components/ui/LatestNews/LatestNews';
import Sidebar from '@/components/ui/Sidebar/Sidebar';
import { Grid } from '@mui/material';

const HomePage = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <LatestNews />
        </Grid>
        <Grid className='' item xs={12} md={4}>
          <Sidebar></Sidebar>
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;