// Generic function to add row
function addRow(tableBodyId, cellsHtml) {
    const body = document.getElementById(tableBodyId);
    const row = document.createElement('tr');
    row.innerHTML = cellsHtml;
    body.appendChild(row);

    // Attach delete
    const delBtn = row.querySelector('.delete-btn');
    delBtn?.addEventListener('click', () => row.remove());
}

// Fermentable
document.getElementById('add-fermentable').addEventListener('click', () => {
    addRow('fermentable-body', `
    <td class="border border-black px-2 py-1">
    <select class="w-full border-none outline-none">
        <option value="">Select Fermentable</option>
        <option value="fermentable1">Fermentable 1</option>
        <option value="fermentable2">Fermentable 2</option>
        <option value="fermentable3">Fermentable 3</option>
    </select>
    </td>
    <td class="border border-black px-2 py-1">
        <input type="number" class="w-full border-none outline-none" step="0.01">
    </td>
    <td class="border border-black px-2 py-1">
        <input type="number" class="w-full border-none outline-none" step="0.1">
    </td>
    <td class="border border-black px-2 py-1 text-center">
        <button class="delete-btn text-xs hover:text-red-600">Delete</button>
    </td>
    `);
});

// Hops
document.getElementById('add-hop').addEventListener('click', () => {
    addRow('hop-body', `
    <td class="border border-black px-2 py-1">
    <select class="w-full border-none outline-none">
        <option value="">Select Hops</option>
        <option value="hop1">Hops1</option>
        <option value="hop2">Hops2</option>
        <option value="hop3">Hops3</option>
    </select>
    </td>
    <td class="border border-black px-2 py-1"><input type="number" class="w-full border-none outline-none" step="0.1"></td>
    <td class="border border-black px-2 py-1"><input type="number" class="w-full border-none outline-none" step="1"></td>
    <td class="border border-black px-2 py-1">
        <select class="w-full border-none outline-none">
        <option value="">Select</option>
        <option value="boil">Boil</option>
        <option value="whirlpool">Whirlpool</option>
        <option value="dry-hop">Dry Hop</option>
        </select>
    </td>
    <td class="border border-black px-2 py-1"><input type="number" class="w-full border-none outline-none" step="0.1" readonly></td>
    <td class="border border-black px-2 py-1 text-center"><button class="delete-btn text-xs hover:text-red-600">Delete</button></td>
    `);
});

// Additives
document.getElementById('add-additive').addEventListener('click', () => {
    addRow('additive-body', `
    <td class="border border-black px-2 py-1">
    <select class="w-full border-none outline-none">
        <option value="">Select Additives</option>
        <option value="additive1">Additive 1</option>
        <option value="additive2">Additive 2</option>
        <option value="additive3">Additive 3</option>
    </select>
    </td>
    <td class="border border-black px-2 py-1"><input type="text" class="w-full border-none outline-none"></td>
    <td class="border border-black px-2 py-1"><input type="text" class="w-full border-none outline-none"></td>
    <td class="border border-black px-2 py-1">
        <select class="w-full border-none outline-none">
        <option value="">Select</option>
        <option value="mash">Mash</option>
        <option value="boil">Boil</option>
        <option value="fermentation">Fermentation</option>
        </select>
    </td>
    <td class="border border-black px-2 py-1 text-center"><button class="delete-btn text-xs hover:text-red-600">Delete</button></td>
    `);
});

// Mash
document.getElementById('add-mash').addEventListener('click', () => {
    const body = document.getElementById('mash-body');
    const stepNo = body.children.length + 1;
    addRow('mash-body', `
    <td class="border border-black px-2 py-1"><input type="number" class="w-full border-none outline-none" value="${stepNo}" readonly></td>
    <td class="border border-black px-2 py-1"><input type="text" class="w-full border-none outline-none" placeholder="Step name"></td>
    <td class="border border-black px-2 py-1"><input type="number" class="w-full border-none outline-none" step="0.1"></td>
    <td class="border border-black px-2 py-1"><input type="number" class="w-full border-none outline-none" step="1"></td>
    <td class="border border-black px-2 py-1 text-center"><button class="delete-btn text-xs hover:text-red-600">Delete</button></td>
    `);
});

// Nav highlight
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', e => {
    document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('bg-gray-100'));
    item.classList.add('bg-gray-100');
    });
});