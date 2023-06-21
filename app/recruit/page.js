"use client";
import React, { useState } from "react";
import path from 'path';

const Form = () => {
    // const [formData, setFormData] = useState({
    //     title: "",
    //     desc: "",
    //     email: ""
    // });

    // const [formSuccess, setFormSuccess] = useState(false);
    // const [formSuccessMessage, setFormSuccessMessage] = useState("");

    // const handleInput = (e) => {
    //     const fieldName = e.target.name;
    //     const fieldValue = e.target.value;

    //     setFormData((prevState) => ({
    //         ...prevState,
    //         [fieldName]: fieldValue
    //     }));
    // }

    // const submitForm = (e) => {
    //     if (e && e.preventDefault) { e.preventDefault(); }

    //     const formURL = e.target.action
    //     const data = new FormData()

    //     // Turn our formData state into data we can use with a form submission
    //     Object.entries(formData).forEach(([key, value]) => {
    //         data.append(key, value);
    //     })

    //     // POST the data to the URL of the form
    //     fetch(formURL, {
    //         method: "POST",
    //         body: data,
    //         headers: {
    //             'accept': 'application/json',
    //         },
    //     }).then((response) => response.json())
    //     .then((data) => {
    //         setFormData({
    //             name: "",
    //             email: "",
    //             message: ""
    //         })

    //         setFormSuccess(true)
    //         setFormSuccessMessage(data.submission_text)
    //     })
    // }

    const [formSuccess, setFormSuccess] = useState(false);

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        email: '',
    });

    const handleSubmit = async (e) => {
        console.log('Submitting form data...');
        console.log(formData);
    };


    return (
        <>{formSuccess ? <h1>Submission Sucecss!</h1> :
            <form className="max-w-sm mx-auto bg-blue-200 border-black border shadow-md rounded p-8 mb-4">
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
                        placeholder="Enter description"
                        rows={4}
                        required
                    ></textarea>
                </div>
                <div className="mb-6">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="email"
                    >
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter email"
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
            </form>}</>
    );
};

export default Form;
