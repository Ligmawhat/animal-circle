import React from 'react';

const ProdavitoInModal = ({el}) => {
    console.log(el)

    return (

        <div className="flex justify-center items-center h-screen">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src={`http://localhost:3001/items/${el?.url}`} alt="Sunset in the mountains"/>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                        <p className="text-gray-700 text-base">
                            {el?.title}
                        </p>
                        <p className="text-gray-700 text-base">
                            {el?.description}
                        </p>
                        <p className="text-gray-700 text-base">
                            {el?.price}
                        </p>
                        <p className="text-gray-700 text-base">

                        </p>
                    </div>


            </div>
            </div>

    );
};

export default ProdavitoInModal;