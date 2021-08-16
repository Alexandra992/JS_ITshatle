let passport = [{
        name: "Ivan",
        lastname: "Ivanov",
        fatherName: "Ivanovich",
        birthDate: "01.01.1970",
        registrationCountry: "Belarus",
        registrationCity: "Minsk",
        registrationAddress: "Lenina st.,21",
        issuedByDepartment: "Leninsky district police department"
    },

    {
        name: "Vasiliy",
        lastname: "Petrov",
        fatherName: "Alexandrovich",
        birthDate: "21.11.1989",
        registrationCountry: "Belarus",
        registrationCity: "Pinsk",
        registrationAddress: "Pervomajskaja st., 18-87",
        issuedByDepartment: "Pervomajsky district police department"
    },

    {
        name: "Dmitry",
        lastname: "Safonov",
        fatherName: "Petrovich",
        birthDate: "02.08.1991",
        registrationCountry: "Belarus",
        registrationCity: "Mogilev",
        registrationAddress: "Vitebsky av. 19-510",
        issuedByDepartment: "Oktabr'sky police department of Mogilev"
    },

    {
        name: "Kristin",
        lastname: "Lapitskaja",
        fatherName: "Valentinovna",
        birthDate: "12.05.1969",
        registrationCountry: "Belarus",
        registrationCity: "Gomel",
        registrationAddress: "Barykina st., 89-35",
        issuedByDepartment: "Sovetsky district police department"
    }
];


//функция сортировки ************************************************************
function sortByParam(passportList, paramName) {
    let sortFunc = function (a, b) {
        if (a[paramName] > b[paramName]) {
            return 1;
        }
        if (a[paramName] < b[paramName]) {
            return -1;
        }
        return 0;
    }
    return passportList.sort(sortFunc);

}
console.log(sortByParam(passport, "name"));


//вывод одного элемента массива на страницу **************************************
function displayPassport(arr, key, value) {
    let str = '';
    for (let elem of arr) {
        for (let item in elem) {
            if (elem[key] == value) {
                str += `${item}: ${elem[item]}</br>`
            }

        }
    }
    let out = document.createElement('div');
    out.innerHTML = str;
    document.body.prepend(out);
}
displayPassport(passport, "lastname", "Ivanov")


//вывод всего массива на страницу*************************************************
function displayPassportList(arr) {
    let out = document.getElementById('out_arr');
    let table = document.createElement('table');
    out.append(table);

    for (let i = 0; i < arr.length; i++) {

        for (let key in arr[i]) {
            let row = document.createElement('tr');
            if (i % 2 == 0) {
                row.style.backgroundColor = 'grey';
            }
            row.innerHTML = `<td>${key}</td><td>${arr[i][key]}`;
            document.querySelector('table').append(row);
        }
    }
}
displayPassportList(passport);