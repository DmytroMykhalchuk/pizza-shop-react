import { Button, Grid, Stack, Typography } from '@mui/material';
import { CommonInput } from './CommonInput';
import { FieldArray } from 'formik';
import { UploadInput } from './UploadInput';

type ArrayPropertyFieldsType = {
    index: number;
    values: any;
    errors: any;
    handleChange: any;
    arrayName: string;
    label: string;
    onChanePrefix: string;
    schema: {
        fieldName: string;
        label: string;
        minRows?: number;
        type?: 'imageSelect' | 'text' | 'number',
    }[];
    setFieldValue?: any;
};

export const ArrayPropertyFields: React.FC<ArrayPropertyFieldsType> = ({
    handleChange, errors, values, index, arrayName, label, onChanePrefix, schema,
    setFieldValue,
}) => {
    const addNewItem = (push: Function) => {
        const itemObject = {} as { [name: string]: string };
        schema.forEach(item => {
            itemObject[item.fieldName] = '';
        });
        push(itemObject);
    };

    const renderSchema = (arrayIndex: number) => schema.map((item, schemaIndex) => {
        const fieldError = Array.isArray(errors) && errors[arrayIndex] ? errors[arrayIndex][item.fieldName] : '';
        const fieldValue = values[arrayIndex] ? values[arrayIndex][item.fieldName] : '';

        if (item.type === 'imageSelect') {
            console.log(`${onChanePrefix}${arrayName}[${arrayIndex}].${item.fieldName}`,fieldValue)
            return (
                <UploadInput
                    defaultName={'Аватар'}
                    onChange={(file) => setFieldValue(`${onChanePrefix}${arrayName}[${arrayIndex}].${item.fieldName}`, file)}
                    error={fieldError}
                    mediaPath={typeof fieldValue === 'string' ? fieldValue : undefined}
                />
            );
        }
        return (
            <CommonInput
                key={schemaIndex}
                label={`${item.label} (${arrayIndex + 1})`}
                value={fieldValue}
                onChange={handleChange(`${onChanePrefix}${arrayName}[${arrayIndex}].${item.fieldName}`)}
                required
                error={fieldError}
                minRows={item?.minRows}
                type={item.type === 'number' ? 'number' : 'text'}
            />
        )
    });

    return (
        <Stack spacing={1} p={2} sx={{
            border: '1px solid #000',
            borderRadius: 4,
        }}>
            <FieldArray name={`${onChanePrefix}${arrayName}`}>
                {({ push, remove }) => (
                    <Grid container>
                        <Grid item xs={12} mb={2}>
                            <Stack direction={'row'} justifyContent={'space-between'}>
                                <Typography variant="h6">{label}</Typography>
                                <Button variant="outlined" color="success" onClick={() => addNewItem(push)}>
                                    Add new
                                </Button>
                            </Stack>
                        </Grid>
                        {Array.isArray(values) && values.map((_, arrayIndex) => (
                            <Grid item key={index + arrayIndex * 10} xs={12} md={6} p={1}>
                                <Stack spacing={2}>
                                    {renderSchema(arrayIndex)}
                                    <Stack justifyContent={'center'}>
                                        {arrayIndex > 0 && (
                                            <Button
                                                variant="outlined"
                                                color="error"
                                                onClick={() => {
                                                    remove(arrayIndex);
                                                }}
                                            >
                                                Remove
                                            </Button>
                                        )}
                                    </Stack>
                                </Stack>
                            </Grid>
                        ))}
                    </Grid>
                )}
            </FieldArray>
        </Stack>
    );
};
