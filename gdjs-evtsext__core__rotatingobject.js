
gdjs.evtsExt__Core__RotatingObject = gdjs.evtsExt__Core__RotatingObject || {};

/**
 * Behavior generated from 
 * @class RotatingObject
 * @extends gdjs.RuntimeBehavior
 * @constructor
 */
gdjs.evtsExt__Core__RotatingObject.RotatingObject = function(runtimeScene, behaviorData, owner)
{
    gdjs.RuntimeBehavior.call(this, runtimeScene, behaviorData, owner);
    this._runtimeScene = runtimeScene;

    this._behaviorData = {};
    
    this._behaviorData.Direction = Number("0") || 0;
};

gdjs.evtsExt__Core__RotatingObject.RotatingObject.prototype = Object.create( gdjs.RuntimeBehavior.prototype );
gdjs.registerBehavior("Core::RotatingObject", gdjs.evtsExt__Core__RotatingObject.RotatingObject);

// Properties:
gdjs.evtsExt__Core__RotatingObject.RotatingObject.prototype.SetDirectionContext = {};
gdjs.evtsExt__Core__RotatingObject.RotatingObject.prototype.SetDirectionContext.GDObjectObjects1= [];
gdjs.evtsExt__Core__RotatingObject.RotatingObject.prototype.SetDirectionContext.GDObjectObjects2= [];

gdjs.evtsExt__Core__RotatingObject.RotatingObject.prototype.SetDirectionContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Core__RotatingObject.RotatingObject.prototype.SetDirectionContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Core__RotatingObject.RotatingObject.prototype.SetDirectionContext.eventsList0x5b7c78 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.evtsExt__Core__RotatingObject.RotatingObject.prototype.SetDirectionContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));
{for(var i = 0, len = gdjs.evtsExt__Core__RotatingObject.RotatingObject.prototype.SetDirectionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Core__RotatingObject.RotatingObject.prototype.SetDirectionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDirection(1 - (gdjs.evtsExt__Core__RotatingObject.RotatingObject.prototype.SetDirectionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDirection()));
}
}}

}


}; //End of gdjs.evtsExt__Core__RotatingObject.RotatingObject.prototype.SetDirectionContext.eventsList0x5b7c78


gdjs.evtsExt__Core__RotatingObject.RotatingObject.prototype.SetDirection = function(parentEventsFunctionContext) {
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

gdjs.evtsExt__Core__RotatingObject.RotatingObject.prototype.SetDirectionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Core__RotatingObject.RotatingObject.prototype.SetDirectionContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Core__RotatingObject.RotatingObject.prototype.SetDirectionContext.eventsList0x5b7c78(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__Core__RotatingObject.RotatingObject.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__Core__RotatingObject.RotatingObject.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__Core__RotatingObject.RotatingObject.prototype.doStepPostEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__Core__RotatingObject.RotatingObject.prototype.doStepPostEventsContext.GDObjectObjects3= [];

gdjs.evtsExt__Core__RotatingObject.RotatingObject.prototype.doStepPostEventsContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Core__RotatingObject.RotatingObject.prototype.doStepPostEventsContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Core__RotatingObject.RotatingObject.prototype.doStepPostEventsContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__Core__RotatingObject.RotatingObject.prototype.doStepPostEventsContext.eventsList0xf0ac94 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__Core__RotatingObject.RotatingObject.prototype.doStepPostEventsContext.GDObjectObjects2.createFrom(gdjs.evtsExt__Core__RotatingObject.RotatingObject.prototype.doStepPostEventsContext.GDObjectObjects1);


gdjs.evtsExt__Core__RotatingObject.RotatingObject.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Core__RotatingObject.RotatingObject.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Core__RotatingObject.RotatingObject.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDirection() == 0 ) {
        gdjs.evtsExt__Core__RotatingObject.RotatingObject.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Core__RotatingObject.RotatingObject.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Core__RotatingObject.RotatingObject.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Core__RotatingObject.RotatingObject.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;}if (gdjs.evtsExt__Core__RotatingObject.RotatingObject.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Core__RotatingObject.RotatingObject.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Core__RotatingObject.RotatingObject.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Core__RotatingObject.RotatingObject.prototype.doStepPostEventsContext.GDObjectObjects2[i].setAngle(gdjs.evtsExt__Core__RotatingObject.RotatingObject.prototype.doStepPostEventsContext.GDObjectObjects2[i].getAngle() - ((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__Core__RotatingObject.RotatingObject.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariables().get("RotatingObject").getChild("Speed"))) * 36 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{

/* Reuse gdjs.evtsExt__Core__RotatingObject.RotatingObject.prototype.doStepPostEventsContext.GDObjectObjects1 */

gdjs.evtsExt__Core__RotatingObject.RotatingObject.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Core__RotatingObject.RotatingObject.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Core__RotatingObject.RotatingObject.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDirection() == 1 ) {
        gdjs.evtsExt__Core__RotatingObject.RotatingObject.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Core__RotatingObject.RotatingObject.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Core__RotatingObject.RotatingObject.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Core__RotatingObject.RotatingObject.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Core__RotatingObject.RotatingObject.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Core__RotatingObject.RotatingObject.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Core__RotatingObject.RotatingObject.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Core__RotatingObject.RotatingObject.prototype.doStepPostEventsContext.GDObjectObjects1[i].setAngle(gdjs.evtsExt__Core__RotatingObject.RotatingObject.prototype.doStepPostEventsContext.GDObjectObjects1[i].getAngle() + ((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__Core__RotatingObject.RotatingObject.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariables().get("RotatingObject").getChild("Speed"))) * 36 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


}; //End of gdjs.evtsExt__Core__RotatingObject.RotatingObject.prototype.doStepPostEventsContext.eventsList0xf0ac94
gdjs.evtsExt__Core__RotatingObject.RotatingObject.prototype.doStepPostEventsContext.eventsList0x5b7c78 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__Core__RotatingObject.RotatingObject.prototype.doStepPostEventsContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__Core__RotatingObject.RotatingObject.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Core__RotatingObject.RotatingObject.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Core__RotatingObject.RotatingObject.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__Core__RotatingObject.RotatingObject.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariables().get("Active")) != 0 ) {
        gdjs.evtsExt__Core__RotatingObject.RotatingObject.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Core__RotatingObject.RotatingObject.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Core__RotatingObject.RotatingObject.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Core__RotatingObject.RotatingObject.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Core__RotatingObject.RotatingObject.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__Core__RotatingObject.RotatingObject.prototype.doStepPostEventsContext.eventsList0xf0ac94(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


}; //End of gdjs.evtsExt__Core__RotatingObject.RotatingObject.prototype.doStepPostEventsContext.eventsList0x5b7c78


gdjs.evtsExt__Core__RotatingObject.RotatingObject.prototype.doStepPostEvents = function(parentEventsFunctionContext) {
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

gdjs.evtsExt__Core__RotatingObject.RotatingObject.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Core__RotatingObject.RotatingObject.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Core__RotatingObject.RotatingObject.prototype.doStepPostEventsContext.GDObjectObjects3.length = 0;

gdjs.evtsExt__Core__RotatingObject.RotatingObject.prototype.doStepPostEventsContext.eventsList0x5b7c78(runtimeScene, eventsFunctionContext);
return;
}


// Methods:

gdjs.evtsExt__Core__RotatingObject.RotatingObject.prototype._getDirection = function() {
    return this._behaviorData.Direction !== undefined ? this._behaviorData.Direction : Number("0") || 0;
};
gdjs.evtsExt__Core__RotatingObject.RotatingObject.prototype._setDirection = function(newValue) {
    this._behaviorData.Direction = newValue;
};
