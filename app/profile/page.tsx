"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { PromptTypes } from "@utils/type";
import Profile from "@components/Profile";

const ProfilePage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const [posts, setPosts] = useState<PromptTypes[]>([]);

  const handleEdit = (post: PromptTypes) => {
    router.push(`/update-prompt?id=${post._id}`);
  };

  const handleDelete = async (post: PromptTypes) => {
    const hasConfirm = confirm("Are you sure to delete this prompt?");

    if (hasConfirm) {
      //delete data
      await fetch(`/api/prompt/${post._id}`, {
        method: "DELETE",
      });

      //fetch new prompt
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();
      setPosts(data);

      try {
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    const fetchUserPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();
      setPosts(data);
    };
    if (session?.user.id) fetchUserPosts();
  }, []);
  return (
    <Profile
      data={posts}
      name="My"
      desc="Welcome to your personalized profile page. Share your exceptional prompts and inspire others with the power of your imagination"
      handleDelete={handleDelete}
      handleEdit={handleEdit}
    />
  );
};

export default ProfilePage;
