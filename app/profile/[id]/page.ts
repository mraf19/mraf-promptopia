"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { PromptTypes } from "@utils/type";
import Profile from "@components/Profile";

const OtherProfilePage = () => {
  const { data: session } = useSession();

  const searchParams = useSearchParams();
  const userId = searchParams.get("id");

  const [posts, setPosts] = useState<PromptTypes[]>([]);

  useEffect(() => {
    const fetchUserPosts = async () => {
      const response = await fetch(`/api/users/${userId}/posts`);
      const data = await response.json();
      setPosts(data);
    };
    if (session?.user.id) fetchUserPosts();
  }, []);

  return <Profile />;
};

export default OtherProfilePage;
