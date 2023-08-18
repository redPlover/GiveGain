export const dynamic = 'force-dynamic';

async function getUsers() {
    const res = await fetch(`${process.env.BASE_URL}/api/user`, { headers: { 'Content-Type': 'application/json' } });
    if (!res.ok) {
        console.error(res.status);
    }
    return res.json();
}

export default async function Page({ params }) {
    const user = await getUsers();

    return (<div>
        {user.filter((item) => item.username == params.user).map((item, index) => (
            <div key={index} className='snap-center shrink-0 p-5 m-5 text-center dark:text-white flex flex-col origin-center place-items-center'>
                {/* <Image width={500} height={500} alt='Post Image' src={item.image} /> */}
                <h2 className='text-2xl font-bold'>{item.name}</h2>
                <p className='text-lg font-light max-w-[70ch]'>{item.description}</p>
                {item.posts.map((item, index) => (
                    <div key={index} className='snap-center shrink-0 p-2 text-center dark:text-white flex flex-col origin-center place-items-center'>{item.title}</div>
                ))}
            </div>
        ))}
    </div>);
}
