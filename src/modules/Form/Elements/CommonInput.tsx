import { Box, TextField, Typography } from "@mui/material";

type CommonInputType = {
    label: string;
    value: string;
    onChange: (value: string) => void;
    type?: 'text' | 'number' | 'password' | 'email',
    required?: boolean;
    error?: string;
    multiline?: boolean
    minRows?: number;
};

export const CommonInput: React.FC<CommonInputType> = ({ label, value, onChange, type = 'text', required, error, minRows }) => {
    const onChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.currentTarget.value;
        onChange(value);
    };

    return (
        <Box width={'100%'}>
            <TextField
                label={label}
                value={value}
                onChange={onChangeValue}
                size="small"
                type={type}
                required={required}
                sx={{ width: '100%' }}
                autoComplete="off"
                multiline={type === 'text'}
                minRows={minRows}
            />
            {error &&
                <Typography variant="caption" color="error">{error}</Typography>
            }
        </Box>
    );
};