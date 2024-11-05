type BaseButtonType = {
    onClick: () => void;
    color?: 'primary' | 'secondary',
    size?: 'small' | 'medium' | 'large',
    label: string;
};

export const BaseButton: React.FC<BaseButtonType> = ({ }) => {

    return (
        <>

        </>
    );
};