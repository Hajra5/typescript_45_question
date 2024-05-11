var Guests = ["Sara", "Rafia", "Aisha", "Zoha"];
for (var i = 0; i < Guests.length; i++) {
    console.log("Dear ".concat(Guests[i], " \n\nYou are invited for a dinner\n\n Thank you \n\n"));
}
var not_coming = "Rafia";
var new_guest = "Nadia";
Guests[0] = new_guest;
for (var i = 0; i < Guests.length; i++) {
    console.log("Dear ".concat(Guests[i], " \n\nYou are invited for a dinner\n\n Thank you \n\n"));
}
console.log("Mrs. ".concat(not_coming, "is not coming for dinner"));
