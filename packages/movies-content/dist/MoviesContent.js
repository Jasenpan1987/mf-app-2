import { createElement as _createElement } from "react";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Grid, Title } from "@mantine/core";
import { MovieCard } from "card";
const movies = [
    {
        title: "Halo",
        image: "https://www.themoviedb.org/t/p/w440_and_h660_face/eO0QV5qJaEngP1Ax9w3eV6bJG2f.jpg",
    },
    {
        title: "Doctor Strange",
        image: "https://www.themoviedb.org/t/p/w440_and_h660_face/uGBVj3bEbCoZbDjjl9wTxcygko1.jpg",
    },
    {
        title: "The Lost City",
        image: "https://www.themoviedb.org/t/p/w440_and_h660_face/neMZH82Stu91d3iqvLdNQfqPPyl.jpg",
    },
    {
        title: "Shang-Chi",
        image: "https://www.themoviedb.org/t/p/w440_and_h660_face/1BIoJGKbXjdFDAqUEiA2VHqkK1Z.jpg",
    },
    {
        title: "Turning Red",
        image: "https://www.themoviedb.org/t/p/w440_and_h660_face/qsdjk9oAKSQMWs0Vt5Pyfh6O4GZ.jpg",
    },
    {
        title: "Encanto",
        image: "https://www.themoviedb.org/t/p/w440_and_h660_face/4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg",
    },
    {
        title: "Adam Project",
        image: "https://www.themoviedb.org/t/p/w440_and_h660_face/wFjboE0aFZNbVOF05fzrka9Fqyx.jpg",
    },
    {
        title: "Morbius",
        image: "https://www.themoviedb.org/t/p/w440_and_h660_face/6JjfSchsU6daXk2AKX8EEBjO3Fm.jpg",
    },
];
const MoviesContent = () => (_jsxs(_Fragment, { children: [_jsx(Title, Object.assign({ mb: 10 }, { children: "Movies" })), _jsx(Grid, Object.assign({ sx: {
                gap: "1rem",
            } }, { children: movies.map((movie) => (_createElement(MovieCard, Object.assign({}, movie, { key: movie.title, showAddButton: true })))) }))] }));
export default MoviesContent;
