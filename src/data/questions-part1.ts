export interface HardQuestion {
  id: string;
  category: string;
  question: string;
  answer: string;
  passages: string;
  context: string;
  interpretations?: string;
  misunderstanding: string;
  application: string;
  followUp: string[];
}

export const QUESTIONS_PART1: HardQuestion[] = [
  {
    id: "forgive-without-cross",
    category: "The cross, forgiveness, and grace",
    question: "Does God forgive sin without the cross?",
    answer:
      "Scripture ties forgiveness to the death of Christ. Hebrews 9:22 says, \"without the shedding of blood there is no forgiveness.\" Romans 3:25 presents Jesus as the one whom God put forward as a sacrifice of atonement. God's grace is real, but it is grace that rests on the work of Christ.",
    passages: "Hebrews 9:22; Romans 3:23-26; Ephesians 1:7; Isaiah 53:5-6",
    context:
      "Hebrews was written to Jewish believers who knew the sacrificial system of the temple. The writer shows that the animal sacrifices pointed forward to a once-for-all sacrifice by Christ.",
    interpretations:
      "Christians agree that forgiveness rests on Christ's work. Some emphasise the penal substitution of Christ bearing God's judgment, while others emphasise the cross as a demonstration of God's love and a victory over sin and death. Both groups affirm that God does not overlook sin.",
    misunderstanding:
      "God simply overlooks sin because He is loving. Scripture shows God is both just and the one who justifies those who trust Jesus (Romans 3:26).",
    application:
      "When you feel unworthy to be forgiven, look to the cross rather than to your feelings. Confess your sin, trust Christ's sacrifice, and receive forgiveness as a gift.",
    followUp: [
      "Why would forgiveness without a just payment be a problem for a holy God?",
      "How does the cross show both God's justice and His love?",
      "What does it change in daily life to know that your forgiveness rests on Christ's work?",
    ],
  },
  {
    id: "why-jesus-died",
    category: "The cross, forgiveness, and grace",
    question: "Why did Jesus have to die?",
    answer:
      "Jesus died because sin separates people from God and its wages is death (Romans 6:23). Scripture says Christ died for us while we were still sinners (Romans 5:8) and that He suffered for sins once for all, the righteous for the unrighteous, to bring us to God (1 Peter 3:18). Jesus Himself said He came to give His life as a ransom for many (Mark 10:45).",
    passages: "Romans 5:8; Romans 6:23; 1 Peter 3:18; Mark 10:45; 1 Corinthians 15:3-4; Isaiah 53:4-6",
    context:
      "The Gospels present Jesus' death during the Passover, a festival that remembered God's deliverance through the sacrificed lamb (Exodus 12). John the Baptist called Him the Lamb of God who takes away the sin of the world (John 1:29).",
    interpretations:
      "Christians hold various accounts of the atonement, including substitution, ransom, victory over evil, and moral influence. Most agree that Jesus' death was necessary for salvation because of human sin and God's holiness.",
    misunderstanding:
      "Jesus died only as a martyr, an example of courage. Scripture presents His death as a sacrifice that deals with sin itself, not only as an example to follow.",
    application:
      "Because Christ died for us, we can live with gratitude and humility. We are also called to take up our cross and follow Him (Mark 8:34).",
    followUp: [
      "What does the Passover background add to our understanding of the cross?",
      "How does 'ransom' in Mark 10:45 help explain what Jesus did?",
      "Why is it important that Jesus' death is connected to our sin and not only to a tragic event?",
    ],
  },
  {
    id: "money-for-miracle",
    category: "Money, giving, and prosperity",
    question: "Should Christians give money to receive a miracle?",
    answer:
      "No. Scripture never teaches that God's gifts are bought with money. When Simon the sorcerer tried to purchase the power of the Holy Spirit, Peter rebuked him: \"May your money perish with you, because you thought you could buy the gift of God with money\" (Acts 8:20). God's gifts are received by grace and faith, not sold for a price.",
    passages: "Acts 8:9-24; 2 Kings 5:15-16; Matthew 6:19-21; Isaiah 55:1; Romans 11:6",
    context:
      "In Acts 8, Simon wanted to buy spiritual power. In 2 Kings 5, the prophet Elisha refused payment from Naaman, who was healed by God's power. Gehazi, who took money in Elisha's name, was judged.",
    interpretations:
      "Christians agree that generosity is a fruit of faith and that God does provide for those who trust Him. Some believe giving can be an act of faith, but they agree that it cannot be a transaction that obligates God.",
    misunderstanding:
      "Giving a larger offering will guarantee a blessing or healing. Scripture presents giving as an act of trust and worship, not as a payment that forces God to act.",
    application:
      "Give generously and cheerfully as an act of worship and to support the needs of others. Be wary of any teacher who presents a 'seed' or 'miracle money' as a condition for God's favour.",
    followUp: [
      "How did Peter's response to Simon protect the gospel from being traded for money?",
      "What is the difference between giving as worship and giving as a purchase?",
      "How should a church respond to appeals that promise blessings in exchange for money?",
    ],
  },
  {
    id: "every-prophecy-trusted",
    category: "Prophecy and spiritual gifts",
    question: "Can every prophecy be trusted?",
    answer:
      "No. Scripture expects prophecy to be tested. Deuteronomy 18:20-22 says a prophet who speaks in the Lord's name and whose words do not come true is not from the Lord. Paul also taught that prophecy must be weighed rather than accepted automatically (1 Thessalonians 5:20-21). Even a prophecy that seems to come true must still agree with God's revealed Word (Deuteronomy 13:1-3).",
    passages: "Deuteronomy 13:1-4; Deuteronomy 18:20-22; 1 Thessalonians 5:20-21; 1 John 4:1; Matthew 7:15-20",
    context:
      "Israel was surrounded by nations that consulted prophets and diviners. God gave tests so His people would not follow false prophets. The New Testament continues this call to discernment.",
    interpretations:
      "Christians differ on whether prophecy in the church today is equal to Scripture. Most agree that any prophetic word must be tested against Scripture, must honour Christ, and must be humble and accountable.",
    misunderstanding:
      "Any message introduced with 'Thus says the Lord' is from God. Scripture tells believers to examine all messages, especially those claiming divine authority.",
    application:
      "Test every prophetic word by the Bible, by its fruit, and by the character of the speaker. Be slow to pass on dramatic messages before you check them.",
    followUp: [
      "Why does Deuteronomy 13 say a sign coming true is not enough by itself?",
      "What are the marks of a trustworthy word in 1 John 4?",
      "How should a mature believer respond to a prophecy that contradicts Scripture?",
    ],
  },
  {
    id: "holy-spirit-trinity",
    category: "God the Father, Jesus Christ, and the Holy Spirit",
    question: "Who is the Holy Spirit, and how does He relate to the Father and the Son?",
    answer:
      "The Bible presents the Holy Spirit as a person who has the characteristics of God. He teaches, guides, grieves and can be lied to (John 14:26; Ephesians 4:30; Acts 5:3-4). Jesus commanded baptism in the name of the Father, the Son and the Holy Spirit (Matthew 28:19). The Father, Son and Spirit are one God, and each is distinct in personal relationship.",
    passages: "Genesis 1:2; John 14:16-17, 26; John 15:26; Acts 5:3-4; Matthew 28:19; 2 Corinthians 13:14",
    context:
      "The Old Testament speaks of God's Spirit at creation and in prophets. The New Testament reveals Him more fully as the Spirit of Christ, sent by the Father to dwell in believers.",
    interpretations:
      "Christians fully affirm the Trinity, though theologians explain it in different ways. The Bible does not use the word 'Trinity', but it shows one God revealed as Father, Son and Holy Spirit.",
    misunderstanding:
      "The Holy Spirit is only a force or influence of God. Scripture speaks of Him in personal terms and assigns Him acts that only a person can do.",
    application:
      "Ask the Holy Spirit to help you understand Scripture and to produce His fruit in your life (Galatians 5:22-23). Pray with confidence that the Spirit helps our weakness (Romans 8:26).",
    followUp: [
      "What personal actions does the Spirit perform in John 14 and 16?",
      "Why is Acts 5:3-4 important for understanding the Spirit?",
      "How does the Trinity shape the way we pray?",
    ],
  },
  {
    id: "lose-salvation",
    category: "Salvation and eternal life",
    question: "Can a Christian lose their salvation?",
    answer:
      "Scripture gives great assurance: Jesus says His sheep shall never perish and no one will snatch them from His hand (John 10:28-29). Romans 8:38-39 says nothing can separate believers from the love of God. Yet Hebrews also gives serious warnings against falling away (Hebrews 6:4-6; 10:26-27). Christians must hold assurance and warning together.",
    passages: "John 10:27-29; Romans 8:38-39; Philippians 1:6; 1 John 2:19; Hebrews 6:4-6; Hebrews 10:26-27; Galatians 5:4",
    context:
      "Hebrews was written to believers tempted to return to the old system of sacrifice and to reject Christ. The warnings address a serious danger of apostasy, not a minor failure.",
    interpretations:
      "Christians differ. Some hold the perseverance of the saints: true believers will endure to the end because God keeps them, and those who fall away never truly belonged (1 John 2:19). Others hold a conditional security view: believers are secure in Christ but must continue in faith, and the warnings are real. Both groups take the Bible seriously and affirm that salvation is God's work.",
    misunderstanding:
      "Once someone prays a prayer, nothing they do can affect their standing; or, conversely, a single sin instantly cancels salvation. Scripture teaches God's faithfulness and calls believers to persevere in faith.",
    application:
      "Rest in God's promise and keep walking with Him. Do not presume on grace, and do not despair; confess sin and remain in Christ.",
    followUp: [
      "What does 1 John 2:19 suggest about those who left the church?",
      "How do John 10 and Hebrews 6 fit together?",
      "Why is assurance important for a believer's peace and holiness?",
    ],
  },
  {
    id: "righteous-suffer",
    category: "Suffering and the goodness of God",
    question: "Why do righteous people suffer?",
    answer:
      "The Bible does not give a single simple answer, but it shows that suffering is not always a punishment for personal sin. Jesus rejected the idea that a man was born blind because of his sin or his parents' sin, and said the works of God would be displayed (John 9:1-3). Paul taught that present suffering is not worth comparing with the glory to come (Romans 8:18), and that God works through trials to produce perseverance and character (Romans 5:3-5; James 1:2-4).",
    passages: "Job 1-2; John 9:1-3; Romans 5:3-5; Romans 8:18; 2 Corinthians 4:17; 1 Peter 4:12-13; Hebrews 12:5-11",
    context:
      "The book of Job shows that God's people can suffer without being judged for specific sins. God does not explain everything to Job, but He reveals Himself as wise and sovereign.",
    interpretations:
      "Christians agree that suffering is real and that God is good, but they explain its purposes differently. Some stress God's discipline and training (Hebrews 12), others stress spiritual warfare, others God's mysterious purposes, and others the fallen world. Scripture encourages trust in God in all cases.",
    misunderstanding:
      "Every hardship is a sign of God's anger or of a lack of faith. Job's friends made this mistake, and God rebuked them (Job 42:7).",
    application:
      "When suffering comes, bring your lament honestly to God, as the Psalms do. Look for God's presence and the hope of resurrection, and comfort others as you have been comforted (2 Corinthians 1:3-4).",
    followUp: [
      "What did God say to Job's friends at the end of the book?",
      "How does Romans 5 describe the purpose of suffering?",
      "How can you comfort someone in suffering without giving them simplistic explanations?",
    ],
  },
  {
    id: "repentance-vs-regret",
    category: "Sin, repentance, holiness, and temptation",
    question: "What is the difference between repentance and regret?",
    answer:
      "Regret is sorrow about the consequences of sin, or about being caught. Repentance is a change of mind and direction that turns from sin to God. Paul wrote that godly sorrow brings repentance that leads to salvation and leaves no regret, but worldly sorrow brings death (2 Corinthians 7:10). Judas felt remorse but did not turn to God and ended in despair (Matthew 27:3-5).",
    passages: "2 Corinthians 7:8-11; Matthew 27:3-5; Luke 15:17-20; Acts 3:19; Psalm 51:1-4, 17",
    context:
      "The Greek word metanoia means a change of mind and direction. John the Baptist and Jesus both called people to repent (Matthew 3:2; 4:17).",
    misunderstanding:
      "Tears or feeling bad are the same as repentance. Scripture looks for a turning from sin toward God and a changed life.",
    application:
      "Examine your heart after you sin. Confess specifically, turn from the sin, seek restitution where possible, and ask God for the strength to walk differently.",
    followUp: [
      "How did the prodigal son's repentance show itself in action (Luke 15)?",
      "Why did Judas's sorrow fail to save him?",
      "What practical steps show that repentance is real?",
    ],
  },
  {
    id: "prosperity-teaching",
    category: "Money, giving, and prosperity",
    question: "What does the Bible teach about prosperity?",
    answer:
      "The Bible does not condemn wealth in itself. Some faithful people, including Abraham, Job and Solomon, were wealthy, and God is the source of the ability to produce wealth (Deuteronomy 8:18). But Jesus and the apostles warned against loving money and trusting in riches (1 Timothy 6:10; Luke 12:15). Paul taught contentment in every circumstance (Philippians 4:11-13) and called the rich to put their hope in God, not in wealth (1 Timothy 6:17-19).",
    passages: "Deuteronomy 8:18; Matthew 6:19-21, 33; Luke 12:15; 1 Timothy 6:6-10, 17-19; Philippians 4:11-13; Hebrews 13:5",
    context:
      "Some teachers use 3 John 2 ('prosper and be in good health') to promise guaranteed wealth. In the letter, it is a greeting of blessing, not a formula for material gain. Paul's understanding of contentment is more reliable.",
    interpretations:
      "Christians differ on how much wealth is appropriate and how to practise generosity. Most agree that the Bible calls believers to honest work, generosity to the needy, and trust in God rather than money.",
    misunderstanding:
      "God always wants His people to be rich, and faith guarantees wealth. Scripture warns about the danger of riches and promises God's provision, not a guaranteed luxury.",
    application:
      "Seek God's kingdom first, work diligently, give generously, and live with contentment. Be cautious about any teaching that makes money the measure of faith.",
    followUp: [
      "What is the difference between God providing and God promising wealth?",
      "Why did Paul link contentment with godliness in 1 Timothy 6?",
      "How can a church teach about money in a way that is honest and encouraging?",
    ],
  },
  {
    id: "questionable-preacher",
    category: "The Church and Christian leadership",
    question: "How should Christians respond when a preacher teaches something questionable?",
    answer:
      "Christians should examine the teaching against Scripture, as the Bereans did. Luke says they received the message eagerly but examined the Scriptures every day to see if what Paul taught was true (Acts 17:11). Paul warned that even an angel preaching a different gospel must be rejected (Galatians 1:8), and Jesus warned about wolves in sheep's clothing who must be recognised by their fruit (Matthew 7:15-20).",
    passages: "Acts 17:10-11; Galatians 1:8-9; Matthew 7:15-20; 1 Thessalonians 5:21; 1 John 4:1; 2 John 9-11; Jude 3",
    context:
      "The early church faced teachers who distorted the gospel. The apostles did not expect blind obedience; they expected believers to test teaching against the apostolic Scriptures.",
    misunderstanding:
      "A famous or popular preacher cannot be questioned. Scripture teaches that every teacher is accountable to God's Word.",
    application:
      "Check the teaching in your own Bible, speak with a respected pastor, and where needed, respectfully ask questions or leave the church. Pray for teachers and speak truth in love (Ephesians 4:15).",
    followUp: [
      "What does it mean that the Bereans were 'of noble character' in Acts 17?",
      "How do you test teaching without becoming arrogant or divisive?",
      "What signs in Matthew 7 help identify false teaching?",
    ],
  },
];
