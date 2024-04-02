import { cn } from "@/src/lib/utils";

interface Props {
  title: string;
  className?: string;
}

export default function MainTitle({ title, className }: Props) {
  return (
    <h2
      className={cn(
        "text-2xl tracking-tight font-semibold text-center",
        className
      )}
    >
      {title}
    </h2>
  );
}
