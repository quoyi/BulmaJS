import Bulma from './core';

import Notification from './plugins/notification';
Bulma.registerPlugin('notification', Notification);

import Navbar from './plugins/navbar';
Bulma.registerPlugin('navbar', Navbar);

Bulma.traverseDOM();
window.Bulma = Bulma;
