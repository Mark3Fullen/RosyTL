puts "Running seeds........"

bruh = User.create(
    name: "Bruh Moment",
    password: "1111",
    password_confirmation: "1111",
    email: "bruh@gmail.com"
)

User.create(
    name: "Test Mann",
    password: "9999",
    password_confirmation: "9999",
    email: "potatoeGoogle@gmail.com"
)

Event.create(
    user_id: 1,
    title: "1455",
    cardTitle: "First Battle of St. Albans",
    cardSubtitle: "22 May 1455",
    cardDetailedText: "A Yorkist Victory at the beginning of the war! The Duke of Somerset, a Lancastrian leader is killed and Richard, Duke of York is re-appointed Protector of the Realm.",
    url: "https://www.historic-uk.com/assets/Images/battlestalbansmap.jpg?1390902345"
)

Event.create(
    user_id: 1,
    title: "1459",
    cardTitle: "Battle of Ludford Bridge",
    cardSubtitle: "12 October 1459",
    cardDetailedText: "The First Lancastrian victory of the war. Yorkist ideals are declared forfeit and Richard of York is forced to retreat to Ireland.",
    url: "https://cdn.britannica.com/s:300x169,c:crop/72/100472-050-1D4EC299/Illustration-Richard-III-Battle-of-Bosworth-Field.jpg"
)

Event.create(
    user_id: 2,
    title: "1460",
    cardTitle: "Battle of Northampton",
    cardSubtitle: "10 July 1460",
    cardDetailedText: "Yorkist victory which leaves Henry VI, a Lancastrian leader, captured. The Earl of Warwick massacres prisoners. Queen Margaret flees to Wales while Richard will ascend to the throne within months",
    url: "https://www.britishbattles.com/wp-content/uploads/2018/03/Northampton-33.jpg"
)

Event.create(
    user_id: 1,
    title: "1460",
    cardTitle: "Battle of Wakefield",
    cardSubtitle: "30 December 1460",
    cardDetailedText: "Shortly after Richard of York ascends the throne, the Queen returns with an army. The Yorkists are defeated and their hero, Richard killed! Richard is succeeded by his son Edward, Earl of March.",
    url: "https://i1.wp.com/schoolshistory.org.uk/topics/wp-content/uploads/2018/05/battle-wakefield.jpg"
)

Event.create(
    user_id: 1,
    title: "1461",
    cardTitle: "Battle of Mortimer Cross",
    cardSubtitle: "2 February 1461",
    cardDetailedText: "Edward, son of Richard, the Yorkist King, is victorious.",
    url: "https://britishheritage.com/uploads/article/1998/9/102/Battle_Mortimers_Cross_British_Library.jpg?t=1631699796"
)

Event.create(
    user_id: 1,
    title: "1461",
    cardTitle: "Second Battle of St. Albans",
    cardSubtitle: "17 February 1461",
    cardDetailedText: "A Lancastrian victory, as was the rescue of Henry VI.",
    url: "https://www.britishbattles.com/wp-content/uploads/2018/02/2nd-Battle-of-St-Albans.AAA_.jpg"
)

Event.create(
    user_id: 1,
    title: "1461",
    cardTitle: "Battle of Towton",
    cardSubtitle: "9 March 1461",
    cardDetailedText: "Days after Edward, Richard's son ascends the throne, a Yorkist victory for The Earl of Warwick sends the Henry VI and Queen Margaret to Scotland.",
    url: "https://upload.wikimedia.org/wikipedia/commons/0/00/Richard_Caton_Woodville%27s_The_Battle_of_Towton.jpg"
)

Event.create(
    user_id: 2,
    title: "1465",
    cardTitle: "Henry VI Imprisoned",
    cardSubtitle: "24 June 1465",
    cardDetailedText: "Henry VI, the former King is found in Scotland and imprisoned in the Tower of London.",
    url: "https://www.factinate.com/wp-content/uploads/2018/12/Edward_Prince_of_Wales_Son_of_Henry_VI._and_Edward_IV.jpg"
)

Event.create(
    user_id: 2,
    title: "1470",
    cardTitle: "Restoration of Lancastrian Throne",
    cardSubtitle: "13 October 1470",
    cardDetailedText: "After disagreements with the Yorkist King, Edward IV, the Duke of Warwick teams up with the Lancastrian Queen, Margaret, and takes back England, restoring Henry VI.",
    url: "https://www.prints-online.com/p/164/henry-vi-released-1470-4378851.jpg.webp"
)

Comment.create(
    user_id: bruh.id,
    event_id: 1,
    content: "This one rox"
)

Comment.create(
    user_id: bruh.id,
    event_id: 4,
    content: "What a tragedy"
)

Comment.create(
    user_id: bruh.id,
    event_id: 2,
    content: "This one sux"
)

Comment.create(
    user_id: bruh.id,
    event_id: 4,
    content: "This is so epic lol"
)



puts "Done!!!!!!!!!!!!!!!!!!!!!!!!"