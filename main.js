function moreThan5(num) {
  return num > 5;
}

function topScore(score, highScore) {
  return score > highScore;
}

function isInDanger(grade) {
  return grade <= 71 && grade >= 60;
}

function isCoasting(grade) {
  return grade <= 83 && grade >= 72;
}

function isSucceeding(grade) {
  return grade <= 92 && grade >= 84;
}

function isFailing(grade) {
  return grade < 60;
}

function isAcing(grade) {
  return grade > 92;
}

function isStudent(str) {
  return str === 'student';
}

function isTeacher(str) {
  return str === 'teacher';
}

function isAdmin(str) {
  return str === 'admin';
}

function isElementary(str) {
  return str === 'elementary';
}

function notAnElementarySchoolAdministrator(str1, str2) {
  return str1 !== 'elementary' || str2 !== 'admin';
}

function isMiddleSchoolTeacher(str, num) {
  return str === 'teacher' && (num <= 8 && num >= 6);
}

function differentPeople(str1, str2) {
  return str1 !== str2
}

module.exports = {
  moreThan5,
  topScore,
  isInDanger,
  isCoasting,
  isSucceeding,
  isFailing,
  isAcing,
  isStudent,
  isTeacher,
  isAdmin,
  isElementary,
  notAnElementarySchoolAdministrator,
  isMiddleSchoolTeacher,
  differentPeople,
}