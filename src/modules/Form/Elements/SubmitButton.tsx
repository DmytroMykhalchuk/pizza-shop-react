import { Button, Stack } from "@mui/material";

type SubmitButtonType = {
    onSubmit: () => void;
};

export const SubmitButton: React.FC<SubmitButtonType> = ({ onSubmit }) => {

    return (
        <Stack justifyContent={'center'} alignItems={'center'}>
            <Button
                variant="contained"
                color="secondary"
                onClick={onSubmit}
            >
                Submit
            </Button>
        </Stack>
    );
};