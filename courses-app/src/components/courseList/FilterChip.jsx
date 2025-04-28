import { useState, useEffect } from 'react'
import { Chip, Stack, Button, Fade } from '@mui/material'


const FilterChip = ({filters, setFilters}) => {
  const [showClear, setShowClear] = useState(false);

  const handleDelete = (category, value) => {
    const updated = filters[category].filter(v=> v !== value);
    setFilters({ ...filters, [category]: updated });
  };

  const chips = [];

  //Once there's a chip, show Clear All button that will update Filters to empty
  const handleClearAll = () => {
    const cleared = Object.fromEntries(
      Object.keys(filters).map(key => [key, []])
    );
    setFilters(cleared);
  };

  //Check if there's at least on chip to show "clear all"
  useEffect(()=>{
    const hasChips = Object.values(filters).some(arr => arr.length > 0);
    setShowClear(hasChips);
  }, [filters]);

  Object.entries(filters).forEach(([category, values]) => {
    values.forEach(value=> {
        chips.push(
            <Chip
                key = {`${category}-${value}`}
                label = {`${value}`}
                onDelete = {() => handleDelete(category, value)}
                variant= "outlined"
                sx={{ m: 0.5}}
            />
        );
    });
  });



    return (
    <Stack direction="row" flexWrap="wrap" >
      {chips}
      <Fade in={showClear}>
        <Button variant="text" size="small" onClick={handleClearAll}>
          Clear all
        </Button>
      </Fade>
    </Stack>
)
}

export default FilterChip