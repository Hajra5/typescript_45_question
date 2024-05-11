let Guests:string[] = ["Sara","Rafia","Aisha","Zoha"];
for( let i = 0; i<Guests.length; i++ ){
    console.log(`Dear ${Guests[i]} \n\nYou are invited for a dinner\n\n Thank you \n\n`);

}
let not_coming:string = "Rafia"
let new_guest: string = "Nadia"
Guests[0] = new_guest
for( let i = 0; i<Guests.length; i++ ){
    console.log(`Dear ${Guests[i]} \n\nYou are invited for a dinner\n\n Thank you \n\n`);

}
console.log(`Mrs. ${not_coming} is not coming for dinner`);