import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import GenericProjectsHeader from "../../components/GenericProjectsHeader";
import ProjectDescription from "../../components/ProjectDescription";
import Clinton from "../../assets/Clinton.png";
import NYCmap from "../../assets/PredictedvsActualCases.png";

const Covid19Project = () => {
  return (
    <div>
      <Navbar />
      <GenericProjectsHeader
        heading="COVID-19 Project"
        text="A foray in Covid-19 data analysis"
        backgroundImage={NYCmap}
      />
      <ProjectDescription
        heading="COVID-19 Project"
        text1="In the Spring of 2024, a group of students worked to analyze COVID-19 data from New York State. The data included information about the number of cases per 100,000 in each county in the state. Using the Pandas library in Python and polynomial multivariable linear regression, the intention was to experiment with curve fitting to see if reasonable predictions could be made about the future spread of COVID-19 in each county. The quality of the prediction was assed using Mean Absolute Error (MAE). Additionally, there were attempts to integrate the predicative data with Geo Pandas to provide a map of COVID-19 data and its change over time and then to compare this data to prediction. In the future there are hopes that better mapping of the New York state predictive data can occur and that the quality of the prediction can improve with better data analysis techniques."
        image1={Clinton}
        text2="The image above is an example of the COVID-19 infection rate per 100,000 in New York State for the county of Clinton over time. The red dots represent the actual infection rate for a particular day, and the blue line represents the predicted infection rate. On the right is a map of the state of New York on a particular day (2024-03-03) from the actual infection rate per 100,000 compared to the predicted infection rate on that same day. As can be seen, the model on this particular day overpredicted the number of infected."
        image2={NYCmap}
      />
      <Footer />
    </div>
  );
};

export default Covid19Project;
