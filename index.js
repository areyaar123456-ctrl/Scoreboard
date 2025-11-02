let homeCount = document.getElementById('home-point')
let guestCount = document.getElementById('guest-point')

let homePoint = 0
let guestPoint = 0

function homeAddition1() {
  homePoint += 1
  homeCount.innerText = homePoint
}

function homeAddition2() {
  homePoint += 2
  homeCount.innerText = homePoint
}

function homeAddition3() {
  homePoint += 3
  homeCount.innerText = homePoint
}

function guestAddition1() {
  guestPoint += 1
  guestCount.innerText = guestPoint
}

function guestAddition2() {
  guestPoint += 2
  guestCount.innerText = guestPoint
}

function guestAddition3() {
  guestPoint += 3
  guestCount.innerText = guestPoint
}

function reset() {
  homePoint = 0
  guestPoint = 0
  homeCount.innerText = 0
  guestCount.innerText = 0
  console.log('A new game has started.')
}