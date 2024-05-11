let Guests:string[] = ["Sara","Rafia","Aisha","Zoha"];

let not_coming:string = "Rafia"
let new_guest: string = "Nadia"
Guests[1] = new_guest
for( let i = 0; i<Guests.length; i++ ){
    console.log(`Dear ${Guests[i]} \n\nYou are invited for a dinner\n\n Thank you \n\n`);

}
    console.log(`Mrs. ${not_coming}is not coming for dinner`);

Guests.unshift("Ramsha");
Guests.splice(Guests.length/2,2,"Sara");
Guests.push("Sadia");
for( let i = 0; i<Guests.length; i++ ){
    console.log(`Dear ${Guests[i]} \n\nYou are invited for a dinner\n\n Thank you \n\n`);

}
console.log("we have found a bigger dinner table  so invited more guests");
