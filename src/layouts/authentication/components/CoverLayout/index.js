
// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import PageLayout from "examples/LayoutContainers/PageLayout";

// Authentication layout components
import Footer from "layouts/authentication/components/Footer";

function CoverLayout({ color, header, title, description, image, top, children }) {
  return (
    <PageLayout background="white">
      <DefaultNavbar />
      <Grid
        container
        sx={{
          minHeight: "100vh",
          margin: 0,
        }}
      >
        {/* Image grid */}
        <Grid item xs={12} md={5} lg={6} style={{ position: 'relative' }}>
          <SoftBox
            sx={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "left center",
              height: "110vh",
              width: "100%",
              position: 'absolute',
              left: 0,
              top: 0,
            }}
          />
        </Grid>

        {/* Content grid */}
        <Grid item xs={12} md={7} lg={6} style={{ zIndex: 2 }}>
          <SoftBox mt={top} sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <SoftBox>
              {!header ? (
                <>
                  <SoftBox mb={1}>
                    <SoftTypography variant="h3" fontWeight="bold" color={color} textGradient>
                      {title}
                    </SoftTypography>
                  </SoftBox>
                  <SoftTypography variant="body2" fontWeight="regular" color="text">
                    {description}
                  </SoftTypography>
                </>
              ) : (
                header
              )}
              <SoftBox p={3}>{children}</SoftBox>
            </SoftBox>
          </SoftBox>
        </Grid>
      </Grid>
      <Footer />
    </PageLayout>
  );
}



// Setting default values for the props of CoverLayout
CoverLayout.defaultProps = {
  header: "",
  title: "",
  description: "",
  color: "info",
  top: 20,
};

// Typechecking props for the CoverLayout
CoverLayout.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
    "light",
  ]),
  header: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string.isRequired,
  top: PropTypes.number,
  children: PropTypes.node.isRequired,
};

export default CoverLayout;
