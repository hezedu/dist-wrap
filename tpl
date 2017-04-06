(function(){
//############## TOP by dist-wrap ##############

SOURCE

//############## BOTTOM by dist-wrap ##############
  if (typeof define === 'function' && define.amd) {
    define(function() {
      return MODULE_REF;
    });
  }else if(typeof module === 'object' && module.exports){
    module.exports = MODULE_REF;
  }else{
    this.OUT_NAME = MODULE_REF;
  }
})();