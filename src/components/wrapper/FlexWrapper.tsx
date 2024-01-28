import { Box } from "@mui/material";

type FlexWrapperProps = {
  children: React.ReactNode;
  styles?: { [key: string]: string | number };
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
      gap={2}
      sx={{ ...styles }}
    >
      {children}
    </Box>
  );
};
