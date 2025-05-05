import React from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import CoursesDatabase from '../../data/CoursesDatabase'; // Adjust the path if needed

const CategoryTabs = ({ onCategoryChange }) => {
    const [selectedTab, setSelectedTab] = React.useState(0);

    // Extract unique categories from course data
    const categories = React.useMemo(() => {
        const allCategories = CoursesDatabase.map(course => course.category);
        return [...new Set(allCategories)];
    }, []);

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
        onCategoryChange(categories[newValue]);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                mt: 2,
                overflowX: 'auto',
            }}
        >
            <Tabs
                value={selectedTab}
                onChange={handleTabChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="Category tabs"
            >
                {categories.map((cat, index) => (
                    <Tab label={cat} key={index} />
                ))}
            </Tabs>
        </Box>
    );
};

export default CategoryTabs;
