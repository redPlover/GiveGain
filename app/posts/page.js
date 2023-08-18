import path from 'path';
import matter from 'gray-matter';
import json from '../posts.json';
import Image from 'next/image';
import Link from 'next/link';
import Logo from 'public/logo.png';

export const dynamic = 'force-dynamic';

async function getPosts() {
    const res = await fetch(`${process.env.BASE_URL}/api/posts`, { headers: { 'Content-Type': 'application/json' } }, { cache: "no-store" });
    if (!res.ok) {
        console.error(res.status);
    }
    return res.json();
}

const Content = () => {
    return <div>
        {json.map((item, index) => (
            <Link key={index} href={"/posts/" + item.id} passHref><div className='bg-green-400 dark:bg-gray-900 dark:bg-opacity-50 snap-center shrink-0 p-5 m-5 text-center flex flex-col origin-center place-items-center rounded border-2 dark:border-sky-200 border-black'>
                <Image width={500} height={500} alt='Post Image' src={item.image} />
                <h2 className='text-2xl font-bold'>{item.title}</h2>
                <p className='text-lg font-light max-w-[70ch]'>{item.description}</p>
                <p className='text-lg font-light'>Contact: </p><a className='text-lg font-light underline text-blue-900 dark:text-blue-400' href={item.email}>{item.email}</a>
            </div></Link>))}
    </div>;
};

export default async function bulletin() {
    const data = await getPosts();
    
    return (
        // <Content/>
        <div className='flex flex-col origin-center place-items-center snap-mandatory snap-y'>
            <div>
                {data.map((item) => (
                    <Link href={"/posts/" + item.id} passHref><div className='bg-green-400 dark:bg-gray-900 dark:bg-opacity-50 snap-center shrink-0 p-5 m-5 text-center flex flex-col origin-center place-items-center rounded border-2 dark:border-sky-200 border-black'>
                        {/* <Image width={500} height={500} alt='Post Image' src={item.images}/> */}
                        <h2 className='text-2xl font-bold'>{item.title}</h2>
                        <p className='text-lg font-light max-w-[70ch]'>{item.content}</p>
                        <p className='text-lg font-light max-w-[70ch]'>Location: {item.location}</p>
                        <p className='text-lg font-light max-w-[70ch]'>Duration: {item.duration}</p>
                        <p className='text-lg font-light max-w-[70ch]'>Lapse: {item.lapse}</p>
                        {!item.tags == [] ? <p className='text-lg font-light max-w-[70ch]'>Tags: {item.tags}</p> : null}
                        <p className='text-lg font-light max-w-[70ch]'>Max: {item.max}</p>
                        <Link className='text-lg font-light underline text-blue-900 dark:text-blue-400' href={"/posts/user/"+item.user.username}>Author: {item.user.name}</Link>
                    </div></Link>))}
            </div>
        </div>
    )
};
