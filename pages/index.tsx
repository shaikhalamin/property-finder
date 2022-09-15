import PropertyLayout from '@/components/layouts/PropertyLayout';
import { ReactElement } from 'react';


const Home = () => {
  return (
   <>
    <h1>Hello world !</h1>
   </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <PropertyLayout>{page}</PropertyLayout>;
};

export default Home
