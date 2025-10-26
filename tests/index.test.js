/**
 * @jest-environment jsdom
 * 
 * Märkus: see rida ütleb Jestile, et testid jooksevad JS DOM-is,
 * mitte Node keskkonnas. See võimaldab meil kasutada document,
 * getElementById jne.
 */

const fs = require('fs');   // Failisüsteemi moodul HTML laadimiseks
const path = require('path'); // Failiteede käsitlemiseks

beforeEach(() => {
  // 1️⃣ Laeme HTML-i otse index.html failist enne iga testi
  // See tagab, et igas testis on puhas, algne DOM
  const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
  document.documentElement.innerHTML = html;

  // 2️⃣ Eemaldame juba laetud index.js mooduli, et require uuesti töötaks
  // see on oluline, sest muidu lisanduvad sündmuse kuulajad korduvad
  jest.resetModules();

  // 3️⃣ Laadime index.js, mis lisab click event listenerid nuppudele
  require('../src/index.js');
});

describe('Add row buttons', () => {
  // 🔹 Test: add-hop nupp lisab ühe rea tabelisse
  test('add-hop nupp lisab ühe rea', () => {
    const button = document.getElementById('add-hop'); // leiame nuppu
    button.click(); // simuleerime klikki

    const tbody = document.getElementById('hop-body'); // tbody kuhu rida lisatakse
    expect(tbody.children.length).toBe(1); // kontrollime, et rida lisandus

    const delBtn = tbody.querySelector('.delete-btn'); // kontrollime delete-nuppu
    expect(delBtn).not.toBeNull(); // delete-nupp peab olemas olema
  });

  // 🔹 Test: add-additive nupp lisab ühe rea tabelisse
  test('add-additive nupp lisab ühe rea', () => {
    const button = document.getElementById('add-additive');
    button.click();

    const tbody = document.getElementById('additive-body');
    expect(tbody.children.length).toBe(1);

    const delBtn = tbody.querySelector('.delete-btn');
    expect(delBtn).not.toBeNull();
  });

  // 🔹 Test: add-mash nupp lisab ühe rea tabelisse
  test('add-mash nupp lisab ühe rea', () => {
    const button = document.getElementById('add-mash');
    button.click();

    const tbody = document.getElementById('mash-body');
    expect(tbody.children.length).toBe(1);

    const delBtn = tbody.querySelector('.delete-btn');
    expect(delBtn).not.toBeNull();
  });

  // 🔹 Test: add-fermentable nupp lisab ühe rea tabelisse
  test('add-fermentable nupp lisab ühe rea', () => {
    const button = document.getElementById('add-fermentable');
    button.click();

    const tbody = document.getElementById('fermentable-body');
    expect(tbody.children.length).toBe(1);

    const delBtn = tbody.querySelector('.delete-btn');
    expect(delBtn).not.toBeNull();
  });
});
