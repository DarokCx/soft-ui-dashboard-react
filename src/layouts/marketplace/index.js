/**
=========================================================
* Soft UI Dashboard React - v4.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';

import RWKVLogo from "../../assets/images/RWKV-Logo.png";
import { Button, CardActions } from '@mui/material';
// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import shadows from "@mui/material/styles/shadows";
import Grid from '@mui/material/Grid';
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";
// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/dashboard/components/Projects/data/index.js";
import { FormatAlignJustify, RoundedCorner } from "@mui/icons-material";
import { ButtonGroup, CardActionArea, CardMedia } from "@mui/material";
import theme from "assets/theme";

const Item = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  maxWidth: '235px',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  RoundedCorner: '20px',
  elevation: 15,
  hover: {
    boxShadow: 5, // theme.shadows[20]
  },
  }));

const modelCard =() => (
  <Grid item xs={3} l={3}  minWidth={"200px"} >
    <CardActionArea>
      {/* <CardMedia component='img' height="140" image={RWKVLogo} alt="Image" width={"153px"} /> */}
      <Item elevation={20}>
        {<img src={RWKVLogo} alt="Image" width={"153px"} />}
        <Divider  />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ textAlign: 'left' }}>
          <h5>Team:</h5>
        </div>
          <div style={{ textAlign: 'center' , flex: 1 }}>
            <h5>RWKV</h5>
          </div>
          <div></div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ textAlign: 'left' }}>
          <h5>Model:</h5>
        </div>
          <div style={{ textAlign: 'center' , flex: 1 }}>
            <h5>V5</h5>
          </div>
          <div></div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ textAlign: 'left' }}>
          <h5>trained:</h5>
        </div>
          <div style={{ textAlign: 'center' , flex: 1 }}>
            <h5>60%</h5>
          </div>
          <div></div>
        </div>
      </Item>
    </CardActionArea>
    </Grid>
)

const instances = Array.from({ length: 25 }, (_, i) => <modelCard key={i} />);

  function Marketplace() {
    const { columns, rows } = authorsTableData;
    const { columns: prCols, rows: prRows } = projectsTableData;

    return (
      <DashboardLayout>
        <DashboardNavbar />
        <SoftBox py={3} boxShadow='24' >
          <Grid container spacing={2} padding={2}>
            {modelCard()}
            {modelCard()}
            {modelCard()}
            {modelCard()}
            {modelCard()}
            {modelCard()}
            {modelCard()}
            {modelCard()}
            {modelCard()}
            {modelCard()}
            {modelCard()}
            {modelCard()}
            {modelCard()}
            {modelCard()}
            {modelCard()}            

          </Grid>
        </SoftBox>
        <Footer />
      </DashboardLayout>
    );
  }

  export default Marketplace;
