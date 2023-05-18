const task1 = document.querySelector('#task1');

task1.querySelector('button').addEventListener('click', function() {
    const rand = Math.random();
    const res = Math.floor(rand * 50) + 1;
    task1.querySelector('p').innerHTML = res;
});