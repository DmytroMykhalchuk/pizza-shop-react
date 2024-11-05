import { Badge, SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

type IconWithBadgeType = {
    Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    },
    hasBadge: boolean;
};

export const IconWithBadge: React.FC<IconWithBadgeType> = ({ Icon, hasBadge }) => {

    return (
        <Badge variant='dot' invisible={!hasBadge} color="info">
            <Icon sx={{ color: 'fpage.dark' }} />
        </Badge>
    );
};