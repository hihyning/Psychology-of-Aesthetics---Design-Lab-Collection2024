const labs = [
    {
        title: "Lab 1. Perception Bias",
        subtitle: "Compositional Biases in Visual Perception",
        description: "Based on Palmer and Langlois (2017), this experiment investigates how we perceive and form preferences for different visual compositions in space.",
        url: "https://hihyning.github.io/Lab-1-Psych-of-Aesthetics/"
    },
    {
        title: "Lab 2. Colour Preferences",
        subtitle: "Individual Colour Preferences",
        description: "Palmer & Schloss (2010) investigated the 'ecological valence theory of human colour preferences,' this experiment explores how we naturally connect with and develop feelings about different colours.",
        url: "https://hihyning.github.io/Lab-2-Psych-of-Aesthetics/"
    },
    {
        title: "Lab 3. Celebrity Morphs",
        subtitle: "Face Perception & Recognition",
        description: "Drawing on Halberstadt et al (2013) on face perception, this experiment investigates how familiarity influences our aesthetic judgments.",
        url: "https://hihyning.github.io/Lab-3-Psych-of-Aesthetics/"
    },
    {
        title: "Final. Active Learning / COMING SOON",
        subtitle: "Impact of Active Learning on Incidental Memory",
        description: "This self-designed experiment explores how active learning through digital interaction affects incidental memory, comparing it to passive observation, by examining participants' ability to recognise visual stimuli in a matching card game.",
        url: "https://hihyning.github.io/Final-Project-Psych-of-Aesthetics/",
        extraText: "Click here to read the full report about the experiment design" // Only add to the final card
    }
];

function createLabCards() {
  const container = document.querySelector('.labs-container');
  
  labs.forEach((lab, index) => {
    const card = document.createElement('div');
    card.className = 'lab-card';
    
    let cardHTML = `
      <div class="card-header">
        <h3>${lab.title}</h3>
        <p class="subtitle">${lab.subtitle}</p>
      </div>
      <p class="description">${lab.description}</p>
      <p class="visit-text">Click to visit experiment →</p>
    `;
    
    // Add the extra text only to the final card (last item in the array)
    if (lab.extraText && index === labs.length - 1) {
      cardHTML += `<a href="https://docs.google.com/document/d/1udiVMSEYPCgBUHvXs5k5vGOdynrzfkkOZz7qYZIWB0g/edit?usp=sharing" class="extra-text">${lab.extraText}</a>`;
    }

    card.innerHTML = cardHTML;
    card.addEventListener('click', () => window.location.href = lab.url);
    container.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', createLabCards);