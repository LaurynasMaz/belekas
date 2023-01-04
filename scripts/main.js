fetch("./data/data.json")
  .then(response => response.json())
  .then(data => {
    data.video.forEach(video => {
      const card = document.createElement('div');
      card.classList.add('video');
      card.innerHTML = `
        <div class="thumbnail">
          <img src="${video.image}" />
        </div>
          <div class="details">
            <div class="author">
              <img src="${video.author}" alt="" />
            <h3>${video.title}</h3>
            </div>
            <div class="authorName">
              <a>${video.name}</a>
              <div class="additionalInfo">
                <span>${video.info}</span>
              </div>
            </div>
        </div>
      `;
      const container = document.querySelector('#content .videos');
      container.append(card);
    });
  })
