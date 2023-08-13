"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function form() {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [location, setLocation] = useState('');
    const [duration, setDuration] = useState(0);
    const [lapse, setLapse] = useState(0);
    const [visible, setVisible] = useState(true);
    const [tags, setTags] = useState([]);
    const [max, setMax] = useState(1);

    const [posted, setPosted] = useState(false);

    const toggleSwitch = () => {
        setVisible(!visible);
        console.log("hi");
    };

    const handleTagChange = (event, index) => {
        const newTags = [...tags];
        newTags[index] = event.target.value;
        setTags(newTags);
    };

    const handleAddTag = () => {
        setTags([...tags, '']);
    };

    const handleDeleteTag = (index) => {
        const newTags = [...tags];
        newTags.splice(index, 1);
        setTags(newTags);
    };

    const test = () => {
        console.log({ title, content, location, duration, lapse, visible, tags, max });
        console.log("doodaa");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        test();
        setPosted(true);
    }

    if (!posted) {
        return (
            <form onSubmit={handleSubmit} className="max-w-sm mx-auto bg-blue-200 border-black border shadow-md rounded p-8 mb-4">
                <div className="mb-6">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="title"
                    >
                        Title
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="title"
                        name="title"
                        type="text"
                        value={title} onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter title"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="description"
                    >
                        Description
                    </label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="description"
                        name="description"
                        type="text"
                        value={content} onChange={(e) => setContent(e.target.value)}
                        placeholder="Enter description"
                        rows={4}
                        required
                    ></textarea>
                </div>
                {/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */}
                <div className="mb-6">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="tags"
                    >
                        Tags
                    </label>
                    {tags.map((tag, index) => (
                        <div key={index} className="flex items-center mb-2">
                            <input
                                type="text"
                                value={tag.index}
                                onChange={(event) => handleTagChange(event, index)}
                                placeholder="Enter a tag"
                                className="border border-gray-300 text-black rounded-md px-3 py-2 mr-2"
                            />
                            <button onClick={() => handleDeleteTag(tag.index)} type="button" className="bg-red-500 hover:bg-red-700 text-white px-3 py-2 rounded-md">
                                Delete
                            </button>
                        </div>
                    ))}
                    <button onClick={handleAddTag} type="button" className="bg-blue-500 hover:bg-blue-700 text-white px-3 py-2 rounded-md">
                        Add Tag
                    </button>
                </div>
                {/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */}
                <div className="mb-6">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="location"
                    >
                        Location
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="location"
                        name="location"
                        type="text"
                        value={location} onChange={(e) => setLocation(e.target.value)}
                        placeholder="Enter location"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="duration"
                    >
                        Duration of post in days (Usually the day before the event)
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="duration"
                        name="duration"
                        type="number"
                        min="0"
                        step="1"
                        value={duration} onChange={(e) => setDuration(e.target.value)}
                        placeholder=""
                        required
                    />
                </div>
                <div className="mb-6">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="lapse"
                    >
                        How many times do you want this post to repost? (The duration will reset after each repost)
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="lapse"
                        name="lapse"
                        type="number"
                        min="0"
                        step="1"
                        value={lapse} onChange={(e) => setLapse(e.target.value)}
                        placeholder=""
                        required
                    />
                </div>
                <div className="mb-6">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="max"
                    >
                        How many people would you like for this job?
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="max"
                        name="max"
                        type="number"
                        min="1"
                        step="1"
                        value={max} onChange={(e) => setMax(e.target.value)}
                        placeholder=""
                        required
                    />
                </div>
                <div className="mb-6">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="visible"
                    >
                        Do you want this public immediately?
                    </label>
                    <input
                        type="checkbox"
                        name="toggle"
                        id="toggle"
                        className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-500 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
                        checked={visible}
                        onChange={(e) => setVisible(e.target.checked)}
                    />
                </div>
                <div className="flex items-center justify-center">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                        value="Submit"
                    >
                        Submit
                    </button>
                </div>
            </form>
        );
    } else {
        return (
            <div className="flex flex-col items-center justify-center h-screen">
                <svg
                    className="w-16 h-16 text-green-500 mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                    />
                </svg>
                <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-400 mb-2">Submitted successfully!</h1>
                <p className="text-gray-600 dark:text-gray-200 text-center">
                    Your post is now live on the site.
                </p>
                <Link href="/" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-8">
                    Back to Home
                </Link>
            </div>
        );
    }
};
