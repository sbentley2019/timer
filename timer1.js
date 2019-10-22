const timerFun = function(num) {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, num * 1000);
}

const args = process.argv.slice(2);
for (let i of args) {
  if (Number(i) && i >= 0) {
    timerFun(Number(i));
  } 
}