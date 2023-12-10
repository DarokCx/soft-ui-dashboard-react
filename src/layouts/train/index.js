import Icon from "@mui/material/Icon";

import DashboardIcon from '@mui/icons-material/Dashboard';
import StorageIcon from '@mui/icons-material/Storage';
import SettingsIcon from '@mui/icons-material/Settings';
import ModelTrainingIcon from '@mui/icons-material/Build'; // Assuming you want to use the Build icon for model training
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// // Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
// Soft UI Dashboard React examples

import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

import trainingSettings from './trainSettings';
import DefaultInputField from './Components/DefaultInputField';
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Tab from "@mui/material/Tab";
import Paper from "@mui/material/Paper";
import Tabs from "@mui/material/Tabs";
import AppBar from "@mui/material/AppBar"; // Import the AppBar component from the @mui/material package
import Toolbar from "@mui/material/Toolbar";



const sectionsWithIcons = trainingSettings.map(section => {
  let Icon;
  switch (section.title) {
    case "Files Settings":
      Icon = DashboardIcon;
      break;
    case "Data Settings":
      Icon = StorageIcon;
      break;
    case "Training Settings":
      Icon = SettingsIcon;
      break;
    case "Model Hyperparameters":
      Icon = ModelTrainingIcon;
      break;
    // ... add cases for other sections with appropriate icons
    default:
      Icon = SettingsIcon; // A default icon if none is matched
  }
  return { ...section, Icon }; // Spread the section and add the Icon
});



function Train() {
  // Initialize formData state with default values from all sections
   const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };
  const defaultFormData = trainingSettings.reduce((acc, section) => {
    section.settings.forEach(setting => {
      acc[setting.name] = setting.defaultValue;
    });
    return acc;
  }, {});

  const [formData, setFormData] = useState(defaultFormData);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Process formData here
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Box py={3} display="flex" justifyContent="center">
        <Paper style={{
          display: 'flex',
          width: '80%',
          boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'
        }}>
          <Box sx={{ width: '200px', borderRight: 1, borderColor: 'divider' }}>
            <Typography variant="h6" sx={{ my: 2, mx: 1 }}>
              Training Configuration
            </Typography>
<Tabs
  orientation="vertical"
  variant="scrollable"
  value={activeTab}
  onChange={handleTabChange}
  sx={{
    '& .MuiTab-root': {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      textTransform: 'none',
      padding: '10px 24px',
      whiteSpace: 'nowrap',
      // The following line ensures the tab icons have a specific color
      // when not selected and adhere to the text's color when selected
      '& .MuiSvgIcon-root': {
        marginRight: '10px',
        // Apply color change here for non-active tabs
        color: 'action.disabled',
      },
    },
    // Styles for the selected tab state
    '& .Mui-selected': {
      color: 'secondary.main', // This will change the text color
      '& .MuiSvgIcon-root': {
        // This will change the icon color for the selected tab
        color: 'secondary.main',
      },
      backgroundColor: 'rgba(0, 0, 0, 0.04)', // Optional background color
    },
    '& .MuiTab-wrapper': {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      width: '100%',
    },
  }}
>
  {sectionsWithIcons.map((section, index) => (
    <Tab
      key={index}
      icon={<section.Icon />} // Assuming Icon is a component and not undefined
      iconPosition="start"
      label={section.title}
    />
  ))}
</Tabs>


          </Box>
          <Box sx={{ flexGrow: 1, p: 3 }}>
            <form onSubmit={handleSubmit}>
              {trainingSettings[activeTab].settings.map((setting) => (
                <Box mb={2} key={setting.name}>
                  <DefaultInputField
                    setting={setting}
                    value={formData[setting.name]}
                    onChange={handleChange}
                  />
                </Box>
              ))}
              <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
                Submit
              </Button>
            </form>
          </Box>
        </Paper>
      </Box>
      <Footer />
    </DashboardLayout>
  );
}

export default Train;