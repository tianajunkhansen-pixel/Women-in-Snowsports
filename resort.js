// RESORT ARRAYS

const allResorts = [];
const popularResorts = [];


// CREATE MAP

const map = L.map("map", {
    worldCopyJump: true
}).setView([30, 0], 2);


// MAP BACKGROUND

L.tileLayer(
    "https://basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png?key=cb1_44rs_1_cabc661c03cec727453dfa39",
    {
        maxZoom: 20,
        attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }
).addTo(map);


// RESORT DATA

const resorts = [

    //#region JAPAN
        //#region HOKKAIDO
        {
            name: "Niseko",
            coordinates: [42.8048, 140.6874],
            region: "Hokkaido",
            area: "Shiribeshi",
            description: "Niseko is one of Japan's most famous snowsports destinations.",
            image: "niseko.jpg",
            link: "https://www.niseko.ne.jp/en/",
            popular: true
        },

        {
            name: "Furano",
            coordinates: [43.3420, 142.3830],
            region: "Hokkaido",
            area: "Kamikawa",
            description: "Furano is known for its dry powder snow and beautiful mountain scenery.",
            image: "furano.jpg",
            link: "https://www.furanotourism.com/en/",
            popular: true
        },

        {
            name: "Niseko Moiwa",
            coordinates: [42.8483, 140.6297],
            region: "Hokkaido",
            area: "Shiribeshi",
            description: "Niseko Moiwa is a smaller ski area located near the Niseko region.",
            image: null,
            link: "https://niseko-moiwa.jp/",
            popular: false
        },

        {
            name: "Rusutsu",
            coordinates: [42.7475, 140.8964],
            region: "Hokkaido",
            area: "Shiribeshi",
            description: "Rusutsu is a major Hokkaido ski resort with extensive skiing and snowboarding terrain.",
            link: "https://rusutsu.com/en/"
        },

        {
            name: "Kiroro",
            coordinates: [43.0669, 140.9894],
            region: "Hokkaido",
            area: "Shiribeshi",
            description: "Kiroro is a Hokkaido ski resort known for its deep snowfall and powder skiing.",
            link: "https://www.kiroro.co.jp/en/"
        },

        {
            name: "Tomamu",
            coordinates: [43.0617, 142.6228],
            region: "Hokkaido",
            area: "Kamikawa",
            description: "Hoshino Resorts Tomamu is a large resort destination in central Hokkaido.",
            link: "https://www.snowtomamu.jp/winter/en/"
        },

        {
            name: "Sahoro",
            coordinates: [43.1664, 142.8133],
            region: "Hokkaido",
            area: "Tokachi",
            description: "Sahoro is a ski resort located in eastern central Hokkaido.",
            link: "https://sahoro.co.jp/winter/ski?lang=en"
        },

        {
            name: "Sapporo Teine",
            coordinates: [43.0981, 141.2103],
            region: "Hokkaido",
            area: "Ishikari",
            description: "Sapporo Teine is a ski resort located close to Sapporo city.",
            link: "https://sapporo-teine.com/snow/lang/en/"
        },

        {
            name: "Sapporo Kokusai",
            coordinates: [43.0722, 141.0828],
            region: "Hokkaido",
            area: "Ishikari",
            description: "Sapporo Kokusai is a ski resort located west of Sapporo.",
            link: "https://www.sapporo-kokusai.jp/en/"
        },

        {
            name: "Kamui Ski Links",
            coordinates: [43.7039, 142.1867],
            region: "Hokkaido",
            area: "Kamikawa",
            description: "Kamui Ski Links is located near Asahikawa in central Hokkaido.",
            link: "https://www.kamui-skilinks.com/"
        },

        {
            name: "Asahidake",
            coordinates: [43.6574, 142.8118],
            region: "Hokkaido",
            area: "Kamikawa",
            description: "Asahidake is a high-altitude snow destination in the Daisetsuzan area.",
            link: "https://asahidake.hokkaido.jp/en/"
        },

        {
            name: "Kurodake",
            coordinates: [43.6975, 142.9203],
            region: "Hokkaido",
            area: "Kamikawa",
            description: "Kurodake is a mountain snow destination in the Daisetsuzan area.",
            link: "https://www.rinyu.co.jp/kurodake/en/"
        },

        {
            name: "Sapporo Bankei",
            coordinates: [43.0306, 141.2781],
            region: "Hokkaido",
            area: "Ishikari",
            description: "Sapporo Bankei is a convenient ski area close to Sapporo city.",
            link: "https://www.bankei.co.jp/"
        },

        {
            name: "Sapporo Mt. Moiwa",
            coordinates: [43.0155, 141.3284],
            region: "Hokkaido",
            area: "Ishikari",
            description: "Sapporo Mt. Moiwa is a ski area located within Sapporo.",
            link: "https://www.rinyu.co.jp/moiwa/"
        },
    // #endregion

        //#region NAGANO
        {
            name: "Hakuba",
            coordinates: [36.6983, 137.8319],
            region: "Chubu",
            area: "Nagano",
            description: "Hakuba is a popular Japanese snowsports destination with many resorts and excellent winter conditions.",
            image: "hakuba.jpg",
            link: "https://www.hakubavalley.com/en/",
            popular: true
        },

        {
            name: "Hakuba 47",
            coordinates: [36.6800, 137.8300],
            region: "Chubu",
            area: "Nagano",
            description: "Hakuba 47 Winter Sports Park is part of the Hakuba Valley.",
            link: "https://www.hakuba47.co.jp/"
        },

        {
            name: "Hakuba Cortina",
            coordinates: [36.7770, 137.8840],
            region: "Chubu",
            area: "Nagano",
            description: "Hakuba Cortina is a ski area in Otari Village in northern Nagano.",
            link: "https://www.hakubacortina.com/"
        },

        {
            name: "Hakuba Goryu",
            coordinates: [36.6650, 137.8320],
            region: "Chubu",
            area: "Nagano",
            description: "Hakuba Goryu is part of the Hakuba Valley ski area.",
            link: "https://www.hakubaescal.com/winter-en/"
        },

        {
            name: "Hakuba Happo One",
            coordinates: [36.7030, 137.8310],
            region: "Chubu",
            area: "Nagano",
            description: "Hakuba Happo One is one of the major ski areas in Hakuba.",
            link: "https://www.happo-one.jp/"
        },

        {
            name: "Hakuba Iwatake",
            coordinates: [36.7200, 137.8580],
            region: "Chubu",
            area: "Nagano",
            description: "Hakuba Iwatake Snow Field is located in Hakuba Village.",
            link: "https://iwatake-mt.com/"
        },

        {
            name: "Hakuba Kashimayari",
            coordinates: [36.6200, 137.8400],
            region: "Chubu",
            area: "Nagano",
            description: "Hakuba Kashimayari is a ski area in the Hakuba region.",
            link: "https://www.kashimayari.net/"
        },

        {
            name: "Hakuba Norikura",
            coordinates: [36.7650, 137.8720],
            region: "Chubu",
            area: "Nagano",
            description: "Hakuba Norikura Onsen is located in Otari Village.",
            link: "https://www.hakubanorikura.jp/"
        },

        {
            name: "Hakuba Sanosaka",
            coordinates: [36.6350, 137.8420],
            region: "Chubu",
            area: "Nagano",
            description: "Hakuba Sanosaka is a ski area in the Hakuba Valley.",
            link: "https://sanosaka.com/"
        },

        {
            name: "Hakuba Tsugaike",
            coordinates: [36.7450, 137.8610],
            region: "Chubu",
            area: "Nagano",
            description: "Tsugaike Mountain Resort is one of the major Hakuba Valley ski areas.",
            link: "https://www.tsugaike.gr.jp/"
        },

        {
            name: "Iizuna",
            coordinates: [36.7000, 138.1400],
            region: "Chubu",
            area: "Nagano",
            description: "Iizuna is a ski area north of Nagano City.",
            link: "https://www.snownavi.co.jp/"
        },

        {
            name: "Karuizawa",
            coordinates: [36.3450, 138.6350],
            region: "Chubu",
            area: "Nagano",
            description: "Karuizawa offers skiing close to Tokyo and central Japan.",
            link: "https://www.princehotels.co.jp/ski/karuizawa/"
        },

        {
            name: "Kijimadaira",
            coordinates: [36.8500, 138.4050],
            region: "Chubu",
            area: "Nagano",
            description: "Kijimadaira is a ski area in northern Nagano.",
            link: "https://www.kijimadaira-ski.com/"
        },

        {
            name: "Kurohime",
            coordinates: [36.8100, 138.1700],
            region: "Chubu",
            area: "Nagano",
            description: "Kurohime is a ski destination in northern Nagano.",
            link: "https://kurohime-kogen.co.jp/"
        },

        {
            name: "Madarao",
            coordinates: [36.8500, 138.2900],
            region: "Chubu",
            area: "Nagano",
            description: "Madarao is known for its tree skiing and powder snow.",
            link: "https://www.madarao.jp/en/"
        },

        {
            name: "Mt Norikura",
            coordinates: [36.1200, 137.6000],
            region: "Chubu",
            area: "Nagano",
            description: "Mt Norikura is an alpine ski destination in Nagano.",
            link: "https://www.snownavi.co.jp/"
        },

        {
            name: "Nomugi Toge",
            coordinates: [36.0200, 137.6500],
            region: "Chubu",
            area: "Nagano",
            description: "Nomugi Toge is a small ski destination in the mountains of Nagano.",
            link: "https://www.snownavi.co.jp/"
        },

        {
            name: "Nozawa Onsen",
            coordinates: [36.9200, 138.4400],
            region: "Chubu",
            area: "Nagano",
            description: "Nozawa Onsen is a major ski and hot-spring destination.",
            link: "https://www.nozawaski.com/"
        },

        {
            name: "Ryuoo",
            coordinates: [36.7800, 138.4500],
            region: "Chubu",
            area: "Nagano",
            description: "Ryuoo Ski Park is located in northern Nagano.",
            link: "https://ryuoo.com/"
        },

        {
            name: "Shiga Kogen",
            coordinates: [36.7300, 138.5200],
            region: "Chubu",
            area: "Nagano",
            description: "Shiga Kogen is a large interconnected ski region.",
            link: "https://www.shigakogen.gr.jp/"
        },

        {
            name: "Kumanoyu",
            coordinates: [36.7000, 138.5100],
            region: "Chubu",
            area: "Nagano",
            description: "Kumanoyu is one of the ski areas within Shiga Kogen.",
            link: "https://www.shigakogen.gr.jp/"
        },

        {
            name: "Okushiga Kogen",
            coordinates: [36.7600, 138.5700],
            region: "Chubu",
            area: "Nagano",
            description: "Okushiga Kogen is a ski area in the Shiga Kogen region.",
            link: "https://www.shigakogen.gr.jp/"
        },

        {
            name: "Yakebitaiyama",
            coordinates: [36.7350, 138.5400],
            region: "Chubu",
            area: "Nagano",
            description: "Yakebitaiyama is a major ski area within Shiga Kogen.",
            link: "https://www.shigakogen.gr.jp/"
        },

        {
            name: "Yokoteyama",
            coordinates: [36.6700, 138.4900],
            region: "Chubu",
            area: "Nagano",
            description: "Yokoteyama is one of the highest ski areas in Japan.",
            link: "https://www.shigakogen.gr.jp/"
        },

        {
            name: "Sugadaira",
            coordinates: [36.5300, 138.3700],
            region: "Chubu",
            area: "Nagano",
            description: "Sugadaira is a large ski area in eastern Nagano.",
            link: "https://sugadaira-snowresort.com/"
        },

        {
            name: "Tangram",
            coordinates: [36.8500, 138.2800],
            region: "Chubu",
            area: "Nagano",
            description: "Tangram Ski Circus is located near Madarao.",
            link: "https://www.tangram.jp/"
        },

        {
            name: "Togakushi",
            coordinates: [36.7500, 138.0700],
            region: "Chubu",
            area: "Nagano",
            description: "Togakushi is a ski area near Nagano City.",
            link: "https://www.togakushi.com/"
        },
        // #endregion
    
        //#region NIIGATA

        {
            name: "Arai",
            coordinates: [36.9900, 138.1600],
            region: "Chubu",
            area: "Niigata",
            description: "Arai is a major powder skiing destination in Niigata.",
            link: "https://www.lottehotel.com/arai-resort/en.html"
        },

        {
            name: "Charmant Hiuchi",
            coordinates: [37.0000, 138.0500],
            region: "Chubu",
            area: "Niigata",
            description: "Charmant Hiuchi is known for heavy snowfall and powder skiing.",
            link: "https://charmant-hiuchi.jp/"
        },

        {
            name: "Cupid Valley",
            coordinates: [37.0800, 138.4700],
            region: "Chubu",
            area: "Niigata",
            description: "Cupid Valley is a ski area in Niigata.",
            link: "https://www.yukidaruma-kogen.com/"
        },

        {
            name: "Gala Yuzawa",
            coordinates: [36.9500, 138.8100],
            region: "Chubu",
            area: "Niigata",
            description: "Gala Yuzawa is a convenient ski resort directly connected to the Shinkansen.",
            link: "https://gala.co.jp/winter/"
        },

        {
            name: "Ishiuchi Maruyama",
            coordinates: [36.9700, 138.8000],
            region: "Chubu",
            area: "Niigata",
            description: "Ishiuchi Maruyama is a major ski area near Yuzawa.",
            link: "https://ishiuchi.or.jp/"
        },

        {
            name: "Iwappara",
            coordinates: [36.9200, 138.8500],
            region: "Chubu",
            area: "Niigata",
            description: "Iwappara is a ski resort near Yuzawa.",
            link: "https://www.iwa-ppara.com/"
        },

        {
            name: "Joetsu Kokusai",
            coordinates: [37.0000, 138.8500],
            region: "Chubu",
            area: "Niigata",
            description: "Joetsu Kokusai is a large ski resort in Niigata.",
            link: "https://www.jkokusai.co.jp/"
        },

        {
            name: "Kagura",
            coordinates: [36.8900, 138.7700],
            region: "Chubu",
            area: "Niigata",
            description: "Kagura is part of the Naeba ski region.",
            link: "https://www.princehotels.co.jp/ski/kagura/"
        },

        {
            name: "Kandatsu Kogen",
            coordinates: [36.9200, 138.8000],
            region: "Chubu",
            area: "Niigata",
            description: "Kandatsu Kogen is a ski resort near Yuzawa.",
            link: "https://www.kandatsu.com/"
        },

        {
            name: "Maiko",
            coordinates: [36.9800, 138.8200],
            region: "Chubu",
            area: "Niigata",
            description: "Maiko Snow Resort is located near Minamiuonuma.",
            link: "https://www.maiko-resort.com/"
        },

        {
            name: "Muikamachi Hakkaisan",
            coordinates: [37.0800, 139.0200],
            region: "Chubu",
            area: "Niigata",
            description: "Hakkaisan is known for powder snow and steep terrain.",
            link: "https://www.princehotels.co.jp/ski/hakkaisan/"
        },

        {
            name: "Myoko Akakura",
            coordinates: [36.8900, 138.1700],
            region: "Chubu",
            area: "Niigata",
            description: "Akakura is one of the major ski areas in Myoko.",
            link: "https://www.myoko.tv/"
        },

        {
            name: "Myoko Ikenotaira",
            coordinates: [36.8700, 138.1800],
            region: "Chubu",
            area: "Niigata",
            description: "Ikenotaira is part of the Myoko ski region.",
            link: "https://www.myoko.tv/"
        },

        {
            name: "Myoko Seki Onsen",
            coordinates: [36.8900, 138.1400],
            region: "Chubu",
            area: "Niigata",
            description: "Seki Onsen is a traditional powder ski area.",
            link: "https://www.myoko.tv/"
        },

        {
            name: "Myoko Suginohara",
            coordinates: [36.8500, 138.1400],
            region: "Chubu",
            area: "Niigata",
            description: "Suginohara is a major Myoko ski area.",
            link: "https://www.princehotels.co.jp/ski/myoko/"
        },

        {
            name: "Naeba",
            coordinates: [36.7900, 138.7900],
            region: "Chubu",
            area: "Niigata",
            description: "Naeba is a major ski resort in Niigata.",
            link: "https://www.princehotels.co.jp/ski/naeba/"
        },

        {
            name: "Okutadami Maruyama",
            coordinates: [37.1500, 139.2300],
            region: "Chubu",
            area: "Niigata",
            description: "Okutadami Maruyama is a remote ski area known for heavy snowfall.",
            link: "https://okutadami.co.jp/"
        },

        {
            name: "Yuzawa Kogen",
            coordinates: [36.9400, 138.8100],
            region: "Chubu",
            area: "Niigata",
            description: "Yuzawa Kogen is located close to central Yuzawa.",
            link: "https://www.yuzawakogen.com/"
        },

        {
            name: "Yuzawa Nakazato",
            coordinates: [36.9200, 138.8500],
            region: "Chubu",
            area: "Niigata",
            description: "Yuzawa Nakazato is a family-friendly ski resort in Yuzawa.",
            link: "https://www.yuzawa-nakazato.com/"
        },
        //#endregion

        //#region GIFU

        {
            name: "Dynaland",
            coordinates: [35.9400, 136.8500],
            region: "Chubu",
            area: "Gifu",
            description: "Dynaland is a major ski resort in Gifu.",
            link: "https://www.dynaland.co.jp/"
        },

        {
            name: "Takasu Snow Park",
            coordinates: [35.9400, 136.8500],
            region: "Chubu",
            area: "Gifu",
            description: "Takasu Snow Park is a large ski area in Gifu.",
            link: "https://www.takasu.gr.jp/"
        },

        {
            name: "Winghills Shirotori",
            coordinates: [35.8700, 136.8300],
            region: "Chubu",
            area: "Gifu",
            description: "Winghills Shirotori is a ski resort in Gifu.",
            link: "https://winghills.net/"
        },

        {
            name: "Meiho",
            coordinates: [35.8800, 137.0200],
            region: "Chubu",
            area: "Gifu",
            description: "Meiho Ski Resort is located in central Gifu.",
            link: "https://www.meihoski.co.jp/"
        },

        {
            name: "Hirugano Kogen",
            coordinates: [35.9700, 136.9100],
            region: "Chubu",
            area: "Gifu",
            description: "Hirugano Kogen is a family-friendly ski area in Gifu.",
            link: "https://www.hiruganokogen.com/"
        },
        // #endregion

        //#region TOYAMA

        {
            name: "Tateyama Sanroku",
            coordinates: [36.5800, 137.3300],
            region: "Chubu",
            area: "Toyama",
            description: "Tateyama Sanroku is a ski area near Toyama.",
            link: "https://www.tateyama36.co.jp/"
        },

        {
            name: "Tateyama Mountain",
            coordinates: [36.5700, 137.6000],
            region: "Chubu",
            area: "Toyama",
            description: "Tateyama is a famous alpine mountain area.",
            link: "https://www.alpen-route.com/"
        },
        // #endregion

        //#region ISHIKAWA

        {
            name: "Iouzen",
            coordinates: [36.4900, 136.7800],
            region: "Chubu",
            area: "Ishikawa",
            description: "Iouzen is a small ski area near Kanazawa.",
            link: "https://www.iozen.com/"
        },
        // #endregion

        //#region FUKUI

        {
            name: "Ski Jam Katsuyama",
            coordinates: [36.0500, 136.5600],
            region: "Chubu",
            area: "Fukui",
            description: "Ski Jam Katsuyama is one of the major ski resorts in Fukui.",
            link: "https://www.skijam.jp/"
        },

        {
            name: "Fukui Izumi",
            coordinates: [35.9200, 136.6300],
            region: "Chubu",
            area: "Fukui",
            description: "Fukui Izumi is a ski resort in Fukui Prefecture.",
            link: "https://www.fukuiizumi.com/"
        },
        // #endregion

        //#region SHIGA

        {
            name: "Biwako Valley",
            coordinates: [35.2100, 135.8900],
            region: "Kansai",
            area: "Shiga",
            description: "Biwako Valley is a mountain resort overlooking Lake Biwa.",
            link: "https://www.biwako-valley.com/"
        },

        {
            name: "Okiura",
            coordinates: [35.3500, 136.0000],
            region: "Kansai",
            area: "Shiga",
            description: "Okiura is a ski area in Shiga Prefecture.",
            link: "https://www.snownavi.co.jp/"
        },
        // #endregion

        //#region HYOGO

        {
            name: "Hachikita",
            coordinates: [35.3900, 134.6200],
            region: "Kansai",
            area: "Hyogo",
            description: "Hachikita is a large ski area in northern Hyogo.",
            link: "https://www.hachikita.co.jp/"
        },

        {
            name: "Manba",
            coordinates: [35.3900, 134.6200],
            region: "Kansai",
            area: "Hyogo",
            description: "Manba is a ski resort in northern Hyogo.",
            link: "https://www.manba-ski.jp/"
        },

        {
            name: "Up Kannabe",
            coordinates: [35.4700, 134.6700],
            region: "Kansai",
            area: "Hyogo",
            description: "Up Kannabe is a ski resort in the Kannabe Highlands.",
            link: "https://www.kannabe.co.jp/"
        },

        {
            name: "Manba Snow Park",
            coordinates: [35.3900, 134.6200],
            region: "Kansai",
            area: "Hyogo",
            description: "Manba Snow Park is located in the northern Hyogo ski region.",
            link: "https://www.manba-ski.jp/"
        },
        // #endregion

        //#region GIFU

        {
            name: "Dynaland",
            coordinates: [35.9400, 136.8500],
            region: "Chubu",
            area: "Gifu",
            description: "Dynaland is a major ski resort in Gifu.",
            link: "https://www.dynaland.co.jp/"
        },

        {
            name: "Hirayu Onsen",
            coordinates: [36.1900, 137.5500],
            region: "Chubu",
            area: "Gifu",
            description: "Hirayu Onsen is a ski area located in the Northern Alps.",
            link: "https://www.hirayuonsen.or.jp/"
        },

        {
            name: "Honoki Daira",
            coordinates: [36.1600, 137.4300],
            region: "Chubu",
            area: "Gifu",
            description: "Honoki Daira is a ski resort in Gifu Prefecture.",
            link: "https://www.honokidaira-ski.com/"
        },

        {
            name: "Takasu",
            coordinates: [35.9400, 136.8500],
            region: "Chubu",
            area: "Gifu",
            description: "Takasu Snow Park is a large ski area in Gifu.",
            link: "https://www.takasu.gr.jp/"
        },
        // #endregion

        //#region ISHIKAWA

        {
            name: "Ichirino Onsen",
            coordinates: [36.1600, 136.7200],
            region: "Chubu",
            area: "Ishikawa",
            description: "Ichirino Onsen is a ski resort in Ishikawa Prefecture.",
            link: "https://ichirino.jp/"
        },

        {
            name: "Hakusan Seymour",
            coordinates: [36.2700, 136.6500],
            region: "Chubu",
            area: "Ishikawa",
            description: "Hakusan Seymour is a ski resort near Kanazawa.",
            link: "https://www.sam-hakusan.com/"
        },
        //#endregion

        //#region FUKUI

        {
            name: "Ski Jam Katsuyama",
            coordinates: [36.0600, 136.5600],
            region: "Chubu",
            area: "Fukui",
            description: "Ski Jam Katsuyama is one of the largest ski resorts in Fukui.",
            link: "https://www.skijam.jp/"
        },
        //#endregion

        //#region GUNMA

        {
            name: "Kusatsu Onsen",
            coordinates: [36.6200, 138.6000],
            region: "Kanto",
            area: "Gunma",
            description: "Kusatsu Onsen is a famous ski and hot spring destination.",
            link: "https://www.kusatsu-kokusai.com/"
        },

        {
            name: "Kawaba",
            coordinates: [36.7000, 139.1000],
            region: "Kanto",
            area: "Gunma",
            description: "Kawaba is a popular ski resort in Gunma Prefecture.",
            link: "https://www.kawaba.co.jp/"
        },

        {
            name: "Manza Onsen",
            coordinates: [36.6400, 138.5000],
            region: "Kanto",
            area: "Gunma",
            description: "Manza Onsen is a mountain ski and hot spring destination.",
            link: "https://www.princehotels.co.jp/ski/manza/"
        },

        {
            name: "Marunuma Kogen",
            coordinates: [36.8150, 139.3300],
            region: "Kanto",
            area: "Gunma",
            description: "Marunuma Kogen is a high-altitude ski resort in Gunma.",
            link: "https://www.marunuma.jp/"
        },

        {
            name: "Minakami Houdaigi",
            coordinates: [36.8500, 138.9800],
            region: "Kanto",
            area: "Gunma",
            description: "Minakami Houdaigi is a ski resort in the Minakami area.",
            link: "https://www.hodaigi.jp/"
        },

        {
            name: "Oguna Hotaka",
            coordinates: [36.7400, 139.1900],
            region: "Kanto",
            area: "Gunma",
            description: "Oguna Hotaka is a ski resort in Gunma Prefecture.",
            link: "https://www.hotaka-ski.com/"
        },

        {
            name: "Oze Iwakura",
            coordinates: [36.8000, 139.2600],
            region: "Kanto",
            area: "Gunma",
            description: "Oze Iwakura is a large ski resort in Gunma.",
            link: "https://www.oze-iwakura.co.jp/"
        },

        {
            name: "Oze Tokura",
            coordinates: [36.7900, 139.2500],
            region: "Kanto",
            area: "Gunma",
            description: "Oze Tokura is a ski area near Oze.",
            link: "https://www.oze-tokura.co.jp/"
        },

        {
            name: "Palcall Tsumagoi",
            coordinates: [36.4800, 138.5000],
            region: "Kanto",
            area: "Gunma",
            description: "Palcall Tsumagoi is a high-altitude ski resort in Gunma.",
            link: "https://www.palcall.co.jp/"
        },

        {
            name: "Tenjindaira",
            coordinates: [36.8300, 138.9500],
            region: "Kanto",
            area: "Gunma",
            description: "Tenjindaira is known for steep terrain and heavy snowfall.",
            link: "https://www.tanigawadake-rw.com/"
        },

        {
            name: "White Valley",
            coordinates: [36.7800, 138.9500],
            region: "Kanto",
            area: "Gunma",
            description: "White Valley is a ski resort in the Minakami area.",
            link: "https://www.whitevalley.jp/"
        }, 
        //#endregion
        
        //#region AKITA

        {
            name: "Ani",
            coordinates: [39.9500, 140.5300],
            region: "Tohoku",
            area: "Akita",
            description: "Ani is a ski area in northern Akita.",
            link: "https://www.aniski.jp/"
        },

        {
            name: "Akita Hachimantai",
            coordinates: [39.9900, 140.7500],
            region: "Tohoku",
            area: "Akita",
            description: "Akita Hachimantai is an alpine ski destination.",
            link: "https://www.snownavi.co.jp/"
        },

        {
            name: "Hanawa",
            coordinates: [40.1800, 140.7800],
            region: "Tohoku",
            area: "Akita",
            description: "Hanawa is a local ski area in Akita.",
            link: "https://www.snowjapan.com/"
        },

        {
            name: "Jeunesse Kurikoma",
            coordinates: [39.1000, 140.7000],
            region: "Tohoku",
            area: "Akita",
            description: "Jeunesse Kurikoma is a ski area in the Kurikoma region.",
            link: "https://www.snowjapan.com/"
        },

        {
            name: "Suishozan",
            coordinates: [39.7000, 140.2500],
            region: "Tohoku",
            area: "Akita",
            description: "Suishozan is a local ski area in Akita.",
            link: "https://www.snowjapan.com/"
        },

        {
            name: "Tazawako",
            coordinates: [39.7600, 140.7300],
            region: "Tohoku",
            area: "Akita",
            description: "Tazawako is a major ski destination overlooking Lake Tazawa.",
            link: "https://www.tazawako-ski.com/"
        },

        {
            name: "Tengamori",
            coordinates: [39.8000, 140.7000],
            region: "Tohoku",
            area: "Akita",
            description: "Tengamori is a ski area in Akita.",
            link: "https://www.snowjapan.com/"
        },
        //#endregion

        //#region AOMORI

        {
            name: "Aomori Spring",
            coordinates: [40.7000, 140.2000],
            region: "Tohoku",
            area: "Aomori",
            description: "Aomori Spring is a ski resort in northern Japan.",
            link: "https://www.aomorispring.com/"
        },

        {
            name: "Hakkoda",
            coordinates: [40.6600, 140.8500],
            region: "Tohoku",
            area: "Aomori",
            description: "Hakkoda is famous for deep snow and backcountry skiing.",
            link: "https://www.hakkoda-ropeway.jp/"
        },

        {
            name: "Iwaki Hyakuzawa",
            coordinates: [40.6200, 140.3500],
            region: "Tohoku",
            area: "Aomori",
            description: "Iwaki Hyakuzawa is a ski area near Mount Iwaki.",
            link: "https://www.snowjapan.com/"
        },

        {
            name: "Owani Onsen",
            coordinates: [40.5200, 140.5700],
            region: "Tohoku",
            area: "Aomori",
            description: "Owani Onsen is a ski and hot-spring destination.",
            link: "https://www.snowjapan.com/"
        },
        //#endregion

        //#region FUKUSHIMA

        {
            name: "Adatara Kogen",
            coordinates: [37.6300, 140.3200],
            region: "Tohoku",
            area: "Fukushima",
            description: "Adatara Kogen is a ski area in Fukushima.",
            link: "https://www.snowjapan.com/"
        },

        {
            name: "Alts Bandai",
            coordinates: [37.6000, 140.0000],
            region: "Tohoku",
            area: "Fukushima",
            description: "Alts Bandai is a major ski resort in Fukushima.",
            link: "https://www.alts.co.jp/"
        },

        {
            name: "Grandeco",
            coordinates: [37.7000, 140.1300],
            region: "Tohoku",
            area: "Fukushima",
            description: "Grandeco is a ski resort in the Bandai region.",
            link: "https://www.grandeco.com/"
        },

        {
            name: "Inawashiro",
            coordinates: [37.5800, 140.0800],
            region: "Tohoku",
            area: "Fukushima",
            description: "Inawashiro is a ski resort overlooking Lake Inawashiro.",
            link: "https://www.inawashiro-ski.com/"
        },

        {
            name: "Minowa",
            coordinates: [37.6500, 140.2500],
            region: "Tohoku",
            area: "Fukushima",
            description: "Minowa is a ski resort in Fukushima.",
            link: "https://www.snowjapan.com/"
        },

        {
            name: "Nekoma",
            coordinates: [37.6300, 140.0800],
            region: "Tohoku",
            area: "Fukushima",
            description: "Nekoma is a major ski area around Mount Bandai.",
            link: "https://www.nekoma.co.jp/"
        },

        {
            name: "Takatsue",
            coordinates: [37.1500, 139.6000],
            region: "Tohoku",
            area: "Fukushima",
            description: "Takatsue is a ski area in southern Fukushima.",
            link: "https://www.snowjapan.com/"
        },
        //#endregion
        
        //#region IWATE

        {
            name: "Appi",
            coordinates: [40.0000, 140.9700],
            region: "Tohoku",
            area: "Iwate",
            description: "Appi Kogen is a major ski resort in Iwate.",
            link: "https://www.appi.co.jp/"
        },

        {
            name: "Geto Kogen",
            coordinates: [39.2700, 140.8800],
            region: "Tohoku",
            area: "Iwate",
            description: "Geto Kogen is known for deep powder snow.",
            link: "https://www.getokogen.co.jp/"
        },

        {
            name: "Panorama",
            coordinates: [39.8500, 140.8500],
            region: "Tohoku",
            area: "Iwate",
            description: "Hachimantai Panorama is a ski area in Iwate.",
            link: "https://www.snowjapan.com/"
        },

        {
            name: "Shimokura",
            coordinates: [39.8700, 140.8800],
            region: "Tohoku",
            area: "Iwate",
            description: "Shimokura is a ski area in Hachimantai.",
            link: "https://www.snowjapan.com/"
        },

        {
            name: "Iwate Kogen",
            coordinates: [39.8500, 140.9500],
            region: "Tohoku",
            area: "Iwate",
            description: "Iwate Kogen is a ski resort near Mount Iwate.",
            link: "https://www.snowjapan.com/"
        },

        {
            name: "Okunakayama",
            coordinates: [40.1000, 141.2000],
            region: "Tohoku",
            area: "Iwate",
            description: "Okunakayama is a ski area in northern Iwate.",
            link: "https://www.snowjapan.com/"
        },

        {
            name: "Shizukuishi",
            coordinates: [39.7500, 140.9500],
            region: "Tohoku",
            area: "Iwate",
            description: "Shizukuishi is a ski resort near Mount Iwate.",
            link: "https://www.princehotels.co.jp/ski/shizukuishi/"
        },

        {
            name: "Hiraniwa Kogen",
            coordinates: [40.0800, 141.2500],
            region: "Tohoku",
            area: "Iwate",
            description: "Hiraniwa Kogen is a local ski area in Iwate.",
            link: "https://www.snowjapan.com/"
        },

        {
            name: "Tayama",
            coordinates: [39.9500, 140.9800],
            region: "Tohoku",
            area: "Iwate",
            description: "Tayama is a ski area in the Hachimantai region.",
            link: "https://www.snowjapan.com/"
        },
        //#endregion

        //#region YAMAGATA

        {
            name: "Gassan",
            coordinates: [38.5500, 140.0200],
            region: "Tohoku",
            area: "Yamagata",
            description: "Gassan is famous for its unusual late-season skiing.",
            link: "https://www.gassan-ski.com/"
        },

        {
            name: "Asahi Shizenkan",
            coordinates: [38.3800, 140.1000],
            region: "Tohoku",
            area: "Yamagata",
            description: "Asahi Shizenkan is a ski area in Yamagata.",
            link: "https://www.snowjapan.com/"
        },

        {
            name: "Jangle Jungle",
            coordinates: [38.4700, 140.4500],
            region: "Tohoku",
            area: "Yamagata",
            description: "Jangle Jungle is a ski area in Yamagata.",
            link: "https://www.snowjapan.com/"
        },

        {
            name: "Tengendai Kogen",
            coordinates: [37.8000, 140.1000],
            region: "Tohoku",
            area: "Yamagata",
            description: "Tengendai Kogen is an alpine ski area in Yamagata.",
            link: "https://www.snowjapan.com/"
        },

        {
            name: "Yudonosan",
            coordinates: [38.5500, 139.9700],
            region: "Tohoku",
            area: "Yamagata",
            description: "Yudonosan is a mountain ski destination.",
            link: "https://www.snowjapan.com/"
        },

        {
            name: "Zao Onsen",
            coordinates: [38.1700, 140.4000],
            region: "Tohoku",
            area: "Yamagata",
            description: "Zao Onsen is one of Japan's best-known ski and hot-spring destinations.",
            link: "https://www.zao-spa.or.jp/"
        },
        //#endregion

        //#region MIYAGI

        {
            name: "Akakura",
            coordinates: [38.0500, 140.7000],
            region: "Tohoku",
            area: "Miyagi",
            description: "Akakura is a local ski area in Miyagi.",
            link: "https://www.snowjapan.com/"
        },

        {
            name: "Eboshi",
            coordinates: [38.1300, 140.5200],
            region: "Tohoku",
            area: "Miyagi",
            description: "Eboshi is a ski resort in Miyagi.",
            link: "https://www.eboshi.co.jp/"
        },

        {
            name: "Onikoube",
            coordinates: [38.8200, 140.6000],
            region: "Tohoku",
            area: "Miyagi",
            description: "Onikoube is a ski area in northern Miyagi.",
            link: "https://www.onikoube.com/"
        },

        {
            name: "Sumikawa",
            coordinates: [38.1200, 140.4700],
            region: "Tohoku",
            area: "Miyagi",
            description: "Sumikawa Snow Park is located in the Zao mountains.",
            link: "https://www.sumikawa.jp/"
        },
        // #endregion

    //#endregion

    // #region AUSTRALIA
        //#region NSW

        {
            name: "Perisher",
            coordinates: [-36.4000, 148.4100],
            region: "NSW",
            area: "Snowy Mountains",
            description: "Perisher is Australia's largest ski resort and is located in the Snowy Mountains.",
            link: "https://www.perisher.com.au/",
            image: "perisher.jpg",
            popular: true
        },

        {
            name: "Thredbo",
            coordinates: [-36.5048, 148.3057],
            region: "NSW",
            area: "Snowy Mountains",
            description: "Thredbo is one of Australia's most popular alpine resorts and offers skiing and snowboarding.",
            link: "https://www.thredbo.com.au/",
            image: "thredbo.jpg",
            popular: true
        },

        {
            name: "Charlotte Pass",
            coordinates: [-36.4331, 148.3306],
            region: "NSW",
            area: "Snowy Mountains",
            description: "Charlotte Pass is Australia's highest ski resort and is accessible during winter by snow transport.",
            link: "https://www.charlottepass.com.au/",
            image: "charlottepass.jpg",
            popular: false
        },

        {
            name: "Selwyn Snowfields",
            coordinates: [-35.9089, 148.4521],
            region: "NSW",
            area: "Snowy Mountains",
            description: "Selwyn Snowfields is a family-friendly ski resort located in the Snowy Mountains.",
            link: "https://www.selwynsnow.com.au/",
            image: "selwyn.jpg",
            popular: false
        },
        // #endregion

        //#region VIC

        {
            name: "Mt Buller",
            coordinates: [-37.1450, 146.4394],
            region: "VIC",
            area: "High Country",
            description: "Mt Buller is one of Australia's most popular ski resorts and is located close to Melbourne.",
            link: "https://www.mtbuller.com.au/",
            image: "mtbuller.jpg",
            popular: true
        },

        {
            name: "Mt Hotham",
            coordinates: [-36.9772, 147.1342],
            region: "VIC",
            area: "High Country",
            description: "Mt Hotham is known for its challenging terrain and spectacular alpine views.",
            link: "https://www.mthotham.com.au/",
            image: "mthotham.jpg",
            popular: true
        },

        {
            name: "Mt Baw Baw",
            coordinates: [-37.8400, 146.2636],
            region: "VIC",
            area: "Baw Baw",
            description: "Mt Baw Baw is a smaller alpine resort located in Victoria.",
            link: "https://mountbawbaw.com.au/",
            image: "mtbawbaw.jpg",
            popular: false
        },

        {
            name: "Mt Stirling",
            coordinates: [-37.1310, 146.4835],
            region: "VIC",
            area: "High Country",
            description: "Mt Stirling is known for cross-country skiing, backcountry adventures and snow activities.",
            link: "https://www.mtstirling.com.au/",
            image: "mtstirling.jpg",
            popular: false
        },

        {
            name: "Falls Creek",
            coordinates: [-36.8708, 147.2755],
            region: "VIC",
            area: "High Country",
            description: "Falls Creek is a popular alpine resort offering skiing and snowboarding.",
            link: "https://www.fallscreek.com.au/",
            image: "fallscreek.jpg",
            popular: true
        },
        //#endregion

        //#region ACT

        {
            name: "Corin Forest",
            coordinates: [-35.5153, 148.9214],
            region: "ACT",
            area: "Canberra",
            description: "Corin Forest is located near Canberra and offers snow activities during winter.",
            link: "https://www.corin.com.au/",
            image: "corinforest.jpg",
            popular: false
        },
        // #endregion

        //#region TAS

        {
            name: "Ben Lomond",
            coordinates: [-41.5670, 147.6670],
            region: "TAS",
            area: "Ben Lomond",
            description: "Ben Lomond is Tasmania's main alpine skiing destination.",
            link: "https://www.benlomondskiclub.com/",
            image: "benlomond.jpg",
            popular: false
        },
        // #endregion
        
    // #endregion

    // #region NEW ZEALAND
    {
        name: "Coronet Peak",
        coordinates: [-44.9226, 168.7379],
        region: "South Island",
        area: "Queenstown",
        description: "Coronet Peak is one of New Zealand's most popular ski resorts near Queenstown.",
        link: "https://www.coronetpeak.co.nz/",
        image: "coronetpeak.jpg",
        popular: true
    },

    {
        name: "The Remarkables",
        coordinates: [-45.0547, 168.8151],
        region: "South Island",
        area: "Queenstown",
        description: "The Remarkables offers a range of terrain overlooking Queenstown.",
        link: "https://www.theremarkables.co.nz/",
        image: "remarkables.jpg",
        popular: true
    },

    {
        name: "Cardrona",
        coordinates: [-44.8657, 168.9457],
        region: "South Island",
        area: "Wanaka",
        description: "Cardrona is a popular New Zealand resort known for skiing, snowboarding and terrain parks.",
        link: "https://www.cardrona.com/",
        image: "cardrona.jpg",
        popular: true
    },

    {
        name: "Treble Cone",
        coordinates: [-44.6324, 168.8728],
        region: "South Island",
        area: "Wanaka",
        description: "Treble Cone is located near Wanaka and is known for its views and challenging terrain.",
        link: "https://www.treblecone.com/",
        image: "treblecone.jpg",
        popular: true
    },

    {
        name: "Ohau",
        coordinates: [-44.2204, 169.7741],
        region: "South Island",
        area: "Canterbury",
        description: "Ohau is a small alpine ski area located in New Zealand's South Island.",
        link: "https://www.ohau.co.nz/",
        image: "ohau.jpg",
        popular: false
    },

    {
        name: "Mt Dobson",
        coordinates: [-43.9388, 170.6653],
        region: "South Island",
        area: "Canterbury",
        description: "Mt Dobson is located in the South Island and offers skiing and snowboarding.",
        link: "https://www.mtdobson.co.nz/",
        image: "mtdobson.jpg",
        popular: false
    },

    {
        name: "Mt Hutt",
        coordinates: [-43.4919, 171.5364],
        region: "South Island",
        area: "Canterbury",
        description: "Mt Hutt is one of New Zealand's largest ski areas and is located near Christchurch.",
        link: "https://www.mthutt.co.nz/",
        image: "mthutt.jpg",
        popular: true
    },

    {
        name: "Whakapapa",
        coordinates: [-39.2484, 175.5601],
        region: "North Island",
        area: "Mount Ruapehu",
        description: "Whakapapa is located on Mount Ruapehu in New Zealand's North Island.",
        link: "https://www.whakapapa.co.nz/",
        image: "whakapapa.jpg",
        popular: true
    },

    {
        name: "Turoa",
        coordinates: [-39.2999, 175.5402],
        region: "North Island",
        area: "Mount Ruapehu",
        description: "Turoa is another ski area located on Mount Ruapehu.",
        link: "https://www.turoa.co.nz/",
        image: "turoa.jpg",
        popular: true
    },

    {
        name: "Mt Lyford",
        coordinates: [-42.4429, 173.1484],
        region: "South Island",
        area: "Canterbury",
        description: "Mt Lyford is a small ski area located in Canterbury.",
        link: "https://www.mtlyford.co.nz/",
        image: "mtlyford.jpg",
        popular: false
    },

    {
        name: "Broken River",
        coordinates: [-43.1214, 171.6826],
        region: "South Island",
        area: "Canterbury",
        description: "Broken River is a club-style ski area located in Canterbury.",
        link: "https://brokenriver.co.nz/",
        image: "brokenriver.jpg",
        popular: false
    },

    {
        name: "Snow Farm",
        coordinates: [-44.2200, 169.0500],
        region: "South Island",
        area: "Wanaka",
        description: "Snow Farm is a cross-country skiing and snow sports destination near Wanaka.",
        link: "https://www.snowfarmnz.com/",
        image: "snowfarm.jpg",
        popular: false
    },

    {
        name: "Porters",
        coordinates: [-43.2715, 171.6343],
        region: "South Island",
        area: "Canterbury",
        description: "Porters is a ski area located near Christchurch in New Zealand.",
        link: "https://www.portersalpineresort.com/",
        image: "porters.jpg",
        popular: false
    },

    {
        name: "Mt Cheeseman",
        coordinates: [-43.1553, 171.6641],
        region: "South Island",
        area: "Canterbury",
        description: "Mt Cheeseman is a club ski field located in Canterbury.",
        link: "https://www.mtcheeseman.co.nz/",
        image: "mtcheeseman.jpg",
        popular: false
    },

    // #endregion

    //#region USA
    
];

// CREATE RESORT MARKERS

resorts.forEach(function(resortData) {

    const resort = L.marker(resortData.coordinates).addTo(map);

    let image = "";

    if (resortData.image) {
        image = `
            <img 
                src="Images/${resortData.image}" 
                alt="${resortData.name} ski resort"
            >
        `;
    }

    resort.bindPopup(`
        <h2>${resortData.name}</h2>

        ${image}

        <p>
            <strong>Region:</strong> ${resortData.region}<br>
            <strong>Area:</strong> ${resortData.area}
        </p>

        <p>
            ${resortData.description}
        </p>

        <a href="${resortData.link}" target="_blank">
            Learn More
        </a>
    `);

    allResorts.push(resort);

    if (resortData.popular) {
        popularResorts.push(resort);
    }

});

const popularButton = document.getElementById("popularButton");
const allButton = document.getElementById("allButton");


function showResorts(resortsToShow) {

    allResorts.forEach(function(resort) {
        map.removeLayer(resort);
    });

    resortsToShow.forEach(function(resort) {
        map.addLayer(resort);
    });

}


popularButton.addEventListener("click", function() {

    showResorts(popularResorts);

    popularButton.classList.add("active");
    allButton.classList.remove("active");

});


allButton.addEventListener("click", function() {

    showResorts(allResorts);

    popularButton.classList.remove("active");
    allButton.classList.add("active");

});


// SHOW POPULAR BY DEFAULT

showResorts(popularResorts);