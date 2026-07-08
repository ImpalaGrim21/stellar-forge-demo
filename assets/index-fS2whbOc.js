var Bp=Object.defineProperty;var eu=s=>{throw TypeError(s)};var kp=(s,e,t)=>e in s?Bp(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var B=(s,e,t)=>kp(s,typeof e!="symbol"?e+"":e,t),vc=(s,e,t)=>e.has(s)||eu("Cannot "+t);var v=(s,e,t)=>(vc(s,e,"read from private field"),t?t.call(s):e.get(s)),Y=(s,e,t)=>e.has(s)?eu("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(s):e.set(s,t),X=(s,e,t,n)=>(vc(s,e,"write to private field"),n?n.call(s,t):e.set(s,t),t),re=(s,e,t)=>(vc(s,e,"access private method"),t);var sa=(s,e,t,n)=>({set _(i){X(s,e,i,t)},get _(){return v(s,e,n)}});(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const tu=`{
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
`,jr=1;class xh extends Error{constructor(e){super(e),this.name="ConfigParseError",Object.setPrototypeOf(this,xh.prototype)}}class st extends Error{constructor(e){super(e),this.name="ConfigValidationError",Object.setPrototypeOf(this,st.prototype)}}class Mh extends Error{constructor(e){super(e),this.name="SchemaVersionError",Object.setPrototypeOf(this,Mh.prototype)}}function of(s,e=new WeakSet){if(s===null||typeof s!="object")return s;const t=s;if(e.has(t))return s;e.add(t);for(const n of Object.keys(t))of(t[n],e);return Object.freeze(s)}const Hp={meta:{schemaVersion:jr,lastTuned:"2026-06-25",author:"economy-designer"},generators:[{tier:1,slug:"mining-drone",name:"Mining Drone",epoch:1,baseCost:10,costMultiplier:1.1,baseOutput:.1,enabled:!0},{tier:2,slug:"ore-refinery",name:"Ore Refinery",epoch:1,baseCost:100,costMultiplier:1.1,baseOutput:.5,enabled:!0},{tier:3,slug:"component-factory",name:"Component Factory",epoch:1,baseCost:1e3,costMultiplier:1.11,baseOutput:4,enabled:!0},{tier:4,slug:"fusion-reactor",name:"Fusion Reactor",epoch:2,baseCost:1e4,costMultiplier:1.12,baseOutput:20,enabled:!0},{tier:5,slug:"orbital-shipyard",name:"Orbital Shipyard",epoch:2,baseCost:1e5,costMultiplier:1.13,baseOutput:100,enabled:!0},{tier:6,slug:"trade-fleet",name:"Trade Fleet",epoch:3,baseCost:1e6,costMultiplier:1.14,baseOutput:500,enabled:!1},{tier:7,slug:"planetary-colony",name:"Planetary Colony",epoch:3,baseCost:1e7,costMultiplier:1.15,baseOutput:2500,enabled:!1},{tier:8,slug:"star-lifter",name:"Star Lifter",epoch:3,baseCost:1e8,costMultiplier:1.16,baseOutput:12500,enabled:!1},{tier:9,slug:"dyson-swarm",name:"Dyson Swarm",epoch:3,baseCost:1e9,costMultiplier:1.17,baseOutput:62500,enabled:!1}],upgrades:{milestones:[{ownedCount:10,productionMultiplier:2},{ownedCount:25,productionMultiplier:2},{ownedCount:50,productionMultiplier:2},{ownedCount:100,productionMultiplier:2},{ownedCount:200,productionMultiplier:2}],managers:[{unlockCost:25,prerequisiteOwnedCount:25},{unlockCost:250,prerequisiteOwnedCount:25},{unlockCost:2500,prerequisiteOwnedCount:25},{unlockCost:25e3,prerequisiteOwnedCount:25},{unlockCost:25e4,prerequisiteOwnedCount:25}],automationReserveFraction:1,linearBoosts:[]},milestones:{creditsScale:[{threshold:"1e7",name:"Asteroid Baron"},{threshold:"1e8",name:"Orbital Magnate"},{threshold:"1e9",name:"Planetary Mogul"},{threshold:"1e10",name:"System Tycoon"},{threshold:"1e11",name:"Sector Sovereign"},{threshold:"1e12",name:"Stellar Overlord"},{threshold:"1e13",name:"Cluster Potentate"},{threshold:"1e15",name:"Nebular Dominus"},{threshold:"1e18",name:"Galactic Emperor"},{threshold:"1e21",name:"Intergalactic Lord"},{threshold:"1e24",name:"Cosmic Forgemaster"}]},ascension:{constant:500,creditsDivisor:1e10,exponent:.5,dmMultiplierPerPoint:.02,upgrades:[]},offline:{earningRate:.5,baseCapHours:4,maxCapHours:24,boostMultiplier:2},currencies:{credits:{startingBalance:0,tapAmount:1,tickRateMs:100}}};function Fa(s){return typeof s=="object"&&s!==null&&!Array.isArray(s)}function al(s,e){const t={};for(const n of Object.keys(s)){const i=s[n];if(!(n in e)){t[n]=Fa(i)?al(i,{}):structuredClone(i);continue}const r=e[n];Fa(i)&&Fa(r)?t[n]=al(i,r):t[n]=r}for(const n of Object.keys(e))n in t||(t[n]=e[n]);return t}function zp(s,e){const t=al(Hp,s);return Fa(t.meta)&&(t.meta.schemaVersion=jr),t}function Gp(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var xc,nu;function Vp(){return nu||(nu=1,xc=function(s,e,t){if(s==null||e==null)return s;var n=String(s),i=typeof e=="number"?e:parseInt(e,10);if(isNaN(i)||!isFinite(i))return n;var r=n.length;if(r>=i)return n;var o=t==null?"":String(t);o===""&&(o=" ");for(var a=i-r;o.length<a;)o+=o;var c=o.length>a?o.substr(0,a):o;return n+c}),xc}var Wp=Vp();const Mc=Gp(Wp);var Xn=9e15,ra=(function(){for(var s=[],e=-323;e<=308;e++)s.push(+("1e"+e));return function(t){return s[t+323]}})(),ne=function(s){return s instanceof Ki?s:new Ki(s)},on=function(s,e){return new Ki().fromMantissaExponent(s,e)},hs=function(s,e){return new Ki().fromMantissaExponent_noNormalize(s,e)};function Xp(s,e,t,n){var i=e.mul(t.pow(n));return Ki.floor(s.div(i).mul(t.sub(1)).add(1).log10()/t.log10())}function qp(s,e,t,n){return e.mul(t.pow(n)).mul(Ki.sub(1,t.pow(s))).div(Ki.sub(1,t))}var Ki=(function(){function s(e){this.mantissa=NaN,this.exponent=NaN,e===void 0?(this.m=0,this.e=0):e instanceof s?this.fromDecimal(e):typeof e=="number"?this.fromNumber(e):this.fromString(e)}return Object.defineProperty(s.prototype,"m",{get:function(){return this.mantissa},set:function(e){this.mantissa=e},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"e",{get:function(){return this.exponent},set:function(e){this.exponent=e},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"s",{get:function(){return this.sign()},set:function(e){if(e===0)return this.e=0,void(this.m=0);this.sgn()!==e&&(this.m=-this.m)},enumerable:!1,configurable:!0}),s.fromMantissaExponent=function(e,t){return new s().fromMantissaExponent(e,t)},s.fromMantissaExponent_noNormalize=function(e,t){return new s().fromMantissaExponent_noNormalize(e,t)},s.fromDecimal=function(e){return new s().fromDecimal(e)},s.fromNumber=function(e){return new s().fromNumber(e)},s.fromString=function(e){return new s().fromString(e)},s.fromValue=function(e){return new s().fromValue(e)},s.fromValue_noAlloc=function(e){return e instanceof s?e:new s(e)},s.abs=function(e){return ne(e).abs()},s.neg=function(e){return ne(e).neg()},s.negate=function(e){return ne(e).neg()},s.negated=function(e){return ne(e).neg()},s.sign=function(e){return ne(e).sign()},s.sgn=function(e){return ne(e).sign()},s.round=function(e){return ne(e).round()},s.floor=function(e){return ne(e).floor()},s.ceil=function(e){return ne(e).ceil()},s.trunc=function(e){return ne(e).trunc()},s.add=function(e,t){return ne(e).add(t)},s.plus=function(e,t){return ne(e).add(t)},s.sub=function(e,t){return ne(e).sub(t)},s.subtract=function(e,t){return ne(e).sub(t)},s.minus=function(e,t){return ne(e).sub(t)},s.mul=function(e,t){return ne(e).mul(t)},s.multiply=function(e,t){return ne(e).mul(t)},s.times=function(e,t){return ne(e).mul(t)},s.div=function(e,t){return ne(e).div(t)},s.divide=function(e,t){return ne(e).div(t)},s.recip=function(e){return ne(e).recip()},s.reciprocal=function(e){return ne(e).recip()},s.reciprocate=function(e){return ne(e).reciprocate()},s.cmp=function(e,t){return ne(e).cmp(t)},s.compare=function(e,t){return ne(e).cmp(t)},s.eq=function(e,t){return ne(e).eq(t)},s.equals=function(e,t){return ne(e).eq(t)},s.neq=function(e,t){return ne(e).neq(t)},s.notEquals=function(e,t){return ne(e).notEquals(t)},s.lt=function(e,t){return ne(e).lt(t)},s.lte=function(e,t){return ne(e).lte(t)},s.gt=function(e,t){return ne(e).gt(t)},s.gte=function(e,t){return ne(e).gte(t)},s.max=function(e,t){return ne(e).max(t)},s.min=function(e,t){return ne(e).min(t)},s.clamp=function(e,t,n){return ne(e).clamp(t,n)},s.clampMin=function(e,t){return ne(e).clampMin(t)},s.clampMax=function(e,t){return ne(e).clampMax(t)},s.cmp_tolerance=function(e,t,n){return ne(e).cmp_tolerance(t,n)},s.compare_tolerance=function(e,t,n){return ne(e).cmp_tolerance(t,n)},s.eq_tolerance=function(e,t,n){return ne(e).eq_tolerance(t,n)},s.equals_tolerance=function(e,t,n){return ne(e).eq_tolerance(t,n)},s.neq_tolerance=function(e,t,n){return ne(e).neq_tolerance(t,n)},s.notEquals_tolerance=function(e,t,n){return ne(e).notEquals_tolerance(t,n)},s.lt_tolerance=function(e,t,n){return ne(e).lt_tolerance(t,n)},s.lte_tolerance=function(e,t,n){return ne(e).lte_tolerance(t,n)},s.gt_tolerance=function(e,t,n){return ne(e).gt_tolerance(t,n)},s.gte_tolerance=function(e,t,n){return ne(e).gte_tolerance(t,n)},s.log10=function(e){return ne(e).log10()},s.absLog10=function(e){return ne(e).absLog10()},s.pLog10=function(e){return ne(e).pLog10()},s.log=function(e,t){return ne(e).log(t)},s.log2=function(e){return ne(e).log2()},s.ln=function(e){return ne(e).ln()},s.logarithm=function(e,t){return ne(e).logarithm(t)},s.pow10=function(e){return Number.isInteger(e)?hs(1,e):on(Math.pow(10,e%1),Math.trunc(e))},s.pow=function(e,t){return typeof e=="number"&&e===10&&typeof t=="number"&&Number.isInteger(t)?hs(1,t):ne(e).pow(t)},s.exp=function(e){return ne(e).exp()},s.sqr=function(e){return ne(e).sqr()},s.sqrt=function(e){return ne(e).sqrt()},s.cube=function(e){return ne(e).cube()},s.cbrt=function(e){return ne(e).cbrt()},s.dp=function(e){return ne(e).dp()},s.decimalPlaces=function(e){return ne(e).dp()},s.affordGeometricSeries=function(e,t,n,i){return Xp(ne(e),ne(t),ne(n),i)},s.sumGeometricSeries=function(e,t,n,i){return qp(e,ne(t),ne(n),i)},s.affordArithmeticSeries=function(e,t,n,i){return(function(r,o,a,c){var l=o.add(c.mul(a)).sub(a.div(2)),h=l.pow(2);return l.neg().add(h.add(a.mul(r).mul(2)).sqrt()).div(a).floor()})(ne(e),ne(t),ne(n),ne(i))},s.sumArithmeticSeries=function(e,t,n,i){return(function(r,o,a,c){var l=o.add(c.mul(a));return r.div(2).mul(l.mul(2).plus(r.sub(1).mul(a)))})(ne(e),ne(t),ne(n),ne(i))},s.efficiencyOfPurchase=function(e,t,n){return(function(i,r,o){return i.div(r).add(i.div(o))})(ne(e),ne(t),ne(n))},s.randomDecimalForTesting=function(e){if(20*Math.random()<1)return hs(0,0);var t=10*Math.random();10*Math.random()<1&&(t=Math.round(t)),t*=Math.sign(2*Math.random()-1);var n=Math.floor(Math.random()*e*2)-e;return on(t,n)},s.prototype.normalize=function(){if(this.m>=1&&this.m<10)return this;if(this.m===0)return this.m=0,this.e=0,this;var e=Math.floor(Math.log10(Math.abs(this.m)));return this.m=e===-324?10*this.m/1e-323:this.m/ra(e),this.e+=e,this},s.prototype.fromMantissaExponent=function(e,t){return isFinite(e)&&isFinite(t)?(this.m=e,this.e=t,this.normalize(),this):(e=Number.NaN,t=Number.NaN,this)},s.prototype.fromMantissaExponent_noNormalize=function(e,t){return this.m=e,this.e=t,this},s.prototype.fromDecimal=function(e){return this.m=e.m,this.e=e.e,this},s.prototype.fromNumber=function(e){return isNaN(e)?(this.m=Number.NaN,this.e=Number.NaN):e===Number.POSITIVE_INFINITY?(this.m=1,this.e=Xn):e===Number.NEGATIVE_INFINITY?(this.m=-1,this.e=Xn):e===0?(this.m=0,this.e=0):(this.e=Math.floor(Math.log10(Math.abs(e))),this.m=this.e===-324?10*e/1e-323:e/ra(this.e),this.normalize()),this},s.prototype.fromString=function(e){if(e.indexOf("e")!==-1){var t=e.split("e");this.m=parseFloat(t[0]),this.e=parseFloat(t[1]),this.normalize()}else if(e==="NaN")this.m=Number.NaN,this.e=Number.NaN;else if(this.fromNumber(parseFloat(e)),isNaN(this.m))throw Error("[DecimalError] Invalid argument: "+e);return this},s.prototype.fromValue=function(e){return e instanceof s?this.fromDecimal(e):typeof e=="number"?this.fromNumber(e):typeof e=="string"?this.fromString(e):(this.m=0,this.e=0,this)},s.prototype.toNumber=function(){if(!isFinite(this.e))return Number.NaN;if(this.e>308)return this.m>0?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY;if(this.e<-324)return 0;if(this.e===-324)return this.m>0?5e-324:-5e-324;var e=this.m*ra(this.e);if(!isFinite(e)||this.e<0)return e;var t=Math.round(e);return Math.abs(t-e)<1e-10?t:e},s.prototype.mantissaWithDecimalPlaces=function(e){if(isNaN(this.m)||isNaN(this.e))return Number.NaN;if(this.m===0)return 0;var t=e+1,n=Math.ceil(Math.log10(Math.abs(this.m))),i=Math.round(this.m*Math.pow(10,t-n))*Math.pow(10,n-t);return parseFloat(i.toFixed(Math.max(t-n,0)))},s.prototype.toString=function(){return isNaN(this.m)||isNaN(this.e)?"NaN":this.e>=Xn?this.m>0?"Infinity":"-Infinity":this.e<=-Xn||this.m===0?"0":this.e<21&&this.e>-7?this.toNumber().toString():this.m+"e"+(this.e>=0?"+":"")+this.e},s.prototype.toExponential=function(e){if(isNaN(this.m)||isNaN(this.e))return"NaN";if(this.e>=Xn)return this.m>0?"Infinity":"-Infinity";if(this.e<=-Xn||this.m===0)return"0"+(e>0?Mc(".",e+1,"0"):"")+"e+0";if(this.e>-324&&this.e<308)return this.toNumber().toExponential(e);isFinite(e)||(e=17);var t=e+1,n=Math.max(1,Math.ceil(Math.log10(Math.abs(this.m))));return(Math.round(this.m*Math.pow(10,t-n))*Math.pow(10,n-t)).toFixed(Math.max(t-n,0))+"e"+(this.e>=0?"+":"")+this.e},s.prototype.toFixed=function(e){return isNaN(this.m)||isNaN(this.e)?"NaN":this.e>=Xn?this.m>0?"Infinity":"-Infinity":this.e<=-Xn||this.m===0?"0"+(e>0?Mc(".",e+1,"0"):""):this.e>=17?this.m.toString().replace(".","").padEnd(this.e+1,"0")+(e>0?Mc(".",e+1,"0"):""):this.toNumber().toFixed(e)},s.prototype.toPrecision=function(e){return this.e<=-7?this.toExponential(e-1):e>this.e?this.toFixed(e-this.e-1):this.toExponential(e-1)},s.prototype.valueOf=function(){return this.toString()},s.prototype.toJSON=function(){return this.toString()},s.prototype.toStringWithDecimalPlaces=function(e){return this.toExponential(e)},s.prototype.abs=function(){return hs(Math.abs(this.m),this.e)},s.prototype.neg=function(){return hs(-this.m,this.e)},s.prototype.negate=function(){return this.neg()},s.prototype.negated=function(){return this.neg()},s.prototype.sign=function(){return Math.sign(this.m)},s.prototype.sgn=function(){return this.sign()},s.prototype.round=function(){return this.e<-1?new s(0):this.e<17?new s(Math.round(this.toNumber())):this},s.prototype.floor=function(){return this.e<-1?Math.sign(this.m)>=0?new s(0):new s(-1):this.e<17?new s(Math.floor(this.toNumber())):this},s.prototype.ceil=function(){return this.e<-1?Math.sign(this.m)>0?new s(1):new s(0):this.e<17?new s(Math.ceil(this.toNumber())):this},s.prototype.trunc=function(){return this.e<0?new s(0):this.e<17?new s(Math.trunc(this.toNumber())):this},s.prototype.add=function(e){var t,n,i=ne(e);if(this.m===0)return i;if(i.m===0)return this;if(this.e>=i.e?(t=this,n=i):(t=i,n=this),t.e-n.e>17)return t;var r=Math.round(1e14*t.m+1e14*n.m*ra(n.e-t.e));return on(r,t.e-14)},s.prototype.plus=function(e){return this.add(e)},s.prototype.sub=function(e){return this.add(ne(e).neg())},s.prototype.subtract=function(e){return this.sub(e)},s.prototype.minus=function(e){return this.sub(e)},s.prototype.mul=function(e){if(typeof e=="number")return e<1e307&&e>-1e307?on(this.m*e,this.e):on(1e-307*this.m*e,this.e+307);var t=typeof e=="string"?new s(e):e;return on(this.m*t.m,this.e+t.e)},s.prototype.multiply=function(e){return this.mul(e)},s.prototype.times=function(e){return this.mul(e)},s.prototype.div=function(e){return this.mul(ne(e).recip())},s.prototype.divide=function(e){return this.div(e)},s.prototype.divideBy=function(e){return this.div(e)},s.prototype.dividedBy=function(e){return this.div(e)},s.prototype.recip=function(){return on(1/this.m,-this.e)},s.prototype.reciprocal=function(){return this.recip()},s.prototype.reciprocate=function(){return this.recip()},s.prototype.cmp=function(e){var t=ne(e);if(this.m===0){if(t.m===0)return 0;if(t.m<0)return 1;if(t.m>0)return-1}if(t.m===0){if(this.m<0)return-1;if(this.m>0)return 1}if(this.m>0)return t.m<0||this.e>t.e?1:this.e<t.e?-1:this.m>t.m?1:this.m<t.m?-1:0;if(this.m<0)return t.m>0||this.e>t.e?-1:this.e<t.e||this.m>t.m?1:this.m<t.m?-1:0;throw Error("Unreachable code")},s.prototype.compare=function(e){return this.cmp(e)},s.prototype.eq=function(e){var t=ne(e);return this.e===t.e&&this.m===t.m},s.prototype.equals=function(e){return this.eq(e)},s.prototype.neq=function(e){return!this.eq(e)},s.prototype.notEquals=function(e){return this.neq(e)},s.prototype.lt=function(e){var t=ne(e);return this.m===0?t.m>0:t.m===0?this.m<=0:this.e===t.e?this.m<t.m:this.m>0?t.m>0&&this.e<t.e:t.m>0||this.e>t.e},s.prototype.lte=function(e){return!this.gt(e)},s.prototype.gt=function(e){var t=ne(e);return this.m===0?t.m<0:t.m===0?this.m>0:this.e===t.e?this.m>t.m:this.m>0?t.m<0||this.e>t.e:t.m<0&&this.e<t.e},s.prototype.gte=function(e){return!this.lt(e)},s.prototype.max=function(e){var t=ne(e);return this.lt(t)?t:this},s.prototype.min=function(e){var t=ne(e);return this.gt(t)?t:this},s.prototype.clamp=function(e,t){return this.max(e).min(t)},s.prototype.clampMin=function(e){return this.max(e)},s.prototype.clampMax=function(e){return this.min(e)},s.prototype.cmp_tolerance=function(e,t){var n=ne(e);return this.eq_tolerance(n,t)?0:this.cmp(n)},s.prototype.compare_tolerance=function(e,t){return this.cmp_tolerance(e,t)},s.prototype.eq_tolerance=function(e,t){var n=ne(e);return s.lte(this.sub(n).abs(),s.max(this.abs(),n.abs()).mul(t))},s.prototype.equals_tolerance=function(e,t){return this.eq_tolerance(e,t)},s.prototype.neq_tolerance=function(e,t){return!this.eq_tolerance(e,t)},s.prototype.notEquals_tolerance=function(e,t){return this.neq_tolerance(e,t)},s.prototype.lt_tolerance=function(e,t){var n=ne(e);return!this.eq_tolerance(n,t)&&this.lt(n)},s.prototype.lte_tolerance=function(e,t){var n=ne(e);return this.eq_tolerance(n,t)||this.lt(n)},s.prototype.gt_tolerance=function(e,t){var n=ne(e);return!this.eq_tolerance(n,t)&&this.gt(n)},s.prototype.gte_tolerance=function(e,t){var n=ne(e);return this.eq_tolerance(n,t)||this.gt(n)},s.prototype.log10=function(){return this.e+Math.log10(this.m)},s.prototype.absLog10=function(){return this.e+Math.log10(Math.abs(this.m))},s.prototype.pLog10=function(){return this.m<=0||this.e<0?0:this.log10()},s.prototype.log=function(e){return Math.LN10/Math.log(e)*this.log10()},s.prototype.log2=function(){return 3.321928094887362*this.log10()},s.prototype.ln=function(){return 2.302585092994045*this.log10()},s.prototype.logarithm=function(e){return this.log(e)},s.prototype.pow=function(e){var t,n=e instanceof s?e.toNumber():e,i=this.e*n;if(Number.isSafeInteger(i)&&(t=Math.pow(this.m,n),isFinite(t)&&t!==0))return on(t,i);var r=Math.trunc(i),o=i-r;if(t=Math.pow(10,n*Math.log10(this.m)+o),isFinite(t)&&t!==0)return on(t,r);var a=s.pow10(n*this.absLog10());return this.sign()===-1?Math.abs(n%2)===1?a.neg():Math.abs(n%2)===0?a:new s(Number.NaN):a},s.prototype.pow_base=function(e){return ne(e).pow(this)},s.prototype.factorial=function(){var e=this.toNumber()+1;return s.pow(e/Math.E*Math.sqrt(e*Math.sinh(1/e)+1/(810*Math.pow(e,6))),e).mul(Math.sqrt(2*Math.PI/e))},s.prototype.exp=function(){var e=this.toNumber();return-706<e&&e<709?s.fromNumber(Math.exp(e)):s.pow(Math.E,e)},s.prototype.sqr=function(){return on(Math.pow(this.m,2),2*this.e)},s.prototype.sqrt=function(){return this.m<0?new s(Number.NaN):this.e%2!=0?on(3.16227766016838*Math.sqrt(this.m),Math.floor(this.e/2)):on(Math.sqrt(this.m),Math.floor(this.e/2))},s.prototype.cube=function(){return on(Math.pow(this.m,3),3*this.e)},s.prototype.cbrt=function(){var e=1,t=this.m;t<0&&(e=-1,t=-t);var n=e*Math.pow(t,1/3),i=this.e%3;return on(i===1||i===-1?2.154434690031883*n:i!==0?4.641588833612778*n:n,Math.floor(this.e/3))},s.prototype.sinh=function(){return this.exp().sub(this.negate().exp()).div(2)},s.prototype.cosh=function(){return this.exp().add(this.negate().exp()).div(2)},s.prototype.tanh=function(){return this.sinh().div(this.cosh())},s.prototype.asinh=function(){return s.ln(this.add(this.sqr().add(1).sqrt()))},s.prototype.acosh=function(){return s.ln(this.add(this.sqr().sub(1).sqrt()))},s.prototype.atanh=function(){return this.abs().gte(1)?Number.NaN:s.ln(this.add(1).div(new s(1).sub(this)))/2},s.prototype.ascensionPenalty=function(e){return e===0?this:this.pow(Math.pow(10,-e))},s.prototype.egg=function(){return this.add(9)},s.prototype.lessThanOrEqualTo=function(e){return this.cmp(e)<1},s.prototype.lessThan=function(e){return this.cmp(e)<0},s.prototype.greaterThanOrEqualTo=function(e){return this.cmp(e)>-1},s.prototype.greaterThan=function(e){return this.cmp(e)>0},s.prototype.decimalPlaces=function(){return this.dp()},s.prototype.dp=function(){if(!isFinite(this.mantissa))return NaN;if(this.exponent>=17)return 0;for(var e=this.mantissa,t=-this.exponent,n=1;Math.abs(Math.round(e*n)/n-e)>1e-10;)n*=10,t++;return t>0?t:0},Object.defineProperty(s,"MAX_VALUE",{get:function(){return Yp},enumerable:!1,configurable:!0}),Object.defineProperty(s,"MIN_VALUE",{get:function(){return $p},enumerable:!1,configurable:!0}),Object.defineProperty(s,"NUMBER_MAX_VALUE",{get:function(){return Kp},enumerable:!1,configurable:!0}),Object.defineProperty(s,"NUMBER_MIN_VALUE",{get:function(){return jp},enumerable:!1,configurable:!0}),s})(),Yp=hs(1,Xn),$p=hs(1,-Xn),Kp=ne(Number.MAX_VALUE),jp=ne(Number.MIN_VALUE);class Xs extends Error{constructor(e){super(e),this.name="BigNumberError"}}const Zp=9e15;function hn(s){return isFinite(s.mantissa)&&!isNaN(s.mantissa)&&isFinite(s.exponent)&&!isNaN(s.exponent)&&s.exponent<Zp}function dt(s){if(s==null)throw new Xs(`toBigNumber received ${s===null?"null":"undefined"} — currency values must never be nullish`);let e;try{e=new Ki(s)}catch(t){const n=t instanceof Error?t.message:String(t);throw new Xs(`toBigNumber failed to parse ${JSON.stringify(s)}: ${n}`)}if(!hn(e))throw new Xs(`toBigNumber produced a non-finite value from ${JSON.stringify(s)} (NaN or ±Infinity)`);return e}const Re=Object.freeze(dt(0)),xt=Object.freeze(dt(1)),cc=Object.freeze(dt(10));function Zo(s,e){return e===.5?s.sqrt():s.pow(e)}function Bi(s){return s.toString()}function io(s){return dt(s)}const af="> 0";function so(s){return{path:s,min:Number.MIN_VALUE,max:1/0,rangeToken:af}}const Jp=[{path:"ascension.constant",min:50,max:500,rangeToken:"[50, 500]"},{path:"ascension.creditsDivisor",min:1e10,max:1e15,rangeToken:"[1e10, 1e15]"},{path:"ascension.exponent",min:.3,max:.7,rangeToken:"[0.3, 0.7]"},{path:"ascension.dmMultiplierPerPoint",min:.005,max:.1,rangeToken:"[0.005, 0.10]"},{path:"offline.earningRate",min:.1,max:1,rangeToken:"[0.1, 1.0]"},{path:"offline.baseCapHours",min:1,max:24,rangeToken:"[1, 24]"},{path:"offline.maxCapHours",min:4,max:72,rangeToken:"[4, 72]"},{path:"offline.boostMultiplier",min:1.5,max:3,rangeToken:"[1.5, 3.0]"},{path:"currencies.credits.startingBalance",min:0,max:100,rangeToken:"[0, 100]"},{path:"currencies.credits.tapAmount",min:.01,max:1e4,rangeToken:"[0.01, 10000]"},{path:"currencies.credits.tickRateMs",min:50,max:500,rangeToken:"[50, 500]"},{path:"upgrades.automationReserveFraction",min:0,max:2,rangeToken:"[0.0, 2.0]"}];function Qp(s){const e=t=>`generators[${s}].${t}`;return[{path:e("tier"),min:1,max:9,integer:!0,rangeToken:"[1, 9]"},{path:e("epoch"),min:1,max:3,integer:!0,rangeToken:"[1, 3]"},so(e("baseCost")),{path:e("costMultiplier"),min:1.01,max:1.2,rangeToken:"[1.01, 1.20]"},so(e("baseOutput")),{path:e("enabled"),kind:"boolean"}]}function em(s){const e=t=>`upgrades.milestones[${s}].${t}`;return[{path:e("ownedCount"),min:1,max:1e5,integer:!0,rangeToken:"[1, 100000]"},{path:e("productionMultiplier"),min:1.5,max:5,rangeToken:"[1.5, 5.0]"}]}function tm(s){const e=t=>`upgrades.linearBoosts[${s}].${t}`;return[{path:e("id"),kind:"string"},{path:e("targetTier"),min:1,max:9,integer:!0,rangeToken:"[1, 9]"},{path:e("multiplier"),min:1.01,max:100,rangeToken:"[1.01, 100]"},so(e("cost")),{path:e("prerequisiteOwnedCount"),min:0,max:200,integer:!0,rangeToken:"[0, 200]"}]}function nm(s){const e=t=>`upgrades.managers[${s}].${t}`;return[so(e("unlockCost")),{path:e("prerequisiteOwnedCount"),min:1,max:200,integer:!0,rangeToken:"[1, 200]"}]}function im(s){const e=t=>`ascension.upgrades[${s}].${t}`;return[{path:e("id"),kind:"string"},so(e("cost")),{path:e("maxLevel"),min:1,max:1/0,integer:!0,rangeToken:">= 1"}]}function Pt(s,e){const t=e.replace(/\[(\d+)\]/g,".$1").split(".");let n=s;for(const i of t){if(n==null||typeof n!="object")return;n=n[i]}return n}function Ba(s,e){const t=Pt(s,e.path);if(t===void 0)throw new st(`${e.path} is missing (required)`);if(typeof t!="number"||Number.isNaN(t))throw new st(`${e.path} must be a number; received ${Ai(t)}`);if(e.integer&&!Number.isInteger(t))throw new st(`${e.path} must be an integer; received ${String(t)}`);if(t<e.min||t>e.max){const n=e.rangeToken===af?`must be ${e.rangeToken}`:`must be in ${e.rangeToken}`;throw new st(`${e.path} ${n}; received ${String(t)}`)}}function sm(s,e){const t=Pt(s,e.path);if(t===void 0)throw new st(`${e.path} is missing (required)`);if(typeof t!="boolean")throw new st(`${e.path} must be a boolean; received ${Ai(t)}`)}function cf(s,e){const t=Pt(s,e.path);if(t===void 0)throw new st(`${e.path} is missing (required)`);if(typeof t!="string")throw new st(`${e.path} must be a non-empty string; received ${Ai(t)}`);if(t.trim().length===0)throw new st(`${e.path} must be a non-empty string; received ""`)}function Ai(s){return s===null?"null":Array.isArray(s)?"array":typeof s=="object"?"object":String(s)}function rm(s){if(typeof s!="object"||s===null||Array.isArray(s))throw new st(`economy config must be an object; received ${Ai(s)}`);for(const t of Jp)Ba(s,t);Pr(s,"generators",Qp),Pr(s,"upgrades.milestones",em),Pr(s,"upgrades.linearBoosts",tm),iu(s,"upgrades.linearBoosts","id"),Pr(s,"upgrades.managers",nm),Pr(s,"ascension.upgrades",im),iu(s,"ascension.upgrades","id"),lm(s);const e=Pt(s,"save");if(e!==void 0){if(typeof e!="object"||e===null||Array.isArray(e))throw new st(`save must be an object; received ${Ai(e)}`);Ba(s,{path:"save.autosaveIntervalMs",min:5e3,max:3e4,integer:!0,rangeToken:"[5000, 30000]"}),Ba(s,{path:"save.clockSkewToleranceMs",min:0,max:6e4,integer:!0,rangeToken:"[0, 60000]"}),cf(s,{path:"save.saveKey"})}}function Pr(s,e,t){const n=Pt(s,e);if(n===void 0)throw new st(`${e} is missing (required)`);if(!Array.isArray(n))throw new st(`${e} must be an array; received ${Ai(n)}`);for(let i=0;i<n.length;i++)for(const r of t(i))"kind"in r&&r.kind==="boolean"?sm(s,r):"kind"in r&&r.kind==="string"?cf(s,r):Ba(s,r)}function iu(s,e,t){const n=Pt(s,e);if(!Array.isArray(n))return;const i=new Map;for(let r=0;r<n.length;r++){const o=Pt(s,`${e}[${r}].${t}`);if(typeof o!="string")continue;const a=i.get(o);if(a!==void 0)throw new st(`${e}[${r}].${t} must be unique; ${JSON.stringify(o)} already used at index ${a}`);i.set(o,r)}}const om="1e6",am="1e27",su=20;function cm(s,e){try{return io(s)}catch(t){throw t instanceof Xs?new st(`milestones.creditsScale[${e}].threshold is not a valid serialized BigNumber; received ${JSON.stringify(s)}`):t}}function lm(s){const e="milestones.creditsScale",t=Pt(s,e);if(t===void 0)throw new st(`${e} is missing (required)`);if(!Array.isArray(t))throw new st(`${e} must be an array; received ${Ai(t)}`);const n=io(om),i=io(am),r=new Map;let o;for(let a=0;a<t.length;a++){const c=p=>`${e}[${a}].${p}`,l=Pt(s,c("threshold")),h=Pt(s,c("name"));if(l===void 0)throw new st(`${c("threshold")} is missing (required)`);if(typeof l!="string")throw new st(`${c("threshold")} must be a serialized-BigNumber string; received ${Ai(l)}`);const u=cm(l,a);if(!u.gte(n))throw new st(`${c("threshold")} must be >= 1e6; received ${JSON.stringify(l)}`);if(o!==void 0&&!o.lt(u))throw new st(`${c("threshold")} must be strictly greater than the previous threshold (creditsScale must be strictly ascending); received ${JSON.stringify(l)}`);if(o=u,h===void 0)throw new st(`${c("name")} is missing (required)`);if(typeof h!="string")throw new st(`${c("name")} must be a non-empty string; received ${Ai(h)}`);if(h.trim().length===0)throw new st(`${c("name")} must be a non-empty string; received ""`);if(h.length>su)throw new st(`${c("name")} must be <= ${su} characters; received ${h.length}`);const d=r.get(h);if(d!==void 0)throw new st(`${c("name")} must be unique; ${JSON.stringify(h)} already used at index ${d}`);r.set(h,a)}if(o!==void 0&&!o.lte(i)){const a=t.length-1,c=Pt(s,`${e}[${a}].threshold`);throw new st(`milestones.creditsScale[${a}].threshold (top of series) must be <= 1e27; received ${JSON.stringify(c)}`)}}const hm=.5,um=2,ru=.01,dm="[0.5, 2.0]";function fm(s){const e=Pt(s,"offline.baseCapHours"),t=Pt(s,"offline.maxCapHours");if(typeof e=="number"&&typeof t=="number"&&e>t)throw new st(`offline.baseCapHours (${e}) cannot exceed offline.maxCapHours (${t})`);const n=Pt(s,"upgrades.linearBoosts");if(Array.isArray(n))for(let i=0;i<n.length;i++)mm(s,i)}function pm(s,e){const t=Pt(s,"generators");if(Array.isArray(t)){for(const n of t)if(typeof n=="object"&&n!==null&&n.tier===e)return n}}function mm(s,e){const t=_=>`upgrades.linearBoosts[${e}].${_}`,n=Pt(s,t("id")),i=Pt(s,t("targetTier")),r=Pt(s,t("cost")),o=Pt(s,t("prerequisiteOwnedCount"));if(typeof i!="number"||typeof r!="number"||typeof o!="number")return;const a=pm(s,i),c=a==null?void 0:a.baseCost,l=a==null?void 0:a.costMultiplier;if(typeof c!="number"||typeof l!="number")return;const h=c*Math.pow(l,o);if(!Number.isFinite(h)||h<=0)return;const u=r/h,d=hm*(1-ru),p=um*(1+ru);if(u<d||u>p){const _=typeof n=="string"?JSON.stringify(n):`index ${e}`;throw new st(`upgrades.linearBoosts[${e}] (id ${_}) costFactor ${u.toFixed(2)} is outside the expected band ${dm}`)}}function _m(s){const e=/position (\d+)/.exec(s);return e?Number(e[1]):0}function lf(s){let e;try{e=JSON.parse(s)}catch(i){const r=i instanceof Error?i.message:String(i),o=_m(r);throw new xh(`economy.json is not valid JSON at position ${o}`)}const t=e==null?void 0:e.meta,n=typeof(t==null?void 0:t.schemaVersion)=="number"?t.schemaVersion:0;if(n>jr)throw new Mh(`economy.json schema version ${n} is newer than supported version ${jr}`);return n<jr&&typeof e=="object"&&e!==null&&!Array.isArray(e)&&(e=zp(e)),rm(e),fm(e),of(e)}function cl(s){return hn(s)?s.max(xt):xt}function gm(s,e){return{get:()=>s.get().mul(cl(e.getExtraGlobalMultiplier())).mul(cl(e.getAutomationEfficiencyBonus()))}}function vm(s,e){return{getBoostMultiplier:t=>s.getBoostMultiplier(t).mul(cl(e.getTierBoost(t)))}}const hf=-1,ee={CREDITS_UPDATED:"CREDITS_UPDATED",PURCHASE_REJECTED:"PURCHASE_REJECTED",BUY_MODE_CHANGED:"BUY_MODE_CHANGED",GENERATOR_PURCHASED:"GENERATOR_PURCHASED",GENERATOR_RATE_CHANGED:"GENERATOR_RATE_CHANGED",GENERATORS_RESET_COMPLETE:"GENERATORS_RESET_COMPLETE",GENERATORS_RESTORED:"GENERATORS_RESTORED",BOOSTS_CHANGED:"BOOSTS_CHANGED",UPGRADE_PURCHASED:"UPGRADE_PURCHASED",UPGRADE_PURCHASE_REJECTED:"UPGRADE_PURCHASE_REJECTED",AUTOMATION_UNLOCKED:"AUTOMATION_UNLOCKED",UPGRADE_RESET:"UPGRADE_RESET",INTENT_AUTO_BUY_GENERATOR:"INTENT_AUTO_BUY_GENERATOR",INTENT_TAP_FORGE:"INTENT_TAP_FORGE",INTENT_BUY_GENERATOR:"INTENT_BUY_GENERATOR",INTENT_SET_BUY_MODE:"INTENT_SET_BUY_MODE",INTENT_CONFIRM_ASCENSION:"INTENT_CONFIRM_ASCENSION",INTENT_HOLD_PROGRESS:"INTENT_HOLD_PROGRESS",INTENT_DISMISS_MODAL:"INTENT_DISMISS_MODAL",INTENT_DISMISS_OVERLAY:"INTENT_DISMISS_OVERLAY",EPOCH_CHANGED:"EPOCH_CHANGED",SAVE_FAILED:"SAVE_FAILED",SAVE_LOAD_FAILED:"SAVE_LOAD_FAILED",SAVE_CONFLICT:"SAVE_CONFLICT",ASCENSION_STARTED:"ASCENSION_STARTED",ASCENSION_COMPLETE:"ASCENSION_COMPLETE",MILESTONE_REACHED:"MILESTONE_REACHED",CLOCK_GAP_DETECTED:"CLOCK_GAP_DETECTED",DARK_MATTER_UPDATED:"DARK_MATTER_UPDATED",DM_UPGRADE_PURCHASED:"DM_UPGRADE_PURCHASED",DM_TREE_CAPSTONE_SELECTED:"DM_TREE_CAPSTONE_SELECTED",OFFLINE_EARNINGS_APPLIED:"OFFLINE_EARNINGS_APPLIED"},xm=!1,Mm=50,Em=20,ym=!1;class ou extends Error{constructor(e,t){super(`[EventBus] Recursion depth ${t} exceeded (key chain: ${e})`),this.name="EventBusRecursionError"}}class Sm{constructor(e={}){B(this,"_rethrowListenerErrors");B(this,"_maxDispatchDepth");B(this,"_listenerLeakWarn");B(this,"_freezePayloads");B(this,"_logger");B(this,"_listeners");B(this,"_depth",0);B(this,"_keyStack",[]);B(this,"_leakWarnedKeys",new Set);B(this,"_asyncWarnedKeys",new Set);this._rethrowListenerErrors=e.rethrowListenerErrors??xm,this._maxDispatchDepth=e.maxDispatchDepth??Mm,this._listenerLeakWarn=e.listenerLeakWarn??Em,this._freezePayloads=e.freezePayloads??ym,this._logger=e.logger,this._listeners=new Map}get config(){return{rethrowListenerErrors:this._rethrowListenerErrors,maxDispatchDepth:this._maxDispatchDepth,listenerLeakWarn:this._listenerLeakWarn,freezePayloads:this._freezePayloads,logger:this._logger}}on(e,t){var r,o;const n=this._listeners.get(e);n===void 0?this._listeners.set(e,[t]):n.includes(t)||n.push(t);const i=((r=this._listeners.get(e))==null?void 0:r.length)??0;return i>this._listenerLeakWarn&&!this._leakWarnedKeys.has(e)&&(this._leakWarnedKeys.add(e),(o=this._logger)==null||o.call(this,`[EventBus] Possible listener leak on "${String(e)}": ${i} listeners (threshold ${this._listenerLeakWarn}). A subscriber is likely missing its unsubscribe.`)),()=>{this.off(e,t)}}once(e,t){const n=i=>{this.off(e,n),t(i)};return this.on(e,n)}off(e,t){const n=this._listeners.get(e);if(n===void 0)return;const i=n.indexOf(t);i!==-1&&n.splice(i,1)}listenerCount(e){var t;return((t=this._listeners.get(e))==null?void 0:t.length)??0}emit(e,t){var n,i;this._depth+=1,this._keyStack.push(e);try{if(this._depth>this._maxDispatchDepth)throw new ou(this._keyStack.join("→"),this._depth);this._freezePayloads&&Object.freeze(t);const r=this._listeners.get(e);if(r===void 0)return;const o=r.slice();let a,c=!1;for(let l=0;l<o.length;l+=1){const h=o[l];try{const u=h(t);if(u!=null&&typeof u.then=="function"){const d=h.name===""?"<anon>":h.name,p=`${String(e)}:${d}`;this._asyncWarnedKeys.has(p)||(this._asyncWarnedKeys.add(p),(n=this._logger)==null||n.call(this,`[EventBus] async handler "${d}" on "${String(e)}" returned a Promise. Async handlers are not supported (GDD Rule 12) — the Promise is ignored. Make the handler synchronous.`))}}catch(u){if(u instanceof ou)throw u;const d=h.name===""?"anonymous":h.name;(i=this._logger)==null||i.call(this,`[EventBus] listener "${d}" threw while handling event "${String(e)}":`,u),this._rethrowListenerErrors&&!c&&(a=u,c=!0)}}if(c)throw a}finally{this._keyStack.pop(),this._depth-=1}}}const Tm=1e3;class bm{constructor(e,t){B(this,"_config");B(this,"_tickRateMs");B(this,"_maxCatchupSteps");B(this,"_gapThresholdMs");B(this,"_dtSeconds");B(this,"_bus");B(this,"_consumers",[]);B(this,"_accumulator",0);B(this,"_isRunning",!0);const{tickRateMs:n,maxCatchupSteps:i,gapThresholdMs:r,liveBudgetCeilingMs:o}=e;if(!(n>=50&&n<=500))throw new Error(`GameClock: tickRateMs ${n} outside [50,500]`);if(!(i>=1&&i<=20))throw new Error(`GameClock: maxCatchupSteps ${i} outside [1,20]`);if(!(r>=2e3&&r<=5e3))throw new Error(`GameClock: gapThresholdMs ${r} outside [2000,5000]`);if(!Number.isFinite(o))throw new Error(`GameClock: liveBudgetCeilingMs ${o} must be a finite number`);if(r<=n*i)throw new Error(`GameClock: gapThresholdMs (${r}) must exceed tickRateMs*maxCatchupSteps (${n*i})`);if(n*i>o)throw new Error(`GameClock: tickRateMs*maxCatchupSteps (${n*i}) exceeds liveBudgetCeilingMs (${o})`);this._config={...e},this._tickRateMs=this._config.tickRateMs,this._maxCatchupSteps=this._config.maxCatchupSteps,this._gapThresholdMs=this._config.gapThresholdMs,this._dtSeconds=this._config.tickRateMs/Tm,this._bus=t}register(e){return this._consumers.includes(e)||this._consumers.push(e),()=>{const t=this._consumers.indexOf(e);t!==-1&&this._consumers.splice(t,1)}}advance(e){if(!this._isRunning)return{steps:0,stallGapFired:!1};if(!Number.isFinite(e)||e<=0)return{steps:0,stallGapFired:!1};this._accumulator+=e;let t=0;const n=[...this._consumers];for(;this._accumulator>=this._tickRateMs&&t<this._maxCatchupSteps;){for(const r of n)r(this._dtSeconds);this._accumulator-=this._tickRateMs,t+=1}let i=!1;if(this._accumulator>this._gapThresholdMs){const r=this._accumulator-this._accumulator%this._tickRateMs;this._bus.emit(ee.CLOCK_GAP_DETECTED,{elapsedMs:r,source:"stall"}),this._accumulator=this._accumulator%this._tickRateMs,i=!0}return{steps:t,stallGapFired:i}}reportGap(e){!Number.isFinite(e)||e<=0||this._bus.emit(ee.CLOCK_GAP_DETECTED,{elapsedMs:e,source:"visibility"})}pause(){this._isRunning=!1}resume(){this._isRunning=!0}isRunning(){return this._isRunning}}const bn=1,pn=9;var Ct,gi,ho,uo,Hi,vi,fo,rc,po,zt,Fi,uf,Yr;class Am{constructor(e,t,n){Y(this,zt);Y(this,Ct);Y(this,gi);Y(this,ho);Y(this,uo);Y(this,Hi);Y(this,vi);Y(this,fo);Y(this,rc,({tier:e})=>{if(e===hf){for(let t=bn;t<=pn;t+=1)this.isUnlocked(t)&&v(this,Ct)[t]>0&&re(this,zt,Yr).call(this,t,v(this,vi)[t]??Re);return}!Number.isInteger(e)||e<bn||e>pn||this.isUnlocked(e)&&v(this,Ct)[e]>0&&re(this,zt,Yr).call(this,e,v(this,vi)[e]??Re)});Y(this,po);X(this,Ct,new Array(pn+1).fill(0)),X(this,Hi,t),X(this,vi,new Array(pn+1).fill(void 0));const i=new Array(pn+1).fill(void 0);for(const a of e.generators)Number.isInteger(a.tier)&&a.tier>=bn&&a.tier<=pn&&(i[a.tier]=a);X(this,gi,i),X(this,ho,n),X(this,po,e.upgrades.milestones.filter(a=>Number.isFinite(a.ownedCount)&&a.ownedCount>0&&Number.isFinite(a.productionMultiplier)&&a.productionMultiplier>0));let r=!1,o=!0;for(let a=bn;a<=pn;a+=1){const c=i[a];c!==void 0&&(r=!0,c.enabled&&(o=!1))}X(this,uo,r&&o),X(this,fo,t.on(ee.BOOSTS_CHANGED,v(this,rc)))}getOwned(e){return re(this,zt,Fi).call(this,e,"getOwned"),v(this,Ct)[e]}isUnlocked(e){if(re(this,zt,Fi).call(this,e,"isUnlocked"),v(this,uo))return e===bn?!0:v(this,gi)[e]===void 0?!1:v(this,Ct)[e-1]>=1;const t=v(this,gi)[e];return t===void 0||!t.enabled?!1:e===bn?!0:v(this,Ct)[e-1]>=1}getCost(e,t=1){if(re(this,zt,Fi).call(this,e,"getCost"),!Number.isInteger(t)||t<1)return Re;const n=v(this,gi)[e];if(n===void 0)return Re;const i=v(this,Ct)[e],r=n.costMultiplier,o=dt(n.baseCost).mul(dt(r).pow(i));return t===1?o:r===1?o.mul(t):o.mul(dt(r).pow(t).sub(xt).div(r-1))}getMaxAffordable(e,t){re(this,zt,Fi).call(this,e,"getMaxAffordable");const n=v(this,gi)[e];if(n===void 0||!hn(t))return 0;const i=this.getCost(e,1);if(i.lte(Re))return 0;const r=t.div(i);if(r.lte(Re))return 0;const o=n.costMultiplier,a=r.toNumber();let c;if(o===1){if(!isFinite(a))return 0;c=Math.floor(a)}else isFinite(a)?c=Math.floor(Math.log(a*(o-1)+1)/Math.log(o)):c=Math.floor(r.mul(o-1).add(xt).log10()/Math.log10(o));if(!Number.isFinite(c)||c>=Number.MAX_SAFE_INTEGER)return 0;for(;this.getCost(e,c+1).lte(t);)c+=1;for(;c>0&&this.getCost(e,c).gt(t);)c-=1;return Math.max(0,c)}getMilestoneMultiplier(e){re(this,zt,Fi).call(this,e,"getMilestoneMultiplier");const t=v(this,Ct)[e];let n=xt;for(const i of v(this,po))i.ownedCount<=t&&(n=n.mul(dt(i.productionMultiplier)));return n}getTierRate(e){if(re(this,zt,Fi).call(this,e,"getTierRate"),!this.isUnlocked(e))return Re;const t=v(this,Ct)[e];if(t===0)return Re;const n=v(this,gi)[e];return n===void 0?Re:dt(n.baseOutput).mul(t).mul(this.getMilestoneMultiplier(e)).mul(re(this,zt,uf).call(this,e))}getTotalBaseRate(){let e=Re;for(let t=bn;t<=pn;t+=1)e=e.add(this.getTierRate(t));return e}applyPurchase(e,t){if(re(this,zt,Fi).call(this,e,"applyPurchase"),!this.isUnlocked(e)||!Number.isInteger(t)||t<1)return;const n=v(this,Ct)[e],i=v(this,vi)[e]??this.getTierRate(e);v(this,Ct)[e]+=t,v(this,Hi).emit(ee.GENERATOR_PURCHASED,{tier:e,previousOwned:n,owned:v(this,Ct)[e]}),re(this,zt,Yr).call(this,e,i)}resetRun(){const e=[];for(let t=bn;t<=pn;t+=1)v(this,Ct)[t]>0&&e.push({tier:t,previousRate:this.getTierRate(t)});v(this,Ct).fill(0);for(const{tier:t,previousRate:n}of e)re(this,zt,Yr).call(this,t,n);v(this,Hi).emit(ee.GENERATORS_RESET_COMPLETE,{})}serialize(){const e=[];for(let t=bn;t<=pn;t+=1)v(this,Ct)[t]>0&&e.push({tier:t,owned:v(this,Ct)[t]});return e}restore(e){v(this,Ct).fill(0);for(const t of e)Number.isInteger(t.tier)&&t.tier>=bn&&t.tier<=pn&&(v(this,Ct)[t.tier]=Number.isFinite(t.owned)&&t.owned>=0?Math.floor(t.owned):0);v(this,vi).fill(void 0),v(this,Hi).emit(ee.GENERATORS_RESTORED,{})}dispose(){v(this,fo).call(this)}}Ct=new WeakMap,gi=new WeakMap,ho=new WeakMap,uo=new WeakMap,Hi=new WeakMap,vi=new WeakMap,fo=new WeakMap,rc=new WeakMap,po=new WeakMap,zt=new WeakSet,Fi=function(e,t){if(!Number.isInteger(e)||e<bn||e>pn)throw new RangeError(`${t}: tier must be an integer in [${bn}, ${pn}], got ${e}`)},uf=function(e){var t;return((t=v(this,ho))==null?void 0:t.getBoostMultiplier(e))??xt},Yr=function(e,t){const n=this.getTierRate(e);v(this,vi)[e]=n,v(this,Hi).emit(ee.GENERATOR_RATE_CHANGED,{tier:e,rate:n,rateDelta:n.sub(t)})};const au=["x1","x10","xmax"],cu="x1",wm=1,Rm=10,lu=1;var an,xi,Mi,qn,mo,_o,Rn,gn,js,oc,go,bt,ll,Hs,ka,df,ff,pf,mf;class Cm{constructor(e,t,n,i,r){Y(this,bt);Y(this,an,Re);Y(this,xi,Re);Y(this,Mi,Re);Y(this,qn,cu);Y(this,mo);Y(this,_o);Y(this,Rn);Y(this,gn);Y(this,js,!1);Y(this,oc,e=>{const t=v(this,gn).getTotalBaseRate().mul(e);if(t.gt(Re)){X(this,js,!0);try{this.earn(t)}finally{X(this,js,!1)}}re(this,bt,Hs).call(this)});Y(this,go);const o=e.currencies.credits.tapAmount;if(!(Number.isFinite(o)&&o>0))throw new Error(`CreditsSystem: currencies.credits.tapAmount ${o} must be a finite number > 0 (AC-B3-07 / EC-9)`);X(this,mo,dt(o)),X(this,Rn,t),X(this,gn,n),X(this,_o,i),X(this,go,[t.on(ee.INTENT_TAP_FORGE,()=>{this.earn(v(this,mo))}),t.on(ee.INTENT_BUY_GENERATOR,({tier:a})=>{re(this,bt,ff).call(this,a)}),t.on(ee.INTENT_SET_BUY_MODE,({mode:a})=>{re(this,bt,df).call(this,a)}),t.on(ee.INTENT_AUTO_BUY_GENERATOR,({tier:a})=>{re(this,bt,pf).call(this,a)}),r.register(v(this,oc))])}earn(e){if(!hn(e)||!e.gt(Re)){console.warn("CreditsSystem: earn() rejected a non-finite or non-positive base (F-B3-03 guard)",e);return}const t=re(this,bt,ll).call(this),n=e.mul(t);X(this,an,v(this,an).add(n)),X(this,xi,v(this,xi).add(n)),X(this,Mi,v(this,Mi).add(e)),v(this,js)||re(this,bt,Hs).call(this,t)}spend(e){return!hn(e)||!e.gt(Re)||!v(this,an).gte(e)?!1:(X(this,an,v(this,an).sub(e)),re(this,bt,Hs).call(this),!0)}addOfflineEarnings(e){if(!hn(e)||!e.gt(Re)){console.warn("CreditsSystem: rejected invalid offline lump (F-B3-06 / EC-4)",e);return}this.earn(e)}resetRun(){X(this,an,Re),X(this,xi,Re),X(this,Mi,Re),re(this,bt,Hs).call(this)}serialize(){return{balance:Bi(v(this,an)),lifetimeCredits:Bi(v(this,xi)),lifetimeBaseCredits:Bi(v(this,Mi)),buyMode:v(this,qn)}}restore(e){X(this,an,re(this,bt,ka).call(this,"balance",e.balance)),X(this,xi,re(this,bt,ka).call(this,"lifetimeCredits",e.lifetimeCredits)),X(this,Mi,re(this,bt,ka).call(this,"lifetimeBaseCredits",e.lifetimeBaseCredits)),X(this,qn,e.buyMode!==void 0&&au.includes(e.buyMode)?e.buyMode:cu),re(this,bt,Hs).call(this),v(this,Rn).emit(ee.BUY_MODE_CHANGED,{mode:v(this,qn)})}getBalance(){return v(this,an)}getLifetimeCredits(){return v(this,xi)}getLifetimeBaseCredits(){return v(this,Mi)}getBuyMode(){return v(this,qn)}dispose(){for(const e of v(this,go))e()}}an=new WeakMap,xi=new WeakMap,Mi=new WeakMap,qn=new WeakMap,mo=new WeakMap,_o=new WeakMap,Rn=new WeakMap,gn=new WeakMap,js=new WeakMap,oc=new WeakMap,go=new WeakMap,bt=new WeakSet,ll=function(){const e=v(this,_o).get();return!hn(e)||e.lt(xt)?(console.warn("CreditsSystem: F-B3-01 clamped a malformed global multiplier to ONE (provider contract: finite >= ONE)",e),xt):e},Hs=function(e){const t=v(this,gn).getTotalBaseRate().mul(e??re(this,bt,ll).call(this));v(this,Rn).emit(ee.CREDITS_UPDATED,{balance:v(this,an),ratePerSec:t})},ka=function(e,t){let n;try{n=io(t)}catch(i){if(!(i instanceof Xs))throw i;return console.warn(`CreditsSystem: restore() clamped corrupted field '${e}' to ZERO — deserialize rejected the persisted string (EC-5 / R13)`,t),Re}return!hn(n)||!n.gte(Re)?(console.warn(`CreditsSystem: restore() clamped invalid field '${e}' to ZERO — non-finite or negative after deserialize (EC-5 / R13)`,t),Re):n},df=function(e){!au.includes(e)||e===v(this,qn)||(X(this,qn,e),v(this,Rn).emit(ee.BUY_MODE_CHANGED,{mode:e}))},ff=function(e){if(!v(this,gn).isUnlocked(e)){v(this,Rn).emit(ee.PURCHASE_REJECTED,{reason:"locked"});return}const t=re(this,bt,mf).call(this,e);if(t===0){v(this,Rn).emit(ee.PURCHASE_REJECTED,{reason:"qty_zero"});return}const n=v(this,gn).getCost(e,t);this.spend(n)?v(this,gn).applyPurchase(e,t):v(this,Rn).emit(ee.PURCHASE_REJECTED,{reason:"insufficient_balance"})},pf=function(e){if(!v(this,gn).isUnlocked(e)){v(this,Rn).emit(ee.PURCHASE_REJECTED,{reason:"locked"});return}const t=v(this,gn).getCost(e,lu);this.spend(t)?v(this,gn).applyPurchase(e,lu):v(this,Rn).emit(ee.PURCHASE_REJECTED,{reason:"insufficient_balance"})},mf=function(e){switch(v(this,qn)){case"x1":return wm;case"x10":return Rm;case"xmax":return v(this,gn).getMaxAffordable(e,v(this,an))}};function hu(s){return Number.isFinite(s)?dt(s).max(xt):xt}function Im(s){return Number.isFinite(s)?dt(s):null}function oa(s){return Im("cost"in s?s.cost:s.unlockCost)}function Lm(s){return hn(s)?s:Re}function Nm(s){return`manager:tier${s}`}var Zs,Yn,$n,Js,Qs,vo,vn,xo,Kn,Mo,Et,zs,hl,Gs,_f,ul,gf;class Pm{constructor(e,t,n,i,r){Y(this,Et);Y(this,Zs);Y(this,Yn,new Set);Y(this,$n,{});Y(this,Js);Y(this,Qs);Y(this,vo);Y(this,vn);Y(this,xo);Y(this,Kn);Y(this,Mo);re(this,Et,gf).call(this,e),X(this,Js,n),X(this,Qs,i),X(this,vn,t),X(this,Mo,r)}getBoostMultiplier(e){return v(this,Zs).filter(t=>t.targetTier===e&&v(this,Yn).has(t.id)).reduce((t,n)=>t.mul(hu(n.multiplier)),xt)}isManagerUnlocked(e){return v(this,$n)[e]===!0}isVisible(e){return re(this,Et,zs).call(this,e.targetTier,e.prerequisiteOwnedCount)}isAvailable(e){return re(this,Et,hl).call(this,e.id,e.targetTier,e)}getUpgradeState(e){const t=v(this,Kn).get(e);if(t===void 0)return"LOCKED";const{entry:n,targetTier:i}=t;return re(this,Et,Gs).call(this,e,i,n)?"PURCHASED":re(this,Et,zs).call(this,i,n.prerequisiteOwnedCount)?re(this,Et,hl).call(this,e,i,n)?"AVAILABLE":"UNAFFORDABLE":"LOCKED"}getProjectedTierRate(e,t){const n=v(this,Js).getTierRate(e),i=v(this,Kn).get(t),r=i!==void 0&&"multiplier"in i.entry?i.entry:void 0;return r===void 0?(console.warn("UpgradeSystem: getProjectedTierRate received an unknown or non-boost upgradeId; returning the base tier rate (F-B4-04)",t),n):Lm(n).mul(hu(r.multiplier))}getSortedVisibleUpgrades(){const e=[];for(const[t,n]of v(this,Kn))re(this,Et,zs).call(this,n.targetTier,n.entry.prerequisiteOwnedCount)&&e.push({entry:n.entry,id:t,targetTier:n.targetTier,costKey:oa(n.entry),purchased:re(this,Et,Gs).call(this,t,n.targetTier,n.entry)?1:0});return e.sort((t,n)=>{if(t.targetTier!==n.targetTier)return t.targetTier-n.targetTier;if(t.purchased!==n.purchased)return t.purchased-n.purchased;if(t.costKey!==null&&n.costKey!==null){const i=t.costKey.cmp(n.costKey);if(i!==0)return i}else{if(t.costKey===null&&n.costKey!==null)return 1;if(t.costKey!==null&&n.costKey===null)return-1}return t.id<n.id?-1:t.id>n.id?1:0}),e.map(t=>t.entry)}getCheapestAvailableUpgradeCost(){let e=null;for(const[t,n]of v(this,Kn)){if(re(this,Et,Gs).call(this,t,n.targetTier,n.entry)||!re(this,Et,zs).call(this,n.targetTier,n.entry.prerequisiteOwnedCount))continue;const i=oa(n.entry);i!==null&&(e===null||i.lt(e))&&(e=i)}return e??Re}purchase(e){const t=v(this,Kn).get(e);if(t===void 0){v(this,vn).emit(ee.UPGRADE_PURCHASE_REJECTED,{upgradeId:e,reason:"not_found"});return}if(re(this,Et,Gs).call(this,e,t.targetTier,t.entry))return;const n=oa(t.entry);if(n===null||n.lte(Re)){v(this,vn).emit(ee.UPGRADE_PURCHASE_REJECTED,{upgradeId:e,reason:"invalid_cost"});return}if(!v(this,Qs).spend(n)){v(this,vn).emit(ee.UPGRADE_PURCHASE_REJECTED,{upgradeId:e,reason:"insufficient_balance"});return}this.markUpgradePurchased(e);const{type:i,targetTier:r}=t;i==="LinearBoost"?(v(this,vn).emit(ee.BOOSTS_CHANGED,{tier:r}),v(this,vn).emit(ee.UPGRADE_PURCHASED,{upgradeId:e,type:i,targetTier:r})):(v(this,$n)[r]=!0,v(this,vn).emit(ee.AUTOMATION_UNLOCKED,{tier:r}),v(this,vn).emit(ee.UPGRADE_PURCHASED,{upgradeId:e,type:i,targetTier:r}))}markUpgradePurchased(e){v(this,Yn).add(e)}getState(){return{purchasedUpgrades:[...v(this,Yn)],managerUnlocked:{...v(this,$n)}}}loadState(e){if(v(this,Yn).clear(),re(this,Et,ul).call(this),e==null)return;const t=e.purchasedUpgrades;if(Array.isArray(t))for(const i of t)v(this,Kn).has(i)?v(this,Yn).add(i):console.warn("UpgradeSystem.loadState: dropping a purchased upgradeId absent from the current catalog (removed in a patch?)",i);else t!==void 0&&console.warn("UpgradeSystem.loadState: purchasedUpgrades is not an array; defaulting to empty",t);const n=e.managerUnlocked;if(n!==null&&typeof n=="object"&&!Array.isArray(n))for(const[i,r]of Object.entries(n))r===!0&&(v(this,$n)[Number(i)]=!0);else n!==void 0&&console.warn("UpgradeSystem.loadState: managerUnlocked is not a plain object; defaulting to all-locked",n)}reset(){var t;v(this,Yn).clear();let e=!1;try{e=((t=v(this,Mo))==null?void 0:t.shouldPersistManagers())===!0}catch{e=!1}e||re(this,Et,ul).call(this),v(this,vn).emit(ee.BOOSTS_CHANGED,{tier:hf}),v(this,vn).emit(ee.UPGRADE_RESET,{})}onConfigReload(e){{console.warn("UpgradeSystem.onConfigReload is a dev-only hot-reload convenience and is a no-op in a production build (live catalog swap refused — anti-cheat)");return}}}Zs=new WeakMap,Yn=new WeakMap,$n=new WeakMap,Js=new WeakMap,Qs=new WeakMap,vo=new WeakMap,vn=new WeakMap,xo=new WeakMap,Kn=new WeakMap,Mo=new WeakMap,Et=new WeakSet,zs=function(e,t){return re(this,Et,_f).call(this,e)&&v(this,Js).getOwned(e)>=t},hl=function(e,t,n){if(!re(this,Et,zs).call(this,t,n.prerequisiteOwnedCount)||re(this,Et,Gs).call(this,e,t,n))return!1;const i=oa(n);return i===null?!1:v(this,Qs).getBalance().gte(i)},Gs=function(e,t,n){return"multiplier"in n?v(this,Yn).has(e):v(this,$n)[t]===!0},_f=function(e){return v(this,vo)[e-1]===!0},ul=function(){for(const e of Object.keys(v(this,$n)))delete v(this,$n)[Number(e)]},gf=function(e){var n,i;X(this,Zs,Object.freeze((((n=e.upgrades)==null?void 0:n.linearBoosts)??[]).map(r=>Object.freeze({...r})))),X(this,xo,Object.freeze((((i=e.upgrades)==null?void 0:i.managers)??[]).map(r=>Object.freeze({...r}))));const t=new Map;for(const r of v(this,Zs))t.set(r.id,{entry:r,type:"LinearBoost",targetTier:r.targetTier});v(this,xo).forEach((r,o)=>{const a=o+1;t.set(Nm(a),{entry:r,type:"AutomationUnlock",targetTier:a})}),X(this,Kn,t),X(this,vo,Object.freeze((e.generators??[]).map(r=>r.enabled===!0)))};var Eo,er,yo,tr,So,To,ac,vf;class Dm{constructor(e){Y(this,ac);Y(this,Eo);Y(this,er);Y(this,yo);Y(this,tr);Y(this,So);Y(this,To);X(this,Eo,e.bus),X(this,er,e.b2),X(this,yo,e.b3),X(this,tr,e.b4),X(this,So,e.reserveFraction),X(this,To,[...e.enabledTiers].sort((t,n)=>n-t)),e.clock.register(()=>re(this,ac,vf).call(this))}}Eo=new WeakMap,er=new WeakMap,yo=new WeakMap,tr=new WeakMap,So=new WeakMap,To=new WeakMap,ac=new WeakSet,vf=function(){const e=v(this,tr).getCheapestAvailableUpgradeCost().mul(v(this,So));for(const t of v(this,To)){if(!v(this,tr).isManagerUnlocked(t)||!v(this,er).isUnlocked(t))continue;const n=v(this,er).getCost(t,1).add(e);v(this,yo).getBalance().gte(n)&&v(this,Eo).emit(ee.INTENT_AUTO_BUY_GENERATOR,{tier:t})}};const uu=9;var ps,bo,Cn,Ao,Vn,xf,dl,Mf,Ef;class Um{constructor(e,t){Y(this,Vn);Y(this,ps);Y(this,bo);Y(this,Cn,0);Y(this,Ao);X(this,ps,e),X(this,bo,t),X(this,Ao,[e.on(ee.GENERATOR_PURCHASED,n=>re(this,Vn,xf).call(this,n)),e.on(ee.GENERATORS_RESTORED,()=>re(this,Vn,Mf).call(this)),e.on(ee.GENERATORS_RESET_COMPLETE,()=>re(this,Vn,Ef).call(this))])}getEpoch(){return v(this,Cn)}dispose(){for(const e of v(this,Ao))e()}}ps=new WeakMap,bo=new WeakMap,Cn=new WeakMap,Ao=new WeakMap,Vn=new WeakSet,xf=function(e){const{tier:t,owned:n}=e;n>=1&&Number.isInteger(t)&&t>=1&&t<=uu&&t>v(this,Cn)&&(X(this,Cn,t),v(this,ps).emit(ee.EPOCH_CHANGED,{epoch:v(this,Cn)}))},dl=function(){for(let e=uu;e>=1;e--)if(v(this,bo).getOwned(e)>=1)return e;return 0},Mf=function(){X(this,Cn,re(this,Vn,dl).call(this)),v(this,ps).emit(ee.EPOCH_CHANGED,{epoch:v(this,Cn)})},Ef=function(){const e=re(this,Vn,dl).call(this);e!==v(this,Cn)&&(X(this,Cn,e),v(this,ps).emit(ee.EPOCH_CHANGED,{epoch:v(this,Cn)}))};const Om=Object.freeze({addDarkMatter:()=>{},isNoOp:!0});var wo,Ro,Co,ms,nr,Io,Lo,_s,zi,No,fl;class Fm{constructor(e,t,n,i,r,o){Y(this,No);Y(this,wo);Y(this,Ro);Y(this,Co);Y(this,ms);Y(this,nr);Y(this,Io);Y(this,Lo);Y(this,_s);Y(this,zi,0);Bm(e.ascension),X(this,wo,dt(e.ascension.constant)),X(this,Ro,dt(e.ascension.creditsDivisor)),X(this,Co,e.ascension.exponent),X(this,ms,i),X(this,nr,t),X(this,Io,n),X(this,Lo,r),X(this,_s,o??Om)}assertRealProviderInstalled(){if(v(this,_s).isNoOp===!0)throw new Error("AscensionSystem: real DarkMatterProvider never installed — setDarkMatterProvider() was not called before boot step 6 (production wiring fault; refusing to silently mint 0 Dark Matter)")}setDarkMatterProvider(e){X(this,_s,e)}getRunCount(){return v(this,zi)}serialize(){return{runCount:v(this,zi)}}restore(e){const t=e==null?void 0:e.runCount;if(typeof t!="number"||!Number.isSafeInteger(t)||t<0)throw new Error(`AscensionSystem.restore: invalid runCount (${String(t)}) — must be a non-negative safe integer`);X(this,zi,t)}getEstimatedDM(){return re(this,No,fl).call(this,v(this,ms).getLifetimeBaseCredits())}canAscend(){return this.getEstimatedDM().gte(xt)}executeAscension(){if(!this.canAscend())throw new Error("AscensionSystem.executeAscension: canAscend() is false (programming error — E5 must gate the Ascend button)");this.assertRealProviderInstalled(),v(this,nr).emit(ee.ASCENSION_STARTED,{});const e=v(this,ms).getLifetimeBaseCredits(),t=re(this,No,fl).call(this,e);v(this,ms).resetRun(),v(this,Io).resetRun(),v(this,Lo).reset(),v(this,_s).addDarkMatter(t,e),sa(this,zi)._++,v(this,nr).emit(ee.ASCENSION_COMPLETE,{dmGained:t,runCount:v(this,zi)})}}wo=new WeakMap,Ro=new WeakMap,Co=new WeakMap,ms=new WeakMap,nr=new WeakMap,Io=new WeakMap,Lo=new WeakMap,_s=new WeakMap,zi=new WeakMap,No=new WeakSet,fl=function(e){if(e.lt(Re))throw new Error("AscensionSystem.computeDM: basis < 0 violates the B3 lifetimeBaseCredits invariant");if(e.eq(Re))return Re;const t=e.div(v(this,Ro)),n=Zo(t,v(this,Co));return v(this,wo).mul(n).floor()};function Bm(s){const{constant:e,creditsDivisor:t,exponent:n}=s;if(!Number.isFinite(e)||e<0)throw new Error(`AscensionSystem: invalid ascension.constant (K=${e}) — must be finite and >= 0`);if(!Number.isFinite(t)||t<=0)throw new Error(`AscensionSystem: invalid ascension.creditsDivisor (D=${t}) — must be finite and > 0`);if(!Number.isFinite(n)||n<=0)throw new Error(`AscensionSystem: invalid ascension.exponent (E=${n}) — must be finite and > 0`)}var Po,Do,cn,Yt,In,kt,ir,$i,Ha,yf;class km{constructor(e,t,n){Y(this,$i);Y(this,Po);Y(this,Do);Y(this,cn,Re);Y(this,Yt,Re);Y(this,In,Re);Y(this,kt,"UNINITIALIZED");Y(this,ir);Hm(t.ascension),X(this,Po,e),X(this,Do,n),X(this,ir,dt(t.ascension.dmMultiplierPerPoint))}initFresh(){if(v(this,kt)!=="UNINITIALIZED")throw new Error(`DarkMatterSystem.initFresh: expected UNINITIALIZED, got ${v(this,kt)} — fresh-init must run exactly once at boot, before restore()`);X(this,kt,"LIVE")}getState(){return v(this,kt)}getBalance(){return v(this,cn)}getTotalSpent(){return v(this,Yt)}getLifetimeMinted(){return v(this,In)}get(){return v(this,kt)!=="LIVE"?xt:xt.plus(v(this,ir).times(v(this,Yt)))}getMultiplierPreview(e){if(e.lt(Re))throw new Error(`DarkMatterSystem.getMultiplierPreview: additionalDM (${e.toString()}) must be >= 0 (EC-C3-15)`);return xt.plus(v(this,ir).times(v(this,Yt).plus(e)))}addDarkMatter(e,t){if(e.lt(Re))throw new Error(`DarkMatterSystem.addDarkMatter: amount (${e.toString()}) must be >= 0 (EC-C3-02)`);if(v(this,kt)!=="LIVE")throw new Error(`DarkMatterSystem.addDarkMatter: state is ${v(this,kt)}, must be LIVE — minting during boot/restore is a fault (EC-C3-12)`);X(this,cn,v(this,cn).plus(e)),X(this,In,v(this,In).plus(e)),re(this,$i,Ha).call(this)}spendDarkMatter(e){if(e.lt(Re))throw new Error(`DarkMatterSystem.spendDarkMatter: amount (${e.toString()}) must be >= 0 (EC-C3-04)`);if(v(this,kt)!=="LIVE")throw new Error(`DarkMatterSystem.spendDarkMatter: state is ${v(this,kt)}, must be LIVE — spending during boot/restore is a fault (systems R5)`);return e.eq(Re)?!0:v(this,cn).gte(e)?(X(this,cn,v(this,cn).minus(e)),X(this,Yt,v(this,Yt).plus(e)),re(this,$i,Ha).call(this),!0):!1}serialize(){return{darkMatter:Bi(v(this,cn)),totalDMSpent:Bi(v(this,Yt)),lifetimeDMMinted:Bi(v(this,In))}}restore(e,t,n){var c;if(v(this,kt)!=="UNINITIALIZED")throw new Error(`DarkMatterSystem.restore: expected UNINITIALIZED, got ${v(this,kt)} — restore must run once at boot, not over a live ledger`);X(this,kt,"RESTORING");const i=Ec(e),r=Ec(t);let o=Ec(n);if(o===Eh||o===fs){const l=Ss(r)?r:Re;Ss(i)?(o=i.plus(l),console.info("C3.restore: backfilled lifetimeDMMinted from darkMatter + (valid) totalDMSpent (legacy save)")):Ss(r)&&(o=l,console.info("C3.restore: backfilled lifetimeDMMinted from totalDMSpent only (legacy save, darkMatter unusable)"))}r===fs&&console.error("C3.restore: totalDMSpent corrupt — defaulting to 0 (multiplier history lost)"),X(this,Yt,Ss(r)?r:Re),X(this,In,Ss(o)?o:Re);const a=v(this,In).minus(v(this,Yt));X(this,cn,a.lt(Re)?Re:a),i===fs?console.warn("C3.restore: stored darkMatter corrupt/unusable — using ledger-derived value"):Ss(i)&&r!==fs&&!i.eq(v(this,cn))&&console.warn("C3.restore: stored darkMatter disagrees with ledger — using derived value"),v(this,Yt).gt(v(this,In))&&(console.error("C3.restore: LEDGER INCONSISTENCY — totalDMSpent > lifetimeDMMinted; clamping totalDMSpent down"),(c=v(this,Do))==null||c.call(this,"dm_ledger_inconsistency",{totalDMSpent:Bi(v(this,Yt)),lifetimeDMMinted:Bi(v(this,In))}),X(this,Yt,v(this,In)),X(this,cn,Re)),re(this,$i,yf).call(this)}seedForTest(e,t=Re){X(this,kt,e),X(this,Yt,t)}}Po=new WeakMap,Do=new WeakMap,cn=new WeakMap,Yt=new WeakMap,In=new WeakMap,kt=new WeakMap,ir=new WeakMap,$i=new WeakSet,Ha=function(){v(this,Po).emit(ee.DARK_MATTER_UPDATED,{balance:v(this,cn),totalSpent:v(this,Yt),multiplier:this.get()})},yf=function(){X(this,kt,"LIVE"),re(this,$i,Ha).call(this)};const Eh=Symbol("DarkMatter.ABSENT"),fs=Symbol("DarkMatter.INVALID");function Ss(s){return s!==Eh&&s!==fs}function Ec(s){if(s==null||s==="")return Eh;let e;try{e=dt(s)}catch(t){if(t instanceof Xs)return fs;throw t}return e.lt(Re)?fs:e}function Hm(s){const e=s==null?void 0:s.dmMultiplierPerPoint;if(!Number.isFinite(e)||e<=0)throw new Error(`DarkMatterSystem: invalid ascension.dmMultiplierPerPoint (${String(e)}) — must be finite and > 0 (EC-C3-10)`)}class Nt extends Error{constructor(t,n){super(n);B(this,"code");this.name="CatalogValidationError",this.code=t,Object.setPrototypeOf(this,Nt.prototype)}}const zm=new Set(["globalMultiplier","tierBoost","offlineExtension","automationUnlock"]),du=9;function fu(s){return hn(s)?s.max(xt):xt}function pu(s,e){if(!Number.isFinite(s))return 1;const t=Math.floor(s);return t<1?1:t>e?e:t}function Gm(s){if(!Number.isFinite(s.cost)||s.cost<0)throw new Nt("CATALOG_RESPEC_COST",`dmTree.respec.cost must be finite and >= 0 (got ${String(s.cost)})`)}var $t,Qt,gs,sr,Uo,Gi,_t,dn,pl,ml,_l,gl;class Vm{constructor(e,t,n,i){Y(this,dn);Y(this,$t,"UNINITIALIZED");Y(this,Qt);Y(this,gs);Y(this,sr);Y(this,Uo);Y(this,Gi);Y(this,_t,new Map);var r,o;X(this,Qt,Wm(((r=e.dmTree)==null?void 0:r.nodes)??[])),X(this,gs,n),X(this,sr,t),X(this,Uo,i),X(this,Gi,((o=e.dmTree)==null?void 0:o.respec)??{enabled:!1,cost:0,refundNodes:!1}),Gm(v(this,Gi))}initFresh(){if(v(this,$t)!=="UNINITIALIZED")throw new Error(`DMUpgradeTree.initFresh: expected UNINITIALIZED, got ${v(this,$t)} — fresh-init must run exactly once at boot, before restore()`);X(this,$t,"LIVE")}getState(){return v(this,$t)}getNodeLevel(e){return v(this,_t).get(e)??0}getNodeCost(e){const t=v(this,Qt).get(e);if(t===void 0)return Re;const n=v(this,_t).get(e)??0;return n>=t.maxLevel?Re:dt(t.baseCost).mul(dt(t.growth).pow(n)).floor()}canPurchase(e){const t=v(this,Qt).get(e);if(t===void 0||(v(this,_t).get(e)??0)>=t.maxLevel)return!1;for(const n of t.prereqs)if((v(this,_t).get(n)??0)<1)return!1;return re(this,dn,pl).call(this,t)?!1:v(this,gs).getBalance().gte(this.getNodeCost(e))}getCommittedCapstone(){for(const[e,t]of v(this,_t))if(t>=1){const n=v(this,Qt).get(e);if((n==null?void 0:n.isCapstone)===!0)return n.branch}return null}purchase(e){const t=v(this,Qt).get(e);if(t===void 0)return{ok:!1,reason:"unknown_node"};const n=v(this,_t).get(e)??0;if(n>=t.maxLevel)return{ok:!1,reason:"maxed"};for(const o of t.prereqs)if((v(this,_t).get(o)??0)<1)return{ok:!1,reason:"locked_prereq"};if(re(this,dn,pl).call(this,t))return{ok:!1,reason:"rival_capstone"};const i=this.getNodeCost(e);if(!v(this,gs).spendDarkMatter(i))return{ok:!1,reason:"insufficient_dm"};const r=n+1;return v(this,_t).set(e,r),v(this,sr).emit(ee.DM_UPGRADE_PURCHASED,{nodeId:e,level:r}),t.isCapstone&&v(this,sr).emit(ee.DM_TREE_CAPSTONE_SELECTED,{branch:t.branch}),{ok:!0,level:r}}respecCapstone(){if(!v(this,Gi).enabled)return{ok:!1,reason:"respec_disabled"};let e=null;for(const[t,n]of v(this,_t))if(n>=1){const i=v(this,Qt).get(t);if((i==null?void 0:i.isCapstone)===!0){e=t;break}}if(e===null)return{ok:!1,reason:"no_capstone"};if(!v(this,gs).spendDarkMatter(dt(v(this,Gi).cost)))return{ok:!1,reason:"insufficient_dm"};if(v(this,_t).delete(e),v(this,Gi).refundNodes)for(const t of[...v(this,_t).keys()]){const n=v(this,Qt).get(t);n!==void 0&&!n.isCapstone&&v(this,_t).delete(t)}return{ok:!0}}getExtraGlobalMultiplier(){return re(this,dn,ml).call(this,e=>e.effectType==="globalMultiplier")}getTierBoost(e){return re(this,dn,ml).call(this,t=>t.effectType==="tierBoost"&&t.effectParams.targetTier===e)}getOfflineCapBonusHours(){return re(this,dn,gl).call(this,e=>e.capHours??0)}getOfflineRateBonus(){return re(this,dn,gl).call(this,e=>e.rateBonus??0)}getWelcomeBackBonus(){return xt}isManagerPersistent(){if(v(this,$t)!=="LIVE")return!1;for(const[e,t]of v(this,_t)){if(t<1)continue;const n=v(this,Qt).get(e);if((n==null?void 0:n.effectType)==="automationUnlock"&&!n.isCapstone)return!0}return!1}shouldPersistManagers(){return this.isManagerPersistent()}getAutomationEfficiencyBonus(){if(v(this,$t)!=="LIVE")return xt;for(const[e,t]of v(this,_t)){if(t<1)continue;const n=v(this,Qt).get(e);if((n==null?void 0:n.effectType)==="automationUnlock"&&n.isCapstone){const i=n.effectParams.efficiencyBonus??0;return fu(xt.add(dt(i)))}}return xt}serialize(){const e=[];for(const[t,n]of v(this,_t))n>=1&&e.push({id:t,level:n});return e.sort((t,n)=>t.id<n.id?-1:t.id>n.id?1:0),e}restore(e){var n;if(v(this,$t)!=="UNINITIALIZED")throw new Error(`DMUpgradeTree.restore: expected UNINITIALIZED, got ${v(this,$t)} — restore must run exactly once at boot, in place of initFresh()`);X(this,$t,"RESTORING"),v(this,_t).clear();let t=null;for(const i of e){const r=v(this,Qt).get(i.id);if(r===void 0){console.warn(`C4.restore: unknown node id "${i.id}" — skipping (catalog migration, EC-C4-09)`);continue}if(r.isCapstone){if(!Number.isFinite(i.level)||i.level<1){console.warn(`C4.restore: capstone "${i.id}" has invalid level ${String(i.level)} — dropping (no fabricated commitment, EC-C4-10)`);continue}const o=pu(i.level,r.maxLevel);if(t===null)t=i.id,v(this,_t).set(i.id,o);else{const a=v(this,Qt).get(t);if(a!==void 0&&a.branch===r.branch)v(this,_t).set(i.id,o);else{const c=t,l=c<i.id?c:i.id,h=l===i.id?c:i.id;console.error(`C4.restore: two rival capstones "${t}" and "${i.id}" — keeping lowest id "${l}", dropping "${h}" (EC-C4-11)`),(n=v(this,Uo))==null||n.call(this,"dm_tree_multi_capstone",{kept:l,dropped:h}),v(this,_t).delete(h),l===i.id&&v(this,_t).set(i.id,o),t=l}}}else{const o=pu(i.level,r.maxLevel);o!==i.level&&console.warn(`C4.restore: node "${i.id}" level ${String(i.level)} coerced to ${o} in [1, ${r.maxLevel}] (EC-C4-10)`),v(this,_t).set(i.id,o)}}X(this,$t,"LIVE")}seedForTest(e,t={}){X(this,$t,e);for(const[n,i]of Object.entries(t))v(this,_t).set(n,i)}}$t=new WeakMap,Qt=new WeakMap,gs=new WeakMap,sr=new WeakMap,Uo=new WeakMap,Gi=new WeakMap,_t=new WeakMap,dn=new WeakSet,pl=function(e){if(!e.isCapstone)return!1;const t=this.getCommittedCapstone();return t!==null&&t!==e.branch},ml=function(e){if(v(this,$t)!=="LIVE")return xt;let t=xt;for(const{node:n,level:i}of re(this,dn,_l).call(this,e)){const r=n.effectParams.perLevelBonus??0;t=t.mul(xt.add(dt(r).mul(i)))}return fu(t)},_l=function(e){const t=[];for(const[n,i]of v(this,_t)){if(i<1)continue;const r=v(this,Qt).get(n);r!==void 0&&e(r)&&t.push({node:r,level:i})}return t.sort((n,i)=>n.node.id<i.node.id?-1:n.node.id>i.node.id?1:0),t},gl=function(e){if(v(this,$t)!=="LIVE")return 0;let t=0;for(const{node:n}of re(this,dn,_l).call(this,i=>i.effectType==="offlineExtension"))t+=e(n.effectParams);return t};function Wm(s){const e=new Map;for(const n of s){if(e.has(n.id))throw new Nt("CATALOG_DUP_ID",`dmTree: duplicate node id "${n.id}"`);e.set(n.id,n)}for(const n of s){if(!Number.isInteger(n.maxLevel)||n.maxLevel<1)throw new Nt("CATALOG_MAXLEVEL",`dmTree node "${n.id}": maxLevel must be a positive integer (got ${String(n.maxLevel)})`);if(!Number.isFinite(n.baseCost)||n.baseCost<1)throw new Nt("CATALOG_BASECOST",`dmTree node "${n.id}": baseCost must be finite and >= 1 (got ${String(n.baseCost)})`);if(!Number.isFinite(n.growth)||n.growth<1)throw new Nt("CATALOG_GROWTH",`dmTree node "${n.id}": growth must be finite and >= 1.0 (got ${String(n.growth)})`);if(n.maxLevel>1&&(n.growth<=1||Math.floor(n.baseCost*n.growth)<=n.baseCost))throw new Nt("CATALOG_FLAT_REPEATABLE",`dmTree node "${n.id}": repeatable node requires growth > 1.0 and a non-flat cost curve (got growth ${String(n.growth)}, baseCost ${String(n.baseCost)})`);if(!zm.has(n.effectType))throw new Nt("CATALOG_EFFECT_TYPE",`dmTree node "${n.id}": invalid effectType "${String(n.effectType)}"`);if(n.effectType==="globalMultiplier"||n.effectType==="tierBoost"){const i=n.effectParams.perLevelBonus;if(!Number.isFinite(i)||i<=0)throw new Nt("CATALOG_PERLEVELBONUS",`dmTree node "${n.id}": ${n.effectType} requires effectParams.perLevelBonus finite and > 0 (got ${String(i)})`)}if(n.effectType==="tierBoost"){const i=n.effectParams.targetTier;if(!Number.isInteger(i)||i<1||i>du)throw new Nt("CATALOG_TARGET_TIER",`dmTree node "${n.id}": tierBoost targetTier must be an integer in 1..${du} (got ${String(i)})`)}if(n.effectType==="offlineExtension"){const{capHours:i,rateBonus:r}=n.effectParams;if(!Number.isFinite(i)||i<0||!Number.isFinite(r)||r<0)throw new Nt("CATALOG_OFFLINE_PARAMS",`dmTree node "${n.id}": offlineExtension requires effectParams.capHours and rateBonus finite and >= 0 (got capHours ${String(i)}, rateBonus ${String(r)})`)}if(n.effectType==="automationUnlock"){if(n.isCapstone){const i=n.effectParams.efficiencyBonus;if(!Number.isFinite(i)||i<=0)throw new Nt("CATALOG_EFFICIENCYBONUS",`dmTree node "${n.id}": automationUnlock capstone requires effectParams.efficiencyBonus finite and > 0 (got ${String(i)})`)}else if(n.effectParams.efficiencyBonus!==void 0)throw new Nt("CATALOG_MISPLACED_EFFICIENCYBONUS",`dmTree node "${n.id}": a non-capstone automationUnlock (manager-persistence) must NOT declare effectParams.efficiencyBonus (the efficiency scalar is a Cortex CAPSTONE effect, F-C4-06)`)}}const t=new Map;for(const n of s){if(!n.isCapstone)continue;const i=t.get(n.branch);if(i!==void 0)throw new Nt("CATALOG_DUP_CAPSTONE",`dmTree branch "${n.branch}": more than one capstone ("${i}" and "${n.id}")`);t.set(n.branch,n.id)}for(const n of s)for(const i of n.prereqs){const r=e.get(i);if(r===void 0)throw new Nt("CATALOG_MISSING_PREREQ",`dmTree node "${n.id}": prereq "${i}" is not in the catalog`);if(r.branch!==n.branch)throw new Nt("CATALOG_CROSS_BRANCH_PREREQ",`dmTree node "${n.id}" (branch "${n.branch}"): prereq "${i}" is in a different branch ("${r.branch}")`)}Xm(s,e);for(const n of s)for(const i of n.prereqs){const r=e.get(i);if(r.tier>=n.tier)throw new Nt("CATALOG_PREREQ_TIER_ORDER",`dmTree node "${n.id}" (tier ${n.tier}): prereq "${i}" must be a strictly lower tier (got tier ${r.tier})`)}return e}function Xm(s,e){const r=new Map;for(const a of s)r.set(a.id,0);const o=a=>{r.set(a,1);const c=e.get(a);if(c!==void 0)for(const l of c.prereqs){const h=r.get(l);if(h===1)throw new Nt("CATALOG_CYCLE",`dmTree: prereq cycle detected involving "${a}" → "${l}"`);h===0&&o(l)}r.set(a,2)};for(const a of s)r.get(a.id)===0&&o(a.id)}const qm=1,Ym=9;var Ei,Oo,rr,or,ar,Fn,jn,Fo,Bo,ko,Zi,Sf,Tf,bf;class $m{constructor(e,t,n,i){Y(this,Zi);Y(this,Ei);Y(this,Oo);Y(this,rr);Y(this,or);Y(this,ar);Y(this,Fn,new Set);Y(this,jn,new Set);Y(this,Fo,!1);Y(this,Bo,0);Y(this,ko);var r;X(this,Ei,e),X(this,Oo,n),X(this,rr,i),X(this,or,t.upgrades.milestones.map(o=>o.ownedCount).slice().sort((o,a)=>o-a)),X(this,ar,(((r=t.milestones)==null?void 0:r.creditsScale)??[]).map(o=>({threshold:dt(o.threshold),thresholdNum:Number(o.threshold),name:o.name})).sort((o,a)=>o.threshold.gt(a.threshold)?1:o.threshold.lt(a.threshold)?-1:0)),X(this,ko,[v(this,Ei).on(ee.GENERATOR_PURCHASED,o=>re(this,Zi,Sf).call(this,o)),v(this,Ei).on(ee.CREDITS_UPDATED,()=>re(this,Zi,Tf).call(this)),v(this,Ei).on(ee.GENERATORS_RESET_COMPLETE,()=>re(this,Zi,bf).call(this))])}dispose(){for(const e of v(this,ko))e()}getState(){return{celebratedOwned:[...v(this,Fn)],celebratedLifetime:[...v(this,jn)]}}restore(e){if(v(this,Fn).clear(),e.celebratedOwned===void 0)for(let t=qm;t<=Ym;t++){const n=v(this,Oo).getOwned(t);for(const i of v(this,or))n>=i&&v(this,Fn).add(`${t}:${i}`)}else for(const t of e.celebratedOwned)v(this,Fn).add(t);if(v(this,jn).clear(),e.celebratedLifetime===void 0){const t=v(this,rr).getLifetimeCredits();for(const n of v(this,ar))t.gte(n.threshold)&&v(this,jn).add(`credits:${n.name}`)}else for(const t of e.celebratedLifetime)v(this,jn).add(t);X(this,Fo,!0)}}Ei=new WeakMap,Oo=new WeakMap,rr=new WeakMap,or=new WeakMap,ar=new WeakMap,Fn=new WeakMap,jn=new WeakMap,Fo=new WeakMap,Bo=new WeakMap,ko=new WeakMap,Zi=new WeakSet,Sf=function({tier:e,previousOwned:t,owned:n}){const i=v(this,or),r=i.filter(c=>t<c&&c<=n),o=r.filter(c=>!v(this,Fn).has(`${e}:${c}`)).length;if(o===0)return;const a=++sa(this,Bo)._;for(const c of r){const l=`${e}:${c}`;v(this,Fn).has(l)||(v(this,Fn).add(l),v(this,Ei).emit(ee.MILESTONE_REACHED,{type:"owned_count",tier:e,threshold:c,ordinal:i.indexOf(c)+1,seriesLength:i.length,burstId:a,burstSize:o}))}},Tf=function(){if(!v(this,Fo))return;const e=v(this,rr).getLifetimeCredits(),t=v(this,ar),n=t.filter(r=>e.gte(r.threshold)&&!v(this,jn).has(`credits:${r.name}`)).length;if(n===0)return;const i=++sa(this,Bo)._;for(let r=0;r<t.length;r++){const o=t[r],a=`credits:${o.name}`;!e.gte(o.threshold)||v(this,jn).has(a)||(v(this,jn).add(a),v(this,Ei).emit(ee.MILESTONE_REACHED,{type:"credits_scale",threshold:o.thresholdNum,name:o.name,ordinal:r+1,seriesLength:t.length,burstId:i,burstSize:n}))}},bf=function(){v(this,Fn).clear()};const Zr=1,Km="stellarforge.save",mu="stellarforge.save.backup",jm="stellarforge.save.corrupt";class yh extends Error{constructor(t,n){super(`save blob saveVersion ${t} is newer than this build's ${n} — refusing to interpret a future schema`);B(this,"saveVersion");B(this,"currentVersion");this.name="SaveVersionTooNewError",this.saveVersion=t,this.currentVersion=n,Object.setPrototypeOf(this,yh.prototype)}}const Zm=["x1","x10","xmax"],Sh="x1",Jm=1,Qm=9;function e_(){return{balance:"0",lifetimeCredits:"0",lifetimeBaseCredits:"0",buyMode:Sh}}function Af(){return{purchasedUpgrades:[],managerUnlocked:{}}}function t_(){return{celebratedOwned:[],celebratedLifetime:[]}}function _u(s){return{saveVersion:Zr,lastSeen:s,credits:e_(),generators:[],upgrades:Af(),darkMatter:"0",totalDMSpent:"0",lifetimeDMMinted:"0",dmUpgrades:[],milestones:t_()}}function n_(s){return JSON.stringify(s)}function Dr(s){return typeof s=="object"&&s!==null&&!Array.isArray(s)}function gu(s,e){const t=Dr(s)?s:{},n=typeof t.saveVersion=="number"?t.saveVersion:0;if(n>Zr)throw new yh(n,Zr);const i=Dr(t.credits)?t.credits:{},r={balance:typeof i.balance=="string"?i.balance:"0",lifetimeCredits:typeof i.lifetimeCredits=="string"?i.lifetimeCredits:"0",lifetimeBaseCredits:typeof i.lifetimeBaseCredits=="string"?i.lifetimeBaseCredits:"0",buyMode:i.buyMode??Sh},o=Dr(t.upgrades)?t.upgrades:void 0,a=o?{purchasedUpgrades:Array.isArray(o.purchasedUpgrades)?o.purchasedUpgrades:[],managerUnlocked:Dr(o.managerUnlocked)?o.managerUnlocked:{}}:Af(),c=Dr(t.milestones)?t.milestones:void 0,l=c?{celebratedOwned:Array.isArray(c.celebratedOwned)?c.celebratedOwned:[],celebratedLifetime:Array.isArray(c.celebratedLifetime)?c.celebratedLifetime:[]}:{celebratedOwned:void 0,celebratedLifetime:void 0};return{saveVersion:Zr,lastSeen:typeof t.lastSeen=="number"?t.lastSeen:0,credits:r,generators:Array.isArray(t.generators)?t.generators:[],upgrades:a,darkMatter:typeof t.darkMatter=="string"?t.darkMatter:"0",totalDMSpent:typeof t.totalDMSpent=="string"?t.totalDMSpent:"0",lifetimeDMMinted:typeof t.lifetimeDMMinted=="string"?t.lifetimeDMMinted:"0",dmUpgrades:Array.isArray(t.dmUpgrades)?t.dmUpgrades:[],milestones:l,...typeof t.integrity=="string"?{integrity:t.integrity}:{}}}function vu(s,e){const t=[];for(const r of s.generators){if(!r||typeof r.tier!="number"||r.tier<Jm||r.tier>Qm)continue;const o=typeof r.owned=="number"&&Number.isInteger(r.owned)&&r.owned>=0?r.owned:0;t.push({tier:r.tier,owned:o})}const n=Zm.includes(s.credits.buyMode)?s.credits.buyMode:Sh,i=i_(s.lastSeen,e);return{...s,lastSeen:i,credits:{...s.credits,buyMode:n},generators:t}}function i_(s,e){return typeof s!="number"||!Number.isFinite(s)||s<=0?e:s}const yc={autosaveIntervalMs:15e3,clockSkewToleranceMs:1e4,saveKey:Km},s_=5e3,r_=3e4,o_=0,a_=6e4;function xu(s,e,t){return Math.min(t,Math.max(e,s))}function c_(s){const e=s.save,t=e==null?void 0:e.autosaveIntervalMs,n=e==null?void 0:e.clockSkewToleranceMs,i=e==null?void 0:e.saveKey;return{autosaveIntervalMs:typeof t=="number"&&Number.isFinite(t)?xu(t,s_,r_):yc.autosaveIntervalMs,clockSkewToleranceMs:typeof n=="number"&&Number.isFinite(n)?xu(n,o_,a_):yc.clockSkewToleranceMs,saveKey:typeof i=="string"&&i.trim().length>0?i:yc.saveKey}}const l_=["balance","lifetimeCredits","lifetimeBaseCredits"];function h_(s=globalThis,e=globalThis.document){return{setTimeout:(t,n)=>s.setTimeout(t,n),clearTimeout:t=>s.clearTimeout(t),addEventListener:(t,n)=>{t==="visibilitychange"?e.addEventListener("visibilitychange",n):s.addEventListener("pagehide",n)},removeEventListener:(t,n)=>{t==="visibilitychange"?e.removeEventListener("visibilitychange",n):s.removeEventListener("pagehide",n)},isHidden:()=>e.visibilityState==="hidden"}}const u_=2e3;var Zn,Kt,cr,Jn,vs,Qn,lr,Vi,hr,ur,dr,en,yi,fr,Ho,zo,Go,ft,za,vl,xl,wf,Ml,El,Rf,Cf,If,Lf;class d_{constructor(e){Y(this,ft);Y(this,Zn);Y(this,Kt);Y(this,cr);Y(this,Jn);Y(this,vs);Y(this,Qn);Y(this,lr);Y(this,Vi,0);Y(this,hr,!0);Y(this,ur,Number.NEGATIVE_INFINITY);Y(this,dr,!1);Y(this,en);Y(this,yi,!1);Y(this,fr);Y(this,Ho,Number.NEGATIVE_INFINITY);Y(this,zo,()=>{var e;(e=v(this,en))!=null&&e.isHidden()&&this.saveNow()});Y(this,Go,()=>{this.saveNow()});X(this,Zn,e.storage),X(this,Kt,e.collaborators),X(this,cr,e.config),X(this,Jn,e.bus),X(this,vs,e.now??(()=>Date.now())),X(this,Qn,c_(e.config)),X(this,lr,e.tabId??"d1"),X(this,en,e.env)}get saveKey(){return v(this,Qn).saveKey}load(){const e=v(this,vs).call(this);X(this,dr,!1);const t=v(this,Zn).getItem(v(this,Qn).saveKey);let n;if(t===null)n=_u(e);else{let i;try{i=JSON.parse(t)}catch{return n=re(this,ft,xl).call(this,t,e,"corrupt_primary"),re(this,ft,vl).call(this,n),{lastSeen:n.lastSeen}}const r=i.savedAt;typeof r=="number"&&Number.isFinite(r)&&X(this,ur,r);const o=gu(i,v(this,cr)),a=vu(o,e),c=re(this,ft,El).call(this,a.credits);c!==null?n=re(this,ft,wf).call(this,t,a,e,c):(n={...a,lastSeen:re(this,ft,Rf).call(this,a.lastSeen,e)},X(this,dr,!0))}return re(this,ft,vl).call(this,n),{lastSeen:n.lastSeen}}saveNow(){if(!v(this,hr))return;const e=v(this,vs).call(this);re(this,ft,Cf).call(this);const t=n_({...re(this,ft,Lf).call(this),tabId:v(this,lr),savedAt:e});try{v(this,Zn).setItem(v(this,Qn).saveKey,t)}catch(n){re(this,ft,If).call(this,n),v(this,hr)&&v(this,yi)&&re(this,ft,za).call(this);return}if(X(this,ur,e),v(this,dr))try{v(this,Zn).setItem(mu,t)}catch{}v(this,yi)&&re(this,ft,za).call(this)}startAutosave(){v(this,yi)||v(this,en)!==void 0&&(X(this,yi,!0),v(this,en).addEventListener("visibilitychange",v(this,zo)),v(this,en).addEventListener("pagehide",v(this,Go)),re(this,ft,za).call(this))}stopAutosave(){v(this,yi)&&(X(this,yi,!1),v(this,en)!==void 0&&(v(this,en).removeEventListener("visibilitychange",v(this,zo)),v(this,en).removeEventListener("pagehide",v(this,Go)),v(this,en).clearTimeout(v(this,fr))))}onAscensionSaved(){this.saveNow()}onMajorPurchase(){const e=v(this,vs).call(this);e<v(this,Ho)||(X(this,Ho,e+u_),this.saveNow())}getLastSeen(){return v(this,Vi)}resetLastSeen(e){Number.isFinite(e)&&X(this,Vi,Math.max(e,v(this,Vi)))}}Zn=new WeakMap,Kt=new WeakMap,cr=new WeakMap,Jn=new WeakMap,vs=new WeakMap,Qn=new WeakMap,lr=new WeakMap,Vi=new WeakMap,hr=new WeakMap,ur=new WeakMap,dr=new WeakMap,en=new WeakMap,yi=new WeakMap,fr=new WeakMap,Ho=new WeakMap,zo=new WeakMap,Go=new WeakMap,ft=new WeakSet,za=function(){v(this,en)!==void 0&&(v(this,en).clearTimeout(v(this,fr)),X(this,fr,v(this,en).setTimeout(()=>{this.saveNow()},v(this,Qn).autosaveIntervalMs)))},vl=function(e){var t,n,i;v(this,Kt).upgrades.loadState(e.upgrades),v(this,Kt).generators.restore(e.generators),v(this,Kt).credits.restore(e.credits),(t=v(this,Kt).darkMatter)==null||t.restore(e.darkMatter,e.totalDMSpent,e.lifetimeDMMinted),(n=v(this,Kt).dmTree)==null||n.restore(e.dmUpgrades),(i=v(this,Kt).milestones)==null||i.restore(e.milestones),X(this,Vi,e.lastSeen)},xl=function(e,t,n){v(this,Zn).setItem(jm,e);const i=re(this,ft,Ml).call(this,t);return i!==null?(i.lastSeen=t,v(this,Jn).emit(ee.SAVE_LOAD_FAILED,{reason:n,recoveredFromBackup:!0}),i):(v(this,Jn).emit(ee.SAVE_LOAD_FAILED,{reason:n,recoveredFromBackup:!1}),_u(t))},wf=function(e,t,n,i){const r=re(this,ft,Ml).call(this,n);return r!==null?(v(this,Jn).emit(ee.SAVE_FAILED,{reason:"corrupted_field",field:i}),{...t,credits:r.credits,lastSeen:n}):re(this,ft,xl).call(this,e,n,"corrupted_field")},Ml=function(e){const t=v(this,Zn).getItem(mu);if(t===null)return null;try{const n=gu(JSON.parse(t),v(this,cr)),i=vu(n,e);return re(this,ft,El).call(this,i.credits)!==null?null:i}catch{return null}},El=function(e){for(const t of l_)try{io(e[t])}catch{return t}return null},Rf=function(e,t){return e>t+v(this,Qn).clockSkewToleranceMs?t:e},Cf=function(){let e;try{e=v(this,Zn).getItem(v(this,Qn).saveKey)}catch{return}if(e===null)return;let t;try{t=JSON.parse(e)}catch{return}const n=typeof t.savedAt=="number"?t.savedAt:void 0,i=typeof t.tabId=="string"?t.tabId:void 0;n!==void 0&&i!==void 0&&n>v(this,ur)&&i!==v(this,lr)&&v(this,Jn).emit(ee.SAVE_CONFLICT,{otherSavedAt:n})},If=function(e){const t=e==null?void 0:e.name;if(t==="QuotaExceededError"||t==="NS_ERROR_DOM_QUOTA_REACHED"){v(this,Jn).emit(ee.SAVE_FAILED,{reason:"quota_exceeded"});return}X(this,hr,!1),v(this,Jn).emit(ee.SAVE_FAILED,{reason:"storage_unavailable"})},Lf=function(){var t,n,i;const e=(t=v(this,Kt).darkMatter)==null?void 0:t.serialize();return{saveVersion:Zr,lastSeen:v(this,Vi),credits:v(this,Kt).credits.serialize(),generators:v(this,Kt).generators.serialize(),upgrades:v(this,Kt).upgrades.getState(),darkMatter:(e==null?void 0:e.darkMatter)??"0",totalDMSpent:(e==null?void 0:e.totalDMSpent)??"0",lifetimeDMMinted:(e==null?void 0:e.lifetimeDMMinted)??"0",dmUpgrades:((n=v(this,Kt).dmTree)==null?void 0:n.serialize())??[],milestones:((i=v(this,Kt).milestones)==null?void 0:i.getState())??{celebratedOwned:[],celebratedLifetime:[]}}};const f_=36e5,p_=1e3,m_=5e3;var pr,xs,Vo,Wo,mr,Xo,qo,Yo,$o,Ko,jo,Wn,Nf,Pf,yl,Df;class __{constructor(e){Y(this,Wn);Y(this,pr);Y(this,xs);Y(this,Vo);Y(this,Wo);Y(this,mr);Y(this,Xo);Y(this,qo);Y(this,Yo);Y(this,$o);Y(this,Ko,!1);Y(this,jo,!1);X(this,pr,e.bus),X(this,xs,e.clock),X(this,Vo,e.baseRate),X(this,Wo,e.deposit),X(this,mr,e.nowProvider),X(this,Xo,e.config.offline.earningRate),X(this,qo,e.config.offline.baseCapHours),X(this,Yo,e.briefThresholdMs??m_),X(this,$o,[v(this,pr).on(ee.CLOCK_GAP_DETECTED,t=>re(this,Wn,Nf).call(this,t))])}dispose(){for(const e of v(this,$o))e()}markRestoreComplete(){X(this,jo,!0)}applyOfflineProgress(){if(v(this,Ko))return;X(this,Ko,!0);const e=v(this,xs).getLastSeen(),t=v(this,mr).call(this)-e;re(this,Wn,yl).call(this,t,"load")}}pr=new WeakMap,xs=new WeakMap,Vo=new WeakMap,Wo=new WeakMap,mr=new WeakMap,Xo=new WeakMap,qo=new WeakMap,Yo=new WeakMap,$o=new WeakMap,Ko=new WeakMap,jo=new WeakMap,Wn=new WeakSet,Nf=function(e){if(!v(this,jo))return;const t=v(this,mr).call(this);v(this,xs).resetLastSeen(t);const n=v(this,xs).getLastSeen()>t;re(this,Wn,yl).call(this,e.elapsedMs,"gap",n?"reset_not_applied":void 0)},Pf=function(){return v(this,qo)*f_},yl=function(e,t,n){let i=n,r=e;Number.isFinite(e)||(r=0,i="non_finite");const o=re(this,Wn,Pf).call(this),a=g_(r,0,o),c=a/p_;let l=v(this,Vo).getTotalBaseRate();hn(l)||(l=Re,i="non_finite");const h=v(this,Xo)*c;let u;Number.isFinite(h)?u=l.times(dt(h)):(i="non_finite",u=Re);const d=re(this,Wn,Df).call(this,t,e,a,i);u.gt(Re)&&hn(u)&&v(this,Wo).addOfflineEarnings(u);const p={baseLump:u,elapsedSeconds:c,reason:d};i!==void 0&&(p.diagnostic=i),v(this,pr).emit(ee.OFFLINE_EARNINGS_APPLIED,p)},Df=function(e,t,n,i){return e==="gap"?"gap":i==="non_finite"?"brief":t<0?"clock_back":n<v(this,Yo)?"brief":"away"};function g_(s,e,t){return Math.min(t,Math.max(e,s))}const v_={maxCatchupSteps:5,gapThresholdMs:3e3,liveBudgetCeilingMs:500};function x_(s){const e=s.now??(()=>Date.now()),t={...v_,...s.clockTunables},n=new Sm,i=lf(s.configJson),r=new bm({tickRateMs:i.currencies.credits.tickRateMs,maxCatchupSteps:t.maxCatchupSteps,gapThresholdMs:t.gapThresholdMs,liveBudgetCeilingMs:t.liveBudgetCeilingMs},n),o=new km(n,i),a=new Vm(i,n,o),c=gm(o,a);let l=null;const u=vm({getBoostMultiplier:M=>l===null?xt:l.getBoostMultiplier(M)},a),d=new Am(i,n,u),p=new Cm(i,n,d,c,r),_=new Pm(i,n,d,p,a);l=_;const g=i.upgrades.managers.map((M,L)=>L+1),m=new Dm({bus:n,clock:r,b2:d,b3:p,b4:_,reserveFraction:i.upgrades.automationReserveFraction,enabledTiers:g}),f=new Um(n,d),S=new Fm(i,n,d,p,_);S.setDarkMatterProvider(o),S.assertRealProviderInstalled();const b=new $m(n,i,d,p),x={serialize:()=>{const M=p.serialize();return{balance:M.balance,lifetimeCredits:M.lifetimeCredits,lifetimeBaseCredits:M.lifetimeBaseCredits,buyMode:M.buyMode??"x1"}},restore:M=>p.restore(M)},C=new d_({storage:s.storage,collaborators:{upgrades:_,generators:d,credits:x,darkMatter:o,dmTree:a,milestones:b},config:i,bus:n,now:e,tabId:s.tabId,env:s.autosaveEnv}),w=new __({config:i,bus:n,clock:C,baseRate:d,deposit:p,nowProvider:e});let R;const I=n.on(ee.OFFLINE_EARNINGS_APPLIED,M=>{R=M}),{lastSeen:T}=C.load();return w.applyOfflineProgress(),C.resetLastSeen(e()),w.markRestoreComplete(),I(),{bus:n,clock:r,generators:d,credits:p,upgrades:_,automation:m,epoch:f,ascension:S,darkMatter:o,dmTree:a,milestones:b,save:C,offline:w,loadedLastSeen:T,offlineReport:R,dispose(){w.dispose(),b.dispose(),f.dispose(),p.dispose(),d.dispose()}}}const M_=30,Mu=4,Sc=1500,E_=[{key:"Space",intent:ee.INTENT_TAP_FORGE}];var We=(s=>(s[s.GAMEPLAY=0]="GAMEPLAY",s[s.SOFT_OVERLAY=1]="SOFT_OVERLAY",s[s.MODAL=2]="MODAL",s[s.DISABLED=3]="DISABLED",s))(We||{});const Eu=4,y_={[ee.INTENT_TAP_FORGE]:{[We.GAMEPLAY]:"live",[We.SOFT_OVERLAY]:"live",[We.MODAL]:"suppressed",[We.DISABLED]:"suppressed"},[ee.INTENT_BUY_GENERATOR]:{[We.GAMEPLAY]:"live",[We.SOFT_OVERLAY]:"suppressed",[We.MODAL]:"suppressed",[We.DISABLED]:"suppressed"},[ee.INTENT_SET_BUY_MODE]:{[We.GAMEPLAY]:"live",[We.SOFT_OVERLAY]:"suppressed",[We.MODAL]:"suppressed",[We.DISABLED]:"suppressed"},[ee.INTENT_CONFIRM_ASCENSION]:{[We.GAMEPLAY]:"suppressed",[We.SOFT_OVERLAY]:"suppressed",[We.MODAL]:"live",[We.DISABLED]:"suppressed"},[ee.INTENT_HOLD_PROGRESS]:{[We.GAMEPLAY]:"suppressed",[We.SOFT_OVERLAY]:"suppressed",[We.MODAL]:"live",[We.DISABLED]:"suppressed"},[ee.INTENT_DISMISS_MODAL]:{[We.GAMEPLAY]:"suppressed",[We.SOFT_OVERLAY]:"suppressed",[We.MODAL]:"live",[We.DISABLED]:"suppressed"},[ee.INTENT_DISMISS_OVERLAY]:{[We.GAMEPLAY]:"suppressed",[We.SOFT_OVERLAY]:"live",[We.MODAL]:"suppressed",[We.DISABLED]:"suppressed"}};class S_{constructor(e,t=E_,n={}){B(this,"_bus");B(this,"_keymap");B(this,"_hitAreas",[]);B(this,"_presses",new Map);B(this,"_lastAcceptedDown",new Map);B(this,"_hold");B(this,"_contextStack");B(this,"_logger");this._bus=e,this._keymap=t,this._contextStack=[n.initialContext??We.GAMEPLAY],this._logger=n.logger}get context(){return this._contextStack[this._contextStack.length-1]}pushContext(e){var t;if(this._contextStack.length>=Eu){(t=this._logger)==null||t.call(this,`[A4 input] pushContext rejected: stack already at max depth ${Eu} (attempted context ${We[e]}). Likely a consumer push/pop imbalance.`);return}this._hold!==void 0&&(this._bus.emit(ee.INTENT_HOLD_PROGRESS,{ratio:0,source:this._hold.source}),this._hold=void 0),this._presses.clear(),this._contextStack.push(e)}popContext(){this._contextStack.length>1&&this._contextStack.pop()}markReady(){this._contextStack=[We.GAMEPLAY]}get keymap(){return this._keymap}registerHitArea(e){if(e.kind==="buy"&&!(Number.isInteger(e.tier)&&e.tier>=1))throw new Error(`InputTranslator.registerHitArea: buy area '${e.id}' requires an integer tier >= 1 (got ${String(e.tier)}) — a wrong tier buys the wrong generator (AC-A4-03).`);this._hitAreas.push(e)}clearHitAreas(){this._hitAreas.length=0,this._lastAcceptedDown.clear(),this._hold=void 0}onPointerDown(e){if(this.context===We.DISABLED)return;const t=this._resolveHitArea(e.x,e.y);if(t===void 0)return;const n=this._lastAcceptedDown.get(t.id);if(!this._isSyntheticDup(e,n)){if(this._lastAcceptedDown.set(t.id,{wasTouch:e.wasTouch,x:e.x,y:e.y,t:e.timeStamp,pointerId:e.pointerId}),t.kind==="forge"){this._isLive(ee.INTENT_TAP_FORGE)&&this._bus.emit(ee.INTENT_TAP_FORGE,{source:this._source(e)});return}if(t.kind==="ascension"){this._hold={pointerId:e.pointerId,area:t,heldMs:0,confirmed:!1,source:this._source(e),inside:!0};return}this._presses.set(e.pointerId,{area:t,state:"pressed"})}}onPointerUp(e){if(this.context===We.DISABLED)return;if(this._hold!==void 0&&this._hold.pointerId===e.pointerId){this._hold=void 0;return}const t=this._presses.get(e.pointerId);if(t===void 0||(this._presses.delete(e.pointerId),t.state==="cancelled")||!this._inside(t.area,e.x,e.y))return;const n=this._source(e);switch(t.area.kind){case"buy":this._isLive(ee.INTENT_BUY_GENERATOR)&&this._bus.emit(ee.INTENT_BUY_GENERATOR,{tier:t.area.tier,source:n});break;case"buyMode":this._isLive(ee.INTENT_SET_BUY_MODE)&&this._bus.emit(ee.INTENT_SET_BUY_MODE,{mode:t.area.mode,source:n});break;case"dismissModal":this._isLive(ee.INTENT_DISMISS_MODAL)&&(this._bus.emit(ee.INTENT_DISMISS_MODAL,{source:n}),this.context===We.MODAL&&this.popContext());break;case"dismissOverlay":this._isLive(ee.INTENT_DISMISS_OVERLAY)&&(this._bus.emit(ee.INTENT_DISMISS_OVERLAY,{source:n}),this.context===We.SOFT_OVERLAY&&this.popContext());break}}onPointerMove(e){if(this.context===We.DISABLED)return;if(this._hold!==void 0&&this._hold.pointerId===e.pointerId){const n=this._inside(this._hold.area,e.x,e.y);this._hold.inside&&!n?(this._hold.inside=!1,this._hold.heldMs=0,this._bus.emit(ee.INTENT_HOLD_PROGRESS,{ratio:0,source:this._hold.source})):!this._hold.inside&&n&&(this._hold.inside=!0);return}const t=this._presses.get(e.pointerId);t===void 0||t.state!=="pressed"||this._inside(t.area,e.x,e.y)||(t.state="cancelled")}onPointerCancel(e){this._hold!==void 0&&this._hold.pointerId===e&&(this._bus.emit(ee.INTENT_HOLD_PROGRESS,{ratio:0,source:this._hold.source}),this._hold=void 0),this._presses.delete(e)}onBlur(){this._hold!==void 0&&(this._bus.emit(ee.INTENT_HOLD_PROGRESS,{ratio:0,source:this._hold.source}),this._hold=void 0),this._presses.clear()}onKeyDown(e){var n;if(this.context===We.DISABLED)return;const t=this._keymap.find(i=>i.key===e.key);t!==void 0&&((n=e.preventDefault)==null||n.call(e),!e.repeat&&this._isLive(t.intent)&&this._bus.emit(t.intent,{source:"key"}))}tick(e){if(this.context===We.DISABLED||this._hold===void 0||!this._hold.inside)return;this._hold.heldMs+=Math.max(0,e);const t=Math.min(this._hold.heldMs,Sc);if(this._hold.heldMs>=Sc){this._hold.confirmed||(this._hold.confirmed=!0,this._isLive(ee.INTENT_CONFIRM_ASCENSION)&&this._bus.emit(ee.INTENT_CONFIRM_ASCENSION,{source:this._hold.source}));return}if(this._isLive(ee.INTENT_HOLD_PROGRESS)){const n=t/Sc;this._bus.emit(ee.INTENT_HOLD_PROGRESS,{ratio:n,source:this._hold.source})}}_isLive(e){return y_[e][this.context]==="live"}_isSyntheticDup(e,t){return t!==void 0&&t.wasTouch&&!e.wasTouch&&e.timeStamp-t.t<M_&&Math.abs(e.x-t.x)<=Mu&&Math.abs(e.y-t.y)<=Mu&&e.pointerId!==t.pointerId}_resolveHitArea(e,t){for(let n=this._hitAreas.length-1;n>=0;n-=1){const i=this._hitAreas[n];if(i!==void 0&&this._inside(i,e,t))return i}}_inside(e,t,n){const i=e.bounds;return t>=i.x&&t<i.x+i.width&&n>=i.y&&n<i.y+i.height}_source(e){return e.wasTouch===!0?"touch":"pointer"}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Th="171",T_=0,yu=1,b_=2,Uf=1,Of=2,fi=3,Ri=0,un=1,Bn=2,qi=0,qs=1,pi=2,Su=3,Tu=4,A_=5,us=100,w_=101,R_=102,C_=103,I_=104,L_=200,N_=201,P_=202,D_=203,Sl=204,Tl=205,U_=206,O_=207,F_=208,B_=209,k_=210,H_=211,z_=212,G_=213,V_=214,bl=0,Al=1,wl=2,_r=3,Rl=4,Cl=5,Il=6,Ll=7,Ff=0,W_=1,X_=2,Yi=0,q_=1,Y_=2,$_=3,Bf=4,K_=5,j_=6,Z_=7,bu="attached",J_="detached",kf=300,gr=301,vr=302,Nl=303,Pl=304,lc=306,xr=1e3,Wi=1001,ja=1002,nn=1003,Hf=1004,$r=1005,Mn=1006,Ga=1007,Si=1008,Ci=1009,zf=1010,Gf=1011,ro=1012,bh=1013,Ms=1014,zn=1015,Jo=1016,Ah=1017,wh=1018,Mr=1020,Vf=35902,Wf=1021,Xf=1022,Ln=1023,qf=1024,Yf=1025,Ys=1026,Er=1027,Rh=1028,Ch=1029,$f=1030,Ih=1031,Lh=1033,Va=33776,Wa=33777,Xa=33778,qa=33779,Dl=35840,Ul=35841,Ol=35842,Fl=35843,Bl=36196,kl=37492,Hl=37496,zl=37808,Gl=37809,Vl=37810,Wl=37811,Xl=37812,ql=37813,Yl=37814,$l=37815,Kl=37816,jl=37817,Zl=37818,Jl=37819,Ql=37820,eh=37821,Ya=36492,th=36494,nh=36495,Kf=36283,ih=36284,sh=36285,rh=36286,oo=2300,ao=2301,Tc=2302,Au=2400,wu=2401,Ru=2402,Q_=2500,eg=0,jf=1,oh=2,tg=3200,ng=3201,Zf=0,ig=1,ki="",Ht="srgb",sn="srgb-linear",Za="linear",ut="srgb",Ts=7680,Cu=519,sg=512,rg=513,og=514,Jf=515,ag=516,cg=517,lg=518,hg=519,ah=35044,Iu="300 es",Ti=2e3,Ja=2001;class wr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Lu=1234567;const Jr=Math.PI/180,yr=180/Math.PI;function Gn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xt[s&255]+Xt[s>>8&255]+Xt[s>>16&255]+Xt[s>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[t&63|128]+Xt[t>>8&255]+"-"+Xt[t>>16&255]+Xt[t>>24&255]+Xt[n&255]+Xt[n>>8&255]+Xt[n>>16&255]+Xt[n>>24&255]).toLowerCase()}function $e(s,e,t){return Math.max(e,Math.min(t,s))}function Nh(s,e){return(s%e+e)%e}function ug(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function dg(s,e,t){return s!==e?(t-s)/(e-s):0}function Qr(s,e,t){return(1-t)*s+t*e}function fg(s,e,t,n){return Qr(s,e,1-Math.exp(-t*n))}function pg(s,e=1){return e-Math.abs(Nh(s,e*2)-e)}function mg(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function _g(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function gg(s,e){return s+Math.floor(Math.random()*(e-s+1))}function vg(s,e){return s+Math.random()*(e-s)}function xg(s){return s*(.5-Math.random())}function Mg(s){s!==void 0&&(Lu=s);let e=Lu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Eg(s){return s*Jr}function yg(s){return s*yr}function Sg(s){return(s&s-1)===0&&s!==0}function Tg(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function bg(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Ag(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),p=r((n-e)/2),_=o((n-e)/2);switch(i){case"XYX":s.set(a*h,c*u,c*d,a*l);break;case"YZY":s.set(c*d,a*h,c*u,a*l);break;case"ZXZ":s.set(c*u,c*d,a*h,a*l);break;case"XZX":s.set(a*h,c*_,c*p,a*l);break;case"YXY":s.set(c*p,a*h,c*_,a*l);break;case"ZYZ":s.set(c*_,c*p,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function kn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function lt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Qf={DEG2RAD:Jr,RAD2DEG:yr,generateUUID:Gn,clamp:$e,euclideanModulo:Nh,mapLinear:ug,inverseLerp:dg,lerp:Qr,damp:fg,pingpong:pg,smoothstep:mg,smootherstep:_g,randInt:gg,randFloat:vg,randFloatSpread:xg,seededRandom:Mg,degToRad:Eg,radToDeg:yg,isPowerOfTwo:Sg,ceilPowerOfTwo:Tg,floorPowerOfTwo:bg,setQuaternionFromProperEuler:Ag,normalize:lt,denormalize:kn};class Xe{constructor(e=0,t=0){Xe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,t,n,i,r,o,a,c,l){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l)}set(e,t,n,i,r,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],p=n[5],_=n[8],g=i[0],m=i[3],f=i[6],S=i[1],b=i[4],x=i[7],C=i[2],w=i[5],R=i[8];return r[0]=o*g+a*S+c*C,r[3]=o*m+a*b+c*w,r[6]=o*f+a*x+c*R,r[1]=l*g+h*S+u*C,r[4]=l*m+h*b+u*w,r[7]=l*f+h*x+u*R,r[2]=d*g+p*S+_*C,r[5]=d*m+p*b+_*w,r[8]=d*f+p*x+_*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,p=l*r-o*c,_=t*u+n*d+i*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=u*g,e[1]=(i*l-h*n)*g,e[2]=(a*n-i*o)*g,e[3]=d*g,e[4]=(h*t-i*c)*g,e[5]=(i*r-a*t)*g,e[6]=p*g,e[7]=(n*c-l*t)*g,e[8]=(o*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(bc.makeScale(e,t)),this}rotate(e){return this.premultiply(bc.makeRotation(-e)),this}translate(e,t){return this.premultiply(bc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const bc=new He;function ep(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function co(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function wg(){const s=co("canvas");return s.style.display="block",s}const Nu={};function Vs(s){s in Nu||(Nu[s]=!0,console.warn(s))}function Rg(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Cg(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Ig(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Pu=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Du=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Lg(){const s={enabled:!0,workingColorSpace:sn,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ut&&(i.r=wi(i.r),i.g=wi(i.g),i.b=wi(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ut&&(i.r=$s(i.r),i.g=$s(i.g),i.b=$s(i.b))),i},fromWorkingColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},toWorkingColorSpace:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ki?Za:this.spaces[i].transfer},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[sn]:{primaries:e,whitePoint:n,transfer:Za,toXYZ:Pu,fromXYZ:Du,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ht},outputColorSpaceConfig:{drawingBufferColorSpace:Ht}},[Ht]:{primaries:e,whitePoint:n,transfer:ut,toXYZ:Pu,fromXYZ:Du,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ht}}}),s}const Qe=Lg();function wi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function $s(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let bs;class Ng{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{bs===void 0&&(bs=co("canvas")),bs.width=e.width,bs.height=e.height;const n=bs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=bs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=co("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=wi(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(wi(t[n]/255)*255):t[n]=wi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Pg=0;class tp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Pg++}),this.uuid=Gn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Ac(i[o].image)):r.push(Ac(i[o]))}else r=Ac(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ac(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ng.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Dg=0;class Ft extends wr{constructor(e=Ft.DEFAULT_IMAGE,t=Ft.DEFAULT_MAPPING,n=Wi,i=Wi,r=Mn,o=Si,a=Ln,c=Ci,l=Ft.DEFAULT_ANISOTROPY,h=ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dg++}),this.uuid=Gn(),this.name="",this.source=new tp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xr:e.x=e.x-Math.floor(e.x);break;case Wi:e.x=e.x<0?0:1;break;case ja:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xr:e.y=e.y-Math.floor(e.y);break;case Wi:e.y=e.y<0?0:1;break;case ja:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ft.DEFAULT_IMAGE=null;Ft.DEFAULT_MAPPING=kf;Ft.DEFAULT_ANISOTROPY=1;class rt{constructor(e=0,t=0,n=0,i=1){rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],_=c[9],g=c[2],m=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(_+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(l+1)/2,x=(p+1)/2,C=(f+1)/2,w=(h+d)/4,R=(u+g)/4,I=(_+m)/4;return b>x&&b>C?b<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(b),i=w/n,r=R/n):x>C?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=w/i,r=I/i):C<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(C),n=R/r,i=I/r),this.set(n,i,r,t),this}let S=Math.sqrt((m-_)*(m-_)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(m-_)/S,this.y=(u-g)/S,this.z=(d-h)/S,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ug extends wr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ft(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new tp(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Es extends Ug{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class np extends Ft{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=nn,this.minFilter=nn,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Og extends Ft{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=nn,this.minFilter=nn,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ji{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const d=r[o+0],p=r[o+1],_=r[o+2],g=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=_,e[t+3]=g;return}if(u!==g||c!==d||l!==p||h!==_){let m=1-a;const f=c*d+l*p+h*_+u*g,S=f>=0?1:-1,b=1-f*f;if(b>Number.EPSILON){const C=Math.sqrt(b),w=Math.atan2(C,f*S);m=Math.sin(m*w)/C,a=Math.sin(a*w)/C}const x=a*S;if(c=c*m+d*x,l=l*m+p*x,h=h*m+_*x,u=u*m+g*x,m===1-a){const C=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=C,l*=C,h*=C,u*=C}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],d=r[o+1],p=r[o+2],_=r[o+3];return e[t]=a*_+h*u+c*p-l*d,e[t+1]=c*_+h*d+l*u-a*p,e[t+2]=l*_+h*p+a*d-c*u,e[t+3]=h*_-a*u-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),d=c(n/2),p=c(i/2),_=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*p*_,this._y=l*p*u-d*h*_,this._z=l*h*_+d*p*u,this._w=l*h*u-d*p*_;break;case"YXZ":this._x=d*h*u+l*p*_,this._y=l*p*u-d*h*_,this._z=l*h*_-d*p*u,this._w=l*h*u+d*p*_;break;case"ZXY":this._x=d*h*u-l*p*_,this._y=l*p*u+d*h*_,this._z=l*h*_+d*p*u,this._w=l*h*u-d*p*_;break;case"ZYX":this._x=d*h*u-l*p*_,this._y=l*p*u+d*h*_,this._z=l*h*_-d*p*u,this._w=l*h*u+d*p*_;break;case"YZX":this._x=d*h*u+l*p*_,this._y=l*p*u+d*h*_,this._z=l*h*_-d*p*u,this._w=l*h*u-d*p*_;break;case"XZY":this._x=d*h*u-l*p*_,this._y=l*p*u-d*h*_,this._z=l*h*_+d*p*u,this._w=l*h*u+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-i)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(r+l)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(r-l)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-i)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,n=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Uu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Uu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=i+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return wc.copy(this).projectOnVector(e),this.sub(wc)}reflect(e){return this.sub(wc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wc=new N,Uu=new Ji;class En{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Dn):Dn.fromBufferAttribute(r,o),Dn.applyMatrix4(e.matrixWorld),this.expandByPoint(Dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),aa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),aa.copy(n.boundingBox)),aa.applyMatrix4(e.matrixWorld),this.union(aa)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Dn),Dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ur),ca.subVectors(this.max,Ur),As.subVectors(e.a,Ur),ws.subVectors(e.b,Ur),Rs.subVectors(e.c,Ur),Ii.subVectors(ws,As),Li.subVectors(Rs,ws),ts.subVectors(As,Rs);let t=[0,-Ii.z,Ii.y,0,-Li.z,Li.y,0,-ts.z,ts.y,Ii.z,0,-Ii.x,Li.z,0,-Li.x,ts.z,0,-ts.x,-Ii.y,Ii.x,0,-Li.y,Li.x,0,-ts.y,ts.x,0];return!Rc(t,As,ws,Rs,ca)||(t=[1,0,0,0,1,0,0,0,1],!Rc(t,As,ws,Rs,ca))?!1:(la.crossVectors(Ii,Li),t=[la.x,la.y,la.z],Rc(t,As,ws,Rs,ca))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ai=[new N,new N,new N,new N,new N,new N,new N,new N],Dn=new N,aa=new En,As=new N,ws=new N,Rs=new N,Ii=new N,Li=new N,ts=new N,Ur=new N,ca=new N,la=new N,ns=new N;function Rc(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){ns.fromArray(s,r);const a=i.x*Math.abs(ns.x)+i.y*Math.abs(ns.y)+i.z*Math.abs(ns.z),c=e.dot(ns),l=t.dot(ns),h=n.dot(ns);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Fg=new En,Or=new N,Cc=new N;class ii{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Fg.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Or.subVectors(e,this.center);const t=Or.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Or,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Cc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Or.copy(e.center).add(Cc)),this.expandByPoint(Or.copy(e.center).sub(Cc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ci=new N,Ic=new N,ha=new N,Ni=new N,Lc=new N,ua=new N,Nc=new N;class hc{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ci.copy(this.origin).addScaledVector(this.direction,t),ci.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ic.copy(e).add(t).multiplyScalar(.5),ha.copy(t).sub(e).normalize(),Ni.copy(this.origin).sub(Ic);const r=e.distanceTo(t)*.5,o=-this.direction.dot(ha),a=Ni.dot(this.direction),c=-Ni.dot(ha),l=Ni.lengthSq(),h=Math.abs(1-o*o);let u,d,p,_;if(h>0)if(u=o*c-a,d=o*a-c,_=r*h,u>=0)if(d>=-_)if(d<=_){const g=1/h;u*=g,d*=g,p=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d<=-_?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l):d<=_?(u=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Ic).addScaledVector(ha,d),p}intersectSphere(e,t){ci.subVectors(e.center,this.origin);const n=ci.dot(this.direction),i=ci.dot(ci)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ci)!==null}intersectTriangle(e,t,n,i,r){Lc.subVectors(t,e),ua.subVectors(n,e),Nc.crossVectors(Lc,ua);let o=this.direction.dot(Nc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ni.subVectors(this.origin,e);const c=a*this.direction.dot(ua.crossVectors(Ni,ua));if(c<0)return null;const l=a*this.direction.dot(Lc.cross(Ni));if(l<0||c+l>o)return null;const h=-a*Ni.dot(Nc);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ze{constructor(e,t,n,i,r,o,a,c,l,h,u,d,p,_,g,m){ze.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l,h,u,d,p,_,g,m)}set(e,t,n,i,r,o,a,c,l,h,u,d,p,_,g,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=_,f[11]=g,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ze().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Cs.setFromMatrixColumn(e,0).length(),r=1/Cs.setFromMatrixColumn(e,1).length(),o=1/Cs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,p=o*u,_=a*h,g=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=p+_*l,t[5]=d-g*l,t[9]=-a*c,t[2]=g-d*l,t[6]=_+p*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*h,p=c*u,_=l*h,g=l*u;t[0]=d+g*a,t[4]=_*a-p,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-_,t[6]=g+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*h,p=c*u,_=l*h,g=l*u;t[0]=d-g*a,t[4]=-o*u,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*h,t[9]=g-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*h,p=o*u,_=a*h,g=a*u;t[0]=c*h,t[4]=_*l-p,t[8]=d*l+g,t[1]=c*u,t[5]=g*l+d,t[9]=p*l-_,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,p=o*l,_=a*c,g=a*l;t[0]=c*h,t[4]=g-d*u,t[8]=_*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=p*u+_,t[10]=d-g*u}else if(e.order==="XZY"){const d=o*c,p=o*l,_=a*c,g=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+g,t[5]=o*h,t[9]=p*u-_,t[2]=_*u-p,t[6]=a*h,t[10]=g*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Bg,e,kg)}lookAt(e,t,n){const i=this.elements;return mn.subVectors(e,t),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),Pi.crossVectors(n,mn),Pi.lengthSq()===0&&(Math.abs(n.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),Pi.crossVectors(n,mn)),Pi.normalize(),da.crossVectors(mn,Pi),i[0]=Pi.x,i[4]=da.x,i[8]=mn.x,i[1]=Pi.y,i[5]=da.y,i[9]=mn.y,i[2]=Pi.z,i[6]=da.z,i[10]=mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],p=n[13],_=n[2],g=n[6],m=n[10],f=n[14],S=n[3],b=n[7],x=n[11],C=n[15],w=i[0],R=i[4],I=i[8],T=i[12],M=i[1],L=i[5],G=i[9],z=i[13],$=i[2],Q=i[6],q=i[10],ie=i[14],W=i[3],ue=i[7],ge=i[11],be=i[15];return r[0]=o*w+a*M+c*$+l*W,r[4]=o*R+a*L+c*Q+l*ue,r[8]=o*I+a*G+c*q+l*ge,r[12]=o*T+a*z+c*ie+l*be,r[1]=h*w+u*M+d*$+p*W,r[5]=h*R+u*L+d*Q+p*ue,r[9]=h*I+u*G+d*q+p*ge,r[13]=h*T+u*z+d*ie+p*be,r[2]=_*w+g*M+m*$+f*W,r[6]=_*R+g*L+m*Q+f*ue,r[10]=_*I+g*G+m*q+f*ge,r[14]=_*T+g*z+m*ie+f*be,r[3]=S*w+b*M+x*$+C*W,r[7]=S*R+b*L+x*Q+C*ue,r[11]=S*I+b*G+x*q+C*ge,r[15]=S*T+b*z+x*ie+C*be,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],p=e[14],_=e[3],g=e[7],m=e[11],f=e[15];return _*(+r*c*u-i*l*u-r*a*d+n*l*d+i*a*p-n*c*p)+g*(+t*c*p-t*l*d+r*o*d-i*o*p+i*l*h-r*c*h)+m*(+t*l*u-t*a*p-r*o*u+n*o*p+r*a*h-n*l*h)+f*(-i*a*h-t*c*u+t*a*d+i*o*u-n*o*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],p=e[11],_=e[12],g=e[13],m=e[14],f=e[15],S=u*m*l-g*d*l+g*c*p-a*m*p-u*c*f+a*d*f,b=_*d*l-h*m*l-_*c*p+o*m*p+h*c*f-o*d*f,x=h*g*l-_*u*l+_*a*p-o*g*p-h*a*f+o*u*f,C=_*u*c-h*g*c-_*a*d+o*g*d+h*a*m-o*u*m,w=t*S+n*b+i*x+r*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/w;return e[0]=S*R,e[1]=(g*d*r-u*m*r-g*i*p+n*m*p+u*i*f-n*d*f)*R,e[2]=(a*m*r-g*c*r+g*i*l-n*m*l-a*i*f+n*c*f)*R,e[3]=(u*c*r-a*d*r-u*i*l+n*d*l+a*i*p-n*c*p)*R,e[4]=b*R,e[5]=(h*m*r-_*d*r+_*i*p-t*m*p-h*i*f+t*d*f)*R,e[6]=(_*c*r-o*m*r-_*i*l+t*m*l+o*i*f-t*c*f)*R,e[7]=(o*d*r-h*c*r+h*i*l-t*d*l-o*i*p+t*c*p)*R,e[8]=x*R,e[9]=(_*u*r-h*g*r-_*n*p+t*g*p+h*n*f-t*u*f)*R,e[10]=(o*g*r-_*a*r+_*n*l-t*g*l-o*n*f+t*a*f)*R,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*p-t*a*p)*R,e[12]=C*R,e[13]=(h*g*i-_*u*i+_*n*d-t*g*d-h*n*m+t*u*m)*R,e[14]=(_*a*i-o*g*i-_*n*c+t*g*c+o*n*m-t*a*m)*R,e[15]=(o*u*i-h*a*i+h*n*c-t*u*c-o*n*d+t*a*d)*R,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,p=r*h,_=r*u,g=o*h,m=o*u,f=a*u,S=c*l,b=c*h,x=c*u,C=n.x,w=n.y,R=n.z;return i[0]=(1-(g+f))*C,i[1]=(p+x)*C,i[2]=(_-b)*C,i[3]=0,i[4]=(p-x)*w,i[5]=(1-(d+f))*w,i[6]=(m+S)*w,i[7]=0,i[8]=(_+b)*R,i[9]=(m-S)*R,i[10]=(1-(d+g))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Cs.set(i[0],i[1],i[2]).length();const o=Cs.set(i[4],i[5],i[6]).length(),a=Cs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Un.copy(this);const l=1/r,h=1/o,u=1/a;return Un.elements[0]*=l,Un.elements[1]*=l,Un.elements[2]*=l,Un.elements[4]*=h,Un.elements[5]*=h,Un.elements[6]*=h,Un.elements[8]*=u,Un.elements[9]*=u,Un.elements[10]*=u,t.setFromRotationMatrix(Un),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=Ti){const c=this.elements,l=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let p,_;if(a===Ti)p=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Ja)p=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Ti){const c=this.elements,l=1/(t-e),h=1/(n-i),u=1/(o-r),d=(t+e)*l,p=(n+i)*h;let _,g;if(a===Ti)_=(o+r)*u,g=-2*u;else if(a===Ja)_=r*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=g,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Cs=new N,Un=new ze,Bg=new N(0,0,0),kg=new N(1,1,1),Pi=new N,da=new N,mn=new N,Ou=new ze,Fu=new Ji;class ni{constructor(e=0,t=0,n=0,i=ni.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin($e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin($e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin($e(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-$e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ou.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ou,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Fu.setFromEuler(this),this.setFromQuaternion(Fu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ni.DEFAULT_ORDER="XYZ";class ip{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Hg=0;const Bu=new N,Is=new Ji,li=new ze,fa=new N,Fr=new N,zg=new N,Gg=new Ji,ku=new N(1,0,0),Hu=new N(0,1,0),zu=new N(0,0,1),Gu={type:"added"},Vg={type:"removed"},Ls={type:"childadded",child:null},Pc={type:"childremoved",child:null};class yt extends wr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hg++}),this.uuid=Gn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yt.DEFAULT_UP.clone();const e=new N,t=new ni,n=new Ji,i=new N(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ze},normalMatrix:{value:new He}}),this.matrix=new ze,this.matrixWorld=new ze,this.matrixAutoUpdate=yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ip,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Is.setFromAxisAngle(e,t),this.quaternion.multiply(Is),this}rotateOnWorldAxis(e,t){return Is.setFromAxisAngle(e,t),this.quaternion.premultiply(Is),this}rotateX(e){return this.rotateOnAxis(ku,e)}rotateY(e){return this.rotateOnAxis(Hu,e)}rotateZ(e){return this.rotateOnAxis(zu,e)}translateOnAxis(e,t){return Bu.copy(e).applyQuaternion(this.quaternion),this.position.add(Bu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ku,e)}translateY(e){return this.translateOnAxis(Hu,e)}translateZ(e){return this.translateOnAxis(zu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?fa.copy(e):fa.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(Fr,fa,this.up):li.lookAt(fa,Fr,this.up),this.quaternion.setFromRotationMatrix(li),i&&(li.extractRotation(i.matrixWorld),Is.setFromRotationMatrix(li),this.quaternion.premultiply(Is.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Gu),Ls.child=e,this.dispatchEvent(Ls),Ls.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Vg),Pc.child=e,this.dispatchEvent(Pc),Pc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),li.multiply(e.parent.matrixWorld)),e.applyMatrix4(li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Gu),Ls.child=e,this.dispatchEvent(Ls),Ls.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fr,e,zg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fr,Gg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}yt.DEFAULT_UP=new N(0,1,0);yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const On=new N,hi=new N,Dc=new N,ui=new N,Ns=new N,Ps=new N,Vu=new N,Uc=new N,Oc=new N,Fc=new N,Bc=new rt,kc=new rt,Hc=new rt;class Hn{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),On.subVectors(e,t),i.cross(On);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){On.subVectors(i,t),hi.subVectors(n,t),Dc.subVectors(e,t);const o=On.dot(On),a=On.dot(hi),c=On.dot(Dc),l=hi.dot(hi),h=hi.dot(Dc),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(l*c-a*h)*d,_=(o*h-a*c)*d;return r.set(1-p-_,_,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ui)===null?!1:ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,ui)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ui.x),c.addScaledVector(o,ui.y),c.addScaledVector(a,ui.z),c)}static getInterpolatedAttribute(e,t,n,i,r,o){return Bc.setScalar(0),kc.setScalar(0),Hc.setScalar(0),Bc.fromBufferAttribute(e,t),kc.fromBufferAttribute(e,n),Hc.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Bc,r.x),o.addScaledVector(kc,r.y),o.addScaledVector(Hc,r.z),o}static isFrontFacing(e,t,n,i){return On.subVectors(n,t),hi.subVectors(e,t),On.cross(hi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return On.subVectors(this.c,this.b),hi.subVectors(this.a,this.b),On.cross(hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Hn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Hn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Hn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Hn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Hn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;Ns.subVectors(i,n),Ps.subVectors(r,n),Uc.subVectors(e,n);const c=Ns.dot(Uc),l=Ps.dot(Uc);if(c<=0&&l<=0)return t.copy(n);Oc.subVectors(e,i);const h=Ns.dot(Oc),u=Ps.dot(Oc);if(h>=0&&u<=h)return t.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Ns,o);Fc.subVectors(e,r);const p=Ns.dot(Fc),_=Ps.dot(Fc);if(_>=0&&p<=_)return t.copy(r);const g=p*l-c*_;if(g<=0&&l>=0&&_<=0)return a=l/(l-_),t.copy(n).addScaledVector(Ps,a);const m=h*_-p*u;if(m<=0&&u-h>=0&&p-_>=0)return Vu.subVectors(r,i),a=(u-h)/(u-h+(p-_)),t.copy(i).addScaledVector(Vu,a);const f=1/(m+g+d);return o=g*f,a=d*f,t.copy(n).addScaledVector(Ns,o).addScaledVector(Ps,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const sp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Di={h:0,s:0,l:0},pa={h:0,s:0,l:0};function zc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ne{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qe.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Qe.workingColorSpace){if(e=Nh(e,1),t=$e(t,0,1),n=$e(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=zc(o,r,e+1/3),this.g=zc(o,r,e),this.b=zc(o,r,e-1/3)}return Qe.toWorkingColorSpace(this,i),this}setStyle(e,t=Ht){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ht){const n=sp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wi(e.r),this.g=wi(e.g),this.b=wi(e.b),this}copyLinearToSRGB(e){return this.r=$s(e.r),this.g=$s(e.g),this.b=$s(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ht){return Qe.fromWorkingColorSpace(qt.copy(this),e),Math.round($e(qt.r*255,0,255))*65536+Math.round($e(qt.g*255,0,255))*256+Math.round($e(qt.b*255,0,255))}getHexString(e=Ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.fromWorkingColorSpace(qt.copy(this),t);const n=qt.r,i=qt.g,r=qt.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(qt.copy(this),t),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=Ht){Qe.fromWorkingColorSpace(qt.copy(this),e);const t=qt.r,n=qt.g,i=qt.b;return e!==Ht?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Di),this.setHSL(Di.h+e,Di.s+t,Di.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Di),e.getHSL(pa);const n=Qr(Di.h,pa.h,t),i=Qr(Di.s,pa.s,t),r=Qr(Di.l,pa.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qt=new Ne;Ne.NAMES=sp;let Wg=0;class ti extends wr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wg++}),this.uuid=Gn(),this.name="",this.type="Material",this.blending=qs,this.side=Ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sl,this.blendDst=Tl,this.blendEquation=us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=_r,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ts,this.stencilZFail=Ts,this.stencilZPass=Ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==qs&&(n.blending=this.blending),this.side!==Ri&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Sl&&(n.blendSrc=this.blendSrc),this.blendDst!==Tl&&(n.blendDst=this.blendDst),this.blendEquation!==us&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==_r&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ts&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ts&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ts&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class xn extends ti{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.combine=Ff,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Lt=new N,ma=new Xe;class Gt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ah,this.updateRanges=[],this.gpuType=zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ma.fromBufferAttribute(this,t),ma.applyMatrix3(e),this.setXY(t,ma.x,ma.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix3(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=kn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=lt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=kn(t,this.array)),t}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=kn(t,this.array)),t}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=kn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=kn(t,this.array)),t}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),i=lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),i=lt(i,this.array),r=lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ah&&(e.usage=this.usage),e}}class rp extends Gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class op extends Gt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class St extends Gt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Xg=0;const An=new ze,Gc=new yt,Ds=new N,_n=new En,Br=new En,Ot=new N;class Vt extends wr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xg++}),this.uuid=Gn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ep(e)?op:rp)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new He().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return An.makeRotationFromQuaternion(e),this.applyMatrix4(An),this}rotateX(e){return An.makeRotationX(e),this.applyMatrix4(An),this}rotateY(e){return An.makeRotationY(e),this.applyMatrix4(An),this}rotateZ(e){return An.makeRotationZ(e),this.applyMatrix4(An),this}translate(e,t,n){return An.makeTranslation(e,t,n),this.applyMatrix4(An),this}scale(e,t,n){return An.makeScale(e,t,n),this.applyMatrix4(An),this}lookAt(e){return Gc.lookAt(e),Gc.updateMatrix(),this.applyMatrix4(Gc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ds).negate(),this.translate(Ds.x,Ds.y,Ds.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new St(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new En);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];_n.setFromBufferAttribute(r),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ii);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(_n.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Br.setFromBufferAttribute(a),this.morphTargetsRelative?(Ot.addVectors(_n.min,Br.min),_n.expandByPoint(Ot),Ot.addVectors(_n.max,Br.max),_n.expandByPoint(Ot)):(_n.expandByPoint(Br.min),_n.expandByPoint(Br.max))}_n.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Ot.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Ot));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ot.fromBufferAttribute(a,l),c&&(Ds.fromBufferAttribute(e,l),Ot.add(Ds)),i=Math.max(i,n.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let I=0;I<n.count;I++)a[I]=new N,c[I]=new N;const l=new N,h=new N,u=new N,d=new Xe,p=new Xe,_=new Xe,g=new N,m=new N;function f(I,T,M){l.fromBufferAttribute(n,I),h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,I),p.fromBufferAttribute(r,T),_.fromBufferAttribute(r,M),h.sub(l),u.sub(l),p.sub(d),_.sub(d);const L=1/(p.x*_.y-_.x*p.y);isFinite(L)&&(g.copy(h).multiplyScalar(_.y).addScaledVector(u,-p.y).multiplyScalar(L),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-_.x).multiplyScalar(L),a[I].add(g),a[T].add(g),a[M].add(g),c[I].add(m),c[T].add(m),c[M].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let I=0,T=S.length;I<T;++I){const M=S[I],L=M.start,G=M.count;for(let z=L,$=L+G;z<$;z+=3)f(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const b=new N,x=new N,C=new N,w=new N;function R(I){C.fromBufferAttribute(i,I),w.copy(C);const T=a[I];b.copy(T),b.sub(C.multiplyScalar(C.dot(T))).normalize(),x.crossVectors(w,T);const L=x.dot(c[I])<0?-1:1;o.setXYZW(I,b.x,b.y,b.z,L)}for(let I=0,T=S.length;I<T;++I){const M=S[I],L=M.start,G=M.count;for(let z=L,$=L+G;z<$;z+=3)R(e.getX(z+0)),R(e.getX(z+1)),R(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Gt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new N,r=new N,o=new N,a=new N,c=new N,l=new N,h=new N,u=new N;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,_),r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let p=0,_=0;for(let g=0,m=c.length;g<m;g++){a.isInterleavedBufferAttribute?p=c[g]*a.data.stride+a.offset:p=c[g]*h;for(let f=0;f<h;f++)d[_++]=l[p++]}return new Gt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Vt,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],p=e(d,n);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const p=l[u];h.push(p.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wu=new ze,is=new hc,_a=new ii,Xu=new N,ga=new N,va=new N,xa=new N,Vc=new N,Ma=new N,qu=new N,Ea=new N;class vt extends yt{constructor(e=new Vt,t=new xn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){Ma.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(Vc.fromBufferAttribute(u,e),o?Ma.addScaledVector(Vc,h):Ma.addScaledVector(Vc.sub(t),h))}t.add(Ma)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_a.copy(n.boundingSphere),_a.applyMatrix4(r),is.copy(e.ray).recast(e.near),!(_a.containsPoint(is.origin)===!1&&(is.intersectSphere(_a,Xu)===null||is.origin.distanceToSquared(Xu)>(e.far-e.near)**2))&&(Wu.copy(r).invert(),is.copy(e.ray).applyMatrix4(Wu),!(n.boundingBox!==null&&is.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,is)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){const m=d[_],f=o[m.materialIndex],S=Math.max(m.start,p.start),b=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=S,C=b;x<C;x+=3){const w=a.getX(x),R=a.getX(x+1),I=a.getX(x+2);i=ya(this,f,e,n,l,h,u,w,R,I),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let m=_,f=g;m<f;m+=3){const S=a.getX(m),b=a.getX(m+1),x=a.getX(m+2);i=ya(this,o,e,n,l,h,u,S,b,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){const m=d[_],f=o[m.materialIndex],S=Math.max(m.start,p.start),b=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let x=S,C=b;x<C;x+=3){const w=x,R=x+1,I=x+2;i=ya(this,f,e,n,l,h,u,w,R,I),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,p.start),g=Math.min(c.count,p.start+p.count);for(let m=_,f=g;m<f;m+=3){const S=m,b=m+1,x=m+2;i=ya(this,o,e,n,l,h,u,S,b,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function qg(s,e,t,n,i,r,o,a){let c;if(e.side===un?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===Ri,a),c===null)return null;Ea.copy(a),Ea.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(Ea);return l<t.near||l>t.far?null:{distance:l,point:Ea.clone(),object:s}}function ya(s,e,t,n,i,r,o,a,c,l){s.getVertexPosition(a,ga),s.getVertexPosition(c,va),s.getVertexPosition(l,xa);const h=qg(s,e,t,n,ga,va,xa,qu);if(h){const u=new N;Hn.getBarycoord(qu,ga,va,xa,u),i&&(h.uv=Hn.getInterpolatedAttribute(i,a,c,l,u,new Xe)),r&&(h.uv1=Hn.getInterpolatedAttribute(r,a,c,l,u,new Xe)),o&&(h.normal=Hn.getInterpolatedAttribute(o,a,c,l,u,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new N,materialIndex:0};Hn.getNormal(ga,va,xa,d.normal),h.face=d,h.barycoord=u}return h}class Qo extends Vt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,p=0;_("z","y","x",-1,-1,n,t,e,o,r,0),_("z","y","x",1,-1,n,t,-e,o,r,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,r,4),_("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new St(l,3)),this.setAttribute("normal",new St(h,3)),this.setAttribute("uv",new St(u,2));function _(g,m,f,S,b,x,C,w,R,I,T){const M=x/R,L=C/I,G=x/2,z=C/2,$=w/2,Q=R+1,q=I+1;let ie=0,W=0;const ue=new N;for(let ge=0;ge<q;ge++){const be=ge*L-z;for(let qe=0;qe<Q;qe++){const pt=qe*M-G;ue[g]=pt*S,ue[m]=be*b,ue[f]=$,l.push(ue.x,ue.y,ue.z),ue[g]=0,ue[m]=0,ue[f]=w>0?1:-1,h.push(ue.x,ue.y,ue.z),u.push(qe/R),u.push(1-ge/I),ie+=1}}for(let ge=0;ge<I;ge++)for(let be=0;be<R;be++){const qe=d+be+Q*ge,pt=d+be+Q*(ge+1),j=d+(be+1)+Q*(ge+1),ae=d+(be+1)+Q*ge;c.push(qe,pt,ae),c.push(pt,j,ae),W+=6}a.addGroup(p,W,T),p+=W,d+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Sr(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Jt(s){const e={};for(let t=0;t<s.length;t++){const n=Sr(s[t]);for(const i in n)e[i]=n[i]}return e}function Yg(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function ap(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const $g={clone:Sr,merge:Jt};var Kg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ji extends ti{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kg,this.fragmentShader=jg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Sr(e.uniforms),this.uniformsGroups=Yg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class cp extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ze,this.projectionMatrix=new ze,this.projectionMatrixInverse=new ze,this.coordinateSystem=Ti}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ui=new N,Yu=new Xe,$u=new Xe;class tn extends cp{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=yr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Jr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return yr*2*Math.atan(Math.tan(Jr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z),Ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z)}getViewSize(e,t){return this.getViewBounds(e,Yu,$u),t.subVectors($u,Yu)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Jr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Us=-90,Os=1;class Zg extends yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new tn(Us,Os,e,t);i.layers=this.layers,this.add(i);const r=new tn(Us,Os,e,t);r.layers=this.layers,this.add(r);const o=new tn(Us,Os,e,t);o.layers=this.layers,this.add(o);const a=new tn(Us,Os,e,t);a.layers=this.layers,this.add(a);const c=new tn(Us,Os,e,t);c.layers=this.layers,this.add(c);const l=new tn(Us,Os,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===Ti)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ja)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class lp extends Ft{constructor(e,t,n,i,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:gr,super(e,t,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Jg extends Es{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new lp(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Mn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Qo(5,5,5),r=new ji({name:"CubemapFromEquirect",uniforms:Sr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:un,blending:qi});r.uniforms.tEquirect.value=t;const o=new vt(i,r),a=t.minFilter;return t.minFilter===Si&&(t.minFilter=Mn),new Zg(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}class Ph{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ne(e),this.near=t,this.far=n}clone(){return new Ph(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Qg extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ni,this.environmentIntensity=1,this.environmentRotation=new ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class e0{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ah,this.updateRanges=[],this.version=0,this.uuid=Gn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Zt=new N;class Dh{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=kn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=lt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=kn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=kn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=kn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=kn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),i=lt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),i=lt(i,this.array),r=lt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Gt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Dh(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Ku=new N,ju=new rt,Zu=new rt,t0=new N,Ju=new ze,Sa=new N,Wc=new ii,Qu=new ze,Xc=new hc;class n0 extends vt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=bu,this.bindMatrix=new ze,this.bindMatrixInverse=new ze,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new En),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Sa),this.boundingBox.expandByPoint(Sa)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ii),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Sa),this.boundingSphere.expandByPoint(Sa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wc.copy(this.boundingSphere),Wc.applyMatrix4(i),e.ray.intersectsSphere(Wc)!==!1&&(Qu.copy(i).invert(),Xc.copy(e.ray).applyMatrix4(Qu),!(this.boundingBox!==null&&Xc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Xc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new rt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===bu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===J_?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;ju.fromBufferAttribute(i.attributes.skinIndex,e),Zu.fromBufferAttribute(i.attributes.skinWeight,e),Ku.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Zu.getComponent(r);if(o!==0){const a=ju.getComponent(r);Ju.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(t0.copy(Ku).applyMatrix4(Ju),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class hp extends yt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class up extends Ft{constructor(e=null,t=1,n=1,i,r,o,a,c,l=nn,h=nn,u,d){super(null,o,a,c,l,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ed=new ze,i0=new ze;class Uh{constructor(e=[],t=[]){this.uuid=Gn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ze)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ze;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:i0;ed.multiplyMatrices(a,t[r]),ed.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Uh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new up(t,e,e,Ln,zn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new hp),this.bones.push(o),this.boneInverses.push(new ze().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class ch extends Gt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Fs=new ze,td=new ze,Ta=[],nd=new En,s0=new ze,kr=new vt,Hr=new ii;class r0 extends vt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ch(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,s0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new En),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Fs),nd.copy(e.boundingBox).applyMatrix4(Fs),this.boundingBox.union(nd)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ii),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Fs),Hr.copy(e.boundingSphere).applyMatrix4(Fs),this.boundingSphere.union(Hr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(kr.geometry=this.geometry,kr.material=this.material,kr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Hr.copy(this.boundingSphere),Hr.applyMatrix4(n),e.ray.intersectsSphere(Hr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Fs),td.multiplyMatrices(n,Fs),kr.matrixWorld=td,kr.raycast(e,Ta);for(let o=0,a=Ta.length;o<a;o++){const c=Ta[o];c.instanceId=r,c.object=this,t.push(c)}Ta.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ch(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new up(new Float32Array(i*this.count),i,this.count,Rh,zn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=i*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const qc=new N,o0=new N,a0=new He;class cs{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=qc.subVectors(n,t).cross(o0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(qc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||a0.getNormalMatrix(e),i=this.coplanarPoint(qc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ss=new ii,ba=new N;class Oh{constructor(e=new cs,t=new cs,n=new cs,i=new cs,r=new cs,o=new cs){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ti){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],p=i[8],_=i[9],g=i[10],m=i[11],f=i[12],S=i[13],b=i[14],x=i[15];if(n[0].setComponents(c-r,d-l,m-p,x-f).normalize(),n[1].setComponents(c+r,d+l,m+p,x+f).normalize(),n[2].setComponents(c+o,d+h,m+_,x+S).normalize(),n[3].setComponents(c-o,d-h,m-_,x-S).normalize(),n[4].setComponents(c-a,d-u,m-g,x-b).normalize(),t===Ti)n[5].setComponents(c+a,d+u,m+g,x+b).normalize();else if(t===Ja)n[5].setComponents(a,u,g,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ss.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ss.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ss)}intersectsSprite(e){return ss.center.set(0,0,0),ss.radius=.7071067811865476,ss.applyMatrix4(e.matrixWorld),this.intersectsSphere(ss)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ba.x=i.normal.x>0?e.max.x:e.min.x,ba.y=i.normal.y>0?e.max.y:e.min.y,ba.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ba)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class dp extends ti{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Qa=new N,ec=new N,id=new ze,zr=new hc,Aa=new ii,Yc=new N,sd=new N;class Fh extends yt{constructor(e=new Vt,t=new dp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Qa.fromBufferAttribute(t,i-1),ec.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Qa.distanceTo(ec);e.setAttribute("lineDistance",new St(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Aa.copy(n.boundingSphere),Aa.applyMatrix4(i),Aa.radius+=r,e.ray.intersectsSphere(Aa)===!1)return;id.copy(i).invert(),zr.copy(e.ray).applyMatrix4(id);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const p=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let g=p,m=_-1;g<m;g+=l){const f=h.getX(g),S=h.getX(g+1),b=wa(this,e,zr,c,f,S);b&&t.push(b)}if(this.isLineLoop){const g=h.getX(_-1),m=h.getX(p),f=wa(this,e,zr,c,g,m);f&&t.push(f)}}else{const p=Math.max(0,o.start),_=Math.min(d.count,o.start+o.count);for(let g=p,m=_-1;g<m;g+=l){const f=wa(this,e,zr,c,g,g+1);f&&t.push(f)}if(this.isLineLoop){const g=wa(this,e,zr,c,_-1,p);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function wa(s,e,t,n,i,r){const o=s.geometry.attributes.position;if(Qa.fromBufferAttribute(o,i),ec.fromBufferAttribute(o,r),t.distanceSqToSegment(Qa,ec,Yc,sd)>n)return;Yc.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Yc);if(!(c<e.near||c>e.far))return{distance:c,point:sd.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const rd=new N,od=new N;class c0 extends Fh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)rd.fromBufferAttribute(t,i),od.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+rd.distanceTo(od);e.setAttribute("lineDistance",new St(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class l0 extends Fh{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class tc extends ti{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ad=new ze,lh=new hc,Ra=new ii,Ca=new N;class hh extends yt{constructor(e=new Vt,t=new tc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ra.copy(n.boundingSphere),Ra.applyMatrix4(i),Ra.radius+=r,e.ray.intersectsSphere(Ra)===!1)return;ad.copy(i).invert(),lh.copy(e.ray).applyMatrix4(ad);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let _=d,g=p;_<g;_++){const m=l.getX(_);Ca.fromBufferAttribute(u,m),cd(Ca,m,c,i,e,t,this)}}else{const d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let _=d,g=p;_<g;_++)Ca.fromBufferAttribute(u,_),cd(Ca,_,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function cd(s,e,t,n,i,r,o){const a=lh.distanceSqToPoint(s);if(a<t){const c=new N;lh.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class ln extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}class fp extends Ft{constructor(e,t,n,i,r,o,a,c,l,h=Ys){if(h!==Ys&&h!==Er)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ys&&(n=Ms),n===void 0&&h===Er&&(n=Mr),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:nn,this.minFilter=c!==void 0?c:nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Bh extends Vt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],p=[];let _=0;const g=[],m=n/2;let f=0;S(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new St(u,3)),this.setAttribute("normal",new St(d,3)),this.setAttribute("uv",new St(p,2));function S(){const x=new N,C=new N;let w=0;const R=(t-e)/n;for(let I=0;I<=r;I++){const T=[],M=I/r,L=M*(t-e)+e;for(let G=0;G<=i;G++){const z=G/i,$=z*c+a,Q=Math.sin($),q=Math.cos($);C.x=L*Q,C.y=-M*n+m,C.z=L*q,u.push(C.x,C.y,C.z),x.set(Q,R,q).normalize(),d.push(x.x,x.y,x.z),p.push(z,1-M),T.push(_++)}g.push(T)}for(let I=0;I<i;I++)for(let T=0;T<r;T++){const M=g[T][I],L=g[T+1][I],G=g[T+1][I+1],z=g[T][I+1];(e>0||T!==0)&&(h.push(M,L,z),w+=3),(t>0||T!==r-1)&&(h.push(L,G,z),w+=3)}l.addGroup(f,w,0),f+=w}function b(x){const C=_,w=new Xe,R=new N;let I=0;const T=x===!0?e:t,M=x===!0?1:-1;for(let G=1;G<=i;G++)u.push(0,m*M,0),d.push(0,M,0),p.push(.5,.5),_++;const L=_;for(let G=0;G<=i;G++){const $=G/i*c+a,Q=Math.cos($),q=Math.sin($);R.x=T*q,R.y=m*M,R.z=T*Q,u.push(R.x,R.y,R.z),d.push(0,M,0),w.x=Q*.5+.5,w.y=q*.5*M+.5,p.push(w.x,w.y),_++}for(let G=0;G<i;G++){const z=C+G,$=L+G;x===!0?h.push($,$+1,z):h.push($+1,$,z),I+=3}l.addGroup(f,I,x===!0?1:2),f+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bh(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class uc extends Vt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],o=[];a(i),l(n),h(),this.setAttribute("position",new St(r,3)),this.setAttribute("normal",new St(r.slice(),3)),this.setAttribute("uv",new St(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(S){const b=new N,x=new N,C=new N;for(let w=0;w<t.length;w+=3)p(t[w+0],b),p(t[w+1],x),p(t[w+2],C),c(b,x,C,S)}function c(S,b,x,C){const w=C+1,R=[];for(let I=0;I<=w;I++){R[I]=[];const T=S.clone().lerp(x,I/w),M=b.clone().lerp(x,I/w),L=w-I;for(let G=0;G<=L;G++)G===0&&I===w?R[I][G]=T:R[I][G]=T.clone().lerp(M,G/L)}for(let I=0;I<w;I++)for(let T=0;T<2*(w-I)-1;T++){const M=Math.floor(T/2);T%2===0?(d(R[I][M+1]),d(R[I+1][M]),d(R[I][M])):(d(R[I][M+1]),d(R[I+1][M+1]),d(R[I+1][M]))}}function l(S){const b=new N;for(let x=0;x<r.length;x+=3)b.x=r[x+0],b.y=r[x+1],b.z=r[x+2],b.normalize().multiplyScalar(S),r[x+0]=b.x,r[x+1]=b.y,r[x+2]=b.z}function h(){const S=new N;for(let b=0;b<r.length;b+=3){S.x=r[b+0],S.y=r[b+1],S.z=r[b+2];const x=m(S)/2/Math.PI+.5,C=f(S)/Math.PI+.5;o.push(x,1-C)}_(),u()}function u(){for(let S=0;S<o.length;S+=6){const b=o[S+0],x=o[S+2],C=o[S+4],w=Math.max(b,x,C),R=Math.min(b,x,C);w>.9&&R<.1&&(b<.2&&(o[S+0]+=1),x<.2&&(o[S+2]+=1),C<.2&&(o[S+4]+=1))}}function d(S){r.push(S.x,S.y,S.z)}function p(S,b){const x=S*3;b.x=e[x+0],b.y=e[x+1],b.z=e[x+2]}function _(){const S=new N,b=new N,x=new N,C=new N,w=new Xe,R=new Xe,I=new Xe;for(let T=0,M=0;T<r.length;T+=9,M+=6){S.set(r[T+0],r[T+1],r[T+2]),b.set(r[T+3],r[T+4],r[T+5]),x.set(r[T+6],r[T+7],r[T+8]),w.set(o[M+0],o[M+1]),R.set(o[M+2],o[M+3]),I.set(o[M+4],o[M+5]),C.copy(S).add(b).add(x).divideScalar(3);const L=m(C);g(w,M+0,S,L),g(R,M+2,b,L),g(I,M+4,x,L)}}function g(S,b,x,C){C<0&&S.x===1&&(o[b]=S.x-1),x.x===0&&x.z===0&&(o[b]=C/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function f(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uc(e.vertices,e.indices,e.radius,e.details)}}class nc extends uc{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new nc(e.radius,e.detail)}}class eo extends uc{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new eo(e.radius,e.detail)}}class ea extends Vt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=e/a,d=t/c,p=[],_=[],g=[],m=[];for(let f=0;f<h;f++){const S=f*d-o;for(let b=0;b<l;b++){const x=b*u-r;_.push(x,-S,0),g.push(0,0,1),m.push(b/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let S=0;S<a;S++){const b=S+l*f,x=S+l*(f+1),C=S+1+l*(f+1),w=S+1+l*f;p.push(b,x,w),p.push(x,C,w)}this.setIndex(p),this.setAttribute("position",new St(_,3)),this.setAttribute("normal",new St(g,3)),this.setAttribute("uv",new St(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ea(e.width,e.height,e.widthSegments,e.heightSegments)}}class kh extends Vt{constructor(e=.5,t=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],c=[],l=[],h=[];let u=e;const d=(t-e)/i,p=new N,_=new Xe;for(let g=0;g<=i;g++){for(let m=0;m<=n;m++){const f=r+m/n*o;p.x=u*Math.cos(f),p.y=u*Math.sin(f),c.push(p.x,p.y,p.z),l.push(0,0,1),_.x=(p.x/t+1)/2,_.y=(p.y/t+1)/2,h.push(_.x,_.y)}u+=d}for(let g=0;g<i;g++){const m=g*(n+1);for(let f=0;f<n;f++){const S=f+m,b=S,x=S+n+1,C=S+n+2,w=S+1;a.push(b,x,w),a.push(x,C,w)}}this.setIndex(a),this.setAttribute("position",new St(c,3)),this.setAttribute("normal",new St(l,3)),this.setAttribute("uv",new St(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kh(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ic extends Vt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new N,d=new N,p=[],_=[],g=[],m=[];for(let f=0;f<=n;f++){const S=[],b=f/n;let x=0;f===0&&o===0?x=.5/t:f===n&&c===Math.PI&&(x=-.5/t);for(let C=0;C<=t;C++){const w=C/t;u.x=-e*Math.cos(i+w*r)*Math.sin(o+b*a),u.y=e*Math.cos(o+b*a),u.z=e*Math.sin(i+w*r)*Math.sin(o+b*a),_.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),m.push(w+x,1-b),S.push(l++)}h.push(S)}for(let f=0;f<n;f++)for(let S=0;S<t;S++){const b=h[f][S+1],x=h[f][S],C=h[f+1][S],w=h[f+1][S+1];(f!==0||o>0)&&p.push(b,x,w),(f!==n-1||c<Math.PI)&&p.push(x,C,w)}this.setIndex(p),this.setAttribute("position",new St(_,3)),this.setAttribute("normal",new St(g,3)),this.setAttribute("uv",new St(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ic(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class sc extends Vt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],c=[],l=[],h=new N,u=new N,d=new N;for(let p=0;p<=n;p++)for(let _=0;_<=i;_++){const g=_/i*r,m=p/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(g),u.y=(e+t*Math.cos(m))*Math.sin(g),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(g),h.y=e*Math.sin(g),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(_/i),l.push(p/n)}for(let p=1;p<=n;p++)for(let _=1;_<=i;_++){const g=(i+1)*p+_-1,m=(i+1)*(p-1)+_-1,f=(i+1)*(p-1)+_,S=(i+1)*p+_;o.push(g,m,S),o.push(m,f,S)}this.setIndex(o),this.setAttribute("position",new St(a,3)),this.setAttribute("normal",new St(c,3)),this.setAttribute("uv",new St(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class _i extends ti{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zf,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class si extends _i{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Xe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $e(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ne(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ne(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ne(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class h0 extends ti{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class u0 extends ti{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Ia(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function d0(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function f0(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function ld(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let c=0;c!==e;++c)i[o++]=s[a+c]}return i}function pp(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class ta{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class p0 extends ta{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Au,endingEnd:Au}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case wu:r=e,a=2*t-n;break;case Ru:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case wu:o=e,c=2*n-t;break;case Ru:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,_=(n-t)/(i-t),g=_*_,m=g*_,f=-d*m+2*d*g-d*_,S=(1+d)*m+(-1.5-2*d)*g+(-.5+d)*_+1,b=(-1-p)*m+(1.5+p)*g+.5*_,x=p*m-p*g;for(let C=0;C!==a;++C)r[C]=f*o[h+C]+S*o[l+C]+b*o[c+C]+x*o[u+C];return r}}class m0 extends ta{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}}class _0 extends ta{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class ri{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ia(t,this.TimeBufferType),this.values=Ia(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ia(e.times,Array),values:Ia(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new _0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new m0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new p0(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case oo:t=this.InterpolantFactoryMethodDiscrete;break;case ao:t=this.InterpolantFactoryMethodLinear;break;case Tc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return oo;case this.InterpolantFactoryMethodLinear:return ao;case this.InterpolantFactoryMethodSmooth:return Tc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&d0(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Tc,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(i)c=!0;else{const u=a*n,d=u-n,p=u+n;for(let _=0;_!==n;++_){const g=t[u+_];if(g!==t[d+_]||g!==t[p+_]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const u=a*n,d=o*n;for(let p=0;p!==n;++p)t[d+p]=t[u+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}ri.prototype.TimeBufferType=Float32Array;ri.prototype.ValueBufferType=Float32Array;ri.prototype.DefaultInterpolation=ao;class Rr extends ri{constructor(e,t,n){super(e,t,n)}}Rr.prototype.ValueTypeName="bool";Rr.prototype.ValueBufferType=Array;Rr.prototype.DefaultInterpolation=oo;Rr.prototype.InterpolantFactoryMethodLinear=void 0;Rr.prototype.InterpolantFactoryMethodSmooth=void 0;class mp extends ri{}mp.prototype.ValueTypeName="color";class Tr extends ri{}Tr.prototype.ValueTypeName="number";class g0 extends ta{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t);let l=e*a;for(let h=l+a;l!==h;l+=4)Ji.slerpFlat(r,0,o,l-a,o,l,c);return r}}class br extends ri{InterpolantFactoryMethodLinear(e){return new g0(this.times,this.values,this.getValueSize(),e)}}br.prototype.ValueTypeName="quaternion";br.prototype.InterpolantFactoryMethodSmooth=void 0;class Cr extends ri{constructor(e,t,n){super(e,t,n)}}Cr.prototype.ValueTypeName="string";Cr.prototype.ValueBufferType=Array;Cr.prototype.DefaultInterpolation=oo;Cr.prototype.InterpolantFactoryMethodLinear=void 0;Cr.prototype.InterpolantFactoryMethodSmooth=void 0;class Ar extends ri{}Ar.prototype.ValueTypeName="vector";class v0{constructor(e="",t=-1,n=[],i=Q_){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Gn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(M0(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(ri.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const h=f0(c);c=ld(c,1,h),l=ld(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Tr(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],h=l.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,p,_,g){if(p.length!==0){const m=[],f=[];pp(p,m,f,_),m.length!==0&&g.push(new u(d,m,f))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let _;for(_=0;_<d.length;_++)if(d[_].morphTargets)for(let g=0;g<d[_].morphTargets.length;g++)p[d[_].morphTargets[g]]=-1;for(const g in p){const m=[],f=[];for(let S=0;S!==d[_].morphTargets.length;++S){const b=d[_];m.push(b.time),f.push(b.morphTarget===g?1:0)}i.push(new Tr(".morphTargetInfluence["+g+"]",m,f))}c=p.length*o}else{const p=".bones["+t[u].name+"]";n(Ar,p+".position",d,"pos",i),n(br,p+".quaternion",d,"rot",i),n(Ar,p+".scale",d,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function x0(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Tr;case"vector":case"vector2":case"vector3":case"vector4":return Ar;case"color":return mp;case"quaternion":return br;case"bool":case"boolean":return Rr;case"string":return Cr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function M0(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=x0(s.type);if(s.times===void 0){const t=[],n=[];pp(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Xi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class E0{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const p=l[u],_=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return _}return null}}}const y0=new E0;class Ir{constructor(e){this.manager=e!==void 0?e:y0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ir.DEFAULT_MATERIAL_NAME="__DEFAULT";const di={};class S0 extends Error{constructor(e,t){super(e),this.response=t}}class _p extends Ir{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Xi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(di[e]!==void 0){di[e].push({onLoad:t,onProgress:n,onError:i});return}di[e]=[],di[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=di[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=d?parseInt(d):0,_=p!==0;let g=0;const m=new ReadableStream({start(f){S();function S(){u.read().then(({done:b,value:x})=>{if(b)f.close();else{g+=x.byteLength;const C=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:p});for(let w=0,R=h.length;w<R;w++){const I=h[w];I.onProgress&&I.onProgress(C)}f.enqueue(x),S()}},b=>{f.error(b)})}}});return new Response(m)}else throw new S0(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(d);return l.arrayBuffer().then(_=>p.decode(_))}}}).then(l=>{Xi.add(e,l);const h=di[e];delete di[e];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onLoad&&p.onLoad(l)}}).catch(l=>{const h=di[e];if(h===void 0)throw this.manager.itemError(e),l;delete di[e];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class T0 extends Ir{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Xi.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=co("img");function c(){h(),Xi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class b0 extends Ir{constructor(e){super(e)}load(e,t,n,i){const r=new Ft,o=new T0(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class dc extends yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class A0 extends dc{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ne(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const $c=new ze,hd=new N,ud=new N;class Hh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.map=null,this.mapPass=null,this.matrix=new ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Oh,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;hd.setFromMatrixPosition(e.matrixWorld),t.position.copy(hd),ud.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ud),t.updateMatrixWorld(),$c.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix($c),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply($c)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class w0 extends Hh{constructor(){super(new tn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=yr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class R0 extends dc{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new w0}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const dd=new ze,Gr=new N,Kc=new N;class C0 extends Hh{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Xe(4,2),this._viewportCount=6,this._viewports=[new rt(2,1,1,1),new rt(0,1,1,1),new rt(3,1,1,1),new rt(1,1,1,1),new rt(3,0,1,1),new rt(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Gr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Gr),Kc.copy(n.position),Kc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Kc),n.updateMatrixWorld(),i.makeTranslation(-Gr.x,-Gr.y,-Gr.z),dd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dd)}}class gp extends dc{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new C0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class zh extends cp{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class I0 extends Hh{constructor(){super(new zh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class uh extends dc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.shadow=new I0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class to{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class L0 extends Ir{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Xi.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Xi.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Xi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Xi.add(e,c),r.manager.itemStart(e)}}class N0 extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}const Gh="\\[\\]\\.:\\/",P0=new RegExp("["+Gh+"]","g"),Vh="[^"+Gh+"]",D0="[^"+Gh.replace("\\.","")+"]",U0=/((?:WC+[\/:])*)/.source.replace("WC",Vh),O0=/(WCOD+)?/.source.replace("WCOD",D0),F0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Vh),B0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Vh),k0=new RegExp("^"+U0+O0+F0+B0+"$"),H0=["material","materials","bones","map"];class z0{constructor(e,t,n){const i=n||ht.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ht{constructor(e,t,n){this.path=t,this.parsedPath=n||ht.parseTrackName(t),this.node=ht.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ht.Composite(e,t,n):new ht(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(P0,"")}static parseTrackName(e){const t=k0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);H0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=ht.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[i];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ht.Composite=z0;ht.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ht.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ht.prototype.GetterByBindingType=[ht.prototype._getValue_direct,ht.prototype._getValue_array,ht.prototype._getValue_arrayElement,ht.prototype._getValue_toArray];ht.prototype.SetterByBindingTypeAndVersioning=[[ht.prototype._setValue_direct,ht.prototype._setValue_direct_setNeedsUpdate,ht.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_array,ht.prototype._setValue_array_setNeedsUpdate,ht.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_arrayElement,ht.prototype._setValue_arrayElement_setNeedsUpdate,ht.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_fromArray,ht.prototype._setValue_fromArray_setNeedsUpdate,ht.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];function fd(s,e,t,n){const i=G0(n);switch(t){case Wf:return s*e;case qf:return s*e;case Yf:return s*e*2;case Rh:return s*e/i.components*i.byteLength;case Ch:return s*e/i.components*i.byteLength;case $f:return s*e*2/i.components*i.byteLength;case Ih:return s*e*2/i.components*i.byteLength;case Xf:return s*e*3/i.components*i.byteLength;case Ln:return s*e*4/i.components*i.byteLength;case Lh:return s*e*4/i.components*i.byteLength;case Va:case Wa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Xa:case qa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ul:case Fl:return Math.max(s,16)*Math.max(e,8)/4;case Dl:case Ol:return Math.max(s,8)*Math.max(e,8)/2;case Bl:case kl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Hl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case zl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Gl:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Vl:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Wl:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Xl:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case ql:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Yl:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case $l:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Kl:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case jl:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Zl:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Jl:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Ql:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case eh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Ya:case th:case nh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Kf:case ih:return Math.ceil(s/4)*Math.ceil(e/4)*8;case sh:case rh:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function G0(s){switch(s){case Ci:case zf:return{byteLength:1,components:1};case ro:case Gf:case Jo:return{byteLength:2,components:1};case Ah:case wh:return{byteLength:2,components:4};case Ms:case bh:case zn:return{byteLength:4,components:1};case Vf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Th}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Th);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function vp(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function V0(s){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=s.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=s.SHORT;else if(l instanceof Uint32Array)p=s.UNSIGNED_INT;else if(l instanceof Int32Array)p=s.INT;else if(l instanceof Int8Array)p=s.BYTE;else if(l instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(s.bindBuffer(l,a),u.length===0)s.bufferSubData(l,0,h);else{u.sort((p,_)=>p.start-_.start);let d=0;for(let p=1;p<u.length;p++){const _=u[d],g=u[p];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++d,u[d]=g)}u.length=d+1;for(let p=0,_=u.length;p<_;p++){const g=u[p];s.bufferSubData(l,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(s.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}var W0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,X0=`#ifdef USE_ALPHAHASH
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
#endif`,q0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Y0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,K0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,j0=`#ifdef USE_AOMAP
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
#endif`,Z0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,J0=`#ifdef USE_BATCHING
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
#endif`,Q0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ev=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iv=`#ifdef USE_IRIDESCENCE
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
#endif`,sv=`#ifdef USE_BUMPMAP
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
#endif`,rv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ov=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,av=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,uv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,dv=`#if defined( USE_COLOR_ALPHA )
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
#endif`,fv=`#define PI 3.141592653589793
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
} // validated`,pv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,mv=`vec3 transformedNormal = objectNormal;
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
#endif`,_v=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ev=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yv=`#ifdef USE_ENVMAP
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
#endif`,Sv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Tv=`#ifdef USE_ENVMAP
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
#endif`,bv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Av=`#ifdef USE_ENVMAP
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
#endif`,wv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Iv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lv=`#ifdef USE_GRADIENTMAP
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
}`,Nv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Uv=`uniform bool receiveShadow;
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
#endif`,Ov=`#ifdef USE_ENVMAP
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
#endif`,Fv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zv=`PhysicalMaterial material;
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
#endif`,Gv=`struct PhysicalMaterial {
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
}`,Vv=`
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
#endif`,Wv=`#if defined( RE_IndirectDiffuse )
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
#endif`,Xv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$v=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Qv=`#if defined( USE_POINTS_UV )
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
#endif`,ex=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ix=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rx=`#ifdef USE_MORPHTARGETS
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
#endif`,ox=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ax=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,cx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,lx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ux=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dx=`#ifdef USE_NORMALMAP
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
#endif`,fx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,px=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_x=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,xx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ex=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ax=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Rx=`float getShadowMask() {
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
}`,Cx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ix=`#ifdef USE_SKINNING
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
#endif`,Lx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Nx=`#ifdef USE_SKINNING
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
#endif`,Px=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ux=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ox=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fx=`#ifdef USE_TRANSMISSION
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
#endif`,Bx=`#ifdef USE_TRANSMISSION
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
#endif`,kx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Vx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wx=`uniform sampler2D t2D;
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
}`,Xx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Yx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$x=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kx=`#include <common>
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
}`,jx=`#if DEPTH_PACKING == 3200
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
}`,Zx=`#define DISTANCE
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
}`,Jx=`#define DISTANCE
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
}`,Qx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,eM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tM=`uniform float scale;
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
}`,nM=`uniform vec3 diffuse;
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
}`,iM=`#include <common>
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
}`,sM=`uniform vec3 diffuse;
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
}`,rM=`#define LAMBERT
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
}`,oM=`#define LAMBERT
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
}`,aM=`#define MATCAP
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
}`,cM=`#define MATCAP
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
}`,lM=`#define NORMAL
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
}`,hM=`#define NORMAL
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
}`,uM=`#define PHONG
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
}`,dM=`#define PHONG
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
}`,fM=`#define STANDARD
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
}`,pM=`#define STANDARD
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
}`,mM=`#define TOON
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
}`,_M=`#define TOON
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
}`,gM=`uniform float size;
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
}`,vM=`uniform vec3 diffuse;
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
}`,xM=`#include <common>
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
}`,MM=`uniform vec3 color;
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
}`,EM=`uniform float rotation;
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
}`,yM=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:W0,alphahash_pars_fragment:X0,alphamap_fragment:q0,alphamap_pars_fragment:Y0,alphatest_fragment:$0,alphatest_pars_fragment:K0,aomap_fragment:j0,aomap_pars_fragment:Z0,batching_pars_vertex:J0,batching_vertex:Q0,begin_vertex:ev,beginnormal_vertex:tv,bsdfs:nv,iridescence_fragment:iv,bumpmap_pars_fragment:sv,clipping_planes_fragment:rv,clipping_planes_pars_fragment:ov,clipping_planes_pars_vertex:av,clipping_planes_vertex:cv,color_fragment:lv,color_pars_fragment:hv,color_pars_vertex:uv,color_vertex:dv,common:fv,cube_uv_reflection_fragment:pv,defaultnormal_vertex:mv,displacementmap_pars_vertex:_v,displacementmap_vertex:gv,emissivemap_fragment:vv,emissivemap_pars_fragment:xv,colorspace_fragment:Mv,colorspace_pars_fragment:Ev,envmap_fragment:yv,envmap_common_pars_fragment:Sv,envmap_pars_fragment:Tv,envmap_pars_vertex:bv,envmap_physical_pars_fragment:Ov,envmap_vertex:Av,fog_vertex:wv,fog_pars_vertex:Rv,fog_fragment:Cv,fog_pars_fragment:Iv,gradientmap_pars_fragment:Lv,lightmap_pars_fragment:Nv,lights_lambert_fragment:Pv,lights_lambert_pars_fragment:Dv,lights_pars_begin:Uv,lights_toon_fragment:Fv,lights_toon_pars_fragment:Bv,lights_phong_fragment:kv,lights_phong_pars_fragment:Hv,lights_physical_fragment:zv,lights_physical_pars_fragment:Gv,lights_fragment_begin:Vv,lights_fragment_maps:Wv,lights_fragment_end:Xv,logdepthbuf_fragment:qv,logdepthbuf_pars_fragment:Yv,logdepthbuf_pars_vertex:$v,logdepthbuf_vertex:Kv,map_fragment:jv,map_pars_fragment:Zv,map_particle_fragment:Jv,map_particle_pars_fragment:Qv,metalnessmap_fragment:ex,metalnessmap_pars_fragment:tx,morphinstance_vertex:nx,morphcolor_vertex:ix,morphnormal_vertex:sx,morphtarget_pars_vertex:rx,morphtarget_vertex:ox,normal_fragment_begin:ax,normal_fragment_maps:cx,normal_pars_fragment:lx,normal_pars_vertex:hx,normal_vertex:ux,normalmap_pars_fragment:dx,clearcoat_normal_fragment_begin:fx,clearcoat_normal_fragment_maps:px,clearcoat_pars_fragment:mx,iridescence_pars_fragment:_x,opaque_fragment:gx,packing:vx,premultiplied_alpha_fragment:xx,project_vertex:Mx,dithering_fragment:Ex,dithering_pars_fragment:yx,roughnessmap_fragment:Sx,roughnessmap_pars_fragment:Tx,shadowmap_pars_fragment:bx,shadowmap_pars_vertex:Ax,shadowmap_vertex:wx,shadowmask_pars_fragment:Rx,skinbase_vertex:Cx,skinning_pars_vertex:Ix,skinning_vertex:Lx,skinnormal_vertex:Nx,specularmap_fragment:Px,specularmap_pars_fragment:Dx,tonemapping_fragment:Ux,tonemapping_pars_fragment:Ox,transmission_fragment:Fx,transmission_pars_fragment:Bx,uv_pars_fragment:kx,uv_pars_vertex:Hx,uv_vertex:zx,worldpos_vertex:Gx,background_vert:Vx,background_frag:Wx,backgroundCube_vert:Xx,backgroundCube_frag:qx,cube_vert:Yx,cube_frag:$x,depth_vert:Kx,depth_frag:jx,distanceRGBA_vert:Zx,distanceRGBA_frag:Jx,equirect_vert:Qx,equirect_frag:eM,linedashed_vert:tM,linedashed_frag:nM,meshbasic_vert:iM,meshbasic_frag:sM,meshlambert_vert:rM,meshlambert_frag:oM,meshmatcap_vert:aM,meshmatcap_frag:cM,meshnormal_vert:lM,meshnormal_frag:hM,meshphong_vert:uM,meshphong_frag:dM,meshphysical_vert:fM,meshphysical_frag:pM,meshtoon_vert:mM,meshtoon_frag:_M,points_vert:gM,points_frag:vM,shadow_vert:xM,shadow_frag:MM,sprite_vert:EM,sprite_frag:yM},ce={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},ei={basic:{uniforms:Jt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Jt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Jt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Jt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Jt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Jt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Jt([ce.points,ce.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Jt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Jt([ce.common,ce.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Jt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Jt([ce.sprite,ce.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:Jt([ce.common,ce.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:Jt([ce.lights,ce.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};ei.physical={uniforms:Jt([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const La={r:0,b:0,g:0},rs=new ni,SM=new ze;function TM(s,e,t,n,i,r,o){const a=new Ne(0);let c=r===!0?0:1,l,h,u=null,d=0,p=null;function _(b){let x=b.isScene===!0?b.background:null;return x&&x.isTexture&&(x=(b.backgroundBlurriness>0?t:e).get(x)),x}function g(b){let x=!1;const C=_(b);C===null?f(a,c):C&&C.isColor&&(f(C,1),x=!0);const w=s.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(b,x){const C=_(x);C&&(C.isCubeTexture||C.mapping===lc)?(h===void 0&&(h=new vt(new Qo(1,1,1),new ji({name:"BackgroundCubeMaterial",uniforms:Sr(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,R,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),rs.copy(x.backgroundRotation),rs.x*=-1,rs.y*=-1,rs.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(rs.y*=-1,rs.z*=-1),h.material.uniforms.envMap.value=C,h.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(SM.makeRotationFromEuler(rs)),h.material.toneMapped=Qe.getTransfer(C.colorSpace)!==ut,(u!==C||d!==C.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=C,d=C.version,p=s.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(l===void 0&&(l=new vt(new ea(2,2),new ji({name:"BackgroundMaterial",uniforms:Sr(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:Ri,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=C,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=Qe.getTransfer(C.colorSpace)!==ut,C.matrixAutoUpdate===!0&&C.updateMatrix(),l.material.uniforms.uvTransform.value.copy(C.matrix),(u!==C||d!==C.version||p!==s.toneMapping)&&(l.material.needsUpdate=!0,u=C,d=C.version,p=s.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function f(b,x){b.getRGB(La,ap(s)),n.buffers.color.setClear(La.r,La.g,La.b,x,o)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose()),l!==void 0&&(l.geometry.dispose(),l.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(b,x=1){a.set(b),c=x,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,f(a,c)},render:g,addToRenderList:m,dispose:S}}function bM(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(M,L,G,z,$){let Q=!1;const q=u(z,G,L);r!==q&&(r=q,l(r.object)),Q=p(M,z,G,$),Q&&_(M,z,G,$),$!==null&&e.update($,s.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,x(M,L,G,z),$!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function c(){return s.createVertexArray()}function l(M){return s.bindVertexArray(M)}function h(M){return s.deleteVertexArray(M)}function u(M,L,G){const z=G.wireframe===!0;let $=n[M.id];$===void 0&&($={},n[M.id]=$);let Q=$[L.id];Q===void 0&&(Q={},$[L.id]=Q);let q=Q[z];return q===void 0&&(q=d(c()),Q[z]=q),q}function d(M){const L=[],G=[],z=[];for(let $=0;$<t;$++)L[$]=0,G[$]=0,z[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:G,attributeDivisors:z,object:M,attributes:{},index:null}}function p(M,L,G,z){const $=r.attributes,Q=L.attributes;let q=0;const ie=G.getAttributes();for(const W in ie)if(ie[W].location>=0){const ge=$[W];let be=Q[W];if(be===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(be=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(be=M.instanceColor)),ge===void 0||ge.attribute!==be||be&&ge.data!==be.data)return!0;q++}return r.attributesNum!==q||r.index!==z}function _(M,L,G,z){const $={},Q=L.attributes;let q=0;const ie=G.getAttributes();for(const W in ie)if(ie[W].location>=0){let ge=Q[W];ge===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(ge=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(ge=M.instanceColor));const be={};be.attribute=ge,ge&&ge.data&&(be.data=ge.data),$[W]=be,q++}r.attributes=$,r.attributesNum=q,r.index=z}function g(){const M=r.newAttributes;for(let L=0,G=M.length;L<G;L++)M[L]=0}function m(M){f(M,0)}function f(M,L){const G=r.newAttributes,z=r.enabledAttributes,$=r.attributeDivisors;G[M]=1,z[M]===0&&(s.enableVertexAttribArray(M),z[M]=1),$[M]!==L&&(s.vertexAttribDivisor(M,L),$[M]=L)}function S(){const M=r.newAttributes,L=r.enabledAttributes;for(let G=0,z=L.length;G<z;G++)L[G]!==M[G]&&(s.disableVertexAttribArray(G),L[G]=0)}function b(M,L,G,z,$,Q,q){q===!0?s.vertexAttribIPointer(M,L,G,$,Q):s.vertexAttribPointer(M,L,G,z,$,Q)}function x(M,L,G,z){g();const $=z.attributes,Q=G.getAttributes(),q=L.defaultAttributeValues;for(const ie in Q){const W=Q[ie];if(W.location>=0){let ue=$[ie];if(ue===void 0&&(ie==="instanceMatrix"&&M.instanceMatrix&&(ue=M.instanceMatrix),ie==="instanceColor"&&M.instanceColor&&(ue=M.instanceColor)),ue!==void 0){const ge=ue.normalized,be=ue.itemSize,qe=e.get(ue);if(qe===void 0)continue;const pt=qe.buffer,j=qe.type,ae=qe.bytesPerElement,ye=j===s.INT||j===s.UNSIGNED_INT||ue.gpuType===bh;if(ue.isInterleavedBufferAttribute){const de=ue.data,Pe=de.stride,Be=ue.offset;if(de.isInstancedInterleavedBuffer){for(let Ye=0;Ye<W.locationSize;Ye++)f(W.location+Ye,de.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Ye=0;Ye<W.locationSize;Ye++)m(W.location+Ye);s.bindBuffer(s.ARRAY_BUFFER,pt);for(let Ye=0;Ye<W.locationSize;Ye++)b(W.location+Ye,be/W.locationSize,j,ge,Pe*ae,(Be+be/W.locationSize*Ye)*ae,ye)}else{if(ue.isInstancedBufferAttribute){for(let de=0;de<W.locationSize;de++)f(W.location+de,ue.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let de=0;de<W.locationSize;de++)m(W.location+de);s.bindBuffer(s.ARRAY_BUFFER,pt);for(let de=0;de<W.locationSize;de++)b(W.location+de,be/W.locationSize,j,ge,be*ae,be/W.locationSize*de*ae,ye)}}else if(q!==void 0){const ge=q[ie];if(ge!==void 0)switch(ge.length){case 2:s.vertexAttrib2fv(W.location,ge);break;case 3:s.vertexAttrib3fv(W.location,ge);break;case 4:s.vertexAttrib4fv(W.location,ge);break;default:s.vertexAttrib1fv(W.location,ge)}}}}S()}function C(){I();for(const M in n){const L=n[M];for(const G in L){const z=L[G];for(const $ in z)h(z[$].object),delete z[$];delete L[G]}delete n[M]}}function w(M){if(n[M.id]===void 0)return;const L=n[M.id];for(const G in L){const z=L[G];for(const $ in z)h(z[$].object),delete z[$];delete L[G]}delete n[M.id]}function R(M){for(const L in n){const G=n[L];if(G[M.id]===void 0)continue;const z=G[M.id];for(const $ in z)h(z[$].object),delete z[$];delete G[M.id]}}function I(){T(),o=!0,r!==i&&(r=i,l(r.object))}function T(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:I,resetDefaultState:T,dispose:C,releaseStatesOfGeometry:w,releaseStatesOfProgram:R,initAttributes:g,enableAttribute:m,disableUnusedAttributes:S}}function AM(s,e,t){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let p=0;for(let _=0;_<u;_++)p+=h[_];t.update(p,n,1)}function c(l,h,u,d){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<l.length;_++)o(l[_],h[_],d[_]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let _=0;for(let g=0;g<u;g++)_+=h[g]*d[g];t.update(_,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function wM(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(R){return!(R!==Ln&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const I=R===Jo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Ci&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==zn&&!I)}function c(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),S=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),C=_>0,w=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:S,maxVaryings:b,maxFragmentUniforms:x,vertexTextures:C,maxSamples:w}}function RM(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new cs,a=new He,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||i;return i=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){const _=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,f=s.get(u);if(!i||_===null||_.length===0||r&&!m)r?h(null):l();else{const S=r?0:n,b=S*4;let x=f.clippingState||null;c.value=x,x=h(_,d,b,p);for(let C=0;C!==b;++C)x[C]=t[C];f.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,p,_){const g=u!==null?u.length:0;let m=null;if(g!==0){if(m=c.value,_!==!0||m===null){const f=p+g*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<f)&&(m=new Float32Array(f));for(let b=0,x=p;b!==g;++b,x+=4)o.copy(u[b]).applyMatrix4(S,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function CM(s){let e=new WeakMap;function t(o,a){return a===Nl?o.mapping=gr:a===Pl&&(o.mapping=vr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Nl||a===Pl)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Jg(c.height);return l.fromEquirectangularTexture(s,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Ws=4,pd=[.125,.215,.35,.446,.526,.582],ds=20,jc=new zh,md=new Ne;let Zc=null,Jc=0,Qc=0,el=!1;const ls=(1+Math.sqrt(5))/2,Bs=1/ls,_d=[new N(-ls,Bs,0),new N(ls,Bs,0),new N(-Bs,0,ls),new N(Bs,0,ls),new N(0,ls,-Bs),new N(0,ls,Bs),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class gd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Zc=this._renderer.getRenderTarget(),Jc=this._renderer.getActiveCubeFace(),Qc=this._renderer.getActiveMipmapLevel(),el=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Md(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Zc,Jc,Qc),this._renderer.xr.enabled=el,e.scissorTest=!1,Na(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===gr||e.mapping===vr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zc=this._renderer.getRenderTarget(),Jc=this._renderer.getActiveCubeFace(),Qc=this._renderer.getActiveMipmapLevel(),el=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Mn,minFilter:Mn,generateMipmaps:!1,type:Jo,format:Ln,colorSpace:sn,depthBuffer:!1},i=vd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vd(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=IM(r)),this._blurMaterial=LM(r,e,t)}return i}_compileMaterial(e){const t=new vt(this._lodPlanes[0],e);this._renderer.compile(t,jc)}_sceneToCubeUV(e,t,n,i){const a=new tn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(md),h.toneMapping=Yi,h.autoClear=!1;const p=new xn({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),_=new vt(new Qo,p);let g=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,g=!0):(p.color.copy(md),g=!0);for(let f=0;f<6;f++){const S=f%3;S===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):S===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));const b=this._cubeSize;Na(i,S*b,f>2?b:0,b,b),h.setRenderTarget(i),g&&h.render(_,a),h.render(e,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===gr||e.mapping===vr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Md()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xd());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new vt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;Na(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,jc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=_d[(i-r-1)%_d.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new vt(this._lodPlanes[i],l),d=l.uniforms,p=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ds-1),g=r/_,m=isFinite(r)?1+Math.floor(h*g):ds;m>ds&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ds}`);const f=[];let S=0;for(let R=0;R<ds;++R){const I=R/g,T=Math.exp(-I*I/2);f.push(T),R===0?S+=T:R<m&&(S+=2*T)}for(let R=0;R<f.length;R++)f[R]=f[R]/S;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:b}=this;d.dTheta.value=_,d.mipInt.value=b-n;const x=this._sizeLods[i],C=3*x*(i>b-Ws?i-b+Ws:0),w=4*(this._cubeSize-x);Na(t,C,w,3*x,2*x),c.setRenderTarget(t),c.render(u,jc)}}function IM(s){const e=[],t=[],n=[];let i=s;const r=s-Ws+1+pd.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>s-Ws?c=pd[o-s+Ws-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,_=6,g=3,m=2,f=1,S=new Float32Array(g*_*p),b=new Float32Array(m*_*p),x=new Float32Array(f*_*p);for(let w=0;w<p;w++){const R=w%3*2/3-1,I=w>2?0:-1,T=[R,I,0,R+2/3,I,0,R+2/3,I+1,0,R,I,0,R+2/3,I+1,0,R,I+1,0];S.set(T,g*_*w),b.set(d,m*_*w);const M=[w,w,w,w,w,w];x.set(M,f*_*w)}const C=new Vt;C.setAttribute("position",new Gt(S,g)),C.setAttribute("uv",new Gt(b,m)),C.setAttribute("faceIndex",new Gt(x,f)),e.push(C),i>Ws&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function vd(s,e,t){const n=new Es(s,e,t);return n.texture.mapping=lc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Na(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function LM(s,e,t){const n=new Float32Array(ds),i=new N(0,1,0);return new ji({name:"SphericalGaussianBlur",defines:{n:ds,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Wh(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function xd(){return new ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wh(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Md(){return new ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Wh(){return`

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
	`}function NM(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Nl||c===Pl,h=c===gr||c===vr;if(l||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new gd(s)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return l&&p&&p.height>0||h&&p&&i(p)?(t===null&&(t=new gd(s)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function PM(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Vs("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function DM(s,e,t,n){const i={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",o),delete i[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const p in d)e.update(d[p],s.ARRAY_BUFFER)}function l(u){const d=[],p=u.index,_=u.attributes.position;let g=0;if(p!==null){const S=p.array;g=p.version;for(let b=0,x=S.length;b<x;b+=3){const C=S[b+0],w=S[b+1],R=S[b+2];d.push(C,w,w,R,R,C)}}else if(_!==void 0){const S=_.array;g=_.version;for(let b=0,x=S.length/3-1;b<x;b+=3){const C=b+0,w=b+1,R=b+2;d.push(C,w,w,R,R,C)}}else return;const m=new(ep(d)?op:rp)(d,1);m.version=g;const f=r.get(u);f&&e.remove(f),r.set(u,m)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function UM(s,e,t){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,p){s.drawElements(n,p,r,d*o),t.update(p,n,1)}function l(d,p,_){_!==0&&(s.drawElementsInstanced(n,p,r,d*o,_),t.update(p,n,_))}function h(d,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,_);let m=0;for(let f=0;f<_;f++)m+=p[f];t.update(m,n,1)}function u(d,p,_,g){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)l(d[f]/o,p[f],g[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,g,0,_);let f=0;for(let S=0;S<_;S++)f+=p[S]*g[S];t.update(f,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function OM(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function FM(s,e,t){const n=new WeakMap,i=new rt;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let M=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var p=M;d!==void 0&&d.texture.dispose();const _=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let x=0;_===!0&&(x=1),g===!0&&(x=2),m===!0&&(x=3);let C=a.attributes.position.count*x,w=1;C>e.maxTextureSize&&(w=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const R=new Float32Array(C*w*4*u),I=new np(R,C,w,u);I.type=zn,I.needsUpdate=!0;const T=x*4;for(let L=0;L<u;L++){const G=f[L],z=S[L],$=b[L],Q=C*w*4*L;for(let q=0;q<G.count;q++){const ie=q*T;_===!0&&(i.fromBufferAttribute(G,q),R[Q+ie+0]=i.x,R[Q+ie+1]=i.y,R[Q+ie+2]=i.z,R[Q+ie+3]=0),g===!0&&(i.fromBufferAttribute(z,q),R[Q+ie+4]=i.x,R[Q+ie+5]=i.y,R[Q+ie+6]=i.z,R[Q+ie+7]=0),m===!0&&(i.fromBufferAttribute($,q),R[Q+ie+8]=i.x,R[Q+ie+9]=i.y,R[Q+ie+10]=i.z,R[Q+ie+11]=$.itemSize===4?i.w:1)}}d={count:u,texture:I,size:new Xe(C,w)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let _=0;for(let m=0;m<l.length;m++)_+=l[m];const g=a.morphTargetsRelative?1:1-_;c.getUniforms().setValue(s,"morphTargetBaseInfluence",g),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function BM(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}const xp=new Ft,Ed=new fp(1,1),Mp=new np,Ep=new Og,yp=new lp,yd=[],Sd=[],Td=new Float32Array(16),bd=new Float32Array(9),Ad=new Float32Array(4);function Lr(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=yd[i];if(r===void 0&&(r=new Float32Array(i),yd[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Dt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Ut(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function fc(s,e){let t=Sd[e];t===void 0&&(t=new Int32Array(e),Sd[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function kM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function HM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;s.uniform2fv(this.addr,e),Ut(t,e)}}function zM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;s.uniform3fv(this.addr,e),Ut(t,e)}}function GM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;s.uniform4fv(this.addr,e),Ut(t,e)}}function VM(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(Dt(t,n))return;Ad.set(n),s.uniformMatrix2fv(this.addr,!1,Ad),Ut(t,n)}}function WM(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(Dt(t,n))return;bd.set(n),s.uniformMatrix3fv(this.addr,!1,bd),Ut(t,n)}}function XM(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(Dt(t,n))return;Td.set(n),s.uniformMatrix4fv(this.addr,!1,Td),Ut(t,n)}}function qM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function YM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;s.uniform2iv(this.addr,e),Ut(t,e)}}function $M(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;s.uniform3iv(this.addr,e),Ut(t,e)}}function KM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;s.uniform4iv(this.addr,e),Ut(t,e)}}function jM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function ZM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;s.uniform2uiv(this.addr,e),Ut(t,e)}}function JM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;s.uniform3uiv(this.addr,e),Ut(t,e)}}function QM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;s.uniform4uiv(this.addr,e),Ut(t,e)}}function eE(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Ed.compareFunction=Jf,r=Ed):r=xp,t.setTexture2D(e||r,i)}function tE(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Ep,i)}function nE(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||yp,i)}function iE(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Mp,i)}function sE(s){switch(s){case 5126:return kM;case 35664:return HM;case 35665:return zM;case 35666:return GM;case 35674:return VM;case 35675:return WM;case 35676:return XM;case 5124:case 35670:return qM;case 35667:case 35671:return YM;case 35668:case 35672:return $M;case 35669:case 35673:return KM;case 5125:return jM;case 36294:return ZM;case 36295:return JM;case 36296:return QM;case 35678:case 36198:case 36298:case 36306:case 35682:return eE;case 35679:case 36299:case 36307:return tE;case 35680:case 36300:case 36308:case 36293:return nE;case 36289:case 36303:case 36311:case 36292:return iE}}function rE(s,e){s.uniform1fv(this.addr,e)}function oE(s,e){const t=Lr(e,this.size,2);s.uniform2fv(this.addr,t)}function aE(s,e){const t=Lr(e,this.size,3);s.uniform3fv(this.addr,t)}function cE(s,e){const t=Lr(e,this.size,4);s.uniform4fv(this.addr,t)}function lE(s,e){const t=Lr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function hE(s,e){const t=Lr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function uE(s,e){const t=Lr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function dE(s,e){s.uniform1iv(this.addr,e)}function fE(s,e){s.uniform2iv(this.addr,e)}function pE(s,e){s.uniform3iv(this.addr,e)}function mE(s,e){s.uniform4iv(this.addr,e)}function _E(s,e){s.uniform1uiv(this.addr,e)}function gE(s,e){s.uniform2uiv(this.addr,e)}function vE(s,e){s.uniform3uiv(this.addr,e)}function xE(s,e){s.uniform4uiv(this.addr,e)}function ME(s,e,t){const n=this.cache,i=e.length,r=fc(t,i);Dt(n,r)||(s.uniform1iv(this.addr,r),Ut(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||xp,r[o])}function EE(s,e,t){const n=this.cache,i=e.length,r=fc(t,i);Dt(n,r)||(s.uniform1iv(this.addr,r),Ut(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Ep,r[o])}function yE(s,e,t){const n=this.cache,i=e.length,r=fc(t,i);Dt(n,r)||(s.uniform1iv(this.addr,r),Ut(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||yp,r[o])}function SE(s,e,t){const n=this.cache,i=e.length,r=fc(t,i);Dt(n,r)||(s.uniform1iv(this.addr,r),Ut(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Mp,r[o])}function TE(s){switch(s){case 5126:return rE;case 35664:return oE;case 35665:return aE;case 35666:return cE;case 35674:return lE;case 35675:return hE;case 35676:return uE;case 5124:case 35670:return dE;case 35667:case 35671:return fE;case 35668:case 35672:return pE;case 35669:case 35673:return mE;case 5125:return _E;case 36294:return gE;case 36295:return vE;case 36296:return xE;case 35678:case 36198:case 36298:case 36306:case 35682:return ME;case 35679:case 36299:case 36307:return EE;case 35680:case 36300:case 36308:case 36293:return yE;case 36289:case 36303:case 36311:case 36292:return SE}}class bE{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=sE(t.type)}}class AE{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=TE(t.type)}}class wE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const tl=/(\w+)(\])?(\[|\.)?/g;function wd(s,e){s.seq.push(e),s.map[e.id]=e}function RE(s,e,t){const n=s.name,i=n.length;for(tl.lastIndex=0;;){const r=tl.exec(n),o=tl.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){wd(t,l===void 0?new bE(a,s,e):new AE(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new wE(a),wd(t,u)),t=u}}}class $a{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);RE(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Rd(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const CE=37297;let IE=0;function LE(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Cd=new He;function NE(s){Qe._getMatrix(Cd,Qe.workingColorSpace,s);const e=`mat3( ${Cd.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(s)){case Za:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Id(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+LE(s.getShaderSource(e),o)}else return i}function PE(s,e){const t=NE(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function DE(s,e){let t;switch(e){case q_:t="Linear";break;case Y_:t="Reinhard";break;case $_:t="Cineon";break;case Bf:t="ACESFilmic";break;case j_:t="AgX";break;case Z_:t="Neutral";break;case K_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Pa=new N;function UE(){Qe.getLuminanceCoefficients(Pa);const s=Pa.x.toFixed(4),e=Pa.y.toFixed(4),t=Pa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function OE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Kr).join(`
`)}function FE(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function BE(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Kr(s){return s!==""}function Ld(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nd(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const kE=/^[ \t]*#include +<([\w\d./]+)>/gm;function dh(s){return s.replace(kE,zE)}const HE=new Map;function zE(s,e){let t=Ve[e];if(t===void 0){const n=HE.get(e);if(n!==void 0)t=Ve[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return dh(t)}const GE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pd(s){return s.replace(GE,VE)}function VE(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Dd(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function WE(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Uf?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Of?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===fi&&(e="SHADOWMAP_TYPE_VSM"),e}function XE(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case gr:case vr:e="ENVMAP_TYPE_CUBE";break;case lc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function qE(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case vr:e="ENVMAP_MODE_REFRACTION";break}return e}function YE(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ff:e="ENVMAP_BLENDING_MULTIPLY";break;case W_:e="ENVMAP_BLENDING_MIX";break;case X_:e="ENVMAP_BLENDING_ADD";break}return e}function $E(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function KE(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=WE(t),l=XE(t),h=qE(t),u=YE(t),d=$E(t),p=OE(t),_=FE(r),g=i.createProgram();let m,f,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Kr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Kr).join(`
`),f.length>0&&(f+=`
`)):(m=[Dd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Kr).join(`
`),f=[Dd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Yi?"#define TONE_MAPPING":"",t.toneMapping!==Yi?Ve.tonemapping_pars_fragment:"",t.toneMapping!==Yi?DE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,PE("linearToOutputTexel",t.outputColorSpace),UE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Kr).join(`
`)),o=dh(o),o=Ld(o,t),o=Nd(o,t),a=dh(a),a=Ld(a,t),a=Nd(a,t),o=Pd(o),a=Pd(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Iu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Iu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const b=S+m+o,x=S+f+a,C=Rd(i,i.VERTEX_SHADER,b),w=Rd(i,i.FRAGMENT_SHADER,x);i.attachShader(g,C),i.attachShader(g,w),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function R(L){if(s.debug.checkShaderErrors){const G=i.getProgramInfoLog(g).trim(),z=i.getShaderInfoLog(C).trim(),$=i.getShaderInfoLog(w).trim();let Q=!0,q=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(Q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,C,w);else{const ie=Id(i,C,"vertex"),W=Id(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+G+`
`+ie+`
`+W)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(z===""||$==="")&&(q=!1);q&&(L.diagnostics={runnable:Q,programLog:G,vertexShader:{log:z,prefix:m},fragmentShader:{log:$,prefix:f}})}i.deleteShader(C),i.deleteShader(w),I=new $a(i,g),T=BE(i,g)}let I;this.getUniforms=function(){return I===void 0&&R(this),I};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(g,CE)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=IE++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=C,this.fragmentShader=w,this}let jE=0;class ZE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new JE(e),t.set(e,n)),n}}class JE{constructor(e){this.id=jE++,this.code=e,this.usedTimes=0}}function QE(s,e,t,n,i,r,o){const a=new ip,c=new ZE,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let p=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(T){return l.add(T),T===0?"uv":`uv${T}`}function m(T,M,L,G,z){const $=G.fog,Q=z.geometry,q=T.isMeshStandardMaterial?G.environment:null,ie=(T.isMeshStandardMaterial?t:e).get(T.envMap||q),W=ie&&ie.mapping===lc?ie.image.height:null,ue=_[T.type];T.precision!==null&&(p=i.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const ge=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,be=ge!==void 0?ge.length:0;let qe=0;Q.morphAttributes.position!==void 0&&(qe=1),Q.morphAttributes.normal!==void 0&&(qe=2),Q.morphAttributes.color!==void 0&&(qe=3);let pt,j,ae,ye;if(ue){const ct=ei[ue];pt=ct.vertexShader,j=ct.fragmentShader}else pt=T.vertexShader,j=T.fragmentShader,c.update(T),ae=c.getVertexShaderID(T),ye=c.getFragmentShaderID(T);const de=s.getRenderTarget(),Pe=s.state.buffers.depth.getReversed(),Be=z.isInstancedMesh===!0,Ye=z.isBatchedMesh===!0,Tt=!!T.map,et=!!T.matcap,Rt=!!ie,P=!!T.aoMap,yn=!!T.lightMap,je=!!T.bumpMap,Ze=!!T.normalMap,Ae=!!T.displacementMap,gt=!!T.emissiveMap,we=!!T.metalnessMap,A=!!T.roughnessMap,E=T.anisotropy>0,F=T.clearcoat>0,Z=T.dispersion>0,te=T.iridescence>0,K=T.sheen>0,Se=T.transmission>0,fe=E&&!!T.anisotropyMap,ve=F&&!!T.clearcoatMap,tt=F&&!!T.clearcoatNormalMap,oe=F&&!!T.clearcoatRoughnessMap,xe=te&&!!T.iridescenceMap,Le=te&&!!T.iridescenceThicknessMap,De=K&&!!T.sheenColorMap,Me=K&&!!T.sheenRoughnessMap,Je=!!T.specularMap,Ge=!!T.specularColorMap,mt=!!T.specularIntensityMap,D=Se&&!!T.transmissionMap,le=Se&&!!T.thicknessMap,V=!!T.gradientMap,J=!!T.alphaMap,me=T.alphaTest>0,pe=!!T.alphaHash,ke=!!T.extensions;let At=Yi;T.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(At=s.toneMapping);const Wt={shaderID:ue,shaderType:T.type,shaderName:T.name,vertexShader:pt,fragmentShader:j,defines:T.defines,customVertexShaderID:ae,customFragmentShaderID:ye,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:Ye,batchingColor:Ye&&z._colorsTexture!==null,instancing:Be,instancingColor:Be&&z.instanceColor!==null,instancingMorph:Be&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:de===null?s.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:sn,alphaToCoverage:!!T.alphaToCoverage,map:Tt,matcap:et,envMap:Rt,envMapMode:Rt&&ie.mapping,envMapCubeUVHeight:W,aoMap:P,lightMap:yn,bumpMap:je,normalMap:Ze,displacementMap:d&&Ae,emissiveMap:gt,normalMapObjectSpace:Ze&&T.normalMapType===ig,normalMapTangentSpace:Ze&&T.normalMapType===Zf,metalnessMap:we,roughnessMap:A,anisotropy:E,anisotropyMap:fe,clearcoat:F,clearcoatMap:ve,clearcoatNormalMap:tt,clearcoatRoughnessMap:oe,dispersion:Z,iridescence:te,iridescenceMap:xe,iridescenceThicknessMap:Le,sheen:K,sheenColorMap:De,sheenRoughnessMap:Me,specularMap:Je,specularColorMap:Ge,specularIntensityMap:mt,transmission:Se,transmissionMap:D,thicknessMap:le,gradientMap:V,opaque:T.transparent===!1&&T.blending===qs&&T.alphaToCoverage===!1,alphaMap:J,alphaTest:me,alphaHash:pe,combine:T.combine,mapUv:Tt&&g(T.map.channel),aoMapUv:P&&g(T.aoMap.channel),lightMapUv:yn&&g(T.lightMap.channel),bumpMapUv:je&&g(T.bumpMap.channel),normalMapUv:Ze&&g(T.normalMap.channel),displacementMapUv:Ae&&g(T.displacementMap.channel),emissiveMapUv:gt&&g(T.emissiveMap.channel),metalnessMapUv:we&&g(T.metalnessMap.channel),roughnessMapUv:A&&g(T.roughnessMap.channel),anisotropyMapUv:fe&&g(T.anisotropyMap.channel),clearcoatMapUv:ve&&g(T.clearcoatMap.channel),clearcoatNormalMapUv:tt&&g(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&g(T.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&g(T.iridescenceMap.channel),iridescenceThicknessMapUv:Le&&g(T.iridescenceThicknessMap.channel),sheenColorMapUv:De&&g(T.sheenColorMap.channel),sheenRoughnessMapUv:Me&&g(T.sheenRoughnessMap.channel),specularMapUv:Je&&g(T.specularMap.channel),specularColorMapUv:Ge&&g(T.specularColorMap.channel),specularIntensityMapUv:mt&&g(T.specularIntensityMap.channel),transmissionMapUv:D&&g(T.transmissionMap.channel),thicknessMapUv:le&&g(T.thicknessMap.channel),alphaMapUv:J&&g(T.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(Ze||E),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!Q.attributes.uv&&(Tt||J),fog:!!$,useFog:T.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Pe,skinning:z.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:qe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:At,decodeVideoTexture:Tt&&T.map.isVideoTexture===!0&&Qe.getTransfer(T.map.colorSpace)===ut,decodeVideoTextureEmissive:gt&&T.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(T.emissiveMap.colorSpace)===ut,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Bn,flipSided:T.side===un,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:ke&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&T.extensions.multiDraw===!0||Ye)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Wt.vertexUv1s=l.has(1),Wt.vertexUv2s=l.has(2),Wt.vertexUv3s=l.has(3),l.clear(),Wt}function f(T){const M=[];if(T.shaderID?M.push(T.shaderID):(M.push(T.customVertexShaderID),M.push(T.customFragmentShaderID)),T.defines!==void 0)for(const L in T.defines)M.push(L),M.push(T.defines[L]);return T.isRawShaderMaterial===!1&&(S(M,T),b(M,T),M.push(s.outputColorSpace)),M.push(T.customProgramCacheKey),M.join()}function S(T,M){T.push(M.precision),T.push(M.outputColorSpace),T.push(M.envMapMode),T.push(M.envMapCubeUVHeight),T.push(M.mapUv),T.push(M.alphaMapUv),T.push(M.lightMapUv),T.push(M.aoMapUv),T.push(M.bumpMapUv),T.push(M.normalMapUv),T.push(M.displacementMapUv),T.push(M.emissiveMapUv),T.push(M.metalnessMapUv),T.push(M.roughnessMapUv),T.push(M.anisotropyMapUv),T.push(M.clearcoatMapUv),T.push(M.clearcoatNormalMapUv),T.push(M.clearcoatRoughnessMapUv),T.push(M.iridescenceMapUv),T.push(M.iridescenceThicknessMapUv),T.push(M.sheenColorMapUv),T.push(M.sheenRoughnessMapUv),T.push(M.specularMapUv),T.push(M.specularColorMapUv),T.push(M.specularIntensityMapUv),T.push(M.transmissionMapUv),T.push(M.thicknessMapUv),T.push(M.combine),T.push(M.fogExp2),T.push(M.sizeAttenuation),T.push(M.morphTargetsCount),T.push(M.morphAttributeCount),T.push(M.numDirLights),T.push(M.numPointLights),T.push(M.numSpotLights),T.push(M.numSpotLightMaps),T.push(M.numHemiLights),T.push(M.numRectAreaLights),T.push(M.numDirLightShadows),T.push(M.numPointLightShadows),T.push(M.numSpotLightShadows),T.push(M.numSpotLightShadowsWithMaps),T.push(M.numLightProbes),T.push(M.shadowMapType),T.push(M.toneMapping),T.push(M.numClippingPlanes),T.push(M.numClipIntersection),T.push(M.depthPacking)}function b(T,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),T.push(a.mask)}function x(T){const M=_[T.type];let L;if(M){const G=ei[M];L=$g.clone(G.uniforms)}else L=T.uniforms;return L}function C(T,M){let L;for(let G=0,z=h.length;G<z;G++){const $=h[G];if($.cacheKey===M){L=$,++L.usedTimes;break}}return L===void 0&&(L=new KE(s,M,T,r),h.push(L)),L}function w(T){if(--T.usedTimes===0){const M=h.indexOf(T);h[M]=h[h.length-1],h.pop(),T.destroy()}}function R(T){c.remove(T)}function I(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:x,acquireProgram:C,releaseProgram:w,releaseShaderCache:R,programs:h,dispose:I}}function ey(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function ty(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Ud(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Od(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u,d,p,_,g,m){let f=s[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:_,renderOrder:u.renderOrder,z:g,group:m},s[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=_,f.renderOrder=u.renderOrder,f.z=g,f.group=m),e++,f}function a(u,d,p,_,g,m){const f=o(u,d,p,_,g,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):t.push(f)}function c(u,d,p,_,g,m){const f=o(u,d,p,_,g,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):t.unshift(f)}function l(u,d){t.length>1&&t.sort(u||ty),n.length>1&&n.sort(d||Ud),i.length>1&&i.sort(d||Ud)}function h(){for(let u=e,d=s.length;u<d;u++){const p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function ny(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new Od,s.set(n,[o])):i>=r.length?(o=new Od,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function iy(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Ne};break;case"SpotLight":t={position:new N,direction:new N,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new N,halfWidth:new N,halfHeight:new N};break}return s[e.id]=t,t}}}function sy(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let ry=0;function oy(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function ay(s){const e=new iy,t=sy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new N);const i=new N,r=new ze,o=new ze;function a(l){let h=0,u=0,d=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let p=0,_=0,g=0,m=0,f=0,S=0,b=0,x=0,C=0,w=0,R=0;l.sort(oy);for(let T=0,M=l.length;T<M;T++){const L=l[T],G=L.color,z=L.intensity,$=L.distance,Q=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=G.r*z,u+=G.g*z,d+=G.b*z;else if(L.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(L.sh.coefficients[q],z);R++}else if(L.isDirectionalLight){const q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const ie=L.shadow,W=t.get(L);W.shadowIntensity=ie.intensity,W.shadowBias=ie.bias,W.shadowNormalBias=ie.normalBias,W.shadowRadius=ie.radius,W.shadowMapSize=ie.mapSize,n.directionalShadow[p]=W,n.directionalShadowMap[p]=Q,n.directionalShadowMatrix[p]=L.shadow.matrix,S++}n.directional[p]=q,p++}else if(L.isSpotLight){const q=e.get(L);q.position.setFromMatrixPosition(L.matrixWorld),q.color.copy(G).multiplyScalar(z),q.distance=$,q.coneCos=Math.cos(L.angle),q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),q.decay=L.decay,n.spot[g]=q;const ie=L.shadow;if(L.map&&(n.spotLightMap[C]=L.map,C++,ie.updateMatrices(L),L.castShadow&&w++),n.spotLightMatrix[g]=ie.matrix,L.castShadow){const W=t.get(L);W.shadowIntensity=ie.intensity,W.shadowBias=ie.bias,W.shadowNormalBias=ie.normalBias,W.shadowRadius=ie.radius,W.shadowMapSize=ie.mapSize,n.spotShadow[g]=W,n.spotShadowMap[g]=Q,x++}g++}else if(L.isRectAreaLight){const q=e.get(L);q.color.copy(G).multiplyScalar(z),q.halfWidth.set(L.width*.5,0,0),q.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=q,m++}else if(L.isPointLight){const q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),q.distance=L.distance,q.decay=L.decay,L.castShadow){const ie=L.shadow,W=t.get(L);W.shadowIntensity=ie.intensity,W.shadowBias=ie.bias,W.shadowNormalBias=ie.normalBias,W.shadowRadius=ie.radius,W.shadowMapSize=ie.mapSize,W.shadowCameraNear=ie.camera.near,W.shadowCameraFar=ie.camera.far,n.pointShadow[_]=W,n.pointShadowMap[_]=Q,n.pointShadowMatrix[_]=L.shadow.matrix,b++}n.point[_]=q,_++}else if(L.isHemisphereLight){const q=e.get(L);q.skyColor.copy(L.color).multiplyScalar(z),q.groundColor.copy(L.groundColor).multiplyScalar(z),n.hemi[f]=q,f++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_FLOAT_1,n.rectAreaLTC2=ce.LTC_FLOAT_2):(n.rectAreaLTC1=ce.LTC_HALF_1,n.rectAreaLTC2=ce.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const I=n.hash;(I.directionalLength!==p||I.pointLength!==_||I.spotLength!==g||I.rectAreaLength!==m||I.hemiLength!==f||I.numDirectionalShadows!==S||I.numPointShadows!==b||I.numSpotShadows!==x||I.numSpotMaps!==C||I.numLightProbes!==R)&&(n.directional.length=p,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=f,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=x+C-w,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=R,I.directionalLength=p,I.pointLength=_,I.spotLength=g,I.rectAreaLength=m,I.hemiLength=f,I.numDirectionalShadows=S,I.numPointShadows=b,I.numSpotShadows=x,I.numSpotMaps=C,I.numLightProbes=R,n.version=ry++)}function c(l,h){let u=0,d=0,p=0,_=0,g=0;const m=h.matrixWorldInverse;for(let f=0,S=l.length;f<S;f++){const b=l[f];if(b.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),u++}else if(b.isSpotLight){const x=n.spot[p];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),p++}else if(b.isRectAreaLight){const x=n.rectArea[_];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(b.width*.5,0,0),x.halfHeight.set(0,b.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),_++}else if(b.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){const x=n.hemi[g];x.direction.setFromMatrixPosition(b.matrixWorld),x.direction.transformDirection(m),g++}}}return{setup:a,setupView:c,state:n}}function Fd(s){const e=new ay(s),t=[],n=[];function i(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function cy(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new Fd(s),e.set(i,[a])):r>=o.length?(a=new Fd(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const ly=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hy=`uniform sampler2D shadow_pass;
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
}`;function uy(s,e,t){let n=new Oh;const i=new Xe,r=new Xe,o=new rt,a=new h0({depthPacking:ng}),c=new u0,l={},h=t.maxTextureSize,u={[Ri]:un,[un]:Ri,[Bn]:Bn},d=new ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:ly,fragmentShader:hy}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new Vt;_.setAttribute("position",new Gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new vt(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uf;let f=this.type;this.render=function(w,R,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const T=s.getRenderTarget(),M=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),G=s.state;G.setBlending(qi),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const z=f!==fi&&this.type===fi,$=f===fi&&this.type!==fi;for(let Q=0,q=w.length;Q<q;Q++){const ie=w[Q],W=ie.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const ue=W.getFrameExtents();if(i.multiply(ue),r.copy(W.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/ue.x),i.x=r.x*ue.x,W.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/ue.y),i.y=r.y*ue.y,W.mapSize.y=r.y)),W.map===null||z===!0||$===!0){const be=this.type!==fi?{minFilter:nn,magFilter:nn}:{};W.map!==null&&W.map.dispose(),W.map=new Es(i.x,i.y,be),W.map.texture.name=ie.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();const ge=W.getViewportCount();for(let be=0;be<ge;be++){const qe=W.getViewport(be);o.set(r.x*qe.x,r.y*qe.y,r.x*qe.z,r.y*qe.w),G.viewport(o),W.updateMatrices(ie,be),n=W.getFrustum(),x(R,I,W.camera,ie,this.type)}W.isPointLightShadow!==!0&&this.type===fi&&S(W,I),W.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(T,M,L)};function S(w,R){const I=e.update(g);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Es(i.x,i.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(R,null,I,d,g,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(R,null,I,p,g,null)}function b(w,R,I,T){let M=null;const L=I.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)M=L;else if(M=I.isPointLight===!0?c:a,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const G=M.uuid,z=R.uuid;let $=l[G];$===void 0&&($={},l[G]=$);let Q=$[z];Q===void 0&&(Q=M.clone(),$[z]=Q,R.addEventListener("dispose",C)),M=Q}if(M.visible=R.visible,M.wireframe=R.wireframe,T===fi?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:u[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,I.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const G=s.properties.get(M);G.light=I}return M}function x(w,R,I,T,M){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===fi)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,w.matrixWorld);const z=e.update(w),$=w.material;if(Array.isArray($)){const Q=z.groups;for(let q=0,ie=Q.length;q<ie;q++){const W=Q[q],ue=$[W.materialIndex];if(ue&&ue.visible){const ge=b(w,ue,T,M);w.onBeforeShadow(s,w,R,I,z,ge,W),s.renderBufferDirect(I,null,z,ge,w,W),w.onAfterShadow(s,w,R,I,z,ge,W)}}}else if($.visible){const Q=b(w,$,T,M);w.onBeforeShadow(s,w,R,I,z,Q,null),s.renderBufferDirect(I,null,z,Q,w,null),w.onAfterShadow(s,w,R,I,z,Q,null)}}const G=w.children;for(let z=0,$=G.length;z<$;z++)x(G[z],R,I,T,M)}function C(w){w.target.removeEventListener("dispose",C);for(const I in l){const T=l[I],M=w.target.uuid;M in T&&(T[M].dispose(),delete T[M])}}}const dy={[bl]:Al,[wl]:Il,[Rl]:Ll,[_r]:Cl,[Al]:bl,[Il]:wl,[Ll]:Rl,[Cl]:_r};function fy(s,e){function t(){let D=!1;const le=new rt;let V=null;const J=new rt(0,0,0,0);return{setMask:function(me){V!==me&&!D&&(s.colorMask(me,me,me,me),V=me)},setLocked:function(me){D=me},setClear:function(me,pe,ke,At,Wt){Wt===!0&&(me*=At,pe*=At,ke*=At),le.set(me,pe,ke,At),J.equals(le)===!1&&(s.clearColor(me,pe,ke,At),J.copy(le))},reset:function(){D=!1,V=null,J.set(-1,0,0,0)}}}function n(){let D=!1,le=!1,V=null,J=null,me=null;return{setReversed:function(pe){if(le!==pe){const ke=e.get("EXT_clip_control");le?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT);const At=me;me=null,this.setClear(At)}le=pe},getReversed:function(){return le},setTest:function(pe){pe?de(s.DEPTH_TEST):Pe(s.DEPTH_TEST)},setMask:function(pe){V!==pe&&!D&&(s.depthMask(pe),V=pe)},setFunc:function(pe){if(le&&(pe=dy[pe]),J!==pe){switch(pe){case bl:s.depthFunc(s.NEVER);break;case Al:s.depthFunc(s.ALWAYS);break;case wl:s.depthFunc(s.LESS);break;case _r:s.depthFunc(s.LEQUAL);break;case Rl:s.depthFunc(s.EQUAL);break;case Cl:s.depthFunc(s.GEQUAL);break;case Il:s.depthFunc(s.GREATER);break;case Ll:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}J=pe}},setLocked:function(pe){D=pe},setClear:function(pe){me!==pe&&(le&&(pe=1-pe),s.clearDepth(pe),me=pe)},reset:function(){D=!1,V=null,J=null,me=null,le=!1}}}function i(){let D=!1,le=null,V=null,J=null,me=null,pe=null,ke=null,At=null,Wt=null;return{setTest:function(ct){D||(ct?de(s.STENCIL_TEST):Pe(s.STENCIL_TEST))},setMask:function(ct){le!==ct&&!D&&(s.stencilMask(ct),le=ct)},setFunc:function(ct,Nn,oi){(V!==ct||J!==Nn||me!==oi)&&(s.stencilFunc(ct,Nn,oi),V=ct,J=Nn,me=oi)},setOp:function(ct,Nn,oi){(pe!==ct||ke!==Nn||At!==oi)&&(s.stencilOp(ct,Nn,oi),pe=ct,ke=Nn,At=oi)},setLocked:function(ct){D=ct},setClear:function(ct){Wt!==ct&&(s.clearStencil(ct),Wt=ct)},reset:function(){D=!1,le=null,V=null,J=null,me=null,pe=null,ke=null,At=null,Wt=null}}}const r=new t,o=new n,a=new i,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,p=[],_=null,g=!1,m=null,f=null,S=null,b=null,x=null,C=null,w=null,R=new Ne(0,0,0),I=0,T=!1,M=null,L=null,G=null,z=null,$=null;const Q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,ie=0;const W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(W)[1]),q=ie>=1):W.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),q=ie>=2);let ue=null,ge={};const be=s.getParameter(s.SCISSOR_BOX),qe=s.getParameter(s.VIEWPORT),pt=new rt().fromArray(be),j=new rt().fromArray(qe);function ae(D,le,V,J){const me=new Uint8Array(4),pe=s.createTexture();s.bindTexture(D,pe),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ke=0;ke<V;ke++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(le,0,s.RGBA,1,1,J,0,s.RGBA,s.UNSIGNED_BYTE,me):s.texImage2D(le+ke,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,me);return pe}const ye={};ye[s.TEXTURE_2D]=ae(s.TEXTURE_2D,s.TEXTURE_2D,1),ye[s.TEXTURE_CUBE_MAP]=ae(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[s.TEXTURE_2D_ARRAY]=ae(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ye[s.TEXTURE_3D]=ae(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),de(s.DEPTH_TEST),o.setFunc(_r),je(!1),Ze(yu),de(s.CULL_FACE),P(qi);function de(D){h[D]!==!0&&(s.enable(D),h[D]=!0)}function Pe(D){h[D]!==!1&&(s.disable(D),h[D]=!1)}function Be(D,le){return u[D]!==le?(s.bindFramebuffer(D,le),u[D]=le,D===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=le),D===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=le),!0):!1}function Ye(D,le){let V=p,J=!1;if(D){V=d.get(le),V===void 0&&(V=[],d.set(le,V));const me=D.textures;if(V.length!==me.length||V[0]!==s.COLOR_ATTACHMENT0){for(let pe=0,ke=me.length;pe<ke;pe++)V[pe]=s.COLOR_ATTACHMENT0+pe;V.length=me.length,J=!0}}else V[0]!==s.BACK&&(V[0]=s.BACK,J=!0);J&&s.drawBuffers(V)}function Tt(D){return _!==D?(s.useProgram(D),_=D,!0):!1}const et={[us]:s.FUNC_ADD,[w_]:s.FUNC_SUBTRACT,[R_]:s.FUNC_REVERSE_SUBTRACT};et[C_]=s.MIN,et[I_]=s.MAX;const Rt={[L_]:s.ZERO,[N_]:s.ONE,[P_]:s.SRC_COLOR,[Sl]:s.SRC_ALPHA,[k_]:s.SRC_ALPHA_SATURATE,[F_]:s.DST_COLOR,[U_]:s.DST_ALPHA,[D_]:s.ONE_MINUS_SRC_COLOR,[Tl]:s.ONE_MINUS_SRC_ALPHA,[B_]:s.ONE_MINUS_DST_COLOR,[O_]:s.ONE_MINUS_DST_ALPHA,[H_]:s.CONSTANT_COLOR,[z_]:s.ONE_MINUS_CONSTANT_COLOR,[G_]:s.CONSTANT_ALPHA,[V_]:s.ONE_MINUS_CONSTANT_ALPHA};function P(D,le,V,J,me,pe,ke,At,Wt,ct){if(D===qi){g===!0&&(Pe(s.BLEND),g=!1);return}if(g===!1&&(de(s.BLEND),g=!0),D!==A_){if(D!==m||ct!==T){if((f!==us||x!==us)&&(s.blendEquation(s.FUNC_ADD),f=us,x=us),ct)switch(D){case qs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case pi:s.blendFunc(s.ONE,s.ONE);break;case Su:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Tu:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case qs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case pi:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Su:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Tu:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}S=null,b=null,C=null,w=null,R.set(0,0,0),I=0,m=D,T=ct}return}me=me||le,pe=pe||V,ke=ke||J,(le!==f||me!==x)&&(s.blendEquationSeparate(et[le],et[me]),f=le,x=me),(V!==S||J!==b||pe!==C||ke!==w)&&(s.blendFuncSeparate(Rt[V],Rt[J],Rt[pe],Rt[ke]),S=V,b=J,C=pe,w=ke),(At.equals(R)===!1||Wt!==I)&&(s.blendColor(At.r,At.g,At.b,Wt),R.copy(At),I=Wt),m=D,T=!1}function yn(D,le){D.side===Bn?Pe(s.CULL_FACE):de(s.CULL_FACE);let V=D.side===un;le&&(V=!V),je(V),D.blending===qs&&D.transparent===!1?P(qi):P(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);const J=D.stencilWrite;a.setTest(J),J&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),gt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?de(s.SAMPLE_ALPHA_TO_COVERAGE):Pe(s.SAMPLE_ALPHA_TO_COVERAGE)}function je(D){M!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),M=D)}function Ze(D){D!==T_?(de(s.CULL_FACE),D!==L&&(D===yu?s.cullFace(s.BACK):D===b_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Pe(s.CULL_FACE),L=D}function Ae(D){D!==G&&(q&&s.lineWidth(D),G=D)}function gt(D,le,V){D?(de(s.POLYGON_OFFSET_FILL),(z!==le||$!==V)&&(s.polygonOffset(le,V),z=le,$=V)):Pe(s.POLYGON_OFFSET_FILL)}function we(D){D?de(s.SCISSOR_TEST):Pe(s.SCISSOR_TEST)}function A(D){D===void 0&&(D=s.TEXTURE0+Q-1),ue!==D&&(s.activeTexture(D),ue=D)}function E(D,le,V){V===void 0&&(ue===null?V=s.TEXTURE0+Q-1:V=ue);let J=ge[V];J===void 0&&(J={type:void 0,texture:void 0},ge[V]=J),(J.type!==D||J.texture!==le)&&(ue!==V&&(s.activeTexture(V),ue=V),s.bindTexture(D,le||ye[D]),J.type=D,J.texture=le)}function F(){const D=ge[ue];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Z(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function te(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function K(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Se(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function fe(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ve(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function tt(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function oe(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xe(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Le(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function De(D){pt.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),pt.copy(D))}function Me(D){j.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),j.copy(D))}function Je(D,le){let V=l.get(le);V===void 0&&(V=new WeakMap,l.set(le,V));let J=V.get(D);J===void 0&&(J=s.getUniformBlockIndex(le,D.name),V.set(D,J))}function Ge(D,le){const J=l.get(le).get(D);c.get(le)!==J&&(s.uniformBlockBinding(le,J,D.__bindingPointIndex),c.set(le,J))}function mt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},ue=null,ge={},u={},d=new WeakMap,p=[],_=null,g=!1,m=null,f=null,S=null,b=null,x=null,C=null,w=null,R=new Ne(0,0,0),I=0,T=!1,M=null,L=null,G=null,z=null,$=null,pt.set(0,0,s.canvas.width,s.canvas.height),j.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:de,disable:Pe,bindFramebuffer:Be,drawBuffers:Ye,useProgram:Tt,setBlending:P,setMaterial:yn,setFlipSided:je,setCullFace:Ze,setLineWidth:Ae,setPolygonOffset:gt,setScissorTest:we,activeTexture:A,bindTexture:E,unbindTexture:F,compressedTexImage2D:Z,compressedTexImage3D:te,texImage2D:xe,texImage3D:Le,updateUBOMapping:Je,uniformBlockBinding:Ge,texStorage2D:tt,texStorage3D:oe,texSubImage2D:K,texSubImage3D:Se,compressedTexSubImage2D:fe,compressedTexSubImage3D:ve,scissor:De,viewport:Me,reset:mt}}function py(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Xe,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,E){return p?new OffscreenCanvas(A,E):co("canvas")}function g(A,E,F){let Z=1;const te=we(A);if((te.width>F||te.height>F)&&(Z=F/Math.max(te.width,te.height)),Z<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const K=Math.floor(Z*te.width),Se=Math.floor(Z*te.height);u===void 0&&(u=_(K,Se));const fe=E?_(K,Se):u;return fe.width=K,fe.height=Se,fe.getContext("2d").drawImage(A,0,0,K,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+K+"x"+Se+")."),fe}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),A;return A}function m(A){return A.generateMipmaps}function f(A){s.generateMipmap(A)}function S(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(A,E,F,Z,te=!1){if(A!==null){if(s[A]!==void 0)return s[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let K=E;if(E===s.RED&&(F===s.FLOAT&&(K=s.R32F),F===s.HALF_FLOAT&&(K=s.R16F),F===s.UNSIGNED_BYTE&&(K=s.R8)),E===s.RED_INTEGER&&(F===s.UNSIGNED_BYTE&&(K=s.R8UI),F===s.UNSIGNED_SHORT&&(K=s.R16UI),F===s.UNSIGNED_INT&&(K=s.R32UI),F===s.BYTE&&(K=s.R8I),F===s.SHORT&&(K=s.R16I),F===s.INT&&(K=s.R32I)),E===s.RG&&(F===s.FLOAT&&(K=s.RG32F),F===s.HALF_FLOAT&&(K=s.RG16F),F===s.UNSIGNED_BYTE&&(K=s.RG8)),E===s.RG_INTEGER&&(F===s.UNSIGNED_BYTE&&(K=s.RG8UI),F===s.UNSIGNED_SHORT&&(K=s.RG16UI),F===s.UNSIGNED_INT&&(K=s.RG32UI),F===s.BYTE&&(K=s.RG8I),F===s.SHORT&&(K=s.RG16I),F===s.INT&&(K=s.RG32I)),E===s.RGB_INTEGER&&(F===s.UNSIGNED_BYTE&&(K=s.RGB8UI),F===s.UNSIGNED_SHORT&&(K=s.RGB16UI),F===s.UNSIGNED_INT&&(K=s.RGB32UI),F===s.BYTE&&(K=s.RGB8I),F===s.SHORT&&(K=s.RGB16I),F===s.INT&&(K=s.RGB32I)),E===s.RGBA_INTEGER&&(F===s.UNSIGNED_BYTE&&(K=s.RGBA8UI),F===s.UNSIGNED_SHORT&&(K=s.RGBA16UI),F===s.UNSIGNED_INT&&(K=s.RGBA32UI),F===s.BYTE&&(K=s.RGBA8I),F===s.SHORT&&(K=s.RGBA16I),F===s.INT&&(K=s.RGBA32I)),E===s.RGB&&F===s.UNSIGNED_INT_5_9_9_9_REV&&(K=s.RGB9_E5),E===s.RGBA){const Se=te?Za:Qe.getTransfer(Z);F===s.FLOAT&&(K=s.RGBA32F),F===s.HALF_FLOAT&&(K=s.RGBA16F),F===s.UNSIGNED_BYTE&&(K=Se===ut?s.SRGB8_ALPHA8:s.RGBA8),F===s.UNSIGNED_SHORT_4_4_4_4&&(K=s.RGBA4),F===s.UNSIGNED_SHORT_5_5_5_1&&(K=s.RGB5_A1)}return(K===s.R16F||K===s.R32F||K===s.RG16F||K===s.RG32F||K===s.RGBA16F||K===s.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function x(A,E){let F;return A?E===null||E===Ms||E===Mr?F=s.DEPTH24_STENCIL8:E===zn?F=s.DEPTH32F_STENCIL8:E===ro&&(F=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ms||E===Mr?F=s.DEPTH_COMPONENT24:E===zn?F=s.DEPTH_COMPONENT32F:E===ro&&(F=s.DEPTH_COMPONENT16),F}function C(A,E){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==nn&&A.minFilter!==Mn?Math.log2(Math.max(E.width,E.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?E.mipmaps.length:1}function w(A){const E=A.target;E.removeEventListener("dispose",w),I(E),E.isVideoTexture&&h.delete(E)}function R(A){const E=A.target;E.removeEventListener("dispose",R),M(E)}function I(A){const E=n.get(A);if(E.__webglInit===void 0)return;const F=A.source,Z=d.get(F);if(Z){const te=Z[E.__cacheKey];te.usedTimes--,te.usedTimes===0&&T(A),Object.keys(Z).length===0&&d.delete(F)}n.remove(A)}function T(A){const E=n.get(A);s.deleteTexture(E.__webglTexture);const F=A.source,Z=d.get(F);delete Z[E.__cacheKey],o.memory.textures--}function M(A){const E=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(E.__webglFramebuffer[Z]))for(let te=0;te<E.__webglFramebuffer[Z].length;te++)s.deleteFramebuffer(E.__webglFramebuffer[Z][te]);else s.deleteFramebuffer(E.__webglFramebuffer[Z]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[Z])}else{if(Array.isArray(E.__webglFramebuffer))for(let Z=0;Z<E.__webglFramebuffer.length;Z++)s.deleteFramebuffer(E.__webglFramebuffer[Z]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Z=0;Z<E.__webglColorRenderbuffer.length;Z++)E.__webglColorRenderbuffer[Z]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[Z]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const F=A.textures;for(let Z=0,te=F.length;Z<te;Z++){const K=n.get(F[Z]);K.__webglTexture&&(s.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(F[Z])}n.remove(A)}let L=0;function G(){L=0}function z(){const A=L;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),L+=1,A}function $(A){const E=[];return E.push(A.wrapS),E.push(A.wrapT),E.push(A.wrapR||0),E.push(A.magFilter),E.push(A.minFilter),E.push(A.anisotropy),E.push(A.internalFormat),E.push(A.format),E.push(A.type),E.push(A.generateMipmaps),E.push(A.premultiplyAlpha),E.push(A.flipY),E.push(A.unpackAlignment),E.push(A.colorSpace),E.join()}function Q(A,E){const F=n.get(A);if(A.isVideoTexture&&Ae(A),A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){const Z=A.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(F,A,E);return}}t.bindTexture(s.TEXTURE_2D,F.__webglTexture,s.TEXTURE0+E)}function q(A,E){const F=n.get(A);if(A.version>0&&F.__version!==A.version){j(F,A,E);return}t.bindTexture(s.TEXTURE_2D_ARRAY,F.__webglTexture,s.TEXTURE0+E)}function ie(A,E){const F=n.get(A);if(A.version>0&&F.__version!==A.version){j(F,A,E);return}t.bindTexture(s.TEXTURE_3D,F.__webglTexture,s.TEXTURE0+E)}function W(A,E){const F=n.get(A);if(A.version>0&&F.__version!==A.version){ae(F,A,E);return}t.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+E)}const ue={[xr]:s.REPEAT,[Wi]:s.CLAMP_TO_EDGE,[ja]:s.MIRRORED_REPEAT},ge={[nn]:s.NEAREST,[Hf]:s.NEAREST_MIPMAP_NEAREST,[$r]:s.NEAREST_MIPMAP_LINEAR,[Mn]:s.LINEAR,[Ga]:s.LINEAR_MIPMAP_NEAREST,[Si]:s.LINEAR_MIPMAP_LINEAR},be={[sg]:s.NEVER,[hg]:s.ALWAYS,[rg]:s.LESS,[Jf]:s.LEQUAL,[og]:s.EQUAL,[lg]:s.GEQUAL,[ag]:s.GREATER,[cg]:s.NOTEQUAL};function qe(A,E){if(E.type===zn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Mn||E.magFilter===Ga||E.magFilter===$r||E.magFilter===Si||E.minFilter===Mn||E.minFilter===Ga||E.minFilter===$r||E.minFilter===Si)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,ue[E.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,ue[E.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,ue[E.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,ge[E.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,ge[E.minFilter]),E.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,be[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===nn||E.minFilter!==$r&&E.minFilter!==Si||E.type===zn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");s.texParameterf(A,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function pt(A,E){let F=!1;A.__webglInit===void 0&&(A.__webglInit=!0,E.addEventListener("dispose",w));const Z=E.source;let te=d.get(Z);te===void 0&&(te={},d.set(Z,te));const K=$(E);if(K!==A.__cacheKey){te[K]===void 0&&(te[K]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,F=!0),te[K].usedTimes++;const Se=te[A.__cacheKey];Se!==void 0&&(te[A.__cacheKey].usedTimes--,Se.usedTimes===0&&T(E)),A.__cacheKey=K,A.__webglTexture=te[K].texture}return F}function j(A,E,F){let Z=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Z=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Z=s.TEXTURE_3D);const te=pt(A,E),K=E.source;t.bindTexture(Z,A.__webglTexture,s.TEXTURE0+F);const Se=n.get(K);if(K.version!==Se.__version||te===!0){t.activeTexture(s.TEXTURE0+F);const fe=Qe.getPrimaries(Qe.workingColorSpace),ve=E.colorSpace===ki?null:Qe.getPrimaries(E.colorSpace),tt=E.colorSpace===ki||fe===ve?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let oe=g(E.image,!1,i.maxTextureSize);oe=gt(E,oe);const xe=r.convert(E.format,E.colorSpace),Le=r.convert(E.type);let De=b(E.internalFormat,xe,Le,E.colorSpace,E.isVideoTexture);qe(Z,E);let Me;const Je=E.mipmaps,Ge=E.isVideoTexture!==!0,mt=Se.__version===void 0||te===!0,D=K.dataReady,le=C(E,oe);if(E.isDepthTexture)De=x(E.format===Er,E.type),mt&&(Ge?t.texStorage2D(s.TEXTURE_2D,1,De,oe.width,oe.height):t.texImage2D(s.TEXTURE_2D,0,De,oe.width,oe.height,0,xe,Le,null));else if(E.isDataTexture)if(Je.length>0){Ge&&mt&&t.texStorage2D(s.TEXTURE_2D,le,De,Je[0].width,Je[0].height);for(let V=0,J=Je.length;V<J;V++)Me=Je[V],Ge?D&&t.texSubImage2D(s.TEXTURE_2D,V,0,0,Me.width,Me.height,xe,Le,Me.data):t.texImage2D(s.TEXTURE_2D,V,De,Me.width,Me.height,0,xe,Le,Me.data);E.generateMipmaps=!1}else Ge?(mt&&t.texStorage2D(s.TEXTURE_2D,le,De,oe.width,oe.height),D&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,oe.width,oe.height,xe,Le,oe.data)):t.texImage2D(s.TEXTURE_2D,0,De,oe.width,oe.height,0,xe,Le,oe.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ge&&mt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,le,De,Je[0].width,Je[0].height,oe.depth);for(let V=0,J=Je.length;V<J;V++)if(Me=Je[V],E.format!==Ln)if(xe!==null)if(Ge){if(D)if(E.layerUpdates.size>0){const me=fd(Me.width,Me.height,E.format,E.type);for(const pe of E.layerUpdates){const ke=Me.data.subarray(pe*me/Me.data.BYTES_PER_ELEMENT,(pe+1)*me/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,V,0,0,pe,Me.width,Me.height,1,xe,ke)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,V,0,0,0,Me.width,Me.height,oe.depth,xe,Me.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,V,De,Me.width,Me.height,oe.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?D&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,V,0,0,0,Me.width,Me.height,oe.depth,xe,Le,Me.data):t.texImage3D(s.TEXTURE_2D_ARRAY,V,De,Me.width,Me.height,oe.depth,0,xe,Le,Me.data)}else{Ge&&mt&&t.texStorage2D(s.TEXTURE_2D,le,De,Je[0].width,Je[0].height);for(let V=0,J=Je.length;V<J;V++)Me=Je[V],E.format!==Ln?xe!==null?Ge?D&&t.compressedTexSubImage2D(s.TEXTURE_2D,V,0,0,Me.width,Me.height,xe,Me.data):t.compressedTexImage2D(s.TEXTURE_2D,V,De,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?D&&t.texSubImage2D(s.TEXTURE_2D,V,0,0,Me.width,Me.height,xe,Le,Me.data):t.texImage2D(s.TEXTURE_2D,V,De,Me.width,Me.height,0,xe,Le,Me.data)}else if(E.isDataArrayTexture)if(Ge){if(mt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,le,De,oe.width,oe.height,oe.depth),D)if(E.layerUpdates.size>0){const V=fd(oe.width,oe.height,E.format,E.type);for(const J of E.layerUpdates){const me=oe.data.subarray(J*V/oe.data.BYTES_PER_ELEMENT,(J+1)*V/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,J,oe.width,oe.height,1,xe,Le,me)}E.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,xe,Le,oe.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,De,oe.width,oe.height,oe.depth,0,xe,Le,oe.data);else if(E.isData3DTexture)Ge?(mt&&t.texStorage3D(s.TEXTURE_3D,le,De,oe.width,oe.height,oe.depth),D&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,xe,Le,oe.data)):t.texImage3D(s.TEXTURE_3D,0,De,oe.width,oe.height,oe.depth,0,xe,Le,oe.data);else if(E.isFramebufferTexture){if(mt)if(Ge)t.texStorage2D(s.TEXTURE_2D,le,De,oe.width,oe.height);else{let V=oe.width,J=oe.height;for(let me=0;me<le;me++)t.texImage2D(s.TEXTURE_2D,me,De,V,J,0,xe,Le,null),V>>=1,J>>=1}}else if(Je.length>0){if(Ge&&mt){const V=we(Je[0]);t.texStorage2D(s.TEXTURE_2D,le,De,V.width,V.height)}for(let V=0,J=Je.length;V<J;V++)Me=Je[V],Ge?D&&t.texSubImage2D(s.TEXTURE_2D,V,0,0,xe,Le,Me):t.texImage2D(s.TEXTURE_2D,V,De,xe,Le,Me);E.generateMipmaps=!1}else if(Ge){if(mt){const V=we(oe);t.texStorage2D(s.TEXTURE_2D,le,De,V.width,V.height)}D&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,xe,Le,oe)}else t.texImage2D(s.TEXTURE_2D,0,De,xe,Le,oe);m(E)&&f(Z),Se.__version=K.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function ae(A,E,F){if(E.image.length!==6)return;const Z=pt(A,E),te=E.source;t.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+F);const K=n.get(te);if(te.version!==K.__version||Z===!0){t.activeTexture(s.TEXTURE0+F);const Se=Qe.getPrimaries(Qe.workingColorSpace),fe=E.colorSpace===ki?null:Qe.getPrimaries(E.colorSpace),ve=E.colorSpace===ki||Se===fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const tt=E.isCompressedTexture||E.image[0].isCompressedTexture,oe=E.image[0]&&E.image[0].isDataTexture,xe=[];for(let J=0;J<6;J++)!tt&&!oe?xe[J]=g(E.image[J],!0,i.maxCubemapSize):xe[J]=oe?E.image[J].image:E.image[J],xe[J]=gt(E,xe[J]);const Le=xe[0],De=r.convert(E.format,E.colorSpace),Me=r.convert(E.type),Je=b(E.internalFormat,De,Me,E.colorSpace),Ge=E.isVideoTexture!==!0,mt=K.__version===void 0||Z===!0,D=te.dataReady;let le=C(E,Le);qe(s.TEXTURE_CUBE_MAP,E);let V;if(tt){Ge&&mt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,le,Je,Le.width,Le.height);for(let J=0;J<6;J++){V=xe[J].mipmaps;for(let me=0;me<V.length;me++){const pe=V[me];E.format!==Ln?De!==null?Ge?D&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,me,0,0,pe.width,pe.height,De,pe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,me,Je,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,me,0,0,pe.width,pe.height,De,Me,pe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,me,Je,pe.width,pe.height,0,De,Me,pe.data)}}}else{if(V=E.mipmaps,Ge&&mt){V.length>0&&le++;const J=we(xe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,le,Je,J.width,J.height)}for(let J=0;J<6;J++)if(oe){Ge?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,xe[J].width,xe[J].height,De,Me,xe[J].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Je,xe[J].width,xe[J].height,0,De,Me,xe[J].data);for(let me=0;me<V.length;me++){const ke=V[me].image[J].image;Ge?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,me+1,0,0,ke.width,ke.height,De,Me,ke.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,me+1,Je,ke.width,ke.height,0,De,Me,ke.data)}}else{Ge?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,De,Me,xe[J]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Je,De,Me,xe[J]);for(let me=0;me<V.length;me++){const pe=V[me];Ge?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,me+1,0,0,De,Me,pe.image[J]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,me+1,Je,De,Me,pe.image[J])}}}m(E)&&f(s.TEXTURE_CUBE_MAP),K.__version=te.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function ye(A,E,F,Z,te,K){const Se=r.convert(F.format,F.colorSpace),fe=r.convert(F.type),ve=b(F.internalFormat,Se,fe,F.colorSpace),tt=n.get(E),oe=n.get(F);if(oe.__renderTarget=E,!tt.__hasExternalTextures){const xe=Math.max(1,E.width>>K),Le=Math.max(1,E.height>>K);te===s.TEXTURE_3D||te===s.TEXTURE_2D_ARRAY?t.texImage3D(te,K,ve,xe,Le,E.depth,0,Se,fe,null):t.texImage2D(te,K,ve,xe,Le,0,Se,fe,null)}t.bindFramebuffer(s.FRAMEBUFFER,A),Ze(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Z,te,oe.__webglTexture,0,je(E)):(te===s.TEXTURE_2D||te>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Z,te,oe.__webglTexture,K),t.bindFramebuffer(s.FRAMEBUFFER,null)}function de(A,E,F){if(s.bindRenderbuffer(s.RENDERBUFFER,A),E.depthBuffer){const Z=E.depthTexture,te=Z&&Z.isDepthTexture?Z.type:null,K=x(E.stencilBuffer,te),Se=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=je(E);Ze(E)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,fe,K,E.width,E.height):F?s.renderbufferStorageMultisample(s.RENDERBUFFER,fe,K,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,K,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Se,s.RENDERBUFFER,A)}else{const Z=E.textures;for(let te=0;te<Z.length;te++){const K=Z[te],Se=r.convert(K.format,K.colorSpace),fe=r.convert(K.type),ve=b(K.internalFormat,Se,fe,K.colorSpace),tt=je(E);F&&Ze(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,tt,ve,E.width,E.height):Ze(E)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,tt,ve,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,ve,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Pe(A,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,A),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(E.depthTexture);Z.__renderTarget=E,(!Z.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Q(E.depthTexture,0);const te=Z.__webglTexture,K=je(E);if(E.depthTexture.format===Ys)Ze(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,te,0,K):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,te,0);else if(E.depthTexture.format===Er)Ze(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,te,0,K):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Be(A){const E=n.get(A),F=A.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==A.depthTexture){const Z=A.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Z){const te=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Z.removeEventListener("dispose",te)};Z.addEventListener("dispose",te),E.__depthDisposeCallback=te}E.__boundDepthTexture=Z}if(A.depthTexture&&!E.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Pe(E.__webglFramebuffer,A)}else if(F){E.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[Z]),E.__webglDepthbuffer[Z]===void 0)E.__webglDepthbuffer[Z]=s.createRenderbuffer(),de(E.__webglDepthbuffer[Z],A,!1);else{const te=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,K=E.__webglDepthbuffer[Z];s.bindRenderbuffer(s.RENDERBUFFER,K),s.framebufferRenderbuffer(s.FRAMEBUFFER,te,s.RENDERBUFFER,K)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),de(E.__webglDepthbuffer,A,!1);else{const Z=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,te=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,te),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,te)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ye(A,E,F){const Z=n.get(A);E!==void 0&&ye(Z.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),F!==void 0&&Be(A)}function Tt(A){const E=A.texture,F=n.get(A),Z=n.get(E);A.addEventListener("dispose",R);const te=A.textures,K=A.isWebGLCubeRenderTarget===!0,Se=te.length>1;if(Se||(Z.__webglTexture===void 0&&(Z.__webglTexture=s.createTexture()),Z.__version=E.version,o.memory.textures++),K){F.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(E.mipmaps&&E.mipmaps.length>0){F.__webglFramebuffer[fe]=[];for(let ve=0;ve<E.mipmaps.length;ve++)F.__webglFramebuffer[fe][ve]=s.createFramebuffer()}else F.__webglFramebuffer[fe]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){F.__webglFramebuffer=[];for(let fe=0;fe<E.mipmaps.length;fe++)F.__webglFramebuffer[fe]=s.createFramebuffer()}else F.__webglFramebuffer=s.createFramebuffer();if(Se)for(let fe=0,ve=te.length;fe<ve;fe++){const tt=n.get(te[fe]);tt.__webglTexture===void 0&&(tt.__webglTexture=s.createTexture(),o.memory.textures++)}if(A.samples>0&&Ze(A)===!1){F.__webglMultisampledFramebuffer=s.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let fe=0;fe<te.length;fe++){const ve=te[fe];F.__webglColorRenderbuffer[fe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,F.__webglColorRenderbuffer[fe]);const tt=r.convert(ve.format,ve.colorSpace),oe=r.convert(ve.type),xe=b(ve.internalFormat,tt,oe,ve.colorSpace,A.isXRRenderTarget===!0),Le=je(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,Le,xe,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,F.__webglColorRenderbuffer[fe])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(F.__webglDepthRenderbuffer=s.createRenderbuffer(),de(F.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(K){t.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),qe(s.TEXTURE_CUBE_MAP,E);for(let fe=0;fe<6;fe++)if(E.mipmaps&&E.mipmaps.length>0)for(let ve=0;ve<E.mipmaps.length;ve++)ye(F.__webglFramebuffer[fe][ve],A,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ve);else ye(F.__webglFramebuffer[fe],A,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(E)&&f(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let fe=0,ve=te.length;fe<ve;fe++){const tt=te[fe],oe=n.get(tt);t.bindTexture(s.TEXTURE_2D,oe.__webglTexture),qe(s.TEXTURE_2D,tt),ye(F.__webglFramebuffer,A,tt,s.COLOR_ATTACHMENT0+fe,s.TEXTURE_2D,0),m(tt)&&f(s.TEXTURE_2D)}t.unbindTexture()}else{let fe=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(fe=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(fe,Z.__webglTexture),qe(fe,E),E.mipmaps&&E.mipmaps.length>0)for(let ve=0;ve<E.mipmaps.length;ve++)ye(F.__webglFramebuffer[ve],A,E,s.COLOR_ATTACHMENT0,fe,ve);else ye(F.__webglFramebuffer,A,E,s.COLOR_ATTACHMENT0,fe,0);m(E)&&f(fe),t.unbindTexture()}A.depthBuffer&&Be(A)}function et(A){const E=A.textures;for(let F=0,Z=E.length;F<Z;F++){const te=E[F];if(m(te)){const K=S(A),Se=n.get(te).__webglTexture;t.bindTexture(K,Se),f(K),t.unbindTexture()}}}const Rt=[],P=[];function yn(A){if(A.samples>0){if(Ze(A)===!1){const E=A.textures,F=A.width,Z=A.height;let te=s.COLOR_BUFFER_BIT;const K=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Se=n.get(A),fe=E.length>1;if(fe)for(let ve=0;ve<E.length;ve++)t.bindFramebuffer(s.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Se.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let ve=0;ve<E.length;ve++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(te|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(te|=s.STENCIL_BUFFER_BIT)),fe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Se.__webglColorRenderbuffer[ve]);const tt=n.get(E[ve]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,tt,0)}s.blitFramebuffer(0,0,F,Z,0,0,F,Z,te,s.NEAREST),c===!0&&(Rt.length=0,P.length=0,Rt.push(s.COLOR_ATTACHMENT0+ve),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Rt.push(K),P.push(K),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,P)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Rt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),fe)for(let ve=0;ve<E.length;ve++){t.bindFramebuffer(s.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.RENDERBUFFER,Se.__webglColorRenderbuffer[ve]);const tt=n.get(E[ve]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Se.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.TEXTURE_2D,tt,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const E=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function je(A){return Math.min(i.maxSamples,A.samples)}function Ze(A){const E=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ae(A){const E=o.render.frame;h.get(A)!==E&&(h.set(A,E),A.update())}function gt(A,E){const F=A.colorSpace,Z=A.format,te=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||F!==sn&&F!==ki&&(Qe.getTransfer(F)===ut?(Z!==Ln||te!==Ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),E}function we(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=G,this.setTexture2D=Q,this.setTexture2DArray=q,this.setTexture3D=ie,this.setTextureCube=W,this.rebindTextures=Ye,this.setupRenderTarget=Tt,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=yn,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=Ze}function my(s,e){function t(n,i=ki){let r;const o=Qe.getTransfer(i);if(n===Ci)return s.UNSIGNED_BYTE;if(n===Ah)return s.UNSIGNED_SHORT_4_4_4_4;if(n===wh)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Vf)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===zf)return s.BYTE;if(n===Gf)return s.SHORT;if(n===ro)return s.UNSIGNED_SHORT;if(n===bh)return s.INT;if(n===Ms)return s.UNSIGNED_INT;if(n===zn)return s.FLOAT;if(n===Jo)return s.HALF_FLOAT;if(n===Wf)return s.ALPHA;if(n===Xf)return s.RGB;if(n===Ln)return s.RGBA;if(n===qf)return s.LUMINANCE;if(n===Yf)return s.LUMINANCE_ALPHA;if(n===Ys)return s.DEPTH_COMPONENT;if(n===Er)return s.DEPTH_STENCIL;if(n===Rh)return s.RED;if(n===Ch)return s.RED_INTEGER;if(n===$f)return s.RG;if(n===Ih)return s.RG_INTEGER;if(n===Lh)return s.RGBA_INTEGER;if(n===Va||n===Wa||n===Xa||n===qa)if(o===ut)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Va)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===qa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Va)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Wa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Xa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===qa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Dl||n===Ul||n===Ol||n===Fl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Dl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ul)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ol)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Fl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Bl||n===kl||n===Hl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Bl||n===kl)return o===ut?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Hl)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===zl||n===Gl||n===Vl||n===Wl||n===Xl||n===ql||n===Yl||n===$l||n===Kl||n===jl||n===Zl||n===Jl||n===Ql||n===eh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===zl)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Gl)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Vl)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Wl)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Xl)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ql)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Yl)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===$l)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Kl)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===jl)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Zl)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Jl)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ql)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===eh)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ya||n===th||n===nh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ya)return o===ut?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===th)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===nh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Kf||n===ih||n===sh||n===rh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ya)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ih)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===sh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===rh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Mr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const _y={type:"move"};class nl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ln,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ln,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ln,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),f=this._getHandJoint(l,g);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,_=.005;l.inputState.pinching&&d>p+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_y)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ln;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const gy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vy=`
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

}`;class xy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Ft,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ji({vertexShader:gy,fragmentShader:vy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new vt(new ea(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class My extends wr{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,_=null;const g=new xy,m=t.getContextAttributes();let f=null,S=null;const b=[],x=[],C=new Xe;let w=null;const R=new tn;R.viewport=new rt;const I=new tn;I.viewport=new rt;const T=[R,I],M=new N0;let L=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ae=b[j];return ae===void 0&&(ae=new nl,b[j]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(j){let ae=b[j];return ae===void 0&&(ae=new nl,b[j]=ae),ae.getGripSpace()},this.getHand=function(j){let ae=b[j];return ae===void 0&&(ae=new nl,b[j]=ae),ae.getHandSpace()};function z(j){const ae=x.indexOf(j.inputSource);if(ae===-1)return;const ye=b[ae];ye!==void 0&&(ye.update(j.inputSource,j.frame,l||o),ye.dispatchEvent({type:j.type,data:j.inputSource}))}function $(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",$),i.removeEventListener("inputsourceschange",Q);for(let j=0;j<b.length;j++){const ae=x[j];ae!==null&&(x[j]=null,b[j].disconnect(ae))}L=null,G=null,g.reset(),e.setRenderTarget(f),p=null,d=null,u=null,i=null,S=null,pt.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(f=e.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",$),i.addEventListener("inputsourceschange",Q),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(C),i.renderState.layers===void 0){const ae={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,t,ae),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Es(p.framebufferWidth,p.framebufferHeight,{format:Ln,type:Ci,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ae=null,ye=null,de=null;m.depth&&(de=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=m.stencil?Er:Ys,ye=m.stencil?Mr:Ms);const Pe={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:r};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(Pe),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new Es(d.textureWidth,d.textureHeight,{format:Ln,type:Ci,depthTexture:new fp(d.textureWidth,d.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),pt.setContext(i),pt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Q(j){for(let ae=0;ae<j.removed.length;ae++){const ye=j.removed[ae],de=x.indexOf(ye);de>=0&&(x[de]=null,b[de].disconnect(ye))}for(let ae=0;ae<j.added.length;ae++){const ye=j.added[ae];let de=x.indexOf(ye);if(de===-1){for(let Be=0;Be<b.length;Be++)if(Be>=x.length){x.push(ye),de=Be;break}else if(x[Be]===null){x[Be]=ye,de=Be;break}if(de===-1)break}const Pe=b[de];Pe&&Pe.connect(ye)}}const q=new N,ie=new N;function W(j,ae,ye){q.setFromMatrixPosition(ae.matrixWorld),ie.setFromMatrixPosition(ye.matrixWorld);const de=q.distanceTo(ie),Pe=ae.projectionMatrix.elements,Be=ye.projectionMatrix.elements,Ye=Pe[14]/(Pe[10]-1),Tt=Pe[14]/(Pe[10]+1),et=(Pe[9]+1)/Pe[5],Rt=(Pe[9]-1)/Pe[5],P=(Pe[8]-1)/Pe[0],yn=(Be[8]+1)/Be[0],je=Ye*P,Ze=Ye*yn,Ae=de/(-P+yn),gt=Ae*-P;if(ae.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(gt),j.translateZ(Ae),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Pe[10]===-1)j.projectionMatrix.copy(ae.projectionMatrix),j.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const we=Ye+Ae,A=Tt+Ae,E=je-gt,F=Ze+(de-gt),Z=et*Tt/A*we,te=Rt*Tt/A*we;j.projectionMatrix.makePerspective(E,F,Z,te,we,A),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ue(j,ae){ae===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ae.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let ae=j.near,ye=j.far;g.texture!==null&&(g.depthNear>0&&(ae=g.depthNear),g.depthFar>0&&(ye=g.depthFar)),M.near=I.near=R.near=ae,M.far=I.far=R.far=ye,(L!==M.near||G!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),L=M.near,G=M.far),R.layers.mask=j.layers.mask|2,I.layers.mask=j.layers.mask|4,M.layers.mask=R.layers.mask|I.layers.mask;const de=j.parent,Pe=M.cameras;ue(M,de);for(let Be=0;Be<Pe.length;Be++)ue(Pe[Be],de);Pe.length===2?W(M,R,I):M.projectionMatrix.copy(R.projectionMatrix),ge(j,M,de)};function ge(j,ae,ye){ye===null?j.matrix.copy(ae.matrixWorld):(j.matrix.copy(ye.matrixWorld),j.matrix.invert(),j.matrix.multiply(ae.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ae.projectionMatrix),j.projectionMatrixInverse.copy(ae.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=yr*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(j){c=j,d!==null&&(d.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(M)};let be=null;function qe(j,ae){if(h=ae.getViewerPose(l||o),_=ae,h!==null){const ye=h.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let de=!1;ye.length!==M.cameras.length&&(M.cameras.length=0,de=!0);for(let Be=0;Be<ye.length;Be++){const Ye=ye[Be];let Tt=null;if(p!==null)Tt=p.getViewport(Ye);else{const Rt=u.getViewSubImage(d,Ye);Tt=Rt.viewport,Be===0&&(e.setRenderTargetTextures(S,Rt.colorTexture,d.ignoreDepthValues?void 0:Rt.depthStencilTexture),e.setRenderTarget(S))}let et=T[Be];et===void 0&&(et=new tn,et.layers.enable(Be),et.viewport=new rt,T[Be]=et),et.matrix.fromArray(Ye.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(Ye.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(Tt.x,Tt.y,Tt.width,Tt.height),Be===0&&(M.matrix.copy(et.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),de===!0&&M.cameras.push(et)}const Pe=i.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")){const Be=u.getDepthInformation(ye[0]);Be&&Be.isValid&&Be.texture&&g.init(e,Be,i.renderState)}}for(let ye=0;ye<b.length;ye++){const de=x[ye],Pe=b[ye];de!==null&&Pe!==void 0&&Pe.update(de,ae,l||o)}be&&be(j,ae),ae.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ae}),_=null}const pt=new vp;pt.setAnimationLoop(qe),this.setAnimationLoop=function(j){be=j},this.dispose=function(){}}}const os=new ni,Ey=new ze;function yy(s,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,ap(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,S,b,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,x)):f.isMeshMatcapMaterial?(r(m,f),_(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),g(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,S,b):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===un&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===un&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const S=e.get(f),b=S.envMap,x=S.envMapRotation;b&&(m.envMap.value=b,os.copy(x),os.x*=-1,os.y*=-1,os.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(os.y*=-1,os.z*=-1),m.envMapRotation.value.setFromMatrix4(Ey.makeRotationFromEuler(os)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,S,b){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*S,m.scale.value=b*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,S){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===un&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){const S=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Sy(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,b){const x=b.program;n.uniformBlockBinding(S,x)}function l(S,b){let x=i[S.id];x===void 0&&(_(S),x=h(S),i[S.id]=x,S.addEventListener("dispose",m));const C=b.program;n.updateUBOMapping(S,C);const w=e.render.frame;r[S.id]!==w&&(d(S),r[S.id]=w)}function h(S){const b=u();S.__bindingPointIndex=b;const x=s.createBuffer(),C=S.__size,w=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,C,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,x),x}function u(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const b=i[S.id],x=S.uniforms,C=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let w=0,R=x.length;w<R;w++){const I=Array.isArray(x[w])?x[w]:[x[w]];for(let T=0,M=I.length;T<M;T++){const L=I[T];if(p(L,w,T,C)===!0){const G=L.__offset,z=Array.isArray(L.value)?L.value:[L.value];let $=0;for(let Q=0;Q<z.length;Q++){const q=z[Q],ie=g(q);typeof q=="number"||typeof q=="boolean"?(L.__data[0]=q,s.bufferSubData(s.UNIFORM_BUFFER,G+$,L.__data)):q.isMatrix3?(L.__data[0]=q.elements[0],L.__data[1]=q.elements[1],L.__data[2]=q.elements[2],L.__data[3]=0,L.__data[4]=q.elements[3],L.__data[5]=q.elements[4],L.__data[6]=q.elements[5],L.__data[7]=0,L.__data[8]=q.elements[6],L.__data[9]=q.elements[7],L.__data[10]=q.elements[8],L.__data[11]=0):(q.toArray(L.__data,$),$+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,G,L.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(S,b,x,C){const w=S.value,R=b+"_"+x;if(C[R]===void 0)return typeof w=="number"||typeof w=="boolean"?C[R]=w:C[R]=w.clone(),!0;{const I=C[R];if(typeof w=="number"||typeof w=="boolean"){if(I!==w)return C[R]=w,!0}else if(I.equals(w)===!1)return I.copy(w),!0}return!1}function _(S){const b=S.uniforms;let x=0;const C=16;for(let R=0,I=b.length;R<I;R++){const T=Array.isArray(b[R])?b[R]:[b[R]];for(let M=0,L=T.length;M<L;M++){const G=T[M],z=Array.isArray(G.value)?G.value:[G.value];for(let $=0,Q=z.length;$<Q;$++){const q=z[$],ie=g(q),W=x%C,ue=W%ie.boundary,ge=W+ue;x+=ue,ge!==0&&C-ge<ie.storage&&(x+=C-ge),G.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=x,x+=ie.storage}}}const w=x%C;return w>0&&(x+=C-w),S.__size=x,S.__cache={},this}function g(S){const b={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(b.boundary=4,b.storage=4):S.isVector2?(b.boundary=8,b.storage=8):S.isVector3||S.isColor?(b.boundary=16,b.storage=12):S.isVector4?(b.boundary=16,b.storage=16):S.isMatrix3?(b.boundary=48,b.storage=48):S.isMatrix4?(b.boundary=64,b.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),b}function m(S){const b=S.target;b.removeEventListener("dispose",m);const x=o.indexOf(b.__bindingPointIndex);o.splice(x,1),s.deleteBuffer(i[b.id]),delete i[b.id],delete r[b.id]}function f(){for(const S in i)s.deleteBuffer(i[S]);o=[],i={},r={}}return{bind:c,update:l,dispose:f}}class Ty{constructor(e={}){const{canvas:t=wg(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const _=new Uint32Array(4),g=new Int32Array(4);let m=null,f=null;const S=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ht,this.toneMapping=Yi,this.toneMappingExposure=1;const x=this;let C=!1,w=0,R=0,I=null,T=-1,M=null;const L=new rt,G=new rt;let z=null;const $=new Ne(0);let Q=0,q=t.width,ie=t.height,W=1,ue=null,ge=null;const be=new rt(0,0,q,ie),qe=new rt(0,0,q,ie);let pt=!1;const j=new Oh;let ae=!1,ye=!1;const de=new ze,Pe=new ze,Be=new N,Ye=new rt,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let et=!1;function Rt(){return I===null?W:1}let P=n;function yn(y,U){return t.getContext(y,U)}try{const y={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Th}`),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",me,!1),t.addEventListener("webglcontextcreationerror",pe,!1),P===null){const U="webgl2";if(P=yn(U,y),P===null)throw yn(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let je,Ze,Ae,gt,we,A,E,F,Z,te,K,Se,fe,ve,tt,oe,xe,Le,De,Me,Je,Ge,mt,D;function le(){je=new PM(P),je.init(),Ge=new my(P,je),Ze=new wM(P,je,e,Ge),Ae=new fy(P,je),Ze.reverseDepthBuffer&&d&&Ae.buffers.depth.setReversed(!0),gt=new OM(P),we=new ey,A=new py(P,je,Ae,we,Ze,Ge,gt),E=new CM(x),F=new NM(x),Z=new V0(P),mt=new bM(P,Z),te=new DM(P,Z,gt,mt),K=new BM(P,te,Z,gt),De=new FM(P,Ze,A),oe=new RM(we),Se=new QE(x,E,F,je,Ze,mt,oe),fe=new yy(x,we),ve=new ny,tt=new cy(je),Le=new TM(x,E,F,Ae,K,p,c),xe=new uy(x,K,Ze),D=new Sy(P,gt,Ze,Ae),Me=new AM(P,je,gt),Je=new UM(P,je,gt),gt.programs=Se.programs,x.capabilities=Ze,x.extensions=je,x.properties=we,x.renderLists=ve,x.shadowMap=xe,x.state=Ae,x.info=gt}le();const V=new My(x,P);this.xr=V,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const y=je.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=je.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(y){y!==void 0&&(W=y,this.setSize(q,ie,!1))},this.getSize=function(y){return y.set(q,ie)},this.setSize=function(y,U,k=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=y,ie=U,t.width=Math.floor(y*W),t.height=Math.floor(U*W),k===!0&&(t.style.width=y+"px",t.style.height=U+"px"),this.setViewport(0,0,y,U)},this.getDrawingBufferSize=function(y){return y.set(q*W,ie*W).floor()},this.setDrawingBufferSize=function(y,U,k){q=y,ie=U,W=k,t.width=Math.floor(y*k),t.height=Math.floor(U*k),this.setViewport(0,0,y,U)},this.getCurrentViewport=function(y){return y.copy(L)},this.getViewport=function(y){return y.copy(be)},this.setViewport=function(y,U,k,H){y.isVector4?be.set(y.x,y.y,y.z,y.w):be.set(y,U,k,H),Ae.viewport(L.copy(be).multiplyScalar(W).round())},this.getScissor=function(y){return y.copy(qe)},this.setScissor=function(y,U,k,H){y.isVector4?qe.set(y.x,y.y,y.z,y.w):qe.set(y,U,k,H),Ae.scissor(G.copy(qe).multiplyScalar(W).round())},this.getScissorTest=function(){return pt},this.setScissorTest=function(y){Ae.setScissorTest(pt=y)},this.setOpaqueSort=function(y){ue=y},this.setTransparentSort=function(y){ge=y},this.getClearColor=function(y){return y.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor.apply(Le,arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha.apply(Le,arguments)},this.clear=function(y=!0,U=!0,k=!0){let H=0;if(y){let O=!1;if(I!==null){const se=I.texture.format;O=se===Lh||se===Ih||se===Ch}if(O){const se=I.texture.type,he=se===Ci||se===Ms||se===ro||se===Mr||se===Ah||se===wh,_e=Le.getClearColor(),Ee=Le.getClearAlpha(),Ue=_e.r,Oe=_e.g,Ce=_e.b;he?(_[0]=Ue,_[1]=Oe,_[2]=Ce,_[3]=Ee,P.clearBufferuiv(P.COLOR,0,_)):(g[0]=Ue,g[1]=Oe,g[2]=Ce,g[3]=Ee,P.clearBufferiv(P.COLOR,0,g))}else H|=P.COLOR_BUFFER_BIT}U&&(H|=P.DEPTH_BUFFER_BIT),k&&(H|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",me,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),Le.dispose(),ve.dispose(),tt.dispose(),we.dispose(),E.dispose(),F.dispose(),K.dispose(),mt.dispose(),D.dispose(),Se.dispose(),V.dispose(),V.removeEventListener("sessionstart",Yh),V.removeEventListener("sessionend",$h),Qi.stop()};function J(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const y=gt.autoReset,U=xe.enabled,k=xe.autoUpdate,H=xe.needsUpdate,O=xe.type;le(),gt.autoReset=y,xe.enabled=U,xe.autoUpdate=k,xe.needsUpdate=H,xe.type=O}function pe(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function ke(y){const U=y.target;U.removeEventListener("dispose",ke),At(U)}function At(y){Wt(y),we.remove(y)}function Wt(y){const U=we.get(y).programs;U!==void 0&&(U.forEach(function(k){Se.releaseProgram(k)}),y.isShaderMaterial&&Se.releaseShaderCache(y))}this.renderBufferDirect=function(y,U,k,H,O,se){U===null&&(U=Tt);const he=O.isMesh&&O.matrixWorld.determinant()<0,_e=Pp(y,U,k,H,O);Ae.setMaterial(H,he);let Ee=k.index,Ue=1;if(H.wireframe===!0){if(Ee=te.getWireframeAttribute(k),Ee===void 0)return;Ue=2}const Oe=k.drawRange,Ce=k.attributes.position;let nt=Oe.start*Ue,ot=(Oe.start+Oe.count)*Ue;se!==null&&(nt=Math.max(nt,se.start*Ue),ot=Math.min(ot,(se.start+se.count)*Ue)),Ee!==null?(nt=Math.max(nt,0),ot=Math.min(ot,Ee.count)):Ce!=null&&(nt=Math.max(nt,0),ot=Math.min(ot,Ce.count));const It=ot-nt;if(It<0||It===1/0)return;mt.setup(O,H,_e,k,Ee);let wt,it=Me;if(Ee!==null&&(wt=Z.get(Ee),it=Je,it.setIndex(wt)),O.isMesh)H.wireframe===!0?(Ae.setLineWidth(H.wireframeLinewidth*Rt()),it.setMode(P.LINES)):it.setMode(P.TRIANGLES);else if(O.isLine){let Ie=H.linewidth;Ie===void 0&&(Ie=1),Ae.setLineWidth(Ie*Rt()),O.isLineSegments?it.setMode(P.LINES):O.isLineLoop?it.setMode(P.LINE_LOOP):it.setMode(P.LINE_STRIP)}else O.isPoints?it.setMode(P.POINTS):O.isSprite&&it.setMode(P.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)it.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(je.get("WEBGL_multi_draw"))it.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Ie=O._multiDrawStarts,Bt=O._multiDrawCounts,at=O._multiDrawCount,Pn=Ee?Z.get(Ee).bytesPerElement:1,ys=we.get(H).currentProgram.getUniforms();for(let fn=0;fn<at;fn++)ys.setValue(P,"_gl_DrawID",fn),it.render(Ie[fn]/Pn,Bt[fn])}else if(O.isInstancedMesh)it.renderInstances(nt,It,O.count);else if(k.isInstancedBufferGeometry){const Ie=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Bt=Math.min(k.instanceCount,Ie);it.renderInstances(nt,It,Bt)}else it.render(nt,It)};function ct(y,U,k){y.transparent===!0&&y.side===Bn&&y.forceSinglePass===!1?(y.side=un,y.needsUpdate=!0,ia(y,U,k),y.side=Ri,y.needsUpdate=!0,ia(y,U,k),y.side=Bn):ia(y,U,k)}this.compile=function(y,U,k=null){k===null&&(k=y),f=tt.get(k),f.init(U),b.push(f),k.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),y!==k&&y.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),f.setupLights();const H=new Set;return y.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const se=O.material;if(se)if(Array.isArray(se))for(let he=0;he<se.length;he++){const _e=se[he];ct(_e,k,O),H.add(_e)}else ct(se,k,O),H.add(se)}),b.pop(),f=null,H},this.compileAsync=function(y,U,k=null){const H=this.compile(y,U,k);return new Promise(O=>{function se(){if(H.forEach(function(he){we.get(he).currentProgram.isReady()&&H.delete(he)}),H.size===0){O(y);return}setTimeout(se,10)}je.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let Nn=null;function oi(y){Nn&&Nn(y)}function Yh(){Qi.stop()}function $h(){Qi.start()}const Qi=new vp;Qi.setAnimationLoop(oi),typeof self<"u"&&Qi.setContext(self),this.setAnimationLoop=function(y){Nn=y,V.setAnimationLoop(y),y===null?Qi.stop():Qi.start()},V.addEventListener("sessionstart",Yh),V.addEventListener("sessionend",$h),this.render=function(y,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(U),U=V.getCamera()),y.isScene===!0&&y.onBeforeRender(x,y,U,I),f=tt.get(y,b.length),f.init(U),b.push(f),Pe.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),j.setFromProjectionMatrix(Pe),ye=this.localClippingEnabled,ae=oe.init(this.clippingPlanes,ye),m=ve.get(y,S.length),m.init(),S.push(m),V.enabled===!0&&V.isPresenting===!0){const se=x.xr.getDepthSensingMesh();se!==null&&_c(se,U,-1/0,x.sortObjects)}_c(y,U,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(ue,ge),et=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,et&&Le.addToRenderList(m,y),this.info.render.frame++,ae===!0&&oe.beginShadows();const k=f.state.shadowsArray;xe.render(k,y,U),ae===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,O=m.transmissive;if(f.setupLights(),U.isArrayCamera){const se=U.cameras;if(O.length>0)for(let he=0,_e=se.length;he<_e;he++){const Ee=se[he];jh(H,O,y,Ee)}et&&Le.render(y);for(let he=0,_e=se.length;he<_e;he++){const Ee=se[he];Kh(m,y,Ee,Ee.viewport)}}else O.length>0&&jh(H,O,y,U),et&&Le.render(y),Kh(m,y,U);I!==null&&(A.updateMultisampleRenderTarget(I),A.updateRenderTargetMipmap(I)),y.isScene===!0&&y.onAfterRender(x,y,U),mt.resetDefaultState(),T=-1,M=null,b.pop(),b.length>0?(f=b[b.length-1],ae===!0&&oe.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function _c(y,U,k,H){if(y.visible===!1)return;if(y.layers.test(U.layers)){if(y.isGroup)k=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(U);else if(y.isLight)f.pushLight(y),y.castShadow&&f.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||j.intersectsSprite(y)){H&&Ye.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Pe);const he=K.update(y),_e=y.material;_e.visible&&m.push(y,he,_e,k,Ye.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||j.intersectsObject(y))){const he=K.update(y),_e=y.material;if(H&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Ye.copy(y.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),Ye.copy(he.boundingSphere.center)),Ye.applyMatrix4(y.matrixWorld).applyMatrix4(Pe)),Array.isArray(_e)){const Ee=he.groups;for(let Ue=0,Oe=Ee.length;Ue<Oe;Ue++){const Ce=Ee[Ue],nt=_e[Ce.materialIndex];nt&&nt.visible&&m.push(y,he,nt,k,Ye.z,Ce)}}else _e.visible&&m.push(y,he,_e,k,Ye.z,null)}}const se=y.children;for(let he=0,_e=se.length;he<_e;he++)_c(se[he],U,k,H)}function Kh(y,U,k,H){const O=y.opaque,se=y.transmissive,he=y.transparent;f.setupLightsView(k),ae===!0&&oe.setGlobalState(x.clippingPlanes,k),H&&Ae.viewport(L.copy(H)),O.length>0&&na(O,U,k),se.length>0&&na(se,U,k),he.length>0&&na(he,U,k),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function jh(y,U,k,H){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[H.id]===void 0&&(f.state.transmissionRenderTarget[H.id]=new Es(1,1,{generateMipmaps:!0,type:je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float")?Jo:Ci,minFilter:Si,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const se=f.state.transmissionRenderTarget[H.id],he=H.viewport||L;se.setSize(he.z,he.w);const _e=x.getRenderTarget();x.setRenderTarget(se),x.getClearColor($),Q=x.getClearAlpha(),Q<1&&x.setClearColor(16777215,.5),x.clear(),et&&Le.render(k);const Ee=x.toneMapping;x.toneMapping=Yi;const Ue=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),f.setupLightsView(H),ae===!0&&oe.setGlobalState(x.clippingPlanes,H),na(y,k,H),A.updateMultisampleRenderTarget(se),A.updateRenderTargetMipmap(se),je.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let Ce=0,nt=U.length;Ce<nt;Ce++){const ot=U[Ce],It=ot.object,wt=ot.geometry,it=ot.material,Ie=ot.group;if(it.side===Bn&&It.layers.test(H.layers)){const Bt=it.side;it.side=un,it.needsUpdate=!0,Zh(It,k,H,wt,it,Ie),it.side=Bt,it.needsUpdate=!0,Oe=!0}}Oe===!0&&(A.updateMultisampleRenderTarget(se),A.updateRenderTargetMipmap(se))}x.setRenderTarget(_e),x.setClearColor($,Q),Ue!==void 0&&(H.viewport=Ue),x.toneMapping=Ee}function na(y,U,k){const H=U.isScene===!0?U.overrideMaterial:null;for(let O=0,se=y.length;O<se;O++){const he=y[O],_e=he.object,Ee=he.geometry,Ue=H===null?he.material:H,Oe=he.group;_e.layers.test(k.layers)&&Zh(_e,U,k,Ee,Ue,Oe)}}function Zh(y,U,k,H,O,se){y.onBeforeRender(x,U,k,H,O,se),y.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),O.onBeforeRender(x,U,k,H,y,se),O.transparent===!0&&O.side===Bn&&O.forceSinglePass===!1?(O.side=un,O.needsUpdate=!0,x.renderBufferDirect(k,U,H,O,y,se),O.side=Ri,O.needsUpdate=!0,x.renderBufferDirect(k,U,H,O,y,se),O.side=Bn):x.renderBufferDirect(k,U,H,O,y,se),y.onAfterRender(x,U,k,H,O,se)}function ia(y,U,k){U.isScene!==!0&&(U=Tt);const H=we.get(y),O=f.state.lights,se=f.state.shadowsArray,he=O.state.version,_e=Se.getParameters(y,O.state,se,U,k),Ee=Se.getProgramCacheKey(_e);let Ue=H.programs;H.environment=y.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(y.isMeshStandardMaterial?F:E).get(y.envMap||H.environment),H.envMapRotation=H.environment!==null&&y.envMap===null?U.environmentRotation:y.envMapRotation,Ue===void 0&&(y.addEventListener("dispose",ke),Ue=new Map,H.programs=Ue);let Oe=Ue.get(Ee);if(Oe!==void 0){if(H.currentProgram===Oe&&H.lightsStateVersion===he)return Qh(y,_e),Oe}else _e.uniforms=Se.getUniforms(y),y.onBeforeCompile(_e,x),Oe=Se.acquireProgram(_e,Ee),Ue.set(Ee,Oe),H.uniforms=_e.uniforms;const Ce=H.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ce.clippingPlanes=oe.uniform),Qh(y,_e),H.needsLights=Up(y),H.lightsStateVersion=he,H.needsLights&&(Ce.ambientLightColor.value=O.state.ambient,Ce.lightProbe.value=O.state.probe,Ce.directionalLights.value=O.state.directional,Ce.directionalLightShadows.value=O.state.directionalShadow,Ce.spotLights.value=O.state.spot,Ce.spotLightShadows.value=O.state.spotShadow,Ce.rectAreaLights.value=O.state.rectArea,Ce.ltc_1.value=O.state.rectAreaLTC1,Ce.ltc_2.value=O.state.rectAreaLTC2,Ce.pointLights.value=O.state.point,Ce.pointLightShadows.value=O.state.pointShadow,Ce.hemisphereLights.value=O.state.hemi,Ce.directionalShadowMap.value=O.state.directionalShadowMap,Ce.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ce.spotShadowMap.value=O.state.spotShadowMap,Ce.spotLightMatrix.value=O.state.spotLightMatrix,Ce.spotLightMap.value=O.state.spotLightMap,Ce.pointShadowMap.value=O.state.pointShadowMap,Ce.pointShadowMatrix.value=O.state.pointShadowMatrix),H.currentProgram=Oe,H.uniformsList=null,Oe}function Jh(y){if(y.uniformsList===null){const U=y.currentProgram.getUniforms();y.uniformsList=$a.seqWithValue(U.seq,y.uniforms)}return y.uniformsList}function Qh(y,U){const k=we.get(y);k.outputColorSpace=U.outputColorSpace,k.batching=U.batching,k.batchingColor=U.batchingColor,k.instancing=U.instancing,k.instancingColor=U.instancingColor,k.instancingMorph=U.instancingMorph,k.skinning=U.skinning,k.morphTargets=U.morphTargets,k.morphNormals=U.morphNormals,k.morphColors=U.morphColors,k.morphTargetsCount=U.morphTargetsCount,k.numClippingPlanes=U.numClippingPlanes,k.numIntersection=U.numClipIntersection,k.vertexAlphas=U.vertexAlphas,k.vertexTangents=U.vertexTangents,k.toneMapping=U.toneMapping}function Pp(y,U,k,H,O){U.isScene!==!0&&(U=Tt),A.resetTextureUnits();const se=U.fog,he=H.isMeshStandardMaterial?U.environment:null,_e=I===null?x.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:sn,Ee=(H.isMeshStandardMaterial?F:E).get(H.envMap||he),Ue=H.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Oe=!!k.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ce=!!k.morphAttributes.position,nt=!!k.morphAttributes.normal,ot=!!k.morphAttributes.color;let It=Yi;H.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(It=x.toneMapping);const wt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,it=wt!==void 0?wt.length:0,Ie=we.get(H),Bt=f.state.lights;if(ae===!0&&(ye===!0||y!==M)){const jt=y===M&&H.id===T;oe.setState(H,y,jt)}let at=!1;H.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==Bt.state.version||Ie.outputColorSpace!==_e||O.isBatchedMesh&&Ie.batching===!1||!O.isBatchedMesh&&Ie.batching===!0||O.isBatchedMesh&&Ie.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ie.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ie.instancing===!1||!O.isInstancedMesh&&Ie.instancing===!0||O.isSkinnedMesh&&Ie.skinning===!1||!O.isSkinnedMesh&&Ie.skinning===!0||O.isInstancedMesh&&Ie.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ie.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ie.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ie.instancingMorph===!1&&O.morphTexture!==null||Ie.envMap!==Ee||H.fog===!0&&Ie.fog!==se||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==oe.numPlanes||Ie.numIntersection!==oe.numIntersection)||Ie.vertexAlphas!==Ue||Ie.vertexTangents!==Oe||Ie.morphTargets!==Ce||Ie.morphNormals!==nt||Ie.morphColors!==ot||Ie.toneMapping!==It||Ie.morphTargetsCount!==it)&&(at=!0):(at=!0,Ie.__version=H.version);let Pn=Ie.currentProgram;at===!0&&(Pn=ia(H,U,O));let ys=!1,fn=!1,Nr=!1;const Mt=Pn.getUniforms(),Sn=Ie.uniforms;if(Ae.useProgram(Pn.program)&&(ys=!0,fn=!0,Nr=!0),H.id!==T&&(T=H.id,fn=!0),ys||M!==y){Ae.buffers.depth.getReversed()?(de.copy(y.projectionMatrix),Cg(de),Ig(de),Mt.setValue(P,"projectionMatrix",de)):Mt.setValue(P,"projectionMatrix",y.projectionMatrix),Mt.setValue(P,"viewMatrix",y.matrixWorldInverse);const rn=Mt.map.cameraPosition;rn!==void 0&&rn.setValue(P,Be.setFromMatrixPosition(y.matrixWorld)),Ze.logarithmicDepthBuffer&&Mt.setValue(P,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Mt.setValue(P,"isOrthographic",y.isOrthographicCamera===!0),M!==y&&(M=y,fn=!0,Nr=!0)}if(O.isSkinnedMesh){Mt.setOptional(P,O,"bindMatrix"),Mt.setOptional(P,O,"bindMatrixInverse");const jt=O.skeleton;jt&&(jt.boneTexture===null&&jt.computeBoneTexture(),Mt.setValue(P,"boneTexture",jt.boneTexture,A))}O.isBatchedMesh&&(Mt.setOptional(P,O,"batchingTexture"),Mt.setValue(P,"batchingTexture",O._matricesTexture,A),Mt.setOptional(P,O,"batchingIdTexture"),Mt.setValue(P,"batchingIdTexture",O._indirectTexture,A),Mt.setOptional(P,O,"batchingColorTexture"),O._colorsTexture!==null&&Mt.setValue(P,"batchingColorTexture",O._colorsTexture,A));const Tn=k.morphAttributes;if((Tn.position!==void 0||Tn.normal!==void 0||Tn.color!==void 0)&&De.update(O,k,Pn),(fn||Ie.receiveShadow!==O.receiveShadow)&&(Ie.receiveShadow=O.receiveShadow,Mt.setValue(P,"receiveShadow",O.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Sn.envMap.value=Ee,Sn.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&U.environment!==null&&(Sn.envMapIntensity.value=U.environmentIntensity),fn&&(Mt.setValue(P,"toneMappingExposure",x.toneMappingExposure),Ie.needsLights&&Dp(Sn,Nr),se&&H.fog===!0&&fe.refreshFogUniforms(Sn,se),fe.refreshMaterialUniforms(Sn,H,W,ie,f.state.transmissionRenderTarget[y.id]),$a.upload(P,Jh(Ie),Sn,A)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&($a.upload(P,Jh(Ie),Sn,A),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Mt.setValue(P,"center",O.center),Mt.setValue(P,"modelViewMatrix",O.modelViewMatrix),Mt.setValue(P,"normalMatrix",O.normalMatrix),Mt.setValue(P,"modelMatrix",O.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const jt=H.uniformsGroups;for(let rn=0,gc=jt.length;rn<gc;rn++){const es=jt[rn];D.update(es,Pn),D.bind(es,Pn)}}return Pn}function Dp(y,U){y.ambientLightColor.needsUpdate=U,y.lightProbe.needsUpdate=U,y.directionalLights.needsUpdate=U,y.directionalLightShadows.needsUpdate=U,y.pointLights.needsUpdate=U,y.pointLightShadows.needsUpdate=U,y.spotLights.needsUpdate=U,y.spotLightShadows.needsUpdate=U,y.rectAreaLights.needsUpdate=U,y.hemisphereLights.needsUpdate=U}function Up(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(y,U,k){we.get(y.texture).__webglTexture=U,we.get(y.depthTexture).__webglTexture=k;const H=we.get(y);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=k===void 0,H.__autoAllocateDepthBuffer||je.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,U){const k=we.get(y);k.__webglFramebuffer=U,k.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(y,U=0,k=0){I=y,w=U,R=k;let H=!0,O=null,se=!1,he=!1;if(y){const Ee=we.get(y);if(Ee.__useDefaultFramebuffer!==void 0)Ae.bindFramebuffer(P.FRAMEBUFFER,null),H=!1;else if(Ee.__webglFramebuffer===void 0)A.setupRenderTarget(y);else if(Ee.__hasExternalTextures)A.rebindTextures(y,we.get(y.texture).__webglTexture,we.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Ce=y.depthTexture;if(Ee.__boundDepthTexture!==Ce){if(Ce!==null&&we.has(Ce)&&(y.width!==Ce.image.width||y.height!==Ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(y)}}const Ue=y.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(he=!0);const Oe=we.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Oe[U])?O=Oe[U][k]:O=Oe[U],se=!0):y.samples>0&&A.useMultisampledRTT(y)===!1?O=we.get(y).__webglMultisampledFramebuffer:Array.isArray(Oe)?O=Oe[k]:O=Oe,L.copy(y.viewport),G.copy(y.scissor),z=y.scissorTest}else L.copy(be).multiplyScalar(W).floor(),G.copy(qe).multiplyScalar(W).floor(),z=pt;if(Ae.bindFramebuffer(P.FRAMEBUFFER,O)&&H&&Ae.drawBuffers(y,O),Ae.viewport(L),Ae.scissor(G),Ae.setScissorTest(z),se){const Ee=we.get(y.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ee.__webglTexture,k)}else if(he){const Ee=we.get(y.texture),Ue=U||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ee.__webglTexture,k||0,Ue)}T=-1},this.readRenderTargetPixels=function(y,U,k,H,O,se,he){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=we.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&he!==void 0&&(_e=_e[he]),_e){Ae.bindFramebuffer(P.FRAMEBUFFER,_e);try{const Ee=y.texture,Ue=Ee.format,Oe=Ee.type;if(!Ze.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ze.textureTypeReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=y.width-H&&k>=0&&k<=y.height-O&&P.readPixels(U,k,H,O,Ge.convert(Ue),Ge.convert(Oe),se)}finally{const Ee=I!==null?we.get(I).__webglFramebuffer:null;Ae.bindFramebuffer(P.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(y,U,k,H,O,se,he){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=we.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&he!==void 0&&(_e=_e[he]),_e){const Ee=y.texture,Ue=Ee.format,Oe=Ee.type;if(!Ze.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ze.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=y.width-H&&k>=0&&k<=y.height-O){Ae.bindFramebuffer(P.FRAMEBUFFER,_e);const Ce=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Ce),P.bufferData(P.PIXEL_PACK_BUFFER,se.byteLength,P.STREAM_READ),P.readPixels(U,k,H,O,Ge.convert(Ue),Ge.convert(Oe),0);const nt=I!==null?we.get(I).__webglFramebuffer:null;Ae.bindFramebuffer(P.FRAMEBUFFER,nt);const ot=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Rg(P,ot,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Ce),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,se),P.deleteBuffer(Ce),P.deleteSync(ot),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,U=null,k=0){y.isTexture!==!0&&(Vs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,y=arguments[1]);const H=Math.pow(2,-k),O=Math.floor(y.image.width*H),se=Math.floor(y.image.height*H),he=U!==null?U.x:0,_e=U!==null?U.y:0;A.setTexture2D(y,0),P.copyTexSubImage2D(P.TEXTURE_2D,k,0,0,he,_e,O,se),Ae.unbindTexture()};const Op=P.createFramebuffer(),Fp=P.createFramebuffer();this.copyTextureToTexture=function(y,U,k=null,H=null,O=0,se=null){y.isTexture!==!0&&(Vs("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,y=arguments[1],U=arguments[2],se=arguments[3]||0,k=null),se===null&&(O!==0?(Vs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),se=O,O=0):se=0);let he,_e,Ee,Ue,Oe,Ce,nt,ot,It;const wt=y.isCompressedTexture?y.mipmaps[se]:y.image;if(k!==null)he=k.max.x-k.min.x,_e=k.max.y-k.min.y,Ee=k.isBox3?k.max.z-k.min.z:1,Ue=k.min.x,Oe=k.min.y,Ce=k.isBox3?k.min.z:0;else{const Tn=Math.pow(2,-O);he=Math.floor(wt.width*Tn),_e=Math.floor(wt.height*Tn),y.isDataArrayTexture?Ee=wt.depth:y.isData3DTexture?Ee=Math.floor(wt.depth*Tn):Ee=1,Ue=0,Oe=0,Ce=0}H!==null?(nt=H.x,ot=H.y,It=H.z):(nt=0,ot=0,It=0);const it=Ge.convert(U.format),Ie=Ge.convert(U.type);let Bt;U.isData3DTexture?(A.setTexture3D(U,0),Bt=P.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(A.setTexture2DArray(U,0),Bt=P.TEXTURE_2D_ARRAY):(A.setTexture2D(U,0),Bt=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);const at=P.getParameter(P.UNPACK_ROW_LENGTH),Pn=P.getParameter(P.UNPACK_IMAGE_HEIGHT),ys=P.getParameter(P.UNPACK_SKIP_PIXELS),fn=P.getParameter(P.UNPACK_SKIP_ROWS),Nr=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,wt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,wt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ue),P.pixelStorei(P.UNPACK_SKIP_ROWS,Oe),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ce);const Mt=y.isDataArrayTexture||y.isData3DTexture,Sn=U.isDataArrayTexture||U.isData3DTexture;if(y.isDepthTexture){const Tn=we.get(y),jt=we.get(U),rn=we.get(Tn.__renderTarget),gc=we.get(jt.__renderTarget);Ae.bindFramebuffer(P.READ_FRAMEBUFFER,rn.__webglFramebuffer),Ae.bindFramebuffer(P.DRAW_FRAMEBUFFER,gc.__webglFramebuffer);for(let es=0;es<Ee;es++)Mt&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,we.get(y).__webglTexture,O,Ce+es),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,we.get(U).__webglTexture,se,It+es)),P.blitFramebuffer(Ue,Oe,he,_e,nt,ot,he,_e,P.DEPTH_BUFFER_BIT,P.NEAREST);Ae.bindFramebuffer(P.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(O!==0||y.isRenderTargetTexture||we.has(y)){const Tn=we.get(y),jt=we.get(U);Ae.bindFramebuffer(P.READ_FRAMEBUFFER,Op),Ae.bindFramebuffer(P.DRAW_FRAMEBUFFER,Fp);for(let rn=0;rn<Ee;rn++)Mt?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Tn.__webglTexture,O,Ce+rn):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Tn.__webglTexture,O),Sn?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,jt.__webglTexture,se,It+rn):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,jt.__webglTexture,se),O!==0?P.blitFramebuffer(Ue,Oe,he,_e,nt,ot,he,_e,P.COLOR_BUFFER_BIT,P.NEAREST):Sn?P.copyTexSubImage3D(Bt,se,nt,ot,It+rn,Ue,Oe,he,_e):P.copyTexSubImage2D(Bt,se,nt,ot,Ue,Oe,he,_e);Ae.bindFramebuffer(P.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Sn?y.isDataTexture||y.isData3DTexture?P.texSubImage3D(Bt,se,nt,ot,It,he,_e,Ee,it,Ie,wt.data):U.isCompressedArrayTexture?P.compressedTexSubImage3D(Bt,se,nt,ot,It,he,_e,Ee,it,wt.data):P.texSubImage3D(Bt,se,nt,ot,It,he,_e,Ee,it,Ie,wt):y.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,se,nt,ot,he,_e,it,Ie,wt.data):y.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,se,nt,ot,wt.width,wt.height,it,wt.data):P.texSubImage2D(P.TEXTURE_2D,se,nt,ot,he,_e,it,Ie,wt);P.pixelStorei(P.UNPACK_ROW_LENGTH,at),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Pn),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ys),P.pixelStorei(P.UNPACK_SKIP_ROWS,fn),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Nr),se===0&&U.generateMipmaps&&P.generateMipmap(Bt),Ae.unbindTexture()},this.copyTextureToTexture3D=function(y,U,k=null,H=null,O=0){return y.isTexture!==!0&&(Vs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,H=arguments[1]||null,y=arguments[2],U=arguments[3],O=arguments[4]||0),Vs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,U,k,H,O)},this.initRenderTarget=function(y){we.get(y).__webglFramebuffer===void 0&&A.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?A.setTextureCube(y,0):y.isData3DTexture?A.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?A.setTexture2DArray(y,0):A.setTexture2D(y,0),Ae.unbindTexture()},this.resetState=function(){w=0,R=0,I=null,Ae.reset(),mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}}function Bd(s,e){if(e===eg)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===oh||e===jf){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===oh)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class by extends Ir{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Iy(t)}),this.register(function(t){return new Ly(t)}),this.register(function(t){return new Hy(t)}),this.register(function(t){return new zy(t)}),this.register(function(t){return new Gy(t)}),this.register(function(t){return new Py(t)}),this.register(function(t){return new Dy(t)}),this.register(function(t){return new Uy(t)}),this.register(function(t){return new Oy(t)}),this.register(function(t){return new Cy(t)}),this.register(function(t){return new Fy(t)}),this.register(function(t){return new Ny(t)}),this.register(function(t){return new ky(t)}),this.register(function(t){return new By(t)}),this.register(function(t){return new wy(t)}),this.register(function(t){return new Vy(t)}),this.register(function(t){return new Wy(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=to.extractUrlBase(e);o=to.resolveURL(l,this.path)}else o=to.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new _p(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Sp){try{o[Ke.KHR_BINARY_GLTF]=new Xy(e)}catch(u){i&&i(u);return}r=JSON.parse(o[Ke.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new sS(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Ke.KHR_MATERIALS_UNLIT:o[u]=new Ry;break;case Ke.KHR_DRACO_MESH_COMPRESSION:o[u]=new qy(r,this.dracoLoader);break;case Ke.KHR_TEXTURE_TRANSFORM:o[u]=new Yy;break;case Ke.KHR_MESH_QUANTIZATION:o[u]=new $y;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function Ay(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const Ke={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class wy{constructor(e){this.parser=e,this.name=Ke.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const h=new Ne(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],sn);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new uh(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new gp(h),l.distance=u;break;case"spot":l=new R0(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,mi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class Ry{constructor(){this.name=Ke.KHR_MATERIALS_UNLIT}getMaterialType(){return xn}extendParams(e,t,n){const i=[];e.color=new Ne(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],sn),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Ht))}return Promise.all(i)}}class Cy{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class Iy{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Xe(a,a)}return Promise.all(r)}}class Ly{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class Ny{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class Py{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Ne(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],sn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Ht)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class Dy{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class Uy{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ne().setRGB(a[0],a[1],a[2],sn),Promise.all(r)}}class Oy{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class Fy{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ne().setRGB(a[0],a[1],a[2],sn),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Ht)),Promise.all(r)}}class By{constructor(e){this.parser=e,this.name=Ke.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class ky{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class Hy{constructor(e){this.parser=e,this.name=Ke.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class zy{constructor(e){this.parser=e,this.name=Ke.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Gy{constructor(e){this.parser=e,this.name=Ke.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Vy{constructor(e){this.name=Ke.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(p),h,u,d,i.mode,i.filter),p})})}else return null}}class Wy{constructor(e){this.name=Ke.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==wn.TRIANGLES&&l.mode!==wn.TRIANGLE_STRIP&&l.mode!==wn.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,p=[];for(const _ of u){const g=new ze,m=new N,f=new Ji,S=new N(1,1,1),b=new r0(_.geometry,_.material,d);for(let x=0;x<d;x++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,x),c.ROTATION&&f.fromBufferAttribute(c.ROTATION,x),c.SCALE&&S.fromBufferAttribute(c.SCALE,x),b.setMatrixAt(x,g.compose(m,f,S));for(const x in c)if(x==="_COLOR_0"){const C=c[x];b.instanceColor=new ch(C.array,C.itemSize,C.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&_.geometry.setAttribute(x,c[x]);yt.prototype.copy.call(b,_),this.parser.assignFinalMaterial(b),p.push(b)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}}const Sp="glTF",Vr=12,kd={JSON:1313821514,BIN:5130562};class Xy{constructor(e){this.name=Ke.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Vr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Sp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Vr,r=new DataView(e,Vr);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===kd.JSON){const l=new Uint8Array(e,Vr+o,a);this.content=n.decode(l)}else if(c===kd.BIN){const l=Vr+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class qy{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ke.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const h in o){const u=fh[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=fh[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[e.attributes[h]],p=Ks[d.componentType];l[u]=p.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(p){for(const _ in p.attributes){const g=p.attributes[_],m=c[_];m!==void 0&&(g.normalized=m)}u(p)},a,l,sn,d)})})}}class Yy{constructor(){this.name=Ke.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class $y{constructor(){this.name=Ke.KHR_MESH_QUANTIZATION}}class Tp extends ta{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=i-t,u=(n-t)/h,d=u*u,p=d*u,_=e*l,g=_-l,m=-2*p+3*d,f=p-d,S=1-m,b=f-d+u;for(let x=0;x!==a;x++){const C=o[g+x+a],w=o[g+x+c]*h,R=o[_+x+a],I=o[_+x]*h;r[x]=S*C+b*w+m*R+f*I}return r}}const Ky=new Ji;class jy extends Tp{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return Ky.fromArray(r).normalize().toArray(r),r}}const wn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ks={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Hd={9728:nn,9729:Mn,9984:Hf,9985:Ga,9986:$r,9987:Si},zd={33071:Wi,33648:ja,10497:xr},il={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},fh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Oi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Zy={CUBICSPLINE:void 0,LINEAR:ao,STEP:oo},sl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Jy(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new _i({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ri})),s.DefaultMaterial}function as(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function mi(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Qy(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,h=e.length;l<h;l++){const u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){const u=e[l];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;o.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],d=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function eS(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function tS(s){let e;const t=s.extensions&&s.extensions[Ke.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+rl(t.attributes):e=s.indices+":"+rl(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+rl(s.targets[n]);return e}function rl(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function ph(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function nS(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const iS=new ze;class sS{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Ay,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new b0(this.options.manager):this.textureLoader=new L0(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new _p(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return as(r,a,i),mi(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,h]of o.children.entries())r(h,a.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ke.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(to.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=il[i.type],a=Ks[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new Gt(l,o,c))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=il[i.type],l=Ks[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,_=i.normalized===!0;let g,m;if(p&&p!==u){const f=Math.floor(d/p),S="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+f+":"+i.count;let b=t.cache.get(S);b||(g=new l(a,f*p,i.count*p/h),b=new e0(g,p/h),t.cache.add(S,b)),m=new Dh(b,c,d%p/h,_)}else a===null?g=new l(i.count*c):g=new l(a,d,i.count*c),m=new Gt(g,c,_);if(i.sparse!==void 0){const f=il.SCALAR,S=Ks[i.sparse.indices.componentType],b=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,C=new S(o[1],b,i.sparse.count*f),w=new l(o[2],x,i.sparse.count*c);a!==null&&(m=new Gt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let R=0,I=C.length;R<I;R++){const T=C[R];if(m.setX(T,w[R*c]),c>=2&&m.setY(T,w[R*c+1]),c>=3&&m.setZ(T,w[R*c+2]),c>=4&&m.setW(T,w[R*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=_}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return h.magFilter=Hd[d.magFilter]||Mn,h.minFilter=Hd[d.minFilter]||Si,h.wrapS=zd[d.wrapS]||xr,h.wrapT=zd[d.wrapT]||xr,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==nn&&h.minFilter!==Mn,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=i.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;const d=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(d,p){let _=d;t.isImageBitmapLoader===!0&&(_=function(g){const m=new Ft(g);m.needsUpdate=!0,d(m)}),t.load(to.resolveURL(u,r.path),_,void 0,p)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),mi(u,o),u.userData.mimeType=o.mimeType||nS(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Ke.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Ke.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[Ke.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new tc,ti.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new dp,ti.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return _i}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},c=r.extensions||{},l=[];if(c[Ke.KHR_MATERIALS_UNLIT]){const u=i[Ke.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new Ne(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],sn),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,Ht)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Bn);const h=r.alphaMode||sl.OPAQUE;if(h===sl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===sl.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==xn&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Xe(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==xn&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==xn){const u=r.emissiveFactor;a.emissive=new Ne().setRGB(u[0],u[1],u[2],sn)}return r.emissiveTexture!==void 0&&o!==xn&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Ht)),Promise.all(l).then(function(){const u=new o(a);return r.name&&(u.name=r.name),mi(u,r),t.associations.set(u,{materials:e}),r.extensions&&as(i,u,r),u})}createUniqueName(e){const t=ht.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[Ke.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Gd(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],h=tS(l),u=i[h];if(u)o.push(u.promise);else{let d;l.extensions&&l.extensions[Ke.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=Gd(new Vt,l,t),i[h]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const h=o[c].material===void 0?Jy(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let p=0,_=h.length;p<_;p++){const g=h[p],m=o[p];let f;const S=l[p];if(m.mode===wn.TRIANGLES||m.mode===wn.TRIANGLE_STRIP||m.mode===wn.TRIANGLE_FAN||m.mode===void 0)f=r.isSkinnedMesh===!0?new n0(g,S):new vt(g,S),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),m.mode===wn.TRIANGLE_STRIP?f.geometry=Bd(f.geometry,jf):m.mode===wn.TRIANGLE_FAN&&(f.geometry=Bd(f.geometry,oh));else if(m.mode===wn.LINES)f=new c0(g,S);else if(m.mode===wn.LINE_STRIP)f=new Fh(g,S);else if(m.mode===wn.LINE_LOOP)f=new l0(g,S);else if(m.mode===wn.POINTS)f=new hh(g,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&eS(f,r),f.name=t.createUniqueName(r.name||"mesh_"+e),mi(f,r),m.extensions&&as(i,f,m),t.assignFinalMaterial(f),u.push(f)}for(let p=0,_=u.length;p<_;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return r.extensions&&as(i,u[0],r),u[0];const d=new ln;r.extensions&&as(i,d,r),t.associations.set(d,{meshes:e});for(let p=0,_=u.length;p<_;p++)d.add(u[p]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new tn(Qf.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new zh(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),mi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],c=[];for(let l=0,h=o.length;l<h;l++){const u=o[l];if(u){a.push(u);const d=new ze;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Uh(a,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const p=i.channels[u],_=i.samplers[p.sampler],g=p.target,m=g.node,f=i.parameters!==void 0?i.parameters[_.input]:_.input,S=i.parameters!==void 0?i.parameters[_.output]:_.output;g.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",f)),c.push(this.getDependency("accessor",S)),l.push(_),h.push(g))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const d=u[0],p=u[1],_=u[2],g=u[3],m=u[4],f=[];for(let S=0,b=d.length;S<b;S++){const x=d[S],C=p[S],w=_[S],R=g[S],I=m[S];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const T=n._createAnimationTracks(x,C,w,R,I);if(T)for(let M=0;M<T.length;M++)f.push(T[M])}return new v0(r,void 0,f)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(d,iS)});for(let p=0,_=u.length;p<_;p++)h.add(u[p]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new hp:l.length>1?h=new ln:l.length===1?h=l[0]:h=new yt,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),mi(h,r),r.extensions&&as(n,h,r),r.matrix!==void 0){const u=new ze;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new ln;n.name&&(r.name=i.createUniqueName(n.name)),mi(r,n),n.extensions&&as(t,r,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);const l=h=>{const u=new Map;for(const[d,p]of i.associations)(d instanceof ti||d instanceof Ft)&&u.set(d,p);return h.traverse(d=>{const p=i.associations.get(d);p!=null&&u.set(d,p)}),u};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,c=[];Oi[r.path]===Oi.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(Oi[r.path]){case Oi.weights:l=Tr;break;case Oi.rotation:l=br;break;case Oi.position:case Oi.scale:l=Ar;break;default:switch(n.itemSize){case 1:l=Tr;break;case 2:case 3:default:l=Ar;break}break}const h=i.interpolation!==void 0?Zy[i.interpolation]:ao,u=this._getArrayFromAccessor(n);for(let d=0,p=c.length;d<p;d++){const _=new l(c[d]+"."+Oi[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=ph(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof br?jy:Tp;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function rS(s,e,t){const n=e.attributes,i=new En;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new N(c[0],c[1],c[2]),new N(l[0],l[1],l[2])),a.normalized){const h=ph(Ks[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new N,c=new N;for(let l=0,h=r.length;l<h;l++){const u=r[l];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],p=d.min,_=d.max;if(p!==void 0&&_!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(_[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(_[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(_[2]))),d.normalized){const g=ph(Ks[d.componentType]);c.multiplyScalar(g)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new ii;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Gd(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}for(const o in n){const a=fh[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return Qe.workingColorSpace!==sn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Qe.workingColorSpace}" not supported.`),mi(s,e),rS(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Qy(s,e.targets,t):s})}const oS="/stellar-forge-demo/assets/base-DEOKjuh_.glb",aS="/stellar-forge-demo/assets/drone-CdYRVn_1.glb",cS="/stellar-forge-demo/assets/refinery-D8Zl1aOt.glb",lS="/stellar-forge-demo/assets/factory-Bj8_kldq.glb",hS="/stellar-forge-demo/assets/fusion-zjKrz-hT.glb",uS="/stellar-forge-demo/assets/shipyard-UFcLf6Wo.glb",dS="/stellar-forge-demo/assets/fleet-jMyJdaTt.glb",fS="/stellar-forge-demo/assets/colony-C6kVOZAX.glb",pS="/stellar-forge-demo/assets/starlifter-DrsLyIdR.glb",mS="/stellar-forge-demo/assets/dyson-hdNeA-kE.glb",Vd=855828,Wd=16765286,Da=9425919,Xd=3530952,mh=10473727,_S=16756838,_h=15770880,Ka=10182117,gS=16769366,qd={1:{hemiSky:3818848,hemiGround:658966,fog:855828,key:15134719},2:{hemiSky:4864038,hemiGround:1314055,fog:1445897,key:16771535},3:{hemiSky:3811922,hemiGround:722200,fog:984864,key:15524607}},vS=1e3,xS=4.4,Wr=1.05,MS=1500,ES=14,Yd=5,yS=9,SS=22,TS=1.9,$d=4200,bS=2600,AS=1.25,wS=2.6,RS=.5,Kd=3,Xr=[{tier:1,kind:"drone",url:aS,sizeY:1.15,r0:3.2,r1:6.6,cap:16,epoch:1},{tier:2,kind:"structure",url:cS,sizeY:4.6,r0:9.2,r1:12.8,cap:10,glow:mh,epoch:1},{tier:3,kind:"structure",url:lS,sizeY:6.8,r0:15.4,r1:19.8,cap:6,glow:_S,epoch:1},{tier:4,kind:"structure",url:hS,sizeY:8.4,r0:23,r1:27.6,cap:5,glow:_h,epoch:2},{tier:5,kind:"structure",url:uS,sizeY:9.6,r0:30.5,r1:35.5,cap:4,glow:_h,epoch:2},{tier:6,kind:"structure",url:dS,sizeY:7.6,r0:38.5,r1:43.5,cap:4,glow:Ka,epoch:3},{tier:7,kind:"structure",url:fS,sizeY:11.5,r0:46.5,r1:52.5,cap:3,glow:Ka,epoch:3},{tier:8,kind:"structure",url:pS,sizeY:13.5,r0:56,r1:63,cap:2,glow:Ka,epoch:3},{tier:9,kind:"structure",url:mS,sizeY:16,r0:67,r1:76,cap:2,glow:gS,epoch:3}],ol=2.399963229728653;class CS{constructor(e){B(this,"_bus");B(this,"_clock");B(this,"_input");B(this,"_world");B(this,"_renderer");B(this,"_scene");B(this,"_camera");B(this,"_canvas");B(this,"_parent");B(this,"_loader",new by);B(this,"_forge");B(this,"_forgeCore");B(this,"_forgeMidY",2);B(this,"_protos",new Map);B(this,"_loading",new Set);B(this,"_protoFootprint",new Map);B(this,"_byTier",new Map);B(this,"_owned",new Map);B(this,"_oreNodes",[]);B(this,"_freight",[]);B(this,"_shockwaves",[]);B(this,"_lastEpochSeen",1);B(this,"_oreCarryGeo",new eo(.22,0));B(this,"_oreCarryMat",new xn({color:Xd,transparent:!0,opacity:.95,blending:pi,depthWrite:!1,fog:!1}));B(this,"_glowGeo",new ic(.32,12,10));B(this,"_rockGeo",new nc(.6,0));B(this,"_freightGeo",new eo(.16,0));B(this,"_padGeo",new Bh(1,1.08,.34,6));B(this,"_padRimGeo",new sc(1,.05,6,32));B(this,"_rotorGeo",new sc(.5,.055,6,24));B(this,"_beaconGeo",new ic(.13,8,8));B(this,"_moteGeo",new eo(.15,0));B(this,"_ringGeo",new kh(.86,1,40));B(this,"_keyLight");B(this,"_hemi");B(this,"_epochBlend",1);B(this,"_sparks");B(this,"_sparkVel");B(this,"_nextSpark",0);B(this,"_raf",0);B(this,"_lastMs",0);B(this,"_elapsed",0);B(this,"_camDist",20);B(this,"_shakeUntil",0);B(this,"_flash",0);B(this,"_hitW",-1);B(this,"_hitH",-1);B(this,"_unsub",[]);B(this,"_scratch",new N);B(this,"_base",new N);B(this,"_colA",new Ne);B(this,"_colB",new Ne);B(this,"_onPointerDown",e=>this._input.onPointerDown(this._raw(e,"down")));B(this,"_onPointerUp",e=>this._input.onPointerUp(this._raw(e,"up")));B(this,"_onPointerMove",e=>this._input.onPointerMove(this._raw(e,"move")));B(this,"_loop",()=>{this._raf=requestAnimationFrame(this._loop);const e=performance.now(),t=e-this._lastMs;this._lastMs=e,this._elapsed+=t;const n=Math.min(t,100)/1e3;this._clock.advance(Math.min(t,vS)),this._animateForge(n),this._animateUnits(n),this._animateOre(n),this._animateFreight(n),this._animateShockwaves(n),this._animateSparks(n),this._applyEpochAmbience(n),this._updateHitArea(),this._applyCamera(n),this._renderer.render(this._scene,this._camera)});B(this,"_onResize",()=>{const e=this._parent.clientWidth||window.innerWidth,t=this._parent.clientHeight||window.innerHeight;this._camera.aspect=e/t,this._camera.updateProjectionMatrix(),this._renderer.setSize(e,t)});this._bus=e.bus,this._clock=e.clock,this._input=e.input,this._world=e.world}mount(e){this._parent=e;const t=e.clientWidth||window.innerWidth,n=e.clientHeight||window.innerHeight;this._renderer=new Ty({antialias:!0,powerPreference:"high-performance"}),this._renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this._renderer.setSize(t,n),this._renderer.shadowMap.enabled=!0,this._renderer.shadowMap.type=Of,this._renderer.toneMapping=Bf,this._renderer.toneMappingExposure=1.28,this._canvas=this._renderer.domElement,this._canvas.style.cssText="display:block;width:100%;height:100%",e.appendChild(this._canvas),this._scene=new Qg,this._scene.background=new Ne(Vd),this._scene.fog=new Ph(Vd,70,340),this._camera=new tn(45,t/n,.1,300),this._buildLighting(),this._buildGround(),this._buildStarfield(),this._buildSparks(),this._buildOreField(),this._buildFreight(),this._buildShockwaves(),this._loadForge(),this._seedInitialTiers(),this._lastEpochSeen=this._currentEpoch(),this._unsub.push(this._bus.on(ee.INTENT_TAP_FORGE,()=>this._onForgeTap()),this._bus.on(ee.GENERATOR_PURCHASED,i=>this._syncTier(i.tier,i.owned,!0)),this._bus.on(ee.MILESTONE_REACHED,()=>this._celebrate(.5,260)),this._bus.on(ee.ASCENSION_STARTED,()=>this._celebrate(.4,240)),this._bus.on(ee.ASCENSION_COMPLETE,()=>this._onAscension())),this._canvas.addEventListener("pointerdown",this._onPointerDown),this._canvas.addEventListener("pointerup",this._onPointerUp),this._canvas.addEventListener("pointermove",this._onPointerMove),window.addEventListener("resize",this._onResize),this._lastMs=performance.now(),this._loop()}dispose(){cancelAnimationFrame(this._raf),window.removeEventListener("resize",this._onResize),this._canvas.removeEventListener("pointerdown",this._onPointerDown),this._canvas.removeEventListener("pointerup",this._onPointerUp),this._canvas.removeEventListener("pointermove",this._onPointerMove);for(const e of this._unsub)e();this._unsub.length=0,this._scene.traverse(e=>{const t=e;t.geometry&&t.geometry.dispose();const n=t.material;Array.isArray(n)?n.forEach(i=>i.dispose()):n==null||n.dispose()}),this._renderer.dispose(),this._canvas.remove()}_buildLighting(){const e=new uh(15134719,3.9);e.position.set(-16,30,14),e.castShadow=!0,e.shadow.mapSize.set(2048,2048),e.shadow.camera.near=1,e.shadow.camera.far=220;const t=84;e.shadow.camera.left=-t,e.shadow.camera.right=t,e.shadow.camera.top=t,e.shadow.camera.bottom=-t,e.shadow.bias=-4e-4,this._scene.add(e),this._keyLight=e;const n=new uh(7308984,.7);n.position.set(16,10,-12),this._scene.add(n),this._hemi=new A0(3818848,658966,.95),this._scene.add(this._hemi)}_groundY(e,t){const n=Math.sin(e*.16)*Math.cos(t*.14)*.7+Math.sin(e*.42+1.3)*Math.cos(t*.38+.4)*.34+Math.sin(e*.95+4)*Math.cos(t*.9+2.1)*.15+Math.sin(e*2.3)*Math.cos(t*2.1)*.06,i=Math.hypot(e,t),r=Math.min(1,Math.max(0,(i-6)/10)+.06);return n*r}_seatY(e,t,n){let i=this._groundY(e,t);const r=n*.9;for(let o=0;o<8;o+=1){const a=o/8*Math.PI*2;i=Math.max(i,this._groundY(e+Math.cos(a)*r,t+Math.sin(a)*r))}return i}_buildGround(){const n=new ea(260,260,260,260);n.rotateX(-Math.PI/2);const i=n.attributes.position;for(let a=0;a<i.count;a+=1)i.setY(a,this._groundY(i.getX(a),i.getZ(a)));n.computeVertexNormals();const r=new _i({color:4344150,roughness:.96,metalness:.05}),o=new vt(n,r);o.receiveShadow=!0,this._scene.add(o)}_buildStarfield(){const e=new Vt,t=300,n=new Float32Array(t*3);let i=987654321;const r=()=>(i=(i*1664525+1013904223)%4294967296,i/4294967296);for(let a=0;a<t;a+=1){const c=90+r()*90,l=r()*Math.PI*2;n[a*3]=Math.cos(l)*c,n[a*3+1]=18+r()*90,n[a*3+2]=Math.sin(l)*c}e.setAttribute("position",new Gt(n,3));const o=new tc({color:14674165,size:.4,sizeAttenuation:!0,transparent:!0,opacity:.8,fog:!1});this._scene.add(new hh(e,o))}_buildSparks(){const t=new Vt,n=new Float32Array(480);for(let r=0;r<160;r+=1)n[r*3+1]=-999;this._sparkVel=new Float32Array(480),t.setAttribute("position",new Gt(n,3));const i=new tc({color:Wd,size:.14,transparent:!0,opacity:.95,blending:pi,depthWrite:!1,fog:!1});this._sparks=new hh(t,i),this._sparks.frustumCulled=!1,this._scene.add(this._sparks)}_buildOreField(){let e=20260707;const t=()=>(e=(e*1664525+1013904223)%4294967296,e/4294967296);for(let n=0;n<ES;n+=1){const i=Yd+(yS-Yd)*Math.sqrt(t()),r=n*ol*1.3+t()*.6,o=Math.cos(r)*i,a=Math.sin(r)*i,c=this._groundY(o,a),l=.7+t()*.9,h=new _i({color:2765632,roughness:.72,metalness:.18,emissive:Xd,emissiveIntensity:.45}),u=new vt(this._rockGeo,h);u.scale.set(l,l*(.7+t()*.5),l),u.position.set(o,c+.2*l,a),u.rotation.set(t()*3,t()*3,t()*3),u.castShadow=!0,u.receiveShadow=!0,this._scene.add(u),this._oreNodes.push({pos:new N(o,c+.55*l,a),mat:h,heat:0})}}_buildFreight(){for(let e=0;e<SS;e+=1){const t=new _i({color:16777215,emissive:16777215,emissiveIntensity:.8,roughness:.4,metalness:.3,transparent:!0,opacity:1}),n=new vt(this._freightGeo,t);n.castShadow=!0,n.visible=!1,n.frustumCulled=!1,this._scene.add(n),this._freight.push({mesh:n,active:!1,t:0,from:new N,ctrl:new N,to:new N})}}_buildShockwaves(){for(let e=0;e<8;e+=1){const t=new xn({color:16777215,transparent:!0,opacity:0,side:Bn,blending:pi,depthWrite:!1,fog:!1}),n=new vt(this._ringGeo,t);n.rotation.x=-Math.PI/2,n.visible=!1,n.frustumCulled=!1,this._scene.add(n),this._shockwaves.push({mesh:n,active:!1,t:0,dur:1,maxScale:1})}}_shockwave(e,t,n,i,r=.9){const o=this._shockwaves.find(c=>!c.active);if(o===void 0)return;o.active=!0,o.t=0,o.dur=r,o.maxScale=i;const a=o.mesh.material;a.color.setHex(n),a.opacity=.85,o.mesh.position.set(e,this._groundY(e,t)+.08,t),o.mesh.scale.setScalar(.1),o.mesh.visible=!0}_animateShockwaves(e){for(const t of this._shockwaves){if(!t.active)continue;if(t.t+=e/t.dur,t.t>=1){t.active=!1,t.mesh.visible=!1;continue}const n=1-Math.pow(1-t.t,2);t.mesh.scale.setScalar(.1+n*t.maxScale),t.mesh.material.opacity=.85*(1-t.t)}}_loadForge(){this._loader.load(oS,e=>{const t=e.scene;this._normalise(t,7.2),t.traverse(o=>{const a=o;a.isMesh&&(a.castShadow=!0,a.receiveShadow=!0)});const n=new ln;n.add(t),n.position.set(0,this._groundY(0,0),0),this._scene.add(n),this._forge=n;const i=new En().setFromObject(n);this._forgeMidY=(i.min.y+i.max.y)/2;const r=new gp(Da,4.2,34,2);r.position.set(0,this._forgeMidY*.7,.4),this._scene.add(r),this._forgeCore=r},void 0,e=>{console.error("World3D: failed to load base.glb",e);const t=new vt(new nc(2.4,0),new _i({color:9152447,roughness:.4,metalness:.5,emissive:2771562}));t.castShadow=!0,t.position.y=2.4;const n=new ln;n.add(t),this._scene.add(n),this._forge=n,this._forgeMidY=2.4})}_seedInitialTiers(){for(const e of Xr)(e.tier===1||this._world.getOwned(e.tier)>0)&&this._ensureTierLoaded(e.tier)}_ensureTierLoaded(e){if(this._protos.has(e)||this._loading.has(e))return;const t=this._cfg(e);t!==void 0&&(this._loading.add(e),this._loader.load(t.url,n=>{const i=n.scene;this._normalise(i,t.sizeY),i.traverse(a=>{const c=a;c.isMesh&&(c.castShadow=!0,c.receiveShadow=!0)});const r=new N;new En().setFromObject(i).getSize(r),this._protoFootprint.set(e,Math.max(r.x,r.z)*.5),this._protos.set(e,i),this._loading.delete(e);const o=this._owned.get(e)??this._world.getOwned(e);this._syncTier(e,e===1?Math.max(1,o):o)},void 0,n=>{this._loading.delete(e),console.error(`World3D: failed to load tier-${e} model`,n)}))}_normalise(e,t){const n=new En().setFromObject(e),i=new N;n.getSize(i);const r=t/(i.y||1);e.scale.setScalar(r);const o=new En().setFromObject(e),a=new N;o.getCenter(a),e.position.x-=a.x,e.position.z-=a.z,e.position.y-=o.min.y}_cfg(e){return Xr.find(t=>t.tier===e)}_plot(e,t){if(e.kind==="drone"){const c=e.cap<=1?0:Math.sqrt(t/(e.cap-1)),l=e.r0+(e.r1-e.r0)*c,h=t*ol+e.tier*1.7;return{x:Math.cos(h)*l,z:Math.sin(h)*l}}const n=(e.r0+e.r1)*.5,i=e.r1-e.r0,r=Math.max(1,e.cap),o=t/r*Math.PI*2+e.tier*.55,a=n+(t%2===0?-1:1)*i*.16;return{x:Math.cos(o)*a,z:Math.sin(o)*a}}_basePoint(){return this._base.set(0,this._forgeMidY*.55,1.5)}_makeDrone(e,t,n){const i=new ln;i.add(n.clone(!0));const{x:r,z:o}=this._plot(e,t),a=this._groundY(r,o),c=t*ol;i.position.set(r,a+Wr,o),i.rotation.y=c,i.scale.setScalar(.001);const l=new vt(this._oreCarryGeo,this._oreCarryMat);return l.position.set(0,-.32,.05),l.visible=!1,i.add(l),this._scene.add(i),{group:i,kind:"drone",settle:0,phase:t*1.7,baseY:a,homeX:r,homeZ:o,state:"seek",oreIdx:this._oreNodes.length>0?t%this._oreNodes.length:0,timer:0,heading:c,carry:l,glow:void 0,glowScale:0,emitTimer:0,topY:0,freightColor:0,pad:void 0,rotor:void 0,spin:0,beacon:void 0,motes:void 0,riseDepth:0,ventLatch:!1}}_makePad(e,t,n,i,r){const o=new ln,a=i*1.05+.4,c=new vt(this._padGeo,new _i({color:3291720,roughness:.8,metalness:.3}));c.scale.set(a,1,a),c.position.y=-.04,c.castShadow=!0,c.receiveShadow=!0;const l=new vt(this._padRimGeo,new xn({color:r,transparent:!0,opacity:.38,blending:pi,depthWrite:!1,fog:!1}));return l.rotation.x=-Math.PI/2,l.scale.setScalar(a),l.position.y=.16,o.add(c,l),o.position.set(e,t,n),o.scale.setScalar(.001),this._scene.add(o),o}_makeStructure(e,t,n){const i=new ln;i.add(n.clone(!0));const{x:r,z:o}=this._plot(e,t),a=Math.max(this._protoFootprint.get(e.tier)??e.sizeY*.5,.5),c=this._seatY(r,o,a),l=e.glow??mh;i.position.set(r,c,o),i.rotation.y=Math.atan2(-r,-o),i.scale.setScalar(.001);const h=Math.max(.85,e.sizeY/4.6),u=new vt(this._glowGeo,new xn({color:l,transparent:!0,opacity:.6,blending:pi,depthWrite:!1,fog:!1}));u.position.set(0,e.sizeY*.6,0),u.scale.setScalar(h),i.add(u);const d=new ln;d.position.set(0,e.sizeY*.62,0),d.rotation.x=-Math.PI/2+RS,i.add(d);const p=new vt(this._rotorGeo,new _i({color:l,emissive:l,emissiveIntensity:.85,metalness:.6,roughness:.3,transparent:!0,opacity:.5,fog:!1}));p.scale.setScalar(a*.85),d.add(p);const _=new vt(this._beaconGeo,new xn({color:l,transparent:!0,opacity:1,blending:pi,depthWrite:!1,fog:!1}));_.scale.setScalar(Math.max(1,e.sizeY/6)),_.position.set(0,e.sizeY*1.02,0),i.add(_);let g;if(e.epoch>=3){g=new ln;const f=a*1.15+e.sizeY*.06;for(let S=0;S<Kd;S+=1){const b=new vt(this._moteGeo,new xn({color:l,transparent:!0,opacity:.95,blending:pi,depthWrite:!1,fog:!1})),x=S/Kd*Math.PI*2;b.position.set(Math.cos(x)*f,0,Math.sin(x)*f),b.scale.setScalar(Math.max(1,e.sizeY/12)),g.add(b)}g.position.set(0,e.sizeY*.66,0),i.add(g)}this._scene.add(i);const m=this._makePad(r,c,o,a,l);return{group:i,kind:"structure",settle:0,phase:t*1.7,baseY:c,homeX:r,homeZ:o,state:"seek",oreIdx:0,timer:0,heading:0,carry:void 0,glow:u,glowScale:h,emitTimer:$d+t*380,topY:c+e.sizeY*.9,freightColor:l,pad:m,rotor:p,spin:.7+1.6/Math.sqrt(e.sizeY),beacon:_,motes:g,riseDepth:Math.min(wS,e.sizeY*.5),ventLatch:!1}}_syncTier(e,t,n=!1){const i=this._cfg(e),r=this._protos.get(e);if(i===void 0||r===void 0){this._owned.set(e,t),i!==void 0&&this._ensureTierLoaded(e);return}this._owned.set(e,t);const o=Math.min(Math.max(t,0),i.cap),a=this._byTier.get(e)??[];for(let l=a.length;l<o;l+=1){const h=i.kind==="drone"?this._makeDrone(i,l,r):this._makeStructure(i,l,r);a.push(h),n&&this._constructionBeat(h,i)}this._byTier.set(e,a),this._frameCamera();const c=this._currentEpoch();c>this._lastEpochSeen&&(n&&this._onEpochAdvance(c),this._lastEpochSeen=c)}_constructionBeat(e,t){const n=t.glow??(t.kind==="drone"?Da:mh),i=this._protoFootprint.get(t.tier)??t.sizeY*.5,r=Math.max(3,i*2.4+t.sizeY*.4);this._shockwave(e.homeX,e.homeZ,n,r,.95),this._emitSparks(t.kind==="drone"?6:14,t.kind==="drone"?.9:1.4,this._scratch.set(e.homeX,e.baseY+t.sizeY*.4,e.homeZ)),this._shakeUntil=Math.max(this._shakeUntil,this._elapsed+180),this._flash=Math.max(this._flash,.16)}_onEpochAdvance(e){const t=e>=3?Ka:e===2?_h:Da;this._shockwave(0,0,t,120,1.5),this._shockwave(0,0,16777215,60,1.1),this._celebrate(1.7,760),this._emitSparks(80,2.6,this._scratch.set(0,this._forgeMidY,0)),this._epochBlend=Math.max(this._epochBlend,e-.85)}_occupiedRadius(){var t;let e=6;for(const n of Xr){const i=((t=this._byTier.get(n.tier))==null?void 0:t.length)??0;if(i>0){const r=n.cap<=1?0:Math.sqrt((i-1)/(n.cap-1));e=Math.max(e,n.r0+(n.r1-n.r0)*r+n.sizeY)}}return e}_frameCamera(){const e=this._occupiedRadius();this._camDist=Qf.clamp(e*1.6+6,16,132)}_currentEpoch(){var t;let e=1;for(const n of Xr)(((t=this._byTier.get(n.tier))==null?void 0:t.length)??0)>0&&(e=Math.max(e,n.epoch));return e}_applyEpochAmbience(e){this._epochBlend+=(this._currentEpoch()-this._epochBlend)*Math.min(1,e*.5);const t=Math.max(1,Math.min(3,Math.floor(this._epochBlend))),n=Math.min(3,t+1),i=this._epochBlend-t,r=qd[t],o=qd[n];r===void 0||o===void 0||(this._hemi.color.setHex(r.hemiSky).lerp(this._colA.setHex(o.hemiSky),i),this._hemi.groundColor.setHex(r.hemiGround).lerp(this._colA.setHex(o.hemiGround),i),this._keyLight.color.setHex(r.key).lerp(this._colA.setHex(o.key),i),this._colB.setHex(r.fog).lerp(this._colA.setHex(o.fog),i),this._scene.fog.color.copy(this._colB),this._scene.background.copy(this._colB))}_disposeUnit(e){var t,n,i,r,o,a;if(this._scene.remove(e.group),(n=(t=e.glow)==null?void 0:t.material)==null||n.dispose(),(r=(i=e.rotor)==null?void 0:i.material)==null||r.dispose(),(a=(o=e.beacon)==null?void 0:o.material)==null||a.dispose(),e.motes!==void 0)for(const c of e.motes.children)c.material.dispose();if(e.pad!==void 0){this._scene.remove(e.pad);for(const c of e.pad.children)c.material.dispose()}}_clearAllUnits(){for(const e of this._byTier.values())for(const t of e)this._disposeUnit(t);this._byTier.clear()}_onAscension(){this._clearAllUnits(),this._lastEpochSeen=1,this._epochBlend=1,this._syncTier(1,1),this._celebrate(1.5,560)}_raw(e,t){const n=this._canvas.getBoundingClientRect();return{pointerId:e.pointerId,wasTouch:e.pointerType==="touch",x:e.clientX-n.left,y:e.clientY-n.top,timeStamp:e.timeStamp,type:t}}_updateHitArea(){const e=this._canvas.clientWidth,t=this._canvas.clientHeight;e===this._hitW&&t===this._hitH||(this._hitW=e,this._hitH=t,this._input.clearHitAreas(),this._input.registerHitArea({id:"forge",kind:"forge",bounds:{x:0,y:0,width:e,height:t}}))}_onForgeTap(){this._flash=Math.max(this._flash,.35),this._forgeCore!==void 0&&(this._forgeCore.color.setHex(Wd),this._forgeCore.intensity=7),this._emitSparks(16,1.4,this._scratch.set(0,this._forgeMidY,1.8))}_forgePulse(){this._forgeCore!==void 0&&(this._forgeCore.intensity=Math.max(this._forgeCore.intensity,5.2)),this._flash=Math.max(this._flash,.14)}_celebrate(e,t){this._flash=Math.max(this._flash,e),this._shakeUntil=this._elapsed+t,this._emitSparks(48,2.2,this._scratch.set(0,this._forgeMidY,1.8))}_emitSparks(e,t,n){const i=this._sparks.geometry.attributes.position;let r=(this._elapsed|0)+e;const o=()=>(r=r*1103515245+12345&2147483647,r/2147483647);for(let a=0;a<e;a+=1){const c=this._nextSpark;this._nextSpark=(this._nextSpark+1)%i.count,i.setXYZ(c,n.x,n.y,n.z);const l=o()*Math.PI*2;this._sparkVel[c*3]=Math.cos(l)*t*(.4+o()),this._sparkVel[c*3+1]=(.7+o()*1.5)*t,this._sparkVel[c*3+2]=Math.sin(l)*t*(.4+o())}i.needsUpdate=!0}_animateForge(e){const t=this._elapsed/1e3;if(this._forgeCore!==void 0){const n=3.3+Math.sin(t*1.6)*.9;this._forgeCore.intensity+=(n-this._forgeCore.intensity)*Math.min(1,e*3),this._forgeCore.color.lerp(new Ne(Da),Math.min(1,e*2))}this._forge!==void 0&&(this._forge.rotation.y=Math.sin(t*.15)*.05)}_lerpAngle(e,t,n){let i=t-e;for(;i>Math.PI;)i-=Math.PI*2;for(;i<-Math.PI;)i+=Math.PI*2;return e+i*n}_flyTo(e,t,n,i){const r=t-e.group.position.x,o=n-e.group.position.z,a=Math.hypot(r,o);e.heading=this._lerpAngle(e.heading,Math.atan2(r,o),Math.min(1,i*6)),e.group.rotation.y=e.heading;const c=xS*i;return a<=c||a<.001?(e.group.position.x=t,e.group.position.z=n,!0):(e.group.position.x+=r/a*c,e.group.position.z+=o/a*c,!1)}_animateUnits(e){const t=this._elapsed/1e3;for(const n of Xr){const i=this._byTier.get(n.tier);if(i!==void 0)for(const r of i){if(r.settle<1){r.settle=Math.min(1,r.settle+e*AS);const o=1-Math.pow(1-r.settle,3);if(r.group.scale.setScalar(Math.max(.001,o)),r.kind==="structure"){r.pad!==void 0&&r.pad.scale.setScalar(Math.min(1,r.settle*1.7)),r.group.position.y=r.baseY-(1-o)*r.riseDepth,r.glow!==void 0&&(r.glow.material.opacity=.6+(1-r.settle)*.45);continue}}r.kind==="drone"?this._animateDrone(r,t,e):this._animateStructure(r,t,e)}}}_animateDrone(e,t,n){const i=Math.sin(t*2+e.phase)*.09;if(e.settle<.9){e.group.position.set(e.homeX,this._groundY(e.homeX,e.homeZ)+Wr,e.homeZ);return}if(e.state==="seek"){const a=this._oreNodes[e.oreIdx],c=a===void 0?!0:this._flyTo(e,a.pos.x,a.pos.z,n);e.group.position.y=this._groundY(e.group.position.x,e.group.position.z)+Wr+i,c&&(e.state="mine",e.timer=MS);return}if(e.state==="mine"){const a=this._oreNodes[e.oreIdx];e.timer-=n*1e3;const c=Math.max(0,Math.sin(t*9+e.phase))*.35,l=a===void 0?0:this._groundY(a.pos.x,a.pos.z);e.group.position.y=l+Wr+i*.3-c,a!==void 0&&(a.heat=1,Math.sin(t*9+e.phase)>.9&&this._nextSpark%2===0&&this._emitSparks(1,.6,this._scratch.set(a.pos.x,a.pos.y+.2,a.pos.z))),e.timer<=0&&(e.carry!==void 0&&(e.carry.visible=!0),e.state="haul");return}const r=this._basePoint(),o=this._flyTo(e,r.x,r.z,n);e.group.position.y=this._groundY(e.group.position.x,e.group.position.z)+Wr+i,o&&(e.carry!==void 0&&(e.carry.visible=!1),this._forgePulse(),this._emitSparks(3,.7,r),e.oreIdx=this._oreNodes.length>0?(e.oreIdx+1)%this._oreNodes.length:0,e.state="seek")}_animateStructure(e,t,n){e.group.position.y=e.baseY+Math.sin(t*.9+e.phase)*.02;const i=Math.sin(t*2.2+e.phase)*.5+.5;if(e.glow!==void 0){const r=e.glow.material;r.opacity=.22+i*.4,e.glow.scale.setScalar(e.glowScale*(.7+i*.3))}if(e.rotor!==void 0&&(e.rotor.rotation.z+=e.spin*n),e.beacon!==void 0){const r=Math.pow(Math.sin(t*1.6+e.phase)*.5+.5,4);e.beacon.material.opacity=.18+r*.82}e.motes!==void 0&&(e.motes.rotation.y+=n*.55),i>.92?e.ventLatch||(e.ventLatch=!0,this._emitSparks(2,.5,this._scratch.set(e.group.position.x,e.topY,e.group.position.z))):i<.5&&(e.ventLatch=!1),e.emitTimer-=n*1e3,e.emitTimer<=0&&(this._spawnFreight(this._scratch.set(e.group.position.x,e.topY,e.group.position.z),e.freightColor),e.emitTimer=$d+e.phase*911%bS)}_animateOre(e){for(const t of this._oreNodes)t.heat>0&&(t.heat=Math.max(0,t.heat-e*1.6)),t.mat.emissiveIntensity=.4+t.heat*1.8}_spawnFreight(e,t){const n=this._freight.find(r=>!r.active);if(n===void 0)return;n.active=!0,n.t=0,n.from.copy(e),n.to.copy(this._basePoint()),n.ctrl.copy(e).lerp(n.to,.5),n.ctrl.y+=1.4;const i=n.mesh.material;i.color.setHex(t),i.emissive.setHex(t),n.mesh.visible=!0,n.mesh.position.copy(e)}_animateFreight(e){for(const t of this._freight){if(!t.active)continue;if(t.t+=e/TS,t.t>=1){t.active=!1,t.mesh.visible=!1,this._forgePulse(),this._emitSparks(4,.8,this._basePoint());continue}const n=1-t.t,i=n*n,r=2*n*t.t,o=t.t*t.t;t.mesh.position.set(i*t.from.x+r*t.ctrl.x+o*t.to.x,i*t.from.y+r*t.ctrl.y+o*t.to.y,i*t.from.z+r*t.ctrl.z+o*t.to.z),t.mesh.rotation.y+=e*4,t.mesh.rotation.x+=e*2.5,t.mesh.material.opacity=Math.min(1,Math.sin(t.t*Math.PI)*3)}}_animateSparks(e){const t=this._sparks.geometry.attributes.position;for(let n=0;n<t.count;n+=1)t.getY(n)<-100||(this._sparkVel[n*3+1]-=5*e,t.setX(n,t.getX(n)+this._sparkVel[n*3]*e),t.setY(n,t.getY(n)+this._sparkVel[n*3+1]*e),t.setZ(n,t.getZ(n)+this._sparkVel[n*3+2]*e),t.getY(n)<=.12&&t.setY(n,-999));t.needsUpdate=!0}_applyCamera(e){const t=this._elapsed/1e3;let n=0;this._elapsed<this._shakeUntil&&(n=.09*((this._shakeUntil-this._elapsed)/300));const i=Math.sin(t*.12)*.28,r=Math.sin(i)*this._camDist+Math.sin(t*40)*n,o=Math.cos(i)*this._camDist,a=this._camDist*.55+Math.cos(t*37)*n;this._camera.position.x+=(r-this._camera.position.x)*Math.min(1,e*1.6),this._camera.position.y+=(a-this._camera.position.y)*Math.min(1,e*1.6),this._camera.position.z+=(o-this._camera.position.z)*Math.min(1,e*1.6),this._camera.lookAt(0,this._forgeMidY*.7,0),this._flash>0?(this._renderer.toneMappingExposure=1.05+this._flash*1.5,this._flash=Math.max(0,this._flash-e*2.2)):this._renderer.toneMappingExposure+=(1.05-this._renderer.toneMappingExposure)*Math.min(1,e*6)}}const bp=1e-10,lo=2,Ap=2,gh=1e21,Xh=["K","M","B","T","Qa","Qi"],qh="∞",IS=Xh.length,jd=10**(3*(IS+1));if(gh!==jd)throw new Error(`formatConfig invariant violated: SCIENTIFIC_THRESHOLD (${gh}) must be one magnitude tier above the top of ABBREVIATION_TABLE (expected ${jd}).`);const wp=0,Rp=7,pc=3,Zd=10**pc,Jd=10**1,Qd=Xh.length,Cp=Object.freeze(Zo(cc,pc)),LS=Object.freeze(dt(gh)),Ip=Object.freeze(Zo(cc,-lo)),NS=`<${Ip.toNumber().toFixed(lo)}`,PS=mc(Re.toNumber()).toFixed(lo);function DS(s){const e=s.log10(),t=Math.floor((e+bp)/pc);return Math.max(wp,Math.min(Rp,t))}function ef(s,e){const t=Zo(cc,pc*e);return s.div(t).toNumber()}function mc(s){return Math.floor(s*100)/100}function no(s,e){return s}function vh(s,e){let t=Math.floor(s.log10()+bp),n=s.div(Zo(cc,t)).toNumber();n>=Jd&&(t+=1,n/=Jd);const r=`${mc(n).toFixed(Ap)} e+${String(t)}`;return no(r)}function Lp(s,e,t){let n=DS(s);if(n>=Rp)return vh(s);let i=ef(s,n);if(i>=Zd)if(n<Qd)n+=1,i=i/Zd;else return n===Qd?vh(s):qh;i<1&&n>wp&&(n-=1,i=ef(s,n));const o=`${mc(i).toFixed(t)} ${Xh[n-1]}`;return no(o)}function bi(s,e){return hn(s)?s.lte(Re)?"0":s.lt(Cp)?s.floor().toNumber().toString():s.gte(LS)?vh(s):Lp(s,e,Ap):qh}function qr(s,e){return e?`${s} ${e}`:s}function ks(s,e,t){if(!hn(s))return qr(qh,t);if(s.lte(Re))return qr(no(PS),t);if(s.lt(Ip))return qr(no(NS),t);if(s.lt(Cp)){const n=mc(s.toNumber()).toFixed(lo);return qr(no(n),t)}return qr(Lp(s,e,lo),t)}const US=380,OS=900,FS=.19,BS=128,kS=.52,HS=.76,zS=.6;function GS(s,e){const t=s>=OS;return e*(t?HS:zS)}function VS(s){return Math.max(BS,s*FS)}function WS(s,e){return{x:s/2,y:GS(s,e)-VS(e)*kS}}const XS=5;function Np(s){return s.getTotalBaseRate().mul(dt(XS))}function qS(s,e){return dt(s.currencies.credits.tapAmount).add(Np(e))}class YS{constructor(e){B(this,"_unsubTap");this._unsubTap=e.bus.on(ee.INTENT_TAP_FORGE,()=>{const t=Np(e.generators);t.gt(Re)&&e.credits.addOfflineEarnings(t)})}dispose(){this._unsubTap()}}const $S="/stellar-forge-demo/assets/tier1-CGr_rWoD.svg",KS="/stellar-forge-demo/assets/tier2-WDw8Df_T.svg",jS="/stellar-forge-demo/assets/tier3-BgDwCqo5.svg",ZS="/stellar-forge-demo/assets/tier4-D0G28S5V.svg",JS="/stellar-forge-demo/assets/tier5-Uf4foSHK.svg",QS="/stellar-forge-demo/assets/tier6-ClC5JRkf.svg",eT="/stellar-forge-demo/assets/tier7-DZ_6xqdX.svg",tT="/stellar-forge-demo/assets/tier8-UnOtcdr9.svg",nT="/stellar-forge-demo/assets/tier9-wc-XhgwM.svg",iT=[$S,KS,jS,ZS,JS,QS,eT,tT,nT],sT=250,rT=2200,oT=650,aT=["⬡","⬢","◈","◆","▲","●","◐","✦","❂"],cT=["x1","x10","xmax"],tf=5,lT=5,Ua={1:{roman:"I",name:"GENESIS"},2:{roman:"II",name:"INDUSTRIAL"},3:{roman:"III",name:"COSMIC"}};function hT(s){const e=Math.floor(s/1e3);if(e<90)return`${e} s`;const t=Math.floor(e/60);return t<90?`${t} min`:`${(t/60).toFixed(1)} h`}function Te(s,e,t){const n=document.createElement(s);return n.className=e,t!==void 0&&(n.textContent=t),n}class uT{constructor(e){B(this,"_bus");B(this,"_credits");B(this,"_generators");B(this,"_config");B(this,"_ascension");B(this,"_root");B(this,"_creditsValue");B(this,"_creditsRate");B(this,"_tapLine");B(this,"_modeButtons",new Map);B(this,"_rows",new Map);B(this,"_toast");B(this,"_tapHint");B(this,"_ascendButton");B(this,"_ascendDm");B(this,"_milestoneBadge");B(this,"_lastMilestoneBurst",-1);B(this,"_eraBadge");B(this,"_highestEpoch",1);B(this,"_seenTiers",new Set);B(this,"_balance");B(this,"_ratePerSec");B(this,"_paintScheduled",!1);B(this,"_lastBuyTier");B(this,"_tapCount",0);B(this,"_lastPointerX",0);B(this,"_lastPointerY",0);B(this,"_lastPointerAt",0);B(this,"_unsubscribes",[]);B(this,"_timers",[]);B(this,"_onWindowPointerDown",e=>{this._lastPointerX=e.clientX,this._lastPointerY=e.clientY,this._lastPointerAt=Date.now()});this._bus=e.bus,this._credits=e.credits,this._generators=e.generators,this._config=e.config,this._ascension=e.ascension,this._balance=e.credits.getBalance(),this._ratePerSec=e.credits.getBalance()}mount(e){this._root=e,document.documentElement.style.setProperty("--zone-c-width",`${US}px`),window.addEventListener("pointerdown",this._onWindowPointerDown,!0),e.append(this._buildZoneA(),this._buildZoneC(),this._buildTapHint(),this._buildAscendButton()),this._unsubscribes.push(this._bus.on(ee.CREDITS_UPDATED,t=>{this._balance=t.balance,this._ratePerSec=t.ratePerSec,this._schedulePaint()}),this._bus.on(ee.GENERATOR_PURCHASED,t=>{this._flashRow(t.tier),this._onGeneratorProgress(t.tier),this._paint()}),this._bus.on(ee.GENERATOR_RATE_CHANGED,t=>{this._floatRateDelta(t.tier,t.rateDelta),this._schedulePaint()}),this._bus.on(ee.BUY_MODE_CHANGED,()=>this._paint()),this._bus.on(ee.PURCHASE_REJECTED,t=>this._onRejected(t.reason)),this._bus.on(ee.INTENT_TAP_FORGE,()=>this._onForgeTapped()),this._bus.on(ee.MILESTONE_REACHED,t=>this._showMilestone(t))),this._initEpochState(),this._paint()}_initEpochState(){let e=1;for(const t of this._config.generators)this._generators.getOwned(t.tier)>0&&(this._seenTiers.add(t.tier),e=Math.max(e,t.epoch));this._highestEpoch=e,this._setEra(e)}_onGeneratorProgress(e){const t=this._config.generators.find(n=>n.tier===e);t!==void 0&&(this._seenTiers.has(e)||(this._seenTiers.add(e),this._showUnlock(t.name,t.epoch)),t.epoch>this._highestEpoch&&(this._highestEpoch=t.epoch,this._setEra(t.epoch),this._showEraBanner(t.epoch)))}dispose(){window.removeEventListener("pointerdown",this._onWindowPointerDown,!0);for(const e of this._unsubscribes)e();this._unsubscribes.length=0;for(const e of this._timers)clearTimeout(e);this._timers.length=0,this._root!==void 0&&this._root.replaceChildren(),this._rows.clear(),this._modeButtons.clear(),this._ascendButton=void 0,this._ascendDm=void 0,this._milestoneBadge=void 0,this._lastMilestoneBurst=-1,this._eraBadge=void 0,this._highestEpoch=1,this._seenTiers.clear()}_buildZoneA(){const e=Te("header","hud-zone-a"),t=Te("div","hud-brand");t.append(Te("span","hud-brand-mark","⬡"),Te("span","hud-brand-name","STELLAR FORGE"));const n=Te("div","hud-era epoch-1");n.setAttribute("aria-live","polite"),n.append(Te("span","hud-era-age","AGE I"),Te("span","hud-era-name","GENESIS")),this._eraBadge=n,t.append(n);const i=Te("div","hud-readout");return i.setAttribute("role","status"),i.setAttribute("aria-live","polite"),this._creditsValue=Te("div","hud-credits","0 Cr"),this._creditsRate=Te("div","hud-rate","▸ 0.00 Cr/s"),this._tapLine=Te("div","hud-tap",""),i.append(this._creditsValue,this._creditsRate,this._tapLine),e.append(t,i),e}_buildZoneC(){const e=Te("aside","hud-zone-c");e.setAttribute("aria-label","Economy panel");const t=Te("div","hud-buymode");t.setAttribute("role","group"),t.setAttribute("aria-label","Buy quantity mode");for(const r of cT){const o=Te("button","hud-buymode-btn",r==="xmax"?"×MAX":`×${r.slice(1)}`);o.type="button",o.addEventListener("click",()=>{this._bus.emit(ee.INTENT_SET_BUY_MODE,{mode:r,source:"pointer"})}),this._modeButtons.set(r,o),t.append(o)}const n=Te("div","hud-gen-list");for(const r of this._config.generators)n.append(this._buildRow(r.tier,r.name,r.epoch));const i=Te("footer","hud-footer");return i.append(Te("div","hud-footer-live","Live economy engine — server-authoritative production"),Te("div","hud-footer-roadmap","Live: generators · milestones · ascension ✦ Dark Matter tree · offline earnings · cloud save")),e.append(t,n,i),e}_buildRow(e,t,n){const i=Te("article",`hud-gen-row epoch-${n}`),r=Te("div","hud-gen-glyph"),o=iT[e-1];if(o!==void 0){const m=document.createElement("img");m.src=o,m.alt="",m.loading="lazy",m.className="hud-gen-icon",r.append(m)}else r.textContent=aT[e-1]??"⬡";const a=Te("div","hud-gen-info"),c=Te("div","hud-gen-name",t),l=Te("div","hud-gen-meta","—");a.append(c,l);const h=Te("div","hud-gen-milestonewrap"),u=Te("div","hud-gen-milestone",""),d=Te("div","hud-gen-progress"),p=[];for(let m=0;m<tf;m+=1){const f=Te("span","hud-gen-seg");p.push(f),d.append(f)}h.append(u,d);const _=Te("button","hud-gen-buy","BUY");_.type="button",_.addEventListener("click",()=>{this._lastBuyTier=e,this._bus.emit(ee.INTENT_BUY_GENERATOR,{tier:e,source:"pointer"})});const g=Te("div","hud-gen-hint","");return i.append(r,a,h,_,g),this._rows.set(e,{root:i,glyph:r,meta:l,milestone:u,segments:p,buy:_,hint:g}),i}_buildTapHint(){const e=Te("div","hud-tap-hint","TAP THE FORGE");return this._tapHint=e,e}_buildAscendButton(){const e=Te("button","hud-ascend");e.type="button";const t=Te("span","hud-ascend-dm","");return e.append(Te("span","hud-ascend-label","ASCEND"),t,Te("span","hud-ascend-hint","Collapse the empire into a singularity — restart faster, forever stronger")),e.addEventListener("click",()=>{this._bus.emit(ee.INTENT_CONFIRM_ASCENSION,{source:"pointer"})}),this._ascendButton=e,this._ascendDm=t,e}_showMilestone(e){var r;if(this._root===void 0)return;const t=e.type==="credits_scale"?e.name??"Milestone":`${this._generatorName(e.tier)} ×${e.threshold}`,n=e.type==="credits_scale"?"RANK ACHIEVED":"MILESTONE",i=e.ordinal===e.seriesLength;if(e.burstId!==this._lastMilestoneBurst||this._milestoneBadge===void 0){this._lastMilestoneBurst=e.burstId,(r=this._milestoneBadge)==null||r.remove();const o=Te("div","hud-milestone");o.append(Te("div","hud-milestone-eyebrow",n),Te("div","hud-milestone-title",t)),this._milestoneBadge=o,this._root.append(o),o.offsetWidth,o.classList.add("is-in"),this._timers.push(setTimeout(()=>{o.remove(),this._milestoneBadge===o&&(this._milestoneBadge=void 0)},2600))}else{const o=this._milestoneBadge.querySelector(".hud-milestone-title"),a=this._milestoneBadge.querySelector(".hud-milestone-eyebrow");o!==null&&(o.textContent=t),a!==null&&(a.textContent=n)}if(this._milestoneBadge.classList.toggle("is-peak",i),e.burstSize>1){let o=this._milestoneBadge.querySelector(".hud-milestone-more");o===null&&(o=Te("div","hud-milestone-more",""),this._milestoneBadge.append(o)),o.textContent=`${e.burstSize} milestones in one surge`}}_setEra(e){if(this._eraBadge===void 0)return;const t=Ua[e]??Ua[1];this._eraBadge.className=`hud-era epoch-${e}`;const n=this._eraBadge.querySelector(".hud-era-age"),i=this._eraBadge.querySelector(".hud-era-name");n!==null&&(n.textContent=`AGE ${t.roman}`),i!==null&&(i.textContent=t.name)}_showEraBanner(e){var i;if(this._root===void 0||this._prefersReducedMotion())return;const t=Ua[e]??Ua[1];(i=this._root.querySelector(".hud-era-banner"))==null||i.remove();const n=Te("div",`hud-era-banner epoch-${e}`);n.append(Te("div","hud-era-banner-eyebrow","A NEW ERA BEGINS"),Te("div","hud-era-banner-title",`${t.name} AGE`),Te("div","hud-era-banner-sub",`AGE ${t.roman} — your empire ascends to a new scale`)),this._root.append(n),n.offsetWidth,n.classList.add("is-in"),this._timers.push(setTimeout(()=>n.classList.add("is-out"),3200)),this._timers.push(setTimeout(()=>n.remove(),3900))}_showUnlock(e,t){var i;if(this._root===void 0)return;(i=this._root.querySelector(".hud-unlock"))==null||i.remove();const n=Te("div",`hud-unlock epoch-${t}`);n.append(Te("div","hud-unlock-eyebrow","NEW GENERATOR ONLINE"),Te("div","hud-unlock-title",e)),this._root.append(n),n.offsetWidth,n.classList.add("is-in"),this._timers.push(setTimeout(()=>n.remove(),2800))}_generatorName(e){var t;return e===void 0?"Generator":((t=this._config.generators.find(n=>n.tier===e))==null?void 0:t.name)??`Tier ${e}`}_schedulePaint(){this._paintScheduled||(this._paintScheduled=!0,this._timers.push(setTimeout(()=>{this._paintScheduled=!1,this._paint()},sT)))}_paint(){this._creditsValue.textContent=`${bi(this._balance)} Cr`,this._creditsRate.textContent=`▸ ${ks(this._ratePerSec,void 0,"Cr/s")}`,this._tapLine.textContent=`⌁ ${ks(this._tapValue(),void 0,"Cr")} per tap`;const e=this._credits.getBuyMode();for(const[t,n]of this._modeButtons){const i=t===e;n.classList.toggle("is-active",i),n.setAttribute("aria-pressed",String(i))}for(const t of this._config.generators)this._paintRow(t.tier,t.name,e);this._updateAscension()}_updateAscension(){if(this._ascendButton===void 0||this._ascendDm===void 0)return;const e=this._ascension.canAscend();this._ascendButton.classList.toggle("is-visible",e),this._ascendButton.disabled=!e,e&&(this._ascendDm.textContent=`+${bi(this._ascension.getEstimatedDM())} Dark Matter`)}_paintRow(e,t,n){var g,m;const i=this._rows.get(e);if(i===void 0)return;const r=this._generators.isUnlocked(e);if(i.root.classList.toggle("is-locked",!r),!r){i.meta.textContent="Locked",i.milestone.textContent="",i.buy.disabled=!0,i.buy.textContent="LOCKED",i.buy.className="hud-gen-buy is-lockedbtn";const f=this._config.generators.find(S=>S.tier===e-1);i.hint.textContent=f!==void 0?`Own 1 × ${f.name} to unlock`:"";for(const S of i.segments)S.className="hud-gen-seg";return}const o=this._generators.getOwned(e),a=this._generators.getTierRate(e);i.meta.textContent=`×${o} · ${ks(a,void 0,"Cr/s")}`,i.hint.textContent="";const c=this._config.upgrades.milestones.map(f=>f.ownedCount).sort((f,S)=>f-S),l=c.find(f=>f>o),h=[...c].reverse().find(f=>f<=o)??0;if(l!==void 0){i.milestone.textContent=`→${l} ×2`;const f=(o-h)/(l-h),S=Math.floor(f*tf);i.segments.forEach((b,x)=>{b.className=x<S?"hud-gen-seg is-filled":"hud-gen-seg"})}else{i.milestone.textContent="MAX ×2 tier";for(const f of i.segments)f.className="hud-gen-seg is-filled"}let u;if(n==="x1"?u=1:n==="x10"?u=10:u=this._generators.getMaxAffordable(e,this._balance),u===0){i.buy.disabled=!1,i.buy.textContent="MAX ×0",i.buy.className="hud-gen-buy is-unaffordable";return}const d=this._generators.getCost(e,u),p=this._balance.gte(d),_=n==="xmax"?`MAX ×${u} · ${bi(d)}`:`BUY ${n==="x10"?"×10 · ":""}${bi(d)}`;if(i.buy.disabled=!1,i.buy.textContent=_,i.buy.className=p?"hud-gen-buy is-affordable":"hud-gen-buy is-unaffordable",t!==((m=(g=this._rows.get(e))==null?void 0:g.root.querySelector(".hud-gen-name"))==null?void 0:m.textContent)){const f=i.root.querySelector(".hud-gen-name");f!==null&&(f.textContent=t)}}_onRejected(e){if(e==="insufficient_balance"&&this._lastBuyTier!==void 0){const t=this._rows.get(this._lastBuyTier);t!==void 0&&(t.buy.classList.remove("is-shaking"),t.buy.offsetWidth,t.buy.classList.add("is-shaking"));return}if(e==="qty_zero"){this._showToast("Nothing affordable at ×MAX yet — keep forging");return}this._showToast("Tier locked — own the previous generator first")}_flashRow(e){const t=this._rows.get(e);t!==void 0&&(t.root.classList.add("is-flashing"),this._timers.push(setTimeout(()=>t.root.classList.remove("is-flashing"),oT)))}_showToast(e){var n;if(this._root===void 0)return;(n=this._toast)==null||n.remove();const t=Te("div","hud-toast",e);this._toast=t,this._root.append(t),this._timers.push(setTimeout(()=>t.remove(),rT))}showWelcomeBack(e){var r;if(this._root===void 0)return;(r=this._root.querySelector(".hud-welcome"))==null||r.remove();const t=Te("div","hud-welcome");t.setAttribute("role","dialog"),t.setAttribute("aria-label","Offline earnings report");const n=Math.round(e.earningRate*100);t.append(Te("div","hud-welcome-eyebrow","SYSTEMS REPORT"),Te("h2","hud-welcome-title","WHILE YOU WERE AWAY"),Te("div","hud-welcome-amount num",`+${ks(e.credited,void 0,"Cr")}`),Te("div","hud-welcome-sub",`${hT(e.elapsedMs)} away · ${n}% offline rate · your empire kept forging`));const i=Te("button","hud-welcome-cta","CONTINUE");i.type="button",i.addEventListener("click",()=>t.remove()),t.append(i),this._root.append(t),i.focus(),this._timers.push(setTimeout(()=>t.remove(),12e3))}_onForgeTapped(){if(this._tapCount+=1,this._tapCount>=lT&&this._tapHint!==void 0&&this._tapHint.classList.add("is-done"),this._root===void 0||this._prefersReducedMotion())return;const t=Date.now()-this._lastPointerAt<600?{x:this._lastPointerX,y:this._lastPointerY}:WS(window.innerWidth,window.innerHeight),n=Te("span","hud-float",`+${ks(this._tapValue(),void 0,"Cr")}`),i=(Math.random()-.5)*30;n.style.left=`${t.x+i}px`,n.style.top=`${t.y-30}px`,this._root.append(n),this._timers.push(setTimeout(()=>n.remove(),950))}_tapValue(){return qS(this._config,this._generators)}_floatRateDelta(e,t){if(this._prefersReducedMotion())return;const n=this._rows.get(e);if(n===void 0||!t.gt(dt(0)))return;const i=Te("span","hud-rowfloat",`+${ks(t,void 0,"Cr/s")}`);n.root.append(i),this._timers.push(setTimeout(()=>i.remove(),1050))}_prefersReducedMotion(){return typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches}}const Oa="◆",dT=2400,fT=700,nf={forge:{title:"FORGE",tag:"Raw production power",glyph:"◆"},continuum:{title:"CONTINUUM",tag:"Bend time & offline",glyph:"∞"},cortex:{title:"CORTEX",tag:"Automate the empire",glyph:"⚙"}},sf={forge_t1:"Core Amplifier",forge_t2:"Drone Overclock",forge_capstone:"Singularity Engine",continuum_t1:"Temporal Reservoir",continuum_t2:"Chrono Capacitor",continuum_capstone:"Eternal Continuum",cortex_t1:"Neural Relay",cortex_t2:"Cognition Lattice",cortex_capstone:"Autonomous Cortex"},rf=["","I","II","III","IV","V"];function pT(s){const e=s.toNumber();return Number.isFinite(e)&&e<1e6?e.toFixed(2):bi(s)}function Fe(s,e,t){const n=document.createElement(s);return n.className=e,t!==void 0&&(n.textContent=t),n}class mT{constructor(e){B(this,"_bus");B(this,"_config");B(this,"_section");B(this,"_tree");B(this,"_dm");B(this,"_onPurchase");B(this,"_onRespec");B(this,"_root");B(this,"_launcher");B(this,"_launcherBalance");B(this,"_modal");B(this,"_balanceEl");B(this,"_investedEl");B(this,"_multiplierEl");B(this,"_respecBtn");B(this,"_toast");B(this,"_cells",new Map);B(this,"_open",!1);B(this,"_revealed",!1);B(this,"_unsubscribes",[]);B(this,"_timers",[]);B(this,"_onKeydown",e=>{if(!(!this._open||this._modal===void 0)){if(e.key==="Escape"){this.close();return}e.key==="Tab"&&this._trapTab(e)}});this._bus=e.bus,this._config=e.config,this._section=e.config.dmTree??{nodes:[],respec:{enabled:!1,cost:0,refundNodes:!1},capstonePermanenceActive:!1},this._tree=e.tree,this._dm=e.darkMatter,this._onPurchase=e.onPurchase,this._onRespec=e.onRespec}_trapTab(e){if(this._modal===void 0)return;const t=[...this._modal.querySelectorAll('button:not([disabled]), [tabindex]:not([tabindex="-1"])')];if(t.length===0)return;const n=t[0],i=t[t.length-1],r=document.activeElement,o=r instanceof Node&&this._modal.contains(r);e.shiftKey?(r===n||!o)&&(e.preventDefault(),i.focus()):(r===i||!o)&&(e.preventDefault(),n.focus())}mount(e){this._root=e,e.append(this._buildLauncher()),this._unsubscribes.push(this._bus.on(ee.DARK_MATTER_UPDATED,()=>{this._syncReveal(),this._paintLauncher(),this._open&&this._repaint()}),this._bus.on(ee.DM_UPGRADE_PURCHASED,()=>{this._open&&this._repaint()}),this._bus.on(ee.DM_TREE_CAPSTONE_SELECTED,()=>{this._open&&this._repaint()})),this._syncReveal(),this._paintLauncher()}dispose(){var e,t;for(const n of this._unsubscribes)n();this._unsubscribes.length=0;for(const n of this._timers)clearTimeout(n);this._timers.length=0,document.removeEventListener("keydown",this._onKeydown),(e=this._modal)==null||e.remove(),this._launcher.remove(),(t=this._toast)==null||t.remove(),this._cells.clear(),this._modal=void 0,this._open=!1}_buildLauncher(){const e=Fe("button","dm-launcher");return e.type="button",e.setAttribute("aria-haspopup","dialog"),e.append(Fe("span","dm-launcher-glyph",Oa),Fe("span","dm-launcher-label","DARK MATTER")),this._launcherBalance=Fe("span","dm-launcher-balance",""),e.append(this._launcherBalance),e.addEventListener("click",()=>this.openPanel()),this._launcher=e,e}_syncReveal(){if(this._revealed)return;const e=dt(0);(this._dm.getBalance().gt(e)||this._dm.getTotalSpent().gt(e))&&(this._revealed=!0,this._launcher.classList.add("is-visible"))}_paintLauncher(){this._launcherBalance.textContent=bi(this._dm.getBalance())}openPanel(){if(this._root===void 0||this._open)return;this._modal===void 0&&(this._modal=this._buildModal()),this._root.append(this._modal),this._open=!0,this._modal.offsetWidth,this._modal.classList.add("is-open"),document.addEventListener("keydown",this._onKeydown),this._repaint();const e=this._modal.querySelector(".dm-close");e==null||e.focus()}close(){!this._open||this._modal===void 0||(this._open=!1,this._modal.classList.remove("is-open"),document.removeEventListener("keydown",this._onKeydown),this._modal.remove(),this._launcher.focus())}_buildModal(){const e=Fe("div","dm-scrim");e.addEventListener("click",n=>{n.target===e&&this.close()});const t=Fe("section","dm-modal");return t.setAttribute("role","dialog"),t.setAttribute("aria-modal","true"),t.setAttribute("aria-label","Dark Matter upgrade tree"),t.append(this._buildHeader(),this._buildBranches(),this._buildFooter()),e.append(t),e}_buildHeader(){const e=Fe("header","dm-header"),t=Fe("div","dm-titles");t.append(Fe("div","dm-eyebrow","META-PROGRESSION"),Fe("h2","dm-title","DARK MATTER"),Fe("p","dm-subtitle","Permanent choices, mapped across the void. Spend to grow forever stronger."));const n=Fe("div","dm-stats");this._balanceEl=Fe("span","dm-stat-value",""),this._investedEl=Fe("span","dm-stat-value",""),this._multiplierEl=Fe("span","dm-stat-value",""),n.append(this._buildStat(`${Oa} Available`,this._balanceEl),this._buildStat("Invested",this._investedEl),this._buildStat("Tree production",this._multiplierEl));const i=Fe("button","dm-close","✕");return i.type="button",i.setAttribute("aria-label","Close Dark Matter tree"),i.addEventListener("click",()=>this.close()),e.append(t,n,i),e}_buildStat(e,t){const n=Fe("div","dm-stat");return n.append(Fe("span","dm-stat-label",e),t),n}_buildBranches(){const e=Fe("div","dm-branches"),t=[],n=new Map;for(const i of this._section.nodes)n.has(i.branch)||(n.set(i.branch,[]),t.push(i.branch)),n.get(i.branch).push(i);for(const i of t){const r=[...n.get(i)].sort((o,a)=>o.tier-a.tier);e.append(this._buildLane(i,r))}return e}_buildLane(e,t){const n=nf[e]??{title:e.toUpperCase(),tag:"Upgrade path",glyph:"✦"},i=Fe("div",`dm-lane dm-branch-${e}`),r=Fe("div","dm-lane-head");r.append(Fe("span","dm-lane-glyph",n.glyph),(()=>{const a=Fe("div","dm-lane-titles");return a.append(Fe("div","dm-lane-title",n.title),Fe("div","dm-lane-tag",n.tag)),a})());const o=Fe("div","dm-chain");return t.forEach((a,c)=>{c>0&&o.append(Fe("div","dm-connector")),o.append(this._buildNode(a))}),i.append(r,o),i}_buildNode(e){const t=Fe("article",`dm-node${e.isCapstone?" is-capstone":""}`),n=Fe("div","dm-node-badge",e.isCapstone?"✦":rf[e.tier]??String(e.tier)),i=Fe("div","dm-node-body"),r=Fe("div","dm-node-title",sf[e.id]??`${e.branch} ${rf[e.tier]??e.tier}`),o=Fe("div","dm-node-effect",this._effectLabel(e)),a=Fe("div","dm-node-levelrow"),c=Fe("span","dm-node-level",""),l=Fe("span","dm-node-pips"),h=[];for(let p=0;p<e.maxLevel;p+=1){const _=Fe("span","dm-pip");h.push(_),l.append(_)}a.append(c,l),i.append(r,o,a),e.isCapstone&&i.append(Fe("div","dm-node-capnote","Capstone — one branch only"));const u=Fe("button","dm-node-action");u.type="button",u.addEventListener("click",()=>this._purchase(e.id));const d=Fe("div","dm-node-status","");return t.append(n,i,u,d),this._cells.set(e.id,{node:e,root:t,level:c,pips:h,action:u,status:d}),t}_buildFooter(){const e=Fe("footer","dm-footer");if(this._section.respec.enabled){const n=this._section.respec.cost,i=n>0?`${Oa} ${n}`:"free",r=Fe("button","dm-respec",`RESET CAPSTONE CHOICE · ${i}`);r.type="button",r.addEventListener("click",()=>this._respec()),this._respecBtn=r,e.append(r)}return e.append(Fe("div","dm-footer-note","Effects apply permanently across every future Ascension — your production rate updates instantly.")),e}_repaint(){if(this._modal===void 0)return;this._balanceEl!==void 0&&(this._balanceEl.textContent=`${bi(this._dm.getBalance())}`),this._investedEl!==void 0&&(this._investedEl.textContent=`${bi(this._dm.getTotalSpent())}`),this._multiplierEl!==void 0&&(this._multiplierEl.textContent=`×${pT(this._tree.getExtraGlobalMultiplier())}`);const e=this._tree.getCommittedCapstone();for(const t of this._cells.values())this._paintNode(t,e);this._respecBtn!==void 0&&(this._respecBtn.disabled=e===null,this._respecBtn.classList.toggle("is-armed",e!==null))}_paintNode(e,t){var m;const{node:n,root:i,level:r,pips:o,action:a,status:c}=e,l=this._tree.getNodeLevel(n.id),h=n.maxLevel,u=l>=h,d=n.isCapstone&&t!==null&&t!==n.branch,p=n.prereqs.some(f=>this._tree.getNodeLevel(f)<1),_=this._tree.canPurchase(n.id);if(r.textContent=h>1?`Lv ${l}/${h}`:l>=1?"Owned":"Locked in on purchase",o.forEach((f,S)=>{f.className=S<l?"dm-pip is-filled":"dm-pip"}),i.classList.toggle("is-maxed",u),i.classList.toggle("is-locked",(p||d)&&!u),u){n.isCapstone?(a.textContent="✦ COMMITTED",a.className="dm-node-action is-committed",c.textContent="This branch’s capstone is active"):(a.textContent="✓ MAXED",a.className="dm-node-action is-maxed",c.textContent="Fully upgraded"),a.disabled=!0;return}if(d){const f=((m=nf[t??""])==null?void 0:m.title)??(t??"").toUpperCase();a.textContent="🔒 LOCKED",a.className="dm-node-action is-rivallocked",a.disabled=!0,c.textContent=`${f} capstone chosen`;return}if(p){const f=sf[n.prereqs[0]??""]??"the previous node";a.textContent="🔒 LOCKED",a.className="dm-node-action is-prereqlocked",a.disabled=!0,c.textContent=`Unlock ${f} first`;return}const g=this._tree.getNodeCost(n.id);a.textContent=`${Oa} ${bi(g)}`,a.className=_?"dm-node-action is-affordable":"dm-node-action is-unaffordable",a.disabled=!1,c.textContent=n.isCapstone?"Choosing this locks the other capstones":""}_purchase(e){const t=this._onPurchase(e);if(t.ok){this._pulse(e),this._repaint();return}this._showToast(_T[t.reason]),t.reason==="insufficient_dm"&&this._shake(e)}_respec(){const e=this._onRespec();this._showToast(e.ok?"Capstone choice reset — pick a new path":gT[e.reason]),e.ok&&this._repaint()}_pulse(e){const t=this._cells.get(e);t!==void 0&&(t.root.classList.remove("is-pulsing"),t.root.offsetWidth,t.root.classList.add("is-pulsing"),this._defer(()=>t.root.classList.remove("is-pulsing"),fT))}_shake(e){const t=this._cells.get(e);t!==void 0&&(t.action.classList.remove("is-denied"),t.action.offsetWidth,t.action.classList.add("is-denied"),this._defer(()=>t.action.classList.remove("is-denied"),400))}_showToast(e){var n,i;if(this._modal===void 0)return;(n=this._toast)==null||n.remove();const t=Fe("div","dm-toast",e);this._toast=t,(i=this._modal.querySelector(".dm-modal"))==null||i.append(t),this._defer(()=>t.remove(),dT)}_defer(e,t){const n=setTimeout(()=>{const i=this._timers.indexOf(n);i!==-1&&this._timers.splice(i,1),e()},t);this._timers.push(n)}_effectLabel(e){const t=e.effectParams,n=i=>`${Math.round((i??0)*100)}%`;switch(e.effectType){case"globalMultiplier":return`+${n(t.perLevelBonus)} to ALL production, per level`;case"tierBoost":{const i=this._config.generators.find(r=>r.tier===t.targetTier);return`+${n(t.perLevelBonus)} ${(i==null?void 0:i.name)??`Tier ${t.targetTier}`} output, per level`}case"offlineExtension":return`+${t.capHours??0}h offline cap · +${n(t.rateBonus)} offline rate, per level`;case"automationUnlock":return t.efficiencyBonus!==void 0?`Full automation · +${n(t.efficiencyBonus)} efficiency`:"Automates a production stage — it runs itself";default:return"Permanent upgrade"}}}const _T={insufficient_dm:"Not enough Dark Matter — Ascend to mint more",locked_prereq:"Unlock the previous node in this branch first",rival_capstone:"Another branch’s capstone is already committed",maxed:"Already fully upgraded",unknown_node:"That upgrade is unavailable"},gT={respec_disabled:"Respec is not available",no_capstone:"No capstone committed yet — nothing to reset",insufficient_dm:"Not enough Dark Matter to respec"};class vT{constructor(e){B(this,"_clock");B(this,"_save");B(this,"_now");B(this,"_doc");B(this,"_hiddenAt",null);B(this,"_started",!1);B(this,"_onVisibilityChange",()=>{if(this._doc.visibilityState==="hidden"){this._hiddenAt=this._now(),this._clock.pause(),this._save.resetLastSeen(this._hiddenAt);return}if(this._clock.resume(),this._hiddenAt!==null){const e=this._now()-this._hiddenAt;this._hiddenAt=null,this._clock.reportGap(e)}});this._clock=e.clock,this._save=e.save,this._now=e.now,this._doc=e.doc}start(){this._started||(this._started=!0,this._doc.addEventListener("visibilitychange",this._onVisibilityChange))}dispose(){this._doc.removeEventListener("visibilitychange",this._onVisibilityChange),this._started=!1,this._hiddenAt=null}}const xT=typeof crypto<"u"&&"randomUUID"in crypto?crypto.randomUUID():`${Date.now()}`;function MT(){const s=()=>Date.now(),e=x_({configJson:tu,storage:window.localStorage,now:s,tabId:xT,autosaveEnv:h_(window,document)}),{bus:t,clock:n,credits:i,generators:r,ascension:o,dmTree:a,darkMatter:c,save:l}=e,h=new vT({clock:n,save:l,now:s,doc:document});h.start(),l.startAutosave();const u=lf(tu),d=new S_(t),p=document.getElementById("game-root");if(p===null)throw new Error("main: #game-root container missing from index.html");const _=new CS({bus:t,clock:n,input:d,world:{getOwned:I=>r.getOwned(I),generators:u.generators}});_.mount(p);const g=document.getElementById("hud-overlay");if(g===null)throw new Error("main: #hud-overlay container missing from index.html");const m=new uT({bus:t,credits:i,generators:r,config:u,ascension:o});m.mount(g);const f=new mT({bus:t,config:u,tree:a,darkMatter:c,onPurchase:I=>a.purchase(I),onRespec:()=>a.respecCapstone()});f.mount(g);const S=I=>{I.reason==="brief"||I.diagnostic!==void 0||m.showWelcomeBack({credited:I.baseLump,elapsedMs:I.elapsedSeconds*1e3,earningRate:u.offline.earningRate})},b=t.on(ee.OFFLINE_EARNINGS_APPLIED,S);e.offlineReport!==void 0&&S(e.offlineReport);const x=new YS({bus:t,credits:i,generators:r}),C=t.on(ee.INTENT_CONFIRM_ASCENSION,()=>{o.canAscend()&&o.executeAscension()});let w=0;const R=t.on(ee.CREDITS_UPDATED,()=>{const I=s();I-w>=1e3&&(w=I,l.resetLastSeen(I))});return{dispose(){h.dispose(),l.stopAutosave(),R(),C(),b(),x.dispose(),f.dispose(),m.dispose(),d.clearHitAreas(),_.dispose(),e.dispose()}}}MT();
