function describe_city(city_name:string, country:string="Pakistan"): void{
    console.log(`${city_name} is in ${country}`)

}
describe_city(`Karachi`)
describe_city(`Lahore`)
describe_city(`London`,`England`)

