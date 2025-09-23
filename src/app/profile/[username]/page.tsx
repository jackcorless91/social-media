import {getProfileByUsername, getUserLikedPosts, getUserPosts, isFollowing} from "@/actions/profile.action";
import {notFound} from "next/navigation";

export async function generateMetaData({ params }: {params: { username: string } }) {
  const user = await getProfileByUsername(params.username)
  if (!user) return;

  return {
    title: `${user.name ?? user.username}`,
    description: user.bio || `Check out ${user.username}'s profile.`,
  };
}

async function ProfilePage({ params }: {params: { username: string } }) {
  const user = await getProfileByUsername(params.username)

  if (!user) notFound();

  const [posts, likedPosts, isCurrentUserFollowing] = await Promise.all([
      getUserPosts(user.id),
      getUserLikedPosts(user.id),
      isFollowing(user.id),
  ])

  await new Promise((resolve) => setTimeout(resolve, 3000))
  return <div>ProfilePage</div>
}
export default ProfilePage;
