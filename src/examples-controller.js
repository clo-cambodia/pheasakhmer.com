import arrayShuffle from '../lib/array-shuffle/index.js';

import { register, translate } from './i18n.js';
import { animateKeystrokes } from './animate.js';
import { DropdownMenu } from './dropdown-menu.js';
import { focusTextArea } from './text-area.js';
import { isTouchDevice, isTablet, currentDevice } from './device.js';
import { examples } from './examples.js';

const examplesDropdown = new DropdownMenu('examples');

function fillExamples(t) {
  examplesDropdown.removeAll();
  for(let i = 0; i < examples.length; i++) {
    const example = examples[i];
    example.alternates = arrayShuffle(example.alternates);
    example.description = t('example-'+example.id);
    examplesDropdown.add('#example'+i.toString(), example.text + ' ' + example.description);
  }

  examplesDropdown.set(window.sessionStorage.getItem('current-example') ?? '#example0'); //'#example0');
  showCurrentExample();
}

register(fillExamples);

export function showCurrentExample() {
  const value = examplesDropdown.get();
  const index = Number.parseInt(value.substring('#example'.length));
  showExample(index);
  window.sessionStorage.setItem('current-example', value);
}

examplesDropdown.onclick = () => {
  showCurrentExample();
};

function keysToHtml(keys) {
  const html = [];
  for(let key of keys) {
    const cap = Array.isArray(key.cap) ? key.cap : [key.cap];
    html.push( '<span>' + cap.map(k => `<kbd>${k}</kbd>`).join('+') + '</span>');
    if(key.longpress) {
      html.push('⬆');
    }else if(key.flick) {
      html.push('⬇');
    }
     else {
      html.push(' ');
    }
  }
  return html.join('');
}

function addShowMeButton(colKeys, keys) {
  const btnShowMe = document.createElement('button');
  btnShowMe.className = 'btn btn-sm btn-outline-primary example-try-it-button';
  btnShowMe.innerHTML = "<span class='bi-keyboard'></span> " + translate('example-try-it');
  btnShowMe.addEventListener('click', function() {
    const items = [];
    let n = 0;
        // colKeys.chi
    for(const child of colKeys.children) {
      if(child.tagName == 'SPAN' && keys[n]) {
        items.push({element: child, key: keys[n++]});
      }
    }
    animateKeystrokes(items);
  });
  return btnShowMe;
}

function addInfoButton(example, alt, keysHTML) {
  const btnInfo = document.createElement('button');
  btnInfo.className = 'btn btn-sm btn-outline-primary example-info-button';
  btnInfo.innerHTML = '<span class="bi-question-octagon"></span> '+translate('example-info');
  btnInfo.addEventListener('click', function() {
    // Show the info popup
    let exampleInfoModal = new bootstrap.Modal(document.getElementById('example-info-modal'));
    const desc = translate(`example-${example.id}`, {interpolation:{escapeValue: false}});
    document.getElementById('example-info-keys').innerHTML = keysHTML;
    document.getElementById('example-info-title').innerHTML =
      example.text + (desc ? (', ' + desc) : '');
    document.getElementById('example-info-content').innerHTML = translate(`example-${example.id}-alt-${alt.id}`, {interpolation:{escapeValue: false}});

    // hide the render for the default example, because it's "correct" already
    // also hide the render for confusing alternates (word-khmer#2, detect#2)
    document.getElementById('example-info-render').style.display =
      alt.id == 1 ||
      (alt.id == 2 && example.id == 'word-khmer') ||
      (alt.id == 2 && example.id == 'detect')
      ? 'none'
      : '';
    document.getElementById('example-info-today').innerHTML = alt.text;
    document.getElementById('example-info-future').innerHTML = alt.text;
    exampleInfoModal.show();
  });
  return btnInfo;
}

function getActiveKeyboardAndForm() {
  if(keyman.getActiveKeyboard() == 'Keyboard_basic_kbdkni') {
    if(!isTouchDevice() && (currentDevice == 'Windows' || currentDevice == 'macOS' || currentDevice == 'Linux')) {
      return 'keys_nida_desktop';
    }
    if(isTablet()) {
      return 'keys_nida_tablet';
    }
    return 'keys_nida';
  }

  if(keyman.getActiveKeyboard() == 'Keyboard_khmer_angkor') {
    if(!isTouchDevice() && (currentDevice == 'Windows' || currentDevice == 'macOS' || currentDevice == 'Linux')) {
      return 'keys_angkor_desktop';
    }
    if(isTablet()) {
      return 'keys_angkor_tablet';
    }
    return 'keys_angkor_mobile';
  }

  return 'keys_nida'; // TODO: this is a bit of an assumption
}

function showExample(index) {
  const example = examples[index];

  document.getElementById('examples-body').innerHTML = '';
  document.getElementById('examples-tabs').innerHTML = '';
  document.getElementById('selected-example').innerHTML = example.text +
    (example.description ? (', ' + example.description) : '');

  // Add table of examples

  const active_key = getActiveKeyboardAndForm();

  const examplesBody = document.getElementById('examples-body');

  const examplesList = document.createElement('div');
  examplesList.className = 'align-self-stretch';
  examplesList.id = 'examples-list';
  examplesBody.appendChild(examplesList);

  const sampleText = document.createElement('div');
  sampleText.className = 'align-self-stretch';
  sampleText.id = 'sample-text';
  sampleText.innerText = example.text;
  examplesBody.appendChild(sampleText);

  let n = 1;
  for(let alt of example.alternates) {
    const active_example = alt[active_key] ?? alt.keys_nida;

    const keysHTML = keysToHtml(active_example);

    const row = document.createElement('div');
    row.className = 'row';
    row.id='example-'+alt.id;

    const colKeys = document.createElement('div');
    colKeys.className = 'col-md';
    colKeys.innerHTML = keysHTML;

    const buttons = document.createElement('span');
    buttons.className = 'example-buttons';
    const btnShowMe = addShowMeButton(colKeys, active_example);
    buttons.appendChild(btnShowMe);
    const btnInfo = addInfoButton(example, alt, keysHTML);
    buttons.appendChild(btnInfo);
    colKeys.appendChild(buttons);
    row.appendChild(colKeys);

    examplesList.appendChild(row);

    // Add tab

    const li = document.createElement('li');
    li.className = 'nav-item';
    const a = document.createElement('a');
    a.className = 'nav-link';
    a.id = `example-tab-${n}`;
    a.href='#';
    ((n) => a.addEventListener('click', event => { showExampleRow(n); event.preventDefault(); return false; } ))(n);
    li.appendChild(a);
    const span = document.createElement('span');
    span.className = `bi-${n}-square-fill`;
    a.appendChild(span);

    document.getElementById('examples-tabs').appendChild(li);

    n++;
  }

  showExampleRow(1);
};

function showExampleRow(index) {
  const items = document.querySelectorAll('#examples-body .row');
  for(let item of items) {
    item.classList.remove('active');
  }
  document.querySelector(`#examples-body #example-${index}`).classList.add('active');

  const tabs = document.querySelectorAll('#examples-tabs a');
  for(let item of tabs) {
    item.classList.remove('active');
  }
  document.querySelector(`#examples-tabs #example-tab-${index}`).classList.add('active');
  focusTextArea();
}

