const tips = [
    "Take a few deep breaths.",
    "Notice the sensations in your body.",
    "Observe your thoughts without judgment.",
    "Spend a few minutes focusing on your breath.",
    "Take a mindful walk and observe your surroundings.",
    "Practice gratitude by listing three things you're thankful for.",
    "Do a body scan, starting from your toes to your head.",
    "Spend a few moments in silence, noticing any sounds around you.",
    "Focus on a single task and do it mindfully.",
    "Take a break and stretch your body.",
    "Spend a moment appreciating the present moment.",
    "Observe the details of an object near you.",
    "Take a few minutes to meditate.",
    "Practice mindful eating, noticing each bite.",
    "Reflect on a positive experience you had today.",
    "Focus on your breath and let go of any tension.",
    "Write down your thoughts in a journal.",
    "Spend a few moments practicing loving-kindness meditation.",
    "Take a mindful break and listen to your favorite music.",
    "Visualize a peaceful place and relax."
];

function generateTip() {
    const randomIndex = Math.floor(Math.random() * tips.length);
    const tip = tips[randomIndex];
    const tipBox = document.getElementById('tip');

    // Apply fade-out effect
    tipBox.style.transition = 'opacity 0.5s';
    tipBox.style.opacity = 0;

    // Wait for fade-out to complete before changing the text
    setTimeout(() => {
        tipBox.textContent = tip;
        // Apply fade-in effect
        tipBox.style.transition = 'opacity 0.5s';
        tipBox.style.opacity = 1;
    }, 500); // Set to 500ms to match the fade-out duration
}

// Initial fade-in for the tip box when the page loads
window.onload = () => {
    const tipBox = document.getElementById('tip');
    tipBox.style.transition = 'opacity 0.5s';
    tipBox.style.opacity = 1;
};
