import React from 'react';
import { Tabs, Tab, Box } from '@mui/material';

const categories = [
  'Technology', 'Business', 'Finance', 'Data Science',
  'IT Certifications', 'Leadership',
];

const CategoryTabs = () => (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt:2, overflowX: 'auto'}}>
        <Tabs value={0} variant="scrollable" scrollButtons="auto">
            {categories.map((cat, index) => (
                <Tab label={cat} key={index} />
            ))}
        </Tabs>
    </Box>
);


export default CategoryTabs;