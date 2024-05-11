function describe_city(city_name, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city_name, " is in ").concat(country));
}
describe_city("Karachi");
describe_city("Lahore");
describe_city("London", "England");
