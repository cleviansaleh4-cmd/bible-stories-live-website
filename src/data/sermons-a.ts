export interface SermonPoint {
  heading: string;
  explanation: string;
  scriptures: string[];
}

export interface Sermon {
  id: string;
  title: string;
  duration: string;
  format: "devotional" | "teaching" | "sermon" | "study";
  audience: string;
  topic: string;
  mainText: string;
  theme: string;
  introduction: string;
  context: string;
  points: SermonPoint[];
  illustration: string;
  applications: string[];
  discussion: string[];
  conclusion: string;
  invitation?: string;
  prayer: string;
}

export const SERMONS_A: Sermon[] = [
  {
    id: "gospel-genesis-revelation",
    title: "The Gospel from Genesis to Revelation",
    duration: "30 minutes",
    format: "sermon",
    audience: "Everyone, including new believers and evangelists",
    topic: "Repentance and salvation",
    mainText: "John 3:16",
    theme: "God's one plan of salvation runs through the whole Bible and is fulfilled in Jesus Christ.",
    introduction:
      "Many people think the Bible is a collection of separate stories. Yet from the first pages of Genesis to the last pages of Revelation, one story unfolds: God rescues people through His Son. Today we will see how the Gospel runs through Scripture and how it calls every person to respond.",
    context:
      "John 3 records Jesus' night conversation with Nicodemus, a respected Pharisee and teacher of Israel. Jesus told him that he must be born again. The verse 16 summarises the heart of God's saving purpose. It was written to people who knew the Old Testament promises and who needed to see that God's love had reached the world through the Son.",
    points: [
      {
        heading: "1. The problem: all have sinned",
        explanation:
          "The Bible shows that humanity is separated from God by sin. Genesis 3 shows the first disobedience, and Romans 3 states the universal condition. Sin is not only a mistake; it is a rebellion that brings death. The Gospel begins by telling the truth about our need.",
        scriptures: ["Romans 3:23 (KJV): \"For all have sinned, and come short of the glory of God;\"", "Genesis 3:6-8"],
      },
      {
        heading: "2. The promise: God announces a Saviour",
        explanation:
          "Even in judgment, God promised that the woman's seed would crush the serpent's head. Throughout the Old Testament, sacrifices, prophets and kings pointed forward to a coming Deliverer. The Gospel was not an afterthought; God planned it from the beginning.",
        scriptures: ["Genesis 3:15", "Isaiah 53:5-6", "Micah 5:2"],
      },
      {
        heading: "3. The provision: God gave His only Son",
        explanation:
          "John 3:16 says that God gave His Son. The initiative belongs to God. Jesus is not merely a teacher who shows the way; He is the one who bears the penalty for sin and reconciles us to God. The cross and resurrection are the center of the Gospel.",
        scriptures: ["John 3:16 (KJV): \"For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.\"", "1 Corinthians 15:3-4"],
      },
      {
        heading: "4. The response: repent and believe",
        explanation:
          "Salvation is received through faith in Christ. Repentance means turning from sin toward God. Peter's message at Pentecost calls people to repent and be baptised for the forgiveness of sins. Faith and repentance go together; we trust Christ and turn from our old way of life.",
        scriptures: ["Acts 2:38 (KJV): \"Repent, and be baptized every one of you in the name of Jesus Christ for the remission of sins...\"", "Acts 16:31"],
      },
      {
        heading: "5. The promise fulfilled: eternal life and the new creation",
        explanation:
          "The Bible ends with the Gospel completed. Revelation shows the Lamb who was slain now reigning, and God making all things new. Those who trust Christ have eternal life now and a secure hope for the future.",
        scriptures: ["Revelation 21:1-5", "Romans 6:23"],
      },
    ],
    illustration:
      "Imagine a long rope being passed from hand to hand across the centuries. Adam, Abraham, Moses, David, the prophets and the apostles each held a part of it. At the end, the rope is tied at the cross, where the promise is fulfilled. The same rope is offered to you today.",
    applications: [
      "Read the Bible as one story with Jesus at its center, not as separate stories.",
      "Share the whole Gospel: our sin, God's love, Christ's death and resurrection, and our response.",
      "Examine your own life: Have you repented and trusted Christ alone for salvation?",
    ],
    discussion: [
      "Why is it important to know that the Gospel is found throughout the Bible?",
      "What does Romans 3:23 tell us about the human condition?",
      "How is repentance different from simply feeling sorry?",
      "How would you explain John 3:16 to a friend who has never read the Bible?",
    ],
    conclusion:
      "God so loved the world. He did not wait for us to climb toward Him; He sent His Son to come down to us. The Gospel is not a suggestion. It is a message of rescue from sin, death and judgment, offered freely to all who believe.",
    invitation:
      "If you have never placed your trust in Jesus Christ, today you can turn from your sin and ask Him to save you. Speak to a pastor, a church leader or a trusted believer about what it means to follow Christ.",
    prayer:
      "Heavenly Father, thank You for loving the world and giving Your only Son. Forgive our sins and draw us to Christ. Help us repent, believe and follow Him all our days. Amen.",
  },
  {
    id: "faith-that-obeys",
    title: "Faith That Obeys",
    duration: "15 minutes",
    format: "teaching",
    audience: "Believers, youth groups and discipleship classes",
    topic: "Faith and obedience",
    mainText: "James 2:14-26",
    theme: "Real faith produces obedience; a faith without works is not living faith.",
    introduction:
      "Some people say, \"I believe in God, so my life is fine.\" James asks a sharp question: can faith that never changes behaviour save anyone? Let us look at what he is teaching and what he is not teaching.",
    context:
      "James wrote to Jewish Christians who were scattered and facing trials. Some were treating faith as a matter of words only. James does not contradict Paul's teaching that we are saved by grace through faith. He shows that genuine faith always shows itself in obedient love.",
    points: [
      {
        heading: "1. Words without deeds are empty",
        explanation:
          "James gives the example of a brother or sister who lacks food and clothing. Saying \"go in peace\" without helping them is useless. Faith is not only what we say; it is what we do with the needs God puts before us.",
        scriptures: ["James 2:15-16 (KJV): \"If a brother or sister be naked, and destitute of daily food, And one of you say unto them, Depart in peace, be ye warmed and filled; notwithstanding ye give them not those things which are needful to the body; what doth it profit?\""],
      },
      {
        heading: "2. Faith without works is dead",
        explanation:
          "James states that faith that is alone, without works, is dead. A dead thing has no life; it does not move. A living faith naturally produces obedience, because it trusts God enough to obey Him.",
        scriptures: ["James 2:17 (KJV): \"Even so faith, if it hath not works, is dead, being alone.\""],
      },
      {
        heading: "3. Faith is shown by works",
        explanation:
          "James challenges the claim that someone can have faith without works. Works do not earn salvation; they reveal genuine faith. Abraham offered Isaac, and his faith was made complete by his actions. Rahab acted on her faith when she protected the spies.",
        scriptures: ["James 2:18 (KJV): \"...shew me thy faith without thy works, and I will shew thee my faith by my works.\"", "James 2:21-25"],
      },
      {
        heading: "4. The examples of Abraham and Rahab",
        explanation:
          "Abraham believed God and was counted righteous long before the sacrifice of Isaac. Rahab's act of hospitality showed that she trusted the God of Israel. Their examples show that real faith trusts God enough to act on His word.",
        scriptures: ["Genesis 15:6", "Hebrews 11:31", "James 2:26 (KJV): \"For as the body without the spirit is dead, so faith without works is dead also.\""],
      },
    ],
    illustration:
      "A fire that gives light but no heat is not a fire at all in the way we expect. Faith that never warms the heart, changes the habits or moves the hands is not the living faith the Bible describes.",
    applications: [
      "Ask God each morning for one specific act of obedience to carry out that day.",
      "Do not use grace as an excuse to stay disobedient. Grace teaches us to say no to ungodliness.",
      "Help a person in real need this week, and let your faith be seen in action.",
    ],
    discussion: [
      "What does James mean by \"faith without works is dead\"?",
      "How does James' teaching fit with Ephesians 2:8-9?",
      "Where do you see faith producing action in your life right now?",
    ],
    conclusion:
      "We are not saved by our works, but we are saved to good works. A living faith trusts Christ and walks in obedience to Him.",
    prayer:
      "Lord, let our faith be more than words. Give us the courage to obey You and the compassion to help those in need. Amen.",
  },
];
