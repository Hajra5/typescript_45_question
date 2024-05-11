let ord_numbers: number[] = [1,2,3,4,5,6,7,8,9];

for(let i=0; i < ord_numbers.length; i++) {
    let suffix: string;

    if( ord_numbers[i] === 1 ) {
    suffix = "st";
    }
    else if(ord_numbers[i] === 2){
    suffix = "nd";

    }
    else if(ord_numbers[i] === 3){
    suffix = "rd";

    }
    else {
    suffix = "th";

    }
    console.log(`${ord_numbers[i]}${suffix}`);
    
}       