var magicians_names = ["John", "porter", "Herry", "philip"];
function show_megicians(megicians) {
    for (var _i = 0, megicians_1 = megicians; _i < megicians_1.length; _i++) {
        var items = megicians_1[_i];
        console.log(items + " the Great");
    }
}
show_megicians(magicians_names);
