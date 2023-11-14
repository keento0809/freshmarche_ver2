export default async function Page() {
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
