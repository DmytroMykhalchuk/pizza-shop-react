import { Stack } from "@mui/material";
import { CommonCheckbox } from "../../Common/CommonCheckbox";
import { ChangeEvent } from "react";
import { ShopFilter } from "./HomeSearch";

type ShopFilterComponentType = {
    filter: ShopFilter,
    updateFilter: (filter: ShopFilter) => void;
};

export const ShopFilterComponent: React.FC<ShopFilterComponentType> = ({ filter, updateFilter }) => {

    const onChangeHasBonus = (event: ChangeEvent<HTMLInputElement>) => {
        updateFilter({
            ...filter,
            hasBonus: event.currentTarget.checked,
        });
    };

    return (
        <Stack>
            <CommonCheckbox
                label="Has bonus"
                onChange={onChangeHasBonus}
                value={filter.hasBonus}
            />
        </Stack>
    );
};