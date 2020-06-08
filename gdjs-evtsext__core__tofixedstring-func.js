gdjs.evtsExt__Core__ToFixedString = {};

gdjs.evtsExt__Core__ToFixedString.conditionTrue_0 = {val:false};
gdjs.evtsExt__Core__ToFixedString.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Core__ToFixedString.userFunc0xf08e68 = function(runtimeScene, eventsFunctionContext) {
"use strict";
eventsFunctionContext.returnValue = eventsFunctionContext.getArgument("Number").toFixed(eventsFunctionContext.getArgument("Digits"))

};
gdjs.evtsExt__Core__ToFixedString.eventsList0x5b76d8 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Core__ToFixedString.userFunc0xf08e68(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


}; //End of gdjs.evtsExt__Core__ToFixedString.eventsList0x5b76d8


gdjs.evtsExt__Core__ToFixedString.func = function(runtimeScene, Number, Digits, parentEventsFunctionContext) {
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
if (argName === "Number") return Number;
if (argName === "Digits") return Digits;
    return "";
  }
};


gdjs.evtsExt__Core__ToFixedString.eventsList0x5b76d8(runtimeScene, eventsFunctionContext);
return "" + eventsFunctionContext.returnValue;
}

