import json from '../../posts.json';
import Image from 'next/image';
import Link from 'next/link';
import prisma from '../../lib/prisma';

// const post = await prisma.post.findMany();

export default function Page({ params }) {
    return (<div>
        {/* My Post: {params.postId} */}
        {json.filter((item) => item.id == params.postId).map((item, index) => (
            <div key={index} className='snap-center shrink-0 p-5 m-5 text-center dark:text-white flex flex-col origin-center place-items-center'>
                <Image width={500} height={500} alt='Post Image' src={item.image} />
                <h2 className='text-2xl font-bold'>{item.title}</h2>
                <p className='text-lg text-gray-600 dark:text-gray-300 font-light max-w-[70ch]'>{item.description}</p>
                <p className='text-lg dark:text-gray-300 font-light'>Contact: </p><a className='underline text-blue-900 dark:text-blue-400' href={item.email}>{item.email}</a>
            </div>
        ))}
        {/* {post.filter((item) => item.id == params.postId).map((item, index) => (
            <div key={index} className='snap-center shrink-0 p-5 m-5 text-center dark:text-white flex flex-col origin-center place-items-center'>
                <Image width={500} height={500} alt='Post Image' src={item.image} />
                <h2 className='text-2xl font-bold'>{item.title}</h2>
                <p className='text-lg text-gray-600 dark:text-gray-300 font-light max-w-[70ch]'>{item.content}</p>
                <p className='text-lg dark:text-gray-300 font-light'>Creator: {item.authorId}</p>
            </div>
        ))} */}
    </div>);
}
