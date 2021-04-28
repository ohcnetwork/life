import React from 'react';

const Header = ({ title }) => {
    return (
        <h2 className="text-3xl text-center pb-5 md:pb-10  md:text-4xl xl:text-5xl tracking-tight font-bold leading-tight dark:text-white">
            {title}
        </h2>
    );
};

export default Header;
