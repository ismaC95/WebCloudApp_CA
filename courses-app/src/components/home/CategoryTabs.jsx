import React from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import CoursesDatabase from '../../data/CoursesDatabase'; 


const CategoryTabs = ({ onCategoryChange }) => {

    // useState to keep track of the selected tab
    const [selectedTab, setSelectedTab] = React.useState(0);

    const categories = React.useMemo(() => {

        // bring all categroes from coursesdata, creates an array
        const allCategories = CoursesDatabase.map(course => course.category);

        //remove duplicates, convert it to array
        return [...new Set(allCategories)];
    }, []);

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
        onCategoryChange(categories[newValue]); // parent component
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
                onChange={handleTabChange} // event handler
                variant="scrollable"
                scrollButtons="auto" // show only if needed
                aria-label="Category tabs"
            >
                {categories.map((cat, index) => (
                    <Tab label={cat} key={cat} />
                ))}
            </Tabs>
        </Box>
    );
};

export default CategoryTabs;

