import { FC } from "react";
import { ZodIssue } from "zod";

type ErrorMessageProps = {
  error: ZodIssue;
};

export const ErrorMessage: FC<ErrorMessageProps> = ({ error }) => {
  return <div className="text-red-500 min-w-[400px]">{error.message}</div>;
};
