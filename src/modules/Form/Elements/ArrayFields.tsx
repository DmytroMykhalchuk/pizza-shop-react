import { Button, Grid, Stack, Typography } from "@mui/material";
import { FieldArray } from "formik";
import { useState } from "react";
import { CommonInput } from "./CommonInput";

type ArrayFieldsType = {
    index: number;
    values: any;
    errors: any;
    handleChange: any;
    arrayName: string;
    label: string;
    onChanePrefix: string;
    itemLabel: string;
};

export const ArrayFields: React.FC<ArrayFieldsType> = ({ handleChange, errors, values, index, arrayName, label, onChanePrefix, itemLabel }) => {
    const [fieldCount, setFieldCount] = useState(values.length);

    return (
        <Stack spacing={1} p={2} sx={{
            border: '1px solid #000',
            borderRadius: 4,
        }}>
            <FieldArray name={`translations.[${index}].${arrayName}`}>
                {({ push, remove, }) => (
                    <Grid container>
                        <Grid item xs={12} mb={2}>
                            <Stack direction={'row'} justifyContent={'space-between'}>
                                <Typography variant="h6">{label}</Typography>

                                <Button variant="outlined" color="success" onClick={() => {
                                    setFieldCount((prev: number) => prev + 1);
                                    push('');
                                }}>
                                    Add new
                                </Button>
                            </Stack>
                        </Grid>
                        {Array.from({ length: fieldCount }).map((_, arrayIndex) => {
                            return (
                                <Grid item key={arrayIndex + '-' + index} xs={4} p={1}>
                                    <Stack spacing={1}>
                                        <CommonInput
                                            label={`${itemLabel} (${arrayIndex + 1})`}
                                            value={values[arrayIndex]}
                                            onChange={handleChange(`${onChanePrefix}${arrayName}[${arrayIndex}]`)}
                                            required
                                            error={Array.isArray(errors) ? errors[arrayIndex] : ''}
                                        />
                                        <Stack justifyContent={'center'}>
                                            {
                                                arrayIndex > 0 &&
                                                <Button variant="outlined" color="error" onClick={() => {
                                                    setFieldCount((prev: number) => prev - 1);
                                                    remove(arrayIndex);
                                                }}>
                                                    Remove
                                                </Button>
                                            }
                                        </Stack>
                                    </Stack>
                                </Grid>
                            )
                        })}

                    </Grid>
                )}
            </FieldArray>
        </Stack>
    );
};