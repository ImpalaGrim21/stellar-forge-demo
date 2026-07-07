var xp=Object.defineProperty;var Hu=i=>{throw TypeError(i)};var Ep=(i,e,t)=>e in i?xp(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Y=(i,e,t)=>Ep(i,typeof e!="symbol"?e+"":e,t),ac=(i,e,t)=>e.has(i)||Hu("Cannot "+t);var v=(i,e,t)=>(ac(i,e,"read from private field"),t?t.call(i):e.get(i)),X=(i,e,t)=>e.has(i)?Hu("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(i):e.set(i,t),G=(i,e,t,n)=>(ac(i,e,"write to private field"),n?n.call(i,t):e.set(i,t),t),re=(i,e,t)=>(ac(i,e,"access private method"),t);var ea=(i,e,t,n)=>({set _(s){G(i,e,s,t)},get _(){return v(i,e,n)}});(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Vu=`{
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
`,qr=1;class ru extends Error{constructor(e){super(e),this.name="ConfigParseError",Object.setPrototypeOf(this,ru.prototype)}}class st extends Error{constructor(e){super(e),this.name="ConfigValidationError",Object.setPrototypeOf(this,st.prototype)}}class ou extends Error{constructor(e){super(e),this.name="SchemaVersionError",Object.setPrototypeOf(this,ou.prototype)}}function Hd(i,e=new WeakSet){if(i===null||typeof i!="object")return i;const t=i;if(e.has(t))return i;e.add(t);for(const n of Object.keys(t))Hd(t[n],e);return Object.freeze(i)}const Mp={meta:{schemaVersion:qr,lastTuned:"2026-06-25",author:"economy-designer"},generators:[{tier:1,slug:"mining-drone",name:"Mining Drone",epoch:1,baseCost:10,costMultiplier:1.1,baseOutput:.1,enabled:!0},{tier:2,slug:"ore-refinery",name:"Ore Refinery",epoch:1,baseCost:100,costMultiplier:1.1,baseOutput:.5,enabled:!0},{tier:3,slug:"component-factory",name:"Component Factory",epoch:1,baseCost:1e3,costMultiplier:1.11,baseOutput:4,enabled:!0},{tier:4,slug:"fusion-reactor",name:"Fusion Reactor",epoch:2,baseCost:1e4,costMultiplier:1.12,baseOutput:20,enabled:!0},{tier:5,slug:"orbital-shipyard",name:"Orbital Shipyard",epoch:2,baseCost:1e5,costMultiplier:1.13,baseOutput:100,enabled:!0},{tier:6,slug:"trade-fleet",name:"Trade Fleet",epoch:3,baseCost:1e6,costMultiplier:1.14,baseOutput:500,enabled:!1},{tier:7,slug:"planetary-colony",name:"Planetary Colony",epoch:3,baseCost:1e7,costMultiplier:1.15,baseOutput:2500,enabled:!1},{tier:8,slug:"star-lifter",name:"Star Lifter",epoch:3,baseCost:1e8,costMultiplier:1.16,baseOutput:12500,enabled:!1},{tier:9,slug:"dyson-swarm",name:"Dyson Swarm",epoch:3,baseCost:1e9,costMultiplier:1.17,baseOutput:62500,enabled:!1}],upgrades:{milestones:[{ownedCount:10,productionMultiplier:2},{ownedCount:25,productionMultiplier:2},{ownedCount:50,productionMultiplier:2},{ownedCount:100,productionMultiplier:2},{ownedCount:200,productionMultiplier:2}],managers:[{unlockCost:25,prerequisiteOwnedCount:25},{unlockCost:250,prerequisiteOwnedCount:25},{unlockCost:2500,prerequisiteOwnedCount:25},{unlockCost:25e3,prerequisiteOwnedCount:25},{unlockCost:25e4,prerequisiteOwnedCount:25}],automationReserveFraction:1,linearBoosts:[]},milestones:{creditsScale:[{threshold:"1e7",name:"Asteroid Baron"},{threshold:"1e8",name:"Orbital Magnate"},{threshold:"1e9",name:"Planetary Mogul"},{threshold:"1e10",name:"System Tycoon"},{threshold:"1e11",name:"Sector Sovereign"},{threshold:"1e12",name:"Stellar Overlord"},{threshold:"1e13",name:"Cluster Potentate"},{threshold:"1e15",name:"Nebular Dominus"},{threshold:"1e18",name:"Galactic Emperor"},{threshold:"1e21",name:"Intergalactic Lord"},{threshold:"1e24",name:"Cosmic Forgemaster"}]},ascension:{constant:500,creditsDivisor:1e10,exponent:.5,dmMultiplierPerPoint:.02,upgrades:[]},offline:{earningRate:.5,baseCapHours:4,maxCapHours:24,boostMultiplier:2},currencies:{credits:{startingBalance:0,tapAmount:1,tickRateMs:100}}};function Ia(i){return typeof i=="object"&&i!==null&&!Array.isArray(i)}function Kc(i,e){const t={};for(const n of Object.keys(i)){const s=i[n];if(!(n in e)){t[n]=Ia(s)?Kc(s,{}):structuredClone(s);continue}const r=e[n];Ia(s)&&Ia(r)?t[n]=Kc(s,r):t[n]=r}for(const n of Object.keys(e))n in t||(t[n]=e[n]);return t}function Sp(i,e){const t=Kc(Mp,i);return Ia(t.meta)&&(t.meta.schemaVersion=qr),t}function yp(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var cc,zu;function Tp(){return zu||(zu=1,cc=function(i,e,t){if(i==null||e==null)return i;var n=String(i),s=typeof e=="number"?e:parseInt(e,10);if(isNaN(s)||!isFinite(s))return n;var r=n.length;if(r>=s)return n;var o=t==null?"":String(t);o===""&&(o=" ");for(var a=s-r;o.length<a;)o+=o;var c=o.length>a?o.substr(0,a):o;return n+c}),cc}var bp=Tp();const lc=yp(bp);var zn=9e15,ta=(function(){for(var i=[],e=-323;e<=308;e++)i.push(+("1e"+e));return function(t){return i[t+323]}})(),ne=function(i){return i instanceof qi?i:new qi(i)},sn=function(i,e){return new qi().fromMantissaExponent(i,e)},as=function(i,e){return new qi().fromMantissaExponent_noNormalize(i,e)};function Ap(i,e,t,n){var s=e.mul(t.pow(n));return qi.floor(i.div(s).mul(t.sub(1)).add(1).log10()/t.log10())}function wp(i,e,t,n){return e.mul(t.pow(n)).mul(qi.sub(1,t.pow(i))).div(qi.sub(1,t))}var qi=(function(){function i(e){this.mantissa=NaN,this.exponent=NaN,e===void 0?(this.m=0,this.e=0):e instanceof i?this.fromDecimal(e):typeof e=="number"?this.fromNumber(e):this.fromString(e)}return Object.defineProperty(i.prototype,"m",{get:function(){return this.mantissa},set:function(e){this.mantissa=e},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"e",{get:function(){return this.exponent},set:function(e){this.exponent=e},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"s",{get:function(){return this.sign()},set:function(e){if(e===0)return this.e=0,void(this.m=0);this.sgn()!==e&&(this.m=-this.m)},enumerable:!1,configurable:!0}),i.fromMantissaExponent=function(e,t){return new i().fromMantissaExponent(e,t)},i.fromMantissaExponent_noNormalize=function(e,t){return new i().fromMantissaExponent_noNormalize(e,t)},i.fromDecimal=function(e){return new i().fromDecimal(e)},i.fromNumber=function(e){return new i().fromNumber(e)},i.fromString=function(e){return new i().fromString(e)},i.fromValue=function(e){return new i().fromValue(e)},i.fromValue_noAlloc=function(e){return e instanceof i?e:new i(e)},i.abs=function(e){return ne(e).abs()},i.neg=function(e){return ne(e).neg()},i.negate=function(e){return ne(e).neg()},i.negated=function(e){return ne(e).neg()},i.sign=function(e){return ne(e).sign()},i.sgn=function(e){return ne(e).sign()},i.round=function(e){return ne(e).round()},i.floor=function(e){return ne(e).floor()},i.ceil=function(e){return ne(e).ceil()},i.trunc=function(e){return ne(e).trunc()},i.add=function(e,t){return ne(e).add(t)},i.plus=function(e,t){return ne(e).add(t)},i.sub=function(e,t){return ne(e).sub(t)},i.subtract=function(e,t){return ne(e).sub(t)},i.minus=function(e,t){return ne(e).sub(t)},i.mul=function(e,t){return ne(e).mul(t)},i.multiply=function(e,t){return ne(e).mul(t)},i.times=function(e,t){return ne(e).mul(t)},i.div=function(e,t){return ne(e).div(t)},i.divide=function(e,t){return ne(e).div(t)},i.recip=function(e){return ne(e).recip()},i.reciprocal=function(e){return ne(e).recip()},i.reciprocate=function(e){return ne(e).reciprocate()},i.cmp=function(e,t){return ne(e).cmp(t)},i.compare=function(e,t){return ne(e).cmp(t)},i.eq=function(e,t){return ne(e).eq(t)},i.equals=function(e,t){return ne(e).eq(t)},i.neq=function(e,t){return ne(e).neq(t)},i.notEquals=function(e,t){return ne(e).notEquals(t)},i.lt=function(e,t){return ne(e).lt(t)},i.lte=function(e,t){return ne(e).lte(t)},i.gt=function(e,t){return ne(e).gt(t)},i.gte=function(e,t){return ne(e).gte(t)},i.max=function(e,t){return ne(e).max(t)},i.min=function(e,t){return ne(e).min(t)},i.clamp=function(e,t,n){return ne(e).clamp(t,n)},i.clampMin=function(e,t){return ne(e).clampMin(t)},i.clampMax=function(e,t){return ne(e).clampMax(t)},i.cmp_tolerance=function(e,t,n){return ne(e).cmp_tolerance(t,n)},i.compare_tolerance=function(e,t,n){return ne(e).cmp_tolerance(t,n)},i.eq_tolerance=function(e,t,n){return ne(e).eq_tolerance(t,n)},i.equals_tolerance=function(e,t,n){return ne(e).eq_tolerance(t,n)},i.neq_tolerance=function(e,t,n){return ne(e).neq_tolerance(t,n)},i.notEquals_tolerance=function(e,t,n){return ne(e).notEquals_tolerance(t,n)},i.lt_tolerance=function(e,t,n){return ne(e).lt_tolerance(t,n)},i.lte_tolerance=function(e,t,n){return ne(e).lte_tolerance(t,n)},i.gt_tolerance=function(e,t,n){return ne(e).gt_tolerance(t,n)},i.gte_tolerance=function(e,t,n){return ne(e).gte_tolerance(t,n)},i.log10=function(e){return ne(e).log10()},i.absLog10=function(e){return ne(e).absLog10()},i.pLog10=function(e){return ne(e).pLog10()},i.log=function(e,t){return ne(e).log(t)},i.log2=function(e){return ne(e).log2()},i.ln=function(e){return ne(e).ln()},i.logarithm=function(e,t){return ne(e).logarithm(t)},i.pow10=function(e){return Number.isInteger(e)?as(1,e):sn(Math.pow(10,e%1),Math.trunc(e))},i.pow=function(e,t){return typeof e=="number"&&e===10&&typeof t=="number"&&Number.isInteger(t)?as(1,t):ne(e).pow(t)},i.exp=function(e){return ne(e).exp()},i.sqr=function(e){return ne(e).sqr()},i.sqrt=function(e){return ne(e).sqrt()},i.cube=function(e){return ne(e).cube()},i.cbrt=function(e){return ne(e).cbrt()},i.dp=function(e){return ne(e).dp()},i.decimalPlaces=function(e){return ne(e).dp()},i.affordGeometricSeries=function(e,t,n,s){return Ap(ne(e),ne(t),ne(n),s)},i.sumGeometricSeries=function(e,t,n,s){return wp(e,ne(t),ne(n),s)},i.affordArithmeticSeries=function(e,t,n,s){return(function(r,o,a,c){var l=o.add(c.mul(a)).sub(a.div(2)),u=l.pow(2);return l.neg().add(u.add(a.mul(r).mul(2)).sqrt()).div(a).floor()})(ne(e),ne(t),ne(n),ne(s))},i.sumArithmeticSeries=function(e,t,n,s){return(function(r,o,a,c){var l=o.add(c.mul(a));return r.div(2).mul(l.mul(2).plus(r.sub(1).mul(a)))})(ne(e),ne(t),ne(n),ne(s))},i.efficiencyOfPurchase=function(e,t,n){return(function(s,r,o){return s.div(r).add(s.div(o))})(ne(e),ne(t),ne(n))},i.randomDecimalForTesting=function(e){if(20*Math.random()<1)return as(0,0);var t=10*Math.random();10*Math.random()<1&&(t=Math.round(t)),t*=Math.sign(2*Math.random()-1);var n=Math.floor(Math.random()*e*2)-e;return sn(t,n)},i.prototype.normalize=function(){if(this.m>=1&&this.m<10)return this;if(this.m===0)return this.m=0,this.e=0,this;var e=Math.floor(Math.log10(Math.abs(this.m)));return this.m=e===-324?10*this.m/1e-323:this.m/ta(e),this.e+=e,this},i.prototype.fromMantissaExponent=function(e,t){return isFinite(e)&&isFinite(t)?(this.m=e,this.e=t,this.normalize(),this):(e=Number.NaN,t=Number.NaN,this)},i.prototype.fromMantissaExponent_noNormalize=function(e,t){return this.m=e,this.e=t,this},i.prototype.fromDecimal=function(e){return this.m=e.m,this.e=e.e,this},i.prototype.fromNumber=function(e){return isNaN(e)?(this.m=Number.NaN,this.e=Number.NaN):e===Number.POSITIVE_INFINITY?(this.m=1,this.e=zn):e===Number.NEGATIVE_INFINITY?(this.m=-1,this.e=zn):e===0?(this.m=0,this.e=0):(this.e=Math.floor(Math.log10(Math.abs(e))),this.m=this.e===-324?10*e/1e-323:e/ta(this.e),this.normalize()),this},i.prototype.fromString=function(e){if(e.indexOf("e")!==-1){var t=e.split("e");this.m=parseFloat(t[0]),this.e=parseFloat(t[1]),this.normalize()}else if(e==="NaN")this.m=Number.NaN,this.e=Number.NaN;else if(this.fromNumber(parseFloat(e)),isNaN(this.m))throw Error("[DecimalError] Invalid argument: "+e);return this},i.prototype.fromValue=function(e){return e instanceof i?this.fromDecimal(e):typeof e=="number"?this.fromNumber(e):typeof e=="string"?this.fromString(e):(this.m=0,this.e=0,this)},i.prototype.toNumber=function(){if(!isFinite(this.e))return Number.NaN;if(this.e>308)return this.m>0?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY;if(this.e<-324)return 0;if(this.e===-324)return this.m>0?5e-324:-5e-324;var e=this.m*ta(this.e);if(!isFinite(e)||this.e<0)return e;var t=Math.round(e);return Math.abs(t-e)<1e-10?t:e},i.prototype.mantissaWithDecimalPlaces=function(e){if(isNaN(this.m)||isNaN(this.e))return Number.NaN;if(this.m===0)return 0;var t=e+1,n=Math.ceil(Math.log10(Math.abs(this.m))),s=Math.round(this.m*Math.pow(10,t-n))*Math.pow(10,n-t);return parseFloat(s.toFixed(Math.max(t-n,0)))},i.prototype.toString=function(){return isNaN(this.m)||isNaN(this.e)?"NaN":this.e>=zn?this.m>0?"Infinity":"-Infinity":this.e<=-zn||this.m===0?"0":this.e<21&&this.e>-7?this.toNumber().toString():this.m+"e"+(this.e>=0?"+":"")+this.e},i.prototype.toExponential=function(e){if(isNaN(this.m)||isNaN(this.e))return"NaN";if(this.e>=zn)return this.m>0?"Infinity":"-Infinity";if(this.e<=-zn||this.m===0)return"0"+(e>0?lc(".",e+1,"0"):"")+"e+0";if(this.e>-324&&this.e<308)return this.toNumber().toExponential(e);isFinite(e)||(e=17);var t=e+1,n=Math.max(1,Math.ceil(Math.log10(Math.abs(this.m))));return(Math.round(this.m*Math.pow(10,t-n))*Math.pow(10,n-t)).toFixed(Math.max(t-n,0))+"e"+(this.e>=0?"+":"")+this.e},i.prototype.toFixed=function(e){return isNaN(this.m)||isNaN(this.e)?"NaN":this.e>=zn?this.m>0?"Infinity":"-Infinity":this.e<=-zn||this.m===0?"0"+(e>0?lc(".",e+1,"0"):""):this.e>=17?this.m.toString().replace(".","").padEnd(this.e+1,"0")+(e>0?lc(".",e+1,"0"):""):this.toNumber().toFixed(e)},i.prototype.toPrecision=function(e){return this.e<=-7?this.toExponential(e-1):e>this.e?this.toFixed(e-this.e-1):this.toExponential(e-1)},i.prototype.valueOf=function(){return this.toString()},i.prototype.toJSON=function(){return this.toString()},i.prototype.toStringWithDecimalPlaces=function(e){return this.toExponential(e)},i.prototype.abs=function(){return as(Math.abs(this.m),this.e)},i.prototype.neg=function(){return as(-this.m,this.e)},i.prototype.negate=function(){return this.neg()},i.prototype.negated=function(){return this.neg()},i.prototype.sign=function(){return Math.sign(this.m)},i.prototype.sgn=function(){return this.sign()},i.prototype.round=function(){return this.e<-1?new i(0):this.e<17?new i(Math.round(this.toNumber())):this},i.prototype.floor=function(){return this.e<-1?Math.sign(this.m)>=0?new i(0):new i(-1):this.e<17?new i(Math.floor(this.toNumber())):this},i.prototype.ceil=function(){return this.e<-1?Math.sign(this.m)>0?new i(1):new i(0):this.e<17?new i(Math.ceil(this.toNumber())):this},i.prototype.trunc=function(){return this.e<0?new i(0):this.e<17?new i(Math.trunc(this.toNumber())):this},i.prototype.add=function(e){var t,n,s=ne(e);if(this.m===0)return s;if(s.m===0)return this;if(this.e>=s.e?(t=this,n=s):(t=s,n=this),t.e-n.e>17)return t;var r=Math.round(1e14*t.m+1e14*n.m*ta(n.e-t.e));return sn(r,t.e-14)},i.prototype.plus=function(e){return this.add(e)},i.prototype.sub=function(e){return this.add(ne(e).neg())},i.prototype.subtract=function(e){return this.sub(e)},i.prototype.minus=function(e){return this.sub(e)},i.prototype.mul=function(e){if(typeof e=="number")return e<1e307&&e>-1e307?sn(this.m*e,this.e):sn(1e-307*this.m*e,this.e+307);var t=typeof e=="string"?new i(e):e;return sn(this.m*t.m,this.e+t.e)},i.prototype.multiply=function(e){return this.mul(e)},i.prototype.times=function(e){return this.mul(e)},i.prototype.div=function(e){return this.mul(ne(e).recip())},i.prototype.divide=function(e){return this.div(e)},i.prototype.divideBy=function(e){return this.div(e)},i.prototype.dividedBy=function(e){return this.div(e)},i.prototype.recip=function(){return sn(1/this.m,-this.e)},i.prototype.reciprocal=function(){return this.recip()},i.prototype.reciprocate=function(){return this.recip()},i.prototype.cmp=function(e){var t=ne(e);if(this.m===0){if(t.m===0)return 0;if(t.m<0)return 1;if(t.m>0)return-1}if(t.m===0){if(this.m<0)return-1;if(this.m>0)return 1}if(this.m>0)return t.m<0||this.e>t.e?1:this.e<t.e?-1:this.m>t.m?1:this.m<t.m?-1:0;if(this.m<0)return t.m>0||this.e>t.e?-1:this.e<t.e||this.m>t.m?1:this.m<t.m?-1:0;throw Error("Unreachable code")},i.prototype.compare=function(e){return this.cmp(e)},i.prototype.eq=function(e){var t=ne(e);return this.e===t.e&&this.m===t.m},i.prototype.equals=function(e){return this.eq(e)},i.prototype.neq=function(e){return!this.eq(e)},i.prototype.notEquals=function(e){return this.neq(e)},i.prototype.lt=function(e){var t=ne(e);return this.m===0?t.m>0:t.m===0?this.m<=0:this.e===t.e?this.m<t.m:this.m>0?t.m>0&&this.e<t.e:t.m>0||this.e>t.e},i.prototype.lte=function(e){return!this.gt(e)},i.prototype.gt=function(e){var t=ne(e);return this.m===0?t.m<0:t.m===0?this.m>0:this.e===t.e?this.m>t.m:this.m>0?t.m<0||this.e>t.e:t.m<0&&this.e<t.e},i.prototype.gte=function(e){return!this.lt(e)},i.prototype.max=function(e){var t=ne(e);return this.lt(t)?t:this},i.prototype.min=function(e){var t=ne(e);return this.gt(t)?t:this},i.prototype.clamp=function(e,t){return this.max(e).min(t)},i.prototype.clampMin=function(e){return this.max(e)},i.prototype.clampMax=function(e){return this.min(e)},i.prototype.cmp_tolerance=function(e,t){var n=ne(e);return this.eq_tolerance(n,t)?0:this.cmp(n)},i.prototype.compare_tolerance=function(e,t){return this.cmp_tolerance(e,t)},i.prototype.eq_tolerance=function(e,t){var n=ne(e);return i.lte(this.sub(n).abs(),i.max(this.abs(),n.abs()).mul(t))},i.prototype.equals_tolerance=function(e,t){return this.eq_tolerance(e,t)},i.prototype.neq_tolerance=function(e,t){return!this.eq_tolerance(e,t)},i.prototype.notEquals_tolerance=function(e,t){return this.neq_tolerance(e,t)},i.prototype.lt_tolerance=function(e,t){var n=ne(e);return!this.eq_tolerance(n,t)&&this.lt(n)},i.prototype.lte_tolerance=function(e,t){var n=ne(e);return this.eq_tolerance(n,t)||this.lt(n)},i.prototype.gt_tolerance=function(e,t){var n=ne(e);return!this.eq_tolerance(n,t)&&this.gt(n)},i.prototype.gte_tolerance=function(e,t){var n=ne(e);return this.eq_tolerance(n,t)||this.gt(n)},i.prototype.log10=function(){return this.e+Math.log10(this.m)},i.prototype.absLog10=function(){return this.e+Math.log10(Math.abs(this.m))},i.prototype.pLog10=function(){return this.m<=0||this.e<0?0:this.log10()},i.prototype.log=function(e){return Math.LN10/Math.log(e)*this.log10()},i.prototype.log2=function(){return 3.321928094887362*this.log10()},i.prototype.ln=function(){return 2.302585092994045*this.log10()},i.prototype.logarithm=function(e){return this.log(e)},i.prototype.pow=function(e){var t,n=e instanceof i?e.toNumber():e,s=this.e*n;if(Number.isSafeInteger(s)&&(t=Math.pow(this.m,n),isFinite(t)&&t!==0))return sn(t,s);var r=Math.trunc(s),o=s-r;if(t=Math.pow(10,n*Math.log10(this.m)+o),isFinite(t)&&t!==0)return sn(t,r);var a=i.pow10(n*this.absLog10());return this.sign()===-1?Math.abs(n%2)===1?a.neg():Math.abs(n%2)===0?a:new i(Number.NaN):a},i.prototype.pow_base=function(e){return ne(e).pow(this)},i.prototype.factorial=function(){var e=this.toNumber()+1;return i.pow(e/Math.E*Math.sqrt(e*Math.sinh(1/e)+1/(810*Math.pow(e,6))),e).mul(Math.sqrt(2*Math.PI/e))},i.prototype.exp=function(){var e=this.toNumber();return-706<e&&e<709?i.fromNumber(Math.exp(e)):i.pow(Math.E,e)},i.prototype.sqr=function(){return sn(Math.pow(this.m,2),2*this.e)},i.prototype.sqrt=function(){return this.m<0?new i(Number.NaN):this.e%2!=0?sn(3.16227766016838*Math.sqrt(this.m),Math.floor(this.e/2)):sn(Math.sqrt(this.m),Math.floor(this.e/2))},i.prototype.cube=function(){return sn(Math.pow(this.m,3),3*this.e)},i.prototype.cbrt=function(){var e=1,t=this.m;t<0&&(e=-1,t=-t);var n=e*Math.pow(t,1/3),s=this.e%3;return sn(s===1||s===-1?2.154434690031883*n:s!==0?4.641588833612778*n:n,Math.floor(this.e/3))},i.prototype.sinh=function(){return this.exp().sub(this.negate().exp()).div(2)},i.prototype.cosh=function(){return this.exp().add(this.negate().exp()).div(2)},i.prototype.tanh=function(){return this.sinh().div(this.cosh())},i.prototype.asinh=function(){return i.ln(this.add(this.sqr().add(1).sqrt()))},i.prototype.acosh=function(){return i.ln(this.add(this.sqr().sub(1).sqrt()))},i.prototype.atanh=function(){return this.abs().gte(1)?Number.NaN:i.ln(this.add(1).div(new i(1).sub(this)))/2},i.prototype.ascensionPenalty=function(e){return e===0?this:this.pow(Math.pow(10,-e))},i.prototype.egg=function(){return this.add(9)},i.prototype.lessThanOrEqualTo=function(e){return this.cmp(e)<1},i.prototype.lessThan=function(e){return this.cmp(e)<0},i.prototype.greaterThanOrEqualTo=function(e){return this.cmp(e)>-1},i.prototype.greaterThan=function(e){return this.cmp(e)>0},i.prototype.decimalPlaces=function(){return this.dp()},i.prototype.dp=function(){if(!isFinite(this.mantissa))return NaN;if(this.exponent>=17)return 0;for(var e=this.mantissa,t=-this.exponent,n=1;Math.abs(Math.round(e*n)/n-e)>1e-10;)n*=10,t++;return t>0?t:0},Object.defineProperty(i,"MAX_VALUE",{get:function(){return Rp},enumerable:!1,configurable:!0}),Object.defineProperty(i,"MIN_VALUE",{get:function(){return Cp},enumerable:!1,configurable:!0}),Object.defineProperty(i,"NUMBER_MAX_VALUE",{get:function(){return Lp},enumerable:!1,configurable:!0}),Object.defineProperty(i,"NUMBER_MIN_VALUE",{get:function(){return Ip},enumerable:!1,configurable:!0}),i})(),Rp=as(1,zn),Cp=as(1,-zn),Lp=ne(Number.MAX_VALUE),Ip=ne(Number.MIN_VALUE);class Gs extends Error{constructor(e){super(e),this.name="BigNumberError"}}const Np=9e15;function an(i){return isFinite(i.mantissa)&&!isNaN(i.mantissa)&&isFinite(i.exponent)&&!isNaN(i.exponent)&&i.exponent<Np}function dt(i){if(i==null)throw new Gs(`toBigNumber received ${i===null?"null":"undefined"} — currency values must never be nullish`);let e;try{e=new qi(i)}catch(t){const n=t instanceof Error?t.message:String(t);throw new Gs(`toBigNumber failed to parse ${JSON.stringify(i)}: ${n}`)}if(!an(e))throw new Gs(`toBigNumber produced a non-finite value from ${JSON.stringify(i)} (NaN or ±Infinity)`);return e}const we=Object.freeze(dt(0)),vt=Object.freeze(dt(1)),Ja=Object.freeze(dt(10));function $o(i,e){return e===.5?i.sqrt():i.pow(e)}function Ui(i){return i.toString()}function Jr(i){return dt(i)}const Vd="> 0";function Qr(i){return{path:i,min:Number.MIN_VALUE,max:1/0,rangeToken:Vd}}const Pp=[{path:"ascension.constant",min:50,max:500,rangeToken:"[50, 500]"},{path:"ascension.creditsDivisor",min:1e10,max:1e15,rangeToken:"[1e10, 1e15]"},{path:"ascension.exponent",min:.3,max:.7,rangeToken:"[0.3, 0.7]"},{path:"ascension.dmMultiplierPerPoint",min:.005,max:.1,rangeToken:"[0.005, 0.10]"},{path:"offline.earningRate",min:.1,max:1,rangeToken:"[0.1, 1.0]"},{path:"offline.baseCapHours",min:1,max:24,rangeToken:"[1, 24]"},{path:"offline.maxCapHours",min:4,max:72,rangeToken:"[4, 72]"},{path:"offline.boostMultiplier",min:1.5,max:3,rangeToken:"[1.5, 3.0]"},{path:"currencies.credits.startingBalance",min:0,max:100,rangeToken:"[0, 100]"},{path:"currencies.credits.tapAmount",min:.01,max:1e4,rangeToken:"[0.01, 10000]"},{path:"currencies.credits.tickRateMs",min:50,max:500,rangeToken:"[50, 500]"},{path:"upgrades.automationReserveFraction",min:0,max:2,rangeToken:"[0.0, 2.0]"}];function Dp(i){const e=t=>`generators[${i}].${t}`;return[{path:e("tier"),min:1,max:9,integer:!0,rangeToken:"[1, 9]"},{path:e("epoch"),min:1,max:3,integer:!0,rangeToken:"[1, 3]"},Qr(e("baseCost")),{path:e("costMultiplier"),min:1.01,max:1.2,rangeToken:"[1.01, 1.20]"},Qr(e("baseOutput")),{path:e("enabled"),kind:"boolean"}]}function Up(i){const e=t=>`upgrades.milestones[${i}].${t}`;return[{path:e("ownedCount"),min:1,max:1e5,integer:!0,rangeToken:"[1, 100000]"},{path:e("productionMultiplier"),min:1.5,max:5,rangeToken:"[1.5, 5.0]"}]}function Op(i){const e=t=>`upgrades.linearBoosts[${i}].${t}`;return[{path:e("id"),kind:"string"},{path:e("targetTier"),min:1,max:9,integer:!0,rangeToken:"[1, 9]"},{path:e("multiplier"),min:1.01,max:100,rangeToken:"[1.01, 100]"},Qr(e("cost")),{path:e("prerequisiteOwnedCount"),min:0,max:200,integer:!0,rangeToken:"[0, 200]"}]}function Fp(i){const e=t=>`upgrades.managers[${i}].${t}`;return[Qr(e("unlockCost")),{path:e("prerequisiteOwnedCount"),min:1,max:200,integer:!0,rangeToken:"[1, 200]"}]}function Bp(i){const e=t=>`ascension.upgrades[${i}].${t}`;return[{path:e("id"),kind:"string"},Qr(e("cost")),{path:e("maxLevel"),min:1,max:1/0,integer:!0,rangeToken:">= 1"}]}function It(i,e){const t=e.replace(/\[(\d+)\]/g,".$1").split(".");let n=i;for(const s of t){if(n==null||typeof n!="object")return;n=n[s]}return n}function Na(i,e){const t=It(i,e.path);if(t===void 0)throw new st(`${e.path} is missing (required)`);if(typeof t!="number"||Number.isNaN(t))throw new st(`${e.path} must be a number; received ${yi(t)}`);if(e.integer&&!Number.isInteger(t))throw new st(`${e.path} must be an integer; received ${String(t)}`);if(t<e.min||t>e.max){const n=e.rangeToken===Vd?`must be ${e.rangeToken}`:`must be in ${e.rangeToken}`;throw new st(`${e.path} ${n}; received ${String(t)}`)}}function kp(i,e){const t=It(i,e.path);if(t===void 0)throw new st(`${e.path} is missing (required)`);if(typeof t!="boolean")throw new st(`${e.path} must be a boolean; received ${yi(t)}`)}function zd(i,e){const t=It(i,e.path);if(t===void 0)throw new st(`${e.path} is missing (required)`);if(typeof t!="string")throw new st(`${e.path} must be a non-empty string; received ${yi(t)}`);if(t.trim().length===0)throw new st(`${e.path} must be a non-empty string; received ""`)}function yi(i){return i===null?"null":Array.isArray(i)?"array":typeof i=="object"?"object":String(i)}function Hp(i){if(typeof i!="object"||i===null||Array.isArray(i))throw new st(`economy config must be an object; received ${yi(i)}`);for(const t of Pp)Na(i,t);Ir(i,"generators",Dp),Ir(i,"upgrades.milestones",Up),Ir(i,"upgrades.linearBoosts",Op),Gu(i,"upgrades.linearBoosts","id"),Ir(i,"upgrades.managers",Fp),Ir(i,"ascension.upgrades",Bp),Gu(i,"ascension.upgrades","id"),Wp(i);const e=It(i,"save");if(e!==void 0){if(typeof e!="object"||e===null||Array.isArray(e))throw new st(`save must be an object; received ${yi(e)}`);Na(i,{path:"save.autosaveIntervalMs",min:5e3,max:3e4,integer:!0,rangeToken:"[5000, 30000]"}),Na(i,{path:"save.clockSkewToleranceMs",min:0,max:6e4,integer:!0,rangeToken:"[0, 60000]"}),zd(i,{path:"save.saveKey"})}}function Ir(i,e,t){const n=It(i,e);if(n===void 0)throw new st(`${e} is missing (required)`);if(!Array.isArray(n))throw new st(`${e} must be an array; received ${yi(n)}`);for(let s=0;s<n.length;s++)for(const r of t(s))"kind"in r&&r.kind==="boolean"?kp(i,r):"kind"in r&&r.kind==="string"?zd(i,r):Na(i,r)}function Gu(i,e,t){const n=It(i,e);if(!Array.isArray(n))return;const s=new Map;for(let r=0;r<n.length;r++){const o=It(i,`${e}[${r}].${t}`);if(typeof o!="string")continue;const a=s.get(o);if(a!==void 0)throw new st(`${e}[${r}].${t} must be unique; ${JSON.stringify(o)} already used at index ${a}`);s.set(o,r)}}const Vp="1e6",zp="1e27",Wu=20;function Gp(i,e){try{return Jr(i)}catch(t){throw t instanceof Gs?new st(`milestones.creditsScale[${e}].threshold is not a valid serialized BigNumber; received ${JSON.stringify(i)}`):t}}function Wp(i){const e="milestones.creditsScale",t=It(i,e);if(t===void 0)throw new st(`${e} is missing (required)`);if(!Array.isArray(t))throw new st(`${e} must be an array; received ${yi(t)}`);const n=Jr(Vp),s=Jr(zp),r=new Map;let o;for(let a=0;a<t.length;a++){const c=p=>`${e}[${a}].${p}`,l=It(i,c("threshold")),u=It(i,c("name"));if(l===void 0)throw new st(`${c("threshold")} is missing (required)`);if(typeof l!="string")throw new st(`${c("threshold")} must be a serialized-BigNumber string; received ${yi(l)}`);const h=Gp(l,a);if(!h.gte(n))throw new st(`${c("threshold")} must be >= 1e6; received ${JSON.stringify(l)}`);if(o!==void 0&&!o.lt(h))throw new st(`${c("threshold")} must be strictly greater than the previous threshold (creditsScale must be strictly ascending); received ${JSON.stringify(l)}`);if(o=h,u===void 0)throw new st(`${c("name")} is missing (required)`);if(typeof u!="string")throw new st(`${c("name")} must be a non-empty string; received ${yi(u)}`);if(u.trim().length===0)throw new st(`${c("name")} must be a non-empty string; received ""`);if(u.length>Wu)throw new st(`${c("name")} must be <= ${Wu} characters; received ${u.length}`);const d=r.get(u);if(d!==void 0)throw new st(`${c("name")} must be unique; ${JSON.stringify(u)} already used at index ${d}`);r.set(u,a)}if(o!==void 0&&!o.lte(s)){const a=t.length-1,c=It(i,`${e}[${a}].threshold`);throw new st(`milestones.creditsScale[${a}].threshold (top of series) must be <= 1e27; received ${JSON.stringify(c)}`)}}const Xp=.5,qp=2,Xu=.01,$p="[0.5, 2.0]";function Yp(i){const e=It(i,"offline.baseCapHours"),t=It(i,"offline.maxCapHours");if(typeof e=="number"&&typeof t=="number"&&e>t)throw new st(`offline.baseCapHours (${e}) cannot exceed offline.maxCapHours (${t})`);const n=It(i,"upgrades.linearBoosts");if(Array.isArray(n))for(let s=0;s<n.length;s++)jp(i,s)}function Kp(i,e){const t=It(i,"generators");if(Array.isArray(t)){for(const n of t)if(typeof n=="object"&&n!==null&&n.tier===e)return n}}function jp(i,e){const t=g=>`upgrades.linearBoosts[${e}].${g}`,n=It(i,t("id")),s=It(i,t("targetTier")),r=It(i,t("cost")),o=It(i,t("prerequisiteOwnedCount"));if(typeof s!="number"||typeof r!="number"||typeof o!="number")return;const a=Kp(i,s),c=a==null?void 0:a.baseCost,l=a==null?void 0:a.costMultiplier;if(typeof c!="number"||typeof l!="number")return;const u=c*Math.pow(l,o);if(!Number.isFinite(u)||u<=0)return;const h=r/u,d=Xp*(1-Xu),p=qp*(1+Xu);if(h<d||h>p){const g=typeof n=="string"?JSON.stringify(n):`index ${e}`;throw new st(`upgrades.linearBoosts[${e}] (id ${g}) costFactor ${h.toFixed(2)} is outside the expected band ${$p}`)}}function Zp(i){const e=/position (\d+)/.exec(i);return e?Number(e[1]):0}function Gd(i){let e;try{e=JSON.parse(i)}catch(s){const r=s instanceof Error?s.message:String(s),o=Zp(r);throw new ru(`economy.json is not valid JSON at position ${o}`)}const t=e==null?void 0:e.meta,n=typeof(t==null?void 0:t.schemaVersion)=="number"?t.schemaVersion:0;if(n>qr)throw new ou(`economy.json schema version ${n} is newer than supported version ${qr}`);return n<qr&&typeof e=="object"&&e!==null&&!Array.isArray(e)&&(e=Sp(e)),Hp(e),Yp(e),Hd(e)}function jc(i){return an(i)?i.max(vt):vt}function Jp(i,e){return{get:()=>i.get().mul(jc(e.getExtraGlobalMultiplier())).mul(jc(e.getAutomationEfficiencyBonus()))}}function Qp(i,e){return{getBoostMultiplier:t=>i.getBoostMultiplier(t).mul(jc(e.getTierBoost(t)))}}const Wd=-1,Q={CREDITS_UPDATED:"CREDITS_UPDATED",PURCHASE_REJECTED:"PURCHASE_REJECTED",BUY_MODE_CHANGED:"BUY_MODE_CHANGED",GENERATOR_PURCHASED:"GENERATOR_PURCHASED",GENERATOR_RATE_CHANGED:"GENERATOR_RATE_CHANGED",GENERATORS_RESET_COMPLETE:"GENERATORS_RESET_COMPLETE",GENERATORS_RESTORED:"GENERATORS_RESTORED",BOOSTS_CHANGED:"BOOSTS_CHANGED",UPGRADE_PURCHASED:"UPGRADE_PURCHASED",UPGRADE_PURCHASE_REJECTED:"UPGRADE_PURCHASE_REJECTED",AUTOMATION_UNLOCKED:"AUTOMATION_UNLOCKED",UPGRADE_RESET:"UPGRADE_RESET",INTENT_AUTO_BUY_GENERATOR:"INTENT_AUTO_BUY_GENERATOR",INTENT_TAP_FORGE:"INTENT_TAP_FORGE",INTENT_BUY_GENERATOR:"INTENT_BUY_GENERATOR",INTENT_SET_BUY_MODE:"INTENT_SET_BUY_MODE",INTENT_CONFIRM_ASCENSION:"INTENT_CONFIRM_ASCENSION",INTENT_HOLD_PROGRESS:"INTENT_HOLD_PROGRESS",INTENT_DISMISS_MODAL:"INTENT_DISMISS_MODAL",INTENT_DISMISS_OVERLAY:"INTENT_DISMISS_OVERLAY",EPOCH_CHANGED:"EPOCH_CHANGED",SAVE_FAILED:"SAVE_FAILED",SAVE_LOAD_FAILED:"SAVE_LOAD_FAILED",SAVE_CONFLICT:"SAVE_CONFLICT",ASCENSION_STARTED:"ASCENSION_STARTED",ASCENSION_COMPLETE:"ASCENSION_COMPLETE",MILESTONE_REACHED:"MILESTONE_REACHED",CLOCK_GAP_DETECTED:"CLOCK_GAP_DETECTED",DARK_MATTER_UPDATED:"DARK_MATTER_UPDATED",DM_UPGRADE_PURCHASED:"DM_UPGRADE_PURCHASED",DM_TREE_CAPSTONE_SELECTED:"DM_TREE_CAPSTONE_SELECTED",OFFLINE_EARNINGS_APPLIED:"OFFLINE_EARNINGS_APPLIED"},em=!1,tm=50,nm=20,im=!1;class qu extends Error{constructor(e,t){super(`[EventBus] Recursion depth ${t} exceeded (key chain: ${e})`),this.name="EventBusRecursionError"}}class sm{constructor(e={}){Y(this,"_rethrowListenerErrors");Y(this,"_maxDispatchDepth");Y(this,"_listenerLeakWarn");Y(this,"_freezePayloads");Y(this,"_logger");Y(this,"_listeners");Y(this,"_depth",0);Y(this,"_keyStack",[]);Y(this,"_leakWarnedKeys",new Set);Y(this,"_asyncWarnedKeys",new Set);this._rethrowListenerErrors=e.rethrowListenerErrors??em,this._maxDispatchDepth=e.maxDispatchDepth??tm,this._listenerLeakWarn=e.listenerLeakWarn??nm,this._freezePayloads=e.freezePayloads??im,this._logger=e.logger,this._listeners=new Map}get config(){return{rethrowListenerErrors:this._rethrowListenerErrors,maxDispatchDepth:this._maxDispatchDepth,listenerLeakWarn:this._listenerLeakWarn,freezePayloads:this._freezePayloads,logger:this._logger}}on(e,t){var r,o;const n=this._listeners.get(e);n===void 0?this._listeners.set(e,[t]):n.includes(t)||n.push(t);const s=((r=this._listeners.get(e))==null?void 0:r.length)??0;return s>this._listenerLeakWarn&&!this._leakWarnedKeys.has(e)&&(this._leakWarnedKeys.add(e),(o=this._logger)==null||o.call(this,`[EventBus] Possible listener leak on "${String(e)}": ${s} listeners (threshold ${this._listenerLeakWarn}). A subscriber is likely missing its unsubscribe.`)),()=>{this.off(e,t)}}once(e,t){const n=s=>{this.off(e,n),t(s)};return this.on(e,n)}off(e,t){const n=this._listeners.get(e);if(n===void 0)return;const s=n.indexOf(t);s!==-1&&n.splice(s,1)}listenerCount(e){var t;return((t=this._listeners.get(e))==null?void 0:t.length)??0}emit(e,t){var n,s;this._depth+=1,this._keyStack.push(e);try{if(this._depth>this._maxDispatchDepth)throw new qu(this._keyStack.join("→"),this._depth);this._freezePayloads&&Object.freeze(t);const r=this._listeners.get(e);if(r===void 0)return;const o=r.slice();let a,c=!1;for(let l=0;l<o.length;l+=1){const u=o[l];try{const h=u(t);if(h!=null&&typeof h.then=="function"){const d=u.name===""?"<anon>":u.name,p=`${String(e)}:${d}`;this._asyncWarnedKeys.has(p)||(this._asyncWarnedKeys.add(p),(n=this._logger)==null||n.call(this,`[EventBus] async handler "${d}" on "${String(e)}" returned a Promise. Async handlers are not supported (GDD Rule 12) — the Promise is ignored. Make the handler synchronous.`))}}catch(h){if(h instanceof qu)throw h;const d=u.name===""?"anonymous":u.name;(s=this._logger)==null||s.call(this,`[EventBus] listener "${d}" threw while handling event "${String(e)}":`,h),this._rethrowListenerErrors&&!c&&(a=h,c=!0)}}if(c)throw a}finally{this._keyStack.pop(),this._depth-=1}}}const rm=1e3;class om{constructor(e,t){Y(this,"_config");Y(this,"_tickRateMs");Y(this,"_maxCatchupSteps");Y(this,"_gapThresholdMs");Y(this,"_dtSeconds");Y(this,"_bus");Y(this,"_consumers",[]);Y(this,"_accumulator",0);Y(this,"_isRunning",!0);const{tickRateMs:n,maxCatchupSteps:s,gapThresholdMs:r,liveBudgetCeilingMs:o}=e;if(!(n>=50&&n<=500))throw new Error(`GameClock: tickRateMs ${n} outside [50,500]`);if(!(s>=1&&s<=20))throw new Error(`GameClock: maxCatchupSteps ${s} outside [1,20]`);if(!(r>=2e3&&r<=5e3))throw new Error(`GameClock: gapThresholdMs ${r} outside [2000,5000]`);if(!Number.isFinite(o))throw new Error(`GameClock: liveBudgetCeilingMs ${o} must be a finite number`);if(r<=n*s)throw new Error(`GameClock: gapThresholdMs (${r}) must exceed tickRateMs*maxCatchupSteps (${n*s})`);if(n*s>o)throw new Error(`GameClock: tickRateMs*maxCatchupSteps (${n*s}) exceeds liveBudgetCeilingMs (${o})`);this._config={...e},this._tickRateMs=this._config.tickRateMs,this._maxCatchupSteps=this._config.maxCatchupSteps,this._gapThresholdMs=this._config.gapThresholdMs,this._dtSeconds=this._config.tickRateMs/rm,this._bus=t}register(e){return this._consumers.includes(e)||this._consumers.push(e),()=>{const t=this._consumers.indexOf(e);t!==-1&&this._consumers.splice(t,1)}}advance(e){if(!this._isRunning)return{steps:0,stallGapFired:!1};if(!Number.isFinite(e)||e<=0)return{steps:0,stallGapFired:!1};this._accumulator+=e;let t=0;const n=[...this._consumers];for(;this._accumulator>=this._tickRateMs&&t<this._maxCatchupSteps;){for(const r of n)r(this._dtSeconds);this._accumulator-=this._tickRateMs,t+=1}let s=!1;if(this._accumulator>this._gapThresholdMs){const r=this._accumulator-this._accumulator%this._tickRateMs;this._bus.emit(Q.CLOCK_GAP_DETECTED,{elapsedMs:r,source:"stall"}),this._accumulator=this._accumulator%this._tickRateMs,s=!0}return{steps:t,stallGapFired:s}}reportGap(e){!Number.isFinite(e)||e<=0||this._bus.emit(Q.CLOCK_GAP_DETECTED,{elapsedMs:e,source:"visibility"})}pause(){this._isRunning=!1}resume(){this._isRunning=!0}isRunning(){return this._isRunning}}const Mn=1,hn=9;var wt,fi,oo,ao,Fi,pi,co,Ka,lo,kt,Di,Xd,Gr;class am{constructor(e,t,n){X(this,kt);X(this,wt);X(this,fi);X(this,oo);X(this,ao);X(this,Fi);X(this,pi);X(this,co);X(this,Ka,({tier:e})=>{if(e===Wd){for(let t=Mn;t<=hn;t+=1)this.isUnlocked(t)&&v(this,wt)[t]>0&&re(this,kt,Gr).call(this,t,v(this,pi)[t]??we);return}!Number.isInteger(e)||e<Mn||e>hn||this.isUnlocked(e)&&v(this,wt)[e]>0&&re(this,kt,Gr).call(this,e,v(this,pi)[e]??we)});X(this,lo);G(this,wt,new Array(hn+1).fill(0)),G(this,Fi,t),G(this,pi,new Array(hn+1).fill(void 0));const s=new Array(hn+1).fill(void 0);for(const a of e.generators)Number.isInteger(a.tier)&&a.tier>=Mn&&a.tier<=hn&&(s[a.tier]=a);G(this,fi,s),G(this,oo,n),G(this,lo,e.upgrades.milestones.filter(a=>Number.isFinite(a.ownedCount)&&a.ownedCount>0&&Number.isFinite(a.productionMultiplier)&&a.productionMultiplier>0));let r=!1,o=!0;for(let a=Mn;a<=hn;a+=1){const c=s[a];c!==void 0&&(r=!0,c.enabled&&(o=!1))}G(this,ao,r&&o),G(this,co,t.on(Q.BOOSTS_CHANGED,v(this,Ka)))}getOwned(e){return re(this,kt,Di).call(this,e,"getOwned"),v(this,wt)[e]}isUnlocked(e){if(re(this,kt,Di).call(this,e,"isUnlocked"),v(this,ao))return e===Mn?!0:v(this,fi)[e]===void 0?!1:v(this,wt)[e-1]>=1;const t=v(this,fi)[e];return t===void 0||!t.enabled?!1:e===Mn?!0:v(this,wt)[e-1]>=1}getCost(e,t=1){if(re(this,kt,Di).call(this,e,"getCost"),!Number.isInteger(t)||t<1)return we;const n=v(this,fi)[e];if(n===void 0)return we;const s=v(this,wt)[e],r=n.costMultiplier,o=dt(n.baseCost).mul(dt(r).pow(s));return t===1?o:r===1?o.mul(t):o.mul(dt(r).pow(t).sub(vt).div(r-1))}getMaxAffordable(e,t){re(this,kt,Di).call(this,e,"getMaxAffordable");const n=v(this,fi)[e];if(n===void 0||!an(t))return 0;const s=this.getCost(e,1);if(s.lte(we))return 0;const r=t.div(s);if(r.lte(we))return 0;const o=n.costMultiplier,a=r.toNumber();let c;if(o===1){if(!isFinite(a))return 0;c=Math.floor(a)}else isFinite(a)?c=Math.floor(Math.log(a*(o-1)+1)/Math.log(o)):c=Math.floor(r.mul(o-1).add(vt).log10()/Math.log10(o));if(!Number.isFinite(c)||c>=Number.MAX_SAFE_INTEGER)return 0;for(;this.getCost(e,c+1).lte(t);)c+=1;for(;c>0&&this.getCost(e,c).gt(t);)c-=1;return Math.max(0,c)}getMilestoneMultiplier(e){re(this,kt,Di).call(this,e,"getMilestoneMultiplier");const t=v(this,wt)[e];let n=vt;for(const s of v(this,lo))s.ownedCount<=t&&(n=n.mul(dt(s.productionMultiplier)));return n}getTierRate(e){if(re(this,kt,Di).call(this,e,"getTierRate"),!this.isUnlocked(e))return we;const t=v(this,wt)[e];if(t===0)return we;const n=v(this,fi)[e];return n===void 0?we:dt(n.baseOutput).mul(t).mul(this.getMilestoneMultiplier(e)).mul(re(this,kt,Xd).call(this,e))}getTotalBaseRate(){let e=we;for(let t=Mn;t<=hn;t+=1)e=e.add(this.getTierRate(t));return e}applyPurchase(e,t){if(re(this,kt,Di).call(this,e,"applyPurchase"),!this.isUnlocked(e)||!Number.isInteger(t)||t<1)return;const n=v(this,wt)[e],s=v(this,pi)[e]??this.getTierRate(e);v(this,wt)[e]+=t,v(this,Fi).emit(Q.GENERATOR_PURCHASED,{tier:e,previousOwned:n,owned:v(this,wt)[e]}),re(this,kt,Gr).call(this,e,s)}resetRun(){const e=[];for(let t=Mn;t<=hn;t+=1)v(this,wt)[t]>0&&e.push({tier:t,previousRate:this.getTierRate(t)});v(this,wt).fill(0);for(const{tier:t,previousRate:n}of e)re(this,kt,Gr).call(this,t,n);v(this,Fi).emit(Q.GENERATORS_RESET_COMPLETE,{})}serialize(){const e=[];for(let t=Mn;t<=hn;t+=1)v(this,wt)[t]>0&&e.push({tier:t,owned:v(this,wt)[t]});return e}restore(e){v(this,wt).fill(0);for(const t of e)Number.isInteger(t.tier)&&t.tier>=Mn&&t.tier<=hn&&(v(this,wt)[t.tier]=Number.isFinite(t.owned)&&t.owned>=0?Math.floor(t.owned):0);v(this,pi).fill(void 0),v(this,Fi).emit(Q.GENERATORS_RESTORED,{})}dispose(){v(this,co).call(this)}}wt=new WeakMap,fi=new WeakMap,oo=new WeakMap,ao=new WeakMap,Fi=new WeakMap,pi=new WeakMap,co=new WeakMap,Ka=new WeakMap,lo=new WeakMap,kt=new WeakSet,Di=function(e,t){if(!Number.isInteger(e)||e<Mn||e>hn)throw new RangeError(`${t}: tier must be an integer in [${Mn}, ${hn}], got ${e}`)},Xd=function(e){var t;return((t=v(this,oo))==null?void 0:t.getBoostMultiplier(e))??vt},Gr=function(e,t){const n=this.getTierRate(e);v(this,pi)[e]=n,v(this,Fi).emit(Q.GENERATOR_RATE_CHANGED,{tier:e,rate:n,rateDelta:n.sub(t)})};const $u=["x1","x10","xmax"],Yu="x1",cm=1,lm=10,Ku=1;var rn,mi,gi,Gn,uo,ho,Tn,pn,Ys,ja,fo,yt,Zc,Bs,Pa,qd,$d,Yd,Kd;class um{constructor(e,t,n,s,r){X(this,yt);X(this,rn,we);X(this,mi,we);X(this,gi,we);X(this,Gn,Yu);X(this,uo);X(this,ho);X(this,Tn);X(this,pn);X(this,Ys,!1);X(this,ja,e=>{const t=v(this,pn).getTotalBaseRate().mul(e);if(t.gt(we)){G(this,Ys,!0);try{this.earn(t)}finally{G(this,Ys,!1)}}re(this,yt,Bs).call(this)});X(this,fo);const o=e.currencies.credits.tapAmount;if(!(Number.isFinite(o)&&o>0))throw new Error(`CreditsSystem: currencies.credits.tapAmount ${o} must be a finite number > 0 (AC-B3-07 / EC-9)`);G(this,uo,dt(o)),G(this,Tn,t),G(this,pn,n),G(this,ho,s),G(this,fo,[t.on(Q.INTENT_TAP_FORGE,()=>{this.earn(v(this,uo))}),t.on(Q.INTENT_BUY_GENERATOR,({tier:a})=>{re(this,yt,$d).call(this,a)}),t.on(Q.INTENT_SET_BUY_MODE,({mode:a})=>{re(this,yt,qd).call(this,a)}),t.on(Q.INTENT_AUTO_BUY_GENERATOR,({tier:a})=>{re(this,yt,Yd).call(this,a)}),r.register(v(this,ja))])}earn(e){if(!an(e)||!e.gt(we)){console.warn("CreditsSystem: earn() rejected a non-finite or non-positive base (F-B3-03 guard)",e);return}const t=re(this,yt,Zc).call(this),n=e.mul(t);G(this,rn,v(this,rn).add(n)),G(this,mi,v(this,mi).add(n)),G(this,gi,v(this,gi).add(e)),v(this,Ys)||re(this,yt,Bs).call(this,t)}spend(e){return!an(e)||!e.gt(we)||!v(this,rn).gte(e)?!1:(G(this,rn,v(this,rn).sub(e)),re(this,yt,Bs).call(this),!0)}addOfflineEarnings(e){if(!an(e)||!e.gt(we)){console.warn("CreditsSystem: rejected invalid offline lump (F-B3-06 / EC-4)",e);return}this.earn(e)}resetRun(){G(this,rn,we),G(this,mi,we),G(this,gi,we),re(this,yt,Bs).call(this)}serialize(){return{balance:Ui(v(this,rn)),lifetimeCredits:Ui(v(this,mi)),lifetimeBaseCredits:Ui(v(this,gi)),buyMode:v(this,Gn)}}restore(e){G(this,rn,re(this,yt,Pa).call(this,"balance",e.balance)),G(this,mi,re(this,yt,Pa).call(this,"lifetimeCredits",e.lifetimeCredits)),G(this,gi,re(this,yt,Pa).call(this,"lifetimeBaseCredits",e.lifetimeBaseCredits)),G(this,Gn,e.buyMode!==void 0&&$u.includes(e.buyMode)?e.buyMode:Yu),re(this,yt,Bs).call(this),v(this,Tn).emit(Q.BUY_MODE_CHANGED,{mode:v(this,Gn)})}getBalance(){return v(this,rn)}getLifetimeCredits(){return v(this,mi)}getLifetimeBaseCredits(){return v(this,gi)}getBuyMode(){return v(this,Gn)}dispose(){for(const e of v(this,fo))e()}}rn=new WeakMap,mi=new WeakMap,gi=new WeakMap,Gn=new WeakMap,uo=new WeakMap,ho=new WeakMap,Tn=new WeakMap,pn=new WeakMap,Ys=new WeakMap,ja=new WeakMap,fo=new WeakMap,yt=new WeakSet,Zc=function(){const e=v(this,ho).get();return!an(e)||e.lt(vt)?(console.warn("CreditsSystem: F-B3-01 clamped a malformed global multiplier to ONE (provider contract: finite >= ONE)",e),vt):e},Bs=function(e){const t=v(this,pn).getTotalBaseRate().mul(e??re(this,yt,Zc).call(this));v(this,Tn).emit(Q.CREDITS_UPDATED,{balance:v(this,rn),ratePerSec:t})},Pa=function(e,t){let n;try{n=Jr(t)}catch(s){if(!(s instanceof Gs))throw s;return console.warn(`CreditsSystem: restore() clamped corrupted field '${e}' to ZERO — deserialize rejected the persisted string (EC-5 / R13)`,t),we}return!an(n)||!n.gte(we)?(console.warn(`CreditsSystem: restore() clamped invalid field '${e}' to ZERO — non-finite or negative after deserialize (EC-5 / R13)`,t),we):n},qd=function(e){!$u.includes(e)||e===v(this,Gn)||(G(this,Gn,e),v(this,Tn).emit(Q.BUY_MODE_CHANGED,{mode:e}))},$d=function(e){if(!v(this,pn).isUnlocked(e)){v(this,Tn).emit(Q.PURCHASE_REJECTED,{reason:"locked"});return}const t=re(this,yt,Kd).call(this,e);if(t===0){v(this,Tn).emit(Q.PURCHASE_REJECTED,{reason:"qty_zero"});return}const n=v(this,pn).getCost(e,t);this.spend(n)?v(this,pn).applyPurchase(e,t):v(this,Tn).emit(Q.PURCHASE_REJECTED,{reason:"insufficient_balance"})},Yd=function(e){if(!v(this,pn).isUnlocked(e)){v(this,Tn).emit(Q.PURCHASE_REJECTED,{reason:"locked"});return}const t=v(this,pn).getCost(e,Ku);this.spend(t)?v(this,pn).applyPurchase(e,Ku):v(this,Tn).emit(Q.PURCHASE_REJECTED,{reason:"insufficient_balance"})},Kd=function(e){switch(v(this,Gn)){case"x1":return cm;case"x10":return lm;case"xmax":return v(this,pn).getMaxAffordable(e,v(this,rn))}};function ju(i){return Number.isFinite(i)?dt(i).max(vt):vt}function hm(i){return Number.isFinite(i)?dt(i):null}function na(i){return hm("cost"in i?i.cost:i.unlockCost)}function dm(i){return an(i)?i:we}function fm(i){return`manager:tier${i}`}var Ks,Wn,Xn,js,Zs,po,mn,mo,qn,go,Et,ks,Jc,Hs,jd,Qc,Zd;class pm{constructor(e,t,n,s,r){X(this,Et);X(this,Ks);X(this,Wn,new Set);X(this,Xn,{});X(this,js);X(this,Zs);X(this,po);X(this,mn);X(this,mo);X(this,qn);X(this,go);re(this,Et,Zd).call(this,e),G(this,js,n),G(this,Zs,s),G(this,mn,t),G(this,go,r)}getBoostMultiplier(e){return v(this,Ks).filter(t=>t.targetTier===e&&v(this,Wn).has(t.id)).reduce((t,n)=>t.mul(ju(n.multiplier)),vt)}isManagerUnlocked(e){return v(this,Xn)[e]===!0}isVisible(e){return re(this,Et,ks).call(this,e.targetTier,e.prerequisiteOwnedCount)}isAvailable(e){return re(this,Et,Jc).call(this,e.id,e.targetTier,e)}getUpgradeState(e){const t=v(this,qn).get(e);if(t===void 0)return"LOCKED";const{entry:n,targetTier:s}=t;return re(this,Et,Hs).call(this,e,s,n)?"PURCHASED":re(this,Et,ks).call(this,s,n.prerequisiteOwnedCount)?re(this,Et,Jc).call(this,e,s,n)?"AVAILABLE":"UNAFFORDABLE":"LOCKED"}getProjectedTierRate(e,t){const n=v(this,js).getTierRate(e),s=v(this,qn).get(t),r=s!==void 0&&"multiplier"in s.entry?s.entry:void 0;return r===void 0?(console.warn("UpgradeSystem: getProjectedTierRate received an unknown or non-boost upgradeId; returning the base tier rate (F-B4-04)",t),n):dm(n).mul(ju(r.multiplier))}getSortedVisibleUpgrades(){const e=[];for(const[t,n]of v(this,qn))re(this,Et,ks).call(this,n.targetTier,n.entry.prerequisiteOwnedCount)&&e.push({entry:n.entry,id:t,targetTier:n.targetTier,costKey:na(n.entry),purchased:re(this,Et,Hs).call(this,t,n.targetTier,n.entry)?1:0});return e.sort((t,n)=>{if(t.targetTier!==n.targetTier)return t.targetTier-n.targetTier;if(t.purchased!==n.purchased)return t.purchased-n.purchased;if(t.costKey!==null&&n.costKey!==null){const s=t.costKey.cmp(n.costKey);if(s!==0)return s}else{if(t.costKey===null&&n.costKey!==null)return 1;if(t.costKey!==null&&n.costKey===null)return-1}return t.id<n.id?-1:t.id>n.id?1:0}),e.map(t=>t.entry)}getCheapestAvailableUpgradeCost(){let e=null;for(const[t,n]of v(this,qn)){if(re(this,Et,Hs).call(this,t,n.targetTier,n.entry)||!re(this,Et,ks).call(this,n.targetTier,n.entry.prerequisiteOwnedCount))continue;const s=na(n.entry);s!==null&&(e===null||s.lt(e))&&(e=s)}return e??we}purchase(e){const t=v(this,qn).get(e);if(t===void 0){v(this,mn).emit(Q.UPGRADE_PURCHASE_REJECTED,{upgradeId:e,reason:"not_found"});return}if(re(this,Et,Hs).call(this,e,t.targetTier,t.entry))return;const n=na(t.entry);if(n===null||n.lte(we)){v(this,mn).emit(Q.UPGRADE_PURCHASE_REJECTED,{upgradeId:e,reason:"invalid_cost"});return}if(!v(this,Zs).spend(n)){v(this,mn).emit(Q.UPGRADE_PURCHASE_REJECTED,{upgradeId:e,reason:"insufficient_balance"});return}this.markUpgradePurchased(e);const{type:s,targetTier:r}=t;s==="LinearBoost"?(v(this,mn).emit(Q.BOOSTS_CHANGED,{tier:r}),v(this,mn).emit(Q.UPGRADE_PURCHASED,{upgradeId:e,type:s,targetTier:r})):(v(this,Xn)[r]=!0,v(this,mn).emit(Q.AUTOMATION_UNLOCKED,{tier:r}),v(this,mn).emit(Q.UPGRADE_PURCHASED,{upgradeId:e,type:s,targetTier:r}))}markUpgradePurchased(e){v(this,Wn).add(e)}getState(){return{purchasedUpgrades:[...v(this,Wn)],managerUnlocked:{...v(this,Xn)}}}loadState(e){if(v(this,Wn).clear(),re(this,Et,Qc).call(this),e==null)return;const t=e.purchasedUpgrades;if(Array.isArray(t))for(const s of t)v(this,qn).has(s)?v(this,Wn).add(s):console.warn("UpgradeSystem.loadState: dropping a purchased upgradeId absent from the current catalog (removed in a patch?)",s);else t!==void 0&&console.warn("UpgradeSystem.loadState: purchasedUpgrades is not an array; defaulting to empty",t);const n=e.managerUnlocked;if(n!==null&&typeof n=="object"&&!Array.isArray(n))for(const[s,r]of Object.entries(n))r===!0&&(v(this,Xn)[Number(s)]=!0);else n!==void 0&&console.warn("UpgradeSystem.loadState: managerUnlocked is not a plain object; defaulting to all-locked",n)}reset(){var t;v(this,Wn).clear();let e=!1;try{e=((t=v(this,go))==null?void 0:t.shouldPersistManagers())===!0}catch{e=!1}e||re(this,Et,Qc).call(this),v(this,mn).emit(Q.BOOSTS_CHANGED,{tier:Wd}),v(this,mn).emit(Q.UPGRADE_RESET,{})}onConfigReload(e){{console.warn("UpgradeSystem.onConfigReload is a dev-only hot-reload convenience and is a no-op in a production build (live catalog swap refused — anti-cheat)");return}}}Ks=new WeakMap,Wn=new WeakMap,Xn=new WeakMap,js=new WeakMap,Zs=new WeakMap,po=new WeakMap,mn=new WeakMap,mo=new WeakMap,qn=new WeakMap,go=new WeakMap,Et=new WeakSet,ks=function(e,t){return re(this,Et,jd).call(this,e)&&v(this,js).getOwned(e)>=t},Jc=function(e,t,n){if(!re(this,Et,ks).call(this,t,n.prerequisiteOwnedCount)||re(this,Et,Hs).call(this,e,t,n))return!1;const s=na(n);return s===null?!1:v(this,Zs).getBalance().gte(s)},Hs=function(e,t,n){return"multiplier"in n?v(this,Wn).has(e):v(this,Xn)[t]===!0},jd=function(e){return v(this,po)[e-1]===!0},Qc=function(){for(const e of Object.keys(v(this,Xn)))delete v(this,Xn)[Number(e)]},Zd=function(e){var n,s;G(this,Ks,Object.freeze((((n=e.upgrades)==null?void 0:n.linearBoosts)??[]).map(r=>Object.freeze({...r})))),G(this,mo,Object.freeze((((s=e.upgrades)==null?void 0:s.managers)??[]).map(r=>Object.freeze({...r}))));const t=new Map;for(const r of v(this,Ks))t.set(r.id,{entry:r,type:"LinearBoost",targetTier:r.targetTier});v(this,mo).forEach((r,o)=>{const a=o+1;t.set(fm(a),{entry:r,type:"AutomationUnlock",targetTier:a})}),G(this,qn,t),G(this,po,Object.freeze((e.generators??[]).map(r=>r.enabled===!0)))};var _o,Js,vo,Qs,xo,Eo,Za,Jd;class mm{constructor(e){X(this,Za);X(this,_o);X(this,Js);X(this,vo);X(this,Qs);X(this,xo);X(this,Eo);G(this,_o,e.bus),G(this,Js,e.b2),G(this,vo,e.b3),G(this,Qs,e.b4),G(this,xo,e.reserveFraction),G(this,Eo,[...e.enabledTiers].sort((t,n)=>n-t)),e.clock.register(()=>re(this,Za,Jd).call(this))}}_o=new WeakMap,Js=new WeakMap,vo=new WeakMap,Qs=new WeakMap,xo=new WeakMap,Eo=new WeakMap,Za=new WeakSet,Jd=function(){const e=v(this,Qs).getCheapestAvailableUpgradeCost().mul(v(this,xo));for(const t of v(this,Eo)){if(!v(this,Qs).isManagerUnlocked(t)||!v(this,Js).isUnlocked(t))continue;const n=v(this,Js).getCost(t,1).add(e);v(this,vo).getBalance().gte(n)&&v(this,_o).emit(Q.INTENT_AUTO_BUY_GENERATOR,{tier:t})}};const Zu=9;var ds,Mo,bn,So,Hn,Qd,el,ef,tf;class gm{constructor(e,t){X(this,Hn);X(this,ds);X(this,Mo);X(this,bn,0);X(this,So);G(this,ds,e),G(this,Mo,t),G(this,So,[e.on(Q.GENERATOR_PURCHASED,n=>re(this,Hn,Qd).call(this,n)),e.on(Q.GENERATORS_RESTORED,()=>re(this,Hn,ef).call(this)),e.on(Q.GENERATORS_RESET_COMPLETE,()=>re(this,Hn,tf).call(this))])}getEpoch(){return v(this,bn)}dispose(){for(const e of v(this,So))e()}}ds=new WeakMap,Mo=new WeakMap,bn=new WeakMap,So=new WeakMap,Hn=new WeakSet,Qd=function(e){const{tier:t,owned:n}=e;n>=1&&Number.isInteger(t)&&t>=1&&t<=Zu&&t>v(this,bn)&&(G(this,bn,t),v(this,ds).emit(Q.EPOCH_CHANGED,{epoch:v(this,bn)}))},el=function(){for(let e=Zu;e>=1;e--)if(v(this,Mo).getOwned(e)>=1)return e;return 0},ef=function(){G(this,bn,re(this,Hn,el).call(this)),v(this,ds).emit(Q.EPOCH_CHANGED,{epoch:v(this,bn)})},tf=function(){const e=re(this,Hn,el).call(this);e!==v(this,bn)&&(G(this,bn,e),v(this,ds).emit(Q.EPOCH_CHANGED,{epoch:v(this,bn)}))};const _m=Object.freeze({addDarkMatter:()=>{},isNoOp:!0});var yo,To,bo,fs,er,Ao,wo,ps,Bi,Ro,tl;class vm{constructor(e,t,n,s,r,o){X(this,Ro);X(this,yo);X(this,To);X(this,bo);X(this,fs);X(this,er);X(this,Ao);X(this,wo);X(this,ps);X(this,Bi,0);xm(e.ascension),G(this,yo,dt(e.ascension.constant)),G(this,To,dt(e.ascension.creditsDivisor)),G(this,bo,e.ascension.exponent),G(this,fs,s),G(this,er,t),G(this,Ao,n),G(this,wo,r),G(this,ps,o??_m)}assertRealProviderInstalled(){if(v(this,ps).isNoOp===!0)throw new Error("AscensionSystem: real DarkMatterProvider never installed — setDarkMatterProvider() was not called before boot step 6 (production wiring fault; refusing to silently mint 0 Dark Matter)")}setDarkMatterProvider(e){G(this,ps,e)}getRunCount(){return v(this,Bi)}serialize(){return{runCount:v(this,Bi)}}restore(e){const t=e==null?void 0:e.runCount;if(typeof t!="number"||!Number.isSafeInteger(t)||t<0)throw new Error(`AscensionSystem.restore: invalid runCount (${String(t)}) — must be a non-negative safe integer`);G(this,Bi,t)}getEstimatedDM(){return re(this,Ro,tl).call(this,v(this,fs).getLifetimeBaseCredits())}canAscend(){return this.getEstimatedDM().gte(vt)}executeAscension(){if(!this.canAscend())throw new Error("AscensionSystem.executeAscension: canAscend() is false (programming error — E5 must gate the Ascend button)");this.assertRealProviderInstalled(),v(this,er).emit(Q.ASCENSION_STARTED,{});const e=v(this,fs).getLifetimeBaseCredits(),t=re(this,Ro,tl).call(this,e);v(this,fs).resetRun(),v(this,Ao).resetRun(),v(this,wo).reset(),v(this,ps).addDarkMatter(t,e),ea(this,Bi)._++,v(this,er).emit(Q.ASCENSION_COMPLETE,{dmGained:t,runCount:v(this,Bi)})}}yo=new WeakMap,To=new WeakMap,bo=new WeakMap,fs=new WeakMap,er=new WeakMap,Ao=new WeakMap,wo=new WeakMap,ps=new WeakMap,Bi=new WeakMap,Ro=new WeakSet,tl=function(e){if(e.lt(we))throw new Error("AscensionSystem.computeDM: basis < 0 violates the B3 lifetimeBaseCredits invariant");if(e.eq(we))return we;const t=e.div(v(this,To)),n=$o(t,v(this,bo));return v(this,yo).mul(n).floor()};function xm(i){const{constant:e,creditsDivisor:t,exponent:n}=i;if(!Number.isFinite(e)||e<0)throw new Error(`AscensionSystem: invalid ascension.constant (K=${e}) — must be finite and >= 0`);if(!Number.isFinite(t)||t<=0)throw new Error(`AscensionSystem: invalid ascension.creditsDivisor (D=${t}) — must be finite and > 0`);if(!Number.isFinite(n)||n<=0)throw new Error(`AscensionSystem: invalid ascension.exponent (E=${n}) — must be finite and > 0`)}var Co,Lo,on,Wt,An,Ft,tr,Xi,Da,nf;class Em{constructor(e,t,n){X(this,Xi);X(this,Co);X(this,Lo);X(this,on,we);X(this,Wt,we);X(this,An,we);X(this,Ft,"UNINITIALIZED");X(this,tr);Mm(t.ascension),G(this,Co,e),G(this,Lo,n),G(this,tr,dt(t.ascension.dmMultiplierPerPoint))}initFresh(){if(v(this,Ft)!=="UNINITIALIZED")throw new Error(`DarkMatterSystem.initFresh: expected UNINITIALIZED, got ${v(this,Ft)} — fresh-init must run exactly once at boot, before restore()`);G(this,Ft,"LIVE")}getState(){return v(this,Ft)}getBalance(){return v(this,on)}getTotalSpent(){return v(this,Wt)}getLifetimeMinted(){return v(this,An)}get(){return v(this,Ft)!=="LIVE"?vt:vt.plus(v(this,tr).times(v(this,Wt)))}getMultiplierPreview(e){if(e.lt(we))throw new Error(`DarkMatterSystem.getMultiplierPreview: additionalDM (${e.toString()}) must be >= 0 (EC-C3-15)`);return vt.plus(v(this,tr).times(v(this,Wt).plus(e)))}addDarkMatter(e,t){if(e.lt(we))throw new Error(`DarkMatterSystem.addDarkMatter: amount (${e.toString()}) must be >= 0 (EC-C3-02)`);if(v(this,Ft)!=="LIVE")throw new Error(`DarkMatterSystem.addDarkMatter: state is ${v(this,Ft)}, must be LIVE — minting during boot/restore is a fault (EC-C3-12)`);G(this,on,v(this,on).plus(e)),G(this,An,v(this,An).plus(e)),re(this,Xi,Da).call(this)}spendDarkMatter(e){if(e.lt(we))throw new Error(`DarkMatterSystem.spendDarkMatter: amount (${e.toString()}) must be >= 0 (EC-C3-04)`);if(v(this,Ft)!=="LIVE")throw new Error(`DarkMatterSystem.spendDarkMatter: state is ${v(this,Ft)}, must be LIVE — spending during boot/restore is a fault (systems R5)`);return e.eq(we)?!0:v(this,on).gte(e)?(G(this,on,v(this,on).minus(e)),G(this,Wt,v(this,Wt).plus(e)),re(this,Xi,Da).call(this),!0):!1}serialize(){return{darkMatter:Ui(v(this,on)),totalDMSpent:Ui(v(this,Wt)),lifetimeDMMinted:Ui(v(this,An))}}restore(e,t,n){var c;if(v(this,Ft)!=="UNINITIALIZED")throw new Error(`DarkMatterSystem.restore: expected UNINITIALIZED, got ${v(this,Ft)} — restore must run once at boot, not over a live ledger`);G(this,Ft,"RESTORING");const s=uc(e),r=uc(t);let o=uc(n);if(o===au||o===us){const l=Ms(r)?r:we;Ms(s)?(o=s.plus(l),console.info("C3.restore: backfilled lifetimeDMMinted from darkMatter + (valid) totalDMSpent (legacy save)")):Ms(r)&&(o=l,console.info("C3.restore: backfilled lifetimeDMMinted from totalDMSpent only (legacy save, darkMatter unusable)"))}r===us&&console.error("C3.restore: totalDMSpent corrupt — defaulting to 0 (multiplier history lost)"),G(this,Wt,Ms(r)?r:we),G(this,An,Ms(o)?o:we);const a=v(this,An).minus(v(this,Wt));G(this,on,a.lt(we)?we:a),s===us?console.warn("C3.restore: stored darkMatter corrupt/unusable — using ledger-derived value"):Ms(s)&&r!==us&&!s.eq(v(this,on))&&console.warn("C3.restore: stored darkMatter disagrees with ledger — using derived value"),v(this,Wt).gt(v(this,An))&&(console.error("C3.restore: LEDGER INCONSISTENCY — totalDMSpent > lifetimeDMMinted; clamping totalDMSpent down"),(c=v(this,Lo))==null||c.call(this,"dm_ledger_inconsistency",{totalDMSpent:Ui(v(this,Wt)),lifetimeDMMinted:Ui(v(this,An))}),G(this,Wt,v(this,An)),G(this,on,we)),re(this,Xi,nf).call(this)}seedForTest(e,t=we){G(this,Ft,e),G(this,Wt,t)}}Co=new WeakMap,Lo=new WeakMap,on=new WeakMap,Wt=new WeakMap,An=new WeakMap,Ft=new WeakMap,tr=new WeakMap,Xi=new WeakSet,Da=function(){v(this,Co).emit(Q.DARK_MATTER_UPDATED,{balance:v(this,on),totalSpent:v(this,Wt),multiplier:this.get()})},nf=function(){G(this,Ft,"LIVE"),re(this,Xi,Da).call(this)};const au=Symbol("DarkMatter.ABSENT"),us=Symbol("DarkMatter.INVALID");function Ms(i){return i!==au&&i!==us}function uc(i){if(i==null||i==="")return au;let e;try{e=dt(i)}catch(t){if(t instanceof Gs)return us;throw t}return e.lt(we)?us:e}function Mm(i){const e=i==null?void 0:i.dmMultiplierPerPoint;if(!Number.isFinite(e)||e<=0)throw new Error(`DarkMatterSystem: invalid ascension.dmMultiplierPerPoint (${String(e)}) — must be finite and > 0 (EC-C3-10)`)}class Lt extends Error{constructor(t,n){super(n);Y(this,"code");this.name="CatalogValidationError",this.code=t,Object.setPrototypeOf(this,Lt.prototype)}}const Sm=new Set(["globalMultiplier","tierBoost","offlineExtension","automationUnlock"]),Ju=9;function Qu(i){return an(i)?i.max(vt):vt}function eh(i,e){if(!Number.isFinite(i))return 1;const t=Math.floor(i);return t<1?1:t>e?e:t}function ym(i){if(!Number.isFinite(i.cost)||i.cost<0)throw new Lt("CATALOG_RESPEC_COST",`dmTree.respec.cost must be finite and >= 0 (got ${String(i.cost)})`)}var Xt,jt,ms,nr,Io,ki,gt,ln,nl,il,sl,rl;class Tm{constructor(e,t,n,s){X(this,ln);X(this,Xt,"UNINITIALIZED");X(this,jt);X(this,ms);X(this,nr);X(this,Io);X(this,ki);X(this,gt,new Map);var r,o;G(this,jt,bm(((r=e.dmTree)==null?void 0:r.nodes)??[])),G(this,ms,n),G(this,nr,t),G(this,Io,s),G(this,ki,((o=e.dmTree)==null?void 0:o.respec)??{enabled:!1,cost:0,refundNodes:!1}),ym(v(this,ki))}initFresh(){if(v(this,Xt)!=="UNINITIALIZED")throw new Error(`DMUpgradeTree.initFresh: expected UNINITIALIZED, got ${v(this,Xt)} — fresh-init must run exactly once at boot, before restore()`);G(this,Xt,"LIVE")}getState(){return v(this,Xt)}getNodeLevel(e){return v(this,gt).get(e)??0}getNodeCost(e){const t=v(this,jt).get(e);if(t===void 0)return we;const n=v(this,gt).get(e)??0;return n>=t.maxLevel?we:dt(t.baseCost).mul(dt(t.growth).pow(n)).floor()}canPurchase(e){const t=v(this,jt).get(e);if(t===void 0||(v(this,gt).get(e)??0)>=t.maxLevel)return!1;for(const n of t.prereqs)if((v(this,gt).get(n)??0)<1)return!1;return re(this,ln,nl).call(this,t)?!1:v(this,ms).getBalance().gte(this.getNodeCost(e))}getCommittedCapstone(){for(const[e,t]of v(this,gt))if(t>=1){const n=v(this,jt).get(e);if((n==null?void 0:n.isCapstone)===!0)return n.branch}return null}purchase(e){const t=v(this,jt).get(e);if(t===void 0)return{ok:!1,reason:"unknown_node"};const n=v(this,gt).get(e)??0;if(n>=t.maxLevel)return{ok:!1,reason:"maxed"};for(const o of t.prereqs)if((v(this,gt).get(o)??0)<1)return{ok:!1,reason:"locked_prereq"};if(re(this,ln,nl).call(this,t))return{ok:!1,reason:"rival_capstone"};const s=this.getNodeCost(e);if(!v(this,ms).spendDarkMatter(s))return{ok:!1,reason:"insufficient_dm"};const r=n+1;return v(this,gt).set(e,r),v(this,nr).emit(Q.DM_UPGRADE_PURCHASED,{nodeId:e,level:r}),t.isCapstone&&v(this,nr).emit(Q.DM_TREE_CAPSTONE_SELECTED,{branch:t.branch}),{ok:!0,level:r}}respecCapstone(){if(!v(this,ki).enabled)return{ok:!1,reason:"respec_disabled"};let e=null;for(const[t,n]of v(this,gt))if(n>=1){const s=v(this,jt).get(t);if((s==null?void 0:s.isCapstone)===!0){e=t;break}}if(e===null)return{ok:!1,reason:"no_capstone"};if(!v(this,ms).spendDarkMatter(dt(v(this,ki).cost)))return{ok:!1,reason:"insufficient_dm"};if(v(this,gt).delete(e),v(this,ki).refundNodes)for(const t of[...v(this,gt).keys()]){const n=v(this,jt).get(t);n!==void 0&&!n.isCapstone&&v(this,gt).delete(t)}return{ok:!0}}getExtraGlobalMultiplier(){return re(this,ln,il).call(this,e=>e.effectType==="globalMultiplier")}getTierBoost(e){return re(this,ln,il).call(this,t=>t.effectType==="tierBoost"&&t.effectParams.targetTier===e)}getOfflineCapBonusHours(){return re(this,ln,rl).call(this,e=>e.capHours??0)}getOfflineRateBonus(){return re(this,ln,rl).call(this,e=>e.rateBonus??0)}getWelcomeBackBonus(){return vt}isManagerPersistent(){if(v(this,Xt)!=="LIVE")return!1;for(const[e,t]of v(this,gt)){if(t<1)continue;const n=v(this,jt).get(e);if((n==null?void 0:n.effectType)==="automationUnlock"&&!n.isCapstone)return!0}return!1}shouldPersistManagers(){return this.isManagerPersistent()}getAutomationEfficiencyBonus(){if(v(this,Xt)!=="LIVE")return vt;for(const[e,t]of v(this,gt)){if(t<1)continue;const n=v(this,jt).get(e);if((n==null?void 0:n.effectType)==="automationUnlock"&&n.isCapstone){const s=n.effectParams.efficiencyBonus??0;return Qu(vt.add(dt(s)))}}return vt}serialize(){const e=[];for(const[t,n]of v(this,gt))n>=1&&e.push({id:t,level:n});return e.sort((t,n)=>t.id<n.id?-1:t.id>n.id?1:0),e}restore(e){var n;if(v(this,Xt)!=="UNINITIALIZED")throw new Error(`DMUpgradeTree.restore: expected UNINITIALIZED, got ${v(this,Xt)} — restore must run exactly once at boot, in place of initFresh()`);G(this,Xt,"RESTORING"),v(this,gt).clear();let t=null;for(const s of e){const r=v(this,jt).get(s.id);if(r===void 0){console.warn(`C4.restore: unknown node id "${s.id}" — skipping (catalog migration, EC-C4-09)`);continue}if(r.isCapstone){if(!Number.isFinite(s.level)||s.level<1){console.warn(`C4.restore: capstone "${s.id}" has invalid level ${String(s.level)} — dropping (no fabricated commitment, EC-C4-10)`);continue}const o=eh(s.level,r.maxLevel);if(t===null)t=s.id,v(this,gt).set(s.id,o);else{const a=v(this,jt).get(t);if(a!==void 0&&a.branch===r.branch)v(this,gt).set(s.id,o);else{const c=t,l=c<s.id?c:s.id,u=l===s.id?c:s.id;console.error(`C4.restore: two rival capstones "${t}" and "${s.id}" — keeping lowest id "${l}", dropping "${u}" (EC-C4-11)`),(n=v(this,Io))==null||n.call(this,"dm_tree_multi_capstone",{kept:l,dropped:u}),v(this,gt).delete(u),l===s.id&&v(this,gt).set(s.id,o),t=l}}}else{const o=eh(s.level,r.maxLevel);o!==s.level&&console.warn(`C4.restore: node "${s.id}" level ${String(s.level)} coerced to ${o} in [1, ${r.maxLevel}] (EC-C4-10)`),v(this,gt).set(s.id,o)}}G(this,Xt,"LIVE")}seedForTest(e,t={}){G(this,Xt,e);for(const[n,s]of Object.entries(t))v(this,gt).set(n,s)}}Xt=new WeakMap,jt=new WeakMap,ms=new WeakMap,nr=new WeakMap,Io=new WeakMap,ki=new WeakMap,gt=new WeakMap,ln=new WeakSet,nl=function(e){if(!e.isCapstone)return!1;const t=this.getCommittedCapstone();return t!==null&&t!==e.branch},il=function(e){if(v(this,Xt)!=="LIVE")return vt;let t=vt;for(const{node:n,level:s}of re(this,ln,sl).call(this,e)){const r=n.effectParams.perLevelBonus??0;t=t.mul(vt.add(dt(r).mul(s)))}return Qu(t)},sl=function(e){const t=[];for(const[n,s]of v(this,gt)){if(s<1)continue;const r=v(this,jt).get(n);r!==void 0&&e(r)&&t.push({node:r,level:s})}return t.sort((n,s)=>n.node.id<s.node.id?-1:n.node.id>s.node.id?1:0),t},rl=function(e){if(v(this,Xt)!=="LIVE")return 0;let t=0;for(const{node:n}of re(this,ln,sl).call(this,s=>s.effectType==="offlineExtension"))t+=e(n.effectParams);return t};function bm(i){const e=new Map;for(const n of i){if(e.has(n.id))throw new Lt("CATALOG_DUP_ID",`dmTree: duplicate node id "${n.id}"`);e.set(n.id,n)}for(const n of i){if(!Number.isInteger(n.maxLevel)||n.maxLevel<1)throw new Lt("CATALOG_MAXLEVEL",`dmTree node "${n.id}": maxLevel must be a positive integer (got ${String(n.maxLevel)})`);if(!Number.isFinite(n.baseCost)||n.baseCost<1)throw new Lt("CATALOG_BASECOST",`dmTree node "${n.id}": baseCost must be finite and >= 1 (got ${String(n.baseCost)})`);if(!Number.isFinite(n.growth)||n.growth<1)throw new Lt("CATALOG_GROWTH",`dmTree node "${n.id}": growth must be finite and >= 1.0 (got ${String(n.growth)})`);if(n.maxLevel>1&&(n.growth<=1||Math.floor(n.baseCost*n.growth)<=n.baseCost))throw new Lt("CATALOG_FLAT_REPEATABLE",`dmTree node "${n.id}": repeatable node requires growth > 1.0 and a non-flat cost curve (got growth ${String(n.growth)}, baseCost ${String(n.baseCost)})`);if(!Sm.has(n.effectType))throw new Lt("CATALOG_EFFECT_TYPE",`dmTree node "${n.id}": invalid effectType "${String(n.effectType)}"`);if(n.effectType==="globalMultiplier"||n.effectType==="tierBoost"){const s=n.effectParams.perLevelBonus;if(!Number.isFinite(s)||s<=0)throw new Lt("CATALOG_PERLEVELBONUS",`dmTree node "${n.id}": ${n.effectType} requires effectParams.perLevelBonus finite and > 0 (got ${String(s)})`)}if(n.effectType==="tierBoost"){const s=n.effectParams.targetTier;if(!Number.isInteger(s)||s<1||s>Ju)throw new Lt("CATALOG_TARGET_TIER",`dmTree node "${n.id}": tierBoost targetTier must be an integer in 1..${Ju} (got ${String(s)})`)}if(n.effectType==="offlineExtension"){const{capHours:s,rateBonus:r}=n.effectParams;if(!Number.isFinite(s)||s<0||!Number.isFinite(r)||r<0)throw new Lt("CATALOG_OFFLINE_PARAMS",`dmTree node "${n.id}": offlineExtension requires effectParams.capHours and rateBonus finite and >= 0 (got capHours ${String(s)}, rateBonus ${String(r)})`)}if(n.effectType==="automationUnlock"){if(n.isCapstone){const s=n.effectParams.efficiencyBonus;if(!Number.isFinite(s)||s<=0)throw new Lt("CATALOG_EFFICIENCYBONUS",`dmTree node "${n.id}": automationUnlock capstone requires effectParams.efficiencyBonus finite and > 0 (got ${String(s)})`)}else if(n.effectParams.efficiencyBonus!==void 0)throw new Lt("CATALOG_MISPLACED_EFFICIENCYBONUS",`dmTree node "${n.id}": a non-capstone automationUnlock (manager-persistence) must NOT declare effectParams.efficiencyBonus (the efficiency scalar is a Cortex CAPSTONE effect, F-C4-06)`)}}const t=new Map;for(const n of i){if(!n.isCapstone)continue;const s=t.get(n.branch);if(s!==void 0)throw new Lt("CATALOG_DUP_CAPSTONE",`dmTree branch "${n.branch}": more than one capstone ("${s}" and "${n.id}")`);t.set(n.branch,n.id)}for(const n of i)for(const s of n.prereqs){const r=e.get(s);if(r===void 0)throw new Lt("CATALOG_MISSING_PREREQ",`dmTree node "${n.id}": prereq "${s}" is not in the catalog`);if(r.branch!==n.branch)throw new Lt("CATALOG_CROSS_BRANCH_PREREQ",`dmTree node "${n.id}" (branch "${n.branch}"): prereq "${s}" is in a different branch ("${r.branch}")`)}Am(i,e);for(const n of i)for(const s of n.prereqs){const r=e.get(s);if(r.tier>=n.tier)throw new Lt("CATALOG_PREREQ_TIER_ORDER",`dmTree node "${n.id}" (tier ${n.tier}): prereq "${s}" must be a strictly lower tier (got tier ${r.tier})`)}return e}function Am(i,e){const r=new Map;for(const a of i)r.set(a.id,0);const o=a=>{r.set(a,1);const c=e.get(a);if(c!==void 0)for(const l of c.prereqs){const u=r.get(l);if(u===1)throw new Lt("CATALOG_CYCLE",`dmTree: prereq cycle detected involving "${a}" → "${l}"`);u===0&&o(l)}r.set(a,2)};for(const a of i)r.get(a.id)===0&&o(a.id)}const wm=1,Rm=9;var _i,No,ir,sr,rr,Dn,$n,Po,Do,Uo,Yi,sf,rf,of;class Cm{constructor(e,t,n,s){X(this,Yi);X(this,_i);X(this,No);X(this,ir);X(this,sr);X(this,rr);X(this,Dn,new Set);X(this,$n,new Set);X(this,Po,!1);X(this,Do,0);X(this,Uo);var r;G(this,_i,e),G(this,No,n),G(this,ir,s),G(this,sr,t.upgrades.milestones.map(o=>o.ownedCount).slice().sort((o,a)=>o-a)),G(this,rr,(((r=t.milestones)==null?void 0:r.creditsScale)??[]).map(o=>({threshold:dt(o.threshold),thresholdNum:Number(o.threshold),name:o.name})).sort((o,a)=>o.threshold.gt(a.threshold)?1:o.threshold.lt(a.threshold)?-1:0)),G(this,Uo,[v(this,_i).on(Q.GENERATOR_PURCHASED,o=>re(this,Yi,sf).call(this,o)),v(this,_i).on(Q.CREDITS_UPDATED,()=>re(this,Yi,rf).call(this)),v(this,_i).on(Q.GENERATORS_RESET_COMPLETE,()=>re(this,Yi,of).call(this))])}dispose(){for(const e of v(this,Uo))e()}getState(){return{celebratedOwned:[...v(this,Dn)],celebratedLifetime:[...v(this,$n)]}}restore(e){if(v(this,Dn).clear(),e.celebratedOwned===void 0)for(let t=wm;t<=Rm;t++){const n=v(this,No).getOwned(t);for(const s of v(this,sr))n>=s&&v(this,Dn).add(`${t}:${s}`)}else for(const t of e.celebratedOwned)v(this,Dn).add(t);if(v(this,$n).clear(),e.celebratedLifetime===void 0){const t=v(this,ir).getLifetimeCredits();for(const n of v(this,rr))t.gte(n.threshold)&&v(this,$n).add(`credits:${n.name}`)}else for(const t of e.celebratedLifetime)v(this,$n).add(t);G(this,Po,!0)}}_i=new WeakMap,No=new WeakMap,ir=new WeakMap,sr=new WeakMap,rr=new WeakMap,Dn=new WeakMap,$n=new WeakMap,Po=new WeakMap,Do=new WeakMap,Uo=new WeakMap,Yi=new WeakSet,sf=function({tier:e,previousOwned:t,owned:n}){const s=v(this,sr),r=s.filter(c=>t<c&&c<=n),o=r.filter(c=>!v(this,Dn).has(`${e}:${c}`)).length;if(o===0)return;const a=++ea(this,Do)._;for(const c of r){const l=`${e}:${c}`;v(this,Dn).has(l)||(v(this,Dn).add(l),v(this,_i).emit(Q.MILESTONE_REACHED,{type:"owned_count",tier:e,threshold:c,ordinal:s.indexOf(c)+1,seriesLength:s.length,burstId:a,burstSize:o}))}},rf=function(){if(!v(this,Po))return;const e=v(this,ir).getLifetimeCredits(),t=v(this,rr),n=t.filter(r=>e.gte(r.threshold)&&!v(this,$n).has(`credits:${r.name}`)).length;if(n===0)return;const s=++ea(this,Do)._;for(let r=0;r<t.length;r++){const o=t[r],a=`credits:${o.name}`;!e.gte(o.threshold)||v(this,$n).has(a)||(v(this,$n).add(a),v(this,_i).emit(Q.MILESTONE_REACHED,{type:"credits_scale",threshold:o.thresholdNum,name:o.name,ordinal:r+1,seriesLength:t.length,burstId:s,burstSize:n}))}},of=function(){v(this,Dn).clear()};const $r=1,Lm="stellarforge.save",th="stellarforge.save.backup",Im="stellarforge.save.corrupt";class cu extends Error{constructor(t,n){super(`save blob saveVersion ${t} is newer than this build's ${n} — refusing to interpret a future schema`);Y(this,"saveVersion");Y(this,"currentVersion");this.name="SaveVersionTooNewError",this.saveVersion=t,this.currentVersion=n,Object.setPrototypeOf(this,cu.prototype)}}const Nm=["x1","x10","xmax"],lu="x1",Pm=1,Dm=9;function Um(){return{balance:"0",lifetimeCredits:"0",lifetimeBaseCredits:"0",buyMode:lu}}function af(){return{purchasedUpgrades:[],managerUnlocked:{}}}function Om(){return{celebratedOwned:[],celebratedLifetime:[]}}function nh(i){return{saveVersion:$r,lastSeen:i,credits:Um(),generators:[],upgrades:af(),darkMatter:"0",totalDMSpent:"0",lifetimeDMMinted:"0",dmUpgrades:[],milestones:Om()}}function Fm(i){return JSON.stringify(i)}function Nr(i){return typeof i=="object"&&i!==null&&!Array.isArray(i)}function ih(i,e){const t=Nr(i)?i:{},n=typeof t.saveVersion=="number"?t.saveVersion:0;if(n>$r)throw new cu(n,$r);const s=Nr(t.credits)?t.credits:{},r={balance:typeof s.balance=="string"?s.balance:"0",lifetimeCredits:typeof s.lifetimeCredits=="string"?s.lifetimeCredits:"0",lifetimeBaseCredits:typeof s.lifetimeBaseCredits=="string"?s.lifetimeBaseCredits:"0",buyMode:s.buyMode??lu},o=Nr(t.upgrades)?t.upgrades:void 0,a=o?{purchasedUpgrades:Array.isArray(o.purchasedUpgrades)?o.purchasedUpgrades:[],managerUnlocked:Nr(o.managerUnlocked)?o.managerUnlocked:{}}:af(),c=Nr(t.milestones)?t.milestones:void 0,l=c?{celebratedOwned:Array.isArray(c.celebratedOwned)?c.celebratedOwned:[],celebratedLifetime:Array.isArray(c.celebratedLifetime)?c.celebratedLifetime:[]}:{celebratedOwned:void 0,celebratedLifetime:void 0};return{saveVersion:$r,lastSeen:typeof t.lastSeen=="number"?t.lastSeen:0,credits:r,generators:Array.isArray(t.generators)?t.generators:[],upgrades:a,darkMatter:typeof t.darkMatter=="string"?t.darkMatter:"0",totalDMSpent:typeof t.totalDMSpent=="string"?t.totalDMSpent:"0",lifetimeDMMinted:typeof t.lifetimeDMMinted=="string"?t.lifetimeDMMinted:"0",dmUpgrades:Array.isArray(t.dmUpgrades)?t.dmUpgrades:[],milestones:l,...typeof t.integrity=="string"?{integrity:t.integrity}:{}}}function sh(i,e){const t=[];for(const r of i.generators){if(!r||typeof r.tier!="number"||r.tier<Pm||r.tier>Dm)continue;const o=typeof r.owned=="number"&&Number.isInteger(r.owned)&&r.owned>=0?r.owned:0;t.push({tier:r.tier,owned:o})}const n=Nm.includes(i.credits.buyMode)?i.credits.buyMode:lu,s=Bm(i.lastSeen,e);return{...i,lastSeen:s,credits:{...i.credits,buyMode:n},generators:t}}function Bm(i,e){return typeof i!="number"||!Number.isFinite(i)||i<=0?e:i}const hc={autosaveIntervalMs:15e3,clockSkewToleranceMs:1e4,saveKey:Lm},km=5e3,Hm=3e4,Vm=0,zm=6e4;function rh(i,e,t){return Math.min(t,Math.max(e,i))}function Gm(i){const e=i.save,t=e==null?void 0:e.autosaveIntervalMs,n=e==null?void 0:e.clockSkewToleranceMs,s=e==null?void 0:e.saveKey;return{autosaveIntervalMs:typeof t=="number"&&Number.isFinite(t)?rh(t,km,Hm):hc.autosaveIntervalMs,clockSkewToleranceMs:typeof n=="number"&&Number.isFinite(n)?rh(n,Vm,zm):hc.clockSkewToleranceMs,saveKey:typeof s=="string"&&s.trim().length>0?s:hc.saveKey}}const Wm=["balance","lifetimeCredits","lifetimeBaseCredits"];function Xm(i=globalThis,e=globalThis.document){return{setTimeout:(t,n)=>i.setTimeout(t,n),clearTimeout:t=>i.clearTimeout(t),addEventListener:(t,n)=>{t==="visibilitychange"?e.addEventListener("visibilitychange",n):i.addEventListener("pagehide",n)},removeEventListener:(t,n)=>{t==="visibilitychange"?e.removeEventListener("visibilitychange",n):i.removeEventListener("pagehide",n)},isHidden:()=>e.visibilityState==="hidden"}}const qm=2e3;var Yn,qt,or,Kn,gs,jn,ar,Hi,cr,lr,ur,Zt,vi,hr,Oo,Fo,Bo,ft,Ua,ol,al,cf,cl,ll,lf,uf,hf,df;class $m{constructor(e){X(this,ft);X(this,Yn);X(this,qt);X(this,or);X(this,Kn);X(this,gs);X(this,jn);X(this,ar);X(this,Hi,0);X(this,cr,!0);X(this,lr,Number.NEGATIVE_INFINITY);X(this,ur,!1);X(this,Zt);X(this,vi,!1);X(this,hr);X(this,Oo,Number.NEGATIVE_INFINITY);X(this,Fo,()=>{var e;(e=v(this,Zt))!=null&&e.isHidden()&&this.saveNow()});X(this,Bo,()=>{this.saveNow()});G(this,Yn,e.storage),G(this,qt,e.collaborators),G(this,or,e.config),G(this,Kn,e.bus),G(this,gs,e.now??(()=>Date.now())),G(this,jn,Gm(e.config)),G(this,ar,e.tabId??"d1"),G(this,Zt,e.env)}get saveKey(){return v(this,jn).saveKey}load(){const e=v(this,gs).call(this);G(this,ur,!1);const t=v(this,Yn).getItem(v(this,jn).saveKey);let n;if(t===null)n=nh(e);else{let s;try{s=JSON.parse(t)}catch{return n=re(this,ft,al).call(this,t,e,"corrupt_primary"),re(this,ft,ol).call(this,n),{lastSeen:n.lastSeen}}const r=s.savedAt;typeof r=="number"&&Number.isFinite(r)&&G(this,lr,r);const o=ih(s,v(this,or)),a=sh(o,e),c=re(this,ft,ll).call(this,a.credits);c!==null?n=re(this,ft,cf).call(this,t,a,e,c):(n={...a,lastSeen:re(this,ft,lf).call(this,a.lastSeen,e)},G(this,ur,!0))}return re(this,ft,ol).call(this,n),{lastSeen:n.lastSeen}}saveNow(){if(!v(this,cr))return;const e=v(this,gs).call(this);re(this,ft,uf).call(this);const t=Fm({...re(this,ft,df).call(this),tabId:v(this,ar),savedAt:e});try{v(this,Yn).setItem(v(this,jn).saveKey,t)}catch(n){re(this,ft,hf).call(this,n),v(this,cr)&&v(this,vi)&&re(this,ft,Ua).call(this);return}if(G(this,lr,e),v(this,ur))try{v(this,Yn).setItem(th,t)}catch{}v(this,vi)&&re(this,ft,Ua).call(this)}startAutosave(){v(this,vi)||v(this,Zt)!==void 0&&(G(this,vi,!0),v(this,Zt).addEventListener("visibilitychange",v(this,Fo)),v(this,Zt).addEventListener("pagehide",v(this,Bo)),re(this,ft,Ua).call(this))}stopAutosave(){v(this,vi)&&(G(this,vi,!1),v(this,Zt)!==void 0&&(v(this,Zt).removeEventListener("visibilitychange",v(this,Fo)),v(this,Zt).removeEventListener("pagehide",v(this,Bo)),v(this,Zt).clearTimeout(v(this,hr))))}onAscensionSaved(){this.saveNow()}onMajorPurchase(){const e=v(this,gs).call(this);e<v(this,Oo)||(G(this,Oo,e+qm),this.saveNow())}getLastSeen(){return v(this,Hi)}resetLastSeen(e){Number.isFinite(e)&&G(this,Hi,Math.max(e,v(this,Hi)))}}Yn=new WeakMap,qt=new WeakMap,or=new WeakMap,Kn=new WeakMap,gs=new WeakMap,jn=new WeakMap,ar=new WeakMap,Hi=new WeakMap,cr=new WeakMap,lr=new WeakMap,ur=new WeakMap,Zt=new WeakMap,vi=new WeakMap,hr=new WeakMap,Oo=new WeakMap,Fo=new WeakMap,Bo=new WeakMap,ft=new WeakSet,Ua=function(){v(this,Zt)!==void 0&&(v(this,Zt).clearTimeout(v(this,hr)),G(this,hr,v(this,Zt).setTimeout(()=>{this.saveNow()},v(this,jn).autosaveIntervalMs)))},ol=function(e){var t,n,s;v(this,qt).upgrades.loadState(e.upgrades),v(this,qt).generators.restore(e.generators),v(this,qt).credits.restore(e.credits),(t=v(this,qt).darkMatter)==null||t.restore(e.darkMatter,e.totalDMSpent,e.lifetimeDMMinted),(n=v(this,qt).dmTree)==null||n.restore(e.dmUpgrades),(s=v(this,qt).milestones)==null||s.restore(e.milestones),G(this,Hi,e.lastSeen)},al=function(e,t,n){v(this,Yn).setItem(Im,e);const s=re(this,ft,cl).call(this,t);return s!==null?(s.lastSeen=t,v(this,Kn).emit(Q.SAVE_LOAD_FAILED,{reason:n,recoveredFromBackup:!0}),s):(v(this,Kn).emit(Q.SAVE_LOAD_FAILED,{reason:n,recoveredFromBackup:!1}),nh(t))},cf=function(e,t,n,s){const r=re(this,ft,cl).call(this,n);return r!==null?(v(this,Kn).emit(Q.SAVE_FAILED,{reason:"corrupted_field",field:s}),{...t,credits:r.credits,lastSeen:n}):re(this,ft,al).call(this,e,n,"corrupted_field")},cl=function(e){const t=v(this,Yn).getItem(th);if(t===null)return null;try{const n=ih(JSON.parse(t),v(this,or)),s=sh(n,e);return re(this,ft,ll).call(this,s.credits)!==null?null:s}catch{return null}},ll=function(e){for(const t of Wm)try{Jr(e[t])}catch{return t}return null},lf=function(e,t){return e>t+v(this,jn).clockSkewToleranceMs?t:e},uf=function(){let e;try{e=v(this,Yn).getItem(v(this,jn).saveKey)}catch{return}if(e===null)return;let t;try{t=JSON.parse(e)}catch{return}const n=typeof t.savedAt=="number"?t.savedAt:void 0,s=typeof t.tabId=="string"?t.tabId:void 0;n!==void 0&&s!==void 0&&n>v(this,lr)&&s!==v(this,ar)&&v(this,Kn).emit(Q.SAVE_CONFLICT,{otherSavedAt:n})},hf=function(e){const t=e==null?void 0:e.name;if(t==="QuotaExceededError"||t==="NS_ERROR_DOM_QUOTA_REACHED"){v(this,Kn).emit(Q.SAVE_FAILED,{reason:"quota_exceeded"});return}G(this,cr,!1),v(this,Kn).emit(Q.SAVE_FAILED,{reason:"storage_unavailable"})},df=function(){var t,n,s;const e=(t=v(this,qt).darkMatter)==null?void 0:t.serialize();return{saveVersion:$r,lastSeen:v(this,Hi),credits:v(this,qt).credits.serialize(),generators:v(this,qt).generators.serialize(),upgrades:v(this,qt).upgrades.getState(),darkMatter:(e==null?void 0:e.darkMatter)??"0",totalDMSpent:(e==null?void 0:e.totalDMSpent)??"0",lifetimeDMMinted:(e==null?void 0:e.lifetimeDMMinted)??"0",dmUpgrades:((n=v(this,qt).dmTree)==null?void 0:n.serialize())??[],milestones:((s=v(this,qt).milestones)==null?void 0:s.getState())??{celebratedOwned:[],celebratedLifetime:[]}}};const Ym=36e5,Km=1e3,jm=5e3;var dr,_s,ko,Ho,fr,Vo,zo,Go,Wo,Xo,qo,Vn,ff,pf,ul,mf;class Zm{constructor(e){X(this,Vn);X(this,dr);X(this,_s);X(this,ko);X(this,Ho);X(this,fr);X(this,Vo);X(this,zo);X(this,Go);X(this,Wo);X(this,Xo,!1);X(this,qo,!1);G(this,dr,e.bus),G(this,_s,e.clock),G(this,ko,e.baseRate),G(this,Ho,e.deposit),G(this,fr,e.nowProvider),G(this,Vo,e.config.offline.earningRate),G(this,zo,e.config.offline.baseCapHours),G(this,Go,e.briefThresholdMs??jm),G(this,Wo,[v(this,dr).on(Q.CLOCK_GAP_DETECTED,t=>re(this,Vn,ff).call(this,t))])}dispose(){for(const e of v(this,Wo))e()}markRestoreComplete(){G(this,qo,!0)}applyOfflineProgress(){if(v(this,Xo))return;G(this,Xo,!0);const e=v(this,_s).getLastSeen(),t=v(this,fr).call(this)-e;re(this,Vn,ul).call(this,t,"load")}}dr=new WeakMap,_s=new WeakMap,ko=new WeakMap,Ho=new WeakMap,fr=new WeakMap,Vo=new WeakMap,zo=new WeakMap,Go=new WeakMap,Wo=new WeakMap,Xo=new WeakMap,qo=new WeakMap,Vn=new WeakSet,ff=function(e){if(!v(this,qo))return;const t=v(this,fr).call(this);v(this,_s).resetLastSeen(t);const n=v(this,_s).getLastSeen()>t;re(this,Vn,ul).call(this,e.elapsedMs,"gap",n?"reset_not_applied":void 0)},pf=function(){return v(this,zo)*Ym},ul=function(e,t,n){let s=n,r=e;Number.isFinite(e)||(r=0,s="non_finite");const o=re(this,Vn,pf).call(this),a=Jm(r,0,o),c=a/Km;let l=v(this,ko).getTotalBaseRate();an(l)||(l=we,s="non_finite");const u=v(this,Vo)*c;let h;Number.isFinite(u)?h=l.times(dt(u)):(s="non_finite",h=we);const d=re(this,Vn,mf).call(this,t,e,a,s);h.gt(we)&&an(h)&&v(this,Ho).addOfflineEarnings(h);const p={baseLump:h,elapsedSeconds:c,reason:d};s!==void 0&&(p.diagnostic=s),v(this,dr).emit(Q.OFFLINE_EARNINGS_APPLIED,p)},mf=function(e,t,n,s){return e==="gap"?"gap":s==="non_finite"?"brief":t<0?"clock_back":n<v(this,Go)?"brief":"away"};function Jm(i,e,t){return Math.min(t,Math.max(e,i))}const Qm={maxCatchupSteps:5,gapThresholdMs:3e3,liveBudgetCeilingMs:500};function eg(i){const e=i.now??(()=>Date.now()),t={...Qm,...i.clockTunables},n=new sm,s=Gd(i.configJson),r=new om({tickRateMs:s.currencies.credits.tickRateMs,maxCatchupSteps:t.maxCatchupSteps,gapThresholdMs:t.gapThresholdMs,liveBudgetCeilingMs:t.liveBudgetCeilingMs},n),o=new Em(n,s),a=new Tm(s,n,o),c=Jp(o,a);let l=null;const h=Qp({getBoostMultiplier:E=>l===null?vt:l.getBoostMultiplier(E)},a),d=new am(s,n,h),p=new um(s,n,d,c,r),g=new pm(s,n,d,p,a);l=g;const _=s.upgrades.managers.map((E,I)=>I+1),m=new mm({bus:n,clock:r,b2:d,b3:p,b4:g,reserveFraction:s.upgrades.automationReserveFraction,enabledTiers:_}),f=new gm(n,d),T=new vm(s,n,d,p,g);T.setDarkMatterProvider(o),T.assertRealProviderInstalled();const b=new Cm(n,s,d,p),S={serialize:()=>{const E=p.serialize();return{balance:E.balance,lifetimeCredits:E.lifetimeCredits,lifetimeBaseCredits:E.lifetimeBaseCredits,buyMode:E.buyMode??"x1"}},restore:E=>p.restore(E)},C=new $m({storage:i.storage,collaborators:{upgrades:g,generators:d,credits:S,darkMatter:o,dmTree:a,milestones:b},config:s,bus:n,now:e,tabId:i.tabId,env:i.autosaveEnv}),R=new Zm({config:s,bus:n,clock:C,baseRate:d,deposit:p,nowProvider:e});let w;const L=n.on(Q.OFFLINE_EARNINGS_APPLIED,E=>{w=E}),{lastSeen:y}=C.load();return R.applyOfflineProgress(),C.resetLastSeen(e()),R.markRestoreComplete(),L(),{bus:n,clock:r,generators:d,credits:p,upgrades:g,automation:m,epoch:f,ascension:T,darkMatter:o,dmTree:a,milestones:b,save:C,offline:R,loadedLastSeen:y,offlineReport:w,dispose(){R.dispose(),b.dispose(),f.dispose(),p.dispose(),d.dispose()}}}const tg=30,oh=4,dc=1500,ng=[{key:"Space",intent:Q.INTENT_TAP_FORGE}];var We=(i=>(i[i.GAMEPLAY=0]="GAMEPLAY",i[i.SOFT_OVERLAY=1]="SOFT_OVERLAY",i[i.MODAL=2]="MODAL",i[i.DISABLED=3]="DISABLED",i))(We||{});const ah=4,ig={[Q.INTENT_TAP_FORGE]:{[We.GAMEPLAY]:"live",[We.SOFT_OVERLAY]:"live",[We.MODAL]:"suppressed",[We.DISABLED]:"suppressed"},[Q.INTENT_BUY_GENERATOR]:{[We.GAMEPLAY]:"live",[We.SOFT_OVERLAY]:"suppressed",[We.MODAL]:"suppressed",[We.DISABLED]:"suppressed"},[Q.INTENT_SET_BUY_MODE]:{[We.GAMEPLAY]:"live",[We.SOFT_OVERLAY]:"suppressed",[We.MODAL]:"suppressed",[We.DISABLED]:"suppressed"},[Q.INTENT_CONFIRM_ASCENSION]:{[We.GAMEPLAY]:"suppressed",[We.SOFT_OVERLAY]:"suppressed",[We.MODAL]:"live",[We.DISABLED]:"suppressed"},[Q.INTENT_HOLD_PROGRESS]:{[We.GAMEPLAY]:"suppressed",[We.SOFT_OVERLAY]:"suppressed",[We.MODAL]:"live",[We.DISABLED]:"suppressed"},[Q.INTENT_DISMISS_MODAL]:{[We.GAMEPLAY]:"suppressed",[We.SOFT_OVERLAY]:"suppressed",[We.MODAL]:"live",[We.DISABLED]:"suppressed"},[Q.INTENT_DISMISS_OVERLAY]:{[We.GAMEPLAY]:"suppressed",[We.SOFT_OVERLAY]:"live",[We.MODAL]:"suppressed",[We.DISABLED]:"suppressed"}};class sg{constructor(e,t=ng,n={}){Y(this,"_bus");Y(this,"_keymap");Y(this,"_hitAreas",[]);Y(this,"_presses",new Map);Y(this,"_lastAcceptedDown",new Map);Y(this,"_hold");Y(this,"_contextStack");Y(this,"_logger");this._bus=e,this._keymap=t,this._contextStack=[n.initialContext??We.GAMEPLAY],this._logger=n.logger}get context(){return this._contextStack[this._contextStack.length-1]}pushContext(e){var t;if(this._contextStack.length>=ah){(t=this._logger)==null||t.call(this,`[A4 input] pushContext rejected: stack already at max depth ${ah} (attempted context ${We[e]}). Likely a consumer push/pop imbalance.`);return}this._hold!==void 0&&(this._bus.emit(Q.INTENT_HOLD_PROGRESS,{ratio:0,source:this._hold.source}),this._hold=void 0),this._presses.clear(),this._contextStack.push(e)}popContext(){this._contextStack.length>1&&this._contextStack.pop()}markReady(){this._contextStack=[We.GAMEPLAY]}get keymap(){return this._keymap}registerHitArea(e){if(e.kind==="buy"&&!(Number.isInteger(e.tier)&&e.tier>=1))throw new Error(`InputTranslator.registerHitArea: buy area '${e.id}' requires an integer tier >= 1 (got ${String(e.tier)}) — a wrong tier buys the wrong generator (AC-A4-03).`);this._hitAreas.push(e)}clearHitAreas(){this._hitAreas.length=0,this._lastAcceptedDown.clear(),this._hold=void 0}onPointerDown(e){if(this.context===We.DISABLED)return;const t=this._resolveHitArea(e.x,e.y);if(t===void 0)return;const n=this._lastAcceptedDown.get(t.id);if(!this._isSyntheticDup(e,n)){if(this._lastAcceptedDown.set(t.id,{wasTouch:e.wasTouch,x:e.x,y:e.y,t:e.timeStamp,pointerId:e.pointerId}),t.kind==="forge"){this._isLive(Q.INTENT_TAP_FORGE)&&this._bus.emit(Q.INTENT_TAP_FORGE,{source:this._source(e)});return}if(t.kind==="ascension"){this._hold={pointerId:e.pointerId,area:t,heldMs:0,confirmed:!1,source:this._source(e),inside:!0};return}this._presses.set(e.pointerId,{area:t,state:"pressed"})}}onPointerUp(e){if(this.context===We.DISABLED)return;if(this._hold!==void 0&&this._hold.pointerId===e.pointerId){this._hold=void 0;return}const t=this._presses.get(e.pointerId);if(t===void 0||(this._presses.delete(e.pointerId),t.state==="cancelled")||!this._inside(t.area,e.x,e.y))return;const n=this._source(e);switch(t.area.kind){case"buy":this._isLive(Q.INTENT_BUY_GENERATOR)&&this._bus.emit(Q.INTENT_BUY_GENERATOR,{tier:t.area.tier,source:n});break;case"buyMode":this._isLive(Q.INTENT_SET_BUY_MODE)&&this._bus.emit(Q.INTENT_SET_BUY_MODE,{mode:t.area.mode,source:n});break;case"dismissModal":this._isLive(Q.INTENT_DISMISS_MODAL)&&(this._bus.emit(Q.INTENT_DISMISS_MODAL,{source:n}),this.context===We.MODAL&&this.popContext());break;case"dismissOverlay":this._isLive(Q.INTENT_DISMISS_OVERLAY)&&(this._bus.emit(Q.INTENT_DISMISS_OVERLAY,{source:n}),this.context===We.SOFT_OVERLAY&&this.popContext());break}}onPointerMove(e){if(this.context===We.DISABLED)return;if(this._hold!==void 0&&this._hold.pointerId===e.pointerId){const n=this._inside(this._hold.area,e.x,e.y);this._hold.inside&&!n?(this._hold.inside=!1,this._hold.heldMs=0,this._bus.emit(Q.INTENT_HOLD_PROGRESS,{ratio:0,source:this._hold.source})):!this._hold.inside&&n&&(this._hold.inside=!0);return}const t=this._presses.get(e.pointerId);t===void 0||t.state!=="pressed"||this._inside(t.area,e.x,e.y)||(t.state="cancelled")}onPointerCancel(e){this._hold!==void 0&&this._hold.pointerId===e&&(this._bus.emit(Q.INTENT_HOLD_PROGRESS,{ratio:0,source:this._hold.source}),this._hold=void 0),this._presses.delete(e)}onBlur(){this._hold!==void 0&&(this._bus.emit(Q.INTENT_HOLD_PROGRESS,{ratio:0,source:this._hold.source}),this._hold=void 0),this._presses.clear()}onKeyDown(e){var n;if(this.context===We.DISABLED)return;const t=this._keymap.find(s=>s.key===e.key);t!==void 0&&((n=e.preventDefault)==null||n.call(e),!e.repeat&&this._isLive(t.intent)&&this._bus.emit(t.intent,{source:"key"}))}tick(e){if(this.context===We.DISABLED||this._hold===void 0||!this._hold.inside)return;this._hold.heldMs+=Math.max(0,e);const t=Math.min(this._hold.heldMs,dc);if(this._hold.heldMs>=dc){this._hold.confirmed||(this._hold.confirmed=!0,this._isLive(Q.INTENT_CONFIRM_ASCENSION)&&this._bus.emit(Q.INTENT_CONFIRM_ASCENSION,{source:this._hold.source}));return}if(this._isLive(Q.INTENT_HOLD_PROGRESS)){const n=t/dc;this._bus.emit(Q.INTENT_HOLD_PROGRESS,{ratio:n,source:this._hold.source})}}_isLive(e){return ig[e][this.context]==="live"}_isSyntheticDup(e,t){return t!==void 0&&t.wasTouch&&!e.wasTouch&&e.timeStamp-t.t<tg&&Math.abs(e.x-t.x)<=oh&&Math.abs(e.y-t.y)<=oh&&e.pointerId!==t.pointerId}_resolveHitArea(e,t){for(let n=this._hitAreas.length-1;n>=0;n-=1){const s=this._hitAreas[n];if(s!==void 0&&this._inside(s,e,t))return s}}_inside(e,t,n){const s=e.bounds;return t>=s.x&&t<s.x+s.width&&n>=s.y&&n<s.y+s.height}_source(e){return e.wasTouch===!0?"touch":"pointer"}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const uu="171",rg=0,ch=1,og=2,gf=1,_f=2,hi=3,bi=0,cn=1,Jn=2,Gi=0,Ws=1,hl=2,lh=3,uh=4,ag=5,cs=100,cg=101,lg=102,ug=103,hg=104,dg=200,fg=201,pg=202,mg=203,dl=204,fl=205,gg=206,_g=207,vg=208,xg=209,Eg=210,Mg=211,Sg=212,yg=213,Tg=214,pl=0,ml=1,gl=2,pr=3,_l=4,vl=5,xl=6,El=7,vf=0,bg=1,Ag=2,Wi=0,wg=1,Rg=2,Cg=3,xf=4,Lg=5,Ig=6,Ng=7,hh="attached",Pg="detached",Ef=300,mr=301,gr=302,Ml=303,Sl=304,Qa=306,_r=1e3,Vi=1001,Ga=1002,en=1003,Mf=1004,Wr=1005,gn=1006,Oa=1007,xi=1008,Ai=1009,Sf=1010,yf=1011,eo=1012,hu=1013,vs=1014,Fn=1015,Yo=1016,du=1017,fu=1018,vr=1020,Tf=35902,bf=1021,Af=1022,wn=1023,wf=1024,Rf=1025,Xs=1026,xr=1027,pu=1028,mu=1029,Cf=1030,gu=1031,_u=1033,Fa=33776,Ba=33777,ka=33778,Ha=33779,yl=35840,Tl=35841,bl=35842,Al=35843,wl=36196,Rl=37492,Cl=37496,Ll=37808,Il=37809,Nl=37810,Pl=37811,Dl=37812,Ul=37813,Ol=37814,Fl=37815,Bl=37816,kl=37817,Hl=37818,Vl=37819,zl=37820,Gl=37821,Va=36492,Wl=36494,Xl=36495,Lf=36283,ql=36284,$l=36285,Yl=36286,to=2300,no=2301,fc=2302,dh=2400,fh=2401,ph=2402,Dg=2500,Ug=0,If=1,Kl=2,Og=3200,Fg=3201,Nf=0,Bg=1,Oi="",Bt="srgb",tn="srgb-linear",Wa="linear",ht="srgb",Ss=7680,mh=519,kg=512,Hg=513,Vg=514,Pf=515,zg=516,Gg=517,Wg=518,Xg=519,jl=35044,gh="300 es",Ei=2e3,Xa=2001;class br{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let _h=1234567;const Yr=Math.PI/180,Er=180/Math.PI;function Bn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[t&63|128]+zt[t>>8&255]+"-"+zt[t>>16&255]+zt[t>>24&255]+zt[n&255]+zt[n>>8&255]+zt[n>>16&255]+zt[n>>24&255]).toLowerCase()}function $e(i,e,t){return Math.max(e,Math.min(t,i))}function vu(i,e){return(i%e+e)%e}function qg(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function $g(i,e,t){return i!==e?(t-i)/(e-i):0}function Kr(i,e,t){return(1-t)*i+t*e}function Yg(i,e,t,n){return Kr(i,e,1-Math.exp(-t*n))}function Kg(i,e=1){return e-Math.abs(vu(i,e*2)-e)}function jg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Zg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Jg(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Qg(i,e){return i+Math.random()*(e-i)}function e_(i){return i*(.5-Math.random())}function t_(i){i!==void 0&&(_h=i);let e=_h+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function n_(i){return i*Yr}function i_(i){return i*Er}function s_(i){return(i&i-1)===0&&i!==0}function r_(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function o_(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function a_(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),p=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*u,c*h,c*d,a*l);break;case"YZY":i.set(c*d,a*u,c*h,a*l);break;case"ZXZ":i.set(c*h,c*d,a*u,a*l);break;case"XZX":i.set(a*u,c*g,c*p,a*l);break;case"YXY":i.set(c*p,a*u,c*g,a*l);break;case"ZYZ":i.set(c*g,c*p,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Un(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function lt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const c_={DEG2RAD:Yr,RAD2DEG:Er,generateUUID:Bn,clamp:$e,euclideanModulo:vu,mapLinear:qg,inverseLerp:$g,lerp:Kr,damp:Yg,pingpong:Kg,smoothstep:jg,smootherstep:Zg,randInt:Jg,randFloat:Qg,randFloatSpread:e_,seededRandom:t_,degToRad:n_,radToDeg:i_,isPowerOfTwo:s_,ceilPowerOfTwo:r_,floorPowerOfTwo:o_,setQuaternionFromProperEuler:a_,normalize:lt,denormalize:Un};class Ke{constructor(e=0,t=0){Ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,t,n,s,r,o,a,c,l){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],p=n[5],g=n[8],_=s[0],m=s[3],f=s[6],T=s[1],b=s[4],S=s[7],C=s[2],R=s[5],w=s[8];return r[0]=o*_+a*T+c*C,r[3]=o*m+a*b+c*R,r[6]=o*f+a*S+c*w,r[1]=l*_+u*T+h*C,r[4]=l*m+u*b+h*R,r[7]=l*f+u*S+h*w,r[2]=d*_+p*T+g*C,r[5]=d*m+p*b+g*R,r[8]=d*f+p*S+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,d=a*c-u*r,p=l*r-o*c,g=t*h+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(s*l-u*n)*_,e[2]=(a*n-s*o)*_,e[3]=d*_,e[4]=(u*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=p*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(pc.makeScale(e,t)),this}rotate(e){return this.premultiply(pc.makeRotation(-e)),this}translate(e,t){return this.premultiply(pc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const pc=new He;function Df(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function io(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function l_(){const i=io("canvas");return i.style.display="block",i}const vh={};function Vs(i){i in vh||(vh[i]=!0,console.warn(i))}function u_(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function h_(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function d_(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const xh=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Eh=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function f_(){const i={enabled:!0,workingColorSpace:tn,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ht&&(s.r=Ti(s.r),s.g=Ti(s.g),s.b=Ti(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ht&&(s.r=qs(s.r),s.g=qs(s.g),s.b=qs(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Oi?Wa:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[tn]:{primaries:e,whitePoint:n,transfer:Wa,toXYZ:xh,fromXYZ:Eh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Bt},outputColorSpaceConfig:{drawingBufferColorSpace:Bt}},[Bt]:{primaries:e,whitePoint:n,transfer:ht,toXYZ:xh,fromXYZ:Eh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Bt}}}),i}const Qe=f_();function Ti(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function qs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ys;class p_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ys===void 0&&(ys=io("canvas")),ys.width=e.width,ys.height=e.height;const n=ys.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ys}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=io("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ti(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ti(t[n]/255)*255):t[n]=Ti(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let m_=0;class Uf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:m_++}),this.uuid=Bn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(mc(s[o].image)):r.push(mc(s[o]))}else r=mc(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function mc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?p_.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let g_=0;class Ut extends br{constructor(e=Ut.DEFAULT_IMAGE,t=Ut.DEFAULT_MAPPING,n=Vi,s=Vi,r=gn,o=xi,a=wn,c=Ai,l=Ut.DEFAULT_ANISOTROPY,u=Oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:g_++}),this.uuid=Bn(),this.name="",this.source=new Uf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ef)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _r:e.x=e.x-Math.floor(e.x);break;case Vi:e.x=e.x<0?0:1;break;case Ga:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _r:e.y=e.y-Math.floor(e.y);break;case Vi:e.y=e.y<0?0:1;break;case Ga:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ut.DEFAULT_IMAGE=null;Ut.DEFAULT_MAPPING=Ef;Ut.DEFAULT_ANISOTROPY=1;class rt{constructor(e=0,t=0,n=0,s=1){rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],p=c[5],g=c[9],_=c[2],m=c[6],f=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(l+1)/2,S=(p+1)/2,C=(f+1)/2,R=(u+d)/4,w=(h+_)/4,L=(g+m)/4;return b>S&&b>C?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=R/n,r=w/n):S>C?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=R/s,r=L/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=w/r,s=L/r),this.set(n,s,r,t),this}let T=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(h-_)/T,this.z=(d-u)/T,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class __ extends br{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ut(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Uf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xs extends __{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Of extends Ut{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class v_ extends Ut{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ki{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3];const d=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(h!==_||c!==d||l!==p||u!==g){let m=1-a;const f=c*d+l*p+u*g+h*_,T=f>=0?1:-1,b=1-f*f;if(b>Number.EPSILON){const C=Math.sqrt(b),R=Math.atan2(C,f*T);m=Math.sin(m*R)/C,a=Math.sin(a*R)/C}const S=a*T;if(c=c*m+d*S,l=l*m+p*S,u=u*m+g*S,h=h*m+_*S,m===1-a){const C=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=C,l*=C,u*=C,h*=C}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+u*h+c*p-l*d,e[t+1]=c*g+u*d+l*h-a*p,e[t+2]=l*g+u*p+a*d-c*h,e[t+3]=u*g-a*h-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),h=a(r/2),d=c(n/2),p=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*u*h+l*p*g,this._y=l*p*h-d*u*g,this._z=l*u*g+d*p*h,this._w=l*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+l*p*g,this._y=l*p*h-d*u*g,this._z=l*u*g-d*p*h,this._w=l*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-l*p*g,this._y=l*p*h+d*u*g,this._z=l*u*g+d*p*h,this._w=l*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-l*p*g,this._y=l*p*h+d*u*g,this._z=l*u*g-d*p*h,this._w=l*u*h+d*p*g;break;case"YZX":this._x=d*u*h+l*p*g,this._y=l*p*h+d*u*g,this._z=l*u*g-d*p*h,this._w=l*u*h-d*p*g;break;case"XZY":this._x=d*u*h-l*p*g,this._y=l*p*h-d*u*g,this._z=l*u*g+d*p*h,this._w=l*u*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(n>a&&n>h){const p=2*Math.sqrt(1+n-a-h);this._w=(u-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>h){const p=2*Math.sqrt(1+a-n-h);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+h-n-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),u=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+c*l+o*h-a*u,this.y=n+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return gc.copy(this).projectOnVector(e),this.sub(gc)}reflect(e){return this.sub(gc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const gc=new D,Mh=new Ki;class kn{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(In.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(In.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=In.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,In):In.fromBufferAttribute(r,o),In.applyMatrix4(e.matrixWorld),this.expandByPoint(In);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ia.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ia.copy(n.boundingBox)),ia.applyMatrix4(e.matrixWorld),this.union(ia)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,In),In.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Pr),sa.subVectors(this.max,Pr),Ts.subVectors(e.a,Pr),bs.subVectors(e.b,Pr),As.subVectors(e.c,Pr),wi.subVectors(bs,Ts),Ri.subVectors(As,bs),Ji.subVectors(Ts,As);let t=[0,-wi.z,wi.y,0,-Ri.z,Ri.y,0,-Ji.z,Ji.y,wi.z,0,-wi.x,Ri.z,0,-Ri.x,Ji.z,0,-Ji.x,-wi.y,wi.x,0,-Ri.y,Ri.x,0,-Ji.y,Ji.x,0];return!_c(t,Ts,bs,As,sa)||(t=[1,0,0,0,1,0,0,0,1],!_c(t,Ts,bs,As,sa))?!1:(ra.crossVectors(wi,Ri),t=[ra.x,ra.y,ra.z],_c(t,Ts,bs,As,sa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,In).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(In).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ri=[new D,new D,new D,new D,new D,new D,new D,new D],In=new D,ia=new kn,Ts=new D,bs=new D,As=new D,wi=new D,Ri=new D,Ji=new D,Pr=new D,sa=new D,ra=new D,Qi=new D;function _c(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Qi.fromArray(i,r);const a=s.x*Math.abs(Qi.x)+s.y*Math.abs(Qi.y)+s.z*Math.abs(Qi.z),c=e.dot(Qi),l=t.dot(Qi),u=n.dot(Qi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const x_=new kn,Dr=new D,vc=new D;class ti{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):x_.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Dr.subVectors(e,this.center);const t=Dr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Dr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Dr.copy(e.center).add(vc)),this.expandByPoint(Dr.copy(e.center).sub(vc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const oi=new D,xc=new D,oa=new D,Ci=new D,Ec=new D,aa=new D,Mc=new D;class ec{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,oi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=oi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(oi.copy(this.origin).addScaledVector(this.direction,t),oi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){xc.copy(e).add(t).multiplyScalar(.5),oa.copy(t).sub(e).normalize(),Ci.copy(this.origin).sub(xc);const r=e.distanceTo(t)*.5,o=-this.direction.dot(oa),a=Ci.dot(this.direction),c=-Ci.dot(oa),l=Ci.lengthSq(),u=Math.abs(1-o*o);let h,d,p,g;if(u>0)if(h=o*c-a,d=o*a-c,g=r*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,p=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-c),r),p=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-c),r),p=-h*h+d*(d+2*c)+l);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(xc).addScaledVector(oa,d),p}intersectSphere(e,t){oi.subVectors(e.center,this.origin);const n=oi.dot(this.direction),s=oi.dot(oi)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,oi)!==null}intersectTriangle(e,t,n,s,r){Ec.subVectors(t,e),aa.subVectors(n,e),Mc.crossVectors(Ec,aa);let o=this.direction.dot(Mc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ci.subVectors(this.origin,e);const c=a*this.direction.dot(aa.crossVectors(Ci,aa));if(c<0)return null;const l=a*this.direction.dot(Ec.cross(Ci));if(l<0||c+l>o)return null;const u=-a*Ci.dot(Mc);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ve{constructor(e,t,n,s,r,o,a,c,l,u,h,d,p,g,_,m){Ve.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,u,h,d,p,g,_,m)}set(e,t,n,s,r,o,a,c,l,u,h,d,p,g,_,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ve().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/ws.setFromMatrixColumn(e,0).length(),r=1/ws.setFromMatrixColumn(e,1).length(),o=1/ws.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,p=o*h,g=a*u,_=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=p+g*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=g+p*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*u,p=c*h,g=l*u,_=l*h;t[0]=d+_*a,t[4]=g*a-p,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*u,p=c*h,g=l*u,_=l*h;t[0]=d-_*a,t[4]=-o*h,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*u,p=o*h,g=a*u,_=a*h;t[0]=c*u,t[4]=g*l-p,t[8]=d*l+_,t[1]=c*h,t[5]=_*l+d,t[9]=p*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,p=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=_-d*h,t[8]=g*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=p*h+g,t[10]=d-_*h}else if(e.order==="XZY"){const d=o*c,p=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+_,t[5]=o*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=a*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(E_,e,M_)}lookAt(e,t,n){const s=this.elements;return dn.subVectors(e,t),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),Li.crossVectors(n,dn),Li.lengthSq()===0&&(Math.abs(n.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),Li.crossVectors(n,dn)),Li.normalize(),ca.crossVectors(dn,Li),s[0]=Li.x,s[4]=ca.x,s[8]=dn.x,s[1]=Li.y,s[5]=ca.y,s[9]=dn.y,s[2]=Li.z,s[6]=ca.z,s[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],T=n[3],b=n[7],S=n[11],C=n[15],R=s[0],w=s[4],L=s[8],y=s[12],E=s[1],I=s[5],W=s[9],H=s[13],J=s[2],ee=s[6],K=s[10],ie=s[14],z=s[3],he=s[7],_e=s[11],Te=s[15];return r[0]=o*R+a*E+c*J+l*z,r[4]=o*w+a*I+c*ee+l*he,r[8]=o*L+a*W+c*K+l*_e,r[12]=o*y+a*H+c*ie+l*Te,r[1]=u*R+h*E+d*J+p*z,r[5]=u*w+h*I+d*ee+p*he,r[9]=u*L+h*W+d*K+p*_e,r[13]=u*y+h*H+d*ie+p*Te,r[2]=g*R+_*E+m*J+f*z,r[6]=g*w+_*I+m*ee+f*he,r[10]=g*L+_*W+m*K+f*_e,r[14]=g*y+_*H+m*ie+f*Te,r[3]=T*R+b*E+S*J+C*z,r[7]=T*w+b*I+S*ee+C*he,r[11]=T*L+b*W+S*K+C*_e,r[15]=T*y+b*H+S*ie+C*Te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],p=e[14],g=e[3],_=e[7],m=e[11],f=e[15];return g*(+r*c*h-s*l*h-r*a*d+n*l*d+s*a*p-n*c*p)+_*(+t*c*p-t*l*d+r*o*d-s*o*p+s*l*u-r*c*u)+m*(+t*l*h-t*a*p-r*o*h+n*o*p+r*a*u-n*l*u)+f*(-s*a*u-t*c*h+t*a*d+s*o*h-n*o*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],p=e[11],g=e[12],_=e[13],m=e[14],f=e[15],T=h*m*l-_*d*l+_*c*p-a*m*p-h*c*f+a*d*f,b=g*d*l-u*m*l-g*c*p+o*m*p+u*c*f-o*d*f,S=u*_*l-g*h*l+g*a*p-o*_*p-u*a*f+o*h*f,C=g*h*c-u*_*c-g*a*d+o*_*d+u*a*m-o*h*m,R=t*T+n*b+s*S+r*C;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/R;return e[0]=T*w,e[1]=(_*d*r-h*m*r-_*s*p+n*m*p+h*s*f-n*d*f)*w,e[2]=(a*m*r-_*c*r+_*s*l-n*m*l-a*s*f+n*c*f)*w,e[3]=(h*c*r-a*d*r-h*s*l+n*d*l+a*s*p-n*c*p)*w,e[4]=b*w,e[5]=(u*m*r-g*d*r+g*s*p-t*m*p-u*s*f+t*d*f)*w,e[6]=(g*c*r-o*m*r-g*s*l+t*m*l+o*s*f-t*c*f)*w,e[7]=(o*d*r-u*c*r+u*s*l-t*d*l-o*s*p+t*c*p)*w,e[8]=S*w,e[9]=(g*h*r-u*_*r-g*n*p+t*_*p+u*n*f-t*h*f)*w,e[10]=(o*_*r-g*a*r+g*n*l-t*_*l-o*n*f+t*a*f)*w,e[11]=(u*a*r-o*h*r-u*n*l+t*h*l+o*n*p-t*a*p)*w,e[12]=C*w,e[13]=(u*_*s-g*h*s+g*n*d-t*_*d-u*n*m+t*h*m)*w,e[14]=(g*a*s-o*_*s-g*n*c+t*_*c+o*n*m-t*a*m)*w,e[15]=(o*h*s-u*a*s+u*n*c-t*h*c-o*n*d+t*a*d)*w,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,h=a+a,d=r*l,p=r*u,g=r*h,_=o*u,m=o*h,f=a*h,T=c*l,b=c*u,S=c*h,C=n.x,R=n.y,w=n.z;return s[0]=(1-(_+f))*C,s[1]=(p+S)*C,s[2]=(g-b)*C,s[3]=0,s[4]=(p-S)*R,s[5]=(1-(d+f))*R,s[6]=(m+T)*R,s[7]=0,s[8]=(g+b)*w,s[9]=(m-T)*w,s[10]=(1-(d+_))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=ws.set(s[0],s[1],s[2]).length();const o=ws.set(s[4],s[5],s[6]).length(),a=ws.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Nn.copy(this);const l=1/r,u=1/o,h=1/a;return Nn.elements[0]*=l,Nn.elements[1]*=l,Nn.elements[2]*=l,Nn.elements[4]*=u,Nn.elements[5]*=u,Nn.elements[6]*=u,Nn.elements[8]*=h,Nn.elements[9]*=h,Nn.elements[10]*=h,t.setFromRotationMatrix(Nn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Ei){const c=this.elements,l=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),d=(n+s)/(n-s);let p,g;if(a===Ei)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Xa)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Ei){const c=this.elements,l=1/(t-e),u=1/(n-s),h=1/(o-r),d=(t+e)*l,p=(n+s)*u;let g,_;if(a===Ei)g=(o+r)*h,_=-2*h;else if(a===Xa)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ws=new D,Nn=new Ve,E_=new D(0,0,0),M_=new D(1,1,1),Li=new D,ca=new D,dn=new D,Sh=new Ve,yh=new Ki;class ei{constructor(e=0,t=0,n=0,s=ei.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin($e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin($e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin($e(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-$e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Sh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return yh.setFromEuler(this),this.setFromQuaternion(yh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ei.DEFAULT_ORDER="XYZ";class Ff{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let S_=0;const Th=new D,Rs=new Ki,ai=new Ve,la=new D,Ur=new D,y_=new D,T_=new Ki,bh=new D(1,0,0),Ah=new D(0,1,0),wh=new D(0,0,1),Rh={type:"added"},b_={type:"removed"},Cs={type:"childadded",child:null},Sc={type:"childremoved",child:null};class Mt extends br{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:S_++}),this.uuid=Bn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mt.DEFAULT_UP.clone();const e=new D,t=new ei,n=new Ki,s=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ve},normalMatrix:{value:new He}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=Mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ff,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Rs.setFromAxisAngle(e,t),this.quaternion.multiply(Rs),this}rotateOnWorldAxis(e,t){return Rs.setFromAxisAngle(e,t),this.quaternion.premultiply(Rs),this}rotateX(e){return this.rotateOnAxis(bh,e)}rotateY(e){return this.rotateOnAxis(Ah,e)}rotateZ(e){return this.rotateOnAxis(wh,e)}translateOnAxis(e,t){return Th.copy(e).applyQuaternion(this.quaternion),this.position.add(Th.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bh,e)}translateY(e){return this.translateOnAxis(Ah,e)}translateZ(e){return this.translateOnAxis(wh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ai.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?la.copy(e):la.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ai.lookAt(Ur,la,this.up):ai.lookAt(la,Ur,this.up),this.quaternion.setFromRotationMatrix(ai),s&&(ai.extractRotation(s.matrixWorld),Rs.setFromRotationMatrix(ai),this.quaternion.premultiply(Rs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Rh),Cs.child=e,this.dispatchEvent(Cs),Cs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(b_),Sc.child=e,this.dispatchEvent(Sc),Sc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Rh),Cs.child=e,this.dispatchEvent(Cs),Cs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,e,y_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,T_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Mt.DEFAULT_UP=new D(0,1,0);Mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pn=new D,ci=new D,yc=new D,li=new D,Ls=new D,Is=new D,Ch=new D,Tc=new D,bc=new D,Ac=new D,wc=new rt,Rc=new rt,Cc=new rt;class On{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Pn.subVectors(e,t),s.cross(Pn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Pn.subVectors(s,t),ci.subVectors(n,t),yc.subVectors(e,t);const o=Pn.dot(Pn),a=Pn.dot(ci),c=Pn.dot(yc),l=ci.dot(ci),u=ci.dot(yc),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,p=(l*c-a*u)*d,g=(o*u-a*c)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,li)===null?!1:li.x>=0&&li.y>=0&&li.x+li.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,li)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,li.x),c.addScaledVector(o,li.y),c.addScaledVector(a,li.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return wc.setScalar(0),Rc.setScalar(0),Cc.setScalar(0),wc.fromBufferAttribute(e,t),Rc.fromBufferAttribute(e,n),Cc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(wc,r.x),o.addScaledVector(Rc,r.y),o.addScaledVector(Cc,r.z),o}static isFrontFacing(e,t,n,s){return Pn.subVectors(n,t),ci.subVectors(e,t),Pn.cross(ci).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),ci.subVectors(this.a,this.b),Pn.cross(ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return On.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return On.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return On.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return On.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return On.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;Ls.subVectors(s,n),Is.subVectors(r,n),Tc.subVectors(e,n);const c=Ls.dot(Tc),l=Is.dot(Tc);if(c<=0&&l<=0)return t.copy(n);bc.subVectors(e,s);const u=Ls.dot(bc),h=Is.dot(bc);if(u>=0&&h<=u)return t.copy(s);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(Ls,o);Ac.subVectors(e,r);const p=Ls.dot(Ac),g=Is.dot(Ac);if(g>=0&&p<=g)return t.copy(r);const _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Is,a);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return Ch.subVectors(r,s),a=(h-u)/(h-u+(p-g)),t.copy(s).addScaledVector(Ch,a);const f=1/(m+_+d);return o=_*f,a=d*f,t.copy(n).addScaledVector(Ls,o).addScaledVector(Is,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Bf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ii={h:0,s:0,l:0},ua={h:0,s:0,l:0};function Lc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ne{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qe.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Qe.workingColorSpace){if(e=vu(e,1),t=$e(t,0,1),n=$e(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Lc(o,r,e+1/3),this.g=Lc(o,r,e),this.b=Lc(o,r,e-1/3)}return Qe.toWorkingColorSpace(this,s),this}setStyle(e,t=Bt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Bt){const n=Bf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ti(e.r),this.g=Ti(e.g),this.b=Ti(e.b),this}copyLinearToSRGB(e){return this.r=qs(e.r),this.g=qs(e.g),this.b=qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bt){return Qe.fromWorkingColorSpace(Gt.copy(this),e),Math.round($e(Gt.r*255,0,255))*65536+Math.round($e(Gt.g*255,0,255))*256+Math.round($e(Gt.b*255,0,255))}getHexString(e=Bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.fromWorkingColorSpace(Gt.copy(this),t);const n=Gt.r,s=Gt.g,r=Gt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(Gt.copy(this),t),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=Bt){Qe.fromWorkingColorSpace(Gt.copy(this),e);const t=Gt.r,n=Gt.g,s=Gt.b;return e!==Bt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ii),this.setHSL(Ii.h+e,Ii.s+t,Ii.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ii),e.getHSL(ua);const n=Kr(Ii.h,ua.h,t),s=Kr(Ii.s,ua.s,t),r=Kr(Ii.l,ua.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gt=new Ne;Ne.NAMES=Bf;let A_=0;class Qn extends br{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:A_++}),this.uuid=Bn(),this.name="",this.type="Material",this.blending=Ws,this.side=bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dl,this.blendDst=fl,this.blendEquation=cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=pr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ss,this.stencilZFail=Ss,this.stencilZPass=Ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ws&&(n.blending=this.blending),this.side!==bi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==dl&&(n.blendSrc=this.blendSrc),this.blendDst!==fl&&(n.blendDst=this.blendDst),this.blendEquation!==cs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==pr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ss&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ss&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ss&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class hs extends Qn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=vf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ct=new D,ha=new Ke;class Ht{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=jl,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ha.fromBufferAttribute(this,t),ha.applyMatrix3(e),this.setXY(t,ha.x,ha.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Un(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=lt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Un(t,this.array)),t}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Un(t,this.array)),t}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Un(t,this.array)),t}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Un(t,this.array)),t}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),s=lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),s=lt(s,this.array),r=lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==jl&&(e.usage=this.usage),e}}class kf extends Ht{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Hf extends Ht{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Rn extends Ht{constructor(e,t,n){super(new Float32Array(e),t,n)}}let w_=0;const Sn=new Ve,Ic=new Mt,Ns=new D,fn=new kn,Or=new kn,Dt=new D;class _n extends br{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:w_++}),this.uuid=Bn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Df(e)?Hf:kf)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new He().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,t,n){return Sn.makeTranslation(e,t,n),this.applyMatrix4(Sn),this}scale(e,t,n){return Sn.makeScale(e,t,n),this.applyMatrix4(Sn),this}lookAt(e){return Ic.lookAt(e),Ic.updateMatrix(),this.applyMatrix4(Ic.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ns).negate(),this.translate(Ns.x,Ns.y,Ns.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Rn(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];fn.setFromBufferAttribute(r),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ti);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Or.setFromBufferAttribute(a),this.morphTargetsRelative?(Dt.addVectors(fn.min,Or.min),fn.expandByPoint(Dt),Dt.addVectors(fn.max,Or.max),fn.expandByPoint(Dt)):(fn.expandByPoint(Or.min),fn.expandByPoint(Or.max))}fn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Dt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Dt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Dt.fromBufferAttribute(a,l),c&&(Ns.fromBufferAttribute(e,l),Dt.add(Ns)),s=Math.max(s,n.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ht(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let L=0;L<n.count;L++)a[L]=new D,c[L]=new D;const l=new D,u=new D,h=new D,d=new Ke,p=new Ke,g=new Ke,_=new D,m=new D;function f(L,y,E){l.fromBufferAttribute(n,L),u.fromBufferAttribute(n,y),h.fromBufferAttribute(n,E),d.fromBufferAttribute(r,L),p.fromBufferAttribute(r,y),g.fromBufferAttribute(r,E),u.sub(l),h.sub(l),p.sub(d),g.sub(d);const I=1/(p.x*g.y-g.x*p.y);isFinite(I)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(I),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(I),a[L].add(_),a[y].add(_),a[E].add(_),c[L].add(m),c[y].add(m),c[E].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let L=0,y=T.length;L<y;++L){const E=T[L],I=E.start,W=E.count;for(let H=I,J=I+W;H<J;H+=3)f(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const b=new D,S=new D,C=new D,R=new D;function w(L){C.fromBufferAttribute(s,L),R.copy(C);const y=a[L];b.copy(y),b.sub(C.multiplyScalar(C.dot(y))).normalize(),S.crossVectors(R,y);const I=S.dot(c[L])<0?-1:1;o.setXYZW(L,b.x,b.y,b.z,I)}for(let L=0,y=T.length;L<y;++L){const E=T[L],I=E.start,W=E.count;for(let H=I,J=I+W;H<J;H+=3)w(e.getX(H+0)),w(e.getX(H+1)),w(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ht(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new D,r=new D,o=new D,a=new D,c=new D,l=new D,u=new D,h=new D;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let p=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?p=c[_]*a.data.stride+a.offset:p=c[_]*u;for(let f=0;f<u;f++)d[g++]=l[p++]}return new Ht(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new _n,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],p=e(d,n);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const p=l[h];u.push(p.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lh=new Ve,es=new ec,da=new ti,Ih=new D,fa=new D,pa=new D,ma=new D,Nc=new D,ga=new D,Nh=new D,_a=new D;class Qt extends Mt{constructor(e=new _n,t=new hs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){ga.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(Nc.fromBufferAttribute(h,e),o?ga.addScaledVector(Nc,u):ga.addScaledVector(Nc.sub(t),u))}t.add(ga)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),da.copy(n.boundingSphere),da.applyMatrix4(r),es.copy(e.ray).recast(e.near),!(da.containsPoint(es.origin)===!1&&(es.intersectSphere(da,Ih)===null||es.origin.distanceToSquared(Ih)>(e.far-e.near)**2))&&(Lh.copy(r).invert(),es.copy(e.ray).applyMatrix4(Lh),!(n.boundingBox!==null&&es.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,es)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=o[m.materialIndex],T=Math.max(m.start,p.start),b=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=T,C=b;S<C;S+=3){const R=a.getX(S),w=a.getX(S+1),L=a.getX(S+2);s=va(this,f,e,n,l,u,h,R,w,L),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const T=a.getX(m),b=a.getX(m+1),S=a.getX(m+2);s=va(this,o,e,n,l,u,h,T,b,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=o[m.materialIndex],T=Math.max(m.start,p.start),b=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let S=T,C=b;S<C;S+=3){const R=S,w=S+1,L=S+2;s=va(this,f,e,n,l,u,h,R,w,L),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const T=m,b=m+1,S=m+2;s=va(this,o,e,n,l,u,h,T,b,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function R_(i,e,t,n,s,r,o,a){let c;if(e.side===cn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===bi,a),c===null)return null;_a.copy(a),_a.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(_a);return l<t.near||l>t.far?null:{distance:l,point:_a.clone(),object:i}}function va(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,fa),i.getVertexPosition(c,pa),i.getVertexPosition(l,ma);const u=R_(i,e,t,n,fa,pa,ma,Nh);if(u){const h=new D;On.getBarycoord(Nh,fa,pa,ma,h),s&&(u.uv=On.getInterpolatedAttribute(s,a,c,l,h,new Ke)),r&&(u.uv1=On.getInterpolatedAttribute(r,a,c,l,h,new Ke)),o&&(u.normal=On.getInterpolatedAttribute(o,a,c,l,h,new D),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new D,materialIndex:0};On.getNormal(fa,pa,ma,d.normal),u.face=d,u.barycoord=h}return u}class Ko extends _n{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,p=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Rn(l,3)),this.setAttribute("normal",new Rn(u,3)),this.setAttribute("uv",new Rn(h,2));function g(_,m,f,T,b,S,C,R,w,L,y){const E=S/w,I=C/L,W=S/2,H=C/2,J=R/2,ee=w+1,K=L+1;let ie=0,z=0;const he=new D;for(let _e=0;_e<K;_e++){const Te=_e*I-H;for(let Xe=0;Xe<ee;Xe++){const pt=Xe*E-W;he[_]=pt*T,he[m]=Te*b,he[f]=J,l.push(he.x,he.y,he.z),he[_]=0,he[m]=0,he[f]=R>0?1:-1,u.push(he.x,he.y,he.z),h.push(Xe/w),h.push(1-_e/L),ie+=1}}for(let _e=0;_e<L;_e++)for(let Te=0;Te<w;Te++){const Xe=d+Te+ee*_e,pt=d+Te+ee*(_e+1),$=d+(Te+1)+ee*(_e+1),ae=d+(Te+1)+ee*_e;c.push(Xe,pt,ae),c.push(pt,$,ae),z+=6}a.addGroup(p,z,y),p+=z,d+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ko(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Mr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Kt(i){const e={};for(let t=0;t<i.length;t++){const n=Mr(i[t]);for(const s in n)e[s]=n[s]}return e}function C_(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Vf(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const L_={clone:Mr,merge:Kt};var I_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,N_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $i extends Qn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=I_,this.fragmentShader=N_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Mr(e.uniforms),this.uniformsGroups=C_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class zf extends Mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=Ei}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ni=new D,Ph=new Ke,Dh=new Ke;class Jt extends zf{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Er*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Yr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Er*2*Math.atan(Math.tan(Yr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z),Ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z)}getViewSize(e,t){return this.getViewBounds(e,Ph,Dh),t.subVectors(Dh,Ph)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Yr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ps=-90,Ds=1;class P_ extends Mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Jt(Ps,Ds,e,t);s.layers=this.layers,this.add(s);const r=new Jt(Ps,Ds,e,t);r.layers=this.layers,this.add(r);const o=new Jt(Ps,Ds,e,t);o.layers=this.layers,this.add(o);const a=new Jt(Ps,Ds,e,t);a.layers=this.layers,this.add(a);const c=new Jt(Ps,Ds,e,t);c.layers=this.layers,this.add(c);const l=new Jt(Ps,Ds,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===Ei)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Xa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,d,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Gf extends Ut{constructor(e,t,n,s,r,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:mr,super(e,t,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class D_ extends xs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Gf(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:gn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ko(5,5,5),r=new $i({name:"CubemapFromEquirect",uniforms:Mr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:cn,blending:Gi});r.uniforms.tEquirect.value=t;const o=new Qt(s,r),a=t.minFilter;return t.minFilter===xi&&(t.minFilter=gn),new P_(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}class xu{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ne(e),this.near=t,this.far=n}clone(){return new xu(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class U_ extends Mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ei,this.environmentIntensity=1,this.environmentRotation=new ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class O_{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=jl,this.updateRanges=[],this.version=0,this.uuid=Bn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Yt=new D;class Eu{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Un(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=lt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Un(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Un(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Un(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Un(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),s=lt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),s=lt(s,this.array),r=lt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ht(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Eu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Uh=new D,Oh=new rt,Fh=new rt,F_=new D,Bh=new Ve,xa=new D,Pc=new ti,kh=new Ve,Dc=new ec;class B_ extends Qt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=hh,this.bindMatrix=new Ve,this.bindMatrixInverse=new Ve,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new kn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,xa),this.boundingBox.expandByPoint(xa)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ti),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,xa),this.boundingSphere.expandByPoint(xa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Pc.copy(this.boundingSphere),Pc.applyMatrix4(s),e.ray.intersectsSphere(Pc)!==!1&&(kh.copy(s).invert(),Dc.copy(e.ray).applyMatrix4(kh),!(this.boundingBox!==null&&Dc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Dc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new rt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===hh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Pg?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;Oh.fromBufferAttribute(s.attributes.skinIndex,e),Fh.fromBufferAttribute(s.attributes.skinWeight,e),Uh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Fh.getComponent(r);if(o!==0){const a=Oh.getComponent(r);Bh.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(F_.copy(Uh).applyMatrix4(Bh),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Wf extends Mt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Xf extends Ut{constructor(e=null,t=1,n=1,s,r,o,a,c,l=en,u=en,h,d){super(null,o,a,c,l,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Hh=new Ve,k_=new Ve;class Mu{constructor(e=[],t=[]){this.uuid=Bn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ve)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ve;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:k_;Hh.multiplyMatrices(a,t[r]),Hh.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Mu(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Xf(t,e,e,wn,Fn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Wf),this.bones.push(o),this.boneInverses.push(new Ve().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=n[s];e.boneInverses.push(a.toArray())}return e}}class Zl extends Ht{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Us=new Ve,Vh=new Ve,Ea=[],zh=new kn,H_=new Ve,Fr=new Qt,Br=new ti;class V_ extends Qt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Zl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,H_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new kn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Us),zh.copy(e.boundingBox).applyMatrix4(Us),this.boundingBox.union(zh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ti),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Us),Br.copy(e.boundingSphere).applyMatrix4(Us),this.boundingSphere.union(Br)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Fr.geometry=this.geometry,Fr.material=this.material,Fr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Br.copy(this.boundingSphere),Br.applyMatrix4(n),e.ray.intersectsSphere(Br)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Us),Vh.multiplyMatrices(n,Us),Fr.matrixWorld=Vh,Fr.raycast(e,Ea);for(let o=0,a=Ea.length;o<a;o++){const c=Ea[o];c.instanceId=r,c.object=this,t.push(c)}Ea.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Zl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Xf(new Float32Array(s*this.count),s,this.count,pu,Fn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const Uc=new D,z_=new D,G_=new He;class rs{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Uc.subVectors(n,t).cross(z_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Uc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||G_.getNormalMatrix(e),s=this.coplanarPoint(Uc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ts=new ti,Ma=new D;class Su{constructor(e=new rs,t=new rs,n=new rs,s=new rs,r=new rs,o=new rs){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ei){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],u=s[5],h=s[6],d=s[7],p=s[8],g=s[9],_=s[10],m=s[11],f=s[12],T=s[13],b=s[14],S=s[15];if(n[0].setComponents(c-r,d-l,m-p,S-f).normalize(),n[1].setComponents(c+r,d+l,m+p,S+f).normalize(),n[2].setComponents(c+o,d+u,m+g,S+T).normalize(),n[3].setComponents(c-o,d-u,m-g,S-T).normalize(),n[4].setComponents(c-a,d-h,m-_,S-b).normalize(),t===Ei)n[5].setComponents(c+a,d+h,m+_,S+b).normalize();else if(t===Xa)n[5].setComponents(a,h,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ts.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ts.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ts)}intersectsSprite(e){return ts.center.set(0,0,0),ts.radius=.7071067811865476,ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(ts)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Ma.x=s.normal.x>0?e.max.x:e.min.x,Ma.y=s.normal.y>0?e.max.y:e.min.y,Ma.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ma)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class qf extends Qn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const qa=new D,$a=new D,Gh=new Ve,kr=new ec,Sa=new ti,Oc=new D,Wh=new D;class yu extends Mt{constructor(e=new _n,t=new qf){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)qa.fromBufferAttribute(t,s-1),$a.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=qa.distanceTo($a);e.setAttribute("lineDistance",new Rn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Sa.copy(n.boundingSphere),Sa.applyMatrix4(s),Sa.radius+=r,e.ray.intersectsSphere(Sa)===!1)return;Gh.copy(s).invert(),kr.copy(e.ray).applyMatrix4(Gh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=l){const f=u.getX(_),T=u.getX(_+1),b=ya(this,e,kr,c,f,T);b&&t.push(b)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(p),f=ya(this,e,kr,c,_,m);f&&t.push(f)}}else{const p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=l){const f=ya(this,e,kr,c,_,_+1);f&&t.push(f)}if(this.isLineLoop){const _=ya(this,e,kr,c,g-1,p);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ya(i,e,t,n,s,r){const o=i.geometry.attributes.position;if(qa.fromBufferAttribute(o,s),$a.fromBufferAttribute(o,r),t.distanceSqToSegment(qa,$a,Oc,Wh)>n)return;Oc.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Oc);if(!(c<e.near||c>e.far))return{distance:c,point:Wh.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Xh=new D,qh=new D;class W_ extends yu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Xh.fromBufferAttribute(t,s),qh.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Xh.distanceTo(qh);e.setAttribute("lineDistance",new Rn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class X_ extends yu{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Ya extends Qn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const $h=new Ve,Jl=new ec,Ta=new ti,ba=new D;class Ql extends Mt{constructor(e=new _n,t=new Ya){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ta.copy(n.boundingSphere),Ta.applyMatrix4(s),Ta.radius+=r,e.ray.intersectsSphere(Ta)===!1)return;$h.copy(s).invert(),Jl.copy(e.ray).applyMatrix4($h);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let g=d,_=p;g<_;g++){const m=l.getX(g);ba.fromBufferAttribute(h,m),Yh(ba,m,c,s,e,t,this)}}else{const d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=d,_=p;g<_;g++)ba.fromBufferAttribute(h,g),Yh(ba,g,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Yh(i,e,t,n,s,r,o){const a=Jl.distanceSqToPoint(i);if(a<t){const c=new D;Jl.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Mi extends Mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}class $f extends Ut{constructor(e,t,n,s,r,o,a,c,l,u=Xs){if(u!==Xs&&u!==xr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Xs&&(n=vs),n===void 0&&u===xr&&(n=vr),super(null,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:en,this.minFilter=c!==void 0?c:en,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Tu extends _n{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],o=[];a(s),l(n),u(),this.setAttribute("position",new Rn(r,3)),this.setAttribute("normal",new Rn(r.slice(),3)),this.setAttribute("uv",new Rn(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(T){const b=new D,S=new D,C=new D;for(let R=0;R<t.length;R+=3)p(t[R+0],b),p(t[R+1],S),p(t[R+2],C),c(b,S,C,T)}function c(T,b,S,C){const R=C+1,w=[];for(let L=0;L<=R;L++){w[L]=[];const y=T.clone().lerp(S,L/R),E=b.clone().lerp(S,L/R),I=R-L;for(let W=0;W<=I;W++)W===0&&L===R?w[L][W]=y:w[L][W]=y.clone().lerp(E,W/I)}for(let L=0;L<R;L++)for(let y=0;y<2*(R-L)-1;y++){const E=Math.floor(y/2);y%2===0?(d(w[L][E+1]),d(w[L+1][E]),d(w[L][E])):(d(w[L][E+1]),d(w[L+1][E+1]),d(w[L+1][E]))}}function l(T){const b=new D;for(let S=0;S<r.length;S+=3)b.x=r[S+0],b.y=r[S+1],b.z=r[S+2],b.normalize().multiplyScalar(T),r[S+0]=b.x,r[S+1]=b.y,r[S+2]=b.z}function u(){const T=new D;for(let b=0;b<r.length;b+=3){T.x=r[b+0],T.y=r[b+1],T.z=r[b+2];const S=m(T)/2/Math.PI+.5,C=f(T)/Math.PI+.5;o.push(S,1-C)}g(),h()}function h(){for(let T=0;T<o.length;T+=6){const b=o[T+0],S=o[T+2],C=o[T+4],R=Math.max(b,S,C),w=Math.min(b,S,C);R>.9&&w<.1&&(b<.2&&(o[T+0]+=1),S<.2&&(o[T+2]+=1),C<.2&&(o[T+4]+=1))}}function d(T){r.push(T.x,T.y,T.z)}function p(T,b){const S=T*3;b.x=e[S+0],b.y=e[S+1],b.z=e[S+2]}function g(){const T=new D,b=new D,S=new D,C=new D,R=new Ke,w=new Ke,L=new Ke;for(let y=0,E=0;y<r.length;y+=9,E+=6){T.set(r[y+0],r[y+1],r[y+2]),b.set(r[y+3],r[y+4],r[y+5]),S.set(r[y+6],r[y+7],r[y+8]),R.set(o[E+0],o[E+1]),w.set(o[E+2],o[E+3]),L.set(o[E+4],o[E+5]),C.copy(T).add(b).add(S).divideScalar(3);const I=m(C);_(R,E+0,T,I),_(w,E+2,b,I),_(L,E+4,S,I)}}function _(T,b,S,C){C<0&&T.x===1&&(o[b]=T.x-1),S.x===0&&S.z===0&&(o[b]=C/2/Math.PI+.5)}function m(T){return Math.atan2(T.z,-T.x)}function f(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tu(e.vertices,e.indices,e.radius,e.details)}}class bu extends Tu{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new bu(e.radius,e.detail)}}class jo extends _n{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,h=e/a,d=t/c,p=[],g=[],_=[],m=[];for(let f=0;f<u;f++){const T=f*d-o;for(let b=0;b<l;b++){const S=b*h-r;g.push(S,-T,0),_.push(0,0,1),m.push(b/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let T=0;T<a;T++){const b=T+l*f,S=T+l*(f+1),C=T+1+l*(f+1),R=T+1+l*f;p.push(b,S,R),p.push(S,C,R)}this.setIndex(p),this.setAttribute("position",new Rn(g,3)),this.setAttribute("normal",new Rn(_,3)),this.setAttribute("uv",new Rn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jo(e.width,e.height,e.widthSegments,e.heightSegments)}}class so extends Qn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nf,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ni extends so{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ke(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $e(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ne(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ne(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ne(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class q_ extends Qn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Og,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class $_ extends Qn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Aa(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Y_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function K_(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Kh(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=i[a+c]}return s}function Yf(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}class Zo{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class j_ extends Zo{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:dh,endingEnd:dh}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case fh:r=e,a=2*t-n;break;case ph:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case fh:o=e,c=2*n-t;break;case ph:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-t)/(s-t),_=g*g,m=_*g,f=-d*m+2*d*_-d*g,T=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,b=(-1-p)*m+(1.5+p)*_+.5*g,S=p*m-p*_;for(let C=0;C!==a;++C)r[C]=f*o[u+C]+T*o[l+C]+b*o[c+C]+S*o[h+C];return r}}class Z_ extends Zo{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(n-t)/(s-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[l+d]*h+o[c+d]*u;return r}}class J_ extends Zo{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class ii{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Aa(t,this.TimeBufferType),this.values=Aa(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Aa(e.times,Array),values:Aa(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new J_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Z_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new j_(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case to:t=this.InterpolantFactoryMethodDiscrete;break;case no:t=this.InterpolantFactoryMethodLinear;break;case fc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return to;case this.InterpolantFactoryMethodLinear:return no;case this.InterpolantFactoryMethodSmooth:return fc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&Y_(s))for(let a=0,c=s.length;a!==c;++a){const l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===fc,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(s)c=!0;else{const h=a*n,d=h-n,p=h+n;for(let g=0;g!==n;++g){const _=t[h+g];if(_!==t[d+g]||_!==t[p+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const h=a*n,d=o*n;for(let p=0;p!==n;++p)t[d+p]=t[h+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}ii.prototype.TimeBufferType=Float32Array;ii.prototype.ValueBufferType=Float32Array;ii.prototype.DefaultInterpolation=no;class Ar extends ii{constructor(e,t,n){super(e,t,n)}}Ar.prototype.ValueTypeName="bool";Ar.prototype.ValueBufferType=Array;Ar.prototype.DefaultInterpolation=to;Ar.prototype.InterpolantFactoryMethodLinear=void 0;Ar.prototype.InterpolantFactoryMethodSmooth=void 0;class Kf extends ii{}Kf.prototype.ValueTypeName="color";class Sr extends ii{}Sr.prototype.ValueTypeName="number";class Q_ extends Zo{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t);let l=e*a;for(let u=l+a;l!==u;l+=4)Ki.slerpFlat(r,0,o,l-a,o,l,c);return r}}class yr extends ii{InterpolantFactoryMethodLinear(e){return new Q_(this.times,this.values,this.getValueSize(),e)}}yr.prototype.ValueTypeName="quaternion";yr.prototype.InterpolantFactoryMethodSmooth=void 0;class wr extends ii{constructor(e,t,n){super(e,t,n)}}wr.prototype.ValueTypeName="string";wr.prototype.ValueBufferType=Array;wr.prototype.DefaultInterpolation=to;wr.prototype.InterpolantFactoryMethodLinear=void 0;wr.prototype.InterpolantFactoryMethodSmooth=void 0;class Tr extends ii{}Tr.prototype.ValueTypeName="vector";class e0{constructor(e="",t=-1,n=[],s=Dg){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Bn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(n0(n[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(ii.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const u=K_(c);c=Kh(c,1,u),l=Kh(l,1,u),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Sr(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],u=l.name.match(r);if(u&&u.length>1){const h=u[1];let d=s[h];d||(s[h]=d=[]),d.push(l)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,p,g,_){if(p.length!==0){const m=[],f=[];Yf(p,m,f,g),m.length!==0&&_.push(new h(d,m,f))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const d=l[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)p[d[g].morphTargets[_]]=-1;for(const _ in p){const m=[],f=[];for(let T=0;T!==d[g].morphTargets.length;++T){const b=d[g];m.push(b.time),f.push(b.morphTarget===_?1:0)}s.push(new Sr(".morphTargetInfluence["+_+"]",m,f))}c=p.length*o}else{const p=".bones["+t[h].name+"]";n(Tr,p+".position",d,"pos",s),n(yr,p+".quaternion",d,"rot",s),n(Tr,p+".scale",d,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function t0(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Sr;case"vector":case"vector2":case"vector3":case"vector4":return Tr;case"color":return Kf;case"quaternion":return yr;case"bool":case"boolean":return Ar;case"string":return wr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function n0(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=t0(i.type);if(i.times===void 0){const t=[],n=[];Yf(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const zi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class i0{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const p=l[h],g=l[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const s0=new i0;class Rr{constructor(e){this.manager=e!==void 0?e:s0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Rr.DEFAULT_MATERIAL_NAME="__DEFAULT";const ui={};class r0 extends Error{constructor(e,t){super(e),this.response=t}}class jf extends Rr{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=zi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ui[e]!==void 0){ui[e].push({onLoad:t,onProgress:n,onError:s});return}ui[e]=[],ui[e].push({onLoad:t,onProgress:n,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=ui[e],h=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=d?parseInt(d):0,g=p!==0;let _=0;const m=new ReadableStream({start(f){T();function T(){h.read().then(({done:b,value:S})=>{if(b)f.close();else{_+=S.byteLength;const C=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:p});for(let R=0,w=u.length;R<w;R++){const L=u[R];L.onProgress&&L.onProgress(C)}f.enqueue(S),T()}},b=>{f.error(b)})}}});return new Response(m)}else throw new r0(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(d);return l.arrayBuffer().then(g=>p.decode(g))}}}).then(l=>{zi.add(e,l);const u=ui[e];delete ui[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onLoad&&p.onLoad(l)}}).catch(l=>{const u=ui[e];if(u===void 0)throw this.manager.itemError(e),l;delete ui[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class o0 extends Rr{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=zi.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=io("img");function c(){u(),zi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class a0 extends Rr{constructor(e){super(e)}load(e,t,n,s){const r=new Ut,o=new o0(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class tc extends Mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class c0 extends tc{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ne(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Fc=new Ve,jh=new D,Zh=new D;class Au{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ke(512,512),this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Su,this._frameExtents=new Ke(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;jh.setFromMatrixPosition(e.matrixWorld),t.position.copy(jh),Zh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Zh),t.updateMatrixWorld(),Fc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Fc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class l0 extends Au{constructor(){super(new Jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Er*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class u0 extends tc{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new l0}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Jh=new Ve,Hr=new D,Bc=new D;class h0 extends Au{constructor(){super(new Jt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ke(4,2),this._viewportCount=6,this._viewports=[new rt(2,1,1,1),new rt(0,1,1,1),new rt(3,1,1,1),new rt(1,1,1,1),new rt(3,0,1,1),new rt(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Hr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Hr),Bc.copy(n.position),Bc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Bc),n.updateMatrixWorld(),s.makeTranslation(-Hr.x,-Hr.y,-Hr.z),Jh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jh)}}class Zf extends tc{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new h0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class wu extends zf{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class d0 extends Au{constructor(){super(new wu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Jf extends tc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.shadow=new d0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class jr{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class f0 extends Rr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=zi.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return zi.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),zi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});zi.add(e,c),r.manager.itemStart(e)}}class p0 extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}const Ru="\\[\\]\\.:\\/",m0=new RegExp("["+Ru+"]","g"),Cu="[^"+Ru+"]",g0="[^"+Ru.replace("\\.","")+"]",_0=/((?:WC+[\/:])*)/.source.replace("WC",Cu),v0=/(WCOD+)?/.source.replace("WCOD",g0),x0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Cu),E0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Cu),M0=new RegExp("^"+_0+v0+x0+E0+"$"),S0=["material","materials","bones","map"];class y0{constructor(e,t,n){const s=n||ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ut{constructor(e,t,n){this.path=t,this.parsedPath=n||ut.parseTrackName(t),this.node=ut.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ut.Composite(e,t,n):new ut(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(m0,"")}static parseTrackName(e){const t=M0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);S0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=ut.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[s];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ut.Composite=y0;ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ut.prototype.GetterByBindingType=[ut.prototype._getValue_direct,ut.prototype._getValue_array,ut.prototype._getValue_arrayElement,ut.prototype._getValue_toArray];ut.prototype.SetterByBindingTypeAndVersioning=[[ut.prototype._setValue_direct,ut.prototype._setValue_direct_setNeedsUpdate,ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_array,ut.prototype._setValue_array_setNeedsUpdate,ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_arrayElement,ut.prototype._setValue_arrayElement_setNeedsUpdate,ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_fromArray,ut.prototype._setValue_fromArray_setNeedsUpdate,ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];function Qh(i,e,t,n){const s=T0(n);switch(t){case bf:return i*e;case wf:return i*e;case Rf:return i*e*2;case pu:return i*e/s.components*s.byteLength;case mu:return i*e/s.components*s.byteLength;case Cf:return i*e*2/s.components*s.byteLength;case gu:return i*e*2/s.components*s.byteLength;case Af:return i*e*3/s.components*s.byteLength;case wn:return i*e*4/s.components*s.byteLength;case _u:return i*e*4/s.components*s.byteLength;case Fa:case Ba:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ka:case Ha:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Tl:case Al:return Math.max(i,16)*Math.max(e,8)/4;case yl:case bl:return Math.max(i,8)*Math.max(e,8)/2;case wl:case Rl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Cl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ll:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Il:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Nl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Pl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Dl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ul:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ol:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Fl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Bl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case kl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Hl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Vl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case zl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Gl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Va:case Wl:case Xl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Lf:case ql:return Math.ceil(i/4)*Math.ceil(e/4)*8;case $l:case Yl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function T0(i){switch(i){case Ai:case Sf:return{byteLength:1,components:1};case eo:case yf:case Yo:return{byteLength:2,components:1};case du:case fu:return{byteLength:2,components:4};case vs:case hu:case Fn:return{byteLength:4,components:1};case Tf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:uu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=uu);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Qf(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function b0(i){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,h=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),a.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const u=c.array,h=c.updateRanges;if(i.bindBuffer(l,a),h.length===0)i.bufferSubData(l,0,u);else{h.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<h.length;p++){const g=h[d],_=h[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,h[d]=_)}h.length=d+1;for(let p=0,g=h.length;p<g;p++){const _=h[p];i.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var A0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,w0=`#ifdef USE_ALPHAHASH
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
#endif`,R0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,C0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,L0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,I0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,N0=`#ifdef USE_AOMAP
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
#endif`,P0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,D0=`#ifdef USE_BATCHING
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
#endif`,U0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,O0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,F0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,B0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,k0=`#ifdef USE_IRIDESCENCE
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
#endif`,H0=`#ifdef USE_BUMPMAP
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
#endif`,V0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,z0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,G0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,W0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,X0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,q0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Y0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,K0=`#define PI 3.141592653589793
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
} // validated`,j0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Z0=`vec3 transformedNormal = objectNormal;
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
#endif`,J0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Q0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ev=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nv="gl_FragColor = linearToOutputTexel( gl_FragColor );",iv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sv=`#ifdef USE_ENVMAP
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
#endif`,rv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ov=`#ifdef USE_ENVMAP
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
#endif`,av=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cv=`#ifdef USE_ENVMAP
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
#endif`,lv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,uv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fv=`#ifdef USE_GRADIENTMAP
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
}`,pv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_v=`uniform bool receiveShadow;
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
#endif`,vv=`#ifdef USE_ENVMAP
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
#endif`,xv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ev=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yv=`PhysicalMaterial material;
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
#endif`,Tv=`struct PhysicalMaterial {
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
}`,bv=`
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
#endif`,Av=`#if defined( RE_IndirectDiffuse )
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
#endif`,wv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Iv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Nv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Dv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Uv=`#if defined( USE_POINTS_UV )
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
#endif`,Ov=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vv=`#ifdef USE_MORPHTARGETS
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
#endif`,zv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Wv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Xv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$v=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Yv=`#ifdef USE_NORMALMAP
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
#endif`,Kv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ex=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,tx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ix=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ox=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ax=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ux=`float getShadowMask() {
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
}`,hx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dx=`#ifdef USE_SKINNING
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
#endif`,fx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,px=`#ifdef USE_SKINNING
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
#endif`,mx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_x=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,xx=`#ifdef USE_TRANSMISSION
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
#endif`,Ex=`#ifdef USE_TRANSMISSION
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
#endif`,Mx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ax=`uniform sampler2D t2D;
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
}`,wx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Cx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ix=`#include <common>
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
}`,Nx=`#if DEPTH_PACKING == 3200
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
}`,Px=`#define DISTANCE
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
}`,Dx=`#define DISTANCE
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
}`,Ux=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ox=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fx=`uniform float scale;
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
}`,Bx=`uniform vec3 diffuse;
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
}`,kx=`#include <common>
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
}`,Hx=`uniform vec3 diffuse;
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
}`,Vx=`#define LAMBERT
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
}`,zx=`#define LAMBERT
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
}`,Gx=`#define MATCAP
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
}`,Wx=`#define MATCAP
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
}`,Xx=`#define NORMAL
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
}`,qx=`#define NORMAL
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
}`,$x=`#define PHONG
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
}`,Yx=`#define PHONG
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
}`,Kx=`#define STANDARD
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
}`,jx=`#define STANDARD
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
}`,Zx=`#define TOON
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
}`,Jx=`#define TOON
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
}`,Qx=`uniform float size;
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
}`,eE=`uniform vec3 diffuse;
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
}`,tE=`#include <common>
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
}`,nE=`uniform vec3 color;
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
}`,iE=`uniform float rotation;
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
}`,sE=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:A0,alphahash_pars_fragment:w0,alphamap_fragment:R0,alphamap_pars_fragment:C0,alphatest_fragment:L0,alphatest_pars_fragment:I0,aomap_fragment:N0,aomap_pars_fragment:P0,batching_pars_vertex:D0,batching_vertex:U0,begin_vertex:O0,beginnormal_vertex:F0,bsdfs:B0,iridescence_fragment:k0,bumpmap_pars_fragment:H0,clipping_planes_fragment:V0,clipping_planes_pars_fragment:z0,clipping_planes_pars_vertex:G0,clipping_planes_vertex:W0,color_fragment:X0,color_pars_fragment:q0,color_pars_vertex:$0,color_vertex:Y0,common:K0,cube_uv_reflection_fragment:j0,defaultnormal_vertex:Z0,displacementmap_pars_vertex:J0,displacementmap_vertex:Q0,emissivemap_fragment:ev,emissivemap_pars_fragment:tv,colorspace_fragment:nv,colorspace_pars_fragment:iv,envmap_fragment:sv,envmap_common_pars_fragment:rv,envmap_pars_fragment:ov,envmap_pars_vertex:av,envmap_physical_pars_fragment:vv,envmap_vertex:cv,fog_vertex:lv,fog_pars_vertex:uv,fog_fragment:hv,fog_pars_fragment:dv,gradientmap_pars_fragment:fv,lightmap_pars_fragment:pv,lights_lambert_fragment:mv,lights_lambert_pars_fragment:gv,lights_pars_begin:_v,lights_toon_fragment:xv,lights_toon_pars_fragment:Ev,lights_phong_fragment:Mv,lights_phong_pars_fragment:Sv,lights_physical_fragment:yv,lights_physical_pars_fragment:Tv,lights_fragment_begin:bv,lights_fragment_maps:Av,lights_fragment_end:wv,logdepthbuf_fragment:Rv,logdepthbuf_pars_fragment:Cv,logdepthbuf_pars_vertex:Lv,logdepthbuf_vertex:Iv,map_fragment:Nv,map_pars_fragment:Pv,map_particle_fragment:Dv,map_particle_pars_fragment:Uv,metalnessmap_fragment:Ov,metalnessmap_pars_fragment:Fv,morphinstance_vertex:Bv,morphcolor_vertex:kv,morphnormal_vertex:Hv,morphtarget_pars_vertex:Vv,morphtarget_vertex:zv,normal_fragment_begin:Gv,normal_fragment_maps:Wv,normal_pars_fragment:Xv,normal_pars_vertex:qv,normal_vertex:$v,normalmap_pars_fragment:Yv,clearcoat_normal_fragment_begin:Kv,clearcoat_normal_fragment_maps:jv,clearcoat_pars_fragment:Zv,iridescence_pars_fragment:Jv,opaque_fragment:Qv,packing:ex,premultiplied_alpha_fragment:tx,project_vertex:nx,dithering_fragment:ix,dithering_pars_fragment:sx,roughnessmap_fragment:rx,roughnessmap_pars_fragment:ox,shadowmap_pars_fragment:ax,shadowmap_pars_vertex:cx,shadowmap_vertex:lx,shadowmask_pars_fragment:ux,skinbase_vertex:hx,skinning_pars_vertex:dx,skinning_vertex:fx,skinnormal_vertex:px,specularmap_fragment:mx,specularmap_pars_fragment:gx,tonemapping_fragment:_x,tonemapping_pars_fragment:vx,transmission_fragment:xx,transmission_pars_fragment:Ex,uv_pars_fragment:Mx,uv_pars_vertex:Sx,uv_vertex:yx,worldpos_vertex:Tx,background_vert:bx,background_frag:Ax,backgroundCube_vert:wx,backgroundCube_frag:Rx,cube_vert:Cx,cube_frag:Lx,depth_vert:Ix,depth_frag:Nx,distanceRGBA_vert:Px,distanceRGBA_frag:Dx,equirect_vert:Ux,equirect_frag:Ox,linedashed_vert:Fx,linedashed_frag:Bx,meshbasic_vert:kx,meshbasic_frag:Hx,meshlambert_vert:Vx,meshlambert_frag:zx,meshmatcap_vert:Gx,meshmatcap_frag:Wx,meshnormal_vert:Xx,meshnormal_frag:qx,meshphong_vert:$x,meshphong_frag:Yx,meshphysical_vert:Kx,meshphysical_frag:jx,meshtoon_vert:Zx,meshtoon_frag:Jx,points_vert:Qx,points_frag:eE,shadow_vert:tE,shadow_frag:nE,sprite_vert:iE,sprite_frag:sE},ce={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},Zn={basic:{uniforms:Kt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Kt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Kt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Kt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Kt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Kt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Kt([ce.points,ce.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Kt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Kt([ce.common,ce.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Kt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Kt([ce.sprite,ce.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:Kt([ce.common,ce.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:Kt([ce.lights,ce.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};Zn.physical={uniforms:Kt([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const wa={r:0,b:0,g:0},ns=new ei,rE=new Ve;function oE(i,e,t,n,s,r,o){const a=new Ne(0);let c=r===!0?0:1,l,u,h=null,d=0,p=null;function g(b){let S=b.isScene===!0?b.background:null;return S&&S.isTexture&&(S=(b.backgroundBlurriness>0?t:e).get(S)),S}function _(b){let S=!1;const C=g(b);C===null?f(a,c):C&&C.isColor&&(f(C,1),S=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(b,S){const C=g(S);C&&(C.isCubeTexture||C.mapping===Qa)?(u===void 0&&(u=new Qt(new Ko(1,1,1),new $i({name:"BackgroundCubeMaterial",uniforms:Mr(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,w,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ns.copy(S.backgroundRotation),ns.x*=-1,ns.y*=-1,ns.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(rE.makeRotationFromEuler(ns)),u.material.toneMapped=Qe.getTransfer(C.colorSpace)!==ht,(h!==C||d!==C.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=C,d=C.version,p=i.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(l===void 0&&(l=new Qt(new jo(2,2),new $i({name:"BackgroundMaterial",uniforms:Mr(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=C,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=Qe.getTransfer(C.colorSpace)!==ht,C.matrixAutoUpdate===!0&&C.updateMatrix(),l.material.uniforms.uvTransform.value.copy(C.matrix),(h!==C||d!==C.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,h=C,d=C.version,p=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function f(b,S){b.getRGB(wa,Vf(i)),n.buffers.color.setClear(wa.r,wa.g,wa.b,S,o)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),l!==void 0&&(l.geometry.dispose(),l.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(b,S=1){a.set(b),c=S,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,f(a,c)},render:_,addToRenderList:m,dispose:T}}function aE(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(E,I,W,H,J){let ee=!1;const K=h(H,W,I);r!==K&&(r=K,l(r.object)),ee=p(E,H,W,J),ee&&g(E,H,W,J),J!==null&&e.update(J,i.ELEMENT_ARRAY_BUFFER),(ee||o)&&(o=!1,S(E,I,W,H),J!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function c(){return i.createVertexArray()}function l(E){return i.bindVertexArray(E)}function u(E){return i.deleteVertexArray(E)}function h(E,I,W){const H=W.wireframe===!0;let J=n[E.id];J===void 0&&(J={},n[E.id]=J);let ee=J[I.id];ee===void 0&&(ee={},J[I.id]=ee);let K=ee[H];return K===void 0&&(K=d(c()),ee[H]=K),K}function d(E){const I=[],W=[],H=[];for(let J=0;J<t;J++)I[J]=0,W[J]=0,H[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:W,attributeDivisors:H,object:E,attributes:{},index:null}}function p(E,I,W,H){const J=r.attributes,ee=I.attributes;let K=0;const ie=W.getAttributes();for(const z in ie)if(ie[z].location>=0){const _e=J[z];let Te=ee[z];if(Te===void 0&&(z==="instanceMatrix"&&E.instanceMatrix&&(Te=E.instanceMatrix),z==="instanceColor"&&E.instanceColor&&(Te=E.instanceColor)),_e===void 0||_e.attribute!==Te||Te&&_e.data!==Te.data)return!0;K++}return r.attributesNum!==K||r.index!==H}function g(E,I,W,H){const J={},ee=I.attributes;let K=0;const ie=W.getAttributes();for(const z in ie)if(ie[z].location>=0){let _e=ee[z];_e===void 0&&(z==="instanceMatrix"&&E.instanceMatrix&&(_e=E.instanceMatrix),z==="instanceColor"&&E.instanceColor&&(_e=E.instanceColor));const Te={};Te.attribute=_e,_e&&_e.data&&(Te.data=_e.data),J[z]=Te,K++}r.attributes=J,r.attributesNum=K,r.index=H}function _(){const E=r.newAttributes;for(let I=0,W=E.length;I<W;I++)E[I]=0}function m(E){f(E,0)}function f(E,I){const W=r.newAttributes,H=r.enabledAttributes,J=r.attributeDivisors;W[E]=1,H[E]===0&&(i.enableVertexAttribArray(E),H[E]=1),J[E]!==I&&(i.vertexAttribDivisor(E,I),J[E]=I)}function T(){const E=r.newAttributes,I=r.enabledAttributes;for(let W=0,H=I.length;W<H;W++)I[W]!==E[W]&&(i.disableVertexAttribArray(W),I[W]=0)}function b(E,I,W,H,J,ee,K){K===!0?i.vertexAttribIPointer(E,I,W,J,ee):i.vertexAttribPointer(E,I,W,H,J,ee)}function S(E,I,W,H){_();const J=H.attributes,ee=W.getAttributes(),K=I.defaultAttributeValues;for(const ie in ee){const z=ee[ie];if(z.location>=0){let he=J[ie];if(he===void 0&&(ie==="instanceMatrix"&&E.instanceMatrix&&(he=E.instanceMatrix),ie==="instanceColor"&&E.instanceColor&&(he=E.instanceColor)),he!==void 0){const _e=he.normalized,Te=he.itemSize,Xe=e.get(he);if(Xe===void 0)continue;const pt=Xe.buffer,$=Xe.type,ae=Xe.bytesPerElement,Se=$===i.INT||$===i.UNSIGNED_INT||he.gpuType===hu;if(he.isInterleavedBufferAttribute){const de=he.data,Ie=de.stride,Be=he.offset;if(de.isInstancedInterleavedBuffer){for(let qe=0;qe<z.locationSize;qe++)f(z.location+qe,de.meshPerAttribute);E.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let qe=0;qe<z.locationSize;qe++)m(z.location+qe);i.bindBuffer(i.ARRAY_BUFFER,pt);for(let qe=0;qe<z.locationSize;qe++)b(z.location+qe,Te/z.locationSize,$,_e,Ie*ae,(Be+Te/z.locationSize*qe)*ae,Se)}else{if(he.isInstancedBufferAttribute){for(let de=0;de<z.locationSize;de++)f(z.location+de,he.meshPerAttribute);E.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let de=0;de<z.locationSize;de++)m(z.location+de);i.bindBuffer(i.ARRAY_BUFFER,pt);for(let de=0;de<z.locationSize;de++)b(z.location+de,Te/z.locationSize,$,_e,Te*ae,Te/z.locationSize*de*ae,Se)}}else if(K!==void 0){const _e=K[ie];if(_e!==void 0)switch(_e.length){case 2:i.vertexAttrib2fv(z.location,_e);break;case 3:i.vertexAttrib3fv(z.location,_e);break;case 4:i.vertexAttrib4fv(z.location,_e);break;default:i.vertexAttrib1fv(z.location,_e)}}}}T()}function C(){L();for(const E in n){const I=n[E];for(const W in I){const H=I[W];for(const J in H)u(H[J].object),delete H[J];delete I[W]}delete n[E]}}function R(E){if(n[E.id]===void 0)return;const I=n[E.id];for(const W in I){const H=I[W];for(const J in H)u(H[J].object),delete H[J];delete I[W]}delete n[E.id]}function w(E){for(const I in n){const W=n[I];if(W[E.id]===void 0)continue;const H=W[E.id];for(const J in H)u(H[J].object),delete H[J];delete W[E.id]}}function L(){y(),o=!0,r!==s&&(r=s,l(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:y,dispose:C,releaseStatesOfGeometry:R,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:T}}function cE(i,e,t){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function o(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function a(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];t.update(p,n,1)}function c(l,u,h,d){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],u[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*d[_];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function lE(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==wn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const L=w===Yo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Ai&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Fn&&!L)}function c(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:T,maxVaryings:b,maxFragmentUniforms:S,vertexTextures:C,maxSamples:R}}function uE(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new rs,a=new He,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||n!==0||s;return s=d,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,f=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{const T=r?0:n,b=T*4;let S=f.clippingState||null;c.value=S,S=u(g,d,b,p);for(let C=0;C!==b;++C)S[C]=t[C];f.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,p,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const f=p+_*4,T=d.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<f)&&(m=new Float32Array(f));for(let b=0,S=p;b!==_;++b,S+=4)o.copy(h[b]).applyMatrix4(T,a),o.normal.toArray(m,S),m[S+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function hE(i){let e=new WeakMap;function t(o,a){return a===Ml?o.mapping=mr:a===Sl&&(o.mapping=gr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ml||a===Sl)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new D_(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const zs=4,ed=[.125,.215,.35,.446,.526,.582],ls=20,kc=new wu,td=new Ne;let Hc=null,Vc=0,zc=0,Gc=!1;const os=(1+Math.sqrt(5))/2,Os=1/os,nd=[new D(-os,Os,0),new D(os,Os,0),new D(-Os,0,os),new D(Os,0,os),new D(0,os,-Os),new D(0,os,Os),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class id{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Hc=this._renderer.getRenderTarget(),Vc=this._renderer.getActiveCubeFace(),zc=this._renderer.getActiveMipmapLevel(),Gc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=od(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Hc,Vc,zc),this._renderer.xr.enabled=Gc,e.scissorTest=!1,Ra(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===mr||e.mapping===gr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hc=this._renderer.getRenderTarget(),Vc=this._renderer.getActiveCubeFace(),zc=this._renderer.getActiveMipmapLevel(),Gc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:gn,minFilter:gn,generateMipmaps:!1,type:Yo,format:wn,colorSpace:tn,depthBuffer:!1},s=sd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sd(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dE(r)),this._blurMaterial=fE(r,e,t)}return s}_compileMaterial(e){const t=new Qt(this._lodPlanes[0],e);this._renderer.compile(t,kc)}_sceneToCubeUV(e,t,n,s){const a=new Jt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(td),u.toneMapping=Wi,u.autoClear=!1;const p=new hs({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1}),g=new Qt(new Ko,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(td),_=!0);for(let f=0;f<6;f++){const T=f%3;T===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):T===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));const b=this._cubeSize;Ra(s,T*b,f>2?b:0,b,b),u.setRenderTarget(s),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===mr||e.mapping===gr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=od()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rd());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Qt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;Ra(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,kc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=nd[(s-r-1)%nd.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Qt(this._lodPlanes[s],l),d=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ls-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):ls;m>ls&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ls}`);const f=[];let T=0;for(let w=0;w<ls;++w){const L=w/_,y=Math.exp(-L*L/2);f.push(y),w===0?T+=y:w<m&&(T+=2*y)}for(let w=0;w<f.length;w++)f[w]=f[w]/T;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-n;const S=this._sizeLods[s],C=3*S*(s>b-zs?s-b+zs:0),R=4*(this._cubeSize-S);Ra(t,C,R,3*S,2*S),c.setRenderTarget(t),c.render(h,kc)}}function dE(i){const e=[],t=[],n=[];let s=i;const r=i-zs+1+ed.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>i-zs?c=ed[o-i+zs-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,_=3,m=2,f=1,T=new Float32Array(_*g*p),b=new Float32Array(m*g*p),S=new Float32Array(f*g*p);for(let R=0;R<p;R++){const w=R%3*2/3-1,L=R>2?0:-1,y=[w,L,0,w+2/3,L,0,w+2/3,L+1,0,w,L,0,w+2/3,L+1,0,w,L+1,0];T.set(y,_*g*R),b.set(d,m*g*R);const E=[R,R,R,R,R,R];S.set(E,f*g*R)}const C=new _n;C.setAttribute("position",new Ht(T,_)),C.setAttribute("uv",new Ht(b,m)),C.setAttribute("faceIndex",new Ht(S,f)),e.push(C),s>zs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function sd(i,e,t){const n=new xs(i,e,t);return n.texture.mapping=Qa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ra(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function fE(i,e,t){const n=new Float32Array(ls),s=new D(0,1,0);return new $i({name:"SphericalGaussianBlur",defines:{n:ls,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Lu(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function rd(){return new $i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lu(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function od(){return new $i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Lu(){return`

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
	`}function pE(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Ml||c===Sl,u=c===mr||c===gr;if(l||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new id(i)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return l&&p&&p.height>0||u&&p&&s(p)?(t===null&&(t=new id(i)),h=l?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function mE(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Vs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function gE(i,e,t,n){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const p in d)e.update(d[p],i.ARRAY_BUFFER)}function l(h){const d=[],p=h.index,g=h.attributes.position;let _=0;if(p!==null){const T=p.array;_=p.version;for(let b=0,S=T.length;b<S;b+=3){const C=T[b+0],R=T[b+1],w=T[b+2];d.push(C,R,R,w,w,C)}}else if(g!==void 0){const T=g.array;_=g.version;for(let b=0,S=T.length/3-1;b<S;b+=3){const C=b+0,R=b+1,w=b+2;d.push(C,R,R,w,w,C)}}else return;const m=new(Df(d)?Hf:kf)(d,1);m.version=_;const f=r.get(h);f&&e.remove(f),r.set(h,m)}function u(h){const d=r.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function _E(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,p){i.drawElements(n,p,r,d*o),t.update(p,n,1)}function l(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,d*o,g),t.update(p,n,g))}function u(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,n,1)}function h(d,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)l(d[f]/o,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,_,0,g);let f=0;for(let T=0;T<g;T++)f+=p[T]*_[T];t.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function vE(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function xE(i,e,t){const n=new WeakMap,s=new rt;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let E=function(){L.dispose(),n.delete(a),a.removeEventListener("dispose",E)};var p=E;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let S=0;g===!0&&(S=1),_===!0&&(S=2),m===!0&&(S=3);let C=a.attributes.position.count*S,R=1;C>e.maxTextureSize&&(R=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const w=new Float32Array(C*R*4*h),L=new Of(w,C,R,h);L.type=Fn,L.needsUpdate=!0;const y=S*4;for(let I=0;I<h;I++){const W=f[I],H=T[I],J=b[I],ee=C*R*4*I;for(let K=0;K<W.count;K++){const ie=K*y;g===!0&&(s.fromBufferAttribute(W,K),w[ee+ie+0]=s.x,w[ee+ie+1]=s.y,w[ee+ie+2]=s.z,w[ee+ie+3]=0),_===!0&&(s.fromBufferAttribute(H,K),w[ee+ie+4]=s.x,w[ee+ie+5]=s.y,w[ee+ie+6]=s.z,w[ee+ie+7]=0),m===!0&&(s.fromBufferAttribute(J,K),w[ee+ie+8]=s.x,w[ee+ie+9]=s.y,w[ee+ie+10]=s.z,w[ee+ie+11]=J.itemSize===4?s.w:1)}}d={count:h,texture:L,size:new Ke(C,R)},n.set(a,d),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function EE(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(s.get(h)!==l&&(e.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return h}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}const ep=new Ut,ad=new $f(1,1),tp=new Of,np=new v_,ip=new Gf,cd=[],ld=[],ud=new Float32Array(16),hd=new Float32Array(9),dd=new Float32Array(4);function Cr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=cd[s];if(r===void 0&&(r=new Float32Array(s),cd[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Nt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Pt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function nc(i,e){let t=ld[e];t===void 0&&(t=new Int32Array(e),ld[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function ME(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function SE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2fv(this.addr,e),Pt(t,e)}}function yE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nt(t,e))return;i.uniform3fv(this.addr,e),Pt(t,e)}}function TE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4fv(this.addr,e),Pt(t,e)}}function bE(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(Nt(t,n))return;dd.set(n),i.uniformMatrix2fv(this.addr,!1,dd),Pt(t,n)}}function AE(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(Nt(t,n))return;hd.set(n),i.uniformMatrix3fv(this.addr,!1,hd),Pt(t,n)}}function wE(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(Nt(t,n))return;ud.set(n),i.uniformMatrix4fv(this.addr,!1,ud),Pt(t,n)}}function RE(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function CE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2iv(this.addr,e),Pt(t,e)}}function LE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;i.uniform3iv(this.addr,e),Pt(t,e)}}function IE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4iv(this.addr,e),Pt(t,e)}}function NE(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function PE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2uiv(this.addr,e),Pt(t,e)}}function DE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;i.uniform3uiv(this.addr,e),Pt(t,e)}}function UE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4uiv(this.addr,e),Pt(t,e)}}function OE(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ad.compareFunction=Pf,r=ad):r=ep,t.setTexture2D(e||r,s)}function FE(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||np,s)}function BE(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||ip,s)}function kE(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||tp,s)}function HE(i){switch(i){case 5126:return ME;case 35664:return SE;case 35665:return yE;case 35666:return TE;case 35674:return bE;case 35675:return AE;case 35676:return wE;case 5124:case 35670:return RE;case 35667:case 35671:return CE;case 35668:case 35672:return LE;case 35669:case 35673:return IE;case 5125:return NE;case 36294:return PE;case 36295:return DE;case 36296:return UE;case 35678:case 36198:case 36298:case 36306:case 35682:return OE;case 35679:case 36299:case 36307:return FE;case 35680:case 36300:case 36308:case 36293:return BE;case 36289:case 36303:case 36311:case 36292:return kE}}function VE(i,e){i.uniform1fv(this.addr,e)}function zE(i,e){const t=Cr(e,this.size,2);i.uniform2fv(this.addr,t)}function GE(i,e){const t=Cr(e,this.size,3);i.uniform3fv(this.addr,t)}function WE(i,e){const t=Cr(e,this.size,4);i.uniform4fv(this.addr,t)}function XE(i,e){const t=Cr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function qE(i,e){const t=Cr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function $E(i,e){const t=Cr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function YE(i,e){i.uniform1iv(this.addr,e)}function KE(i,e){i.uniform2iv(this.addr,e)}function jE(i,e){i.uniform3iv(this.addr,e)}function ZE(i,e){i.uniform4iv(this.addr,e)}function JE(i,e){i.uniform1uiv(this.addr,e)}function QE(i,e){i.uniform2uiv(this.addr,e)}function eM(i,e){i.uniform3uiv(this.addr,e)}function tM(i,e){i.uniform4uiv(this.addr,e)}function nM(i,e,t){const n=this.cache,s=e.length,r=nc(t,s);Nt(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||ep,r[o])}function iM(i,e,t){const n=this.cache,s=e.length,r=nc(t,s);Nt(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||np,r[o])}function sM(i,e,t){const n=this.cache,s=e.length,r=nc(t,s);Nt(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||ip,r[o])}function rM(i,e,t){const n=this.cache,s=e.length,r=nc(t,s);Nt(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||tp,r[o])}function oM(i){switch(i){case 5126:return VE;case 35664:return zE;case 35665:return GE;case 35666:return WE;case 35674:return XE;case 35675:return qE;case 35676:return $E;case 5124:case 35670:return YE;case 35667:case 35671:return KE;case 35668:case 35672:return jE;case 35669:case 35673:return ZE;case 5125:return JE;case 36294:return QE;case 36295:return eM;case 36296:return tM;case 35678:case 36198:case 36298:case 36306:case 35682:return nM;case 35679:case 36299:case 36307:return iM;case 35680:case 36300:case 36308:case 36293:return sM;case 36289:case 36303:case 36311:case 36292:return rM}}class aM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=HE(t.type)}}class cM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=oM(t.type)}}class lM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const Wc=/(\w+)(\])?(\[|\.)?/g;function fd(i,e){i.seq.push(e),i.map[e.id]=e}function uM(i,e,t){const n=i.name,s=n.length;for(Wc.lastIndex=0;;){const r=Wc.exec(n),o=Wc.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){fd(t,l===void 0?new aM(a,i,e):new cM(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new lM(a),fd(t,h)),t=h}}}class za{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);uM(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function pd(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const hM=37297;let dM=0;function fM(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const md=new He;function pM(i){Qe._getMatrix(md,Qe.workingColorSpace,i);const e=`mat3( ${md.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(i)){case Wa:return[e,"LinearTransferOETF"];case ht:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function gd(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+fM(i.getShaderSource(e),o)}else return s}function mM(i,e){const t=pM(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function gM(i,e){let t;switch(e){case wg:t="Linear";break;case Rg:t="Reinhard";break;case Cg:t="Cineon";break;case xf:t="ACESFilmic";break;case Ig:t="AgX";break;case Ng:t="Neutral";break;case Lg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ca=new D;function _M(){Qe.getLuminanceCoefficients(Ca);const i=Ca.x.toFixed(4),e=Ca.y.toFixed(4),t=Ca.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vM(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xr).join(`
`)}function xM(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function EM(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Xr(i){return i!==""}function _d(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const MM=/^[ \t]*#include +<([\w\d./]+)>/gm;function eu(i){return i.replace(MM,yM)}const SM=new Map;function yM(i,e){let t=Ge[e];if(t===void 0){const n=SM.get(e);if(n!==void 0)t=Ge[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return eu(t)}const TM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xd(i){return i.replace(TM,bM)}function bM(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ed(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function AM(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===gf?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===_f?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===hi&&(e="SHADOWMAP_TYPE_VSM"),e}function wM(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case mr:case gr:e="ENVMAP_TYPE_CUBE";break;case Qa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function RM(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case gr:e="ENVMAP_MODE_REFRACTION";break}return e}function CM(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case vf:e="ENVMAP_BLENDING_MULTIPLY";break;case bg:e="ENVMAP_BLENDING_MIX";break;case Ag:e="ENVMAP_BLENDING_ADD";break}return e}function LM(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function IM(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=AM(t),l=wM(t),u=RM(t),h=CM(t),d=LM(t),p=vM(t),g=xM(r),_=s.createProgram();let m,f,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Xr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Xr).join(`
`),f.length>0&&(f+=`
`)):(m=[Ed(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xr).join(`
`),f=[Ed(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wi?"#define TONE_MAPPING":"",t.toneMapping!==Wi?Ge.tonemapping_pars_fragment:"",t.toneMapping!==Wi?gM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,mM("linearToOutputTexel",t.outputColorSpace),_M(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xr).join(`
`)),o=eu(o),o=_d(o,t),o=vd(o,t),a=eu(a),a=_d(a,t),a=vd(a,t),o=xd(o),a=xd(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===gh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===gh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const b=T+m+o,S=T+f+a,C=pd(s,s.VERTEX_SHADER,b),R=pd(s,s.FRAGMENT_SHADER,S);s.attachShader(_,C),s.attachShader(_,R),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function w(I){if(i.debug.checkShaderErrors){const W=s.getProgramInfoLog(_).trim(),H=s.getShaderInfoLog(C).trim(),J=s.getShaderInfoLog(R).trim();let ee=!0,K=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(ee=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,C,R);else{const ie=gd(s,C,"vertex"),z=gd(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+W+`
`+ie+`
`+z)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(H===""||J==="")&&(K=!1);K&&(I.diagnostics={runnable:ee,programLog:W,vertexShader:{log:H,prefix:m},fragmentShader:{log:J,prefix:f}})}s.deleteShader(C),s.deleteShader(R),L=new za(s,_),y=EM(s,_)}let L;this.getUniforms=function(){return L===void 0&&w(this),L};let y;this.getAttributes=function(){return y===void 0&&w(this),y};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(_,hM)),E},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=dM++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=R,this}let NM=0;class PM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new DM(e),t.set(e,n)),n}}class DM{constructor(e){this.id=NM++,this.code=e,this.usedTimes=0}}function UM(i,e,t,n,s,r,o){const a=new Ff,c=new PM,l=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return l.add(y),y===0?"uv":`uv${y}`}function m(y,E,I,W,H){const J=W.fog,ee=H.geometry,K=y.isMeshStandardMaterial?W.environment:null,ie=(y.isMeshStandardMaterial?t:e).get(y.envMap||K),z=ie&&ie.mapping===Qa?ie.image.height:null,he=g[y.type];y.precision!==null&&(p=s.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const _e=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Te=_e!==void 0?_e.length:0;let Xe=0;ee.morphAttributes.position!==void 0&&(Xe=1),ee.morphAttributes.normal!==void 0&&(Xe=2),ee.morphAttributes.color!==void 0&&(Xe=3);let pt,$,ae,Se;if(he){const ct=Zn[he];pt=ct.vertexShader,$=ct.fragmentShader}else pt=y.vertexShader,$=y.fragmentShader,c.update(y),ae=c.getVertexShaderID(y),Se=c.getFragmentShaderID(y);const de=i.getRenderTarget(),Ie=i.state.buffers.depth.getReversed(),Be=H.isInstancedMesh===!0,qe=H.isBatchedMesh===!0,St=!!y.map,et=!!y.matcap,At=!!ie,N=!!y.aoMap,vn=!!y.lightMap,je=!!y.bumpMap,Ze=!!y.normalMap,be=!!y.displacementMap,_t=!!y.emissiveMap,Ae=!!y.metalnessMap,A=!!y.roughnessMap,x=y.anisotropy>0,F=y.clearcoat>0,j=y.dispersion>0,te=y.iridescence>0,q=y.sheen>0,ye=y.transmission>0,fe=x&&!!y.anisotropyMap,ve=F&&!!y.clearcoatMap,tt=F&&!!y.clearcoatNormalMap,oe=F&&!!y.clearcoatRoughnessMap,xe=te&&!!y.iridescenceMap,Le=te&&!!y.iridescenceThicknessMap,Pe=q&&!!y.sheenColorMap,Ee=q&&!!y.sheenRoughnessMap,Je=!!y.specularMap,ze=!!y.specularColorMap,mt=!!y.specularIntensityMap,P=ye&&!!y.transmissionMap,le=ye&&!!y.thicknessMap,V=!!y.gradientMap,Z=!!y.alphaMap,me=y.alphaTest>0,pe=!!y.alphaHash,ke=!!y.extensions;let Tt=Wi;y.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(Tt=i.toneMapping);const Vt={shaderID:he,shaderType:y.type,shaderName:y.name,vertexShader:pt,fragmentShader:$,defines:y.defines,customVertexShaderID:ae,customFragmentShaderID:Se,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:qe,batchingColor:qe&&H._colorsTexture!==null,instancing:Be,instancingColor:Be&&H.instanceColor!==null,instancingMorph:Be&&H.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:de===null?i.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:tn,alphaToCoverage:!!y.alphaToCoverage,map:St,matcap:et,envMap:At,envMapMode:At&&ie.mapping,envMapCubeUVHeight:z,aoMap:N,lightMap:vn,bumpMap:je,normalMap:Ze,displacementMap:d&&be,emissiveMap:_t,normalMapObjectSpace:Ze&&y.normalMapType===Bg,normalMapTangentSpace:Ze&&y.normalMapType===Nf,metalnessMap:Ae,roughnessMap:A,anisotropy:x,anisotropyMap:fe,clearcoat:F,clearcoatMap:ve,clearcoatNormalMap:tt,clearcoatRoughnessMap:oe,dispersion:j,iridescence:te,iridescenceMap:xe,iridescenceThicknessMap:Le,sheen:q,sheenColorMap:Pe,sheenRoughnessMap:Ee,specularMap:Je,specularColorMap:ze,specularIntensityMap:mt,transmission:ye,transmissionMap:P,thicknessMap:le,gradientMap:V,opaque:y.transparent===!1&&y.blending===Ws&&y.alphaToCoverage===!1,alphaMap:Z,alphaTest:me,alphaHash:pe,combine:y.combine,mapUv:St&&_(y.map.channel),aoMapUv:N&&_(y.aoMap.channel),lightMapUv:vn&&_(y.lightMap.channel),bumpMapUv:je&&_(y.bumpMap.channel),normalMapUv:Ze&&_(y.normalMap.channel),displacementMapUv:be&&_(y.displacementMap.channel),emissiveMapUv:_t&&_(y.emissiveMap.channel),metalnessMapUv:Ae&&_(y.metalnessMap.channel),roughnessMapUv:A&&_(y.roughnessMap.channel),anisotropyMapUv:fe&&_(y.anisotropyMap.channel),clearcoatMapUv:ve&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:tt&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:Le&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&_(y.sheenRoughnessMap.channel),specularMapUv:Je&&_(y.specularMap.channel),specularColorMapUv:ze&&_(y.specularColorMap.channel),specularIntensityMapUv:mt&&_(y.specularIntensityMap.channel),transmissionMapUv:P&&_(y.transmissionMap.channel),thicknessMapUv:le&&_(y.thicknessMap.channel),alphaMapUv:Z&&_(y.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(Ze||x),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!ee.attributes.uv&&(St||Z),fog:!!J,useFog:y.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Ie,skinning:H.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:Xe,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Tt,decodeVideoTexture:St&&y.map.isVideoTexture===!0&&Qe.getTransfer(y.map.colorSpace)===ht,decodeVideoTextureEmissive:_t&&y.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(y.emissiveMap.colorSpace)===ht,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Jn,flipSided:y.side===cn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ke&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&y.extensions.multiDraw===!0||qe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Vt.vertexUv1s=l.has(1),Vt.vertexUv2s=l.has(2),Vt.vertexUv3s=l.has(3),l.clear(),Vt}function f(y){const E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(const I in y.defines)E.push(I),E.push(y.defines[I]);return y.isRawShaderMaterial===!1&&(T(E,y),b(E,y),E.push(i.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function T(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function b(y,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),y.push(a.mask)}function S(y){const E=g[y.type];let I;if(E){const W=Zn[E];I=L_.clone(W.uniforms)}else I=y.uniforms;return I}function C(y,E){let I;for(let W=0,H=u.length;W<H;W++){const J=u[W];if(J.cacheKey===E){I=J,++I.usedTimes;break}}return I===void 0&&(I=new IM(i,E,y,r),u.push(I)),I}function R(y){if(--y.usedTimes===0){const E=u.indexOf(y);u[E]=u[u.length-1],u.pop(),y.destroy()}}function w(y){c.remove(y)}function L(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:S,acquireProgram:C,releaseProgram:R,releaseShaderCache:w,programs:u,dispose:L}}function OM(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function FM(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Md(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Sd(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h,d,p,g,_,m){let f=i[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},i[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=_,f.group=m),e++,f}function a(h,d,p,g,_,m){const f=o(h,d,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):t.push(f)}function c(h,d,p,g,_,m){const f=o(h,d,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function l(h,d){t.length>1&&t.sort(h||FM),n.length>1&&n.sort(d||Md),s.length>1&&s.sort(d||Md)}function u(){for(let h=e,d=i.length;h<d;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function BM(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new Sd,i.set(n,[o])):s>=r.length?(o=new Sd,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function kM(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Ne};break;case"SpotLight":t={position:new D,direction:new D,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function HM(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let VM=0;function zM(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function GM(i){const e=new kM,t=HM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);const s=new D,r=new Ve,o=new Ve;function a(l){let u=0,h=0,d=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,T=0,b=0,S=0,C=0,R=0,w=0;l.sort(zM);for(let y=0,E=l.length;y<E;y++){const I=l[y],W=I.color,H=I.intensity,J=I.distance,ee=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=W.r*H,h+=W.g*H,d+=W.b*H;else if(I.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(I.sh.coefficients[K],H);w++}else if(I.isDirectionalLight){const K=e.get(I);if(K.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const ie=I.shadow,z=t.get(I);z.shadowIntensity=ie.intensity,z.shadowBias=ie.bias,z.shadowNormalBias=ie.normalBias,z.shadowRadius=ie.radius,z.shadowMapSize=ie.mapSize,n.directionalShadow[p]=z,n.directionalShadowMap[p]=ee,n.directionalShadowMatrix[p]=I.shadow.matrix,T++}n.directional[p]=K,p++}else if(I.isSpotLight){const K=e.get(I);K.position.setFromMatrixPosition(I.matrixWorld),K.color.copy(W).multiplyScalar(H),K.distance=J,K.coneCos=Math.cos(I.angle),K.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),K.decay=I.decay,n.spot[_]=K;const ie=I.shadow;if(I.map&&(n.spotLightMap[C]=I.map,C++,ie.updateMatrices(I),I.castShadow&&R++),n.spotLightMatrix[_]=ie.matrix,I.castShadow){const z=t.get(I);z.shadowIntensity=ie.intensity,z.shadowBias=ie.bias,z.shadowNormalBias=ie.normalBias,z.shadowRadius=ie.radius,z.shadowMapSize=ie.mapSize,n.spotShadow[_]=z,n.spotShadowMap[_]=ee,S++}_++}else if(I.isRectAreaLight){const K=e.get(I);K.color.copy(W).multiplyScalar(H),K.halfWidth.set(I.width*.5,0,0),K.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=K,m++}else if(I.isPointLight){const K=e.get(I);if(K.color.copy(I.color).multiplyScalar(I.intensity),K.distance=I.distance,K.decay=I.decay,I.castShadow){const ie=I.shadow,z=t.get(I);z.shadowIntensity=ie.intensity,z.shadowBias=ie.bias,z.shadowNormalBias=ie.normalBias,z.shadowRadius=ie.radius,z.shadowMapSize=ie.mapSize,z.shadowCameraNear=ie.camera.near,z.shadowCameraFar=ie.camera.far,n.pointShadow[g]=z,n.pointShadowMap[g]=ee,n.pointShadowMatrix[g]=I.shadow.matrix,b++}n.point[g]=K,g++}else if(I.isHemisphereLight){const K=e.get(I);K.skyColor.copy(I.color).multiplyScalar(H),K.groundColor.copy(I.groundColor).multiplyScalar(H),n.hemi[f]=K,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_FLOAT_1,n.rectAreaLTC2=ce.LTC_FLOAT_2):(n.rectAreaLTC1=ce.LTC_HALF_1,n.rectAreaLTC2=ce.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const L=n.hash;(L.directionalLength!==p||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==m||L.hemiLength!==f||L.numDirectionalShadows!==T||L.numPointShadows!==b||L.numSpotShadows!==S||L.numSpotMaps!==C||L.numLightProbes!==w)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=S+C-R,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=w,L.directionalLength=p,L.pointLength=g,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=f,L.numDirectionalShadows=T,L.numPointShadows=b,L.numSpotShadows=S,L.numSpotMaps=C,L.numLightProbes=w,n.version=VM++)}function c(l,u){let h=0,d=0,p=0,g=0,_=0;const m=u.matrixWorldInverse;for(let f=0,T=l.length;f<T;f++){const b=l[f];if(b.isDirectionalLight){const S=n.directional[h];S.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),h++}else if(b.isSpotLight){const S=n.spot[p];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),p++}else if(b.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),S.halfWidth.set(b.width*.5,0,0),S.halfHeight.set(0,b.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){const S=n.point[d];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){const S=n.hemi[_];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function yd(i){const e=new GM(i),t=[],n=[];function s(u){l.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function WM(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new yd(i),e.set(s,[a])):r>=o.length?(a=new yd(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const XM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qM=`uniform sampler2D shadow_pass;
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
}`;function $M(i,e,t){let n=new Su;const s=new Ke,r=new Ke,o=new rt,a=new q_({depthPacking:Fg}),c=new $_,l={},u=t.maxTextureSize,h={[bi]:cn,[cn]:bi,[Jn]:Jn},d=new $i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:XM,fragmentShader:qM}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new _n;g.setAttribute("position",new Ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Qt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gf;let f=this.type;this.render=function(R,w,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const y=i.getRenderTarget(),E=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),W=i.state;W.setBlending(Gi),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const H=f!==hi&&this.type===hi,J=f===hi&&this.type!==hi;for(let ee=0,K=R.length;ee<K;ee++){const ie=R[ee],z=ie.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const he=z.getFrameExtents();if(s.multiply(he),r.copy(z.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/he.x),s.x=r.x*he.x,z.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/he.y),s.y=r.y*he.y,z.mapSize.y=r.y)),z.map===null||H===!0||J===!0){const Te=this.type!==hi?{minFilter:en,magFilter:en}:{};z.map!==null&&z.map.dispose(),z.map=new xs(s.x,s.y,Te),z.map.texture.name=ie.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();const _e=z.getViewportCount();for(let Te=0;Te<_e;Te++){const Xe=z.getViewport(Te);o.set(r.x*Xe.x,r.y*Xe.y,r.x*Xe.z,r.y*Xe.w),W.viewport(o),z.updateMatrices(ie,Te),n=z.getFrustum(),S(w,L,z.camera,ie,this.type)}z.isPointLightShadow!==!0&&this.type===hi&&T(z,L),z.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(y,E,I)};function T(R,w){const L=e.update(_);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new xs(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(w,null,L,d,_,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(w,null,L,p,_,null)}function b(R,w,L,y){let E=null;const I=L.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(I!==void 0)E=I;else if(E=L.isPointLight===!0?c:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const W=E.uuid,H=w.uuid;let J=l[W];J===void 0&&(J={},l[W]=J);let ee=J[H];ee===void 0&&(ee=E.clone(),J[H]=ee,w.addEventListener("dispose",C)),E=ee}if(E.visible=w.visible,E.wireframe=w.wireframe,y===hi?E.side=w.shadowSide!==null?w.shadowSide:w.side:E.side=w.shadowSide!==null?w.shadowSide:h[w.side],E.alphaMap=w.alphaMap,E.alphaTest=w.alphaTest,E.map=w.map,E.clipShadows=w.clipShadows,E.clippingPlanes=w.clippingPlanes,E.clipIntersection=w.clipIntersection,E.displacementMap=w.displacementMap,E.displacementScale=w.displacementScale,E.displacementBias=w.displacementBias,E.wireframeLinewidth=w.wireframeLinewidth,E.linewidth=w.linewidth,L.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const W=i.properties.get(E);W.light=L}return E}function S(R,w,L,y,E){if(R.visible===!1)return;if(R.layers.test(w.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&E===hi)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,R.matrixWorld);const H=e.update(R),J=R.material;if(Array.isArray(J)){const ee=H.groups;for(let K=0,ie=ee.length;K<ie;K++){const z=ee[K],he=J[z.materialIndex];if(he&&he.visible){const _e=b(R,he,y,E);R.onBeforeShadow(i,R,w,L,H,_e,z),i.renderBufferDirect(L,null,H,_e,R,z),R.onAfterShadow(i,R,w,L,H,_e,z)}}}else if(J.visible){const ee=b(R,J,y,E);R.onBeforeShadow(i,R,w,L,H,ee,null),i.renderBufferDirect(L,null,H,ee,R,null),R.onAfterShadow(i,R,w,L,H,ee,null)}}const W=R.children;for(let H=0,J=W.length;H<J;H++)S(W[H],w,L,y,E)}function C(R){R.target.removeEventListener("dispose",C);for(const L in l){const y=l[L],E=R.target.uuid;E in y&&(y[E].dispose(),delete y[E])}}}const YM={[pl]:ml,[gl]:xl,[_l]:El,[pr]:vl,[ml]:pl,[xl]:gl,[El]:_l,[vl]:pr};function KM(i,e){function t(){let P=!1;const le=new rt;let V=null;const Z=new rt(0,0,0,0);return{setMask:function(me){V!==me&&!P&&(i.colorMask(me,me,me,me),V=me)},setLocked:function(me){P=me},setClear:function(me,pe,ke,Tt,Vt){Vt===!0&&(me*=Tt,pe*=Tt,ke*=Tt),le.set(me,pe,ke,Tt),Z.equals(le)===!1&&(i.clearColor(me,pe,ke,Tt),Z.copy(le))},reset:function(){P=!1,V=null,Z.set(-1,0,0,0)}}}function n(){let P=!1,le=!1,V=null,Z=null,me=null;return{setReversed:function(pe){if(le!==pe){const ke=e.get("EXT_clip_control");le?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT);const Tt=me;me=null,this.setClear(Tt)}le=pe},getReversed:function(){return le},setTest:function(pe){pe?de(i.DEPTH_TEST):Ie(i.DEPTH_TEST)},setMask:function(pe){V!==pe&&!P&&(i.depthMask(pe),V=pe)},setFunc:function(pe){if(le&&(pe=YM[pe]),Z!==pe){switch(pe){case pl:i.depthFunc(i.NEVER);break;case ml:i.depthFunc(i.ALWAYS);break;case gl:i.depthFunc(i.LESS);break;case pr:i.depthFunc(i.LEQUAL);break;case _l:i.depthFunc(i.EQUAL);break;case vl:i.depthFunc(i.GEQUAL);break;case xl:i.depthFunc(i.GREATER);break;case El:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Z=pe}},setLocked:function(pe){P=pe},setClear:function(pe){me!==pe&&(le&&(pe=1-pe),i.clearDepth(pe),me=pe)},reset:function(){P=!1,V=null,Z=null,me=null,le=!1}}}function s(){let P=!1,le=null,V=null,Z=null,me=null,pe=null,ke=null,Tt=null,Vt=null;return{setTest:function(ct){P||(ct?de(i.STENCIL_TEST):Ie(i.STENCIL_TEST))},setMask:function(ct){le!==ct&&!P&&(i.stencilMask(ct),le=ct)},setFunc:function(ct,Cn,si){(V!==ct||Z!==Cn||me!==si)&&(i.stencilFunc(ct,Cn,si),V=ct,Z=Cn,me=si)},setOp:function(ct,Cn,si){(pe!==ct||ke!==Cn||Tt!==si)&&(i.stencilOp(ct,Cn,si),pe=ct,ke=Cn,Tt=si)},setLocked:function(ct){P=ct},setClear:function(ct){Vt!==ct&&(i.clearStencil(ct),Vt=ct)},reset:function(){P=!1,le=null,V=null,Z=null,me=null,pe=null,ke=null,Tt=null,Vt=null}}}const r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let u={},h={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,T=null,b=null,S=null,C=null,R=null,w=new Ne(0,0,0),L=0,y=!1,E=null,I=null,W=null,H=null,J=null;const ee=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,ie=0;const z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(z)[1]),K=ie>=1):z.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),K=ie>=2);let he=null,_e={};const Te=i.getParameter(i.SCISSOR_BOX),Xe=i.getParameter(i.VIEWPORT),pt=new rt().fromArray(Te),$=new rt().fromArray(Xe);function ae(P,le,V,Z){const me=new Uint8Array(4),pe=i.createTexture();i.bindTexture(P,pe),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ke=0;ke<V;ke++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(le,0,i.RGBA,1,1,Z,0,i.RGBA,i.UNSIGNED_BYTE,me):i.texImage2D(le+ke,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,me);return pe}const Se={};Se[i.TEXTURE_2D]=ae(i.TEXTURE_2D,i.TEXTURE_2D,1),Se[i.TEXTURE_CUBE_MAP]=ae(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[i.TEXTURE_2D_ARRAY]=ae(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Se[i.TEXTURE_3D]=ae(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),de(i.DEPTH_TEST),o.setFunc(pr),je(!1),Ze(ch),de(i.CULL_FACE),N(Gi);function de(P){u[P]!==!0&&(i.enable(P),u[P]=!0)}function Ie(P){u[P]!==!1&&(i.disable(P),u[P]=!1)}function Be(P,le){return h[P]!==le?(i.bindFramebuffer(P,le),h[P]=le,P===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=le),P===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=le),!0):!1}function qe(P,le){let V=p,Z=!1;if(P){V=d.get(le),V===void 0&&(V=[],d.set(le,V));const me=P.textures;if(V.length!==me.length||V[0]!==i.COLOR_ATTACHMENT0){for(let pe=0,ke=me.length;pe<ke;pe++)V[pe]=i.COLOR_ATTACHMENT0+pe;V.length=me.length,Z=!0}}else V[0]!==i.BACK&&(V[0]=i.BACK,Z=!0);Z&&i.drawBuffers(V)}function St(P){return g!==P?(i.useProgram(P),g=P,!0):!1}const et={[cs]:i.FUNC_ADD,[cg]:i.FUNC_SUBTRACT,[lg]:i.FUNC_REVERSE_SUBTRACT};et[ug]=i.MIN,et[hg]=i.MAX;const At={[dg]:i.ZERO,[fg]:i.ONE,[pg]:i.SRC_COLOR,[dl]:i.SRC_ALPHA,[Eg]:i.SRC_ALPHA_SATURATE,[vg]:i.DST_COLOR,[gg]:i.DST_ALPHA,[mg]:i.ONE_MINUS_SRC_COLOR,[fl]:i.ONE_MINUS_SRC_ALPHA,[xg]:i.ONE_MINUS_DST_COLOR,[_g]:i.ONE_MINUS_DST_ALPHA,[Mg]:i.CONSTANT_COLOR,[Sg]:i.ONE_MINUS_CONSTANT_COLOR,[yg]:i.CONSTANT_ALPHA,[Tg]:i.ONE_MINUS_CONSTANT_ALPHA};function N(P,le,V,Z,me,pe,ke,Tt,Vt,ct){if(P===Gi){_===!0&&(Ie(i.BLEND),_=!1);return}if(_===!1&&(de(i.BLEND),_=!0),P!==ag){if(P!==m||ct!==y){if((f!==cs||S!==cs)&&(i.blendEquation(i.FUNC_ADD),f=cs,S=cs),ct)switch(P){case Ws:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case hl:i.blendFunc(i.ONE,i.ONE);break;case lh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case uh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Ws:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case hl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case lh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case uh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}T=null,b=null,C=null,R=null,w.set(0,0,0),L=0,m=P,y=ct}return}me=me||le,pe=pe||V,ke=ke||Z,(le!==f||me!==S)&&(i.blendEquationSeparate(et[le],et[me]),f=le,S=me),(V!==T||Z!==b||pe!==C||ke!==R)&&(i.blendFuncSeparate(At[V],At[Z],At[pe],At[ke]),T=V,b=Z,C=pe,R=ke),(Tt.equals(w)===!1||Vt!==L)&&(i.blendColor(Tt.r,Tt.g,Tt.b,Vt),w.copy(Tt),L=Vt),m=P,y=!1}function vn(P,le){P.side===Jn?Ie(i.CULL_FACE):de(i.CULL_FACE);let V=P.side===cn;le&&(V=!V),je(V),P.blending===Ws&&P.transparent===!1?N(Gi):N(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),o.setFunc(P.depthFunc),o.setTest(P.depthTest),o.setMask(P.depthWrite),r.setMask(P.colorWrite);const Z=P.stencilWrite;a.setTest(Z),Z&&(a.setMask(P.stencilWriteMask),a.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),a.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),_t(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?de(i.SAMPLE_ALPHA_TO_COVERAGE):Ie(i.SAMPLE_ALPHA_TO_COVERAGE)}function je(P){E!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),E=P)}function Ze(P){P!==rg?(de(i.CULL_FACE),P!==I&&(P===ch?i.cullFace(i.BACK):P===og?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ie(i.CULL_FACE),I=P}function be(P){P!==W&&(K&&i.lineWidth(P),W=P)}function _t(P,le,V){P?(de(i.POLYGON_OFFSET_FILL),(H!==le||J!==V)&&(i.polygonOffset(le,V),H=le,J=V)):Ie(i.POLYGON_OFFSET_FILL)}function Ae(P){P?de(i.SCISSOR_TEST):Ie(i.SCISSOR_TEST)}function A(P){P===void 0&&(P=i.TEXTURE0+ee-1),he!==P&&(i.activeTexture(P),he=P)}function x(P,le,V){V===void 0&&(he===null?V=i.TEXTURE0+ee-1:V=he);let Z=_e[V];Z===void 0&&(Z={type:void 0,texture:void 0},_e[V]=Z),(Z.type!==P||Z.texture!==le)&&(he!==V&&(i.activeTexture(V),he=V),i.bindTexture(P,le||Se[P]),Z.type=P,Z.texture=le)}function F(){const P=_e[he];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function j(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function te(){try{i.compressedTexImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function q(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ye(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function fe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ve(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function tt(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function oe(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function xe(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Le(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Pe(P){pt.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),pt.copy(P))}function Ee(P){$.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),$.copy(P))}function Je(P,le){let V=l.get(le);V===void 0&&(V=new WeakMap,l.set(le,V));let Z=V.get(P);Z===void 0&&(Z=i.getUniformBlockIndex(le,P.name),V.set(P,Z))}function ze(P,le){const Z=l.get(le).get(P);c.get(le)!==Z&&(i.uniformBlockBinding(le,Z,P.__bindingPointIndex),c.set(le,Z))}function mt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},he=null,_e={},h={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,T=null,b=null,S=null,C=null,R=null,w=new Ne(0,0,0),L=0,y=!1,E=null,I=null,W=null,H=null,J=null,pt.set(0,0,i.canvas.width,i.canvas.height),$.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:de,disable:Ie,bindFramebuffer:Be,drawBuffers:qe,useProgram:St,setBlending:N,setMaterial:vn,setFlipSided:je,setCullFace:Ze,setLineWidth:be,setPolygonOffset:_t,setScissorTest:Ae,activeTexture:A,bindTexture:x,unbindTexture:F,compressedTexImage2D:j,compressedTexImage3D:te,texImage2D:xe,texImage3D:Le,updateUBOMapping:Je,uniformBlockBinding:ze,texStorage2D:tt,texStorage3D:oe,texSubImage2D:q,texSubImage3D:ye,compressedTexSubImage2D:fe,compressedTexSubImage3D:ve,scissor:Pe,viewport:Ee,reset:mt}}function jM(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ke,u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,x){return p?new OffscreenCanvas(A,x):io("canvas")}function _(A,x,F){let j=1;const te=Ae(A);if((te.width>F||te.height>F)&&(j=F/Math.max(te.width,te.height)),j<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const q=Math.floor(j*te.width),ye=Math.floor(j*te.height);h===void 0&&(h=g(q,ye));const fe=x?g(q,ye):h;return fe.width=q,fe.height=ye,fe.getContext("2d").drawImage(A,0,0,q,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+q+"x"+ye+")."),fe}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),A;return A}function m(A){return A.generateMipmaps}function f(A){i.generateMipmap(A)}function T(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(A,x,F,j,te=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let q=x;if(x===i.RED&&(F===i.FLOAT&&(q=i.R32F),F===i.HALF_FLOAT&&(q=i.R16F),F===i.UNSIGNED_BYTE&&(q=i.R8)),x===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.R8UI),F===i.UNSIGNED_SHORT&&(q=i.R16UI),F===i.UNSIGNED_INT&&(q=i.R32UI),F===i.BYTE&&(q=i.R8I),F===i.SHORT&&(q=i.R16I),F===i.INT&&(q=i.R32I)),x===i.RG&&(F===i.FLOAT&&(q=i.RG32F),F===i.HALF_FLOAT&&(q=i.RG16F),F===i.UNSIGNED_BYTE&&(q=i.RG8)),x===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.RG8UI),F===i.UNSIGNED_SHORT&&(q=i.RG16UI),F===i.UNSIGNED_INT&&(q=i.RG32UI),F===i.BYTE&&(q=i.RG8I),F===i.SHORT&&(q=i.RG16I),F===i.INT&&(q=i.RG32I)),x===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.RGB8UI),F===i.UNSIGNED_SHORT&&(q=i.RGB16UI),F===i.UNSIGNED_INT&&(q=i.RGB32UI),F===i.BYTE&&(q=i.RGB8I),F===i.SHORT&&(q=i.RGB16I),F===i.INT&&(q=i.RGB32I)),x===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),F===i.UNSIGNED_INT&&(q=i.RGBA32UI),F===i.BYTE&&(q=i.RGBA8I),F===i.SHORT&&(q=i.RGBA16I),F===i.INT&&(q=i.RGBA32I)),x===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),x===i.RGBA){const ye=te?Wa:Qe.getTransfer(j);F===i.FLOAT&&(q=i.RGBA32F),F===i.HALF_FLOAT&&(q=i.RGBA16F),F===i.UNSIGNED_BYTE&&(q=ye===ht?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function S(A,x){let F;return A?x===null||x===vs||x===vr?F=i.DEPTH24_STENCIL8:x===Fn?F=i.DEPTH32F_STENCIL8:x===eo&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===vs||x===vr?F=i.DEPTH_COMPONENT24:x===Fn?F=i.DEPTH_COMPONENT32F:x===eo&&(F=i.DEPTH_COMPONENT16),F}function C(A,x){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==en&&A.minFilter!==gn?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function R(A){const x=A.target;x.removeEventListener("dispose",R),L(x),x.isVideoTexture&&u.delete(x)}function w(A){const x=A.target;x.removeEventListener("dispose",w),E(x)}function L(A){const x=n.get(A);if(x.__webglInit===void 0)return;const F=A.source,j=d.get(F);if(j){const te=j[x.__cacheKey];te.usedTimes--,te.usedTimes===0&&y(A),Object.keys(j).length===0&&d.delete(F)}n.remove(A)}function y(A){const x=n.get(A);i.deleteTexture(x.__webglTexture);const F=A.source,j=d.get(F);delete j[x.__cacheKey],o.memory.textures--}function E(A){const x=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(x.__webglFramebuffer[j]))for(let te=0;te<x.__webglFramebuffer[j].length;te++)i.deleteFramebuffer(x.__webglFramebuffer[j][te]);else i.deleteFramebuffer(x.__webglFramebuffer[j]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[j])}else{if(Array.isArray(x.__webglFramebuffer))for(let j=0;j<x.__webglFramebuffer.length;j++)i.deleteFramebuffer(x.__webglFramebuffer[j]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let j=0;j<x.__webglColorRenderbuffer.length;j++)x.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[j]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const F=A.textures;for(let j=0,te=F.length;j<te;j++){const q=n.get(F[j]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),o.memory.textures--),n.remove(F[j])}n.remove(A)}let I=0;function W(){I=0}function H(){const A=I;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),I+=1,A}function J(A){const x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function ee(A,x){const F=n.get(A);if(A.isVideoTexture&&be(A),A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){const j=A.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(F,A,x);return}}t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+x)}function K(A,x){const F=n.get(A);if(A.version>0&&F.__version!==A.version){$(F,A,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+x)}function ie(A,x){const F=n.get(A);if(A.version>0&&F.__version!==A.version){$(F,A,x);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+x)}function z(A,x){const F=n.get(A);if(A.version>0&&F.__version!==A.version){ae(F,A,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+x)}const he={[_r]:i.REPEAT,[Vi]:i.CLAMP_TO_EDGE,[Ga]:i.MIRRORED_REPEAT},_e={[en]:i.NEAREST,[Mf]:i.NEAREST_MIPMAP_NEAREST,[Wr]:i.NEAREST_MIPMAP_LINEAR,[gn]:i.LINEAR,[Oa]:i.LINEAR_MIPMAP_NEAREST,[xi]:i.LINEAR_MIPMAP_LINEAR},Te={[kg]:i.NEVER,[Xg]:i.ALWAYS,[Hg]:i.LESS,[Pf]:i.LEQUAL,[Vg]:i.EQUAL,[Wg]:i.GEQUAL,[zg]:i.GREATER,[Gg]:i.NOTEQUAL};function Xe(A,x){if(x.type===Fn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===gn||x.magFilter===Oa||x.magFilter===Wr||x.magFilter===xi||x.minFilter===gn||x.minFilter===Oa||x.minFilter===Wr||x.minFilter===xi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,he[x.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,he[x.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,he[x.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,_e[x.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,_e[x.minFilter]),x.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Te[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===en||x.minFilter!==Wr&&x.minFilter!==xi||x.type===Fn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function pt(A,x){let F=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",R));const j=x.source;let te=d.get(j);te===void 0&&(te={},d.set(j,te));const q=J(x);if(q!==A.__cacheKey){te[q]===void 0&&(te[q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,F=!0),te[q].usedTimes++;const ye=te[A.__cacheKey];ye!==void 0&&(te[A.__cacheKey].usedTimes--,ye.usedTimes===0&&y(x)),A.__cacheKey=q,A.__webglTexture=te[q].texture}return F}function $(A,x,F){let j=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(j=i.TEXTURE_3D);const te=pt(A,x),q=x.source;t.bindTexture(j,A.__webglTexture,i.TEXTURE0+F);const ye=n.get(q);if(q.version!==ye.__version||te===!0){t.activeTexture(i.TEXTURE0+F);const fe=Qe.getPrimaries(Qe.workingColorSpace),ve=x.colorSpace===Oi?null:Qe.getPrimaries(x.colorSpace),tt=x.colorSpace===Oi||fe===ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let oe=_(x.image,!1,s.maxTextureSize);oe=_t(x,oe);const xe=r.convert(x.format,x.colorSpace),Le=r.convert(x.type);let Pe=b(x.internalFormat,xe,Le,x.colorSpace,x.isVideoTexture);Xe(j,x);let Ee;const Je=x.mipmaps,ze=x.isVideoTexture!==!0,mt=ye.__version===void 0||te===!0,P=q.dataReady,le=C(x,oe);if(x.isDepthTexture)Pe=S(x.format===xr,x.type),mt&&(ze?t.texStorage2D(i.TEXTURE_2D,1,Pe,oe.width,oe.height):t.texImage2D(i.TEXTURE_2D,0,Pe,oe.width,oe.height,0,xe,Le,null));else if(x.isDataTexture)if(Je.length>0){ze&&mt&&t.texStorage2D(i.TEXTURE_2D,le,Pe,Je[0].width,Je[0].height);for(let V=0,Z=Je.length;V<Z;V++)Ee=Je[V],ze?P&&t.texSubImage2D(i.TEXTURE_2D,V,0,0,Ee.width,Ee.height,xe,Le,Ee.data):t.texImage2D(i.TEXTURE_2D,V,Pe,Ee.width,Ee.height,0,xe,Le,Ee.data);x.generateMipmaps=!1}else ze?(mt&&t.texStorage2D(i.TEXTURE_2D,le,Pe,oe.width,oe.height),P&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,oe.width,oe.height,xe,Le,oe.data)):t.texImage2D(i.TEXTURE_2D,0,Pe,oe.width,oe.height,0,xe,Le,oe.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){ze&&mt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,le,Pe,Je[0].width,Je[0].height,oe.depth);for(let V=0,Z=Je.length;V<Z;V++)if(Ee=Je[V],x.format!==wn)if(xe!==null)if(ze){if(P)if(x.layerUpdates.size>0){const me=Qh(Ee.width,Ee.height,x.format,x.type);for(const pe of x.layerUpdates){const ke=Ee.data.subarray(pe*me/Ee.data.BYTES_PER_ELEMENT,(pe+1)*me/Ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,pe,Ee.width,Ee.height,1,xe,ke)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,Ee.width,Ee.height,oe.depth,xe,Ee.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,V,Pe,Ee.width,Ee.height,oe.depth,0,Ee.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?P&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,Ee.width,Ee.height,oe.depth,xe,Le,Ee.data):t.texImage3D(i.TEXTURE_2D_ARRAY,V,Pe,Ee.width,Ee.height,oe.depth,0,xe,Le,Ee.data)}else{ze&&mt&&t.texStorage2D(i.TEXTURE_2D,le,Pe,Je[0].width,Je[0].height);for(let V=0,Z=Je.length;V<Z;V++)Ee=Je[V],x.format!==wn?xe!==null?ze?P&&t.compressedTexSubImage2D(i.TEXTURE_2D,V,0,0,Ee.width,Ee.height,xe,Ee.data):t.compressedTexImage2D(i.TEXTURE_2D,V,Pe,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?P&&t.texSubImage2D(i.TEXTURE_2D,V,0,0,Ee.width,Ee.height,xe,Le,Ee.data):t.texImage2D(i.TEXTURE_2D,V,Pe,Ee.width,Ee.height,0,xe,Le,Ee.data)}else if(x.isDataArrayTexture)if(ze){if(mt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,le,Pe,oe.width,oe.height,oe.depth),P)if(x.layerUpdates.size>0){const V=Qh(oe.width,oe.height,x.format,x.type);for(const Z of x.layerUpdates){const me=oe.data.subarray(Z*V/oe.data.BYTES_PER_ELEMENT,(Z+1)*V/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,oe.width,oe.height,1,xe,Le,me)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,xe,Le,oe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Pe,oe.width,oe.height,oe.depth,0,xe,Le,oe.data);else if(x.isData3DTexture)ze?(mt&&t.texStorage3D(i.TEXTURE_3D,le,Pe,oe.width,oe.height,oe.depth),P&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,xe,Le,oe.data)):t.texImage3D(i.TEXTURE_3D,0,Pe,oe.width,oe.height,oe.depth,0,xe,Le,oe.data);else if(x.isFramebufferTexture){if(mt)if(ze)t.texStorage2D(i.TEXTURE_2D,le,Pe,oe.width,oe.height);else{let V=oe.width,Z=oe.height;for(let me=0;me<le;me++)t.texImage2D(i.TEXTURE_2D,me,Pe,V,Z,0,xe,Le,null),V>>=1,Z>>=1}}else if(Je.length>0){if(ze&&mt){const V=Ae(Je[0]);t.texStorage2D(i.TEXTURE_2D,le,Pe,V.width,V.height)}for(let V=0,Z=Je.length;V<Z;V++)Ee=Je[V],ze?P&&t.texSubImage2D(i.TEXTURE_2D,V,0,0,xe,Le,Ee):t.texImage2D(i.TEXTURE_2D,V,Pe,xe,Le,Ee);x.generateMipmaps=!1}else if(ze){if(mt){const V=Ae(oe);t.texStorage2D(i.TEXTURE_2D,le,Pe,V.width,V.height)}P&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,xe,Le,oe)}else t.texImage2D(i.TEXTURE_2D,0,Pe,xe,Le,oe);m(x)&&f(j),ye.__version=q.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function ae(A,x,F){if(x.image.length!==6)return;const j=pt(A,x),te=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+F);const q=n.get(te);if(te.version!==q.__version||j===!0){t.activeTexture(i.TEXTURE0+F);const ye=Qe.getPrimaries(Qe.workingColorSpace),fe=x.colorSpace===Oi?null:Qe.getPrimaries(x.colorSpace),ve=x.colorSpace===Oi||ye===fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const tt=x.isCompressedTexture||x.image[0].isCompressedTexture,oe=x.image[0]&&x.image[0].isDataTexture,xe=[];for(let Z=0;Z<6;Z++)!tt&&!oe?xe[Z]=_(x.image[Z],!0,s.maxCubemapSize):xe[Z]=oe?x.image[Z].image:x.image[Z],xe[Z]=_t(x,xe[Z]);const Le=xe[0],Pe=r.convert(x.format,x.colorSpace),Ee=r.convert(x.type),Je=b(x.internalFormat,Pe,Ee,x.colorSpace),ze=x.isVideoTexture!==!0,mt=q.__version===void 0||j===!0,P=te.dataReady;let le=C(x,Le);Xe(i.TEXTURE_CUBE_MAP,x);let V;if(tt){ze&&mt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,le,Je,Le.width,Le.height);for(let Z=0;Z<6;Z++){V=xe[Z].mipmaps;for(let me=0;me<V.length;me++){const pe=V[me];x.format!==wn?Pe!==null?ze?P&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me,0,0,pe.width,pe.height,Pe,pe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me,Je,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me,0,0,pe.width,pe.height,Pe,Ee,pe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me,Je,pe.width,pe.height,0,Pe,Ee,pe.data)}}}else{if(V=x.mipmaps,ze&&mt){V.length>0&&le++;const Z=Ae(xe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,le,Je,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(oe){ze?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,xe[Z].width,xe[Z].height,Pe,Ee,xe[Z].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Je,xe[Z].width,xe[Z].height,0,Pe,Ee,xe[Z].data);for(let me=0;me<V.length;me++){const ke=V[me].image[Z].image;ze?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me+1,0,0,ke.width,ke.height,Pe,Ee,ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me+1,Je,ke.width,ke.height,0,Pe,Ee,ke.data)}}else{ze?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Pe,Ee,xe[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Je,Pe,Ee,xe[Z]);for(let me=0;me<V.length;me++){const pe=V[me];ze?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me+1,0,0,Pe,Ee,pe.image[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me+1,Je,Pe,Ee,pe.image[Z])}}}m(x)&&f(i.TEXTURE_CUBE_MAP),q.__version=te.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function Se(A,x,F,j,te,q){const ye=r.convert(F.format,F.colorSpace),fe=r.convert(F.type),ve=b(F.internalFormat,ye,fe,F.colorSpace),tt=n.get(x),oe=n.get(F);if(oe.__renderTarget=x,!tt.__hasExternalTextures){const xe=Math.max(1,x.width>>q),Le=Math.max(1,x.height>>q);te===i.TEXTURE_3D||te===i.TEXTURE_2D_ARRAY?t.texImage3D(te,q,ve,xe,Le,x.depth,0,ye,fe,null):t.texImage2D(te,q,ve,xe,Le,0,ye,fe,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),Ze(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,te,oe.__webglTexture,0,je(x)):(te===i.TEXTURE_2D||te>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,te,oe.__webglTexture,q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function de(A,x,F){if(i.bindRenderbuffer(i.RENDERBUFFER,A),x.depthBuffer){const j=x.depthTexture,te=j&&j.isDepthTexture?j.type:null,q=S(x.stencilBuffer,te),ye=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=je(x);Ze(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,fe,q,x.width,x.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,fe,q,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,q,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ye,i.RENDERBUFFER,A)}else{const j=x.textures;for(let te=0;te<j.length;te++){const q=j[te],ye=r.convert(q.format,q.colorSpace),fe=r.convert(q.type),ve=b(q.internalFormat,ye,fe,q.colorSpace),tt=je(x);F&&Ze(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,tt,ve,x.width,x.height):Ze(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,tt,ve,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ve,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ie(A,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(x.depthTexture);j.__renderTarget=x,(!j.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),ee(x.depthTexture,0);const te=j.__webglTexture,q=je(x);if(x.depthTexture.format===Xs)Ze(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0);else if(x.depthTexture.format===xr)Ze(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Be(A){const x=n.get(A),F=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){const j=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),j){const te=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,j.removeEventListener("dispose",te)};j.addEventListener("dispose",te),x.__depthDisposeCallback=te}x.__boundDepthTexture=j}if(A.depthTexture&&!x.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Ie(x.__webglFramebuffer,A)}else if(F){x.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[j]),x.__webglDepthbuffer[j]===void 0)x.__webglDepthbuffer[j]=i.createRenderbuffer(),de(x.__webglDepthbuffer[j],A,!1);else{const te=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=x.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,q)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),de(x.__webglDepthbuffer,A,!1);else{const j=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,te),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,te)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function qe(A,x,F){const j=n.get(A);x!==void 0&&Se(j.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Be(A)}function St(A){const x=A.texture,F=n.get(A),j=n.get(x);A.addEventListener("dispose",w);const te=A.textures,q=A.isWebGLCubeRenderTarget===!0,ye=te.length>1;if(ye||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=x.version,o.memory.textures++),q){F.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer[fe]=[];for(let ve=0;ve<x.mipmaps.length;ve++)F.__webglFramebuffer[fe][ve]=i.createFramebuffer()}else F.__webglFramebuffer[fe]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer=[];for(let fe=0;fe<x.mipmaps.length;fe++)F.__webglFramebuffer[fe]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(ye)for(let fe=0,ve=te.length;fe<ve;fe++){const tt=n.get(te[fe]);tt.__webglTexture===void 0&&(tt.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&Ze(A)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let fe=0;fe<te.length;fe++){const ve=te[fe];F.__webglColorRenderbuffer[fe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[fe]);const tt=r.convert(ve.format,ve.colorSpace),oe=r.convert(ve.type),xe=b(ve.internalFormat,tt,oe,ve.colorSpace,A.isXRRenderTarget===!0),Le=je(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Le,xe,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,F.__webglColorRenderbuffer[fe])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),de(F.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),Xe(i.TEXTURE_CUBE_MAP,x);for(let fe=0;fe<6;fe++)if(x.mipmaps&&x.mipmaps.length>0)for(let ve=0;ve<x.mipmaps.length;ve++)Se(F.__webglFramebuffer[fe][ve],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ve);else Se(F.__webglFramebuffer[fe],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(x)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let fe=0,ve=te.length;fe<ve;fe++){const tt=te[fe],oe=n.get(tt);t.bindTexture(i.TEXTURE_2D,oe.__webglTexture),Xe(i.TEXTURE_2D,tt),Se(F.__webglFramebuffer,A,tt,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,0),m(tt)&&f(i.TEXTURE_2D)}t.unbindTexture()}else{let fe=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(fe=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(fe,j.__webglTexture),Xe(fe,x),x.mipmaps&&x.mipmaps.length>0)for(let ve=0;ve<x.mipmaps.length;ve++)Se(F.__webglFramebuffer[ve],A,x,i.COLOR_ATTACHMENT0,fe,ve);else Se(F.__webglFramebuffer,A,x,i.COLOR_ATTACHMENT0,fe,0);m(x)&&f(fe),t.unbindTexture()}A.depthBuffer&&Be(A)}function et(A){const x=A.textures;for(let F=0,j=x.length;F<j;F++){const te=x[F];if(m(te)){const q=T(A),ye=n.get(te).__webglTexture;t.bindTexture(q,ye),f(q),t.unbindTexture()}}}const At=[],N=[];function vn(A){if(A.samples>0){if(Ze(A)===!1){const x=A.textures,F=A.width,j=A.height;let te=i.COLOR_BUFFER_BIT;const q=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ye=n.get(A),fe=x.length>1;if(fe)for(let ve=0;ve<x.length;ve++)t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let ve=0;ve<x.length;ve++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(te|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(te|=i.STENCIL_BUFFER_BIT)),fe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ye.__webglColorRenderbuffer[ve]);const tt=n.get(x[ve]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,tt,0)}i.blitFramebuffer(0,0,F,j,0,0,F,j,te,i.NEAREST),c===!0&&(At.length=0,N.length=0,At.push(i.COLOR_ATTACHMENT0+ve),A.depthBuffer&&A.resolveDepthBuffer===!1&&(At.push(q),N.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,N)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,At))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),fe)for(let ve=0;ve<x.length;ve++){t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,ye.__webglColorRenderbuffer[ve]);const tt=n.get(x[ve]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,tt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const x=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function je(A){return Math.min(s.maxSamples,A.samples)}function Ze(A){const x=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function be(A){const x=o.render.frame;u.get(A)!==x&&(u.set(A,x),A.update())}function _t(A,x){const F=A.colorSpace,j=A.format,te=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||F!==tn&&F!==Oi&&(Qe.getTransfer(F)===ht?(j!==wn||te!==Ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),x}function Ae(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=W,this.setTexture2D=ee,this.setTexture2DArray=K,this.setTexture3D=ie,this.setTextureCube=z,this.rebindTextures=qe,this.setupRenderTarget=St,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=vn,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=Ze}function ZM(i,e){function t(n,s=Oi){let r;const o=Qe.getTransfer(s);if(n===Ai)return i.UNSIGNED_BYTE;if(n===du)return i.UNSIGNED_SHORT_4_4_4_4;if(n===fu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Tf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Sf)return i.BYTE;if(n===yf)return i.SHORT;if(n===eo)return i.UNSIGNED_SHORT;if(n===hu)return i.INT;if(n===vs)return i.UNSIGNED_INT;if(n===Fn)return i.FLOAT;if(n===Yo)return i.HALF_FLOAT;if(n===bf)return i.ALPHA;if(n===Af)return i.RGB;if(n===wn)return i.RGBA;if(n===wf)return i.LUMINANCE;if(n===Rf)return i.LUMINANCE_ALPHA;if(n===Xs)return i.DEPTH_COMPONENT;if(n===xr)return i.DEPTH_STENCIL;if(n===pu)return i.RED;if(n===mu)return i.RED_INTEGER;if(n===Cf)return i.RG;if(n===gu)return i.RG_INTEGER;if(n===_u)return i.RGBA_INTEGER;if(n===Fa||n===Ba||n===ka||n===Ha)if(o===ht)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Fa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Fa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ba)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ka)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ha)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===yl||n===Tl||n===bl||n===Al)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===yl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Tl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===bl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Al)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===wl||n===Rl||n===Cl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===wl||n===Rl)return o===ht?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Cl)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ll||n===Il||n===Nl||n===Pl||n===Dl||n===Ul||n===Ol||n===Fl||n===Bl||n===kl||n===Hl||n===Vl||n===zl||n===Gl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ll)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Il)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Nl)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Pl)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Dl)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ul)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ol)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Fl)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Bl)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===kl)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Hl)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Vl)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===zl)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Gl)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Va||n===Wl||n===Xl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Va)return o===ht?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Wl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Lf||n===ql||n===$l||n===Yl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Va)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ql)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===$l)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Yl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===vr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const JM={type:"move"};class Xc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),f=this._getHandJoint(l,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(JM)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Mi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const QM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,eS=`
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

}`;class tS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Ut,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new $i({vertexShader:QM,fragmentShader:eS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Qt(new jo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class nS extends br{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,p=null,g=null;const _=new tS,m=t.getContextAttributes();let f=null,T=null;const b=[],S=[],C=new Ke;let R=null;const w=new Jt;w.viewport=new rt;const L=new Jt;L.viewport=new rt;const y=[w,L],E=new p0;let I=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ae=b[$];return ae===void 0&&(ae=new Xc,b[$]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function($){let ae=b[$];return ae===void 0&&(ae=new Xc,b[$]=ae),ae.getGripSpace()},this.getHand=function($){let ae=b[$];return ae===void 0&&(ae=new Xc,b[$]=ae),ae.getHandSpace()};function H($){const ae=S.indexOf($.inputSource);if(ae===-1)return;const Se=b[ae];Se!==void 0&&(Se.update($.inputSource,$.frame,l||o),Se.dispatchEvent({type:$.type,data:$.inputSource}))}function J(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",ee);for(let $=0;$<b.length;$++){const ae=S[$];ae!==null&&(S[$]=null,b[$].disconnect(ae))}I=null,W=null,_.reset(),e.setRenderTarget(f),p=null,d=null,h=null,s=null,T=null,pt.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",J),s.addEventListener("inputsourceschange",ee),m.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(C),s.renderState.layers===void 0){const ae={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ae),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),T=new xs(p.framebufferWidth,p.framebufferHeight,{format:wn,type:Ai,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ae=null,Se=null,de=null;m.depth&&(de=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=m.stencil?xr:Xs,Se=m.stencil?vr:vs);const Ie={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(Ie),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),T=new xs(d.textureWidth,d.textureHeight,{format:wn,type:Ai,depthTexture:new $f(d.textureWidth,d.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),pt.setContext(s),pt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ee($){for(let ae=0;ae<$.removed.length;ae++){const Se=$.removed[ae],de=S.indexOf(Se);de>=0&&(S[de]=null,b[de].disconnect(Se))}for(let ae=0;ae<$.added.length;ae++){const Se=$.added[ae];let de=S.indexOf(Se);if(de===-1){for(let Be=0;Be<b.length;Be++)if(Be>=S.length){S.push(Se),de=Be;break}else if(S[Be]===null){S[Be]=Se,de=Be;break}if(de===-1)break}const Ie=b[de];Ie&&Ie.connect(Se)}}const K=new D,ie=new D;function z($,ae,Se){K.setFromMatrixPosition(ae.matrixWorld),ie.setFromMatrixPosition(Se.matrixWorld);const de=K.distanceTo(ie),Ie=ae.projectionMatrix.elements,Be=Se.projectionMatrix.elements,qe=Ie[14]/(Ie[10]-1),St=Ie[14]/(Ie[10]+1),et=(Ie[9]+1)/Ie[5],At=(Ie[9]-1)/Ie[5],N=(Ie[8]-1)/Ie[0],vn=(Be[8]+1)/Be[0],je=qe*N,Ze=qe*vn,be=de/(-N+vn),_t=be*-N;if(ae.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(_t),$.translateZ(be),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ie[10]===-1)$.projectionMatrix.copy(ae.projectionMatrix),$.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const Ae=qe+be,A=St+be,x=je-_t,F=Ze+(de-_t),j=et*St/A*Ae,te=At*St/A*Ae;$.projectionMatrix.makePerspective(x,F,j,te,Ae,A),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function he($,ae){ae===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ae.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let ae=$.near,Se=$.far;_.texture!==null&&(_.depthNear>0&&(ae=_.depthNear),_.depthFar>0&&(Se=_.depthFar)),E.near=L.near=w.near=ae,E.far=L.far=w.far=Se,(I!==E.near||W!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),I=E.near,W=E.far),w.layers.mask=$.layers.mask|2,L.layers.mask=$.layers.mask|4,E.layers.mask=w.layers.mask|L.layers.mask;const de=$.parent,Ie=E.cameras;he(E,de);for(let Be=0;Be<Ie.length;Be++)he(Ie[Be],de);Ie.length===2?z(E,w,L):E.projectionMatrix.copy(w.projectionMatrix),_e($,E,de)};function _e($,ae,Se){Se===null?$.matrix.copy(ae.matrixWorld):($.matrix.copy(Se.matrixWorld),$.matrix.invert(),$.matrix.multiply(ae.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ae.projectionMatrix),$.projectionMatrixInverse.copy(ae.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Er*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function($){c=$,d!==null&&(d.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(E)};let Te=null;function Xe($,ae){if(u=ae.getViewerPose(l||o),g=ae,u!==null){const Se=u.views;p!==null&&(e.setRenderTargetFramebuffer(T,p.framebuffer),e.setRenderTarget(T));let de=!1;Se.length!==E.cameras.length&&(E.cameras.length=0,de=!0);for(let Be=0;Be<Se.length;Be++){const qe=Se[Be];let St=null;if(p!==null)St=p.getViewport(qe);else{const At=h.getViewSubImage(d,qe);St=At.viewport,Be===0&&(e.setRenderTargetTextures(T,At.colorTexture,d.ignoreDepthValues?void 0:At.depthStencilTexture),e.setRenderTarget(T))}let et=y[Be];et===void 0&&(et=new Jt,et.layers.enable(Be),et.viewport=new rt,y[Be]=et),et.matrix.fromArray(qe.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(qe.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(St.x,St.y,St.width,St.height),Be===0&&(E.matrix.copy(et.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),de===!0&&E.cameras.push(et)}const Ie=s.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")){const Be=h.getDepthInformation(Se[0]);Be&&Be.isValid&&Be.texture&&_.init(e,Be,s.renderState)}}for(let Se=0;Se<b.length;Se++){const de=S[Se],Ie=b[Se];de!==null&&Ie!==void 0&&Ie.update(de,ae,l||o)}Te&&Te($,ae),ae.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ae}),g=null}const pt=new Qf;pt.setAnimationLoop(Xe),this.setAnimationLoop=function($){Te=$},this.dispose=function(){}}}const is=new ei,iS=new Ve;function sS(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Vf(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,T,b,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),h(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,S)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,T,b):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===cn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===cn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const T=e.get(f),b=T.envMap,S=T.envMapRotation;b&&(m.envMap.value=b,is.copy(S),is.x*=-1,is.y*=-1,is.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),m.envMapRotation.value.setFromMatrix4(iS.makeRotationFromEuler(is)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,T,b){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*T,m.scale.value=b*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,T){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===cn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const T=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function rS(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,b){const S=b.program;n.uniformBlockBinding(T,S)}function l(T,b){let S=s[T.id];S===void 0&&(g(T),S=u(T),s[T.id]=S,T.addEventListener("dispose",m));const C=b.program;n.updateUBOMapping(T,C);const R=e.render.frame;r[T.id]!==R&&(d(T),r[T.id]=R)}function u(T){const b=h();T.__bindingPointIndex=b;const S=i.createBuffer(),C=T.__size,R=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,C,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,S),S}function h(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const b=s[T.id],S=T.uniforms,C=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let R=0,w=S.length;R<w;R++){const L=Array.isArray(S[R])?S[R]:[S[R]];for(let y=0,E=L.length;y<E;y++){const I=L[y];if(p(I,R,y,C)===!0){const W=I.__offset,H=Array.isArray(I.value)?I.value:[I.value];let J=0;for(let ee=0;ee<H.length;ee++){const K=H[ee],ie=_(K);typeof K=="number"||typeof K=="boolean"?(I.__data[0]=K,i.bufferSubData(i.UNIFORM_BUFFER,W+J,I.__data)):K.isMatrix3?(I.__data[0]=K.elements[0],I.__data[1]=K.elements[1],I.__data[2]=K.elements[2],I.__data[3]=0,I.__data[4]=K.elements[3],I.__data[5]=K.elements[4],I.__data[6]=K.elements[5],I.__data[7]=0,I.__data[8]=K.elements[6],I.__data[9]=K.elements[7],I.__data[10]=K.elements[8],I.__data[11]=0):(K.toArray(I.__data,J),J+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(T,b,S,C){const R=T.value,w=b+"_"+S;if(C[w]===void 0)return typeof R=="number"||typeof R=="boolean"?C[w]=R:C[w]=R.clone(),!0;{const L=C[w];if(typeof R=="number"||typeof R=="boolean"){if(L!==R)return C[w]=R,!0}else if(L.equals(R)===!1)return L.copy(R),!0}return!1}function g(T){const b=T.uniforms;let S=0;const C=16;for(let w=0,L=b.length;w<L;w++){const y=Array.isArray(b[w])?b[w]:[b[w]];for(let E=0,I=y.length;E<I;E++){const W=y[E],H=Array.isArray(W.value)?W.value:[W.value];for(let J=0,ee=H.length;J<ee;J++){const K=H[J],ie=_(K),z=S%C,he=z%ie.boundary,_e=z+he;S+=he,_e!==0&&C-_e<ie.storage&&(S+=C-_e),W.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=S,S+=ie.storage}}}const R=S%C;return R>0&&(S+=C-R),T.__size=S,T.__cache={},this}function _(T){const b={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(b.boundary=4,b.storage=4):T.isVector2?(b.boundary=8,b.storage=8):T.isVector3||T.isColor?(b.boundary=16,b.storage=12):T.isVector4?(b.boundary=16,b.storage=16):T.isMatrix3?(b.boundary=48,b.storage=48):T.isMatrix4?(b.boundary=64,b.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),b}function m(T){const b=T.target;b.removeEventListener("dispose",m);const S=o.indexOf(b.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function f(){for(const T in s)i.deleteBuffer(s[T]);o=[],s={},r={}}return{bind:c,update:l,dispose:f}}class oS{constructor(e={}){const{canvas:t=l_(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,f=null;const T=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Bt,this.toneMapping=Wi,this.toneMappingExposure=1;const S=this;let C=!1,R=0,w=0,L=null,y=-1,E=null;const I=new rt,W=new rt;let H=null;const J=new Ne(0);let ee=0,K=t.width,ie=t.height,z=1,he=null,_e=null;const Te=new rt(0,0,K,ie),Xe=new rt(0,0,K,ie);let pt=!1;const $=new Su;let ae=!1,Se=!1;const de=new Ve,Ie=new Ve,Be=new D,qe=new rt,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let et=!1;function At(){return L===null?z:1}let N=n;function vn(M,U){return t.getContext(M,U)}try{const M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${uu}`),t.addEventListener("webglcontextlost",Z,!1),t.addEventListener("webglcontextrestored",me,!1),t.addEventListener("webglcontextcreationerror",pe,!1),N===null){const U="webgl2";if(N=vn(U,M),N===null)throw vn(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let je,Ze,be,_t,Ae,A,x,F,j,te,q,ye,fe,ve,tt,oe,xe,Le,Pe,Ee,Je,ze,mt,P;function le(){je=new mE(N),je.init(),ze=new ZM(N,je),Ze=new lE(N,je,e,ze),be=new KM(N,je),Ze.reverseDepthBuffer&&d&&be.buffers.depth.setReversed(!0),_t=new vE(N),Ae=new OM,A=new jM(N,je,be,Ae,Ze,ze,_t),x=new hE(S),F=new pE(S),j=new b0(N),mt=new aE(N,j),te=new gE(N,j,_t,mt),q=new EE(N,te,j,_t),Pe=new xE(N,Ze,A),oe=new uE(Ae),ye=new UM(S,x,F,je,Ze,mt,oe),fe=new sS(S,Ae),ve=new BM,tt=new WM(je),Le=new oE(S,x,F,be,q,p,c),xe=new $M(S,q,Ze),P=new rS(N,_t,Ze,be),Ee=new cE(N,je,_t),Je=new _E(N,je,_t),_t.programs=ye.programs,S.capabilities=Ze,S.extensions=je,S.properties=Ae,S.renderLists=ve,S.shadowMap=xe,S.state=be,S.info=_t}le();const V=new nS(S,N);this.xr=V,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const M=je.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=je.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(M){M!==void 0&&(z=M,this.setSize(K,ie,!1))},this.getSize=function(M){return M.set(K,ie)},this.setSize=function(M,U,B=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=M,ie=U,t.width=Math.floor(M*z),t.height=Math.floor(U*z),B===!0&&(t.style.width=M+"px",t.style.height=U+"px"),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(K*z,ie*z).floor()},this.setDrawingBufferSize=function(M,U,B){K=M,ie=U,z=B,t.width=Math.floor(M*B),t.height=Math.floor(U*B),this.setViewport(0,0,M,U)},this.getCurrentViewport=function(M){return M.copy(I)},this.getViewport=function(M){return M.copy(Te)},this.setViewport=function(M,U,B,k){M.isVector4?Te.set(M.x,M.y,M.z,M.w):Te.set(M,U,B,k),be.viewport(I.copy(Te).multiplyScalar(z).round())},this.getScissor=function(M){return M.copy(Xe)},this.setScissor=function(M,U,B,k){M.isVector4?Xe.set(M.x,M.y,M.z,M.w):Xe.set(M,U,B,k),be.scissor(W.copy(Xe).multiplyScalar(z).round())},this.getScissorTest=function(){return pt},this.setScissorTest=function(M){be.setScissorTest(pt=M)},this.setOpaqueSort=function(M){he=M},this.setTransparentSort=function(M){_e=M},this.getClearColor=function(M){return M.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor.apply(Le,arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha.apply(Le,arguments)},this.clear=function(M=!0,U=!0,B=!0){let k=0;if(M){let O=!1;if(L!==null){const se=L.texture.format;O=se===_u||se===gu||se===mu}if(O){const se=L.texture.type,ue=se===Ai||se===vs||se===eo||se===vr||se===du||se===fu,ge=Le.getClearColor(),Me=Le.getClearAlpha(),De=ge.r,Ue=ge.g,Re=ge.b;ue?(g[0]=De,g[1]=Ue,g[2]=Re,g[3]=Me,N.clearBufferuiv(N.COLOR,0,g)):(_[0]=De,_[1]=Ue,_[2]=Re,_[3]=Me,N.clearBufferiv(N.COLOR,0,_))}else k|=N.COLOR_BUFFER_BIT}U&&(k|=N.DEPTH_BUFFER_BIT),B&&(k|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Z,!1),t.removeEventListener("webglcontextrestored",me,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),Le.dispose(),ve.dispose(),tt.dispose(),Ae.dispose(),x.dispose(),F.dispose(),q.dispose(),mt.dispose(),P.dispose(),ye.dispose(),V.dispose(),V.removeEventListener("sessionstart",Pu),V.removeEventListener("sessionend",Du),ji.stop()};function Z(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const M=_t.autoReset,U=xe.enabled,B=xe.autoUpdate,k=xe.needsUpdate,O=xe.type;le(),_t.autoReset=M,xe.enabled=U,xe.autoUpdate=B,xe.needsUpdate=k,xe.type=O}function pe(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function ke(M){const U=M.target;U.removeEventListener("dispose",ke),Tt(U)}function Tt(M){Vt(M),Ae.remove(M)}function Vt(M){const U=Ae.get(M).programs;U!==void 0&&(U.forEach(function(B){ye.releaseProgram(B)}),M.isShaderMaterial&&ye.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,B,k,O,se){U===null&&(U=St);const ue=O.isMesh&&O.matrixWorld.determinant()<0,ge=pp(M,U,B,k,O);be.setMaterial(k,ue);let Me=B.index,De=1;if(k.wireframe===!0){if(Me=te.getWireframeAttribute(B),Me===void 0)return;De=2}const Ue=B.drawRange,Re=B.attributes.position;let nt=Ue.start*De,ot=(Ue.start+Ue.count)*De;se!==null&&(nt=Math.max(nt,se.start*De),ot=Math.min(ot,(se.start+se.count)*De)),Me!==null?(nt=Math.max(nt,0),ot=Math.min(ot,Me.count)):Re!=null&&(nt=Math.max(nt,0),ot=Math.min(ot,Re.count));const Rt=ot-nt;if(Rt<0||Rt===1/0)return;mt.setup(O,k,ge,B,Me);let bt,it=Ee;if(Me!==null&&(bt=j.get(Me),it=Je,it.setIndex(bt)),O.isMesh)k.wireframe===!0?(be.setLineWidth(k.wireframeLinewidth*At()),it.setMode(N.LINES)):it.setMode(N.TRIANGLES);else if(O.isLine){let Ce=k.linewidth;Ce===void 0&&(Ce=1),be.setLineWidth(Ce*At()),O.isLineSegments?it.setMode(N.LINES):O.isLineLoop?it.setMode(N.LINE_LOOP):it.setMode(N.LINE_STRIP)}else O.isPoints?it.setMode(N.POINTS):O.isSprite&&it.setMode(N.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)it.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(je.get("WEBGL_multi_draw"))it.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Ce=O._multiDrawStarts,Ot=O._multiDrawCounts,at=O._multiDrawCount,Ln=Me?j.get(Me).bytesPerElement:1,Es=Ae.get(k).currentProgram.getUniforms();for(let un=0;un<at;un++)Es.setValue(N,"_gl_DrawID",un),it.render(Ce[un]/Ln,Ot[un])}else if(O.isInstancedMesh)it.renderInstances(nt,Rt,O.count);else if(B.isInstancedBufferGeometry){const Ce=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Ot=Math.min(B.instanceCount,Ce);it.renderInstances(nt,Rt,Ot)}else it.render(nt,Rt)};function ct(M,U,B){M.transparent===!0&&M.side===Jn&&M.forceSinglePass===!1?(M.side=cn,M.needsUpdate=!0,Qo(M,U,B),M.side=bi,M.needsUpdate=!0,Qo(M,U,B),M.side=Jn):Qo(M,U,B)}this.compile=function(M,U,B=null){B===null&&(B=M),f=tt.get(B),f.init(U),b.push(f),B.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),M!==B&&M.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),f.setupLights();const k=new Set;return M.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const se=O.material;if(se)if(Array.isArray(se))for(let ue=0;ue<se.length;ue++){const ge=se[ue];ct(ge,B,O),k.add(ge)}else ct(se,B,O),k.add(se)}),b.pop(),f=null,k},this.compileAsync=function(M,U,B=null){const k=this.compile(M,U,B);return new Promise(O=>{function se(){if(k.forEach(function(ue){Ae.get(ue).currentProgram.isReady()&&k.delete(ue)}),k.size===0){O(M);return}setTimeout(se,10)}je.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let Cn=null;function si(M){Cn&&Cn(M)}function Pu(){ji.stop()}function Du(){ji.start()}const ji=new Qf;ji.setAnimationLoop(si),typeof self<"u"&&ji.setContext(self),this.setAnimationLoop=function(M){Cn=M,V.setAnimationLoop(M),M===null?ji.stop():ji.start()},V.addEventListener("sessionstart",Pu),V.addEventListener("sessionend",Du),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(U),U=V.getCamera()),M.isScene===!0&&M.onBeforeRender(S,M,U,L),f=tt.get(M,b.length),f.init(U),b.push(f),Ie.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),$.setFromProjectionMatrix(Ie),Se=this.localClippingEnabled,ae=oe.init(this.clippingPlanes,Se),m=ve.get(M,T.length),m.init(),T.push(m),V.enabled===!0&&V.isPresenting===!0){const se=S.xr.getDepthSensingMesh();se!==null&&rc(se,U,-1/0,S.sortObjects)}rc(M,U,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(he,_e),et=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,et&&Le.addToRenderList(m,M),this.info.render.frame++,ae===!0&&oe.beginShadows();const B=f.state.shadowsArray;xe.render(B,M,U),ae===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=m.opaque,O=m.transmissive;if(f.setupLights(),U.isArrayCamera){const se=U.cameras;if(O.length>0)for(let ue=0,ge=se.length;ue<ge;ue++){const Me=se[ue];Ou(k,O,M,Me)}et&&Le.render(M);for(let ue=0,ge=se.length;ue<ge;ue++){const Me=se[ue];Uu(m,M,Me,Me.viewport)}}else O.length>0&&Ou(k,O,M,U),et&&Le.render(M),Uu(m,M,U);L!==null&&(A.updateMultisampleRenderTarget(L),A.updateRenderTargetMipmap(L)),M.isScene===!0&&M.onAfterRender(S,M,U),mt.resetDefaultState(),y=-1,E=null,b.pop(),b.length>0?(f=b[b.length-1],ae===!0&&oe.setGlobalState(S.clippingPlanes,f.state.camera)):f=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function rc(M,U,B,k){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)B=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLight)f.pushLight(M),M.castShadow&&f.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||$.intersectsSprite(M)){k&&qe.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Ie);const ue=q.update(M),ge=M.material;ge.visible&&m.push(M,ue,ge,B,qe.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||$.intersectsObject(M))){const ue=q.update(M),ge=M.material;if(k&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),qe.copy(M.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),qe.copy(ue.boundingSphere.center)),qe.applyMatrix4(M.matrixWorld).applyMatrix4(Ie)),Array.isArray(ge)){const Me=ue.groups;for(let De=0,Ue=Me.length;De<Ue;De++){const Re=Me[De],nt=ge[Re.materialIndex];nt&&nt.visible&&m.push(M,ue,nt,B,qe.z,Re)}}else ge.visible&&m.push(M,ue,ge,B,qe.z,null)}}const se=M.children;for(let ue=0,ge=se.length;ue<ge;ue++)rc(se[ue],U,B,k)}function Uu(M,U,B,k){const O=M.opaque,se=M.transmissive,ue=M.transparent;f.setupLightsView(B),ae===!0&&oe.setGlobalState(S.clippingPlanes,B),k&&be.viewport(I.copy(k)),O.length>0&&Jo(O,U,B),se.length>0&&Jo(se,U,B),ue.length>0&&Jo(ue,U,B),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function Ou(M,U,B,k){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[k.id]===void 0&&(f.state.transmissionRenderTarget[k.id]=new xs(1,1,{generateMipmaps:!0,type:je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float")?Yo:Ai,minFilter:xi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const se=f.state.transmissionRenderTarget[k.id],ue=k.viewport||I;se.setSize(ue.z,ue.w);const ge=S.getRenderTarget();S.setRenderTarget(se),S.getClearColor(J),ee=S.getClearAlpha(),ee<1&&S.setClearColor(16777215,.5),S.clear(),et&&Le.render(B);const Me=S.toneMapping;S.toneMapping=Wi;const De=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),f.setupLightsView(k),ae===!0&&oe.setGlobalState(S.clippingPlanes,k),Jo(M,B,k),A.updateMultisampleRenderTarget(se),A.updateRenderTargetMipmap(se),je.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let Re=0,nt=U.length;Re<nt;Re++){const ot=U[Re],Rt=ot.object,bt=ot.geometry,it=ot.material,Ce=ot.group;if(it.side===Jn&&Rt.layers.test(k.layers)){const Ot=it.side;it.side=cn,it.needsUpdate=!0,Fu(Rt,B,k,bt,it,Ce),it.side=Ot,it.needsUpdate=!0,Ue=!0}}Ue===!0&&(A.updateMultisampleRenderTarget(se),A.updateRenderTargetMipmap(se))}S.setRenderTarget(ge),S.setClearColor(J,ee),De!==void 0&&(k.viewport=De),S.toneMapping=Me}function Jo(M,U,B){const k=U.isScene===!0?U.overrideMaterial:null;for(let O=0,se=M.length;O<se;O++){const ue=M[O],ge=ue.object,Me=ue.geometry,De=k===null?ue.material:k,Ue=ue.group;ge.layers.test(B.layers)&&Fu(ge,U,B,Me,De,Ue)}}function Fu(M,U,B,k,O,se){M.onBeforeRender(S,U,B,k,O,se),M.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),O.onBeforeRender(S,U,B,k,M,se),O.transparent===!0&&O.side===Jn&&O.forceSinglePass===!1?(O.side=cn,O.needsUpdate=!0,S.renderBufferDirect(B,U,k,O,M,se),O.side=bi,O.needsUpdate=!0,S.renderBufferDirect(B,U,k,O,M,se),O.side=Jn):S.renderBufferDirect(B,U,k,O,M,se),M.onAfterRender(S,U,B,k,O,se)}function Qo(M,U,B){U.isScene!==!0&&(U=St);const k=Ae.get(M),O=f.state.lights,se=f.state.shadowsArray,ue=O.state.version,ge=ye.getParameters(M,O.state,se,U,B),Me=ye.getProgramCacheKey(ge);let De=k.programs;k.environment=M.isMeshStandardMaterial?U.environment:null,k.fog=U.fog,k.envMap=(M.isMeshStandardMaterial?F:x).get(M.envMap||k.environment),k.envMapRotation=k.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,De===void 0&&(M.addEventListener("dispose",ke),De=new Map,k.programs=De);let Ue=De.get(Me);if(Ue!==void 0){if(k.currentProgram===Ue&&k.lightsStateVersion===ue)return ku(M,ge),Ue}else ge.uniforms=ye.getUniforms(M),M.onBeforeCompile(ge,S),Ue=ye.acquireProgram(ge,Me),De.set(Me,Ue),k.uniforms=ge.uniforms;const Re=k.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Re.clippingPlanes=oe.uniform),ku(M,ge),k.needsLights=gp(M),k.lightsStateVersion=ue,k.needsLights&&(Re.ambientLightColor.value=O.state.ambient,Re.lightProbe.value=O.state.probe,Re.directionalLights.value=O.state.directional,Re.directionalLightShadows.value=O.state.directionalShadow,Re.spotLights.value=O.state.spot,Re.spotLightShadows.value=O.state.spotShadow,Re.rectAreaLights.value=O.state.rectArea,Re.ltc_1.value=O.state.rectAreaLTC1,Re.ltc_2.value=O.state.rectAreaLTC2,Re.pointLights.value=O.state.point,Re.pointLightShadows.value=O.state.pointShadow,Re.hemisphereLights.value=O.state.hemi,Re.directionalShadowMap.value=O.state.directionalShadowMap,Re.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Re.spotShadowMap.value=O.state.spotShadowMap,Re.spotLightMatrix.value=O.state.spotLightMatrix,Re.spotLightMap.value=O.state.spotLightMap,Re.pointShadowMap.value=O.state.pointShadowMap,Re.pointShadowMatrix.value=O.state.pointShadowMatrix),k.currentProgram=Ue,k.uniformsList=null,Ue}function Bu(M){if(M.uniformsList===null){const U=M.currentProgram.getUniforms();M.uniformsList=za.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function ku(M,U){const B=Ae.get(M);B.outputColorSpace=U.outputColorSpace,B.batching=U.batching,B.batchingColor=U.batchingColor,B.instancing=U.instancing,B.instancingColor=U.instancingColor,B.instancingMorph=U.instancingMorph,B.skinning=U.skinning,B.morphTargets=U.morphTargets,B.morphNormals=U.morphNormals,B.morphColors=U.morphColors,B.morphTargetsCount=U.morphTargetsCount,B.numClippingPlanes=U.numClippingPlanes,B.numIntersection=U.numClipIntersection,B.vertexAlphas=U.vertexAlphas,B.vertexTangents=U.vertexTangents,B.toneMapping=U.toneMapping}function pp(M,U,B,k,O){U.isScene!==!0&&(U=St),A.resetTextureUnits();const se=U.fog,ue=k.isMeshStandardMaterial?U.environment:null,ge=L===null?S.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:tn,Me=(k.isMeshStandardMaterial?F:x).get(k.envMap||ue),De=k.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ue=!!B.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Re=!!B.morphAttributes.position,nt=!!B.morphAttributes.normal,ot=!!B.morphAttributes.color;let Rt=Wi;k.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Rt=S.toneMapping);const bt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,it=bt!==void 0?bt.length:0,Ce=Ae.get(k),Ot=f.state.lights;if(ae===!0&&(Se===!0||M!==E)){const $t=M===E&&k.id===y;oe.setState(k,M,$t)}let at=!1;k.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==Ot.state.version||Ce.outputColorSpace!==ge||O.isBatchedMesh&&Ce.batching===!1||!O.isBatchedMesh&&Ce.batching===!0||O.isBatchedMesh&&Ce.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ce.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ce.instancing===!1||!O.isInstancedMesh&&Ce.instancing===!0||O.isSkinnedMesh&&Ce.skinning===!1||!O.isSkinnedMesh&&Ce.skinning===!0||O.isInstancedMesh&&Ce.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ce.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ce.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ce.instancingMorph===!1&&O.morphTexture!==null||Ce.envMap!==Me||k.fog===!0&&Ce.fog!==se||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==oe.numPlanes||Ce.numIntersection!==oe.numIntersection)||Ce.vertexAlphas!==De||Ce.vertexTangents!==Ue||Ce.morphTargets!==Re||Ce.morphNormals!==nt||Ce.morphColors!==ot||Ce.toneMapping!==Rt||Ce.morphTargetsCount!==it)&&(at=!0):(at=!0,Ce.__version=k.version);let Ln=Ce.currentProgram;at===!0&&(Ln=Qo(k,U,O));let Es=!1,un=!1,Lr=!1;const xt=Ln.getUniforms(),xn=Ce.uniforms;if(be.useProgram(Ln.program)&&(Es=!0,un=!0,Lr=!0),k.id!==y&&(y=k.id,un=!0),Es||E!==M){be.buffers.depth.getReversed()?(de.copy(M.projectionMatrix),h_(de),d_(de),xt.setValue(N,"projectionMatrix",de)):xt.setValue(N,"projectionMatrix",M.projectionMatrix),xt.setValue(N,"viewMatrix",M.matrixWorldInverse);const nn=xt.map.cameraPosition;nn!==void 0&&nn.setValue(N,Be.setFromMatrixPosition(M.matrixWorld)),Ze.logarithmicDepthBuffer&&xt.setValue(N,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&xt.setValue(N,"isOrthographic",M.isOrthographicCamera===!0),E!==M&&(E=M,un=!0,Lr=!0)}if(O.isSkinnedMesh){xt.setOptional(N,O,"bindMatrix"),xt.setOptional(N,O,"bindMatrixInverse");const $t=O.skeleton;$t&&($t.boneTexture===null&&$t.computeBoneTexture(),xt.setValue(N,"boneTexture",$t.boneTexture,A))}O.isBatchedMesh&&(xt.setOptional(N,O,"batchingTexture"),xt.setValue(N,"batchingTexture",O._matricesTexture,A),xt.setOptional(N,O,"batchingIdTexture"),xt.setValue(N,"batchingIdTexture",O._indirectTexture,A),xt.setOptional(N,O,"batchingColorTexture"),O._colorsTexture!==null&&xt.setValue(N,"batchingColorTexture",O._colorsTexture,A));const En=B.morphAttributes;if((En.position!==void 0||En.normal!==void 0||En.color!==void 0)&&Pe.update(O,B,Ln),(un||Ce.receiveShadow!==O.receiveShadow)&&(Ce.receiveShadow=O.receiveShadow,xt.setValue(N,"receiveShadow",O.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(xn.envMap.value=Me,xn.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&U.environment!==null&&(xn.envMapIntensity.value=U.environmentIntensity),un&&(xt.setValue(N,"toneMappingExposure",S.toneMappingExposure),Ce.needsLights&&mp(xn,Lr),se&&k.fog===!0&&fe.refreshFogUniforms(xn,se),fe.refreshMaterialUniforms(xn,k,z,ie,f.state.transmissionRenderTarget[M.id]),za.upload(N,Bu(Ce),xn,A)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(za.upload(N,Bu(Ce),xn,A),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&xt.setValue(N,"center",O.center),xt.setValue(N,"modelViewMatrix",O.modelViewMatrix),xt.setValue(N,"normalMatrix",O.normalMatrix),xt.setValue(N,"modelMatrix",O.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const $t=k.uniformsGroups;for(let nn=0,oc=$t.length;nn<oc;nn++){const Zi=$t[nn];P.update(Zi,Ln),P.bind(Zi,Ln)}}return Ln}function mp(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function gp(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(M,U,B){Ae.get(M.texture).__webglTexture=U,Ae.get(M.depthTexture).__webglTexture=B;const k=Ae.get(M);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=B===void 0,k.__autoAllocateDepthBuffer||je.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,U){const B=Ae.get(M);B.__webglFramebuffer=U,B.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(M,U=0,B=0){L=M,R=U,w=B;let k=!0,O=null,se=!1,ue=!1;if(M){const Me=Ae.get(M);if(Me.__useDefaultFramebuffer!==void 0)be.bindFramebuffer(N.FRAMEBUFFER,null),k=!1;else if(Me.__webglFramebuffer===void 0)A.setupRenderTarget(M);else if(Me.__hasExternalTextures)A.rebindTextures(M,Ae.get(M.texture).__webglTexture,Ae.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Re=M.depthTexture;if(Me.__boundDepthTexture!==Re){if(Re!==null&&Ae.has(Re)&&(M.width!==Re.image.width||M.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(M)}}const De=M.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(ue=!0);const Ue=Ae.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ue[U])?O=Ue[U][B]:O=Ue[U],se=!0):M.samples>0&&A.useMultisampledRTT(M)===!1?O=Ae.get(M).__webglMultisampledFramebuffer:Array.isArray(Ue)?O=Ue[B]:O=Ue,I.copy(M.viewport),W.copy(M.scissor),H=M.scissorTest}else I.copy(Te).multiplyScalar(z).floor(),W.copy(Xe).multiplyScalar(z).floor(),H=pt;if(be.bindFramebuffer(N.FRAMEBUFFER,O)&&k&&be.drawBuffers(M,O),be.viewport(I),be.scissor(W),be.setScissorTest(H),se){const Me=Ae.get(M.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+U,Me.__webglTexture,B)}else if(ue){const Me=Ae.get(M.texture),De=U||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Me.__webglTexture,B||0,De)}y=-1},this.readRenderTargetPixels=function(M,U,B,k,O,se,ue){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=Ae.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ue!==void 0&&(ge=ge[ue]),ge){be.bindFramebuffer(N.FRAMEBUFFER,ge);try{const Me=M.texture,De=Me.format,Ue=Me.type;if(!Ze.textureFormatReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ze.textureTypeReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-k&&B>=0&&B<=M.height-O&&N.readPixels(U,B,k,O,ze.convert(De),ze.convert(Ue),se)}finally{const Me=L!==null?Ae.get(L).__webglFramebuffer:null;be.bindFramebuffer(N.FRAMEBUFFER,Me)}}},this.readRenderTargetPixelsAsync=async function(M,U,B,k,O,se,ue){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=Ae.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ue!==void 0&&(ge=ge[ue]),ge){const Me=M.texture,De=Me.format,Ue=Me.type;if(!Ze.textureFormatReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ze.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=M.width-k&&B>=0&&B<=M.height-O){be.bindFramebuffer(N.FRAMEBUFFER,ge);const Re=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Re),N.bufferData(N.PIXEL_PACK_BUFFER,se.byteLength,N.STREAM_READ),N.readPixels(U,B,k,O,ze.convert(De),ze.convert(Ue),0);const nt=L!==null?Ae.get(L).__webglFramebuffer:null;be.bindFramebuffer(N.FRAMEBUFFER,nt);const ot=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await u_(N,ot,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Re),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,se),N.deleteBuffer(Re),N.deleteSync(ot),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,U=null,B=0){M.isTexture!==!0&&(Vs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,M=arguments[1]);const k=Math.pow(2,-B),O=Math.floor(M.image.width*k),se=Math.floor(M.image.height*k),ue=U!==null?U.x:0,ge=U!==null?U.y:0;A.setTexture2D(M,0),N.copyTexSubImage2D(N.TEXTURE_2D,B,0,0,ue,ge,O,se),be.unbindTexture()};const _p=N.createFramebuffer(),vp=N.createFramebuffer();this.copyTextureToTexture=function(M,U,B=null,k=null,O=0,se=null){M.isTexture!==!0&&(Vs("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,M=arguments[1],U=arguments[2],se=arguments[3]||0,B=null),se===null&&(O!==0?(Vs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),se=O,O=0):se=0);let ue,ge,Me,De,Ue,Re,nt,ot,Rt;const bt=M.isCompressedTexture?M.mipmaps[se]:M.image;if(B!==null)ue=B.max.x-B.min.x,ge=B.max.y-B.min.y,Me=B.isBox3?B.max.z-B.min.z:1,De=B.min.x,Ue=B.min.y,Re=B.isBox3?B.min.z:0;else{const En=Math.pow(2,-O);ue=Math.floor(bt.width*En),ge=Math.floor(bt.height*En),M.isDataArrayTexture?Me=bt.depth:M.isData3DTexture?Me=Math.floor(bt.depth*En):Me=1,De=0,Ue=0,Re=0}k!==null?(nt=k.x,ot=k.y,Rt=k.z):(nt=0,ot=0,Rt=0);const it=ze.convert(U.format),Ce=ze.convert(U.type);let Ot;U.isData3DTexture?(A.setTexture3D(U,0),Ot=N.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(A.setTexture2DArray(U,0),Ot=N.TEXTURE_2D_ARRAY):(A.setTexture2D(U,0),Ot=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,U.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,U.unpackAlignment);const at=N.getParameter(N.UNPACK_ROW_LENGTH),Ln=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Es=N.getParameter(N.UNPACK_SKIP_PIXELS),un=N.getParameter(N.UNPACK_SKIP_ROWS),Lr=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,bt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,bt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,De),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ue),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Re);const xt=M.isDataArrayTexture||M.isData3DTexture,xn=U.isDataArrayTexture||U.isData3DTexture;if(M.isDepthTexture){const En=Ae.get(M),$t=Ae.get(U),nn=Ae.get(En.__renderTarget),oc=Ae.get($t.__renderTarget);be.bindFramebuffer(N.READ_FRAMEBUFFER,nn.__webglFramebuffer),be.bindFramebuffer(N.DRAW_FRAMEBUFFER,oc.__webglFramebuffer);for(let Zi=0;Zi<Me;Zi++)xt&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ae.get(M).__webglTexture,O,Re+Zi),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ae.get(U).__webglTexture,se,Rt+Zi)),N.blitFramebuffer(De,Ue,ue,ge,nt,ot,ue,ge,N.DEPTH_BUFFER_BIT,N.NEAREST);be.bindFramebuffer(N.READ_FRAMEBUFFER,null),be.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(O!==0||M.isRenderTargetTexture||Ae.has(M)){const En=Ae.get(M),$t=Ae.get(U);be.bindFramebuffer(N.READ_FRAMEBUFFER,_p),be.bindFramebuffer(N.DRAW_FRAMEBUFFER,vp);for(let nn=0;nn<Me;nn++)xt?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,En.__webglTexture,O,Re+nn):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,En.__webglTexture,O),xn?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,$t.__webglTexture,se,Rt+nn):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,$t.__webglTexture,se),O!==0?N.blitFramebuffer(De,Ue,ue,ge,nt,ot,ue,ge,N.COLOR_BUFFER_BIT,N.NEAREST):xn?N.copyTexSubImage3D(Ot,se,nt,ot,Rt+nn,De,Ue,ue,ge):N.copyTexSubImage2D(Ot,se,nt,ot,De,Ue,ue,ge);be.bindFramebuffer(N.READ_FRAMEBUFFER,null),be.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else xn?M.isDataTexture||M.isData3DTexture?N.texSubImage3D(Ot,se,nt,ot,Rt,ue,ge,Me,it,Ce,bt.data):U.isCompressedArrayTexture?N.compressedTexSubImage3D(Ot,se,nt,ot,Rt,ue,ge,Me,it,bt.data):N.texSubImage3D(Ot,se,nt,ot,Rt,ue,ge,Me,it,Ce,bt):M.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,se,nt,ot,ue,ge,it,Ce,bt.data):M.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,se,nt,ot,bt.width,bt.height,it,bt.data):N.texSubImage2D(N.TEXTURE_2D,se,nt,ot,ue,ge,it,Ce,bt);N.pixelStorei(N.UNPACK_ROW_LENGTH,at),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ln),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Es),N.pixelStorei(N.UNPACK_SKIP_ROWS,un),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Lr),se===0&&U.generateMipmaps&&N.generateMipmap(Ot),be.unbindTexture()},this.copyTextureToTexture3D=function(M,U,B=null,k=null,O=0){return M.isTexture!==!0&&(Vs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,k=arguments[1]||null,M=arguments[2],U=arguments[3],O=arguments[4]||0),Vs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,U,B,k,O)},this.initRenderTarget=function(M){Ae.get(M).__webglFramebuffer===void 0&&A.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?A.setTextureCube(M,0):M.isData3DTexture?A.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?A.setTexture2DArray(M,0):A.setTexture2D(M,0),be.unbindTexture()},this.resetState=function(){R=0,w=0,L=null,be.reset(),mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}}function Td(i,e){if(e===Ug)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Kl||e===If){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===Kl)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class aS extends Rr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new dS(t)}),this.register(function(t){return new fS(t)}),this.register(function(t){return new SS(t)}),this.register(function(t){return new yS(t)}),this.register(function(t){return new TS(t)}),this.register(function(t){return new mS(t)}),this.register(function(t){return new gS(t)}),this.register(function(t){return new _S(t)}),this.register(function(t){return new vS(t)}),this.register(function(t){return new hS(t)}),this.register(function(t){return new xS(t)}),this.register(function(t){return new pS(t)}),this.register(function(t){return new MS(t)}),this.register(function(t){return new ES(t)}),this.register(function(t){return new lS(t)}),this.register(function(t){return new bS(t)}),this.register(function(t){return new AS(t)})}load(e,t,n,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=jr.extractUrlBase(e);o=jr.resolveURL(l,this.path)}else o=jr.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new jf(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===sp){try{o[Ye.KHR_BINARY_GLTF]=new wS(e)}catch(h){s&&s(h);return}r=JSON.parse(o[Ye.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new HS(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case Ye.KHR_MATERIALS_UNLIT:o[h]=new uS;break;case Ye.KHR_DRACO_MESH_COMPRESSION:o[h]=new RS(r,this.dracoLoader);break;case Ye.KHR_TEXTURE_TRANSFORM:o[h]=new CS;break;case Ye.KHR_MESH_QUANTIZATION:o[h]=new LS;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function cS(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const Ye={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class lS{constructor(e){this.parser=e,this.name=Ye.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const u=new Ne(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],tn);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Jf(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Zf(u),l.distance=h;break;case"spot":l=new u0(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,di(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class uS{constructor(){this.name=Ye.KHR_MATERIALS_UNLIT}getMaterialType(){return hs}extendParams(e,t,n){const s=[];e.color=new Ne(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],tn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Bt))}return Promise.all(s)}}class hS{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class dS{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ke(a,a)}return Promise.all(r)}}class fS{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class pS{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class mS{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Ne(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],tn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Bt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class gS{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class _S{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ne().setRGB(a[0],a[1],a[2],tn),Promise.all(r)}}class vS{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class xS{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ne().setRGB(a[0],a[1],a[2],tn),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Bt)),Promise.all(r)}}class ES{constructor(e){this.parser=e,this.name=Ye.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class MS{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class SS{constructor(e){this.parser=e,this.name=Ye.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class yS{constructor(e){this.parser=e,this.name=Ye.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class TS{constructor(e){this.parser=e,this.name=Ye.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class bS{constructor(e){this.name=Ye.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=s.byteOffset||0,l=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(p),u,h,d,s.mode,s.filter),p})})}else return null}}class AS{constructor(e){this.name=Ye.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const l of s.primitives)if(l.mode!==yn.TRIANGLES&&l.mode!==yn.TRIANGLE_STRIP&&l.mode!==yn.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const u=l.pop(),h=u.isGroup?u.children:[u],d=l[0].count,p=[];for(const g of h){const _=new Ve,m=new D,f=new Ki,T=new D(1,1,1),b=new V_(g.geometry,g.material,d);for(let S=0;S<d;S++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,S),c.ROTATION&&f.fromBufferAttribute(c.ROTATION,S),c.SCALE&&T.fromBufferAttribute(c.SCALE,S),b.setMatrixAt(S,_.compose(m,f,T));for(const S in c)if(S==="_COLOR_0"){const C=c[S];b.instanceColor=new Zl(C.array,C.itemSize,C.normalized)}else S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"&&g.geometry.setAttribute(S,c[S]);Mt.prototype.copy.call(b,g),this.parser.assignFinalMaterial(b),p.push(b)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const sp="glTF",Vr=12,bd={JSON:1313821514,BIN:5130562};class wS{constructor(e){this.name=Ye.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Vr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==sp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Vr,r=new DataView(e,Vr);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===bd.JSON){const l=new Uint8Array(e,Vr+o,a);this.content=n.decode(l)}else if(c===bd.BIN){const l=Vr+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class RS{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ye.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const u in o){const h=tu[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=tu[u]||u.toLowerCase();if(o[u]!==void 0){const d=n.accessors[e.attributes[u]],p=$s[d.componentType];l[h]=p.name,c[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){s.decodeDracoFile(u,function(p){for(const g in p.attributes){const _=p.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}h(p)},a,l,tn,d)})})}}class CS{constructor(){this.name=Ye.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class LS{constructor(){this.name=Ye.KHR_MESH_QUANTIZATION}}class rp extends Zo{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=s-t,h=(n-t)/u,d=h*h,p=d*h,g=e*l,_=g-l,m=-2*p+3*d,f=p-d,T=1-m,b=f-d+h;for(let S=0;S!==a;S++){const C=o[_+S+a],R=o[_+S+c]*u,w=o[g+S+a],L=o[g+S]*u;r[S]=T*C+b*R+m*w+f*L}return r}}const IS=new Ki;class NS extends rp{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return IS.fromArray(r).normalize().toArray(r),r}}const yn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},$s={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ad={9728:en,9729:gn,9984:Mf,9985:Oa,9986:Wr,9987:xi},wd={33071:Vi,33648:Ga,10497:_r},qc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},tu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Pi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},PS={CUBICSPLINE:void 0,LINEAR:no,STEP:to},$c={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function DS(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new so({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:bi})),i.DefaultMaterial}function ss(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function di(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function US(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,u=e.length;l<u;l++){const h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(d)}if(s){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(d)}if(r){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const u=l[0],h=l[1],d=l[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function OS(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function FS(i){let e;const t=i.extensions&&i.extensions[Ye.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Yc(t.attributes):e=i.indices+":"+Yc(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Yc(i.targets[n]);return e}function Yc(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function nu(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function BS(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const kS=new Ve;class HS{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new cS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new a0(this.options.manager):this.textureLoader=new f0(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new jf(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return ss(r,a,s),di(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,u]of o.children.entries())r(u,a.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ye.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(jr.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=qc[s.type],a=$s[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new Ht(l,o,c))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=qc[s.type],l=$s[s.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,d=s.byteOffset||0,p=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let _,m;if(p&&p!==h){const f=Math.floor(d/p),T="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+f+":"+s.count;let b=t.cache.get(T);b||(_=new l(a,f*p,s.count*p/u),b=new O_(_,p/u),t.cache.add(T,b)),m=new Eu(b,c,d%p/u,g)}else a===null?_=new l(s.count*c):_=new l(a,d,s.count*c),m=new Ht(_,c,g);if(s.sparse!==void 0){const f=qc.SCALAR,T=$s[s.sparse.indices.componentType],b=s.sparse.indices.byteOffset||0,S=s.sparse.values.byteOffset||0,C=new T(o[1],b,s.sparse.count*f),R=new l(o[2],S,s.sparse.count*c);a!==null&&(m=new Ht(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let w=0,L=C.length;w<L;w++){const y=C[w];if(m.setX(y,R[w*c]),c>=2&&m.setY(y,R[w*c+1]),c>=3&&m.setZ(y,R[w*c+2]),c>=4&&m.setW(y,R[w*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return u.magFilter=Ad[d.magFilter]||gn,u.minFilter=Ad[d.minFilter]||xi,u.wrapS=wd[d.wrapS]||_r,u.wrapT=wd[d.wrapT]||_r,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==en&&u.minFilter!==gn,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=s.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(h){l=!0;const d=new Blob([h],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(h){return new Promise(function(d,p){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Ut(_);m.needsUpdate=!0,d(m)}),t.load(jr.resolveURL(h,r.path),g,void 0,p)})}).then(function(h){return l===!0&&a.revokeObjectURL(c),di(h,o),h.userData.mimeType=o.mimeType||BS(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Ye.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Ye.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[Ye.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Ya,Qn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new qf,Qn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return so}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let o;const a={},c=r.extensions||{},l=[];if(c[Ye.KHR_MATERIALS_UNLIT]){const h=s[Ye.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),l.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new Ne(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],tn),a.opacity=d[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",h.baseColorTexture,Bt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Jn);const u=r.alphaMode||$c.OPAQUE;if(u===$c.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===$c.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==hs&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ke(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==hs&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==hs){const h=r.emissiveFactor;a.emissive=new Ne().setRGB(h[0],h[1],h[2],tn)}return r.emissiveTexture!==void 0&&o!==hs&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Bt)),Promise.all(l).then(function(){const h=new o(a);return r.name&&(h.name=r.name),di(h,r),t.associations.set(h,{materials:e}),r.extensions&&ss(s,h,r),h})}createUniqueName(e){const t=ut.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[Ye.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Rd(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],u=FS(l),h=s[u];if(h)o.push(h.promise);else{let d;l.extensions&&l.extensions[Ye.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=Rd(new _n,l,t),s[u]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const u=o[c].material===void 0?DS(this.cache):this.getDependency("material",o[c].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let p=0,g=u.length;p<g;p++){const _=u[p],m=o[p];let f;const T=l[p];if(m.mode===yn.TRIANGLES||m.mode===yn.TRIANGLE_STRIP||m.mode===yn.TRIANGLE_FAN||m.mode===void 0)f=r.isSkinnedMesh===!0?new B_(_,T):new Qt(_,T),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),m.mode===yn.TRIANGLE_STRIP?f.geometry=Td(f.geometry,If):m.mode===yn.TRIANGLE_FAN&&(f.geometry=Td(f.geometry,Kl));else if(m.mode===yn.LINES)f=new W_(_,T);else if(m.mode===yn.LINE_STRIP)f=new yu(_,T);else if(m.mode===yn.LINE_LOOP)f=new X_(_,T);else if(m.mode===yn.POINTS)f=new Ql(_,T);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&OS(f,r),f.name=t.createUniqueName(r.name||"mesh_"+e),di(f,r),m.extensions&&ss(s,f,m),t.assignFinalMaterial(f),h.push(f)}for(let p=0,g=h.length;p<g;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return r.extensions&&ss(s,h[0],r),h[0];const d=new Mi;r.extensions&&ss(s,d,r),t.associations.set(d,{meshes:e});for(let p=0,g=h.length;p<g;p++)d.add(h[p]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Jt(c_.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new wu(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),di(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),o=s,a=[],c=[];for(let l=0,u=o.length;l<u;l++){const h=o[l];if(h){a.push(h);const d=new Ve;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Mu(a,c)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],u=[];for(let h=0,d=s.channels.length;h<d;h++){const p=s.channels[h],g=s.samplers[p.sampler],_=p.target,m=_.node,f=s.parameters!==void 0?s.parameters[g.input]:g.input,T=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",f)),c.push(this.getDependency("accessor",T)),l.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){const d=h[0],p=h[1],g=h[2],_=h[3],m=h[4],f=[];for(let T=0,b=d.length;T<b;T++){const S=d[T],C=p[T],R=g[T],w=_[T],L=m[T];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();const y=n._createAnimationTracks(S,C,R,w,L);if(y)for(let E=0;E<y.length;E++)f.push(y[E])}return new e0(r,void 0,f)})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,u=a.length;l<u;l++)o.push(n.getDependency("node",a[l]));const c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const u=l[0],h=l[1],d=l[2];d!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(d,kS)});for(let p=0,g=h.length;p<g;p++)u.add(h[p]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(r.isBone===!0?u=new Wf:l.length>1?u=new Mi:l.length===1?u=l[0]:u=new Mt,u!==l[0])for(let h=0,d=l.length;h<d;h++)u.add(l[h]);if(r.name&&(u.userData.name=r.name,u.name=o),di(u,r),r.extensions&&ss(n,u,r),r.matrix!==void 0){const h=new Ve;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new Mi;n.name&&(r.name=s.createUniqueName(n.name)),di(r,n),n.extensions&&ss(t,r,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let u=0,h=c.length;u<h;u++)r.add(c[u]);const l=u=>{const h=new Map;for(const[d,p]of s.associations)(d instanceof Qn||d instanceof Ut)&&h.set(d,p);return u.traverse(d=>{const p=s.associations.get(d);p!=null&&h.set(d,p)}),h};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){const o=[],a=e.name?e.name:e.uuid,c=[];Pi[r.path]===Pi.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(Pi[r.path]){case Pi.weights:l=Sr;break;case Pi.rotation:l=yr;break;case Pi.position:case Pi.scale:l=Tr;break;default:switch(n.itemSize){case 1:l=Sr;break;case 2:case 3:default:l=Tr;break}break}const u=s.interpolation!==void 0?PS[s.interpolation]:no,h=this._getArrayFromAccessor(n);for(let d=0,p=c.length;d<p;d++){const g=new l(c[d]+"."+Pi[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=nu(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof yr?NS:rp;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function VS(i,e,t){const n=e.attributes,s=new kn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new D(c[0],c[1],c[2]),new D(l[0],l[1],l[2])),a.normalized){const u=nu($s[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new D,c=new D;for(let l=0,u=r.length;l<u;l++){const h=r[l];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],p=d.min,g=d.max;if(p!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),d.normalized){const _=nu($s[d.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new ti;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Rd(i,e,t){const n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(const o in n){const a=tu[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return Qe.workingColorSpace!==tn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Qe.workingColorSpace}" not supported.`),di(i,e),VS(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?US(i,e.targets,t):i})}const zS="/stellar-forge-demo/assets/drone-B0fnOXy-.glb",Cd=855828,GS=14674165,Ld=16765286,WS=1e3;class XS{constructor(e){Y(this,"_bus");Y(this,"_clock");Y(this,"_input");Y(this,"_renderer");Y(this,"_scene");Y(this,"_camera");Y(this,"_canvas");Y(this,"_parent");Y(this,"_hero");Y(this,"_heroBaseY",0);Y(this,"_drillLight");Y(this,"_sparks");Y(this,"_sparkVel");Y(this,"_raf",0);Y(this,"_lastMs",0);Y(this,"_elapsed",0);Y(this,"_shakeUntil",0);Y(this,"_flash",0);Y(this,"_unsub",[]);Y(this,"_tmpV",new D);Y(this,"_onPointerDown",e=>{this._input.onPointerDown(this._raw(e,"down"))});Y(this,"_onPointerUp",e=>{this._input.onPointerUp(this._raw(e,"up"))});Y(this,"_onPointerMove",e=>{this._input.onPointerMove(this._raw(e,"move"))});Y(this,"_loop",()=>{this._raf=requestAnimationFrame(this._loop);const e=performance.now(),t=e-this._lastMs;this._lastMs=e,this._elapsed+=t;const n=t/1e3;this._clock.advance(Math.min(t,WS)),this._animateHero(n),this._animateSparks(n),this._updateHitArea(),this._applyCamera(n),this._renderer.render(this._scene,this._camera)});Y(this,"_onResize",()=>{const e=this._parent.clientWidth||window.innerWidth,t=this._parent.clientHeight||window.innerHeight;this._camera.aspect=e/t,this._camera.updateProjectionMatrix(),this._renderer.setSize(e,t)});this._bus=e.bus,this._clock=e.clock,this._input=e.input}mount(e){this._parent=e;const t=e.clientWidth||window.innerWidth,n=e.clientHeight||window.innerHeight;this._renderer=new oS({antialias:!0,powerPreference:"high-performance"}),this._renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this._renderer.setSize(t,n),this._renderer.shadowMap.enabled=!0,this._renderer.shadowMap.type=_f,this._renderer.toneMapping=xf,this._renderer.toneMappingExposure=1.05,this._canvas=this._renderer.domElement,this._canvas.style.display="block",this._canvas.style.width="100%",this._canvas.style.height="100%",e.appendChild(this._canvas),this._scene=new U_,this._scene.background=new Ne(Cd),this._scene.fog=new xu(Cd,14,46),this._camera=new Jt(42,t/n,.1,200),this._camera.position.set(0,4.4,10),this._camera.lookAt(0,1.2,0),this._buildLighting(),this._buildGround(),this._buildStarfield(),this._buildSparks(),this._loadHero(),this._unsub.push(this._bus.on(Q.INTENT_TAP_FORGE,()=>this._onTap()),this._bus.on(Q.MILESTONE_REACHED,()=>this._celebrate(.5,260)),this._bus.on(Q.ASCENSION_STARTED,()=>this._celebrate(.3,200)),this._bus.on(Q.ASCENSION_COMPLETE,()=>this._celebrate(1,420))),this._wireInput(),window.addEventListener("resize",this._onResize),this._lastMs=performance.now(),this._loop()}dispose(){cancelAnimationFrame(this._raf),window.removeEventListener("resize",this._onResize),this._canvas.removeEventListener("pointerdown",this._onPointerDown),this._canvas.removeEventListener("pointerup",this._onPointerUp),this._canvas.removeEventListener("pointermove",this._onPointerMove);for(const e of this._unsub)e();this._unsub.length=0,this._scene.traverse(e=>{const t=e;t.geometry&&t.geometry.dispose();const n=t.material;Array.isArray(n)?n.forEach(s=>s.dispose()):n==null||n.dispose()}),this._renderer.dispose(),this._canvas.remove()}_buildLighting(){const e=new Jf(14674431,3.1);e.position.set(-6,12,5),e.castShadow=!0,e.shadow.mapSize.set(2048,2048),e.shadow.camera.near=1,e.shadow.camera.far=60;const t=22;e.shadow.camera.left=-t,e.shadow.camera.right=t,e.shadow.camera.top=t,e.shadow.camera.bottom=-t,e.shadow.bias=-4e-4,this._scene.add(e),this._scene.add(new c0(2766160,329484,.35))}_buildGround(){const n=new jo(120,120,200,200);n.rotateX(-Math.PI/2);const s=n.attributes.position,r=(c,l)=>Math.sin(c*.35)*Math.cos(l*.3)*.5+Math.sin(c*.9+1.3)*Math.cos(l*.7+.4)*.24+Math.sin(c*2.1+4)*Math.cos(l*1.9+2.1)*.12+Math.sin(c*4.7)*Math.cos(l*4.3)*.06;for(let c=0;c<s.count;c+=1){const l=s.getX(c),u=s.getZ(c),h=Math.min(1,Math.hypot(l,u)/8+.15);s.setY(c,r(l,u)*1.15*h)}n.computeVertexNormals();const o=new so({color:3817544,roughness:.96,metalness:.05,flatShading:!1}),a=new Qt(n,o);a.receiveShadow=!0,this._scene.add(a)}_buildStarfield(){const e=new _n,t=240,n=new Float32Array(t*3);let s=987654321;const r=()=>(s=(s*1664525+1013904223)%4294967296,s/4294967296);for(let a=0;a<t;a+=1){const c=60+r()*60,l=r()*Math.PI*2,u=r()*Math.PI*.5;n[a*3]=Math.cos(l)*Math.sin(u)*c,n[a*3+1]=12+r()*55,n[a*3+2]=-Math.abs(Math.sin(l))*c-10}e.setAttribute("position",new Ht(n,3));const o=new Ya({color:GS,size:.28,sizeAttenuation:!0,transparent:!0,opacity:.8,fog:!1});this._scene.add(new Ql(e,o))}_buildSparks(){const t=new _n,n=new Float32Array(180);this._sparkVel=new Float32Array(180),t.setAttribute("position",new Ht(n,3));const s=new Ya({color:Ld,size:.12,transparent:!0,opacity:.95,blending:hl,depthWrite:!1,fog:!1});this._sparks=new Ql(t,s),this._sparks.frustumCulled=!1,this._scene.add(this._sparks),this._drillLight=new Zf(12574975,0,6,2),this._scene.add(this._drillLight)}_loadHero(){new aS().load(zS,t=>{const n=t.scene,s=new kn().setFromObject(n),r=new D;s.getSize(r);const o=2.6/(r.y||1);n.scale.setScalar(o);const a=new kn().setFromObject(n);n.position.y-=a.min.y,n.traverse(l=>{const u=l;u.isMesh&&(u.castShadow=!0,u.receiveShadow=!0)});const c=new Mi;c.add(n),c.position.set(0,1,1.5),this._scene.add(c),this._hero=c,this._heroBaseY=c.position.y},void 0,t=>{console.error("World3D: failed to load drone.glb",t);const n=new Qt(new bu(1.1,1),new so({color:9152447,roughness:.5,metalness:.4}));n.castShadow=!0;const s=new Mi;s.add(n),s.position.set(0,1.4,1.5),this._scene.add(s),this._hero=s,this._heroBaseY=s.position.y})}_wireInput(){this._canvas.addEventListener("pointerdown",this._onPointerDown),this._canvas.addEventListener("pointerup",this._onPointerUp),this._canvas.addEventListener("pointermove",this._onPointerMove)}_raw(e,t){const n=this._canvas.getBoundingClientRect();return{pointerId:e.pointerId,wasTouch:e.pointerType==="touch",x:e.clientX-n.left,y:e.clientY-n.top,timeStamp:e.timeStamp,type:t}}_updateHitArea(){if(this._hero===void 0)return;this._tmpV.copy(this._hero.position),this._tmpV.project(this._camera);const e=this._canvas.clientWidth,t=this._canvas.clientHeight,n=(this._tmpV.x*.5+.5)*e,s=(-this._tmpV.y*.5+.5)*t,r=Math.max(60,e*.11);this._input.clearHitAreas(),this._input.registerHitArea({id:"forge",kind:"forge",bounds:{x:n-r,y:s-r,width:r*2,height:r*2}})}_onTap(){this._hero!==void 0&&(this._hero.position.y=this._heroBaseY-.22,this._emitSparks(18,1),this._drillLight!==void 0&&(this._drillLight.color.setHex(Ld),this._drillLight.intensity=5))}_celebrate(e,t){this._flash=Math.max(this._flash,e),this._shakeUntil=this._elapsed+t,this._emitSparks(40,1.8)}_emitSparks(e,t){if(this._sparks===void 0||this._sparkVel===void 0||this._hero===void 0)return;const n=this._sparks.geometry.attributes.position,s=this._hero.position.x,r=this._surfaceContactY(),o=this._hero.position.z;let a=(this._elapsed|0)+e;const c=()=>(a=a*1103515245+12345&2147483647,a/2147483647);for(let l=0;l<Math.min(e,n.count);l+=1){n.setXYZ(l,s,r,o);const u=c()*Math.PI*2,h=.6+c()*1.4;this._sparkVel[l*3]=Math.cos(u)*t*(.4+c()),this._sparkVel[l*3+1]=h*t,this._sparkVel[l*3+2]=Math.sin(u)*t*(.4+c())}n.needsUpdate=!0}_surfaceContactY(){return .2}_animateHero(e){if(this._hero===void 0)return;const t=this._elapsed/1e3,n=Math.max(0,Math.sin(t*6))*.08,s=this._heroBaseY+Math.sin(t*1.3)*.06-n;if(this._hero.position.y+=(s-this._hero.position.y)*Math.min(1,e*10),this._hero.rotation.y=Math.sin(t*.4)*.18,this._drillLight!==void 0){this._drillLight.position.set(this._hero.position.x,this._surfaceContactY(),this._hero.position.z);const r=.7+Math.max(0,Math.sin(t*12))*1.2;this._drillLight.intensity+=(r-this._drillLight.intensity)*Math.min(1,e*6),this._drillLight.color.lerp(new Ne(12574975),Math.min(1,e*3))}Math.sin(t*12)>.9&&this._elapsed%2<1&&this._emitSparks(3,.5)}_animateSparks(e){if(this._sparks===void 0||this._sparkVel===void 0)return;const t=this._sparks.geometry.attributes.position;for(let n=0;n<t.count;n+=1)this._sparkVel[n*3+1]===0&&t.getY(n)<=.2||(this._sparkVel[n*3+1]-=4*e,t.setX(n,t.getX(n)+this._sparkVel[n*3]*e),t.setY(n,t.getY(n)+this._sparkVel[n*3+1]*e),t.setZ(n,t.getZ(n)+this._sparkVel[n*3+2]*e),t.getY(n)<=.15&&(t.setY(n,.15),this._sparkVel[n*3]=0,this._sparkVel[n*3+1]=0,this._sparkVel[n*3+2]=0));t.needsUpdate=!0}_applyCamera(e){const t=this._elapsed/1e3;let n=0;this._elapsed<this._shakeUntil&&(n=.06*((this._shakeUntil-this._elapsed)/260));const s=Math.sin(t*.25)*.25+Math.sin(t*40)*n,r=4.4+Math.sin(t*.32)*.12+Math.cos(t*37)*n;this._camera.position.x+=(s-this._camera.position.x)*Math.min(1,e*2),this._camera.position.y+=(r-this._camera.position.y)*Math.min(1,e*4),this._camera.lookAt(0,1.2,0),this._flash>0?(this._renderer.toneMappingExposure=1.05+this._flash*1.6,this._flash=Math.max(0,this._flash-e*2.4)):this._renderer.toneMappingExposure+=(1.05-this._renderer.toneMappingExposure)*Math.min(1,e*6)}}const op=1e-10,ro=2,ap=2,iu=1e21,Iu=["K","M","B","T","Qa","Qi"],Nu="∞",qS=Iu.length,Id=10**(3*(qS+1));if(iu!==Id)throw new Error(`formatConfig invariant violated: SCIENTIFIC_THRESHOLD (${iu}) must be one magnitude tier above the top of ABBREVIATION_TABLE (expected ${Id}).`);const cp=0,lp=7,ic=3,Nd=10**ic,Pd=10**1,Dd=Iu.length,up=Object.freeze($o(Ja,ic)),$S=Object.freeze(dt(iu)),hp=Object.freeze($o(Ja,-ro)),YS=`<${hp.toNumber().toFixed(ro)}`,KS=sc(we.toNumber()).toFixed(ro);function jS(i){const e=i.log10(),t=Math.floor((e+op)/ic);return Math.max(cp,Math.min(lp,t))}function Ud(i,e){const t=$o(Ja,ic*e);return i.div(t).toNumber()}function sc(i){return Math.floor(i*100)/100}function Zr(i,e){return i}function su(i,e){let t=Math.floor(i.log10()+op),n=i.div($o(Ja,t)).toNumber();n>=Pd&&(t+=1,n/=Pd);const r=`${sc(n).toFixed(ap)} e+${String(t)}`;return Zr(r)}function dp(i,e,t){let n=jS(i);if(n>=lp)return su(i);let s=Ud(i,n);if(s>=Nd)if(n<Dd)n+=1,s=s/Nd;else return n===Dd?su(i):Nu;s<1&&n>cp&&(n-=1,s=Ud(i,n));const o=`${sc(s).toFixed(t)} ${Iu[n-1]}`;return Zr(o)}function Si(i,e){return an(i)?i.lte(we)?"0":i.lt(up)?i.floor().toNumber().toString():i.gte($S)?su(i):dp(i,e,ap):Nu}function zr(i,e){return e?`${i} ${e}`:i}function Fs(i,e,t){if(!an(i))return zr(Nu,t);if(i.lte(we))return zr(Zr(KS),t);if(i.lt(hp))return zr(Zr(YS),t);if(i.lt(up)){const n=sc(i.toNumber()).toFixed(ro);return zr(Zr(n),t)}return zr(dp(i,e,ro),t)}const ZS=380,JS=900,QS=.19,ey=128,ty=.52,ny=.76,iy=.6;function sy(i,e){const t=i>=JS;return e*(t?ny:iy)}function ry(i){return Math.max(ey,i*QS)}function oy(i,e){return{x:i/2,y:sy(i,e)-ry(e)*ty}}const ay=5;function fp(i){return i.getTotalBaseRate().mul(dt(ay))}function cy(i,e){return dt(i.currencies.credits.tapAmount).add(fp(e))}class ly{constructor(e){Y(this,"_unsubTap");this._unsubTap=e.bus.on(Q.INTENT_TAP_FORGE,()=>{const t=fp(e.generators);t.gt(we)&&e.credits.addOfflineEarnings(t)})}dispose(){this._unsubTap()}}const uy="/stellar-forge-demo/assets/tier1-CGr_rWoD.svg",hy="/stellar-forge-demo/assets/tier2-WDw8Df_T.svg",dy="/stellar-forge-demo/assets/tier3-BgDwCqo5.svg",fy="/stellar-forge-demo/assets/tier4-D0G28S5V.svg",py="/stellar-forge-demo/assets/tier5-Uf4foSHK.svg",my="/stellar-forge-demo/assets/tier6-ClC5JRkf.svg",gy="/stellar-forge-demo/assets/tier7-DZ_6xqdX.svg",_y="/stellar-forge-demo/assets/tier8-UnOtcdr9.svg",vy="/stellar-forge-demo/assets/tier9-wc-XhgwM.svg",xy=[uy,hy,dy,fy,py,my,gy,_y,vy],Ey=250,My=2200,Sy=650,yy=["⬡","⬢","◈","◆","▲","●","◐","✦","❂"],Ty=["x1","x10","xmax"],Od=5,by=5;function Ay(i){const e=Math.floor(i/1e3);if(e<90)return`${e} s`;const t=Math.floor(e/60);return t<90?`${t} min`:`${(t/60).toFixed(1)} h`}function Oe(i,e,t){const n=document.createElement(i);return n.className=e,t!==void 0&&(n.textContent=t),n}class wy{constructor(e){Y(this,"_bus");Y(this,"_credits");Y(this,"_generators");Y(this,"_config");Y(this,"_ascension");Y(this,"_root");Y(this,"_creditsValue");Y(this,"_creditsRate");Y(this,"_tapLine");Y(this,"_modeButtons",new Map);Y(this,"_rows",new Map);Y(this,"_toast");Y(this,"_tapHint");Y(this,"_ascendButton");Y(this,"_ascendDm");Y(this,"_milestoneBadge");Y(this,"_lastMilestoneBurst",-1);Y(this,"_balance");Y(this,"_ratePerSec");Y(this,"_paintScheduled",!1);Y(this,"_lastBuyTier");Y(this,"_tapCount",0);Y(this,"_unsubscribes",[]);Y(this,"_timers",[]);this._bus=e.bus,this._credits=e.credits,this._generators=e.generators,this._config=e.config,this._ascension=e.ascension,this._balance=e.credits.getBalance(),this._ratePerSec=e.credits.getBalance()}mount(e){this._root=e,document.documentElement.style.setProperty("--zone-c-width",`${ZS}px`),e.append(this._buildZoneA(),this._buildZoneC(),this._buildTapHint(),this._buildAscendButton()),this._unsubscribes.push(this._bus.on(Q.CREDITS_UPDATED,t=>{this._balance=t.balance,this._ratePerSec=t.ratePerSec,this._schedulePaint()}),this._bus.on(Q.GENERATOR_PURCHASED,t=>{this._flashRow(t.tier),this._paint()}),this._bus.on(Q.GENERATOR_RATE_CHANGED,t=>{this._floatRateDelta(t.tier,t.rateDelta),this._schedulePaint()}),this._bus.on(Q.BUY_MODE_CHANGED,()=>this._paint()),this._bus.on(Q.PURCHASE_REJECTED,t=>this._onRejected(t.reason)),this._bus.on(Q.INTENT_TAP_FORGE,()=>this._onForgeTapped()),this._bus.on(Q.MILESTONE_REACHED,t=>this._showMilestone(t))),this._paint()}dispose(){for(const e of this._unsubscribes)e();this._unsubscribes.length=0;for(const e of this._timers)clearTimeout(e);this._timers.length=0,this._root!==void 0&&this._root.replaceChildren(),this._rows.clear(),this._modeButtons.clear(),this._ascendButton=void 0,this._ascendDm=void 0,this._milestoneBadge=void 0,this._lastMilestoneBurst=-1}_buildZoneA(){const e=Oe("header","hud-zone-a"),t=Oe("div","hud-brand");t.append(Oe("span","hud-brand-mark","⬡"),Oe("span","hud-brand-name","STELLAR FORGE"));const n=Oe("div","hud-readout");return n.setAttribute("role","status"),n.setAttribute("aria-live","polite"),this._creditsValue=Oe("div","hud-credits","0 Cr"),this._creditsRate=Oe("div","hud-rate","▸ 0.00 Cr/s"),this._tapLine=Oe("div","hud-tap",""),n.append(this._creditsValue,this._creditsRate,this._tapLine),e.append(t,n),e}_buildZoneC(){const e=Oe("aside","hud-zone-c");e.setAttribute("aria-label","Economy panel");const t=Oe("div","hud-buymode");t.setAttribute("role","group"),t.setAttribute("aria-label","Buy quantity mode");for(const r of Ty){const o=Oe("button","hud-buymode-btn",r==="xmax"?"×MAX":`×${r.slice(1)}`);o.type="button",o.addEventListener("click",()=>{this._bus.emit(Q.INTENT_SET_BUY_MODE,{mode:r,source:"pointer"})}),this._modeButtons.set(r,o),t.append(o)}const n=Oe("div","hud-gen-list");for(const r of this._config.generators)n.append(this._buildRow(r.tier,r.name,r.epoch));const s=Oe("footer","hud-footer");return s.append(Oe("div","hud-footer-live","Live economy engine — server-authoritative production"),Oe("div","hud-footer-roadmap","Live: generators · milestones · ascension ✦ Dark Matter tree · offline earnings · cloud save")),e.append(t,n,s),e}_buildRow(e,t,n){const s=Oe("article",`hud-gen-row epoch-${n}`),r=Oe("div","hud-gen-glyph"),o=xy[e-1];if(o!==void 0){const m=document.createElement("img");m.src=o,m.alt="",m.loading="lazy",m.className="hud-gen-icon",r.append(m)}else r.textContent=yy[e-1]??"⬡";const a=Oe("div","hud-gen-info"),c=Oe("div","hud-gen-name",t),l=Oe("div","hud-gen-meta","—");a.append(c,l);const u=Oe("div","hud-gen-milestonewrap"),h=Oe("div","hud-gen-milestone",""),d=Oe("div","hud-gen-progress"),p=[];for(let m=0;m<Od;m+=1){const f=Oe("span","hud-gen-seg");p.push(f),d.append(f)}u.append(h,d);const g=Oe("button","hud-gen-buy","BUY");g.type="button",g.addEventListener("click",()=>{this._lastBuyTier=e,this._bus.emit(Q.INTENT_BUY_GENERATOR,{tier:e,source:"pointer"})});const _=Oe("div","hud-gen-hint","");return s.append(r,a,u,g,_),this._rows.set(e,{root:s,glyph:r,meta:l,milestone:h,segments:p,buy:g,hint:_}),s}_buildTapHint(){const e=Oe("div","hud-tap-hint","TAP THE FORGE");return this._tapHint=e,e}_buildAscendButton(){const e=Oe("button","hud-ascend");e.type="button";const t=Oe("span","hud-ascend-dm","");return e.append(Oe("span","hud-ascend-label","ASCEND"),t,Oe("span","hud-ascend-hint","Collapse the empire into a singularity — restart faster, forever stronger")),e.addEventListener("click",()=>{this._bus.emit(Q.INTENT_CONFIRM_ASCENSION,{source:"pointer"})}),this._ascendButton=e,this._ascendDm=t,e}_showMilestone(e){var r;if(this._root===void 0)return;const t=e.type==="credits_scale"?e.name??"Milestone":`${this._generatorName(e.tier)} ×${e.threshold}`,n=e.type==="credits_scale"?"RANK ACHIEVED":"MILESTONE",s=e.ordinal===e.seriesLength;if(e.burstId!==this._lastMilestoneBurst||this._milestoneBadge===void 0){this._lastMilestoneBurst=e.burstId,(r=this._milestoneBadge)==null||r.remove();const o=Oe("div","hud-milestone");o.append(Oe("div","hud-milestone-eyebrow",n),Oe("div","hud-milestone-title",t)),this._milestoneBadge=o,this._root.append(o),o.offsetWidth,o.classList.add("is-in"),this._timers.push(setTimeout(()=>{o.remove(),this._milestoneBadge===o&&(this._milestoneBadge=void 0)},2600))}else{const o=this._milestoneBadge.querySelector(".hud-milestone-title"),a=this._milestoneBadge.querySelector(".hud-milestone-eyebrow");o!==null&&(o.textContent=t),a!==null&&(a.textContent=n)}if(this._milestoneBadge.classList.toggle("is-peak",s),e.burstSize>1){let o=this._milestoneBadge.querySelector(".hud-milestone-more");o===null&&(o=Oe("div","hud-milestone-more",""),this._milestoneBadge.append(o)),o.textContent=`${e.burstSize} milestones in one surge`}}_generatorName(e){var t;return e===void 0?"Generator":((t=this._config.generators.find(n=>n.tier===e))==null?void 0:t.name)??`Tier ${e}`}_schedulePaint(){this._paintScheduled||(this._paintScheduled=!0,this._timers.push(setTimeout(()=>{this._paintScheduled=!1,this._paint()},Ey)))}_paint(){this._creditsValue.textContent=`${Si(this._balance)} Cr`,this._creditsRate.textContent=`▸ ${Fs(this._ratePerSec,void 0,"Cr/s")}`,this._tapLine.textContent=`⌁ ${Fs(this._tapValue(),void 0,"Cr")} per tap`;const e=this._credits.getBuyMode();for(const[t,n]of this._modeButtons){const s=t===e;n.classList.toggle("is-active",s),n.setAttribute("aria-pressed",String(s))}for(const t of this._config.generators)this._paintRow(t.tier,t.name,e);this._updateAscension()}_updateAscension(){if(this._ascendButton===void 0||this._ascendDm===void 0)return;const e=this._ascension.canAscend();this._ascendButton.classList.toggle("is-visible",e),this._ascendButton.disabled=!e,e&&(this._ascendDm.textContent=`+${Si(this._ascension.getEstimatedDM())} Dark Matter`)}_paintRow(e,t,n){var _,m;const s=this._rows.get(e);if(s===void 0)return;const r=this._generators.isUnlocked(e);if(s.root.classList.toggle("is-locked",!r),!r){s.meta.textContent="Locked",s.milestone.textContent="",s.buy.disabled=!0,s.buy.textContent="LOCKED",s.buy.className="hud-gen-buy is-lockedbtn";const f=this._config.generators.find(T=>T.tier===e-1);s.hint.textContent=f!==void 0?`Own 1 × ${f.name} to unlock`:"";for(const T of s.segments)T.className="hud-gen-seg";return}const o=this._generators.getOwned(e),a=this._generators.getTierRate(e);s.meta.textContent=`×${o} · ${Fs(a,void 0,"Cr/s")}`,s.hint.textContent="";const c=this._config.upgrades.milestones.map(f=>f.ownedCount).sort((f,T)=>f-T),l=c.find(f=>f>o),u=[...c].reverse().find(f=>f<=o)??0;if(l!==void 0){s.milestone.textContent=`→${l} ×2`;const f=(o-u)/(l-u),T=Math.floor(f*Od);s.segments.forEach((b,S)=>{b.className=S<T?"hud-gen-seg is-filled":"hud-gen-seg"})}else{s.milestone.textContent="MAX ×2 tier";for(const f of s.segments)f.className="hud-gen-seg is-filled"}let h;if(n==="x1"?h=1:n==="x10"?h=10:h=this._generators.getMaxAffordable(e,this._balance),h===0){s.buy.disabled=!1,s.buy.textContent="MAX ×0",s.buy.className="hud-gen-buy is-unaffordable";return}const d=this._generators.getCost(e,h),p=this._balance.gte(d),g=n==="xmax"?`MAX ×${h} · ${Si(d)}`:`BUY ${n==="x10"?"×10 · ":""}${Si(d)}`;if(s.buy.disabled=!1,s.buy.textContent=g,s.buy.className=p?"hud-gen-buy is-affordable":"hud-gen-buy is-unaffordable",t!==((m=(_=this._rows.get(e))==null?void 0:_.root.querySelector(".hud-gen-name"))==null?void 0:m.textContent)){const f=s.root.querySelector(".hud-gen-name");f!==null&&(f.textContent=t)}}_onRejected(e){if(e==="insufficient_balance"&&this._lastBuyTier!==void 0){const t=this._rows.get(this._lastBuyTier);t!==void 0&&(t.buy.classList.remove("is-shaking"),t.buy.offsetWidth,t.buy.classList.add("is-shaking"));return}if(e==="qty_zero"){this._showToast("Nothing affordable at ×MAX yet — keep forging");return}this._showToast("Tier locked — own the previous generator first")}_flashRow(e){const t=this._rows.get(e);t!==void 0&&(t.root.classList.add("is-flashing"),this._timers.push(setTimeout(()=>t.root.classList.remove("is-flashing"),Sy)))}_showToast(e){var n;if(this._root===void 0)return;(n=this._toast)==null||n.remove();const t=Oe("div","hud-toast",e);this._toast=t,this._root.append(t),this._timers.push(setTimeout(()=>t.remove(),My))}showWelcomeBack(e){var r;if(this._root===void 0)return;(r=this._root.querySelector(".hud-welcome"))==null||r.remove();const t=Oe("div","hud-welcome");t.setAttribute("role","dialog"),t.setAttribute("aria-label","Offline earnings report");const n=Math.round(e.earningRate*100);t.append(Oe("div","hud-welcome-eyebrow","SYSTEMS REPORT"),Oe("h2","hud-welcome-title","WHILE YOU WERE AWAY"),Oe("div","hud-welcome-amount num",`+${Fs(e.credited,void 0,"Cr")}`),Oe("div","hud-welcome-sub",`${Ay(e.elapsedMs)} away · ${n}% offline rate · your empire kept forging`));const s=Oe("button","hud-welcome-cta","CONTINUE");s.type="button",s.addEventListener("click",()=>t.remove()),t.append(s),this._root.append(t),s.focus(),this._timers.push(setTimeout(()=>t.remove(),12e3))}_onForgeTapped(){if(this._tapCount+=1,this._tapCount>=by&&this._tapHint!==void 0&&this._tapHint.classList.add("is-done"),this._root===void 0||this._prefersReducedMotion())return;const{x:e,y:t}=oy(window.innerWidth,window.innerHeight),n=Oe("span","hud-float",`+${Fs(this._tapValue(),void 0,"Cr")}`),s=(Math.random()-.5)*46;n.style.left=`${e+s}px`,n.style.top=`${t-30}px`,this._root.append(n),this._timers.push(setTimeout(()=>n.remove(),950))}_tapValue(){return cy(this._config,this._generators)}_floatRateDelta(e,t){if(this._prefersReducedMotion())return;const n=this._rows.get(e);if(n===void 0||!t.gt(dt(0)))return;const s=Oe("span","hud-rowfloat",`+${Fs(t,void 0,"Cr/s")}`);n.root.append(s),this._timers.push(setTimeout(()=>s.remove(),1050))}_prefersReducedMotion(){return typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches}}const La="◆",Ry=2400,Cy=700,Fd={forge:{title:"FORGE",tag:"Raw production power",glyph:"◆"},continuum:{title:"CONTINUUM",tag:"Bend time & offline",glyph:"∞"},cortex:{title:"CORTEX",tag:"Automate the empire",glyph:"⚙"}},Bd={forge_t1:"Core Amplifier",forge_t2:"Drone Overclock",forge_capstone:"Singularity Engine",continuum_t1:"Temporal Reservoir",continuum_t2:"Chrono Capacitor",continuum_capstone:"Eternal Continuum",cortex_t1:"Neural Relay",cortex_t2:"Cognition Lattice",cortex_capstone:"Autonomous Cortex"},kd=["","I","II","III","IV","V"];function Ly(i){const e=i.toNumber();return Number.isFinite(e)&&e<1e6?e.toFixed(2):Si(i)}function Fe(i,e,t){const n=document.createElement(i);return n.className=e,t!==void 0&&(n.textContent=t),n}class Iy{constructor(e){Y(this,"_bus");Y(this,"_config");Y(this,"_section");Y(this,"_tree");Y(this,"_dm");Y(this,"_onPurchase");Y(this,"_onRespec");Y(this,"_root");Y(this,"_launcher");Y(this,"_launcherBalance");Y(this,"_modal");Y(this,"_balanceEl");Y(this,"_investedEl");Y(this,"_multiplierEl");Y(this,"_respecBtn");Y(this,"_toast");Y(this,"_cells",new Map);Y(this,"_open",!1);Y(this,"_revealed",!1);Y(this,"_unsubscribes",[]);Y(this,"_timers",[]);Y(this,"_onKeydown",e=>{if(!(!this._open||this._modal===void 0)){if(e.key==="Escape"){this.close();return}e.key==="Tab"&&this._trapTab(e)}});this._bus=e.bus,this._config=e.config,this._section=e.config.dmTree??{nodes:[],respec:{enabled:!1,cost:0,refundNodes:!1},capstonePermanenceActive:!1},this._tree=e.tree,this._dm=e.darkMatter,this._onPurchase=e.onPurchase,this._onRespec=e.onRespec}_trapTab(e){if(this._modal===void 0)return;const t=[...this._modal.querySelectorAll('button:not([disabled]), [tabindex]:not([tabindex="-1"])')];if(t.length===0)return;const n=t[0],s=t[t.length-1],r=document.activeElement,o=r instanceof Node&&this._modal.contains(r);e.shiftKey?(r===n||!o)&&(e.preventDefault(),s.focus()):(r===s||!o)&&(e.preventDefault(),n.focus())}mount(e){this._root=e,e.append(this._buildLauncher()),this._unsubscribes.push(this._bus.on(Q.DARK_MATTER_UPDATED,()=>{this._syncReveal(),this._paintLauncher(),this._open&&this._repaint()}),this._bus.on(Q.DM_UPGRADE_PURCHASED,()=>{this._open&&this._repaint()}),this._bus.on(Q.DM_TREE_CAPSTONE_SELECTED,()=>{this._open&&this._repaint()})),this._syncReveal(),this._paintLauncher()}dispose(){var e,t;for(const n of this._unsubscribes)n();this._unsubscribes.length=0;for(const n of this._timers)clearTimeout(n);this._timers.length=0,document.removeEventListener("keydown",this._onKeydown),(e=this._modal)==null||e.remove(),this._launcher.remove(),(t=this._toast)==null||t.remove(),this._cells.clear(),this._modal=void 0,this._open=!1}_buildLauncher(){const e=Fe("button","dm-launcher");return e.type="button",e.setAttribute("aria-haspopup","dialog"),e.append(Fe("span","dm-launcher-glyph",La),Fe("span","dm-launcher-label","DARK MATTER")),this._launcherBalance=Fe("span","dm-launcher-balance",""),e.append(this._launcherBalance),e.addEventListener("click",()=>this.openPanel()),this._launcher=e,e}_syncReveal(){if(this._revealed)return;const e=dt(0);(this._dm.getBalance().gt(e)||this._dm.getTotalSpent().gt(e))&&(this._revealed=!0,this._launcher.classList.add("is-visible"))}_paintLauncher(){this._launcherBalance.textContent=Si(this._dm.getBalance())}openPanel(){if(this._root===void 0||this._open)return;this._modal===void 0&&(this._modal=this._buildModal()),this._root.append(this._modal),this._open=!0,this._modal.offsetWidth,this._modal.classList.add("is-open"),document.addEventListener("keydown",this._onKeydown),this._repaint();const e=this._modal.querySelector(".dm-close");e==null||e.focus()}close(){!this._open||this._modal===void 0||(this._open=!1,this._modal.classList.remove("is-open"),document.removeEventListener("keydown",this._onKeydown),this._modal.remove(),this._launcher.focus())}_buildModal(){const e=Fe("div","dm-scrim");e.addEventListener("click",n=>{n.target===e&&this.close()});const t=Fe("section","dm-modal");return t.setAttribute("role","dialog"),t.setAttribute("aria-modal","true"),t.setAttribute("aria-label","Dark Matter upgrade tree"),t.append(this._buildHeader(),this._buildBranches(),this._buildFooter()),e.append(t),e}_buildHeader(){const e=Fe("header","dm-header"),t=Fe("div","dm-titles");t.append(Fe("div","dm-eyebrow","META-PROGRESSION"),Fe("h2","dm-title","DARK MATTER"),Fe("p","dm-subtitle","Permanent choices, mapped across the void. Spend to grow forever stronger."));const n=Fe("div","dm-stats");this._balanceEl=Fe("span","dm-stat-value",""),this._investedEl=Fe("span","dm-stat-value",""),this._multiplierEl=Fe("span","dm-stat-value",""),n.append(this._buildStat(`${La} Available`,this._balanceEl),this._buildStat("Invested",this._investedEl),this._buildStat("Tree production",this._multiplierEl));const s=Fe("button","dm-close","✕");return s.type="button",s.setAttribute("aria-label","Close Dark Matter tree"),s.addEventListener("click",()=>this.close()),e.append(t,n,s),e}_buildStat(e,t){const n=Fe("div","dm-stat");return n.append(Fe("span","dm-stat-label",e),t),n}_buildBranches(){const e=Fe("div","dm-branches"),t=[],n=new Map;for(const s of this._section.nodes)n.has(s.branch)||(n.set(s.branch,[]),t.push(s.branch)),n.get(s.branch).push(s);for(const s of t){const r=[...n.get(s)].sort((o,a)=>o.tier-a.tier);e.append(this._buildLane(s,r))}return e}_buildLane(e,t){const n=Fd[e]??{title:e.toUpperCase(),tag:"Upgrade path",glyph:"✦"},s=Fe("div",`dm-lane dm-branch-${e}`),r=Fe("div","dm-lane-head");r.append(Fe("span","dm-lane-glyph",n.glyph),(()=>{const a=Fe("div","dm-lane-titles");return a.append(Fe("div","dm-lane-title",n.title),Fe("div","dm-lane-tag",n.tag)),a})());const o=Fe("div","dm-chain");return t.forEach((a,c)=>{c>0&&o.append(Fe("div","dm-connector")),o.append(this._buildNode(a))}),s.append(r,o),s}_buildNode(e){const t=Fe("article",`dm-node${e.isCapstone?" is-capstone":""}`),n=Fe("div","dm-node-badge",e.isCapstone?"✦":kd[e.tier]??String(e.tier)),s=Fe("div","dm-node-body"),r=Fe("div","dm-node-title",Bd[e.id]??`${e.branch} ${kd[e.tier]??e.tier}`),o=Fe("div","dm-node-effect",this._effectLabel(e)),a=Fe("div","dm-node-levelrow"),c=Fe("span","dm-node-level",""),l=Fe("span","dm-node-pips"),u=[];for(let p=0;p<e.maxLevel;p+=1){const g=Fe("span","dm-pip");u.push(g),l.append(g)}a.append(c,l),s.append(r,o,a),e.isCapstone&&s.append(Fe("div","dm-node-capnote","Capstone — one branch only"));const h=Fe("button","dm-node-action");h.type="button",h.addEventListener("click",()=>this._purchase(e.id));const d=Fe("div","dm-node-status","");return t.append(n,s,h,d),this._cells.set(e.id,{node:e,root:t,level:c,pips:u,action:h,status:d}),t}_buildFooter(){const e=Fe("footer","dm-footer");if(this._section.respec.enabled){const n=this._section.respec.cost,s=n>0?`${La} ${n}`:"free",r=Fe("button","dm-respec",`RESET CAPSTONE CHOICE · ${s}`);r.type="button",r.addEventListener("click",()=>this._respec()),this._respecBtn=r,e.append(r)}return e.append(Fe("div","dm-footer-note","Effects apply permanently across every future Ascension — your production rate updates instantly.")),e}_repaint(){if(this._modal===void 0)return;this._balanceEl!==void 0&&(this._balanceEl.textContent=`${Si(this._dm.getBalance())}`),this._investedEl!==void 0&&(this._investedEl.textContent=`${Si(this._dm.getTotalSpent())}`),this._multiplierEl!==void 0&&(this._multiplierEl.textContent=`×${Ly(this._tree.getExtraGlobalMultiplier())}`);const e=this._tree.getCommittedCapstone();for(const t of this._cells.values())this._paintNode(t,e);this._respecBtn!==void 0&&(this._respecBtn.disabled=e===null,this._respecBtn.classList.toggle("is-armed",e!==null))}_paintNode(e,t){var m;const{node:n,root:s,level:r,pips:o,action:a,status:c}=e,l=this._tree.getNodeLevel(n.id),u=n.maxLevel,h=l>=u,d=n.isCapstone&&t!==null&&t!==n.branch,p=n.prereqs.some(f=>this._tree.getNodeLevel(f)<1),g=this._tree.canPurchase(n.id);if(r.textContent=u>1?`Lv ${l}/${u}`:l>=1?"Owned":"Locked in on purchase",o.forEach((f,T)=>{f.className=T<l?"dm-pip is-filled":"dm-pip"}),s.classList.toggle("is-maxed",h),s.classList.toggle("is-locked",(p||d)&&!h),h){n.isCapstone?(a.textContent="✦ COMMITTED",a.className="dm-node-action is-committed",c.textContent="This branch’s capstone is active"):(a.textContent="✓ MAXED",a.className="dm-node-action is-maxed",c.textContent="Fully upgraded"),a.disabled=!0;return}if(d){const f=((m=Fd[t??""])==null?void 0:m.title)??(t??"").toUpperCase();a.textContent="🔒 LOCKED",a.className="dm-node-action is-rivallocked",a.disabled=!0,c.textContent=`${f} capstone chosen`;return}if(p){const f=Bd[n.prereqs[0]??""]??"the previous node";a.textContent="🔒 LOCKED",a.className="dm-node-action is-prereqlocked",a.disabled=!0,c.textContent=`Unlock ${f} first`;return}const _=this._tree.getNodeCost(n.id);a.textContent=`${La} ${Si(_)}`,a.className=g?"dm-node-action is-affordable":"dm-node-action is-unaffordable",a.disabled=!1,c.textContent=n.isCapstone?"Choosing this locks the other capstones":""}_purchase(e){const t=this._onPurchase(e);if(t.ok){this._pulse(e),this._repaint();return}this._showToast(Ny[t.reason]),t.reason==="insufficient_dm"&&this._shake(e)}_respec(){const e=this._onRespec();this._showToast(e.ok?"Capstone choice reset — pick a new path":Py[e.reason]),e.ok&&this._repaint()}_pulse(e){const t=this._cells.get(e);t!==void 0&&(t.root.classList.remove("is-pulsing"),t.root.offsetWidth,t.root.classList.add("is-pulsing"),this._defer(()=>t.root.classList.remove("is-pulsing"),Cy))}_shake(e){const t=this._cells.get(e);t!==void 0&&(t.action.classList.remove("is-denied"),t.action.offsetWidth,t.action.classList.add("is-denied"),this._defer(()=>t.action.classList.remove("is-denied"),400))}_showToast(e){var n,s;if(this._modal===void 0)return;(n=this._toast)==null||n.remove();const t=Fe("div","dm-toast",e);this._toast=t,(s=this._modal.querySelector(".dm-modal"))==null||s.append(t),this._defer(()=>t.remove(),Ry)}_defer(e,t){const n=setTimeout(()=>{const s=this._timers.indexOf(n);s!==-1&&this._timers.splice(s,1),e()},t);this._timers.push(n)}_effectLabel(e){const t=e.effectParams,n=s=>`${Math.round((s??0)*100)}%`;switch(e.effectType){case"globalMultiplier":return`+${n(t.perLevelBonus)} to ALL production, per level`;case"tierBoost":{const s=this._config.generators.find(r=>r.tier===t.targetTier);return`+${n(t.perLevelBonus)} ${(s==null?void 0:s.name)??`Tier ${t.targetTier}`} output, per level`}case"offlineExtension":return`+${t.capHours??0}h offline cap · +${n(t.rateBonus)} offline rate, per level`;case"automationUnlock":return t.efficiencyBonus!==void 0?`Full automation · +${n(t.efficiencyBonus)} efficiency`:"Automates a production stage — it runs itself";default:return"Permanent upgrade"}}}const Ny={insufficient_dm:"Not enough Dark Matter — Ascend to mint more",locked_prereq:"Unlock the previous node in this branch first",rival_capstone:"Another branch’s capstone is already committed",maxed:"Already fully upgraded",unknown_node:"That upgrade is unavailable"},Py={respec_disabled:"Respec is not available",no_capstone:"No capstone committed yet — nothing to reset",insufficient_dm:"Not enough Dark Matter to respec"};class Dy{constructor(e){Y(this,"_clock");Y(this,"_save");Y(this,"_now");Y(this,"_doc");Y(this,"_hiddenAt",null);Y(this,"_started",!1);Y(this,"_onVisibilityChange",()=>{if(this._doc.visibilityState==="hidden"){this._hiddenAt=this._now(),this._clock.pause(),this._save.resetLastSeen(this._hiddenAt);return}if(this._clock.resume(),this._hiddenAt!==null){const e=this._now()-this._hiddenAt;this._hiddenAt=null,this._clock.reportGap(e)}});this._clock=e.clock,this._save=e.save,this._now=e.now,this._doc=e.doc}start(){this._started||(this._started=!0,this._doc.addEventListener("visibilitychange",this._onVisibilityChange))}dispose(){this._doc.removeEventListener("visibilitychange",this._onVisibilityChange),this._started=!1,this._hiddenAt=null}}const Uy=typeof crypto<"u"&&"randomUUID"in crypto?crypto.randomUUID():`${Date.now()}`;function Oy(){const i=()=>Date.now(),e=eg({configJson:Vu,storage:window.localStorage,now:i,tabId:Uy,autosaveEnv:Xm(window,document)}),{bus:t,clock:n,credits:s,generators:r,ascension:o,dmTree:a,darkMatter:c,save:l}=e,u=new Dy({clock:n,save:l,now:i,doc:document});u.start(),l.startAutosave();const h=Gd(Vu),d=new sg(t),p=document.getElementById("game-root");if(p===null)throw new Error("main: #game-root container missing from index.html");const g=new XS({bus:t,clock:n,input:d,world:{getOwned:L=>r.getOwned(L),generators:h.generators}});g.mount(p);const _=document.getElementById("hud-overlay");if(_===null)throw new Error("main: #hud-overlay container missing from index.html");const m=new wy({bus:t,credits:s,generators:r,config:h,ascension:o});m.mount(_);const f=new Iy({bus:t,config:h,tree:a,darkMatter:c,onPurchase:L=>a.purchase(L),onRespec:()=>a.respecCapstone()});f.mount(_);const T=L=>{L.reason==="brief"||L.diagnostic!==void 0||m.showWelcomeBack({credited:L.baseLump,elapsedMs:L.elapsedSeconds*1e3,earningRate:h.offline.earningRate})},b=t.on(Q.OFFLINE_EARNINGS_APPLIED,T);e.offlineReport!==void 0&&T(e.offlineReport);const S=new ly({bus:t,credits:s,generators:r}),C=t.on(Q.INTENT_CONFIRM_ASCENSION,()=>{o.canAscend()&&o.executeAscension()});let R=0;const w=t.on(Q.CREDITS_UPDATED,()=>{const L=i();L-R>=1e3&&(R=L,l.resetLastSeen(L))});return{dispose(){u.dispose(),l.stopAutosave(),w(),C(),b(),S.dispose(),f.dispose(),m.dispose(),d.clearHitAreas(),g.dispose(),e.dispose()}}}Oy();
