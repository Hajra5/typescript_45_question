var Guests = ["Sara", "Rafia", "Aisha", "Zoha"];
var not_coming = "Rafia";
var new_guest = "Nadia";
Guests[1] = new_guest;
for (var i = 0; i < Guests.length; i++) {
    console.log("Dear ".concat(Guests[i], " \n\nYou are invited for a dinner\n\n Thank you \n\n"));
}
console.log("Mrs. ".concat(not_coming, "is not coming for dinner"));
Guests.unshift("Ramsha");
Guests.splice(Guests.length / 2, 2, "Sara");
Guests.push("Sadia");
for (var i = 0; i < Guests.length; i++) {
    console.log("Dear ".concat(Guests[i], " \n\nYou are invited for a dinner\n\n Thank you \n\n"));
}
console.log("we have found a bigger dinner table  so invited more guests");
