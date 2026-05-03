

export const categories = [
  { id: 'dorucak', hr: "Doručak", en: "Breakfast" },
  { id: 'smoothie', hr: "Smoothie", en: "Smoothies" },
  { id: 'tortilje', hr: "Tortilje", en: "Wraps" },
  { id: 'burgeri', hr: "Burgeri", en: "Burgers" },
  { id: 'glavna_jela', hr: "Glavna jela", en: "Main Dishes" },
  { id: 'rizoti', hr: "Rižoti", en: "Risottos" },
  { id: 'paste', hr: "Paste", en: "Pastas" },
  { id: 'salate', hr: "Salate", en: "Salads" },
  { id: 'hladne_plate', hr: "Hladne plate", en: "Cold Platters" },
  { id: 'dodaci', hr: "Dodaci", en: "Extras" }
];

export const menuData = [
  // --- DORUČAK ---
  {
    id: 1,
    categoryId: "dorucak",
    title: { hr: "Jaja s pršutom", en: "Eggs with Prosciutto" },
    description: { hr: "3 jaja, pršut, rajčica, rukola, vrhnje", en: "3 eggs, prosciutto, tomato, arugula, cream" },
    note: { hr: "Način pripreme: omlet / na oko / kajgana", en: "Preparation: omelet / sunny side up / scrambled" },
    price: "0€",
    image: "https://res.cloudinary.com/duomot4hp/image/upload/q_auto/f_auto/v1777831127/451761194_1232322477929111_3135065865094648165_n_vgtypk.jpg"


  },
  {
    id: 2,
    categoryId: "dorucak",
    title: { hr: "Jaja sa šunkom", en: "Eggs with Ham" },
    description: { hr: "3 jaja, šunka, rajčica, rukola, vrhnje", en: "3 eggs, ham, tomato, arugula, cream" },
    note: { hr: "Način pripreme: omlet / na oko / kajgana", en: "Preparation: omelet / sunny side up / scrambled" },
    price: "0€",
    image: "/slike/placeholder.webp"
  },
  {
    id: 3,
    categoryId: "dorucak",
    title: { hr: "Jaja s pancetom", en: "Eggs with Bacon" },
    description: { hr: "3 jaja, panceta, rajčica, rukola, vrhnje", en: "3 eggs, bacon, tomato, arugula, cream" },
    note: { hr: "Način pripreme: omlet / na oko / kajgana", en: "Preparation: omelet / sunny side up / scrambled" },
    price: "0€",
    image: "/slike/placeholder.webp"
  },
  {
    id: 4,
    categoryId: "dorucak",
    title: { hr: "Jaja s povrćem", en: "Eggs with Vegetables" },
    description: { hr: "3 jaja, rukola, šampinjoni, paprika, tikvica, vrhnje", en: "3 eggs, arugula, mushrooms, peppers, zucchini, cream" },
    note: { hr: "Način pripreme: omlet / na oko / kajgana", en: "Preparation: omelet / sunny side up / scrambled" },
    price: "0€",
    image: "/slike/placeholder.webp"
  },
  {
    id: 5,
    categoryId: "dorucak",
    title: { hr: "Engleski doručak", en: "English Breakfast" },
    description: { hr: "3 jaja, kobasica, panceta, bijeli grah, rajčica, rukola", en: "3 eggs, sausage, bacon, white beans, tomato, arugula" },
    price: "0€",
    image: "/slike/placeholder.webp"
  },
  {
    id: 6,
    categoryId: "dorucak",
    title: { hr: "Kremasta kajgana s avokadom na tostu", en: "Creamy Scrambled Eggs with Avocado on Toast" },
    description: { hr: "3 jaja, avokado, tost, maslac", en: "3 eggs, avocado, toast, butter" },
    price: "0€",
    image: "/slike/placeholder.webp"
  },
  {
    id: 7,
    categoryId: "dorucak",
    title: { hr: "Doručak burger", en: "Breakfast Burger" },
    description: { hr: "zemička, cheddar umak, iceberg, jaje, panceta, pomfrit", en: "bun, cheddar sauce, iceberg, egg, bacon, fries" },
    price: "0€",
    image: "/slike/placeholder.webp"
  },
  {
    id: 8,
    categoryId: "dorucak",
    title: { hr: "Acai bowl", en: "Acai Bowl" },
    description: { hr: "jogurt, žitarice, banana, jagoda, med", en: "yogurt, cereals, banana, strawberry, honey" },
    price: "0€",
    image: "/slike/placeholder.webp"
  },

  // --- SMOOTHIE ---
  {
    id: 9,
    categoryId: "smoothie",
    title: { hr: "Strawberry Fantasy", en: "Strawberry Fantasy" },
    description: { hr: "jagoda, banana", en: "strawberry, banana" },
    price: "0€",
    image: "/slike/placeholder.webp"
  },
  {
    id: 10,
    categoryId: "smoothie",
    title: { hr: "Mango Dream", en: "Mango Dream" },
    description: { hr: "mango, kruška", en: "mango, pear" },
    price: "0€",
    image: "/slike/placeholder.webp"
  },

  // --- TORTILJE ---
  {
    id: 11,
    categoryId: "tortilje",
    title: { hr: "Tortilja Carbonara", en: "Carbonara Wrap" },
    description: { hr: "kremasti umak od vrhnja, piletina, sir, panceta", en: "creamy white sauce, chicken, cheese, bacon" },
    note: { hr: "uz sve tortilje dolazi pomfrit", en: "all wraps served with fries" },
    price: "0€",
    image: "/slike/placeholder.webp"
  },
  {
    id: 12,
    categoryId: "tortilje",
    title: { hr: "Tortilja Losos", en: "Salmon Wrap" },
    description: { hr: "kremasti avokado, dimljeni losos, iceberg, rukola, masline", en: "creamy avocado, smoked salmon, iceberg, arugula, olives" },
    note: { hr: "uz sve tortilje dolazi pomfrit", en: "all wraps served with fries" },
    price: "0€",
    image: "/slike/placeholder.webp"
  },
  {
    id: 13,
    categoryId: "tortilje",
    title: { hr: "Tortilja Vege", en: "Veggie Wrap" },
    description: { hr: "kremasti avokado, grilano povrće, mozzarella, rukola", en: "creamy avocado, grilled vegetables, mozzarella, arugula" },
    note: { hr: "uz sve tortilje dolazi pomfrit", en: "all wraps served with fries" },
    price: "0€",
    image: "/slike/placeholder.webp"
  },

  // --- BURGERI ---
  {
    id: 14,
    categoryId: "burgeri",
    title: { hr: "Classic Burger", en: "Classic Burger" },
    description: { hr: "junetina, cheddar, iceberg, rajčica, kiseli krastavci, BBQ mayo", en: "beef, cheddar, iceberg, tomato, pickles, BBQ mayo" },
    note: { hr: "uz sve burgere dolazi pomfrit", en: "all burgers served with fries" },
    price: "0€",
    image: "/slike/placeholder.webp"
  },
  {
    id: 15,
    categoryId: "burgeri",
    title: { hr: "Smokey Bacon Burger", en: "Smokey Bacon Burger" },
    description: { hr: "junetina, cheddar, panceta, iceberg, rajčica, kiseli krastavci, BBQ mayo", en: "beef, cheddar, bacon, iceberg, tomato, pickles, BBQ mayo" },
    note: { hr: "uz sve burgere dolazi pomfrit", en: "all burgers served with fries" },
    price: "0€",
    image: "/slike/placeholder.webp"
  },
  {
    id: 16,
    categoryId: "burgeri",
    title: { hr: "Truffle Burger", en: "Truffle Burger" },
    description: { hr: "junetina, panceta, cheddar, rukola, kiseli krastavci, truffle mayo", en: "beef, bacon, cheddar, arugula, pickles, truffle mayo" },
    note: { hr: "uz sve burgere dolazi pomfrit", en: "all burgers served with fries" },
    price: "0€",
    image: "/slike/placeholder.webp"
  },
  {
    id: 17,
    categoryId: "burgeri",
    title: { hr: "Chicken Crunch Burger", en: "Chicken Crunch Burger" },
    description: { hr: "piletina, iceberg, honey mustard, kiseli krastavci", en: "chicken, iceberg, honey mustard, pickles" },
    note: { hr: "uz sve burgere dolazi pomfrit", en: "all burgers served with fries" },
    price: "0€",
    image: "/slike/placeholder.webp"
  },
  {
    id: 18,
    categoryId: "burgeri",
    title: { hr: "Spicy Jalapeńo Burger", en: "Spicy Jalapeño Burger" },
    description: { hr: "junetina, cheddar, jalapeńo, iceberg, BBQ mayo", en: "beef, cheddar, jalapeño, iceberg, BBQ mayo" },
    note: { hr: "uz sve burgere dolazi pomfrit", en: "all burgers served with fries" },
    price: "0€",
    image: "/slike/placeholder.webp"
  },

  // --- GLAVNA JELA ---
  {
    id: 19,
    categoryId: "glavna_jela",
    title: { hr: "Pileći file na grillu", en: "Grilled Chicken Fillet" },
    description: { hr: "piletina, šampinjoni, paprika, tikvica, pomfrit", en: "chicken, mushrooms, peppers, zucchini, fries" },
    price: "0€",
    image: "/slike/placeholder.webp"
  },
  {
    id: 20,
    categoryId: "glavna_jela",
    title: { hr: "Chicken Fingers", en: "Chicken Fingers" },
    description: { hr: "panirana piletina, pomfrit, cheddar umak, BBQ mayo", en: "breaded chicken, fries, cheddar sauce, BBQ mayo" },
    price: "0€",
    image: "/slike/placeholder.webp"
  },
  {
    id: 21,
    categoryId: "glavna_jela",
    title: { hr: "Piletina u umaku od šampinjona", en: "Chicken in Mushroom Sauce" },
    description: { hr: "pire krumpir, kremasti umak od šampinjona", en: "mashed potatoes, creamy mushroom sauce" },
    price: "0€",
    image: "/slike/placeholder.webp"
  },
  {
    id: 22,
    categoryId: "glavna_jela",
    title: { hr: "Piletina u umaku od gorgonzole", en: "Chicken in Gorgonzola Sauce" },
    description: { hr: "pire krumpir, gorgonzola umak", en: "mashed potatoes, gorgonzola sauce" },
    price: "0€",
    image: "/slike/placeholder.webp"
  },
  {
    id: 23,
    categoryId: "glavna_jela",
    title: { hr: "Piletina u umaku od gambera", en: "Chicken in Prawn Sauce" },
    description: { hr: "pire krumpir, umak od gambera", en: "mashed potatoes, prawn sauce" },
    price: "0€",
    image: "/slike/placeholder.webp"
  },
  {
    id: 24,
    categoryId: "glavna_jela",
    title: { hr: "Fish & Chips", en: "Fish & Chips" },
    description: { hr: "panirani inćuni i lignje, pomfrit", en: "breaded anchovies and squid, fries" },
    price: "0€",
    image: "/slike/placeholder.webp"
  },
  {
    id: 25,
    categoryId: "glavna_jela",
    title: { hr: "Brancin s rižotom od povrća", en: "Sea Bass with Vegetable Risotto" },
    description: { hr: "šampinjoni, tikvica, paprika", en: "mushrooms, zucchini, peppers" },
    price: "0€",
    image: "/slike/placeholder.webp"
  },
  {
    id: 26,
    categoryId: "glavna_jela",
    title: { hr: "Tuna steak s rižotom od povrća", en: "Tuna Steak with Vegetable Risotto" },
    description: { hr: "šampinjoni, tikvica, paprika", en: "mushrooms, zucchini, peppers" },
    price: "0€",
    image: "/slike/placeholder.webp"
  },
  {
    id: 27,
    categoryId: "glavna_jela",
    title: { hr: "Beefsteak", en: "Beefsteak" },
    description: { hr: "pire krumpir, grilovano povrće", en: "mashed potatoes, grilled vegetables" },
    price: "0€",
    image: "/slike/placeholder.webp"
  },

  // --- RIŽOTI ---
  {
    id: 28,
    categoryId: "rizoti",
    title: { hr: "Rižoto s piletinom i povrćem", en: "Chicken and Vegetable Risotto" },
    description: { hr: "paprika, tikvica, šampinjoni, parmezan", en: "peppers, zucchini, mushrooms, parmesan" },
    price: "0€",
    image: "/slike/placeholder.webp"
  },
  {
    id: 29,
    categoryId: "rizoti",
    title: { hr: "Rižoto s gamberima", en: "Prawn Risotto" },
    description: { hr: "čeri rajčica, ljubičasta kapula, svježi bosiljak, umak od rajčice", en: "cherry tomatoes, red onion, fresh basil, tomato sauce" },
    price: "0€",
    image: "/slike/placeholder.webp"
  },
  {
    id: 30,
    categoryId: "rizoti",
    title: { hr: "Rižoto s biftekom", en: "Beef Risotto" },
    description: { hr: "čeri rajčica, šampinjoni, svježi bosiljak, parmezan", en: "cherry tomatoes, mushrooms, fresh basil, parmesan" },
    price: "0€",
    image: "/slike/placeholder.webp"
  },

  // --- PASTE ---
  {
    id: 31,
    categoryId: "paste",
    title: { hr: "Carbonara", en: "Carbonara" },
    description: { hr: "jaje, panceta, parmezan, vrhnje", en: "egg, bacon, parmesan, cream" },
    price: "0€",
    image: "/slike/placeholder.webp"
  },
  {
    id: 32,
    categoryId: "paste",
    title: { hr: "Pasta s piletinom i šampinjonima", en: "Chicken and Mushroom Pasta" },
    description: { hr: "piletina, šampinjoni, češnjak, parmezan, vrhnje", en: "chicken, mushrooms, garlic, parmesan, cream" },
    price: "0€",
    image: "/slike/placeholder.webp"
  },
  {
    id: 33,
    categoryId: "paste",
    title: { hr: "Pasta s biftekom i tartufima", en: "Beef and Truffle Pasta" },
    description: { hr: "biftek, tartuf, rukola, parmezan", en: "beef steak, truffle, arugula, parmesan" },
    price: "0€",
    image: "/slike/placeholder.webp"
  },

  // --- SALATE ---
  {
    id: 34,
    categoryId: "salate",
    title: { hr: "Cezar salata", en: "Caesar Salad" },
    description: { hr: "piletina, panceta, iceberg, čeri rajčica, parmezan, Cezar dressing", en: "chicken, bacon, iceberg, cherry tomatoes, parmesan, Caesar dressing" },
    price: "0€",
    image: "/slike/placeholder.webp"
  },
  {
    id: 35,
    categoryId: "salate",
    title: { hr: "Tuna salata", en: "Tuna Salad" },
    description: { hr: "tuna, bijeli grah, ljubičasta kapula, masline, rukola, limunov sok, maslinovo ulje", en: "tuna, white beans, red onion, olives, arugula, lemon juice, olive oil" },
    price: "0€",
    image: "/slike/placeholder.webp"
  },
  {
    id: 36,
    categoryId: "salate",
    title: { hr: "Beef salata", en: "Beef Salad" },
    description: { hr: "junetina, iceberg, rukola, parmezan, čeri rajčica, balsamico krema, maslinovo ulje", en: "beef, iceberg, arugula, parmesan, cherry tomatoes, balsamic cream, olive oil" },
    price: "0€",
    image: "/slike/placeholder.webp"
  },
  {
    id: 37,
    categoryId: "salate",
    title: { hr: "Grčka salata", en: "Greek Salad" },
    description: { hr: "rajčica, krastavac, ljubičasti luk, paprika, masline, feta sir, maslinovo ulje, origano", en: "tomato, cucumber, red onion, pepper, olives, feta cheese, olive oil, oregano" },
    price: "0€",
    image: "/slike/placeholder.webp"
  },

  // --- HLADNE PLATE ---
  {
    id: 38,
    categoryId: "hladne_plate",
    title: { hr: "Lime plata", en: "Lime Platter" },
    description: { hr: "pršut, kulen, feta sir, mozzarella, čeri rajčica, masline, orašasti plodovi, tost", en: "prosciutto, kulen, feta, mozzarella, cherry tomatoes, olives, nuts, toast" },
    price: "0€",
    image: "/slike/placeholder.webp"
  },
  {
    id: 39,
    categoryId: "hladne_plate",
    title: { hr: "Voćna plata", en: "Fruit Platter" },
    description: { hr: "svježe voće", en: "fresh fruit" },
    price: "0€",
    image: "/slike/placeholder.webp"
  },

  // --- DODACI ---
  {
    id: 40,
    categoryId: "dodaci",
    title: { hr: "Pomfrit", en: "French Fries" },
    description: { hr: "", en: "" },
    price: "0€",
    image: "/slike/placeholder.webp"
  },
  {
    id: 41,
    categoryId: "dodaci",
    title: { hr: "Onion rings", en: "Onion Rings" },
    description: { hr: "", en: "" },
    price: "0€",
    image: "/slike/placeholder.webp"
  },
  {
    id: 42,
    categoryId: "dodaci",
    title: { hr: "Tost", en: "Toast" },
    description: { hr: "", en: "" },
    price: "0€",
    image: "/slike/placeholder.webp"
  },
  {
    id: 43,
    categoryId: "dodaci",
    title: { hr: "Jaje", en: "Egg" },
    description: { hr: "", en: "" },
    price: "0€",
    image: "/slike/placeholder.webp"
  },
  {
    id: 44,
    categoryId: "dodaci",
    title: { hr: "Slanina", en: "Bacon" },
    description: { hr: "", en: "" },
    price: "0€",
    image: "/slike/placeholder.webp"
  },
  {
    id: 45,
    categoryId: "dodaci",
    title: { hr: "Feta sir", en: "Feta Cheese" },
    description: { hr: "", en: "" },
    price: "0€",
    image: "/slike/placeholder.webp"
  },
  {
    id: 46,
    categoryId: "dodaci",
    title: { hr: "Parmezan", en: "Parmesan" },
    description: { hr: "", en: "" },
    price: "0€",
    image: "/slike/placeholder.webp"
  }
];