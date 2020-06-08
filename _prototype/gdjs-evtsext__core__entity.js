
gdjs.evtsExt__Core__Entity = gdjs.evtsExt__Core__Entity || {};

/**
 * Behavior generated from Entity
 * @class Entity
 * @extends gdjs.RuntimeBehavior
 * @constructor
 */
gdjs.evtsExt__Core__Entity.Entity = function(runtimeScene, behaviorData, owner)
{
    gdjs.RuntimeBehavior.call(this, runtimeScene, behaviorData, owner);
    this._runtimeScene = runtimeScene;

    this._behaviorData = {};
    
    this._behaviorData.DyingAnimation = behaviorData.DyingAnimation !== undefined ? behaviorData.DyingAnimation : Number("0") || 0;
    this._behaviorData.RespawnAnimation = behaviorData.RespawnAnimation !== undefined ? behaviorData.RespawnAnimation : Number("0") || 0;
    this._behaviorData.DyingCooldown = behaviorData.DyingCooldown !== undefined ? behaviorData.DyingCooldown : Number("5") || 0;
    this._behaviorData.Dead = false;
    this._behaviorData.DeleteOnDeath = behaviorData.DeleteOnDeath !== undefined ? behaviorData.DeleteOnDeath : true;
    this._behaviorData.FloatOnDeath = behaviorData.FloatOnDeath !== undefined ? behaviorData.FloatOnDeath : false;
    this._behaviorData.DyingTimer = Number("0") || 0;
    this._behaviorData.RespawnCooldown = behaviorData.RespawnCooldown !== undefined ? behaviorData.RespawnCooldown : Number("5") || 0;
    this._behaviorData.RespawnTimer = Number("-1") || 0;
};

gdjs.evtsExt__Core__Entity.Entity.prototype = Object.create( gdjs.RuntimeBehavior.prototype );
gdjs.registerBehavior("Core::Entity", gdjs.evtsExt__Core__Entity.Entity);

// Properties:
gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.GDObjectObjects3= [];

gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.condition2IsTrue_0 = {val:false};


gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.eventsList0x7302ec = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.GDObjectObjects2.createFrom(gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.GDObjectObjects1);


gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFloatOnDeath() ) {
        gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;}if (gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.GDObjectObjects2[i].addForce(0, -(50), 0);
}
}}

}


{

/* Reuse gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.GDObjectObjects1 */

gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.GDObjectObjects1[i].getOpacity() <= 0 ) {
        gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.GDObjectObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


}; //End of gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.eventsList0x7302ec
gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.eventsList0x73015c = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.GDObjectObjects1 */

gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDeleteOnDeath() ) {
        gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDyingTimer() <= 0 ) {
        gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;}}
if (gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.GDObjectObjects1[i].setOpacity(gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.GDObjectObjects1[i].getOpacity() - (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 255));
}
}
{ //Subevents
gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.eventsList0x7302ec(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


}; //End of gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.eventsList0x73015c
gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.eventsList0x7309cc = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.GDObjectObjects1 */

gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRespawnTimer() <= 0 ) {
        gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.GDObjectObjects1[i].setColor(gdjs.evtsExt__Core__ColorLerp.func(runtimeScene, "127;127;127", "255;255;255", -((gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRespawnTimer())), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}{for(var i = 0, len = gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.GDObjectObjects1[i].setOpacity(gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.GDObjectObjects1[i].getOpacity() + (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 128));
}
}}

}


}; //End of gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.eventsList0x7309cc
gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.eventsList0x5b7088 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsDying((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDyingTimer(gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDyingTimer() - (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}
{ //Subevents
gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.eventsList0x73015c(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{

gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRespawnTimer() > -(1) ) {
        gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setRespawnTimer(gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRespawnTimer() - (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}
{ //Subevents
gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.eventsList0x7309cc(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


}; //End of gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.eventsList0x5b7088


gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEvents = function(parentEventsFunctionContext) {
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

gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.GDObjectObjects3.length = 0;

gdjs.evtsExt__Core__Entity.Entity.prototype.doStepPostEventsContext.eventsList0x5b7088(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__Core__Entity.Entity.prototype.KillContext = {};
gdjs.evtsExt__Core__Entity.Entity.prototype.KillContext.GDObjectObjects1= [];
gdjs.evtsExt__Core__Entity.Entity.prototype.KillContext.GDObjectObjects2= [];

gdjs.evtsExt__Core__Entity.Entity.prototype.KillContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Core__Entity.Entity.prototype.KillContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Core__Entity.Entity.prototype.KillContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__Core__Entity.Entity.prototype.KillContext.eventsList0x5b7088 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__Core__Entity.Entity.prototype.KillContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__Core__Entity.Entity.prototype.KillContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Core__Entity.Entity.prototype.KillContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Core__Entity.Entity.prototype.KillContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsDying((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        gdjs.evtsExt__Core__Entity.Entity.prototype.KillContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Core__Entity.Entity.prototype.KillContext.GDObjectObjects1[k] = gdjs.evtsExt__Core__Entity.Entity.prototype.KillContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Core__Entity.Entity.prototype.KillContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Core__Entity.Entity.prototype.KillContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Core__Entity.Entity.prototype.KillContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Core__Entity.Entity.prototype.KillContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Core__Entity.Entity.prototype.KillContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDyingTimer((gdjs.evtsExt__Core__Entity.Entity.prototype.KillContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDyingCooldown()));
}
}{for(var i = 0, len = gdjs.evtsExt__Core__Entity.Entity.prototype.KillContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Core__Entity.Entity.prototype.KillContext.GDObjectObjects1[i].setAnimation((gdjs.evtsExt__Core__Entity.Entity.prototype.KillContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDyingAnimation()));
}
}{for(var i = 0, len = gdjs.evtsExt__Core__Entity.Entity.prototype.KillContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Core__Entity.Entity.prototype.KillContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDead(true);
}
}}

}


}; //End of gdjs.evtsExt__Core__Entity.Entity.prototype.KillContext.eventsList0x5b7088


gdjs.evtsExt__Core__Entity.Entity.prototype.Kill = function(parentEventsFunctionContext) {
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

gdjs.evtsExt__Core__Entity.Entity.prototype.KillContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Core__Entity.Entity.prototype.KillContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Core__Entity.Entity.prototype.KillContext.eventsList0x5b7088(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__Core__Entity.Entity.prototype.RespawnContext = {};
gdjs.evtsExt__Core__Entity.Entity.prototype.RespawnContext.GDObjectObjects1= [];
gdjs.evtsExt__Core__Entity.Entity.prototype.RespawnContext.GDObjectObjects2= [];

gdjs.evtsExt__Core__Entity.Entity.prototype.RespawnContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Core__Entity.Entity.prototype.RespawnContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Core__Entity.Entity.prototype.RespawnContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__Core__Entity.Entity.prototype.RespawnContext.eventsList0x5b7088 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__Core__Entity.Entity.prototype.RespawnContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__Core__Entity.Entity.prototype.RespawnContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Core__Entity.Entity.prototype.RespawnContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Core__Entity.Entity.prototype.RespawnContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.evtsExt__Core__Entity.Entity.prototype.RespawnContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Core__Entity.Entity.prototype.RespawnContext.GDObjectObjects1[k] = gdjs.evtsExt__Core__Entity.Entity.prototype.RespawnContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Core__Entity.Entity.prototype.RespawnContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Core__Entity.Entity.prototype.RespawnContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Core__Entity.Entity.prototype.RespawnContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Core__Entity.Entity.prototype.RespawnContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Core__Entity.Entity.prototype.RespawnContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDead(false);
}
}{for(var i = 0, len = gdjs.evtsExt__Core__Entity.Entity.prototype.RespawnContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Core__Entity.Entity.prototype.RespawnContext.GDObjectObjects1[i].setAnimation((gdjs.evtsExt__Core__Entity.Entity.prototype.RespawnContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRespawnAnimation()));
}
}{for(var i = 0, len = gdjs.evtsExt__Core__Entity.Entity.prototype.RespawnContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Core__Entity.Entity.prototype.RespawnContext.GDObjectObjects1[i].setPosition((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("X")) || 0 : 0),(typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Y")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__Core__Entity.Entity.prototype.RespawnContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Core__Entity.Entity.prototype.RespawnContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).MakeInvulnerable((gdjs.evtsExt__Core__Entity.Entity.prototype.RespawnContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRespawnCooldown()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


}; //End of gdjs.evtsExt__Core__Entity.Entity.prototype.RespawnContext.eventsList0x5b7088


gdjs.evtsExt__Core__Entity.Entity.prototype.Respawn = function(X, Y, parentEventsFunctionContext) {
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
if (argName === "X") return X;
if (argName === "Y") return Y;
    return "";
  }
};

gdjs.evtsExt__Core__Entity.Entity.prototype.RespawnContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Core__Entity.Entity.prototype.RespawnContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Core__Entity.Entity.prototype.RespawnContext.eventsList0x5b7088(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__Core__Entity.Entity.prototype.IsDyingContext = {};
gdjs.evtsExt__Core__Entity.Entity.prototype.IsDyingContext.GDObjectObjects1= [];
gdjs.evtsExt__Core__Entity.Entity.prototype.IsDyingContext.GDObjectObjects2= [];

gdjs.evtsExt__Core__Entity.Entity.prototype.IsDyingContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Core__Entity.Entity.prototype.IsDyingContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Core__Entity.Entity.prototype.IsDyingContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__Core__Entity.Entity.prototype.IsDyingContext.eventsList0x5b7088 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__Core__Entity.Entity.prototype.IsDyingContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__Core__Entity.Entity.prototype.IsDyingContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Core__Entity.Entity.prototype.IsDyingContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Core__Entity.Entity.prototype.IsDyingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDead() ) {
        gdjs.evtsExt__Core__Entity.Entity.prototype.IsDyingContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Core__Entity.Entity.prototype.IsDyingContext.GDObjectObjects1[k] = gdjs.evtsExt__Core__Entity.Entity.prototype.IsDyingContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Core__Entity.Entity.prototype.IsDyingContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Core__Entity.Entity.prototype.IsDyingContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


}; //End of gdjs.evtsExt__Core__Entity.Entity.prototype.IsDyingContext.eventsList0x5b7088


gdjs.evtsExt__Core__Entity.Entity.prototype.IsDying = function(parentEventsFunctionContext) {
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

gdjs.evtsExt__Core__Entity.Entity.prototype.IsDyingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Core__Entity.Entity.prototype.IsDyingContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Core__Entity.Entity.prototype.IsDyingContext.eventsList0x5b7088(runtimeScene, eventsFunctionContext);
return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__Core__Entity.Entity.prototype.IsDeadContext = {};
gdjs.evtsExt__Core__Entity.Entity.prototype.IsDeadContext.GDObjectObjects1= [];
gdjs.evtsExt__Core__Entity.Entity.prototype.IsDeadContext.GDObjectObjects2= [];

gdjs.evtsExt__Core__Entity.Entity.prototype.IsDeadContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Core__Entity.Entity.prototype.IsDeadContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Core__Entity.Entity.prototype.IsDeadContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__Core__Entity.Entity.prototype.IsDeadContext.condition2IsTrue_0 = {val:false};


gdjs.evtsExt__Core__Entity.Entity.prototype.IsDeadContext.eventsList0x5b7088 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__Core__Entity.Entity.prototype.IsDeadContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__Core__Entity.Entity.prototype.IsDeadContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__Core__Entity.Entity.prototype.IsDeadContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Core__Entity.Entity.prototype.IsDeadContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Core__Entity.Entity.prototype.IsDeadContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsDying((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.evtsExt__Core__Entity.Entity.prototype.IsDeadContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Core__Entity.Entity.prototype.IsDeadContext.GDObjectObjects1[k] = gdjs.evtsExt__Core__Entity.Entity.prototype.IsDeadContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Core__Entity.Entity.prototype.IsDeadContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__Core__Entity.Entity.prototype.IsDeadContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Core__Entity.Entity.prototype.IsDeadContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Core__Entity.Entity.prototype.IsDeadContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDyingTimer() <= 0 ) {
        gdjs.evtsExt__Core__Entity.Entity.prototype.IsDeadContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__Core__Entity.Entity.prototype.IsDeadContext.GDObjectObjects1[k] = gdjs.evtsExt__Core__Entity.Entity.prototype.IsDeadContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Core__Entity.Entity.prototype.IsDeadContext.GDObjectObjects1.length = k;}}
if (gdjs.evtsExt__Core__Entity.Entity.prototype.IsDeadContext.condition1IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


}; //End of gdjs.evtsExt__Core__Entity.Entity.prototype.IsDeadContext.eventsList0x5b7088


gdjs.evtsExt__Core__Entity.Entity.prototype.IsDead = function(parentEventsFunctionContext) {
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

gdjs.evtsExt__Core__Entity.Entity.prototype.IsDeadContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Core__Entity.Entity.prototype.IsDeadContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Core__Entity.Entity.prototype.IsDeadContext.eventsList0x5b7088(runtimeScene, eventsFunctionContext);
return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__Core__Entity.Entity.prototype.IsVulnerableContext = {};
gdjs.evtsExt__Core__Entity.Entity.prototype.IsVulnerableContext.GDObjectObjects1= [];
gdjs.evtsExt__Core__Entity.Entity.prototype.IsVulnerableContext.GDObjectObjects2= [];

gdjs.evtsExt__Core__Entity.Entity.prototype.IsVulnerableContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Core__Entity.Entity.prototype.IsVulnerableContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Core__Entity.Entity.prototype.IsVulnerableContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__Core__Entity.Entity.prototype.IsVulnerableContext.condition2IsTrue_0 = {val:false};


gdjs.evtsExt__Core__Entity.Entity.prototype.IsVulnerableContext.eventsList0x5b7088 = function(runtimeScene, eventsFunctionContext) {

{


{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


{

gdjs.evtsExt__Core__Entity.Entity.prototype.IsVulnerableContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__Core__Entity.Entity.prototype.IsVulnerableContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__Core__Entity.Entity.prototype.IsVulnerableContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Core__Entity.Entity.prototype.IsVulnerableContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Core__Entity.Entity.prototype.IsVulnerableContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRespawnTimer() <= 0 ) {
        gdjs.evtsExt__Core__Entity.Entity.prototype.IsVulnerableContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Core__Entity.Entity.prototype.IsVulnerableContext.GDObjectObjects1[k] = gdjs.evtsExt__Core__Entity.Entity.prototype.IsVulnerableContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Core__Entity.Entity.prototype.IsVulnerableContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__Core__Entity.Entity.prototype.IsVulnerableContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Core__Entity.Entity.prototype.IsVulnerableContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Core__Entity.Entity.prototype.IsVulnerableContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsDying((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        gdjs.evtsExt__Core__Entity.Entity.prototype.IsVulnerableContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__Core__Entity.Entity.prototype.IsVulnerableContext.GDObjectObjects1[k] = gdjs.evtsExt__Core__Entity.Entity.prototype.IsVulnerableContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Core__Entity.Entity.prototype.IsVulnerableContext.GDObjectObjects1.length = k;}}
if (gdjs.evtsExt__Core__Entity.Entity.prototype.IsVulnerableContext.condition1IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


}; //End of gdjs.evtsExt__Core__Entity.Entity.prototype.IsVulnerableContext.eventsList0x5b7088


gdjs.evtsExt__Core__Entity.Entity.prototype.IsVulnerable = function(parentEventsFunctionContext) {
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

gdjs.evtsExt__Core__Entity.Entity.prototype.IsVulnerableContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Core__Entity.Entity.prototype.IsVulnerableContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Core__Entity.Entity.prototype.IsVulnerableContext.eventsList0x5b7088(runtimeScene, eventsFunctionContext);
return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__Core__Entity.Entity.prototype.MakeVulnerableContext = {};
gdjs.evtsExt__Core__Entity.Entity.prototype.MakeVulnerableContext.GDObjectObjects1= [];
gdjs.evtsExt__Core__Entity.Entity.prototype.MakeVulnerableContext.GDObjectObjects2= [];

gdjs.evtsExt__Core__Entity.Entity.prototype.MakeVulnerableContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Core__Entity.Entity.prototype.MakeVulnerableContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Core__Entity.Entity.prototype.MakeVulnerableContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__Core__Entity.Entity.prototype.MakeVulnerableContext.eventsList0x5b7088 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__Core__Entity.Entity.prototype.MakeVulnerableContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__Core__Entity.Entity.prototype.MakeVulnerableContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Core__Entity.Entity.prototype.MakeVulnerableContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Core__Entity.Entity.prototype.MakeVulnerableContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRespawnTimer() > 0 ) {
        gdjs.evtsExt__Core__Entity.Entity.prototype.MakeVulnerableContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Core__Entity.Entity.prototype.MakeVulnerableContext.GDObjectObjects1[k] = gdjs.evtsExt__Core__Entity.Entity.prototype.MakeVulnerableContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Core__Entity.Entity.prototype.MakeVulnerableContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Core__Entity.Entity.prototype.MakeVulnerableContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Core__Entity.Entity.prototype.MakeVulnerableContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Core__Entity.Entity.prototype.MakeVulnerableContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Core__Entity.Entity.prototype.MakeVulnerableContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setRespawnTimer(0);
}
}}

}


}; //End of gdjs.evtsExt__Core__Entity.Entity.prototype.MakeVulnerableContext.eventsList0x5b7088


gdjs.evtsExt__Core__Entity.Entity.prototype.MakeVulnerable = function(parentEventsFunctionContext) {
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

gdjs.evtsExt__Core__Entity.Entity.prototype.MakeVulnerableContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Core__Entity.Entity.prototype.MakeVulnerableContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Core__Entity.Entity.prototype.MakeVulnerableContext.eventsList0x5b7088(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__Core__Entity.Entity.prototype.MakeInvulnerableContext = {};
gdjs.evtsExt__Core__Entity.Entity.prototype.MakeInvulnerableContext.GDObjectObjects1= [];
gdjs.evtsExt__Core__Entity.Entity.prototype.MakeInvulnerableContext.GDObjectObjects2= [];

gdjs.evtsExt__Core__Entity.Entity.prototype.MakeInvulnerableContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Core__Entity.Entity.prototype.MakeInvulnerableContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Core__Entity.Entity.prototype.MakeInvulnerableContext.eventsList0x5b7088 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.evtsExt__Core__Entity.Entity.prototype.MakeInvulnerableContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));
{for(var i = 0, len = gdjs.evtsExt__Core__Entity.Entity.prototype.MakeInvulnerableContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Core__Entity.Entity.prototype.MakeInvulnerableContext.GDObjectObjects1[i].setColor("127;127;127");
}
}{for(var i = 0, len = gdjs.evtsExt__Core__Entity.Entity.prototype.MakeInvulnerableContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Core__Entity.Entity.prototype.MakeInvulnerableContext.GDObjectObjects1[i].setOpacity(127);
}
}{for(var i = 0, len = gdjs.evtsExt__Core__Entity.Entity.prototype.MakeInvulnerableContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Core__Entity.Entity.prototype.MakeInvulnerableContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setRespawnTimer((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Time")) || 0 : 0));
}
}}

}


}; //End of gdjs.evtsExt__Core__Entity.Entity.prototype.MakeInvulnerableContext.eventsList0x5b7088


gdjs.evtsExt__Core__Entity.Entity.prototype.MakeInvulnerable = function(Time, parentEventsFunctionContext) {
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
if (argName === "Time") return Time;
    return "";
  }
};

gdjs.evtsExt__Core__Entity.Entity.prototype.MakeInvulnerableContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Core__Entity.Entity.prototype.MakeInvulnerableContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Core__Entity.Entity.prototype.MakeInvulnerableContext.eventsList0x5b7088(runtimeScene, eventsFunctionContext);
return;
}


// Methods:

gdjs.evtsExt__Core__Entity.Entity.prototype._getDyingAnimation = function() {
    return this._behaviorData.DyingAnimation !== undefined ? this._behaviorData.DyingAnimation : Number("0") || 0;
};
gdjs.evtsExt__Core__Entity.Entity.prototype._setDyingAnimation = function(newValue) {
    this._behaviorData.DyingAnimation = newValue;
};
gdjs.evtsExt__Core__Entity.Entity.prototype._getRespawnAnimation = function() {
    return this._behaviorData.RespawnAnimation !== undefined ? this._behaviorData.RespawnAnimation : Number("0") || 0;
};
gdjs.evtsExt__Core__Entity.Entity.prototype._setRespawnAnimation = function(newValue) {
    this._behaviorData.RespawnAnimation = newValue;
};
gdjs.evtsExt__Core__Entity.Entity.prototype._getDyingCooldown = function() {
    return this._behaviorData.DyingCooldown !== undefined ? this._behaviorData.DyingCooldown : Number("5") || 0;
};
gdjs.evtsExt__Core__Entity.Entity.prototype._setDyingCooldown = function(newValue) {
    this._behaviorData.DyingCooldown = newValue;
};
gdjs.evtsExt__Core__Entity.Entity.prototype._getDead = function() {
    return this._behaviorData.Dead !== undefined ? this._behaviorData.Dead : false;
};
gdjs.evtsExt__Core__Entity.Entity.prototype._setDead = function(newValue) {
    this._behaviorData.Dead = newValue;
};
gdjs.evtsExt__Core__Entity.Entity.prototype._getDeleteOnDeath = function() {
    return this._behaviorData.DeleteOnDeath !== undefined ? this._behaviorData.DeleteOnDeath : true;
};
gdjs.evtsExt__Core__Entity.Entity.prototype._setDeleteOnDeath = function(newValue) {
    this._behaviorData.DeleteOnDeath = newValue;
};
gdjs.evtsExt__Core__Entity.Entity.prototype._getFloatOnDeath = function() {
    return this._behaviorData.FloatOnDeath !== undefined ? this._behaviorData.FloatOnDeath : false;
};
gdjs.evtsExt__Core__Entity.Entity.prototype._setFloatOnDeath = function(newValue) {
    this._behaviorData.FloatOnDeath = newValue;
};
gdjs.evtsExt__Core__Entity.Entity.prototype._getDyingTimer = function() {
    return this._behaviorData.DyingTimer !== undefined ? this._behaviorData.DyingTimer : Number("0") || 0;
};
gdjs.evtsExt__Core__Entity.Entity.prototype._setDyingTimer = function(newValue) {
    this._behaviorData.DyingTimer = newValue;
};
gdjs.evtsExt__Core__Entity.Entity.prototype._getRespawnCooldown = function() {
    return this._behaviorData.RespawnCooldown !== undefined ? this._behaviorData.RespawnCooldown : Number("5") || 0;
};
gdjs.evtsExt__Core__Entity.Entity.prototype._setRespawnCooldown = function(newValue) {
    this._behaviorData.RespawnCooldown = newValue;
};
gdjs.evtsExt__Core__Entity.Entity.prototype._getRespawnTimer = function() {
    return this._behaviorData.RespawnTimer !== undefined ? this._behaviorData.RespawnTimer : Number("-1") || 0;
};
gdjs.evtsExt__Core__Entity.Entity.prototype._setRespawnTimer = function(newValue) {
    this._behaviorData.RespawnTimer = newValue;
};
