import React from 'react';
import { List, ListItem, ListItemButton, ListItemText, Checkbox, Collapse } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

const CheckboxFilter = ({ title, options, selected, onChange }) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleToggle = (value) => () => {
    const currentIndex = selected.indexOf(value);
    const newChecked = [...selected];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    onChange(newChecked);
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
            <ListItem key={label} disablePadding>
              <ListItemButton onClick={handleToggle(label)}>
                <ListItemText primary={label} />
                <Checkbox
                  size="small"
                  edge="end"
                  selected={selected.includes(label)}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Collapse>
    </List>
  );
};

export default CheckboxFilter;