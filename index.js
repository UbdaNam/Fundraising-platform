// Popup Nav

function openPopUp() {
  document.querySelector('.popup-nav').classList.add('popup-nav-visible');
}

function closePopUp() {
  document.querySelector('.popup-nav').classList.replace('popup-nav-visible', 'popup-nav');
}

document.querySelector('.menu').addEventListener('click', openPopUp);
document.querySelector('.cancel-button').addEventListener('click', closePopUp);
document.querySelector('.popup-menu .menu-item').addEventListener('click', closePopUp);
document.querySelector('.popup-menu .menu-item2').addEventListener('click', closePopUp);
document.querySelector('.popup-menu .menu-item3').addEventListener('click', closePopUp);
document.querySelector('.popup-nav').addEventListener('click', closePopUp);

// Featured Speakers

const speakersData = [
  {
    id: 1,
    name: 'John Smith',
    FeaturedImage: 'images/speaker_1.svg',
    Description: 'Experienced educator with a Bachelor\'s degree in Education',
    fullDescription: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
  {
    id: 2,
    name: 'Jane Doe',
    FeaturedImage: 'images/speaker_2.svg',
    Description: 'Highly qualified teacher with a Master\'s degree in Educational Leadership',
    fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio a nostrum maiores deserunt expedita quae cum eligendi, cupiditate nesciunt voluptates voluptatum',
  },
  {
    id: 3,
    name: 'Mary Brown',
    FeaturedImage: 'images/speaker_3.svg',
    Description: ' Accomplished professor with a Bachelor\'s degree in Special Education',
    fullDescription: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic voluptates veniam quos minima. Quaerat perspiciatis, animi magni minus velit provident neque aperiam laborum.',
  },
  {
    id: 4,
    name: 'Sarah Johnson',
    FeaturedImage: 'images/speaker_4.svg',
    Description: '',
    fullDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus molestiae quo officiis incidunt? Accusantium, soluta? Ex praesentium laboriosam quasi exercitationem nemo architecto',
  },
  {
    id: 5,
    name: 'David Williams',
    FeaturedImage: 'images/speaker_5.svg',
    Description: 'Master\'s degree in Educational Technology',
    fullDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque rem placeat itaque omnis, vero exercitationem iusto laudantium officia nulla magni, laboriosam illo.',
  },
  {
    id: 6,
    name: 'Robert Jones',
    FeaturedImage: 'images/speaker_6.svg',
    Description: 'Innovative educator with a Doctorate in Educational Administration',
    fullDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum iure quibusdam et obcaecati rem cumque, unde laudantium. Repellendus!',
  },
];

const speakerContainer = document.querySelector('.profile-container');

const profiles = `<h2>
    Top Donators
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
