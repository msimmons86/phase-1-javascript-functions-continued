// code your solution here
function saturdayFun(activity = 'roller-skate') {
  return `This Saturday, I want to ${activity}!`;
}

function mondayWork(workday = 'go to the office') {
  return `This Monday, I will ${workday}.`;
}

function wrapAdjective(symbol = '*'){
  return function(sentence='special') {
  return `You are ${symbol}${sentence}${symbol}!`
  }
}



