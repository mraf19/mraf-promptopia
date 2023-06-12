"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { PromptTypes } from "@utils/type";

const ProfilePage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const [Posts, setPosts] = useState<PromptTypes[]>([]);

  const fetchUserPosts = async () => {
    const response = await fetch(`/api/users/${session?.user.id}/posts`);
    const data = await response.json();
    setPosts(data);
    console.log(data);
  };
  useEffect(() => {
    fetchUserPosts();
  }, []);
  return <div>ProfilePage</div>;
};

export default ProfilePage;
