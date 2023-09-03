import Typography from "@mui/material/Typography";

interface Props {
  title: string;
}

export default function MainTitle({ title }: Props) {
  return <Typography variant="h2">{title}</Typography>;
}
