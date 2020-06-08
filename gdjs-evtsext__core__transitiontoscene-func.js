gdjs.evtsExt__Core__TransitionToScene = {};
gdjs.evtsExt__Core__TransitionToScene.GDOverlayObjects1= [];
gdjs.evtsExt__Core__TransitionToScene.GDOverlayObjects2= [];

gdjs.evtsExt__Core__TransitionToScene.conditionTrue_0 = {val:false};
gdjs.evtsExt__Core__TransitionToScene.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Core__TransitionToScene.eventsList0x5b76d8 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.evtsExt__Core__TransitionToScene.GDOverlayObjects1.createFrom(eventsFunctionContext.getObjects("Overlay"));
{for(var i = 0, len = gdjs.evtsExt__Core__TransitionToScene.GDOverlayObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Core__TransitionToScene.GDOverlayObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Transition")).ChangeTransition("FadeIn", (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Duration")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__Core__TransitionToScene.GDOverlayObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Core__TransitionToScene.GDOverlayObjects1[i].activateBehavior("Transition", true);
}
}{for(var i = 0, len = gdjs.evtsExt__Core__TransitionToScene.GDOverlayObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Core__TransitionToScene.GDOverlayObjects1[i].returnVariable(gdjs.evtsExt__Core__TransitionToScene.GDOverlayObjects1[i].getVariables().get("ToScene")).setString((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Scene") : ""));
}
}}

}


}; //End of gdjs.evtsExt__Core__TransitionToScene.eventsList0x5b76d8


gdjs.evtsExt__Core__TransitionToScene.func = function(runtimeScene, Overlay, Transition, Scene, Duration, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Overlay": Overlay
},
  _behaviorNamesMap: {
"Transition": Transition
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
if (argName === "Scene") return Scene;
if (argName === "Duration") return Duration;
    return "";
  }
};

gdjs.evtsExt__Core__TransitionToScene.GDOverlayObjects1.length = 0;
gdjs.evtsExt__Core__TransitionToScene.GDOverlayObjects2.length = 0;

gdjs.evtsExt__Core__TransitionToScene.eventsList0x5b76d8(runtimeScene, eventsFunctionContext);
return;
}

