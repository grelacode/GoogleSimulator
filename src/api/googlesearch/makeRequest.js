const fetch = require('node-fetch');


const searchInGoogle = async (req, res) => {
    const search = req.params.search;
    const googleID = "008624764018852105842:jjb3zflg3hi"
    const key = process.env.GOOGLE_API_KEY;
    const googleResponse = await fetch(`https://www.googleapis.com/customsearch/v1?key=${key}&cx=${googleID}&searchType=image&q=${search}&num=10`)

    const data = await googleResponse.json();



    const dataM = [{
        "title": "Las cosas más extrañas que hace tu gato tienen explicación - Las ...",
        "link": "https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/59c4f5655bafe82c692a7052/gato-marron_0.jpg",
        "contextLink": "https://www.muyinteresante.es/mascotas/fotos/las-15-cosas-mas-extranas-que-hace-tu-gato-tienen-explicacion",
        "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAlJPrMPt97IhKz9BE3jBhJklqv2KUoR-mrGu6eorf37j2OVZ-UCxYsA&s",

    },
    {
        "title": "Qué raza es Garfield? - National Geographic en Español",
        "link": "https://dam.ngenespanol.com/wp-content/uploads/2019/08/gato-exotico-garfield-2.jpg",
        "contextLink": "https://www.ngenespanol.com/traveler/que-raza-es-garfield-gato-exotico/",
        "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfvAgWy8Iua8UmDko23MAXg5FC8bkBF6rVLXyfYh7ytytyWXGYC0lI9EM&s",
    },
    {
        "title": "15 motivos por los que los gatos maúllan sin cesar - Como forma de ...",
        "link": "https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/5ae2f6725bafe8a016ff7323/gato-maullando_0.jpg",
        "contextLink": "https://www.muyinteresante.es/mascotas/fotos/motivos-por-los-que-tu-gato-maulla-sin-cesar",
        "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDn0VAMymZyHCoraY1QayXWFNC76DfdEd9vOcHRMMSpv4TstFcgJYaQ6E&s",
    },
    {
        "title": "Sabes cómo nació la expresión \"gato encerrado\"? - National ...",
        "link": "https://www.ngenespanol.com/wp-content/uploads/2018/08/%C2%BFSabes-c%C3%B3mo-naci%C3%B3-la-expresi%C3%B3n-gato-encerrado.png",
        "contextLink": "https://www.ngenespanol.com/traveler/sabes-como-nacio-la-expresion-gato-encerrado/",
        "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxZ-a7P_0Hhvgbe8vS_dc89EOz8Bz-0zo5FQFGF-gIvRirrUtRsUxqLg&s"
    },
    {
        "title": "Desmontamos los falsos mitos sobre los gatos más extendidos - Los ...",
        "link": "https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/5b2b8f8e5bafe87a7d3c986b/gato-peludo-jardin_0.jpg",

        "contextLink": "https://www.muyinteresante.es/mascotas/fotos/falsos-mitos-sobre-los-gatos",

        "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTrVI7T2tllUluYp2aU5vhaEtlfv_qedcrwd1nSj77g-R05GQncmjtzJg&s"
    },
    {
        "title": "Por qué los gatos aman las cajas? - National Geographic en Español",
        "link": "https://dam.ngenespanol.com/wp-content/uploads/2019/02/gatos-caja-2.png",

        "contextLink": "https://www.ngenespanol.com/animales/por-que-los-gatos-aman-las-cajas/",

        "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS49F1uKmDgssqEWyl5pEBMpPLczd14q3DTWtEQluKWN7RwzLkrwv1z60w&s"
    },
    {

        "title": "56 nombres originales y bonitos para gatos. ¡Te encantarán ...",

        "link": "https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/5a659c6f5bafe8074be92846/gatito-blanco-negro_0.jpg",

        "contextLink": "https://www.muyinteresante.es/mascotas/fotos/nombres-originales-y-bonitos-para-tu-gato",

        "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMURX4Rdh8VxqCfogLGnGRc4v4kTtx1RCU9Rzm6qBs2mEldrdmiPGHKOI&s"
    },
    {
        "title": "Cuántas garras tiene un gato? - National Geographic en Español",
        "link": "https://dam.ngenespanol.com/wp-content/uploads/2018/10/gatos-patas-garras.png",
        "contextLink": "https://www.ngenespanol.com/dato-dia/cuantas-garras-tiene-un-gato/",
        "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmONH32YO3T-Lt0OTRI_QyH4NEm6kLx90F0LBuO5zxn-zXiJo-bS6F7Wk&s"
    },
    {
        "title": "15 alimentos que puede o no comer tu gato. ¡Apunta! - Carne de ...",
        "link": "https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/5ad5c8a65cafe8257ca22728/gato-comiendo-pienso_1.jpg",
        "contextLink": "https://www.muyinteresante.es/mascotas/fotos/alimentos-que-puede-o-no-comer-tu-gato",
        "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7ZOEYbKRUGCOxr5BpLiFYOQbQiHqWA3wmEaBnqP48PZK5uj9M3EsRSfM&s"
    },
    {
        "title": "Gatos y perros salen de una lista oficial de animales comestibles ...",
        "link": "https://dam.ngenespanol.com/wp-content/uploads/2020/04/perros-gatos-china.jpg",
        "contextLink": "https://www.ngenespanol.com/el-mundo/gatos-y-perros-salen-de-una-lista-oficial-de-animales-comestibles-en-china/",
        "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBsCGKPobleqne1H60_1ItR2sUHg7Wxr2jIaTzf9_T3uqrjXF3iQhahjY&s"
    }
    ];

    res.json({
        dataM
    })
}

module.exports = searchInGoogle;




