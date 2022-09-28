import { useEffect, useState } from "react";
import {Box,CssBaseline,Container} from '@mui/material';

export const Area = ({google, arre, options}) => {
  const [chart, setChart] = useState(null);

  useEffect(() => {
    if (google && !chart) {
      const data = google.visualization.arrayToDataTable(arre);

      // Instantiate and draw our chart, passing in some options.
      const newChart = new google.visualization.AreaChart(document.getElementById('areaChart'));
      newChart.draw(data, options);

      setChart(newChart);
    }
  }, [google, chart]);

  return (
    <>
      <CssBaseline />
      <Container fixed>
        <Box id="areaChart" sx={{ bgcolor: '#cfe8fc', height: '80vh' }} />
      </Container>
    </>
  )
}
