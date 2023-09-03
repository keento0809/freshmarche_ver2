import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

interface Props {
  onClick: () => void;
  text: string;
}

export default function BaseButton({ onClick, text }: Props) {
  return (
    <Button variant="contained" startIcon={<DeleteIcon />} onClick={onClick}>
      {text}
    </Button>
  );
}
