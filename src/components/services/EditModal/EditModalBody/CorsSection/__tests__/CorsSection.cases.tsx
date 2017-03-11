import CorsSection, { ICorsSectionProps } from '../CorsSection';

let Cases : {[id:string]:ICorsSectionProps} = {};

Cases['Default'] = {
  handleAllowedHeadersAdd: function(){},
  handleAllowedHeadersDelete: function(){},
  handleAllowedMethodsAdd: function(){},
  handleAllowedMethodsDelete: function(){},
  handleAllowedOriginsAdd: function(){},
  handleAllowedOriginsDelete: function(){},
  handleExposedHeadersAdd: function(){},
  handleExposedHeadersDelete: function(){},
  allowCredentialsOnChange: function(){},
  optionsPassthroughOnChange: function(){},
  maxAgeOnChange: function() {}
}

Cases['Cors Defined'] = {
  cors: {
    allowedOrigins: ['allowedOrigins1', 'allowedOrigins2'],
    allowedMethods: ['allowedMethods1', 'allowedMethods2'],
    allowedHeaders: ['allowedHeaders1', 'allowedHeaders2'],
    allowCredentials: true,
    optionsPassthrough: false,
    maxAge: true,
    exposedHeaders: ['exposedHeaders1', 'exposedHeaders2'],
  },
  handleAllowedHeadersAdd: function(){},
  handleAllowedHeadersDelete: function(){},
  handleAllowedMethodsAdd: function(){},
  handleAllowedMethodsDelete: function(){},
  handleAllowedOriginsAdd: function(){},
  handleAllowedOriginsDelete: function(){},
  handleExposedHeadersAdd: function(){},
  handleExposedHeadersDelete: function(){},
  allowCredentialsOnChange: function(){},
  optionsPassthroughOnChange: function(){},
  maxAgeOnChange: function() {}
}

export default Cases;