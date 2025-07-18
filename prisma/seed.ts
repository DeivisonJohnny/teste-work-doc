// prisma/seed.ts
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const filmes = [
  {
    title: "Star Wars: Episode IV - A New Hope",
    year: "1977",
    rated: "PG",
    released: "25 May 1977",
    runtime: "121 min",
    genre: "Action, Adventure, Fantasy, Sci-Fi",
    director: "George Lucas",
    writer: "George Lucas",
    actors: "Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing",
    plot: "The Imperial Forces, under orders from cruel Darth Vader, hold Princess Leia hostage in their efforts to quell the rebellion against the Galactic Empire. Luke Skywalker and Han Solo, captain of the Millennium Falcon, work together with the companionable droid duo R2-D2 and C-3PO to rescue the beautiful princess, help the Rebel Alliance and restore freedom and justice to the Galaxy.",
    language: "English",
    country: "USA, UK",
    awards: "Won 6 Oscars. Another 58 wins &amp; 29 nominations.",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    ratings: [
      {
        source: "Internet Movie Database",
        value: "8.6/10",
      },
      {
        source: "Rotten Tomatoes",
        value: "92%",
      },
      {
        source: "Metacritic",
        value: "90/100",
      },
    ],
    metascore: "90",
    imdbRating: "8.6",
    imdbVotes: "1,255,061",
    imdbID: "tt0076759",
    type: "movie",
    DVD: "10 Oct 2016",
    boxOffice: "$460,998,507",
    production: "Lucasfilm Ltd.",
    website: "N/A",
  },
  {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    year: "1980",
    rated: "PG",
    released: "20 Jun 1980",
    runtime: "124 min",
    genre: "Action, Adventure, Fantasy, Sci-Fi",
    director: "Irvin Kershner",
    writer:
      "Leigh Brackett (screenplay by), Lawrence Kasdan (screenplay by), George Lucas (story by)",
    actors: "Mark Hamill, Harrison Ford, Carrie Fisher, Billy Dee Williams",
    plot: "Luke Skywalker, Han Solo, Princess Leia and Chewbacca face attack by the Imperial forces and its AT-AT walkers on the ice planet Hoth. While Han and Leia escape in the Millennium Falcon, Luke travels to Dagobah in search of Yoda. Only with the Jedi master's help will Luke survive when the dark side of the Force beckons him into the ultimate duel with Darth Vader.",
    language: "English",
    country: "USA, UK",
    awards: "Won 1 Oscar. Another 24 wins &amp; 20 nominations.",
    poster:
      "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    ratings: [
      {
        source: "Internet Movie Database",
        value: "8.7/10",
      },
      {
        source: "Rotten Tomatoes",
        value: "94%",
      },
      {
        source: "Metacritic",
        value: "82/100",
      },
    ],
    metascore: "82",
    imdbRating: "8.7",
    imdbVotes: "1,183,029",
    imdbID: "tt0080684",
    type: "movie",
    DVD: "10 Apr 2015",
    boxOffice: "$292,753,960",
    production: "Lucasfilm Ltd.",
    website: "N/A",
  },
  {
    title: "Star Wars: Episode VI - Return of the Jedi",
    year: "1983",
    rated: "PG",
    released: "25 May 1983",
    runtime: "131 min",
    genre: "Action, Adventure, Fantasy, Sci-Fi",
    director: "Richard Marquand",
    writer:
      "Lawrence Kasdan (screenplay by), George Lucas (screenplay by), George Lucas (story by)",
    actors: "Mark Hamill, Harrison Ford, Carrie Fisher, Billy Dee Williams",
    plot: "Luke Skywalker battles horrible Jabba the Hut and cruel Darth Vader to save his comrades in the Rebel Alliance and triumph over the Galactic Empire. Han Solo and Princess Leia reaffirm their love and team with Chewbacca, Lando Calrissian, the Ewoks and the androids C-3PO and R2-D2 to aid in the disruption of the Dark Side and the defeat of the evil emperor.",
    language: "English",
    country: "USA, UK",
    awards: "Nominated for 4 Oscars. Another 22 wins &amp; 16 nominations.",
    poster:
      "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    ratings: [
      {
        source: "Internet Movie Database",
        value: "8.3/10",
      },
      {
        source: "Rotten Tomatoes",
        value: "82%",
      },
      {
        source: "Metacritic",
        value: "58/100",
      },
    ],
    metascore: "58",
    imdbRating: "8.3",
    imdbVotes: "969,573",
    imdbID: "tt0086190",
    type: "movie",
    DVD: "10 Apr 2015",
    boxOffice: "$309,306,177",
    production: "Lucasfilm Ltd.",
    website: "N/A",
  },
  {
    title: "Star Wars: Episode VII - The Force Awakens",
    year: "2015",
    rated: "PG-13",
    released: "18 Dec 2015",
    runtime: "138 min",
    genre: "Action, Adventure, Sci-Fi",
    director: "J.J. Abrams",
    writer:
      "Lawrence Kasdan, J.J. Abrams, Michael Arndt, George Lucas (based on characters created by)",
    actors: "Harrison Ford, Mark Hamill, Carrie Fisher, Adam Driver",
    plot: "30 years after the defeat of Darth Vader and the Empire, Rey, a scavenger from the planet Jakku, finds a BB-8 droid that knows the whereabouts of the long lost Luke Skywalker. Rey, as well as a rogue stormtrooper and two smugglers, are thrown into the middle of a battle between the Resistance and the daunting legions of the First Order.",
    language: "English",
    country: "USA",
    awards: "Nominated for 5 Oscars. Another 62 wins &amp; 131 nominations.",
    poster:
      "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg",
    ratings: [
      {
        source: "Internet Movie Database",
        value: "7.8/10",
      },
      {
        source: "Rotten Tomatoes",
        value: "93%",
      },
      {
        source: "Metacritic",
        value: "80/100",
      },
    ],
    metascore: "80",
    imdbRating: "7.8",
    imdbVotes: "873,891",
    imdbID: "tt2488496",
    type: "movie",
    DVD: "01 Apr 2016",
    boxOffice: "$936,662,225",
    production: "Lucasfilm Ltd., Bad Robot",
    website: "N/A",
  },
  {
    title: "Star Wars: Episode I - The Phantom Menace",
    year: "1999",
    rated: "PG",
    released: "19 May 1999",
    runtime: "136 min",
    genre: "Action, Adventure, Fantasy, Sci-Fi",
    director: "George Lucas",
    writer: "George Lucas",
    actors: "Liam Neeson, Ewan McGregor, Natalie Portman, Jake Lloyd",
    plot: "The evil Trade Federation, led by Nute Gunray is planning to take over the peaceful world of Naboo. Jedi Knights Qui-Gon Jinn and Obi-Wan Kenobi are sent to confront the leaders. But not everything goes to plan. The two Jedi escape, and along with their new Gungan friend, Jar Jar Binks head to Naboo to warn Queen Amidala, but droids have already started to capture Naboo and the Queen is not safe there. Eventually, they land on Tatooine, where they become friends with a young boy known as Anakin Skywalker. Qui-Gon is curious about the boy, and sees a bright future for him. The group must now find a way of getting to Coruscant and to finally solve this trade dispute, but there is someone else hiding in the shadows. Are the Sith really extinct? Is the Queen really who she says she is? And what's so special about this young boy?",
    language: "English, Sanskrit",
    country: "USA",
    awards: "Nominated for 3 Oscars. Another 26 wins &amp; 66 nominations.",
    poster:
      "https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    ratings: [
      {
        source: "Internet Movie Database",
        value: "6.5/10",
      },
      {
        source: "Rotten Tomatoes",
        value: "52%",
      },
      {
        source: "Metacritic",
        value: "51/100",
      },
    ],
    metascore: "51",
    imdbRating: "6.5",
    imdbVotes: "745,203",
    imdbID: "tt0120915",
    type: "movie",
    DVD: "10 Apr 2015",
    boxOffice: "$474,544,677",
    production: "Lucasfilm Ltd.",
    website: "N/A",
  },
  {
    title: "Star Wars: Episode III - Revenge of the Sith",
    year: "2005",
    rated: "PG-13",
    released: "19 May 2005",
    runtime: "140 min",
    genre: "Action, Adventure, Fantasy, Sci-Fi",
    director: "George Lucas",
    writer: "George Lucas",
    actors: "Ewan McGregor, Natalie Portman, Hayden Christensen, Ian McDiarmid",
    plot: "Near the end of the Clone Wars, Darth Sidious has revealed himself and is ready to execute the last part of his plan to rule the galaxy. Sidious is ready for his new apprentice, Darth Vader, to step into action and kill the remaining Jedi. Vader, however, struggles to choose the dark side and save his wife or remain loyal to the Jedi order.",
    language: "English",
    country: "USA",
    awards: "Nominated for 1 Oscar. Another 26 wins &amp; 62 nominations.",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_SX300.jpg",
    ratings: [
      {
        source: "Internet Movie Database",
        value: "7.5/10",
      },
      {
        source: "Rotten Tomatoes",
        value: "80%",
      },
      {
        source: "Metacritic",
        value: "68/100",
      },
    ],
    metascore: "68",
    imdbRating: "7.5",
    imdbVotes: "726,547",
    imdbID: "tt0121766",
    type: "movie",
    DVD: "10 Apr 2015",
    boxOffice: "$380,270,577",
    production: "Lucasfilm Ltd.",
    website: "N/A",
  },
  {
    title: "Star Wars: Episode II - Attack of the Clones",
    year: "2002",
    rated: "PG",
    released: "16 May 2002",
    runtime: "142 min",
    genre: "Action, Adventure, Fantasy, Sci-Fi",
    director: "George Lucas",
    writer:
      "George Lucas (screenplay by), Jonathan Hales (screenplay by), George Lucas (story by)",
    actors:
      "Ewan McGregor, Natalie Portman, Hayden Christensen, Christopher Lee",
    plot: "Ten years after the invasion of Naboo, the Galactic Republic is facing a Separatist movement and the former queen and now Senator PadmÃ© Amidala travels to Coruscant to vote on a project to create an army to help the Jedi to protect the Republic. Upon arrival, she escapes from an attempt to kill her, and Obi-Wan Kenobi and his Padawan Anakin Skywalker are assigned to protect her. They chase the shape-shifter Zam Wessell but she is killed by a poisoned dart before revealing who hired her. The Jedi Council assigns Obi-Wan Kenobi to discover who has tried to kill Amidala and Anakin to protect her in Naboo. Obi-Wan discovers that the dart is from the planet Kamino, and he heads to the remote planet. He finds an army of clones that has been under production for years for the Republic and that the bounty hunter Jango Fett was the matrix for the clones. Meanwhile Anakin and Amidala fall in love with each other, and he has nightmarish visions of his mother. They travel to his home planet, Tatooine, to see his mother, and he discovers that she has been abducted by Tusken Raiders. Anakin finds his mother dying, and he kills all the Tusken tribe, including the women and children. Obi-Wan follows Jango Fett to the planet Geonosis where he discovers who is behind the Separatist movement. He transmits his discoveries to Anakin since he cannot reach the Jedi Council. Who is the leader of the Separatist movement? Will Anakin receive Obi-Wan's message? And will the secret love between Anakin and Amidala succeed?",
    language: "English",
    country: "USA",
    awards: "Nominated for 1 Oscar. Another 19 wins &amp; 64 nominations.",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMDAzM2M0Y2UtZjRmZi00MzVlLTg4MjEtOTE3NzU5ZDVlMTU5XkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg",
    ratings: [
      {
        source: "Internet Movie Database",
        value: "6.5/10",
      },
      {
        source: "Rotten Tomatoes",
        value: "65%",
      },
      {
        source: "Metacritic",
        value: "54/100",
      },
    ],
    metascore: "54",
    imdbRating: "6.5",
    imdbVotes: "655,513",
    imdbID: "tt0121765",
    type: "movie",
    DVD: "10 Apr 2015",
    boxOffice: "$310,676,740",
    production: "Lucasfilm Ltd., Twentieth Century Fox",
    website: "N/A",
  },
  {
    title: "Star Wars: Episode VIII - The Last Jedi",
    year: "2017",
    rated: "PG-13",
    released: "15 Dec 2017",
    runtime: "152 min",
    genre: "Action, Adventure, Fantasy",
    director: "Rian Johnson",
    writer: "Rian Johnson, George Lucas",
    actors: "Daisy Ridley, John Boyega, Mark Hamill",
    plot: "Jedi Master-in-hiding Luke Skywalker unwillingly attempts to guide young hopeful Rey in the ways of the force, while Leia, former princess turned general, attempts to lead what is left of the Resistance away from the ruthless tyrannical grip of the First Order.",
    language: "English",
    country: "United States",
    awards: "Nominated for 4 Oscars. 25 wins &amp; 103 nominations total",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_SX300.jpg",
    ratings: [
      {
        source: "Internet Movie Database",
        value: "7.0/10",
      },
      {
        source: "Rotten Tomatoes",
        value: "90%",
      },
      {
        source: "Metacritic",
        value: "84/100",
      },
    ],
    metascore: "84",
    imdbRating: "7.0",
    imdbVotes: "577,170",
    imdbID: "tt2527336",
    type: "movie",
    DVD: "11 Mar 2018",
    boxOffice: "$620,181,382",
    production: "Lucasfilm Ltd.",
    website: "N/A",
  },
  {
    title: "Star Wars: Episode IX - The Rise of Skywalker",
    year: "2019",
    rated: "PG-13",
    released: "20 Dec 2019",
    runtime: "141 min",
    genre: "Action, Adventure, Fantasy",
    director: "J.J. Abrams",
    writer: "Chris Terrio, J.J. Abrams, Derek Connolly",
    actors: "Daisy Ridley, John Boyega, Oscar Isaac",
    plot: "While the First Order continues to ravage the galaxy, Rey finalizes her training as a Jedi. But danger suddenly rises from the ashes as the evil Emperor Palpatine mysteriously returns from the dead. While working with Finn and Poe Dameron to fulfill a new mission, Rey will not only face Kylo Ren once more, but she will also finally discover the truth about her parents as well as a deadly secret that could determine her future and the fate of the ultimate final showdown that is to come.",
    language: "English",
    country: "United States",
    awards: "Nominated for 3 Oscars. 10 wins &amp; 57 nominations total",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMDljNTQ5ODItZmQwMy00M2ExLTljOTQtZTVjNGE2NTg0NGIxXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_SX300.jpg",
    ratings: [
      {
        source: "Internet Movie Database",
        value: "6.6/10",
      },
      {
        source: "Rotten Tomatoes",
        value: "51%",
      },
      {
        source: "Metacritic",
        value: "53/100",
      },
    ],
    metascore: "53",
    imdbRating: "6.6",
    imdbVotes: "389,997",
    imdbID: "tt2527338",
    type: "movie",
    DVD: "20 Dec 2019",
    boxOffice: "$515,202,542",
    production: "Lucasfilm Ltd., Bad Robot",
    website: "N/A",
  },
  {
    title: "Solo: A Star Wars Story",
    year: "2018",
    rated: "PG-13",
    released: "25 May 2018",
    runtime: "135 min",
    genre: "Action, Adventure, Sci-Fi",
    director: "Ron Howard",
    writer:
      "Jonathan Kasdan, Lawrence Kasdan, George Lucas (based on characters created by)",
    actors: "Alden Ehrenreich, Joonas Suotamo, Woody Harrelson, Emilia Clarke",
    plot: "During an adventure into the criminal underworld, Han Solo meets his future co-pilot Chewbacca and encounters Lando Calrissian years before joining the Rebellion.",
    language: "English",
    country: "USA",
    awards: "Nominated for 1 Oscar. Another 6 wins &amp; 24 nominations.",
    poster:
      "https://m.media-amazon.com/images/M/MV5BOTM2NTI3NTc3Nl5BMl5BanBnXkFtZTgwNzM1OTQyNTM@._V1_SX300.jpg",
    ratings: [
      {
        source: "Internet Movie Database",
        value: "6.9/10",
      },
      {
        source: "Rotten Tomatoes",
        value: "69%",
      },
      {
        source: "Metacritic",
        value: "62/100",
      },
    ],
    metascore: "62",
    imdbRating: "6.9",
    imdbVotes: "303,848",
    imdbID: "tt3778644",
    type: "movie",
    DVD: "14 Sep 2018",
    boxOffice: "$213,767,512",
    production: "Lucasfilm Ltd.",
    website: "N/A",
  },
];

async function main() {
  for (const filme of filmes) {
    const { ratings, ...filmeSemRatings } = filme;

    await prisma.filme.upsert({
      where: { imdbID: filme.imdbID },
      update: {},
      create: {
        ...filmeSemRatings,
        ratings: {
          create: ratings,
        },
      },
    });
  }

  console.log("Filmes inseridos com sucesso!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
