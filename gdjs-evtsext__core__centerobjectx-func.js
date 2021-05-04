gdjs.evtsExt__Core__CenterObjectX = {};
gdjs.evtsExt__Core__CenterObjectX.GDObjectObjects1= [];
gdjs.evtsExt__Core__CenterObjectX.GDObjectObjects2= [];

gdjs.evtsExt__Core__CenterObjectX.conditionTrue_0 = {val:false};
gdjs.evtsExt__Core__CenterObjectX.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Core__CenterObjectX.eventsList0x5b7f18 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.evtsExt__Core__CenterObjectX.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));
{for(var i = 0, len = gdjs.evtsExt__Core__CenterObjectX.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Core__CenterObjectX.GDObjectObjects1[i].setX(gdjs.evtTools.camera.getCameraX(runtimeScene, (gdjs.evtsExt__Core__CenterObjectX.GDObjectObjects1[i].getLayer()), 0) - (gdjs.evtsExt__Core__CenterObjectX.GDObjectObjects1[i].getWidth()) / 2);
}
}}

}


}; //End of gdjs.evtsExt__Core__CenterObjectX.eventsList0x5b7f18


gdjs.evtsExt__Core__CenterObjectX.func = function(runtimeScene, Object, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      return parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
    }
    return null;
  },
  getArgument: function(argName) {
    return "";
  }
};

gdjs.evtsExt__Core__CenterObjectX.GDObjectObjects1.length = 0;
gdjs.evtsExt__Core__CenterObjectX.GDObjectObjects2.length = 0;

gdjs.evtsExt__Core__CenterObjectX.eventsList0x5b7f18(runtimeScene, eventsFunctionContext);
return;
}

