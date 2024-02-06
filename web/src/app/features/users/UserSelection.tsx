import { BsPersonCircle } from "react-icons/bs";

import prisma from "@/integrations/prisma";

async function getUsers() {
  return prisma.user.findMany();
}

export default async function UserSelection() {
  const users = await getUsers();

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(6rem,1fr))] gap-4">
      {users.map((user) => (
        <div key={user.username} className="inline-flex flex-col items-center">
          <BsPersonCircle className="size-full text-blue-500" />
          <div>{user.username}</div>
        </div>
      ))}
    </div>
  );
}
