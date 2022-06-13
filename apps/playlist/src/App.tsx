import React, { ReactNode } from "react";
import { AppShell } from "ui";
import { PlaylistContent } from "playlist-content";
import { MoviesContent as MoviesContentBuildtime } from "movies-content";

//@ts-ignore
const MoviesContentRuntime = React.lazy(() => import("movies/Movies"));

class ErrorBoundary extends React.Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    // You can also log the error to an error reporting service
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <MoviesContentBuildtime />;
    }

    return this.props.children;
  }
}

function App() {
  return (
    <AppShell
      title="Playlist"
      colorScheme="dark"
      routes={[
        {
          path: "/",
          element: () => (
            <ErrorBoundary>
              <MoviesContentRuntime />
            </ErrorBoundary>
          ),
        },
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
