import { Box } from "@mui/material";
import { ReactNode } from "react";

type BoxTranslateCommonType = {
    children: ReactNode;
};

export const BoxTranslateCommon: React.FC<BoxTranslateCommonType> = ({ children }) => {

    return (
        <Box sx={{
            borderRadius: 2,
            p: 0.5,
            border: 1,
            borderColor: 'secondary.main',
            borderStyle: 'solid',
        }}>
            {children}
        </Box>
    );
};