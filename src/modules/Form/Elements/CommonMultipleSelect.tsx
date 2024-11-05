import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { useEffect, useRef, useState } from 'react';
import { Stack, Typography } from '@mui/material';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

type CommonSelectType = {
    label: string;
    value?: (string | number)[];
    onChange: any;// (value: string[]) => void;
    required?: boolean;
    error?: string;
    data: { label: string, value: string | number }[];
    withMedia?: 'image' | 'video',
};

export const CommonMultipleSelect: React.FC<CommonSelectType> = ({ error, label, value = [], data, onChange, required, withMedia }) => {
    const [personName, setPersonName] = useState(value);
    const isFiltered = useRef(false);

    const handleChange = (event: SelectChangeEvent<typeof personName>) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
        onChange(event);
    };

    useEffect(() => {
        if (!isFiltered.current && data?.length) {
            const dataArray = data.map(item => item.value);
            const filter = value.filter(item => dataArray.includes(+item));
            onChange({ target: { value: filter, name: undefined } });
            isFiltered.current = true;
        }
        setPersonName(value);
        // eslint-disable-next-line
    }, [value, data]);

    const renderList = (): JSX.Element[] => data.map((item) => {
        const adorement = withMedia === 'image'
            ? <img src={item.label.toString()} width={50} height={50} alt="" />
            : withMedia === 'video'
                ? <video src={item.label.toString()} controls width={150} height={150} />
                : null;

        return (
            <MenuItem key={item.label} value={item.value}>
                <Stack direction={'row'} spacing={2} alignItems={'center'}>
                    <Checkbox checked={personName.indexOf(item.value) > -1} />
                    {adorement}
                    <div>
                        <ListItemText primary={item.label} />
                    </div>
                </Stack>
            </MenuItem>

        )
    });

    return (
        <FormControl fullWidth size='small'>
            <InputLabel id="demo-multiple-checkbox-label">{label}</InputLabel>
            <Select
                size='small'
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                required={required}
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput label={label} />}
                renderValue={(selected) => selected ? selected.join(', ') : ''}
                MenuProps={MenuProps}
            >
                {/* {data.map((item) => (
                    <MenuItem key={item.label} value={item.value}>
                        <Checkbox checked={personName.indexOf(item.value) > -1} />
                        <ListItemText primary={item.label} />
                    </MenuItem>
                ))} */}
                {renderList()}
            </Select>
            {error && <Typography variant="caption" color="error">{error}</Typography>}
        </FormControl>
    );
}