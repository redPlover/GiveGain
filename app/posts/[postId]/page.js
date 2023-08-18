export const dynamic = 'force-dynamic';

async function getPosts() {
    const res = await fetch(`${process.env.BASE_URL}/api/posts`, { headers: { 'Content-Type': 'application/json' } });
    if (!res.ok) {
        console.error(res.status);
    }
    return res.json();
}

export default async function Page({ params }) {
    const post = await getPosts();

    return (<div>
        {post.filter((item) => item.id == params.postId).map((item, index) => (
            <div key={index} className='snap-center shrink-0 p-5 m-5 text-center dark:text-white flex flex-col origin-center place-items-center'>
                {/* <Image width={500} height={500} alt='Post Image' src={item.image} /> */}
                <h2 className='text-2xl font-bold'>{item.title}</h2>
                <p className='text-lg font-light max-w-[70ch]'>{item.content}</p>
                <p className='text-lg font-light max-w-[70ch]'>Location: {item.location}</p>
                <p className='text-lg font-light max-w-[70ch]'>Duration: {item.duration}</p>
                <p className='text-lg font-light max-w-[70ch]'>Lapse: {item.lapse}</p>
                {!item.tags == [] ? <p className='text-lg font-light max-w-[70ch]'>Tags: {item.tags}</p> : null}
                <p className='text-lg font-light max-w-[70ch]'>Max: {item.max}</p>
                <p className='text-lg font-light max-w-[70ch]'>Author: {item.user.name}</p>
            </div>
        ))}
    </div>);
}
