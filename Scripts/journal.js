/*
    Define the keys and value for a JavaScript object that
    represents a journal entry about what you learned today
*/
/*const journalEntry = {

}*/

let journalEntryArray = []

document.getElementById('record').addEventListener('click', e => {
    e.preventDefault;
    let journalObject = logEntry();
    addJournalEntry(journalObject);
    console.log(journalEntryArray);
})

function logEntry() {
    let journalEntry = {};
    let log = ["journal-date", "concepts-covered", "journal-entries", "todays-mood"];
    for (let i = 0; i < log.length; i++){
        let entry = log[i]
        let value = document.getElementById(entry).value;
        journalEntry[entry] = value

    }
    journalEntryArray.push(journalEntry);
    return journalEntry;
}

function addJournalEntry(journalObject) {
    let date = document.getElementById("date");
    let concepts = document.getElementById("concepts");
    let entries = document.getElementById("entries");
    let mood = document.getElementById("mood");
    clearJournal(date, concepts, entries, mood);
    date.innerText += String(journalObject["journal-date"]);
    concepts.innerText += String(journalObject["concepts-covered"]);
    entry.innerText += String(journalObject["journal-entry"]);
    mood.innerText += String(journalObject["todays-mood"]);

}

function clearJournal(date, concepts, entries, mood) {
    date.innerText = "";
    concepts.innerText = "";
    entries.innerText = "";
    mood.innerText = "";
}
