// Featured Speakers

const speakersData = [
  {
    id: 1,
    name: 'Yochai Benkler',
    FeaturedImage: 'images/speaker_1.svg',
    Description: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    fullDescription: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
  {
    id: 2,
    name: 'SohYeong Noh',
    FeaturedImage: 'images/speaker_2.svg',
    Description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita eum consectetur qui?',
    fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio a nostrum maiores deserunt expedita quae cum eligendi, cupiditate nesciunt voluptates voluptatum',
  },
  {
    id: 3,
    name: 'Lila tretikov',
    FeaturedImage: 'images/speaker_3.svg',
    Description: 'Lorem ipsum dolor sit amet consectetur.',
    fullDescription: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic voluptates veniam quos minima. Quaerat perspiciatis, animi magni minus velit provident neque aperiam laborum.',
  },
  {
    id: 4,
    name: 'Kilnam Chon',
    FeaturedImage: 'images/speaker_4.svg',
    Description: '',
    fullDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus molestiae quo officiis incidunt? Accusantium, soluta? Ex praesentium laboriosam quasi exercitationem nemo architecto',
  },
  {
    id: 5,
    name: 'Julia Leda',
    FeaturedImage: 'images/speaker_5.svg',
    Description: 'Lorem ipsum dolor sit amet consectetur.',
    fullDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque rem placeat itaque omnis, vero exercitationem iusto laudantium officia nulla magni, laboriosam illo.',
  },
  {
    id: 6,
    name: 'Ryan Merkley',
    FeaturedImage: 'images/speaker_6.svg',
    Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur.',
    fullDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum iure quibusdam et obcaecati rem cumque, unde laudantium. Repellendus!',
  },
];

const speakerContainer = document.querySelector('.profile-container');

const profiles = `<h2>
    Featured Speakers
  </h2>
  <hr>
  <div class="profile-cards">
    ${speakersData.map((speaker) => `<div class="profile-card">
    <img src="${speaker.FeaturedImage}" alt="speaker ${speaker.id} image">
    <div class="profile-detail">
      <h3>${speaker.name}</h3>
      <p class="profile-summary">${speaker.Description}</p>
      <hr>
      <p class="profile-desc">${speaker.fullDescription}</p>
    </div>
  </div>`).join('\n')}
  </div>
  <button class="more-btn">
  More
  <span class="material-symbols-outlined">
    expand_more
  </span>
</button>
</div>`;

speakerContainer.innerHTML = profiles;
