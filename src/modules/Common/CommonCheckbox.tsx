import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";

type CommonCheckboxType = {
    label: string;
    value: boolean;
    onChange: any;
    required?: boolean;
    error?: string;
    name?: string;
};

export const CommonCheckbox: React.FC<CommonCheckboxType> = ({name, label, value, onChange, required, error }) => {
    const checkBox = (
        <Checkbox
            checked={value}
            onChange={onChange}
            name={name}
        />
    );

    return (
        <Box width={'100%'}>
            <FormControlLabel
                control={checkBox}
                label={label}
                required={required}
            />
            {error &&
                <Typography variant="caption" color="error">{error}</Typography>
            }
        </Box>
    );
};