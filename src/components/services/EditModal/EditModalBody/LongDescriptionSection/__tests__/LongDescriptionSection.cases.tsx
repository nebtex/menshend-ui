import LongDescriptionSection, { ILongDescriptionSectionProps } from '../LongDescriptionSection';

let Cases : {[id:string]:ILongDescriptionSectionProps} = {};

  
Cases['Default'] = {
  longDescriptionUrlActiveOnChange: function(){},
  longDescriptionOnChange: function(){},
  longDescriptionUrlOnChange: function(){}
}

Cases['URL Active'] = {
  longDescriptionUrlActive: true,
  longDescriptionUrlActiveOnChange: function(){},
  longDescriptionOnChange: function(){},
  longDescriptionUrlOnChange: function(){}
}

Cases['URL Error'] = {
  longDescriptionUrlActive: true,
  longDescriptionUrlError: true,
  longDescriptionUrl: 'my-non-valid-url',
  longDescriptionUrlActiveOnChange: function(){},
  longDescriptionOnChange: function(){},
  longDescriptionUrlOnChange: function(){}
}

Cases['URL Inactive'] = {
  longDescriptionUrlActive: false,
  longDescriptionUrlActiveOnChange: function(){},
  longDescriptionOnChange: function(){},
  longDescriptionUrlOnChange: function(){}
}

export default Cases;