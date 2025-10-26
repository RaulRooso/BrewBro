/**
 * @jest-environment jsdom
 *
 * Testid nuppudele, mis lisavad ridu tabelitesse.
 * JS DOM simuleerib brauseri keskkonda Node.js-is.
 */

const fs = require('fs');    // HTML faili lugemiseks
const path = require('path'); // Failiteede käsitlemiseks

beforeEach(() => {
  // Laeme HTML-i enne iga testi
  const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
  document.documentElement.innerHTML = html;

  // Eemaldame juba laetud index.js, et require uuesti töötaks
  jest.resetModules();

  // Laadime index.js, mis lisab click event listenerid nuppudele
  require('../src/index.js');
});

describe('Add row buttons', () => {
  const buttons = [
    { id: 'add-hop', tbody: 'hop-body' },
    { id: 'add-additive', tbody: 'additive-body' },
    { id: 'add-mash', tbody: 'mash-body' },
    { id: 'add-fermentable', tbody: 'fermentable-body' },
  ];

  buttons.forEach(({ id, tbody }) => {
    test(`${id} lisab ühe rea`, () => {
      const button = document.getElementById(id);
      button.click();

      const tableBody = document.getElementById(tbody);
      expect(tableBody.children.length).toBe(1);

      const delBtn = tableBody.querySelector('.delete-btn');
      expect(delBtn).not.toBeNull();
    });
  });
});
