import SecretPathsSection, { ISecretPathsSectionProps } from '../SecretPathsSection';

let Cases : {[id:string]:ISecretPathsSectionProps} = {};


Cases['Default'] = {
  handleSecretPathsAdd: function(){},
  handleSecretPathsDelete: function(){}
}

Cases['Data defined'] = {
  secretPaths: ['secretPath1', 'secretPath2', 'secretPath3'],
  handleSecretPathsAdd: function(){},
  handleSecretPathsDelete: function(){}
}

export default Cases;