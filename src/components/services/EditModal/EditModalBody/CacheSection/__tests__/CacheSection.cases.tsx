import CacheSection, { ICacheSectionProps } from '../CacheSection';

let Cases : {[id:string]:ICacheSectionProps} = {};

//@TODO: set the corresponding cases

Cases['Default'] = {
  ttlOnChange: function(){},
  cacheActiveOnChange: function(){},
}

Cases['Cache defined'] = {
  ttlOnChange: function(){},
  cacheActiveOnChange: function(){},
  cache:{
    ttl: 240,
    active: true
  }
}

export default Cases;