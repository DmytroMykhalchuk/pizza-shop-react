import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'
import { ReactNode } from 'react'

type BaseDialogType = {
    isOpen: boolean;
    onConfirm: () => void;
    onCancel?: () => void;
    title: string;
    context: ReactNode;
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    fullWidth?: boolean;
};

export const BaseDialog: React.FC<BaseDialogType> = ({ isOpen, onCancel, onConfirm, title, context, fullWidth, maxWidth = 'sm' }) => {
    const buttonStyle = {
        textTransform: 'none',
    };

    return (
        <Dialog
            open={isOpen}
            onClose={onCancel || onConfirm}
            aria-labelledby={'confirm deleting'}
            maxWidth={maxWidth}
            fullWidth={fullWidth}
        >
            <DialogTitle>
                {title}
            </DialogTitle>
            <DialogContent>
                <DialogContentText component={'div'}>
                    {context}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                {
                    onCancel &&
                    <Button onClick={onCancel} color="inherit" sx={buttonStyle}>
                        Cancel
                    </Button>
                }
                <Button onClick={onConfirm} color="inherit" sx={buttonStyle}>
                    Confirm
                </Button>
            </DialogActions>
        </Dialog>
    );
};