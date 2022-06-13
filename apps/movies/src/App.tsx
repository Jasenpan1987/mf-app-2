import React from "react";
import { AppShell } from "ui";
import { MoviesContent } from "movies-content";
import { PlaylistContent } from "playlist-content";

function App() {
  return (
    <AppShell
      title="Movies"
      routes={[
        { path: "/", element: MoviesContent },
        { path: "/playlist", element: PlaylistContent },
      ]}
      navLinks={[
        { label: "HOME", path: "/" },
        {
          label: "PLAYLIST",
          path: "/playlist",
        },
      ]}
    />
  );
}

export default App;
