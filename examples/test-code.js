// Example utility functions for testing AI code review

function fetchUserData(userId) {
  // No error handling - AI should catch this
  const response = fetch('/api/users/' + userId);
  return response.json();
}

function processInput(data) {
  // No input validation - AI should catch this
  console.log('Processing:', data);
  return data.value * 2;
}

function getConfig() {
  // Hardcoded secret - AI should definitely catch this!
  const apiKey = "sk-1234567890abcdef";
  return { apiKey };
}

module.exports = { fetchUserData, processInput, getConfig };
