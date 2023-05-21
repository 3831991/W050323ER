const students = [
    {
        "id": 9124,
        "firstName": "נתנאל",
        "lastName": "אדלר",
        "phone": "059-6506877",
        "email": "abc776@gmail.com",
        "birthday": "2004-04-14",
        "city": "חיפה"
    },
    {
        "id": 9125,
        "firstName": "אריאל",
        "lastName": "אהרונוב",
        "phone": "053-1598177",
        "email": "student1@gmail.com",
        "birthday": "2005-10-25",
        "city": "ירושלים"
    },
    {
        "id": 9126,
        "firstName": "אבהו",
        "lastName": "אזולאי",
        "phone": "051-4892057",
        "email": "abc21@gmail.com",
        "birthday": "2022-02-27",
        "city": "צפת"
    },
    {
        "id": 9127,
        "firstName": "יהלי",
        "lastName": "אזולאי",
        "phone": "057-7453177",
        "email": "abcd123@gmail.com",
        "birthday": null,
        "city": "חיפה"
    },
    {
        "id": 9128,
        "firstName": "טליה",
        "lastName": "אנקרי",
        "phone": "059-7101369",
        "email": "abc487@gmail.com",
        "birthday": "2005-11-19",
        "city": "חיפה"
    },
    {
        "id": 9129,
        "firstName": "אצילה",
        "lastName": "ארציאל",
        "phone": "055-4067134",
        "email": "abc863@gmail.com",
        "birthday": "2005-08-06",
        "city": "ראש העין"
    },
    {
        "id": 9130,
        "firstName": "אורנה",
        "lastName": "ארשמר",
        "phone": "058-1043238",
        "email": "abc9@gmail.com",
        "birthday": "2020-04-20",
        "city": "חיפה"
    },
    {
        "id": 9131,
        "firstName": "דוד",
        "lastName": "ביטון",
        "phone": "054-1128897",
        "email": "abc474@gmail.com",
        "birthday": "2005-06-29",
        "city": "ראש העין"
    },
    {
        "id": 9132,
        "firstName": "דבורית",
        "lastName": "בן-עמי",
        "phone": "052-5386484",
        "email": "abc741@gmail.com",
        "birthday": "2004-08-21",
        "city": "באר שבע"
    },
    {
        "id": 9133,
        "firstName": "ליטל",
        "lastName": "בר נתן",
        "phone": "052-8209113",
        "email": "abc456@gmail.com",
        "birthday": "2005-04-08",
        "city": "טבריה"
    },
    {
        "id": 9134,
        "firstName": "נח",
        "lastName": "גבאי",
        "phone": "059-9798662",
        "email": "abc425@gmail.com",
        "birthday": "2005-07-18",
        "city": "טבריה"
    },
    {
        "id": 9135,
        "firstName": "ליהיא",
        "lastName": "גולד",
        "phone": "059-3331116",
        "email": "abc530@gmail.com",
        "birthday": "2005-11-12",
        "city": "רמת גן"
    },
    {
        "id": 9136,
        "firstName": "אנאל",
        "lastName": "גנץ",
        "phone": "056-2023451",
        "email": "abc481@gmail.com",
        "birthday": "2005-03-30",
        "city": "פתח תקווה"
    },
    {
        "id": 9137,
        "firstName": "סלעית",
        "lastName": "הרצברג",
        "phone": "055-8777580",
        "email": "abc866@gmail.com",
        "birthday": "2005-08-21",
        "city": "צפת"
    },
    {
        "id": 9138,
        "firstName": "איתם",
        "lastName": "ובר",
        "phone": "054-9078419",
        "email": "abc462@gmail.com",
        "birthday": "2005-05-31",
        "city": "באר שבע"
    },
    {
        "id": 9139,
        "firstName": "אלימלך",
        "lastName": "זוננשיין",
        "phone": "055-1018064",
        "email": "abc505@gmail.com",
        "birthday": "2005-07-27",
        "city": "ירוחם"
    },
    {
        "id": 9140,
        "firstName": "נמרוד",
        "lastName": "ינון",
        "phone": "051-1036857",
        "email": "abc450@gmail.com",
        "birthday": "2005-01-18",
        "city": "חיפה"
    },
    {
        "id": 9141,
        "firstName": "יודפת",
        "lastName": "ירון",
        "phone": "055-5737295",
        "email": "abc824@gmail.com",
        "birthday": "2005-01-16",
        "city": "ירוחם"
    },
    {
        "id": 9142,
        "firstName": "יבין",
        "lastName": "ירוסלבסקי",
        "phone": "052-4011468",
        "email": "abc17@gmail.com",
        "birthday": "2020-04-26",
        "city": "באר שבע"
    },
    {
        "id": 9143,
        "firstName": "אור",
        "lastName": "כהן",
        "phone": "055-1683068",
        "email": "abc8@gmail.com",
        "birthday": "2020-04-20",
        "city": "ראש העין"
    },
    {
        "id": 9144,
        "firstName": "אורן",
        "lastName": "לוי",
        "phone": "051-5493142",
        "email": "abc527@gmail.com",
        "birthday": "2005-10-24",
        "city": "ירוחם"
    },
    {
        "id": 9145,
        "firstName": "אמוץ",
        "lastName": "מולסון",
        "phone": "058-5665702",
        "email": "abc444@gmail.com",
        "birthday": "2004-11-11",
        "city": "ירושלים"
    },
    {
        "id": 9146,
        "firstName": "מזר",
        "lastName": "מימון",
        "phone": "052-7868326",
        "email": "abc12@gmail.com",
        "birthday": "2020-04-26",
        "city": "פתח תקווה"
    },
    {
        "id": 9147,
        "firstName": "בן-עמי",
        "lastName": "מלכא",
        "phone": "059-8949140",
        "email": "abc28@gmail.com",
        "birthday": null,
        "city": "ירושלים"
    },
    {
        "id": 9148,
        "firstName": "אביה",
        "lastName": "מרגליות",
        "phone": "054-6368052",
        "email": "abc518@gmail.com",
        "birthday": "2005-12-20",
        "city": "ירוחם"
    },
    {
        "id": 9149,
        "firstName": "יונתן",
        "lastName": "מרקוביץ",
        "phone": "057-2456510",
        "email": "abc760@gmail.com",
        "birthday": "2005-06-05",
        "city": "חיפה"
    },
    {
        "id": 9150,
        "firstName": "עָמְרִי",
        "lastName": "סעדה",
        "phone": "054-2107617",
        "email": "abc422@gmail.com",
        "birthday": "2005-04-10",
        "city": "תל אביב"
    },
    {
        "id": 9151,
        "firstName": "יָגֵל",
        "lastName": "עצמון",
        "phone": "056-4674860",
        "email": "abc447@gmail.com",
        "birthday": "2004-12-17",
        "city": "ירוחם"
    },
    {
        "id": 9152,
        "firstName": "אסיף",
        "lastName": "פרל",
        "phone": "057-9015170",
        "email": "abc477@gmail.com",
        "birthday": "2005-07-21",
        "city": "רמת גן"
    },
    {
        "id": 9153,
        "firstName": "אריק",
        "lastName": "צביאל",
        "phone": "053-9751730",
        "email": "abc39@gmail.com",
        "birthday": null,
        "city": "רמת גן"
    },
    {
        "id": 9154,
        "firstName": "אסיף",
        "lastName": "ציון",
        "phone": "058-1202587",
        "email": "abc15@gmail.com",
        "birthday": null,
        "city": "פתח תקווה"
    },
    {
        "id": 9155,
        "firstName": "אור",
        "lastName": "רוזנטל",
        "phone": "056-3872663",
        "email": "abc841@gmail.com",
        "birthday": "2005-02-28",
        "city": "חיפה"
    },
    {
        "id": 9156,
        "firstName": "גילה",
        "lastName": "שטרן",
        "phone": "051-8244386",
        "email": "abc524@gmail.com",
        "birthday": "2005-11-07",
        "city": "רמת גן"
    },
    {
        "id": 9157,
        "firstName": "גדליה",
        "lastName": "שילת",
        "phone": "051-2441518",
        "email": "abc583@gmail.com",
        "birthday": "2006-07-13",
        "city": "צפת"
    },
    {
        "id": 9158,
        "firstName": "קורן",
        "lastName": "שמואליאן",
        "phone": "053-3800243",
        "email": "abc713@gmail.com",
        "birthday": "2005-05-05",
        "city": "פתח תקווה"
    },
    {
        "id": 9159,
        "firstName": "יהלי",
        "lastName": "שמחון",
        "phone": "058-8945548",
        "email": "abc26@gmail.com",
        "birthday": null,
        "city": "באר שבע"
    },
    {
        "id": 9160,
        "firstName": "מרב",
        "lastName": "שמעון",
        "phone": "054-2505101",
        "email": "abc7@gmail.com",
        "birthday": "2020-04-20",
        "city": "באר שבע"
    },
    {
        "id": 9161,
        "firstName": "אריה",
        "lastName": "שפירא",
        "phone": "057-1258260",
        "email": "abc478@gmail.com",
        "birthday": "2005-08-04",
        "city": "חיפה"
    },
    {
        "id": 9162,
        "firstName": "אבשלום",
        "lastName": "ששון",
        "phone": "057-5164440",
        "email": "abc847@gmail.com",
        "birthday": "2005-07-09",
        "city": "טבריה"
    },
    {
        "id": 9163,
        "firstName": "מרדכי",
        "lastName": "אוחיון",
        "phone": "059-1877209",
        "email": "abc410@gmail.com",
        "birthday": "2003-10-06",
        "city": "צפת"
    },
    {
        "id": 9164,
        "firstName": "אלישמע",
        "lastName": "אסולין",
        "phone": "054-6108894",
        "email": "abc738@gmail.com",
        "birthday": "2004-05-29",
        "city": "פתח תקווה"
    },
    {
        "id": 9165,
        "firstName": "דליה",
        "lastName": "אפרתי",
        "phone": "051-9373718",
        "email": "abc413@gmail.com",
        "birthday": "2004-07-25",
        "city": "רמת גן"
    },
    {
        "id": 9166,
        "firstName": "אבהו",
        "lastName": "בן משה",
        "phone": "059-3252613",
        "email": "abc744@gmail.com",
        "birthday": "2004-05-16",
        "city": "טבריה"
    },
    {
        "id": 9167,
        "firstName": "גילה",
        "lastName": "בן סימחון",
        "phone": "051-1458339",
        "email": "abc767@gmail.com",
        "birthday": "2005-01-12",
        "city": "חיפה"
    },
    {
        "id": 9168,
        "firstName": "לאור",
        "lastName": "בן-ארי",
        "phone": "057-6138267",
        "email": "abc770@gmail.com",
        "birthday": "2004-07-15",
        "city": "טבריה"
    },
    {
        "id": 9169,
        "firstName": "הילה",
        "lastName": "בר לוי",
        "phone": "054-6824944",
        "email": "abc729@gmail.com",
        "birthday": "2004-02-09",
        "city": "תל אביב"
    },
    {
        "id": 9170,
        "firstName": "מזל",
        "lastName": "גיאת",
        "phone": "059-4821115",
        "email": "abc704@gmail.com",
        "birthday": "2003-11-20",
        "city": "צפת"
    },
    {
        "id": 9171,
        "firstName": "הראל",
        "lastName": "גנטה",
        "phone": "051-8758565",
        "email": "abc930@gmail.com",
        "birthday": "2003-11-27",
        "city": "טבריה"
    },
    {
        "id": 9172,
        "firstName": "בתיה",
        "lastName": "גרינברג",
        "phone": "055-1065021",
        "email": "abc761@gmail.com",
        "birthday": "2004-05-20",
        "city": "חיפה"
    },
    {
        "id": 9173,
        "firstName": "חובב",
        "lastName": "גרשלר",
        "phone": "054-3205096",
        "email": "abc716@gmail.com",
        "birthday": "2003-12-08",
        "city": "טבריה"
    },
    {
        "id": 9174,
        "firstName": "אהרן",
        "lastName": "הכהן",
        "phone": "055-4393242",
        "email": "abc783@gmail.com",
        "birthday": "2004-10-30",
        "city": "תל אביב"
    },
    {
        "id": 9175,
        "firstName": "כפיר",
        "lastName": "הכהן",
        "phone": "058-7524258",
        "email": "abc23@gmail.com",
        "birthday": null,
        "city": "פתח תקווה"
    },
    {
        "id": 9176,
        "firstName": "אגיל",
        "lastName": "הנדלר",
        "phone": "053-8339035",
        "email": "abc747@gmail.com",
        "birthday": "2004-11-11",
        "city": "חיפה"
    },
    {
        "id": 9177,
        "firstName": "בן",
        "lastName": "הרצברג",
        "phone": "053-4082882",
        "email": "abc784@gmail.com",
        "birthday": "2004-04-22",
        "city": "ירושלים"
    },
    {
        "id": 9178,
        "firstName": "אבירם",
        "lastName": "הרצליך",
        "phone": "056-9268812",
        "email": "abc303@gmail.com",
        "birthday": "2002-12-10",
        "city": "צפת"
    },
    {
        "id": 9179,
        "firstName": "ליהי",
        "lastName": "וקסלר",
        "phone": "057-3656113",
        "email": "abc438@gmail.com",
        "birthday": "2004-11-28",
        "city": "חיפה"
    },
    {
        "id": 9180,
        "firstName": "חזקיה",
        "lastName": "זולדן - דביר",
        "phone": "059-1141148",
        "email": "abc416@gmail.com",
        "birthday": "2004-10-11",
        "city": "ירוחם"
    },
    {
        "id": 9181,
        "firstName": "אמתי",
        "lastName": "זימן",
        "phone": "051-2294344",
        "email": "abc312@gmail.com",
        "birthday": "2004-01-10",
        "city": "תל אביב"
    },
    {
        "id": 9182,
        "firstName": "אבידע",
        "lastName": "טוביאנה",
        "phone": "059-4827447",
        "email": "abc725@gmail.com",
        "birthday": "2004-02-03",
        "city": "באר שבע"
    },
    {
        "id": 9183,
        "firstName": "יונת",
        "lastName": "כהן",
        "phone": "057-6447099",
        "email": "abc790@gmail.com",
        "birthday": "2004-07-07",
        "city": "חיפה"
    },
    {
        "id": 9184,
        "firstName": "הושעיה",
        "lastName": "להב",
        "phone": "059-7001386",
        "email": "abc732@gmail.com",
        "birthday": "2004-04-11",
        "city": "חיפה"
    },
    {
        "id": 9185,
        "firstName": "אוריון",
        "lastName": "לוי",
        "phone": "052-7506584",
        "email": "abc707@gmail.com",
        "birthday": "2004-01-04",
        "city": "צפת"
    },
    {
        "id": 9186,
        "firstName": "נוגה",
        "lastName": "ליבמן",
        "phone": "052-5781323",
        "email": "abc814@gmail.com",
        "birthday": "2004-12-11",
        "city": "באר שבע"
    },
    {
        "id": 9187,
        "firstName": "דליה",
        "lastName": "לרנר",
        "phone": "054-5242730",
        "email": "abc3@gmail.com",
        "birthday": "2020-04-20",
        "city": "ראש העין"
    },
    {
        "id": 9188,
        "firstName": "יהונתן",
        "lastName": "נעים",
        "phone": "059-7259921",
        "email": "abc764@gmail.com",
        "birthday": "2004-03-03",
        "city": "באר שבע"
    },
    {
        "id": 9189,
        "firstName": "אורנה",
        "lastName": "פרץ",
        "phone": "051-9836028",
        "email": "abc398@gmail.com",
        "birthday": "2003-04-24",
        "city": "ראש העין"
    },
    {
        "id": 9190,
        "firstName": "אמתי",
        "lastName": "צ'ציק",
        "phone": "059-5022517",
        "email": "abc453@gmail.com",
        "birthday": "2005-01-09",
        "city": "טבריה"
    },
    {
        "id": 9191,
        "firstName": "קורן",
        "lastName": "רבלין",
        "phone": "058-6216207",
        "email": "abc431@gmail.com",
        "birthday": "2004-12-07",
        "city": "תל אביב"
    },
    {
        "id": 9192,
        "firstName": "אדר",
        "lastName": "רייך",
        "phone": "052-2889131",
        "email": "abc435@gmail.com",
        "birthday": "2004-11-08",
        "city": "טבריה"
    },
    {
        "id": 9193,
        "firstName": "הגות",
        "lastName": "שהם",
        "phone": "054-2370302",
        "email": "abc750@gmail.com",
        "birthday": "2004-08-18",
        "city": "רמת גן"
    },
    {
        "id": 9194,
        "firstName": "אמירה",
        "lastName": "שטרן",
        "phone": "053-8221556",
        "email": "abc779@gmail.com",
        "birthday": "2004-07-17",
        "city": "באר שבע"
    },
    {
        "id": 9195,
        "firstName": "משה",
        "lastName": "שניר",
        "phone": "058-2289631",
        "email": "abc419@gmail.com",
        "birthday": "2004-11-03",
        "city": "פתח תקווה"
    },
    {
        "id": 9196,
        "firstName": "אושרת",
        "lastName": "שפירא",
        "phone": "051-3169553",
        "email": "abc719@gmail.com",
        "birthday": "2004-03-24",
        "city": "תל אביב"
    },
    {
        "id": 9197,
        "firstName": "יוסף",
        "lastName": "שריד",
        "phone": "058-4318830",
        "email": "abc773@gmail.com",
        "birthday": "2004-01-06",
        "city": "ירוחם"
    },
    {
        "id": 9198,
        "firstName": "היא-לי",
        "lastName": "אטינגר",
        "phone": "057-4281270",
        "email": "abc677@gmail.com",
        "birthday": "2002-12-19",
        "city": "טבריה"
    },
    {
        "id": 9199,
        "firstName": "שהם",
        "lastName": "אליאב",
        "phone": "059-2452945",
        "email": "abc374@gmail.com",
        "birthday": "2003-07-22",
        "city": "טבריה"
    },
    {
        "id": 9200,
        "firstName": "מטר",
        "lastName": "אליהו",
        "phone": "053-9977322",
        "email": "abc324@gmail.com",
        "birthday": "2002-12-22",
        "city": "ראש העין"
    },
    {
        "id": 9201,
        "firstName": "אחווה",
        "lastName": "ארנרייך",
        "phone": "053-5375054",
        "email": "abc350@gmail.com",
        "birthday": "2003-03-30",
        "city": "תל אביב"
    },
    {
        "id": 9202,
        "firstName": "יפה",
        "lastName": "בהרב",
        "phone": "051-5892982",
        "email": "abc362@gmail.com",
        "birthday": "2003-06-08",
        "city": "ירוחם"
    },
    {
        "id": 9203,
        "firstName": "אצילה",
        "lastName": "בן יוסף",
        "phone": "058-4733738",
        "email": "abc680@gmail.com",
        "birthday": "2002-12-24",
        "city": "צפת"
    }
];