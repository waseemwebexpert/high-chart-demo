import React from "react";
import PieChart from "./PieChart";
import BarGraph from "./BarGraph";
import HorizontalBarGraph from "./HorizontalBarGraph";
import CrossHairGraph from "./CrossHairGraph";
import { Route, Routes } from "react-router-dom";
import ZoomPanGraph from "./ZoomPanGraph";
import { Link } from "react-router-dom";
import MultiSeriesChart from "./MultiSeriesChart";

function App() {
  return (
    <div className="demoLayout">
      <div className="cardsLayout">
        <h1>Graph Demo</h1>
        <div className="link-container">
          <Link to="/">BarGraph</Link>
          <Link to="/pie-chart">PieChart</Link>
          <Link to="/horizontal-graph">Horizontal</Link>

          <Link to="/zoompan">ZoomPan</Link>
          <Link to="/crosshair-graph">CrossHair</Link>
          <Link to="/multiseries-chart"> MultiSeries Chart</Link>
        </div>
      </div>

      <div className="resultLayout">
        <Routes>
          <Route path="/" element={<BarGraph />} />
          <Route path="/pie-chart" element={<PieChart />} />
          <Route path="/horizontal-graph" element={<HorizontalBarGraph />} />
          <Route path="/zoompan" element={<ZoomPanGraph />} />
          <Route path="/crosshair-graph" element={<CrossHairGraph />} />
          <Route path="/multiseries-chart" element={<MultiSeriesChart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
