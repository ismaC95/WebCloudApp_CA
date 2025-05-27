import React, { useState, useMemo } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import { useAppData } from '../../contexts/AppData';


const CategoryTabs = ({ onCategoryChange }) => {
    
    // useState to keep track of the selected tab
    const [selectedTab, setSelectedTab] = React.useState(0);

    const { courses } = useAppData();

    // generate unique list, avoid recal on re-render
    const categories = React.useMemo(() => {
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
        onCategoryChange(categories[newValue]);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                mt: 1,
                px: { xs: 2, sm: 3},
                width: '100%',
            }}
        >
            {/* MUI styling for selection */}
            <Tabs 
                value={selectedTab}
                onChange={handleTabChange} // event handler
                variant="scrollable" // clean mobile exp no overflow
                scrollButtons="on" 
                allowScrollButtonsMobile
                sx={{
                    maxWidth: '100%',
                }}
            >
                {categories.map((cat, index) => (
                    <Tab 
                    key={index}    
                    label={cat} 
                    sx={{
                        fontSize: {
                          xs: '0.8rem', // smaller text on small screens
                          sm: '0.85rem',
                          md: '0.95rem',
                        },
                        textTransform: 'none', // keep category names as-is
                        minWidth: 90,
                        px: 2,
                    }}
                    />
                ))}
            </Tabs>
        </Box>
    );
};

export default CategoryTabs;

