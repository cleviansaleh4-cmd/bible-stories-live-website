export interface Devotional {
  id: string;
  verseRef: string;
  verse: string; // Quoted from the Bible (KJV, public domain)
  devotional: string; // Teaching based on the verse; not a Bible quotation
  reflection: string;
  action: string;
  prayer: string;
}

export const DEVOTIONALS: Devotional[] = [
  {
    id: "d1",
    verseRef: "Psalm 119:105",
    verse: "Thy word is a lamp unto my feet, and a light unto my path. (KJV)",
    devotional:
      "Scripture guides us one step at a time. We do not need to see the whole road to walk faithfully today.",
    reflection: "Which part of God's Word do I need to read carefully today?",
    action: "Read one passage slowly and write down one thing it teaches about God.",
    prayer: "Lord, make Your Word a lamp to my feet. Help me walk in it today.",
  },
  {
    id: "d2",
    verseRef: "Romans 8:28",
    verse: "And we know that all things work together for good to them that love God, to them who are the called according to his purpose. (KJV)",
    devotional:
      "God is working in every season, including the hard ones. This verse does not say every event is good, but that God brings good out of His people's lives.",
    reflection: "Where do I need to trust that God is working, even if I cannot see it yet?",
    action: "Write down one difficulty you are facing and one way God has been faithful to you before.",
    prayer: "Father, help me trust Your purpose when I cannot understand my circumstances.",
  },
  {
    id: "d3",
    verseRef: "Philippians 4:6-7",
    verse: "Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God. (KJV, Philippians 4:6)",
    devotional:
      "Worry asks, 'What if?' Prayer brings our requests to the God who already knows and holds the answer. Thanksgiving keeps our hearts from forgetting His faithfulness.",
    reflection: "What worry am I still carrying that I have not yet brought to God in prayer?",
    action: "Pray about that worry now, then give thanks for one specific gift from God.",
    prayer: "Lord, I bring You my anxious thoughts. Guard my heart and mind in Christ Jesus.",
  },
  {
    id: "d4",
    verseRef: "Micah 6:8",
    verse: "He hath shewed thee, O man, what is good; and what doth the LORD require of thee, but to do justly, and to love mercy, and to walk humbly with thy God? (KJV)",
    devotional:
      "God does not ask for complicated religion. He asks for justice, mercy and humble faithfulness in ordinary daily life.",
    reflection: "In which relationship or responsibility can I show justice and mercy this week?",
    action: "Do one practical act of kindness for someone who cannot repay you.",
    prayer: "Lord, make me just, merciful and humble before You today.",
  },
  {
    id: "d5",
    verseRef: "John 15:5",
    verse: "I am the vine, ye are the branches: He that abideth in me, and I in him, the same bringeth forth much fruit: for without me ye can do nothing. (KJV)",
    devotional:
      "Fruitfulness does not come from effort alone. It comes from staying connected to Jesus, receiving life from Him every day.",
    reflection: "How often do I try to serve or grow without first staying close to Christ?",
    action: "Spend five minutes today simply sitting with Jesus in prayer before starting your work.",
    prayer: "Jesus, keep me connected to You. Let my life bear fruit for Your glory.",
  },
  {
    id: "d6",
    verseRef: "Isaiah 41:10",
    verse: "Fear thou not; for I am with thee: be not dismayed; for I am thy God: I will strengthen thee; yea, I will help thee; yea, I will uphold thee with the right hand of my righteousness. (KJV)",
    devotional:
      "Fear tells us we are alone. God says He is present, strengthening and holding His people. The promise rests on God's faithfulness, not our courage.",
    reflection: "What fear is speaking loudest to me right now?",
    action: "Say this verse aloud slowly, then share it with someone who needs encouragement.",
    prayer: "Lord, You are with me. Strengthen me and hold me in Your righteous right hand.",
  },
  {
    id: "d7",
    verseRef: "2 Timothy 3:16-17",
    verse: "All scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for correction, for instruction in righteousness: That the man of God may be perfect, thoroughly furnished unto all good works. (KJV)",
    devotional:
      "Scripture is not only for information. It teaches us what is true, shows us where we are wrong, restores us, and equips us to do good.",
    reflection: "Am I reading the Bible to be changed, or only to gather information?",
    action: "Read one chapter today and ask: what should I believe, correct, or do because of it?",
    prayer: "Lord, teach me Your Word and make me ready for every good work.",
  },
];

export const devotionalForToday = (): Devotional => {
  const start = new Date(new Date().getFullYear(), 0, 0).getTime();
  const day = Math.floor((Date.now() - start) / 86_400_000);
  return DEVOTIONALS[day % DEVOTIONALS.length];
};
