// Класна робота до уроку 2

// Напишіть код, який буде запитувати логін (prompt). 

// Якщо відвідувач вводить "Админ", то питати пароль, якщо натиснув скасування (escape) – виводити «Вход отменён». 

// Пароль перевіряти так. Якщо введений пароль «Чёрный Властелин», то виводити «Добро пожаловать!», інакше – «Пароль неверен», при скасуванні – «Вход отменён».


// let enterLogin = prompt('Введите логин');

// if (enterLogin == 'Админ') {

//   let enterPassword = prompt('Введите пароль');

//   if (enterPassword == 'Чёрный Властелин') {
//     alert('Добро пожаловать!');
//   } else if (enterPassword !== 'Чёрный Властелин') {
//     alert('Пароль неверен');
//   } else {
//     alert('Вход отменен');
//   }

// } else if (enterLogin === null) {
//   alert('Вход отменен');
// } 



// Створіть дві цілочисельні змінні і надайте їм деякі значення. 

// За цими значеннями, використовуючи вкладені цикли, намалюйте заповнений прямокутник із зірочок.

let vertical_Side_Rectangle = 5;
let horizontal_Side_Rectangle = 20;

for (let i = 0; i < vertical_Side_Rectangle; i++) {
  
    for ( let j = 0; j < horizontal_Side_Rectangle; j++) {
    document.write('*');
  }

  document.write('*' + '<br>');

}





// Домашня робота до уроку 2


// Переписати умовну конструкцію тернарним оператором 

// let result = (a + b < 4) ? 'Мало': 'Много';




// Переписати if else кількома операторами ?

// let message = (login == 'Вася') ? message = 'Привет':
//               (login == 'Директор') ? message = 'Здравствуйте':
//               (login == '') ? message = 'Нет логина':
//               message = '';




// Дано 2 числа. Вивести на екран числа знаходяться в проміжку між А и В. 
// Вивести на екран всі непарні значення знаходяться в проміжку між А и В. 

let valueA = 1;
let valueB = 10;

document.write('Всі числа, що знаходяться в проміжку мiж A и B - ');

for (let i = valueA; i <= valueB; i++) {
    document.write(i + ' ');
}

document.write('<br>');
document.write('<br>');

document.write('Всі непарні числа, що знаходяться в проміжку мiж A и B - ');

for (let j = valueA; j <= valueB; j++) {
    if (j % 2 !== 0) {
        document.write(j + ' ');
    }
}



document.write('<br/>');
document.write('<br/>');
document.write('<br/>');




// Прямокутник 

let firstValue = 5;
let secondValue = 15;

for (let i = 0; i < firstValue; i++) {
    
    for (j = 0; j < secondValue; j++) {
        
    document.write(' ' + '*');
    }

    document.write(' ' + '*' + '<br>');
}


// Прямокутний трикутник

let value = 10;

for (let i = 0; i < value; i++) {
    
for (let j = 0; j < i; j++) {
        document.write('&nbsp*');
    }
    
    document.write('<br/>');
}


// Рівносторонній трикутник

let linesEquilateralTriangle = +prompt('Введіть бажаний розмір рівностороннього трикутника');

for (let i = 0; i < linesEquilateralTriangle; i++) {
    
    for (let j = 0; j < linesEquilateralTriangle - i; j++) {
        document.write('&nbsp&nbsp');
    }

    for (let j = linesEquilateralTriangle - i; j <= linesEquilateralTriangle; j++) {
        document.write('&nbsp*&nbsp');
    }

    document.write('<br>');
}


// Ромб

let linesRhomb = +prompt('Введіть бажаний розмір ромба');

for (let i = 0; i <= linesRhomb; i++) {
    
    for (let j = 0; j < linesRhomb - i; j++) {
        document.write('&nbsp&nbsp');
    }

    for (let j = linesRhomb - i; j <= linesRhomb; j++) {
        document.write('&nbsp*&nbsp');
    }

    document.write('<br>');
}

for (let i = 0; i <= linesRhomb; i++) {
    
    for (let j = 0; j < i + 1; j++) {
        document.write('&nbsp&nbsp');
    }

    for (let j = linesRhomb - i; j > 0; j--) {
        document.write('&nbsp*&nbsp');
    }

    document.write('<br>');
}
