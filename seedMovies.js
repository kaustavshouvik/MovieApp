const Movie = require('./models/movie'),
    Actor = require('./models/actor');

moviesArray = [
    {
        name: 'Ford v Ferrari',
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
        genres: ['action', 'crime', 'drama'],
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
        genres: ['comedy', 'action', 'mystery'],
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
    }
];

function seedMovies(){
    moviesArray.forEach((newMovie)=>{
        Movie.create(newMovie, (err, createdMovie)=>{
            if(err){
                console.log(err);
            } else {
                console.log("NEW MOVIE ADDED: "+ newMovie.name);
                newMovie.cast.forEach((actor)=>{
                    Actor.findOne({"name": actor}, (err, foundActor)=>{
                        if(!foundActor){
                            console.log("no actor found");
                        } else {
                            foundActor.movies.push(createdMovie);
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
            }
        });
    });
}

module.exports = seedMovies;