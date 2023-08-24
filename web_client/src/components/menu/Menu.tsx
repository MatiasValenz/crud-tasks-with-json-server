import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

const options = [
    {
        id: 1,
        value: 'createdAt',
        order: 'desc',
        label: 'Fecha de creación (mayor a menor)',
    },
    {
        id: 2,
        value: 'createdAt',
        order: 'asc',
        label: 'Fecha de creación (menor a mayor)',
    },
    {
        id: 3,
        value: 'dueDate',
        order: 'desc',
        label: 'Fecha de vencimiento (mayor a menor)',
    },
    {
        id: 4,
        value: 'dueDate',
        order: 'asc',
        label: 'Fecha de vencimiento (menor a mayor)',
    },
    {
        id: 5,
        value: 'status',
        order: 'asc',
        label: 'Estado (mayor prioridad)',
    },
];

interface MenuOrderProps {
    handleChangeOrder: (order: {orderBy: string, order: string}) => void
}
const MenuOrder: React.FC<MenuOrderProps> = ({handleChangeOrder}) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const open = Boolean(anchorEl);
    const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (event: React.MouseEvent<HTMLElement>, index: number,) => {
        const {value, order} = options[index]
        handleChangeOrder({orderBy: value, order})
        setSelectedIndex(index);
        setAnchorEl(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <List
                component="nav"
                aria-label="Device settings"
                sx={{cursor: 'pointer'}}
            >
                <ListItem
                    onClick={handleClickListItem}
                >
                    <ListItemText
                        sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}
                        primary="Ordenar por:"
                        secondary={options[selectedIndex].label}
                    />
                </ListItem>
            </List>
            <Menu
                id="lock-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                {options.map((option, index) => (
                    <MenuItem
                        key={option.id}
                        selected={index === selectedIndex}
                        onClick={(event) => handleMenuItemClick(event, index)}
                    >
                        {option.label}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}

export default MenuOrder;
