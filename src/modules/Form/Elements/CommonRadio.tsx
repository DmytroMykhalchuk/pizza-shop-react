import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

type CommonRadioType = {
    values: {
        value: string;
        label: string;
    }[];
    label: string;
    onChange: (value: string) => void;
    value: string;
};

export const CommonRadio: React.FC<CommonRadioType> = ({ label, values, value, onChange }) => {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange((event.target as HTMLInputElement).value);
    };

    return (
        <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group">{label}</FormLabel>
            <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={handleChange}
            >
                {
                    values.map(item=>(
                        <FormControlLabel key={item.value} value={item.value} control={<Radio />} label={item.label} />
                    ))
                }
            </RadioGroup>
        </FormControl>
    );
}