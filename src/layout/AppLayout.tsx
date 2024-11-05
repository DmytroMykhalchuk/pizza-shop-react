import React from "react";
import { AppRootRoutes } from "../routes/AppRootRoutes";
import { AppFooter } from "./Elements/AppFooter";
import { Stack } from "@mui/material";
import { bottomBarHeight } from "../constants/stylesConstant";

type AppLayoutType = {
};

export const AppLayout: React.FC<AppLayoutType> = ({ }) => {

    return (
        <Stack flex={1} overflow={'auto'} flexGrow={1}>
            <Stack flex={1} mb={bottomBarHeight+'px'}>
                <AppRootRoutes />
            </Stack>
            <AppFooter />
        </Stack >
    );
};