const quiz = document.getElementById("skiquiz");

function skiingability() {
    quiz.innerHTML = `
        <h3>What is your level of skiing?</h3>
        <button onclick="Beginner()">Beginner</button>
        <button onclick="Intermediate()">Intermediate</button>
        <button onclick="Advanced()">Advanced</button>
    `;
}

// BEGINNER
function Beginner() {
    quiz.innerHTML = `
        <h3>Reccommended skis for you:</h3>

        <h4>Atomic Cloud C7</h4>
        <p>The Cloud C7 is an entry-level piste ski from Atomic's Cloud 
        range. Atomic's current website does not provide a product page 
        for this older model, so its original construction and technology 
        specifications could not be confirmed.</p>
        <img src="Images/Cloud7.webp" alt="Atomic Cloud C7">

        <h4>Salomon S/Max N°8</h4>
        <p>The S/Max N°8 belongs to Salomon's frontside and piste-focused 
        S/Max range. Salomon's current website does not provide a product 
        page for this older model, so its exact construction and technology 
        specifications could not be confirmed.</p>
        <img src="Images/SMaxN8.jpg" alt="Salomon S/Max N°8">

        <h4>Volkl Shine 76</h4>
        <p>Völkl describes the Shine 76 as a piste ski for beginner skiers 
        progressing towards more challenging terrain. Its 76 mm waist is 
        intended to support progression onto intermediate and advanced runs. 
        Partial sidewall construction is designed to make turns smooth and 
        easy to manoeuvre, while retaining a sporty feel underfoot.</p>
        <img src="Images/Shine76.webp" alt="Volkl Shine 76">

        <button onclick="skiingability()">Start Again</button>
    `;
}

// INTERMEDIATE
function Intermediate() {
    quiz.innerHTML = `
        <h3>What type of skiing do you do?</h3>
        <button onclick="Icarving()">Carving</button>
        <button onclick="Iallmountain()">All Mountain</button>
        <button onclick="Ifreestyle()">Freestyle</button>
    `;
}

// INTERMEDIATE - CARVING
function Icarving() {
    quiz.innerHTML = `
        <h3>What is your style of carving?</h3>
        <button onclick="ICcruisy()">Cruisy</button>
        <button onclick="ICaggressive()">Aggressive</button>
    `;
}

function ICcruisy() {
    quiz.innerHTML = `
        <h3>Reccommended skis for you:</h3>

        <h4>Atomic Cloud Q9</h4>
        <p>Atomic's current website does not provide a product page for the 
        Cloud Q9 model. Its exact construction, intended ability level and 
        technologies therefore cannot be confirmed from the manufacturer's 
        current information.</p>
        <img src="Images/CloudQ9.webp" alt="Atomic Cloud Q9">

        <h4>Salomon Stance 84</h4>
        <p>The Stance 84 is part of Salomon's all-mountain Stance range. 
        Salomon's current website does not provide a product page for this 
        older model, so its exact construction and technology specifications 
        could not be confirmed.</p>
        <img src="Images/Stance84" alt="Salomon Stance 84">

        <h4>Blizzard Black Pearl 84</h4>
        <p>Blizzard describes the Black Pearl 84 as an all-conditions ski. 
        Its W.S.D. FluxForm All Mountain construction and Trueblend All 
        Mountain woodcore are designed to provide a balanced all-mountain 
        feel. The early-rise tip and tail with camber underfoot support 
        versatility across changing snow conditions. Blizzard positions it 
        for skiers who have progressed beyond the basics and are developing stronger parallel turns and edge control.</p>
        <img src="Images/BlackPearl84.webp" alt="Blizzard Black Pearl 84">

        <button onclick="skiingability()">Start Again</button>
    `;
}

function ICaggressive() {
    quiz.innerHTML = `
        <h3>Reccommended skis for you:</h3>

        <h4>Atomic Cloud C12</h4>
        <p>Atomic's current website does not provide a product page for the 
        Cloud C12 model. Its exact construction, intended ability level and 
        technologies therefore cannot be confirmed from the manufacturer's 
        current information.</p>

        <h4>Blizzard Sheeva 9</h4>
        <p>Blizzard places the Sheeva 9 in its women's freeride ski range. 
        The current collection identifies it as a freeride model, but the 
        exact construction and specifications vary by model year.</p>

        <h4>Rossignol Arcade 84</h4>
        <p>Rossignol's current website does not provide a product page for 
        this exact older Arcade 84 model. Its precise construction and 
        intended ability level could not be confirmed from current 
        manufacturer information.</p>

        <button onclick="skiingability()">Start Again</button>
    `;
}

// INTERMEDIATE - ALL MOUNTAIN
function Iallmountain() {
    quiz.innerHTML = `
        <h3>What is your style of all mountain riding?</h3>
        <button onclick="IAcruisy()">Cruisy</button>
        <button onclick="IAaggressive()">Aggressive</button>
    `;
}

function IAcruisy() {
    quiz.innerHTML = `
        <h3>Reccommended skis for you:</h3>

        <h4>Black Crows Captis Birdie</h4>
        <p>Black Crows describes the Captis Birdie as an accessible 
        all-terrain ski with freestyle heritage. Its 90 mm waist is intended 
        to balance edge hold on groomers with versatility across different 
        snow conditions. The double rocker supports manoeuvrability and 
        pivoting, while camber underfoot balances stability and handling. 
        Its poplar-and-fibreglass core and tolerant flex contribute to an 
        accessible, playful feel.</p>
        <img src="Images/Captis.jpg" alt="Black Crows Captis Birdie">

        <h4>Dynastar E-Cross 82</h4>
        <p>Dynastar's current website does not provide a product page for 
        the E-Cross 82 model. Its exact construction, intended ability level 
        and technologies therefore cannot be confirmed from current manufacturer 
        information.</p>
        <img src="Images/ECross82.webp" alt="Dynastar E-Cross 82">

        <h4>Faction Dancer 89</h4>
        <p>Faction's Dancer range is designed for all-mountain skiing. The 
        Dancer 89 is the narrower, more frontside-oriented width in the 
        range, intended to balance edge-to-edge quickness with versatility 
        across changing snow. Faction's current range includes Dancer 89 and 
        Dancer 89 TI versions; make sure the description matches the exact 
        version shown.</p>
        <img src="Images/Dancer89.webp" alt="Faction Dancer 89">

        <button onclick="skiingability()">Start Again</button>
    `;
}

function IAaggressive() {
    quiz.innerHTML = `
        <h3>Reccommended skis for you:</h3>

        <h4>Atomic Maven 88 CTI</h4>
        <p>Atomic describes the Maven 88 CTI as an all-mountain ski focused 
        on stable control with a playful feel. It is designed for confident 
        skiing across varied terrain, combining a responsive construction 
        with an 88 mm waist for a balance of edge-to-edge handling and 
        all-mountain versatility.</p>
        <img src="Images/Maven88CTI.webp" alt="Atomic Maven 88 CTI">

        <h4>Blizzard Black Pearl 88</h4>
        <p>Blizzard's Black Pearl range is designed as an all-mountain 
        collection for women. The Black Pearl 88 sits between the narrower 
        84 and wider 94 models, offering a middle-width option for varied 
        resort conditions. Construction details can change by season.</p>
        <img src="Images/BlackPearl88.webp" alt="Blizzard Black Pearl 88">

        <h4>Black Crows Camox Birdie</h4>
        <p>Black Crows describes the Camox Birdie as an all-terrain ski with 
        a playful, freestyle-influenced character. It is designed to balance 
        manoeuvrability and versatility across the mountain. Exact 
        construction and dimensions depend on the model year.</p>
        <img src="Images/CamoxBirdie.webp" alt="Black Crows Camox Birdie">

        <button onclick="skiingability()">Start Again</button>
    `;
}

// INTERMEDIATE - FREESTYLE
function Ifreestyle() {
    quiz.innerHTML = `
        <h3>What type of freeride do you do?</h3>
        <button onclick="Ipark()">Park</button>
        <button onclick="Imoguls()">Moguls</button>
    `;
}

function Ipark() {
    quiz.innerHTML = `
        <h3>Reccommended skis for you:</h3>

        <h4>K2 Omen 85</h4>
        <p>K2 places the Omen 85 in its freestyle ski range. The model uses 
        an all-terrain twin shape intended for park-oriented skiing while 
        remaining usable around the mountain. K2's published catalogue lists 
        a wood core and carbon-braided construction elements; specifications 
        can vary by model year.</p>
        <img src="Images/Omen85.webp" alt="K2 Omen 85">

        <h4>Faction Prodigy 1 Capsule</h4>
        <p>Faction describes the Prodigy 1 Capsule as a park-and-pipe ski 
        with an 88 mm waist. Its elliptical sidecut is designed for easy 
        turn initiation, while full-strength sidewalls provide edge hold. 
        The poplar-and-ash wood core combines flex and pop with durability, 
        and a carbon/rubber stomp pad helps absorb vibration. Faction lists 
        it for intermediate, advanced and expert skiers.</p>
        <img src="Images/Prodigy1Capsule.webp" alt="Faction Prodigy 1 Capsule">

        <h4>Majesty Vesper</h4>
        <p>Majesty's current product information for the Vesper could not 
        be confirmed from an active official product page. Its exact 
        intended terrain, construction and technology should be checked 
        against the manufacturer's catalogue for the relevant model year.</p>
        <img src="Images/Vesper.jpg" alt="Majesty Vesper">

        <button onclick="skiingability()">Start Again</button>
    `;
}

function Imoguls() {
    quiz.innerHTML = `
        <h3>Reccommended skis for you:</h3>

        <h4>Rossignol Arcade 80</h4>
        <p>Rossignol's current website does not provide a product page for 
        this exact Arcade 80 model. Its precise construction and intended 
        ability level could not be confirmed from current manufacturer 
        information.</p>
        <img src="Images/Arcade84.webp" alt="Rossignol Arcade 80">

        <h4>K2 Mindbender 90 C</h4>
        <p>K2 places the Mindbender 90C in its all-mountain range. Its 
        90 mm waist is designed to balance groomer performance with 
        versatility in variable snow. The C version uses a carbon-focused 
        construction intended to keep the ski relatively light and 
        responsive; exact details vary by model year.</p>
        <img src="Images/Mindbender90C.webp" alt="K2 Mindbender 90 C">

        <h4>Atomic Maven 86 C</h4>
        <p>Atomic describes the Maven 86 C as an all-mountain ski offering 
        intuitive control and confident skiing. Its 86 mm waist is intended 
        to balance quick edge changes on groomed runs with versatility 
        across the mountain. The C designation identifies Atomic's 
        carbon-focused construction.</p>
        <img src="Images/Maven86.webp" alt="Atomic Maven 86 C">

        <button onclick="skiingability()">Start Again</button>
    `;
}

// ADVANCED
function Advanced() {
    quiz.innerHTML = `
        <h3>What type of skiing do you do?</h3>
        <button onclick="carving()">Carving</button>
        <button onclick="Aallmountain()">All Mountain</button>
        <button onclick="Afreestyle()">Freestyle</button>
        <button onclick="Afreeride()">Freeride</button>
    `;
}

// ADVANCED - CARVING
function carving() {
    quiz.innerHTML = `
        <h3>What is your style of carving?</h3>
        <button onclick="ACcruisy()">Cruisy</button>
        <button onclick="ACaggressive()">Aggressive</button>
        <button onclick="racingType()">Racing</button>
    `;
}

function ACcruisy() {
    quiz.innerHTML = `
        <h3>Reccommended skis for you:</h3>

        <h4>Rossignol Nova 6</h4>
        <p>Rossignol's current website does not provide a product page for 
        this exact Nova 6 model. Its precise construction and intended 
        ability level could not be confirmed from current manufacturer 
        information.</p>
        <img src="Images/Nova6.webp" alt="Rossignol Nova 6">

        <h4>Blizzard Brahma 82</h4>
        <p>Blizzard's current website does not provide a product page for 
        the older Brahma 82 model. The Brahma name belongs to Blizzard's 
        frontside/all-mountain performance family, but the exact 
        construction and specifications of this version should be checked 
        against its original model-year catalogue.</p>
        <img src="Images/Brahma82.webp" alt="Blizzard Brahma 82">

        <h4>Head Total Joy</h4>
        <p>HEAD's current website does not provide a product page for this 
        older Total Joy model. Its exact construction, intended ability 
        level and technologies therefore cannot be confirmed from current 
        manufacturer information.</p>
        <img src="Images/TotalJoy.webp" alt="Head Total Joy">

        <button onclick="skiingability()">Start Again</button>
    `;
}

function ACaggressive() {
    quiz.innerHTML = `
        <h3>Reccommended skis for you:</h3>

        <h4>Rossignol Nova 10</h4>
        <p>Rossignol's current website does not provide a product page for 
        this exact Nova 10 model. Its precise construction and intended 
        ability level could not be confirmed from current manufacturer 
        information.</p>
        <img src="Images/Nova10.webp" alt="Rossignol Nova 10">

        <h4>Nordica Belle 73</h4>
        <p>Nordica's current collection no longer lists the Belle 73 under 
        that exact model name. Nordica's current women's piste and 
        all-mountain range includes newer Belle/Wild Belle models, but 
        their specifications should not be attributed to the older Belle 73.</p>
        <img src="Images/Belle73.png" alt="Nordica Belle 73">

        <h4>Volkl Mantra 88</h4>
        <p>Völkl describes the Mantra 88 as an all-mountain freeride ski for 
        powerful turns on and off piste. Its medium waist is intended to 
        balance versatility and agility across snow conditions. The 2026 
        model features Tailored Carbon Tips and a 3D Radius Sidecut, 
        designed to improve dynamics, turn variety and manoeuvrability. 
        These details are specific to the 2026/27 redesign.</p>
        <img src="Images/Mantra88.webp" alt="Volkl Mantra 88">

        <button onclick="skiingability()">Start Again</button>
    `;
}

// RACING
function racingType() {
    quiz.innerHTML = `
        <h3>What type of racing do you do?</h3>
        <button onclick="Slalom()">Slalom</button>
        <button onclick="SkiX()">SkiX</button>
        <button onclick="moguls()">Moguls</button>
    `;
}

function Slalom() {
    quiz.innerHTML = `
        <h3>Reccommended skis for you:</h3>

        <h4>Salomon S/Max N8</h4>
        <p>The Salomon S/Max N8 Ski 2027 is designed for smooth, confident 
        carving on groomed runs. With a lightweight construction and precise 
        edge control, it offers an enjoyable on-piste skiing experience.</p>
        <img src="Images/SMaxN8.jpg" alt="Salomon S/Max N8">

        <h4>Head e-Real Joy</h4>
        <p>Skiing on piste is a real joy, thanks to HEAD's Better Balance 
        technology, which makes turn initiation easy. The Real Joy's new 
        sidecut and strategic ramp angle adds versatility in a variety of 
        turn shapes as well as helping women feel less fatigued on the 
        slopes. A poplar wood core adds responsiveness to the 75-mm-waisted 
        ski, creating a quick-turning, fun, on-piste partner.</p>
        <img src="Images/eRealJoy.webp" alt="Head e-Real Joy">

        <h4>Rossignol Hero Athlete SL / GS</h4>
        <p>Rossignol's Hero Athlete skis are competition-focused race skis. 
        SL refers to slalom and GS to giant slalom; these disciplines use 
        different turn shapes and ski specifications. The exact Hero 
        Athlete model and year are important, so the SL and GS versions 
        should not be treated as one interchangeable ski.</p>
        <img src="Images/HeroAthlete.webp" alt="Rossignol Hero Athlete SL / GS">

        <button onclick="skiingability()">Start Again</button>
    `;
}

function SkiX() {
    quiz.innerHTML = `
        <h3>Reccommended skis for you:</h3>

        <h4>Atomic Redster S9 FIS</h4>
        <p>Atomic's Redster S9 FIS is a competition slalom ski designed for 
        high-level racing. Atomic's race catalogue lists dedicated FIS 
        versions and sizes, with specifications intended for short-radius 
        slalom turns. Make sure the description matches the exact men's, 
        women's or junior model and model year.</p>
        <img src="Images/RedsterS9.webp" alt="Atomic Redster S9 FIS">

        <h4>Rossignol Arcade 84</h4>
        <p>All day. Any day. The Rossignol Arcade 84 skis redefine the 
        all-mountain category with a personality that can literally ski 
        100% anywhere. Designed with advanced and expert skiers in mind, 
        they balance a blend of race tech and freeride construction to 
        create a new quiver-of-one experience. The combination of a 
        shorter turn radius and a wider 84mm waist with a rockered tip 
        and tail profile makes for progressive carving in all terrain. 
        They're made for the snow you find versus the snow you expect to 
        find, so you can carve and charge from first chair to final lap, 
        all winter long.</p>
        <img src="Images/Arcade84.webp" alt="Rossignol Arcade 84">

        <h4>Fischer RC4 Worldcup Noize GS</h4>
        <p>Fischer describes the RC4 Worldcup Noize GS as a giant-slalom 
        competition ski developed with World Cup athletes. Noize Control is 
        designed to improve smoothness and maintain snow contact, while the 
        M-Plate supports direct power transfer. Fischer lists it for expert 
        racers and highlights its edge grip and high-speed control.</p>
        <img src="Images/RC4WorldcupNoize.jpeg" alt="Fischer RC4 Worldcup Noize GS">

        <button onclick="skiingability()">Start Again</button>
    `;
}

function moguls() {
    quiz.innerHTML = `
        <h3>Reccommended skis for you:</h3>

        <h4>Rossignol Hero Mogul Accelere</h4>
        <p>Rossignol undisputedly has the best mogul skiers on the planet. 
        Perrine Laffont and Ben Cavet demand the best from their skis. From 
        our intense work with our world-class athletes, Rossignol has 
        developed for juniors the Hero Mogul Accelere. Light, agile and 
        lively to meet the needs and demands of all junior bump skiers. </p>
        <img src="Images/HeroMogulAccelere.jpeg" alt="Rossignol Hero Mogul Accelere">

        <h4>Head Kore Ti 87</h4>
        <p>The 2026 Head Kore 87 Ti W is a refreshing ski in this range, 
        offering high-level performance with two sheets of metal and a 
        wonderfully versatile all-mountain shape and style. As the 
        narrowest of the Kore W series of skis, this is the most 
        all-mountain oriented, even bordering on wider front side. Thanks 
        to a shorter turn radius, two sheets of metal, and a smooth and 
        quiet character, these skis can handle all resort terrain and snow 
        types save for the deepest of days. If you’re looking for a light, 
        easy to turn ski that has a strong and damp character, this is a 
        great place to be.</p>
        <img src="Images/KoreTi87.jpeg" alt="Head Kore Ti 87">

        <button onclick="skiingability()">Start Again</button>
    `;
}

// ADVANCED - ALL MOUNTAIN
function Aallmountain() {
    quiz.innerHTML = `
        <h3>What is your style of all mountain?</h3>
        <button onclick="AAcruisy()">Cruisy</button>
        <button onclick="AAaggressive()">Aggressive</button>
    `;
}

function AAcruisy() {
    quiz.innerHTML = `
        <h3>Reccommended skis for you:</h3>

        <h4>Rossignol Rallybird Soul 92</h4>
        <p>Effortless, surfy and versatile, the women's Rossignol Rallybird 
        Soul 92 skis blend freeride freedom and everyday control for 
        exploring the entire mountain. Our Air Tip increases flotation in 
        soft snow and enhances the ski's the overall surfy feel. From open 
        bowls to tree stashes and ripping around the piste, a just-right 
        blend of rocker and sidecut with a 92mm waist sets you up to do it 
        all. The Rallybird Soul 92 is ready to carve, slash, air and lay 
        tracks anywhere the snow leads you. Agile and Surfy Twin Rocker 
        makes for a playful, surfy ride that can smear and grip as needed 
        through varied snow and terrain Playful Performance Air Tip 
        technology reduces swing weight for enhanced maneuverability 
        without compromising on performance Fluid Turns, Confident Grip 
        Progressive Sidecut creates the perfect shape for a playful, fluid 
        feel that drifts, smears and carves through all terrain and snow 
        Smooth, Confident Control VAS reduces vibrations for increased 
        comfort and confidence Balanced Weight and Flex Fiberglass 
        reinforced construction balances weight, flex and responsiveness 
        for all-around skiability Maximum Edge Control Rectangular Sidewall 
        construction delivers race-proven grip, precision and power 
        Lightweight Agility, Sustainably Minded FSCï¿½ certified Paulownia 
        Wood Core reduces weight by 30% for enhanced agility, 
        maneuverability and control using materials that help reduce the 
        environmental impact of the product life cycle All-Conditions Glide 
        Sintered Black Base for all-conditions glide and durability</p>
        <img src="Images/RallybirdSoul92.webp" alt="Rossignol Rallybird Soul 92">

        <h4>Volkl Mantra 88</h4>
        <p>Völkl describes the Mantra 88 as an all-mountain freeride ski for 
        powerful turns on and off piste. Its medium waist is intended to 
        balance versatility and agility across snow conditions. The 2026 
        model features Tailored Carbon Tips and a 3D Radius Sidecut, 
        designed to improve dynamics, turn variety and manoeuvrability.</p>
        <img src="Images/Mantra88.webp" alt="Volkl Mantra 88">

        <h4>Head e-Super Joy</h4>
        <p>Expert women who love skiing athletically will find a match in 
        the Super Joy. At 75 mm underfoot, and with a new design that 
        lengthens the sidecut, the Super Joy transitions easily from long 
        to short turns. HEAD focuses on managing weight distribution by 
        using carbon in the poplar core, resulting in a lightweight yet 
        strong all-mountain ski. Better Balance technology employs a 
        constant ramp angle to put women in an optimum position for easy 
        turn initiation and stability on the slopes.</p>
        <img src="Images/eSuperJoy.webp" alt="Head e-Super Joy">

        <button onclick="skiingability()">Start Again</button>
    `;
}

function AAaggressive() {
    quiz.innerHTML = `
        <h3>Reccommended skis for you:</h3>

        <h4>Nordica Santa Ana 97</h4>
        <p>Nordica describes the Santa Ana 97 as an all-mountain ski. Its 
        Terrain Specific Metal (TSM) construction combines a tailored metal 
        layer with an elastomer layer and a full wood core, designed to 
        deliver a smooth and stable ride. The 97 mm waist provides a balance 
        for skiing across groomed snow and softer conditions.</p>
        <img src="Images/SantaAna97.webp" alt="Nordica Santa Ana 97">

        <h4>Dynastar M-Pro</h4>
        <p>All in. All the time. The Dynastar M-Pro 100 Ti skis are your 
        ticket to explore from first chair to final lap. Fresh tracks in 
        the morning, powder stash hunting in the afternoon and high-speed 
        arcs on the piste come naturally for this playful freeride ski.</p>
        <img src="Images/M-Pro.webp" alt="Dynastar M-Pro">

        <h4>Blizzard Black Pearl 94</h4>
        <p>Blizzard's Black Pearl range is designed as an all-mountain 
        collection for women. The 94 mm model is the wider option in the 
        range, intended to offer added versatility in softer and variable 
        snow while remaining suitable for resort skiing. Construction 
        details vary by model year.</p>
        <img src="Images/BlackPearl94.webp" alt="Blizzard Black Pearl 94">

        <button onclick="skiingability()">Start Again</button>
    `;
}

// ADVANCED - FREESTYLE
function Afreestyle() {
    quiz.innerHTML = `
        <h3>What type of freeride do you do?</h3>
        <button onclick="AFpark()">Park</button>
        <button onclick="AFmoguls()">Moguls</button>
    `;
}

function AFpark() {
    quiz.innerHTML = `
        <h3>Reccommended skis for you:</h3>

        <h4>K2 Factory Omen 85</h4>
        <p>K2 places the Omen 85 in its freestyle ski range. The model uses 
        an all-terrain twin shape intended for park-oriented skiing while 
        remaining usable around the mountain. K2's published catalogue lists 
        a wood core and carbon-braided construction elements; specifications 
        can vary by model year.</p>
        <img src="Images/Omen85.webp" alt="K2 Factory Omen 85">

        <h4>Majesty Vesper</h4>
        <p>Vesper skis have soft and forgiving flex, they are also lightweight 
        and responsive thanks to poplar and ash woodcore. While rocker 
        supports effortless turn initiation and nose butters, camber 
        construction delivers stability and perfect edge grip. Semi-hybrid 
        construction supports and absorbs the impacts of flat landings and 
        choppy terrain. Vesper skis are directional freestyle skis that are 
        fun, easy and comfortable to handle. Additionally, they are equipped 
        with semi-cap construction and durable corrund top sheet for 
        improved performance and scratch resistance.</p>
        <img src="Images/Vesper.jpg" alt="Majesty Vesper">

        <h4>K2 Reckoner 92</h4>
        <p>K2 places the Reckoner 92 in its freestyle range. Its all-terrain 
        twin shape is designed for playful skiing and freestyle use while 
        remaining versatile across the resort. K2's catalogue lists a 92 mm 
        waist and a wood-core construction; details vary by model year.</p>
        <img src="Images/Reckoner92.webp" alt="K2 Reckoner 92">

        <button onclick="skiingability()">Start Again</button>
    `;
}

function AFmoguls() {
    quiz.innerHTML = `
        <h3>Reccommended skis for you:</h3>

        <h4>Rossignol Hero Mogul Accelere</h4>
        <p>Rossignol undisputedly has the best mogul skiers on the planet. 
        Perrine Laffont and Ben Cavet demand the best from their skis. From 
        our intense work with our world-class athletes, Rossignol has 
        developed for juniors the Hero Mogul Accelere. Light, agile and 
        lively to meet the needs and demands of all junior bump skiers.</p>
        <img src="Images/HeroMogulAccelere.jpeg" alt="Rossignol Hero Mogul Accelere">

        <h4>Head Kore Ti 87</h4>
        <p>The 2026 Head Kore 87 Ti W is a refreshing ski in this range, 
        offering high-level performance with two sheets of metal and a 
        wonderfully versatile all-mountain shape and style. As the 
        narrowest of the Kore W series of skis, this is the most 
        all-mountain oriented, even bordering on wider front side. Thanks 
        to a shorter turn radius, two sheets of metal, and a smooth and 
        quiet character, these skis can handle all resort terrain and snow 
        types save for the deepest of days. If you’re looking for a light, 
        easy to turn ski that has a strong and damp character, this is a 
        great place to be.</p>
        <img src="Images/KoreTi87.jpeg" alt="Head Kore Ti 87">

        <button onclick="skiingability()">Start Again</button>
    `;
}

// ADVANCED - FREERIDE
function Afreeride() {
    quiz.innerHTML = `
        <h3>What do you enjoy most about freeride skiing?</h3>
        <button onclick="powder()">Powder</button>
        <button onclick="trees()">Trees</button>
        <button onclick="steepterrain()">Steep terrain</button>
        <button onclick="backcountry()">Backcountry</button>
    `;
}

function powder() {
    quiz.innerHTML = `
        <h3>Reccommended skis for you:</h3>

        <h4>K2 Mindbender 106C</h4>
        <p>K2 places the Mindbender 106C in its freeride/all-mountain range. 
        The 106 mm waist is intended to provide flotation in softer snow 
        while remaining versatile across variable terrain. Its carbon-focused 
        construction aims to reduce weight while retaining responsiveness; 
        confirm the model year for exact specifications.</p>
        <img src="Images/Mindbender106C.webp" alt="K2 Mindbender 106C">

        <h4>Salomon QST/Blank</h4>
        <p>Salomon's QST Blank is a freeride ski designed for advanced and 
        expert skiers. The current S/LAB QST Blank has a 112 mm waist and is 
        described by Salomon as a stable, responsive ski for charging down 
        the fall line and handling varied terrain. Check the exact model 
        year because QST Blank specifications have changed between 
        generations.</p>
        <img src="Images/QSTBlank.webp" alt="Salomon QST/Blank">

        <h4>Atomic Maven 103CTI</h4>
        <p>Atomic describes the Maven 103 CTI as a freeride-oriented 
        all-mountain ski for skiers who want to charge and explore new 
        terrain. Its Power Woodcore combines ash and poplar for stability 
        and reduced vibration. CTI Powered combines carbon and titanal for 
        a balance of agility and strength, while the All Mountain Rocker and 
        HRZN 3D tip are designed to improve float in deeper snow.</p>
        <img src="Images/Maven103CTI.avif" alt="Atomic Maven 103CTI">

        <button onclick="skiingability()">Start Again</button>
    `;
}

function trees() {
    quiz.innerHTML = `
        <h3>Reccommended skis for you:</h3>

        <h4>Black Crows Atris</h4>
        <p>Black Crows describes the Atris as an everyday big-mountain ski 
        that is accessible and versatile. Its 105 mm waist is designed to 
        provide flotation in powder while remaining composed in a range of 
        conditions. The double rocker supports manoeuvrability and pivoting, 
        while camber underfoot balances stability and handling.</p>
        <img src="Images/Atris.jpeg" alt="Black Crows Atris">

        <h4>Rossignol Savage Free</h4>
        <p>The 2026 Rossignol Savage Free Open Skis are a versatile, light, 
        and lively all-mountain ski that performs well in any snow 
        conditions. With stout sandwich construction, a PEFC™ Poplar Core, 
        and a Titanal Beam, these skis provide top-tier performance. Plus, 
        the classic animal print graphic proves that some styles are 
        timeless.</p>
        <img src="Images/SavageFree.jpeg" alt="Rossignol Savage Free">

        <h4>Blizzard Shiva 9</h4>
        <p>Blizzard places the Sheeva/Shiva family in its women's freeride 
        range. The current collection lists Sheeva models, including the 
        Sheeva 9, as freeride skis. Because the Shiva naming and construction 
        have changed across seasons, check the exact model year before 
        publishing technical details.</p>
        <img src="Images/Shiva9.webp" alt="Blizzard Shiva 9">

        <button onclick="skiingability()">Start Again</button>
    `;
}

function steepterrain() {
    quiz.innerHTML = `
        <h3>Reccommended skis for you:</h3>

        <h4>Atomic Maven 103 CTI</h4>
        <p>Atomic describes the Maven 103 CTI as a freeride-oriented 
        all-mountain ski for skiers who want to charge and explore new 
        terrain. Its Power Woodcore combines ash and poplar for stability 
        and reduced vibration. CTI Powered combines carbon and titanal for 
        a balance of agility and strength, while the All Mountain Rocker and 
        HRZN 3D tip are designed to improve float in deeper snow.</p>
        <img src="Images/Maven103CTI.avif" alt="Atomic Maven 103 CTI">

        <h4>Blizzard Shiva 10</h4>
        <p>Blizzard places the Sheeva/Shiva family in its women's freeride 
        range. The current collection lists Sheeva models, including the 
        Sheeva 10, as freeride skis. Because the Shiva naming and construction 
        have changed across seasons, check the exact model year before 
        publishing technical details.</p>
        <img src="Images/Shiva10.jpeg" alt="Blizzard Shiva 10">

        <h4>Black Diamond Impulse 98</h4>
        <p>The Black Diamond Impulse 98 Ti ski is designed for freeride 
        enthusiasts who want to maximise their fun on various types of snow. 
        With its robust construction and advanced technical features, it 
        offers a dynamic and powerful skiing experience, whether in powder 
        or on harder snow and more challenging terrain.</p>
        <img src="Images/Impulse98.jpeg" alt="Black Diamond Impulse 98">

        <button onclick="skiingability()">Start Again</button>
    `;
}

function backcountry() {
    quiz.innerHTML = `
        <h3>Reccommended skis for you:</h3>

        <h4>Armada Locator 104</h4>
        <p>Armada's Locator 104 is a backcountry touring ski designed to 
        balance low weight on the ascent with capable downhill performance. 
        The 104 mm waist is intended to provide flotation in soft snow, 
        while its touring-focused construction helps reduce weight for 
        climbing. Check the relevant model-year specifications for exact 
        materials and weight.</p>
        <img src="Images/Locator104.webp" alt="Armada Locator 104">

        <h4>Volkl Rise Beyond 96</h4>
        <p>Völkl describes the Rise Beyond 96 as a powder-oriented touring 
        ski. Its tip rocker is designed to provide flotation in soft snow, 
        while the hybrid multi-layer wood core and carbon tip help keep the 
        ski light for ascents. The 3D Radius Sidecut is intended to support 
        both wide powder turns and agile turns in narrow terrain.</p>
        <img src="Images/RiseBeyond96.webp" alt="Volkl Rise Beyond 96">

        <h4>Elan Ripstick 94</h4>
        <p>The Ripstick 94 for women is the queen of the mountain, built 
        to take on any condition from manicured groomers to slushy bumps 
        to surprise powder days. Its especially lightweight Tubelite 
        Woodcore reinforced with carbon rods, UD carbon edge bands, and 
        flax fibre delivers powerful rebound, torsional rigidity, and 
        natural vibration dampening for a smooth, responsive ride that 
        minimises fatigue and maximises time on the slopes. The Amphibio 
        profile integrates both rocker and camber into dedicated left and 
        right skis, combining a cambered inside edge for precision and 
        edge grip with a rockered outside edge for forgiveness and smooth 
        turn transitions. Versatile enough to excel both on and off trail, 
        the Ripstick 94 W redefines all-mountain skiing for women who want 
        one ski to handle everything the resort throws their way.</p>
        <img src="Images/Ripstick94.webp" alt="Elan Ripstick 94">

        <button onclick="skiingability()">Start Again</button>
    `;
}

// START THE QUIZ
skiingability();