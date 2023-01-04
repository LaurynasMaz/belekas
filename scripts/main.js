fetch("./data/data.json")
  .then(response => {
    if (response.ok) {
      return response.json();
    }
  })
  .then(data => {
    data.Subsriptions.forEach(sub => {
      const subscriptions = document.createElement('a');
      subscriptions.classList.add('nav-link');
      subscriptions.innerHTML = `
          <img src="${sub.image}" />
          <span>${sub.name}</span>
      `;
      const container = document.querySelector('.side-bar .subs');
      if (container) {
        container.append(subscriptions);
      }
    });
  })