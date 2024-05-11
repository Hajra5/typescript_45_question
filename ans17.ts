let places: string[] = ['Islamabad','Sydney','London','NewYark','Paris'];

console.log(`original` + places);
console.log(`copy`+ [...places].sort());
console.log(`original` + places);
console.log(`copy`+ [...places].sort().reverse());
