
gdjs.evtsExt__Core__RotateAnimation = gdjs.evtsExt__Core__RotateAnimation || {};

/**
 * Behavior generated from 
 * @class RotateAnimation
 * @extends gdjs.RuntimeBehavior
 * @constructor
 */
gdjs.evtsExt__Core__RotateAnimation.RotateAnimation = function(runtimeScene, behaviorData, owner)
{
    gdjs.RuntimeBehavior.call(this, runtimeScene, behaviorData, owner);
    this._runtimeScene = runtimeScene;

    this._behaviorData = {};
    
    this._behaviorData.DegreesPerSecond = behaviorData.DegreesPerSecond !== undefined ? behaviorData.DegreesPerSecond : Number("360") || 0;
};

gdjs.evtsExt__Core__RotateAnimation.RotateAnimation.prototype = Object.create( gdjs.RuntimeBehavior.prototype );
gdjs.registerBehavior("Core::RotateAnimation", gdjs.evtsExt__Core__RotateAnimation.RotateAnimation);

// Properties:
gdjs.evtsExt__Core__RotateAnimation.RotateAnimation.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__Core__RotateAnimation.RotateAnimation.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__Core__RotateAnimation.RotateAnimation.prototype.doStepPostEventsContext.GDObjectObjects2= [];

gdjs.evtsExt__Core__RotateAnimation.RotateAnimation.prototype.doStepPostEventsContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Core__RotateAnimation.RotateAnimation.prototype.doStepPostEventsContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Core__RotateAnimation.RotateAnimation.prototype.doStepPostEventsContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__Core__RotateAnimation.RotateAnimation.prototype.doStepPostEventsContext.eventsList0x5b7c78 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__Core__RotateAnimation.RotateAnimation.prototype.doStepPostEventsContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__Core__RotateAnimation.RotateAnimation.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Core__RotateAnimation.RotateAnimation.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Core__RotateAnimation.RotateAnimation.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__Core__RotateAnimation.RotateAnimation.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariables().get("Active")) != 0 ) {
        gdjs.evtsExt__Core__RotateAnimation.RotateAnimation.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Core__RotateAnimation.RotateAnimation.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Core__RotateAnimation.RotateAnimation.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Core__RotateAnimation.RotateAnimation.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Core__RotateAnimation.RotateAnimation.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Core__RotateAnimation.RotateAnimation.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Core__RotateAnimation.RotateAnimation.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Core__RotateAnimation.RotateAnimation.prototype.doStepPostEventsContext.GDObjectObjects1[i].rotate((gdjs.evtsExt__Core__RotateAnimation.RotateAnimation.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDegreesPerSecond()), runtimeScene);
}
}}

}


}; //End of gdjs.evtsExt__Core__RotateAnimation.RotateAnimation.prototype.doStepPostEventsContext.eventsList0x5b7c78


gdjs.evtsExt__Core__RotateAnimation.RotateAnimation.prototype.doStepPostEvents = function(parentEventsFunctionContext) {
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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

gdjs.evtsExt__Core__RotateAnimation.RotateAnimation.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Core__RotateAnimation.RotateAnimation.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Core__RotateAnimation.RotateAnimation.prototype.doStepPostEventsContext.eventsList0x5b7c78(runtimeScene, eventsFunctionContext);
return;
}


// Methods:

gdjs.evtsExt__Core__RotateAnimation.RotateAnimation.prototype._getDegreesPerSecond = function() {
    return this._behaviorData.DegreesPerSecond !== undefined ? this._behaviorData.DegreesPerSecond : Number("360") || 0;
};
gdjs.evtsExt__Core__RotateAnimation.RotateAnimation.prototype._setDegreesPerSecond = function(newValue) {
    this._behaviorData.DegreesPerSecond = newValue;
};
