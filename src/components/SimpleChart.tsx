import React, { useState } from "react";
import {
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ScatterChart,
  Scatter,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

const data2 = [
  { x: -10, y: 20, z: 20, name: "Scary Monstger", lvl: 2 },
  { x: 12, y: 10, z: 26, name: "Vampire", lvl: 2 },
  { x: 17, y: -30, z: 40, name: "Ghoul", lvl: 2 },
  { x: 10, y: 250, z: 28, name: "Krah", lvl: 2 },
  { x: 15, y: 40, z: 50, name: "Cejah", lvl: 2 },
  { x: 11, y: 28, z: 20, name: "Rawa", lvl: 2 },
];

const SimpleLineChart = () => {
  const [tooltip, setTooltip] = useState(null);
  const [point, setPoints] = useState(null);

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="">
          <p className="desc">{`${payload[0]["payload"].name}(Lvl: ${payload[0]["payload"].lvl})`}</p>
          <p className="desc">{`x:${payload[0].value} y:${payload[1].value}`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="flex caption2 flex-col ui-chart">
      <div className="ml-24 flex justify-center flex-col w-48 items-center mt-32 mb-10">
        <p className="caption2">Interactive Map</p>
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <ScatterChart
          margin={{
            top: 5,
            right: 5,
            bottom: 5,
            left: 5,
          }}
        >
          <CartesianGrid />
          <XAxis
            dataKey="x"
            name="X"
            domain={["dataMin - 100", "dataMax + 100"]}
          />
          <ReferenceLine
            x={0}
            stroke="blue"
            label="Min PAGE"
            strokeDasharray="3 3"
          />
          <ReferenceLine y={0} label="Max" stroke="red" strokeDasharray="3 3" />
          <YAxis
            type="number"
            dataKey="y"
            name="Y"
            domain={["dataMin - 100", "dataMax + 100"]}
          />
          <Tooltip
            content={<CustomTooltip />}
            viewBox={{ x: 0, y: 0, width: 20, height: 20 }}
            cursor={{ stroke: "red", strokeWidth: 1 }}
            wrapperStyle={{ display: "hidden" }}
          />

          <Tooltip
            content={
              <CustomTooltip
                active={undefined}
                payload={undefined}
                label={undefined}
              />
            }
          />
          <Scatter name="A school" data={data2} fill="#8884d8" />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SimpleLineChart;
