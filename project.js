const prompt = require("prompt-sync")();
/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFTs = []

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name, _eyeColor, _shirtType, _bling) {
    const NFT = {
        "name": _name,
        "eyeColor": _eyeColor,
        "shirtType": _shirtType,
        "bling": _bling
    }
    NFTs.push(NFT);
    console.log("\nMinted: " + _name + "\n");
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    console.log("\nList of NFTs minted are : ")
    if(NFTs.length == 0){
        console.log("No NFTs were minted.");
    }
    for(let i=0; i<NFTs.length; i++){
        console.log("\nID          : " + (i+1));
        console.log("Name        : " + NFTs[i].name);
        console.log("Eyecolor    : " + NFTs[i].eyeColor);
        console.log("Shirt Type  : " + NFTs[i].shirtType);
        console.log("Bling       : " + NFTs[i].bling);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\nTotal number of NFTs we have minted : " + NFTs.length);
}

// call your functions below this line
let i = 0;
let check = parseInt(prompt("Enter 1 to take input OR Enter 0 to exit : "));
while(check){
    var _name, _eyeColor, _shirtType, _bling;
    _name =      prompt("Enter the name      : ");
    _eyeColor =  prompt("Enter the eyecolor  : ");
    _shirtType = prompt("Enter shirt color   : ");
    _bling =     prompt("Enter bling         : ");
    mintNFT(_name, _eyeColor, _shirtType, _bling);
    check = parseInt(prompt("Enter 1 to take input OR Enter 0 to exit : "));
}
// mintNFT("Bob", "Blue", "Hoodie", "Gold Chain");
// mintNFT("sue", "Blue", "Hoodie", "Gold Chain");
// mintNFT("Tim", "Blue", "Hoodie", "Gold Chain");
// mintNFT("JOhn", "Blue", "Hoodie", "Gold Chain");
listNFTs();
getTotalSupply();
