
import { prismaClient } from "@repo/db/client";


export default async function Home() {
  const user = await prismaClient.users.findFirst();

  return (
    <div>Username:
      <br />
      {user?.username}
      <br />
      Password:
      {user?.password}
      <br />
      <div>
        hi there
      </div>
    </div>
  );
}
