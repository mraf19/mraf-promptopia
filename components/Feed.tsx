"use client";

import { PromptCardListType, PromptCardTypes, PromptTypes } from "@utils/type";
import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }: PromptCardListType) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post: PromptTypes) => (
        <PromptCard
          key={post._id}
          data={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

const Feed = () => {
  const [posts, setPosts] = useState<PromptTypes[]>([]);

  const [textSearch, setTextSearch] = useState("");

  const fetchPost = async () => {
    const response = await fetch("/api/prompt");

    const data = await response.json();

    setPosts(data);
  };

  const handleSearchChanhe = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextSearch(e.target.value);
  };

  const handleTagClick = (text: string) => {
    setTextSearch(text);
  };

  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or a username"
          value={textSearch}
          onChange={handleSearchChanhe}
          required
          className="search_input peer"
        />
      </form>
      <PromptCardList data={posts} handleTagClick={handleTagClick} />
    </section>
  );
};

export default Feed;
