import React from 'react';
import { Tabs, Tab, Box, useTheme, useMediaQuery } from '@mui/material';
import { useAppData } from '../../contexts/AppData';

const CategoryTabs = ({ onCategoryChange }) => {
    // useState to keep track of the selected tab
    const [selectedTab, setSelectedTab] = React.useState(0);
    const { courses } = useAppData();
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

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
                px: { xs: 2, sm: 3, md: 4 },
                mx: 'auto',
                maxWidth: '1600px',
                overflowX: isSmallScreen ? 'auto' : 'visible',
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
                    <Tab 
                    key={index}    
                    label={cat} 
                    sx={{
                        fontSize: {
                          xs: '0.8rem', // smaller text on small screens
                          sm: '0.85rem',
                          md: '0.95rem',
                          lg: '1rem',
                        },
                        textTransform: 'none', // optional: keep category names as-is
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

