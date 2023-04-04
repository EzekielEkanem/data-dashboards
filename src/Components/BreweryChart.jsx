import React, { Component, useEffect, useState } from "react";
import {
    BarChart,
    Bar,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    PieChart,
    Pie,
    Cell
  } from "recharts";

const BreweryChart = ({ micro, nano, regional, brewpub, large, planning, bar, contract, proprietor, closed }) => {
    console.log({micro})
    const [histData, setHistData] = useState([
        {
            name: "micro",
            num: micro
        },
        {
            name: "regional",
            num: regional
        },
        {
            name: "brewpub",
            num: brewpub
        },
        {
            name: "large",
            num: large
        },
        {
            name: "planning",
            num: planning
        },
        {
            name: "contract",
            num: contract
        },
        {
            name: "proprietor",
            num: proprietor
        }
    ]);

    const [showBarChart, setShowBarChart] = useState (false);
    const [showPieChart, setShowPieChart] = useState (false);

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#d4fc79', '#3E5151', '#8360c3', '#4a00e0', '#b20a2c', '#6a82fb'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index
    }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text
          x={x}
          y={y}
          fill="white"
          textAnchor={x > cx ? "start" : "end"}
          dominantBaseline="central"
        >
          {`${(percent * 100).toFixed(0)}%`}
        </text>
      );
    };

    const handleBarChart = () => {
        setShowPieChart(false);
        setShowBarChart(true);
    }

    const handlePieChart = () => {
        setShowBarChart(false);
        setShowPieChart(true);
    }

      return (
        <div className="Header App-row">
          {histData ? (// rendering only if API call actually returned us data
            <div className="shift-left">
              <button className="btn" onClick={handleBarChart}>Show Company types in Bar Chart</button>
              {showBarChart ? (
                <BarChart
                    width={500}
                    height={500}
                    data={histData}
                    margin={{
                    top: 10,
                    right: 30,
                    left: 20,
                    bottom: 30,
                    }}
                >
                    <Bar
                    dataKey="num"
                    fill="#8884d8"
                    />
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />

                    <YAxis
                    label={{
                        value: "Number",
                        angle: -90,
                        position: "insideLeft",
                        textAnchor: "middle",
                    }}
                    />
                    <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
                    <Legend width={100} wrapperStyle={{ top: 40, right: 20, 
                        backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', 
                        borderRadius: 3, lineHeight: '40px' }}/>
                </BarChart>
                ) : null
                }
            </div>
          ) : null}
          <div className="shift-right">
            <button className="btn" onClick={handlePieChart}>Show Company types in Pie Chart</button>
            {showPieChart ? (
                <PieChart width={450} height={450} margin={{
                    top: 10,
                    right: 30,
                    left: 40,
                    bottom: 30,
                    }}>
                    <Pie
                        data={histData}
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={200}
                        fill="#8884d8"
                        dataKey="num"
                    >
                        {histData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
            ) : null
            }
          </div>
        </div>
      );
    
  };

export default BreweryChart;