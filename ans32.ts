let current_users : string[] =  ["Sara","Haris","Fahad","Laiba","Rimsha"]
let new_users : string[]   =   ["Sara"]

new_users.forEach((new_users) => {
if(
    current_users.some(
        (current_users)  => current_users ===  new_users
    )

)(
    console.log(`${new_users} will need to enter new_users name `)

)
else(
    console.log(`${new_users} is available`)
)     
    
});
