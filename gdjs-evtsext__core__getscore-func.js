gdjs.evtsExt__Core__GetScore = {};

gdjs.evtsExt__Core__GetScore.conditionTrue_0 = {val:false};
gdjs.evtsExt__Core__GetScore.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Core__GetScore.eventsList0x5b76d8 = function(runtimeScene, eventsFunctionContext) {

{


{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Scene").getChild("Current").getChild("Coin")) * gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Score").getChild("Coin")) + gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Scene").getChild("Current").getChild("Enemy")) * gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Score").getChild("Enemy")) + gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Scene").getChild("Current").getChild("Heart")) * gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Score").getChild("Heart")) + gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Scene").getChild("Current").getChild("Skull")) * gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Score").getChild("Skull")); }}}

}


}; //End of gdjs.evtsExt__Core__GetScore.eventsList0x5b76d8


gdjs.evtsExt__Core__GetScore.func = function(runtimeScene, parentEventsFunctionContext) {
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
    return "";
  }
};


gdjs.evtsExt__Core__GetScore.eventsList0x5b76d8(runtimeScene, eventsFunctionContext);
return Number(eventsFunctionContext.returnValue) || 0;
}

