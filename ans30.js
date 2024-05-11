var user_names = ["Maliha", "Hira", "Hania", "Shiza", "Admin"];
for (var _i = 0, user_names_1 = user_names; _i < user_names_1.length; _i++) {
    var user_name = user_names_1[_i];
    if (user_name === "Admin") {
        console.log("Hello Admin , would you like to see status report");
    }
    else {
        console.log("Hello ".concat(user_name, ", thank you to logging in again"));
    }
}
