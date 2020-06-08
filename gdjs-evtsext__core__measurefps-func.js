gdjs.evtsExt__Core__MeasureFPS = {};

gdjs.evtsExt__Core__MeasureFPS.conditionTrue_0 = {val:false};
gdjs.evtsExt__Core__MeasureFPS.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Core__MeasureFPS.eventsList0x5b76d8 = function(runtimeScene, eventsFunctionContext) {

{


{
{runtimeScene.getGame().getVariables().get("Core").getChild("FPS").setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Core").getChild("FPS")) * (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Smoothing")) || 0 : 0) + Math.round(1 / gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)) * (1 - (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Smoothing")) || 0 : 0)));
}}

}


}; //End of gdjs.evtsExt__Core__MeasureFPS.eventsList0x5b76d8


gdjs.evtsExt__Core__MeasureFPS.func = function(runtimeScene, Smoothing, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
        var objectsList = eventsFunctionContext._objectsMap[objectName];
    return objectsList ? gdjs.objectsListsToArray(objectsList) : [];
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
if (argName === "Smoothing") return Smoothing;
    return "";
  }
};


gdjs.evtsExt__Core__MeasureFPS.eventsList0x5b76d8(runtimeScene, eventsFunctionContext);
return;
}

