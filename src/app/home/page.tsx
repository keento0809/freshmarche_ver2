import { HomePage } from "./HomePage";

export default function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query || "";
  return <HomePage query={query} />;
}
