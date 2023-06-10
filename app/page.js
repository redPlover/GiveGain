import Image from 'next/image'

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">

            <div className="relative flex place-items-center before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
                <h1 className="relative flex drop-shadow-md m-10 z-10 px-8 text-9xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-blue-500 dark:from-green-500 dark:to-blue-600">
                    GiveGain
                </h1>
            </div>

            <p className="relative shrink drop-shadow-md z-10 max-w-[60ch] m-10 text-xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-br from-green-900 to-blue-900 dark:from-green-500 dark:to-blue-600">
                This is default text for the home page. It is a placeholder for the real content that will be here in the future. Here is some more dummy text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, eget aliquam nisl nunc eget nisl.
            </p>

            <div className="mb-32 grid shrink text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
                <a
                    href="/bulletin"
                    className="group rounded-lg border border-transparent px-5 py-4 ease-in-out hover:shadow-lg dark:hover:shadow-black/30 transition-colors hover:border-blue-500 hover:bg-green-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    rel="noopener noreferrer"
                >
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                        Volunteer{' '}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                            -&gt;
                        </span>
                    </h2>
                    <p className={`m-0 max-w-[30ch] text-sm opacity-60`}>
                        Join the GiveGain force and help your community today!
                    </p>
                </a>

                <a
                    href="/recruit"
                    className="group rounded-lg border border-transparent px-5 py-4 ease-in-out hover:shadow-lg dark:hover:shadow-black/30 transition-colors hover:border-blue-500 hover:bg-green-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    rel="noopener noreferrer"
                >
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                        Recruit Volunteers{' '}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                            -&gt;
                        </span>
                    </h2>
                    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                        Recruit eager volunteers for your organization and get the help you need.
                    </p>
                </a>

                <a
                    href="/help"
                    className="group rounded-lg border border-transparent px-5 py-4 ease-in-out hover:shadow-lg dark:hover:shadow-black/30 transition-colors hover:border-blue-500 hover:bg-green-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    rel="noopener noreferrer"
                >
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                        Contact Us and Q&A{' '}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                            -&gt;
                        </span>
                    </h2>
                    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                        Have a question? Want to get in touch? Click here to contact us.
                    </p>
                </a>

                <a
                    href="/about"
                    className="group rounded-lg border border-transparent px-5 py-4 ease-in-out hover:shadow-lg dark:hover:shadow-black/30 transition-colors hover:border-blue-500 hover:bg-green-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    rel="noopener noreferrer"
                >
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                        About Us{' '}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                            -&gt;
                        </span>
                    </h2>
                    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                        Who are we? What do we do? Why do we do it? Find out here!
                    </p>
                </a>
            </div>
        </main>
    )
}
