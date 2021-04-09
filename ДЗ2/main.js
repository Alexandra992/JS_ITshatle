let passport = [
{
    name:"Ivan",
    lastname:"Ivanov",
    fatherName:"Ivanovich",
    birdhdate:"01.01.1970",
    registrationCountry:"Belarus",
    registrationCity:"Minsk",
    registrationAddress:"Lenina st.,21",
    issuedByDepartment:"Leninsky district police department",
    dateOfIssue:"",
    validBefore:""
},

{
    name:"Vasiliy",
    lastname:"Petrov",
    fatherName:"Alexandrovich",
    birdhdate:"21.11.1989",
    registrationCountry:"Belarus",
    registrationCity:"Pinsk",
    registrationAddress:"Pervomajskaja st., 18-87",
    issuedByDepartment:"Pervomajsky district police department",
    dateOfIssue:"",
    validBefore:""
},

{
    name:"Dmitry",
    lastname:"Safonov",
    fatherName:"Petrovich",
    birdhdate:"02.08.1991",
    registrationCountry:"Belarus",
    registrationCity:"Mogilev",
    registrationAddress:"Vitebsky av. 19-510",
    issuedByDepartment:"Oktabr'sky police department of Mogilev",
    dateOfIssue:"",
    validBefore:""
},

 {
    name:"Kristin",
    lastname:"Lapitskaja",
    fatherName:"Valentinovna",
    birdhdate:"12.05.1969",
    registrationCountry:"Belarus",
    registrationCity:"Gomel",
    registrationAddress:"Barykina st., 89-35",
    issuedByDepartment:"Sovetsky district police department",
    dateOfIssue:"",
    validBefore:""
}
];

document.write(passport[1]);

/* function sortByParam(passportList, paramName){
    let sortFunc = function(a, b){
        if (a[paramName] > b[paramName]) {return 1;}
        if (a[paramName] < b[paramName]) {return -1;}
        return 0;}
    return passportList.sort(sortFunc);
}
sortByParam(passport, "name"); */









/* passport.sort(function(a, b){
    if (a.name > b.name) {return 1;}
    if (a.name < b.name) {return -1;}
    return 0;
})
console.log(passport); */






// function displayPassport(arr){
// let out_arr = document.getElementById('out_arr');
// out_arr.innerHTML = arr;
// }

// displayPassport(passport);




