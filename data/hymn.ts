interface HymnTitle {
  en: string;
  sn: string;
  nd: string;
}

interface HymnLyrics {
  en: string;
  sn: string;
  nd: string;
}

interface Hymn {
  id: string;
  number: number;
  title: HymnTitle;
  lyrics: HymnLyrics;
}

// export const hymns: Hymn[] = [
//   {
//     id: "1",
//     number: 1,
//     title: {
//       en: "Amazing Grace",
//       sn: "Nyasha Dzinoshamisa",
//       nd: "Umusa Omangalisayo",
//     },
//     lyrics: {
//       en: "Amazing grace how sweet the sound...",
//       sn: "Nyasha dzinoshamisa dzinondiponesa...",
//       nd: "Umusa omangalisayo wangisindisa...",
//     },
//   },
//   {
//     id: "2",
//     number: 2,
//     title: {
//       en: "Dummy Hymn 2",
//       sn: "Rwiyo RweDummy 2",
//       nd: "Iculo LeDummy 2",
//     },
//     lyrics: {
//       en: "Dummy lyrics for hymn 2.",
//       sn: "Mazwi eDummy e rwiyo 2.",
//       nd: "Amazwi eDummy eculo 2.",
//     },
//   },
//   {
//     id: "3",
//     number: 3,
//     title: {
//       en: "Dummy Hymn 3",
//       sn: "Rwiyo RweDummy 3",
//       nd: "Iculo LeDummy 3",
//     },
//     lyrics: {
//       en: "Dummy lyrics for hymn 3.",
//       sn: "Mazwi eDummy e rwiyo 3.",
//       nd: "Amazwi eDummy eculo 3.",
//     },
//   },
//   {
//     id: "4",
//     number: 4,
//     title: {
//       en: "Dummy Hymn 4",
//       sn: "Rwiyo RweDummy 4",
//       nd: "Iculo LeDummy 4",
//     },
//     lyrics: {
//       en: "Dummy lyrics for hymn 4.",
//       sn: "Mazwi eDummy e rwiyo 4.",
//       nd: "Amazwi eDummy eculo 4.",
//     },
//   },
//   {
//     id: "5",
//     number: 5,
//     title: {
//       en: "Dummy Hymn 5",
//       sn: "Rwiyo RweDummy 5",
//       nd: "Iculo LeDummy 5",
//     },
//     lyrics: {
//       en: "Dummy lyrics for hymn 5.",
//       sn: "Mazwi eDummy e rwiyo 5.",
//       nd: "Amazwi eDummy eculo 5.",
//     },
//   },
//   {
//     id: "6",
//     number: 6,
//     title: {
//       en: "Dummy Hymn 6",
//       sn: "Rwiyo RweDummy 6",
//       nd: "Iculo LeDummy 6",
//     },
//     lyrics: {
//       en: "Dummy lyrics for hymn 6.",
//       sn: "Mazwi eDummy e rwiyo 6.",
//       nd: "Amazwi eDummy eculo 6.",
//     },
//   },
//   {
//     id: "7",
//     number: 7,
//     title: {
//       en: "Dummy Hymn 7",
//       sn: "Rwiyo RweDummy 7",
//       nd: "Iculo LeDummy 7",
//     },
//     lyrics: {
//       en: "Dummy lyrics for hymn 7.",
//       sn: "Mazwi eDummy e rwiyo 7.",
//       nd: "Amazwi eDummy eculo 7.",
//     },
//   },
//   {
//     id: "8",
//     number: 8,
//     title: {
//       en: "Dummy Hymn 8",
//       sn: "Rwiyo RweDummy 8",
//       nd: "Iculo LeDummy 8",
//     },
//     lyrics: {
//       en: "Dummy lyrics for hymn 8.",
//       sn: "Mazwi eDummy e rwiyo 8.",
//       nd: "Amazwi eDummy eculo 8.",
//     },
//   },
//   {
//     id: "9",
//     number: 9,
//     title: {
//       en: "Dummy Hymn 9",
//       sn: "Rwiyo RweDummy 9",
//       nd: "Iculo LeDummy 9",
//     },
//     lyrics: {
//       en: "Dummy lyrics for hymn 9.",
//       sn: "Mazwi eDummy e rwiyo 9.",
//       nd: "Amazwi eDummy eculo 9.",
//     },
//   },
//   {
//     id: "10",
//     number: 10,
//     title: {
//       en: "Dummy Hymn 10",
//       sn: "Rwiyo RweDummy 10",
//       nd: "Iculo LeDummy 10",
//     },
//     lyrics: {
//       en: "Dummy lyrics for hymn 10.",
//       sn: "Mazwi eDummy e rwiyo 10.",
//       nd: "Amazwi eDummy eculo 10.",
//     },
//   },
//   {
//     id: "11",
//     number: 11,
//     title: {
//       en: "Dummy Hymn 11",
//       sn: "Rwiyo RweDummy 11",
//       nd: "Iculo LeDummy 11",
//     },
//     lyrics: {
//       en: "Dummy lyrics for hymn 11.",
//       sn: "Mazwi eDummy e rwiyo 11.",
//       nd: "Amazwi eDummy eculo 11.",
//     },
//   },
//   {
//     id: "12",
//     number: 12,
//     title: {
//       en: "Dummy Hymn 12",
//       sn: "Rwiyo RweDummy 12",
//       nd: "Iculo LeDummy 12",
//     },
//     lyrics: {
//       en: "Dummy lyrics for hymn 12.",
//       sn: "Mazwi eDummy e rwiyo 12.",
//       nd: "Amazwi eDummy eculo 12.",
//     },
//   },
//   {
//     id: "13",
//     number: 13,
//     title: {
//       en: "Dummy Hymn 13",
//       sn: "Rwiyo RweDummy 13",
//       nd: "Iculo LeDummy 13",
//     },
//     lyrics: {
//       en: "Dummy lyrics for hymn 13.",
//       sn: "Mazwi eDummy e rwiyo 13.",
//       nd: "Amazwi eDummy eculo 13.",
//     },
//   },
//   {
//     id: "14",
//     number: 14,
//     title: {
//       en: "Dummy Hymn 14",
//       sn: "Rwiyo RweDummy 14",
//       nd: "Iculo LeDummy 14",
//     },
//     lyrics: {
//       en: "Dummy lyrics for hymn 14.",
//       sn: "Mazwi eDummy e rwiyo 14.",
//       nd: "Amazwi eDummy eculo 14.",
//     },
//   },
//   {
//     id: "15",
//     number: 15,
//     title: {
//       en: "Dummy Hymn 15",
//       sn: "Rwiyo RweDummy 15",
//       nd: "Iculo LeDummy 15",
//     },
//     lyrics: {
//       en: "Dummy lyrics for hymn 15.",
//       sn: "Mazwi eDummy e rwiyo 15.",
//       nd: "Amazwi eDummy eculo 15.",
//     },
//   },
//   {
//     id: "16",
//     number: 16,
//     title: {
//       en: "Dummy Hymn 16",
//       sn: "Rwiyo RweDummy 16",
//       nd: "Iculo LeDummy 16",
//     },
//     lyrics: {
//       en: "Dummy lyrics for hymn 16.",
//       sn: "Mazwi eDummy e rwiyo 16.",
//       nd: "Amazwi eDummy eculo 16.",
//     },
//   },
//   {
//     id: "17",
//     number: 17,
//     title: {
//       en: "Dummy Hymn 17",
//       sn: "Rwiyo RweDummy 17",
//       nd: "Iculo LeDummy 17",
//     },
//     lyrics: {
//       en: "Dummy lyrics for hymn 17.",
//       sn: "Mazwi eDummy e rwiyo 17.",
//       nd: "Amazwi eDummy eculo 17.",
//     },
//   },
//   {
//     id: "18",
//     number: 18,
//     title: {
//       en: "Dummy Hymn 18",
//       sn: "Rwiyo RweDummy 18",
//       nd: "Iculo LeDummy 18",
//     },
//     lyrics: {
//       en: "Dummy lyrics for hymn 18.",
//       sn: "Mazwi eDummy e rwiyo 18.",
//       nd: "Amazwi eDummy eculo 18.",
//     },
//   },
//   {
//     id: "19",
//     number: 19,
//     title: {
//       en: "Dummy Hymn 19",
//       sn: "Rwiyo RweDummy 19",
//       nd: "Iculo LeDummy 19",
//     },
//     lyrics: {
//       en: "Dummy lyrics for hymn 19.",
//       sn: "Mazwi eDummy e rwiyo 19.",
//       nd: "Amazwi eDummy eculo 19.",
//     },
//   },
//   {
//     id: "20",
//     number: 20,
//     title: {
//       en: "Dummy Hymn 20",
//       sn: "Rwiyo RweDummy 20",
//       nd: "Iculo LeDummy 20",
//     },
//     lyrics: {
//       en: "Dummy lyrics for hymn 20.",
//       sn: "Mazwi eDummy e rwiyo 20.",
//       nd: "Amazwi eDummy eculo 20.",
//     },
//   },
//   {
//     id: "21",
//     number: 21,
//     title: {
//       en: "Dummy Hymn 21",
//       sn: "Rwiyo RweDummy 21",
//       nd: "Iculo LeDummy 21",
//     },
//     lyrics: {
//       en: "Dummy lyrics for hymn 21.",
//       sn: "Mazwi eDummy e rwiyo 21.",
//       nd: "Amazwi eDummy eculo 21.",
//     },
//   },
//   {
//     id: "22",
//     number: 22,
//     title: {
//       en: "Dummy Hymn 22",
//       sn: "Rwiyo RweDummy 22",
//       nd: "Iculo LeDummy 22",
//     },
//     lyrics: {
//       en: "Dummy lyrics for hymn 22.",
//       sn: "Mazwi eDummy e rwiyo 22.",
//       nd: "Amazwi eDummy eculo 22.",
//     },
//   },
//   {
//     id: "23",
//     number: 23,
//     title: {
//       en: "Dummy Hymn 23",
//       sn: "Rwiyo RweDummy 23",
//       nd: "Iculo LeDummy 23",
//     },
//     lyrics: {
//       en: "Dummy lyrics for hymn 23.",
//       sn: "Mazwi eDummy e rwiyo 23.",
//       nd: "Amazwi eDummy eculo 23.",
//     },
//   },
//   {
//     id: "24",
//     number: 24,
//     title: {
//       en: "Dummy Hymn 24",
//       sn: "Rwiyo RweDummy 24",
//       nd: "Iculo LeDummy 24",
//     },
//     lyrics: {
//       en: "Dummy lyrics for hymn 24.",
//       sn: "Mazwi eDummy e rwiyo 24.",
//       nd: "Amazwi eDummy eculo 24.",
//     },
//   },
//   {
//     id: "25",
//     number: 25,
//     title: {
//       en: "Dummy Hymn 25",
//       sn: "Rwiyo RweDummy 25",
//       nd: "Iculo LeDummy 25",
//     },
//     lyrics: {
//       en: "Dummy lyrics for hymn 25.",
//       sn: "Mazwi eDummy e rwiyo 25.",
//       nd: "Amazwi eDummy eculo 25.",
//     },
//   },
//   {
//     id: "26",
//     number: 26,
//     title: {
//       en: "Dummy Hymn 26",
//       sn: "Rwiyo RweDummy 26",
//       nd: "Iculo LeDummy 26",
//     },
//     lyrics: {
//       en: "Dummy lyrics for hymn 26.",
//       sn: "Mazwi eDummy e rwiyo 26.",
//       nd: "Amazwi eDummy eculo 26.",
//     },
//   },
//   {
//     id: "27",
//     number: 27,
//     title: {
//       en: "Dummy Hymn 27",
//       sn: "Rwiyo RweDummy 27",
//       nd: "Iculo LeDummy 27",
//     },
//     lyrics: {
//       en: "Dummy lyrics for hymn 27.",
//       sn: "Mazwi eDummy e rwiyo 27.",
//       nd: "Amazwi eDummy eculo 27.",
//     },
//   },
//   {
//     id: "28",
//     number: 28,
//     title: {
//       en: "Dummy Hymn 28",
//       sn: "Rwiyo RweDummy 28",
//       nd: "Iculo LeDummy 28",
//     },
//     lyrics: {
//       en: "Dummy lyrics for hymn 28.",
//       sn: "Mazwi eDummy e rwiyo 28.",
//       nd: "Amazwi eDummy eculo 28.",
//     },
//   },
//   {
//     id: "29",
//     number: 29,
//     title: {
//       en: "Dummy Hymn 29",
//       sn: "Rwiyo RweDummy 29",
//       nd: "Iculo LeDummy 29",
//     },
//     lyrics: {
//       en: "Dummy lyrics for hymn 29.",
//       sn: "Mazwi eDummy e rwiyo 29.",
//       nd: "Amazwi eDummy eculo 29.",
//     },
//   },
//   {
//     id: "30",
//     number: 30,
//     title: {
//       en: "Dummy Hymn 30",
//       sn: "Rwiyo RweDummy 30",
//       nd: "Iculo LeDummy 30",
//     },
//     lyrics: {
//       en: "Dummy lyrics for hymn 30.",
//       sn: "Mazwi eDummy e rwiyo 30.",
//       nd: "Amazwi eDummy eculo 30.",
//     },
//   },
//   {
//     id: "31",
//     number: 31,
//     title: {
//       en: "Dummy Hymn 31",
//       sn: "Rwiyo RweDummy 31",
//       nd: "Iculo LeDummy 31",
//     },
//     lyrics: {
//       en: "Dummy lyrics for hymn 31.",
//       sn: "Mazwi eDummy e rwiyo 31.",
//       nd: "Amazwi eDummy eculo 31.",
//     },
//   },
//   {
//     id: "32",
//     number: 32,
//     title: {
//       en: "Dummy Hymn 32",
//       sn: "Rwiyo RweDummy 32",
//       nd: "Iculo LeDummy 32",
//     },
//     lyrics: {
//       en: "Dummy lyrics for hymn 32.",
//       sn: "Mazwi eDummy e rwiyo 32.",
//       nd: "Amazwi eDummy eculo 32.",
//     },
//   },
//   {
//     id: "33",
//     number: 33,
//     title: {
//       en: "Dummy Hymn 33",
//       sn: "Rwiyo RweDummy 33",
//       nd: "Iculo LeDummy 33",
//     },
//     lyrics: {
//       en: "Dummy lyrics for hymn 33.",
//       sn: "Mazwi eDummy e rwiyo 33.",
//       nd: "Amazwi eDummy eculo 33.",
//     },
//   },
//   {
//     id: "34",
//     number: 34,
//     title: {
//       en: "Dummy Hymn 34",
//       sn: "Rwiyo RweDummy 34",
//       nd: "Iculo LeDummy 34",
//     },
//     lyrics: {
//       en: "Dummy lyrics for hymn 34.",
//       sn: "Mazwi eDummy e rwiyo 34.",
//       nd: "Amazwi eDummy eculo 34.",
//     },
//   },
//   {
//     id: "35",
//     number: 35,
//     title: {
//       en: "Dummy Hymn 35",
//       sn: "Rwiyo RweDummy 35",
//       nd: "Iculo LeDummy 35",
//     },
//     lyrics: {
//       en: "Dummy lyrics for hymn 35.",
//       sn: "Mazwi eDummy e rwiyo 35.",
//       nd: "Amazwi eDummy eculo 35.",
//     },
//   },
//   {
//     id: "36",
//     number: 36,
//     title: {
//       en: "Dummy Hymn 36",
//       sn: "Rwiyo RweDummy 36",
//       nd: "Iculo LeDummy 36",
//     },
//     lyrics: {
//       en: "Dummy lyrics for hymn 36.",
//       sn: "Mazwi eDummy e rwiyo 36.",
//       nd: "Amazwi eDummy eculo 36.",
//     },
//   },
//   {
//     id: "37",
//     number: 37,
//     title: {
//       en: "Dummy Hymn 37",
//       sn: "Rwiyo RweDummy 37",
//       nd: "Iculo LeDummy 37",
//     },
//     lyrics: {
//       en: "Dummy lyrics for hymn 37.",
//       sn: "Mazwi eDummy e rwiyo 37.",
//       nd: "Amazwi eDummy eculo 37.",
//     },
//   },
//   {
//     id: "38",
//     number: 38,
//     title: {
//       en: "Dummy Hymn 38",
//       sn: "Rwiyo RweDummy 38",
//       nd: "Iculo LeDummy 38",
//     },
//     lyrics: {
//       en: "Dummy lyrics for hymn 38.",
//       sn: "Mazwi eDummy e rwiyo 38.",
//       nd: "Amazwi eDummy eculo 38.",
//     },
//   },
//   {
//     id: "39",
//     number: 39,
//     title: {
//       en: "Dummy Hymn 39",
//       sn: "Rwiyo RweDummy 39",
//       nd: "Iculo LeDummy 39",
//     },
//     lyrics: {
//       en: "Dummy lyrics for hymn 39.",
//       sn: "Mazwi eDummy e rwiyo 39.",
//       nd: "Amazwi eDummy eculo 39.",
//     },
//   },
//   {
//     id: "40",
//     number: 40,
//     title: {
//       en: "Dummy Hymn 40",
//       sn: "Rwiyo RweDummy 40",
//       nd: "Iculo LeDummy 40",
//     },
//     lyrics: {
//       en: "Dummy lyrics for hymn 40.",
//       sn: "Mazwi eDummy e rwiyo 40.",
//       nd: "Amazwi eDummy eculo 40.",
//     },
//   },
//   {
//     id: "41",
//     number: 41,
//     title: {
//       en: "Dummy Hymn 41",
//       sn: "Rwiyo RweDummy 41",
//       nd: "Iculo LeDummy 41",
//     },
//     lyrics: {
//       en: "Dummy lyrics for hymn 41.",
//       sn: "Mazwi eDummy e rwiyo 41.",
//       nd: "Amazwi eDummy eculo 41.",
//     },
//   },
//   {
//     id: "42",
//     number: 42,
//     title: {
//       en: "Dummy Hymn 42",
//       sn: "Rwiyo RweDummy 42",
//       nd: "Iculo LeDummy 42",
//     },
//     lyrics: {
//       en: "Dummy lyrics for hymn 42.",
//       sn: "Mazwi eDummy e rwiyo 42.",
//       nd: "Amazwi eDummy eculo 42.",
//     },
//   },
//   {
//     id: "43",
//     number: 43,
//     title: {
//       en: "Dummy Hymn 43",
//       sn: "Rwiyo RweDummy 43",
//       nd: "Iculo LeDummy 43",
//     },
//     lyrics: {
//       en: "Dummy lyrics for hymn 43.",
//       sn: "Mazwi eDummy e rwiyo 43.",
//       nd: "Amazwi eDummy eculo 43.",
//     },
//   },
//   {
//     id: "44",
//     number: 44,
//     title: {
//       en: "Dummy Hymn 44",
//       sn: "Rwiyo RweDummy 44",
//       nd: "Iculo LeDummy 44",
//     },
//     lyrics: {
//       en: "Dummy lyrics for hymn 44.",
//       sn: "Mazwi eDummy e rwiyo 44.",
//       nd: "Amazwi eDummy eculo 44.",
//     },
//   },
//   {
//     id: "45",
//     number: 45,
//     title: {
//       en: "Dummy Hymn 45",
//       sn: "Rwiyo RweDummy 45",
//       nd: "Iculo LeDummy 45",
//     },
//     lyrics: {
//       en: "Dummy lyrics for hymn 45.",
//       sn: "Mazwi eDummy e rwiyo 45.",
//       nd: "Amazwi eDummy eculo 45.",
//     },
//   },
//   {
//     id: "46",
//     number: 46,
//     title: {
//       en: "Dummy Hymn 46",
//       sn: "Rwiyo RweDummy 46",
//       nd: "Iculo LeDummy 46",
//     },
//     lyrics: {
//       en: "Dummy lyrics for hymn 46.",
//       sn: "Mazwi eDummy e rwiyo 46.",
//       nd: "Amazwi eDummy eculo 46.",
//     },
//   },
//   {
//     id: "47",
//     number: 47,
//     title: {
//       en: "Dummy Hymn 47",
//       sn: "Rwiyo RweDummy 47",
//       nd: "Iculo LeDummy 47",
//     },
//     lyrics: {
//       en: "Dummy lyrics for hymn 47.",
//       sn: "Mazwi eDummy e rwiyo 47.",
//       nd: "Amazwi eDummy eculo 47.",
//     },
//   },
//   {
//     id: "48",
//     number: 48,
//     title: {
//       en: "Dummy Hymn 48",
//       sn: "Rwiyo RweDummy 48",
//       nd: "Iculo LeDummy 48",
//     },
//     lyrics: {
//       en: "Dummy lyrics for hymn 48.",
//       sn: "Mazwi eDummy e rwiyo 48.",
//       nd: "Amazwi eDummy eculo 48.",
//     },
//   },
//   {
//     id: "49",
//     number: 49,
//     title: {
//       en: "Dummy Hymn 49",
//       sn: "Rwiyo RweDummy 49",
//       nd: "Iculo LeDummy 49",
//     },
//     lyrics: {
//       en: "Dummy lyrics for hymn 49.",
//       sn: "Mazwi eDummy e rwiyo 49.",
//       nd: "Amazwi eDummy eculo 49.",
//     },
//   },
//   {
//     id: "50",
//     number: 50,
//     title: {
//       en: "Dummy Hymn 50",
//       sn: "Rwiyo RweDummy 50",
//       nd: "Iculo LeDummy 50",
//     },
//     lyrics: {
//       en: "Dummy lyrics for hymn 50.",
//       sn: "Mazwi eDummy e rwiyo 50.",
//       nd: "Amazwi eDummy eculo 50.",
//     },
//   },
//   {
//     id: "51",
//     number: 51,
//     title: {
//       en: "Dummy Hymn 51",
//       sn: "Rwiyo RweDummy 51",
//       nd: "Iculo LeDummy 51",
//     },
//     lyrics: {
//       en: "Dummy lyrics for hymn 51.",
//       sn: "Mazwi eDummy e rwiyo 51.",
//       nd: "Amazwi eDummy eculo 51.",
//     },
//   },
// ];

export const hymns: Hymn[] = [

  {
    id: "1",
    number: 1,
    title: {
      en: "God The Father",
      sn: "MWARI BABA",
      nd: "WENA UNGULIZWI",
    },
    lyrics: {
      en: "O Lord, You are the Word that created the light...",
      sn: "1. Imi muri izwi \n Rakasika mwenje \n Nayo mvonga mvonga \n Ikave rufaro.\n2. Nomukutambudzwa, \n Makamutsurudza \n Mwoyo yavatendi, \n Vakakushumirai.\n3. Izwi rakavanda, \n Tokuona zvino \n Napatinofamba, \n Kristu, ari pano.\n4. Togara maari, \n Iye wokudenga; \n Ngatimutsvagei, \n Dakara tamuda.\n5. O, Ishe, mupenyu, \n Mwoyo yodudzira \n Runako rwenyu, 'She, \n Nokubwinya kwenyu.",
      nd: "1. Wena ungulizwi \n Owadalumhlaba \n Waleth űkukhanya \n Waleth Injabulo.\n2. Lasekuhlutshweni \n Waba vu-selela \n Bakusebenzela \n Abakholwa kuwe.\n3. Izw élisithele \n Sikubona manje, \n Endleleni yethu \n UKrist Ükhona la.\n4. Kasihlale kuye \n Yena ophezulu, \n Asim funisise \n Simthande njalo-ke.\n5. ! Thixo ophilayo \n Sizakufakaza \n Lokukhanya kwakho \n Lenkazimlo yakho.",
    },
  },
  {
    id: "2",
    number: 2,
    title: {
      en: "You Are My Peace",
      sn: "IMI MURI RUDEKARO",
      nd: "WENA UYIKUTHULA",
    },
    lyrics: {
      en: "You are the peace hidden in love...",
      sn: "1. Imi muri rudekaro \n Rwakavanzika murudo; \n Chipotero kuvavengi \n Ndofadzwa kana muneni.\n2. Muzvitadzo, mukunyadzwa, \n Ndovanzwa nemi, Jesu, 'She.\n3. Zita renyu, ruponiso, \n Rondifadza pakudenga; \n Rounza simba, rugare, \n Norudo rusingapere.\n4. Muzita renyu ndowana \n Kuregererwa, noutsvene.\n5. Jesu muri zvose zvangu \n Pazororo, mukurwadzawa, \n Murapi wemwoyo wangu; \n Mukurwa, ndichazorodzwa.",
      nd: "1. Wena uyikuthula \n Okwembeswe luthando, \n Uluthango ezitheni \n Ngothokoza unami.\n2. Ezonweni, ngihlutshwa \n Ngifihlwe nguwe, Nkosi.\n3. Igama, lusindiso, \n Liyangithokozisa, \n Liletha ukuthula \n Lothando lwaphakade.\n4. Ngalo leli iGama \n Sixolelwa izono.\n5. Jesu uyikho konke, \n Phakathi kwezinhlupho \n Welapha inhliziyo \n Ungiphumuze njalo.",
    },
  },
  {
    id: "3",
    number: 3,
    title: {
      en: "Praise the Lord",
      sn: "RUMBIDZAI ISHE",
      nd: "DUMISANI INKOSI",
    },
    lyrics: {
      en: "Praise the Lord, all nations...",
      sn: "1. Rumbidzai Ishe, imi mose, \n Muimbe nemufaro; \n Kudzai zita rake ritsvene, \n Iye Mambo wedu.\n2. Ngoni dzake ihuru chose, \n Dzinogara narinhi; \n Chokwadi chake hachiperi, \n Rumbidzai Jehovah.",
      nd: "1. Dumisani iNkosi lonke, \n Hlabelelani ngenjabulo; \n Bongani ibizo lakhe elingcwele, \n Yena iNkosi yethu.\n2. Umusa wakhe umkhulu kakhulu, \n Uhlala kuze kube phakade; \n Iqiniso lakhe kalipheli, \n Dumisani uJehova.",
    },
  },
  {
    id: "4",
    number: 4,
    title: {
      en: "Holy, Holy, Holy",
      sn: "MUTSVENENE, MUTSVENENE",
      nd: "ONGCWELE, ONGCWELE, ONGCWELE",
    },
    lyrics: {
      en: "Holy, Holy, Holy, Lord God Almighty...",
      sn: "1. Mutsvenene, mutsvenene, mutsvenene! \n Ishe Mwari Samasimba; \n Mangwanani tichakuimbira rumbidzo; \n Mutsvenene, mutsvenene, mutsvenene!\n2. Mutsvenene, mutsvenene, mutsvenene! \n Vatsvene vanofara; \n Vanopfugama pamberi penyu narinhi; \n Imi muri Mwari, mupenyu narinhi.\n3. Mutsvenene, mutsvenene, mutsvenene! \n Kunyange rima riripo; \n Kunyange vanhu vasingaoni mbiri; \n Imi moga muri mutsvenene chose.\n4. Mutsvenene, mutsvenene, mutsvenene! \n Ishe Mwari Samasimba; \n Mabasa enyu ose achakurumbidzai; \n Mutsvenene, mutsvenene, mutsvenene!",
      nd: "1. Ongcwele, ongcwele, ongcwele! \n Nkosi Thixo ulamandla wonke; \n Ekseni sizahlabelela udumo lwakho; \n Ongcwele, ongcwele, ongcwele!\n2. Ongcwele, ongcwele, ongcwele! \n Abangcwele bayathokoza; \n Bakhothamela wena kuze kube phakade; \n Wena unguThixo ophilayo njalo.\n3. Ongcwele, ongcwele, ongcwele! \n Lanxa kumnyama khona; \n Lanxa abantu bengayiboni inkazimlo; \n Wena wedwa ungcwele kakhulu.\n4. Ongcwele, ongcwele, ongcwele! \n Nkosi Thixo ulamandla wonke; \n Imisebenzi yakho yonke izakudumisa; \n Ongcwele, ongcwele, ongcwele!",
    },
  },
  {
    id: "5",
    number: 5,
    title: {
      en: "All People That On Earth Do Dwell",
      sn: "VANHU VOSE PASI PANO",
      nd: "BANTU BONKE EMHLABENI",
    },
    lyrics: {
      en: "All people that on earth do dwell...",
      sn: "1. Vanhu vose pasi pano, \n Imbirai Ishe Jehovah; \n Mushumirei nemufaro, \n Pamberi pake muimbe.\n2. Ishe ndiye Mwari wedu, \n Ndiye akatisikawo; \n Tiri vanhu vake chose, \n Tiri makwayana ake.\n3. Pinzai muduwo raJehovah, \n Nerumbidzo mumwoyo; \n Kudzai zita rake chose, \n Nokuti Iye akanaka.\n4. Ngoni dzaShe hadziperi, \n Chokwadi chake chiripo; \n Chichagara mazuva ose, \n Chisingaperi narinhi.",
      nd: "1. Bantu bonke emhlabeni, \n Hlabelelani eNkosini; \n Mkhonzeni ngenjabulo, \n Hlabelelani phambi kwakhe.\n2. INkosi inguThixo wethu, \n Yiyo eyasidala thina; \n Singabantu bayo impela, \n Singamazinyane ayo.\n3. Ngenani emasangweni eNkosi, \n Ngokubonga ezinhliziyweni; \n Dumisani ibizo layo kakhulu, \n Ngoba yona ilungile.\n4. Umusa weNkosi awupheli, \n Iqiniso layo likhona; \n Lizahlala izinsuku zonke, \n Lingapheli kuze kube phakade.",
    },
  },
  {
    id: "6",
    number: 6,
    title: {
      en: "Great Is Thy Faithfulness",
      sn: "KUTENDEKA KWENYU KUKURU",
      nd: "UKUQUBELA KWAKHO KUKHULU",
    },
    lyrics: {
      en: "Great is Thy faithfulness, O God my Father...",
      sn: "1. Kutendeka kwenyu kukuru, Baba, \n Hakuna mumvuri wekushanduka; \n Tsitsi dzenyu hadzimboperi chose, \n Sezvo makange muri, muchava.\n[Chorus]\nKutendeka kwenyu! Kutendeka kwenyu! \n Mazuva ose ndinoona ngoni; \n Zvose zvandinoda makandipa, \n Kutendeka kwenyu kukuru kwandiri.\n2. Zhizha, chirimo, nechando, nematsutso, \n Zuva nemwedzi nenyeredzi dzose; \n Zvinopupura pamwe nechisiko, \n Ngoni dzenyu nerudo rwenyu.\n3. Ruregerero nerugare rwenyu, \n Kuvapo kwenyu kunonditungamira; \n Simba ranhasi netariro yamangwana, \n Makomborero anobva kwamuri.",
      nd: "1. Ukuqubela kwakho kukhulu, Baba, \n Akulathunzi lokuguquka; \n Isihawu sakho asipheli impela, \n Njengoba wawunjalo, uzakuba njalo.\n[Chorus]\nUkuqubela kwakho! Ukuqubela kwakho! \n Zonke izinsuku ngibona umusa; \n Konke engikudingayo wangipha khona, \n Ukuqubela kwakho kukhulu kimi.\n2. Ihlobo, ikwindla, ubusika, lentwasahlobo, \n Ilanga, inyanga, lezinkanyezi zonke; \n Ziyafakaza kanye lendalo yonke, \n Ngomusa wakho lothando lwakho.\n3. Ukuthethelelwa lokuthula kwakho, \n Ukuba khona kwakho kuyangikhokhela; \n Amandla anamuhla lethemba lakusasa, \n Izibusiso ezivela kuwe.",
    },
  },
  {
    id: "7",
    number: 7,
    title: {
      en: "To God Be the Glory",
      sn: "MWARI NGAAKUDZWE",
      nd: "AKUDUMISWE UTHIXO",
    },
    lyrics: {
      en: "To God be the glory, great things He has done...",
      sn: "1. Mwari ngaakudzwe nebasa rake, \n Norudo wakatipa mwana wake; \n Wakafira kudzikinura zvivi, \n Nokuzarura suo reupenyu.\n[Chorus]\nKudza 'She! Kudza 'She! \n Nyika ngaimunzwe; \n Kudza 'She! Kudza 'She! \n Vanhu ngavafare; \n Uyai kuna Baba nokuna Jesu, \n Kudzai nezvakaitirwa isu.\n2. Ruregerero rutsvene rweropa, \n Kumutendi chivimbiso chaMwari; \n Mutadzi mukuru akangotenda, \n Owana ruregerero rwaJesu.\n3. Wakatidzidzisa zvinhu zvikuru, \n Norufaro rwedu muna Jesu, 'She; \n Rufaro rwedu ruchave rukuru, \n Kana toona Jesu mumakore.",
      nd: "1. Akudumiswe uThixo emsebenzini wakhe, \n Ngothando wasinika indodana yakhe; \n Ofel' ukusindisa izono, \n Wavula umnyango wokuphila.\n[Chorus]\nDumisa iNkosi! Dumisa iNkosi! \n Umhlaba awumuzwe; \n Dumisa iNkosi! Dumisa iNkosi! \n Abantu abajabule; \n Woza kuBaba loJesu, \n Dumisani okwenzelwe thina.\n2. Ukuthethelelwa okungcwele ngegazi, \n Isithembiso sikaThixo okholwayo; \n Isoni esikhulu nxa sikholwa, \n Sithol' ukuthethelelwa nguJesu.\n3. Wasifundisa izinto ezinkulu, \n Lanxa silenjabulo kuJesu, Nkosi; \n Injabulo yethu izakuba nkulu, \n Nxa simbona uJesu emafini.",
    },
  },
  {
    id: "8",
    number: 8,
    title: {
      en: "Praise My Soul, the King of Heaven",
      sn: "RUMBIDZA, MWEYA WANGU, MAMBO WEDENGA",
      nd: "DUMISA, MPHEFUMLO WAMI, INKOSI YASEZULWINI",
    },
    lyrics: {
      en: "Praise, my soul, the King of heaven...",
      sn: "1. Rumbidza, mweya wangu, Mambo wedenga, \n Uuye nemupiro pamberi pake; \n Wadzvuturwa, waponeswa, urumbe rumbidzo, \n Hareruya! Hareruya! Rumbidza Mambo wepachena.\n2. Rumbidzai Ishe nenyasha dzaakatipa, \n Kunyika inotambura nenhamo; \n Rumbidzai Iye mazuva ose nengoni dzake, \n Hareruya! Hareruya! Ane ngoni narinhi.\n3. Sezvo mufudzi anotarisira vanhu vake, \n Ishe anotichengeta kubva kumhandu; \n Anoziva upenyu hwedu noutsvene hwedenga, \n Hareruya! Hareruya! Kudzai Iye mazuva ose.\n4. Ngirozi, batsirai pakuimba rumbidzo, \n Imi munoona Mambo nechiso chake; \n Zuva nemwedzi nevanhu vose pasi pano, \n Hareruya! Hareruya! Kudzai Mwari wedenga.",
      nd: "1. Dumisa, mphefumlo wami, iNkosi yasezulwini, \n Woza lomnikelo phambi kwayo; \n Usindisiwe, ukhululiwe, hlabelela udumo, \n Haleluya! Haleluya! Dumis' iNkosi emhlophe.\n2. Dumisani iNkosi ngomusa wasinika wona, \n Kulelizwe elihluphekayo; \n Dumisani yona zonke izinsuku ngomusa wayo, \n Haleluya! Haleluya! Isihawu sayo sihla njalo.\n3. Njengoba umalusi enakekela abantu bakhe, \n INkosi iyasigcina ezitheni; \n Iyakwazi ukuphila kwethu lobungcwele bezulu, \n Haleluya! Haleluya! Dumisani yona njalo.\n4. Zingilosi, sizani ekuhlabeleleni udumo, \n Nina elibona iNkosi ngobuso bayo; \n Langa lenyanga labantu bonke emhlabeni, \n Haleluya! Haleluya! Dumisani uThixo wezulu.",
    },
  },
  {
    id: "9",
    number: 9,
    title: {
      en: "Immortal, Invisible",
      sn: "ISINGAONEKWE, ISINGAPERI",
      nd: "ENGABONAKALIYO, ENGAPHELIYO",
    },
    lyrics: {
      en: "Immortal, invisible, God only wise...",
      sn: "1. Isingaperi, isingaonekwe, \n Mwari moga munoziva zvose; \n Muziedza chenyu chisingabatike, \n Kudzai Mambo wedenga narinhi.\n2. Haisanduki sezvo makomo arimo, \n Ngoni dzenyu nerudo rwenyu; \n Chiratidzo chenyu chinopenya chose, \n Kupfuura rima rechivi chenyu.\n3. Munopa upenyu kune zvose zvipenyu, \n Muri mambo wechisiko chose; \n Tinozvininipisa pamberi penyu, \n Kudzai Mwari mazuva ose.\n4. Mbiri huru kune zita renyu, Ishe, \n Ngirozi dzinokudza chiso chenyu; \n Isu pasi pano tichakuimbirai, \n Isingaperi, isingaonekwe.",
      nd: "1. Engapheliyo, engabonakaliyo, \n Thixo wedwa owazi konke; \n Ekukhanyeni kwakho okungafinyelelekiyo, \n Dumis' iNkosi yasezulwini njalo.\n2. Ayiguquki njengezintaba ezikhona, \n Umusa wakho lothando lwakho; \n Isibonakaliso sakho siyakhanya kakhulu, \n Sedlula ubumnyama bezono.\n3. Upha ukuphila kukho konke okuphilayo, \n UyiNkosi yendalo yonke; \n Siyazithoba phambi kwakho, \n Dumisani uThixo zonke izinsuku.\n4. Inkazimlo enkulu egameni lakho, Nkosi, \n Izingilosi zidumisa ubuso bakho; \n Thina emhlabeni sizakuhlabelela, \n Engapheliyo, engabonakaliyo.",
    },
  },
  {
    id: "10",
    number: 10,
    title: {
      en: "O Worship the King",
      sn: "NAMATA MAVO WEDENGA",
      nd: "KHONZA INKOSI YASEZULWINI",
    },
    lyrics: {
      en: "O worship the King, all glorious above...",
      sn: "1. Namata Mambo, wembiri kudenga, \n Imbai nengoni dzake nerudo; \n Ndiye muchengeti, ndiye mupi wedu, \n Naye tichagara mazuva ose.\n2. Rumbidzai simba rake, nemwero wake, \n Chiedza chakapfeka kupenya chose; \n Shoko rake rine simba murenje, \n Anodzora madutu nemvura yose.\n3. Ngoni dzenyu, Ishe, hadzimboperi, \n Dzinonaya kunge mvura murenje; \n Dzinobuda muzvitubu zvenyu, \n Dzinopa upenyu mazuva ose.\n4. Isu vana venyu, tine utera, \n Tinovimba nemi norudo rwenyu; \n Tsitsi dzenyu ihuru chose kwatiri, \n Muponisi wedu, nenyasha dzenyu.",
      nd: "1. Khonza iNkosi, yenkazimlo ezulwini, \n Hlabelela ngomusa wayo lothando; \n Nguyena umlondolozi, ungumniki wethu, \n Sizahlala layo zonke izinsuku.\n2. Dumisani amandla ayo, lenkazimlo yayo, \n Ukukhanya akugqokileyo kuyakhanya; \n Ilizwi layo lalamandla ogwadule, \n Ibamba izivunguvungu lamanzi wonke.\n3. Umusa wakho, Nkosi, awupheli, \n Unana njengemvula ogwadule; \n Uphuma emithonjeni yakho, \n Upha ukuphila zonke izinsuku.\n4. Thina bantwana bakho, sibuthakathaka, \n Sithembe wena lothando lwakho; \n Isihawu sakho sikhulu kakhulu kithi, \n Msindisi wethu, ngomusa wakho.",
    },
  },
  {
    id: "11",
    number: 11,
    title: {
      en: "Lead Us, Heavenly Father",
      sn: "TIDZIDZISEI BABA WEDENGA",
      nd: "SIKHOKHELE BABA WASEZULWINI",
    },
    lyrics: {
      en: "Lead us, heavenly Father, lead us...",
      sn: "1. Tidzidzisei Baba wedenga, \n Munyika ino yerenje; \n Mutichengetere nengoni dzenyu, \n Munatse mwoyo yedu chose.\n2. Muponisi wedu, mutichengete, \n Mudzivirire muedzo yose; \n Mutinyaradze nemanzwi enyu, \n Kana mwoyo yedu yarwadziwa.\n3. Mweya Mutsvene, mutitungamire, \n Muzarure maziso edu; \n Tiratidzei nzira yeupenyu, \n Dakara tinosvika kudenga.",
      nd: "1. Sikhokhele Baba wasezulwini, \n Kulelizwe logwadule; \n Sigcinele ngomusa wakho, \n Uhlanze izinhliziyo zethu.\n2. Msindisi wethu, usigcine, \n Usivikele ekulingweni konke; \n Siduduze ngamazwi akho, \n Nxa izinhliziyo zethu zibuhlungu.\n3. Moya Ongcwele, usikhokhele, \n Uvule amehlo ethu; \n Sivezele indlela yokuphila, \n Sikuze siyofika ezulwini.",
    },
  },
  {
    id: "12",
    number: 12,
    title: {
      en: "Joyful, Joyful, We Adore Thee",
      sn: "FARAI, FARAI, TINOKUMADZAI",
      nd: "THOKOZANI, SIYAKUKHONZA",
    },
    lyrics: {
      en: "Joyful, joyful, we adore Thee, God of glory, Lord of love...",
      sn: "1. Farai, farai, tinokunadzai, \n Mwari werubwinyo nerudo; \n Mwoyo yedu inozaruka, \n Kunge maruva kune zuva.\n2. Bvisai rima riri mumwoyo, \n Bvisai kutya nerwadziwo; \n Mupi werufaro rweupenyu, \n Mutizadze nechiedza.\n3. Mabasa enyu ose anokudza, \n Zvinhu zvose pasi nemudenga; \n Ngirozi nevanhu ngavaimbe, \n Rumbidzo kune zita renyu.\n4. Muri mupi wezvose zvakanaka, \n Isu tiri vana venyu chose; \n Mutidzidzise kuda vamwe, \n Sezvo Imi muchitida.",
      nd: "1. Thokozani, siyakukhonza, \n Thixo wenkazimlo lothando; \n Inhliziyo zethu ziyavuleka, \n Njengezimbali elangeni.\n2. Susa ubumnyama obusenhliziyweni, \n Susa ukwesaba lobuhlungu; \n Mniki wenjabulo yokuphila, \n Sigcwalise ngokukhanya.\n3. Imisebenzi yakho yonke iyadumisa, \n Izinto zonke phansi lasezulwini; \n Izingilosi labantu abahlabelele, \n Udumo egameni lakho.\n4. Ungumniki wakho konke okuhle, \n Thina singabantwana bakho; \n Sifundise ukuthanda abanye, \n Njengoba wena usithanda.",
    },
  },
  {
    id: "13",
    number: 13,
    title: {
      en: "This Is My Father's World",
      sn: "INO INYIKA YABABA VANGU",
      nd: "LUMHLABA NGUKABABA",
    },
    lyrics: {
      en: "This is my Father's world, and to my listening ears...",
      sn: "1. Ino inyika yaBaba vangu, \n Ndinonzwa mumanzeve angu; \n Zvinhu zvose zvinotaura, \n Nezvemabasa aMwari.\n2. Ino inyika yaBaba vangu, \n Shiri dzinoyimba mbiri; \n Maruva anotiyeuchidza, \n Nezverunako rwaBaba.\n3. Ino inyika yaBaba vangu, \n Handingafi ndakarwadziwa; \n Kunyange rima riripo pano, \n Ishe ndiye anotonga.",
      nd: "1. Lumhlaba ngukaBaba, \n Ngizwa ezindlebeni zami; \n Izinto zonke ziyakhuluma, \n Ngemisebenzi kaThixo.\n2. Lumhlaba ngukaBaba, \n Izinyoni zihlabelela inkazimlo; \n Izimbali ziyasikhumbuza, \n Ngobuhle bukaBaba.\n3. Lumhlaba ngukaBaba, \n Angeke ngafa ngabuhlungu; \n Lanxa kumnyama lapha, \n INkosi yiyo ebusayo.",
    },
  },
  {
    id: "14",
    number: 14,
    title: {
      en: "O God, Our Help in Ages Past",
      sn: "MWARI, MUYAMURI WEDU",
      nd: "NKOSI, NSADISI YETHU",
    },
    lyrics: {
      en: "O God, our help in ages past, our hope for years to come...",
      sn: "1. Mwari, muyamuri wedu \n Makore akapfuura; \n Tariro yemakore anouya, \n Chipotero chedu.\n2. Mumumvuri wechigaro chenyu \n Vatsvene vakachengetwa; \n Ruoko rwenyu rwakakwana, \n Dziviriro yedu.\n3. Makomo asati asikwa, \n Kana nyika yose ino; \n Imi makange muri Mwari, \n Nokusingaperi-peri.\n4. Makore ane chiuru chose, \n Pamberi penyu sezuva; \n Serima ranhasi rino, \n Rinopera mangwanani.\n5. Mwari, muyamuri wedu \n Makore akapfuura; \n Mutitungamire munyika, \n Dakara tinosvika kudenga.",
      nd: "1. Nkosi, nsadisi yethu \n Eminyakeni edluleyo; \n Ithemba leminyaka ezayo, \n Isiphephelo sethu.\n2. Ngaphansi komthunzi wakho \n Abangcwele bagciniwe; \n Isandla sakho sanele, \n Isivikelo sethu.\n3. Izintaba zingakadalwa, \n Loba wonke lumhlaba; \n Wena wawunguThixo, \n Kuze kube phakade.\n4. Iminyaka eyinkulungwane, \n Phambi kwakho injengelanga; \n Njengobumnyama banamuhla, \n Obuphela ekuseni.\n5. Nkosi, nsadisi yethu \n Eminyakeni edluleyo; \n Sikhokhele emhlabeni, \n Sikuze siyofika ezulwini.",
    },
  },
  {
    id: "15",
    number: 15,
    title: {
      en: "Praise to the Lord, the Almighty",
      sn: "RUMBIDZAI ISHE SAMASIMBA",
      nd: "DUMISANI INKOSI ELAMANDLA",
    },
    lyrics: {
      en: "Praise to the Lord, the Almighty, the King of creation...",
      sn: "1. Rumbidzai Ishe Samasimba, Mambo wechisiko! \n Mweya wangu, rumbidza Iye, ndiyo poniso yako; \n Uyai mose, munamate nemufaro, \n Rumbidzai Iye mazuva ose.\n2. Rumbidzai Ishe, anotonga zvose nesimba, \n Anotichengeta nemapapiro ake; \n Makamboona here zvamakange muchida, \n Sezvawakakupai nengoni?\n3. Rumbidzai Ishe, anotikomborera pabasa, \n Anotinzwira tsitsi, anotiitira rudo; \n Funga zvakare zvamaitirwa naMwari, \n Mune simba guru renyasha.\n4. Rumbidzai Ishe, zvinhu zvose ngazvimukudze! \n Vose vapenyu ngavaimbe mbiri yake; \n Ameni ngaidaro, kune mwoyo yevatendi, \n Ngatinamatei Mambo narinhi.",
      nd: "1. Dumisani iNkosi elamandla wonke, iNkosi yendalo! \n Mphefumlo wami, mdumise, uyinsindiso yakho; \n Wozani lonke, khonzani ngenjabulo, \n Mdumiseni zonke izinsuku.\n2. Dumisani iNkosi, ebusa konke ngamandla, \n Esigcine ngamaphiko ayo; \n Wake wakubona yini okufunayo, \n Njengoba ekuphe khona ngomusa?\n3. Dumisani iNkosi, esibusisa emisebenzini, \n Esizwela isihawu, isenzela uthando; \n Cabanga futhi okwenzelwe nguThixo, \n Ulamandla amakhulu omusa.\n4. Dumisani iNkosi, konke akudunyiswe ngayo! \n Bonke abaphilayo abahlabelele inkazimlo yayo; \n Amen akube njalo, enhliziyweni zabakholwayo, \n Asikhonze iNkosi njalo.",
    },
  },
  {
    id: "16",
    number: 16,
    title: {
      en: "Blessed Assurance",
      sn: "RUPOREGERERO RWATENDEKA",
      nd: "ISIQINISEKISO ESIBUSELELEKILEYO",
    },
    lyrics: {
      en: "Blessed assurance, Jesus is mine! Oh, what a foretaste of glory divine!...",
      sn: "1. Ruponiso rutsvene muna Jesu, \n Ndinoziva kuti ndiri wake; \n Mudyi wenhaka yeponiso, \n Ndakaberekwa muna Mweya.\n[Chorus]\nIyoyi nyaya, nerumbo rwangu, \n Kurumbidza 'She mazuva ose; (Kaviri)\n2. Kuzvipa kwose kune mufaro, \n Ndingaonekwa nemubwinyo; \n Ngirozi dzinobva kudenga, \n Dzinondizivisa ngoni dzaShe.\n3. Kuzvipa kwose, ndine zororo, \n Ndakachengetwa muponisi; \n Ndichatarira mazuva ose, \n Ndichizadzwa norudo rwaShe.",
      nd: "1. Usindiso oluhle kuJesu, \n Ngiyazi ukuthi ngingowakhe; \n Indlalifa yosindiso, \n Ngizelwe emoyeni.\n[Chorus]\nNantu udaba, lengoma yami, \n Ukudumisa iNkosi njalo; (Kaviri)\n2. Ukuzinikela kulonjabul' enkulu, \n Ngibonwa ngenkazimlo; \n Izingilosi ezivela ezulwini, \n Zingilethela umusa weNkosi.\n3. Ukuzinikela, ngilokuphumula, \n Ngigciniwe emsindisini; \n Ngizakhangela izinsuku zonke, \n Ngigcwaliswe luthando lwakhe.",
    },
  },
  {
    id: "17",
    number: 17,
    title: {
      en: "The Old Rugged Cross",
      sn: "CHIPAMBARE CHEKARE",
      nd: "ISIPHAMBANO ESIDALA",
    },
    lyrics: {
      en: "On a hill far away stood an old rugged cross...",
      sn: "1. Pachikomo kure, paiva nechipambare, \n Chiratidzo chenhamo nenyadzi; \n Ndinoda chipambare pakafira Jesu, \n Kuti adzikinure vose.\n[Chorus]\nNdichabata chipambare icho, \n Dakara ndinozorora; \n Ndichabata chipambare icho, \n Chinozochinjwa nekorona.\n2. Chipambare icho, chinoonekwa nevanhu, \n Chinoonekwa nechiso chinopfachuka; \n Gwayana raMwari, rakasvika ipapo, \n Rakafira isu vatadzi.\n3. Muchipambare icho, mune ropa raJesu, \n Rakayerera pamwoyo pangu; \n Rakandinatsa chose mune zvivi zvangu, \n Ndinoona rudo rwaMwari.\n4. Ndichatendeka chose kune chipambare, \n Ndichaparidza rudo rwaShe; \n Rimwe zuva kudenga achandishevedza, \n Kundipa mufaro narinhi.",
      nd: "1. Egqumeni elikude, kwakulesiphambano, \n Isibonakaliso senhlupho lamahloni; \n Ngiyasithanda isiphambano lapho afela khona uJesu, \n Ukuba asindise bonke.\n[Chorus]\nNgizabambelela kulesisiphambano, \n Sikuze ngiyophumula; \n Ngizabambelela kulesisiphambano, \n Esizaguqulwa sibe ngumqele.\n2. Isiphambano leso, sibonwa ngabantu, \n Sibonwa ngobuso obudangeleyo; \n Imvana kaThixo, yafika lapho, \n Ifela thina zoni.\n3. Kulesisiphambano, kulegazi likaJesu, \n Elagelezela enhliziyweni yami; \n Langihlanza impela ezonweni zami, \n Ngibona uthando lukaThixo.\n4. Ngizakwethemba impela esiphambanweni, \n Ngizashumayela uthando lweNkosi; \n Ngelinye ilanga ezulwini izangibiza, \n Inginike injabulo njalo.",
    },
  },
  {
    id: "18",
    number: 18,
    title: {
      en: "When I Survey the Wondrous Cross",
      sn: "KANA NDICHIONA CHIPAMBARE",
      nd: "NXA NGIBONA ISIPHAMBANO",
    },
    lyrics: {
      en: "When I survey the wondrous cross on which the Prince of glory died...",
      sn: "1. Kana ndichiona chipambare, \n Pakafira Mambo wembiri; \n Pfuma yangu ndinoishora, \n Nekuzvikudza kwangu kwose.\n2. Musarega ndichizvikudza, \n Kunze kwerufu rwaJesu She; \n Zvose zvinhu zvandinoda, \n Ndinozvipa kune ropa rake.\n3. Onai musoro nemaoko, \n Nayo netsoka dzake chose; \n Rudo nenhamo zvasangana, \n Patende rutsvene rwaMwari.\n4. Kana nyika yaive yangu, \n Yaive chipo chiduku chose; \n Rudo rwenyu rwakakura, \n Runoda upenyu nemwoyo.",
      nd: "1. Nxa ngibona isiphambano, \n Lapho afela iNkosi; \n Inotho yami ngiyayidelela, \n Lokuzigqaja kwami konke.\n2. Ungangivumeli ngizigqaje, \n Ngaphandle kokufa kukaJesu; \n Izinto zonke engizithandayo, \n Ngizinikela egazini lakhe.\n3. Bonani ikhanda lezandla, \n Lazo lezinyawo zakhe zonke; \n Uthando lenhlupho kuhlangene, \n Endaweni engcwele kaThixo.\n4. Lanxa umhlaba ubungowami, \n Ubungaba yisipho esincane; \n Uthando lwakho lukhulu, \n Lufuna ukuphila lenhliziyo.",
    },
  },
  {
    id: "19",
    number: 19,
    title: {
      en: "Love Divine, All Loves Excelling",
      sn: "RUDO RWAKAKURISA",
      nd: "UTHANDO OLUPHEZULU",
    },
    lyrics: {
      en: "Love divine, all loves excelling, joy of heaven, to earth come down...",
      sn: "1. Rudo rwakakurisa, \n Rwakabva kudenga; \n Gadzirai mumwoyo medu, \n Ngoni dzenyu dzigaremo; \n Jesu Imi mune ngoni, \n Rudo rwenyu haruzungunuke; \n Mutishanyire nengoni, \n Mumwoyo inotya Imi.\n2. Ishe, mutipe mweya wenyu, \n Mumwoyo inotambura; \n Tose tinoda rugare, \n Runobva kwamuri moga; \n Bvisai kuda kwezvitadzo, \n Tive noutsvene hwenyu; \n Mutichengetere narinhi, \n Tipinde mudenga renyu.\n3. Muri simba reupenyu, \n Munotipa zororo; \n Ngatigashire rudo rwenyu, \n Mazuva ose tiri pano; \n Tinoda kukurumbidzai, \n Nemimhanzi inobva kudenga; \n Tikudzei nengoni dzenyu, \n Nokusingaperi-peri.\n4. Pedzisai chisiko chenyu, \n Tive vatsvene muna Imi; \n Tione ruponiso rwenyu, \n Rwakatendeka kwatiri; \n Tichashandurwa mumbiri, \n Dakara tinosvika kudenga; \n Tichaisa ngowani dzedu, \n Pamberi pechigaro chenyu.",
      nd: "1. Uthando oluphezulu, \n Oluvela ezulwini; \n Yakha ezinhliziyweni zethu, \n Umusa wakho uhlale khona; \n Jesu wena ulesihawu, \n Uthando lwakho aluzamazami; \n Sivakashele ngomusa wakho, \n Ezinhliziyweni ezikwesabayo.\n2. Nkosi, siphe umoya wakho, \n Ezinhliziyweni ezihluphekayo; \n Sonke sifuna ukuthula, \n Okuvela kuwe wedwa; \n Susa ukufisa izono, \n Sibe lobungcwele bakho; \n Sigcinele kuze kube phakade, \n Singene ezulwini lakho.\n3. Ungamandla okuphila, \n Usipha ukuphumula; \n Kasamukele uthando lwakho, \n Zonke izinsuku silapha; \n Sifuna ukukudumisa, \n Ngomculo ovela ezulwini; \n Siphakamise ngomusa wakho, \n Kuze kube phakade.\n4. Qedisa indalo yakho, \n Sibe bangcwele kuwe; \n Sibone usindiso lwakho, \n Oluqubelekileyo kithi; \n Sizaguqulwa enkazimlweni, \n Sikuze siyofika ezulwini; \n Sizabeka imiqele yethu, \n Phambi kwesihlalo sakho.",
    },
  },
  {
    id: "20",
    number: 20,
    title: {
      en: "Amazing Grace",
      sn: "NGONI DZAKASHAMISA",
      nd: "UMUSA OYIMANGALISO",
    },
    lyrics: {
      en: "Amazing grace! how sweet the sound that saved a wretch like me...",
      sn: "1. Ngoni dzakashamisa chose, \n Dzakaponesa mutadzi! \n Ndakarasika, ndawanikwa, \n Ndakapofumara, ndoona.\n2. Ngoni idzo dzakandichengeta, \n Kudzamara ndatenda She; \n Ngoni dzenyu ihuru chose, \n Dzakandiperekedza pano.\n3. Pane miedzo nenhamo zhinji, \n Ndakasvika nemi Ishe; \n Ngoni dzenyu dzakandivimbisa, \n Dzichandipinza kudenga.\n4. Kana tave kudenga renyu, \n Tichaimba mbiri yaShe; \n Mazuva ose ekudenga, \n Tichakurumbidzai narinhi.",
      nd: "1. Umusa oyimangaliso, \n Osindise isoni! \n Ngangilahlekile, sengitholakele, \n Ngangiphofu, sengiyabona.\n2. Umusa lowo wangigcina, \n Sikuze ngakholwa eNkosini; \n Umusa wakho mkhulu kakhulu, \n Wangiphelezela lapha.\n3. Lapho kulentando lenhlupho ezinengi, \n Ngafika nawe Nkosi; \n Umusa wakho wangithembisa, \n Uzangingenisa ezulwini.\n4. Nxa sesisezulwini lakho, \n Sizahlabelela inkazimlo yeNkosi; \n Zonke izinsuku zasezulwini, \n Sizakudumisa njalo.",
    },
  },

  {
    id: "21",
    number: 21,
    title: {
      en: "O God, Our Help in Ages Past",
      sn: "MWARI, MUYAMURI WEDU",
      nd: "NKOSI, NSADISI YETHU",
    },
    lyrics: {
      en: "O God, our help in ages past...",
      sn: "1. Mwari, muyamuri wedu \n Makore akapfuura; \n Tariro yemakore anouya, \n Chipotero chedu.\n2. Mumumvuri wechigaro chenyu \n Vatsvene vakachengetwa; \n Ruoko rwenyu rwakakwana, \n Dziviriro yedu.",
      nd: "1. Nkosi, nsadisi yethu \n Eminyakeni edluleyo; \n Ithemba leminyaka ezayo, \n Isiphephelo sethu.\n2. Ngaphansi komthunzi wakho \n Abangcwele bagciniwe; \n Isandla sakho sanele, \n Isivikelo sethu.",
    },
  },
  {
    id: "22",
    number: 22,
    title: {
      en: "Tell Me the Old, Old Story",
      sn: "NDIUDZEI NYAYA YEKARE",
      nd: "NGITSHELE INDABA ENDALA",
    },
    lyrics: {
      en: "Tell me the old, old story of unseen things above...",
      sn: "1. Ndiudzei nyaya yekare \n Nezvezvinhu zvekudenga; \n NezvaJesu nembiri yake, \n Norudo rwake rwakakura...",
      nd: "1. Ngitshele indaba endala \n Ngezinto zasezulwini; \n NgaJesu lenkazimlo yakhe, \n Luthando lwakhe olukhulu...",
    },
  },
  {
    id: "23",
    number: 23,
    title: {
      en: "Joyful, Joyful, We Adore Thee",
      sn: "FARAI, FARAI, TINOKUMADZAI",
      nd: "THOKOZANI, SIYAKUKHONZA",
    },
    lyrics: {
      en: "Joyful, joyful, we adore Thee...",
      sn: "1. Farai, farai, tinokunadzai, \nMwari werubwinyo nerudo; \nMwoyo yedu inozaruka, \nKunge maruva kune zuva...",
      nd: "1. Thokozani, siyakukhonza, \nThixo wenkazimlo lothando; \nInhliziyo zethu ziyavuleka, \nNjengezimbali elangeni...",
    },
  },
  {
    id: "24",
    number: 24,
    title: {
      en: "Praise to the Lord, the Almighty",
      sn: "RUMBIDZAI ISHE SAMASIMBA",
      nd: "DUMISANI INKOSI ELAMANDLA",
    },
    lyrics: {
      en: "Praise to the Lord, the Almighty...",
      sn: "1. Rumbidzai Ishe Samasimba, Mambo wechisiko! \n Mweya wangu, rumbidza Iye, ndiyo poniso yako...",
      nd: "1. Dumisani iNkosi elamandla, iNkosi yendalo! \n Mphefumlo wami, mdumise, uyinsindiso yakho...",
    },
  },
  {
    id: "25",
    number: 25,
    title: {
      en: "Love Divine, All Loves Excelling",
      sn: "RUDO RWAKAKURISA",
      nd: "UTHANDO OLUPHEZULU",
    },
    lyrics: {
      en: "Love divine, all loves excelling...",
      sn: "1. Rudo rwakakurisa, \n Rwakabva kudenga; \n Gadzirai mumwoyo medu, \n Ngoni dzenyu dzigaremo...",
      nd: "1. Uthando oluphezulu, \n Oluvela ezulwini; \n Yakha ezinhliziyweni zethu, \n Umusa wakho uhlale khona...",
    },
  },
  {
    id: "26",
    number: 26,
    title: {
      en: "When I Survey the Wondrous Cross",
      sn: "KANA NDICHIONA CHIPAMBARE",
      nd: "NXA NGIBONA ISIPHAMBANO",
    },
    lyrics: {
      en: "When I survey the wondrous cross...",
      sn: "1. Kana ndichiona chipambare, \n Pakafira Mambo wembiri; \n Pfuma yangu ndinoishora...",
      nd: "1. Nxa ngibona isiphambano, \n Lapho afela iNkosi; \n Inotho yami ngiyayidelela...",
    },
  },
  {
    id: "27",
    number: 27,
    title: {
      en: "I Surrender All",
      sn: "NDINOZVIRAURIRA ZVOSE",
      nd: "NGINIKELA KONKE",
    },
    lyrics: {
      en: "All to Jesus I surrender...",
      sn: "1. Kuna Jesu ndinozvipa, \n Ndinozviraurira zvose; \n Ndichamuda nekumuvimba...",
      nd: "1. KuJesu ngiyazinikela, \n Nginikela konke kuye; \n Ngizakumthanda ngimthembe...",
    },
  },
  {
    id: "28",
    number: 28,
    title: {
      en: "Amazing Grace",
      sn: "NGONI DZAKASHAMISA",
      nd: "UMUSA OYIMANGALISO",
    },
    lyrics: {
      en: "Amazing grace! how sweet the sound...",
      sn: "1. Ngoni dzakashamisa chose, \n Dzakaponesa mutadzi! \n Ndakarasika, ndawanikwa...",
      nd: "1. Umusa oyimangaliso, \n Osindise isoni! \n Ngangilahlekile, sengitholakele...",
    },
  },
  {
    id: "29",
    number: 29,
    title: {
      en: "The Solid Rock",
      sn: "DOMBO RAKAGADZIKWA",
      nd: "IDWALA ELIQINILEVO",
    },
    lyrics: {
      en: "My hope is built on nothing less...",
      sn: "1. Tariro yangu iri pana \n Ropa raJesu noutsvene; \n Handivimbi nechimwe chinhu...",
      nd: "1. Ithemba lami lisekelwe \n Egazini likaJesu; \n Angithembi okunye...",
    },
  },
  {
    id: "30",
    number: 30,
    title: {
      en: "Just As I Am",
      sn: "SEZVO NDARI",
      nd: "NJENGOKUBA NGILONJALO",
    },
    lyrics: {
      en: "Just as I am, without one plea...",
      sn: "1. Sezvo ndari, ndisina shoko, \n Kunze kwekuti ropa renyu; \n Rakadeurirwa ini mutadzi...",
      nd: "1. Njengokuba ngilonjalo, \n Ngingenalo elinye izwi; \n Kodwa igazi lakho...",
    },
  },
  {
    id: "31",
    number: 31,
    title: {
      en: "Abide With Me",
      sn: "GARAI NENI",
      nd: "HLALA LAMI",
    },
    lyrics: {
      en: "Abide with me; fast falls the eventide...",
      sn: "1. Garai neni, zuva radoka, \n Rima rasvika, Ishe garai; \n Kana vamwe vachindisiya ini, \n Imi mune simba, Ishe garai.\n2. Upenyu hwedu hunopera chose, \n Mafaro enyika anoperawo; \n Ndinoona kuparara kwezvose, \n Imi musanduke, Ishe garai.\n3. Ndinokudai mazuva ose, \n Ndiani achandikunda pasina Imi? \n Ndiani achandichengeta munhamo? \n Mumufaro nenhambo, Ishe garai.\n4. Handityi vavengi kana muri neni, \n Nenhamo dzose hadzindiremeri; \n Rufu nekuviga hazvina simba, \n Ndichakunda chose, Ishe garai.\n5. Batidzai mwenje mumeso angu, \n Kupfuura rima, munditungamire; \n Chiedza chenyu ngachipenye kwandiri, \n Muupenyu nerufu, Ishe garai.",
      nd: "1. Hlala lami, nelanga selitshonile, \n Kumnyama, Nkosi, hlala lami; \n Nxa abanye bengitshiya, \n Wena ulamandla, Nkosi hlala lami.\n2. Ukuphila kwethu kuyaphela, \n Intokozo zomhlaba ziyaphela; \n Ngibona konke kubhubha, \n Wena ungaguquki, Nkosi hlala lami.\n3. Ngikufuna zonke izinsuku, \n Ngubani ongangingcina ngaphandle kwakho? \n Ngubani ozangiphakamisa enhluphekweni? \n Ekuthokozeni lenhlanhleni, Nkosi hlala lami.\n4. Angesabi izitha nxa u lami, \n Inhlupho zonke kazingisindi; \n Ukufa lethuna kalamanzi, \n Ngizanqoba konke, Nkosi hlala lami.\n5. Khanyisa isibane emehlweni ami, \n Ngikhokele emnyameni; \n Ukukhanya kwakho akukhanye kimi, \n Empilweni lasekufeni, Nkosi hlala lami.",
    },
  },
  {
    id: "32",
    number: 32,
    title: {
      en: "How Sweet the Name of Jesus Sounds",
      sn: "ZITA RAJESU RINOTAPIRA",
      nd: "LIZWAKALA NGOKUMNANDI",
    },
    lyrics: {
      en: "How sweet the name of Jesus sounds...",
      sn: "1. Zita raJesu rinotapira \n Munzeve dzemutendi; \n Rinopodza mwoyo unorwadza, \n Rinobvisa kutya kwose.\n2. Rinomutsa mweya wakafa, \n Rinonyaradza mwoyo; \n Rinopa mufaro kuvane nzara, \n Rinopa zororo chairo.\n3. Zita iri inhamba yedu, \n Nhowo nenzvimbo yokuvanda; \n Dura rine upfumi hwose, \n Hwakachengetwa nenyasha.\n4. Jesu, mufudzi nehamama, \n Mupirisita nemambo wangu; \n Upenyu, nzira, neshoko rangu, \n Gamuchirai rumbidzo yangu.\n5. Rudo rwangu rwuna utera, \n Pfungwa dzangu hadzina simba; \n Asi kana ndoona rudo rwenyu, \n Ndichakurumbidzai narinhi.",
      nd: "1. Lizwakala ngokumnandi \n ‘Gama likaJesu \n Kokholway’ososizini \n Lisus’ukwesaba\n2. Liphilisa umphefumlo \n Lipha ukuthula \n Liy’sinkwa kolambileyo \n Liphumuz’odiniweyo.\n3. ‘Gama leli liyisihlangu \n Lenqaba yokucatsha \n Liyisipala somusa \n Sokuphila kwami.\n4. Jesu Malusi loMngane \n Mphristi lanyi Nkosi \n Mpilo, Ndlela loMkhokheli \n Yamukel’udumo lwami.\n5. Ngibuthakathaka manje \n Ngiyahluleka namuhla \n Kodwa nxa ngikubona \n Ngizakudumisa njalo.",
    },
  },
  {
    id: "33",
    number: 33,
    title: {
      en: "To God Be the Glory",
      sn: "MWARI NGAAKUDZWE",
      nd: "AKUDUMISWE UTHIXO",
    },
    lyrics: {
      en: "To God be the glory, great things He has done...",
      sn: "1. Mwari ngaakudzwe nebasa rake, \n Norudo wakatipa mwana wake; \n Wakafira kudzikinura zvivi, \n Nokuzarura suo reupenyu.\n[Chorus]\nKudza 'She! Kudza 'She! \n Nyika ngaimunzwe; \n Kudza 'She! Kudza 'She! \n Vanhu ngavafare; \n Uyai kuna Baba nokuna Jesu, \n Kudzai nezvakaitirwa isu.\n2. Ruregerero rutsvene rweropa, \n Kumutendi chivimbiso chaMwari; \n Mutadzi mukuru akangotenda, \n Owana ruregerero rwaJesu.\n3. Wakatidzidzisa zvinhu zvikuru, \n Norufaro rwedu muna Jesu, 'She; \n Rufaro rwedu ruchave rukuru, \n Kana toona Jesu mumakore.",
      nd: "1. Akudumiswe uThixo emsebenzini wakhe, \n Ngothando wasinika indodana yakhe; \n Ofel' ukusindisa izono, \n Wavula umnyango wokuphila.\n[Chorus]\nDumisa iNkosi! Dumisa iNkosi! \n Umhlaba awumuzwe; \n Dumisa iNkosi! Dumisa iNkosi! \n Abantu abajabule; \n Woza kuBaba loJesu, \n Dumisani okwenzelwe thina.\n2. Ukuthethelelwa okungcwele ngegazi, \n Isithembiso sikaThixo okholwayo; \n Isoni esikhulu nxa sikholwa, \n Sithol' ukuthethelelwa nguJesu.\n3. Wasifundisa izinto ezinkulu, \n Lanxa silenjabulo kuJesu, Nkosi; \n Injabulo yethu izakuba nkulu, \n Nxa simbona uJesu emafini.",
    },
  },
  {
    id: "34",
    number: 34,
    title: {
      en: "Holy Spirit, Faithful Guide",
      sn: "MWEYA MUTSVENE, MUTUNGAMIRI",
      nd: "MOYA ONGCWELE, MKHOKHELI",
    },
    lyrics: {
      en: "Holy Spirit, faithful Guide...",
      sn: "1. Mweya Mutsvene, Mutungamiri, \n Tibatei noruvoko rwenyu; \n Mutifambise murenje rino, \n Titungamirei mazuva ose.\n2. Kana taneta nemitoro yedu, \n Mutinyaradze nemanzwi enyu; \n Mutibvise mune rima rose, \n Titungamirei mazuva ose.\n3. Kana rufu rwuchinge rwasvika, \n Mutivandudze muminamato; \n Mutipinze mune rugare rwenyu, \n Titungamirei mazuva ose.",
      nd: "1. Moya Ongcwele, Mkhokheli, \n Sibambe ngesandla sakho; \n Sihambise kulelihlane, \n Sikhokhele zonke izinsuku.\n2. Nxa sidiniwe yimitwalo yethu, \n Siduduze ngamazwi akho; \n Susa thina emnyameni wonke, \n Sikhokhele zonke izinsuku.\n3. Nxa sekufika ukufa thina, \n Sivuselele emikhulekweni; \n Singenise ekuthuleni kwakho, \n Sikhokhele zonke izinsuku.",
    },
  },
  {
    id: "35",
    number: 35,
    title: {
      en: "Nearer, My God, to Thee",
      sn: "PEDLO LASWE, NKOSI",
      nd: "PEDLO LASWE, NKOSI",
    },
    lyrics: {
      en: "Nearer, my God, to Thee, nearer to Thee...",
      sn: "1. Pedlo laswe, Nkosi, pedlo lawe; \n Na nxa ku luhlupheko lami; \n Nxa ngi semhlabeni, ngi ngezwa wena, \n Pedlo laswe, Nkosi, pedlo lawe.\n2. Nxa ngi hamba phansi kwemthunzi, \n Lapho ku mnyama emehlweni; \n Ngi be ne nkalipho ne nthemba lami, \n Pedlo laswe, Nkosi, pedlo lawe.\n3. Nxa amaphupho ami e ku funa, \n Lapho ngi lele ebusuku; \n Ngize kuwe, Nkosi, ngi kukhonze, \n Pedlo laswe, Nkosi, pedlo lawe.\n4. Nxa ngi se mnyango we khaya lami, \n Lapho ngi bona ubuso bakho; \n Ngi hlabelele ngi jabule kuwe, \n Pedlo laswe, Nkosi, pedlo lawe.",
      nd: "1. Pedlo laswe, Nkosi, pedlo lawe; \n Na nxa ku luhlupheko lami; \n Nxa ngi semhlabeni, ngi ngezwa wena, \n Pedlo laswe, Nkosi, pedlo lawe.\n2. Nxa ngi hamba phansi kwemthunzi, \n Lapho ku mnyama emehlweni; \n Ngi be ne nkalipho ne nthemba lami, \n Pedlo laswe, Nkosi, pedlo lawe.\n3. Nxa amaphupho ami e ku funa, \n Lapho ngi lele ebusuku; \n Ngize kuwe, Nkosi, ngi kukhonze, \n Pedlo laswe, Nkosi, pedlo lawe.\n4. Nxa ngi se mnyango we khaya lami, \n Lapho ngi bona ubuso bakho; \n Ngi hlabelele ngi jabule kuwe, \n Pedlo laswe, Nkosi, pedlo lawe.",
    },
  },
  {
    id: "36",
    number: 36,
    title: {
      en: "The Lord's My Shepherd",
      sn: "ISHE NDIYE MUFUDZI WANGU",
      nd: "INKOSI YALUSI LWAMI",
    },
    lyrics: {
      en: "The Lord's my shepherd, I'll not want...",
      sn: "1. Ishe ndiye mufudzi wangu, \n Handingashayi chinhu; \n Anondivandudza mumafuro, \n Nemvura inozorodza.\n2. Anodzosa mweya wangu chose, \n Anondifambisa munzira; \n Idzo nzira dzekururama, \n Nokuda kwezita rake.\n3. Kunyange ndofamba mumumvuri \n Werufu, handityi rima; \n Nokuti Imi muneni, Ishe, \n Netsvimbo yenyu rudo.\n4. Munondigadzirira tafura \n Pakati pevamhandu vangu; \n Musoro wangu makauzora, \n Mukombe wangu unopfachuka.\n5. Kunaka nengoni dzenyu chose \n Zvichanditevera narinhi; \n Ndichagara mumba maJehovah, \n Nokusingaperi-peri.",
      nd: "1. INkosi yalus' lami, \n Angiyikuswela lutho; \n Ingilalisa emadlongeni aluhlaza, \n Ingiholela emanzini okuphumula.\n2. Ivuselela umphefumulo wami, \n Ingihola ezindleleni zokulunga; \n Ngenxa yebizo layo, \n Ingikhokhele njalo.\n3. Lanxa ngihamba emthunzini \n Wokufa, angesabi okubi; \n Ngoba wena u lami, Nkosi, \n Intonga yakho labasebenzi bakho bayangiduduza.\n4. Ungilungisela itafula \n Ebusweni bezitha zami; \n Ugcobise ikhanda lami ngamafutha, \n Indebe yami iyachichima.\n5. Impela ubuhle lomusa \n Kuzangilandela zonke izinsuku; \n Ngizahlala endlini yeNkosi, \n Kuze kube phakade.",
    },
  },
  {
    id: "37",
    number: 37,
    title: {
      en: "Stand Up, Stand Up for Jesus",
      sn: "MIRAI, MIRAI KUNA JESU",
      nd: "SUKUMANI, SUKUMEL' UJESU",
    },
    lyrics: {
      en: "Stand up, stand up for Jesus, ye soldiers of the cross...",
      sn: "1. Mirai, mirai kuna Jesu, \n Mauto echipambare; \n Simudzai mureza wake, \n Usambokundwa nemhandu; \n Mukundi achitungamira, \n Dakara apedze hondo; \n Vavengi vose vachaparadzwa, \n Kristu achazova Mambo.\n2. Mirai, mirai kuna Jesu, \n Inzwai hwamanda yake; \n Endai mukurwa kukuru, \n Muzuva ranhasi rino; \n Kunyange vavengi vazhinji, \n Musambotya simba ravo; \n Kurumidzai kune dambudzo, \n Mukunde simba remhandu.\n3. Mirai, mirai kuna Jesu, \n Mumire nesimba rake; \n Simbisanai panyama penyu, \n Musambovimba nesimba; \n Pfekai nhumbi dzehondo, \n Murambe muchinamata; \n Pane dambudzo nemabasa, \n Mumire pamberi paShe.\n4. Mirai, mirai kuna Jesu, \n Kurwa kuchakurumidza; \n Nhasi kurira kwehondo, \n Mangwana mufaro wembiri; \n Kuna Iye anokunda, \n Achapiwa korona; \n Agogara naye kudenga, \n Nokusingaperi-peri.",
      nd: "1. Sukumani, sukumel’ uJesu, \n Masocha esiphambano; \n Phakamisani ibhanela yakhe, \n Ingabi lokunqotshwa; \n Kusukela ekunqobeni kusiya komunye, \n Uzakhokhela ibutho lakhe; \n Kuze kube yilapho zonke izitha zinqotshwa, \n UKristu abe yiNkosi impela.\n2. Sukumani, sukumel’ uJesu, \n Lalelani icilongo; \n Phumelani empini enkulu, \n Kulolu suku lwakhe olukhulu; \n Lanxa izitha zinengi, \n Lingesabi amandla azo; \n Phangelani ezingozini, \n Sinqobe amandla esitha.\n3. Sukumani, sukumel’ uJesu, \n Sukumani ngamandla akhe; \n Inyama iyahluleka, \n Lingathembi amandla enu; \n Gqokani izikhali zempi, \n Likhuleke njalo; \n Lapho kulentando lomsebenzi, \n Sukumani phambi kweNkosi.\n4. Sukumani, sukumel’ uJesu, \n Ukulwa kuzaphela masinyane; \n Namuhla umsindo wembuqo, \n Kusasa ingoma yokunqoba; \n Kulowo onqobayo, \n Uzaphiwa umqele; \n Azahlala leNkosi ezulwini, \n Kuze kube phakade.",
    },
  },
  {
    id: "38",
    number: 38,
    title: {
      en: "Onward, Christian Soldiers",
      sn: "MAUTO A KRISTU",
      nd: "QHUBEKANI MASOCHA KA KRISTU",
    },
    lyrics: {
      en: "Onward, Christian soldiers, marching as to war...",
      sn: "1. Mauto aKristu, hondo kumatare, \n Chipambare chaJesu chiri pamberi; \n Mambo wedu Kristu ndiye mutungamiri, \n Mumire nehondo yake yokukunda.\n[Chorus]\nMauto aKristu, hondo kumatare, \n Chipambare chaJesu chiri pamberi.\n2. Pakubva kwezita, Satani anitya, \n Mauto aMwari, tichakunda chose; \n Simba regehena richakundwa chose, \n Ngatimbirei mbiri tichikunda mhandu.\n3. Kunge hondo huru, mauto aMwari, \n Tiri kutevera kwaakafamba vatsvene; \n Hatina kupatsanurwa, tiri muviri mumwe, \n Rutendo rumwe chete, nerudo rumwe.\n4. Korona neushe zvinopera chose, \n Asi kereke yaKristu inomira narinhi; \n Masuwo egehena haangaikundi, \n Chivimbiso chaKristu hachimbopera.\n5. Vanhu, farai mose, uyai muhondo, \n Imbai rumbo rwenyu pamwe nesu mose; \n Mbiri nekukudzwa kune Mambo wedu, \n Ngirozi nevanhu ngavaimbe mbiri.",
      nd: "1. Qhubekani masocha kaKristu, \n Libheke empini; \n Isiphambano sikaJesu siphamhlonzi; \n UKristu iNkosi yethu ungumkhokheli, \n Qhubekani njalo liyenqoba.\n[Chorus]\nQhubekani masocha kaKristu, \n Libheke empini; \n Isiphambano sikaJesu siphamhlonzi.\n2. Nxa kukhulunywa igama lakhe, uSathane uyabaleka, \n Masocha kaThixo, sinqobe impela; \n Amandla esihogo azanqotshwa, \n Asihlabelele inkazimlo sinqobe isitha.\n3. Njengebutho elikhulu, masocha kaThixo, \n Silandela lapho abangcwele bahamba khona; \n Kasihlukenanga, simzimba munye, \n Ukholo lunye, lothando lunye.\n4. Imidalo lobukhosi kuyaphela, \n Kodwa ibandla likaKristu limi njalo; \n Amasango esihogo angeke alinqobe, \n Isithembiso sikaKristu asipheli.\n5. Bantu, jabulani lonke, wozani empini, \n Hlabelelani ingoma yenu lathi sonke; \n Inkazimlo lokubongwa kwiNkosi yethu, \n Izingilosi labantu abahlabelele inkazimlo.",
    },
  },
  {
    id: "39",
    number: 39,
    title: {
      en: "Fight the Good Fight",
      sn: "RWAI KURWA KWAKANAKA",
      nd: "LWANI UKULWA OKUHLE",
    },
    lyrics: {
      en: "Fight the good fight with all thy might...",
      sn: "1. Rwai kurwa kwakanaka, \n Nesimba renyu rose; \n Kristu ndiye simba redu, \n Naye tichakunda chose.\n2. Mhanyai mukurwa kwedu, \n Mutarire pamberi; \n Upenyu huri muna Jesu, \n Iye mutungamiri wedu.\n3. Musatye zvinhu zvenyika, \n Nyasha dzaShe dzakakwana; \n Vimbai nemambo wedu, \n Achakuchengetai narinhi.\n4. Musatye dambudzo rose, \n Tarirai kuna Jesu; \n Rugare rwake runesu, \n Dakara tipinde denga.",
      nd: "1. Lwani ukulwa okuhle, \n Ngamandla enu wonke; \n UKristu ungamandla ethu, \n Ngaye sizonqoba impela.\n2. Gijimani empini yethu, \n Khangelani phambili; \n Ukuphila kukuJesu, \n Yena ungumkhokheli wethu.\n3. Lingesabi izinto zomhlaba, \n Umusa weNkosi wenele; \n Thembani iNkosi yethu, \n Izaligcina kuze kube phakade.\n4. Lingesabi zonke inhlupho, \n Khangelani kuJesu; \n Ukuthula kwakhe kulo thina, \n Kuze kuyofika ezulwini.",
    },
  },
  {
    id: "40",
    number: 40,
    title: {
      en: "Work, for the Night Is Coming",
      sn: "SHANDAI, USIKU HWOSVIKA",
      nd: "SEBENZA, UBUSUKU BUYEZA",
    },
    lyrics: {
      en: "Work, for the night is coming...",
      sn: "1. Shandai, usiku hvosvika, \n Shandai mazuva ose; \n Zuva richiri kubwinya, \n Shandai nemufaro.\n2. Shandai, usiku hvosvika, \n Shandai pakubuda kwezuva; \n Munguva yekuzorodza, \n Shandai nemwoyo wose.\n3. Shandai, usiku hvosvika, \n Masikati makuru; \n Shandai mazuva anofamba, \n Shandai nesimba renyu.\n4. Shandai, usiku hvosvika, \n Kana zuva radoka; \n Shandai dakara kupedza, \n Zvose zvamakapiwa.",
      nd: "1. Sebenza, ubusuku buyeza, \n Sebenza zonke izinsuku; \n Ilanga lisakhanya, \n Sebenza ngenjabulo.\n2. Sebenza, ubusuku buyeza, \n Sebenza nxa liphuma ilanga; \n Ngesikhathi sokuphumula, \n Sebenza ngenhliziyo yonke.\n3. Sebenza, ubusuku buyeza, \n Emini enkulu; \n Sebenza izinsuku zihamba, \n Sebenza ngamandla akho.\n4. Sebenza, ubusuku buyeza, \n Nxa ilanga selitshonile; \n Sebenza uze uqede, \n Konke ophiwe khona.",
    },
  },
];
