import { Grid } from "@mui/material"


import CheckboxFilter from "./CheckboxFilter"

const FilterSelection = ({filters, setFilters}) => {
  return (
    <Grid size={12}>
    {/* Filter Checkboxes */}
            <CheckboxFilter 
                title="Video Duration" 
                options={['0-1 Hour', '1-3 Hours', '3-6 Hours', '+6 Hours']} 
                selected={filters.duration}
                onChange={(selected) => {setFilters({...filters, duration: selected})}}
            />
            <CheckboxFilter 
                title="Price" 
                options={['Paid', 'Free']} 
                selected={filters.paymentType}
                onChange={(selected) => setFilters({...filters, paymentType: selected})}/>
            <CheckboxFilter 
                title="Category" 
                options={['Marketing', 'HR', 'Finance', 'Software Development', 'Data Analytics', 'Sales & Customer Success']} 
                selected={filters.category}
                onChange={(selected) => setFilters({...filters, category: selected})}
            />
            <CheckboxFilter 
                title="Level" 
                options={['Beginner', 'Intermediate', 'Advanced']} 
                selected={filters.level}
                onChange={(selected) => setFilters({...filters, level: selected})}
                />
    </Grid>
  )
}

export default FilterSelection