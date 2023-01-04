fetch("./data/data.json")
  .then(res => res.json())
  .then(data => {
    data.Subsriptions.forEach(sub => {
      const subscriptions = document.createElement('a');
      subscriptions.classList.add('nav-link');
      subscriptions.innerHTML = `
          <img src="${sub.image}" />
          <span>${sub.name}</span>
      `;
      const container1 = document.querySelector('.side-bar .subs');
      if (container1) {
        container1.append(subscriptions);
      }
    });
  })