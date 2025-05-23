import React from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import { useAppData } from '../../contexts/AppData';

const CategoryTabs = ({ onCategoryChange }) => {
    // useState to keep track of the selected tab
    const [selectedTab, setSelectedTab] = React.useState(0);
    const { courses } = useAppData();

    const categories = React.useMemo(() => {

        // bring all categroes from coursesdata, creates an array
        const allCategories = courses.map(course => course.category);

        //remove duplicates, convert it to array
        return [...new Set(allCategories)];
    }, [courses]);

    React.useEffect(() => {
        if (categories.length > 0) {
        onCategoryChange(categories[selectedTab]);
        }
    }, [categories, selectedTab]);

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

