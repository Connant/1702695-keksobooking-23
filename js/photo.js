import { avatarImg, houseImg } from './form.js';

const fileType = ['gif', 'jpg', 'jpeg', 'png'];

const avatarChooser = document.querySelector('#avatar');
const img = document.createElement('img');
const photoChooser = document.querySelector('#images');

const photoPreview = houseImg.appendChild(img);


avatarChooser.addEventListener('change', () => {
  const file = avatarChooser.files[0];
  const fileName = file.name.toLowerCase();

  const matches = fileType.some((extension) => fileName.endsWith(extension));

  if (matches) {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      avatarImg.src = reader.result;
    });

    reader.readAsDataURL(file);
  }
});

photoChooser.addEventListener('change', () => {
  const file = photoChooser.files[0];
  const fileName = file.name.toLowerCase();

  const matches = fileType.some((extension) => fileName.endsWith(extension));

  if (matches) {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      photoPreview.classList.add('ad-form__photo');
      photoPreview.src = reader.result;
      photoPreview.alt = 'Фотография жилья';
    });

    reader.readAsDataURL(file);
  }
});

