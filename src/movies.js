const movies = [
  {
    id: 1,
    title: 'The Shawshank Redemption',
    poster: 'https://via.placeholder.com/500x750/0b1220/ffffff?text=Shawshank',
    backdrop: 'https://via.placeholder.com/1280x720/071028/ffffff?text=Shawshank+Backdrop',
    vote_average: 9.3,
    release_date: '1994-09-10',
    overview: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption.'
  },
  {
    id: 2,
    title: 'The Godfather',
    poster: 'https://via.placeholder.com/500x750/1a1a1a/ffffff?text=Godfather',
    backdrop: 'https://via.placeholder.com/1280x720/111111/ffffff?text=Godfather+Backdrop',
    vote_average: 9.2,
    release_date: '1972-03-24',
    overview: 'The aging patriarch of an organized crime dynasty transfers control to his reluctant son.'
  },
  {
    id: 3,
    title: 'The Dark Knight',
    poster: 'https://via.placeholder.com/500x750/0b0f1a/ffffff?text=Dark+Knight',
    backdrop: 'https://via.placeholder.com/1280x720/041023/ffffff?text=Dark+Knight+Backdrop',
    vote_average: 9.0,
    release_date: '2008-07-18',
    overview: 'When the menace known as the Joker emerges, Batman must accept one of the greatest psychological tests.'
  },
  {
    id: 4,
    title: 'Pulp Fiction',
    poster: 'https://via.placeholder.com/500x750/2a1b0b/ffffff?text=Pulp+Fiction',
    backdrop: 'https://via.placeholder.com/1280x720/25180f/ffffff?text=Pulp+Fiction+Backdrop',
    vote_average: 8.9,
    release_date: '1994-10-14',
    overview: 'The lives of two mob hitmen, a boxer and a pair of diner bandits intertwine in four tales.'
  },
  {
    id: 5,
    title: 'Forrest Gump',
    poster: 'https://via.placeholder.com/500x750/16323b/ffffff?text=Forrest+Gump',
    backdrop: 'https://via.placeholder.com/1280x720/0f2733/ffffff?text=Forrest+Gump+Backdrop',
    vote_average: 8.8,
    release_date: '1994-07-06',
    overview: 'The presidencies, the Vietnam War and more through the perspective of an Alabama man.'
  },
  {
    id: 6,
    title: 'Inception',
    poster: 'https://via.placeholder.com/500x750/081722/ffffff?text=Inception',
    backdrop: 'https://via.placeholder.com/1280x720/06121a/ffffff?text=Inception+Backdrop',
    vote_average: 8.8,
    release_date: '2010-07-16',
    overview: 'A thief who steals corporate secrets through dream-sharing technology is given an inverse task.'
  },
  {
    id: 7,
    title: 'Fight Club',
    poster: 'https://via.placeholder.com/500x750/221111/ffffff?text=Fight+Club',
    backdrop: 'https://via.placeholder.com/1280x720/1a0f0f/ffffff?text=Fight+Club+Backdrop',
    vote_average: 8.8,
    release_date: '1999-10-15',
    overview: 'An insomniac office worker and a soap maker form an underground club that evolves into something more.'
  },
  {
    id: 8,
    title: 'The Lord of the Rings: The Return of the King',
    poster: 'https://via.placeholder.com/500x750/081816/ffffff?text=LOTR+Return',
    backdrop: 'https://via.placeholder.com/1280x720/061212/ffffff?text=LOTR+Backdrop',
    vote_average: 8.9,
    release_date: '2003-12-17',
    overview: 'Gandalf and Aragorn lead the World of Men against Sauron in order to draw his gaze.'
  },
  {
    id: 9,
    title: 'The Matrix',
    poster: 'https://via.placeholder.com/500x750/062a10/ffffff?text=The+Matrix',
    backdrop: 'https://via.placeholder.com/1280x720/041a0d/ffffff?text=Matrix+Backdrop',
    vote_average: 8.7,
    release_date: '1999-03-31',
    overview: 'A computer hacker learns about the true nature of his reality and his role in the war.'
  },
  {
    id: 10,
    title: 'Interstellar',
    poster: 'https://via.placeholder.com/500x750/051629/ffffff?text=Interstellar',
    backdrop: 'https://via.placeholder.com/1280x720/03101a/ffffff?text=Interstellar+Backdrop',
    vote_average: 8.6,
    release_date: '2014-11-07',
    overview: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity’s survival.'
  },
  {
    id: 11,
    title: 'Gladiator',
    poster: 'https://via.placeholder.com/500x750/2b1f16/ffffff?text=Gladiator',
    backdrop: 'https://via.placeholder.com/1280x720/24170f/ffffff?text=Gladiator+Backdrop',
    vote_average: 8.5,
    release_date: '2000-05-05',
    overview: 'A former Roman General sets out to exact vengeance against the corrupt emperor.'
  },
  {
    id: 12,
    title: 'Titanic',
    poster: 'https://via.placeholder.com/500x750/112233/ffffff?text=Titanic',
    backdrop: 'https://via.placeholder.com/1280x720/081826/ffffff?text=Titanic+Backdrop',
    vote_average: 7.8,
    release_date: '1997-12-19',
    overview: 'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious RMS Titanic.'
  },
  {
    id: 13,
    title: 'Avatar',
    poster: 'https://via.placeholder.com/500x750/083b2e/ffffff?text=Avatar',
    backdrop: 'https://via.placeholder.com/1280x720/042117/ffffff?text=Avatar+Backdrop',
    vote_average: 7.8,
    release_date: '2009-12-18',
    overview: 'A paraplegic Marine is dispatched to the moon Pandora on a unique mission.'
  },
  {
    id: 14,
    title: 'Dune',
    poster: 'https://via.placeholder.com/500x750/1b1f25/ffffff?text=Dune',
    backdrop: 'https://via.placeholder.com/1280x720/0f1216/ffffff?text=Dune+Backdrop',
    vote_average: 8.1,
    release_date: '2021-10-22',
    overview: 'Feature adaptation of Frank Herbert’s science fiction novel about the son of a noble family.'
  },
  {
    id: 15,
    title: 'Star Wars: Episode V - The Empire Strikes Back',
    poster: 'https://via.placeholder.com/500x750/0b0b1b/ffffff?text=Empire+Strikes+Back',
    backdrop: 'https://via.placeholder.com/1280x720/050614/ffffff?text=Star+Wars+Backdrop',
    vote_average: 8.7,
    release_date: '1980-05-21',
    overview: 'After the Rebels are overpowered by the Empire on the ice planet Hoth, Luke begins Jedi training.'
  }
];

export default movies;
