import React from "react";
import { AppRootRoutes } from "../routes/AppRootRoutes";
import { AppFooter } from "./Elements/AppFooter";
import { Stack } from "@mui/material";

type AppLayoutType = {
};

export const AppLayout: React.FC<AppLayoutType> = ({ }) => {

    return (
        <Stack flex={1} overflow={'auto'} flexGrow={1}>
            <AppRootRoutes />
            <AppFooter />
        </Stack>
    );
};