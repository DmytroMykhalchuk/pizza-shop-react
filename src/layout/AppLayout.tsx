import React from "react";
import { AppRoutes } from "../routes/AppRoutes";
import { AppFooter } from "./Elements/AppFooter";
import { Stack } from "@mui/material";

type AppLayoutType = {
};

export const AppLayout: React.FC<AppLayoutType> = ({ }) => {

    return (
        <Stack flex={1}>
            <AppRoutes />
            <AppFooter />
        </Stack>
    );
};