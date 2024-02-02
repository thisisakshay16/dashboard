const API_BASE_URL = 'http://localhost:3001';


// Function to fetch table data
export const fetchTableData = async () => {
  const response = await fetch(`${API_BASE_URL}/api/table`);
  return response;
};

// Function to fetch pie chart data
export const fetchPieChartData = async () => {
  const response = await fetch(`${API_BASE_URL}/api/pie-chart`);
  return response;
};

// Function to fetch graph data
export const fetchGraphData = async () => {
  const response = await fetch(`${API_BASE_URL}/api/graph`);
  return response;
};
