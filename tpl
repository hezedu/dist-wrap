(function(){
//dist-wrap top

SOURCE

//dist-wrap bottom
  if(typeof module === 'object' && module.exports){
      module.exports = MODULE_REF;
  }else if(typeof define === 'function' && define.amd) {
    define(function() {
      return MODULE_REF;
    });
  }else{
    this.OUT_NAME = MODULE_REF;
  }
})();