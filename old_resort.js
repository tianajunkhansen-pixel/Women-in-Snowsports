// RESORT ARRAYS

const allResorts = [];
const popularResorts = [];


// CREATE MAP

const map = L.map("map").setView([30, 0], 2);


// MAP BACKGROUND

L.tileLayer(
    "https://basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png?key=cb1_44rs_1_cabc661c03cec727453dfa39",
    {
        maxZoom: 20,
        attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions/">CARTO</a>'
    }
).addTo(map);


//#region JAPAN


// NISEKO

const niseko = L.marker([42.8048, 140.6874]).addTo(map);

niseko.bindPopup(`
    <h2>Niseko</h2>
    <img src="Images/niseko.jpg" alt="Niseko ski resort">
    <p>
        <strong>Region:</strong> Hokkaido<br>
        <strong>Sub-prefecture:</strong> Shiribeshi
    </p>
    <p>
        Niseko is one of Japan's most famous
        snowsports destinations.
    </p>
    <a href="https://www.niseko.ne.jp/en/" target="_blank">
        Learn More
    </a>
`);

allResorts.push(niseko);
popularResorts.push(niseko);


// HAKUBA

const hakuba = L.marker([36.6983, 137.8319]).addTo(map);

hakuba.bindPopup(`
    <h2>Hakuba</h2>
    <img src="Images/hakuba.jpg" alt="Hakuba ski resort">
    <p>
        <strong>Region:</strong> Chubu<br>
        <strong>Prefecture:</strong> Nagano
    </p>
    <p>
        Hakuba is a popular Japanese snowsports
        destination with many resorts and
        excellent winter conditions.
    </p>
    <a href="https://www.hakubavalley.com/en/" target="_blank">
        Learn More
    </a>
`);

allResorts.push(hakuba);
popularResorts.push(hakuba);


// FURANO

const furano = L.marker([43.3420, 142.3830]).addTo(map);

furano.bindPopup(`
    <h2>Furano</h2>
    <img src="Images/furano.jpg" alt="Furano ski resort">
    <p>
        <strong>Region:</strong> Hokkaido<br>
        <strong>Sub-prefecture:</strong> Kamikawa
    </p>
    <p>
        Furano is known for its dry powder snow
        and beautiful mountain scenery.
    </p>
    <a href="https://www.furanotourism.com/en/" target="_blank">
        Learn More
    </a>
`);

allResorts.push(furano);
popularResorts.push(furano);


// HOKKAIDO
// ALL RESORTS


// NISEKO MOIWA

const nisekoMoiwa = L.marker([42.8483, 140.6297]).addTo(map);

nisekoMoiwa.bindPopup(`
    <h2>Niseko Moiwa</h2>
    <p>
        <strong>Region:</strong> Hokkaido<br>
        <strong>Sub-prefecture:</strong> Shiribeshi
    </p>
    <p>
        Niseko Moiwa is a smaller ski area
        located near the Niseko region.
    </p>
    <a href="https://niseko-moiwa.jp/" target="_blank">
        Learn More
    </a>
`);

allResorts.push(nisekoMoiwa);


// RUSUTSU

const rusutsu = L.marker([42.7475, 140.8964]).addTo(map);

rusutsu.bindPopup(`
    <h2>Rusutsu</h2>
    <p>
        <strong>Region:</strong> Hokkaido<br>
        <strong>Sub-prefecture:</strong> Shiribeshi
    </p>
    <p>
        Rusutsu is a major Hokkaido ski resort
        with extensive skiing and snowboarding terrain.
    </p>
    <a href="https://rusutsu.com/en/" target="_blank">
        Learn More
    </a>
`);

allResorts.push(rusutsu);


// KIRORO

const kiroro = L.marker([43.0669, 140.9894]).addTo(map);

kiroro.bindPopup(`
    <h2>Kiroro</h2>
    <p>
        <strong>Region:</strong> Hokkaido<br>
        <strong>Sub-prefecture:</strong> Shiribeshi
    </p>
    <p>
        Kiroro is a Hokkaido ski resort
        known for its deep snowfall and powder skiing.
    </p>
    <a href="https://www.kiroro.co.jp/en/" target="_blank">
        Learn More
    </a>
`);

allResorts.push(kiroro);


// TOMAMU

const tomamu = L.marker([43.0617, 142.6228]).addTo(map);

tomamu.bindPopup(`
    <h2>Tomamu</h2>
    <p>
        <strong>Region:</strong> Hokkaido<br>
        <strong>Sub-prefecture:</strong> Kamikawa
    </p>
    <p>
        Hoshino Resorts Tomamu is a large
        resort destination in central Hokkaido.
    </p>
    <a href="https://www.snowtomamu.jp/winter/en/" target="_blank">
        Learn More
    </a>
`);

allResorts.push(tomamu);


// SAHORO

const sahoro = L.marker([43.1664, 142.8133]).addTo(map);

sahoro.bindPopup(`
    <h2>Sahoro</h2>
    <p>
        <strong>Region:</strong> Hokkaido<br>
        <strong>Sub-prefecture:</strong> Tokachi
    </p>
    <p>
        Sahoro is a ski resort located
        in eastern central Hokkaido.
    </p>
    <a href="https://sahoro.co.jp/winter/ski?lang=en" target="_blank">
        Learn More
    </a>
`);

allResorts.push(sahoro);


// SAPPORO TEINE

const sapporoTeine = L.marker([43.0981, 141.2103]).addTo(map);

sapporoTeine.bindPopup(`
    <h2>Sapporo Teine</h2>
    <p>
        <strong>Region:</strong> Hokkaido<br>
        <strong>Sub-prefecture:</strong> Ishikari
    </p>
    <p>
        Sapporo Teine is a ski resort located
        close to Sapporo city.
    </p>
    <a href="https://sapporo-teine.com/snow/lang/en/" target="_blank">
        Learn More
    </a>
`);

allResorts.push(sapporoTeine);


// SAPPORO KOKUSAI

const sapporoKokusai = L.marker([43.0722, 141.0828]).addTo(map);

sapporoKokusai.bindPopup(`
    <h2>Sapporo Kokusai</h2>
    <p>
        <strong>Region:</strong> Hokkaido<br>
        <strong>Sub-prefecture:</strong> Ishikari
    </p>
    <p>
        Sapporo Kokusai is a ski resort
        located west of Sapporo.
    </p>
    <a href="https://www.sapporo-kokusai.jp/en/" target="_blank">
        Learn More
    </a>
`);

allResorts.push(sapporoKokusai);


// KAMUI SKI LINKS

const kamui = L.marker([43.7039, 142.1867]).addTo(map);

kamui.bindPopup(`
    <h2>Kamui Ski Links</h2>
    <p>
        <strong>Region:</strong> Hokkaido<br>
        <strong>Sub-prefecture:</strong> Kamikawa
    </p>
    <p>
        Kamui Ski Links is located near
        Asahikawa in central Hokkaido.
    </p>
    <a href="https://www.kamui-skilinks.com/" target="_blank">
        Learn More
    </a>
`);

allResorts.push(kamui);


// ASAHIDAKE

const asahidake = L.marker([43.6574, 142.8118]).addTo(map);

asahidake.bindPopup(`
    <h2>Asahidake</h2>
    <p>
        <strong>Region:</strong> Hokkaido<br>
        <strong>Sub-prefecture:</strong> Kamikawa
    </p>
    <p>
        Asahidake is a high-altitude snow
        destination in the Daisetsuzan area.
    </p>
    <a href="https://asahidake.hokkaido.jp/en/" target="_blank">
        Learn More
    </a>
`);

allResorts.push(asahidake);


// KURODAKE

const kurodake = L.marker([43.6975, 142.9203]).addTo(map);

kurodake.bindPopup(`
    <h2>Kurodake</h2>
    <p>
        <strong>Region:</strong> Hokkaido<br>
        <strong>Sub-prefecture:</strong> Kamikawa
    </p>
    <p>
        Kurodake is a mountain snow destination
        in the Daisetsuzan area.
    </p>
    <a href="https://www.rinyu.co.jp/kurodake/en/" target="_blank">
        Learn More
    </a>
`);

allResorts.push(kurodake);


// SAPPORO BANKEI

const sapporoBankei = L.marker([43.0306, 141.2781]).addTo(map);

sapporoBankei.bindPopup(`
    <h2>Sapporo Bankei</h2>
    <p>
        <strong>Region:</strong> Hokkaido<br>
        <strong>Sub-prefecture:</strong> Ishikari
    </p>
    <p>
        Sapporo Bankei is a convenient ski area
        close to Sapporo city.
    </p>
    <a href="https://www.bankei.co.jp/" target="_blank">
        Learn More
    </a>
`);

allResorts.push(sapporoBankei);


// SAPPORO MOIWA

const sapporoMoiwa = L.marker([43.0155, 141.3284]).addTo(map);

sapporoMoiwa.bindPopup(`
    <h2>Sapporo Mt. Moiwa</h2>
    <p>
        <strong>Region:</strong> Hokkaido<br>
        <strong>Sub-prefecture:</strong> Ishikari
    </p>
    <p>
        Sapporo Mt. Moiwa is a ski area
        located within Sapporo.
    </p>
    <a href="https://www.rinyu.co.jp/moiwa/" target="_blank">
        Learn More
    </a>
`);

allResorts.push(sapporoMoiwa);


// CHUBU
// NAGANO


const japanAdditionalResorts = [

    // NAGANO

    {
        name: "Hakuba 47",
        coordinates: [36.6800, 137.8300],
        region: "Chubu",
        prefecture: "Nagano",
        description: "Hakuba 47 Winter Sports Park is part of the Hakuba Valley.",
        link: "https://www.hakuba47.co.jp/"
    },

    {
        name: "Hakuba Cortina",
        coordinates: [36.7770, 137.8840],
        region: "Chubu",
        prefecture: "Nagano",
        description: "Hakuba Cortina is a ski area in Otari Village in northern Nagano.",
        link: "https://www.hakubacortina.com/"
    },

    {
        name: "Hakuba Goryu",
        coordinates: [36.6650, 137.8320],
        region: "Chubu",
        prefecture: "Nagano",
        description: "Hakuba Goryu is part of the Hakuba Valley ski area.",
        link: "https://www.hakubaescal.com/winter-en/"
    },

    {
        name: "Hakuba Happo One",
        coordinates: [36.7030, 137.8310],
        region: "Chubu",
        prefecture: "Nagano",
        description: "Hakuba Happo One is one of the major ski areas in Hakuba.",
        link: "https://www.happo-one.jp/"
    },

    {
        name: "Hakuba Iwatake",
        coordinates: [36.7200, 137.8580],
        region: "Chubu",
        prefecture: "Nagano",
        description: "Hakuba Iwatake Snow Field is located in Hakuba Village.",
        link: "https://iwatake-mt.com/"
    },

    {
        name: "Hakuba Kashimayari",
        coordinates: [36.6200, 137.8400],
        region: "Chubu",
        prefecture: "Nagano",
        description: "Hakuba Kashimayari is a ski area in the Hakuba region.",
        link: "https://www.kashimayari.net/"
    },

    {
        name: "Hakuba Norikura",
        coordinates: [36.7650, 137.8720],
        region: "Chubu",
        prefecture: "Nagano",
        description: "Hakuba Norikura Onsen is located in Otari Village.",
        link: "https://www.hakubanorikura.jp/"
    },

    {
        name: "Hakuba Sanosaka",
        coordinates: [36.6350, 137.8420],
        region: "Chubu",
        prefecture: "Nagano",
        description: "Hakuba Sanosaka is a ski area in the Hakuba Valley.",
        link: "https://sanosaka.com/"
    },

    {
        name: "Hakuba Tsugaike",
        coordinates: [36.7450, 137.8610],
        region: "Chubu",
        prefecture: "Nagano",
        description: "Tsugaike Mountain Resort is one of the major Hakuba Valley ski areas.",
        link: "https://www.tsugaike.gr.jp/"
    },

    {
        name: "Iizuna",
        coordinates: [36.7000, 138.1400],
        region: "Chubu",
        prefecture: "Nagano",
        description: "Iizuna is a ski area north of Nagano City.",
        link: "https://www.snownavi.co.jp/"
    },

    {
        name: "Karuizawa",
        coordinates: [36.3450, 138.6350],
        region: "Chubu",
        prefecture: "Nagano",
        description: "Karuizawa offers skiing close to Tokyo and central Japan.",
        link: "https://www.princehotels.co.jp/ski/karuizawa/"
    },

    {
        name: "Kijimadaira",
        coordinates: [36.8500, 138.4050],
        region: "Chubu",
        prefecture: "Nagano",
        description: "Kijimadaira is a ski area in northern Nagano.",
        link: "https://www.kijimadaira-ski.com/"
    },

    {
        name: "Kurohime",
        coordinates: [36.8100, 138.1700],
        region: "Chubu",
        prefecture: "Nagano",
        description: "Kurohime is a ski destination in northern Nagano.",
        link: "https://kurohime-kogen.co.jp/"
    },

    {
        name: "Madarao",
        coordinates: [36.8500, 138.2900],
        region: "Chubu",
        prefecture: "Nagano",
        description: "Madarao is known for its tree skiing and powder snow.",
        link: "https://www.madarao.jp/en/"
    },

    {
        name: "Mt Norikura",
        coordinates: [36.1200, 137.6000],
        region: "Chubu",
        prefecture: "Nagano",
        description: "Mt Norikura is an alpine ski destination in Nagano.",
        link: "https://www.snownavi.co.jp/"
    },

    {
        name: "Nomugi Toge",
        coordinates: [36.0200, 137.6500],
        region: "Chubu",
        prefecture: "Nagano",
        description: "Nomugi Toge is a small ski destination in the mountains of Nagano.",
        link: "https://www.snownavi.co.jp/"
    },

    {
        name: "Nozawa Onsen",
        coordinates: [36.9200, 138.4400],
        region: "Chubu",
        prefecture: "Nagano",
        description: "Nozawa Onsen is a major ski and hot-spring destination.",
        link: "https://www.nozawaski.com/"
    },

    {
        name: "Ryuoo",
        coordinates: [36.7800, 138.4500],
        region: "Chubu",
        prefecture: "Nagano",
        description: "Ryuoo Ski Park is located in northern Nagano.",
        link: "https://ryuoo.com/"
    },

    {
        name: "Shiga Kogen",
        coordinates: [36.7300, 138.5200],
        region: "Chubu",
        prefecture: "Nagano",
        description: "Shiga Kogen is a large interconnected ski region.",
        link: "https://www.shigakogen.gr.jp/"
    },

    {
        name: "Kumanoyu",
        coordinates: [36.7000, 138.5100],
        region: "Chubu",
        prefecture: "Nagano",
        description: "Kumanoyu is one of the ski areas within Shiga Kogen.",
        link: "https://www.shigakogen.gr.jp/"
    },

    {
        name: "Okushiga Kogen",
        coordinates: [36.7600, 138.5700],
        region: "Chubu",
        prefecture: "Nagano",
        description: "Okushiga Kogen is a ski area in the Shiga Kogen region.",
        link: "https://www.shigakogen.gr.jp/"
    },

    {
        name: "Yakebitaiyama",
        coordinates: [36.7350, 138.5400],
        region: "Chubu",
        prefecture: "Nagano",
        description: "Yakebitaiyama is a major ski area within Shiga Kogen.",
        link: "https://www.shigakogen.gr.jp/"
    },

    {
        name: "Yokoteyama",
        coordinates: [36.6700, 138.4900],
        region: "Chubu",
        prefecture: "Nagano",
        description: "Yokoteyama is one of the highest ski areas in Japan.",
        link: "https://www.shigakogen.gr.jp/"
    },

    {
        name: "Sugadaira",
        coordinates: [36.5300, 138.3700],
        region: "Chubu",
        prefecture: "Nagano",
        description: "Sugadaira is a large ski area in eastern Nagano.",
        link: "https://sugadaira-snowresort.com/"
    },

    {
        name: "Tangram",
        coordinates: [36.8500, 138.2800],
        region: "Chubu",
        prefecture: "Nagano",
        description: "Tangram Ski Circus is located near Madarao.",
        link: "https://www.tangram.jp/"
    },

    {
        name: "Togakushi",
        coordinates: [36.7500, 138.0700],
        region: "Chubu",
        prefecture: "Nagano",
        description: "Togakushi is a ski area near Nagano City.",
        link: "https://www.togakusi.com/"
    },

    {
        name: "Togari Onsen",
        coordinates: [36.9500, 138.4200],
        region: "Chubu",
        prefecture: "Nagano",
        description: "Togari Onsen is a traditional ski and hot-spring destination.",
        link: "https://www.togarionsen.jp/"
    },


    // NIIGATA

    {
        name: "Arai",
        coordinates: [36.9900, 138.1600],
        region: "Chubu",
        prefecture: "Niigata",
        description: "Arai is a major powder skiing destination in Niigata.",
        link: "https://www.lottehotel.com/arai-resort/en.html"
    },

    {
        name: "Charmant Hiuchi",
        coordinates: [37.0000, 138.0500],
        region: "Chubu",
        prefecture: "Niigata",
        description: "Charmant Hiuchi is known for heavy snowfall and powder skiing.",
        link: "https://charmant-hiuchi.jp/"
    },

    {
        name: "Cupid Valley",
        coordinates: [37.0800, 138.4700],
        region: "Chubu",
        prefecture: "Niigata",
        description: "Cupid Valley is a ski area in Niigata.",
        link: "https://www.yukidaruma-kogen.com/"
    },

    {
        name: "Gala Yuzawa",
        coordinates: [36.9500, 138.8100],
        region: "Chubu",
        prefecture: "Niigata",
        description: "Gala Yuzawa is a convenient ski resort directly connected to the Shinkansen.",
        link: "https://gala.co.jp/winter/"
    },

    {
        name: "Ishiuchi Maruyama",
        coordinates: [36.9700, 138.8000],
        region: "Chubu",
        prefecture: "Niigata",
        description: "Ishiuchi Maruyama is a major ski area near Yuzawa.",
        link: "https://ishiuchi.or.jp/"
    },

    {
        name: "Iwappara",
        coordinates: [36.9200, 138.8500],
        region: "Chubu",
        prefecture: "Niigata",
        description: "Iwappara is a ski resort near Yuzawa.",
        link: "https://www.iwa-ppara.com/"
    },

    {
        name: "Joetsu Kokusai",
        coordinates: [37.0000, 138.8500],
        region: "Chubu",
        prefecture: "Niigata",
        description: "Joetsu Kokusai is a large ski resort in Niigata.",
        link: "https://www.jkokusai.co.jp/"
    },

    {
        name: "Kagura",
        coordinates: [36.8900, 138.7700],
        region: "Chubu",
        prefecture: "Niigata",
        description: "Kagura is part of the Naeba ski region.",
        link: "https://www.princehotels.co.jp/ski/kagura/"
    },

    {
        name: "Kandatsu Kogen",
        coordinates: [36.9200, 138.8000],
        region: "Chubu",
        prefecture: "Niigata",
        description: "Kandatsu Kogen is a ski resort near Yuzawa.",
        link: "https://www.kandatsu.com/"
    },

    {
        name: "Maiko",
        coordinates: [36.9800, 138.8200],
        region: "Chubu",
        prefecture: "Niigata",
        description: "Maiko Snow Resort is located near Minamiuonuma.",
        link: "https://www.maiko-resort.com/"
    },

    {
        name: "Muikamachi Hakkaisan",
        coordinates: [37.0800, 139.0200],
        region: "Chubu",
        prefecture: "Niigata",
        description: "Hakkaisan is known for powder snow and steep terrain.",
        link: "https://www.princehotels.co.jp/ski/hakkaisan/"
    },

    {
        name: "Myoko Akakura",
        coordinates: [36.8900, 138.1700],
        region: "Chubu",
        prefecture: "Niigata",
        description: "Akakura is one of the major ski areas in Myoko.",
        link: "https://www.myoko.tv/"
    },

    {
        name: "Myoko Ikenotaira",
        coordinates: [36.8700, 138.1800],
        region: "Chubu",
        prefecture: "Niigata",
        description: "Ikenotaira is part of the Myoko ski region.",
        link: "https://www.myoko.tv/"
    },

    {
        name: "Myoko Seki Onsen",
        coordinates: [36.8900, 138.1400],
        region: "Chubu",
        prefecture: "Niigata",
        description: "Seki Onsen is a traditional powder ski area.",
        link: "https://www.myoko.tv/"
    },

    {
        name: "Myoko Suginohara",
        coordinates: [36.8500, 138.1400],
        region: "Chubu",
        prefecture: "Niigata",
        description: "Suginohara is a major Myoko ski area.",
        link: "https://www.princehotels.co.jp/ski/myoko/"
    },

    {
        name: "Naeba",
        coordinates: [36.7900, 138.7900],
        region: "Chubu",
        prefecture: "Niigata",
        description: "Naeba is a major ski resort in Niigata.",
        link: "https://www.princehotels.co.jp/ski/naeba/"
    },

    {
        name: "Okutadami Maruyama",
        coordinates: [37.1500, 139.2300],
        region: "Chubu",
        prefecture: "Niigata",
        description: "Okutadami Maruyama is a remote ski area known for heavy snowfall.",
        link: "https://okutadami.co.jp/"
    },

    {
        name: "Yuzawa Kogen",
        coordinates: [36.9400, 138.8100],
        region: "Chubu",
        prefecture: "Niigata",
        description: "Yuzawa Kogen is located close to central Yuzawa.",
        link: "https://www.yuzawakogen.com/"
    },

    {
        name: "Yuzawa Nakazato",
        coordinates: [36.9200, 138.8500],
        region: "Chubu",
        prefecture: "Niigata",
        description: "Yuzawa Nakazato is a ski resort in Yuzawa.",
        link: "https://www.yuzawa-nakazato.com/"
    },


    // GIFU

    {
        name: "Dynaland",
        coordinates: [35.9400, 136.8500],
        region: "Chubu",
        prefecture: "Gifu",
        description: "Dynaland is a major ski resort in Gifu.",
        link: "https://www.dynaland.co.jp/"
    },

    {
        name: "Hirayu Onsen",
        coordinates: [36.1900, 137.5500],
        region: "Chubu",
        prefecture: "Gifu",
        description: "Hirayu Onsen is an alpine destination in the Japanese Alps.",
        link: "https://www.hirayuonsen.or.jp/"
    },

    {
        name: "Honoki Daira",
        coordinates: [36.1700, 137.5300],
        region: "Chubu",
        prefecture: "Gifu",
        description: "Honoki Daira is a ski area in Gifu.",
        link: "https://www.snownavi.co.jp/"
    },

    {
        name: "Takasu",
        coordinates: [35.9700, 136.8700],
        region: "Chubu",
        prefecture: "Gifu",
        description: "Takasu is a ski area in the Gujo region.",
        link: "https://www.takasu.gr.jp/"
    },


    // ISHIKAWA

    {
        name: "Ichirino Onsen",
        coordinates: [36.1500, 136.7000],
        region: "Chubu",
        prefecture: "Ishikawa",
        description: "Ichirino Onsen is a ski area near Hakusan.",
        link: "https://ichirino.jp/"
    },

    {
        name: "Hakusan Seymour",
        coordinates: [36.4300, 136.7000],
        region: "Chubu",
        prefecture: "Ishikawa",
        description: "Hakusan Seymour is a ski area near Kanazawa.",
        link: "https://www.seymour.co.jp/"
    },


    // FUKUI

    {
        name: "Ski Jam Katsuyama",
        coordinates: [36.0600, 136.5800],
        region: "Chubu",
        prefecture: "Fukui",
        description: "Ski Jam Katsuyama is a major ski area in Fukui.",
        link: "https://www.ski-jam.jp/"
    },


    // KANTO
    // GUNMA


    {
        name: "Kusatsu Onsen",
        coordinates: [36.6200, 138.6000],
        region: "Kanto",
        prefecture: "Gunma",
        description: "Kusatsu Onsen is a famous hot-spring and ski destination.",
        link: "https://www.kusatsu-kokusai.com/"
    },

    {
        name: "Kawaba",
        coordinates: [36.7200, 139.1000],
        region: "Kanto",
        prefecture: "Gunma",
        description: "Kawaba is a ski resort in Gunma.",
        link: "https://www.kawaba.co.jp/"
    },

    {
        name: "Manza Onsen",
        coordinates: [36.6400, 138.5200],
        region: "Kanto",
        prefecture: "Gunma",
        description: "Manza Onsen is an alpine ski and hot-spring destination.",
        link: "https://www.manzaonsen.gr.jp/"
    },

    {
        name: "Marunuma Kogen",
        coordinates: [36.8000, 139.3300],
        region: "Kanto",
        prefecture: "Gunma",
        description: "Marunuma Kogen is a high-altitude ski area in Gunma.",
        link: "https://www.marunuma.jp/"
    },

    {
        name: "Minakami Houdaigi",
        coordinates: [36.8000, 138.9800],
        region: "Kanto",
        prefecture: "Gunma",
        description: "Minakami Houdaigi is a ski area in the Minakami region.",
        link: "https://www.hodaigi.jp/"
    },

    {
        name: "Oguna Hotaka",
        coordinates: [36.7600, 139.1900],
        region: "Kanto",
        prefecture: "Gunma",
        description: "Oguna Hotaka is a ski resort in Gunma.",
        link: "https://www.ogna.jp/"
    },

    {
        name: "Oze Iwakura",
        coordinates: [36.8300, 139.2700],
        region: "Kanto",
        prefecture: "Gunma",
        description: "Oze Iwakura is a ski resort in Gunma.",
        link: "https://www.oze-iwakura.co.jp/"
    },

    {
        name: "Oze Tokura",
        coordinates: [36.8500, 139.2600],
        region: "Kanto",
        prefecture: "Gunma",
        description: "Oze Tokura is a ski area in the Oze region.",
        link: "https://www.oze-tokura.co.jp/"
    },

    {
        name: "Palcall Tsumagoi",
        coordinates: [36.4500, 138.5000],
        region: "Kanto",
        prefecture: "Gunma",
        description: "Palcall Tsumagoi is a ski resort in Gunma.",
        link: "https://www.palcall.co.jp/"
    },

    {
        name: "Tenjindaira",
        coordinates: [36.8200, 138.9300],
        region: "Kanto",
        prefecture: "Gunma",
        description: "Tenjindaira is a backcountry-oriented ski area near Minakami.",
        link: "https://www.enjoy-minakami.jp/"
    },

    {
        name: "White Valley",
        coordinates: [36.7800, 138.9300],
        region: "Kanto",
        prefecture: "Gunma",
        description: "White Valley is a ski area near Minakami.",
        link: "https://www.enjoy-minakami.jp/"
    },


    // TOHOKU
    // AKITA

    {
        name: "Ani",
        coordinates: [39.9500, 140.5300],
        region: "Tohoku",
        prefecture: "Akita",
        description: "Ani is a ski area in northern Akita.",
        link: "https://www.aniski.jp/"
    },

    {
        name: "Akita Hachimantai",
        coordinates: [39.9900, 140.7500],
        region: "Tohoku",
        prefecture: "Akita",
        description: "Akita Hachimantai is an alpine ski destination.",
        link: "https://www.snownavi.co.jp/"
    },

    {
        name: "Hanawa",
        coordinates: [40.1800, 140.7800],
        region: "Tohoku",
        prefecture: "Akita",
        description: "Hanawa is a local ski area in Akita.",
        link: "https://www.snowjapan.com/"
    },

    {
        name: "Jeunesse Kurikoma",
        coordinates: [39.1000, 140.7000],
        region: "Tohoku",
        prefecture: "Akita",
        description: "Jeunesse Kurikoma is a ski area in the Kurikoma region.",
        link: "https://www.snowjapan.com/"
    },

    {
        name: "Suishozan",
        coordinates: [39.7000, 140.2500],
        region: "Tohoku",
        prefecture: "Akita",
        description: "Suishozan is a local ski area in Akita.",
        link: "https://www.snowjapan.com/"
    },

    {
        name: "Tazawako",
        coordinates: [39.7600, 140.7300],
        region: "Tohoku",
        prefecture: "Akita",
        description: "Tazawako is a major ski destination overlooking Lake Tazawa.",
        link: "https://www.tazawako-ski.com/"
    },

    {
        name: "Tengamori",
        coordinates: [39.8000, 140.7000],
        region: "Tohoku",
        prefecture: "Akita",
        description: "Tengamori is a ski area in Akita.",
        link: "https://www.snowjapan.com/"
    },


    // AOMORI

    {
        name: "Aomori Spring",
        coordinates: [40.7000, 140.2000],
        region: "Tohoku",
        prefecture: "Aomori",
        description: "Aomori Spring is a ski resort in northern Japan.",
        link: "https://www.aomorispring.com/"
    },

    {
        name: "Hakkoda",
        coordinates: [40.6600, 140.8500],
        region: "Tohoku",
        prefecture: "Aomori",
        description: "Hakkoda is famous for deep snow and backcountry skiing.",
        link: "https://www.hakkoda-ropeway.jp/"
    },

    {
        name: "Iwaki Hyakuzawa",
        coordinates: [40.6200, 140.3500],
        region: "Tohoku",
        prefecture: "Aomori",
        description: "Iwaki Hyakuzawa is a ski area near Mount Iwaki.",
        link: "https://www.snowjapan.com/"
    },

    {
        name: "Owani Onsen",
        coordinates: [40.5200, 140.5700],
        region: "Tohoku",
        prefecture: "Aomori",
        description: "Owani Onsen is a ski and hot-spring destination.",
        link: "https://www.snowjapan.com/"
    },


    // FUKUSHIMA

    {
        name: "Adatara Kogen",
        coordinates: [37.6300, 140.3200],
        region: "Tohoku",
        prefecture: "Fukushima",
        description: "Adatara Kogen is a ski area in Fukushima.",
        link: "https://www.snowjapan.com/"
    },

    {
        name: "Alts Bandai",
        coordinates: [37.6000, 140.0000],
        region: "Tohoku",
        prefecture: "Fukushima",
        description: "Alts Bandai is a major ski resort in Fukushima.",
        link: "https://www.alts.co.jp/"
    },

    {
        name: "Grandeco",
        coordinates: [37.7000, 140.1300],
        region: "Tohoku",
        prefecture: "Fukushima",
        description: "Grandeco is a ski resort in the Bandai region.",
        link: "https://www.grandeco.com/"
    },

    {
        name: "Inawashiro",
        coordinates: [37.5800, 140.0800],
        region: "Tohoku",
        prefecture: "Fukushima",
        description: "Inawashiro is a ski resort overlooking Lake Inawashiro.",
        link: "https://www.inawashiro-ski.com/"
    },

    {
        name: "Minowa",
        coordinates: [37.6500, 140.2500],
        region: "Tohoku",
        prefecture: "Fukushima",
        description: "Minowa is a ski resort in Fukushima.",
        link: "https://www.snowjapan.com/"
    },

    {
        name: "Nekoma",
        coordinates: [37.6300, 140.0800],
        region: "Tohoku",
        prefecture: "Fukushima",
        description: "Nekoma is a major ski area around Mount Bandai.",
        link: "https://www.nekoma.co.jp/"
    },

    {
        name: "Takatsue",
        coordinates: [37.1500, 139.6000],
        region: "Tohoku",
        prefecture: "Fukushima",
        description: "Takatsue is a ski area in southern Fukushima.",
        link: "https://www.snowjapan.com/"
    },


    // IWATE

    {
        name: "Appi",
        coordinates: [40.0000, 140.9700],
        region: "Tohoku",
        prefecture: "Iwate",
        description: "Appi Kogen is a major ski resort in Iwate.",
        link: "https://www.appi.co.jp/"
    },

    {
        name: "Geto Kogen",
        coordinates: [39.2700, 140.8800],
        region: "Tohoku",
        prefecture: "Iwate",
        description: "Geto Kogen is known for deep powder snow.",
        link: "https://www.getokogen.co.jp/"
    },

    {
        name: "Panorama",
        coordinates: [39.8500, 140.8500],
        region: "Tohoku",
        prefecture: "Iwate",
        description: "Hachimantai Panorama is a ski area in Iwate.",
        link: "https://www.snowjapan.com/"
    },

    {
        name: "Shimokura",
        coordinates: [39.8700, 140.8800],
        region: "Tohoku",
        prefecture: "Iwate",
        description: "Shimokura is a ski area in Hachimantai.",
        link: "https://www.snowjapan.com/"
    },

    {
        name: "Iwate Kogen",
        coordinates: [39.8500, 140.9500],
        region: "Tohoku",
        prefecture: "Iwate",
        description: "Iwate Kogen is a ski resort near Mount Iwate.",
        link: "https://www.snowjapan.com/"
    },

    {
        name: "Okunakayama",
        coordinates: [40.1000, 141.2000],
        region: "Tohoku",
        prefecture: "Iwate",
        description: "Okunakayama is a ski area in northern Iwate.",
        link: "https://www.snowjapan.com/"
    },

    {
        name: "Shizukuishi",
        coordinates: [39.7500, 140.9500],
        region: "Tohoku",
        prefecture: "Iwate",
        description: "Shizukuishi is a ski resort near Mount Iwate.",
        link: "https://www.princehotels.co.jp/ski/shizukuishi/"
    },

    {
        name: "Hiraniwa Kogen",
        coordinates: [40.0800, 141.2500],
        region: "Tohoku",
        prefecture: "Iwate",
        description: "Hiraniwa Kogen is a local ski area in Iwate.",
        link: "https://www.snowjapan.com/"
    },

    {
        name: "Tayama",
        coordinates: [39.9500, 140.9800],
        region: "Tohoku",
        prefecture: "Iwate",
        description: "Tayama is a ski area in the Hachimantai region.",
        link: "https://www.snowjapan.com/"
    },


    // YAMAGATA

    {
        name: "Gassan",
        coordinates: [38.5500, 140.0200],
        region: "Tohoku",
        prefecture: "Yamagata",
        description: "Gassan is famous for its unusual late-season skiing.",
        link: "https://www.gassan-ski.com/"
    },

    {
        name: "Asahi Shizenkan",
        coordinates: [38.3800, 140.1000],
        region: "Tohoku",
        prefecture: "Yamagata",
        description: "Asahi Shizenkan is a ski area in Yamagata.",
        link: "https://www.snowjapan.com/"
    },

    {
        name: "Jangle Jungle",
        coordinates: [38.4700, 140.4500],
        region: "Tohoku",
        prefecture: "Yamagata",
        description: "Jangle Jungle is a ski area in Yamagata.",
        link: "https://www.snowjapan.com/"
    },

    {
        name: "Tengendai Kogen",
        coordinates: [37.8000, 140.1000],
        region: "Tohoku",
        prefecture: "Yamagata",
        description: "Tengendai Kogen is an alpine ski area in Yamagata.",
        link: "https://www.snowjapan.com/"
    },

    {
        name: "Yudonosan",
        coordinates: [38.5500, 139.9700],
        region: "Tohoku",
        prefecture: "Yamagata",
        description: "Yudonosan is a mountain ski destination.",
        link: "https://www.snowjapan.com/"
    },

    {
        name: "Zao Onsen",
        coordinates: [38.1700, 140.4000],
        region: "Tohoku",
        prefecture: "Yamagata",
        description: "Zao Onsen is one of Japan's best-known ski and hot-spring destinations.",
        link: "https://www.zao-spa.or.jp/"
    },


    // MIYAGI

    {
        name: "Akakura",
        coordinates: [38.0500, 140.7000],
        region: "Tohoku",
        prefecture: "Miyagi",
        description: "Akakura is a local ski area in Miyagi.",
        link: "https://www.snowjapan.com/"
    },

    {
        name: "Eboshi",
        coordinates: [38.1300, 140.5200],
        region: "Tohoku",
        prefecture: "Miyagi",
        description: "Eboshi is a ski resort in Miyagi.",
        link: "https://www.eboshi.co.jp/"
    },

    {
        name: "Onikoube",
        coordinates: [38.8200, 140.6000],
        region: "Tohoku",
        prefecture: "Miyagi",
        description: "Onikoube is a ski area in northern Miyagi.",
        link: "https://www.onikoube.com/"
    },

    {
        name: "Sumikawa",
        coordinates: [38.1200, 140.4700],
        region: "Tohoku",
        prefecture: "Miyagi",
        description: "Sumikawa Snow Park is located in the Zao mountains.",
        link: "https://www.sumikawa.jp/"
    },


    // KANSAI

    {
        name: "Biwako Valley",
        coordinates: [35.2300, 135.8500],
        region: "Kansai",
        prefecture: "Shiga",
        description: "Biwako Valley is a mountain resort overlooking Lake Biwa.",
        link: "https://www.biwako-valley.com/"
    },

    {
        name: "Gransnow Okuibuki",
        coordinates: [35.5000, 136.3800],
        region: "Kansai",
        prefecture: "Shiga",
        description: "Gransnow Okuibuki is a ski resort in Shiga.",
        link: "https://www.okuibuki.co.jp/"
    }

];


// ADD ALL ADDITIONAL JAPAN RESORTS TO MAP


japanAdditionalResorts.forEach(function(resortData) {

    const resort = L.marker(resortData.coordinates).addTo(map);

    resort.bindPopup(`
        <h2>${resortData.name}</h2>

        <p>
            <strong>Region:</strong> ${resortData.region}<br>
            <strong>Prefecture:</strong> ${resortData.prefecture}
        </p>

        <p>
            ${resortData.description}
        </p>

        <a href="${resortData.link}" target="_blank">
            Learn More
        </a>
    `);

    allResorts.push(resort);

});
//#endregion

//#region AUSTRALIA


// NSW


// PERISHER

const perisher = L.marker([-36.4000, 148.4100]).addTo(map);

perisher.bindPopup(`
    <h2>Perisher</h2>
    <img src="Images/perisher.jpg" alt="Perisher ski resort">
    <p>
        Perisher is Australia's largest ski resort
        and is located in the Snowy Mountains.
    </p>
    <a href="https://www.perisher.com.au/" target="_blank">
        Learn More
    </a>
`);

allResorts.push(perisher);
popularResorts.push(perisher);


// THREDBO

const thredbo = L.marker([-36.5048, 148.3057]).addTo(map);

thredbo.bindPopup(`
    <h2>Thredbo</h2>
    <img src="Images/thredbo.jpg" alt="Thredbo ski resort">
    <p>
        Thredbo is one of Australia's most popular
        alpine resorts and offers skiing and snowboarding.
    </p>
    <a href="https://www.thredbo.com.au/" target="_blank">
        Learn More
    </a>
`);

allResorts.push(thredbo);
popularResorts.push(thredbo);


// CHARLOTTE PASS

const charlottePass = L.marker([-36.4331, 148.3306]).addTo(map);

charlottePass.bindPopup(`
    <h2>Charlotte Pass</h2>
    <img src="Images/charlottepass.jpg" alt="Charlotte Pass ski resort">
    <p>
        Charlotte Pass is Australia's highest ski
        resort and is accessible during winter by snow transport.
    </p>
    <a href="https://www.charlottepass.com.au/" target="_blank">
        Learn More
    </a>
`);

allResorts.push(charlottePass);


// SELWYN SNOWFIELDS

const selwyn = L.marker([-35.9089, 148.4521]).addTo(map);

selwyn.bindPopup(`
    <h2>Selwyn Snowfields</h2>
    <img src="Images/selwyn.jpg" alt="Selwyn Snowfields">
    <p>
        Selwyn Snowfields is a family-friendly
        ski resort located in the Snowy Mountains.
    </p>
    <a href="https://www.selwynsnow.com.au/" target="_blank">
        Learn More
    </a>
`);

allResorts.push(selwyn);


// VIC


// MT BULLER

const mtBuller = L.marker([-37.1450, 146.4394]).addTo(map);

mtBuller.bindPopup(`
    <h2>Mt Buller</h2>
    <img src="Images/mtbuller.jpg" alt="Mt Buller ski resort">
    <p>
        Mt Buller is one of Australia's most popular
        ski resorts and is located close to Melbourne.
    </p>
    <a href="https://www.mtbuller.com.au/" target="_blank">
        Learn More
    </a>
`);

allResorts.push(mtBuller);
popularResorts.push(mtBuller);


// MT HOTHAM

const mtHotham = L.marker([-36.9772, 147.1342]).addTo(map);

mtHotham.bindPopup(`
    <h2>Mt Hotham</h2>
    <img src="Images/mthotham.jpg" alt="Mt Hotham ski resort">
    <p>
        Mt Hotham is known for its challenging terrain
        and spectacular alpine views.
    </p>
    <a href="https://www.mthotham.com.au/" target="_blank">
        Learn More
    </a>
`);

allResorts.push(mtHotham);
popularResorts.push(mtHotham);


// MT BAW BAW

const mtBawBaw = L.marker([-37.8400, 146.2636]).addTo(map);

mtBawBaw.bindPopup(`
    <h2>Mt Baw Baw</h2>
    <img src="Images/mtbawbaw.jpg" alt="Mt Baw Baw ski resort">
    <p>
        Mt Baw Baw is a smaller alpine resort
        located in Victoria.
    </p>
    <a href="https://mountbawbaw.com.au/" target="_blank">
        Learn More
    </a>
`);

allResorts.push(mtBawBaw);


// MT STIRLING

const mtStirling = L.marker([-37.1310, 146.4835]).addTo(map);

mtStirling.bindPopup(`
    <h2>Mt Stirling</h2>
    <img src="Images/mtstirling.jpg" alt="Mt Stirling">
    <p>
        Mt Stirling is known for cross-country skiing,
        backcountry adventures and snow activities.
    </p>
    <a href="https://www.mtstirling.com.au/" target="_blank">
        Learn More
    </a>
`);

allResorts.push(mtStirling);


// FALLS CREEK

const fallsCreek = L.marker([-36.8708, 147.2755]).addTo(map);

fallsCreek.bindPopup(`
    <h2>Falls Creek</h2>
    <img src="Images/fallscreek.jpg" alt="Falls Creek ski resort">
    <p>
        Falls Creek is a popular alpine resort
        offering skiing and snowboarding.
    </p>
    <a href="https://www.fallscreek.com.au/" target="_blank">
        Learn More
    </a>
`);

allResorts.push(fallsCreek);
popularResorts.push(fallsCreek);


// ACT


// CORIN FOREST

const corinForest = L.marker([-35.5153, 148.9214]).addTo(map);

corinForest.bindPopup(`
    <h2>Corin Forest</h2>
    <img src="Images/corinforest.jpg" alt="Corin Forest">
    <p>
        Corin Forest is located near Canberra
        and offers snow activities during winter.
    </p>
    <a href="https://www.corin.com.au/" target="_blank">
        Learn More
    </a>
`);

allResorts.push(corinForest);


// TAS


// BEN LOMOND

const benLomond = L.marker([-41.5670, 147.6670]).addTo(map);

benLomond.bindPopup(`
    <h2>Ben Lomond</h2>
    <img src="Images/benlomond.jpg" alt="Ben Lomond ski resort">
    <p>
        Ben Lomond is Tasmania's main alpine
        skiing destination.
    </p>
    <a href="https://www.benlomondskiclub.com/" target="_blank">
        Learn More
    </a>
`);

allResorts.push(benLomond);

//#endregion

//#region NEW ZEALAND


// CORONET PEAK

const coronetPeak = L.marker([-44.9226, 168.7379]).addTo(map);

coronetPeak.bindPopup(`
    <h2>Coronet Peak</h2>
    <img src="Images/coronetpeak.jpg" alt="Coronet Peak ski resort">
    <p>
        Coronet Peak is one of New Zealand's
        most popular ski resorts near Queenstown.
    </p>
    <a href="https://www.coronetpeak.co.nz/" target="_blank">
        Learn More
    </a>
`);

allResorts.push(coronetPeak);
popularResorts.push(coronetPeak);


// THE REMARKABLES

const theRemarkables = L.marker([-45.0547, 168.8151]).addTo(map);

theRemarkables.bindPopup(`
    <h2>The Remarkables</h2>
    <img src="Images/remarkables.jpg" alt="The Remarkables ski resort">
    <p>
        The Remarkables offers a range of terrain
        overlooking Queenstown.
    </p>
    <a href="https://www.theremarkables.co.nz/" target="_blank">
        Learn More
    </a>
`);

allResorts.push(theRemarkables);
popularResorts.push(theRemarkables);


// CARDRONA

const cardrona = L.marker([-44.8657, 168.9457]).addTo(map);

cardrona.bindPopup(`
    <h2>Cardrona</h2>
    <img src="Images/cardrona.jpg" alt="Cardrona ski resort">
    <p>
        Cardrona is a popular New Zealand resort
        known for skiing, snowboarding and terrain parks.
    </p>
    <a href="https://www.cardrona.com/" target="_blank">
        Learn More
    </a>
`);

allResorts.push(cardrona);
popularResorts.push(cardrona);


// TREBLE CONE

const trebleCone = L.marker([-44.6324, 168.8728]).addTo(map);

trebleCone.bindPopup(`
    <h2>Treble Cone</h2>
    <img src="Images/treblecone.jpg" alt="Treble Cone ski resort">
    <p>
        Treble Cone is located near Wanaka
        and is known for its views and challenging terrain.
    </p>
    <a href="https://www.treblecone.com/" target="_blank">
        Learn More
    </a>
`);

allResorts.push(trebleCone);
popularResorts.push(trebleCone);


// OHAU

const ohau = L.marker([-44.2204, 169.7741]).addTo(map);

ohau.bindPopup(`
    <h2>Ohau</h2>
    <img src="Images/ohau.jpg" alt="Ohau ski resort">
    <p>
        Ohau is a small alpine ski area located
        in New Zealand's South Island.
    </p>
    <a href="https://www.ohau.co.nz/" target="_blank">
        Learn More
    </a>
`);

allResorts.push(ohau);


// MT DOBSON

const mtDobson = L.marker([-43.9388, 170.6653]).addTo(map);

mtDobson.bindPopup(`
    <h2>Mt Dobson</h2>
    <img src="Images/mtdobson.jpg" alt="Mt Dobson ski resort">
    <p>
        Mt Dobson is located in the South Island
        and offers skiing and snowboarding.
    </p>
    <a href="https://www.mtdobson.co.nz/" target="_blank">
        Learn More
    </a>
`);

allResorts.push(mtDobson);


// MT HUTT

const mtHutt = L.marker([-43.4919, 171.5364]).addTo(map);

mtHutt.bindPopup(`
    <h2>Mt Hutt</h2>
    <img src="Images/mthutt.jpg" alt="Mt Hutt ski resort">
    <p>
        Mt Hutt is one of New Zealand's largest
        ski areas and is located near Christchurch.
    </p>
    <a href="https://www.mthutt.co.nz/" target="_blank">
        Learn More
    </a>
`);

allResorts.push(mtHutt);
popularResorts.push(mtHutt);


// WHAKAPAPA

const whakapapa = L.marker([-39.2484, 175.5601]).addTo(map);

whakapapa.bindPopup(`
    <h2>Whakapapa</h2>
    <img src="Images/whakapapa.jpg" alt="Whakapapa ski resort">
    <p>
        Whakapapa is located on Mount Ruapehu
        in New Zealand's North Island.
    </p>
    <a href="https://www.whakapapa.co.nz/" target="_blank">
        Learn More
    </a>
`);

allResorts.push(whakapapa);
popularResorts.push(whakapapa);


// TUROA

const turoa = L.marker([-39.2999, 175.5402]).addTo(map);

turoa.bindPopup(`
    <h2>Turoa</h2>
    <img src="Images/turoa.jpg" alt="Turoa ski resort">
    <p>
        Turoa is another ski area located
        on Mount Ruapehu.
    </p>
    <a href="https://www.turoa.co.nz/" target="_blank">
        Learn More
    </a>
`);

allResorts.push(turoa);
popularResorts.push(turoa);


// MT LYFORD

const mtLyford = L.marker([-42.4429, 173.1484]).addTo(map);

mtLyford.bindPopup(`
    <h2>Mt Lyford</h2>
    <img src="Images/mtlyford.jpg" alt="Mt Lyford ski resort">
    <p>
        Mt Lyford is a small ski area located
        in Canterbury.
    </p>
    <a href="https://www.mtlyford.co.nz/" target="_blank">
        Learn More
    </a>
`);

allResorts.push(mtLyford);


// BROKEN RIVER

const brokenRiver = L.marker([-43.1214, 171.6826]).addTo(map);

brokenRiver.bindPopup(`
    <h2>Broken River</h2>
    <img src="Images/brokenriver.jpg" alt="Broken River ski resort">
    <p>
        Broken River is a club-style ski area
        located in Canterbury.
    </p>
    <a href="https://brokenriver.co.nz/" target="_blank">
        Learn More
    </a>
`);

allResorts.push(brokenRiver);


// SNOW FARM

const snowFarm = L.marker([-44.2200, 169.0500]).addTo(map);

snowFarm.bindPopup(`
    <h2>Snow Farm</h2>
    <img src="Images/snowfarm.jpg" alt="Snow Farm">
    <p>
        Snow Farm is a cross-country skiing
        and snow sports destination near Wanaka.
    </p>
    <a href="https://www.snowfarmnz.com/" target="_blank">
        Learn More
    </a>
`);

allResorts.push(snowFarm);


// PORTERS

const porters = L.marker([-43.2715, 171.6343]).addTo(map);

porters.bindPopup(`
    <h2>Porters</h2>
    <img src="Images/porters.jpg" alt="Porters ski resort">
    <p>
        Porters is a ski area located near
        Christchurch in New Zealand.
    </p>
    <a href="https://www.portersalpineresort.com/" target="_blank">
        Learn More
    </a>
`);

allResorts.push(porters);


// MT CHEESEMAN

const mtCheeseman = L.marker([-43.1553, 171.6641]).addTo(map);

mtCheeseman.bindPopup(`
    <h2>Mt Cheeseman</h2>
    <img src="Images/mtcheeseman.jpg" alt="Mt Cheeseman ski resort">
    <p>
        Mt Cheeseman is a club ski field
        located in Canterbury.
    </p>
    <a href="https://www.mtcheeseman.co.nz/" target="_blank">
        Learn More
    </a>
`);

allResorts.push(mtCheeseman);


// RESORT FILTER


const popularButton = document.getElementById("popularButton");
const allButton = document.getElementById("allButton");


popularButton.addEventListener("click", function() {

    allResorts.forEach(function(resort) {
        map.removeLayer(resort);
    });

    popularResorts.forEach(function(resort) {
        map.addLayer(resort);
    });

    popularButton.classList.add("active");
    allButton.classList.remove("active");

});


allButton.addEventListener("click", function() {

    allResorts.forEach(function(resort) {
        map.addLayer(resort);
    });

    popularButton.classList.remove("active");
    allButton.classList.add("active");

});

//#endregion



// SHOW POPULAR RESORTS BY DEFAULT


allResorts.forEach(function(resort) {
    map.removeLayer(resort);
});

popularResorts.forEach(function(resort) {
    map.addLayer(resort);
});