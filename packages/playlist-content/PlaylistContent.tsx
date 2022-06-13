import React from "react";
import { Box, Grid, Title } from "@mantine/core";
import { MovieCard } from "card";
import { useStore } from "store";

const PlaylistContent = () => {
  const { movies } = useStore();

  return (
    <>
      <Box>
        <Title>Viewing playlist</Title>
      </Box>
      <Grid
        mt={20}
        sx={{
          gap: "1rem",
        }}
      >
        {movies.map((movie) => (
          <MovieCard {...movie} key={movie.title} showAddButton />
        ))}
      </Grid>
    </>
  );
};

export default PlaylistContent;
