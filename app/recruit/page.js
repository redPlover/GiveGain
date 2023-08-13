export default function post() {
    return (
        <div className="flex flex-col h-screen">
            <header className="py-4">
                <div className="container mx-auto flex justify-between items-center px-4">
                    <h1 className="text-gray-700 dark:text-white font-bold text-xl">Dashboard</h1>
                    <button className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded">
                        Settings
                    </button>
                </div>
            </header>
            <main className="flex-1 p-4">
                <div className="container mx-auto">
                    <h2 className="text-gray-800 dark:text-gray-100 font-bold text-2xl mb-4">Create a new post</h2>
                    <form className="bg-white p-4 rounded shadow-md">
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
                                Title
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="title"
                                type="text"
                                placeholder="Enter title"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="content">
                                Content
                            </label>
                            <textarea
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="content"
                                placeholder="Enter content"
                            ></textarea>
                        </div>
                        <div className="flex justify-end">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Post
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    )
};
