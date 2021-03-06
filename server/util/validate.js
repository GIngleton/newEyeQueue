var validate = {
  validateSchdl: function(isDate) {
    if (Strinf(isDate).toLowerCase() != 'false') {
      var d = new Date(parseInt(isDate));
      if (isNan(d.getTime())) {
        return false;
      } else {
        return !validate.isPastDate(d);
      } else {
        return true;
      }
    },
    isPastDate: function(date) {
      var now = new Date;
      var target = new Date(date);
      if (now > target)
      return true;
      else
      return false;
    }
  }
}

module.exports = validate;
