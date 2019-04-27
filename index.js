function takeANumber(currentLine, name){
  return `Welcome, ${name}. You are number ${currentLine.indexOf(name) + 1} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length < 1){
    return "There is nobody waiting to be served!"
  } else {
    return katzDeliLine.shift()
    
  }
}