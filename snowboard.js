const quiz = document.getElementById("snowboardquiz");

function snowboardingability() {

    quiz.innerHTML = `
        <h3>What is your level of snowboarding?</h3>

        <button onclick="Beginner()">Beginner</button>
        <button onclick="Intermediate()">Intermediate</button>
        <button onclick="Advanced()">Advanced</button>
    `;
}


//  Beginner
    function Beginner() {

        quiz.innerHTML = `
            <h3>Reccommended snowboards for you:</h3>

            <h4>Burton Yeasayer Flying V</h4>
            <p>A friendly, fun, and floaty ride that's always up for anything.<br>
            From unexplored peaks to your favorite parks, the women's Burton Yeasayer 
            Snowboard tames anything that stands in your way. The board's Flying V profile 
            provides a relaxed and floaty feel, while a true twin design keeps you in control 
            no matter which way you point it. A laundry list of features all work together to 
            ensure the ride is as friendly as it is fun, with an energetic core and scoop tip 
            and tail, which turn up the edges for a catch-free feel whether you're surfing 
            through knee deep pow or sliding a box in the park.</p>
            <img src="Images/Yeasayer.webp" alt="Burton Yeasayer Snowboard">

            <h4>Feelgood Flying V</h4>
            <p>The Flying V version of the iconic Feelgood adds extra playfulness to this 
            spirited all-mountain classic.<br>
            When you want every advantage for chasing lines and exploring natural hits, the
            women's Burton Feelgood Snowboard sets you up for success. Backed by Burton rider 
            Kelly Clark, it boasts a unique shape, matched with rocker-infused freedom of 
            Flying and positively powerful pop for Ferrari-like handling. Directional shaping 
            navigates easily through variable conditions, making this our number one board 
            for conquering all terrain.</p>
            <img src="Images/Feelgood.webp" alt="Burton Feelgood Snowboard">

            <h4>GNU Ladies Choice</h4>
            <p>The newly updated tip and tail shape Ladies Choice has secured its place in 
            snowboarding history with over a decade of collaboration with the most decorated 
            female snowboarder, Jamie Anderson. Her balance between progression and 
            playfulness is reflected in the progressive asym technology and a C2 camber 
            hybrid contour, perfectly tuned for freestyle flow. Bringing Jamie's eco-minded 
            sensibility to our construction materials and process, the Ladies Choice is built 
            with a sustainably harvested FSC certified wood core and water-based inks. Eco 
            sublimated graphics by Sarah King continue the decade + partnership with this 
            all-mountain freestyle work of art. Ride the Ladies Choice and channel some JA 
            magic!</p>
            <img src="Images/LadiesChoice.webp" alt="GNU Ladies Choice Snowboard">


            <button onclick="snowboardingability()">Start Again</button>
        `;
    }

//-------------------------------------------------------------------------------------------

    //  Intermediate

    function Intermediate() {

        quiz.innerHTML = `
            <h3>What type of snowboarding do you do?</h3>

            <button onclick="Icarving()">Carving</button>
            <button onclick="Iallmountain()">All Mountain</button>
            <button onclick="Ifreestyle()">Freestyle/Freeride</button>
        `;
    }


        //  Carving
        function Icarving() {

            quiz.innerHTML = `
                <h3>What is your style of carving?</h3>

                <button onclick="ICprogressing()">Progressing</button>
                <button onclick="ICaggressive()">Aggressive</button>
            `;
        }


            //  Progressing
                function ICprogressing() {

                    quiz.innerHTML = `
                        <h3>Reccommended snowboards for you:</h3>

                        <h4>Burton Rewind</h4>
                        <p>A true twin snowboard with plenty of pop for powerful freestyle 
                        riding.<br>
                        With an extra poppy flex, the souped-up Burton Rewind Snowboard is 
                        for riders who charge hard and like a forgiving freestyle attitude. 
                        The flat, ultra-thin, and skate-like profile improves the ride, and 
                        encourages progression thanks to Filet-O-Flex design, yet it still 
                        rips harder than any soft board out there. It's the board that's 
                        always ready to give without sending you for a ride. </p>
                        <img src="Images/Rewind.webp" alt="Burton Rewind Snowboard">

                        <h4>Capita Paradise</h4>
                        <p>These perfectly balanced all-terrain freeride boards are stable 
                        and supportive – yet forgiving and easy to ride at the same time. 
                        Featuring camber underfoot for controlled turns and a rockered nose 
                        and tail that floats in powder, the Paradise is the perfect board to 
                        cruise side-country powder in the morning and laps through the park 
                        in the afternoon.<br>
                        The Paradise delivers unmatched versatility in a lightweight package 
                        with the Multizone Dual Core™ at its heart. The Paradise solidifies 
                        its place as the go-to series for intermediate resort riders looking 
                        to boost their riding to the next level. </p>
                        <img src="Images/Paradise.webp" alt="Capita Paradise Snowboard">
                        
                        <h4>Yes Basic</h4>
                        <p>The Women’s Basic snowboard: a perfect blend of performance and 
                        design tailored to women’s size and weight. With a narrower, softer, 
                        and more forgiving blended side cut, this award-winning board 
                        delivers user-friendly functionality. The Women’s Basic guarantees 
                        an unparalleled snowboarding experience, whether you’re a pro or just 
                        starting out. beready for an incredible adventure on the slopes and 
                        unlock your full potential with this exceptional snowboard. Elevate 
                        your snowboarding experience with the Women’s Basic - your gateway to 
                        the ultimate ride.</p>
                        <img src="Images/Basic.webp" alt="Yes Basic Snowboard">

                        <button onclick="snowboardingability()">Start Again</button>
                    `;
                }


            //  Aggressive
                function ICaggressive() {

                    quiz.innerHTML = `
                        <h3>Reccommended snowboards for you:</h3>

                        <h4>Yes Hell Yes</h4>
                        <p> This board performs on groomers, side hits, and in the park, 
                        floating through powder and chatter. It’s a true quiver killer for 
                        those who don’t want to compromise during their riding day.</p>
                        <img src="Images/HellYes.webp" alt="Yes Hell Yes Snowboard">

                        <h4>Nitro Fate</h4>
                        <p>If you are looking for one board to do it all, the award-winning 
                        Fate is exactly what you need. Years of innovation, testing, and 
                        feedback from pros to local heroes have made it the most trusted and 
                        versatile all-terrain snowboard on the market. With its mellow 
                        sidecut and versatile flex pattern, the Fate will give you the 
                        feeling that anything is possible – Fate is in your hands! </p>
                        <img src="Images/Fate.webp" alt="Nitro Fate Snowboard">

                        <h4>Jones Dream Weaver</h4>
                        <p>Whether you're out in deep winter storms or lapping in the spring 
                        sun, the Dream Weaver 2.0 shows up for every day of the season. 
                        Intuitive and predictable, it flows between turns, inspires 
                        confidence across different terrain and rewards you with incredible 
                        float when the snow’s coming down hard. The Dream Weaver 2.0 makes 
                        an ideal daily driver for riders who go out whatever the forecast, 
                        but saves its best for deep days.</p>
                        <img src="Images/DreamWeaver.webp" alt="Jones Dream Weaver Snowboard">

                        <button onclick="snowboardingability()">Start Again</button>
                    `;
                }

//-------------------------------------------------------------------------------------------
        //  All Mountain
        function Iallmountain() {

            quiz.innerHTML = `
                <h3>What is your style of all mountain riding?</h3>

                <button onclick="IAcruisy()">Cruisy</button>
                <button onclick="IAaggressive()">Aggressive</button>
            `;
        }

            //  Cruisy
                function IAcruisy() {

                    quiz.innerHTML = `
                        <h3>Reccommended snowboards for you:</h3>

                        <h4>Yes Basic</h4>
                        <p>The Women’s Basic snowboard: a perfect blend of performance and 
                        design tailored to women’s size and weight. With a narrower, softer, 
                        and more forgiving blended side cut, this award-winning board 
                        delivers user-friendly functionality. The Women’s Basic guarantees 
                        an unparalleled snowboarding experience, whether you’re a pro or just 
                        starting out. beready for an incredible adventure on the slopes and 
                        unlock your full potential with this exceptional snowboard. Elevate 
                        your snowboarding experience with the Women’s Basic - your gateway to 
                        the ultimate ride.</p>
                        <img src="Images/Basic.webp" alt="Yes Basic Snowboard">

                        <h4>Nitro Mystique</h4>
                        <p>The Mystique is designed for those shredders looking for a hybrid
                        rocker board that offers a forgiving, friendly, catch-free ride and 
                        is engineered with top-shelf technologies to help them turn every day 
                        into the best day ever on the mountain. The Mystique´s Gullwing 
                        Rocker allows for effortless progression and better float on those 
                        deep pow days in between while providing consistent pop and support 
                        on every run.</p>
                        <img src="Images/Mystique.webp" alt="Nitro Mystique Snowboard">

                        <h4>Capita Space Metal Fantasy</h4>
                        <p>The award winning Space Metal is widely regarded as one of the best 
                        women’s park boards on the market. However, to be fair, labeling it 
                        as a park board severely understates its potential.<br>
                        We present it as a park series for classification purposes, but in 
                        truth, it’s much more than that. The Space Metal is fun for carving 
                        around the slopes, playing on features in the park, and even floats 
                        ridiculously well in powder.<br>
                        This very forgiving reverse camber shape provides a fun experience 
                        for beginner to intermediate riders looking to expedite the learning
                        curve and take their riding to the next level on many different types 
                        of terrain.<br>
                        The Space Metal excels in a variety of resort and freestyle terrain 
                        with the tried and trusted combination of a Dual Core™ and Special 
                        Blend Fiberglass + Magic Bean™ Resin.</p>
                        <img src="Images/SpaceMetal.webp" alt="Capita Space Metal Fantasy Snowboard">

                        <button onclick="snowboardingability()">Start Again</button>
                    `;
                }


            //  Aggressive
                function IAaggressive() {

                    quiz.innerHTML = `
                        <h3>Reccommended snowboards for you:</h3>

                        <h4>Nitro Fate</h4>
                        <p>If you are looking for one board to do it all, the award-winning 
                        Fate is exactly what you need. Years of innovation, testing, and 
                        feedback from pros to local heroes have made it the most trusted and 
                        versatile all-terrain snowboard on the market. With its mellow 
                        sidecut and versatile flex pattern, the Fate will give you the 
                        feeling that anything is possible – Fate is in your hands! </p>
                        <img src="Images/Fate.webp" alt="Nitro Fate Snowboard">

                        <h4>Salomon Rumble Fish</h4>
                        <p>The women’s one-board solution, from powder days to park laps.<br>
                        The Rumble Fish is our ride anything solution for women, fusing our 
                        most popular powder and freestyle designs. Rock Out Camber delivers 
                        loads of freestyle versatility and easy turn initiation, while the 
                        directional twin shape provides added buoyancy in deep snow. 
                        Quadralizer sidecut and bamboo construction allow for a lively, 
                        nimble ride all over.</p>
                        <img src="Images/Rumble_Fish.webp" alt="Salomon Rumble Fish Snowboard">

                        <h4>Yes Hell Yes</h4>
                        <p> This board performs on groomers, side hits, and in the park, 
                        floating through powder and chatter. It’s a true quiver killer for 
                        those who don’t want to compromise during their riding day.</p>
                        <img src="Images/HellYes.webp" alt="Yes Hell Yes Snowboard">

                        <button onclick="snowboardingability()">Start Again</button>
                    `;
                }

//-------------------------------------------------------------------------------------------

        //  Freestyle/Freeride
        function Ifreestyle() {

            quiz.innerHTML = `
                <h3>What type of riding do you do?</h3>

                <button onclick="Ipark()">Park</button>
                <button onclick="Ifreeride()">Freeride</button>
            `;
        }

            //  Park
                function Ipark() {

                    quiz.innerHTML = `
                        <h3>Reccommended snowboards for you:</h3>

                        <h4>Capita Birds of a Feather</h4>
                        <p>The Birds of a Feather is a women’s specific technical adaptation 
                        of the best-selling D.O.A. series. It delivers the legendary 
                        performance of one of the world's most coveted snowboards, refined 
                        with flex patterns and geometric sizing to cater to women's specific 
                        riding preferences.<br>
                        The Birds of a Feather is a versatile, all-encompassing snowboard, 
                        ready to revolutionize your snowboarding experience and empower you 
                        to ride anywhere and conquer anything.</p>
                        <img src="Images/BirdsOfAFeather.webp" alt="Capita Birds of a Feather Snowboard">
                        
                        <h4>Jones Rally Cat</h4>
                        <p>The Jones Womens Rally Cat is the perfect all-mountain directional 
                        twin, perfect for casual cruising and freestyle fun in the park. With 
                        its friendly shape and easy-to-turn manoeuvrability thanks to the 3D 
                        contour base, this directional twin is perfect for progressing your 
                        skills to the next level and the full camber profile with directional 
                        twin shape and softer flex offers you the perfect combination of tech 
                        to handle any terrain in front of you.</p>
                        <img src="Images/RallyCat.webp" alt="Jones Rally Cat Snowboard">

                        <h4>Nitro Optysim</h4>
                        <p>The Optisym is for all snowboarders who enjoy fun, low-impact, 
                        buttery, friendly freestyle snowboarding: Turning everything into a 
                        feature, even a groomed run or the knuckles of park landings, capable 
                        of switching from air time tricks to flat ground tricks within 
                        seconds. The Optisym´s asymmetrical twin shape and high-speed 
                        sintered base provide a turning experience that will keep you hyped 
                        from the first to the last chair, no matter the conditions!</p>
                        <img src="Images/Optisym.webp" alt="Nitro Optysim Snowboard">

                        <button onclick="snowboardingability()">Start Again</button>
                    `;
                }


            //  Freeride
                function Ifreeride() {

                    quiz.innerHTML = `
                        <h3>Reccommended snowboards for you:</h3>

                        <h4>Sims Directonal Nub</h4>
                        <p>The Sims Nub Snowboard plays a clever trick, looking directional at 
                        first glance but riding true twin where it counts, thanks to its 
                        progressive sidecut and balanced shape. A long nose keeps it floating 
                        easy in powder, while traditional camber brings the snap and grip to 
                        keep things lively when the terrain gets serious. It’s the kind of 
                        board that likes to keep a secret, until the snow gets deep and the 
                        turns start speaking for themselves.</p>
                        <img src="Images/DirectionalNub.webp" alt="Sims Directional Nub Snowboard">

                        <h4>Capita Navigator</h4>
                        <p>Riding powder is like hiking into a backcountry camping trip. Once 
                        you’re past the trailhead, if you have the right gear, there’s nothing 
                        better. If you packed the wrong kit, there’s nothing worse. The 
                        Navigator is your fire starter; it is your unwavering compass. It is 
                        essential to the experience. This powder-annihilating series features 
                        a parabolic sidecut and a sinking tapered tail to swim through the 
                        soft stuff while the wide-frame rockered nose naturally floats above 
                        deep snow. The resulting shape transforms tiring powder days into 
                        emotionally fulfilling outdoor experiences.<br>
                        The Navigator achieves its playful nature that riders worldwide have 
                        grown to love from its Hover Core™ with Technora™ Flax Boosters. For 
                        2025, The Navigator series has also been upgraded with a new 
                        HyperDrive™ high speed sintered base.</p>
                        <img src="Images/Navigator.webp" alt="Capita Navigator Snowboard">
                        N
                        <h4>Jones Dreamweaver</h4>
                        <p>The playful charger<br>
                        Ideal for all-mountain freeriding and freestyle<br>
                        The redesigned Dream Weaver 2.0 is a high performance all-mountain 
                        board with a friendly flex that's built for all-mountain cruising, 
                        carving and freestyle.</p>
                        <img src="Images/Dreamweaver.jpg" alt="Jones Dreamweaver Snowboard">

                        <button onclick="snowboardingability()">Start Again</button>
                    `;
                }

//-------------------------------------------------------------------------------------------
    
    //  Advanced
    function Advanced() {

        quiz.innerHTML = `
            <h3>What type of snowboarding do you do?</h3>

            <button onclick="carving()">Carving</button>
            <button onclick="Aallmountain()">All Mountain</button>
            <button onclick="Afreestyle()">Freestyle</button>
            <button onclick="Afreeride()">Freeride</button>
        `;
    }


        //  Carving
        function carving() {

            quiz.innerHTML = `
                <h3>What is your style of carving?</h3>

                <button onclick="ACcruisy()">Cruisy</button>
                <button onclick="ACaggressive()">Aggressive</button>
                <button onclick="racingType()">Racing</button>
            `;
        }

            //  Cruisy
                function ACcruisy() {

                    quiz.innerHTML = `
                        <h3>Reccommended snowboards for you:</h3>

                        <h4>Jones Stratos</h4>
                        <p>Freeride by shape but all-mountain by nature, the Women’s Stratos 
                        is our Pro Team’s number one daily driver from storm cycles to spring 
                        sessions. On deep days it floats like a dedicated powder craft, but 
                        its short sidecut and lively flex are full of dynamic energy to stay 
                        out long after the mountain’s tracked. Proven from backcountry 
                        descents to banked slaloms podiums, there’s always a new line to ride 
                        when you’re on the Women’s Stratos.</p>
                        <img src="Images/Stratos.webp" alt="Jones Stratos Snowboard">

                        <h4>Rome Ravine</h4>
                        <p>Built for riders who demand a versatile and reliable board for 
                        all-mountain exploration, powder day dominance and season long 
                        performance. The Women’s Ravine features a 3D nose, taper and a 
                        medium flex profile to inspire confidence no matter the conditions.</p>
                        <img src="Images/Ravine.webp" alt="Rome Ravine Snowboard">

                        <h4>Jones Freecarver 6000s</h4>
                        <p>Control every phase of the arc with pinpoint precision on the 
                        Freecarver 6000s – the razor-sharp carving specialist for tight turns 
                        in close quarters. Engineered around a full camber and compact 
                        six-meter sidecut, it bites into corduroy and rails through turns with 
                        exceptional grip. Race, boardercross and freeride DNA, translated into 
                        the most agile carving board we make, the Freecarver 6000s gives riders 
                        the ultimate on-piste edge.</p>
                        <img src="Images/Freecarver.webp" alt="Jones Freecarver 6000s Snowboard">
                        
                        <button onclick="snowboardingability()">Start Again</button>
                    `;
                }


            //  Aggressive
                function ACaggressive() {

                    quiz.innerHTML = `
                        <h3>Reccommended snowboards for you:</h3>

                        <h4>Burton Counterbalance</h4>
                        <p>A true quiver killer, the Burton Counterbalance Snowboard is cozy 
                        popping side hits across the mountain, capable in deep powder stashes 
                        and even enjoys taking park laps. It achieves this rare balance with a 
                        directional shape and snappy flex that drives and floats through turns 
                        on groomers and deep days alike. Gender-neutral sizing means just about 
                        anyone with an appetite for achieving balance is free to find it here.</p>
                        <img src="Images/Counterbalance.webp" alt="Burton Counterbalance Snowboard">

                        <h4>Jones Howler</h4>
                        <p>Unleash the Howler and turn technical terrain into your freestyle 
                        playground. Designed by Victor de Le Rue and Elena Hight, the 
                        Howler’s high-octane fusion of freeride and freestyle performance 
                        has become a definitive board for a global collective of riders 
                        who refuse to be boxed into categories. Charge backcountry spines, 
                        stomp huge airs with authority and rail powerful turns wherever 
                        you point the Howler.</p>
                        <img src="Images/Howler.webp" alt="Jones Howler Snowboard">

                        <h4>Jones Airheart</h4>
                        <p>The Airheart 2.0 is a performance all-mountain board for banking 
                        turns, getting airborne and pitching into the fall line with full 
                        commitment. This precision-focused directional twin features a full 
                        camber profile and responsive, lightweight core to inspire Mach speed 
                        descents and g-force turns with steely composure. Lock onto every line, 
                        clear for take off and landing, and push your riding to new heights with 
                        the Airheart 2.0.</p>
                        <img src="Images/Airheart.webp" alt="Jones Airheart Snowboard">

                        <button onclick="snowboardingability()">Start Again</button>
                    `;
                }

//-------------------------------------------------------------------------------------------
            // Racing
            function racingType() {

                quiz.innerHTML = `
                    <h3>What type of racing do you do?</h3>

                    <button onclick="Alpine()">Alpine</button>
                    <button onclick="BoardX()">BoardX</button>
                    <button onclick="BankedSlalom()">Banked Slalom</button>
                `;
            }

                //  Alpine
                function Alpine() {

                    quiz.innerHTML = `
                        <h3>Reccommended snowboards for you:</h3>

                        <h4>Kessler The Alpine</h4>
                        <p>No other board has won more medals or titles at international 
                        events than THE ALPINE. Snowboarding professionals around the world 
                        highly rate the steady edge grip and the control provided in all 
                        conditions due to the Kessler Shape Technology. THE ALPINE provides 
                        easy handling when competing and racing, as well as during freestyle 
                        carving on icy terrain. Feel at ease from the very first turn, no 
                        matter what level you are at. Ambitious carvers love the THE ALPINE!</p>
                        <img src="Images/TheAlpine.png" alt="Kessler The Alpine Snowboard">

                        <h4>Kessler X-Carve</h4>
                        <p>X-CARVE, the new board from Kessler‘s range of snowboards, 
                        provides for even faster and more precise carving. The proven 
                        construction of Kessler snowboards with multiple titanium layers 
                        ensures that the board rides smoothly and has torsional stiffness. 
                        A progressively decreasing sidecut in the tail area paired with the 
                        modern design at the front raises the carving experience to a new 
                        level. The board‘s width and 6x2 inserts give you increased 
                        flexibility to achieve your optimal binding setting.</p>
                        <img src="Images/X-Carve.png" alt="Kessler X-Carve Snowboard">

                        <button onclick="snowboardingability()">Start Again</button>
                    `;
                }


                //  Board X
                function BoardX() {

                    quiz.innerHTML = `
                        <h3>Reccommended snowboards for you:</h3>

                        <h4>Kessler The Cross</h4>
                        <p>It is amazing how easy carving can be with a soft boot and 
                        surprising how smoothly THE CROSS handles in all types of conditions. 
                        THE CROSS is the ultimate all-round board concept from the Kessler 
                        snowboard range and has made its mark in the world of snowboarding! 
                        Gold medals at Winter Olympic Games and at World Championships were 
                        won with THE CROSS in Boarder-X.</p>
                        <img src="Images/TheCross.png" alt="Kessler The Cross Snowboard">

                        <h4>Kessler X-Carve</h4>
                        <p>X-CARVE, the new board from Kessler‘s range of snowboards, 
                        provides for even faster and more precise carving. The proven 
                        construction of Kessler snowboards with multiple titanium layers 
                        ensures that the board rides smoothly and has torsional stiffness. 
                        A progressively decreasing sidecut in the tail area paired with the 
                        modern design at the front raises the carving experience to a new 
                        level. The board‘s width and 6x2 inserts give you increased 
                        flexibility to achieve your optimal binding setting.</p>
                        <img src="Images/X-Carve.png" alt="Kessler X-Carve Snowboard">

                        <h4>Donek Saber SBX</h4>
                        <p>In the last 3 years no other SBX board has been on the podium at 
                        USASA nationals more. The Donek Saber can claim a Gold, Silver and 
                        Bronze metal at Sochi under the feet of US Paralympic team members 
                        Evan Strong, Mike Shea, and Amy Purdy.</p>
                        <img src="Images/SaberSBX.webp" alt="Donek Saber SBX Snowboard">
                        <button onclick="snowboardingability()">Start Again</button>
                    `;
                }


                //  Banked Slalom
                function BankedSlalom() {

                    quiz.innerHTML = `
                        <h3>Reccommended snowboards for you:</h3>

                        <h4>Nitro Banker</h4>
                        <p>Start clearing space on your top shelf! The Banker will bring 
                        home some serious banked slalom hardware. Its directional 
                        all-mountain shape will help you fly through carved turns on and 
                        off the groomed runs. We have expanded the size run, making it 
                        the most versatile board for men and women in the Quiver Series. 
                        This is Bryan’s, Tommy’s, Christy’s, and the Nitro Team‘s 
                        favorite ATV Quiver board for a reason.</p>
                        <img src="Images/Banker.webp" alt="Nitro Banker Snowboard">

                        <h4>GNU Banked Country</h4>
                        <p>The ultimate resort shred stick for advanced rippers who 
                        constantly watch the weather and score ridiculous amounts of pow 
                        but, rip everyday regardless of the conditions. Designed by 
                        legendary freestyle minded resort Billy Goater Temple Cummins 
                        and his skateboard influenced son Cannon this fantasy father 
                        son project is a refined high performance ATV with one eye on 
                        float, the other eye on fly and the third eye on more Baker 
                        Banked Slalom gold duct tape. A big floaty nose, a powerful 
                        responsive construction, directional camber set back 1.5”, mild 
                        taper angle, a nice new switch friendly tail and exclusive 
                        directional progressive Magne-Traction®. Banked Country is what 
                        you want to ride and where you want to be.</p>
                        <img src="Images/BankedCountry.webp" alt="GNU Banked Country Snowboard">

                        <h4>Ride Peace Seeker</h4>
                        <p>The Peace Seeker is a collaborative effort between Jake 
                        Blauvelt and our snowboard engineer. The Peace Seeker is 
                        designed to ride all over the mountain with a focus on power 
                        and drive. The unique Bi-Radial sidecut design offers the 
                        lightning-fast turn initiation of our pig models and the shape 
                        and construction allow for limitless support off the tail for 
                        longer more sustained turns. The longer nose shape eats up high 
                        frequency vibrations and keeps the nose floating above powder 
                        and chop at top speed. Our Glass Pedal construction and tail 
                        design helps to squeeze every last drop of power out of your 
                        turns. Forget what you think about shorter snowboards and 
                        prepare to have your mind blown. This board is exactly what 
                        you’d expect from Jake, fast precise and smooth.</p>
                        <img src="Images/PeaceSeeker.webp" alt="Ride Peace Seeker Snowboard">

                        <button onclick="snowboardingability()">Start Again</button>
                    `;
                }

//-------------------------------------------------------------------------------------------

        // All Mountain
        function Aallmountain() {

            quiz.innerHTML = `
                <h3>What is your style of all mountain?</h3>

                <button onclick="AAcruisy()">Cruisy</button>
                <button onclick="AAaggressive()">Aggressive</button>
            `;
        }

            //  Cruisy
            function AAcruisy() {

                quiz.innerHTML = `
                    <h3>Reccommended snowboards for you:</h3>

                    <h4>Never Summer Infinity</h4>
                    <p>The Infinity is a true all-mountain snowboard that can handle any 
                    terrain and condition. With its versatile shape and flex, it excels 
                    in carving, powder, and park riding. The Infinity is designed for 
                    riders who want a board that can do it all without compromising 
                    performance.</p>
                    <img src="Images/Infinity.webp" alt="Never Summer Infinity Snowboard">
                    
                    <h4>Ride Psychocandy</h4>
                    <p>The Psychocandy is a playful and responsive snowboard that is perfect
                    for riders who love to explore the mountain and have fun. Its twin 
                    shape and medium flex make it great for freestyle tricks, while its 
                    camber profile provides stability and control for carving and 
                    all-mountain riding.</p>
                    <img src="Images/Psychocandy.webp" alt="Ride Psychocandy Snowboard">

                    <h4>Jones Dream Weaver</h4>
                    <p>Whether you're out in deep winter storms or lapping in the spring 
                    sun, the Dream Weaver 2.0 shows up for every day of the season. 
                    Intuitive and predictable, it flows between turns, inspires 
                    confidence across different terrain and rewards you with incredible 
                    float when the snow’s coming down hard. The Dream Weaver 2.0 makes 
                    an ideal daily driver for riders who go out whatever the forecast, 
                    but saves its best for deep days.</p>
                    <img src="Images/DreamWeaver.webp" alt="Jones Dream Weaver Snowboard">  
                    <button onclick="snowboardingability()">Start Again</button>
                `;
            }


            //  Aggressive
            function AAaggressive() {

                quiz.innerHTML = `
                    <h3>Reccommended snowboards for you:</h3>

                    <h4>Nitro Alternator</h4>
                    <p>The Alternator is a high-performance all-mountain snowboard that
                    is designed for aggressive riders who want to push their limits. Its 
                    directional shape and stiff flex provide excellent stability and 
                    control at high speeds, while its camber profile allows for precise 
                    turns and carving.</p>
                    <img src="Images/Alternator.webp" alt="Nitro Alternator Snowboard">

                    <h4>Jones Flagship</p>
                    <p>The Flagship is a top-of-the-line all-mountain snowboard that is
                    built for advanced riders who demand the best performance. Its 
                    directional shape and stiff flex provide maximum control and
                    stability, while its camber profile allows for precise turns and 
                    carving. The Flagship is perfect for riders who want to tackle any 
                    terrain with confidence.</p>
                    <img src="Images/Flagship.webp" alt="Jones Flagship Snowboard">
                    
                    <p>Burton Blossom</p>
                    <p>The Blossom is a high-performance all-mountain snowboard that is
                    designed for aggressive riders who want to push their limits. Its 
                    directional shape and stiff flex provide excellent stability and 
                    control at high speeds, while its camber profile allows for precise 
                    turns and carving.</p>
                    <img src="Images/Blossom.webp" alt="Burton Blossom Snowboard">
                    <button onclick="snowboardingability()">Start Again</button>
                `;
            }

//-------------------------------------------------------------------------------------------

        // Freestyle
        function Afreestyle() {

            quiz.innerHTML = `
                <h3>Reccommended snowboards for you:</h3>

                <h4>Burton Good Company</h4>
                <p>The Good Company is a versatile freestyle snowboard that is perfect
                for riders who love to hit the park and explore the mountain. Its twin 
                shape and medium flex make it great for freestyle tricks, while its 
                camber profile provides stability and control for carving and 
                all-mountain riding.</p>
                <img src="Images/GoodCompany.webp" alt="Burton Good Company Snowboard">
                
                <h4>Salomon No Drama</h4>
                <p>The No Drama is a playful and responsive snowboard that is perfect
                for riders who love to explore the mountain and have fun. Its twin 
                shape and medium flex make it great for freestyle tricks, while its
                camber profile provides stability and control for carving and 
                all-mountain riding.</p>
                <img src="Images/NoDrama.webp" alt="Salomon No Drama Snowboard">

                <h4>Nitro Zaza</h4>
                <p>The Zaza is a high-performance freestyle snowboard that is designed 
                for riders who want to push their limits. Its twin shape and medium flex 
                make it great for freestyle tricks, while its camber profile provides 
                stability and control for carving and all-mountain riding.</p>
                <img src="Images/Zaza.webp" alt="Nitro Zaza Snowboard">
                <button onclick="snowboardingability()">Start Again</button>
            `;
        }
    
//-------------------------------------------------------------------------------------------

        // Freeride
        function Afreeride() {

            quiz.innerHTML = `
                <h3>What do you enjoy most about freeride snowboarding?</h3>

                <button onclick="powder()">Powder</button>
                <button onclick="trees()">Trees</button>
                <button onclick="steepterrain()">Steep terrain</button>
                <button onclick="backcountry()">Backcountry</button>
            `;
        }

            //  Powder
            function powder() {

                quiz.innerHTML = `
                    <h3>Reccommended snowboards for you:</h3>

                    <h4>Sims Directional Nub</h4>
                    <p>The Directional Nub is a high-performance powder snowboard that is
                    designed for aggressive riders who want to push their limits. Its 
                    directional shape and stiff flex provide excellent stability and 
                    control in deep snow, while its camber profile allows for precise 
                    turns and carving.</p>
                    <img src="Images/DirectionalNub.webp" alt="Sims Directional Nub Snowboard">

                    <h4>K2 Passport</h4>
                    <p>The Passport is a versatile all-mountain snowboard that is
                    perfect for riders who want to explore the mountain and have fun. Its 
                    directional shape and medium flex make it great for powder, while its
                    camber profile provides stability and control for carving and 
                    all-mountain riding.</p>
                    <img src="Images/Passport.webp" alt="K2 Passport Snowboard">

                    <h4>Jones Stratos</h4>
                    <p>The Stratos is a high-performance all-mountain snowboard that is
                    designed for aggressive riders who want to push their limits. Its 
                    directional shape and stiff flex provide excellent stability and 
                    control at high speeds, while its camber profile allows for precise 
                    turns and carving.</p>
                    <img src="Images/Stratos.webp" alt="Jones Stratos Snowboard">
                    <button onclick="snowboardingability()">Start Again</button>
                `;
            }


            //  Trees
            function trees() {

                quiz.innerHTML = `
                    <h3>Reccommended snowboards for you:</h3>

                    <h4>Burton Family Tree Home Town Hero</h4>
                    <p>The Family Tree Home Town Hero is a versatile all-mountain snowboard that is
                    perfect for riders who want to explore the mountain and have fun. Its 
                    directional shape and medium flex make it great for trees, while its
                    camber profile provides stability and control for carving and 
                    all-mountain riding.</p>
                    <img src="Images/HomeTownHero.webp" alt="Burton Family Tree Home Town Hero Snowboard">

                    <h4>Salomon Dancehaul</h4>
                    <p>The Dancerhaul is a high-performance freestyle snowboard that is designed 
                    for riders who want to push their limits. Its twin shape and medium flex 
                    make it great for freestyle tricks, while its camber profile provides 
                    stability and control for carving and all-mountain riding.</p>
                    <img src="Images/Dancehaul.webp" alt="Salomon Dancehaul Snowboard">

                    <h4>Jones Dreamweaver</h4>
                    <p>The Dreamweaver is a high-performance all-mountain snowboard that is
                    designed for aggressive riders who want to push their limits. Its 
                    directional shape and stiff flex provide excellent stability and 
                    control at high speeds, while its camber profile allows for precise 
                    turns and carving.</p>
                    <img src="Images/DreamWeaver.webp" alt="Jones Dreamweaver Snowboard">
                    <button onclick="snowboardingability()">Start Again</button>
                `;
            }


            //  Steep Terrain
            function steepterrain() {

                quiz.innerHTML = `
                    <h3>Reccommended snowboards for you:</h3>

                    <h4>Jones Flagship</h4>
                    <p>The Flagship is a top-of-the-line all-mountain snowboard that is
                    built for advanced riders who demand the best performance. Its 
                    directional shape and stiff flex provide maximum control and
                    stability, while its camber profile allows for precise turns and 
                    carving. The Flagship is perfect for riders who want to tackle any 
                    terrain with confidence.</p>
                    <img src="Images/Flagship.webp" alt="Jones Flagship Snowboard">

                    <h4>Jones Airheart</h4>
                    <p>The Airheart 2.0 is a performance all-mountain board for banking
                    turns, getting airborne and pitching into the fall line with full 
                    commitment. This precision-focused directional twin features a full 
                    camber profile and responsive, lightweight core to inspire Mach speed 
                    descents and g-force turns with steely composure. Lock onto every line, 
                    clear for take off and landing, and push your riding to new heights with 
                    the Airheart 2.0.</p>
                    <img src="Images/Airheart.webp" alt="Jones Airheart Snowboard">

                    <h4>Ride MTNPig</h4>
                    <p>The MTNPig is a high-performance all-mountain snowboard that is
                    designed for aggressive riders who want to push their limits. Its 
                    directional shape and stiff flex provide excellent stability and 
                    control at high speeds, while its camber profile allows for precise 
                    turns and carving.</p>
                    <img src="Images/MTNPig.webp" alt="Ride MTNPig Snowboard">
                    <button onclick="snowboardingability()">Start Again</button>
                `;
            }


            //  Backcountry
            function backcountry() {

                quiz.innerHTML = `
                    <h3>Reccommended snowboards for you:</h3>

                    <h4>Jones Solution</h4>
                    <p>The Solution is a high-performance all-mountain snowboard that is
                    designed for aggressive riders who want to push their limits. Its 
                    directional shape and stiff flex provide excellent stability and 
                    control at high speeds, while its camber profile allows for precise 
                    turns and carving.</p>
                    <img src="Images/Solution.webp" alt="Jones Solution Snowboard">

                    <h4>Burton Home Town Hero</h4>
                    <p>The Home Town Hero is a versatile all-mountain snowboard that is 
                    perfect for riders who want to explore the mountain and have fun. 
                    Its directional shape and medium flex make it great for backcountry, 
                    while its camber profile provides stability and control for carving 
                    and all-mountain riding.</p>
                    <img src="Images/HomeTownHero.webp" alt="Burton Home Town Hero Snowboard">

                    <h4>Jones Hovercraft</h4>
                    <p>The Hovercraft is a high-performance all-mountain snowboard that 
                    is designed for aggressive riders who want to push their limits. Its 
                    directional shape and stiff flex provide excellent stability and 
                    control at high speeds, while its camber profile allows for precise 
                    turns and carving.</p>
                    <img src="Images/Hovercraft.webp" alt="Jones Hovercraft Snowboard">
                    <button onclick="snowboardingability()">Start Again</button>
                `;
            }


//-------------------------------------------------------------------------------------------

// Start the quiz

snowboardingability();