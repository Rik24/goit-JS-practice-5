// TODO З масиву товарів { id, title, price } треба отримати простий масив назв, щоб підставити його в підказку пошуку. Напиши стрілочну функцію getTitles, яка використовує map.

// const getTitles = products => {
//   const titleArr = products.map((el, id, arr) => {
//     return el.title;
//   });
//   return titleArr;
// };

// * Скорочено
// const getTitles = products => products.map(el => el.title);

// console.log(
//   getTitles([
//     { id: 1, title: 'Миша' },
//     { id: 2, title: 'Монітор' },
//   ])
// );

// TODO Кожна стаття має масив тегів. Для хмари тегів потрібен один плоский список (повтори поки що залишаємо). Напиши функцію collectTags(articles)

// const collectTags = articles => {
//   const tagsArr = articles.flatMap((el, id, arr) => {
//     return el.tags;
//   });
//   return tagsArr;
// };

// * Скорочено
// const collectTags = articles => articles.flatMap(article => article.tags);

// console.log(collectTags([{ tags: ['js', 'css'] }, { tags: ['html'] }]));

// TODO Постачальник підняв ціни на певний відсоток. Напиши функцію applyMarkup(prices, percent), яка повертає новий масив цін із націнкою, округлених до 2 знаків. Вихідний масив не змінюється.

// const applyMarkup = (prices, percent) => {
//   const newPrices = prices.map((el, id, Arr) => {
//     return Number((el * (1 + percent / 100)).toFixed(2));
//   });
//   return newPrices;
// };

// * Скорочено
// const applyMarkup = (prices, percent) =>
//   prices.map(el => Number((el * (1 + percent / 100)).toFixed(2)));

// console.log(applyMarkup([100, 250], 10));

// TODO ***** Для звіту треба зібрати всі товарні позиції з масиву замовлень в один масив, додавши до кожної позиції номер замовлення. Напиши функцію collectOrderItems(orders), де замовлення — { id, items: [{ title, qty }] }.

// const collectOrderItems = orders => {
//   const orderItems = orders.flatMap(order => {
//     return order.items.map(item => {
//       return { ...item, orderId: order.id };
//     });
//   });
//   return orderItems;
// };

// * Скорочено

// const collectOrderItems = orders =>
//   orders.flatMap(order =>
//     order.items.map(item => ({ ...item, orderId: order.id }))
//   );

// ///

// console.log(
//   collectOrderItems([
//     {
//       id: 10,
//       items: [
//         { title: 'Миша', qty: 3 },
//         { title: 'Монiтор', qty: 1 },
//       ],
//     },
//     { id: 11, items: [{ title: 'Клава', qty: 3 }] },
//   ])
// );

// TODO flatMap вміє відкидати елементи: якщо колбек повертає порожній масив, елемент зникає. Напиши функцію getDeliveredCities(orders), яка повертає міста лише доставлених замовлень (status === 'delivered'), використавши один flatMap.

// const getDeliveredCities = orders =>
//   orders.flatMap(order => (order.status === 'delivered' ? order.city : []));

// * Лучше использовать filter
// const getDeliveredCities = orders =>
//   orders.filter(order => order.status === 'delivered').map(order => order.city);

// //

// console.log(
//   getDeliveredCities([
//     { city: 'Київ', status: 'delivered' },
//     { city: 'Львів', status: 'new' },
//   ])
// );

// TODO Користувачі вводять телефон як завгодно: з пробілами, дужками й дефісами. Напиши функцію normalizePhones(phones), яка залишає лише цифри і приводить номер до вигляду +380XXXXXXXXX. Номери, у яких після очищення не 12 цифр, познач як null.

// const onlyDigits = phone =>
//   phone
//     .split('')
//     .filter(symbol => symbol >= '0' && symbol <= '9')
//     .join('');

// const normalizePhones = (phones, callback) =>
//   phones.map(phone => {
//     const digits = callback(phone);

//     return digits.length === 12 ? '+' + digits : null;
//   });

// console.log(normalizePhones(['(067) 123-45-67', '380671234567'], onlyDigits));
