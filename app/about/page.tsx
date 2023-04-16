"use client";

import { getTestData } from "@/app/server/test/test";
import { Box, Typography } from "@mui/material";

interface TestD {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default async function About() {
  const testData: TestD[] = await getTestData();

  return (
    <Box sx={{ padding: "6rem 0" }}>
      About page
      <Box>
        {testData?.map((d) => {
          return (
            <div key={d.id}>
              <Typography variant="h6" sx={{ padding: "1rem" }}>
                {d.title}
              </Typography>
              <Typography variant="body1" sx={{ padding: "2rem" }}>
                {d.body}
              </Typography>
            </div>
          );
        })}
      </Box>
    </Box>
  );
}
