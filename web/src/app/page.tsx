import prisma from "@/integrations/prisma";
import { Fragment } from "react";

async function getData() {
  return await prisma.user.findMany();
}

export default async function Home() {
  const users = await getData();

  return (
    <div>
      {users.length === 0 ? (
        <>No users</>
      ) : (
        users.map((user) => (
          <Fragment key={user.id}>
            <>{user.id}</>
          </Fragment>
        ))
      )}
    </div>
  );
}
