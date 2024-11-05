import { Chip, Stack, Typography } from '@mui/material';
import { DishSizeType } from '../../../store/dish/dishTypes';

type DishSizesType = {
    sizes: DishSizeType[];
    onSelectSize: (sizeId: number) => void;
    selectedSizeId: number;
};

export const DishSizes: React.FC<DishSizesType> = ({ sizes, onSelectSize, selectedSizeId }) => {

    return (
        <>
            <Stack alignItems={'start'}>
                <Typography variant="h6">Sizes</Typography>
                <Stack direction={'row'} bgcolor={'info.dark'} borderRadius={2}>
                    {sizes.map(size => (
                        <SizeChip key={size.id}
                            size={size}
                            onSelect={() => onSelectSize(size.id)}
                            isSelected={size.id === selectedSizeId}
                        />
                    ))}
                </Stack>
            </Stack>
        </>
    );
};

type SizeChipType = {
    size: DishSizeType;
    onSelect: () => void;
    isSelected: boolean;
};

export const SizeChip: React.FC<SizeChipType> = ({ size, onSelect, isSelected }) => {

    return (
        <Chip
            label={size.name}
            onClick={onSelect}
            variant='outlined'
            sx={{
                borderRadius: 2,
                border: 'none',
                p: 2,
                fontWeight: 600,
                backgroundColor: isSelected ? 'primary.main' : 'info.dark',
                color: isSelected ? 'primary.contrastText' : undefined,
            }}
        />
    );
};