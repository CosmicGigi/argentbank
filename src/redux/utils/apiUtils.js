const apiRequest = async (endpoint, method = "GET", body = null) => {
  const token =
    localStorage.getItem("token") || sessionStorage.getItem("token");
  if (!token) return;

  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: body ? JSON.stringify(body) : null,
  };

  const response = await fetch(
    `http://localhost:3001/api/v1${endpoint}`,
    options
  );
  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return response.json();
};
export default apiRequest;
