// Code your solution here
function findMatching(drivers, name) {
    const lowerCaseName = name.toLowerCase()
    const matchingDrivers = drivers.filter(driver => driver.toLowerCase() === lowerCaseName)
    return matchingDrivers
}

function fuzzyMatch(drivers, letters) {
    const matchingDrivers = drivers.filter(driver => {
    const firstLetters = driver.slice(0, letters.length);
    return firstLetters.toLowerCase() === letters.toLowerCase();
  });
  return matchingDrivers
}

function matchName(drivers, name) {
    const matchingDrivers = drivers.filter(driver => {
        if (driver.name === name)
        return driver
    } )
    return matchingDrivers
}