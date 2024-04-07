import { SignupPage } from "./_components/SignupPage";

export default function Page({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  return <SignupPage searchParams={searchParams} />;
}
