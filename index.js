function theBeatlesPlay (musiciansArray, instrumentsArray) {
  let result = [];
  
  for (let i = 0; i < musiciansArray.length; i++) {
    let string = String(musiciansArray[i]) + " plays " + String(instrumentsArray[i])
    result.push(string)
  }
  return result;
}

