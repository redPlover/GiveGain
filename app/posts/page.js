import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import json from '../posts.json';
import Image from 'next/image';
import Link from 'next/link';
import Logo from 'public/logo.png';
import prisma from '../lib/prisma';

async function getPosts() {
    const post = await prisma.post.findMany( {
            orderBy: {
                createdAt: 'desc'
            },
            where: {
                visible: true
            },
            select: {
                id: true,
                title: true,
                content: true,
                images: true,
                visible: true,
                location: true,
                authorId: true
            }
        }
    );
    console.log("*************************************************************************************************************************************************************************************"+post+"*************************************************************************************************************************************************************************************");
    return post;
}

const Posts = () => {
    const post = getPosts();
    
    return <div>
        {/* {post.map((item) => (!item.visible ? <></> :
        <Link href={"/posts/"+item.id} passHref><div className='bg-green-400 dark:bg-gray-900 dark:bg-opacity-50 snap-center shrink-0 p-5 m-5 text-center flex flex-col origin-center place-items-center rounded border-2 dark:border-sky-200 border-black'>
            <Image width={500} height={500} alt='Post Image' src={item.images}/>
            <h2 className='text-2xl font-bold'>{item.title}</h2>
            <p className='text-lg font-light max-w-[70ch]'>{item.content}</p>
            <p className='text-lg font-light'>Contact: <a className='underline text-blue-900 dark:text-blue-400' href={item.email}>{item.email}</a></p>
        </div></Link>))} */}
    </div>;
};

const Content = () => {
    return <div>
        {json.map((item, index) => (
        <Link key={index} href={"/posts/"+item.id} passHref><div className='bg-green-400 dark:bg-gray-900 dark:bg-opacity-50 snap-center shrink-0 p-5 m-5 text-center flex flex-col origin-center place-items-center rounded border-2 dark:border-sky-200 border-black'>
            <Image width={500} height={500} alt='Post Image' src={item.image}/>
            <h2 className='text-2xl font-bold'>{item.title}</h2>
            <p className='text-lg font-light max-w-[70ch]'>{item.description}</p>
            <p className='text-lg font-light'>Contact: </p><a className='text-lg font-light underline text-blue-900 dark:text-blue-400' href={item.email}>{item.email}</a>
        </div></Link>))}
    </div>;
};

export default function bulletin() {
    return (
        <div className='flex flex-col origin-center place-items-center snap-mandatory snap-y'>
            <Content />
            <Posts/>
            
            {/* <div class='bg-gray-900 bg-opacity-50 snap-center shrink-0 p-5 m-5 text-center flex flex-col origin-center place-items-center rounded border-2 border-sky-200 w-1/2'>
                <Image src={Logo}/>
                <h2 className='text-2xl font-bold'>Welcome to the Bulletin Board!</h2>
                <p className='text-lg font-light'>This is where you can find all the latest news and updates about the project.</p>
            </div> */}
        </div>
    )
};
