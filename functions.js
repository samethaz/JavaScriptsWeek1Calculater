function ToplaFonksiyonu(a,b){
    return a + b;
}

function CikarFonksiyonu(a,b){
    return a - b;}

function CarpFonksiyonu(a,b){
    return a * b;}

function BolFonksiyonu(a,b){
    return a / b;}

module.exports = {
    Topla : ToplaFonksiyonu ,
    Carp : CarpFonksiyonu ,
    Bol : BolFonksiyonu ,
    Cikar : CikarFonksiyonu 
}