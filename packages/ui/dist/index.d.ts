import * as React from "react";
export declare type Route = {
    path: string;
    element: React.FunctionComponent;
};
export declare type NavLink = {
    label: string;
    path: string;
};
export declare const AppShell: React.FC<{
    title: string;
    colorScheme?: "dark" | "light";
    routes: Route[];
    navLinks: NavLink[];
}>;
//# sourceMappingURL=index.d.ts.map