import React from 'react';
import { List, ListItemButton, ListItemText, Checkbox, Collapse } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

const CheckboxFilter = ({ title, options, selected, onChange }) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleToggle = (value) => () => {
    const currentIndex = selected.indexOf(value);


    if (currentIndex === -1) {
      selected.push(value);
    } else {
      selected.splice(currentIndex, 1);
    }

    onChange(selected);
  };

  return (
    <List sx={{ width: '100%' }} disablePadding>
      <ListItemButton onClick={handleClick}>
        <ListItemText
          className="filter-category"
          primary={title}
          primaryTypographyProps={{ fontWeight: 'bold' }}
        />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List disablePadding>
          {options.map((label) => (
            <ListItemButton key={label} onClick={handleToggle(label)} >
                <ListItemText primary={label} />
                <Checkbox
                  size="small"
                  edge="end"
                  checked ={selected.includes(label)}
                  onChange={handleToggle(label)}
                  onClick={(e) => e.stopPropagation()}
                />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </List>
  );
};

export default CheckboxFilter;