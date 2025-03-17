const createButton = document.getElementById('create-item');
const cardsSection = document.getElementById('cards');

createButton.addEventListener('click', () => {
//     const section = document.createElement('section');
// section.classList.add('item-card');

// const div1 = document.createElement('div');

// const h1 = document.createElement('h1');
// h1.textContent = 'ITEM NAME';

// const p1 = document.createElement('p');
// p1.textContent = 'PRICE: ';

// const p2 = document.createElement('p');
// p2.textContent = 'DESCRIPTION:';

// const div2 = document.createElement('div');

// const p3 = document.createElement('p');
// p3.textContent = 'LINK:';

// const a = document.createElement('a');

// div2.appendChild(p3);
// div2.appendChild(a);

// div1.appendChild(h1);
// div1.appendChild(p1);
// div1.appendChild(p2);
// div1.appendChild(div2);

// const div3 = document.createElement('div');
// div3.classList.add('image');

// const button = document.createElement('button');
// button.textContent = 'MODIFY';
// button.classList.add('modify');

// section.appendChild(div1);
// section.appendChild(div3);
// section.appendChild(button);

//     cardsSection.appendChild(section);


const section = document.createElement('section');
section.classList.add('menu-overlay');

const menuCard = document.createElement('div');
menuCard.classList.add('menu-card');

const form = document.createElement('form');
form.id = 'ticket-form';

const itemNameDiv = document.createElement('div');
const itemPriceDiv = document.createElement('div');
const itemDescriptionDiv = document.createElement('div');
const itemLinkDiv = document.createElement('div');

const itemNameLabel = document.createElement('label');
itemNameLabel.setAttribute('for', 'itemName');
itemNameLabel.textContent = 'Item Name';
const itemNameInput = document.createElement('input');
itemNameInput.type = 'text';
itemNameInput.placeholder = "Enter item name here"

itemNameDiv.appendChild(itemNameLabel);
itemNameDiv.appendChild(itemNameInput);

const itemPriceLabel = document.createElement('label');
itemPriceLabel.setAttribute('for', 'itemPrice');
itemPriceLabel.textContent = 'Item Price';
const itemPriceInput = document.createElement('input');
itemPriceInput.type = 'text';
itemPriceInput.placeholder = "Enter item price here"

itemPriceDiv.appendChild(itemPriceLabel);
itemPriceDiv.appendChild(itemPriceInput);

const itemDescriptionLabel = document.createElement('label');
itemDescriptionLabel.setAttribute('for', 'itemDescription');
itemDescriptionLabel.textContent = 'Item Description';
const itemDescriptionInput = document.createElement('input');
itemDescriptionInput.type = 'text';
itemDescriptionInput.placeholder = "Enter Item description here"

itemDescriptionDiv.appendChild(itemDescriptionLabel);
itemDescriptionDiv.appendChild(itemDescriptionInput);

const itemLinkLabel = document.createElement('label');
itemLinkLabel.setAttribute('for', 'ItemLink');
itemLinkLabel.textContent = 'Item Link';
const itemLinkInput = document.createElement('input');
itemLinkInput.type = 'text';
itemLinkInput.placeholder = "Enter item link here"
itemLinkDiv.appendChild(itemLinkLabel);
itemLinkDiv.appendChild(itemLinkInput);

const submitButton = document.createElement('button');
submitButton.type = 'submit';
submitButton.textContent = 'ADD TICKET';

form.appendChild(itemNameDiv);
form.appendChild(itemPriceDiv);
form.appendChild(itemDescriptionDiv);
form.appendChild(itemLinkDiv);
form.appendChild(submitButton);

menuCard.appendChild(form);

section.appendChild(menuCard);

document.body.appendChild(section);

})