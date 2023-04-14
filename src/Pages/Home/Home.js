import React from 'react';
import Banner from '../Banner/Banner';
import Categorys from '../Category/Categorys';
import NewsLetter from './NewsLetter/NewsLetter';
import Job from '../Job/Job';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Job></Job>
            <Categorys></Categorys>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;