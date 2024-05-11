let user_names :string[] =  ["Maliha","Hira","Hania","Shiza","Admin"]


for(let user_name of user_names)
if(user_name === "Admin"){
    console.log(`Hello Admin , would you like to see status report`)

}
else{
    console.log(`Hello ${user_name}, thank you to logging in again`)

}
