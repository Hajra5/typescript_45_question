var current_users = ["Sara", "Haris", "Fahad", "Laiba", "Rimsha"];
var new_users = ["Sara"];
new_users.forEach(function (new_users) {
    if (current_users.some(function (current_users) { return current_users === new_users; }))
        (console.log("".concat(new_users, " will need to enter new_users name ")));
    else
        (console.log("".concat(new_users, " is available")));
});
