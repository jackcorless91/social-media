"use client"

import {Post} from "@prisma/client";
import {useState} from "react";

function PostCard({ post, dbUserId } : { post: Post; dbUserId: string | null }) {
  const { user } = newUser();
  const [newComment, setNewComment] = useState("");
  const [isCommenting, setIsCommenting] = useState(false);
  return <div>PostCard</div>
}

export default PostCard;
