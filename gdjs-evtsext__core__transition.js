
gdjs.evtsExt__Core__Transition = gdjs.evtsExt__Core__Transition || {};

/**
 * Behavior generated from 
 * @class Transition
 * @extends gdjs.RuntimeBehavior
 * @constructor
 */
gdjs.evtsExt__Core__Transition.Transition = function(runtimeScene, behaviorData, owner)
{
    gdjs.RuntimeBehavior.call(this, runtimeScene, behaviorData, owner);
    this._runtimeScene = runtimeScene;

    this._behaviorData = {};
    
    this._behaviorData.Type = "";
    this._behaviorData.Duration = Number("") || 0;
    this._behaviorData.Finished = false;
};

gdjs.evtsExt__Core__Transition.Transition.prototype = Object.create( gdjs.RuntimeBehavior.prototype );
gdjs.registerBehavior("Core::Transition", gdjs.evtsExt__Core__Transition.Transition);

// Properties:
gdjs.evtsExt__Core__Transition.Transition.prototype.onActivateContext = {};
gdjs.evtsExt__Core__Transition.Transition.prototype.onActivateContext.GDObjectObjects1= [];
gdjs.evtsExt__Core__Transition.Transition.prototype.onActivateContext.GDObjectObjects2= [];

gdjs.evtsExt__Core__Transition.Transition.prototype.onActivateContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Core__Transition.Transition.prototype.onActivateContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Core__Transition.Transition.prototype.onActivateContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__Core__Transition.Transition.prototype.onActivateContext.eventsList0x5b7c78 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.evtsExt__Core__Transition.Transition.prototype.onActivateContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));
{for(var i = 0, len = gdjs.evtsExt__Core__Transition.Transition.prototype.onActivateContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Core__Transition.Transition.prototype.onActivateContext.GDObjectObjects1[i].hide(false);
}
}}

}


{

gdjs.evtsExt__Core__Transition.Transition.prototype.onActivateContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__Core__Transition.Transition.prototype.onActivateContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Core__Transition.Transition.prototype.onActivateContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Core__Transition.Transition.prototype.onActivateContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getType() == "FadeIn" ) {
        gdjs.evtsExt__Core__Transition.Transition.prototype.onActivateContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Core__Transition.Transition.prototype.onActivateContext.GDObjectObjects1[k] = gdjs.evtsExt__Core__Transition.Transition.prototype.onActivateContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Core__Transition.Transition.prototype.onActivateContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Core__Transition.Transition.prototype.onActivateContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Core__Transition.Transition.prototype.onActivateContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Core__Transition.Transition.prototype.onActivateContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Core__Transition.Transition.prototype.onActivateContext.GDObjectObjects1[i].setOpacity(0);
}
}}

}


{

gdjs.evtsExt__Core__Transition.Transition.prototype.onActivateContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__Core__Transition.Transition.prototype.onActivateContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Core__Transition.Transition.prototype.onActivateContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Core__Transition.Transition.prototype.onActivateContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getType() == "FadeOut" ) {
        gdjs.evtsExt__Core__Transition.Transition.prototype.onActivateContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Core__Transition.Transition.prototype.onActivateContext.GDObjectObjects1[k] = gdjs.evtsExt__Core__Transition.Transition.prototype.onActivateContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Core__Transition.Transition.prototype.onActivateContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Core__Transition.Transition.prototype.onActivateContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Core__Transition.Transition.prototype.onActivateContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Core__Transition.Transition.prototype.onActivateContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Core__Transition.Transition.prototype.onActivateContext.GDObjectObjects1[i].setOpacity(255);
}
}}

}


}; //End of gdjs.evtsExt__Core__Transition.Transition.prototype.onActivateContext.eventsList0x5b7c78


gdjs.evtsExt__Core__Transition.Transition.prototype.onActivate = function(parentEventsFunctionContext) {
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

gdjs.evtsExt__Core__Transition.Transition.prototype.onActivateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Core__Transition.Transition.prototype.onActivateContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Core__Transition.Transition.prototype.onActivateContext.eventsList0x5b7c78(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__Core__Transition.Transition.prototype.onDeActivateContext = {};
gdjs.evtsExt__Core__Transition.Transition.prototype.onDeActivateContext.GDObjectObjects1= [];
gdjs.evtsExt__Core__Transition.Transition.prototype.onDeActivateContext.GDObjectObjects2= [];

gdjs.evtsExt__Core__Transition.Transition.prototype.onDeActivateContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Core__Transition.Transition.prototype.onDeActivateContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Core__Transition.Transition.prototype.onDeActivateContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__Core__Transition.Transition.prototype.onDeActivateContext.eventsList0x5b7c78 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.evtsExt__Core__Transition.Transition.prototype.onDeActivateContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));
{for(var i = 0, len = gdjs.evtsExt__Core__Transition.Transition.prototype.onDeActivateContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Core__Transition.Transition.prototype.onDeActivateContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setFinished(false);
}
}}

}


{

gdjs.evtsExt__Core__Transition.Transition.prototype.onDeActivateContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__Core__Transition.Transition.prototype.onDeActivateContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Core__Transition.Transition.prototype.onDeActivateContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Core__Transition.Transition.prototype.onDeActivateContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getType() == "FadeOut" ) {
        gdjs.evtsExt__Core__Transition.Transition.prototype.onDeActivateContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Core__Transition.Transition.prototype.onDeActivateContext.GDObjectObjects1[k] = gdjs.evtsExt__Core__Transition.Transition.prototype.onDeActivateContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Core__Transition.Transition.prototype.onDeActivateContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Core__Transition.Transition.prototype.onDeActivateContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Core__Transition.Transition.prototype.onDeActivateContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Core__Transition.Transition.prototype.onDeActivateContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Core__Transition.Transition.prototype.onDeActivateContext.GDObjectObjects1[i].hide();
}
}}

}


}; //End of gdjs.evtsExt__Core__Transition.Transition.prototype.onDeActivateContext.eventsList0x5b7c78


gdjs.evtsExt__Core__Transition.Transition.prototype.onDeActivate = function(parentEventsFunctionContext) {
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

gdjs.evtsExt__Core__Transition.Transition.prototype.onDeActivateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Core__Transition.Transition.prototype.onDeActivateContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Core__Transition.Transition.prototype.onDeActivateContext.eventsList0x5b7c78(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__Core__Transition.Transition.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__Core__Transition.Transition.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__Core__Transition.Transition.prototype.doStepPostEventsContext.GDObjectObjects2= [];

gdjs.evtsExt__Core__Transition.Transition.prototype.doStepPostEventsContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Core__Transition.Transition.prototype.doStepPostEventsContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Core__Transition.Transition.prototype.doStepPostEventsContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__Core__Transition.Transition.prototype.doStepPostEventsContext.eventsList0xf0c3b4 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__Core__Transition.Transition.prototype.doStepPostEventsContext.GDObjectObjects1 */

gdjs.evtsExt__Core__Transition.Transition.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Core__Transition.Transition.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Core__Transition.Transition.prototype.doStepPostEventsContext.GDObjectObjects1[i].getOpacity() >= 255 ) {
        gdjs.evtsExt__Core__Transition.Transition.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Core__Transition.Transition.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Core__Transition.Transition.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Core__Transition.Transition.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Core__Transition.Transition.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Core__Transition.Transition.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Core__Transition.Transition.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Core__Transition.Transition.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setFinished(true);
}
}}

}


}; //End of gdjs.evtsExt__Core__Transition.Transition.prototype.doStepPostEventsContext.eventsList0xf0c3b4
gdjs.evtsExt__Core__Transition.Transition.prototype.doStepPostEventsContext.eventsList0xef3e64 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__Core__Transition.Transition.prototype.doStepPostEventsContext.GDObjectObjects1 */

gdjs.evtsExt__Core__Transition.Transition.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Core__Transition.Transition.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Core__Transition.Transition.prototype.doStepPostEventsContext.GDObjectObjects1[i].getOpacity() <= 0 ) {
        gdjs.evtsExt__Core__Transition.Transition.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Core__Transition.Transition.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Core__Transition.Transition.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Core__Transition.Transition.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Core__Transition.Transition.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Core__Transition.Transition.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Core__Transition.Transition.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Core__Transition.Transition.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setFinished(true);
}
}}

}


}; //End of gdjs.evtsExt__Core__Transition.Transition.prototype.doStepPostEventsContext.eventsList0xef3e64
gdjs.evtsExt__Core__Transition.Transition.prototype.doStepPostEventsContext.eventsList0x5b7c78 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__Core__Transition.Transition.prototype.doStepPostEventsContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__Core__Transition.Transition.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Core__Transition.Transition.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Core__Transition.Transition.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getType() == "FadeIn" ) {
        gdjs.evtsExt__Core__Transition.Transition.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Core__Transition.Transition.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Core__Transition.Transition.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Core__Transition.Transition.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Core__Transition.Transition.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Core__Transition.Transition.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Core__Transition.Transition.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Core__Transition.Transition.prototype.doStepPostEventsContext.GDObjectObjects1[i].setOpacity(gdjs.evtsExt__Core__Transition.Transition.prototype.doStepPostEventsContext.GDObjectObjects1[i].getOpacity() + (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 255 / (gdjs.evtsExt__Core__Transition.Transition.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDuration())));
}
}
{ //Subevents
gdjs.evtsExt__Core__Transition.Transition.prototype.doStepPostEventsContext.eventsList0xf0c3b4(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.evtsExt__Core__Transition.Transition.prototype.doStepPostEventsContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__Core__Transition.Transition.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Core__Transition.Transition.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Core__Transition.Transition.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getType() == "FadeOut" ) {
        gdjs.evtsExt__Core__Transition.Transition.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Core__Transition.Transition.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Core__Transition.Transition.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Core__Transition.Transition.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Core__Transition.Transition.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Core__Transition.Transition.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Core__Transition.Transition.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Core__Transition.Transition.prototype.doStepPostEventsContext.GDObjectObjects1[i].setOpacity(gdjs.evtsExt__Core__Transition.Transition.prototype.doStepPostEventsContext.GDObjectObjects1[i].getOpacity() - (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 255 / (gdjs.evtsExt__Core__Transition.Transition.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDuration())));
}
}
{ //Subevents
gdjs.evtsExt__Core__Transition.Transition.prototype.doStepPostEventsContext.eventsList0xef3e64(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


}; //End of gdjs.evtsExt__Core__Transition.Transition.prototype.doStepPostEventsContext.eventsList0x5b7c78


gdjs.evtsExt__Core__Transition.Transition.prototype.doStepPostEvents = function(parentEventsFunctionContext) {
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

gdjs.evtsExt__Core__Transition.Transition.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Core__Transition.Transition.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Core__Transition.Transition.prototype.doStepPostEventsContext.eventsList0x5b7c78(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__Core__Transition.Transition.prototype.ChangeTransitionContext = {};
gdjs.evtsExt__Core__Transition.Transition.prototype.ChangeTransitionContext.GDObjectObjects1= [];
gdjs.evtsExt__Core__Transition.Transition.prototype.ChangeTransitionContext.GDObjectObjects2= [];

gdjs.evtsExt__Core__Transition.Transition.prototype.ChangeTransitionContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Core__Transition.Transition.prototype.ChangeTransitionContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Core__Transition.Transition.prototype.ChangeTransitionContext.eventsList0x5b7c78 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.evtsExt__Core__Transition.Transition.prototype.ChangeTransitionContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));
{for(var i = 0, len = gdjs.evtsExt__Core__Transition.Transition.prototype.ChangeTransitionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Core__Transition.Transition.prototype.ChangeTransitionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setType((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Type") : ""));
}
}{for(var i = 0, len = gdjs.evtsExt__Core__Transition.Transition.prototype.ChangeTransitionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Core__Transition.Transition.prototype.ChangeTransitionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDuration((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Duration")) || 0 : 0));
}
}}

}


}; //End of gdjs.evtsExt__Core__Transition.Transition.prototype.ChangeTransitionContext.eventsList0x5b7c78


gdjs.evtsExt__Core__Transition.Transition.prototype.ChangeTransition = function(Type, Duration, parentEventsFunctionContext) {
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
if (argName === "Type") return Type;
if (argName === "Duration") return Duration;
    return "";
  }
};

gdjs.evtsExt__Core__Transition.Transition.prototype.ChangeTransitionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Core__Transition.Transition.prototype.ChangeTransitionContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Core__Transition.Transition.prototype.ChangeTransitionContext.eventsList0x5b7c78(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__Core__Transition.Transition.prototype.IsFinishedContext = {};
gdjs.evtsExt__Core__Transition.Transition.prototype.IsFinishedContext.GDObjectObjects1= [];
gdjs.evtsExt__Core__Transition.Transition.prototype.IsFinishedContext.GDObjectObjects2= [];

gdjs.evtsExt__Core__Transition.Transition.prototype.IsFinishedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Core__Transition.Transition.prototype.IsFinishedContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Core__Transition.Transition.prototype.IsFinishedContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__Core__Transition.Transition.prototype.IsFinishedContext.eventsList0x5b7c78 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__Core__Transition.Transition.prototype.IsFinishedContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__Core__Transition.Transition.prototype.IsFinishedContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Core__Transition.Transition.prototype.IsFinishedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Core__Transition.Transition.prototype.IsFinishedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFinished() ) {
        gdjs.evtsExt__Core__Transition.Transition.prototype.IsFinishedContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Core__Transition.Transition.prototype.IsFinishedContext.GDObjectObjects1[k] = gdjs.evtsExt__Core__Transition.Transition.prototype.IsFinishedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Core__Transition.Transition.prototype.IsFinishedContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Core__Transition.Transition.prototype.IsFinishedContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


}; //End of gdjs.evtsExt__Core__Transition.Transition.prototype.IsFinishedContext.eventsList0x5b7c78


gdjs.evtsExt__Core__Transition.Transition.prototype.IsFinished = function(parentEventsFunctionContext) {
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

gdjs.evtsExt__Core__Transition.Transition.prototype.IsFinishedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Core__Transition.Transition.prototype.IsFinishedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Core__Transition.Transition.prototype.IsFinishedContext.eventsList0x5b7c78(runtimeScene, eventsFunctionContext);
return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__Core__Transition.Transition.prototype.GetDurationContext = {};
gdjs.evtsExt__Core__Transition.Transition.prototype.GetDurationContext.GDObjectObjects1= [];
gdjs.evtsExt__Core__Transition.Transition.prototype.GetDurationContext.GDObjectObjects2= [];

gdjs.evtsExt__Core__Transition.Transition.prototype.GetDurationContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Core__Transition.Transition.prototype.GetDurationContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Core__Transition.Transition.prototype.GetDurationContext.eventsList0x5b7c78 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.evtsExt__Core__Transition.Transition.prototype.GetDurationContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__Core__Transition.Transition.prototype.GetDurationContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Core__Transition.Transition.prototype.GetDurationContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDuration()); }}}

}


}; //End of gdjs.evtsExt__Core__Transition.Transition.prototype.GetDurationContext.eventsList0x5b7c78


gdjs.evtsExt__Core__Transition.Transition.prototype.GetDuration = function(parentEventsFunctionContext) {
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

gdjs.evtsExt__Core__Transition.Transition.prototype.GetDurationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Core__Transition.Transition.prototype.GetDurationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Core__Transition.Transition.prototype.GetDurationContext.eventsList0x5b7c78(runtimeScene, eventsFunctionContext);
return Number(eventsFunctionContext.returnValue) || 0;
}


// Methods:

gdjs.evtsExt__Core__Transition.Transition.prototype._getType = function() {
    return this._behaviorData.Type !== undefined ? this._behaviorData.Type : "";
};
gdjs.evtsExt__Core__Transition.Transition.prototype._setType = function(newValue) {
    this._behaviorData.Type = newValue;
};
gdjs.evtsExt__Core__Transition.Transition.prototype._getDuration = function() {
    return this._behaviorData.Duration !== undefined ? this._behaviorData.Duration : Number("") || 0;
};
gdjs.evtsExt__Core__Transition.Transition.prototype._setDuration = function(newValue) {
    this._behaviorData.Duration = newValue;
};
gdjs.evtsExt__Core__Transition.Transition.prototype._getFinished = function() {
    return this._behaviorData.Finished !== undefined ? this._behaviorData.Finished : false;
};
gdjs.evtsExt__Core__Transition.Transition.prototype._setFinished = function(newValue) {
    this._behaviorData.Finished = newValue;
};
