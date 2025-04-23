import { Chip, Stack } from '@mui/material'

const FilterChip = ({filters, setFilters}) => {
  const handleDelete = (category, value) => {
    const updated = filters[category].filter(v=> v !== value);
    setFilters({ ...filters, [category]: updated });
  };

  const chips = [];

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
    <Stack direction="row" flexWrap="wrap">{chips}</Stack>
)
}

export default FilterChip