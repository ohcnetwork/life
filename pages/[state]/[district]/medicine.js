import React from "react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Medicine = ({ data }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch("http://localhost:3000/api/medicine");
      const posts = await res.json();
      setPosts(posts);
    };
    getPosts();
  }, []);
  const route = useRouter();
  const { state, district } = route.query;
  console.log(data);
  return <div>Medicine Slug Route</div>;
};

export default Medicine;
