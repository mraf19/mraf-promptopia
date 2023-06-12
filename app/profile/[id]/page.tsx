"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import { PromptTypes } from "@utils/type";
import ProfileComp from "@components/Profile";

const OtherProfilePage = ({ params }: any) => {
  const [posts, setPosts] = useState<PromptTypes[]>([]);
  const searchParams = useSearchParams();
  const userName = searchParams.get("name");

  useEffect(() => {
    const fetchUserPosts = async () => {
      const response = await fetch(`/api/users/${params.id}/posts`);
      const data = await response.json();
      setPosts(data);
    };
    fetchUserPosts();
  }, []);

  return (
    <ProfileComp
      data={posts}
      desc="Welcome to your personalized profile page. Share your exceptional prompts and inspire others with the power of your imagination"
      name={userName}
    />
  );
};

export default OtherProfilePage;
