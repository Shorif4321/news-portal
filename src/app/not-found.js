import { Button } from '@mui/material';
import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: "sorry you are on wrong track",
    description: "this news portal website made by ali shorif",
};

const NotFoundPage = () => {
    return (
        <div className='flex justify-center items-center min-h-screen text-center'>
            <div>
                <h1 className='mb-5 text-3xl'> 404! Page is not Found !!! </h1>
                <Link href='/'><Button variant='outlined'> Back to Home </Button></Link>
            </div>
        </div>
    );
};

export default NotFoundPage;