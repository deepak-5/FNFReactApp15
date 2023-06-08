import React from "react";
import { Typography } from "@mui/material";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import EMIBreakupResult from "./EMIBreakupResult";

ChartJS.register(ArcElement, Tooltip, Legend);
const IndianRupeeSymbol = () => {
 return React.createElement("span", { style: { fontFamily: "Cambria Math" } }, "\u20B9");
};
const Result = ({ data }) => {
 const { homeValue, loanAmount, loanTerm, interestRate } = data;

 const totalLoanMonths = loanTerm * 12;
 const interestPerMonth = interestRate / 100 / 12;
 const monthlyPayment =
 (loanAmount *
 interestPerMonth *
 (1 + interestPerMonth) ** totalLoanMonths) /
 ((1 + interestPerMonth) ** totalLoanMonths - 1);
 

 const totalInterestGenerated = monthlyPayment * totalLoanMonths - loanAmount;
 

 const pieChartData = {
 labels: ["Principle", "Interest"],
 datasets: [
 {
 label: "Ratio of Principle and Interest",
 data: [homeValue, totalInterestGenerated],
 backgroundColor: ["rgba(28, 92, 247, 0.8)", "rgba(237, 19, 82, 0.8)"],
 borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
 borderWidth: 2,
 
 },
 ],
 };

 return (
 <div className="container">
 <Typography textAlign="center" variant="h5">
 Monthly Payment: {<IndianRupeeSymbol />} {monthlyPayment.toFixed(2)}
 </Typography>
 <div className="row">
 <div className="column">
 <Pie data={pieChartData} />
 </div>
 
 <EMIBreakupResult data={data}></EMIBreakupResult>

 </div>
 </div>

 

 );
};

export default Result;
