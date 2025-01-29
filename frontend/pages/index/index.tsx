import '../../components/app-layout';
import './app-home';

// initialize GreyCat SDK
await gc.sdk.init();
const layout = document.createElement('app-layout');

layout.parent = '..';
layout.current = '.';
document.body.appendChild(layout);

const home = document.createElement('app-home');

layout.main.appendChild(home);
