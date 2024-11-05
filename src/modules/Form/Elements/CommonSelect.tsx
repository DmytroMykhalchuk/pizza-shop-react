import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Stack, Typography } from "@mui/material";

type CommonSelectType = {
    label: string;
    value?: string | number;
    onChange: (value: string) => void;
    required?: boolean;
    error?: string;
    data: { label: string, value: string | number }[];
    withMedia?: 'image' | 'video',
};

export const CommonSelect: React.FC<CommonSelectType> = ({ label, value, onChange, required, error, data, withMedia }) => {
    const onChangeValue = (event: SelectChangeEvent) => {
        const value = event.target.value;
        onChange(value.toString());
    };

    const renderList = (): JSX.Element[] => data.map((item) => {
        const adorement = withMedia === 'image'
            ? <img src={item.label.toString()} width={50} height={50} alt="" />
            : withMedia === 'video'
                ? <video src={item.label.toString()} controls width={150} height={150} />
                : null;

        return (
            <MenuItem value={item.value} key={item.value}>
                <Stack direction={'row'} spacing={2} alignItems={'center'}>
                    {adorement}
                    <div>
                        {item.label}
                    </div>
                </Stack>
            </MenuItem>
        )
    });

    return (
        <Box width={'100%'}>
            <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-label">{label}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value?.toString()}
                    label={label}
                    onChange={onChangeValue}
                    required={required}
                    size="small"
                >
                    {renderList()}
                </Select>
            </FormControl>
            {error && <Typography variant="caption" color="error">{error}</Typography>}
        </Box>
    );
};