import { Chart } from "react-google-charts";
import './App.css'

function App() {
    const data = [
    ["Task", "Hours per Day"],
    ["Work", 9],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 1],
    ["Sleep", 7],
    ["Read", 1],
  ];

  const options = {
    title: "My Daily Activities",
  };

  return (
    <>
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
    </>
  )
}

export default App
