const timer = function(arr) {
  arr.forEach((i) => {
    if(i >= 0 && !isNaN(i)) setTimeout(()=> process.stdout.write('\x07'), Number(i) * 1000)
  })
  return;
}

const timerArr = process.argv.slice(2);
timer(timerArr);
