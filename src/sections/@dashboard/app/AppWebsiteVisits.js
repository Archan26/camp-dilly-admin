import PropTypes from 'prop-types';
import ReactApexChart from 'react-apexcharts';
// @mui
import { Card, CardHeader, Box } from '@mui/material';
// components

// ----------------------------------------------------------------------

AppWebsiteVisits.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  chartData: PropTypes.array.isRequired,
};

// export default function AppWebsiteVisits({ title, subheader, chartLabels, chartData, ...other }) {
//   const chartOptions = useChart({
//     plotOptions: { bar: { columnWidth: '16%' } },
//     fill: { type: chartData.map((i) => i.fill) },
//     labels: chartLabels,
//     xaxis: { type: 'datetime' },
//     tooltip: {
//       shared: true,
//       intersect: false,
//       y: {
//         formatter: (y) => {
//           if (typeof y !== 'undefined') {
//             return `${y.toFixed(0)} visits`;
//           }
//           return y;
//         },
//       },
//     },
//   });

//   return (
//     <Card {...other}>
//       <CardHeader title={title} subheader={subheader} />

//       <Box sx={{ p: 3, pb: 1 }} dir="ltr">
//         <ReactApexChart type="line" series={chartData} options={chartOptions} height={364} />
//       </Box>
//     </Card>
//   );
// }





function AppWebsiteVisits({ title, subheader, chartData, ...other }) {
  const options = {
    series: [
      {
        name: 'Servings',
        data: chartData || [1, 1],
      },
    ],
    chart: {
      height: 350,
      type: 'bar',
      animations: {
        enabled: false,
      },
      zoom: {
        enabled: false,
      },
    },
    plotOptions: {
      bar: {
        columnWidth: '20%',
        colors: {
          backgroundBarColors: [
            '#fff',
            '#fff',
          ],
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 0,
    },
    fill: {
      opacity: 0.9,
      colors: ["#FFA500", "#17594A"],
    },
    grid: {
      show: false,
    },
    xaxis: {
      categories: [
        'Day Picnic',
        'Over Night',

      ],
    },
    tooltip: {
      intersect: false,
      shared: true,
    },
    yaxis: {
      reversed: false,
    },
  };

  return (



    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart type='bar' options={options} series={options.series} />
      </Box>
    </Card>

  );
}

export default AppWebsiteVisits;
