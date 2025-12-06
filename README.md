# Social media web app

Social media web app built with nextjs.
deployed URL: social-media-nine-mauve.vercel.app

This is a full stack web app built on nextjs with: Typescript & React with shadcn and tailwind for the front end and styles, React DOM for routing, Prisma ORM, Clerk for auth and Vercel for deployment.


## Problems
I have a huge gripe with nextjs after this project. It was a great tool to work with espcially file based routing, felt like I didn't know myself going back to Vue. My issue was that during an update they completely changed async function params. Now the params are delivered as a promise. I understand why there's no issue there but I spend am embarrassing amount of time trying to fix a type error. Watched countless youtube videos, ChatGPT and all of them were right for the previous version of nextjs but not this one. I ended up reading the official documentation and got it correct. Should I have done that to begin with? Possibly but that's not the point lol. It makes me fearful of using it in future incase I need o refactor huge amounts of code just for an update. p.s. I'm writing this somewhat informally so you know I'm not using AI and that I actually understand the code I'm writing :). 

Here is my where days of my life were wasted: 

Before:
```TypeScript
export async function generateMetadata({ params, }: { params: { username: string }; }) {
  const user = await getProfileByUsername(params.username);
  if (!user) return;
```

After:
```TypeScript
export async function generateMetadata({ params }: { params: Promise<{ username: string }> }) {
  const { username } = await params;
  const user = await getProfileByUsername(username);
  if (!user) return {};
```
