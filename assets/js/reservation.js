// This file manages dinner reservations. It includes functions to reserve dinners, edit reservations, remove reservations, and display the list of reservations. It also includes a search function to filter dinners.

let reservations = [];
let dinnerList = [];

// Function to reserve a dinner
function reserveDinner(dinnerId) {
    const dinner = dinnerList.find(d => d.id === dinnerId);
    if (dinner) {
        reservations.push(dinner);
        alert(`Reserved: ${dinner.name}`);
    } else {
        alert('Dinner not found.');
    }
}

// Function to edit a reservation
function editReservation(oldDinnerId, newDinnerId) {
    const index = reservations.findIndex(r => r.id === oldDinnerId);
    if (index !== -1) {
        const newDinner = dinnerList.find(d => d.id === newDinnerId);
        if (newDinner) {
            reservations[index] = newDinner;
            alert(`Reservation updated to: ${newDinner.name}`);
        } else {
            alert('New dinner not found.');
        }
    } else {
        alert('Reservation not found.');
    }
}

// Function to remove a reservation
function removeReservation(dinnerId) {
    const index = reservations.findIndex(r => r.id === dinnerId);
    if (index !== -1) {
        reservations.splice(index, 1);
        alert('Reservation removed.');
    } else {
        alert('Reservation not found.');
    }
}

// Function to display the list of reservations
function displayReservations() {
    const reservationList = document.getElementById('reservation-list');
    reservationList.innerHTML = '';
    reservations.forEach(reservation => {
        const li = document.createElement('li');
        li.textContent = reservation.name;
        reservationList.appendChild(li);
    });
}

// Function to search dinners
function searchDinners(query) {
    const filteredDinners = dinnerList.filter(dinner => dinner.name.toLowerCase().includes(query.toLowerCase()));
    return filteredDinners;
}