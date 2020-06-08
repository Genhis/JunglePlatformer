
gdjs.evtsExt__Core__DynamicColorGradient = gdjs.evtsExt__Core__DynamicColorGradient || {};

/**
 * Behavior generated from 
 * @class DynamicColorGradient
 * @extends gdjs.RuntimeBehavior
 * @constructor
 */
gdjs.evtsExt__Core__DynamicColorGradient.DynamicColorGradient = function(runtimeScene, behaviorData, owner)
{
    gdjs.RuntimeBehavior.call(this, runtimeScene, behaviorData, owner);
    this._runtimeScene = runtimeScene;

    this._behaviorData = {};
    
    this._behaviorData.Speed = behaviorData.Speed !== undefined ? behaviorData.Speed : Number("1") || 0;
    this._behaviorData.Colors = behaviorData.Colors !== undefined ? behaviorData.Colors : "255;0;0#255;255;0#0;255;0#0;255;255#255;0;255";
    this._behaviorData.Time = Number("") || 0;
};

gdjs.evtsExt__Core__DynamicColorGradient.DynamicColorGradient.prototype = Object.create( gdjs.RuntimeBehavior.prototype );
gdjs.registerBehavior("Core::DynamicColorGradient", gdjs.evtsExt__Core__DynamicColorGradient.DynamicColorGradient);

// Properties:
gdjs.evtsExt__Core__DynamicColorGradient.DynamicColorGradient.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__Core__DynamicColorGradient.DynamicColorGradient.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__Core__DynamicColorGradient.DynamicColorGradient.prototype.doStepPostEventsContext.GDObjectObjects2= [];

gdjs.evtsExt__Core__DynamicColorGradient.DynamicColorGradient.prototype.doStepPostEventsContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Core__DynamicColorGradient.DynamicColorGradient.prototype.doStepPostEventsContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Core__DynamicColorGradient.DynamicColorGradient.prototype.doStepPostEventsContext.userFunc0xa3fbd0 = function(runtimeScene, eventsFunctionContext) {
"use strict";
function lerp(a, b, time) {
    a = parseInt(a);
    b = parseInt(b);
    return a + (b - a) * time;
}

function colorLerp(a, b, time) {
    a = a.split(";");
    b = b.split(";");
    return lerp(a[0], b[0], time) + ";" + lerp(a[1], b[1], time) + ";" + lerp(a[2], b[2], time);
}

/** @type {gdjs.SpriteRuntimeObject} */
const obj = eventsFunctionContext.getObjects("Object")[0];
/** @type {gdjs.RuntimeBehavior} */
const behavior = obj.getBehavior("DynamicColorGradient");
const colors = behavior._getColors().split("#");
const time = behavior._getTime() % colors.length;

obj.setColor(colorLerp(colors[Math.floor(time)], colors[Math.ceil(time) % colors.length], time % 1));
behavior._setTime(time);
};
gdjs.evtsExt__Core__DynamicColorGradient.DynamicColorGradient.prototype.doStepPostEventsContext.eventsList0x5b7088 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.evtsExt__Core__DynamicColorGradient.DynamicColorGradient.prototype.doStepPostEventsContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));
{for(var i = 0, len = gdjs.evtsExt__Core__DynamicColorGradient.DynamicColorGradient.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Core__DynamicColorGradient.DynamicColorGradient.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTime(gdjs.evtsExt__Core__DynamicColorGradient.DynamicColorGradient.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTime() + (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) / 3 * (gdjs.evtsExt__Core__DynamicColorGradient.DynamicColorGradient.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeed())));
}
}}

}


{


gdjs.evtsExt__Core__DynamicColorGradient.DynamicColorGradient.prototype.doStepPostEventsContext.userFunc0xa3fbd0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


}; //End of gdjs.evtsExt__Core__DynamicColorGradient.DynamicColorGradient.prototype.doStepPostEventsContext.eventsList0x5b7088


gdjs.evtsExt__Core__DynamicColorGradient.DynamicColorGradient.prototype.doStepPostEvents = function(parentEventsFunctionContext) {
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    if (objectName === "Object") { return thisObjectList; }    var objectsList = eventsFunctionContext._objectsMap[objectName];
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

gdjs.evtsExt__Core__DynamicColorGradient.DynamicColorGradient.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Core__DynamicColorGradient.DynamicColorGradient.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Core__DynamicColorGradient.DynamicColorGradient.prototype.doStepPostEventsContext.eventsList0x5b7088(runtimeScene, eventsFunctionContext);
return;
}


// Methods:

gdjs.evtsExt__Core__DynamicColorGradient.DynamicColorGradient.prototype._getSpeed = function() {
    return this._behaviorData.Speed !== undefined ? this._behaviorData.Speed : Number("1") || 0;
};
gdjs.evtsExt__Core__DynamicColorGradient.DynamicColorGradient.prototype._setSpeed = function(newValue) {
    this._behaviorData.Speed = newValue;
};
gdjs.evtsExt__Core__DynamicColorGradient.DynamicColorGradient.prototype._getColors = function() {
    return this._behaviorData.Colors !== undefined ? this._behaviorData.Colors : "255;0;0#255;255;0#0;255;0#0;255;255#255;0;255";
};
gdjs.evtsExt__Core__DynamicColorGradient.DynamicColorGradient.prototype._setColors = function(newValue) {
    this._behaviorData.Colors = newValue;
};
gdjs.evtsExt__Core__DynamicColorGradient.DynamicColorGradient.prototype._getTime = function() {
    return this._behaviorData.Time !== undefined ? this._behaviorData.Time : Number("") || 0;
};
gdjs.evtsExt__Core__DynamicColorGradient.DynamicColorGradient.prototype._setTime = function(newValue) {
    this._behaviorData.Time = newValue;
};
