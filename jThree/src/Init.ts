import JThreeContext = require("./Core/JThreeContext");
import JThreeContextProxy = require("./Core/JThreeContextProxy");
import $=require('jquery');

class JThreeInit{
  static noInit=false;
  static Init():void
  {
    $(()=>{
      if (JThreeInit.noInit)return;
      var j3=JThreeContext.getInstanceForProxy();
      j3.init();
      j3.GomlLoader.initForPage();
    });
  }
}
export=JThreeInit;
