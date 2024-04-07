import { SignupPage } from "./SignupPage";

export default function Page({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  return <SignupPage searchParams={searchParams} />;
}
