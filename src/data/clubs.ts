interface Club {
  id: string;
  title: string;
  highlightedWord: string;
  description: string;
  image: string;
  termHighlights: TermHighlight[];
  primaryColor: string;
  secondaryColor: string;
  termFinale: string;
  days: string[];
  price: number;
}

interface TermHighlight {
  title: string;
  description: string;
}

export let CLUBS: Club[] = [
  {
    id: "bushcraft",
    title: "School 1",
    highlightedWord: "Bushcraft",
    description:
      "Calling all young adventurers and nature lovers! Get ready for a journey of a lifetime as we dive headfirst into the heart of the forest. \"Bushcraft Adventures\" isn't your average after-school club – it's a thrilling wilderness extravaganza that will transform you into a trailblazing explorer. Imagine building your own forest hideaways, mastering the art of orienteering, and cooking up mouthwatering campfire feasts. From tracking wildlife to navigating like a pro, this is where you'll discover the secrets of the wild, make lifelong friends, and ignite your love for nature like never before. Parents, prepare for your child to become a confident, capable, and wild-at-heart adventurer. Kids, get ready to uncover, create, and explore in the most exciting way possible. Enrol today, and let the forest fun begin!",
    image: "/clubs/bushcraft.jpg",
    termHighlights: [
      {
        title: "Shelter Building",
        description:
          "Over the course of the term, students will master the art of constructing wilderness shelters. They'll learn how to create sturdy, weather-resistant abodes using natural materials found in the forest. From cosy leafy lean-tos to spacious debris huts, our young adventurers will discover the secrets of crafting safe and comfortable sanctuaries in the wild.",
      },
      {
        title: "Firecraft",
        description:
          "Fire is not only a source of warmth but also a vital survival skill. Our students will become fire-making experts, learning various techniques like fire-by-friction and fire-by-spark. They'll practice fire safety and responsibility while mastering the ancient art of kindling flames from the forest's resources. (*site dependent)",
      },
      {
        title: "Wild Edibles and Foraging",
        description:
          "Nature provides an abundance of edible plants and resources. We'll teach kids how to identify safe, nutritious wild edibles and how to sustainably harvest them. They'll discover the thrill of finding food in the forest and gain a deeper appreciation for the environment.",
      },
      {
        title: "Navigation and Orienteering",
        description:
          "In the world of bushcraft, knowing where you are is crucial. Students will learn how to use maps, compasses, and natural landmarks for navigation. They'll embark on treasure hunts and orienteering challenges, sharpening their outdoor navigation skills.",
      },
      {
        title: "Outdoor Cooking",
        description:
          "Cooking over an open fire is a memorable experience. Our young adventurers will prepare delicious meals using bushcraft techniques. They'll cook with cast-iron pans, make damper bread, and enjoy campfire cuisine they've prepared themselves. (*site dependent)",
      },
      {
        title: "Wildlife Tracking",
        description:
          "Uncover the secrets of the forest's inhabitants through wildlife tracking. Students will learn to identify animal prints, signs, and behaviors. They'll embark on tracking expeditions, honing their observation and detective skills while connecting with the natural world.",
      },
      {
        title: "Knot Tying and Campcraft",
        description:
          "Knots are essential in bushcraft. Kids will master various knots and lashings for shelter construction, crafting tools, and more. They'll also learn campcraft skills like setting up camp, purifying water, and Leave No Trace principles.",
      },
      {
        title: "Nature Awareness",
        description:
          "Encourage mindfulness and awareness of the environment. Students will engage in sensory activities, sit-spots, and nature journaling to connect deeply with the forest and its inhabitants.",
      },
    ],
    termFinale:
      "At the end of the term, our young bushcraft experts will put their skills to the test in a wilderness adventure. They'll navigate to a chosen location, build their shelters, and cook their meals over open fires. It's a chance to showcase their newfound abilities and create lasting memories of their bushcraft journey.<br /><br />Join us for a term of thrilling outdoor education, where kids will become confident and skilled in the art of bushcraft, all while fostering a deep appreciation for the natural world. Enrol your child today and let them embark on a journey of discovery, adventure, and self-reliance in the heart of the forest!",
    primaryColor: "#693a2b",
    secondaryColor: "#FFA88C",
    days: ["Monday at 6PM"],
    price: 289,
  },
  {
    id: "school2",
    title: "School 1",
    highlightedWord: "Bushcraft",
    description:
      "Calling all young adventurers and nature lovers! Get ready for a journey of a lifetime as we dive headfirst into the heart of the forest. \"Bushcraft Adventures\" isn't your average after-school club – it's a thrilling wilderness extravaganza that will transform you into a trailblazing explorer. Imagine building your own forest hideaways, mastering the art of orienteering, and cooking up mouthwatering campfire feasts. From tracking wildlife to navigating like a pro, this is where you'll discover the secrets of the wild, make lifelong friends, and ignite your love for nature like never before. Parents, prepare for your child to become a confident, capable, and wild-at-heart adventurer. Kids, get ready to uncover, create, and explore in the most exciting way possible. Enrol today, and let the forest fun begin!",
    image: "/clubs/bushcraft.jpg",
    termHighlights: [
      {
        title: "Shelter Building",
        description:
          "Over the course of the term, students will master the art of constructing wilderness shelters. They'll learn how to create sturdy, weather-resistant abodes using natural materials found in the forest. From cosy leafy lean-tos to spacious debris huts, our young adventurers will discover the secrets of crafting safe and comfortable sanctuaries in the wild.",
      },
      {
        title: "Firecraft",
        description:
          "Fire is not only a source of warmth but also a vital survival skill. Our students will become fire-making experts, learning various techniques like fire-by-friction and fire-by-spark. They'll practice fire safety and responsibility while mastering the ancient art of kindling flames from the forest's resources. (*site dependent)",
      },
      {
        title: "Wild Edibles and Foraging",
        description:
          "Nature provides an abundance of edible plants and resources. We'll teach kids how to identify safe, nutritious wild edibles and how to sustainably harvest them. They'll discover the thrill of finding food in the forest and gain a deeper appreciation for the environment.",
      },
      {
        title: "Navigation and Orienteering",
        description:
          "In the world of bushcraft, knowing where you are is crucial. Students will learn how to use maps, compasses, and natural landmarks for navigation. They'll embark on treasure hunts and orienteering challenges, sharpening their outdoor navigation skills.",
      },
      {
        title: "Outdoor Cooking",
        description:
          "Cooking over an open fire is a memorable experience. Our young adventurers will prepare delicious meals using bushcraft techniques. They'll cook with cast-iron pans, make damper bread, and enjoy campfire cuisine they've prepared themselves. (*site dependent)",
      },
      {
        title: "Wildlife Tracking",
        description:
          "Uncover the secrets of the forest's inhabitants through wildlife tracking. Students will learn to identify animal prints, signs, and behaviors. They'll embark on tracking expeditions, honing their observation and detective skills while connecting with the natural world.",
      },
      {
        title: "Knot Tying and Campcraft",
        description:
          "Knots are essential in bushcraft. Kids will master various knots and lashings for shelter construction, crafting tools, and more. They'll also learn campcraft skills like setting up camp, purifying water, and Leave No Trace principles.",
      },
      {
        title: "Nature Awareness",
        description:
          "Encourage mindfulness and awareness of the environment. Students will engage in sensory activities, sit-spots, and nature journaling to connect deeply with the forest and its inhabitants.",
      },
    ],
    termFinale:
      "At the end of the term, our young bushcraft experts will put their skills to the test in a wilderness adventure. They'll navigate to a chosen location, build their shelters, and cook their meals over open fires. It's a chance to showcase their newfound abilities and create lasting memories of their bushcraft journey.<br /><br />Join us for a term of thrilling outdoor education, where kids will become confident and skilled in the art of bushcraft, all while fostering a deep appreciation for the natural world. Enrol your child today and let them embark on a journey of discovery, adventure, and self-reliance in the heart of the forest!",
    primaryColor: "#693a2b",
    secondaryColor: "#FFA88C",
    days: ["Monday at 6PM"],
    price: 289,
  },
  {
    id: "school3",
    title: "School 1",
    highlightedWord: "Bushcraft",
    description:
      "Calling all young adventurers and nature lovers! Get ready for a journey of a lifetime as we dive headfirst into the heart of the forest. \"Bushcraft Adventures\" isn't your average after-school club – it's a thrilling wilderness extravaganza that will transform you into a trailblazing explorer. Imagine building your own forest hideaways, mastering the art of orienteering, and cooking up mouthwatering campfire feasts. From tracking wildlife to navigating like a pro, this is where you'll discover the secrets of the wild, make lifelong friends, and ignite your love for nature like never before. Parents, prepare for your child to become a confident, capable, and wild-at-heart adventurer. Kids, get ready to uncover, create, and explore in the most exciting way possible. Enrol today, and let the forest fun begin!",
    image: "/clubs/bushcraft.jpg",
    termHighlights: [
      {
        title: "Shelter Building",
        description:
          "Over the course of the term, students will master the art of constructing wilderness shelters. They'll learn how to create sturdy, weather-resistant abodes using natural materials found in the forest. From cosy leafy lean-tos to spacious debris huts, our young adventurers will discover the secrets of crafting safe and comfortable sanctuaries in the wild.",
      },
      {
        title: "Firecraft",
        description:
          "Fire is not only a source of warmth but also a vital survival skill. Our students will become fire-making experts, learning various techniques like fire-by-friction and fire-by-spark. They'll practice fire safety and responsibility while mastering the ancient art of kindling flames from the forest's resources. (*site dependent)",
      },
      {
        title: "Wild Edibles and Foraging",
        description:
          "Nature provides an abundance of edible plants and resources. We'll teach kids how to identify safe, nutritious wild edibles and how to sustainably harvest them. They'll discover the thrill of finding food in the forest and gain a deeper appreciation for the environment.",
      },
      {
        title: "Navigation and Orienteering",
        description:
          "In the world of bushcraft, knowing where you are is crucial. Students will learn how to use maps, compasses, and natural landmarks for navigation. They'll embark on treasure hunts and orienteering challenges, sharpening their outdoor navigation skills.",
      },
      {
        title: "Outdoor Cooking",
        description:
          "Cooking over an open fire is a memorable experience. Our young adventurers will prepare delicious meals using bushcraft techniques. They'll cook with cast-iron pans, make damper bread, and enjoy campfire cuisine they've prepared themselves. (*site dependent)",
      },
      {
        title: "Wildlife Tracking",
        description:
          "Uncover the secrets of the forest's inhabitants through wildlife tracking. Students will learn to identify animal prints, signs, and behaviors. They'll embark on tracking expeditions, honing their observation and detective skills while connecting with the natural world.",
      },
      {
        title: "Knot Tying and Campcraft",
        description:
          "Knots are essential in bushcraft. Kids will master various knots and lashings for shelter construction, crafting tools, and more. They'll also learn campcraft skills like setting up camp, purifying water, and Leave No Trace principles.",
      },
      {
        title: "Nature Awareness",
        description:
          "Encourage mindfulness and awareness of the environment. Students will engage in sensory activities, sit-spots, and nature journaling to connect deeply with the forest and its inhabitants.",
      },
    ],
    termFinale:
      "At the end of the term, our young bushcraft experts will put their skills to the test in a wilderness adventure. They'll navigate to a chosen location, build their shelters, and cook their meals over open fires. It's a chance to showcase their newfound abilities and create lasting memories of their bushcraft journey.<br /><br />Join us for a term of thrilling outdoor education, where kids will become confident and skilled in the art of bushcraft, all while fostering a deep appreciation for the natural world. Enrol your child today and let them embark on a journey of discovery, adventure, and self-reliance in the heart of the forest!",
    primaryColor: "#693a2b",
    secondaryColor: "#FFA88C",
    days: ["Monday at 6PM"],
    price: 289,
  },
  {
    id: "school4",
    title: "School 1",
    highlightedWord: "Bushcraft",
    description:
      "Calling all young adventurers and nature lovers! Get ready for a journey of a lifetime as we dive headfirst into the heart of the forest. \"Bushcraft Adventures\" isn't your average after-school club – it's a thrilling wilderness extravaganza that will transform you into a trailblazing explorer. Imagine building your own forest hideaways, mastering the art of orienteering, and cooking up mouthwatering campfire feasts. From tracking wildlife to navigating like a pro, this is where you'll discover the secrets of the wild, make lifelong friends, and ignite your love for nature like never before. Parents, prepare for your child to become a confident, capable, and wild-at-heart adventurer. Kids, get ready to uncover, create, and explore in the most exciting way possible. Enrol today, and let the forest fun begin!",
    image: "/clubs/bushcraft.jpg",
    termHighlights: [
      {
        title: "Shelter Building",
        description:
          "Over the course of the term, students will master the art of constructing wilderness shelters. They'll learn how to create sturdy, weather-resistant abodes using natural materials found in the forest. From cosy leafy lean-tos to spacious debris huts, our young adventurers will discover the secrets of crafting safe and comfortable sanctuaries in the wild.",
      },
      {
        title: "Firecraft",
        description:
          "Fire is not only a source of warmth but also a vital survival skill. Our students will become fire-making experts, learning various techniques like fire-by-friction and fire-by-spark. They'll practice fire safety and responsibility while mastering the ancient art of kindling flames from the forest's resources. (*site dependent)",
      },
      {
        title: "Wild Edibles and Foraging",
        description:
          "Nature provides an abundance of edible plants and resources. We'll teach kids how to identify safe, nutritious wild edibles and how to sustainably harvest them. They'll discover the thrill of finding food in the forest and gain a deeper appreciation for the environment.",
      },
      {
        title: "Navigation and Orienteering",
        description:
          "In the world of bushcraft, knowing where you are is crucial. Students will learn how to use maps, compasses, and natural landmarks for navigation. They'll embark on treasure hunts and orienteering challenges, sharpening their outdoor navigation skills.",
      },
      {
        title: "Outdoor Cooking",
        description:
          "Cooking over an open fire is a memorable experience. Our young adventurers will prepare delicious meals using bushcraft techniques. They'll cook with cast-iron pans, make damper bread, and enjoy campfire cuisine they've prepared themselves. (*site dependent)",
      },
      {
        title: "Wildlife Tracking",
        description:
          "Uncover the secrets of the forest's inhabitants through wildlife tracking. Students will learn to identify animal prints, signs, and behaviors. They'll embark on tracking expeditions, honing their observation and detective skills while connecting with the natural world.",
      },
      {
        title: "Knot Tying and Campcraft",
        description:
          "Knots are essential in bushcraft. Kids will master various knots and lashings for shelter construction, crafting tools, and more. They'll also learn campcraft skills like setting up camp, purifying water, and Leave No Trace principles.",
      },
      {
        title: "Nature Awareness",
        description:
          "Encourage mindfulness and awareness of the environment. Students will engage in sensory activities, sit-spots, and nature journaling to connect deeply with the forest and its inhabitants.",
      },
    ],
    termFinale:
      "At the end of the term, our young bushcraft experts will put their skills to the test in a wilderness adventure. They'll navigate to a chosen location, build their shelters, and cook their meals over open fires. It's a chance to showcase their newfound abilities and create lasting memories of their bushcraft journey.<br /><br />Join us for a term of thrilling outdoor education, where kids will become confident and skilled in the art of bushcraft, all while fostering a deep appreciation for the natural world. Enrol your child today and let them embark on a journey of discovery, adventure, and self-reliance in the heart of the forest!",
    primaryColor: "#693a2b",
    secondaryColor: "#FFA88C",
    days: ["Monday at 6PM"],
    price: 289,
  },
  
];
