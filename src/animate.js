import { focusTextArea, ta1 } from './text-area.js';

let animationInterval = null;
export function animateKeystrokes(items) {
  if(animationInterval) {
    window.clearInterval(animationInterval);
    animationInterval = null;
  }
  let n = 0;
  animationInterval = setInterval(function() {
    let isUp = n%2;
    let index = Math.trunc(n / 2);

    if(isUp) {
      releaseKey(items[index].key.key);
    }

    if(index >= items.length) {
      if(index > 0) items[index-1].element.className = '';
      window.clearInterval(animationInterval);
      animationInterval = null;
      return;
    }

    if(!isUp) {
      pressKey(items[index].key.key);
      items[index].element.className = 'animated-active';
      if(index > 0) items[index-1].element.className = '';
    }
    n++;
  }, 450);
  ta1.value = '';
  focusTextArea();
  // alert(JSON.stringify(items));
}

function pressKeyElement(id, down, longpress, popup, dragTo = null, isFlick = false) {
  const element = document.getElementById(id);
  if(!element) return;

  const x = keyman.util.getAbsoluteX(element);
  const y = keyman.util.getAbsoluteY(element);
  if(down) {
    element.style.background = 'green';
    if(popup) {
      element.dispatchEvent(new MouseEvent('mousemove', {clientX: x, clientY: y, bubbles: true, buttons: 1}));
    } else if (isFlick) {
      element.dispatchEvent(new MouseEvent('mousedown', {clientX: x, clientY: y, buttons: 1}));
      // Simulate drag down (just move cursor downward a bit)
      element.dispatchEvent(new MouseEvent('mousemove', {clientX: x,clientY: y + 60, bubbles: true, buttons: 1}));
    } else if(longpress) {
      element.dispatchEvent(new MouseEvent('mousedown', {clientX: x, clientY: y, buttons: 1}));
    } else {
      element.dispatchEvent(new MouseEvent('mousedown', {clientX: x, clientY: y, buttons: 1}));
      element.dispatchEvent(new MouseEvent('mouseup',{clientX: x, clientY: y, buttons: 1}));
    }
  } else {
    element.style.background = '';
    if(popup) {
      element.dispatchEvent(new MouseEvent('mouseup',{clientX: x, clientY: y, buttons: 1}));
    }
    else{
      element.dispatchEvent(new MouseEvent('mouseup',{clientX: x, clientY: y, buttons: 1}));
    }
  }
}

let lastLongpress = null;

function pressKey(key) {
  if(Array.isArray(key)) {
    const type = key[0];
    const base = key[1];

    if (type === 'longpress') {
      pressKeyElement(base, true, true);
      lastLongpress = key;
    } else if(type === 'popup') {
      pressKeyElement(base, true, false, true);

    } else if(type === 'flickstart') {
      pressKeyElement(base, true, false, false, null, true);
      lastLongpress = ['longpress', base]; 

    } else if(type === 'flickpopup') {
      pressKeyElement(base, true, false, true);

    } else if(type === 'modifier') {
      keyman.osk.vkbd.layerId = 'shift';
      pressKeyElement(base, true);

    } else {
      // TODO: assuming SHIFT only for now
      keyman.osk.vkbd.layerId='shift';
      pressKeyElement(/*'shift-K_'+*/key[1]/*.toUpperCase()*/, true);
    }
    // pressKeyElement('default-K_SHIFT', false);
  } else {
    // key only
    pressKeyElement(/*'default-K_'+*/key/*.toUpperCase()*/, true);
  }
}

function releaseKey(key) {
  if(Array.isArray(key)) {
    const type = key[0];
    const base = key[1];

    if(type === 'popup' || type === 'flickpopup') {
      pressKeyElement(base, false, false, true);
      if(lastLongpress) {
        pressKeyElement(lastLongpress[1], false, true);
        lastLongpress = null;
      }
    } else if(type !== 'longpress' && type !== 'flickstart') {
      pressKeyElement(base, false);
      keyman.osk.vkbd.layerId='default';
    }
    // pressKeyElement('shift-K_SHIFT', true);
    // pressKeyElement('shift-K_SHIFT', false);
  } else {
    // key only
    pressKeyElement(key, false);
  }
}