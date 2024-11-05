import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

type UINavLinkType = {
    href: string;
    children: ReactNode;
};

export const UINavLink: React.FC<UINavLinkType> = ({ href, children }) => {
    return (
        <NavLink to={href}>
            {children}
        </NavLink>
    );
};