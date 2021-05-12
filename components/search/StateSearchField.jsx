import React, { useState, createRef } from "react";
import { isTrendingPlace, getSuggestedListByState, getSuggestedWordByState } from "@lib/search";
import TrendingIcon from "@components/icons/TrendingIcon";
import { useRouter } from "next/router";
import { parametreize } from "@lib/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faGlobeAsia, faTimes } from "@fortawesome/free-solid-svg-icons";
import { resources } from "./SearchIntro";

const StateSearchField = ({ resource, setResource, state }) => {
    const [searchText, setSearchText] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isFocus, onFocus] = useState(false);
    const suggestionText = getSuggestedWordByState(searchText, state);
    const suggestedResults = getSuggestedListByState(searchText, state, resource);
    const searchFieldRef = createRef();
    const pageRouter = useRouter();

    const handleSearchKeyDown = e => {
        if (e.key === "Tab") {
            e.preventDefault();
            if (suggestionText.name) {
                setSearchText(suggestionText.name);
            }
        } else if (e.key === "Escape") {
            e.preventDefault();
            searchFieldRef.current?.blur();
        } else if (e.key === "Enter" && suggestionText?.name) {
            handleGotoResource(suggestionText)
        }
    };

    const handleGotoResource = (result) => {
        setIsLoading(true);
        setSearchText(result.name);
        const { name, type, state } = result;
        if (type === "District") {
            pageRouter.push(
                `/${parametreize(state)}/${parametreize(name)}/${parametreize(resource)}`
            )
        }
        else if (type === "State") {
            pageRouter.push(`/${parametreize(name)}/?resource=${resource}`)
        }

    }

    const handleTabChange = (name) => {
        setResource(name)
        setTimeout(() => {
            document.getElementById("searchField")?.focus();
        }, 500)
    }

    return (
        <div className="m-5">
            <div className="flex items-center justify-around flex-wrap my-2 font-semibold">
                {[{ name: "All", icon: faGlobeAsia }, ...resources].map(({ name, icon }) =>
                    <div
                        onClick={(_) => handleTabChange(name)}
                        className={"flex items-center cursor-pointer dark:text-gray-500 px-2 pt-1 border-primary-600 pb-1 text-center" + (name === resource ? " border-b-2 dark:text-primary-500 text-indigo-800" : "")}
                        key={name}>
                        <FontAwesomeIcon icon={icon} className="w-4 mr-1" />
                        <span>{name}</span>
                    </div>
                )}
            </div>
            <div className={"my-2 relative w-full " + (isLoading && "animate-pulse")} >
                <input
                    type="text"
                    readOnly={true}
                    className="p-4 pl-6 text-base bg-white dark:bg-gray-1000 md:text-xl placeholder-gray-600 rounded-xl outline-none w-full z-0"
                    placeholder={suggestionText.displayText}
                />
                <input
                    id="searchField"
                    disabled={isLoading}
                    ref={searchFieldRef}
                    autoComplete="off"
                    onKeyDown={handleSearchKeyDown}
                    onFocus={_ => onFocus(true)}
                    onChange={({ target: { value } }) => setSearchText(value)}
                    onBlur={_ => {
                        setTimeout(() => {
                            onFocus(false);
                        }, 200)
                    }}
                    value={searchText}
                    type="text"
                    className="p-4 pl-6 text-base md:text-xl transition-shadow duration-300 ease-in-out shadow-md hover:shadow-lg focus:shadow-xl placeholder-gray-600 dark:text-white rounded-xl z-10 outline-none w-full absolute top-0 left-0 bg-transparent"
                    placeholder={`Search for districts with ${resource} resources`}
                />
                {/* I am using Custom Close Icon instead of input[type='search'] to use dark style */}
                {
                    (searchText && !isLoading) &&
                    <span className="absolute top-0 right-0 z-20 m-4 md:m-5" onClick={(_) => setSearchText("")}>
                        <FontAwesomeIcon icon={faTimes} className="w-3 h-3 dark:text-primary-400 text-secondary-600" />
                    </span>
                }
                {/* Loading Icon when the user makes use of suggestions */}
                {
                    isLoading &&
                    <span className="absolute top-0 right-0 z-20 m-4 md:m-5" onClick={(_) => setSearchText("")}>
                        <FontAwesomeIcon icon={faCog} className="w-3 h-3 dark:text-primary-400 text-secondary-600" spin />
                    </span>
                }
            </div>
            {isFocus && (
                <div className="mt-8 px-2">
                    <h2 className="text-gray-600 text-sm">
                        {!suggestedResults.length
                            ? "We couldn't find suggestions for you.. 💤"
                            : "Suggestions ⚡"}
                    </h2>
                    <ul
                        className="grid grid-cols-1 gap-1 sm:grid-cols-2 justify-center pt-3">
                        {suggestedResults.map((result, id) => (
                            <li
                                key={`${result.name}${id}`}
                                onClick={(_) => handleGotoResource(result)}
                                className="py-2 px-1 flex mt-1 bg-gray-200 dark:bg-gray-1200 hover:bg-gray-300 dark:hover:bg-gray-1000 cursor-pointer rounded-lg items-center justify-between">
                                <div className="flex items-center text-gray-500">
                                    {isTrendingPlace(result.name) && (
                                        <TrendingIcon className="h-5 w-5 text-red-600" />
                                    )}
                                    <span className="font-normal text-lg ml-1 text-gray-600 dark:text-gray-400">
                                        {result.name}
                                    </span>
                                </div>
                                <span className="font-semibold text-xs py-1 px-3 h-min rounded-full bg-gray-200 dark:bg-gray-1000 text-red-800 dark:text-red-300">
                                    {result.state || result.type}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};
export default StateSearchField;
