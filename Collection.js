import React from 'react';
import './Collection.css';


const Collection=()=>{
    let objects=[
    {
        id:1, 
        img:'img/part.jpg',
        picture:'Random Picture',
        About:'About- Here, I attached some images by using the concept of map in React js',
        Author:'Author name',
    },
    
    {
        id:2, 
        img:'img/part1.jpg',
        picture:'Random Pictures',
        About:'About- Here, I attached some images by using the concept of map in React js',
        Author:'Author name',
    },{
        id:3, 
        img:'img/part2.jpg',
        picture:'Random Picture',
        About:'About- Here, I attached some images by using the concept of map in React js',
        Author:'Author name',
    }
   
];

const element = objects.map((data)=>{
    return(
        <>
        <div className='Collection'>
        <div className='Collection_Card'>
            <div className='Card-img' key={data.id}>
                <img src={data.img} alt='imgs' />
            </div>
            <div className='Card_Picture'>
            <h1 className='Collection_picture'>{data.picture}</h1>
            <p className='Collection_Description'>{data.About}</p>
            <h1>{data.Author}</h1>
            
            </div>
        </div>
        </div>
        

        </>
    );
})
return (
    <>
     {element} 
        </>
);
}
export default Collection;
