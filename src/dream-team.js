module.exports = function createDreamTeam(members) {
  
  if (!Array.isArray(members)) {
    return false;
  }

  let name = '';
  let letter = '';

  for (let i = 0; i < members.length; i++){
    if (typeof(members[i]) == 'string' && isNaN(members[i]) ) {
      letter = members[i].split(' ').join('');
      name+=letter[0];
    }
  }

  return name.toLocaleUpperCase().split('').sort().join('');

};