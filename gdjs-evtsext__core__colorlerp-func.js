gdjs.evtsExt__Core__ColorLerp = {};

gdjs.evtsExt__Core__ColorLerp.conditionTrue_0 = {val:false};
gdjs.evtsExt__Core__ColorLerp.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Core__ColorLerp.userFunc0x994fb8 = function(runtimeScene, eventsFunctionContext) {
"use strict";
function lerp(a, b, time) {
    a = parseInt(a);
    b = parseInt(b);
    return Math.floor(a + (b - a) * time);
}

const a = eventsFunctionContext.getArgument("From").split(";");
const b = eventsFunctionContext.getArgument("To").split(";");
const time = Math.min(Math.max(eventsFunctionContext.getArgument("Time"), 0), 1);

eventsFunctionContext.returnValue = lerp(a[0], b[0], time) + ";" + lerp(a[1], b[1], time) + ";" + lerp(a[2], b[2], time);

};
gdjs.evtsExt__Core__ColorLerp.eventsList0x5b7328 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Core__ColorLerp.userFunc0x994fb8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


}; //End of gdjs.evtsExt__Core__ColorLerp.eventsList0x5b7328


gdjs.evtsExt__Core__ColorLerp.func = function(runtimeScene, From, To, Time, parentEventsFunctionContext) {
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
if (argName === "From") return From;
if (argName === "To") return To;
if (argName === "Time") return Time;
    return "";
  }
};


gdjs.evtsExt__Core__ColorLerp.eventsList0x5b7328(runtimeScene, eventsFunctionContext);
return "" + eventsFunctionContext.returnValue;
}

