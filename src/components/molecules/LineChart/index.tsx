import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const chartData = [
  { amount: "5000", percent: 20 },
  { amount: "10000", percent: 40 },
  { amount: "15000", percent: 20 },
  { amount: "20000", percent: 60 },
  { amount: "25000", percent: 80 },
  { amount: "30000", percent: 60 },
  { amount: "35000", percent: 60 },
  { amount: "40000", percent: 20 },
];

export default function LineChart({ className }: { className?: string }) {
  return (
    <Line
      style={{ marginTop: "4rem" }}
      data={{
        labels: chartData.map((d) => `${+d.amount / 1000}k`),
        datasets: [
          {
            label: "Percent",
            data: chartData.map((d) => d.percent),
            borderColor: "#4880ff",
            borderWidth: 2,
            backgroundColor: "#4880ff",
            // fill: true,
            tension: 0,
            pointRadius: 5,
            pointBackgroundColor: "#4880ff",
          },
        ],
      }}
      options={{
        responsive: true,
        plugins: {
          tooltip: {
            callbacks: {
              label: () => "",
            },
            backgroundColor: "#4880ff",
            boxPadding: 0,
            footerSpacing: 0,
            caretPadding: 0,
            padding: {
              top: 4,
              right: 7,
              left: 7,
              bottom: -3,
            },
            yAlign: "bottom",
            cornerRadius: 2,
          },
          legend: {
            display: false,
            labels: {
              color: "white",
            },
          },
          title: {
            display: true,
            color: "white",
          },
        },
        scales: {
          x: {
            grid: { display: false },
            title: {
              display: true,
              color: "white",
            },
            ticks: {
              color: "white",
              padding: 24,
            },
          },
          y: {
            title: {
              display: false,
              color: "white",
            },
            ticks: {
              color: "white",
              callback: (v) => `${v}%`,
              padding: 24,
              stepSize: 20,
            },
            grid: {
              color: "gray",
            },
            border: {
              display: false,
            },
            min: 0,
            max: 100,
          },
        },
      }}
    />
  );
}
