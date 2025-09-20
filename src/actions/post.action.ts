"use server"

import prisma from "@/lib/prisma";

export async function createPost(content:string, imageUrl:string) {
  try {
    const userId = await getDbUserId();

    const post = await prisma.post.create({
      data: {
        content,
        image,
        authorId
      }
    });
  } catch (error) {

  };
};