// Steps Chart
  const stepsCtx = document.getElementById('stepsChart').getContext('2d');
  new Chart(stepsCtx, {
    type: 'line',
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [{
        label: 'Steps Taken',
        data: [5000, 7000, 8000, 10000, 12000, 9000, 11000],
        borderColor: '#4CAF50',
        fill: false,
        tension: 0.3,
      }]
    },
    options: {
      responsive:true,
    
  