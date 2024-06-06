import { GreyCat, IndexedDbCache } from '@greycat/web';
import '../../components/app-layout';
import './app-home';
import { projectlib } from '../../common/project';

// initialize GreyCat
greycat.default = await GreyCat.init({
  cache: new IndexedDbCache('greycat.default'),
  libraries: [projectlib],
  unauthorizedHandler: () => location.assign('../login.html'),
});
const layout = document.createElement('app-layout');

layout.parent = '..';
layout.current = '.';
document.body.appendChild(layout);

const home = document.createElement('app-home');

layout.main.appendChild(home);
