
gdjs.evtsExt__Core__Button = gdjs.evtsExt__Core__Button || {};

/**
 * Behavior generated from 
 * @class Button
 * @extends gdjs.RuntimeBehavior
 * @constructor
 */
gdjs.evtsExt__Core__Button.Button = function(runtimeScene, behaviorData, owner)
{
    gdjs.RuntimeBehavior.call(this, runtimeScene, behaviorData, owner);
    this._runtimeScene = runtimeScene;

    this._behaviorData = {};
    
};

gdjs.evtsExt__Core__Button.Button.prototype = Object.create( gdjs.RuntimeBehavior.prototype );
gdjs.registerBehavior("Core::Button", gdjs.evtsExt__Core__Button.Button);

// Properties:
gdjs.evtsExt__Core__Button.Button.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__Core__Button.Button.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__Core__Button.Button.prototype.doStepPreEventsContext.GDObjectObjects2= [];

gdjs.evtsExt__Core__Button.Button.prototype.doStepPreEventsContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Core__Button.Button.prototype.doStepPreEventsContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Core__Button.Button.prototype.doStepPreEventsContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__Core__Button.Button.prototype.doStepPreEventsContext.condition2IsTrue_0 = {val:false};
gdjs.evtsExt__Core__Button.Button.prototype.doStepPreEventsContext.condition3IsTrue_0 = {val:false};
gdjs.evtsExt__Core__Button.Button.prototype.doStepPreEventsContext.conditionTrue_1 = {val:false};
gdjs.evtsExt__Core__Button.Button.prototype.doStepPreEventsContext.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__Core__Button.Button.prototype.doStepPreEventsContext.condition1IsTrue_1 = {val:false};
gdjs.evtsExt__Core__Button.Button.prototype.doStepPreEventsContext.condition2IsTrue_1 = {val:false};
gdjs.evtsExt__Core__Button.Button.prototype.doStepPreEventsContext.condition3IsTrue_1 = {val:false};


gdjs.evtsExt__Core__Button.Button.prototype.doStepPreEventsContext.mapOfGDgdjs_46evtsExt_95_95Core_95_95Button_46Button_46prototype_46doStepPreEventsContext_46GDObjectObjects1Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__Core__Button.Button.prototype.doStepPreEventsContext.GDObjectObjects1});gdjs.evtsExt__Core__Button.Button.prototype.doStepPreEventsContext.eventsList0xc5249c = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Core__Button.Button.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__Core__Button.Button.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
gdjs.evtsExt__Core__Button.Button.prototype.doStepPreEventsContext.condition2IsTrue_0.val = false;
{
gdjs.evtsExt__Core__Button.Button.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Settings").getChild("Sound")) != 0;
}if ( gdjs.evtsExt__Core__Button.Button.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__Core__Button.Button.prototype.doStepPreEventsContext.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.evtsExt__Core__Button.Button.prototype.doStepPreEventsContext.condition1IsTrue_0.val ) {
{
{gdjs.evtsExt__Core__Button.Button.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__Core__Button.Button.prototype.doStepPreEventsContext.condition2IsTrue_0;
gdjs.evtsExt__Core__Button.Button.prototype.doStepPreEventsContext.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7748884);
}
}}
}
if (gdjs.evtsExt__Core__Button.Button.prototype.doStepPreEventsContext.condition2IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\sounds\\gui\\click.ogg", false, 10, 1);
}}

}


}; //End of gdjs.evtsExt__Core__Button.Button.prototype.doStepPreEventsContext.eventsList0xc5249c
gdjs.evtsExt__Core__Button.Button.prototype.doStepPreEventsContext.eventsList0xd427e4 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__Core__Button.Button.prototype.doStepPreEventsContext.GDObjectObjects1 */

gdjs.evtsExt__Core__Button.Button.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__Core__Button.Button.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.evtsExt__Core__Button.Button.prototype.doStepPreEventsContext.mapOfGDgdjs_46evtsExt_95_95Core_95_95Button_46Button_46prototype_46doStepPreEventsContext_46GDObjectObjects1Objects, runtimeScene, true, false);
}if (gdjs.evtsExt__Core__Button.Button.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Core__Button.Button.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Core__Button.Button.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Core__Button.Button.prototype.doStepPreEventsContext.GDObjectObjects1[i].setAnimationName("OnMouseOver");
}
}
{ //Subevents
gdjs.evtsExt__Core__Button.Button.prototype.doStepPreEventsContext.eventsList0xc5249c(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


}; //End of gdjs.evtsExt__Core__Button.Button.prototype.doStepPreEventsContext.eventsList0xd427e4
gdjs.evtsExt__Core__Button.Button.prototype.doStepPreEventsContext.eventsList0x5b7438 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__Core__Button.Button.prototype.doStepPreEventsContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__Core__Button.Button.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Core__Button.Button.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Core__Button.Button.prototype.doStepPreEventsContext.GDObjectObjects1[i].isCurrentAnimationName("Disabled")) ) {
        gdjs.evtsExt__Core__Button.Button.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Core__Button.Button.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Core__Button.Button.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Core__Button.Button.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Core__Button.Button.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Core__Button.Button.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Core__Button.Button.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Core__Button.Button.prototype.doStepPreEventsContext.GDObjectObjects1[i].setAnimationName("Normal");
}
}
{ //Subevents
gdjs.evtsExt__Core__Button.Button.prototype.doStepPreEventsContext.eventsList0xd427e4(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


}; //End of gdjs.evtsExt__Core__Button.Button.prototype.doStepPreEventsContext.eventsList0x5b7438


gdjs.evtsExt__Core__Button.Button.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
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

gdjs.evtsExt__Core__Button.Button.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Core__Button.Button.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Core__Button.Button.prototype.doStepPreEventsContext.eventsList0x5b7438(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__Core__Button.Button.prototype.IsMouseOverContext = {};
gdjs.evtsExt__Core__Button.Button.prototype.IsMouseOverContext.GDObjectObjects1= [];
gdjs.evtsExt__Core__Button.Button.prototype.IsMouseOverContext.GDObjectObjects2= [];

gdjs.evtsExt__Core__Button.Button.prototype.IsMouseOverContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Core__Button.Button.prototype.IsMouseOverContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Core__Button.Button.prototype.IsMouseOverContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__Core__Button.Button.prototype.IsMouseOverContext.eventsList0x5b7438 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__Core__Button.Button.prototype.IsMouseOverContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__Core__Button.Button.prototype.IsMouseOverContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Core__Button.Button.prototype.IsMouseOverContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Core__Button.Button.prototype.IsMouseOverContext.GDObjectObjects1[i].isCurrentAnimationName("OnMouseOver") ) {
        gdjs.evtsExt__Core__Button.Button.prototype.IsMouseOverContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Core__Button.Button.prototype.IsMouseOverContext.GDObjectObjects1[k] = gdjs.evtsExt__Core__Button.Button.prototype.IsMouseOverContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Core__Button.Button.prototype.IsMouseOverContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Core__Button.Button.prototype.IsMouseOverContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


}; //End of gdjs.evtsExt__Core__Button.Button.prototype.IsMouseOverContext.eventsList0x5b7438


gdjs.evtsExt__Core__Button.Button.prototype.IsMouseOver = function(parentEventsFunctionContext) {
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

gdjs.evtsExt__Core__Button.Button.prototype.IsMouseOverContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Core__Button.Button.prototype.IsMouseOverContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Core__Button.Button.prototype.IsMouseOverContext.eventsList0x5b7438(runtimeScene, eventsFunctionContext);
return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__Core__Button.Button.prototype.DisableContext = {};
gdjs.evtsExt__Core__Button.Button.prototype.DisableContext.GDObjectObjects1= [];
gdjs.evtsExt__Core__Button.Button.prototype.DisableContext.GDObjectObjects2= [];

gdjs.evtsExt__Core__Button.Button.prototype.DisableContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Core__Button.Button.prototype.DisableContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Core__Button.Button.prototype.DisableContext.eventsList0x5b7438 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.evtsExt__Core__Button.Button.prototype.DisableContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));
{for(var i = 0, len = gdjs.evtsExt__Core__Button.Button.prototype.DisableContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Core__Button.Button.prototype.DisableContext.GDObjectObjects1[i].setAnimationName("Disabled");
}
}}

}


}; //End of gdjs.evtsExt__Core__Button.Button.prototype.DisableContext.eventsList0x5b7438


gdjs.evtsExt__Core__Button.Button.prototype.Disable = function(parentEventsFunctionContext) {
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

gdjs.evtsExt__Core__Button.Button.prototype.DisableContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Core__Button.Button.prototype.DisableContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Core__Button.Button.prototype.DisableContext.eventsList0x5b7438(runtimeScene, eventsFunctionContext);
return;
}


// Methods:

