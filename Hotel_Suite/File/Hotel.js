// "use strict";

window.addEventListener("error", function (event) {
  console.error("Global error caught:");
  console.error("Message:", event.message);
  console.error("File:", event.filename);
  console.error("Line:", event.lineno);
});
window.onerror = function (message, source, lineno, colno, error) {
  const errorDiv = document.createElement("div");
  
  Object.assign(errorDiv.style, {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    backgroundColor: "#ff4d4d",
    color: "white",
    padding: "20px",
    zIndex: "999",
    fontFamily: "monospace",
    textAlign: "center"
  });
  
  errorDiv.innerHTML = `<strong>JS Error:</strong> ${message} at line ${lineno}`;
  
  document.body.appendChild(errorDiv);
  return false;
};
window.addEventListener("DOMContentLoaded", function() {
  const savedBookings = JSON.parse(localStorage.getItem("hotelBookings")) || [];
  console.log("Length: ", savedBookings.length);
  console.log("Data: ", savedBookings);
})

function notifSystem(value) {
  notifUI.innerHTML = value;
  notifUI.style.display = "block";
  
  setTimeout(function() {
    notifUI.style.display = "none";
    notifUI.innerHTML = "";
  }, 5000);
}


const menu = document.querySelector("#mobile");
const container = document.querySelector("#menu");

menu.addEventListener('click', function() {    
    menu.classList.toggle('active');
    container.classList.toggle('active');
});



const zoomExit = document.getElementById("zoomExit");
const roomScope = document.getElementById("roomScope");
const zoomSection = document.getElementById("zoomSection");
const zoomImg = document.getElementById("zoomImg");

const images = document.querySelectorAll(".image");

images.forEach((image, index) => {
  image.addEventListener("click", () => {
    zoomSection.classList.add("active");
    
    console.log()
    
    if (index == 0) {
      zoomImg.style.backgroundImage = "url('Regular.jpg')";
    } else if (index == 1) {
      zoomImg.style.backgroundImage = "url('Deluxe.jpg')";
    } else if (index == 2) {
      zoomImg.style.backgroundImage = "url('Family.jpg')";
    } else if (index == 3) {
      zoomImg.style.backgroundImage = "url('Executive.jpg')";
    } else {
      notifSystem("Error");
    }
  });
});



// roomScope.addEventListener("click", function() {
//   zoomImg.style.backgroundImage = "url('Regular.jpg')";
//   zoomSection.classList.add("active");
// });
zoomExit.addEventListener("click", function() {
  zoomSection.classList.remove("active");
  zoomImg.style.backgroundImage = "none";
});

const roomButton = document.querySelectorAll(".room-button");

const standardRoom = document.getElementById("standardRoom");
const standardScope = document.getElementById("standardScope");

const deluxeRoom = document.getElementById("deluxeRoom");
const deluxeScope = document.getElementById("deluxeScope");

const familyRoom = document.getElementById("familyRoom");
const familyScope = document.getElementById("familyScope");

const executiveRoom = document.getElementById("executiveRoom")
const executiveScope = document.getElementById("executiveScope");

const roomScopeSlide = document.querySelector(".room-scope");

standardRoom.addEventListener("click", function() {
  roomScopeSlide.classList.remove("active-2", "active-3", "active-4");
  roomScopeSlide.classList.add("active-1");
  console.log("active-1");
});
deluxeRoom.addEventListener("click", function() {
  roomScopeSlide.classList.remove("active-1", "active-3", "active-4");
  roomScopeSlide.classList.add("active-2");
  console.log("active-2");
});
familyRoom.addEventListener("click", function() {
  roomScopeSlide.classList.remove("active-1", "active-2", "active-4");
  roomScopeSlide.classList.add("active-3");
  console.log("active-3");
});
executiveRoom.addEventListener("click", function() {
  roomScopeSlide.classList.remove("active-1", "active-2", "active-3");
  roomScopeSlide.classList.add("active-4");
  console.log("active-4");
});

// standardRoom.addEventListener("click", function() {
//   deluxeScope.classList.remove("active");
//   familyScope.classList.remove("active");
//   executiveScope.classList.remove("active");

//   standardScope.classList.add("active");
// });

// deluxeRoom.addEventListener("click", function() {
//   standardScope.classList.remove("active");
//   familyScope.classList.remove("active");
//   executiveScope.classList.remove("active");
  
//   deluxeScope.classList.add("active");
// });
// familyRoom.addEventListener("click", function() {
//   standardScope.classList.remove("active");
//   deluxeScope.classList.remove("active");
//   executiveScope.classList.remove("active");
  
//   familyScope.classList.add("active");
// });
// executiveRoom.addEventListener("click", function() {
//   standardScope.classList.remove("active");
//   deluxeScope.classList.remove("active");
//   familyScope.classList.remove("active");
  
//   executiveScope.classList.add("active");
// });

// roomButton.forEach((option,index) => {
//   option.addEventListener("click", () => {
//     roomScopes.forEach(scope => scope.classList.remove("active"));
    
//     if (roomScopes[index]) {
//       roomScopes[index].classList.add("active");
//       console.log(roomScopes);
//     } else {
//       console.log("No match")
//     }
//   });
// });






const presentDate = new Date();
presentDate.setHours(0, 0, 0, 0);

const year = presentDate.getFullYear();
const month = String(presentDate.getMonth() + 1).padStart(2, "0");
const day = String(presentDate.getDate()).padStart(2, "0");
const formattedPresentDate = `${year}-${month}-${day}`;

const checkIn = document.querySelectorAll(".checkIn");
const checkInUI = document.querySelectorAll(".checkInUI");

const checkOut = document.querySelectorAll(".checkOut");
const checkOutUI = document.querySelectorAll(".checkOutUI");

const perRoom = document.querySelectorAll(".perRoom");
const perRoomUI = document.querySelectorAll(".perRoomUI");

const dateUI = document.querySelectorAll(".dateUI");
const nightUI = document.querySelectorAll(".nightUI");
const priceUI = document.querySelectorAll(".priceUI");

const bookButton = document.querySelectorAll(".bookButton");
const notifUI = document.getElementById("notifUI");

let schedule = [null, null, null, null];
let convertNights = [0, 0, 0, 0];
let roomValue = [null, null, null, null];
let roomBool = [true, true, true, true];
let price = [0, 0, 0, 0];

checkIn.forEach((field, index) => {
  field.min = formattedPresentDate;
  field.addEventListener("change", (e) => {
    const targetCheckIn = e.target;
    const targetCheckInUI = checkInUI[index];
    checkOut.min = targetCheckIn.value;
    
    if (checkIn[index].value) {
      checkOut[index].min = checkIn[index].value;
    }
    if (checkIn[index].value == "") {
      checkOut[index].min = formattedPresentDate;
    }
    
    if (targetCheckIn.value == "") {
      targetCheckIn.value = "";
      targetCheckInUI.innerHTML = "Check-In:";
    } else {
      targetCheckInUI.innerHTML = "Check-In: " + targetCheckIn.value;
    }
    
    selectedDates(index);
    bookNow(index);
  });
});
checkOut.forEach((field, index) => {
  field.addEventListener("change", (e) => {
    const targetCheckOut = e.target;
    const targetCheckOutUI = checkOutUI[index];
    
    checkIn[index].max = targetCheckOut.value;
    
    if (checkOut[index].value == "") {
      checkIn[index].max = null;
    }
    
    if (targetCheckOut.value == "") {
      targetCheckOutUI.innerHTML = "Check-Out:";
      targetCheckOut.value = "";
      // notifSystem("Error, please insert check-in date first");
    } else {
      targetCheckOutUI.innerHTML = "Check-Out: " + targetCheckOut.value;
    }
    
    selectedDates(index);
    bookNow(index);
  })
});
function selectedDates(index) {
  const currentIn = checkIn[index];
  const currentOut = checkOut[index];
  const currentDate = dateUI[index];
  
  if (currentIn.value && currentOut.value) {
    schedule[index] = currentIn.value + " -> " + currentOut.value;
    currentDate.innerHTML = "Schedule: " + schedule[index];
  } else {
    schedule[index] = "";
    currentDate.innerHTML = "Schedule:";
  }
  calculateNights(index);
}

function calculateNights(index) {
  const currentIn = checkIn[index];
  const currentOut = checkOut[index];
  const currentNight = nightUI[index];
  
  const checkInDate = new Date(currentIn.value + "T00:00:00");
  const checkOutDate = new Date(currentOut.value + "T00:00:00");
  const convertMiliseconds = checkOutDate - checkInDate;
  convertNights[index] = Math.round(convertMiliseconds / (1000 * 60 * 60 * 24));
  
  if (convertNights[index] == 1) {
    currentNight.innerHTML = "Night: " + convertNights[index];
  } else if (convertNights[index] == 0) {
    convertNights[index] = 1;
    currentNight.innerHTML = "Night: " + convertNights[index];
  } else if (convertNights[index] > 1) {
    currentNight.innerHTML = "Nights: " + convertNights[index];
  } else {
    currentNight.innerHTML = "Night:"
  }
}
perRoom.forEach((field, index) => {
  field.addEventListener("change", (e) => {
    const targetRoom = e.target;
    const targetRoomUI = perRoomUI[index];
    
    roomBool[index] = (targetRoom.value == 0 || targetRoom.value == "" || targetRoom.value < 0);
    if (!roomBool[index]) {
      roomValue[index] = targetRoom.value;
    
      if (targetRoomUI) targetRoomUI.innerHTML = "Room: " + roomValue[index];
      targetRoom.placeholder = "Room: " + roomValue[index];
      targetRoom.value = "";
    } else {
      notifSystem("Error, please assign a room");
      targetRoom.placeholder = "Room: 0";
      targetRoom.value = "";
      targetRoomUI.innerHTML = "Room:";
      priceUI.innerHTML = "Price: $";
    }
    bookNow(index);
  })
});

function bookNow(index) {
  const currentIn = checkIn[index];
  const currentOut = checkOut[index];
  const currentRoom = perRoom[index];
  const currentButton = bookButton[index];
  
  const currentPrice = priceUI[index]
  
  if (currentIn.value && currentOut.value && !roomBool[index]) {
    const roomPrice = 99;
    price[index] = (roomPrice * convertNights[index]) * roomValue[index];
    currentPrice.innerHTML = "Price: $" + price[index];
    currentButton.classList.add('active');
  } else {
    currentPrice.innerHTML = "Price: $";
    currentButton.classList.remove('active');
  }
}
bookButton.forEach((field, index) => {
  field.addEventListener("click", (e) => {
    const targetButton  = e.target;
    
    const currentIn = checkIn[index];
    const currentOut = checkOut[index];
    const currentDate = schedule[index];
    const currentNight = convertNights[index];
    const currentRoom = roomValue[index];
    const currentPrice = price[index];
    
    if (currentIn.value && currentOut.value && !roomBool[index]) {
      const bookingData = {
        checkIn: currentIn,
        checkOut: currentOut,
        schedule: currentDate,
        nights: currentNight,
        rooms: currentRoom,
        price: currentPrice,
      };
      let bookings = JSON.parse(localStorage.getItem("hotelBookings")) || [];
      bookings.push(bookingData);
      localStorage.setItem("hotelBookings", JSON.stringify(bookings));
      
      checkInUI[index].innerHTML = "Check-In:";
      checkOutUI[index].innerHTML = "Check-Out:";
      dateUI[index].innerHTML = "Schedule:";
      nightUI[index].innerHTML = "Night:";
      perRoomUI[index].innerHTML = "Room: ";
      perRoom[index].placeholder = "Room: 0";
      priceUI[index].innerHTML = "Price: $";
      
      checkIn[index].value = "";
      checkOut[index].value = "";
      schedule[index] = null;
      convertNights[index] = null;
      roomValue[index] = 0;
      price[index] = null;
      
      bookButton[index].classList.remove('active');
      notifSystem("Your Reservation has been Suceessfully Booked!");
    }
  });
});


// bookButton.addEventListener("click", function() {
//   if (checkIn.value && checkOut.value && !perRoomBool) {
//     const bookingData = {
//       checkIn: checkIn.value,
//       checkOut: checkOut.value,
//       schedule: schedule,
//       nights: convertNights,
//       rooms: roomValue,
//       price: price
//     };
//     let bookings = JSON.parse(localStorage.getItem("hotelBookings")) || [];
//     bookings.push(bookingData);
//     localStorage.setItem("hotelBookings", JSON.stringify(bookings));
    
//     // console.log("Check-In: " + checkIn.value);
//     // console.log("Check-Out: " + checkOut.value);
//     // console.log("Schedule: " + schedule);
//     // console.log("Night: " + convertNights);
//     // console.log("Room: " + roomValue);
//     // console.log("Price: $" + price);
    
//     checkInUI.innerHTML = "Check-In:";
//     checkOutUI.innerHTML = "Check-Out:";
//     dateUI.innerHTML = "Schedule:";
//     nightUI.innerHTML = "Night:"
//     roomUI.innerHTML = "Room: ";
//     perRoom.placeholder = "Room: 0";
//     priceUI.innerHTML = "Price: $";
    
//     checkIn.value = "";
//     checkOut.value = "";
//     schedule = null
//     convertNights = null;
//     roomValue = 0;
//     price = null;
    
//     bookButton.classList.remove('active');
//     notifSystem("Your Reservation has been Suceessfully Booked!")
//   }

// });







// const presentDate = new Date();
// presentDate.setHours(0, 0, 0, 0);

// const year = presentDate.getFullYear();
// const month = String(presentDate.getMonth() + 1).padStart(2, "0");
// const day = String(presentDate.getDate()).padStart(2, "0");
// const formattedPresentDate = `${year}-${month}-${day}`;

// let checkIn = document.getElementById("checkIn");
// checkIn.min = formattedPresentDate;
// const checkInUI = document.getElementById("checkInUI");

// const checkOut = document.getElementById("checkOut");
// const checkOutUI = document.getElementById("checkOutUI");

// const bookButton = document.getElementById("bookButton");
// const notifUI = document.getElementById("notifUI");
// const perRoom = document.getElementById("perRoom");
// const dateUI = document.getElementById("dateUI");
// const nightUI = document.getElementById("nightUI");
// const roomUI = document.getElementById("roomUI");
// const priceUI = document.getElementById("priceUI");
// let schedule = null;
// let convertNights = null;
// let roomValue = null;
// let perRoomBool = true;
// let price = null;

// function notifSystem(value) {
//   notifUI.innerHTML = value;
//   notifUI.style.display = "block";
  
//   setTimeout(function() {
//     notifUI.style.display = "none";
//     notifUI.innerHTML = "";
//   }, 5000);
// }

// checkIn.addEventListener("change", function() {
//   checkOut.min = checkIn.value;
//   if (checkOut.value == "") {
//     checkIn.max = null;
//   }
  
//   if (checkIn.value == "") {
//     checkIn.value = "";
//     checkInUI.innerHTML = "Check-In:";
//   } else {
//     checkInUI.innerHTML = "Check-In: " + checkIn.value
//   }
//   selectedDates();
//   bookNow();
// });
// checkOut.addEventListener("change", function() {
//   if (checkOut.value) {
//     checkIn.max = checkOut.value;
//   }
//   if (checkOut.value == "") {
//     checkIn.max = null;
//   }
  
//   if (checkIn.value == "") {
//     checkOutUI.innerHTML = "Check-Out:";
//     checkOut.value = "";
//     notifSystem("Error, please insert check-in date first");
//   } else {
//     checkOutUI.innerHTML = "Check-Out: " + checkOut.value;
//   }
//   selectedDates();
//   bookNow();
// });

// function selectedDates() {
//   if (checkIn.value && checkOut.value) {
//     schedule = checkIn.value + " -> " + checkOut.value;
//     dateUI.innerHTML = "Schedule: " + schedule;
//   } else {
//     schedule = "";
//     dateUI.innerHTML = "Schedule:";
//   }
//   calculateNights();
// }
// function calculateNights() {
//   const checkInDate = new Date(checkIn.value + "T00:00:00");
//   const checkOutDate = new Date(checkOut.value + "T00:00:00");
//   const convertMiliseconds = checkOutDate - checkInDate;
//   convertNights = Math.round(convertMiliseconds / (1000 * 60 * 60 * 24));
  
//   if (convertNights == 1) {
//     nightUI.innerHTML = "Night: " + convertNights;
//   } else if (convertNights == 0) {
//     convertNights = 1;
//     nightUI.innerHTML = "Night: " + convertNights;
//   } else if (convertNights > 1) {
//     nightUI.innerHTML = "Nights: " + convertNights;
//   } else {
//     nightUI.innerHTML = "Night:"
//   }
// }

// perRoom.addEventListener("change", function() {
//   perRoomBool = (perRoom.value == 0 || perRoom.value == "" || perRoom.value < 0);
//   if (!perRoomBool) {
//     roomValue = perRoom.value;
//     if (roomUI) roomUI.innerHTML = "Room: " + roomValue;
//     perRoom.placeholder = "Room: " + roomValue;
//     perRoom.value = "";
//   } else {
//     notifSystem("Error, please assign a room");
//     perRoom.placeholder = "Room: 0";
//     perRoom.value = "";
//     roomUI.innerHTML = "Room:";
//     priceUI.innerHTML = "Price: $";
//   }
//   bookNow();
// });
// function bookNow() {
//   if (checkIn.value && checkOut.value && !perRoomBool) {
//     const roomPrice = 99;
//     price = (roomPrice * convertNights) * roomValue;
//     priceUI.innerHTML = "Price: $" + price;
//     bookButton.classList.add('active');
//   } else {
//     priceUI.innerHTML = "Price: $";
//     bookButton.classList.remove('active');
//   }
// }

// bookButton.addEventListener("click", function() {
//   if (checkIn.value && checkOut.value && !perRoomBool) {
//     const bookingData = {
//       checkIn: checkIn.value,
//       checkOut: checkOut.value,
//       schedule: schedule,
//       nights: convertNights,
//       rooms: roomValue,
//       price: price
//     };
//     let bookings = JSON.parse(localStorage.getItem("hotelBookings")) || [];
//     bookings.push(bookingData);
//     localStorage.setItem("hotelBookings", JSON.stringify(bookings));
    
//     // console.log("Check-In: " + checkIn.value);
//     // console.log("Check-Out: " + checkOut.value);
//     // console.log("Schedule: " + schedule);
//     // console.log("Night: " + convertNights);
//     // console.log("Room: " + roomValue);
//     // console.log("Price: $" + price);
    
//     checkInUI.innerHTML = "Check-In:";
//     checkOutUI.innerHTML = "Check-Out:";
//     dateUI.innerHTML = "Schedule:";
//     nightUI.innerHTML = "Night:"
//     roomUI.innerHTML = "Room: ";
//     perRoom.placeholder = "Room: 0";
//     priceUI.innerHTML = "Price: $";
    
//     checkIn.value = "";
//     checkOut.value = "";
//     schedule = null
//     convertNights = null;
//     roomValue = 0;
//     price = null;
    
//     bookButton.classList.remove('active');
//     notifSystem("Your Reservation has been Suceessfully Booked!")
//   }

// });


