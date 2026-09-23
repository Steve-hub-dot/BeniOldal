import { Container, Typography, Box } from '@mui/material'
import PersonTabs from '../components/PersonTabs.jsx'

function Testimony({ paragraphs }) {
  return (
    <Box sx={{ borderLeft: '3px solid', borderColor: 'primary.main', pl: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
      {paragraphs.map((para, i) => (
        <Typography key={i} color="text.secondary" sx={{ maxWidth: '62ch', lineHeight: 1.7 }}>
          {para}
        </Typography>
      ))}
    </Box>
  )
}

const beniTestimony = [
  "Hi my name is Benjamin Gyori! I'd like to share my story of how I became a believer and how God called me in to ministry.",
  "I was born in a Christian family in Hungary, in Europe. My dad is a pastor and my mom is a preschool teacher." + 
  "rowing up in a believing family meant that I have been hearing and learning about Jesus and all the stories in the Bible," + 
  " that talk about who God is.",
  "When I was almost 3 years old, we moved to the US, to California for 4 years. My dad was studying to receive a"+ 
  " Masters degree in theological leadership. I learned to speak English there and even though I didn't know it yet, that laid" + 
  " the path for me in becoming a missionary.",
  "While we were there, one Sunday there was no Sunday school service, so I had to sit with the adults." + 
  " The pastor was clearly preaching the gospel and called the people to pray, who want to accept Jesus as there savior." + 
  " I was only 5 years old, but God clearly spoke to me through the pastor and I decided to trust and believe in Him that day.",
  "As we were walking in to our house, I told my dad that I have accepted Jesus. We went inside and he sat down with me and asked a" + 
  " few questions to make sure I understood the Gospel. After he saw that I truly understood, we prayed together.",
  "We moved back to Hungary when I was 7 and until my teenage years, I was just slowly growing in knowledge and faith in Jesus." + 
  " When I got to high school, I rebelled against my parents and God. I started finding my identity in all the wrong places and felt" + 
  " less and less like a person worth loving. When I was 16 I went through deep depression and that was the lowest point of my life.",
  "God decided to speak to me and He gave me true hope and showed me that my identity should be in Him. He gave me a truly new life" + 
  " and showed me that He wants to use me to share the Good News.",
  "Since I was 14, I have been serving as a volunteer in camps and with Cru during the school year. I learned methods to share the" + 
  " gospel and they also discipled me and showed me how I can disciple others. They also helped me find my calling in ministry and" + 
  " through them I was able to gain experience in both local and international missions. I have been in South-Asia," + 
  " The Middle-East and Kenya.",
  "Since 2022 God called me out from CRU ministry to serve Him in our church. I was already a leader in our youth group and God was" + 
  " giving me more responsibilities there. After all that experience, I have been serving with Pioneers and my church in organizing a" + 
  " mission conference once a year. After a few years I was invited to join the local Pioneers team as full time staff. " + 
  "I prayed and consulted people about me potentially joining full time ministry.",
  "I met my wife Andi in church at the end of 2023. At the time she was not a believer and the first time we talked was in our Church" + 
  " summer camp, in July. We became close quickly and then she went to Denmark for a semester to study. Soon after she came back we" + 
  " got engaged and then not long after that, we got married and then we had our beautiful daughter, Lea come in to our lives.",
  "To make everything even more interesting we started building our house while Andi was pregnant. " + 
  "We had experienced a lot of things at the same time, that caused us joy and a lot of stress and hardship. " + 
  "It grew both of us and challenged us in our relationship with each other, with our families, friends and most importantly God.",
  "I was less active in ministry during the year of 2025, but God was preparing me for his work through all of these experiences." + 
  " Since November 2025, I have been back on the field and have been helping church plants in the rural areas and I've started serving" + 
  " in a church for the homeless. I'm also discipling a few people and visiting churches to find the next generation of missionaries "  + 
  "and help them find their calling.",
  "Thank you for reading! God Bless! - Benjamin",
]

const andiTestimony = [
  "My name is Andi. I grew up in a family that was not Christian or religious. Christianity was not part of our everyday lives," +
  " we didn't really think about faith. Looking back, I'd say that we were spiritually indifferent. I lived a secular life,"
  +" I had relationships, and I simply believed what I could see around me: that one day I would die and remain in the ground.",
  "However, even during that time, God was already guiding my path by bringing certain people into my life. Through them, the image" +
  " I had of Christians began to change. They were funny, kind, humble, captivating and easy to connect with, which slowly made me "+
  "more open about faith. In high school, a Christian girl became my best friend, and we often had open conversations. "+
  "What I appreciated about her was that I could always be straightforward with her, she would never get hurt by my questions. "+
  "She invited me to a Christian camp, which I deeply enjoyed. Through the believers I met there, I experienced how good and loving "+
  "they were. I really enjoyed singing worship songs in the mornings.",
  "Around the beginning of the 2020s, I occasionally attended Catholic Mass with my boyfriend at the time. I enjoyed going there, "+
  "although it did not yet have a direct impact on my faith. 3 years ago, during my second degree program, God gave me a Christian "+
  "roommate in the dorm. We became close and had several honest and difficult conversations about Christianity and faith. One day, "+
  "I wanted to hear her sing worship songs, so I went with her to Cornerstone Church. This is also where I met my future husband, Beni."+
  " After attending for about a month, on the 14th of January 2024, God called me to faith.",
  "I remember the day quite well. I arrived at church feeling grateful and peaceful, and from the very beginning, I felt that I was "+
  "being addressed. I didn't feel ignored or insignificant. Throughout the whole service, I felt that God was speaking to me, and I "+
  "ended up crying for the whole day. I didn't come to church expecting such an experience, but it felt as if something flooded over "+
  "me. I encountered God, and my heart was filled with a gratitude I had never experienced before. I didn't hesitate, I was just so "+
  "confident, I knew He was real, I knew He lives.",
  "My roommate and my family began to notice positive changes in my life. By God's grace, I became less selfish, much more patient, "+
  "caring and empathetic. He started changing my priorities and my habits. I began reading the Bible, I was no longer seeking worldly"+
  " pleasures in the same way, and God started to reveal the sins in my life that I hadn't recognized before.",
  "At the same time, my life didn't completely change overnight. About half a year later, the church summer camp had a profound "+
  "impact on my faith. Through the events of the camp, God taught me to trust Him more deeply. I started to pray, and I gave Jesus "+
  "control over my life. At this camp, Beni and I started getting closer and getting to know each other, to see if this relationship "+
  "could eventually lead to marriage.",
  "After that, I left for a semester in Denmark, which became a deeply positive time in my journey with God. "+
  "I found a local church, joined its Bible study, and on Fridays we went street evangelizing. During this time, "+
  "Beni and I stayed close, and he also came to see me twice, for a week each time. He proposed to me after I came home to Hungary "+
  "in January 2025. Soon after that, we got married, and we were expecting our first child.",
  "In such a short time, I became a wife and a mother, and I felt like a completely different person from the one I had been in "+
  "Denmark. Suddenly, my life has been filled with many new challenges, and marriage showed me the areas of my life where I still "+
  "have a lot of room to grow, with God's help and through prayer. I began to understand what it means to be a \"new believer.\" "+
  "I realized that my faith had not truly been tested yet. Of course, it felt easier to believe when my life was peaceful and without"+
  " many complications.",
  "Now, as a young mother, it has sometimes been difficult to put all of my feelings into words and bring them to God in prayer. "+
  "But I am determined not to let this new season of life draw me away from my relationship with the Father. "+
  "It means so much to me to call God my Father because of my relationship with my own father. "+
  "My parents divorced after primary school, so I grew up without having a father figure in my life and without missing him at all. "+
  "God is my Father, who is loving, trustworthy and whom I can rely on throughout eternity.",
  "As for my life today, even when I don't read the Bible every single day, I find myself praying silently and sitting alone on our "+ 
  "terrace in the evenings, speaking to the Father out loud and pouring out my heart. "+ 
  "I'm learning that I don't have to fix everything by myself. Even during conflicts in my marriage, despite my pride, "+
  "God has been giving me thoughts and perspectives that I wouldn't have had on my own. "+ 
  "More and more often, specific Bible verses come to my mind, reminding me to seek his guidance instead of relying on myself. "+
  "I can see how He is patiently working in my life, He's present in the small details, gently correcting me and helping me become "+
  "more loving and patient.",
]

export default function Bizonysagtetel() {
  return (
    <Container maxWidth="md" sx={{ py: 7 }}>
      <Typography variant="h1" sx={{ fontSize: { xs: '1.9rem', sm: '2.4rem' }, mb: 4 }}>
        Testimony
      </Typography>
      <PersonTabs labels={['Beni', 'Andi']}>
        {[
          <Testimony key="ferj" paragraphs={beniTestimony} />,

          <Testimony
            key="feleseg"
            paragraphs={andiTestimony}
          />,
        ]}
      </PersonTabs>
    </Container>
  )
}
