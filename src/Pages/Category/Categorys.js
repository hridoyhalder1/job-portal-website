import React from 'react';
import accounting from '../../assets/img/icon/accounting.png';
import marketing from '../../assets/img/icon/promotion.png';
import design from '../../assets/img/icon/graphic-design.png';
import development from '../../assets/img/icon/web-programming.png';
import human from '../../assets/img/icon/human.png';
import autometive from '../../assets/img/icon/rocket.png';
import Category from './Category';

const Categorys = () => {
    const cardData = [
        {
            id: 1,
            name: 'Accounting / Finance',
            description: '(2 open positions)',
            icon: accounting,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },
        {
            id: 2,
            name: 'Marketing',
            description: '(86 open positions)',
            icon: marketing,
            bgClass: 'bg-accent'
        },
        {
            id: 3,
            name: 'Design',
            description: '(43 open positions)',
            icon: design,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },
        {
            id: 4,
            name: 'Development',
            description: '(90 open positions)',
            icon: development,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },
        {
            id: 5,
            name: 'Human Resource',
            description: '(12 open positions)',
            icon: human,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },
        {
            id: 6,
            name: 'Automotive Jobs',
            description: '(25 open positions)',
            icon: autometive,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        }
    ];
    return (
        <div className='my-[100px]'>
            <h1 className='text-4xl text-center font-bold'>Popular Job Categories</h1>
            <p className='text-center text-[16px] py-3 text-[#8c8d8e]'>2023 jobs live - 293 added today.</p>
            <div className='grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-5'>
                {
                    cardData.map((card) => <Category
                        key={card.id}
                        card={card}
                    >
                    </Category>)
                }
            </div>
        </div>
    );
};

export default Categorys;