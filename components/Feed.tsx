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
  const [searchedResults, setSearchedResults] = useState<PromptTypes[]>([]);

  const fetchPost = async () => {
    const response = await fetch("/api/prompt");

    const data = await response.json();

    setPosts(data);
  };

  const filterPrompts = (textSearch: string) => {
    const regex = new RegExp(textSearch, "i");
    return posts.filter(
      (post) =>
        regex.test(post.creator.username) ||
        regex.test(post.tag) ||
        regex.test(post.prompt)
    );
  };
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextSearch(e.target.value);

    const searchResult = filterPrompts(e.target.value);
    setSearchedResults(searchResult);
  };

  const handleTagClick = (tagName: string) => {
    setTextSearch(tagName);
    const filteredPrompt = filterPrompts(tagName);
    setSearchedResults(filteredPrompt);
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
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>
      {textSearch ? (
        <PromptCardList
          data={searchedResults}
          handleTagClick={handleTagClick}
        />
      ) : (
        <PromptCardList data={posts} handleTagClick={handleTagClick} />
      )}
    </section>
  );
};

export default Feed;
