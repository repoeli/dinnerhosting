// dinner.js

let dinners = [];
let dinnerId = 0;

function createDinner(title, date, time, host) {
    const dinner = {
        id: dinnerId++,
        title: title,
        date: date,
        time: time,
        host: host
    };
    dinners.push(dinner);
    displayDinners();
}

function editDinner(id, newTitle, newDate, newTime) {
    const dinner = dinners.find(d => d.id === id);
    if (dinner) {
        dinner.title = newTitle;
        dinner.date = newDate;
        dinner.time = newTime;
        displayDinners();
    }
}

function deleteDinner(id) {
    dinners = dinners.filter(d => d.id !== id);
    displayDinners();
}

function displayDinners() {
    const dinnerList = document.getElementById('dinner-list');
    dinnerList.innerHTML = '';
    dinners.forEach(dinner => {
        const listItem = document.createElement('li');
        listItem.textContent = `${dinner.title} on ${dinner.date} at ${dinner.time} hosted by ${dinner.host}`;
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.onclick = () => editDinnerPrompt(dinner.id);
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteDinner(dinner.id);
        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);
        dinnerList.appendChild(listItem);
    });
}

function editDinnerPrompt(id) {
    const dinner = dinners.find(d => d.id === id);
    if (dinner) {
        const newTitle = prompt("Enter new title:", dinner.title);
        const newDate = prompt("Enter new date:", dinner.date);
        const newTime = prompt("Enter new time:", dinner.time);
        editDinner(id, newTitle, newDate, newTime);
    }
}

function searchDinners(query) {
    const filteredDinners = dinners.filter(dinner => dinner.title.toLowerCase().includes(query.toLowerCase()));
    displayFilteredDinners(filteredDinners);
}

function displayFilteredDinners(filteredDinners) {
    const dinnerList = document.getElementById('dinner-list');
    dinnerList.innerHTML = '';
    filteredDinners.forEach(dinner => {
        const listItem = document.createElement('li');
        listItem.textContent = `${dinner.title} on ${dinner.date} at ${dinner.time} hosted by ${dinner.host}`;
        dinnerList.appendChild(listItem);
    });
}