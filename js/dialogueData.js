export const dialogueMapData = {
  dataCenter: {
    section01: {
      title: 'Certification: Getting Started With Data',
      sectionName: 'Data Center Section 01: Type of Data',
      starter: {
        text: [
          'Tribal Leader, you’ve arrived! The fate of our village rests not on brute strength, but on wisdom that hidden in something the ancients called… data.',
          'Before you lead warriors into strategy or trade, you must first learn to lead with knowledge. Will you heed this duty?'
        ],
        choices: [
          { label: 'I’m ready. Tell me what must be done.', next: 'intro' },
          { label: 'Skip the ritual, just tell me where to click.', skipTo: 'quiz01' }
        ]
      },
      intro: {
        text: [
          'All tribal decisions—harvests, alliances, defenses—start with data.',
          'But not all data is the same. There are two forces at work: one structured like ancient scrolls, one unstructured like jungle whispers.'
        ],
        choices: [
          { label: 'Tell me the difference between structured and unstructured.', next: 'guide' },
          { label: 'I’ll figure it out. Give me the task.', skipTo: 'quiz01' }
        ]
      },
      guide: {
        text: [
          'Structured data is organized information arranged in rows and columns, like names and dates in a spreadsheet, making it easy to search and analyze.',
          'Unstructured data is raw and unorganized—like photos, videos, or text messages—which requires more effort to process but can uncover powerful insights.'
        ],
        choices: [
          { label: 'Got it! Give me the task.', next: 'quiz01' }
        ]
      },
      quiz01: {
        text: [
          '<b>Try to categorize the following data types:</b>',
          'Battle videos'
        ],
        choices: [
          { label: 'Structured', next: 'quiz01_retry' },
          { label: 'Unstructured', next: 'quiz02' }
        ]
      },
      quiz01_retry: {
        text: [
          'A battle video isn’t structured data because it’s a video, not organized in a clear, searchable format like a table or database.',
          'Now, Try again',
          'Battle videos'
        ],
        choices: [
          { label: 'Structured', next: 'quiz01_retry' },
          { label: 'Unstructured', next: 'quiz02' }
        ]
      },
      quiz02: {
        text: [
          'Correct!',
          'Attack dates'
        ],
        choices: [
          { label: 'Structured', next: 'quiz03' },
          { label: 'Unstructured', next: 'quiz02_retry' }
        ]
      },
      quiz02_retry: {
        text: [
          'Attack dates follow a clear format like 12/06/2025, which makes them easy to sort or compare.',
          'Now, Try again',
          'Attack dates'
        ],
        choices: [
          { label: 'Structured', next: 'quiz03' },
          { label: 'Unstructured', next: 'quiz02_retry' }
        ]
      },
      quiz03: {
        text: [
          'Correct!',
          'Village messages',
        ],
        choices: [
          { label: 'Structured', next: 'quiz03_retry' },
          { label: 'Unstructured', next: 'quiz04' }
        ]
      },
      quiz03_retry: {
        text: [
          'Village messages are text conversations, not neatly arranged data you can sort or filter easily.', 
          'Now, Try again',
          'Village messages'
        ],
        choices: [
          { label: 'Structured', next: 'quiz03_retry' },
          { label: 'Unstructured', next: 'quiz04' }
        ]
      },      
      quiz04: {
        text: [
          'Correct!',
          'Weapon names',
        ],
        choices: [
          { label: 'Structured', next: 'quiz05' },
          { label: 'Unstructured', next: 'quiz04_retry' }
        ]
      },
      quiz04_retry: {
        text: [
          'Weapon names are short and consistent, so they can be listed and searched easily.', 
          'Now, Try again',
          'Weapon names'
        ],
        choices: [
          { label: 'Structured', next: 'quiz05' },
          { label: 'Unstructured', next: 'quiz04_retry' }
        ]
      },
      quiz05: {
        text: [
          'Correct!',
          'Message letters',
        ],
        choices: [
          { label: 'Structured', next: 'quiz05_retry' },
          { label: 'Unstructured', next: 'quiz06' }
        ]
      },
      quiz05_retry: {
        text: [
          'Message letters are like written notes, not organized into clear fields like a database.', 
          'Now, Try again',
          'Message letters'
        ],
        choices: [
          { label: 'Structured', next: 'quiz05_retry' },
          { label: 'Unstructured', next: 'quiz06' }
        ]
      },
      quiz06: {
        text: [
          'Correct!',
          'Map pictures',
        ],
        choices: [
          { label: 'Structured', next: 'quiz06_retry' },
          { label: 'Unstructured', next: 'quiz07' }
        ]
      },
      quiz06_retry: {
        text: [
          'Map pictures are images, so they don’t have organized information like a spreadsheet."', 
          'Now, Try again',
          'Map pictures'
        ],
        choices: [
          { label: 'Structured', next: 'quiz06_retry' },
          { label: 'Unstructured', next: 'quiz07' }
        ]
      },
      quiz07: {
        text: [
          'Correct!',
          'Spy code',
        ],
        choices: [
          { label: 'Structured', next: 'village' },
          { label: 'Unstructured', next: 'quiz07_retry' }
        ]
      },
      quiz07_retry: {
        text: [
          'Spy codes are exact numbers or labels that can be quickly looked up or matched."', 
          'Now, Try again',
          'Spy code'
        ],
        choices: [
          { label: 'Structured', next: 'village' },
          { label: 'Unstructured', next: 'quiz07_retry' }
        ]
      },     
      village: {
        text: [
          'Congratulations, you have completed the first section of the data center!',
          'Here is your reward: 10 Data Packet 📊',
          'You can now return to the village or continue to the next section.'],
        choices: [
          { label: 'Back to village', next: 'backToVillage' },
          { label: 'Next section', next: 'nextSection' }
        ]
      },
    },
    section02: {
      title: 'Certification: Getting Started With Data',
      sectionName: 'Data Center Section 02: Type of Data',
      starter: {
        text: [
          "Well done, Tribal Leader. But knowing the type of data is just the beginning.",
          "To truly command knowledge, you must learn how to store and understand it. The ancients used something powerful called a database."
        ],
        choices: [
          { label: "Tell me more about this 'database'.", next: 'intro' },
          { label: 'Skip the ritual, just tell me where to click.', skipTo: 'quiz01' }
        ]
      },
      intro: {
        text: [
          "A database is a sacred vault, organizing structured data into rows and columns for quick retrieval.",
          "Most are called relational databases—multiple scrolls, linked by common symbols, allowing patterns to emerge.",
          "But to make these scrolls useful, data must be transformed into a standard format. Only then can true insights be uncovered."
        ],
        choices: [
          { label: "Got it! But what format?", next: 'guide' },
          { label: 'I’ll figure it out. Give me the task.', skipTo: 'quiz01' }
        ]
      },
      guide: {
        text: [
          "Quantitative data is like a warrior’s strength, which can be counted, measured, and tracked: height, weight, temperature.",
          "Qualitative data is like a poem—it describes qualities: colors, smells, or the softness of goat wool.",
          "Both types guide your tribe. But knowing which is which helps you ask better questions."
        ],
        choices: [
          { label: "Let me try to identify them!", next: 'quiz01' }
        ]
      },
      quiz01: {
        text: [
          "<b>Scenario: While tour the village, you see a warrior walking a big wolf.</b>",
          "Which kind of data it is about the wolf description?",
          "The wolf has four legs."
        ],
        choices: [
          { label: "Quantitative", next: 'quiz02' },
          { label: "Qualitative", next: 'quiz01_retry' }
        ]
      },
      quiz01_retry: {
        text: [
          "'Four legs' is a countable attribute—it can be measured numerically.",
          "Now, try again: The wolf has four legs."
        ],
        choices: [
          { label: "Quantitative", next: 'quiz02' },
          { label: "Qualitative", next: 'quiz01_retry' }
        ]
      },
      quiz02: {
        text: [
          "Correct! Next: The wolf weighs 12 pounds."
        ],
        choices: [
          { label: "Quantitative", next: 'quiz03' },
          { label: "Qualitative", next: 'quiz02_retry' }
        ]
      },
      quiz02_retry: {
        text: [
          "'12 pounds' is a measurement that can be quantified.",
          "Now, try again: The wolf weighs 12 pounds."
        ],
        choices: [
          { label: "Quantitative", next: 'quiz03' },
          { label: "Qualitative", next: 'quiz02_retry' }
        ]
      },
      quiz03: {
        text: [
          "Correct! Next: The wolf has short fur."
        ],
        choices: [
          { label: "Quantitative", next: 'quiz03_retry' },
          { label: "Qualitative", next: 'quiz04' }
        ]
      },
      quiz03_retry: {
        text: [
          "'Short fur' is a descriptive quality—not a number.",
          "Now, try again: The wolf has short fur."
        ],
        choices: [
          { label: "Quantitative", next: 'quiz03_retry' },
          { label: "Qualitative", next: 'quiz04' }
        ]
      },
      quiz04: {
        text: [
          "Correct! Next: The wolf has black spots."
        ],
        choices: [
          { label: "Quantitative", next: 'quiz04_retry' },
          { label: "Qualitative", next: 'quiz05' }
        ]
      },
      quiz04_retry: {
        text: [
          "'Black spots' describe appearance, which is a characteristic that can not be measure.",
          "Now, try again: The wolf has black spots."
        ],
        choices: [
          { label: "Quantitative", next: 'quiz04_retry' },
          { label: "Qualitative", next: 'quiz05' }
        ]
      },

      quiz05: {
        text: [
          "Correct! ",
          "<b>Next Scenario: Which kind of data it is about the warrior description?</b>",
          "The warrior is across the street."
        ],
        choices: [
          { label: "Quantitative", next: 'quiz05_retry' },
          { label: "Qualitative", next: 'quiz06' }
        ]
      },
      quiz05_retry: {
        text: [
          "‘Across the street’ describes a location, not a measurable quantity.",
          "Now, Try again: The warrior is across the street."
        ],
        choices: [
          { label: "Quantitative", next: 'quiz05_retry' },
          { label: "Qualitative", next: 'quiz06' }
        ]
      },
      quiz06: {
        text: [
          "Correct! Next: The warrior has a six foot reins."
        ],
        choices: [
          { label: "Quantitative", next: 'quiz06_retry' },
          { label: "Qualitative", next: 'quiz07' }
        ]
      },
      quiz06_retry: {
        text: [
          "‘Six foot reins’ are measurable and numeric",
          "Now, Try again: The warrior has a six foot reins."
        ],
        choices: [
          { label: "Quantitative", next: 'quiz06_retry' },
          { label: "Qualitative", next: 'quiz07' }
        ]
      },
      quiz07: {
        text: [
          "Correct! Next: The warrior has gray hair."
        ],
        choices: [
          { label: "Quantitative", next: 'quiz08' },
          { label: "Qualitative", next: 'quiz07_retry' }
        ]
      },
      quiz07_retry: {
        text: [
          "‘Gray hair’ describes an observable quality",
          "Now, Try again: The warrior has gray hair."
        ],
        choices: [
          { label: "Quantitative", next: 'quiz08' },
          { label: "Qualitative", next: 'quiz07_retry' }
        ]
      },
      quiz08: {
        text: [
          "Correct! Next: The warrior is wearing leather protectors."
        ],
        choices: [
          { label: "Quantitative", next: 'quiz08_retry' },
          { label: "Qualitative", next: 'village' }
        ]
      },
      quiz08_retry: {
        text: [
          "‘Wearing leather protectors’ is a descriptive trait, not a numeric value.",
          "Now, Try again: The warrior is wearing leather protectors."
        ],
        choices: [
          { label: "Quantitative", next: 'quiz08_retry' },
          { label: "Qualitative", next: 'village' }
        ]
      },
      village: {
        text: [
          'Congratulations, you have completed the second section of the data center!',
          'Here is your reward: 10 Data Packet 📊',
          'You can now return to the village or continue to the next section.'],
        choices: [
          { label: 'Back to village', next: 'backToVillage' },
          { label: 'Next section', next: 'nextSection' }
        ]
      },
    }, 
    section03: {
      title: 'Certification: Getting Started With Data',
      sectionName: 'Data Center Section 03: Type of Data',
      starter: {
        text: [
          "Welcome, Tribal Leader! To master your village’s fate, you must understand not just data, but its different types. Numbers and qualities each tell a unique story."
        ],
        choices: [
          { label: "Yes, teach me the secret of data types.", next: 'intro' },
          { label: 'Skip ahead, I’m ready for the challenge.', skipTo: 'quiz01' }
        ]
      },
      intro: {
        text: [
          "Data comes in two forms: quantitative, which you can count or measure, and qualitative, which describes qualities or categories. Knowing these helps you ask smarter questions and make wiser decisions.",
          "Are you ready to explore how to distinguish these two crucial types of data?"
        ],
        choices: [
          { label: "Yes, explain more.", next: 'guide' },
          { label: 'Let’s get to the task.', skipTo: 'quiz01' }
        ]
      },
      guide: {
        text: [
          "Quantitative data is numerical and includes:<li>Discrete: Countable whole numbers (e.g., number of warriors)<br><li>Continuous: Measurable values with decimals (e.g., height, weight)",
          "Qualitative data describes characteristics and comes in:<li>Nominal: Labels without order (e.g., hair color, religion)<br><li>Ordinal: Ordered categories (e.g., ranks, satisfaction levels)<br>",
          "Master these to command knowledge and lead your tribe to victory!"
        ],
        choices: [
          { label: "Let me try to identify them!", next: 'quiz01' }
        ]
      },
      quiz01: {
        text: [
          "This is a special trial that include previous advanture.",
          "<b>Spend 10 electricity⚡ to prove your readiness to face the battle ahead.</b>",
        ],
        warning: "If you answer wrong more than one question, you will need to retry the whole quiz.",
        choices: [
          { label: "Sure, spend 10 electricity⚡", next: 'quiz02', materialCost: 10 },
          { label: "I may need some time to prepare", next: 'backToVillage' }
        ]
      },
      quiz02: {
        text: [
          "Fill in the blank. Text in a book, audio files, and social media posts are examples of _______________ data.",
        ],
        choices: [
          { label: "structured", next: 'quiz03', isCorrect: false },
          { label: "database", next: 'quiz03', isCorrect: false  },
          { label: "complex", next: 'quiz03', isCorrect: false  },
          { label: "unstructured ", next: 'quiz03', isCorrect: true }
        ],
        explanation: "Unstructured data lacks any built-in organization. It can be text in a book, audio files, social media posts, or even song lyrics."
      },
      quiz03: {
        text: [
          "Is this the conclusions you can make about structured data? ",
          "Examples can include images, text messages, and social media posts."
        ],
        choices: [
          { label: "yes", next: 'quiz04', isCorrect: false },
          { label: "no", next: 'quiz04', isCorrect: true  }
        ],
        explanation: "Keep in mind that structured data is well-organized. It’s organized into rows and columns in a spreadsheet or database. Examples can include names, dates, and addresses."
      },
      quiz04: {
        text: [
          "Is this the conclusions you can make about structured data? ",
          "Examples can include names, dates, and addresses. "
        ],
        choices: [
          { label: "yes", next: 'quiz05', isCorrect: true },
          { label: "no", next: 'quiz05', isCorrect: false  }
        ],
        explanation: "Keep in mind that structured data is well-organized. It’s organized into rows and columns in a spreadsheet or database. Examples can include names, dates, and addresses."
      },
      quiz05: {
        text: [
          "Is this the conclusions you can make about structured data? ",
          "It’s organized into rows and columns in a spreadsheet or database."
        ],
        choices: [
          { label: "yes", next: 'quiz06', isCorrect: true },
          { label: "no", next: 'quiz06', isCorrect: false  }
        ],
        explanation: "Keep in mind that structured data is well-organized. It’s organized into rows and columns in a spreadsheet or database. Examples can include names, dates, and addresses."
      },
      quiz06: {
        text: [
          "Is this the conclusions you can make about structured data? ",
          "It’s raw data that is stored in its original, undefined format."
        ],
        choices: [
          { label: "yes", next: 'quiz07', isCorrect: false },
          { label: "no", next: 'quiz07', isCorrect: true  }
        ],
        explanation: "Keep in mind that structured data is well-organized. It’s organized into rows and columns in a spreadsheet or database. Examples can include names, dates, and addresses."
      },
      quiz07: {
        text: [
          "What type of data is on a driver’s license that records a person's eye color and hair color? ",
        ],
        choices: [
          { label: "Qualitative data", next: 'quiz08', isCorrect: true },
          { label: "Quantitative data", next: 'quiz08', isCorrect: false  }
        ],
        explanation: "This type of data on a driver’s license is qualitative. It records the qualities or characteristics of the driver."
      },
      quiz08: {
        text: [
          "While reviewing a spreadsheet with customer information, you see that one of the columns contains data for the marital status of the customers.",
        ],
        choices: [
          { label: "Discrete", next: 'village', isCorrect: false },
          { label: "Nominal", next: 'village', isCorrect: true  },
          { label: "Ordinal", next: 'village', isCorrect: false  },
          { label: "Continuous ", next: 'village', isCorrect: false }
        ],
        explanation: "This is nominal data, since it’s not numerical, but rather labels a variable. In this case, the variable is a customer’s marital status."
      },
      village: {
        text: [
          'Congratulations, you have completed the third section of the data center!',
          'Here is your reward: 10 Data Packet 📊',
          'You can now return to the village or continue to the next section.'],
        choices: [
          { label: 'Back to village', next: 'backToVillage' },
          { label: 'Next section', next: 'nextSection' }
        ]
      },
    },
    section04: {
      title: 'Certification: Getting Started With Data',
      sectionName: 'Data Center Section 04: Big Data',
      starter: {
        text: [
          "Tribal Leader, your village is thriving, and more data flows through your lands than ever before.",
          "But to harness its true power, you must understand the mighty force known as <b>Big Data</b> and its five sacred traits.",
          "These are known across the lands as the 5 V’s: Volume, Variety, Velocity, Veracity, and Value."
        ],
        choices: [
          { label: "Yes, reveal to me the power of Big Data!", next: 'intro' },
          { label: "Skip to the trial. I’m ready to prove my wisdom.", skipTo: 'quiz01' }
        ]
      },
      intro: {
        text: [
          "In a digital age, every villager—from young apprentice to elder—leaves a trail of actions behind: messages, records, travel paths, and choices.",
          "This massive trail of information is what sages call <b>Big Data</b>.",
          "But what makes this data ‘big’? Scholars from across kingdoms have debated it, but most agree that Big Data holds five powerful qualities: the 5 V’s.",
          "Are you ready to unlock each one?"
        ],
        choices: [
          { label: "Yes, I wish to learn.", next: 'guide' },
          { label: "Let’s begin the challenge.", skipTo: 'quiz01' }
        ]
      },
      guide: {
        text: [
          "<br><b>Volume:</b> The sheer size of data. From gigabytes to yottabytes, data is now generated in overwhelming amounts—from villagers’ devices, scrolls, and beyond.<br><b>Variety:</b> The many types of data. Structured data like battle logs and unstructured data like scrolls, chants, and drawings all exist.<br><b>Velocity:</b> The speed at which data flows. Every moment, new knowledge is born—messages sent, trades recorded, and signals flashing across the realm.<br><b>Veracity:</b> The truthfulness and reliability of data. Some records are true and useful; others are rumors or errors. A wise leader must judge carefully.<br><b>Value:</b> The power within the data. Information is only as good as the insights it provides. True leaders turn knowledge into decisions that uplift their people.",
          "Remember these five virtues. They are your map to mastering the lands of data."
        ],
        choices: [
          { label: "I’m ready. Let me take the trial.", next: 'quiz01' }
        ]
      },
      quiz01: {
        text: [
          "This is a special trial that include previous advanture.",
          "<b>Spend 10 electricity⚡ to prove your readiness to face the battle ahead.</b>",
        ],
        warning: "If you answer wrong more than one question, you will need to retry the whole quiz.",
        choices: [
          { label: "Sure, spend 10 electricity⚡", next: 'quiz02', materialCost: 10  },
          { label: "I may need some time to prepare", next: 'backToVillage' }
        ]
      },
      quiz02: {
        text: [
          "What is the speed at which new data is generated and moves around?",
        ],
        choices: [
          { label: "Velocity", next: 'quiz03', isCorrect: true },
          { label: "Volume", next: 'quiz03', isCorrect: false  },
          { label: "Value", next: 'quiz03', isCorrect: false  },
          { label: "Veracity", next: 'quiz03', isCorrect: false }
        ],
        explanation: "Velocity refers to the speed at which new data is generated and the speed at which data moves around. Data is constantly moving around and being generated extremely fast. It’s a process that never stops."
      },
      quiz03: {
        text: [
          "Fill in the blank. With big data, the __________ is the quality and trustworthiness of the data.",
        ],
        choices: [
          { label: "Volume", next: 'quiz04', isCorrect: false },
          { label: "Value", next: 'quiz04', isCorrect: false  },
          { label: "Veracity", next: 'quiz04', isCorrect: true  },
          { label: "Velocity", next: 'quiz04', isCorrect: false }
        ],
        explanation: "Veracity refers to the quality and trustworthiness of the data. You must think about the origin of the data to make sure it is complete and consistent with integrity. It needs to be traceable."
      },
      quiz04: {
        text: [
          "Fill in the blank. The __________ of big data refers to the ability to obtain monetary, medical, social, or personal benefits from the data. ",
        ],
        choices: [
          { label: "Velocity", next: 'village', isCorrect: false },
          { label: "Value", next: 'village', isCorrect: true  },
          { label: "Veracity", next: 'village', isCorrect: false  },
          { label: "Volume", next: 'village', isCorrect: false }
        ],
        explanation: "Value refers to the ability to turn data into value. Having access to big data is pointless unless you can turn it into value. Value can be profit. It can also be medical or social benefits, or customer, employee, or personal satisfaction."
      },
      village: {
        text: [
          'Congratulations, you have completed the forth section of the data center!',
          'Here is your reward: 10 Data Packet 📊',
          'You can now return to the village or continue to the next section.'],
        choices: [
          { label: 'Back to village', next: 'backToVillage' },
          { label: 'Next section', next: 'nextSection' }
        ]
      },
    },
    section05: {
      title: 'Certification: Getting Started With Data',
      sectionName: 'Data Center Section 05: Types of Data Analytics',
      starter: {
        text: [
          "Greetings again, Tribal Leader. Your scouts have returned from the realm of knowledge with reports of powerful tools—tools that can help you foresee threats, explain the past, and guide your tribe's future.",
          "These tools are known as the four types of Data Analytics. Each reveals a different layer of truth."
        ],
        choices: [
          { label: "Tell me more about these powers.", next: 'intro' },
          { label: "No need, I’ll prove my strength in battle.", skipTo: 'quiz01' }
        ]
      },
      intro: {
        text: [
          "In the ever-shifting world around you, knowledge is survival.",
          "The four types of data analytics—**Descriptive**, **Diagnostic**, **Predictive**, and **Prescriptive**—serve as your guiding stars.",
          "They answer questions like *What is happening? Why did it happen? What might happen next? And what should we do about it?*",
          "Understanding these forms of analysis is key to becoming a visionary leader."
        ],
        choices: [
          { label: "Take me deeper into these analytics.", next: 'guide' },
          { label: "I'm ready. Send me to the challenge.", skipTo: 'quiz01' }
        ]
      },
      guide: {
        text: [
          "<br><b>Descriptive Analytics</b>: <i>What is happening?</i><br>It shows what's going on in your village using current and past data. Examples: how many troops you have, how much wood you collected today, or which buildings are under construction.<br><br>" +
          "<b>Diagnostic Analytics</b>: <i>Why is it happening?</i><br>This dives deeper to uncover the causes of changes in your realm. Examples: why your iron production suddenly dropped, or why enemy attacks increased in a specific region.<br><br>" +
          "<b>Predictive Analytics</b>: <i>What is likely to happen?</i><br>It uses past patterns to predict the future. Examples: forecasting an enemy raid based on their activity patterns, or predicting when your allies will reach the battlefield based on their past marching speeds.<br><br>" +
          "<b>Prescriptive Analytics</b>: <i>What should we do?</i><br>The wisest form of analytics. It offers strategic advice. Examples: suggesting when to upgrade your wall based on enemy threat levels, or which village to ally with based on trade and military history.<br><br>" +
          "Each stage of analytics turns raw data into powerful decisions—arming you like a seasoned war chief ready to outthink any rival."
        ],
        choices: [
          { label: "I’m ready. Let me take the trial.", next: 'quiz01' }
        ]
      },
      quiz01: {
        text: [
          '<b>Try to categorize the type of data analytcs used:</b>',
          'A player sends scouts to find out why villagers are unhappy after a tax increase.'
        ],
        choices: [
          { label: 'Descriptive analytics', next: 'quiz01_retry' },
          { label: 'Diagnostic analytics', next: 'quiz02' },
          { label: 'Predictive analytics', next: 'quiz01_retry' },
          { label: 'Prescriptive analytics', next: 'quiz01_retry' }
        ]
      },
      quiz01_retry: {
        text: [
          'The player is investigating causes, fguring out <b>why</b> villagers are unhappy after a tax increase.',
          'Now, Try again',
          'A player sends scouts to find out why villagers are unhappy after a tax increase.'
        ],
        choices: [
          { label: 'Descriptive analytics', next: 'quiz01_retry' },
          { label: 'Diagnostic analytics', next: 'quiz02' },
          { label: 'Predictive analytics', next: 'quiz01_retry' },
          { label: 'Prescriptive analytics', next: 'quiz01_retry' }
        ]
      },
      quiz02: {
        text: [
          'Correct! Next:',
          'A warlord looks at the most visited market stalls to recommend trading locations.'
        ],
        choices: [
          { label: 'Descriptive analytics', next: 'quiz03' },
          { label: 'Diagnostic analytics', next: 'quiz02_retry' },
          { label: 'Predictive analytics', next: 'quiz02_retry' },
          { label: 'Prescriptive analytics', next: 'quiz02_retry' }
        ]
      },
      quiz02_retry: {
        text: [
          'The warload is identifying what’s popular, figuring out <b>what</b> stalls are most visited.',
          'Now, Try again',
          'A warlord looks at the most visited market stalls to recommend trading locations.'
        ],
        choices: [
          { label: 'Descriptive analytics', next: 'quiz03' },
          { label: 'Diagnostic analytics', next: 'quiz02_retry' },
          { label: 'Predictive analytics', next: 'quiz02_retry' },
          { label: 'Prescriptive analytics', next: 'quiz02_retry' }
        ]
      },
      quiz03: {
        text: [
          'Correct! Next:',
          'A seer uses past raiding patterns to predict enemy movements.'
        ],
        choices: [
          { label: 'Descriptive analytics', next: 'quiz03_retry' },
          { label: 'Diagnostic analytics', next: 'quiz03_retry' },
          { label: 'Predictive analytics', next: 'quiz04' },
          { label: 'Prescriptive analytics', next: 'quiz03_retry' }
        ]
      },
      quiz03_retry: {
        text: [
          'The seer is predictng <b>what is likely to happend</b>.',
          'Now, Try again',
          'A seer uses past raiding patterns to predict enemy movements.'
        ],
        choices: [
          { label: 'Descriptive analytics', next: 'quiz03_retry' },
          { label: 'Diagnostic analytics', next: 'quiz03_retry' },
          { label: 'Predictive analytics', next: 'quiz04' },
          { label: 'Prescriptive analytics', next: 'quiz03_retry' }
        ]
      },
      quiz04: {
        text: [
          'Correct! Next:',
          'A strategist uses a AI that recommends the best defense setup.'
        ],
        choices: [
          { label: 'Descriptive analytics', next: 'quiz04_retry' },
          { label: 'Diagnostic analytics', next: 'quiz04_retry' },
          { label: 'Predictive analytics', next: 'quiz04_retry' },
          { label: 'Prescriptive analytics', next: 'quiz05' }
        ]
      },
      quiz04_retry: {
        text: [
          'The strategist using AI to figure out <b>what should do</b>.',
          'Now, Try again',
          'A strategist uses a AI that recommends the best defense setup.'
        ],
        choices: [
          { label: 'Descriptive analytics', next: 'quiz04_retry' },
          { label: 'Diagnostic analytics', next: 'quiz04_retry' },
          { label: 'Predictive analytics', next: 'quiz04_retry' },
          { label: 'Prescriptive analytics', next: 'quiz05' }
        ]
      },
      quiz05: {
        text: [
          "Correct! Next, this is a special trial that include previous advanture.",
          "<b>Spend 10 electricity⚡ to prove your readiness to face the battle ahead.</b>",
        ],
        warning: "If you answer wrong more than one question, you will need to retry the whole quiz.",
        choices: [
          { label: "Sure, spend 10 electricity⚡", next: 'quiz06', materialCost: 10  },
          { label: "I may need some time to prepare", next: 'backToVillage' }
        ]
      },
      quiz06: {
        text: [
          "A company uses data analytics to get a “snapshot” of its business and to identify issues. The company’s data sources are past and present revenue reports and stock prices. ",
          "Which type of analytics uses this type of data? "
        ],
        choices: [
          { label: "Predictive analytics", next: 'quiz07', isCorrect: false },
          { label: "Descriptive analytics", next: 'quiz07', isCorrect: true  },
          { label: "Diagnostic analytics", next: 'quiz07', isCorrect: false  },
          { label: "Prescriptive analytics", next: 'quiz07', isCorrect: false }
        ],
        explanation: "This is descriptive analytics to answer the question, “What is happening?”"
      },
      quiz07: {
        text: [
          "Which type of analytics drills down the trends and patterns to identify the causes of problems?",
        ],
        choices: [
          { label: "Diagnostic analytics", next: 'quiz08', isCorrect: true },
          { label: "Descriptive analytics", next: 'quiz08', isCorrect: false  },
          { label: "Predictive analytics", next: 'quiz08', isCorrect: false  },
          { label: "Prescriptive analytics", next: 'quiz08', isCorrect: false }
        ],
        explanation: "This is diagnostic analytics to answer the question, “Why is it happening?”"
      },
      quiz08: {
        text: [
          "Which type of analytics recommends actions to take to eliminate a future problem or take advantage of a promising trend?",
        ],
        choices: [
          { label: "Prescriptive analytics", next: 'quiz09', isCorrect: true },
          { label: "Diagnostic analytics", next: 'quiz09', isCorrect: false  },
          { label: "Descriptive analytics", next: 'quiz09', isCorrect: false  },
          { label: "Predictive analytics", next: 'quiz09', isCorrect: false }
        ],
        explanation: "This is prescriptive analytics to answer the question, “What should happen?”"
      },
      quiz09: {
        text: [
          "Which type of analytics makes forecasts about the future?",
        ],
        choices: [
          { label: "Diagnostic analytics", next: 'village', isCorrect: false },
          { label: "Prescriptive analytics", next: 'village', isCorrect: false  },
          { label: "Descriptive analytics", next: 'village', isCorrect: false  },
          { label: "Predictive analytics", next: 'village', isCorrect: true }
        ],
        explanation: "This is predictive analytics to answer the question, “What is likely to happen in the future?” Predictive analytics can help you make better business decisions.”"
      },
      village: {
        text: [
          'Congratulations, you have completed the fifth section of the data center!',
          'Here is your reward: 10 Data Packet 📊',
          'You can now return to the village or continue to the next section.'],
        choices: [
          { label: 'Back to village', next: 'backToVillage' },
          { label: 'Next section', next: 'nextSection' }
        ]
      },
    },
    sectionXX: {
      title: 'Certification: Getting Started With Data',
      sectionName: 'Data Center Section 01: type of data',
      starter: {
        text: [
          ""
        ],
        choices: [
          { label: "Tell me more about this 'database'.", next: 'intro' },
          { label: 'Skip the ritual, just tell me where to click.', skipTo: 'quiz01' }
        ]
      },
      intro: {
        text: [
          ""
        ],
        choices: [
          { label: "Got it! But what format?", next: 'guide' },
          { label: 'I’ll figure it out. Give me the task.', skipTo: 'quiz01' }
        ]
      },
      guide: {
        text: [
          ""
        ],
        choices: [
          { label: "Let me try to identify them!", next: 'quiz01' }
        ]
      },
      quiz01: {
        text: [
          "<b>Scenario: While tour the village, you see a warrior walking a big wolf.</b>",
          ""
        ],
        choices: [
          { label: "Quantitative", next: 'quiz02' },
          { label: "Qualitative", next: 'quiz01_retry' }
        ]
      },
      quiz01_retry: {
        text: [
          ""
        ],
        choices: [
          { label: "Quantitative", next: 'quiz02' },
          { label: "Qualitative", next: 'quiz01_retry' }
        ]
      },
      village: {
        text: [
          'Congratulations, you have completed the second section of the data center!',
          'Here is your reward: 10 Data Packet 📊',
          'You can now return to the village or continue to the next section.'],
        choices: [
          { label: 'Back to village', next: 'backToVillage' },
          { label: 'Next section', next: 'nextSection' }
        ]
      },
    },
  }
};