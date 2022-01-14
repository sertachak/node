import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// A `main` function so that you can use async/await
async function main() {
  // ... you will write your Prisma Client queries here
  const allUsers = await prisma.user.findMany({
    include: { posts: true },
  })
  // use `console.dir` to print nested objects
  console.dir(allUsers, { depth: null })

  await prisma.user.create({
    data:{
      name: "coko",
      email: "coko@treat.com",
      posts:{
        create:{title:'Feed me human'}
      }
    }
  }).catch((e) => {
    console.dir(e);
  })

  const allUsers1 = await prisma.user.findMany({
    include:{
      posts: true
    }
  })

  console.dir(allUsers1, {depth: null})



}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
