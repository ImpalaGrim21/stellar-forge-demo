var mm=Object.defineProperty;var vu=s=>{throw TypeError(s)};var gm=(s,e,t)=>e in s?mm(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var O=(s,e,t)=>gm(s,typeof e!="symbol"?e+"":e,t),Ic=(s,e,t)=>e.has(s)||vu("Cannot "+t);var x=(s,e,t)=>(Ic(s,e,"read from private field"),t?t.call(s):e.get(s)),q=(s,e,t)=>e.has(s)?vu("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(s):e.set(s,t),X=(s,e,t,n)=>(Ic(s,e,"write to private field"),n?n.call(s,t):e.set(s,t),t),re=(s,e,t)=>(Ic(s,e,"access private method"),t);var _a=(s,e,t,n)=>({set _(i){X(s,e,i,t)},get _(){return x(s,e,n)}});(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const xu=`{
  "meta": {
    "schemaVersion": 1,
    "lastTuned": "2026-07-01",
    "author": "economy-designer"
  },
  "generators": [
    {
      "tier": 1,
      "slug": "mining-drone",
      "name": "Mining Drone",
      "epoch": 1,
      "baseCost": 10,
      "costMultiplier": 1.1,
      "baseOutput": 0.1,
      "enabled": true
    },
    {
      "tier": 2,
      "slug": "ore-refinery",
      "name": "Ore Refinery",
      "epoch": 1,
      "baseCost": 100,
      "costMultiplier": 1.1,
      "baseOutput": 0.5,
      "enabled": true
    },
    {
      "tier": 3,
      "slug": "component-factory",
      "name": "Component Factory",
      "epoch": 1,
      "baseCost": 1000,
      "costMultiplier": 1.11,
      "baseOutput": 4.0,
      "enabled": true
    },
    {
      "tier": 4,
      "slug": "fusion-reactor",
      "name": "Fusion Reactor",
      "epoch": 2,
      "baseCost": 10000,
      "costMultiplier": 1.12,
      "baseOutput": 20.0,
      "enabled": true
    },
    {
      "tier": 5,
      "slug": "orbital-shipyard",
      "name": "Orbital Shipyard",
      "epoch": 2,
      "baseCost": 100000,
      "costMultiplier": 1.13,
      "baseOutput": 100.0,
      "enabled": true
    },
    {
      "tier": 6,
      "slug": "trade-fleet",
      "name": "Trade Fleet",
      "epoch": 3,
      "baseCost": 1000000,
      "costMultiplier": 1.14,
      "baseOutput": 500.0,
      "enabled": true
    },
    {
      "tier": 7,
      "slug": "planetary-colony",
      "name": "Planetary Colony",
      "epoch": 3,
      "baseCost": 10000000,
      "costMultiplier": 1.15,
      "baseOutput": 2500.0,
      "enabled": true
    },
    {
      "tier": 8,
      "slug": "star-lifter",
      "name": "Star Lifter",
      "epoch": 3,
      "baseCost": 100000000,
      "costMultiplier": 1.16,
      "baseOutput": 12500.0,
      "enabled": true
    },
    {
      "tier": 9,
      "slug": "dyson-swarm",
      "name": "Dyson Swarm",
      "epoch": 3,
      "baseCost": 1000000000,
      "costMultiplier": 1.17,
      "baseOutput": 62500.0,
      "enabled": true
    }
  ],
  "upgrades": {
    "milestones": [
      {
        "ownedCount": 10,
        "productionMultiplier": 2.0
      },
      {
        "ownedCount": 25,
        "productionMultiplier": 2.0
      },
      {
        "ownedCount": 50,
        "productionMultiplier": 2.0
      },
      {
        "ownedCount": 100,
        "productionMultiplier": 2.0
      },
      {
        "ownedCount": 200,
        "productionMultiplier": 2.0
      }
    ],
    "managers": [
      {
        "unlockCost": 25,
        "prerequisiteOwnedCount": 25
      },
      {
        "unlockCost": 250,
        "prerequisiteOwnedCount": 25
      },
      {
        "unlockCost": 2500,
        "prerequisiteOwnedCount": 25
      },
      {
        "unlockCost": 25000,
        "prerequisiteOwnedCount": 25
      },
      {
        "unlockCost": 250000,
        "prerequisiteOwnedCount": 25
      }
    ],
    "automationReserveFraction": 1.0,
    "linearBoosts": []
  },
  "milestones": {
    "creditsScale": [
      {
        "threshold": "1e7",
        "name": "Asteroid Baron"
      },
      {
        "threshold": "1e8",
        "name": "Orbital Magnate"
      },
      {
        "threshold": "1e9",
        "name": "Planetary Mogul"
      },
      {
        "threshold": "1e10",
        "name": "System Tycoon"
      },
      {
        "threshold": "1e11",
        "name": "Sector Sovereign"
      },
      {
        "threshold": "1e12",
        "name": "Stellar Overlord"
      },
      {
        "threshold": "1e13",
        "name": "Cluster Potentate"
      },
      {
        "threshold": "1e15",
        "name": "Nebular Dominus"
      },
      {
        "threshold": "1e18",
        "name": "Galactic Emperor"
      },
      {
        "threshold": "1e21",
        "name": "Intergalactic Lord"
      },
      {
        "threshold": "1e24",
        "name": "Cosmic Forgemaster"
      }
    ]
  },
  "ascension": {
    "constant": 500,
    "creditsDivisor": 10000000000.0,
    "exponent": 0.5,
    "dmMultiplierPerPoint": 0.02,
    "upgrades": []
  },
  "offline": {
    "earningRate": 0.5,
    "baseCapHours": 4,
    "maxCapHours": 24,
    "boostMultiplier": 2.0
  },
  "save": {
    "autosaveIntervalMs": 15000,
    "clockSkewToleranceMs": 10000,
    "saveKey": "stellarforge.save"
  },
  "currencies": {
    "credits": {
      "startingBalance": 0,
      "tapAmount": 1,
      "tickRateMs": 100
    }
  },
  "dmTree": {
    "nodes": [
      {
        "id": "forge_t1",
        "branch": "forge",
        "tier": 1,
        "prereqs": [],
        "isCapstone": false,
        "effectType": "globalMultiplier",
        "baseCost": 2,
        "growth": 1.5,
        "maxLevel": 5,
        "effectParams": {
          "perLevelBonus": 0.1
        }
      },
      {
        "id": "forge_t2",
        "branch": "forge",
        "tier": 2,
        "prereqs": [
          "forge_t1"
        ],
        "isCapstone": false,
        "effectType": "tierBoost",
        "baseCost": 4,
        "growth": 1.5,
        "maxLevel": 5,
        "effectParams": {
          "perLevelBonus": 0.2,
          "targetTier": 1
        }
      },
      {
        "id": "forge_capstone",
        "branch": "forge",
        "tier": 3,
        "prereqs": [
          "forge_t2"
        ],
        "isCapstone": true,
        "effectType": "globalMultiplier",
        "baseCost": 25,
        "growth": 1.0,
        "maxLevel": 1,
        "effectParams": {
          "perLevelBonus": 0.5
        }
      },
      {
        "id": "continuum_t1",
        "branch": "continuum",
        "tier": 1,
        "prereqs": [],
        "isCapstone": false,
        "effectType": "offlineExtension",
        "baseCost": 2,
        "growth": 1.5,
        "maxLevel": 5,
        "effectParams": {
          "capHours": 4,
          "rateBonus": 0.05
        }
      },
      {
        "id": "continuum_t2",
        "branch": "continuum",
        "tier": 2,
        "prereqs": [
          "continuum_t1"
        ],
        "isCapstone": false,
        "effectType": "offlineExtension",
        "baseCost": 4,
        "growth": 1.5,
        "maxLevel": 5,
        "effectParams": {
          "capHours": 4,
          "rateBonus": 0.05
        }
      },
      {
        "id": "continuum_capstone",
        "branch": "continuum",
        "tier": 3,
        "prereqs": [
          "continuum_t2"
        ],
        "isCapstone": true,
        "effectType": "offlineExtension",
        "baseCost": 25,
        "growth": 1.0,
        "maxLevel": 1,
        "effectParams": {
          "capHours": 8,
          "rateBonus": 0.2
        }
      },
      {
        "id": "cortex_t1",
        "branch": "cortex",
        "tier": 1,
        "prereqs": [],
        "isCapstone": false,
        "effectType": "automationUnlock",
        "baseCost": 2,
        "growth": 1.0,
        "maxLevel": 1,
        "effectParams": {}
      },
      {
        "id": "cortex_t2",
        "branch": "cortex",
        "tier": 2,
        "prereqs": [
          "cortex_t1"
        ],
        "isCapstone": false,
        "effectType": "automationUnlock",
        "baseCost": 4,
        "growth": 1.0,
        "maxLevel": 1,
        "effectParams": {}
      },
      {
        "id": "cortex_capstone",
        "branch": "cortex",
        "tier": 3,
        "prereqs": [
          "cortex_t2"
        ],
        "isCapstone": true,
        "effectType": "automationUnlock",
        "baseCost": 25,
        "growth": 1.0,
        "maxLevel": 1,
        "effectParams": {
          "efficiencyBonus": 0.5
        }
      }
    ],
    "respec": {
      "enabled": true,
      "cost": 0,
      "refundNodes": false
    },
    "capstonePermanenceActive": false
  }
}
`,co=1;class Uh extends Error{constructor(e){super(e),this.name="ConfigParseError",Object.setPrototypeOf(this,Uh.prototype)}}class rt extends Error{constructor(e){super(e),this.name="ConfigValidationError",Object.setPrototypeOf(this,rt.prototype)}}class Oh extends Error{constructor(e){super(e),this.name="SchemaVersionError",Object.setPrototypeOf(this,Oh.prototype)}}function If(s,e=new WeakSet){if(s===null||typeof s!="object")return s;const t=s;if(e.has(t))return s;e.add(t);for(const n of Object.keys(t))If(t[n],e);return Object.freeze(s)}const _m={meta:{schemaVersion:co,lastTuned:"2026-06-25",author:"economy-designer"},generators:[{tier:1,slug:"mining-drone",name:"Mining Drone",epoch:1,baseCost:10,costMultiplier:1.1,baseOutput:.1,enabled:!0},{tier:2,slug:"ore-refinery",name:"Ore Refinery",epoch:1,baseCost:100,costMultiplier:1.1,baseOutput:.5,enabled:!0},{tier:3,slug:"component-factory",name:"Component Factory",epoch:1,baseCost:1e3,costMultiplier:1.11,baseOutput:4,enabled:!0},{tier:4,slug:"fusion-reactor",name:"Fusion Reactor",epoch:2,baseCost:1e4,costMultiplier:1.12,baseOutput:20,enabled:!0},{tier:5,slug:"orbital-shipyard",name:"Orbital Shipyard",epoch:2,baseCost:1e5,costMultiplier:1.13,baseOutput:100,enabled:!0},{tier:6,slug:"trade-fleet",name:"Trade Fleet",epoch:3,baseCost:1e6,costMultiplier:1.14,baseOutput:500,enabled:!1},{tier:7,slug:"planetary-colony",name:"Planetary Colony",epoch:3,baseCost:1e7,costMultiplier:1.15,baseOutput:2500,enabled:!1},{tier:8,slug:"star-lifter",name:"Star Lifter",epoch:3,baseCost:1e8,costMultiplier:1.16,baseOutput:12500,enabled:!1},{tier:9,slug:"dyson-swarm",name:"Dyson Swarm",epoch:3,baseCost:1e9,costMultiplier:1.17,baseOutput:62500,enabled:!1}],upgrades:{milestones:[{ownedCount:10,productionMultiplier:2},{ownedCount:25,productionMultiplier:2},{ownedCount:50,productionMultiplier:2},{ownedCount:100,productionMultiplier:2},{ownedCount:200,productionMultiplier:2}],managers:[{unlockCost:25,prerequisiteOwnedCount:25},{unlockCost:250,prerequisiteOwnedCount:25},{unlockCost:2500,prerequisiteOwnedCount:25},{unlockCost:25e3,prerequisiteOwnedCount:25},{unlockCost:25e4,prerequisiteOwnedCount:25}],automationReserveFraction:1,linearBoosts:[]},milestones:{creditsScale:[{threshold:"1e7",name:"Asteroid Baron"},{threshold:"1e8",name:"Orbital Magnate"},{threshold:"1e9",name:"Planetary Mogul"},{threshold:"1e10",name:"System Tycoon"},{threshold:"1e11",name:"Sector Sovereign"},{threshold:"1e12",name:"Stellar Overlord"},{threshold:"1e13",name:"Cluster Potentate"},{threshold:"1e15",name:"Nebular Dominus"},{threshold:"1e18",name:"Galactic Emperor"},{threshold:"1e21",name:"Intergalactic Lord"},{threshold:"1e24",name:"Cosmic Forgemaster"}]},ascension:{constant:500,creditsDivisor:1e10,exponent:.5,dmMultiplierPerPoint:.02,upgrades:[]},offline:{earningRate:.5,baseCapHours:4,maxCapHours:24,boostMultiplier:2},currencies:{credits:{startingBalance:0,tapAmount:1,tickRateMs:100}}};function Ka(s){return typeof s=="object"&&s!==null&&!Array.isArray(s)}function Sl(s,e){const t={};for(const n of Object.keys(s)){const i=s[n];if(!(n in e)){t[n]=Ka(i)?Sl(i,{}):structuredClone(i);continue}const r=e[n];Ka(i)&&Ka(r)?t[n]=Sl(i,r):t[n]=r}for(const n of Object.keys(e))n in t||(t[n]=e[n]);return t}function vm(s,e){const t=Sl(_m,s);return Ka(t.meta)&&(t.meta.schemaVersion=co),t}function xm(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Nc,Mu;function Mm(){return Mu||(Mu=1,Nc=function(s,e,t){if(s==null||e==null)return s;var n=String(s),i=typeof e=="number"?e:parseInt(e,10);if(isNaN(i)||!isFinite(i))return n;var r=n.length;if(r>=i)return n;var o=t==null?"":String(t);o===""&&(o=" ");for(var a=i-r;o.length<a;)o+=o;var c=o.length>a?o.substr(0,a):o;return n+c}),Nc}var Em=Mm();const Uc=xm(Em);var jn=9e15,va=(function(){for(var s=[],e=-323;e<=308;e++)s.push(+("1e"+e));return function(t){return s[t+323]}})(),ne=function(s){return s instanceof ts?s:new ts(s)},fn=function(s,e){return new ts().fromMantissaExponent(s,e)},ms=function(s,e){return new ts().fromMantissaExponent_noNormalize(s,e)};function Sm(s,e,t,n){var i=e.mul(t.pow(n));return ts.floor(s.div(i).mul(t.sub(1)).add(1).log10()/t.log10())}function ym(s,e,t,n){return e.mul(t.pow(n)).mul(ts.sub(1,t.pow(s))).div(ts.sub(1,t))}var ts=(function(){function s(e){this.mantissa=NaN,this.exponent=NaN,e===void 0?(this.m=0,this.e=0):e instanceof s?this.fromDecimal(e):typeof e=="number"?this.fromNumber(e):this.fromString(e)}return Object.defineProperty(s.prototype,"m",{get:function(){return this.mantissa},set:function(e){this.mantissa=e},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"e",{get:function(){return this.exponent},set:function(e){this.exponent=e},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"s",{get:function(){return this.sign()},set:function(e){if(e===0)return this.e=0,void(this.m=0);this.sgn()!==e&&(this.m=-this.m)},enumerable:!1,configurable:!0}),s.fromMantissaExponent=function(e,t){return new s().fromMantissaExponent(e,t)},s.fromMantissaExponent_noNormalize=function(e,t){return new s().fromMantissaExponent_noNormalize(e,t)},s.fromDecimal=function(e){return new s().fromDecimal(e)},s.fromNumber=function(e){return new s().fromNumber(e)},s.fromString=function(e){return new s().fromString(e)},s.fromValue=function(e){return new s().fromValue(e)},s.fromValue_noAlloc=function(e){return e instanceof s?e:new s(e)},s.abs=function(e){return ne(e).abs()},s.neg=function(e){return ne(e).neg()},s.negate=function(e){return ne(e).neg()},s.negated=function(e){return ne(e).neg()},s.sign=function(e){return ne(e).sign()},s.sgn=function(e){return ne(e).sign()},s.round=function(e){return ne(e).round()},s.floor=function(e){return ne(e).floor()},s.ceil=function(e){return ne(e).ceil()},s.trunc=function(e){return ne(e).trunc()},s.add=function(e,t){return ne(e).add(t)},s.plus=function(e,t){return ne(e).add(t)},s.sub=function(e,t){return ne(e).sub(t)},s.subtract=function(e,t){return ne(e).sub(t)},s.minus=function(e,t){return ne(e).sub(t)},s.mul=function(e,t){return ne(e).mul(t)},s.multiply=function(e,t){return ne(e).mul(t)},s.times=function(e,t){return ne(e).mul(t)},s.div=function(e,t){return ne(e).div(t)},s.divide=function(e,t){return ne(e).div(t)},s.recip=function(e){return ne(e).recip()},s.reciprocal=function(e){return ne(e).recip()},s.reciprocate=function(e){return ne(e).reciprocate()},s.cmp=function(e,t){return ne(e).cmp(t)},s.compare=function(e,t){return ne(e).cmp(t)},s.eq=function(e,t){return ne(e).eq(t)},s.equals=function(e,t){return ne(e).eq(t)},s.neq=function(e,t){return ne(e).neq(t)},s.notEquals=function(e,t){return ne(e).notEquals(t)},s.lt=function(e,t){return ne(e).lt(t)},s.lte=function(e,t){return ne(e).lte(t)},s.gt=function(e,t){return ne(e).gt(t)},s.gte=function(e,t){return ne(e).gte(t)},s.max=function(e,t){return ne(e).max(t)},s.min=function(e,t){return ne(e).min(t)},s.clamp=function(e,t,n){return ne(e).clamp(t,n)},s.clampMin=function(e,t){return ne(e).clampMin(t)},s.clampMax=function(e,t){return ne(e).clampMax(t)},s.cmp_tolerance=function(e,t,n){return ne(e).cmp_tolerance(t,n)},s.compare_tolerance=function(e,t,n){return ne(e).cmp_tolerance(t,n)},s.eq_tolerance=function(e,t,n){return ne(e).eq_tolerance(t,n)},s.equals_tolerance=function(e,t,n){return ne(e).eq_tolerance(t,n)},s.neq_tolerance=function(e,t,n){return ne(e).neq_tolerance(t,n)},s.notEquals_tolerance=function(e,t,n){return ne(e).notEquals_tolerance(t,n)},s.lt_tolerance=function(e,t,n){return ne(e).lt_tolerance(t,n)},s.lte_tolerance=function(e,t,n){return ne(e).lte_tolerance(t,n)},s.gt_tolerance=function(e,t,n){return ne(e).gt_tolerance(t,n)},s.gte_tolerance=function(e,t,n){return ne(e).gte_tolerance(t,n)},s.log10=function(e){return ne(e).log10()},s.absLog10=function(e){return ne(e).absLog10()},s.pLog10=function(e){return ne(e).pLog10()},s.log=function(e,t){return ne(e).log(t)},s.log2=function(e){return ne(e).log2()},s.ln=function(e){return ne(e).ln()},s.logarithm=function(e,t){return ne(e).logarithm(t)},s.pow10=function(e){return Number.isInteger(e)?ms(1,e):fn(Math.pow(10,e%1),Math.trunc(e))},s.pow=function(e,t){return typeof e=="number"&&e===10&&typeof t=="number"&&Number.isInteger(t)?ms(1,t):ne(e).pow(t)},s.exp=function(e){return ne(e).exp()},s.sqr=function(e){return ne(e).sqr()},s.sqrt=function(e){return ne(e).sqrt()},s.cube=function(e){return ne(e).cube()},s.cbrt=function(e){return ne(e).cbrt()},s.dp=function(e){return ne(e).dp()},s.decimalPlaces=function(e){return ne(e).dp()},s.affordGeometricSeries=function(e,t,n,i){return Sm(ne(e),ne(t),ne(n),i)},s.sumGeometricSeries=function(e,t,n,i){return ym(e,ne(t),ne(n),i)},s.affordArithmeticSeries=function(e,t,n,i){return(function(r,o,a,c){var l=o.add(c.mul(a)).sub(a.div(2)),h=l.pow(2);return l.neg().add(h.add(a.mul(r).mul(2)).sqrt()).div(a).floor()})(ne(e),ne(t),ne(n),ne(i))},s.sumArithmeticSeries=function(e,t,n,i){return(function(r,o,a,c){var l=o.add(c.mul(a));return r.div(2).mul(l.mul(2).plus(r.sub(1).mul(a)))})(ne(e),ne(t),ne(n),ne(i))},s.efficiencyOfPurchase=function(e,t,n){return(function(i,r,o){return i.div(r).add(i.div(o))})(ne(e),ne(t),ne(n))},s.randomDecimalForTesting=function(e){if(20*Math.random()<1)return ms(0,0);var t=10*Math.random();10*Math.random()<1&&(t=Math.round(t)),t*=Math.sign(2*Math.random()-1);var n=Math.floor(Math.random()*e*2)-e;return fn(t,n)},s.prototype.normalize=function(){if(this.m>=1&&this.m<10)return this;if(this.m===0)return this.m=0,this.e=0,this;var e=Math.floor(Math.log10(Math.abs(this.m)));return this.m=e===-324?10*this.m/1e-323:this.m/va(e),this.e+=e,this},s.prototype.fromMantissaExponent=function(e,t){return isFinite(e)&&isFinite(t)?(this.m=e,this.e=t,this.normalize(),this):(e=Number.NaN,t=Number.NaN,this)},s.prototype.fromMantissaExponent_noNormalize=function(e,t){return this.m=e,this.e=t,this},s.prototype.fromDecimal=function(e){return this.m=e.m,this.e=e.e,this},s.prototype.fromNumber=function(e){return isNaN(e)?(this.m=Number.NaN,this.e=Number.NaN):e===Number.POSITIVE_INFINITY?(this.m=1,this.e=jn):e===Number.NEGATIVE_INFINITY?(this.m=-1,this.e=jn):e===0?(this.m=0,this.e=0):(this.e=Math.floor(Math.log10(Math.abs(e))),this.m=this.e===-324?10*e/1e-323:e/va(this.e),this.normalize()),this},s.prototype.fromString=function(e){if(e.indexOf("e")!==-1){var t=e.split("e");this.m=parseFloat(t[0]),this.e=parseFloat(t[1]),this.normalize()}else if(e==="NaN")this.m=Number.NaN,this.e=Number.NaN;else if(this.fromNumber(parseFloat(e)),isNaN(this.m))throw Error("[DecimalError] Invalid argument: "+e);return this},s.prototype.fromValue=function(e){return e instanceof s?this.fromDecimal(e):typeof e=="number"?this.fromNumber(e):typeof e=="string"?this.fromString(e):(this.m=0,this.e=0,this)},s.prototype.toNumber=function(){if(!isFinite(this.e))return Number.NaN;if(this.e>308)return this.m>0?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY;if(this.e<-324)return 0;if(this.e===-324)return this.m>0?5e-324:-5e-324;var e=this.m*va(this.e);if(!isFinite(e)||this.e<0)return e;var t=Math.round(e);return Math.abs(t-e)<1e-10?t:e},s.prototype.mantissaWithDecimalPlaces=function(e){if(isNaN(this.m)||isNaN(this.e))return Number.NaN;if(this.m===0)return 0;var t=e+1,n=Math.ceil(Math.log10(Math.abs(this.m))),i=Math.round(this.m*Math.pow(10,t-n))*Math.pow(10,n-t);return parseFloat(i.toFixed(Math.max(t-n,0)))},s.prototype.toString=function(){return isNaN(this.m)||isNaN(this.e)?"NaN":this.e>=jn?this.m>0?"Infinity":"-Infinity":this.e<=-jn||this.m===0?"0":this.e<21&&this.e>-7?this.toNumber().toString():this.m+"e"+(this.e>=0?"+":"")+this.e},s.prototype.toExponential=function(e){if(isNaN(this.m)||isNaN(this.e))return"NaN";if(this.e>=jn)return this.m>0?"Infinity":"-Infinity";if(this.e<=-jn||this.m===0)return"0"+(e>0?Uc(".",e+1,"0"):"")+"e+0";if(this.e>-324&&this.e<308)return this.toNumber().toExponential(e);isFinite(e)||(e=17);var t=e+1,n=Math.max(1,Math.ceil(Math.log10(Math.abs(this.m))));return(Math.round(this.m*Math.pow(10,t-n))*Math.pow(10,n-t)).toFixed(Math.max(t-n,0))+"e"+(this.e>=0?"+":"")+this.e},s.prototype.toFixed=function(e){return isNaN(this.m)||isNaN(this.e)?"NaN":this.e>=jn?this.m>0?"Infinity":"-Infinity":this.e<=-jn||this.m===0?"0"+(e>0?Uc(".",e+1,"0"):""):this.e>=17?this.m.toString().replace(".","").padEnd(this.e+1,"0")+(e>0?Uc(".",e+1,"0"):""):this.toNumber().toFixed(e)},s.prototype.toPrecision=function(e){return this.e<=-7?this.toExponential(e-1):e>this.e?this.toFixed(e-this.e-1):this.toExponential(e-1)},s.prototype.valueOf=function(){return this.toString()},s.prototype.toJSON=function(){return this.toString()},s.prototype.toStringWithDecimalPlaces=function(e){return this.toExponential(e)},s.prototype.abs=function(){return ms(Math.abs(this.m),this.e)},s.prototype.neg=function(){return ms(-this.m,this.e)},s.prototype.negate=function(){return this.neg()},s.prototype.negated=function(){return this.neg()},s.prototype.sign=function(){return Math.sign(this.m)},s.prototype.sgn=function(){return this.sign()},s.prototype.round=function(){return this.e<-1?new s(0):this.e<17?new s(Math.round(this.toNumber())):this},s.prototype.floor=function(){return this.e<-1?Math.sign(this.m)>=0?new s(0):new s(-1):this.e<17?new s(Math.floor(this.toNumber())):this},s.prototype.ceil=function(){return this.e<-1?Math.sign(this.m)>0?new s(1):new s(0):this.e<17?new s(Math.ceil(this.toNumber())):this},s.prototype.trunc=function(){return this.e<0?new s(0):this.e<17?new s(Math.trunc(this.toNumber())):this},s.prototype.add=function(e){var t,n,i=ne(e);if(this.m===0)return i;if(i.m===0)return this;if(this.e>=i.e?(t=this,n=i):(t=i,n=this),t.e-n.e>17)return t;var r=Math.round(1e14*t.m+1e14*n.m*va(n.e-t.e));return fn(r,t.e-14)},s.prototype.plus=function(e){return this.add(e)},s.prototype.sub=function(e){return this.add(ne(e).neg())},s.prototype.subtract=function(e){return this.sub(e)},s.prototype.minus=function(e){return this.sub(e)},s.prototype.mul=function(e){if(typeof e=="number")return e<1e307&&e>-1e307?fn(this.m*e,this.e):fn(1e-307*this.m*e,this.e+307);var t=typeof e=="string"?new s(e):e;return fn(this.m*t.m,this.e+t.e)},s.prototype.multiply=function(e){return this.mul(e)},s.prototype.times=function(e){return this.mul(e)},s.prototype.div=function(e){return this.mul(ne(e).recip())},s.prototype.divide=function(e){return this.div(e)},s.prototype.divideBy=function(e){return this.div(e)},s.prototype.dividedBy=function(e){return this.div(e)},s.prototype.recip=function(){return fn(1/this.m,-this.e)},s.prototype.reciprocal=function(){return this.recip()},s.prototype.reciprocate=function(){return this.recip()},s.prototype.cmp=function(e){var t=ne(e);if(this.m===0){if(t.m===0)return 0;if(t.m<0)return 1;if(t.m>0)return-1}if(t.m===0){if(this.m<0)return-1;if(this.m>0)return 1}if(this.m>0)return t.m<0||this.e>t.e?1:this.e<t.e?-1:this.m>t.m?1:this.m<t.m?-1:0;if(this.m<0)return t.m>0||this.e>t.e?-1:this.e<t.e||this.m>t.m?1:this.m<t.m?-1:0;throw Error("Unreachable code")},s.prototype.compare=function(e){return this.cmp(e)},s.prototype.eq=function(e){var t=ne(e);return this.e===t.e&&this.m===t.m},s.prototype.equals=function(e){return this.eq(e)},s.prototype.neq=function(e){return!this.eq(e)},s.prototype.notEquals=function(e){return this.neq(e)},s.prototype.lt=function(e){var t=ne(e);return this.m===0?t.m>0:t.m===0?this.m<=0:this.e===t.e?this.m<t.m:this.m>0?t.m>0&&this.e<t.e:t.m>0||this.e>t.e},s.prototype.lte=function(e){return!this.gt(e)},s.prototype.gt=function(e){var t=ne(e);return this.m===0?t.m<0:t.m===0?this.m>0:this.e===t.e?this.m>t.m:this.m>0?t.m<0||this.e>t.e:t.m<0&&this.e<t.e},s.prototype.gte=function(e){return!this.lt(e)},s.prototype.max=function(e){var t=ne(e);return this.lt(t)?t:this},s.prototype.min=function(e){var t=ne(e);return this.gt(t)?t:this},s.prototype.clamp=function(e,t){return this.max(e).min(t)},s.prototype.clampMin=function(e){return this.max(e)},s.prototype.clampMax=function(e){return this.min(e)},s.prototype.cmp_tolerance=function(e,t){var n=ne(e);return this.eq_tolerance(n,t)?0:this.cmp(n)},s.prototype.compare_tolerance=function(e,t){return this.cmp_tolerance(e,t)},s.prototype.eq_tolerance=function(e,t){var n=ne(e);return s.lte(this.sub(n).abs(),s.max(this.abs(),n.abs()).mul(t))},s.prototype.equals_tolerance=function(e,t){return this.eq_tolerance(e,t)},s.prototype.neq_tolerance=function(e,t){return!this.eq_tolerance(e,t)},s.prototype.notEquals_tolerance=function(e,t){return this.neq_tolerance(e,t)},s.prototype.lt_tolerance=function(e,t){var n=ne(e);return!this.eq_tolerance(n,t)&&this.lt(n)},s.prototype.lte_tolerance=function(e,t){var n=ne(e);return this.eq_tolerance(n,t)||this.lt(n)},s.prototype.gt_tolerance=function(e,t){var n=ne(e);return!this.eq_tolerance(n,t)&&this.gt(n)},s.prototype.gte_tolerance=function(e,t){var n=ne(e);return this.eq_tolerance(n,t)||this.gt(n)},s.prototype.log10=function(){return this.e+Math.log10(this.m)},s.prototype.absLog10=function(){return this.e+Math.log10(Math.abs(this.m))},s.prototype.pLog10=function(){return this.m<=0||this.e<0?0:this.log10()},s.prototype.log=function(e){return Math.LN10/Math.log(e)*this.log10()},s.prototype.log2=function(){return 3.321928094887362*this.log10()},s.prototype.ln=function(){return 2.302585092994045*this.log10()},s.prototype.logarithm=function(e){return this.log(e)},s.prototype.pow=function(e){var t,n=e instanceof s?e.toNumber():e,i=this.e*n;if(Number.isSafeInteger(i)&&(t=Math.pow(this.m,n),isFinite(t)&&t!==0))return fn(t,i);var r=Math.trunc(i),o=i-r;if(t=Math.pow(10,n*Math.log10(this.m)+o),isFinite(t)&&t!==0)return fn(t,r);var a=s.pow10(n*this.absLog10());return this.sign()===-1?Math.abs(n%2)===1?a.neg():Math.abs(n%2)===0?a:new s(Number.NaN):a},s.prototype.pow_base=function(e){return ne(e).pow(this)},s.prototype.factorial=function(){var e=this.toNumber()+1;return s.pow(e/Math.E*Math.sqrt(e*Math.sinh(1/e)+1/(810*Math.pow(e,6))),e).mul(Math.sqrt(2*Math.PI/e))},s.prototype.exp=function(){var e=this.toNumber();return-706<e&&e<709?s.fromNumber(Math.exp(e)):s.pow(Math.E,e)},s.prototype.sqr=function(){return fn(Math.pow(this.m,2),2*this.e)},s.prototype.sqrt=function(){return this.m<0?new s(Number.NaN):this.e%2!=0?fn(3.16227766016838*Math.sqrt(this.m),Math.floor(this.e/2)):fn(Math.sqrt(this.m),Math.floor(this.e/2))},s.prototype.cube=function(){return fn(Math.pow(this.m,3),3*this.e)},s.prototype.cbrt=function(){var e=1,t=this.m;t<0&&(e=-1,t=-t);var n=e*Math.pow(t,1/3),i=this.e%3;return fn(i===1||i===-1?2.154434690031883*n:i!==0?4.641588833612778*n:n,Math.floor(this.e/3))},s.prototype.sinh=function(){return this.exp().sub(this.negate().exp()).div(2)},s.prototype.cosh=function(){return this.exp().add(this.negate().exp()).div(2)},s.prototype.tanh=function(){return this.sinh().div(this.cosh())},s.prototype.asinh=function(){return s.ln(this.add(this.sqr().add(1).sqrt()))},s.prototype.acosh=function(){return s.ln(this.add(this.sqr().sub(1).sqrt()))},s.prototype.atanh=function(){return this.abs().gte(1)?Number.NaN:s.ln(this.add(1).div(new s(1).sub(this)))/2},s.prototype.ascensionPenalty=function(e){return e===0?this:this.pow(Math.pow(10,-e))},s.prototype.egg=function(){return this.add(9)},s.prototype.lessThanOrEqualTo=function(e){return this.cmp(e)<1},s.prototype.lessThan=function(e){return this.cmp(e)<0},s.prototype.greaterThanOrEqualTo=function(e){return this.cmp(e)>-1},s.prototype.greaterThan=function(e){return this.cmp(e)>0},s.prototype.decimalPlaces=function(){return this.dp()},s.prototype.dp=function(){if(!isFinite(this.mantissa))return NaN;if(this.exponent>=17)return 0;for(var e=this.mantissa,t=-this.exponent,n=1;Math.abs(Math.round(e*n)/n-e)>1e-10;)n*=10,t++;return t>0?t:0},Object.defineProperty(s,"MAX_VALUE",{get:function(){return bm},enumerable:!1,configurable:!0}),Object.defineProperty(s,"MIN_VALUE",{get:function(){return Tm},enumerable:!1,configurable:!0}),Object.defineProperty(s,"NUMBER_MAX_VALUE",{get:function(){return Am},enumerable:!1,configurable:!0}),Object.defineProperty(s,"NUMBER_MIN_VALUE",{get:function(){return wm},enumerable:!1,configurable:!0}),s})(),bm=ms(1,jn),Tm=ms(1,-jn),Am=ne(Number.MAX_VALUE),wm=ne(Number.MIN_VALUE);class tr extends Error{constructor(e){super(e),this.name="BigNumberError"}}const Rm=9e15;function gn(s){return isFinite(s.mantissa)&&!isNaN(s.mantissa)&&isFinite(s.exponent)&&!isNaN(s.exponent)&&s.exponent<Rm}function pt(s){if(s==null)throw new tr(`toBigNumber received ${s===null?"null":"undefined"} — currency values must never be nullish`);let e;try{e=new ts(s)}catch(t){const n=t instanceof Error?t.message:String(t);throw new tr(`toBigNumber failed to parse ${JSON.stringify(s)}: ${n}`)}if(!gn(e))throw new tr(`toBigNumber produced a non-finite value from ${JSON.stringify(s)} (NaN or ±Infinity)`);return e}const Ce=Object.freeze(pt(0)),Et=Object.freeze(pt(1)),Sc=Object.freeze(pt(10));function da(s,e){return e===.5?s.sqrt():s.pow(e)}function Wi(s){return s.toString()}function vo(s){return pt(s)}const Nf="> 0";function xo(s){return{path:s,min:Number.MIN_VALUE,max:1/0,rangeToken:Nf}}const Cm=[{path:"ascension.constant",min:50,max:500,rangeToken:"[50, 500]"},{path:"ascension.creditsDivisor",min:1e10,max:1e15,rangeToken:"[1e10, 1e15]"},{path:"ascension.exponent",min:.3,max:.7,rangeToken:"[0.3, 0.7]"},{path:"ascension.dmMultiplierPerPoint",min:.005,max:.1,rangeToken:"[0.005, 0.10]"},{path:"offline.earningRate",min:.1,max:1,rangeToken:"[0.1, 1.0]"},{path:"offline.baseCapHours",min:1,max:24,rangeToken:"[1, 24]"},{path:"offline.maxCapHours",min:4,max:72,rangeToken:"[4, 72]"},{path:"offline.boostMultiplier",min:1.5,max:3,rangeToken:"[1.5, 3.0]"},{path:"currencies.credits.startingBalance",min:0,max:100,rangeToken:"[0, 100]"},{path:"currencies.credits.tapAmount",min:.01,max:1e4,rangeToken:"[0.01, 10000]"},{path:"currencies.credits.tickRateMs",min:50,max:500,rangeToken:"[50, 500]"},{path:"upgrades.automationReserveFraction",min:0,max:2,rangeToken:"[0.0, 2.0]"}];function Lm(s){const e=t=>`generators[${s}].${t}`;return[{path:e("tier"),min:1,max:9,integer:!0,rangeToken:"[1, 9]"},{path:e("epoch"),min:1,max:3,integer:!0,rangeToken:"[1, 3]"},xo(e("baseCost")),{path:e("costMultiplier"),min:1.01,max:1.2,rangeToken:"[1.01, 1.20]"},xo(e("baseOutput")),{path:e("enabled"),kind:"boolean"}]}function Dm(s){const e=t=>`upgrades.milestones[${s}].${t}`;return[{path:e("ownedCount"),min:1,max:1e5,integer:!0,rangeToken:"[1, 100000]"},{path:e("productionMultiplier"),min:1.5,max:5,rangeToken:"[1.5, 5.0]"}]}function Pm(s){const e=t=>`upgrades.linearBoosts[${s}].${t}`;return[{path:e("id"),kind:"string"},{path:e("targetTier"),min:1,max:9,integer:!0,rangeToken:"[1, 9]"},{path:e("multiplier"),min:1.01,max:100,rangeToken:"[1.01, 100]"},xo(e("cost")),{path:e("prerequisiteOwnedCount"),min:0,max:200,integer:!0,rangeToken:"[0, 200]"}]}function Im(s){const e=t=>`upgrades.managers[${s}].${t}`;return[xo(e("unlockCost")),{path:e("prerequisiteOwnedCount"),min:1,max:200,integer:!0,rangeToken:"[1, 200]"}]}function Nm(s){const e=t=>`ascension.upgrades[${s}].${t}`;return[{path:e("id"),kind:"string"},xo(e("cost")),{path:e("maxLevel"),min:1,max:1/0,integer:!0,rangeToken:">= 1"}]}function Ot(s,e){const t=e.replace(/\[(\d+)\]/g,".$1").split(".");let n=s;for(const i of t){if(n==null||typeof n!="object")return;n=n[i]}return n}function ja(s,e){const t=Ot(s,e.path);if(t===void 0)throw new rt(`${e.path} is missing (required)`);if(typeof t!="number"||Number.isNaN(t))throw new rt(`${e.path} must be a number; received ${Ci(t)}`);if(e.integer&&!Number.isInteger(t))throw new rt(`${e.path} must be an integer; received ${String(t)}`);if(t<e.min||t>e.max){const n=e.rangeToken===Nf?`must be ${e.rangeToken}`:`must be in ${e.rangeToken}`;throw new rt(`${e.path} ${n}; received ${String(t)}`)}}function Um(s,e){const t=Ot(s,e.path);if(t===void 0)throw new rt(`${e.path} is missing (required)`);if(typeof t!="boolean")throw new rt(`${e.path} must be a boolean; received ${Ci(t)}`)}function Uf(s,e){const t=Ot(s,e.path);if(t===void 0)throw new rt(`${e.path} is missing (required)`);if(typeof t!="string")throw new rt(`${e.path} must be a non-empty string; received ${Ci(t)}`);if(t.trim().length===0)throw new rt(`${e.path} must be a non-empty string; received ""`)}function Ci(s){return s===null?"null":Array.isArray(s)?"array":typeof s=="object"?"object":String(s)}function Om(s){if(typeof s!="object"||s===null||Array.isArray(s))throw new rt(`economy config must be an object; received ${Ci(s)}`);for(const t of Cm)ja(s,t);Xr(s,"generators",Lm),Xr(s,"upgrades.milestones",Dm),Xr(s,"upgrades.linearBoosts",Pm),Eu(s,"upgrades.linearBoosts","id"),Xr(s,"upgrades.managers",Im),Xr(s,"ascension.upgrades",Nm),Eu(s,"ascension.upgrades","id"),zm(s);const e=Ot(s,"save");if(e!==void 0){if(typeof e!="object"||e===null||Array.isArray(e))throw new rt(`save must be an object; received ${Ci(e)}`);ja(s,{path:"save.autosaveIntervalMs",min:5e3,max:3e4,integer:!0,rangeToken:"[5000, 30000]"}),ja(s,{path:"save.clockSkewToleranceMs",min:0,max:6e4,integer:!0,rangeToken:"[0, 60000]"}),Uf(s,{path:"save.saveKey"})}}function Xr(s,e,t){const n=Ot(s,e);if(n===void 0)throw new rt(`${e} is missing (required)`);if(!Array.isArray(n))throw new rt(`${e} must be an array; received ${Ci(n)}`);for(let i=0;i<n.length;i++)for(const r of t(i))"kind"in r&&r.kind==="boolean"?Um(s,r):"kind"in r&&r.kind==="string"?Uf(s,r):ja(s,r)}function Eu(s,e,t){const n=Ot(s,e);if(!Array.isArray(n))return;const i=new Map;for(let r=0;r<n.length;r++){const o=Ot(s,`${e}[${r}].${t}`);if(typeof o!="string")continue;const a=i.get(o);if(a!==void 0)throw new rt(`${e}[${r}].${t} must be unique; ${JSON.stringify(o)} already used at index ${a}`);i.set(o,r)}}const Fm="1e6",Bm="1e27",Su=20;function km(s,e){try{return vo(s)}catch(t){throw t instanceof tr?new rt(`milestones.creditsScale[${e}].threshold is not a valid serialized BigNumber; received ${JSON.stringify(s)}`):t}}function zm(s){const e="milestones.creditsScale",t=Ot(s,e);if(t===void 0)throw new rt(`${e} is missing (required)`);if(!Array.isArray(t))throw new rt(`${e} must be an array; received ${Ci(t)}`);const n=vo(Fm),i=vo(Bm),r=new Map;let o;for(let a=0;a<t.length;a++){const c=f=>`${e}[${a}].${f}`,l=Ot(s,c("threshold")),h=Ot(s,c("name"));if(l===void 0)throw new rt(`${c("threshold")} is missing (required)`);if(typeof l!="string")throw new rt(`${c("threshold")} must be a serialized-BigNumber string; received ${Ci(l)}`);const u=km(l,a);if(!u.gte(n))throw new rt(`${c("threshold")} must be >= 1e6; received ${JSON.stringify(l)}`);if(o!==void 0&&!o.lt(u))throw new rt(`${c("threshold")} must be strictly greater than the previous threshold (creditsScale must be strictly ascending); received ${JSON.stringify(l)}`);if(o=u,h===void 0)throw new rt(`${c("name")} is missing (required)`);if(typeof h!="string")throw new rt(`${c("name")} must be a non-empty string; received ${Ci(h)}`);if(h.trim().length===0)throw new rt(`${c("name")} must be a non-empty string; received ""`);if(h.length>Su)throw new rt(`${c("name")} must be <= ${Su} characters; received ${h.length}`);const d=r.get(h);if(d!==void 0)throw new rt(`${c("name")} must be unique; ${JSON.stringify(h)} already used at index ${d}`);r.set(h,a)}if(o!==void 0&&!o.lte(i)){const a=t.length-1,c=Ot(s,`${e}[${a}].threshold`);throw new rt(`milestones.creditsScale[${a}].threshold (top of series) must be <= 1e27; received ${JSON.stringify(c)}`)}}const Gm=.5,Hm=2,yu=.01,Vm="[0.5, 2.0]";function Wm(s){const e=Ot(s,"offline.baseCapHours"),t=Ot(s,"offline.maxCapHours");if(typeof e=="number"&&typeof t=="number"&&e>t)throw new rt(`offline.baseCapHours (${e}) cannot exceed offline.maxCapHours (${t})`);const n=Ot(s,"upgrades.linearBoosts");if(Array.isArray(n))for(let i=0;i<n.length;i++)Ym(s,i)}function Xm(s,e){const t=Ot(s,"generators");if(Array.isArray(t)){for(const n of t)if(typeof n=="object"&&n!==null&&n.tier===e)return n}}function Ym(s,e){const t=g=>`upgrades.linearBoosts[${e}].${g}`,n=Ot(s,t("id")),i=Ot(s,t("targetTier")),r=Ot(s,t("cost")),o=Ot(s,t("prerequisiteOwnedCount"));if(typeof i!="number"||typeof r!="number"||typeof o!="number")return;const a=Xm(s,i),c=a==null?void 0:a.baseCost,l=a==null?void 0:a.costMultiplier;if(typeof c!="number"||typeof l!="number")return;const h=c*Math.pow(l,o);if(!Number.isFinite(h)||h<=0)return;const u=r/h,d=Gm*(1-yu),f=Hm*(1+yu);if(u<d||u>f){const g=typeof n=="string"?JSON.stringify(n):`index ${e}`;throw new rt(`upgrades.linearBoosts[${e}] (id ${g}) costFactor ${u.toFixed(2)} is outside the expected band ${Vm}`)}}function qm(s){const e=/position (\d+)/.exec(s);return e?Number(e[1]):0}function Of(s){let e;try{e=JSON.parse(s)}catch(i){const r=i instanceof Error?i.message:String(i),o=qm(r);throw new Uh(`economy.json is not valid JSON at position ${o}`)}const t=e==null?void 0:e.meta,n=typeof(t==null?void 0:t.schemaVersion)=="number"?t.schemaVersion:0;if(n>co)throw new Oh(`economy.json schema version ${n} is newer than supported version ${co}`);return n<co&&typeof e=="object"&&e!==null&&!Array.isArray(e)&&(e=vm(e)),Om(e),Wm(e),If(e)}function yl(s){return gn(s)?s.max(Et):Et}function $m(s,e){return{get:()=>s.get().mul(yl(e.getExtraGlobalMultiplier())).mul(yl(e.getAutomationEfficiencyBonus()))}}function Km(s,e){return{getBoostMultiplier:t=>s.getBoostMultiplier(t).mul(yl(e.getTierBoost(t)))}}const Ff=-1,ee={CREDITS_UPDATED:"CREDITS_UPDATED",PURCHASE_REJECTED:"PURCHASE_REJECTED",BUY_MODE_CHANGED:"BUY_MODE_CHANGED",GENERATOR_PURCHASED:"GENERATOR_PURCHASED",GENERATOR_RATE_CHANGED:"GENERATOR_RATE_CHANGED",GENERATORS_RESET_COMPLETE:"GENERATORS_RESET_COMPLETE",GENERATORS_RESTORED:"GENERATORS_RESTORED",BOOSTS_CHANGED:"BOOSTS_CHANGED",UPGRADE_PURCHASED:"UPGRADE_PURCHASED",UPGRADE_PURCHASE_REJECTED:"UPGRADE_PURCHASE_REJECTED",AUTOMATION_UNLOCKED:"AUTOMATION_UNLOCKED",UPGRADE_RESET:"UPGRADE_RESET",INTENT_AUTO_BUY_GENERATOR:"INTENT_AUTO_BUY_GENERATOR",INTENT_TAP_FORGE:"INTENT_TAP_FORGE",INTENT_BUY_GENERATOR:"INTENT_BUY_GENERATOR",INTENT_SET_BUY_MODE:"INTENT_SET_BUY_MODE",INTENT_CONFIRM_ASCENSION:"INTENT_CONFIRM_ASCENSION",INTENT_HOLD_PROGRESS:"INTENT_HOLD_PROGRESS",INTENT_DISMISS_MODAL:"INTENT_DISMISS_MODAL",INTENT_DISMISS_OVERLAY:"INTENT_DISMISS_OVERLAY",EPOCH_CHANGED:"EPOCH_CHANGED",SAVE_FAILED:"SAVE_FAILED",SAVE_LOAD_FAILED:"SAVE_LOAD_FAILED",SAVE_CONFLICT:"SAVE_CONFLICT",ASCENSION_STARTED:"ASCENSION_STARTED",ASCENSION_COMPLETE:"ASCENSION_COMPLETE",MILESTONE_REACHED:"MILESTONE_REACHED",CLOCK_GAP_DETECTED:"CLOCK_GAP_DETECTED",DARK_MATTER_UPDATED:"DARK_MATTER_UPDATED",DM_UPGRADE_PURCHASED:"DM_UPGRADE_PURCHASED",DM_TREE_CAPSTONE_SELECTED:"DM_TREE_CAPSTONE_SELECTED",OFFLINE_EARNINGS_APPLIED:"OFFLINE_EARNINGS_APPLIED"},jm=!1,Zm=50,Jm=20,Qm=!1;class bu extends Error{constructor(e,t){super(`[EventBus] Recursion depth ${t} exceeded (key chain: ${e})`),this.name="EventBusRecursionError"}}class eg{constructor(e={}){O(this,"_rethrowListenerErrors");O(this,"_maxDispatchDepth");O(this,"_listenerLeakWarn");O(this,"_freezePayloads");O(this,"_logger");O(this,"_listeners");O(this,"_depth",0);O(this,"_keyStack",[]);O(this,"_leakWarnedKeys",new Set);O(this,"_asyncWarnedKeys",new Set);this._rethrowListenerErrors=e.rethrowListenerErrors??jm,this._maxDispatchDepth=e.maxDispatchDepth??Zm,this._listenerLeakWarn=e.listenerLeakWarn??Jm,this._freezePayloads=e.freezePayloads??Qm,this._logger=e.logger,this._listeners=new Map}get config(){return{rethrowListenerErrors:this._rethrowListenerErrors,maxDispatchDepth:this._maxDispatchDepth,listenerLeakWarn:this._listenerLeakWarn,freezePayloads:this._freezePayloads,logger:this._logger}}on(e,t){var r,o;const n=this._listeners.get(e);n===void 0?this._listeners.set(e,[t]):n.includes(t)||n.push(t);const i=((r=this._listeners.get(e))==null?void 0:r.length)??0;return i>this._listenerLeakWarn&&!this._leakWarnedKeys.has(e)&&(this._leakWarnedKeys.add(e),(o=this._logger)==null||o.call(this,`[EventBus] Possible listener leak on "${String(e)}": ${i} listeners (threshold ${this._listenerLeakWarn}). A subscriber is likely missing its unsubscribe.`)),()=>{this.off(e,t)}}once(e,t){const n=i=>{this.off(e,n),t(i)};return this.on(e,n)}off(e,t){const n=this._listeners.get(e);if(n===void 0)return;const i=n.indexOf(t);i!==-1&&n.splice(i,1)}listenerCount(e){var t;return((t=this._listeners.get(e))==null?void 0:t.length)??0}emit(e,t){var n,i;this._depth+=1,this._keyStack.push(e);try{if(this._depth>this._maxDispatchDepth)throw new bu(this._keyStack.join("→"),this._depth);this._freezePayloads&&Object.freeze(t);const r=this._listeners.get(e);if(r===void 0)return;const o=r.slice();let a,c=!1;for(let l=0;l<o.length;l+=1){const h=o[l];try{const u=h(t);if(u!=null&&typeof u.then=="function"){const d=h.name===""?"<anon>":h.name,f=`${String(e)}:${d}`;this._asyncWarnedKeys.has(f)||(this._asyncWarnedKeys.add(f),(n=this._logger)==null||n.call(this,`[EventBus] async handler "${d}" on "${String(e)}" returned a Promise. Async handlers are not supported (GDD Rule 12) — the Promise is ignored. Make the handler synchronous.`))}}catch(u){if(u instanceof bu)throw u;const d=h.name===""?"anonymous":h.name;(i=this._logger)==null||i.call(this,`[EventBus] listener "${d}" threw while handling event "${String(e)}":`,u),this._rethrowListenerErrors&&!c&&(a=u,c=!0)}}if(c)throw a}finally{this._keyStack.pop(),this._depth-=1}}}const tg=1e3;class ng{constructor(e,t){O(this,"_config");O(this,"_tickRateMs");O(this,"_maxCatchupSteps");O(this,"_gapThresholdMs");O(this,"_dtSeconds");O(this,"_bus");O(this,"_consumers",[]);O(this,"_accumulator",0);O(this,"_isRunning",!0);const{tickRateMs:n,maxCatchupSteps:i,gapThresholdMs:r,liveBudgetCeilingMs:o}=e;if(!(n>=50&&n<=500))throw new Error(`GameClock: tickRateMs ${n} outside [50,500]`);if(!(i>=1&&i<=20))throw new Error(`GameClock: maxCatchupSteps ${i} outside [1,20]`);if(!(r>=2e3&&r<=5e3))throw new Error(`GameClock: gapThresholdMs ${r} outside [2000,5000]`);if(!Number.isFinite(o))throw new Error(`GameClock: liveBudgetCeilingMs ${o} must be a finite number`);if(r<=n*i)throw new Error(`GameClock: gapThresholdMs (${r}) must exceed tickRateMs*maxCatchupSteps (${n*i})`);if(n*i>o)throw new Error(`GameClock: tickRateMs*maxCatchupSteps (${n*i}) exceeds liveBudgetCeilingMs (${o})`);this._config={...e},this._tickRateMs=this._config.tickRateMs,this._maxCatchupSteps=this._config.maxCatchupSteps,this._gapThresholdMs=this._config.gapThresholdMs,this._dtSeconds=this._config.tickRateMs/tg,this._bus=t}register(e){return this._consumers.includes(e)||this._consumers.push(e),()=>{const t=this._consumers.indexOf(e);t!==-1&&this._consumers.splice(t,1)}}advance(e){if(!this._isRunning)return{steps:0,stallGapFired:!1};if(!Number.isFinite(e)||e<=0)return{steps:0,stallGapFired:!1};this._accumulator+=e;let t=0;const n=[...this._consumers];for(;this._accumulator>=this._tickRateMs&&t<this._maxCatchupSteps;){for(const r of n)r(this._dtSeconds);this._accumulator-=this._tickRateMs,t+=1}let i=!1;if(this._accumulator>this._gapThresholdMs){const r=this._accumulator-this._accumulator%this._tickRateMs;this._bus.emit(ee.CLOCK_GAP_DETECTED,{elapsedMs:r,source:"stall"}),this._accumulator=this._accumulator%this._tickRateMs,i=!0}return{steps:t,stallGapFired:i}}reportGap(e){!Number.isFinite(e)||e<=0||this._bus.emit(ee.CLOCK_GAP_DETECTED,{elapsedMs:e,source:"visibility"})}pause(){this._isRunning=!1}resume(){this._isRunning=!0}isRunning(){return this._isRunning}}const Ln=1,Mn=9;var Dt,Mi,Ao,wo,Yi,Ei,Ro,xc,Co,qt,Hi,Bf,ro;class ig{constructor(e,t,n){q(this,qt);q(this,Dt);q(this,Mi);q(this,Ao);q(this,wo);q(this,Yi);q(this,Ei);q(this,Ro);q(this,xc,({tier:e})=>{if(e===Ff){for(let t=Ln;t<=Mn;t+=1)this.isUnlocked(t)&&x(this,Dt)[t]>0&&re(this,qt,ro).call(this,t,x(this,Ei)[t]??Ce);return}!Number.isInteger(e)||e<Ln||e>Mn||this.isUnlocked(e)&&x(this,Dt)[e]>0&&re(this,qt,ro).call(this,e,x(this,Ei)[e]??Ce)});q(this,Co);X(this,Dt,new Array(Mn+1).fill(0)),X(this,Yi,t),X(this,Ei,new Array(Mn+1).fill(void 0));const i=new Array(Mn+1).fill(void 0);for(const a of e.generators)Number.isInteger(a.tier)&&a.tier>=Ln&&a.tier<=Mn&&(i[a.tier]=a);X(this,Mi,i),X(this,Ao,n),X(this,Co,e.upgrades.milestones.filter(a=>Number.isFinite(a.ownedCount)&&a.ownedCount>0&&Number.isFinite(a.productionMultiplier)&&a.productionMultiplier>0));let r=!1,o=!0;for(let a=Ln;a<=Mn;a+=1){const c=i[a];c!==void 0&&(r=!0,c.enabled&&(o=!1))}X(this,wo,r&&o),X(this,Ro,t.on(ee.BOOSTS_CHANGED,x(this,xc)))}getOwned(e){return re(this,qt,Hi).call(this,e,"getOwned"),x(this,Dt)[e]}isUnlocked(e){if(re(this,qt,Hi).call(this,e,"isUnlocked"),x(this,wo))return e===Ln?!0:x(this,Mi)[e]===void 0?!1:x(this,Dt)[e-1]>=1;const t=x(this,Mi)[e];return t===void 0||!t.enabled?!1:e===Ln?!0:x(this,Dt)[e-1]>=1}getCost(e,t=1){if(re(this,qt,Hi).call(this,e,"getCost"),!Number.isInteger(t)||t<1)return Ce;const n=x(this,Mi)[e];if(n===void 0)return Ce;const i=x(this,Dt)[e],r=n.costMultiplier,o=pt(n.baseCost).mul(pt(r).pow(i));return t===1?o:r===1?o.mul(t):o.mul(pt(r).pow(t).sub(Et).div(r-1))}getMaxAffordable(e,t){re(this,qt,Hi).call(this,e,"getMaxAffordable");const n=x(this,Mi)[e];if(n===void 0||!gn(t))return 0;const i=this.getCost(e,1);if(i.lte(Ce))return 0;const r=t.div(i);if(r.lte(Ce))return 0;const o=n.costMultiplier,a=r.toNumber();let c;if(o===1){if(!isFinite(a))return 0;c=Math.floor(a)}else isFinite(a)?c=Math.floor(Math.log(a*(o-1)+1)/Math.log(o)):c=Math.floor(r.mul(o-1).add(Et).log10()/Math.log10(o));if(!Number.isFinite(c)||c>=Number.MAX_SAFE_INTEGER)return 0;for(;this.getCost(e,c+1).lte(t);)c+=1;for(;c>0&&this.getCost(e,c).gt(t);)c-=1;return Math.max(0,c)}getMilestoneMultiplier(e){re(this,qt,Hi).call(this,e,"getMilestoneMultiplier");const t=x(this,Dt)[e];let n=Et;for(const i of x(this,Co))i.ownedCount<=t&&(n=n.mul(pt(i.productionMultiplier)));return n}getTierRate(e){if(re(this,qt,Hi).call(this,e,"getTierRate"),!this.isUnlocked(e))return Ce;const t=x(this,Dt)[e];if(t===0)return Ce;const n=x(this,Mi)[e];return n===void 0?Ce:pt(n.baseOutput).mul(t).mul(this.getMilestoneMultiplier(e)).mul(re(this,qt,Bf).call(this,e))}getTotalBaseRate(){let e=Ce;for(let t=Ln;t<=Mn;t+=1)e=e.add(this.getTierRate(t));return e}applyPurchase(e,t){if(re(this,qt,Hi).call(this,e,"applyPurchase"),!this.isUnlocked(e)||!Number.isInteger(t)||t<1)return;const n=x(this,Dt)[e],i=x(this,Ei)[e]??this.getTierRate(e);x(this,Dt)[e]+=t,x(this,Yi).emit(ee.GENERATOR_PURCHASED,{tier:e,previousOwned:n,owned:x(this,Dt)[e]}),re(this,qt,ro).call(this,e,i)}resetRun(){const e=[];for(let t=Ln;t<=Mn;t+=1)x(this,Dt)[t]>0&&e.push({tier:t,previousRate:this.getTierRate(t)});x(this,Dt).fill(0);for(const{tier:t,previousRate:n}of e)re(this,qt,ro).call(this,t,n);x(this,Yi).emit(ee.GENERATORS_RESET_COMPLETE,{})}serialize(){const e=[];for(let t=Ln;t<=Mn;t+=1)x(this,Dt)[t]>0&&e.push({tier:t,owned:x(this,Dt)[t]});return e}restore(e){x(this,Dt).fill(0);for(const t of e)Number.isInteger(t.tier)&&t.tier>=Ln&&t.tier<=Mn&&(x(this,Dt)[t.tier]=Number.isFinite(t.owned)&&t.owned>=0?Math.floor(t.owned):0);x(this,Ei).fill(void 0),x(this,Yi).emit(ee.GENERATORS_RESTORED,{})}dispose(){x(this,Ro).call(this)}}Dt=new WeakMap,Mi=new WeakMap,Ao=new WeakMap,wo=new WeakMap,Yi=new WeakMap,Ei=new WeakMap,Ro=new WeakMap,xc=new WeakMap,Co=new WeakMap,qt=new WeakSet,Hi=function(e,t){if(!Number.isInteger(e)||e<Ln||e>Mn)throw new RangeError(`${t}: tier must be an integer in [${Ln}, ${Mn}], got ${e}`)},Bf=function(e){var t;return((t=x(this,Ao))==null?void 0:t.getBoostMultiplier(e))??Et},ro=function(e,t){const n=this.getTierRate(e);x(this,Ei)[e]=n,x(this,Yi).emit(ee.GENERATOR_RATE_CHANGED,{tier:e,rate:n,rateDelta:n.sub(t)})};const Tu=["x1","x10","xmax"],Au="x1",sg=1,rg=10,wu=1;var pn,Si,yi,Zn,Lo,Do,In,yn,or,Mc,Po,wt,bl,$s,Za,kf,zf,Gf,Hf;class og{constructor(e,t,n,i,r){q(this,wt);q(this,pn,Ce);q(this,Si,Ce);q(this,yi,Ce);q(this,Zn,Au);q(this,Lo);q(this,Do);q(this,In);q(this,yn);q(this,or,!1);q(this,Mc,e=>{const t=x(this,yn).getTotalBaseRate().mul(e);if(t.gt(Ce)){X(this,or,!0);try{this.earn(t)}finally{X(this,or,!1)}}re(this,wt,$s).call(this)});q(this,Po);const o=e.currencies.credits.tapAmount;if(!(Number.isFinite(o)&&o>0))throw new Error(`CreditsSystem: currencies.credits.tapAmount ${o} must be a finite number > 0 (AC-B3-07 / EC-9)`);X(this,Lo,pt(o)),X(this,In,t),X(this,yn,n),X(this,Do,i),X(this,Po,[t.on(ee.INTENT_TAP_FORGE,()=>{this.earn(x(this,Lo))}),t.on(ee.INTENT_BUY_GENERATOR,({tier:a})=>{re(this,wt,zf).call(this,a)}),t.on(ee.INTENT_SET_BUY_MODE,({mode:a})=>{re(this,wt,kf).call(this,a)}),t.on(ee.INTENT_AUTO_BUY_GENERATOR,({tier:a})=>{re(this,wt,Gf).call(this,a)}),r.register(x(this,Mc))])}earn(e){if(!gn(e)||!e.gt(Ce)){console.warn("CreditsSystem: earn() rejected a non-finite or non-positive base (F-B3-03 guard)",e);return}const t=re(this,wt,bl).call(this),n=e.mul(t);X(this,pn,x(this,pn).add(n)),X(this,Si,x(this,Si).add(n)),X(this,yi,x(this,yi).add(e)),x(this,or)||re(this,wt,$s).call(this,t)}spend(e){return!gn(e)||!e.gt(Ce)||!x(this,pn).gte(e)?!1:(X(this,pn,x(this,pn).sub(e)),re(this,wt,$s).call(this),!0)}addOfflineEarnings(e){if(!gn(e)||!e.gt(Ce)){console.warn("CreditsSystem: rejected invalid offline lump (F-B3-06 / EC-4)",e);return}this.earn(e)}resetRun(){X(this,pn,Ce),X(this,Si,Ce),X(this,yi,Ce),re(this,wt,$s).call(this)}serialize(){return{balance:Wi(x(this,pn)),lifetimeCredits:Wi(x(this,Si)),lifetimeBaseCredits:Wi(x(this,yi)),buyMode:x(this,Zn)}}restore(e){X(this,pn,re(this,wt,Za).call(this,"balance",e.balance)),X(this,Si,re(this,wt,Za).call(this,"lifetimeCredits",e.lifetimeCredits)),X(this,yi,re(this,wt,Za).call(this,"lifetimeBaseCredits",e.lifetimeBaseCredits)),X(this,Zn,e.buyMode!==void 0&&Tu.includes(e.buyMode)?e.buyMode:Au),re(this,wt,$s).call(this),x(this,In).emit(ee.BUY_MODE_CHANGED,{mode:x(this,Zn)})}getBalance(){return x(this,pn)}getLifetimeCredits(){return x(this,Si)}getLifetimeBaseCredits(){return x(this,yi)}getBuyMode(){return x(this,Zn)}dispose(){for(const e of x(this,Po))e()}}pn=new WeakMap,Si=new WeakMap,yi=new WeakMap,Zn=new WeakMap,Lo=new WeakMap,Do=new WeakMap,In=new WeakMap,yn=new WeakMap,or=new WeakMap,Mc=new WeakMap,Po=new WeakMap,wt=new WeakSet,bl=function(){const e=x(this,Do).get();return!gn(e)||e.lt(Et)?(console.warn("CreditsSystem: F-B3-01 clamped a malformed global multiplier to ONE (provider contract: finite >= ONE)",e),Et):e},$s=function(e){const t=x(this,yn).getTotalBaseRate().mul(e??re(this,wt,bl).call(this));x(this,In).emit(ee.CREDITS_UPDATED,{balance:x(this,pn),ratePerSec:t})},Za=function(e,t){let n;try{n=vo(t)}catch(i){if(!(i instanceof tr))throw i;return console.warn(`CreditsSystem: restore() clamped corrupted field '${e}' to ZERO — deserialize rejected the persisted string (EC-5 / R13)`,t),Ce}return!gn(n)||!n.gte(Ce)?(console.warn(`CreditsSystem: restore() clamped invalid field '${e}' to ZERO — non-finite or negative after deserialize (EC-5 / R13)`,t),Ce):n},kf=function(e){!Tu.includes(e)||e===x(this,Zn)||(X(this,Zn,e),x(this,In).emit(ee.BUY_MODE_CHANGED,{mode:e}))},zf=function(e){if(!x(this,yn).isUnlocked(e)){x(this,In).emit(ee.PURCHASE_REJECTED,{reason:"locked"});return}const t=re(this,wt,Hf).call(this,e);if(t===0){x(this,In).emit(ee.PURCHASE_REJECTED,{reason:"qty_zero"});return}const n=x(this,yn).getCost(e,t);this.spend(n)?x(this,yn).applyPurchase(e,t):x(this,In).emit(ee.PURCHASE_REJECTED,{reason:"insufficient_balance"})},Gf=function(e){if(!x(this,yn).isUnlocked(e)){x(this,In).emit(ee.PURCHASE_REJECTED,{reason:"locked"});return}const t=x(this,yn).getCost(e,wu);this.spend(t)?x(this,yn).applyPurchase(e,wu):x(this,In).emit(ee.PURCHASE_REJECTED,{reason:"insufficient_balance"})},Hf=function(e){switch(x(this,Zn)){case"x1":return sg;case"x10":return rg;case"xmax":return x(this,yn).getMaxAffordable(e,x(this,pn))}};function Ru(s){return Number.isFinite(s)?pt(s).max(Et):Et}function ag(s){return Number.isFinite(s)?pt(s):null}function xa(s){return ag("cost"in s?s.cost:s.unlockCost)}function cg(s){return gn(s)?s:Ce}function lg(s){return`manager:tier${s}`}var ar,Jn,Qn,cr,lr,Io,bn,No,ei,Uo,yt,Ks,Tl,js,Vf,Al,Wf;class hg{constructor(e,t,n,i,r){q(this,yt);q(this,ar);q(this,Jn,new Set);q(this,Qn,{});q(this,cr);q(this,lr);q(this,Io);q(this,bn);q(this,No);q(this,ei);q(this,Uo);re(this,yt,Wf).call(this,e),X(this,cr,n),X(this,lr,i),X(this,bn,t),X(this,Uo,r)}getBoostMultiplier(e){return x(this,ar).filter(t=>t.targetTier===e&&x(this,Jn).has(t.id)).reduce((t,n)=>t.mul(Ru(n.multiplier)),Et)}isManagerUnlocked(e){return x(this,Qn)[e]===!0}isVisible(e){return re(this,yt,Ks).call(this,e.targetTier,e.prerequisiteOwnedCount)}isAvailable(e){return re(this,yt,Tl).call(this,e.id,e.targetTier,e)}getUpgradeState(e){const t=x(this,ei).get(e);if(t===void 0)return"LOCKED";const{entry:n,targetTier:i}=t;return re(this,yt,js).call(this,e,i,n)?"PURCHASED":re(this,yt,Ks).call(this,i,n.prerequisiteOwnedCount)?re(this,yt,Tl).call(this,e,i,n)?"AVAILABLE":"UNAFFORDABLE":"LOCKED"}getProjectedTierRate(e,t){const n=x(this,cr).getTierRate(e),i=x(this,ei).get(t),r=i!==void 0&&"multiplier"in i.entry?i.entry:void 0;return r===void 0?(console.warn("UpgradeSystem: getProjectedTierRate received an unknown or non-boost upgradeId; returning the base tier rate (F-B4-04)",t),n):cg(n).mul(Ru(r.multiplier))}getSortedVisibleUpgrades(){const e=[];for(const[t,n]of x(this,ei))re(this,yt,Ks).call(this,n.targetTier,n.entry.prerequisiteOwnedCount)&&e.push({entry:n.entry,id:t,targetTier:n.targetTier,costKey:xa(n.entry),purchased:re(this,yt,js).call(this,t,n.targetTier,n.entry)?1:0});return e.sort((t,n)=>{if(t.targetTier!==n.targetTier)return t.targetTier-n.targetTier;if(t.purchased!==n.purchased)return t.purchased-n.purchased;if(t.costKey!==null&&n.costKey!==null){const i=t.costKey.cmp(n.costKey);if(i!==0)return i}else{if(t.costKey===null&&n.costKey!==null)return 1;if(t.costKey!==null&&n.costKey===null)return-1}return t.id<n.id?-1:t.id>n.id?1:0}),e.map(t=>t.entry)}getCheapestAvailableUpgradeCost(){let e=null;for(const[t,n]of x(this,ei)){if(re(this,yt,js).call(this,t,n.targetTier,n.entry)||!re(this,yt,Ks).call(this,n.targetTier,n.entry.prerequisiteOwnedCount))continue;const i=xa(n.entry);i!==null&&(e===null||i.lt(e))&&(e=i)}return e??Ce}purchase(e){const t=x(this,ei).get(e);if(t===void 0){x(this,bn).emit(ee.UPGRADE_PURCHASE_REJECTED,{upgradeId:e,reason:"not_found"});return}if(re(this,yt,js).call(this,e,t.targetTier,t.entry))return;const n=xa(t.entry);if(n===null||n.lte(Ce)){x(this,bn).emit(ee.UPGRADE_PURCHASE_REJECTED,{upgradeId:e,reason:"invalid_cost"});return}if(!x(this,lr).spend(n)){x(this,bn).emit(ee.UPGRADE_PURCHASE_REJECTED,{upgradeId:e,reason:"insufficient_balance"});return}this.markUpgradePurchased(e);const{type:i,targetTier:r}=t;i==="LinearBoost"?(x(this,bn).emit(ee.BOOSTS_CHANGED,{tier:r}),x(this,bn).emit(ee.UPGRADE_PURCHASED,{upgradeId:e,type:i,targetTier:r})):(x(this,Qn)[r]=!0,x(this,bn).emit(ee.AUTOMATION_UNLOCKED,{tier:r}),x(this,bn).emit(ee.UPGRADE_PURCHASED,{upgradeId:e,type:i,targetTier:r}))}markUpgradePurchased(e){x(this,Jn).add(e)}getState(){return{purchasedUpgrades:[...x(this,Jn)],managerUnlocked:{...x(this,Qn)}}}loadState(e){if(x(this,Jn).clear(),re(this,yt,Al).call(this),e==null)return;const t=e.purchasedUpgrades;if(Array.isArray(t))for(const i of t)x(this,ei).has(i)?x(this,Jn).add(i):console.warn("UpgradeSystem.loadState: dropping a purchased upgradeId absent from the current catalog (removed in a patch?)",i);else t!==void 0&&console.warn("UpgradeSystem.loadState: purchasedUpgrades is not an array; defaulting to empty",t);const n=e.managerUnlocked;if(n!==null&&typeof n=="object"&&!Array.isArray(n))for(const[i,r]of Object.entries(n))r===!0&&(x(this,Qn)[Number(i)]=!0);else n!==void 0&&console.warn("UpgradeSystem.loadState: managerUnlocked is not a plain object; defaulting to all-locked",n)}reset(){var t;x(this,Jn).clear();let e=!1;try{e=((t=x(this,Uo))==null?void 0:t.shouldPersistManagers())===!0}catch{e=!1}e||re(this,yt,Al).call(this),x(this,bn).emit(ee.BOOSTS_CHANGED,{tier:Ff}),x(this,bn).emit(ee.UPGRADE_RESET,{})}onConfigReload(e){{console.warn("UpgradeSystem.onConfigReload is a dev-only hot-reload convenience and is a no-op in a production build (live catalog swap refused — anti-cheat)");return}}}ar=new WeakMap,Jn=new WeakMap,Qn=new WeakMap,cr=new WeakMap,lr=new WeakMap,Io=new WeakMap,bn=new WeakMap,No=new WeakMap,ei=new WeakMap,Uo=new WeakMap,yt=new WeakSet,Ks=function(e,t){return re(this,yt,Vf).call(this,e)&&x(this,cr).getOwned(e)>=t},Tl=function(e,t,n){if(!re(this,yt,Ks).call(this,t,n.prerequisiteOwnedCount)||re(this,yt,js).call(this,e,t,n))return!1;const i=xa(n);return i===null?!1:x(this,lr).getBalance().gte(i)},js=function(e,t,n){return"multiplier"in n?x(this,Jn).has(e):x(this,Qn)[t]===!0},Vf=function(e){return x(this,Io)[e-1]===!0},Al=function(){for(const e of Object.keys(x(this,Qn)))delete x(this,Qn)[Number(e)]},Wf=function(e){var n,i;X(this,ar,Object.freeze((((n=e.upgrades)==null?void 0:n.linearBoosts)??[]).map(r=>Object.freeze({...r})))),X(this,No,Object.freeze((((i=e.upgrades)==null?void 0:i.managers)??[]).map(r=>Object.freeze({...r}))));const t=new Map;for(const r of x(this,ar))t.set(r.id,{entry:r,type:"LinearBoost",targetTier:r.targetTier});x(this,No).forEach((r,o)=>{const a=o+1;t.set(lg(a),{entry:r,type:"AutomationUnlock",targetTier:a})}),X(this,ei,t),X(this,Io,Object.freeze((e.generators??[]).map(r=>r.enabled===!0)))};var Oo,hr,Fo,ur,Bo,ko,Ec,Xf;class ug{constructor(e){q(this,Ec);q(this,Oo);q(this,hr);q(this,Fo);q(this,ur);q(this,Bo);q(this,ko);X(this,Oo,e.bus),X(this,hr,e.b2),X(this,Fo,e.b3),X(this,ur,e.b4),X(this,Bo,e.reserveFraction),X(this,ko,[...e.enabledTiers].sort((t,n)=>n-t)),e.clock.register(()=>re(this,Ec,Xf).call(this))}}Oo=new WeakMap,hr=new WeakMap,Fo=new WeakMap,ur=new WeakMap,Bo=new WeakMap,ko=new WeakMap,Ec=new WeakSet,Xf=function(){const e=x(this,ur).getCheapestAvailableUpgradeCost().mul(x(this,Bo));for(const t of x(this,ko)){if(!x(this,ur).isManagerUnlocked(t)||!x(this,hr).isUnlocked(t))continue;const n=x(this,hr).getCost(t,1).add(e);x(this,Fo).getBalance().gte(n)&&x(this,Oo).emit(ee.INTENT_AUTO_BUY_GENERATOR,{tier:t})}};const Cu=9;var Ms,zo,Nn,Go,$n,Yf,wl,qf,$f;class dg{constructor(e,t){q(this,$n);q(this,Ms);q(this,zo);q(this,Nn,0);q(this,Go);X(this,Ms,e),X(this,zo,t),X(this,Go,[e.on(ee.GENERATOR_PURCHASED,n=>re(this,$n,Yf).call(this,n)),e.on(ee.GENERATORS_RESTORED,()=>re(this,$n,qf).call(this)),e.on(ee.GENERATORS_RESET_COMPLETE,()=>re(this,$n,$f).call(this))])}getEpoch(){return x(this,Nn)}dispose(){for(const e of x(this,Go))e()}}Ms=new WeakMap,zo=new WeakMap,Nn=new WeakMap,Go=new WeakMap,$n=new WeakSet,Yf=function(e){const{tier:t,owned:n}=e;n>=1&&Number.isInteger(t)&&t>=1&&t<=Cu&&t>x(this,Nn)&&(X(this,Nn,t),x(this,Ms).emit(ee.EPOCH_CHANGED,{epoch:x(this,Nn)}))},wl=function(){for(let e=Cu;e>=1;e--)if(x(this,zo).getOwned(e)>=1)return e;return 0},qf=function(){X(this,Nn,re(this,$n,wl).call(this)),x(this,Ms).emit(ee.EPOCH_CHANGED,{epoch:x(this,Nn)})},$f=function(){const e=re(this,$n,wl).call(this);e!==x(this,Nn)&&(X(this,Nn,e),x(this,Ms).emit(ee.EPOCH_CHANGED,{epoch:x(this,Nn)}))};const fg=Object.freeze({addDarkMatter:()=>{},isNoOp:!0});var Ho,Vo,Wo,Es,dr,Xo,Yo,Ss,qi,qo,Rl;class pg{constructor(e,t,n,i,r,o){q(this,qo);q(this,Ho);q(this,Vo);q(this,Wo);q(this,Es);q(this,dr);q(this,Xo);q(this,Yo);q(this,Ss);q(this,qi,0);mg(e.ascension),X(this,Ho,pt(e.ascension.constant)),X(this,Vo,pt(e.ascension.creditsDivisor)),X(this,Wo,e.ascension.exponent),X(this,Es,i),X(this,dr,t),X(this,Xo,n),X(this,Yo,r),X(this,Ss,o??fg)}assertRealProviderInstalled(){if(x(this,Ss).isNoOp===!0)throw new Error("AscensionSystem: real DarkMatterProvider never installed — setDarkMatterProvider() was not called before boot step 6 (production wiring fault; refusing to silently mint 0 Dark Matter)")}setDarkMatterProvider(e){X(this,Ss,e)}getRunCount(){return x(this,qi)}serialize(){return{runCount:x(this,qi)}}restore(e){const t=e==null?void 0:e.runCount;if(typeof t!="number"||!Number.isSafeInteger(t)||t<0)throw new Error(`AscensionSystem.restore: invalid runCount (${String(t)}) — must be a non-negative safe integer`);X(this,qi,t)}getEstimatedDM(){return re(this,qo,Rl).call(this,x(this,Es).getLifetimeBaseCredits())}canAscend(){return this.getEstimatedDM().gte(Et)}executeAscension(){if(!this.canAscend())throw new Error("AscensionSystem.executeAscension: canAscend() is false (programming error — E5 must gate the Ascend button)");this.assertRealProviderInstalled(),x(this,dr).emit(ee.ASCENSION_STARTED,{});const e=x(this,Es).getLifetimeBaseCredits(),t=re(this,qo,Rl).call(this,e);x(this,Es).resetRun(),x(this,Xo).resetRun(),x(this,Yo).reset(),x(this,Ss).addDarkMatter(t,e),_a(this,qi)._++,x(this,dr).emit(ee.ASCENSION_COMPLETE,{dmGained:t,runCount:x(this,qi)})}}Ho=new WeakMap,Vo=new WeakMap,Wo=new WeakMap,Es=new WeakMap,dr=new WeakMap,Xo=new WeakMap,Yo=new WeakMap,Ss=new WeakMap,qi=new WeakMap,qo=new WeakSet,Rl=function(e){if(e.lt(Ce))throw new Error("AscensionSystem.computeDM: basis < 0 violates the B3 lifetimeBaseCredits invariant");if(e.eq(Ce))return Ce;const t=e.div(x(this,Vo)),n=da(t,x(this,Wo));return x(this,Ho).mul(n).floor()};function mg(s){const{constant:e,creditsDivisor:t,exponent:n}=s;if(!Number.isFinite(e)||e<0)throw new Error(`AscensionSystem: invalid ascension.constant (K=${e}) — must be finite and >= 0`);if(!Number.isFinite(t)||t<=0)throw new Error(`AscensionSystem: invalid ascension.creditsDivisor (D=${t}) — must be finite and > 0`);if(!Number.isFinite(n)||n<=0)throw new Error(`AscensionSystem: invalid ascension.exponent (E=${n}) — must be finite and > 0`)}var $o,Ko,mn,Zt,Un,Vt,fr,es,Ja,Kf;class gg{constructor(e,t,n){q(this,es);q(this,$o);q(this,Ko);q(this,mn,Ce);q(this,Zt,Ce);q(this,Un,Ce);q(this,Vt,"UNINITIALIZED");q(this,fr);_g(t.ascension),X(this,$o,e),X(this,Ko,n),X(this,fr,pt(t.ascension.dmMultiplierPerPoint))}initFresh(){if(x(this,Vt)!=="UNINITIALIZED")throw new Error(`DarkMatterSystem.initFresh: expected UNINITIALIZED, got ${x(this,Vt)} — fresh-init must run exactly once at boot, before restore()`);X(this,Vt,"LIVE")}getState(){return x(this,Vt)}getBalance(){return x(this,mn)}getTotalSpent(){return x(this,Zt)}getLifetimeMinted(){return x(this,Un)}get(){return x(this,Vt)!=="LIVE"?Et:Et.plus(x(this,fr).times(x(this,Zt)))}getMultiplierPreview(e){if(e.lt(Ce))throw new Error(`DarkMatterSystem.getMultiplierPreview: additionalDM (${e.toString()}) must be >= 0 (EC-C3-15)`);return Et.plus(x(this,fr).times(x(this,Zt).plus(e)))}addDarkMatter(e,t){if(e.lt(Ce))throw new Error(`DarkMatterSystem.addDarkMatter: amount (${e.toString()}) must be >= 0 (EC-C3-02)`);if(x(this,Vt)!=="LIVE")throw new Error(`DarkMatterSystem.addDarkMatter: state is ${x(this,Vt)}, must be LIVE — minting during boot/restore is a fault (EC-C3-12)`);X(this,mn,x(this,mn).plus(e)),X(this,Un,x(this,Un).plus(e)),re(this,es,Ja).call(this)}spendDarkMatter(e){if(e.lt(Ce))throw new Error(`DarkMatterSystem.spendDarkMatter: amount (${e.toString()}) must be >= 0 (EC-C3-04)`);if(x(this,Vt)!=="LIVE")throw new Error(`DarkMatterSystem.spendDarkMatter: state is ${x(this,Vt)}, must be LIVE — spending during boot/restore is a fault (systems R5)`);return e.eq(Ce)?!0:x(this,mn).gte(e)?(X(this,mn,x(this,mn).minus(e)),X(this,Zt,x(this,Zt).plus(e)),re(this,es,Ja).call(this),!0):!1}serialize(){return{darkMatter:Wi(x(this,mn)),totalDMSpent:Wi(x(this,Zt)),lifetimeDMMinted:Wi(x(this,Un))}}restore(e,t,n){var c;if(x(this,Vt)!=="UNINITIALIZED")throw new Error(`DarkMatterSystem.restore: expected UNINITIALIZED, got ${x(this,Vt)} — restore must run once at boot, not over a live ledger`);X(this,Vt,"RESTORING");const i=Oc(e),r=Oc(t);let o=Oc(n);if(o===Fh||o===xs){const l=Rs(r)?r:Ce;Rs(i)?(o=i.plus(l),console.info("C3.restore: backfilled lifetimeDMMinted from darkMatter + (valid) totalDMSpent (legacy save)")):Rs(r)&&(o=l,console.info("C3.restore: backfilled lifetimeDMMinted from totalDMSpent only (legacy save, darkMatter unusable)"))}r===xs&&console.error("C3.restore: totalDMSpent corrupt — defaulting to 0 (multiplier history lost)"),X(this,Zt,Rs(r)?r:Ce),X(this,Un,Rs(o)?o:Ce);const a=x(this,Un).minus(x(this,Zt));X(this,mn,a.lt(Ce)?Ce:a),i===xs?console.warn("C3.restore: stored darkMatter corrupt/unusable — using ledger-derived value"):Rs(i)&&r!==xs&&!i.eq(x(this,mn))&&console.warn("C3.restore: stored darkMatter disagrees with ledger — using derived value"),x(this,Zt).gt(x(this,Un))&&(console.error("C3.restore: LEDGER INCONSISTENCY — totalDMSpent > lifetimeDMMinted; clamping totalDMSpent down"),(c=x(this,Ko))==null||c.call(this,"dm_ledger_inconsistency",{totalDMSpent:Wi(x(this,Zt)),lifetimeDMMinted:Wi(x(this,Un))}),X(this,Zt,x(this,Un)),X(this,mn,Ce)),re(this,es,Kf).call(this)}seedForTest(e,t=Ce){X(this,Vt,e),X(this,Zt,t)}}$o=new WeakMap,Ko=new WeakMap,mn=new WeakMap,Zt=new WeakMap,Un=new WeakMap,Vt=new WeakMap,fr=new WeakMap,es=new WeakSet,Ja=function(){x(this,$o).emit(ee.DARK_MATTER_UPDATED,{balance:x(this,mn),totalSpent:x(this,Zt),multiplier:this.get()})},Kf=function(){X(this,Vt,"LIVE"),re(this,es,Ja).call(this)};const Fh=Symbol("DarkMatter.ABSENT"),xs=Symbol("DarkMatter.INVALID");function Rs(s){return s!==Fh&&s!==xs}function Oc(s){if(s==null||s==="")return Fh;let e;try{e=pt(s)}catch(t){if(t instanceof tr)return xs;throw t}return e.lt(Ce)?xs:e}function _g(s){const e=s==null?void 0:s.dmMultiplierPerPoint;if(!Number.isFinite(e)||e<=0)throw new Error(`DarkMatterSystem: invalid ascension.dmMultiplierPerPoint (${String(e)}) — must be finite and > 0 (EC-C3-10)`)}class Ut extends Error{constructor(t,n){super(n);O(this,"code");this.name="CatalogValidationError",this.code=t,Object.setPrototypeOf(this,Ut.prototype)}}const vg=new Set(["globalMultiplier","tierBoost","offlineExtension","automationUnlock"]),Lu=9;function Du(s){return gn(s)?s.max(Et):Et}function Pu(s,e){if(!Number.isFinite(s))return 1;const t=Math.floor(s);return t<1?1:t>e?e:t}function xg(s){if(!Number.isFinite(s.cost)||s.cost<0)throw new Ut("CATALOG_RESPEC_COST",`dmTree.respec.cost must be finite and >= 0 (got ${String(s.cost)})`)}var Jt,rn,ys,pr,jo,$i,vt,vn,Cl,Ll,Dl,Pl;class Mg{constructor(e,t,n,i){q(this,vn);q(this,Jt,"UNINITIALIZED");q(this,rn);q(this,ys);q(this,pr);q(this,jo);q(this,$i);q(this,vt,new Map);var r,o;X(this,rn,Eg(((r=e.dmTree)==null?void 0:r.nodes)??[])),X(this,ys,n),X(this,pr,t),X(this,jo,i),X(this,$i,((o=e.dmTree)==null?void 0:o.respec)??{enabled:!1,cost:0,refundNodes:!1}),xg(x(this,$i))}initFresh(){if(x(this,Jt)!=="UNINITIALIZED")throw new Error(`DMUpgradeTree.initFresh: expected UNINITIALIZED, got ${x(this,Jt)} — fresh-init must run exactly once at boot, before restore()`);X(this,Jt,"LIVE")}getState(){return x(this,Jt)}getNodeLevel(e){return x(this,vt).get(e)??0}getNodeCost(e){const t=x(this,rn).get(e);if(t===void 0)return Ce;const n=x(this,vt).get(e)??0;return n>=t.maxLevel?Ce:pt(t.baseCost).mul(pt(t.growth).pow(n)).floor()}canPurchase(e){const t=x(this,rn).get(e);if(t===void 0||(x(this,vt).get(e)??0)>=t.maxLevel)return!1;for(const n of t.prereqs)if((x(this,vt).get(n)??0)<1)return!1;return re(this,vn,Cl).call(this,t)?!1:x(this,ys).getBalance().gte(this.getNodeCost(e))}getCommittedCapstone(){for(const[e,t]of x(this,vt))if(t>=1){const n=x(this,rn).get(e);if((n==null?void 0:n.isCapstone)===!0)return n.branch}return null}purchase(e){const t=x(this,rn).get(e);if(t===void 0)return{ok:!1,reason:"unknown_node"};const n=x(this,vt).get(e)??0;if(n>=t.maxLevel)return{ok:!1,reason:"maxed"};for(const o of t.prereqs)if((x(this,vt).get(o)??0)<1)return{ok:!1,reason:"locked_prereq"};if(re(this,vn,Cl).call(this,t))return{ok:!1,reason:"rival_capstone"};const i=this.getNodeCost(e);if(!x(this,ys).spendDarkMatter(i))return{ok:!1,reason:"insufficient_dm"};const r=n+1;return x(this,vt).set(e,r),x(this,pr).emit(ee.DM_UPGRADE_PURCHASED,{nodeId:e,level:r}),t.isCapstone&&x(this,pr).emit(ee.DM_TREE_CAPSTONE_SELECTED,{branch:t.branch}),{ok:!0,level:r}}respecCapstone(){if(!x(this,$i).enabled)return{ok:!1,reason:"respec_disabled"};let e=null;for(const[t,n]of x(this,vt))if(n>=1){const i=x(this,rn).get(t);if((i==null?void 0:i.isCapstone)===!0){e=t;break}}if(e===null)return{ok:!1,reason:"no_capstone"};if(!x(this,ys).spendDarkMatter(pt(x(this,$i).cost)))return{ok:!1,reason:"insufficient_dm"};if(x(this,vt).delete(e),x(this,$i).refundNodes)for(const t of[...x(this,vt).keys()]){const n=x(this,rn).get(t);n!==void 0&&!n.isCapstone&&x(this,vt).delete(t)}return{ok:!0}}getExtraGlobalMultiplier(){return re(this,vn,Ll).call(this,e=>e.effectType==="globalMultiplier")}getTierBoost(e){return re(this,vn,Ll).call(this,t=>t.effectType==="tierBoost"&&t.effectParams.targetTier===e)}getOfflineCapBonusHours(){return re(this,vn,Pl).call(this,e=>e.capHours??0)}getOfflineRateBonus(){return re(this,vn,Pl).call(this,e=>e.rateBonus??0)}getWelcomeBackBonus(){return Et}isManagerPersistent(){if(x(this,Jt)!=="LIVE")return!1;for(const[e,t]of x(this,vt)){if(t<1)continue;const n=x(this,rn).get(e);if((n==null?void 0:n.effectType)==="automationUnlock"&&!n.isCapstone)return!0}return!1}shouldPersistManagers(){return this.isManagerPersistent()}getAutomationEfficiencyBonus(){if(x(this,Jt)!=="LIVE")return Et;for(const[e,t]of x(this,vt)){if(t<1)continue;const n=x(this,rn).get(e);if((n==null?void 0:n.effectType)==="automationUnlock"&&n.isCapstone){const i=n.effectParams.efficiencyBonus??0;return Du(Et.add(pt(i)))}}return Et}serialize(){const e=[];for(const[t,n]of x(this,vt))n>=1&&e.push({id:t,level:n});return e.sort((t,n)=>t.id<n.id?-1:t.id>n.id?1:0),e}restore(e){var n;if(x(this,Jt)!=="UNINITIALIZED")throw new Error(`DMUpgradeTree.restore: expected UNINITIALIZED, got ${x(this,Jt)} — restore must run exactly once at boot, in place of initFresh()`);X(this,Jt,"RESTORING"),x(this,vt).clear();let t=null;for(const i of e){const r=x(this,rn).get(i.id);if(r===void 0){console.warn(`C4.restore: unknown node id "${i.id}" — skipping (catalog migration, EC-C4-09)`);continue}if(r.isCapstone){if(!Number.isFinite(i.level)||i.level<1){console.warn(`C4.restore: capstone "${i.id}" has invalid level ${String(i.level)} — dropping (no fabricated commitment, EC-C4-10)`);continue}const o=Pu(i.level,r.maxLevel);if(t===null)t=i.id,x(this,vt).set(i.id,o);else{const a=x(this,rn).get(t);if(a!==void 0&&a.branch===r.branch)x(this,vt).set(i.id,o);else{const c=t,l=c<i.id?c:i.id,h=l===i.id?c:i.id;console.error(`C4.restore: two rival capstones "${t}" and "${i.id}" — keeping lowest id "${l}", dropping "${h}" (EC-C4-11)`),(n=x(this,jo))==null||n.call(this,"dm_tree_multi_capstone",{kept:l,dropped:h}),x(this,vt).delete(h),l===i.id&&x(this,vt).set(i.id,o),t=l}}}else{const o=Pu(i.level,r.maxLevel);o!==i.level&&console.warn(`C4.restore: node "${i.id}" level ${String(i.level)} coerced to ${o} in [1, ${r.maxLevel}] (EC-C4-10)`),x(this,vt).set(i.id,o)}}X(this,Jt,"LIVE")}seedForTest(e,t={}){X(this,Jt,e);for(const[n,i]of Object.entries(t))x(this,vt).set(n,i)}}Jt=new WeakMap,rn=new WeakMap,ys=new WeakMap,pr=new WeakMap,jo=new WeakMap,$i=new WeakMap,vt=new WeakMap,vn=new WeakSet,Cl=function(e){if(!e.isCapstone)return!1;const t=this.getCommittedCapstone();return t!==null&&t!==e.branch},Ll=function(e){if(x(this,Jt)!=="LIVE")return Et;let t=Et;for(const{node:n,level:i}of re(this,vn,Dl).call(this,e)){const r=n.effectParams.perLevelBonus??0;t=t.mul(Et.add(pt(r).mul(i)))}return Du(t)},Dl=function(e){const t=[];for(const[n,i]of x(this,vt)){if(i<1)continue;const r=x(this,rn).get(n);r!==void 0&&e(r)&&t.push({node:r,level:i})}return t.sort((n,i)=>n.node.id<i.node.id?-1:n.node.id>i.node.id?1:0),t},Pl=function(e){if(x(this,Jt)!=="LIVE")return 0;let t=0;for(const{node:n}of re(this,vn,Dl).call(this,i=>i.effectType==="offlineExtension"))t+=e(n.effectParams);return t};function Eg(s){const e=new Map;for(const n of s){if(e.has(n.id))throw new Ut("CATALOG_DUP_ID",`dmTree: duplicate node id "${n.id}"`);e.set(n.id,n)}for(const n of s){if(!Number.isInteger(n.maxLevel)||n.maxLevel<1)throw new Ut("CATALOG_MAXLEVEL",`dmTree node "${n.id}": maxLevel must be a positive integer (got ${String(n.maxLevel)})`);if(!Number.isFinite(n.baseCost)||n.baseCost<1)throw new Ut("CATALOG_BASECOST",`dmTree node "${n.id}": baseCost must be finite and >= 1 (got ${String(n.baseCost)})`);if(!Number.isFinite(n.growth)||n.growth<1)throw new Ut("CATALOG_GROWTH",`dmTree node "${n.id}": growth must be finite and >= 1.0 (got ${String(n.growth)})`);if(n.maxLevel>1&&(n.growth<=1||Math.floor(n.baseCost*n.growth)<=n.baseCost))throw new Ut("CATALOG_FLAT_REPEATABLE",`dmTree node "${n.id}": repeatable node requires growth > 1.0 and a non-flat cost curve (got growth ${String(n.growth)}, baseCost ${String(n.baseCost)})`);if(!vg.has(n.effectType))throw new Ut("CATALOG_EFFECT_TYPE",`dmTree node "${n.id}": invalid effectType "${String(n.effectType)}"`);if(n.effectType==="globalMultiplier"||n.effectType==="tierBoost"){const i=n.effectParams.perLevelBonus;if(!Number.isFinite(i)||i<=0)throw new Ut("CATALOG_PERLEVELBONUS",`dmTree node "${n.id}": ${n.effectType} requires effectParams.perLevelBonus finite and > 0 (got ${String(i)})`)}if(n.effectType==="tierBoost"){const i=n.effectParams.targetTier;if(!Number.isInteger(i)||i<1||i>Lu)throw new Ut("CATALOG_TARGET_TIER",`dmTree node "${n.id}": tierBoost targetTier must be an integer in 1..${Lu} (got ${String(i)})`)}if(n.effectType==="offlineExtension"){const{capHours:i,rateBonus:r}=n.effectParams;if(!Number.isFinite(i)||i<0||!Number.isFinite(r)||r<0)throw new Ut("CATALOG_OFFLINE_PARAMS",`dmTree node "${n.id}": offlineExtension requires effectParams.capHours and rateBonus finite and >= 0 (got capHours ${String(i)}, rateBonus ${String(r)})`)}if(n.effectType==="automationUnlock"){if(n.isCapstone){const i=n.effectParams.efficiencyBonus;if(!Number.isFinite(i)||i<=0)throw new Ut("CATALOG_EFFICIENCYBONUS",`dmTree node "${n.id}": automationUnlock capstone requires effectParams.efficiencyBonus finite and > 0 (got ${String(i)})`)}else if(n.effectParams.efficiencyBonus!==void 0)throw new Ut("CATALOG_MISPLACED_EFFICIENCYBONUS",`dmTree node "${n.id}": a non-capstone automationUnlock (manager-persistence) must NOT declare effectParams.efficiencyBonus (the efficiency scalar is a Cortex CAPSTONE effect, F-C4-06)`)}}const t=new Map;for(const n of s){if(!n.isCapstone)continue;const i=t.get(n.branch);if(i!==void 0)throw new Ut("CATALOG_DUP_CAPSTONE",`dmTree branch "${n.branch}": more than one capstone ("${i}" and "${n.id}")`);t.set(n.branch,n.id)}for(const n of s)for(const i of n.prereqs){const r=e.get(i);if(r===void 0)throw new Ut("CATALOG_MISSING_PREREQ",`dmTree node "${n.id}": prereq "${i}" is not in the catalog`);if(r.branch!==n.branch)throw new Ut("CATALOG_CROSS_BRANCH_PREREQ",`dmTree node "${n.id}" (branch "${n.branch}"): prereq "${i}" is in a different branch ("${r.branch}")`)}Sg(s,e);for(const n of s)for(const i of n.prereqs){const r=e.get(i);if(r.tier>=n.tier)throw new Ut("CATALOG_PREREQ_TIER_ORDER",`dmTree node "${n.id}" (tier ${n.tier}): prereq "${i}" must be a strictly lower tier (got tier ${r.tier})`)}return e}function Sg(s,e){const r=new Map;for(const a of s)r.set(a.id,0);const o=a=>{r.set(a,1);const c=e.get(a);if(c!==void 0)for(const l of c.prereqs){const h=r.get(l);if(h===1)throw new Ut("CATALOG_CYCLE",`dmTree: prereq cycle detected involving "${a}" → "${l}"`);h===0&&o(l)}r.set(a,2)};for(const a of s)r.get(a.id)===0&&o(a.id)}const yg=1,bg=9;var bi,Zo,mr,gr,_r,Hn,ti,Jo,Qo,ea,ns,jf,Zf,Jf;class Tg{constructor(e,t,n,i){q(this,ns);q(this,bi);q(this,Zo);q(this,mr);q(this,gr);q(this,_r);q(this,Hn,new Set);q(this,ti,new Set);q(this,Jo,!1);q(this,Qo,0);q(this,ea);var r;X(this,bi,e),X(this,Zo,n),X(this,mr,i),X(this,gr,t.upgrades.milestones.map(o=>o.ownedCount).slice().sort((o,a)=>o-a)),X(this,_r,(((r=t.milestones)==null?void 0:r.creditsScale)??[]).map(o=>({threshold:pt(o.threshold),thresholdNum:Number(o.threshold),name:o.name})).sort((o,a)=>o.threshold.gt(a.threshold)?1:o.threshold.lt(a.threshold)?-1:0)),X(this,ea,[x(this,bi).on(ee.GENERATOR_PURCHASED,o=>re(this,ns,jf).call(this,o)),x(this,bi).on(ee.CREDITS_UPDATED,()=>re(this,ns,Zf).call(this)),x(this,bi).on(ee.GENERATORS_RESET_COMPLETE,()=>re(this,ns,Jf).call(this))])}dispose(){for(const e of x(this,ea))e()}getState(){return{celebratedOwned:[...x(this,Hn)],celebratedLifetime:[...x(this,ti)]}}restore(e){if(x(this,Hn).clear(),e.celebratedOwned===void 0)for(let t=yg;t<=bg;t++){const n=x(this,Zo).getOwned(t);for(const i of x(this,gr))n>=i&&x(this,Hn).add(`${t}:${i}`)}else for(const t of e.celebratedOwned)x(this,Hn).add(t);if(x(this,ti).clear(),e.celebratedLifetime===void 0){const t=x(this,mr).getLifetimeCredits();for(const n of x(this,_r))t.gte(n.threshold)&&x(this,ti).add(`credits:${n.name}`)}else for(const t of e.celebratedLifetime)x(this,ti).add(t);X(this,Jo,!0)}}bi=new WeakMap,Zo=new WeakMap,mr=new WeakMap,gr=new WeakMap,_r=new WeakMap,Hn=new WeakMap,ti=new WeakMap,Jo=new WeakMap,Qo=new WeakMap,ea=new WeakMap,ns=new WeakSet,jf=function({tier:e,previousOwned:t,owned:n}){const i=x(this,gr),r=i.filter(c=>t<c&&c<=n),o=r.filter(c=>!x(this,Hn).has(`${e}:${c}`)).length;if(o===0)return;const a=++_a(this,Qo)._;for(const c of r){const l=`${e}:${c}`;x(this,Hn).has(l)||(x(this,Hn).add(l),x(this,bi).emit(ee.MILESTONE_REACHED,{type:"owned_count",tier:e,threshold:c,ordinal:i.indexOf(c)+1,seriesLength:i.length,burstId:a,burstSize:o}))}},Zf=function(){if(!x(this,Jo))return;const e=x(this,mr).getLifetimeCredits(),t=x(this,_r),n=t.filter(r=>e.gte(r.threshold)&&!x(this,ti).has(`credits:${r.name}`)).length;if(n===0)return;const i=++_a(this,Qo)._;for(let r=0;r<t.length;r++){const o=t[r],a=`credits:${o.name}`;!e.gte(o.threshold)||x(this,ti).has(a)||(x(this,ti).add(a),x(this,bi).emit(ee.MILESTONE_REACHED,{type:"credits_scale",threshold:o.thresholdNum,name:o.name,ordinal:r+1,seriesLength:t.length,burstId:i,burstSize:n}))}},Jf=function(){x(this,Hn).clear()};const lo=1,Ag="stellarforge.save",Iu="stellarforge.save.backup",wg="stellarforge.save.corrupt";class Bh extends Error{constructor(t,n){super(`save blob saveVersion ${t} is newer than this build's ${n} — refusing to interpret a future schema`);O(this,"saveVersion");O(this,"currentVersion");this.name="SaveVersionTooNewError",this.saveVersion=t,this.currentVersion=n,Object.setPrototypeOf(this,Bh.prototype)}}const Rg=["x1","x10","xmax"],kh="x1",Cg=1,Lg=9;function Dg(){return{balance:"0",lifetimeCredits:"0",lifetimeBaseCredits:"0",buyMode:kh}}function Qf(){return{purchasedUpgrades:[],managerUnlocked:{}}}function Pg(){return{celebratedOwned:[],celebratedLifetime:[]}}function Nu(s){return{saveVersion:lo,lastSeen:s,credits:Dg(),generators:[],upgrades:Qf(),darkMatter:"0",totalDMSpent:"0",lifetimeDMMinted:"0",dmUpgrades:[],milestones:Pg()}}function Ig(s){return JSON.stringify(s)}function Yr(s){return typeof s=="object"&&s!==null&&!Array.isArray(s)}function Uu(s,e){const t=Yr(s)?s:{},n=typeof t.saveVersion=="number"?t.saveVersion:0;if(n>lo)throw new Bh(n,lo);const i=Yr(t.credits)?t.credits:{},r={balance:typeof i.balance=="string"?i.balance:"0",lifetimeCredits:typeof i.lifetimeCredits=="string"?i.lifetimeCredits:"0",lifetimeBaseCredits:typeof i.lifetimeBaseCredits=="string"?i.lifetimeBaseCredits:"0",buyMode:i.buyMode??kh},o=Yr(t.upgrades)?t.upgrades:void 0,a=o?{purchasedUpgrades:Array.isArray(o.purchasedUpgrades)?o.purchasedUpgrades:[],managerUnlocked:Yr(o.managerUnlocked)?o.managerUnlocked:{}}:Qf(),c=Yr(t.milestones)?t.milestones:void 0,l=c?{celebratedOwned:Array.isArray(c.celebratedOwned)?c.celebratedOwned:[],celebratedLifetime:Array.isArray(c.celebratedLifetime)?c.celebratedLifetime:[]}:{celebratedOwned:void 0,celebratedLifetime:void 0};return{saveVersion:lo,lastSeen:typeof t.lastSeen=="number"?t.lastSeen:0,credits:r,generators:Array.isArray(t.generators)?t.generators:[],upgrades:a,darkMatter:typeof t.darkMatter=="string"?t.darkMatter:"0",totalDMSpent:typeof t.totalDMSpent=="string"?t.totalDMSpent:"0",lifetimeDMMinted:typeof t.lifetimeDMMinted=="string"?t.lifetimeDMMinted:"0",dmUpgrades:Array.isArray(t.dmUpgrades)?t.dmUpgrades:[],milestones:l,...typeof t.integrity=="string"?{integrity:t.integrity}:{}}}function Ou(s,e){const t=[];for(const r of s.generators){if(!r||typeof r.tier!="number"||r.tier<Cg||r.tier>Lg)continue;const o=typeof r.owned=="number"&&Number.isInteger(r.owned)&&r.owned>=0?r.owned:0;t.push({tier:r.tier,owned:o})}const n=Rg.includes(s.credits.buyMode)?s.credits.buyMode:kh,i=Ng(s.lastSeen,e);return{...s,lastSeen:i,credits:{...s.credits,buyMode:n},generators:t}}function Ng(s,e){return typeof s!="number"||!Number.isFinite(s)||s<=0?e:s}const Fc={autosaveIntervalMs:15e3,clockSkewToleranceMs:1e4,saveKey:Ag},Ug=5e3,Og=3e4,Fg=0,Bg=6e4;function Fu(s,e,t){return Math.min(t,Math.max(e,s))}function kg(s){const e=s.save,t=e==null?void 0:e.autosaveIntervalMs,n=e==null?void 0:e.clockSkewToleranceMs,i=e==null?void 0:e.saveKey;return{autosaveIntervalMs:typeof t=="number"&&Number.isFinite(t)?Fu(t,Ug,Og):Fc.autosaveIntervalMs,clockSkewToleranceMs:typeof n=="number"&&Number.isFinite(n)?Fu(n,Fg,Bg):Fc.clockSkewToleranceMs,saveKey:typeof i=="string"&&i.trim().length>0?i:Fc.saveKey}}const zg=["balance","lifetimeCredits","lifetimeBaseCredits"];function Gg(s=globalThis,e=globalThis.document){return{setTimeout:(t,n)=>s.setTimeout(t,n),clearTimeout:t=>s.clearTimeout(t),addEventListener:(t,n)=>{t==="visibilitychange"?e.addEventListener("visibilitychange",n):s.addEventListener("pagehide",n)},removeEventListener:(t,n)=>{t==="visibilitychange"?e.removeEventListener("visibilitychange",n):s.removeEventListener("pagehide",n)},isHidden:()=>e.visibilityState==="hidden"}}const Hg=2e3;var ni,Qt,vr,ii,bs,si,xr,Ki,Mr,Er,Sr,on,Ti,yr,ta,na,ia,mt,Qa,Il,Nl,ep,Ul,Ol,tp,np,ip,sp;class Vg{constructor(e){q(this,mt);q(this,ni);q(this,Qt);q(this,vr);q(this,ii);q(this,bs);q(this,si);q(this,xr);q(this,Ki,0);q(this,Mr,!0);q(this,Er,Number.NEGATIVE_INFINITY);q(this,Sr,!1);q(this,on);q(this,Ti,!1);q(this,yr);q(this,ta,Number.NEGATIVE_INFINITY);q(this,na,()=>{var e;(e=x(this,on))!=null&&e.isHidden()&&this.saveNow()});q(this,ia,()=>{this.saveNow()});X(this,ni,e.storage),X(this,Qt,e.collaborators),X(this,vr,e.config),X(this,ii,e.bus),X(this,bs,e.now??(()=>Date.now())),X(this,si,kg(e.config)),X(this,xr,e.tabId??"d1"),X(this,on,e.env)}get saveKey(){return x(this,si).saveKey}load(){const e=x(this,bs).call(this);X(this,Sr,!1);const t=x(this,ni).getItem(x(this,si).saveKey);let n;if(t===null)n=Nu(e);else{let i;try{i=JSON.parse(t)}catch{return n=re(this,mt,Nl).call(this,t,e,"corrupt_primary"),re(this,mt,Il).call(this,n),{lastSeen:n.lastSeen}}const r=i.savedAt;typeof r=="number"&&Number.isFinite(r)&&X(this,Er,r);const o=Uu(i,x(this,vr)),a=Ou(o,e),c=re(this,mt,Ol).call(this,a.credits);c!==null?n=re(this,mt,ep).call(this,t,a,e,c):(n={...a,lastSeen:re(this,mt,tp).call(this,a.lastSeen,e)},X(this,Sr,!0))}return re(this,mt,Il).call(this,n),{lastSeen:n.lastSeen}}saveNow(){if(!x(this,Mr))return;const e=x(this,bs).call(this);re(this,mt,np).call(this);const t=Ig({...re(this,mt,sp).call(this),tabId:x(this,xr),savedAt:e});try{x(this,ni).setItem(x(this,si).saveKey,t)}catch(n){re(this,mt,ip).call(this,n),x(this,Mr)&&x(this,Ti)&&re(this,mt,Qa).call(this);return}if(X(this,Er,e),x(this,Sr))try{x(this,ni).setItem(Iu,t)}catch{}x(this,Ti)&&re(this,mt,Qa).call(this)}startAutosave(){x(this,Ti)||x(this,on)!==void 0&&(X(this,Ti,!0),x(this,on).addEventListener("visibilitychange",x(this,na)),x(this,on).addEventListener("pagehide",x(this,ia)),re(this,mt,Qa).call(this))}stopAutosave(){x(this,Ti)&&(X(this,Ti,!1),x(this,on)!==void 0&&(x(this,on).removeEventListener("visibilitychange",x(this,na)),x(this,on).removeEventListener("pagehide",x(this,ia)),x(this,on).clearTimeout(x(this,yr))))}onAscensionSaved(){this.saveNow()}onMajorPurchase(){const e=x(this,bs).call(this);e<x(this,ta)||(X(this,ta,e+Hg),this.saveNow())}getLastSeen(){return x(this,Ki)}resetLastSeen(e){Number.isFinite(e)&&X(this,Ki,Math.max(e,x(this,Ki)))}}ni=new WeakMap,Qt=new WeakMap,vr=new WeakMap,ii=new WeakMap,bs=new WeakMap,si=new WeakMap,xr=new WeakMap,Ki=new WeakMap,Mr=new WeakMap,Er=new WeakMap,Sr=new WeakMap,on=new WeakMap,Ti=new WeakMap,yr=new WeakMap,ta=new WeakMap,na=new WeakMap,ia=new WeakMap,mt=new WeakSet,Qa=function(){x(this,on)!==void 0&&(x(this,on).clearTimeout(x(this,yr)),X(this,yr,x(this,on).setTimeout(()=>{this.saveNow()},x(this,si).autosaveIntervalMs)))},Il=function(e){var t,n,i;x(this,Qt).upgrades.loadState(e.upgrades),x(this,Qt).generators.restore(e.generators),x(this,Qt).credits.restore(e.credits),(t=x(this,Qt).darkMatter)==null||t.restore(e.darkMatter,e.totalDMSpent,e.lifetimeDMMinted),(n=x(this,Qt).dmTree)==null||n.restore(e.dmUpgrades),(i=x(this,Qt).milestones)==null||i.restore(e.milestones),X(this,Ki,e.lastSeen)},Nl=function(e,t,n){x(this,ni).setItem(wg,e);const i=re(this,mt,Ul).call(this,t);return i!==null?(i.lastSeen=t,x(this,ii).emit(ee.SAVE_LOAD_FAILED,{reason:n,recoveredFromBackup:!0}),i):(x(this,ii).emit(ee.SAVE_LOAD_FAILED,{reason:n,recoveredFromBackup:!1}),Nu(t))},ep=function(e,t,n,i){const r=re(this,mt,Ul).call(this,n);return r!==null?(x(this,ii).emit(ee.SAVE_FAILED,{reason:"corrupted_field",field:i}),{...t,credits:r.credits,lastSeen:n}):re(this,mt,Nl).call(this,e,n,"corrupted_field")},Ul=function(e){const t=x(this,ni).getItem(Iu);if(t===null)return null;try{const n=Uu(JSON.parse(t),x(this,vr)),i=Ou(n,e);return re(this,mt,Ol).call(this,i.credits)!==null?null:i}catch{return null}},Ol=function(e){for(const t of zg)try{vo(e[t])}catch{return t}return null},tp=function(e,t){return e>t+x(this,si).clockSkewToleranceMs?t:e},np=function(){let e;try{e=x(this,ni).getItem(x(this,si).saveKey)}catch{return}if(e===null)return;let t;try{t=JSON.parse(e)}catch{return}const n=typeof t.savedAt=="number"?t.savedAt:void 0,i=typeof t.tabId=="string"?t.tabId:void 0;n!==void 0&&i!==void 0&&n>x(this,Er)&&i!==x(this,xr)&&x(this,ii).emit(ee.SAVE_CONFLICT,{otherSavedAt:n})},ip=function(e){const t=e==null?void 0:e.name;if(t==="QuotaExceededError"||t==="NS_ERROR_DOM_QUOTA_REACHED"){x(this,ii).emit(ee.SAVE_FAILED,{reason:"quota_exceeded"});return}X(this,Mr,!1),x(this,ii).emit(ee.SAVE_FAILED,{reason:"storage_unavailable"})},sp=function(){var t,n,i;const e=(t=x(this,Qt).darkMatter)==null?void 0:t.serialize();return{saveVersion:lo,lastSeen:x(this,Ki),credits:x(this,Qt).credits.serialize(),generators:x(this,Qt).generators.serialize(),upgrades:x(this,Qt).upgrades.getState(),darkMatter:(e==null?void 0:e.darkMatter)??"0",totalDMSpent:(e==null?void 0:e.totalDMSpent)??"0",lifetimeDMMinted:(e==null?void 0:e.lifetimeDMMinted)??"0",dmUpgrades:((n=x(this,Qt).dmTree)==null?void 0:n.serialize())??[],milestones:((i=x(this,Qt).milestones)==null?void 0:i.getState())??{celebratedOwned:[],celebratedLifetime:[]}}};const Wg=36e5,Xg=1e3,Yg=5e3;var br,Ts,sa,ra,Tr,oa,aa,ca,la,ha,ua,Kn,rp,op,Fl,ap;class qg{constructor(e){q(this,Kn);q(this,br);q(this,Ts);q(this,sa);q(this,ra);q(this,Tr);q(this,oa);q(this,aa);q(this,ca);q(this,la);q(this,ha,!1);q(this,ua,!1);X(this,br,e.bus),X(this,Ts,e.clock),X(this,sa,e.baseRate),X(this,ra,e.deposit),X(this,Tr,e.nowProvider),X(this,oa,e.config.offline.earningRate),X(this,aa,e.config.offline.baseCapHours),X(this,ca,e.briefThresholdMs??Yg),X(this,la,[x(this,br).on(ee.CLOCK_GAP_DETECTED,t=>re(this,Kn,rp).call(this,t))])}dispose(){for(const e of x(this,la))e()}markRestoreComplete(){X(this,ua,!0)}applyOfflineProgress(){if(x(this,ha))return;X(this,ha,!0);const e=x(this,Ts).getLastSeen(),t=x(this,Tr).call(this)-e;re(this,Kn,Fl).call(this,t,"load")}}br=new WeakMap,Ts=new WeakMap,sa=new WeakMap,ra=new WeakMap,Tr=new WeakMap,oa=new WeakMap,aa=new WeakMap,ca=new WeakMap,la=new WeakMap,ha=new WeakMap,ua=new WeakMap,Kn=new WeakSet,rp=function(e){if(!x(this,ua))return;const t=x(this,Tr).call(this);x(this,Ts).resetLastSeen(t);const n=x(this,Ts).getLastSeen()>t;re(this,Kn,Fl).call(this,e.elapsedMs,"gap",n?"reset_not_applied":void 0)},op=function(){return x(this,aa)*Wg},Fl=function(e,t,n){let i=n,r=e;Number.isFinite(e)||(r=0,i="non_finite");const o=re(this,Kn,op).call(this),a=$g(r,0,o),c=a/Xg;let l=x(this,sa).getTotalBaseRate();gn(l)||(l=Ce,i="non_finite");const h=x(this,oa)*c;let u;Number.isFinite(h)?u=l.times(pt(h)):(i="non_finite",u=Ce);const d=re(this,Kn,ap).call(this,t,e,a,i);u.gt(Ce)&&gn(u)&&x(this,ra).addOfflineEarnings(u);const f={baseLump:u,elapsedSeconds:c,reason:d};i!==void 0&&(f.diagnostic=i),x(this,br).emit(ee.OFFLINE_EARNINGS_APPLIED,f)},ap=function(e,t,n,i){return e==="gap"?"gap":i==="non_finite"?"brief":t<0?"clock_back":n<x(this,ca)?"brief":"away"};function $g(s,e,t){return Math.min(t,Math.max(e,s))}const Kg={maxCatchupSteps:5,gapThresholdMs:3e3,liveBudgetCeilingMs:500};function jg(s){const e=s.now??(()=>Date.now()),t={...Kg,...s.clockTunables},n=new eg,i=Of(s.configJson),r=new ng({tickRateMs:i.currencies.credits.tickRateMs,maxCatchupSteps:t.maxCatchupSteps,gapThresholdMs:t.gapThresholdMs,liveBudgetCeilingMs:t.liveBudgetCeilingMs},n),o=new gg(n,i),a=new Mg(i,n,o),c=$m(o,a);let l=null;const u=Km({getBoostMultiplier:M=>l===null?Et:l.getBoostMultiplier(M)},a),d=new ig(i,n,u),f=new og(i,n,d,c,r),g=new hg(i,n,d,f,a);l=g;const _=i.upgrades.managers.map((M,P)=>P+1),m=new ug({bus:n,clock:r,b2:d,b3:f,b4:g,reserveFraction:i.upgrades.automationReserveFraction,enabledTiers:_}),p=new dg(n,d),y=new pg(i,n,d,f,g);y.setDarkMatterProvider(o),y.assertRealProviderInstalled();const b=new Tg(n,i,d,f),v={serialize:()=>{const M=f.serialize();return{balance:M.balance,lifetimeCredits:M.lifetimeCredits,lifetimeBaseCredits:M.lifetimeBaseCredits,buyMode:M.buyMode??"x1"}},restore:M=>f.restore(M)},R=new Vg({storage:s.storage,collaborators:{upgrades:g,generators:d,credits:v,darkMatter:o,dmTree:a,milestones:b},config:i,bus:n,now:e,tabId:s.tabId,env:s.autosaveEnv}),w=new qg({config:i,bus:n,clock:R,baseRate:d,deposit:f,nowProvider:e});let C;const L=n.on(ee.OFFLINE_EARNINGS_APPLIED,M=>{C=M}),{lastSeen:T}=R.load();return w.applyOfflineProgress(),R.resetLastSeen(e()),w.markRestoreComplete(),L(),{bus:n,clock:r,generators:d,credits:f,upgrades:g,automation:m,epoch:p,ascension:y,darkMatter:o,dmTree:a,milestones:b,save:R,offline:w,loadedLastSeen:T,offlineReport:C,dispose(){w.dispose(),b.dispose(),p.dispose(),f.dispose(),d.dispose()}}}const Zg=30,Bu=4,Bc=1500,Jg=[{key:"Space",intent:ee.INTENT_TAP_FORGE}];var Ye=(s=>(s[s.GAMEPLAY=0]="GAMEPLAY",s[s.SOFT_OVERLAY=1]="SOFT_OVERLAY",s[s.MODAL=2]="MODAL",s[s.DISABLED=3]="DISABLED",s))(Ye||{});const ku=4,Qg={[ee.INTENT_TAP_FORGE]:{[Ye.GAMEPLAY]:"live",[Ye.SOFT_OVERLAY]:"live",[Ye.MODAL]:"suppressed",[Ye.DISABLED]:"suppressed"},[ee.INTENT_BUY_GENERATOR]:{[Ye.GAMEPLAY]:"live",[Ye.SOFT_OVERLAY]:"suppressed",[Ye.MODAL]:"suppressed",[Ye.DISABLED]:"suppressed"},[ee.INTENT_SET_BUY_MODE]:{[Ye.GAMEPLAY]:"live",[Ye.SOFT_OVERLAY]:"suppressed",[Ye.MODAL]:"suppressed",[Ye.DISABLED]:"suppressed"},[ee.INTENT_CONFIRM_ASCENSION]:{[Ye.GAMEPLAY]:"suppressed",[Ye.SOFT_OVERLAY]:"suppressed",[Ye.MODAL]:"live",[Ye.DISABLED]:"suppressed"},[ee.INTENT_HOLD_PROGRESS]:{[Ye.GAMEPLAY]:"suppressed",[Ye.SOFT_OVERLAY]:"suppressed",[Ye.MODAL]:"live",[Ye.DISABLED]:"suppressed"},[ee.INTENT_DISMISS_MODAL]:{[Ye.GAMEPLAY]:"suppressed",[Ye.SOFT_OVERLAY]:"suppressed",[Ye.MODAL]:"live",[Ye.DISABLED]:"suppressed"},[ee.INTENT_DISMISS_OVERLAY]:{[Ye.GAMEPLAY]:"suppressed",[Ye.SOFT_OVERLAY]:"live",[Ye.MODAL]:"suppressed",[Ye.DISABLED]:"suppressed"}};class e_{constructor(e,t=Jg,n={}){O(this,"_bus");O(this,"_keymap");O(this,"_hitAreas",[]);O(this,"_presses",new Map);O(this,"_lastAcceptedDown",new Map);O(this,"_hold");O(this,"_contextStack");O(this,"_logger");this._bus=e,this._keymap=t,this._contextStack=[n.initialContext??Ye.GAMEPLAY],this._logger=n.logger}get context(){return this._contextStack[this._contextStack.length-1]}pushContext(e){var t;if(this._contextStack.length>=ku){(t=this._logger)==null||t.call(this,`[A4 input] pushContext rejected: stack already at max depth ${ku} (attempted context ${Ye[e]}). Likely a consumer push/pop imbalance.`);return}this._hold!==void 0&&(this._bus.emit(ee.INTENT_HOLD_PROGRESS,{ratio:0,source:this._hold.source}),this._hold=void 0),this._presses.clear(),this._contextStack.push(e)}popContext(){this._contextStack.length>1&&this._contextStack.pop()}markReady(){this._contextStack=[Ye.GAMEPLAY]}get keymap(){return this._keymap}registerHitArea(e){if(e.kind==="buy"&&!(Number.isInteger(e.tier)&&e.tier>=1))throw new Error(`InputTranslator.registerHitArea: buy area '${e.id}' requires an integer tier >= 1 (got ${String(e.tier)}) — a wrong tier buys the wrong generator (AC-A4-03).`);this._hitAreas.push(e)}clearHitAreas(){this._hitAreas.length=0,this._lastAcceptedDown.clear(),this._hold=void 0}onPointerDown(e){if(this.context===Ye.DISABLED)return;const t=this._resolveHitArea(e.x,e.y);if(t===void 0)return;const n=this._lastAcceptedDown.get(t.id);if(!this._isSyntheticDup(e,n)){if(this._lastAcceptedDown.set(t.id,{wasTouch:e.wasTouch,x:e.x,y:e.y,t:e.timeStamp,pointerId:e.pointerId}),t.kind==="forge"){this._isLive(ee.INTENT_TAP_FORGE)&&this._bus.emit(ee.INTENT_TAP_FORGE,{source:this._source(e)});return}if(t.kind==="ascension"){this._hold={pointerId:e.pointerId,area:t,heldMs:0,confirmed:!1,source:this._source(e),inside:!0};return}this._presses.set(e.pointerId,{area:t,state:"pressed"})}}onPointerUp(e){if(this.context===Ye.DISABLED)return;if(this._hold!==void 0&&this._hold.pointerId===e.pointerId){this._hold=void 0;return}const t=this._presses.get(e.pointerId);if(t===void 0||(this._presses.delete(e.pointerId),t.state==="cancelled")||!this._inside(t.area,e.x,e.y))return;const n=this._source(e);switch(t.area.kind){case"buy":this._isLive(ee.INTENT_BUY_GENERATOR)&&this._bus.emit(ee.INTENT_BUY_GENERATOR,{tier:t.area.tier,source:n});break;case"buyMode":this._isLive(ee.INTENT_SET_BUY_MODE)&&this._bus.emit(ee.INTENT_SET_BUY_MODE,{mode:t.area.mode,source:n});break;case"dismissModal":this._isLive(ee.INTENT_DISMISS_MODAL)&&(this._bus.emit(ee.INTENT_DISMISS_MODAL,{source:n}),this.context===Ye.MODAL&&this.popContext());break;case"dismissOverlay":this._isLive(ee.INTENT_DISMISS_OVERLAY)&&(this._bus.emit(ee.INTENT_DISMISS_OVERLAY,{source:n}),this.context===Ye.SOFT_OVERLAY&&this.popContext());break}}onPointerMove(e){if(this.context===Ye.DISABLED)return;if(this._hold!==void 0&&this._hold.pointerId===e.pointerId){const n=this._inside(this._hold.area,e.x,e.y);this._hold.inside&&!n?(this._hold.inside=!1,this._hold.heldMs=0,this._bus.emit(ee.INTENT_HOLD_PROGRESS,{ratio:0,source:this._hold.source})):!this._hold.inside&&n&&(this._hold.inside=!0);return}const t=this._presses.get(e.pointerId);t===void 0||t.state!=="pressed"||this._inside(t.area,e.x,e.y)||(t.state="cancelled")}onPointerCancel(e){this._hold!==void 0&&this._hold.pointerId===e&&(this._bus.emit(ee.INTENT_HOLD_PROGRESS,{ratio:0,source:this._hold.source}),this._hold=void 0),this._presses.delete(e)}onBlur(){this._hold!==void 0&&(this._bus.emit(ee.INTENT_HOLD_PROGRESS,{ratio:0,source:this._hold.source}),this._hold=void 0),this._presses.clear()}onKeyDown(e){var n;if(this.context===Ye.DISABLED)return;const t=this._keymap.find(i=>i.key===e.key);t!==void 0&&((n=e.preventDefault)==null||n.call(e),!e.repeat&&this._isLive(t.intent)&&this._bus.emit(t.intent,{source:"key"}))}tick(e){if(this.context===Ye.DISABLED||this._hold===void 0||!this._hold.inside)return;this._hold.heldMs+=Math.max(0,e);const t=Math.min(this._hold.heldMs,Bc);if(this._hold.heldMs>=Bc){this._hold.confirmed||(this._hold.confirmed=!0,this._isLive(ee.INTENT_CONFIRM_ASCENSION)&&this._bus.emit(ee.INTENT_CONFIRM_ASCENSION,{source:this._hold.source}));return}if(this._isLive(ee.INTENT_HOLD_PROGRESS)){const n=t/Bc;this._bus.emit(ee.INTENT_HOLD_PROGRESS,{ratio:n,source:this._hold.source})}}_isLive(e){return Qg[e][this.context]==="live"}_isSyntheticDup(e,t){return t!==void 0&&t.wasTouch&&!e.wasTouch&&e.timeStamp-t.t<Zg&&Math.abs(e.x-t.x)<=Bu&&Math.abs(e.y-t.y)<=Bu&&e.pointerId!==t.pointerId}_resolveHitArea(e,t){for(let n=this._hitAreas.length-1;n>=0;n-=1){const i=this._hitAreas[n];if(i!==void 0&&this._inside(i,e,t))return i}}_inside(e,t,n){const i=e.bounds;return t>=i.x&&t<i.x+i.width&&n>=i.y&&n<i.y+i.height}_source(e){return e.wasTouch===!0?"touch":"pointer"}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zh="171",t_=0,zu=1,n_=2,cp=1,lp=2,vi=3,Ii=0,ln=1,_n=2,Li=0,nr=1,zt=2,Gu=3,Hu=4,i_=5,gs=100,s_=101,r_=102,o_=103,a_=104,c_=200,l_=201,h_=202,u_=203,Bl=204,kl=205,d_=206,f_=207,p_=208,m_=209,g_=210,__=211,v_=212,x_=213,M_=214,zl=0,Gl=1,Hl=2,Ar=3,Vl=4,Wl=5,Xl=6,Yl=7,hp=0,E_=1,S_=2,Qi=0,up=1,dp=2,fp=3,Gh=4,y_=5,pp=6,mp=7,Vu="attached",b_="detached",gp=300,wr=301,Rr=302,ql=303,$l=304,yc=306,Cr=1e3,ji=1001,uc=1002,hn=1003,_p=1004,oo=1005,Tn=1006,ec=1007,Ai=1008,Ni=1009,vp=1010,xp=1011,Mo=1012,Hh=1013,As=1014,Xn=1015,Di=1016,Vh=1017,Wh=1018,Lr=1020,Mp=35902,Ep=1021,Sp=1022,On=1023,yp=1024,bp=1025,ir=1026,Dr=1027,Xh=1028,Yh=1029,Tp=1030,qh=1031,$h=1033,tc=33776,nc=33777,ic=33778,sc=33779,Kl=35840,jl=35841,Zl=35842,Jl=35843,Ql=36196,eh=37492,th=37496,nh=37808,ih=37809,sh=37810,rh=37811,oh=37812,ah=37813,ch=37814,lh=37815,hh=37816,uh=37817,dh=37818,fh=37819,ph=37820,mh=37821,rc=36492,gh=36494,_h=36495,Ap=36283,vh=36284,xh=36285,Mh=36286,Eo=2300,So=2301,kc=2302,Wu=2400,Xu=2401,Yu=2402,T_=2500,A_=0,wp=1,Eh=2,w_=3200,R_=3201,Rp=0,C_=1,Xi="",Yt="srgb",un="srgb-linear",dc="linear",ht="srgb",Cs=7680,qu=519,L_=512,D_=513,P_=514,Cp=515,I_=516,N_=517,U_=518,O_=519,fc=35044,F_=35048,$u="300 es",wi=2e3,pc=2001;class Br{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ku=1234567;const ho=Math.PI/180,Pr=180/Math.PI;function Yn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Kt[s&255]+Kt[s>>8&255]+Kt[s>>16&255]+Kt[s>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[t&63|128]+Kt[t>>8&255]+"-"+Kt[t>>16&255]+Kt[t>>24&255]+Kt[n&255]+Kt[n>>8&255]+Kt[n>>16&255]+Kt[n>>24&255]).toLowerCase()}function Ke(s,e,t){return Math.max(e,Math.min(t,s))}function Kh(s,e){return(s%e+e)%e}function B_(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function k_(s,e,t){return s!==e?(t-s)/(e-s):0}function uo(s,e,t){return(1-t)*s+t*e}function z_(s,e,t,n){return uo(s,e,1-Math.exp(-t*n))}function G_(s,e=1){return e-Math.abs(Kh(s,e*2)-e)}function H_(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function V_(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function W_(s,e){return s+Math.floor(Math.random()*(e-s+1))}function X_(s,e){return s+Math.random()*(e-s)}function Y_(s){return s*(.5-Math.random())}function q_(s){s!==void 0&&(Ku=s);let e=Ku+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function $_(s){return s*ho}function K_(s){return s*Pr}function j_(s){return(s&s-1)===0&&s!==0}function Z_(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function J_(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Q_(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*h,c*u,c*d,a*l);break;case"YZY":s.set(c*d,a*h,c*u,a*l);break;case"ZXZ":s.set(c*u,c*d,a*h,a*l);break;case"XZX":s.set(a*h,c*g,c*f,a*l);break;case"YXY":s.set(c*f,a*h,c*g,a*l);break;case"ZYZ":s.set(c*g,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Vn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ut(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const oc={DEG2RAD:ho,RAD2DEG:Pr,generateUUID:Yn,clamp:Ke,euclideanModulo:Kh,mapLinear:B_,inverseLerp:k_,lerp:uo,damp:z_,pingpong:G_,smoothstep:H_,smootherstep:V_,randInt:W_,randFloat:X_,randFloatSpread:Y_,seededRandom:q_,degToRad:$_,radToDeg:K_,isPowerOfTwo:j_,ceilPowerOfTwo:Z_,floorPowerOfTwo:J_,setQuaternionFromProperEuler:Q_,normalize:ut,denormalize:Vn};class De{constructor(e=0,t=0){De.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ve{constructor(e,t,n,i,r,o,a,c,l){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l)}set(e,t,n,i,r,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],y=i[1],b=i[4],v=i[7],R=i[2],w=i[5],C=i[8];return r[0]=o*_+a*y+c*R,r[3]=o*m+a*b+c*w,r[6]=o*p+a*v+c*C,r[1]=l*_+h*y+u*R,r[4]=l*m+h*b+u*w,r[7]=l*p+h*v+u*C,r[2]=d*_+f*y+g*R,r[5]=d*m+f*b+g*w,r[8]=d*p+f*v+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,g=t*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(i*l-h*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(h*t-i*c)*_,e[5]=(i*r-a*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(zc.makeScale(e,t)),this}rotate(e){return this.premultiply(zc.makeRotation(-e)),this}translate(e,t){return this.premultiply(zc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const zc=new Ve;function Lp(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function yo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function e0(){const s=yo("canvas");return s.style.display="block",s}const ju={};function Zs(s){s in ju||(ju[s]=!0,console.warn(s))}function t0(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function n0(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function i0(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Zu=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ju=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function s0(){const s={enabled:!0,workingColorSpace:un,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ht&&(i.r=Pi(i.r),i.g=Pi(i.g),i.b=Pi(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ht&&(i.r=sr(i.r),i.g=sr(i.g),i.b=sr(i.b))),i},fromWorkingColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},toWorkingColorSpace:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Xi?dc:this.spaces[i].transfer},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[un]:{primaries:e,whitePoint:n,transfer:dc,toXYZ:Zu,fromXYZ:Ju,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Yt},outputColorSpaceConfig:{drawingBufferColorSpace:Yt}},[Yt]:{primaries:e,whitePoint:n,transfer:ht,toXYZ:Zu,fromXYZ:Ju,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Yt}}}),s}const Ze=s0();function Pi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function sr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ls;class r0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ls===void 0&&(Ls=yo("canvas")),Ls.width=e.width,Ls.height=e.height;const n=Ls.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ls}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=yo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Pi(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Pi(t[n]/255)*255):t[n]=Pi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let o0=0;class Dp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:o0++}),this.uuid=Yn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Gc(i[o].image)):r.push(Gc(i[o]))}else r=Gc(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Gc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?r0.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let a0=0;class Gt extends Br{constructor(e=Gt.DEFAULT_IMAGE,t=Gt.DEFAULT_MAPPING,n=ji,i=ji,r=Tn,o=Ai,a=On,c=Ni,l=Gt.DEFAULT_ANISOTROPY,h=Xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:a0++}),this.uuid=Yn(),this.name="",this.source=new Dp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Cr:e.x=e.x-Math.floor(e.x);break;case ji:e.x=e.x<0?0:1;break;case uc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Cr:e.y=e.y-Math.floor(e.y);break;case ji:e.y=e.y<0?0:1;break;case uc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Gt.DEFAULT_IMAGE=null;Gt.DEFAULT_MAPPING=gp;Gt.DEFAULT_ANISOTROPY=1;class ot{constructor(e=0,t=0,n=0,i=1){ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(l+1)/2,v=(f+1)/2,R=(p+1)/2,w=(h+d)/4,C=(u+_)/4,L=(g+m)/4;return b>v&&b>R?b<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(b),i=w/n,r=C/n):v>R?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=w/i,r=L/i):R<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(R),n=C/r,i=L/r),this.set(n,i,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-_)/y,this.z=(d-h)/y,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class c0 extends Br{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Gt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Dp(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qn extends c0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Pp extends Gt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=hn,this.minFilter=hn,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class l0 extends Gt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=hn,this.minFilter=hn,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class is{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(u!==_||c!==d||l!==f||h!==g){let m=1-a;const p=c*d+l*f+h*g+u*_,y=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const R=Math.sqrt(b),w=Math.atan2(R,p*y);m=Math.sin(m*w)/R,a=Math.sin(a*w)/R}const v=a*y;if(c=c*m+d*v,l=l*m+f*v,h=h*m+g*v,u=u*m+_*v,m===1-a){const R=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=R,l*=R,h*=R,u*=R}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-a*f,e[t+2]=l*g+h*f+a*d-c*u,e[t+3]=h*g-a*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),d=c(n/2),f=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Qu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Qu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=i+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Hc.copy(this).projectOnVector(e),this.sub(Hc)}reflect(e){return this.sub(Hc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Hc=new D,Qu=new is;class An{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(kn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(kn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,kn):kn.fromBufferAttribute(r,o),kn.applyMatrix4(e.matrixWorld),this.expandByPoint(kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ma.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ma.copy(n.boundingBox)),Ma.applyMatrix4(e.matrixWorld),this.union(Ma)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,kn),kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qr),Ea.subVectors(this.max,qr),Ds.subVectors(e.a,qr),Ps.subVectors(e.b,qr),Is.subVectors(e.c,qr),Ui.subVectors(Ps,Ds),Oi.subVectors(Is,Ps),os.subVectors(Ds,Is);let t=[0,-Ui.z,Ui.y,0,-Oi.z,Oi.y,0,-os.z,os.y,Ui.z,0,-Ui.x,Oi.z,0,-Oi.x,os.z,0,-os.x,-Ui.y,Ui.x,0,-Oi.y,Oi.x,0,-os.y,os.x,0];return!Vc(t,Ds,Ps,Is,Ea)||(t=[1,0,0,0,1,0,0,0,1],!Vc(t,Ds,Ps,Is,Ea))?!1:(Sa.crossVectors(Ui,Oi),t=[Sa.x,Sa.y,Sa.z],Vc(t,Ds,Ps,Is,Ea))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const di=[new D,new D,new D,new D,new D,new D,new D,new D],kn=new D,Ma=new An,Ds=new D,Ps=new D,Is=new D,Ui=new D,Oi=new D,os=new D,qr=new D,Ea=new D,Sa=new D,as=new D;function Vc(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){as.fromArray(s,r);const a=i.x*Math.abs(as.x)+i.y*Math.abs(as.y)+i.z*Math.abs(as.z),c=e.dot(as),l=t.dot(as),h=n.dot(as);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const h0=new An,$r=new D,Wc=new D;class ci{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):h0.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$r.subVectors(e,this.center);const t=$r.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector($r,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($r.copy(e.center).add(Wc)),this.expandByPoint($r.copy(e.center).sub(Wc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fi=new D,Xc=new D,ya=new D,Fi=new D,Yc=new D,ba=new D,qc=new D;class bc{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fi.copy(this.origin).addScaledVector(this.direction,t),fi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Xc.copy(e).add(t).multiplyScalar(.5),ya.copy(t).sub(e).normalize(),Fi.copy(this.origin).sub(Xc);const r=e.distanceTo(t)*.5,o=-this.direction.dot(ya),a=Fi.dot(this.direction),c=-Fi.dot(ya),l=Fi.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Xc).addScaledVector(ya,d),f}intersectSphere(e,t){fi.subVectors(e.center,this.origin);const n=fi.dot(this.direction),i=fi.dot(fi)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,fi)!==null}intersectTriangle(e,t,n,i,r){Yc.subVectors(t,e),ba.subVectors(n,e),qc.crossVectors(Yc,ba);let o=this.direction.dot(qc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Fi.subVectors(this.origin,e);const c=a*this.direction.dot(ba.crossVectors(Fi,ba));if(c<0)return null;const l=a*this.direction.dot(Yc.cross(Fi));if(l<0||c+l>o)return null;const h=-a*Fi.dot(qc);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ze{constructor(e,t,n,i,r,o,a,c,l,h,u,d,f,g,_,m){ze.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l,h,u,d,f,g,_,m)}set(e,t,n,i,r,o,a,c,l,h,u,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ze().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ns.setFromMatrixColumn(e,0).length(),r=1/Ns.setFromMatrixColumn(e,1).length(),o=1/Ns.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,f=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*h,f=c*u,g=l*h,_=l*u;t[0]=d+_*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*h,f=c*u,g=l*h,_=l*u;t[0]=d-_*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*h,f=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+_,t[1]=c*u,t[5]=_*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=_-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+_,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(u0,e,d0)}lookAt(e,t,n){const i=this.elements;return En.subVectors(e,t),En.lengthSq()===0&&(En.z=1),En.normalize(),Bi.crossVectors(n,En),Bi.lengthSq()===0&&(Math.abs(n.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),Bi.crossVectors(n,En)),Bi.normalize(),Ta.crossVectors(En,Bi),i[0]=Bi.x,i[4]=Ta.x,i[8]=En.x,i[1]=Bi.y,i[5]=Ta.y,i[9]=En.y,i[2]=Bi.z,i[6]=Ta.z,i[10]=En.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],y=n[3],b=n[7],v=n[11],R=n[15],w=i[0],C=i[4],L=i[8],T=i[12],M=i[1],P=i[5],H=i[9],G=i[13],$=i[2],Q=i[6],Y=i[10],ie=i[14],W=i[3],ue=i[7],_e=i[11],Ae=i[15];return r[0]=o*w+a*M+c*$+l*W,r[4]=o*C+a*P+c*Q+l*ue,r[8]=o*L+a*H+c*Y+l*_e,r[12]=o*T+a*G+c*ie+l*Ae,r[1]=h*w+u*M+d*$+f*W,r[5]=h*C+u*P+d*Q+f*ue,r[9]=h*L+u*H+d*Y+f*_e,r[13]=h*T+u*G+d*ie+f*Ae,r[2]=g*w+_*M+m*$+p*W,r[6]=g*C+_*P+m*Q+p*ue,r[10]=g*L+_*H+m*Y+p*_e,r[14]=g*T+_*G+m*ie+p*Ae,r[3]=y*w+b*M+v*$+R*W,r[7]=y*C+b*P+v*Q+R*ue,r[11]=y*L+b*H+v*Y+R*_e,r[15]=y*T+b*G+v*ie+R*Ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*c*u-i*l*u-r*a*d+n*l*d+i*a*f-n*c*f)+_*(+t*c*f-t*l*d+r*o*d-i*o*f+i*l*h-r*c*h)+m*(+t*l*u-t*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+p*(-i*a*h-t*c*u+t*a*d+i*o*u-n*o*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],y=u*m*l-_*d*l+_*c*f-a*m*f-u*c*p+a*d*p,b=g*d*l-h*m*l-g*c*f+o*m*f+h*c*p-o*d*p,v=h*_*l-g*u*l+g*a*f-o*_*f-h*a*p+o*u*p,R=g*u*c-h*_*c-g*a*d+o*_*d+h*a*m-o*u*m,w=t*y+n*b+i*v+r*R;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/w;return e[0]=y*C,e[1]=(_*d*r-u*m*r-_*i*f+n*m*f+u*i*p-n*d*p)*C,e[2]=(a*m*r-_*c*r+_*i*l-n*m*l-a*i*p+n*c*p)*C,e[3]=(u*c*r-a*d*r-u*i*l+n*d*l+a*i*f-n*c*f)*C,e[4]=b*C,e[5]=(h*m*r-g*d*r+g*i*f-t*m*f-h*i*p+t*d*p)*C,e[6]=(g*c*r-o*m*r-g*i*l+t*m*l+o*i*p-t*c*p)*C,e[7]=(o*d*r-h*c*r+h*i*l-t*d*l-o*i*f+t*c*f)*C,e[8]=v*C,e[9]=(g*u*r-h*_*r-g*n*f+t*_*f+h*n*p-t*u*p)*C,e[10]=(o*_*r-g*a*r+g*n*l-t*_*l-o*n*p+t*a*p)*C,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*f-t*a*f)*C,e[12]=R*C,e[13]=(h*_*i-g*u*i+g*n*d-t*_*d-h*n*m+t*u*m)*C,e[14]=(g*a*i-o*_*i-g*n*c+t*_*c+o*n*m-t*a*m)*C,e[15]=(o*u*i-h*a*i+h*n*c-t*u*c-o*n*d+t*a*d)*C,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,g=r*u,_=o*h,m=o*u,p=a*u,y=c*l,b=c*h,v=c*u,R=n.x,w=n.y,C=n.z;return i[0]=(1-(_+p))*R,i[1]=(f+v)*R,i[2]=(g-b)*R,i[3]=0,i[4]=(f-v)*w,i[5]=(1-(d+p))*w,i[6]=(m+y)*w,i[7]=0,i[8]=(g+b)*C,i[9]=(m-y)*C,i[10]=(1-(d+_))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Ns.set(i[0],i[1],i[2]).length();const o=Ns.set(i[4],i[5],i[6]).length(),a=Ns.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],zn.copy(this);const l=1/r,h=1/o,u=1/a;return zn.elements[0]*=l,zn.elements[1]*=l,zn.elements[2]*=l,zn.elements[4]*=h,zn.elements[5]*=h,zn.elements[6]*=h,zn.elements[8]*=u,zn.elements[9]*=u,zn.elements[10]*=u,t.setFromRotationMatrix(zn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=wi){const c=this.elements,l=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let f,g;if(a===wi)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===pc)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=wi){const c=this.elements,l=1/(t-e),h=1/(n-i),u=1/(o-r),d=(t+e)*l,f=(n+i)*h;let g,_;if(a===wi)g=(o+r)*u,_=-2*u;else if(a===pc)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ns=new D,zn=new ze,u0=new D(0,0,0),d0=new D(1,1,1),Bi=new D,Ta=new D,En=new D,ed=new ze,td=new is;class ai{constructor(e=0,t=0,n=0,i=ai.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ke(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ed.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ed,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return td.setFromEuler(this),this.setFromQuaternion(td,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ai.DEFAULT_ORDER="XYZ";class jh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let f0=0;const nd=new D,Us=new is,pi=new ze,Aa=new D,Kr=new D,p0=new D,m0=new is,id=new D(1,0,0),sd=new D(0,1,0),rd=new D(0,0,1),od={type:"added"},g0={type:"removed"},Os={type:"childadded",child:null},$c={type:"childremoved",child:null};class xt extends Br{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:f0++}),this.uuid=Yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xt.DEFAULT_UP.clone();const e=new D,t=new ai,n=new is,i=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ze},normalMatrix:{value:new Ve}}),this.matrix=new ze,this.matrixWorld=new ze,this.matrixAutoUpdate=xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Us.setFromAxisAngle(e,t),this.quaternion.multiply(Us),this}rotateOnWorldAxis(e,t){return Us.setFromAxisAngle(e,t),this.quaternion.premultiply(Us),this}rotateX(e){return this.rotateOnAxis(id,e)}rotateY(e){return this.rotateOnAxis(sd,e)}rotateZ(e){return this.rotateOnAxis(rd,e)}translateOnAxis(e,t){return nd.copy(e).applyQuaternion(this.quaternion),this.position.add(nd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(id,e)}translateY(e){return this.translateOnAxis(sd,e)}translateZ(e){return this.translateOnAxis(rd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Aa.copy(e):Aa.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(Kr,Aa,this.up):pi.lookAt(Aa,Kr,this.up),this.quaternion.setFromRotationMatrix(pi),i&&(pi.extractRotation(i.matrixWorld),Us.setFromRotationMatrix(pi),this.quaternion.premultiply(Us.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(od),Os.child=e,this.dispatchEvent(Os),Os.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(g0),$c.child=e,this.dispatchEvent($c),$c.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(od),Os.child=e,this.dispatchEvent(Os),Os.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,e,p0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,m0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}xt.DEFAULT_UP=new D(0,1,0);xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Gn=new D,mi=new D,Kc=new D,gi=new D,Fs=new D,Bs=new D,ad=new D,jc=new D,Zc=new D,Jc=new D,Qc=new ot,el=new ot,tl=new ot;class Wn{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Gn.subVectors(e,t),i.cross(Gn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Gn.subVectors(i,t),mi.subVectors(n,t),Kc.subVectors(e,t);const o=Gn.dot(Gn),a=Gn.dot(mi),c=Gn.dot(Kc),l=mi.dot(mi),h=mi.dot(Kc),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,gi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,gi.x),c.addScaledVector(o,gi.y),c.addScaledVector(a,gi.z),c)}static getInterpolatedAttribute(e,t,n,i,r,o){return Qc.setScalar(0),el.setScalar(0),tl.setScalar(0),Qc.fromBufferAttribute(e,t),el.fromBufferAttribute(e,n),tl.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Qc,r.x),o.addScaledVector(el,r.y),o.addScaledVector(tl,r.z),o}static isFrontFacing(e,t,n,i){return Gn.subVectors(n,t),mi.subVectors(e,t),Gn.cross(mi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gn.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),Gn.cross(mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Wn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Wn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;Fs.subVectors(i,n),Bs.subVectors(r,n),jc.subVectors(e,n);const c=Fs.dot(jc),l=Bs.dot(jc);if(c<=0&&l<=0)return t.copy(n);Zc.subVectors(e,i);const h=Fs.dot(Zc),u=Bs.dot(Zc);if(h>=0&&u<=h)return t.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Fs,o);Jc.subVectors(e,r);const f=Fs.dot(Jc),g=Bs.dot(Jc);if(g>=0&&f<=g)return t.copy(r);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Bs,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return ad.subVectors(r,i),a=(u-h)/(u-h+(f-g)),t.copy(i).addScaledVector(ad,a);const p=1/(m+_+d);return o=_*p,a=d*p,t.copy(n).addScaledVector(Fs,o).addScaledVector(Bs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ip={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ki={h:0,s:0,l:0},wa={h:0,s:0,l:0};function nl(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Te{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ze.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ze.workingColorSpace){if(e=Kh(e,1),t=Ke(t,0,1),n=Ke(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=nl(o,r,e+1/3),this.g=nl(o,r,e),this.b=nl(o,r,e-1/3)}return Ze.toWorkingColorSpace(this,i),this}setStyle(e,t=Yt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Yt){const n=Ip[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pi(e.r),this.g=Pi(e.g),this.b=Pi(e.b),this}copyLinearToSRGB(e){return this.r=sr(e.r),this.g=sr(e.g),this.b=sr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yt){return Ze.fromWorkingColorSpace(jt.copy(this),e),Math.round(Ke(jt.r*255,0,255))*65536+Math.round(Ke(jt.g*255,0,255))*256+Math.round(Ke(jt.b*255,0,255))}getHexString(e=Yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.fromWorkingColorSpace(jt.copy(this),t);const n=jt.r,i=jt.g,r=jt.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(jt.copy(this),t),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=Yt){Ze.fromWorkingColorSpace(jt.copy(this),e);const t=jt.r,n=jt.g,i=jt.b;return e!==Yt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ki),this.setHSL(ki.h+e,ki.s+t,ki.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ki),e.getHSL(wa);const n=uo(ki.h,wa.h,t),i=uo(ki.s,wa.s,t),r=uo(ki.l,wa.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jt=new Te;Te.NAMES=Ip;let _0=0;class oi extends Br{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_0++}),this.uuid=Yn(),this.name="",this.type="Material",this.blending=nr,this.side=Ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bl,this.blendDst=kl,this.blendEquation=gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=Ar,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cs,this.stencilZFail=Cs,this.stencilZPass=Cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==nr&&(n.blending=this.blending),this.side!==Ii&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Bl&&(n.blendSrc=this.blendSrc),this.blendDst!==kl&&(n.blendDst=this.blendDst),this.blendEquation!==gs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ar&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Cs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Cs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Cs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Pt extends oi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.combine=hp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Nt=new D,Ra=new De;class Tt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=fc,this.updateRanges=[],this.gpuType=Xn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ra.fromBufferAttribute(this,t),Ra.applyMatrix3(e),this.setXY(t,Ra.x,Ra.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix3(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Vn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ut(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Vn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Vn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Vn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Vn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),i=ut(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),i=ut(i,this.array),r=ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fc&&(e.usage=this.usage),e}}class Np extends Tt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Up extends Tt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ft extends Tt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let v0=0;const Dn=new ze,il=new xt,ks=new D,Sn=new An,jr=new An,kt=new D;class At extends Br{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:v0++}),this.uuid=Yn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Lp(e)?Up:Np)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ve().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,t,n){return Dn.makeTranslation(e,t,n),this.applyMatrix4(Dn),this}scale(e,t,n){return Dn.makeScale(e,t,n),this.applyMatrix4(Dn),this}lookAt(e){return il.lookAt(e),il.updateMatrix(),this.applyMatrix4(il.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ks).negate(),this.translate(ks.x,ks.y,ks.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ft(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new An);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Sn.setFromBufferAttribute(r),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ci);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(Sn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];jr.setFromBufferAttribute(a),this.morphTargetsRelative?(kt.addVectors(Sn.min,jr.min),Sn.expandByPoint(kt),kt.addVectors(Sn.max,jr.max),Sn.expandByPoint(kt)):(Sn.expandByPoint(jr.min),Sn.expandByPoint(jr.max))}Sn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)kt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(kt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)kt.fromBufferAttribute(a,l),c&&(ks.fromBufferAttribute(e,l),kt.add(ks)),i=Math.max(i,n.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let L=0;L<n.count;L++)a[L]=new D,c[L]=new D;const l=new D,h=new D,u=new D,d=new De,f=new De,g=new De,_=new D,m=new D;function p(L,T,M){l.fromBufferAttribute(n,L),h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,L),f.fromBufferAttribute(r,T),g.fromBufferAttribute(r,M),h.sub(l),u.sub(l),f.sub(d),g.sub(d);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(P),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),a[L].add(_),a[T].add(_),a[M].add(_),c[L].add(m),c[T].add(m),c[M].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let L=0,T=y.length;L<T;++L){const M=y[L],P=M.start,H=M.count;for(let G=P,$=P+H;G<$;G+=3)p(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const b=new D,v=new D,R=new D,w=new D;function C(L){R.fromBufferAttribute(i,L),w.copy(R);const T=a[L];b.copy(T),b.sub(R.multiplyScalar(R.dot(T))).normalize(),v.crossVectors(w,T);const P=v.dot(c[L])<0?-1:1;o.setXYZW(L,b.x,b.y,b.z,P)}for(let L=0,T=y.length;L<T;++L){const M=y[L],P=M.start,H=M.count;for(let G=P,$=P+H;G<$;G+=3)C(e.getX(G+0)),C(e.getX(G+1)),C(e.getX(G+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Tt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new D,r=new D,o=new D,a=new D,c=new D,l=new D,h=new D,u=new D;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)kt.fromBufferAttribute(e,t),kt.normalize(),e.setXYZ(t,kt.x,kt.y,kt.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new Tt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new At,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cd=new ze,cs=new bc,Ca=new ci,ld=new D,La=new D,Da=new D,Pa=new D,sl=new D,Ia=new D,hd=new D,Na=new D;class Ne extends xt{constructor(e=new At,t=new Pt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){Ia.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(sl.fromBufferAttribute(u,e),o?Ia.addScaledVector(sl,h):Ia.addScaledVector(sl.sub(t),h))}t.add(Ia)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ca.copy(n.boundingSphere),Ca.applyMatrix4(r),cs.copy(e.ray).recast(e.near),!(Ca.containsPoint(cs.origin)===!1&&(cs.intersectSphere(Ca,ld)===null||cs.origin.distanceToSquared(ld)>(e.far-e.near)**2))&&(cd.copy(r).invert(),cs.copy(e.ray).applyMatrix4(cd),!(n.boundingBox!==null&&cs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,cs)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),b=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=y,R=b;v<R;v+=3){const w=a.getX(v),C=a.getX(v+1),L=a.getX(v+2);i=Ua(this,p,e,n,l,h,u,w,C,L),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const y=a.getX(m),b=a.getX(m+1),v=a.getX(m+2);i=Ua(this,o,e,n,l,h,u,y,b,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),b=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let v=y,R=b;v<R;v+=3){const w=v,C=v+1,L=v+2;i=Ua(this,p,e,n,l,h,u,w,C,L),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const y=m,b=m+1,v=m+2;i=Ua(this,o,e,n,l,h,u,y,b,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function x0(s,e,t,n,i,r,o,a){let c;if(e.side===ln?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===Ii,a),c===null)return null;Na.copy(a),Na.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(Na);return l<t.near||l>t.far?null:{distance:l,point:Na.clone(),object:s}}function Ua(s,e,t,n,i,r,o,a,c,l){s.getVertexPosition(a,La),s.getVertexPosition(c,Da),s.getVertexPosition(l,Pa);const h=x0(s,e,t,n,La,Da,Pa,hd);if(h){const u=new D;Wn.getBarycoord(hd,La,Da,Pa,u),i&&(h.uv=Wn.getInterpolatedAttribute(i,a,c,l,u,new De)),r&&(h.uv1=Wn.getInterpolatedAttribute(r,a,c,l,u,new De)),o&&(h.normal=Wn.getInterpolatedAttribute(o,a,c,l,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new D,materialIndex:0};Wn.getNormal(La,Da,Pa,d.normal),h.face=d,h.barycoord=u}return h}class Xt extends At{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new ft(l,3)),this.setAttribute("normal",new ft(h,3)),this.setAttribute("uv",new ft(u,2));function g(_,m,p,y,b,v,R,w,C,L,T){const M=v/C,P=R/L,H=v/2,G=R/2,$=w/2,Q=C+1,Y=L+1;let ie=0,W=0;const ue=new D;for(let _e=0;_e<Y;_e++){const Ae=_e*P-G;for(let qe=0;qe<Q;qe++){const gt=qe*M-H;ue[_]=gt*y,ue[m]=Ae*b,ue[p]=$,l.push(ue.x,ue.y,ue.z),ue[_]=0,ue[m]=0,ue[p]=w>0?1:-1,h.push(ue.x,ue.y,ue.z),u.push(qe/C),u.push(1-_e/L),ie+=1}}for(let _e=0;_e<L;_e++)for(let Ae=0;Ae<C;Ae++){const qe=d+Ae+Q*_e,gt=d+Ae+Q*(_e+1),j=d+(Ae+1)+Q*(_e+1),ae=d+(Ae+1)+Q*_e;c.push(qe,gt,ae),c.push(gt,j,ae),W+=6}a.addGroup(f,W,T),f+=W,d+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ir(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function sn(s){const e={};for(let t=0;t<s.length;t++){const n=Ir(s[t]);for(const i in n)e[i]=n[i]}return e}function M0(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Op(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const bo={clone:Ir,merge:sn};var E0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,S0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class en extends oi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=E0,this.fragmentShader=S0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ir(e.uniforms),this.uniformsGroups=M0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Fp extends xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ze,this.projectionMatrix=new ze,this.projectionMatrixInverse=new ze,this.coordinateSystem=wi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const zi=new D,ud=new De,dd=new De;class cn extends Fp{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Pr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ho*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Pr*2*Math.atan(Math.tan(ho*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(zi.x,zi.y).multiplyScalar(-e/zi.z),zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zi.x,zi.y).multiplyScalar(-e/zi.z)}getViewSize(e,t){return this.getViewBounds(e,ud,dd),t.subVectors(dd,ud)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ho*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const zs=-90,Gs=1;class y0 extends xt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new cn(zs,Gs,e,t);i.layers=this.layers,this.add(i);const r=new cn(zs,Gs,e,t);r.layers=this.layers,this.add(r);const o=new cn(zs,Gs,e,t);o.layers=this.layers,this.add(o);const a=new cn(zs,Gs,e,t);a.layers=this.layers,this.add(a);const c=new cn(zs,Gs,e,t);c.layers=this.layers,this.add(c);const l=new cn(zs,Gs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===wi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===pc)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Bp extends Gt{constructor(e,t,n,i,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:wr,super(e,t,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class b0 extends qn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Bp(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Tn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Xt(5,5,5),r=new en({name:"CubemapFromEquirect",uniforms:Ir(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ln,blending:Li});r.uniforms.tEquirect.value=t;const o=new Ne(i,r),a=t.minFilter;return t.minFilter===Ai&&(t.minFilter=Tn),new y0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}class Zh{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Te(e),this.near=t,this.far=n}clone(){return new Zh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class kp extends xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ai,this.environmentIntensity=1,this.environmentRotation=new ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class T0{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=fc,this.updateRanges=[],this.version=0,this.uuid=Yn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const nn=new D;class Jh{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Vn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ut(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Vn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Vn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Vn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Vn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),i=ut(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),i=ut(i,this.array),r=ut(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Tt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Jh(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const fd=new D,pd=new ot,md=new ot,A0=new D,gd=new ze,Oa=new D,rl=new ci,_d=new ze,ol=new bc;class w0 extends Ne{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Vu,this.bindMatrix=new ze,this.bindMatrixInverse=new ze,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new An),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Oa),this.boundingBox.expandByPoint(Oa)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ci),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Oa),this.boundingSphere.expandByPoint(Oa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),rl.copy(this.boundingSphere),rl.applyMatrix4(i),e.ray.intersectsSphere(rl)!==!1&&(_d.copy(i).invert(),ol.copy(e.ray).applyMatrix4(_d),!(this.boundingBox!==null&&ol.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ol)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ot,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Vu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===b_?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;pd.fromBufferAttribute(i.attributes.skinIndex,e),md.fromBufferAttribute(i.attributes.skinWeight,e),fd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=md.getComponent(r);if(o!==0){const a=pd.getComponent(r);gd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(A0.copy(fd).applyMatrix4(gd),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class zp extends xt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Gp extends Gt{constructor(e=null,t=1,n=1,i,r,o,a,c,l=hn,h=hn,u,d){super(null,o,a,c,l,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const vd=new ze,R0=new ze;class Qh{constructor(e=[],t=[]){this.uuid=Yn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ze)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ze;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:R0;vd.multiplyMatrices(a,t[r]),vd.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Qh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Gp(t,e,e,On,Xn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new zp),this.bones.push(o),this.boneInverses.push(new ze().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Sh extends Tt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Hs=new ze,xd=new ze,Fa=[],Md=new An,C0=new ze,Zr=new Ne,Jr=new ci;class yh extends Ne{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Sh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,C0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new An),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Hs),Md.copy(e.boundingBox).applyMatrix4(Hs),this.boundingBox.union(Md)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ci),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Hs),Jr.copy(e.boundingSphere).applyMatrix4(Hs),this.boundingSphere.union(Jr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Zr.geometry=this.geometry,Zr.material=this.material,Zr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Jr.copy(this.boundingSphere),Jr.applyMatrix4(n),e.ray.intersectsSphere(Jr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Hs),xd.multiplyMatrices(n,Hs),Zr.matrixWorld=xd,Zr.raycast(e,Fa);for(let o=0,a=Fa.length;o<a;o++){const c=Fa[o];c.instanceId=r,c.object=this,t.push(c)}Fa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Sh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Gp(new Float32Array(i*this.count),i,this.count,Xh,Xn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=i*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const al=new D,L0=new D,D0=new Ve;class fs{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=al.subVectors(n,t).cross(L0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(al),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||D0.getNormalMatrix(e),i=this.coplanarPoint(al).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ls=new ci,Ba=new D;class eu{constructor(e=new fs,t=new fs,n=new fs,i=new fs,r=new fs,o=new fs){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=wi){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],y=i[13],b=i[14],v=i[15];if(n[0].setComponents(c-r,d-l,m-f,v-p).normalize(),n[1].setComponents(c+r,d+l,m+f,v+p).normalize(),n[2].setComponents(c+o,d+h,m+g,v+y).normalize(),n[3].setComponents(c-o,d-h,m-g,v-y).normalize(),n[4].setComponents(c-a,d-u,m-_,v-b).normalize(),t===wi)n[5].setComponents(c+a,d+u,m+_,v+b).normalize();else if(t===pc)n[5].setComponents(a,u,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ls.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ls.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ls)}intersectsSprite(e){return ls.center.set(0,0,0),ls.radius=.7071067811865476,ls.applyMatrix4(e.matrixWorld),this.intersectsSphere(ls)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ba.x=i.normal.x>0?e.max.x:e.min.x,Ba.y=i.normal.y>0?e.max.y:e.min.y,Ba.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ba)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Hp extends oi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const mc=new D,gc=new D,Ed=new ze,Qr=new bc,ka=new ci,cl=new D,Sd=new D;class tu extends xt{constructor(e=new At,t=new Hp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)mc.fromBufferAttribute(t,i-1),gc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=mc.distanceTo(gc);e.setAttribute("lineDistance",new ft(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ka.copy(n.boundingSphere),ka.applyMatrix4(i),ka.radius+=r,e.ray.intersectsSphere(ka)===!1)return;Ed.copy(i).invert(),Qr.copy(e.ray).applyMatrix4(Ed);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=h.getX(_),y=h.getX(_+1),b=za(this,e,Qr,c,p,y);b&&t.push(b)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),p=za(this,e,Qr,c,_,m);p&&t.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=za(this,e,Qr,c,_,_+1);p&&t.push(p)}if(this.isLineLoop){const _=za(this,e,Qr,c,g-1,f);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function za(s,e,t,n,i,r){const o=s.geometry.attributes.position;if(mc.fromBufferAttribute(o,i),gc.fromBufferAttribute(o,r),t.distanceSqToSegment(mc,gc,cl,Sd)>n)return;cl.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(cl);if(!(c<e.near||c>e.far))return{distance:c,point:Sd.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const yd=new D,bd=new D;class P0 extends tu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)yd.fromBufferAttribute(t,i),bd.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+yd.distanceTo(bd);e.setAttribute("lineDistance",new ft(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class I0 extends tu{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class _s extends oi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Td=new ze,bh=new bc,Ga=new ci,Ha=new D;class Js extends xt{constructor(e=new At,t=new _s){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ga.copy(n.boundingSphere),Ga.applyMatrix4(i),Ga.radius+=r,e.ray.intersectsSphere(Ga)===!1)return;Td.copy(i).invert(),bh.copy(e.ray).applyMatrix4(Td);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,_=f;g<_;g++){const m=l.getX(g);Ha.fromBufferAttribute(u,m),Ad(Ha,m,c,i,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,_=f;g<_;g++)Ha.fromBufferAttribute(u,g),Ad(Ha,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ad(s,e,t,n,i,r,o){const a=bh.distanceSqToPoint(s);if(a<t){const c=new D;bh.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class an extends xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Vp extends Gt{constructor(e,t,n,i,r,o,a,c,l,h=ir){if(h!==ir&&h!==Dr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ir&&(n=As),n===void 0&&h===Dr&&(n=Lr),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:hn,this.minFilter=c!==void 0?c:hn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class nu extends At{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],o=[],a=[],c=[],l=new D,h=new De;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=n+u/t*i;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ft(o,3)),this.setAttribute("normal",new ft(a,3)),this.setAttribute("uv",new ft(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nu(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Qs extends At{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;y(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new ft(u,3)),this.setAttribute("normal",new ft(d,3)),this.setAttribute("uv",new ft(f,2));function y(){const v=new D,R=new D;let w=0;const C=(t-e)/n;for(let L=0;L<=r;L++){const T=[],M=L/r,P=M*(t-e)+e;for(let H=0;H<=i;H++){const G=H/i,$=G*c+a,Q=Math.sin($),Y=Math.cos($);R.x=P*Q,R.y=-M*n+m,R.z=P*Y,u.push(R.x,R.y,R.z),v.set(Q,C,Y).normalize(),d.push(v.x,v.y,v.z),f.push(G,1-M),T.push(g++)}_.push(T)}for(let L=0;L<i;L++)for(let T=0;T<r;T++){const M=_[T][L],P=_[T+1][L],H=_[T+1][L+1],G=_[T][L+1];(e>0||T!==0)&&(h.push(M,P,G),w+=3),(t>0||T!==r-1)&&(h.push(P,H,G),w+=3)}l.addGroup(p,w,0),p+=w}function b(v){const R=g,w=new De,C=new D;let L=0;const T=v===!0?e:t,M=v===!0?1:-1;for(let H=1;H<=i;H++)u.push(0,m*M,0),d.push(0,M,0),f.push(.5,.5),g++;const P=g;for(let H=0;H<=i;H++){const $=H/i*c+a,Q=Math.cos($),Y=Math.sin($);C.x=T*Y,C.y=m*M,C.z=T*Q,u.push(C.x,C.y,C.z),d.push(0,M,0),w.x=Q*.5+.5,w.y=Y*.5*M+.5,f.push(w.x,w.y),g++}for(let H=0;H<i;H++){const G=R+H,$=P+H;v===!0?h.push($,$+1,G):h.push($+1,$,G),L+=3}l.addGroup(p,L,v===!0?1:2),p+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qs(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Tc extends At{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],o=[];a(i),l(n),h(),this.setAttribute("position",new ft(r,3)),this.setAttribute("normal",new ft(r.slice(),3)),this.setAttribute("uv",new ft(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const b=new D,v=new D,R=new D;for(let w=0;w<t.length;w+=3)f(t[w+0],b),f(t[w+1],v),f(t[w+2],R),c(b,v,R,y)}function c(y,b,v,R){const w=R+1,C=[];for(let L=0;L<=w;L++){C[L]=[];const T=y.clone().lerp(v,L/w),M=b.clone().lerp(v,L/w),P=w-L;for(let H=0;H<=P;H++)H===0&&L===w?C[L][H]=T:C[L][H]=T.clone().lerp(M,H/P)}for(let L=0;L<w;L++)for(let T=0;T<2*(w-L)-1;T++){const M=Math.floor(T/2);T%2===0?(d(C[L][M+1]),d(C[L+1][M]),d(C[L][M])):(d(C[L][M+1]),d(C[L+1][M+1]),d(C[L+1][M]))}}function l(y){const b=new D;for(let v=0;v<r.length;v+=3)b.x=r[v+0],b.y=r[v+1],b.z=r[v+2],b.normalize().multiplyScalar(y),r[v+0]=b.x,r[v+1]=b.y,r[v+2]=b.z}function h(){const y=new D;for(let b=0;b<r.length;b+=3){y.x=r[b+0],y.y=r[b+1],y.z=r[b+2];const v=m(y)/2/Math.PI+.5,R=p(y)/Math.PI+.5;o.push(v,1-R)}g(),u()}function u(){for(let y=0;y<o.length;y+=6){const b=o[y+0],v=o[y+2],R=o[y+4],w=Math.max(b,v,R),C=Math.min(b,v,R);w>.9&&C<.1&&(b<.2&&(o[y+0]+=1),v<.2&&(o[y+2]+=1),R<.2&&(o[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,b){const v=y*3;b.x=e[v+0],b.y=e[v+1],b.z=e[v+2]}function g(){const y=new D,b=new D,v=new D,R=new D,w=new De,C=new De,L=new De;for(let T=0,M=0;T<r.length;T+=9,M+=6){y.set(r[T+0],r[T+1],r[T+2]),b.set(r[T+3],r[T+4],r[T+5]),v.set(r[T+6],r[T+7],r[T+8]),w.set(o[M+0],o[M+1]),C.set(o[M+2],o[M+3]),L.set(o[M+4],o[M+5]),R.copy(y).add(b).add(v).divideScalar(3);const P=m(R);_(w,M+0,y,P),_(C,M+2,b,P),_(L,M+4,v,P)}}function _(y,b,v,R){R<0&&y.x===1&&(o[b]=y.x-1),v.x===0&&v.z===0&&(o[b]=R/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tc(e.vertices,e.indices,e.radius,e.details)}}class _c extends Tc{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new _c(e.radius,e.detail)}}class fo extends Tc{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new fo(e.radius,e.detail)}}class fa extends At{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=e/a,d=t/c,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const y=p*d-o;for(let b=0;b<l;b++){const v=b*u-r;g.push(v,-y,0),_.push(0,0,1),m.push(b/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<a;y++){const b=y+l*p,v=y+l*(p+1),R=y+1+l*(p+1),w=y+1+l*p;f.push(b,v,w),f.push(v,R,w)}this.setIndex(f),this.setAttribute("position",new ft(g,3)),this.setAttribute("normal",new ft(_,3)),this.setAttribute("uv",new ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fa(e.width,e.height,e.widthSegments,e.heightSegments)}}class po extends At{constructor(e=.5,t=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],c=[],l=[],h=[];let u=e;const d=(t-e)/i,f=new D,g=new De;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const p=r+m/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<i;_++){const m=_*(n+1);for(let p=0;p<n;p++){const y=p+m,b=y,v=y+n+1,R=y+n+2,w=y+1;a.push(b,v,w),a.push(v,R,w)}}this.setIndex(a),this.setAttribute("position",new ft(c,3)),this.setAttribute("normal",new ft(l,3)),this.setAttribute("uv",new ft(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new po(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class mo extends At{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new D,d=new D,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const y=[],b=p/n;let v=0;p===0&&o===0?v=.5/t:p===n&&c===Math.PI&&(v=-.5/t);for(let R=0;R<=t;R++){const w=R/t;u.x=-e*Math.cos(i+w*r)*Math.sin(o+b*a),u.y=e*Math.cos(o+b*a),u.z=e*Math.sin(i+w*r)*Math.sin(o+b*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(w+v,1-b),y.push(l++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){const b=h[p][y+1],v=h[p][y],R=h[p+1][y],w=h[p+1][y+1];(p!==0||o>0)&&f.push(b,v,w),(p!==n-1||c<Math.PI)&&f.push(v,R,w)}this.setIndex(f),this.setAttribute("position",new ft(g,3)),this.setAttribute("normal",new ft(_,3)),this.setAttribute("uv",new ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class vc extends At{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],c=[],l=[],h=new D,u=new D,d=new D;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const _=g/i*r,m=f/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(_),u.y=(e+t*Math.cos(m))*Math.sin(_),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/i),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const _=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,y=(i+1)*f+g;o.push(_,m,y),o.push(m,p,y)}this.setIndex(o),this.setAttribute("position",new ft(a,3)),this.setAttribute("normal",new ft(c,3)),this.setAttribute("uv",new ft(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class N0 extends en{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Wt extends oi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rp,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class li extends Wt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new De(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ke(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Te(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Te(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Te(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class U0 extends oi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=w_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class O0 extends oi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Va(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function F0(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function B0(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function wd(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let c=0;c!==e;++c)i[o++]=s[a+c]}return i}function Wp(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class pa{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class k0 extends pa{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Wu,endingEnd:Wu}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Xu:r=e,a=2*t-n;break;case Yu:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Xu:o=e,c=2*n-t;break;case Yu:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,y=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,b=(-1-f)*m+(1.5+f)*_+.5*g,v=f*m-f*_;for(let R=0;R!==a;++R)r[R]=p*o[h+R]+y*o[l+R]+b*o[c+R]+v*o[u+R];return r}}class z0 extends pa{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}}class G0 extends pa{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class hi{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Va(t,this.TimeBufferType),this.values=Va(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Va(e.times,Array),values:Va(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new G0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new z0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new k0(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Eo:t=this.InterpolantFactoryMethodDiscrete;break;case So:t=this.InterpolantFactoryMethodLinear;break;case kc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Eo;case this.InterpolantFactoryMethodLinear:return So;case this.InterpolantFactoryMethodSmooth:return kc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&F0(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===kc,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(i)c=!0;else{const u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const _=t[u+g];if(_!==t[d+g]||_!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}hi.prototype.TimeBufferType=Float32Array;hi.prototype.ValueBufferType=Float32Array;hi.prototype.DefaultInterpolation=So;class kr extends hi{constructor(e,t,n){super(e,t,n)}}kr.prototype.ValueTypeName="bool";kr.prototype.ValueBufferType=Array;kr.prototype.DefaultInterpolation=Eo;kr.prototype.InterpolantFactoryMethodLinear=void 0;kr.prototype.InterpolantFactoryMethodSmooth=void 0;class Xp extends hi{}Xp.prototype.ValueTypeName="color";class Nr extends hi{}Nr.prototype.ValueTypeName="number";class H0 extends pa{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t);let l=e*a;for(let h=l+a;l!==h;l+=4)is.slerpFlat(r,0,o,l-a,o,l,c);return r}}class Ur extends hi{InterpolantFactoryMethodLinear(e){return new H0(this.times,this.values,this.getValueSize(),e)}}Ur.prototype.ValueTypeName="quaternion";Ur.prototype.InterpolantFactoryMethodSmooth=void 0;class zr extends hi{constructor(e,t,n){super(e,t,n)}}zr.prototype.ValueTypeName="string";zr.prototype.ValueBufferType=Array;zr.prototype.DefaultInterpolation=Eo;zr.prototype.InterpolantFactoryMethodLinear=void 0;zr.prototype.InterpolantFactoryMethodSmooth=void 0;class Or extends hi{}Or.prototype.ValueTypeName="vector";class V0{constructor(e="",t=-1,n=[],i=T_){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Yn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(X0(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(hi.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const h=B0(c);c=wd(c,1,h),l=wd(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Nr(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],h=l.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,g,_){if(f.length!==0){const m=[],p=[];Wp(f,m,p,g),m.length!==0&&_.push(new u(d,m,p))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let y=0;y!==d[g].morphTargets.length;++y){const b=d[g];m.push(b.time),p.push(b.morphTarget===_?1:0)}i.push(new Nr(".morphTargetInfluence["+_+"]",m,p))}c=f.length*o}else{const f=".bones["+t[u].name+"]";n(Or,f+".position",d,"pos",i),n(Ur,f+".quaternion",d,"rot",i),n(Or,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function W0(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Nr;case"vector":case"vector2":case"vector3":case"vector4":return Or;case"color":return Xp;case"quaternion":return Ur;case"bool":case"boolean":return kr;case"string":return zr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function X0(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=W0(s.type);if(s.times===void 0){const t=[],n=[];Wp(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Zi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Y0{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const q0=new Y0;class Gr{constructor(e){this.manager=e!==void 0?e:q0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Gr.DEFAULT_MATERIAL_NAME="__DEFAULT";const _i={};class $0 extends Error{constructor(e,t){super(e),this.response=t}}class Yp extends Gr{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Zi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(_i[e]!==void 0){_i[e].push({onLoad:t,onProgress:n,onError:i});return}_i[e]=[],_i[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=_i[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){y();function y(){u.read().then(({done:b,value:v})=>{if(b)p.close();else{_+=v.byteLength;const R=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let w=0,C=h.length;w<C;w++){const L=h[w];L.onProgress&&L.onProgress(R)}p.enqueue(v),y()}},b=>{p.error(b)})}}});return new Response(m)}else throw new $0(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{Zi.add(e,l);const h=_i[e];delete _i[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=_i[e];if(h===void 0)throw this.manager.itemError(e),l;delete _i[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class K0 extends Gr{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Zi.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=yo("img");function c(){h(),Zi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class j0 extends Gr{constructor(e){super(e)}load(e,t,n,i){const r=new Gt,o=new K0(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Ac extends xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Z0 extends Ac{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Te(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ll=new ze,Rd=new D,Cd=new D;class iu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new De(512,512),this.map=null,this.mapPass=null,this.matrix=new ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new eu,this._frameExtents=new De(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Rd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Rd),Cd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Cd),t.updateMatrixWorld(),ll.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ll),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ll)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class J0 extends iu{constructor(){super(new cn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Pr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Q0 extends Ac{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new J0}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Ld=new ze,eo=new D,hl=new D;class ev extends iu{constructor(){super(new cn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new De(4,2),this._viewportCount=6,this._viewports=[new ot(2,1,1,1),new ot(0,1,1,1),new ot(3,1,1,1),new ot(1,1,1,1),new ot(3,0,1,1),new ot(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),eo.setFromMatrixPosition(e.matrixWorld),n.position.copy(eo),hl.copy(n.position),hl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(hl),n.updateMatrixWorld(),i.makeTranslation(-eo.x,-eo.y,-eo.z),Ld.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ld)}}class su extends Ac{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new ev}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class wc extends Fp{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class tv extends iu{constructor(){super(new wc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ac extends Ac{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.shadow=new tv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class go{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class nv extends Gr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Zi.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Zi.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Zi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Zi.add(e,c),r.manager.itemStart(e)}}class iv extends cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class sv{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Dd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Dd();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Dd(){return performance.now()}const ru="\\[\\]\\.:\\/",rv=new RegExp("["+ru+"]","g"),ou="[^"+ru+"]",ov="[^"+ru.replace("\\.","")+"]",av=/((?:WC+[\/:])*)/.source.replace("WC",ou),cv=/(WCOD+)?/.source.replace("WCOD",ov),lv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ou),hv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ou),uv=new RegExp("^"+av+cv+lv+hv+"$"),dv=["material","materials","bones","map"];class fv{constructor(e,t,n){const i=n||dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class dt{constructor(e,t,n){this.path=t,this.parsedPath=n||dt.parseTrackName(t),this.node=dt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new dt.Composite(e,t,n):new dt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(rv,"")}static parseTrackName(e){const t=uv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);dv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=dt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[i];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}dt.Composite=fv;dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};dt.prototype.GetterByBindingType=[dt.prototype._getValue_direct,dt.prototype._getValue_array,dt.prototype._getValue_arrayElement,dt.prototype._getValue_toArray];dt.prototype.SetterByBindingTypeAndVersioning=[[dt.prototype._setValue_direct,dt.prototype._setValue_direct_setNeedsUpdate,dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_array,dt.prototype._setValue_array_setNeedsUpdate,dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_arrayElement,dt.prototype._setValue_arrayElement_setNeedsUpdate,dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_fromArray,dt.prototype._setValue_fromArray_setNeedsUpdate,dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];function Pd(s,e,t,n){const i=pv(n);switch(t){case Ep:return s*e;case yp:return s*e;case bp:return s*e*2;case Xh:return s*e/i.components*i.byteLength;case Yh:return s*e/i.components*i.byteLength;case Tp:return s*e*2/i.components*i.byteLength;case qh:return s*e*2/i.components*i.byteLength;case Sp:return s*e*3/i.components*i.byteLength;case On:return s*e*4/i.components*i.byteLength;case $h:return s*e*4/i.components*i.byteLength;case tc:case nc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ic:case sc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case jl:case Jl:return Math.max(s,16)*Math.max(e,8)/4;case Kl:case Zl:return Math.max(s,8)*Math.max(e,8)/2;case Ql:case eh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case th:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case nh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ih:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case sh:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case rh:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case oh:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case ah:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case ch:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case lh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case hh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case uh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case dh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case fh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case ph:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case mh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case rc:case gh:case _h:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Ap:case vh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case xh:case Mh:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function pv(s){switch(s){case Ni:case vp:return{byteLength:1,components:1};case Mo:case xp:case Di:return{byteLength:2,components:1};case Vh:case Wh:return{byteLength:2,components:4};case As:case Hh:case Xn:return{byteLength:4,components:1};case Mp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zh);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function qp(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function mv(s){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(s.bindBuffer(l,a),u.length===0)s.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];s.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(s.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}var gv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_v=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,vv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ev=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,yv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bv=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Tv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Av=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Cv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Lv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Dv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Pv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Iv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Uv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ov=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Fv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Bv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,kv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,zv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Gv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Hv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yv="gl_FragColor = linearToOutputTexel( gl_FragColor );",qv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$v=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Kv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Zv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Qv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ex=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ix=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,sx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ox=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ax=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,cx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,lx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ux=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,px=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,mx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,gx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,_x=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ex=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Sx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Tx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ax=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Cx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Px=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ix=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Nx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ux=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ox=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Bx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,kx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Xx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$x=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Jx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Qx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,eM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,tM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,iM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,rM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,oM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,aM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,lM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,hM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,dM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,pM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_M=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,MM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,SM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,yM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,bM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,TM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,AM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,RM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,CM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,LM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,NM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,OM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,FM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,zM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,HM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,WM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,XM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$M=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xe={alphahash_fragment:gv,alphahash_pars_fragment:_v,alphamap_fragment:vv,alphamap_pars_fragment:xv,alphatest_fragment:Mv,alphatest_pars_fragment:Ev,aomap_fragment:Sv,aomap_pars_fragment:yv,batching_pars_vertex:bv,batching_vertex:Tv,begin_vertex:Av,beginnormal_vertex:wv,bsdfs:Rv,iridescence_fragment:Cv,bumpmap_pars_fragment:Lv,clipping_planes_fragment:Dv,clipping_planes_pars_fragment:Pv,clipping_planes_pars_vertex:Iv,clipping_planes_vertex:Nv,color_fragment:Uv,color_pars_fragment:Ov,color_pars_vertex:Fv,color_vertex:Bv,common:kv,cube_uv_reflection_fragment:zv,defaultnormal_vertex:Gv,displacementmap_pars_vertex:Hv,displacementmap_vertex:Vv,emissivemap_fragment:Wv,emissivemap_pars_fragment:Xv,colorspace_fragment:Yv,colorspace_pars_fragment:qv,envmap_fragment:$v,envmap_common_pars_fragment:Kv,envmap_pars_fragment:jv,envmap_pars_vertex:Zv,envmap_physical_pars_fragment:cx,envmap_vertex:Jv,fog_vertex:Qv,fog_pars_vertex:ex,fog_fragment:tx,fog_pars_fragment:nx,gradientmap_pars_fragment:ix,lightmap_pars_fragment:sx,lights_lambert_fragment:rx,lights_lambert_pars_fragment:ox,lights_pars_begin:ax,lights_toon_fragment:lx,lights_toon_pars_fragment:hx,lights_phong_fragment:ux,lights_phong_pars_fragment:dx,lights_physical_fragment:fx,lights_physical_pars_fragment:px,lights_fragment_begin:mx,lights_fragment_maps:gx,lights_fragment_end:_x,logdepthbuf_fragment:vx,logdepthbuf_pars_fragment:xx,logdepthbuf_pars_vertex:Mx,logdepthbuf_vertex:Ex,map_fragment:Sx,map_pars_fragment:yx,map_particle_fragment:bx,map_particle_pars_fragment:Tx,metalnessmap_fragment:Ax,metalnessmap_pars_fragment:wx,morphinstance_vertex:Rx,morphcolor_vertex:Cx,morphnormal_vertex:Lx,morphtarget_pars_vertex:Dx,morphtarget_vertex:Px,normal_fragment_begin:Ix,normal_fragment_maps:Nx,normal_pars_fragment:Ux,normal_pars_vertex:Ox,normal_vertex:Fx,normalmap_pars_fragment:Bx,clearcoat_normal_fragment_begin:kx,clearcoat_normal_fragment_maps:zx,clearcoat_pars_fragment:Gx,iridescence_pars_fragment:Hx,opaque_fragment:Vx,packing:Wx,premultiplied_alpha_fragment:Xx,project_vertex:Yx,dithering_fragment:qx,dithering_pars_fragment:$x,roughnessmap_fragment:Kx,roughnessmap_pars_fragment:jx,shadowmap_pars_fragment:Zx,shadowmap_pars_vertex:Jx,shadowmap_vertex:Qx,shadowmask_pars_fragment:eM,skinbase_vertex:tM,skinning_pars_vertex:nM,skinning_vertex:iM,skinnormal_vertex:sM,specularmap_fragment:rM,specularmap_pars_fragment:oM,tonemapping_fragment:aM,tonemapping_pars_fragment:cM,transmission_fragment:lM,transmission_pars_fragment:hM,uv_pars_fragment:uM,uv_pars_vertex:dM,uv_vertex:fM,worldpos_vertex:pM,background_vert:mM,background_frag:gM,backgroundCube_vert:_M,backgroundCube_frag:vM,cube_vert:xM,cube_frag:MM,depth_vert:EM,depth_frag:SM,distanceRGBA_vert:yM,distanceRGBA_frag:bM,equirect_vert:TM,equirect_frag:AM,linedashed_vert:wM,linedashed_frag:RM,meshbasic_vert:CM,meshbasic_frag:LM,meshlambert_vert:DM,meshlambert_frag:PM,meshmatcap_vert:IM,meshmatcap_frag:NM,meshnormal_vert:UM,meshnormal_frag:OM,meshphong_vert:FM,meshphong_frag:BM,meshphysical_vert:kM,meshphysical_frag:zM,meshtoon_vert:GM,meshtoon_frag:HM,points_vert:VM,points_frag:WM,shadow_vert:XM,shadow_frag:YM,sprite_vert:qM,sprite_frag:$M},ce={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},ri={basic:{uniforms:sn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:sn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Te(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:sn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:sn([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:sn([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Te(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:sn([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:sn([ce.points,ce.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:sn([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:sn([ce.common,ce.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:sn([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:sn([ce.sprite,ce.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:sn([ce.common,ce.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:sn([ce.lights,ce.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};ri.physical={uniforms:sn([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const Wa={r:0,b:0,g:0},hs=new ai,KM=new ze;function jM(s,e,t,n,i,r,o){const a=new Te(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(b){let v=b.isScene===!0?b.background:null;return v&&v.isTexture&&(v=(b.backgroundBlurriness>0?t:e).get(v)),v}function _(b){let v=!1;const R=g(b);R===null?p(a,c):R&&R.isColor&&(p(R,1),v=!0);const w=s.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(b,v){const R=g(v);R&&(R.isCubeTexture||R.mapping===yc)?(h===void 0&&(h=new Ne(new Xt(1,1,1),new en({name:"BackgroundCubeMaterial",uniforms:Ir(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,C,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),hs.copy(v.backgroundRotation),hs.x*=-1,hs.y*=-1,hs.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(hs.y*=-1,hs.z*=-1),h.material.uniforms.envMap.value=R,h.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(KM.makeRotationFromEuler(hs)),h.material.toneMapped=Ze.getTransfer(R.colorSpace)!==ht,(u!==R||d!==R.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=R,d=R.version,f=s.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(l===void 0&&(l=new Ne(new fa(2,2),new en({name:"BackgroundMaterial",uniforms:Ir(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:Ii,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=R,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=Ze.getTransfer(R.colorSpace)!==ht,R.matrixAutoUpdate===!0&&R.updateMatrix(),l.material.uniforms.uvTransform.value.copy(R.matrix),(u!==R||d!==R.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,u=R,d=R.version,f=s.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function p(b,v){b.getRGB(Wa,Op(s)),n.buffers.color.setClear(Wa.r,Wa.g,Wa.b,v,o)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose()),l!==void 0&&(l.geometry.dispose(),l.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(b,v=1){a.set(b),c=v,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,p(a,c)},render:_,addToRenderList:m,dispose:y}}function ZM(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(M,P,H,G,$){let Q=!1;const Y=u(G,H,P);r!==Y&&(r=Y,l(r.object)),Q=f(M,G,H,$),Q&&g(M,G,H,$),$!==null&&e.update($,s.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,v(M,P,H,G),$!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function c(){return s.createVertexArray()}function l(M){return s.bindVertexArray(M)}function h(M){return s.deleteVertexArray(M)}function u(M,P,H){const G=H.wireframe===!0;let $=n[M.id];$===void 0&&($={},n[M.id]=$);let Q=$[P.id];Q===void 0&&(Q={},$[P.id]=Q);let Y=Q[G];return Y===void 0&&(Y=d(c()),Q[G]=Y),Y}function d(M){const P=[],H=[],G=[];for(let $=0;$<t;$++)P[$]=0,H[$]=0,G[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:H,attributeDivisors:G,object:M,attributes:{},index:null}}function f(M,P,H,G){const $=r.attributes,Q=P.attributes;let Y=0;const ie=H.getAttributes();for(const W in ie)if(ie[W].location>=0){const _e=$[W];let Ae=Q[W];if(Ae===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(Ae=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(Ae=M.instanceColor)),_e===void 0||_e.attribute!==Ae||Ae&&_e.data!==Ae.data)return!0;Y++}return r.attributesNum!==Y||r.index!==G}function g(M,P,H,G){const $={},Q=P.attributes;let Y=0;const ie=H.getAttributes();for(const W in ie)if(ie[W].location>=0){let _e=Q[W];_e===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(_e=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(_e=M.instanceColor));const Ae={};Ae.attribute=_e,_e&&_e.data&&(Ae.data=_e.data),$[W]=Ae,Y++}r.attributes=$,r.attributesNum=Y,r.index=G}function _(){const M=r.newAttributes;for(let P=0,H=M.length;P<H;P++)M[P]=0}function m(M){p(M,0)}function p(M,P){const H=r.newAttributes,G=r.enabledAttributes,$=r.attributeDivisors;H[M]=1,G[M]===0&&(s.enableVertexAttribArray(M),G[M]=1),$[M]!==P&&(s.vertexAttribDivisor(M,P),$[M]=P)}function y(){const M=r.newAttributes,P=r.enabledAttributes;for(let H=0,G=P.length;H<G;H++)P[H]!==M[H]&&(s.disableVertexAttribArray(H),P[H]=0)}function b(M,P,H,G,$,Q,Y){Y===!0?s.vertexAttribIPointer(M,P,H,$,Q):s.vertexAttribPointer(M,P,H,G,$,Q)}function v(M,P,H,G){_();const $=G.attributes,Q=H.getAttributes(),Y=P.defaultAttributeValues;for(const ie in Q){const W=Q[ie];if(W.location>=0){let ue=$[ie];if(ue===void 0&&(ie==="instanceMatrix"&&M.instanceMatrix&&(ue=M.instanceMatrix),ie==="instanceColor"&&M.instanceColor&&(ue=M.instanceColor)),ue!==void 0){const _e=ue.normalized,Ae=ue.itemSize,qe=e.get(ue);if(qe===void 0)continue;const gt=qe.buffer,j=qe.type,ae=qe.bytesPerElement,ye=j===s.INT||j===s.UNSIGNED_INT||ue.gpuType===Hh;if(ue.isInterleavedBufferAttribute){const de=ue.data,Ue=de.stride,Ge=ue.offset;if(de.isInstancedInterleavedBuffer){for(let $e=0;$e<W.locationSize;$e++)p(W.location+$e,de.meshPerAttribute);M.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let $e=0;$e<W.locationSize;$e++)m(W.location+$e);s.bindBuffer(s.ARRAY_BUFFER,gt);for(let $e=0;$e<W.locationSize;$e++)b(W.location+$e,Ae/W.locationSize,j,_e,Ue*ae,(Ge+Ae/W.locationSize*$e)*ae,ye)}else{if(ue.isInstancedBufferAttribute){for(let de=0;de<W.locationSize;de++)p(W.location+de,ue.meshPerAttribute);M.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let de=0;de<W.locationSize;de++)m(W.location+de);s.bindBuffer(s.ARRAY_BUFFER,gt);for(let de=0;de<W.locationSize;de++)b(W.location+de,Ae/W.locationSize,j,_e,Ae*ae,Ae/W.locationSize*de*ae,ye)}}else if(Y!==void 0){const _e=Y[ie];if(_e!==void 0)switch(_e.length){case 2:s.vertexAttrib2fv(W.location,_e);break;case 3:s.vertexAttrib3fv(W.location,_e);break;case 4:s.vertexAttrib4fv(W.location,_e);break;default:s.vertexAttrib1fv(W.location,_e)}}}}y()}function R(){L();for(const M in n){const P=n[M];for(const H in P){const G=P[H];for(const $ in G)h(G[$].object),delete G[$];delete P[H]}delete n[M]}}function w(M){if(n[M.id]===void 0)return;const P=n[M.id];for(const H in P){const G=P[H];for(const $ in G)h(G[$].object),delete G[$];delete P[H]}delete n[M.id]}function C(M){for(const P in n){const H=n[P];if(H[M.id]===void 0)continue;const G=H[M.id];for(const $ in G)h(G[$].object),delete G[$];delete H[M.id]}}function L(){T(),o=!0,r!==i&&(r=i,l(r.object))}function T(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:L,resetDefaultState:T,dispose:R,releaseStatesOfGeometry:w,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function JM(s,e,t){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function QM(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(C){return!(C!==On&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const L=C===Di&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Ni&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Xn&&!L)}function c(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,w=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:v,vertexTextures:R,maxSamples:w}}function eE(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new fs,a=new Ve,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):l();else{const y=r?0:n,b=y*4;let v=p.clippingState||null;c.value=v,v=h(g,d,b,f);for(let R=0;R!==b;++R)v[R]=t[R];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,v=f;b!==_;++b,v+=4)o.copy(u[b]).applyMatrix4(y,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function tE(s){let e=new WeakMap;function t(o,a){return a===ql?o.mapping=wr:a===$l&&(o.mapping=Rr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ql||a===$l)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new b0(c.height);return l.fromEquirectangularTexture(s,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const er=4,Id=[.125,.215,.35,.446,.526,.582],vs=20,ul=new wc,Nd=new Te;let dl=null,fl=0,pl=0,ml=!1;const ps=(1+Math.sqrt(5))/2,Vs=1/ps,Ud=[new D(-ps,Vs,0),new D(ps,Vs,0),new D(-Vs,0,ps),new D(Vs,0,ps),new D(0,ps,-Vs),new D(0,ps,Vs),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class Th{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){dl=this._renderer.getRenderTarget(),fl=this._renderer.getActiveCubeFace(),pl=this._renderer.getActiveMipmapLevel(),ml=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(dl,fl,pl),this._renderer.xr.enabled=ml,e.scissorTest=!1,Xa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===wr||e.mapping===Rr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),dl=this._renderer.getRenderTarget(),fl=this._renderer.getActiveCubeFace(),pl=this._renderer.getActiveMipmapLevel(),ml=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Tn,minFilter:Tn,generateMipmaps:!1,type:Di,format:On,colorSpace:un,depthBuffer:!1},i=Od(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Od(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=nE(r)),this._blurMaterial=iE(r,e,t)}return i}_compileMaterial(e){const t=new Ne(this._lodPlanes[0],e);this._renderer.compile(t,ul)}_sceneToCubeUV(e,t,n,i){const a=new cn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Nd),h.toneMapping=Qi,h.autoClear=!1;const f=new Pt({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),g=new Ne(new Xt,f);let _=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,_=!0):(f.color.copy(Nd),_=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):y===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const b=this._cubeSize;Xa(i,y*b,p>2?b:0,b,b),h.setRenderTarget(i),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===wr||e.mapping===Rr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fd());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Ne(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;Xa(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,ul)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ud[(i-r-1)%Ud.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Ne(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*vs-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):vs;m>vs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${vs}`);const p=[];let y=0;for(let C=0;C<vs;++C){const L=C/_,T=Math.exp(-L*L/2);p.push(T),C===0?y+=T:C<m&&(y+=2*T)}for(let C=0;C<p.length;C++)p[C]=p[C]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-n;const v=this._sizeLods[i],R=3*v*(i>b-er?i-b+er:0),w=4*(this._cubeSize-v);Xa(t,R,w,3*v,2*v),c.setRenderTarget(t),c.render(u,ul)}}function nE(s){const e=[],t=[],n=[];let i=s;const r=s-er+1+Id.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>s-er?c=Id[o-s+er-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*f),b=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let w=0;w<f;w++){const C=w%3*2/3-1,L=w>2?0:-1,T=[C,L,0,C+2/3,L,0,C+2/3,L+1,0,C,L,0,C+2/3,L+1,0,C,L+1,0];y.set(T,_*g*w),b.set(d,m*g*w);const M=[w,w,w,w,w,w];v.set(M,p*g*w)}const R=new At;R.setAttribute("position",new Tt(y,_)),R.setAttribute("uv",new Tt(b,m)),R.setAttribute("faceIndex",new Tt(v,p)),e.push(R),i>er&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Od(s,e,t){const n=new qn(s,e,t);return n.texture.mapping=yc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xa(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function iE(s,e,t){const n=new Float32Array(vs),i=new D(0,1,0);return new en({name:"SphericalGaussianBlur",defines:{n:vs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:au(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Fd(){return new en({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:au(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Bd(){return new en({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:au(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function au(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function sE(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===ql||c===$l,h=c===wr||c===Rr;if(l||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Th(s)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new Th(s)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function rE(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Zs("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function oE(s,e,t,n){const i={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const f in d)e.update(d[f],s.ARRAY_BUFFER)}function l(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const y=f.array;_=f.version;for(let b=0,v=y.length;b<v;b+=3){const R=y[b+0],w=y[b+1],C=y[b+2];d.push(R,w,w,C,C,R)}}else if(g!==void 0){const y=g.array;_=g.version;for(let b=0,v=y.length/3-1;b<v;b+=3){const R=b+0,w=b+1,C=b+2;d.push(R,w,w,C,C,R)}}else return;const m=new(Lp(d)?Up:Np)(d,1);m.version=_;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function aE(s,e,t){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){s.drawElements(n,f,r,d*o),t.update(f,n,1)}function l(d,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,d*o,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function u(d,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let y=0;y<g;y++)p+=f[y]*_[y];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function cE(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function lE(s,e,t){const n=new WeakMap,i=new ot;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let M=function(){L.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var f=M;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let R=a.attributes.position.count*v,w=1;R>e.maxTextureSize&&(w=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const C=new Float32Array(R*w*4*u),L=new Pp(C,R,w,u);L.type=Xn,L.needsUpdate=!0;const T=v*4;for(let P=0;P<u;P++){const H=p[P],G=y[P],$=b[P],Q=R*w*4*P;for(let Y=0;Y<H.count;Y++){const ie=Y*T;g===!0&&(i.fromBufferAttribute(H,Y),C[Q+ie+0]=i.x,C[Q+ie+1]=i.y,C[Q+ie+2]=i.z,C[Q+ie+3]=0),_===!0&&(i.fromBufferAttribute(G,Y),C[Q+ie+4]=i.x,C[Q+ie+5]=i.y,C[Q+ie+6]=i.z,C[Q+ie+7]=0),m===!0&&(i.fromBufferAttribute($,Y),C[Q+ie+8]=i.x,C[Q+ie+9]=i.y,C[Q+ie+10]=i.z,C[Q+ie+11]=$.itemSize===4?i.w:1)}}d={count:u,texture:L,size:new De(R,w)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(s,"morphTargetBaseInfluence",_),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function hE(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}const $p=new Gt,kd=new Vp(1,1),Kp=new Pp,jp=new l0,Zp=new Bp,zd=[],Gd=[],Hd=new Float32Array(16),Vd=new Float32Array(9),Wd=new Float32Array(4);function Hr(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=zd[i];if(r===void 0&&(r=new Float32Array(i),zd[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Ft(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Bt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Rc(s,e){let t=Gd[e];t===void 0&&(t=new Int32Array(e),Gd[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function uE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function dE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;s.uniform2fv(this.addr,e),Bt(t,e)}}function fE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ft(t,e))return;s.uniform3fv(this.addr,e),Bt(t,e)}}function pE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;s.uniform4fv(this.addr,e),Bt(t,e)}}function mE(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Bt(t,e)}else{if(Ft(t,n))return;Wd.set(n),s.uniformMatrix2fv(this.addr,!1,Wd),Bt(t,n)}}function gE(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Bt(t,e)}else{if(Ft(t,n))return;Vd.set(n),s.uniformMatrix3fv(this.addr,!1,Vd),Bt(t,n)}}function _E(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Bt(t,e)}else{if(Ft(t,n))return;Hd.set(n),s.uniformMatrix4fv(this.addr,!1,Hd),Bt(t,n)}}function vE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function xE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;s.uniform2iv(this.addr,e),Bt(t,e)}}function ME(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;s.uniform3iv(this.addr,e),Bt(t,e)}}function EE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;s.uniform4iv(this.addr,e),Bt(t,e)}}function SE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function yE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;s.uniform2uiv(this.addr,e),Bt(t,e)}}function bE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;s.uniform3uiv(this.addr,e),Bt(t,e)}}function TE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;s.uniform4uiv(this.addr,e),Bt(t,e)}}function AE(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(kd.compareFunction=Cp,r=kd):r=$p,t.setTexture2D(e||r,i)}function wE(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||jp,i)}function RE(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Zp,i)}function CE(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Kp,i)}function LE(s){switch(s){case 5126:return uE;case 35664:return dE;case 35665:return fE;case 35666:return pE;case 35674:return mE;case 35675:return gE;case 35676:return _E;case 5124:case 35670:return vE;case 35667:case 35671:return xE;case 35668:case 35672:return ME;case 35669:case 35673:return EE;case 5125:return SE;case 36294:return yE;case 36295:return bE;case 36296:return TE;case 35678:case 36198:case 36298:case 36306:case 35682:return AE;case 35679:case 36299:case 36307:return wE;case 35680:case 36300:case 36308:case 36293:return RE;case 36289:case 36303:case 36311:case 36292:return CE}}function DE(s,e){s.uniform1fv(this.addr,e)}function PE(s,e){const t=Hr(e,this.size,2);s.uniform2fv(this.addr,t)}function IE(s,e){const t=Hr(e,this.size,3);s.uniform3fv(this.addr,t)}function NE(s,e){const t=Hr(e,this.size,4);s.uniform4fv(this.addr,t)}function UE(s,e){const t=Hr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function OE(s,e){const t=Hr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function FE(s,e){const t=Hr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function BE(s,e){s.uniform1iv(this.addr,e)}function kE(s,e){s.uniform2iv(this.addr,e)}function zE(s,e){s.uniform3iv(this.addr,e)}function GE(s,e){s.uniform4iv(this.addr,e)}function HE(s,e){s.uniform1uiv(this.addr,e)}function VE(s,e){s.uniform2uiv(this.addr,e)}function WE(s,e){s.uniform3uiv(this.addr,e)}function XE(s,e){s.uniform4uiv(this.addr,e)}function YE(s,e,t){const n=this.cache,i=e.length,r=Rc(t,i);Ft(n,r)||(s.uniform1iv(this.addr,r),Bt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||$p,r[o])}function qE(s,e,t){const n=this.cache,i=e.length,r=Rc(t,i);Ft(n,r)||(s.uniform1iv(this.addr,r),Bt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||jp,r[o])}function $E(s,e,t){const n=this.cache,i=e.length,r=Rc(t,i);Ft(n,r)||(s.uniform1iv(this.addr,r),Bt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Zp,r[o])}function KE(s,e,t){const n=this.cache,i=e.length,r=Rc(t,i);Ft(n,r)||(s.uniform1iv(this.addr,r),Bt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Kp,r[o])}function jE(s){switch(s){case 5126:return DE;case 35664:return PE;case 35665:return IE;case 35666:return NE;case 35674:return UE;case 35675:return OE;case 35676:return FE;case 5124:case 35670:return BE;case 35667:case 35671:return kE;case 35668:case 35672:return zE;case 35669:case 35673:return GE;case 5125:return HE;case 36294:return VE;case 36295:return WE;case 36296:return XE;case 35678:case 36198:case 36298:case 36306:case 35682:return YE;case 35679:case 36299:case 36307:return qE;case 35680:case 36300:case 36308:case 36293:return $E;case 36289:case 36303:case 36311:case 36292:return KE}}class ZE{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=LE(t.type)}}class JE{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=jE(t.type)}}class QE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const gl=/(\w+)(\])?(\[|\.)?/g;function Xd(s,e){s.seq.push(e),s.map[e.id]=e}function eS(s,e,t){const n=s.name,i=n.length;for(gl.lastIndex=0;;){const r=gl.exec(n),o=gl.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Xd(t,l===void 0?new ZE(a,s,e):new JE(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new QE(a),Xd(t,u)),t=u}}}class cc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);eS(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Yd(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const tS=37297;let nS=0;function iS(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const qd=new Ve;function sS(s){Ze._getMatrix(qd,Ze.workingColorSpace,s);const e=`mat3( ${qd.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(s)){case dc:return[e,"LinearTransferOETF"];case ht:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function $d(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+iS(s.getShaderSource(e),o)}else return i}function rS(s,e){const t=sS(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function oS(s,e){let t;switch(e){case up:t="Linear";break;case dp:t="Reinhard";break;case fp:t="Cineon";break;case Gh:t="ACESFilmic";break;case pp:t="AgX";break;case mp:t="Neutral";break;case y_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ya=new D;function aS(){Ze.getLuminanceCoefficients(Ya);const s=Ya.x.toFixed(4),e=Ya.y.toFixed(4),t=Ya.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cS(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ao).join(`
`)}function lS(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function hS(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function ao(s){return s!==""}function Kd(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jd(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const uS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ah(s){return s.replace(uS,fS)}const dS=new Map;function fS(s,e){let t=Xe[e];if(t===void 0){const n=dS.get(e);if(n!==void 0)t=Xe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ah(t)}const pS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zd(s){return s.replace(pS,mS)}function mS(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Jd(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function gS(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===cp?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===lp?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===vi&&(e="SHADOWMAP_TYPE_VSM"),e}function _S(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case wr:case Rr:e="ENVMAP_TYPE_CUBE";break;case yc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function vS(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Rr:e="ENVMAP_MODE_REFRACTION";break}return e}function xS(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case hp:e="ENVMAP_BLENDING_MULTIPLY";break;case E_:e="ENVMAP_BLENDING_MIX";break;case S_:e="ENVMAP_BLENDING_ADD";break}return e}function MS(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function ES(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=gS(t),l=_S(t),h=vS(t),u=xS(t),d=MS(t),f=cS(t),g=lS(r),_=i.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ao).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ao).join(`
`),p.length>0&&(p+=`
`)):(m=[Jd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ao).join(`
`),p=[Jd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qi?"#define TONE_MAPPING":"",t.toneMapping!==Qi?Xe.tonemapping_pars_fragment:"",t.toneMapping!==Qi?oS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,rS("linearToOutputTexel",t.outputColorSpace),aS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ao).join(`
`)),o=Ah(o),o=Kd(o,t),o=jd(o,t),a=Ah(a),a=Kd(a,t),a=jd(a,t),o=Zd(o),a=Zd(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===$u?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$u?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=y+m+o,v=y+p+a,R=Yd(i,i.VERTEX_SHADER,b),w=Yd(i,i.FRAGMENT_SHADER,v);i.attachShader(_,R),i.attachShader(_,w),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function C(P){if(s.debug.checkShaderErrors){const H=i.getProgramInfoLog(_).trim(),G=i.getShaderInfoLog(R).trim(),$=i.getShaderInfoLog(w).trim();let Q=!0,Y=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(Q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,R,w);else{const ie=$d(i,R,"vertex"),W=$d(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+H+`
`+ie+`
`+W)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(G===""||$==="")&&(Y=!1);Y&&(P.diagnostics={runnable:Q,programLog:H,vertexShader:{log:G,prefix:m},fragmentShader:{log:$,prefix:p}})}i.deleteShader(R),i.deleteShader(w),L=new cc(i,_),T=hS(i,_)}let L;this.getUniforms=function(){return L===void 0&&C(this),L};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(_,tS)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=nS++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=w,this}let SS=0;class yS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new bS(e),t.set(e,n)),n}}class bS{constructor(e){this.id=SS++,this.code=e,this.usedTimes=0}}function TS(s,e,t,n,i,r,o){const a=new jh,c=new yS,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(T){return l.add(T),T===0?"uv":`uv${T}`}function m(T,M,P,H,G){const $=H.fog,Q=G.geometry,Y=T.isMeshStandardMaterial?H.environment:null,ie=(T.isMeshStandardMaterial?t:e).get(T.envMap||Y),W=ie&&ie.mapping===yc?ie.image.height:null,ue=g[T.type];T.precision!==null&&(f=i.getMaxPrecision(T.precision),f!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",f,"instead."));const _e=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Ae=_e!==void 0?_e.length:0;let qe=0;Q.morphAttributes.position!==void 0&&(qe=1),Q.morphAttributes.normal!==void 0&&(qe=2),Q.morphAttributes.color!==void 0&&(qe=3);let gt,j,ae,ye;if(ue){const lt=ri[ue];gt=lt.vertexShader,j=lt.fragmentShader}else gt=T.vertexShader,j=T.fragmentShader,c.update(T),ae=c.getVertexShaderID(T),ye=c.getFragmentShaderID(T);const de=s.getRenderTarget(),Ue=s.state.buffers.depth.getReversed(),Ge=G.isInstancedMesh===!0,$e=G.isBatchedMesh===!0,bt=!!T.map,tt=!!T.matcap,Lt=!!ie,I=!!T.aoMap,wn=!!T.lightMap,Je=!!T.bumpMap,Qe=!!T.normalMap,we=!!T.displacementMap,Mt=!!T.emissiveMap,Re=!!T.metalnessMap,A=!!T.roughnessMap,E=T.anisotropy>0,B=T.clearcoat>0,Z=T.dispersion>0,te=T.iridescence>0,K=T.sheen>0,be=T.transmission>0,fe=E&&!!T.anisotropyMap,ve=B&&!!T.clearcoatMap,nt=B&&!!T.clearcoatNormalMap,oe=B&&!!T.clearcoatRoughnessMap,xe=te&&!!T.iridescenceMap,Ie=te&&!!T.iridescenceThicknessMap,Oe=K&&!!T.sheenColorMap,Me=K&&!!T.sheenRoughnessMap,et=!!T.specularMap,We=!!T.specularColorMap,_t=!!T.specularIntensityMap,N=be&&!!T.transmissionMap,le=be&&!!T.thicknessMap,V=!!T.gradientMap,J=!!T.alphaMap,me=T.alphaTest>0,pe=!!T.alphaHash,He=!!T.extensions;let Rt=Qi;T.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(Rt=s.toneMapping);const $t={shaderID:ue,shaderType:T.type,shaderName:T.name,vertexShader:gt,fragmentShader:j,defines:T.defines,customVertexShaderID:ae,customFragmentShaderID:ye,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:f,batching:$e,batchingColor:$e&&G._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&G.instanceColor!==null,instancingMorph:Ge&&G.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:de===null?s.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:un,alphaToCoverage:!!T.alphaToCoverage,map:bt,matcap:tt,envMap:Lt,envMapMode:Lt&&ie.mapping,envMapCubeUVHeight:W,aoMap:I,lightMap:wn,bumpMap:Je,normalMap:Qe,displacementMap:d&&we,emissiveMap:Mt,normalMapObjectSpace:Qe&&T.normalMapType===C_,normalMapTangentSpace:Qe&&T.normalMapType===Rp,metalnessMap:Re,roughnessMap:A,anisotropy:E,anisotropyMap:fe,clearcoat:B,clearcoatMap:ve,clearcoatNormalMap:nt,clearcoatRoughnessMap:oe,dispersion:Z,iridescence:te,iridescenceMap:xe,iridescenceThicknessMap:Ie,sheen:K,sheenColorMap:Oe,sheenRoughnessMap:Me,specularMap:et,specularColorMap:We,specularIntensityMap:_t,transmission:be,transmissionMap:N,thicknessMap:le,gradientMap:V,opaque:T.transparent===!1&&T.blending===nr&&T.alphaToCoverage===!1,alphaMap:J,alphaTest:me,alphaHash:pe,combine:T.combine,mapUv:bt&&_(T.map.channel),aoMapUv:I&&_(T.aoMap.channel),lightMapUv:wn&&_(T.lightMap.channel),bumpMapUv:Je&&_(T.bumpMap.channel),normalMapUv:Qe&&_(T.normalMap.channel),displacementMapUv:we&&_(T.displacementMap.channel),emissiveMapUv:Mt&&_(T.emissiveMap.channel),metalnessMapUv:Re&&_(T.metalnessMap.channel),roughnessMapUv:A&&_(T.roughnessMap.channel),anisotropyMapUv:fe&&_(T.anisotropyMap.channel),clearcoatMapUv:ve&&_(T.clearcoatMap.channel),clearcoatNormalMapUv:nt&&_(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&_(T.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&_(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&_(T.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&_(T.sheenColorMap.channel),sheenRoughnessMapUv:Me&&_(T.sheenRoughnessMap.channel),specularMapUv:et&&_(T.specularMap.channel),specularColorMapUv:We&&_(T.specularColorMap.channel),specularIntensityMapUv:_t&&_(T.specularIntensityMap.channel),transmissionMapUv:N&&_(T.transmissionMap.channel),thicknessMapUv:le&&_(T.thicknessMap.channel),alphaMapUv:J&&_(T.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(Qe||E),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!Q.attributes.uv&&(bt||J),fog:!!$,useFog:T.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ue,skinning:G.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:Ae,morphTextureStride:qe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:Rt,decodeVideoTexture:bt&&T.map.isVideoTexture===!0&&Ze.getTransfer(T.map.colorSpace)===ht,decodeVideoTextureEmissive:Mt&&T.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(T.emissiveMap.colorSpace)===ht,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===_n,flipSided:T.side===ln,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:He&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&T.extensions.multiDraw===!0||$e)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return $t.vertexUv1s=l.has(1),$t.vertexUv2s=l.has(2),$t.vertexUv3s=l.has(3),l.clear(),$t}function p(T){const M=[];if(T.shaderID?M.push(T.shaderID):(M.push(T.customVertexShaderID),M.push(T.customFragmentShaderID)),T.defines!==void 0)for(const P in T.defines)M.push(P),M.push(T.defines[P]);return T.isRawShaderMaterial===!1&&(y(M,T),b(M,T),M.push(s.outputColorSpace)),M.push(T.customProgramCacheKey),M.join()}function y(T,M){T.push(M.precision),T.push(M.outputColorSpace),T.push(M.envMapMode),T.push(M.envMapCubeUVHeight),T.push(M.mapUv),T.push(M.alphaMapUv),T.push(M.lightMapUv),T.push(M.aoMapUv),T.push(M.bumpMapUv),T.push(M.normalMapUv),T.push(M.displacementMapUv),T.push(M.emissiveMapUv),T.push(M.metalnessMapUv),T.push(M.roughnessMapUv),T.push(M.anisotropyMapUv),T.push(M.clearcoatMapUv),T.push(M.clearcoatNormalMapUv),T.push(M.clearcoatRoughnessMapUv),T.push(M.iridescenceMapUv),T.push(M.iridescenceThicknessMapUv),T.push(M.sheenColorMapUv),T.push(M.sheenRoughnessMapUv),T.push(M.specularMapUv),T.push(M.specularColorMapUv),T.push(M.specularIntensityMapUv),T.push(M.transmissionMapUv),T.push(M.thicknessMapUv),T.push(M.combine),T.push(M.fogExp2),T.push(M.sizeAttenuation),T.push(M.morphTargetsCount),T.push(M.morphAttributeCount),T.push(M.numDirLights),T.push(M.numPointLights),T.push(M.numSpotLights),T.push(M.numSpotLightMaps),T.push(M.numHemiLights),T.push(M.numRectAreaLights),T.push(M.numDirLightShadows),T.push(M.numPointLightShadows),T.push(M.numSpotLightShadows),T.push(M.numSpotLightShadowsWithMaps),T.push(M.numLightProbes),T.push(M.shadowMapType),T.push(M.toneMapping),T.push(M.numClippingPlanes),T.push(M.numClipIntersection),T.push(M.depthPacking)}function b(T,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),T.push(a.mask)}function v(T){const M=g[T.type];let P;if(M){const H=ri[M];P=bo.clone(H.uniforms)}else P=T.uniforms;return P}function R(T,M){let P;for(let H=0,G=h.length;H<G;H++){const $=h[H];if($.cacheKey===M){P=$,++P.usedTimes;break}}return P===void 0&&(P=new ES(s,M,T,r),h.push(P)),P}function w(T){if(--T.usedTimes===0){const M=h.indexOf(T);h[M]=h[h.length-1],h.pop(),T.destroy()}}function C(T){c.remove(T)}function L(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:R,releaseProgram:w,releaseShaderCache:C,programs:h,dispose:L}}function AS(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function wS(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Qd(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function ef(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u,d,f,g,_,m){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},s[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),e++,p}function a(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function c(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||wS),n.length>1&&n.sort(d||Qd),i.length>1&&i.sort(d||Qd)}function h(){for(let u=e,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function RS(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new ef,s.set(n,[o])):i>=r.length?(o=new ef,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function CS(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Te};break;case"SpotLight":t={position:new D,direction:new D,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Te,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":t={color:new Te,position:new D,halfWidth:new D,halfHeight:new D};break}return s[e.id]=t,t}}}function LS(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let DS=0;function PS(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function IS(s){const e=new CS,t=LS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);const i=new D,r=new ze,o=new ze;function a(l){let h=0,u=0,d=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,y=0,b=0,v=0,R=0,w=0,C=0;l.sort(PS);for(let T=0,M=l.length;T<M;T++){const P=l[T],H=P.color,G=P.intensity,$=P.distance,Q=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=H.r*G,u+=H.g*G,d+=H.b*G;else if(P.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(P.sh.coefficients[Y],G);C++}else if(P.isDirectionalLight){const Y=e.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const ie=P.shadow,W=t.get(P);W.shadowIntensity=ie.intensity,W.shadowBias=ie.bias,W.shadowNormalBias=ie.normalBias,W.shadowRadius=ie.radius,W.shadowMapSize=ie.mapSize,n.directionalShadow[f]=W,n.directionalShadowMap[f]=Q,n.directionalShadowMatrix[f]=P.shadow.matrix,y++}n.directional[f]=Y,f++}else if(P.isSpotLight){const Y=e.get(P);Y.position.setFromMatrixPosition(P.matrixWorld),Y.color.copy(H).multiplyScalar(G),Y.distance=$,Y.coneCos=Math.cos(P.angle),Y.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Y.decay=P.decay,n.spot[_]=Y;const ie=P.shadow;if(P.map&&(n.spotLightMap[R]=P.map,R++,ie.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[_]=ie.matrix,P.castShadow){const W=t.get(P);W.shadowIntensity=ie.intensity,W.shadowBias=ie.bias,W.shadowNormalBias=ie.normalBias,W.shadowRadius=ie.radius,W.shadowMapSize=ie.mapSize,n.spotShadow[_]=W,n.spotShadowMap[_]=Q,v++}_++}else if(P.isRectAreaLight){const Y=e.get(P);Y.color.copy(H).multiplyScalar(G),Y.halfWidth.set(P.width*.5,0,0),Y.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=Y,m++}else if(P.isPointLight){const Y=e.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),Y.distance=P.distance,Y.decay=P.decay,P.castShadow){const ie=P.shadow,W=t.get(P);W.shadowIntensity=ie.intensity,W.shadowBias=ie.bias,W.shadowNormalBias=ie.normalBias,W.shadowRadius=ie.radius,W.shadowMapSize=ie.mapSize,W.shadowCameraNear=ie.camera.near,W.shadowCameraFar=ie.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=Q,n.pointShadowMatrix[g]=P.shadow.matrix,b++}n.point[g]=Y,g++}else if(P.isHemisphereLight){const Y=e.get(P);Y.skyColor.copy(P.color).multiplyScalar(G),Y.groundColor.copy(P.groundColor).multiplyScalar(G),n.hemi[p]=Y,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_FLOAT_1,n.rectAreaLTC2=ce.LTC_FLOAT_2):(n.rectAreaLTC1=ce.LTC_HALF_1,n.rectAreaLTC2=ce.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const L=n.hash;(L.directionalLength!==f||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==y||L.numPointShadows!==b||L.numSpotShadows!==v||L.numSpotMaps!==R||L.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=v+R-w,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=C,L.directionalLength=f,L.pointLength=g,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=y,L.numPointShadows=b,L.numSpotShadows=v,L.numSpotMaps=R,L.numLightProbes=C,n.version=DS++)}function c(l,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,y=l.length;p<y;p++){const b=l[p];if(b.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),u++}else if(b.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),f++}else if(b.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(b.width*.5,0,0),v.halfHeight.set(0,b.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(b.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function tf(s){const e=new IS(s),t=[],n=[];function i(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function NS(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new tf(s),e.set(i,[a])):r>=o.length?(a=new tf(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const US=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,OS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function FS(s,e,t){let n=new eu;const i=new De,r=new De,o=new ot,a=new U0({depthPacking:R_}),c=new O0,l={},h=t.maxTextureSize,u={[Ii]:ln,[ln]:Ii,[_n]:_n},d=new en({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:US,fragmentShader:OS}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new At;g.setAttribute("position",new Tt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ne(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cp;let p=this.type;this.render=function(w,C,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const T=s.getRenderTarget(),M=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),H=s.state;H.setBlending(Li),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const G=p!==vi&&this.type===vi,$=p===vi&&this.type!==vi;for(let Q=0,Y=w.length;Q<Y;Q++){const ie=w[Q],W=ie.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const ue=W.getFrameExtents();if(i.multiply(ue),r.copy(W.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/ue.x),i.x=r.x*ue.x,W.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/ue.y),i.y=r.y*ue.y,W.mapSize.y=r.y)),W.map===null||G===!0||$===!0){const Ae=this.type!==vi?{minFilter:hn,magFilter:hn}:{};W.map!==null&&W.map.dispose(),W.map=new qn(i.x,i.y,Ae),W.map.texture.name=ie.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();const _e=W.getViewportCount();for(let Ae=0;Ae<_e;Ae++){const qe=W.getViewport(Ae);o.set(r.x*qe.x,r.y*qe.y,r.x*qe.z,r.y*qe.w),H.viewport(o),W.updateMatrices(ie,Ae),n=W.getFrustum(),v(C,L,W.camera,ie,this.type)}W.isPointLightShadow!==!0&&this.type===vi&&y(W,L),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(T,M,P)};function y(w,C){const L=e.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new qn(i.x,i.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(C,null,L,d,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(C,null,L,f,_,null)}function b(w,C,L,T){let M=null;const P=L.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)M=P;else if(M=L.isPointLight===!0?c:a,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const H=M.uuid,G=C.uuid;let $=l[H];$===void 0&&($={},l[H]=$);let Q=$[G];Q===void 0&&(Q=M.clone(),$[G]=Q,C.addEventListener("dispose",R)),M=Q}if(M.visible=C.visible,M.wireframe=C.wireframe,T===vi?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:u[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const H=s.properties.get(M);H.light=L}return M}function v(w,C,L,T,M){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===vi)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,w.matrixWorld);const G=e.update(w),$=w.material;if(Array.isArray($)){const Q=G.groups;for(let Y=0,ie=Q.length;Y<ie;Y++){const W=Q[Y],ue=$[W.materialIndex];if(ue&&ue.visible){const _e=b(w,ue,T,M);w.onBeforeShadow(s,w,C,L,G,_e,W),s.renderBufferDirect(L,null,G,_e,w,W),w.onAfterShadow(s,w,C,L,G,_e,W)}}}else if($.visible){const Q=b(w,$,T,M);w.onBeforeShadow(s,w,C,L,G,Q,null),s.renderBufferDirect(L,null,G,Q,w,null),w.onAfterShadow(s,w,C,L,G,Q,null)}}const H=w.children;for(let G=0,$=H.length;G<$;G++)v(H[G],C,L,T,M)}function R(w){w.target.removeEventListener("dispose",R);for(const L in l){const T=l[L],M=w.target.uuid;M in T&&(T[M].dispose(),delete T[M])}}}const BS={[zl]:Gl,[Hl]:Xl,[Vl]:Yl,[Ar]:Wl,[Gl]:zl,[Xl]:Hl,[Yl]:Vl,[Wl]:Ar};function kS(s,e){function t(){let N=!1;const le=new ot;let V=null;const J=new ot(0,0,0,0);return{setMask:function(me){V!==me&&!N&&(s.colorMask(me,me,me,me),V=me)},setLocked:function(me){N=me},setClear:function(me,pe,He,Rt,$t){$t===!0&&(me*=Rt,pe*=Rt,He*=Rt),le.set(me,pe,He,Rt),J.equals(le)===!1&&(s.clearColor(me,pe,He,Rt),J.copy(le))},reset:function(){N=!1,V=null,J.set(-1,0,0,0)}}}function n(){let N=!1,le=!1,V=null,J=null,me=null;return{setReversed:function(pe){if(le!==pe){const He=e.get("EXT_clip_control");le?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT);const Rt=me;me=null,this.setClear(Rt)}le=pe},getReversed:function(){return le},setTest:function(pe){pe?de(s.DEPTH_TEST):Ue(s.DEPTH_TEST)},setMask:function(pe){V!==pe&&!N&&(s.depthMask(pe),V=pe)},setFunc:function(pe){if(le&&(pe=BS[pe]),J!==pe){switch(pe){case zl:s.depthFunc(s.NEVER);break;case Gl:s.depthFunc(s.ALWAYS);break;case Hl:s.depthFunc(s.LESS);break;case Ar:s.depthFunc(s.LEQUAL);break;case Vl:s.depthFunc(s.EQUAL);break;case Wl:s.depthFunc(s.GEQUAL);break;case Xl:s.depthFunc(s.GREATER);break;case Yl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}J=pe}},setLocked:function(pe){N=pe},setClear:function(pe){me!==pe&&(le&&(pe=1-pe),s.clearDepth(pe),me=pe)},reset:function(){N=!1,V=null,J=null,me=null,le=!1}}}function i(){let N=!1,le=null,V=null,J=null,me=null,pe=null,He=null,Rt=null,$t=null;return{setTest:function(lt){N||(lt?de(s.STENCIL_TEST):Ue(s.STENCIL_TEST))},setMask:function(lt){le!==lt&&!N&&(s.stencilMask(lt),le=lt)},setFunc:function(lt,Fn,ui){(V!==lt||J!==Fn||me!==ui)&&(s.stencilFunc(lt,Fn,ui),V=lt,J=Fn,me=ui)},setOp:function(lt,Fn,ui){(pe!==lt||He!==Fn||Rt!==ui)&&(s.stencilOp(lt,Fn,ui),pe=lt,He=Fn,Rt=ui)},setLocked:function(lt){N=lt},setClear:function(lt){$t!==lt&&(s.clearStencil(lt),$t=lt)},reset:function(){N=!1,le=null,V=null,J=null,me=null,pe=null,He=null,Rt=null,$t=null}}}const r=new t,o=new n,a=new i,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,y=null,b=null,v=null,R=null,w=null,C=new Te(0,0,0),L=0,T=!1,M=null,P=null,H=null,G=null,$=null;const Q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,ie=0;const W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(W)[1]),Y=ie>=1):W.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),Y=ie>=2);let ue=null,_e={};const Ae=s.getParameter(s.SCISSOR_BOX),qe=s.getParameter(s.VIEWPORT),gt=new ot().fromArray(Ae),j=new ot().fromArray(qe);function ae(N,le,V,J){const me=new Uint8Array(4),pe=s.createTexture();s.bindTexture(N,pe),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let He=0;He<V;He++)N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY?s.texImage3D(le,0,s.RGBA,1,1,J,0,s.RGBA,s.UNSIGNED_BYTE,me):s.texImage2D(le+He,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,me);return pe}const ye={};ye[s.TEXTURE_2D]=ae(s.TEXTURE_2D,s.TEXTURE_2D,1),ye[s.TEXTURE_CUBE_MAP]=ae(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[s.TEXTURE_2D_ARRAY]=ae(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ye[s.TEXTURE_3D]=ae(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),de(s.DEPTH_TEST),o.setFunc(Ar),Je(!1),Qe(zu),de(s.CULL_FACE),I(Li);function de(N){h[N]!==!0&&(s.enable(N),h[N]=!0)}function Ue(N){h[N]!==!1&&(s.disable(N),h[N]=!1)}function Ge(N,le){return u[N]!==le?(s.bindFramebuffer(N,le),u[N]=le,N===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=le),N===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=le),!0):!1}function $e(N,le){let V=f,J=!1;if(N){V=d.get(le),V===void 0&&(V=[],d.set(le,V));const me=N.textures;if(V.length!==me.length||V[0]!==s.COLOR_ATTACHMENT0){for(let pe=0,He=me.length;pe<He;pe++)V[pe]=s.COLOR_ATTACHMENT0+pe;V.length=me.length,J=!0}}else V[0]!==s.BACK&&(V[0]=s.BACK,J=!0);J&&s.drawBuffers(V)}function bt(N){return g!==N?(s.useProgram(N),g=N,!0):!1}const tt={[gs]:s.FUNC_ADD,[s_]:s.FUNC_SUBTRACT,[r_]:s.FUNC_REVERSE_SUBTRACT};tt[o_]=s.MIN,tt[a_]=s.MAX;const Lt={[c_]:s.ZERO,[l_]:s.ONE,[h_]:s.SRC_COLOR,[Bl]:s.SRC_ALPHA,[g_]:s.SRC_ALPHA_SATURATE,[p_]:s.DST_COLOR,[d_]:s.DST_ALPHA,[u_]:s.ONE_MINUS_SRC_COLOR,[kl]:s.ONE_MINUS_SRC_ALPHA,[m_]:s.ONE_MINUS_DST_COLOR,[f_]:s.ONE_MINUS_DST_ALPHA,[__]:s.CONSTANT_COLOR,[v_]:s.ONE_MINUS_CONSTANT_COLOR,[x_]:s.CONSTANT_ALPHA,[M_]:s.ONE_MINUS_CONSTANT_ALPHA};function I(N,le,V,J,me,pe,He,Rt,$t,lt){if(N===Li){_===!0&&(Ue(s.BLEND),_=!1);return}if(_===!1&&(de(s.BLEND),_=!0),N!==i_){if(N!==m||lt!==T){if((p!==gs||v!==gs)&&(s.blendEquation(s.FUNC_ADD),p=gs,v=gs),lt)switch(N){case nr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case zt:s.blendFunc(s.ONE,s.ONE);break;case Gu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Hu:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case nr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case zt:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Gu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Hu:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}y=null,b=null,R=null,w=null,C.set(0,0,0),L=0,m=N,T=lt}return}me=me||le,pe=pe||V,He=He||J,(le!==p||me!==v)&&(s.blendEquationSeparate(tt[le],tt[me]),p=le,v=me),(V!==y||J!==b||pe!==R||He!==w)&&(s.blendFuncSeparate(Lt[V],Lt[J],Lt[pe],Lt[He]),y=V,b=J,R=pe,w=He),(Rt.equals(C)===!1||$t!==L)&&(s.blendColor(Rt.r,Rt.g,Rt.b,$t),C.copy(Rt),L=$t),m=N,T=!1}function wn(N,le){N.side===_n?Ue(s.CULL_FACE):de(s.CULL_FACE);let V=N.side===ln;le&&(V=!V),Je(V),N.blending===nr&&N.transparent===!1?I(Li):I(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);const J=N.stencilWrite;a.setTest(J),J&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Mt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?de(s.SAMPLE_ALPHA_TO_COVERAGE):Ue(s.SAMPLE_ALPHA_TO_COVERAGE)}function Je(N){M!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),M=N)}function Qe(N){N!==t_?(de(s.CULL_FACE),N!==P&&(N===zu?s.cullFace(s.BACK):N===n_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ue(s.CULL_FACE),P=N}function we(N){N!==H&&(Y&&s.lineWidth(N),H=N)}function Mt(N,le,V){N?(de(s.POLYGON_OFFSET_FILL),(G!==le||$!==V)&&(s.polygonOffset(le,V),G=le,$=V)):Ue(s.POLYGON_OFFSET_FILL)}function Re(N){N?de(s.SCISSOR_TEST):Ue(s.SCISSOR_TEST)}function A(N){N===void 0&&(N=s.TEXTURE0+Q-1),ue!==N&&(s.activeTexture(N),ue=N)}function E(N,le,V){V===void 0&&(ue===null?V=s.TEXTURE0+Q-1:V=ue);let J=_e[V];J===void 0&&(J={type:void 0,texture:void 0},_e[V]=J),(J.type!==N||J.texture!==le)&&(ue!==V&&(s.activeTexture(V),ue=V),s.bindTexture(N,le||ye[N]),J.type=N,J.texture=le)}function B(){const N=_e[ue];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Z(){try{s.compressedTexImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function te(){try{s.compressedTexImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function K(){try{s.texSubImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function be(){try{s.texSubImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function fe(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ve(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function nt(){try{s.texStorage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function oe(){try{s.texStorage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function xe(){try{s.texImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ie(){try{s.texImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Oe(N){gt.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),gt.copy(N))}function Me(N){j.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),j.copy(N))}function et(N,le){let V=l.get(le);V===void 0&&(V=new WeakMap,l.set(le,V));let J=V.get(N);J===void 0&&(J=s.getUniformBlockIndex(le,N.name),V.set(N,J))}function We(N,le){const J=l.get(le).get(N);c.get(le)!==J&&(s.uniformBlockBinding(le,J,N.__bindingPointIndex),c.set(le,J))}function _t(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},ue=null,_e={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,y=null,b=null,v=null,R=null,w=null,C=new Te(0,0,0),L=0,T=!1,M=null,P=null,H=null,G=null,$=null,gt.set(0,0,s.canvas.width,s.canvas.height),j.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:de,disable:Ue,bindFramebuffer:Ge,drawBuffers:$e,useProgram:bt,setBlending:I,setMaterial:wn,setFlipSided:Je,setCullFace:Qe,setLineWidth:we,setPolygonOffset:Mt,setScissorTest:Re,activeTexture:A,bindTexture:E,unbindTexture:B,compressedTexImage2D:Z,compressedTexImage3D:te,texImage2D:xe,texImage3D:Ie,updateUBOMapping:et,uniformBlockBinding:We,texStorage2D:nt,texStorage3D:oe,texSubImage2D:K,texSubImage3D:be,compressedTexSubImage2D:fe,compressedTexSubImage3D:ve,scissor:Oe,viewport:Me,reset:_t}}function zS(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new De,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,E){return f?new OffscreenCanvas(A,E):yo("canvas")}function _(A,E,B){let Z=1;const te=Re(A);if((te.width>B||te.height>B)&&(Z=B/Math.max(te.width,te.height)),Z<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const K=Math.floor(Z*te.width),be=Math.floor(Z*te.height);u===void 0&&(u=g(K,be));const fe=E?g(K,be):u;return fe.width=K,fe.height=be,fe.getContext("2d").drawImage(A,0,0,K,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+K+"x"+be+")."),fe}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){s.generateMipmap(A)}function y(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(A,E,B,Z,te=!1){if(A!==null){if(s[A]!==void 0)return s[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let K=E;if(E===s.RED&&(B===s.FLOAT&&(K=s.R32F),B===s.HALF_FLOAT&&(K=s.R16F),B===s.UNSIGNED_BYTE&&(K=s.R8)),E===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&(K=s.R8UI),B===s.UNSIGNED_SHORT&&(K=s.R16UI),B===s.UNSIGNED_INT&&(K=s.R32UI),B===s.BYTE&&(K=s.R8I),B===s.SHORT&&(K=s.R16I),B===s.INT&&(K=s.R32I)),E===s.RG&&(B===s.FLOAT&&(K=s.RG32F),B===s.HALF_FLOAT&&(K=s.RG16F),B===s.UNSIGNED_BYTE&&(K=s.RG8)),E===s.RG_INTEGER&&(B===s.UNSIGNED_BYTE&&(K=s.RG8UI),B===s.UNSIGNED_SHORT&&(K=s.RG16UI),B===s.UNSIGNED_INT&&(K=s.RG32UI),B===s.BYTE&&(K=s.RG8I),B===s.SHORT&&(K=s.RG16I),B===s.INT&&(K=s.RG32I)),E===s.RGB_INTEGER&&(B===s.UNSIGNED_BYTE&&(K=s.RGB8UI),B===s.UNSIGNED_SHORT&&(K=s.RGB16UI),B===s.UNSIGNED_INT&&(K=s.RGB32UI),B===s.BYTE&&(K=s.RGB8I),B===s.SHORT&&(K=s.RGB16I),B===s.INT&&(K=s.RGB32I)),E===s.RGBA_INTEGER&&(B===s.UNSIGNED_BYTE&&(K=s.RGBA8UI),B===s.UNSIGNED_SHORT&&(K=s.RGBA16UI),B===s.UNSIGNED_INT&&(K=s.RGBA32UI),B===s.BYTE&&(K=s.RGBA8I),B===s.SHORT&&(K=s.RGBA16I),B===s.INT&&(K=s.RGBA32I)),E===s.RGB&&B===s.UNSIGNED_INT_5_9_9_9_REV&&(K=s.RGB9_E5),E===s.RGBA){const be=te?dc:Ze.getTransfer(Z);B===s.FLOAT&&(K=s.RGBA32F),B===s.HALF_FLOAT&&(K=s.RGBA16F),B===s.UNSIGNED_BYTE&&(K=be===ht?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT_4_4_4_4&&(K=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&(K=s.RGB5_A1)}return(K===s.R16F||K===s.R32F||K===s.RG16F||K===s.RG32F||K===s.RGBA16F||K===s.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function v(A,E){let B;return A?E===null||E===As||E===Lr?B=s.DEPTH24_STENCIL8:E===Xn?B=s.DEPTH32F_STENCIL8:E===Mo&&(B=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===As||E===Lr?B=s.DEPTH_COMPONENT24:E===Xn?B=s.DEPTH_COMPONENT32F:E===Mo&&(B=s.DEPTH_COMPONENT16),B}function R(A,E){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==hn&&A.minFilter!==Tn?Math.log2(Math.max(E.width,E.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?E.mipmaps.length:1}function w(A){const E=A.target;E.removeEventListener("dispose",w),L(E),E.isVideoTexture&&h.delete(E)}function C(A){const E=A.target;E.removeEventListener("dispose",C),M(E)}function L(A){const E=n.get(A);if(E.__webglInit===void 0)return;const B=A.source,Z=d.get(B);if(Z){const te=Z[E.__cacheKey];te.usedTimes--,te.usedTimes===0&&T(A),Object.keys(Z).length===0&&d.delete(B)}n.remove(A)}function T(A){const E=n.get(A);s.deleteTexture(E.__webglTexture);const B=A.source,Z=d.get(B);delete Z[E.__cacheKey],o.memory.textures--}function M(A){const E=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(E.__webglFramebuffer[Z]))for(let te=0;te<E.__webglFramebuffer[Z].length;te++)s.deleteFramebuffer(E.__webglFramebuffer[Z][te]);else s.deleteFramebuffer(E.__webglFramebuffer[Z]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[Z])}else{if(Array.isArray(E.__webglFramebuffer))for(let Z=0;Z<E.__webglFramebuffer.length;Z++)s.deleteFramebuffer(E.__webglFramebuffer[Z]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Z=0;Z<E.__webglColorRenderbuffer.length;Z++)E.__webglColorRenderbuffer[Z]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[Z]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const B=A.textures;for(let Z=0,te=B.length;Z<te;Z++){const K=n.get(B[Z]);K.__webglTexture&&(s.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(B[Z])}n.remove(A)}let P=0;function H(){P=0}function G(){const A=P;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),P+=1,A}function $(A){const E=[];return E.push(A.wrapS),E.push(A.wrapT),E.push(A.wrapR||0),E.push(A.magFilter),E.push(A.minFilter),E.push(A.anisotropy),E.push(A.internalFormat),E.push(A.format),E.push(A.type),E.push(A.generateMipmaps),E.push(A.premultiplyAlpha),E.push(A.flipY),E.push(A.unpackAlignment),E.push(A.colorSpace),E.join()}function Q(A,E){const B=n.get(A);if(A.isVideoTexture&&we(A),A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){const Z=A.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(B,A,E);return}}t.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+E)}function Y(A,E){const B=n.get(A);if(A.version>0&&B.__version!==A.version){j(B,A,E);return}t.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+E)}function ie(A,E){const B=n.get(A);if(A.version>0&&B.__version!==A.version){j(B,A,E);return}t.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+E)}function W(A,E){const B=n.get(A);if(A.version>0&&B.__version!==A.version){ae(B,A,E);return}t.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+E)}const ue={[Cr]:s.REPEAT,[ji]:s.CLAMP_TO_EDGE,[uc]:s.MIRRORED_REPEAT},_e={[hn]:s.NEAREST,[_p]:s.NEAREST_MIPMAP_NEAREST,[oo]:s.NEAREST_MIPMAP_LINEAR,[Tn]:s.LINEAR,[ec]:s.LINEAR_MIPMAP_NEAREST,[Ai]:s.LINEAR_MIPMAP_LINEAR},Ae={[L_]:s.NEVER,[O_]:s.ALWAYS,[D_]:s.LESS,[Cp]:s.LEQUAL,[P_]:s.EQUAL,[U_]:s.GEQUAL,[I_]:s.GREATER,[N_]:s.NOTEQUAL};function qe(A,E){if(E.type===Xn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Tn||E.magFilter===ec||E.magFilter===oo||E.magFilter===Ai||E.minFilter===Tn||E.minFilter===ec||E.minFilter===oo||E.minFilter===Ai)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,ue[E.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,ue[E.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,ue[E.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,_e[E.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,_e[E.minFilter]),E.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,Ae[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===hn||E.minFilter!==oo&&E.minFilter!==Ai||E.type===Xn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");s.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function gt(A,E){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,E.addEventListener("dispose",w));const Z=E.source;let te=d.get(Z);te===void 0&&(te={},d.set(Z,te));const K=$(E);if(K!==A.__cacheKey){te[K]===void 0&&(te[K]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,B=!0),te[K].usedTimes++;const be=te[A.__cacheKey];be!==void 0&&(te[A.__cacheKey].usedTimes--,be.usedTimes===0&&T(E)),A.__cacheKey=K,A.__webglTexture=te[K].texture}return B}function j(A,E,B){let Z=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Z=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Z=s.TEXTURE_3D);const te=gt(A,E),K=E.source;t.bindTexture(Z,A.__webglTexture,s.TEXTURE0+B);const be=n.get(K);if(K.version!==be.__version||te===!0){t.activeTexture(s.TEXTURE0+B);const fe=Ze.getPrimaries(Ze.workingColorSpace),ve=E.colorSpace===Xi?null:Ze.getPrimaries(E.colorSpace),nt=E.colorSpace===Xi||fe===ve?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let oe=_(E.image,!1,i.maxTextureSize);oe=Mt(E,oe);const xe=r.convert(E.format,E.colorSpace),Ie=r.convert(E.type);let Oe=b(E.internalFormat,xe,Ie,E.colorSpace,E.isVideoTexture);qe(Z,E);let Me;const et=E.mipmaps,We=E.isVideoTexture!==!0,_t=be.__version===void 0||te===!0,N=K.dataReady,le=R(E,oe);if(E.isDepthTexture)Oe=v(E.format===Dr,E.type),_t&&(We?t.texStorage2D(s.TEXTURE_2D,1,Oe,oe.width,oe.height):t.texImage2D(s.TEXTURE_2D,0,Oe,oe.width,oe.height,0,xe,Ie,null));else if(E.isDataTexture)if(et.length>0){We&&_t&&t.texStorage2D(s.TEXTURE_2D,le,Oe,et[0].width,et[0].height);for(let V=0,J=et.length;V<J;V++)Me=et[V],We?N&&t.texSubImage2D(s.TEXTURE_2D,V,0,0,Me.width,Me.height,xe,Ie,Me.data):t.texImage2D(s.TEXTURE_2D,V,Oe,Me.width,Me.height,0,xe,Ie,Me.data);E.generateMipmaps=!1}else We?(_t&&t.texStorage2D(s.TEXTURE_2D,le,Oe,oe.width,oe.height),N&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,oe.width,oe.height,xe,Ie,oe.data)):t.texImage2D(s.TEXTURE_2D,0,Oe,oe.width,oe.height,0,xe,Ie,oe.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){We&&_t&&t.texStorage3D(s.TEXTURE_2D_ARRAY,le,Oe,et[0].width,et[0].height,oe.depth);for(let V=0,J=et.length;V<J;V++)if(Me=et[V],E.format!==On)if(xe!==null)if(We){if(N)if(E.layerUpdates.size>0){const me=Pd(Me.width,Me.height,E.format,E.type);for(const pe of E.layerUpdates){const He=Me.data.subarray(pe*me/Me.data.BYTES_PER_ELEMENT,(pe+1)*me/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,V,0,0,pe,Me.width,Me.height,1,xe,He)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,V,0,0,0,Me.width,Me.height,oe.depth,xe,Me.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,V,Oe,Me.width,Me.height,oe.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else We?N&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,V,0,0,0,Me.width,Me.height,oe.depth,xe,Ie,Me.data):t.texImage3D(s.TEXTURE_2D_ARRAY,V,Oe,Me.width,Me.height,oe.depth,0,xe,Ie,Me.data)}else{We&&_t&&t.texStorage2D(s.TEXTURE_2D,le,Oe,et[0].width,et[0].height);for(let V=0,J=et.length;V<J;V++)Me=et[V],E.format!==On?xe!==null?We?N&&t.compressedTexSubImage2D(s.TEXTURE_2D,V,0,0,Me.width,Me.height,xe,Me.data):t.compressedTexImage2D(s.TEXTURE_2D,V,Oe,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?N&&t.texSubImage2D(s.TEXTURE_2D,V,0,0,Me.width,Me.height,xe,Ie,Me.data):t.texImage2D(s.TEXTURE_2D,V,Oe,Me.width,Me.height,0,xe,Ie,Me.data)}else if(E.isDataArrayTexture)if(We){if(_t&&t.texStorage3D(s.TEXTURE_2D_ARRAY,le,Oe,oe.width,oe.height,oe.depth),N)if(E.layerUpdates.size>0){const V=Pd(oe.width,oe.height,E.format,E.type);for(const J of E.layerUpdates){const me=oe.data.subarray(J*V/oe.data.BYTES_PER_ELEMENT,(J+1)*V/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,J,oe.width,oe.height,1,xe,Ie,me)}E.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,xe,Ie,oe.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Oe,oe.width,oe.height,oe.depth,0,xe,Ie,oe.data);else if(E.isData3DTexture)We?(_t&&t.texStorage3D(s.TEXTURE_3D,le,Oe,oe.width,oe.height,oe.depth),N&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,xe,Ie,oe.data)):t.texImage3D(s.TEXTURE_3D,0,Oe,oe.width,oe.height,oe.depth,0,xe,Ie,oe.data);else if(E.isFramebufferTexture){if(_t)if(We)t.texStorage2D(s.TEXTURE_2D,le,Oe,oe.width,oe.height);else{let V=oe.width,J=oe.height;for(let me=0;me<le;me++)t.texImage2D(s.TEXTURE_2D,me,Oe,V,J,0,xe,Ie,null),V>>=1,J>>=1}}else if(et.length>0){if(We&&_t){const V=Re(et[0]);t.texStorage2D(s.TEXTURE_2D,le,Oe,V.width,V.height)}for(let V=0,J=et.length;V<J;V++)Me=et[V],We?N&&t.texSubImage2D(s.TEXTURE_2D,V,0,0,xe,Ie,Me):t.texImage2D(s.TEXTURE_2D,V,Oe,xe,Ie,Me);E.generateMipmaps=!1}else if(We){if(_t){const V=Re(oe);t.texStorage2D(s.TEXTURE_2D,le,Oe,V.width,V.height)}N&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,xe,Ie,oe)}else t.texImage2D(s.TEXTURE_2D,0,Oe,xe,Ie,oe);m(E)&&p(Z),be.__version=K.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function ae(A,E,B){if(E.image.length!==6)return;const Z=gt(A,E),te=E.source;t.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+B);const K=n.get(te);if(te.version!==K.__version||Z===!0){t.activeTexture(s.TEXTURE0+B);const be=Ze.getPrimaries(Ze.workingColorSpace),fe=E.colorSpace===Xi?null:Ze.getPrimaries(E.colorSpace),ve=E.colorSpace===Xi||be===fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const nt=E.isCompressedTexture||E.image[0].isCompressedTexture,oe=E.image[0]&&E.image[0].isDataTexture,xe=[];for(let J=0;J<6;J++)!nt&&!oe?xe[J]=_(E.image[J],!0,i.maxCubemapSize):xe[J]=oe?E.image[J].image:E.image[J],xe[J]=Mt(E,xe[J]);const Ie=xe[0],Oe=r.convert(E.format,E.colorSpace),Me=r.convert(E.type),et=b(E.internalFormat,Oe,Me,E.colorSpace),We=E.isVideoTexture!==!0,_t=K.__version===void 0||Z===!0,N=te.dataReady;let le=R(E,Ie);qe(s.TEXTURE_CUBE_MAP,E);let V;if(nt){We&&_t&&t.texStorage2D(s.TEXTURE_CUBE_MAP,le,et,Ie.width,Ie.height);for(let J=0;J<6;J++){V=xe[J].mipmaps;for(let me=0;me<V.length;me++){const pe=V[me];E.format!==On?Oe!==null?We?N&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,me,0,0,pe.width,pe.height,Oe,pe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,me,et,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?N&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,me,0,0,pe.width,pe.height,Oe,Me,pe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,me,et,pe.width,pe.height,0,Oe,Me,pe.data)}}}else{if(V=E.mipmaps,We&&_t){V.length>0&&le++;const J=Re(xe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,le,et,J.width,J.height)}for(let J=0;J<6;J++)if(oe){We?N&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,xe[J].width,xe[J].height,Oe,Me,xe[J].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,et,xe[J].width,xe[J].height,0,Oe,Me,xe[J].data);for(let me=0;me<V.length;me++){const He=V[me].image[J].image;We?N&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,me+1,0,0,He.width,He.height,Oe,Me,He.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,me+1,et,He.width,He.height,0,Oe,Me,He.data)}}else{We?N&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Oe,Me,xe[J]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,et,Oe,Me,xe[J]);for(let me=0;me<V.length;me++){const pe=V[me];We?N&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,me+1,0,0,Oe,Me,pe.image[J]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,me+1,et,Oe,Me,pe.image[J])}}}m(E)&&p(s.TEXTURE_CUBE_MAP),K.__version=te.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function ye(A,E,B,Z,te,K){const be=r.convert(B.format,B.colorSpace),fe=r.convert(B.type),ve=b(B.internalFormat,be,fe,B.colorSpace),nt=n.get(E),oe=n.get(B);if(oe.__renderTarget=E,!nt.__hasExternalTextures){const xe=Math.max(1,E.width>>K),Ie=Math.max(1,E.height>>K);te===s.TEXTURE_3D||te===s.TEXTURE_2D_ARRAY?t.texImage3D(te,K,ve,xe,Ie,E.depth,0,be,fe,null):t.texImage2D(te,K,ve,xe,Ie,0,be,fe,null)}t.bindFramebuffer(s.FRAMEBUFFER,A),Qe(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Z,te,oe.__webglTexture,0,Je(E)):(te===s.TEXTURE_2D||te>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Z,te,oe.__webglTexture,K),t.bindFramebuffer(s.FRAMEBUFFER,null)}function de(A,E,B){if(s.bindRenderbuffer(s.RENDERBUFFER,A),E.depthBuffer){const Z=E.depthTexture,te=Z&&Z.isDepthTexture?Z.type:null,K=v(E.stencilBuffer,te),be=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=Je(E);Qe(E)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,fe,K,E.width,E.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,fe,K,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,K,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,be,s.RENDERBUFFER,A)}else{const Z=E.textures;for(let te=0;te<Z.length;te++){const K=Z[te],be=r.convert(K.format,K.colorSpace),fe=r.convert(K.type),ve=b(K.internalFormat,be,fe,K.colorSpace),nt=Je(E);B&&Qe(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,nt,ve,E.width,E.height):Qe(E)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,nt,ve,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,ve,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ue(A,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,A),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(E.depthTexture);Z.__renderTarget=E,(!Z.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Q(E.depthTexture,0);const te=Z.__webglTexture,K=Je(E);if(E.depthTexture.format===ir)Qe(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,te,0,K):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,te,0);else if(E.depthTexture.format===Dr)Qe(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,te,0,K):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Ge(A){const E=n.get(A),B=A.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==A.depthTexture){const Z=A.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Z){const te=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Z.removeEventListener("dispose",te)};Z.addEventListener("dispose",te),E.__depthDisposeCallback=te}E.__boundDepthTexture=Z}if(A.depthTexture&&!E.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Ue(E.__webglFramebuffer,A)}else if(B){E.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[Z]),E.__webglDepthbuffer[Z]===void 0)E.__webglDepthbuffer[Z]=s.createRenderbuffer(),de(E.__webglDepthbuffer[Z],A,!1);else{const te=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,K=E.__webglDepthbuffer[Z];s.bindRenderbuffer(s.RENDERBUFFER,K),s.framebufferRenderbuffer(s.FRAMEBUFFER,te,s.RENDERBUFFER,K)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),de(E.__webglDepthbuffer,A,!1);else{const Z=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,te=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,te),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,te)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function $e(A,E,B){const Z=n.get(A);E!==void 0&&ye(Z.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&Ge(A)}function bt(A){const E=A.texture,B=n.get(A),Z=n.get(E);A.addEventListener("dispose",C);const te=A.textures,K=A.isWebGLCubeRenderTarget===!0,be=te.length>1;if(be||(Z.__webglTexture===void 0&&(Z.__webglTexture=s.createTexture()),Z.__version=E.version,o.memory.textures++),K){B.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(E.mipmaps&&E.mipmaps.length>0){B.__webglFramebuffer[fe]=[];for(let ve=0;ve<E.mipmaps.length;ve++)B.__webglFramebuffer[fe][ve]=s.createFramebuffer()}else B.__webglFramebuffer[fe]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){B.__webglFramebuffer=[];for(let fe=0;fe<E.mipmaps.length;fe++)B.__webglFramebuffer[fe]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(be)for(let fe=0,ve=te.length;fe<ve;fe++){const nt=n.get(te[fe]);nt.__webglTexture===void 0&&(nt.__webglTexture=s.createTexture(),o.memory.textures++)}if(A.samples>0&&Qe(A)===!1){B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let fe=0;fe<te.length;fe++){const ve=te[fe];B.__webglColorRenderbuffer[fe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[fe]);const nt=r.convert(ve.format,ve.colorSpace),oe=r.convert(ve.type),xe=b(ve.internalFormat,nt,oe,ve.colorSpace,A.isXRRenderTarget===!0),Ie=Je(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ie,xe,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,B.__webglColorRenderbuffer[fe])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),de(B.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(K){t.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),qe(s.TEXTURE_CUBE_MAP,E);for(let fe=0;fe<6;fe++)if(E.mipmaps&&E.mipmaps.length>0)for(let ve=0;ve<E.mipmaps.length;ve++)ye(B.__webglFramebuffer[fe][ve],A,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ve);else ye(B.__webglFramebuffer[fe],A,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(E)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let fe=0,ve=te.length;fe<ve;fe++){const nt=te[fe],oe=n.get(nt);t.bindTexture(s.TEXTURE_2D,oe.__webglTexture),qe(s.TEXTURE_2D,nt),ye(B.__webglFramebuffer,A,nt,s.COLOR_ATTACHMENT0+fe,s.TEXTURE_2D,0),m(nt)&&p(s.TEXTURE_2D)}t.unbindTexture()}else{let fe=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(fe=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(fe,Z.__webglTexture),qe(fe,E),E.mipmaps&&E.mipmaps.length>0)for(let ve=0;ve<E.mipmaps.length;ve++)ye(B.__webglFramebuffer[ve],A,E,s.COLOR_ATTACHMENT0,fe,ve);else ye(B.__webglFramebuffer,A,E,s.COLOR_ATTACHMENT0,fe,0);m(E)&&p(fe),t.unbindTexture()}A.depthBuffer&&Ge(A)}function tt(A){const E=A.textures;for(let B=0,Z=E.length;B<Z;B++){const te=E[B];if(m(te)){const K=y(A),be=n.get(te).__webglTexture;t.bindTexture(K,be),p(K),t.unbindTexture()}}}const Lt=[],I=[];function wn(A){if(A.samples>0){if(Qe(A)===!1){const E=A.textures,B=A.width,Z=A.height;let te=s.COLOR_BUFFER_BIT;const K=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,be=n.get(A),fe=E.length>1;if(fe)for(let ve=0;ve<E.length;ve++)t.bindFramebuffer(s.FRAMEBUFFER,be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let ve=0;ve<E.length;ve++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(te|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(te|=s.STENCIL_BUFFER_BIT)),fe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,be.__webglColorRenderbuffer[ve]);const nt=n.get(E[ve]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,nt,0)}s.blitFramebuffer(0,0,B,Z,0,0,B,Z,te,s.NEAREST),c===!0&&(Lt.length=0,I.length=0,Lt.push(s.COLOR_ATTACHMENT0+ve),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Lt.push(K),I.push(K),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,I)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Lt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),fe)for(let ve=0;ve<E.length;ve++){t.bindFramebuffer(s.FRAMEBUFFER,be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.RENDERBUFFER,be.__webglColorRenderbuffer[ve]);const nt=n.get(E[ve]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.TEXTURE_2D,nt,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const E=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function Je(A){return Math.min(i.maxSamples,A.samples)}function Qe(A){const E=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function we(A){const E=o.render.frame;h.get(A)!==E&&(h.set(A,E),A.update())}function Mt(A,E){const B=A.colorSpace,Z=A.format,te=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==un&&B!==Xi&&(Ze.getTransfer(B)===ht?(Z!==On||te!==Ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),E}function Re(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=G,this.resetTextureUnits=H,this.setTexture2D=Q,this.setTexture2DArray=Y,this.setTexture3D=ie,this.setTextureCube=W,this.rebindTextures=$e,this.setupRenderTarget=bt,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=wn,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=Qe}function GS(s,e){function t(n,i=Xi){let r;const o=Ze.getTransfer(i);if(n===Ni)return s.UNSIGNED_BYTE;if(n===Vh)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Wh)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Mp)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===vp)return s.BYTE;if(n===xp)return s.SHORT;if(n===Mo)return s.UNSIGNED_SHORT;if(n===Hh)return s.INT;if(n===As)return s.UNSIGNED_INT;if(n===Xn)return s.FLOAT;if(n===Di)return s.HALF_FLOAT;if(n===Ep)return s.ALPHA;if(n===Sp)return s.RGB;if(n===On)return s.RGBA;if(n===yp)return s.LUMINANCE;if(n===bp)return s.LUMINANCE_ALPHA;if(n===ir)return s.DEPTH_COMPONENT;if(n===Dr)return s.DEPTH_STENCIL;if(n===Xh)return s.RED;if(n===Yh)return s.RED_INTEGER;if(n===Tp)return s.RG;if(n===qh)return s.RG_INTEGER;if(n===$h)return s.RGBA_INTEGER;if(n===tc||n===nc||n===ic||n===sc)if(o===ht)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===tc)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===nc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ic)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===sc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===tc)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===nc)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ic)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===sc)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Kl||n===jl||n===Zl||n===Jl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Kl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===jl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Zl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Jl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ql||n===eh||n===th)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ql||n===eh)return o===ht?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===th)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===nh||n===ih||n===sh||n===rh||n===oh||n===ah||n===ch||n===lh||n===hh||n===uh||n===dh||n===fh||n===ph||n===mh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===nh)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ih)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===sh)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===rh)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===oh)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ah)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ch)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===lh)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===hh)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===uh)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===dh)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===fh)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ph)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===mh)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===rc||n===gh||n===_h)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===rc)return o===ht?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===gh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===_h)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ap||n===vh||n===xh||n===Mh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===rc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===vh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===xh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Mh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Lr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const HS={type:"move"};class _l{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new an,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new an,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new an,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(HS)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new an;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const VS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,WS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class XS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Gt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new en({vertexShader:VS,fragmentShader:WS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ne(new fa(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class YS extends Br{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const _=new XS,m=t.getContextAttributes();let p=null,y=null;const b=[],v=[],R=new De;let w=null;const C=new cn;C.viewport=new ot;const L=new cn;L.viewport=new ot;const T=[C,L],M=new iv;let P=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ae=b[j];return ae===void 0&&(ae=new _l,b[j]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(j){let ae=b[j];return ae===void 0&&(ae=new _l,b[j]=ae),ae.getGripSpace()},this.getHand=function(j){let ae=b[j];return ae===void 0&&(ae=new _l,b[j]=ae),ae.getHandSpace()};function G(j){const ae=v.indexOf(j.inputSource);if(ae===-1)return;const ye=b[ae];ye!==void 0&&(ye.update(j.inputSource,j.frame,l||o),ye.dispatchEvent({type:j.type,data:j.inputSource}))}function $(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",$),i.removeEventListener("inputsourceschange",Q);for(let j=0;j<b.length;j++){const ae=v[j];ae!==null&&(v[j]=null,b[j].disconnect(ae))}P=null,H=null,_.reset(),e.setRenderTarget(p),f=null,d=null,u=null,i=null,y=null,gt.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",$),i.addEventListener("inputsourceschange",Q),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(R),i.renderState.layers===void 0){const ae={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,ae),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new qn(f.framebufferWidth,f.framebufferHeight,{format:On,type:Ni,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ae=null,ye=null,de=null;m.depth&&(de=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=m.stencil?Dr:ir,ye=m.stencil?Lr:As);const Ue={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:r};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(Ue),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new qn(d.textureWidth,d.textureHeight,{format:On,type:Ni,depthTexture:new Vp(d.textureWidth,d.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),gt.setContext(i),gt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Q(j){for(let ae=0;ae<j.removed.length;ae++){const ye=j.removed[ae],de=v.indexOf(ye);de>=0&&(v[de]=null,b[de].disconnect(ye))}for(let ae=0;ae<j.added.length;ae++){const ye=j.added[ae];let de=v.indexOf(ye);if(de===-1){for(let Ge=0;Ge<b.length;Ge++)if(Ge>=v.length){v.push(ye),de=Ge;break}else if(v[Ge]===null){v[Ge]=ye,de=Ge;break}if(de===-1)break}const Ue=b[de];Ue&&Ue.connect(ye)}}const Y=new D,ie=new D;function W(j,ae,ye){Y.setFromMatrixPosition(ae.matrixWorld),ie.setFromMatrixPosition(ye.matrixWorld);const de=Y.distanceTo(ie),Ue=ae.projectionMatrix.elements,Ge=ye.projectionMatrix.elements,$e=Ue[14]/(Ue[10]-1),bt=Ue[14]/(Ue[10]+1),tt=(Ue[9]+1)/Ue[5],Lt=(Ue[9]-1)/Ue[5],I=(Ue[8]-1)/Ue[0],wn=(Ge[8]+1)/Ge[0],Je=$e*I,Qe=$e*wn,we=de/(-I+wn),Mt=we*-I;if(ae.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Mt),j.translateZ(we),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Ue[10]===-1)j.projectionMatrix.copy(ae.projectionMatrix),j.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const Re=$e+we,A=bt+we,E=Je-Mt,B=Qe+(de-Mt),Z=tt*bt/A*Re,te=Lt*bt/A*Re;j.projectionMatrix.makePerspective(E,B,Z,te,Re,A),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ue(j,ae){ae===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ae.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let ae=j.near,ye=j.far;_.texture!==null&&(_.depthNear>0&&(ae=_.depthNear),_.depthFar>0&&(ye=_.depthFar)),M.near=L.near=C.near=ae,M.far=L.far=C.far=ye,(P!==M.near||H!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,H=M.far),C.layers.mask=j.layers.mask|2,L.layers.mask=j.layers.mask|4,M.layers.mask=C.layers.mask|L.layers.mask;const de=j.parent,Ue=M.cameras;ue(M,de);for(let Ge=0;Ge<Ue.length;Ge++)ue(Ue[Ge],de);Ue.length===2?W(M,C,L):M.projectionMatrix.copy(C.projectionMatrix),_e(j,M,de)};function _e(j,ae,ye){ye===null?j.matrix.copy(ae.matrixWorld):(j.matrix.copy(ye.matrixWorld),j.matrix.invert(),j.matrix.multiply(ae.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ae.projectionMatrix),j.projectionMatrixInverse.copy(ae.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Pr*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(j){c=j,d!==null&&(d.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let Ae=null;function qe(j,ae){if(h=ae.getViewerPose(l||o),g=ae,h!==null){const ye=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let de=!1;ye.length!==M.cameras.length&&(M.cameras.length=0,de=!0);for(let Ge=0;Ge<ye.length;Ge++){const $e=ye[Ge];let bt=null;if(f!==null)bt=f.getViewport($e);else{const Lt=u.getViewSubImage(d,$e);bt=Lt.viewport,Ge===0&&(e.setRenderTargetTextures(y,Lt.colorTexture,d.ignoreDepthValues?void 0:Lt.depthStencilTexture),e.setRenderTarget(y))}let tt=T[Ge];tt===void 0&&(tt=new cn,tt.layers.enable(Ge),tt.viewport=new ot,T[Ge]=tt),tt.matrix.fromArray($e.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray($e.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(bt.x,bt.y,bt.width,bt.height),Ge===0&&(M.matrix.copy(tt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),de===!0&&M.cameras.push(tt)}const Ue=i.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")){const Ge=u.getDepthInformation(ye[0]);Ge&&Ge.isValid&&Ge.texture&&_.init(e,Ge,i.renderState)}}for(let ye=0;ye<b.length;ye++){const de=v[ye],Ue=b[ye];de!==null&&Ue!==void 0&&Ue.update(de,ae,l||o)}Ae&&Ae(j,ae),ae.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ae}),g=null}const gt=new qp;gt.setAnimationLoop(qe),this.setAnimationLoop=function(j){Ae=j},this.dispose=function(){}}}const us=new ai,qS=new ze;function $S(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Op(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,y,b,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,y,b):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ln&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ln&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p),b=y.envMap,v=y.envMapRotation;b&&(m.envMap.value=b,us.copy(v),us.x*=-1,us.y*=-1,us.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(us.y*=-1,us.z*=-1),m.envMapRotation.value.setFromMatrix4(qS.makeRotationFromEuler(us)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,y,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ln&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function KS(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,b){const v=b.program;n.uniformBlockBinding(y,v)}function l(y,b){let v=i[y.id];v===void 0&&(g(y),v=h(y),i[y.id]=v,y.addEventListener("dispose",m));const R=b.program;n.updateUBOMapping(y,R);const w=e.render.frame;r[y.id]!==w&&(d(y),r[y.id]=w)}function h(y){const b=u();y.__bindingPointIndex=b;const v=s.createBuffer(),R=y.__size,w=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,R,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,v),v}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const b=i[y.id],v=y.uniforms,R=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let w=0,C=v.length;w<C;w++){const L=Array.isArray(v[w])?v[w]:[v[w]];for(let T=0,M=L.length;T<M;T++){const P=L[T];if(f(P,w,T,R)===!0){const H=P.__offset,G=Array.isArray(P.value)?P.value:[P.value];let $=0;for(let Q=0;Q<G.length;Q++){const Y=G[Q],ie=_(Y);typeof Y=="number"||typeof Y=="boolean"?(P.__data[0]=Y,s.bufferSubData(s.UNIFORM_BUFFER,H+$,P.__data)):Y.isMatrix3?(P.__data[0]=Y.elements[0],P.__data[1]=Y.elements[1],P.__data[2]=Y.elements[2],P.__data[3]=0,P.__data[4]=Y.elements[3],P.__data[5]=Y.elements[4],P.__data[6]=Y.elements[5],P.__data[7]=0,P.__data[8]=Y.elements[6],P.__data[9]=Y.elements[7],P.__data[10]=Y.elements[8],P.__data[11]=0):(Y.toArray(P.__data,$),$+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,H,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(y,b,v,R){const w=y.value,C=b+"_"+v;if(R[C]===void 0)return typeof w=="number"||typeof w=="boolean"?R[C]=w:R[C]=w.clone(),!0;{const L=R[C];if(typeof w=="number"||typeof w=="boolean"){if(L!==w)return R[C]=w,!0}else if(L.equals(w)===!1)return L.copy(w),!0}return!1}function g(y){const b=y.uniforms;let v=0;const R=16;for(let C=0,L=b.length;C<L;C++){const T=Array.isArray(b[C])?b[C]:[b[C]];for(let M=0,P=T.length;M<P;M++){const H=T[M],G=Array.isArray(H.value)?H.value:[H.value];for(let $=0,Q=G.length;$<Q;$++){const Y=G[$],ie=_(Y),W=v%R,ue=W%ie.boundary,_e=W+ue;v+=ue,_e!==0&&R-_e<ie.storage&&(v+=R-_e),H.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=v,v+=ie.storage}}}const w=v%R;return w>0&&(v+=R-w),y.__size=v,y.__cache={},this}function _(y){const b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),b}function m(y){const b=y.target;b.removeEventListener("dispose",m);const v=o.indexOf(b.__bindingPointIndex);o.splice(v,1),s.deleteBuffer(i[b.id]),delete i[b.id],delete r[b.id]}function p(){for(const y in i)s.deleteBuffer(i[y]);o=[],i={},r={}}return{bind:c,update:l,dispose:p}}class jS{constructor(e={}){const{canvas:t=e0(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const y=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Yt,this.toneMapping=Qi,this.toneMappingExposure=1;const v=this;let R=!1,w=0,C=0,L=null,T=-1,M=null;const P=new ot,H=new ot;let G=null;const $=new Te(0);let Q=0,Y=t.width,ie=t.height,W=1,ue=null,_e=null;const Ae=new ot(0,0,Y,ie),qe=new ot(0,0,Y,ie);let gt=!1;const j=new eu;let ae=!1,ye=!1;const de=new ze,Ue=new ze,Ge=new D,$e=new ot,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let tt=!1;function Lt(){return L===null?W:1}let I=n;function wn(S,U){return t.getContext(S,U)}try{const S={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${zh}`),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",me,!1),t.addEventListener("webglcontextcreationerror",pe,!1),I===null){const U="webgl2";if(I=wn(U,S),I===null)throw wn(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Je,Qe,we,Mt,Re,A,E,B,Z,te,K,be,fe,ve,nt,oe,xe,Ie,Oe,Me,et,We,_t,N;function le(){Je=new rE(I),Je.init(),We=new GS(I,Je),Qe=new QM(I,Je,e,We),we=new kS(I,Je),Qe.reverseDepthBuffer&&d&&we.buffers.depth.setReversed(!0),Mt=new cE(I),Re=new AS,A=new zS(I,Je,we,Re,Qe,We,Mt),E=new tE(v),B=new sE(v),Z=new mv(I),_t=new ZM(I,Z),te=new oE(I,Z,Mt,_t),K=new hE(I,te,Z,Mt),Oe=new lE(I,Qe,A),oe=new eE(Re),be=new TS(v,E,B,Je,Qe,_t,oe),fe=new $S(v,Re),ve=new RS,nt=new NS(Je),Ie=new jM(v,E,B,we,K,f,c),xe=new FS(v,K,Qe),N=new KS(I,Mt,Qe,we),Me=new JM(I,Je,Mt),et=new aE(I,Je,Mt),Mt.programs=be.programs,v.capabilities=Qe,v.extensions=Je,v.properties=Re,v.renderLists=ve,v.shadowMap=xe,v.state=we,v.info=Mt}le();const V=new YS(v,I);this.xr=V,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const S=Je.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Je.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(S){S!==void 0&&(W=S,this.setSize(Y,ie,!1))},this.getSize=function(S){return S.set(Y,ie)},this.setSize=function(S,U,k=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=S,ie=U,t.width=Math.floor(S*W),t.height=Math.floor(U*W),k===!0&&(t.style.width=S+"px",t.style.height=U+"px"),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(Y*W,ie*W).floor()},this.setDrawingBufferSize=function(S,U,k){Y=S,ie=U,W=k,t.width=Math.floor(S*k),t.height=Math.floor(U*k),this.setViewport(0,0,S,U)},this.getCurrentViewport=function(S){return S.copy(P)},this.getViewport=function(S){return S.copy(Ae)},this.setViewport=function(S,U,k,z){S.isVector4?Ae.set(S.x,S.y,S.z,S.w):Ae.set(S,U,k,z),we.viewport(P.copy(Ae).multiplyScalar(W).round())},this.getScissor=function(S){return S.copy(qe)},this.setScissor=function(S,U,k,z){S.isVector4?qe.set(S.x,S.y,S.z,S.w):qe.set(S,U,k,z),we.scissor(H.copy(qe).multiplyScalar(W).round())},this.getScissorTest=function(){return gt},this.setScissorTest=function(S){we.setScissorTest(gt=S)},this.setOpaqueSort=function(S){ue=S},this.setTransparentSort=function(S){_e=S},this.getClearColor=function(S){return S.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor.apply(Ie,arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha.apply(Ie,arguments)},this.clear=function(S=!0,U=!0,k=!0){let z=0;if(S){let F=!1;if(L!==null){const se=L.texture.format;F=se===$h||se===qh||se===Yh}if(F){const se=L.texture.type,he=se===Ni||se===As||se===Mo||se===Lr||se===Vh||se===Wh,ge=Ie.getClearColor(),Ee=Ie.getClearAlpha(),Fe=ge.r,Be=ge.g,Le=ge.b;he?(g[0]=Fe,g[1]=Be,g[2]=Le,g[3]=Ee,I.clearBufferuiv(I.COLOR,0,g)):(_[0]=Fe,_[1]=Be,_[2]=Le,_[3]=Ee,I.clearBufferiv(I.COLOR,0,_))}else z|=I.COLOR_BUFFER_BIT}U&&(z|=I.DEPTH_BUFFER_BIT),k&&(z|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",me,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),Ie.dispose(),ve.dispose(),nt.dispose(),Re.dispose(),E.dispose(),B.dispose(),K.dispose(),_t.dispose(),N.dispose(),be.dispose(),V.dispose(),V.removeEventListener("sessionstart",uu),V.removeEventListener("sessionend",du),ss.stop()};function J(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const S=Mt.autoReset,U=xe.enabled,k=xe.autoUpdate,z=xe.needsUpdate,F=xe.type;le(),Mt.autoReset=S,xe.enabled=U,xe.autoUpdate=k,xe.needsUpdate=z,xe.type=F}function pe(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function He(S){const U=S.target;U.removeEventListener("dispose",He),Rt(U)}function Rt(S){$t(S),Re.remove(S)}function $t(S){const U=Re.get(S).programs;U!==void 0&&(U.forEach(function(k){be.releaseProgram(k)}),S.isShaderMaterial&&be.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,k,z,F,se){U===null&&(U=bt);const he=F.isMesh&&F.matrixWorld.determinant()<0,ge=hm(S,U,k,z,F);we.setMaterial(z,he);let Ee=k.index,Fe=1;if(z.wireframe===!0){if(Ee=te.getWireframeAttribute(k),Ee===void 0)return;Fe=2}const Be=k.drawRange,Le=k.attributes.position;let it=Be.start*Fe,at=(Be.start+Be.count)*Fe;se!==null&&(it=Math.max(it,se.start*Fe),at=Math.min(at,(se.start+se.count)*Fe)),Ee!==null?(it=Math.max(it,0),at=Math.min(at,Ee.count)):Le!=null&&(it=Math.max(it,0),at=Math.min(at,Le.count));const It=at-it;if(It<0||It===1/0)return;_t.setup(F,z,ge,k,Ee);let Ct,st=Me;if(Ee!==null&&(Ct=Z.get(Ee),st=et,st.setIndex(Ct)),F.isMesh)z.wireframe===!0?(we.setLineWidth(z.wireframeLinewidth*Lt()),st.setMode(I.LINES)):st.setMode(I.TRIANGLES);else if(F.isLine){let Pe=z.linewidth;Pe===void 0&&(Pe=1),we.setLineWidth(Pe*Lt()),F.isLineSegments?st.setMode(I.LINES):F.isLineLoop?st.setMode(I.LINE_LOOP):st.setMode(I.LINE_STRIP)}else F.isPoints?st.setMode(I.POINTS):F.isSprite&&st.setMode(I.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)st.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Je.get("WEBGL_multi_draw"))st.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Pe=F._multiDrawStarts,Ht=F._multiDrawCounts,ct=F._multiDrawCount,Bn=Ee?Z.get(Ee).bytesPerElement:1,ws=Re.get(z).currentProgram.getUniforms();for(let xn=0;xn<ct;xn++)ws.setValue(I,"_gl_DrawID",xn),st.render(Pe[xn]/Bn,Ht[xn])}else if(F.isInstancedMesh)st.renderInstances(it,It,F.count);else if(k.isInstancedBufferGeometry){const Pe=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Ht=Math.min(k.instanceCount,Pe);st.renderInstances(it,It,Ht)}else st.render(it,It)};function lt(S,U,k){S.transparent===!0&&S.side===_n&&S.forceSinglePass===!1?(S.side=ln,S.needsUpdate=!0,ga(S,U,k),S.side=Ii,S.needsUpdate=!0,ga(S,U,k),S.side=_n):ga(S,U,k)}this.compile=function(S,U,k=null){k===null&&(k=S),p=nt.get(k),p.init(U),b.push(p),k.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),S!==k&&S.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();const z=new Set;return S.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const se=F.material;if(se)if(Array.isArray(se))for(let he=0;he<se.length;he++){const ge=se[he];lt(ge,k,F),z.add(ge)}else lt(se,k,F),z.add(se)}),b.pop(),p=null,z},this.compileAsync=function(S,U,k=null){const z=this.compile(S,U,k);return new Promise(F=>{function se(){if(z.forEach(function(he){Re.get(he).currentProgram.isReady()&&z.delete(he)}),z.size===0){F(S);return}setTimeout(se,10)}Je.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let Fn=null;function ui(S){Fn&&Fn(S)}function uu(){ss.stop()}function du(){ss.start()}const ss=new qp;ss.setAnimationLoop(ui),typeof self<"u"&&ss.setContext(self),this.setAnimationLoop=function(S){Fn=S,V.setAnimationLoop(S),S===null?ss.stop():ss.start()},V.addEventListener("sessionstart",uu),V.addEventListener("sessionend",du),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(U),U=V.getCamera()),S.isScene===!0&&S.onBeforeRender(v,S,U,L),p=nt.get(S,b.length),p.init(U),b.push(p),Ue.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),j.setFromProjectionMatrix(Ue),ye=this.localClippingEnabled,ae=oe.init(this.clippingPlanes,ye),m=ve.get(S,y.length),m.init(),y.push(m),V.enabled===!0&&V.isPresenting===!0){const se=v.xr.getDepthSensingMesh();se!==null&&Dc(se,U,-1/0,v.sortObjects)}Dc(S,U,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(ue,_e),tt=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,tt&&Ie.addToRenderList(m,S),this.info.render.frame++,ae===!0&&oe.beginShadows();const k=p.state.shadowsArray;xe.render(k,S,U),ae===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=m.opaque,F=m.transmissive;if(p.setupLights(),U.isArrayCamera){const se=U.cameras;if(F.length>0)for(let he=0,ge=se.length;he<ge;he++){const Ee=se[he];pu(z,F,S,Ee)}tt&&Ie.render(S);for(let he=0,ge=se.length;he<ge;he++){const Ee=se[he];fu(m,S,Ee,Ee.viewport)}}else F.length>0&&pu(z,F,S,U),tt&&Ie.render(S),fu(m,S,U);L!==null&&(A.updateMultisampleRenderTarget(L),A.updateRenderTargetMipmap(L)),S.isScene===!0&&S.onAfterRender(v,S,U),_t.resetDefaultState(),T=-1,M=null,b.pop(),b.length>0?(p=b[b.length-1],ae===!0&&oe.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Dc(S,U,k,z){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)k=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||j.intersectsSprite(S)){z&&$e.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Ue);const he=K.update(S),ge=S.material;ge.visible&&m.push(S,he,ge,k,$e.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||j.intersectsObject(S))){const he=K.update(S),ge=S.material;if(z&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),$e.copy(S.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),$e.copy(he.boundingSphere.center)),$e.applyMatrix4(S.matrixWorld).applyMatrix4(Ue)),Array.isArray(ge)){const Ee=he.groups;for(let Fe=0,Be=Ee.length;Fe<Be;Fe++){const Le=Ee[Fe],it=ge[Le.materialIndex];it&&it.visible&&m.push(S,he,it,k,$e.z,Le)}}else ge.visible&&m.push(S,he,ge,k,$e.z,null)}}const se=S.children;for(let he=0,ge=se.length;he<ge;he++)Dc(se[he],U,k,z)}function fu(S,U,k,z){const F=S.opaque,se=S.transmissive,he=S.transparent;p.setupLightsView(k),ae===!0&&oe.setGlobalState(v.clippingPlanes,k),z&&we.viewport(P.copy(z)),F.length>0&&ma(F,U,k),se.length>0&&ma(se,U,k),he.length>0&&ma(he,U,k),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function pu(S,U,k,z){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[z.id]===void 0&&(p.state.transmissionRenderTarget[z.id]=new qn(1,1,{generateMipmaps:!0,type:Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float")?Di:Ni,minFilter:Ai,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));const se=p.state.transmissionRenderTarget[z.id],he=z.viewport||P;se.setSize(he.z,he.w);const ge=v.getRenderTarget();v.setRenderTarget(se),v.getClearColor($),Q=v.getClearAlpha(),Q<1&&v.setClearColor(16777215,.5),v.clear(),tt&&Ie.render(k);const Ee=v.toneMapping;v.toneMapping=Qi;const Fe=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),p.setupLightsView(z),ae===!0&&oe.setGlobalState(v.clippingPlanes,z),ma(S,k,z),A.updateMultisampleRenderTarget(se),A.updateRenderTargetMipmap(se),Je.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let Le=0,it=U.length;Le<it;Le++){const at=U[Le],It=at.object,Ct=at.geometry,st=at.material,Pe=at.group;if(st.side===_n&&It.layers.test(z.layers)){const Ht=st.side;st.side=ln,st.needsUpdate=!0,mu(It,k,z,Ct,st,Pe),st.side=Ht,st.needsUpdate=!0,Be=!0}}Be===!0&&(A.updateMultisampleRenderTarget(se),A.updateRenderTargetMipmap(se))}v.setRenderTarget(ge),v.setClearColor($,Q),Fe!==void 0&&(z.viewport=Fe),v.toneMapping=Ee}function ma(S,U,k){const z=U.isScene===!0?U.overrideMaterial:null;for(let F=0,se=S.length;F<se;F++){const he=S[F],ge=he.object,Ee=he.geometry,Fe=z===null?he.material:z,Be=he.group;ge.layers.test(k.layers)&&mu(ge,U,k,Ee,Fe,Be)}}function mu(S,U,k,z,F,se){S.onBeforeRender(v,U,k,z,F,se),S.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),F.onBeforeRender(v,U,k,z,S,se),F.transparent===!0&&F.side===_n&&F.forceSinglePass===!1?(F.side=ln,F.needsUpdate=!0,v.renderBufferDirect(k,U,z,F,S,se),F.side=Ii,F.needsUpdate=!0,v.renderBufferDirect(k,U,z,F,S,se),F.side=_n):v.renderBufferDirect(k,U,z,F,S,se),S.onAfterRender(v,U,k,z,F,se)}function ga(S,U,k){U.isScene!==!0&&(U=bt);const z=Re.get(S),F=p.state.lights,se=p.state.shadowsArray,he=F.state.version,ge=be.getParameters(S,F.state,se,U,k),Ee=be.getProgramCacheKey(ge);let Fe=z.programs;z.environment=S.isMeshStandardMaterial?U.environment:null,z.fog=U.fog,z.envMap=(S.isMeshStandardMaterial?B:E).get(S.envMap||z.environment),z.envMapRotation=z.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,Fe===void 0&&(S.addEventListener("dispose",He),Fe=new Map,z.programs=Fe);let Be=Fe.get(Ee);if(Be!==void 0){if(z.currentProgram===Be&&z.lightsStateVersion===he)return _u(S,ge),Be}else ge.uniforms=be.getUniforms(S),S.onBeforeCompile(ge,v),Be=be.acquireProgram(ge,Ee),Fe.set(Ee,Be),z.uniforms=ge.uniforms;const Le=z.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Le.clippingPlanes=oe.uniform),_u(S,ge),z.needsLights=dm(S),z.lightsStateVersion=he,z.needsLights&&(Le.ambientLightColor.value=F.state.ambient,Le.lightProbe.value=F.state.probe,Le.directionalLights.value=F.state.directional,Le.directionalLightShadows.value=F.state.directionalShadow,Le.spotLights.value=F.state.spot,Le.spotLightShadows.value=F.state.spotShadow,Le.rectAreaLights.value=F.state.rectArea,Le.ltc_1.value=F.state.rectAreaLTC1,Le.ltc_2.value=F.state.rectAreaLTC2,Le.pointLights.value=F.state.point,Le.pointLightShadows.value=F.state.pointShadow,Le.hemisphereLights.value=F.state.hemi,Le.directionalShadowMap.value=F.state.directionalShadowMap,Le.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Le.spotShadowMap.value=F.state.spotShadowMap,Le.spotLightMatrix.value=F.state.spotLightMatrix,Le.spotLightMap.value=F.state.spotLightMap,Le.pointShadowMap.value=F.state.pointShadowMap,Le.pointShadowMatrix.value=F.state.pointShadowMatrix),z.currentProgram=Be,z.uniformsList=null,Be}function gu(S){if(S.uniformsList===null){const U=S.currentProgram.getUniforms();S.uniformsList=cc.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function _u(S,U){const k=Re.get(S);k.outputColorSpace=U.outputColorSpace,k.batching=U.batching,k.batchingColor=U.batchingColor,k.instancing=U.instancing,k.instancingColor=U.instancingColor,k.instancingMorph=U.instancingMorph,k.skinning=U.skinning,k.morphTargets=U.morphTargets,k.morphNormals=U.morphNormals,k.morphColors=U.morphColors,k.morphTargetsCount=U.morphTargetsCount,k.numClippingPlanes=U.numClippingPlanes,k.numIntersection=U.numClipIntersection,k.vertexAlphas=U.vertexAlphas,k.vertexTangents=U.vertexTangents,k.toneMapping=U.toneMapping}function hm(S,U,k,z,F){U.isScene!==!0&&(U=bt),A.resetTextureUnits();const se=U.fog,he=z.isMeshStandardMaterial?U.environment:null,ge=L===null?v.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:un,Ee=(z.isMeshStandardMaterial?B:E).get(z.envMap||he),Fe=z.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Be=!!k.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Le=!!k.morphAttributes.position,it=!!k.morphAttributes.normal,at=!!k.morphAttributes.color;let It=Qi;z.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(It=v.toneMapping);const Ct=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,st=Ct!==void 0?Ct.length:0,Pe=Re.get(z),Ht=p.state.lights;if(ae===!0&&(ye===!0||S!==M)){const tn=S===M&&z.id===T;oe.setState(z,S,tn)}let ct=!1;z.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==Ht.state.version||Pe.outputColorSpace!==ge||F.isBatchedMesh&&Pe.batching===!1||!F.isBatchedMesh&&Pe.batching===!0||F.isBatchedMesh&&Pe.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Pe.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Pe.instancing===!1||!F.isInstancedMesh&&Pe.instancing===!0||F.isSkinnedMesh&&Pe.skinning===!1||!F.isSkinnedMesh&&Pe.skinning===!0||F.isInstancedMesh&&Pe.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Pe.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Pe.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Pe.instancingMorph===!1&&F.morphTexture!==null||Pe.envMap!==Ee||z.fog===!0&&Pe.fog!==se||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==oe.numPlanes||Pe.numIntersection!==oe.numIntersection)||Pe.vertexAlphas!==Fe||Pe.vertexTangents!==Be||Pe.morphTargets!==Le||Pe.morphNormals!==it||Pe.morphColors!==at||Pe.toneMapping!==It||Pe.morphTargetsCount!==st)&&(ct=!0):(ct=!0,Pe.__version=z.version);let Bn=Pe.currentProgram;ct===!0&&(Bn=ga(z,U,F));let ws=!1,xn=!1,Wr=!1;const St=Bn.getUniforms(),Rn=Pe.uniforms;if(we.useProgram(Bn.program)&&(ws=!0,xn=!0,Wr=!0),z.id!==T&&(T=z.id,xn=!0),ws||M!==S){we.buffers.depth.getReversed()?(de.copy(S.projectionMatrix),n0(de),i0(de),St.setValue(I,"projectionMatrix",de)):St.setValue(I,"projectionMatrix",S.projectionMatrix),St.setValue(I,"viewMatrix",S.matrixWorldInverse);const dn=St.map.cameraPosition;dn!==void 0&&dn.setValue(I,Ge.setFromMatrixPosition(S.matrixWorld)),Qe.logarithmicDepthBuffer&&St.setValue(I,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&St.setValue(I,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,xn=!0,Wr=!0)}if(F.isSkinnedMesh){St.setOptional(I,F,"bindMatrix"),St.setOptional(I,F,"bindMatrixInverse");const tn=F.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),St.setValue(I,"boneTexture",tn.boneTexture,A))}F.isBatchedMesh&&(St.setOptional(I,F,"batchingTexture"),St.setValue(I,"batchingTexture",F._matricesTexture,A),St.setOptional(I,F,"batchingIdTexture"),St.setValue(I,"batchingIdTexture",F._indirectTexture,A),St.setOptional(I,F,"batchingColorTexture"),F._colorsTexture!==null&&St.setValue(I,"batchingColorTexture",F._colorsTexture,A));const Cn=k.morphAttributes;if((Cn.position!==void 0||Cn.normal!==void 0||Cn.color!==void 0)&&Oe.update(F,k,Bn),(xn||Pe.receiveShadow!==F.receiveShadow)&&(Pe.receiveShadow=F.receiveShadow,St.setValue(I,"receiveShadow",F.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Rn.envMap.value=Ee,Rn.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&U.environment!==null&&(Rn.envMapIntensity.value=U.environmentIntensity),xn&&(St.setValue(I,"toneMappingExposure",v.toneMappingExposure),Pe.needsLights&&um(Rn,Wr),se&&z.fog===!0&&fe.refreshFogUniforms(Rn,se),fe.refreshMaterialUniforms(Rn,z,W,ie,p.state.transmissionRenderTarget[S.id]),cc.upload(I,gu(Pe),Rn,A)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(cc.upload(I,gu(Pe),Rn,A),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&St.setValue(I,"center",F.center),St.setValue(I,"modelViewMatrix",F.modelViewMatrix),St.setValue(I,"normalMatrix",F.normalMatrix),St.setValue(I,"modelMatrix",F.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const tn=z.uniformsGroups;for(let dn=0,Pc=tn.length;dn<Pc;dn++){const rs=tn[dn];N.update(rs,Bn),N.bind(rs,Bn)}}return Bn}function um(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function dm(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(S,U,k){Re.get(S.texture).__webglTexture=U,Re.get(S.depthTexture).__webglTexture=k;const z=Re.get(S);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=k===void 0,z.__autoAllocateDepthBuffer||Je.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,U){const k=Re.get(S);k.__webglFramebuffer=U,k.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(S,U=0,k=0){L=S,w=U,C=k;let z=!0,F=null,se=!1,he=!1;if(S){const Ee=Re.get(S);if(Ee.__useDefaultFramebuffer!==void 0)we.bindFramebuffer(I.FRAMEBUFFER,null),z=!1;else if(Ee.__webglFramebuffer===void 0)A.setupRenderTarget(S);else if(Ee.__hasExternalTextures)A.rebindTextures(S,Re.get(S.texture).__webglTexture,Re.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Le=S.depthTexture;if(Ee.__boundDepthTexture!==Le){if(Le!==null&&Re.has(Le)&&(S.width!==Le.image.width||S.height!==Le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(S)}}const Fe=S.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(he=!0);const Be=Re.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Be[U])?F=Be[U][k]:F=Be[U],se=!0):S.samples>0&&A.useMultisampledRTT(S)===!1?F=Re.get(S).__webglMultisampledFramebuffer:Array.isArray(Be)?F=Be[k]:F=Be,P.copy(S.viewport),H.copy(S.scissor),G=S.scissorTest}else P.copy(Ae).multiplyScalar(W).floor(),H.copy(qe).multiplyScalar(W).floor(),G=gt;if(we.bindFramebuffer(I.FRAMEBUFFER,F)&&z&&we.drawBuffers(S,F),we.viewport(P),we.scissor(H),we.setScissorTest(G),se){const Ee=Re.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ee.__webglTexture,k)}else if(he){const Ee=Re.get(S.texture),Fe=U||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ee.__webglTexture,k||0,Fe)}T=-1},this.readRenderTargetPixels=function(S,U,k,z,F,se,he){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=Re.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&he!==void 0&&(ge=ge[he]),ge){we.bindFramebuffer(I.FRAMEBUFFER,ge);try{const Ee=S.texture,Fe=Ee.format,Be=Ee.type;if(!Qe.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Qe.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-z&&k>=0&&k<=S.height-F&&I.readPixels(U,k,z,F,We.convert(Fe),We.convert(Be),se)}finally{const Ee=L!==null?Re.get(L).__webglFramebuffer:null;we.bindFramebuffer(I.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(S,U,k,z,F,se,he){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=Re.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&he!==void 0&&(ge=ge[he]),ge){const Ee=S.texture,Fe=Ee.format,Be=Ee.type;if(!Qe.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Qe.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=S.width-z&&k>=0&&k<=S.height-F){we.bindFramebuffer(I.FRAMEBUFFER,ge);const Le=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Le),I.bufferData(I.PIXEL_PACK_BUFFER,se.byteLength,I.STREAM_READ),I.readPixels(U,k,z,F,We.convert(Fe),We.convert(Be),0);const it=L!==null?Re.get(L).__webglFramebuffer:null;we.bindFramebuffer(I.FRAMEBUFFER,it);const at=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await t0(I,at,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Le),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,se),I.deleteBuffer(Le),I.deleteSync(at),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,U=null,k=0){S.isTexture!==!0&&(Zs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,S=arguments[1]);const z=Math.pow(2,-k),F=Math.floor(S.image.width*z),se=Math.floor(S.image.height*z),he=U!==null?U.x:0,ge=U!==null?U.y:0;A.setTexture2D(S,0),I.copyTexSubImage2D(I.TEXTURE_2D,k,0,0,he,ge,F,se),we.unbindTexture()};const fm=I.createFramebuffer(),pm=I.createFramebuffer();this.copyTextureToTexture=function(S,U,k=null,z=null,F=0,se=null){S.isTexture!==!0&&(Zs("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,S=arguments[1],U=arguments[2],se=arguments[3]||0,k=null),se===null&&(F!==0?(Zs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),se=F,F=0):se=0);let he,ge,Ee,Fe,Be,Le,it,at,It;const Ct=S.isCompressedTexture?S.mipmaps[se]:S.image;if(k!==null)he=k.max.x-k.min.x,ge=k.max.y-k.min.y,Ee=k.isBox3?k.max.z-k.min.z:1,Fe=k.min.x,Be=k.min.y,Le=k.isBox3?k.min.z:0;else{const Cn=Math.pow(2,-F);he=Math.floor(Ct.width*Cn),ge=Math.floor(Ct.height*Cn),S.isDataArrayTexture?Ee=Ct.depth:S.isData3DTexture?Ee=Math.floor(Ct.depth*Cn):Ee=1,Fe=0,Be=0,Le=0}z!==null?(it=z.x,at=z.y,It=z.z):(it=0,at=0,It=0);const st=We.convert(U.format),Pe=We.convert(U.type);let Ht;U.isData3DTexture?(A.setTexture3D(U,0),Ht=I.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(A.setTexture2DArray(U,0),Ht=I.TEXTURE_2D_ARRAY):(A.setTexture2D(U,0),Ht=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);const ct=I.getParameter(I.UNPACK_ROW_LENGTH),Bn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),ws=I.getParameter(I.UNPACK_SKIP_PIXELS),xn=I.getParameter(I.UNPACK_SKIP_ROWS),Wr=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Ct.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ct.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Fe),I.pixelStorei(I.UNPACK_SKIP_ROWS,Be),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Le);const St=S.isDataArrayTexture||S.isData3DTexture,Rn=U.isDataArrayTexture||U.isData3DTexture;if(S.isDepthTexture){const Cn=Re.get(S),tn=Re.get(U),dn=Re.get(Cn.__renderTarget),Pc=Re.get(tn.__renderTarget);we.bindFramebuffer(I.READ_FRAMEBUFFER,dn.__webglFramebuffer),we.bindFramebuffer(I.DRAW_FRAMEBUFFER,Pc.__webglFramebuffer);for(let rs=0;rs<Ee;rs++)St&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Re.get(S).__webglTexture,F,Le+rs),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Re.get(U).__webglTexture,se,It+rs)),I.blitFramebuffer(Fe,Be,he,ge,it,at,he,ge,I.DEPTH_BUFFER_BIT,I.NEAREST);we.bindFramebuffer(I.READ_FRAMEBUFFER,null),we.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(F!==0||S.isRenderTargetTexture||Re.has(S)){const Cn=Re.get(S),tn=Re.get(U);we.bindFramebuffer(I.READ_FRAMEBUFFER,fm),we.bindFramebuffer(I.DRAW_FRAMEBUFFER,pm);for(let dn=0;dn<Ee;dn++)St?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Cn.__webglTexture,F,Le+dn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Cn.__webglTexture,F),Rn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,tn.__webglTexture,se,It+dn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,tn.__webglTexture,se),F!==0?I.blitFramebuffer(Fe,Be,he,ge,it,at,he,ge,I.COLOR_BUFFER_BIT,I.NEAREST):Rn?I.copyTexSubImage3D(Ht,se,it,at,It+dn,Fe,Be,he,ge):I.copyTexSubImage2D(Ht,se,it,at,Fe,Be,he,ge);we.bindFramebuffer(I.READ_FRAMEBUFFER,null),we.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Rn?S.isDataTexture||S.isData3DTexture?I.texSubImage3D(Ht,se,it,at,It,he,ge,Ee,st,Pe,Ct.data):U.isCompressedArrayTexture?I.compressedTexSubImage3D(Ht,se,it,at,It,he,ge,Ee,st,Ct.data):I.texSubImage3D(Ht,se,it,at,It,he,ge,Ee,st,Pe,Ct):S.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,se,it,at,he,ge,st,Pe,Ct.data):S.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,se,it,at,Ct.width,Ct.height,st,Ct.data):I.texSubImage2D(I.TEXTURE_2D,se,it,at,he,ge,st,Pe,Ct);I.pixelStorei(I.UNPACK_ROW_LENGTH,ct),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Bn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ws),I.pixelStorei(I.UNPACK_SKIP_ROWS,xn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Wr),se===0&&U.generateMipmaps&&I.generateMipmap(Ht),we.unbindTexture()},this.copyTextureToTexture3D=function(S,U,k=null,z=null,F=0){return S.isTexture!==!0&&(Zs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,z=arguments[1]||null,S=arguments[2],U=arguments[3],F=arguments[4]||0),Zs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,U,k,z,F)},this.initRenderTarget=function(S){Re.get(S).__webglFramebuffer===void 0&&A.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?A.setTextureCube(S,0):S.isData3DTexture?A.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?A.setTexture2DArray(S,0):A.setTexture2D(S,0),we.unbindTexture()},this.resetState=function(){w=0,C=0,L=null,we.reset(),_t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}}function nf(s,e=!1){const t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,c=new At;let l=0;for(let h=0;h<s.length;++h){const u=s[h];let d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(t){let h=0;const u=[];for(let d=0;d<s.length;++d){const f=s[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=s[d].attributes.position.count}c.setIndex(u)}for(const h in r){const u=sf(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let _=0;_<o[h].length;++_)f.push(o[h][_][d]);const g=sf(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function sf(s){let e,t,n,i=-1,r=0;for(let l=0;l<s.length;++l){const h=s[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const o=new e(r),a=new Tt(o,t,n);let c=0;for(let l=0;l<s.length;++l){const h=s[l];if(h.isInterleavedBufferAttribute){const u=c/t;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<t;g++){const _=h.getComponent(d,g);a.setComponent(d+u,g,_)}}else o.set(h.array,c);c+=h.count*t}return i!==void 0&&(a.gpuType=i),a}function rf(s,e){if(e===A_)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Eh||e===wp){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Eh)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class ZS extends Gr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new ny(t)}),this.register(function(t){return new iy(t)}),this.register(function(t){return new dy(t)}),this.register(function(t){return new fy(t)}),this.register(function(t){return new py(t)}),this.register(function(t){return new ry(t)}),this.register(function(t){return new oy(t)}),this.register(function(t){return new ay(t)}),this.register(function(t){return new cy(t)}),this.register(function(t){return new ty(t)}),this.register(function(t){return new ly(t)}),this.register(function(t){return new sy(t)}),this.register(function(t){return new uy(t)}),this.register(function(t){return new hy(t)}),this.register(function(t){return new QS(t)}),this.register(function(t){return new my(t)}),this.register(function(t){return new gy(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=go.extractUrlBase(e);o=go.resolveURL(l,this.path)}else o=go.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Yp(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Jp){try{o[je.KHR_BINARY_GLTF]=new _y(e)}catch(u){i&&i(u);return}r=JSON.parse(o[je.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new Ly(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case je.KHR_MATERIALS_UNLIT:o[u]=new ey;break;case je.KHR_DRACO_MESH_COMPRESSION:o[u]=new vy(r,this.dracoLoader);break;case je.KHR_TEXTURE_TRANSFORM:o[u]=new xy;break;case je.KHR_MESH_QUANTIZATION:o[u]=new My;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function JS(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class QS{constructor(e){this.parser=e,this.name=je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const h=new Te(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],un);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new ac(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new su(h),l.distance=u;break;case"spot":l=new Q0(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,xi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class ey{constructor(){this.name=je.KHR_MATERIALS_UNLIT}getMaterialType(){return Pt}extendParams(e,t,n){const i=[];e.color=new Te(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],un),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Yt))}return Promise.all(i)}}class ty{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class ny{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:li}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new De(a,a)}return Promise.all(r)}}class iy{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:li}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class sy{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:li}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class ry{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:li}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Te(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],un)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Yt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class oy{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:li}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class ay{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:li}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Te().setRGB(a[0],a[1],a[2],un),Promise.all(r)}}class cy{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:li}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class ly{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:li}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Te().setRGB(a[0],a[1],a[2],un),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Yt)),Promise.all(r)}}class hy{constructor(e){this.parser=e,this.name=je.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:li}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class uy{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:li}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class dy{constructor(e){this.parser=e,this.name=je.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class fy{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class py{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class my{constructor(e){this.name=je.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class gy{constructor(e){this.name=je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==Pn.TRIANGLES&&l.mode!==Pn.TRIANGLE_STRIP&&l.mode!==Pn.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(const g of u){const _=new ze,m=new D,p=new is,y=new D(1,1,1),b=new yh(g.geometry,g.material,d);for(let v=0;v<d;v++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,v),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,v),c.SCALE&&y.fromBufferAttribute(c.SCALE,v),b.setMatrixAt(v,_.compose(m,p,y));for(const v in c)if(v==="_COLOR_0"){const R=c[v];b.instanceColor=new Sh(R.array,R.itemSize,R.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,c[v]);xt.prototype.copy.call(b,g),this.parser.assignFinalMaterial(b),f.push(b)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const Jp="glTF",to=12,of={JSON:1313821514,BIN:5130562};class _y{constructor(e){this.name=je.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,to),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Jp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-to,r=new DataView(e,to);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===of.JSON){const l=new Uint8Array(e,to+o,a);this.content=n.decode(l)}else if(c===of.BIN){const l=to+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class vy{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const h in o){const u=wh[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=wh[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[e.attributes[h]],f=rr[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const g in f.attributes){const _=f.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}u(f)},a,l,un,d)})})}}class xy{constructor(){this.name=je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class My{constructor(){this.name=je.KHR_MESH_QUANTIZATION}}class Qp extends pa{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,g=e*l,_=g-l,m=-2*f+3*d,p=f-d,y=1-m,b=p-d+u;for(let v=0;v!==a;v++){const R=o[_+v+a],w=o[_+v+c]*h,C=o[g+v+a],L=o[g+v]*h;r[v]=y*R+b*w+m*C+p*L}return r}}const Ey=new is;class Sy extends Qp{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return Ey.fromArray(r).normalize().toArray(r),r}}const Pn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},rr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},af={9728:hn,9729:Tn,9984:_p,9985:ec,9986:oo,9987:Ai},cf={33071:ji,33648:uc,10497:Cr},vl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},wh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Gi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},yy={CUBICSPLINE:void 0,LINEAR:So,STEP:Eo},xl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function by(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Wt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ii})),s.DefaultMaterial}function ds(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function xi(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Ty(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,h=e.length;l<h;l++){const u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){const u=e[l];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;o.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],d=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function Ay(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function wy(s){let e;const t=s.extensions&&s.extensions[je.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ml(t.attributes):e=s.indices+":"+Ml(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Ml(s.targets[n]);return e}function Ml(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Rh(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Ry(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Cy=new ze;class Ly{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new JS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new j0(this.options.manager):this.textureLoader=new nv(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Yp(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return ds(r,a,i),xi(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,h]of o.children.entries())r(h,a.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[je.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(go.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=vl[i.type],a=rr[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new Tt(l,o,c))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=vl[i.type],l=rr[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(f&&f!==u){const p=Math.floor(d/f),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let b=t.cache.get(y);b||(_=new l(a,p*f,i.count*f/h),b=new T0(_,f/h),t.cache.add(y,b)),m=new Jh(b,c,d%f/h,g)}else a===null?_=new l(i.count*c):_=new l(a,d,i.count*c),m=new Tt(_,c,g);if(i.sparse!==void 0){const p=vl.SCALAR,y=rr[i.sparse.indices.componentType],b=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,R=new y(o[1],b,i.sparse.count*p),w=new l(o[2],v,i.sparse.count*c);a!==null&&(m=new Tt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let C=0,L=R.length;C<L;C++){const T=R[C];if(m.setX(T,w[C*c]),c>=2&&m.setY(T,w[C*c+1]),c>=3&&m.setZ(T,w[C*c+2]),c>=4&&m.setW(T,w[C*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return h.magFilter=af[d.magFilter]||Tn,h.minFilter=af[d.minFilter]||Ai,h.wrapS=cf[d.wrapS]||Cr,h.wrapT=cf[d.wrapT]||Cr,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==hn&&h.minFilter!==Tn,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=i.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;const d=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Gt(_);m.needsUpdate=!0,d(m)}),t.load(go.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),xi(u,o),u.userData.mimeType=o.mimeType||Ry(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[je.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[je.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[je.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new _s,oi.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Hp,oi.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Wt}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},c=r.extensions||{},l=[];if(c[je.KHR_MATERIALS_UNLIT]){const u=i[je.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new Te(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],un),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,Yt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=_n);const h=r.alphaMode||xl.OPAQUE;if(h===xl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===xl.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Pt&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new De(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Pt&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Pt){const u=r.emissiveFactor;a.emissive=new Te().setRGB(u[0],u[1],u[2],un)}return r.emissiveTexture!==void 0&&o!==Pt&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Yt)),Promise.all(l).then(function(){const u=new o(a);return r.name&&(u.name=r.name),xi(u,r),t.associations.set(u,{materials:e}),r.extensions&&ds(i,u,r),u})}createUniqueName(e){const t=dt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return lf(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],h=wy(l),u=i[h];if(u)o.push(u.promise);else{let d;l.extensions&&l.extensions[je.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=lf(new At,l,t),i[h]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const h=o[c].material===void 0?by(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const _=h[f],m=o[f];let p;const y=l[f];if(m.mode===Pn.TRIANGLES||m.mode===Pn.TRIANGLE_STRIP||m.mode===Pn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new w0(_,y):new Ne(_,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Pn.TRIANGLE_STRIP?p.geometry=rf(p.geometry,wp):m.mode===Pn.TRIANGLE_FAN&&(p.geometry=rf(p.geometry,Eh));else if(m.mode===Pn.LINES)p=new P0(_,y);else if(m.mode===Pn.LINE_STRIP)p=new tu(_,y);else if(m.mode===Pn.LINE_LOOP)p=new I0(_,y);else if(m.mode===Pn.POINTS)p=new Js(_,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Ay(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),xi(p,r),m.extensions&&ds(i,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&ds(i,u[0],r),u[0];const d=new an;r.extensions&&ds(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new cn(oc.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new wc(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),xi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],c=[];for(let l=0,h=o.length;l<h;l++){const u=o[l];if(u){a.push(u);const d=new ze;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Qh(a,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],g=i.samplers[f.sampler],_=f.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,y=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",y)),l.push(g),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],g=u[2],_=u[3],m=u[4],p=[];for(let y=0,b=d.length;y<b;y++){const v=d[y],R=f[y],w=g[y],C=_[y],L=m[y];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();const T=n._createAnimationTracks(v,R,w,C,L);if(T)for(let M=0;M<T.length;M++)p.push(T[M])}return new V0(r,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Cy)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new zp:l.length>1?h=new an:l.length===1?h=l[0]:h=new xt,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),xi(h,r),r.extensions&&ds(n,h,r),r.matrix!==void 0){const u=new ze;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new an;n.name&&(r.name=i.createUniqueName(n.name)),xi(r,n),n.extensions&&ds(t,r,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);const l=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof oi||d instanceof Gt)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,c=[];Gi[r.path]===Gi.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(Gi[r.path]){case Gi.weights:l=Nr;break;case Gi.rotation:l=Ur;break;case Gi.position:case Gi.scale:l=Or;break;default:switch(n.itemSize){case 1:l=Nr;break;case 2:case 3:default:l=Or;break}break}const h=i.interpolation!==void 0?yy[i.interpolation]:So,u=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){const g=new l(c[d]+"."+Gi[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Rh(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Ur?Sy:Qp;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Dy(s,e,t){const n=e.attributes,i=new An;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new D(c[0],c[1],c[2]),new D(l[0],l[1],l[2])),a.normalized){const h=Rh(rr[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new D,c=new D;for(let l=0,h=r.length;l<h;l++){const u=r[l];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const _=Rh(rr[d.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new ci;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function lf(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}for(const o in n){const a=wh[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return Ze.workingColorSpace!==un&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ze.workingColorSpace}" not supported.`),xi(s,e),Dy(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Ty(s,e.targets,t):s})}const em={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Vr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Py=new wc(-1,1,1,-1,0,1);class Iy extends At{constructor(){super(),this.setAttribute("position",new ft([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ft([0,2,0,0,2,0],2))}}const Ny=new Iy;class cu{constructor(e){this._mesh=new Ne(Ny,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Py)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Ch extends Vr{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof en?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=bo.clone(e.uniforms),this.material=new en({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new cu(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class hf extends Vr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class Uy extends Vr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class uf{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new De);this._width=n.width,this._height=n.height,t=new qn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Di}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ch(em),this.copyPass.material.blending=Li,this.clock=new sv}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}hf!==void 0&&(o instanceof hf?n=!0:o instanceof Uy&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new De);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class df extends Vr{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Te}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}}const Oy={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Te(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Fr extends Vr{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new De(e.x,e.y):new De(256,256),this.clearColor=new Te(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new qn(r,o,{type:Di}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new qn(r,o,{type:Di});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new qn(r,o,{type:Di});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}const a=Oy;this.highPassUniforms=bo.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new en({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new De(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=em;this.copyUniforms=bo.clone(h.uniforms),this.blendMaterial=new en({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:zt,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Te,this.oldClearAlpha=1,this.basic=new Pt,this.fsQuad=new cu(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new De(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=Fr.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=Fr.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new en({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new De(.5,.5)},direction:{value:new De(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new en({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Fr.BlurDirectionX=new De(1,0);Fr.BlurDirectionY=new De(0,1);const Fy={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class By extends Vr{constructor(){super();const e=Fy;this.uniforms=bo.clone(e.uniforms),this.material=new N0({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new cu(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ze.getTransfer(this._outputColorSpace)===ht&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===up?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===dp?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===fp?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Gh?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===pp?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===mp&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const ky={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new De(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		// FXAA algorithm from NVIDIA, C# implementation by Jasper Flick, GLSL port by Dave Hoskins
		// http://developer.download.nvidia.com/assets/gamedev/files/sdk/11/FXAA_WhitePaper.pdf
		// https://catlikecoding.com/unity/tutorials/advanced-rendering/fxaa/

		uniform sampler2D tDiffuse;
		uniform vec2 resolution;
		varying vec2 vUv;

		#define EDGE_STEP_COUNT 6
		#define EDGE_GUESS 8.0
		#define EDGE_STEPS 1.0, 1.5, 2.0, 2.0, 2.0, 4.0
		const float edgeSteps[EDGE_STEP_COUNT] = float[EDGE_STEP_COUNT]( EDGE_STEPS );

		float _ContrastThreshold = 0.0312;
		float _RelativeThreshold = 0.063;
		float _SubpixelBlending = 1.0;

		vec4 Sample( sampler2D  tex2D, vec2 uv ) {

			return texture( tex2D, uv );

		}

		float SampleLuminance( sampler2D tex2D, vec2 uv ) {

			return dot( Sample( tex2D, uv ).rgb, vec3( 0.3, 0.59, 0.11 ) );

		}

		float SampleLuminance( sampler2D tex2D, vec2 texSize, vec2 uv, float uOffset, float vOffset ) {

			uv += texSize * vec2(uOffset, vOffset);
			return SampleLuminance(tex2D, uv);

		}

		struct LuminanceData {

			float m, n, e, s, w;
			float ne, nw, se, sw;
			float highest, lowest, contrast;

		};

		LuminanceData SampleLuminanceNeighborhood( sampler2D tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData l;
			l.m = SampleLuminance( tex2D, uv );
			l.n = SampleLuminance( tex2D, texSize, uv,  0.0,  1.0 );
			l.e = SampleLuminance( tex2D, texSize, uv,  1.0,  0.0 );
			l.s = SampleLuminance( tex2D, texSize, uv,  0.0, -1.0 );
			l.w = SampleLuminance( tex2D, texSize, uv, -1.0,  0.0 );

			l.ne = SampleLuminance( tex2D, texSize, uv,  1.0,  1.0 );
			l.nw = SampleLuminance( tex2D, texSize, uv, -1.0,  1.0 );
			l.se = SampleLuminance( tex2D, texSize, uv,  1.0, -1.0 );
			l.sw = SampleLuminance( tex2D, texSize, uv, -1.0, -1.0 );

			l.highest = max( max( max( max( l.n, l.e ), l.s ), l.w ), l.m );
			l.lowest = min( min( min( min( l.n, l.e ), l.s ), l.w ), l.m );
			l.contrast = l.highest - l.lowest;
			return l;

		}

		bool ShouldSkipPixel( LuminanceData l ) {

			float threshold = max( _ContrastThreshold, _RelativeThreshold * l.highest );
			return l.contrast < threshold;

		}

		float DeterminePixelBlendFactor( LuminanceData l ) {

			float f = 2.0 * ( l.n + l.e + l.s + l.w );
			f += l.ne + l.nw + l.se + l.sw;
			f *= 1.0 / 12.0;
			f = abs( f - l.m );
			f = clamp( f / l.contrast, 0.0, 1.0 );

			float blendFactor = smoothstep( 0.0, 1.0, f );
			return blendFactor * blendFactor * _SubpixelBlending;

		}

		struct EdgeData {

			bool isHorizontal;
			float pixelStep;
			float oppositeLuminance, gradient;

		};

		EdgeData DetermineEdge( vec2 texSize, LuminanceData l ) {

			EdgeData e;
			float horizontal =
				abs( l.n + l.s - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.se - 2.0 * l.e ) +
				abs( l.nw + l.sw - 2.0 * l.w );
			float vertical =
				abs( l.e + l.w - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.nw - 2.0 * l.n ) +
				abs( l.se + l.sw - 2.0 * l.s );
			e.isHorizontal = horizontal >= vertical;

			float pLuminance = e.isHorizontal ? l.n : l.e;
			float nLuminance = e.isHorizontal ? l.s : l.w;
			float pGradient = abs( pLuminance - l.m );
			float nGradient = abs( nLuminance - l.m );

			e.pixelStep = e.isHorizontal ? texSize.y : texSize.x;
			
			if (pGradient < nGradient) {

				e.pixelStep = -e.pixelStep;
				e.oppositeLuminance = nLuminance;
				e.gradient = nGradient;

			} else {

				e.oppositeLuminance = pLuminance;
				e.gradient = pGradient;

			}

			return e;

		}

		float DetermineEdgeBlendFactor( sampler2D  tex2D, vec2 texSize, LuminanceData l, EdgeData e, vec2 uv ) {

			vec2 uvEdge = uv;
			vec2 edgeStep;
			if (e.isHorizontal) {

				uvEdge.y += e.pixelStep * 0.5;
				edgeStep = vec2( texSize.x, 0.0 );

			} else {

				uvEdge.x += e.pixelStep * 0.5;
				edgeStep = vec2( 0.0, texSize.y );

			}

			float edgeLuminance = ( l.m + e.oppositeLuminance ) * 0.5;
			float gradientThreshold = e.gradient * 0.25;

			vec2 puv = uvEdge + edgeStep * edgeSteps[0];
			float pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
			bool pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !pAtEnd; i++ ) {

				puv += edgeStep * edgeSteps[i];
				pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
				pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			}

			if ( !pAtEnd ) {

				puv += edgeStep * EDGE_GUESS;

			}

			vec2 nuv = uvEdge - edgeStep * edgeSteps[0];
			float nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
			bool nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !nAtEnd; i++ ) {

				nuv -= edgeStep * edgeSteps[i];
				nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
				nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			}

			if ( !nAtEnd ) {

				nuv -= edgeStep * EDGE_GUESS;

			}

			float pDistance, nDistance;
			if ( e.isHorizontal ) {

				pDistance = puv.x - uv.x;
				nDistance = uv.x - nuv.x;

			} else {
				
				pDistance = puv.y - uv.y;
				nDistance = uv.y - nuv.y;

			}

			float shortestDistance;
			bool deltaSign;
			if ( pDistance <= nDistance ) {

				shortestDistance = pDistance;
				deltaSign = pLuminanceDelta >= 0.0;

			} else {

				shortestDistance = nDistance;
				deltaSign = nLuminanceDelta >= 0.0;

			}

			if ( deltaSign == ( l.m - edgeLuminance >= 0.0 ) ) {

				return 0.0;

			}

			return 0.5 - shortestDistance / ( pDistance + nDistance );

		}

		vec4 ApplyFXAA( sampler2D  tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData luminance = SampleLuminanceNeighborhood( tex2D, texSize, uv );
			if ( ShouldSkipPixel( luminance ) ) {

				return Sample( tex2D, uv );

			}

			float pixelBlend = DeterminePixelBlendFactor( luminance );
			EdgeData edge = DetermineEdge( texSize, luminance );
			float edgeBlend = DetermineEdgeBlendFactor( tex2D, texSize, luminance, edge, uv );
			float finalBlend = max( pixelBlend, edgeBlend );

			if (edge.isHorizontal) {

				uv.y += edge.pixelStep * finalBlend;

			} else {

				uv.x += edge.pixelStep * finalBlend;

			}

			return Sample( tex2D, uv );

		}

		void main() {

			gl_FragColor = ApplyFXAA( tDiffuse, resolution.xy, vUv );
			
		}`};class zy extends kp{constructor(){super();const e=new Xt;e.deleteAttribute("uv");const t=new Wt({side:ln}),n=new Wt,i=new su(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const r=new Ne(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new Ne(e,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new Ne(e,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const c=new Ne(e,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);const l=new Ne(e,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);const h=new Ne(e,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const u=new Ne(e,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);const d=new Ne(e,Ws(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);const f=new Ne(e,Ws(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);const g=new Ne(e,Ws(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const _=new Ne(e,Ws(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);const m=new Ne(e,Ws(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const p=new Ne(e,Ws(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function Ws(s){const e=new Pt;return e.color.setScalar(s),e}const Gy="/stellar-forge-demo/assets/base-DEOKjuh_.glb",Hy="/stellar-forge-demo/assets/drone-CdYRVn_1.glb",Vy="/stellar-forge-demo/assets/refinery-D8Zl1aOt.glb",Wy="/stellar-forge-demo/assets/factory-Bj8_kldq.glb",Xy="/stellar-forge-demo/assets/fusion-zjKrz-hT.glb",Yy="/stellar-forge-demo/assets/shipyard-UFcLf6Wo.glb",qy="/stellar-forge-demo/assets/fleet-jMyJdaTt.glb",$y="/stellar-forge-demo/assets/colony-C6kVOZAX.glb",Ky="/stellar-forge-demo/assets/starlifter-DrsLyIdR.glb",jy="/stellar-forge-demo/assets/dyson-hdNeA-kE.glb",ff=855828,pf=16765286,Xs=9425919,mf=3530952,Lh=10473727,Zy=16756838,Dh=15770880,lc=10182117,Ph=16769366,gf={1:4609646,2:5915699,3:4864611},_f={1:{hemiSky:3818848,hemiGround:658966,fog:855828,key:15134719,rim:6000089},2:{hemiSky:4864038,hemiGround:1314055,fog:1445897,key:16771535,rim:15770880},3:{hemiSky:3811922,hemiGround:722200,fog:984864,key:15524607,rim:10182117}},Jy=1e3,Qy=4.4,no=1.05,eb=1500,tb=14,vf=5,nb=9,ib=22,sb=1.9,xf=4200,rb=2600,ob=1.25,ab=2.6,cb=.5,Mf=3,El=8,lb=.09,io=[{tier:1,kind:"drone",url:Hy,sizeY:2,cap:48,epoch:1},{tier:2,kind:"structure",url:Vy,sizeY:5,cap:35,glow:Lh,epoch:1},{tier:3,kind:"structure",url:Wy,sizeY:7.5,cap:20,glow:Zy,epoch:1},{tier:4,kind:"structure",url:Xy,sizeY:11,cap:16,glow:Dh,epoch:2},{tier:5,kind:"structure",url:Yy,sizeY:14,cap:9,glow:Dh,epoch:2},{tier:6,kind:"structure",url:qy,sizeY:18,cap:6,glow:lc,epoch:3},{tier:7,kind:"structure",url:$y,sizeY:21,cap:4,glow:lc,epoch:3},{tier:8,kind:"structure",url:Ky,sizeY:26,cap:4,glow:lc,epoch:3},{tier:9,kind:"structure",url:jy,sizeY:34,cap:2,glow:Ph,epoch:3}],Ef=2.399963229728653,hb=[60,180,300],Ji=8,Vi=(()=>{const s=60*(Math.PI/180),e=9,t=12,n=18,i=[{bearing:60,bands:[[{tier:1,side:"solo",rows:8,cols:6,pitch:6.5}],[{tier:2,side:"L",rows:7,cols:5,pitch:10},{tier:3,side:"R",rows:5,cols:4,pitch:13.5}]]},{bearing:180,bands:[[{tier:4,side:"L",rows:4,cols:4,pitch:18},{tier:5,side:"R",rows:3,cols:3,pitch:26}]]},{bearing:300,bands:[[{tier:6,side:"L",rows:2,cols:3,pitch:33},{tier:7,side:"R",rows:2,cols:2,pitch:40}],[{tier:8,side:"L",rows:2,cols:2,pitch:52},{tier:9,side:"R",rows:2,cols:1,pitch:62}]]}],r=new Map;for(const o of i){let a=n;for(const c of o.bands){let l=0,h=0;for(const d of c){const f=d.side==="solo"?d.rows*d.pitch/2:Ji/2+d.rows*d.pitch;l=Math.max(l,f),h=Math.max(h,d.cols*d.pitch)}const u=Math.max(a,(l+e)/Math.tan(s));for(const d of c)r.set(d.tier,{bearing:o.bearing,side:d.side,rows:d.rows,cols:d.cols,pitch:d.pitch,u0:u});a=u+h+t}}return r})(),hc={60:1,180:2,300:3};function Sf(s){const e=s.cols*s.pitch,t=s.rows*s.pitch,n=s.u0+e/2,i=s.side==="solo"?0:(s.side==="L"?-1:1)*(Ji/2+t/2);return{depth:e,width:t,uCenter:n,vCenter:i}}function tm(s){const e=s.u0+s.cols*s.pitch,t=s.side==="solo"?s.rows*s.pitch/2:Ji/2+s.rows*s.pitch;return Math.hypot(e,t)}function yf(s,e){const t=Math.min(Math.max(e,0),s.rows*s.cols-1),n=Math.floor(t/s.rows),i=t%s.rows,r=s.pitch,o=s.u0+n*r+r/2,a=s.side==="solo"?(i-(s.rows-1)/2)*r:s.side==="L"?-4-(i+.5)*r:Ji/2+(i+.5)*r;return{u:o,v:a,col:n,row:i}}function Ys(s,e,t){const n=t*(Math.PI/180);return{x:s*Math.cos(n)-e*Math.sin(n),z:s*Math.sin(n)+e*Math.cos(n)}}function ub(s){let e=40;for(const t of Vi.values())hc[t.bearing]===s&&(e=Math.max(e,tm(t)));return e}class db{constructor(e){O(this,"_bus");O(this,"_clock");O(this,"_input");O(this,"_world");O(this,"_renderer");O(this,"_scene");O(this,"_camera");O(this,"_canvas");O(this,"_parent");O(this,"_loader",new ZS);O(this,"_bloomComposer");O(this,"_finalComposer");O(this,"_bloomPass");O(this,"_fxaaPass");O(this,"_bloomLayer",new jh);O(this,"_darkMat",new Pt({color:0}));O(this,"_matStash",new Map);O(this,"_forge");O(this,"_forgeCore");O(this,"_forgeMidY",2);O(this,"_protos",new Map);O(this,"_loading",new Set);O(this,"_protoFootprint",new Map);O(this,"_byTier",new Map);O(this,"_owned",new Map);O(this,"_districtCurb",new Map);O(this,"_propSets",[]);O(this,"_propZero",new ze().makeScale(0,0,0));O(this,"_dysonCrown");O(this,"_oreNodes",[]);O(this,"_freight",[]);O(this,"_shockwaves",[]);O(this,"_lastEpochSeen",1);O(this,"_oreCarryGeo",new fo(.22,0));O(this,"_oreCarryMat",new Pt({color:mf,transparent:!0,opacity:.95,blending:zt,depthWrite:!1,fog:!1}));O(this,"_glowGeo",new mo(.32,12,10));O(this,"_rockGeo",new _c(.6,0));O(this,"_freightGeo",new fo(.16,0));O(this,"_padGeo",new Qs(1,1.08,.34,6));O(this,"_padRimGeo",new vc(1,.05,6,32));O(this,"_rotorGeo",new vc(.5,.035,6,28));O(this,"_beaconGeo",new mo(.13,8,8));O(this,"_moteGeo",new fo(.15,0));O(this,"_ringGeo",new po(.86,1,40));O(this,"_siloGeo",new Qs(1,1.05,1,8));O(this,"_crateGeo",new Xt(1,1,1));O(this,"_solarGeo",new Xt(1,.06,1));O(this,"_pylonGeo",new Qs(.4,1,1,6));O(this,"_propMat",new Wt({color:16777215,roughness:.82,metalness:.34}));O(this,"_keyLight");O(this,"_hemi");O(this,"_rimLight");O(this,"_epochBlend",1);O(this,"_sparks");O(this,"_sparkVel");O(this,"_nextSpark",0);O(this,"_droneGlow");O(this,"_droneTrail");O(this,"_trailHead",0);O(this,"_trailTimer",0);O(this,"_raf",0);O(this,"_lastMs",0);O(this,"_elapsed",0);O(this,"_camDist",20);O(this,"_shakeUntil",0);O(this,"_flash",0);O(this,"_hitW",-1);O(this,"_hitH",-1);O(this,"_unsub",[]);O(this,"_scratch",new D);O(this,"_base",new D);O(this,"_colA",new Te);O(this,"_colB",new Te);O(this,"_darkenNonBloomed",e=>{const t=e;t.isMesh&&this._bloomLayer.test(e.layers)===!1&&(this._matStash.set(e.uuid,t.material),t.material=this._darkMat)});O(this,"_restoreMaterial",e=>{const t=this._matStash.get(e.uuid);t!==void 0&&(e.material=t,this._matStash.delete(e.uuid))});O(this,"_onPointerDown",e=>this._input.onPointerDown(this._raw(e,"down")));O(this,"_onPointerUp",e=>this._input.onPointerUp(this._raw(e,"up")));O(this,"_onPointerMove",e=>this._input.onPointerMove(this._raw(e,"move")));O(this,"_loop",()=>{this._raf=requestAnimationFrame(this._loop);const e=performance.now(),t=e-this._lastMs;this._lastMs=e,this._elapsed+=t;const n=Math.min(t,100)/1e3;this._clock.advance(Math.min(t,Jy)),this._animateForge(n),this._animateDysonCrown(this._elapsed/1e3),this._animateUnits(n),this._animateOre(n),this._animateFreight(n),this._animateShockwaves(n),this._animateSparks(n),this._syncDroneVFX(n),this._applyEpochAmbience(n),this._updateHitArea(),this._applyCamera(n),this._renderComposite()});O(this,"_onResize",()=>{const e=this._parent.clientWidth||window.innerWidth,t=this._parent.clientHeight||window.innerHeight;this._camera.aspect=e/t,this._camera.updateProjectionMatrix(),this._renderer.setSize(e,t),this._bloomComposer.setSize(e,t),this._finalComposer.setSize(e,t);const n=this._renderer.getPixelRatio();this._fxaaPass.material.uniforms.resolution.value.set(1/(e*n),1/(t*n))});this._bus=e.bus,this._clock=e.clock,this._input=e.input,this._world=e.world}mount(e){this._parent=e;const t=e.clientWidth||window.innerWidth,n=e.clientHeight||window.innerHeight;this._renderer=new jS({antialias:!1,powerPreference:"high-performance"}),this._renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this._renderer.setSize(t,n),this._renderer.shadowMap.enabled=!0,this._renderer.shadowMap.type=lp,this._renderer.toneMapping=Gh,this._renderer.toneMappingExposure=1.12,this._canvas=this._renderer.domElement,this._canvas.style.cssText="display:block;width:100%;height:100%",e.appendChild(this._canvas),this._scene=new kp,this._scene.background=new Te(ff),this._scene.fog=new Zh(ff,110,900),this._camera=new cn(45,t/n,.1,1400);const i=new Th(this._renderer),r=new zy;this._scene.environment=i.fromScene(r,.04).texture,this._scene.environmentIntensity=.55,i.dispose(),this._bloomLayer.set(1),this._buildComposers(t,n),this._buildLighting(),this._buildGround(),this._buildCityPlan(),this._buildStarfield(),this._buildSparks(),this._buildOreField(),this._buildFreight(),this._buildShockwaves(),this._buildDroneVFX(),this._loadForge(),this._seedInitialTiers(),this._lastEpochSeen=this._currentEpoch(),this._unsub.push(this._bus.on(ee.INTENT_TAP_FORGE,()=>this._onForgeTap()),this._bus.on(ee.GENERATOR_PURCHASED,o=>this._syncTier(o.tier,o.owned,!0)),this._bus.on(ee.MILESTONE_REACHED,()=>this._celebrate(.5,260)),this._bus.on(ee.ASCENSION_STARTED,()=>this._celebrate(.4,240)),this._bus.on(ee.ASCENSION_COMPLETE,()=>this._onAscension())),this._canvas.addEventListener("pointerdown",this._onPointerDown),this._canvas.addEventListener("pointerup",this._onPointerUp),this._canvas.addEventListener("pointermove",this._onPointerMove),window.addEventListener("resize",this._onResize),this._lastMs=performance.now(),this._loop()}dispose(){var e,t;cancelAnimationFrame(this._raf),window.removeEventListener("resize",this._onResize),this._canvas.removeEventListener("pointerdown",this._onPointerDown),this._canvas.removeEventListener("pointerup",this._onPointerUp),this._canvas.removeEventListener("pointermove",this._onPointerMove);for(const n of this._unsub)n();this._unsub.length=0,this._scene.traverse(n=>{const i=n;i.geometry&&i.geometry.dispose();const r=i.material;Array.isArray(r)?r.forEach(o=>o.dispose()):r==null||r.dispose()}),(e=this._bloomComposer)==null||e.dispose(),(t=this._finalComposer)==null||t.dispose(),this._renderer.dispose(),this._canvas.remove()}_buildComposers(e,t){this._darkMat.fog=!1,this._bloomPass=new Fr(new De(e,t),.82,.55,.05),this._bloomComposer=new uf(this._renderer),this._bloomComposer.renderToScreen=!1,this._bloomComposer.addPass(new df(this._scene,this._camera)),this._bloomComposer.addPass(this._bloomPass);const n=new Ch(new en({uniforms:{baseTexture:{value:null},bloomTexture:{value:this._bloomComposer.renderTarget2.texture}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform sampler2D baseTexture; uniform sampler2D bloomTexture; varying vec2 vUv; void main(){ gl_FragColor = texture2D(baseTexture, vUv) + vec4(1.02) * texture2D(bloomTexture, vUv); }"}),"baseTexture");n.needsSwap=!0,this._finalComposer=new uf(this._renderer),this._finalComposer.addPass(new df(this._scene,this._camera)),this._finalComposer.addPass(n),this._finalComposer.addPass(new By);const i=this._renderer.getPixelRatio();this._fxaaPass=new Ch(ky),this._fxaaPass.material.uniforms.resolution.value.set(1/(e*i),1/(t*i)),this._finalComposer.addPass(this._fxaaPass)}_bloom(e){e.traverse(t=>t.layers.enable(1))}_renderComposite(){this._scene.traverse(this._darkenNonBloomed),this._bloomComposer.render(),this._scene.traverse(this._restoreMaterial),this._finalComposer.render()}_buildLighting(){const e=new ac(15134719,3.9);e.position.set(-16,30,14),e.castShadow=!0,e.shadow.mapSize.set(2048,2048),e.shadow.camera.near=1,e.shadow.camera.far=520;const t=230;e.shadow.camera.left=-t,e.shadow.camera.right=t,e.shadow.camera.top=t,e.shadow.camera.bottom=-t,e.shadow.bias=-4e-4,this._scene.add(e),this._keyLight=e;const n=new ac(7308984,.7);n.position.set(16,10,-12),this._scene.add(n),this._hemi=new Z0(3818848,658966,.95),this._scene.add(this._hemi),this._rimLight=new ac(6000089,1.1),this._rimLight.position.set(10,16,-22),this._scene.add(this._rimLight)}_groundY(e,t){const n=Math.sin(e*.16)*Math.cos(t*.14)*.42+Math.sin(e*.42+1.3)*Math.cos(t*.38+.4)*.2+Math.sin(e*.95+4)*Math.cos(t*.9+2.1)*.09+Math.sin(e*2.3)*Math.cos(t*2.1)*.04,i=Math.hypot(e,t),r=Math.min(1,Math.max(0,(i-200)/80)*.92+.04);return n*r}_seatY(e,t,n){let i=this._groundY(e,t);const r=n*.9;for(let o=0;o<8;o+=1){const a=o/8*Math.PI*2;i=Math.max(i,this._groundY(e+Math.cos(a)*r,t+Math.sin(a)*r))}return i}_buildGround(){const n=new fa(560,560,360,360);n.rotateX(-Math.PI/2);const i=n.attributes.position;for(let a=0;a<i.count;a+=1)i.setY(a,this._groundY(i.getX(a),i.getZ(a)));n.computeVertexNormals();const r=new Wt({color:4344150,roughness:.94,metalness:.12}),o=new Ne(n,r);o.receiveShadow=!0,this._scene.add(o)}_buildCityPlan(){const e=this._groundY(0,0),t=Math.PI/180,n=new Ne(new nu(12,60),new Wt({color:2830910,roughness:.86,metalness:.22}));n.rotation.x=-Math.PI/2,n.position.y=e+.03,n.receiveShadow=!0,this._scene.add(n);const i=new Ne(new po(11.4,12,60),new Pt({color:Xs,transparent:!0,opacity:.34,side:_n,blending:zt,depthWrite:!1,fog:!1}));i.rotation.x=-Math.PI/2,i.position.y=e+.05,i.layers.enable(1),this._scene.add(i);const r=new Ne(new po(15.2,16.6,72),new Wt({color:2501944,roughness:.82,metalness:.26,emissive:2243157,emissiveIntensity:.45,side:_n}));r.rotation.x=-Math.PI/2,r.position.y=e+.02,r.receiveShadow=!0,this._scene.add(r);const o=hb.map(a=>({deg:a,len:ub(hc[a]??1)+10}));for(const a of o){const c=a.deg*t,l=12+a.len/2,h=new Ne(new Xt(a.len,.12,Ji),new Wt({color:2501944,roughness:.82,metalness:.26,emissive:2243157,emissiveIntensity:.5}));h.rotation.y=-c,h.position.set(Math.cos(c)*l,e+.02,Math.sin(c)*l),h.receiveShadow=!0,this._scene.add(h)}for(const[a,c]of Vi)this._buildDistrictDeck(a,c,e);this._buildConduits(o,e),this._buildCityLights(e,o),this._buildFillProps(e)}_buildConduits(e,t){const n=Math.PI/180,i=[],r=(c,l,h,u,d)=>{const f=new Xt(c,.16,l),g=d*n,_=Ys(h,u,d);f.applyMatrix4(new ze().makeRotationY(-g).setPosition(_.x,t+.06,_.z)),i.push(f)};for(const c of e){const h=c.len-4;for(const u of[-1,1])r(h-16,.5,(16+h)/2,u*(Ji/2+.7),c.deg)}for(const c of Vi.values()){if(c.side==="solo")continue;const l=c.side==="L"?-1:1,{uCenter:h}=Sf(c);r(c.pitch*.4,3,h,l*(Ji/2+1.5),c.bearing)}const o=nf(i);if(o===null)return;const a=new Ne(o,new Wt({color:2041136,roughness:.8,metalness:.3}));a.receiveShadow=!0,this._scene.add(a)}_epochDeckColor(e){return e>=3?10182117:e===2?15770880:6000089}_buildDistrictDeck(e,t,n){const{depth:i,width:r,uCenter:o,vCenter:a}=Sf(t),c=t.bearing*(Math.PI/180),l=Math.cos(c),h=Math.sin(c),u=o*l-a*h,d=o*h+a*l,f=i+3,g=r+3,_=new Ne(new Xt(f,.14,g),new Wt({color:2765117,roughness:.85,metalness:.24}));_.rotation.y=-c,_.position.set(u,n+.03,d),_.receiveShadow=!0,this._scene.add(_);const m=hc[t.bearing]??1,p=new Pt({color:this._epochDeckColor(m),transparent:!0,opacity:.14,blending:zt,depthWrite:!1,fog:!1}),y=.5,b=nf([new Xt(f,.1,y).translate(0,0,g/2),new Xt(f,.1,y).translate(0,0,-g/2),new Xt(y,.1,g).translate(f/2,0,0),new Xt(y,.1,g).translate(-f/2,0,0)])??new Xt(f,.1,y),v=new Ne(b,p);v.layers.enable(1),v.rotation.y=-c,v.position.set(u,n+.12,d),this._scene.add(v),this._districtCurb.set(e,p)}_buildCityLights(e,t){const n=Math.PI/180,i=4.4,r=16;let o=0;for(const d of t)o+=(Math.floor((d.len-r)/i)+1)*2;const a=new Xt(.55,.5,1.7),c=new Wt({color:2371644,emissive:4183782,emissiveIntensity:1.5,roughness:.4,metalness:.2}),l=new yh(a,c,o);l.layers.enable(1),l.instanceMatrix.setUsage(fc);const h=new xt;let u=0;for(const d of t){const f=d.deg*n,g=Math.cos(f),_=Math.sin(f),m=-Math.sin(f),p=Math.cos(f),y=Math.floor((d.len-r)/i)+1;for(let b=0;b<y;b+=1){const v=r+b*i;for(const R of[-1,1]){const w=R*(Ji/2-.4);h.position.set(g*v+m*w,e+.12,_*v+p*w),h.rotation.set(0,-f,0),h.updateMatrix(),l.setMatrixAt(u,h.matrix),u+=1}}}l.count=u,l.frustumCulled=!1,this._scene.add(l)}_buildFillProps(e){const t=new xt,n=new Te,i=(l,h)=>{if(h.length===0)return;const u=new yh(l,this._propMat,h.length);u.frustumCulled=!1,u.castShadow=!1,u.instanceMatrix.setUsage(F_);const d=[],f=new Int16Array(h.length),g=new Map;for(let _=0;_<h.length;_+=1){const m=h[_];t.position.set(m.x,m.y,m.z),t.rotation.set(0,-(Vi.get(m.tier).bearing*(Math.PI/180)),m.tiltZ),t.scale.set(m.sx,m.sy,m.sz),t.updateMatrix(),d.push(t.matrix.clone()),u.setMatrixAt(_,this._propZero),u.setColorAt(_,n.setHex(m.tint)),f[_]=m.slot;const p=g.get(m.tier);p===void 0?g.set(m.tier,[_]):p.push(_)}u.instanceMatrix.needsUpdate=!0,u.instanceColor!==null&&(u.instanceColor.needsUpdate=!0),this._scene.add(u),this._propSets.push({inst:u,mat:d,slotOf:f,byTier:g})},r=[],o=[],a=[],c=[];for(const[l,h]of Vi){const u=this._cfg(l);if(u===void 0)continue;const d=hc[h.bearing]??1,f=gf[d]??gf[1],g=h.pitch,_=h.side==="L"?-1:1,m=h.rows*h.cols;for(let p=0;p<m;p+=1){const{u:y,v:b,col:v}=yf(h,p);{const R=Ys(y-g*.32,b,h.bearing),w=g*.22;o.push({tier:l,slot:p,x:R.x,z:R.z,y:e+.14+w/2,sx:g*.3,sy:w,sz:g*.42,tiltZ:0,tint:f})}if(d<=2){const R=oc.clamp(u.sizeY*.3,1.2,7);for(const w of[-1,1]){const C=Ys(y+g*.34,b+w*g*.3,h.bearing);r.push({tier:l,slot:p,x:C.x,z:C.z,y:e+.14+R/2,sx:g*.16,sy:R,sz:g*.16,tiltZ:0,tint:f})}}if(d>=3){const R=Ys(y,b+_*g*.36,h.bearing);a.push({tier:l,slot:p,x:R.x,z:R.z,y:e+.14+.42,sx:g*.5,sy:1,sz:g*.3,tiltZ:.38,tint:f})}if(v===h.cols-1){const R=Ys(y+g*.72,b,h.bearing),w=oc.clamp(u.sizeY*.5,3,14);c.push({tier:l,slot:p,x:R.x,z:R.z,y:e+.14+w/2,sx:g*.1,sy:w,sz:g*.1,tiltZ:0,tint:f})}}}i(this._crateGeo,o),i(this._siloGeo,r),i(this._solarGeo,a),i(this._pylonGeo,c)}_revealProps(e,t){for(const n of this._propSets){const i=n.byTier.get(e);if(i!==void 0){for(const r of i)n.inst.setMatrixAt(r,n.slotOf[r]<t?n.mat[r]:this._propZero);n.inst.instanceMatrix.needsUpdate=!0}}}_hideAllProps(){for(const e of this._propSets){for(let t=0;t<e.mat.length;t+=1)e.inst.setMatrixAt(t,this._propZero);e.inst.instanceMatrix.needsUpdate=!0}}_buildStarfield(){const e=new At,t=300,n=new Float32Array(t*3);let i=987654321;const r=()=>(i=(i*1664525+1013904223)%4294967296,i/4294967296);for(let d=0;d<t;d+=1){const f=90+r()*90,g=r()*Math.PI*2;n[d*3]=Math.cos(g)*f,n[d*3+1]=18+r()*90,n[d*3+2]=Math.sin(g)*f}e.setAttribute("position",new Tt(n,3));const o=new _s({color:14674165,size:.4,sizeAttenuation:!0,transparent:!0,opacity:.8,fog:!1});this._scene.add(new Js(e,o));const a=new At,c=26,l=new Float32Array(c*3);for(let d=0;d<c;d+=1){const f=120+r()*120,g=r()*Math.PI*2;l[d*3]=Math.cos(g)*f,l[d*3+1]=40+r()*110,l[d*3+2]=Math.sin(g)*f}a.setAttribute("position",new Tt(l,3));const h=new _s({color:16777215,size:1,sizeAttenuation:!0,transparent:!0,opacity:1,blending:zt,depthWrite:!1,fog:!1}),u=new Js(a,h);u.layers.enable(1),this._scene.add(u)}_buildSparks(){const t=new At,n=new Float32Array(480);for(let r=0;r<160;r+=1)n[r*3+1]=-999;this._sparkVel=new Float32Array(480),t.setAttribute("position",new Tt(n,3));const i=new _s({color:pf,size:.12,transparent:!0,opacity:.72,blending:zt,depthWrite:!1,fog:!1});this._sparks=new Js(t,i),this._sparks.frustumCulled=!1,this._sparks.layers.enable(1),this._scene.add(this._sparks)}_buildDroneVFX(){const t=new At,n=new Float32Array(48);for(let h=0;h<16;h+=1)n[h*3+1]=-999;t.setAttribute("position",new Tt(n,3));const i=new _s({color:Xs,size:.28,sizeAttenuation:!0,transparent:!0,opacity:.8,blending:zt,depthWrite:!1,fog:!1});this._droneGlow=new Js(t,i),this._droneGlow.frustumCulled=!1,this._bloom(this._droneGlow),this._scene.add(this._droneGlow);const r=16*El,o=new At,a=new Float32Array(r*3),c=new Float32Array(r*3);for(let h=0;h<r;h+=1)a[h*3+1]=-999;o.setAttribute("position",new Tt(a,3)),o.setAttribute("color",new Tt(c,3));const l=new _s({size:.14,sizeAttenuation:!0,transparent:!0,opacity:.85,vertexColors:!0,blending:zt,depthWrite:!1,fog:!1});this._droneTrail=new Js(o,l),this._droneTrail.frustumCulled=!1,this._bloom(this._droneTrail),this._scene.add(this._droneTrail)}_syncDroneVFX(e){const t=this._byTier.get(1),n=this._droneGlow.geometry.attributes.position;for(let o=0;o<n.count;o+=1){const a=t==null?void 0:t[o];a!==void 0&&a.settle>.5?n.setXYZ(o,a.group.position.x,a.group.position.y-.12,a.group.position.z):n.setXYZ(o,0,-999,0)}n.needsUpdate=!0,this._droneGlow.material.opacity=.8+Math.sin(this._elapsed/200)*.18;const i=this._droneTrail.geometry.attributes.position,r=this._droneTrail.geometry.attributes.color;if(this._trailTimer+=e,this._trailTimer>=lb&&t!==void 0){this._trailTimer=0;const o=this._trailHead%El;for(let a=0;a<t.length;a+=1){const c=t[a];if(c.settle>.5&&(c.state==="seek"||c.state==="haul")){const l=a*El+o;i.setXYZ(l,c.group.position.x,c.group.position.y-.12,c.group.position.z),r.setXYZ(l,.56,.83,1)}}this._trailHead+=1,i.needsUpdate=!0}for(let o=0;o<r.count;o+=1)r.setXYZ(o,r.getX(o)*.93,r.getY(o)*.93,r.getZ(o)*.93);r.needsUpdate=!0}_buildOreField(){let e=20260707;const t=()=>(e=(e*1664525+1013904223)%4294967296,e/4294967296);for(let n=0;n<tb;n+=1){const i=vf+(nb-vf)*Math.sqrt(t()),r=n*Ef*1.3+t()*.6,o=Math.cos(r)*i,a=Math.sin(r)*i,c=this._groundY(o,a),l=.7+t()*.9,h=new Wt({color:2765632,roughness:.72,metalness:.18,emissive:mf,emissiveIntensity:.45}),u=new Ne(this._rockGeo,h);u.scale.set(l,l*(.7+t()*.5),l),u.position.set(o,c+.2*l,a),u.rotation.set(t()*3,t()*3,t()*3),u.castShadow=!0,u.receiveShadow=!0,u.layers.enable(1),this._scene.add(u),this._oreNodes.push({pos:new D(o,c+.55*l,a),mat:h,heat:0})}}_buildFreight(){for(let e=0;e<ib;e+=1){const t=new Wt({color:16777215,emissive:16777215,emissiveIntensity:.8,roughness:.4,metalness:.3,transparent:!0,opacity:1}),n=new Ne(this._freightGeo,t);n.castShadow=!0,n.visible=!1,n.frustumCulled=!1,n.layers.enable(1),this._scene.add(n),this._freight.push({mesh:n,active:!1,t:0,from:new D,ctrl:new D,to:new D})}}_buildShockwaves(){for(let e=0;e<8;e+=1){const t=new Pt({color:16777215,transparent:!0,opacity:0,side:_n,blending:zt,depthWrite:!1,fog:!1}),n=new Ne(this._ringGeo,t);n.rotation.x=-Math.PI/2,n.visible=!1,n.frustumCulled=!1,n.layers.enable(1),this._scene.add(n),this._shockwaves.push({mesh:n,active:!1,t:0,dur:1,maxScale:1})}}_shockwave(e,t,n,i,r=.9){const o=this._shockwaves.find(c=>!c.active);if(o===void 0)return;o.active=!0,o.t=0,o.dur=r,o.maxScale=i;const a=o.mesh.material;a.color.setHex(n),a.opacity=.85,o.mesh.position.set(e,this._groundY(e,t)+.08,t),o.mesh.scale.setScalar(.1),o.mesh.visible=!0}_animateShockwaves(e){for(const t of this._shockwaves){if(!t.active)continue;if(t.t+=e/t.dur,t.t>=1){t.active=!1,t.mesh.visible=!1;continue}const n=1-Math.pow(1-t.t,2);t.mesh.scale.setScalar(.1+n*t.maxScale),t.mesh.material.opacity=.85*(1-t.t)}}_loadForge(){this._loader.load(Gy,e=>{const t=e.scene;this._normalise(t,7.2),t.traverse(o=>{const a=o;a.isMesh&&(a.castShadow=!0,a.receiveShadow=!0)});const n=new an;n.add(t),n.position.set(0,this._groundY(0,0),0),this._scene.add(n),this._forge=n;const i=new An().setFromObject(n);this._forgeMidY=(i.min.y+i.max.y)/2;const r=new su(Xs,4.2,34,2);r.position.set(0,this._forgeMidY*.7,.4),this._scene.add(r),this._forgeCore=r},void 0,e=>{console.error("World3D: failed to load base.glb",e);const t=new Ne(new _c(2.4,0),new Wt({color:9152447,roughness:.4,metalness:.5,emissive:2771562}));t.castShadow=!0,t.position.y=2.4;const n=new an;n.add(t),this._scene.add(n),this._forge=n,this._forgeMidY=2.4})}_seedInitialTiers(){for(const e of io)(e.tier===1||this._world.getOwned(e.tier)>0)&&this._ensureTierLoaded(e.tier)}_ensureTierLoaded(e){if(this._protos.has(e)||this._loading.has(e))return;const t=this._cfg(e);t!==void 0&&(this._loading.add(e),this._loader.load(t.url,n=>{const i=n.scene;this._normalise(i,t.sizeY),i.traverse(a=>{const c=a;c.isMesh&&(c.castShadow=!0,c.receiveShadow=!0)});const r=new D;new An().setFromObject(i).getSize(r),this._protoFootprint.set(e,Math.max(r.x,r.z)*.5),this._protos.set(e,i),this._loading.delete(e);const o=this._owned.get(e)??this._world.getOwned(e);this._syncTier(e,e===1?Math.max(1,o):o)},void 0,n=>{this._loading.delete(e),console.error(`World3D: failed to load tier-${e} model`,n)}))}_normalise(e,t){const n=new An().setFromObject(e),i=new D;n.getSize(i);const r=t/(i.y||1);e.scale.setScalar(r);const o=new An().setFromObject(e),a=new D;o.getCenter(a),e.position.x-=a.x,e.position.z-=a.z,e.position.y-=o.min.y}_cfg(e){return io.find(t=>t.tier===e)}_plot(e,t){const n=Vi.get(e.tier);if(n===void 0)return{x:0,z:0};const{u:i,v:r}=yf(n,t);return Ys(i,r,n.bearing)}_basePoint(){return this._base.set(0,this._forgeMidY*.55,1.5)}_makeDrone(e,t,n){const i=new an;i.add(n.clone(!0));const{x:r,z:o}=this._plot(e,t),a=this._groundY(r,o),c=t*Ef;i.position.set(r,a+no,o),i.rotation.y=c,i.scale.setScalar(.001);const l=new Ne(this._oreCarryGeo,this._oreCarryMat);return l.position.set(0,-.32,.05),l.visible=!1,i.add(l),this._scene.add(i),{group:i,kind:"drone",settle:0,phase:t*1.7,baseY:a,homeX:r,homeZ:o,state:"seek",oreIdx:this._oreNodes.length>0?t%this._oreNodes.length:0,timer:0,heading:c,carry:l,glow:void 0,glowScale:0,emitTimer:0,topY:0,freightColor:0,pad:void 0,rotor:void 0,spin:0,beacon:void 0,motes:void 0,riseDepth:0,ventLatch:!1,workStyle:"orbit",moteSpin:0}}_makePad(e,t,n,i,r){const o=new an,a=i*1.05+.4,c=new Ne(this._padGeo,new Wt({color:3291720,roughness:.8,metalness:.3}));c.scale.set(a,1,a),c.position.y=-.04,c.castShadow=!0,c.receiveShadow=!0;const l=new Ne(this._padRimGeo,new Pt({color:r,transparent:!0,opacity:.38,blending:zt,depthWrite:!1,fog:!1}));return l.rotation.x=-Math.PI/2,l.scale.setScalar(a),l.position.y=.16,l.layers.enable(1),o.add(c,l),o.position.set(e,t,n),o.scale.setScalar(.001),this._scene.add(o),o}_makeStructure(e,t,n){const i=new an;i.add(n.clone(!0));const{x:r,z:o}=this._plot(e,t),a=Math.max(this._protoFootprint.get(e.tier)??e.sizeY*.5,.5),c=this._seatY(r,o,a),l=e.glow??Lh,h=Vi.get(e.tier),u=h!==void 0?h.bearing*(Math.PI/180):Math.atan2(o,r);i.position.set(r,c,o),i.rotation.y=Math.atan2(-Math.cos(u),-Math.sin(u)),i.scale.setScalar(.001);const d=Math.min(6,Math.max(.85,e.sizeY/4.6)),f=new Ne(this._glowGeo,new Pt({color:l,transparent:!0,opacity:.6,blending:zt,depthWrite:!1,fog:!1}));f.position.set(0,e.sizeY*.6,0),f.scale.setScalar(d),f.layers.enable(1),i.add(f);const g=new an;g.position.set(0,e.sizeY*.62,0),g.rotation.x=-Math.PI/2+cb,i.add(g);const _=new Ne(this._rotorGeo,new Pt({color:l,transparent:!0,opacity:.75,blending:zt,depthWrite:!1,fog:!1}));_.scale.setScalar(a*.42),_.layers.enable(1),g.add(_);const m=new Ne(this._beaconGeo,new Pt({color:l,transparent:!0,opacity:1,blending:zt,depthWrite:!1,fog:!1}));m.scale.setScalar(Math.max(1,e.sizeY/6)),m.position.set(0,e.sizeY*1.02,0),m.layers.enable(1),i.add(m);let p;if(e.epoch>=3){p=new an;const b=a*1.15+e.sizeY*.06;for(let v=0;v<Mf;v+=1){const R=new Ne(this._moteGeo,new Pt({color:l,transparent:!0,opacity:.95,blending:zt,depthWrite:!1,fog:!1})),w=v/Mf*Math.PI*2;R.position.set(Math.cos(w)*b,0,Math.sin(w)*b),R.scale.setScalar(Math.max(1,e.sizeY/12)),p.add(R)}p.position.set(0,e.sizeY*.66,0),this._bloom(p),i.add(p)}this._scene.add(i);const y=this._makePad(r,c,o,a,l);return{group:i,kind:"structure",settle:0,phase:t*1.7,baseY:c,homeX:r,homeZ:o,state:"seek",oreIdx:0,timer:0,heading:0,carry:void 0,glow:f,glowScale:d,emitTimer:xf+t*380,topY:c+e.sizeY*.9,freightColor:l,pad:y,rotor:_,spin:.7+1.6/Math.sqrt(e.sizeY),beacon:m,motes:p,riseDepth:Math.min(ab,e.sizeY*.5),ventLatch:!1,workStyle:e.tier<=3?"conduit":e.tier===4?"throb":e.tier===5?"assembly":e.tier===8?"siphon":"orbit",moteSpin:e.tier===6?.9:.32}}_syncTier(e,t,n=!1){const i=this._cfg(e),r=this._protos.get(e);if(i===void 0||r===void 0){this._owned.set(e,t),i!==void 0&&(this._revealProps(e,Math.min(Math.max(t,0),i.cap)),this._ensureTierLoaded(e));return}this._owned.set(e,t);const o=Math.min(Math.max(t,0),i.cap),a=this._byTier.get(e)??[];for(let h=a.length;h<o;h+=1){const u=i.kind==="drone"?this._makeDrone(i,h,r):this._makeStructure(i,h,r);a.push(u),n&&this._constructionBeat(u,i)}this._byTier.set(e,a);const c=this._districtCurb.get(e);c!==void 0&&i.cap>0&&(c.opacity=.12+.6*Math.min(1,o/i.cap)),this._revealProps(e,o),e===9&&o>0&&this._dysonCrown===void 0&&this._buildDysonCrown(),this._frameCamera();const l=this._currentEpoch();l>this._lastEpochSeen&&(n&&this._onEpochAdvance(l),this._lastEpochSeen=l)}_constructionBeat(e,t){const n=t.glow??(t.kind==="drone"?Xs:Lh),i=this._protoFootprint.get(t.tier)??t.sizeY*.5,r=Math.max(3,i*2.4+t.sizeY*.4);this._shockwave(e.homeX,e.homeZ,n,r,.95),this._emitSparks(t.kind==="drone"?4:8,t.kind==="drone"?.9:1.4,this._scratch.set(e.homeX,e.baseY+t.sizeY*.4,e.homeZ)),this._shakeUntil=Math.max(this._shakeUntil,this._elapsed+180),this._flash=Math.max(this._flash,.07)}_onEpochAdvance(e){const t=e>=3?lc:e===2?Dh:Xs;this._shockwave(0,0,t,190,1.6),this._shockwave(0,0,16777215,90,1.2),this._celebrate(1.05,760),this._emitSparks(48,2.6,this._scratch.set(0,this._forgeMidY,0)),this._epochBlend=Math.max(this._epochBlend,e-.85)}_occupiedRadius(){var t;let e=14;for(const n of io)if((((t=this._byTier.get(n.tier))==null?void 0:t.length)??0)>0){const i=Vi.get(n.tier);i!==void 0&&(e=Math.max(e,tm(i)+n.sizeY))}return e}_frameCamera(){const e=this._occupiedRadius();this._camDist=oc.clamp(e*1.32+10,16,390)}_currentEpoch(){var t;let e=1;for(const n of io)(((t=this._byTier.get(n.tier))==null?void 0:t.length)??0)>0&&(e=Math.max(e,n.epoch));return e}_applyEpochAmbience(e){this._epochBlend+=(this._currentEpoch()-this._epochBlend)*Math.min(1,e*.5);const t=Math.max(1,Math.min(3,Math.floor(this._epochBlend))),n=Math.min(3,t+1),i=this._epochBlend-t,r=_f[t],o=_f[n];r===void 0||o===void 0||(this._hemi.color.setHex(r.hemiSky).lerp(this._colA.setHex(o.hemiSky),i),this._hemi.groundColor.setHex(r.hemiGround).lerp(this._colA.setHex(o.hemiGround),i),this._keyLight.color.setHex(r.key).lerp(this._colA.setHex(o.key),i),this._rimLight.color.setHex(r.rim).lerp(this._colA.setHex(o.rim),i),this._colB.setHex(r.fog).lerp(this._colA.setHex(o.fog),i),this._scene.fog.color.copy(this._colB),this._scene.background.copy(this._colB))}_buildDysonCrown(){const e=this._cfg(9);if(e===void 0)return;const{x:t,z:n}=this._plot(e,0),i=Math.max(this._protoFootprint.get(9)??e.sizeY*.5,.5),r=this._seatY(t,n,i)+e.sizeY*.9,o=new an,a=e.sizeY*2.3,c=new Qs(2.2,6,a,24,1,!0),l=c.attributes.position,h=new Float32Array(l.count*3),u=new Te(Ph);for(let g=0;g<l.count;g+=1){const _=1-(l.getY(g)+a/2)/a;h[g*3]=u.r*_,h[g*3+1]=u.g*_,h[g*3+2]=u.b*_}c.setAttribute("color",new Tt(h,3));const d=new Ne(c,new Pt({vertexColors:!0,transparent:!0,opacity:.5,blending:zt,depthWrite:!1,side:_n,fog:!1}));d.position.y=a/2,d.layers.enable(1),o.add(d);const f=new Ne(new mo(3.2,16,12),new Pt({color:Ph,transparent:!0,opacity:.7,blending:zt,depthWrite:!1,fog:!1}));f.layers.enable(1),o.add(f),o.position.set(t,r,n),o.frustumCulled=!1,this._scene.add(o),this._dysonCrown=o}_animateDysonCrown(e){if(this._dysonCrown===void 0)return;const t=this._dysonCrown.children[0],n=this._dysonCrown.children[1];t.material.opacity=.5+Math.sin(e*.42)*.06;const i=1+Math.sin(e*.31)*.03;t.scale.x=i,t.scale.z=i,n.scale.setScalar(1+Math.sin(e*.6)*.08)}_disposeDysonCrown(){if(this._dysonCrown!==void 0){this._scene.remove(this._dysonCrown);for(const e of this._dysonCrown.children){const t=e;t.geometry.dispose(),t.material.dispose()}this._dysonCrown=void 0}}_disposeUnit(e){var t,n,i,r,o,a;if(this._scene.remove(e.group),(n=(t=e.glow)==null?void 0:t.material)==null||n.dispose(),(r=(i=e.rotor)==null?void 0:i.material)==null||r.dispose(),(a=(o=e.beacon)==null?void 0:o.material)==null||a.dispose(),e.motes!==void 0)for(const c of e.motes.children)c.material.dispose();if(e.pad!==void 0){this._scene.remove(e.pad);for(const c of e.pad.children)c.material.dispose()}}_clearAllUnits(){for(const e of this._byTier.values())for(const t of e)this._disposeUnit(t);this._byTier.clear()}_onAscension(){this._clearAllUnits();for(const e of this._districtCurb.values())e.opacity=.12;this._hideAllProps(),this._disposeDysonCrown(),this._lastEpochSeen=1,this._epochBlend=1,this._syncTier(1,1),this._celebrate(1.5,560)}_raw(e,t){const n=this._canvas.getBoundingClientRect();return{pointerId:e.pointerId,wasTouch:e.pointerType==="touch",x:e.clientX-n.left,y:e.clientY-n.top,timeStamp:e.timeStamp,type:t}}_updateHitArea(){const e=this._canvas.clientWidth,t=this._canvas.clientHeight;e===this._hitW&&t===this._hitH||(this._hitW=e,this._hitH=t,this._input.clearHitAreas(),this._input.registerHitArea({id:"forge",kind:"forge",bounds:{x:0,y:0,width:e,height:t}}))}_onForgeTap(){this._forgeCore!==void 0&&(this._forgeCore.color.setHex(pf),this._forgeCore.intensity=5.5),this._emitSparks(6,1.3,this._scratch.set(0,this._forgeMidY,1.8))}_forgePulse(){this._forgeCore!==void 0&&(this._forgeCore.intensity=Math.max(this._forgeCore.intensity,4.4))}_celebrate(e,t){this._flash=Math.max(this._flash,e),this._shakeUntil=this._elapsed+t,this._emitSparks(36,2.2,this._scratch.set(0,this._forgeMidY,1.8))}_emitSparks(e,t,n){const i=this._sparks.geometry.attributes.position;let r=(this._elapsed|0)+e;const o=()=>(r=r*1103515245+12345&2147483647,r/2147483647);for(let a=0;a<e;a+=1){const c=this._nextSpark;this._nextSpark=(this._nextSpark+1)%i.count,i.setXYZ(c,n.x,n.y,n.z);const l=o()*Math.PI*2;this._sparkVel[c*3]=Math.cos(l)*t*(.4+o()),this._sparkVel[c*3+1]=(.7+o()*1.5)*t,this._sparkVel[c*3+2]=Math.sin(l)*t*(.4+o())}i.needsUpdate=!0}_animateForge(e){const t=this._elapsed/1e3;if(this._forgeCore!==void 0){const n=3.3+Math.sin(t*1.6)*.9;this._forgeCore.intensity+=(n-this._forgeCore.intensity)*Math.min(1,e*3),this._forgeCore.color.lerp(new Te(Xs),Math.min(1,e*2))}this._forge!==void 0&&(this._forge.rotation.y=Math.sin(t*.15)*.05)}_lerpAngle(e,t,n){let i=t-e;for(;i>Math.PI;)i-=Math.PI*2;for(;i<-Math.PI;)i+=Math.PI*2;return e+i*n}_flyTo(e,t,n,i){const r=t-e.group.position.x,o=n-e.group.position.z,a=Math.hypot(r,o);e.heading=this._lerpAngle(e.heading,Math.atan2(r,o),Math.min(1,i*6)),e.group.rotation.y=e.heading;const c=Qy*i;return a<=c||a<.001?(e.group.position.x=t,e.group.position.z=n,!0):(e.group.position.x+=r/a*c,e.group.position.z+=o/a*c,!1)}_animateUnits(e){const t=this._elapsed/1e3;for(const n of io){const i=this._byTier.get(n.tier);if(i!==void 0)for(const r of i){if(r.settle<1){r.settle=Math.min(1,r.settle+e*ob);const o=1-Math.pow(1-r.settle,3);if(r.group.scale.setScalar(Math.max(.001,o)),r.kind==="structure"){r.pad!==void 0&&r.pad.scale.setScalar(Math.min(1,r.settle*1.7)),r.group.position.y=r.baseY-(1-o)*r.riseDepth,r.glow!==void 0&&(r.glow.material.opacity=.6+(1-r.settle)*.45);continue}}r.kind==="drone"?this._animateDrone(r,t,e):this._animateStructure(r,t,e)}}}_animateDrone(e,t,n){const i=Math.sin(t*2+e.phase)*.09;if(e.settle<.9){e.group.position.set(e.homeX,this._groundY(e.homeX,e.homeZ)+no,e.homeZ);return}if(e.state==="seek"){const a=this._oreNodes[e.oreIdx],c=a===void 0?!0:this._flyTo(e,a.pos.x,a.pos.z,n);e.group.position.y=this._groundY(e.group.position.x,e.group.position.z)+no+i,c&&(e.state="mine",e.timer=eb);return}if(e.state==="mine"){const a=this._oreNodes[e.oreIdx];e.timer-=n*1e3;const c=Math.max(0,Math.sin(t*9+e.phase))*.35,l=a===void 0?0:this._groundY(a.pos.x,a.pos.z);e.group.position.y=l+no+i*.3-c,a!==void 0&&(a.heat=1,Math.sin(t*9+e.phase)>.9&&this._nextSpark%4===0&&this._emitSparks(1,.6,this._scratch.set(a.pos.x,a.pos.y+.2,a.pos.z))),e.timer<=0&&(e.carry!==void 0&&(e.carry.visible=!0),e.state="haul");return}const r=this._basePoint(),o=this._flyTo(e,r.x,r.z,n);e.group.position.y=this._groundY(e.group.position.x,e.group.position.z)+no+i,o&&(e.carry!==void 0&&(e.carry.visible=!1),this._forgePulse(),this._emitSparks(2,.7,r),e.oreIdx=this._oreNodes.length>0?(e.oreIdx+1)%this._oreNodes.length:0,e.state="seek")}_animateStructure(e,t,n){var o;e.group.position.y=e.baseY+Math.sin(t*.9+e.phase)*.02;const i=Math.sin(t*2.2+e.phase)*.5+.5,r=(o=e.glow)==null?void 0:o.material;switch(e.workStyle){case"conduit":{const a=(t*.55+e.phase)%1;e.glow!==void 0&&r!==void 0&&(e.glow.position.y=(e.topY-e.baseY)*(.28+a*.34),r.opacity=.3+(1-Math.abs(a-.5)*2)*.25,e.glow.scale.setScalar(e.glowScale)),e.rotor!==void 0&&(e.rotor.rotation.z+=e.spin*n);break}case"throb":{const a=Math.min(1,Math.pow(Math.sin(t*2.4+e.phase)*.5+.5,8)+.6*Math.pow(Math.sin(t*2.4+e.phase-.5)*.5+.5,8));e.glow!==void 0&&r!==void 0&&(r.opacity=.28+a*.4,e.glow.scale.setScalar(e.glowScale*(.85+a*.35))),e.rotor!==void 0&&(e.rotor.rotation.z+=e.spin*1.6*n);break}case"assembly":{const c=(t*.9+e.phase)*8;e.rotor!==void 0&&(e.rotor.rotation.z=Math.floor(c)/8*Math.PI*2),e.glow!==void 0&&r!==void 0&&(r.opacity=.3+(1-c%1)*.35,e.glow.scale.setScalar(e.glowScale));break}case"siphon":{const a=Math.sin(t*1.1+e.phase)*.5+.5;e.glow!==void 0&&r!==void 0&&(e.glow.scale.set(e.glowScale*.45,e.glowScale*(1.4+a*.8),e.glowScale*.45),e.glow.position.y=(e.topY-e.baseY)*(.45+a*.12),r.opacity=.3+a*.25),e.rotor!==void 0&&(e.rotor.rotation.z+=e.spin*.5*n);break}default:e.glow!==void 0&&r!==void 0&&(r.opacity=.22+i*.4,e.glow.scale.setScalar(e.glowScale*(.7+i*.3))),e.rotor!==void 0&&(e.rotor.rotation.z+=e.spin*n)}if(e.beacon!==void 0){const a=Math.pow(Math.sin(t*1.6+e.phase)*.5+.5,3);e.beacon.material.opacity=.15+a*.5}e.motes!==void 0&&(e.motes.rotation.y+=n*e.moteSpin),i>.92?e.ventLatch||(e.ventLatch=!0,this._emitSparks(1,.5,this._scratch.set(e.group.position.x,e.topY,e.group.position.z))):i<.5&&(e.ventLatch=!1),e.emitTimer-=n*1e3,e.emitTimer<=0&&(this._spawnFreight(this._scratch.set(e.group.position.x,e.topY,e.group.position.z),e.freightColor),e.emitTimer=xf+e.phase*911%rb)}_animateOre(e){for(const t of this._oreNodes)t.heat>0&&(t.heat=Math.max(0,t.heat-e*1.6)),t.mat.emissiveIntensity=.4+t.heat*1.8}_spawnFreight(e,t){const n=this._freight.find(r=>!r.active);if(n===void 0)return;n.active=!0,n.t=0,n.from.copy(e),n.to.copy(this._basePoint()),n.ctrl.copy(e).lerp(n.to,.5),n.ctrl.y+=1.4;const i=n.mesh.material;i.color.setHex(t),i.emissive.setHex(t),n.mesh.visible=!0,n.mesh.position.copy(e)}_animateFreight(e){for(const t of this._freight){if(!t.active)continue;if(t.t+=e/sb,t.t>=1){t.active=!1,t.mesh.visible=!1,this._forgePulse(),this._emitSparks(2,.8,this._basePoint());continue}const n=1-t.t,i=n*n,r=2*n*t.t,o=t.t*t.t;t.mesh.position.set(i*t.from.x+r*t.ctrl.x+o*t.to.x,i*t.from.y+r*t.ctrl.y+o*t.to.y,i*t.from.z+r*t.ctrl.z+o*t.to.z),t.mesh.rotation.y+=e*4,t.mesh.rotation.x+=e*2.5,t.mesh.material.opacity=Math.min(1,Math.sin(t.t*Math.PI)*3)}}_animateSparks(e){const t=this._sparks.geometry.attributes.position;for(let n=0;n<t.count;n+=1)t.getY(n)<-100||(this._sparkVel[n*3+1]-=5*e,t.setX(n,t.getX(n)+this._sparkVel[n*3]*e),t.setY(n,t.getY(n)+this._sparkVel[n*3+1]*e),t.setZ(n,t.getZ(n)+this._sparkVel[n*3+2]*e),t.getY(n)<=.12&&t.setY(n,-999));t.needsUpdate=!0}_applyCamera(e){const t=this._elapsed/1e3;let n=0;this._elapsed<this._shakeUntil&&(n=.09*((this._shakeUntil-this._elapsed)/300));const i=Math.sin(t*.12)*.28,r=Math.sin(i)*this._camDist+Math.sin(t*40)*n,o=Math.cos(i)*this._camDist,a=this._camDist*.9+Math.cos(t*37)*n;this._camera.position.x+=(r-this._camera.position.x)*Math.min(1,e*1.6),this._camera.position.y+=(a-this._camera.position.y)*Math.min(1,e*1.6),this._camera.position.z+=(o-this._camera.position.z)*Math.min(1,e*1.6),this._camera.lookAt(0,this._forgeMidY*.7,0),this._flash>0?(this._renderer.toneMappingExposure=1.05+this._flash*1.5,this._flash=Math.max(0,this._flash-e*2.2)):this._renderer.toneMappingExposure+=(1.05-this._renderer.toneMappingExposure)*Math.min(1,e*6)}}const nm=1e-10,To=2,im=2,Ih=1e21,lu=["K","M","B","T","Qa","Qi"],hu="∞",fb=lu.length,bf=10**(3*(fb+1));if(Ih!==bf)throw new Error(`formatConfig invariant violated: SCIENTIFIC_THRESHOLD (${Ih}) must be one magnitude tier above the top of ABBREVIATION_TABLE (expected ${bf}).`);const sm=0,rm=7,Cc=3,Tf=10**Cc,Af=10**1,wf=lu.length,om=Object.freeze(da(Sc,Cc)),pb=Object.freeze(pt(Ih)),am=Object.freeze(da(Sc,-To)),mb=`<${am.toNumber().toFixed(To)}`,gb=Lc(Ce.toNumber()).toFixed(To);function _b(s){const e=s.log10(),t=Math.floor((e+nm)/Cc);return Math.max(sm,Math.min(rm,t))}function Rf(s,e){const t=da(Sc,Cc*e);return s.div(t).toNumber()}function Lc(s){return Math.floor(s*100)/100}function _o(s,e){return s}function Nh(s,e){let t=Math.floor(s.log10()+nm),n=s.div(da(Sc,t)).toNumber();n>=Af&&(t+=1,n/=Af);const r=`${Lc(n).toFixed(im)} e+${String(t)}`;return _o(r)}function cm(s,e,t){let n=_b(s);if(n>=rm)return Nh(s);let i=Rf(s,n);if(i>=Tf)if(n<wf)n+=1,i=i/Tf;else return n===wf?Nh(s):hu;i<1&&n>sm&&(n-=1,i=Rf(s,n));const o=`${Lc(i).toFixed(t)} ${lu[n-1]}`;return _o(o)}function Ri(s,e){return gn(s)?s.lte(Ce)?"0":s.lt(om)?s.floor().toNumber().toString():s.gte(pb)?Nh(s):cm(s,e,im):hu}function so(s,e){return e?`${s} ${e}`:s}function qs(s,e,t){if(!gn(s))return so(hu,t);if(s.lte(Ce))return so(_o(gb),t);if(s.lt(am))return so(_o(mb),t);if(s.lt(om)){const n=Lc(s.toNumber()).toFixed(To);return so(_o(n),t)}return so(cm(s,e,To),t)}const vb=900,xb=.19,Mb=128,Eb=.52,Sb=.76,yb=.6;function bb(s,e){const t=s>=vb;return e*(t?Sb:yb)}function Tb(s){return Math.max(Mb,s*xb)}function Ab(s,e){return{x:s/2,y:bb(s,e)-Tb(e)*Eb}}const wb=5;function lm(s){return s.getTotalBaseRate().mul(pt(wb))}function Rb(s,e){return pt(s.currencies.credits.tapAmount).add(lm(e))}class Cb{constructor(e){O(this,"_unsubTap");this._unsubTap=e.bus.on(ee.INTENT_TAP_FORGE,()=>{const t=lm(e.generators);t.gt(Ce)&&e.credits.addOfflineEarnings(t)})}dispose(){this._unsubTap()}}const Lb="/stellar-forge-demo/assets/tier1-CGr_rWoD.svg",Db="/stellar-forge-demo/assets/tier2-WDw8Df_T.svg",Pb="/stellar-forge-demo/assets/tier3-BgDwCqo5.svg",Ib="/stellar-forge-demo/assets/tier4-D0G28S5V.svg",Nb="/stellar-forge-demo/assets/tier5-Uf4foSHK.svg",Ub="/stellar-forge-demo/assets/tier6-ClC5JRkf.svg",Ob="/stellar-forge-demo/assets/tier7-DZ_6xqdX.svg",Fb="/stellar-forge-demo/assets/tier8-UnOtcdr9.svg",Bb="/stellar-forge-demo/assets/tier9-wc-XhgwM.svg",kb=[Lb,Db,Pb,Ib,Nb,Ub,Ob,Fb,Bb],zb=250,Gb=2200,Hb=650,Vb=["⬡","⬢","◈","◆","▲","●","◐","✦","❂"],Wb=["x1","x10","xmax"],Cf=5,Xb=5,Yb=48,qa={1:{roman:"I",name:"GENESIS"},2:{roman:"II",name:"INDUSTRIAL"},3:{roman:"III",name:"COSMIC"}};function qb(s){const e=Math.floor(s/1e3);if(e<90)return`${e} s`;const t=Math.floor(e/60);return t<90?`${t} min`:`${(t/60).toFixed(1)} h`}function Se(s,e,t){const n=document.createElement(s);return n.className=e,t!==void 0&&(n.textContent=t),n}class $b{constructor(e){O(this,"_bus");O(this,"_credits");O(this,"_generators");O(this,"_config");O(this,"_ascension");O(this,"_root");O(this,"_creditsValue");O(this,"_creditsRate");O(this,"_tapLine");O(this,"_scopeCanvas");O(this,"_scopeCtx");O(this,"_scopeDpr",1);O(this,"_rateSamples",[]);O(this,"_modeButtons",new Map);O(this,"_cards",new Map);O(this,"_toast");O(this,"_tapHint");O(this,"_ascendButton");O(this,"_ascendDm");O(this,"_milestoneBadge");O(this,"_lastMilestoneBurst",-1);O(this,"_eraBadge");O(this,"_highestEpoch",1);O(this,"_seenTiers",new Set);O(this,"_balance");O(this,"_ratePerSec");O(this,"_paintScheduled",!1);O(this,"_lastBuyTier");O(this,"_tapCount",0);O(this,"_lastPointerX",0);O(this,"_lastPointerY",0);O(this,"_lastPointerAt",0);O(this,"_unsubscribes",[]);O(this,"_timers",[]);O(this,"_onWindowPointerDown",e=>{this._lastPointerX=e.clientX,this._lastPointerY=e.clientY,this._lastPointerAt=Date.now()});this._bus=e.bus,this._credits=e.credits,this._generators=e.generators,this._config=e.config,this._ascension=e.ascension,this._balance=e.credits.getBalance(),this._ratePerSec=e.credits.getBalance()}mount(e){this._root=e,window.addEventListener("pointerdown",this._onWindowPointerDown,!0),e.append(this._buildFrame(),this._buildIdentity(),this._buildConsole(),this._buildDock(),this._buildTapHint(),this._buildAscendButton()),this._unsubscribes.push(this._bus.on(ee.CREDITS_UPDATED,t=>{this._balance=t.balance,this._ratePerSec=t.ratePerSec,this._schedulePaint()}),this._bus.on(ee.GENERATOR_PURCHASED,t=>{this._flashCard(t.tier),this._onGeneratorProgress(t.tier),this._paint()}),this._bus.on(ee.GENERATOR_RATE_CHANGED,t=>{this._floatRateDelta(t.tier,t.rateDelta),this._schedulePaint()}),this._bus.on(ee.BUY_MODE_CHANGED,()=>this._paint()),this._bus.on(ee.PURCHASE_REJECTED,t=>this._onRejected(t.reason)),this._bus.on(ee.INTENT_TAP_FORGE,()=>this._onForgeTapped()),this._bus.on(ee.MILESTONE_REACHED,t=>this._showMilestone(t))),this._initEpochState(),this._paint()}_initEpochState(){let e=1;for(const t of this._config.generators)this._generators.getOwned(t.tier)>0&&(this._seenTiers.add(t.tier),e=Math.max(e,t.epoch));this._highestEpoch=e,this._setEra(e)}_onGeneratorProgress(e){const t=this._config.generators.find(n=>n.tier===e);t!==void 0&&(this._seenTiers.has(e)||(this._seenTiers.add(e),this._showUnlock(t.name,t.epoch)),t.epoch>this._highestEpoch&&(this._highestEpoch=t.epoch,this._setEra(t.epoch),this._showEraBanner(t.epoch)))}dispose(){window.removeEventListener("pointerdown",this._onWindowPointerDown,!0);for(const e of this._unsubscribes)e();this._unsubscribes.length=0;for(const e of this._timers)clearTimeout(e);this._timers.length=0,this._root!==void 0&&this._root.replaceChildren(),this._cards.clear(),this._modeButtons.clear(),this._scopeCanvas=void 0,this._scopeCtx=void 0,this._rateSamples.length=0,this._ascendButton=void 0,this._ascendDm=void 0,this._milestoneBadge=void 0,this._lastMilestoneBurst=-1,this._eraBadge=void 0,this._highestEpoch=1,this._seenTiers.clear()}_buildFrame(){const e=Se("div","hud-frame");e.setAttribute("aria-hidden","true");for(const t of["tl","tr","bl","br"])e.append(Se("span",`hud-frame-corner ${t}`));return e}_buildIdentity(){const e=Se("header","hud-identity"),t=Se("div","hud-brand");t.append(Se("span","hud-brand-mark","⬡"),Se("span","hud-brand-name","STELLAR FORGE"));const n=Se("div","hud-era epoch-1");return n.setAttribute("aria-live","polite"),n.append(Se("span","hud-era-age","AGE I"),Se("span","hud-era-name","GENESIS")),this._eraBadge=n,e.append(t,n),e}_buildConsole(){const e=Se("section","hud-console");e.setAttribute("aria-label","Empire production readout"),this._creditsValue=Se("div","hud-credits","0 Cr");const t=Se("div","hud-telemetry");this._creditsRate=Se("div","hud-rate","▸ 0.00 Cr/s");const n=document.createElement("canvas");return n.className="hud-scope",n.setAttribute("aria-hidden","true"),this._scopeDpr=Math.min(window.devicePixelRatio||1,2),n.width=Math.round(104*this._scopeDpr),n.height=Math.round(30*this._scopeDpr),this._scopeCanvas=n,this._scopeCtx=n.getContext("2d")??void 0,t.append(this._creditsRate,n),this._tapLine=Se("div","hud-tap",""),e.append(Se("span","hud-console-conduit"),this._creditsValue,t,this._tapLine),e}_buildDock(){const e=Se("aside","hud-dock");e.setAttribute("aria-label","Generator roster");const t=Se("div","hud-buymode");t.setAttribute("role","group"),t.setAttribute("aria-label","Buy quantity mode");const n=Se("span","hud-buymode-label","BUY");t.append(n);for(const r of Wb){const o=Se("button","hud-buymode-btn",r==="xmax"?"×MAX":`×${r.slice(1)}`);o.type="button",o.addEventListener("click",()=>{this._bus.emit(ee.INTENT_SET_BUY_MODE,{mode:r,source:"pointer"})}),this._modeButtons.set(r,o),t.append(o)}const i=Se("div","hud-rack");for(const r of this._config.generators)i.append(this._buildCard(r.tier,r.name,r.epoch));return e.append(t,i),e}_buildCard(e,t,n){const i=Se("article",`hud-card epoch-${n}`);i.append(Se("span","hud-card-shoulder"));const r=Se("div","hud-card-socket"),o=kb[e-1];if(o!==void 0){const m=document.createElement("img");m.src=o,m.alt="",m.loading="lazy",m.className="hud-card-icon",r.append(m)}else r.textContent=Vb[e-1]??"⬡";const a=Se("div","hud-card-head");a.append(Se("div","hud-card-name",t),Se("div","hud-card-tier",`T${e}`));const c=Se("div","hud-card-stats"),l=Se("div","hud-card-owned","×0"),h=Se("div","hud-card-rate","—");c.append(l,h);const u=Se("div","hud-card-rail"),d=[];for(let m=0;m<Cf;m+=1){const p=Se("span","hud-card-seg");d.push(p),u.append(p)}const f=Se("div","hud-card-milestone",""),g=Se("button","hud-card-buy","BUY");g.type="button",g.addEventListener("click",()=>{this._lastBuyTier=e,this._bus.emit(ee.INTENT_BUY_GENERATOR,{tier:e,source:"pointer"})});const _=Se("div","hud-card-hint","");return i.append(r,a,c,u,f,g,_),this._cards.set(e,{root:i,owned:l,rate:h,milestone:f,segments:d,buy:g,hint:_}),i}_buildTapHint(){const e=Se("div","hud-tap-hint","TAP THE FORGE");return this._tapHint=e,e}_buildAscendButton(){const e=Se("button","hud-ascend");e.type="button";const t=Se("span","hud-ascend-dm","");return e.append(Se("span","hud-ascend-label","ASCEND"),t,Se("span","hud-ascend-hint","Collapse the empire into a singularity — restart faster, forever stronger")),e.addEventListener("click",()=>{this._bus.emit(ee.INTENT_CONFIRM_ASCENSION,{source:"pointer"})}),this._ascendButton=e,this._ascendDm=t,e}_showMilestone(e){var r;if(this._root===void 0)return;const t=e.type==="credits_scale"?e.name??"Milestone":`${this._generatorName(e.tier)} ×${e.threshold}`,n=e.type==="credits_scale"?"RANK ACHIEVED":"MILESTONE",i=e.ordinal===e.seriesLength;if(e.burstId!==this._lastMilestoneBurst||this._milestoneBadge===void 0){this._lastMilestoneBurst=e.burstId,(r=this._milestoneBadge)==null||r.remove();const o=Se("div","hud-milestone");o.append(Se("div","hud-milestone-eyebrow",n),Se("div","hud-milestone-title",t)),this._milestoneBadge=o,this._root.append(o),o.offsetWidth,o.classList.add("is-in"),this._timers.push(setTimeout(()=>{o.remove(),this._milestoneBadge===o&&(this._milestoneBadge=void 0)},2600))}else{const o=this._milestoneBadge.querySelector(".hud-milestone-title"),a=this._milestoneBadge.querySelector(".hud-milestone-eyebrow");o!==null&&(o.textContent=t),a!==null&&(a.textContent=n)}if(this._milestoneBadge.classList.toggle("is-peak",i),e.burstSize>1){let o=this._milestoneBadge.querySelector(".hud-milestone-more");o===null&&(o=Se("div","hud-milestone-more",""),this._milestoneBadge.append(o)),o.textContent=`${e.burstSize} milestones in one surge`}}_setEra(e){if(this._eraBadge===void 0)return;const t=qa[e]??qa[1];this._eraBadge.className=`hud-era epoch-${e}`;const n=this._eraBadge.querySelector(".hud-era-age"),i=this._eraBadge.querySelector(".hud-era-name");n!==null&&(n.textContent=`AGE ${t.roman}`),i!==null&&(i.textContent=t.name)}_showEraBanner(e){var i;if(this._root===void 0)return;const t=qa[e]??qa[1];(i=this._root.querySelector(".hud-era-banner"))==null||i.remove();const n=Se("div",`hud-era-banner epoch-${e}`);n.append(Se("div","hud-era-banner-eyebrow","A NEW ERA BEGINS"),Se("div","hud-era-banner-title",`${t.name} AGE`),Se("div","hud-era-banner-sub",`AGE ${t.roman} — your empire ascends to a new scale`)),this._root.append(n),n.offsetWidth,n.classList.add("is-in"),this._timers.push(setTimeout(()=>n.classList.add("is-out"),3200)),this._timers.push(setTimeout(()=>n.remove(),3900))}_showUnlock(e,t){var i;if(this._root===void 0)return;(i=this._root.querySelector(".hud-unlock"))==null||i.remove();const n=Se("div",`hud-unlock epoch-${t}`);n.append(Se("div","hud-unlock-eyebrow","NEW GENERATOR ONLINE"),Se("div","hud-unlock-title",e)),this._root.append(n),n.offsetWidth,n.classList.add("is-in"),this._timers.push(setTimeout(()=>n.remove(),2800))}_generatorName(e){var t;return e===void 0?"Generator":((t=this._config.generators.find(n=>n.tier===e))==null?void 0:t.name)??`Tier ${e}`}_schedulePaint(){this._paintScheduled||(this._paintScheduled=!0,this._timers.push(setTimeout(()=>{this._paintScheduled=!1,this._paint()},zb)))}_paint(){this._creditsValue.textContent=`${Ri(this._balance)} Cr`,this._creditsRate.textContent=`▸ ${qs(this._ratePerSec,void 0,"Cr/s")}`,this._tapLine.textContent=`⌁ ${qs(this._tapValue(),void 0,"Cr")} per tap`,this._pushScopeSample();const e=this._credits.getBuyMode();for(const[t,n]of this._modeButtons){const i=t===e;n.classList.toggle("is-active",i),n.setAttribute("aria-pressed",String(i))}for(const t of this._config.generators)this._paintCard(t.tier,t.name,e);this._updateAscension()}_pushScopeSample(){const e=this._ratePerSec.toNumber();let t=0;Number.isFinite(e)?e>0&&(t=e):t=1e300;const n=t>0?Math.log10(t):0;this._rateSamples.push(n),this._rateSamples.length>Yb&&this._rateSamples.shift(),this._drawScope()}_drawScope(){const e=this._scopeCtx,t=this._scopeCanvas;if(e===void 0||t===void 0)return;const n=t.width,i=t.height;e.clearRect(0,0,n,i);const r=this._rateSamples;if(r.length<2)return;let o=1/0,a=-1/0;for(const h of r)h<o&&(o=h),h>a&&(a=h);const c=a-o||1,l=i*.16;e.beginPath();for(let h=0;h<r.length;h+=1){const u=h/(r.length-1)*n,d=i-l-((r[h]??o)-o)/c*(i-l*2);h===0?e.moveTo(u,d):e.lineTo(u,d)}e.strokeStyle="rgba(0, 201, 177, 0.92)",e.lineWidth=1.5*this._scopeDpr,e.lineJoin="round",e.shadowColor="rgba(0, 201, 177, 0.7)",e.shadowBlur=4*this._scopeDpr,e.stroke()}_updateAscension(){if(this._ascendButton===void 0||this._ascendDm===void 0)return;const e=this._ascension.canAscend();this._ascendButton.classList.toggle("is-visible",e),this._ascendButton.disabled=!e,e&&(this._ascendDm.textContent=`+${Ri(this._ascension.getEstimatedDM())} Dark Matter`)}_paintCard(e,t,n){const i=this._cards.get(e);if(i===void 0)return;const r=this._generators.isUnlocked(e);if(i.root.classList.toggle("is-locked",!r),!r){i.owned.textContent="—",i.rate.textContent="LOCKED",i.milestone.textContent="",i.buy.disabled=!0,i.buy.textContent="LOCKED",i.buy.className="hud-card-buy is-lockedbtn";const m=this._config.generators.find(p=>p.tier===e-1);i.hint.textContent=m!==void 0?`Requires ${m.name}`:"";for(const p of i.segments)p.className="hud-card-seg";return}const o=this._generators.getOwned(e),a=this._generators.getTierRate(e);i.owned.textContent=`×${o}`,i.rate.textContent=qs(a,void 0,"Cr/s"),i.hint.textContent="";const c=this._config.upgrades.milestones.map(m=>m.ownedCount).sort((m,p)=>m-p),l=c.find(m=>m>o),h=[...c].reverse().find(m=>m<=o)??0;if(l!==void 0){i.milestone.textContent=`→${l} ×2`;const m=(o-h)/(l-h),p=Math.floor(m*Cf);i.segments.forEach((y,b)=>{y.className=b<p?"hud-card-seg is-filled":"hud-card-seg"})}else{i.milestone.textContent="MAX ×2";for(const m of i.segments)m.className="hud-card-seg is-filled"}let u;if(n==="x1"?u=1:n==="x10"?u=10:u=this._generators.getMaxAffordable(e,this._balance),u===0){i.buy.disabled=!1,i.buy.textContent="MAX ×0",i.buy.className="hud-card-buy is-unaffordable";return}const d=this._generators.getCost(e,u),f=this._balance.gte(d),g=n==="xmax"?`MAX ×${u} · ${Ri(d)}`:`${n==="x10"?"×10 · ":""}${Ri(d)}`;i.buy.disabled=!1,i.buy.textContent=g,i.buy.className=f?"hud-card-buy is-affordable":"hud-card-buy is-unaffordable";const _=i.root.querySelector(".hud-card-name");_!==null&&_.textContent!==t&&(_.textContent=t)}_onRejected(e){if(e==="insufficient_balance"&&this._lastBuyTier!==void 0){const t=this._cards.get(this._lastBuyTier);t!==void 0&&(t.buy.classList.remove("is-shaking"),t.buy.offsetWidth,t.buy.classList.add("is-shaking"));return}if(e==="qty_zero"){this._showToast("Nothing affordable at ×MAX yet — keep forging");return}this._showToast("Tier locked — own the previous generator first")}_flashCard(e){const t=this._cards.get(e);t!==void 0&&(t.root.classList.add("is-flashing"),this._timers.push(setTimeout(()=>t.root.classList.remove("is-flashing"),Hb)))}_showToast(e){var n;if(this._root===void 0)return;(n=this._toast)==null||n.remove();const t=Se("div","hud-toast",e);this._toast=t,this._root.append(t),this._timers.push(setTimeout(()=>t.remove(),Gb))}showWelcomeBack(e){var r;if(this._root===void 0)return;(r=this._root.querySelector(".hud-welcome"))==null||r.remove();const t=Se("div","hud-welcome");t.setAttribute("role","dialog"),t.setAttribute("aria-label","Offline earnings report");const n=Math.round(e.earningRate*100);t.append(Se("div","hud-welcome-eyebrow","SYSTEMS REPORT"),Se("h2","hud-welcome-title","WHILE YOU WERE AWAY"),Se("div","hud-welcome-amount num",`+${qs(e.credited,void 0,"Cr")}`),Se("div","hud-welcome-sub",`${qb(e.elapsedMs)} away · ${n}% offline rate · your empire kept forging`));const i=Se("button","hud-welcome-cta","CONTINUE");i.type="button",i.addEventListener("click",()=>t.remove()),t.append(i),this._root.append(t),i.focus(),this._timers.push(setTimeout(()=>t.remove(),12e3))}_onForgeTapped(){if(this._tapCount+=1,this._tapCount>=Xb&&this._tapHint!==void 0&&this._tapHint.classList.add("is-done"),this._root===void 0||this._prefersReducedMotion())return;const t=Date.now()-this._lastPointerAt<600?{x:this._lastPointerX,y:this._lastPointerY}:Ab(window.innerWidth,window.innerHeight),n=Se("span","hud-float",`+${qs(this._tapValue(),void 0,"Cr")}`),i=(Math.random()-.5)*30;n.style.left=`${t.x+i}px`,n.style.top=`${t.y-30}px`,this._root.append(n),this._timers.push(setTimeout(()=>n.remove(),950))}_tapValue(){return Rb(this._config,this._generators)}_floatRateDelta(e,t){if(this._prefersReducedMotion())return;const n=this._cards.get(e);if(n===void 0||!t.gt(pt(0)))return;const i=Se("span","hud-rowfloat",`+${qs(t,void 0,"Cr/s")}`);n.root.append(i),this._timers.push(setTimeout(()=>i.remove(),1050))}_prefersReducedMotion(){return typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches}}const $a="◆",Kb=2400,jb=700,Lf={forge:{title:"FORGE",tag:"Raw production power",glyph:"◆"},continuum:{title:"CONTINUUM",tag:"Bend time & offline",glyph:"∞"},cortex:{title:"CORTEX",tag:"Automate the empire",glyph:"⚙"}},Df={forge_t1:"Core Amplifier",forge_t2:"Drone Overclock",forge_capstone:"Singularity Engine",continuum_t1:"Temporal Reservoir",continuum_t2:"Chrono Capacitor",continuum_capstone:"Eternal Continuum",cortex_t1:"Neural Relay",cortex_t2:"Cognition Lattice",cortex_capstone:"Autonomous Cortex"},Pf=["","I","II","III","IV","V"];function Zb(s){const e=s.toNumber();return Number.isFinite(e)&&e<1e6?e.toFixed(2):Ri(s)}function ke(s,e,t){const n=document.createElement(s);return n.className=e,t!==void 0&&(n.textContent=t),n}class Jb{constructor(e){O(this,"_bus");O(this,"_config");O(this,"_section");O(this,"_tree");O(this,"_dm");O(this,"_onPurchase");O(this,"_onRespec");O(this,"_root");O(this,"_launcher");O(this,"_launcherBalance");O(this,"_modal");O(this,"_balanceEl");O(this,"_investedEl");O(this,"_multiplierEl");O(this,"_respecBtn");O(this,"_toast");O(this,"_cells",new Map);O(this,"_open",!1);O(this,"_revealed",!1);O(this,"_unsubscribes",[]);O(this,"_timers",[]);O(this,"_onKeydown",e=>{if(!(!this._open||this._modal===void 0)){if(e.key==="Escape"){this.close();return}e.key==="Tab"&&this._trapTab(e)}});this._bus=e.bus,this._config=e.config,this._section=e.config.dmTree??{nodes:[],respec:{enabled:!1,cost:0,refundNodes:!1},capstonePermanenceActive:!1},this._tree=e.tree,this._dm=e.darkMatter,this._onPurchase=e.onPurchase,this._onRespec=e.onRespec}_trapTab(e){if(this._modal===void 0)return;const t=[...this._modal.querySelectorAll('button:not([disabled]), [tabindex]:not([tabindex="-1"])')];if(t.length===0)return;const n=t[0],i=t[t.length-1],r=document.activeElement,o=r instanceof Node&&this._modal.contains(r);e.shiftKey?(r===n||!o)&&(e.preventDefault(),i.focus()):(r===i||!o)&&(e.preventDefault(),n.focus())}mount(e){this._root=e,e.append(this._buildLauncher()),this._unsubscribes.push(this._bus.on(ee.DARK_MATTER_UPDATED,()=>{this._syncReveal(),this._paintLauncher(),this._open&&this._repaint()}),this._bus.on(ee.DM_UPGRADE_PURCHASED,()=>{this._open&&this._repaint()}),this._bus.on(ee.DM_TREE_CAPSTONE_SELECTED,()=>{this._open&&this._repaint()})),this._syncReveal(),this._paintLauncher()}dispose(){var e,t;for(const n of this._unsubscribes)n();this._unsubscribes.length=0;for(const n of this._timers)clearTimeout(n);this._timers.length=0,document.removeEventListener("keydown",this._onKeydown),(e=this._modal)==null||e.remove(),this._launcher.remove(),(t=this._toast)==null||t.remove(),this._cells.clear(),this._modal=void 0,this._open=!1}_buildLauncher(){const e=ke("button","dm-launcher");return e.type="button",e.setAttribute("aria-haspopup","dialog"),e.append(ke("span","dm-launcher-glyph",$a),ke("span","dm-launcher-label","DARK MATTER")),this._launcherBalance=ke("span","dm-launcher-balance",""),e.append(this._launcherBalance),e.addEventListener("click",()=>this.openPanel()),this._launcher=e,e}_syncReveal(){if(this._revealed)return;const e=pt(0);(this._dm.getBalance().gt(e)||this._dm.getTotalSpent().gt(e))&&(this._revealed=!0,this._launcher.classList.add("is-visible"))}_paintLauncher(){this._launcherBalance.textContent=Ri(this._dm.getBalance())}openPanel(){if(this._root===void 0||this._open)return;this._modal===void 0&&(this._modal=this._buildModal()),this._root.append(this._modal),this._open=!0,this._modal.offsetWidth,this._modal.classList.add("is-open"),document.addEventListener("keydown",this._onKeydown),this._repaint();const e=this._modal.querySelector(".dm-close");e==null||e.focus()}close(){!this._open||this._modal===void 0||(this._open=!1,this._modal.classList.remove("is-open"),document.removeEventListener("keydown",this._onKeydown),this._modal.remove(),this._launcher.focus())}_buildModal(){const e=ke("div","dm-scrim");e.addEventListener("click",n=>{n.target===e&&this.close()});const t=ke("section","dm-modal");return t.setAttribute("role","dialog"),t.setAttribute("aria-modal","true"),t.setAttribute("aria-label","Dark Matter upgrade tree"),t.append(this._buildHeader(),this._buildBranches(),this._buildFooter()),e.append(t),e}_buildHeader(){const e=ke("header","dm-header"),t=ke("div","dm-titles");t.append(ke("div","dm-eyebrow","META-PROGRESSION"),ke("h2","dm-title","DARK MATTER"),ke("p","dm-subtitle","Permanent choices, mapped across the void. Spend to grow forever stronger."));const n=ke("div","dm-stats");this._balanceEl=ke("span","dm-stat-value",""),this._investedEl=ke("span","dm-stat-value",""),this._multiplierEl=ke("span","dm-stat-value",""),n.append(this._buildStat(`${$a} Available`,this._balanceEl),this._buildStat("Invested",this._investedEl),this._buildStat("Tree production",this._multiplierEl));const i=ke("button","dm-close","✕");return i.type="button",i.setAttribute("aria-label","Close Dark Matter tree"),i.addEventListener("click",()=>this.close()),e.append(t,n,i),e}_buildStat(e,t){const n=ke("div","dm-stat");return n.append(ke("span","dm-stat-label",e),t),n}_buildBranches(){const e=ke("div","dm-branches"),t=[],n=new Map;for(const i of this._section.nodes)n.has(i.branch)||(n.set(i.branch,[]),t.push(i.branch)),n.get(i.branch).push(i);for(const i of t){const r=[...n.get(i)].sort((o,a)=>o.tier-a.tier);e.append(this._buildLane(i,r))}return e}_buildLane(e,t){const n=Lf[e]??{title:e.toUpperCase(),tag:"Upgrade path",glyph:"✦"},i=ke("div",`dm-lane dm-branch-${e}`),r=ke("div","dm-lane-head");r.append(ke("span","dm-lane-glyph",n.glyph),(()=>{const a=ke("div","dm-lane-titles");return a.append(ke("div","dm-lane-title",n.title),ke("div","dm-lane-tag",n.tag)),a})());const o=ke("div","dm-chain");return t.forEach((a,c)=>{c>0&&o.append(ke("div","dm-connector")),o.append(this._buildNode(a))}),i.append(r,o),i}_buildNode(e){const t=ke("article",`dm-node${e.isCapstone?" is-capstone":""}`),n=ke("div","dm-node-badge",e.isCapstone?"✦":Pf[e.tier]??String(e.tier)),i=ke("div","dm-node-body"),r=ke("div","dm-node-title",Df[e.id]??`${e.branch} ${Pf[e.tier]??e.tier}`),o=ke("div","dm-node-effect",this._effectLabel(e)),a=ke("div","dm-node-levelrow"),c=ke("span","dm-node-level",""),l=ke("span","dm-node-pips"),h=[];for(let f=0;f<e.maxLevel;f+=1){const g=ke("span","dm-pip");h.push(g),l.append(g)}a.append(c,l),i.append(r,o,a),e.isCapstone&&i.append(ke("div","dm-node-capnote","Capstone — one branch only"));const u=ke("button","dm-node-action");u.type="button",u.addEventListener("click",()=>this._purchase(e.id));const d=ke("div","dm-node-status","");return t.append(n,i,u,d),this._cells.set(e.id,{node:e,root:t,level:c,pips:h,action:u,status:d}),t}_buildFooter(){const e=ke("footer","dm-footer");if(this._section.respec.enabled){const n=this._section.respec.cost,i=n>0?`${$a} ${n}`:"free",r=ke("button","dm-respec",`RESET CAPSTONE CHOICE · ${i}`);r.type="button",r.addEventListener("click",()=>this._respec()),this._respecBtn=r,e.append(r)}return e.append(ke("div","dm-footer-note","Effects apply permanently across every future Ascension — your production rate updates instantly.")),e}_repaint(){if(this._modal===void 0)return;this._balanceEl!==void 0&&(this._balanceEl.textContent=`${Ri(this._dm.getBalance())}`),this._investedEl!==void 0&&(this._investedEl.textContent=`${Ri(this._dm.getTotalSpent())}`),this._multiplierEl!==void 0&&(this._multiplierEl.textContent=`×${Zb(this._tree.getExtraGlobalMultiplier())}`);const e=this._tree.getCommittedCapstone();for(const t of this._cells.values())this._paintNode(t,e);this._respecBtn!==void 0&&(this._respecBtn.disabled=e===null,this._respecBtn.classList.toggle("is-armed",e!==null))}_paintNode(e,t){var m;const{node:n,root:i,level:r,pips:o,action:a,status:c}=e,l=this._tree.getNodeLevel(n.id),h=n.maxLevel,u=l>=h,d=n.isCapstone&&t!==null&&t!==n.branch,f=n.prereqs.some(p=>this._tree.getNodeLevel(p)<1),g=this._tree.canPurchase(n.id);if(r.textContent=h>1?`Lv ${l}/${h}`:l>=1?"Owned":"Locked in on purchase",o.forEach((p,y)=>{p.className=y<l?"dm-pip is-filled":"dm-pip"}),i.classList.toggle("is-maxed",u),i.classList.toggle("is-locked",(f||d)&&!u),u){n.isCapstone?(a.textContent="✦ COMMITTED",a.className="dm-node-action is-committed",c.textContent="This branch’s capstone is active"):(a.textContent="✓ MAXED",a.className="dm-node-action is-maxed",c.textContent="Fully upgraded"),a.disabled=!0;return}if(d){const p=((m=Lf[t??""])==null?void 0:m.title)??(t??"").toUpperCase();a.textContent="🔒 LOCKED",a.className="dm-node-action is-rivallocked",a.disabled=!0,c.textContent=`${p} capstone chosen`;return}if(f){const p=Df[n.prereqs[0]??""]??"the previous node";a.textContent="🔒 LOCKED",a.className="dm-node-action is-prereqlocked",a.disabled=!0,c.textContent=`Unlock ${p} first`;return}const _=this._tree.getNodeCost(n.id);a.textContent=`${$a} ${Ri(_)}`,a.className=g?"dm-node-action is-affordable":"dm-node-action is-unaffordable",a.disabled=!1,c.textContent=n.isCapstone?"Choosing this locks the other capstones":""}_purchase(e){const t=this._onPurchase(e);if(t.ok){this._pulse(e),this._repaint();return}this._showToast(Qb[t.reason]),t.reason==="insufficient_dm"&&this._shake(e)}_respec(){const e=this._onRespec();this._showToast(e.ok?"Capstone choice reset — pick a new path":eT[e.reason]),e.ok&&this._repaint()}_pulse(e){const t=this._cells.get(e);t!==void 0&&(t.root.classList.remove("is-pulsing"),t.root.offsetWidth,t.root.classList.add("is-pulsing"),this._defer(()=>t.root.classList.remove("is-pulsing"),jb))}_shake(e){const t=this._cells.get(e);t!==void 0&&(t.action.classList.remove("is-denied"),t.action.offsetWidth,t.action.classList.add("is-denied"),this._defer(()=>t.action.classList.remove("is-denied"),400))}_showToast(e){var n,i;if(this._modal===void 0)return;(n=this._toast)==null||n.remove();const t=ke("div","dm-toast",e);this._toast=t,(i=this._modal.querySelector(".dm-modal"))==null||i.append(t),this._defer(()=>t.remove(),Kb)}_defer(e,t){const n=setTimeout(()=>{const i=this._timers.indexOf(n);i!==-1&&this._timers.splice(i,1),e()},t);this._timers.push(n)}_effectLabel(e){const t=e.effectParams,n=i=>`${Math.round((i??0)*100)}%`;switch(e.effectType){case"globalMultiplier":return`+${n(t.perLevelBonus)} to ALL production, per level`;case"tierBoost":{const i=this._config.generators.find(r=>r.tier===t.targetTier);return`+${n(t.perLevelBonus)} ${(i==null?void 0:i.name)??`Tier ${t.targetTier}`} output, per level`}case"offlineExtension":return`+${t.capHours??0}h offline cap · +${n(t.rateBonus)} offline rate, per level`;case"automationUnlock":return t.efficiencyBonus!==void 0?`Full automation · +${n(t.efficiencyBonus)} efficiency`:"Automates a production stage — it runs itself";default:return"Permanent upgrade"}}}const Qb={insufficient_dm:"Not enough Dark Matter — Ascend to mint more",locked_prereq:"Unlock the previous node in this branch first",rival_capstone:"Another branch’s capstone is already committed",maxed:"Already fully upgraded",unknown_node:"That upgrade is unavailable"},eT={respec_disabled:"Respec is not available",no_capstone:"No capstone committed yet — nothing to reset",insufficient_dm:"Not enough Dark Matter to respec"};class tT{constructor(e){O(this,"_clock");O(this,"_save");O(this,"_now");O(this,"_doc");O(this,"_hiddenAt",null);O(this,"_started",!1);O(this,"_onVisibilityChange",()=>{if(this._doc.visibilityState==="hidden"){this._hiddenAt=this._now(),this._clock.pause(),this._save.resetLastSeen(this._hiddenAt);return}if(this._clock.resume(),this._hiddenAt!==null){const e=this._now()-this._hiddenAt;this._hiddenAt=null,this._clock.reportGap(e)}});this._clock=e.clock,this._save=e.save,this._now=e.now,this._doc=e.doc}start(){this._started||(this._started=!0,this._doc.addEventListener("visibilitychange",this._onVisibilityChange))}dispose(){this._doc.removeEventListener("visibilitychange",this._onVisibilityChange),this._started=!1,this._hiddenAt=null}}const nT=typeof crypto<"u"&&"randomUUID"in crypto?crypto.randomUUID():`${Date.now()}`;function iT(){const s=()=>Date.now(),e=jg({configJson:xu,storage:window.localStorage,now:s,tabId:nT,autosaveEnv:Gg(window,document)}),{bus:t,clock:n,credits:i,generators:r,ascension:o,dmTree:a,darkMatter:c,save:l}=e,h=new tT({clock:n,save:l,now:s,doc:document});h.start(),l.startAutosave();const u=Of(xu),d=new e_(t),f=document.getElementById("game-root");if(f===null)throw new Error("main: #game-root container missing from index.html");const g=new db({bus:t,clock:n,input:d,world:{getOwned:L=>r.getOwned(L),generators:u.generators}});g.mount(f);const _=document.getElementById("hud-overlay");if(_===null)throw new Error("main: #hud-overlay container missing from index.html");const m=new $b({bus:t,credits:i,generators:r,config:u,ascension:o});m.mount(_);const p=new Jb({bus:t,config:u,tree:a,darkMatter:c,onPurchase:L=>a.purchase(L),onRespec:()=>a.respecCapstone()});p.mount(_);const y=L=>{L.reason==="brief"||L.diagnostic!==void 0||m.showWelcomeBack({credited:L.baseLump,elapsedMs:L.elapsedSeconds*1e3,earningRate:u.offline.earningRate})},b=t.on(ee.OFFLINE_EARNINGS_APPLIED,y);e.offlineReport!==void 0&&y(e.offlineReport);const v=new Cb({bus:t,credits:i,generators:r}),R=t.on(ee.INTENT_CONFIRM_ASCENSION,()=>{o.canAscend()&&o.executeAscension()});let w=0;const C=t.on(ee.CREDITS_UPDATED,()=>{const L=s();L-w>=1e3&&(w=L,l.resetLastSeen(L))});return{dispose(){h.dispose(),l.stopAutosave(),C(),R(),b(),v.dispose(),p.dispose(),m.dispose(),d.clearHitAreas(),g.dispose(),e.dispose()}}}iT();
