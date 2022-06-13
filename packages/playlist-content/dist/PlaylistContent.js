import { createElement as _createElement } from "react";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Grid, Title } from "@mantine/core";
import { MovieCard } from "card";
import { useStore } from "store";
const PlaylistContent = () => {
    const { movies } = useStore();
    return (_jsxs(_Fragment, { children: [_jsx(Box, { children: _jsx(Title, { children: "Viewing playlist" }) }), _jsx(Grid, Object.assign({ mt: 20, sx: {
                    gap: "1rem",
                } }, { children: movies.map((movie) => (_createElement(MovieCard, Object.assign({}, movie, { key: movie.title, showAddButton: true })))) }))] }));
};
export default PlaylistContent;
