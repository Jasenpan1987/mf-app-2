import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, Image, Text, Button, Group, useMantineTheme, } from "@mantine/core";
import { useStore } from "store";
export const MovieCard = ({ title, image, showAddButton }) => {
    const theme = useMantineTheme();
    const { addMovie } = useStore();
    return (_jsxs(Card, Object.assign({ shadow: "sm", p: "lg" }, { children: [_jsx(Card.Section, { children: _jsx(Image, { src: image, height: 320, alt: title }) }), _jsx(Group, Object.assign({ position: "apart", style: { marginBottom: 5, marginTop: theme.spacing.sm } }, { children: _jsx(Text, Object.assign({ weight: 500 }, { children: title })) })), showAddButton && (_jsx(Button, Object.assign({ variant: "light", color: "blue", fullWidth: true, style: { marginTop: 14 }, onClick: () => addMovie({ title, image }) }, { children: "Add To List" })))] })));
};
