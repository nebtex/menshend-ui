import FullModal, { IFullModalProps } from '../FullModal';

let Cases : {[id:string]:IFullModalProps} = {};

Cases['Default'] = {
    className: "test",
    isOpen: true, 
    toggle: function(){},
    title: "Modal"
};


Cases['Modal is closed'] = {
    className: "test",
    isOpen: false, 
    toggle: function(){},
    title: "Modal"
};
export default Cases;