import fs from 'fs';

const readJSON = (path) => {
  try {
    return JSON.parse(fs.readFileSync(path, 'utf-8'));
  } catch (e) {
    return {};
  }
};

const googleK = readJSON('/tmp/google-k.json');
const altegioK = readJSON('/tmp/altegio-k.json');
const altegioZ = readJSON('/tmp/altegio-z.json');

console.log('Google K response:', JSON.stringify(googleK, null, 2).substring(0, 500));

const processGoogleReviews = (data) => {
  const reviews = (data.reviews || []).map(r => ({
    text: r.text?.text || r.text,
    rating: r.rating,
    author_name: r.authorAttribution?.displayName || 'Google Review',
    time: r.publishTime ? new Date(r.publishTime).getTime() / 1000 : (r.relativePublishTimeDescription ? Math.floor(Date.now() / 1000) : null)
  }));
  return { reviews, rating: data.rating };
};

const processAltegioReviews = (data) => {
  const reviews = (Array.isArray(data) ? data : (data.comments || [])).map(r => ({
    text: r.text || r.comment,
    rating: r.rating,
    author_name: r.user_name || r.name,
    created_at: r.date || r.created_at
  }));
  const rating = reviews.length > 0 ? (reviews.reduce((s, r) => s + (r.rating || 0), 0) / reviews.length).toFixed(1) : null;
  return { reviews, rating };
};

const hardcodedReviewsK = [
  { text: 'This was my first attempt at CrossFit, and I\'m impressed!\nThe cool gym and trainer! I\'m using group training and it\'s the best thing that you can get for a newbie like me :D', rating: 5, author_name: 'Denys Vanat', time: Math.floor(new Date('2025-06-23').getTime() / 1000) },
  { text: 'Top gym with everything you need, incredibly friendly atmosphere, professional support and cool workouts. Yes, this is a real place of strength. ☺️ I go to training with incredible pleasure. 🤩', rating: 5, author_name: 'Viktoriia Nalyvaiko', time: Math.floor(new Date('2025-10-15').getTime() / 1000) },
  { text: 'A good crossfit gym with a trendy renovation and constantly updated equipment. It\'s spacious and pleasant. The trainers are qualified and attentive, skillfully adapting to the needs of the athlete. There are offers of subscriptions in different price categories. Suitable for both beginners and professional athletes!', rating: 5, author_name: 'Квітка Секунда', time: Math.floor(new Date('2026-02-03').getTime() / 1000) },
  { text: 'Everything is as it should be: a good, spacious hall, good equipment, good changing room, cool service in general.\n\nI really like that the trainer (Orest) is always involved in the group training, monitors and corrects if something is done wrong. He does not have the biggest mistake of some trainers, who allow themselves to sit on their phones during group classes', rating: 5, author_name: 'Danyil Shkoropad', time: Math.floor(new Date('2025-06-23').getTime() / 1000) },
  { text: 'Top place with top people. Very comfortable training room, good team of trainers, results will not take long to come. There are different training options: Personal, group or just open gym. One of the best CrossFit halls. There is also a sauna, table tennis.', rating: 5, author_name: 'Dymik Dymik', time: Math.floor(new Date('2025-06-23').getTime() / 1000) }
];

const hardcodedReviewsZ = [
  { text: 'Чудовий кросфіт-зал! Кваліфіковані тренери, дружня команда, що формує місцну спільноту. А протеїнові коктейлі, які робить адміністраторка Дарина, — топ! Всім рекомендую: як новачкам, так і досвідченим атлетам!', rating: 5, author_name: 'Квітка Секунда', time: Math.floor(new Date('2025-02-21').getTime() / 1000) },
  { text: 'Зал — просто топ! Класна атмосфера, відчувається командний дух і мотивація працювати на максимум. Тренер Юліан — спеціаліст найвищого рівня: завжди уважний до кожного, допомагає з технікою та постійно підтримує. Рекомендую всім, хто хоче якісних тренувань і реального прогресу!', rating: 5, author_name: 'Олег Габчак', time: Math.floor(new Date('2024-10-21').getTime() / 1000) },
  { text: 'Revat CrossFit — це не просто зал, це справжня спільнота дійсу, сили й підтримки! Кожне тренування тут — вибух енергії та виклик собі. Тренери — професіонали, які...', rating: 5, author_name: 'Оксана Ставарська', time: Math.floor(new Date('2024-10-21').getTime() / 1000) },
  { text: 'Професійна і досвідчена команда тренерів. Дуже приємна атмосфера і хорошi люди. Радий, що займаюся з ними вже більше року. Ліза rispetto.', rating: 5, author_name: 'Володимир Ного', time: Math.floor(new Date('2024-10-21').getTime() / 1000) },
  { text: 'Відвідую уже 2 роки, зал у якому ніколи не стане нудно. Усім широкого радіїу хоча б раз спробувати й обов\'язково у тягнетесь! Дуже тепла і душевна атмосфера, яку створюють власники залу, які у тому числі тренери) відчуваєш себе частинкою великої ревативської сім\'ї )', rating: 5, author_name: 'Катерина Сарницька', time: Math.floor(new Date('2020-10-21').getTime() / 1000) },
  { text: 'Вибирала зал найближче до хати. Атмосфера 10/10. Тренери 11/10. Крос-фітом ніколи не займалася, але тренери уважні, тому наркрузки давали по моїх силах. Коротше, спочатку страшно, а потім хочеться ще!', rating: 5, author_name: 'Надійка Копійка', time: Math.floor(new Date('2023-10-21').getTime() / 1000) }
];

const googleKData = processGoogleReviews(googleK);
const altegioKData = processAltegioReviews(altegioK);
const altegioZData = processAltegioReviews(altegioZ);

console.log('Google K reviews count:', googleKData.reviews.length);
console.log('First review:', JSON.stringify(googleKData.reviews[0], null, 2));
console.log('Will use hardcoded?', googleKData.reviews.length === 0);

const reviews = {
  locations: {
    kulparkivska: {
      name: 'Кульпарківська 93',
      google: { reviews: googleKData.reviews.length > 0 ? googleKData.reviews.slice(0, 10) : hardcodedReviewsK.slice(0, 10), rating: googleKData.rating || 5 },
      altegio: { reviews: altegioKData.reviews.slice(0, 10), rating: altegioKData.rating }
    },
    zhovkivska: {
      name: 'Жовківська 22',
      google: { reviews: hardcodedReviewsZ.slice(0, 10), rating: 5 },
      altegio: { reviews: altegioZData.reviews.slice(0, 10), rating: altegioZData.rating }
    }
  },
  lastUpdated: new Date().toISOString()
};

console.log('Writing reviews - Kulparkivska count:', reviews.locations.kulparkivska.google.reviews.length);
fs.writeFileSync('src/data/reviews.json', JSON.stringify(reviews, null, 2));
console.log('Reviews updated successfully');
