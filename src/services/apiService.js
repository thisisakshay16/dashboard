// apiService.js

const API_BASE_URL = 'http://localhost:3001'; // Update with your server URL

// Helper function to handle response
const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Something went wrong');
  }
  return response.json();
};

// Function to fetch table data
export const fetchTableData = async () => {
  const response = await fetch(`${API_BASE_URL}/api/table`);
  return handleResponse(response);
};

// Function to fetch pie chart data
export const fetchPieChartData = async () => {
  const response = await fetch(`${API_BASE_URL}/api/pie-chart`);
  return handleResponse(response);
};

// Function to fetch graph data
export const fetchGraphData = async () => {
  const response = await fetch(`${API_BASE_URL}/api/graph`);
  return handleResponse(response);
};
