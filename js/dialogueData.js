export const dialogueMapData = {
      section01_starter: {
        text: [
          'Tribal Leader, you’ve arrived! The fate of our village rests not on brute strength, but on wisdom that hidden in something the ancients called… data.',
          'Before you lead warriors into strategy or trade, you must first learn to lead with knowledge. Will you heed this duty?'
        ],
        choices: [
          { label: 'I’m ready. Tell me what must be done.', next: 'section01_intro' },
          { label: 'Skip the ritual, just tell me where to click.', skipTo: 'section01_quiz01' }
        ]
      },
      section01_intro: {
        text: [
          'All tribal decisions—harvests, alliances, defenses—start with data.',
          'But not all data is the same. There are two forces at work: one structured like ancient scrolls, one unstructured like jungle whispers.'
        ],
        choices: [
          { label: 'Tell me the difference between structured and unstructured.', next: 'section01_guide' },
          { label: 'I’ll figure it out. Give me the task.', skipTo: 'section01_quiz01' }
        ]
      },
      section01_guide: {
        text: [
          'Structured data is organized information arranged in rows and columns, like names and dates in a spreadsheet, making it easy to search and analyze.',
          'Unstructured data is raw and unorganized—like photos, videos, or text messages—which requires more effort to process but can uncover powerful insights.'
        ],
        choices: [
          { label: 'Got it! Give me the task.', next: 'section01_quiz01' }
        ]
      },
      section01_quiz01: {
        text: [
          '<b>Try to categorize the following data types:</b>',
          'Battle videos'
        ],
        choices: [
          { label: 'Structured', next: 'section01_quiz01_retry' },
          { label: 'Unstructured', next: 'section01_quiz02' }
        ]
      },
      section01_quiz01_retry: {
        text: [
          'A battle video isn’t structured data because it’s a video, not organized in a clear, searchable format like a table or database.',
          'Now, Try again',
          'Battle videos'
        ],
        choices: [
          { label: 'Structured', next: 'section01_quiz01_retry' },
          { label: 'Unstructured', next: 'section01_quiz02' }
        ]
      },
      section01_quiz02: {
        text: [
          'Correct!',
          'Attack dates'
        ],
        choices: [
          { label: 'Structured', next: 'section01_quiz03' },
          { label: 'Unstructured', next: 'section01_quiz02_retry' }
        ]
      },
      section01_quiz02_retry: {
        text: [
          'Attack dates follow a clear format like 12/06/2025, which makes them easy to sort or compare.',
          'Now, Try again',
          'Attack dates'
        ],
        choices: [
          { label: 'Structured', next: 'section01_quiz03' },
          { label: 'Unstructured', next: 'section01_quiz02_retry' }
        ]
      },
      section01_quiz03: {
        text: [
          'Correct!',
          'Village messages',
        ],
        choices: [
          { label: 'Structured', next: 'section01_quiz03_retry' },
          { label: 'Unstructured', next: 'section01_quiz04' }
        ]
      },
      section01_quiz03_retry: {
        text: [
          'Village messages are text conversations, not neatly arranged data you can sort or filter easily.', 
          'Now, Try again',
          'Village messages'
        ],
        choices: [
          { label: 'Structured', next: 'section01_quiz03_retry' },
          { label: 'Unstructured', next: 'section01_quiz04' }
        ]
      },      
      section01_quiz04: {
        text: [
          'Correct!',
          'Weapon names',
        ],
        choices: [
          { label: 'Structured', next: 'section01_quiz05' },
          { label: 'Unstructured', next: 'section01_quiz04_retry' }
        ]
      },
      section01_quiz04_retry: {
        text: [
          'Weapon names are short and consistent, so they can be listed and searched easily.', 
          'Now, Try again',
          'Weapon names'
        ],
        choices: [
          { label: 'Structured', next: 'section01_quiz05' },
          { label: 'Unstructured', next: 'section01_quiz04_retry' }
        ]
      },
      section01_quiz05: {
        text: [
          'Correct!',
          'Message letters',
        ],
        choices: [
          { label: 'Structured', next: 'section01_quiz05_retry' },
          { label: 'Unstructured', next: 'section01_quiz06' }
        ]
      },
      section01_quiz05_retry: {
        text: [
          'Message letters are like written notes, not organized into clear fields like a database.', 
          'Now, Try again',
          'Message letters'
        ],
        choices: [
          { label: 'Structured', next: 'section01_quiz05_retry' },
          { label: 'Unstructured', next: 'section01_quiz06' }
        ]
      },
      section01_quiz06: {
        text: [
          'Correct!',
          'Map pictures',
        ],
        choices: [
          { label: 'Structured', next: 'section01_quiz06_retry' },
          { label: 'Unstructured', next: 'section01_quiz07' }
        ]
      },
      section01_quiz06_retry: {
        text: [
          'Map pictures are images, so they don’t have organized information like a spreadsheet."', 
          'Now, Try again',
          'Map pictures'
        ],
        choices: [
          { label: 'Structured', next: 'section01_quiz06_retry' },
          { label: 'Unstructured', next: 'section01_quiz07' }
        ]
      },
      section01_quiz07: {
        text: [
          'Correct!',
          'Spy code',
        ],
        choices: [
          { label: 'Structured', next: 'section01_village' },
          { label: 'Unstructured', next: 'section01_quiz07_retry' }
        ]
      },
      section01_quiz07_retry: {
        text: [
          'Spy codes are exact numbers or labels that can be quickly looked up or matched."', 
          'Now, Try again',
          'Spy code'
        ],
        choices: [
          { label: 'Structured', next: 'section01_village' },
          { label: 'Unstructured', next: 'section01_quiz07_retry' }
        ]
      },     
      section01_village: {
        text: [
          'Congratulations, you have completed the first section of the data center!',
          'Here is your reward: 10 Data Packet 📊',
          'You can now return to the village or continue to the next section.'],
        choices: [
          { label: 'Back to village', next: 'backToVillage' },
          { label: 'Next section', next: 'nextSection' }
        ]
      },
      section02_starter: {
        text: [
          "Well done, Tribal Leader. But knowing the type of data is just the beginning.",
          "To truly command knowledge, you must learn how to store and understand it. The ancients used something powerful called a database."
        ],
        choices: [
          { label: "Tell me more about this 'database'.", next: 'section02_intro' },
          { label: 'Skip the ritual, just tell me where to click.', skipTo: 'section02_quiz01' }
        ]
      },
      section02_intro: {
        text: [
          "A database is a sacred vault, organizing structured data into rows and columns for quick retrieval.",
          "Most are called relational databases—multiple scrolls, linked by common symbols, allowing patterns to emerge.",
          "But to make these scrolls useful, data must be transformed into a standard format. Only then can true insights be uncovered."
        ],
        choices: [
          { label: "Got it! But what format?", next: 'section02_guide' },
          { label: 'I’ll figure it out. Give me the task.', skipTo: 'section02_quiz01' }
        ]
      },
      section02_guide: {
        text: [
          "Quantitative data is like a warrior’s strength, which can be counted, measured, and tracked: height, weight, temperature.",
          "Qualitative data is like a poem—it describes qualities: colors, smells, or the softness of goat wool.",
          "Both types guide your tribe. But knowing which is which helps you ask better questions."
        ],
        choices: [
          { label: "Let me try to identify them!", next: 'section02_quiz01' }
        ]
      },
      section02_quiz01: {
        text: [
          "<b>Scenario: While tour the village, you see a warrior walking a big wolf.</b>",
          "Which kind of data it is about the wolf description?",
          "The wolf has four legs."
        ],
        choices: [
          { label: "Quantitative", next: 'section02_quiz02' },
          { label: "Qualitative", next: 'section02_quiz01_retry' }
        ]
      },
      section02_quiz01_retry: {
        text: [
          "'Four legs' is a countable attribute—it can be measured numerically.",
          "Now, try again: The wolf has four legs."
        ],
        choices: [
          { label: "Quantitative", next: 'section02_quiz02' },
          { label: "Qualitative", next: 'section02_quiz01_retry' }
        ]
      },
      section02_quiz02: {
        text: [
          "Correct! Next: The wolf weighs 12 pounds."
        ],
        choices: [
          { label: "Quantitative", next: 'section02_quiz03' },
          { label: "Qualitative", next: 'section02_quiz02_retry' }
        ]
      },
      section02_quiz02_retry: {
        text: [
          "'12 pounds' is a measurement that can be quantified.",
          "Now, try again: The wolf weighs 12 pounds."
        ],
        choices: [
          { label: "Quantitative", next: 'section02_quiz03' },
          { label: "Qualitative", next: 'section02_quiz02_retry' }
        ]
      },
      section02_quiz03: {
        text: [
          "Correct! Next: The wolf has short fur."
        ],
        choices: [
          { label: "Quantitative", next: 'section02_quiz03_retry' },
          { label: "Qualitative", next: 'section02_quiz04' }
        ]
      },
      section02_quiz03_retry: {
        text: [
          "'Short fur' is a descriptive quality—not a number.",
          "Now, try again: The wolf has short fur."
        ],
        choices: [
          { label: "Quantitative", next: 'section02_quiz03_retry' },
          { label: "Qualitative", next: 'section02_quiz04' }
        ]
      },
      section02_quiz04: {
        text: [
          "Correct! Next: The wolf has black spots."
        ],
        choices: [
          { label: "Quantitative", next: 'section02_quiz04_retry' },
          { label: "Qualitative", next: 'section02_quiz05' }
        ]
      },
      section02_quiz04_retry: {
        text: [
          "'Black spots' describe appearance, which is a characteristic that can not be measure.",
          "Now, try again: The wolf has black spots."
        ],
        choices: [
          { label: "Quantitative", next: 'section02_quiz04_retry' },
          { label: "Qualitative", next: 'section02_quiz05' }
        ]
      },

      section02_quiz05: {
        text: [
          "Correct! Next: Which kind of data it is about the warrior description?",
          "The warrior is across the street."
        ],
        choices: [
          { label: "Quantitative", next: 'section02_quiz05_retry' },
          { label: "Qualitative", next: 'section02_quiz06' }
        ]
      },
      section02_quiz05_retry: {
        text: [
          "‘Across the street’ describes a location, not a measurable quantity.",
          "Now, Try again: The warrior is across the street."
        ],
        choices: [
          { label: "Quantitative", next: 'section02_quiz05_retry' },
          { label: "Qualitative", next: 'section02_quiz06' }
        ]
      },
      section02_quiz06: {
        text: [
          "Correct! Next: The warrior has a six foot reins."
        ],
        choices: [
          { label: "Quantitative", next: 'section02_quiz06_retry' },
          { label: "Qualitative", next: 'section02_quiz07' }
        ]
      },
      section02_quiz06_retry: {
        text: [
          "‘Six foot reins’ are measurable and numeric",
          "Now, Try again: The warrior has a six foot reins."
        ],
        choices: [
          { label: "Quantitative", next: 'section02_quiz07' },
          { label: "Qualitative", next: 'section02_quiz06_retry' }
        ]
      },
      section02_quiz07: {
        text: [
          "Correct! Next: The warrior has gray hair."
        ],
        choices: [
          { label: "Quantitative", next: 'section02_quiz08' },
          { label: "Qualitative", next: 'section02_quiz07_retry' }
        ]
      },
      section02_quiz07_retry: {
        text: [
          "‘Gray hair’ describes an observable quality",
          "Now, Try again: The warrior has gray hair."
        ],
        choices: [
          { label: "Quantitative", next: 'section02_quiz08' },
          { label: "Qualitative", next: 'section02_quiz07_retry' }
        ]
      },
      section02_quiz08: {
        text: [
          "The warrior is wearing leather protectors."
        ],
        choices: [
          { label: "Quantitative", next: 'section02_quiz08_retry' },
          { label: "Qualitative", next: 'section02_village' }
        ]
      },
      section02_quiz08_retry: {
        text: [
          "‘Wearing leather protectors’ is a descriptive trait, not a numeric value.",
          "Now, Try again: The warrior is wearing leather protectors."
        ],
        choices: [
          { label: "Quantitative", next: 'section02_quiz08_retry' },
          { label: "Qualitative", next: 'section02_village' }
        ]
      },
      section02_village: {
        text: [
          'Congratulations, you have completed the second section of the data center!',
          'Here is your reward: 10 Data Packet 📊',
          'You can now return to the village or continue to the next section.'],
        choices: [
          { label: 'Back to village', next: 'backToVillage' },
          { label: 'Next section', next: 'nextSection' }
        ]
      },
    };