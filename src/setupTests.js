import '@testing-library/jest-dom';

// jsdom has no native dialog implementation; browser tests cover its focus behavior.
HTMLDialogElement.prototype.showModal = function () {
  this.setAttribute('open', '');
};
HTMLDialogElement.prototype.close = function () {
  this.removeAttribute('open');
};

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  }),
});

global.IntersectionObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};

global.ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};
