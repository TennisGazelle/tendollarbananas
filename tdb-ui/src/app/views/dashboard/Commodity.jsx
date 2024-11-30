import { Fragment } from "react";
import { Card, Grid, styled, useTheme } from "@mui/material";
import RowCards from "./shared/RowCards";
import StatCards from "./shared/StatCards";
import Campaigns from "./shared/Campaigns";
import StatCards2 from "./shared/StatCards2";
import DoughnutChart from "./shared/Doughnut";
import UpgradeCard from "./shared/UpgradeCard";
import TopSellingTable from "./shared/TopSellingTable";
import AreaChart from "app/views/charts/echarts/AreaChart";
import LineChart from "app/views/charts/echarts/LineChart";
import SimpleCard from "app/components/SimpleCard";

import CommodityLineChart from "app/views/charts/CommodityLineChart"

// STYLED COMPONENTS
const ContentBox = styled("div")(({ theme }) => ({
    margin: "30px",
    [theme.breakpoints.down("sm")]: { margin: "16px" }
}));

const Title = styled("span")(() => ({
    fontSize: "1rem",
    fontWeight: "500",
    marginRight: ".5rem",
    textTransform: "capitalize"
}));

const SubTitle = styled("span")(({ theme }) => ({
    fontSize: "0.875rem",
    color: theme.palette.text.secondary
}));

const H1 = styled("span")(({ theme }) => ({
    fontSize: "4rem",
    marginRight: "16px",
    color: "black",
    fontWeight: "1000"
}));

const H4 = styled("span")(({ theme }) => ({
    fontSize: "1rem",
    fontWeight: "500",
    marginBottom: "16px",
    textTransform: "capitalize",
    color: theme.palette.text.secondary
}));

const allData = {
    xAxisTitles: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    series: [
        {
            name: "Bananas",
            points: [0.58, 0.60, 0.62, 0.63, 0.65, 0.64, 0.66],
            delta: [0, 0.02, 0.02, 0.01, 0.02, -0.01, 0.02]
        },
        {
            name: "Milk",
            points: [3.50, 3.55, 3.60, 3.65, 3.70, 3.68, 3.72],
            delta: [0, 0.05, 0.05, 0.05, 0.05, -0.02, 0.04]
        },
        {
            name: "Eggs",
            points: [1.80, 1.82, 1.85, 1.88, 1.90, 1.89, 1.92],
            delta: [0, 0.02, 0.03, 0.03, 0.02, -0.01, 0.03]            
        },
        {
            name: "Bread",
            points: [2.50, 2.52, 2.55, 2.58, 2.60, 2.59, 2.62],
            delta: [0, 0.02, 0.03, 0.03, 0.02, -0.01, 0.03]
        },
        {
            name: "Gasoline",
            points: [3.00, 3.05, 3.10, 3.15, 3.20, 3.18, 3.22],
            delta: [0, 0.05, 0.05, 0.05, 0.05, -0.02, 0.04]
        },
        {
            name: "Chicken Breast",
            points: [3.20, 3.25, 3.30, 3.35, 3.40, 3.38, 3.42],
            delta: [0, 0.05, 0.05, 0.05, 0.05, -0.02, 0.04]
        },
        {
            name: "Coffee",
            points: [5.00, 5.05, 5.10, 5.15, 5.20, 5.18, 5.22],
            delta: [0, 0.05, 0.05, 0.05, 0.05, -0.02, 0.04]
        },
        {
            name: "Inflation",
            points: [0.2, 0.25, 0.3, 0.35, 0.4, 0.38, 0.42],
            delta: [0, 0.05, 0.05, 0.05, 0.05, -0.02, 0.04]            
        }
    ]
}

const getCommodityData = (name) => {
    return {
        ...allData,
        series: allData.series
            .filter((s) => (s.name == name || s.name == "Inflation"))
    }
}

export default function Commodity() {
    const theme = useTheme();
    const focusedCommodity = {
        name: "Milk",
        avgLocalCost: 2.00,
        unit: "gal",
    };

    return (
        <Fragment>
            <ContentBox className="commodity">
                <SimpleCard title={focusedCommodity.name}>
                    <H1>${focusedCommodity.avgLocalCost} per {focusedCommodity.unit}</H1>
                    <H4>Average Local Cost</H4>
                    <CommodityLineChart
                        height="350px"
                        color={[theme.palette.primary.main]}
                        data={{
                            ...allData,
                            series: allData.series
                                .filter((s) => (s.name == focusedCommodity.name || s.name == "Inflation"))
                        }}
                    />
                </SimpleCard>
            </ContentBox>
        </Fragment>
    );
}

export {
    allData
};