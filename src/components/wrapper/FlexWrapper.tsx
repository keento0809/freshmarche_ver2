import { Box } from "@mui/material";

type FlexWrapperProps = {
  children: React.ReactNode;
  styles?: { [key: string]: string };
};

export const FlexWrapper: React.FC<FlexWrapperProps> = ({
  children,
  styles,
}) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      sx={{ ...styles }}
    >
      {children}
    </Box>
  );
};
