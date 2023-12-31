import React from 'react';

function Whisky(props) {
    return (
        <div>
            <>
                <div className="my-20">
                    <div className="flex flex-row justify-between my-5">
                        <h2 className="text-3xl">Whisky</h2>
                        <a href="#" className="flex flex-row text-lg hover:text-purple-700">
                            View All
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-7 w-5 ml-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                />
                            </svg>
                        </a>
                    </div>
                    <div className="grid grid-flow-row grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                        <div className="shadow-lg rounded-lg">
                            <a href="#">
                                <img
                                    src="./images/products/men/product1.jpg"
                                    className="rounded-tl-lg rounded-tr-lg"
                                />
                            </a>
                            <div className="p-5">
                                <h3>
                                    <a href="#">Mens T-Shirt</a>
                                </h3>
                                <div className="flex flex-row my-3">
                                    <div className="bg-black rounded-full h-5 w-5 shadow-md mr-2" />
                                    <div className="bg-blue-800 rounded-full h-5 w-5 shadow-md mr-2" />
                                    <div className="bg-white rounded-full h-5 w-5 shadow-md mr-2" />
                                    <div className="bg-red-800 rounded-full h-5 w-5 shadow-md mr-2" />
                                    <div className="bg-green-700 rounded-full h-5 w-5 shadow-md mr-2" />
                                </div>
                                <div className="flex flex-row my-3">
                                    <a
                                        className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs"
                                        href="#"
                                    >
                                        XL
                                    </a>
                                    <a
                                        className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs"
                                        href="#"
                                    >
                                        XXL
                                    </a>
                                    <a
                                        className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs"
                                        href="#"
                                    >
                                        L
                                    </a>
                                    <a
                                        className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs"
                                        href="#"
                                    >
                                        M
                                    </a>
                                    <a
                                        className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs"
                                        href="#"
                                    >
                                        S
                                    </a>
                                </div>
                                <div className="flex flex-col xl:flex-row justify-between">
                                    <a
                                        className="bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-pink-600 hover:from-pink-600 hover:to-pink-600 flex flex-row justify-center"
                                        href="#"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 mr-1"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                            />
                                        </svg>
                                        Add to cart
                                    </a>
                                    <a
                                        className="bg-purple-600 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-purple-700 flex flex-row justify-center"
                                        href="#"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 mr-1"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        View Details
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="shadow-lg rounded-lg">
                            <a href="#">
                                <img
                                    src="./images/products/men/product2.jpg"
                                    className="rounded-tl-lg rounded-tr-lg"
                                />
                            </a>
                            <div className="p-5">
                                <h3>
                                    <a href="#">Slim Khaki Tousers</a>
                                </h3>
                                <div className="flex flex-row my-3">
                                    <div className="bg-black rounded-full h-5 w-5 shadow-md mr-2" />
                                    <div className="bg-blue-800 rounded-full h-5 w-5 shadow-md mr-2" />
                                    <div className="bg-white rounded-full h-5 w-5 shadow-md mr-2" />
                                    <div className="bg-red-800 rounded-full h-5 w-5 shadow-md mr-2" />
                                    <div className="bg-green-700 rounded-full h-5 w-5 shadow-md mr-2" />
                                </div>
                                <div className="flex flex-row my-3">
                                    <a
                                        className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs"
                                        href="#"
                                    >
                                        XL
                                    </a>
                                    <a
                                        className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs"
                                        href="#"
                                    >
                                        XXL
                                    </a>
                                    <a
                                        className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs"
                                        href="#"
                                    >
                                        L
                                    </a>
                                    <a
                                        className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs"
                                        href="#"
                                    >
                                        M
                                    </a>
                                    <a
                                        className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs"
                                        href="#"
                                    >
                                        S
                                    </a>
                                </div>
                                <div className="flex flex-col xl:flex-row justify-between">
                                    <a
                                        className="bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-pink-600 hover:from-pink-600 hover:to-pink-600 flex flex-row justify-center"
                                        href="#"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 mr-1"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                            />
                                        </svg>
                                        Add to cart
                                    </a>
                                    <a
                                        className="bg-purple-600 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-purple-700 flex flex-row justify-center"
                                        href="#"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 mr-1"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        View Details
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="shadow-lg rounded-lg">
                            <a href="#">
                                <img
                                    src="./images/products/men/product3.jpg"
                                    className="rounded-tl-lg rounded-tr-lg"
                                />
                            </a>
                            <div className="p-5">
                                <h3>
                                    <a href="#">Nike Shoes</a>
                                </h3>
                                <div className="flex flex-row my-3">
                                    <div className="bg-black rounded-full h-5 w-5 shadow-md mr-2" />
                                    <div className="bg-blue-800 rounded-full h-5 w-5 shadow-md mr-2" />
                                    <div className="bg-white rounded-full h-5 w-5 shadow-md mr-2" />
                                    <div className="bg-red-800 rounded-full h-5 w-5 shadow-md mr-2" />
                                    <div className="bg-green-700 rounded-full h-5 w-5 shadow-md mr-2" />
                                </div>
                                <div className="flex flex-row my-3">
                                    <a
                                        className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs"
                                        href="#"
                                    >
                                        XL
                                    </a>
                                    <a
                                        className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs"
                                        href="#"
                                    >
                                        XXL
                                    </a>
                                    <a
                                        className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs"
                                        href="#"
                                    >
                                        L
                                    </a>
                                    <a
                                        className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs"
                                        href="#"
                                    >
                                        M
                                    </a>
                                    <a
                                        className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs"
                                        href="#"
                                    >
                                        S
                                    </a>
                                </div>
                                <div className="flex flex-col xl:flex-row justify-between">
                                    <a
                                        className="bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-pink-600 hover:from-pink-600 hover:to-pink-600 flex flex-row justify-center"
                                        href="#"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 mr-1"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                            />
                                        </svg>
                                        Add to cart
                                    </a>
                                    <a
                                        className="bg-purple-600 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-purple-700 flex flex-row justify-center"
                                        href="#"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 mr-1"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        View Details
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="shadow-lg rounded-lg">
                            <a href="#">
                                <img
                                    src="./images/products/men/product4.jpg"
                                    className="rounded-tl-lg rounded-tr-lg"
                                />
                            </a>
                            <div className="p-5">
                                <h3>
                                    <a href="#">Wirst Watch</a>
                                </h3>
                                <div className="flex flex-row my-3">
                                    <div className="bg-black rounded-full h-5 w-5 shadow-md mr-2" />
                                    <div className="bg-blue-800 rounded-full h-5 w-5 shadow-md mr-2" />
                                    <div className="bg-white rounded-full h-5 w-5 shadow-md mr-2" />
                                    <div className="bg-red-800 rounded-full h-5 w-5 shadow-md mr-2" />
                                    <div className="bg-green-700 rounded-full h-5 w-5 shadow-md mr-2" />
                                </div>
                                <div className="flex flex-row my-3">
                                    <a
                                        className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs"
                                        href="#"
                                    >
                                        XL
                                    </a>
                                    <a
                                        className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs"
                                        href="#"
                                    >
                                        XXL
                                    </a>
                                    <a
                                        className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs"
                                        href="#"
                                    >
                                        L
                                    </a>
                                    <a
                                        className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs"
                                        href="#"
                                    >
                                        M
                                    </a>
                                    <a
                                        className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs"
                                        href="#"
                                    >
                                        S
                                    </a>
                                </div>
                                <div className="flex flex-col xl:flex-row justify-between">
                                    <a
                                        className="bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-pink-600 hover:from-pink-600 hover:to-pink-600 flex flex-row justify-center"
                                        href="#"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 mr-1"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                            />
                                        </svg>
                                        Add to cart
                                    </a>
                                    <a
                                        className="bg-purple-600 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-purple-700 flex flex-row justify-center"
                                        href="#"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 mr-1"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        View Details
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>{" "}
                {/* Men's Collection Section */}
            </>

        </div>
    );
}

export default Whisky;