export function initDialogue() {
  requestAnimationFrame(() => {
    const dialogueText = document.getElementById('dialogue-text');
    const choiceBox = document.querySelector('.choice-box');

    if (!dialogueText || !choiceBox) {
      console.error('Dialogue DOM elements not found.');
      return;
    }

    const dialogueMap = {
      starter: {
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
          '<b>Try to categorize the following data types:<b>',
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
          { label: 'Structured', next: 'village' },
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
          { label: 'Structured', next: 'village' },
          { label: 'Unstructured', next: 'section01_quiz07_retry' }
        ]
      },     
      village: {
        text: ['🏡 "You return to the village, wiser than before. Your journey is far from over."'],
        choices: [
          { label: 'back to village', next: '' },
          { label: 'next section', next: '' }
        ]
      }
    };

    // Tracks history of visited dialogue states and player choices
    const visited = [];

    function appendDialogueText(lines, speaker = 'Elder Ava') {
      lines.forEach(line => {
        dialogueText.innerHTML += `<p class="npc-response"><strong>${speaker}:</strong> ${line}</p>`;
      });
    }

    function appendPlayerResponse(text) {
      dialogueText.innerHTML += `<p class="player-response"><strong>You:</strong> ${text}</p>`;
    }

    function updateDialogue(stateKey, playerResponse = null, isSkip = false) {
      const state = dialogueMap[stateKey];
      if (!state) return;

      // Only clear on fresh start
      if (stateKey === 'starter') {
        dialogueText.innerHTML = '';
        visited.length = 0;
      }

      if (!isSkip && playerResponse) {
        appendPlayerResponse(playerResponse);
      }

      appendDialogueText(state.text);
      visited.push(stateKey);

      choiceBox.innerHTML = '';

      state.choices.forEach(choice => {
        const btn = document.createElement('button');
        btn.classList.add('choice');
        btn.textContent = choice.label;

        btn.addEventListener('click', () => {
          if (choice.skipTo) {
            appendPlayerResponse(choice.label);
            showSkippedPath(stateKey, choice.skipTo);
          } else {
            updateDialogue(choice.next, choice.label, false);
          }

          dialogueText.scrollTop = dialogueText.scrollHeight;
        });

        choiceBox.appendChild(btn);
      });
    }

    // Handles skipping by jumping directly and showing only Ava's text from remaining states
    function showSkippedPath(fromState, toState) {
      const fullPath = ['starter', 'section01_intro', 'section01_guide', 'section01_quiz01'];
      const fromIndex = fullPath.indexOf(fromState);
      const toIndex = fullPath.indexOf(toState);

      if (fromIndex === -1 || toIndex === -1 || toIndex <= fromIndex) return;

      // Remove player response for skipped segments
      for (let i = fromIndex + 1; i <= toIndex; i++) {
        const stateKey = fullPath[i];
        const state = dialogueMap[stateKey];
        appendDialogueText(state.text);
        visited.push(stateKey);
      }

      // Load choices of final state
      const finalState = dialogueMap[toState];
      choiceBox.innerHTML = '';

      finalState.choices.forEach(choice => {
        const btn = document.createElement('button');
        btn.classList.add('choice');
        btn.textContent = choice.label;

        btn.addEventListener('click', () => {
          if (choice.next === 'village') {
            import('../js/main.js').then(module => module.loadVillage());
          } else {
            updateDialogue(choice.next, choice.label);
          }
        });

        choiceBox.appendChild(btn);
      });

      dialogueText.scrollTop = dialogueText.scrollHeight;
    }

    updateDialogue('starter');
  });
}
