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
        title: "Final Experiment",
        subtitle: "Comprehensive Analysis of Design Psychology",
        description: "Comprehensive Analysis of Design Psychology",
        url: "https://your-final-url.com"
    }
];

function createLabCards() {
    const container = document.querySelector('.labs-container');
    
    labs.forEach(lab => {
      const card = document.createElement('div');
      card.className = 'lab-card';
      card.innerHTML = `
        <div class="card-header">
          <h3>${lab.title}</h3>
          <p class="subtitle">${lab.subtitle}</p>
        </div>
        <p class="description">${lab.description}</p>
        <p class="visit-text">Click to visit experiment →</p>
      `;
      
      card.addEventListener('click', () => window.location.href = lab.url);
      container.appendChild(card);
    });
  }

document.addEventListener('DOMContentLoaded', createLabCards);