var mm=Object.defineProperty;var Mu=s=>{throw TypeError(s)};var gm=(s,e,t)=>e in s?mm(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var I=(s,e,t)=>gm(s,typeof e!="symbol"?e+"":e,t),Ic=(s,e,t)=>e.has(s)||Mu("Cannot "+t);var x=(s,e,t)=>(Ic(s,e,"read from private field"),t?t.call(s):e.get(s)),j=(s,e,t)=>e.has(s)?Mu("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(s):e.set(s,t),X=(s,e,t,n)=>(Ic(s,e,"write to private field"),n?n.call(s,t):e.set(s,t),t),re=(s,e,t)=>(Ic(s,e,"access private method"),t);var ba=(s,e,t,n)=>({set _(i){X(s,e,i,t)},get _(){return x(s,e,n)}});(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const Eu=`{
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
`,lo=1;class kh extends Error{constructor(e){super(e),this.name="ConfigParseError",Object.setPrototypeOf(this,kh.prototype)}}class rt extends Error{constructor(e){super(e),this.name="ConfigValidationError",Object.setPrototypeOf(this,rt.prototype)}}class Bh extends Error{constructor(e){super(e),this.name="SchemaVersionError",Object.setPrototypeOf(this,Bh.prototype)}}function If(s,e=new WeakSet){if(s===null||typeof s!="object")return s;const t=s;if(e.has(t))return s;e.add(t);for(const n of Object.keys(t))If(t[n],e);return Object.freeze(s)}const _m={meta:{schemaVersion:lo,lastTuned:"2026-06-25",author:"economy-designer"},generators:[{tier:1,slug:"mining-drone",name:"Mining Drone",epoch:1,baseCost:10,costMultiplier:1.1,baseOutput:.1,enabled:!0},{tier:2,slug:"ore-refinery",name:"Ore Refinery",epoch:1,baseCost:100,costMultiplier:1.1,baseOutput:.5,enabled:!0},{tier:3,slug:"component-factory",name:"Component Factory",epoch:1,baseCost:1e3,costMultiplier:1.11,baseOutput:4,enabled:!0},{tier:4,slug:"fusion-reactor",name:"Fusion Reactor",epoch:2,baseCost:1e4,costMultiplier:1.12,baseOutput:20,enabled:!0},{tier:5,slug:"orbital-shipyard",name:"Orbital Shipyard",epoch:2,baseCost:1e5,costMultiplier:1.13,baseOutput:100,enabled:!0},{tier:6,slug:"trade-fleet",name:"Trade Fleet",epoch:3,baseCost:1e6,costMultiplier:1.14,baseOutput:500,enabled:!1},{tier:7,slug:"planetary-colony",name:"Planetary Colony",epoch:3,baseCost:1e7,costMultiplier:1.15,baseOutput:2500,enabled:!1},{tier:8,slug:"star-lifter",name:"Star Lifter",epoch:3,baseCost:1e8,costMultiplier:1.16,baseOutput:12500,enabled:!1},{tier:9,slug:"dyson-swarm",name:"Dyson Swarm",epoch:3,baseCost:1e9,costMultiplier:1.17,baseOutput:62500,enabled:!1}],upgrades:{milestones:[{ownedCount:10,productionMultiplier:2},{ownedCount:25,productionMultiplier:2},{ownedCount:50,productionMultiplier:2},{ownedCount:100,productionMultiplier:2},{ownedCount:200,productionMultiplier:2}],managers:[{unlockCost:25,prerequisiteOwnedCount:25},{unlockCost:250,prerequisiteOwnedCount:25},{unlockCost:2500,prerequisiteOwnedCount:25},{unlockCost:25e3,prerequisiteOwnedCount:25},{unlockCost:25e4,prerequisiteOwnedCount:25}],automationReserveFraction:1,linearBoosts:[]},milestones:{creditsScale:[{threshold:"1e7",name:"Asteroid Baron"},{threshold:"1e8",name:"Orbital Magnate"},{threshold:"1e9",name:"Planetary Mogul"},{threshold:"1e10",name:"System Tycoon"},{threshold:"1e11",name:"Sector Sovereign"},{threshold:"1e12",name:"Stellar Overlord"},{threshold:"1e13",name:"Cluster Potentate"},{threshold:"1e15",name:"Nebular Dominus"},{threshold:"1e18",name:"Galactic Emperor"},{threshold:"1e21",name:"Intergalactic Lord"},{threshold:"1e24",name:"Cosmic Forgemaster"}]},ascension:{constant:500,creditsDivisor:1e10,exponent:.5,dmMultiplierPerPoint:.02,upgrades:[]},offline:{earningRate:.5,baseCapHours:4,maxCapHours:24,boostMultiplier:2},currencies:{credits:{startingBalance:0,tapAmount:1,tickRateMs:100}}};function Ja(s){return typeof s=="object"&&s!==null&&!Array.isArray(s)}function yl(s,e){const t={};for(const n of Object.keys(s)){const i=s[n];if(!(n in e)){t[n]=Ja(i)?yl(i,{}):structuredClone(i);continue}const r=e[n];Ja(i)&&Ja(r)?t[n]=yl(i,r):t[n]=r}for(const n of Object.keys(e))n in t||(t[n]=e[n]);return t}function bm(s,e){const t=yl(_m,s);return Ja(t.meta)&&(t.meta.schemaVersion=lo),t}function vm(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Uc,Su;function xm(){return Su||(Su=1,Uc=function(s,e,t){if(s==null||e==null)return s;var n=String(s),i=typeof e=="number"?e:parseInt(e,10);if(isNaN(i)||!isFinite(i))return n;var r=n.length;if(r>=i)return n;var o=t==null?"":String(t);o===""&&(o=" ");for(var a=i-r;o.length<a;)o+=o;var c=o.length>a?o.substr(0,a):o;return n+c}),Uc}var Mm=xm();const Oc=vm(Mm);var Jn=9e15,va=(function(){for(var s=[],e=-323;e<=308;e++)s.push(+("1e"+e));return function(t){return s[t+323]}})(),ne=function(s){return s instanceof ns?s:new ns(s)},fn=function(s,e){return new ns().fromMantissaExponent(s,e)},_s=function(s,e){return new ns().fromMantissaExponent_noNormalize(s,e)};function Em(s,e,t,n){var i=e.mul(t.pow(n));return ns.floor(s.div(i).mul(t.sub(1)).add(1).log10()/t.log10())}function Sm(s,e,t,n){return e.mul(t.pow(n)).mul(ns.sub(1,t.pow(s))).div(ns.sub(1,t))}var ns=(function(){function s(e){this.mantissa=NaN,this.exponent=NaN,e===void 0?(this.m=0,this.e=0):e instanceof s?this.fromDecimal(e):typeof e=="number"?this.fromNumber(e):this.fromString(e)}return Object.defineProperty(s.prototype,"m",{get:function(){return this.mantissa},set:function(e){this.mantissa=e},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"e",{get:function(){return this.exponent},set:function(e){this.exponent=e},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"s",{get:function(){return this.sign()},set:function(e){if(e===0)return this.e=0,void(this.m=0);this.sgn()!==e&&(this.m=-this.m)},enumerable:!1,configurable:!0}),s.fromMantissaExponent=function(e,t){return new s().fromMantissaExponent(e,t)},s.fromMantissaExponent_noNormalize=function(e,t){return new s().fromMantissaExponent_noNormalize(e,t)},s.fromDecimal=function(e){return new s().fromDecimal(e)},s.fromNumber=function(e){return new s().fromNumber(e)},s.fromString=function(e){return new s().fromString(e)},s.fromValue=function(e){return new s().fromValue(e)},s.fromValue_noAlloc=function(e){return e instanceof s?e:new s(e)},s.abs=function(e){return ne(e).abs()},s.neg=function(e){return ne(e).neg()},s.negate=function(e){return ne(e).neg()},s.negated=function(e){return ne(e).neg()},s.sign=function(e){return ne(e).sign()},s.sgn=function(e){return ne(e).sign()},s.round=function(e){return ne(e).round()},s.floor=function(e){return ne(e).floor()},s.ceil=function(e){return ne(e).ceil()},s.trunc=function(e){return ne(e).trunc()},s.add=function(e,t){return ne(e).add(t)},s.plus=function(e,t){return ne(e).add(t)},s.sub=function(e,t){return ne(e).sub(t)},s.subtract=function(e,t){return ne(e).sub(t)},s.minus=function(e,t){return ne(e).sub(t)},s.mul=function(e,t){return ne(e).mul(t)},s.multiply=function(e,t){return ne(e).mul(t)},s.times=function(e,t){return ne(e).mul(t)},s.div=function(e,t){return ne(e).div(t)},s.divide=function(e,t){return ne(e).div(t)},s.recip=function(e){return ne(e).recip()},s.reciprocal=function(e){return ne(e).recip()},s.reciprocate=function(e){return ne(e).reciprocate()},s.cmp=function(e,t){return ne(e).cmp(t)},s.compare=function(e,t){return ne(e).cmp(t)},s.eq=function(e,t){return ne(e).eq(t)},s.equals=function(e,t){return ne(e).eq(t)},s.neq=function(e,t){return ne(e).neq(t)},s.notEquals=function(e,t){return ne(e).notEquals(t)},s.lt=function(e,t){return ne(e).lt(t)},s.lte=function(e,t){return ne(e).lte(t)},s.gt=function(e,t){return ne(e).gt(t)},s.gte=function(e,t){return ne(e).gte(t)},s.max=function(e,t){return ne(e).max(t)},s.min=function(e,t){return ne(e).min(t)},s.clamp=function(e,t,n){return ne(e).clamp(t,n)},s.clampMin=function(e,t){return ne(e).clampMin(t)},s.clampMax=function(e,t){return ne(e).clampMax(t)},s.cmp_tolerance=function(e,t,n){return ne(e).cmp_tolerance(t,n)},s.compare_tolerance=function(e,t,n){return ne(e).cmp_tolerance(t,n)},s.eq_tolerance=function(e,t,n){return ne(e).eq_tolerance(t,n)},s.equals_tolerance=function(e,t,n){return ne(e).eq_tolerance(t,n)},s.neq_tolerance=function(e,t,n){return ne(e).neq_tolerance(t,n)},s.notEquals_tolerance=function(e,t,n){return ne(e).notEquals_tolerance(t,n)},s.lt_tolerance=function(e,t,n){return ne(e).lt_tolerance(t,n)},s.lte_tolerance=function(e,t,n){return ne(e).lte_tolerance(t,n)},s.gt_tolerance=function(e,t,n){return ne(e).gt_tolerance(t,n)},s.gte_tolerance=function(e,t,n){return ne(e).gte_tolerance(t,n)},s.log10=function(e){return ne(e).log10()},s.absLog10=function(e){return ne(e).absLog10()},s.pLog10=function(e){return ne(e).pLog10()},s.log=function(e,t){return ne(e).log(t)},s.log2=function(e){return ne(e).log2()},s.ln=function(e){return ne(e).ln()},s.logarithm=function(e,t){return ne(e).logarithm(t)},s.pow10=function(e){return Number.isInteger(e)?_s(1,e):fn(Math.pow(10,e%1),Math.trunc(e))},s.pow=function(e,t){return typeof e=="number"&&e===10&&typeof t=="number"&&Number.isInteger(t)?_s(1,t):ne(e).pow(t)},s.exp=function(e){return ne(e).exp()},s.sqr=function(e){return ne(e).sqr()},s.sqrt=function(e){return ne(e).sqrt()},s.cube=function(e){return ne(e).cube()},s.cbrt=function(e){return ne(e).cbrt()},s.dp=function(e){return ne(e).dp()},s.decimalPlaces=function(e){return ne(e).dp()},s.affordGeometricSeries=function(e,t,n,i){return Em(ne(e),ne(t),ne(n),i)},s.sumGeometricSeries=function(e,t,n,i){return Sm(e,ne(t),ne(n),i)},s.affordArithmeticSeries=function(e,t,n,i){return(function(r,o,a,c){var l=o.add(c.mul(a)).sub(a.div(2)),h=l.pow(2);return l.neg().add(h.add(a.mul(r).mul(2)).sqrt()).div(a).floor()})(ne(e),ne(t),ne(n),ne(i))},s.sumArithmeticSeries=function(e,t,n,i){return(function(r,o,a,c){var l=o.add(c.mul(a));return r.div(2).mul(l.mul(2).plus(r.sub(1).mul(a)))})(ne(e),ne(t),ne(n),ne(i))},s.efficiencyOfPurchase=function(e,t,n){return(function(i,r,o){return i.div(r).add(i.div(o))})(ne(e),ne(t),ne(n))},s.randomDecimalForTesting=function(e){if(20*Math.random()<1)return _s(0,0);var t=10*Math.random();10*Math.random()<1&&(t=Math.round(t)),t*=Math.sign(2*Math.random()-1);var n=Math.floor(Math.random()*e*2)-e;return fn(t,n)},s.prototype.normalize=function(){if(this.m>=1&&this.m<10)return this;if(this.m===0)return this.m=0,this.e=0,this;var e=Math.floor(Math.log10(Math.abs(this.m)));return this.m=e===-324?10*this.m/1e-323:this.m/va(e),this.e+=e,this},s.prototype.fromMantissaExponent=function(e,t){return isFinite(e)&&isFinite(t)?(this.m=e,this.e=t,this.normalize(),this):(e=Number.NaN,t=Number.NaN,this)},s.prototype.fromMantissaExponent_noNormalize=function(e,t){return this.m=e,this.e=t,this},s.prototype.fromDecimal=function(e){return this.m=e.m,this.e=e.e,this},s.prototype.fromNumber=function(e){return isNaN(e)?(this.m=Number.NaN,this.e=Number.NaN):e===Number.POSITIVE_INFINITY?(this.m=1,this.e=Jn):e===Number.NEGATIVE_INFINITY?(this.m=-1,this.e=Jn):e===0?(this.m=0,this.e=0):(this.e=Math.floor(Math.log10(Math.abs(e))),this.m=this.e===-324?10*e/1e-323:e/va(this.e),this.normalize()),this},s.prototype.fromString=function(e){if(e.indexOf("e")!==-1){var t=e.split("e");this.m=parseFloat(t[0]),this.e=parseFloat(t[1]),this.normalize()}else if(e==="NaN")this.m=Number.NaN,this.e=Number.NaN;else if(this.fromNumber(parseFloat(e)),isNaN(this.m))throw Error("[DecimalError] Invalid argument: "+e);return this},s.prototype.fromValue=function(e){return e instanceof s?this.fromDecimal(e):typeof e=="number"?this.fromNumber(e):typeof e=="string"?this.fromString(e):(this.m=0,this.e=0,this)},s.prototype.toNumber=function(){if(!isFinite(this.e))return Number.NaN;if(this.e>308)return this.m>0?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY;if(this.e<-324)return 0;if(this.e===-324)return this.m>0?5e-324:-5e-324;var e=this.m*va(this.e);if(!isFinite(e)||this.e<0)return e;var t=Math.round(e);return Math.abs(t-e)<1e-10?t:e},s.prototype.mantissaWithDecimalPlaces=function(e){if(isNaN(this.m)||isNaN(this.e))return Number.NaN;if(this.m===0)return 0;var t=e+1,n=Math.ceil(Math.log10(Math.abs(this.m))),i=Math.round(this.m*Math.pow(10,t-n))*Math.pow(10,n-t);return parseFloat(i.toFixed(Math.max(t-n,0)))},s.prototype.toString=function(){return isNaN(this.m)||isNaN(this.e)?"NaN":this.e>=Jn?this.m>0?"Infinity":"-Infinity":this.e<=-Jn||this.m===0?"0":this.e<21&&this.e>-7?this.toNumber().toString():this.m+"e"+(this.e>=0?"+":"")+this.e},s.prototype.toExponential=function(e){if(isNaN(this.m)||isNaN(this.e))return"NaN";if(this.e>=Jn)return this.m>0?"Infinity":"-Infinity";if(this.e<=-Jn||this.m===0)return"0"+(e>0?Oc(".",e+1,"0"):"")+"e+0";if(this.e>-324&&this.e<308)return this.toNumber().toExponential(e);isFinite(e)||(e=17);var t=e+1,n=Math.max(1,Math.ceil(Math.log10(Math.abs(this.m))));return(Math.round(this.m*Math.pow(10,t-n))*Math.pow(10,n-t)).toFixed(Math.max(t-n,0))+"e"+(this.e>=0?"+":"")+this.e},s.prototype.toFixed=function(e){return isNaN(this.m)||isNaN(this.e)?"NaN":this.e>=Jn?this.m>0?"Infinity":"-Infinity":this.e<=-Jn||this.m===0?"0"+(e>0?Oc(".",e+1,"0"):""):this.e>=17?this.m.toString().replace(".","").padEnd(this.e+1,"0")+(e>0?Oc(".",e+1,"0"):""):this.toNumber().toFixed(e)},s.prototype.toPrecision=function(e){return this.e<=-7?this.toExponential(e-1):e>this.e?this.toFixed(e-this.e-1):this.toExponential(e-1)},s.prototype.valueOf=function(){return this.toString()},s.prototype.toJSON=function(){return this.toString()},s.prototype.toStringWithDecimalPlaces=function(e){return this.toExponential(e)},s.prototype.abs=function(){return _s(Math.abs(this.m),this.e)},s.prototype.neg=function(){return _s(-this.m,this.e)},s.prototype.negate=function(){return this.neg()},s.prototype.negated=function(){return this.neg()},s.prototype.sign=function(){return Math.sign(this.m)},s.prototype.sgn=function(){return this.sign()},s.prototype.round=function(){return this.e<-1?new s(0):this.e<17?new s(Math.round(this.toNumber())):this},s.prototype.floor=function(){return this.e<-1?Math.sign(this.m)>=0?new s(0):new s(-1):this.e<17?new s(Math.floor(this.toNumber())):this},s.prototype.ceil=function(){return this.e<-1?Math.sign(this.m)>0?new s(1):new s(0):this.e<17?new s(Math.ceil(this.toNumber())):this},s.prototype.trunc=function(){return this.e<0?new s(0):this.e<17?new s(Math.trunc(this.toNumber())):this},s.prototype.add=function(e){var t,n,i=ne(e);if(this.m===0)return i;if(i.m===0)return this;if(this.e>=i.e?(t=this,n=i):(t=i,n=this),t.e-n.e>17)return t;var r=Math.round(1e14*t.m+1e14*n.m*va(n.e-t.e));return fn(r,t.e-14)},s.prototype.plus=function(e){return this.add(e)},s.prototype.sub=function(e){return this.add(ne(e).neg())},s.prototype.subtract=function(e){return this.sub(e)},s.prototype.minus=function(e){return this.sub(e)},s.prototype.mul=function(e){if(typeof e=="number")return e<1e307&&e>-1e307?fn(this.m*e,this.e):fn(1e-307*this.m*e,this.e+307);var t=typeof e=="string"?new s(e):e;return fn(this.m*t.m,this.e+t.e)},s.prototype.multiply=function(e){return this.mul(e)},s.prototype.times=function(e){return this.mul(e)},s.prototype.div=function(e){return this.mul(ne(e).recip())},s.prototype.divide=function(e){return this.div(e)},s.prototype.divideBy=function(e){return this.div(e)},s.prototype.dividedBy=function(e){return this.div(e)},s.prototype.recip=function(){return fn(1/this.m,-this.e)},s.prototype.reciprocal=function(){return this.recip()},s.prototype.reciprocate=function(){return this.recip()},s.prototype.cmp=function(e){var t=ne(e);if(this.m===0){if(t.m===0)return 0;if(t.m<0)return 1;if(t.m>0)return-1}if(t.m===0){if(this.m<0)return-1;if(this.m>0)return 1}if(this.m>0)return t.m<0||this.e>t.e?1:this.e<t.e?-1:this.m>t.m?1:this.m<t.m?-1:0;if(this.m<0)return t.m>0||this.e>t.e?-1:this.e<t.e||this.m>t.m?1:this.m<t.m?-1:0;throw Error("Unreachable code")},s.prototype.compare=function(e){return this.cmp(e)},s.prototype.eq=function(e){var t=ne(e);return this.e===t.e&&this.m===t.m},s.prototype.equals=function(e){return this.eq(e)},s.prototype.neq=function(e){return!this.eq(e)},s.prototype.notEquals=function(e){return this.neq(e)},s.prototype.lt=function(e){var t=ne(e);return this.m===0?t.m>0:t.m===0?this.m<=0:this.e===t.e?this.m<t.m:this.m>0?t.m>0&&this.e<t.e:t.m>0||this.e>t.e},s.prototype.lte=function(e){return!this.gt(e)},s.prototype.gt=function(e){var t=ne(e);return this.m===0?t.m<0:t.m===0?this.m>0:this.e===t.e?this.m>t.m:this.m>0?t.m<0||this.e>t.e:t.m<0&&this.e<t.e},s.prototype.gte=function(e){return!this.lt(e)},s.prototype.max=function(e){var t=ne(e);return this.lt(t)?t:this},s.prototype.min=function(e){var t=ne(e);return this.gt(t)?t:this},s.prototype.clamp=function(e,t){return this.max(e).min(t)},s.prototype.clampMin=function(e){return this.max(e)},s.prototype.clampMax=function(e){return this.min(e)},s.prototype.cmp_tolerance=function(e,t){var n=ne(e);return this.eq_tolerance(n,t)?0:this.cmp(n)},s.prototype.compare_tolerance=function(e,t){return this.cmp_tolerance(e,t)},s.prototype.eq_tolerance=function(e,t){var n=ne(e);return s.lte(this.sub(n).abs(),s.max(this.abs(),n.abs()).mul(t))},s.prototype.equals_tolerance=function(e,t){return this.eq_tolerance(e,t)},s.prototype.neq_tolerance=function(e,t){return!this.eq_tolerance(e,t)},s.prototype.notEquals_tolerance=function(e,t){return this.neq_tolerance(e,t)},s.prototype.lt_tolerance=function(e,t){var n=ne(e);return!this.eq_tolerance(n,t)&&this.lt(n)},s.prototype.lte_tolerance=function(e,t){var n=ne(e);return this.eq_tolerance(n,t)||this.lt(n)},s.prototype.gt_tolerance=function(e,t){var n=ne(e);return!this.eq_tolerance(n,t)&&this.gt(n)},s.prototype.gte_tolerance=function(e,t){var n=ne(e);return this.eq_tolerance(n,t)||this.gt(n)},s.prototype.log10=function(){return this.e+Math.log10(this.m)},s.prototype.absLog10=function(){return this.e+Math.log10(Math.abs(this.m))},s.prototype.pLog10=function(){return this.m<=0||this.e<0?0:this.log10()},s.prototype.log=function(e){return Math.LN10/Math.log(e)*this.log10()},s.prototype.log2=function(){return 3.321928094887362*this.log10()},s.prototype.ln=function(){return 2.302585092994045*this.log10()},s.prototype.logarithm=function(e){return this.log(e)},s.prototype.pow=function(e){var t,n=e instanceof s?e.toNumber():e,i=this.e*n;if(Number.isSafeInteger(i)&&(t=Math.pow(this.m,n),isFinite(t)&&t!==0))return fn(t,i);var r=Math.trunc(i),o=i-r;if(t=Math.pow(10,n*Math.log10(this.m)+o),isFinite(t)&&t!==0)return fn(t,r);var a=s.pow10(n*this.absLog10());return this.sign()===-1?Math.abs(n%2)===1?a.neg():Math.abs(n%2)===0?a:new s(Number.NaN):a},s.prototype.pow_base=function(e){return ne(e).pow(this)},s.prototype.factorial=function(){var e=this.toNumber()+1;return s.pow(e/Math.E*Math.sqrt(e*Math.sinh(1/e)+1/(810*Math.pow(e,6))),e).mul(Math.sqrt(2*Math.PI/e))},s.prototype.exp=function(){var e=this.toNumber();return-706<e&&e<709?s.fromNumber(Math.exp(e)):s.pow(Math.E,e)},s.prototype.sqr=function(){return fn(Math.pow(this.m,2),2*this.e)},s.prototype.sqrt=function(){return this.m<0?new s(Number.NaN):this.e%2!=0?fn(3.16227766016838*Math.sqrt(this.m),Math.floor(this.e/2)):fn(Math.sqrt(this.m),Math.floor(this.e/2))},s.prototype.cube=function(){return fn(Math.pow(this.m,3),3*this.e)},s.prototype.cbrt=function(){var e=1,t=this.m;t<0&&(e=-1,t=-t);var n=e*Math.pow(t,1/3),i=this.e%3;return fn(i===1||i===-1?2.154434690031883*n:i!==0?4.641588833612778*n:n,Math.floor(this.e/3))},s.prototype.sinh=function(){return this.exp().sub(this.negate().exp()).div(2)},s.prototype.cosh=function(){return this.exp().add(this.negate().exp()).div(2)},s.prototype.tanh=function(){return this.sinh().div(this.cosh())},s.prototype.asinh=function(){return s.ln(this.add(this.sqr().add(1).sqrt()))},s.prototype.acosh=function(){return s.ln(this.add(this.sqr().sub(1).sqrt()))},s.prototype.atanh=function(){return this.abs().gte(1)?Number.NaN:s.ln(this.add(1).div(new s(1).sub(this)))/2},s.prototype.ascensionPenalty=function(e){return e===0?this:this.pow(Math.pow(10,-e))},s.prototype.egg=function(){return this.add(9)},s.prototype.lessThanOrEqualTo=function(e){return this.cmp(e)<1},s.prototype.lessThan=function(e){return this.cmp(e)<0},s.prototype.greaterThanOrEqualTo=function(e){return this.cmp(e)>-1},s.prototype.greaterThan=function(e){return this.cmp(e)>0},s.prototype.decimalPlaces=function(){return this.dp()},s.prototype.dp=function(){if(!isFinite(this.mantissa))return NaN;if(this.exponent>=17)return 0;for(var e=this.mantissa,t=-this.exponent,n=1;Math.abs(Math.round(e*n)/n-e)>1e-10;)n*=10,t++;return t>0?t:0},Object.defineProperty(s,"MAX_VALUE",{get:function(){return ym},enumerable:!1,configurable:!0}),Object.defineProperty(s,"MIN_VALUE",{get:function(){return Tm},enumerable:!1,configurable:!0}),Object.defineProperty(s,"NUMBER_MAX_VALUE",{get:function(){return Am},enumerable:!1,configurable:!0}),Object.defineProperty(s,"NUMBER_MIN_VALUE",{get:function(){return wm},enumerable:!1,configurable:!0}),s})(),ym=_s(1,Jn),Tm=_s(1,-Jn),Am=ne(Number.MAX_VALUE),wm=ne(Number.MIN_VALUE);class tr extends Error{constructor(e){super(e),this.name="BigNumberError"}}const Rm=9e15;function gn(s){return isFinite(s.mantissa)&&!isNaN(s.mantissa)&&isFinite(s.exponent)&&!isNaN(s.exponent)&&s.exponent<Rm}function pt(s){if(s==null)throw new tr(`toBigNumber received ${s===null?"null":"undefined"} — currency values must never be nullish`);let e;try{e=new ns(s)}catch(t){const n=t instanceof Error?t.message:String(t);throw new tr(`toBigNumber failed to parse ${JSON.stringify(s)}: ${n}`)}if(!gn(e))throw new tr(`toBigNumber produced a non-finite value from ${JSON.stringify(s)} (NaN or ±Infinity)`);return e}const Ce=Object.freeze(pt(0)),Mt=Object.freeze(pt(1)),Sc=Object.freeze(pt(10));function fa(s,e){return e===.5?s.sqrt():s.pow(e)}function Xi(s){return s.toString()}function vo(s){return pt(s)}const Uf="> 0";function xo(s){return{path:s,min:Number.MIN_VALUE,max:1/0,rangeToken:Uf}}const Cm=[{path:"ascension.constant",min:50,max:500,rangeToken:"[50, 500]"},{path:"ascension.creditsDivisor",min:1e10,max:1e15,rangeToken:"[1e10, 1e15]"},{path:"ascension.exponent",min:.3,max:.7,rangeToken:"[0.3, 0.7]"},{path:"ascension.dmMultiplierPerPoint",min:.005,max:.1,rangeToken:"[0.005, 0.10]"},{path:"offline.earningRate",min:.1,max:1,rangeToken:"[0.1, 1.0]"},{path:"offline.baseCapHours",min:1,max:24,rangeToken:"[1, 24]"},{path:"offline.maxCapHours",min:4,max:72,rangeToken:"[4, 72]"},{path:"offline.boostMultiplier",min:1.5,max:3,rangeToken:"[1.5, 3.0]"},{path:"currencies.credits.startingBalance",min:0,max:100,rangeToken:"[0, 100]"},{path:"currencies.credits.tapAmount",min:.01,max:1e4,rangeToken:"[0.01, 10000]"},{path:"currencies.credits.tickRateMs",min:50,max:500,rangeToken:"[50, 500]"},{path:"upgrades.automationReserveFraction",min:0,max:2,rangeToken:"[0.0, 2.0]"}];function Pm(s){const e=t=>`generators[${s}].${t}`;return[{path:e("tier"),min:1,max:9,integer:!0,rangeToken:"[1, 9]"},{path:e("epoch"),min:1,max:3,integer:!0,rangeToken:"[1, 3]"},xo(e("baseCost")),{path:e("costMultiplier"),min:1.01,max:1.2,rangeToken:"[1.01, 1.20]"},xo(e("baseOutput")),{path:e("enabled"),kind:"boolean"}]}function Dm(s){const e=t=>`upgrades.milestones[${s}].${t}`;return[{path:e("ownedCount"),min:1,max:1e5,integer:!0,rangeToken:"[1, 100000]"},{path:e("productionMultiplier"),min:1.5,max:5,rangeToken:"[1.5, 5.0]"}]}function Lm(s){const e=t=>`upgrades.linearBoosts[${s}].${t}`;return[{path:e("id"),kind:"string"},{path:e("targetTier"),min:1,max:9,integer:!0,rangeToken:"[1, 9]"},{path:e("multiplier"),min:1.01,max:100,rangeToken:"[1.01, 100]"},xo(e("cost")),{path:e("prerequisiteOwnedCount"),min:0,max:200,integer:!0,rangeToken:"[0, 200]"}]}function Nm(s){const e=t=>`upgrades.managers[${s}].${t}`;return[xo(e("unlockCost")),{path:e("prerequisiteOwnedCount"),min:1,max:200,integer:!0,rangeToken:"[1, 200]"}]}function Im(s){const e=t=>`ascension.upgrades[${s}].${t}`;return[{path:e("id"),kind:"string"},xo(e("cost")),{path:e("maxLevel"),min:1,max:1/0,integer:!0,rangeToken:">= 1"}]}function Ot(s,e){const t=e.replace(/\[(\d+)\]/g,".$1").split(".");let n=s;for(const i of t){if(n==null||typeof n!="object")return;n=n[i]}return n}function Za(s,e){const t=Ot(s,e.path);if(t===void 0)throw new rt(`${e.path} is missing (required)`);if(typeof t!="number"||Number.isNaN(t))throw new rt(`${e.path} must be a number; received ${Pi(t)}`);if(e.integer&&!Number.isInteger(t))throw new rt(`${e.path} must be an integer; received ${String(t)}`);if(t<e.min||t>e.max){const n=e.rangeToken===Uf?`must be ${e.rangeToken}`:`must be in ${e.rangeToken}`;throw new rt(`${e.path} ${n}; received ${String(t)}`)}}function Um(s,e){const t=Ot(s,e.path);if(t===void 0)throw new rt(`${e.path} is missing (required)`);if(typeof t!="boolean")throw new rt(`${e.path} must be a boolean; received ${Pi(t)}`)}function Of(s,e){const t=Ot(s,e.path);if(t===void 0)throw new rt(`${e.path} is missing (required)`);if(typeof t!="string")throw new rt(`${e.path} must be a non-empty string; received ${Pi(t)}`);if(t.trim().length===0)throw new rt(`${e.path} must be a non-empty string; received ""`)}function Pi(s){return s===null?"null":Array.isArray(s)?"array":typeof s=="object"?"object":String(s)}function Om(s){if(typeof s!="object"||s===null||Array.isArray(s))throw new rt(`economy config must be an object; received ${Pi(s)}`);for(const t of Cm)Za(s,t);Xr(s,"generators",Pm),Xr(s,"upgrades.milestones",Dm),Xr(s,"upgrades.linearBoosts",Lm),yu(s,"upgrades.linearBoosts","id"),Xr(s,"upgrades.managers",Nm),Xr(s,"ascension.upgrades",Im),yu(s,"ascension.upgrades","id"),Gm(s);const e=Ot(s,"save");if(e!==void 0){if(typeof e!="object"||e===null||Array.isArray(e))throw new rt(`save must be an object; received ${Pi(e)}`);Za(s,{path:"save.autosaveIntervalMs",min:5e3,max:3e4,integer:!0,rangeToken:"[5000, 30000]"}),Za(s,{path:"save.clockSkewToleranceMs",min:0,max:6e4,integer:!0,rangeToken:"[0, 60000]"}),Of(s,{path:"save.saveKey"})}}function Xr(s,e,t){const n=Ot(s,e);if(n===void 0)throw new rt(`${e} is missing (required)`);if(!Array.isArray(n))throw new rt(`${e} must be an array; received ${Pi(n)}`);for(let i=0;i<n.length;i++)for(const r of t(i))"kind"in r&&r.kind==="boolean"?Um(s,r):"kind"in r&&r.kind==="string"?Of(s,r):Za(s,r)}function yu(s,e,t){const n=Ot(s,e);if(!Array.isArray(n))return;const i=new Map;for(let r=0;r<n.length;r++){const o=Ot(s,`${e}[${r}].${t}`);if(typeof o!="string")continue;const a=i.get(o);if(a!==void 0)throw new rt(`${e}[${r}].${t} must be unique; ${JSON.stringify(o)} already used at index ${a}`);i.set(o,r)}}const Fm="1e6",km="1e27",Tu=20;function Bm(s,e){try{return vo(s)}catch(t){throw t instanceof tr?new rt(`milestones.creditsScale[${e}].threshold is not a valid serialized BigNumber; received ${JSON.stringify(s)}`):t}}function Gm(s){const e="milestones.creditsScale",t=Ot(s,e);if(t===void 0)throw new rt(`${e} is missing (required)`);if(!Array.isArray(t))throw new rt(`${e} must be an array; received ${Pi(t)}`);const n=vo(Fm),i=vo(km),r=new Map;let o;for(let a=0;a<t.length;a++){const c=p=>`${e}[${a}].${p}`,l=Ot(s,c("threshold")),h=Ot(s,c("name"));if(l===void 0)throw new rt(`${c("threshold")} is missing (required)`);if(typeof l!="string")throw new rt(`${c("threshold")} must be a serialized-BigNumber string; received ${Pi(l)}`);const u=Bm(l,a);if(!u.gte(n))throw new rt(`${c("threshold")} must be >= 1e6; received ${JSON.stringify(l)}`);if(o!==void 0&&!o.lt(u))throw new rt(`${c("threshold")} must be strictly greater than the previous threshold (creditsScale must be strictly ascending); received ${JSON.stringify(l)}`);if(o=u,h===void 0)throw new rt(`${c("name")} is missing (required)`);if(typeof h!="string")throw new rt(`${c("name")} must be a non-empty string; received ${Pi(h)}`);if(h.trim().length===0)throw new rt(`${c("name")} must be a non-empty string; received ""`);if(h.length>Tu)throw new rt(`${c("name")} must be <= ${Tu} characters; received ${h.length}`);const d=r.get(h);if(d!==void 0)throw new rt(`${c("name")} must be unique; ${JSON.stringify(h)} already used at index ${d}`);r.set(h,a)}if(o!==void 0&&!o.lte(i)){const a=t.length-1,c=Ot(s,`${e}[${a}].threshold`);throw new rt(`milestones.creditsScale[${a}].threshold (top of series) must be <= 1e27; received ${JSON.stringify(c)}`)}}const zm=.5,Hm=2,Au=.01,Vm="[0.5, 2.0]";function Wm(s){const e=Ot(s,"offline.baseCapHours"),t=Ot(s,"offline.maxCapHours");if(typeof e=="number"&&typeof t=="number"&&e>t)throw new rt(`offline.baseCapHours (${e}) cannot exceed offline.maxCapHours (${t})`);const n=Ot(s,"upgrades.linearBoosts");if(Array.isArray(n))for(let i=0;i<n.length;i++)qm(s,i)}function Xm(s,e){const t=Ot(s,"generators");if(Array.isArray(t)){for(const n of t)if(typeof n=="object"&&n!==null&&n.tier===e)return n}}function qm(s,e){const t=g=>`upgrades.linearBoosts[${e}].${g}`,n=Ot(s,t("id")),i=Ot(s,t("targetTier")),r=Ot(s,t("cost")),o=Ot(s,t("prerequisiteOwnedCount"));if(typeof i!="number"||typeof r!="number"||typeof o!="number")return;const a=Xm(s,i),c=a==null?void 0:a.baseCost,l=a==null?void 0:a.costMultiplier;if(typeof c!="number"||typeof l!="number")return;const h=c*Math.pow(l,o);if(!Number.isFinite(h)||h<=0)return;const u=r/h,d=zm*(1-Au),p=Hm*(1+Au);if(u<d||u>p){const g=typeof n=="string"?JSON.stringify(n):`index ${e}`;throw new rt(`upgrades.linearBoosts[${e}] (id ${g}) costFactor ${u.toFixed(2)} is outside the expected band ${Vm}`)}}function jm(s){const e=/position (\d+)/.exec(s);return e?Number(e[1]):0}function Ff(s){let e;try{e=JSON.parse(s)}catch(i){const r=i instanceof Error?i.message:String(i),o=jm(r);throw new kh(`economy.json is not valid JSON at position ${o}`)}const t=e==null?void 0:e.meta,n=typeof(t==null?void 0:t.schemaVersion)=="number"?t.schemaVersion:0;if(n>lo)throw new Bh(`economy.json schema version ${n} is newer than supported version ${lo}`);return n<lo&&typeof e=="object"&&e!==null&&!Array.isArray(e)&&(e=bm(e)),Om(e),Wm(e),If(e)}function Tl(s){return gn(s)?s.max(Mt):Mt}function Ym(s,e){return{get:()=>s.get().mul(Tl(e.getExtraGlobalMultiplier())).mul(Tl(e.getAutomationEfficiencyBonus()))}}function Km(s,e){return{getBoostMultiplier:t=>s.getBoostMultiplier(t).mul(Tl(e.getTierBoost(t)))}}const kf=-1,ee={CREDITS_UPDATED:"CREDITS_UPDATED",PURCHASE_REJECTED:"PURCHASE_REJECTED",BUY_MODE_CHANGED:"BUY_MODE_CHANGED",GENERATOR_PURCHASED:"GENERATOR_PURCHASED",GENERATOR_RATE_CHANGED:"GENERATOR_RATE_CHANGED",GENERATORS_RESET_COMPLETE:"GENERATORS_RESET_COMPLETE",GENERATORS_RESTORED:"GENERATORS_RESTORED",BOOSTS_CHANGED:"BOOSTS_CHANGED",UPGRADE_PURCHASED:"UPGRADE_PURCHASED",UPGRADE_PURCHASE_REJECTED:"UPGRADE_PURCHASE_REJECTED",AUTOMATION_UNLOCKED:"AUTOMATION_UNLOCKED",UPGRADE_RESET:"UPGRADE_RESET",INTENT_AUTO_BUY_GENERATOR:"INTENT_AUTO_BUY_GENERATOR",INTENT_TAP_FORGE:"INTENT_TAP_FORGE",INTENT_BUY_GENERATOR:"INTENT_BUY_GENERATOR",INTENT_SET_BUY_MODE:"INTENT_SET_BUY_MODE",INTENT_CONFIRM_ASCENSION:"INTENT_CONFIRM_ASCENSION",INTENT_HOLD_PROGRESS:"INTENT_HOLD_PROGRESS",INTENT_DISMISS_MODAL:"INTENT_DISMISS_MODAL",INTENT_DISMISS_OVERLAY:"INTENT_DISMISS_OVERLAY",EPOCH_CHANGED:"EPOCH_CHANGED",SAVE_FAILED:"SAVE_FAILED",SAVE_LOAD_FAILED:"SAVE_LOAD_FAILED",SAVE_CONFLICT:"SAVE_CONFLICT",ASCENSION_STARTED:"ASCENSION_STARTED",ASCENSION_COMPLETE:"ASCENSION_COMPLETE",MILESTONE_REACHED:"MILESTONE_REACHED",CLOCK_GAP_DETECTED:"CLOCK_GAP_DETECTED",DARK_MATTER_UPDATED:"DARK_MATTER_UPDATED",DM_UPGRADE_PURCHASED:"DM_UPGRADE_PURCHASED",DM_TREE_CAPSTONE_SELECTED:"DM_TREE_CAPSTONE_SELECTED",OFFLINE_EARNINGS_APPLIED:"OFFLINE_EARNINGS_APPLIED"},$m=!1,Jm=50,Zm=20,Qm=!1;class wu extends Error{constructor(e,t){super(`[EventBus] Recursion depth ${t} exceeded (key chain: ${e})`),this.name="EventBusRecursionError"}}class eg{constructor(e={}){I(this,"_rethrowListenerErrors");I(this,"_maxDispatchDepth");I(this,"_listenerLeakWarn");I(this,"_freezePayloads");I(this,"_logger");I(this,"_listeners");I(this,"_depth",0);I(this,"_keyStack",[]);I(this,"_leakWarnedKeys",new Set);I(this,"_asyncWarnedKeys",new Set);this._rethrowListenerErrors=e.rethrowListenerErrors??$m,this._maxDispatchDepth=e.maxDispatchDepth??Jm,this._listenerLeakWarn=e.listenerLeakWarn??Zm,this._freezePayloads=e.freezePayloads??Qm,this._logger=e.logger,this._listeners=new Map}get config(){return{rethrowListenerErrors:this._rethrowListenerErrors,maxDispatchDepth:this._maxDispatchDepth,listenerLeakWarn:this._listenerLeakWarn,freezePayloads:this._freezePayloads,logger:this._logger}}on(e,t){var r,o;const n=this._listeners.get(e);n===void 0?this._listeners.set(e,[t]):n.includes(t)||n.push(t);const i=((r=this._listeners.get(e))==null?void 0:r.length)??0;return i>this._listenerLeakWarn&&!this._leakWarnedKeys.has(e)&&(this._leakWarnedKeys.add(e),(o=this._logger)==null||o.call(this,`[EventBus] Possible listener leak on "${String(e)}": ${i} listeners (threshold ${this._listenerLeakWarn}). A subscriber is likely missing its unsubscribe.`)),()=>{this.off(e,t)}}once(e,t){const n=i=>{this.off(e,n),t(i)};return this.on(e,n)}off(e,t){const n=this._listeners.get(e);if(n===void 0)return;const i=n.indexOf(t);i!==-1&&n.splice(i,1)}listenerCount(e){var t;return((t=this._listeners.get(e))==null?void 0:t.length)??0}emit(e,t){var n,i;this._depth+=1,this._keyStack.push(e);try{if(this._depth>this._maxDispatchDepth)throw new wu(this._keyStack.join("→"),this._depth);this._freezePayloads&&Object.freeze(t);const r=this._listeners.get(e);if(r===void 0)return;const o=r.slice();let a,c=!1;for(let l=0;l<o.length;l+=1){const h=o[l];try{const u=h(t);if(u!=null&&typeof u.then=="function"){const d=h.name===""?"<anon>":h.name,p=`${String(e)}:${d}`;this._asyncWarnedKeys.has(p)||(this._asyncWarnedKeys.add(p),(n=this._logger)==null||n.call(this,`[EventBus] async handler "${d}" on "${String(e)}" returned a Promise. Async handlers are not supported (GDD Rule 12) — the Promise is ignored. Make the handler synchronous.`))}}catch(u){if(u instanceof wu)throw u;const d=h.name===""?"anonymous":h.name;(i=this._logger)==null||i.call(this,`[EventBus] listener "${d}" threw while handling event "${String(e)}":`,u),this._rethrowListenerErrors&&!c&&(a=u,c=!0)}}if(c)throw a}finally{this._keyStack.pop(),this._depth-=1}}}const tg=1e3;class ng{constructor(e,t){I(this,"_config");I(this,"_tickRateMs");I(this,"_maxCatchupSteps");I(this,"_gapThresholdMs");I(this,"_dtSeconds");I(this,"_bus");I(this,"_consumers",[]);I(this,"_accumulator",0);I(this,"_isRunning",!0);const{tickRateMs:n,maxCatchupSteps:i,gapThresholdMs:r,liveBudgetCeilingMs:o}=e;if(!(n>=50&&n<=500))throw new Error(`GameClock: tickRateMs ${n} outside [50,500]`);if(!(i>=1&&i<=20))throw new Error(`GameClock: maxCatchupSteps ${i} outside [1,20]`);if(!(r>=2e3&&r<=5e3))throw new Error(`GameClock: gapThresholdMs ${r} outside [2000,5000]`);if(!Number.isFinite(o))throw new Error(`GameClock: liveBudgetCeilingMs ${o} must be a finite number`);if(r<=n*i)throw new Error(`GameClock: gapThresholdMs (${r}) must exceed tickRateMs*maxCatchupSteps (${n*i})`);if(n*i>o)throw new Error(`GameClock: tickRateMs*maxCatchupSteps (${n*i}) exceeds liveBudgetCeilingMs (${o})`);this._config={...e},this._tickRateMs=this._config.tickRateMs,this._maxCatchupSteps=this._config.maxCatchupSteps,this._gapThresholdMs=this._config.gapThresholdMs,this._dtSeconds=this._config.tickRateMs/tg,this._bus=t}register(e){return this._consumers.includes(e)||this._consumers.push(e),()=>{const t=this._consumers.indexOf(e);t!==-1&&this._consumers.splice(t,1)}}advance(e){if(!this._isRunning)return{steps:0,stallGapFired:!1};if(!Number.isFinite(e)||e<=0)return{steps:0,stallGapFired:!1};this._accumulator+=e;let t=0;const n=[...this._consumers];for(;this._accumulator>=this._tickRateMs&&t<this._maxCatchupSteps;){for(const r of n)r(this._dtSeconds);this._accumulator-=this._tickRateMs,t+=1}let i=!1;if(this._accumulator>this._gapThresholdMs){const r=this._accumulator-this._accumulator%this._tickRateMs;this._bus.emit(ee.CLOCK_GAP_DETECTED,{elapsedMs:r,source:"stall"}),this._accumulator=this._accumulator%this._tickRateMs,i=!0}return{steps:t,stallGapFired:i}}reportGap(e){!Number.isFinite(e)||e<=0||this._bus.emit(ee.CLOCK_GAP_DETECTED,{elapsedMs:e,source:"visibility"})}pause(){this._isRunning=!1}resume(){this._isRunning=!0}isRunning(){return this._isRunning}}const Pn=1,xn=9;var Dt,Mi,wo,Ro,ji,Ei,Co,xc,Po,jt,Wi,Bf,ro;class ig{constructor(e,t,n){j(this,jt);j(this,Dt);j(this,Mi);j(this,wo);j(this,Ro);j(this,ji);j(this,Ei);j(this,Co);j(this,xc,({tier:e})=>{if(e===kf){for(let t=Pn;t<=xn;t+=1)this.isUnlocked(t)&&x(this,Dt)[t]>0&&re(this,jt,ro).call(this,t,x(this,Ei)[t]??Ce);return}!Number.isInteger(e)||e<Pn||e>xn||this.isUnlocked(e)&&x(this,Dt)[e]>0&&re(this,jt,ro).call(this,e,x(this,Ei)[e]??Ce)});j(this,Po);X(this,Dt,new Array(xn+1).fill(0)),X(this,ji,t),X(this,Ei,new Array(xn+1).fill(void 0));const i=new Array(xn+1).fill(void 0);for(const a of e.generators)Number.isInteger(a.tier)&&a.tier>=Pn&&a.tier<=xn&&(i[a.tier]=a);X(this,Mi,i),X(this,wo,n),X(this,Po,e.upgrades.milestones.filter(a=>Number.isFinite(a.ownedCount)&&a.ownedCount>0&&Number.isFinite(a.productionMultiplier)&&a.productionMultiplier>0));let r=!1,o=!0;for(let a=Pn;a<=xn;a+=1){const c=i[a];c!==void 0&&(r=!0,c.enabled&&(o=!1))}X(this,Ro,r&&o),X(this,Co,t.on(ee.BOOSTS_CHANGED,x(this,xc)))}getOwned(e){return re(this,jt,Wi).call(this,e,"getOwned"),x(this,Dt)[e]}isUnlocked(e){if(re(this,jt,Wi).call(this,e,"isUnlocked"),x(this,Ro))return e===Pn?!0:x(this,Mi)[e]===void 0?!1:x(this,Dt)[e-1]>=1;const t=x(this,Mi)[e];return t===void 0||!t.enabled?!1:e===Pn?!0:x(this,Dt)[e-1]>=1}getCost(e,t=1){if(re(this,jt,Wi).call(this,e,"getCost"),!Number.isInteger(t)||t<1)return Ce;const n=x(this,Mi)[e];if(n===void 0)return Ce;const i=x(this,Dt)[e],r=n.costMultiplier,o=pt(n.baseCost).mul(pt(r).pow(i));return t===1?o:r===1?o.mul(t):o.mul(pt(r).pow(t).sub(Mt).div(r-1))}getMaxAffordable(e,t){re(this,jt,Wi).call(this,e,"getMaxAffordable");const n=x(this,Mi)[e];if(n===void 0||!gn(t))return 0;const i=this.getCost(e,1);if(i.lte(Ce))return 0;const r=t.div(i);if(r.lte(Ce))return 0;const o=n.costMultiplier,a=r.toNumber();let c;if(o===1){if(!isFinite(a))return 0;c=Math.floor(a)}else isFinite(a)?c=Math.floor(Math.log(a*(o-1)+1)/Math.log(o)):c=Math.floor(r.mul(o-1).add(Mt).log10()/Math.log10(o));if(!Number.isFinite(c)||c>=Number.MAX_SAFE_INTEGER)return 0;for(;this.getCost(e,c+1).lte(t);)c+=1;for(;c>0&&this.getCost(e,c).gt(t);)c-=1;return Math.max(0,c)}getMilestoneMultiplier(e){re(this,jt,Wi).call(this,e,"getMilestoneMultiplier");const t=x(this,Dt)[e];let n=Mt;for(const i of x(this,Po))i.ownedCount<=t&&(n=n.mul(pt(i.productionMultiplier)));return n}getTierRate(e){if(re(this,jt,Wi).call(this,e,"getTierRate"),!this.isUnlocked(e))return Ce;const t=x(this,Dt)[e];if(t===0)return Ce;const n=x(this,Mi)[e];return n===void 0?Ce:pt(n.baseOutput).mul(t).mul(this.getMilestoneMultiplier(e)).mul(re(this,jt,Bf).call(this,e))}getTotalBaseRate(){let e=Ce;for(let t=Pn;t<=xn;t+=1)e=e.add(this.getTierRate(t));return e}applyPurchase(e,t){if(re(this,jt,Wi).call(this,e,"applyPurchase"),!this.isUnlocked(e)||!Number.isInteger(t)||t<1)return;const n=x(this,Dt)[e],i=x(this,Ei)[e]??this.getTierRate(e);x(this,Dt)[e]+=t,x(this,ji).emit(ee.GENERATOR_PURCHASED,{tier:e,previousOwned:n,owned:x(this,Dt)[e]}),re(this,jt,ro).call(this,e,i)}resetRun(){const e=[];for(let t=Pn;t<=xn;t+=1)x(this,Dt)[t]>0&&e.push({tier:t,previousRate:this.getTierRate(t)});x(this,Dt).fill(0);for(const{tier:t,previousRate:n}of e)re(this,jt,ro).call(this,t,n);x(this,ji).emit(ee.GENERATORS_RESET_COMPLETE,{})}serialize(){const e=[];for(let t=Pn;t<=xn;t+=1)x(this,Dt)[t]>0&&e.push({tier:t,owned:x(this,Dt)[t]});return e}restore(e){x(this,Dt).fill(0);for(const t of e)Number.isInteger(t.tier)&&t.tier>=Pn&&t.tier<=xn&&(x(this,Dt)[t.tier]=Number.isFinite(t.owned)&&t.owned>=0?Math.floor(t.owned):0);x(this,Ei).fill(void 0),x(this,ji).emit(ee.GENERATORS_RESTORED,{})}dispose(){x(this,Co).call(this)}}Dt=new WeakMap,Mi=new WeakMap,wo=new WeakMap,Ro=new WeakMap,ji=new WeakMap,Ei=new WeakMap,Co=new WeakMap,xc=new WeakMap,Po=new WeakMap,jt=new WeakSet,Wi=function(e,t){if(!Number.isInteger(e)||e<Pn||e>xn)throw new RangeError(`${t}: tier must be an integer in [${Pn}, ${xn}], got ${e}`)},Bf=function(e){var t;return((t=x(this,wo))==null?void 0:t.getBoostMultiplier(e))??Mt},ro=function(e,t){const n=this.getTierRate(e);x(this,Ei)[e]=n,x(this,ji).emit(ee.GENERATOR_RATE_CHANGED,{tier:e,rate:n,rateDelta:n.sub(t)})};const Ru=["x1","x10","xmax"],Cu="x1",sg=1,rg=10,Pu=1;var pn,Si,yi,Zn,Do,Lo,Nn,Sn,or,Mc,No,wt,Al,Ys,Qa,Gf,zf,Hf,Vf;class og{constructor(e,t,n,i,r){j(this,wt);j(this,pn,Ce);j(this,Si,Ce);j(this,yi,Ce);j(this,Zn,Cu);j(this,Do);j(this,Lo);j(this,Nn);j(this,Sn);j(this,or,!1);j(this,Mc,e=>{const t=x(this,Sn).getTotalBaseRate().mul(e);if(t.gt(Ce)){X(this,or,!0);try{this.earn(t)}finally{X(this,or,!1)}}re(this,wt,Ys).call(this)});j(this,No);const o=e.currencies.credits.tapAmount;if(!(Number.isFinite(o)&&o>0))throw new Error(`CreditsSystem: currencies.credits.tapAmount ${o} must be a finite number > 0 (AC-B3-07 / EC-9)`);X(this,Do,pt(o)),X(this,Nn,t),X(this,Sn,n),X(this,Lo,i),X(this,No,[t.on(ee.INTENT_TAP_FORGE,()=>{this.earn(x(this,Do))}),t.on(ee.INTENT_BUY_GENERATOR,({tier:a})=>{re(this,wt,zf).call(this,a)}),t.on(ee.INTENT_SET_BUY_MODE,({mode:a})=>{re(this,wt,Gf).call(this,a)}),t.on(ee.INTENT_AUTO_BUY_GENERATOR,({tier:a})=>{re(this,wt,Hf).call(this,a)}),r.register(x(this,Mc))])}earn(e){if(!gn(e)||!e.gt(Ce)){console.warn("CreditsSystem: earn() rejected a non-finite or non-positive base (F-B3-03 guard)",e);return}const t=re(this,wt,Al).call(this),n=e.mul(t);X(this,pn,x(this,pn).add(n)),X(this,Si,x(this,Si).add(n)),X(this,yi,x(this,yi).add(e)),x(this,or)||re(this,wt,Ys).call(this,t)}spend(e){return!gn(e)||!e.gt(Ce)||!x(this,pn).gte(e)?!1:(X(this,pn,x(this,pn).sub(e)),re(this,wt,Ys).call(this),!0)}addOfflineEarnings(e){if(!gn(e)||!e.gt(Ce)){console.warn("CreditsSystem: rejected invalid offline lump (F-B3-06 / EC-4)",e);return}this.earn(e)}resetRun(){X(this,pn,Ce),X(this,Si,Ce),X(this,yi,Ce),re(this,wt,Ys).call(this)}serialize(){return{balance:Xi(x(this,pn)),lifetimeCredits:Xi(x(this,Si)),lifetimeBaseCredits:Xi(x(this,yi)),buyMode:x(this,Zn)}}restore(e){X(this,pn,re(this,wt,Qa).call(this,"balance",e.balance)),X(this,Si,re(this,wt,Qa).call(this,"lifetimeCredits",e.lifetimeCredits)),X(this,yi,re(this,wt,Qa).call(this,"lifetimeBaseCredits",e.lifetimeBaseCredits)),X(this,Zn,e.buyMode!==void 0&&Ru.includes(e.buyMode)?e.buyMode:Cu),re(this,wt,Ys).call(this),x(this,Nn).emit(ee.BUY_MODE_CHANGED,{mode:x(this,Zn)})}getBalance(){return x(this,pn)}getLifetimeCredits(){return x(this,Si)}getLifetimeBaseCredits(){return x(this,yi)}getBuyMode(){return x(this,Zn)}dispose(){for(const e of x(this,No))e()}}pn=new WeakMap,Si=new WeakMap,yi=new WeakMap,Zn=new WeakMap,Do=new WeakMap,Lo=new WeakMap,Nn=new WeakMap,Sn=new WeakMap,or=new WeakMap,Mc=new WeakMap,No=new WeakMap,wt=new WeakSet,Al=function(){const e=x(this,Lo).get();return!gn(e)||e.lt(Mt)?(console.warn("CreditsSystem: F-B3-01 clamped a malformed global multiplier to ONE (provider contract: finite >= ONE)",e),Mt):e},Ys=function(e){const t=x(this,Sn).getTotalBaseRate().mul(e??re(this,wt,Al).call(this));x(this,Nn).emit(ee.CREDITS_UPDATED,{balance:x(this,pn),ratePerSec:t})},Qa=function(e,t){let n;try{n=vo(t)}catch(i){if(!(i instanceof tr))throw i;return console.warn(`CreditsSystem: restore() clamped corrupted field '${e}' to ZERO — deserialize rejected the persisted string (EC-5 / R13)`,t),Ce}return!gn(n)||!n.gte(Ce)?(console.warn(`CreditsSystem: restore() clamped invalid field '${e}' to ZERO — non-finite or negative after deserialize (EC-5 / R13)`,t),Ce):n},Gf=function(e){!Ru.includes(e)||e===x(this,Zn)||(X(this,Zn,e),x(this,Nn).emit(ee.BUY_MODE_CHANGED,{mode:e}))},zf=function(e){if(!x(this,Sn).isUnlocked(e)){x(this,Nn).emit(ee.PURCHASE_REJECTED,{reason:"locked"});return}const t=re(this,wt,Vf).call(this,e);if(t===0){x(this,Nn).emit(ee.PURCHASE_REJECTED,{reason:"qty_zero"});return}const n=x(this,Sn).getCost(e,t);this.spend(n)?x(this,Sn).applyPurchase(e,t):x(this,Nn).emit(ee.PURCHASE_REJECTED,{reason:"insufficient_balance"})},Hf=function(e){if(!x(this,Sn).isUnlocked(e)){x(this,Nn).emit(ee.PURCHASE_REJECTED,{reason:"locked"});return}const t=x(this,Sn).getCost(e,Pu);this.spend(t)?x(this,Sn).applyPurchase(e,Pu):x(this,Nn).emit(ee.PURCHASE_REJECTED,{reason:"insufficient_balance"})},Vf=function(e){switch(x(this,Zn)){case"x1":return sg;case"x10":return rg;case"xmax":return x(this,Sn).getMaxAffordable(e,x(this,pn))}};function Du(s){return Number.isFinite(s)?pt(s).max(Mt):Mt}function ag(s){return Number.isFinite(s)?pt(s):null}function xa(s){return ag("cost"in s?s.cost:s.unlockCost)}function cg(s){return gn(s)?s:Ce}function lg(s){return`manager:tier${s}`}var ar,Qn,ei,cr,lr,Io,yn,Uo,ti,Oo,St,Ks,wl,$s,Wf,Rl,Xf;class hg{constructor(e,t,n,i,r){j(this,St);j(this,ar);j(this,Qn,new Set);j(this,ei,{});j(this,cr);j(this,lr);j(this,Io);j(this,yn);j(this,Uo);j(this,ti);j(this,Oo);re(this,St,Xf).call(this,e),X(this,cr,n),X(this,lr,i),X(this,yn,t),X(this,Oo,r)}getBoostMultiplier(e){return x(this,ar).filter(t=>t.targetTier===e&&x(this,Qn).has(t.id)).reduce((t,n)=>t.mul(Du(n.multiplier)),Mt)}isManagerUnlocked(e){return x(this,ei)[e]===!0}isVisible(e){return re(this,St,Ks).call(this,e.targetTier,e.prerequisiteOwnedCount)}isAvailable(e){return re(this,St,wl).call(this,e.id,e.targetTier,e)}getUpgradeState(e){const t=x(this,ti).get(e);if(t===void 0)return"LOCKED";const{entry:n,targetTier:i}=t;return re(this,St,$s).call(this,e,i,n)?"PURCHASED":re(this,St,Ks).call(this,i,n.prerequisiteOwnedCount)?re(this,St,wl).call(this,e,i,n)?"AVAILABLE":"UNAFFORDABLE":"LOCKED"}getProjectedTierRate(e,t){const n=x(this,cr).getTierRate(e),i=x(this,ti).get(t),r=i!==void 0&&"multiplier"in i.entry?i.entry:void 0;return r===void 0?(console.warn("UpgradeSystem: getProjectedTierRate received an unknown or non-boost upgradeId; returning the base tier rate (F-B4-04)",t),n):cg(n).mul(Du(r.multiplier))}getSortedVisibleUpgrades(){const e=[];for(const[t,n]of x(this,ti))re(this,St,Ks).call(this,n.targetTier,n.entry.prerequisiteOwnedCount)&&e.push({entry:n.entry,id:t,targetTier:n.targetTier,costKey:xa(n.entry),purchased:re(this,St,$s).call(this,t,n.targetTier,n.entry)?1:0});return e.sort((t,n)=>{if(t.targetTier!==n.targetTier)return t.targetTier-n.targetTier;if(t.purchased!==n.purchased)return t.purchased-n.purchased;if(t.costKey!==null&&n.costKey!==null){const i=t.costKey.cmp(n.costKey);if(i!==0)return i}else{if(t.costKey===null&&n.costKey!==null)return 1;if(t.costKey!==null&&n.costKey===null)return-1}return t.id<n.id?-1:t.id>n.id?1:0}),e.map(t=>t.entry)}getCheapestAvailableUpgradeCost(){let e=null;for(const[t,n]of x(this,ti)){if(re(this,St,$s).call(this,t,n.targetTier,n.entry)||!re(this,St,Ks).call(this,n.targetTier,n.entry.prerequisiteOwnedCount))continue;const i=xa(n.entry);i!==null&&(e===null||i.lt(e))&&(e=i)}return e??Ce}purchase(e){const t=x(this,ti).get(e);if(t===void 0){x(this,yn).emit(ee.UPGRADE_PURCHASE_REJECTED,{upgradeId:e,reason:"not_found"});return}if(re(this,St,$s).call(this,e,t.targetTier,t.entry))return;const n=xa(t.entry);if(n===null||n.lte(Ce)){x(this,yn).emit(ee.UPGRADE_PURCHASE_REJECTED,{upgradeId:e,reason:"invalid_cost"});return}if(!x(this,lr).spend(n)){x(this,yn).emit(ee.UPGRADE_PURCHASE_REJECTED,{upgradeId:e,reason:"insufficient_balance"});return}this.markUpgradePurchased(e);const{type:i,targetTier:r}=t;i==="LinearBoost"?(x(this,yn).emit(ee.BOOSTS_CHANGED,{tier:r}),x(this,yn).emit(ee.UPGRADE_PURCHASED,{upgradeId:e,type:i,targetTier:r})):(x(this,ei)[r]=!0,x(this,yn).emit(ee.AUTOMATION_UNLOCKED,{tier:r}),x(this,yn).emit(ee.UPGRADE_PURCHASED,{upgradeId:e,type:i,targetTier:r}))}markUpgradePurchased(e){x(this,Qn).add(e)}getState(){return{purchasedUpgrades:[...x(this,Qn)],managerUnlocked:{...x(this,ei)}}}loadState(e){if(x(this,Qn).clear(),re(this,St,Rl).call(this),e==null)return;const t=e.purchasedUpgrades;if(Array.isArray(t))for(const i of t)x(this,ti).has(i)?x(this,Qn).add(i):console.warn("UpgradeSystem.loadState: dropping a purchased upgradeId absent from the current catalog (removed in a patch?)",i);else t!==void 0&&console.warn("UpgradeSystem.loadState: purchasedUpgrades is not an array; defaulting to empty",t);const n=e.managerUnlocked;if(n!==null&&typeof n=="object"&&!Array.isArray(n))for(const[i,r]of Object.entries(n))r===!0&&(x(this,ei)[Number(i)]=!0);else n!==void 0&&console.warn("UpgradeSystem.loadState: managerUnlocked is not a plain object; defaulting to all-locked",n)}reset(){var t;x(this,Qn).clear();let e=!1;try{e=((t=x(this,Oo))==null?void 0:t.shouldPersistManagers())===!0}catch{e=!1}e||re(this,St,Rl).call(this),x(this,yn).emit(ee.BOOSTS_CHANGED,{tier:kf}),x(this,yn).emit(ee.UPGRADE_RESET,{})}onConfigReload(e){{console.warn("UpgradeSystem.onConfigReload is a dev-only hot-reload convenience and is a no-op in a production build (live catalog swap refused — anti-cheat)");return}}}ar=new WeakMap,Qn=new WeakMap,ei=new WeakMap,cr=new WeakMap,lr=new WeakMap,Io=new WeakMap,yn=new WeakMap,Uo=new WeakMap,ti=new WeakMap,Oo=new WeakMap,St=new WeakSet,Ks=function(e,t){return re(this,St,Wf).call(this,e)&&x(this,cr).getOwned(e)>=t},wl=function(e,t,n){if(!re(this,St,Ks).call(this,t,n.prerequisiteOwnedCount)||re(this,St,$s).call(this,e,t,n))return!1;const i=xa(n);return i===null?!1:x(this,lr).getBalance().gte(i)},$s=function(e,t,n){return"multiplier"in n?x(this,Qn).has(e):x(this,ei)[t]===!0},Wf=function(e){return x(this,Io)[e-1]===!0},Rl=function(){for(const e of Object.keys(x(this,ei)))delete x(this,ei)[Number(e)]},Xf=function(e){var n,i;X(this,ar,Object.freeze((((n=e.upgrades)==null?void 0:n.linearBoosts)??[]).map(r=>Object.freeze({...r})))),X(this,Uo,Object.freeze((((i=e.upgrades)==null?void 0:i.managers)??[]).map(r=>Object.freeze({...r}))));const t=new Map;for(const r of x(this,ar))t.set(r.id,{entry:r,type:"LinearBoost",targetTier:r.targetTier});x(this,Uo).forEach((r,o)=>{const a=o+1;t.set(lg(a),{entry:r,type:"AutomationUnlock",targetTier:a})}),X(this,ti,t),X(this,Io,Object.freeze((e.generators??[]).map(r=>r.enabled===!0)))};var Fo,hr,ko,ur,Bo,Go,Ec,qf;class ug{constructor(e){j(this,Ec);j(this,Fo);j(this,hr);j(this,ko);j(this,ur);j(this,Bo);j(this,Go);X(this,Fo,e.bus),X(this,hr,e.b2),X(this,ko,e.b3),X(this,ur,e.b4),X(this,Bo,e.reserveFraction),X(this,Go,[...e.enabledTiers].sort((t,n)=>n-t)),e.clock.register(()=>re(this,Ec,qf).call(this))}}Fo=new WeakMap,hr=new WeakMap,ko=new WeakMap,ur=new WeakMap,Bo=new WeakMap,Go=new WeakMap,Ec=new WeakSet,qf=function(){const e=x(this,ur).getCheapestAvailableUpgradeCost().mul(x(this,Bo));for(const t of x(this,Go)){if(!x(this,ur).isManagerUnlocked(t)||!x(this,hr).isUnlocked(t))continue;const n=x(this,hr).getCost(t,1).add(e);x(this,ko).getBalance().gte(n)&&x(this,Fo).emit(ee.INTENT_AUTO_BUY_GENERATOR,{tier:t})}};const Lu=9;var Es,zo,In,Ho,Yn,jf,Cl,Yf,Kf;class dg{constructor(e,t){j(this,Yn);j(this,Es);j(this,zo);j(this,In,0);j(this,Ho);X(this,Es,e),X(this,zo,t),X(this,Ho,[e.on(ee.GENERATOR_PURCHASED,n=>re(this,Yn,jf).call(this,n)),e.on(ee.GENERATORS_RESTORED,()=>re(this,Yn,Yf).call(this)),e.on(ee.GENERATORS_RESET_COMPLETE,()=>re(this,Yn,Kf).call(this))])}getEpoch(){return x(this,In)}dispose(){for(const e of x(this,Ho))e()}}Es=new WeakMap,zo=new WeakMap,In=new WeakMap,Ho=new WeakMap,Yn=new WeakSet,jf=function(e){const{tier:t,owned:n}=e;n>=1&&Number.isInteger(t)&&t>=1&&t<=Lu&&t>x(this,In)&&(X(this,In,t),x(this,Es).emit(ee.EPOCH_CHANGED,{epoch:x(this,In)}))},Cl=function(){for(let e=Lu;e>=1;e--)if(x(this,zo).getOwned(e)>=1)return e;return 0},Yf=function(){X(this,In,re(this,Yn,Cl).call(this)),x(this,Es).emit(ee.EPOCH_CHANGED,{epoch:x(this,In)})},Kf=function(){const e=re(this,Yn,Cl).call(this);e!==x(this,In)&&(X(this,In,e),x(this,Es).emit(ee.EPOCH_CHANGED,{epoch:x(this,In)}))};const fg=Object.freeze({addDarkMatter:()=>{},isNoOp:!0});var Vo,Wo,Xo,Ss,dr,qo,jo,ys,Yi,Yo,Pl;class pg{constructor(e,t,n,i,r,o){j(this,Yo);j(this,Vo);j(this,Wo);j(this,Xo);j(this,Ss);j(this,dr);j(this,qo);j(this,jo);j(this,ys);j(this,Yi,0);mg(e.ascension),X(this,Vo,pt(e.ascension.constant)),X(this,Wo,pt(e.ascension.creditsDivisor)),X(this,Xo,e.ascension.exponent),X(this,Ss,i),X(this,dr,t),X(this,qo,n),X(this,jo,r),X(this,ys,o??fg)}assertRealProviderInstalled(){if(x(this,ys).isNoOp===!0)throw new Error("AscensionSystem: real DarkMatterProvider never installed — setDarkMatterProvider() was not called before boot step 6 (production wiring fault; refusing to silently mint 0 Dark Matter)")}setDarkMatterProvider(e){X(this,ys,e)}getRunCount(){return x(this,Yi)}serialize(){return{runCount:x(this,Yi)}}restore(e){const t=e==null?void 0:e.runCount;if(typeof t!="number"||!Number.isSafeInteger(t)||t<0)throw new Error(`AscensionSystem.restore: invalid runCount (${String(t)}) — must be a non-negative safe integer`);X(this,Yi,t)}getEstimatedDM(){return re(this,Yo,Pl).call(this,x(this,Ss).getLifetimeBaseCredits())}canAscend(){return this.getEstimatedDM().gte(Mt)}executeAscension(){if(!this.canAscend())throw new Error("AscensionSystem.executeAscension: canAscend() is false (programming error — E5 must gate the Ascend button)");this.assertRealProviderInstalled(),x(this,dr).emit(ee.ASCENSION_STARTED,{});const e=x(this,Ss).getLifetimeBaseCredits(),t=re(this,Yo,Pl).call(this,e);x(this,Ss).resetRun(),x(this,qo).resetRun(),x(this,jo).reset(),x(this,ys).addDarkMatter(t,e),ba(this,Yi)._++,x(this,dr).emit(ee.ASCENSION_COMPLETE,{dmGained:t,runCount:x(this,Yi)})}}Vo=new WeakMap,Wo=new WeakMap,Xo=new WeakMap,Ss=new WeakMap,dr=new WeakMap,qo=new WeakMap,jo=new WeakMap,ys=new WeakMap,Yi=new WeakMap,Yo=new WeakSet,Pl=function(e){if(e.lt(Ce))throw new Error("AscensionSystem.computeDM: basis < 0 violates the B3 lifetimeBaseCredits invariant");if(e.eq(Ce))return Ce;const t=e.div(x(this,Wo)),n=fa(t,x(this,Xo));return x(this,Vo).mul(n).floor()};function mg(s){const{constant:e,creditsDivisor:t,exponent:n}=s;if(!Number.isFinite(e)||e<0)throw new Error(`AscensionSystem: invalid ascension.constant (K=${e}) — must be finite and >= 0`);if(!Number.isFinite(t)||t<=0)throw new Error(`AscensionSystem: invalid ascension.creditsDivisor (D=${t}) — must be finite and > 0`);if(!Number.isFinite(n)||n<=0)throw new Error(`AscensionSystem: invalid ascension.exponent (E=${n}) — must be finite and > 0`)}var Ko,$o,mn,Jt,Un,Vt,fr,ts,ec,$f;class gg{constructor(e,t,n){j(this,ts);j(this,Ko);j(this,$o);j(this,mn,Ce);j(this,Jt,Ce);j(this,Un,Ce);j(this,Vt,"UNINITIALIZED");j(this,fr);_g(t.ascension),X(this,Ko,e),X(this,$o,n),X(this,fr,pt(t.ascension.dmMultiplierPerPoint))}initFresh(){if(x(this,Vt)!=="UNINITIALIZED")throw new Error(`DarkMatterSystem.initFresh: expected UNINITIALIZED, got ${x(this,Vt)} — fresh-init must run exactly once at boot, before restore()`);X(this,Vt,"LIVE")}getState(){return x(this,Vt)}getBalance(){return x(this,mn)}getTotalSpent(){return x(this,Jt)}getLifetimeMinted(){return x(this,Un)}get(){return x(this,Vt)!=="LIVE"?Mt:Mt.plus(x(this,fr).times(x(this,Jt)))}getMultiplierPreview(e){if(e.lt(Ce))throw new Error(`DarkMatterSystem.getMultiplierPreview: additionalDM (${e.toString()}) must be >= 0 (EC-C3-15)`);return Mt.plus(x(this,fr).times(x(this,Jt).plus(e)))}addDarkMatter(e,t){if(e.lt(Ce))throw new Error(`DarkMatterSystem.addDarkMatter: amount (${e.toString()}) must be >= 0 (EC-C3-02)`);if(x(this,Vt)!=="LIVE")throw new Error(`DarkMatterSystem.addDarkMatter: state is ${x(this,Vt)}, must be LIVE — minting during boot/restore is a fault (EC-C3-12)`);X(this,mn,x(this,mn).plus(e)),X(this,Un,x(this,Un).plus(e)),re(this,ts,ec).call(this)}spendDarkMatter(e){if(e.lt(Ce))throw new Error(`DarkMatterSystem.spendDarkMatter: amount (${e.toString()}) must be >= 0 (EC-C3-04)`);if(x(this,Vt)!=="LIVE")throw new Error(`DarkMatterSystem.spendDarkMatter: state is ${x(this,Vt)}, must be LIVE — spending during boot/restore is a fault (systems R5)`);return e.eq(Ce)?!0:x(this,mn).gte(e)?(X(this,mn,x(this,mn).minus(e)),X(this,Jt,x(this,Jt).plus(e)),re(this,ts,ec).call(this),!0):!1}serialize(){return{darkMatter:Xi(x(this,mn)),totalDMSpent:Xi(x(this,Jt)),lifetimeDMMinted:Xi(x(this,Un))}}restore(e,t,n){var c;if(x(this,Vt)!=="UNINITIALIZED")throw new Error(`DarkMatterSystem.restore: expected UNINITIALIZED, got ${x(this,Vt)} — restore must run once at boot, not over a live ledger`);X(this,Vt,"RESTORING");const i=Fc(e),r=Fc(t);let o=Fc(n);if(o===Gh||o===Ms){const l=Ps(r)?r:Ce;Ps(i)?(o=i.plus(l),console.info("C3.restore: backfilled lifetimeDMMinted from darkMatter + (valid) totalDMSpent (legacy save)")):Ps(r)&&(o=l,console.info("C3.restore: backfilled lifetimeDMMinted from totalDMSpent only (legacy save, darkMatter unusable)"))}r===Ms&&console.error("C3.restore: totalDMSpent corrupt — defaulting to 0 (multiplier history lost)"),X(this,Jt,Ps(r)?r:Ce),X(this,Un,Ps(o)?o:Ce);const a=x(this,Un).minus(x(this,Jt));X(this,mn,a.lt(Ce)?Ce:a),i===Ms?console.warn("C3.restore: stored darkMatter corrupt/unusable — using ledger-derived value"):Ps(i)&&r!==Ms&&!i.eq(x(this,mn))&&console.warn("C3.restore: stored darkMatter disagrees with ledger — using derived value"),x(this,Jt).gt(x(this,Un))&&(console.error("C3.restore: LEDGER INCONSISTENCY — totalDMSpent > lifetimeDMMinted; clamping totalDMSpent down"),(c=x(this,$o))==null||c.call(this,"dm_ledger_inconsistency",{totalDMSpent:Xi(x(this,Jt)),lifetimeDMMinted:Xi(x(this,Un))}),X(this,Jt,x(this,Un)),X(this,mn,Ce)),re(this,ts,$f).call(this)}seedForTest(e,t=Ce){X(this,Vt,e),X(this,Jt,t)}}Ko=new WeakMap,$o=new WeakMap,mn=new WeakMap,Jt=new WeakMap,Un=new WeakMap,Vt=new WeakMap,fr=new WeakMap,ts=new WeakSet,ec=function(){x(this,Ko).emit(ee.DARK_MATTER_UPDATED,{balance:x(this,mn),totalSpent:x(this,Jt),multiplier:this.get()})},$f=function(){X(this,Vt,"LIVE"),re(this,ts,ec).call(this)};const Gh=Symbol("DarkMatter.ABSENT"),Ms=Symbol("DarkMatter.INVALID");function Ps(s){return s!==Gh&&s!==Ms}function Fc(s){if(s==null||s==="")return Gh;let e;try{e=pt(s)}catch(t){if(t instanceof tr)return Ms;throw t}return e.lt(Ce)?Ms:e}function _g(s){const e=s==null?void 0:s.dmMultiplierPerPoint;if(!Number.isFinite(e)||e<=0)throw new Error(`DarkMatterSystem: invalid ascension.dmMultiplierPerPoint (${String(e)}) — must be finite and > 0 (EC-C3-10)`)}class Ut extends Error{constructor(t,n){super(n);I(this,"code");this.name="CatalogValidationError",this.code=t,Object.setPrototypeOf(this,Ut.prototype)}}const bg=new Set(["globalMultiplier","tierBoost","offlineExtension","automationUnlock"]),Nu=9;function Iu(s){return gn(s)?s.max(Mt):Mt}function Uu(s,e){if(!Number.isFinite(s))return 1;const t=Math.floor(s);return t<1?1:t>e?e:t}function vg(s){if(!Number.isFinite(s.cost)||s.cost<0)throw new Ut("CATALOG_RESPEC_COST",`dmTree.respec.cost must be finite and >= 0 (got ${String(s.cost)})`)}var Zt,rn,Ts,pr,Jo,Ki,bt,bn,Dl,Ll,Nl,Il;class xg{constructor(e,t,n,i){j(this,bn);j(this,Zt,"UNINITIALIZED");j(this,rn);j(this,Ts);j(this,pr);j(this,Jo);j(this,Ki);j(this,bt,new Map);var r,o;X(this,rn,Mg(((r=e.dmTree)==null?void 0:r.nodes)??[])),X(this,Ts,n),X(this,pr,t),X(this,Jo,i),X(this,Ki,((o=e.dmTree)==null?void 0:o.respec)??{enabled:!1,cost:0,refundNodes:!1}),vg(x(this,Ki))}initFresh(){if(x(this,Zt)!=="UNINITIALIZED")throw new Error(`DMUpgradeTree.initFresh: expected UNINITIALIZED, got ${x(this,Zt)} — fresh-init must run exactly once at boot, before restore()`);X(this,Zt,"LIVE")}getState(){return x(this,Zt)}getNodeLevel(e){return x(this,bt).get(e)??0}getNodeCost(e){const t=x(this,rn).get(e);if(t===void 0)return Ce;const n=x(this,bt).get(e)??0;return n>=t.maxLevel?Ce:pt(t.baseCost).mul(pt(t.growth).pow(n)).floor()}canPurchase(e){const t=x(this,rn).get(e);if(t===void 0||(x(this,bt).get(e)??0)>=t.maxLevel)return!1;for(const n of t.prereqs)if((x(this,bt).get(n)??0)<1)return!1;return re(this,bn,Dl).call(this,t)?!1:x(this,Ts).getBalance().gte(this.getNodeCost(e))}getCommittedCapstone(){for(const[e,t]of x(this,bt))if(t>=1){const n=x(this,rn).get(e);if((n==null?void 0:n.isCapstone)===!0)return n.branch}return null}purchase(e){const t=x(this,rn).get(e);if(t===void 0)return{ok:!1,reason:"unknown_node"};const n=x(this,bt).get(e)??0;if(n>=t.maxLevel)return{ok:!1,reason:"maxed"};for(const o of t.prereqs)if((x(this,bt).get(o)??0)<1)return{ok:!1,reason:"locked_prereq"};if(re(this,bn,Dl).call(this,t))return{ok:!1,reason:"rival_capstone"};const i=this.getNodeCost(e);if(!x(this,Ts).spendDarkMatter(i))return{ok:!1,reason:"insufficient_dm"};const r=n+1;return x(this,bt).set(e,r),x(this,pr).emit(ee.DM_UPGRADE_PURCHASED,{nodeId:e,level:r}),t.isCapstone&&x(this,pr).emit(ee.DM_TREE_CAPSTONE_SELECTED,{branch:t.branch}),{ok:!0,level:r}}respecCapstone(){if(!x(this,Ki).enabled)return{ok:!1,reason:"respec_disabled"};let e=null;for(const[t,n]of x(this,bt))if(n>=1){const i=x(this,rn).get(t);if((i==null?void 0:i.isCapstone)===!0){e=t;break}}if(e===null)return{ok:!1,reason:"no_capstone"};if(!x(this,Ts).spendDarkMatter(pt(x(this,Ki).cost)))return{ok:!1,reason:"insufficient_dm"};if(x(this,bt).delete(e),x(this,Ki).refundNodes)for(const t of[...x(this,bt).keys()]){const n=x(this,rn).get(t);n!==void 0&&!n.isCapstone&&x(this,bt).delete(t)}return{ok:!0}}getExtraGlobalMultiplier(){return re(this,bn,Ll).call(this,e=>e.effectType==="globalMultiplier")}getTierBoost(e){return re(this,bn,Ll).call(this,t=>t.effectType==="tierBoost"&&t.effectParams.targetTier===e)}getOfflineCapBonusHours(){return re(this,bn,Il).call(this,e=>e.capHours??0)}getOfflineRateBonus(){return re(this,bn,Il).call(this,e=>e.rateBonus??0)}getWelcomeBackBonus(){return Mt}isManagerPersistent(){if(x(this,Zt)!=="LIVE")return!1;for(const[e,t]of x(this,bt)){if(t<1)continue;const n=x(this,rn).get(e);if((n==null?void 0:n.effectType)==="automationUnlock"&&!n.isCapstone)return!0}return!1}shouldPersistManagers(){return this.isManagerPersistent()}getAutomationEfficiencyBonus(){if(x(this,Zt)!=="LIVE")return Mt;for(const[e,t]of x(this,bt)){if(t<1)continue;const n=x(this,rn).get(e);if((n==null?void 0:n.effectType)==="automationUnlock"&&n.isCapstone){const i=n.effectParams.efficiencyBonus??0;return Iu(Mt.add(pt(i)))}}return Mt}serialize(){const e=[];for(const[t,n]of x(this,bt))n>=1&&e.push({id:t,level:n});return e.sort((t,n)=>t.id<n.id?-1:t.id>n.id?1:0),e}restore(e){var n;if(x(this,Zt)!=="UNINITIALIZED")throw new Error(`DMUpgradeTree.restore: expected UNINITIALIZED, got ${x(this,Zt)} — restore must run exactly once at boot, in place of initFresh()`);X(this,Zt,"RESTORING"),x(this,bt).clear();let t=null;for(const i of e){const r=x(this,rn).get(i.id);if(r===void 0){console.warn(`C4.restore: unknown node id "${i.id}" — skipping (catalog migration, EC-C4-09)`);continue}if(r.isCapstone){if(!Number.isFinite(i.level)||i.level<1){console.warn(`C4.restore: capstone "${i.id}" has invalid level ${String(i.level)} — dropping (no fabricated commitment, EC-C4-10)`);continue}const o=Uu(i.level,r.maxLevel);if(t===null)t=i.id,x(this,bt).set(i.id,o);else{const a=x(this,rn).get(t);if(a!==void 0&&a.branch===r.branch)x(this,bt).set(i.id,o);else{const c=t,l=c<i.id?c:i.id,h=l===i.id?c:i.id;console.error(`C4.restore: two rival capstones "${t}" and "${i.id}" — keeping lowest id "${l}", dropping "${h}" (EC-C4-11)`),(n=x(this,Jo))==null||n.call(this,"dm_tree_multi_capstone",{kept:l,dropped:h}),x(this,bt).delete(h),l===i.id&&x(this,bt).set(i.id,o),t=l}}}else{const o=Uu(i.level,r.maxLevel);o!==i.level&&console.warn(`C4.restore: node "${i.id}" level ${String(i.level)} coerced to ${o} in [1, ${r.maxLevel}] (EC-C4-10)`),x(this,bt).set(i.id,o)}}X(this,Zt,"LIVE")}seedForTest(e,t={}){X(this,Zt,e);for(const[n,i]of Object.entries(t))x(this,bt).set(n,i)}}Zt=new WeakMap,rn=new WeakMap,Ts=new WeakMap,pr=new WeakMap,Jo=new WeakMap,Ki=new WeakMap,bt=new WeakMap,bn=new WeakSet,Dl=function(e){if(!e.isCapstone)return!1;const t=this.getCommittedCapstone();return t!==null&&t!==e.branch},Ll=function(e){if(x(this,Zt)!=="LIVE")return Mt;let t=Mt;for(const{node:n,level:i}of re(this,bn,Nl).call(this,e)){const r=n.effectParams.perLevelBonus??0;t=t.mul(Mt.add(pt(r).mul(i)))}return Iu(t)},Nl=function(e){const t=[];for(const[n,i]of x(this,bt)){if(i<1)continue;const r=x(this,rn).get(n);r!==void 0&&e(r)&&t.push({node:r,level:i})}return t.sort((n,i)=>n.node.id<i.node.id?-1:n.node.id>i.node.id?1:0),t},Il=function(e){if(x(this,Zt)!=="LIVE")return 0;let t=0;for(const{node:n}of re(this,bn,Nl).call(this,i=>i.effectType==="offlineExtension"))t+=e(n.effectParams);return t};function Mg(s){const e=new Map;for(const n of s){if(e.has(n.id))throw new Ut("CATALOG_DUP_ID",`dmTree: duplicate node id "${n.id}"`);e.set(n.id,n)}for(const n of s){if(!Number.isInteger(n.maxLevel)||n.maxLevel<1)throw new Ut("CATALOG_MAXLEVEL",`dmTree node "${n.id}": maxLevel must be a positive integer (got ${String(n.maxLevel)})`);if(!Number.isFinite(n.baseCost)||n.baseCost<1)throw new Ut("CATALOG_BASECOST",`dmTree node "${n.id}": baseCost must be finite and >= 1 (got ${String(n.baseCost)})`);if(!Number.isFinite(n.growth)||n.growth<1)throw new Ut("CATALOG_GROWTH",`dmTree node "${n.id}": growth must be finite and >= 1.0 (got ${String(n.growth)})`);if(n.maxLevel>1&&(n.growth<=1||Math.floor(n.baseCost*n.growth)<=n.baseCost))throw new Ut("CATALOG_FLAT_REPEATABLE",`dmTree node "${n.id}": repeatable node requires growth > 1.0 and a non-flat cost curve (got growth ${String(n.growth)}, baseCost ${String(n.baseCost)})`);if(!bg.has(n.effectType))throw new Ut("CATALOG_EFFECT_TYPE",`dmTree node "${n.id}": invalid effectType "${String(n.effectType)}"`);if(n.effectType==="globalMultiplier"||n.effectType==="tierBoost"){const i=n.effectParams.perLevelBonus;if(!Number.isFinite(i)||i<=0)throw new Ut("CATALOG_PERLEVELBONUS",`dmTree node "${n.id}": ${n.effectType} requires effectParams.perLevelBonus finite and > 0 (got ${String(i)})`)}if(n.effectType==="tierBoost"){const i=n.effectParams.targetTier;if(!Number.isInteger(i)||i<1||i>Nu)throw new Ut("CATALOG_TARGET_TIER",`dmTree node "${n.id}": tierBoost targetTier must be an integer in 1..${Nu} (got ${String(i)})`)}if(n.effectType==="offlineExtension"){const{capHours:i,rateBonus:r}=n.effectParams;if(!Number.isFinite(i)||i<0||!Number.isFinite(r)||r<0)throw new Ut("CATALOG_OFFLINE_PARAMS",`dmTree node "${n.id}": offlineExtension requires effectParams.capHours and rateBonus finite and >= 0 (got capHours ${String(i)}, rateBonus ${String(r)})`)}if(n.effectType==="automationUnlock"){if(n.isCapstone){const i=n.effectParams.efficiencyBonus;if(!Number.isFinite(i)||i<=0)throw new Ut("CATALOG_EFFICIENCYBONUS",`dmTree node "${n.id}": automationUnlock capstone requires effectParams.efficiencyBonus finite and > 0 (got ${String(i)})`)}else if(n.effectParams.efficiencyBonus!==void 0)throw new Ut("CATALOG_MISPLACED_EFFICIENCYBONUS",`dmTree node "${n.id}": a non-capstone automationUnlock (manager-persistence) must NOT declare effectParams.efficiencyBonus (the efficiency scalar is a Cortex CAPSTONE effect, F-C4-06)`)}}const t=new Map;for(const n of s){if(!n.isCapstone)continue;const i=t.get(n.branch);if(i!==void 0)throw new Ut("CATALOG_DUP_CAPSTONE",`dmTree branch "${n.branch}": more than one capstone ("${i}" and "${n.id}")`);t.set(n.branch,n.id)}for(const n of s)for(const i of n.prereqs){const r=e.get(i);if(r===void 0)throw new Ut("CATALOG_MISSING_PREREQ",`dmTree node "${n.id}": prereq "${i}" is not in the catalog`);if(r.branch!==n.branch)throw new Ut("CATALOG_CROSS_BRANCH_PREREQ",`dmTree node "${n.id}" (branch "${n.branch}"): prereq "${i}" is in a different branch ("${r.branch}")`)}Eg(s,e);for(const n of s)for(const i of n.prereqs){const r=e.get(i);if(r.tier>=n.tier)throw new Ut("CATALOG_PREREQ_TIER_ORDER",`dmTree node "${n.id}" (tier ${n.tier}): prereq "${i}" must be a strictly lower tier (got tier ${r.tier})`)}return e}function Eg(s,e){const r=new Map;for(const a of s)r.set(a.id,0);const o=a=>{r.set(a,1);const c=e.get(a);if(c!==void 0)for(const l of c.prereqs){const h=r.get(l);if(h===1)throw new Ut("CATALOG_CYCLE",`dmTree: prereq cycle detected involving "${a}" → "${l}"`);h===0&&o(l)}r.set(a,2)};for(const a of s)r.get(a.id)===0&&o(a.id)}const Sg=1,yg=9;var Ti,Zo,mr,gr,_r,Hn,ni,Qo,ea,ta,is,Jf,Zf,Qf;class Tg{constructor(e,t,n,i){j(this,is);j(this,Ti);j(this,Zo);j(this,mr);j(this,gr);j(this,_r);j(this,Hn,new Set);j(this,ni,new Set);j(this,Qo,!1);j(this,ea,0);j(this,ta);var r;X(this,Ti,e),X(this,Zo,n),X(this,mr,i),X(this,gr,t.upgrades.milestones.map(o=>o.ownedCount).slice().sort((o,a)=>o-a)),X(this,_r,(((r=t.milestones)==null?void 0:r.creditsScale)??[]).map(o=>({threshold:pt(o.threshold),thresholdNum:Number(o.threshold),name:o.name})).sort((o,a)=>o.threshold.gt(a.threshold)?1:o.threshold.lt(a.threshold)?-1:0)),X(this,ta,[x(this,Ti).on(ee.GENERATOR_PURCHASED,o=>re(this,is,Jf).call(this,o)),x(this,Ti).on(ee.CREDITS_UPDATED,()=>re(this,is,Zf).call(this)),x(this,Ti).on(ee.GENERATORS_RESET_COMPLETE,()=>re(this,is,Qf).call(this))])}dispose(){for(const e of x(this,ta))e()}getState(){return{celebratedOwned:[...x(this,Hn)],celebratedLifetime:[...x(this,ni)]}}restore(e){if(x(this,Hn).clear(),e.celebratedOwned===void 0)for(let t=Sg;t<=yg;t++){const n=x(this,Zo).getOwned(t);for(const i of x(this,gr))n>=i&&x(this,Hn).add(`${t}:${i}`)}else for(const t of e.celebratedOwned)x(this,Hn).add(t);if(x(this,ni).clear(),e.celebratedLifetime===void 0){const t=x(this,mr).getLifetimeCredits();for(const n of x(this,_r))t.gte(n.threshold)&&x(this,ni).add(`credits:${n.name}`)}else for(const t of e.celebratedLifetime)x(this,ni).add(t);X(this,Qo,!0)}}Ti=new WeakMap,Zo=new WeakMap,mr=new WeakMap,gr=new WeakMap,_r=new WeakMap,Hn=new WeakMap,ni=new WeakMap,Qo=new WeakMap,ea=new WeakMap,ta=new WeakMap,is=new WeakSet,Jf=function({tier:e,previousOwned:t,owned:n}){const i=x(this,gr),r=i.filter(c=>t<c&&c<=n),o=r.filter(c=>!x(this,Hn).has(`${e}:${c}`)).length;if(o===0)return;const a=++ba(this,ea)._;for(const c of r){const l=`${e}:${c}`;x(this,Hn).has(l)||(x(this,Hn).add(l),x(this,Ti).emit(ee.MILESTONE_REACHED,{type:"owned_count",tier:e,threshold:c,ordinal:i.indexOf(c)+1,seriesLength:i.length,burstId:a,burstSize:o}))}},Zf=function(){if(!x(this,Qo))return;const e=x(this,mr).getLifetimeCredits(),t=x(this,_r),n=t.filter(r=>e.gte(r.threshold)&&!x(this,ni).has(`credits:${r.name}`)).length;if(n===0)return;const i=++ba(this,ea)._;for(let r=0;r<t.length;r++){const o=t[r],a=`credits:${o.name}`;!e.gte(o.threshold)||x(this,ni).has(a)||(x(this,ni).add(a),x(this,Ti).emit(ee.MILESTONE_REACHED,{type:"credits_scale",threshold:o.thresholdNum,name:o.name,ordinal:r+1,seriesLength:t.length,burstId:i,burstSize:n}))}},Qf=function(){x(this,Hn).clear()};const ho=1,Ag="stellarforge.save",Ou="stellarforge.save.backup",wg="stellarforge.save.corrupt";class zh extends Error{constructor(t,n){super(`save blob saveVersion ${t} is newer than this build's ${n} — refusing to interpret a future schema`);I(this,"saveVersion");I(this,"currentVersion");this.name="SaveVersionTooNewError",this.saveVersion=t,this.currentVersion=n,Object.setPrototypeOf(this,zh.prototype)}}const Rg=["x1","x10","xmax"],Hh="x1",Cg=1,Pg=9;function Dg(){return{balance:"0",lifetimeCredits:"0",lifetimeBaseCredits:"0",buyMode:Hh}}function ep(){return{purchasedUpgrades:[],managerUnlocked:{}}}function Lg(){return{celebratedOwned:[],celebratedLifetime:[]}}function Fu(s){return{saveVersion:ho,lastSeen:s,credits:Dg(),generators:[],upgrades:ep(),darkMatter:"0",totalDMSpent:"0",lifetimeDMMinted:"0",dmUpgrades:[],milestones:Lg()}}function Ng(s){return JSON.stringify(s)}function qr(s){return typeof s=="object"&&s!==null&&!Array.isArray(s)}function ku(s,e){const t=qr(s)?s:{},n=typeof t.saveVersion=="number"?t.saveVersion:0;if(n>ho)throw new zh(n,ho);const i=qr(t.credits)?t.credits:{},r={balance:typeof i.balance=="string"?i.balance:"0",lifetimeCredits:typeof i.lifetimeCredits=="string"?i.lifetimeCredits:"0",lifetimeBaseCredits:typeof i.lifetimeBaseCredits=="string"?i.lifetimeBaseCredits:"0",buyMode:i.buyMode??Hh},o=qr(t.upgrades)?t.upgrades:void 0,a=o?{purchasedUpgrades:Array.isArray(o.purchasedUpgrades)?o.purchasedUpgrades:[],managerUnlocked:qr(o.managerUnlocked)?o.managerUnlocked:{}}:ep(),c=qr(t.milestones)?t.milestones:void 0,l=c?{celebratedOwned:Array.isArray(c.celebratedOwned)?c.celebratedOwned:[],celebratedLifetime:Array.isArray(c.celebratedLifetime)?c.celebratedLifetime:[]}:{celebratedOwned:void 0,celebratedLifetime:void 0};return{saveVersion:ho,lastSeen:typeof t.lastSeen=="number"?t.lastSeen:0,credits:r,generators:Array.isArray(t.generators)?t.generators:[],upgrades:a,darkMatter:typeof t.darkMatter=="string"?t.darkMatter:"0",totalDMSpent:typeof t.totalDMSpent=="string"?t.totalDMSpent:"0",lifetimeDMMinted:typeof t.lifetimeDMMinted=="string"?t.lifetimeDMMinted:"0",dmUpgrades:Array.isArray(t.dmUpgrades)?t.dmUpgrades:[],milestones:l,...typeof t.integrity=="string"?{integrity:t.integrity}:{}}}function Bu(s,e){const t=[];for(const r of s.generators){if(!r||typeof r.tier!="number"||r.tier<Cg||r.tier>Pg)continue;const o=typeof r.owned=="number"&&Number.isInteger(r.owned)&&r.owned>=0?r.owned:0;t.push({tier:r.tier,owned:o})}const n=Rg.includes(s.credits.buyMode)?s.credits.buyMode:Hh,i=Ig(s.lastSeen,e);return{...s,lastSeen:i,credits:{...s.credits,buyMode:n},generators:t}}function Ig(s,e){return typeof s!="number"||!Number.isFinite(s)||s<=0?e:s}const kc={autosaveIntervalMs:15e3,clockSkewToleranceMs:1e4,saveKey:Ag},Ug=5e3,Og=3e4,Fg=0,kg=6e4;function Gu(s,e,t){return Math.min(t,Math.max(e,s))}function Bg(s){const e=s.save,t=e==null?void 0:e.autosaveIntervalMs,n=e==null?void 0:e.clockSkewToleranceMs,i=e==null?void 0:e.saveKey;return{autosaveIntervalMs:typeof t=="number"&&Number.isFinite(t)?Gu(t,Ug,Og):kc.autosaveIntervalMs,clockSkewToleranceMs:typeof n=="number"&&Number.isFinite(n)?Gu(n,Fg,kg):kc.clockSkewToleranceMs,saveKey:typeof i=="string"&&i.trim().length>0?i:kc.saveKey}}const Gg=["balance","lifetimeCredits","lifetimeBaseCredits"];function zg(s=globalThis,e=globalThis.document){return{setTimeout:(t,n)=>s.setTimeout(t,n),clearTimeout:t=>s.clearTimeout(t),addEventListener:(t,n)=>{t==="visibilitychange"?e.addEventListener("visibilitychange",n):s.addEventListener("pagehide",n)},removeEventListener:(t,n)=>{t==="visibilitychange"?e.removeEventListener("visibilitychange",n):s.removeEventListener("pagehide",n)},isHidden:()=>e.visibilityState==="hidden"}}const Hg=2e3;var ii,Qt,br,si,As,ri,vr,$i,xr,Mr,Er,on,Ai,Sr,na,ia,sa,mt,tc,Ul,Ol,tp,Fl,kl,np,ip,sp,rp;class Vg{constructor(e){j(this,mt);j(this,ii);j(this,Qt);j(this,br);j(this,si);j(this,As);j(this,ri);j(this,vr);j(this,$i,0);j(this,xr,!0);j(this,Mr,Number.NEGATIVE_INFINITY);j(this,Er,!1);j(this,on);j(this,Ai,!1);j(this,Sr);j(this,na,Number.NEGATIVE_INFINITY);j(this,ia,()=>{var e;(e=x(this,on))!=null&&e.isHidden()&&this.saveNow()});j(this,sa,()=>{this.saveNow()});X(this,ii,e.storage),X(this,Qt,e.collaborators),X(this,br,e.config),X(this,si,e.bus),X(this,As,e.now??(()=>Date.now())),X(this,ri,Bg(e.config)),X(this,vr,e.tabId??"d1"),X(this,on,e.env)}get saveKey(){return x(this,ri).saveKey}load(){const e=x(this,As).call(this);X(this,Er,!1);const t=x(this,ii).getItem(x(this,ri).saveKey);let n;if(t===null)n=Fu(e);else{let i;try{i=JSON.parse(t)}catch{return n=re(this,mt,Ol).call(this,t,e,"corrupt_primary"),re(this,mt,Ul).call(this,n),{lastSeen:n.lastSeen}}const r=i.savedAt;typeof r=="number"&&Number.isFinite(r)&&X(this,Mr,r);const o=ku(i,x(this,br)),a=Bu(o,e),c=re(this,mt,kl).call(this,a.credits);c!==null?n=re(this,mt,tp).call(this,t,a,e,c):(n={...a,lastSeen:re(this,mt,np).call(this,a.lastSeen,e)},X(this,Er,!0))}return re(this,mt,Ul).call(this,n),{lastSeen:n.lastSeen}}saveNow(){if(!x(this,xr))return;const e=x(this,As).call(this);re(this,mt,ip).call(this);const t=Ng({...re(this,mt,rp).call(this),tabId:x(this,vr),savedAt:e});try{x(this,ii).setItem(x(this,ri).saveKey,t)}catch(n){re(this,mt,sp).call(this,n),x(this,xr)&&x(this,Ai)&&re(this,mt,tc).call(this);return}if(X(this,Mr,e),x(this,Er))try{x(this,ii).setItem(Ou,t)}catch{}x(this,Ai)&&re(this,mt,tc).call(this)}startAutosave(){x(this,Ai)||x(this,on)!==void 0&&(X(this,Ai,!0),x(this,on).addEventListener("visibilitychange",x(this,ia)),x(this,on).addEventListener("pagehide",x(this,sa)),re(this,mt,tc).call(this))}stopAutosave(){x(this,Ai)&&(X(this,Ai,!1),x(this,on)!==void 0&&(x(this,on).removeEventListener("visibilitychange",x(this,ia)),x(this,on).removeEventListener("pagehide",x(this,sa)),x(this,on).clearTimeout(x(this,Sr))))}onAscensionSaved(){this.saveNow()}onMajorPurchase(){const e=x(this,As).call(this);e<x(this,na)||(X(this,na,e+Hg),this.saveNow())}getLastSeen(){return x(this,$i)}resetLastSeen(e){Number.isFinite(e)&&X(this,$i,Math.max(e,x(this,$i)))}}ii=new WeakMap,Qt=new WeakMap,br=new WeakMap,si=new WeakMap,As=new WeakMap,ri=new WeakMap,vr=new WeakMap,$i=new WeakMap,xr=new WeakMap,Mr=new WeakMap,Er=new WeakMap,on=new WeakMap,Ai=new WeakMap,Sr=new WeakMap,na=new WeakMap,ia=new WeakMap,sa=new WeakMap,mt=new WeakSet,tc=function(){x(this,on)!==void 0&&(x(this,on).clearTimeout(x(this,Sr)),X(this,Sr,x(this,on).setTimeout(()=>{this.saveNow()},x(this,ri).autosaveIntervalMs)))},Ul=function(e){var t,n,i;x(this,Qt).upgrades.loadState(e.upgrades),x(this,Qt).generators.restore(e.generators),x(this,Qt).credits.restore(e.credits),(t=x(this,Qt).darkMatter)==null||t.restore(e.darkMatter,e.totalDMSpent,e.lifetimeDMMinted),(n=x(this,Qt).dmTree)==null||n.restore(e.dmUpgrades),(i=x(this,Qt).milestones)==null||i.restore(e.milestones),X(this,$i,e.lastSeen)},Ol=function(e,t,n){x(this,ii).setItem(wg,e);const i=re(this,mt,Fl).call(this,t);return i!==null?(i.lastSeen=t,x(this,si).emit(ee.SAVE_LOAD_FAILED,{reason:n,recoveredFromBackup:!0}),i):(x(this,si).emit(ee.SAVE_LOAD_FAILED,{reason:n,recoveredFromBackup:!1}),Fu(t))},tp=function(e,t,n,i){const r=re(this,mt,Fl).call(this,n);return r!==null?(x(this,si).emit(ee.SAVE_FAILED,{reason:"corrupted_field",field:i}),{...t,credits:r.credits,lastSeen:n}):re(this,mt,Ol).call(this,e,n,"corrupted_field")},Fl=function(e){const t=x(this,ii).getItem(Ou);if(t===null)return null;try{const n=ku(JSON.parse(t),x(this,br)),i=Bu(n,e);return re(this,mt,kl).call(this,i.credits)!==null?null:i}catch{return null}},kl=function(e){for(const t of Gg)try{vo(e[t])}catch{return t}return null},np=function(e,t){return e>t+x(this,ri).clockSkewToleranceMs?t:e},ip=function(){let e;try{e=x(this,ii).getItem(x(this,ri).saveKey)}catch{return}if(e===null)return;let t;try{t=JSON.parse(e)}catch{return}const n=typeof t.savedAt=="number"?t.savedAt:void 0,i=typeof t.tabId=="string"?t.tabId:void 0;n!==void 0&&i!==void 0&&n>x(this,Mr)&&i!==x(this,vr)&&x(this,si).emit(ee.SAVE_CONFLICT,{otherSavedAt:n})},sp=function(e){const t=e==null?void 0:e.name;if(t==="QuotaExceededError"||t==="NS_ERROR_DOM_QUOTA_REACHED"){x(this,si).emit(ee.SAVE_FAILED,{reason:"quota_exceeded"});return}X(this,xr,!1),x(this,si).emit(ee.SAVE_FAILED,{reason:"storage_unavailable"})},rp=function(){var t,n,i;const e=(t=x(this,Qt).darkMatter)==null?void 0:t.serialize();return{saveVersion:ho,lastSeen:x(this,$i),credits:x(this,Qt).credits.serialize(),generators:x(this,Qt).generators.serialize(),upgrades:x(this,Qt).upgrades.getState(),darkMatter:(e==null?void 0:e.darkMatter)??"0",totalDMSpent:(e==null?void 0:e.totalDMSpent)??"0",lifetimeDMMinted:(e==null?void 0:e.lifetimeDMMinted)??"0",dmUpgrades:((n=x(this,Qt).dmTree)==null?void 0:n.serialize())??[],milestones:((i=x(this,Qt).milestones)==null?void 0:i.getState())??{celebratedOwned:[],celebratedLifetime:[]}}};const Wg=36e5,Xg=1e3,qg=5e3;var yr,ws,ra,oa,Tr,aa,ca,la,ha,ua,da,Kn,op,ap,Bl,cp;class jg{constructor(e){j(this,Kn);j(this,yr);j(this,ws);j(this,ra);j(this,oa);j(this,Tr);j(this,aa);j(this,ca);j(this,la);j(this,ha);j(this,ua,!1);j(this,da,!1);X(this,yr,e.bus),X(this,ws,e.clock),X(this,ra,e.baseRate),X(this,oa,e.deposit),X(this,Tr,e.nowProvider),X(this,aa,e.config.offline.earningRate),X(this,ca,e.config.offline.baseCapHours),X(this,la,e.briefThresholdMs??qg),X(this,ha,[x(this,yr).on(ee.CLOCK_GAP_DETECTED,t=>re(this,Kn,op).call(this,t))])}dispose(){for(const e of x(this,ha))e()}markRestoreComplete(){X(this,da,!0)}applyOfflineProgress(){if(x(this,ua))return;X(this,ua,!0);const e=x(this,ws).getLastSeen(),t=x(this,Tr).call(this)-e;re(this,Kn,Bl).call(this,t,"load")}}yr=new WeakMap,ws=new WeakMap,ra=new WeakMap,oa=new WeakMap,Tr=new WeakMap,aa=new WeakMap,ca=new WeakMap,la=new WeakMap,ha=new WeakMap,ua=new WeakMap,da=new WeakMap,Kn=new WeakSet,op=function(e){if(!x(this,da))return;const t=x(this,Tr).call(this);x(this,ws).resetLastSeen(t);const n=x(this,ws).getLastSeen()>t;re(this,Kn,Bl).call(this,e.elapsedMs,"gap",n?"reset_not_applied":void 0)},ap=function(){return x(this,ca)*Wg},Bl=function(e,t,n){let i=n,r=e;Number.isFinite(e)||(r=0,i="non_finite");const o=re(this,Kn,ap).call(this),a=Yg(r,0,o),c=a/Xg;let l=x(this,ra).getTotalBaseRate();gn(l)||(l=Ce,i="non_finite");const h=x(this,aa)*c;let u;Number.isFinite(h)?u=l.times(pt(h)):(i="non_finite",u=Ce);const d=re(this,Kn,cp).call(this,t,e,a,i);u.gt(Ce)&&gn(u)&&x(this,oa).addOfflineEarnings(u);const p={baseLump:u,elapsedSeconds:c,reason:d};i!==void 0&&(p.diagnostic=i),x(this,yr).emit(ee.OFFLINE_EARNINGS_APPLIED,p)},cp=function(e,t,n,i){return e==="gap"?"gap":i==="non_finite"?"brief":t<0?"clock_back":n<x(this,la)?"brief":"away"};function Yg(s,e,t){return Math.min(t,Math.max(e,s))}const Kg={maxCatchupSteps:5,gapThresholdMs:3e3,liveBudgetCeilingMs:500};function $g(s){const e=s.now??(()=>Date.now()),t={...Kg,...s.clockTunables},n=new eg,i=Ff(s.configJson),r=new ng({tickRateMs:i.currencies.credits.tickRateMs,maxCatchupSteps:t.maxCatchupSteps,gapThresholdMs:t.gapThresholdMs,liveBudgetCeilingMs:t.liveBudgetCeilingMs},n),o=new gg(n,i),a=new xg(i,n,o),c=Ym(o,a);let l=null;const u=Km({getBoostMultiplier:E=>l===null?Mt:l.getBoostMultiplier(E)},a),d=new ig(i,n,u),p=new og(i,n,d,c,r),g=new hg(i,n,d,p,a);l=g;const _=i.upgrades.managers.map((E,D)=>D+1),m=new ug({bus:n,clock:r,b2:d,b3:p,b4:g,reserveFraction:i.upgrades.automationReserveFraction,enabledTiers:_}),f=new dg(n,d),v=new pg(i,n,d,p,g);v.setDarkMatterProvider(o),v.assertRealProviderInstalled();const M=new Tg(n,i,d,p),b={serialize:()=>{const E=p.serialize();return{balance:E.balance,lifetimeCredits:E.lifetimeCredits,lifetimeBaseCredits:E.lifetimeBaseCredits,buyMode:E.buyMode??"x1"}},restore:E=>p.restore(E)},w=new Vg({storage:s.storage,collaborators:{upgrades:g,generators:d,credits:b,darkMatter:o,dmTree:a,milestones:M},config:i,bus:n,now:e,tabId:s.tabId,env:s.autosaveEnv}),A=new jg({config:i,bus:n,clock:w,baseRate:d,deposit:p,nowProvider:e});let C;const P=n.on(ee.OFFLINE_EARNINGS_APPLIED,E=>{C=E}),{lastSeen:T}=w.load();return A.applyOfflineProgress(),w.resetLastSeen(e()),A.markRestoreComplete(),P(),{bus:n,clock:r,generators:d,credits:p,upgrades:g,automation:m,epoch:f,ascension:v,darkMatter:o,dmTree:a,milestones:M,save:w,offline:A,loadedLastSeen:T,offlineReport:C,dispose(){A.dispose(),M.dispose(),f.dispose(),p.dispose(),d.dispose()}}}const Jg=30,zu=4,Bc=1500,Zg=[{key:"Space",intent:ee.INTENT_TAP_FORGE}];var qe=(s=>(s[s.GAMEPLAY=0]="GAMEPLAY",s[s.SOFT_OVERLAY=1]="SOFT_OVERLAY",s[s.MODAL=2]="MODAL",s[s.DISABLED=3]="DISABLED",s))(qe||{});const Hu=4,Qg={[ee.INTENT_TAP_FORGE]:{[qe.GAMEPLAY]:"live",[qe.SOFT_OVERLAY]:"live",[qe.MODAL]:"suppressed",[qe.DISABLED]:"suppressed"},[ee.INTENT_BUY_GENERATOR]:{[qe.GAMEPLAY]:"live",[qe.SOFT_OVERLAY]:"suppressed",[qe.MODAL]:"suppressed",[qe.DISABLED]:"suppressed"},[ee.INTENT_SET_BUY_MODE]:{[qe.GAMEPLAY]:"live",[qe.SOFT_OVERLAY]:"suppressed",[qe.MODAL]:"suppressed",[qe.DISABLED]:"suppressed"},[ee.INTENT_CONFIRM_ASCENSION]:{[qe.GAMEPLAY]:"suppressed",[qe.SOFT_OVERLAY]:"suppressed",[qe.MODAL]:"live",[qe.DISABLED]:"suppressed"},[ee.INTENT_HOLD_PROGRESS]:{[qe.GAMEPLAY]:"suppressed",[qe.SOFT_OVERLAY]:"suppressed",[qe.MODAL]:"live",[qe.DISABLED]:"suppressed"},[ee.INTENT_DISMISS_MODAL]:{[qe.GAMEPLAY]:"suppressed",[qe.SOFT_OVERLAY]:"suppressed",[qe.MODAL]:"live",[qe.DISABLED]:"suppressed"},[ee.INTENT_DISMISS_OVERLAY]:{[qe.GAMEPLAY]:"suppressed",[qe.SOFT_OVERLAY]:"live",[qe.MODAL]:"suppressed",[qe.DISABLED]:"suppressed"}};class e_{constructor(e,t=Zg,n={}){I(this,"_bus");I(this,"_keymap");I(this,"_hitAreas",[]);I(this,"_presses",new Map);I(this,"_lastAcceptedDown",new Map);I(this,"_hold");I(this,"_contextStack");I(this,"_logger");this._bus=e,this._keymap=t,this._contextStack=[n.initialContext??qe.GAMEPLAY],this._logger=n.logger}get context(){return this._contextStack[this._contextStack.length-1]}pushContext(e){var t;if(this._contextStack.length>=Hu){(t=this._logger)==null||t.call(this,`[A4 input] pushContext rejected: stack already at max depth ${Hu} (attempted context ${qe[e]}). Likely a consumer push/pop imbalance.`);return}this._hold!==void 0&&(this._bus.emit(ee.INTENT_HOLD_PROGRESS,{ratio:0,source:this._hold.source}),this._hold=void 0),this._presses.clear(),this._contextStack.push(e)}popContext(){this._contextStack.length>1&&this._contextStack.pop()}markReady(){this._contextStack=[qe.GAMEPLAY]}get keymap(){return this._keymap}registerHitArea(e){if(e.kind==="buy"&&!(Number.isInteger(e.tier)&&e.tier>=1))throw new Error(`InputTranslator.registerHitArea: buy area '${e.id}' requires an integer tier >= 1 (got ${String(e.tier)}) — a wrong tier buys the wrong generator (AC-A4-03).`);this._hitAreas.push(e)}clearHitAreas(){this._hitAreas.length=0,this._lastAcceptedDown.clear(),this._hold=void 0}onPointerDown(e){if(this.context===qe.DISABLED)return;const t=this._resolveHitArea(e.x,e.y);if(t===void 0)return;const n=this._lastAcceptedDown.get(t.id);if(!this._isSyntheticDup(e,n)){if(this._lastAcceptedDown.set(t.id,{wasTouch:e.wasTouch,x:e.x,y:e.y,t:e.timeStamp,pointerId:e.pointerId}),t.kind==="forge"){this._isLive(ee.INTENT_TAP_FORGE)&&this._bus.emit(ee.INTENT_TAP_FORGE,{source:this._source(e)});return}if(t.kind==="ascension"){this._hold={pointerId:e.pointerId,area:t,heldMs:0,confirmed:!1,source:this._source(e),inside:!0};return}this._presses.set(e.pointerId,{area:t,state:"pressed"})}}onPointerUp(e){if(this.context===qe.DISABLED)return;if(this._hold!==void 0&&this._hold.pointerId===e.pointerId){this._hold=void 0;return}const t=this._presses.get(e.pointerId);if(t===void 0||(this._presses.delete(e.pointerId),t.state==="cancelled")||!this._inside(t.area,e.x,e.y))return;const n=this._source(e);switch(t.area.kind){case"buy":this._isLive(ee.INTENT_BUY_GENERATOR)&&this._bus.emit(ee.INTENT_BUY_GENERATOR,{tier:t.area.tier,source:n});break;case"buyMode":this._isLive(ee.INTENT_SET_BUY_MODE)&&this._bus.emit(ee.INTENT_SET_BUY_MODE,{mode:t.area.mode,source:n});break;case"dismissModal":this._isLive(ee.INTENT_DISMISS_MODAL)&&(this._bus.emit(ee.INTENT_DISMISS_MODAL,{source:n}),this.context===qe.MODAL&&this.popContext());break;case"dismissOverlay":this._isLive(ee.INTENT_DISMISS_OVERLAY)&&(this._bus.emit(ee.INTENT_DISMISS_OVERLAY,{source:n}),this.context===qe.SOFT_OVERLAY&&this.popContext());break}}onPointerMove(e){if(this.context===qe.DISABLED)return;if(this._hold!==void 0&&this._hold.pointerId===e.pointerId){const n=this._inside(this._hold.area,e.x,e.y);this._hold.inside&&!n?(this._hold.inside=!1,this._hold.heldMs=0,this._bus.emit(ee.INTENT_HOLD_PROGRESS,{ratio:0,source:this._hold.source})):!this._hold.inside&&n&&(this._hold.inside=!0);return}const t=this._presses.get(e.pointerId);t===void 0||t.state!=="pressed"||this._inside(t.area,e.x,e.y)||(t.state="cancelled")}onPointerCancel(e){this._hold!==void 0&&this._hold.pointerId===e&&(this._bus.emit(ee.INTENT_HOLD_PROGRESS,{ratio:0,source:this._hold.source}),this._hold=void 0),this._presses.delete(e)}onBlur(){this._hold!==void 0&&(this._bus.emit(ee.INTENT_HOLD_PROGRESS,{ratio:0,source:this._hold.source}),this._hold=void 0),this._presses.clear()}onKeyDown(e){var n;if(this.context===qe.DISABLED)return;const t=this._keymap.find(i=>i.key===e.key);t!==void 0&&((n=e.preventDefault)==null||n.call(e),!e.repeat&&this._isLive(t.intent)&&this._bus.emit(t.intent,{source:"key"}))}tick(e){if(this.context===qe.DISABLED||this._hold===void 0||!this._hold.inside)return;this._hold.heldMs+=Math.max(0,e);const t=Math.min(this._hold.heldMs,Bc);if(this._hold.heldMs>=Bc){this._hold.confirmed||(this._hold.confirmed=!0,this._isLive(ee.INTENT_CONFIRM_ASCENSION)&&this._bus.emit(ee.INTENT_CONFIRM_ASCENSION,{source:this._hold.source}));return}if(this._isLive(ee.INTENT_HOLD_PROGRESS)){const n=t/Bc;this._bus.emit(ee.INTENT_HOLD_PROGRESS,{ratio:n,source:this._hold.source})}}_isLive(e){return Qg[e][this.context]==="live"}_isSyntheticDup(e,t){return t!==void 0&&t.wasTouch&&!e.wasTouch&&e.timeStamp-t.t<Jg&&Math.abs(e.x-t.x)<=zu&&Math.abs(e.y-t.y)<=zu&&e.pointerId!==t.pointerId}_resolveHitArea(e,t){for(let n=this._hitAreas.length-1;n>=0;n-=1){const i=this._hitAreas[n];if(i!==void 0&&this._inside(i,e,t))return i}}_inside(e,t,n){const i=e.bounds;return t>=i.x&&t<i.x+i.width&&n>=i.y&&n<i.y+i.height}_source(e){return e.wasTouch===!0?"touch":"pointer"}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vh="171",t_=0,Vu=1,n_=2,lp=1,hp=2,vi=3,Ii=0,ln=1,_n=2,Di=0,nr=1,Gt=2,Wu=3,Xu=4,i_=5,bs=100,s_=101,r_=102,o_=103,a_=104,c_=200,l_=201,h_=202,u_=203,Gl=204,zl=205,d_=206,f_=207,p_=208,m_=209,g_=210,__=211,b_=212,v_=213,x_=214,Hl=0,Vl=1,Wl=2,Ar=3,Xl=4,ql=5,jl=6,Yl=7,up=0,M_=1,E_=2,es=0,dp=1,fp=2,pp=3,Wh=4,S_=5,mp=6,gp=7,qu="attached",y_="detached",_p=300,wr=301,Rr=302,Kl=303,$l=304,yc=306,Cr=1e3,Ji=1001,dc=1002,hn=1003,bp=1004,oo=1005,Tn=1006,nc=1007,wi=1008,Ui=1009,vp=1010,xp=1011,Mo=1012,Xh=1013,Rs=1014,Xn=1015,Li=1016,qh=1017,jh=1018,Pr=1020,Mp=35902,Ep=1021,Sp=1022,On=1023,yp=1024,Tp=1025,ir=1026,Dr=1027,Yh=1028,Kh=1029,Ap=1030,$h=1031,Jh=1033,ic=33776,sc=33777,rc=33778,oc=33779,Jl=35840,Zl=35841,Ql=35842,eh=35843,th=36196,nh=37492,ih=37496,sh=37808,rh=37809,oh=37810,ah=37811,ch=37812,lh=37813,hh=37814,uh=37815,dh=37816,fh=37817,ph=37818,mh=37819,gh=37820,_h=37821,ac=36492,bh=36494,vh=36495,wp=36283,xh=36284,Mh=36285,Eh=36286,Eo=2300,So=2301,Gc=2302,ju=2400,Yu=2401,Ku=2402,T_=2500,A_=0,Rp=1,Sh=2,w_=3200,R_=3201,Cp=0,C_=1,qi="",qt="srgb",un="srgb-linear",fc="linear",ht="srgb",Ds=7680,$u=519,P_=512,D_=513,L_=514,Pp=515,N_=516,I_=517,U_=518,O_=519,pc=35044,F_=35048,Ju="300 es",Ri=2e3,mc=2001;class kr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Zu=1234567;const uo=Math.PI/180,Lr=180/Math.PI;function qn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Kt[s&255]+Kt[s>>8&255]+Kt[s>>16&255]+Kt[s>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[t&63|128]+Kt[t>>8&255]+"-"+Kt[t>>16&255]+Kt[t>>24&255]+Kt[n&255]+Kt[n>>8&255]+Kt[n>>16&255]+Kt[n>>24&255]).toLowerCase()}function Ke(s,e,t){return Math.max(e,Math.min(t,s))}function Zh(s,e){return(s%e+e)%e}function k_(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function B_(s,e,t){return s!==e?(t-s)/(e-s):0}function fo(s,e,t){return(1-t)*s+t*e}function G_(s,e,t,n){return fo(s,e,1-Math.exp(-t*n))}function z_(s,e=1){return e-Math.abs(Zh(s,e*2)-e)}function H_(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function V_(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function W_(s,e){return s+Math.floor(Math.random()*(e-s+1))}function X_(s,e){return s+Math.random()*(e-s)}function q_(s){return s*(.5-Math.random())}function j_(s){s!==void 0&&(Zu=s);let e=Zu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Y_(s){return s*uo}function K_(s){return s*Lr}function $_(s){return(s&s-1)===0&&s!==0}function J_(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Z_(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Q_(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),p=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*h,c*u,c*d,a*l);break;case"YZY":s.set(c*d,a*h,c*u,a*l);break;case"ZXZ":s.set(c*u,c*d,a*h,a*l);break;case"XZX":s.set(a*h,c*g,c*p,a*l);break;case"YXY":s.set(c*p,a*h,c*g,a*l);break;case"ZYZ":s.set(c*g,c*p,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Vn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ut(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const ao={DEG2RAD:uo,RAD2DEG:Lr,generateUUID:qn,clamp:Ke,euclideanModulo:Zh,mapLinear:k_,inverseLerp:B_,lerp:fo,damp:G_,pingpong:z_,smoothstep:H_,smootherstep:V_,randInt:W_,randFloat:X_,randFloatSpread:q_,seededRandom:j_,degToRad:Y_,radToDeg:K_,isPowerOfTwo:$_,ceilPowerOfTwo:J_,floorPowerOfTwo:Z_,setQuaternionFromProperEuler:Q_,normalize:ut,denormalize:Vn};class De{constructor(e=0,t=0){De.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ve{constructor(e,t,n,i,r,o,a,c,l){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l)}set(e,t,n,i,r,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],_=i[0],m=i[3],f=i[6],v=i[1],M=i[4],b=i[7],w=i[2],A=i[5],C=i[8];return r[0]=o*_+a*v+c*w,r[3]=o*m+a*M+c*A,r[6]=o*f+a*b+c*C,r[1]=l*_+h*v+u*w,r[4]=l*m+h*M+u*A,r[7]=l*f+h*b+u*C,r[2]=d*_+p*v+g*w,r[5]=d*m+p*M+g*A,r[8]=d*f+p*b+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,p=l*r-o*c,g=t*u+n*d+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(i*l-h*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(h*t-i*c)*_,e[5]=(i*r-a*t)*_,e[6]=p*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(zc.makeScale(e,t)),this}rotate(e){return this.premultiply(zc.makeRotation(-e)),this}translate(e,t){return this.premultiply(zc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const zc=new Ve;function Dp(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function yo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function eb(){const s=yo("canvas");return s.style.display="block",s}const Qu={};function Js(s){s in Qu||(Qu[s]=!0,console.warn(s))}function tb(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function nb(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function ib(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const ed=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),td=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function sb(){const s={enabled:!0,workingColorSpace:un,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ht&&(i.r=Ni(i.r),i.g=Ni(i.g),i.b=Ni(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ht&&(i.r=sr(i.r),i.g=sr(i.g),i.b=sr(i.b))),i},fromWorkingColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},toWorkingColorSpace:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===qi?fc:this.spaces[i].transfer},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[un]:{primaries:e,whitePoint:n,transfer:fc,toXYZ:ed,fromXYZ:td,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:qt},outputColorSpaceConfig:{drawingBufferColorSpace:qt}},[qt]:{primaries:e,whitePoint:n,transfer:ht,toXYZ:ed,fromXYZ:td,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:qt}}}),s}const Je=sb();function Ni(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function sr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ls;class rb{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ls===void 0&&(Ls=yo("canvas")),Ls.width=e.width,Ls.height=e.height;const n=Ls.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ls}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=yo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Ni(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ni(t[n]/255)*255):t[n]=Ni(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ob=0;class Lp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ob++}),this.uuid=qn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Hc(i[o].image)):r.push(Hc(i[o]))}else r=Hc(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Hc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?rb.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ab=0;class zt extends kr{constructor(e=zt.DEFAULT_IMAGE,t=zt.DEFAULT_MAPPING,n=Ji,i=Ji,r=Tn,o=wi,a=On,c=Ui,l=zt.DEFAULT_ANISOTROPY,h=qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ab++}),this.uuid=qn(),this.name="",this.source=new Lp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_p)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Cr:e.x=e.x-Math.floor(e.x);break;case Ji:e.x=e.x<0?0:1;break;case dc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Cr:e.y=e.y-Math.floor(e.y);break;case Ji:e.y=e.y<0?0:1;break;case dc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zt.DEFAULT_IMAGE=null;zt.DEFAULT_MAPPING=_p;zt.DEFAULT_ANISOTROPY=1;class ot{constructor(e=0,t=0,n=0,i=1){ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],g=c[9],_=c[2],m=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(l+1)/2,b=(p+1)/2,w=(f+1)/2,A=(h+d)/4,C=(u+_)/4,P=(g+m)/4;return M>b&&M>w?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=A/n,r=C/n):b>w?b<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(b),n=A/i,r=P/i):w<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(w),n=C/r,i=P/r),this.set(n,i,r,t),this}let v=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(u-_)/v,this.z=(d-h)/v,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cb extends kr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new zt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Lp(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class jn extends cb{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Np extends zt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=hn,this.minFilter=hn,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class lb extends zt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=hn,this.minFilter=hn,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ss{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const d=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(u!==_||c!==d||l!==p||h!==g){let m=1-a;const f=c*d+l*p+h*g+u*_,v=f>=0?1:-1,M=1-f*f;if(M>Number.EPSILON){const w=Math.sqrt(M),A=Math.atan2(w,f*v);m=Math.sin(m*A)/w,a=Math.sin(a*A)/w}const b=a*v;if(c=c*m+d*b,l=l*m+p*b,h=h*m+g*b,u=u*m+_*b,m===1-a){const w=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=w,l*=w,h*=w,u*=w}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*p-l*d,e[t+1]=c*g+h*d+l*u-a*p,e[t+2]=l*g+h*p+a*d-c*u,e[t+3]=h*g-a*u-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),d=c(n/2),p=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"YZX":this._x=d*h*u+l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u-d*p*g;break;case"XZY":this._x=d*h*u-l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-i)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(r+l)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(r-l)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-i)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(nd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(nd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=i+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Vc.copy(this).projectOnVector(e),this.sub(Vc)}reflect(e){return this.sub(Vc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vc=new L,nd=new ss;class An{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Bn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Bn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Bn):Bn.fromBufferAttribute(r,o),Bn.applyMatrix4(e.matrixWorld),this.expandByPoint(Bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ma.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ma.copy(n.boundingBox)),Ma.applyMatrix4(e.matrixWorld),this.union(Ma)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bn),Bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(jr),Ea.subVectors(this.max,jr),Ns.subVectors(e.a,jr),Is.subVectors(e.b,jr),Us.subVectors(e.c,jr),Oi.subVectors(Is,Ns),Fi.subVectors(Us,Is),as.subVectors(Ns,Us);let t=[0,-Oi.z,Oi.y,0,-Fi.z,Fi.y,0,-as.z,as.y,Oi.z,0,-Oi.x,Fi.z,0,-Fi.x,as.z,0,-as.x,-Oi.y,Oi.x,0,-Fi.y,Fi.x,0,-as.y,as.x,0];return!Wc(t,Ns,Is,Us,Ea)||(t=[1,0,0,0,1,0,0,0,1],!Wc(t,Ns,Is,Us,Ea))?!1:(Sa.crossVectors(Oi,Fi),t=[Sa.x,Sa.y,Sa.z],Wc(t,Ns,Is,Us,Ea))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const fi=[new L,new L,new L,new L,new L,new L,new L,new L],Bn=new L,Ma=new An,Ns=new L,Is=new L,Us=new L,Oi=new L,Fi=new L,as=new L,jr=new L,Ea=new L,Sa=new L,cs=new L;function Wc(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){cs.fromArray(s,r);const a=i.x*Math.abs(cs.x)+i.y*Math.abs(cs.y)+i.z*Math.abs(cs.z),c=e.dot(cs),l=t.dot(cs),h=n.dot(cs);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const hb=new An,Yr=new L,Xc=new L;class li{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):hb.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Yr.subVectors(e,this.center);const t=Yr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Yr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Yr.copy(e.center).add(Xc)),this.expandByPoint(Yr.copy(e.center).sub(Xc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const pi=new L,qc=new L,ya=new L,ki=new L,jc=new L,Ta=new L,Yc=new L;class Tc{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=pi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pi.copy(this.origin).addScaledVector(this.direction,t),pi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){qc.copy(e).add(t).multiplyScalar(.5),ya.copy(t).sub(e).normalize(),ki.copy(this.origin).sub(qc);const r=e.distanceTo(t)*.5,o=-this.direction.dot(ya),a=ki.dot(this.direction),c=-ki.dot(ya),l=ki.lengthSq(),h=Math.abs(1-o*o);let u,d,p,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,p=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(qc).addScaledVector(ya,d),p}intersectSphere(e,t){pi.subVectors(e.center,this.origin);const n=pi.dot(this.direction),i=pi.dot(pi)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,pi)!==null}intersectTriangle(e,t,n,i,r){jc.subVectors(t,e),Ta.subVectors(n,e),Yc.crossVectors(jc,Ta);let o=this.direction.dot(Yc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ki.subVectors(this.origin,e);const c=a*this.direction.dot(Ta.crossVectors(ki,Ta));if(c<0)return null;const l=a*this.direction.dot(jc.cross(ki));if(l<0||c+l>o)return null;const h=-a*ki.dot(Yc);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ge{constructor(e,t,n,i,r,o,a,c,l,h,u,d,p,g,_,m){Ge.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l,h,u,d,p,g,_,m)}set(e,t,n,i,r,o,a,c,l,h,u,d,p,g,_,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ge().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Os.setFromMatrixColumn(e,0).length(),r=1/Os.setFromMatrixColumn(e,1).length(),o=1/Os.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,p=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=p+g*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=g+p*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*h,p=c*u,g=l*h,_=l*u;t[0]=d+_*a,t[4]=g*a-p,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*h,p=c*u,g=l*h,_=l*u;t[0]=d-_*a,t[4]=-o*u,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*h,p=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=g*l-p,t[8]=d*l+_,t[1]=c*u,t[5]=_*l+d,t[9]=p*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,p=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=_-d*u,t[8]=g*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=p*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=o*c,p=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+_,t[5]=o*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ub,e,db)}lookAt(e,t,n){const i=this.elements;return Mn.subVectors(e,t),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),Bi.crossVectors(n,Mn),Bi.lengthSq()===0&&(Math.abs(n.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),Bi.crossVectors(n,Mn)),Bi.normalize(),Aa.crossVectors(Mn,Bi),i[0]=Bi.x,i[4]=Aa.x,i[8]=Mn.x,i[1]=Bi.y,i[5]=Aa.y,i[9]=Mn.y,i[2]=Bi.z,i[6]=Aa.z,i[10]=Mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],v=n[3],M=n[7],b=n[11],w=n[15],A=i[0],C=i[4],P=i[8],T=i[12],E=i[1],D=i[5],z=i[9],H=i[13],Y=i[2],Q=i[6],q=i[10],ie=i[14],W=i[3],ue=i[7],_e=i[11],Ae=i[15];return r[0]=o*A+a*E+c*Y+l*W,r[4]=o*C+a*D+c*Q+l*ue,r[8]=o*P+a*z+c*q+l*_e,r[12]=o*T+a*H+c*ie+l*Ae,r[1]=h*A+u*E+d*Y+p*W,r[5]=h*C+u*D+d*Q+p*ue,r[9]=h*P+u*z+d*q+p*_e,r[13]=h*T+u*H+d*ie+p*Ae,r[2]=g*A+_*E+m*Y+f*W,r[6]=g*C+_*D+m*Q+f*ue,r[10]=g*P+_*z+m*q+f*_e,r[14]=g*T+_*H+m*ie+f*Ae,r[3]=v*A+M*E+b*Y+w*W,r[7]=v*C+M*D+b*Q+w*ue,r[11]=v*P+M*z+b*q+w*_e,r[15]=v*T+M*H+b*ie+w*Ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],p=e[14],g=e[3],_=e[7],m=e[11],f=e[15];return g*(+r*c*u-i*l*u-r*a*d+n*l*d+i*a*p-n*c*p)+_*(+t*c*p-t*l*d+r*o*d-i*o*p+i*l*h-r*c*h)+m*(+t*l*u-t*a*p-r*o*u+n*o*p+r*a*h-n*l*h)+f*(-i*a*h-t*c*u+t*a*d+i*o*u-n*o*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],p=e[11],g=e[12],_=e[13],m=e[14],f=e[15],v=u*m*l-_*d*l+_*c*p-a*m*p-u*c*f+a*d*f,M=g*d*l-h*m*l-g*c*p+o*m*p+h*c*f-o*d*f,b=h*_*l-g*u*l+g*a*p-o*_*p-h*a*f+o*u*f,w=g*u*c-h*_*c-g*a*d+o*_*d+h*a*m-o*u*m,A=t*v+n*M+i*b+r*w;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=v*C,e[1]=(_*d*r-u*m*r-_*i*p+n*m*p+u*i*f-n*d*f)*C,e[2]=(a*m*r-_*c*r+_*i*l-n*m*l-a*i*f+n*c*f)*C,e[3]=(u*c*r-a*d*r-u*i*l+n*d*l+a*i*p-n*c*p)*C,e[4]=M*C,e[5]=(h*m*r-g*d*r+g*i*p-t*m*p-h*i*f+t*d*f)*C,e[6]=(g*c*r-o*m*r-g*i*l+t*m*l+o*i*f-t*c*f)*C,e[7]=(o*d*r-h*c*r+h*i*l-t*d*l-o*i*p+t*c*p)*C,e[8]=b*C,e[9]=(g*u*r-h*_*r-g*n*p+t*_*p+h*n*f-t*u*f)*C,e[10]=(o*_*r-g*a*r+g*n*l-t*_*l-o*n*f+t*a*f)*C,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*p-t*a*p)*C,e[12]=w*C,e[13]=(h*_*i-g*u*i+g*n*d-t*_*d-h*n*m+t*u*m)*C,e[14]=(g*a*i-o*_*i-g*n*c+t*_*c+o*n*m-t*a*m)*C,e[15]=(o*u*i-h*a*i+h*n*c-t*u*c-o*n*d+t*a*d)*C,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,p=r*h,g=r*u,_=o*h,m=o*u,f=a*u,v=c*l,M=c*h,b=c*u,w=n.x,A=n.y,C=n.z;return i[0]=(1-(_+f))*w,i[1]=(p+b)*w,i[2]=(g-M)*w,i[3]=0,i[4]=(p-b)*A,i[5]=(1-(d+f))*A,i[6]=(m+v)*A,i[7]=0,i[8]=(g+M)*C,i[9]=(m-v)*C,i[10]=(1-(d+_))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Os.set(i[0],i[1],i[2]).length();const o=Os.set(i[4],i[5],i[6]).length(),a=Os.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Gn.copy(this);const l=1/r,h=1/o,u=1/a;return Gn.elements[0]*=l,Gn.elements[1]*=l,Gn.elements[2]*=l,Gn.elements[4]*=h,Gn.elements[5]*=h,Gn.elements[6]*=h,Gn.elements[8]*=u,Gn.elements[9]*=u,Gn.elements[10]*=u,t.setFromRotationMatrix(Gn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=Ri){const c=this.elements,l=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let p,g;if(a===Ri)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===mc)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Ri){const c=this.elements,l=1/(t-e),h=1/(n-i),u=1/(o-r),d=(t+e)*l,p=(n+i)*h;let g,_;if(a===Ri)g=(o+r)*u,_=-2*u;else if(a===mc)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Os=new L,Gn=new Ge,ub=new L(0,0,0),db=new L(1,1,1),Bi=new L,Aa=new L,Mn=new L,id=new Ge,sd=new ss;class ci{constructor(e=0,t=0,n=0,i=ci.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ke(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return id.makeRotationFromQuaternion(e),this.setFromRotationMatrix(id,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return sd.setFromEuler(this),this.setFromQuaternion(sd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ci.DEFAULT_ORDER="XYZ";class Qh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fb=0;const rd=new L,Fs=new ss,mi=new Ge,wa=new L,Kr=new L,pb=new L,mb=new ss,od=new L(1,0,0),ad=new L(0,1,0),cd=new L(0,0,1),ld={type:"added"},gb={type:"removed"},ks={type:"childadded",child:null},Kc={type:"childremoved",child:null};class vt extends kr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fb++}),this.uuid=qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vt.DEFAULT_UP.clone();const e=new L,t=new ci,n=new ss,i=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ge},normalMatrix:{value:new Ve}}),this.matrix=new Ge,this.matrixWorld=new Ge,this.matrixAutoUpdate=vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fs.setFromAxisAngle(e,t),this.quaternion.multiply(Fs),this}rotateOnWorldAxis(e,t){return Fs.setFromAxisAngle(e,t),this.quaternion.premultiply(Fs),this}rotateX(e){return this.rotateOnAxis(od,e)}rotateY(e){return this.rotateOnAxis(ad,e)}rotateZ(e){return this.rotateOnAxis(cd,e)}translateOnAxis(e,t){return rd.copy(e).applyQuaternion(this.quaternion),this.position.add(rd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(od,e)}translateY(e){return this.translateOnAxis(ad,e)}translateZ(e){return this.translateOnAxis(cd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?wa.copy(e):wa.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(Kr,wa,this.up):mi.lookAt(wa,Kr,this.up),this.quaternion.setFromRotationMatrix(mi),i&&(mi.extractRotation(i.matrixWorld),Fs.setFromRotationMatrix(mi),this.quaternion.premultiply(Fs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ld),ks.child=e,this.dispatchEvent(ks),ks.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(gb),Kc.child=e,this.dispatchEvent(Kc),Kc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ld),ks.child=e,this.dispatchEvent(ks),ks.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,e,pb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,mb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}vt.DEFAULT_UP=new L(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const zn=new L,gi=new L,$c=new L,_i=new L,Bs=new L,Gs=new L,hd=new L,Jc=new L,Zc=new L,Qc=new L,el=new ot,tl=new ot,nl=new ot;class Wn{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),zn.subVectors(e,t),i.cross(zn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){zn.subVectors(i,t),gi.subVectors(n,t),$c.subVectors(e,t);const o=zn.dot(zn),a=zn.dot(gi),c=zn.dot($c),l=gi.dot(gi),h=gi.dot($c),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,_i)===null?!1:_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,_i)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,_i.x),c.addScaledVector(o,_i.y),c.addScaledVector(a,_i.z),c)}static getInterpolatedAttribute(e,t,n,i,r,o){return el.setScalar(0),tl.setScalar(0),nl.setScalar(0),el.fromBufferAttribute(e,t),tl.fromBufferAttribute(e,n),nl.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(el,r.x),o.addScaledVector(tl,r.y),o.addScaledVector(nl,r.z),o}static isFrontFacing(e,t,n,i){return zn.subVectors(n,t),gi.subVectors(e,t),zn.cross(gi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),zn.cross(gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Wn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Wn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;Bs.subVectors(i,n),Gs.subVectors(r,n),Jc.subVectors(e,n);const c=Bs.dot(Jc),l=Gs.dot(Jc);if(c<=0&&l<=0)return t.copy(n);Zc.subVectors(e,i);const h=Bs.dot(Zc),u=Gs.dot(Zc);if(h>=0&&u<=h)return t.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Bs,o);Qc.subVectors(e,r);const p=Bs.dot(Qc),g=Gs.dot(Qc);if(g>=0&&p<=g)return t.copy(r);const _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Gs,a);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return hd.subVectors(r,i),a=(u-h)/(u-h+(p-g)),t.copy(i).addScaledVector(hd,a);const f=1/(m+_+d);return o=_*f,a=d*f,t.copy(n).addScaledVector(Bs,o).addScaledVector(Gs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ip={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gi={h:0,s:0,l:0},Ra={h:0,s:0,l:0};function il(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Te{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Je.workingColorSpace){if(e=Zh(e,1),t=Ke(t,0,1),n=Ke(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=il(o,r,e+1/3),this.g=il(o,r,e),this.b=il(o,r,e-1/3)}return Je.toWorkingColorSpace(this,i),this}setStyle(e,t=qt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qt){const n=Ip[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ni(e.r),this.g=Ni(e.g),this.b=Ni(e.b),this}copyLinearToSRGB(e){return this.r=sr(e.r),this.g=sr(e.g),this.b=sr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qt){return Je.fromWorkingColorSpace($t.copy(this),e),Math.round(Ke($t.r*255,0,255))*65536+Math.round(Ke($t.g*255,0,255))*256+Math.round(Ke($t.b*255,0,255))}getHexString(e=qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.fromWorkingColorSpace($t.copy(this),t);const n=$t.r,i=$t.g,r=$t.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Je.workingColorSpace){return Je.fromWorkingColorSpace($t.copy(this),t),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=qt){Je.fromWorkingColorSpace($t.copy(this),e);const t=$t.r,n=$t.g,i=$t.b;return e!==qt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Gi),this.setHSL(Gi.h+e,Gi.s+t,Gi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Gi),e.getHSL(Ra);const n=fo(Gi.h,Ra.h,t),i=fo(Gi.s,Ra.s,t),r=fo(Gi.l,Ra.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $t=new Te;Te.NAMES=Ip;let _b=0;class ai extends kr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_b++}),this.uuid=qn(),this.name="",this.type="Material",this.blending=nr,this.side=Ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gl,this.blendDst=zl,this.blendEquation=bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=Ar,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$u,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ds,this.stencilZFail=Ds,this.stencilZPass=Ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==nr&&(n.blending=this.blending),this.side!==Ii&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Gl&&(n.blendSrc=this.blendSrc),this.blendDst!==zl&&(n.blendDst=this.blendDst),this.blendEquation!==bs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ar&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$u&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ds&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ds&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ds&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Lt extends ai{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.combine=up,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const It=new L,Ca=new De;class Tt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=pc,this.updateRanges=[],this.gpuType=Xn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ca.fromBufferAttribute(this,t),Ca.applyMatrix3(e),this.setXY(t,Ca.x,Ca.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Vn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ut(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Vn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Vn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Vn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Vn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),i=ut(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),i=ut(i,this.array),r=ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==pc&&(e.usage=this.usage),e}}class Up extends Tt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Op extends Tt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ft extends Tt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let bb=0;const Dn=new Ge,sl=new vt,zs=new L,En=new An,$r=new An,Bt=new L;class At extends kr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bb++}),this.uuid=qn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Dp(e)?Op:Up)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ve().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,t,n){return Dn.makeTranslation(e,t,n),this.applyMatrix4(Dn),this}scale(e,t,n){return Dn.makeScale(e,t,n),this.applyMatrix4(Dn),this}lookAt(e){return sl.lookAt(e),sl.updateMatrix(),this.applyMatrix4(sl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zs).negate(),this.translate(zs.x,zs.y,zs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ft(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new An);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];En.setFromBufferAttribute(r),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new li);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(En.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];$r.setFromBufferAttribute(a),this.morphTargetsRelative?(Bt.addVectors(En.min,$r.min),En.expandByPoint(Bt),Bt.addVectors(En.max,$r.max),En.expandByPoint(Bt)):(En.expandByPoint($r.min),En.expandByPoint($r.max))}En.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Bt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Bt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Bt.fromBufferAttribute(a,l),c&&(zs.fromBufferAttribute(e,l),Bt.add(zs)),i=Math.max(i,n.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<n.count;P++)a[P]=new L,c[P]=new L;const l=new L,h=new L,u=new L,d=new De,p=new De,g=new De,_=new L,m=new L;function f(P,T,E){l.fromBufferAttribute(n,P),h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,E),d.fromBufferAttribute(r,P),p.fromBufferAttribute(r,T),g.fromBufferAttribute(r,E),h.sub(l),u.sub(l),p.sub(d),g.sub(d);const D=1/(p.x*g.y-g.x*p.y);isFinite(D)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(D),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(D),a[P].add(_),a[T].add(_),a[E].add(_),c[P].add(m),c[T].add(m),c[E].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let P=0,T=v.length;P<T;++P){const E=v[P],D=E.start,z=E.count;for(let H=D,Y=D+z;H<Y;H+=3)f(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const M=new L,b=new L,w=new L,A=new L;function C(P){w.fromBufferAttribute(i,P),A.copy(w);const T=a[P];M.copy(T),M.sub(w.multiplyScalar(w.dot(T))).normalize(),b.crossVectors(A,T);const D=b.dot(c[P])<0?-1:1;o.setXYZW(P,M.x,M.y,M.z,D)}for(let P=0,T=v.length;P<T;++P){const E=v[P],D=E.start,z=E.count;for(let H=D,Y=D+z;H<Y;H+=3)C(e.getX(H+0)),C(e.getX(H+1)),C(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Tt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new L,r=new L,o=new L,a=new L,c=new L,l=new L,h=new L,u=new L;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Bt.fromBufferAttribute(e,t),Bt.normalize(),e.setXYZ(t,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let p=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?p=c[_]*a.data.stride+a.offset:p=c[_]*h;for(let f=0;f<h;f++)d[g++]=l[p++]}return new Tt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new At,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],p=e(d,n);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const p=l[u];h.push(p.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ud=new Ge,ls=new Tc,Pa=new li,dd=new L,Da=new L,La=new L,Na=new L,rl=new L,Ia=new L,fd=new L,Ua=new L;class Ie extends vt{constructor(e=new At,t=new Lt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){Ia.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(rl.fromBufferAttribute(u,e),o?Ia.addScaledVector(rl,h):Ia.addScaledVector(rl.sub(t),h))}t.add(Ia)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Pa.copy(n.boundingSphere),Pa.applyMatrix4(r),ls.copy(e.ray).recast(e.near),!(Pa.containsPoint(ls.origin)===!1&&(ls.intersectSphere(Pa,dd)===null||ls.origin.distanceToSquared(dd)>(e.far-e.near)**2))&&(ud.copy(r).invert(),ls.copy(e.ray).applyMatrix4(ud),!(n.boundingBox!==null&&ls.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ls)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=o[m.materialIndex],v=Math.max(m.start,p.start),M=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let b=v,w=M;b<w;b+=3){const A=a.getX(b),C=a.getX(b+1),P=a.getX(b+2);i=Oa(this,f,e,n,l,h,u,A,C,P),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const v=a.getX(m),M=a.getX(m+1),b=a.getX(m+2);i=Oa(this,o,e,n,l,h,u,v,M,b),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=o[m.materialIndex],v=Math.max(m.start,p.start),M=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let b=v,w=M;b<w;b+=3){const A=b,C=b+1,P=b+2;i=Oa(this,f,e,n,l,h,u,A,C,P),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const v=m,M=m+1,b=m+2;i=Oa(this,o,e,n,l,h,u,v,M,b),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function vb(s,e,t,n,i,r,o,a){let c;if(e.side===ln?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===Ii,a),c===null)return null;Ua.copy(a),Ua.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(Ua);return l<t.near||l>t.far?null:{distance:l,point:Ua.clone(),object:s}}function Oa(s,e,t,n,i,r,o,a,c,l){s.getVertexPosition(a,Da),s.getVertexPosition(c,La),s.getVertexPosition(l,Na);const h=vb(s,e,t,n,Da,La,Na,fd);if(h){const u=new L;Wn.getBarycoord(fd,Da,La,Na,u),i&&(h.uv=Wn.getInterpolatedAttribute(i,a,c,l,u,new De)),r&&(h.uv1=Wn.getInterpolatedAttribute(r,a,c,l,u,new De)),o&&(h.normal=Wn.getInterpolatedAttribute(o,a,c,l,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new L,materialIndex:0};Wn.getNormal(Da,La,Na,d.normal),h.face=d,h.barycoord=u}return h}class Xt extends At{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new ft(l,3)),this.setAttribute("normal",new ft(h,3)),this.setAttribute("uv",new ft(u,2));function g(_,m,f,v,M,b,w,A,C,P,T){const E=b/C,D=w/P,z=b/2,H=w/2,Y=A/2,Q=C+1,q=P+1;let ie=0,W=0;const ue=new L;for(let _e=0;_e<q;_e++){const Ae=_e*D-H;for(let je=0;je<Q;je++){const gt=je*E-z;ue[_]=gt*v,ue[m]=Ae*M,ue[f]=Y,l.push(ue.x,ue.y,ue.z),ue[_]=0,ue[m]=0,ue[f]=A>0?1:-1,h.push(ue.x,ue.y,ue.z),u.push(je/C),u.push(1-_e/P),ie+=1}}for(let _e=0;_e<P;_e++)for(let Ae=0;Ae<C;Ae++){const je=d+Ae+Q*_e,gt=d+Ae+Q*(_e+1),$=d+(Ae+1)+Q*(_e+1),ae=d+(Ae+1)+Q*_e;c.push(je,gt,ae),c.push(gt,$,ae),W+=6}a.addGroup(p,W,T),p+=W,d+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Nr(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function sn(s){const e={};for(let t=0;t<s.length;t++){const n=Nr(s[t]);for(const i in n)e[i]=n[i]}return e}function xb(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Fp(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const To={clone:Nr,merge:sn};var Mb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Eb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class en extends ai{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mb,this.fragmentShader=Eb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Nr(e.uniforms),this.uniformsGroups=xb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class kp extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ge,this.projectionMatrix=new Ge,this.projectionMatrixInverse=new Ge,this.coordinateSystem=Ri}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const zi=new L,pd=new De,md=new De;class cn extends kp{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Lr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(uo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lr*2*Math.atan(Math.tan(uo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(zi.x,zi.y).multiplyScalar(-e/zi.z),zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zi.x,zi.y).multiplyScalar(-e/zi.z)}getViewSize(e,t){return this.getViewBounds(e,pd,md),t.subVectors(md,pd)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(uo*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Hs=-90,Vs=1;class Sb extends vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new cn(Hs,Vs,e,t);i.layers=this.layers,this.add(i);const r=new cn(Hs,Vs,e,t);r.layers=this.layers,this.add(r);const o=new cn(Hs,Vs,e,t);o.layers=this.layers,this.add(o);const a=new cn(Hs,Vs,e,t);a.layers=this.layers,this.add(a);const c=new cn(Hs,Vs,e,t);c.layers=this.layers,this.add(c);const l=new cn(Hs,Vs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===Ri)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===mc)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Bp extends zt{constructor(e,t,n,i,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:wr,super(e,t,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class yb extends jn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Bp(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Tn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Xt(5,5,5),r=new en({name:"CubemapFromEquirect",uniforms:Nr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ln,blending:Di});r.uniforms.tEquirect.value=t;const o=new Ie(i,r),a=t.minFilter;return t.minFilter===wi&&(t.minFilter=Tn),new Sb(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}class eu{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Te(e),this.near=t,this.far=n}clone(){return new eu(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Gp extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ci,this.environmentIntensity=1,this.environmentRotation=new ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Tb{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=pc,this.updateRanges=[],this.version=0,this.uuid=qn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const nn=new L;class tu{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Vn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ut(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Vn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Vn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Vn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Vn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),i=ut(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),i=ut(i,this.array),r=ut(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Tt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new tu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const gd=new L,_d=new ot,bd=new ot,Ab=new L,vd=new Ge,Fa=new L,ol=new li,xd=new Ge,al=new Tc;class wb extends Ie{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=qu,this.bindMatrix=new Ge,this.bindMatrixInverse=new Ge,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new An),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Fa),this.boundingBox.expandByPoint(Fa)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new li),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Fa),this.boundingSphere.expandByPoint(Fa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ol.copy(this.boundingSphere),ol.applyMatrix4(i),e.ray.intersectsSphere(ol)!==!1&&(xd.copy(i).invert(),al.copy(e.ray).applyMatrix4(xd),!(this.boundingBox!==null&&al.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,al)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ot,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===qu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===y_?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;_d.fromBufferAttribute(i.attributes.skinIndex,e),bd.fromBufferAttribute(i.attributes.skinWeight,e),gd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=bd.getComponent(r);if(o!==0){const a=_d.getComponent(r);vd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Ab.copy(gd).applyMatrix4(vd),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class zp extends vt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Hp extends zt{constructor(e=null,t=1,n=1,i,r,o,a,c,l=hn,h=hn,u,d){super(null,o,a,c,l,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Md=new Ge,Rb=new Ge;class nu{constructor(e=[],t=[]){this.uuid=qn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ge)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ge;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:Rb;Md.multiplyMatrices(a,t[r]),Md.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new nu(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Hp(t,e,e,On,Xn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new zp),this.bones.push(o),this.boneInverses.push(new Ge().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class yh extends Tt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ws=new Ge,Ed=new Ge,ka=[],Sd=new An,Cb=new Ge,Jr=new Ie,Zr=new li;class Th extends Ie{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new yh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Cb)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new An),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ws),Sd.copy(e.boundingBox).applyMatrix4(Ws),this.boundingBox.union(Sd)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new li),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ws),Zr.copy(e.boundingSphere).applyMatrix4(Ws),this.boundingSphere.union(Zr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Jr.geometry=this.geometry,Jr.material=this.material,Jr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Zr.copy(this.boundingSphere),Zr.applyMatrix4(n),e.ray.intersectsSphere(Zr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ws),Ed.multiplyMatrices(n,Ws),Jr.matrixWorld=Ed,Jr.raycast(e,ka);for(let o=0,a=ka.length;o<a;o++){const c=ka[o];c.instanceId=r,c.object=this,t.push(c)}ka.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new yh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Hp(new Float32Array(i*this.count),i,this.count,Yh,Xn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=i*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const cl=new L,Pb=new L,Db=new Ve;class ms{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=cl.subVectors(n,t).cross(Pb.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(cl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Db.getNormalMatrix(e),i=this.coplanarPoint(cl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hs=new li,Ba=new L;class iu{constructor(e=new ms,t=new ms,n=new ms,i=new ms,r=new ms,o=new ms){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ri){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],p=i[8],g=i[9],_=i[10],m=i[11],f=i[12],v=i[13],M=i[14],b=i[15];if(n[0].setComponents(c-r,d-l,m-p,b-f).normalize(),n[1].setComponents(c+r,d+l,m+p,b+f).normalize(),n[2].setComponents(c+o,d+h,m+g,b+v).normalize(),n[3].setComponents(c-o,d-h,m-g,b-v).normalize(),n[4].setComponents(c-a,d-u,m-_,b-M).normalize(),t===Ri)n[5].setComponents(c+a,d+u,m+_,b+M).normalize();else if(t===mc)n[5].setComponents(a,u,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),hs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hs)}intersectsSprite(e){return hs.center.set(0,0,0),hs.radius=.7071067811865476,hs.applyMatrix4(e.matrixWorld),this.intersectsSphere(hs)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ba.x=i.normal.x>0?e.max.x:e.min.x,Ba.y=i.normal.y>0?e.max.y:e.min.y,Ba.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ba)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Vp extends ai{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const gc=new L,_c=new L,yd=new Ge,Qr=new Tc,Ga=new li,ll=new L,Td=new L;class su extends vt{constructor(e=new At,t=new Vp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)gc.fromBufferAttribute(t,i-1),_c.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=gc.distanceTo(_c);e.setAttribute("lineDistance",new ft(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ga.copy(n.boundingSphere),Ga.applyMatrix4(i),Ga.radius+=r,e.ray.intersectsSphere(Ga)===!1)return;yd.copy(i).invert(),Qr.copy(e.ray).applyMatrix4(yd);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=l){const f=h.getX(_),v=h.getX(_+1),M=za(this,e,Qr,c,f,v);M&&t.push(M)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(p),f=za(this,e,Qr,c,_,m);f&&t.push(f)}}else{const p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=l){const f=za(this,e,Qr,c,_,_+1);f&&t.push(f)}if(this.isLineLoop){const _=za(this,e,Qr,c,g-1,p);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function za(s,e,t,n,i,r){const o=s.geometry.attributes.position;if(gc.fromBufferAttribute(o,i),_c.fromBufferAttribute(o,r),t.distanceSqToSegment(gc,_c,ll,Td)>n)return;ll.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(ll);if(!(c<e.near||c>e.far))return{distance:c,point:Td.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const Ad=new L,wd=new L;class Lb extends su{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Ad.fromBufferAttribute(t,i),wd.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Ad.distanceTo(wd);e.setAttribute("lineDistance",new ft(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Nb extends su{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class vs extends ai{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Rd=new Ge,Ah=new Tc,Ha=new li,Va=new L;class Zs extends vt{constructor(e=new At,t=new vs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ha.copy(n.boundingSphere),Ha.applyMatrix4(i),Ha.radius+=r,e.ray.intersectsSphere(Ha)===!1)return;Rd.copy(i).invert(),Ah.copy(e.ray).applyMatrix4(Rd);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let g=d,_=p;g<_;g++){const m=l.getX(g);Va.fromBufferAttribute(u,m),Cd(Va,m,c,i,e,t,this)}}else{const d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=d,_=p;g<_;g++)Va.fromBufferAttribute(u,g),Cd(Va,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Cd(s,e,t,n,i,r,o){const a=Ah.distanceSqToPoint(s);if(a<t){const c=new L;Ah.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class an extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Wp extends zt{constructor(e,t,n,i,r,o,a,c,l,h=ir){if(h!==ir&&h!==Dr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ir&&(n=Rs),n===void 0&&h===Dr&&(n=Pr),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:hn,this.minFilter=c!==void 0?c:hn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ru extends At{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],o=[],a=[],c=[],l=new L,h=new De;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const p=n+u/t*i;l.x=e*Math.cos(p),l.y=e*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ft(o,3)),this.setAttribute("normal",new ft(a,3)),this.setAttribute("uv",new ft(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ru(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Qs extends At{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],p=[];let g=0;const _=[],m=n/2;let f=0;v(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new ft(u,3)),this.setAttribute("normal",new ft(d,3)),this.setAttribute("uv",new ft(p,2));function v(){const b=new L,w=new L;let A=0;const C=(t-e)/n;for(let P=0;P<=r;P++){const T=[],E=P/r,D=E*(t-e)+e;for(let z=0;z<=i;z++){const H=z/i,Y=H*c+a,Q=Math.sin(Y),q=Math.cos(Y);w.x=D*Q,w.y=-E*n+m,w.z=D*q,u.push(w.x,w.y,w.z),b.set(Q,C,q).normalize(),d.push(b.x,b.y,b.z),p.push(H,1-E),T.push(g++)}_.push(T)}for(let P=0;P<i;P++)for(let T=0;T<r;T++){const E=_[T][P],D=_[T+1][P],z=_[T+1][P+1],H=_[T][P+1];(e>0||T!==0)&&(h.push(E,D,H),A+=3),(t>0||T!==r-1)&&(h.push(D,z,H),A+=3)}l.addGroup(f,A,0),f+=A}function M(b){const w=g,A=new De,C=new L;let P=0;const T=b===!0?e:t,E=b===!0?1:-1;for(let z=1;z<=i;z++)u.push(0,m*E,0),d.push(0,E,0),p.push(.5,.5),g++;const D=g;for(let z=0;z<=i;z++){const Y=z/i*c+a,Q=Math.cos(Y),q=Math.sin(Y);C.x=T*q,C.y=m*E,C.z=T*Q,u.push(C.x,C.y,C.z),d.push(0,E,0),A.x=Q*.5+.5,A.y=q*.5*E+.5,p.push(A.x,A.y),g++}for(let z=0;z<i;z++){const H=w+z,Y=D+z;b===!0?h.push(Y,Y+1,H):h.push(Y+1,Y,H),P+=3}l.addGroup(f,P,b===!0?1:2),f+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qs(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ac extends At{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],o=[];a(i),l(n),h(),this.setAttribute("position",new ft(r,3)),this.setAttribute("normal",new ft(r.slice(),3)),this.setAttribute("uv",new ft(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const M=new L,b=new L,w=new L;for(let A=0;A<t.length;A+=3)p(t[A+0],M),p(t[A+1],b),p(t[A+2],w),c(M,b,w,v)}function c(v,M,b,w){const A=w+1,C=[];for(let P=0;P<=A;P++){C[P]=[];const T=v.clone().lerp(b,P/A),E=M.clone().lerp(b,P/A),D=A-P;for(let z=0;z<=D;z++)z===0&&P===A?C[P][z]=T:C[P][z]=T.clone().lerp(E,z/D)}for(let P=0;P<A;P++)for(let T=0;T<2*(A-P)-1;T++){const E=Math.floor(T/2);T%2===0?(d(C[P][E+1]),d(C[P+1][E]),d(C[P][E])):(d(C[P][E+1]),d(C[P+1][E+1]),d(C[P+1][E]))}}function l(v){const M=new L;for(let b=0;b<r.length;b+=3)M.x=r[b+0],M.y=r[b+1],M.z=r[b+2],M.normalize().multiplyScalar(v),r[b+0]=M.x,r[b+1]=M.y,r[b+2]=M.z}function h(){const v=new L;for(let M=0;M<r.length;M+=3){v.x=r[M+0],v.y=r[M+1],v.z=r[M+2];const b=m(v)/2/Math.PI+.5,w=f(v)/Math.PI+.5;o.push(b,1-w)}g(),u()}function u(){for(let v=0;v<o.length;v+=6){const M=o[v+0],b=o[v+2],w=o[v+4],A=Math.max(M,b,w),C=Math.min(M,b,w);A>.9&&C<.1&&(M<.2&&(o[v+0]+=1),b<.2&&(o[v+2]+=1),w<.2&&(o[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function p(v,M){const b=v*3;M.x=e[b+0],M.y=e[b+1],M.z=e[b+2]}function g(){const v=new L,M=new L,b=new L,w=new L,A=new De,C=new De,P=new De;for(let T=0,E=0;T<r.length;T+=9,E+=6){v.set(r[T+0],r[T+1],r[T+2]),M.set(r[T+3],r[T+4],r[T+5]),b.set(r[T+6],r[T+7],r[T+8]),A.set(o[E+0],o[E+1]),C.set(o[E+2],o[E+3]),P.set(o[E+4],o[E+5]),w.copy(v).add(M).add(b).divideScalar(3);const D=m(w);_(A,E+0,v,D),_(C,E+2,M,D),_(P,E+4,b,D)}}function _(v,M,b,w){w<0&&v.x===1&&(o[M]=v.x-1),b.x===0&&b.z===0&&(o[M]=w/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function f(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ac(e.vertices,e.indices,e.radius,e.details)}}class bc extends Ac{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new bc(e.radius,e.detail)}}class po extends Ac{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new po(e.radius,e.detail)}}class pa extends At{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=e/a,d=t/c,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){const v=f*d-o;for(let M=0;M<l;M++){const b=M*u-r;g.push(b,-v,0),_.push(0,0,1),m.push(M/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let v=0;v<a;v++){const M=v+l*f,b=v+l*(f+1),w=v+1+l*(f+1),A=v+1+l*f;p.push(M,b,A),p.push(b,w,A)}this.setIndex(p),this.setAttribute("position",new ft(g,3)),this.setAttribute("normal",new ft(_,3)),this.setAttribute("uv",new ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pa(e.width,e.height,e.widthSegments,e.heightSegments)}}class mo extends At{constructor(e=.5,t=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],c=[],l=[],h=[];let u=e;const d=(t-e)/i,p=new L,g=new De;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const f=r+m/n*o;p.x=u*Math.cos(f),p.y=u*Math.sin(f),c.push(p.x,p.y,p.z),l.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<i;_++){const m=_*(n+1);for(let f=0;f<n;f++){const v=f+m,M=v,b=v+n+1,w=v+n+2,A=v+1;a.push(M,b,A),a.push(b,w,A)}}this.setIndex(a),this.setAttribute("position",new ft(c,3)),this.setAttribute("normal",new ft(l,3)),this.setAttribute("uv",new ft(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mo(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class go extends At{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new L,d=new L,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){const v=[],M=f/n;let b=0;f===0&&o===0?b=.5/t:f===n&&c===Math.PI&&(b=-.5/t);for(let w=0;w<=t;w++){const A=w/t;u.x=-e*Math.cos(i+A*r)*Math.sin(o+M*a),u.y=e*Math.cos(o+M*a),u.z=e*Math.sin(i+A*r)*Math.sin(o+M*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(A+b,1-M),v.push(l++)}h.push(v)}for(let f=0;f<n;f++)for(let v=0;v<t;v++){const M=h[f][v+1],b=h[f][v],w=h[f+1][v],A=h[f+1][v+1];(f!==0||o>0)&&p.push(M,b,A),(f!==n-1||c<Math.PI)&&p.push(b,w,A)}this.setIndex(p),this.setAttribute("position",new ft(g,3)),this.setAttribute("normal",new ft(_,3)),this.setAttribute("uv",new ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new go(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class vc extends At{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],c=[],l=[],h=new L,u=new L,d=new L;for(let p=0;p<=n;p++)for(let g=0;g<=i;g++){const _=g/i*r,m=p/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(_),u.y=(e+t*Math.cos(m))*Math.sin(_),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/i),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=i;g++){const _=(i+1)*p+g-1,m=(i+1)*(p-1)+g-1,f=(i+1)*(p-1)+g,v=(i+1)*p+g;o.push(_,m,v),o.push(m,f,v)}this.setIndex(o),this.setAttribute("position",new ft(a,3)),this.setAttribute("normal",new ft(c,3)),this.setAttribute("uv",new ft(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Ib extends en{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Wt extends ai{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cp,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class hi extends Wt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new De(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ke(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Te(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Te(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Te(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Ub extends ai{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=w_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ob extends ai{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Wa(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Fb(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function kb(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Pd(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let c=0;c!==e;++c)i[o++]=s[a+c]}return i}function Xp(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class ma{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Bb extends ma{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ju,endingEnd:ju}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Yu:r=e,a=2*t-n;break;case Ku:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Yu:o=e,c=2*n-t;break;case Ku:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,f=-d*m+2*d*_-d*g,v=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,M=(-1-p)*m+(1.5+p)*_+.5*g,b=p*m-p*_;for(let w=0;w!==a;++w)r[w]=f*o[h+w]+v*o[l+w]+M*o[c+w]+b*o[u+w];return r}}class Gb extends ma{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}}class zb extends ma{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class ui{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Wa(t,this.TimeBufferType),this.values=Wa(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Wa(e.times,Array),values:Wa(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new zb(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Gb(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Bb(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Eo:t=this.InterpolantFactoryMethodDiscrete;break;case So:t=this.InterpolantFactoryMethodLinear;break;case Gc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Eo;case this.InterpolantFactoryMethodLinear:return So;case this.InterpolantFactoryMethodSmooth:return Gc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&Fb(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Gc,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(i)c=!0;else{const u=a*n,d=u-n,p=u+n;for(let g=0;g!==n;++g){const _=t[u+g];if(_!==t[d+g]||_!==t[p+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const u=a*n,d=o*n;for(let p=0;p!==n;++p)t[d+p]=t[u+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}ui.prototype.TimeBufferType=Float32Array;ui.prototype.ValueBufferType=Float32Array;ui.prototype.DefaultInterpolation=So;class Br extends ui{constructor(e,t,n){super(e,t,n)}}Br.prototype.ValueTypeName="bool";Br.prototype.ValueBufferType=Array;Br.prototype.DefaultInterpolation=Eo;Br.prototype.InterpolantFactoryMethodLinear=void 0;Br.prototype.InterpolantFactoryMethodSmooth=void 0;class qp extends ui{}qp.prototype.ValueTypeName="color";class Ir extends ui{}Ir.prototype.ValueTypeName="number";class Hb extends ma{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t);let l=e*a;for(let h=l+a;l!==h;l+=4)ss.slerpFlat(r,0,o,l-a,o,l,c);return r}}class Ur extends ui{InterpolantFactoryMethodLinear(e){return new Hb(this.times,this.values,this.getValueSize(),e)}}Ur.prototype.ValueTypeName="quaternion";Ur.prototype.InterpolantFactoryMethodSmooth=void 0;class Gr extends ui{constructor(e,t,n){super(e,t,n)}}Gr.prototype.ValueTypeName="string";Gr.prototype.ValueBufferType=Array;Gr.prototype.DefaultInterpolation=Eo;Gr.prototype.InterpolantFactoryMethodLinear=void 0;Gr.prototype.InterpolantFactoryMethodSmooth=void 0;class Or extends ui{}Or.prototype.ValueTypeName="vector";class Vb{constructor(e="",t=-1,n=[],i=T_){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=qn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Xb(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(ui.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const h=kb(c);c=Pd(c,1,h),l=Pd(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Ir(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],h=l.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,p,g,_){if(p.length!==0){const m=[],f=[];Xp(p,m,f,g),m.length!==0&&_.push(new u(d,m,f))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)p[d[g].morphTargets[_]]=-1;for(const _ in p){const m=[],f=[];for(let v=0;v!==d[g].morphTargets.length;++v){const M=d[g];m.push(M.time),f.push(M.morphTarget===_?1:0)}i.push(new Ir(".morphTargetInfluence["+_+"]",m,f))}c=p.length*o}else{const p=".bones["+t[u].name+"]";n(Or,p+".position",d,"pos",i),n(Ur,p+".quaternion",d,"rot",i),n(Or,p+".scale",d,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Wb(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ir;case"vector":case"vector2":case"vector3":case"vector4":return Or;case"color":return qp;case"quaternion":return Ur;case"bool":case"boolean":return Br;case"string":return Gr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Xb(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Wb(s.type);if(s.times===void 0){const t=[],n=[];Xp(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Zi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class qb{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const p=l[u],g=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const jb=new qb;class zr{constructor(e){this.manager=e!==void 0?e:jb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}zr.DEFAULT_MATERIAL_NAME="__DEFAULT";const bi={};class Yb extends Error{constructor(e,t){super(e),this.response=t}}class jp extends zr{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Zi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(bi[e]!==void 0){bi[e].push({onLoad:t,onProgress:n,onError:i});return}bi[e]=[],bi[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=bi[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=d?parseInt(d):0,g=p!==0;let _=0;const m=new ReadableStream({start(f){v();function v(){u.read().then(({done:M,value:b})=>{if(M)f.close();else{_+=b.byteLength;const w=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:p});for(let A=0,C=h.length;A<C;A++){const P=h[A];P.onProgress&&P.onProgress(w)}f.enqueue(b),v()}},M=>{f.error(M)})}}});return new Response(m)}else throw new Yb(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(d);return l.arrayBuffer().then(g=>p.decode(g))}}}).then(l=>{Zi.add(e,l);const h=bi[e];delete bi[e];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onLoad&&p.onLoad(l)}}).catch(l=>{const h=bi[e];if(h===void 0)throw this.manager.itemError(e),l;delete bi[e];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Kb extends zr{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Zi.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=yo("img");function c(){h(),Zi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class $b extends zr{constructor(e){super(e)}load(e,t,n,i){const r=new zt,o=new Kb(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class wc extends vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Jb extends wc{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Te(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const hl=new Ge,Dd=new L,Ld=new L;class ou{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new De(512,512),this.map=null,this.mapPass=null,this.matrix=new Ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new iu,this._frameExtents=new De(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Dd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Dd),Ld.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ld),t.updateMatrixWorld(),hl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(hl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Zb extends ou{constructor(){super(new cn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Lr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Qb extends wc{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Zb}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Nd=new Ge,eo=new L,ul=new L;class e0 extends ou{constructor(){super(new cn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new De(4,2),this._viewportCount=6,this._viewports=[new ot(2,1,1,1),new ot(0,1,1,1),new ot(3,1,1,1),new ot(1,1,1,1),new ot(3,0,1,1),new ot(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),eo.setFromMatrixPosition(e.matrixWorld),n.position.copy(eo),ul.copy(n.position),ul.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ul),n.updateMatrixWorld(),i.makeTranslation(-eo.x,-eo.y,-eo.z),Nd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nd)}}class au extends wc{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new e0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Rc extends kp{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class t0 extends ou{constructor(){super(new Rc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class cc extends wc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new t0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class _o{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class n0 extends zr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Zi.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Zi.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Zi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Zi.add(e,c),r.manager.itemStart(e)}}class i0 extends cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class s0{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Id(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Id();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Id(){return performance.now()}const cu="\\[\\]\\.:\\/",r0=new RegExp("["+cu+"]","g"),lu="[^"+cu+"]",o0="[^"+cu.replace("\\.","")+"]",a0=/((?:WC+[\/:])*)/.source.replace("WC",lu),c0=/(WCOD+)?/.source.replace("WCOD",o0),l0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",lu),h0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",lu),u0=new RegExp("^"+a0+c0+l0+h0+"$"),d0=["material","materials","bones","map"];class f0{constructor(e,t,n){const i=n||dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class dt{constructor(e,t,n){this.path=t,this.parsedPath=n||dt.parseTrackName(t),this.node=dt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new dt.Composite(e,t,n):new dt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(r0,"")}static parseTrackName(e){const t=u0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);d0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=dt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[i];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}dt.Composite=f0;dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};dt.prototype.GetterByBindingType=[dt.prototype._getValue_direct,dt.prototype._getValue_array,dt.prototype._getValue_arrayElement,dt.prototype._getValue_toArray];dt.prototype.SetterByBindingTypeAndVersioning=[[dt.prototype._setValue_direct,dt.prototype._setValue_direct_setNeedsUpdate,dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_array,dt.prototype._setValue_array_setNeedsUpdate,dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_arrayElement,dt.prototype._setValue_arrayElement_setNeedsUpdate,dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_fromArray,dt.prototype._setValue_fromArray_setNeedsUpdate,dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];function Ud(s,e,t,n){const i=p0(n);switch(t){case Ep:return s*e;case yp:return s*e;case Tp:return s*e*2;case Yh:return s*e/i.components*i.byteLength;case Kh:return s*e/i.components*i.byteLength;case Ap:return s*e*2/i.components*i.byteLength;case $h:return s*e*2/i.components*i.byteLength;case Sp:return s*e*3/i.components*i.byteLength;case On:return s*e*4/i.components*i.byteLength;case Jh:return s*e*4/i.components*i.byteLength;case ic:case sc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case rc:case oc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Zl:case eh:return Math.max(s,16)*Math.max(e,8)/4;case Jl:case Ql:return Math.max(s,8)*Math.max(e,8)/2;case th:case nh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ih:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case sh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case rh:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case oh:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case ah:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case ch:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case lh:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case hh:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case uh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case dh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case fh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case ph:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case mh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case gh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case _h:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case ac:case bh:case vh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case wp:case xh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Mh:case Eh:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function p0(s){switch(s){case Ui:case vp:return{byteLength:1,components:1};case Mo:case xp:case Li:return{byteLength:2,components:1};case qh:case jh:return{byteLength:2,components:4};case Rs:case Xh:case Xn:return{byteLength:4,components:1};case Mp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vh);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Yp(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function m0(s){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=s.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=s.SHORT;else if(l instanceof Uint32Array)p=s.UNSIGNED_INT;else if(l instanceof Int32Array)p=s.INT;else if(l instanceof Int8Array)p=s.BYTE;else if(l instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(s.bindBuffer(l,a),u.length===0)s.bufferSubData(l,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){const g=u[d],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){const _=u[p];s.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(s.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}var g0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_0=`#ifdef USE_ALPHAHASH
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
#endif`,b0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,v0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,x0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,M0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,E0=`#ifdef USE_AOMAP
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
#endif`,S0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,y0=`#ifdef USE_BATCHING
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
#endif`,T0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,A0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,w0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,R0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,C0=`#ifdef USE_IRIDESCENCE
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
#endif`,P0=`#ifdef USE_BUMPMAP
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
#endif`,D0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,L0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,N0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,I0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,U0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,O0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,F0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,k0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,B0=`#define PI 3.141592653589793
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
} // validated`,G0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,z0=`vec3 transformedNormal = objectNormal;
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
#endif`,H0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,V0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,W0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,X0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,q0="gl_FragColor = linearToOutputTexel( gl_FragColor );",j0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Y0=`#ifdef USE_ENVMAP
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
#endif`,K0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$0=`#ifdef USE_ENVMAP
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
#endif`,J0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Z0=`#ifdef USE_ENVMAP
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
#endif`,Q0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ev=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,iv=`#ifdef USE_GRADIENTMAP
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
}`,sv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ov=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,av=`uniform bool receiveShadow;
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
#endif`,cv=`#ifdef USE_ENVMAP
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
#endif`,lv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,uv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fv=`PhysicalMaterial material;
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
#endif`,pv=`struct PhysicalMaterial {
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
}`,mv=`
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
#endif`,gv=`#if defined( RE_IndirectDiffuse )
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
#endif`,_v=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ev=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Tv=`#if defined( USE_POINTS_UV )
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
#endif`,Av=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Cv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dv=`#ifdef USE_MORPHTARGETS
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
#endif`,Lv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Iv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Uv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ov=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kv=`#ifdef USE_NORMALMAP
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
#endif`,Bv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Xv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Yv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$v=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ex=`float getShadowMask() {
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
}`,tx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nx=`#ifdef USE_SKINNING
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
#endif`,ix=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sx=`#ifdef USE_SKINNING
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
#endif`,rx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ox=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ax=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,lx=`#ifdef USE_TRANSMISSION
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
#endif`,hx=`#ifdef USE_TRANSMISSION
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
#endif`,ux=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,px=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gx=`uniform sampler2D t2D;
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
}`,_x=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,vx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mx=`#include <common>
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
}`,Ex=`#if DEPTH_PACKING == 3200
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
}`,Sx=`#define DISTANCE
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
}`,yx=`#define DISTANCE
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
}`,Tx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ax=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wx=`uniform float scale;
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
}`,Rx=`uniform vec3 diffuse;
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
}`,Cx=`#include <common>
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
}`,Px=`uniform vec3 diffuse;
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
}`,Dx=`#define LAMBERT
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
}`,Lx=`#define LAMBERT
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
}`,Nx=`#define MATCAP
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
}`,Ix=`#define MATCAP
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
}`,Ux=`#define NORMAL
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
}`,Ox=`#define NORMAL
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
}`,Fx=`#define PHONG
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
}`,kx=`#define PHONG
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
}`,Bx=`#define STANDARD
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
}`,Gx=`#define STANDARD
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
}`,zx=`#define TOON
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
}`,Hx=`#define TOON
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
}`,Vx=`uniform float size;
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
}`,Wx=`uniform vec3 diffuse;
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
}`,Xx=`#include <common>
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
}`,qx=`uniform vec3 color;
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
}`,jx=`uniform float rotation;
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
}`,Yx=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:g0,alphahash_pars_fragment:_0,alphamap_fragment:b0,alphamap_pars_fragment:v0,alphatest_fragment:x0,alphatest_pars_fragment:M0,aomap_fragment:E0,aomap_pars_fragment:S0,batching_pars_vertex:y0,batching_vertex:T0,begin_vertex:A0,beginnormal_vertex:w0,bsdfs:R0,iridescence_fragment:C0,bumpmap_pars_fragment:P0,clipping_planes_fragment:D0,clipping_planes_pars_fragment:L0,clipping_planes_pars_vertex:N0,clipping_planes_vertex:I0,color_fragment:U0,color_pars_fragment:O0,color_pars_vertex:F0,color_vertex:k0,common:B0,cube_uv_reflection_fragment:G0,defaultnormal_vertex:z0,displacementmap_pars_vertex:H0,displacementmap_vertex:V0,emissivemap_fragment:W0,emissivemap_pars_fragment:X0,colorspace_fragment:q0,colorspace_pars_fragment:j0,envmap_fragment:Y0,envmap_common_pars_fragment:K0,envmap_pars_fragment:$0,envmap_pars_vertex:J0,envmap_physical_pars_fragment:cv,envmap_vertex:Z0,fog_vertex:Q0,fog_pars_vertex:ev,fog_fragment:tv,fog_pars_fragment:nv,gradientmap_pars_fragment:iv,lightmap_pars_fragment:sv,lights_lambert_fragment:rv,lights_lambert_pars_fragment:ov,lights_pars_begin:av,lights_toon_fragment:lv,lights_toon_pars_fragment:hv,lights_phong_fragment:uv,lights_phong_pars_fragment:dv,lights_physical_fragment:fv,lights_physical_pars_fragment:pv,lights_fragment_begin:mv,lights_fragment_maps:gv,lights_fragment_end:_v,logdepthbuf_fragment:bv,logdepthbuf_pars_fragment:vv,logdepthbuf_pars_vertex:xv,logdepthbuf_vertex:Mv,map_fragment:Ev,map_pars_fragment:Sv,map_particle_fragment:yv,map_particle_pars_fragment:Tv,metalnessmap_fragment:Av,metalnessmap_pars_fragment:wv,morphinstance_vertex:Rv,morphcolor_vertex:Cv,morphnormal_vertex:Pv,morphtarget_pars_vertex:Dv,morphtarget_vertex:Lv,normal_fragment_begin:Nv,normal_fragment_maps:Iv,normal_pars_fragment:Uv,normal_pars_vertex:Ov,normal_vertex:Fv,normalmap_pars_fragment:kv,clearcoat_normal_fragment_begin:Bv,clearcoat_normal_fragment_maps:Gv,clearcoat_pars_fragment:zv,iridescence_pars_fragment:Hv,opaque_fragment:Vv,packing:Wv,premultiplied_alpha_fragment:Xv,project_vertex:qv,dithering_fragment:jv,dithering_pars_fragment:Yv,roughnessmap_fragment:Kv,roughnessmap_pars_fragment:$v,shadowmap_pars_fragment:Jv,shadowmap_pars_vertex:Zv,shadowmap_vertex:Qv,shadowmask_pars_fragment:ex,skinbase_vertex:tx,skinning_pars_vertex:nx,skinning_vertex:ix,skinnormal_vertex:sx,specularmap_fragment:rx,specularmap_pars_fragment:ox,tonemapping_fragment:ax,tonemapping_pars_fragment:cx,transmission_fragment:lx,transmission_pars_fragment:hx,uv_pars_fragment:ux,uv_pars_vertex:dx,uv_vertex:fx,worldpos_vertex:px,background_vert:mx,background_frag:gx,backgroundCube_vert:_x,backgroundCube_frag:bx,cube_vert:vx,cube_frag:xx,depth_vert:Mx,depth_frag:Ex,distanceRGBA_vert:Sx,distanceRGBA_frag:yx,equirect_vert:Tx,equirect_frag:Ax,linedashed_vert:wx,linedashed_frag:Rx,meshbasic_vert:Cx,meshbasic_frag:Px,meshlambert_vert:Dx,meshlambert_frag:Lx,meshmatcap_vert:Nx,meshmatcap_frag:Ix,meshnormal_vert:Ux,meshnormal_frag:Ox,meshphong_vert:Fx,meshphong_frag:kx,meshphysical_vert:Bx,meshphysical_frag:Gx,meshtoon_vert:zx,meshtoon_frag:Hx,points_vert:Vx,points_frag:Wx,shadow_vert:Xx,shadow_frag:qx,sprite_vert:jx,sprite_frag:Yx},ce={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},oi={basic:{uniforms:sn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:sn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Te(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:sn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:sn([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:sn([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Te(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:sn([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:sn([ce.points,ce.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:sn([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:sn([ce.common,ce.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:sn([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:sn([ce.sprite,ce.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:sn([ce.common,ce.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:sn([ce.lights,ce.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};oi.physical={uniforms:sn([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const Xa={r:0,b:0,g:0},us=new ci,Kx=new Ge;function $x(s,e,t,n,i,r,o){const a=new Te(0);let c=r===!0?0:1,l,h,u=null,d=0,p=null;function g(M){let b=M.isScene===!0?M.background:null;return b&&b.isTexture&&(b=(M.backgroundBlurriness>0?t:e).get(b)),b}function _(M){let b=!1;const w=g(M);w===null?f(a,c):w&&w.isColor&&(f(w,1),b=!0);const A=s.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(M,b){const w=g(b);w&&(w.isCubeTexture||w.mapping===yc)?(h===void 0&&(h=new Ie(new Xt(1,1,1),new en({name:"BackgroundCubeMaterial",uniforms:Nr(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,C,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),us.copy(b.backgroundRotation),us.x*=-1,us.y*=-1,us.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(us.y*=-1,us.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Kx.makeRotationFromEuler(us)),h.material.toneMapped=Je.getTransfer(w.colorSpace)!==ht,(u!==w||d!==w.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=w,d=w.version,p=s.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new Ie(new pa(2,2),new en({name:"BackgroundMaterial",uniforms:Nr(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:Ii,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=Je.getTransfer(w.colorSpace)!==ht,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||d!==w.version||p!==s.toneMapping)&&(l.material.needsUpdate=!0,u=w,d=w.version,p=s.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function f(M,b){M.getRGB(Xa,Fp(s)),n.buffers.color.setClear(Xa.r,Xa.g,Xa.b,b,o)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose()),l!==void 0&&(l.geometry.dispose(),l.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(M,b=1){a.set(M),c=b,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,f(a,c)},render:_,addToRenderList:m,dispose:v}}function Jx(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(E,D,z,H,Y){let Q=!1;const q=u(H,z,D);r!==q&&(r=q,l(r.object)),Q=p(E,H,z,Y),Q&&g(E,H,z,Y),Y!==null&&e.update(Y,s.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,b(E,D,z,H),Y!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function c(){return s.createVertexArray()}function l(E){return s.bindVertexArray(E)}function h(E){return s.deleteVertexArray(E)}function u(E,D,z){const H=z.wireframe===!0;let Y=n[E.id];Y===void 0&&(Y={},n[E.id]=Y);let Q=Y[D.id];Q===void 0&&(Q={},Y[D.id]=Q);let q=Q[H];return q===void 0&&(q=d(c()),Q[H]=q),q}function d(E){const D=[],z=[],H=[];for(let Y=0;Y<t;Y++)D[Y]=0,z[Y]=0,H[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:z,attributeDivisors:H,object:E,attributes:{},index:null}}function p(E,D,z,H){const Y=r.attributes,Q=D.attributes;let q=0;const ie=z.getAttributes();for(const W in ie)if(ie[W].location>=0){const _e=Y[W];let Ae=Q[W];if(Ae===void 0&&(W==="instanceMatrix"&&E.instanceMatrix&&(Ae=E.instanceMatrix),W==="instanceColor"&&E.instanceColor&&(Ae=E.instanceColor)),_e===void 0||_e.attribute!==Ae||Ae&&_e.data!==Ae.data)return!0;q++}return r.attributesNum!==q||r.index!==H}function g(E,D,z,H){const Y={},Q=D.attributes;let q=0;const ie=z.getAttributes();for(const W in ie)if(ie[W].location>=0){let _e=Q[W];_e===void 0&&(W==="instanceMatrix"&&E.instanceMatrix&&(_e=E.instanceMatrix),W==="instanceColor"&&E.instanceColor&&(_e=E.instanceColor));const Ae={};Ae.attribute=_e,_e&&_e.data&&(Ae.data=_e.data),Y[W]=Ae,q++}r.attributes=Y,r.attributesNum=q,r.index=H}function _(){const E=r.newAttributes;for(let D=0,z=E.length;D<z;D++)E[D]=0}function m(E){f(E,0)}function f(E,D){const z=r.newAttributes,H=r.enabledAttributes,Y=r.attributeDivisors;z[E]=1,H[E]===0&&(s.enableVertexAttribArray(E),H[E]=1),Y[E]!==D&&(s.vertexAttribDivisor(E,D),Y[E]=D)}function v(){const E=r.newAttributes,D=r.enabledAttributes;for(let z=0,H=D.length;z<H;z++)D[z]!==E[z]&&(s.disableVertexAttribArray(z),D[z]=0)}function M(E,D,z,H,Y,Q,q){q===!0?s.vertexAttribIPointer(E,D,z,Y,Q):s.vertexAttribPointer(E,D,z,H,Y,Q)}function b(E,D,z,H){_();const Y=H.attributes,Q=z.getAttributes(),q=D.defaultAttributeValues;for(const ie in Q){const W=Q[ie];if(W.location>=0){let ue=Y[ie];if(ue===void 0&&(ie==="instanceMatrix"&&E.instanceMatrix&&(ue=E.instanceMatrix),ie==="instanceColor"&&E.instanceColor&&(ue=E.instanceColor)),ue!==void 0){const _e=ue.normalized,Ae=ue.itemSize,je=e.get(ue);if(je===void 0)continue;const gt=je.buffer,$=je.type,ae=je.bytesPerElement,Se=$===s.INT||$===s.UNSIGNED_INT||ue.gpuType===Xh;if(ue.isInterleavedBufferAttribute){const de=ue.data,Ue=de.stride,ze=ue.offset;if(de.isInstancedInterleavedBuffer){for(let Ye=0;Ye<W.locationSize;Ye++)f(W.location+Ye,de.meshPerAttribute);E.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Ye=0;Ye<W.locationSize;Ye++)m(W.location+Ye);s.bindBuffer(s.ARRAY_BUFFER,gt);for(let Ye=0;Ye<W.locationSize;Ye++)M(W.location+Ye,Ae/W.locationSize,$,_e,Ue*ae,(ze+Ae/W.locationSize*Ye)*ae,Se)}else{if(ue.isInstancedBufferAttribute){for(let de=0;de<W.locationSize;de++)f(W.location+de,ue.meshPerAttribute);E.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let de=0;de<W.locationSize;de++)m(W.location+de);s.bindBuffer(s.ARRAY_BUFFER,gt);for(let de=0;de<W.locationSize;de++)M(W.location+de,Ae/W.locationSize,$,_e,Ae*ae,Ae/W.locationSize*de*ae,Se)}}else if(q!==void 0){const _e=q[ie];if(_e!==void 0)switch(_e.length){case 2:s.vertexAttrib2fv(W.location,_e);break;case 3:s.vertexAttrib3fv(W.location,_e);break;case 4:s.vertexAttrib4fv(W.location,_e);break;default:s.vertexAttrib1fv(W.location,_e)}}}}v()}function w(){P();for(const E in n){const D=n[E];for(const z in D){const H=D[z];for(const Y in H)h(H[Y].object),delete H[Y];delete D[z]}delete n[E]}}function A(E){if(n[E.id]===void 0)return;const D=n[E.id];for(const z in D){const H=D[z];for(const Y in H)h(H[Y].object),delete H[Y];delete D[z]}delete n[E.id]}function C(E){for(const D in n){const z=n[D];if(z[E.id]===void 0)continue;const H=z[E.id];for(const Y in H)h(H[Y].object),delete H[Y];delete z[E.id]}}function P(){T(),o=!0,r!==i&&(r=i,l(r.object))}function T(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:P,resetDefaultState:T,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function Zx(s,e,t){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];t.update(p,n,1)}function c(l,h,u,d){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Qx(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(C){return!(C!==On&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const P=C===Li&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Ui&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Xn&&!P)}function c(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=g>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:b,vertexTextures:w,maxSamples:A}}function eM(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new ms,a=new Ve,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||i;return i=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,f=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):l();else{const v=r?0:n,M=v*4;let b=f.clippingState||null;c.value=b,b=h(g,d,M,p);for(let w=0;w!==M;++w)b[w]=t[w];f.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const f=p+_*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<f)&&(m=new Float32Array(f));for(let M=0,b=p;M!==_;++M,b+=4)o.copy(u[M]).applyMatrix4(v,a),o.normal.toArray(m,b),m[b+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function tM(s){let e=new WeakMap;function t(o,a){return a===Kl?o.mapping=wr:a===$l&&(o.mapping=Rr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Kl||a===$l)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new yb(c.height);return l.fromEquirectangularTexture(s,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const er=4,Od=[.125,.215,.35,.446,.526,.582],xs=20,dl=new Rc,Fd=new Te;let fl=null,pl=0,ml=0,gl=!1;const gs=(1+Math.sqrt(5))/2,Xs=1/gs,kd=[new L(-gs,Xs,0),new L(gs,Xs,0),new L(-Xs,0,gs),new L(Xs,0,gs),new L(0,gs,-Xs),new L(0,gs,Xs),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class wh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){fl=this._renderer.getRenderTarget(),pl=this._renderer.getActiveCubeFace(),ml=this._renderer.getActiveMipmapLevel(),gl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(fl,pl,ml),this._renderer.xr.enabled=gl,e.scissorTest=!1,qa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===wr||e.mapping===Rr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fl=this._renderer.getRenderTarget(),pl=this._renderer.getActiveCubeFace(),ml=this._renderer.getActiveMipmapLevel(),gl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Tn,minFilter:Tn,generateMipmaps:!1,type:Li,format:On,colorSpace:un,depthBuffer:!1},i=Bd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bd(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=nM(r)),this._blurMaterial=iM(r,e,t)}return i}_compileMaterial(e){const t=new Ie(this._lodPlanes[0],e);this._renderer.compile(t,dl)}_sceneToCubeUV(e,t,n,i){const a=new cn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Fd),h.toneMapping=es,h.autoClear=!1;const p=new Lt({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),g=new Ie(new Xt,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(Fd),_=!0);for(let f=0;f<6;f++){const v=f%3;v===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):v===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));const M=this._cubeSize;qa(i,v*M,f>2?M:0,M,M),h.setRenderTarget(i),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===wr||e.mapping===Rr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=zd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gd());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Ie(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;qa(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,dl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=kd[(i-r-1)%kd.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Ie(this._lodPlanes[i],l),d=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*xs-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):xs;m>xs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${xs}`);const f=[];let v=0;for(let C=0;C<xs;++C){const P=C/_,T=Math.exp(-P*P/2);f.push(T),C===0?v+=T:C<m&&(v+=2*T)}for(let C=0;C<f.length;C++)f[C]=f[C]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-n;const b=this._sizeLods[i],w=3*b*(i>M-er?i-M+er:0),A=4*(this._cubeSize-b);qa(t,w,A,3*b,2*b),c.setRenderTarget(t),c.render(u,dl)}}function nM(s){const e=[],t=[],n=[];let i=s;const r=s-er+1+Od.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>s-er?c=Od[o-s+er-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,f=1,v=new Float32Array(_*g*p),M=new Float32Array(m*g*p),b=new Float32Array(f*g*p);for(let A=0;A<p;A++){const C=A%3*2/3-1,P=A>2?0:-1,T=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];v.set(T,_*g*A),M.set(d,m*g*A);const E=[A,A,A,A,A,A];b.set(E,f*g*A)}const w=new At;w.setAttribute("position",new Tt(v,_)),w.setAttribute("uv",new Tt(M,m)),w.setAttribute("faceIndex",new Tt(b,f)),e.push(w),i>er&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Bd(s,e,t){const n=new jn(s,e,t);return n.texture.mapping=yc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function qa(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function iM(s,e,t){const n=new Float32Array(xs),i=new L(0,1,0);return new en({name:"SphericalGaussianBlur",defines:{n:xs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:hu(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Gd(){return new en({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hu(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function zd(){return new en({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function hu(){return`

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
	`}function sM(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Kl||c===$l,h=c===wr||c===Rr;if(l||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new wh(s)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return l&&p&&p.height>0||h&&p&&i(p)?(t===null&&(t=new wh(s)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function rM(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Js("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function oM(s,e,t,n){const i={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete i[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const p in d)e.update(d[p],s.ARRAY_BUFFER)}function l(u){const d=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const v=p.array;_=p.version;for(let M=0,b=v.length;M<b;M+=3){const w=v[M+0],A=v[M+1],C=v[M+2];d.push(w,A,A,C,C,w)}}else if(g!==void 0){const v=g.array;_=g.version;for(let M=0,b=v.length/3-1;M<b;M+=3){const w=M+0,A=M+1,C=M+2;d.push(w,A,A,C,C,w)}}else return;const m=new(Dp(d)?Op:Up)(d,1);m.version=_;const f=r.get(u);f&&e.remove(f),r.set(u,m)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function aM(s,e,t){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,p){s.drawElements(n,p,r,d*o),t.update(p,n,1)}function l(d,p,g){g!==0&&(s.drawElementsInstanced(n,p,r,d*o,g),t.update(p,n,g))}function h(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,n,1)}function u(d,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)l(d[f]/o,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,_,0,g);let f=0;for(let v=0;v<g;v++)f+=p[v]*_[v];t.update(f,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function cM(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function lM(s,e,t){const n=new WeakMap,i=new ot;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let E=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",E)};var p=E;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let b=0;g===!0&&(b=1),_===!0&&(b=2),m===!0&&(b=3);let w=a.attributes.position.count*b,A=1;w>e.maxTextureSize&&(A=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const C=new Float32Array(w*A*4*u),P=new Np(C,w,A,u);P.type=Xn,P.needsUpdate=!0;const T=b*4;for(let D=0;D<u;D++){const z=f[D],H=v[D],Y=M[D],Q=w*A*4*D;for(let q=0;q<z.count;q++){const ie=q*T;g===!0&&(i.fromBufferAttribute(z,q),C[Q+ie+0]=i.x,C[Q+ie+1]=i.y,C[Q+ie+2]=i.z,C[Q+ie+3]=0),_===!0&&(i.fromBufferAttribute(H,q),C[Q+ie+4]=i.x,C[Q+ie+5]=i.y,C[Q+ie+6]=i.z,C[Q+ie+7]=0),m===!0&&(i.fromBufferAttribute(Y,q),C[Q+ie+8]=i.x,C[Q+ie+9]=i.y,C[Q+ie+10]=i.z,C[Q+ie+11]=Y.itemSize===4?i.w:1)}}d={count:u,texture:P,size:new De(w,A)},n.set(a,d),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(s,"morphTargetBaseInfluence",_),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function hM(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}const Kp=new zt,Hd=new Wp(1,1),$p=new Np,Jp=new lb,Zp=new Bp,Vd=[],Wd=[],Xd=new Float32Array(16),qd=new Float32Array(9),jd=new Float32Array(4);function Hr(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Vd[i];if(r===void 0&&(r=new Float32Array(i),Vd[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Ft(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function kt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Cc(s,e){let t=Wd[e];t===void 0&&(t=new Int32Array(e),Wd[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function uM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function dM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;s.uniform2fv(this.addr,e),kt(t,e)}}function fM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ft(t,e))return;s.uniform3fv(this.addr,e),kt(t,e)}}function pM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;s.uniform4fv(this.addr,e),kt(t,e)}}function mM(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),kt(t,e)}else{if(Ft(t,n))return;jd.set(n),s.uniformMatrix2fv(this.addr,!1,jd),kt(t,n)}}function gM(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),kt(t,e)}else{if(Ft(t,n))return;qd.set(n),s.uniformMatrix3fv(this.addr,!1,qd),kt(t,n)}}function _M(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),kt(t,e)}else{if(Ft(t,n))return;Xd.set(n),s.uniformMatrix4fv(this.addr,!1,Xd),kt(t,n)}}function bM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function vM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;s.uniform2iv(this.addr,e),kt(t,e)}}function xM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;s.uniform3iv(this.addr,e),kt(t,e)}}function MM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;s.uniform4iv(this.addr,e),kt(t,e)}}function EM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function SM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;s.uniform2uiv(this.addr,e),kt(t,e)}}function yM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;s.uniform3uiv(this.addr,e),kt(t,e)}}function TM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;s.uniform4uiv(this.addr,e),kt(t,e)}}function AM(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Hd.compareFunction=Pp,r=Hd):r=Kp,t.setTexture2D(e||r,i)}function wM(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Jp,i)}function RM(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Zp,i)}function CM(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||$p,i)}function PM(s){switch(s){case 5126:return uM;case 35664:return dM;case 35665:return fM;case 35666:return pM;case 35674:return mM;case 35675:return gM;case 35676:return _M;case 5124:case 35670:return bM;case 35667:case 35671:return vM;case 35668:case 35672:return xM;case 35669:case 35673:return MM;case 5125:return EM;case 36294:return SM;case 36295:return yM;case 36296:return TM;case 35678:case 36198:case 36298:case 36306:case 35682:return AM;case 35679:case 36299:case 36307:return wM;case 35680:case 36300:case 36308:case 36293:return RM;case 36289:case 36303:case 36311:case 36292:return CM}}function DM(s,e){s.uniform1fv(this.addr,e)}function LM(s,e){const t=Hr(e,this.size,2);s.uniform2fv(this.addr,t)}function NM(s,e){const t=Hr(e,this.size,3);s.uniform3fv(this.addr,t)}function IM(s,e){const t=Hr(e,this.size,4);s.uniform4fv(this.addr,t)}function UM(s,e){const t=Hr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function OM(s,e){const t=Hr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function FM(s,e){const t=Hr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function kM(s,e){s.uniform1iv(this.addr,e)}function BM(s,e){s.uniform2iv(this.addr,e)}function GM(s,e){s.uniform3iv(this.addr,e)}function zM(s,e){s.uniform4iv(this.addr,e)}function HM(s,e){s.uniform1uiv(this.addr,e)}function VM(s,e){s.uniform2uiv(this.addr,e)}function WM(s,e){s.uniform3uiv(this.addr,e)}function XM(s,e){s.uniform4uiv(this.addr,e)}function qM(s,e,t){const n=this.cache,i=e.length,r=Cc(t,i);Ft(n,r)||(s.uniform1iv(this.addr,r),kt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Kp,r[o])}function jM(s,e,t){const n=this.cache,i=e.length,r=Cc(t,i);Ft(n,r)||(s.uniform1iv(this.addr,r),kt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Jp,r[o])}function YM(s,e,t){const n=this.cache,i=e.length,r=Cc(t,i);Ft(n,r)||(s.uniform1iv(this.addr,r),kt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Zp,r[o])}function KM(s,e,t){const n=this.cache,i=e.length,r=Cc(t,i);Ft(n,r)||(s.uniform1iv(this.addr,r),kt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||$p,r[o])}function $M(s){switch(s){case 5126:return DM;case 35664:return LM;case 35665:return NM;case 35666:return IM;case 35674:return UM;case 35675:return OM;case 35676:return FM;case 5124:case 35670:return kM;case 35667:case 35671:return BM;case 35668:case 35672:return GM;case 35669:case 35673:return zM;case 5125:return HM;case 36294:return VM;case 36295:return WM;case 36296:return XM;case 35678:case 36198:case 36298:case 36306:case 35682:return qM;case 35679:case 36299:case 36307:return jM;case 35680:case 36300:case 36308:case 36293:return YM;case 36289:case 36303:case 36311:case 36292:return KM}}class JM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=PM(t.type)}}class ZM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=$M(t.type)}}class QM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const _l=/(\w+)(\])?(\[|\.)?/g;function Yd(s,e){s.seq.push(e),s.map[e.id]=e}function eE(s,e,t){const n=s.name,i=n.length;for(_l.lastIndex=0;;){const r=_l.exec(n),o=_l.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Yd(t,l===void 0?new JM(a,s,e):new ZM(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new QM(a),Yd(t,u)),t=u}}}class lc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);eE(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Kd(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const tE=37297;let nE=0;function iE(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const $d=new Ve;function sE(s){Je._getMatrix($d,Je.workingColorSpace,s);const e=`mat3( ${$d.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(s)){case fc:return[e,"LinearTransferOETF"];case ht:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Jd(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+iE(s.getShaderSource(e),o)}else return i}function rE(s,e){const t=sE(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function oE(s,e){let t;switch(e){case dp:t="Linear";break;case fp:t="Reinhard";break;case pp:t="Cineon";break;case Wh:t="ACESFilmic";break;case mp:t="AgX";break;case gp:t="Neutral";break;case S_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ja=new L;function aE(){Je.getLuminanceCoefficients(ja);const s=ja.x.toFixed(4),e=ja.y.toFixed(4),t=ja.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(co).join(`
`)}function lE(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function hE(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function co(s){return s!==""}function Zd(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qd(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const uE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rh(s){return s.replace(uE,fE)}const dE=new Map;function fE(s,e){let t=Xe[e];if(t===void 0){const n=dE.get(e);if(n!==void 0)t=Xe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Rh(t)}const pE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ef(s){return s.replace(pE,mE)}function mE(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function tf(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function gE(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===lp?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===hp?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===vi&&(e="SHADOWMAP_TYPE_VSM"),e}function _E(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case wr:case Rr:e="ENVMAP_TYPE_CUBE";break;case yc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function bE(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Rr:e="ENVMAP_MODE_REFRACTION";break}return e}function vE(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case up:e="ENVMAP_BLENDING_MULTIPLY";break;case M_:e="ENVMAP_BLENDING_MIX";break;case E_:e="ENVMAP_BLENDING_ADD";break}return e}function xE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function ME(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=gE(t),l=_E(t),h=bE(t),u=vE(t),d=xE(t),p=cE(t),g=lE(r),_=i.createProgram();let m,f,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(co).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(co).join(`
`),f.length>0&&(f+=`
`)):(m=[tf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(co).join(`
`),f=[tf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==es?"#define TONE_MAPPING":"",t.toneMapping!==es?Xe.tonemapping_pars_fragment:"",t.toneMapping!==es?oE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,rE("linearToOutputTexel",t.outputColorSpace),aE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(co).join(`
`)),o=Rh(o),o=Zd(o,t),o=Qd(o,t),a=Rh(a),a=Zd(a,t),a=Qd(a,t),o=ef(o),a=ef(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Ju?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ju?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const M=v+m+o,b=v+f+a,w=Kd(i,i.VERTEX_SHADER,M),A=Kd(i,i.FRAGMENT_SHADER,b);i.attachShader(_,w),i.attachShader(_,A),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function C(D){if(s.debug.checkShaderErrors){const z=i.getProgramInfoLog(_).trim(),H=i.getShaderInfoLog(w).trim(),Y=i.getShaderInfoLog(A).trim();let Q=!0,q=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(Q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,w,A);else{const ie=Jd(i,w,"vertex"),W=Jd(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+z+`
`+ie+`
`+W)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(H===""||Y==="")&&(q=!1);q&&(D.diagnostics={runnable:Q,programLog:z,vertexShader:{log:H,prefix:m},fragmentShader:{log:Y,prefix:f}})}i.deleteShader(w),i.deleteShader(A),P=new lc(i,_),T=hE(i,_)}let P;this.getUniforms=function(){return P===void 0&&C(this),P};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(_,tE)),E},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=nE++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=A,this}let EE=0;class SE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new yE(e),t.set(e,n)),n}}class yE{constructor(e){this.id=EE++,this.code=e,this.usedTimes=0}}function TE(s,e,t,n,i,r,o){const a=new Qh,c=new SE,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(T){return l.add(T),T===0?"uv":`uv${T}`}function m(T,E,D,z,H){const Y=z.fog,Q=H.geometry,q=T.isMeshStandardMaterial?z.environment:null,ie=(T.isMeshStandardMaterial?t:e).get(T.envMap||q),W=ie&&ie.mapping===yc?ie.image.height:null,ue=g[T.type];T.precision!==null&&(p=i.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const _e=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Ae=_e!==void 0?_e.length:0;let je=0;Q.morphAttributes.position!==void 0&&(je=1),Q.morphAttributes.normal!==void 0&&(je=2),Q.morphAttributes.color!==void 0&&(je=3);let gt,$,ae,Se;if(ue){const lt=oi[ue];gt=lt.vertexShader,$=lt.fragmentShader}else gt=T.vertexShader,$=T.fragmentShader,c.update(T),ae=c.getVertexShaderID(T),Se=c.getFragmentShaderID(T);const de=s.getRenderTarget(),Ue=s.state.buffers.depth.getReversed(),ze=H.isInstancedMesh===!0,Ye=H.isBatchedMesh===!0,yt=!!T.map,tt=!!T.matcap,Pt=!!ie,N=!!T.aoMap,wn=!!T.lightMap,Ze=!!T.bumpMap,Qe=!!T.normalMap,we=!!T.displacementMap,xt=!!T.emissiveMap,Re=!!T.metalnessMap,R=!!T.roughnessMap,S=T.anisotropy>0,k=T.clearcoat>0,J=T.dispersion>0,te=T.iridescence>0,K=T.sheen>0,ye=T.transmission>0,fe=S&&!!T.anisotropyMap,be=k&&!!T.clearcoatMap,nt=k&&!!T.clearcoatNormalMap,oe=k&&!!T.clearcoatRoughnessMap,ve=te&&!!T.iridescenceMap,Ne=te&&!!T.iridescenceThicknessMap,Oe=K&&!!T.sheenColorMap,xe=K&&!!T.sheenRoughnessMap,et=!!T.specularMap,We=!!T.specularColorMap,_t=!!T.specularIntensityMap,U=ye&&!!T.transmissionMap,le=ye&&!!T.thicknessMap,V=!!T.gradientMap,Z=!!T.alphaMap,me=T.alphaTest>0,pe=!!T.alphaHash,He=!!T.extensions;let Rt=es;T.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(Rt=s.toneMapping);const Yt={shaderID:ue,shaderType:T.type,shaderName:T.name,vertexShader:gt,fragmentShader:$,defines:T.defines,customVertexShaderID:ae,customFragmentShaderID:Se,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:Ye,batchingColor:Ye&&H._colorsTexture!==null,instancing:ze,instancingColor:ze&&H.instanceColor!==null,instancingMorph:ze&&H.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:de===null?s.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:un,alphaToCoverage:!!T.alphaToCoverage,map:yt,matcap:tt,envMap:Pt,envMapMode:Pt&&ie.mapping,envMapCubeUVHeight:W,aoMap:N,lightMap:wn,bumpMap:Ze,normalMap:Qe,displacementMap:d&&we,emissiveMap:xt,normalMapObjectSpace:Qe&&T.normalMapType===C_,normalMapTangentSpace:Qe&&T.normalMapType===Cp,metalnessMap:Re,roughnessMap:R,anisotropy:S,anisotropyMap:fe,clearcoat:k,clearcoatMap:be,clearcoatNormalMap:nt,clearcoatRoughnessMap:oe,dispersion:J,iridescence:te,iridescenceMap:ve,iridescenceThicknessMap:Ne,sheen:K,sheenColorMap:Oe,sheenRoughnessMap:xe,specularMap:et,specularColorMap:We,specularIntensityMap:_t,transmission:ye,transmissionMap:U,thicknessMap:le,gradientMap:V,opaque:T.transparent===!1&&T.blending===nr&&T.alphaToCoverage===!1,alphaMap:Z,alphaTest:me,alphaHash:pe,combine:T.combine,mapUv:yt&&_(T.map.channel),aoMapUv:N&&_(T.aoMap.channel),lightMapUv:wn&&_(T.lightMap.channel),bumpMapUv:Ze&&_(T.bumpMap.channel),normalMapUv:Qe&&_(T.normalMap.channel),displacementMapUv:we&&_(T.displacementMap.channel),emissiveMapUv:xt&&_(T.emissiveMap.channel),metalnessMapUv:Re&&_(T.metalnessMap.channel),roughnessMapUv:R&&_(T.roughnessMap.channel),anisotropyMapUv:fe&&_(T.anisotropyMap.channel),clearcoatMapUv:be&&_(T.clearcoatMap.channel),clearcoatNormalMapUv:nt&&_(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&_(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&_(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&_(T.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&_(T.sheenColorMap.channel),sheenRoughnessMapUv:xe&&_(T.sheenRoughnessMap.channel),specularMapUv:et&&_(T.specularMap.channel),specularColorMapUv:We&&_(T.specularColorMap.channel),specularIntensityMapUv:_t&&_(T.specularIntensityMap.channel),transmissionMapUv:U&&_(T.transmissionMap.channel),thicknessMapUv:le&&_(T.thicknessMap.channel),alphaMapUv:Z&&_(T.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(Qe||S),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!Q.attributes.uv&&(yt||Z),fog:!!Y,useFog:T.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ue,skinning:H.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:Ae,morphTextureStride:je,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:Rt,decodeVideoTexture:yt&&T.map.isVideoTexture===!0&&Je.getTransfer(T.map.colorSpace)===ht,decodeVideoTextureEmissive:xt&&T.emissiveMap.isVideoTexture===!0&&Je.getTransfer(T.emissiveMap.colorSpace)===ht,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===_n,flipSided:T.side===ln,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:He&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&T.extensions.multiDraw===!0||Ye)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Yt.vertexUv1s=l.has(1),Yt.vertexUv2s=l.has(2),Yt.vertexUv3s=l.has(3),l.clear(),Yt}function f(T){const E=[];if(T.shaderID?E.push(T.shaderID):(E.push(T.customVertexShaderID),E.push(T.customFragmentShaderID)),T.defines!==void 0)for(const D in T.defines)E.push(D),E.push(T.defines[D]);return T.isRawShaderMaterial===!1&&(v(E,T),M(E,T),E.push(s.outputColorSpace)),E.push(T.customProgramCacheKey),E.join()}function v(T,E){T.push(E.precision),T.push(E.outputColorSpace),T.push(E.envMapMode),T.push(E.envMapCubeUVHeight),T.push(E.mapUv),T.push(E.alphaMapUv),T.push(E.lightMapUv),T.push(E.aoMapUv),T.push(E.bumpMapUv),T.push(E.normalMapUv),T.push(E.displacementMapUv),T.push(E.emissiveMapUv),T.push(E.metalnessMapUv),T.push(E.roughnessMapUv),T.push(E.anisotropyMapUv),T.push(E.clearcoatMapUv),T.push(E.clearcoatNormalMapUv),T.push(E.clearcoatRoughnessMapUv),T.push(E.iridescenceMapUv),T.push(E.iridescenceThicknessMapUv),T.push(E.sheenColorMapUv),T.push(E.sheenRoughnessMapUv),T.push(E.specularMapUv),T.push(E.specularColorMapUv),T.push(E.specularIntensityMapUv),T.push(E.transmissionMapUv),T.push(E.thicknessMapUv),T.push(E.combine),T.push(E.fogExp2),T.push(E.sizeAttenuation),T.push(E.morphTargetsCount),T.push(E.morphAttributeCount),T.push(E.numDirLights),T.push(E.numPointLights),T.push(E.numSpotLights),T.push(E.numSpotLightMaps),T.push(E.numHemiLights),T.push(E.numRectAreaLights),T.push(E.numDirLightShadows),T.push(E.numPointLightShadows),T.push(E.numSpotLightShadows),T.push(E.numSpotLightShadowsWithMaps),T.push(E.numLightProbes),T.push(E.shadowMapType),T.push(E.toneMapping),T.push(E.numClippingPlanes),T.push(E.numClipIntersection),T.push(E.depthPacking)}function M(T,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),T.push(a.mask)}function b(T){const E=g[T.type];let D;if(E){const z=oi[E];D=To.clone(z.uniforms)}else D=T.uniforms;return D}function w(T,E){let D;for(let z=0,H=h.length;z<H;z++){const Y=h[z];if(Y.cacheKey===E){D=Y,++D.usedTimes;break}}return D===void 0&&(D=new ME(s,E,T,r),h.push(D)),D}function A(T){if(--T.usedTimes===0){const E=h.indexOf(T);h[E]=h[h.length-1],h.pop(),T.destroy()}}function C(T){c.remove(T)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:b,acquireProgram:w,releaseProgram:A,releaseShaderCache:C,programs:h,dispose:P}}function AE(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function wE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function nf(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function sf(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u,d,p,g,_,m){let f=s[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},s[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=m),e++,f}function a(u,d,p,g,_,m){const f=o(u,d,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):t.push(f)}function c(u,d,p,g,_,m){const f=o(u,d,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):t.unshift(f)}function l(u,d){t.length>1&&t.sort(u||wE),n.length>1&&n.sort(d||nf),i.length>1&&i.sort(d||nf)}function h(){for(let u=e,d=s.length;u<d;u++){const p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function RE(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new sf,s.set(n,[o])):i>=r.length?(o=new sf,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function CE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Te};break;case"SpotLight":t={position:new L,direction:new L,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Te,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":t={color:new Te,position:new L,halfWidth:new L,halfHeight:new L};break}return s[e.id]=t,t}}}function PE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let DE=0;function LE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function NE(s){const e=new CE,t=PE(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);const i=new L,r=new Ge,o=new Ge;function a(l){let h=0,u=0,d=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,v=0,M=0,b=0,w=0,A=0,C=0;l.sort(LE);for(let T=0,E=l.length;T<E;T++){const D=l[T],z=D.color,H=D.intensity,Y=D.distance,Q=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=z.r*H,u+=z.g*H,d+=z.b*H;else if(D.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(D.sh.coefficients[q],H);C++}else if(D.isDirectionalLight){const q=e.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const ie=D.shadow,W=t.get(D);W.shadowIntensity=ie.intensity,W.shadowBias=ie.bias,W.shadowNormalBias=ie.normalBias,W.shadowRadius=ie.radius,W.shadowMapSize=ie.mapSize,n.directionalShadow[p]=W,n.directionalShadowMap[p]=Q,n.directionalShadowMatrix[p]=D.shadow.matrix,v++}n.directional[p]=q,p++}else if(D.isSpotLight){const q=e.get(D);q.position.setFromMatrixPosition(D.matrixWorld),q.color.copy(z).multiplyScalar(H),q.distance=Y,q.coneCos=Math.cos(D.angle),q.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),q.decay=D.decay,n.spot[_]=q;const ie=D.shadow;if(D.map&&(n.spotLightMap[w]=D.map,w++,ie.updateMatrices(D),D.castShadow&&A++),n.spotLightMatrix[_]=ie.matrix,D.castShadow){const W=t.get(D);W.shadowIntensity=ie.intensity,W.shadowBias=ie.bias,W.shadowNormalBias=ie.normalBias,W.shadowRadius=ie.radius,W.shadowMapSize=ie.mapSize,n.spotShadow[_]=W,n.spotShadowMap[_]=Q,b++}_++}else if(D.isRectAreaLight){const q=e.get(D);q.color.copy(z).multiplyScalar(H),q.halfWidth.set(D.width*.5,0,0),q.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=q,m++}else if(D.isPointLight){const q=e.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),q.distance=D.distance,q.decay=D.decay,D.castShadow){const ie=D.shadow,W=t.get(D);W.shadowIntensity=ie.intensity,W.shadowBias=ie.bias,W.shadowNormalBias=ie.normalBias,W.shadowRadius=ie.radius,W.shadowMapSize=ie.mapSize,W.shadowCameraNear=ie.camera.near,W.shadowCameraFar=ie.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=Q,n.pointShadowMatrix[g]=D.shadow.matrix,M++}n.point[g]=q,g++}else if(D.isHemisphereLight){const q=e.get(D);q.skyColor.copy(D.color).multiplyScalar(H),q.groundColor.copy(D.groundColor).multiplyScalar(H),n.hemi[f]=q,f++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_FLOAT_1,n.rectAreaLTC2=ce.LTC_FLOAT_2):(n.rectAreaLTC1=ce.LTC_HALF_1,n.rectAreaLTC2=ce.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==f||P.numDirectionalShadows!==v||P.numPointShadows!==M||P.numSpotShadows!==b||P.numSpotMaps!==w||P.numLightProbes!==C)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=b+w-A,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=C,P.directionalLength=p,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=f,P.numDirectionalShadows=v,P.numPointShadows=M,P.numSpotShadows=b,P.numSpotMaps=w,P.numLightProbes=C,n.version=DE++)}function c(l,h){let u=0,d=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let f=0,v=l.length;f<v;f++){const M=l[f];if(M.isDirectionalLight){const b=n.directional[u];b.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(m),u++}else if(M.isSpotLight){const b=n.spot[p];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(m),p++}else if(M.isRectAreaLight){const b=n.rectArea[g];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const b=n.point[d];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){const b=n.hemi[_];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function rf(s){const e=new NE(s),t=[],n=[];function i(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function IE(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new rf(s),e.set(i,[a])):r>=o.length?(a=new rf(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const UE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,OE=`uniform sampler2D shadow_pass;
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
}`;function FE(s,e,t){let n=new iu;const i=new De,r=new De,o=new ot,a=new Ub({depthPacking:R_}),c=new Ob,l={},h=t.maxTextureSize,u={[Ii]:ln,[ln]:Ii,[_n]:_n},d=new en({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:UE,fragmentShader:OE}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new At;g.setAttribute("position",new Tt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ie(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lp;let f=this.type;this.render=function(A,C,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const T=s.getRenderTarget(),E=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),z=s.state;z.setBlending(Di),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const H=f!==vi&&this.type===vi,Y=f===vi&&this.type!==vi;for(let Q=0,q=A.length;Q<q;Q++){const ie=A[Q],W=ie.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const ue=W.getFrameExtents();if(i.multiply(ue),r.copy(W.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/ue.x),i.x=r.x*ue.x,W.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/ue.y),i.y=r.y*ue.y,W.mapSize.y=r.y)),W.map===null||H===!0||Y===!0){const Ae=this.type!==vi?{minFilter:hn,magFilter:hn}:{};W.map!==null&&W.map.dispose(),W.map=new jn(i.x,i.y,Ae),W.map.texture.name=ie.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();const _e=W.getViewportCount();for(let Ae=0;Ae<_e;Ae++){const je=W.getViewport(Ae);o.set(r.x*je.x,r.y*je.y,r.x*je.z,r.y*je.w),z.viewport(o),W.updateMatrices(ie,Ae),n=W.getFrustum(),b(C,P,W.camera,ie,this.type)}W.isPointLightShadow!==!0&&this.type===vi&&v(W,P),W.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(T,E,D)};function v(A,C){const P=e.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new jn(i.x,i.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(C,null,P,d,_,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(C,null,P,p,_,null)}function M(A,C,P,T){let E=null;const D=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)E=D;else if(E=P.isPointLight===!0?c:a,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const z=E.uuid,H=C.uuid;let Y=l[z];Y===void 0&&(Y={},l[z]=Y);let Q=Y[H];Q===void 0&&(Q=E.clone(),Y[H]=Q,C.addEventListener("dispose",w)),E=Q}if(E.visible=C.visible,E.wireframe=C.wireframe,T===vi?E.side=C.shadowSide!==null?C.shadowSide:C.side:E.side=C.shadowSide!==null?C.shadowSide:u[C.side],E.alphaMap=C.alphaMap,E.alphaTest=C.alphaTest,E.map=C.map,E.clipShadows=C.clipShadows,E.clippingPlanes=C.clippingPlanes,E.clipIntersection=C.clipIntersection,E.displacementMap=C.displacementMap,E.displacementScale=C.displacementScale,E.displacementBias=C.displacementBias,E.wireframeLinewidth=C.wireframeLinewidth,E.linewidth=C.linewidth,P.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const z=s.properties.get(E);z.light=P}return E}function b(A,C,P,T,E){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&E===vi)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const H=e.update(A),Y=A.material;if(Array.isArray(Y)){const Q=H.groups;for(let q=0,ie=Q.length;q<ie;q++){const W=Q[q],ue=Y[W.materialIndex];if(ue&&ue.visible){const _e=M(A,ue,T,E);A.onBeforeShadow(s,A,C,P,H,_e,W),s.renderBufferDirect(P,null,H,_e,A,W),A.onAfterShadow(s,A,C,P,H,_e,W)}}}else if(Y.visible){const Q=M(A,Y,T,E);A.onBeforeShadow(s,A,C,P,H,Q,null),s.renderBufferDirect(P,null,H,Q,A,null),A.onAfterShadow(s,A,C,P,H,Q,null)}}const z=A.children;for(let H=0,Y=z.length;H<Y;H++)b(z[H],C,P,T,E)}function w(A){A.target.removeEventListener("dispose",w);for(const P in l){const T=l[P],E=A.target.uuid;E in T&&(T[E].dispose(),delete T[E])}}}const kE={[Hl]:Vl,[Wl]:jl,[Xl]:Yl,[Ar]:ql,[Vl]:Hl,[jl]:Wl,[Yl]:Xl,[ql]:Ar};function BE(s,e){function t(){let U=!1;const le=new ot;let V=null;const Z=new ot(0,0,0,0);return{setMask:function(me){V!==me&&!U&&(s.colorMask(me,me,me,me),V=me)},setLocked:function(me){U=me},setClear:function(me,pe,He,Rt,Yt){Yt===!0&&(me*=Rt,pe*=Rt,He*=Rt),le.set(me,pe,He,Rt),Z.equals(le)===!1&&(s.clearColor(me,pe,He,Rt),Z.copy(le))},reset:function(){U=!1,V=null,Z.set(-1,0,0,0)}}}function n(){let U=!1,le=!1,V=null,Z=null,me=null;return{setReversed:function(pe){if(le!==pe){const He=e.get("EXT_clip_control");le?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT);const Rt=me;me=null,this.setClear(Rt)}le=pe},getReversed:function(){return le},setTest:function(pe){pe?de(s.DEPTH_TEST):Ue(s.DEPTH_TEST)},setMask:function(pe){V!==pe&&!U&&(s.depthMask(pe),V=pe)},setFunc:function(pe){if(le&&(pe=kE[pe]),Z!==pe){switch(pe){case Hl:s.depthFunc(s.NEVER);break;case Vl:s.depthFunc(s.ALWAYS);break;case Wl:s.depthFunc(s.LESS);break;case Ar:s.depthFunc(s.LEQUAL);break;case Xl:s.depthFunc(s.EQUAL);break;case ql:s.depthFunc(s.GEQUAL);break;case jl:s.depthFunc(s.GREATER);break;case Yl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Z=pe}},setLocked:function(pe){U=pe},setClear:function(pe){me!==pe&&(le&&(pe=1-pe),s.clearDepth(pe),me=pe)},reset:function(){U=!1,V=null,Z=null,me=null,le=!1}}}function i(){let U=!1,le=null,V=null,Z=null,me=null,pe=null,He=null,Rt=null,Yt=null;return{setTest:function(lt){U||(lt?de(s.STENCIL_TEST):Ue(s.STENCIL_TEST))},setMask:function(lt){le!==lt&&!U&&(s.stencilMask(lt),le=lt)},setFunc:function(lt,Fn,di){(V!==lt||Z!==Fn||me!==di)&&(s.stencilFunc(lt,Fn,di),V=lt,Z=Fn,me=di)},setOp:function(lt,Fn,di){(pe!==lt||He!==Fn||Rt!==di)&&(s.stencilOp(lt,Fn,di),pe=lt,He=Fn,Rt=di)},setLocked:function(lt){U=lt},setClear:function(lt){Yt!==lt&&(s.clearStencil(lt),Yt=lt)},reset:function(){U=!1,le=null,V=null,Z=null,me=null,pe=null,He=null,Rt=null,Yt=null}}}const r=new t,o=new n,a=new i,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,v=null,M=null,b=null,w=null,A=null,C=new Te(0,0,0),P=0,T=!1,E=null,D=null,z=null,H=null,Y=null;const Q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,ie=0;const W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(W)[1]),q=ie>=1):W.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),q=ie>=2);let ue=null,_e={};const Ae=s.getParameter(s.SCISSOR_BOX),je=s.getParameter(s.VIEWPORT),gt=new ot().fromArray(Ae),$=new ot().fromArray(je);function ae(U,le,V,Z){const me=new Uint8Array(4),pe=s.createTexture();s.bindTexture(U,pe),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let He=0;He<V;He++)U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY?s.texImage3D(le,0,s.RGBA,1,1,Z,0,s.RGBA,s.UNSIGNED_BYTE,me):s.texImage2D(le+He,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,me);return pe}const Se={};Se[s.TEXTURE_2D]=ae(s.TEXTURE_2D,s.TEXTURE_2D,1),Se[s.TEXTURE_CUBE_MAP]=ae(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[s.TEXTURE_2D_ARRAY]=ae(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Se[s.TEXTURE_3D]=ae(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),de(s.DEPTH_TEST),o.setFunc(Ar),Ze(!1),Qe(Vu),de(s.CULL_FACE),N(Di);function de(U){h[U]!==!0&&(s.enable(U),h[U]=!0)}function Ue(U){h[U]!==!1&&(s.disable(U),h[U]=!1)}function ze(U,le){return u[U]!==le?(s.bindFramebuffer(U,le),u[U]=le,U===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=le),U===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=le),!0):!1}function Ye(U,le){let V=p,Z=!1;if(U){V=d.get(le),V===void 0&&(V=[],d.set(le,V));const me=U.textures;if(V.length!==me.length||V[0]!==s.COLOR_ATTACHMENT0){for(let pe=0,He=me.length;pe<He;pe++)V[pe]=s.COLOR_ATTACHMENT0+pe;V.length=me.length,Z=!0}}else V[0]!==s.BACK&&(V[0]=s.BACK,Z=!0);Z&&s.drawBuffers(V)}function yt(U){return g!==U?(s.useProgram(U),g=U,!0):!1}const tt={[bs]:s.FUNC_ADD,[s_]:s.FUNC_SUBTRACT,[r_]:s.FUNC_REVERSE_SUBTRACT};tt[o_]=s.MIN,tt[a_]=s.MAX;const Pt={[c_]:s.ZERO,[l_]:s.ONE,[h_]:s.SRC_COLOR,[Gl]:s.SRC_ALPHA,[g_]:s.SRC_ALPHA_SATURATE,[p_]:s.DST_COLOR,[d_]:s.DST_ALPHA,[u_]:s.ONE_MINUS_SRC_COLOR,[zl]:s.ONE_MINUS_SRC_ALPHA,[m_]:s.ONE_MINUS_DST_COLOR,[f_]:s.ONE_MINUS_DST_ALPHA,[__]:s.CONSTANT_COLOR,[b_]:s.ONE_MINUS_CONSTANT_COLOR,[v_]:s.CONSTANT_ALPHA,[x_]:s.ONE_MINUS_CONSTANT_ALPHA};function N(U,le,V,Z,me,pe,He,Rt,Yt,lt){if(U===Di){_===!0&&(Ue(s.BLEND),_=!1);return}if(_===!1&&(de(s.BLEND),_=!0),U!==i_){if(U!==m||lt!==T){if((f!==bs||b!==bs)&&(s.blendEquation(s.FUNC_ADD),f=bs,b=bs),lt)switch(U){case nr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Gt:s.blendFunc(s.ONE,s.ONE);break;case Wu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Xu:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case nr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Gt:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Wu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Xu:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}v=null,M=null,w=null,A=null,C.set(0,0,0),P=0,m=U,T=lt}return}me=me||le,pe=pe||V,He=He||Z,(le!==f||me!==b)&&(s.blendEquationSeparate(tt[le],tt[me]),f=le,b=me),(V!==v||Z!==M||pe!==w||He!==A)&&(s.blendFuncSeparate(Pt[V],Pt[Z],Pt[pe],Pt[He]),v=V,M=Z,w=pe,A=He),(Rt.equals(C)===!1||Yt!==P)&&(s.blendColor(Rt.r,Rt.g,Rt.b,Yt),C.copy(Rt),P=Yt),m=U,T=!1}function wn(U,le){U.side===_n?Ue(s.CULL_FACE):de(s.CULL_FACE);let V=U.side===ln;le&&(V=!V),Ze(V),U.blending===nr&&U.transparent===!1?N(Di):N(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);const Z=U.stencilWrite;a.setTest(Z),Z&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),xt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?de(s.SAMPLE_ALPHA_TO_COVERAGE):Ue(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ze(U){E!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),E=U)}function Qe(U){U!==t_?(de(s.CULL_FACE),U!==D&&(U===Vu?s.cullFace(s.BACK):U===n_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ue(s.CULL_FACE),D=U}function we(U){U!==z&&(q&&s.lineWidth(U),z=U)}function xt(U,le,V){U?(de(s.POLYGON_OFFSET_FILL),(H!==le||Y!==V)&&(s.polygonOffset(le,V),H=le,Y=V)):Ue(s.POLYGON_OFFSET_FILL)}function Re(U){U?de(s.SCISSOR_TEST):Ue(s.SCISSOR_TEST)}function R(U){U===void 0&&(U=s.TEXTURE0+Q-1),ue!==U&&(s.activeTexture(U),ue=U)}function S(U,le,V){V===void 0&&(ue===null?V=s.TEXTURE0+Q-1:V=ue);let Z=_e[V];Z===void 0&&(Z={type:void 0,texture:void 0},_e[V]=Z),(Z.type!==U||Z.texture!==le)&&(ue!==V&&(s.activeTexture(V),ue=V),s.bindTexture(U,le||Se[U]),Z.type=U,Z.texture=le)}function k(){const U=_e[ue];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function J(){try{s.compressedTexImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function te(){try{s.compressedTexImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function K(){try{s.texSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ye(){try{s.texSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function fe(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function be(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function nt(){try{s.texStorage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function oe(){try{s.texStorage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ve(){try{s.texImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ne(){try{s.texImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Oe(U){gt.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),gt.copy(U))}function xe(U){$.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),$.copy(U))}function et(U,le){let V=l.get(le);V===void 0&&(V=new WeakMap,l.set(le,V));let Z=V.get(U);Z===void 0&&(Z=s.getUniformBlockIndex(le,U.name),V.set(U,Z))}function We(U,le){const Z=l.get(le).get(U);c.get(le)!==Z&&(s.uniformBlockBinding(le,Z,U.__bindingPointIndex),c.set(le,Z))}function _t(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},ue=null,_e={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,v=null,M=null,b=null,w=null,A=null,C=new Te(0,0,0),P=0,T=!1,E=null,D=null,z=null,H=null,Y=null,gt.set(0,0,s.canvas.width,s.canvas.height),$.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:de,disable:Ue,bindFramebuffer:ze,drawBuffers:Ye,useProgram:yt,setBlending:N,setMaterial:wn,setFlipSided:Ze,setCullFace:Qe,setLineWidth:we,setPolygonOffset:xt,setScissorTest:Re,activeTexture:R,bindTexture:S,unbindTexture:k,compressedTexImage2D:J,compressedTexImage3D:te,texImage2D:ve,texImage3D:Ne,updateUBOMapping:et,uniformBlockBinding:We,texStorage2D:nt,texStorage3D:oe,texSubImage2D:K,texSubImage3D:ye,compressedTexSubImage2D:fe,compressedTexSubImage3D:be,scissor:Oe,viewport:xe,reset:_t}}function GE(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new De,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,S){return p?new OffscreenCanvas(R,S):yo("canvas")}function _(R,S,k){let J=1;const te=Re(R);if((te.width>k||te.height>k)&&(J=k/Math.max(te.width,te.height)),J<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const K=Math.floor(J*te.width),ye=Math.floor(J*te.height);u===void 0&&(u=g(K,ye));const fe=S?g(K,ye):u;return fe.width=K,fe.height=ye,fe.getContext("2d").drawImage(R,0,0,K,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+K+"x"+ye+")."),fe}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),R;return R}function m(R){return R.generateMipmaps}function f(R){s.generateMipmap(R)}function v(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function M(R,S,k,J,te=!1){if(R!==null){if(s[R]!==void 0)return s[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let K=S;if(S===s.RED&&(k===s.FLOAT&&(K=s.R32F),k===s.HALF_FLOAT&&(K=s.R16F),k===s.UNSIGNED_BYTE&&(K=s.R8)),S===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(K=s.R8UI),k===s.UNSIGNED_SHORT&&(K=s.R16UI),k===s.UNSIGNED_INT&&(K=s.R32UI),k===s.BYTE&&(K=s.R8I),k===s.SHORT&&(K=s.R16I),k===s.INT&&(K=s.R32I)),S===s.RG&&(k===s.FLOAT&&(K=s.RG32F),k===s.HALF_FLOAT&&(K=s.RG16F),k===s.UNSIGNED_BYTE&&(K=s.RG8)),S===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&(K=s.RG8UI),k===s.UNSIGNED_SHORT&&(K=s.RG16UI),k===s.UNSIGNED_INT&&(K=s.RG32UI),k===s.BYTE&&(K=s.RG8I),k===s.SHORT&&(K=s.RG16I),k===s.INT&&(K=s.RG32I)),S===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&(K=s.RGB8UI),k===s.UNSIGNED_SHORT&&(K=s.RGB16UI),k===s.UNSIGNED_INT&&(K=s.RGB32UI),k===s.BYTE&&(K=s.RGB8I),k===s.SHORT&&(K=s.RGB16I),k===s.INT&&(K=s.RGB32I)),S===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&(K=s.RGBA8UI),k===s.UNSIGNED_SHORT&&(K=s.RGBA16UI),k===s.UNSIGNED_INT&&(K=s.RGBA32UI),k===s.BYTE&&(K=s.RGBA8I),k===s.SHORT&&(K=s.RGBA16I),k===s.INT&&(K=s.RGBA32I)),S===s.RGB&&k===s.UNSIGNED_INT_5_9_9_9_REV&&(K=s.RGB9_E5),S===s.RGBA){const ye=te?fc:Je.getTransfer(J);k===s.FLOAT&&(K=s.RGBA32F),k===s.HALF_FLOAT&&(K=s.RGBA16F),k===s.UNSIGNED_BYTE&&(K=ye===ht?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT_4_4_4_4&&(K=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(K=s.RGB5_A1)}return(K===s.R16F||K===s.R32F||K===s.RG16F||K===s.RG32F||K===s.RGBA16F||K===s.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function b(R,S){let k;return R?S===null||S===Rs||S===Pr?k=s.DEPTH24_STENCIL8:S===Xn?k=s.DEPTH32F_STENCIL8:S===Mo&&(k=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Rs||S===Pr?k=s.DEPTH_COMPONENT24:S===Xn?k=s.DEPTH_COMPONENT32F:S===Mo&&(k=s.DEPTH_COMPONENT16),k}function w(R,S){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==hn&&R.minFilter!==Tn?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function A(R){const S=R.target;S.removeEventListener("dispose",A),P(S),S.isVideoTexture&&h.delete(S)}function C(R){const S=R.target;S.removeEventListener("dispose",C),E(S)}function P(R){const S=n.get(R);if(S.__webglInit===void 0)return;const k=R.source,J=d.get(k);if(J){const te=J[S.__cacheKey];te.usedTimes--,te.usedTimes===0&&T(R),Object.keys(J).length===0&&d.delete(k)}n.remove(R)}function T(R){const S=n.get(R);s.deleteTexture(S.__webglTexture);const k=R.source,J=d.get(k);delete J[S.__cacheKey],o.memory.textures--}function E(R){const S=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(S.__webglFramebuffer[J]))for(let te=0;te<S.__webglFramebuffer[J].length;te++)s.deleteFramebuffer(S.__webglFramebuffer[J][te]);else s.deleteFramebuffer(S.__webglFramebuffer[J]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[J])}else{if(Array.isArray(S.__webglFramebuffer))for(let J=0;J<S.__webglFramebuffer.length;J++)s.deleteFramebuffer(S.__webglFramebuffer[J]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let J=0;J<S.__webglColorRenderbuffer.length;J++)S.__webglColorRenderbuffer[J]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[J]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const k=R.textures;for(let J=0,te=k.length;J<te;J++){const K=n.get(k[J]);K.__webglTexture&&(s.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(k[J])}n.remove(R)}let D=0;function z(){D=0}function H(){const R=D;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),D+=1,R}function Y(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function Q(R,S){const k=n.get(R);if(R.isVideoTexture&&we(R),R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){const J=R.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(k,R,S);return}}t.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+S)}function q(R,S){const k=n.get(R);if(R.version>0&&k.__version!==R.version){$(k,R,S);return}t.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+S)}function ie(R,S){const k=n.get(R);if(R.version>0&&k.__version!==R.version){$(k,R,S);return}t.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+S)}function W(R,S){const k=n.get(R);if(R.version>0&&k.__version!==R.version){ae(k,R,S);return}t.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+S)}const ue={[Cr]:s.REPEAT,[Ji]:s.CLAMP_TO_EDGE,[dc]:s.MIRRORED_REPEAT},_e={[hn]:s.NEAREST,[bp]:s.NEAREST_MIPMAP_NEAREST,[oo]:s.NEAREST_MIPMAP_LINEAR,[Tn]:s.LINEAR,[nc]:s.LINEAR_MIPMAP_NEAREST,[wi]:s.LINEAR_MIPMAP_LINEAR},Ae={[P_]:s.NEVER,[O_]:s.ALWAYS,[D_]:s.LESS,[Pp]:s.LEQUAL,[L_]:s.EQUAL,[U_]:s.GEQUAL,[N_]:s.GREATER,[I_]:s.NOTEQUAL};function je(R,S){if(S.type===Xn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Tn||S.magFilter===nc||S.magFilter===oo||S.magFilter===wi||S.minFilter===Tn||S.minFilter===nc||S.minFilter===oo||S.minFilter===wi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,ue[S.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,ue[S.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,ue[S.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,_e[S.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,_e[S.minFilter]),S.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,Ae[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===hn||S.minFilter!==oo&&S.minFilter!==wi||S.type===Xn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");s.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function gt(R,S){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",A));const J=S.source;let te=d.get(J);te===void 0&&(te={},d.set(J,te));const K=Y(S);if(K!==R.__cacheKey){te[K]===void 0&&(te[K]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,k=!0),te[K].usedTimes++;const ye=te[R.__cacheKey];ye!==void 0&&(te[R.__cacheKey].usedTimes--,ye.usedTimes===0&&T(S)),R.__cacheKey=K,R.__webglTexture=te[K].texture}return k}function $(R,S,k){let J=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(J=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(J=s.TEXTURE_3D);const te=gt(R,S),K=S.source;t.bindTexture(J,R.__webglTexture,s.TEXTURE0+k);const ye=n.get(K);if(K.version!==ye.__version||te===!0){t.activeTexture(s.TEXTURE0+k);const fe=Je.getPrimaries(Je.workingColorSpace),be=S.colorSpace===qi?null:Je.getPrimaries(S.colorSpace),nt=S.colorSpace===qi||fe===be?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let oe=_(S.image,!1,i.maxTextureSize);oe=xt(S,oe);const ve=r.convert(S.format,S.colorSpace),Ne=r.convert(S.type);let Oe=M(S.internalFormat,ve,Ne,S.colorSpace,S.isVideoTexture);je(J,S);let xe;const et=S.mipmaps,We=S.isVideoTexture!==!0,_t=ye.__version===void 0||te===!0,U=K.dataReady,le=w(S,oe);if(S.isDepthTexture)Oe=b(S.format===Dr,S.type),_t&&(We?t.texStorage2D(s.TEXTURE_2D,1,Oe,oe.width,oe.height):t.texImage2D(s.TEXTURE_2D,0,Oe,oe.width,oe.height,0,ve,Ne,null));else if(S.isDataTexture)if(et.length>0){We&&_t&&t.texStorage2D(s.TEXTURE_2D,le,Oe,et[0].width,et[0].height);for(let V=0,Z=et.length;V<Z;V++)xe=et[V],We?U&&t.texSubImage2D(s.TEXTURE_2D,V,0,0,xe.width,xe.height,ve,Ne,xe.data):t.texImage2D(s.TEXTURE_2D,V,Oe,xe.width,xe.height,0,ve,Ne,xe.data);S.generateMipmaps=!1}else We?(_t&&t.texStorage2D(s.TEXTURE_2D,le,Oe,oe.width,oe.height),U&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,oe.width,oe.height,ve,Ne,oe.data)):t.texImage2D(s.TEXTURE_2D,0,Oe,oe.width,oe.height,0,ve,Ne,oe.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){We&&_t&&t.texStorage3D(s.TEXTURE_2D_ARRAY,le,Oe,et[0].width,et[0].height,oe.depth);for(let V=0,Z=et.length;V<Z;V++)if(xe=et[V],S.format!==On)if(ve!==null)if(We){if(U)if(S.layerUpdates.size>0){const me=Ud(xe.width,xe.height,S.format,S.type);for(const pe of S.layerUpdates){const He=xe.data.subarray(pe*me/xe.data.BYTES_PER_ELEMENT,(pe+1)*me/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,V,0,0,pe,xe.width,xe.height,1,ve,He)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,V,0,0,0,xe.width,xe.height,oe.depth,ve,xe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,V,Oe,xe.width,xe.height,oe.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else We?U&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,V,0,0,0,xe.width,xe.height,oe.depth,ve,Ne,xe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,V,Oe,xe.width,xe.height,oe.depth,0,ve,Ne,xe.data)}else{We&&_t&&t.texStorage2D(s.TEXTURE_2D,le,Oe,et[0].width,et[0].height);for(let V=0,Z=et.length;V<Z;V++)xe=et[V],S.format!==On?ve!==null?We?U&&t.compressedTexSubImage2D(s.TEXTURE_2D,V,0,0,xe.width,xe.height,ve,xe.data):t.compressedTexImage2D(s.TEXTURE_2D,V,Oe,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?U&&t.texSubImage2D(s.TEXTURE_2D,V,0,0,xe.width,xe.height,ve,Ne,xe.data):t.texImage2D(s.TEXTURE_2D,V,Oe,xe.width,xe.height,0,ve,Ne,xe.data)}else if(S.isDataArrayTexture)if(We){if(_t&&t.texStorage3D(s.TEXTURE_2D_ARRAY,le,Oe,oe.width,oe.height,oe.depth),U)if(S.layerUpdates.size>0){const V=Ud(oe.width,oe.height,S.format,S.type);for(const Z of S.layerUpdates){const me=oe.data.subarray(Z*V/oe.data.BYTES_PER_ELEMENT,(Z+1)*V/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Z,oe.width,oe.height,1,ve,Ne,me)}S.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,ve,Ne,oe.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Oe,oe.width,oe.height,oe.depth,0,ve,Ne,oe.data);else if(S.isData3DTexture)We?(_t&&t.texStorage3D(s.TEXTURE_3D,le,Oe,oe.width,oe.height,oe.depth),U&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,ve,Ne,oe.data)):t.texImage3D(s.TEXTURE_3D,0,Oe,oe.width,oe.height,oe.depth,0,ve,Ne,oe.data);else if(S.isFramebufferTexture){if(_t)if(We)t.texStorage2D(s.TEXTURE_2D,le,Oe,oe.width,oe.height);else{let V=oe.width,Z=oe.height;for(let me=0;me<le;me++)t.texImage2D(s.TEXTURE_2D,me,Oe,V,Z,0,ve,Ne,null),V>>=1,Z>>=1}}else if(et.length>0){if(We&&_t){const V=Re(et[0]);t.texStorage2D(s.TEXTURE_2D,le,Oe,V.width,V.height)}for(let V=0,Z=et.length;V<Z;V++)xe=et[V],We?U&&t.texSubImage2D(s.TEXTURE_2D,V,0,0,ve,Ne,xe):t.texImage2D(s.TEXTURE_2D,V,Oe,ve,Ne,xe);S.generateMipmaps=!1}else if(We){if(_t){const V=Re(oe);t.texStorage2D(s.TEXTURE_2D,le,Oe,V.width,V.height)}U&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ve,Ne,oe)}else t.texImage2D(s.TEXTURE_2D,0,Oe,ve,Ne,oe);m(S)&&f(J),ye.__version=K.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function ae(R,S,k){if(S.image.length!==6)return;const J=gt(R,S),te=S.source;t.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+k);const K=n.get(te);if(te.version!==K.__version||J===!0){t.activeTexture(s.TEXTURE0+k);const ye=Je.getPrimaries(Je.workingColorSpace),fe=S.colorSpace===qi?null:Je.getPrimaries(S.colorSpace),be=S.colorSpace===qi||ye===fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const nt=S.isCompressedTexture||S.image[0].isCompressedTexture,oe=S.image[0]&&S.image[0].isDataTexture,ve=[];for(let Z=0;Z<6;Z++)!nt&&!oe?ve[Z]=_(S.image[Z],!0,i.maxCubemapSize):ve[Z]=oe?S.image[Z].image:S.image[Z],ve[Z]=xt(S,ve[Z]);const Ne=ve[0],Oe=r.convert(S.format,S.colorSpace),xe=r.convert(S.type),et=M(S.internalFormat,Oe,xe,S.colorSpace),We=S.isVideoTexture!==!0,_t=K.__version===void 0||J===!0,U=te.dataReady;let le=w(S,Ne);je(s.TEXTURE_CUBE_MAP,S);let V;if(nt){We&&_t&&t.texStorage2D(s.TEXTURE_CUBE_MAP,le,et,Ne.width,Ne.height);for(let Z=0;Z<6;Z++){V=ve[Z].mipmaps;for(let me=0;me<V.length;me++){const pe=V[me];S.format!==On?Oe!==null?We?U&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me,0,0,pe.width,pe.height,Oe,pe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me,et,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?U&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me,0,0,pe.width,pe.height,Oe,xe,pe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me,et,pe.width,pe.height,0,Oe,xe,pe.data)}}}else{if(V=S.mipmaps,We&&_t){V.length>0&&le++;const Z=Re(ve[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,le,et,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(oe){We?U&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ve[Z].width,ve[Z].height,Oe,xe,ve[Z].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,et,ve[Z].width,ve[Z].height,0,Oe,xe,ve[Z].data);for(let me=0;me<V.length;me++){const He=V[me].image[Z].image;We?U&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me+1,0,0,He.width,He.height,Oe,xe,He.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me+1,et,He.width,He.height,0,Oe,xe,He.data)}}else{We?U&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Oe,xe,ve[Z]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,et,Oe,xe,ve[Z]);for(let me=0;me<V.length;me++){const pe=V[me];We?U&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me+1,0,0,Oe,xe,pe.image[Z]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me+1,et,Oe,xe,pe.image[Z])}}}m(S)&&f(s.TEXTURE_CUBE_MAP),K.__version=te.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function Se(R,S,k,J,te,K){const ye=r.convert(k.format,k.colorSpace),fe=r.convert(k.type),be=M(k.internalFormat,ye,fe,k.colorSpace),nt=n.get(S),oe=n.get(k);if(oe.__renderTarget=S,!nt.__hasExternalTextures){const ve=Math.max(1,S.width>>K),Ne=Math.max(1,S.height>>K);te===s.TEXTURE_3D||te===s.TEXTURE_2D_ARRAY?t.texImage3D(te,K,be,ve,Ne,S.depth,0,ye,fe,null):t.texImage2D(te,K,be,ve,Ne,0,ye,fe,null)}t.bindFramebuffer(s.FRAMEBUFFER,R),Qe(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,J,te,oe.__webglTexture,0,Ze(S)):(te===s.TEXTURE_2D||te>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,J,te,oe.__webglTexture,K),t.bindFramebuffer(s.FRAMEBUFFER,null)}function de(R,S,k){if(s.bindRenderbuffer(s.RENDERBUFFER,R),S.depthBuffer){const J=S.depthTexture,te=J&&J.isDepthTexture?J.type:null,K=b(S.stencilBuffer,te),ye=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=Ze(S);Qe(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,fe,K,S.width,S.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,fe,K,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,K,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ye,s.RENDERBUFFER,R)}else{const J=S.textures;for(let te=0;te<J.length;te++){const K=J[te],ye=r.convert(K.format,K.colorSpace),fe=r.convert(K.type),be=M(K.internalFormat,ye,fe,K.colorSpace),nt=Ze(S);k&&Qe(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,nt,be,S.width,S.height):Qe(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,nt,be,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,be,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ue(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(S.depthTexture);J.__renderTarget=S,(!J.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Q(S.depthTexture,0);const te=J.__webglTexture,K=Ze(S);if(S.depthTexture.format===ir)Qe(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,te,0,K):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,te,0);else if(S.depthTexture.format===Dr)Qe(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,te,0,K):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function ze(R){const S=n.get(R),k=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){const J=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),J){const te=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,J.removeEventListener("dispose",te)};J.addEventListener("dispose",te),S.__depthDisposeCallback=te}S.__boundDepthTexture=J}if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Ue(S.__webglFramebuffer,R)}else if(k){S.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[J]),S.__webglDepthbuffer[J]===void 0)S.__webglDepthbuffer[J]=s.createRenderbuffer(),de(S.__webglDepthbuffer[J],R,!1);else{const te=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,K=S.__webglDepthbuffer[J];s.bindRenderbuffer(s.RENDERBUFFER,K),s.framebufferRenderbuffer(s.FRAMEBUFFER,te,s.RENDERBUFFER,K)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),de(S.__webglDepthbuffer,R,!1);else{const J=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,te=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,te),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,te)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ye(R,S,k){const J=n.get(R);S!==void 0&&Se(J.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&ze(R)}function yt(R){const S=R.texture,k=n.get(R),J=n.get(S);R.addEventListener("dispose",C);const te=R.textures,K=R.isWebGLCubeRenderTarget===!0,ye=te.length>1;if(ye||(J.__webglTexture===void 0&&(J.__webglTexture=s.createTexture()),J.__version=S.version,o.memory.textures++),K){k.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer[fe]=[];for(let be=0;be<S.mipmaps.length;be++)k.__webglFramebuffer[fe][be]=s.createFramebuffer()}else k.__webglFramebuffer[fe]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer=[];for(let fe=0;fe<S.mipmaps.length;fe++)k.__webglFramebuffer[fe]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(ye)for(let fe=0,be=te.length;fe<be;fe++){const nt=n.get(te[fe]);nt.__webglTexture===void 0&&(nt.__webglTexture=s.createTexture(),o.memory.textures++)}if(R.samples>0&&Qe(R)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let fe=0;fe<te.length;fe++){const be=te[fe];k.__webglColorRenderbuffer[fe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[fe]);const nt=r.convert(be.format,be.colorSpace),oe=r.convert(be.type),ve=M(be.internalFormat,nt,oe,be.colorSpace,R.isXRRenderTarget===!0),Ne=Ze(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ne,ve,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,k.__webglColorRenderbuffer[fe])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),de(k.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(K){t.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture),je(s.TEXTURE_CUBE_MAP,S);for(let fe=0;fe<6;fe++)if(S.mipmaps&&S.mipmaps.length>0)for(let be=0;be<S.mipmaps.length;be++)Se(k.__webglFramebuffer[fe][be],R,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,be);else Se(k.__webglFramebuffer[fe],R,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(S)&&f(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let fe=0,be=te.length;fe<be;fe++){const nt=te[fe],oe=n.get(nt);t.bindTexture(s.TEXTURE_2D,oe.__webglTexture),je(s.TEXTURE_2D,nt),Se(k.__webglFramebuffer,R,nt,s.COLOR_ATTACHMENT0+fe,s.TEXTURE_2D,0),m(nt)&&f(s.TEXTURE_2D)}t.unbindTexture()}else{let fe=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(fe=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(fe,J.__webglTexture),je(fe,S),S.mipmaps&&S.mipmaps.length>0)for(let be=0;be<S.mipmaps.length;be++)Se(k.__webglFramebuffer[be],R,S,s.COLOR_ATTACHMENT0,fe,be);else Se(k.__webglFramebuffer,R,S,s.COLOR_ATTACHMENT0,fe,0);m(S)&&f(fe),t.unbindTexture()}R.depthBuffer&&ze(R)}function tt(R){const S=R.textures;for(let k=0,J=S.length;k<J;k++){const te=S[k];if(m(te)){const K=v(R),ye=n.get(te).__webglTexture;t.bindTexture(K,ye),f(K),t.unbindTexture()}}}const Pt=[],N=[];function wn(R){if(R.samples>0){if(Qe(R)===!1){const S=R.textures,k=R.width,J=R.height;let te=s.COLOR_BUFFER_BIT;const K=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ye=n.get(R),fe=S.length>1;if(fe)for(let be=0;be<S.length;be++)t.bindFramebuffer(s.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ye.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let be=0;be<S.length;be++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(te|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(te|=s.STENCIL_BUFFER_BIT)),fe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ye.__webglColorRenderbuffer[be]);const nt=n.get(S[be]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,nt,0)}s.blitFramebuffer(0,0,k,J,0,0,k,J,te,s.NEAREST),c===!0&&(Pt.length=0,N.length=0,Pt.push(s.COLOR_ATTACHMENT0+be),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Pt.push(K),N.push(K),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,N)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Pt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),fe)for(let be=0;be<S.length;be++){t.bindFramebuffer(s.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,ye.__webglColorRenderbuffer[be]);const nt=n.get(S[be]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ye.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.TEXTURE_2D,nt,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const S=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function Ze(R){return Math.min(i.maxSamples,R.samples)}function Qe(R){const S=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function we(R){const S=o.render.frame;h.get(R)!==S&&(h.set(R,S),R.update())}function xt(R,S){const k=R.colorSpace,J=R.format,te=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==un&&k!==qi&&(Je.getTransfer(k)===ht?(J!==On||te!==Ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),S}function Re(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=z,this.setTexture2D=Q,this.setTexture2DArray=q,this.setTexture3D=ie,this.setTextureCube=W,this.rebindTextures=Ye,this.setupRenderTarget=yt,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=wn,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=Qe}function zE(s,e){function t(n,i=qi){let r;const o=Je.getTransfer(i);if(n===Ui)return s.UNSIGNED_BYTE;if(n===qh)return s.UNSIGNED_SHORT_4_4_4_4;if(n===jh)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Mp)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===vp)return s.BYTE;if(n===xp)return s.SHORT;if(n===Mo)return s.UNSIGNED_SHORT;if(n===Xh)return s.INT;if(n===Rs)return s.UNSIGNED_INT;if(n===Xn)return s.FLOAT;if(n===Li)return s.HALF_FLOAT;if(n===Ep)return s.ALPHA;if(n===Sp)return s.RGB;if(n===On)return s.RGBA;if(n===yp)return s.LUMINANCE;if(n===Tp)return s.LUMINANCE_ALPHA;if(n===ir)return s.DEPTH_COMPONENT;if(n===Dr)return s.DEPTH_STENCIL;if(n===Yh)return s.RED;if(n===Kh)return s.RED_INTEGER;if(n===Ap)return s.RG;if(n===$h)return s.RG_INTEGER;if(n===Jh)return s.RGBA_INTEGER;if(n===ic||n===sc||n===rc||n===oc)if(o===ht)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ic)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===sc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===rc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===oc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ic)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===sc)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===rc)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===oc)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Jl||n===Zl||n===Ql||n===eh)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Jl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Zl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ql)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===eh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===th||n===nh||n===ih)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===th||n===nh)return o===ht?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ih)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===sh||n===rh||n===oh||n===ah||n===ch||n===lh||n===hh||n===uh||n===dh||n===fh||n===ph||n===mh||n===gh||n===_h)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===sh)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===rh)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===oh)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ah)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ch)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===lh)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===hh)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===uh)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===dh)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===fh)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ph)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===mh)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===gh)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===_h)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ac||n===bh||n===vh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ac)return o===ht?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===bh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===vh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===wp||n===xh||n===Mh||n===Eh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ac)return r.COMPRESSED_RED_RGTC1_EXT;if(n===xh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Mh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Eh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Pr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const HE={type:"move"};class bl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new an,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new an,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new an,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),f=this._getHandJoint(l,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(HE)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new an;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const VE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,WE=`
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

}`;class XE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new zt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new en({vertexShader:VE,fragmentShader:WE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ie(new pa(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class qE extends kr{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,g=null;const _=new XE,m=t.getContextAttributes();let f=null,v=null;const M=[],b=[],w=new De;let A=null;const C=new cn;C.viewport=new ot;const P=new cn;P.viewport=new ot;const T=[C,P],E=new i0;let D=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ae=M[$];return ae===void 0&&(ae=new bl,M[$]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function($){let ae=M[$];return ae===void 0&&(ae=new bl,M[$]=ae),ae.getGripSpace()},this.getHand=function($){let ae=M[$];return ae===void 0&&(ae=new bl,M[$]=ae),ae.getHandSpace()};function H($){const ae=b.indexOf($.inputSource);if(ae===-1)return;const Se=M[ae];Se!==void 0&&(Se.update($.inputSource,$.frame,l||o),Se.dispatchEvent({type:$.type,data:$.inputSource}))}function Y(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",Y),i.removeEventListener("inputsourceschange",Q);for(let $=0;$<M.length;$++){const ae=b[$];ae!==null&&(b[$]=null,M[$].disconnect(ae))}D=null,z=null,_.reset(),e.setRenderTarget(f),p=null,d=null,u=null,i=null,v=null,gt.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(f=e.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",Y),i.addEventListener("inputsourceschange",Q),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(w),i.renderState.layers===void 0){const ae={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,t,ae),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new jn(p.framebufferWidth,p.framebufferHeight,{format:On,type:Ui,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ae=null,Se=null,de=null;m.depth&&(de=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=m.stencil?Dr:ir,Se=m.stencil?Pr:Rs);const Ue={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:r};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(Ue),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new jn(d.textureWidth,d.textureHeight,{format:On,type:Ui,depthTexture:new Wp(d.textureWidth,d.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),gt.setContext(i),gt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Q($){for(let ae=0;ae<$.removed.length;ae++){const Se=$.removed[ae],de=b.indexOf(Se);de>=0&&(b[de]=null,M[de].disconnect(Se))}for(let ae=0;ae<$.added.length;ae++){const Se=$.added[ae];let de=b.indexOf(Se);if(de===-1){for(let ze=0;ze<M.length;ze++)if(ze>=b.length){b.push(Se),de=ze;break}else if(b[ze]===null){b[ze]=Se,de=ze;break}if(de===-1)break}const Ue=M[de];Ue&&Ue.connect(Se)}}const q=new L,ie=new L;function W($,ae,Se){q.setFromMatrixPosition(ae.matrixWorld),ie.setFromMatrixPosition(Se.matrixWorld);const de=q.distanceTo(ie),Ue=ae.projectionMatrix.elements,ze=Se.projectionMatrix.elements,Ye=Ue[14]/(Ue[10]-1),yt=Ue[14]/(Ue[10]+1),tt=(Ue[9]+1)/Ue[5],Pt=(Ue[9]-1)/Ue[5],N=(Ue[8]-1)/Ue[0],wn=(ze[8]+1)/ze[0],Ze=Ye*N,Qe=Ye*wn,we=de/(-N+wn),xt=we*-N;if(ae.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(xt),$.translateZ(we),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ue[10]===-1)$.projectionMatrix.copy(ae.projectionMatrix),$.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const Re=Ye+we,R=yt+we,S=Ze-xt,k=Qe+(de-xt),J=tt*yt/R*Re,te=Pt*yt/R*Re;$.projectionMatrix.makePerspective(S,k,J,te,Re,R),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ue($,ae){ae===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ae.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let ae=$.near,Se=$.far;_.texture!==null&&(_.depthNear>0&&(ae=_.depthNear),_.depthFar>0&&(Se=_.depthFar)),E.near=P.near=C.near=ae,E.far=P.far=C.far=Se,(D!==E.near||z!==E.far)&&(i.updateRenderState({depthNear:E.near,depthFar:E.far}),D=E.near,z=E.far),C.layers.mask=$.layers.mask|2,P.layers.mask=$.layers.mask|4,E.layers.mask=C.layers.mask|P.layers.mask;const de=$.parent,Ue=E.cameras;ue(E,de);for(let ze=0;ze<Ue.length;ze++)ue(Ue[ze],de);Ue.length===2?W(E,C,P):E.projectionMatrix.copy(C.projectionMatrix),_e($,E,de)};function _e($,ae,Se){Se===null?$.matrix.copy(ae.matrixWorld):($.matrix.copy(Se.matrixWorld),$.matrix.invert(),$.matrix.multiply(ae.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ae.projectionMatrix),$.projectionMatrixInverse.copy(ae.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Lr*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function($){c=$,d!==null&&(d.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(E)};let Ae=null;function je($,ae){if(h=ae.getViewerPose(l||o),g=ae,h!==null){const Se=h.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let de=!1;Se.length!==E.cameras.length&&(E.cameras.length=0,de=!0);for(let ze=0;ze<Se.length;ze++){const Ye=Se[ze];let yt=null;if(p!==null)yt=p.getViewport(Ye);else{const Pt=u.getViewSubImage(d,Ye);yt=Pt.viewport,ze===0&&(e.setRenderTargetTextures(v,Pt.colorTexture,d.ignoreDepthValues?void 0:Pt.depthStencilTexture),e.setRenderTarget(v))}let tt=T[ze];tt===void 0&&(tt=new cn,tt.layers.enable(ze),tt.viewport=new ot,T[ze]=tt),tt.matrix.fromArray(Ye.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(Ye.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(yt.x,yt.y,yt.width,yt.height),ze===0&&(E.matrix.copy(tt.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),de===!0&&E.cameras.push(tt)}const Ue=i.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")){const ze=u.getDepthInformation(Se[0]);ze&&ze.isValid&&ze.texture&&_.init(e,ze,i.renderState)}}for(let Se=0;Se<M.length;Se++){const de=b[Se],Ue=M[Se];de!==null&&Ue!==void 0&&Ue.update(de,ae,l||o)}Ae&&Ae($,ae),ae.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ae}),g=null}const gt=new Yp;gt.setAnimationLoop(je),this.setAnimationLoop=function($){Ae=$},this.dispose=function(){}}}const ds=new ci,jE=new Ge;function YE(s,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Fp(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,v,M,b){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,b)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,v,M):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===ln&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===ln&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const v=e.get(f),M=v.envMap,b=v.envMapRotation;M&&(m.envMap.value=M,ds.copy(b),ds.x*=-1,ds.y*=-1,ds.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ds.y*=-1,ds.z*=-1),m.envMapRotation.value.setFromMatrix4(jE.makeRotationFromEuler(ds)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,v,M){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=M*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,v){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===ln&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const v=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function KE(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,M){const b=M.program;n.uniformBlockBinding(v,b)}function l(v,M){let b=i[v.id];b===void 0&&(g(v),b=h(v),i[v.id]=b,v.addEventListener("dispose",m));const w=M.program;n.updateUBOMapping(v,w);const A=e.render.frame;r[v.id]!==A&&(d(v),r[v.id]=A)}function h(v){const M=u();v.__bindingPointIndex=M;const b=s.createBuffer(),w=v.__size,A=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,w,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,b),b}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const M=i[v.id],b=v.uniforms,w=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let A=0,C=b.length;A<C;A++){const P=Array.isArray(b[A])?b[A]:[b[A]];for(let T=0,E=P.length;T<E;T++){const D=P[T];if(p(D,A,T,w)===!0){const z=D.__offset,H=Array.isArray(D.value)?D.value:[D.value];let Y=0;for(let Q=0;Q<H.length;Q++){const q=H[Q],ie=_(q);typeof q=="number"||typeof q=="boolean"?(D.__data[0]=q,s.bufferSubData(s.UNIFORM_BUFFER,z+Y,D.__data)):q.isMatrix3?(D.__data[0]=q.elements[0],D.__data[1]=q.elements[1],D.__data[2]=q.elements[2],D.__data[3]=0,D.__data[4]=q.elements[3],D.__data[5]=q.elements[4],D.__data[6]=q.elements[5],D.__data[7]=0,D.__data[8]=q.elements[6],D.__data[9]=q.elements[7],D.__data[10]=q.elements[8],D.__data[11]=0):(q.toArray(D.__data,Y),Y+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,z,D.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(v,M,b,w){const A=v.value,C=M+"_"+b;if(w[C]===void 0)return typeof A=="number"||typeof A=="boolean"?w[C]=A:w[C]=A.clone(),!0;{const P=w[C];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return w[C]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function g(v){const M=v.uniforms;let b=0;const w=16;for(let C=0,P=M.length;C<P;C++){const T=Array.isArray(M[C])?M[C]:[M[C]];for(let E=0,D=T.length;E<D;E++){const z=T[E],H=Array.isArray(z.value)?z.value:[z.value];for(let Y=0,Q=H.length;Y<Q;Y++){const q=H[Y],ie=_(q),W=b%w,ue=W%ie.boundary,_e=W+ue;b+=ue,_e!==0&&w-_e<ie.storage&&(b+=w-_e),z.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=b,b+=ie.storage}}}const A=b%w;return A>0&&(b+=w-A),v.__size=b,v.__cache={},this}function _(v){const M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),M}function m(v){const M=v.target;M.removeEventListener("dispose",m);const b=o.indexOf(M.__bindingPointIndex);o.splice(b,1),s.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function f(){for(const v in i)s.deleteBuffer(i[v]);o=[],i={},r={}}return{bind:c,update:l,dispose:f}}class $E{constructor(e={}){const{canvas:t=eb(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,f=null;const v=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=qt,this.toneMapping=es,this.toneMappingExposure=1;const b=this;let w=!1,A=0,C=0,P=null,T=-1,E=null;const D=new ot,z=new ot;let H=null;const Y=new Te(0);let Q=0,q=t.width,ie=t.height,W=1,ue=null,_e=null;const Ae=new ot(0,0,q,ie),je=new ot(0,0,q,ie);let gt=!1;const $=new iu;let ae=!1,Se=!1;const de=new Ge,Ue=new Ge,ze=new L,Ye=new ot,yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let tt=!1;function Pt(){return P===null?W:1}let N=n;function wn(y,O){return t.getContext(y,O)}try{const y={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Vh}`),t.addEventListener("webglcontextlost",Z,!1),t.addEventListener("webglcontextrestored",me,!1),t.addEventListener("webglcontextcreationerror",pe,!1),N===null){const O="webgl2";if(N=wn(O,y),N===null)throw wn(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Ze,Qe,we,xt,Re,R,S,k,J,te,K,ye,fe,be,nt,oe,ve,Ne,Oe,xe,et,We,_t,U;function le(){Ze=new rM(N),Ze.init(),We=new zE(N,Ze),Qe=new Qx(N,Ze,e,We),we=new BE(N,Ze),Qe.reverseDepthBuffer&&d&&we.buffers.depth.setReversed(!0),xt=new cM(N),Re=new AE,R=new GE(N,Ze,we,Re,Qe,We,xt),S=new tM(b),k=new sM(b),J=new m0(N),_t=new Jx(N,J),te=new oM(N,J,xt,_t),K=new hM(N,te,J,xt),Oe=new lM(N,Qe,R),oe=new eM(Re),ye=new TE(b,S,k,Ze,Qe,_t,oe),fe=new YE(b,Re),be=new RE,nt=new IE(Ze),Ne=new $x(b,S,k,we,K,p,c),ve=new FE(b,K,Qe),U=new KE(N,xt,Qe,we),xe=new Zx(N,Ze,xt),et=new aM(N,Ze,xt),xt.programs=ye.programs,b.capabilities=Qe,b.extensions=Ze,b.properties=Re,b.renderLists=be,b.shadowMap=ve,b.state=we,b.info=xt}le();const V=new qE(b,N);this.xr=V,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const y=Ze.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Ze.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(y){y!==void 0&&(W=y,this.setSize(q,ie,!1))},this.getSize=function(y){return y.set(q,ie)},this.setSize=function(y,O,B=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=y,ie=O,t.width=Math.floor(y*W),t.height=Math.floor(O*W),B===!0&&(t.style.width=y+"px",t.style.height=O+"px"),this.setViewport(0,0,y,O)},this.getDrawingBufferSize=function(y){return y.set(q*W,ie*W).floor()},this.setDrawingBufferSize=function(y,O,B){q=y,ie=O,W=B,t.width=Math.floor(y*B),t.height=Math.floor(O*B),this.setViewport(0,0,y,O)},this.getCurrentViewport=function(y){return y.copy(D)},this.getViewport=function(y){return y.copy(Ae)},this.setViewport=function(y,O,B,G){y.isVector4?Ae.set(y.x,y.y,y.z,y.w):Ae.set(y,O,B,G),we.viewport(D.copy(Ae).multiplyScalar(W).round())},this.getScissor=function(y){return y.copy(je)},this.setScissor=function(y,O,B,G){y.isVector4?je.set(y.x,y.y,y.z,y.w):je.set(y,O,B,G),we.scissor(z.copy(je).multiplyScalar(W).round())},this.getScissorTest=function(){return gt},this.setScissorTest=function(y){we.setScissorTest(gt=y)},this.setOpaqueSort=function(y){ue=y},this.setTransparentSort=function(y){_e=y},this.getClearColor=function(y){return y.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor.apply(Ne,arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha.apply(Ne,arguments)},this.clear=function(y=!0,O=!0,B=!0){let G=0;if(y){let F=!1;if(P!==null){const se=P.texture.format;F=se===Jh||se===$h||se===Kh}if(F){const se=P.texture.type,he=se===Ui||se===Rs||se===Mo||se===Pr||se===qh||se===jh,ge=Ne.getClearColor(),Me=Ne.getClearAlpha(),Fe=ge.r,ke=ge.g,Pe=ge.b;he?(g[0]=Fe,g[1]=ke,g[2]=Pe,g[3]=Me,N.clearBufferuiv(N.COLOR,0,g)):(_[0]=Fe,_[1]=ke,_[2]=Pe,_[3]=Me,N.clearBufferiv(N.COLOR,0,_))}else G|=N.COLOR_BUFFER_BIT}O&&(G|=N.DEPTH_BUFFER_BIT),B&&(G|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Z,!1),t.removeEventListener("webglcontextrestored",me,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),Ne.dispose(),be.dispose(),nt.dispose(),Re.dispose(),S.dispose(),k.dispose(),K.dispose(),_t.dispose(),U.dispose(),ye.dispose(),V.dispose(),V.removeEventListener("sessionstart",pu),V.removeEventListener("sessionend",mu),rs.stop()};function Z(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const y=xt.autoReset,O=ve.enabled,B=ve.autoUpdate,G=ve.needsUpdate,F=ve.type;le(),xt.autoReset=y,ve.enabled=O,ve.autoUpdate=B,ve.needsUpdate=G,ve.type=F}function pe(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function He(y){const O=y.target;O.removeEventListener("dispose",He),Rt(O)}function Rt(y){Yt(y),Re.remove(y)}function Yt(y){const O=Re.get(y).programs;O!==void 0&&(O.forEach(function(B){ye.releaseProgram(B)}),y.isShaderMaterial&&ye.releaseShaderCache(y))}this.renderBufferDirect=function(y,O,B,G,F,se){O===null&&(O=yt);const he=F.isMesh&&F.matrixWorld.determinant()<0,ge=hm(y,O,B,G,F);we.setMaterial(G,he);let Me=B.index,Fe=1;if(G.wireframe===!0){if(Me=te.getWireframeAttribute(B),Me===void 0)return;Fe=2}const ke=B.drawRange,Pe=B.attributes.position;let it=ke.start*Fe,at=(ke.start+ke.count)*Fe;se!==null&&(it=Math.max(it,se.start*Fe),at=Math.min(at,(se.start+se.count)*Fe)),Me!==null?(it=Math.max(it,0),at=Math.min(at,Me.count)):Pe!=null&&(it=Math.max(it,0),at=Math.min(at,Pe.count));const Nt=at-it;if(Nt<0||Nt===1/0)return;_t.setup(F,G,ge,B,Me);let Ct,st=xe;if(Me!==null&&(Ct=J.get(Me),st=et,st.setIndex(Ct)),F.isMesh)G.wireframe===!0?(we.setLineWidth(G.wireframeLinewidth*Pt()),st.setMode(N.LINES)):st.setMode(N.TRIANGLES);else if(F.isLine){let Le=G.linewidth;Le===void 0&&(Le=1),we.setLineWidth(Le*Pt()),F.isLineSegments?st.setMode(N.LINES):F.isLineLoop?st.setMode(N.LINE_LOOP):st.setMode(N.LINE_STRIP)}else F.isPoints?st.setMode(N.POINTS):F.isSprite&&st.setMode(N.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)st.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Ze.get("WEBGL_multi_draw"))st.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Le=F._multiDrawStarts,Ht=F._multiDrawCounts,ct=F._multiDrawCount,kn=Me?J.get(Me).bytesPerElement:1,Cs=Re.get(G).currentProgram.getUniforms();for(let vn=0;vn<ct;vn++)Cs.setValue(N,"_gl_DrawID",vn),st.render(Le[vn]/kn,Ht[vn])}else if(F.isInstancedMesh)st.renderInstances(it,Nt,F.count);else if(B.isInstancedBufferGeometry){const Le=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Ht=Math.min(B.instanceCount,Le);st.renderInstances(it,Nt,Ht)}else st.render(it,Nt)};function lt(y,O,B){y.transparent===!0&&y.side===_n&&y.forceSinglePass===!1?(y.side=ln,y.needsUpdate=!0,_a(y,O,B),y.side=Ii,y.needsUpdate=!0,_a(y,O,B),y.side=_n):_a(y,O,B)}this.compile=function(y,O,B=null){B===null&&(B=y),f=nt.get(B),f.init(O),M.push(f),B.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),y!==B&&y.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),f.setupLights();const G=new Set;return y.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const se=F.material;if(se)if(Array.isArray(se))for(let he=0;he<se.length;he++){const ge=se[he];lt(ge,B,F),G.add(ge)}else lt(se,B,F),G.add(se)}),M.pop(),f=null,G},this.compileAsync=function(y,O,B=null){const G=this.compile(y,O,B);return new Promise(F=>{function se(){if(G.forEach(function(he){Re.get(he).currentProgram.isReady()&&G.delete(he)}),G.size===0){F(y);return}setTimeout(se,10)}Ze.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let Fn=null;function di(y){Fn&&Fn(y)}function pu(){rs.stop()}function mu(){rs.start()}const rs=new Yp;rs.setAnimationLoop(di),typeof self<"u"&&rs.setContext(self),this.setAnimationLoop=function(y){Fn=y,V.setAnimationLoop(y),y===null?rs.stop():rs.start()},V.addEventListener("sessionstart",pu),V.addEventListener("sessionend",mu),this.render=function(y,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(O),O=V.getCamera()),y.isScene===!0&&y.onBeforeRender(b,y,O,P),f=nt.get(y,M.length),f.init(O),M.push(f),Ue.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),$.setFromProjectionMatrix(Ue),Se=this.localClippingEnabled,ae=oe.init(this.clippingPlanes,Se),m=be.get(y,v.length),m.init(),v.push(m),V.enabled===!0&&V.isPresenting===!0){const se=b.xr.getDepthSensingMesh();se!==null&&Lc(se,O,-1/0,b.sortObjects)}Lc(y,O,0,b.sortObjects),m.finish(),b.sortObjects===!0&&m.sort(ue,_e),tt=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,tt&&Ne.addToRenderList(m,y),this.info.render.frame++,ae===!0&&oe.beginShadows();const B=f.state.shadowsArray;ve.render(B,y,O),ae===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=m.opaque,F=m.transmissive;if(f.setupLights(),O.isArrayCamera){const se=O.cameras;if(F.length>0)for(let he=0,ge=se.length;he<ge;he++){const Me=se[he];_u(G,F,y,Me)}tt&&Ne.render(y);for(let he=0,ge=se.length;he<ge;he++){const Me=se[he];gu(m,y,Me,Me.viewport)}}else F.length>0&&_u(G,F,y,O),tt&&Ne.render(y),gu(m,y,O);P!==null&&(R.updateMultisampleRenderTarget(P),R.updateRenderTargetMipmap(P)),y.isScene===!0&&y.onAfterRender(b,y,O),_t.resetDefaultState(),T=-1,E=null,M.pop(),M.length>0?(f=M[M.length-1],ae===!0&&oe.setGlobalState(b.clippingPlanes,f.state.camera)):f=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function Lc(y,O,B,G){if(y.visible===!1)return;if(y.layers.test(O.layers)){if(y.isGroup)B=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(O);else if(y.isLight)f.pushLight(y),y.castShadow&&f.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||$.intersectsSprite(y)){G&&Ye.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Ue);const he=K.update(y),ge=y.material;ge.visible&&m.push(y,he,ge,B,Ye.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||$.intersectsObject(y))){const he=K.update(y),ge=y.material;if(G&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Ye.copy(y.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),Ye.copy(he.boundingSphere.center)),Ye.applyMatrix4(y.matrixWorld).applyMatrix4(Ue)),Array.isArray(ge)){const Me=he.groups;for(let Fe=0,ke=Me.length;Fe<ke;Fe++){const Pe=Me[Fe],it=ge[Pe.materialIndex];it&&it.visible&&m.push(y,he,it,B,Ye.z,Pe)}}else ge.visible&&m.push(y,he,ge,B,Ye.z,null)}}const se=y.children;for(let he=0,ge=se.length;he<ge;he++)Lc(se[he],O,B,G)}function gu(y,O,B,G){const F=y.opaque,se=y.transmissive,he=y.transparent;f.setupLightsView(B),ae===!0&&oe.setGlobalState(b.clippingPlanes,B),G&&we.viewport(D.copy(G)),F.length>0&&ga(F,O,B),se.length>0&&ga(se,O,B),he.length>0&&ga(he,O,B),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function _u(y,O,B,G){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[G.id]===void 0&&(f.state.transmissionRenderTarget[G.id]=new jn(1,1,{generateMipmaps:!0,type:Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float")?Li:Ui,minFilter:wi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const se=f.state.transmissionRenderTarget[G.id],he=G.viewport||D;se.setSize(he.z,he.w);const ge=b.getRenderTarget();b.setRenderTarget(se),b.getClearColor(Y),Q=b.getClearAlpha(),Q<1&&b.setClearColor(16777215,.5),b.clear(),tt&&Ne.render(B);const Me=b.toneMapping;b.toneMapping=es;const Fe=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),f.setupLightsView(G),ae===!0&&oe.setGlobalState(b.clippingPlanes,G),ga(y,B,G),R.updateMultisampleRenderTarget(se),R.updateRenderTargetMipmap(se),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let Pe=0,it=O.length;Pe<it;Pe++){const at=O[Pe],Nt=at.object,Ct=at.geometry,st=at.material,Le=at.group;if(st.side===_n&&Nt.layers.test(G.layers)){const Ht=st.side;st.side=ln,st.needsUpdate=!0,bu(Nt,B,G,Ct,st,Le),st.side=Ht,st.needsUpdate=!0,ke=!0}}ke===!0&&(R.updateMultisampleRenderTarget(se),R.updateRenderTargetMipmap(se))}b.setRenderTarget(ge),b.setClearColor(Y,Q),Fe!==void 0&&(G.viewport=Fe),b.toneMapping=Me}function ga(y,O,B){const G=O.isScene===!0?O.overrideMaterial:null;for(let F=0,se=y.length;F<se;F++){const he=y[F],ge=he.object,Me=he.geometry,Fe=G===null?he.material:G,ke=he.group;ge.layers.test(B.layers)&&bu(ge,O,B,Me,Fe,ke)}}function bu(y,O,B,G,F,se){y.onBeforeRender(b,O,B,G,F,se),y.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),F.onBeforeRender(b,O,B,G,y,se),F.transparent===!0&&F.side===_n&&F.forceSinglePass===!1?(F.side=ln,F.needsUpdate=!0,b.renderBufferDirect(B,O,G,F,y,se),F.side=Ii,F.needsUpdate=!0,b.renderBufferDirect(B,O,G,F,y,se),F.side=_n):b.renderBufferDirect(B,O,G,F,y,se),y.onAfterRender(b,O,B,G,F,se)}function _a(y,O,B){O.isScene!==!0&&(O=yt);const G=Re.get(y),F=f.state.lights,se=f.state.shadowsArray,he=F.state.version,ge=ye.getParameters(y,F.state,se,O,B),Me=ye.getProgramCacheKey(ge);let Fe=G.programs;G.environment=y.isMeshStandardMaterial?O.environment:null,G.fog=O.fog,G.envMap=(y.isMeshStandardMaterial?k:S).get(y.envMap||G.environment),G.envMapRotation=G.environment!==null&&y.envMap===null?O.environmentRotation:y.envMapRotation,Fe===void 0&&(y.addEventListener("dispose",He),Fe=new Map,G.programs=Fe);let ke=Fe.get(Me);if(ke!==void 0){if(G.currentProgram===ke&&G.lightsStateVersion===he)return xu(y,ge),ke}else ge.uniforms=ye.getUniforms(y),y.onBeforeCompile(ge,b),ke=ye.acquireProgram(ge,Me),Fe.set(Me,ke),G.uniforms=ge.uniforms;const Pe=G.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Pe.clippingPlanes=oe.uniform),xu(y,ge),G.needsLights=dm(y),G.lightsStateVersion=he,G.needsLights&&(Pe.ambientLightColor.value=F.state.ambient,Pe.lightProbe.value=F.state.probe,Pe.directionalLights.value=F.state.directional,Pe.directionalLightShadows.value=F.state.directionalShadow,Pe.spotLights.value=F.state.spot,Pe.spotLightShadows.value=F.state.spotShadow,Pe.rectAreaLights.value=F.state.rectArea,Pe.ltc_1.value=F.state.rectAreaLTC1,Pe.ltc_2.value=F.state.rectAreaLTC2,Pe.pointLights.value=F.state.point,Pe.pointLightShadows.value=F.state.pointShadow,Pe.hemisphereLights.value=F.state.hemi,Pe.directionalShadowMap.value=F.state.directionalShadowMap,Pe.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Pe.spotShadowMap.value=F.state.spotShadowMap,Pe.spotLightMatrix.value=F.state.spotLightMatrix,Pe.spotLightMap.value=F.state.spotLightMap,Pe.pointShadowMap.value=F.state.pointShadowMap,Pe.pointShadowMatrix.value=F.state.pointShadowMatrix),G.currentProgram=ke,G.uniformsList=null,ke}function vu(y){if(y.uniformsList===null){const O=y.currentProgram.getUniforms();y.uniformsList=lc.seqWithValue(O.seq,y.uniforms)}return y.uniformsList}function xu(y,O){const B=Re.get(y);B.outputColorSpace=O.outputColorSpace,B.batching=O.batching,B.batchingColor=O.batchingColor,B.instancing=O.instancing,B.instancingColor=O.instancingColor,B.instancingMorph=O.instancingMorph,B.skinning=O.skinning,B.morphTargets=O.morphTargets,B.morphNormals=O.morphNormals,B.morphColors=O.morphColors,B.morphTargetsCount=O.morphTargetsCount,B.numClippingPlanes=O.numClippingPlanes,B.numIntersection=O.numClipIntersection,B.vertexAlphas=O.vertexAlphas,B.vertexTangents=O.vertexTangents,B.toneMapping=O.toneMapping}function hm(y,O,B,G,F){O.isScene!==!0&&(O=yt),R.resetTextureUnits();const se=O.fog,he=G.isMeshStandardMaterial?O.environment:null,ge=P===null?b.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:un,Me=(G.isMeshStandardMaterial?k:S).get(G.envMap||he),Fe=G.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,ke=!!B.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Pe=!!B.morphAttributes.position,it=!!B.morphAttributes.normal,at=!!B.morphAttributes.color;let Nt=es;G.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Nt=b.toneMapping);const Ct=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,st=Ct!==void 0?Ct.length:0,Le=Re.get(G),Ht=f.state.lights;if(ae===!0&&(Se===!0||y!==E)){const tn=y===E&&G.id===T;oe.setState(G,y,tn)}let ct=!1;G.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==Ht.state.version||Le.outputColorSpace!==ge||F.isBatchedMesh&&Le.batching===!1||!F.isBatchedMesh&&Le.batching===!0||F.isBatchedMesh&&Le.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Le.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Le.instancing===!1||!F.isInstancedMesh&&Le.instancing===!0||F.isSkinnedMesh&&Le.skinning===!1||!F.isSkinnedMesh&&Le.skinning===!0||F.isInstancedMesh&&Le.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Le.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Le.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Le.instancingMorph===!1&&F.morphTexture!==null||Le.envMap!==Me||G.fog===!0&&Le.fog!==se||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==oe.numPlanes||Le.numIntersection!==oe.numIntersection)||Le.vertexAlphas!==Fe||Le.vertexTangents!==ke||Le.morphTargets!==Pe||Le.morphNormals!==it||Le.morphColors!==at||Le.toneMapping!==Nt||Le.morphTargetsCount!==st)&&(ct=!0):(ct=!0,Le.__version=G.version);let kn=Le.currentProgram;ct===!0&&(kn=_a(G,O,F));let Cs=!1,vn=!1,Wr=!1;const Et=kn.getUniforms(),Rn=Le.uniforms;if(we.useProgram(kn.program)&&(Cs=!0,vn=!0,Wr=!0),G.id!==T&&(T=G.id,vn=!0),Cs||E!==y){we.buffers.depth.getReversed()?(de.copy(y.projectionMatrix),nb(de),ib(de),Et.setValue(N,"projectionMatrix",de)):Et.setValue(N,"projectionMatrix",y.projectionMatrix),Et.setValue(N,"viewMatrix",y.matrixWorldInverse);const dn=Et.map.cameraPosition;dn!==void 0&&dn.setValue(N,ze.setFromMatrixPosition(y.matrixWorld)),Qe.logarithmicDepthBuffer&&Et.setValue(N,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Et.setValue(N,"isOrthographic",y.isOrthographicCamera===!0),E!==y&&(E=y,vn=!0,Wr=!0)}if(F.isSkinnedMesh){Et.setOptional(N,F,"bindMatrix"),Et.setOptional(N,F,"bindMatrixInverse");const tn=F.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),Et.setValue(N,"boneTexture",tn.boneTexture,R))}F.isBatchedMesh&&(Et.setOptional(N,F,"batchingTexture"),Et.setValue(N,"batchingTexture",F._matricesTexture,R),Et.setOptional(N,F,"batchingIdTexture"),Et.setValue(N,"batchingIdTexture",F._indirectTexture,R),Et.setOptional(N,F,"batchingColorTexture"),F._colorsTexture!==null&&Et.setValue(N,"batchingColorTexture",F._colorsTexture,R));const Cn=B.morphAttributes;if((Cn.position!==void 0||Cn.normal!==void 0||Cn.color!==void 0)&&Oe.update(F,B,kn),(vn||Le.receiveShadow!==F.receiveShadow)&&(Le.receiveShadow=F.receiveShadow,Et.setValue(N,"receiveShadow",F.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Rn.envMap.value=Me,Rn.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&O.environment!==null&&(Rn.envMapIntensity.value=O.environmentIntensity),vn&&(Et.setValue(N,"toneMappingExposure",b.toneMappingExposure),Le.needsLights&&um(Rn,Wr),se&&G.fog===!0&&fe.refreshFogUniforms(Rn,se),fe.refreshMaterialUniforms(Rn,G,W,ie,f.state.transmissionRenderTarget[y.id]),lc.upload(N,vu(Le),Rn,R)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(lc.upload(N,vu(Le),Rn,R),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Et.setValue(N,"center",F.center),Et.setValue(N,"modelViewMatrix",F.modelViewMatrix),Et.setValue(N,"normalMatrix",F.normalMatrix),Et.setValue(N,"modelMatrix",F.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const tn=G.uniformsGroups;for(let dn=0,Nc=tn.length;dn<Nc;dn++){const os=tn[dn];U.update(os,kn),U.bind(os,kn)}}return kn}function um(y,O){y.ambientLightColor.needsUpdate=O,y.lightProbe.needsUpdate=O,y.directionalLights.needsUpdate=O,y.directionalLightShadows.needsUpdate=O,y.pointLights.needsUpdate=O,y.pointLightShadows.needsUpdate=O,y.spotLights.needsUpdate=O,y.spotLightShadows.needsUpdate=O,y.rectAreaLights.needsUpdate=O,y.hemisphereLights.needsUpdate=O}function dm(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(y,O,B){Re.get(y.texture).__webglTexture=O,Re.get(y.depthTexture).__webglTexture=B;const G=Re.get(y);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=B===void 0,G.__autoAllocateDepthBuffer||Ze.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,O){const B=Re.get(y);B.__webglFramebuffer=O,B.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(y,O=0,B=0){P=y,A=O,C=B;let G=!0,F=null,se=!1,he=!1;if(y){const Me=Re.get(y);if(Me.__useDefaultFramebuffer!==void 0)we.bindFramebuffer(N.FRAMEBUFFER,null),G=!1;else if(Me.__webglFramebuffer===void 0)R.setupRenderTarget(y);else if(Me.__hasExternalTextures)R.rebindTextures(y,Re.get(y.texture).__webglTexture,Re.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Pe=y.depthTexture;if(Me.__boundDepthTexture!==Pe){if(Pe!==null&&Re.has(Pe)&&(y.width!==Pe.image.width||y.height!==Pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(y)}}const Fe=y.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(he=!0);const ke=Re.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(ke[O])?F=ke[O][B]:F=ke[O],se=!0):y.samples>0&&R.useMultisampledRTT(y)===!1?F=Re.get(y).__webglMultisampledFramebuffer:Array.isArray(ke)?F=ke[B]:F=ke,D.copy(y.viewport),z.copy(y.scissor),H=y.scissorTest}else D.copy(Ae).multiplyScalar(W).floor(),z.copy(je).multiplyScalar(W).floor(),H=gt;if(we.bindFramebuffer(N.FRAMEBUFFER,F)&&G&&we.drawBuffers(y,F),we.viewport(D),we.scissor(z),we.setScissorTest(H),se){const Me=Re.get(y.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+O,Me.__webglTexture,B)}else if(he){const Me=Re.get(y.texture),Fe=O||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Me.__webglTexture,B||0,Fe)}T=-1},this.readRenderTargetPixels=function(y,O,B,G,F,se,he){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=Re.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&he!==void 0&&(ge=ge[he]),ge){we.bindFramebuffer(N.FRAMEBUFFER,ge);try{const Me=y.texture,Fe=Me.format,ke=Me.type;if(!Qe.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Qe.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=y.width-G&&B>=0&&B<=y.height-F&&N.readPixels(O,B,G,F,We.convert(Fe),We.convert(ke),se)}finally{const Me=P!==null?Re.get(P).__webglFramebuffer:null;we.bindFramebuffer(N.FRAMEBUFFER,Me)}}},this.readRenderTargetPixelsAsync=async function(y,O,B,G,F,se,he){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=Re.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&he!==void 0&&(ge=ge[he]),ge){const Me=y.texture,Fe=Me.format,ke=Me.type;if(!Qe.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Qe.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=y.width-G&&B>=0&&B<=y.height-F){we.bindFramebuffer(N.FRAMEBUFFER,ge);const Pe=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Pe),N.bufferData(N.PIXEL_PACK_BUFFER,se.byteLength,N.STREAM_READ),N.readPixels(O,B,G,F,We.convert(Fe),We.convert(ke),0);const it=P!==null?Re.get(P).__webglFramebuffer:null;we.bindFramebuffer(N.FRAMEBUFFER,it);const at=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await tb(N,at,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Pe),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,se),N.deleteBuffer(Pe),N.deleteSync(at),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,O=null,B=0){y.isTexture!==!0&&(Js("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,y=arguments[1]);const G=Math.pow(2,-B),F=Math.floor(y.image.width*G),se=Math.floor(y.image.height*G),he=O!==null?O.x:0,ge=O!==null?O.y:0;R.setTexture2D(y,0),N.copyTexSubImage2D(N.TEXTURE_2D,B,0,0,he,ge,F,se),we.unbindTexture()};const fm=N.createFramebuffer(),pm=N.createFramebuffer();this.copyTextureToTexture=function(y,O,B=null,G=null,F=0,se=null){y.isTexture!==!0&&(Js("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,y=arguments[1],O=arguments[2],se=arguments[3]||0,B=null),se===null&&(F!==0?(Js("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),se=F,F=0):se=0);let he,ge,Me,Fe,ke,Pe,it,at,Nt;const Ct=y.isCompressedTexture?y.mipmaps[se]:y.image;if(B!==null)he=B.max.x-B.min.x,ge=B.max.y-B.min.y,Me=B.isBox3?B.max.z-B.min.z:1,Fe=B.min.x,ke=B.min.y,Pe=B.isBox3?B.min.z:0;else{const Cn=Math.pow(2,-F);he=Math.floor(Ct.width*Cn),ge=Math.floor(Ct.height*Cn),y.isDataArrayTexture?Me=Ct.depth:y.isData3DTexture?Me=Math.floor(Ct.depth*Cn):Me=1,Fe=0,ke=0,Pe=0}G!==null?(it=G.x,at=G.y,Nt=G.z):(it=0,at=0,Nt=0);const st=We.convert(O.format),Le=We.convert(O.type);let Ht;O.isData3DTexture?(R.setTexture3D(O,0),Ht=N.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(R.setTexture2DArray(O,0),Ht=N.TEXTURE_2D_ARRAY):(R.setTexture2D(O,0),Ht=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,O.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,O.unpackAlignment);const ct=N.getParameter(N.UNPACK_ROW_LENGTH),kn=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Cs=N.getParameter(N.UNPACK_SKIP_PIXELS),vn=N.getParameter(N.UNPACK_SKIP_ROWS),Wr=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,Ct.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ct.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Fe),N.pixelStorei(N.UNPACK_SKIP_ROWS,ke),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Pe);const Et=y.isDataArrayTexture||y.isData3DTexture,Rn=O.isDataArrayTexture||O.isData3DTexture;if(y.isDepthTexture){const Cn=Re.get(y),tn=Re.get(O),dn=Re.get(Cn.__renderTarget),Nc=Re.get(tn.__renderTarget);we.bindFramebuffer(N.READ_FRAMEBUFFER,dn.__webglFramebuffer),we.bindFramebuffer(N.DRAW_FRAMEBUFFER,Nc.__webglFramebuffer);for(let os=0;os<Me;os++)Et&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Re.get(y).__webglTexture,F,Pe+os),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Re.get(O).__webglTexture,se,Nt+os)),N.blitFramebuffer(Fe,ke,he,ge,it,at,he,ge,N.DEPTH_BUFFER_BIT,N.NEAREST);we.bindFramebuffer(N.READ_FRAMEBUFFER,null),we.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(F!==0||y.isRenderTargetTexture||Re.has(y)){const Cn=Re.get(y),tn=Re.get(O);we.bindFramebuffer(N.READ_FRAMEBUFFER,fm),we.bindFramebuffer(N.DRAW_FRAMEBUFFER,pm);for(let dn=0;dn<Me;dn++)Et?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Cn.__webglTexture,F,Pe+dn):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Cn.__webglTexture,F),Rn?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,tn.__webglTexture,se,Nt+dn):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,tn.__webglTexture,se),F!==0?N.blitFramebuffer(Fe,ke,he,ge,it,at,he,ge,N.COLOR_BUFFER_BIT,N.NEAREST):Rn?N.copyTexSubImage3D(Ht,se,it,at,Nt+dn,Fe,ke,he,ge):N.copyTexSubImage2D(Ht,se,it,at,Fe,ke,he,ge);we.bindFramebuffer(N.READ_FRAMEBUFFER,null),we.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Rn?y.isDataTexture||y.isData3DTexture?N.texSubImage3D(Ht,se,it,at,Nt,he,ge,Me,st,Le,Ct.data):O.isCompressedArrayTexture?N.compressedTexSubImage3D(Ht,se,it,at,Nt,he,ge,Me,st,Ct.data):N.texSubImage3D(Ht,se,it,at,Nt,he,ge,Me,st,Le,Ct):y.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,se,it,at,he,ge,st,Le,Ct.data):y.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,se,it,at,Ct.width,Ct.height,st,Ct.data):N.texSubImage2D(N.TEXTURE_2D,se,it,at,he,ge,st,Le,Ct);N.pixelStorei(N.UNPACK_ROW_LENGTH,ct),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,kn),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Cs),N.pixelStorei(N.UNPACK_SKIP_ROWS,vn),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Wr),se===0&&O.generateMipmaps&&N.generateMipmap(Ht),we.unbindTexture()},this.copyTextureToTexture3D=function(y,O,B=null,G=null,F=0){return y.isTexture!==!0&&(Js("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,G=arguments[1]||null,y=arguments[2],O=arguments[3],F=arguments[4]||0),Js('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,O,B,G,F)},this.initRenderTarget=function(y){Re.get(y).__webglFramebuffer===void 0&&R.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?R.setTextureCube(y,0):y.isData3DTexture?R.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?R.setTexture2DArray(y,0):R.setTexture2D(y,0),we.unbindTexture()},this.resetState=function(){A=0,C=0,P=null,we.reset(),_t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}}function of(s,e=!1){const t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,c=new At;let l=0;for(let h=0;h<s.length;++h){const u=s[h];let d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in u.morphAttributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(u.morphAttributes[p])}if(e){let p;if(t)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,h),l+=p}}if(t){let h=0;const u=[];for(let d=0;d<s.length;++d){const p=s[d].index;for(let g=0;g<p.count;++g)u.push(p.getX(g)+h);h+=s[d].attributes.position.count}c.setIndex(u)}for(const h in r){const u=af(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){const p=[];for(let _=0;_<o[h].length;++_)p.push(o[h][_][d]);const g=af(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function af(s){let e,t,n,i=-1,r=0;for(let l=0;l<s.length;++l){const h=s[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const o=new e(r),a=new Tt(o,t,n);let c=0;for(let l=0;l<s.length;++l){const h=s[l];if(h.isInterleavedBufferAttribute){const u=c/t;for(let d=0,p=h.count;d<p;d++)for(let g=0;g<t;g++){const _=h.getComponent(d,g);a.setComponent(d+u,g,_)}}else o.set(h.array,c);c+=h.count*t}return i!==void 0&&(a.gpuType=i),a}function cf(s,e){if(e===A_)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Sh||e===Rp){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Sh)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class JE extends zr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new nS(t)}),this.register(function(t){return new iS(t)}),this.register(function(t){return new dS(t)}),this.register(function(t){return new fS(t)}),this.register(function(t){return new pS(t)}),this.register(function(t){return new rS(t)}),this.register(function(t){return new oS(t)}),this.register(function(t){return new aS(t)}),this.register(function(t){return new cS(t)}),this.register(function(t){return new tS(t)}),this.register(function(t){return new lS(t)}),this.register(function(t){return new sS(t)}),this.register(function(t){return new uS(t)}),this.register(function(t){return new hS(t)}),this.register(function(t){return new QE(t)}),this.register(function(t){return new mS(t)}),this.register(function(t){return new gS(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=_o.extractUrlBase(e);o=_o.resolveURL(l,this.path)}else o=_o.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new jp(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Qp){try{o[$e.KHR_BINARY_GLTF]=new _S(e)}catch(u){i&&i(u);return}r=JSON.parse(o[$e.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new PS(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case $e.KHR_MATERIALS_UNLIT:o[u]=new eS;break;case $e.KHR_DRACO_MESH_COMPRESSION:o[u]=new bS(r,this.dracoLoader);break;case $e.KHR_TEXTURE_TRANSFORM:o[u]=new vS;break;case $e.KHR_MESH_QUANTIZATION:o[u]=new xS;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function ZE(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const $e={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class QE{constructor(e){this.parser=e,this.name=$e.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const h=new Te(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],un);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new cc(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new au(h),l.distance=u;break;case"spot":l=new Qb(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,xi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class eS{constructor(){this.name=$e.KHR_MATERIALS_UNLIT}getMaterialType(){return Lt}extendParams(e,t,n){const i=[];e.color=new Te(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],un),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,qt))}return Promise.all(i)}}class tS{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class nS{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new De(a,a)}return Promise.all(r)}}class iS{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class sS{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class rS{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Te(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],un)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,qt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class oS{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class aS{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Te().setRGB(a[0],a[1],a[2],un),Promise.all(r)}}class cS{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class lS{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Te().setRGB(a[0],a[1],a[2],un),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,qt)),Promise.all(r)}}class hS{constructor(e){this.parser=e,this.name=$e.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class uS{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class dS{constructor(e){this.parser=e,this.name=$e.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class fS{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class pS{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class mS{constructor(e){this.name=$e.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(p),h,u,d,i.mode,i.filter),p})})}else return null}}class gS{constructor(e){this.name=$e.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==Ln.TRIANGLES&&l.mode!==Ln.TRIANGLE_STRIP&&l.mode!==Ln.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,p=[];for(const g of u){const _=new Ge,m=new L,f=new ss,v=new L(1,1,1),M=new Th(g.geometry,g.material,d);for(let b=0;b<d;b++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,b),c.ROTATION&&f.fromBufferAttribute(c.ROTATION,b),c.SCALE&&v.fromBufferAttribute(c.SCALE,b),M.setMatrixAt(b,_.compose(m,f,v));for(const b in c)if(b==="_COLOR_0"){const w=c[b];M.instanceColor=new yh(w.array,w.itemSize,w.normalized)}else b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"&&g.geometry.setAttribute(b,c[b]);vt.prototype.copy.call(M,g),this.parser.assignFinalMaterial(M),p.push(M)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}}const Qp="glTF",to=12,lf={JSON:1313821514,BIN:5130562};class _S{constructor(e){this.name=$e.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,to),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Qp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-to,r=new DataView(e,to);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===lf.JSON){const l=new Uint8Array(e,to+o,a);this.content=n.decode(l)}else if(c===lf.BIN){const l=to+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class bS{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=$e.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const h in o){const u=Ch[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=Ch[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[e.attributes[h]],p=rr[d.componentType];l[u]=p.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(p){for(const g in p.attributes){const _=p.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}u(p)},a,l,un,d)})})}}class vS{constructor(){this.name=$e.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class xS{constructor(){this.name=$e.KHR_MESH_QUANTIZATION}}class em extends ma{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=i-t,u=(n-t)/h,d=u*u,p=d*u,g=e*l,_=g-l,m=-2*p+3*d,f=p-d,v=1-m,M=f-d+u;for(let b=0;b!==a;b++){const w=o[_+b+a],A=o[_+b+c]*h,C=o[g+b+a],P=o[g+b]*h;r[b]=v*w+M*A+m*C+f*P}return r}}const MS=new ss;class ES extends em{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return MS.fromArray(r).normalize().toArray(r),r}}const Ln={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},rr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},hf={9728:hn,9729:Tn,9984:bp,9985:nc,9986:oo,9987:wi},uf={33071:Ji,33648:dc,10497:Cr},vl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ch={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Hi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},SS={CUBICSPLINE:void 0,LINEAR:So,STEP:Eo},xl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function yS(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Wt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ii})),s.DefaultMaterial}function fs(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function xi(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function TS(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,h=e.length;l<h;l++){const u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){const u=e[l];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;o.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],d=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function AS(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function wS(s){let e;const t=s.extensions&&s.extensions[$e.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ml(t.attributes):e=s.indices+":"+Ml(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Ml(s.targets[n]);return e}function Ml(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Ph(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function RS(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const CS=new Ge;class PS{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new ZE,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new $b(this.options.manager):this.textureLoader=new n0(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new jp(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return fs(r,a,i),xi(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,h]of o.children.entries())r(h,a.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[$e.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(_o.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=vl[i.type],a=rr[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new Tt(l,o,c))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=vl[i.type],l=rr[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(p&&p!==u){const f=Math.floor(d/p),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+f+":"+i.count;let M=t.cache.get(v);M||(_=new l(a,f*p,i.count*p/h),M=new Tb(_,p/h),t.cache.add(v,M)),m=new tu(M,c,d%p/h,g)}else a===null?_=new l(i.count*c):_=new l(a,d,i.count*c),m=new Tt(_,c,g);if(i.sparse!==void 0){const f=vl.SCALAR,v=rr[i.sparse.indices.componentType],M=i.sparse.indices.byteOffset||0,b=i.sparse.values.byteOffset||0,w=new v(o[1],M,i.sparse.count*f),A=new l(o[2],b,i.sparse.count*c);a!==null&&(m=new Tt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let C=0,P=w.length;C<P;C++){const T=w[C];if(m.setX(T,A[C*c]),c>=2&&m.setY(T,A[C*c+1]),c>=3&&m.setZ(T,A[C*c+2]),c>=4&&m.setW(T,A[C*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return h.magFilter=hf[d.magFilter]||Tn,h.minFilter=hf[d.minFilter]||wi,h.wrapS=uf[d.wrapS]||Cr,h.wrapT=uf[d.wrapT]||Cr,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==hn&&h.minFilter!==Tn,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=i.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;const d=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(d,p){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new zt(_);m.needsUpdate=!0,d(m)}),t.load(_o.resolveURL(u,r.path),g,void 0,p)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),xi(u,o),u.userData.mimeType=o.mimeType||RS(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[$e.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[$e.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[$e.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new vs,ai.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Vp,ai.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Wt}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},c=r.extensions||{},l=[];if(c[$e.KHR_MATERIALS_UNLIT]){const u=i[$e.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new Te(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],un),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,qt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=_n);const h=r.alphaMode||xl.OPAQUE;if(h===xl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===xl.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Lt&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new De(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Lt&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Lt){const u=r.emissiveFactor;a.emissive=new Te().setRGB(u[0],u[1],u[2],un)}return r.emissiveTexture!==void 0&&o!==Lt&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,qt)),Promise.all(l).then(function(){const u=new o(a);return r.name&&(u.name=r.name),xi(u,r),t.associations.set(u,{materials:e}),r.extensions&&fs(i,u,r),u})}createUniqueName(e){const t=dt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[$e.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return df(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],h=wS(l),u=i[h];if(u)o.push(u.promise);else{let d;l.extensions&&l.extensions[$e.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=df(new At,l,t),i[h]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const h=o[c].material===void 0?yS(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let p=0,g=h.length;p<g;p++){const _=h[p],m=o[p];let f;const v=l[p];if(m.mode===Ln.TRIANGLES||m.mode===Ln.TRIANGLE_STRIP||m.mode===Ln.TRIANGLE_FAN||m.mode===void 0)f=r.isSkinnedMesh===!0?new wb(_,v):new Ie(_,v),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),m.mode===Ln.TRIANGLE_STRIP?f.geometry=cf(f.geometry,Rp):m.mode===Ln.TRIANGLE_FAN&&(f.geometry=cf(f.geometry,Sh));else if(m.mode===Ln.LINES)f=new Lb(_,v);else if(m.mode===Ln.LINE_STRIP)f=new su(_,v);else if(m.mode===Ln.LINE_LOOP)f=new Nb(_,v);else if(m.mode===Ln.POINTS)f=new Zs(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&AS(f,r),f.name=t.createUniqueName(r.name||"mesh_"+e),xi(f,r),m.extensions&&fs(i,f,m),t.assignFinalMaterial(f),u.push(f)}for(let p=0,g=u.length;p<g;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return r.extensions&&fs(i,u[0],r),u[0];const d=new an;r.extensions&&fs(i,d,r),t.associations.set(d,{meshes:e});for(let p=0,g=u.length;p<g;p++)d.add(u[p]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new cn(ao.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Rc(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),xi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],c=[];for(let l=0,h=o.length;l<h;l++){const u=o[l];if(u){a.push(u);const d=new Ge;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new nu(a,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const p=i.channels[u],g=i.samplers[p.sampler],_=p.target,m=_.node,f=i.parameters!==void 0?i.parameters[g.input]:g.input,v=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",f)),c.push(this.getDependency("accessor",v)),l.push(g),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const d=u[0],p=u[1],g=u[2],_=u[3],m=u[4],f=[];for(let v=0,M=d.length;v<M;v++){const b=d[v],w=p[v],A=g[v],C=_[v],P=m[v];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();const T=n._createAnimationTracks(b,w,A,C,P);if(T)for(let E=0;E<T.length;E++)f.push(T[E])}return new Vb(r,void 0,f)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(d,CS)});for(let p=0,g=u.length;p<g;p++)h.add(u[p]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new zp:l.length>1?h=new an:l.length===1?h=l[0]:h=new vt,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),xi(h,r),r.extensions&&fs(n,h,r),r.matrix!==void 0){const u=new Ge;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new an;n.name&&(r.name=i.createUniqueName(n.name)),xi(r,n),n.extensions&&fs(t,r,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);const l=h=>{const u=new Map;for(const[d,p]of i.associations)(d instanceof ai||d instanceof zt)&&u.set(d,p);return h.traverse(d=>{const p=i.associations.get(d);p!=null&&u.set(d,p)}),u};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,c=[];Hi[r.path]===Hi.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(Hi[r.path]){case Hi.weights:l=Ir;break;case Hi.rotation:l=Ur;break;case Hi.position:case Hi.scale:l=Or;break;default:switch(n.itemSize){case 1:l=Ir;break;case 2:case 3:default:l=Or;break}break}const h=i.interpolation!==void 0?SS[i.interpolation]:So,u=this._getArrayFromAccessor(n);for(let d=0,p=c.length;d<p;d++){const g=new l(c[d]+"."+Hi[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Ph(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Ur?ES:em;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function DS(s,e,t){const n=e.attributes,i=new An;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new L(c[0],c[1],c[2]),new L(l[0],l[1],l[2])),a.normalized){const h=Ph(rr[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new L,c=new L;for(let l=0,h=r.length;l<h;l++){const u=r[l];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],p=d.min,g=d.max;if(p!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),d.normalized){const _=Ph(rr[d.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new li;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function df(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}for(const o in n){const a=Ch[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return Je.workingColorSpace!==un&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Je.workingColorSpace}" not supported.`),xi(s,e),DS(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?TS(s,e.targets,t):s})}const tm={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Vr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const LS=new Rc(-1,1,1,-1,0,1);class NS extends At{constructor(){super(),this.setAttribute("position",new ft([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ft([0,2,0,0,2,0],2))}}const IS=new NS;class uu{constructor(e){this._mesh=new Ie(IS,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,LS)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Dh extends Vr{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof en?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=To.clone(e.uniforms),this.material=new en({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new uu(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class ff extends Vr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class US extends Vr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class pf{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new De);this._width=n.width,this._height=n.height,t=new jn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Li}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Dh(tm),this.copyPass.material.blending=Di,this.clock=new s0}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}ff!==void 0&&(o instanceof ff?n=!0:o instanceof US&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new De);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class mf extends Vr{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Te}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}}const OS={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Te(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Fr extends Vr{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new De(e.x,e.y):new De(256,256),this.clearColor=new Te(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new jn(r,o,{type:Li}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new jn(r,o,{type:Li});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const p=new jn(r,o,{type:Li});p.texture.name="UnrealBloomPass.v"+u,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),o=Math.round(o/2)}const a=OS;this.highPassUniforms=To.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new en({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new De(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=tm;this.copyUniforms=To.clone(h.uniforms),this.blendMaterial=new en({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Gt,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Te,this.oldClearAlpha=1,this.basic=new Lt,this.fsQuad=new uu(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new De(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=Fr.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=Fr.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new en({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new De(.5,.5)},direction:{value:new De(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}}Fr.BlurDirectionX=new De(1,0);Fr.BlurDirectionY=new De(0,1);const FS={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class kS extends Vr{constructor(){super();const e=FS;this.uniforms=To.clone(e.uniforms),this.material=new Ib({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new uu(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Je.getTransfer(this._outputColorSpace)===ht&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===dp?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===fp?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===pp?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Wh?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===mp?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===gp&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const BS={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new De(1/1024,1/512)}},vertexShader:`

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
			
		}`};class GS extends Gp{constructor(){super();const e=new Xt;e.deleteAttribute("uv");const t=new Wt({side:ln}),n=new Wt,i=new au(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const r=new Ie(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new Ie(e,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new Ie(e,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const c=new Ie(e,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);const l=new Ie(e,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);const h=new Ie(e,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const u=new Ie(e,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);const d=new Ie(e,qs(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);const p=new Ie(e,qs(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);const g=new Ie(e,qs(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const _=new Ie(e,qs(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);const m=new Ie(e,qs(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const f=new Ie(e,qs(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function qs(s){const e=new Lt;return e.color.setScalar(s),e}var zS=(function(){var s="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?e:s,r,o=WebAssembly.instantiate(a(i),{}).then(function(f){r=f.instance,r.exports.__wasm_call_ctors()});function a(f){for(var v=new Uint8Array(f.length),M=0;M<f.length;++M){var b=f.charCodeAt(M);v[M]=b>96?b-97:b>64?b-39:b+4}for(var w=0,M=0;M<f.length;++M)v[w++]=v[M]<60?n[v[M]]:(v[M]-60)*64+v[++M];return v.buffer.slice(0,w)}function c(f,v,M,b,w,A){var C=r.exports.sbrk,P=M+3&-4,T=C(P*b),E=C(w.length),D=new Uint8Array(r.exports.memory.buffer);D.set(w,E);var z=f(T,M,b,E,w.length);if(z==0&&A&&A(T,P,b),v.set(D.subarray(T,T+M*b)),C(T-C(0)),z!=0)throw new Error("Malformed buffer data: "+z)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],d=0;function p(f){var v={object:new Worker(f),pending:0,requests:{}};return v.object.onmessage=function(M){var b=M.data;v.pending-=b.count,v.requests[b.id][b.action](b.value),delete v.requests[b.id]},v}function g(f){for(var v="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(a(i))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+c.toString()+m.toString(),M=new Blob([v],{type:"text/javascript"}),b=URL.createObjectURL(M),w=0;w<f;++w)u[w]=p(b);URL.revokeObjectURL(b)}function _(f,v,M,b,w){for(var A=u[0],C=1;C<u.length;++C)u[C].pending<A.pending&&(A=u[C]);return new Promise(function(P,T){var E=new Uint8Array(M),D=d++;A.pending+=f,A.requests[D]={resolve:P,reject:T},A.object.postMessage({id:D,count:f,size:v,source:E,mode:b,filter:w},[E.buffer])})}function m(f){o.then(function(){var v=f.data;try{var M=new Uint8Array(v.count*v.size);c(r.exports[v.mode],M,v.count,v.size,v.source,r.exports[v.filter]),self.postMessage({id:v.id,count:v.count,action:"resolve",value:M},[M.buffer])}catch(b){self.postMessage({id:v.id,count:v.count,action:"reject",value:b})}})}return{ready:o,supported:!0,useWorkers:function(f){g(f)},decodeVertexBuffer:function(f,v,M,b,w){c(r.exports.meshopt_decodeVertexBuffer,f,v,M,b,r.exports[l[w]])},decodeIndexBuffer:function(f,v,M,b){c(r.exports.meshopt_decodeIndexBuffer,f,v,M,b)},decodeIndexSequence:function(f,v,M,b){c(r.exports.meshopt_decodeIndexSequence,f,v,M,b)},decodeGltfBuffer:function(f,v,M,b,w,A){c(r.exports[h[w]],f,v,M,b,r.exports[l[A]])},decodeGltfBufferAsync:function(f,v,M,b,w){return u.length>0?_(f,v,M,h[b],l[w]):o.then(function(){var A=new Uint8Array(f*v);return c(r.exports[h[b]],A,f,v,M,r.exports[l[w]]),A})}}})();const HS="/stellar-forge-demo/assets/base-DJSYMZGG.glb",VS="/stellar-forge-demo/assets/drone-DNFx31fC.glb",WS="/stellar-forge-demo/assets/refinery-CWecivRY.glb",XS="/stellar-forge-demo/assets/factory-CDlC3Tui.glb",qS="/stellar-forge-demo/assets/fusion-CIaxr2UT.glb",jS="/stellar-forge-demo/assets/shipyard-MpOKoVL0.glb",YS="/stellar-forge-demo/assets/fleet-D4gBosHm.glb",KS="/stellar-forge-demo/assets/colony-XHhPb87D.glb",$S="/stellar-forge-demo/assets/starlifter-Cr-qD9Gq.glb",JS="/stellar-forge-demo/assets/dyson-wn0t3jmY.glb";function ZS(){const s=new JE;return s.setMeshoptDecoder(zS),s}const gf=855828,_f=16765286,ps=9425919,bf=3530952,Lh=10473727,QS=16756838,Nh=15770880,hc=10182117,Ih=16769366,vf={1:4609646,2:5915699,3:4864611},xf={1:{hemiSky:3818848,hemiGround:658966,fog:855828,key:15134719,rim:6000089},2:{hemiSky:4864038,hemiGround:1314055,fog:1445897,key:16771535,rim:15770880},3:{hemiSky:3811922,hemiGround:722200,fog:984864,key:15524607,rim:10182117}},ey=1e3,ty=4.4,no=1.05,ny=1500,iy=14,Mf=5,sy=9,ry=22,oy=1.9,Ef=4200,ay=2600,cy=1.25,ly=2.6,hy=.5,Sf=3,El=8,uy=.09,io=[{tier:1,kind:"drone",url:VS,sizeY:2,cap:48,epoch:1},{tier:2,kind:"structure",url:WS,sizeY:5,cap:35,glow:Lh,epoch:1},{tier:3,kind:"structure",url:XS,sizeY:7.5,cap:20,glow:QS,epoch:1},{tier:4,kind:"structure",url:qS,sizeY:11,cap:16,glow:Nh,epoch:2},{tier:5,kind:"structure",url:jS,sizeY:14,cap:9,glow:Nh,epoch:2},{tier:6,kind:"structure",url:YS,sizeY:18,cap:6,glow:hc,epoch:3},{tier:7,kind:"structure",url:KS,sizeY:21,cap:4,glow:hc,epoch:3},{tier:8,kind:"structure",url:$S,sizeY:26,cap:4,glow:hc,epoch:3},{tier:9,kind:"structure",url:JS,sizeY:34,cap:2,glow:Ih,epoch:3}],yf=2.399963229728653,dy=[60,180,300],Qi=8,$n=(()=>{const s=60*(Math.PI/180),e=9,t=12,n=18,i=[{bearing:60,bands:[[{tier:1,side:"solo",rows:8,cols:6,pitch:6.5}],[{tier:2,side:"L",rows:7,cols:5,pitch:10},{tier:3,side:"R",rows:5,cols:4,pitch:13.5}]]},{bearing:180,bands:[[{tier:4,side:"L",rows:4,cols:4,pitch:18},{tier:5,side:"R",rows:3,cols:3,pitch:26}]]},{bearing:300,bands:[[{tier:6,side:"L",rows:2,cols:3,pitch:33},{tier:7,side:"R",rows:2,cols:2,pitch:40}],[{tier:8,side:"L",rows:2,cols:2,pitch:52},{tier:9,side:"R",rows:2,cols:1,pitch:62}]]}],r=new Map;for(const o of i){let a=n;for(const c of o.bands){let l=0,h=0;for(const d of c){const p=d.side==="solo"?d.rows*d.pitch/2:Qi/2+d.rows*d.pitch;l=Math.max(l,p),h=Math.max(h,d.cols*d.pitch)}const u=Math.max(a,(l+e)/Math.tan(s));for(const d of c)r.set(d.tier,{bearing:o.bearing,side:d.side,rows:d.rows,cols:d.cols,pitch:d.pitch,u0:u});a=u+h+t}}return r})(),uc={60:1,180:2,300:3};function Ya(s){const e=s.cols*s.pitch,t=s.rows*s.pitch,n=s.u0+e/2,i=s.side==="solo"?0:(s.side==="L"?-1:1)*(Qi/2+t/2);return{depth:e,width:t,uCenter:n,vCenter:i}}function Uh(s){const e=s.u0+s.cols*s.pitch,t=s.side==="solo"?s.rows*s.pitch/2:Qi/2+s.rows*s.pitch;return Math.hypot(e,t)}function Tf(s,e){const t=Math.min(Math.max(e,0),s.rows*s.cols-1),n=Math.floor(t/s.rows),i=t%s.rows,r=s.pitch,o=s.u0+n*r+r/2,a=s.side==="solo"?(i-(s.rows-1)/2)*r:s.side==="L"?-4-(i+.5)*r:Qi/2+(i+.5)*r;return{u:o,v:a,col:n,row:i}}function Vi(s,e,t){const n=t*(Math.PI/180);return{x:s*Math.cos(n)-e*Math.sin(n),z:s*Math.sin(n)+e*Math.cos(n)}}function fy(s){let e=40;for(const t of $n.values())uc[t.bearing]===s&&(e=Math.max(e,Uh(t)));return e}class py{constructor(e){I(this,"_bus");I(this,"_clock");I(this,"_input");I(this,"_world");I(this,"_renderer");I(this,"_scene");I(this,"_camera");I(this,"_canvas");I(this,"_parent");I(this,"_loader",ZS());I(this,"_bloomComposer");I(this,"_finalComposer");I(this,"_bloomPass");I(this,"_fxaaPass");I(this,"_bloomLayer",new Qh);I(this,"_darkMat",new Lt({color:0}));I(this,"_matStash",new Map);I(this,"_forge");I(this,"_forgeCore");I(this,"_forgeMidY",2);I(this,"_protos",new Map);I(this,"_loading",new Set);I(this,"_protoFootprint",new Map);I(this,"_byTier",new Map);I(this,"_owned",new Map);I(this,"_districtCurb",new Map);I(this,"_propSets",[]);I(this,"_propZero",new Ge().makeScale(0,0,0));I(this,"_dysonCrown");I(this,"_oreNodes",[]);I(this,"_freight",[]);I(this,"_shockwaves",[]);I(this,"_lastEpochSeen",1);I(this,"_oreCarryGeo",new po(.22,0));I(this,"_oreCarryMat",new Lt({color:bf,transparent:!0,opacity:.95,blending:Gt,depthWrite:!1,fog:!1}));I(this,"_glowGeo",new go(.32,12,10));I(this,"_rockGeo",new bc(.6,0));I(this,"_freightGeo",new po(.16,0));I(this,"_padGeo",new Qs(1,1.08,.34,6));I(this,"_padRimGeo",new vc(1,.05,6,32));I(this,"_rotorGeo",new vc(.5,.035,6,28));I(this,"_beaconGeo",new go(.13,8,8));I(this,"_moteGeo",new po(.15,0));I(this,"_ringGeo",new mo(.86,1,40));I(this,"_siloGeo",new Qs(1,1.05,1,8));I(this,"_crateGeo",new Xt(1,1,1));I(this,"_solarGeo",new Xt(1,.06,1));I(this,"_pylonGeo",new Qs(.4,1,1,6));I(this,"_propMat",new Wt({color:16777215,roughness:.82,metalness:.34}));I(this,"_keyLight");I(this,"_hemi");I(this,"_rimLight");I(this,"_epochBlend",1);I(this,"_sparks");I(this,"_sparkVel");I(this,"_nextSpark",0);I(this,"_droneGlow");I(this,"_droneTrail");I(this,"_trailHead",0);I(this,"_trailTimer",0);I(this,"_raf",0);I(this,"_lastMs",0);I(this,"_elapsed",0);I(this,"_camDist",20);I(this,"_userZoom",1);I(this,"_zoomTarget",1);I(this,"_pinchDist",0);I(this,"_focusUntil",0);I(this,"_focusStart",0);I(this,"_focusTarget",new L);I(this,"_shakeUntil",0);I(this,"_flash",0);I(this,"_hitW",-1);I(this,"_hitH",-1);I(this,"_unsub",[]);I(this,"_scratch",new L);I(this,"_base",new L);I(this,"_colA",new Te);I(this,"_colB",new Te);I(this,"_darkenNonBloomed",e=>{const t=e;t.isMesh&&this._bloomLayer.test(e.layers)===!1&&(this._matStash.set(e.uuid,t.material),t.material=this._darkMat)});I(this,"_restoreMaterial",e=>{const t=this._matStash.get(e.uuid);t!==void 0&&(e.material=t,this._matStash.delete(e.uuid))});I(this,"_onPointerDown",e=>this._input.onPointerDown(this._raw(e,"down")));I(this,"_onPointerUp",e=>this._input.onPointerUp(this._raw(e,"up")));I(this,"_onPointerMove",e=>this._input.onPointerMove(this._raw(e,"move")));I(this,"_onWheel",e=>{e.preventDefault(),this._nudgeZoom(e.deltaY*.0011)});I(this,"_onTouchMove",e=>{if(e.touches.length!==2){this._pinchDist=0;return}e.preventDefault();const t=e.touches[0].clientX-e.touches[1].clientX,n=e.touches[0].clientY-e.touches[1].clientY,i=Math.hypot(t,n);this._pinchDist>0&&this._nudgeZoom((this._pinchDist-i)*.006),this._pinchDist=i});I(this,"_onTouchEnd",()=>{this._pinchDist=0});I(this,"_loop",()=>{this._raf=requestAnimationFrame(this._loop);const e=performance.now(),t=e-this._lastMs;this._lastMs=e,this._elapsed+=t;const n=Math.min(t,100)/1e3;this._clock.advance(Math.min(t,ey)),this._animateForge(n),this._animateDysonCrown(this._elapsed/1e3),this._animateUnits(n),this._animateOre(n),this._animateFreight(n),this._animateShockwaves(n),this._animateSparks(n),this._syncDroneVFX(n),this._applyEpochAmbience(n),this._updateHitArea(),this._applyCamera(n),this._renderComposite()});I(this,"_onResize",()=>{const e=this._parent.clientWidth||window.innerWidth,t=this._parent.clientHeight||window.innerHeight;this._camera.aspect=e/t,this._camera.updateProjectionMatrix(),this._renderer.setSize(e,t),this._bloomComposer.setSize(e,t),this._finalComposer.setSize(e,t);const n=this._renderer.getPixelRatio();this._fxaaPass.material.uniforms.resolution.value.set(1/(e*n),1/(t*n))});this._bus=e.bus,this._clock=e.clock,this._input=e.input,this._world=e.world}mount(e){this._parent=e;const t=e.clientWidth||window.innerWidth,n=e.clientHeight||window.innerHeight;this._renderer=new $E({antialias:!1,powerPreference:"high-performance"}),this._renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this._renderer.setSize(t,n),this._renderer.shadowMap.enabled=!0,this._renderer.shadowMap.type=hp,this._renderer.toneMapping=Wh,this._renderer.toneMappingExposure=1.12,this._canvas=this._renderer.domElement,this._canvas.style.cssText="display:block;width:100%;height:100%",e.appendChild(this._canvas),this._scene=new Gp,this._scene.background=new Te(gf),this._scene.fog=new eu(gf,110,900),this._camera=new cn(45,t/n,.1,1400);const i=new wh(this._renderer),r=new GS;this._scene.environment=i.fromScene(r,.04).texture,this._scene.environmentIntensity=.55,i.dispose(),this._bloomLayer.set(1),this._buildComposers(t,n),this._buildLighting(),this._buildGround(),this._buildCityPlan(),this._buildStarfield(),this._buildSparks(),this._buildOreField(),this._buildFreight(),this._buildShockwaves(),this._buildDroneVFX(),this._loadForge(),this._seedInitialTiers(),this._lastEpochSeen=this._currentEpoch(),this._unsub.push(this._bus.on(ee.INTENT_TAP_FORGE,()=>this._onForgeTap()),this._bus.on(ee.GENERATOR_PURCHASED,o=>this._syncTier(o.tier,o.owned,!0)),this._bus.on(ee.MILESTONE_REACHED,o=>this._onMilestone(o)),this._bus.on(ee.ASCENSION_STARTED,()=>this._celebrate(.4,240)),this._bus.on(ee.ASCENSION_COMPLETE,()=>this._onAscension())),this._canvas.addEventListener("pointerdown",this._onPointerDown),this._canvas.addEventListener("pointerup",this._onPointerUp),this._canvas.addEventListener("pointermove",this._onPointerMove),this._canvas.addEventListener("wheel",this._onWheel,{passive:!1}),this._canvas.addEventListener("touchmove",this._onTouchMove,{passive:!1}),this._canvas.addEventListener("touchend",this._onTouchEnd),window.addEventListener("resize",this._onResize),this._lastMs=performance.now(),this._loop()}dispose(){var e,t;cancelAnimationFrame(this._raf),window.removeEventListener("resize",this._onResize),this._canvas.removeEventListener("pointerdown",this._onPointerDown),this._canvas.removeEventListener("pointerup",this._onPointerUp),this._canvas.removeEventListener("pointermove",this._onPointerMove),this._canvas.removeEventListener("wheel",this._onWheel),this._canvas.removeEventListener("touchmove",this._onTouchMove),this._canvas.removeEventListener("touchend",this._onTouchEnd);for(const n of this._unsub)n();this._unsub.length=0,this._scene.traverse(n=>{const i=n;i.geometry&&i.geometry.dispose();const r=i.material;Array.isArray(r)?r.forEach(o=>o.dispose()):r==null||r.dispose()}),(e=this._bloomComposer)==null||e.dispose(),(t=this._finalComposer)==null||t.dispose(),this._renderer.dispose(),this._canvas.remove()}_buildComposers(e,t){this._darkMat.fog=!1,this._bloomPass=new Fr(new De(e,t),.82,.55,.05),this._bloomComposer=new pf(this._renderer),this._bloomComposer.renderToScreen=!1,this._bloomComposer.addPass(new mf(this._scene,this._camera)),this._bloomComposer.addPass(this._bloomPass);const n=new Dh(new en({uniforms:{baseTexture:{value:null},bloomTexture:{value:this._bloomComposer.renderTarget2.texture}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform sampler2D baseTexture; uniform sampler2D bloomTexture; varying vec2 vUv; void main(){ gl_FragColor = texture2D(baseTexture, vUv) + vec4(1.02) * texture2D(bloomTexture, vUv); }"}),"baseTexture");n.needsSwap=!0,this._finalComposer=new pf(this._renderer),this._finalComposer.addPass(new mf(this._scene,this._camera)),this._finalComposer.addPass(n),this._finalComposer.addPass(new kS);const i=this._renderer.getPixelRatio();this._fxaaPass=new Dh(BS),this._fxaaPass.material.uniforms.resolution.value.set(1/(e*i),1/(t*i)),this._finalComposer.addPass(this._fxaaPass)}_bloom(e){e.traverse(t=>t.layers.enable(1))}_renderComposite(){this._scene.traverse(this._darkenNonBloomed),this._bloomComposer.render(),this._scene.traverse(this._restoreMaterial),this._finalComposer.render()}_buildLighting(){const e=new cc(15134719,3.9);e.position.set(-16,30,14),e.castShadow=!0,e.shadow.mapSize.set(2048,2048),e.shadow.camera.near=1,e.shadow.camera.far=520;const t=230;e.shadow.camera.left=-t,e.shadow.camera.right=t,e.shadow.camera.top=t,e.shadow.camera.bottom=-t,e.shadow.bias=-4e-4,this._scene.add(e),this._keyLight=e;const n=new cc(7308984,.7);n.position.set(16,10,-12),this._scene.add(n),this._hemi=new Jb(3818848,658966,.95),this._scene.add(this._hemi),this._rimLight=new cc(6000089,1.1),this._rimLight.position.set(10,16,-22),this._scene.add(this._rimLight)}_groundY(e,t){const n=Math.sin(e*.16)*Math.cos(t*.14)*.42+Math.sin(e*.42+1.3)*Math.cos(t*.38+.4)*.2+Math.sin(e*.95+4)*Math.cos(t*.9+2.1)*.09+Math.sin(e*2.3)*Math.cos(t*2.1)*.04,i=Math.hypot(e,t),r=Math.min(1,Math.max(0,(i-200)/80)*.92+.04);return n*r}_seatY(e,t,n){let i=this._groundY(e,t);const r=n*.9;for(let o=0;o<8;o+=1){const a=o/8*Math.PI*2;i=Math.max(i,this._groundY(e+Math.cos(a)*r,t+Math.sin(a)*r))}return i}_buildGround(){const n=new pa(560,560,360,360);n.rotateX(-Math.PI/2);const i=n.attributes.position;for(let a=0;a<i.count;a+=1)i.setY(a,this._groundY(i.getX(a),i.getZ(a)));n.computeVertexNormals();const r=new Wt({color:4344150,roughness:.94,metalness:.12}),o=new Ie(n,r);o.receiveShadow=!0,this._scene.add(o)}_buildCityPlan(){const e=this._groundY(0,0),t=Math.PI/180,n=new Ie(new ru(12,60),new Wt({color:2830910,roughness:.86,metalness:.22}));n.rotation.x=-Math.PI/2,n.position.y=e+.03,n.receiveShadow=!0,this._scene.add(n);const i=new Ie(new mo(11.4,12,60),new Lt({color:ps,transparent:!0,opacity:.34,side:_n,blending:Gt,depthWrite:!1,fog:!1}));i.rotation.x=-Math.PI/2,i.position.y=e+.05,i.layers.enable(1),this._scene.add(i);const r=new Ie(new mo(15.2,16.6,72),new Wt({color:2501944,roughness:.82,metalness:.26,emissive:2243157,emissiveIntensity:.45,side:_n}));r.rotation.x=-Math.PI/2,r.position.y=e+.02,r.receiveShadow=!0,this._scene.add(r);const o=dy.map(a=>({deg:a,len:fy(uc[a]??1)+10}));for(const a of o){const c=a.deg*t,l=12+a.len/2,h=new Ie(new Xt(a.len,.12,Qi),new Wt({color:2501944,roughness:.82,metalness:.26,emissive:2243157,emissiveIntensity:.5}));h.rotation.y=-c,h.position.set(Math.cos(c)*l,e+.02,Math.sin(c)*l),h.receiveShadow=!0,this._scene.add(h)}for(const[a,c]of $n)this._buildDistrictDeck(a,c,e);this._buildConduits(o,e),this._buildCityLights(e,o),this._buildFillProps(e)}_buildConduits(e,t){const n=Math.PI/180,i=[],r=(c,l,h,u,d)=>{const p=new Xt(c,.16,l),g=d*n,_=Vi(h,u,d);p.applyMatrix4(new Ge().makeRotationY(-g).setPosition(_.x,t+.06,_.z)),i.push(p)};for(const c of e){const h=c.len-4;for(const u of[-1,1])r(h-16,.5,(16+h)/2,u*(Qi/2+.7),c.deg)}for(const c of $n.values()){if(c.side==="solo")continue;const l=c.side==="L"?-1:1,{uCenter:h}=Ya(c);r(c.pitch*.4,3,h,l*(Qi/2+1.5),c.bearing)}const o=of(i);if(o===null)return;const a=new Ie(o,new Wt({color:2041136,roughness:.8,metalness:.3}));a.receiveShadow=!0,this._scene.add(a)}_epochDeckColor(e){return e>=3?10182117:e===2?15770880:6000089}_buildDistrictDeck(e,t,n){const{depth:i,width:r,uCenter:o,vCenter:a}=Ya(t),c=t.bearing*(Math.PI/180),l=Math.cos(c),h=Math.sin(c),u=o*l-a*h,d=o*h+a*l,p=i+3,g=r+3,_=new Ie(new Xt(p,.14,g),new Wt({color:2765117,roughness:.85,metalness:.24}));_.rotation.y=-c,_.position.set(u,n+.03,d),_.receiveShadow=!0,this._scene.add(_);const m=uc[t.bearing]??1,f=new Lt({color:this._epochDeckColor(m),transparent:!0,opacity:.14,blending:Gt,depthWrite:!1,fog:!1}),v=.5,M=of([new Xt(p,.1,v).translate(0,0,g/2),new Xt(p,.1,v).translate(0,0,-g/2),new Xt(v,.1,g).translate(p/2,0,0),new Xt(v,.1,g).translate(-p/2,0,0)])??new Xt(p,.1,v),b=new Ie(M,f);b.layers.enable(1),b.rotation.y=-c,b.position.set(u,n+.12,d),this._scene.add(b),this._districtCurb.set(e,f)}_buildCityLights(e,t){const n=Math.PI/180,i=4.4,r=16;let o=0;for(const d of t)o+=(Math.floor((d.len-r)/i)+1)*2;const a=new Xt(.55,.5,1.7),c=new Wt({color:2371644,emissive:4183782,emissiveIntensity:1.5,roughness:.4,metalness:.2}),l=new Th(a,c,o);l.layers.enable(1),l.instanceMatrix.setUsage(pc);const h=new vt;let u=0;for(const d of t){const p=d.deg*n,g=Math.cos(p),_=Math.sin(p),m=-Math.sin(p),f=Math.cos(p),v=Math.floor((d.len-r)/i)+1;for(let M=0;M<v;M+=1){const b=r+M*i;for(const w of[-1,1]){const A=w*(Qi/2-.4);h.position.set(g*b+m*A,e+.12,_*b+f*A),h.rotation.set(0,-p,0),h.updateMatrix(),l.setMatrixAt(u,h.matrix),u+=1}}}l.count=u,l.frustumCulled=!1,this._scene.add(l)}_buildFillProps(e){const t=new vt,n=new Te,i=(l,h)=>{if(h.length===0)return;const u=new Th(l,this._propMat,h.length);u.frustumCulled=!1,u.castShadow=!1,u.instanceMatrix.setUsage(F_);const d=[],p=new Int16Array(h.length),g=new Map;for(let _=0;_<h.length;_+=1){const m=h[_];t.position.set(m.x,m.y,m.z),t.rotation.set(0,-($n.get(m.tier).bearing*(Math.PI/180)),m.tiltZ),t.scale.set(m.sx,m.sy,m.sz),t.updateMatrix(),d.push(t.matrix.clone()),u.setMatrixAt(_,this._propZero),u.setColorAt(_,n.setHex(m.tint)),p[_]=m.slot;const f=g.get(m.tier);f===void 0?g.set(m.tier,[_]):f.push(_)}u.instanceMatrix.needsUpdate=!0,u.instanceColor!==null&&(u.instanceColor.needsUpdate=!0),this._scene.add(u),this._propSets.push({inst:u,mat:d,slotOf:p,byTier:g})},r=[],o=[],a=[],c=[];for(const[l,h]of $n){const u=this._cfg(l);if(u===void 0)continue;const d=uc[h.bearing]??1,p=vf[d]??vf[1],g=h.pitch,_=h.side==="L"?-1:1,m=h.rows*h.cols;for(let f=0;f<m;f+=1){const{u:v,v:M,col:b}=Tf(h,f);{const w=Vi(v-g*.32,M,h.bearing),A=g*.22;o.push({tier:l,slot:f,x:w.x,z:w.z,y:e+.14+A/2,sx:g*.3,sy:A,sz:g*.42,tiltZ:0,tint:p})}if(d<=2){const w=ao.clamp(u.sizeY*.3,1.2,7);for(const A of[-1,1]){const C=Vi(v+g*.34,M+A*g*.3,h.bearing);r.push({tier:l,slot:f,x:C.x,z:C.z,y:e+.14+w/2,sx:g*.16,sy:w,sz:g*.16,tiltZ:0,tint:p})}}if(d>=3){const w=Vi(v,M+_*g*.36,h.bearing);a.push({tier:l,slot:f,x:w.x,z:w.z,y:e+.14+.42,sx:g*.5,sy:1,sz:g*.3,tiltZ:.38,tint:p})}if(b===h.cols-1){const w=Vi(v+g*.72,M,h.bearing),A=ao.clamp(u.sizeY*.5,3,14);c.push({tier:l,slot:f,x:w.x,z:w.z,y:e+.14+A/2,sx:g*.1,sy:A,sz:g*.1,tiltZ:0,tint:p})}}}i(this._crateGeo,o),i(this._siloGeo,r),i(this._solarGeo,a),i(this._pylonGeo,c)}_revealProps(e,t){for(const n of this._propSets){const i=n.byTier.get(e);if(i!==void 0){for(const r of i)n.inst.setMatrixAt(r,n.slotOf[r]<t?n.mat[r]:this._propZero);n.inst.instanceMatrix.needsUpdate=!0}}}_hideAllProps(){for(const e of this._propSets){for(let t=0;t<e.mat.length;t+=1)e.inst.setMatrixAt(t,this._propZero);e.inst.instanceMatrix.needsUpdate=!0}}_buildStarfield(){const e=new At,t=300,n=new Float32Array(t*3);let i=987654321;const r=()=>(i=(i*1664525+1013904223)%4294967296,i/4294967296);for(let d=0;d<t;d+=1){const p=90+r()*90,g=r()*Math.PI*2;n[d*3]=Math.cos(g)*p,n[d*3+1]=18+r()*90,n[d*3+2]=Math.sin(g)*p}e.setAttribute("position",new Tt(n,3));const o=new vs({color:14674165,size:.4,sizeAttenuation:!0,transparent:!0,opacity:.8,fog:!1});this._scene.add(new Zs(e,o));const a=new At,c=26,l=new Float32Array(c*3);for(let d=0;d<c;d+=1){const p=120+r()*120,g=r()*Math.PI*2;l[d*3]=Math.cos(g)*p,l[d*3+1]=40+r()*110,l[d*3+2]=Math.sin(g)*p}a.setAttribute("position",new Tt(l,3));const h=new vs({color:16777215,size:1,sizeAttenuation:!0,transparent:!0,opacity:1,blending:Gt,depthWrite:!1,fog:!1}),u=new Zs(a,h);u.layers.enable(1),this._scene.add(u)}_buildSparks(){const t=new At,n=new Float32Array(480);for(let r=0;r<160;r+=1)n[r*3+1]=-999;this._sparkVel=new Float32Array(480),t.setAttribute("position",new Tt(n,3));const i=new vs({color:_f,size:.12,transparent:!0,opacity:.72,blending:Gt,depthWrite:!1,fog:!1});this._sparks=new Zs(t,i),this._sparks.frustumCulled=!1,this._sparks.layers.enable(1),this._scene.add(this._sparks)}_buildDroneVFX(){const t=new At,n=new Float32Array(48);for(let h=0;h<16;h+=1)n[h*3+1]=-999;t.setAttribute("position",new Tt(n,3));const i=new vs({color:ps,size:.28,sizeAttenuation:!0,transparent:!0,opacity:.8,blending:Gt,depthWrite:!1,fog:!1});this._droneGlow=new Zs(t,i),this._droneGlow.frustumCulled=!1,this._bloom(this._droneGlow),this._scene.add(this._droneGlow);const r=16*El,o=new At,a=new Float32Array(r*3),c=new Float32Array(r*3);for(let h=0;h<r;h+=1)a[h*3+1]=-999;o.setAttribute("position",new Tt(a,3)),o.setAttribute("color",new Tt(c,3));const l=new vs({size:.14,sizeAttenuation:!0,transparent:!0,opacity:.85,vertexColors:!0,blending:Gt,depthWrite:!1,fog:!1});this._droneTrail=new Zs(o,l),this._droneTrail.frustumCulled=!1,this._bloom(this._droneTrail),this._scene.add(this._droneTrail)}_syncDroneVFX(e){const t=this._byTier.get(1),n=this._droneGlow.geometry.attributes.position;for(let o=0;o<n.count;o+=1){const a=t==null?void 0:t[o];a!==void 0&&a.settle>.5?n.setXYZ(o,a.group.position.x,a.group.position.y-.12,a.group.position.z):n.setXYZ(o,0,-999,0)}n.needsUpdate=!0,this._droneGlow.material.opacity=.8+Math.sin(this._elapsed/200)*.18;const i=this._droneTrail.geometry.attributes.position,r=this._droneTrail.geometry.attributes.color;if(this._trailTimer+=e,this._trailTimer>=uy&&t!==void 0){this._trailTimer=0;const o=this._trailHead%El;for(let a=0;a<t.length;a+=1){const c=t[a];if(c.settle>.5&&(c.state==="seek"||c.state==="haul")){const l=a*El+o;i.setXYZ(l,c.group.position.x,c.group.position.y-.12,c.group.position.z),r.setXYZ(l,.56,.83,1)}}this._trailHead+=1,i.needsUpdate=!0}for(let o=0;o<r.count;o+=1)r.setXYZ(o,r.getX(o)*.93,r.getY(o)*.93,r.getZ(o)*.93);r.needsUpdate=!0}_buildOreField(){let e=20260707;const t=()=>(e=(e*1664525+1013904223)%4294967296,e/4294967296);for(let n=0;n<iy;n+=1){const i=Mf+(sy-Mf)*Math.sqrt(t()),r=n*yf*1.3+t()*.6,o=Math.cos(r)*i,a=Math.sin(r)*i,c=this._groundY(o,a),l=.7+t()*.9,h=new Wt({color:2765632,roughness:.72,metalness:.18,emissive:bf,emissiveIntensity:.45}),u=new Ie(this._rockGeo,h);u.scale.set(l,l*(.7+t()*.5),l),u.position.set(o,c+.2*l,a),u.rotation.set(t()*3,t()*3,t()*3),u.castShadow=!0,u.receiveShadow=!0,u.layers.enable(1),this._scene.add(u),this._oreNodes.push({pos:new L(o,c+.55*l,a),mat:h,heat:0})}}_buildFreight(){for(let e=0;e<ry;e+=1){const t=new Wt({color:16777215,emissive:16777215,emissiveIntensity:.8,roughness:.4,metalness:.3,transparent:!0,opacity:1}),n=new Ie(this._freightGeo,t);n.castShadow=!0,n.visible=!1,n.frustumCulled=!1,n.layers.enable(1),this._scene.add(n),this._freight.push({mesh:n,active:!1,t:0,from:new L,ctrl:new L,to:new L})}}_buildShockwaves(){for(let e=0;e<8;e+=1){const t=new Lt({color:16777215,transparent:!0,opacity:0,side:_n,blending:Gt,depthWrite:!1,fog:!1}),n=new Ie(this._ringGeo,t);n.rotation.x=-Math.PI/2,n.visible=!1,n.frustumCulled=!1,n.layers.enable(1),this._scene.add(n),this._shockwaves.push({mesh:n,active:!1,t:0,dur:1,maxScale:1})}}_shockwave(e,t,n,i,r=.9){const o=this._shockwaves.find(c=>!c.active);if(o===void 0)return;o.active=!0,o.t=0,o.dur=r,o.maxScale=i;const a=o.mesh.material;a.color.setHex(n),a.opacity=.85,o.mesh.position.set(e,this._groundY(e,t)+.08,t),o.mesh.scale.setScalar(.1),o.mesh.visible=!0}_animateShockwaves(e){for(const t of this._shockwaves){if(!t.active)continue;if(t.t+=e/t.dur,t.t>=1){t.active=!1,t.mesh.visible=!1;continue}const n=1-Math.pow(1-t.t,2);t.mesh.scale.setScalar(.1+n*t.maxScale),t.mesh.material.opacity=.85*(1-t.t)}}_loadForge(){this._loader.load(HS,e=>{const t=e.scene;this._normalise(t,7.2),t.traverse(o=>{const a=o;a.isMesh&&(a.castShadow=!0,a.receiveShadow=!0)});const n=new an;n.add(t),n.position.set(0,this._groundY(0,0),0),this._scene.add(n),this._forge=n;const i=new An().setFromObject(n);this._forgeMidY=(i.min.y+i.max.y)/2;const r=new au(ps,4.2,34,2);r.position.set(0,this._forgeMidY*.7,.4),this._scene.add(r),this._forgeCore=r},void 0,e=>{console.error("World3D: failed to load base.glb",e);const t=new Ie(new bc(2.4,0),new Wt({color:9152447,roughness:.4,metalness:.5,emissive:2771562}));t.castShadow=!0,t.position.y=2.4;const n=new an;n.add(t),this._scene.add(n),this._forge=n,this._forgeMidY=2.4})}_seedInitialTiers(){for(const e of io)(e.tier===1||this._world.getOwned(e.tier)>0)&&this._ensureTierLoaded(e.tier)}_ensureTierLoaded(e){if(this._protos.has(e)||this._loading.has(e))return;const t=this._cfg(e);t!==void 0&&(this._loading.add(e),this._loader.load(t.url,n=>{const i=n.scene;this._normalise(i,t.sizeY),i.traverse(a=>{const c=a;c.isMesh&&(c.castShadow=!0,c.receiveShadow=!0)});const r=new L;new An().setFromObject(i).getSize(r),this._protoFootprint.set(e,Math.max(r.x,r.z)*.5),this._protos.set(e,i),this._loading.delete(e);const o=this._owned.get(e)??this._world.getOwned(e);this._syncTier(e,e===1?Math.max(1,o):o)},void 0,n=>{this._loading.delete(e),console.error(`World3D: failed to load tier-${e} model`,n)}))}_normalise(e,t){const n=new An().setFromObject(e),i=new L;n.getSize(i);const r=t/(i.y||1);e.scale.setScalar(r);const o=new An().setFromObject(e),a=new L;o.getCenter(a),e.position.x-=a.x,e.position.z-=a.z,e.position.y-=o.min.y}_cfg(e){return io.find(t=>t.tier===e)}_plot(e,t){const n=$n.get(e.tier);if(n===void 0)return{x:0,z:0};const{u:i,v:r}=Tf(n,t);return Vi(i,r,n.bearing)}_basePoint(){return this._base.set(0,this._forgeMidY*.55,1.5)}_makeDrone(e,t,n){const i=new an;i.add(n.clone(!0));const{x:r,z:o}=this._plot(e,t),a=this._groundY(r,o),c=t*yf;i.position.set(r,a+no,o),i.rotation.y=c,i.scale.setScalar(.001);const l=new Ie(this._oreCarryGeo,this._oreCarryMat);return l.position.set(0,-.32,.05),l.visible=!1,i.add(l),this._scene.add(i),{group:i,kind:"drone",settle:0,phase:t*1.7,baseY:a,homeX:r,homeZ:o,state:"seek",oreIdx:this._oreNodes.length>0?t%this._oreNodes.length:0,timer:0,heading:c,carry:l,glow:void 0,glowScale:0,emitTimer:0,topY:0,freightColor:0,pad:void 0,rotor:void 0,spin:0,beacon:void 0,motes:void 0,riseDepth:0,ventLatch:!1,workStyle:"orbit",moteSpin:0}}_makePad(e,t,n,i,r){const o=new an,a=i*1.05+.4,c=new Ie(this._padGeo,new Wt({color:3291720,roughness:.8,metalness:.3}));c.scale.set(a,1,a),c.position.y=-.04,c.castShadow=!0,c.receiveShadow=!0;const l=new Ie(this._padRimGeo,new Lt({color:r,transparent:!0,opacity:.38,blending:Gt,depthWrite:!1,fog:!1}));return l.rotation.x=-Math.PI/2,l.scale.setScalar(a),l.position.y=.16,l.layers.enable(1),o.add(c,l),o.position.set(e,t,n),o.scale.setScalar(.001),this._scene.add(o),o}_makeStructure(e,t,n){const i=new an;i.add(n.clone(!0));const{x:r,z:o}=this._plot(e,t),a=Math.max(this._protoFootprint.get(e.tier)??e.sizeY*.5,.5),c=this._seatY(r,o,a),l=e.glow??Lh,h=$n.get(e.tier),u=h!==void 0?h.bearing*(Math.PI/180):Math.atan2(o,r);i.position.set(r,c,o),i.rotation.y=Math.atan2(-Math.cos(u),-Math.sin(u)),i.scale.setScalar(.001);const d=Math.min(6,Math.max(.85,e.sizeY/4.6)),p=new Ie(this._glowGeo,new Lt({color:l,transparent:!0,opacity:.6,blending:Gt,depthWrite:!1,fog:!1}));p.position.set(0,e.sizeY*.6,0),p.scale.setScalar(d),p.layers.enable(1),i.add(p);const g=new an;g.position.set(0,e.sizeY*.62,0),g.rotation.x=-Math.PI/2+hy,i.add(g);const _=new Ie(this._rotorGeo,new Lt({color:l,transparent:!0,opacity:.75,blending:Gt,depthWrite:!1,fog:!1}));_.scale.setScalar(a*.42),_.layers.enable(1),g.add(_);const m=new Ie(this._beaconGeo,new Lt({color:l,transparent:!0,opacity:1,blending:Gt,depthWrite:!1,fog:!1}));m.scale.setScalar(Math.max(1,e.sizeY/6)),m.position.set(0,e.sizeY*1.02,0),m.layers.enable(1),i.add(m);let f;if(e.epoch>=3){f=new an;const M=a*1.15+e.sizeY*.06;for(let b=0;b<Sf;b+=1){const w=new Ie(this._moteGeo,new Lt({color:l,transparent:!0,opacity:.95,blending:Gt,depthWrite:!1,fog:!1})),A=b/Sf*Math.PI*2;w.position.set(Math.cos(A)*M,0,Math.sin(A)*M),w.scale.setScalar(Math.max(1,e.sizeY/12)),f.add(w)}f.position.set(0,e.sizeY*.66,0),this._bloom(f),i.add(f)}this._scene.add(i);const v=this._makePad(r,c,o,a,l);return{group:i,kind:"structure",settle:0,phase:t*1.7,baseY:c,homeX:r,homeZ:o,state:"seek",oreIdx:0,timer:0,heading:0,carry:void 0,glow:p,glowScale:d,emitTimer:Ef+t*380,topY:c+e.sizeY*.9,freightColor:l,pad:v,rotor:_,spin:.7+1.6/Math.sqrt(e.sizeY),beacon:m,motes:f,riseDepth:Math.min(ly,e.sizeY*.5),ventLatch:!1,workStyle:e.tier<=3?"conduit":e.tier===4?"throb":e.tier===5?"assembly":e.tier===8?"siphon":"orbit",moteSpin:e.tier===6?.9:.32}}_syncTier(e,t,n=!1){const i=this._cfg(e),r=this._protos.get(e);if(i===void 0||r===void 0){this._owned.set(e,t),i!==void 0&&(this._revealProps(e,Math.min(Math.max(t,0),i.cap)),this._ensureTierLoaded(e));return}this._owned.set(e,t);const o=Math.min(Math.max(t,0),i.cap),a=this._byTier.get(e)??[];n&&a.length===0&&o>0&&this._focusDistrict(e);for(let h=a.length;h<o;h+=1){const u=i.kind==="drone"?this._makeDrone(i,h,r):this._makeStructure(i,h,r);a.push(u),n&&this._constructionBeat(u,i)}this._byTier.set(e,a);const c=this._districtCurb.get(e);c!==void 0&&i.cap>0&&(c.opacity=.12+.6*Math.min(1,o/i.cap)),this._revealProps(e,o),e===9&&o>0&&this._dysonCrown===void 0&&this._buildDysonCrown(),this._frameCamera();const l=this._currentEpoch();l>this._lastEpochSeen&&(n&&this._onEpochAdvance(l),this._lastEpochSeen=l)}_constructionBeat(e,t){const n=t.glow??(t.kind==="drone"?ps:Lh),i=this._protoFootprint.get(t.tier)??t.sizeY*.5,r=Math.max(3,i*2.4+t.sizeY*.4);this._shockwave(e.homeX,e.homeZ,n,r,.95),this._emitSparks(t.kind==="drone"?4:8,t.kind==="drone"?.9:1.4,this._scratch.set(e.homeX,e.baseY+t.sizeY*.4,e.homeZ)),this._shakeUntil=Math.max(this._shakeUntil,this._elapsed+180),this._flash=Math.max(this._flash,.07)}_onEpochAdvance(e){const t=e>=3?hc:e===2?Nh:ps;this._shockwave(0,0,t,190,1.6),this._shockwave(0,0,16777215,90,1.2),this._celebrate(1.05,760),this._emitSparks(48,2.6,this._scratch.set(0,this._forgeMidY,0)),this._epochBlend=Math.max(this._epochBlend,e-.85)}_onMilestone(e){if(e.type!=="owned_count"||e.tier===void 0||e.ordinal!==e.seriesLength)return;const t=$n.get(e.tier),n=this._cfg(e.tier);if(t===void 0||n===void 0)return;const{uCenter:i,vCenter:r}=Ya(t),{x:o,z:a}=Vi(i,r,t.bearing);this._shockwave(o,a,n.glow??ps,Math.max(6,Uh(t)*.5),1)}_occupiedRadius(){var t;let e=14;for(const n of io)if((((t=this._byTier.get(n.tier))==null?void 0:t.length)??0)>0){const i=$n.get(n.tier);i!==void 0&&(e=Math.max(e,Uh(i)+n.sizeY))}return e}_frameCamera(){const e=this._occupiedRadius();this._camDist=ao.clamp(e*1.32+10,16,390)}_currentEpoch(){var t;let e=1;for(const n of io)(((t=this._byTier.get(n.tier))==null?void 0:t.length)??0)>0&&(e=Math.max(e,n.epoch));return e}_applyEpochAmbience(e){this._epochBlend+=(this._currentEpoch()-this._epochBlend)*Math.min(1,e*.5);const t=Math.max(1,Math.min(3,Math.floor(this._epochBlend))),n=Math.min(3,t+1),i=this._epochBlend-t,r=xf[t],o=xf[n];r===void 0||o===void 0||(this._hemi.color.setHex(r.hemiSky).lerp(this._colA.setHex(o.hemiSky),i),this._hemi.groundColor.setHex(r.hemiGround).lerp(this._colA.setHex(o.hemiGround),i),this._keyLight.color.setHex(r.key).lerp(this._colA.setHex(o.key),i),this._rimLight.color.setHex(r.rim).lerp(this._colA.setHex(o.rim),i),this._colB.setHex(r.fog).lerp(this._colA.setHex(o.fog),i),this._scene.fog.color.copy(this._colB),this._scene.background.copy(this._colB))}_buildDysonCrown(){const e=this._cfg(9);if(e===void 0)return;const{x:t,z:n}=this._plot(e,0),i=Math.max(this._protoFootprint.get(9)??e.sizeY*.5,.5),r=this._seatY(t,n,i)+e.sizeY*.9,o=new an,a=e.sizeY*2.3,c=new Qs(2.2,6,a,24,1,!0),l=c.attributes.position,h=new Float32Array(l.count*3),u=new Te(Ih);for(let g=0;g<l.count;g+=1){const _=1-(l.getY(g)+a/2)/a;h[g*3]=u.r*_,h[g*3+1]=u.g*_,h[g*3+2]=u.b*_}c.setAttribute("color",new Tt(h,3));const d=new Ie(c,new Lt({vertexColors:!0,transparent:!0,opacity:.5,blending:Gt,depthWrite:!1,side:_n,fog:!1}));d.position.y=a/2,d.layers.enable(1),o.add(d);const p=new Ie(new go(3.2,16,12),new Lt({color:Ih,transparent:!0,opacity:.7,blending:Gt,depthWrite:!1,fog:!1}));p.layers.enable(1),o.add(p),o.position.set(t,r,n),o.frustumCulled=!1,this._scene.add(o),this._dysonCrown=o}_animateDysonCrown(e){if(this._dysonCrown===void 0)return;const t=this._dysonCrown.children[0],n=this._dysonCrown.children[1];t.material.opacity=.5+Math.sin(e*.42)*.06;const i=1+Math.sin(e*.31)*.03;t.scale.x=i,t.scale.z=i,n.scale.setScalar(1+Math.sin(e*.6)*.08)}_disposeDysonCrown(){if(this._dysonCrown!==void 0){this._scene.remove(this._dysonCrown);for(const e of this._dysonCrown.children){const t=e;t.geometry.dispose(),t.material.dispose()}this._dysonCrown=void 0}}_disposeUnit(e){var t,n,i,r,o,a;if(this._scene.remove(e.group),(n=(t=e.glow)==null?void 0:t.material)==null||n.dispose(),(r=(i=e.rotor)==null?void 0:i.material)==null||r.dispose(),(a=(o=e.beacon)==null?void 0:o.material)==null||a.dispose(),e.motes!==void 0)for(const c of e.motes.children)c.material.dispose();if(e.pad!==void 0){this._scene.remove(e.pad);for(const c of e.pad.children)c.material.dispose()}}_clearAllUnits(){for(const e of this._byTier.values())for(const t of e)this._disposeUnit(t);this._byTier.clear()}_onAscension(){this._clearAllUnits();for(const e of this._districtCurb.values())e.opacity=.12;this._hideAllProps(),this._disposeDysonCrown(),this._lastEpochSeen=1,this._epochBlend=1,this._syncTier(1,1),this._celebrate(1.5,560)}_nudgeZoom(e){this._zoomTarget=ao.clamp(this._zoomTarget+e,.4,1.4)}_focusDistrict(e){const t=$n.get(e),n=this._cfg(e);if(t===void 0||n===void 0)return;const{uCenter:i,vCenter:r}=Ya(t),{x:o,z:a}=Vi(i,r,t.bearing);this._focusTarget.set(o,this._groundY(o,a)+n.sizeY*.5,a),this._focusStart=this._elapsed,this._focusUntil=this._elapsed+2600}_raw(e,t){const n=this._canvas.getBoundingClientRect();return{pointerId:e.pointerId,wasTouch:e.pointerType==="touch",x:e.clientX-n.left,y:e.clientY-n.top,timeStamp:e.timeStamp,type:t}}_updateHitArea(){const e=this._canvas.clientWidth,t=this._canvas.clientHeight;e===this._hitW&&t===this._hitH||(this._hitW=e,this._hitH=t,this._input.clearHitAreas(),this._input.registerHitArea({id:"forge",kind:"forge",bounds:{x:0,y:0,width:e,height:t}}))}_onForgeTap(){this._forgeCore!==void 0&&(this._forgeCore.color.setHex(_f),this._forgeCore.intensity=5.5),this._emitSparks(6,1.3,this._scratch.set(0,this._forgeMidY,1.8))}_forgePulse(){this._forgeCore!==void 0&&(this._forgeCore.intensity=Math.max(this._forgeCore.intensity,4.4))}_celebrate(e,t){this._flash=Math.max(this._flash,e),this._shakeUntil=this._elapsed+t,this._emitSparks(36,2.2,this._scratch.set(0,this._forgeMidY,1.8))}_emitSparks(e,t,n){const i=this._sparks.geometry.attributes.position;let r=(this._elapsed|0)+e;const o=()=>(r=r*1103515245+12345&2147483647,r/2147483647);for(let a=0;a<e;a+=1){const c=this._nextSpark;this._nextSpark=(this._nextSpark+1)%i.count,i.setXYZ(c,n.x,n.y,n.z);const l=o()*Math.PI*2;this._sparkVel[c*3]=Math.cos(l)*t*(.4+o()),this._sparkVel[c*3+1]=(.7+o()*1.5)*t,this._sparkVel[c*3+2]=Math.sin(l)*t*(.4+o())}i.needsUpdate=!0}_animateForge(e){const t=this._elapsed/1e3;if(this._forgeCore!==void 0){const n=3.3+Math.sin(t*1.6)*.9;this._forgeCore.intensity+=(n-this._forgeCore.intensity)*Math.min(1,e*3),this._forgeCore.color.lerp(new Te(ps),Math.min(1,e*2))}this._forge!==void 0&&(this._forge.rotation.y=Math.sin(t*.15)*.05)}_lerpAngle(e,t,n){let i=t-e;for(;i>Math.PI;)i-=Math.PI*2;for(;i<-Math.PI;)i+=Math.PI*2;return e+i*n}_flyTo(e,t,n,i){const r=t-e.group.position.x,o=n-e.group.position.z,a=Math.hypot(r,o);e.heading=this._lerpAngle(e.heading,Math.atan2(r,o),Math.min(1,i*6)),e.group.rotation.y=e.heading;const c=ty*i;return a<=c||a<.001?(e.group.position.x=t,e.group.position.z=n,!0):(e.group.position.x+=r/a*c,e.group.position.z+=o/a*c,!1)}_animateUnits(e){const t=this._elapsed/1e3;for(const n of io){const i=this._byTier.get(n.tier);if(i!==void 0)for(const r of i){if(r.settle<1){r.settle=Math.min(1,r.settle+e*cy);const o=1-Math.pow(1-r.settle,3);if(r.group.scale.setScalar(Math.max(.001,o)),r.kind==="structure"){r.pad!==void 0&&r.pad.scale.setScalar(Math.min(1,r.settle*1.7)),r.group.position.y=r.baseY-(1-o)*r.riseDepth,r.glow!==void 0&&(r.glow.material.opacity=.6+(1-r.settle)*.45);continue}}r.kind==="drone"?this._animateDrone(r,t,e):this._animateStructure(r,t,e)}}}_animateDrone(e,t,n){const i=Math.sin(t*2+e.phase)*.09;if(e.settle<.9){e.group.position.set(e.homeX,this._groundY(e.homeX,e.homeZ)+no,e.homeZ);return}if(e.state==="seek"){const a=this._oreNodes[e.oreIdx],c=a===void 0?!0:this._flyTo(e,a.pos.x,a.pos.z,n);e.group.position.y=this._groundY(e.group.position.x,e.group.position.z)+no+i,c&&(e.state="mine",e.timer=ny);return}if(e.state==="mine"){const a=this._oreNodes[e.oreIdx];e.timer-=n*1e3;const c=Math.max(0,Math.sin(t*9+e.phase))*.35,l=a===void 0?0:this._groundY(a.pos.x,a.pos.z);e.group.position.y=l+no+i*.3-c,a!==void 0&&(a.heat=1,Math.sin(t*9+e.phase)>.9&&this._nextSpark%4===0&&this._emitSparks(1,.6,this._scratch.set(a.pos.x,a.pos.y+.2,a.pos.z))),e.timer<=0&&(e.carry!==void 0&&(e.carry.visible=!0),e.state="haul");return}const r=this._basePoint(),o=this._flyTo(e,r.x,r.z,n);e.group.position.y=this._groundY(e.group.position.x,e.group.position.z)+no+i,o&&(e.carry!==void 0&&(e.carry.visible=!1),this._forgePulse(),this._emitSparks(2,.7,r),e.oreIdx=this._oreNodes.length>0?(e.oreIdx+1)%this._oreNodes.length:0,e.state="seek")}_animateStructure(e,t,n){var o;e.group.position.y=e.baseY+Math.sin(t*.9+e.phase)*.02;const i=Math.sin(t*2.2+e.phase)*.5+.5,r=(o=e.glow)==null?void 0:o.material;switch(e.workStyle){case"conduit":{const a=(t*.55+e.phase)%1;e.glow!==void 0&&r!==void 0&&(e.glow.position.y=(e.topY-e.baseY)*(.28+a*.34),r.opacity=.3+(1-Math.abs(a-.5)*2)*.25,e.glow.scale.setScalar(e.glowScale)),e.rotor!==void 0&&(e.rotor.rotation.z+=e.spin*n);break}case"throb":{const a=Math.min(1,Math.pow(Math.sin(t*2.4+e.phase)*.5+.5,8)+.6*Math.pow(Math.sin(t*2.4+e.phase-.5)*.5+.5,8));e.glow!==void 0&&r!==void 0&&(r.opacity=.28+a*.4,e.glow.scale.setScalar(e.glowScale*(.85+a*.35))),e.rotor!==void 0&&(e.rotor.rotation.z+=e.spin*1.6*n);break}case"assembly":{const c=(t*.9+e.phase)*8;e.rotor!==void 0&&(e.rotor.rotation.z=Math.floor(c)/8*Math.PI*2),e.glow!==void 0&&r!==void 0&&(r.opacity=.3+(1-c%1)*.35,e.glow.scale.setScalar(e.glowScale));break}case"siphon":{const a=Math.sin(t*1.1+e.phase)*.5+.5;e.glow!==void 0&&r!==void 0&&(e.glow.scale.set(e.glowScale*.45,e.glowScale*(1.4+a*.8),e.glowScale*.45),e.glow.position.y=(e.topY-e.baseY)*(.45+a*.12),r.opacity=.3+a*.25),e.rotor!==void 0&&(e.rotor.rotation.z+=e.spin*.5*n);break}default:e.glow!==void 0&&r!==void 0&&(r.opacity=.22+i*.4,e.glow.scale.setScalar(e.glowScale*(.7+i*.3))),e.rotor!==void 0&&(e.rotor.rotation.z+=e.spin*n)}if(e.beacon!==void 0){const a=Math.pow(Math.sin(t*1.6+e.phase)*.5+.5,3);e.beacon.material.opacity=.15+a*.5}e.motes!==void 0&&(e.motes.rotation.y+=n*e.moteSpin),i>.92?e.ventLatch||(e.ventLatch=!0,this._emitSparks(1,.5,this._scratch.set(e.group.position.x,e.topY,e.group.position.z))):i<.5&&(e.ventLatch=!1),e.emitTimer-=n*1e3,e.emitTimer<=0&&(this._spawnFreight(this._scratch.set(e.group.position.x,e.topY,e.group.position.z),e.freightColor),e.emitTimer=Ef+e.phase*911%ay)}_animateOre(e){for(const t of this._oreNodes)t.heat>0&&(t.heat=Math.max(0,t.heat-e*1.6)),t.mat.emissiveIntensity=.4+t.heat*1.8}_spawnFreight(e,t){const n=this._freight.find(r=>!r.active);if(n===void 0)return;n.active=!0,n.t=0,n.from.copy(e),n.to.copy(this._basePoint()),n.ctrl.copy(e).lerp(n.to,.5),n.ctrl.y+=1.4;const i=n.mesh.material;i.color.setHex(t),i.emissive.setHex(t),n.mesh.visible=!0,n.mesh.position.copy(e)}_animateFreight(e){for(const t of this._freight){if(!t.active)continue;if(t.t+=e/oy,t.t>=1){t.active=!1,t.mesh.visible=!1,this._forgePulse(),this._emitSparks(2,.8,this._basePoint());continue}const n=1-t.t,i=n*n,r=2*n*t.t,o=t.t*t.t;t.mesh.position.set(i*t.from.x+r*t.ctrl.x+o*t.to.x,i*t.from.y+r*t.ctrl.y+o*t.to.y,i*t.from.z+r*t.ctrl.z+o*t.to.z),t.mesh.rotation.y+=e*4,t.mesh.rotation.x+=e*2.5,t.mesh.material.opacity=Math.min(1,Math.sin(t.t*Math.PI)*3)}}_animateSparks(e){const t=this._sparks.geometry.attributes.position;for(let n=0;n<t.count;n+=1)t.getY(n)<-100||(this._sparkVel[n*3+1]-=5*e,t.setX(n,t.getX(n)+this._sparkVel[n*3]*e),t.setY(n,t.getY(n)+this._sparkVel[n*3+1]*e),t.setZ(n,t.getZ(n)+this._sparkVel[n*3+2]*e),t.getY(n)<=.12&&t.setY(n,-999));t.needsUpdate=!0}_applyCamera(e){const t=this._elapsed/1e3;this._userZoom+=(this._zoomTarget-this._userZoom)*Math.min(1,e*4);let n=0;if(this._elapsed<this._focusUntil){const u=(this._elapsed-this._focusStart)/(this._focusUntil-this._focusStart);n=Math.sin(Math.max(0,Math.min(1,u))*Math.PI)}let i=0;this._elapsed<this._shakeUntil&&(i=.09*((this._shakeUntil-this._elapsed)/300));const r=this._camDist*this._userZoom*(1-.42*n),o=Math.sin(t*.12)*.28,a=Math.sin(o)*r+Math.sin(t*40)*i+this._focusTarget.x*.5*n,c=Math.cos(o)*r+this._focusTarget.z*.5*n,l=r*.9+Math.cos(t*37)*i;this._camera.position.x+=(a-this._camera.position.x)*Math.min(1,e*1.6),this._camera.position.y+=(l-this._camera.position.y)*Math.min(1,e*1.6),this._camera.position.z+=(c-this._camera.position.z)*Math.min(1,e*1.6);const h=this._forgeMidY*.7;this._camera.lookAt(this._focusTarget.x*.6*n,h+(this._focusTarget.y-h)*.5*n,this._focusTarget.z*.6*n),this._flash>0?(this._renderer.toneMappingExposure=1.05+this._flash*1.5,this._flash=Math.max(0,this._flash-e*2.2)):this._renderer.toneMappingExposure+=(1.05-this._renderer.toneMappingExposure)*Math.min(1,e*6)}}const nm=1e-10,Ao=2,im=2,Oh=1e21,du=["K","M","B","T","Qa","Qi"],fu="∞",my=du.length,Af=10**(3*(my+1));if(Oh!==Af)throw new Error(`formatConfig invariant violated: SCIENTIFIC_THRESHOLD (${Oh}) must be one magnitude tier above the top of ABBREVIATION_TABLE (expected ${Af}).`);const sm=0,rm=7,Pc=3,wf=10**Pc,Rf=10**1,Cf=du.length,om=Object.freeze(fa(Sc,Pc)),gy=Object.freeze(pt(Oh)),am=Object.freeze(fa(Sc,-Ao)),_y=`<${am.toNumber().toFixed(Ao)}`,by=Dc(Ce.toNumber()).toFixed(Ao);function vy(s){const e=s.log10(),t=Math.floor((e+nm)/Pc);return Math.max(sm,Math.min(rm,t))}function Pf(s,e){const t=fa(Sc,Pc*e);return s.div(t).toNumber()}function Dc(s){return Math.floor(s*100)/100}function bo(s,e){return s}function Fh(s,e){let t=Math.floor(s.log10()+nm),n=s.div(fa(Sc,t)).toNumber();n>=Rf&&(t+=1,n/=Rf);const r=`${Dc(n).toFixed(im)} e+${String(t)}`;return bo(r)}function cm(s,e,t){let n=vy(s);if(n>=rm)return Fh(s);let i=Pf(s,n);if(i>=wf)if(n<Cf)n+=1,i=i/wf;else return n===Cf?Fh(s):fu;i<1&&n>sm&&(n-=1,i=Pf(s,n));const o=`${Dc(i).toFixed(t)} ${du[n-1]}`;return bo(o)}function Ci(s,e){return gn(s)?s.lte(Ce)?"0":s.lt(om)?s.floor().toNumber().toString():s.gte(gy)?Fh(s):cm(s,e,im):fu}function so(s,e){return e?`${s} ${e}`:s}function js(s,e,t){if(!gn(s))return so(fu,t);if(s.lte(Ce))return so(bo(by),t);if(s.lt(am))return so(bo(_y),t);if(s.lt(om)){const n=Dc(s.toNumber()).toFixed(Ao);return so(bo(n),t)}return so(cm(s,e,Ao),t)}const xy=900,My=.19,Ey=128,Sy=.52,yy=.76,Ty=.6;function Ay(s,e){const t=s>=xy;return e*(t?yy:Ty)}function wy(s){return Math.max(Ey,s*My)}function Ry(s,e){return{x:s/2,y:Ay(s,e)-wy(e)*Sy}}const Cy=5;function lm(s){return s.getTotalBaseRate().mul(pt(Cy))}function Py(s,e){return pt(s.currencies.credits.tapAmount).add(lm(e))}class Dy{constructor(e){I(this,"_unsubTap");this._unsubTap=e.bus.on(ee.INTENT_TAP_FORGE,()=>{const t=lm(e.generators);t.gt(Ce)&&e.credits.addOfflineEarnings(t)})}dispose(){this._unsubTap()}}const Ly="/stellar-forge-demo/assets/tier1-CGr_rWoD.svg",Ny="/stellar-forge-demo/assets/tier2-WDw8Df_T.svg",Iy="/stellar-forge-demo/assets/tier3-BgDwCqo5.svg",Uy="/stellar-forge-demo/assets/tier4-D0G28S5V.svg",Oy="/stellar-forge-demo/assets/tier5-Uf4foSHK.svg",Fy="/stellar-forge-demo/assets/tier6-ClC5JRkf.svg",ky="/stellar-forge-demo/assets/tier7-DZ_6xqdX.svg",By="/stellar-forge-demo/assets/tier8-UnOtcdr9.svg",Gy="/stellar-forge-demo/assets/tier9-wc-XhgwM.svg",zy=[Ly,Ny,Iy,Uy,Oy,Fy,ky,By,Gy],Hy=250,Vy=2200,Wy=650,Xy=["⬡","⬢","◈","◆","▲","●","◐","✦","❂"],qy=["x1","x10","xmax"],Sl=5,jy=5,Yy=48,Ka={1:{roman:"I",name:"GENESIS"},2:{roman:"II",name:"INDUSTRIAL"},3:{roman:"III",name:"COSMIC"}};function Ky(s){const e=Math.floor(s/1e3);if(e<90)return`${e} s`;const t=Math.floor(e/60);return t<90?`${t} min`:`${(t/60).toFixed(1)} h`}function Ee(s,e,t){const n=document.createElement(s);return n.className=e,t!==void 0&&(n.textContent=t),n}class $y{constructor(e){I(this,"_bus");I(this,"_credits");I(this,"_generators");I(this,"_config");I(this,"_ascension");I(this,"_root");I(this,"_creditsValue");I(this,"_creditsRate");I(this,"_tapLine");I(this,"_scopeCanvas");I(this,"_scopeCtx");I(this,"_scopeDpr",1);I(this,"_rateSamples",[]);I(this,"_modeButtons",new Map);I(this,"_cards",new Map);I(this,"_toast");I(this,"_tapHint");I(this,"_ascendButton");I(this,"_ascendDm");I(this,"_milestoneBadge");I(this,"_lastMilestoneBurst",-1);I(this,"_burstTiers",new Set);I(this,"_srRegion");I(this,"_eraBadge");I(this,"_highestEpoch",1);I(this,"_seenTiers",new Set);I(this,"_balance");I(this,"_ratePerSec");I(this,"_paintScheduled",!1);I(this,"_lastBuyTier");I(this,"_tapCount",0);I(this,"_lastPointerX",0);I(this,"_lastPointerY",0);I(this,"_lastPointerAt",0);I(this,"_unsubscribes",[]);I(this,"_timers",[]);I(this,"_onWindowPointerDown",e=>{this._lastPointerX=e.clientX,this._lastPointerY=e.clientY,this._lastPointerAt=Date.now()});this._bus=e.bus,this._credits=e.credits,this._generators=e.generators,this._config=e.config,this._ascension=e.ascension,this._balance=e.credits.getBalance(),this._ratePerSec=e.credits.getBalance()}mount(e){this._root=e,window.addEventListener("pointerdown",this._onWindowPointerDown,!0);const t=Ee("div","hud-sr");t.setAttribute("role","status"),t.setAttribute("aria-live","polite"),t.setAttribute("aria-atomic","true"),this._srRegion=t,e.append(this._buildFrame(),this._buildIdentity(),this._buildConsole(),this._buildDock(),this._buildTapHint(),this._buildAscendButton(),t),this._unsubscribes.push(this._bus.on(ee.CREDITS_UPDATED,n=>{this._balance=n.balance,this._ratePerSec=n.ratePerSec,this._schedulePaint()}),this._bus.on(ee.GENERATOR_PURCHASED,n=>{this._flashCard(n.tier),this._onGeneratorProgress(n.tier),this._paint()}),this._bus.on(ee.GENERATOR_RATE_CHANGED,n=>{this._floatRateDelta(n.tier,n.rateDelta),this._schedulePaint()}),this._bus.on(ee.BUY_MODE_CHANGED,()=>this._paint()),this._bus.on(ee.PURCHASE_REJECTED,n=>this._onRejected(n.reason)),this._bus.on(ee.INTENT_TAP_FORGE,()=>this._onForgeTapped()),this._bus.on(ee.MILESTONE_REACHED,n=>this._showMilestone(n))),this._initEpochState(),this._paint()}_initEpochState(){let e=1;for(const t of this._config.generators)this._generators.getOwned(t.tier)>0&&(this._seenTiers.add(t.tier),e=Math.max(e,t.epoch));this._highestEpoch=e,this._setEra(e)}_onGeneratorProgress(e){const t=this._config.generators.find(n=>n.tier===e);t!==void 0&&(this._seenTiers.has(e)||(this._seenTiers.add(e),this._showUnlock(t.name,t.epoch,t.tier)),t.epoch>this._highestEpoch&&(this._highestEpoch=t.epoch,this._setEra(t.epoch),this._showEraBanner(t.epoch)))}dispose(){window.removeEventListener("pointerdown",this._onWindowPointerDown,!0);for(const e of this._unsubscribes)e();this._unsubscribes.length=0;for(const e of this._timers)clearTimeout(e);this._timers.length=0,this._root!==void 0&&this._root.replaceChildren(),this._cards.clear(),this._modeButtons.clear(),this._scopeCanvas=void 0,this._scopeCtx=void 0,this._rateSamples.length=0,this._ascendButton=void 0,this._ascendDm=void 0,this._milestoneBadge=void 0,this._lastMilestoneBurst=-1,this._burstTiers.clear(),this._srRegion=void 0,this._eraBadge=void 0,this._highestEpoch=1,this._seenTiers.clear()}_buildFrame(){const e=Ee("div","hud-frame");e.setAttribute("aria-hidden","true");for(const t of["tl","tr","bl","br"])e.append(Ee("span",`hud-frame-corner ${t}`));return e}_buildIdentity(){const e=Ee("header","hud-identity"),t=Ee("div","hud-brand");t.append(Ee("span","hud-brand-mark","⬡"),Ee("span","hud-brand-name","STELLAR FORGE"));const n=Ee("div","hud-era epoch-1");return n.setAttribute("aria-live","polite"),n.append(Ee("span","hud-era-age","AGE I"),Ee("span","hud-era-name","GENESIS")),this._eraBadge=n,e.append(t,n),e}_buildConsole(){const e=Ee("section","hud-console");e.setAttribute("aria-label","Empire production readout"),this._creditsValue=Ee("div","hud-credits","0 Cr");const t=Ee("div","hud-telemetry");this._creditsRate=Ee("div","hud-rate","▸ 0.00 Cr/s");const n=document.createElement("canvas");return n.className="hud-scope",n.setAttribute("aria-hidden","true"),this._scopeDpr=Math.min(window.devicePixelRatio||1,2),n.width=Math.round(104*this._scopeDpr),n.height=Math.round(30*this._scopeDpr),this._scopeCanvas=n,this._scopeCtx=n.getContext("2d")??void 0,t.append(this._creditsRate,n),this._tapLine=Ee("div","hud-tap",""),e.append(Ee("span","hud-console-conduit"),this._creditsValue,t,this._tapLine),e}_buildDock(){const e=Ee("aside","hud-dock");e.setAttribute("aria-label","Generator roster");const t=Ee("div","hud-buymode");t.setAttribute("role","group"),t.setAttribute("aria-label","Buy quantity mode");const n=Ee("span","hud-buymode-label","BUY");t.append(n);for(const r of qy){const o=Ee("button","hud-buymode-btn",r==="xmax"?"×MAX":`×${r.slice(1)}`);o.type="button",o.addEventListener("click",()=>{this._bus.emit(ee.INTENT_SET_BUY_MODE,{mode:r,source:"pointer"})}),this._modeButtons.set(r,o),t.append(o)}const i=Ee("div","hud-rack");for(const r of this._config.generators)i.append(this._buildCard(r.tier,r.name,r.epoch));return e.append(t,i),e}_buildCard(e,t,n){const i=Ee("article",`hud-card epoch-${n}`);i.append(Ee("span","hud-card-shoulder"));const r=Ee("div","hud-card-socket"),o=zy[e-1];if(o!==void 0){const m=document.createElement("img");m.src=o,m.alt="",m.loading="lazy",m.className="hud-card-icon",r.append(m)}else r.textContent=Xy[e-1]??"⬡";const a=Ee("div","hud-card-head");a.append(Ee("div","hud-card-name",t),Ee("div","hud-card-tier",`T${e}`));const c=Ee("div","hud-card-stats"),l=Ee("div","hud-card-owned","×0"),h=Ee("div","hud-card-rate","—");c.append(l,h);const u=Ee("div","hud-card-rail"),d=[];for(let m=0;m<Sl;m+=1){const f=Ee("span","hud-card-seg");d.push(f),u.append(f)}const p=Ee("div","hud-card-milestone",""),g=Ee("button","hud-card-buy","BUY");g.type="button",g.addEventListener("click",()=>{this._lastBuyTier=e,this._bus.emit(ee.INTENT_BUY_GENERATOR,{tier:e,source:"pointer"})});const _=Ee("div","hud-card-hint","");return i.append(r,a,c,u,p,g,_),this._cards.set(e,{root:i,owned:l,rate:h,milestone:p,segments:d,buy:g,hint:_}),i}_buildTapHint(){const e=Ee("div","hud-tap-hint","TAP THE FORGE");return this._tapHint=e,e}_buildAscendButton(){const e=Ee("button","hud-ascend");e.type="button";const t=Ee("span","hud-ascend-dm","");return e.append(Ee("span","hud-ascend-label","ASCEND"),t,Ee("span","hud-ascend-hint","Collapse the empire into a singularity — restart faster, forever stronger")),e.addEventListener("click",()=>{this._bus.emit(ee.INTENT_CONFIRM_ASCENSION,{source:"pointer"})}),this._ascendButton=e,this._ascendDm=t,e}_showMilestone(e){var h;if(this._root===void 0)return;const t=e.type==="owned_count",n=this._milestoneLevel(e),i=t?this._generatorName(e.tier):e.name??"Rank";if(e.burstId!==this._lastMilestoneBurst||this._milestoneBadge===void 0){this._lastMilestoneBurst=e.burstId,this._burstTiers.clear(),(h=this._milestoneBadge)==null||h.remove();const u=Ee("div","hud-milestone");u.setAttribute("aria-hidden","true"),u.append(Ee("div","hud-milestone-eyebrow",""),Ee("div","hud-milestone-hero",""),Ee("div","hud-milestone-sub","")),this._milestoneBadge=u,this._root.append(u),u.offsetWidth,u.classList.add("is-in");const d=n===1?1700:2600;this._timers.push(setTimeout(()=>u.classList.add("is-out"),d)),this._timers.push(setTimeout(()=>{u.remove(),this._milestoneBadge===u&&(this._milestoneBadge=void 0)},d+450)),this._announce(t?e.burstSize>1?`${e.burstSize} milestones reached`:`${i} output doubled`:`Rank achieved: ${i}`)}t&&e.tier!==void 0&&this._burstTiers.add(e.tier);const o=this._milestoneBadge;if(o===void 0)return;o.classList.toggle("is-l2",n>=2),o.classList.toggle("is-peak",n>=3);const a=o.querySelector(".hud-milestone-eyebrow"),c=o.querySelector(".hud-milestone-hero"),l=o.querySelector(".hud-milestone-sub");a!==null&&c!==null&&l!==null&&(t?this._burstTiers.size>1?(a.textContent="MULTIPLE SYSTEMS",c.textContent="OUTPUT ×2",l.textContent=`${e.burstSize} MILESTONES THIS SURGE`):(a.textContent=i.toUpperCase(),c.textContent="OUTPUT ×2",l.textContent=e.burstSize>1?`×${e.burstSize} MILESTONES`:`${e.threshold} ONLINE`):(a.textContent="RANK ACHIEVED",c.textContent=i,l.textContent="")),t&&e.tier!==void 0&&n>=2&&this._pulseCardMilestone(e.tier)}_milestoneLevel(e){if(e.type!=="owned_count"||e.tier===void 0)return 2;const t=this._frontierTier();let n=1;return(e.tier===t||e.tier===t-1||e.threshold>=100)&&(n=2),e.ordinal===e.seriesLength&&(n=3),n}_frontierTier(){let e=1;for(const t of this._config.generators)this._generators.getOwned(t.tier)>0&&(e=Math.max(e,t.tier));return e}_pulseCardMilestone(e){const t=this._cards.get(e);t!==void 0&&(t.root.classList.remove("is-milestone"),t.root.offsetWidth,t.root.classList.add("is-milestone"),this._timers.push(setTimeout(()=>t.root.classList.remove("is-milestone"),720)))}_announce(e){this._srRegion!==void 0&&(this._srRegion.textContent=e)}_setEra(e){if(this._eraBadge===void 0)return;const t=Ka[e]??Ka[1];this._eraBadge.className=`hud-era epoch-${e}`;const n=this._eraBadge.querySelector(".hud-era-age"),i=this._eraBadge.querySelector(".hud-era-name");n!==null&&(n.textContent=`AGE ${t.roman}`),i!==null&&(i.textContent=t.name)}_showEraBanner(e){var i;if(this._root===void 0)return;const t=Ka[e]??Ka[1];(i=this._root.querySelector(".hud-era-banner"))==null||i.remove();const n=Ee("div",`hud-era-banner epoch-${e}`);n.append(Ee("div","hud-era-banner-eyebrow","A NEW ERA BEGINS"),Ee("div","hud-era-banner-title",`${t.name} AGE`),Ee("div","hud-era-banner-sub",`AGE ${t.roman} — your empire ascends to a new scale`)),this._root.append(n),n.offsetWidth,n.classList.add("is-in"),this._timers.push(setTimeout(()=>n.classList.add("is-out"),3200)),this._timers.push(setTimeout(()=>n.remove(),3900))}_showUnlock(e,t,n){var r;if(this._root===void 0)return;(r=this._root.querySelector(".hud-unlock"))==null||r.remove();const i=Ee("div",`hud-unlock epoch-${t}`);i.append(Ee("div","hud-unlock-eyebrow",`TIER ${n} · NEW GENERATOR ONLINE`),Ee("div","hud-unlock-title",e),Ee("div","hud-unlock-sub","A new pillar of your empire comes online")),this._root.append(i),i.offsetWidth,i.classList.add("is-in"),this._timers.push(setTimeout(()=>i.classList.add("is-out"),3e3)),this._timers.push(setTimeout(()=>i.remove(),3600))}_generatorName(e){var t;return e===void 0?"Generator":((t=this._config.generators.find(n=>n.tier===e))==null?void 0:t.name)??`Tier ${e}`}_schedulePaint(){this._paintScheduled||(this._paintScheduled=!0,this._timers.push(setTimeout(()=>{this._paintScheduled=!1,this._paint()},Hy)))}_paint(){this._creditsValue.textContent=`${Ci(this._balance)} Cr`,this._creditsRate.textContent=`▸ ${js(this._ratePerSec,void 0,"Cr/s")}`,this._tapLine.textContent=`⌁ ${js(this._tapValue(),void 0,"Cr")} per tap`,this._pushScopeSample();const e=this._credits.getBuyMode();for(const[t,n]of this._modeButtons){const i=t===e;n.classList.toggle("is-active",i),n.setAttribute("aria-pressed",String(i))}for(const t of this._config.generators)this._paintCard(t.tier,t.name,e);this._updateAscension()}_pushScopeSample(){const e=this._ratePerSec.toNumber();let t=0;Number.isFinite(e)?e>0&&(t=e):t=1e300;const n=t>0?Math.log10(t):0;this._rateSamples.push(n),this._rateSamples.length>Yy&&this._rateSamples.shift(),this._drawScope()}_drawScope(){const e=this._scopeCtx,t=this._scopeCanvas;if(e===void 0||t===void 0)return;const n=t.width,i=t.height;e.clearRect(0,0,n,i);const r=this._rateSamples;if(r.length<2)return;let o=1/0,a=-1/0;for(const h of r)h<o&&(o=h),h>a&&(a=h);const c=a-o||1,l=i*.16;e.beginPath();for(let h=0;h<r.length;h+=1){const u=h/(r.length-1)*n,d=i-l-((r[h]??o)-o)/c*(i-l*2);h===0?e.moveTo(u,d):e.lineTo(u,d)}e.strokeStyle="rgba(0, 201, 177, 0.92)",e.lineWidth=1.5*this._scopeDpr,e.lineJoin="round",e.shadowColor="rgba(0, 201, 177, 0.7)",e.shadowBlur=4*this._scopeDpr,e.stroke()}_updateAscension(){if(this._ascendButton===void 0||this._ascendDm===void 0)return;const e=this._ascension.canAscend();this._ascendButton.classList.toggle("is-visible",e),this._ascendButton.disabled=!e,e&&(this._ascendDm.textContent=`+${Ci(this._ascension.getEstimatedDM())} Dark Matter`)}_paintCard(e,t,n){const i=this._cards.get(e);if(i===void 0)return;const r=this._generators.isUnlocked(e);if(i.root.classList.toggle("is-locked",!r),!r){i.owned.textContent="—",i.rate.textContent="LOCKED",i.milestone.textContent="",i.buy.disabled=!0,i.buy.textContent="LOCKED",i.buy.className="hud-card-buy is-lockedbtn";const m=this._config.generators.find(f=>f.tier===e-1);i.hint.textContent=m!==void 0?`Requires ${m.name}`:"";for(const f of i.segments)f.className="hud-card-seg";return}const o=this._generators.getOwned(e),a=this._generators.getTierRate(e);i.owned.textContent=`×${o}`,i.rate.textContent=js(a,void 0,"Cr/s"),i.hint.textContent="";const c=this._config.upgrades.milestones.map(m=>m.ownedCount).sort((m,f)=>m-f),l=c.find(m=>m>o),h=[...c].reverse().find(m=>m<=o)??0;if(l!==void 0){i.milestone.textContent=`→${l} ×2`;const m=(o-h)/(l-h),f=Math.floor(m*Sl),v=this._frontierTier(),M=f===Sl-1&&(e===v||e===v-1);i.segments.forEach((b,w)=>{b.className=w<f?"hud-card-seg is-filled":M&&w===f?"hud-card-seg is-next":"hud-card-seg"})}else{i.milestone.textContent="MAX ×2";for(const m of i.segments)m.className="hud-card-seg is-filled"}let u;if(n==="x1"?u=1:n==="x10"?u=10:u=this._generators.getMaxAffordable(e,this._balance),u===0){i.buy.disabled=!1,i.buy.textContent="MAX ×0",i.buy.className="hud-card-buy is-unaffordable";return}const d=this._generators.getCost(e,u),p=this._balance.gte(d),g=n==="xmax"?`MAX ×${u} · ${Ci(d)}`:`${n==="x10"?"×10 · ":""}${Ci(d)}`;i.buy.disabled=!1,i.buy.textContent=g,i.buy.className=p?"hud-card-buy is-affordable":"hud-card-buy is-unaffordable";const _=i.root.querySelector(".hud-card-name");_!==null&&_.textContent!==t&&(_.textContent=t)}_onRejected(e){if(e==="insufficient_balance"&&this._lastBuyTier!==void 0){const t=this._cards.get(this._lastBuyTier);t!==void 0&&(t.buy.classList.remove("is-shaking"),t.buy.offsetWidth,t.buy.classList.add("is-shaking"));return}if(e==="qty_zero"){this._showToast("Nothing affordable at ×MAX yet — keep forging");return}this._showToast("Tier locked — own the previous generator first")}_flashCard(e){const t=this._cards.get(e);t!==void 0&&(t.root.classList.add("is-flashing"),this._timers.push(setTimeout(()=>t.root.classList.remove("is-flashing"),Wy)))}_showToast(e){var n;if(this._root===void 0)return;(n=this._toast)==null||n.remove();const t=Ee("div","hud-toast",e);this._toast=t,this._root.append(t),this._timers.push(setTimeout(()=>t.remove(),Vy))}showWelcomeBack(e){var r;if(this._root===void 0)return;(r=this._root.querySelector(".hud-welcome"))==null||r.remove();const t=Ee("div","hud-welcome");t.setAttribute("role","dialog"),t.setAttribute("aria-label","Offline earnings report");const n=Math.round(e.earningRate*100);t.append(Ee("div","hud-welcome-eyebrow","SYSTEMS REPORT"),Ee("h2","hud-welcome-title","WHILE YOU WERE AWAY"),Ee("div","hud-welcome-amount num",`+${js(e.credited,void 0,"Cr")}`),Ee("div","hud-welcome-sub",`${Ky(e.elapsedMs)} away · ${n}% offline rate · your empire kept forging`));const i=Ee("button","hud-welcome-cta","CONTINUE");i.type="button",i.addEventListener("click",()=>t.remove()),t.append(i),this._root.append(t),i.focus(),this._timers.push(setTimeout(()=>t.remove(),12e3))}_onForgeTapped(){if(this._tapCount+=1,this._tapCount>=jy&&this._tapHint!==void 0&&this._tapHint.classList.add("is-done"),this._root===void 0||this._prefersReducedMotion())return;const t=Date.now()-this._lastPointerAt<600?{x:this._lastPointerX,y:this._lastPointerY}:Ry(window.innerWidth,window.innerHeight),n=Ee("span","hud-float",`+${js(this._tapValue(),void 0,"Cr")}`),i=(Math.random()-.5)*30;n.style.left=`${t.x+i}px`,n.style.top=`${t.y-30}px`,this._root.append(n),this._timers.push(setTimeout(()=>n.remove(),950))}_tapValue(){return Py(this._config,this._generators)}_floatRateDelta(e,t){if(this._prefersReducedMotion())return;const n=this._cards.get(e);if(n===void 0||!t.gt(pt(0)))return;const i=Ee("span","hud-rowfloat",`+${js(t,void 0,"Cr/s")}`);n.root.append(i),this._timers.push(setTimeout(()=>i.remove(),1050))}_prefersReducedMotion(){return typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches}}const $a="◆",Jy=2400,Zy=700,Df={forge:{title:"FORGE",tag:"Raw production power",glyph:"◆"},continuum:{title:"CONTINUUM",tag:"Bend time & offline",glyph:"∞"},cortex:{title:"CORTEX",tag:"Automate the empire",glyph:"⚙"}},Lf={forge_t1:"Core Amplifier",forge_t2:"Drone Overclock",forge_capstone:"Singularity Engine",continuum_t1:"Temporal Reservoir",continuum_t2:"Chrono Capacitor",continuum_capstone:"Eternal Continuum",cortex_t1:"Neural Relay",cortex_t2:"Cognition Lattice",cortex_capstone:"Autonomous Cortex"},Nf=["","I","II","III","IV","V"];function Qy(s){const e=s.toNumber();return Number.isFinite(e)&&e<1e6?e.toFixed(2):Ci(s)}function Be(s,e,t){const n=document.createElement(s);return n.className=e,t!==void 0&&(n.textContent=t),n}class eT{constructor(e){I(this,"_bus");I(this,"_config");I(this,"_section");I(this,"_tree");I(this,"_dm");I(this,"_onPurchase");I(this,"_onRespec");I(this,"_root");I(this,"_launcher");I(this,"_launcherBalance");I(this,"_modal");I(this,"_balanceEl");I(this,"_investedEl");I(this,"_multiplierEl");I(this,"_respecBtn");I(this,"_toast");I(this,"_cells",new Map);I(this,"_open",!1);I(this,"_revealed",!1);I(this,"_unsubscribes",[]);I(this,"_timers",[]);I(this,"_onKeydown",e=>{if(!(!this._open||this._modal===void 0)){if(e.key==="Escape"){this.close();return}e.key==="Tab"&&this._trapTab(e)}});this._bus=e.bus,this._config=e.config,this._section=e.config.dmTree??{nodes:[],respec:{enabled:!1,cost:0,refundNodes:!1},capstonePermanenceActive:!1},this._tree=e.tree,this._dm=e.darkMatter,this._onPurchase=e.onPurchase,this._onRespec=e.onRespec}_trapTab(e){if(this._modal===void 0)return;const t=[...this._modal.querySelectorAll('button:not([disabled]), [tabindex]:not([tabindex="-1"])')];if(t.length===0)return;const n=t[0],i=t[t.length-1],r=document.activeElement,o=r instanceof Node&&this._modal.contains(r);e.shiftKey?(r===n||!o)&&(e.preventDefault(),i.focus()):(r===i||!o)&&(e.preventDefault(),n.focus())}mount(e){this._root=e,e.append(this._buildLauncher()),this._unsubscribes.push(this._bus.on(ee.DARK_MATTER_UPDATED,()=>{this._syncReveal(),this._paintLauncher(),this._open&&this._repaint()}),this._bus.on(ee.DM_UPGRADE_PURCHASED,()=>{this._open&&this._repaint()}),this._bus.on(ee.DM_TREE_CAPSTONE_SELECTED,()=>{this._open&&this._repaint()})),this._syncReveal(),this._paintLauncher()}dispose(){var e,t;for(const n of this._unsubscribes)n();this._unsubscribes.length=0;for(const n of this._timers)clearTimeout(n);this._timers.length=0,document.removeEventListener("keydown",this._onKeydown),(e=this._modal)==null||e.remove(),this._launcher.remove(),(t=this._toast)==null||t.remove(),this._cells.clear(),this._modal=void 0,this._open=!1}_buildLauncher(){const e=Be("button","dm-launcher");return e.type="button",e.setAttribute("aria-haspopup","dialog"),e.append(Be("span","dm-launcher-glyph",$a),Be("span","dm-launcher-label","DARK MATTER")),this._launcherBalance=Be("span","dm-launcher-balance",""),e.append(this._launcherBalance),e.addEventListener("click",()=>this.openPanel()),this._launcher=e,e}_syncReveal(){if(this._revealed)return;const e=pt(0);(this._dm.getBalance().gt(e)||this._dm.getTotalSpent().gt(e))&&(this._revealed=!0,this._launcher.classList.add("is-visible"))}_paintLauncher(){this._launcherBalance.textContent=Ci(this._dm.getBalance())}openPanel(){if(this._root===void 0||this._open)return;this._modal===void 0&&(this._modal=this._buildModal()),this._root.append(this._modal),this._open=!0,this._modal.offsetWidth,this._modal.classList.add("is-open"),document.addEventListener("keydown",this._onKeydown),this._repaint();const e=this._modal.querySelector(".dm-close");e==null||e.focus()}close(){!this._open||this._modal===void 0||(this._open=!1,this._modal.classList.remove("is-open"),document.removeEventListener("keydown",this._onKeydown),this._modal.remove(),this._launcher.focus())}_buildModal(){const e=Be("div","dm-scrim");e.addEventListener("click",n=>{n.target===e&&this.close()});const t=Be("section","dm-modal");return t.setAttribute("role","dialog"),t.setAttribute("aria-modal","true"),t.setAttribute("aria-label","Dark Matter upgrade tree"),t.append(this._buildHeader(),this._buildBranches(),this._buildFooter()),e.append(t),e}_buildHeader(){const e=Be("header","dm-header"),t=Be("div","dm-titles");t.append(Be("div","dm-eyebrow","META-PROGRESSION"),Be("h2","dm-title","DARK MATTER"),Be("p","dm-subtitle","Permanent choices, mapped across the void. Spend to grow forever stronger."));const n=Be("div","dm-stats");this._balanceEl=Be("span","dm-stat-value",""),this._investedEl=Be("span","dm-stat-value",""),this._multiplierEl=Be("span","dm-stat-value",""),n.append(this._buildStat(`${$a} Available`,this._balanceEl),this._buildStat("Invested",this._investedEl),this._buildStat("Tree production",this._multiplierEl));const i=Be("button","dm-close","✕");return i.type="button",i.setAttribute("aria-label","Close Dark Matter tree"),i.addEventListener("click",()=>this.close()),e.append(t,n,i),e}_buildStat(e,t){const n=Be("div","dm-stat");return n.append(Be("span","dm-stat-label",e),t),n}_buildBranches(){const e=Be("div","dm-branches"),t=[],n=new Map;for(const i of this._section.nodes)n.has(i.branch)||(n.set(i.branch,[]),t.push(i.branch)),n.get(i.branch).push(i);for(const i of t){const r=[...n.get(i)].sort((o,a)=>o.tier-a.tier);e.append(this._buildLane(i,r))}return e}_buildLane(e,t){const n=Df[e]??{title:e.toUpperCase(),tag:"Upgrade path",glyph:"✦"},i=Be("div",`dm-lane dm-branch-${e}`),r=Be("div","dm-lane-head");r.append(Be("span","dm-lane-glyph",n.glyph),(()=>{const a=Be("div","dm-lane-titles");return a.append(Be("div","dm-lane-title",n.title),Be("div","dm-lane-tag",n.tag)),a})());const o=Be("div","dm-chain");return t.forEach((a,c)=>{c>0&&o.append(Be("div","dm-connector")),o.append(this._buildNode(a))}),i.append(r,o),i}_buildNode(e){const t=Be("article",`dm-node${e.isCapstone?" is-capstone":""}`),n=Be("div","dm-node-badge",e.isCapstone?"✦":Nf[e.tier]??String(e.tier)),i=Be("div","dm-node-body"),r=Be("div","dm-node-title",Lf[e.id]??`${e.branch} ${Nf[e.tier]??e.tier}`),o=Be("div","dm-node-effect",this._effectLabel(e)),a=Be("div","dm-node-levelrow"),c=Be("span","dm-node-level",""),l=Be("span","dm-node-pips"),h=[];for(let p=0;p<e.maxLevel;p+=1){const g=Be("span","dm-pip");h.push(g),l.append(g)}a.append(c,l),i.append(r,o,a),e.isCapstone&&i.append(Be("div","dm-node-capnote","Capstone — one branch only"));const u=Be("button","dm-node-action");u.type="button",u.addEventListener("click",()=>this._purchase(e.id));const d=Be("div","dm-node-status","");return t.append(n,i,u,d),this._cells.set(e.id,{node:e,root:t,level:c,pips:h,action:u,status:d}),t}_buildFooter(){const e=Be("footer","dm-footer");if(this._section.respec.enabled){const n=this._section.respec.cost,i=n>0?`${$a} ${n}`:"free",r=Be("button","dm-respec",`RESET CAPSTONE CHOICE · ${i}`);r.type="button",r.addEventListener("click",()=>this._respec()),this._respecBtn=r,e.append(r)}return e.append(Be("div","dm-footer-note","Effects apply permanently across every future Ascension — your production rate updates instantly.")),e}_repaint(){if(this._modal===void 0)return;this._balanceEl!==void 0&&(this._balanceEl.textContent=`${Ci(this._dm.getBalance())}`),this._investedEl!==void 0&&(this._investedEl.textContent=`${Ci(this._dm.getTotalSpent())}`),this._multiplierEl!==void 0&&(this._multiplierEl.textContent=`×${Qy(this._tree.getExtraGlobalMultiplier())}`);const e=this._tree.getCommittedCapstone();for(const t of this._cells.values())this._paintNode(t,e);this._respecBtn!==void 0&&(this._respecBtn.disabled=e===null,this._respecBtn.classList.toggle("is-armed",e!==null))}_paintNode(e,t){var m;const{node:n,root:i,level:r,pips:o,action:a,status:c}=e,l=this._tree.getNodeLevel(n.id),h=n.maxLevel,u=l>=h,d=n.isCapstone&&t!==null&&t!==n.branch,p=n.prereqs.some(f=>this._tree.getNodeLevel(f)<1),g=this._tree.canPurchase(n.id);if(r.textContent=h>1?`Lv ${l}/${h}`:l>=1?"Owned":"Locked in on purchase",o.forEach((f,v)=>{f.className=v<l?"dm-pip is-filled":"dm-pip"}),i.classList.toggle("is-maxed",u),i.classList.toggle("is-locked",(p||d)&&!u),u){n.isCapstone?(a.textContent="✦ COMMITTED",a.className="dm-node-action is-committed",c.textContent="This branch’s capstone is active"):(a.textContent="✓ MAXED",a.className="dm-node-action is-maxed",c.textContent="Fully upgraded"),a.disabled=!0;return}if(d){const f=((m=Df[t??""])==null?void 0:m.title)??(t??"").toUpperCase();a.textContent="🔒 LOCKED",a.className="dm-node-action is-rivallocked",a.disabled=!0,c.textContent=`${f} capstone chosen`;return}if(p){const f=Lf[n.prereqs[0]??""]??"the previous node";a.textContent="🔒 LOCKED",a.className="dm-node-action is-prereqlocked",a.disabled=!0,c.textContent=`Unlock ${f} first`;return}const _=this._tree.getNodeCost(n.id);a.textContent=`${$a} ${Ci(_)}`,a.className=g?"dm-node-action is-affordable":"dm-node-action is-unaffordable",a.disabled=!1,c.textContent=n.isCapstone?"Choosing this locks the other capstones":""}_purchase(e){const t=this._onPurchase(e);if(t.ok){this._pulse(e),this._repaint();return}this._showToast(tT[t.reason]),t.reason==="insufficient_dm"&&this._shake(e)}_respec(){const e=this._onRespec();this._showToast(e.ok?"Capstone choice reset — pick a new path":nT[e.reason]),e.ok&&this._repaint()}_pulse(e){const t=this._cells.get(e);t!==void 0&&(t.root.classList.remove("is-pulsing"),t.root.offsetWidth,t.root.classList.add("is-pulsing"),this._defer(()=>t.root.classList.remove("is-pulsing"),Zy))}_shake(e){const t=this._cells.get(e);t!==void 0&&(t.action.classList.remove("is-denied"),t.action.offsetWidth,t.action.classList.add("is-denied"),this._defer(()=>t.action.classList.remove("is-denied"),400))}_showToast(e){var n,i;if(this._modal===void 0)return;(n=this._toast)==null||n.remove();const t=Be("div","dm-toast",e);this._toast=t,(i=this._modal.querySelector(".dm-modal"))==null||i.append(t),this._defer(()=>t.remove(),Jy)}_defer(e,t){const n=setTimeout(()=>{const i=this._timers.indexOf(n);i!==-1&&this._timers.splice(i,1),e()},t);this._timers.push(n)}_effectLabel(e){const t=e.effectParams,n=i=>`${Math.round((i??0)*100)}%`;switch(e.effectType){case"globalMultiplier":return`+${n(t.perLevelBonus)} to ALL production, per level`;case"tierBoost":{const i=this._config.generators.find(r=>r.tier===t.targetTier);return`+${n(t.perLevelBonus)} ${(i==null?void 0:i.name)??`Tier ${t.targetTier}`} output, per level`}case"offlineExtension":return`+${t.capHours??0}h offline cap · +${n(t.rateBonus)} offline rate, per level`;case"automationUnlock":return t.efficiencyBonus!==void 0?`Full automation · +${n(t.efficiencyBonus)} efficiency`:"Automates a production stage — it runs itself";default:return"Permanent upgrade"}}}const tT={insufficient_dm:"Not enough Dark Matter — Ascend to mint more",locked_prereq:"Unlock the previous node in this branch first",rival_capstone:"Another branch’s capstone is already committed",maxed:"Already fully upgraded",unknown_node:"That upgrade is unavailable"},nT={respec_disabled:"Respec is not available",no_capstone:"No capstone committed yet — nothing to reset",insufficient_dm:"Not enough Dark Matter to respec"};class iT{constructor(e){I(this,"_clock");I(this,"_save");I(this,"_now");I(this,"_doc");I(this,"_hiddenAt",null);I(this,"_started",!1);I(this,"_onVisibilityChange",()=>{if(this._doc.visibilityState==="hidden"){this._hiddenAt=this._now(),this._clock.pause(),this._save.resetLastSeen(this._hiddenAt);return}if(this._clock.resume(),this._hiddenAt!==null){const e=this._now()-this._hiddenAt;this._hiddenAt=null,this._clock.reportGap(e)}});this._clock=e.clock,this._save=e.save,this._now=e.now,this._doc=e.doc}start(){this._started||(this._started=!0,this._doc.addEventListener("visibilitychange",this._onVisibilityChange))}dispose(){this._doc.removeEventListener("visibilitychange",this._onVisibilityChange),this._started=!1,this._hiddenAt=null}}const sT=typeof crypto<"u"&&"randomUUID"in crypto?crypto.randomUUID():`${Date.now()}`;function rT(){const s=()=>Date.now(),e=$g({configJson:Eu,storage:window.localStorage,now:s,tabId:sT,autosaveEnv:zg(window,document)}),{bus:t,clock:n,credits:i,generators:r,ascension:o,dmTree:a,darkMatter:c,save:l}=e,h=new iT({clock:n,save:l,now:s,doc:document});h.start(),l.startAutosave();const u=Ff(Eu),d=new e_(t),p=document.getElementById("game-root");if(p===null)throw new Error("main: #game-root container missing from index.html");const g=new py({bus:t,clock:n,input:d,world:{getOwned:P=>r.getOwned(P),generators:u.generators}});g.mount(p);const _=document.getElementById("hud-overlay");if(_===null)throw new Error("main: #hud-overlay container missing from index.html");const m=new $y({bus:t,credits:i,generators:r,config:u,ascension:o});m.mount(_);const f=new eT({bus:t,config:u,tree:a,darkMatter:c,onPurchase:P=>a.purchase(P),onRespec:()=>a.respecCapstone()});f.mount(_);const v=P=>{P.reason==="brief"||P.diagnostic!==void 0||m.showWelcomeBack({credited:P.baseLump,elapsedMs:P.elapsedSeconds*1e3,earningRate:u.offline.earningRate})},M=t.on(ee.OFFLINE_EARNINGS_APPLIED,v);e.offlineReport!==void 0&&v(e.offlineReport);const b=new Dy({bus:t,credits:i,generators:r}),w=t.on(ee.INTENT_CONFIRM_ASCENSION,()=>{o.canAscend()&&o.executeAscension()});let A=0;const C=t.on(ee.CREDITS_UPDATED,()=>{const P=s();P-A>=1e3&&(A=P,l.resetLastSeen(P))});return{dispose(){h.dispose(),l.stopAutosave(),C(),w(),M(),b.dispose(),f.dispose(),m.dispose(),d.clearHitAreas(),g.dispose(),e.dispose()}}}rT();
