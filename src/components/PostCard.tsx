"use client"

import {Post} from "@prisma/client";
import {useState} from "react";
import {getPosts, toggleLike} from "@/actions/post.action";

type Posts = Awaited<ReturnType<typeof getPosts>>
type Post = Posts[number]

function PostCard({ post, dbUserId } : { post: Post; dbUserId: string | null }) {
  const { user } = newUser();
  const [newComment, setNewComment] = useState("");
  const [isCommenting, setIsCommenting] = useState(false);
  const [isLiking, setIsLiking] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [hasLiked, setHasLiked] = useState(post.likes.some(like => like.userId === dbUserId));
  const [optimisticLikes, setOptimisticLikes] = useState(post._count.likes); //no loading state - update likes now

  const handleLike = async () => {
    if (isLiking) return;

    try {
      setIsLiking(true)
      setHasLiked(prev => !prev)
      setOptimisticLikes(prev => prev + (hasLiked ? -1 : 1))
      await toggleLike(post.id)
    } catch (error) {
      setOptimisticLikes(post._count.likes);
      setHasLiked(like => like.userId === dbUserId))
    } finally {
      setIsLiking(false)
    }
  }

  const handleAddComment = async () => {}

  const handleDeletePost = async () => {}

  return <div>PostCard</div>
}

export default PostCard;
