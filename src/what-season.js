module.exports = function getSeason(dat) {
  
  if (dat == undefined) {
    return 'Unable to determine the time of year!';
  }

  try {
    let now = new Date();
    now = now - dat; 
  } catch (error) {
    throw error;
  }

  let season = ['winter', 'winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'autumn', 'autumn', 'autumn', 'winter'];
  
  let month = dat.getMonth()
  
  return season[month];
};