import React from "react";

interface IProduct {
    code: string;
    description: string;
    price?: number;

    key: number;
}

interface Props extends Pick<React.DOMAttributes<HTMLDivElement>, 'onClick'> {
    title: string;
    selected?: boolean;
}

export const ListSelector = ({title, selected = false, onClick}: Props) => {
    return (
        <div
            onClick={onClick}
            className={`list-selector ${selected ? 'list-selector--selected' : ''}`}
        >
            <span>{title}</span>
        </div>
    );
};
