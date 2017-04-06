(function(){
//############## dist-wrap:TOP ##############

SOURCE

//############## dist-wrap:BOTTOM ##############
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