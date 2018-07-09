var Enzyme = require('enzyme');
var Adapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new Adapter() });

window.rfConfig = window.rfConfig || {};

const context = require.context('./src', true, /-test\.js$/);
context.keys().forEach(context);
