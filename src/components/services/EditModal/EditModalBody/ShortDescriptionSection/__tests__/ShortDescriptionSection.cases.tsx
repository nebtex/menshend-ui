import ShortDescriptionSection, { IShortDescriptionSectionProps } from '../ShortDescriptionSection';

let Cases : {[id:string]:IShortDescriptionSectionProps} = {};

Cases['Default'] = {
  shortDescriptionOnChange: function(){}
}

Cases['Data defined'] = {
  shortDescription: 'This is my service short description',
  shortDescriptionOnChange: function(){}
}

export default Cases;