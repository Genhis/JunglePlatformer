
gdjs.evtsExt__Core__ActiveObject = gdjs.evtsExt__Core__ActiveObject || {};

/**
 * Behavior generated from 
 * @class ActiveObject
 * @extends gdjs.RuntimeBehavior
 * @constructor
 */
gdjs.evtsExt__Core__ActiveObject.ActiveObject = function(runtimeScene, behaviorData, owner)
{
    gdjs.RuntimeBehavior.call(this, runtimeScene, behaviorData, owner);
    this._runtimeScene = runtimeScene;

    this._behaviorData = {};
    
};

gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype = Object.create( gdjs.RuntimeBehavior.prototype );
gdjs.registerBehavior("Core::ActiveObject", gdjs.evtsExt__Core__ActiveObject.ActiveObject);

// Properties:
gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.onCreatedContext = {};
gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.onCreatedContext.GDObjectObjects2= [];

gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.onCreatedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.onCreatedContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.onCreatedContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.onCreatedContext.eventsList0x5b7438 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.onCreatedContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.onCreatedContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.onCreatedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.onCreatedContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.onCreatedContext.GDObjectObjects1[i].getVariables().get("ActiveObject").getChild("HasTimer")) != 0 ) {
        gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.onCreatedContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.onCreatedContext.GDObjectObjects1[k] = gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.onCreatedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.onCreatedContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.onCreatedContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.onCreatedContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.onCreatedContext.GDObjectObjects1[i].resetTimer("ActivationTimer");
}
}}

}


}; //End of gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.onCreatedContext.eventsList0x5b7438


gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.onCreated = function(parentEventsFunctionContext) {
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

gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.onCreatedContext.eventsList0x5b7438(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.doStepPreEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.doStepPreEventsContext.GDObjectObjects3= [];

gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.doStepPreEventsContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.doStepPreEventsContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.doStepPreEventsContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.doStepPreEventsContext.condition2IsTrue_0 = {val:false};


gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.doStepPreEventsContext.eventsList0xe4888c = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.doStepPreEventsContext.GDObjectObjects2.createFrom(gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.doStepPreEventsContext.GDObjectObjects1);


gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsActive((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;}if ( gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.doStepPreEventsContext.GDObjectObjects2[i].timerElapsedTime("ActivationTimer", (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.doStepPreEventsContext.GDObjectObjects2[i].getVariables().get("ActiveObject").getChild("TimeActive")))) ) {
        gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.doStepPreEventsContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;}}
if (gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).Deactivate((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.doStepPreEventsContext.GDObjectObjects2[i].resetTimer("ActivationTimer");
}
}}

}


{

/* Reuse gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.doStepPreEventsContext.GDObjectObjects1 */

gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsActive((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.doStepPreEventsContext.GDObjectObjects1[i].timerElapsedTime("ActivationTimer", (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.doStepPreEventsContext.GDObjectObjects1[i].getVariables().get("ActiveObject").getChild("TimeInactive")))) ) {
        gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.doStepPreEventsContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}}
if (gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).Activate((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.doStepPreEventsContext.GDObjectObjects1[i].resetTimer("ActivationTimer");
}
}}

}


}; //End of gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.doStepPreEventsContext.eventsList0xe4888c
gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.doStepPreEventsContext.eventsList0x5b7438 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.doStepPreEventsContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.doStepPreEventsContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.doStepPreEventsContext.GDObjectObjects1[i].getVariables().get("ActiveObject").getChild("HasTimer")) != 0 ) {
        gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.doStepPreEventsContext.eventsList0xe4888c(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


}; //End of gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.doStepPreEventsContext.eventsList0x5b7438


gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
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

gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;

gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.doStepPreEventsContext.eventsList0x5b7438(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.ActivateContext = {};
gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.ActivateContext.GDObjectObjects1= [];
gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.ActivateContext.GDObjectObjects2= [];

gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.ActivateContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.ActivateContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.ActivateContext.eventsList0x5b7438 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.ActivateContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));
{for(var i = 0, len = gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.ActivateContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.ActivateContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.ActivateContext.GDObjectObjects1[i].getVariables().get("Active")).setNumber(1);
}
}}

}


}; //End of gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.ActivateContext.eventsList0x5b7438


gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.Activate = function(parentEventsFunctionContext) {
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

gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.ActivateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.ActivateContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.ActivateContext.eventsList0x5b7438(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.DeactivateContext = {};
gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.DeactivateContext.GDObjectObjects1= [];
gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.DeactivateContext.GDObjectObjects2= [];

gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.DeactivateContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.DeactivateContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.DeactivateContext.eventsList0x5b7438 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.DeactivateContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));
{for(var i = 0, len = gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.DeactivateContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.DeactivateContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.DeactivateContext.GDObjectObjects1[i].getVariables().get("Active")).setNumber(0);
}
}}

}


}; //End of gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.DeactivateContext.eventsList0x5b7438


gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.Deactivate = function(parentEventsFunctionContext) {
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

gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.DeactivateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.DeactivateContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.DeactivateContext.eventsList0x5b7438(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.ToggleContext = {};
gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.ToggleContext.GDObjectObjects1= [];
gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.ToggleContext.GDObjectObjects2= [];

gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.ToggleContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.ToggleContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.ToggleContext.eventsList0x5b7438 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.ToggleContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));
{for(var i = 0, len = gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.ToggleContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.ToggleContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.ToggleContext.GDObjectObjects1[i].getVariables().get("Active")).setNumber(1 - (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.ToggleContext.GDObjectObjects1[i].getVariables().get("Active"))));
}
}}

}


}; //End of gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.ToggleContext.eventsList0x5b7438


gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.Toggle = function(parentEventsFunctionContext) {
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

gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.ToggleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.ToggleContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.ToggleContext.eventsList0x5b7438(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.IsActiveContext = {};
gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.IsActiveContext.GDObjectObjects1= [];
gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.IsActiveContext.GDObjectObjects2= [];

gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.IsActiveContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.IsActiveContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.IsActiveContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.IsActiveContext.eventsList0x5b7438 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.IsActiveContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.IsActiveContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.IsActiveContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.IsActiveContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.IsActiveContext.GDObjectObjects1[i].getVariables().get("Active")) != 0 ) {
        gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.IsActiveContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.IsActiveContext.GDObjectObjects1[k] = gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.IsActiveContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.IsActiveContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.IsActiveContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


}; //End of gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.IsActiveContext.eventsList0x5b7438


gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.IsActive = function(parentEventsFunctionContext) {
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

gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.IsActiveContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.IsActiveContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Core__ActiveObject.ActiveObject.prototype.IsActiveContext.eventsList0x5b7438(runtimeScene, eventsFunctionContext);
return !!eventsFunctionContext.returnValue;
}


// Methods:

