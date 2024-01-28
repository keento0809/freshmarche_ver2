import { FC } from "react";
import { Box } from "@mui/material";
import { ZodIssue } from "zod";

type ErrorMessageProps = {
  error: ZodIssue;
};

export const ErrorMessage: FC<ErrorMessageProps> = ({ error }) => {
  return <Box sx={{ color: "red", minWidth: "400px" }}>{error.message}</Box>;
};
