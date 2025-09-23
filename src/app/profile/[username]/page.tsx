async function ProfilePage({ params }: {params: { username: string } }) {

  await new Promise((resolve) => setTimeout(resolve, 3000))
  return <div>ProfilePage</div>
}
export default ProfilePage;
