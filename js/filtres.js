const any = 'any';
export const filterForm = document.querySelector('.map__filters');
const housingPrice = filterForm.querySelector('#housing-price');

const priceRange = {
  middle: 'middle',
  low: 'low',
  high: 'high',
};

const minPrice = 10000;
const maxPrice = 50000;

const housingType = filterForm.querySelector('#housing-type');
const housingRooms = filterForm.querySelector('#housing-rooms');
const housingGuests = filterForm.querySelector('#housing-guests');
const housingFeatures = filterForm.querySelector('#housing-features');
const mapCheckbox = housingFeatures.querySelectorAll('.map__checkbox');

const filterHouseByType = (ad) => {
  const filterValue = housingType.value;
  if (filterValue === any) {
    return true;
  }
  return ad.offer.type === filterValue;
};

export const filterHouseByPrice = (ad) => {
  const filterValue = housingPrice.value;
  switch (filterValue) {
    case priceRange.low:
      return ad.offer.price <= minPrice;
    case priceRange.middle:
      return ad.offer.price >= minPrice && ad.offer.price <= maxPrice;
    case priceRange.high:
      return ad.offer.price >= maxPrice;
  }
  return true;
};

const filterHouseByRooms = (ad) => {
  const filterValue = housingRooms.value;
  return filterValue === any ? true : ad.offer.rooms === Number(filterValue);
};

const filterHouseByGuests = (ad) => {
  const filterValue = housingGuests.value;
  return filterValue === any ? true : ad.offer.guests === Number(filterValue);
};

const filterHouseByFeatures = (ad) => Array.from(mapCheckbox)
  .every((checkbox) => {
    if (!checkbox.checked) {
      return true;
    }
    if (!ad.offer.features) {
      return false;
    }
    return ad.offer.features.includes(checkbox.value);
  });

export const getFilteredAds = (ads) => {
  const filteredAds = ads.filter((ad) => (
    filterHouseByType(ad) &&
    filterHouseByPrice(ad) &&
    filterHouseByRooms(ad) &&
    filterHouseByGuests(ad) &&
    filterHouseByFeatures(ad)
  ));
  return filteredAds;
};

