gdjs.evtsExt__Core__GetTotalScore = {};

gdjs.evtsExt__Core__GetTotalScore.conditionTrue_0 = {val:false};
gdjs.evtsExt__Core__GetTotalScore.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Core__GetTotalScore.eventsList0x5b76d8 = function(runtimeScene, eventsFunctionContext) {

{


{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Scene").getChild("Total").getChild("Coin")) * gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Score").getChild("Coin")) + gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Scene").getChild("Total").getChild("Enemy")) * gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Score").getChild("Enemy")) + gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Scene").getChild("Total").getChild("Heart")) * gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Score").getChild("Heart")) + gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Scene").getChild("Total").getChild("Skull")) * gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Score").getChild("Skull")); }}}

}


}; //End of gdjs.evtsExt__Core__GetTotalScore.eventsList0x5b76d8


gdjs.evtsExt__Core__GetTotalScore.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__Core__GetTotalScore.eventsList0x5b76d8(runtimeScene, eventsFunctionContext);
return Number(eventsFunctionContext.returnValue) || 0;
}

