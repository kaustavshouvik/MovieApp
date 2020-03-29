const Actor = require('./models/actor'),
    Movie = require('./models/movie'),
    Rating = require('./models/rating');

actorArray = [
    {
        name: 'Matt Damon',
        image: 'https://www.gstatic.com/tv/thumb/persons/44333/44333_v9_bb.jpg',
        bio: "Matthew Paige Damon (born October 8, 1970) is an American actor, film producer and screenwriter. He is ranked\
            among Forbes magazine's most bankable stars and is one of the highest-grossing actors of all time. Damon\
            has received various accolades, including an Academy Award from five nominations, two Golden Globe Awards from eight\
            nominations, and has been nominated for three British Academy Film Awards and seven Emmy Awards. Born and raised \
            in Cambridge, Massachusetts, Damon began his acting career by appearing in high school theater productions. He made\
            his professional acting debut in the film Mystic Pizza (1988). He came to prominence in 1997, when he wrote and starred\
            in Good Will Hunting, alongside Ben Affleck, which won them the Academy and Golden Globe awards for Best Screenplay\
            and earned Damon a nomination for the Academy Award for Best Actor. He continued to garner praise from critics for\
            his roles as the eponymous character in Saving Private Ryan (1998), the antihero in The Talented Mr. Ripley (1999),\
            a fallen angel in Dogma (1999) and Jay and Silent Bob Reboot (2019), an energy analyst in Syriana (2005), and a\
            corrupt Irish-American police officer in The Departed (2006). In 2019 he starred as race car driver and designer\
            Carroll Shelby in James Mangold's Ford v Ferrari.",
        movies: [],
        upcomingMovies: [],
        dob: new Date('8 October 1970')
    },
    {
        name: 'Christian Bale',
        image: 'https://m.media-amazon.com/images/M/MV5BMTkxMzk4MjQ4MF5BMl5BanBnXkFtZTcwMzExODQxOA@@._V1_.jpg',
        bio: "Christian Charles Philip Bale (born 30 January 1974) is an English actor who is known for his intense method\
            acting style, often transforming his body drastically for his roles. Bale is the recipient of many awards, including\
            an Academy Award and two Golden Globes, and was featured in the Time 100 list of 2011. Born in Haverfordwest, Wales,\
            to English parents, Bale had his first starring role at age 13 in Steven Spielberg's war film Empire of the Sun\
            (1987). Following a decade of leading and supporting roles, including in Little Women (1994), he gained wider\
            recognition for portraying the serial killer Patrick Bateman in American Psycho (2000). In 2004, he lost 63\
            pounds for his role in the psychological thriller The Machinist (2004). Within six months, he gained 100 pounds\
            to star as Batman in Christopher Nolan's superhero film Batman Begins (2005). He later reprised his role in the\
            sequels The Dark Knight (2008) and The Dark Knight Rises (2012).",
        movies: [],
        upcomingMovies: [],
        dob: new Date('30 January 1974')
    },
    {
        name: 'Morgan Freeman',
        image: 'https://www.gstatic.com/tv/thumb/persons/47162/47162_v9_bb.jpg',
        bio : "Morgan Freeman (born June 1, 1937) is an American actor and film narrator. Freeman won an Academy Award in 2005 for \
            Best Supporting Actor with Million Dollar Baby (2004) and has received Oscar nominations for his performances in Street Smart\
            (1987), Driving Miss Daisy (1989), The Shawshank Redemption (1994) and Invictus (2009). He has also won a Golden Globe Award\
            and a Screen Actors Guild Award. Freeman has appeared in many other box office hits, including Glory (1989), Robin Hood:\
            Prince of Thieves (1991), Seven (1995), Deep Impact (1998), The Sum of All Fears (2002), Bruce Almighty (2003), The Dark Knight \
            Trilogy (2005–2012), Wanted (2008), Red (2010), Now You See Me (2013), The Lego Movie (2014) and Lucy (2014). He rose to\
            fame as part of the cast of the 1970s children's program The Electric Company. Noted for his deep voice, Freeman has\
            served as a narrator, commentator, and voice actor for numerous programs, series and television shows. He is ranked \
            as the seventh-highest box office star since July 2019. He has a combined total box office gross of $4.57 billion, with \
            an average of $71.5 million per film.",
        movies: [],
        upcomingMovies: [],
        dob: new Date('1 June 1937')
    },
    {
        name: 'Gary Oldman',
        image: 'https://img.discogs.com/oCz_ygH66UXhvBEsycTz9qCDOtY=/600x794/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-472079-1551182886-5103.jpeg.jpg',
        bio : "Gary Leonard Oldman (born 21 March 1958) is an English actor and filmmaker. He is the recipient of numerous\
            accolades, including an Academy Award, three BAFTA Awards, two Critics' Choice Awards, a Golden Globe Award and a Screen\
            Actors Guild Award. Known for his versatility and intense acting style, Oldman is regarded as one of the greatest actors\
            of his generation. Oldman began acting in theatre in 1979, and made his film debut in Remembrance (1982). He continued\
            to lead a stage career, during which he performed at London's Royal Court and was a member of the Royal Shakespeare Company\
            , with credits including Cabaret, Romeo and Juliet, Entertaining Mr Sloane, Saved, The Country Wife and Hamlet. Oldman\
            rose to prominence in British film with his portrayals of Sid Vicious in Sid and Nancy (1986), Joe Orton in Prick Up Your\
            Ears (1987) and Rosencrantz in Rosencrantz & Guildenstern Are Dead (1990), while also garnering attention as a football\
            firm leader in controversial television movie The Firm (1989). Identified with the \"Brit Pack\", he achieved greater\
            renown as a Hell's Kitchen gangster in State of Grace (1990), Lee Harvey Oswald in JFK (1991) and Count Dracula in Bram\
            Stoker's Dracula (1992).",
        movies: [],
        upcomingMovies: [],
        dob: new Date('21 March 1958')
    },
    {
        name: 'Heath Ledger',
        image: 'https://akns-images.eonline.com/eol_images/Entire_Site/2018019/rs_634x1024-180119144629-634.Heath-Ledger.ms.011918.jpg?fit=inside|900:auto&output-quality=90',
        bio : "Heath Andrew Ledger (4 April 1979 – 22 January 2008) was an Australian actor, photographer, and music video director. \
            After performing roles in several Australian television and film productions during the 1990s, Ledger left for the United\
            States in 1998 to further develop his film career. His work comprised nineteen films, including 10 Things I Hate About You\
            (1999), The Patriot (2000), A Knight's Tale (2001), Monster's Ball (2001), Lords of Dogtown (2005), Brokeback Mountain (2005),\
            Candy (2006), The Dark Knight (2008), and The Imaginarium of Doctor Parnassus (2009), the latter two being posthumous \
            releases. He also produced and directed music videos and aspired to be a film director.",
        movies: [],
        upcomingMovies: [],
        dob: new Date('4 April 1979')
    },
    {
        name: 'Keanu Reeves',
        image: 'https://www.gstatic.com/tv/thumb/persons/1443/1443_v9_bb.jpg',
        bio : "Keanu Charles Reeves (kee-AH-noo; born September 2, 1964) is a Canadian actor, producer, and musician. Reeves \
            gained fame for his starring roles in several blockbuster films, including comedies from the Bill and Ted franchise \
            (1989–present); action thrillers Point Break (1991), Speed (1994), and the John Wick franchise (2014–present); psychological \
            thriller The Devil's Advocate (1997); supernatural action horror Constantine (2005); and sci-fi action series The Matrix \
            (1999–present). He has also appeared in drama films such as Dangerous Liaisons (1988), My Own Private Idaho (1991), and \
            Little Buddha (1993), as well as the romantic horror Bram Stoker's Dracula (1992).",
        movies: [],
        upcomingMovies: [],
        dob: new Date('2 September 1964')
    },
    {
        name: 'Sandra Bullock',
        image: 'https://www.gstatic.com/tv/thumb/persons/57807/57807_v9_bb.jpg',
        bio : "Sandra Annette Bullock was born in Arlington, a Virginia suburb of Washington, D.C. Her mother, Helga Bullock \
            (née Helga Mathilde Meyer), was a German opera singer. Her father, John W. Bullock, was an American voice teacher, \
            who was born in Alabama, of German descent. Sandra grew up on the road with her parents and younger sister, chef \
            Gesine Bullock-Prado, and spent much of her childhood in Nuremberg, Germany. She often performed in the children's \
            chorus of whatever production her mother was in. Her family moved back to the Washington area when she was adolescent. \
            She later enrolled in East Carolina University in North Carolina, where she studied acting. Shortly afterward she moved \
            to New York to pursue a career on the stage. This led to acting in television programs and then feature films. She gave \
            memorable performances in Demolition Man (1993) and Wrestling Ernest Hemingway (1993), but did not achieve the stardom \
            that seemed inevitable for her until her work in the smash hit Speed (1994). She now ranks as one of the most popular \
            actresses in Hollywood. For her role in The Blind Side (2009) she won the Oscar, and her blockbusters The Proposal \
            (2009), The Heat (2013) and Gravity (2013) made her a bankable star. With $56,000,000, she was listed in the Guinness \
            Book Of World Records as the highest-paid actress in the world.",
        movies: [],
        upcomingMovies: [],
        dob: new Date('26 July 1964')
    },
    {
        name: 'Michael Caine',
        image: 'https://www.gstatic.com/tv/thumb/persons/259/259_v9_bb.jpg',
        bio : "Michael Caine was born Maurice Joseph Micklewhite in London, to Ellen Frances Marie (Burchell), a charlady, and\
            Maurice Joseph Micklewhite, a fish-market porter. He left school at age 15 and took a series of working-class jobs before\
            joining the British army and serving in Korea during the Korean War, where he saw combat. Upon his return to England, he\
            gravitated toward the theater and got a job as an assistant stage manager. He adopted the name of Caine on the advice of\
            his agent, taking it from a marquee that advertised The Caine Mutiny (1954). In the years that followed, he worked in more\
            than 100 television dramas, with repertory companies throughout England and eventually in the stage hit \"The Long and the\
            Short and the Tall\".",
        movies: [],
        upcomingMovies: [],
        dob: new Date('14 March 1933')
    },
    {
        name: 'Robert De Niro',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Robert_De_Niro_3_by_David_Shankbone.jpg/1200px-Robert_De_Niro_3_by_David_Shankbone.jpg',
        bio : "Robert Anthony De Niro Jr. (born August 17, 1943) is an American actor, producer, and director. He has received \
            numerous accolades, including two Academy Awards, a Golden Globe Award, the Cecil B. DeMille Award, the Golden Lion, the\
            AFI Life Achievement Award, Presidential Medal of Freedom, and has been nominated for six BAFTA Awards, four Primetime \
            Emmy Awards, and four Screen Actors Guild Awards. He also has Italian citizenship. De Niro was cast as the young Vito \
            Corleone in the 1974 film The Godfather Part II; he won the Academy Award for Best Supporting Actor. His longtime \
            collaboration with director Martin Scorsese earned him the Academy Award for Best Actor for his portrayal of Jake \
            LaMotta in the 1980 film Raging Bull.",
        movies: [],
        upcomingMovies: [],
        dob: new Date('17 August 1943')
    },
    {
        name: 'Joaquin Phoenix',
        image: 'https://www.gstatic.com/tv/thumb/persons/69768/69768_v9_bc.jpg',
        bio : "Joaquin Rafael Phoenix (born October 28, 1974) is an American actor and producer. He has received numerous awards and \
            nominations, including an Academy Award, a Grammy Award, and two Golden Globe Awards. As a child, Phoenix started acting in\
            television with his brother River and sister Summer. His first major film role was in SpaceCamp (1986). During this period,\
            he was credited as Leaf Phoenix, a name he gave himself. He later went back to his original name and received positive \
            reviews for his supporting work in the comedy-drama film To Die For (1995) and the period film Quills (2000). He received\
            wider attention for his portrayal of Commodus in the historical drama film Gladiator (2000), for which he was nominated\
            for the Academy Award for Best Supporting Actor. He subsequently earned Best Actor nominations for portraying musician\
            Johnny Cash in Walk the Line (2005), an alcoholic war veteran in The Master (2012), and the title character in Joker \
            (2019), winning for the latter. His other films include the horror films Signs (2002) and The Village (2004), the \
            historical drama Hotel Rwanda (2004), the romantic drama Her (2013), the crime satire Inherent Vice (2014), and the\
            psychological thriller You Were Never Really Here (2017), winning the Cannes Film Festival Award for Best Actor \
            for the latter.",
        movies: [],
        upcomingMovies: [],
        dob: new Date('28 October 1974')
    },
    {
        name: 'Rami Malek',
        image: 'https://www.gstatic.com/tv/thumb/persons/330277/330277_v9_bb.jpg',
        bio : "Rami Said Malek (born May 12, 1981) is an American actor and producer. His breakthrough role was as computer hacker\
            Elliot Alderson in the USA Network television series Mr. Robot (2015–2019), for which he received several accolades, \
            including the 2016 Primetime Emmy Award for Outstanding Lead Actor in a Drama Series. In 2018, he portrayed rock singer \
            and songwriter Freddie Mercury in the biopic Bohemian Rhapsody, for which he received critical acclaim and won several\
            awards, including the Academy Award, Golden Globe Award, Screen Actors Guild Award, and British Academy Film Award for\
            Best Actor. He is the first actor of Egyptian heritage to win the Academy Award for Best Actor.[3] Time magazine named\
            Malek one of the 100 most influential people in the world in 2019.",
        movies: [],
        upcomingMovies: [],
        dob: new Date('12 May 1981')
    },
    {
        name: 'Ben Affleck',
        image: 'https://upload.wikimedia.org/wikipedia/commons/7/70/Ben_Affleck_by_Gage_Skidmore_3.jpg',
        bio : "Benjamin Géza Affleck-Boldt (born August 15, 1972) is an American actor and filmmaker. His accolades include two Academy\
            Awards and three Golden Globe Awards. He began his career as a child when he starred in the PBS educational series The \
            Voyage of the Mimi (1984, 1988). He later appeared in the independent coming-of-age comedy Dazed and Confused (1993) and\
            various Kevin Smith films, including Mallrats (1995), Chasing Amy (1997) and Dogma (1999). Affleck gained wider recognition\
            when he and childhood friend Matt Damon won the Golden Globe and Academy Award for Best Original Screenplay for writing Good\
            Will Hunting (1997), which they also starred in. He then established himself as a leading man in studio films, including\
            the disaster film Armageddon (1998), the romantic comedy Forces of Nature (1999), the war drama Pearl Harbor (2001),\
            and the spy thriller The Sum of All Fears (2002).",
        movies: [],
        upcomingMovies: [],
        dob: new Date('15 August 1972')
    },
    {
        name: 'Henry Cavill',
        image: 'https://resizing.flixster.com/EATBOcgM9R4JsmhIT74ILdt-gI8=/2244x3000/v1.cjs0OTY1ODtqOzE4MzYwOzEyMDA7MjI0NDszMDAw',
        bio : "Henry William Dalgliesh Cavill (/ˈkævəl/; born 5 May 1983) is a British actor. He began his career with roles in the\
            feature adaptations of The Count of Monte Cristo (2002) and I Capture the Castle (2003). He later appeared in supporting\
            roles in several television series, including BBC's The Inspector Lynley Mysteries, ITV's Midsomer Murders, and Showtime's\
            The Tudors. He has since appeared in numerous major Hollywood films, such as Tristan & Isolde (2006), Stardust (2007), \
            Blood Creek (2009), and Immortals (2011). Cavill gained prominence and international recognition for portraying Superman\
            in the DC Extended Universe, starring in Man of Steel (2013), Batman v Superman: Dawn of Justice (2016), and Justice League\
            (2017). He went on to star in the action spy films The Man from U.N.C.L.E. (2015) and Mission: Impossible – Fallout (2018).\
            In 2019, he began starring as Geralt of Rivia in the Netflix fantasy drama series The Witcher.",
        movies: [],
        upcomingMovies: [],
        dob: new Date('5 May 1983')
    },
    {
        name: 'Tom Cruise',
        image: 'https://www.gstatic.com/tv/thumb/persons/378/378_v9_bd.jpg',
        bio : "In 1976, if you had told fourteen-year-old Franciscan seminary student Thomas Cruise Mapother IV that one day in the not\
            too distant future he would be Tom Cruise, one of the top 100 movie stars of all time, he would have probably grinned and\
            told you that his ambition was to join the priesthood. Nonetheless, this sensitive, deeply religious youngster who was \
            born in 1962 in Syracuse, New York, was destined to become one of the highest paid and most sought after actors in screen\
            history. Tom is the only son (among four children) of nomadic parents, Mary Lee (Pfeiffer), a special education teacher,\
            and Thomas Cruise Mapother III, an electrical engineer. His parents were both from Louisville, Kentucky, and he has\
            German, Irish, and English ancestry. Young Tom spent his boyhood always on the move, and by the time he was 14 he had\
            attended 15 different schools in the U.S. and Canada. He finally settled in Glen Ridge, New Jersey with his mother \
            and her new husband. While in high school, Tom wanted to become a priest but pretty soon he developed an interest in \
            acting and abandoned his plans of becoming a priest, dropped out of school, and at age 18 headed for New York and a\
            possible acting career. The next 15 years of his life are the stuff of legends. He made his film debut with a small\
            part in Endless Love (1981) and from the outset exhibited an undeniable box office appeal to both male and female\
            audiences.",
        movies: [],
        upcomingMovies: [],
        dob: new Date('3 July 1962')
    },
    {
        name: 'Benedict Cumberbatch',
        image: 'https://www.gstatic.com/tv/thumb/persons/275459/275459_v9_bb.jpg',
        bio : "Benedict Timothy Carlton Cumberbatch CBE (born 19 July 1976) is an English actor. A graduate of the Victoria \
            University of Manchester, he continued his training at the London Academy of Music and Dramatic Art, obtaining a Master\
            of Arts in Classical Acting. He first performed at the Open Air Theatre, Regent's Park in Shakespearean productions and \
            made his West End debut in Richard Eyre's revival of Hedda Gabler in 2005. Since then, he has starred in the Royal \
            National Theatre productions After the Dance (2010) and Frankenstein (2011). In 2015, he played William Shakespeare's\
            Hamlet at the Barbican Theatre.",
        movies: [],
        upcomingMovies: [],
        dob: new Date('19 July 1976')
    },
    {
        name: 'Robert Downey Jr.',
        image: 'https://www.gstatic.com/tv/thumb/persons/67369/67369_v9_bb.jpg',
        bio : "Robert John Downey Jr. (born April 4, 1965) is an American actor, producer, and singer. His career has been \
            characterized by critical and popular success in his youth, followed by a period of substance abuse and legal troubles,\
            before a resurgence of commercial success in middle age. In 2008, Downey was named by Time magazine among the 100 most\
            influential people in the world,[2][3] and from 2013 to 2015, he was listed by Forbes as Hollywood's highest-paid \
            actor. His films have grossed over $14.4 billion worldwide,[5] making him the second highest-grossing box-office \
            star of all time.",
        movies: [],
        upcomingMovies: [],
        dob: new Date('4 April 1965')
    },
    {
        name: 'Scarlett Johansson',
        image: 'https://upload.wikimedia.org/wikipedia/commons/6/60/Scarlett_Johansson_by_Gage_Skidmore_2_%28cropped%29.jpg',
        bio : "Scarlett Ingrid Johansson (born November 22, 1984) is an American actress and singer. The world's highest-paid\
            actress since 2018, she has made multiple appearances in the Forbes Celebrity 100. Her films have grossed over $14.3 \
            billion worldwide, making Johansson the third-highest-grossing box office star of all time. She is the recipient of\
            numerous accolades, including a Tony Award and a BAFTA Award, as well as nominations for two Academy Awards and \
            five Golden Globe Awards.",
        movies: [],
        upcomingMovies: [],
        dob: new Date('22 November 1984')
    },
    {
        name: 'Brie Larson',
        image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/brie-larson-1552296861.jpg',
        bio : "Brianne Sidonie Desaulniers (born October 1, 1989), known professionally as Brie Larson, is an American\
            actress and filmmaker. Noted for her supporting work in comedies when a teenager, she has since expanded to leading\
            roles in independent dramas and film franchises, receiving such accolades as an Academy Award and a Golden Globe. \
            Time magazine named her one of the 100 most influential people in the world in 2019.",
        movies: [],
        upcomingMovies: [],
        dob: new Date('1 October 1989')
    },
    {
        name: 'Chris Hemsworth',
        image: 'https://www.gstatic.com/tv/thumb/persons/528854/528854_v9_bb.jpg',
        bio : "Christopher Hemsworth (born 11 August 1983) is an Australian actor. He rose to prominence playing Kim Hyde in the \
            Australian TV series Home and Away (2004–07) before beginning a film career in Hollywood by taking on parts in the science\
            fiction film Star Trek (2009) and the thriller A Perfect Getaway (2009).\nHemsworth went on to star in the fantasy film \
            Snow White and the Huntsman (2012), the war film Red Dawn (2012), the action thriller Blackhat (2015), the biographical\
            thriller In the Heart of the Sea (2015), the comedy Ghostbusters (2016), and the Men in Black film series spin-off Men\
            in Black: International (2019). His most critically acclaimed roles include the comedy horror The Cabin in the Woods\
            (2012) and the biographical sports film Rush (2013), in which he portrayed James Hunt.",
        movies: [],
        upcomingMovies: [],
        dob: new Date('11 August 1983')
    },
    {
        name: 'Paul Rudd',
        image: 'https://www.gstatic.com/tv/thumb/persons/50640/50640_v9_bb.jpg',
        bio : "Paul Stephen Rudd (born April 6, 1969) is an American actor, comedian, screenwriter, and producer. He studied \
            theater at the University of Kansas and the American Academy of Dramatic Arts before making his acting debut in 1992 \
            with NBC's drama series Sisters.\nRudd's films include Clueless (1995), Romeo + Juliet (1996), Wet Hot American Summer\
            (2001), Anchorman: The Legend of Ron Burgundy (2004), The 40-Year-Old Virgin (2005), Knocked Up (2007), This Is 40 \
            (2012), Mute (2018), and Ideal Home (2018). He also has played Ant-Man in the Marvel Cinematic Universe, appearing in\
            Ant-Man (2015), Captain America: Civil War (2016), Ant-Man and the Wasp (2018), and Avengers: Endgame (2019).",
        movies: [],
        upcomingMovies: [],
        dob: new Date('6 April 1969')
    },
    {
        name: 'Rachel McAdams',
        image: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Rachel_McAdams%2C_2016_%28cropped%29.jpg',
        bio : "Rachel Anne McAdams (born November 17, 1978) is a Canadian actress. After graduating from a four-year theatre\
            degree program at York University in 2001, she worked in Canadian television and film productions, such as the drama\
            film Perfect Pie (2002), for which she received a Genie Award nomination, the comedy film My Name Is Tanino (2002),\
            and the comedy series Slings and Arrows, for which she won a Gemini Award.",
        movies: [],
        upcomingMovies: [],
        dob: new Date('17 November 1978')
    },
    {
        name: 'Simon Pegg',
        image: 'https://www.gstatic.com/tv/thumb/persons/225908/225908_v9_ba.jpg',
        bio : "Simon John Pegg (né Beckingham; born 14 February 1970) is an English actor, comedian, screenwriter, and producer. \
            He came to public prominence in the UK as the co-creator of the Channel 4 sitcom Spaced, directed by Edgar Wright. He went \
            on to co-write and star in the Three Flavours Cornetto film trilogy: Shaun of the Dead (2004), Hot Fuzz (2007), and The \
            World's End (2013). He and Nick Frost wrote and starred in the sci-fi film Paul (2011). Pegg is one of the few performers\
            to have achieved what Radio Times calls \"the Holy Grail of nerd-dom\", playing popular supporting characters in Doctor Who\
            (2005), Star Trek as Montgomery \"Scotty\" Scott (2009–present), and Star Wars: The Force Awakens (2015).[5] He currently \
            stars as Benji Dunn in the Mission: Impossible film series (2006–present), and the Chamberlain in The Dark Crystal: Age \
            of Resistance (2019).",
        movies: [],
        upcomingMovies: [],
        dob: new Date('14 February 1970')
    },
    {
        name: 'Chris Pine',
        image: 'https://www.gstatic.com/tv/thumb/persons/282920/282920_v9_ba.jpg',
        bio : "Christopher Whitelaw Pine (born August 26, 1980)[1][2] is an American actor. Pine made his feature film debut as Lord\
            Devereaux in The Princess Diaries 2: Royal Engagement (2004), and is known for playing James T. Kirk in the Star Trek \
            reboot film series (2009–2016), Will Colson in Unstoppable (2010), Cinderella's Prince in Into the Woods (2014), Jack \
            Ryan in Jack Ryan: Shadow Recruit (2014), Toby Howard in Hell or High Water (2016), Bernie Webber in The Finest Hours \
            (2016), Steve Trevor in Wonder Woman (2017), Dr. Alexander Murry in A Wrinkle in Time (2018), and Robert the Bruce in \
            Outlaw King (2018).",
        movies: [],
        upcomingMovies: [],
        dob: new Date('26 August 1980')
    },
    {
        name: 'Gal Gadot',
        image: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Gal_Gadot_cropped_lighting_corrected_2b.jpg',
        bio : "Gal Gadot Varsano (born 30 April 1985) is an Israeli actress and model. At age 18, she was crowned Miss Israel 2004. \
            She then served two years in the Israel Defense Forces as a fitness/combat readiness instructor, after which she began \
            studying law and international relations at IDC Herzliya college while building up her modeling and acting careers. Gadot's \
            first international film role came as Gisele Yashar in Fast & Furious (2009), a role she reprised in subsequent installments \
            of the film franchise. She went on to earn worldwide fame for portraying Wonder Woman in the DC Extended Universe, beginning \
            with Batman v Superman: Dawn of Justice (2016), followed by the solo film Wonder Woman and the ensemble Justice League \
            (both 2017). In 2018, Gadot was included on Time's annual list of the 100 most influential people in the world, \
            and she was listed among the highest-paid actresses in the world.",
        movies: [],
        upcomingMovies: [],
        dob: new Date('30 April 1985')
    },
    {
        name: 'Anne Hathaway',
        image: 'https://cdn.britannica.com/14/147814-050-664180CF/Anne-Hathaway.jpg',
        bio : "Anne Jacqueline Hathaway (born November 12, 1982) is an American actress. The recipient of multiple awards, including\
            an Academy Award, a Primetime Emmy Award, and a Golden Globe, she was one of the highest-paid actresses in the world in 2015.\
            Her films have earned over $6.8 billion worldwide, and she appeared in the Forbes Celebrity 100 list in 2009. Hathaway graduated\
            from Millburn High School in New Jersey, where she acted in several plays. As a teenager, she was cast in the television series\
            Get Real (1999–2000) and made her breakthrough as the protagonist in her debut film, the Disney comedy The Princess Diaries\
            (2001). Hathaway made a transition to adult roles with the 2005 dramas Havoc and Brokeback Mountain. The comedy film The Devil\
            Wears Prada (2006), in which she played an assistant to a fashion magazine editor, was her biggest commercial success to that\
            point. She played a recovering alcoholic in the drama Rachel Getting Married (2008), which earned her a nomination for the Academy\
            Award for Best Actress. She followed this with roles in the commercially successful romantic films Bride Wars (2009), Valentine's Day\
            (2010), Love & Other Drugs (2010), and the fantasy film Alice in Wonderland (2010).",
        movies: [],
        upcomingMovies: [],
        dob: new Date('12 November 1982')
    },
    {
        name: 'Tom Hardy',
        image: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Tom_Hardy_by_Gage_Skidmore.jpg',
        bio : "With his breakthrough performance as Eames in Christopher Nolan's sci-fi thriller Inception (2010), English actor\
            Tom Hardy has been brought to the attention of mainstream audiences worldwide. However, the versatile actor has been\
            steadily working on both stage and screen since his television debut in the miniseries Band of Brothers (2001). After\
            being cast in the World War II drama, Hardy left his studies at the prestigious Drama Centre in London and was subsequently\
            cast as Twombly in Ridley Scott's Black Hawk Down (2001) and as the villain Shinzon in Star Trek: Nemesis (2002).",
        movies: [],
        upcomingMovies: [],
        dob: new Date('15 September 1977')
    },
    {
        name: 'Leonardo DiCaprio',
        image: 'https://www.gstatic.com/tv/thumb/persons/435/435_v9_bc.jpg',
        bio : "Few actors in the world have had a career quite as diverse as Leonardo DiCaprio's. DiCaprio has gone from relatively\
            humble beginnings, as a supporting cast member of the sitcom Growing Pains (1985) and low budget horror movies, such as\
            Critters 3 (1991), to a major teenage heartthrob in the 1990s, as the hunky lead actor in movies such as Romeo + Juliet\
            (1996) and Titanic (1997), to then become a leading man in Hollywood blockbusters, made by internationally renowned\
            directors such as Martin Scorsese and Christopher Nolan.",
        movies: [],
        upcomingMovies: [],
        dob: new Date('15 September 1977')
    },
    {
        name: 'Ellen Page',
        image: 'https://www.gstatic.com/tv/thumb/persons/261958/261958_v9_ba.jpg',
        bio : "Ellen Grace Philpotts-Page was born on February 21, 1987, in Halifax, Nova Scotia, to Martha Philpotts, a teacher, and\
            Dennis Page, a graphic designer. Page wanted to start acting at an early age and attended the Neptune Theater School. She began\
            her career at the age of 10 on the award-winning television series Pit Pony (1999), for which she received a Gemini nomination\
            and a Young Artist Awards nomination. Later, Page appeared in Marion Bridge (2002), which won the award for Best Canadian\
            First Feature at the Toronto International Film Festival. She won a Gemini Award for her role of Lilith in the first season\
            of ReGenesis (2004), a one-hour drama for TMN/Movie Central, and for the cable feature, Mrs. Ashboro's Cat (2004), for Best\
            Performance in a Children's or Youth Program or Series. In addition, Page appeared in the cult hit TV series Trailer Park\
            Boys (2001).",
        movies: [],
        upcomingMovies: [],
        dob: new Date('21 February 1987')
    },
    {
        name: 'Joseph Gordon-Levitt',
        image: 'https://www.gstatic.com/tv/thumb/persons/666/666_v9_ba.jpg',
        bio : "Few actors in the world have had a career quite as diverse as Leonardo DiCaprio's. DiCaprio has gone from relatively\
            humble beginnings, as a supporting cast member of the sitcom Growing Pains (1985) and low budget horror movies, such as\
            Critters 3 (1991), to a major teenage heartthrob in the 1990s, as the hunky lead actor in movies such as Romeo + Juliet\
            (1996) and Titanic (1997), to then become a leading man in Hollywood blockbusters, made by internationally renowned\
            directors such as Martin Scorsese and Christopher Nolan.",
        movies: [],
        upcomingMovies: [],
        dob: new Date('17 February 1981')
    },
    {
        name: 'Jason Bateman',
        image: 'https://www.gstatic.com/tv/thumb/persons/104/104_v9_ba.jpg',
        bio : "Jason Bateman is an American film and television actor, known for his role as Michael Bluth on the television sitcom\
            Arrested Development (2003), as well as his role on Valerie (1986). He was born in Rye, New York. His father, Kent Bateman,\
            from a Utah-based family, is a film and television director and producer, and founder of a Hollywood repertory stage company.\
            His mother, Victoria Bateman, was born in Shropshire, England, and worked as a flight attendant. His sister is actress Justine\
            Bateman. In 1981, at the age of 12, young Bateman made his debut on television as James Cooper Ingalls in Little House on the\
            Prairie (1974): Uncle Jed, appearing in 18 more episodes in one season. Jason also appeared in the original Knight Rider\
            with David Hasselhoff for the season three episode \"Lost Knight\" (aired Dec 1984) playing the character \"Doug\" who befriends\
            Kitt when he loses his memory. In the mid-1980s, he became the DGA's youngest-ever director when he directed three episodes of\
            Valerie (1986) at age 18. During the 2000s, Bateman's film career has been on soaring trajectory. In 2005, he won the Golden \
            Globe Award for Best Performance by an Actor in a Television Series, Musical or Comedy, for Arrested Development (2003), and \
            received other awards and nominations.",
        movies: [],
        upcomingMovies: [],
        dob: new Date('14 January 1969')
    },
    {
        name: 'Brad Pitt',
        image: 'https://www.gstatic.com/tv/thumb/persons/1366/1366_v9_bc.jpg',
        bio : "William Bradley Pitt (born December 18, 1963) is an American actor and film producer. He has received multiple awards, \
            including two Golden Globe Awards and an Academy Award for his acting, in addition to another Academy Award and a Primetime \
            Emmy Award as producer under his production company, Plan B Entertainment. Pitt first gained recognition as a cowboy hitchhiker\
            in the road movie Thelma & Louise (1991). His first leading roles in big-budget productions came with the drama films A River \
            Runs Through It (1992) and Legends of the Fall (1994), and the horror film Interview with the Vampire (1994). He gave critically\
            acclaimed performances in the crime thriller Seven (1995) and the science fiction film 12 Monkeys (1995), the latter earning him\
            a Golden Globe Award for Best Supporting Actor and an Academy Award nomination.",
        movies: [],
        upcomingMovies: [],
        dob: new Date('18 December 1963')
    },
    {
        name: 'Margot Robbie',
        image: 'https://www.biography.com/.image/t_share/MTUxNTgzODk3Mjk2MDUzNTE2/gettyimages-870916736.jpg',
        bio : "Margot Elise Robbie (MAR-goh ROB-ee; born 2 July 1990) is an Australian actress and film producer. She has received\
            nominations for two Academy Awards and five BAFTA Awards. In 2017, Time magazine named her one of the 100 most influential\
            people in the world, and in 2019, she was ranked among the world's highest-paid actresses. Robbie studied drama at Somerset\
            College and began her career in Australian independent films in the late 2000s, before working in the soap opera Neighbours\
            (2008–2011). After moving to America, she starred in the ABC drama series Pan Am (2011–2012) and had her breakthrough role\
            in Martin Scorsese's black comedy The Wolf of Wall Street (2013). Robbie's profile continued to grow with starring roles\
            as a grifter in Focus (2015), Jane Porter in The Legend of Tarzan (2016), and Harley Quinn in the DC Extended Universe,\
            beginning with Suicide Squad (2016).",
        movies: [],
        upcomingMovies: [],
        dob: new Date('2 July 1990')
    },
    {
        name: 'Matthew McConaughey',
        image: 'https://www.gstatic.com/tv/thumb/persons/44410/44410_v9_bb.jpg',
        bio : "Matthew David McConaughey (born November 4, 1969) is an American actor and producer. He first gained notice for his\
            supporting performance in the coming-of-age comedy Dazed and Confused (1993), considered by many to be his breakout role.\
            After a number of supporting roles in films including Angels in the Outfield (1994) and Texas Chainsaw Massacre: The Next\
            Generation (1994), his breakthrough performance as a leading man came in the legal drama A Time to Kill (1996). He followed\
            this with leading performances in the science fiction film Contact (1997) and the historical drama Amistad (1997), the \
            comedy-drama The Newton Boys (1998), the satire EDtv (1999), the war film U-571 (2000), and the psychological thriller \
            Frailty (2001).",
        movies: [],
        upcomingMovies: [],
        dob: new Date('4 November 1969')
    },
    {
        name: 'Ryan Reynolds',
        image: 'https://www.gstatic.com/tv/thumb/persons/57282/57282_v9_bb.jpg',
        bio : "Ryan Rodney Reynolds (born October 23, 1976) is a Canadian-American actor, comedian, film producer and screenwriter.\
            He began his career starring in the Canadian teen soap opera Hillside (1991–1993) and had minor roles before landing the \
            lead role on the sitcom Two Guys and a Girl between 1998 and 2001. Reynolds then starred in a range of films, including\
            comedies such as National Lampoon's Van Wilder (2002), Waiting... (2005), and The Proposal (2009). He also performed \
            in dramatic roles in Buried (2010), Woman in Gold (2015), and Life (2017), and starred in action films such as Blade: \
            Trinity (2004), Green Lantern (2011), and Safe House (2012).",
        movies: [],
        upcomingMovies: [],
        dob: new Date('23 October 1976')
    },
    {
        name: 'Jeremy Renner',
        image: 'https://www.gstatic.com/tv/thumb/persons/31106/31106_v9_bb.jpg',
        bio : "Jeremy Lee Renner (born January 7, 1971) is an American actor, musician and songwriter. He began his career by appearing\
            in independent films such as Dahmer (2002) and Neo Ned (2005). Renner earned supporting roles in bigger films, such as \
            S.W.A.T. (2003) and 28 Weeks Later (2007). Renner was nominated for the Academy Award for Best Actor for his performance\
            in The Hurt Locker (2008) and for the Academy Award for Best Supporting Actor for his performance in The Town (2010). \
            His films have grossed over $3.5 billion in North America and over $9.8 billion worldwide, making him one of the highest\
            -grossing box-office stars of all time.",
        movies: [],
        upcomingMovies: [],
        dob: new Date('7 January 1971')
    },
    {
        name: 'Elizabeth Olsen',
        image: 'https://m.media-amazon.com/images/M/MV5BMjEzMjA0ODk1OF5BMl5BanBnXkFtZTcwMTA4ODM3OQ@@._V1_QL50_.jpg',
        bio : "Elizabeth Chase \"Lizzie\" Olsen (born February 16, 1989) is an American actress. She is known for her roles in\
            the films Silent House (2011), Liberal Arts (2012), Godzilla (2014), Avengers: Age of Ultron (2015), and Captain America\
            : Civil War (2016). For her role in the critically-acclaimed Martha Marcy May Marlene (2011), she was nominated for \
            numerous awards, including the Independent Spirit Award for Best Female Lead. She is the younger sister of actresses \
            and fashion designers Mary-Kate Olsen and Ashley Olsen.",
        movies: [],
        upcomingMovies: [],
        dob: new Date('16 February 1989')
    },
    {
        name: 'Jon Bernthal',
        image: 'https://www.gstatic.com/tv/thumb/persons/311060/311060_v9_bc.jpg',
        bio : "Jonathan Edward Bernthal (born September 20, 1976)[2] is an American actor. Bernthal began his career in\
            theater before guest starring on various television shows. He gained critical acclaim and prominence for his \
            portrayal of Shane Walsh on the AMC series The Walking Dead (2010–2012; 2018). He later starred in supporting and\
            leading roles in various critically acclaimed films including The Wolf of Wall Street (2013), Fury (2014), Sicario\
            (2015), The Accountant (2016), Baby Driver, Wind River (both 2017), Widows (2018), and Ford v Ferrari (2019).",
        movies: [],
        upcomingMovies: [],
        dob: new Date('20 September 1976')
    },
    {
        name: 'Anthony Mackie',
        image: 'https://www.gstatic.com/tv/thumb/persons/308495/308495_v9_ba.jpg',
        bio : "Anthony Mackie (born September 23, 1978) is an American actor and film producer. He has been featured in films,\
            television series and Broadway and Off-Broadway plays, including Ma Rainey's Black Bottom, Drowning Crow, McReele, A \
            Soldier's Play and Carl Hancock Rux's Talk, for which he won an Obie Award in 2002. In 2002, he was featured in Eminem's\
            film debut, 8 Mile. He was nominated for Independent Spirit Award for Best Actor for his role in Brother to Brother. His\
            second nomination was for Best Supporting Actor at the 2009 Independent Spirit Awards for his role in The Hurt Locker.",
        movies: [],
        upcomingMovies: [],
        dob: new Date('23 September 1978')
    },
    {
        name: 'Daniel Radcliffe',
        image: 'https://www.gstatic.com/tv/thumb/persons/233401/233401_v9_bd.jpg',
        bio : "Daniel Jacob Radcliffe (born 23 July 1989) is an English actor and producer. He is best known for playing the\
            titular protagonist in the Harry Potter film series during his adolescence and early adulthood.Born and raised in London,\
            Radcliffe made his acting debut at 10 years of age in BBC One's 1999 television film David Copperfield, followed by his\
            cinematic debut in 2001's The Tailor of Panama. At age 11, he was cast as Harry in Harry Potter and the Philosopher's \
            Stone. Over the next 10 years, Radcliffe played the lead role in seven more Harry Potter films, culminating with Harry\
            Potter and the Deathly Hallows – Part 2 (2011). During this period, Radcliffe became one of the highest-paid actors in\
            the world; earned worldwide fame, popularity, and critical acclaim; and received many accolades for his performances \
            in the series.",
        movies: [],
        upcomingMovies: [],
        dob: new Date('23 July 1989')
    },
    {
        name: 'Emma Watson',
        image: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Emma_Watson_2013.jpg',
        bio : "Emma Charlotte Duerre Watson (born 15 April 1990) is an English actress, model and activist. Born in Paris and \
            brought up in Oxfordshire, Watson attended the Dragon School and trained as an actress at the Oxford branch of \
            Stagecoach Theatre Arts. As a child, she rose to prominence with her first professional acting role as Hermione \
            Granger in the Harry Potter film series, having acted only in school plays previously.",
        movies: [],
        upcomingMovies: [],
        dob: new Date('15 April 1990')
    },
    {
        name: 'Ezra Miller',
        image: 'https://www.gstatic.com/tv/thumb/persons/528415/528415_v9_ba.jpg',
        bio : "Ezra Matthew Miller is an American actor. Miller's feature film debut was in Afterschool (2008). Miller starred \
            as Kevin in the drama We Need to Talk About Kevin (2011) and co-starred in the film adaptation of The Perks of \
            Being a Wallflower (2012). In 2015, Miller co-starred in the drama The Stanford Prison Experiment and the comedy \
            Trainwreck. Miller played Credence Barebone in the Fantastic Beasts films Fantastic Beasts and Where to Find Them \
            (2016) and Fantastic Beasts: The Crimes of Grindelwald (2018).",
        movies: [],
        upcomingMovies: [],
        dob: new Date('30 September 1992')
    },
    {
        name: 'Anna Kendrick',
        image: 'https://www.gstatic.com/tv/thumb/persons/298922/298922_v9_bb.jpg',
        bio : "Anna Cooke Kendrick (born August 9, 1985) is an American actress and singer. She began her career as a child actress\
            in theater productions. Her first starring role was in the 1998 Broadway musical High Society. She later made her feature\
            film debut in the musical comedy Camp (2003). Kendrick rose to prominence for her supporting role as Jessica Stanley in\
            The Twilight Saga (2008–2012). Her starring role in Jason Reitman's comedy-drama film Up in the Air, which was released\
            in 2009, received praise from critics and a nomination for the Academy Award for Best Supporting Actress. She achieved\
            further recognition for starring as Beca Mitchell in the Pitch Perfect film series (2012–2017).",
        movies: [],
        upcomingMovies: [],
        dob: new Date('9 August 1985')
    },
    {
        name: 'Mila Kunis',
        image: 'https://www.biography.com/.image/t_share/MTU3NTQ0Njg5OTM3OTUwMzc0/mila-kunis-attends-the-screening-of-the-spy-who-\
            dumped-me-at-hearst-tower-on-july-12-2018-in-new-york-city-photo-by-dimitrios-kambouris_getty-images.jpg',
        bio : "Milena Markovna \"Mila\" Kunis (born August 14, 1983) is an American actress. In 1991, at the age of 7, she moved \
            from Soviet Ukraine to the United States with her family. After being enrolled in acting classes as an after-school activity,\
            she was soon discovered by an agent. She appeared in several television series and commercials, before landing her first\
            significant role at age 14, playing Jackie Burkhart on the television series That '70s Show (1998–2006). Since 1999, she\
            has voiced Meg Griffin on the animated series Family Guy.",
        movies: [],
        upcomingMovies: [],
        dob: new Date('14 August 1983')
    },
    {
        name: 'Vin Diesel',
        image: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Vin_Diesel_by_Gage_Skidmore_2.jpg',
        bio : "Mark Sinclair (born July 18, 1967), known professionally as Vin Diesel, is an American actor and producer. He rose to \
            international fame with his role as Dominic Toretto in The Fast and the Furious franchise. Diesel began his career in \
            1990, but initially struggled to gain roles until he created and starred in the short film Multi-Facial (1995), which \
            attracted the attention of director Steven Spielberg, who was developing his film Saving Private Ryan at the time. \
            Spielberg re-wrote elements of the film to allow Diesel to appear in it, which helped kick start his career. He subsequently \
            voiced the titular character in The Iron Giant (1999), while gaining a reputation as an action star after headlining The Fast \
            and the Furious, the XXX series, and The Chronicles of Riddick.",
        movies: [],
        upcomingMovies: [],
        dob: new Date('18 July 1967')
    },
    {
        name: 'Dwayne Johnson',
        image: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Dwayne_Johnson_2%2C_2013.jpg',
        bio : "Dwayne Douglas Johnson (born May 2, 1972), also known by his ring name The Rock, is an American-Canadian actor, \
            producer, businessman, and former professional wrestler[9] and football player.[10] He was a professional wrestler for \
            the World Wrestling Federation (WWF, now WWE) for eight years prior to pursuing an acting career. His films have grossed\
            over $3.5 billion in North America and over $10.5 billion worldwide,[11] making him one of the highest-grossing \
            box-office stars of all time. Johnson was a college football player for the University of Miami, with whom he won a \
            national championship in 1991. He initially aspired for a professional career in football and entered the 1995 NFL \
            Draft, but he went undrafted. As a result, Johnson signed with the Calgary Stampeders of the Canadian Football League \
            (CFL), but was cut from the team in the middle of his first season. Shortly after, he began training as a professional \
            wrestler.",
        movies: [],
        upcomingMovies: [],
        dob: new Date('2 May 1972')
    },
    {
        name: 'Jason Statham',
        image: 'https://www.gstatic.com/tv/thumb/persons/165127/165127_v9_bb.jpg',
        bio : "Jason Statham (born 26 July 1967) is an English actor and film producer. Typecast as the antihero, he is known\
            for his action-thriller roles and portraying tough, irredeemable, and machiavellian characters. Throughout his film \
            career, Statham has regularly performed his own stage combat and stunts. Born in Derbyshire, England, he began practicing\
            kung fu, kickboxing and karate recreationally in his youth while working at local market stalls. An avid footballer and\
            diver, he was selected[1] by Britain's national diving team to compete in the 1990 Commonwealth Games. Shortly after, \
            he was asked to model for French Connection, Tommy Hilfiger, and Levi's in various advertising campaigns. Statham's \
            past professional history working in market stalls inspired his casting in the Guy Ritchie crime films Lock, Stock \
            and Two Smoking Barrels (1998) and Snatch (2000).",
        movies: [],
        upcomingMovies: [],
        dob: new Date('26 July 1967')
    },
    {
        name: 'Willem Dafoe',
        image: 'https://www.gstatic.com/tv/thumb/persons/393/393_v9_bb.jpg',
        bio : "Having made over one hundred films in his legendary career, Willem Dafoe is internationally respected for bringing\
            versatility, boldness, and dare to some of the most iconic films of our time. His artistic curiosity in exploring the human\
            condition leads him to projects all over the world, large and small, Hollywood films as well as Independent cinema. In\
            1979, he was given a role in Michael's Cimino's Heaven's Gate, from which he was fired. Since then, he has collaborated\
            with directors who represent a virtual encyclopedia of modern cinema: Kathryn Bigelow, Sam Raimi, Alan Parker, Walter\
            Hill, Mary Harron, Wim Wenders, Anton Corbijn, Zhang Yimou, Wes Anderson, Martin Scorsese, David Lynch, Oliver Stone,\
            William Friedkin, Werner Herzog, Lars Von Trier, Abel Ferrara, Spike Lee, Julian Schnabel, David Cronenberg, Paul\
            Schrader, Anthony Minghella, Scott Cooper, Theo Angelopoulos, Christian Carion, Robert Rodriguez, Phillip Noyce,\
            Hector Babenco, John Milius, Roger Donaldson, Paul McGuigan, Lee Tamahori, Roger Spottiswoode, Paul Weitz, Daniel\
            Nettheim, The Spierig Brothers, Andrew Stanton, and Josh Boone.",
        movies: [],
        upcomingMovies: [],
        dob: new Date('22 July 1955')
    },
    {
        name: 'Johnny Depp',
        image: 'https://www.gstatic.com/tv/thumb/persons/33623/33623_v9_bc.jpg',
        bio : 'John Christopher Depp II is an American actor, producer, and musician. He has been nominated for 10 Golden Globe \
            Awards, winning one for Best Actor for his performance of the title role in Sweeney Todd: The Demon Barber of Fleet \
            Street (2008), and has been nominated for three Academy Awards for Best Actor, among other accolades. He is regarded \
            as one of the world\'s biggest film stars. Depp rose to prominence on the 1980s television series 21 Jump Street, \
            becoming a teen idol. He has gained critical praise for his portrayals of inept screenwriter-director Ed Wood in the \
            film of the same name, undercover FBI agent Joseph D. Pistone in Donnie Brasco, author J. M. Barrie in Finding \
            Neverland, and Boston gangster Whitey Bulger in Black Mass.',
        movies: [],
        upcomingMovies: [],
        dob: new Date('9 June 1963')
    },
    {
        name: 'Jake Gyllenhaal',
        image: 'https://www.gstatic.com/tv/thumb/persons/163510/163510_v9_ba.jpg',
        bio : "Jacob Benjamin Gyllenhaal (born December 19, 1980) is an American actor and film producer. Born into the Gyllenhaal\
            family, he is the son of director Stephen Gyllenhaal and screenwriter Naomi Foner. He began acting as a child, making his\
            acting debut in City Slickers (1991), followed by roles in his father's films A Dangerous Woman (1993) and Homegrown \
            (1998). His breakthrough performances were as Homer Hickam in October Sky (1999) and as a psychologically troubled \
            teenager in Donnie Darko (2001). His most widely seen film to that point came with the disaster film The Day After\
            Tomorrow (2004).",
        movies: [],
        upcomingMovies: [],
        dob: new Date('19 December 1980')
    },
    {
        name: 'Kevin Hart',
        image: 'https://upload.wikimedia.org/wikipedia/commons/8/80/Kevin_Hart_2014_%28cropped_2%29.jpg',
        bio : 'Kevin Darnell Hart (born July 6, 1979) is an American stand-up comedian, actor, and producer. Born and raised \
            in Philadelphia, Pennsylvania, Hart began his career by winning several amateur comedy competitions at clubs throughout \
            New England, culminating in his first real break in 2001 when he was cast by Judd Apatow for a recurring role on the \
            TV series Undeclared. The series lasted only one season, but he soon landed other roles in films such as Paper Soldiers \
            (2002), Scary Movie 3 (2003), Soul Plane (2004), In the Mix (2005), and Little Fockers (2010).',
        movies: [],
        upcomingMovies: [],
        dob: new Date('6 July 1979')
    },
    {
        name: 'John Cena',
        image: 'https://www.gstatic.com/tv/thumb/persons/487578/487578_v9_ba.jpg',
        bio : 'John Felix Anthony Cena Jr. is an American professional wrestler, actor, rapper, and television presenter. He is \
            currently signed to WWE where he wrestles part-time. He is also the current host of Are You Smarter Than a Fifth Grader? \
            on Nickelodeon and has starred in various films. Born and raised in West Newbury, Massachusetts, Cena moved to \
            California in 1998 to pursue a career as a bodybuilder. He transitioned into professional wrestling in 1999 when \
            he debuted for Ultimate Pro Wrestling (UPW) and signed with the World Wrestling Federation (WWF, now WWE) in 2000, \
            where he was initially assigned to Ohio Valley Wrestling (OVW). He gained fame in WWE after adopting the persona of \
            a trash-talking rapper, and won his first singles title, the United States Championship, in 2004.',
        movies: [],
        upcomingMovies: [],
        dob: new Date('23 April 1977')
    },
    {
        name: 'Pedro Pascal',
        image: 'https://www.gstatic.com/tv/thumb/persons/494807/494807_v9_bb.jpg',
        bio : 'José Pedro Balmaceda Pascal (born April 2, 1975) is a Chilean-American actor. Pascal portrayed Oberyn Martell in the \
            fourth season of the HBO fantasy series Game of Thrones[2] and Javier Peña in the Netflix biographical crime series \
            Narcos. He has also starred as mercenary Pero Tovar in The Great Wall (2016); as Agent Whiskey in Kingsman: The Golden \
            Circle (2017); as Dave York, the primary antagonist in The Equalizer 2 (2018); and as Francisco "Catfish" Morales in \
            the heist drama Triple Frontier (2019).',
        movies: [],
        upcomingMovies: [],
        dob: new Date('2 April 1975')
    },
    {
        name: 'Mark Strong',
        image: 'https://vignette.wikia.nocookie.net/disney/images/a/a0/Mark_Strong.jpg/revision/latest?cb=20190912024923',
        bio : "British actor Mark Strong, who played Jim Prideaux in the 2011 remake of Tinker Tailor Soldier Spy (2011), is often\
            cast as cold, calculating villains. But before he became a famous actor, he intended to pursue a career in law. Strong \
            was born Marco Giuseppe Salussolia in London, England, to an Austrian mother and an Italian father. His father left the\
            family not long after he was born, and his mother worked as an au pair to raise the boy on her own. Strong's mother had\
            his name legally changed, by deed poll, when he was young in order to help him better assimilate with his peers. He \
            became Mark Strong.",
        movies: [],
        upcomingMovies: [],
        dob: new Date('5 August 1963')
    },
    {
        name: 'Colin Firth',
        image: 'https://www.gstatic.com/tv/thumb/persons/71352/71352_v9_ba.jpg',
        bio : "Colin Andrew Firth CBE (born 10 September 1960) is an English actor who has received an Academy Award, a Golden Globe \
            Award, two BAFTA Awards, and three Screen Actors Guild Awards, as well as the Volpi Cup for Best Actor at the Venice Film\
            Festival. In 2010, Firth's portrayal of King George VI in Tom Hooper's The King's Speech won him the Academy Award for \
            Best Actor. Identified in the late 1980s with the \"Brit Pack\" of rising, young British actors, it was not until his\
            portrayal of Fitzwilliam Darcy in the 1995 television adaptation of Jane Austen's Pride and Prejudice that he received\
            more widespread attention. This led to roles in films, such as The English Patient, Bridget Jones's Diary, for which \
            he was nominated for a BAFTA Award, Shakespeare in Love, and Love Actually. In 2009, Firth received widespread critical\
            acclaim for his leading role in A Single Man, for which he gained his first Academy Award nomination, and won a BAFTA\
            Award. Firth played secret agent Harry Hart in the 2014 film Kingsman: The Secret Service and the 2017 sequel Kingsman\
            : The Golden Circle. Firth's films have grossed more than $3 billion from 42 releases worldwide.",
        movies: [],
        upcomingMovies: [],
        dob: new Date('10 September 1960')
    },
    {
        name: 'Robert Pattinson',
        image: 'https://www.gstatic.com/tv/thumb/persons/487714/487714_v9_bb.jpg',
        bio : "Robert Douglas Thomas Pattinson (born 13 May 1986) is an English actor. After starting to act in a London \
            theatre club at the age of 15, he began his film career at age 19 by playing Cedric Diggory in the fantasy film Harry \
            Potter and the Goblet of Fire (2005). He went on to star as Edward Cullen in the film adaptations of the Twilight \
            novels, consisting of five films between 2008 and 2012, which earned a combined total of over $3.3 billion worldwide. \
            It brought Pattinson worldwide fame and established him among the highest-paid actors in the world. In 2010, Time \
            magazine named him one of the 100 most influential people in the world, and he was featured in the Forbes Celebrity \
            100 list.",
        movies: [],
        upcomingMovies: [],
        dob: new Date('13 May 1986')
    },
    {
        name: 'Channing Tatum',
        image: 'https://www.gstatic.com/tv/thumb/persons/321547/321547_v9_ba.jpg',
        bio : "Channing Matthew Tatum (born April 26, 1980) is an American actor, producer, and dancer. Tatum made his film \
            debut in the drama film Coach Carter (2005). His breakthrough role was in the 2006 dance film Step Up, which introduced\
            him to a wider audience.\nTatum is known for his leading role in Magic Mike (2012), and its sequel, Magic Mike XXL \
            (2015) which he produced; he also starred in the action-comedy film 21 Jump Street and its 2014 sequel, 22 Jump Street.\
            He has also, appeared as the character Duke in the 2009 action film G.I. Joe: The Rise of Cobra and its 2013 sequel \
            G.I. Joe: Retaliation. He appeared in romantic films such as Dear John (2010) and The Vow (2012). His other films \
            include She's the Man (2006), The Dilemma (2011), White House Down (2013), the drama Foxcatcher (2014), The Hateful\
            Eight (2015), Hail, Caesar! (2016), and Logan Lucky (2017).",
        movies: [],
        upcomingMovies: [],
        dob: new Date('26 April 1980')
    },
    {
        name: 'Samuel L. Jackson',
        image: 'https://www.gstatic.com/tv/thumb/persons/71048/71048_v9_ba.jpg',
        bio : "Samuel Leroy Jackson (born December 21, 1948) is an American actor and film producer. Jackson has won critical\
            acclaim and numerous accolades and awards, and is the highest-grossing actor of all time (when cameo appearances are\
            excluded). He came to prominence in the early 1990s with films such as Goodfellas (1990), Jungle Fever (1991), \
            Patriot Games (1992), Amos & Andrew (1993), True Romance (1993), Jurassic Park (1993) and his collaborations with\
            director Quentin Tarantino including Pulp Fiction (1994), Jackie Brown (1997), Django Unchained (2012), and The\
            Hateful Eight (2015). For his role in Pulp Fiction, he was nominated for the Academy Award for Best Supporting Actor.",
        movies: [],
        upcomingMovies: [],
        dob: new Date('21 December 1948')
    },
    {
        name: 'Taron Egerton',
        image: 'https://www.gstatic.com/tv/thumb/persons/765421/765421_v9_bb.jpg',
        bio : "Taron David Egerton (born 10 November 1989) is a Welsh actor. He is the recipient of such accolades as a Golden\
            Globe Award and has been nominated for two British Academy Film Awards, a Grammy Award, and a Screen Actors Guild Award.\
            He gained recognition for starring as Gary \"Eggsy\" Unwin in the action comedy film Kingsman: The Secret Service (2014)\
            and its sequel Kingsman: The Golden Circle (2017). Egerton has also starred in several biopics, portraying Edward\
            Brittain in the drama Testament of Youth (2014), Edward \"Mad Teddy\" Smith in the crime thriller Legend (2015), the\
            titular character in the sports film Eddie the Eagle (2016), and singer-songwriter Elton John in the musical \
            Rocketman (2019), for which he won the Golden Globe Award for Best Actor – Motion Picture Musical or Comedy.",
        movies: [],
        upcomingMovies: [],
        dob: new Date('10 November 1989')
    },
    {
        name: 'Hugh Jackman',
        image: 'https://www.gstatic.com/tv/thumb/persons/171234/171234_v9_bb.jpg',
        bio : "Hugh Michael Jackman AC (born 12 October 1968) is an Australian actor, singer, and producer. He is best known for\
            playing Wolverine in the X-Men film series from 2000 to 2018, a role for which he holds the Guinness World Record for \
            \"longest career as a live-action Marvel superhero\". Jackman is also recognised for his lead roles in films such as\
            the romantic comedy Kate & Leopold (2001), the action film Van Helsing (2004), the drama The Prestige (2006), the \
            fantasy drama The Fountain (2006), the period romance Australia (2008), the film version of Les Misérables (2012),\
            the thriller Prisoners (2013), and the musical The Greatest Showman (2017), for which he received a Grammy Award for \
            Best Soundtrack Album. For playing Jean Valjean in Les Misérables, he was nominated for the Academy Award for Best \
            Actor and won the Golden Globe Award for Best Actor – Motion Picture Musical or Comedy.",
        movies: [],
        upcomingMovies: [],
        dob: new Date('12 October 1968')
    },
    {
        name: 'Mark Ruffalo',
        image: 'https://www.gstatic.com/tv/thumb/persons/43389/43389_v9_bb.jpg',
        bio : "Mark Ruffalo (born November 22, 1967) is an American actor and producer. He began acting in the early 1990s and \
            first gained recognition for his work in Kenneth Lonergan's play This Is Our Youth (1998) and drama film You Can Count\
            On Me (2000). He went on to star in the romantic comedies 13 Going on 30 (2004) and Just like Heaven (2005) and the\
            thrillers Zodiac (2007) and Shutter Island (2010). He gained wider recognition for his role as Bruce Banner / Hulk\
            in the Marvel Cinematic Universe superhero films The Avengers (2012), Avengers: Age of Ultron (2015), Thor: Ragnarok\
            (2017), Avengers: Infinity War (2018), and Avengers: Endgame (2019).",
        movies: [],
        upcomingMovies: [],
        dob: new Date('22 November 1967')
    },
    {
        name: 'Keira Knightley',
        image: 'https://www.gstatic.com/tv/thumb/persons/245574/245574_v9_bb.jpg',
        bio : "Keira Christina Knightley, OBE (born 26 March 1985) is a British actress. She has been nominated for two British\
            Academy Film Awards, three Golden Globe Awards, and two Academy Awards. Knightley began acting as a child on television\
            and made her feature film debut in 1995, before making her breakthrough with the 2002 film Bend It Like Beckham. She\
            then starred in the 2003 fantasy swashbuckler film Pirates of the Caribbean, playing Elizabeth Swann, a role that she\
            would reprise in the subsequent films of the franchise. A significant turning point came in her career when Knightley\
            received a nomination for the Academy Award for Best Actress for starring as Elizabeth Bennet in Pride & Prejudice \
            (2005). She became known for starring in several other period dramas, including Atonement (2007), The Duchess (2008)\
            , A Dangerous Method (2011), Anna Karenina (2012), and Colette (2018). Knightley received her second nomination for\
            the Academy Award for portraying Joan Clarke in the historical drama The Imitation Game (2014). Her contemporary \
            film roles were in the romantic comedy Begin Again (2013), the action thriller Jack Ryan: Shadow Recruit (2014), \
            the adventure film Everest (2015), and the docudrama Official Secrets (2019).",
        movies: [],
        upcomingMovies: [],
        dob: new Date('26 March 1985')
    },
    {
        name: 'Jesse Eisenberg',
        image: 'https://m.media-amazon.com/images/M/MV5BNTE3MzQzODE3OV5BMl5BanBnXkFtZTcwMDE0ODY1NA@@._V1_.jpg',
        bio : "Jesse Adam Eisenberg (born October 5, 1983) is an American actor, author, and playwright. He made his television\
            debut with the short-lived comedy-drama series Get Real (1999–2000). Following his first leading role in the comedy-drama\
            film Roger Dodger (2002), he appeared in the drama film The Emperor's Club (2002), the psychological thriller film The\
            Village (2004), the comedy-drama film The Squid and the Whale (2005), and the drama film The Education of Charlie \
            Banks (2007). He is also known for playing Facebook founder Mark Zuckerberg in David Fincher's The Social Network \
            (2010). In 2009, Eisenberg had his breakthrough with starring roles in the comedy-drama film Adventureland and the\
            horror comedy Zombieland. His portrayal of Zuckerberg in The Social Network earned him nominations for various awards\
            , including the BAFTA, Golden Globe, and Academy Award for Best Actor. He also starred in Holy Rollers (2010), which \
            was nominated for the Grand Jury Prize at the 2010 Sundance Film Festival.",
        movies: [],
        upcomingMovies: [],
        dob: new Date('5 October 1983')
    },
    {
        name: 'Woody Harrelson',
        image: 'https://www.gstatic.com/tv/thumb/persons/733/733_v9_bc.jpg',
        bio : "Woodrow Tracy Harrelson (born July 23, 1961) is an American actor and playwright. He first became known for his\
            role as bartender Woody Boyd on the NBC sitcom Cheers (1985–1993), for which he won a Primetime Emmy Award for Outstanding\
            Supporting Actor in a Comedy Series from a total of five nominations. He has also received three Academy Award \
            nominations: Best Actor for The People vs. Larry Flynt (1996) and Best Supporting Actor for The Messenger (2009)\
            and Three Billboards Outside Ebbing, Missouri (2017).",
        movies: [],
        upcomingMovies: [],
        dob: new Date('23 July 1961')
    },
    {
        name: 'Daniel Craig',
        image: 'https://www.gstatic.com/tv/thumb/persons/77711/77711_v9_bb.jpg',
        bio : "Daniel Wroughton Craig (born 2 March 1968) is an English actor. After training at the National Youth Theatre and\
            graduating from the Guildhall School of Music and Drama in 1991, Craig began his career on stage. He made his film debut\
            in the drama The Power of One (1992) and attracted attention with appearances in the historical television war drama \
            Sharpe's Eagle (1993), the family film A Kid in King Arthur's Court (1995), the television serial drama Our Friends in\
            the North (1996), the biographical film Elizabeth (1998), the television film Love Is the Devil: Study for a Portrait \
            of Francis Bacon (1998), the indie war film The Trench (1999), the drama film Some Voices (2000), the action film Lara\
            Croft: Tomb Raider (2001), the crime thriller film Road to Perdition (2002), the crime thriller film Layer Cake (2004),\
            and the historical drama film Munich (2005).",
        movies: [],
        upcomingMovies: [],
        dob: new Date('2 March 1968')
    },
    {
        name: 'Chris Evans',
        image: 'https://www.gstatic.com/tv/thumb/persons/173489/173489_v9_ba.jpg',
        bio : "Christopher Robert Evans (born June 13, 1981)[2] is an American actor. He first gained attention in 2005 as \
            the Marvel Comics character Human Torch in Fantastic Four (2005) and its 2007 sequel and later gained further worldwide\
            attention for his portrayal of Steve Rogers / Captain America in the Marvel Cinematic Universe, appearing in eleven \
            films including four cameos. His work in the latter film series established him as one of the highest-paid actors in\
            the world.",
        movies: [],
        upcomingMovies: [],
        dob: new Date('13 June 1981')
    },
    {
        name: 'Octavia Spencer',
        image: 'https://www.gstatic.com/tv/thumb/persons/221666/221666_v9_bc.jpg',
        bio : "Octavia Lenora Spencer (born May 25, 1972) is an American actress, author, and producer. She is the recipient of\
            several accolades, including an Academy Award and a Golden Globe Award. She is one of two black actresses to have \
            received three Academy Award nominations and the first black actress to receive two consecutive nominations. Spencer\
            made her film debut in the 1996 drama A Time to Kill. Following a decade of brief roles in film and television, her\
            breakthrough came in 2011, when she played a maid in 1960s America in The Help, for which she won several awards, \
            including the Academy Award for Best Supporting Actress. For her performance in Ryan Coogler's biopic Fruitvale\
            Station (2013), she won the National Board of Review Award for Best Supporting Actress.",
        movies: [],
        upcomingMovies: [],
        dob: new Date('25 May 1972')
    },
    {
        name: 'Will Smith',
        image: 'https://www.gstatic.com/tv/thumb/persons/1650/1650_v9_ba.jpg',
        bio : "Willard Carroll \"Will\" Smith, Jr. (born September 25, 1968) is an American actor, comedian, producer, rapper,\
            and songwriter. He has enjoyed success in television, film, and music. In April 2007, Newsweek called him \"the most\
            powerful actor in Hollywood\". Smith has been nominated for five Golden Globe Awards, two Academy Awards, and has won\
            four Grammy Awards. In the late 1980s, Smith achieved modest fame as a rapper under the name The Fresh Prince. \
            In 1990, his popularity increased dramatically when he starred in the popular television series The Fresh Prince\
            of Bel-Air. The show ran for six seasons (1990-96) on NBC and has been syndicated consistently on various networks\
            since then. After the series ended, Smith moved from television to film, and ultimately starred in numerous blockbuster\
            films. He is the only actor to have eight consecutive films gross over $100 million in the domestic box office, eleven\
            consecutive films gross over $150 million internationally, and eight consecutive films in which he starred open at\
            the number one spot in the domestic box office tally.",
        movies: [],
        upcomingMovies: [],
        dob: new Date('25 September 1968')
    },
    {
        name: 'Martin Lawrence',
        image: 'https://www.gstatic.com/tv/thumb/persons/990/990_v9_bb.jpg',
        bio : "Martin Fitzgerald Lawrence (born April 16, 1965) is an American stand-up comedian, actor, producer, talk show \
            host, writer, and former Golden Gloves boxer. Lawrence came to fame during the 1990s, establishing a Hollywood career\
            as a leading actor, most notably in the Fox television sitcom Martin and the films House Party, Boomerang, Bad Boys,\
            Wild Hogs, Nothing to Lose, Blue Streak, Life, Big Momma's House, and A Thin Line Between Love and Hate.",
        movies: [],
        upcomingMovies: [],
        dob: new Date('16 April 1965')
    },
    {
        name: 'Denzel Washington',
        image: 'https://m.media-amazon.com/images/M/MV5BMjE5NDU2Mzc3MV5BMl5BanBnXkFtZTcwNjAwNTE5OQ@@._V1_QL50_SY1000_SX750_AL_.jpg',
        bio : "Denzel Hayes Washington Jr. (born December 28, 1954) is an American actor, director, and producer. He has received\
            two Golden Globe awards, one Tony Award, and two Academy Awards: Best Supporting Actor for the historical war drama film\
            Glory (1989) and Best Actor for his role as corrupt detective Alonzo Harris in the crime thriller Training Day (2001). \
            He is widely regarded as one of the greatest actors of his generation, and is considered an American cultural icon.",
        movies: [],
        upcomingMovies: [],
        dob: new Date('28 December 1954')
    },
    {
        name: 'Don Cheadle',
        image: 'https://www.gstatic.com/tv/thumb/persons/71830/71830_v9_ba.jpg',
        bio : "Donald Frank Cheadle Jr. (born November 29, 1964) is an American actor, author, director, producer and writer. \
            Following early roles in Hamburger Hill (1987), and as the gangster \"Rocket\" in the film Colors (1988), Cheadle built \
            his career in the 1990s with roles in Devil in a Blue Dress (1995), Rosewood (1997) and Boogie Nights (1997). His \
            collaboration with director Steven Soderbergh resulted in the films Out of Sight (1998), Traffic (2000) and The Ocean's \
            Trilogy (2001–2007).",
        movies: [],
        upcomingMovies: [],
        dob: new Date('29 November 1964')
    },
    {
        name: 'Liam Neeson',
        image: 'https://www.gstatic.com/tv/thumb/persons/1236/1236_v9_bb.jpg',
        bio : "Liam John Neeson OBE (born 7 June 1952) is a Northern Irish actor. He has been nominated for a number of awards,\
            including an Academy Award for Best Actor, a BAFTA Award for Best Actor in a Leading Role, and three Golden Globe Awards\
            for Best Actor in a Motion Picture Drama. Empire magazine ranked Neeson among both the \"100 Sexiest Stars in Film History\" \
            and \"The Top 100 Movie Stars of All Time\".",
        movies: [],
        upcomingMovies: [],
        dob: new Date('7 June 1952')
    },
    {
        name: 'Chadwick Boseman',
        image: 'https://www.gstatic.com/tv/thumb/persons/492157/492157_v9_bb.jpg',
        bio : 'Chadwick Aaron Boseman (born November 29, 1976,[2] or in 1977)[3] (sources differ) is an American actor known for \
            his portrayals of real-life historical figures such as Jackie Robinson in 42 (2013), James Brown in Get on Up (2014) and\
            Thurgood Marshall in Marshall (2017), and for his portrayal of the superhero Black Panther in the Marvel Cinematic \
            Universe films Captain America: Civil War (2016), Black Panther (2018), Avengers: Infinity War (2018) and Avengers: \
            Endgame (2019).',
        movies: [],
        upcomingMovies: [],
        dob: new Date('29 November 1977')
    },
    {
        name: 'Frank Grillo',
        image: 'https://www.gstatic.com/tv/thumb/persons/257236/257236_v9_ba.jpg',
        bio : 'Frank Anthony Grillo (born June 8, 1965) is an American actor known for his roles in films such as Warrior (2011), \
            The Grey (2012), End of Watch (2012), and Zero Dark Thirty (2012). He had his first leading role in the action horror film\
            The Purge: Anarchy (2014), portraying Sergeant Leo Barnes, a role he reprised in The Purge: Election Year (2016). He also\
            plays the Marvel supervillain Brock Rumlow / Crossbones in the Marvel Cinematic Universe and Big Daddy in the Chinese \
            action film Wolf Warrior 2 (2017), the highest-grossing non-Hollywood film of all time.[3] Also in 2017, he played the\
            main role in the Netflix film Wheelman as a getaway driver in a botched bank heist.',
        movies: [],
        upcomingMovies: [],
        dob: new Date('8 June 1965')
    },
    {
        name: 'Sebastian Stan',
        image: 'https://www.gstatic.com/tv/thumb/persons/490465/490465_v9_bb.jpg',
        bio : 'Sebastian Stan (born August 13, 1982) is a Romanian-American actor. On television, he has played Carter Baizen\
            in Gossip Girl, Prince Jack Benjamin in Kings, Jefferson in Once Upon a Time, and T.J. Hammond in Political Animals.\
            The latter earned him a nomination for the Critics\' Choice Television Award for Best Supporting Actor in a \
            Movie/Miniseries. Stan gained wide recognition for his role as Bucky Barnes / Winter Soldier in the Marvel Cinematic \
            Universe, beginning with 2011\'s Captain America: The First Avenger and later also in Captain America: The Winter Soldier \
            (2014), Ant-Man (2015), Captain America: Civil War (2016), Black Panther (2018), Avengers: Infinity War (2018), and \
            Avengers: Endgame (2019).',
        movies: [],
        upcomingMovies: [],
        dob: new Date('13 August 1982')
    },
    {
        name: 'Benedict Wong',
        image: 'https://www.gstatic.com/tv/thumb/persons/290344/290344_v9_bb.jpg',
        bio : 'Benedict Wong (born 3 July 1971) is an English-Hong Kong actor who has appeared on film, television, and stage. \
            Wong is known for portraying Kublai Khan in Netflix\'s Marco Polo (2014–2016) and Bruce Ng in The Martian (2015). Wong \
            portrays Wong in the Marvel Cinematic Universe, making his first appearance in Doctor Strange (2016) and later in \
            Avengers: Infinity War (2018) and Avengers: Endgame (2019). His first role was in a 1993 BBC Radio play called Kai \
            Mei Sauce, written by Kevin Wong. He appeared as Errol Spears alongside Sean Lock in the situation comedy 15 Storeys \
            High, and as Franklin Fu in the second series of Look Around You.In 2007, Wong starred in the feature film Grow Your \
            Own. Wong went on to appear in the second episode of Series 4 of the Channel 4 comedy The IT Crowd, playing the character \
            Prime, a previous Countdown contestant who had won the sixteenth Countdown teapot when he was known as Harold Tong.',
        movies: [],
        upcomingMovies: [],
        dob: new Date('3 June 1971')
    },
    {
        name: 'Jackie Chan',
        image: 'https://www.gstatic.com/tv/thumb/persons/28555/28555_v9_ba.jpg',
        bio : 'Chan Kong-sang SBS MBE PMW(Chinese: 陳港生; born 7 April 1954) known professionally as Jackie Chan, is a Hong Kongese \
            martial artist, actor, film director, producer, stuntman, and singer. He is known in the cinematic world for his \
            acrobatic fighting style, comic timing, use of improvised weapons, and innovative stunts, which he typically \
            performs himself. He has trained in Wushu or Kung Fu and Hapkido, and has been acting since the 1960s, appearing \
            in over 150 films. Chan is one of the most recognisable and influential cinematic personalities in the world, gaining \
            a widespread following in both the Eastern and Western hemispheres, and has received stars on the Hong Kong Avenue of \
            Stars and the Hollywood Walk of Fame. He has been referenced in various pop songs, cartoons, and video games.',
        movies: [],
        upcomingMovies: [],
        dob: new Date('7 April 1954')
    },
    {
        name: 'Michael Peña',
        image: 'https://upload.wikimedia.org/wikipedia/commons/1/14/Michael_Pe%C3%B1a_TIFF_2015.jpg',
        bio : 'Michael Peña was born and raised in Chicago, to Nicolasa, a social worker, and Eleuterio Peña, who worked at a \
            button factory. His parents were originally from Mexico. After graduating from high school, he went to an open casting \
            call for the Peter Bogdanovich feature To Sir, with Love II (1996), and to his surprise, beat out hundreds of other \
            young men for a role. After relocating to Los Angeles Peña quickly booked a succession of roles in features including \
            Star Maps, My Fellow Americans (1996) (opposite Jack Lemmon and James Garner), La Cucaracha (1998) (winner of the Best \
            Picture in the Austin Film Festival), Bellyfruit (1999), and the Disney/Jerry Bruckheimer feature Gone in 60 Seconds \
            (2000). Michael resides in Los Angeles, where he plays bass guitar with his band, plays golf, and boxes for relaxation.',
        movies: [],
        upcomingMovies: [],
        dob: new Date('13 January 1976')
    },
    {
        name: 'Michael B. Jordan',
        image: 'https://www.gstatic.com/tv/thumb/persons/382200/382200_v9_bb.jpg',
        bio : 'Michael Bakari Jordan (born February 9, 1987) is an American actor and producer. He is known for his film roles as\
            shooting victim Oscar Grant in the drama Fruitvale Station (2013), boxer Adonis "Donnie" Creed in the Rocky sequel film \
            Creed (2015) and main antagonist Erik Killmonger in Black Panther (2018), all three of which were co-written and directed\
            by Ryan Coogler. Jordan\'s television roles include Wallace in the HBO series The Wire (2002), Reggie Montgomery in the \
            ABC series All My Children (2003–2006), and Vince Howard in the NBC drama series Friday Night Lights (2009–2011).',
        movies: [],
        upcomingMovies: [],
        dob: new Date('9 February 1987')
    },
    {
        name: 'Martin Freeman',
        image: 'https://www.gstatic.com/tv/thumb/persons/279370/279370_v9_bc.jpg',
        bio : 'Martin John Christopher Freeman (born 8 September 1971) is an English actor and comedian, known for portraying Bilbo\
            Baggins in Peter Jackson\'s The Hobbit film trilogy (2012–2014), Tim Canterbury in the original UK version of sitcom \
            mockumentary The Office (2001–2003), Dr. John Watson in the British crime drama Sherlock (2010–2017), and Lester Nygaard\
            in the dark comedy-crime drama TV series Fargo (2014). His other notable film roles include the romantic comedy Love \
            Actually (2003), the comic science fiction film The Hitchhiker\'s Guide to the Galaxy (2005), the semi-improvised comedy \
            Nativity! (2009), the comedic Three Flavours Cornetto trilogy (2004–2013), most prominently in the sci-fi comedy The \
            World\'s End (2013), and his portrayal of Everett K. Ross in the Marvel films Captain America: Civil War (2016) and \
            Black Panther (2018).',
        movies: [],
        upcomingMovies: [],
        dob: new Date('8 September 1971')
    },
    {
        name: 'Tyrese Gibson',
        image: 'https://www.gstatic.com/tv/thumb/persons/200301/200301_v9_bb.jpg',
        bio : 'Tyrese Gibson (born December 30, 1978), also known mononymously as Tyrese, is an American singer, songwriter, \
            author, rapper, actor, model, VJ and screenwriter. He played Joseph "Jody" Summers in Baby Boy, Angel Mercer in Four \
            Brothers, Roman Pearce in the Fast & Furious films, and Robert Epps in the Transformers film series. After releasing \
            several albums, he transitioned into films, with lead roles in several major Hollywood releases. According to Billboard\
            Tyrese has sold 3.69 million albums in the U.S.',
        movies: [],
        upcomingMovies: [],
        dob: new Date('30 December 1978')
    },
    {
        name: 'Naomie Harris',
        image: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Naomie_Harris_2014.jpg',
        bio : 'Naomie Melanie Harris OBE is an English actress. She started her career as a child, appearing in the television series \
            Simon and the Witch in 1987. She portrayed Selena in 28 Days Later (2002), the witch Tia Dalma in the second and third Pirates\
            of the Caribbean films, and Winnie Mandela in Mandela: Long Walk to Freedom (2013). She won plaudits for her performance as \
            Eve Moneypenny in the James Bond films Skyfall (2012), Spectre (2015), and No Time to Die (2020). In 2016, she starred in \
            the critically acclaimed film Moonlight, a performance that earned her several accolades, including nominations for the \
            Golden Globe, BAFTA, and Academy Award for Best Supporting Actress.',
        movies: [],
        upcomingMovies: [],
        dob: new Date('6 September 1976')
    },
    {
        name: 'Tom Holland',
        image: 'https://www.gstatic.com/tv/thumb/persons/733885/733885_v9_bb.jpg',
        bio : 'Thomas Stanley Holland is an English actor. He first gained recognition for his starring role in the disaster film\
            The Impossible (2012). He rose to stardom for playing Peter Parker / Spider-Man in the Marvel Cinematic Universe superhero\
            films Captain America: Civil War (2016), Spider-Man: Homecoming (2017), Avengers: Infinity War (2018), Avengers: Endgame \
            (2019), and Spider-Man: Far From Home (2019). A graduate of the BRIT School in London, Holland previously appeared on \
            stage in the title role of Billy Elliot the Musical in London\'s West End in 2008, and his other films include In the \
            Heart of the Sea (2015), and The Current War (2017). In 2017, Holland received the BAFTA Rising Star Award.',
        movies: [],
        upcomingMovies: [],
        dob: new Date('1 June 1996')
    },
    {
        name: 'Emma Stone',
        image: 'https://www.gstatic.com/tv/thumb/persons/501536/501536_v9_bb.jpg',
        bio : 'Emily Jean "Emma" Stone (born November 6, 1988) is an American actress. The recipient of numerous accolades, \
            including an Academy Award and a Golden Globe Award, she was the world\'s highest-paid actress in 2017. Stone has appeared\
            in Forbes Celebrity 100 in 2013 and in 2017, she was featured by Time as one of the 100 most influential people in the \
            world. Born and raised in Scottsdale, Arizona, Stone began acting as a child, in a theater production of The Wind in \
            the Willows in 2000. As a teenager, she relocated to Los Angeles with her mother and made her television debut in In \
            Search of the New Partridge Family (2004), a reality show that produced only an unsold pilot. After small television \
            roles, she made her film debut in Superbad (2007), and received positive media attention for her role in Zombieland (2009). ',
        movies: [],
        upcomingMovies: [],
        dob: new Date('6 November 1988')
    },
    {
        name: 'Amy Adams',
        image: 'https://www.gstatic.com/tv/thumb/persons/168053/168053_v9_bb.jpg',
        bio : 'Amy Lou Adams (born August 20, 1974) is an American actress. Known for both her comedic and dramatic performances, \
            she has placed three times in annual rankings of the highest-paid actresses in the world. Her accolades include two \
            Golden Globes, and nominations for six Academy Awards and seven British Academy Film Awards. After moving to Los Angeles, \
            she made guest appearances in television and took on "mean girl" parts in small-scale features. Her first major role \
            came in Steven Spielberg\'s 2002 biopic Catch Me If You Can, opposite Leonardo DiCaprio, but she was unemployed for a \
            year afterward. Her breakthrough came in the part of a loquacious pregnant woman in the 2005 independent film Junebug.',
        movies: [],
        upcomingMovies: [],
        dob: new Date('20 August 1974')
    },
    {
        name: 'Chris Pratt',
        image: 'https://www.gstatic.com/tv/thumb/persons/249381/249381_v9_bb.jpg',
        bio : 'Christopher Michael Pratt is an American film and television actor. He came to prominence for his small-screen roles, \
            including Bright Abbott in Everwood (2002), Ché in The O.C. (2003), and Andy Dwyer and Parks and Recreation (2009), and \
            notable film roles in Moneyball (2011), The Five-Year Engagement (2012), Zero Dark Thirty (2012), Delivery Man (2013), \
            and Her (2013). In 2014, he broke out as a leading man after headlining two of the year\'s biggest films: he voiced Emmet \
            Brickowoski, in The Lego Movie (2014), and starred as Peter Quill / Star-Lord in Guardians of the Galaxy (2014). In \
            2015, he headlined the sci-fi thriller Jurassic World (2015), the fourth installment in the Jurassic Park franchise \
            and his most financially successful film. In 2016, he co-starred in the remake The Magnificent Seven (2016), with Denzel \
            Washington and Ethan Hawke, and appeared with Jennifer Lawrence in the sci-fi drama Passengers (2016). In the near future, \
            he returns as Star-Lord for Guardians of the Galaxy Vol. 2 (2017), with Jurassic World: Fallen Kingdom (2018) not far \
            behind.',
        movies: [],
        upcomingMovies: [],
        dob: new Date('21 June 1979')
    },
    {
        name: 'Zoe Saldana',
        image: 'https://www.gstatic.com/tv/thumb/persons/194024/194024_v9_bb.jpg',
        bio : 'Zoe Saldana was born on June 19, 1978 in Passaic, New Jersey, to Asalia Nazario and Aridio Saldaña. Her father \
            was Dominican and her mother is Puerto Rican. She was raised in Queens, New York. When she was 10 years old, she and \
            her family moved to the Dominican Republic, where they would live for the next seven years. While living there, Zoe\
            discovered a keen interest in performance dance and began her training at the prestigious ECOS Espacio de Danza \
            Dance Academy where she learned ballet as well as other dance forms. Not only did her training provide an excellent \
            outlet for the enthusiastic and energetic youngster, it would also prove to be a fortunate precursor for the start \
            of her professional acting career. At age 17, Zoe and her family moved back to the United States where her love for \
            dance followed and an interest in theater performance became stronger.',
        movies: [],
        upcomingMovies: [],
        dob: new Date('19 June 1978')
    },
    {
        name: 'Dave Bautista',
        image: 'https://www.gstatic.com/tv/thumb/persons/566644/566644_v9_bb.jpg',
        bio : 'David Michael Bautista, Jr. was born on January 18, 1969 in Washington, D.C., to Donna Raye (Mullins) and David \
            Michael Bautista, a hairdresser. His father is Filipino, and his mother has Greek ancestry.When WCW officials told him \
            he\'d never make it in sports entertainment, Bautista pushed himself to achieve his dream of being a Superstar. In \
            May 2002, he made his debut on SmackDown using the ring name Batista, but it wasn\'t until a move to Raw and two \
            victories over Kane that "The Animal" began to make noise in the WWE Universe. The wins impressed Ric Flair and \
            Triple H, who were looking to align themselves with the industry\'s brightest new stars. After a lengthy search, \
            they identified Randy Orton and Batista. Collectively the four Superstars became known as Evolution.',
        movies: [],
        upcomingMovies: [],
        dob: new Date('18 January 1969')
    },
    {
        name: 'Kumail Nanjiani',
        image: 'https://www.gstatic.com/tv/thumb/persons/543607/543607_v9_ba.jpg',
        bio : 'Kumail Ali Nanjiani is a Pakistani-American stand-up comedian, actor, podcast host and writer best known for \
            writing and starring in the romantic comedy The Big Sick (2017) and for being a main cast member on HBO\'s comedy \
            series Silicon Valley (2014–2019). For writing the former with his wife Emily V. Gordon, Nanjiani was nominated for \
            the Academy Award for Best Original Screenplay. In 2018, Time named him one of the 100 most influential people in the \
            world. Nanjiani has also voiced Prismo on the animated series Adventure Time and starred in the TNT series Franklin \
            & Bash and the Adult Swim series Newsreaders. He also co-hosted the Comedy Central show The Meltdown with Jonah and \
            Kumail as well as playing various roles in the series Portlandia.',
        movies: [],
        upcomingMovies: [],
        dob: new Date('21 February 1978')
    },
    {
        name: 'Karen Gillan',
        image: 'https://m.media-amazon.com/images/M/MV5BMTQwMDQ0NDk1OV5BMl5BanBnXkFtZTcwNDcxOTExNg@@._V1_.jpg',
        bio : 'Karen Sheila Gillan is a Scottish actress and filmmaker. She first became known for playing Amy Pond, a primary \
            companion to the Eleventh Doctor, in the BBC One series Doctor Who (2010–2013). She received international \
            recognition for playing Nebula in the Marvel Cinematic Universe films Guardians of the Galaxy (2014), Guardians \
            of the Galaxy Vol. 2 (2017), Avengers: Infinity War (2018), and Avengers: Endgame (2019), and for her starring role \
            in Jumanji: Welcome to the Jungle (2017) and Jumanji: The Next Level (2019).',
        movies: [],
        upcomingMovies: [],
        dob: new Date('28 November 1987')
    },
    {
        name: 'Lance Reddick',
        image: 'https://www.gstatic.com/tv/thumb/persons/158649/158649_v9_bb.jpg',
        bio : 'Lance Reddick (born December 31, 1962) is an American actor and musician. He is best known for playing Cedric \
            Daniels in The Wire and Phillip Broyles in Fringe. He is also known for portraying Detective Johnny Basil on Oz, \
            Matthew Abaddon in Lost and Charon from the John Wick franchise. He has provided the voice and likeness for video \
            game characters Martin Hatch in Quantum Break, Sylens in Horizon Zero Dawn and Commander Zavala in the Destiny \
            franchise. He currently plays Chief Irvin Irving on Amazon Prime\'s Bosch.',
        movies: [],
        upcomingMovies: [],
        dob: new Date('31 December 1962')
    },
    {
        name: 'J.K. Simmons',
        image: 'https://www.gstatic.com/tv/thumb/persons/72076/72076_v9_ba.jpg',
        bio : 'Jonathan Kimble Simmons (born January 9, 1955) is an American television, film, and voice actor. In television, \
            he has played Dr. Emil Skoda on the NBC series Law & Order, Vernon Schillinger on the HBO series Oz, and Assistant \
            Police Chief Will Pope on TNT\'s The Closer. From 2017 to 2019, he starred as Howard Silk in the Starz series Counterpart.',
        movies: [],
        upcomingMovies: [],
        dob: new Date('9 January 1955')
    },
    {
        name: 'Arnold Schwarzenegger',
        image: 'https://www.gstatic.com/tv/thumb/persons/1570/1570_v9_bb.jpg',
        bio : 'Arnold Alois Schwarzenegger is an Austrian-American actor, filmmaker, businessman, author, and former politician \
            and professional bodybuilder. He served as the 38th Governor of California from 2003 to 2011. As of 2020, he is the \
            most recent Republican governor of California. Schwarzenegger began lifting weights at the age of 15, and went on to win \
            the Mr. Universe title at age 20 before winning the Mr. Olympia contest seven times; he remains a prominent presence in \
            bodybuilding and has written many books and articles on the sport.',
        movies: [],
        upcomingMovies: [],
        dob: new Date('30 July 1947')
    },
    {
        name: 'Emilia Clarke',
        image: 'https://www.gstatic.com/tv/thumb/persons/613075/613075_v9_bb.jpg',
        bio : 'Emilia Isobel Euphemia Rose Clarke (born 23 October 1986) is an English actress. She studied at the Drama Centre \
            London, appearing in a number of stage productions, including one by the Company of Angels. After making her screen \
            debut in a short film, her television debut came with a guest appearance in an episode of the British medical soap \
            opera Doctors in 2009. The following year, she was named as one of the UK Stars of Tomorrow by Screen International \
            magazine for her role in the Syfy film Triassic Attack (2010).',
        movies: [],
        upcomingMovies: [],
        dob: new Date('23 October 1986')
    },
    {
        name: 'Idris Elba',
        image: 'https://www.gstatic.com/tv/thumb/persons/178333/178333_v9_bc.jpg',
        bio : 'Idrissa Akuna Elba OBE is an English actor, writer, producer, musician, DJ, rapper, and singer. He is known for \
            roles including Stringer Bell in the HBO series The Wire, DCI John Luther in the BBC One series Luther, and Nelson \
            Mandela in the biographical film Mandela: Long Walk to Freedom (2013). He has been nominated four times for a Golden \
            Globe Award for Best Actor – Miniseries or Television Film, winning one, and was nominated five times for a Primetime \
            Emmy Award.',
        movies: [],
        upcomingMovies: [],
        dob: new Date('6 September 1972')
    },
    {
        name: 'Ben Mendelsohn',
        image: 'https://www.gstatic.com/tv/thumb/persons/77856/77856_v9_ba.jpg',
        bio : 'Paul Benjamin Mendelsohn (born 3 April 1969) is an Australian actor, who first rose to prominence in Australia \
            for his breakout role in The Year My Voice Broke (1987). Since then he has had roles in films such as The Dark \
            Knight Rises (2012), Starred Up (2013), Mississippi Grind (2015), Rogue One (2016), Darkest Hour (2017) and \
            Steven Spielberg\'s Ready Player One (2018). In 2017, he joined the Marvel Cinematic Universe as Talos in Captain \
            Marvel (2019) and Spider-Man: Far From Home (2019).',
        movies: [],
        upcomingMovies: [],
        dob: new Date('3 April 1969')
    },
    {
        name: 'Tom Hanks',
        image: 'https://www.gstatic.com/tv/thumb/persons/62982/62982_v9_bb.jpg',
        bio : 'Thomas Jeffrey Hanks is an American actor and filmmaker. Known for both his comedic and dramatic roles, Hanks is \
            one of the most popular and recognizable film stars worldwide, and is widely regarded as an American cultural icon. \
            Hanks\' films have grossed more than $4.9 billion in North America and more than $9.96 billion worldwide, making \
            him the fifth-highest-grossing actor in North America. Hanks made his breakthrough with leading roles in the comedies \
            Splash (1984) and Big (1988). He won two consecutive Academy Awards for Best Actor for starring as a gay lawyer \
            suffering from AIDS in Philadelphia (1993) and a young man with below-average IQ in Forrest Gump (1994). Hanks \
            collaborated with film director Steven Spielberg on five films: Saving Private Ryan (1998), Catch Me If You Can \
            (2002), The Terminal (2004), Bridge of Spies (2015), and The Post (2017).',
        movies: [],
        upcomingMovies: [],
        dob: new Date('9 July 1956')
    },
    {
        name: 'Shailene Woodley',
        image: 'https://www.gstatic.com/tv/thumb/persons/286724/286724_v9_ba.jpg',
        bio : 'Shailene Diann Woodley is an American actress, film producer, and activist. Brought up in Simi Valley, \
            California, Woodley began modeling at the age of four and began acting professionally in minor television roles. \
            She first gained prominence for her starring role as Amy Juergens in the ABC Family drama series The Secret Life \
            of the American Teenager (2008–2013).',
        movies: [],
        upcomingMovies: [],
        dob: new Date('15 November 1991')
    },
    {
        name: 'Ansel Elgort',
        image: 'https://www.gstatic.com/tv/thumb/persons/679374/679374_v9_bb.jpg',
        bio : 'Ansel Elgort is an American actor, known for playing Augustus Waters in the romance The Fault in Our Stars \
            (2014) and the title character in the action thriller Baby Driver (2017). He was born in New York City to photographer \
            Arthur Elgort and opera director Grethe Holby. His father is of Russian-Jewish heritage, while his mother has Norwegian \
            and British Isles ancestry.',
        movies: [],
        upcomingMovies: [],
        dob: new Date('14 March 1994')
    },
    {
        name: 'Jon Hamm',
        image: 'https://www.gstatic.com/tv/thumb/persons/217907/217907_v9_bb.jpg',
        bio : 'Jonathan Daniel Hamm is an American actor and producer best known for playing advertising executive Don Draper \
            in the AMC television drama series Mad Men (2007–2015). For much of the mid-1990s, he lived in Los Angeles, making \
            appearances in television series Providence, The Division, What About Brian, and Related. In 2000, he made his feature \
            film debut in the space adventure film Space Cowboys. The next year, he had a minor role in the independent comedy \
            Kissing Jessica Stein (2001). In 2008, Hamm appeared in a remake of the science fiction film The Day the Earth Stood \
            Still. His first leading film role was in the 2010 independent thriller Stolen. He then had leading roles in Million \
            Dollar Arm (2014), Keeping Up with the Joneses (2016), and Beirut (2018), and supporting roles in The Town (2010), \
            Sucker Punch (2011), Bridesmaids (2011), Baby Driver (2017), Tag (2018), and Bad Times at the El Royale (2018).',
        movies: [],
        upcomingMovies: [],
        dob: new Date('10 March 1971')
    },
    {
        name: 'Logan Lerman',
        image: 'https://www.gstatic.com/tv/thumb/persons/298784/298784_v9_bb.jpg',
        bio : 'Logan Wade Lerman (born January 19, 1992) is an American actor, known for playing the title role in the \
            fantasy-adventure Percy Jackson films. He appeared in commercials in the mid-1990s, before starring in the series \
            Jack & Bobby (2004–2005) and the movies The Butterfly Effect (2004) and Hoot (2006). Lerman gained further recognition \
            for his roles in the western 3:10 to Yuma, the thriller The Number 23, the comedy Meet Bill, and 2009\'s Gamer and My \
            One and Only. He subsequently played d\'Artagnan in 2011\'s The Three Musketeers, starred in the coming-of-age dramas \
            The Perks of Being a Wallflower (2012), Indignation (2016) and The Vanishing of Sidney Hall (2017), and had major roles \
            in the 2014 films Noah and Fury. In 2020, he returned to television with the series Hunters.',
        movies: [],
        upcomingMovies: [],
        dob: new Date('19 January 1992')
    },
    {
        name: 'Charlize Theron',
        image: 'https://www.gstatic.com/tv/thumb/persons/68310/68310_v9_bb.jpg',
        bio : 'Charlize Theron is a South African[4] and American actress and producer. She is the recipient of several accolades, \
            including an Academy Award, a Golden Globe Award, an American Cinematheque Award, and the Silver Bear for Best Actress. \
            Time magazine named her one of the 100 most influential people in the world in 2016, and she is one of the world\'s \
            highest-paid actresses, as of 2019. Theron came to international prominence in the 1990s by playing the leading lady \
            in the Hollywood films The Devil\'s Advocate (1997), Mighty Joe Young (1998), and The Cider House Rules (1999). In \
            2003, she received critical acclaim for her portrayal of serial killer Aileen Wuornos in Monster, for which she won \
            the Academy Award for Best Actress, becoming the first South African to win an Oscar in an acting category. She \
            received another Academy Award nomination for playing a sexually abused woman seeking justice in the drama North \
            Country (2005).',
        movies: [],
        upcomingMovies: [],
        dob: new Date('7 August 1975')
    },
    {
        name: 'Seth Rogen',
        image: 'https://www.gstatic.com/tv/thumb/persons/167023/167023_v9_ba.jpg',
        bio : 'Seth Aaron Rogen (born April 15, 1982) is a Canadian actor, comedian, writer, producer, and director. He began his \
            career performing stand-up comedy during his teenage years. While still living in his hometown Vancouver, he landed a \
            supporting role in Judd Apatow\'s series Freaks and Geeks. Shortly after he moved to Los Angeles for his role, Freaks \
            and Geeks was officially cancelled after one season due to low viewership. Rogen later got a part on sitcom Undeclared, \
            which also hired him as a writer. After landing his job as a staff writer on the final season of Da Ali G Show, Apatow \
            guided him toward a film career. As a staff writer, he was nominated for a Primetime Emmy Award for Outstanding Writing \
            for a Variety Series. Rogen made his first movie appearance in Donnie Darko with a minor role in 2001. Rogen was cast in \
            a supporting role and credited as a co-producer in Apatow\'s directorial debut, The 40-Year-Old Virgin.',
        movies: [],
        upcomingMovies: [],
        dob: new Date('15 April 1982')
    },
    {
        name: 'Randall Park',
        image: 'https://m.media-amazon.com/images/M/MV5BN2JjMzMyMTgtZmUzNy00OTExLTljYjYtZGIwMmQzYTdiZTUzXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_.jpg',
        bio : 'Randall Park (born March 23, 1974) is an American actor, comedian and writer. He is best known for portraying Kim \
            Jong-un in the 2014 film The Interview and Eddie Huang\'s father, American restaurateur Louis Huang, in Fresh Off the Boat, \
            for which he was nominated for the Critics\' Choice Television Award for Best Actor in a Comedy Series in 2016. In 2012, \
            he gained popularity playing Steve, a prank replacement of Jim Halpert in an episode of The Office. He also appears in \
            the Marvel Cinematic Universe film Ant-Man and the Wasp and upcoming television series WandaVision as FBI agent Jimmy \
            Woo, as well as in the DC Extended Universe film Aquaman as Dr. Stephen Shin. He has appeared in numerous web series \
            on Channel 101, including Dr. Miracles and IKEA Heights, and Wong Fu Productions.',
        movies: [],
        upcomingMovies: [],
        dob: new Date('23 March 1974')
    },
    {
        name: 'Ali Wong',
        image: 'https://www.gstatic.com/tv/thumb/persons/617492/617492_v9_bb.jpg',
        bio : 'Alexandra Wong is an American stand-up comedian, actress, and writer. She is noted for her Netflix stand-up \
            specials Baby Cobra and Hard Knock Wife, both of which received critical acclaim. She is also known for her leading film \
            role in the 2019 film Always Be My Maybe, which she produced and wrote with her co-star Randall Park. She is currently a \
            main cast member on the ABC television show American Housewife. Previously, she appeared on Are You There, Chelsea?, \
            Inside Amy Schumer, and Black Box. She also wrote for the first three seasons of the sitcom Fresh Off the Boat. Wong \
            voiced title character Roberta "Bertie" Songthrush, a polite songbird and aspiring baker on the critically acclaimed \
            animated series Tuca & Bertie and new student "Ali" on the hit series Big Mouth.',
        movies: [],
        upcomingMovies: [],
        dob: new Date('19 April 1982')
    },
    {
        name: 'Ginnifer Goodwin',
        image: 'https://www.gstatic.com/tv/thumb/persons/302764/302764_v9_ba.jpg',
        bio : 'Jennifer Michelle "Ginnifer" Goodwin (born May 22, 1978) is an American actress. She is known for her starring role \
            as Margene Heffman in the HBO drama series Big Love (2006–2011) and Snow White / Mary Margaret Blanchard in the ABC \
            fantasy series Once Upon a Time (2011–2018). Goodwin has appeared in various films, including the drama Mona Lisa \
            Smile (2003), the musical biopic Walk the Line (2005), the romantic comedy He\'s Just Not That into You (2009), the \
            family comedy Ramona and Beezus (2010), the romantic comedy Something Borrowed (2011), and the biopic Killing Kennedy \
            (2013). She also voiced the lead role of Fawn in the Disney animated fantasy film Tinker Bell and the Legend of the \
            Neverbeast (2014) and Judy Hopps in the Disney animated fantasy comedy film Zootopia (2016).',
        movies: [],
        upcomingMovies: [],
        dob: new Date('22 May 1978')
    },
    {
        name: 'David Harbour',
        image: 'https://www.gstatic.com/tv/thumb/persons/277640/277640_v9_ba.jpg',
        bio : 'David Harbour is an American actor who has performed in film, television, and the theater. He is known for his role \
            as CIA agent Gregg Beam in Quantum of Solace (2008), Shep Campbell in Revolutionary Road (2008), Van Hauser in End of \
            Watch (2012) and Dexter Tolliver in Suicide Squad (2016). He also plays Chief Jim Hopper on the Netflix original series, \
            Stranger Things (2016). Harbour began acting professionally on Broadway in 1999, in the revival of The Rainmaker. He then \
            made his television debut that same year in an episode of Law & Order, playing a waiter. He appeared again in 2002 in an \
            episode of Law & Order: Special Victims Unit, playing a child murderer. Harbour portrayed the recurring role of MI6 Agent \
            Roger Anderson in the ABC series Pan Am. In 2005, he was nominated for a Tony Award for his performance in a production of \
            Who\'s Afraid of Virginia Woolf?.',
        movies: [],
        upcomingMovies: [],
        dob: new Date('10 April 1975')
    },
    {   name:"Andrew Garfield",
        image:"https://www.gstatic.com/tv/thumb/persons/506866/506866_v9_bc.jpg",
        dob: new Date('10 April 1975'),
        bio:"Andrew Russell Garfield (born 20 August 1983) is a British-American actor. He is the recipient of several accolades, \
            including a Tony Award, and has been nominated for an Academy Award and two British Academy Film Awards. Born in Los \
            Angeles and raised in Epsom, England, Garfield began his career on the UK stage and in television productions. He made \
            his feature-film debut in the 2007 ensemble drama Lions for Lambs. Also that year, his performance in the television \
            film Boy A earned him a British Academy Television Award for Best Actor. He came to international attention in 2010 \
            with supporting roles in the drama The Social Network, for which he received a BAFTA nomination for his portrayal of \
            Eduardo Saverin, and the science fiction romance Never Let Me Go. Garfield subsequently gained wider recognition for \
            playing Spider-Man in the 2012 superhero film The Amazing Spider-Man and its 2014 sequel. In 2016, Garfield starred in \
            two critically acclaimed historical dramas, Hacksaw Ridge and Silence.",
        movies: [],
        upcomingMovies:[],
        dob: new Date('20 August 1983')
    },
    {
        name: 'Ana De Armas',
        image: 'https://www.gstatic.com/tv/thumb/persons/587180/587180_v9_bb.jpg',
        bio : 'Ana Celia de Armas Caso is a Cuban-Spanish actress. She began her career as a teenager in her native Cuba and most \
            notably had a leading role in the romantic drama Una rosa de Francia (2006). At the age of 18, she moved to Madrid, Spain \
            and starred in the popular teen drama El Internado for six seasons from 2007 to 2010. After moving to Los Angeles, de \
            Armas had English-speaking roles in the horror film Knock Knock (2015) and the crime drama War Dogs (2016). She had a \
            supporting role in the sports biopic Hands of Stone (2016). De Armas rose to prominence with her role as a holographic \
            AI projection in the science fiction film Blade Runner 2049 (2017). Her performance as an immigrant nurse in the 2019 \
            murder mystery film Knives Out was nominated for a Golden Globe Award for Best Actress.',
        movies: [],
        upcomingMovies: [],
        dob: new Date('30 April 1988')
    },
    {
        name: 'Zachary Levi',
        image: 'https://www.gstatic.com/tv/thumb/persons/272823/272823_v9_bb.jpg',
        bio : 'Zachary Levi Pugh (born September 29, 1980) is an American actor and singer. He received critical acclaim for \
            starring as Chuck Bartowski in the series Chuck, and as the title character in Shazam!, as a part of the DC Extended \
            Universe. He voiced Flynn Rider in the 2010 animated film Tangled, where he performed "I See the Light" with Mandy \
            Moore; the song won a Grammy Award for Best Song Written for Visual Media. He reprised the voice role in the 2012 \
            short film Tangled Ever After and in 2017, Rapunzel\'s Tangled Adventure, a Disney Channel television series based \
            on the film. He has appeared in the Marvel Cinematic Universe films Thor: The Dark World and Thor: Ragnarok as \
            Fandral. Levi starred as Georg Nowack in the 2016 Broadway revival of She Loves Me opposite Laura Benanti, for \
            which he received a Tony Award nomination.',
        movies: [],
        upcomingMovies: [],
        dob: new Date('29 September 1980')
    },
    {
        name: 'Dean-Charles Chapman',
        image: 'https://www.gstatic.com/tv/thumb/persons/807212/807212_v9_bb.jpg',
        bio : 'Dean-Charles Chapman (born 7 September 1997) is an English actor, known for portraying Billy Elliot in the West End theatre \
            production of Billy Elliot the Musical, and co-starring as Lance Corporal Tom Blake, one of two soldiers tasked with a \
            life-or-death mission, in the World War I film 1917, released in 2019. Chapman was born in Essex. He portrayed the lead \
            role of Stanley Brown in the CBBC sitcom The Revolting World of Stanley Brown, and starred as Tommen Baratheon in the \
            fourth, fifth and sixth seasons of the HBO drama series Game of Thrones. He starred as Castor in the AMC martial \
            arts drama series Into the Badlands.',
        movies: [],
        upcomingMovies: [],
        dob: new Date('7 September 1997')
    },
    {
        name: 'George MacKay',
        image: 'https://www.gstatic.com/tv/thumb/persons/293166/293166_v9_bb.jpg',
        bio : 'George Andrew J. MacKay (born 13 March 1992) is an English actor. He has appeared in the films The Boys Are Back (2009), Private \
            Peaceful (2012), How I Live Now (2013), Sunshine on Leith (2013), For Those in Peril (2013), Pride (2014), Captain Fantastic (2016), \
            Where Hands Touch (2018), Ophelia (2018), and 1917 (2019). MacKay was nominated for the BAFTA Rising Star Award in 2014 and received a \
            Trophée Chopard at the 2017 Cannes Film Festival. In 2002, MacKay was spotted while at The Harrodian School by an acting scout, who \
            asked him if he would like to audition for a role in P.J. Hogan\'s 2003 film adaptation of Peter Pan. He attended a workshop, and \
            won the role of one of the Lost Boys, Curly, in what was his big break.',
        movies: [],
        upcomingMovies: [],
        dob: new Date('13 March 1992')
    },
    {
        name: 'Zendaya',
        image: 'https://upload.wikimedia.org/wikipedia/commons/2/28/Zendaya_-_2019_by_Glenn_Francis.jpg',
        bio : 'Zendaya Maree Stoermer Coleman known mononymously as Zendaya, is an American actress and singer. She began her career as a \
            child model and backup dancer, before gaining prominence for her role as Rocky Blue on the Disney Channel sitcom Shake It \
            Up (2010–2013). In 2013, Zendaya was a contestant on the sixteenth season of the competition series Dancing with the \
            Stars. From 2015 to 2018, she produced and starred as K.C. Cooper in the sitcom K.C. Undercover, and in 2019, she \
            began playing the lead role in the HBO drama series Euphoria. Her film roles include supporting parts in the musical \
            drama The Greatest Showman (2017) and the superhero films Spider-Man: Homecoming (2017) and Spider-Man: Far from Home \
            (2019).',
        movies: [],
        upcomingMovies: [],
        dob: new Date('1 September 1996')
    },
    {
        name: 'Zendaya',
        image: 'https://upload.wikimedia.org/wikipedia/commons/2/28/Zendaya_-_2019_by_Glenn_Francis.jpg',
        bio : 'Zendaya Maree Stoermer Coleman known mononymously as Zendaya, is an American actress and singer. She began her career as a \
            child model and backup dancer, before gaining prominence for her role as Rocky Blue on the Disney Channel sitcom Shake It \
            Up (2010–2013). In 2013, Zendaya was a contestant on the sixteenth season of the competition series Dancing with the \
            Stars. From 2015 to 2018, she produced and starred as K.C. Cooper in the sitcom K.C. Undercover, and in 2019, she \
            began playing the lead role in the HBO drama series Euphoria. Her film roles include supporting parts in the musical \
            drama The Greatest Showman (2017) and the superhero films Spider-Man: Homecoming (2017) and Spider-Man: Far from Home \
            (2019).',
        movies: [],
        upcomingMovies: [],
        dob: new Date('1 September 1996')
    },
    {
        name: 'Cobie Smulders',
        image: 'https://www.gstatic.com/tv/thumb/persons/259288/259288_v9_bb.jpg',
        bio : 'Jacoba Francisca Maria "Cobie" Smulders (born April 3, 1982) is a Canadian actress and model. She plays the lead in \
            the ABC crime drama Stumptown, where she plays the role of PTSD-stricken military veteran turned private detective \
            Dexedrine "Dex" Parios. She is best known for starring as Robin Scherbatsky in the CBS sitcom How I Met Your Mother \
            (2005–2014) and as S.H.I.E.L.D. agent Maria Hill in the Marvel Cinematic Universe, beginning with The Avengers (2012).',
        movies: [],
        upcomingMovies: [],
        dob: new Date('3 April 1982')
    },
    {
        name: 'Peter Dinklage',
        image: 'https://www.gstatic.com/tv/thumb/persons/299302/299302_v9_bb.jpg',
        bio : 'Peter Hayden Dinklage is an American actor and producer. Dinklage received universal acclaim for portraying Tyrion \
            Lannister on the HBO television series Game of Thrones, for which he won the Primetime Emmy Award for Outstanding \
            Supporting Actor in a Drama Series a record number of four times.[3] He also received a Golden Globe for the role in \
            2011 as well as the Screen Actors Guild Award in 2020. Born in Morristown, New Jersey, and raised in Brookside, Dinklage \
            is a dwarf (achondroplasia) and stands 4 ft 5 in (1.35 m) tall. He studied acting at Bennington College, starring in a \
            number of amateur stage productions. His film debut was in Living in Oblivion (1995) and his breakthrough came with the \
            comedy-drama The Station Agent (2003).',
        movies: [],
        upcomingMovies: [],
        dob: new Date('11 June 1969')
    },
    {
        name: 'Bradley Cooper',
        image: 'https://www.gstatic.com/tv/thumb/persons/232104/232104_v9_bb.jpg',
        bio : 'Bradley Charles Cooper is an American actor and filmmaker. He has been nominated for many awards, including eight \
            Academy Awards and a Tony Award, and has won two Grammy Awards and a BAFTA Award. Cooper appeared in Forbes Celebrity \
            100 on three occasions and Time\'s list of 100 most influential people in the world in 2015. His films have grossed $11 \
            billion worldwide and he was named one of the world\'s highest-paid actors for four years. His breakthrough role came in \
            2009 with The Hangover, a critically and commercially successful comedy, which spawned two sequels in 2011 and 2013. \
            Cooper\'s portrayal of a struggling writer in the thriller Limitless (2011) and a rookie police officer in the crime \
            drama The Place Beyond the Pines (2012) drew praise from critics.',
        movies: [],
        upcomingMovies: [],
        dob: new Date('5 January 1975')
    },
    {
        name: 'Josh Brolin',
        image: 'https://www.gstatic.com/tv/thumb/persons/74371/74371_v9_bb.jpg',
        bio : 'Joshua James Brolin (born February 12, 1968) is an American actor. Brolin has appeared in films such as The Goonies \
            (1985), Mimic (1997), Hollow Man (2000), Grindhouse (2007), No Country for Old Men (2007), American Gangster (2007), W. \
            (2008), Milk (2008), True Grit (2010), Men in Black 3 (2012), Inherent Vice (2014), Sicario (2015), Hail, Caesar! (2016), \
            and Deadpool 2 (2018). Brolin began portraying the role of Marvel Comics supervillain Thanos in the Marvel Cinematic \
            Universe, making his first appearance in Guardians of the Galaxy (2014).',
        movies: [],
        upcomingMovies: [],
        dob: new Date('12 February 1968')
    },
    {
        name: "Tom Hiddleston",
        image: "https://www.gstatic.com/tv/thumb/persons/286678/286678_v9_bb.jpg",
        dob: new Date('9 February 1981'),
        bio: "Thomas William Hiddleston (born 9 February 1981) is an English actor, film producer, and musician. He is the recipient \
            of several accolades, including a Golden Globe Award and a Laurence Olivier Award, and has been nominated for two Primetime \
            Emmy Awards. Hiddleston earned a double first in Classics at the University of Cambridge and later proceeded to study \
            acting at the Royal Academy of Dramatic Art. At the beginning of his career, he appeared in West End productions of \
            Cymbeline (2007) and Ivanov (2008). He won the Olivier Award for Best Newcomer in a Play for his role in Cymbeline and \
            was also nominated for the same award for his role as Cassio in Othello (2008). Hiddleston starred as the title character \
            in a production of Coriolanus (2013-2014) winning the Evening Standard Theatre Award for Best Actor and receiving a \
            nomination for the Olivier Award for Best Actor. He made his Broadway debut in a 2019 revival of Betrayal.",
        movies: [],
        upcomingMovies: [],
    },
    {
        name: "Taika Waititi",
        image: "https://www.gstatic.com/tv/thumb/persons/590955/590955_v9_bc.jpg",
        dob: new Date('16 August 1975'),
        bio: "Taika David Cohen (born 16 August 1975), known professionally as Taika Waititi is a New Zealand filmmaker and actor. \
            He is the recipient of an Academy Award as well as two further nominations. His feature films Boy (2010) and Hunt for the \
            Wilderpeople (2016) have each been the top-grossing New Zealand film, with the latter still holding that title as of \
            January 2020. He co-directed and starred in the horror comedy film What We Do in the Shadows (2014) with Jemaine \
            Clement. Waititi's most recent directing credits include the Marvel Cinematic Universe superhero film Thor: Ragnarok \
            (2017) and the satirical black comedy film Jojo Rabbit (2019), the latter of which he also wrote and starred in as \
            Adolf Hitler. Jojo Rabbit earned critical praise, receiving a nomination for the Academy Award for Best Picture and \
            winning Waititi the Academy Award for Best Adapted Screenplay.",
        movies: [],
        upcomingMovies: [],
    },
    {   
        name: "John David Washington",
        image: "https://www.gstatic.com/tv/thumb/persons/873014/873014_v9_ba.jpg",
        dob: new Date('28 July 1984'),
        bio: "John David Washington (born July 28, 1984) is an American actor and former football running back. He played college \
            football at Morehouse College and signed with the St. Louis Rams as an undrafted free agent in 2006. Professionally, \
            Washington spent four years as the running back for the United Football League's Sacramento Mountain Lions. Washington \
            shifted to an acting career like his father, Denzel Washington and mother, Pauletta Washington. He was part of the main \
            cast of the HBO comedy series Ballers (2015–2019) and starred as Ron Stallworth in Spike Lee's crime film BlacKkKlansman \
            (2018). For the latter, he received both Golden Globe and Screen Actors Guild Award nominations.",
        movies: [],
        upcomingMovies: [],
    },
    {
        name: "Himesh Patel",
        image: "https://www.gstatic.com/tv/thumb/persons/580137/580137_v9_bb.jpg",
        dob: new Date('13 October 1990'),
        bio: "Himesh Jitendra Patel (born 13 October 1990) is an English actor. He is known for playing Tamwar Masood on the BBC \
            soap opera EastEnders from 2007 to 2016 and for starring in the 2019 romantic comedy film Yesterday.When he was \
            sixteen, Patel got a call on the day of his GCSEs saying he landed an audition for the British soap opera EastEnders \
            through an agency in The Young Actor's Company. He finished his last exam and had his parents rush him to his audition. \
            After his first audition a casting assistant saw him waiting outside the audition room and asked him to read for the \
            casting director. Patel got the part of Tamwar Masood, and 1 October 2007 marked his first appearance on EastEnders. \
            In 2011 Patel and Meryl Ferdandes won the Inside Soap Award for Best Wedding.",
        movies: [],
        upcomingMovies: [],
    },
    {
        name: 'Jamie Foxx',
        image: 'https://www.gstatic.com/tv/thumb/persons/585/585_v9_bc.jpg',
        bio : 'Eric Marlon Bishop known professionally as Jamie Foxx, is an American actor, singer, comedian, presenter, and producer. \
            Foxx became widely known for his portrayal of Ray Charles in the 2004 biographical film Ray, for which he won the Academy \
            Award, BAFTA, Screen Actors Guild Award, Critics\' Choice Movie Award and Golden Globe Award for Best Actor. That same \
            year, he was nominated for the Academy Award for Best Supporting Actor for his role in the crime film Collateral. Since \
            spring 2017, Foxx has served as the host and executive producer of the Fox game show Beat Shazam.',
        movies: [],
        upcomingMovies: [],
        dob: new Date('13 December 1967')
    },
    {
        name: 'Kevin Spacey',
        image: 'https://www.gstatic.com/tv/thumb/persons/36904/36904_v9_ba.jpg',
        bio : 'Kevin Spacey Fowler KBE (born July 26, 1959) is an American actor, producer, and singer. Spacey began his career \
            as a stage actor during the 1980s, obtaining supporting roles in film and television. He gained critical acclaim in the \
            1990s that culminated in his first Academy Award for Best Supporting Actor for the neo-noir crime thriller The Usual \
            Suspects (1995) and an Academy Award for Best Actor for the midlife crisis-themed drama American Beauty (1999). Spacey\'s\
            other starring roles have included the comedy-drama film Swimming with Sharks (1994), the psychological thriller \
            Seven (1995), the neo-noir crime film L.A. Confidential (1997), the drama Pay It Forward (2000), the science \
            fiction-mystery film K-PAX (2001), the musical biopic Beyond the Sea (2004), the superhero film Superman \
            Returns (2006), and the action film Baby Driver (2017).',
        movies: [],
        upcomingMovies: [],
        dob: new Date('26 July 1959')
    },
    {
        name: 'George Clooney',
        image: 'https://www.gstatic.com/tv/thumb/persons/23213/23213_v9_bb.jpg',
        bio : 'George Timothy Clooney is an American actor, director, producer and filmmaker. He is the recipient of three Golden \
            Globe Awards and two Academy Awards, one for acting in Syriana (2006) and the other for co-producing Argo (2012). In 2018, \
            he was the recipient of the AFI Lifetime Achievement Award. Clooney made his acting debut on television in 1978, and \
            later gained wide recognition in his role as Dr. Doug Ross on the medical drama ER from 1994 to 1999, for which he \
            received two Primetime Emmy Award nominations. While working on ER, he began attracting a variety of leading roles \
            in films, with his breakthrough role in From Dusk till Dawn (1996), and the crime comedy Out of Sight (1998), \
            in which he first worked with director Steven Soderbergh, who would become a long-time collaborator.',
        movies: [],
        upcomingMovies: [],
        dob: new Date('6 May 1961')
    },
    {
        name: 'Elisabeth Moss',
        image: 'https://www.gstatic.com/tv/thumb/persons/172088/172088_v9_bb.jpg',
        bio : 'Elisabeth Singleton Moss is an American actor. She is known for her work in several television dramas, earning such \
            accolades as two Primetime Emmy Awards and two Golden Globe Awards, which led Vulture to name her the "Queen of Peak TV". \
            Moss began acting in the early 1990s and first gained recognition for playing Zoey Bartlet, the youngest daughter of \
            President Josiah Bartlet, in the NBC political drama series The West Wing (1999–2006). Wider recognition came for \
            playing Peggy Olson, a secretary-turned-copywriter, in the AMC period drama series Mad Men (2007–2015). She won the \
            Golden Globe Award for Best Actress – Miniseries or Television Film for playing a detective in the BBC miniseries Top \
            of the Lake (2013), and she won the Primetime Emmy Award for Outstanding Lead Actress in a Drama Series and Outstanding \
            Drama Series for producing and starring in the Hulu dystopian drama series The Handmaid\'s Tale (2017–present).',
        movies: [],
        upcomingMovies: [],
        dob: new Date('24 July 1982')
    },
    {
        name: 'Kurt Russell',
        image: 'https://www.gstatic.com/tv/thumb/persons/1514/1514_v9_ba.jpg',
        bio : 'Kurt Vogel Russell is an American actor. He began acting on television at the age of 12 in the western series The \
            Travels of Jaimie McPheeters (1963–1964). In the late 1960s, he signed a ten-year contract with The Walt Disney Company \
            where, according to Robert Osborne, he became the studio\'s top star of the 1970s. Russell was nominated for a Golden \
            Globe Award for Best Supporting Actor – Motion Picture for his performance in Silkwood (1983). In the 1980s, he \
            starred in several films directed by John Carpenter, including anti-hero roles such as army hero-turned-robber Snake \
            Plissken in the futuristic action film Escape from New York (1981), and its sequel Escape from L.A.',
        movies: [],
        upcomingMovies: [],
        dob: new Date('17 March 1951')
    },
    {
        name: 'Bill Hader',
        image: 'https://www.gstatic.com/tv/thumb/persons/484312/484312_v9_bb.jpg',
        bio : 'William Thomas Hader Jr. is an American actor, comedian, writer, producer, and director. He rose to fame as a cast \
            member on the NBC variety series Saturday Night Live (2005–2013) for which he received four Primetime Emmy Award \
            nominations and a Peabody Award. Hader has had supporting roles in the films Superbad (2007), Tropic Thunder (2008), \
            Forgetting Sarah Marshall (2008), Night at the Museum: Battle of the Smithsonian (2009), Paul (2011), Men in Black \
            3 (2012) and leading roles in The Skeleton Twins (2014), Trainwreck (2015) and It Chapter Two (2019) as an adult \
            Richie Tozier. He has voiced lead characters in the Cloudy with a Chance of Meatballs franchise (2009–2014), \
            Inside Out (2015), the Angry Birds films (2016, 2019), Sausage Party (2016), Ralph Breaks the Internet (2018) \
            and supporting roles in Turbo (2013), Monsters University (2013) and Finding Dory (2016).',
        movies: [],
        upcomingMovies: [],
        dob: new Date('7 June 1978')
    },
    {
        name: 'Amy Poehler',
        image: 'https://www.gstatic.com/tv/thumb/persons/242722/242722_v9_bb.jpg',
        bio : 'Amy Meredith Poehler is an American actress, comedian, writer, producer, and director. After studying improv at \
            Chicago\'s Second City and ImprovOlympic in the early 1990s, she co-founded the improvisational-comedy troupe Upright \
            Citizens Brigade. In 2001 she joined the cast of the NBC television series Saturday Night Live. She became co-anchor\
            of SNL\'s Weekend Update in 2004 until she left the series in 2008 to star as Leslie Knope in the NBC sitcom Parks \
            and Recreation. She has also performed voice acting roles including the lead role in Inside Out, as well as parts \
            in Shrek the Third, and Horton Hears a Who!. Poehler is an executive producer on the televisions series Welcome \
            to Sweden, Broad City, Difficult People, Duncanville, and Russian Doll.',
        movies: [],
        upcomingMovies: [],
        dob: new Date('16 September 1971')
    },
    {
        name: 'Rupert Grint',
        image: 'https://www.gstatic.com/tv/thumb/persons/247025/247025_v9_bc.jpg',
        bio : 'Rupert Alexander Lloyd Grint (born 24 August 1988) is an English actor and producer. He rose to prominence for his \
            portrayal of Ron Weasley, one of the three main characters in the Harry Potter film series. Grint was cast as Ron at the \
            age of 11, having previously acted only in school plays and at his local theatre group. From 2001 to 2011, he starred \
            in all eight Harry Potter films.',
        movies: [],
        upcomingMovies: [],
        dob: new Date('24 August 1988')
    },
    {
        name: 'Alan Rickman',
        image: 'https://www.gstatic.com/tv/thumb/persons/2894/2894_v9_ba.jpg',
        bio : 'Alan Sidney Patrick Rickman (21 February 1946 – 14 January 2016) was an English actor and director. Known for his \
            languid tone and delivery, Rickman\'s signature sound was the result of a speech impediment when he could not move his \
            lower jaw properly as a child. He trained at the Royal Academy of Dramatic Art in London and became a member of the \
            Royal Shakespeare Company (RSC), performing in modern and classical theatre productions. He played the Vicomte de Valmont\
            in the RSC stage production of Les Liaisons Dangereuses in 1985, and after the production transferred to the West End \
            in 1986 and Broadway in 1987 he was nominated for a Tony Award.',
        movies: [],
        upcomingMovies: [],
        dob: new Date('21 February 1946')
    },
    {
        name: 'Eddie Redmayne',
        image: 'https://www.gstatic.com/tv/thumb/persons/448398/448398_v9_bb.jpg',
        bio : 'Edward John David Redmayne OBE (born 6 January 1982) is an English actor. He began his professional acting career as \
            a youth in West End theatre, before making his screen debut in 1998 with guest television appearances. His first film \
            roles came in 2006 with Like Minds and The Good Shepherd, and he went on to play supporting roles in several films. On \
            stage, Redmayne starred in the productions of Red from 2009 to 2010 and Richard II from 2011 to 2012. The former won \
            him the Tony Award for Best Featured Actor in a Play. His film breakthrough came with the roles of Colin Clark in the \
            biographical drama My Week with Marilyn (2011) and Marius Pontmercy in Tom Hooper\'s musical Les Misérables (2012).',
        movies: [],
        upcomingMovies: [],
        dob: new Date('6 January 1982')
    },
    {
        name: 'Katherine Waterston',
        image: 'https://superstarsbio.com/wp-content/uploads/2019/09/Katherine-Waterston-hight.jpg',
        bio : 'Katherine Boyer Waterston is an American actress. She made her feature film debut in Michael Clayton (2007). She \
            then had supporting roles in films including Robot & Frank, Being Flynn (both 2012) and The Disappearance of Eleanor \
            Rigby (2013) before her breakthrough performance as Shasta Fay Hepworth in Paul Thomas Anderson\'s Inherent Vice (2014). \
            In 2015, she portrayed Chrisann Brennan in Steve Jobs. She had a starring role as Tina Goldstein in the Harry Potter \
            spin-off Fantastic Beasts and Where to Find Them (2016), which she reprised in its 2018 sequel. Other film roles \
            include Ridley Scott\'s Alien: Covenant (2017), Steven Soderbergh\'s Logan Lucky (2017) and Jonah Hill\'s Mid90s (2018).',
        movies: [],
        upcomingMovies: [],
        dob: new Date('3 March 1980')
    },
    {
        name: 'Bill Skarsgård',
        image: 'https://www.gstatic.com/tv/thumb/persons/596590/596590_v9_bb.jpg',
        bio : 'Bill Istvan Günther Skarsgård (born 9 August 1990) is a Swedish actor. He portrayed Pennywise the Dancing Clown in \
            the supernatural horror films It (2017) and It Chapter Two (2019), based on Stephen King\'s novel of the same name, and \
            appeared in the comedy Simple Simon (2010), the dystopian thriller The Divergent Series: Allegiant (2016), and the \
            espionage thriller Atomic Blonde (2017). He also starred in the supernatural horror series Hemlock Grove (2013–2015) \
            and the anthology horror series Castle Rock (2018–2019).',
        movies: [],
        upcomingMovies: [],
        dob: new Date('9 August 1990')
    },
    {
        name: 'Jack Dylan Grazer',
        image: 'https://www.gstatic.com/tv/thumb/persons/1037008/1037008_v9_bb.jpg',
        bio : 'Jack Dylan Grazer (born September 3, 2003) is an American actor. He played the part of Eddie Kaspbrak in the feature \
            film adaptation of Stephen King\'s It, and reprised his role in the film\'s 2019 sequel. He also starred on the CBS \
            series Me, Myself, and I, and portrayed Freddy Freeman in the 2019 DC Comics film Shazam!.',
        movies: [],
        upcomingMovies: [],
        dob: new Date('3 September 2003')
    },
    {
        name: 'Jaeden Martell',
        image: 'https://vignette.wikia.nocookie.net/stephenking/images/e/e9/Jm.jpg/revision/latest?cb=20190513074952',
        bio : 'Jaeden Martell (born January 4, 2003) formerly known as Jaeden Lieberher, is an American actor. He has portrayed \
            roles in the 2017 and 2019 film adaptations of the Stephen King novel It, and in the 2019 mystery film Knives Out. He \
            played the title character in the 2017 film The Book of Henry. Martell received further recognition for his \
            starring role as Bill Denbrough in the 2017 supernatural horror film It and its 2019 follow-up It Chapter Two.',
        movies: [],
        upcomingMovies: [],
        dob: new Date('4 January 2003')
    },
    {
        name: 'Chiwetel Ejiofor',
        image: 'https://www.gstatic.com/tv/thumb/persons/247378/247378_v9_bb.jpg',
        bio : 'Chiwetel Umeadi Ejiofor is a British actor. After enrolling at the National Youth Theatre in 1995 and attending the \
            London Academy of Music and Dramatic Art, at age 19 and three months into his course, Ejiofor was cast by Steven \
            Spielberg to play a supporting role in the film Amistad (1997) as James Covey. Ejiofor portrayed the characters \
            Okwe in Dirty Pretty Things (2002), Lola in Kinky Boots (2005), The Operative in Serenity (2005), Adrian Helmsley \
            in 2012 (2009), Solomon Northup in 12 Years a Slave (2013), Vincent Kapoor in The Martian (2015), Karl Mordo in \
            Doctor Strange (2016), Dr. Watson in Sherlock Gnomes (2018) and Trywell Kamkwamba in The Boy Who Harnessed the Wind (2019).',
        movies: [],
        upcomingMovies: [],
        dob: new Date('10 July 1977')
    },
    {
        name: 'Dan Fogler',
        image: 'https://www.gstatic.com/tv/thumb/persons/493325/493325_v9_bb.jpg',
        bio : 'Daniel Kevin Fogler (born October 20, 1976) is an American actor, comedian and writer. He has appeared in films \
            Balls of Fury, Good Luck Chuck, Fantastic Beasts and Where to Find Them, Fantastic Beasts: The Crimes of Grindelwald \
            and done voice acting for Kung Fu Panda and Horton Hears a Who! He currently stars on The Walking Dead as Luke. In \
            2005, Fogler made his Broadway debut as William Barfée in The 25th Annual Putnam County Spelling Bee, for which he \
            won the Tony Award for Best Featured Actor in a Musical.',
        movies: [],
        upcomingMovies: [],
        dob: new Date('20 October 1976')
    },
    {
        name: 'Jude Law',
        image: 'https://www.gstatic.com/tv/thumb/persons/71369/71369_v9_bb.jpg',
        bio : 'David Jude Heyworth Law (born 29 December 1972) is an English actor. He has received multiple awards including a \
            BAFTA Film Award as well as nominations for two Academy Awards, four Golden Globe Awards, three Laurence Olivier Awards \
            and two Tony Awards. In 2007, he received an Honorary César and was named a knight of the Order of Arts and Letters by \
            the French government, in recognition of his contribution to World Cinema Arts.',
        movies: [],
        upcomingMovies: [],
        dob: new Date('16 November 2018')
    },
    {
        name: 'Macaulay Culkin',
        image: 'https://www.gstatic.com/tv/thumb/persons/381/381_v9_bb.jpg',
        bio : 'Macaulay Carson Culkin (born August 26, 1980) is an American actor and musician. He is known for playing Kevin \
            McCallister in the Christmas films Home Alone (1990), for which he was nominated for a Golden Globe Award for Best \
            Actor – Motion Picture Musical or Comedy, and Home Alone 2: Lost in New York (1992). Along with the Home Alone \
            series, Culkin also starred in the films My Girl (1991), The Good Son (1993), The Nutcracker (1993), Getting Even \
            with Dad (1994), The Pagemaster (1994) and Richie Rich (1994). He has been nominated for Kids\' Choice Awards, MTV \
            Movie Awards and Young Artist Awards. At the height of his fame, he was regarded as the most successful child actor \
            since Shirley Temple.',
        movies: [],
        upcomingMovies: [],
        dob: new Date('26 August 1980')
    },
    {
        name: 'Jenny Slate',
        image: 'https://www.gstatic.com/tv/thumb/persons/555306/555306_v9_ba.jpg',
        bio : 'Jenny Sarah Slate (born March 25, 1982) is an American actress, comedian and author. She has played Mona-Lisa \
            Saperstein on Parks and Recreation and was the co-creator of the Marcel the Shell with Shoes On short films and \
            children\'s book series. She was a cast member on Saturday Night Live during its 2009–10 season and has appeared \
            in shows such as Bored to Death, Bob\'s Burgers, Kroll Show, House of Lies, Married, Star vs. the Forces of Evil \
            and Big Mouth as well as the feature films Obvious Child, Zootopia and The Secret Life of Pets.',
        movies: [],
        upcomingMovies: [],
        dob: new Date('25 March 1982')
    },
    {
        name: 'Mckenna Grace',
        image: 'https://vignette.wikia.nocookie.net/fuller-house/images/2/2d/Mckenna-grace-382349_828x1104.png/revision/latest/scale-to-width-down/340?cb=20190921223309',
        bio : 'Mckenna Grace is an American teen actress. She began acting professionally at the age of 6, her earliest roles \
            including Jasmine Bernstein in the Disney XD sitcom Crash & Bernstein (2012–2014) and Faith Newman in the soap opera \
            The Young and the Restless (2013–2015). Grace is known for her role as Penny Kirkman in the ABC/Netflix show Designated \
            Survivor. She is also known for portraying Rose Harbenberger in the Netflix comedy series Fuller House (2016–2018), \
            and young Theodora Crain in the Netflix supernatural horror series The Haunting of Hill House (2018).',
        movies: [],
        upcomingMovies: [],
        dob: new Date('25 June 2006')
    },
    {
        name: 'Harrison Ford',
        image: 'https://www.gstatic.com/tv/thumb/persons/25704/25704_v9_bb.jpg',
        bio : 'Harrison Ford (born July 13, 1942) is an American actor, aviator, and environmental activist. He gained worldwide \
            fame for his starring role as Han Solo in the original Star Wars Trilogy (1977–1983), eventually reprising the role \
            decades later in the sequel trilogy (2015–2019). Ford is also widely known for his portrayal of Indiana Jones in the \
            Indiana Jones film franchise (1981-Present) and as Tom Clancy\'s Jack Ryan in the spy thrillers Patriot Games (1992) \
            and Clear and Present Danger (1994).',
        movies: [],
        upcomingMovies: [],
        dob: new Date('13 July 1942')
    },
    {
        name: 'Julia Roberts',
        image: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Julia_Roberts_2011_Shankbone_3.JPG',
        bio : 'Julia Fiona Roberts (born October 28, 1967) is an American actress and producer. She established herself as a leading \
            lady in Hollywood after headlining the romantic comedy film Pretty Woman (1990), which grossed $464 million worldwide. She \
            has won three Golden Globe Awards, from eight nominations, and has been nominated for four Academy Awards for her film \
            acting, winning the Academy Award for Best Actress for her performance in Erin Brockovich (2000). Her films have \
            collectively brought box office receipts of over US$2.8 billion, making her one of the most bankable actresses in \
            Hollywood. Her most successful films include Mystic Pizza (1988), Steel Magnolias (1989), Pretty Woman (1990), Sleeping \
            with the Enemy (1991), The Pelican Brief (1993), My Best Friend\'s Wedding (1997), Notting Hill (1999), Runaway \
            Bride (1999), Erin Brockovich (2000), Ocean\'s Eleven (2001), Ocean\'s Twelve (2004), Charlie Wilson\'s War (2007), \
            Valentine\'s Day (2010), Eat Pray Love (2010), Money Monster (2016), and Wonder (2017).',
        movies: [],
        upcomingMovies: [],
        dob: new Date('28 October 1967')
    },
    {
        name: 'Owen Wilson',
        image: 'https://www.gstatic.com/tv/thumb/persons/74682/74682_v9_ba.jpg',
        bio : 'Owen Cunningham Wilson (born November 18, 1968) is an American actor, producer, and screenwriter. He has had a long \
            association with filmmaker Wes Anderson, with whom he shared writing and acting credits for Bottle Rocket (1996), \
            Rushmore (1998), and The Royal Tenenbaums (2001), the latter of which earned him a nomination for the Academy Award\
            for Best Original Screenplay. He has appeared in a number of Frat Pack comedies and voiced Lightning McQueen in \
            the Cars franchise. His older brother Andrew and younger brother Luke are also actors.',
        movies: [],
        upcomingMovies: [],
        dob: new Date('18 November 1968')
    },
    {
        name: 'Jacob Tremblay',
        image: 'https://m.media-amazon.com/images/M/MV5BOWJiOTg5YzQtOWIzNy00NTdkLWEzNmEtYWFkZmY1NTc2OTk5XkEyXkFqcGdeQXVyMzM0MDI2MTE@._V1_UY1200_CR110,0,630,1200_AL_.jpg',
        bio : 'Jacob Tremblay is a Canadian actor. His breakout performance was his starring role as Jack Newsome in Room (2015), \
            for which he won the Critics\' Choice Movie Award for Best Young Performer and the Academy of Canadian Cinema and \
            Television Award for Best Performance by an Actor in a Leading Role, and was nominated for the Screen Actors Guild \
            Award for Outstanding Performance by a Male Actor in a Supporting Role. In 2017, he starred as August Pullman, a \
            child with Treacher Collins syndrome, in the drama Wonder, and in 2019 he headlined the R-rated comedy film Good Boys.',
        movies: [],
        upcomingMovies: [],
        dob: new Date('5 October 2006')
    },
];

function seedActors(){
    Movie.deleteMany({}, (err, moviesDeleted)=>{
        if(err) console.log(err);
        else{
            console.log("All Movies Deleted");
            Rating.deleteMany({}, (err, moviesDeleted)=>{
                if(err) console.log(err);
                else{
                    console.log("All Ratings Deleted");
                    Actor.deleteMany({}, (err, deletedActors)=>{
                        if(err) console.log(err);
                        else {
                            console.log("All Actors Deleted");
                            actorArray.forEach((actor)=>{
                                Actor.create(actor, (err, createdActor)=>{
                                    if(err) console.log(err);
                                    else console.log("Actor Created: "+ createdActor.name);
                                });
                            });
                        }
                    });
                }
            });
        }
    });
}

module.exports = seedActors;