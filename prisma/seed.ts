import prisma from "../src/lib/prisma";

async function main() {
  const response = await Promise.all([
    prisma.user.upsert({
      where: { email: "kevin@gmail.com" },
      update: {},
      create: {
        name: "Kevin Brown",
        email: "kevin@gmail.com",
        image_url: "",
        password: "kevin",
        cart: undefined,
      },
    }),
    prisma.user.upsert({
      where: { email: "kate@gmail.com" },
      update: {},
      create: {
        name: "Kate White",
        email: "kate@gmail.com",
        image_url: "",
        password: "kk",
        cart: undefined,
      },
    }),
    prisma.user.upsert({
      where: { email: "mike@gmail.com" },
      update: {},
      create: {
        name: "Mike Trout",
        email: "mike@gmail.com",
        image_url: "",
        password: "mm",
        cart: undefined,
      },
    }),
  ]);
  console.log(response);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
