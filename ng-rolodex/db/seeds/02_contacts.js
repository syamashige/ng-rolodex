
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('contacts').del()
    .then(function () {
      // Inserts seed entries
      return knex('contacts').insert([{
  "name": "Clarita Handley",
  "address": "8 Londonderry Way",
  "mobile": "8404370454",
  "work": "6539573228",
  "home": "3426905731",
  "email": "chandley0@geocities.jp",
  "twitter": "chandley0",
  "instagram": "chandley0",
  "github": "chandley0",
  "created_by": 2
}, {
  "name": "Vannie McEntagart",
  "address": "5 Pepper Wood Plaza",
  "mobile": "2034472326",
  "work": "3283195274",
  "home": "3213704639",
  "email": "vmcentagart1@blogtalkradio.com",
  "twitter": "vmcentagart1",
  "instagram": "vmcentagart1",
  "github": "vmcentagart1",
  "created_by": 2
}, {
  "name": "Morissa Mellodey",
  "address": "42 Browning Lane",
  "mobile": "6363834658",
  "work": "2944064271",
  "home": "3908101447",
  "email": "mmellodey2@twitter.com",
  "twitter": "mmellodey2",
  "instagram": "mmellodey2",
  "github": "mmellodey2",
  "created_by": 2
}, {
  "name": "Kerianne Adamovsky",
  "address": "7123 Glendale Terrace",
  "mobile": "7988845193",
  "work": "3009528758",
  "home": "9937788109",
  "email": "kadamovsky3@marriott.com",
  "twitter": "kadamovsky3",
  "instagram": "kadamovsky3",
  "github": "kadamovsky3",
  "created_by": 1
}, {
  "name": "Kayle Coldwell",
  "address": "378 Aberg Avenue",
  "mobile": "3859967251",
  "work": "9547576378",
  "home": "2093651918",
  "email": "kcoldwell4@altervista.org",
  "twitter": "kcoldwell4",
  "instagram": "kcoldwell4",
  "github": "kcoldwell4",
  "created_by": 2
}, {
  "name": "Kay Tailour",
  "address": "05135 Farragut Point",
  "mobile": "6291642539",
  "work": "6783672834",
  "home": "9202111415",
  "email": "ktailour5@youku.com",
  "twitter": "ktailour5",
  "instagram": "ktailour5",
  "github": "ktailour5",
  "created_by": 3
}, {
  "name": "Joletta Hrinishin",
  "address": "5 Morrow Circle",
  "mobile": "4649318241",
  "work": "6123320850",
  "home": "8772952228",
  "email": "jhrinishin6@fda.gov",
  "twitter": "jhrinishin6",
  "instagram": "jhrinishin6",
  "github": "jhrinishin6",
  "created_by": 3
}, {
  "name": "Marta De la Feld",
  "address": "9881 Fulton Plaza",
  "mobile": "1254550680",
  "work": "6976804786",
  "home": "4743618795",
  "email": "mde7@networksolutions.com",
  "twitter": "mde7",
  "instagram": "mde7",
  "github": "mde7",
  "created_by": 3
}, {
  "name": "Westleigh Tedder",
  "address": "3 Bunting Trail",
  "mobile": "2549527290",
  "work": "9547166610",
  "home": "3944128106",
  "email": "wtedder8@dyndns.org",
  "twitter": "wtedder8",
  "instagram": "wtedder8",
  "github": "wtedder8",
  "created_by": 1
}, {
  "name": "Emogene Laycock",
  "address": "89845 David Lane",
  "mobile": "9723579164",
  "work": "9171740756",
  "home": "4162476859",
  "email": "elaycock9@sakura.ne.jp",
  "twitter": "elaycock9",
  "instagram": "elaycock9",
  "github": "elaycock9",
  "created_by": 3
}, {
  "name": "Sasha Colafate",
  "address": "73 Killdeer Parkway",
  "mobile": "1127095677",
  "work": "9798539591",
  "home": "6982283691",
  "email": "scolafatea@nydailynews.com",
  "twitter": "scolafatea",
  "instagram": "scolafatea",
  "github": "scolafatea",
  "created_by": 2
}, {
  "name": "Cathlene Martinello",
  "address": "7 Troy Park",
  "mobile": "6625880249",
  "work": "9482815648",
  "home": "7361724187",
  "email": "cmartinellob@dropbox.com",
  "twitter": "cmartinellob",
  "instagram": "cmartinellob",
  "github": "cmartinellob",
  "created_by": 2
}, {
  "name": "Cora Wedon",
  "address": "12 New Castle Street",
  "mobile": "1375573672",
  "work": "6765453042",
  "home": "2074931041",
  "email": "cwedonc@prweb.com",
  "twitter": "cwedonc",
  "instagram": "cwedonc",
  "github": "cwedonc",
  "created_by": 3
}, {
  "name": "Lauretta Curson",
  "address": "8 Sauthoff Court",
  "mobile": "9816271505",
  "work": "2728773412",
  "home": "1353786479",
  "email": "lcursond@marketwatch.com",
  "twitter": "lcursond",
  "instagram": "lcursond",
  "github": "lcursond",
  "created_by": 2
}, {
  "name": "Malanie Farnsworth",
  "address": "40 Cordelia Crossing",
  "mobile": "3486806744",
  "work": "5412361968",
  "home": "7118748117",
  "email": "mfarnsworthe@imgur.com",
  "twitter": "mfarnsworthe",
  "instagram": "mfarnsworthe",
  "github": "mfarnsworthe",
  "created_by": 2
}, {
  "name": "Sharl Felix",
  "address": "3967 Crowley Center",
  "mobile": "1464765421",
  "work": "3081255242",
  "home": "5972013696",
  "email": "sfelixf@princeton.edu",
  "twitter": "sfelixf",
  "instagram": "sfelixf",
  "github": "sfelixf",
  "created_by": 3
}, {
  "name": "Quint Redborn",
  "address": "6 Mcguire Pass",
  "mobile": "4647093011",
  "work": "8486899416",
  "home": "8969326228",
  "email": "qredborng@engadget.com",
  "twitter": "qredborng",
  "instagram": "qredborng",
  "github": "qredborng",
  "created_by": 1
}, {
  "name": "Maudie Yantsev",
  "address": "661 Badeau Hill",
  "mobile": "6844431774",
  "work": "8774914539",
  "home": "2642597740",
  "email": "myantsevh@biblegateway.com",
  "twitter": "myantsevh",
  "instagram": "myantsevh",
  "github": "myantsevh",
  "created_by": 1
}, {
  "name": "Mady Shuxsmith",
  "address": "259 Del Mar Parkway",
  "mobile": "6832752987",
  "work": "7655555382",
  "home": "2199685800",
  "email": "mshuxsmithi@indiegogo.com",
  "twitter": "mshuxsmithi",
  "instagram": "mshuxsmithi",
  "github": "mshuxsmithi",
  "created_by": 2
}, {
  "name": "Roxanna Karlolczak",
  "address": "75837 Warrior Circle",
  "mobile": "8419284735",
  "work": "6083483888",
  "home": "6446675167",
  "email": "rkarlolczakj@webeden.co.uk",
  "twitter": "rkarlolczakj",
  "instagram": "rkarlolczakj",
  "github": "rkarlolczakj",
  "created_by": 1
}]);
    });
};
