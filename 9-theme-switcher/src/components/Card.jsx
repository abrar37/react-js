import React from "react";
import useTheme from "../context/theme";

export default function Card() {
    const {themeMode} = useTheme()

    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <img className="p-8 rounded-t-lg" src="https://source.unsplash.com/700x500/?nature" alt="product_image1" />
            <div className="px-5 pb-5">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    Theme Switcher Using Context API
                </h5>
                <div className="flex justify-center mt-2.5 mb-5 dark:text-white">
                    Image Source: Unsplash API
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">Theme Mode: {themeMode.toUpperCase()}</span>
                    <a
                        href="https://unsplash.com/"
                        target="blank"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Unsplash Website
                    </a>
                </div>
            </div>
        </div>
    );
}
