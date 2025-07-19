import {client} from "@repo/db/client";



export default async function Home() {
  const user = await client.user.findFirst()
  return (
    <div >
      User: {user?.username}
      Password: {user?.password}
      karma karo
    </div>
  );
}
