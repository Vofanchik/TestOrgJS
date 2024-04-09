import { PassCardWidget } from './widget';

const container = document.querySelector('.container');
const form = new PassCardWidget(container);


form.bindToDOM();
