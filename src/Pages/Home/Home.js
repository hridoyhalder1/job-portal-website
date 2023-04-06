import React from 'react';
import Banner from '../Banner/Banner';
import Categorys from '../Category/Categorys';
import NewsLetter from './NewsLetter/NewsLetter';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categorys></Categorys>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;