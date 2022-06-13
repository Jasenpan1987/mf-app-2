import * as React from "react";
import {
  AppShell as MantineAppShell,
  Header,
  Title,
  MantineProvider,
  Navbar,
  Group,
  Text,
  UnstyledButton,
} from "@mantine/core";
import {
  BrowserRouter,
  Link,
  NavLink,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import { useStore } from "store";

export type Route = {
  path: string;
  element: React.FunctionComponent;
};

export type NavLink = {
  label: string;
  path: string;
};

function MainLink({ label, path }: NavLink) {
  return (
    <Link to={path}>
      <UnstyledButton
        sx={(theme) => ({
          display: "block",
          width: "100%",
          padding: theme.spacing.xs,
          borderRadius: theme.radius.sm,
          color:
            theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
          "&:hover": {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[6]
                : theme.colors.gray[0],
          },
        })}
      >
        <Group>
          <Text size="sm">{label}</Text>
        </Group>
      </UnstyledButton>
    </Link>
  );
}

export const AppShell: React.FC<{
  title: string;
  colorScheme?: "dark" | "light";
  routes: Route[];
  navLinks: NavLink[];
}> = ({ title, colorScheme, routes, navLinks }) => {
  const { movies } = useStore();

  return (
    <BrowserRouter>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme,
        }}
      >
        <MantineAppShell
          padding="md"
          styles={(theme) => ({
            main: {
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[8]
                  : theme.colors.gray[0],
            },
          })}
          header={
            <Header height={60} p="xs" sx={{ display: "flex" }}>
              <Title sx={{ flexGrow: 1 }}>{title}</Title>
              <Text size="xl">{movies.length} movie selected</Text>
            </Header>
          }
          navbar={
            <Navbar width={{ base: 300 }} height={500} p="xs">
              {navLinks.map((link) => (
                <MainLink {...link} key={link.path} />
              ))}
            </Navbar>
          }
        >
          <Routes>
            {routes.map((r) => (
              <Route key={r.path} path={r.path} element={<r.element />} />
            ))}
          </Routes>
          <Outlet />
        </MantineAppShell>
      </MantineProvider>
    </BrowserRouter>
  );
};
