var Pp=Object.defineProperty;var Yu=s=>{throw TypeError(s)};var Dp=(s,e,t)=>e in s?Pp(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var H=(s,e,t)=>Dp(s,typeof e!="symbol"?e+"":e,t),pc=(s,e,t)=>e.has(s)||Yu("Cannot "+t);var v=(s,e,t)=>(pc(s,e,"read from private field"),t?t.call(s):e.get(s)),q=(s,e,t)=>e.has(s)?Yu("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(s):e.set(s,t),W=(s,e,t,n)=>(pc(s,e,"write to private field"),n?n.call(s,t):e.set(s,t),t),re=(s,e,t)=>(pc(s,e,"access private method"),t);var ia=(s,e,t,n)=>({set _(i){W(s,e,i,t)},get _(){return v(s,e,n)}});(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const $u=`{
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
`,Kr=1;class fu extends Error{constructor(e){super(e),this.name="ConfigParseError",Object.setPrototypeOf(this,fu.prototype)}}class st extends Error{constructor(e){super(e),this.name="ConfigValidationError",Object.setPrototypeOf(this,st.prototype)}}class pu extends Error{constructor(e){super(e),this.name="SchemaVersionError",Object.setPrototypeOf(this,pu.prototype)}}function Qd(s,e=new WeakSet){if(s===null||typeof s!="object")return s;const t=s;if(e.has(t))return s;e.add(t);for(const n of Object.keys(t))Qd(t[n],e);return Object.freeze(s)}const Up={meta:{schemaVersion:Kr,lastTuned:"2026-06-25",author:"economy-designer"},generators:[{tier:1,slug:"mining-drone",name:"Mining Drone",epoch:1,baseCost:10,costMultiplier:1.1,baseOutput:.1,enabled:!0},{tier:2,slug:"ore-refinery",name:"Ore Refinery",epoch:1,baseCost:100,costMultiplier:1.1,baseOutput:.5,enabled:!0},{tier:3,slug:"component-factory",name:"Component Factory",epoch:1,baseCost:1e3,costMultiplier:1.11,baseOutput:4,enabled:!0},{tier:4,slug:"fusion-reactor",name:"Fusion Reactor",epoch:2,baseCost:1e4,costMultiplier:1.12,baseOutput:20,enabled:!0},{tier:5,slug:"orbital-shipyard",name:"Orbital Shipyard",epoch:2,baseCost:1e5,costMultiplier:1.13,baseOutput:100,enabled:!0},{tier:6,slug:"trade-fleet",name:"Trade Fleet",epoch:3,baseCost:1e6,costMultiplier:1.14,baseOutput:500,enabled:!1},{tier:7,slug:"planetary-colony",name:"Planetary Colony",epoch:3,baseCost:1e7,costMultiplier:1.15,baseOutput:2500,enabled:!1},{tier:8,slug:"star-lifter",name:"Star Lifter",epoch:3,baseCost:1e8,costMultiplier:1.16,baseOutput:12500,enabled:!1},{tier:9,slug:"dyson-swarm",name:"Dyson Swarm",epoch:3,baseCost:1e9,costMultiplier:1.17,baseOutput:62500,enabled:!1}],upgrades:{milestones:[{ownedCount:10,productionMultiplier:2},{ownedCount:25,productionMultiplier:2},{ownedCount:50,productionMultiplier:2},{ownedCount:100,productionMultiplier:2},{ownedCount:200,productionMultiplier:2}],managers:[{unlockCost:25,prerequisiteOwnedCount:25},{unlockCost:250,prerequisiteOwnedCount:25},{unlockCost:2500,prerequisiteOwnedCount:25},{unlockCost:25e3,prerequisiteOwnedCount:25},{unlockCost:25e4,prerequisiteOwnedCount:25}],automationReserveFraction:1,linearBoosts:[]},milestones:{creditsScale:[{threshold:"1e7",name:"Asteroid Baron"},{threshold:"1e8",name:"Orbital Magnate"},{threshold:"1e9",name:"Planetary Mogul"},{threshold:"1e10",name:"System Tycoon"},{threshold:"1e11",name:"Sector Sovereign"},{threshold:"1e12",name:"Stellar Overlord"},{threshold:"1e13",name:"Cluster Potentate"},{threshold:"1e15",name:"Nebular Dominus"},{threshold:"1e18",name:"Galactic Emperor"},{threshold:"1e21",name:"Intergalactic Lord"},{threshold:"1e24",name:"Cosmic Forgemaster"}]},ascension:{constant:500,creditsDivisor:1e10,exponent:.5,dmMultiplierPerPoint:.02,upgrades:[]},offline:{earningRate:.5,baseCapHours:4,maxCapHours:24,boostMultiplier:2},currencies:{credits:{startingBalance:0,tapAmount:1,tickRateMs:100}}};function Ua(s){return typeof s=="object"&&s!==null&&!Array.isArray(s)}function il(s,e){const t={};for(const n of Object.keys(s)){const i=s[n];if(!(n in e)){t[n]=Ua(i)?il(i,{}):structuredClone(i);continue}const r=e[n];Ua(i)&&Ua(r)?t[n]=il(i,r):t[n]=r}for(const n of Object.keys(e))n in t||(t[n]=e[n]);return t}function Op(s,e){const t=il(Up,s);return Ua(t.meta)&&(t.meta.schemaVersion=Kr),t}function Fp(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var mc,Ku;function Bp(){return Ku||(Ku=1,mc=function(s,e,t){if(s==null||e==null)return s;var n=String(s),i=typeof e=="number"?e:parseInt(e,10);if(isNaN(i)||!isFinite(i))return n;var r=n.length;if(r>=i)return n;var o=t==null?"":String(t);o===""&&(o=" ");for(var a=i-r;o.length<a;)o+=o;var c=o.length>a?o.substr(0,a):o;return n+c}),mc}var kp=Bp();const _c=Fp(kp);var Vn=9e15,sa=(function(){for(var s=[],e=-323;e<=308;e++)s.push(+("1e"+e));return function(t){return s[t+323]}})(),ne=function(s){return s instanceof Yi?s:new Yi(s)},rn=function(s,e){return new Yi().fromMantissaExponent(s,e)},cs=function(s,e){return new Yi().fromMantissaExponent_noNormalize(s,e)};function Hp(s,e,t,n){var i=e.mul(t.pow(n));return Yi.floor(s.div(i).mul(t.sub(1)).add(1).log10()/t.log10())}function zp(s,e,t,n){return e.mul(t.pow(n)).mul(Yi.sub(1,t.pow(s))).div(Yi.sub(1,t))}var Yi=(function(){function s(e){this.mantissa=NaN,this.exponent=NaN,e===void 0?(this.m=0,this.e=0):e instanceof s?this.fromDecimal(e):typeof e=="number"?this.fromNumber(e):this.fromString(e)}return Object.defineProperty(s.prototype,"m",{get:function(){return this.mantissa},set:function(e){this.mantissa=e},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"e",{get:function(){return this.exponent},set:function(e){this.exponent=e},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"s",{get:function(){return this.sign()},set:function(e){if(e===0)return this.e=0,void(this.m=0);this.sgn()!==e&&(this.m=-this.m)},enumerable:!1,configurable:!0}),s.fromMantissaExponent=function(e,t){return new s().fromMantissaExponent(e,t)},s.fromMantissaExponent_noNormalize=function(e,t){return new s().fromMantissaExponent_noNormalize(e,t)},s.fromDecimal=function(e){return new s().fromDecimal(e)},s.fromNumber=function(e){return new s().fromNumber(e)},s.fromString=function(e){return new s().fromString(e)},s.fromValue=function(e){return new s().fromValue(e)},s.fromValue_noAlloc=function(e){return e instanceof s?e:new s(e)},s.abs=function(e){return ne(e).abs()},s.neg=function(e){return ne(e).neg()},s.negate=function(e){return ne(e).neg()},s.negated=function(e){return ne(e).neg()},s.sign=function(e){return ne(e).sign()},s.sgn=function(e){return ne(e).sign()},s.round=function(e){return ne(e).round()},s.floor=function(e){return ne(e).floor()},s.ceil=function(e){return ne(e).ceil()},s.trunc=function(e){return ne(e).trunc()},s.add=function(e,t){return ne(e).add(t)},s.plus=function(e,t){return ne(e).add(t)},s.sub=function(e,t){return ne(e).sub(t)},s.subtract=function(e,t){return ne(e).sub(t)},s.minus=function(e,t){return ne(e).sub(t)},s.mul=function(e,t){return ne(e).mul(t)},s.multiply=function(e,t){return ne(e).mul(t)},s.times=function(e,t){return ne(e).mul(t)},s.div=function(e,t){return ne(e).div(t)},s.divide=function(e,t){return ne(e).div(t)},s.recip=function(e){return ne(e).recip()},s.reciprocal=function(e){return ne(e).recip()},s.reciprocate=function(e){return ne(e).reciprocate()},s.cmp=function(e,t){return ne(e).cmp(t)},s.compare=function(e,t){return ne(e).cmp(t)},s.eq=function(e,t){return ne(e).eq(t)},s.equals=function(e,t){return ne(e).eq(t)},s.neq=function(e,t){return ne(e).neq(t)},s.notEquals=function(e,t){return ne(e).notEquals(t)},s.lt=function(e,t){return ne(e).lt(t)},s.lte=function(e,t){return ne(e).lte(t)},s.gt=function(e,t){return ne(e).gt(t)},s.gte=function(e,t){return ne(e).gte(t)},s.max=function(e,t){return ne(e).max(t)},s.min=function(e,t){return ne(e).min(t)},s.clamp=function(e,t,n){return ne(e).clamp(t,n)},s.clampMin=function(e,t){return ne(e).clampMin(t)},s.clampMax=function(e,t){return ne(e).clampMax(t)},s.cmp_tolerance=function(e,t,n){return ne(e).cmp_tolerance(t,n)},s.compare_tolerance=function(e,t,n){return ne(e).cmp_tolerance(t,n)},s.eq_tolerance=function(e,t,n){return ne(e).eq_tolerance(t,n)},s.equals_tolerance=function(e,t,n){return ne(e).eq_tolerance(t,n)},s.neq_tolerance=function(e,t,n){return ne(e).neq_tolerance(t,n)},s.notEquals_tolerance=function(e,t,n){return ne(e).notEquals_tolerance(t,n)},s.lt_tolerance=function(e,t,n){return ne(e).lt_tolerance(t,n)},s.lte_tolerance=function(e,t,n){return ne(e).lte_tolerance(t,n)},s.gt_tolerance=function(e,t,n){return ne(e).gt_tolerance(t,n)},s.gte_tolerance=function(e,t,n){return ne(e).gte_tolerance(t,n)},s.log10=function(e){return ne(e).log10()},s.absLog10=function(e){return ne(e).absLog10()},s.pLog10=function(e){return ne(e).pLog10()},s.log=function(e,t){return ne(e).log(t)},s.log2=function(e){return ne(e).log2()},s.ln=function(e){return ne(e).ln()},s.logarithm=function(e,t){return ne(e).logarithm(t)},s.pow10=function(e){return Number.isInteger(e)?cs(1,e):rn(Math.pow(10,e%1),Math.trunc(e))},s.pow=function(e,t){return typeof e=="number"&&e===10&&typeof t=="number"&&Number.isInteger(t)?cs(1,t):ne(e).pow(t)},s.exp=function(e){return ne(e).exp()},s.sqr=function(e){return ne(e).sqr()},s.sqrt=function(e){return ne(e).sqrt()},s.cube=function(e){return ne(e).cube()},s.cbrt=function(e){return ne(e).cbrt()},s.dp=function(e){return ne(e).dp()},s.decimalPlaces=function(e){return ne(e).dp()},s.affordGeometricSeries=function(e,t,n,i){return Hp(ne(e),ne(t),ne(n),i)},s.sumGeometricSeries=function(e,t,n,i){return zp(e,ne(t),ne(n),i)},s.affordArithmeticSeries=function(e,t,n,i){return(function(r,o,a,c){var l=o.add(c.mul(a)).sub(a.div(2)),u=l.pow(2);return l.neg().add(u.add(a.mul(r).mul(2)).sqrt()).div(a).floor()})(ne(e),ne(t),ne(n),ne(i))},s.sumArithmeticSeries=function(e,t,n,i){return(function(r,o,a,c){var l=o.add(c.mul(a));return r.div(2).mul(l.mul(2).plus(r.sub(1).mul(a)))})(ne(e),ne(t),ne(n),ne(i))},s.efficiencyOfPurchase=function(e,t,n){return(function(i,r,o){return i.div(r).add(i.div(o))})(ne(e),ne(t),ne(n))},s.randomDecimalForTesting=function(e){if(20*Math.random()<1)return cs(0,0);var t=10*Math.random();10*Math.random()<1&&(t=Math.round(t)),t*=Math.sign(2*Math.random()-1);var n=Math.floor(Math.random()*e*2)-e;return rn(t,n)},s.prototype.normalize=function(){if(this.m>=1&&this.m<10)return this;if(this.m===0)return this.m=0,this.e=0,this;var e=Math.floor(Math.log10(Math.abs(this.m)));return this.m=e===-324?10*this.m/1e-323:this.m/sa(e),this.e+=e,this},s.prototype.fromMantissaExponent=function(e,t){return isFinite(e)&&isFinite(t)?(this.m=e,this.e=t,this.normalize(),this):(e=Number.NaN,t=Number.NaN,this)},s.prototype.fromMantissaExponent_noNormalize=function(e,t){return this.m=e,this.e=t,this},s.prototype.fromDecimal=function(e){return this.m=e.m,this.e=e.e,this},s.prototype.fromNumber=function(e){return isNaN(e)?(this.m=Number.NaN,this.e=Number.NaN):e===Number.POSITIVE_INFINITY?(this.m=1,this.e=Vn):e===Number.NEGATIVE_INFINITY?(this.m=-1,this.e=Vn):e===0?(this.m=0,this.e=0):(this.e=Math.floor(Math.log10(Math.abs(e))),this.m=this.e===-324?10*e/1e-323:e/sa(this.e),this.normalize()),this},s.prototype.fromString=function(e){if(e.indexOf("e")!==-1){var t=e.split("e");this.m=parseFloat(t[0]),this.e=parseFloat(t[1]),this.normalize()}else if(e==="NaN")this.m=Number.NaN,this.e=Number.NaN;else if(this.fromNumber(parseFloat(e)),isNaN(this.m))throw Error("[DecimalError] Invalid argument: "+e);return this},s.prototype.fromValue=function(e){return e instanceof s?this.fromDecimal(e):typeof e=="number"?this.fromNumber(e):typeof e=="string"?this.fromString(e):(this.m=0,this.e=0,this)},s.prototype.toNumber=function(){if(!isFinite(this.e))return Number.NaN;if(this.e>308)return this.m>0?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY;if(this.e<-324)return 0;if(this.e===-324)return this.m>0?5e-324:-5e-324;var e=this.m*sa(this.e);if(!isFinite(e)||this.e<0)return e;var t=Math.round(e);return Math.abs(t-e)<1e-10?t:e},s.prototype.mantissaWithDecimalPlaces=function(e){if(isNaN(this.m)||isNaN(this.e))return Number.NaN;if(this.m===0)return 0;var t=e+1,n=Math.ceil(Math.log10(Math.abs(this.m))),i=Math.round(this.m*Math.pow(10,t-n))*Math.pow(10,n-t);return parseFloat(i.toFixed(Math.max(t-n,0)))},s.prototype.toString=function(){return isNaN(this.m)||isNaN(this.e)?"NaN":this.e>=Vn?this.m>0?"Infinity":"-Infinity":this.e<=-Vn||this.m===0?"0":this.e<21&&this.e>-7?this.toNumber().toString():this.m+"e"+(this.e>=0?"+":"")+this.e},s.prototype.toExponential=function(e){if(isNaN(this.m)||isNaN(this.e))return"NaN";if(this.e>=Vn)return this.m>0?"Infinity":"-Infinity";if(this.e<=-Vn||this.m===0)return"0"+(e>0?_c(".",e+1,"0"):"")+"e+0";if(this.e>-324&&this.e<308)return this.toNumber().toExponential(e);isFinite(e)||(e=17);var t=e+1,n=Math.max(1,Math.ceil(Math.log10(Math.abs(this.m))));return(Math.round(this.m*Math.pow(10,t-n))*Math.pow(10,n-t)).toFixed(Math.max(t-n,0))+"e"+(this.e>=0?"+":"")+this.e},s.prototype.toFixed=function(e){return isNaN(this.m)||isNaN(this.e)?"NaN":this.e>=Vn?this.m>0?"Infinity":"-Infinity":this.e<=-Vn||this.m===0?"0"+(e>0?_c(".",e+1,"0"):""):this.e>=17?this.m.toString().replace(".","").padEnd(this.e+1,"0")+(e>0?_c(".",e+1,"0"):""):this.toNumber().toFixed(e)},s.prototype.toPrecision=function(e){return this.e<=-7?this.toExponential(e-1):e>this.e?this.toFixed(e-this.e-1):this.toExponential(e-1)},s.prototype.valueOf=function(){return this.toString()},s.prototype.toJSON=function(){return this.toString()},s.prototype.toStringWithDecimalPlaces=function(e){return this.toExponential(e)},s.prototype.abs=function(){return cs(Math.abs(this.m),this.e)},s.prototype.neg=function(){return cs(-this.m,this.e)},s.prototype.negate=function(){return this.neg()},s.prototype.negated=function(){return this.neg()},s.prototype.sign=function(){return Math.sign(this.m)},s.prototype.sgn=function(){return this.sign()},s.prototype.round=function(){return this.e<-1?new s(0):this.e<17?new s(Math.round(this.toNumber())):this},s.prototype.floor=function(){return this.e<-1?Math.sign(this.m)>=0?new s(0):new s(-1):this.e<17?new s(Math.floor(this.toNumber())):this},s.prototype.ceil=function(){return this.e<-1?Math.sign(this.m)>0?new s(1):new s(0):this.e<17?new s(Math.ceil(this.toNumber())):this},s.prototype.trunc=function(){return this.e<0?new s(0):this.e<17?new s(Math.trunc(this.toNumber())):this},s.prototype.add=function(e){var t,n,i=ne(e);if(this.m===0)return i;if(i.m===0)return this;if(this.e>=i.e?(t=this,n=i):(t=i,n=this),t.e-n.e>17)return t;var r=Math.round(1e14*t.m+1e14*n.m*sa(n.e-t.e));return rn(r,t.e-14)},s.prototype.plus=function(e){return this.add(e)},s.prototype.sub=function(e){return this.add(ne(e).neg())},s.prototype.subtract=function(e){return this.sub(e)},s.prototype.minus=function(e){return this.sub(e)},s.prototype.mul=function(e){if(typeof e=="number")return e<1e307&&e>-1e307?rn(this.m*e,this.e):rn(1e-307*this.m*e,this.e+307);var t=typeof e=="string"?new s(e):e;return rn(this.m*t.m,this.e+t.e)},s.prototype.multiply=function(e){return this.mul(e)},s.prototype.times=function(e){return this.mul(e)},s.prototype.div=function(e){return this.mul(ne(e).recip())},s.prototype.divide=function(e){return this.div(e)},s.prototype.divideBy=function(e){return this.div(e)},s.prototype.dividedBy=function(e){return this.div(e)},s.prototype.recip=function(){return rn(1/this.m,-this.e)},s.prototype.reciprocal=function(){return this.recip()},s.prototype.reciprocate=function(){return this.recip()},s.prototype.cmp=function(e){var t=ne(e);if(this.m===0){if(t.m===0)return 0;if(t.m<0)return 1;if(t.m>0)return-1}if(t.m===0){if(this.m<0)return-1;if(this.m>0)return 1}if(this.m>0)return t.m<0||this.e>t.e?1:this.e<t.e?-1:this.m>t.m?1:this.m<t.m?-1:0;if(this.m<0)return t.m>0||this.e>t.e?-1:this.e<t.e||this.m>t.m?1:this.m<t.m?-1:0;throw Error("Unreachable code")},s.prototype.compare=function(e){return this.cmp(e)},s.prototype.eq=function(e){var t=ne(e);return this.e===t.e&&this.m===t.m},s.prototype.equals=function(e){return this.eq(e)},s.prototype.neq=function(e){return!this.eq(e)},s.prototype.notEquals=function(e){return this.neq(e)},s.prototype.lt=function(e){var t=ne(e);return this.m===0?t.m>0:t.m===0?this.m<=0:this.e===t.e?this.m<t.m:this.m>0?t.m>0&&this.e<t.e:t.m>0||this.e>t.e},s.prototype.lte=function(e){return!this.gt(e)},s.prototype.gt=function(e){var t=ne(e);return this.m===0?t.m<0:t.m===0?this.m>0:this.e===t.e?this.m>t.m:this.m>0?t.m<0||this.e>t.e:t.m<0&&this.e<t.e},s.prototype.gte=function(e){return!this.lt(e)},s.prototype.max=function(e){var t=ne(e);return this.lt(t)?t:this},s.prototype.min=function(e){var t=ne(e);return this.gt(t)?t:this},s.prototype.clamp=function(e,t){return this.max(e).min(t)},s.prototype.clampMin=function(e){return this.max(e)},s.prototype.clampMax=function(e){return this.min(e)},s.prototype.cmp_tolerance=function(e,t){var n=ne(e);return this.eq_tolerance(n,t)?0:this.cmp(n)},s.prototype.compare_tolerance=function(e,t){return this.cmp_tolerance(e,t)},s.prototype.eq_tolerance=function(e,t){var n=ne(e);return s.lte(this.sub(n).abs(),s.max(this.abs(),n.abs()).mul(t))},s.prototype.equals_tolerance=function(e,t){return this.eq_tolerance(e,t)},s.prototype.neq_tolerance=function(e,t){return!this.eq_tolerance(e,t)},s.prototype.notEquals_tolerance=function(e,t){return this.neq_tolerance(e,t)},s.prototype.lt_tolerance=function(e,t){var n=ne(e);return!this.eq_tolerance(n,t)&&this.lt(n)},s.prototype.lte_tolerance=function(e,t){var n=ne(e);return this.eq_tolerance(n,t)||this.lt(n)},s.prototype.gt_tolerance=function(e,t){var n=ne(e);return!this.eq_tolerance(n,t)&&this.gt(n)},s.prototype.gte_tolerance=function(e,t){var n=ne(e);return this.eq_tolerance(n,t)||this.gt(n)},s.prototype.log10=function(){return this.e+Math.log10(this.m)},s.prototype.absLog10=function(){return this.e+Math.log10(Math.abs(this.m))},s.prototype.pLog10=function(){return this.m<=0||this.e<0?0:this.log10()},s.prototype.log=function(e){return Math.LN10/Math.log(e)*this.log10()},s.prototype.log2=function(){return 3.321928094887362*this.log10()},s.prototype.ln=function(){return 2.302585092994045*this.log10()},s.prototype.logarithm=function(e){return this.log(e)},s.prototype.pow=function(e){var t,n=e instanceof s?e.toNumber():e,i=this.e*n;if(Number.isSafeInteger(i)&&(t=Math.pow(this.m,n),isFinite(t)&&t!==0))return rn(t,i);var r=Math.trunc(i),o=i-r;if(t=Math.pow(10,n*Math.log10(this.m)+o),isFinite(t)&&t!==0)return rn(t,r);var a=s.pow10(n*this.absLog10());return this.sign()===-1?Math.abs(n%2)===1?a.neg():Math.abs(n%2)===0?a:new s(Number.NaN):a},s.prototype.pow_base=function(e){return ne(e).pow(this)},s.prototype.factorial=function(){var e=this.toNumber()+1;return s.pow(e/Math.E*Math.sqrt(e*Math.sinh(1/e)+1/(810*Math.pow(e,6))),e).mul(Math.sqrt(2*Math.PI/e))},s.prototype.exp=function(){var e=this.toNumber();return-706<e&&e<709?s.fromNumber(Math.exp(e)):s.pow(Math.E,e)},s.prototype.sqr=function(){return rn(Math.pow(this.m,2),2*this.e)},s.prototype.sqrt=function(){return this.m<0?new s(Number.NaN):this.e%2!=0?rn(3.16227766016838*Math.sqrt(this.m),Math.floor(this.e/2)):rn(Math.sqrt(this.m),Math.floor(this.e/2))},s.prototype.cube=function(){return rn(Math.pow(this.m,3),3*this.e)},s.prototype.cbrt=function(){var e=1,t=this.m;t<0&&(e=-1,t=-t);var n=e*Math.pow(t,1/3),i=this.e%3;return rn(i===1||i===-1?2.154434690031883*n:i!==0?4.641588833612778*n:n,Math.floor(this.e/3))},s.prototype.sinh=function(){return this.exp().sub(this.negate().exp()).div(2)},s.prototype.cosh=function(){return this.exp().add(this.negate().exp()).div(2)},s.prototype.tanh=function(){return this.sinh().div(this.cosh())},s.prototype.asinh=function(){return s.ln(this.add(this.sqr().add(1).sqrt()))},s.prototype.acosh=function(){return s.ln(this.add(this.sqr().sub(1).sqrt()))},s.prototype.atanh=function(){return this.abs().gte(1)?Number.NaN:s.ln(this.add(1).div(new s(1).sub(this)))/2},s.prototype.ascensionPenalty=function(e){return e===0?this:this.pow(Math.pow(10,-e))},s.prototype.egg=function(){return this.add(9)},s.prototype.lessThanOrEqualTo=function(e){return this.cmp(e)<1},s.prototype.lessThan=function(e){return this.cmp(e)<0},s.prototype.greaterThanOrEqualTo=function(e){return this.cmp(e)>-1},s.prototype.greaterThan=function(e){return this.cmp(e)>0},s.prototype.decimalPlaces=function(){return this.dp()},s.prototype.dp=function(){if(!isFinite(this.mantissa))return NaN;if(this.exponent>=17)return 0;for(var e=this.mantissa,t=-this.exponent,n=1;Math.abs(Math.round(e*n)/n-e)>1e-10;)n*=10,t++;return t>0?t:0},Object.defineProperty(s,"MAX_VALUE",{get:function(){return Gp},enumerable:!1,configurable:!0}),Object.defineProperty(s,"MIN_VALUE",{get:function(){return Vp},enumerable:!1,configurable:!0}),Object.defineProperty(s,"NUMBER_MAX_VALUE",{get:function(){return Wp},enumerable:!1,configurable:!0}),Object.defineProperty(s,"NUMBER_MIN_VALUE",{get:function(){return Xp},enumerable:!1,configurable:!0}),s})(),Gp=cs(1,Vn),Vp=cs(1,-Vn),Wp=ne(Number.MAX_VALUE),Xp=ne(Number.MIN_VALUE);class Ws extends Error{constructor(e){super(e),this.name="BigNumberError"}}const qp=9e15;function cn(s){return isFinite(s.mantissa)&&!isNaN(s.mantissa)&&isFinite(s.exponent)&&!isNaN(s.exponent)&&s.exponent<qp}function dt(s){if(s==null)throw new Ws(`toBigNumber received ${s===null?"null":"undefined"} — currency values must never be nullish`);let e;try{e=new Yi(s)}catch(t){const n=t instanceof Error?t.message:String(t);throw new Ws(`toBigNumber failed to parse ${JSON.stringify(s)}: ${n}`)}if(!cn(e))throw new Ws(`toBigNumber produced a non-finite value from ${JSON.stringify(s)} (NaN or ±Infinity)`);return e}const we=Object.freeze(dt(0)),vt=Object.freeze(dt(1)),sc=Object.freeze(dt(10));function jo(s,e){return e===.5?s.sqrt():s.pow(e)}function Oi(s){return s.toString()}function no(s){return dt(s)}const ef="> 0";function io(s){return{path:s,min:Number.MIN_VALUE,max:1/0,rangeToken:ef}}const Yp=[{path:"ascension.constant",min:50,max:500,rangeToken:"[50, 500]"},{path:"ascension.creditsDivisor",min:1e10,max:1e15,rangeToken:"[1e10, 1e15]"},{path:"ascension.exponent",min:.3,max:.7,rangeToken:"[0.3, 0.7]"},{path:"ascension.dmMultiplierPerPoint",min:.005,max:.1,rangeToken:"[0.005, 0.10]"},{path:"offline.earningRate",min:.1,max:1,rangeToken:"[0.1, 1.0]"},{path:"offline.baseCapHours",min:1,max:24,rangeToken:"[1, 24]"},{path:"offline.maxCapHours",min:4,max:72,rangeToken:"[4, 72]"},{path:"offline.boostMultiplier",min:1.5,max:3,rangeToken:"[1.5, 3.0]"},{path:"currencies.credits.startingBalance",min:0,max:100,rangeToken:"[0, 100]"},{path:"currencies.credits.tapAmount",min:.01,max:1e4,rangeToken:"[0.01, 10000]"},{path:"currencies.credits.tickRateMs",min:50,max:500,rangeToken:"[50, 500]"},{path:"upgrades.automationReserveFraction",min:0,max:2,rangeToken:"[0.0, 2.0]"}];function $p(s){const e=t=>`generators[${s}].${t}`;return[{path:e("tier"),min:1,max:9,integer:!0,rangeToken:"[1, 9]"},{path:e("epoch"),min:1,max:3,integer:!0,rangeToken:"[1, 3]"},io(e("baseCost")),{path:e("costMultiplier"),min:1.01,max:1.2,rangeToken:"[1.01, 1.20]"},io(e("baseOutput")),{path:e("enabled"),kind:"boolean"}]}function Kp(s){const e=t=>`upgrades.milestones[${s}].${t}`;return[{path:e("ownedCount"),min:1,max:1e5,integer:!0,rangeToken:"[1, 100000]"},{path:e("productionMultiplier"),min:1.5,max:5,rangeToken:"[1.5, 5.0]"}]}function jp(s){const e=t=>`upgrades.linearBoosts[${s}].${t}`;return[{path:e("id"),kind:"string"},{path:e("targetTier"),min:1,max:9,integer:!0,rangeToken:"[1, 9]"},{path:e("multiplier"),min:1.01,max:100,rangeToken:"[1.01, 100]"},io(e("cost")),{path:e("prerequisiteOwnedCount"),min:0,max:200,integer:!0,rangeToken:"[0, 200]"}]}function Zp(s){const e=t=>`upgrades.managers[${s}].${t}`;return[io(e("unlockCost")),{path:e("prerequisiteOwnedCount"),min:1,max:200,integer:!0,rangeToken:"[1, 200]"}]}function Jp(s){const e=t=>`ascension.upgrades[${s}].${t}`;return[{path:e("id"),kind:"string"},io(e("cost")),{path:e("maxLevel"),min:1,max:1/0,integer:!0,rangeToken:">= 1"}]}function Nt(s,e){const t=e.replace(/\[(\d+)\]/g,".$1").split(".");let n=s;for(const i of t){if(n==null||typeof n!="object")return;n=n[i]}return n}function Oa(s,e){const t=Nt(s,e.path);if(t===void 0)throw new st(`${e.path} is missing (required)`);if(typeof t!="number"||Number.isNaN(t))throw new st(`${e.path} must be a number; received ${Ti(t)}`);if(e.integer&&!Number.isInteger(t))throw new st(`${e.path} must be an integer; received ${String(t)}`);if(t<e.min||t>e.max){const n=e.rangeToken===ef?`must be ${e.rangeToken}`:`must be in ${e.rangeToken}`;throw new st(`${e.path} ${n}; received ${String(t)}`)}}function Qp(s,e){const t=Nt(s,e.path);if(t===void 0)throw new st(`${e.path} is missing (required)`);if(typeof t!="boolean")throw new st(`${e.path} must be a boolean; received ${Ti(t)}`)}function tf(s,e){const t=Nt(s,e.path);if(t===void 0)throw new st(`${e.path} is missing (required)`);if(typeof t!="string")throw new st(`${e.path} must be a non-empty string; received ${Ti(t)}`);if(t.trim().length===0)throw new st(`${e.path} must be a non-empty string; received ""`)}function Ti(s){return s===null?"null":Array.isArray(s)?"array":typeof s=="object"?"object":String(s)}function em(s){if(typeof s!="object"||s===null||Array.isArray(s))throw new st(`economy config must be an object; received ${Ti(s)}`);for(const t of Yp)Oa(s,t);Nr(s,"generators",$p),Nr(s,"upgrades.milestones",Kp),Nr(s,"upgrades.linearBoosts",jp),ju(s,"upgrades.linearBoosts","id"),Nr(s,"upgrades.managers",Zp),Nr(s,"ascension.upgrades",Jp),ju(s,"ascension.upgrades","id"),sm(s);const e=Nt(s,"save");if(e!==void 0){if(typeof e!="object"||e===null||Array.isArray(e))throw new st(`save must be an object; received ${Ti(e)}`);Oa(s,{path:"save.autosaveIntervalMs",min:5e3,max:3e4,integer:!0,rangeToken:"[5000, 30000]"}),Oa(s,{path:"save.clockSkewToleranceMs",min:0,max:6e4,integer:!0,rangeToken:"[0, 60000]"}),tf(s,{path:"save.saveKey"})}}function Nr(s,e,t){const n=Nt(s,e);if(n===void 0)throw new st(`${e} is missing (required)`);if(!Array.isArray(n))throw new st(`${e} must be an array; received ${Ti(n)}`);for(let i=0;i<n.length;i++)for(const r of t(i))"kind"in r&&r.kind==="boolean"?Qp(s,r):"kind"in r&&r.kind==="string"?tf(s,r):Oa(s,r)}function ju(s,e,t){const n=Nt(s,e);if(!Array.isArray(n))return;const i=new Map;for(let r=0;r<n.length;r++){const o=Nt(s,`${e}[${r}].${t}`);if(typeof o!="string")continue;const a=i.get(o);if(a!==void 0)throw new st(`${e}[${r}].${t} must be unique; ${JSON.stringify(o)} already used at index ${a}`);i.set(o,r)}}const tm="1e6",nm="1e27",Zu=20;function im(s,e){try{return no(s)}catch(t){throw t instanceof Ws?new st(`milestones.creditsScale[${e}].threshold is not a valid serialized BigNumber; received ${JSON.stringify(s)}`):t}}function sm(s){const e="milestones.creditsScale",t=Nt(s,e);if(t===void 0)throw new st(`${e} is missing (required)`);if(!Array.isArray(t))throw new st(`${e} must be an array; received ${Ti(t)}`);const n=no(tm),i=no(nm),r=new Map;let o;for(let a=0;a<t.length;a++){const c=p=>`${e}[${a}].${p}`,l=Nt(s,c("threshold")),u=Nt(s,c("name"));if(l===void 0)throw new st(`${c("threshold")} is missing (required)`);if(typeof l!="string")throw new st(`${c("threshold")} must be a serialized-BigNumber string; received ${Ti(l)}`);const h=im(l,a);if(!h.gte(n))throw new st(`${c("threshold")} must be >= 1e6; received ${JSON.stringify(l)}`);if(o!==void 0&&!o.lt(h))throw new st(`${c("threshold")} must be strictly greater than the previous threshold (creditsScale must be strictly ascending); received ${JSON.stringify(l)}`);if(o=h,u===void 0)throw new st(`${c("name")} is missing (required)`);if(typeof u!="string")throw new st(`${c("name")} must be a non-empty string; received ${Ti(u)}`);if(u.trim().length===0)throw new st(`${c("name")} must be a non-empty string; received ""`);if(u.length>Zu)throw new st(`${c("name")} must be <= ${Zu} characters; received ${u.length}`);const d=r.get(u);if(d!==void 0)throw new st(`${c("name")} must be unique; ${JSON.stringify(u)} already used at index ${d}`);r.set(u,a)}if(o!==void 0&&!o.lte(i)){const a=t.length-1,c=Nt(s,`${e}[${a}].threshold`);throw new st(`milestones.creditsScale[${a}].threshold (top of series) must be <= 1e27; received ${JSON.stringify(c)}`)}}const rm=.5,om=2,Ju=.01,am="[0.5, 2.0]";function cm(s){const e=Nt(s,"offline.baseCapHours"),t=Nt(s,"offline.maxCapHours");if(typeof e=="number"&&typeof t=="number"&&e>t)throw new st(`offline.baseCapHours (${e}) cannot exceed offline.maxCapHours (${t})`);const n=Nt(s,"upgrades.linearBoosts");if(Array.isArray(n))for(let i=0;i<n.length;i++)um(s,i)}function lm(s,e){const t=Nt(s,"generators");if(Array.isArray(t)){for(const n of t)if(typeof n=="object"&&n!==null&&n.tier===e)return n}}function um(s,e){const t=_=>`upgrades.linearBoosts[${e}].${_}`,n=Nt(s,t("id")),i=Nt(s,t("targetTier")),r=Nt(s,t("cost")),o=Nt(s,t("prerequisiteOwnedCount"));if(typeof i!="number"||typeof r!="number"||typeof o!="number")return;const a=lm(s,i),c=a==null?void 0:a.baseCost,l=a==null?void 0:a.costMultiplier;if(typeof c!="number"||typeof l!="number")return;const u=c*Math.pow(l,o);if(!Number.isFinite(u)||u<=0)return;const h=r/u,d=rm*(1-Ju),p=om*(1+Ju);if(h<d||h>p){const _=typeof n=="string"?JSON.stringify(n):`index ${e}`;throw new st(`upgrades.linearBoosts[${e}] (id ${_}) costFactor ${h.toFixed(2)} is outside the expected band ${am}`)}}function hm(s){const e=/position (\d+)/.exec(s);return e?Number(e[1]):0}function nf(s){let e;try{e=JSON.parse(s)}catch(i){const r=i instanceof Error?i.message:String(i),o=hm(r);throw new fu(`economy.json is not valid JSON at position ${o}`)}const t=e==null?void 0:e.meta,n=typeof(t==null?void 0:t.schemaVersion)=="number"?t.schemaVersion:0;if(n>Kr)throw new pu(`economy.json schema version ${n} is newer than supported version ${Kr}`);return n<Kr&&typeof e=="object"&&e!==null&&!Array.isArray(e)&&(e=Op(e)),em(e),cm(e),Qd(e)}function sl(s){return cn(s)?s.max(vt):vt}function dm(s,e){return{get:()=>s.get().mul(sl(e.getExtraGlobalMultiplier())).mul(sl(e.getAutomationEfficiencyBonus()))}}function fm(s,e){return{getBoostMultiplier:t=>s.getBoostMultiplier(t).mul(sl(e.getTierBoost(t)))}}const sf=-1,J={CREDITS_UPDATED:"CREDITS_UPDATED",PURCHASE_REJECTED:"PURCHASE_REJECTED",BUY_MODE_CHANGED:"BUY_MODE_CHANGED",GENERATOR_PURCHASED:"GENERATOR_PURCHASED",GENERATOR_RATE_CHANGED:"GENERATOR_RATE_CHANGED",GENERATORS_RESET_COMPLETE:"GENERATORS_RESET_COMPLETE",GENERATORS_RESTORED:"GENERATORS_RESTORED",BOOSTS_CHANGED:"BOOSTS_CHANGED",UPGRADE_PURCHASED:"UPGRADE_PURCHASED",UPGRADE_PURCHASE_REJECTED:"UPGRADE_PURCHASE_REJECTED",AUTOMATION_UNLOCKED:"AUTOMATION_UNLOCKED",UPGRADE_RESET:"UPGRADE_RESET",INTENT_AUTO_BUY_GENERATOR:"INTENT_AUTO_BUY_GENERATOR",INTENT_TAP_FORGE:"INTENT_TAP_FORGE",INTENT_BUY_GENERATOR:"INTENT_BUY_GENERATOR",INTENT_SET_BUY_MODE:"INTENT_SET_BUY_MODE",INTENT_CONFIRM_ASCENSION:"INTENT_CONFIRM_ASCENSION",INTENT_HOLD_PROGRESS:"INTENT_HOLD_PROGRESS",INTENT_DISMISS_MODAL:"INTENT_DISMISS_MODAL",INTENT_DISMISS_OVERLAY:"INTENT_DISMISS_OVERLAY",EPOCH_CHANGED:"EPOCH_CHANGED",SAVE_FAILED:"SAVE_FAILED",SAVE_LOAD_FAILED:"SAVE_LOAD_FAILED",SAVE_CONFLICT:"SAVE_CONFLICT",ASCENSION_STARTED:"ASCENSION_STARTED",ASCENSION_COMPLETE:"ASCENSION_COMPLETE",MILESTONE_REACHED:"MILESTONE_REACHED",CLOCK_GAP_DETECTED:"CLOCK_GAP_DETECTED",DARK_MATTER_UPDATED:"DARK_MATTER_UPDATED",DM_UPGRADE_PURCHASED:"DM_UPGRADE_PURCHASED",DM_TREE_CAPSTONE_SELECTED:"DM_TREE_CAPSTONE_SELECTED",OFFLINE_EARNINGS_APPLIED:"OFFLINE_EARNINGS_APPLIED"},pm=!1,mm=50,_m=20,gm=!1;class Qu extends Error{constructor(e,t){super(`[EventBus] Recursion depth ${t} exceeded (key chain: ${e})`),this.name="EventBusRecursionError"}}class vm{constructor(e={}){H(this,"_rethrowListenerErrors");H(this,"_maxDispatchDepth");H(this,"_listenerLeakWarn");H(this,"_freezePayloads");H(this,"_logger");H(this,"_listeners");H(this,"_depth",0);H(this,"_keyStack",[]);H(this,"_leakWarnedKeys",new Set);H(this,"_asyncWarnedKeys",new Set);this._rethrowListenerErrors=e.rethrowListenerErrors??pm,this._maxDispatchDepth=e.maxDispatchDepth??mm,this._listenerLeakWarn=e.listenerLeakWarn??_m,this._freezePayloads=e.freezePayloads??gm,this._logger=e.logger,this._listeners=new Map}get config(){return{rethrowListenerErrors:this._rethrowListenerErrors,maxDispatchDepth:this._maxDispatchDepth,listenerLeakWarn:this._listenerLeakWarn,freezePayloads:this._freezePayloads,logger:this._logger}}on(e,t){var r,o;const n=this._listeners.get(e);n===void 0?this._listeners.set(e,[t]):n.includes(t)||n.push(t);const i=((r=this._listeners.get(e))==null?void 0:r.length)??0;return i>this._listenerLeakWarn&&!this._leakWarnedKeys.has(e)&&(this._leakWarnedKeys.add(e),(o=this._logger)==null||o.call(this,`[EventBus] Possible listener leak on "${String(e)}": ${i} listeners (threshold ${this._listenerLeakWarn}). A subscriber is likely missing its unsubscribe.`)),()=>{this.off(e,t)}}once(e,t){const n=i=>{this.off(e,n),t(i)};return this.on(e,n)}off(e,t){const n=this._listeners.get(e);if(n===void 0)return;const i=n.indexOf(t);i!==-1&&n.splice(i,1)}listenerCount(e){var t;return((t=this._listeners.get(e))==null?void 0:t.length)??0}emit(e,t){var n,i;this._depth+=1,this._keyStack.push(e);try{if(this._depth>this._maxDispatchDepth)throw new Qu(this._keyStack.join("→"),this._depth);this._freezePayloads&&Object.freeze(t);const r=this._listeners.get(e);if(r===void 0)return;const o=r.slice();let a,c=!1;for(let l=0;l<o.length;l+=1){const u=o[l];try{const h=u(t);if(h!=null&&typeof h.then=="function"){const d=u.name===""?"<anon>":u.name,p=`${String(e)}:${d}`;this._asyncWarnedKeys.has(p)||(this._asyncWarnedKeys.add(p),(n=this._logger)==null||n.call(this,`[EventBus] async handler "${d}" on "${String(e)}" returned a Promise. Async handlers are not supported (GDD Rule 12) — the Promise is ignored. Make the handler synchronous.`))}}catch(h){if(h instanceof Qu)throw h;const d=u.name===""?"anonymous":u.name;(i=this._logger)==null||i.call(this,`[EventBus] listener "${d}" threw while handling event "${String(e)}":`,h),this._rethrowListenerErrors&&!c&&(a=h,c=!0)}}if(c)throw a}finally{this._keyStack.pop(),this._depth-=1}}}const xm=1e3;class Mm{constructor(e,t){H(this,"_config");H(this,"_tickRateMs");H(this,"_maxCatchupSteps");H(this,"_gapThresholdMs");H(this,"_dtSeconds");H(this,"_bus");H(this,"_consumers",[]);H(this,"_accumulator",0);H(this,"_isRunning",!0);const{tickRateMs:n,maxCatchupSteps:i,gapThresholdMs:r,liveBudgetCeilingMs:o}=e;if(!(n>=50&&n<=500))throw new Error(`GameClock: tickRateMs ${n} outside [50,500]`);if(!(i>=1&&i<=20))throw new Error(`GameClock: maxCatchupSteps ${i} outside [1,20]`);if(!(r>=2e3&&r<=5e3))throw new Error(`GameClock: gapThresholdMs ${r} outside [2000,5000]`);if(!Number.isFinite(o))throw new Error(`GameClock: liveBudgetCeilingMs ${o} must be a finite number`);if(r<=n*i)throw new Error(`GameClock: gapThresholdMs (${r}) must exceed tickRateMs*maxCatchupSteps (${n*i})`);if(n*i>o)throw new Error(`GameClock: tickRateMs*maxCatchupSteps (${n*i}) exceeds liveBudgetCeilingMs (${o})`);this._config={...e},this._tickRateMs=this._config.tickRateMs,this._maxCatchupSteps=this._config.maxCatchupSteps,this._gapThresholdMs=this._config.gapThresholdMs,this._dtSeconds=this._config.tickRateMs/xm,this._bus=t}register(e){return this._consumers.includes(e)||this._consumers.push(e),()=>{const t=this._consumers.indexOf(e);t!==-1&&this._consumers.splice(t,1)}}advance(e){if(!this._isRunning)return{steps:0,stallGapFired:!1};if(!Number.isFinite(e)||e<=0)return{steps:0,stallGapFired:!1};this._accumulator+=e;let t=0;const n=[...this._consumers];for(;this._accumulator>=this._tickRateMs&&t<this._maxCatchupSteps;){for(const r of n)r(this._dtSeconds);this._accumulator-=this._tickRateMs,t+=1}let i=!1;if(this._accumulator>this._gapThresholdMs){const r=this._accumulator-this._accumulator%this._tickRateMs;this._bus.emit(J.CLOCK_GAP_DETECTED,{elapsedMs:r,source:"stall"}),this._accumulator=this._accumulator%this._tickRateMs,i=!0}return{steps:t,stallGapFired:i}}reportGap(e){!Number.isFinite(e)||e<=0||this._bus.emit(J.CLOCK_GAP_DETECTED,{elapsedMs:e,source:"visibility"})}pause(){this._isRunning=!1}resume(){this._isRunning=!0}isRunning(){return this._isRunning}}const Sn=1,fn=9;var wt,pi,lo,uo,Bi,mi,ho,tc,fo,Ht,Ui,rf,qr;class Em{constructor(e,t,n){q(this,Ht);q(this,wt);q(this,pi);q(this,lo);q(this,uo);q(this,Bi);q(this,mi);q(this,ho);q(this,tc,({tier:e})=>{if(e===sf){for(let t=Sn;t<=fn;t+=1)this.isUnlocked(t)&&v(this,wt)[t]>0&&re(this,Ht,qr).call(this,t,v(this,mi)[t]??we);return}!Number.isInteger(e)||e<Sn||e>fn||this.isUnlocked(e)&&v(this,wt)[e]>0&&re(this,Ht,qr).call(this,e,v(this,mi)[e]??we)});q(this,fo);W(this,wt,new Array(fn+1).fill(0)),W(this,Bi,t),W(this,mi,new Array(fn+1).fill(void 0));const i=new Array(fn+1).fill(void 0);for(const a of e.generators)Number.isInteger(a.tier)&&a.tier>=Sn&&a.tier<=fn&&(i[a.tier]=a);W(this,pi,i),W(this,lo,n),W(this,fo,e.upgrades.milestones.filter(a=>Number.isFinite(a.ownedCount)&&a.ownedCount>0&&Number.isFinite(a.productionMultiplier)&&a.productionMultiplier>0));let r=!1,o=!0;for(let a=Sn;a<=fn;a+=1){const c=i[a];c!==void 0&&(r=!0,c.enabled&&(o=!1))}W(this,uo,r&&o),W(this,ho,t.on(J.BOOSTS_CHANGED,v(this,tc)))}getOwned(e){return re(this,Ht,Ui).call(this,e,"getOwned"),v(this,wt)[e]}isUnlocked(e){if(re(this,Ht,Ui).call(this,e,"isUnlocked"),v(this,uo))return e===Sn?!0:v(this,pi)[e]===void 0?!1:v(this,wt)[e-1]>=1;const t=v(this,pi)[e];return t===void 0||!t.enabled?!1:e===Sn?!0:v(this,wt)[e-1]>=1}getCost(e,t=1){if(re(this,Ht,Ui).call(this,e,"getCost"),!Number.isInteger(t)||t<1)return we;const n=v(this,pi)[e];if(n===void 0)return we;const i=v(this,wt)[e],r=n.costMultiplier,o=dt(n.baseCost).mul(dt(r).pow(i));return t===1?o:r===1?o.mul(t):o.mul(dt(r).pow(t).sub(vt).div(r-1))}getMaxAffordable(e,t){re(this,Ht,Ui).call(this,e,"getMaxAffordable");const n=v(this,pi)[e];if(n===void 0||!cn(t))return 0;const i=this.getCost(e,1);if(i.lte(we))return 0;const r=t.div(i);if(r.lte(we))return 0;const o=n.costMultiplier,a=r.toNumber();let c;if(o===1){if(!isFinite(a))return 0;c=Math.floor(a)}else isFinite(a)?c=Math.floor(Math.log(a*(o-1)+1)/Math.log(o)):c=Math.floor(r.mul(o-1).add(vt).log10()/Math.log10(o));if(!Number.isFinite(c)||c>=Number.MAX_SAFE_INTEGER)return 0;for(;this.getCost(e,c+1).lte(t);)c+=1;for(;c>0&&this.getCost(e,c).gt(t);)c-=1;return Math.max(0,c)}getMilestoneMultiplier(e){re(this,Ht,Ui).call(this,e,"getMilestoneMultiplier");const t=v(this,wt)[e];let n=vt;for(const i of v(this,fo))i.ownedCount<=t&&(n=n.mul(dt(i.productionMultiplier)));return n}getTierRate(e){if(re(this,Ht,Ui).call(this,e,"getTierRate"),!this.isUnlocked(e))return we;const t=v(this,wt)[e];if(t===0)return we;const n=v(this,pi)[e];return n===void 0?we:dt(n.baseOutput).mul(t).mul(this.getMilestoneMultiplier(e)).mul(re(this,Ht,rf).call(this,e))}getTotalBaseRate(){let e=we;for(let t=Sn;t<=fn;t+=1)e=e.add(this.getTierRate(t));return e}applyPurchase(e,t){if(re(this,Ht,Ui).call(this,e,"applyPurchase"),!this.isUnlocked(e)||!Number.isInteger(t)||t<1)return;const n=v(this,wt)[e],i=v(this,mi)[e]??this.getTierRate(e);v(this,wt)[e]+=t,v(this,Bi).emit(J.GENERATOR_PURCHASED,{tier:e,previousOwned:n,owned:v(this,wt)[e]}),re(this,Ht,qr).call(this,e,i)}resetRun(){const e=[];for(let t=Sn;t<=fn;t+=1)v(this,wt)[t]>0&&e.push({tier:t,previousRate:this.getTierRate(t)});v(this,wt).fill(0);for(const{tier:t,previousRate:n}of e)re(this,Ht,qr).call(this,t,n);v(this,Bi).emit(J.GENERATORS_RESET_COMPLETE,{})}serialize(){const e=[];for(let t=Sn;t<=fn;t+=1)v(this,wt)[t]>0&&e.push({tier:t,owned:v(this,wt)[t]});return e}restore(e){v(this,wt).fill(0);for(const t of e)Number.isInteger(t.tier)&&t.tier>=Sn&&t.tier<=fn&&(v(this,wt)[t.tier]=Number.isFinite(t.owned)&&t.owned>=0?Math.floor(t.owned):0);v(this,mi).fill(void 0),v(this,Bi).emit(J.GENERATORS_RESTORED,{})}dispose(){v(this,ho).call(this)}}wt=new WeakMap,pi=new WeakMap,lo=new WeakMap,uo=new WeakMap,Bi=new WeakMap,mi=new WeakMap,ho=new WeakMap,tc=new WeakMap,fo=new WeakMap,Ht=new WeakSet,Ui=function(e,t){if(!Number.isInteger(e)||e<Sn||e>fn)throw new RangeError(`${t}: tier must be an integer in [${Sn}, ${fn}], got ${e}`)},rf=function(e){var t;return((t=v(this,lo))==null?void 0:t.getBoostMultiplier(e))??vt},qr=function(e,t){const n=this.getTierRate(e);v(this,mi)[e]=n,v(this,Bi).emit(J.GENERATOR_RATE_CHANGED,{tier:e,rate:n,rateDelta:n.sub(t)})};const eh=["x1","x10","xmax"],th="x1",ym=1,Sm=10,nh=1;var on,_i,gi,Wn,po,mo,An,_n,Ks,nc,_o,St,rl,ks,Fa,of,af,cf,lf;class Tm{constructor(e,t,n,i,r){q(this,St);q(this,on,we);q(this,_i,we);q(this,gi,we);q(this,Wn,th);q(this,po);q(this,mo);q(this,An);q(this,_n);q(this,Ks,!1);q(this,nc,e=>{const t=v(this,_n).getTotalBaseRate().mul(e);if(t.gt(we)){W(this,Ks,!0);try{this.earn(t)}finally{W(this,Ks,!1)}}re(this,St,ks).call(this)});q(this,_o);const o=e.currencies.credits.tapAmount;if(!(Number.isFinite(o)&&o>0))throw new Error(`CreditsSystem: currencies.credits.tapAmount ${o} must be a finite number > 0 (AC-B3-07 / EC-9)`);W(this,po,dt(o)),W(this,An,t),W(this,_n,n),W(this,mo,i),W(this,_o,[t.on(J.INTENT_TAP_FORGE,()=>{this.earn(v(this,po))}),t.on(J.INTENT_BUY_GENERATOR,({tier:a})=>{re(this,St,af).call(this,a)}),t.on(J.INTENT_SET_BUY_MODE,({mode:a})=>{re(this,St,of).call(this,a)}),t.on(J.INTENT_AUTO_BUY_GENERATOR,({tier:a})=>{re(this,St,cf).call(this,a)}),r.register(v(this,nc))])}earn(e){if(!cn(e)||!e.gt(we)){console.warn("CreditsSystem: earn() rejected a non-finite or non-positive base (F-B3-03 guard)",e);return}const t=re(this,St,rl).call(this),n=e.mul(t);W(this,on,v(this,on).add(n)),W(this,_i,v(this,_i).add(n)),W(this,gi,v(this,gi).add(e)),v(this,Ks)||re(this,St,ks).call(this,t)}spend(e){return!cn(e)||!e.gt(we)||!v(this,on).gte(e)?!1:(W(this,on,v(this,on).sub(e)),re(this,St,ks).call(this),!0)}addOfflineEarnings(e){if(!cn(e)||!e.gt(we)){console.warn("CreditsSystem: rejected invalid offline lump (F-B3-06 / EC-4)",e);return}this.earn(e)}resetRun(){W(this,on,we),W(this,_i,we),W(this,gi,we),re(this,St,ks).call(this)}serialize(){return{balance:Oi(v(this,on)),lifetimeCredits:Oi(v(this,_i)),lifetimeBaseCredits:Oi(v(this,gi)),buyMode:v(this,Wn)}}restore(e){W(this,on,re(this,St,Fa).call(this,"balance",e.balance)),W(this,_i,re(this,St,Fa).call(this,"lifetimeCredits",e.lifetimeCredits)),W(this,gi,re(this,St,Fa).call(this,"lifetimeBaseCredits",e.lifetimeBaseCredits)),W(this,Wn,e.buyMode!==void 0&&eh.includes(e.buyMode)?e.buyMode:th),re(this,St,ks).call(this),v(this,An).emit(J.BUY_MODE_CHANGED,{mode:v(this,Wn)})}getBalance(){return v(this,on)}getLifetimeCredits(){return v(this,_i)}getLifetimeBaseCredits(){return v(this,gi)}getBuyMode(){return v(this,Wn)}dispose(){for(const e of v(this,_o))e()}}on=new WeakMap,_i=new WeakMap,gi=new WeakMap,Wn=new WeakMap,po=new WeakMap,mo=new WeakMap,An=new WeakMap,_n=new WeakMap,Ks=new WeakMap,nc=new WeakMap,_o=new WeakMap,St=new WeakSet,rl=function(){const e=v(this,mo).get();return!cn(e)||e.lt(vt)?(console.warn("CreditsSystem: F-B3-01 clamped a malformed global multiplier to ONE (provider contract: finite >= ONE)",e),vt):e},ks=function(e){const t=v(this,_n).getTotalBaseRate().mul(e??re(this,St,rl).call(this));v(this,An).emit(J.CREDITS_UPDATED,{balance:v(this,on),ratePerSec:t})},Fa=function(e,t){let n;try{n=no(t)}catch(i){if(!(i instanceof Ws))throw i;return console.warn(`CreditsSystem: restore() clamped corrupted field '${e}' to ZERO — deserialize rejected the persisted string (EC-5 / R13)`,t),we}return!cn(n)||!n.gte(we)?(console.warn(`CreditsSystem: restore() clamped invalid field '${e}' to ZERO — non-finite or negative after deserialize (EC-5 / R13)`,t),we):n},of=function(e){!eh.includes(e)||e===v(this,Wn)||(W(this,Wn,e),v(this,An).emit(J.BUY_MODE_CHANGED,{mode:e}))},af=function(e){if(!v(this,_n).isUnlocked(e)){v(this,An).emit(J.PURCHASE_REJECTED,{reason:"locked"});return}const t=re(this,St,lf).call(this,e);if(t===0){v(this,An).emit(J.PURCHASE_REJECTED,{reason:"qty_zero"});return}const n=v(this,_n).getCost(e,t);this.spend(n)?v(this,_n).applyPurchase(e,t):v(this,An).emit(J.PURCHASE_REJECTED,{reason:"insufficient_balance"})},cf=function(e){if(!v(this,_n).isUnlocked(e)){v(this,An).emit(J.PURCHASE_REJECTED,{reason:"locked"});return}const t=v(this,_n).getCost(e,nh);this.spend(t)?v(this,_n).applyPurchase(e,nh):v(this,An).emit(J.PURCHASE_REJECTED,{reason:"insufficient_balance"})},lf=function(e){switch(v(this,Wn)){case"x1":return ym;case"x10":return Sm;case"xmax":return v(this,_n).getMaxAffordable(e,v(this,on))}};function ih(s){return Number.isFinite(s)?dt(s).max(vt):vt}function bm(s){return Number.isFinite(s)?dt(s):null}function ra(s){return bm("cost"in s?s.cost:s.unlockCost)}function Am(s){return cn(s)?s:we}function wm(s){return`manager:tier${s}`}var js,Xn,qn,Zs,Js,go,gn,vo,Yn,xo,Mt,Hs,ol,zs,uf,al,hf;class Rm{constructor(e,t,n,i,r){q(this,Mt);q(this,js);q(this,Xn,new Set);q(this,qn,{});q(this,Zs);q(this,Js);q(this,go);q(this,gn);q(this,vo);q(this,Yn);q(this,xo);re(this,Mt,hf).call(this,e),W(this,Zs,n),W(this,Js,i),W(this,gn,t),W(this,xo,r)}getBoostMultiplier(e){return v(this,js).filter(t=>t.targetTier===e&&v(this,Xn).has(t.id)).reduce((t,n)=>t.mul(ih(n.multiplier)),vt)}isManagerUnlocked(e){return v(this,qn)[e]===!0}isVisible(e){return re(this,Mt,Hs).call(this,e.targetTier,e.prerequisiteOwnedCount)}isAvailable(e){return re(this,Mt,ol).call(this,e.id,e.targetTier,e)}getUpgradeState(e){const t=v(this,Yn).get(e);if(t===void 0)return"LOCKED";const{entry:n,targetTier:i}=t;return re(this,Mt,zs).call(this,e,i,n)?"PURCHASED":re(this,Mt,Hs).call(this,i,n.prerequisiteOwnedCount)?re(this,Mt,ol).call(this,e,i,n)?"AVAILABLE":"UNAFFORDABLE":"LOCKED"}getProjectedTierRate(e,t){const n=v(this,Zs).getTierRate(e),i=v(this,Yn).get(t),r=i!==void 0&&"multiplier"in i.entry?i.entry:void 0;return r===void 0?(console.warn("UpgradeSystem: getProjectedTierRate received an unknown or non-boost upgradeId; returning the base tier rate (F-B4-04)",t),n):Am(n).mul(ih(r.multiplier))}getSortedVisibleUpgrades(){const e=[];for(const[t,n]of v(this,Yn))re(this,Mt,Hs).call(this,n.targetTier,n.entry.prerequisiteOwnedCount)&&e.push({entry:n.entry,id:t,targetTier:n.targetTier,costKey:ra(n.entry),purchased:re(this,Mt,zs).call(this,t,n.targetTier,n.entry)?1:0});return e.sort((t,n)=>{if(t.targetTier!==n.targetTier)return t.targetTier-n.targetTier;if(t.purchased!==n.purchased)return t.purchased-n.purchased;if(t.costKey!==null&&n.costKey!==null){const i=t.costKey.cmp(n.costKey);if(i!==0)return i}else{if(t.costKey===null&&n.costKey!==null)return 1;if(t.costKey!==null&&n.costKey===null)return-1}return t.id<n.id?-1:t.id>n.id?1:0}),e.map(t=>t.entry)}getCheapestAvailableUpgradeCost(){let e=null;for(const[t,n]of v(this,Yn)){if(re(this,Mt,zs).call(this,t,n.targetTier,n.entry)||!re(this,Mt,Hs).call(this,n.targetTier,n.entry.prerequisiteOwnedCount))continue;const i=ra(n.entry);i!==null&&(e===null||i.lt(e))&&(e=i)}return e??we}purchase(e){const t=v(this,Yn).get(e);if(t===void 0){v(this,gn).emit(J.UPGRADE_PURCHASE_REJECTED,{upgradeId:e,reason:"not_found"});return}if(re(this,Mt,zs).call(this,e,t.targetTier,t.entry))return;const n=ra(t.entry);if(n===null||n.lte(we)){v(this,gn).emit(J.UPGRADE_PURCHASE_REJECTED,{upgradeId:e,reason:"invalid_cost"});return}if(!v(this,Js).spend(n)){v(this,gn).emit(J.UPGRADE_PURCHASE_REJECTED,{upgradeId:e,reason:"insufficient_balance"});return}this.markUpgradePurchased(e);const{type:i,targetTier:r}=t;i==="LinearBoost"?(v(this,gn).emit(J.BOOSTS_CHANGED,{tier:r}),v(this,gn).emit(J.UPGRADE_PURCHASED,{upgradeId:e,type:i,targetTier:r})):(v(this,qn)[r]=!0,v(this,gn).emit(J.AUTOMATION_UNLOCKED,{tier:r}),v(this,gn).emit(J.UPGRADE_PURCHASED,{upgradeId:e,type:i,targetTier:r}))}markUpgradePurchased(e){v(this,Xn).add(e)}getState(){return{purchasedUpgrades:[...v(this,Xn)],managerUnlocked:{...v(this,qn)}}}loadState(e){if(v(this,Xn).clear(),re(this,Mt,al).call(this),e==null)return;const t=e.purchasedUpgrades;if(Array.isArray(t))for(const i of t)v(this,Yn).has(i)?v(this,Xn).add(i):console.warn("UpgradeSystem.loadState: dropping a purchased upgradeId absent from the current catalog (removed in a patch?)",i);else t!==void 0&&console.warn("UpgradeSystem.loadState: purchasedUpgrades is not an array; defaulting to empty",t);const n=e.managerUnlocked;if(n!==null&&typeof n=="object"&&!Array.isArray(n))for(const[i,r]of Object.entries(n))r===!0&&(v(this,qn)[Number(i)]=!0);else n!==void 0&&console.warn("UpgradeSystem.loadState: managerUnlocked is not a plain object; defaulting to all-locked",n)}reset(){var t;v(this,Xn).clear();let e=!1;try{e=((t=v(this,xo))==null?void 0:t.shouldPersistManagers())===!0}catch{e=!1}e||re(this,Mt,al).call(this),v(this,gn).emit(J.BOOSTS_CHANGED,{tier:sf}),v(this,gn).emit(J.UPGRADE_RESET,{})}onConfigReload(e){{console.warn("UpgradeSystem.onConfigReload is a dev-only hot-reload convenience and is a no-op in a production build (live catalog swap refused — anti-cheat)");return}}}js=new WeakMap,Xn=new WeakMap,qn=new WeakMap,Zs=new WeakMap,Js=new WeakMap,go=new WeakMap,gn=new WeakMap,vo=new WeakMap,Yn=new WeakMap,xo=new WeakMap,Mt=new WeakSet,Hs=function(e,t){return re(this,Mt,uf).call(this,e)&&v(this,Zs).getOwned(e)>=t},ol=function(e,t,n){if(!re(this,Mt,Hs).call(this,t,n.prerequisiteOwnedCount)||re(this,Mt,zs).call(this,e,t,n))return!1;const i=ra(n);return i===null?!1:v(this,Js).getBalance().gte(i)},zs=function(e,t,n){return"multiplier"in n?v(this,Xn).has(e):v(this,qn)[t]===!0},uf=function(e){return v(this,go)[e-1]===!0},al=function(){for(const e of Object.keys(v(this,qn)))delete v(this,qn)[Number(e)]},hf=function(e){var n,i;W(this,js,Object.freeze((((n=e.upgrades)==null?void 0:n.linearBoosts)??[]).map(r=>Object.freeze({...r})))),W(this,vo,Object.freeze((((i=e.upgrades)==null?void 0:i.managers)??[]).map(r=>Object.freeze({...r}))));const t=new Map;for(const r of v(this,js))t.set(r.id,{entry:r,type:"LinearBoost",targetTier:r.targetTier});v(this,vo).forEach((r,o)=>{const a=o+1;t.set(wm(a),{entry:r,type:"AutomationUnlock",targetTier:a})}),W(this,Yn,t),W(this,go,Object.freeze((e.generators??[]).map(r=>r.enabled===!0)))};var Mo,Qs,Eo,er,yo,So,ic,df;class Cm{constructor(e){q(this,ic);q(this,Mo);q(this,Qs);q(this,Eo);q(this,er);q(this,yo);q(this,So);W(this,Mo,e.bus),W(this,Qs,e.b2),W(this,Eo,e.b3),W(this,er,e.b4),W(this,yo,e.reserveFraction),W(this,So,[...e.enabledTiers].sort((t,n)=>n-t)),e.clock.register(()=>re(this,ic,df).call(this))}}Mo=new WeakMap,Qs=new WeakMap,Eo=new WeakMap,er=new WeakMap,yo=new WeakMap,So=new WeakMap,ic=new WeakSet,df=function(){const e=v(this,er).getCheapestAvailableUpgradeCost().mul(v(this,yo));for(const t of v(this,So)){if(!v(this,er).isManagerUnlocked(t)||!v(this,Qs).isUnlocked(t))continue;const n=v(this,Qs).getCost(t,1).add(e);v(this,Eo).getBalance().gte(n)&&v(this,Mo).emit(J.INTENT_AUTO_BUY_GENERATOR,{tier:t})}};const sh=9;var fs,To,wn,bo,zn,ff,cl,pf,mf;class Lm{constructor(e,t){q(this,zn);q(this,fs);q(this,To);q(this,wn,0);q(this,bo);W(this,fs,e),W(this,To,t),W(this,bo,[e.on(J.GENERATOR_PURCHASED,n=>re(this,zn,ff).call(this,n)),e.on(J.GENERATORS_RESTORED,()=>re(this,zn,pf).call(this)),e.on(J.GENERATORS_RESET_COMPLETE,()=>re(this,zn,mf).call(this))])}getEpoch(){return v(this,wn)}dispose(){for(const e of v(this,bo))e()}}fs=new WeakMap,To=new WeakMap,wn=new WeakMap,bo=new WeakMap,zn=new WeakSet,ff=function(e){const{tier:t,owned:n}=e;n>=1&&Number.isInteger(t)&&t>=1&&t<=sh&&t>v(this,wn)&&(W(this,wn,t),v(this,fs).emit(J.EPOCH_CHANGED,{epoch:v(this,wn)}))},cl=function(){for(let e=sh;e>=1;e--)if(v(this,To).getOwned(e)>=1)return e;return 0},pf=function(){W(this,wn,re(this,zn,cl).call(this)),v(this,fs).emit(J.EPOCH_CHANGED,{epoch:v(this,wn)})},mf=function(){const e=re(this,zn,cl).call(this);e!==v(this,wn)&&(W(this,wn,e),v(this,fs).emit(J.EPOCH_CHANGED,{epoch:v(this,wn)}))};const Im=Object.freeze({addDarkMatter:()=>{},isNoOp:!0});var Ao,wo,Ro,ps,tr,Co,Lo,ms,ki,Io,ll;class Nm{constructor(e,t,n,i,r,o){q(this,Io);q(this,Ao);q(this,wo);q(this,Ro);q(this,ps);q(this,tr);q(this,Co);q(this,Lo);q(this,ms);q(this,ki,0);Pm(e.ascension),W(this,Ao,dt(e.ascension.constant)),W(this,wo,dt(e.ascension.creditsDivisor)),W(this,Ro,e.ascension.exponent),W(this,ps,i),W(this,tr,t),W(this,Co,n),W(this,Lo,r),W(this,ms,o??Im)}assertRealProviderInstalled(){if(v(this,ms).isNoOp===!0)throw new Error("AscensionSystem: real DarkMatterProvider never installed — setDarkMatterProvider() was not called before boot step 6 (production wiring fault; refusing to silently mint 0 Dark Matter)")}setDarkMatterProvider(e){W(this,ms,e)}getRunCount(){return v(this,ki)}serialize(){return{runCount:v(this,ki)}}restore(e){const t=e==null?void 0:e.runCount;if(typeof t!="number"||!Number.isSafeInteger(t)||t<0)throw new Error(`AscensionSystem.restore: invalid runCount (${String(t)}) — must be a non-negative safe integer`);W(this,ki,t)}getEstimatedDM(){return re(this,Io,ll).call(this,v(this,ps).getLifetimeBaseCredits())}canAscend(){return this.getEstimatedDM().gte(vt)}executeAscension(){if(!this.canAscend())throw new Error("AscensionSystem.executeAscension: canAscend() is false (programming error — E5 must gate the Ascend button)");this.assertRealProviderInstalled(),v(this,tr).emit(J.ASCENSION_STARTED,{});const e=v(this,ps).getLifetimeBaseCredits(),t=re(this,Io,ll).call(this,e);v(this,ps).resetRun(),v(this,Co).resetRun(),v(this,Lo).reset(),v(this,ms).addDarkMatter(t,e),ia(this,ki)._++,v(this,tr).emit(J.ASCENSION_COMPLETE,{dmGained:t,runCount:v(this,ki)})}}Ao=new WeakMap,wo=new WeakMap,Ro=new WeakMap,ps=new WeakMap,tr=new WeakMap,Co=new WeakMap,Lo=new WeakMap,ms=new WeakMap,ki=new WeakMap,Io=new WeakSet,ll=function(e){if(e.lt(we))throw new Error("AscensionSystem.computeDM: basis < 0 violates the B3 lifetimeBaseCredits invariant");if(e.eq(we))return we;const t=e.div(v(this,wo)),n=jo(t,v(this,Ro));return v(this,Ao).mul(n).floor()};function Pm(s){const{constant:e,creditsDivisor:t,exponent:n}=s;if(!Number.isFinite(e)||e<0)throw new Error(`AscensionSystem: invalid ascension.constant (K=${e}) — must be finite and >= 0`);if(!Number.isFinite(t)||t<=0)throw new Error(`AscensionSystem: invalid ascension.creditsDivisor (D=${t}) — must be finite and > 0`);if(!Number.isFinite(n)||n<=0)throw new Error(`AscensionSystem: invalid ascension.exponent (E=${n}) — must be finite and > 0`)}var No,Po,an,Xt,Rn,Bt,nr,qi,Ba,_f;class Dm{constructor(e,t,n){q(this,qi);q(this,No);q(this,Po);q(this,an,we);q(this,Xt,we);q(this,Rn,we);q(this,Bt,"UNINITIALIZED");q(this,nr);Um(t.ascension),W(this,No,e),W(this,Po,n),W(this,nr,dt(t.ascension.dmMultiplierPerPoint))}initFresh(){if(v(this,Bt)!=="UNINITIALIZED")throw new Error(`DarkMatterSystem.initFresh: expected UNINITIALIZED, got ${v(this,Bt)} — fresh-init must run exactly once at boot, before restore()`);W(this,Bt,"LIVE")}getState(){return v(this,Bt)}getBalance(){return v(this,an)}getTotalSpent(){return v(this,Xt)}getLifetimeMinted(){return v(this,Rn)}get(){return v(this,Bt)!=="LIVE"?vt:vt.plus(v(this,nr).times(v(this,Xt)))}getMultiplierPreview(e){if(e.lt(we))throw new Error(`DarkMatterSystem.getMultiplierPreview: additionalDM (${e.toString()}) must be >= 0 (EC-C3-15)`);return vt.plus(v(this,nr).times(v(this,Xt).plus(e)))}addDarkMatter(e,t){if(e.lt(we))throw new Error(`DarkMatterSystem.addDarkMatter: amount (${e.toString()}) must be >= 0 (EC-C3-02)`);if(v(this,Bt)!=="LIVE")throw new Error(`DarkMatterSystem.addDarkMatter: state is ${v(this,Bt)}, must be LIVE — minting during boot/restore is a fault (EC-C3-12)`);W(this,an,v(this,an).plus(e)),W(this,Rn,v(this,Rn).plus(e)),re(this,qi,Ba).call(this)}spendDarkMatter(e){if(e.lt(we))throw new Error(`DarkMatterSystem.spendDarkMatter: amount (${e.toString()}) must be >= 0 (EC-C3-04)`);if(v(this,Bt)!=="LIVE")throw new Error(`DarkMatterSystem.spendDarkMatter: state is ${v(this,Bt)}, must be LIVE — spending during boot/restore is a fault (systems R5)`);return e.eq(we)?!0:v(this,an).gte(e)?(W(this,an,v(this,an).minus(e)),W(this,Xt,v(this,Xt).plus(e)),re(this,qi,Ba).call(this),!0):!1}serialize(){return{darkMatter:Oi(v(this,an)),totalDMSpent:Oi(v(this,Xt)),lifetimeDMMinted:Oi(v(this,Rn))}}restore(e,t,n){var c;if(v(this,Bt)!=="UNINITIALIZED")throw new Error(`DarkMatterSystem.restore: expected UNINITIALIZED, got ${v(this,Bt)} — restore must run once at boot, not over a live ledger`);W(this,Bt,"RESTORING");const i=gc(e),r=gc(t);let o=gc(n);if(o===mu||o===hs){const l=ys(r)?r:we;ys(i)?(o=i.plus(l),console.info("C3.restore: backfilled lifetimeDMMinted from darkMatter + (valid) totalDMSpent (legacy save)")):ys(r)&&(o=l,console.info("C3.restore: backfilled lifetimeDMMinted from totalDMSpent only (legacy save, darkMatter unusable)"))}r===hs&&console.error("C3.restore: totalDMSpent corrupt — defaulting to 0 (multiplier history lost)"),W(this,Xt,ys(r)?r:we),W(this,Rn,ys(o)?o:we);const a=v(this,Rn).minus(v(this,Xt));W(this,an,a.lt(we)?we:a),i===hs?console.warn("C3.restore: stored darkMatter corrupt/unusable — using ledger-derived value"):ys(i)&&r!==hs&&!i.eq(v(this,an))&&console.warn("C3.restore: stored darkMatter disagrees with ledger — using derived value"),v(this,Xt).gt(v(this,Rn))&&(console.error("C3.restore: LEDGER INCONSISTENCY — totalDMSpent > lifetimeDMMinted; clamping totalDMSpent down"),(c=v(this,Po))==null||c.call(this,"dm_ledger_inconsistency",{totalDMSpent:Oi(v(this,Xt)),lifetimeDMMinted:Oi(v(this,Rn))}),W(this,Xt,v(this,Rn)),W(this,an,we)),re(this,qi,_f).call(this)}seedForTest(e,t=we){W(this,Bt,e),W(this,Xt,t)}}No=new WeakMap,Po=new WeakMap,an=new WeakMap,Xt=new WeakMap,Rn=new WeakMap,Bt=new WeakMap,nr=new WeakMap,qi=new WeakSet,Ba=function(){v(this,No).emit(J.DARK_MATTER_UPDATED,{balance:v(this,an),totalSpent:v(this,Xt),multiplier:this.get()})},_f=function(){W(this,Bt,"LIVE"),re(this,qi,Ba).call(this)};const mu=Symbol("DarkMatter.ABSENT"),hs=Symbol("DarkMatter.INVALID");function ys(s){return s!==mu&&s!==hs}function gc(s){if(s==null||s==="")return mu;let e;try{e=dt(s)}catch(t){if(t instanceof Ws)return hs;throw t}return e.lt(we)?hs:e}function Um(s){const e=s==null?void 0:s.dmMultiplierPerPoint;if(!Number.isFinite(e)||e<=0)throw new Error(`DarkMatterSystem: invalid ascension.dmMultiplierPerPoint (${String(e)}) — must be finite and > 0 (EC-C3-10)`)}class Lt extends Error{constructor(t,n){super(n);H(this,"code");this.name="CatalogValidationError",this.code=t,Object.setPrototypeOf(this,Lt.prototype)}}const Om=new Set(["globalMultiplier","tierBoost","offlineExtension","automationUnlock"]),rh=9;function oh(s){return cn(s)?s.max(vt):vt}function ah(s,e){if(!Number.isFinite(s))return 1;const t=Math.floor(s);return t<1?1:t>e?e:t}function Fm(s){if(!Number.isFinite(s.cost)||s.cost<0)throw new Lt("CATALOG_RESPEC_COST",`dmTree.respec.cost must be finite and >= 0 (got ${String(s.cost)})`)}var qt,Zt,_s,ir,Do,Hi,_t,hn,ul,hl,dl,fl;class Bm{constructor(e,t,n,i){q(this,hn);q(this,qt,"UNINITIALIZED");q(this,Zt);q(this,_s);q(this,ir);q(this,Do);q(this,Hi);q(this,_t,new Map);var r,o;W(this,Zt,km(((r=e.dmTree)==null?void 0:r.nodes)??[])),W(this,_s,n),W(this,ir,t),W(this,Do,i),W(this,Hi,((o=e.dmTree)==null?void 0:o.respec)??{enabled:!1,cost:0,refundNodes:!1}),Fm(v(this,Hi))}initFresh(){if(v(this,qt)!=="UNINITIALIZED")throw new Error(`DMUpgradeTree.initFresh: expected UNINITIALIZED, got ${v(this,qt)} — fresh-init must run exactly once at boot, before restore()`);W(this,qt,"LIVE")}getState(){return v(this,qt)}getNodeLevel(e){return v(this,_t).get(e)??0}getNodeCost(e){const t=v(this,Zt).get(e);if(t===void 0)return we;const n=v(this,_t).get(e)??0;return n>=t.maxLevel?we:dt(t.baseCost).mul(dt(t.growth).pow(n)).floor()}canPurchase(e){const t=v(this,Zt).get(e);if(t===void 0||(v(this,_t).get(e)??0)>=t.maxLevel)return!1;for(const n of t.prereqs)if((v(this,_t).get(n)??0)<1)return!1;return re(this,hn,ul).call(this,t)?!1:v(this,_s).getBalance().gte(this.getNodeCost(e))}getCommittedCapstone(){for(const[e,t]of v(this,_t))if(t>=1){const n=v(this,Zt).get(e);if((n==null?void 0:n.isCapstone)===!0)return n.branch}return null}purchase(e){const t=v(this,Zt).get(e);if(t===void 0)return{ok:!1,reason:"unknown_node"};const n=v(this,_t).get(e)??0;if(n>=t.maxLevel)return{ok:!1,reason:"maxed"};for(const o of t.prereqs)if((v(this,_t).get(o)??0)<1)return{ok:!1,reason:"locked_prereq"};if(re(this,hn,ul).call(this,t))return{ok:!1,reason:"rival_capstone"};const i=this.getNodeCost(e);if(!v(this,_s).spendDarkMatter(i))return{ok:!1,reason:"insufficient_dm"};const r=n+1;return v(this,_t).set(e,r),v(this,ir).emit(J.DM_UPGRADE_PURCHASED,{nodeId:e,level:r}),t.isCapstone&&v(this,ir).emit(J.DM_TREE_CAPSTONE_SELECTED,{branch:t.branch}),{ok:!0,level:r}}respecCapstone(){if(!v(this,Hi).enabled)return{ok:!1,reason:"respec_disabled"};let e=null;for(const[t,n]of v(this,_t))if(n>=1){const i=v(this,Zt).get(t);if((i==null?void 0:i.isCapstone)===!0){e=t;break}}if(e===null)return{ok:!1,reason:"no_capstone"};if(!v(this,_s).spendDarkMatter(dt(v(this,Hi).cost)))return{ok:!1,reason:"insufficient_dm"};if(v(this,_t).delete(e),v(this,Hi).refundNodes)for(const t of[...v(this,_t).keys()]){const n=v(this,Zt).get(t);n!==void 0&&!n.isCapstone&&v(this,_t).delete(t)}return{ok:!0}}getExtraGlobalMultiplier(){return re(this,hn,hl).call(this,e=>e.effectType==="globalMultiplier")}getTierBoost(e){return re(this,hn,hl).call(this,t=>t.effectType==="tierBoost"&&t.effectParams.targetTier===e)}getOfflineCapBonusHours(){return re(this,hn,fl).call(this,e=>e.capHours??0)}getOfflineRateBonus(){return re(this,hn,fl).call(this,e=>e.rateBonus??0)}getWelcomeBackBonus(){return vt}isManagerPersistent(){if(v(this,qt)!=="LIVE")return!1;for(const[e,t]of v(this,_t)){if(t<1)continue;const n=v(this,Zt).get(e);if((n==null?void 0:n.effectType)==="automationUnlock"&&!n.isCapstone)return!0}return!1}shouldPersistManagers(){return this.isManagerPersistent()}getAutomationEfficiencyBonus(){if(v(this,qt)!=="LIVE")return vt;for(const[e,t]of v(this,_t)){if(t<1)continue;const n=v(this,Zt).get(e);if((n==null?void 0:n.effectType)==="automationUnlock"&&n.isCapstone){const i=n.effectParams.efficiencyBonus??0;return oh(vt.add(dt(i)))}}return vt}serialize(){const e=[];for(const[t,n]of v(this,_t))n>=1&&e.push({id:t,level:n});return e.sort((t,n)=>t.id<n.id?-1:t.id>n.id?1:0),e}restore(e){var n;if(v(this,qt)!=="UNINITIALIZED")throw new Error(`DMUpgradeTree.restore: expected UNINITIALIZED, got ${v(this,qt)} — restore must run exactly once at boot, in place of initFresh()`);W(this,qt,"RESTORING"),v(this,_t).clear();let t=null;for(const i of e){const r=v(this,Zt).get(i.id);if(r===void 0){console.warn(`C4.restore: unknown node id "${i.id}" — skipping (catalog migration, EC-C4-09)`);continue}if(r.isCapstone){if(!Number.isFinite(i.level)||i.level<1){console.warn(`C4.restore: capstone "${i.id}" has invalid level ${String(i.level)} — dropping (no fabricated commitment, EC-C4-10)`);continue}const o=ah(i.level,r.maxLevel);if(t===null)t=i.id,v(this,_t).set(i.id,o);else{const a=v(this,Zt).get(t);if(a!==void 0&&a.branch===r.branch)v(this,_t).set(i.id,o);else{const c=t,l=c<i.id?c:i.id,u=l===i.id?c:i.id;console.error(`C4.restore: two rival capstones "${t}" and "${i.id}" — keeping lowest id "${l}", dropping "${u}" (EC-C4-11)`),(n=v(this,Do))==null||n.call(this,"dm_tree_multi_capstone",{kept:l,dropped:u}),v(this,_t).delete(u),l===i.id&&v(this,_t).set(i.id,o),t=l}}}else{const o=ah(i.level,r.maxLevel);o!==i.level&&console.warn(`C4.restore: node "${i.id}" level ${String(i.level)} coerced to ${o} in [1, ${r.maxLevel}] (EC-C4-10)`),v(this,_t).set(i.id,o)}}W(this,qt,"LIVE")}seedForTest(e,t={}){W(this,qt,e);for(const[n,i]of Object.entries(t))v(this,_t).set(n,i)}}qt=new WeakMap,Zt=new WeakMap,_s=new WeakMap,ir=new WeakMap,Do=new WeakMap,Hi=new WeakMap,_t=new WeakMap,hn=new WeakSet,ul=function(e){if(!e.isCapstone)return!1;const t=this.getCommittedCapstone();return t!==null&&t!==e.branch},hl=function(e){if(v(this,qt)!=="LIVE")return vt;let t=vt;for(const{node:n,level:i}of re(this,hn,dl).call(this,e)){const r=n.effectParams.perLevelBonus??0;t=t.mul(vt.add(dt(r).mul(i)))}return oh(t)},dl=function(e){const t=[];for(const[n,i]of v(this,_t)){if(i<1)continue;const r=v(this,Zt).get(n);r!==void 0&&e(r)&&t.push({node:r,level:i})}return t.sort((n,i)=>n.node.id<i.node.id?-1:n.node.id>i.node.id?1:0),t},fl=function(e){if(v(this,qt)!=="LIVE")return 0;let t=0;for(const{node:n}of re(this,hn,dl).call(this,i=>i.effectType==="offlineExtension"))t+=e(n.effectParams);return t};function km(s){const e=new Map;for(const n of s){if(e.has(n.id))throw new Lt("CATALOG_DUP_ID",`dmTree: duplicate node id "${n.id}"`);e.set(n.id,n)}for(const n of s){if(!Number.isInteger(n.maxLevel)||n.maxLevel<1)throw new Lt("CATALOG_MAXLEVEL",`dmTree node "${n.id}": maxLevel must be a positive integer (got ${String(n.maxLevel)})`);if(!Number.isFinite(n.baseCost)||n.baseCost<1)throw new Lt("CATALOG_BASECOST",`dmTree node "${n.id}": baseCost must be finite and >= 1 (got ${String(n.baseCost)})`);if(!Number.isFinite(n.growth)||n.growth<1)throw new Lt("CATALOG_GROWTH",`dmTree node "${n.id}": growth must be finite and >= 1.0 (got ${String(n.growth)})`);if(n.maxLevel>1&&(n.growth<=1||Math.floor(n.baseCost*n.growth)<=n.baseCost))throw new Lt("CATALOG_FLAT_REPEATABLE",`dmTree node "${n.id}": repeatable node requires growth > 1.0 and a non-flat cost curve (got growth ${String(n.growth)}, baseCost ${String(n.baseCost)})`);if(!Om.has(n.effectType))throw new Lt("CATALOG_EFFECT_TYPE",`dmTree node "${n.id}": invalid effectType "${String(n.effectType)}"`);if(n.effectType==="globalMultiplier"||n.effectType==="tierBoost"){const i=n.effectParams.perLevelBonus;if(!Number.isFinite(i)||i<=0)throw new Lt("CATALOG_PERLEVELBONUS",`dmTree node "${n.id}": ${n.effectType} requires effectParams.perLevelBonus finite and > 0 (got ${String(i)})`)}if(n.effectType==="tierBoost"){const i=n.effectParams.targetTier;if(!Number.isInteger(i)||i<1||i>rh)throw new Lt("CATALOG_TARGET_TIER",`dmTree node "${n.id}": tierBoost targetTier must be an integer in 1..${rh} (got ${String(i)})`)}if(n.effectType==="offlineExtension"){const{capHours:i,rateBonus:r}=n.effectParams;if(!Number.isFinite(i)||i<0||!Number.isFinite(r)||r<0)throw new Lt("CATALOG_OFFLINE_PARAMS",`dmTree node "${n.id}": offlineExtension requires effectParams.capHours and rateBonus finite and >= 0 (got capHours ${String(i)}, rateBonus ${String(r)})`)}if(n.effectType==="automationUnlock"){if(n.isCapstone){const i=n.effectParams.efficiencyBonus;if(!Number.isFinite(i)||i<=0)throw new Lt("CATALOG_EFFICIENCYBONUS",`dmTree node "${n.id}": automationUnlock capstone requires effectParams.efficiencyBonus finite and > 0 (got ${String(i)})`)}else if(n.effectParams.efficiencyBonus!==void 0)throw new Lt("CATALOG_MISPLACED_EFFICIENCYBONUS",`dmTree node "${n.id}": a non-capstone automationUnlock (manager-persistence) must NOT declare effectParams.efficiencyBonus (the efficiency scalar is a Cortex CAPSTONE effect, F-C4-06)`)}}const t=new Map;for(const n of s){if(!n.isCapstone)continue;const i=t.get(n.branch);if(i!==void 0)throw new Lt("CATALOG_DUP_CAPSTONE",`dmTree branch "${n.branch}": more than one capstone ("${i}" and "${n.id}")`);t.set(n.branch,n.id)}for(const n of s)for(const i of n.prereqs){const r=e.get(i);if(r===void 0)throw new Lt("CATALOG_MISSING_PREREQ",`dmTree node "${n.id}": prereq "${i}" is not in the catalog`);if(r.branch!==n.branch)throw new Lt("CATALOG_CROSS_BRANCH_PREREQ",`dmTree node "${n.id}" (branch "${n.branch}"): prereq "${i}" is in a different branch ("${r.branch}")`)}Hm(s,e);for(const n of s)for(const i of n.prereqs){const r=e.get(i);if(r.tier>=n.tier)throw new Lt("CATALOG_PREREQ_TIER_ORDER",`dmTree node "${n.id}" (tier ${n.tier}): prereq "${i}" must be a strictly lower tier (got tier ${r.tier})`)}return e}function Hm(s,e){const r=new Map;for(const a of s)r.set(a.id,0);const o=a=>{r.set(a,1);const c=e.get(a);if(c!==void 0)for(const l of c.prereqs){const u=r.get(l);if(u===1)throw new Lt("CATALOG_CYCLE",`dmTree: prereq cycle detected involving "${a}" → "${l}"`);u===0&&o(l)}r.set(a,2)};for(const a of s)r.get(a.id)===0&&o(a.id)}const zm=1,Gm=9;var vi,Uo,sr,rr,or,Un,$n,Oo,Fo,Bo,Ki,gf,vf,xf;class Vm{constructor(e,t,n,i){q(this,Ki);q(this,vi);q(this,Uo);q(this,sr);q(this,rr);q(this,or);q(this,Un,new Set);q(this,$n,new Set);q(this,Oo,!1);q(this,Fo,0);q(this,Bo);var r;W(this,vi,e),W(this,Uo,n),W(this,sr,i),W(this,rr,t.upgrades.milestones.map(o=>o.ownedCount).slice().sort((o,a)=>o-a)),W(this,or,(((r=t.milestones)==null?void 0:r.creditsScale)??[]).map(o=>({threshold:dt(o.threshold),thresholdNum:Number(o.threshold),name:o.name})).sort((o,a)=>o.threshold.gt(a.threshold)?1:o.threshold.lt(a.threshold)?-1:0)),W(this,Bo,[v(this,vi).on(J.GENERATOR_PURCHASED,o=>re(this,Ki,gf).call(this,o)),v(this,vi).on(J.CREDITS_UPDATED,()=>re(this,Ki,vf).call(this)),v(this,vi).on(J.GENERATORS_RESET_COMPLETE,()=>re(this,Ki,xf).call(this))])}dispose(){for(const e of v(this,Bo))e()}getState(){return{celebratedOwned:[...v(this,Un)],celebratedLifetime:[...v(this,$n)]}}restore(e){if(v(this,Un).clear(),e.celebratedOwned===void 0)for(let t=zm;t<=Gm;t++){const n=v(this,Uo).getOwned(t);for(const i of v(this,rr))n>=i&&v(this,Un).add(`${t}:${i}`)}else for(const t of e.celebratedOwned)v(this,Un).add(t);if(v(this,$n).clear(),e.celebratedLifetime===void 0){const t=v(this,sr).getLifetimeCredits();for(const n of v(this,or))t.gte(n.threshold)&&v(this,$n).add(`credits:${n.name}`)}else for(const t of e.celebratedLifetime)v(this,$n).add(t);W(this,Oo,!0)}}vi=new WeakMap,Uo=new WeakMap,sr=new WeakMap,rr=new WeakMap,or=new WeakMap,Un=new WeakMap,$n=new WeakMap,Oo=new WeakMap,Fo=new WeakMap,Bo=new WeakMap,Ki=new WeakSet,gf=function({tier:e,previousOwned:t,owned:n}){const i=v(this,rr),r=i.filter(c=>t<c&&c<=n),o=r.filter(c=>!v(this,Un).has(`${e}:${c}`)).length;if(o===0)return;const a=++ia(this,Fo)._;for(const c of r){const l=`${e}:${c}`;v(this,Un).has(l)||(v(this,Un).add(l),v(this,vi).emit(J.MILESTONE_REACHED,{type:"owned_count",tier:e,threshold:c,ordinal:i.indexOf(c)+1,seriesLength:i.length,burstId:a,burstSize:o}))}},vf=function(){if(!v(this,Oo))return;const e=v(this,sr).getLifetimeCredits(),t=v(this,or),n=t.filter(r=>e.gte(r.threshold)&&!v(this,$n).has(`credits:${r.name}`)).length;if(n===0)return;const i=++ia(this,Fo)._;for(let r=0;r<t.length;r++){const o=t[r],a=`credits:${o.name}`;!e.gte(o.threshold)||v(this,$n).has(a)||(v(this,$n).add(a),v(this,vi).emit(J.MILESTONE_REACHED,{type:"credits_scale",threshold:o.thresholdNum,name:o.name,ordinal:r+1,seriesLength:t.length,burstId:i,burstSize:n}))}},xf=function(){v(this,Un).clear()};const jr=1,Wm="stellarforge.save",ch="stellarforge.save.backup",Xm="stellarforge.save.corrupt";class _u extends Error{constructor(t,n){super(`save blob saveVersion ${t} is newer than this build's ${n} — refusing to interpret a future schema`);H(this,"saveVersion");H(this,"currentVersion");this.name="SaveVersionTooNewError",this.saveVersion=t,this.currentVersion=n,Object.setPrototypeOf(this,_u.prototype)}}const qm=["x1","x10","xmax"],gu="x1",Ym=1,$m=9;function Km(){return{balance:"0",lifetimeCredits:"0",lifetimeBaseCredits:"0",buyMode:gu}}function Mf(){return{purchasedUpgrades:[],managerUnlocked:{}}}function jm(){return{celebratedOwned:[],celebratedLifetime:[]}}function lh(s){return{saveVersion:jr,lastSeen:s,credits:Km(),generators:[],upgrades:Mf(),darkMatter:"0",totalDMSpent:"0",lifetimeDMMinted:"0",dmUpgrades:[],milestones:jm()}}function Zm(s){return JSON.stringify(s)}function Pr(s){return typeof s=="object"&&s!==null&&!Array.isArray(s)}function uh(s,e){const t=Pr(s)?s:{},n=typeof t.saveVersion=="number"?t.saveVersion:0;if(n>jr)throw new _u(n,jr);const i=Pr(t.credits)?t.credits:{},r={balance:typeof i.balance=="string"?i.balance:"0",lifetimeCredits:typeof i.lifetimeCredits=="string"?i.lifetimeCredits:"0",lifetimeBaseCredits:typeof i.lifetimeBaseCredits=="string"?i.lifetimeBaseCredits:"0",buyMode:i.buyMode??gu},o=Pr(t.upgrades)?t.upgrades:void 0,a=o?{purchasedUpgrades:Array.isArray(o.purchasedUpgrades)?o.purchasedUpgrades:[],managerUnlocked:Pr(o.managerUnlocked)?o.managerUnlocked:{}}:Mf(),c=Pr(t.milestones)?t.milestones:void 0,l=c?{celebratedOwned:Array.isArray(c.celebratedOwned)?c.celebratedOwned:[],celebratedLifetime:Array.isArray(c.celebratedLifetime)?c.celebratedLifetime:[]}:{celebratedOwned:void 0,celebratedLifetime:void 0};return{saveVersion:jr,lastSeen:typeof t.lastSeen=="number"?t.lastSeen:0,credits:r,generators:Array.isArray(t.generators)?t.generators:[],upgrades:a,darkMatter:typeof t.darkMatter=="string"?t.darkMatter:"0",totalDMSpent:typeof t.totalDMSpent=="string"?t.totalDMSpent:"0",lifetimeDMMinted:typeof t.lifetimeDMMinted=="string"?t.lifetimeDMMinted:"0",dmUpgrades:Array.isArray(t.dmUpgrades)?t.dmUpgrades:[],milestones:l,...typeof t.integrity=="string"?{integrity:t.integrity}:{}}}function hh(s,e){const t=[];for(const r of s.generators){if(!r||typeof r.tier!="number"||r.tier<Ym||r.tier>$m)continue;const o=typeof r.owned=="number"&&Number.isInteger(r.owned)&&r.owned>=0?r.owned:0;t.push({tier:r.tier,owned:o})}const n=qm.includes(s.credits.buyMode)?s.credits.buyMode:gu,i=Jm(s.lastSeen,e);return{...s,lastSeen:i,credits:{...s.credits,buyMode:n},generators:t}}function Jm(s,e){return typeof s!="number"||!Number.isFinite(s)||s<=0?e:s}const vc={autosaveIntervalMs:15e3,clockSkewToleranceMs:1e4,saveKey:Wm},Qm=5e3,e_=3e4,t_=0,n_=6e4;function dh(s,e,t){return Math.min(t,Math.max(e,s))}function i_(s){const e=s.save,t=e==null?void 0:e.autosaveIntervalMs,n=e==null?void 0:e.clockSkewToleranceMs,i=e==null?void 0:e.saveKey;return{autosaveIntervalMs:typeof t=="number"&&Number.isFinite(t)?dh(t,Qm,e_):vc.autosaveIntervalMs,clockSkewToleranceMs:typeof n=="number"&&Number.isFinite(n)?dh(n,t_,n_):vc.clockSkewToleranceMs,saveKey:typeof i=="string"&&i.trim().length>0?i:vc.saveKey}}const s_=["balance","lifetimeCredits","lifetimeBaseCredits"];function r_(s=globalThis,e=globalThis.document){return{setTimeout:(t,n)=>s.setTimeout(t,n),clearTimeout:t=>s.clearTimeout(t),addEventListener:(t,n)=>{t==="visibilitychange"?e.addEventListener("visibilitychange",n):s.addEventListener("pagehide",n)},removeEventListener:(t,n)=>{t==="visibilitychange"?e.removeEventListener("visibilitychange",n):s.removeEventListener("pagehide",n)},isHidden:()=>e.visibilityState==="hidden"}}const o_=2e3;var Kn,Yt,ar,jn,gs,Zn,cr,zi,lr,ur,hr,Jt,xi,dr,ko,Ho,zo,ft,ka,pl,ml,Ef,_l,gl,yf,Sf,Tf,bf;class a_{constructor(e){q(this,ft);q(this,Kn);q(this,Yt);q(this,ar);q(this,jn);q(this,gs);q(this,Zn);q(this,cr);q(this,zi,0);q(this,lr,!0);q(this,ur,Number.NEGATIVE_INFINITY);q(this,hr,!1);q(this,Jt);q(this,xi,!1);q(this,dr);q(this,ko,Number.NEGATIVE_INFINITY);q(this,Ho,()=>{var e;(e=v(this,Jt))!=null&&e.isHidden()&&this.saveNow()});q(this,zo,()=>{this.saveNow()});W(this,Kn,e.storage),W(this,Yt,e.collaborators),W(this,ar,e.config),W(this,jn,e.bus),W(this,gs,e.now??(()=>Date.now())),W(this,Zn,i_(e.config)),W(this,cr,e.tabId??"d1"),W(this,Jt,e.env)}get saveKey(){return v(this,Zn).saveKey}load(){const e=v(this,gs).call(this);W(this,hr,!1);const t=v(this,Kn).getItem(v(this,Zn).saveKey);let n;if(t===null)n=lh(e);else{let i;try{i=JSON.parse(t)}catch{return n=re(this,ft,ml).call(this,t,e,"corrupt_primary"),re(this,ft,pl).call(this,n),{lastSeen:n.lastSeen}}const r=i.savedAt;typeof r=="number"&&Number.isFinite(r)&&W(this,ur,r);const o=uh(i,v(this,ar)),a=hh(o,e),c=re(this,ft,gl).call(this,a.credits);c!==null?n=re(this,ft,Ef).call(this,t,a,e,c):(n={...a,lastSeen:re(this,ft,yf).call(this,a.lastSeen,e)},W(this,hr,!0))}return re(this,ft,pl).call(this,n),{lastSeen:n.lastSeen}}saveNow(){if(!v(this,lr))return;const e=v(this,gs).call(this);re(this,ft,Sf).call(this);const t=Zm({...re(this,ft,bf).call(this),tabId:v(this,cr),savedAt:e});try{v(this,Kn).setItem(v(this,Zn).saveKey,t)}catch(n){re(this,ft,Tf).call(this,n),v(this,lr)&&v(this,xi)&&re(this,ft,ka).call(this);return}if(W(this,ur,e),v(this,hr))try{v(this,Kn).setItem(ch,t)}catch{}v(this,xi)&&re(this,ft,ka).call(this)}startAutosave(){v(this,xi)||v(this,Jt)!==void 0&&(W(this,xi,!0),v(this,Jt).addEventListener("visibilitychange",v(this,Ho)),v(this,Jt).addEventListener("pagehide",v(this,zo)),re(this,ft,ka).call(this))}stopAutosave(){v(this,xi)&&(W(this,xi,!1),v(this,Jt)!==void 0&&(v(this,Jt).removeEventListener("visibilitychange",v(this,Ho)),v(this,Jt).removeEventListener("pagehide",v(this,zo)),v(this,Jt).clearTimeout(v(this,dr))))}onAscensionSaved(){this.saveNow()}onMajorPurchase(){const e=v(this,gs).call(this);e<v(this,ko)||(W(this,ko,e+o_),this.saveNow())}getLastSeen(){return v(this,zi)}resetLastSeen(e){Number.isFinite(e)&&W(this,zi,Math.max(e,v(this,zi)))}}Kn=new WeakMap,Yt=new WeakMap,ar=new WeakMap,jn=new WeakMap,gs=new WeakMap,Zn=new WeakMap,cr=new WeakMap,zi=new WeakMap,lr=new WeakMap,ur=new WeakMap,hr=new WeakMap,Jt=new WeakMap,xi=new WeakMap,dr=new WeakMap,ko=new WeakMap,Ho=new WeakMap,zo=new WeakMap,ft=new WeakSet,ka=function(){v(this,Jt)!==void 0&&(v(this,Jt).clearTimeout(v(this,dr)),W(this,dr,v(this,Jt).setTimeout(()=>{this.saveNow()},v(this,Zn).autosaveIntervalMs)))},pl=function(e){var t,n,i;v(this,Yt).upgrades.loadState(e.upgrades),v(this,Yt).generators.restore(e.generators),v(this,Yt).credits.restore(e.credits),(t=v(this,Yt).darkMatter)==null||t.restore(e.darkMatter,e.totalDMSpent,e.lifetimeDMMinted),(n=v(this,Yt).dmTree)==null||n.restore(e.dmUpgrades),(i=v(this,Yt).milestones)==null||i.restore(e.milestones),W(this,zi,e.lastSeen)},ml=function(e,t,n){v(this,Kn).setItem(Xm,e);const i=re(this,ft,_l).call(this,t);return i!==null?(i.lastSeen=t,v(this,jn).emit(J.SAVE_LOAD_FAILED,{reason:n,recoveredFromBackup:!0}),i):(v(this,jn).emit(J.SAVE_LOAD_FAILED,{reason:n,recoveredFromBackup:!1}),lh(t))},Ef=function(e,t,n,i){const r=re(this,ft,_l).call(this,n);return r!==null?(v(this,jn).emit(J.SAVE_FAILED,{reason:"corrupted_field",field:i}),{...t,credits:r.credits,lastSeen:n}):re(this,ft,ml).call(this,e,n,"corrupted_field")},_l=function(e){const t=v(this,Kn).getItem(ch);if(t===null)return null;try{const n=uh(JSON.parse(t),v(this,ar)),i=hh(n,e);return re(this,ft,gl).call(this,i.credits)!==null?null:i}catch{return null}},gl=function(e){for(const t of s_)try{no(e[t])}catch{return t}return null},yf=function(e,t){return e>t+v(this,Zn).clockSkewToleranceMs?t:e},Sf=function(){let e;try{e=v(this,Kn).getItem(v(this,Zn).saveKey)}catch{return}if(e===null)return;let t;try{t=JSON.parse(e)}catch{return}const n=typeof t.savedAt=="number"?t.savedAt:void 0,i=typeof t.tabId=="string"?t.tabId:void 0;n!==void 0&&i!==void 0&&n>v(this,ur)&&i!==v(this,cr)&&v(this,jn).emit(J.SAVE_CONFLICT,{otherSavedAt:n})},Tf=function(e){const t=e==null?void 0:e.name;if(t==="QuotaExceededError"||t==="NS_ERROR_DOM_QUOTA_REACHED"){v(this,jn).emit(J.SAVE_FAILED,{reason:"quota_exceeded"});return}W(this,lr,!1),v(this,jn).emit(J.SAVE_FAILED,{reason:"storage_unavailable"})},bf=function(){var t,n,i;const e=(t=v(this,Yt).darkMatter)==null?void 0:t.serialize();return{saveVersion:jr,lastSeen:v(this,zi),credits:v(this,Yt).credits.serialize(),generators:v(this,Yt).generators.serialize(),upgrades:v(this,Yt).upgrades.getState(),darkMatter:(e==null?void 0:e.darkMatter)??"0",totalDMSpent:(e==null?void 0:e.totalDMSpent)??"0",lifetimeDMMinted:(e==null?void 0:e.lifetimeDMMinted)??"0",dmUpgrades:((n=v(this,Yt).dmTree)==null?void 0:n.serialize())??[],milestones:((i=v(this,Yt).milestones)==null?void 0:i.getState())??{celebratedOwned:[],celebratedLifetime:[]}}};const c_=36e5,l_=1e3,u_=5e3;var fr,vs,Go,Vo,pr,Wo,Xo,qo,Yo,$o,Ko,Gn,Af,wf,vl,Rf;class h_{constructor(e){q(this,Gn);q(this,fr);q(this,vs);q(this,Go);q(this,Vo);q(this,pr);q(this,Wo);q(this,Xo);q(this,qo);q(this,Yo);q(this,$o,!1);q(this,Ko,!1);W(this,fr,e.bus),W(this,vs,e.clock),W(this,Go,e.baseRate),W(this,Vo,e.deposit),W(this,pr,e.nowProvider),W(this,Wo,e.config.offline.earningRate),W(this,Xo,e.config.offline.baseCapHours),W(this,qo,e.briefThresholdMs??u_),W(this,Yo,[v(this,fr).on(J.CLOCK_GAP_DETECTED,t=>re(this,Gn,Af).call(this,t))])}dispose(){for(const e of v(this,Yo))e()}markRestoreComplete(){W(this,Ko,!0)}applyOfflineProgress(){if(v(this,$o))return;W(this,$o,!0);const e=v(this,vs).getLastSeen(),t=v(this,pr).call(this)-e;re(this,Gn,vl).call(this,t,"load")}}fr=new WeakMap,vs=new WeakMap,Go=new WeakMap,Vo=new WeakMap,pr=new WeakMap,Wo=new WeakMap,Xo=new WeakMap,qo=new WeakMap,Yo=new WeakMap,$o=new WeakMap,Ko=new WeakMap,Gn=new WeakSet,Af=function(e){if(!v(this,Ko))return;const t=v(this,pr).call(this);v(this,vs).resetLastSeen(t);const n=v(this,vs).getLastSeen()>t;re(this,Gn,vl).call(this,e.elapsedMs,"gap",n?"reset_not_applied":void 0)},wf=function(){return v(this,Xo)*c_},vl=function(e,t,n){let i=n,r=e;Number.isFinite(e)||(r=0,i="non_finite");const o=re(this,Gn,wf).call(this),a=d_(r,0,o),c=a/l_;let l=v(this,Go).getTotalBaseRate();cn(l)||(l=we,i="non_finite");const u=v(this,Wo)*c;let h;Number.isFinite(u)?h=l.times(dt(u)):(i="non_finite",h=we);const d=re(this,Gn,Rf).call(this,t,e,a,i);h.gt(we)&&cn(h)&&v(this,Vo).addOfflineEarnings(h);const p={baseLump:h,elapsedSeconds:c,reason:d};i!==void 0&&(p.diagnostic=i),v(this,fr).emit(J.OFFLINE_EARNINGS_APPLIED,p)},Rf=function(e,t,n,i){return e==="gap"?"gap":i==="non_finite"?"brief":t<0?"clock_back":n<v(this,qo)?"brief":"away"};function d_(s,e,t){return Math.min(t,Math.max(e,s))}const f_={maxCatchupSteps:5,gapThresholdMs:3e3,liveBudgetCeilingMs:500};function p_(s){const e=s.now??(()=>Date.now()),t={...f_,...s.clockTunables},n=new vm,i=nf(s.configJson),r=new Mm({tickRateMs:i.currencies.credits.tickRateMs,maxCatchupSteps:t.maxCatchupSteps,gapThresholdMs:t.gapThresholdMs,liveBudgetCeilingMs:t.liveBudgetCeilingMs},n),o=new Dm(n,i),a=new Bm(i,n,o),c=dm(o,a);let l=null;const h=fm({getBoostMultiplier:M=>l===null?vt:l.getBoostMultiplier(M)},a),d=new Em(i,n,h),p=new Tm(i,n,d,c,r),_=new Rm(i,n,d,p,a);l=_;const g=i.upgrades.managers.map((M,I)=>I+1),m=new Cm({bus:n,clock:r,b2:d,b3:p,b4:_,reserveFraction:i.upgrades.automationReserveFraction,enabledTiers:g}),f=new Lm(n,d),S=new Nm(i,n,d,p,_);S.setDarkMatterProvider(o),S.assertRealProviderInstalled();const T=new Vm(n,i,d,p),E={serialize:()=>{const M=p.serialize();return{balance:M.balance,lifetimeCredits:M.lifetimeCredits,lifetimeBaseCredits:M.lifetimeBaseCredits,buyMode:M.buyMode??"x1"}},restore:M=>p.restore(M)},C=new a_({storage:s.storage,collaborators:{upgrades:_,generators:d,credits:E,darkMatter:o,dmTree:a,milestones:T},config:i,bus:n,now:e,tabId:s.tabId,env:s.autosaveEnv}),R=new h_({config:i,bus:n,clock:C,baseRate:d,deposit:p,nowProvider:e});let w;const L=n.on(J.OFFLINE_EARNINGS_APPLIED,M=>{w=M}),{lastSeen:b}=C.load();return R.applyOfflineProgress(),C.resetLastSeen(e()),R.markRestoreComplete(),L(),{bus:n,clock:r,generators:d,credits:p,upgrades:_,automation:m,epoch:f,ascension:S,darkMatter:o,dmTree:a,milestones:T,save:C,offline:R,loadedLastSeen:b,offlineReport:w,dispose(){R.dispose(),T.dispose(),f.dispose(),p.dispose(),d.dispose()}}}const m_=30,fh=4,xc=1500,__=[{key:"Space",intent:J.INTENT_TAP_FORGE}];var We=(s=>(s[s.GAMEPLAY=0]="GAMEPLAY",s[s.SOFT_OVERLAY=1]="SOFT_OVERLAY",s[s.MODAL=2]="MODAL",s[s.DISABLED=3]="DISABLED",s))(We||{});const ph=4,g_={[J.INTENT_TAP_FORGE]:{[We.GAMEPLAY]:"live",[We.SOFT_OVERLAY]:"live",[We.MODAL]:"suppressed",[We.DISABLED]:"suppressed"},[J.INTENT_BUY_GENERATOR]:{[We.GAMEPLAY]:"live",[We.SOFT_OVERLAY]:"suppressed",[We.MODAL]:"suppressed",[We.DISABLED]:"suppressed"},[J.INTENT_SET_BUY_MODE]:{[We.GAMEPLAY]:"live",[We.SOFT_OVERLAY]:"suppressed",[We.MODAL]:"suppressed",[We.DISABLED]:"suppressed"},[J.INTENT_CONFIRM_ASCENSION]:{[We.GAMEPLAY]:"suppressed",[We.SOFT_OVERLAY]:"suppressed",[We.MODAL]:"live",[We.DISABLED]:"suppressed"},[J.INTENT_HOLD_PROGRESS]:{[We.GAMEPLAY]:"suppressed",[We.SOFT_OVERLAY]:"suppressed",[We.MODAL]:"live",[We.DISABLED]:"suppressed"},[J.INTENT_DISMISS_MODAL]:{[We.GAMEPLAY]:"suppressed",[We.SOFT_OVERLAY]:"suppressed",[We.MODAL]:"live",[We.DISABLED]:"suppressed"},[J.INTENT_DISMISS_OVERLAY]:{[We.GAMEPLAY]:"suppressed",[We.SOFT_OVERLAY]:"live",[We.MODAL]:"suppressed",[We.DISABLED]:"suppressed"}};class v_{constructor(e,t=__,n={}){H(this,"_bus");H(this,"_keymap");H(this,"_hitAreas",[]);H(this,"_presses",new Map);H(this,"_lastAcceptedDown",new Map);H(this,"_hold");H(this,"_contextStack");H(this,"_logger");this._bus=e,this._keymap=t,this._contextStack=[n.initialContext??We.GAMEPLAY],this._logger=n.logger}get context(){return this._contextStack[this._contextStack.length-1]}pushContext(e){var t;if(this._contextStack.length>=ph){(t=this._logger)==null||t.call(this,`[A4 input] pushContext rejected: stack already at max depth ${ph} (attempted context ${We[e]}). Likely a consumer push/pop imbalance.`);return}this._hold!==void 0&&(this._bus.emit(J.INTENT_HOLD_PROGRESS,{ratio:0,source:this._hold.source}),this._hold=void 0),this._presses.clear(),this._contextStack.push(e)}popContext(){this._contextStack.length>1&&this._contextStack.pop()}markReady(){this._contextStack=[We.GAMEPLAY]}get keymap(){return this._keymap}registerHitArea(e){if(e.kind==="buy"&&!(Number.isInteger(e.tier)&&e.tier>=1))throw new Error(`InputTranslator.registerHitArea: buy area '${e.id}' requires an integer tier >= 1 (got ${String(e.tier)}) — a wrong tier buys the wrong generator (AC-A4-03).`);this._hitAreas.push(e)}clearHitAreas(){this._hitAreas.length=0,this._lastAcceptedDown.clear(),this._hold=void 0}onPointerDown(e){if(this.context===We.DISABLED)return;const t=this._resolveHitArea(e.x,e.y);if(t===void 0)return;const n=this._lastAcceptedDown.get(t.id);if(!this._isSyntheticDup(e,n)){if(this._lastAcceptedDown.set(t.id,{wasTouch:e.wasTouch,x:e.x,y:e.y,t:e.timeStamp,pointerId:e.pointerId}),t.kind==="forge"){this._isLive(J.INTENT_TAP_FORGE)&&this._bus.emit(J.INTENT_TAP_FORGE,{source:this._source(e)});return}if(t.kind==="ascension"){this._hold={pointerId:e.pointerId,area:t,heldMs:0,confirmed:!1,source:this._source(e),inside:!0};return}this._presses.set(e.pointerId,{area:t,state:"pressed"})}}onPointerUp(e){if(this.context===We.DISABLED)return;if(this._hold!==void 0&&this._hold.pointerId===e.pointerId){this._hold=void 0;return}const t=this._presses.get(e.pointerId);if(t===void 0||(this._presses.delete(e.pointerId),t.state==="cancelled")||!this._inside(t.area,e.x,e.y))return;const n=this._source(e);switch(t.area.kind){case"buy":this._isLive(J.INTENT_BUY_GENERATOR)&&this._bus.emit(J.INTENT_BUY_GENERATOR,{tier:t.area.tier,source:n});break;case"buyMode":this._isLive(J.INTENT_SET_BUY_MODE)&&this._bus.emit(J.INTENT_SET_BUY_MODE,{mode:t.area.mode,source:n});break;case"dismissModal":this._isLive(J.INTENT_DISMISS_MODAL)&&(this._bus.emit(J.INTENT_DISMISS_MODAL,{source:n}),this.context===We.MODAL&&this.popContext());break;case"dismissOverlay":this._isLive(J.INTENT_DISMISS_OVERLAY)&&(this._bus.emit(J.INTENT_DISMISS_OVERLAY,{source:n}),this.context===We.SOFT_OVERLAY&&this.popContext());break}}onPointerMove(e){if(this.context===We.DISABLED)return;if(this._hold!==void 0&&this._hold.pointerId===e.pointerId){const n=this._inside(this._hold.area,e.x,e.y);this._hold.inside&&!n?(this._hold.inside=!1,this._hold.heldMs=0,this._bus.emit(J.INTENT_HOLD_PROGRESS,{ratio:0,source:this._hold.source})):!this._hold.inside&&n&&(this._hold.inside=!0);return}const t=this._presses.get(e.pointerId);t===void 0||t.state!=="pressed"||this._inside(t.area,e.x,e.y)||(t.state="cancelled")}onPointerCancel(e){this._hold!==void 0&&this._hold.pointerId===e&&(this._bus.emit(J.INTENT_HOLD_PROGRESS,{ratio:0,source:this._hold.source}),this._hold=void 0),this._presses.delete(e)}onBlur(){this._hold!==void 0&&(this._bus.emit(J.INTENT_HOLD_PROGRESS,{ratio:0,source:this._hold.source}),this._hold=void 0),this._presses.clear()}onKeyDown(e){var n;if(this.context===We.DISABLED)return;const t=this._keymap.find(i=>i.key===e.key);t!==void 0&&((n=e.preventDefault)==null||n.call(e),!e.repeat&&this._isLive(t.intent)&&this._bus.emit(t.intent,{source:"key"}))}tick(e){if(this.context===We.DISABLED||this._hold===void 0||!this._hold.inside)return;this._hold.heldMs+=Math.max(0,e);const t=Math.min(this._hold.heldMs,xc);if(this._hold.heldMs>=xc){this._hold.confirmed||(this._hold.confirmed=!0,this._isLive(J.INTENT_CONFIRM_ASCENSION)&&this._bus.emit(J.INTENT_CONFIRM_ASCENSION,{source:this._hold.source}));return}if(this._isLive(J.INTENT_HOLD_PROGRESS)){const n=t/xc;this._bus.emit(J.INTENT_HOLD_PROGRESS,{ratio:n,source:this._hold.source})}}_isLive(e){return g_[e][this.context]==="live"}_isSyntheticDup(e,t){return t!==void 0&&t.wasTouch&&!e.wasTouch&&e.timeStamp-t.t<m_&&Math.abs(e.x-t.x)<=fh&&Math.abs(e.y-t.y)<=fh&&e.pointerId!==t.pointerId}_resolveHitArea(e,t){for(let n=this._hitAreas.length-1;n>=0;n-=1){const i=this._hitAreas[n];if(i!==void 0&&this._inside(i,e,t))return i}}_inside(e,t,n){const i=e.bounds;return t>=i.x&&t<i.x+i.width&&n>=i.y&&n<i.y+i.height}_source(e){return e.wasTouch===!0?"touch":"pointer"}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const vu="171",x_=0,mh=1,M_=2,Cf=1,Lf=2,di=3,Ai=0,ln=1,Qn=2,Wi=0,Xs=1,Zr=2,_h=3,gh=4,E_=5,ls=100,y_=101,S_=102,T_=103,b_=104,A_=200,w_=201,R_=202,C_=203,xl=204,Ml=205,L_=206,I_=207,N_=208,P_=209,D_=210,U_=211,O_=212,F_=213,B_=214,El=0,yl=1,Sl=2,mr=3,Tl=4,bl=5,Al=6,wl=7,If=0,k_=1,H_=2,Xi=0,z_=1,G_=2,V_=3,Nf=4,W_=5,X_=6,q_=7,vh="attached",Y_="detached",Pf=300,_r=301,gr=302,Rl=303,Cl=304,rc=306,vr=1e3,Gi=1001,Ya=1002,en=1003,Df=1004,Yr=1005,vn=1006,Ha=1007,Mi=1008,wi=1009,Uf=1010,Of=1011,so=1012,xu=1013,xs=1014,Bn=1015,Zo=1016,Mu=1017,Eu=1018,xr=1020,Ff=35902,Bf=1021,kf=1022,Cn=1023,Hf=1024,zf=1025,qs=1026,Mr=1027,yu=1028,Su=1029,Gf=1030,Tu=1031,bu=1033,za=33776,Ga=33777,Va=33778,Wa=33779,Ll=35840,Il=35841,Nl=35842,Pl=35843,Dl=36196,Ul=37492,Ol=37496,Fl=37808,Bl=37809,kl=37810,Hl=37811,zl=37812,Gl=37813,Vl=37814,Wl=37815,Xl=37816,ql=37817,Yl=37818,$l=37819,Kl=37820,jl=37821,Xa=36492,Zl=36494,Jl=36495,Vf=36283,Ql=36284,eu=36285,tu=36286,ro=2300,oo=2301,Mc=2302,xh=2400,Mh=2401,Eh=2402,$_=2500,K_=0,Wf=1,nu=2,j_=3200,Z_=3201,Xf=0,J_=1,Fi="",kt="srgb",nn="srgb-linear",$a="linear",ht="srgb",Ss=7680,yh=519,Q_=512,eg=513,tg=514,qf=515,ng=516,ig=517,sg=518,rg=519,iu=35044,Sh="300 es",Ei=2e3,Ka=2001;class Ar{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Th=1234567;const Jr=Math.PI/180,Er=180/Math.PI;function Hn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Vt[s&255]+Vt[s>>8&255]+Vt[s>>16&255]+Vt[s>>24&255]+"-"+Vt[e&255]+Vt[e>>8&255]+"-"+Vt[e>>16&15|64]+Vt[e>>24&255]+"-"+Vt[t&63|128]+Vt[t>>8&255]+"-"+Vt[t>>16&255]+Vt[t>>24&255]+Vt[n&255]+Vt[n>>8&255]+Vt[n>>16&255]+Vt[n>>24&255]).toLowerCase()}function Ye(s,e,t){return Math.max(e,Math.min(t,s))}function Au(s,e){return(s%e+e)%e}function og(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function ag(s,e,t){return s!==e?(t-s)/(e-s):0}function Qr(s,e,t){return(1-t)*s+t*e}function cg(s,e,t,n){return Qr(s,e,1-Math.exp(-t*n))}function lg(s,e=1){return e-Math.abs(Au(s,e*2)-e)}function ug(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function hg(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function dg(s,e){return s+Math.floor(Math.random()*(e-s+1))}function fg(s,e){return s+Math.random()*(e-s)}function pg(s){return s*(.5-Math.random())}function mg(s){s!==void 0&&(Th=s);let e=Th+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function _g(s){return s*Jr}function gg(s){return s*Er}function vg(s){return(s&s-1)===0&&s!==0}function xg(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Mg(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Eg(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),p=r((n-e)/2),_=o((n-e)/2);switch(i){case"XYX":s.set(a*u,c*h,c*d,a*l);break;case"YZY":s.set(c*d,a*u,c*h,a*l);break;case"ZXZ":s.set(c*h,c*d,a*u,a*l);break;case"XZX":s.set(a*u,c*_,c*p,a*l);break;case"YXY":s.set(c*p,a*u,c*_,a*l);break;case"ZYZ":s.set(c*_,c*p,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function On(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function lt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Yf={DEG2RAD:Jr,RAD2DEG:Er,generateUUID:Hn,clamp:Ye,euclideanModulo:Au,mapLinear:og,inverseLerp:ag,lerp:Qr,damp:cg,pingpong:lg,smoothstep:ug,smootherstep:hg,randInt:dg,randFloat:fg,randFloatSpread:pg,seededRandom:mg,degToRad:_g,radToDeg:gg,isPowerOfTwo:vg,ceilPowerOfTwo:xg,floorPowerOfTwo:Mg,setQuaternionFromProperEuler:Eg,normalize:lt,denormalize:On};class Ke{constructor(e=0,t=0){Ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,t,n,i,r,o,a,c,l){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l)}set(e,t,n,i,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],p=n[5],_=n[8],g=i[0],m=i[3],f=i[6],S=i[1],T=i[4],E=i[7],C=i[2],R=i[5],w=i[8];return r[0]=o*g+a*S+c*C,r[3]=o*m+a*T+c*R,r[6]=o*f+a*E+c*w,r[1]=l*g+u*S+h*C,r[4]=l*m+u*T+h*R,r[7]=l*f+u*E+h*w,r[2]=d*g+p*S+_*C,r[5]=d*m+p*T+_*R,r[8]=d*f+p*E+_*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*r*u+n*a*c+i*r*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,d=a*c-u*r,p=l*r-o*c,_=t*h+n*d+i*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=h*g,e[1]=(i*l-u*n)*g,e[2]=(a*n-i*o)*g,e[3]=d*g,e[4]=(u*t-i*c)*g,e[5]=(i*r-a*t)*g,e[6]=p*g,e[7]=(n*c-l*t)*g,e[8]=(o*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ec.makeScale(e,t)),this}rotate(e){return this.premultiply(Ec.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ec.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ec=new He;function $f(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ao(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function yg(){const s=ao("canvas");return s.style.display="block",s}const bh={};function Gs(s){s in bh||(bh[s]=!0,console.warn(s))}function Sg(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Tg(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function bg(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ah=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wh=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ag(){const s={enabled:!0,workingColorSpace:nn,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ht&&(i.r=bi(i.r),i.g=bi(i.g),i.b=bi(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ht&&(i.r=Ys(i.r),i.g=Ys(i.g),i.b=Ys(i.b))),i},fromWorkingColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},toWorkingColorSpace:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Fi?$a:this.spaces[i].transfer},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[nn]:{primaries:e,whitePoint:n,transfer:$a,toXYZ:Ah,fromXYZ:wh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:kt},outputColorSpaceConfig:{drawingBufferColorSpace:kt}},[kt]:{primaries:e,whitePoint:n,transfer:ht,toXYZ:Ah,fromXYZ:wh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:kt}}}),s}const Qe=Ag();function bi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ys(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ts;class wg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ts===void 0&&(Ts=ao("canvas")),Ts.width=e.width,Ts.height=e.height;const n=Ts.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ts}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ao("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=bi(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(bi(t[n]/255)*255):t[n]=bi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Rg=0;class Kf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Rg++}),this.uuid=Hn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(yc(i[o].image)):r.push(yc(i[o]))}else r=yc(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function yc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?wg.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Cg=0;class Ot extends Ar{constructor(e=Ot.DEFAULT_IMAGE,t=Ot.DEFAULT_MAPPING,n=Gi,i=Gi,r=vn,o=Mi,a=Cn,c=wi,l=Ot.DEFAULT_ANISOTROPY,u=Fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cg++}),this.uuid=Hn(),this.name="",this.source=new Kf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Pf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vr:e.x=e.x-Math.floor(e.x);break;case Gi:e.x=e.x<0?0:1;break;case Ya:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vr:e.y=e.y-Math.floor(e.y);break;case Gi:e.y=e.y<0?0:1;break;case Ya:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=Pf;Ot.DEFAULT_ANISOTROPY=1;class rt{constructor(e=0,t=0,n=0,i=1){rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],p=c[5],_=c[9],g=c[2],m=c[6],f=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+g)<.1&&Math.abs(_+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(l+1)/2,E=(p+1)/2,C=(f+1)/2,R=(u+d)/4,w=(h+g)/4,L=(_+m)/4;return T>E&&T>C?T<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(T),i=R/n,r=w/n):E>C?E<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(E),n=R/i,r=L/i):C<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(C),n=w/r,i=L/r),this.set(n,i,r,t),this}let S=Math.sqrt((m-_)*(m-_)+(h-g)*(h-g)+(d-u)*(d-u));return Math.abs(S)<.001&&(S=1),this.x=(m-_)/S,this.y=(h-g)/S,this.z=(d-u)/S,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this.w=Ye(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this.w=Ye(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Lg extends Ar{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ot(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Kf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ms extends Lg{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class jf extends Ot{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=en,this.minFilter=en,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ig extends Ot{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=en,this.minFilter=en,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ji{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3];const d=r[o+0],p=r[o+1],_=r[o+2],g=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=_,e[t+3]=g;return}if(h!==g||c!==d||l!==p||u!==_){let m=1-a;const f=c*d+l*p+u*_+h*g,S=f>=0?1:-1,T=1-f*f;if(T>Number.EPSILON){const C=Math.sqrt(T),R=Math.atan2(C,f*S);m=Math.sin(m*R)/C,a=Math.sin(a*R)/C}const E=a*S;if(c=c*m+d*E,l=l*m+p*E,u=u*m+_*E,h=h*m+g*E,m===1-a){const C=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=C,l*=C,u*=C,h*=C}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=r[o],d=r[o+1],p=r[o+2],_=r[o+3];return e[t]=a*_+u*h+c*p-l*d,e[t+1]=c*_+u*d+l*h-a*p,e[t+2]=l*_+u*p+a*d-c*h,e[t+3]=u*_-a*h-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),h=a(r/2),d=c(n/2),p=c(i/2),_=c(r/2);switch(o){case"XYZ":this._x=d*u*h+l*p*_,this._y=l*p*h-d*u*_,this._z=l*u*_+d*p*h,this._w=l*u*h-d*p*_;break;case"YXZ":this._x=d*u*h+l*p*_,this._y=l*p*h-d*u*_,this._z=l*u*_-d*p*h,this._w=l*u*h+d*p*_;break;case"ZXY":this._x=d*u*h-l*p*_,this._y=l*p*h+d*u*_,this._z=l*u*_+d*p*h,this._w=l*u*h-d*p*_;break;case"ZYX":this._x=d*u*h-l*p*_,this._y=l*p*h+d*u*_,this._z=l*u*_-d*p*h,this._w=l*u*h+d*p*_;break;case"YZX":this._x=d*u*h+l*p*_,this._y=l*p*h+d*u*_,this._z=l*u*_-d*p*h,this._w=l*u*h-d*p*_;break;case"XZY":this._x=d*u*h-l*p*_,this._y=l*p*h-d*u*_,this._z=l*u*_+d*p*h,this._w=l*u*h+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-c)*p,this._y=(r-l)*p,this._z=(o-i)*p}else if(n>a&&n>h){const p=2*Math.sqrt(1+n-a-h);this._w=(u-c)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(r+l)/p}else if(a>h){const p=2*Math.sqrt(1+a-n-h);this._w=(r-l)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+h-n-a);this._w=(o-i)/p,this._x=(r+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+i*l-r*c,this._y=i*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-i*a,this._w=o*u-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Rh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Rh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),u=2*(a*t-r*i),h=2*(r*n-o*t);return this.x=t+c*l+o*h-a*u,this.y=n+c*u+a*l-r*h,this.z=i+c*h+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Sc.copy(this).projectOnVector(e),this.sub(Sc)}reflect(e){return this.sub(Sc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Sc=new P,Rh=new ji;class xn{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Nn):Nn.fromBufferAttribute(r,o),Nn.applyMatrix4(e.matrixWorld),this.expandByPoint(Nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),oa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),oa.copy(n.boundingBox)),oa.applyMatrix4(e.matrixWorld),this.union(oa)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Nn),Nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Dr),aa.subVectors(this.max,Dr),bs.subVectors(e.a,Dr),As.subVectors(e.b,Dr),ws.subVectors(e.c,Dr),Ri.subVectors(As,bs),Ci.subVectors(ws,As),Qi.subVectors(bs,ws);let t=[0,-Ri.z,Ri.y,0,-Ci.z,Ci.y,0,-Qi.z,Qi.y,Ri.z,0,-Ri.x,Ci.z,0,-Ci.x,Qi.z,0,-Qi.x,-Ri.y,Ri.x,0,-Ci.y,Ci.x,0,-Qi.y,Qi.x,0];return!Tc(t,bs,As,ws,aa)||(t=[1,0,0,0,1,0,0,0,1],!Tc(t,bs,As,ws,aa))?!1:(ca.crossVectors(Ri,Ci),t=[ca.x,ca.y,ca.z],Tc(t,bs,As,ws,aa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const oi=[new P,new P,new P,new P,new P,new P,new P,new P],Nn=new P,oa=new xn,bs=new P,As=new P,ws=new P,Ri=new P,Ci=new P,Qi=new P,Dr=new P,aa=new P,ca=new P,es=new P;function Tc(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){es.fromArray(s,r);const a=i.x*Math.abs(es.x)+i.y*Math.abs(es.y)+i.z*Math.abs(es.z),c=e.dot(es),l=t.dot(es),u=n.dot(es);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Ng=new xn,Ur=new P,bc=new P;class ni{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Ng.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ur.subVectors(e,this.center);const t=Ur.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ur,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ur.copy(e.center).add(bc)),this.expandByPoint(Ur.copy(e.center).sub(bc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ai=new P,Ac=new P,la=new P,Li=new P,wc=new P,ua=new P,Rc=new P;class oc{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ai.copy(this.origin).addScaledVector(this.direction,t),ai.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ac.copy(e).add(t).multiplyScalar(.5),la.copy(t).sub(e).normalize(),Li.copy(this.origin).sub(Ac);const r=e.distanceTo(t)*.5,o=-this.direction.dot(la),a=Li.dot(this.direction),c=-Li.dot(la),l=Li.lengthSq(),u=Math.abs(1-o*o);let h,d,p,_;if(u>0)if(h=o*c-a,d=o*a-c,_=r*u,h>=0)if(d>=-_)if(d<=_){const g=1/u;h*=g,d*=g,p=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*c)+l;else d<=-_?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-c),r),p=-h*h+d*(d+2*c)+l):d<=_?(h=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-c),r),p=-h*h+d*(d+2*c)+l);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Ac).addScaledVector(la,d),p}intersectSphere(e,t){ai.subVectors(e.center,this.origin);const n=ai.dot(this.direction),i=ai.dot(ai)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ai)!==null}intersectTriangle(e,t,n,i,r){wc.subVectors(t,e),ua.subVectors(n,e),Rc.crossVectors(wc,ua);let o=this.direction.dot(Rc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Li.subVectors(this.origin,e);const c=a*this.direction.dot(ua.crossVectors(Li,ua));if(c<0)return null;const l=a*this.direction.dot(wc.cross(Li));if(l<0||c+l>o)return null;const u=-a*Li.dot(Rc);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ze{constructor(e,t,n,i,r,o,a,c,l,u,h,d,p,_,g,m){ze.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l,u,h,d,p,_,g,m)}set(e,t,n,i,r,o,a,c,l,u,h,d,p,_,g,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=_,f[11]=g,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ze().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Rs.setFromMatrixColumn(e,0).length(),r=1/Rs.setFromMatrixColumn(e,1).length(),o=1/Rs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,p=o*h,_=a*u,g=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=p+_*l,t[5]=d-g*l,t[9]=-a*c,t[2]=g-d*l,t[6]=_+p*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*u,p=c*h,_=l*u,g=l*h;t[0]=d+g*a,t[4]=_*a-p,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-_,t[6]=g+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*u,p=c*h,_=l*u,g=l*h;t[0]=d-g*a,t[4]=-o*h,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*u,t[9]=g-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*u,p=o*h,_=a*u,g=a*h;t[0]=c*u,t[4]=_*l-p,t[8]=d*l+g,t[1]=c*h,t[5]=g*l+d,t[9]=p*l-_,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,p=o*l,_=a*c,g=a*l;t[0]=c*u,t[4]=g-d*h,t[8]=_*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=p*h+_,t[10]=d-g*h}else if(e.order==="XZY"){const d=o*c,p=o*l,_=a*c,g=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+g,t[5]=o*u,t[9]=p*h-_,t[2]=_*h-p,t[6]=a*u,t[10]=g*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Pg,e,Dg)}lookAt(e,t,n){const i=this.elements;return pn.subVectors(e,t),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),Ii.crossVectors(n,pn),Ii.lengthSq()===0&&(Math.abs(n.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),Ii.crossVectors(n,pn)),Ii.normalize(),ha.crossVectors(pn,Ii),i[0]=Ii.x,i[4]=ha.x,i[8]=pn.x,i[1]=Ii.y,i[5]=ha.y,i[9]=pn.y,i[2]=Ii.z,i[6]=ha.z,i[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],p=n[13],_=n[2],g=n[6],m=n[10],f=n[14],S=n[3],T=n[7],E=n[11],C=n[15],R=i[0],w=i[4],L=i[8],b=i[12],M=i[1],I=i[5],X=i[9],z=i[13],Q=i[2],ee=i[6],K=i[10],ie=i[14],V=i[3],he=i[7],ge=i[11],Te=i[15];return r[0]=o*R+a*M+c*Q+l*V,r[4]=o*w+a*I+c*ee+l*he,r[8]=o*L+a*X+c*K+l*ge,r[12]=o*b+a*z+c*ie+l*Te,r[1]=u*R+h*M+d*Q+p*V,r[5]=u*w+h*I+d*ee+p*he,r[9]=u*L+h*X+d*K+p*ge,r[13]=u*b+h*z+d*ie+p*Te,r[2]=_*R+g*M+m*Q+f*V,r[6]=_*w+g*I+m*ee+f*he,r[10]=_*L+g*X+m*K+f*ge,r[14]=_*b+g*z+m*ie+f*Te,r[3]=S*R+T*M+E*Q+C*V,r[7]=S*w+T*I+E*ee+C*he,r[11]=S*L+T*X+E*K+C*ge,r[15]=S*b+T*z+E*ie+C*Te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],p=e[14],_=e[3],g=e[7],m=e[11],f=e[15];return _*(+r*c*h-i*l*h-r*a*d+n*l*d+i*a*p-n*c*p)+g*(+t*c*p-t*l*d+r*o*d-i*o*p+i*l*u-r*c*u)+m*(+t*l*h-t*a*p-r*o*h+n*o*p+r*a*u-n*l*u)+f*(-i*a*u-t*c*h+t*a*d+i*o*h-n*o*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],p=e[11],_=e[12],g=e[13],m=e[14],f=e[15],S=h*m*l-g*d*l+g*c*p-a*m*p-h*c*f+a*d*f,T=_*d*l-u*m*l-_*c*p+o*m*p+u*c*f-o*d*f,E=u*g*l-_*h*l+_*a*p-o*g*p-u*a*f+o*h*f,C=_*h*c-u*g*c-_*a*d+o*g*d+u*a*m-o*h*m,R=t*S+n*T+i*E+r*C;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/R;return e[0]=S*w,e[1]=(g*d*r-h*m*r-g*i*p+n*m*p+h*i*f-n*d*f)*w,e[2]=(a*m*r-g*c*r+g*i*l-n*m*l-a*i*f+n*c*f)*w,e[3]=(h*c*r-a*d*r-h*i*l+n*d*l+a*i*p-n*c*p)*w,e[4]=T*w,e[5]=(u*m*r-_*d*r+_*i*p-t*m*p-u*i*f+t*d*f)*w,e[6]=(_*c*r-o*m*r-_*i*l+t*m*l+o*i*f-t*c*f)*w,e[7]=(o*d*r-u*c*r+u*i*l-t*d*l-o*i*p+t*c*p)*w,e[8]=E*w,e[9]=(_*h*r-u*g*r-_*n*p+t*g*p+u*n*f-t*h*f)*w,e[10]=(o*g*r-_*a*r+_*n*l-t*g*l-o*n*f+t*a*f)*w,e[11]=(u*a*r-o*h*r-u*n*l+t*h*l+o*n*p-t*a*p)*w,e[12]=C*w,e[13]=(u*g*i-_*h*i+_*n*d-t*g*d-u*n*m+t*h*m)*w,e[14]=(_*a*i-o*g*i-_*n*c+t*g*c+o*n*m-t*a*m)*w,e[15]=(o*h*i-u*a*i+u*n*c-t*h*c-o*n*d+t*a*d)*w,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*o,0,l*c-i*a,u*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,h=a+a,d=r*l,p=r*u,_=r*h,g=o*u,m=o*h,f=a*h,S=c*l,T=c*u,E=c*h,C=n.x,R=n.y,w=n.z;return i[0]=(1-(g+f))*C,i[1]=(p+E)*C,i[2]=(_-T)*C,i[3]=0,i[4]=(p-E)*R,i[5]=(1-(d+f))*R,i[6]=(m+S)*R,i[7]=0,i[8]=(_+T)*w,i[9]=(m-S)*w,i[10]=(1-(d+g))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Rs.set(i[0],i[1],i[2]).length();const o=Rs.set(i[4],i[5],i[6]).length(),a=Rs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Pn.copy(this);const l=1/r,u=1/o,h=1/a;return Pn.elements[0]*=l,Pn.elements[1]*=l,Pn.elements[2]*=l,Pn.elements[4]*=u,Pn.elements[5]*=u,Pn.elements[6]*=u,Pn.elements[8]*=h,Pn.elements[9]*=h,Pn.elements[10]*=h,t.setFromRotationMatrix(Pn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=Ei){const c=this.elements,l=2*r/(t-e),u=2*r/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i);let p,_;if(a===Ei)p=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Ka)p=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Ei){const c=this.elements,l=1/(t-e),u=1/(n-i),h=1/(o-r),d=(t+e)*l,p=(n+i)*u;let _,g;if(a===Ei)_=(o+r)*h,g=-2*h;else if(a===Ka)_=r*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=g,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Rs=new P,Pn=new ze,Pg=new P(0,0,0),Dg=new P(1,1,1),Ii=new P,ha=new P,pn=new P,Ch=new ze,Lh=new ji;class ti{constructor(e=0,t=0,n=0,i=ti.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],u=i[9],h=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ye(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ye(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ch.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ch,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Lh.setFromEuler(this),this.setFromQuaternion(Lh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ti.DEFAULT_ORDER="XYZ";class Zf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ug=0;const Ih=new P,Cs=new ji,ci=new ze,da=new P,Or=new P,Og=new P,Fg=new ji,Nh=new P(1,0,0),Ph=new P(0,1,0),Dh=new P(0,0,1),Uh={type:"added"},Bg={type:"removed"},Ls={type:"childadded",child:null},Cc={type:"childremoved",child:null};class Et extends Ar{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ug++}),this.uuid=Hn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Et.DEFAULT_UP.clone();const e=new P,t=new ti,n=new ji,i=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ze},normalMatrix:{value:new He}}),this.matrix=new ze,this.matrixWorld=new ze,this.matrixAutoUpdate=Et.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Cs.setFromAxisAngle(e,t),this.quaternion.multiply(Cs),this}rotateOnWorldAxis(e,t){return Cs.setFromAxisAngle(e,t),this.quaternion.premultiply(Cs),this}rotateX(e){return this.rotateOnAxis(Nh,e)}rotateY(e){return this.rotateOnAxis(Ph,e)}rotateZ(e){return this.rotateOnAxis(Dh,e)}translateOnAxis(e,t){return Ih.copy(e).applyQuaternion(this.quaternion),this.position.add(Ih.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Nh,e)}translateY(e){return this.translateOnAxis(Ph,e)}translateZ(e){return this.translateOnAxis(Dh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?da.copy(e):da.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(Or,da,this.up):ci.lookAt(da,Or,this.up),this.quaternion.setFromRotationMatrix(ci),i&&(ci.extractRotation(i.matrixWorld),Cs.setFromRotationMatrix(ci),this.quaternion.premultiply(Cs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Uh),Ls.child=e,this.dispatchEvent(Ls),Ls.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Bg),Cc.child=e,this.dispatchEvent(Cc),Cc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(ci),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Uh),Ls.child=e,this.dispatchEvent(Ls),Ls.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,e,Og),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,Fg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Et.DEFAULT_UP=new P(0,1,0);Et.DEFAULT_MATRIX_AUTO_UPDATE=!0;Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Dn=new P,li=new P,Lc=new P,ui=new P,Is=new P,Ns=new P,Oh=new P,Ic=new P,Nc=new P,Pc=new P,Dc=new rt,Uc=new rt,Oc=new rt;class Fn{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Dn.subVectors(e,t),i.cross(Dn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Dn.subVectors(i,t),li.subVectors(n,t),Lc.subVectors(e,t);const o=Dn.dot(Dn),a=Dn.dot(li),c=Dn.dot(Lc),l=li.dot(li),u=li.dot(Lc),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,p=(l*c-a*u)*d,_=(o*u-a*c)*d;return r.set(1-p-_,_,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ui)===null?!1:ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,ui)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ui.x),c.addScaledVector(o,ui.y),c.addScaledVector(a,ui.z),c)}static getInterpolatedAttribute(e,t,n,i,r,o){return Dc.setScalar(0),Uc.setScalar(0),Oc.setScalar(0),Dc.fromBufferAttribute(e,t),Uc.fromBufferAttribute(e,n),Oc.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Dc,r.x),o.addScaledVector(Uc,r.y),o.addScaledVector(Oc,r.z),o}static isFrontFacing(e,t,n,i){return Dn.subVectors(n,t),li.subVectors(e,t),Dn.cross(li).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dn.subVectors(this.c,this.b),li.subVectors(this.a,this.b),Dn.cross(li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Fn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Fn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;Is.subVectors(i,n),Ns.subVectors(r,n),Ic.subVectors(e,n);const c=Is.dot(Ic),l=Ns.dot(Ic);if(c<=0&&l<=0)return t.copy(n);Nc.subVectors(e,i);const u=Is.dot(Nc),h=Ns.dot(Nc);if(u>=0&&h<=u)return t.copy(i);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(Is,o);Pc.subVectors(e,r);const p=Is.dot(Pc),_=Ns.dot(Pc);if(_>=0&&p<=_)return t.copy(r);const g=p*l-c*_;if(g<=0&&l>=0&&_<=0)return a=l/(l-_),t.copy(n).addScaledVector(Ns,a);const m=u*_-p*h;if(m<=0&&h-u>=0&&p-_>=0)return Oh.subVectors(r,i),a=(h-u)/(h-u+(p-_)),t.copy(i).addScaledVector(Oh,a);const f=1/(m+g+d);return o=g*f,a=d*f,t.copy(n).addScaledVector(Is,o).addScaledVector(Ns,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Jf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ni={h:0,s:0,l:0},fa={h:0,s:0,l:0};function Fc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ie{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qe.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Qe.workingColorSpace){if(e=Au(e,1),t=Ye(t,0,1),n=Ye(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Fc(o,r,e+1/3),this.g=Fc(o,r,e),this.b=Fc(o,r,e-1/3)}return Qe.toWorkingColorSpace(this,i),this}setStyle(e,t=kt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=kt){const n=Jf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bi(e.r),this.g=bi(e.g),this.b=bi(e.b),this}copyLinearToSRGB(e){return this.r=Ys(e.r),this.g=Ys(e.g),this.b=Ys(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kt){return Qe.fromWorkingColorSpace(Wt.copy(this),e),Math.round(Ye(Wt.r*255,0,255))*65536+Math.round(Ye(Wt.g*255,0,255))*256+Math.round(Ye(Wt.b*255,0,255))}getHexString(e=kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.fromWorkingColorSpace(Wt.copy(this),t);const n=Wt.r,i=Wt.g,r=Wt.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(i-r)/h+(i<r?6:0);break;case i:c=(r-n)/h+2;break;case r:c=(n-i)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(Wt.copy(this),t),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=kt){Qe.fromWorkingColorSpace(Wt.copy(this),e);const t=Wt.r,n=Wt.g,i=Wt.b;return e!==kt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ni),this.setHSL(Ni.h+e,Ni.s+t,Ni.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ni),e.getHSL(fa);const n=Qr(Ni.h,fa.h,t),i=Qr(Ni.s,fa.s,t),r=Qr(Ni.l,fa.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wt=new Ie;Ie.NAMES=Jf;let kg=0;class ei extends Ar{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kg++}),this.uuid=Hn(),this.name="",this.type="Material",this.blending=Xs,this.side=Ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xl,this.blendDst=Ml,this.blendEquation=ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ss,this.stencilZFail=Ss,this.stencilZPass=Ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Xs&&(n.blending=this.blending),this.side!==Ai&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==xl&&(n.blendSrc=this.blendSrc),this.blendDst!==Ml&&(n.blendDst=this.blendDst),this.blendEquation!==ls&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==mr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ss&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ss&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ss&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class yi extends ei{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.combine=If,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ct=new P,pa=new Ke;class zt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=iu,this.updateRanges=[],this.gpuType=Bn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)pa.fromBufferAttribute(this,t),pa.applyMatrix3(e),this.setXY(t,pa.x,pa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=On(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=lt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=On(t,this.array)),t}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=On(t,this.array)),t}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=On(t,this.array)),t}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=On(t,this.array)),t}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),i=lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),i=lt(i,this.array),r=lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==iu&&(e.usage=this.usage),e}}class Qf extends zt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ep extends zt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class tn extends zt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Hg=0;const Tn=new ze,Bc=new Et,Ps=new P,mn=new xn,Fr=new xn,Ut=new P;class un extends Ar{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hg++}),this.uuid=Hn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($f(e)?ep:Qf)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new He().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,t,n){return Tn.makeTranslation(e,t,n),this.applyMatrix4(Tn),this}scale(e,t,n){return Tn.makeScale(e,t,n),this.applyMatrix4(Tn),this}lookAt(e){return Bc.lookAt(e),Bc.updateMatrix(),this.applyMatrix4(Bc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ps).negate(),this.translate(Ps.x,Ps.y,Ps.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new tn(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ni);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Fr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ut.addVectors(mn.min,Fr.min),mn.expandByPoint(Ut),Ut.addVectors(mn.max,Fr.max),mn.expandByPoint(Ut)):(mn.expandByPoint(Fr.min),mn.expandByPoint(Fr.max))}mn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Ut.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Ut));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Ut.fromBufferAttribute(a,l),c&&(Ps.fromBufferAttribute(e,l),Ut.add(Ps)),i=Math.max(i,n.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let L=0;L<n.count;L++)a[L]=new P,c[L]=new P;const l=new P,u=new P,h=new P,d=new Ke,p=new Ke,_=new Ke,g=new P,m=new P;function f(L,b,M){l.fromBufferAttribute(n,L),u.fromBufferAttribute(n,b),h.fromBufferAttribute(n,M),d.fromBufferAttribute(r,L),p.fromBufferAttribute(r,b),_.fromBufferAttribute(r,M),u.sub(l),h.sub(l),p.sub(d),_.sub(d);const I=1/(p.x*_.y-_.x*p.y);isFinite(I)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(h,-p.y).multiplyScalar(I),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(I),a[L].add(g),a[b].add(g),a[M].add(g),c[L].add(m),c[b].add(m),c[M].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let L=0,b=S.length;L<b;++L){const M=S[L],I=M.start,X=M.count;for(let z=I,Q=I+X;z<Q;z+=3)f(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const T=new P,E=new P,C=new P,R=new P;function w(L){C.fromBufferAttribute(i,L),R.copy(C);const b=a[L];T.copy(b),T.sub(C.multiplyScalar(C.dot(b))).normalize(),E.crossVectors(R,b);const I=E.dot(c[L])<0?-1:1;o.setXYZW(L,T.x,T.y,T.z,I)}for(let L=0,b=S.length;L<b;++L){const M=S[L],I=M.start,X=M.count;for(let z=I,Q=I+X;z<Q;z+=3)w(e.getX(z+0)),w(e.getX(z+1)),w(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new zt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new P,r=new P,o=new P,a=new P,c=new P,l=new P,u=new P,h=new P;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,_),r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ut.fromBufferAttribute(e,t),Ut.normalize(),e.setXYZ(t,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let p=0,_=0;for(let g=0,m=c.length;g<m;g++){a.isInterleavedBufferAttribute?p=c[g]*a.data.stride+a.offset:p=c[g]*u;for(let f=0;f<u;f++)d[_++]=l[p++]}return new zt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new un,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],p=e(d,n);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const p=l[h];u.push(p.toJSON(e.data))}u.length>0&&(i[c]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fh=new ze,ts=new oc,ma=new ni,Bh=new P,_a=new P,ga=new P,va=new P,kc=new P,xa=new P,kh=new P,Ma=new P;class It extends Et{constructor(e=new un,t=new yi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){xa.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(kc.fromBufferAttribute(h,e),o?xa.addScaledVector(kc,u):xa.addScaledVector(kc.sub(t),u))}t.add(xa)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ma.copy(n.boundingSphere),ma.applyMatrix4(r),ts.copy(e.ray).recast(e.near),!(ma.containsPoint(ts.origin)===!1&&(ts.intersectSphere(ma,Bh)===null||ts.origin.distanceToSquared(Bh)>(e.far-e.near)**2))&&(Fh.copy(r).invert(),ts.copy(e.ray).applyMatrix4(Fh),!(n.boundingBox!==null&&ts.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ts)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){const m=d[_],f=o[m.materialIndex],S=Math.max(m.start,p.start),T=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let E=S,C=T;E<C;E+=3){const R=a.getX(E),w=a.getX(E+1),L=a.getX(E+2);i=Ea(this,f,e,n,l,u,h,R,w,L),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let m=_,f=g;m<f;m+=3){const S=a.getX(m),T=a.getX(m+1),E=a.getX(m+2);i=Ea(this,o,e,n,l,u,h,S,T,E),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){const m=d[_],f=o[m.materialIndex],S=Math.max(m.start,p.start),T=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let E=S,C=T;E<C;E+=3){const R=E,w=E+1,L=E+2;i=Ea(this,f,e,n,l,u,h,R,w,L),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,p.start),g=Math.min(c.count,p.start+p.count);for(let m=_,f=g;m<f;m+=3){const S=m,T=m+1,E=m+2;i=Ea(this,o,e,n,l,u,h,S,T,E),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function zg(s,e,t,n,i,r,o,a){let c;if(e.side===ln?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===Ai,a),c===null)return null;Ma.copy(a),Ma.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(Ma);return l<t.near||l>t.far?null:{distance:l,point:Ma.clone(),object:s}}function Ea(s,e,t,n,i,r,o,a,c,l){s.getVertexPosition(a,_a),s.getVertexPosition(c,ga),s.getVertexPosition(l,va);const u=zg(s,e,t,n,_a,ga,va,kh);if(u){const h=new P;Fn.getBarycoord(kh,_a,ga,va,h),i&&(u.uv=Fn.getInterpolatedAttribute(i,a,c,l,h,new Ke)),r&&(u.uv1=Fn.getInterpolatedAttribute(r,a,c,l,h,new Ke)),o&&(u.normal=Fn.getInterpolatedAttribute(o,a,c,l,h,new P),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new P,materialIndex:0};Fn.getNormal(_a,ga,va,d.normal),u.face=d,u.barycoord=h}return u}class Jo extends un{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,p=0;_("z","y","x",-1,-1,n,t,e,o,r,0),_("z","y","x",1,-1,n,t,-e,o,r,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,r,4),_("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new tn(l,3)),this.setAttribute("normal",new tn(u,3)),this.setAttribute("uv",new tn(h,2));function _(g,m,f,S,T,E,C,R,w,L,b){const M=E/w,I=C/L,X=E/2,z=C/2,Q=R/2,ee=w+1,K=L+1;let ie=0,V=0;const he=new P;for(let ge=0;ge<K;ge++){const Te=ge*I-z;for(let Xe=0;Xe<ee;Xe++){const pt=Xe*M-X;he[g]=pt*S,he[m]=Te*T,he[f]=Q,l.push(he.x,he.y,he.z),he[g]=0,he[m]=0,he[f]=R>0?1:-1,u.push(he.x,he.y,he.z),h.push(Xe/w),h.push(1-ge/L),ie+=1}}for(let ge=0;ge<L;ge++)for(let Te=0;Te<w;Te++){const Xe=d+Te+ee*ge,pt=d+Te+ee*(ge+1),$=d+(Te+1)+ee*(ge+1),ae=d+(Te+1)+ee*ge;c.push(Xe,pt,ae),c.push(pt,$,ae),V+=6}a.addGroup(p,V,b),p+=V,d+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function yr(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function jt(s){const e={};for(let t=0;t<s.length;t++){const n=yr(s[t]);for(const i in n)e[i]=n[i]}return e}function Gg(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function tp(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const Vg={clone:yr,merge:jt};var Wg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $i extends ei{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wg,this.fragmentShader=Xg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=yr(e.uniforms),this.uniformsGroups=Gg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class np extends Et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ze,this.projectionMatrix=new ze,this.projectionMatrixInverse=new ze,this.coordinateSystem=Ei}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Pi=new P,Hh=new Ke,zh=new Ke;class Qt extends np{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Er*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Jr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Er*2*Math.atan(Math.tan(Jr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Pi.x,Pi.y).multiplyScalar(-e/Pi.z),Pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Pi.x,Pi.y).multiplyScalar(-e/Pi.z)}getViewSize(e,t){return this.getViewBounds(e,Hh,zh),t.subVectors(zh,Hh)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Jr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ds=-90,Us=1;class qg extends Et{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Qt(Ds,Us,e,t);i.layers=this.layers,this.add(i);const r=new Qt(Ds,Us,e,t);r.layers=this.layers,this.add(r);const o=new Qt(Ds,Us,e,t);o.layers=this.layers,this.add(o);const a=new Qt(Ds,Us,e,t);a.layers=this.layers,this.add(a);const c=new Qt(Ds,Us,e,t);c.layers=this.layers,this.add(c);const l=new Qt(Ds,Us,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===Ei)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ka)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,p),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class ip extends Ot{constructor(e,t,n,i,r,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:_r,super(e,t,n,i,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Yg extends Ms{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new ip(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:vn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Jo(5,5,5),r=new $i({name:"CubemapFromEquirect",uniforms:yr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ln,blending:Wi});r.uniforms.tEquirect.value=t;const o=new It(i,r),a=t.minFilter;return t.minFilter===Mi&&(t.minFilter=vn),new qg(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}class wu{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ie(e),this.near=t,this.far=n}clone(){return new wu(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class $g extends Et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ti,this.environmentIntensity=1,this.environmentRotation=new ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Kg{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=iu,this.updateRanges=[],this.version=0,this.uuid=Hn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Kt=new P;class Ru{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=On(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=lt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=On(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=On(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=On(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=On(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),i=lt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),i=lt(i,this.array),r=lt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new zt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ru(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Gh=new P,Vh=new rt,Wh=new rt,jg=new P,Xh=new ze,ya=new P,Hc=new ni,qh=new ze,zc=new oc;class Zg extends It{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=vh,this.bindMatrix=new ze,this.bindMatrixInverse=new ze,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new xn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ya),this.boundingBox.expandByPoint(ya)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ni),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ya),this.boundingSphere.expandByPoint(ya)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Hc.copy(this.boundingSphere),Hc.applyMatrix4(i),e.ray.intersectsSphere(Hc)!==!1&&(qh.copy(i).invert(),zc.copy(e.ray).applyMatrix4(qh),!(this.boundingBox!==null&&zc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,zc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new rt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===vh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Y_?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Vh.fromBufferAttribute(i.attributes.skinIndex,e),Wh.fromBufferAttribute(i.attributes.skinWeight,e),Gh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Wh.getComponent(r);if(o!==0){const a=Vh.getComponent(r);Xh.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(jg.copy(Gh).applyMatrix4(Xh),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class sp extends Et{constructor(){super(),this.isBone=!0,this.type="Bone"}}class rp extends Ot{constructor(e=null,t=1,n=1,i,r,o,a,c,l=en,u=en,h,d){super(null,o,a,c,l,u,i,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Yh=new ze,Jg=new ze;class Cu{constructor(e=[],t=[]){this.uuid=Hn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ze)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ze;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:Jg;Yh.multiplyMatrices(a,t[r]),Yh.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Cu(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new rp(t,e,e,Cn,Bn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new sp),this.bones.push(o),this.boneInverses.push(new ze().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class su extends zt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Os=new ze,$h=new ze,Sa=[],Kh=new xn,Qg=new ze,Br=new It,kr=new ni;class e0 extends It{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new su(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Qg)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new xn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Os),Kh.copy(e.boundingBox).applyMatrix4(Os),this.boundingBox.union(Kh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ni),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Os),kr.copy(e.boundingSphere).applyMatrix4(Os),this.boundingSphere.union(kr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Br.geometry=this.geometry,Br.material=this.material,Br.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),kr.copy(this.boundingSphere),kr.applyMatrix4(n),e.ray.intersectsSphere(kr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Os),$h.multiplyMatrices(n,Os),Br.matrixWorld=$h,Br.raycast(e,Sa);for(let o=0,a=Sa.length;o<a;o++){const c=Sa[o];c.instanceId=r,c.object=this,t.push(c)}Sa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new su(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new rp(new Float32Array(i*this.count),i,this.count,yu,Bn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=i*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const Gc=new P,t0=new P,n0=new He;class os{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Gc.subVectors(n,t).cross(t0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Gc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||n0.getNormalMatrix(e),i=this.coplanarPoint(Gc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ns=new ni,Ta=new P;class Lu{constructor(e=new os,t=new os,n=new os,i=new os,r=new os,o=new os){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ei){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],u=i[5],h=i[6],d=i[7],p=i[8],_=i[9],g=i[10],m=i[11],f=i[12],S=i[13],T=i[14],E=i[15];if(n[0].setComponents(c-r,d-l,m-p,E-f).normalize(),n[1].setComponents(c+r,d+l,m+p,E+f).normalize(),n[2].setComponents(c+o,d+u,m+_,E+S).normalize(),n[3].setComponents(c-o,d-u,m-_,E-S).normalize(),n[4].setComponents(c-a,d-h,m-g,E-T).normalize(),t===Ei)n[5].setComponents(c+a,d+h,m+g,E+T).normalize();else if(t===Ka)n[5].setComponents(a,h,g,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ns.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ns.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ns)}intersectsSprite(e){return ns.center.set(0,0,0),ns.radius=.7071067811865476,ns.applyMatrix4(e.matrixWorld),this.intersectsSphere(ns)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ta.x=i.normal.x>0?e.max.x:e.min.x,Ta.y=i.normal.y>0?e.max.y:e.min.y,Ta.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ta)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class op extends ei{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ja=new P,Za=new P,jh=new ze,Hr=new oc,ba=new ni,Vc=new P,Zh=new P;class Iu extends Et{constructor(e=new un,t=new op){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)ja.fromBufferAttribute(t,i-1),Za.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ja.distanceTo(Za);e.setAttribute("lineDistance",new tn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ba.copy(n.boundingSphere),ba.applyMatrix4(i),ba.radius+=r,e.ray.intersectsSphere(ba)===!1)return;jh.copy(i).invert(),Hr.copy(e.ray).applyMatrix4(jh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const p=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let g=p,m=_-1;g<m;g+=l){const f=u.getX(g),S=u.getX(g+1),T=Aa(this,e,Hr,c,f,S);T&&t.push(T)}if(this.isLineLoop){const g=u.getX(_-1),m=u.getX(p),f=Aa(this,e,Hr,c,g,m);f&&t.push(f)}}else{const p=Math.max(0,o.start),_=Math.min(d.count,o.start+o.count);for(let g=p,m=_-1;g<m;g+=l){const f=Aa(this,e,Hr,c,g,g+1);f&&t.push(f)}if(this.isLineLoop){const g=Aa(this,e,Hr,c,_-1,p);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Aa(s,e,t,n,i,r){const o=s.geometry.attributes.position;if(ja.fromBufferAttribute(o,i),Za.fromBufferAttribute(o,r),t.distanceSqToSegment(ja,Za,Vc,Zh)>n)return;Vc.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Vc);if(!(c<e.near||c>e.far))return{distance:c,point:Zh.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const Jh=new P,Qh=new P;class i0 extends Iu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Jh.fromBufferAttribute(t,i),Qh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Jh.distanceTo(Qh);e.setAttribute("lineDistance",new tn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class s0 extends Iu{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Ja extends ei{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ed=new ze,ru=new oc,wa=new ni,Ra=new P;class ou extends Et{constructor(e=new un,t=new Ja){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wa.copy(n.boundingSphere),wa.applyMatrix4(i),wa.radius+=r,e.ray.intersectsSphere(wa)===!1)return;ed.copy(i).invert(),ru.copy(e.ray).applyMatrix4(ed);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let _=d,g=p;_<g;_++){const m=l.getX(_);Ra.fromBufferAttribute(h,m),td(Ra,m,c,i,e,t,this)}}else{const d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let _=d,g=p;_<g;_++)Ra.fromBufferAttribute(h,_),td(Ra,_,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function td(s,e,t,n,i,r,o){const a=ru.distanceSqToPoint(s);if(a<t){const c=new P;ru.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class kn extends Et{constructor(){super(),this.isGroup=!0,this.type="Group"}}class ap extends Ot{constructor(e,t,n,i,r,o,a,c,l,u=qs){if(u!==qs&&u!==Mr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===qs&&(n=xs),n===void 0&&u===Mr&&(n=xr),super(null,i,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:en,this.minFilter=c!==void 0?c:en,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ac extends un{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],o=[];a(i),l(n),u(),this.setAttribute("position",new tn(r,3)),this.setAttribute("normal",new tn(r.slice(),3)),this.setAttribute("uv",new tn(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(S){const T=new P,E=new P,C=new P;for(let R=0;R<t.length;R+=3)p(t[R+0],T),p(t[R+1],E),p(t[R+2],C),c(T,E,C,S)}function c(S,T,E,C){const R=C+1,w=[];for(let L=0;L<=R;L++){w[L]=[];const b=S.clone().lerp(E,L/R),M=T.clone().lerp(E,L/R),I=R-L;for(let X=0;X<=I;X++)X===0&&L===R?w[L][X]=b:w[L][X]=b.clone().lerp(M,X/I)}for(let L=0;L<R;L++)for(let b=0;b<2*(R-L)-1;b++){const M=Math.floor(b/2);b%2===0?(d(w[L][M+1]),d(w[L+1][M]),d(w[L][M])):(d(w[L][M+1]),d(w[L+1][M+1]),d(w[L+1][M]))}}function l(S){const T=new P;for(let E=0;E<r.length;E+=3)T.x=r[E+0],T.y=r[E+1],T.z=r[E+2],T.normalize().multiplyScalar(S),r[E+0]=T.x,r[E+1]=T.y,r[E+2]=T.z}function u(){const S=new P;for(let T=0;T<r.length;T+=3){S.x=r[T+0],S.y=r[T+1],S.z=r[T+2];const E=m(S)/2/Math.PI+.5,C=f(S)/Math.PI+.5;o.push(E,1-C)}_(),h()}function h(){for(let S=0;S<o.length;S+=6){const T=o[S+0],E=o[S+2],C=o[S+4],R=Math.max(T,E,C),w=Math.min(T,E,C);R>.9&&w<.1&&(T<.2&&(o[S+0]+=1),E<.2&&(o[S+2]+=1),C<.2&&(o[S+4]+=1))}}function d(S){r.push(S.x,S.y,S.z)}function p(S,T){const E=S*3;T.x=e[E+0],T.y=e[E+1],T.z=e[E+2]}function _(){const S=new P,T=new P,E=new P,C=new P,R=new Ke,w=new Ke,L=new Ke;for(let b=0,M=0;b<r.length;b+=9,M+=6){S.set(r[b+0],r[b+1],r[b+2]),T.set(r[b+3],r[b+4],r[b+5]),E.set(r[b+6],r[b+7],r[b+8]),R.set(o[M+0],o[M+1]),w.set(o[M+2],o[M+3]),L.set(o[M+4],o[M+5]),C.copy(S).add(T).add(E).divideScalar(3);const I=m(C);g(R,M+0,S,I),g(w,M+2,T,I),g(L,M+4,E,I)}}function g(S,T,E,C){C<0&&S.x===1&&(o[T]=S.x-1),E.x===0&&E.z===0&&(o[T]=C/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function f(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ac(e.vertices,e.indices,e.radius,e.details)}}class Qa extends ac{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Qa(e.radius,e.detail)}}class ec extends ac{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ec(e.radius,e.detail)}}class Qo extends un{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,h=e/a,d=t/c,p=[],_=[],g=[],m=[];for(let f=0;f<u;f++){const S=f*d-o;for(let T=0;T<l;T++){const E=T*h-r;_.push(E,-S,0),g.push(0,0,1),m.push(T/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let S=0;S<a;S++){const T=S+l*f,E=S+l*(f+1),C=S+1+l*(f+1),R=S+1+l*f;p.push(T,E,R),p.push(E,C,R)}this.setIndex(p),this.setAttribute("position",new tn(_,3)),this.setAttribute("normal",new tn(g,3)),this.setAttribute("uv",new tn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qo(e.width,e.height,e.widthSegments,e.heightSegments)}}class Nu extends un{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new P,d=new P,p=[],_=[],g=[],m=[];for(let f=0;f<=n;f++){const S=[],T=f/n;let E=0;f===0&&o===0?E=.5/t:f===n&&c===Math.PI&&(E=-.5/t);for(let C=0;C<=t;C++){const R=C/t;h.x=-e*Math.cos(i+R*r)*Math.sin(o+T*a),h.y=e*Math.cos(o+T*a),h.z=e*Math.sin(i+R*r)*Math.sin(o+T*a),_.push(h.x,h.y,h.z),d.copy(h).normalize(),g.push(d.x,d.y,d.z),m.push(R+E,1-T),S.push(l++)}u.push(S)}for(let f=0;f<n;f++)for(let S=0;S<t;S++){const T=u[f][S+1],E=u[f][S],C=u[f+1][S],R=u[f+1][S+1];(f!==0||o>0)&&p.push(T,E,R),(f!==n-1||c<Math.PI)&&p.push(E,C,R)}this.setIndex(p),this.setAttribute("position",new tn(_,3)),this.setAttribute("normal",new tn(g,3)),this.setAttribute("uv",new tn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ds extends ei{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xf,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ii extends ds{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ke(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ye(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ie(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ie(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ie(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class r0 extends ei{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=j_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class o0 extends ei{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Ca(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function a0(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function c0(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function nd(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let c=0;c!==e;++c)i[o++]=s[a+c]}return i}function cp(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class ea{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class l0 extends ea{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:xh,endingEnd:xh}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Mh:r=e,a=2*t-n;break;case Eh:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Mh:o=e,c=2*n-t;break;case Eh:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,p=this._weightNext,_=(n-t)/(i-t),g=_*_,m=g*_,f=-d*m+2*d*g-d*_,S=(1+d)*m+(-1.5-2*d)*g+(-.5+d)*_+1,T=(-1-p)*m+(1.5+p)*g+.5*_,E=p*m-p*g;for(let C=0;C!==a;++C)r[C]=f*o[u+C]+S*o[l+C]+T*o[c+C]+E*o[h+C];return r}}class u0 extends ea{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[l+d]*h+o[c+d]*u;return r}}class h0 extends ea{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class si{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ca(t,this.TimeBufferType),this.values=Ca(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ca(e.times,Array),values:Ca(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new h0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new u0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new l0(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ro:t=this.InterpolantFactoryMethodDiscrete;break;case oo:t=this.InterpolantFactoryMethodLinear;break;case Mc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ro;case this.InterpolantFactoryMethodLinear:return oo;case this.InterpolantFactoryMethodSmooth:return Mc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&a0(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Mc,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(i)c=!0;else{const h=a*n,d=h-n,p=h+n;for(let _=0;_!==n;++_){const g=t[h+_];if(g!==t[d+_]||g!==t[p+_]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const h=a*n,d=o*n;for(let p=0;p!==n;++p)t[d+p]=t[h+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}si.prototype.TimeBufferType=Float32Array;si.prototype.ValueBufferType=Float32Array;si.prototype.DefaultInterpolation=oo;class wr extends si{constructor(e,t,n){super(e,t,n)}}wr.prototype.ValueTypeName="bool";wr.prototype.ValueBufferType=Array;wr.prototype.DefaultInterpolation=ro;wr.prototype.InterpolantFactoryMethodLinear=void 0;wr.prototype.InterpolantFactoryMethodSmooth=void 0;class lp extends si{}lp.prototype.ValueTypeName="color";class Sr extends si{}Sr.prototype.ValueTypeName="number";class d0 extends ea{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t);let l=e*a;for(let u=l+a;l!==u;l+=4)ji.slerpFlat(r,0,o,l-a,o,l,c);return r}}class Tr extends si{InterpolantFactoryMethodLinear(e){return new d0(this.times,this.values,this.getValueSize(),e)}}Tr.prototype.ValueTypeName="quaternion";Tr.prototype.InterpolantFactoryMethodSmooth=void 0;class Rr extends si{constructor(e,t,n){super(e,t,n)}}Rr.prototype.ValueTypeName="string";Rr.prototype.ValueBufferType=Array;Rr.prototype.DefaultInterpolation=ro;Rr.prototype.InterpolantFactoryMethodLinear=void 0;Rr.prototype.InterpolantFactoryMethodSmooth=void 0;class br extends si{}br.prototype.ValueTypeName="vector";class f0{constructor(e="",t=-1,n=[],i=$_){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Hn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(m0(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(si.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const u=c0(c);c=nd(c,1,u),l=nd(l,1,u),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Sr(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],u=l.name.match(r);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,p,_,g){if(p.length!==0){const m=[],f=[];cp(p,m,f,_),m.length!==0&&g.push(new h(d,m,f))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const d=l[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let _;for(_=0;_<d.length;_++)if(d[_].morphTargets)for(let g=0;g<d[_].morphTargets.length;g++)p[d[_].morphTargets[g]]=-1;for(const g in p){const m=[],f=[];for(let S=0;S!==d[_].morphTargets.length;++S){const T=d[_];m.push(T.time),f.push(T.morphTarget===g?1:0)}i.push(new Sr(".morphTargetInfluence["+g+"]",m,f))}c=p.length*o}else{const p=".bones["+t[h].name+"]";n(br,p+".position",d,"pos",i),n(Tr,p+".quaternion",d,"rot",i),n(br,p+".scale",d,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function p0(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Sr;case"vector":case"vector2":case"vector3":case"vector4":return br;case"color":return lp;case"quaternion":return Tr;case"bool":case"boolean":return wr;case"string":return Rr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function m0(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=p0(s.type);if(s.times===void 0){const t=[],n=[];cp(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Vi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class _0{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const p=l[h],_=l[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null}}}const g0=new _0;class Cr{constructor(e){this.manager=e!==void 0?e:g0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Cr.DEFAULT_MATERIAL_NAME="__DEFAULT";const hi={};class v0 extends Error{constructor(e,t){super(e),this.response=t}}class up extends Cr{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Vi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(hi[e]!==void 0){hi[e].push({onLoad:t,onProgress:n,onError:i});return}hi[e]=[],hi[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=hi[e],h=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=d?parseInt(d):0,_=p!==0;let g=0;const m=new ReadableStream({start(f){S();function S(){h.read().then(({done:T,value:E})=>{if(T)f.close();else{g+=E.byteLength;const C=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:p});for(let R=0,w=u.length;R<w;R++){const L=u[R];L.onProgress&&L.onProgress(C)}f.enqueue(E),S()}},T=>{f.error(T)})}}});return new Response(m)}else throw new v0(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(d);return l.arrayBuffer().then(_=>p.decode(_))}}}).then(l=>{Vi.add(e,l);const u=hi[e];delete hi[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onLoad&&p.onLoad(l)}}).catch(l=>{const u=hi[e];if(u===void 0)throw this.manager.itemError(e),l;delete hi[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class x0 extends Cr{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Vi.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=ao("img");function c(){u(),Vi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class M0 extends Cr{constructor(e){super(e)}load(e,t,n,i){const r=new Ot,o=new x0(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class cc extends Et{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class E0 extends cc{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ie(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Wc=new ze,id=new P,sd=new P;class Pu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ke(512,512),this.map=null,this.mapPass=null,this.matrix=new ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Lu,this._frameExtents=new Ke(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;id.setFromMatrixPosition(e.matrixWorld),t.position.copy(id),sd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(sd),t.updateMatrixWorld(),Wc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Wc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class y0 extends Pu{constructor(){super(new Qt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Er*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class S0 extends cc{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new y0}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const rd=new ze,zr=new P,Xc=new P;class T0 extends Pu{constructor(){super(new Qt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ke(4,2),this._viewportCount=6,this._viewports=[new rt(2,1,1,1),new rt(0,1,1,1),new rt(3,1,1,1),new rt(1,1,1,1),new rt(3,0,1,1),new rt(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),zr.setFromMatrixPosition(e.matrixWorld),n.position.copy(zr),Xc.copy(n.position),Xc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Xc),n.updateMatrixWorld(),i.makeTranslation(-zr.x,-zr.y,-zr.z),rd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rd)}}class hp extends cc{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new T0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Du extends np{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class b0 extends Pu{constructor(){super(new Du(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class au extends cc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.shadow=new b0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class eo{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class A0 extends Cr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Vi.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Vi.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Vi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Vi.add(e,c),r.manager.itemStart(e)}}class w0 extends Qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}const Uu="\\[\\]\\.:\\/",R0=new RegExp("["+Uu+"]","g"),Ou="[^"+Uu+"]",C0="[^"+Uu.replace("\\.","")+"]",L0=/((?:WC+[\/:])*)/.source.replace("WC",Ou),I0=/(WCOD+)?/.source.replace("WCOD",C0),N0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ou),P0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ou),D0=new RegExp("^"+L0+I0+N0+P0+"$"),U0=["material","materials","bones","map"];class O0{constructor(e,t,n){const i=n||ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ut{constructor(e,t,n){this.path=t,this.parsedPath=n||ut.parseTrackName(t),this.node=ut.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ut.Composite(e,t,n):new ut(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(R0,"")}static parseTrackName(e){const t=D0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);U0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=ut.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[i];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ut.Composite=O0;ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ut.prototype.GetterByBindingType=[ut.prototype._getValue_direct,ut.prototype._getValue_array,ut.prototype._getValue_arrayElement,ut.prototype._getValue_toArray];ut.prototype.SetterByBindingTypeAndVersioning=[[ut.prototype._setValue_direct,ut.prototype._setValue_direct_setNeedsUpdate,ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_array,ut.prototype._setValue_array_setNeedsUpdate,ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_arrayElement,ut.prototype._setValue_arrayElement_setNeedsUpdate,ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_fromArray,ut.prototype._setValue_fromArray_setNeedsUpdate,ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];function od(s,e,t,n){const i=F0(n);switch(t){case Bf:return s*e;case Hf:return s*e;case zf:return s*e*2;case yu:return s*e/i.components*i.byteLength;case Su:return s*e/i.components*i.byteLength;case Gf:return s*e*2/i.components*i.byteLength;case Tu:return s*e*2/i.components*i.byteLength;case kf:return s*e*3/i.components*i.byteLength;case Cn:return s*e*4/i.components*i.byteLength;case bu:return s*e*4/i.components*i.byteLength;case za:case Ga:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Va:case Wa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Il:case Pl:return Math.max(s,16)*Math.max(e,8)/4;case Ll:case Nl:return Math.max(s,8)*Math.max(e,8)/2;case Dl:case Ul:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ol:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Fl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Bl:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case kl:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Hl:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case zl:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Gl:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Vl:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Wl:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Xl:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case ql:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Yl:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case $l:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Kl:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case jl:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Xa:case Zl:case Jl:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Vf:case Ql:return Math.ceil(s/4)*Math.ceil(e/4)*8;case eu:case tu:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function F0(s){switch(s){case wi:case Uf:return{byteLength:1,components:1};case so:case Of:case Zo:return{byteLength:2,components:1};case Mu:case Eu:return{byteLength:2,components:4};case xs:case xu:case Bn:return{byteLength:4,components:1};case Ff:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vu);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function dp(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function B0(s){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,h=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,u),a.onUploadCallback();let p;if(l instanceof Float32Array)p=s.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=s.SHORT;else if(l instanceof Uint32Array)p=s.UNSIGNED_INT;else if(l instanceof Int32Array)p=s.INT;else if(l instanceof Int8Array)p=s.BYTE;else if(l instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const u=c.array,h=c.updateRanges;if(s.bindBuffer(l,a),h.length===0)s.bufferSubData(l,0,u);else{h.sort((p,_)=>p.start-_.start);let d=0;for(let p=1;p<h.length;p++){const _=h[d],g=h[p];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++d,h[d]=g)}h.length=d+1;for(let p=0,_=h.length;p<_;p++){const g=h[p];s.bufferSubData(l,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(s.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}var k0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,H0=`#ifdef USE_ALPHAHASH
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
#endif`,z0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,G0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,V0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,W0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,X0=`#ifdef USE_AOMAP
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
#endif`,q0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Y0=`#ifdef USE_BATCHING
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
#endif`,$0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,K0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,j0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Z0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,J0=`#ifdef USE_IRIDESCENCE
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
#endif`,Q0=`#ifdef USE_BUMPMAP
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
#endif`,ev=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,tv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,iv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ov=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,av=`#if defined( USE_COLOR_ALPHA )
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
#endif`,cv=`#define PI 3.141592653589793
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
} // validated`,lv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,uv=`vec3 transformedNormal = objectNormal;
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
#endif`,hv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mv="gl_FragColor = linearToOutputTexel( gl_FragColor );",_v=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gv=`#ifdef USE_ENVMAP
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
#endif`,vv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xv=`#ifdef USE_ENVMAP
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
#endif`,Mv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ev=`#ifdef USE_ENVMAP
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
#endif`,yv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Tv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Av=`#ifdef USE_GRADIENTMAP
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
}`,wv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Lv=`uniform bool receiveShadow;
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
#endif`,Iv=`#ifdef USE_ENVMAP
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
#endif`,Nv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Pv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Dv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Uv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ov=`PhysicalMaterial material;
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
#endif`,Fv=`struct PhysicalMaterial {
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
}`,Bv=`
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
#endif`,kv=`#if defined( RE_IndirectDiffuse )
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
#endif`,Hv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$v=`#if defined( USE_POINTS_UV )
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
#endif`,Kv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Jv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ex=`#ifdef USE_MORPHTARGETS
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
#endif`,tx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ix=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,sx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ox=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ax=`#ifdef USE_NORMALMAP
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
#endif`,cx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ux=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,px=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_x=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Mx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ex=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Sx=`float getShadowMask() {
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
}`,Tx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bx=`#ifdef USE_SKINNING
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
#endif`,Ax=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wx=`#ifdef USE_SKINNING
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
#endif`,Rx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ix=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Nx=`#ifdef USE_TRANSMISSION
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
#endif`,Px=`#ifdef USE_TRANSMISSION
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
#endif`,Dx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ux=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ox=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Bx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kx=`uniform sampler2D t2D;
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
}`,Hx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Gx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wx=`#include <common>
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
}`,Xx=`#if DEPTH_PACKING == 3200
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
}`,qx=`#define DISTANCE
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
}`,Yx=`#define DISTANCE
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
}`,$x=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Kx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jx=`uniform float scale;
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
}`,Zx=`uniform vec3 diffuse;
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
}`,Jx=`#include <common>
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
}`,Qx=`uniform vec3 diffuse;
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
}`,eM=`#define LAMBERT
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
}`,tM=`#define LAMBERT
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
}`,nM=`#define MATCAP
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
}`,iM=`#define MATCAP
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
}`,sM=`#define NORMAL
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
}`,rM=`#define NORMAL
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
}`,oM=`#define PHONG
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
}`,aM=`#define PHONG
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
}`,cM=`#define STANDARD
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
}`,lM=`#define STANDARD
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
}`,uM=`#define TOON
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
}`,hM=`#define TOON
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
}`,dM=`uniform float size;
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
}`,fM=`uniform vec3 diffuse;
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
}`,pM=`#include <common>
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
}`,mM=`uniform vec3 color;
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
}`,_M=`uniform float rotation;
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
}`,gM=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:k0,alphahash_pars_fragment:H0,alphamap_fragment:z0,alphamap_pars_fragment:G0,alphatest_fragment:V0,alphatest_pars_fragment:W0,aomap_fragment:X0,aomap_pars_fragment:q0,batching_pars_vertex:Y0,batching_vertex:$0,begin_vertex:K0,beginnormal_vertex:j0,bsdfs:Z0,iridescence_fragment:J0,bumpmap_pars_fragment:Q0,clipping_planes_fragment:ev,clipping_planes_pars_fragment:tv,clipping_planes_pars_vertex:nv,clipping_planes_vertex:iv,color_fragment:sv,color_pars_fragment:rv,color_pars_vertex:ov,color_vertex:av,common:cv,cube_uv_reflection_fragment:lv,defaultnormal_vertex:uv,displacementmap_pars_vertex:hv,displacementmap_vertex:dv,emissivemap_fragment:fv,emissivemap_pars_fragment:pv,colorspace_fragment:mv,colorspace_pars_fragment:_v,envmap_fragment:gv,envmap_common_pars_fragment:vv,envmap_pars_fragment:xv,envmap_pars_vertex:Mv,envmap_physical_pars_fragment:Iv,envmap_vertex:Ev,fog_vertex:yv,fog_pars_vertex:Sv,fog_fragment:Tv,fog_pars_fragment:bv,gradientmap_pars_fragment:Av,lightmap_pars_fragment:wv,lights_lambert_fragment:Rv,lights_lambert_pars_fragment:Cv,lights_pars_begin:Lv,lights_toon_fragment:Nv,lights_toon_pars_fragment:Pv,lights_phong_fragment:Dv,lights_phong_pars_fragment:Uv,lights_physical_fragment:Ov,lights_physical_pars_fragment:Fv,lights_fragment_begin:Bv,lights_fragment_maps:kv,lights_fragment_end:Hv,logdepthbuf_fragment:zv,logdepthbuf_pars_fragment:Gv,logdepthbuf_pars_vertex:Vv,logdepthbuf_vertex:Wv,map_fragment:Xv,map_pars_fragment:qv,map_particle_fragment:Yv,map_particle_pars_fragment:$v,metalnessmap_fragment:Kv,metalnessmap_pars_fragment:jv,morphinstance_vertex:Zv,morphcolor_vertex:Jv,morphnormal_vertex:Qv,morphtarget_pars_vertex:ex,morphtarget_vertex:tx,normal_fragment_begin:nx,normal_fragment_maps:ix,normal_pars_fragment:sx,normal_pars_vertex:rx,normal_vertex:ox,normalmap_pars_fragment:ax,clearcoat_normal_fragment_begin:cx,clearcoat_normal_fragment_maps:lx,clearcoat_pars_fragment:ux,iridescence_pars_fragment:hx,opaque_fragment:dx,packing:fx,premultiplied_alpha_fragment:px,project_vertex:mx,dithering_fragment:_x,dithering_pars_fragment:gx,roughnessmap_fragment:vx,roughnessmap_pars_fragment:xx,shadowmap_pars_fragment:Mx,shadowmap_pars_vertex:Ex,shadowmap_vertex:yx,shadowmask_pars_fragment:Sx,skinbase_vertex:Tx,skinning_pars_vertex:bx,skinning_vertex:Ax,skinnormal_vertex:wx,specularmap_fragment:Rx,specularmap_pars_fragment:Cx,tonemapping_fragment:Lx,tonemapping_pars_fragment:Ix,transmission_fragment:Nx,transmission_pars_fragment:Px,uv_pars_fragment:Dx,uv_pars_vertex:Ux,uv_vertex:Ox,worldpos_vertex:Fx,background_vert:Bx,background_frag:kx,backgroundCube_vert:Hx,backgroundCube_frag:zx,cube_vert:Gx,cube_frag:Vx,depth_vert:Wx,depth_frag:Xx,distanceRGBA_vert:qx,distanceRGBA_frag:Yx,equirect_vert:$x,equirect_frag:Kx,linedashed_vert:jx,linedashed_frag:Zx,meshbasic_vert:Jx,meshbasic_frag:Qx,meshlambert_vert:eM,meshlambert_frag:tM,meshmatcap_vert:nM,meshmatcap_frag:iM,meshnormal_vert:sM,meshnormal_frag:rM,meshphong_vert:oM,meshphong_frag:aM,meshphysical_vert:cM,meshphysical_frag:lM,meshtoon_vert:uM,meshtoon_frag:hM,points_vert:dM,points_frag:fM,shadow_vert:pM,shadow_frag:mM,sprite_vert:_M,sprite_frag:gM},ce={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},Jn={basic:{uniforms:jt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:jt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:jt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:jt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:jt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:jt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:jt([ce.points,ce.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:jt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:jt([ce.common,ce.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:jt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:jt([ce.sprite,ce.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:jt([ce.common,ce.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:jt([ce.lights,ce.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};Jn.physical={uniforms:jt([Jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const La={r:0,b:0,g:0},is=new ti,vM=new ze;function xM(s,e,t,n,i,r,o){const a=new Ie(0);let c=r===!0?0:1,l,u,h=null,d=0,p=null;function _(T){let E=T.isScene===!0?T.background:null;return E&&E.isTexture&&(E=(T.backgroundBlurriness>0?t:e).get(E)),E}function g(T){let E=!1;const C=_(T);C===null?f(a,c):C&&C.isColor&&(f(C,1),E=!0);const R=s.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(T,E){const C=_(E);C&&(C.isCubeTexture||C.mapping===rc)?(u===void 0&&(u=new It(new Jo(1,1,1),new $i({name:"BackgroundCubeMaterial",uniforms:yr(Jn.backgroundCube.uniforms),vertexShader:Jn.backgroundCube.vertexShader,fragmentShader:Jn.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,w,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),is.copy(E.backgroundRotation),is.x*=-1,is.y*=-1,is.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(vM.makeRotationFromEuler(is)),u.material.toneMapped=Qe.getTransfer(C.colorSpace)!==ht,(h!==C||d!==C.version||p!==s.toneMapping)&&(u.material.needsUpdate=!0,h=C,d=C.version,p=s.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(l===void 0&&(l=new It(new Qo(2,2),new $i({name:"BackgroundMaterial",uniforms:yr(Jn.background.uniforms),vertexShader:Jn.background.vertexShader,fragmentShader:Jn.background.fragmentShader,side:Ai,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=C,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=Qe.getTransfer(C.colorSpace)!==ht,C.matrixAutoUpdate===!0&&C.updateMatrix(),l.material.uniforms.uvTransform.value.copy(C.matrix),(h!==C||d!==C.version||p!==s.toneMapping)&&(l.material.needsUpdate=!0,h=C,d=C.version,p=s.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function f(T,E){T.getRGB(La,tp(s)),n.buffers.color.setClear(La.r,La.g,La.b,E,o)}function S(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),l!==void 0&&(l.geometry.dispose(),l.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(T,E=1){a.set(T),c=E,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,f(a,c)},render:g,addToRenderList:m,dispose:S}}function MM(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(M,I,X,z,Q){let ee=!1;const K=h(z,X,I);r!==K&&(r=K,l(r.object)),ee=p(M,z,X,Q),ee&&_(M,z,X,Q),Q!==null&&e.update(Q,s.ELEMENT_ARRAY_BUFFER),(ee||o)&&(o=!1,E(M,I,X,z),Q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function c(){return s.createVertexArray()}function l(M){return s.bindVertexArray(M)}function u(M){return s.deleteVertexArray(M)}function h(M,I,X){const z=X.wireframe===!0;let Q=n[M.id];Q===void 0&&(Q={},n[M.id]=Q);let ee=Q[I.id];ee===void 0&&(ee={},Q[I.id]=ee);let K=ee[z];return K===void 0&&(K=d(c()),ee[z]=K),K}function d(M){const I=[],X=[],z=[];for(let Q=0;Q<t;Q++)I[Q]=0,X[Q]=0,z[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:X,attributeDivisors:z,object:M,attributes:{},index:null}}function p(M,I,X,z){const Q=r.attributes,ee=I.attributes;let K=0;const ie=X.getAttributes();for(const V in ie)if(ie[V].location>=0){const ge=Q[V];let Te=ee[V];if(Te===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(Te=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(Te=M.instanceColor)),ge===void 0||ge.attribute!==Te||Te&&ge.data!==Te.data)return!0;K++}return r.attributesNum!==K||r.index!==z}function _(M,I,X,z){const Q={},ee=I.attributes;let K=0;const ie=X.getAttributes();for(const V in ie)if(ie[V].location>=0){let ge=ee[V];ge===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(ge=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(ge=M.instanceColor));const Te={};Te.attribute=ge,ge&&ge.data&&(Te.data=ge.data),Q[V]=Te,K++}r.attributes=Q,r.attributesNum=K,r.index=z}function g(){const M=r.newAttributes;for(let I=0,X=M.length;I<X;I++)M[I]=0}function m(M){f(M,0)}function f(M,I){const X=r.newAttributes,z=r.enabledAttributes,Q=r.attributeDivisors;X[M]=1,z[M]===0&&(s.enableVertexAttribArray(M),z[M]=1),Q[M]!==I&&(s.vertexAttribDivisor(M,I),Q[M]=I)}function S(){const M=r.newAttributes,I=r.enabledAttributes;for(let X=0,z=I.length;X<z;X++)I[X]!==M[X]&&(s.disableVertexAttribArray(X),I[X]=0)}function T(M,I,X,z,Q,ee,K){K===!0?s.vertexAttribIPointer(M,I,X,Q,ee):s.vertexAttribPointer(M,I,X,z,Q,ee)}function E(M,I,X,z){g();const Q=z.attributes,ee=X.getAttributes(),K=I.defaultAttributeValues;for(const ie in ee){const V=ee[ie];if(V.location>=0){let he=Q[ie];if(he===void 0&&(ie==="instanceMatrix"&&M.instanceMatrix&&(he=M.instanceMatrix),ie==="instanceColor"&&M.instanceColor&&(he=M.instanceColor)),he!==void 0){const ge=he.normalized,Te=he.itemSize,Xe=e.get(he);if(Xe===void 0)continue;const pt=Xe.buffer,$=Xe.type,ae=Xe.bytesPerElement,ye=$===s.INT||$===s.UNSIGNED_INT||he.gpuType===xu;if(he.isInterleavedBufferAttribute){const de=he.data,Ne=de.stride,Be=he.offset;if(de.isInstancedInterleavedBuffer){for(let qe=0;qe<V.locationSize;qe++)f(V.location+qe,de.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let qe=0;qe<V.locationSize;qe++)m(V.location+qe);s.bindBuffer(s.ARRAY_BUFFER,pt);for(let qe=0;qe<V.locationSize;qe++)T(V.location+qe,Te/V.locationSize,$,ge,Ne*ae,(Be+Te/V.locationSize*qe)*ae,ye)}else{if(he.isInstancedBufferAttribute){for(let de=0;de<V.locationSize;de++)f(V.location+de,he.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let de=0;de<V.locationSize;de++)m(V.location+de);s.bindBuffer(s.ARRAY_BUFFER,pt);for(let de=0;de<V.locationSize;de++)T(V.location+de,Te/V.locationSize,$,ge,Te*ae,Te/V.locationSize*de*ae,ye)}}else if(K!==void 0){const ge=K[ie];if(ge!==void 0)switch(ge.length){case 2:s.vertexAttrib2fv(V.location,ge);break;case 3:s.vertexAttrib3fv(V.location,ge);break;case 4:s.vertexAttrib4fv(V.location,ge);break;default:s.vertexAttrib1fv(V.location,ge)}}}}S()}function C(){L();for(const M in n){const I=n[M];for(const X in I){const z=I[X];for(const Q in z)u(z[Q].object),delete z[Q];delete I[X]}delete n[M]}}function R(M){if(n[M.id]===void 0)return;const I=n[M.id];for(const X in I){const z=I[X];for(const Q in z)u(z[Q].object),delete z[Q];delete I[X]}delete n[M.id]}function w(M){for(const I in n){const X=n[I];if(X[M.id]===void 0)continue;const z=X[M.id];for(const Q in z)u(z[Q].object),delete z[Q];delete X[M.id]}}function L(){b(),o=!0,r!==i&&(r=i,l(r.object))}function b(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:L,resetDefaultState:b,dispose:C,releaseStatesOfGeometry:R,releaseStatesOfProgram:w,initAttributes:g,enableAttribute:m,disableUnusedAttributes:S}}function EM(s,e,t){let n;function i(l){n=l}function r(l,u){s.drawArrays(n,l,u),t.update(u,n,1)}function o(l,u,h){h!==0&&(s.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function a(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let p=0;for(let _=0;_<h;_++)p+=u[_];t.update(p,n,1)}function c(l,u,h,d){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<l.length;_++)o(l[_],u[_],d[_]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,h);let _=0;for(let g=0;g<h;g++)_+=u[g]*d[g];t.update(_,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function yM(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(w){return!(w!==Cn&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const L=w===Zo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==wi&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Bn&&!L)}function c(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),S=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),T=s.getParameter(s.MAX_VARYING_VECTORS),E=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),C=_>0,R=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:S,maxVaryings:T,maxFragmentUniforms:E,vertexTextures:C,maxSamples:R}}function SM(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new os,a=new He,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||n!==0||i;return i=d,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){const _=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,f=s.get(h);if(!i||_===null||_.length===0||r&&!m)r?u(null):l();else{const S=r?0:n,T=S*4;let E=f.clippingState||null;c.value=E,E=u(_,d,T,p);for(let C=0;C!==T;++C)E[C]=t[C];f.clippingState=E,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,p,_){const g=h!==null?h.length:0;let m=null;if(g!==0){if(m=c.value,_!==!0||m===null){const f=p+g*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<f)&&(m=new Float32Array(f));for(let T=0,E=p;T!==g;++T,E+=4)o.copy(h[T]).applyMatrix4(S,a),o.normal.toArray(m,E),m[E+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function TM(s){let e=new WeakMap;function t(o,a){return a===Rl?o.mapping=_r:a===Cl&&(o.mapping=gr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Rl||a===Cl)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Yg(c.height);return l.fromEquirectangularTexture(s,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Vs=4,ad=[.125,.215,.35,.446,.526,.582],us=20,qc=new Du,cd=new Ie;let Yc=null,$c=0,Kc=0,jc=!1;const as=(1+Math.sqrt(5))/2,Fs=1/as,ld=[new P(-as,Fs,0),new P(as,Fs,0),new P(-Fs,0,as),new P(Fs,0,as),new P(0,as,-Fs),new P(0,as,Fs),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class ud{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Yc=this._renderer.getRenderTarget(),$c=this._renderer.getActiveCubeFace(),Kc=this._renderer.getActiveMipmapLevel(),jc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Yc,$c,Kc),this._renderer.xr.enabled=jc,e.scissorTest=!1,Ia(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_r||e.mapping===gr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yc=this._renderer.getRenderTarget(),$c=this._renderer.getActiveCubeFace(),Kc=this._renderer.getActiveMipmapLevel(),jc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:vn,minFilter:vn,generateMipmaps:!1,type:Zo,format:Cn,colorSpace:nn,depthBuffer:!1},i=hd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hd(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bM(r)),this._blurMaterial=AM(r,e,t)}return i}_compileMaterial(e){const t=new It(this._lodPlanes[0],e);this._renderer.compile(t,qc)}_sceneToCubeUV(e,t,n,i){const a=new Qt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(cd),u.toneMapping=Xi,u.autoClear=!1;const p=new yi({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),_=new It(new Jo,p);let g=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,g=!0):(p.color.copy(cd),g=!0);for(let f=0;f<6;f++){const S=f%3;S===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):S===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));const T=this._cubeSize;Ia(i,S*T,f>2?T:0,T,T),u.setRenderTarget(i),g&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===_r||e.mapping===gr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=fd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dd());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new It(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;Ia(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,qc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ld[(i-r-1)%ld.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new It(this._lodPlanes[i],l),d=l.uniforms,p=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*us-1),g=r/_,m=isFinite(r)?1+Math.floor(u*g):us;m>us&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${us}`);const f=[];let S=0;for(let w=0;w<us;++w){const L=w/g,b=Math.exp(-L*L/2);f.push(b),w===0?S+=b:w<m&&(S+=2*b)}for(let w=0;w<f.length;w++)f[w]=f[w]/S;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:T}=this;d.dTheta.value=_,d.mipInt.value=T-n;const E=this._sizeLods[i],C=3*E*(i>T-Vs?i-T+Vs:0),R=4*(this._cubeSize-E);Ia(t,C,R,3*E,2*E),c.setRenderTarget(t),c.render(h,qc)}}function bM(s){const e=[],t=[],n=[];let i=s;const r=s-Vs+1+ad.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>s-Vs?c=ad[o-s+Vs-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,_=6,g=3,m=2,f=1,S=new Float32Array(g*_*p),T=new Float32Array(m*_*p),E=new Float32Array(f*_*p);for(let R=0;R<p;R++){const w=R%3*2/3-1,L=R>2?0:-1,b=[w,L,0,w+2/3,L,0,w+2/3,L+1,0,w,L,0,w+2/3,L+1,0,w,L+1,0];S.set(b,g*_*R),T.set(d,m*_*R);const M=[R,R,R,R,R,R];E.set(M,f*_*R)}const C=new un;C.setAttribute("position",new zt(S,g)),C.setAttribute("uv",new zt(T,m)),C.setAttribute("faceIndex",new zt(E,f)),e.push(C),i>Vs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function hd(s,e,t){const n=new Ms(s,e,t);return n.texture.mapping=rc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ia(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function AM(s,e,t){const n=new Float32Array(us),i=new P(0,1,0);return new $i({name:"SphericalGaussianBlur",defines:{n:us,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Fu(),fragmentShader:`

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
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function dd(){return new $i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fu(),fragmentShader:`

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
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function fd(){return new $i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function Fu(){return`

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
	`}function wM(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Rl||c===Cl,u=c===_r||c===gr;if(l||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new ud(s)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return l&&p&&p.height>0||u&&p&&i(p)?(t===null&&(t=new ud(s)),h=l?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function i(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function RM(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Gs("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function CM(s,e,t,n){const i={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",o),delete i[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const p in d)e.update(d[p],s.ARRAY_BUFFER)}function l(h){const d=[],p=h.index,_=h.attributes.position;let g=0;if(p!==null){const S=p.array;g=p.version;for(let T=0,E=S.length;T<E;T+=3){const C=S[T+0],R=S[T+1],w=S[T+2];d.push(C,R,R,w,w,C)}}else if(_!==void 0){const S=_.array;g=_.version;for(let T=0,E=S.length/3-1;T<E;T+=3){const C=T+0,R=T+1,w=T+2;d.push(C,R,R,w,w,C)}}else return;const m=new($f(d)?ep:Qf)(d,1);m.version=g;const f=r.get(h);f&&e.remove(f),r.set(h,m)}function u(h){const d=r.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function LM(s,e,t){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,p){s.drawElements(n,p,r,d*o),t.update(p,n,1)}function l(d,p,_){_!==0&&(s.drawElementsInstanced(n,p,r,d*o,_),t.update(p,n,_))}function u(d,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,_);let m=0;for(let f=0;f<_;f++)m+=p[f];t.update(m,n,1)}function h(d,p,_,g){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)l(d[f]/o,p[f],g[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,g,0,_);let f=0;for(let S=0;S<_;S++)f+=p[S]*g[S];t.update(f,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function IM(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function NM(s,e,t){const n=new WeakMap,i=new rt;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let M=function(){L.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var p=M;d!==void 0&&d.texture.dispose();const _=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let E=0;_===!0&&(E=1),g===!0&&(E=2),m===!0&&(E=3);let C=a.attributes.position.count*E,R=1;C>e.maxTextureSize&&(R=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const w=new Float32Array(C*R*4*h),L=new jf(w,C,R,h);L.type=Bn,L.needsUpdate=!0;const b=E*4;for(let I=0;I<h;I++){const X=f[I],z=S[I],Q=T[I],ee=C*R*4*I;for(let K=0;K<X.count;K++){const ie=K*b;_===!0&&(i.fromBufferAttribute(X,K),w[ee+ie+0]=i.x,w[ee+ie+1]=i.y,w[ee+ie+2]=i.z,w[ee+ie+3]=0),g===!0&&(i.fromBufferAttribute(z,K),w[ee+ie+4]=i.x,w[ee+ie+5]=i.y,w[ee+ie+6]=i.z,w[ee+ie+7]=0),m===!0&&(i.fromBufferAttribute(Q,K),w[ee+ie+8]=i.x,w[ee+ie+9]=i.y,w[ee+ie+10]=i.z,w[ee+ie+11]=Q.itemSize===4?i.w:1)}}d={count:h,texture:L,size:new Ke(C,R)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let _=0;for(let m=0;m<l.length;m++)_+=l[m];const g=a.morphTargetsRelative?1:1-_;c.getUniforms().setValue(s,"morphTargetBaseInfluence",g),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function PM(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(i.get(h)!==l&&(e.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return h}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}const fp=new Ot,pd=new ap(1,1),pp=new jf,mp=new Ig,_p=new ip,md=[],_d=[],gd=new Float32Array(16),vd=new Float32Array(9),xd=new Float32Array(4);function Lr(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=md[i];if(r===void 0&&(r=new Float32Array(i),md[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Pt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Dt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function lc(s,e){let t=_d[e];t===void 0&&(t=new Int32Array(e),_d[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function DM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function UM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;s.uniform2fv(this.addr,e),Dt(t,e)}}function OM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;s.uniform3fv(this.addr,e),Dt(t,e)}}function FM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;s.uniform4fv(this.addr,e),Dt(t,e)}}function BM(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(Pt(t,n))return;xd.set(n),s.uniformMatrix2fv(this.addr,!1,xd),Dt(t,n)}}function kM(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(Pt(t,n))return;vd.set(n),s.uniformMatrix3fv(this.addr,!1,vd),Dt(t,n)}}function HM(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(Pt(t,n))return;gd.set(n),s.uniformMatrix4fv(this.addr,!1,gd),Dt(t,n)}}function zM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function GM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;s.uniform2iv(this.addr,e),Dt(t,e)}}function VM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;s.uniform3iv(this.addr,e),Dt(t,e)}}function WM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;s.uniform4iv(this.addr,e),Dt(t,e)}}function XM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function qM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;s.uniform2uiv(this.addr,e),Dt(t,e)}}function YM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;s.uniform3uiv(this.addr,e),Dt(t,e)}}function $M(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;s.uniform4uiv(this.addr,e),Dt(t,e)}}function KM(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(pd.compareFunction=qf,r=pd):r=fp,t.setTexture2D(e||r,i)}function jM(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||mp,i)}function ZM(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||_p,i)}function JM(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||pp,i)}function QM(s){switch(s){case 5126:return DM;case 35664:return UM;case 35665:return OM;case 35666:return FM;case 35674:return BM;case 35675:return kM;case 35676:return HM;case 5124:case 35670:return zM;case 35667:case 35671:return GM;case 35668:case 35672:return VM;case 35669:case 35673:return WM;case 5125:return XM;case 36294:return qM;case 36295:return YM;case 36296:return $M;case 35678:case 36198:case 36298:case 36306:case 35682:return KM;case 35679:case 36299:case 36307:return jM;case 35680:case 36300:case 36308:case 36293:return ZM;case 36289:case 36303:case 36311:case 36292:return JM}}function eE(s,e){s.uniform1fv(this.addr,e)}function tE(s,e){const t=Lr(e,this.size,2);s.uniform2fv(this.addr,t)}function nE(s,e){const t=Lr(e,this.size,3);s.uniform3fv(this.addr,t)}function iE(s,e){const t=Lr(e,this.size,4);s.uniform4fv(this.addr,t)}function sE(s,e){const t=Lr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function rE(s,e){const t=Lr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function oE(s,e){const t=Lr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function aE(s,e){s.uniform1iv(this.addr,e)}function cE(s,e){s.uniform2iv(this.addr,e)}function lE(s,e){s.uniform3iv(this.addr,e)}function uE(s,e){s.uniform4iv(this.addr,e)}function hE(s,e){s.uniform1uiv(this.addr,e)}function dE(s,e){s.uniform2uiv(this.addr,e)}function fE(s,e){s.uniform3uiv(this.addr,e)}function pE(s,e){s.uniform4uiv(this.addr,e)}function mE(s,e,t){const n=this.cache,i=e.length,r=lc(t,i);Pt(n,r)||(s.uniform1iv(this.addr,r),Dt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||fp,r[o])}function _E(s,e,t){const n=this.cache,i=e.length,r=lc(t,i);Pt(n,r)||(s.uniform1iv(this.addr,r),Dt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||mp,r[o])}function gE(s,e,t){const n=this.cache,i=e.length,r=lc(t,i);Pt(n,r)||(s.uniform1iv(this.addr,r),Dt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||_p,r[o])}function vE(s,e,t){const n=this.cache,i=e.length,r=lc(t,i);Pt(n,r)||(s.uniform1iv(this.addr,r),Dt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||pp,r[o])}function xE(s){switch(s){case 5126:return eE;case 35664:return tE;case 35665:return nE;case 35666:return iE;case 35674:return sE;case 35675:return rE;case 35676:return oE;case 5124:case 35670:return aE;case 35667:case 35671:return cE;case 35668:case 35672:return lE;case 35669:case 35673:return uE;case 5125:return hE;case 36294:return dE;case 36295:return fE;case 36296:return pE;case 35678:case 36198:case 36298:case 36306:case 35682:return mE;case 35679:case 36299:case 36307:return _E;case 35680:case 36300:case 36308:case 36293:return gE;case 36289:case 36303:case 36311:case 36292:return vE}}class ME{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=QM(t.type)}}class EE{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=xE(t.type)}}class yE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const Zc=/(\w+)(\])?(\[|\.)?/g;function Md(s,e){s.seq.push(e),s.map[e.id]=e}function SE(s,e,t){const n=s.name,i=n.length;for(Zc.lastIndex=0;;){const r=Zc.exec(n),o=Zc.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Md(t,l===void 0?new ME(a,s,e):new EE(a,s,e));break}else{let h=t.map[a];h===void 0&&(h=new yE(a),Md(t,h)),t=h}}}class qa{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);SE(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Ed(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const TE=37297;let bE=0;function AE(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const yd=new He;function wE(s){Qe._getMatrix(yd,Qe.workingColorSpace,s);const e=`mat3( ${yd.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(s)){case $a:return[e,"LinearTransferOETF"];case ht:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Sd(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+AE(s.getShaderSource(e),o)}else return i}function RE(s,e){const t=wE(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function CE(s,e){let t;switch(e){case z_:t="Linear";break;case G_:t="Reinhard";break;case V_:t="Cineon";break;case Nf:t="ACESFilmic";break;case X_:t="AgX";break;case q_:t="Neutral";break;case W_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Na=new P;function LE(){Qe.getLuminanceCoefficients(Na);const s=Na.x.toFixed(4),e=Na.y.toFixed(4),t=Na.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function IE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($r).join(`
`)}function NE(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function PE(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function $r(s){return s!==""}function Td(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bd(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const DE=/^[ \t]*#include +<([\w\d./]+)>/gm;function cu(s){return s.replace(DE,OE)}const UE=new Map;function OE(s,e){let t=Ve[e];if(t===void 0){const n=UE.get(e);if(n!==void 0)t=Ve[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return cu(t)}const FE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ad(s){return s.replace(FE,BE)}function BE(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function wd(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function kE(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Cf?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Lf?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===di&&(e="SHADOWMAP_TYPE_VSM"),e}function HE(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case _r:case gr:e="ENVMAP_TYPE_CUBE";break;case rc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function zE(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case gr:e="ENVMAP_MODE_REFRACTION";break}return e}function GE(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case If:e="ENVMAP_BLENDING_MULTIPLY";break;case k_:e="ENVMAP_BLENDING_MIX";break;case H_:e="ENVMAP_BLENDING_ADD";break}return e}function VE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function WE(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=kE(t),l=HE(t),u=zE(t),h=GE(t),d=VE(t),p=IE(t),_=NE(r),g=i.createProgram();let m,f,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter($r).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter($r).join(`
`),f.length>0&&(f+=`
`)):(m=[wd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($r).join(`
`),f=[wd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xi?"#define TONE_MAPPING":"",t.toneMapping!==Xi?Ve.tonemapping_pars_fragment:"",t.toneMapping!==Xi?CE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,RE("linearToOutputTexel",t.outputColorSpace),LE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($r).join(`
`)),o=cu(o),o=Td(o,t),o=bd(o,t),a=cu(a),a=Td(a,t),a=bd(a,t),o=Ad(o),a=Ad(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Sh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Sh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const T=S+m+o,E=S+f+a,C=Ed(i,i.VERTEX_SHADER,T),R=Ed(i,i.FRAGMENT_SHADER,E);i.attachShader(g,C),i.attachShader(g,R),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function w(I){if(s.debug.checkShaderErrors){const X=i.getProgramInfoLog(g).trim(),z=i.getShaderInfoLog(C).trim(),Q=i.getShaderInfoLog(R).trim();let ee=!0,K=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(ee=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,C,R);else{const ie=Sd(i,C,"vertex"),V=Sd(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+X+`
`+ie+`
`+V)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(z===""||Q==="")&&(K=!1);K&&(I.diagnostics={runnable:ee,programLog:X,vertexShader:{log:z,prefix:m},fragmentShader:{log:Q,prefix:f}})}i.deleteShader(C),i.deleteShader(R),L=new qa(i,g),b=PE(i,g)}let L;this.getUniforms=function(){return L===void 0&&w(this),L};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(g,TE)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=bE++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=C,this.fragmentShader=R,this}let XE=0;class qE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new YE(e),t.set(e,n)),n}}class YE{constructor(e){this.id=XE++,this.code=e,this.usedTimes=0}}function $E(s,e,t,n,i,r,o){const a=new Zf,c=new qE,l=new Set,u=[],h=i.logarithmicDepthBuffer,d=i.vertexTextures;let p=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(b){return l.add(b),b===0?"uv":`uv${b}`}function m(b,M,I,X,z){const Q=X.fog,ee=z.geometry,K=b.isMeshStandardMaterial?X.environment:null,ie=(b.isMeshStandardMaterial?t:e).get(b.envMap||K),V=ie&&ie.mapping===rc?ie.image.height:null,he=_[b.type];b.precision!==null&&(p=i.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const ge=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Te=ge!==void 0?ge.length:0;let Xe=0;ee.morphAttributes.position!==void 0&&(Xe=1),ee.morphAttributes.normal!==void 0&&(Xe=2),ee.morphAttributes.color!==void 0&&(Xe=3);let pt,$,ae,ye;if(he){const ct=Jn[he];pt=ct.vertexShader,$=ct.fragmentShader}else pt=b.vertexShader,$=b.fragmentShader,c.update(b),ae=c.getVertexShaderID(b),ye=c.getFragmentShaderID(b);const de=s.getRenderTarget(),Ne=s.state.buffers.depth.getReversed(),Be=z.isInstancedMesh===!0,qe=z.isBatchedMesh===!0,yt=!!b.map,et=!!b.matcap,At=!!ie,N=!!b.aoMap,Mn=!!b.lightMap,je=!!b.bumpMap,Ze=!!b.normalMap,be=!!b.displacementMap,gt=!!b.emissiveMap,Ae=!!b.metalnessMap,A=!!b.roughnessMap,x=b.anisotropy>0,F=b.clearcoat>0,j=b.dispersion>0,te=b.iridescence>0,Y=b.sheen>0,Se=b.transmission>0,fe=x&&!!b.anisotropyMap,ve=F&&!!b.clearcoatMap,tt=F&&!!b.clearcoatNormalMap,oe=F&&!!b.clearcoatRoughnessMap,xe=te&&!!b.iridescenceMap,Le=te&&!!b.iridescenceThicknessMap,Pe=Y&&!!b.sheenColorMap,Me=Y&&!!b.sheenRoughnessMap,Je=!!b.specularMap,Ge=!!b.specularColorMap,mt=!!b.specularIntensityMap,D=Se&&!!b.transmissionMap,le=Se&&!!b.thicknessMap,G=!!b.gradientMap,Z=!!b.alphaMap,me=b.alphaTest>0,pe=!!b.alphaHash,ke=!!b.extensions;let Tt=Xi;b.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(Tt=s.toneMapping);const Gt={shaderID:he,shaderType:b.type,shaderName:b.name,vertexShader:pt,fragmentShader:$,defines:b.defines,customVertexShaderID:ae,customFragmentShaderID:ye,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:qe,batchingColor:qe&&z._colorsTexture!==null,instancing:Be,instancingColor:Be&&z.instanceColor!==null,instancingMorph:Be&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:de===null?s.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:nn,alphaToCoverage:!!b.alphaToCoverage,map:yt,matcap:et,envMap:At,envMapMode:At&&ie.mapping,envMapCubeUVHeight:V,aoMap:N,lightMap:Mn,bumpMap:je,normalMap:Ze,displacementMap:d&&be,emissiveMap:gt,normalMapObjectSpace:Ze&&b.normalMapType===J_,normalMapTangentSpace:Ze&&b.normalMapType===Xf,metalnessMap:Ae,roughnessMap:A,anisotropy:x,anisotropyMap:fe,clearcoat:F,clearcoatMap:ve,clearcoatNormalMap:tt,clearcoatRoughnessMap:oe,dispersion:j,iridescence:te,iridescenceMap:xe,iridescenceThicknessMap:Le,sheen:Y,sheenColorMap:Pe,sheenRoughnessMap:Me,specularMap:Je,specularColorMap:Ge,specularIntensityMap:mt,transmission:Se,transmissionMap:D,thicknessMap:le,gradientMap:G,opaque:b.transparent===!1&&b.blending===Xs&&b.alphaToCoverage===!1,alphaMap:Z,alphaTest:me,alphaHash:pe,combine:b.combine,mapUv:yt&&g(b.map.channel),aoMapUv:N&&g(b.aoMap.channel),lightMapUv:Mn&&g(b.lightMap.channel),bumpMapUv:je&&g(b.bumpMap.channel),normalMapUv:Ze&&g(b.normalMap.channel),displacementMapUv:be&&g(b.displacementMap.channel),emissiveMapUv:gt&&g(b.emissiveMap.channel),metalnessMapUv:Ae&&g(b.metalnessMap.channel),roughnessMapUv:A&&g(b.roughnessMap.channel),anisotropyMapUv:fe&&g(b.anisotropyMap.channel),clearcoatMapUv:ve&&g(b.clearcoatMap.channel),clearcoatNormalMapUv:tt&&g(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&g(b.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&g(b.iridescenceMap.channel),iridescenceThicknessMapUv:Le&&g(b.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&g(b.sheenColorMap.channel),sheenRoughnessMapUv:Me&&g(b.sheenRoughnessMap.channel),specularMapUv:Je&&g(b.specularMap.channel),specularColorMapUv:Ge&&g(b.specularColorMap.channel),specularIntensityMapUv:mt&&g(b.specularIntensityMap.channel),transmissionMapUv:D&&g(b.transmissionMap.channel),thicknessMapUv:le&&g(b.thicknessMap.channel),alphaMapUv:Z&&g(b.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(Ze||x),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!ee.attributes.uv&&(yt||Z),fog:!!Q,useFog:b.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Ne,skinning:z.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:Xe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:Tt,decodeVideoTexture:yt&&b.map.isVideoTexture===!0&&Qe.getTransfer(b.map.colorSpace)===ht,decodeVideoTextureEmissive:gt&&b.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(b.emissiveMap.colorSpace)===ht,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Qn,flipSided:b.side===ln,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ke&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&b.extensions.multiDraw===!0||qe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Gt.vertexUv1s=l.has(1),Gt.vertexUv2s=l.has(2),Gt.vertexUv3s=l.has(3),l.clear(),Gt}function f(b){const M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(const I in b.defines)M.push(I),M.push(b.defines[I]);return b.isRawShaderMaterial===!1&&(S(M,b),T(M,b),M.push(s.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function S(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function T(b,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),b.push(a.mask)}function E(b){const M=_[b.type];let I;if(M){const X=Jn[M];I=Vg.clone(X.uniforms)}else I=b.uniforms;return I}function C(b,M){let I;for(let X=0,z=u.length;X<z;X++){const Q=u[X];if(Q.cacheKey===M){I=Q,++I.usedTimes;break}}return I===void 0&&(I=new WE(s,M,b,r),u.push(I)),I}function R(b){if(--b.usedTimes===0){const M=u.indexOf(b);u[M]=u[u.length-1],u.pop(),b.destroy()}}function w(b){c.remove(b)}function L(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:E,acquireProgram:C,releaseProgram:R,releaseShaderCache:w,programs:u,dispose:L}}function KE(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function jE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Rd(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Cd(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(h,d,p,_,g,m){let f=s[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:_,renderOrder:h.renderOrder,z:g,group:m},s[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=_,f.renderOrder=h.renderOrder,f.z=g,f.group=m),e++,f}function a(h,d,p,_,g,m){const f=o(h,d,p,_,g,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):t.push(f)}function c(h,d,p,_,g,m){const f=o(h,d,p,_,g,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):t.unshift(f)}function l(h,d){t.length>1&&t.sort(h||jE),n.length>1&&n.sort(d||Rd),i.length>1&&i.sort(d||Rd)}function u(){for(let h=e,d=s.length;h<d;h++){const p=s[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:u,sort:l}}function ZE(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new Cd,s.set(n,[o])):i>=r.length?(o=new Cd,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function JE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Ie};break;case"SpotLight":t={position:new P,direction:new P,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":t={color:new Ie,position:new P,halfWidth:new P,halfHeight:new P};break}return s[e.id]=t,t}}}function QE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let ey=0;function ty(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function ny(s){const e=new JE,t=QE(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new P);const i=new P,r=new ze,o=new ze;function a(l){let u=0,h=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let p=0,_=0,g=0,m=0,f=0,S=0,T=0,E=0,C=0,R=0,w=0;l.sort(ty);for(let b=0,M=l.length;b<M;b++){const I=l[b],X=I.color,z=I.intensity,Q=I.distance,ee=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=X.r*z,h+=X.g*z,d+=X.b*z;else if(I.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(I.sh.coefficients[K],z);w++}else if(I.isDirectionalLight){const K=e.get(I);if(K.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const ie=I.shadow,V=t.get(I);V.shadowIntensity=ie.intensity,V.shadowBias=ie.bias,V.shadowNormalBias=ie.normalBias,V.shadowRadius=ie.radius,V.shadowMapSize=ie.mapSize,n.directionalShadow[p]=V,n.directionalShadowMap[p]=ee,n.directionalShadowMatrix[p]=I.shadow.matrix,S++}n.directional[p]=K,p++}else if(I.isSpotLight){const K=e.get(I);K.position.setFromMatrixPosition(I.matrixWorld),K.color.copy(X).multiplyScalar(z),K.distance=Q,K.coneCos=Math.cos(I.angle),K.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),K.decay=I.decay,n.spot[g]=K;const ie=I.shadow;if(I.map&&(n.spotLightMap[C]=I.map,C++,ie.updateMatrices(I),I.castShadow&&R++),n.spotLightMatrix[g]=ie.matrix,I.castShadow){const V=t.get(I);V.shadowIntensity=ie.intensity,V.shadowBias=ie.bias,V.shadowNormalBias=ie.normalBias,V.shadowRadius=ie.radius,V.shadowMapSize=ie.mapSize,n.spotShadow[g]=V,n.spotShadowMap[g]=ee,E++}g++}else if(I.isRectAreaLight){const K=e.get(I);K.color.copy(X).multiplyScalar(z),K.halfWidth.set(I.width*.5,0,0),K.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=K,m++}else if(I.isPointLight){const K=e.get(I);if(K.color.copy(I.color).multiplyScalar(I.intensity),K.distance=I.distance,K.decay=I.decay,I.castShadow){const ie=I.shadow,V=t.get(I);V.shadowIntensity=ie.intensity,V.shadowBias=ie.bias,V.shadowNormalBias=ie.normalBias,V.shadowRadius=ie.radius,V.shadowMapSize=ie.mapSize,V.shadowCameraNear=ie.camera.near,V.shadowCameraFar=ie.camera.far,n.pointShadow[_]=V,n.pointShadowMap[_]=ee,n.pointShadowMatrix[_]=I.shadow.matrix,T++}n.point[_]=K,_++}else if(I.isHemisphereLight){const K=e.get(I);K.skyColor.copy(I.color).multiplyScalar(z),K.groundColor.copy(I.groundColor).multiplyScalar(z),n.hemi[f]=K,f++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_FLOAT_1,n.rectAreaLTC2=ce.LTC_FLOAT_2):(n.rectAreaLTC1=ce.LTC_HALF_1,n.rectAreaLTC2=ce.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const L=n.hash;(L.directionalLength!==p||L.pointLength!==_||L.spotLength!==g||L.rectAreaLength!==m||L.hemiLength!==f||L.numDirectionalShadows!==S||L.numPointShadows!==T||L.numSpotShadows!==E||L.numSpotMaps!==C||L.numLightProbes!==w)&&(n.directional.length=p,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=f,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=E+C-R,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=w,L.directionalLength=p,L.pointLength=_,L.spotLength=g,L.rectAreaLength=m,L.hemiLength=f,L.numDirectionalShadows=S,L.numPointShadows=T,L.numSpotShadows=E,L.numSpotMaps=C,L.numLightProbes=w,n.version=ey++)}function c(l,u){let h=0,d=0,p=0,_=0,g=0;const m=u.matrixWorldInverse;for(let f=0,S=l.length;f<S;f++){const T=l[f];if(T.isDirectionalLight){const E=n.directional[h];E.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(m),h++}else if(T.isSpotLight){const E=n.spot[p];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(m),p++}else if(T.isRectAreaLight){const E=n.rectArea[_];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(m),o.identity(),r.copy(T.matrixWorld),r.premultiply(m),o.extractRotation(r),E.halfWidth.set(T.width*.5,0,0),E.halfHeight.set(0,T.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),_++}else if(T.isPointLight){const E=n.point[d];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(m),d++}else if(T.isHemisphereLight){const E=n.hemi[g];E.direction.setFromMatrixPosition(T.matrixWorld),E.direction.transformDirection(m),g++}}}return{setup:a,setupView:c,state:n}}function Ld(s){const e=new ny(s),t=[],n=[];function i(u){l.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function iy(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new Ld(s),e.set(i,[a])):r>=o.length?(a=new Ld(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const sy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ry=`uniform sampler2D shadow_pass;
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
}`;function oy(s,e,t){let n=new Lu;const i=new Ke,r=new Ke,o=new rt,a=new r0({depthPacking:Z_}),c=new o0,l={},u=t.maxTextureSize,h={[Ai]:ln,[ln]:Ai,[Qn]:Qn},d=new $i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:sy,fragmentShader:ry}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new un;_.setAttribute("position",new zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new It(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cf;let f=this.type;this.render=function(R,w,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const b=s.getRenderTarget(),M=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),X=s.state;X.setBlending(Wi),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const z=f!==di&&this.type===di,Q=f===di&&this.type!==di;for(let ee=0,K=R.length;ee<K;ee++){const ie=R[ee],V=ie.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const he=V.getFrameExtents();if(i.multiply(he),r.copy(V.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/he.x),i.x=r.x*he.x,V.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/he.y),i.y=r.y*he.y,V.mapSize.y=r.y)),V.map===null||z===!0||Q===!0){const Te=this.type!==di?{minFilter:en,magFilter:en}:{};V.map!==null&&V.map.dispose(),V.map=new Ms(i.x,i.y,Te),V.map.texture.name=ie.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();const ge=V.getViewportCount();for(let Te=0;Te<ge;Te++){const Xe=V.getViewport(Te);o.set(r.x*Xe.x,r.y*Xe.y,r.x*Xe.z,r.y*Xe.w),X.viewport(o),V.updateMatrices(ie,Te),n=V.getFrustum(),E(w,L,V.camera,ie,this.type)}V.isPointLightShadow!==!0&&this.type===di&&S(V,L),V.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(b,M,I)};function S(R,w){const L=e.update(g);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Ms(i.x,i.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,s.setRenderTarget(R.mapPass),s.clear(),s.renderBufferDirect(w,null,L,d,g,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,s.setRenderTarget(R.map),s.clear(),s.renderBufferDirect(w,null,L,p,g,null)}function T(R,w,L,b){let M=null;const I=L.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(I!==void 0)M=I;else if(M=L.isPointLight===!0?c:a,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const X=M.uuid,z=w.uuid;let Q=l[X];Q===void 0&&(Q={},l[X]=Q);let ee=Q[z];ee===void 0&&(ee=M.clone(),Q[z]=ee,w.addEventListener("dispose",C)),M=ee}if(M.visible=w.visible,M.wireframe=w.wireframe,b===di?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:h[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const X=s.properties.get(M);X.light=L}return M}function E(R,w,L,b,M){if(R.visible===!1)return;if(R.layers.test(w.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===di)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,R.matrixWorld);const z=e.update(R),Q=R.material;if(Array.isArray(Q)){const ee=z.groups;for(let K=0,ie=ee.length;K<ie;K++){const V=ee[K],he=Q[V.materialIndex];if(he&&he.visible){const ge=T(R,he,b,M);R.onBeforeShadow(s,R,w,L,z,ge,V),s.renderBufferDirect(L,null,z,ge,R,V),R.onAfterShadow(s,R,w,L,z,ge,V)}}}else if(Q.visible){const ee=T(R,Q,b,M);R.onBeforeShadow(s,R,w,L,z,ee,null),s.renderBufferDirect(L,null,z,ee,R,null),R.onAfterShadow(s,R,w,L,z,ee,null)}}const X=R.children;for(let z=0,Q=X.length;z<Q;z++)E(X[z],w,L,b,M)}function C(R){R.target.removeEventListener("dispose",C);for(const L in l){const b=l[L],M=R.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}const ay={[El]:yl,[Sl]:Al,[Tl]:wl,[mr]:bl,[yl]:El,[Al]:Sl,[wl]:Tl,[bl]:mr};function cy(s,e){function t(){let D=!1;const le=new rt;let G=null;const Z=new rt(0,0,0,0);return{setMask:function(me){G!==me&&!D&&(s.colorMask(me,me,me,me),G=me)},setLocked:function(me){D=me},setClear:function(me,pe,ke,Tt,Gt){Gt===!0&&(me*=Tt,pe*=Tt,ke*=Tt),le.set(me,pe,ke,Tt),Z.equals(le)===!1&&(s.clearColor(me,pe,ke,Tt),Z.copy(le))},reset:function(){D=!1,G=null,Z.set(-1,0,0,0)}}}function n(){let D=!1,le=!1,G=null,Z=null,me=null;return{setReversed:function(pe){if(le!==pe){const ke=e.get("EXT_clip_control");le?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT);const Tt=me;me=null,this.setClear(Tt)}le=pe},getReversed:function(){return le},setTest:function(pe){pe?de(s.DEPTH_TEST):Ne(s.DEPTH_TEST)},setMask:function(pe){G!==pe&&!D&&(s.depthMask(pe),G=pe)},setFunc:function(pe){if(le&&(pe=ay[pe]),Z!==pe){switch(pe){case El:s.depthFunc(s.NEVER);break;case yl:s.depthFunc(s.ALWAYS);break;case Sl:s.depthFunc(s.LESS);break;case mr:s.depthFunc(s.LEQUAL);break;case Tl:s.depthFunc(s.EQUAL);break;case bl:s.depthFunc(s.GEQUAL);break;case Al:s.depthFunc(s.GREATER);break;case wl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Z=pe}},setLocked:function(pe){D=pe},setClear:function(pe){me!==pe&&(le&&(pe=1-pe),s.clearDepth(pe),me=pe)},reset:function(){D=!1,G=null,Z=null,me=null,le=!1}}}function i(){let D=!1,le=null,G=null,Z=null,me=null,pe=null,ke=null,Tt=null,Gt=null;return{setTest:function(ct){D||(ct?de(s.STENCIL_TEST):Ne(s.STENCIL_TEST))},setMask:function(ct){le!==ct&&!D&&(s.stencilMask(ct),le=ct)},setFunc:function(ct,Ln,ri){(G!==ct||Z!==Ln||me!==ri)&&(s.stencilFunc(ct,Ln,ri),G=ct,Z=Ln,me=ri)},setOp:function(ct,Ln,ri){(pe!==ct||ke!==Ln||Tt!==ri)&&(s.stencilOp(ct,Ln,ri),pe=ct,ke=Ln,Tt=ri)},setLocked:function(ct){D=ct},setClear:function(ct){Gt!==ct&&(s.clearStencil(ct),Gt=ct)},reset:function(){D=!1,le=null,G=null,Z=null,me=null,pe=null,ke=null,Tt=null,Gt=null}}}const r=new t,o=new n,a=new i,c=new WeakMap,l=new WeakMap;let u={},h={},d=new WeakMap,p=[],_=null,g=!1,m=null,f=null,S=null,T=null,E=null,C=null,R=null,w=new Ie(0,0,0),L=0,b=!1,M=null,I=null,X=null,z=null,Q=null;const ee=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,ie=0;const V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(V)[1]),K=ie>=1):V.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),K=ie>=2);let he=null,ge={};const Te=s.getParameter(s.SCISSOR_BOX),Xe=s.getParameter(s.VIEWPORT),pt=new rt().fromArray(Te),$=new rt().fromArray(Xe);function ae(D,le,G,Z){const me=new Uint8Array(4),pe=s.createTexture();s.bindTexture(D,pe),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ke=0;ke<G;ke++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(le,0,s.RGBA,1,1,Z,0,s.RGBA,s.UNSIGNED_BYTE,me):s.texImage2D(le+ke,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,me);return pe}const ye={};ye[s.TEXTURE_2D]=ae(s.TEXTURE_2D,s.TEXTURE_2D,1),ye[s.TEXTURE_CUBE_MAP]=ae(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[s.TEXTURE_2D_ARRAY]=ae(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ye[s.TEXTURE_3D]=ae(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),de(s.DEPTH_TEST),o.setFunc(mr),je(!1),Ze(mh),de(s.CULL_FACE),N(Wi);function de(D){u[D]!==!0&&(s.enable(D),u[D]=!0)}function Ne(D){u[D]!==!1&&(s.disable(D),u[D]=!1)}function Be(D,le){return h[D]!==le?(s.bindFramebuffer(D,le),h[D]=le,D===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=le),D===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=le),!0):!1}function qe(D,le){let G=p,Z=!1;if(D){G=d.get(le),G===void 0&&(G=[],d.set(le,G));const me=D.textures;if(G.length!==me.length||G[0]!==s.COLOR_ATTACHMENT0){for(let pe=0,ke=me.length;pe<ke;pe++)G[pe]=s.COLOR_ATTACHMENT0+pe;G.length=me.length,Z=!0}}else G[0]!==s.BACK&&(G[0]=s.BACK,Z=!0);Z&&s.drawBuffers(G)}function yt(D){return _!==D?(s.useProgram(D),_=D,!0):!1}const et={[ls]:s.FUNC_ADD,[y_]:s.FUNC_SUBTRACT,[S_]:s.FUNC_REVERSE_SUBTRACT};et[T_]=s.MIN,et[b_]=s.MAX;const At={[A_]:s.ZERO,[w_]:s.ONE,[R_]:s.SRC_COLOR,[xl]:s.SRC_ALPHA,[D_]:s.SRC_ALPHA_SATURATE,[N_]:s.DST_COLOR,[L_]:s.DST_ALPHA,[C_]:s.ONE_MINUS_SRC_COLOR,[Ml]:s.ONE_MINUS_SRC_ALPHA,[P_]:s.ONE_MINUS_DST_COLOR,[I_]:s.ONE_MINUS_DST_ALPHA,[U_]:s.CONSTANT_COLOR,[O_]:s.ONE_MINUS_CONSTANT_COLOR,[F_]:s.CONSTANT_ALPHA,[B_]:s.ONE_MINUS_CONSTANT_ALPHA};function N(D,le,G,Z,me,pe,ke,Tt,Gt,ct){if(D===Wi){g===!0&&(Ne(s.BLEND),g=!1);return}if(g===!1&&(de(s.BLEND),g=!0),D!==E_){if(D!==m||ct!==b){if((f!==ls||E!==ls)&&(s.blendEquation(s.FUNC_ADD),f=ls,E=ls),ct)switch(D){case Xs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Zr:s.blendFunc(s.ONE,s.ONE);break;case _h:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case gh:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Xs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Zr:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case _h:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case gh:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}S=null,T=null,C=null,R=null,w.set(0,0,0),L=0,m=D,b=ct}return}me=me||le,pe=pe||G,ke=ke||Z,(le!==f||me!==E)&&(s.blendEquationSeparate(et[le],et[me]),f=le,E=me),(G!==S||Z!==T||pe!==C||ke!==R)&&(s.blendFuncSeparate(At[G],At[Z],At[pe],At[ke]),S=G,T=Z,C=pe,R=ke),(Tt.equals(w)===!1||Gt!==L)&&(s.blendColor(Tt.r,Tt.g,Tt.b,Gt),w.copy(Tt),L=Gt),m=D,b=!1}function Mn(D,le){D.side===Qn?Ne(s.CULL_FACE):de(s.CULL_FACE);let G=D.side===ln;le&&(G=!G),je(G),D.blending===Xs&&D.transparent===!1?N(Wi):N(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);const Z=D.stencilWrite;a.setTest(Z),Z&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),gt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?de(s.SAMPLE_ALPHA_TO_COVERAGE):Ne(s.SAMPLE_ALPHA_TO_COVERAGE)}function je(D){M!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),M=D)}function Ze(D){D!==x_?(de(s.CULL_FACE),D!==I&&(D===mh?s.cullFace(s.BACK):D===M_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ne(s.CULL_FACE),I=D}function be(D){D!==X&&(K&&s.lineWidth(D),X=D)}function gt(D,le,G){D?(de(s.POLYGON_OFFSET_FILL),(z!==le||Q!==G)&&(s.polygonOffset(le,G),z=le,Q=G)):Ne(s.POLYGON_OFFSET_FILL)}function Ae(D){D?de(s.SCISSOR_TEST):Ne(s.SCISSOR_TEST)}function A(D){D===void 0&&(D=s.TEXTURE0+ee-1),he!==D&&(s.activeTexture(D),he=D)}function x(D,le,G){G===void 0&&(he===null?G=s.TEXTURE0+ee-1:G=he);let Z=ge[G];Z===void 0&&(Z={type:void 0,texture:void 0},ge[G]=Z),(Z.type!==D||Z.texture!==le)&&(he!==G&&(s.activeTexture(G),he=G),s.bindTexture(D,le||ye[D]),Z.type=D,Z.texture=le)}function F(){const D=ge[he];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function j(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function te(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Se(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function fe(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ve(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function tt(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function oe(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xe(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Le(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pe(D){pt.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),pt.copy(D))}function Me(D){$.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),$.copy(D))}function Je(D,le){let G=l.get(le);G===void 0&&(G=new WeakMap,l.set(le,G));let Z=G.get(D);Z===void 0&&(Z=s.getUniformBlockIndex(le,D.name),G.set(D,Z))}function Ge(D,le){const Z=l.get(le).get(D);c.get(le)!==Z&&(s.uniformBlockBinding(le,Z,D.__bindingPointIndex),c.set(le,Z))}function mt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},he=null,ge={},h={},d=new WeakMap,p=[],_=null,g=!1,m=null,f=null,S=null,T=null,E=null,C=null,R=null,w=new Ie(0,0,0),L=0,b=!1,M=null,I=null,X=null,z=null,Q=null,pt.set(0,0,s.canvas.width,s.canvas.height),$.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:de,disable:Ne,bindFramebuffer:Be,drawBuffers:qe,useProgram:yt,setBlending:N,setMaterial:Mn,setFlipSided:je,setCullFace:Ze,setLineWidth:be,setPolygonOffset:gt,setScissorTest:Ae,activeTexture:A,bindTexture:x,unbindTexture:F,compressedTexImage2D:j,compressedTexImage3D:te,texImage2D:xe,texImage3D:Le,updateUBOMapping:Je,uniformBlockBinding:Ge,texStorage2D:tt,texStorage3D:oe,texSubImage2D:Y,texSubImage3D:Se,compressedTexSubImage2D:fe,compressedTexSubImage3D:ve,scissor:Pe,viewport:Me,reset:mt}}function ly(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ke,u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,x){return p?new OffscreenCanvas(A,x):ao("canvas")}function g(A,x,F){let j=1;const te=Ae(A);if((te.width>F||te.height>F)&&(j=F/Math.max(te.width,te.height)),j<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const Y=Math.floor(j*te.width),Se=Math.floor(j*te.height);h===void 0&&(h=_(Y,Se));const fe=x?_(Y,Se):h;return fe.width=Y,fe.height=Se,fe.getContext("2d").drawImage(A,0,0,Y,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+Y+"x"+Se+")."),fe}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),A;return A}function m(A){return A.generateMipmaps}function f(A){s.generateMipmap(A)}function S(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function T(A,x,F,j,te=!1){if(A!==null){if(s[A]!==void 0)return s[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Y=x;if(x===s.RED&&(F===s.FLOAT&&(Y=s.R32F),F===s.HALF_FLOAT&&(Y=s.R16F),F===s.UNSIGNED_BYTE&&(Y=s.R8)),x===s.RED_INTEGER&&(F===s.UNSIGNED_BYTE&&(Y=s.R8UI),F===s.UNSIGNED_SHORT&&(Y=s.R16UI),F===s.UNSIGNED_INT&&(Y=s.R32UI),F===s.BYTE&&(Y=s.R8I),F===s.SHORT&&(Y=s.R16I),F===s.INT&&(Y=s.R32I)),x===s.RG&&(F===s.FLOAT&&(Y=s.RG32F),F===s.HALF_FLOAT&&(Y=s.RG16F),F===s.UNSIGNED_BYTE&&(Y=s.RG8)),x===s.RG_INTEGER&&(F===s.UNSIGNED_BYTE&&(Y=s.RG8UI),F===s.UNSIGNED_SHORT&&(Y=s.RG16UI),F===s.UNSIGNED_INT&&(Y=s.RG32UI),F===s.BYTE&&(Y=s.RG8I),F===s.SHORT&&(Y=s.RG16I),F===s.INT&&(Y=s.RG32I)),x===s.RGB_INTEGER&&(F===s.UNSIGNED_BYTE&&(Y=s.RGB8UI),F===s.UNSIGNED_SHORT&&(Y=s.RGB16UI),F===s.UNSIGNED_INT&&(Y=s.RGB32UI),F===s.BYTE&&(Y=s.RGB8I),F===s.SHORT&&(Y=s.RGB16I),F===s.INT&&(Y=s.RGB32I)),x===s.RGBA_INTEGER&&(F===s.UNSIGNED_BYTE&&(Y=s.RGBA8UI),F===s.UNSIGNED_SHORT&&(Y=s.RGBA16UI),F===s.UNSIGNED_INT&&(Y=s.RGBA32UI),F===s.BYTE&&(Y=s.RGBA8I),F===s.SHORT&&(Y=s.RGBA16I),F===s.INT&&(Y=s.RGBA32I)),x===s.RGB&&F===s.UNSIGNED_INT_5_9_9_9_REV&&(Y=s.RGB9_E5),x===s.RGBA){const Se=te?$a:Qe.getTransfer(j);F===s.FLOAT&&(Y=s.RGBA32F),F===s.HALF_FLOAT&&(Y=s.RGBA16F),F===s.UNSIGNED_BYTE&&(Y=Se===ht?s.SRGB8_ALPHA8:s.RGBA8),F===s.UNSIGNED_SHORT_4_4_4_4&&(Y=s.RGBA4),F===s.UNSIGNED_SHORT_5_5_5_1&&(Y=s.RGB5_A1)}return(Y===s.R16F||Y===s.R32F||Y===s.RG16F||Y===s.RG32F||Y===s.RGBA16F||Y===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function E(A,x){let F;return A?x===null||x===xs||x===xr?F=s.DEPTH24_STENCIL8:x===Bn?F=s.DEPTH32F_STENCIL8:x===so&&(F=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===xs||x===xr?F=s.DEPTH_COMPONENT24:x===Bn?F=s.DEPTH_COMPONENT32F:x===so&&(F=s.DEPTH_COMPONENT16),F}function C(A,x){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==en&&A.minFilter!==vn?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function R(A){const x=A.target;x.removeEventListener("dispose",R),L(x),x.isVideoTexture&&u.delete(x)}function w(A){const x=A.target;x.removeEventListener("dispose",w),M(x)}function L(A){const x=n.get(A);if(x.__webglInit===void 0)return;const F=A.source,j=d.get(F);if(j){const te=j[x.__cacheKey];te.usedTimes--,te.usedTimes===0&&b(A),Object.keys(j).length===0&&d.delete(F)}n.remove(A)}function b(A){const x=n.get(A);s.deleteTexture(x.__webglTexture);const F=A.source,j=d.get(F);delete j[x.__cacheKey],o.memory.textures--}function M(A){const x=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(x.__webglFramebuffer[j]))for(let te=0;te<x.__webglFramebuffer[j].length;te++)s.deleteFramebuffer(x.__webglFramebuffer[j][te]);else s.deleteFramebuffer(x.__webglFramebuffer[j]);x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer[j])}else{if(Array.isArray(x.__webglFramebuffer))for(let j=0;j<x.__webglFramebuffer.length;j++)s.deleteFramebuffer(x.__webglFramebuffer[j]);else s.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&s.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let j=0;j<x.__webglColorRenderbuffer.length;j++)x.__webglColorRenderbuffer[j]&&s.deleteRenderbuffer(x.__webglColorRenderbuffer[j]);x.__webglDepthRenderbuffer&&s.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const F=A.textures;for(let j=0,te=F.length;j<te;j++){const Y=n.get(F[j]);Y.__webglTexture&&(s.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(F[j])}n.remove(A)}let I=0;function X(){I=0}function z(){const A=I;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),I+=1,A}function Q(A){const x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function ee(A,x){const F=n.get(A);if(A.isVideoTexture&&be(A),A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){const j=A.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(F,A,x);return}}t.bindTexture(s.TEXTURE_2D,F.__webglTexture,s.TEXTURE0+x)}function K(A,x){const F=n.get(A);if(A.version>0&&F.__version!==A.version){$(F,A,x);return}t.bindTexture(s.TEXTURE_2D_ARRAY,F.__webglTexture,s.TEXTURE0+x)}function ie(A,x){const F=n.get(A);if(A.version>0&&F.__version!==A.version){$(F,A,x);return}t.bindTexture(s.TEXTURE_3D,F.__webglTexture,s.TEXTURE0+x)}function V(A,x){const F=n.get(A);if(A.version>0&&F.__version!==A.version){ae(F,A,x);return}t.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+x)}const he={[vr]:s.REPEAT,[Gi]:s.CLAMP_TO_EDGE,[Ya]:s.MIRRORED_REPEAT},ge={[en]:s.NEAREST,[Df]:s.NEAREST_MIPMAP_NEAREST,[Yr]:s.NEAREST_MIPMAP_LINEAR,[vn]:s.LINEAR,[Ha]:s.LINEAR_MIPMAP_NEAREST,[Mi]:s.LINEAR_MIPMAP_LINEAR},Te={[Q_]:s.NEVER,[rg]:s.ALWAYS,[eg]:s.LESS,[qf]:s.LEQUAL,[tg]:s.EQUAL,[sg]:s.GEQUAL,[ng]:s.GREATER,[ig]:s.NOTEQUAL};function Xe(A,x){if(x.type===Bn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===vn||x.magFilter===Ha||x.magFilter===Yr||x.magFilter===Mi||x.minFilter===vn||x.minFilter===Ha||x.minFilter===Yr||x.minFilter===Mi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,he[x.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,he[x.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,he[x.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,ge[x.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,ge[x.minFilter]),x.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,Te[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===en||x.minFilter!==Yr&&x.minFilter!==Mi||x.type===Bn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");s.texParameterf(A,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function pt(A,x){let F=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",R));const j=x.source;let te=d.get(j);te===void 0&&(te={},d.set(j,te));const Y=Q(x);if(Y!==A.__cacheKey){te[Y]===void 0&&(te[Y]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,F=!0),te[Y].usedTimes++;const Se=te[A.__cacheKey];Se!==void 0&&(te[A.__cacheKey].usedTimes--,Se.usedTimes===0&&b(x)),A.__cacheKey=Y,A.__webglTexture=te[Y].texture}return F}function $(A,x,F){let j=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(j=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&(j=s.TEXTURE_3D);const te=pt(A,x),Y=x.source;t.bindTexture(j,A.__webglTexture,s.TEXTURE0+F);const Se=n.get(Y);if(Y.version!==Se.__version||te===!0){t.activeTexture(s.TEXTURE0+F);const fe=Qe.getPrimaries(Qe.workingColorSpace),ve=x.colorSpace===Fi?null:Qe.getPrimaries(x.colorSpace),tt=x.colorSpace===Fi||fe===ve?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let oe=g(x.image,!1,i.maxTextureSize);oe=gt(x,oe);const xe=r.convert(x.format,x.colorSpace),Le=r.convert(x.type);let Pe=T(x.internalFormat,xe,Le,x.colorSpace,x.isVideoTexture);Xe(j,x);let Me;const Je=x.mipmaps,Ge=x.isVideoTexture!==!0,mt=Se.__version===void 0||te===!0,D=Y.dataReady,le=C(x,oe);if(x.isDepthTexture)Pe=E(x.format===Mr,x.type),mt&&(Ge?t.texStorage2D(s.TEXTURE_2D,1,Pe,oe.width,oe.height):t.texImage2D(s.TEXTURE_2D,0,Pe,oe.width,oe.height,0,xe,Le,null));else if(x.isDataTexture)if(Je.length>0){Ge&&mt&&t.texStorage2D(s.TEXTURE_2D,le,Pe,Je[0].width,Je[0].height);for(let G=0,Z=Je.length;G<Z;G++)Me=Je[G],Ge?D&&t.texSubImage2D(s.TEXTURE_2D,G,0,0,Me.width,Me.height,xe,Le,Me.data):t.texImage2D(s.TEXTURE_2D,G,Pe,Me.width,Me.height,0,xe,Le,Me.data);x.generateMipmaps=!1}else Ge?(mt&&t.texStorage2D(s.TEXTURE_2D,le,Pe,oe.width,oe.height),D&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,oe.width,oe.height,xe,Le,oe.data)):t.texImage2D(s.TEXTURE_2D,0,Pe,oe.width,oe.height,0,xe,Le,oe.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ge&&mt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,le,Pe,Je[0].width,Je[0].height,oe.depth);for(let G=0,Z=Je.length;G<Z;G++)if(Me=Je[G],x.format!==Cn)if(xe!==null)if(Ge){if(D)if(x.layerUpdates.size>0){const me=od(Me.width,Me.height,x.format,x.type);for(const pe of x.layerUpdates){const ke=Me.data.subarray(pe*me/Me.data.BYTES_PER_ELEMENT,(pe+1)*me/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,G,0,0,pe,Me.width,Me.height,1,xe,ke)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,G,0,0,0,Me.width,Me.height,oe.depth,xe,Me.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,G,Pe,Me.width,Me.height,oe.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?D&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,G,0,0,0,Me.width,Me.height,oe.depth,xe,Le,Me.data):t.texImage3D(s.TEXTURE_2D_ARRAY,G,Pe,Me.width,Me.height,oe.depth,0,xe,Le,Me.data)}else{Ge&&mt&&t.texStorage2D(s.TEXTURE_2D,le,Pe,Je[0].width,Je[0].height);for(let G=0,Z=Je.length;G<Z;G++)Me=Je[G],x.format!==Cn?xe!==null?Ge?D&&t.compressedTexSubImage2D(s.TEXTURE_2D,G,0,0,Me.width,Me.height,xe,Me.data):t.compressedTexImage2D(s.TEXTURE_2D,G,Pe,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?D&&t.texSubImage2D(s.TEXTURE_2D,G,0,0,Me.width,Me.height,xe,Le,Me.data):t.texImage2D(s.TEXTURE_2D,G,Pe,Me.width,Me.height,0,xe,Le,Me.data)}else if(x.isDataArrayTexture)if(Ge){if(mt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,le,Pe,oe.width,oe.height,oe.depth),D)if(x.layerUpdates.size>0){const G=od(oe.width,oe.height,x.format,x.type);for(const Z of x.layerUpdates){const me=oe.data.subarray(Z*G/oe.data.BYTES_PER_ELEMENT,(Z+1)*G/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Z,oe.width,oe.height,1,xe,Le,me)}x.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,xe,Le,oe.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Pe,oe.width,oe.height,oe.depth,0,xe,Le,oe.data);else if(x.isData3DTexture)Ge?(mt&&t.texStorage3D(s.TEXTURE_3D,le,Pe,oe.width,oe.height,oe.depth),D&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,xe,Le,oe.data)):t.texImage3D(s.TEXTURE_3D,0,Pe,oe.width,oe.height,oe.depth,0,xe,Le,oe.data);else if(x.isFramebufferTexture){if(mt)if(Ge)t.texStorage2D(s.TEXTURE_2D,le,Pe,oe.width,oe.height);else{let G=oe.width,Z=oe.height;for(let me=0;me<le;me++)t.texImage2D(s.TEXTURE_2D,me,Pe,G,Z,0,xe,Le,null),G>>=1,Z>>=1}}else if(Je.length>0){if(Ge&&mt){const G=Ae(Je[0]);t.texStorage2D(s.TEXTURE_2D,le,Pe,G.width,G.height)}for(let G=0,Z=Je.length;G<Z;G++)Me=Je[G],Ge?D&&t.texSubImage2D(s.TEXTURE_2D,G,0,0,xe,Le,Me):t.texImage2D(s.TEXTURE_2D,G,Pe,xe,Le,Me);x.generateMipmaps=!1}else if(Ge){if(mt){const G=Ae(oe);t.texStorage2D(s.TEXTURE_2D,le,Pe,G.width,G.height)}D&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,xe,Le,oe)}else t.texImage2D(s.TEXTURE_2D,0,Pe,xe,Le,oe);m(x)&&f(j),Se.__version=Y.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function ae(A,x,F){if(x.image.length!==6)return;const j=pt(A,x),te=x.source;t.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+F);const Y=n.get(te);if(te.version!==Y.__version||j===!0){t.activeTexture(s.TEXTURE0+F);const Se=Qe.getPrimaries(Qe.workingColorSpace),fe=x.colorSpace===Fi?null:Qe.getPrimaries(x.colorSpace),ve=x.colorSpace===Fi||Se===fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const tt=x.isCompressedTexture||x.image[0].isCompressedTexture,oe=x.image[0]&&x.image[0].isDataTexture,xe=[];for(let Z=0;Z<6;Z++)!tt&&!oe?xe[Z]=g(x.image[Z],!0,i.maxCubemapSize):xe[Z]=oe?x.image[Z].image:x.image[Z],xe[Z]=gt(x,xe[Z]);const Le=xe[0],Pe=r.convert(x.format,x.colorSpace),Me=r.convert(x.type),Je=T(x.internalFormat,Pe,Me,x.colorSpace),Ge=x.isVideoTexture!==!0,mt=Y.__version===void 0||j===!0,D=te.dataReady;let le=C(x,Le);Xe(s.TEXTURE_CUBE_MAP,x);let G;if(tt){Ge&&mt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,le,Je,Le.width,Le.height);for(let Z=0;Z<6;Z++){G=xe[Z].mipmaps;for(let me=0;me<G.length;me++){const pe=G[me];x.format!==Cn?Pe!==null?Ge?D&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me,0,0,pe.width,pe.height,Pe,pe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me,Je,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me,0,0,pe.width,pe.height,Pe,Me,pe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me,Je,pe.width,pe.height,0,Pe,Me,pe.data)}}}else{if(G=x.mipmaps,Ge&&mt){G.length>0&&le++;const Z=Ae(xe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,le,Je,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(oe){Ge?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,xe[Z].width,xe[Z].height,Pe,Me,xe[Z].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Je,xe[Z].width,xe[Z].height,0,Pe,Me,xe[Z].data);for(let me=0;me<G.length;me++){const ke=G[me].image[Z].image;Ge?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me+1,0,0,ke.width,ke.height,Pe,Me,ke.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me+1,Je,ke.width,ke.height,0,Pe,Me,ke.data)}}else{Ge?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Pe,Me,xe[Z]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Je,Pe,Me,xe[Z]);for(let me=0;me<G.length;me++){const pe=G[me];Ge?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me+1,0,0,Pe,Me,pe.image[Z]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me+1,Je,Pe,Me,pe.image[Z])}}}m(x)&&f(s.TEXTURE_CUBE_MAP),Y.__version=te.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function ye(A,x,F,j,te,Y){const Se=r.convert(F.format,F.colorSpace),fe=r.convert(F.type),ve=T(F.internalFormat,Se,fe,F.colorSpace),tt=n.get(x),oe=n.get(F);if(oe.__renderTarget=x,!tt.__hasExternalTextures){const xe=Math.max(1,x.width>>Y),Le=Math.max(1,x.height>>Y);te===s.TEXTURE_3D||te===s.TEXTURE_2D_ARRAY?t.texImage3D(te,Y,ve,xe,Le,x.depth,0,Se,fe,null):t.texImage2D(te,Y,ve,xe,Le,0,Se,fe,null)}t.bindFramebuffer(s.FRAMEBUFFER,A),Ze(x)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,j,te,oe.__webglTexture,0,je(x)):(te===s.TEXTURE_2D||te>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,j,te,oe.__webglTexture,Y),t.bindFramebuffer(s.FRAMEBUFFER,null)}function de(A,x,F){if(s.bindRenderbuffer(s.RENDERBUFFER,A),x.depthBuffer){const j=x.depthTexture,te=j&&j.isDepthTexture?j.type:null,Y=E(x.stencilBuffer,te),Se=x.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=je(x);Ze(x)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,fe,Y,x.width,x.height):F?s.renderbufferStorageMultisample(s.RENDERBUFFER,fe,Y,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,Y,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Se,s.RENDERBUFFER,A)}else{const j=x.textures;for(let te=0;te<j.length;te++){const Y=j[te],Se=r.convert(Y.format,Y.colorSpace),fe=r.convert(Y.type),ve=T(Y.internalFormat,Se,fe,Y.colorSpace),tt=je(x);F&&Ze(x)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,tt,ve,x.width,x.height):Ze(x)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,tt,ve,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,ve,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ne(A,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(x.depthTexture);j.__renderTarget=x,(!j.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),ee(x.depthTexture,0);const te=j.__webglTexture,Y=je(x);if(x.depthTexture.format===qs)Ze(x)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,te,0,Y):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,te,0);else if(x.depthTexture.format===Mr)Ze(x)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,te,0,Y):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Be(A){const x=n.get(A),F=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){const j=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),j){const te=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,j.removeEventListener("dispose",te)};j.addEventListener("dispose",te),x.__depthDisposeCallback=te}x.__boundDepthTexture=j}if(A.depthTexture&&!x.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Ne(x.__webglFramebuffer,A)}else if(F){x.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[j]),x.__webglDepthbuffer[j]===void 0)x.__webglDepthbuffer[j]=s.createRenderbuffer(),de(x.__webglDepthbuffer[j],A,!1);else{const te=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Y=x.__webglDepthbuffer[j];s.bindRenderbuffer(s.RENDERBUFFER,Y),s.framebufferRenderbuffer(s.FRAMEBUFFER,te,s.RENDERBUFFER,Y)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=s.createRenderbuffer(),de(x.__webglDepthbuffer,A,!1);else{const j=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,te=x.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,te),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,te)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function qe(A,x,F){const j=n.get(A);x!==void 0&&ye(j.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),F!==void 0&&Be(A)}function yt(A){const x=A.texture,F=n.get(A),j=n.get(x);A.addEventListener("dispose",w);const te=A.textures,Y=A.isWebGLCubeRenderTarget===!0,Se=te.length>1;if(Se||(j.__webglTexture===void 0&&(j.__webglTexture=s.createTexture()),j.__version=x.version,o.memory.textures++),Y){F.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer[fe]=[];for(let ve=0;ve<x.mipmaps.length;ve++)F.__webglFramebuffer[fe][ve]=s.createFramebuffer()}else F.__webglFramebuffer[fe]=s.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer=[];for(let fe=0;fe<x.mipmaps.length;fe++)F.__webglFramebuffer[fe]=s.createFramebuffer()}else F.__webglFramebuffer=s.createFramebuffer();if(Se)for(let fe=0,ve=te.length;fe<ve;fe++){const tt=n.get(te[fe]);tt.__webglTexture===void 0&&(tt.__webglTexture=s.createTexture(),o.memory.textures++)}if(A.samples>0&&Ze(A)===!1){F.__webglMultisampledFramebuffer=s.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let fe=0;fe<te.length;fe++){const ve=te[fe];F.__webglColorRenderbuffer[fe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,F.__webglColorRenderbuffer[fe]);const tt=r.convert(ve.format,ve.colorSpace),oe=r.convert(ve.type),xe=T(ve.internalFormat,tt,oe,ve.colorSpace,A.isXRRenderTarget===!0),Le=je(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,Le,xe,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,F.__webglColorRenderbuffer[fe])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(F.__webglDepthRenderbuffer=s.createRenderbuffer(),de(F.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Y){t.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture),Xe(s.TEXTURE_CUBE_MAP,x);for(let fe=0;fe<6;fe++)if(x.mipmaps&&x.mipmaps.length>0)for(let ve=0;ve<x.mipmaps.length;ve++)ye(F.__webglFramebuffer[fe][ve],A,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ve);else ye(F.__webglFramebuffer[fe],A,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(x)&&f(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let fe=0,ve=te.length;fe<ve;fe++){const tt=te[fe],oe=n.get(tt);t.bindTexture(s.TEXTURE_2D,oe.__webglTexture),Xe(s.TEXTURE_2D,tt),ye(F.__webglFramebuffer,A,tt,s.COLOR_ATTACHMENT0+fe,s.TEXTURE_2D,0),m(tt)&&f(s.TEXTURE_2D)}t.unbindTexture()}else{let fe=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(fe=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(fe,j.__webglTexture),Xe(fe,x),x.mipmaps&&x.mipmaps.length>0)for(let ve=0;ve<x.mipmaps.length;ve++)ye(F.__webglFramebuffer[ve],A,x,s.COLOR_ATTACHMENT0,fe,ve);else ye(F.__webglFramebuffer,A,x,s.COLOR_ATTACHMENT0,fe,0);m(x)&&f(fe),t.unbindTexture()}A.depthBuffer&&Be(A)}function et(A){const x=A.textures;for(let F=0,j=x.length;F<j;F++){const te=x[F];if(m(te)){const Y=S(A),Se=n.get(te).__webglTexture;t.bindTexture(Y,Se),f(Y),t.unbindTexture()}}}const At=[],N=[];function Mn(A){if(A.samples>0){if(Ze(A)===!1){const x=A.textures,F=A.width,j=A.height;let te=s.COLOR_BUFFER_BIT;const Y=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Se=n.get(A),fe=x.length>1;if(fe)for(let ve=0;ve<x.length;ve++)t.bindFramebuffer(s.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Se.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let ve=0;ve<x.length;ve++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(te|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(te|=s.STENCIL_BUFFER_BIT)),fe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Se.__webglColorRenderbuffer[ve]);const tt=n.get(x[ve]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,tt,0)}s.blitFramebuffer(0,0,F,j,0,0,F,j,te,s.NEAREST),c===!0&&(At.length=0,N.length=0,At.push(s.COLOR_ATTACHMENT0+ve),A.depthBuffer&&A.resolveDepthBuffer===!1&&(At.push(Y),N.push(Y),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,N)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,At))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),fe)for(let ve=0;ve<x.length;ve++){t.bindFramebuffer(s.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.RENDERBUFFER,Se.__webglColorRenderbuffer[ve]);const tt=n.get(x[ve]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Se.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.TEXTURE_2D,tt,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const x=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[x])}}}function je(A){return Math.min(i.maxSamples,A.samples)}function Ze(A){const x=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function be(A){const x=o.render.frame;u.get(A)!==x&&(u.set(A,x),A.update())}function gt(A,x){const F=A.colorSpace,j=A.format,te=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||F!==nn&&F!==Fi&&(Qe.getTransfer(F)===ht?(j!==Cn||te!==wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),x}function Ae(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=X,this.setTexture2D=ee,this.setTexture2DArray=K,this.setTexture3D=ie,this.setTextureCube=V,this.rebindTextures=qe,this.setupRenderTarget=yt,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=Mn,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=Ze}function uy(s,e){function t(n,i=Fi){let r;const o=Qe.getTransfer(i);if(n===wi)return s.UNSIGNED_BYTE;if(n===Mu)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Eu)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Ff)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Uf)return s.BYTE;if(n===Of)return s.SHORT;if(n===so)return s.UNSIGNED_SHORT;if(n===xu)return s.INT;if(n===xs)return s.UNSIGNED_INT;if(n===Bn)return s.FLOAT;if(n===Zo)return s.HALF_FLOAT;if(n===Bf)return s.ALPHA;if(n===kf)return s.RGB;if(n===Cn)return s.RGBA;if(n===Hf)return s.LUMINANCE;if(n===zf)return s.LUMINANCE_ALPHA;if(n===qs)return s.DEPTH_COMPONENT;if(n===Mr)return s.DEPTH_STENCIL;if(n===yu)return s.RED;if(n===Su)return s.RED_INTEGER;if(n===Gf)return s.RG;if(n===Tu)return s.RG_INTEGER;if(n===bu)return s.RGBA_INTEGER;if(n===za||n===Ga||n===Va||n===Wa)if(o===ht)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===za)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ga)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===za)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ga)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Va)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Wa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ll||n===Il||n===Nl||n===Pl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ll)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Il)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Nl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Pl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Dl||n===Ul||n===Ol)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Dl||n===Ul)return o===ht?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ol)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Fl||n===Bl||n===kl||n===Hl||n===zl||n===Gl||n===Vl||n===Wl||n===Xl||n===ql||n===Yl||n===$l||n===Kl||n===jl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Fl)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Bl)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===kl)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Hl)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===zl)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Gl)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Vl)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Wl)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Xl)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ql)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Yl)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===$l)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Kl)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===jl)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Xa||n===Zl||n===Jl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Xa)return o===ht?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Zl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Jl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Vf||n===Ql||n===eu||n===tu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Xa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ql)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===eu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===tu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===xr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const hy={type:"move"};class Jc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new kn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new kn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new kn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),f=this._getHandJoint(l,g);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,_=.005;l.inputState.pinching&&d>p+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(hy)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new kn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const dy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fy=`
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

}`;class py{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Ot,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new $i({vertexShader:dy,fragmentShader:fy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new It(new Qo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class my extends Ar{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,p=null,_=null;const g=new py,m=t.getContextAttributes();let f=null,S=null;const T=[],E=[],C=new Ke;let R=null;const w=new Qt;w.viewport=new rt;const L=new Qt;L.viewport=new rt;const b=[w,L],M=new w0;let I=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ae=T[$];return ae===void 0&&(ae=new Jc,T[$]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function($){let ae=T[$];return ae===void 0&&(ae=new Jc,T[$]=ae),ae.getGripSpace()},this.getHand=function($){let ae=T[$];return ae===void 0&&(ae=new Jc,T[$]=ae),ae.getHandSpace()};function z($){const ae=E.indexOf($.inputSource);if(ae===-1)return;const ye=T[ae];ye!==void 0&&(ye.update($.inputSource,$.frame,l||o),ye.dispatchEvent({type:$.type,data:$.inputSource}))}function Q(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",Q),i.removeEventListener("inputsourceschange",ee);for(let $=0;$<T.length;$++){const ae=E[$];ae!==null&&(E[$]=null,T[$].disconnect(ae))}I=null,X=null,g.reset(),e.setRenderTarget(f),p=null,d=null,h=null,i=null,S=null,pt.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(f=e.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",Q),i.addEventListener("inputsourceschange",ee),m.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(C),i.renderState.layers===void 0){const ae={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,t,ae),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Ms(p.framebufferWidth,p.framebufferHeight,{format:Cn,type:wi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ae=null,ye=null,de=null;m.depth&&(de=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=m.stencil?Mr:qs,ye=m.stencil?xr:xs);const Ne={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:r};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(Ne),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new Ms(d.textureWidth,d.textureHeight,{format:Cn,type:wi,depthTexture:new ap(d.textureWidth,d.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),pt.setContext(i),pt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ee($){for(let ae=0;ae<$.removed.length;ae++){const ye=$.removed[ae],de=E.indexOf(ye);de>=0&&(E[de]=null,T[de].disconnect(ye))}for(let ae=0;ae<$.added.length;ae++){const ye=$.added[ae];let de=E.indexOf(ye);if(de===-1){for(let Be=0;Be<T.length;Be++)if(Be>=E.length){E.push(ye),de=Be;break}else if(E[Be]===null){E[Be]=ye,de=Be;break}if(de===-1)break}const Ne=T[de];Ne&&Ne.connect(ye)}}const K=new P,ie=new P;function V($,ae,ye){K.setFromMatrixPosition(ae.matrixWorld),ie.setFromMatrixPosition(ye.matrixWorld);const de=K.distanceTo(ie),Ne=ae.projectionMatrix.elements,Be=ye.projectionMatrix.elements,qe=Ne[14]/(Ne[10]-1),yt=Ne[14]/(Ne[10]+1),et=(Ne[9]+1)/Ne[5],At=(Ne[9]-1)/Ne[5],N=(Ne[8]-1)/Ne[0],Mn=(Be[8]+1)/Be[0],je=qe*N,Ze=qe*Mn,be=de/(-N+Mn),gt=be*-N;if(ae.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(gt),$.translateZ(be),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ne[10]===-1)$.projectionMatrix.copy(ae.projectionMatrix),$.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const Ae=qe+be,A=yt+be,x=je-gt,F=Ze+(de-gt),j=et*yt/A*Ae,te=At*yt/A*Ae;$.projectionMatrix.makePerspective(x,F,j,te,Ae,A),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function he($,ae){ae===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ae.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let ae=$.near,ye=$.far;g.texture!==null&&(g.depthNear>0&&(ae=g.depthNear),g.depthFar>0&&(ye=g.depthFar)),M.near=L.near=w.near=ae,M.far=L.far=w.far=ye,(I!==M.near||X!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),I=M.near,X=M.far),w.layers.mask=$.layers.mask|2,L.layers.mask=$.layers.mask|4,M.layers.mask=w.layers.mask|L.layers.mask;const de=$.parent,Ne=M.cameras;he(M,de);for(let Be=0;Be<Ne.length;Be++)he(Ne[Be],de);Ne.length===2?V(M,w,L):M.projectionMatrix.copy(w.projectionMatrix),ge($,M,de)};function ge($,ae,ye){ye===null?$.matrix.copy(ae.matrixWorld):($.matrix.copy(ye.matrixWorld),$.matrix.invert(),$.matrix.multiply(ae.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ae.projectionMatrix),$.projectionMatrixInverse.copy(ae.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Er*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function($){c=$,d!==null&&(d.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(M)};let Te=null;function Xe($,ae){if(u=ae.getViewerPose(l||o),_=ae,u!==null){const ye=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let de=!1;ye.length!==M.cameras.length&&(M.cameras.length=0,de=!0);for(let Be=0;Be<ye.length;Be++){const qe=ye[Be];let yt=null;if(p!==null)yt=p.getViewport(qe);else{const At=h.getViewSubImage(d,qe);yt=At.viewport,Be===0&&(e.setRenderTargetTextures(S,At.colorTexture,d.ignoreDepthValues?void 0:At.depthStencilTexture),e.setRenderTarget(S))}let et=b[Be];et===void 0&&(et=new Qt,et.layers.enable(Be),et.viewport=new rt,b[Be]=et),et.matrix.fromArray(qe.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(qe.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(yt.x,yt.y,yt.width,yt.height),Be===0&&(M.matrix.copy(et.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),de===!0&&M.cameras.push(et)}const Ne=i.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")){const Be=h.getDepthInformation(ye[0]);Be&&Be.isValid&&Be.texture&&g.init(e,Be,i.renderState)}}for(let ye=0;ye<T.length;ye++){const de=E[ye],Ne=T[ye];de!==null&&Ne!==void 0&&Ne.update(de,ae,l||o)}Te&&Te($,ae),ae.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ae}),_=null}const pt=new dp;pt.setAnimationLoop(Xe),this.setAnimationLoop=function($){Te=$},this.dispose=function(){}}}const ss=new ti,_y=new ze;function gy(s,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,tp(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,S,T,E){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),h(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,E)):f.isMeshMatcapMaterial?(r(m,f),_(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),g(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,S,T):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===ln&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===ln&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const S=e.get(f),T=S.envMap,E=S.envMapRotation;T&&(m.envMap.value=T,ss.copy(E),ss.x*=-1,ss.y*=-1,ss.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(ss.y*=-1,ss.z*=-1),m.envMapRotation.value.setFromMatrix4(_y.makeRotationFromEuler(ss)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,S,T){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*S,m.scale.value=T*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,S){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===ln&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){const S=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function vy(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,T){const E=T.program;n.uniformBlockBinding(S,E)}function l(S,T){let E=i[S.id];E===void 0&&(_(S),E=u(S),i[S.id]=E,S.addEventListener("dispose",m));const C=T.program;n.updateUBOMapping(S,C);const R=e.render.frame;r[S.id]!==R&&(d(S),r[S.id]=R)}function u(S){const T=h();S.__bindingPointIndex=T;const E=s.createBuffer(),C=S.__size,R=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,E),s.bufferData(s.UNIFORM_BUFFER,C,R),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,T,E),E}function h(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const T=i[S.id],E=S.uniforms,C=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,T);for(let R=0,w=E.length;R<w;R++){const L=Array.isArray(E[R])?E[R]:[E[R]];for(let b=0,M=L.length;b<M;b++){const I=L[b];if(p(I,R,b,C)===!0){const X=I.__offset,z=Array.isArray(I.value)?I.value:[I.value];let Q=0;for(let ee=0;ee<z.length;ee++){const K=z[ee],ie=g(K);typeof K=="number"||typeof K=="boolean"?(I.__data[0]=K,s.bufferSubData(s.UNIFORM_BUFFER,X+Q,I.__data)):K.isMatrix3?(I.__data[0]=K.elements[0],I.__data[1]=K.elements[1],I.__data[2]=K.elements[2],I.__data[3]=0,I.__data[4]=K.elements[3],I.__data[5]=K.elements[4],I.__data[6]=K.elements[5],I.__data[7]=0,I.__data[8]=K.elements[6],I.__data[9]=K.elements[7],I.__data[10]=K.elements[8],I.__data[11]=0):(K.toArray(I.__data,Q),Q+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,X,I.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(S,T,E,C){const R=S.value,w=T+"_"+E;if(C[w]===void 0)return typeof R=="number"||typeof R=="boolean"?C[w]=R:C[w]=R.clone(),!0;{const L=C[w];if(typeof R=="number"||typeof R=="boolean"){if(L!==R)return C[w]=R,!0}else if(L.equals(R)===!1)return L.copy(R),!0}return!1}function _(S){const T=S.uniforms;let E=0;const C=16;for(let w=0,L=T.length;w<L;w++){const b=Array.isArray(T[w])?T[w]:[T[w]];for(let M=0,I=b.length;M<I;M++){const X=b[M],z=Array.isArray(X.value)?X.value:[X.value];for(let Q=0,ee=z.length;Q<ee;Q++){const K=z[Q],ie=g(K),V=E%C,he=V%ie.boundary,ge=V+he;E+=he,ge!==0&&C-ge<ie.storage&&(E+=C-ge),X.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=E,E+=ie.storage}}}const R=E%C;return R>0&&(E+=C-R),S.__size=E,S.__cache={},this}function g(S){const T={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(T.boundary=4,T.storage=4):S.isVector2?(T.boundary=8,T.storage=8):S.isVector3||S.isColor?(T.boundary=16,T.storage=12):S.isVector4?(T.boundary=16,T.storage=16):S.isMatrix3?(T.boundary=48,T.storage=48):S.isMatrix4?(T.boundary=64,T.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),T}function m(S){const T=S.target;T.removeEventListener("dispose",m);const E=o.indexOf(T.__bindingPointIndex);o.splice(E,1),s.deleteBuffer(i[T.id]),delete i[T.id],delete r[T.id]}function f(){for(const S in i)s.deleteBuffer(i[S]);o=[],i={},r={}}return{bind:c,update:l,dispose:f}}class xy{constructor(e={}){const{canvas:t=yg(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const _=new Uint32Array(4),g=new Int32Array(4);let m=null,f=null;const S=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=kt,this.toneMapping=Xi,this.toneMappingExposure=1;const E=this;let C=!1,R=0,w=0,L=null,b=-1,M=null;const I=new rt,X=new rt;let z=null;const Q=new Ie(0);let ee=0,K=t.width,ie=t.height,V=1,he=null,ge=null;const Te=new rt(0,0,K,ie),Xe=new rt(0,0,K,ie);let pt=!1;const $=new Lu;let ae=!1,ye=!1;const de=new ze,Ne=new ze,Be=new P,qe=new rt,yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let et=!1;function At(){return L===null?V:1}let N=n;function Mn(y,U){return t.getContext(y,U)}try{const y={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${vu}`),t.addEventListener("webglcontextlost",Z,!1),t.addEventListener("webglcontextrestored",me,!1),t.addEventListener("webglcontextcreationerror",pe,!1),N===null){const U="webgl2";if(N=Mn(U,y),N===null)throw Mn(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let je,Ze,be,gt,Ae,A,x,F,j,te,Y,Se,fe,ve,tt,oe,xe,Le,Pe,Me,Je,Ge,mt,D;function le(){je=new RM(N),je.init(),Ge=new uy(N,je),Ze=new yM(N,je,e,Ge),be=new cy(N,je),Ze.reverseDepthBuffer&&d&&be.buffers.depth.setReversed(!0),gt=new IM(N),Ae=new KE,A=new ly(N,je,be,Ae,Ze,Ge,gt),x=new TM(E),F=new wM(E),j=new B0(N),mt=new MM(N,j),te=new CM(N,j,gt,mt),Y=new PM(N,te,j,gt),Pe=new NM(N,Ze,A),oe=new SM(Ae),Se=new $E(E,x,F,je,Ze,mt,oe),fe=new gy(E,Ae),ve=new ZE,tt=new iy(je),Le=new xM(E,x,F,be,Y,p,c),xe=new oy(E,Y,Ze),D=new vy(N,gt,Ze,be),Me=new EM(N,je,gt),Je=new LM(N,je,gt),gt.programs=Se.programs,E.capabilities=Ze,E.extensions=je,E.properties=Ae,E.renderLists=ve,E.shadowMap=xe,E.state=be,E.info=gt}le();const G=new my(E,N);this.xr=G,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const y=je.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=je.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(y){y!==void 0&&(V=y,this.setSize(K,ie,!1))},this.getSize=function(y){return y.set(K,ie)},this.setSize=function(y,U,B=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=y,ie=U,t.width=Math.floor(y*V),t.height=Math.floor(U*V),B===!0&&(t.style.width=y+"px",t.style.height=U+"px"),this.setViewport(0,0,y,U)},this.getDrawingBufferSize=function(y){return y.set(K*V,ie*V).floor()},this.setDrawingBufferSize=function(y,U,B){K=y,ie=U,V=B,t.width=Math.floor(y*B),t.height=Math.floor(U*B),this.setViewport(0,0,y,U)},this.getCurrentViewport=function(y){return y.copy(I)},this.getViewport=function(y){return y.copy(Te)},this.setViewport=function(y,U,B,k){y.isVector4?Te.set(y.x,y.y,y.z,y.w):Te.set(y,U,B,k),be.viewport(I.copy(Te).multiplyScalar(V).round())},this.getScissor=function(y){return y.copy(Xe)},this.setScissor=function(y,U,B,k){y.isVector4?Xe.set(y.x,y.y,y.z,y.w):Xe.set(y,U,B,k),be.scissor(X.copy(Xe).multiplyScalar(V).round())},this.getScissorTest=function(){return pt},this.setScissorTest=function(y){be.setScissorTest(pt=y)},this.setOpaqueSort=function(y){he=y},this.setTransparentSort=function(y){ge=y},this.getClearColor=function(y){return y.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor.apply(Le,arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha.apply(Le,arguments)},this.clear=function(y=!0,U=!0,B=!0){let k=0;if(y){let O=!1;if(L!==null){const se=L.texture.format;O=se===bu||se===Tu||se===Su}if(O){const se=L.texture.type,ue=se===wi||se===xs||se===so||se===xr||se===Mu||se===Eu,_e=Le.getClearColor(),Ee=Le.getClearAlpha(),De=_e.r,Ue=_e.g,Re=_e.b;ue?(_[0]=De,_[1]=Ue,_[2]=Re,_[3]=Ee,N.clearBufferuiv(N.COLOR,0,_)):(g[0]=De,g[1]=Ue,g[2]=Re,g[3]=Ee,N.clearBufferiv(N.COLOR,0,g))}else k|=N.COLOR_BUFFER_BIT}U&&(k|=N.DEPTH_BUFFER_BIT),B&&(k|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Z,!1),t.removeEventListener("webglcontextrestored",me,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),Le.dispose(),ve.dispose(),tt.dispose(),Ae.dispose(),x.dispose(),F.dispose(),Y.dispose(),mt.dispose(),D.dispose(),Se.dispose(),G.dispose(),G.removeEventListener("sessionstart",Hu),G.removeEventListener("sessionend",zu),Zi.stop()};function Z(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const y=gt.autoReset,U=xe.enabled,B=xe.autoUpdate,k=xe.needsUpdate,O=xe.type;le(),gt.autoReset=y,xe.enabled=U,xe.autoUpdate=B,xe.needsUpdate=k,xe.type=O}function pe(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function ke(y){const U=y.target;U.removeEventListener("dispose",ke),Tt(U)}function Tt(y){Gt(y),Ae.remove(y)}function Gt(y){const U=Ae.get(y).programs;U!==void 0&&(U.forEach(function(B){Se.releaseProgram(B)}),y.isShaderMaterial&&Se.releaseShaderCache(y))}this.renderBufferDirect=function(y,U,B,k,O,se){U===null&&(U=yt);const ue=O.isMesh&&O.matrixWorld.determinant()<0,_e=Rp(y,U,B,k,O);be.setMaterial(k,ue);let Ee=B.index,De=1;if(k.wireframe===!0){if(Ee=te.getWireframeAttribute(B),Ee===void 0)return;De=2}const Ue=B.drawRange,Re=B.attributes.position;let nt=Ue.start*De,ot=(Ue.start+Ue.count)*De;se!==null&&(nt=Math.max(nt,se.start*De),ot=Math.min(ot,(se.start+se.count)*De)),Ee!==null?(nt=Math.max(nt,0),ot=Math.min(ot,Ee.count)):Re!=null&&(nt=Math.max(nt,0),ot=Math.min(ot,Re.count));const Rt=ot-nt;if(Rt<0||Rt===1/0)return;mt.setup(O,k,_e,B,Ee);let bt,it=Me;if(Ee!==null&&(bt=j.get(Ee),it=Je,it.setIndex(bt)),O.isMesh)k.wireframe===!0?(be.setLineWidth(k.wireframeLinewidth*At()),it.setMode(N.LINES)):it.setMode(N.TRIANGLES);else if(O.isLine){let Ce=k.linewidth;Ce===void 0&&(Ce=1),be.setLineWidth(Ce*At()),O.isLineSegments?it.setMode(N.LINES):O.isLineLoop?it.setMode(N.LINE_LOOP):it.setMode(N.LINE_STRIP)}else O.isPoints?it.setMode(N.POINTS):O.isSprite&&it.setMode(N.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)it.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(je.get("WEBGL_multi_draw"))it.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Ce=O._multiDrawStarts,Ft=O._multiDrawCounts,at=O._multiDrawCount,In=Ee?j.get(Ee).bytesPerElement:1,Es=Ae.get(k).currentProgram.getUniforms();for(let dn=0;dn<at;dn++)Es.setValue(N,"_gl_DrawID",dn),it.render(Ce[dn]/In,Ft[dn])}else if(O.isInstancedMesh)it.renderInstances(nt,Rt,O.count);else if(B.isInstancedBufferGeometry){const Ce=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Ft=Math.min(B.instanceCount,Ce);it.renderInstances(nt,Rt,Ft)}else it.render(nt,Rt)};function ct(y,U,B){y.transparent===!0&&y.side===Qn&&y.forceSinglePass===!1?(y.side=ln,y.needsUpdate=!0,na(y,U,B),y.side=Ai,y.needsUpdate=!0,na(y,U,B),y.side=Qn):na(y,U,B)}this.compile=function(y,U,B=null){B===null&&(B=y),f=tt.get(B),f.init(U),T.push(f),B.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),y!==B&&y.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),f.setupLights();const k=new Set;return y.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const se=O.material;if(se)if(Array.isArray(se))for(let ue=0;ue<se.length;ue++){const _e=se[ue];ct(_e,B,O),k.add(_e)}else ct(se,B,O),k.add(se)}),T.pop(),f=null,k},this.compileAsync=function(y,U,B=null){const k=this.compile(y,U,B);return new Promise(O=>{function se(){if(k.forEach(function(ue){Ae.get(ue).currentProgram.isReady()&&k.delete(ue)}),k.size===0){O(y);return}setTimeout(se,10)}je.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let Ln=null;function ri(y){Ln&&Ln(y)}function Hu(){Zi.stop()}function zu(){Zi.start()}const Zi=new dp;Zi.setAnimationLoop(ri),typeof self<"u"&&Zi.setContext(self),this.setAnimationLoop=function(y){Ln=y,G.setAnimationLoop(y),y===null?Zi.stop():Zi.start()},G.addEventListener("sessionstart",Hu),G.addEventListener("sessionend",zu),this.render=function(y,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(U),U=G.getCamera()),y.isScene===!0&&y.onBeforeRender(E,y,U,L),f=tt.get(y,T.length),f.init(U),T.push(f),Ne.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),$.setFromProjectionMatrix(Ne),ye=this.localClippingEnabled,ae=oe.init(this.clippingPlanes,ye),m=ve.get(y,S.length),m.init(),S.push(m),G.enabled===!0&&G.isPresenting===!0){const se=E.xr.getDepthSensingMesh();se!==null&&dc(se,U,-1/0,E.sortObjects)}dc(y,U,0,E.sortObjects),m.finish(),E.sortObjects===!0&&m.sort(he,ge),et=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,et&&Le.addToRenderList(m,y),this.info.render.frame++,ae===!0&&oe.beginShadows();const B=f.state.shadowsArray;xe.render(B,y,U),ae===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=m.opaque,O=m.transmissive;if(f.setupLights(),U.isArrayCamera){const se=U.cameras;if(O.length>0)for(let ue=0,_e=se.length;ue<_e;ue++){const Ee=se[ue];Vu(k,O,y,Ee)}et&&Le.render(y);for(let ue=0,_e=se.length;ue<_e;ue++){const Ee=se[ue];Gu(m,y,Ee,Ee.viewport)}}else O.length>0&&Vu(k,O,y,U),et&&Le.render(y),Gu(m,y,U);L!==null&&(A.updateMultisampleRenderTarget(L),A.updateRenderTargetMipmap(L)),y.isScene===!0&&y.onAfterRender(E,y,U),mt.resetDefaultState(),b=-1,M=null,T.pop(),T.length>0?(f=T[T.length-1],ae===!0&&oe.setGlobalState(E.clippingPlanes,f.state.camera)):f=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function dc(y,U,B,k){if(y.visible===!1)return;if(y.layers.test(U.layers)){if(y.isGroup)B=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(U);else if(y.isLight)f.pushLight(y),y.castShadow&&f.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||$.intersectsSprite(y)){k&&qe.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Ne);const ue=Y.update(y),_e=y.material;_e.visible&&m.push(y,ue,_e,B,qe.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||$.intersectsObject(y))){const ue=Y.update(y),_e=y.material;if(k&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),qe.copy(y.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),qe.copy(ue.boundingSphere.center)),qe.applyMatrix4(y.matrixWorld).applyMatrix4(Ne)),Array.isArray(_e)){const Ee=ue.groups;for(let De=0,Ue=Ee.length;De<Ue;De++){const Re=Ee[De],nt=_e[Re.materialIndex];nt&&nt.visible&&m.push(y,ue,nt,B,qe.z,Re)}}else _e.visible&&m.push(y,ue,_e,B,qe.z,null)}}const se=y.children;for(let ue=0,_e=se.length;ue<_e;ue++)dc(se[ue],U,B,k)}function Gu(y,U,B,k){const O=y.opaque,se=y.transmissive,ue=y.transparent;f.setupLightsView(B),ae===!0&&oe.setGlobalState(E.clippingPlanes,B),k&&be.viewport(I.copy(k)),O.length>0&&ta(O,U,B),se.length>0&&ta(se,U,B),ue.length>0&&ta(ue,U,B),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function Vu(y,U,B,k){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[k.id]===void 0&&(f.state.transmissionRenderTarget[k.id]=new Ms(1,1,{generateMipmaps:!0,type:je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float")?Zo:wi,minFilter:Mi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const se=f.state.transmissionRenderTarget[k.id],ue=k.viewport||I;se.setSize(ue.z,ue.w);const _e=E.getRenderTarget();E.setRenderTarget(se),E.getClearColor(Q),ee=E.getClearAlpha(),ee<1&&E.setClearColor(16777215,.5),E.clear(),et&&Le.render(B);const Ee=E.toneMapping;E.toneMapping=Xi;const De=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),f.setupLightsView(k),ae===!0&&oe.setGlobalState(E.clippingPlanes,k),ta(y,B,k),A.updateMultisampleRenderTarget(se),A.updateRenderTargetMipmap(se),je.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let Re=0,nt=U.length;Re<nt;Re++){const ot=U[Re],Rt=ot.object,bt=ot.geometry,it=ot.material,Ce=ot.group;if(it.side===Qn&&Rt.layers.test(k.layers)){const Ft=it.side;it.side=ln,it.needsUpdate=!0,Wu(Rt,B,k,bt,it,Ce),it.side=Ft,it.needsUpdate=!0,Ue=!0}}Ue===!0&&(A.updateMultisampleRenderTarget(se),A.updateRenderTargetMipmap(se))}E.setRenderTarget(_e),E.setClearColor(Q,ee),De!==void 0&&(k.viewport=De),E.toneMapping=Ee}function ta(y,U,B){const k=U.isScene===!0?U.overrideMaterial:null;for(let O=0,se=y.length;O<se;O++){const ue=y[O],_e=ue.object,Ee=ue.geometry,De=k===null?ue.material:k,Ue=ue.group;_e.layers.test(B.layers)&&Wu(_e,U,B,Ee,De,Ue)}}function Wu(y,U,B,k,O,se){y.onBeforeRender(E,U,B,k,O,se),y.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),O.onBeforeRender(E,U,B,k,y,se),O.transparent===!0&&O.side===Qn&&O.forceSinglePass===!1?(O.side=ln,O.needsUpdate=!0,E.renderBufferDirect(B,U,k,O,y,se),O.side=Ai,O.needsUpdate=!0,E.renderBufferDirect(B,U,k,O,y,se),O.side=Qn):E.renderBufferDirect(B,U,k,O,y,se),y.onAfterRender(E,U,B,k,O,se)}function na(y,U,B){U.isScene!==!0&&(U=yt);const k=Ae.get(y),O=f.state.lights,se=f.state.shadowsArray,ue=O.state.version,_e=Se.getParameters(y,O.state,se,U,B),Ee=Se.getProgramCacheKey(_e);let De=k.programs;k.environment=y.isMeshStandardMaterial?U.environment:null,k.fog=U.fog,k.envMap=(y.isMeshStandardMaterial?F:x).get(y.envMap||k.environment),k.envMapRotation=k.environment!==null&&y.envMap===null?U.environmentRotation:y.envMapRotation,De===void 0&&(y.addEventListener("dispose",ke),De=new Map,k.programs=De);let Ue=De.get(Ee);if(Ue!==void 0){if(k.currentProgram===Ue&&k.lightsStateVersion===ue)return qu(y,_e),Ue}else _e.uniforms=Se.getUniforms(y),y.onBeforeCompile(_e,E),Ue=Se.acquireProgram(_e,Ee),De.set(Ee,Ue),k.uniforms=_e.uniforms;const Re=k.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Re.clippingPlanes=oe.uniform),qu(y,_e),k.needsLights=Lp(y),k.lightsStateVersion=ue,k.needsLights&&(Re.ambientLightColor.value=O.state.ambient,Re.lightProbe.value=O.state.probe,Re.directionalLights.value=O.state.directional,Re.directionalLightShadows.value=O.state.directionalShadow,Re.spotLights.value=O.state.spot,Re.spotLightShadows.value=O.state.spotShadow,Re.rectAreaLights.value=O.state.rectArea,Re.ltc_1.value=O.state.rectAreaLTC1,Re.ltc_2.value=O.state.rectAreaLTC2,Re.pointLights.value=O.state.point,Re.pointLightShadows.value=O.state.pointShadow,Re.hemisphereLights.value=O.state.hemi,Re.directionalShadowMap.value=O.state.directionalShadowMap,Re.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Re.spotShadowMap.value=O.state.spotShadowMap,Re.spotLightMatrix.value=O.state.spotLightMatrix,Re.spotLightMap.value=O.state.spotLightMap,Re.pointShadowMap.value=O.state.pointShadowMap,Re.pointShadowMatrix.value=O.state.pointShadowMatrix),k.currentProgram=Ue,k.uniformsList=null,Ue}function Xu(y){if(y.uniformsList===null){const U=y.currentProgram.getUniforms();y.uniformsList=qa.seqWithValue(U.seq,y.uniforms)}return y.uniformsList}function qu(y,U){const B=Ae.get(y);B.outputColorSpace=U.outputColorSpace,B.batching=U.batching,B.batchingColor=U.batchingColor,B.instancing=U.instancing,B.instancingColor=U.instancingColor,B.instancingMorph=U.instancingMorph,B.skinning=U.skinning,B.morphTargets=U.morphTargets,B.morphNormals=U.morphNormals,B.morphColors=U.morphColors,B.morphTargetsCount=U.morphTargetsCount,B.numClippingPlanes=U.numClippingPlanes,B.numIntersection=U.numClipIntersection,B.vertexAlphas=U.vertexAlphas,B.vertexTangents=U.vertexTangents,B.toneMapping=U.toneMapping}function Rp(y,U,B,k,O){U.isScene!==!0&&(U=yt),A.resetTextureUnits();const se=U.fog,ue=k.isMeshStandardMaterial?U.environment:null,_e=L===null?E.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:nn,Ee=(k.isMeshStandardMaterial?F:x).get(k.envMap||ue),De=k.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ue=!!B.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Re=!!B.morphAttributes.position,nt=!!B.morphAttributes.normal,ot=!!B.morphAttributes.color;let Rt=Xi;k.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Rt=E.toneMapping);const bt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,it=bt!==void 0?bt.length:0,Ce=Ae.get(k),Ft=f.state.lights;if(ae===!0&&(ye===!0||y!==M)){const $t=y===M&&k.id===b;oe.setState(k,y,$t)}let at=!1;k.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==Ft.state.version||Ce.outputColorSpace!==_e||O.isBatchedMesh&&Ce.batching===!1||!O.isBatchedMesh&&Ce.batching===!0||O.isBatchedMesh&&Ce.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ce.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ce.instancing===!1||!O.isInstancedMesh&&Ce.instancing===!0||O.isSkinnedMesh&&Ce.skinning===!1||!O.isSkinnedMesh&&Ce.skinning===!0||O.isInstancedMesh&&Ce.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ce.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ce.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ce.instancingMorph===!1&&O.morphTexture!==null||Ce.envMap!==Ee||k.fog===!0&&Ce.fog!==se||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==oe.numPlanes||Ce.numIntersection!==oe.numIntersection)||Ce.vertexAlphas!==De||Ce.vertexTangents!==Ue||Ce.morphTargets!==Re||Ce.morphNormals!==nt||Ce.morphColors!==ot||Ce.toneMapping!==Rt||Ce.morphTargetsCount!==it)&&(at=!0):(at=!0,Ce.__version=k.version);let In=Ce.currentProgram;at===!0&&(In=na(k,U,O));let Es=!1,dn=!1,Ir=!1;const xt=In.getUniforms(),En=Ce.uniforms;if(be.useProgram(In.program)&&(Es=!0,dn=!0,Ir=!0),k.id!==b&&(b=k.id,dn=!0),Es||M!==y){be.buffers.depth.getReversed()?(de.copy(y.projectionMatrix),Tg(de),bg(de),xt.setValue(N,"projectionMatrix",de)):xt.setValue(N,"projectionMatrix",y.projectionMatrix),xt.setValue(N,"viewMatrix",y.matrixWorldInverse);const sn=xt.map.cameraPosition;sn!==void 0&&sn.setValue(N,Be.setFromMatrixPosition(y.matrixWorld)),Ze.logarithmicDepthBuffer&&xt.setValue(N,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&xt.setValue(N,"isOrthographic",y.isOrthographicCamera===!0),M!==y&&(M=y,dn=!0,Ir=!0)}if(O.isSkinnedMesh){xt.setOptional(N,O,"bindMatrix"),xt.setOptional(N,O,"bindMatrixInverse");const $t=O.skeleton;$t&&($t.boneTexture===null&&$t.computeBoneTexture(),xt.setValue(N,"boneTexture",$t.boneTexture,A))}O.isBatchedMesh&&(xt.setOptional(N,O,"batchingTexture"),xt.setValue(N,"batchingTexture",O._matricesTexture,A),xt.setOptional(N,O,"batchingIdTexture"),xt.setValue(N,"batchingIdTexture",O._indirectTexture,A),xt.setOptional(N,O,"batchingColorTexture"),O._colorsTexture!==null&&xt.setValue(N,"batchingColorTexture",O._colorsTexture,A));const yn=B.morphAttributes;if((yn.position!==void 0||yn.normal!==void 0||yn.color!==void 0)&&Pe.update(O,B,In),(dn||Ce.receiveShadow!==O.receiveShadow)&&(Ce.receiveShadow=O.receiveShadow,xt.setValue(N,"receiveShadow",O.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(En.envMap.value=Ee,En.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&U.environment!==null&&(En.envMapIntensity.value=U.environmentIntensity),dn&&(xt.setValue(N,"toneMappingExposure",E.toneMappingExposure),Ce.needsLights&&Cp(En,Ir),se&&k.fog===!0&&fe.refreshFogUniforms(En,se),fe.refreshMaterialUniforms(En,k,V,ie,f.state.transmissionRenderTarget[y.id]),qa.upload(N,Xu(Ce),En,A)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(qa.upload(N,Xu(Ce),En,A),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&xt.setValue(N,"center",O.center),xt.setValue(N,"modelViewMatrix",O.modelViewMatrix),xt.setValue(N,"normalMatrix",O.normalMatrix),xt.setValue(N,"modelMatrix",O.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const $t=k.uniformsGroups;for(let sn=0,fc=$t.length;sn<fc;sn++){const Ji=$t[sn];D.update(Ji,In),D.bind(Ji,In)}}return In}function Cp(y,U){y.ambientLightColor.needsUpdate=U,y.lightProbe.needsUpdate=U,y.directionalLights.needsUpdate=U,y.directionalLightShadows.needsUpdate=U,y.pointLights.needsUpdate=U,y.pointLightShadows.needsUpdate=U,y.spotLights.needsUpdate=U,y.spotLightShadows.needsUpdate=U,y.rectAreaLights.needsUpdate=U,y.hemisphereLights.needsUpdate=U}function Lp(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(y,U,B){Ae.get(y.texture).__webglTexture=U,Ae.get(y.depthTexture).__webglTexture=B;const k=Ae.get(y);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=B===void 0,k.__autoAllocateDepthBuffer||je.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,U){const B=Ae.get(y);B.__webglFramebuffer=U,B.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(y,U=0,B=0){L=y,R=U,w=B;let k=!0,O=null,se=!1,ue=!1;if(y){const Ee=Ae.get(y);if(Ee.__useDefaultFramebuffer!==void 0)be.bindFramebuffer(N.FRAMEBUFFER,null),k=!1;else if(Ee.__webglFramebuffer===void 0)A.setupRenderTarget(y);else if(Ee.__hasExternalTextures)A.rebindTextures(y,Ae.get(y.texture).__webglTexture,Ae.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Re=y.depthTexture;if(Ee.__boundDepthTexture!==Re){if(Re!==null&&Ae.has(Re)&&(y.width!==Re.image.width||y.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(y)}}const De=y.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(ue=!0);const Ue=Ae.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ue[U])?O=Ue[U][B]:O=Ue[U],se=!0):y.samples>0&&A.useMultisampledRTT(y)===!1?O=Ae.get(y).__webglMultisampledFramebuffer:Array.isArray(Ue)?O=Ue[B]:O=Ue,I.copy(y.viewport),X.copy(y.scissor),z=y.scissorTest}else I.copy(Te).multiplyScalar(V).floor(),X.copy(Xe).multiplyScalar(V).floor(),z=pt;if(be.bindFramebuffer(N.FRAMEBUFFER,O)&&k&&be.drawBuffers(y,O),be.viewport(I),be.scissor(X),be.setScissorTest(z),se){const Ee=Ae.get(y.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ee.__webglTexture,B)}else if(ue){const Ee=Ae.get(y.texture),De=U||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ee.__webglTexture,B||0,De)}b=-1},this.readRenderTargetPixels=function(y,U,B,k,O,se,ue){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=Ae.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ue!==void 0&&(_e=_e[ue]),_e){be.bindFramebuffer(N.FRAMEBUFFER,_e);try{const Ee=y.texture,De=Ee.format,Ue=Ee.type;if(!Ze.textureFormatReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ze.textureTypeReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=y.width-k&&B>=0&&B<=y.height-O&&N.readPixels(U,B,k,O,Ge.convert(De),Ge.convert(Ue),se)}finally{const Ee=L!==null?Ae.get(L).__webglFramebuffer:null;be.bindFramebuffer(N.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(y,U,B,k,O,se,ue){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=Ae.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ue!==void 0&&(_e=_e[ue]),_e){const Ee=y.texture,De=Ee.format,Ue=Ee.type;if(!Ze.textureFormatReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ze.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=y.width-k&&B>=0&&B<=y.height-O){be.bindFramebuffer(N.FRAMEBUFFER,_e);const Re=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Re),N.bufferData(N.PIXEL_PACK_BUFFER,se.byteLength,N.STREAM_READ),N.readPixels(U,B,k,O,Ge.convert(De),Ge.convert(Ue),0);const nt=L!==null?Ae.get(L).__webglFramebuffer:null;be.bindFramebuffer(N.FRAMEBUFFER,nt);const ot=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Sg(N,ot,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Re),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,se),N.deleteBuffer(Re),N.deleteSync(ot),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,U=null,B=0){y.isTexture!==!0&&(Gs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,y=arguments[1]);const k=Math.pow(2,-B),O=Math.floor(y.image.width*k),se=Math.floor(y.image.height*k),ue=U!==null?U.x:0,_e=U!==null?U.y:0;A.setTexture2D(y,0),N.copyTexSubImage2D(N.TEXTURE_2D,B,0,0,ue,_e,O,se),be.unbindTexture()};const Ip=N.createFramebuffer(),Np=N.createFramebuffer();this.copyTextureToTexture=function(y,U,B=null,k=null,O=0,se=null){y.isTexture!==!0&&(Gs("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,y=arguments[1],U=arguments[2],se=arguments[3]||0,B=null),se===null&&(O!==0?(Gs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),se=O,O=0):se=0);let ue,_e,Ee,De,Ue,Re,nt,ot,Rt;const bt=y.isCompressedTexture?y.mipmaps[se]:y.image;if(B!==null)ue=B.max.x-B.min.x,_e=B.max.y-B.min.y,Ee=B.isBox3?B.max.z-B.min.z:1,De=B.min.x,Ue=B.min.y,Re=B.isBox3?B.min.z:0;else{const yn=Math.pow(2,-O);ue=Math.floor(bt.width*yn),_e=Math.floor(bt.height*yn),y.isDataArrayTexture?Ee=bt.depth:y.isData3DTexture?Ee=Math.floor(bt.depth*yn):Ee=1,De=0,Ue=0,Re=0}k!==null?(nt=k.x,ot=k.y,Rt=k.z):(nt=0,ot=0,Rt=0);const it=Ge.convert(U.format),Ce=Ge.convert(U.type);let Ft;U.isData3DTexture?(A.setTexture3D(U,0),Ft=N.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(A.setTexture2DArray(U,0),Ft=N.TEXTURE_2D_ARRAY):(A.setTexture2D(U,0),Ft=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,U.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,U.unpackAlignment);const at=N.getParameter(N.UNPACK_ROW_LENGTH),In=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Es=N.getParameter(N.UNPACK_SKIP_PIXELS),dn=N.getParameter(N.UNPACK_SKIP_ROWS),Ir=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,bt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,bt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,De),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ue),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Re);const xt=y.isDataArrayTexture||y.isData3DTexture,En=U.isDataArrayTexture||U.isData3DTexture;if(y.isDepthTexture){const yn=Ae.get(y),$t=Ae.get(U),sn=Ae.get(yn.__renderTarget),fc=Ae.get($t.__renderTarget);be.bindFramebuffer(N.READ_FRAMEBUFFER,sn.__webglFramebuffer),be.bindFramebuffer(N.DRAW_FRAMEBUFFER,fc.__webglFramebuffer);for(let Ji=0;Ji<Ee;Ji++)xt&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ae.get(y).__webglTexture,O,Re+Ji),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ae.get(U).__webglTexture,se,Rt+Ji)),N.blitFramebuffer(De,Ue,ue,_e,nt,ot,ue,_e,N.DEPTH_BUFFER_BIT,N.NEAREST);be.bindFramebuffer(N.READ_FRAMEBUFFER,null),be.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(O!==0||y.isRenderTargetTexture||Ae.has(y)){const yn=Ae.get(y),$t=Ae.get(U);be.bindFramebuffer(N.READ_FRAMEBUFFER,Ip),be.bindFramebuffer(N.DRAW_FRAMEBUFFER,Np);for(let sn=0;sn<Ee;sn++)xt?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,yn.__webglTexture,O,Re+sn):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,yn.__webglTexture,O),En?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,$t.__webglTexture,se,Rt+sn):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,$t.__webglTexture,se),O!==0?N.blitFramebuffer(De,Ue,ue,_e,nt,ot,ue,_e,N.COLOR_BUFFER_BIT,N.NEAREST):En?N.copyTexSubImage3D(Ft,se,nt,ot,Rt+sn,De,Ue,ue,_e):N.copyTexSubImage2D(Ft,se,nt,ot,De,Ue,ue,_e);be.bindFramebuffer(N.READ_FRAMEBUFFER,null),be.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else En?y.isDataTexture||y.isData3DTexture?N.texSubImage3D(Ft,se,nt,ot,Rt,ue,_e,Ee,it,Ce,bt.data):U.isCompressedArrayTexture?N.compressedTexSubImage3D(Ft,se,nt,ot,Rt,ue,_e,Ee,it,bt.data):N.texSubImage3D(Ft,se,nt,ot,Rt,ue,_e,Ee,it,Ce,bt):y.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,se,nt,ot,ue,_e,it,Ce,bt.data):y.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,se,nt,ot,bt.width,bt.height,it,bt.data):N.texSubImage2D(N.TEXTURE_2D,se,nt,ot,ue,_e,it,Ce,bt);N.pixelStorei(N.UNPACK_ROW_LENGTH,at),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,In),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Es),N.pixelStorei(N.UNPACK_SKIP_ROWS,dn),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ir),se===0&&U.generateMipmaps&&N.generateMipmap(Ft),be.unbindTexture()},this.copyTextureToTexture3D=function(y,U,B=null,k=null,O=0){return y.isTexture!==!0&&(Gs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,k=arguments[1]||null,y=arguments[2],U=arguments[3],O=arguments[4]||0),Gs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,U,B,k,O)},this.initRenderTarget=function(y){Ae.get(y).__webglFramebuffer===void 0&&A.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?A.setTextureCube(y,0):y.isData3DTexture?A.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?A.setTexture2DArray(y,0):A.setTexture2D(y,0),be.unbindTexture()},this.resetState=function(){R=0,w=0,L=null,be.reset(),mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}}function Id(s,e){if(e===K_)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===nu||e===Wf){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===nu)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class My extends Cr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new by(t)}),this.register(function(t){return new Ay(t)}),this.register(function(t){return new Uy(t)}),this.register(function(t){return new Oy(t)}),this.register(function(t){return new Fy(t)}),this.register(function(t){return new Ry(t)}),this.register(function(t){return new Cy(t)}),this.register(function(t){return new Ly(t)}),this.register(function(t){return new Iy(t)}),this.register(function(t){return new Ty(t)}),this.register(function(t){return new Ny(t)}),this.register(function(t){return new wy(t)}),this.register(function(t){return new Dy(t)}),this.register(function(t){return new Py(t)}),this.register(function(t){return new yy(t)}),this.register(function(t){return new By(t)}),this.register(function(t){return new ky(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=eo.extractUrlBase(e);o=eo.resolveURL(l,this.path)}else o=eo.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new up(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===gp){try{o[$e.KHR_BINARY_GLTF]=new Hy(e)}catch(h){i&&i(h);return}r=JSON.parse(o[$e.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new Qy(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case $e.KHR_MATERIALS_UNLIT:o[h]=new Sy;break;case $e.KHR_DRACO_MESH_COMPRESSION:o[h]=new zy(r,this.dracoLoader);break;case $e.KHR_TEXTURE_TRANSFORM:o[h]=new Gy;break;case $e.KHR_MESH_QUANTIZATION:o[h]=new Vy;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function Ey(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const $e={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class yy{constructor(e){this.parser=e,this.name=$e.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const u=new Ie(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],nn);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new au(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new hp(u),l.distance=h;break;case"spot":l=new S0(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,fi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class Sy{constructor(){this.name=$e.KHR_MATERIALS_UNLIT}getMaterialType(){return yi}extendParams(e,t,n){const i=[];e.color=new Ie(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],nn),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,kt))}return Promise.all(i)}}class Ty{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class by{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ii}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ke(a,a)}return Promise.all(r)}}class Ay{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ii}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class wy{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ii}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class Ry{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ii}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Ie(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],nn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,kt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class Cy{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ii}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class Ly{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ii}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ie().setRGB(a[0],a[1],a[2],nn),Promise.all(r)}}class Iy{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ii}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class Ny{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ii}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ie().setRGB(a[0],a[1],a[2],nn),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,kt)),Promise.all(r)}}class Py{constructor(e){this.parser=e,this.name=$e.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ii}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class Dy{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ii}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class Uy{constructor(e){this.parser=e,this.name=$e.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class Oy{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Fy{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class By{constructor(e){this.name=$e.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=i.byteOffset||0,l=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(p),u,h,d,i.mode,i.filter),p})})}else return null}}class ky{constructor(e){this.name=$e.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==bn.TRIANGLES&&l.mode!==bn.TRIANGLE_STRIP&&l.mode!==bn.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const u=l.pop(),h=u.isGroup?u.children:[u],d=l[0].count,p=[];for(const _ of h){const g=new ze,m=new P,f=new ji,S=new P(1,1,1),T=new e0(_.geometry,_.material,d);for(let E=0;E<d;E++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,E),c.ROTATION&&f.fromBufferAttribute(c.ROTATION,E),c.SCALE&&S.fromBufferAttribute(c.SCALE,E),T.setMatrixAt(E,g.compose(m,f,S));for(const E in c)if(E==="_COLOR_0"){const C=c[E];T.instanceColor=new su(C.array,C.itemSize,C.normalized)}else E!=="TRANSLATION"&&E!=="ROTATION"&&E!=="SCALE"&&_.geometry.setAttribute(E,c[E]);Et.prototype.copy.call(T,_),this.parser.assignFinalMaterial(T),p.push(T)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const gp="glTF",Gr=12,Nd={JSON:1313821514,BIN:5130562};class Hy{constructor(e){this.name=$e.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Gr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==gp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Gr,r=new DataView(e,Gr);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===Nd.JSON){const l=new Uint8Array(e,Gr+o,a);this.content=n.decode(l)}else if(c===Nd.BIN){const l=Gr+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class zy{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=$e.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const u in o){const h=lu[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=lu[u]||u.toLowerCase();if(o[u]!==void 0){const d=n.accessors[e.attributes[u]],p=$s[d.componentType];l[h]=p.name,c[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){i.decodeDracoFile(u,function(p){for(const _ in p.attributes){const g=p.attributes[_],m=c[_];m!==void 0&&(g.normalized=m)}h(p)},a,l,nn,d)})})}}class Gy{constructor(){this.name=$e.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Vy{constructor(){this.name=$e.KHR_MESH_QUANTIZATION}}class vp extends ea{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=i-t,h=(n-t)/u,d=h*h,p=d*h,_=e*l,g=_-l,m=-2*p+3*d,f=p-d,S=1-m,T=f-d+h;for(let E=0;E!==a;E++){const C=o[g+E+a],R=o[g+E+c]*u,w=o[_+E+a],L=o[_+E]*u;r[E]=S*C+T*R+m*w+f*L}return r}}const Wy=new ji;class Xy extends vp{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return Wy.fromArray(r).normalize().toArray(r),r}}const bn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},$s={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Pd={9728:en,9729:vn,9984:Df,9985:Ha,9986:Yr,9987:Mi},Dd={33071:Gi,33648:Ya,10497:vr},Qc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},lu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Di={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},qy={CUBICSPLINE:void 0,LINEAR:oo,STEP:ro},el={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Yy(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new ds({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ai})),s.DefaultMaterial}function rs(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function fi(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function $y(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,u=e.length;l<u;l++){const h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;o.push(d)}if(i){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;a.push(d)}if(r){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const u=l[0],h=l[1],d=l[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function Ky(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function jy(s){let e;const t=s.extensions&&s.extensions[$e.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+tl(t.attributes):e=s.indices+":"+tl(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+tl(s.targets[n]);return e}function tl(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function uu(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Zy(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Jy=new ze;class Qy{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Ey,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new M0(this.options.manager):this.textureLoader=new A0(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new up(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return rs(r,a,i),fi(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,u]of o.children.entries())r(u,a.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[$e.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(eo.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Qc[i.type],a=$s[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new zt(l,o,c))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=Qc[i.type],l=$s[i.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,d=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,_=i.normalized===!0;let g,m;if(p&&p!==h){const f=Math.floor(d/p),S="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+f+":"+i.count;let T=t.cache.get(S);T||(g=new l(a,f*p,i.count*p/u),T=new Kg(g,p/u),t.cache.add(S,T)),m=new Ru(T,c,d%p/u,_)}else a===null?g=new l(i.count*c):g=new l(a,d,i.count*c),m=new zt(g,c,_);if(i.sparse!==void 0){const f=Qc.SCALAR,S=$s[i.sparse.indices.componentType],T=i.sparse.indices.byteOffset||0,E=i.sparse.values.byteOffset||0,C=new S(o[1],T,i.sparse.count*f),R=new l(o[2],E,i.sparse.count*c);a!==null&&(m=new zt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let w=0,L=C.length;w<L;w++){const b=C[w];if(m.setX(b,R[w*c]),c>=2&&m.setY(b,R[w*c+1]),c>=3&&m.setZ(b,R[w*c+2]),c>=4&&m.setW(b,R[w*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=_}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return u.magFilter=Pd[d.magFilter]||vn,u.minFilter=Pd[d.minFilter]||Mi,u.wrapS=Dd[d.wrapS]||vr,u.wrapT=Dd[d.wrapT]||vr,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==en&&u.minFilter!==vn,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=i.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(h){l=!0;const d=new Blob([h],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(h){return new Promise(function(d,p){let _=d;t.isImageBitmapLoader===!0&&(_=function(g){const m=new Ot(g);m.needsUpdate=!0,d(m)}),t.load(eo.resolveURL(h,r.path),_,void 0,p)})}).then(function(h){return l===!0&&a.revokeObjectURL(c),fi(h,o),h.userData.mimeType=o.mimeType||Zy(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[$e.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[$e.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[$e.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Ja,ei.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new op,ei.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return ds}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},c=r.extensions||{},l=[];if(c[$e.KHR_MATERIALS_UNLIT]){const h=i[$e.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),l.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new Ie(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],nn),a.opacity=d[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",h.baseColorTexture,kt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Qn);const u=r.alphaMode||el.OPAQUE;if(u===el.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===el.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==yi&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ke(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==yi&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==yi){const h=r.emissiveFactor;a.emissive=new Ie().setRGB(h[0],h[1],h[2],nn)}return r.emissiveTexture!==void 0&&o!==yi&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,kt)),Promise.all(l).then(function(){const h=new o(a);return r.name&&(h.name=r.name),fi(h,r),t.associations.set(h,{materials:e}),r.extensions&&rs(i,h,r),h})}createUniqueName(e){const t=ut.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[$e.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Ud(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],u=jy(l),h=i[u];if(h)o.push(h.promise);else{let d;l.extensions&&l.extensions[$e.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=Ud(new un,l,t),i[u]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const u=o[c].material===void 0?Yy(this.cache):this.getDependency("material",o[c].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let p=0,_=u.length;p<_;p++){const g=u[p],m=o[p];let f;const S=l[p];if(m.mode===bn.TRIANGLES||m.mode===bn.TRIANGLE_STRIP||m.mode===bn.TRIANGLE_FAN||m.mode===void 0)f=r.isSkinnedMesh===!0?new Zg(g,S):new It(g,S),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),m.mode===bn.TRIANGLE_STRIP?f.geometry=Id(f.geometry,Wf):m.mode===bn.TRIANGLE_FAN&&(f.geometry=Id(f.geometry,nu));else if(m.mode===bn.LINES)f=new i0(g,S);else if(m.mode===bn.LINE_STRIP)f=new Iu(g,S);else if(m.mode===bn.LINE_LOOP)f=new s0(g,S);else if(m.mode===bn.POINTS)f=new ou(g,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&Ky(f,r),f.name=t.createUniqueName(r.name||"mesh_"+e),fi(f,r),m.extensions&&rs(i,f,m),t.assignFinalMaterial(f),h.push(f)}for(let p=0,_=h.length;p<_;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return r.extensions&&rs(i,h[0],r),h[0];const d=new kn;r.extensions&&rs(i,d,r),t.associations.set(d,{meshes:e});for(let p=0,_=h.length;p<_;p++)d.add(h[p]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Qt(Yf.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Du(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),fi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],c=[];for(let l=0,u=o.length;l<u;l++){const h=o[l];if(h){a.push(h);const d=new ze;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Cu(a,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],u=[];for(let h=0,d=i.channels.length;h<d;h++){const p=i.channels[h],_=i.samplers[p.sampler],g=p.target,m=g.node,f=i.parameters!==void 0?i.parameters[_.input]:_.input,S=i.parameters!==void 0?i.parameters[_.output]:_.output;g.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",f)),c.push(this.getDependency("accessor",S)),l.push(_),u.push(g))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){const d=h[0],p=h[1],_=h[2],g=h[3],m=h[4],f=[];for(let S=0,T=d.length;S<T;S++){const E=d[S],C=p[S],R=_[S],w=g[S],L=m[S];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();const b=n._createAnimationTracks(E,C,R,w,L);if(b)for(let M=0;M<b.length;M++)f.push(b[M])}return new f0(r,void 0,f)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,u=a.length;l<u;l++)o.push(n.getDependency("node",a[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const u=l[0],h=l[1],d=l[2];d!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(d,Jy)});for(let p=0,_=h.length;p<_;p++)u.add(h[p]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(r.isBone===!0?u=new sp:l.length>1?u=new kn:l.length===1?u=l[0]:u=new Et,u!==l[0])for(let h=0,d=l.length;h<d;h++)u.add(l[h]);if(r.name&&(u.userData.name=r.name,u.name=o),fi(u,r),r.extensions&&rs(n,u,r),r.matrix!==void 0){const h=new ze;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new kn;n.name&&(r.name=i.createUniqueName(n.name)),fi(r,n),n.extensions&&rs(t,r,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let u=0,h=c.length;u<h;u++)r.add(c[u]);const l=u=>{const h=new Map;for(const[d,p]of i.associations)(d instanceof ei||d instanceof Ot)&&h.set(d,p);return u.traverse(d=>{const p=i.associations.get(d);p!=null&&h.set(d,p)}),h};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,c=[];Di[r.path]===Di.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(Di[r.path]){case Di.weights:l=Sr;break;case Di.rotation:l=Tr;break;case Di.position:case Di.scale:l=br;break;default:switch(n.itemSize){case 1:l=Sr;break;case 2:case 3:default:l=br;break}break}const u=i.interpolation!==void 0?qy[i.interpolation]:oo,h=this._getArrayFromAccessor(n);for(let d=0,p=c.length;d<p;d++){const _=new l(c[d]+"."+Di[r.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=uu(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Tr?Xy:vp;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function eS(s,e,t){const n=e.attributes,i=new xn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new P(c[0],c[1],c[2]),new P(l[0],l[1],l[2])),a.normalized){const u=uu($s[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new P,c=new P;for(let l=0,u=r.length;l<u;l++){const h=r[l];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],p=d.min,_=d.max;if(p!==void 0&&_!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(_[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(_[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(_[2]))),d.normalized){const g=uu($s[d.componentType]);c.multiplyScalar(g)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new ni;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Ud(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}for(const o in n){const a=lu[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return Qe.workingColorSpace!==nn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Qe.workingColorSpace}" not supported.`),fi(s,e),eS(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?$y(s,e.targets,t):s})}const tS="/stellar-forge-demo/assets/base-DEOKjuh_.glb",nS="/stellar-forge-demo/assets/drone-CdYRVn_1.glb",iS="/stellar-forge-demo/assets/refinery-D8Zl1aOt.glb",sS="/stellar-forge-demo/assets/factory-Bj8_kldq.glb",rS="/stellar-forge-demo/assets/fusion-zjKrz-hT.glb",oS="/stellar-forge-demo/assets/shipyard-UFcLf6Wo.glb",aS="/stellar-forge-demo/assets/fleet-jMyJdaTt.glb",cS="/stellar-forge-demo/assets/colony-C6kVOZAX.glb",lS="/stellar-forge-demo/assets/starlifter-DrsLyIdR.glb",uS="/stellar-forge-demo/assets/dyson-hdNeA-kE.glb",Od=855828,Fd=16765286,Bd=9425919,kd=3530952,xp=10473727,hS=16756838,nl=15770880,Hd=10182117,dS=16769366,zd={1:{hemiSky:3818848,hemiGround:658966,fog:855828,key:15134719},2:{hemiSky:4864038,hemiGround:1314055,fog:1445897,key:16771535},3:{hemiSky:3811922,hemiGround:722200,fog:984864,key:15524607}},fS=1e3,pS=4.4,Vr=1.05,mS=1500,_S=14,Gd=5,gS=9,vS=22,xS=1.9,Vd=4200,MS=2600,Wr=[{tier:1,kind:"drone",url:nS,sizeY:1.15,r0:3.2,r1:6.6,cap:16,epoch:1},{tier:2,kind:"structure",url:iS,sizeY:4.6,r0:9.2,r1:12.8,cap:10,glow:xp,epoch:1},{tier:3,kind:"structure",url:sS,sizeY:6.8,r0:15.4,r1:19.8,cap:6,glow:hS,epoch:1},{tier:4,kind:"structure",url:rS,sizeY:8.4,r0:23,r1:27.6,cap:5,glow:nl,epoch:2},{tier:5,kind:"structure",url:oS,sizeY:9.6,r0:30.5,r1:35.5,cap:4,glow:nl,epoch:2},{tier:6,kind:"structure",url:aS,sizeY:7.6,r0:38.5,r1:43.5,cap:4,glow:nl,epoch:2},{tier:7,kind:"structure",url:cS,sizeY:11.5,r0:46.5,r1:52.5,cap:3,glow:Hd,epoch:3},{tier:8,kind:"structure",url:lS,sizeY:13.5,r0:56,r1:63,cap:2,glow:Hd,epoch:3},{tier:9,kind:"structure",url:uS,sizeY:16,r0:67,r1:76,cap:2,glow:dS,epoch:3}],Pa=2.399963229728653;class ES{constructor(e){H(this,"_bus");H(this,"_clock");H(this,"_input");H(this,"_world");H(this,"_renderer");H(this,"_scene");H(this,"_camera");H(this,"_canvas");H(this,"_parent");H(this,"_loader",new My);H(this,"_forge");H(this,"_forgeCore");H(this,"_forgeMidY",2);H(this,"_protos",new Map);H(this,"_loading",new Set);H(this,"_protoFootprint",new Map);H(this,"_byTier",new Map);H(this,"_owned",new Map);H(this,"_oreNodes",[]);H(this,"_freight",[]);H(this,"_oreCarryGeo",new ec(.22,0));H(this,"_oreCarryMat",new yi({color:kd,transparent:!0,opacity:.95,blending:Zr,depthWrite:!1,fog:!1}));H(this,"_glowGeo",new Nu(.32,12,10));H(this,"_rockGeo",new Qa(.6,0));H(this,"_freightGeo",new ec(.16,0));H(this,"_keyLight");H(this,"_hemi");H(this,"_epochBlend",1);H(this,"_sparks");H(this,"_sparkVel");H(this,"_nextSpark",0);H(this,"_raf",0);H(this,"_lastMs",0);H(this,"_elapsed",0);H(this,"_camDist",20);H(this,"_shakeUntil",0);H(this,"_flash",0);H(this,"_hitW",-1);H(this,"_hitH",-1);H(this,"_unsub",[]);H(this,"_scratch",new P);H(this,"_base",new P);H(this,"_colA",new Ie);H(this,"_colB",new Ie);H(this,"_onPointerDown",e=>this._input.onPointerDown(this._raw(e,"down")));H(this,"_onPointerUp",e=>this._input.onPointerUp(this._raw(e,"up")));H(this,"_onPointerMove",e=>this._input.onPointerMove(this._raw(e,"move")));H(this,"_loop",()=>{this._raf=requestAnimationFrame(this._loop);const e=performance.now(),t=e-this._lastMs;this._lastMs=e,this._elapsed+=t;const n=Math.min(t,100)/1e3;this._clock.advance(Math.min(t,fS)),this._animateForge(n),this._animateUnits(n),this._animateOre(n),this._animateFreight(n),this._animateSparks(n),this._applyEpochAmbience(n),this._updateHitArea(),this._applyCamera(n),this._renderer.render(this._scene,this._camera)});H(this,"_onResize",()=>{const e=this._parent.clientWidth||window.innerWidth,t=this._parent.clientHeight||window.innerHeight;this._camera.aspect=e/t,this._camera.updateProjectionMatrix(),this._renderer.setSize(e,t)});this._bus=e.bus,this._clock=e.clock,this._input=e.input,this._world=e.world}mount(e){this._parent=e;const t=e.clientWidth||window.innerWidth,n=e.clientHeight||window.innerHeight;this._renderer=new xy({antialias:!0,powerPreference:"high-performance"}),this._renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this._renderer.setSize(t,n),this._renderer.shadowMap.enabled=!0,this._renderer.shadowMap.type=Lf,this._renderer.toneMapping=Nf,this._renderer.toneMappingExposure=1.28,this._canvas=this._renderer.domElement,this._canvas.style.cssText="display:block;width:100%;height:100%",e.appendChild(this._canvas),this._scene=new $g,this._scene.background=new Ie(Od),this._scene.fog=new wu(Od,70,340),this._camera=new Qt(45,t/n,.1,300),this._buildLighting(),this._buildGround(),this._buildStarfield(),this._buildSparks(),this._buildOreField(),this._buildFreight(),this._loadForge(),this._seedInitialTiers(),this._unsub.push(this._bus.on(J.INTENT_TAP_FORGE,()=>this._onForgeTap()),this._bus.on(J.GENERATOR_PURCHASED,i=>this._syncTier(i.tier,i.owned)),this._bus.on(J.MILESTONE_REACHED,()=>this._celebrate(.5,260)),this._bus.on(J.ASCENSION_STARTED,()=>this._celebrate(.4,240)),this._bus.on(J.ASCENSION_COMPLETE,()=>this._onAscension())),this._canvas.addEventListener("pointerdown",this._onPointerDown),this._canvas.addEventListener("pointerup",this._onPointerUp),this._canvas.addEventListener("pointermove",this._onPointerMove),window.addEventListener("resize",this._onResize),this._lastMs=performance.now(),this._loop()}dispose(){cancelAnimationFrame(this._raf),window.removeEventListener("resize",this._onResize),this._canvas.removeEventListener("pointerdown",this._onPointerDown),this._canvas.removeEventListener("pointerup",this._onPointerUp),this._canvas.removeEventListener("pointermove",this._onPointerMove);for(const e of this._unsub)e();this._unsub.length=0,this._scene.traverse(e=>{const t=e;t.geometry&&t.geometry.dispose();const n=t.material;Array.isArray(n)?n.forEach(i=>i.dispose()):n==null||n.dispose()}),this._renderer.dispose(),this._canvas.remove()}_buildLighting(){const e=new au(15134719,3.9);e.position.set(-16,30,14),e.castShadow=!0,e.shadow.mapSize.set(2048,2048),e.shadow.camera.near=1,e.shadow.camera.far=220;const t=84;e.shadow.camera.left=-t,e.shadow.camera.right=t,e.shadow.camera.top=t,e.shadow.camera.bottom=-t,e.shadow.bias=-4e-4,this._scene.add(e),this._keyLight=e;const n=new au(7308984,.7);n.position.set(16,10,-12),this._scene.add(n),this._hemi=new E0(3818848,658966,.65),this._scene.add(this._hemi)}_groundY(e,t){const n=Math.sin(e*.16)*Math.cos(t*.14)*.7+Math.sin(e*.42+1.3)*Math.cos(t*.38+.4)*.34+Math.sin(e*.95+4)*Math.cos(t*.9+2.1)*.15+Math.sin(e*2.3)*Math.cos(t*2.1)*.06,i=Math.hypot(e,t),r=Math.min(1,Math.max(0,(i-6)/10)+.06);return n*r}_seatY(e,t,n){let i=this._groundY(e,t);const r=n*.9;for(let o=0;o<8;o+=1){const a=o/8*Math.PI*2;i=Math.max(i,this._groundY(e+Math.cos(a)*r,t+Math.sin(a)*r))}return i}_buildGround(){const n=new Qo(260,260,260,260);n.rotateX(-Math.PI/2);const i=n.attributes.position;for(let a=0;a<i.count;a+=1)i.setY(a,this._groundY(i.getX(a),i.getZ(a)));n.computeVertexNormals();const r=new ds({color:4344150,roughness:.96,metalness:.05}),o=new It(n,r);o.receiveShadow=!0,this._scene.add(o)}_buildStarfield(){const e=new un,t=300,n=new Float32Array(t*3);let i=987654321;const r=()=>(i=(i*1664525+1013904223)%4294967296,i/4294967296);for(let a=0;a<t;a+=1){const c=90+r()*90,l=r()*Math.PI*2;n[a*3]=Math.cos(l)*c,n[a*3+1]=18+r()*90,n[a*3+2]=Math.sin(l)*c}e.setAttribute("position",new zt(n,3));const o=new Ja({color:14674165,size:.4,sizeAttenuation:!0,transparent:!0,opacity:.8,fog:!1});this._scene.add(new ou(e,o))}_buildSparks(){const t=new un,n=new Float32Array(480);for(let r=0;r<160;r+=1)n[r*3+1]=-999;this._sparkVel=new Float32Array(480),t.setAttribute("position",new zt(n,3));const i=new Ja({color:Fd,size:.14,transparent:!0,opacity:.95,blending:Zr,depthWrite:!1,fog:!1});this._sparks=new ou(t,i),this._sparks.frustumCulled=!1,this._scene.add(this._sparks)}_buildOreField(){let e=20260707;const t=()=>(e=(e*1664525+1013904223)%4294967296,e/4294967296);for(let n=0;n<_S;n+=1){const i=Gd+(gS-Gd)*Math.sqrt(t()),r=n*Pa*1.3+t()*.6,o=Math.cos(r)*i,a=Math.sin(r)*i,c=this._groundY(o,a),l=.7+t()*.9,u=new ds({color:2765632,roughness:.72,metalness:.18,emissive:kd,emissiveIntensity:.45}),h=new It(this._rockGeo,u);h.scale.set(l,l*(.7+t()*.5),l),h.position.set(o,c+.2*l,a),h.rotation.set(t()*3,t()*3,t()*3),h.castShadow=!0,h.receiveShadow=!0,this._scene.add(h),this._oreNodes.push({pos:new P(o,c+.55*l,a),mat:u,heat:0})}}_buildFreight(){for(let e=0;e<vS;e+=1){const t=new ds({color:16777215,emissive:16777215,emissiveIntensity:.8,roughness:.4,metalness:.3,transparent:!0,opacity:1}),n=new It(this._freightGeo,t);n.castShadow=!0,n.visible=!1,n.frustumCulled=!1,this._scene.add(n),this._freight.push({mesh:n,active:!1,t:0,from:new P,ctrl:new P,to:new P})}}_loadForge(){this._loader.load(tS,e=>{const t=e.scene;this._normalise(t,7.2),t.traverse(o=>{const a=o;a.isMesh&&(a.castShadow=!0,a.receiveShadow=!0)});const n=new kn;n.add(t),n.position.set(0,this._groundY(0,0),0),this._scene.add(n),this._forge=n;const i=new xn().setFromObject(n);this._forgeMidY=(i.min.y+i.max.y)/2;const r=new hp(Bd,4.2,34,2);r.position.set(0,this._forgeMidY*.7,.4),this._scene.add(r),this._forgeCore=r},void 0,e=>{console.error("World3D: failed to load base.glb",e);const t=new It(new Qa(2.4,0),new ds({color:9152447,roughness:.4,metalness:.5,emissive:2771562}));t.castShadow=!0,t.position.y=2.4;const n=new kn;n.add(t),this._scene.add(n),this._forge=n,this._forgeMidY=2.4})}_seedInitialTiers(){for(const e of Wr)(e.tier===1||this._world.getOwned(e.tier)>0)&&this._ensureTierLoaded(e.tier)}_ensureTierLoaded(e){if(this._protos.has(e)||this._loading.has(e))return;const t=this._cfg(e);t!==void 0&&(this._loading.add(e),this._loader.load(t.url,n=>{const i=n.scene;this._normalise(i,t.sizeY),i.traverse(a=>{const c=a;c.isMesh&&(c.castShadow=!0,c.receiveShadow=!0)});const r=new P;new xn().setFromObject(i).getSize(r),this._protoFootprint.set(e,Math.max(r.x,r.z)*.5),this._protos.set(e,i),this._loading.delete(e);const o=this._owned.get(e)??this._world.getOwned(e);this._syncTier(e,e===1?Math.max(1,o):o)},void 0,n=>{this._loading.delete(e),console.error(`World3D: failed to load tier-${e} model`,n)}))}_normalise(e,t){const n=new xn().setFromObject(e),i=new P;n.getSize(i);const r=t/(i.y||1);e.scale.setScalar(r);const o=new xn().setFromObject(e),a=new P;o.getCenter(a),e.position.x-=a.x,e.position.z-=a.z,e.position.y-=o.min.y}_cfg(e){return Wr.find(t=>t.tier===e)}_plot(e,t){const n=e.cap<=1?0:Math.sqrt(t/(e.cap-1)),i=e.r0+(e.r1-e.r0)*n,r=t*Pa+e.tier*1.7;return{x:Math.cos(r)*i,z:Math.sin(r)*i}}_basePoint(){return this._base.set(0,this._forgeMidY*.55,1.5)}_makeDrone(e,t,n){const i=new kn;i.add(n.clone(!0));const{x:r,z:o}=this._plot(e,t),a=this._groundY(r,o),c=t*Pa;i.position.set(r,a+Vr,o),i.rotation.y=c,i.scale.setScalar(.001);const l=new It(this._oreCarryGeo,this._oreCarryMat);return l.position.set(0,-.32,.05),l.visible=!1,i.add(l),this._scene.add(i),{group:i,kind:"drone",settle:0,phase:t*1.7,baseY:a,homeX:r,homeZ:o,state:"seek",oreIdx:this._oreNodes.length>0?t%this._oreNodes.length:0,timer:0,heading:c,carry:l,glow:void 0,emitTimer:0,topY:0,freightColor:0}}_makeStructure(e,t,n){const i=new kn;i.add(n.clone(!0));const{x:r,z:o}=this._plot(e,t),a=Math.max(this._protoFootprint.get(e.tier)??e.sizeY*.5,.5),c=this._seatY(r,o,a);i.position.set(r,c,o),i.rotation.y=t*Pa,i.scale.setScalar(.001);const l=e.glow??xp,u=new It(this._glowGeo,new yi({color:l,transparent:!0,opacity:.6,blending:Zr,depthWrite:!1,fog:!1}));return u.position.set(0,e.sizeY*.66,0),i.add(u),this._scene.add(i),{group:i,kind:"structure",settle:0,phase:t*1.7,baseY:c,homeX:r,homeZ:o,state:"seek",oreIdx:0,timer:0,heading:0,carry:void 0,glow:u,emitTimer:Vd+t*380,topY:c+e.sizeY*.9,freightColor:l}}_syncTier(e,t){const n=this._cfg(e),i=this._protos.get(e);if(n===void 0||i===void 0){this._owned.set(e,t),n!==void 0&&this._ensureTierLoaded(e);return}this._owned.set(e,t);const r=Math.min(Math.max(t,0),n.cap),o=this._byTier.get(e)??[];for(let a=o.length;a<r;a+=1)o.push(n.kind==="drone"?this._makeDrone(n,a,i):this._makeStructure(n,a,i));this._byTier.set(e,o),this._frameCamera()}_occupiedRadius(){var t;let e=6;for(const n of Wr){const i=((t=this._byTier.get(n.tier))==null?void 0:t.length)??0;if(i>0){const r=n.cap<=1?0:Math.sqrt((i-1)/(n.cap-1));e=Math.max(e,n.r0+(n.r1-n.r0)*r+n.sizeY)}}return e}_frameCamera(){const e=this._occupiedRadius();this._camDist=Yf.clamp(e*1.6+6,16,132)}_currentEpoch(){var t;let e=1;for(const n of Wr)(((t=this._byTier.get(n.tier))==null?void 0:t.length)??0)>0&&(e=Math.max(e,n.epoch));return e}_applyEpochAmbience(e){this._epochBlend+=(this._currentEpoch()-this._epochBlend)*Math.min(1,e*.5);const t=Math.max(1,Math.min(3,Math.floor(this._epochBlend))),n=Math.min(3,t+1),i=this._epochBlend-t,r=zd[t],o=zd[n];r===void 0||o===void 0||(this._hemi.color.setHex(r.hemiSky).lerp(this._colA.setHex(o.hemiSky),i),this._hemi.groundColor.setHex(r.hemiGround).lerp(this._colA.setHex(o.hemiGround),i),this._keyLight.color.setHex(r.key).lerp(this._colA.setHex(o.key),i),this._colB.setHex(r.fog).lerp(this._colA.setHex(o.fog),i),this._scene.fog.color.copy(this._colB),this._scene.background.copy(this._colB))}_clearAllUnits(){for(const e of this._byTier.values())for(const t of e)this._scene.remove(t.group),t.glow!==void 0&&t.glow.material.dispose();this._byTier.clear()}_onAscension(){this._clearAllUnits(),this._syncTier(1,1),this._celebrate(1.5,560)}_raw(e,t){const n=this._canvas.getBoundingClientRect();return{pointerId:e.pointerId,wasTouch:e.pointerType==="touch",x:e.clientX-n.left,y:e.clientY-n.top,timeStamp:e.timeStamp,type:t}}_updateHitArea(){const e=this._canvas.clientWidth,t=this._canvas.clientHeight;e===this._hitW&&t===this._hitH||(this._hitW=e,this._hitH=t,this._input.clearHitAreas(),this._input.registerHitArea({id:"forge",kind:"forge",bounds:{x:0,y:0,width:e,height:t}}))}_onForgeTap(){this._flash=Math.max(this._flash,.35),this._forgeCore!==void 0&&(this._forgeCore.color.setHex(Fd),this._forgeCore.intensity=7),this._emitSparks(16,1.4,this._scratch.set(0,this._forgeMidY,1.8))}_forgePulse(){this._forgeCore!==void 0&&(this._forgeCore.intensity=Math.max(this._forgeCore.intensity,5.2)),this._flash=Math.max(this._flash,.14)}_celebrate(e,t){this._flash=Math.max(this._flash,e),this._shakeUntil=this._elapsed+t,this._emitSparks(48,2.2,this._scratch.set(0,this._forgeMidY,1.8))}_emitSparks(e,t,n){const i=this._sparks.geometry.attributes.position;let r=(this._elapsed|0)+e;const o=()=>(r=r*1103515245+12345&2147483647,r/2147483647);for(let a=0;a<e;a+=1){const c=this._nextSpark;this._nextSpark=(this._nextSpark+1)%i.count,i.setXYZ(c,n.x,n.y,n.z);const l=o()*Math.PI*2;this._sparkVel[c*3]=Math.cos(l)*t*(.4+o()),this._sparkVel[c*3+1]=(.7+o()*1.5)*t,this._sparkVel[c*3+2]=Math.sin(l)*t*(.4+o())}i.needsUpdate=!0}_animateForge(e){const t=this._elapsed/1e3;if(this._forgeCore!==void 0){const n=3.3+Math.sin(t*1.6)*.9;this._forgeCore.intensity+=(n-this._forgeCore.intensity)*Math.min(1,e*3),this._forgeCore.color.lerp(new Ie(Bd),Math.min(1,e*2))}this._forge!==void 0&&(this._forge.rotation.y=Math.sin(t*.15)*.05)}_lerpAngle(e,t,n){let i=t-e;for(;i>Math.PI;)i-=Math.PI*2;for(;i<-Math.PI;)i+=Math.PI*2;return e+i*n}_flyTo(e,t,n,i){const r=t-e.group.position.x,o=n-e.group.position.z,a=Math.hypot(r,o);e.heading=this._lerpAngle(e.heading,Math.atan2(r,o),Math.min(1,i*6)),e.group.rotation.y=e.heading;const c=pS*i;return a<=c||a<.001?(e.group.position.x=t,e.group.position.z=n,!0):(e.group.position.x+=r/a*c,e.group.position.z+=o/a*c,!1)}_animateUnits(e){const t=this._elapsed/1e3;for(const n of Wr){const i=this._byTier.get(n.tier);if(i!==void 0)for(const r of i)r.settle<1&&(r.settle=Math.min(1,r.settle+e*2.4),r.group.scale.setScalar(Math.max(.001,1-Math.pow(1-r.settle,3)))),r.kind==="drone"?this._animateDrone(r,t,e):this._animateStructure(r,t,e)}}_animateDrone(e,t,n){const i=Math.sin(t*2+e.phase)*.09;if(e.settle<.9){e.group.position.set(e.homeX,this._groundY(e.homeX,e.homeZ)+Vr,e.homeZ);return}if(e.state==="seek"){const a=this._oreNodes[e.oreIdx],c=a===void 0?!0:this._flyTo(e,a.pos.x,a.pos.z,n);e.group.position.y=this._groundY(e.group.position.x,e.group.position.z)+Vr+i,c&&(e.state="mine",e.timer=mS);return}if(e.state==="mine"){const a=this._oreNodes[e.oreIdx];e.timer-=n*1e3;const c=Math.max(0,Math.sin(t*9+e.phase))*.35,l=a===void 0?0:this._groundY(a.pos.x,a.pos.z);e.group.position.y=l+Vr+i*.3-c,a!==void 0&&(a.heat=1,Math.sin(t*9+e.phase)>.9&&this._nextSpark%2===0&&this._emitSparks(1,.6,this._scratch.set(a.pos.x,a.pos.y+.2,a.pos.z))),e.timer<=0&&(e.carry!==void 0&&(e.carry.visible=!0),e.state="haul");return}const r=this._basePoint(),o=this._flyTo(e,r.x,r.z,n);e.group.position.y=this._groundY(e.group.position.x,e.group.position.z)+Vr+i,o&&(e.carry!==void 0&&(e.carry.visible=!1),this._forgePulse(),this._emitSparks(3,.7,r),e.oreIdx=this._oreNodes.length>0?(e.oreIdx+1)%this._oreNodes.length:0,e.state="seek")}_animateStructure(e,t,n){if(e.group.position.y=e.baseY+Math.sin(t*.9+e.phase)*.02,e.glow!==void 0){const i=Math.sin(t*2.2+e.phase)*.5+.5,r=e.glow.material;r.opacity=.22+i*.4,e.glow.scale.setScalar(.7+i*.3)}e.emitTimer-=n*1e3,e.emitTimer<=0&&(this._spawnFreight(this._scratch.set(e.group.position.x,e.topY,e.group.position.z),e.freightColor),e.emitTimer=Vd+e.phase*911%MS)}_animateOre(e){for(const t of this._oreNodes)t.heat>0&&(t.heat=Math.max(0,t.heat-e*1.6)),t.mat.emissiveIntensity=.4+t.heat*1.8}_spawnFreight(e,t){const n=this._freight.find(r=>!r.active);if(n===void 0)return;n.active=!0,n.t=0,n.from.copy(e),n.to.copy(this._basePoint()),n.ctrl.copy(e).lerp(n.to,.5),n.ctrl.y+=1.4;const i=n.mesh.material;i.color.setHex(t),i.emissive.setHex(t),n.mesh.visible=!0,n.mesh.position.copy(e)}_animateFreight(e){for(const t of this._freight){if(!t.active)continue;if(t.t+=e/xS,t.t>=1){t.active=!1,t.mesh.visible=!1,this._forgePulse(),this._emitSparks(4,.8,this._basePoint());continue}const n=1-t.t,i=n*n,r=2*n*t.t,o=t.t*t.t;t.mesh.position.set(i*t.from.x+r*t.ctrl.x+o*t.to.x,i*t.from.y+r*t.ctrl.y+o*t.to.y,i*t.from.z+r*t.ctrl.z+o*t.to.z),t.mesh.rotation.y+=e*4,t.mesh.rotation.x+=e*2.5,t.mesh.material.opacity=Math.min(1,Math.sin(t.t*Math.PI)*3)}}_animateSparks(e){const t=this._sparks.geometry.attributes.position;for(let n=0;n<t.count;n+=1)t.getY(n)<-100||(this._sparkVel[n*3+1]-=5*e,t.setX(n,t.getX(n)+this._sparkVel[n*3]*e),t.setY(n,t.getY(n)+this._sparkVel[n*3+1]*e),t.setZ(n,t.getZ(n)+this._sparkVel[n*3+2]*e),t.getY(n)<=.12&&t.setY(n,-999));t.needsUpdate=!0}_applyCamera(e){const t=this._elapsed/1e3;let n=0;this._elapsed<this._shakeUntil&&(n=.09*((this._shakeUntil-this._elapsed)/300));const i=Math.sin(t*.12)*.28,r=Math.sin(i)*this._camDist+Math.sin(t*40)*n,o=Math.cos(i)*this._camDist,a=this._camDist*.55+Math.cos(t*37)*n;this._camera.position.x+=(r-this._camera.position.x)*Math.min(1,e*1.6),this._camera.position.y+=(a-this._camera.position.y)*Math.min(1,e*1.6),this._camera.position.z+=(o-this._camera.position.z)*Math.min(1,e*1.6),this._camera.lookAt(0,this._forgeMidY*.7,0),this._flash>0?(this._renderer.toneMappingExposure=1.05+this._flash*1.5,this._flash=Math.max(0,this._flash-e*2.2)):this._renderer.toneMappingExposure+=(1.05-this._renderer.toneMappingExposure)*Math.min(1,e*6)}}const Mp=1e-10,co=2,Ep=2,hu=1e21,Bu=["K","M","B","T","Qa","Qi"],ku="∞",yS=Bu.length,Wd=10**(3*(yS+1));if(hu!==Wd)throw new Error(`formatConfig invariant violated: SCIENTIFIC_THRESHOLD (${hu}) must be one magnitude tier above the top of ABBREVIATION_TABLE (expected ${Wd}).`);const yp=0,Sp=7,uc=3,Xd=10**uc,qd=10**1,Yd=Bu.length,Tp=Object.freeze(jo(sc,uc)),SS=Object.freeze(dt(hu)),bp=Object.freeze(jo(sc,-co)),TS=`<${bp.toNumber().toFixed(co)}`,bS=hc(we.toNumber()).toFixed(co);function AS(s){const e=s.log10(),t=Math.floor((e+Mp)/uc);return Math.max(yp,Math.min(Sp,t))}function $d(s,e){const t=jo(sc,uc*e);return s.div(t).toNumber()}function hc(s){return Math.floor(s*100)/100}function to(s,e){return s}function du(s,e){let t=Math.floor(s.log10()+Mp),n=s.div(jo(sc,t)).toNumber();n>=qd&&(t+=1,n/=qd);const r=`${hc(n).toFixed(Ep)} e+${String(t)}`;return to(r)}function Ap(s,e,t){let n=AS(s);if(n>=Sp)return du(s);let i=$d(s,n);if(i>=Xd)if(n<Yd)n+=1,i=i/Xd;else return n===Yd?du(s):ku;i<1&&n>yp&&(n-=1,i=$d(s,n));const o=`${hc(i).toFixed(t)} ${Bu[n-1]}`;return to(o)}function Si(s,e){return cn(s)?s.lte(we)?"0":s.lt(Tp)?s.floor().toNumber().toString():s.gte(SS)?du(s):Ap(s,e,Ep):ku}function Xr(s,e){return e?`${s} ${e}`:s}function Bs(s,e,t){if(!cn(s))return Xr(ku,t);if(s.lte(we))return Xr(to(bS),t);if(s.lt(bp))return Xr(to(TS),t);if(s.lt(Tp)){const n=hc(s.toNumber()).toFixed(co);return Xr(to(n),t)}return Xr(Ap(s,e,co),t)}const wS=380,RS=900,CS=.19,LS=128,IS=.52,NS=.76,PS=.6;function DS(s,e){const t=s>=RS;return e*(t?NS:PS)}function US(s){return Math.max(LS,s*CS)}function OS(s,e){return{x:s/2,y:DS(s,e)-US(e)*IS}}const FS=5;function wp(s){return s.getTotalBaseRate().mul(dt(FS))}function BS(s,e){return dt(s.currencies.credits.tapAmount).add(wp(e))}class kS{constructor(e){H(this,"_unsubTap");this._unsubTap=e.bus.on(J.INTENT_TAP_FORGE,()=>{const t=wp(e.generators);t.gt(we)&&e.credits.addOfflineEarnings(t)})}dispose(){this._unsubTap()}}const HS="/stellar-forge-demo/assets/tier1-CGr_rWoD.svg",zS="/stellar-forge-demo/assets/tier2-WDw8Df_T.svg",GS="/stellar-forge-demo/assets/tier3-BgDwCqo5.svg",VS="/stellar-forge-demo/assets/tier4-D0G28S5V.svg",WS="/stellar-forge-demo/assets/tier5-Uf4foSHK.svg",XS="/stellar-forge-demo/assets/tier6-ClC5JRkf.svg",qS="/stellar-forge-demo/assets/tier7-DZ_6xqdX.svg",YS="/stellar-forge-demo/assets/tier8-UnOtcdr9.svg",$S="/stellar-forge-demo/assets/tier9-wc-XhgwM.svg",KS=[HS,zS,GS,VS,WS,XS,qS,YS,$S],jS=250,ZS=2200,JS=650,QS=["⬡","⬢","◈","◆","▲","●","◐","✦","❂"],eT=["x1","x10","xmax"],Kd=5,tT=5;function nT(s){const e=Math.floor(s/1e3);if(e<90)return`${e} s`;const t=Math.floor(e/60);return t<90?`${t} min`:`${(t/60).toFixed(1)} h`}function Oe(s,e,t){const n=document.createElement(s);return n.className=e,t!==void 0&&(n.textContent=t),n}class iT{constructor(e){H(this,"_bus");H(this,"_credits");H(this,"_generators");H(this,"_config");H(this,"_ascension");H(this,"_root");H(this,"_creditsValue");H(this,"_creditsRate");H(this,"_tapLine");H(this,"_modeButtons",new Map);H(this,"_rows",new Map);H(this,"_toast");H(this,"_tapHint");H(this,"_ascendButton");H(this,"_ascendDm");H(this,"_milestoneBadge");H(this,"_lastMilestoneBurst",-1);H(this,"_balance");H(this,"_ratePerSec");H(this,"_paintScheduled",!1);H(this,"_lastBuyTier");H(this,"_tapCount",0);H(this,"_lastPointerX",0);H(this,"_lastPointerY",0);H(this,"_lastPointerAt",0);H(this,"_unsubscribes",[]);H(this,"_timers",[]);H(this,"_onWindowPointerDown",e=>{this._lastPointerX=e.clientX,this._lastPointerY=e.clientY,this._lastPointerAt=Date.now()});this._bus=e.bus,this._credits=e.credits,this._generators=e.generators,this._config=e.config,this._ascension=e.ascension,this._balance=e.credits.getBalance(),this._ratePerSec=e.credits.getBalance()}mount(e){this._root=e,document.documentElement.style.setProperty("--zone-c-width",`${wS}px`),window.addEventListener("pointerdown",this._onWindowPointerDown,!0),e.append(this._buildZoneA(),this._buildZoneC(),this._buildTapHint(),this._buildAscendButton()),this._unsubscribes.push(this._bus.on(J.CREDITS_UPDATED,t=>{this._balance=t.balance,this._ratePerSec=t.ratePerSec,this._schedulePaint()}),this._bus.on(J.GENERATOR_PURCHASED,t=>{this._flashRow(t.tier),this._paint()}),this._bus.on(J.GENERATOR_RATE_CHANGED,t=>{this._floatRateDelta(t.tier,t.rateDelta),this._schedulePaint()}),this._bus.on(J.BUY_MODE_CHANGED,()=>this._paint()),this._bus.on(J.PURCHASE_REJECTED,t=>this._onRejected(t.reason)),this._bus.on(J.INTENT_TAP_FORGE,()=>this._onForgeTapped()),this._bus.on(J.MILESTONE_REACHED,t=>this._showMilestone(t))),this._paint()}dispose(){window.removeEventListener("pointerdown",this._onWindowPointerDown,!0);for(const e of this._unsubscribes)e();this._unsubscribes.length=0;for(const e of this._timers)clearTimeout(e);this._timers.length=0,this._root!==void 0&&this._root.replaceChildren(),this._rows.clear(),this._modeButtons.clear(),this._ascendButton=void 0,this._ascendDm=void 0,this._milestoneBadge=void 0,this._lastMilestoneBurst=-1}_buildZoneA(){const e=Oe("header","hud-zone-a"),t=Oe("div","hud-brand");t.append(Oe("span","hud-brand-mark","⬡"),Oe("span","hud-brand-name","STELLAR FORGE"));const n=Oe("div","hud-readout");return n.setAttribute("role","status"),n.setAttribute("aria-live","polite"),this._creditsValue=Oe("div","hud-credits","0 Cr"),this._creditsRate=Oe("div","hud-rate","▸ 0.00 Cr/s"),this._tapLine=Oe("div","hud-tap",""),n.append(this._creditsValue,this._creditsRate,this._tapLine),e.append(t,n),e}_buildZoneC(){const e=Oe("aside","hud-zone-c");e.setAttribute("aria-label","Economy panel");const t=Oe("div","hud-buymode");t.setAttribute("role","group"),t.setAttribute("aria-label","Buy quantity mode");for(const r of eT){const o=Oe("button","hud-buymode-btn",r==="xmax"?"×MAX":`×${r.slice(1)}`);o.type="button",o.addEventListener("click",()=>{this._bus.emit(J.INTENT_SET_BUY_MODE,{mode:r,source:"pointer"})}),this._modeButtons.set(r,o),t.append(o)}const n=Oe("div","hud-gen-list");for(const r of this._config.generators)n.append(this._buildRow(r.tier,r.name,r.epoch));const i=Oe("footer","hud-footer");return i.append(Oe("div","hud-footer-live","Live economy engine — server-authoritative production"),Oe("div","hud-footer-roadmap","Live: generators · milestones · ascension ✦ Dark Matter tree · offline earnings · cloud save")),e.append(t,n,i),e}_buildRow(e,t,n){const i=Oe("article",`hud-gen-row epoch-${n}`),r=Oe("div","hud-gen-glyph"),o=KS[e-1];if(o!==void 0){const m=document.createElement("img");m.src=o,m.alt="",m.loading="lazy",m.className="hud-gen-icon",r.append(m)}else r.textContent=QS[e-1]??"⬡";const a=Oe("div","hud-gen-info"),c=Oe("div","hud-gen-name",t),l=Oe("div","hud-gen-meta","—");a.append(c,l);const u=Oe("div","hud-gen-milestonewrap"),h=Oe("div","hud-gen-milestone",""),d=Oe("div","hud-gen-progress"),p=[];for(let m=0;m<Kd;m+=1){const f=Oe("span","hud-gen-seg");p.push(f),d.append(f)}u.append(h,d);const _=Oe("button","hud-gen-buy","BUY");_.type="button",_.addEventListener("click",()=>{this._lastBuyTier=e,this._bus.emit(J.INTENT_BUY_GENERATOR,{tier:e,source:"pointer"})});const g=Oe("div","hud-gen-hint","");return i.append(r,a,u,_,g),this._rows.set(e,{root:i,glyph:r,meta:l,milestone:h,segments:p,buy:_,hint:g}),i}_buildTapHint(){const e=Oe("div","hud-tap-hint","TAP THE FORGE");return this._tapHint=e,e}_buildAscendButton(){const e=Oe("button","hud-ascend");e.type="button";const t=Oe("span","hud-ascend-dm","");return e.append(Oe("span","hud-ascend-label","ASCEND"),t,Oe("span","hud-ascend-hint","Collapse the empire into a singularity — restart faster, forever stronger")),e.addEventListener("click",()=>{this._bus.emit(J.INTENT_CONFIRM_ASCENSION,{source:"pointer"})}),this._ascendButton=e,this._ascendDm=t,e}_showMilestone(e){var r;if(this._root===void 0)return;const t=e.type==="credits_scale"?e.name??"Milestone":`${this._generatorName(e.tier)} ×${e.threshold}`,n=e.type==="credits_scale"?"RANK ACHIEVED":"MILESTONE",i=e.ordinal===e.seriesLength;if(e.burstId!==this._lastMilestoneBurst||this._milestoneBadge===void 0){this._lastMilestoneBurst=e.burstId,(r=this._milestoneBadge)==null||r.remove();const o=Oe("div","hud-milestone");o.append(Oe("div","hud-milestone-eyebrow",n),Oe("div","hud-milestone-title",t)),this._milestoneBadge=o,this._root.append(o),o.offsetWidth,o.classList.add("is-in"),this._timers.push(setTimeout(()=>{o.remove(),this._milestoneBadge===o&&(this._milestoneBadge=void 0)},2600))}else{const o=this._milestoneBadge.querySelector(".hud-milestone-title"),a=this._milestoneBadge.querySelector(".hud-milestone-eyebrow");o!==null&&(o.textContent=t),a!==null&&(a.textContent=n)}if(this._milestoneBadge.classList.toggle("is-peak",i),e.burstSize>1){let o=this._milestoneBadge.querySelector(".hud-milestone-more");o===null&&(o=Oe("div","hud-milestone-more",""),this._milestoneBadge.append(o)),o.textContent=`${e.burstSize} milestones in one surge`}}_generatorName(e){var t;return e===void 0?"Generator":((t=this._config.generators.find(n=>n.tier===e))==null?void 0:t.name)??`Tier ${e}`}_schedulePaint(){this._paintScheduled||(this._paintScheduled=!0,this._timers.push(setTimeout(()=>{this._paintScheduled=!1,this._paint()},jS)))}_paint(){this._creditsValue.textContent=`${Si(this._balance)} Cr`,this._creditsRate.textContent=`▸ ${Bs(this._ratePerSec,void 0,"Cr/s")}`,this._tapLine.textContent=`⌁ ${Bs(this._tapValue(),void 0,"Cr")} per tap`;const e=this._credits.getBuyMode();for(const[t,n]of this._modeButtons){const i=t===e;n.classList.toggle("is-active",i),n.setAttribute("aria-pressed",String(i))}for(const t of this._config.generators)this._paintRow(t.tier,t.name,e);this._updateAscension()}_updateAscension(){if(this._ascendButton===void 0||this._ascendDm===void 0)return;const e=this._ascension.canAscend();this._ascendButton.classList.toggle("is-visible",e),this._ascendButton.disabled=!e,e&&(this._ascendDm.textContent=`+${Si(this._ascension.getEstimatedDM())} Dark Matter`)}_paintRow(e,t,n){var g,m;const i=this._rows.get(e);if(i===void 0)return;const r=this._generators.isUnlocked(e);if(i.root.classList.toggle("is-locked",!r),!r){i.meta.textContent="Locked",i.milestone.textContent="",i.buy.disabled=!0,i.buy.textContent="LOCKED",i.buy.className="hud-gen-buy is-lockedbtn";const f=this._config.generators.find(S=>S.tier===e-1);i.hint.textContent=f!==void 0?`Own 1 × ${f.name} to unlock`:"";for(const S of i.segments)S.className="hud-gen-seg";return}const o=this._generators.getOwned(e),a=this._generators.getTierRate(e);i.meta.textContent=`×${o} · ${Bs(a,void 0,"Cr/s")}`,i.hint.textContent="";const c=this._config.upgrades.milestones.map(f=>f.ownedCount).sort((f,S)=>f-S),l=c.find(f=>f>o),u=[...c].reverse().find(f=>f<=o)??0;if(l!==void 0){i.milestone.textContent=`→${l} ×2`;const f=(o-u)/(l-u),S=Math.floor(f*Kd);i.segments.forEach((T,E)=>{T.className=E<S?"hud-gen-seg is-filled":"hud-gen-seg"})}else{i.milestone.textContent="MAX ×2 tier";for(const f of i.segments)f.className="hud-gen-seg is-filled"}let h;if(n==="x1"?h=1:n==="x10"?h=10:h=this._generators.getMaxAffordable(e,this._balance),h===0){i.buy.disabled=!1,i.buy.textContent="MAX ×0",i.buy.className="hud-gen-buy is-unaffordable";return}const d=this._generators.getCost(e,h),p=this._balance.gte(d),_=n==="xmax"?`MAX ×${h} · ${Si(d)}`:`BUY ${n==="x10"?"×10 · ":""}${Si(d)}`;if(i.buy.disabled=!1,i.buy.textContent=_,i.buy.className=p?"hud-gen-buy is-affordable":"hud-gen-buy is-unaffordable",t!==((m=(g=this._rows.get(e))==null?void 0:g.root.querySelector(".hud-gen-name"))==null?void 0:m.textContent)){const f=i.root.querySelector(".hud-gen-name");f!==null&&(f.textContent=t)}}_onRejected(e){if(e==="insufficient_balance"&&this._lastBuyTier!==void 0){const t=this._rows.get(this._lastBuyTier);t!==void 0&&(t.buy.classList.remove("is-shaking"),t.buy.offsetWidth,t.buy.classList.add("is-shaking"));return}if(e==="qty_zero"){this._showToast("Nothing affordable at ×MAX yet — keep forging");return}this._showToast("Tier locked — own the previous generator first")}_flashRow(e){const t=this._rows.get(e);t!==void 0&&(t.root.classList.add("is-flashing"),this._timers.push(setTimeout(()=>t.root.classList.remove("is-flashing"),JS)))}_showToast(e){var n;if(this._root===void 0)return;(n=this._toast)==null||n.remove();const t=Oe("div","hud-toast",e);this._toast=t,this._root.append(t),this._timers.push(setTimeout(()=>t.remove(),ZS))}showWelcomeBack(e){var r;if(this._root===void 0)return;(r=this._root.querySelector(".hud-welcome"))==null||r.remove();const t=Oe("div","hud-welcome");t.setAttribute("role","dialog"),t.setAttribute("aria-label","Offline earnings report");const n=Math.round(e.earningRate*100);t.append(Oe("div","hud-welcome-eyebrow","SYSTEMS REPORT"),Oe("h2","hud-welcome-title","WHILE YOU WERE AWAY"),Oe("div","hud-welcome-amount num",`+${Bs(e.credited,void 0,"Cr")}`),Oe("div","hud-welcome-sub",`${nT(e.elapsedMs)} away · ${n}% offline rate · your empire kept forging`));const i=Oe("button","hud-welcome-cta","CONTINUE");i.type="button",i.addEventListener("click",()=>t.remove()),t.append(i),this._root.append(t),i.focus(),this._timers.push(setTimeout(()=>t.remove(),12e3))}_onForgeTapped(){if(this._tapCount+=1,this._tapCount>=tT&&this._tapHint!==void 0&&this._tapHint.classList.add("is-done"),this._root===void 0||this._prefersReducedMotion())return;const t=Date.now()-this._lastPointerAt<600?{x:this._lastPointerX,y:this._lastPointerY}:OS(window.innerWidth,window.innerHeight),n=Oe("span","hud-float",`+${Bs(this._tapValue(),void 0,"Cr")}`),i=(Math.random()-.5)*30;n.style.left=`${t.x+i}px`,n.style.top=`${t.y-30}px`,this._root.append(n),this._timers.push(setTimeout(()=>n.remove(),950))}_tapValue(){return BS(this._config,this._generators)}_floatRateDelta(e,t){if(this._prefersReducedMotion())return;const n=this._rows.get(e);if(n===void 0||!t.gt(dt(0)))return;const i=Oe("span","hud-rowfloat",`+${Bs(t,void 0,"Cr/s")}`);n.root.append(i),this._timers.push(setTimeout(()=>i.remove(),1050))}_prefersReducedMotion(){return typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches}}const Da="◆",sT=2400,rT=700,jd={forge:{title:"FORGE",tag:"Raw production power",glyph:"◆"},continuum:{title:"CONTINUUM",tag:"Bend time & offline",glyph:"∞"},cortex:{title:"CORTEX",tag:"Automate the empire",glyph:"⚙"}},Zd={forge_t1:"Core Amplifier",forge_t2:"Drone Overclock",forge_capstone:"Singularity Engine",continuum_t1:"Temporal Reservoir",continuum_t2:"Chrono Capacitor",continuum_capstone:"Eternal Continuum",cortex_t1:"Neural Relay",cortex_t2:"Cognition Lattice",cortex_capstone:"Autonomous Cortex"},Jd=["","I","II","III","IV","V"];function oT(s){const e=s.toNumber();return Number.isFinite(e)&&e<1e6?e.toFixed(2):Si(s)}function Fe(s,e,t){const n=document.createElement(s);return n.className=e,t!==void 0&&(n.textContent=t),n}class aT{constructor(e){H(this,"_bus");H(this,"_config");H(this,"_section");H(this,"_tree");H(this,"_dm");H(this,"_onPurchase");H(this,"_onRespec");H(this,"_root");H(this,"_launcher");H(this,"_launcherBalance");H(this,"_modal");H(this,"_balanceEl");H(this,"_investedEl");H(this,"_multiplierEl");H(this,"_respecBtn");H(this,"_toast");H(this,"_cells",new Map);H(this,"_open",!1);H(this,"_revealed",!1);H(this,"_unsubscribes",[]);H(this,"_timers",[]);H(this,"_onKeydown",e=>{if(!(!this._open||this._modal===void 0)){if(e.key==="Escape"){this.close();return}e.key==="Tab"&&this._trapTab(e)}});this._bus=e.bus,this._config=e.config,this._section=e.config.dmTree??{nodes:[],respec:{enabled:!1,cost:0,refundNodes:!1},capstonePermanenceActive:!1},this._tree=e.tree,this._dm=e.darkMatter,this._onPurchase=e.onPurchase,this._onRespec=e.onRespec}_trapTab(e){if(this._modal===void 0)return;const t=[...this._modal.querySelectorAll('button:not([disabled]), [tabindex]:not([tabindex="-1"])')];if(t.length===0)return;const n=t[0],i=t[t.length-1],r=document.activeElement,o=r instanceof Node&&this._modal.contains(r);e.shiftKey?(r===n||!o)&&(e.preventDefault(),i.focus()):(r===i||!o)&&(e.preventDefault(),n.focus())}mount(e){this._root=e,e.append(this._buildLauncher()),this._unsubscribes.push(this._bus.on(J.DARK_MATTER_UPDATED,()=>{this._syncReveal(),this._paintLauncher(),this._open&&this._repaint()}),this._bus.on(J.DM_UPGRADE_PURCHASED,()=>{this._open&&this._repaint()}),this._bus.on(J.DM_TREE_CAPSTONE_SELECTED,()=>{this._open&&this._repaint()})),this._syncReveal(),this._paintLauncher()}dispose(){var e,t;for(const n of this._unsubscribes)n();this._unsubscribes.length=0;for(const n of this._timers)clearTimeout(n);this._timers.length=0,document.removeEventListener("keydown",this._onKeydown),(e=this._modal)==null||e.remove(),this._launcher.remove(),(t=this._toast)==null||t.remove(),this._cells.clear(),this._modal=void 0,this._open=!1}_buildLauncher(){const e=Fe("button","dm-launcher");return e.type="button",e.setAttribute("aria-haspopup","dialog"),e.append(Fe("span","dm-launcher-glyph",Da),Fe("span","dm-launcher-label","DARK MATTER")),this._launcherBalance=Fe("span","dm-launcher-balance",""),e.append(this._launcherBalance),e.addEventListener("click",()=>this.openPanel()),this._launcher=e,e}_syncReveal(){if(this._revealed)return;const e=dt(0);(this._dm.getBalance().gt(e)||this._dm.getTotalSpent().gt(e))&&(this._revealed=!0,this._launcher.classList.add("is-visible"))}_paintLauncher(){this._launcherBalance.textContent=Si(this._dm.getBalance())}openPanel(){if(this._root===void 0||this._open)return;this._modal===void 0&&(this._modal=this._buildModal()),this._root.append(this._modal),this._open=!0,this._modal.offsetWidth,this._modal.classList.add("is-open"),document.addEventListener("keydown",this._onKeydown),this._repaint();const e=this._modal.querySelector(".dm-close");e==null||e.focus()}close(){!this._open||this._modal===void 0||(this._open=!1,this._modal.classList.remove("is-open"),document.removeEventListener("keydown",this._onKeydown),this._modal.remove(),this._launcher.focus())}_buildModal(){const e=Fe("div","dm-scrim");e.addEventListener("click",n=>{n.target===e&&this.close()});const t=Fe("section","dm-modal");return t.setAttribute("role","dialog"),t.setAttribute("aria-modal","true"),t.setAttribute("aria-label","Dark Matter upgrade tree"),t.append(this._buildHeader(),this._buildBranches(),this._buildFooter()),e.append(t),e}_buildHeader(){const e=Fe("header","dm-header"),t=Fe("div","dm-titles");t.append(Fe("div","dm-eyebrow","META-PROGRESSION"),Fe("h2","dm-title","DARK MATTER"),Fe("p","dm-subtitle","Permanent choices, mapped across the void. Spend to grow forever stronger."));const n=Fe("div","dm-stats");this._balanceEl=Fe("span","dm-stat-value",""),this._investedEl=Fe("span","dm-stat-value",""),this._multiplierEl=Fe("span","dm-stat-value",""),n.append(this._buildStat(`${Da} Available`,this._balanceEl),this._buildStat("Invested",this._investedEl),this._buildStat("Tree production",this._multiplierEl));const i=Fe("button","dm-close","✕");return i.type="button",i.setAttribute("aria-label","Close Dark Matter tree"),i.addEventListener("click",()=>this.close()),e.append(t,n,i),e}_buildStat(e,t){const n=Fe("div","dm-stat");return n.append(Fe("span","dm-stat-label",e),t),n}_buildBranches(){const e=Fe("div","dm-branches"),t=[],n=new Map;for(const i of this._section.nodes)n.has(i.branch)||(n.set(i.branch,[]),t.push(i.branch)),n.get(i.branch).push(i);for(const i of t){const r=[...n.get(i)].sort((o,a)=>o.tier-a.tier);e.append(this._buildLane(i,r))}return e}_buildLane(e,t){const n=jd[e]??{title:e.toUpperCase(),tag:"Upgrade path",glyph:"✦"},i=Fe("div",`dm-lane dm-branch-${e}`),r=Fe("div","dm-lane-head");r.append(Fe("span","dm-lane-glyph",n.glyph),(()=>{const a=Fe("div","dm-lane-titles");return a.append(Fe("div","dm-lane-title",n.title),Fe("div","dm-lane-tag",n.tag)),a})());const o=Fe("div","dm-chain");return t.forEach((a,c)=>{c>0&&o.append(Fe("div","dm-connector")),o.append(this._buildNode(a))}),i.append(r,o),i}_buildNode(e){const t=Fe("article",`dm-node${e.isCapstone?" is-capstone":""}`),n=Fe("div","dm-node-badge",e.isCapstone?"✦":Jd[e.tier]??String(e.tier)),i=Fe("div","dm-node-body"),r=Fe("div","dm-node-title",Zd[e.id]??`${e.branch} ${Jd[e.tier]??e.tier}`),o=Fe("div","dm-node-effect",this._effectLabel(e)),a=Fe("div","dm-node-levelrow"),c=Fe("span","dm-node-level",""),l=Fe("span","dm-node-pips"),u=[];for(let p=0;p<e.maxLevel;p+=1){const _=Fe("span","dm-pip");u.push(_),l.append(_)}a.append(c,l),i.append(r,o,a),e.isCapstone&&i.append(Fe("div","dm-node-capnote","Capstone — one branch only"));const h=Fe("button","dm-node-action");h.type="button",h.addEventListener("click",()=>this._purchase(e.id));const d=Fe("div","dm-node-status","");return t.append(n,i,h,d),this._cells.set(e.id,{node:e,root:t,level:c,pips:u,action:h,status:d}),t}_buildFooter(){const e=Fe("footer","dm-footer");if(this._section.respec.enabled){const n=this._section.respec.cost,i=n>0?`${Da} ${n}`:"free",r=Fe("button","dm-respec",`RESET CAPSTONE CHOICE · ${i}`);r.type="button",r.addEventListener("click",()=>this._respec()),this._respecBtn=r,e.append(r)}return e.append(Fe("div","dm-footer-note","Effects apply permanently across every future Ascension — your production rate updates instantly.")),e}_repaint(){if(this._modal===void 0)return;this._balanceEl!==void 0&&(this._balanceEl.textContent=`${Si(this._dm.getBalance())}`),this._investedEl!==void 0&&(this._investedEl.textContent=`${Si(this._dm.getTotalSpent())}`),this._multiplierEl!==void 0&&(this._multiplierEl.textContent=`×${oT(this._tree.getExtraGlobalMultiplier())}`);const e=this._tree.getCommittedCapstone();for(const t of this._cells.values())this._paintNode(t,e);this._respecBtn!==void 0&&(this._respecBtn.disabled=e===null,this._respecBtn.classList.toggle("is-armed",e!==null))}_paintNode(e,t){var m;const{node:n,root:i,level:r,pips:o,action:a,status:c}=e,l=this._tree.getNodeLevel(n.id),u=n.maxLevel,h=l>=u,d=n.isCapstone&&t!==null&&t!==n.branch,p=n.prereqs.some(f=>this._tree.getNodeLevel(f)<1),_=this._tree.canPurchase(n.id);if(r.textContent=u>1?`Lv ${l}/${u}`:l>=1?"Owned":"Locked in on purchase",o.forEach((f,S)=>{f.className=S<l?"dm-pip is-filled":"dm-pip"}),i.classList.toggle("is-maxed",h),i.classList.toggle("is-locked",(p||d)&&!h),h){n.isCapstone?(a.textContent="✦ COMMITTED",a.className="dm-node-action is-committed",c.textContent="This branch’s capstone is active"):(a.textContent="✓ MAXED",a.className="dm-node-action is-maxed",c.textContent="Fully upgraded"),a.disabled=!0;return}if(d){const f=((m=jd[t??""])==null?void 0:m.title)??(t??"").toUpperCase();a.textContent="🔒 LOCKED",a.className="dm-node-action is-rivallocked",a.disabled=!0,c.textContent=`${f} capstone chosen`;return}if(p){const f=Zd[n.prereqs[0]??""]??"the previous node";a.textContent="🔒 LOCKED",a.className="dm-node-action is-prereqlocked",a.disabled=!0,c.textContent=`Unlock ${f} first`;return}const g=this._tree.getNodeCost(n.id);a.textContent=`${Da} ${Si(g)}`,a.className=_?"dm-node-action is-affordable":"dm-node-action is-unaffordable",a.disabled=!1,c.textContent=n.isCapstone?"Choosing this locks the other capstones":""}_purchase(e){const t=this._onPurchase(e);if(t.ok){this._pulse(e),this._repaint();return}this._showToast(cT[t.reason]),t.reason==="insufficient_dm"&&this._shake(e)}_respec(){const e=this._onRespec();this._showToast(e.ok?"Capstone choice reset — pick a new path":lT[e.reason]),e.ok&&this._repaint()}_pulse(e){const t=this._cells.get(e);t!==void 0&&(t.root.classList.remove("is-pulsing"),t.root.offsetWidth,t.root.classList.add("is-pulsing"),this._defer(()=>t.root.classList.remove("is-pulsing"),rT))}_shake(e){const t=this._cells.get(e);t!==void 0&&(t.action.classList.remove("is-denied"),t.action.offsetWidth,t.action.classList.add("is-denied"),this._defer(()=>t.action.classList.remove("is-denied"),400))}_showToast(e){var n,i;if(this._modal===void 0)return;(n=this._toast)==null||n.remove();const t=Fe("div","dm-toast",e);this._toast=t,(i=this._modal.querySelector(".dm-modal"))==null||i.append(t),this._defer(()=>t.remove(),sT)}_defer(e,t){const n=setTimeout(()=>{const i=this._timers.indexOf(n);i!==-1&&this._timers.splice(i,1),e()},t);this._timers.push(n)}_effectLabel(e){const t=e.effectParams,n=i=>`${Math.round((i??0)*100)}%`;switch(e.effectType){case"globalMultiplier":return`+${n(t.perLevelBonus)} to ALL production, per level`;case"tierBoost":{const i=this._config.generators.find(r=>r.tier===t.targetTier);return`+${n(t.perLevelBonus)} ${(i==null?void 0:i.name)??`Tier ${t.targetTier}`} output, per level`}case"offlineExtension":return`+${t.capHours??0}h offline cap · +${n(t.rateBonus)} offline rate, per level`;case"automationUnlock":return t.efficiencyBonus!==void 0?`Full automation · +${n(t.efficiencyBonus)} efficiency`:"Automates a production stage — it runs itself";default:return"Permanent upgrade"}}}const cT={insufficient_dm:"Not enough Dark Matter — Ascend to mint more",locked_prereq:"Unlock the previous node in this branch first",rival_capstone:"Another branch’s capstone is already committed",maxed:"Already fully upgraded",unknown_node:"That upgrade is unavailable"},lT={respec_disabled:"Respec is not available",no_capstone:"No capstone committed yet — nothing to reset",insufficient_dm:"Not enough Dark Matter to respec"};class uT{constructor(e){H(this,"_clock");H(this,"_save");H(this,"_now");H(this,"_doc");H(this,"_hiddenAt",null);H(this,"_started",!1);H(this,"_onVisibilityChange",()=>{if(this._doc.visibilityState==="hidden"){this._hiddenAt=this._now(),this._clock.pause(),this._save.resetLastSeen(this._hiddenAt);return}if(this._clock.resume(),this._hiddenAt!==null){const e=this._now()-this._hiddenAt;this._hiddenAt=null,this._clock.reportGap(e)}});this._clock=e.clock,this._save=e.save,this._now=e.now,this._doc=e.doc}start(){this._started||(this._started=!0,this._doc.addEventListener("visibilitychange",this._onVisibilityChange))}dispose(){this._doc.removeEventListener("visibilitychange",this._onVisibilityChange),this._started=!1,this._hiddenAt=null}}const hT=typeof crypto<"u"&&"randomUUID"in crypto?crypto.randomUUID():`${Date.now()}`;function dT(){const s=()=>Date.now(),e=p_({configJson:$u,storage:window.localStorage,now:s,tabId:hT,autosaveEnv:r_(window,document)}),{bus:t,clock:n,credits:i,generators:r,ascension:o,dmTree:a,darkMatter:c,save:l}=e,u=new uT({clock:n,save:l,now:s,doc:document});u.start(),l.startAutosave();const h=nf($u),d=new v_(t),p=document.getElementById("game-root");if(p===null)throw new Error("main: #game-root container missing from index.html");const _=new ES({bus:t,clock:n,input:d,world:{getOwned:L=>r.getOwned(L),generators:h.generators}});_.mount(p);const g=document.getElementById("hud-overlay");if(g===null)throw new Error("main: #hud-overlay container missing from index.html");const m=new iT({bus:t,credits:i,generators:r,config:h,ascension:o});m.mount(g);const f=new aT({bus:t,config:h,tree:a,darkMatter:c,onPurchase:L=>a.purchase(L),onRespec:()=>a.respecCapstone()});f.mount(g);const S=L=>{L.reason==="brief"||L.diagnostic!==void 0||m.showWelcomeBack({credited:L.baseLump,elapsedMs:L.elapsedSeconds*1e3,earningRate:h.offline.earningRate})},T=t.on(J.OFFLINE_EARNINGS_APPLIED,S);e.offlineReport!==void 0&&S(e.offlineReport);const E=new kS({bus:t,credits:i,generators:r}),C=t.on(J.INTENT_CONFIRM_ASCENSION,()=>{o.canAscend()&&o.executeAscension()});let R=0;const w=t.on(J.CREDITS_UPDATED,()=>{const L=s();L-R>=1e3&&(R=L,l.resetLastSeen(L))});return{dispose(){u.dispose(),l.stopAutosave(),w(),C(),T(),E.dispose(),f.dispose(),m.dispose(),d.clearHitAreas(),_.dispose(),e.dispose()}}}dT();
