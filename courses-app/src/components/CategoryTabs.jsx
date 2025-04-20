import React from 'react';
import { Tabs, Tab, Box } from '@mui/material';

const categories = [
  'Technology', 'Business', 'Finance', 'Data Science',
  'IT Certifications', 'Leadership',
];

const CategoryTabs = () => {
    const [selectedTab, setSelectedTab] = React.useState(0);

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    return (
        <Box
        sx={{
            display: 'flex',
            justifyContent: 'center',
            mt: 2,
            overflowX: 'auto',
        }}>
            <Tabs // react mui for highlighting selected one
            value={selectedTab}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="Category tabs"
            >
                {categories.map((cat, index) => ( // cat: current category
                <Tab label={cat} key={index} />
                ))}
            </Tabs>
        </Box>
    );

};


export default CategoryTabs;