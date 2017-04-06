import FullModal, { IMonacoProps } from '../Monaco';

let Cases: { [id: string]: IMonacoProps } = {};

Cases['Default'] = {
    width: "100%",
    height: "100%",
    language: 'yaml',
    theme: 'vs'
};

export default Cases;