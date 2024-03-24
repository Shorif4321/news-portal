'use client'

export const metadata = {
    title: "some thing went wrong",
    description: "this news portal website made by ali shorif",
};

const ErrorPage = () => {
    return (
        <div className='flex justify-center items-center min-h-screen text-center'>
            <div>
                <h1 className='text-2xl text-red-500'> Something went wrong .... </h1>

            </div>
        </div>
    );
};

export default ErrorPage;