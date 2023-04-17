const isAnagrams = require('../index')

test('Функция должна вернуть true, если строки являются анаграммами', () => {
    let str1 = 'melon';
    let str2 = 'lemon';
    expect(isAnagrams(str1, str2)).toBe(true)    
});

test('Функция должна вернуть false, если строки не являются анаграммами', () => {
    let str1 = 'melon';
    let str2 = 'nelon';
    expect(isAnagrams(str1, str2)).toBe(false)    
});

test('Функция должна сработать, если строки в разном регистре', () => {
    let str1 = 'MELON';
    let str2 = 'lemon';
    expect(isAnagrams(str1, str2)).toBe(true)
});

test('Функция должна вернуть true, если обе строки одинаковые', () => {
    let str1 = 'melon';
    let str2 = 'melon';
    expect(isAnagrams(str1, str2)).toBe(true)
});

test('Функция должна определить анаграммы для строк с цифрами', () => {
    let str1 = 'abcde2';
    let str2 = 'c2abed';
    expect(isAnagrams(str1, str2)).toBe(true)
});

test('Функция должна вернуть false, если одна строка длиннее другой', () => {
    let str1 = 'melon';
    let str2 = 'melonia';
    expect(isAnagrams(str1, str2)).toBe(false)
});

test('Функция должна вернуть false, если одна из строк пустая', () => {
    let str1 = 'melon';
    let str2 = '';
    expect(isAnagrams(str1, str2)).toBe(false)
});







