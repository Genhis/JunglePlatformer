
gdjs.evtsExt__Core__FloatingObject = gdjs.evtsExt__Core__FloatingObject || {};

/**
 * Behavior generated from 
 * @class FloatingObject
 * @extends gdjs.RuntimeBehavior
 * @constructor
 */
gdjs.evtsExt__Core__FloatingObject.FloatingObject = function(runtimeScene, behaviorData, owner)
{
    gdjs.RuntimeBehavior.call(this, runtimeScene, behaviorData, owner);
    this._runtimeScene = runtimeScene;

    this._behaviorData = {};
    
    this._behaviorData.Direction = Number("-1") || 0;
    this._behaviorData.Offset = Number("0") || 0;
    this._behaviorData.MaxDistance = Number("6") || 0;
    this._behaviorData.Speed = Number("2") || 0;
};

gdjs.evtsExt__Core__FloatingObject.FloatingObject.prototype = Object.create( gdjs.RuntimeBehavior.prototype );
gdjs.registerBehavior("Core::FloatingObject", gdjs.evtsExt__Core__FloatingObject.FloatingObject);

// Properties:
gdjs.evtsExt__Core__FloatingObject.FloatingObject.prototype.onDeActivateContext = {};
gdjs.evtsExt__Core__FloatingObject.FloatingObject.prototype.onDeActivateContext.GDObjectObjects1= [];
gdjs.evtsExt__Core__FloatingObject.FloatingObject.prototype.onDeActivateContext.GDObjectObjects2= [];

gdjs.evtsExt__Core__FloatingObject.FloatingObject.prototype.onDeActivateContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Core__FloatingObject.FloatingObject.prototype.onDeActivateContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Core__FloatingObject.FloatingObject.prototype.onDeActivateContext.eventsList0x5b7088 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.evtsExt__Core__FloatingObject.FloatingObject.prototype.onDeActivateContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));
{for(var i = 0, len = gdjs.evtsExt__Core__FloatingObject.FloatingObject.prototype.onDeActivateContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Core__FloatingObject.FloatingObject.prototype.onDeActivateContext.GDObjectObjects1[i].setY(gdjs.evtsExt__Core__FloatingObject.FloatingObject.prototype.onDeActivateContext.GDObjectObjects1[i].getY() - ((gdjs.evtsExt__Core__FloatingObject.FloatingObject.prototype.onDeActivateContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOffset())));
}
}{for(var i = 0, len = gdjs.evtsExt__Core__FloatingObject.FloatingObject.prototype.onDeActivateContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Core__FloatingObject.FloatingObject.prototype.onDeActivateContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setOffset(0);
}
}}

}


}; //End of gdjs.evtsExt__Core__FloatingObject.FloatingObject.prototype.onDeActivateContext.eventsList0x5b7088


gdjs.evtsExt__Core__FloatingObject.FloatingObject.prototype.onDeActivate = function(parentEventsFunctionContext) {
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

gdjs.evtsExt__Core__FloatingObject.FloatingObject.prototype.onDeActivateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Core__FloatingObject.FloatingObject.prototype.onDeActivateContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Core__FloatingObject.FloatingObject.prototype.onDeActivateContext.eventsList0x5b7088(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__Core__FloatingObject.FloatingObject.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__Core__FloatingObject.FloatingObject.prototype.doStepPostEventsContext.GDObjectObjects1= [];

gdjs.evtsExt__Core__FloatingObject.FloatingObject.prototype.doStepPostEventsContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Core__FloatingObject.FloatingObject.prototype.doStepPostEventsContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Core__FloatingObject.FloatingObject.prototype.doStepPostEventsContext.eventsList0x5b7088 = function(runtimeScene, eventsFunctionContext) {

{



}


{



}


{



}


}; //End of gdjs.evtsExt__Core__FloatingObject.FloatingObject.prototype.doStepPostEventsContext.eventsList0x5b7088


gdjs.evtsExt__Core__FloatingObject.FloatingObject.prototype.doStepPostEvents = function(parentEventsFunctionContext) {
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

gdjs.evtsExt__Core__FloatingObject.FloatingObject.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__Core__FloatingObject.FloatingObject.prototype.doStepPostEventsContext.eventsList0x5b7088(runtimeScene, eventsFunctionContext);
return;
}


// Methods:

gdjs.evtsExt__Core__FloatingObject.FloatingObject.prototype._getDirection = function() {
    return this._behaviorData.Direction !== undefined ? this._behaviorData.Direction : Number("-1") || 0;
};
gdjs.evtsExt__Core__FloatingObject.FloatingObject.prototype._setDirection = function(newValue) {
    this._behaviorData.Direction = newValue;
};
gdjs.evtsExt__Core__FloatingObject.FloatingObject.prototype._getOffset = function() {
    return this._behaviorData.Offset !== undefined ? this._behaviorData.Offset : Number("0") || 0;
};
gdjs.evtsExt__Core__FloatingObject.FloatingObject.prototype._setOffset = function(newValue) {
    this._behaviorData.Offset = newValue;
};
gdjs.evtsExt__Core__FloatingObject.FloatingObject.prototype._getMaxDistance = function() {
    return this._behaviorData.MaxDistance !== undefined ? this._behaviorData.MaxDistance : Number("6") || 0;
};
gdjs.evtsExt__Core__FloatingObject.FloatingObject.prototype._setMaxDistance = function(newValue) {
    this._behaviorData.MaxDistance = newValue;
};
gdjs.evtsExt__Core__FloatingObject.FloatingObject.prototype._getSpeed = function() {
    return this._behaviorData.Speed !== undefined ? this._behaviorData.Speed : Number("2") || 0;
};
gdjs.evtsExt__Core__FloatingObject.FloatingObject.prototype._setSpeed = function(newValue) {
    this._behaviorData.Speed = newValue;
};
