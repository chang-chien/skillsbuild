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
          "This is a special trial that include previous adventure.",
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
          "This is a special trial that include previous adventure.",
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
          "Correct! Next, this is a special trial that include previous adventure.",
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
    section06: {
      title: 'Certification: Getting Started With Data',
      sectionName: 'Data Center Section 06: Steps to Analyze Data ',
      starter: {
        text: [
          "Tribal Leader, the time has come to uncover the secret rituals of the Data Shamans—ancient processes passed down to interpret the signs of the land and prepare your people for challenges ahead.",
          "Four great steps await you: Collect, Clean, Analyze, and Visualize. Mastering them will turn raw reports into wisdom for the ages."
        ],
        choices: [
          { label: "Tell me more about these sacred steps.", next: 'intro' },
          { label: "No time for tales—test my instincts!", skipTo: 'quiz01' }
        ]
      },
      intro: {
        text: [
          "Before you charge into battle, wise warriors prepare with knowledge.",
          "The path of data analysis begins with a goal—just like planning a raid or securing trade routes. Ask yourself: What challenge are we facing? What answers do we seek?",
          "With purpose in your heart, you’ll walk the fourfold path: **Collect** the signals, **Clean** the noise, **Analyze** the patterns, and **Visualize** the truth.",
          "These steps will help you turn the chaos of information into powerful insight—guiding your every move as chief."
        ],
        choices: [
          { label: "I’m ready—walk me through the ritual.", next: 'guide' },
          { label: "Skip the talk—I’ll learn through combat.", skipTo: 'quiz01' }
        ]
      },
      guide: {
        text: [
          "<br><b>1. Collect</b>: <i>Gathering the voices of the realm</i><br>Begin your journey by collecting data from all corners—villager scrolls, merchant logs, scout reports. The better the source, the clearer the picture.<br><br>" +
          "<b>2. Clean</b>: <i>Removing the dust of confusion</i><br>Not all scrolls are accurate. Some may be damaged or duplicated. Remove errors, organize names, and ensure your data is as sharp as your blade.Remember, this step spend 80% of the time<br><br>" +
          "<b>3. Analyze</b>: <i>Uncovering the hidden patterns</i><br>Study the trends—how harvests change, how enemies strike, when trades flourish. This step turns facts into strategy.<br><br>" +
          "<b>4. Visualize</b>: <i>Sharing the truth through sacred symbols</i><br>Charts, maps, and diagrams—tools to communicate your findings to warriors and council elders alike. A good visualization can sway even the most stubborn chieftain.<br><br>" +
          "These four steps form the sacred dance of data—each building upon the last. Perform them well, and even the stars will reveal their secrets to you."
        ],
        choices: [
          { label: "I’m ready. Let me take the trial.", next: 'quiz01' }
        ]
      },
      quiz01: {
        text: [
          "This is a special trial that include previous adventure.",
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
          "In which step did Ava share that she is careful to follow the company guidelines when storing data for security purposes?"
        ],
        choices: [
          { label: "Collect", next: 'quiz03', isCorrect: true },
          { label: "Visualize", next: 'quiz03', isCorrect: false  },
          { label: "Analyze", next: 'quiz03', isCorrect: false  },
          { label: "Clean", next: 'quiz03', isCorrect: false }
        ],
        explanation: "In the <b>Collect</b> step to analyze data, it’s important to collect the right data from existing and new sources that is needed to answer the business question and securely store it according to proper business practices."
      },
      quiz03: {
        text: [
          "In which step did Ava share that she spends most of his time, nearly 80%? ",
        ],
        choices: [
          { label: "Visualize", next: 'quiz04', isCorrect: false },
          { label: "Clean", next: 'quiz04', isCorrect: true  },
          { label: "Analyze", next: 'quiz04', isCorrect: false  },
          { label: "Collect", next: 'quiz04', isCorrect: false }
        ],
        explanation: "You learned that in the <b>Clean</b> step, it takes a data analyst 70-80% of their time to detect and correct missing or inaccurate records from a data set."
      },
      quiz04: {
        text: [
          "In which step did Ava share she figures out the best way to depict his results in a team presentation?",
        ],
        choices: [
          { label: "Visualize", next: 'quiz05', isCorrect: true },
          { label: "Analyze", next: 'quiz05', isCorrect: false  },
          { label: "Clean", next: 'quiz05', isCorrect: false  },
          { label: "Collect", next: 'quiz05', isCorrect: false }
        ],
        explanation: "In the <b>Visualize step</b>, it’s time to make conclusions and pick the right data visualization to graphically show people the data results and insights to conclude actions to take."
      },
      quiz05: {
        text: [
          "In which step did Ava share that she gets excited to investigate and use the right analytical methods to find root causes?",
        ],
        choices: [
          { label: "Clean", next: 'village', isCorrect: false },
          { label: "Visualize", next: 'village', isCorrect: false  },
          { label: "Analyze", next: 'village', isCorrect: true  },
          { label: "Collect", next: 'village', isCorrect: false }
        ],
        explanation: "In the <b>Analyze</b> step, Ava shared that she uses problem-solving skills when he analyzes data to analyze trends and find root causes to answer the business question."
      },
      village: {
        text: [
          'Congratulations, you have completed the sixth section of the data center!',
          'Here is your reward: 10 Data Packet 📊',
          'You can now return to the village or continue to the next section.'],
        choices: [
          { label: 'Back to village', next: 'backToVillage' },
          { label: 'Next section', next: 'nextSection' }
        ]
      },
    },
    section07: {
      title: 'Certification: Getting Started With Data',
      sectionName: 'Data Center Section 07: Visualize the Data ',
      starter: {
        text: [
          "Welcome back, Tribal Leader. In our village, we have long struggled to interpret the signs from the Scrolls of Numbers. These scrolls hold the secrets to our survival—food production, battles won, harvest cycles, and even trade profits. But raw numbers are hard for our leaders to grasp.",
          "Your task is to turn numbers into stories, crafting visualizations that influence key decisions. ",
          "You must journey through the Temples of Visual Truth, master ancient charting techniques, and expose false prophets who use misleading visuals to sway decisions. Are you ready?"
        ],
        choices: [
          { label: "Tell me more about the ancient charting techniques.", next: 'intro' },
          { label: "I already command my story, let me prove it.", skipTo: 'quiz01' }
        ]
      },
      intro: {
        text: [
          "Data storytelling is no mere trick—it is the art of combining data, visuals, and narrative. With these tools, even a mountain of numbers can speak with clarity.",
          "Each part of the triad plays a role:<br><li>Data provides the facts.</li><li>Visualizations reveal patterns and trends.</li><li>Narrative explain why it matters.</li>",
          "When they come together, they form a compelling data story that can drive action, inspire change, and prevent poor decisions."
        ],
        choices: [
          { label: "Got it! What about the types of vsualization", next: 'guide' },
          { label: "I’m ready for the challenge.", skipTo: 'quiz01' }
        ]
      },
      guide: {
        text: [
          "Many charts exist—but use them wisely. Each serves a purpose depending on your goal<br><b>Step 1: Know the Charts of Power</b><li>Pie Chart – Shows relative proportion. Best for small item counts.</li><li>Bar Chart – Ranks items and compares them over time. Great for many categories.</li><li>Column Chart – Vertical bars for time, proportion, or frequency. Can show negative values.</li><li>Line Chart – Reveals trends over time. Ideal for continuous data.</li><li>Scatter Plot – Displays correlation and outliers between two variables.</li>",
          "Not all charts are created equal. Even if the data is correct, the wrong chart can mislead or confuse.<br><b>Step 2: Select the Best Chart</b><ol>A 3D pie chart is used → Looks fancy, but hard to read.</ol><ol>Remove black background, enhance contrast to Better.</ol><ol>Flatten the pie chart → Less distraction.</ol><ol>Switch to a bar chart → Clear comparison emerges.</ol><ol>Emphasize the top item (e.g., darker shade for 'Latte') → Visual impact achieved!</ol>",
          "Not every chart is what it seems. Some are used to mislead, whether by accident or intent.<br><b>Step 3: Beware of Misleading Charts</b><br>Here are some dark techniques to guard against:<li>Truncated axes: Makes small differences seem huge.</li><li>Overuse of 3D effects: Adds confusion, not clarity.</li><li>Cherry-picked timeframes: Hides the full story.</li><li>Too many pie slices: Drowns insight in chaos.</li><li>No labels or poor scaling: Creates ambiguity.</li>"
        ],
        choices: [
          { label: "I understand. Let me face the trial.", next: 'quiz01' }
        ]
      },
      quiz01: {
        text: [
          "This is a special trial that include previous adventure.",
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
          "<b>Is this the purpose of a data visualization?</b>",
          "Organize data in a usable format, such as a spreadsheet, for people to easily access."
        ],
        choices: [
          { label: "Yes", next: 'quiz03', isCorrect: false },
          { label: "No", next: 'quiz03', isCorrect: true }
        ],
        explanation: "Data analysts use visualizations like charts, graphs, and maps for two reasons: to explore and interpret data during analysis to identify patterns or trends; and to communicate results and help people understand the insights to make decisions."
      },
      quiz03: {
        text: [
          "<b>Is this the purpose of a data visualization?</b>",
          "Explore and interpret data during analysis to identify patterns or trends."
        ],
        choices: [
          { label: "Yes", next: 'quiz04', isCorrect: true },
          { label: "No", next: 'quiz04', isCorrect: false }
        ],
        explanation: "Data analysts use visualizations like charts, graphs, and maps for two reasons: to explore and interpret data during analysis to identify patterns or trends; and to communicate results and help people understand the insights to make decisions."
      },
      quiz04: {
        text: [
          "<b>Is this the purpose of a data visualization?</b>",
          "Communicate results and help people understand the insights to make decisions."
        ],
        choices: [
          { label: "Yes", next: 'quiz05', isCorrect: true },
          { label: "No", next: 'quiz05', isCorrect: false }
        ],
        explanation: "Data analysts use visualizations like charts, graphs, and maps for two reasons: to explore and interpret data during analysis to identify patterns or trends; and to communicate results and help people understand the insights to make decisions."
      },
      quiz05: {
        text: [
          "Which type of visualization is best-suited for ranking a large number of categories, showing correlation, and using for before-after analysis?",
        ],
        choices: [
          { label: "Line chart", next: 'quiz06', isCorrect: false },
          { label: "Pie chart", next: 'quiz06', isCorrect: false  },
          { label: "Scatter plot chart", next: 'quiz06', isCorrect: false  },
          { label: "Bar chart", next: 'quiz06', isCorrect: true }
        ],
        explanation: "Bar charts are useful for ranking a large number of categories, showing correlation, and using for before-after analysis. Use bar charts for comparison and ranking. Bar charts also help illustrate change over time."
      },
      quiz06: {
        text: [
          "Which of the following statements about data visualizations is correct?",
        ],
        choices: [
          { label: "The audience should be confused when they first see a visualization.", next: 'village', isCorrect: false },
          { label: "Data analysts typically use one of four types of visualizations. ", next: 'village', isCorrect: false  },
          { label: "The goal is to have a visual that is effective, attractive, and impactive. ", next: 'village', isCorrect: true  },
          { label: "Data visualizations turn narratives into numbers.", next: 'village', isCorrect: false }
        ],
        explanation: "The goal is to have a visual that’s effective, attractive, and impactive."
      },
      village: {
        text: [
          "Congratulations, you have completed the seventh section of the data center!",
          "Here is your reward: 10 Data Packet 📊",
          "You've leveled up through many battles. Head to the Academy now — it's time to take your Big Exam and prove your mastery!"
        ],
        choices: [
          { label: 'Back to village', next: 'backToVillage' },
          { label: 'Go to academy', next: 'goToAcademy' }
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
    },
  aiCenter: {
    section01: {
      title: 'Getting Started with Artificial Intelligence',
      sectionName: 'AI Center Section 01: What is AI?',
      starter: {
        text: [
          'Tribal Leader, strange knowledge has returned from the stars—whispers of “machine minds” that do not think, but calculate with great speed.',
          'Before we unlock these powers to guide our tribe, you must understand what they are… and what they are not.'
        ],
        choices: [
          { label: 'I’m listening. Tell me more.', next: 'intro' },
          { label: 'Skip the tale. I want the challenge.', skipTo: 'quiz01' }
        ]
      },
      intro: {
        text: [
          'The ancients called it “Artificial Intelligence”—not a spirit, not a god, but a tool built to learn patterns and make predictions.',
          'These machines do not dream nor decide. They simply compute—faster than any sage or scout, but without judgment or soul.'
        ],
        choices: [
          { label: 'And what of Augmented Intelligence?', next: 'guide' },
          { label: 'I understand. Let me prove it.', skipTo: 'quiz01' }
        ]
      },
      guide: {
        text: [
          'Augmented Intelligence is different—it strengthens the minds of our scribes and leaders, helping them read a thousand scrolls in the time it takes to blink.',
          'Where AI may act on its own, Augmented Intelligence is a loyal ally—it empowers, but never replaces the wisdom of the living.',
          'Remember this: machines serve the tribe, not rule it.'
        ],
        choices: [
          { label: 'I see clearly now. Begin the test.', next: 'quiz01' }
        ]
      },
      quiz01: {
        text: [
          'The Seer asks: What is the core magic of the machine minds (AI)?',
          'Answer wisely—the elders are watching.'
        ],
        choices: [
          { label: 'Mimic human thinking to make decisions.', next: 'quiz01_retry' },
          { label: 'Learn patterns and predict from vast data.', next: 'quiz02' },
          { label: 'Replace humans in all intelligent tasks.', next: 'quiz01_retry' },
          { label: 'Give emotional support and invent new ideas.', next: 'quiz01_retry' }
        ]
      },
      quiz01_retry: {
        text: [
          'Not quite. The spirits say the true strength of AI is not in replacing minds, but in recognizing patterns.',
          'Try again: What is the core function of AI?'
        ],
        choices: [
          { label: 'Mimic human thinking to make decisions.', next: 'quiz01_retry' },
          { label: 'Learn patterns and predict from vast data.', next: 'quiz02' },
          { label: 'Replace humans in all intelligent tasks.', next: 'quiz01_retry' },
          { label: 'Give emotional support and invent new ideas.', next: 'quiz01_retry' }
        ]
      },
      quiz02: {
        text: [
          'Next question from the Council: What sets machine minds (AI) apart from the path of Augmented Wisdom?',
          'Choose the truest path.'
        ],
        choices: [
          { label: 'AI is for daily tasks, Augmented is for business.', next: 'quiz02_retry' },
          { label: 'AI replaces, Augmented empowers human decisions.', next: 'quiz03' },
          { label: 'AI needs humans, Augmented learns alone.', next: 'quiz02_retry' },
          { label: 'AI handles stories, Augmented handles numbers.', next: 'quiz02_retry' }
        ]
      },
      quiz02_retry: {
        text: [
          'Not the right path. AI aims to act alone, while Augmented Wisdom is a guiding torch that supports human choice.',
          'Try again: What separates AI from Augmented Intelligence?'
        ],
        choices: [
          { label: 'AI is for daily tasks, Augmented is for business.', next: 'quiz02_retry' },
          { label: 'AI replaces, Augmented empowers human decisions.', next: 'quiz03' },
          { label: 'AI needs humans, Augmented learns alone.', next: 'quiz02_retry' },
          { label: 'AI handles stories, Augmented handles numbers.', next: 'quiz02_retry' }
        ]
      },
      quiz03: {
        text: [
          'Final riddle of the Ancients: Where do humans still hold strong over the machines?',
          'A question of spirit and mind.'
        ],
        choices: [
          { label: 'Faster at repeating data tasks.', next: 'quiz03_retry' },
          { label: 'More precise in repetitive duties.', next: 'quiz03_retry' },
          { label: 'Creative, emotional, and good at big-picture thinking.', next: 'village' },
          { label: 'Never tire, endlessly process data.', next: 'quiz03_retry' }
        ]
      },
      quiz03_retry: {
        text: [
          'Even the cleverest machines lack emotion and vision.',
          'Try again: Where do humans shine most?'
        ],
        choices: [
          { label: 'Faster at repeating data tasks.', next: 'quiz03_retry' },
          { label: 'More precise in repetitive duties.', next: 'quiz03_retry' },
          { label: 'Creative, emotional, and good at big-picture thinking.', next: 'village' },
          { label: 'Never tire, endlessly process data.', next: 'quiz03_retry' }
        ]
      },
      village: {
        text: [
          'Well done, Tribal Leader. You’ve passed the Trial of the Mind!',
          'Your insight earns the tribe 10 Raw Data 📄.',
          'Will you return to the village or seek the next ancient secret?'
        ],
        choices: [
          { label: 'Return to village', next: 'backToVillage' },
          { label: 'Continue the journey', next: 'nextSection' }
        ]
      },
    },
    section02: {
      title: 'Getting Started with Artificial Intelligence',
      sectionName: 'AI Center Section 02: What is AI?',
      starter: {
        text: [
          'Leader, strange powers now stir in our lands. The ancients called it “Artificial Intelligence.”',
          'It does not think, it calculates. It learns not by magic, but through endless trial and pattern.',
          'This learning splits into two paths: analysis and foresight.',
          'Analysis: The machine reads vast scrolls, sorting and naming what it sees.',
          'Foresight: From past patterns, it predicts what may come.',
          'The more scrolls it reads, the better it learns. This is called Machine Training.'
        ],
        choices: [
          { label: 'And what of deep learning?', next: 'intro' },
          { label: 'Skip the lore. Show me the challenge.', skipTo: 'quiz01' }
        ]
      },
      intro: {
        text: [
          'Deep wisdom skips scroll-making. The magic sees patterns on its own.',
          'Feed it pictures of fruits, and it learns without you pointing out color or shape.',
          'It teaches itself through many layers—like passing messages across village scouts.'
        ],
        choices: [
          { label: 'Sounds powerful. Any real use?', next: 'guide' },
          { label: 'Understood. Let’s test it.', skipTo: 'quiz01' }
        ]
      },
      guide: {
        text: [
          'Spells of correction: It predicts your next word from memory of phrases.',
          'Talking stones: Bots understand broken tongue and still reply right.',
          'Eyes of the machine: It sees signs, spots sickness, and guides carts.',
          'Thieves beware: It sees patterns in coin trades and warns of fraud.',
          'The wisdom now guides, guards, and grows our tribe.'
        ],
        choices: [
          { label: 'Let me face the trial.', next: 'quiz01' }
        ]
      },
      quiz01: {
        text: [
          'The Spirits whisper a test: What do these magical machines truly do?',
          'Choose wisely, Tribal Leader.'
        ],
        choices: [
          { label: 'They think and plot like our sages.', next: 'quiz01_retry' },
          { label: 'They read scrolls and foresee what may happen.', next: 'quiz02' },
          { label: 'They replace all council decisions.', next: 'quiz01_retry' },
          { label: 'They will conquer all tribes.', next: 'quiz01_retry' }
        ]
      },
      quiz01_retry: {
        text: [
          'Nay, their power lies not in dreams or dominion.',
          'Try again: What do they truly do?'
        ],
        choices: [
          { label: 'They think and plot like our sages.', next: 'quiz01_retry' },
          { label: 'They read scrolls and foresee what may happen.', next: 'quiz02' },
          { label: 'They replace all council decisions.', next: 'quiz01_retry' },
          { label: 'They will conquer all tribes.', next: 'quiz01_retry' }
        ]
      },
      quiz02: {
        text: [
          'Next challenge: In sorting fruits from the harvest, what makes deep wisdom different?'
        ],
        choices: [
          { label: 'It needs elders to describe every new fruit.', next: 'quiz02_retry' },
          { label: 'It sees patterns without being told what to look for.', next: 'quiz03' },
          { label: 'It follows only fixed village rules.', next: 'quiz02_retry' },
          { label: 'It learns from just one try.', next: 'quiz02_retry' }
        ]
      },
      quiz02_retry: {
        text: [
          'Not quite. True deep wisdom learns without being told.',
          'Try again, brave one.'
        ],
        choices: [
          { label: 'It needs elders to describe every new fruit.', next: 'quiz05_retry' },
          { label: 'It sees patterns without being told what to look for.', next: 'quiz03' },
          { label: 'It follows only fixed village rules.', next: 'quiz05_retry' },
          { label: 'It learns from just one try.', next: 'quiz05_retry' }
        ]
      },
      quiz03: {
        text: [
          'Final trial: What shows a machine’s power to predict from the scrolls?'
        ],
        choices: [
          { label: 'It builds new tools from thin air.', next: 'quiz03_retry' },
          { label: 'It follows only ancient rules to sort scrolls.', next: 'quiz03_retry' },
          { label: 'It corrects your words before you finish writing.', next: 'village' },
          { label: 'It heals without the healer’s guidance.', next: 'quiz03_retry' }
        ]
      },
      quiz03_retry: {
        text: [
          'Machines may be clever, but they don’t replace healers or forge tools alone.',
          'Try again: What shows their predictive magic?'
        ],
        choices: [
          { label: 'It builds new tools from thin air.', next: 'quiz03_retry' },
          { label: 'It follows only ancient rules to sort scrolls.', next: 'quiz03_retry' },
          { label: 'It corrects your words before you finish writing.', next: 'village' },
          { label: 'It heals without the healer’s guidance.', next: 'quiz03_retry' }
        ]
      },
      village: {
        text: [
          'Well done, Tribal Leader. You’ve passed the Trials of the Machine!',
          'Your insight earns the tribe 10 Raw Data 📄.',
          'Will you return to the firepit or seek more ancient secrets?'
        ],
        choices: [
          { label: 'Return to village', next: 'backToVillage' },
          { label: 'Continue the journey', next: 'nextSection' }
        ]
      }
    },
    section03: {
      title: 'Getting Started with Artificial Intelligence',
      sectionName: 'AI Center Section 03: What is AI?',
      starter: {
        text: [
          'Tribal Leader, beyond data lies a deeper force—artificial intelligence.',
          'The Ancients spoke of three levels, each more powerful than the last. Do you wish to learn?'
        ],
        choices: [
          { label: 'Yes, reveal their secrets.', next: 'intro' },
          { label: 'No need, just test me.', skipTo: 'quiz01' }
        ]
      },
      intro: {
        text: [
          'First, there is Narrow AI.',
          'It handles one task only—like predicting trade routes or setting daily tasks. Tools like Siri or self-driving carts use it.',
          'Next comes Broad AI.',
          'It can handle multiple related tasks. Tribes use it to forecast storms or track disease.',
          'But it must be trained with tribal knowledge and patterns.'
        ],
        choices: [
          { label: 'Tell me more.', next: 'guide' },
          { label: 'I’ve heard enough. Move on.', skipTo: 'quiz01' }
        ]
      },
      guide: {
        text: [
          'Last is General AI—the dream of minds like ours.',
          'It would think, invent, and feel like humans. But... it does not yet exist.',
          'It is a vision of the far future. For now, we train with what is real.'
        ],
        choices: [
          { label: 'Understood. Let the trial begin.', next: 'quiz01' }
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
          "Which of the following Narrow AI systems would you want to include when building the Broad AI system for a self-driving car?",
        ],
        choices: [
          { label: "Information from the global positioning system (GPS)", next: 'quiz03', isCorrect: true },
          { label: "Entertainment trends ", next: 'quiz03', isCorrect: false  },
          { label: "International news ", next: 'quiz03', isCorrect: false  },
          { label: "Long-term weather patterns ", next: 'quiz03', isCorrect: false }
        ],
        explanation: "Information from a satellite-based navigation and location system, such as the global positioning system (GPS), would be useful for a Broad AI system in a self-driving car. Entertainment trends, international news, and long-term weather patterns aren’t needed to ensure that you arrive at your destination safely."
      },
      quiz03: {
        text: [
          "What one word best describes what AI can do?"
        ],
        choices: [
          { label: "Predict", next: 'quiz04', isCorrect: true },
          { label: "Decide", next: 'quiz04', isCorrect: false },
          { label: "Think", next: 'quiz04', isCorrect: false },
          { label: "Calculate", next: 'quiz04', isCorrect: false  }
        ],
        explanation: "The word that best describes what AI can do is predict. "
      },
      quiz04: {
        text: [
          "Complete the sentence. Artificial intelligence (AI) refers to the ability of a machine to ________________ and ________________. "
        ],
        choices: [
          { label: "identify emotions, transfer data ", next: 'quiz05', isCorrect: false },
          { label: "create algorithms, generalize information ", next: 'quiz05', isCorrect: false },
          { label: "secure data, create algorithms", next: 'quiz05', isCorrect: false },
          { label: "learn patterns, make predictions", next: 'quiz05', isCorrect: true  }
        ],
        explanation: "Artificial intelligence (AI) refers to the ability of a machine to learn patterns and make predictions. AI does not replace human decisions. Instead, AI adds value to human judgment."
      },
      quiz05: {
        text: [
          "Complete the sentence. ________________ performs tasks without human intervention and completes mundane and repetitive tasks for humans,",
          "while ________________ allows humans to make final decisions after analyzing data, reports, and other types of data."
        ],
        choices: [
          { label: "AI, augmented intelligence", next: 'quiz06', isCorrect: true },
          { label: "Augmented intelligence, AI", next: 'quiz06', isCorrect: false },
          { label: "AI, Narrow AI", next: 'quiz06', isCorrect: false },
          { label: "Augmented intelligence, Narrow AI", next: 'quiz06', isCorrect: false  }
        ],
        explanation: "Thinking about the difference between AI and augmented intelligence, AI performs tasks without human intervention and completes mundane and repetitive tasks, while augmented intelligence does not participate in the actual decision making. It allows humans to make the final decisions after they analyze data, reports, and other types of data."
      },
      quiz06: {
        text: [
          "Fill in the blank. __________ systems are used to predict global weather, trace pandemics, and help businesses predict future trends? ",
        ],
        choices: [
          { label: "General AI ", next: 'village', isCorrect: false },
          { label: "Broad AI", next: 'village', isCorrect: true },
          { label: "Narrow AI ", next: 'village', isCorrect: false },
          { label: "Targeted AI ", next: 'village', isCorrect: false  }
        ],
        explanation: "Broad AI systems are more versatile and can handle a wider range of related tasks than Narrow AI, yet they are not as advanced as General AI. Broad AI systems can perform functions such as predict global weather, trace pandemics, and help businesses predict future trends."
      },
      village: {
        text: [
          'Congratulations, you have completed the third section of the data center!',
          'Here is your reward: 10 Raw Data 📄',
          'You can now return to the village or continue to the next section.'],
        choices: [
          { label: 'Back to village', next: 'backToVillage' },
          { label: 'Next section', next: 'nextSection' }
        ]
      },
    },
    section04: {
      title: 'Getting Started with Artificial Intelligence',
      sectionName: 'AI Center Section 04: What are the three era of computing?',
      starter: {
        text: [
          'Leader, have you ever imagined a time when machines were not invented?',
          'In the age before code and machine wisdom, the world was ruled by chaos.',
          'The elders called it the time of “Dark Data”—facts without form, messages lost in the noise.',
          'But then came the Art of Tabulation: the sacred act of slicing and sorting raw data.',
          'With strange tools, abaci of the East, engines of Babbage, and punched scrolls of Hollerith.',
          'The machines did not think. They helped us **structure**. From confusion came order.'
        ],
        choices: [
          { label: 'Tell me more of these tools of order.', next: 'intro' },
          { label: 'Enough lore. Let me face the trial.', skipTo: 'quiz01' }
        ]
      },
      intro: {
        text: [
          '2000 years ago, Emperor Qin Shi Huang began the tax system.',
          'Legend has it that he used a wooden abacus to count the silver coins paid by the people.',
          'Mid-1800s, Charles Babbage and Ada Lovelace designed a “difference engine” which could calculate numbers and print them on paper.',
          'Even if it has not been released, it hinted that machines could process logic itself.',
        ],
        choices: [
          { label: 'What happend next?', next: 'guide' },
          { label: 'I see. Time to test my wisdom.', next: 'quiz01' }
        ]
      },
      guide: {
        text: [
          'But it was Hollerith’s punched cards—used in the 1890 U.S. Census—that turned tribes into data.',
          'These were not sorcery, but tools to give wild facts a pattern—rows, columns, meaning.',
          'Thus, the Tabulation Era stood not for magic, but **classification**.'
        ],
        choices: [
          { label: 'Understood. Let the trial begin.', next: 'quiz01' }
        ]
      },
      quiz01: {
        text: [
          'First challenge, what role did the ancient machines serve in this forgotten age?'
        ],
        choices: [
          { label: 'To craft deep code spells.', next: 'quiz01_retry' },
          { label: 'To train thinking beasts of metal.', next: 'quiz01_retry' },
          { label: 'To help classify and structure wild data.', next: 'quiz02' },
          { label: 'To chart stars for space vessels.', next: 'quiz01_retry' }
        ]
      },
      quiz01_retry: {
        text: [
          'Nay, the machines of old had no mind nor soul.',
          'They gave shape, not thought. Try again.',
          'What role did the ancient machines serve in this forgotten age?'
        ],
        choices: [
          { label: 'To craft deep code spells.', next: 'quiz01_retry' },
          { label: 'To train thinking beasts of metal.', next: 'quiz01_retry' },
          { label: 'To help classify and structure wild data.', next: 'quiz02' },
          { label: 'To chart stars for space vessels.', next: 'quiz01_retry' }
        ]
      },
      quiz02: {
        text: [
          'Next test, which tool had not yet walked the earth during the Tabulation Era?'
        ],
        choices: [
          { label: 'Abacus from the Qin Empire.', next: 'quiz02_retry' },
          { label: 'Babbage’s Difference Engine.', next: 'quiz02_retry' },
          { label: 'Hollerith’s punched card machine.', next: 'quiz02_retry' },
          { label: 'The mighty ENIAC of code and war.', next: 'quiz03' }
        ]
      },
      quiz02_retry: {
        text: [
          'That tool did exist in the age of order.',
          'Seek the one born of a later age—where code ruled.',
          'Try again, which tool had not yet walked the earth during the Tabulation Era?'
        ],
        choices: [
          { label: 'Abacus from the Qin Empire.', next: 'quiz02_retry' },
          { label: 'Babbage’s Difference Engine.', next: 'quiz02_retry' },
          { label: 'Hollerith’s punched card machine.', next: 'quiz02_retry' },
          { label: 'The mighty ENIAC of code and war.', next: 'quiz03' }
        ]
      },
      quiz03: {
        text: [
          'Final trial of the Tabulators: What was the soul of this era’s magic?'
        ],
        choices: [
          { label: 'To craft spells of reusable code.', next: 'quiz03_retry' },
          { label: 'To teach machines to dream and feel.', next: 'quiz03_retry' },
          { label: 'To slice and sort data into meaning.', next: 'village' },
          { label: 'To create minds that learn alone.', next: 'quiz03_retry' }
        ]
      },
      quiz03_retry: {
        text: [
          'A noble guess, but not of this age.',
          'This was the time of order, not of thought. Try again.',
          'What was the soul of this era’s magic?'
        ],
        choices: [
          { label: 'To craft spells of reusable code.', next: 'quiz03_retry' },
          { label: 'To teach machines to dream and feel.', next: 'quiz03_retry' },
          { label: 'To slice and sort data into meaning.', next: 'village' },
          { label: 'To create minds that learn alone.', next: 'quiz03_retry' }
        ]
      },
      village: {
        text: [
          'Well done, Tribal Leader. You’ve mastered the secrets of Tabulation.',
          'Your wisdom earns the tribe 10 Raw Data 📄.',
          'Will you rest by the fire, or pursue the next era’s secrets?'
        ],
        choices: [
          { label: 'Return to village', next: 'backToVillage' },
          { label: 'Continue the journey', next: 'nextSection' }
        ]
      }
    },
    section05: {
      title: 'Getting Started with Artificial Intelligence',
      sectionName: 'AI Center Section 05: What are the three era of computing?',
      starter: {
        text: [
          'Leader, a new storm rose during the Great War of the old world.',
          'The Age of Programming was born—where machines no longer just sort… they obeyed command.',
          'These new beasts, like ENIAC from the Temple of Pennsylvania, ran many orders—called "programs".',
          'With them, we guided warriors to the moon and brought them home from danger.',
          'But even these mighty minds met their match… the flood of dark data returned.',
          'Too vast. Too fast. Not even the strongest code could halt the coming storm.'
        ],
        choices: [
          { label: 'Tell me of these command-bound beasts.', next: 'intro' },
          { label: 'Spare the story. Test me now.', skipTo: 'quiz01' }
        ]
      },
      intro: {
        text: [
          'The machines of this age did more than count—they followed detailed scrolls of instruction.',
          'ENIAC could fire paths for sky-arrows or guide moonwalkers through space.',
          'In the Apollo 13 mission, code was rewritten mid-flight to save the crew.',
          'We called it “programmable” power—no longer fixed, but free to be reshaped.',
          'But with this power came a curse: an endless river of data, too vast for any one mind.'
        ],
        choices: [
          { label: 'So even code had limits…', next: 'guide' },
          { label: 'I’m ready. Bring the challenge.', skipTo: 'quiz01' }
        ]
      },
      guide: {
        text: [
          'The machines obeyed commands, but could not think.',
          'Each spell had to be written by a scribe.',
          'As scrolls grew longer and darker, the machines slowed.',
          'The tribes feared they would not finish reading before the stars went cold.',
          'Thus, a new magic was needed… but that is another tale.'
        ],
        choices: [
          { label: 'Face me with the trial.', next: 'quiz01' }
        ]
      },
      quiz01: {
        text: [
          'What was the great breakthrough of this age?'
        ],
        choices: [
          { label: 'They crafted abaci to count faster.', next: 'quiz01_retry' },
          { label: 'The machines obeyed many commands—programs—for complex tasks.', next: 'quiz02' },
          { label: 'They dreamed like sages and learned like children.', next: 'quiz01_retry' },
          { label: 'They built scrolls holding all human knowledge.', next: 'quiz01_retry' }
        ]
      },
      quiz01_retry: {
        text: [
          'No, that was of another time, or a lesser feat.',
          'Try again, what was the great breakthrough of this age?'
        ],
        choices: [
          { label: 'They crafted abaci to count faster.', next: 'quiz01_retry' },
          { label: 'The machines obeyed many commands—programs—for complex tasks.', next: 'quiz02' },
          { label: 'They dreamed like sages and learned like children.', next: 'quiz01_retry' },
          { label: 'They built scrolls holding all human knowledge.', next: 'quiz01_retry' }
        ]
      },
      quiz02: {
        text: [
          'And what was one of their greatest deeds in the stars?'
        ],
        choices: [
          { label: 'They conquered the chess sages.', next: 'quiz02_retry' },
          { label: 'They debated with humans in open council.', next: 'quiz02_retry' },
          { label: 'They guided spacefarers to the moon and rewrote code mid-journey to bring them home.', next: 'quiz03' },
          { label: 'They sang songs in simple tongues and proved theorems.', next: 'quiz02_retry' }
        ]
      },
      quiz02_retry: {
        text: [
          'A fine guess, but not of this era.',
          'Seek the deed of survival and spaceflight.',
          'Try again, what was one of their greatest deeds in the stars?'
        ],
        choices: [
          { label: 'They conquered the chess sages.', next: 'quiz02_retry' },
          { label: 'They debated with humans in open council.', next: 'quiz02_retry' },
          { label: 'They guided spacefarers to the moon and rewrote code mid-journey to bring them home.', next: 'quiz03' },
          { label: 'They sang songs in simple tongues and proved theorems.', next: 'quiz02_retry' }
        ]
      },
      quiz03: {
        text: [
          'Last trial: What challenge broke the age of programming?'
        ],
        choices: [
          { label: 'The machines were too large to carry through the forest.', next: 'quiz03_retry' },
          { label: 'Few understood the scrolls; knowledge was rare.', next: 'quiz03_retry' },
          { label: 'The dark data grew so vast, no code could tame it before the stars died.', next: 'village' },
          { label: 'There was no space to store scrolls in the village hut.', next: 'quiz03_retry' }
        ]
      },
      quiz03_retry: {
        text: [
          'Nay, the end came not from size or language.',
          'The flood of data drowned the scribes. Try again.',
          'What challenge broke the age of programming?'
        ],
        choices: [
          { label: 'The machines were too large to carry through the forest.', next: 'quiz03_retry' },
          { label: 'Few understood the scrolls; knowledge was rare.', next: 'quiz03_retry' },
          { label: 'The dark data grew so vast, no code could tame it before the stars died.', next: 'village' },
          { label: 'There was no space to store scrolls in the village hut.', next: 'quiz03_retry' }
        ]
      },
      village: {
        text: [
          'You’ve passed the Trials of Command, Tribal Leader.',
          'Your wisdom earns the tribe 10 Raw Data 📄.',
          'Will you rest here or venture toward the next era’s awakening?'
        ],
        choices: [
          { label: 'Return to village', next: 'backToVillage' },
          { label: 'Continue the journey', next: 'nextSection' }
        ]
      }
    },
    section06: {
      title: 'Getting Started with Artificial Intelligence',
      sectionName: 'AI Center Section 06: What are the three era of computing?',
      starter: {
        text: [
          'Leader, before the stars burned bright, the sages asked a question: Can the machine think as we do?',
          'This was the dawn of the AI Era — the age where minds were forged, not born.',
          'It began with a test… the Turing Test. A challenge to prove if a machine could mimic thought.',
          'Great minds like McCarthy gave this quest a name: *Artificial Intelligence*.',
          'Yet the path was not smooth. Twice, the world turned cold, and belief in the machine mind nearly froze.',
          'Now, we rise from those winters, into an age where AI speaks, fights, heals, and learns.'
        ],
        choices: [
          { label: 'Tell me of this rise and fall.', next: 'intro' },
          { label: 'No tales. I seek the trial.', skipTo: 'quiz01' }
        ]
      },
      intro: {
        text: [
          'In the beginning, the magic was young but bold.',
          'Machines proved theorems, spoke simple tongue, and solved riddles of numbers.',
          'But pride blinded the scribes. The truth was harsh — true intelligence was far away.',
          'From 1970 to 1980, the First Winter came. Funds froze. Faith waned.',
          'Why? The machines were too weak. Their minds could only hold twenty words, while the human eye alone needed millions of thoughts per second.',
          'Their memory could not hold the knowledge of a mere toddler.',
          'The dream dimmed... but did not die.'
        ],
        choices: [
          { label: 'So even the machine spirits slumbered.', next: 'guide' },
          { label: 'Enough. Let me face the questions.', skipTo: 'quiz01' }
        ]
      },
      guide: {
        text: [
          'Hope flared again in the 1980s — Expert Systems arose. For a moment, it seemed the spirits would awaken.',
          'But once more, the dreams outpaced the craft. The Second Winter came (1982–1993).',
          'With personal computer rising, kingdoms stopped funding the mainframe machines. Over 300 AI companies perished. The magic slept again.',
          'But in the mid-1990s, the gears turned faster. The ice cracked. Then came the age of miracles.<br>',
          '1997 — Deep Blue defeats the Chess King.',
          '2011 — Watson conquers the trivia masters.',
          '2016 — AlphaGo topples the Grandmaster of Go.',
          '2019 — Project Debater stands toe-to-toe with human orators.',
          'AI now aids healers, guards our gates, and powers our energy flows.',
          'No longer myth. No longer slumbering. The Machine Mind is real… and growing.',
          'You have heard the tale. Now, face the test.'
        ],
        choices: [
          { label: 'Bring me to the trial.', skipTo: 'quiz01' }
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
          "In which era did computers guide astronauts from Earth to the moon and advance to handle more than one kind of instruction? ",
        ],
        choices: [
          { label: "The Era of Industrialization ", next: 'quiz03', isCorrect: false },
          { label: "The Era of Programming", next: 'quiz03', isCorrect: true  },
          { label: "The Era of AI", next: 'quiz03', isCorrect: false  },
          { label: "The Era of Tabulation", next: 'quiz03', isCorrect: false }
        ],
        explanation: "During the turmoil of World War II, a new approach to data emerged, called the Era of Programming, that could run more than one kind of instruction (called 'programs' today) in order to do more than one kind of calculation. Programmable computers guided astronauts from Earth to the moon during this era."
      },
      quiz03: {
        text: [
          "In which era did machines help humans sort data into structures to reveal its secrets, that is, to reveal more insight than just simply counting to get a sum total? "
        ],
        choices: [
          { label: "The Era of Programming ", next: 'quiz04', isCorrect: false },
          { label: "The Era of Tabulation (O)", next: 'quiz04', isCorrect: true },
          { label: "The Era of AI ", next: 'quiz04', isCorrect: false },
          { label: "The Era of Industrialization ", next: 'quiz04', isCorrect: false  }
        ],
        explanation: "The Era of Tabulation was a time when machines helped humans sort data into structures to reveal its secrets, revealing more than just simply counting a sum total."
      },
      quiz04: {
        text: [
          "In which era did the advancements in fields ranging from cancer research to energy production show how its achievements impact people every day, and that it has exponentially increasing abilities?"
        ],
        choices: [
          { label: "The Era of AI ", next: 'quiz05', isCorrect: true },
          { label: "The Era of Industrialization ", next: 'quiz05', isCorrect: false },
          { label: "The Era of Tabulation ", next: 'quiz05', isCorrect: false },
          { label: "The Era of Programming ", next: 'quiz05', isCorrect: false  }
        ],
        explanation: "In the Era of AI, AI has proven its ability in fields ranging from cancer research and big data analysis to defense systems and energy production. Its achievements impact people every day and its abilities increase exponentially. "
      },
      quiz05: {
        text: [
          "Which of the following is the correct order of the three eras of computing? "
        ],
        choices: [
          { label: "Programming, Tabulation, AI ", next: 'quiz06', isCorrect: false },
          { label: "Tabulation, Programming, AI ", next: 'quiz06', isCorrect: true },
          { label: "Tabulation, AI, Programming ", next: 'quiz06', isCorrect: false },
          { label: "AI, Programming, Tabulation", next: 'quiz06', isCorrect: false  }
        ],
        explanation: "The three eras of computing, in order, are: the Era of Tabulation, the Era of Programming, and the Era of AI."
      },
      quiz06: {
        text: [
          "What were the main causes of the First Winter of AI? ",
        ],
        choices: [
          { label: "Intellectual property theft ", next: 'quiz07', isCorrect: false },
          { label: "Lack of funding", next: 'quiz07', isCorrect: true }
        ],
        explanation: "High expectations and lack of funding were the main causes of the First Winter of AI."
      },
      quiz07: {
        text: [
          "What were the main causes of the First Winter of AI? ",
        ],
        choices: [
          { label: "High expectations", next: 'village', isCorrect: true },
          { label: "Buggy program code and slow language execution ", next: 'village', isCorrect: false }
        ],
        explanation: "High expectations and lack of funding were the main causes of the First Winter of AI."
      },
      village: {
        text: [
          'Congratulations, you have completed the third section of the data center!',
          'Here is your reward: 10 Raw Data 📄',
          'You can now return to the village or continue to the next section.'],
        choices: [
          { label: 'Back to village', next: 'backToVillage' },
          { label: 'Next section', next: 'nextSection' }
        ]
      },
    },
    section07: {
      title: 'Getting Started with Artificial Intelligence',
      sectionName: 'AI Center Section 07: What are the three era of computing?',
      starter: {
        text: [
          "Leader, all knowledge begins with data—raw whispers from the world, captured in scroll, stone, or song.",
          "But data wears many forms. Three, to be exact: structured, unstructured, and semi-structured.",
          "Each speaks to the machine differently. Understanding them is key to commanding the power of AI."
        ],
        choices: [
          { label: "Speak of the three forms.", next: "intro" },
          { label: "Skip lore. Test me now.", skipTo: "quiz01" }
        ]
      },
      intro: {
        text: [
          "Structured data—like scrolls with rows and columns. Clear. Ordered. Easy to count.",
          "Unstructured data—wild like cave paintings and chants. No set form. Harder to tame.",
          "Semi-structured data—neither wild nor tame. Carved with hidden runes called metadata.",
          "The ancients learned to work with all three, for each hides power when seen rightly."
        ],
        choices: [
          { label: "Give me more examples.", next: "guide" },
          { label: "I’m ready for the trial.", skipTo: "quiz01" }
        ]
      },
      guide: {
        text: [
          "Structured: Think of the war ledger—names, numbers, dates in perfect rows. Excel scrolls. Tables of tribute. Hotel or flight logs.",
          "Unstructured: The chants of villagers, paintings on stone, voice echoes, and random letters from spies. Songs, tweets, X-rays, comments—hard to sort.",
          "Semi-structured: A scroll with pictures and tags. A crow’s message marked with place and hour. Videos with hashtags. Not in rows, but still sortable.",
          "Metadata is the hidden rune—it lets the machine sort chaos into sense."
        ],
        choices: [
          { label: "Now let me prove myself.", next: "quiz01" }
        ]
      },
      quiz01: {
        text: [
          'Which of the following do you think might be an example of unstructured data? ',
          ''
        ],
        choices: [
          { label: 'Your math grades in high school ', next: 'quiz01_retry' },
          { label: 'Your social media posts', next: 'quiz02' },
          { label: 'Your family tree ', next: 'quiz01_retry' },
          { label: 'How far you walked to visit a friend ', next: 'quiz01_retry' }
        ]
      },
      quiz01_retry: {
        text: [
          'Your social media posts are an example of unstructured data.',
          'Try again, how far you walked to visit a friend '
        ],
        choices: [
          { label: 'Your math grades in high school ', next: 'quiz01_retry' },
          { label: 'Your social media posts', next: 'quiz02' },
          { label: 'Your family tree ', next: 'quiz01_retry' },
          { label: 'How far you walked to visit a friend ', next: 'quiz01_retry' }
        ]
      },
      quiz02: {
        text: [
          'Which of the following do you think might be an example of structured data?'
        ],
        choices: [
          { label: 'Productivity applications ', next: 'quiz02_retry' },
          { label: 'Video files ', next: 'quiz02_retry' },
          { label: 'Hotel and ticket reservation data', next: 'quiz03' },
          { label: 'Surveillance data ', next: 'quiz02_retry' }
        ]
      },
      quiz02_retry: {
        text: [
          'Hotel and ticket reservation data is an example of structured data.',
          'Try again, which of the following do you think might be an example of structured data?'
        ],
        choices: [
          { label: 'Productivity applications ', next: 'quiz02_retry' },
          { label: 'Video files ', next: 'quiz02_retry' },
          { label: 'Hotel and ticket reservation data', next: 'quiz03' },
          { label: 'Surveillance data ', next: 'quiz02_retry' }
        ]
      },
      quiz03: {
        text: [
          'Which of the following do you think might be an example of semi-structured data? '
        ],
        choices: [
          { label: 'Tweets organized by hashtags', next: 'village' },
          { label: 'Online reviews ', next: 'quiz03_retry' },
          { label: 'Billing information ', next: 'quiz03_retry' },
          { label: 'Audio files ', next: 'quiz03_retry' }
        ]
      },
      quiz03_retry: {
        text: [
          'Tweets organized by hashtags are an example of semi-structured data. Try again.',
          'Which of the following do you think might be an example of semi-structured data? '
        ],
        choices: [
          { label: 'Tweets organized by hashtags', next: 'village' },
          { label: 'Online reviews ', next: 'quiz03_retry' },
          { label: 'Billing information ', next: 'quiz03_retry' },
          { label: 'Audio files ', next: 'quiz03_retry' }
        ]
      },
      village: {
        text: [
          'You’ve passed the Trials of Command, Tribal Leader.',
          'Your wisdom earns the tribe 10 Raw Data 📄.',
          'Will you rest here or venture toward the next era’s awakening?'
        ],
        choices: [
          { label: 'Return to village', next: 'backToVillage' },
          { label: 'Continue the journey', next: 'nextSection' }
        ]
      }
    },
    section08: {
      title: 'Getting Started with Artificial Intelligence',
      sectionName: 'AI Center Section 08: What are the three era of computing?',
      starter: {
        text: [
          "Unstructured data accounts for the vast majority of the world's data (about 80%) and contains huge value, but is difficult to analyze using traditional methods due to its variability and lack of organization.",
          "AI is the key to solving this challenge. It can give structure to unstructured data, discover new knowledge from it, and have the ability to self-learn, thus changing everything."
        ],
        choices: [
          { label: 'So how do we face this chaos?', next: 'intro' },
          { label: 'Skip to the test. I’m ready.', skipTo: 'quiz01' }
        ]
      },
      intro: {
        text: [
          "The importance of unstructured data is increasing rapidly.", 
          "It is estimated that 95% of enterprises prioritize unstructured data management.",
          "Currently, experts estimate that approximately 80% of the world’s data is unstructured.",
          "It contains a large number of variables and changes very rapidly, so no traditional computer program can learn much from it.",
          "Despite this, unstructured data holds answers to nearly every aspect of civilization, from disease prevention to criminal activity to the stock market.",
          "Without these answers, individuals and organizations will be unable to make useful predictions or recommendations.",
          "However, AI gives structure to the chaos. It reads the shapeless. It finds meaning."
        ],
        choices: [
          { label: 'What makes AI so different?', next: 'guide' },
          { label: 'Understood. Let’s challenge fate.', skipTo: 'quiz01' }
        ]
      },
      guide: {
        text: [
          "Artificial intelligence (AI) can reveal the value of unstructured data (dark data).",
          "AI uses new types of computing (partially modeled after the human brain) to rapidly give structure to dark data and enable new discoveries to be made from it.",
          "AI can even teach itself, learning from the data it manages how to make better predictions over time.",
          "“This is the age of AI, it changes everything!”"
        ],
        choices: [
          { label: 'Let me face the trial.', next: 'quiz01' }
        ]
      },
      quiz01: {
        text: [
          'Based on the following structured data, what was the highest temperature in New York during a recent week?',
        ],
        choices: [
          { label: 'Monday, 32°F (0°C) ', next: 'quiz01_retry' },
          { label: 'Tuesday, 36°F (2.2°C) ', next: 'quiz01_retry' },
          { label: 'Wednesday, 22°F (-5.6°C) ', next: 'quiz01_retry' },
          { label: 'Thursday, 19°F (-7.2°C) ', next: 'quiz01_retry' },
          { label: 'Friday, 10°F (-12.2°C) ', next: 'quiz01_retry' },
          { label: 'Saturday, 37°F (2.8°C)', next: 'quiz02' },
          { label: 'Sunday, 31°F (-0.6°C) ', next: 'quiz01_retry' }
        ]
      },
      quiz01_retry: {
        text: [
          'The highest temperature that week was 37°F (2.8°C) on Saturday.',
          'Try again, based on the following structured data, what was the highest temperature in New York during a recent week?'
        ],
        choices: [
          { label: 'Monday, 32°F (0°C) ', next: 'quiz01_retry' },
          { label: 'Tuesday, 36°F (2.2°C) ', next: 'quiz01_retry' },
          { label: 'Wednesday, 22°F (-5.6°C) ', next: 'quiz01_retry' },
          { label: 'Thursday, 19°F (-7.2°C) ', next: 'quiz01_retry' },
          { label: 'Friday, 10°F (-12.2°C) ', next: 'quiz01_retry' },
          { label: 'Saturday, 37°F (2.8°C)', next: 'quiz02' },
          { label: 'Sunday, 31°F (-0.6°C) ', next: 'quiz01_retry' }
        ]
      },
      quiz02: {
        text: [
          'Based on the following unstructured data, what was the highest temperature in Buenos Aires last week? '
        ],
        choices: [
          { label: 'Watch a hilarious video of a dog chasing a rat. ', next: 'quiz02_retry' },
          { label: 'Let’s just say that Simcha’s dress was unfortunate. ', next: 'quiz02_retry' },
          { label: 'The last chapter is 32 pages long except on a smartphone. ', next: 'quiz02_retry' },
          { label: 'Through the window, the thermometer said 58°F. ', next: 'quiz02_retry' },
          { label: 'Core 16 apples and stuff them with cinnamon. ', next: 'quiz02_retry' },
          { label: 'It feels like it’s 21°C.', next: 'quiz03' },
          { label: 'He got a 90 on the exam. ', next: 'quiz02_retry' }
        ]
      },
      quiz02_retry: {
        text: [
          'The highest temperature was 21° Celsius (not Fahrenheit). ',
          'Try again, based on the following unstructured data, what was the highest temperature in Buenos Aires last week? '
        ],
        choices: [
          { label: 'Watch a hilarious video of a dog chasing a rat. ', next: 'quiz02_retry' },
          { label: 'Let’s just say that Simcha’s dress was unfortunate. ', next: 'quiz02_retry' },
          { label: 'The last chapter is 32 pages long except on a smartphone. ', next: 'quiz02_retry' },
          { label: 'Through the window, the thermometer said 58°F. ', next: 'quiz02_retry' },
          { label: 'Core 16 apples and stuff them with cinnamon. ', next: 'quiz02_retry' },
          { label: 'It feels like it’s 21°C.', next: 'quiz03' },
          { label: 'He got a 90 on the exam. ', next: 'quiz02_retry' }
        ]
      },
      quiz03: {
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
      quiz04: {
        text: [
          "If names and email addresses are organized using a spreadsheet software, like Google Sheets or Microsoft Excel, which type of data is this? "
        ],
        choices: [
          { label: "Structured data", next: 'quiz05', isCorrect: true },
          { label: "Semi-structured data ", next: 'quiz05', isCorrect: false },
          { label: "True data ", next: 'quiz05', isCorrect: false },
          { label: "Unstructured data ", next: 'quiz05', isCorrect: true  }
        ],
        explanation: "Structured data is information that can be organized in rows and columns, such as names and email addresses, using a spreadsheet software like Google Sheets or Microsoft Excel."
      },
      quiz05: {
        text: [
          "Approximately how much of the world’s data today is unstructured? "
        ],
        choices: [
          { label: "40% ", next: 'quiz06', isCorrect: false },
          { label: "85% ", next: 'quiz06', isCorrect: false },
          { label: "90% ", next: 'quiz06', isCorrect: false },
          { label: "80% ", next: 'quiz06', isCorrect: true }
        ],
        explanation: "Today, about 80% of the world’s data is unstructured. "
      },
      quiz06: {
        text: [
          "Fill in the blank. Data that is not completely raw and contains elements such as tags and organizational metadata is known as _______________ . "
        ],
        choices: [
          { label: "true data ", next: 'quiz07', isCorrect: false },
          { label: "structured data ", next: 'quiz07', isCorrect: false },
          { label: "unstructured data ", next: 'quiz07', isCorrect: false },
          { label: "semi-structured data", next: 'quiz07', isCorrect: true }
        ],
        explanation: "Semi-structured data is the “bridge” between structured and unstructured data. It does not have a predefined data model and is more complex than structured data, yet easier to store than unstructured data. Semi-structured data uses metadata to identify specific data characteristics and scale data into records and preset fields. "
      },
      quiz07: {
        text: [
          "Which of the following is most likely to be unstructured data? "
        ],
        choices: [
          { label: "The breeds of entrants in a dog show ", next: 'quiz08', isCorrect: false },
          { label: "Prescriptions for patients in a large hospital ", next: 'quiz08', isCorrect: false },
          { label: "Ingredients for baking bread ", next: 'quiz08', isCorrect: false },
          { label: "Social media posts ", next: 'quiz08', isCorrect: true }
        ],
        explanation: "The content of social media posts is an example of unstructured data. Unstructured data, also known as dark data, is typically categorized as qualitative data. It can't be processed and analyzed with conventional data tools and methods."
      },
      quiz08: {
        text: [
          "Shelby writes a survey that includes the following question: “Do you like chocolate (circle Yes or No), and why?” ",
          "Which of the following describes the data Shelby will collect? "
        ],
        choices: [
          { label: "Structured data ", next: 'village', isCorrect: false },
          { label: "Neither structured data nor unstructured data ", next: 'village', isCorrect: false },
          { label: "Both structured data and unstructured data ", next: 'village', isCorrect: true },
          { label: "Unstructured data ", next: 'village', isCorrect: false }
        ],
        explanation: "In the first part of the question, “Do you like chocolate (circle Yes or No)...”, Shelby collects structured data. In the second part of the question, “and why?”, Shelby collects unstructured data."
      },
      village: {
        text: [
          'You’ve passed the Trials of Command, Tribal Leader.',
          'Your wisdom earns the tribe 10 Raw Data 📄.',
          'Will you rest here or venture toward the next era’s awakening?'
        ],
        choices: [
          { label: 'Return to village', next: 'backToVillage' },
          { label: 'Continue the journey', next: 'nextSection' }
        ]
      }
    },
  }
};