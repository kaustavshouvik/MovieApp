const Movie = require('./models/movie'),
    Actor = require('./models/actor');

moviesArray = [
    {
        name: 'Ford V Ferrari',
        poster: 'https://m.media-amazon.com/images/M/MV5BM2UwMDVmMDItM2I2Yi00NGZmLTk4ZTUtY2JjNTQ3OGQ5ZjM2XkEyXkFqcGdeQXVyMTA1OTYzOTUx._V1_QL50_SY1000_CR0,0,675,1000_AL_.jpg',
        image: 'https://images.squarespace-cdn.com/content/v1/56cdc4478259b5c112bb2285/1573833174607-0MTK623ZEMF77UT26YLG/ke17ZwdGBToddI8pDm48kLvVDo9-REHnU4fl_0iD1-cUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKchS2Gwb9DcaDxLsE_7XB2JBhndQvLdlhSpqmG5MeIztWGhrKnR42K3q4EG2lSbuKq/image.jpg?format=1500w',
        release: new Date('15 November 2019'),
        plot: 'American automotive designer Carroll Shelby and fearless British race car driver Ken Miles battle corporate \
            interference, the laws of physics and their own personal demons to build a revolutionary vehicle for the Ford Motor\
            Co. Together, they plan to compete against the race cars of Enzo Ferrari at the 24 Hours of Le Mans in France in 1966.',
        cast: ['Matt Damon', 'Christian Bale', 'Jon Bernthal'],
        genres: ['biography', 'drama', 'sport'],
        addedBy :{
            id: '5e704f47d93ca1214470756d',
            username: 'kaustav007'
        },
        ratingValue: 'Unrated',
        ratingCount: 0,
        primeLink: '',
        netflixLink: '',
        hotstarLink: '',
        youtubeLink: '',
    },
    {
        name: 'The Dark Knight',
        poster: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_QL50_SY1000_CR0,0,675,1000_AL_.jpg',
        image: 'https://static.rogerebert.com/uploads/review/primary_image/reviews/the-dark-knight-2008/hero_dark-knight.jpg',
        release: new Date('18 July 2008'),
        plot: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the\
            greatest psychological and physical tests of his ability to fight injustice.',
        cast: ['Christian Bale', 'Heath Ledger', 'Michael Caine', 'Gary Oldman', 'Morgan Freeman'],
        genres: ['action', 'drama', 'crime', 'superhero'],
        addedBy :{
            id: '5e704f47d93ca1214470756d',
            username: 'kaustav007'
        },
        ratingValue: 'Unrated',
        ratingCount: 0,
        primeLink: '',
        netflixLink: 'https://www.netflix.com/in/title/70079583?source=35',
        hotstarLink: 'https://www.hotstar.com/in/movies/the-dark-knight/1221110308',
        youtubeLink: 'https://www.youtube.com/watch?v=n4ggacWL68k',
    },
    {
        name: 'The Martian',
        poster: 'https://m.media-amazon.com/images/M/MV5BMTc2MTQ3MDA1Nl5BMl5BanBnXkFtZTgwODA3OTI4NjE@._V1_QL50_SY1000_CR0,0,675,1000_AL_.jpg',
        image: 'https://m.media-amazon.com/images/M/MV5BMTUzNTE4MTkwOV5BMl5BanBnXkFtZTgwMTE0MDE5NTE@._V1_QL50_SX1500_CR0,0,1500,999_AL_.jpg',
        release: new Date('2 October 2015'),
        plot: 'An astronaut becomes stranded on Mars after his team assume him dead, and must rely on his ingenuity to find a way \
            to signal to Earth that he is alive.',
        cast: ['Matt Damon', 'Michael Peña', 'Sebastian Stan', 'Benedict Wong'],
        genres: ['adventure', 'drama', 'sci-fi'],
        addedBy :{
            id: '5e704f47d93ca1214470756d',
            username: 'kaustav007'
        },
        ratingValue: 'Unrated',
        ratingCount: 0,
        primeLink: '',
        netflixLink: '',
        hotstarLink: 'https://www.hotstar.com/in/movies/the-martian/1770002321',
        youtubeLink: 'https://www.youtube.com/watch?v=iPcDWVxYW3w',
    },
    {
        name: 'The Imitation Game',
        poster: 'https://m.media-amazon.com/images/M/MV5BOTgwMzFiMWYtZDhlNS00ODNkLWJiODAtZDVhNzgyNzJhYjQ4L2ltYWdlXkEyXkFqcGdeQXVyNzEzOTYxNTQ@._V1_QL50_SY999_CR0,0,670,999_AL_.jpg',
        image: 'https://m.media-amazon.com/images/M/MV5BMTQ1NzM0NjU3NF5BMl5BanBnXkFtZTgwMzI5MTUyMjE@._V1_QL50_SY1000_CR0,0,1503,1000_AL_.jpg',
        release: new Date('25 December 2014'),
        plot: 'During World War II, the English mathematical genius Alan Turing tries to crack the German Enigma code with help\
            from fellow mathematicians.',
        cast: ['Benedict Cumberbatch', 'Keira Knightley', 'Mark Strong'],
        genres: ['biography', 'drama', 'thriller'],
        addedBy :{
            id: '5e704f47d93ca1214470756d',
            username: 'kaustav007'
        },
        ratingValue: 'Unrated',
        ratingCount: 0,
        primeLink: '',
        netflixLink: '',
        hotstarLink: 'https://www.hotstar.com/in/movies/the-imitation-game/1221043443?utm_source=gwa',
        youtubeLink: 'https://www.youtube.com/watch?v=DZ6gI2CJM4c',
    },
    {
        name: 'Joker',
        poster: 'https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL50_SY1000_CR0,0,674,1000_AL_.jpg',
        image: 'https://m.media-amazon.com/images/M/MV5BZWNjMTA1ZmMtMGVlNy00MDA0LWJmYmMtYmZmZDhmMDA5ZTlhXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL50_SY1000_SX1500_AL_.jpg',
        release: new Date('2 October 2019'),
        plot: 'In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on \
            a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.',
        cast: ['Joaquin Phoenix', 'Robert De Niro'],
        genres: ['crime', 'drama', 'thriller'],
        addedBy :{
            id: '5e704f47d93ca1214470756d',
            username: 'kaustav007'
        },
        ratingValue: 'Unrated',
        ratingCount: 0,
        primeLink: '',
        netflixLink: '',
        hotstarLink: '',
        youtubeLink: 'https://www.youtube.com/watch?v=DWU_iN2LSLk',
    },
    {
        name: 'Game Night',
        poster: 'https://m.media-amazon.com/images/M/MV5BMjI3ODkzNDk5MF5BMl5BanBnXkFtZTgwNTEyNjY2NDM@._V1_QL50_SY1000_CR0,0,674,1000_AL_.jpg',
        image: 'https://m.media-amazon.com/images/M/MV5BMjA2MTYzNzU4MF5BMl5BanBnXkFtZTgwNjM4Nzc3NDM@._V1_QL50_SX1777_CR0,0,1777,746_AL_.jpg',
        release: new Date('22 February 2018'),
        plot: 'A group of friends who meet regularly for game nights find themselves entangled in a real-life mystery when the shady \
            brother of one of them is seemingly kidnapped by dangerous gangsters.',
        cast: ['Jason Bateman', 'Rachel McAdams'],
        genres: ['comedy', 'action', 'crime'],
        addedBy :{
            id: '5e704f47d93ca1214470756d',
            username: 'kaustav007'
        },
        ratingValue: 'Unrated',
        ratingCount: 0,
        primeLink: '',
        netflixLink: 'https://www.netflix.com/watch/80201565?source=35',
        hotstarLink: '',
        youtubeLink: 'https://www.youtube.com/watch?v=-m8pmVU4pDs',
    },
    {
        name: 'Star Trek Into Darkness',
        poster: 'https://m.media-amazon.com/images/M/MV5BMTk2NzczOTgxNF5BMl5BanBnXkFtZTcwODQ5ODczOQ@@._V1_QL50_SY1000_CR0,0,674,1000_AL_.jpg',
        image: 'https://m.media-amazon.com/images/M/MV5BMjAwOTcwMjg0NV5BMl5BanBnXkFtZTcwNDE0MzMxOQ@@._V1_QL50_SY1000_CR0,0,1776,1000_AL_.jpg',
        release: new Date('10 May 2013'),
        plot: 'The USS Enterprise crew travels to the forbidden zone in space to rescue an endangered species. Captain Kirk then \
            leads his team to a war-zone world in search of a weapon of mass destruction.',
        cast: ['Chris Pine', 'Simon Pegg', 'Zoe Saldana', 'Benedict Cumberbatch'],
        genres: ['sci-fi', 'action', 'adventure'],
        addedBy :{
            id: '5e704f47d93ca1214470756d',
            username: 'kaustav007'
        },
        ratingValue: 'Unrated',
        ratingCount: 0,
        primeLink: 'https://www.primevideo.com/detail/0PDMF1MPDXH0FEOYUBD3AD5TFO/ref=atv_sr_def_c_unkc__1_1_1?sr=1-1&pageTypeIdSource=ASIN&pageTypeId=B01MPWOEKW&qid=1584530662',
        netflixLink: '',
        hotstarLink: '',
        youtubeLink: 'https://www.youtube.com/watch?v=3EzhOpxAc9o',
    },
    {
        name: 'Mission: Impossible – Fallout',
        poster: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTDuzrnxIkh11AqI-6PrU9Qrycml22OhFHM9UwGmlkxCsPctLTr',
        image: 'https://m.media-amazon.com/images/M/MV5BMTUzNDYwNDM3NF5BMl5BanBnXkFtZTgwNjc5Nzc1NTM@._V1_QL50_SX1500_CR0,0,1500,999_AL_.jpg',
        release: new Date('12 July 2018'),
        plot: 'A group of terrorists plans to detonate three plutonium cores for a simultaneous nuclear attack on different cities. \
            Ethan Hunt, along with his IMF team, sets out to stop the carnage.',
        cast: ['Tom Cruise', 'Simon Pegg', 'Henry Cavill'],
        genres: ['action', 'adventure', 'thriller'],
        addedBy :{
            id: '5e704f47d93ca1214470756d',
            username: 'kaustav007'
        },
        ratingValue: 'Unrated',
        ratingCount: 0,
        primeLink: 'https://www.primevideo.com/detail/0PZ0FDZ0OLMDOHQ7ZLHU9NIWO4/ref=atv_sr_def_c_unkc__1_1_1?sr=1-1&pageTypeIdSource=ASIN&pageTypeId=B07R23RCYM&qid=1584531517',
        netflixLink: '',
        hotstarLink: '',
        youtubeLink: '',
    },
    {
        name: 'Mission: Impossible – Rogue Nation',
        poster: 'https://m.media-amazon.com/images/M/MV5BOTFmNDA3ZjMtN2Y0MC00NDYyLWFlY2UtNTQ4OTQxMmY1NmVjXkEyXkFqcGdeQXVyNTg4NDQ4NDY@._V1_QL50_SY1000_CR0,0,651,1000_AL_.jpg',
        image: 'https://m.media-amazon.com/images/M/MV5BMTA1MDg2ODQ0MzheQTJeQWpwZ15BbWU4MDAzODgxMzYx._V1_QL50_SX1500_CR0,0,1500,999_AL_.jpg',
        release: new Date('5 August 2015'),
        plot: 'With the IMF disbanded and the CIA hunting him, Ethan and his team race against time to prove the existence of \
            the Syndicate, a highly-skilled terror organisation, before they plan their next attack.',
        cast: ['Tom Cruise', 'Simon Pegg', 'Jeremy Renner'],
        genres: ['action', 'adventure', 'thriller'],
        addedBy :{
            id: '5e704f47d93ca1214470756d',
            username: 'kaustav007'
        },
        ratingValue: 'Unrated',
        ratingCount: 0,
        primeLink: 'https://www.primevideo.com/detail/0G0VNBB0FQCP54SQZT9P5KSMAJ/ref=atv_sr_def_c_unkc__1_1_1?sr=1-1&pageTypeIdSource=ASIN&pageTypeId=B01MG2JNE7&qid=1584532001',
        netflixLink: 'https://www.netflix.com/watch/80038359?source=35',
        hotstarLink: '',
        youtubeLink: 'https://www.youtube.com/watch?v=Ew-PN7e90RE',
    },
    {
        name: 'Inception',
        poster: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_QL50_SY1000_CR0,0,675,1000_AL_.jpg',
        image: 'https://wallpapercave.com/wp/1rj6nGA.jpg',
        release: new Date('16 July 2010'),
        plot: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of \
            planting an idea into the mind of a C.E.O.',
        cast: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Ellen Page', 'Tom Hardy', 'Michael Caine'],
        genres: ['sci-fi', 'thriller', 'adventure', 'action', 'heist'],
        addedBy :{
            id: '5e704f47d93ca1214470756d',
            username: 'kaustav007'
        },
        ratingValue: 'Unrated',
        ratingCount: 0,
        primeLink: 'https://www.primevideo.com/detail/0JTBVK6L41AABWSV8DK605AI0U/ref=atv_sr_def_c_unkc__1_1_1?sr=1-1&pageTypeIdSource=ASIN&pageTypeId=B07D7PLJWR&qid=1584536395',
        netflixLink: '',
        hotstarLink: '',
        youtubeLink: '',
    },
    {
        name: 'No Time to Die',
        poster: 'https://m.media-amazon.com/images/M/MV5BNGEwMDU2ZDQtZmE5Zi00YjFiLWIwYWItOGMyMzY5MzljOWU3XkEyXkFqcGdeQXVyODk2NDQ3MTA@._V1_QL50_SY1000_CR0,0,685,1000_AL_.jpg',
        image: 'https://cdn.vox-cdn.com/thumbor/TjznfeLituF6nA7Ei46RDIE7SPE=/0x0:3000x2000/1200x800/filters:focal(1402x508:1882x988)/cdn.vox-cdn.com/uploads/chorus_image/image/66435782/1210236313.jpg.5.jpg',
        release: new Date('25 November 2020'),
        plot: 'James Bond has left active service. His peace is short-lived when Felix Leiter, an old friend from the CIA, \
            turns up asking for help, leading Bond onto the trail of a mysterious villain armed with dangerous new technology.',
        cast: ['Daniel Craig', 'Naomie Harris'],
        genres: ['action', 'adventure', 'thriller'],
        addedBy :{
            id: '5e704f47d93ca1214470756d',
            username: 'kaustav007'
        },
        ratingValue: 'Unrated',
        ratingCount: 0,
        primeLink: '',
        netflixLink: '',
        hotstarLink: '',
        youtubeLink: '',
    },
    {
        name: 'Stuber',
        poster: 'https://m.media-amazon.com/images/M/MV5BOGE1ZjFhYzAtYWM4ZC00NGI1LWFmYzMtZWRhZDhjMjE4YzBjXkEyXkFqcGdeQXVyODQzNTE3ODc@._V1_QL50_SY1000_CR0,0,674,1000_AL_.jpg',
        image: 'https://m.media-amazon.com/images/M/MV5BNzNmYWU3NjktZDA1Yi00MmEyLTgyYzAtMjdkYmIzZTUxOTk3XkEyXkFqcGdeQXVyODEwMTc2ODQ@._V1_QL50_SY1000_CR0,0,1500,1000_AL_.jpg',
        release: new Date('11 July 2019'),
        plot: 'A quick-tempered cop who\'s recovering from eye surgery recruits a mild-mannered Uber driver to help him catch the \
            heroin dealer who murdered his partner. The mismatched pair soon find themselves in for a wild day of stakeouts and \
            shootouts as they pursue violent criminals through the seedy streets of Los Angeles.',
        cast: ['Dave Bautista', 'Kumail Nanjiani', 'Karen Gillan'],
        genres: ['comedy', 'action', 'crime'],
        addedBy :{
            id: '5e704f47d93ca1214470756d',
            username: 'kaustav007'
        },
        ratingValue: 'Unrated',
        ratingCount: 0,
        primeLink: '',
        netflixLink: '',
        hotstarLink: 'https://www.hotstar.com/in/movies/stuber/1260020833',
        youtubeLink: '',
    },
    {
        name: 'John Wick',
        poster: 'https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_QL50_SY1000_CR0,0,666,1000_AL_.jpg',
        image: 'https://m.media-amazon.com/images/M/MV5BMTkwNzIyNTE5Nl5BMl5BanBnXkFtZTgwMTg1MTI4MjE@._V1_QL50_SY1000_CR0,0,1502,1000_AL_.jpg',
        release: new Date('14 November 2014'),
        plot: 'An ex-hit-man comes out of retirement to track down the gangsters that killed his dog and took everything from him.',
        cast: ['Keanu Reeves', 'Lance Reddick', 'Willem Dafoe'],
        genres: ['action', 'thriller', 'crime'],
        addedBy :{
            id: '5e704f47d93ca1214470756d',
            username: 'kaustav007'
        },
        ratingValue: 'Unrated',
        ratingCount: 0,
        primeLink: '',
        netflixLink: 'https://www.netflix.com/in/title/80013762?source=35',
        hotstarLink: '',
        youtubeLink: '',
    },
    {
        name: 'Bad Boys for Life',
        poster: 'https://m.media-amazon.com/images/M/MV5BMWU0MGYwZWQtMzcwYS00NWVhLTlkZTAtYWVjOTYwZTBhZTBiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL50_SY1000_CR0,0,674,1000_AL_.jpg',
        image: 'https://m.media-amazon.com/images/M/MV5BZDFkY2NhN2MtNmZkOC00YThjLTlhMDEtZjQ2OGQyMjFkOTU0XkEyXkFqcGdeQXVyNjczOTE0MzM@._V1_QL50_.jpg',
        release: new Date('7 January 2020'),
        plot: 'The Bad Boys Mike Lowrey and Marcus Burnett are back together for one last ride in the highly anticipated Bad Boys for Life.',
        cast: ['Will Smith'],
        genres: ['action', 'comedy', 'crime'],
        addedBy :{
            id: '5e704f47d93ca1214470756d',
            username: 'kaustav007'
        },
        ratingValue: 'Unrated',
        ratingCount: 0,
        primeLink: '',
        netflixLink: '',
        hotstarLink: '',
        youtubeLink: '',
    },
    {
        name: 'F9',
        poster: 'https://m.media-amazon.com/images/M/MV5BYjQ3NTUwOTAtMTEyMy00NTRhLTg3MDMtZTE2MWMyYThiZWYxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL50_SY1000_CR0,0,631,1000_AL_.jpg',
        image: 'https://m.media-amazon.com/images/M/MV5BZjg1MTgyMWYtZjAxNi00OGQ1LWE4NjEtNjc5OGY4NWQ3YTM4XkEyXkFqcGdeQXVyNjczOTE0MzM@._V1_QL50_.jpg',
        release: new Date('2 April 2021'),
        plot: 'Cypher enlists the help of Jakob, Dom\'s younger brother to take revenge on Dom and his team.',
        cast: ['Vin Diesel', 'Dwayne Johnson', 'Tyrese Gibson', 'Gal Gadot', ],
        genres: ['action', 'adventure', 'thriller'],
        addedBy :{
            id: '5e704f47d93ca1214470756d',
            username: 'kaustav007'
        },
        ratingValue: 'Unrated',
        ratingCount: 0,
        primeLink: '',
        netflixLink: '',
        hotstarLink: '',
        youtubeLink: '',
    },
    {
        name: 'Long Shot',
        poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdYEUTglbyUYS7KQbSlHMFcUFWGPm7Vd-7IBK4FCa-Zed3N9wg',
        image: 'https://m.media-amazon.com/images/M/MV5BZTgwNTY5MjMtZjQ0OC00MTVjLThjNGMtZGU0YTZmZDM0NzlhXkEyXkFqcGdeQXVyNDMzMzI5MjM@._V1_QL50_.jpg',
        release: new Date('2 May 2019'),
        plot: 'Fred Flarsky is a gifted and free-spirited journalist who has a knack for getting into trouble. Charlotte Field is \
            one of the most influential women in the world -- a smart, sophisticated and accomplished politician. When Fred \
            unexpectedly runs into Charlotte, he soon realizes that she was his former baby sitter and childhood crush. When \
            Charlotte decides to make a run for the presidency, she impulsively hires Fred as her speechwriter -- much to the \
            dismay of her trusted advisers.',
        cast: ['Charlize Theron', 'Seth Rogen', 'Randall Park'],
        genres: ['comedy', 'romance', 'adventure'],
        addedBy :{
            id: '5e704f47d93ca1214470756d',
            username: 'kaustav007'
        },
        ratingValue: 'Unrated',
        ratingCount: 0,
        primeLink: '',
        netflixLink: '',
        hotstarLink: '',
        youtubeLink: '',
    },
    {
        name: 'Always Be My Maybe',
        poster: 'https://www.gstatic.com/tv/thumb/v22vodart/15586359/p15586359_v_v8_ab.jpg',
        image: 'https://m.media-amazon.com/images/M/MV5BZDc0MDE3NWEtYWM1Mi00ZDVjLTk5YzUtNWQzNmNiOTA5NTlmXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_QL50_SX1777_CR0,0,1777,888_AL_.jpg',
        release: new Date('29 May 2019'),
        plot: 'Everyone assumed Sasha and Marcus would wind up together except for Sasha and Marcus. Reconnecting after 15 years, the two start to wonder - maybe?',
        cast: ['Ali Wong', 'Randall Park', 'Keanu Reeves'],
        genres: ['comedy', 'romance', 'adventure'],
        addedBy :{
            id: '5e704f47d93ca1214470756d',
            username: 'kaustav007'
        },
        ratingValue: 'Unrated',
        ratingCount: 0,
        primeLink: '',
        netflixLink: 'https://www.netflix.com/in/title/80202874?source=35',
        hotstarLink: '',
        youtubeLink: '',
    },
    {
        name: 'The Fault In Our Stars',
        poster: 'https://m.media-amazon.com/images/M/MV5BMjA4NzkxNzc5Ml5BMl5BanBnXkFtZTgwNzQ3OTMxMTE@._V1_QL50_SY1000_CR0,0,675,1000_AL_.jpg',
        image: 'https://m.media-amazon.com/images/M/MV5BMTYwMjE4NDM1M15BMl5BanBnXkFtZTgwNzA5OTA4MTE@._V1_QL50_SY1000_CR0,0,1380,1000_AL_.jpg',
        release: new Date('14 July 2014'),
        plot: 'Two teenage cancer patients begin a life-affirming journey to visit a reclusive author in Amsterdam.',
        cast: ['Shailene Woodley', 'Ansel Elgort', 'Willem Dafoe'],
        genres: ['romance', 'drama'],
        addedBy :{
            id: '5e704f47d93ca1214470756d',
            username: 'kaustav007'
        },
        ratingValue: 'Unrated',
        ratingCount: 0,
        primeLink: '',
        netflixLink: '',
        hotstarLink: 'https://www.hotstar.com/in/movies/the-fault-in-our-stars/1770000333',
        youtubeLink: '',
    },
    {
        name: 'Zootopia',
        poster: 'https://m.media-amazon.com/images/M/MV5BOTMyMjEyNzIzMV5BMl5BanBnXkFtZTgwNzIyNjU0NzE@._V1_QL50_SY1000_SX675_AL_.jpg',
        image: 'https://www.rollingstone.com/wp-content/uploads/2018/06/rs-230396-zootopia.jpg',
        release: new Date('4 March 2016'),
        plot: 'Judy Hopps and Nick Wilde team up to uncover the mystery behind fourteen missing predators. They end up finding out that the \
            conspiracy is larger than it seems.',
        cast: ['Ginnifer Goodwin', 'Jason Bateman', 'Idris Elba', 'J.K. Simmons', 'Octavia Spencer'],
        genres: ['animated', 'adventure', 'comedy'],
        addedBy :{
            id: '5e704f47d93ca1214470756d',
            username: 'kaustav007'
        },
        ratingValue: 'Unrated',
        ratingCount: 0,
        primeLink: '',
        netflixLink: '',
        hotstarLink: '',
        youtubeLink: 'https://www.youtube.com/watch?v=BE2YkV2qn6c',
    },
    {
        name: 'Black Widow',
        poster: 'https://m.media-amazon.com/images/M/MV5BZGRlNTY3NGYtM2YzZS00N2YyLTg0ZDYtNmY2ZDg2NDM3N2JlXkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_QL50_SY1000_CR0,0,675,1000_AL_.jpg',
        image: 'https://m.media-amazon.com/images/M/MV5BOGU5MjA5NGItYTljYy00MTZjLWJkOGYtYzIxOTk4MWZkOWFlXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_QL50_SX1777_CR0,0,1777,743_AL_.jpg',
        release: new Date('24 April 2020'),
        plot: 'A film about Natasha Romanoff in her quests between the films Civil War and Infinity War.',
        cast: ['Scarlett Johansson', 'David Harbour'],
        genres: ['action', 'adventure', 'thriller', 'superhero'],
        addedBy :{
            id: '5e704f47d93ca1214470756d',
            username: 'kaustav007'
        },
        ratingValue: 'Unrated',
        ratingCount: 0,
        primeLink: '',
        netflixLink: '',
        hotstarLink: '',
        youtubeLink: '',
    },
    {
        name: 'Sully',
        poster: 'https://m.media-amazon.com/images/M/MV5BY2NmZDAwM2QtZmFiMS00OTJlLTgxMTItZDMyZmVhYjE1MDY3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL50_SY1000_CR0,0,666,1000_AL_.jpg',
        image: 'https://m.media-amazon.com/images/M/MV5BN2I2MTJkMzMtZWNmNy00NjE5LWEwMjEtMjkzZTlmYWRhOTU2XkEyXkFqcGdeQXVyMTk5MjkzMjU@._V1_QL50_SX1777_CR0,0,1777,742_AL_.jpg',
        release: new Date('6 July 1994'),
        plot: 'The story of Chesley "Sully" Sullenberger (Tom Hanks), an American pilot who became a hero after landing his damaged \
            plane on the Hudson River in order to save the flight\'s passengers and crew.',
        cast: ['Tom Hanks'],
        genres: ['biography', 'drama'],
        addedBy :{
            id: '5e704f47d93ca1214470756d',
            username: 'kaustav007'
        },
        ratingValue: 'Unrated',
        ratingCount: 0,
        primeLink: 'https://www.primevideo.com/detail/0HBS95GS6AU2YJFA3D7VBNX951/ref=atv_sr_def_c_unkc__1_1_1?sr=1-1&pageTypeIdSource=ASIN&pageTypeId=B072358XV2&qid=1584774164',
        netflixLink: '',
        hotstarLink: 'https://www.hotstar.com/in/movies/sully/1221113337',
        youtubeLink: 'https://www.youtube.com/watch?v=Nq_li6xlD2o',
    },
];

function seedMovies(){
    moviesArray.forEach((newMovie)=>{
        Movie.create(newMovie, (err, createdMovie)=>{
            if(err){
                console.log(err);
            } else {
                newMovie.cast.forEach((actor)=>{
                    Actor.findOne({"name": actor}, (err, foundActor)=>{
                        if(!foundActor){
                            console.log("no actor found");
                        } else {
                            if(newMovie.release > Date.now()){
                                foundActor.upcomingMovies.push(createdMovie);
                            } else {
                                foundActor.movies.push(createdMovie);
                            }
                            // createdMovie.actors.push(foundActor);
                            foundActor.save();
                            // console.log(foundActor);
                            Movie.findOne({"name": newMovie.name}, (err, foundMovie)=>{
                                foundMovie.actors.push(foundActor);
                                foundMovie.save();
                            });
                        }
                    });
                });
                console.log("NEW MOVIE ADDED: "+ newMovie.name);
            }
        });
    });
}

module.exports = seedMovies;