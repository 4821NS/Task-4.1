import React from 'react';

import './Collection1.css'

const Collection1 = () => {
    let info = [
        {
            id: 1,
            img: 'img/a1.jpg',
           images: 'Images',
            description: 'Info- Here, I attached some Random Images.',
            author: 'Author name',
        },
        {
            id: 2,
            img: 'img/a2.jpg',
           images: 'Images',
            description: 'Info- Here, I attached some Random Images.',
            author: 'Author name',
        },
        {
            id: 3,
            img: 'img/a3.jpg',
           images: 'Images',
            description: 'Info- Here, I attached some Random Images.',
            author: 'Author name',
        }
    ];

    const items = info.map((data) => (
        <>
        
        <div className='Collection_1' key={data.id}>

            <div className='Collection_2'>
        
                <div className='Card-img_1'>
                    <img src={data.img} alt='img' />
                </div>

                <h1 className='Collection_Text'>{data.images}</h1>
                <p className='Collection_Description'>{data.description}</p>
                <h2>{data.author}</h2>
        
            </div>
            

        </div>
       
        </>


    ));

    return (
        
<div>
        <div>{items}</div>
        
        </div>
            
      

    );
};

export default Collection1;