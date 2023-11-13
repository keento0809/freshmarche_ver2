import { getServerAuthSession } from "../api/auth/[...nextauth]/route";

export default async function Page() {
  const session = await getServerAuthSession();
  console.log("aru? ", session);
  return (
    <div
      style={{
        position: "relative",
        paddingTop: "100px",
        paddingLeft: "6rem",
      }}
    >
      This page is protected, so only authorized users can see it.
    </div>
  );
}
