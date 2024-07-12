function saveEntry() {
    const entry = document.getElementById('journalEntry').value;
    if (entry) {
        const entries = JSON.parse(localStorage.getItem('entries')) || [];
        entries.push(entry);
        localStorage.setItem('entries', JSON.stringify(entries));
        document.getElementById('journalEntry').value = '';
        displayEntries();
    }
}

function displayEntries() {
    const entries = JSON.parse(localStorage.getItem('entries')) || [];
    const entriesDiv = document.getElementById('entries');
    entriesDiv.innerHTML = '';
    entries.forEach((entry, index) => {
        const entryDiv = document.createElement('div');
        entryDiv.classList.add('entry');
        entryDiv.textContent = `${index + 1}. ${entry}`;
        entriesDiv.appendChild(entryDiv);
    });
}

// Initial call to display saved entries
window.onload = () => {
    displayEntries();
};
