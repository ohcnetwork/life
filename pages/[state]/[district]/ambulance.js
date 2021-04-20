import Head from 'next/head';
import { useEffect, useState } from 'react';

export default function Ambulance() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch('http://localhost:3000/api/ambulance');
      const posts = await res.json();
      setPosts(posts);
    }
    getPosts();
  }, [])

  console.log(posts)

  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <li
        className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200 hover:bg-gray-100 flex items-center">
        <div className="w-full flex justify-between p-6 space-x-6">
          <div className="flex-1 truncate">
            <div className=" items-center space-x-3 justify-self-start">
              <h3
                className="text-gray-900 text-md font-bold cursor-pointer"
              >
                {posts[0].name}
              </h3>
            </div>
            <div className="grid min-w-max">
              {posts[0].phoneNo1}
            </div>
          </div>
          <div className="mt-2 min-w-max text-sm sm:mt-0 sm:ml-4 sm:text-right">
            <div className="text-sm text-black">
              {posts[0].address}
            </div>
          </div>
        </div>
      </li >
    </ul >
  );
}
