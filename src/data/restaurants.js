const restaurants = [
  {
    id: 1,
    slug: "la-greca",
    name: "La Greca",
    description: "Villafranca Verona",
    video: "/lagreca/video.mp4",
    gallery: [
      "lagreca/forno.jpg",
      "lagreca/forno.jpeg",
      "lagreca/paella.jpeg",
      "lagreca/pesce.jpeg",
    ],
    address: "V.le Postumia, 73, 37069 Villafranca di Verona VR",
    phone: "+39 045 6304499",
    menuPdf: "/menu/LagrecaMenu.pdf",
    googleUrl: "https://www.google.com/search?q=la+greca+villafranca+verona",
    mapsUrl: "https://www.google.com/maps/dir//La+Greca+%7C+Ristorante+Pizzeria,+V.le+Postumia,+73,+37069+Villafranca+di+Verona+VR/@45.4426624,10.9805568,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x4781de131ab9f381:0x8604d5fa617be197!2m2!1d10.8685789!2d45.3689835?entry=ttu&g_ep=EgoyMDI2MDUxMS4wIKXMDSoASAFQAw%3D%3D",
    facebook: "https://www.facebook.com/pizzerialagreca/?locale=it_IT",
    hours: `Lun - Sab | 12:00 - 14:00 · 19:00 - 23:00\nDom | 12:00 - 14:30 · 19:00 - 23:00`,
    menu: ["Moussaka", "Gyros Pita", "Souvlaki", "Baklava"],
  },
  {
    id: 2,
    slug: "doppiozero",
    name: "DoppioZero",
    description: "Negrar di Valpolicella Verona",
    video: "/doppiozero/locale.mp4",
    gallery: [
      "/doppiozero/locale.jpeg",
      "doppiozero/location.jpeg",
      "doppiozero/pizzatart.png",
      "doppiozero/bottiglie.jpeg",
      "doppiozero/filetto.jpeg"
    ],
    address: "Str. del Recioto, 11, 37024 Negrar di Valpolicella VR",
    phone: "+39 045 6319169",
    whatsapp: "390456319169",
    menuPdf: "https://menu-qr-rosy.vercel.app/",
    googleUrl: "https://www.google.com/search?q=doppiozero+negrar+verona",
    mapsUrl: "https://www.google.com/maps/dir//Doppio+Zero+Ristorante+Pizzeria,+Str.+del+Recioto,+11,+37024+Negrar+di+Valpolicella+VR/@45.4426624,10.9805568,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x4781e34339df4c89:0x76a0194f64cc77ba!2m2!1d10.9408104!2d45.526511?entry=ttu&g_ep=EgoyMDI2MDUxMS4wIKXMDSoASAFQAw%3D%3D",
    instagram: "https://www.instagram.com/doppiozeronegrar/",
    facebook: "https://www.facebook.com/p/Pizzeria-Doppio-Zero-61567071104880/",
    tiktok: "https://www.tiktok.com/@doppiozero_official",
    hours: `Lun | 12:00 - 14:30 · 18:30 - 22:30 \n
            Mar | 18:30 - 22:30 \n
            Mer - Ven | 12:00 - 14:30 · 18:30 - 22:30 \n
            Sab | 18.30 - 22.30 \n
            Dom | 18:30 - 22:30`,
    menu: ["Pizza Margherita", "Pizza Burrata", "Focaccia Gourmet", "Tiramisù"],
  },
  {
    id: 3,
    slug: "la-vecchia-lira",
    name: "La Vecchia Lira",
    description: "San Massimo Verona",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
    gallery: [
      "vecchialira/locale.jpeg",
      "vecchialira/pizza.png",
      "vecchialira/pizzacapr.png",
    ],
    address: "Via Calabria, 7, 37139 San Massimo VR",
    phone: "+39 045 8901188",
    menuPdf: "/menu/VecchialiraMenu.pdf",
    googleUrl: "https://www.google.com/search?q=la+vecchia+lira+verona",
    mapsUrl: "https://www.google.com/maps/dir//Pizzeria+Vecchia+Lira+San+Massimo,+Via+Calabria,+7,+37139+San+Massimo+VR/@45.4426624,10.9805568,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x4781e194609a796b:0x5086d2765ccf1c43!2m2!1d10.9486262!2d45.4381105?entry=ttu&g_ep=EgoyMDI2MDUxMS4wIKXMDSoASAFQAw%3D%3D",
    facebook: "https://www.facebook.com/VecchiaLiraSanMassimo/?locale=it_IT",
    hours: `Lun - Dom | 12:00 - 14:30 · 19:00 - 23:30`,
    menu: ["Risotto Amarone", "Tagliata di Manzo", "Lasagna", "Panna Cotta"],
  },
];

export default restaurants;