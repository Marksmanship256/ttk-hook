const extractId = (list) => list.map(item => item.split(' ')[1]);
const otherFavorites = [];
const namesArray = [];
const subLiveNames = [];

const favorites = [
  "nayara.cg_ 6643331766861266949", // Name OwnerID
  "elenaa.petrin 6572450917353111557",
  "bana_lifts 7191285774861435950",
];

const favoritesIds = extractId(favorites);
const otherFavoritesIds = extractId(otherFavorites);
const namesArrayIds = extractId(namesArray);
const subLiveIds = extractId(subLiveNames);

// new fetch link from https://www.tiktok.com/following
const fetchUrl = '';