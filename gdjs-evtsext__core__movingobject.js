
gdjs.evtsExt__Core__MovingObject = gdjs.evtsExt__Core__MovingObject || {};

/**
 * Behavior generated from Moving Object
 * @class MovingObject
 * @extends gdjs.RuntimeBehavior
 * @constructor
 */
gdjs.evtsExt__Core__MovingObject.MovingObject = function(runtimeScene, behaviorData, owner)
{
    gdjs.RuntimeBehavior.call(this, runtimeScene, behaviorData, owner);
    this._runtimeScene = runtimeScene;

    this._behaviorData = {};
    
    this._behaviorData.Flip = behaviorData.Flip !== undefined ? behaviorData.Flip : true;
};

gdjs.evtsExt__Core__MovingObject.MovingObject.prototype = Object.create( gdjs.RuntimeBehavior.prototype );
gdjs.registerBehavior("Core::MovingObject", gdjs.evtsExt__Core__MovingObject.MovingObject);

// Properties:
gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.onCreatedContext = {};
gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.onCreatedContext.GDObjectObjects2= [];

gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.onCreatedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.onCreatedContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.onCreatedContext.eventsList0x5b7c78 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.onCreatedContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));
{for(var i = 0, len = gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).ResetForce((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


}; //End of gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.onCreatedContext.eventsList0x5b7c78


gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.onCreated = function(parentEventsFunctionContext) {
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

gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.onCreatedContext.eventsList0x5b7c78(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.onActivateContext = {};
gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.onActivateContext.GDObjectObjects1= [];
gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.onActivateContext.GDObjectObjects2= [];

gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.onActivateContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.onActivateContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.onActivateContext.eventsList0x5b7c78 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.onActivateContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));
{for(var i = 0, len = gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.onActivateContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.onActivateContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).ResetForce((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


}; //End of gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.onActivateContext.eventsList0x5b7c78


gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.onActivate = function(parentEventsFunctionContext) {
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

gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.onActivateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.onActivateContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.onActivateContext.eventsList0x5b7c78(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.onDeActivateContext = {};
gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.onDeActivateContext.GDObjectObjects1= [];
gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.onDeActivateContext.GDObjectObjects2= [];

gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.onDeActivateContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.onDeActivateContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.onDeActivateContext.eventsList0x5b7c78 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.onDeActivateContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));
{for(var i = 0, len = gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.onDeActivateContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.onDeActivateContext.GDObjectObjects1[i].clearForces();
}
}}

}


}; //End of gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.onDeActivateContext.eventsList0x5b7c78


gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.onDeActivate = function(parentEventsFunctionContext) {
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

gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.onDeActivateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.onDeActivateContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.onDeActivateContext.eventsList0x5b7c78(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.SetDirectionContext = {};
gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.SetDirectionContext.GDObjectObjects1= [];
gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.SetDirectionContext.GDObjectObjects2= [];

gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.SetDirectionContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.SetDirectionContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.SetDirectionContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.SetDirectionContext.eventsList0x5b7c78 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.SetDirectionContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.SetDirectionContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.SetDirectionContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.SetDirectionContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.SetDirectionContext.GDObjectObjects1[i].getVariables().get("MovingObject").getChild("Direction")) != (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Direction")) || 0 : 0) ) {
        gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.SetDirectionContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.SetDirectionContext.GDObjectObjects1[k] = gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.SetDirectionContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.SetDirectionContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.SetDirectionContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.SetDirectionContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.SetDirectionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.SetDirectionContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.SetDirectionContext.GDObjectObjects1[i].getVariables().get("MovingObject").getChild("Direction")).setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Direction")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.SetDirectionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.SetDirectionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).ResetForce((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


}; //End of gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.SetDirectionContext.eventsList0x5b7c78


gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.SetDirection = function(Direction, parentEventsFunctionContext) {
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
if (argName === "Direction") return Direction;
    return "";
  }
};

gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.SetDirectionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.SetDirectionContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.SetDirectionContext.eventsList0x5b7c78(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext = {};
gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.GDObjectObjects1= [];
gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.GDObjectObjects2= [];

gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.eventsList0xee261c = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.GDObjectObjects1 */

gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFlip() ) {
        gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.GDObjectObjects1[k] = gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.GDObjectObjects1[i].flipX(false);
}
}}

}


}; //End of gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.eventsList0xee261c
gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.eventsList0xf00f04 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.GDObjectObjects1 */

gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFlip() ) {
        gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.GDObjectObjects1[k] = gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.GDObjectObjects1[i].flipX(true);
}
}}

}


}; //End of gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.eventsList0xf00f04
gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.eventsList0x5b7c78 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.GDObjectObjects1[i].getVariables().get("MovingObject").getChild("Direction")) == 0 ) {
        gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.GDObjectObjects1[k] = gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.GDObjectObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.GDObjectObjects1[i].addForce(0, -((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.GDObjectObjects1[i].getVariables().get("MovingObject").getChild("Speed")))) * 25, 1);
}
}}

}


{

gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.GDObjectObjects1[i].getVariables().get("MovingObject").getChild("Direction")) == 1 ) {
        gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.GDObjectObjects1[k] = gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.GDObjectObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.GDObjectObjects1[i].addForce((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.GDObjectObjects1[i].getVariables().get("MovingObject").getChild("Speed"))) * 50, 0, 1);
}
}
{ //Subevents
gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.eventsList0xee261c(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.GDObjectObjects1[i].getVariables().get("MovingObject").getChild("Direction")) == 2 ) {
        gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.GDObjectObjects1[k] = gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.GDObjectObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.GDObjectObjects1[i].addForce(0, (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.GDObjectObjects1[i].getVariables().get("MovingObject").getChild("Speed"))) * 25, 1);
}
}}

}


{

gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.GDObjectObjects1[i].getVariables().get("MovingObject").getChild("Direction")) == 3 ) {
        gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.GDObjectObjects1[k] = gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.GDObjectObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.GDObjectObjects1[i].addForce(-((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.GDObjectObjects1[i].getVariables().get("MovingObject").getChild("Speed")))) * 50, 0, 1);
}
}
{ //Subevents
gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.eventsList0xf00f04(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


}; //End of gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.eventsList0x5b7c78


gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForce = function(parentEventsFunctionContext) {
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

gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.ResetForceContext.eventsList0x5b7c78(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.SetSpeedContext = {};
gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.SetSpeedContext.GDObjectObjects1= [];
gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.SetSpeedContext.GDObjectObjects2= [];

gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.SetSpeedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.SetSpeedContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.SetSpeedContext.eventsList0x5b7c78 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.SetSpeedContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));
{for(var i = 0, len = gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.SetSpeedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.SetSpeedContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.SetSpeedContext.GDObjectObjects1[i].getVariables().get("MovingObject").getChild("Speed")).setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Speed")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.SetSpeedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.SetSpeedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).ResetForce((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


}; //End of gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.SetSpeedContext.eventsList0x5b7c78


gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.SetSpeed = function(Speed, parentEventsFunctionContext) {
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
if (argName === "Speed") return Speed;
    return "";
  }
};

gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.SetSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.SetSpeedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Core__MovingObject.MovingObject.prototype.SetSpeedContext.eventsList0x5b7c78(runtimeScene, eventsFunctionContext);
return;
}


// Methods:

gdjs.evtsExt__Core__MovingObject.MovingObject.prototype._getFlip = function() {
    return this._behaviorData.Flip !== undefined ? this._behaviorData.Flip : true;
};
gdjs.evtsExt__Core__MovingObject.MovingObject.prototype._setFlip = function(newValue) {
    this._behaviorData.Flip = newValue;
};
