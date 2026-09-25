const beniHu = [
  'Szia, Győri Benjamin vagyok! Szeretném megosztani a történetemet arról, hogyan lettem hívővé, és hogyan hívott el Isten a szolgálatba.',
  'Keresztény családba születtem Magyarországon, Európában. Édesapám lelkész, édesanyám óvónő. Hívő családban felnőni azt jelentette, hogy egészen kicsi korom óta hallottam és tanultam Jézusról és a Biblia történeteiről, amelyek arról szólnak, hogy Isten kicsoda.',
  'Majdnem 3 éves koromban az Egyesült Államokba, Kaliforniába költöztünk 4 évre. Édesapám akkor szerezte meg a teológiai vezetés szakos mesterdiplomáját. Ott tanultam meg angolul, és bár akkor még nem tudtam, ez alapozta meg később a missziós utamat.',
  'Amíg ott éltünk, egy vasárnap nem volt vasárnapi iskola, így a felnőttek közé kellett ülnöm. A lelkész egyértelműen az evangéliumot hirdette, és imára hívta azokat, akik el akarják fogadni Jézust Megváltójuknak. Mindössze 5 éves voltam, de Isten világosan szólt hozzám a lelkészen keresztül, és aznap úgy döntöttem, hogy bízom és hiszek Benne.',
  'Ahogy hazafelé sétáltunk, elmondtam apámnak, hogy elfogadtam Jézust. Bementünk a házba, ő leült velem, és feltett néhány kérdést, hogy megbizonyosodjon róla, hogy valóban értem az evangéliumot. Miután látta, hogy tényleg megértettem, együtt imádkoztunk.',
  '7 évesen költöztünk vissza Magyarországra, és egészen kamaszkoromig lassan növekedtem Jézusba vetett hitemben és ismeretemben. Amikor középiskolás lettem, fellázadtam a szüleim és Isten ellen. Rossz helyeken kezdtem keresni az identitásomat, és egyre kevésbé éreztem magam szeretetre méltó embernek. 16 évesen mély depresszióba estem, ez volt életem legmélyebb pontja.',
  'Isten megszólított, igazi reményt adott, és megmutatta, hogy az identitásomnak Őbenne kell gyökereznie. Egészen új életet adott, és megmutatta, hogy engem szeretne használni az Örömhír megosztására.',
  'Tizennégy éves korom óta önkéntesként szolgálok táborokban, és a tanév alatt a Cru-val is. Ott tanultam meg, hogyan oszthatom meg az evangéliumot, és ők tanítványoztak engem, megmutatva, hogyan tanítványozhatok másokat is. Segítettek megtalálni az elhívásomat a szolgálatra, és rajtuk keresztül tapasztalatot szerezhettem mind hazai, mind nemzetközi missziós munkában. Jártam Dél-Ázsiában, a Közel-Keleten és Kenyában.',
  '2022 óta Isten kihívott a CRU szolgálatból, hogy a gyülekezetünkben szolgáljam Őt. Már akkor vezető voltam az ifjúsági csoportunkban, és Isten egyre több felelősséget bízott rám ott. Mindezek után a Pioneers-szel és a gyülekezetemmel együtt évente egy missziós konferenciát szerveztünk. Néhány év után meghívást kaptam, hogy csatlakozzam a helyi Pioneers csapathoz teljes állású munkatársként. Imádkoztam, és emberekkel konzultáltam arról, hogy esetleg teljes idejű szolgálatba álljak.',
  'A feleségemmel, Andival 2023 végén ismerkedtem meg a gyülekezetben. Akkor még nem volt hívő, és először a gyülekezetünk nyári táborában beszélgettünk, júliusban. Gyorsan közel kerültünk egymáshoz, majd ő egy félévre Dániába ment tanulni. Nem sokkal hazajövetele után eljegyeztük egymást, majd nem sokkal később összeházasodtunk, és megszületett gyönyörű kislányunk, Lea.',
  'Hogy még izgalmasabb legyen minden, még Andi terhessége alatt elkezdtük építeni a házunkat. Nagyon sok minden történt egyszerre, ami örömet, de sok stresszt és nehézséget is okozott. Mindez formált mindkettőnket, és próbára tette a kapcsolatunkat egymással, a családjainkkal, barátainkkal, és mindenekelőtt Istennel.',
  '2025 folyamán kevésbé voltam aktív a szolgálatban, de Isten mindezeken a tapasztalatokon keresztül készített fel az Ő munkájára. 2025 novembere óta újra a terepen vagyok, vidéki gyülekezetplántálásokat segítek, és elkezdtem szolgálni egy hajléktalanok számára tartott gyülekezetben is. Emellett néhány embert tanítványozok, és gyülekezeteket látogatok, hogy megtaláljam a következő missziós generációt, és segítsek nekik felismerni az elhívásukat.',
  'Köszönöm, hogy elolvastad! Isten áldjon! — Benjamin',
]

const beniEn = [
  "Hi my name is Benjamin Gyori! I'd like to share my story of how I became a believer and how God called me in to ministry.",
  'I was born in a Christian family in Hungary, in Europe. My dad is a pastor and my mom is a preschool teacher. Growing up in a believing family meant that I have been hearing and learning about Jesus and all the stories in the Bible, that talk about who God is.',
  "When I was almost 3 years old, we moved to the US, to California for 4 years. My dad was studying to receive a Masters degree in theological leadership. I learned to speak English there and even though I didn't know it yet, that laid the path for me in becoming a missionary.",
  'While we were there, one Sunday there was no Sunday school service, so I had to sit with the adults. The pastor was clearly preaching the gospel and called the people to pray, who want to accept Jesus as there savior. I was only 5 years old, but God clearly spoke to me through the pastor and I decided to trust and believe in Him that day.',
  'As we were walking in to our house, I told my dad that I have accepted Jesus. We went inside and he sat down with me and asked a few questions to make sure I understood the Gospel. After he saw that I truly understood, we prayed together.',
  'We moved back to Hungary when I was 7 and until my teenage years, I was just slowly growing in knowledge and faith in Jesus. When I got to high school, I rebelled against my parents and God. I started finding my identity in all the wrong places and felt less and less like a person worth loving. When I was 16 I went through deep depression and that was the lowest point of my life.',
  'God decided to speak to me and He gave me true hope and showed me that my identity should be in Him. He gave me a truly new life and showed me that He wants to use me to share the Good News.',
  'Since I was 14, I have been serving as a volunteer in camps and with Cru during the school year. I learned methods to share the gospel and they also discipled me and showed me how I can disciple others. They also helped me find my calling in ministry and through them I was able to gain experience in both local and international missions. I have been in South-Asia, The Middle-East and Kenya.',
  'Since 2022 God called me out from CRU ministry to serve Him in our church. I was already a leader in our youth group and God was giving me more responsibilities there. After all that experience, I have been serving with Pioneers and my church in organizing a mission conference once a year. After a few years I was invited to join the local Pioneers team as full time staff. I prayed and consulted people about me potentially joining full time ministry.',
  'I met my wife Andi in church at the end of 2023. At the time she was not a believer and the first time we talked was in our Church summer camp, in July. We became close quickly and then she went to Denmark for a semester to study. Soon after she came back we got engaged and then not long after that, we got married and then we had our beautiful daughter, Lea come in to our lives.',
  'To make everything even more interesting we started building our house while Andi was pregnant. We had experienced a lot of things at the same time, that caused us joy and a lot of stress and hardship. It grew both of us and challenged us in our relationship with each other, with our families, friends and most importantly God.',
  "I was less active in ministry during the year of 2025, but God was preparing me for his work through all of these experiences. Since November 2025, I have been back on the field and have been helping church plants in the rural areas and I've started serving in a church for the homeless. I'm also discipling a few people and visiting churches to find the next generation of missionaries and help them find their calling.",
  'Thank you for reading! God Bless! — Benjamin',
]

const andiHu = [
  'Andi vagyok. Nem keresztény, nem vallásos családban nőttem fel. A kereszténység nem volt jelen a mindennapjainkban, nem igazán gondolkodtunk a hitről. Visszatekintve azt mondanám, lelkileg közömbösek voltunk. Világi életet éltem, voltak kapcsolataim, és egyszerűen csak abban hittem, amit magam körül láttam: hogy egy nap meghalok, és a földben maradok.',
  'Ám már akkor is Isten irányította az utamat azzal, hogy bizonyos embereket hozott az életembe. Rajtuk keresztül kezdett megváltozni a keresztényekről alkotott képem. Viccesek, kedvesek, alázatosak, magukkal ragadóak és könnyen megközelíthetőek voltak, ami lassan nyitottabbá tett a hit felé. A középiskolában egy keresztény lány lett a legjobb barátnőm, és gyakran folytattunk őszinte beszélgetéseket. Azt szerettem benne, hogy mindig nyíltan beszélhettem vele, sosem sértődött meg a kérdéseimen. Meghívott egy keresztény táborba, amit nagyon élveztem. Az ott megismert hívőkön keresztül megtapasztaltam, mennyire jók és szeretetteljesek. Nagyon szerettem a reggeli dicsőítő éneklést.',
  'A 2020-as évek elején néha elmentem katolikus misére az akkori barátommal. Szerettem odajárni, bár ez még közvetlenül nem hatott a hitemre. 3 évvel ezelőtt, a második diplomám megszerzése közben Isten egy keresztény szobatársat adott mellém a kollégiumban. Közel kerültünk egymáshoz, és több őszinte, nehéz beszélgetést folytattunk a kereszténységről és a hitről. Egy nap hallani akartam, ahogy dicsőítő énekeket énekel, ezért elmentem vele a Cornerstone gyülekezetbe. Itt ismertem meg a leendő férjemet, Benit is. Miután körülbelül egy hónapig jártam oda, 2024. január 14-én Isten elhívott a hitre.',
  'Elég jól emlékszem arra a napra. Hálásan és békességgel a szívemben érkeztem a gyülekezetbe, és az elejétől kezdve éreztem, hogy engem szólítanak meg. Nem éreztem magam figyelmen kívül hagyottnak vagy jelentéktelennek. Az egész istentisztelet alatt éreztem, hogy Isten szól hozzám, és egész nap sírtam. Nem ilyen élményre számítottam, amikor a gyülekezetbe mentem, de úgy éreztem, mintha valami elárasztott volna. Találkoztam Istennel, és a szívem olyan hálával telt meg, amilyet még sosem tapasztaltam. Nem haboztam, egyszerűen olyan biztos voltam benne — tudtam, hogy Ő valóságos, tudtam, hogy él.',
  "A szobatársam és a családom is elkezdte észrevenni a pozitív változásokat az életemben. Isten kegyelméből kevésbé lettem önző, sokkal türelmesebb, gondoskodóbb és empatikusabb. Elkezdte átformálni a prioritásaimat és a szokásaimat. Elkezdtem olvasni a Bibliát, már nem kerestem ugyanúgy a világi örömöket, és Isten elkezdte felfedni előttem azokat a bűnöket az életemben, amelyeket korábban nem ismertem fel.",
  'Ugyanakkor az életem nem változott meg egyik napról a másikra. Körülbelül fél évvel később a gyülekezet nyári tábora mély hatással volt a hitemre. A tábor eseményein keresztül Isten megtanított mélyebben bízni Benne. Elkezdtem imádkozni, és átadtam Jézusnak az irányítást az életem felett. Ezen a táboron kezdtünk Benivel közelebb kerülni egymáshoz, hogy megismerjük egymást, és lássuk, elvezethet-e ez a kapcsolat végül házassághoz.',
  'Ezután egy félévre Dániába mentem, ami mélyen pozitív időszak lett az Istennel járt utamon. Találtam egy helyi gyülekezetet, csatlakoztam a bibliaóráikhoz, és péntekenként utcai evangelizáláson vettünk részt. Ez idő alatt Benivel is közel maradtunk egymáshoz, ő kétszer is meglátogatott, mindkétszer egy hétre. Miután 2025 januárjában hazajöttem Magyarországra, megkérte a kezem. Nem sokkal ezután összeházasodtunk, és vártuk az első gyermekünket.',
  'Ilyen rövid idő alatt feleség és édesanya lettem, és teljesen más embernek éreztem magam, mint aki Dániában voltam. Az életem hirtelen tele lett új kihívásokkal, és a házasság megmutatta azokat a területeket, ahol Isten segítségével és imádság által még sokat kell növekednem. Elkezdtem megérteni, mit jelent „új hívőnek” lenni. Rájöttem, hogy a hitem valójában még nem volt igazán próbára téve. Persze könnyebb volt hinni, amikor az életem békés volt, bonyodalmak nélkül.',
  'Most, fiatal édesanyaként néha nehéz szavakba önteni az érzéseimet, és imában Isten elé vinni azokat. De eltökélt vagyok, hogy nem hagyom, hogy ez az új életszakasz eltávolítson az Atyával való kapcsolatomtól. Nagyon sokat jelent számomra, hogy Istent Atyámnak szólíthatom, a saját apámmal való kapcsolatom miatt. A szüleim elváltak, miután befejeztem az általános iskolát, így apafigura nélkül nőttem fel, anélkül, hogy egyáltalán hiányzott volna. Isten az én Atyám, aki szerető, megbízható, és akire az örökkévalóságon át számíthatok.',
  'Ami a mai életemet illeti, még ha nem is olvasom minden áldott nap a Bibliát, gyakran veszem észre magam, ahogy csendben imádkozom, vagy esténként egyedül ülök a teraszunkon, hangosan beszélek az Atyához, és kiöntöm előtte a szívemet. Tanulom, hogy nem kell mindent egyedül megoldanom. Még a házasságunkban felmerülő konfliktusok idején is, a büszkeségem ellenére, Isten olyan gondolatokat és nézőpontokat ad, amiket magamtól nem tudnék. Egyre gyakrabban jutnak eszembe konkrét bibliai igék, amelyek arra emlékeztetnek, hogy az Ő vezetését keressem, ne magamra támaszkodjak. Látom, ahogy türelmesen munkálkodik az életemben, jelen van a kis részletekben, gyengéden korrigál, és segít, hogy szeretetteljesebb és türelmesebb legyek.',
]

const andiEn = [
  "My name is Andi. I grew up in a family that was not Christian or religious. Christianity was not part of our everyday lives, we didn't really think about faith. Looking back, I'd say that we were spiritually indifferent. I lived a secular life, I had relationships, and I simply believed what I could see around me: that one day I would die and remain in the ground.",
  'However, even during that time, God was already guiding my path by bringing certain people into my life. Through them, the image I had of Christians began to change. They were funny, kind, humble, captivating and easy to connect with, which slowly made me more open about faith. In high school, a Christian girl became my best friend, and we often had open conversations. What I appreciated about her was that I could always be straightforward with her, she would never get hurt by my questions. She invited me to a Christian camp, which I deeply enjoyed. Through the believers I met there, I experienced how good and loving they were. I really enjoyed singing worship songs in the mornings.',
  'Around the beginning of the 2020s, I occasionally attended Catholic Mass with my boyfriend at the time. I enjoyed going there, although it did not yet have a direct impact on my faith. 3 years ago, during my second degree program, God gave me a Christian roommate in the dorm. We became close and had several honest and difficult conversations about Christianity and faith. One day, I wanted to hear her sing worship songs, so I went with her to Cornerstone Church. This is also where I met my future husband, Beni. After attending for about a month, on the 14th of January 2024, God called me to faith.',
  "I remember the day quite well. I arrived at church feeling grateful and peaceful, and from the very beginning, I felt that I was being addressed. I didn't feel ignored or insignificant. Throughout the whole service, I felt that God was speaking to me, and I ended up crying for the whole day. I didn't come to church expecting such an experience, but it felt as if something flooded over me. I encountered God, and my heart was filled with a gratitude I had never experienced before. I didn't hesitate, I was just so confident, I knew He was real, I knew He lives.",
  "My roommate and my family began to notice positive changes in my life. By God's grace, I became less selfish, much more patient, caring and empathetic. He started changing my priorities and my habits. I began reading the Bible, I was no longer seeking worldly pleasures in the same way, and God started to reveal the sins in my life that I hadn't recognized before.",
  "At the same time, my life didn't completely change overnight. About half a year later, the church summer camp had a profound impact on my faith. Through the events of the camp, God taught me to trust Him more deeply. I started to pray, and I gave Jesus control over my life. At this camp, Beni and I started getting closer and getting to know each other, to see if this relationship could eventually lead to marriage.",
  'After that, I left for a semester in Denmark, which became a deeply positive time in my journey with God. I found a local church, joined its Bible study, and on Fridays we went street evangelizing. During this time, Beni and I stayed close, and he also came to see me twice, for a week each time. He proposed to me after I came home to Hungary in January 2025. Soon after that, we got married, and we were expecting our first child.',
  'In such a short time, I became a wife and a mother, and I felt like a completely different person from the one I had been in Denmark. Suddenly, my life has been filled with many new challenges, and marriage showed me the areas of my life where I still have a lot of room to grow, with God\'s help and through prayer. I began to understand what it means to be a "new believer." I realized that my faith had not truly been tested yet. Of course, it felt easier to believe when my life was peaceful and without many complications.',
  "Now, as a young mother, it has sometimes been difficult to put all of my feelings into words and bring them to God in prayer. But I am determined not to let this new season of life draw me away from my relationship with the Father. It means so much to me to call God my Father because of my relationship with my own father. My parents divorced after primary school, so I grew up without having a father figure in my life and without missing him at all. God is my Father, who is loving, trustworthy and whom I can rely on throughout eternity.",
  "As for my life today, even when I don't read the Bible every single day, I find myself praying silently and sitting alone on our terrace in the evenings, speaking to the Father out loud and pouring out my heart. I'm learning that I don't have to fix everything by myself. Even during conflicts in my marriage, despite my pride, God has been giving me thoughts and perspectives that I wouldn't have had on my own. More and more often, specific Bible verses come to my mind, reminding me to seek his guidance instead of relying on myself. I can see how He is patiently working in my life, He's present in the small details, gently correcting me and helping me become more loving and patient.",
]

export const translations = {
  hu: {
    nav: {
      brand: 'Győri Beni & Andi',
      home: 'Főoldal',
      testimony: 'Bizonyságtétel',
      mission: 'Misszió',
      recommendations: 'Ajánlások',
      info: 'Infók',
    },
    home: {
      kicker: 'Isten kegyelméből',
      title: 'Szia, örülök, hogy itt vagy.',
      lede: 'Ez az oldal a történetünkről, a szolgálatunkról és arról szól, hogyan tarthatod velünk a kapcsolatot — vagy hogyan állhatsz mellénk imában és adományban.',
      aboutTitle: 'Bemutatkozás',
      aboutShared: [
        '[Ide kerül mindkettőtök neve] vagyunk, és [ide kerül röviden, hogy kik vagytok együtt — honnan jöttök, mivel foglalkoztok, mi jellemez titeket párként].',
        '[Itt folytathatod: hogyan találkoztatok, család, háttér, hogyan indult el mindaz, amiről ez az oldal szól.]',
      ],
      tabs: ['Benjamin', 'Andi'],
      aboutBeni:
        '[Ide kerül a férj rövid, személyes bemutatkozása — kicsoda, mivel foglalkozik, mi jellemzi őt egyénileg.]',
      aboutAndi:
        '[Ide kerül a feleség rövid, személyes bemutatkozása — kicsoda, mivel foglalkozik, mi jellemzi őt egyénileg.]',
    },
    testimony: {
      title: 'Bizonyságtétel',
      tabs: ['Benjamin', 'Andi'],
      beni: beniHu,
      andi: andiHu,
    },
    mission: {
      title: 'Misszió',
      statement:
        '[Egy-két mondatos küldetésnyilatkozat: mire hívott el Isten titeket, kiket szolgáltok, és mi a célotok.]',
      points: [
        '[Első konkrét terület vagy tevékenység, amivel a küldetéseteket élitek — pl. egy adott közösség, ország vagy szolgálati forma.]',
        '[Második terület — pl. rendszeres alkalmak, kiutazások, tanítás, segítségnyújtás.]',
        '[Harmadik terület, ha van — pl. hosszú távú terv vagy vízió.]',
      ],
    },
    recommendations: {
      title: 'Ajánlások',
      intro: 'Néhány szó azoktól, akik ismerik a szolgálatot vagy a munkát közelről.',
      items: [
        {
          quote: '[Ide kerül egy ajánlás szövege — miért bízik meg valaki ebben a szolgálatban, mit tapasztalt.]',
          who: '[Ajánló neve, beosztása vagy közössége]',
        },
        {
          quote: '[Második ajánlás szövege.]',
          who: '[Ajánló neve, beosztása vagy közössége]',
        },
      ],
    },
    info: {
      title: 'Infók',
      intro: 'Ha imában vagy adományban szeretnél mellénk állni, itt találod a szükséges adatokat.',
      qrTitle: 'Gyors adományozás',
      qrText: 'Olvasd be a QR-kódot a telefonoddal a közvetlen adományozási felülethez.',
      qrPlaceholder: 'QR kód ide kerül',
      bankTitle: 'Banki adatok',
      rows: [
        { label: 'Kedvezményezett', value: '[Név / szervezet]' },
        { label: 'Bankszámlaszám', value: '[XX XXXX XXXX XXXX XXXX]' },
        { label: 'IBAN', value: '[HU00 0000 0000 0000 0000]' },
        { label: 'Közlemény', value: '[pl. Adomány]' },
      ],
    },
    footer: '© 2026 · Karsai István',
  },

  en: {
    nav: {
      brand: 'Beni & Andi Gyori',
      home: 'Home',
      testimony: 'Testimony',
      mission: 'Mission',
      recommendations: 'Recommendations',
      info: 'Info',
    },
    home: {
      kicker: "By God's grace",
      title: "Hi, glad you're here.",
      lede: "This page is about our story, our ministry, and how you can stay in touch with us — or stand with us in prayer and giving.",
      aboutTitle: 'About us',
      aboutShared: [
        "We are [insert both of your names], and [briefly describe who you are together — where you're from, what you do, what defines you as a couple].",
        '[Continue here: how you met, family, background, how everything this page is about got started.]',
      ],
      tabs: ['Benjamin', 'Andi'],
      aboutBeni:
        "[Insert the husband's short, personal introduction here — who he is, what he does, what defines him individually.]",
      aboutAndi:
        "[Insert the wife's short, personal introduction here — who she is, what she does, what defines her individually.]",
    },
    testimony: {
      title: 'Testimony',
      tabs: ['Benjamin', 'Andi'],
      beni: beniEn,
      andi: andiEn,
    },
    mission: {
      title: 'Mission',
      statement:
        "[A one- or two-sentence mission statement: what God has called you to, who you serve, and what your goal is.]",
      points: [
        '[First concrete area or activity through which you live out your mission — e.g. a specific community, country, or form of ministry.]',
        '[Second area — e.g. regular events, trips, teaching, outreach.]',
        '[Third area, if any — e.g. a long-term plan or vision.]',
      ],
    },
    recommendations: {
      title: 'Recommendations',
      intro: 'A few words from those who know the ministry or the work closely.',
      items: [
        {
          quote: '[Insert a recommendation here — why someone trusts this ministry, what they experienced.]',
          who: '[Name, role, or community of the person recommending]',
        },
        {
          quote: '[Second recommendation text.]',
          who: '[Name, role, or community of the person recommending]',
        },
      ],
    },
    info: {
      title: 'Info',
      intro: "If you'd like to stand with us in prayer or through giving, you'll find what you need here.",
      qrTitle: 'Quick donation',
      qrText: 'Scan the QR code with your phone for direct access to the donation page.',
      qrPlaceholder: 'QR code goes here',
      bankTitle: 'Bank details',
      rows: [
        { label: 'Beneficiary', value: '[Name / organization]' },
        { label: 'Account number', value: '[XX XXXX XXXX XXXX XXXX]' },
        { label: 'IBAN', value: '[HU00 0000 0000 0000 0000]' },
        { label: 'Reference', value: '[e.g. Donation]' },
      ],
    },
    footer: '© 2026 · Karsai István',
  },
}
