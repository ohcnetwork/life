import React from 'react';

const V2Card = ({ data }) => {
    return (
        <div className="my-8 p-3 dark:bg-gray-1000 bg-gray-200">
            <div>
                <text className="text-gray-500">State:</text> {data.state}
            </div>
            <div>
                <text className="text-gray-500">Data Name:</text> {data.data_name}
            </div>
            <div>
                <text className="text-gray-500">District:</text> {data.district}
            </div>
            <div>
                <text className="text-gray-500">Category:</text> {data.category}
            </div>
            <div>
                <text className="text-gray-500">Phone 1:</text> {data.phone_1}
            </div>
            <div>
                <text className="text-gray-500">Name:</text> {data.title}
            </div>
            <div>
                <text className="text-gray-500">Verified By:</text> {data.verified_by}
            </div>
        </div>
    );
};

export default V2Card;
