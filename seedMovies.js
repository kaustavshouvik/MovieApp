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
        genres: ['biography', 'drama', 'sports'],
        addedBy :{
            id: '5e80d8c6de4b5f2fcc5412bc',
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
        genres: ['crime', 'thriller', 'action', 'drama', 'superhero'],
        addedBy :{
            id: '5e80d8c6de4b5f2fcc5412bc',
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
            id: '5e80d8c6de4b5f2fcc5412bc',
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
            id: '5e80d8c6de4b5f2fcc5412bc',
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
            id: '5e80d8c6de4b5f2fcc5412bc',
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
            id: '5e80d8c6de4b5f2fcc5412bc',
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
        name: 'Inception',
        poster: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_QL50_SY1000_CR0,0,675,1000_AL_.jpg',
        image: 'https://m.media-amazon.com/images/M/MV5BMTY3MzMzMDgyMF5BMl5BanBnXkFtZTcwMzY0OTk1Mw@@._V1_QL50_SX1500_CR0,0,1500,999_AL_.jpg',
        release: new Date('16 July 2010'),
        plot: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of \
            planting an idea into the mind of a C.E.O.',
        cast: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Ellen Page', 'Tom Hardy', 'Michael Caine'],
        genres: ['sci-fi', 'thriller', 'adventure', 'action', 'heist'],
        addedBy :{
            id: '5e80d8c6de4b5f2fcc5412bc',
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
            id: '5e80d8c6de4b5f2fcc5412bc',
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
        name: 'Star Trek Into Darkness',
        poster: 'https://m.media-amazon.com/images/M/MV5BMTk2NzczOTgxNF5BMl5BanBnXkFtZTcwODQ5ODczOQ@@._V1_QL50_SY1000_CR0,0,674,1000_AL_.jpg',
        image: 'https://m.media-amazon.com/images/M/MV5BMjAwOTcwMjg0NV5BMl5BanBnXkFtZTcwNDE0MzMxOQ@@._V1_QL50_SY1000_CR0,0,1776,1000_AL_.jpg',
        release: new Date('10 May 2013'),
        plot: 'The USS Enterprise crew travels to the forbidden zone in space to rescue an endangered species. Captain Kirk then \
            leads his team to a war-zone world in search of a weapon of mass destruction.',
        cast: ['Chris Pine', 'Simon Pegg', 'Zoe Saldana', 'Benedict Cumberbatch'],
        genres: ['sci-fi', 'action', 'adventure'],
        addedBy :{
            id: '5e80d8c6de4b5f2fcc5412bc',
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
            id: '5e80d8c6de4b5f2fcc5412bc',
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
            id: '5e80d8c6de4b5f2fcc5412bc',
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
        name: 'The Fault In Our Stars',
        poster: 'https://m.media-amazon.com/images/M/MV5BMjA4NzkxNzc5Ml5BMl5BanBnXkFtZTgwNzQ3OTMxMTE@._V1_QL50_SY1000_CR0,0,675,1000_AL_.jpg',
        image: 'https://m.media-amazon.com/images/M/MV5BMTYwMjE4NDM1M15BMl5BanBnXkFtZTgwNzA5OTA4MTE@._V1_QL50_SY1000_CR0,0,1380,1000_AL_.jpg',
        release: new Date('14 July 2014'),
        plot: 'Two teenage cancer patients begin a life-affirming journey to visit a reclusive author in Amsterdam.',
        cast: ['Shailene Woodley', 'Ansel Elgort', 'Willem Dafoe'],
        genres: ['romance', 'drama'],
        addedBy :{
            id: '5e80d8c6de4b5f2fcc5412bc',
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
            id: '5e80d8c6de4b5f2fcc5412bc',
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
        name: '1917',
        poster: 'https://m.media-amazon.com/images/M/MV5BOTdmNTFjNDEtNzg0My00ZjkxLTg1ZDAtZTdkMDc2ZmFiNWQ1XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_QL50_SY1000_CR0,0,631,1000_AL_.jpg',
        image: 'https://m.media-amazon.com/images/M/MV5BY2ZhMjI5MWEtOTVkYi00MjU1LWExOTgtYzIzZWY1YzQyZDM0XkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_QL50_SY1000_CR0,0,1500,1000_AL_.jpg',
        release: new Date('10 January 2020'),
        plot: 'April 6th, 1917. As a regiment assembles to wage war deep in enemy territory, two soldiers are assigned to race against time and \
            deliver a message that will stop 1,600 men from walking straight into a deadly trap.',
        cast: ['Colin Firth', 'Mark Strong', 'George MacKay', 'Dean-Charles Chapman'],
        genres: ['drama', 'war'],
        addedBy :{
            id: '5e80d8c6de4b5f2fcc5412bc',
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
        name: 'John Wick',
        poster: 'https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_QL50_SY1000_CR0,0,666,1000_AL_.jpg',
        image: 'https://m.media-amazon.com/images/M/MV5BMTkwNzIyNTE5Nl5BMl5BanBnXkFtZTgwMTg1MTI4MjE@._V1_QL50_SY1000_CR0,0,1502,1000_AL_.jpg',
        release: new Date('14 November 2014'),
        plot: 'An ex-hit-man comes out of retirement to track down the gangsters that killed his dog and took everything from him.',
        cast: ['Keanu Reeves', 'Lance Reddick', 'Willem Dafoe'],
        genres: ['action', 'thriller', 'crime'],
        addedBy :{
            id: '5e80d8c6de4b5f2fcc5412bc',
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
        cast: ['Will Smith', 'Martin Lawrence'],
        genres: ['action', 'comedy', 'crime'],
        addedBy :{
            id: '5e80d8c6de4b5f2fcc5412bc',
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
        cast: ['Vin Diesel', 'Charlize Theron', 'Tyrese Gibson', 'Gal Gadot', 'John Cena'],
        genres: ['action', 'adventure', 'thriller'],
        addedBy :{
            id: '5e80d8c6de4b5f2fcc5412bc',
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
            id: '5e80d8c6de4b5f2fcc5412bc',
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
            id: '5e80d8c6de4b5f2fcc5412bc',
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
        name: 'Zootopia',
        poster: 'https://m.media-amazon.com/images/M/MV5BOTMyMjEyNzIzMV5BMl5BanBnXkFtZTgwNzIyNjU0NzE@._V1_QL50_SY1000_SX675_AL_.jpg',
        image: 'https://www.rollingstone.com/wp-content/uploads/2018/06/rs-230396-zootopia.jpg',
        release: new Date('4 March 2016'),
        plot: 'Judy Hopps and Nick Wilde team up to uncover the mystery behind fourteen missing predators. They end up finding out that the \
            conspiracy is larger than it seems.',
        cast: ['Ginnifer Goodwin', 'Jason Bateman', 'Idris Elba', 'J.K. Simmons', 'Octavia Spencer'],
        genres: ['animated', 'adventure', 'comedy', 'mystery'],
        addedBy :{
            id: '5e80d8c6de4b5f2fcc5412bc',
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
            id: '5e80d8c6de4b5f2fcc5412bc',
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
            id: '5e80d8c6de4b5f2fcc5412bc',
            username: 'kaustav007'
        },
        ratingValue: 'Unrated',
        ratingCount: 0,
        primeLink: 'https://www.primevideo.com/detail/0HBS95GS6AU2YJFA3D7VBNX951/ref=atv_sr_def_c_unkc__1_1_1?sr=1-1&pageTypeIdSource=ASIN&pageTypeId=B072358XV2&qid=1584774164',
        netflixLink: '',
        hotstarLink: 'https://www.hotstar.com/in/movies/sully/1221113337',
        youtubeLink: 'https://www.youtube.com/watch?v=Nq_li6xlD2o',
    },
    {
        name: 'Lucy',
        poster: 'https://m.media-amazon.com/images/M/MV5BODcxMzY3ODY1NF5BMl5BanBnXkFtZTgwNzg1NDY4MTE@._V1_QL50_SY1000_CR0,0,631,1000_AL_.jpg',
        image: 'https://m.media-amazon.com/images/M/MV5BMTUyMDEwNjYzMV5BMl5BanBnXkFtZTgwMzAyNDI1MTE@._V1_QL50_SX1500_CR0,0,1500,999_AL_.jpg',
        release: new Date('25 July 2014'),
        plot: 'A woman, accidentally caught in a dark deal, turns the tables on her captors and transforms into a merciless warrior \
            evolved beyond human logic.',
        cast: ['Scarlett Johansson', 'Morgan Freeman'],
        genres: ['action', 'thriller', 'sci-fi'],
        addedBy :{
            id: '5e80d8c6de4b5f2fcc5412bc',
            username: 'kaustav007'
        },
        ratingValue: 'Unrated',
        ratingCount: 0,
        primeLink: 'https://www.primevideo.com/detail/0ND7Y71UEBCZB0EV0P5ZAWWZBD/ref=atv_sr_def_c_unkc__1_1_1?sr=1-1&pageTypeIdSource=ASIN&pageTypeId=B07K4DHVL5&qid=1584963725',
        netflixLink: 'https://www.netflix.com/in/title/70307658?source=35',
        hotstarLink: '',
        youtubeLink: 'https://www.youtube.com/watch?v=QTFGybLMohc',
    },
    {
        name: 'The Hurt Locker',
        poster: 'https://m.media-amazon.com/images/M/MV5BYWYxZjU2MmQtMmMzYi00ZWUwLTg2ZWQtMDExZTVlYjM3ZWM1XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL50_SY1000_CR0,0,666,1000_AL_.jpg',
        image: 'https://m.media-amazon.com/images/M/MV5BMTI3MzQzMTc3Nl5BMl5BanBnXkFtZTcwMzc2MzIzMw@@._V1_QL50_SX1777_CR0,0,1777,999_AL_.jpg',
        release: new Date('31 July 2009'),
        plot: 'During the Iraq War, a Sergeant recently assigned to an army bomb squad is put at odds with his squad mates due to his maverick way of handling his work.',
        cast: ['Jeremy Renner', 'Anthony Mackie'],
        genres: ["drama", "war", "thriller"],
        addedBy :{
            id: '5e80d8c6de4b5f2fcc5412bc',
            username: 'kaustav007'
        },
        ratingValue: 'Unrated',
        ratingCount: 0,
        primeLink: 'https://www.primevideo.com/detail/0J3SVA2ER7XK58BHO6KF6YAV4Y/ref=atv_sr_def_c_unkc__1_1_1?sr=1-1&pageTypeIdSource=ASIN&pageTypeId=B082LLT7BQ&qid=1584968375',
        netflixLink: '',
        hotstarLink: '',
        youtubeLink: 'https://youtu.be/C_VrM22cUo0',
    },
    {
        name: 'Speed',
        poster: 'https://m.media-amazon.com/images/M/MV5BYjc0MjYyN2EtZGRhMy00NzJiLWI2Y2QtYzhiYTU3NzAxNzg4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL50_SY1000_CR0,0,675,1000_AL_.jpg',
        image: 'https://m.media-amazon.com/images/M/MV5BMTg3NjA5NzcxNF5BMl5BanBnXkFtZTgwNjM3NjEzMDI@._V1_QL50_SX1777_CR0,0,1777,999_AL_.jpg',
        release: new Date('10 June 1994'),
        plot: 'A young police officer must prevent a bomb exploding aboard a city bus by keeping its speed above 50 mph.',
        cast: ['Keanu Reeves', 'Sandra Bullock'],
        genres: ["thriller", "action", "adventure"],
        addedBy :{
            id: '5e80d8c6de4b5f2fcc5412bc',
            username: 'kaustav007'
        },
        ratingValue: 'Unrated',
        ratingCount: 0,
        primeLink: '',
        netflixLink: '',
        hotstarLink: '',
        youtubeLink: 'https://www.youtube.com/watch?v=s1f_1vWf_Z0',
    },
    {
        name: 'Spies In Disguise',
        poster: 'https://m.media-amazon.com/images/M/MV5BNzg1MzM3OWUtNjgzZC00NjMzLWE1NzAtOThiMDgyMjhhZDBhXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_QL50_SY1000_SX675_AL_.jpg',
        image: 'https://m.media-amazon.com/images/M/MV5BYWY1MjZiMzctOTZlZS00MTdkLWE3ZmMtOWI5Y2IxYWUxMDY4XkEyXkFqcGdeQXVyODEwMTc2ODQ@._V1_QL50_SX1777_CR0,0,1777,744_AL_.jpg',
        release: new Date('27 December 2019'),
        plot: 'When the world\'s best spy is turned into a pigeon, he must rely on his nerdy tech officer to save the world.',
        cast: ['Will Smith', 'Tom Holland', 'Karen Gillan', 'Ben Mendelsohn'],
        genres: ["animated", "action", "adventure"],
        addedBy :{
            id: '5e80d8c6de4b5f2fcc5412bc',
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
        name: 'Fury',
        poster: 'https://m.media-amazon.com/images/M/MV5BMjA4MDU0NTUyN15BMl5BanBnXkFtZTgwMzQxMzY4MjE@._V1_QL50_SY1000_CR0,0,674,1000_AL_.jpg',
        image: 'https://m.media-amazon.com/images/M/MV5BMjM1ODA1NjQ4MF5BMl5BanBnXkFtZTgwOTQyNTY4MjE@._V1_QL50_SX1500_CR0,0,1500,999_AL_.jpg',
        release: new Date('17 October 2014'),
        plot: 'A grizzled tank commander makes tough decisions as he and his crew fight their way across Germany in April, 1945.',
        cast: ['Brad Pitt', 'Logan Lerman', 'Michael Peña', 'Jon Bernthal'],
        genres: ["action", "war", "drama"],
        addedBy :{
            id: '5e80d8c6de4b5f2fcc5412bc',
            username: 'kaustav007'
        },
        ratingValue: 'Unrated',
        ratingCount: 0,
        primeLink: '',
        netflixLink: 'https://www.netflix.com/in/title/70305907?source=35',
        hotstarLink: '',
        youtubeLink: 'https://youtu.be/mHezgC3Hhao',
    },
    {
        name: 'Hacksaw Ridge',
        poster: 'https://m.media-amazon.com/images/M/MV5BMjQ1NjM3MTUxNV5BMl5BanBnXkFtZTgwMDc5MTY5OTE@._V1_QL50_SY1000_CR0,0,647,1000_AL_.jpg',
        image: 'https://m.media-amazon.com/images/M/MV5BMTk1NjAyNzc5NF5BMl5BanBnXkFtZTgwMjQ0MTc5OTE@._V1_QL50_SY1000_CR0,0,1400,1000_AL_.jpg',
        release: new Date('4 November 2016'),
        plot: 'World War II American Army Medic Desmond T. Doss, who served during the Battle of Okinawa, refuses to kill people, and \
            becomes the first man in American history to receive the Medal of Honor without firing a shot.',
        cast: ['Andrew Garfield'],
        genres: ["biography", "war", "drama"],
        addedBy :{
            id: '5e80d8c6de4b5f2fcc5412bc',
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
        name: 'Tenet',
        poster: 'https://m.media-amazon.com/images/M/MV5BNmMwYzFlNTEtYTc0NC00NGY4LTgzNzItZGFiYTViY2QzNzU1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL50_SY1000_CR0,0,674,1000_AL_.jpg',
        image: 'https://m.media-amazon.com/images/M/MV5BMmZjZmY1ZTEtNTkwZC00ZGNmLTllMmEtMDcyYWY4MGQ4YTlhXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_QL50_.jpg',
        release: new Date('17 July 2020'),
        plot: 'An action epic revolving around international espionage, time travel, and evolution. Possibly about a man trying to prevent World War 3 through \
            time travel and rebirth.',
        cast: ['Robert Pattinson', 'Michael Caine', 'Himesh Patel', 'John David Washington'],
        genres: ['action', 'thriller', 'drama'],
        addedBy :{
            id: '5e80d8c6de4b5f2fcc5412bc',
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
        name: 'Knives Out',
        poster: 'https://m.media-amazon.com/images/M/MV5BMGUwZjliMTAtNzAxZi00MWNiLWE2NzgtZGUxMGQxZjhhNDRiXkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_QL50_SY1000_SX675_AL_.jpg',
        image: 'https://syn.org.au/app/uploads/Knives-Out-detectives.jpg',
        release: new Date('27 November 2019'),
        plot: 'A detective investigates the death of a patriarch of an eccentric, combative family.',
        cast: ['Daniel Craig', 'Chris Evans', 'Ana De Armas', 'Jaeden Martell'],
        genres: ['drama', 'thriller', 'crime', 'mystery'],
        addedBy :{
            id: '5e80d8c6de4b5f2fcc5412bc',
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
        name: 'Thor: Ragnarok',
        poster: 'https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_QL50_SY1000_CR0,0,674,1000_AL_.jpg',
        image: 'https://m.media-amazon.com/images/M/MV5BMTAwMDcwOTAyNjReQTJeQWpwZ15BbWU4MDgyMTI4MDQy._V1_QL50_SX1777_CR0,0,1777,744_AL_.jpg',
        release: new Date('3 November 2017'),
        plot: 'Deprived of his mighty hammer Mjolnir, Thor must escape the other side of the universe to save his home, Asgard, from Hela, \
            the goddess of death.',
        cast: ['Chris Hemsworth', 'Tom Hiddleston', 'Idris Elba', 'Benedict Cumberbatch', 'Mark Ruffalo', 'Taika Waititi'],
        genres: ['action', 'adventure', 'comedy', 'superhero'],
        addedBy :{
            id: '5e80d8c6de4b5f2fcc5412bc',
            username: 'kaustav007'
        },
        ratingValue: 'Unrated',
        ratingCount: 0,
        primeLink: '',
        netflixLink: '',
        hotstarLink: 'https://www.hotstar.com/in/movies/thor-ragnarok/1660010577',
        youtubeLink: '',
    },
    {
        name: 'Shazam!',
        poster: 'https://m.media-amazon.com/images/M/MV5BYTE0Yjc1NzUtMjFjMC00Y2I3LTg3NGYtNGRlMGJhYThjMTJmXkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_QL50_SY1000_CR0,0,674,1000_AL_.jpg',
        image: 'https://m.media-amazon.com/images/M/MV5BZDAyZTRlMzItZTMzOC00ODU4LWI5MWEtZDhmMTJlMzY2MTVjXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_QL50_SX1777_CR0,0,1777,999_AL_.jpg',
        release: new Date('5 April 2019'),
        plot: 'After being abandoned at a fair, Billy constantly searches for his mother. His life, however, takes a huge turn when \
            he inherits the superpowers of a powerful wizard.',
        cast: ['Zachary Levi', 'Mark Strong', 'Jack Dylan Grazer'],
        genres: ['action', 'adventure', 'comedy'],
        addedBy :{
            id: '5e80d8c6de4b5f2fcc5412bc',
            username: 'kaustav007'
        },
        ratingValue: 'Unrated',
        ratingCount: 0,
        primeLink: 'https://www.primevideo.com/detail/0RQYUONU1AQ7S0Z9OVM6BI9X71/ref=atv_sr_def_c_unkc__1_1_1?sr=1-1&pageTypeIdSource=ASIN&pageTypeId=B081RLMBPJ&qid=1585127991',
        netflixLink: '',
        hotstarLink: '',
        youtubeLink: 'https://youtu.be/GfFgv_Wo3dE',
    },
    {
        name: 'Jumanji: The Next Level',
        poster: 'https://m.media-amazon.com/images/M/MV5BOTVjMmFiMDUtOWQ4My00YzhmLWE3MzEtODM1NDFjMWEwZTRkXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL50_SY1000_CR0,0,674,1000_AL_.jpg',
        image: 'https://m.media-amazon.com/images/M/MV5BMzk3NDE0ZTItNjJiOS00YzM1LTkzYTQtOWZhMWUzOGQ2MTRhXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL50_SY1000_SX1500_AL_.jpg',
        release: new Date('13 December 2019'),
        plot: 'In Jumanji: The Next Level, the gang is back but the game has changed. As they return to rescue one of their own, \
            the players will have to brave parts unknown from arid deserts to snowy mountains, to escape the world\'s most \
            dangerous game.',
        cast: ['Dwayne Johnson', 'Kevin Hart', 'Karen Gillan'],
        genres: ['adventure', 'comedy', 'action'],
        addedBy :{
            id: '5e80d8c6de4b5f2fcc5412bc',
            username: 'kaustav007'
        },
        ratingValue: 'Unrated',
        ratingCount: 0,
        primeLink: 'https://www.primevideo.com/detail/0RQYUONU1AQ7S0Z9OVM6BI9X71/ref=atv_sr_def_c_unkc__1_1_1?sr=1-1&pageTypeIdSource=ASIN&pageTypeId=B081RLMBPJ&qid=1585127991',
        netflixLink: '',
        hotstarLink: '',
        youtubeLink: 'https://youtu.be/GfFgv_Wo3dE',
    },
    {
        name: 'Avengers: Infinity War',
        poster: 'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_QL50_SY1000_CR0,0,674,1000_AL_.jpg',
        image: 'https://m.media-amazon.com/images/M/MV5BMjA5Njg2NjcyOF5BMl5BanBnXkFtZTgwODY4MjkzNTM@._V1_QL50_SX1777_CR0,0,1777,937_AL_.jpg',
        release: new Date('27 April 2018'),
        plot: 'The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his \
            blitz of devastation and ruin puts an end to the universe.',
        cast: ['Robert Downey Jr.', 'Benedict Cumberbatch', 'Chris Hemsworth', 'Mark Ruffalo', 'Chris Evans', 'Scarlett Johansson', 
            'Don Cheadle', 'Tom Holland', 'Chadwick Boseman', 'Karen Gillan', 'Tom Hiddleston', 'Elizabeth Olsen', 'Anthony Mackie',
            'Sebastian Stan', 'Idris Elba', 'Peter Dinklage', 'Benedict Wong', 'Dave Bautista', 'Vin Diesel', 'Bradley Cooper',
            'Josh Brolin', 'Chris Pratt'],
        genres: ['action', 'adventure', 'sci-fi', 'superhero'],
        addedBy :{
            id: '5e80d8c6de4b5f2fcc5412bc',
            username: 'kaustav007'
        },
        ratingValue: 'Unrated',
        ratingCount: 0,
        primeLink: '',
        netflixLink: '',
        hotstarLink: 'https://www.hotstar.com/in/movies/avengers-endgame/1260013556',
        youtubeLink: '',
    },
    {
        name: 'Spider-Man: Far From Home',
        poster: 'https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_QL50_SY1000_CR0,0,674,1000_AL_.jpg',
        image: 'https://m.media-amazon.com/images/M/MV5BN2I1MDE3Y2EtZDdlOS00MjVmLWJmNTctOTNmYWY3ZmYzOWQ4XkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_QL50_SX1777_CR0,0,1777,936_AL_.jpg',
        release: new Date('28 June 2019'),
        plot: 'As Spider-Man, a beloved superhero, Peter Parker faces four destructive elemental monsters while on holiday in Europe. \
            Soon, he receives help from Mysterio, a fellow hero with mysterious origins.',
        cast: ['Tom Holland', 'Samuel L. Jackson', 'Jake Gyllenhaal', 'Zendaya', 'Cobie Smulders'],
        genres: ['action', 'adventure', 'sci-fi', 'superhero'],
        addedBy :{
            id: '5e80d8c6de4b5f2fcc5412bc',
            username: 'kaustav007'
        },
        ratingValue: 'Unrated',
        ratingCount: 0,
        primeLink: 'https://www.primevideo.com/detail/0KRH21HZEEX3FGTRXV0D3O3R61/ref=atv_sr_def_c_unkc__1_1_1?sr=1-1&pageTypeIdSource=ASIN&pageTypeId=B07ZF9ZKBT&qid=1585146912',
        netflixLink: '',
        hotstarLink: '',
        youtubeLink: 'https://youtu.be/pW3cU6EgGWA',
    },
    {
        name: 'Wonder Woman 1984',
        poster: 'https://m.media-amazon.com/images/M/MV5BYzAyOGJkMzUtMmRjYS00NGJmLWExNGEtYzI2YjVmMmQzMzFiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL50_SY1000_SX675_AL_.jpg',
        image: 'https://m.media-amazon.com/images/M/MV5BMjMzNjYxNTQxNF5BMl5BanBnXkFtZTgwNTczNzA3NTM@._V1_QL50_.jpg',
        release: new Date('14 August 2020'),
        plot: 'Wonder Woman squares off against the Cheetah, a villainess who possesses superhuman strength and agility.',
        cast: ['Gal Gadot', 'Chris Pine', 'Pedro Pascal'],
        genres: ['action', 'adventure', 'sci-fi', 'superhero'],
        addedBy :{
            id: '5e80d8c6de4b5f2fcc5412bc',
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
        name: 'Baby Driver',
        poster: 'https://m.media-amazon.com/images/M/MV5BMjM3MjQ1MzkxNl5BMl5BanBnXkFtZTgwODk1ODgyMjI@._V1_QL50_SY1000_CR0,0,674,1000_AL_.jpg',
        image: 'https://m.media-amazon.com/images/M/MV5BMjIzNjA5OTE2M15BMl5BanBnXkFtZTgwMjczODMyMTI@._V1_QL50_SY1000_CR0,0,1726,1000_AL_.jpg',
        release: new Date('11 March 2017'),
        plot: 'Doc forces Baby, a former getaway driver, to partake in a heist, threatening to hurt his girlfriend if he refuses. \
            The plan goes awry when their arms dealers turn out to be undercover officers.',
        cast: ['Ansel Elgort', 'Jon Bernthal', 'Jon Hamm', 'Kevin Spacey', 'Jamie Foxx'],
        genres: ['action', 'crime', 'drama', 'heist'],
        addedBy :{
            id: '5e80d8c6de4b5f2fcc5412bc',
            username: 'kaustav007'
        },
        ratingValue: 'Unrated',
        ratingCount: 0,
        primeLink: '',
        netflixLink: '',
        hotstarLink: '',
        youtubeLink: 'https://youtu.be/Xy7yNGibBIM',
    },
    {
        name: 'Ocean\'s Eleven',
        poster: 'https://m.media-amazon.com/images/M/MV5BYzVmYzVkMmUtOGRhMi00MTNmLThlMmUtZTljYjlkMjNkMjJkXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_QL50_SY1000_CR0,0,675,1000_AL_.jpg',
        image: 'https://m.media-amazon.com/images/M/MV5BNzE2NDQzMDc0Ml5BMl5BanBnXkFtZTcwMzM5OTQyNw@@._V1_QL50_SY1000_CR0,0,1520,1000_AL_.jpg',
        release: new Date('5 December 2001'),
        plot: 'Danny Ocean and his ten accomplices plan to rob three Las Vegas casinos simultaneously.',
        cast: ['George Clooney', 'Brad Pitt', 'Matt Damon', 'Julia Roberts'],
        genres: ['heist', 'crime', 'thriller'],
        addedBy :{
            id: '5e80d8c6de4b5f2fcc5412bc',
            username: 'kaustav007'
        },
        ratingValue: 'Unrated',
        ratingCount: 0,
        primeLink: 'https://www.primevideo.com/detail/0RZFTNZ3FJJB8TD0JNI63TJ7AA/ref=atv_sr_def_c_unkc__2_1_2?sr=1-2&pageTypeIdSource=ASIN&pageTypeId=B079VQDG58&qid=1585160432',
        netflixLink: 'https://www.netflix.com/in/title/60021783?source=35',
        hotstarLink: 'https://www.hotstar.com/in/movies/oceans-eleven/1221115975',
        youtubeLink: '',
    },
    {
        name: 'The Invisible Man',
        poster: 'https://m.media-amazon.com/images/M/MV5BZjFhM2I4ZDYtZWMwNC00NTYzLWE3MDgtNjgxYmM3ZWMxYmVmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL50_SY1000_CR0,0,631,1000_AL_.jpg',
        image: 'https://m.media-amazon.com/images/M/MV5BNDZmYTVmOGUtYzU4Yi00NmJjLTgzNmUtZjZiNmMyZDM3ZjJjXkEyXkFqcGdeQXVyNjczOTE0MzM@._V1_QL50_SX1777_CR0,0,1777,999_AL_.jpg',
        release: new Date('28 February 2020'),
        plot: 'When Cecilia\'s abusive ex takes his own life and leaves her his fortune, she suspects his death was a hoax. As a \
            series of coincidences turn lethal, Cecilia works to prove that she is being hunted by someone nobody can see.',
        cast: ['Elisabeth Moss'],
        genres: ['horror', 'mystery', 'thriller'],
        addedBy :{
            id: '5e80d8c6de4b5f2fcc5412bc',
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
        name: 'It',
        poster: 'https://m.media-amazon.com/images/M/MV5BZDVkZmI0YzAtNzdjYi00ZjhhLWE1ODEtMWMzMWMzNDA0NmQ4XkEyXkFqcGdeQXVyNzYzODM3Mzg@._V1_QL50_SY1000_CR0,0,666,1000_AL_.jpg',
        image: 'https://m.media-amazon.com/images/M/MV5BMjEyMzM3NjM0NF5BMl5BanBnXkFtZTgwMDQ1NzMzMzI@._V1_QL50_SY1000_CR0,0,1502,1000_AL_.jpg',
        release: new Date('8 September 2017'),
        plot: 'In the summer of 1989, a group of bullied kids band together to destroy a shape-shifting monster, which disguises \
            itself as a clown and preys on the children of Derry, their small Maine town.',
        cast: ['Jaeden Martell', 'Jack Dylan Grazer', 'Bill Skarsgård'],
        genres: ['horror', 'thriller'],
        addedBy :{
            id: '5e80d8c6de4b5f2fcc5412bc',
            username: 'kaustav007'
        },
        ratingValue: 'Unrated',
        ratingCount: 0,
        primeLink: '',
        netflixLink: 'https://www.netflix.com/in/title/80177770?source=35',
        hotstarLink: '',
        youtubeLink: 'https://youtu.be/AnCDoTaxnhs',
    },
    {
        name: 'Zombieland',
        poster: 'https://m.media-amazon.com/images/M/MV5BMTU5MDg0NTQ1N15BMl5BanBnXkFtZTcwMjA4Mjg3Mg@@._V1_QL50_SY1000_CR0,0,717,1000_AL_.jpg',
        image: 'https://m.media-amazon.com/images/M/MV5BNDQ1MzM3NjA0N15BMl5BanBnXkFtZTcwOTgyODYxNw@@._V1_QL50_SY1000_CR0,0,1502,1000_AL_.jpg',
        release: new Date('2 October 2009'),
        plot: 'A shy student trying to reach his family in Ohio, a gun-toting tough guy trying to find the last Twinkie, and a pair \
            of sisters trying to get to an amusement park join forces to travel across a zombie-filled America.',
        cast: ['Woody Harrelson', 'Jesse Eisenberg', 'Emma Stone'],
        genres: ['zombie', 'comedy', 'action'],
        addedBy :{
            id: '5e80d8c6de4b5f2fcc5412bc',
            username: 'kaustav007'
        },
        ratingValue: 'Unrated',
        ratingCount: 0,
        primeLink: '',
        netflixLink: '',
        hotstarLink: '',
        youtubeLink: 'https://youtu.be/QvkzNqAV6fs',
    },
    {
        name: 'Inside Out',
        poster: 'https://m.media-amazon.com/images/M/MV5BOTgxMDQwMDk0OF5BMl5BanBnXkFtZTgwNjU5OTg2NDE@._V1_QL50_SY1000_CR0,0,674,1000_AL_.jpg',
        image: 'https://m.media-amazon.com/images/M/MV5BMTQ4MDQwNTU3NF5BMl5BanBnXkFtZTgwNTk3NTE2NTE@._V1_QL50_.jpg',
        release: new Date('19 June 2015'),
        plot: 'After young Riley is uprooted from her Midwest life and moved to San Francisco, her emotions - Joy, Fear, Anger, \
            Disgust and Sadness - conflict on how best to navigate a new city, house, and school.',
        cast: ['Amy Poehler', 'Bill Hader'],
        genres: ['animated', 'comedy', 'adventure'],
        addedBy :{
            id: '5e80d8c6de4b5f2fcc5412bc',
            username: 'kaustav007'
        },
        ratingValue: 'Unrated',
        ratingCount: 0,
        primeLink: '',
        netflixLink: '',
        hotstarLink: '',
        youtubeLink: 'https://youtu.be/fnD07MYXzPA',
    },
    {
        name: 'Now You See Me',
        poster: 'https://m.media-amazon.com/images/M/MV5BMTY0NDY3MDMxN15BMl5BanBnXkFtZTcwOTM5NzMzOQ@@._V1_QL50_SY1000_CR0,0,642,1000_AL_.jpg',
        image: 'https://m.media-amazon.com/images/M/MV5BMTYyNjk2MzIzOV5BMl5BanBnXkFtZTcwNTk4NjU1OQ@@._V1_QL50_SY1000_CR0,0,1503,1000_AL_.jpg',
        release: new Date('31 May 2013'),
        plot: 'Four street magicians, Daniel, Merritt, Henley and Jack, ransack a huge amount of money belonging to insurance baron \
            Arthur Tressler while being chased by FBI agent Dylan and Interpol agent Alma.',
        cast: ['Jesse Eisenberg', 'Mark Ruffalo', 'Woody Harrelson', 'Morgan Freeman', 'Michael Caine'],
        genres: ['mystery', 'crime', 'thriller'],
        addedBy :{
            id: '5e80d8c6de4b5f2fcc5412bc',
            username: 'kaustav007'
        },
        ratingValue: 'Unrated',
        ratingCount: 0,
        primeLink: '',
        netflixLink: 'https://www.netflix.com/in/title/70243464?source=35',
        hotstarLink: '',
        youtubeLink: '',
    },
    {
        name: 'World War Z',
        poster: 'https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_QL50_SY1000_SX650_AL_.jpg',
        image: 'https://m.media-amazon.com/images/M/MV5BMjE0MTI3ODc4NF5BMl5BanBnXkFtZTcwMTI0MTY2OQ@@._V1_QL50_SX1500_CR0,0,1500,999_AL_.jpg',
        release: new Date('21 June 2013'),
        plot: 'Former United Nations employee Gerry Lane traverses the world in a race against time to stop a zombie pandemic that is \
            toppling armies and governments and threatens to destroy humanity itself.',
        cast: ['Brad Pitt'],
        genres: ['zombie', 'adventure', 'action'],
        addedBy :{
            id: '5e80d8c6de4b5f2fcc5412bc',
            username: 'kaustav007'
        },
        ratingValue: 'Unrated',
        ratingCount: 0,
        primeLink: 'https://www.primevideo.com/detail/0FBAXV5BUJI5RAORQ7F6799NF4/ref=atv_sr_def_c_unkc__1_1_1?sr=1-1&pageTypeIdSource=ASIN&pageTypeId=B01M9F2VX9&qid=1585321923',
        netflixLink: '',
        hotstarLink: '',
        youtubeLink: 'https://youtu.be/noPVj6D8xyo',
    },
    {
        name: 'The Book Of Eli',
        poster: 'https://m.media-amazon.com/images/M/MV5BNTE1OWI1YzgtZjEyMy00MjQ4LWE0NWMtYTNhYjc0ZDQ3ZGRkXkEyXkFqcGdeQXVyNDQ2MTMzODA@._V1_QL50_SY1000_CR0,0,666,1000_AL_.jpg',
        image: 'https://m.media-amazon.com/images/M/MV5BMTM0NzE3NDU4Nl5BMl5BanBnXkFtZTcwMDQwNTcwMw@@._V1_QL50_SY1000_CR0,0,1503,1000_AL_.jpg',
        release: new Date('15 January 2010'),
        plot: 'A post-apocalyptic tale, in which a lone man fights his way across America in order to protect a sacred book that \
            holds the secrets to saving humankind.',
        cast: ['Denzel Washington', 'Mila Kunis', 'Gary Oldman'],
        genres: ['post apocalyptic', 'action', 'drama'],
        addedBy :{
            id: '5e80d8c6de4b5f2fcc5412bc',
            username: 'kaustav007'
        },
        ratingValue: 'Unrated',
        ratingCount: 0,
        primeLink: '',
        netflixLink: 'https://www.netflix.com/in/title/70114342?source=35',
        hotstarLink: '',
        youtubeLink: '',
    },
    {
        name: 'Django Unchained',
        poster: 'https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_QL50_SY1000_CR0,0,674,1000_AL_.jpg',
        image: 'https://m.media-amazon.com/images/M/MV5BMTk4NzQwODM5MF5BMl5BanBnXkFtZTcwNjgzNTI3Nw@@._V1_QL50_SY1000_CR0,0,1486,1000_AL_.jpg',
        release: new Date('25 December 2012'),
        plot: 'When Django, a slave, is freed, he joins forces with a bounty hunter to rescue his wife, who has been captured by a \
            hard-hearted plantation owner.',
        cast: ['Jamie Foxx', 'Leonardo DiCaprio', 'Samuel L. Jackson'],
        genres: ['western', 'drama', 'action'],
        addedBy :{
            id: '5e80d8c6de4b5f2fcc5412bc',
            username: 'kaustav007'
        },
        ratingValue: 'Unrated',
        ratingCount: 0,
        primeLink: '',
        netflixLink: 'https://www.netflix.com/in/title/70230640?source=35',
        hotstarLink: '',
        youtubeLink: '',
    },
    {
        name: 'The Hateful Eight',
        poster: 'https://m.media-amazon.com/images/M/MV5BMjA1MTc1NTg5NV5BMl5BanBnXkFtZTgwOTM2MDEzNzE@._V1_QL50_SY1000_CR0,0,674,1000_AL_.jpg',
        image: 'https://m.media-amazon.com/images/M/MV5BMjEyMDI1MjkwMl5BMl5BanBnXkFtZTgwMDA5MDM1NjE@._V1_QL50_.jpg',
        release: new Date('30 December 2015'),
        plot: 'In the dead of a Wyoming winter, a bounty hunter and his prisoner find shelter in a cabin currently inhabited by a \
            collection of nefarious characters.',
        cast: ['Kurt Russell', 'Samuel L. Jackson'],
        genres: ['western', 'drama', 'action', 'crime'],
        addedBy :{
            id: '5e80d8c6de4b5f2fcc5412bc',
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
        name: 'I Am Legend',
        poster: 'https://m.media-amazon.com/images/M/MV5BYTE1ZTBlYzgtNmMyNS00ZTQ2LWE4NjEtZjUxNDJkNTg2MzlhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL50_SY1000_SX675_AL_.jpg',
        image: 'https://m.media-amazon.com/images/M/MV5BZjVhNWMxMzUtNDJmZS00NjI0LTg4ZjEtYTY2ZjQ3NTBkODlmXkEyXkFqcGdeQXVyNjUxNDQwMzA@._V1_QL50_SX1777_CR0,0,1777,770_AL_.jpg',
        release: new Date('14 December 2007'),
        plot: 'Years after a plague kills most of humanity and transforms the rest into monsters, the sole survivor in New York City \
            struggles valiantly to find a cure in this post-apocalyptic action thriller.',
        cast: ['Will Smith'],
        genres: ['post apocalyptic', 'drama', 'thriller'],
        addedBy :{
            id: '5e80d8c6de4b5f2fcc5412bc',
            username: 'kaustav007'
        },
        ratingValue: 'Unrated',
        ratingCount: 0,
        primeLink: 'https://www.primevideo.com/detail/0QOJQDZH8Q9CONBTKR4AXWPN3U/ref=atv_dl_rdr?tag=imdbtag_tt_wbr_pvs_piv_in-21',  
        netflixLink: '',
        hotstarLink: '',
        youtubeLink: 'https://youtu.be/qSfNwhL9hAk',
    },
    {
        name: 'Harry Potter And The Sorcerer\'s Stone',
        poster: 'https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_QL50_.jpg',
        image: 'https://m.media-amazon.com/images/M/MV5BMTMzNzY4NDgzMl5BMl5BanBnXkFtZTcwMTMzNDc3Mw@@._V1_QL50_SY1000_CR0,0,1525,1000_AL_.jpg',
        release: new Date('16 November 2001'),
        plot: 'An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible \
            evil that haunts the magical world.',
        cast: ['Daniel Radcliffe', 'Emma Watson', 'Rupert Grint', 'Alan Rickman'],
        genres: ['family', 'adventure', 'fantasy'],
        addedBy :{
            id: '5e80d8c6de4b5f2fcc5412bc',
            username: 'kaustav007'
        },
        ratingValue: 'Unrated',
        ratingCount: 0,
        primeLink: 'https://www.primevideo.com/detail/0N8WYH0W6L7Q0ODHGQCHMMRH4R/ref=atv_dl_rdr?tag=imdbtag_tt_wbr_pvs_piv_in-21',  
        netflixLink: '',
        hotstarLink: '',
        youtubeLink: '',
    },
    {
        name: 'Harry Potter And The Prisoner Of Azkaban',
        poster: 'https://m.media-amazon.com/images/M/MV5BMTY4NTIwODg0N15BMl5BanBnXkFtZTcwOTc0MjEzMw@@._V1_QL50_SY1000_CR0,0,676,1000_AL_.jpg',
        image: 'https://m.media-amazon.com/images/M/MV5BNTcxMjQxOTQwNV5BMl5BanBnXkFtZTcwOTAxNjUwNA@@._V1_QL50_SY1000_CR0,0,1518,1000_AL_.jpg',
        release: new Date('4 June 2004'),
        plot: 'Harry Potter, Ron and Hermione return to Hogwarts School of Witchcraft and Wizardry for their third year of study, where \
            they delve into the mystery surrounding an escaped prisoner who poses a dangerous threat to the young wizard.',
        cast: ['Daniel Radcliffe', 'Emma Watson', 'Rupert Grint', 'Alan Rickman', 'Gary Oldman'],
        genres: ['family', 'adventure', 'fantasy'],
        addedBy :{
            id: '5e80d8c6de4b5f2fcc5412bc',
            username: 'kaustav007'
        },
        ratingValue: 'Unrated',
        ratingCount: 0,
        primeLink: 'https://www.primevideo.com/detail/0HKBCOWZ6L75JX0GXBANJSQLIM/ref=atv_dl_rdr?tag=imdbtag_tt_wbr_pvs_piv_in-21',  
        netflixLink: '',
        hotstarLink: '',
        youtubeLink: '',
    },
    {
        name: 'Fantastic Beasts And Where To Find Them',
        poster: 'https://m.media-amazon.com/images/M/MV5BMjMxOTM1OTI4MV5BMl5BanBnXkFtZTgwODE5OTYxMDI@._V1_QL50_SY1000_CR0,0,674,1000_AL_.jpg',
        image: 'https://m.media-amazon.com/images/M/MV5BMTgxNDY1MjkyMl5BMl5BanBnXkFtZTgwNDIyMTI1MDI@._V1_QL50_SX1777_CR0,0,1777,744_AL_.jpg',
        release: new Date('18 November 2016'),
        plot: 'The adventures of writer Newt Scamander in New York\'s secret community of witches and wizards seventy years \
            before Harry Potter reads his book in school.',
        cast: ['Eddie Redmayne', 'Katherine Waterston', 'Ezra Miller', 'Johnny Depp', 'Dan Fogler'],
        genres: ['family', 'adventure', 'fantasy'],
        addedBy :{
            id: '5e80d8c6de4b5f2fcc5412bc',
            username: 'kaustav007'
        },
        ratingValue: 'Unrated',
        ratingCount: 0,
        primeLink: 'https://www.primevideo.com/detail/0I9W62JMEYIHAM6X9XUKKCCVA9/ref=atv_dl_rdr?tag=imdbtag_tt_wbr_pvs_piv_in-21',  
        netflixLink: '',
        hotstarLink: '',
        youtubeLink: '',
    },
    {
        name: 'Fantastic Beasts: The Crimes of Grindelwald',
        poster: 'https://m.media-amazon.com/images/M/MV5BYWVlMDI5N2UtZTIyMC00NjZkLWI5Y2QtODM5NGE5MzA0NmVjXkEyXkFqcGdeQXVyNzU3NjUxMzE@._V1_QL50_.jpg',
        image: 'https://m.media-amazon.com/images/M/MV5BMjQ0MDMzNjY2M15BMl5BanBnXkFtZTgwNDU1OTE3NjM@._V1_QL50_SX1777_CR0,0,1777,744_AL_.jpg',
        release: new Date('18 November 2016'),
        plot: 'Gellert Grindelwald plans to raise an army of wizards to rule over non-magical beings. In response, Newt \
            Scamander\'s former professor, Albus Dumbledore, seeks his help to stop him.',
        cast: ['Eddie Redmayne', 'Katherine Waterston', 'Ezra Miller', 'Johnny Depp', 'Dan Fogler', 'Jude Law'],
        genres: ['family', 'adventure', 'fantasy'],
        addedBy :{
            id: '5e80d8c6de4b5f2fcc5412bc',
            username: 'kaustav007'
        },
        ratingValue: 'Unrated',
        ratingCount: 0,
        primeLink: 'https://www.primevideo.com/detail/0MW6RRL5IS3VSNTAICPS4TWY9B/ref=atv_dl_rdr?tag=imdbtag_tt_wbr_pvs_piv_in-21',  
        netflixLink: '',
        hotstarLink: '',
        youtubeLink: '',
    },
    {
        name: 'Home Alone',
        poster: 'https://m.media-amazon.com/images/M/MV5BMzFkM2YwOTQtYzk2Mi00N2VlLWE3NTItN2YwNDg1YmY0ZDNmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL50_SY1000_CR0,0,672,1000_AL_.jpg',
        image: 'https://m.media-amazon.com/images/M/MV5BMTgwODY4MzAzNl5BMl5BanBnXkFtZTcwNzMzMTk4NA@@._V1_QL50_SY1000_CR0,0,1491,1000_AL_.jpg',
        release: new Date('16 November 1990'),
        plot: 'An eight-year-old troublemaker must protect his house from a pair of burglars when he is accidentally left home \
            alone by his family during Christmas vacation.',
        cast: ['Macaulay Culkin'],
        genres: ['family', 'comedy'],
        addedBy :{
            id: '5e80d8c6de4b5f2fcc5412bc',
            username: 'kaustav007'
        },
        ratingValue: 'Unrated',
        ratingCount: 0,
        primeLink: '',  
        netflixLink: '',
        hotstarLink: 'https://www.hotstar.com/in/movies/home-alone/1770000922',
        youtubeLink: 'https://youtu.be/BDr4yycjXWk',
    },
    {
        name: 'Going In Style',
        poster: 'https://m.media-amazon.com/images/M/MV5BMTc5Mzg3NjI4OF5BMl5BanBnXkFtZTgwNzA3Mzg4MDI@._V1_QL50_SY1000_CR0,0,674,1000_AL_.jpg',
        image: 'https://m.media-amazon.com/images/M/MV5BMjM3NjgxOTQ1Nl5BMl5BanBnXkFtZTgwNTg1MzI5MTI@._V1_QL50_SX1500_CR0,0,1500,999_AL_.jpg',
        release: new Date('7 April 2017'),
        plot: 'Desperate to pay the bills and come through for their loved ones, three lifelong pals risk it all by embarking on a \
            daring bid to knock off the very bank that absconded with their money.',
        cast: ['Michael Caine', 'Morgan Freeman'],
        genres: ['comedy', 'crime', 'family'],
        addedBy :{
            id: '5e80d8c6de4b5f2fcc5412bc',
            username: 'kaustav007'
        },
        ratingValue: 'Unrated',
        ratingCount: 0,
        primeLink: '',  
        netflixLink: '',
        hotstarLink: 'https://www.hotstar.com/in/movies/going-in-style/1221124501',
        youtubeLink: '',
    },
    {
        name: 'Gifted',
        poster: 'https://www.gstatic.com/tv/thumb/v22vodart/13045694/p13045694_v_v8_ab.jpg',
        image: 'https://m.media-amazon.com/images/M/MV5BMzMxODE2MGEtMDA4Yy00NDJkLTg4NWYtOTBlNjE5NDc4NGM5XkEyXkFqcGdeQXVyNDg2MjUxNjM@._V1_QL50_SY1000_CR0,0,1502,1000_AL_.jpg',
        release: new Date('12 April 2017'),
        plot: 'Frank, a single man raising his child prodigy niece Mary, is drawn into a custody battle with his mother.',
        cast: ['Chris Evans', 'Mckenna Grace', 'Octavia Spencer', 'Jenny Slate'],
        genres: ['drama', 'family'],
        addedBy :{
            id: '5e80d8c6de4b5f2fcc5412bc',
            username: 'kaustav007'
        },
        ratingValue: 'Unrated',
        ratingCount: 0,
        primeLink: '',  
        netflixLink: '',
        hotstarLink: 'https://www.hotstar.com/in/movies/gifted/1770016970',
        youtubeLink: '',
    },
    {
        name: 'Wonder',
        poster: 'https://m.media-amazon.com/images/M/MV5BYjFhOWY0OTgtNDkzMC00YWJkLTk1NGEtYWUxNjhmMmQ5ZjYyXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_QL50_SY1000_CR0,0,648,1000_AL_.jpg',
        image: 'https://m.media-amazon.com/images/M/MV5BM2FlMjBmYWEtYmQyNi00NWQ0LTk4OWUtZTBkNzUwNTNiNmRkXkEyXkFqcGdeQXVyNDg2MjUxNjM@._V1_QL50_SY1000_CR0,0,1505,1000_AL_.jpg',
        release: new Date('17 November 2017'),
        plot: 'Based on the New York Times bestseller, this movie tells the incredibly inspiring and heartwarming story of August \
            Pullman, a boy with facial differences who enters the fifth grade, attending a mainstream elementary school for the \
            first time.',
        cast: ['Jacob Tremblay', 'Owen Wilson', 'Julia Roberts'],
        genres: ['drama', 'family'],
        addedBy :{
            id: '5e80d8c6de4b5f2fcc5412bc',
            username: 'kaustav007'
        },
        ratingValue: 'Unrated',
        ratingCount: 0,
        primeLink: '',  
        netflixLink: '',
        hotstarLink: '',
        youtubeLink: 'https://youtu.be/kj12aGfhQq4',
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

