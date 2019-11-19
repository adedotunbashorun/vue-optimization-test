import Vue from 'vue';
import upperFirst from 'lodash/upperCase';
import camelCase from 'lodash/camelCase';

const requireComponent = require.context('.', false,/base-[/w-]+\.vue$/);

requireComponent.keys().forEach(fileName => {

    //get Component Config

    const componentConfig = requireComponent(fileName);

    const componentName = upperFirst(camelCase(fileName.replace(/^\.\//,'').replace(/\.\w+$/,'')));



    Vue.component(componentName, componentConfig.default || componentConfig);
    
});

export default requireComponent;