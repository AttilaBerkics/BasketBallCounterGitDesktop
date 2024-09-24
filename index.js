/*  Variables   */

let homeCounterEL = document.getElementById("home-counter")
let guestCounterEl = document.getElementById("guest-counter")
let homeSum = 0
let guestSum = 0

function homeAdd1() {
  homeSum += 1
  homeCounterEL.textContent = homeSum
}

function homeAdd2() {
  homeSum += 2
  homeCounterEL.textContent = homeSum
}

function homeAdd3() {
  homeSum += 3
  homeCounterEL.textContent = homeSum
}

function guestAdd1() {
  guestSum += 1
  guestCounterEl.textContent = guestSum
}

function guestAdd2() {
  guestSum += 2
  guestCounterEl.textContent = guestSum
}

function guestAdd3() {
  guestSum += 3
  guestCounterEl.textContent = guestSum
}