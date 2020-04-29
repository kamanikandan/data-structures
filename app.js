function Node(value) {
  this.value = value;
  this.next = null;
}

let head = null,
  tail = null;

function append(value) {
  const newNode = new Node(value);

  if (!head) {
    head = newNode;
    tail = newNode;
  }

  tail.next = newNode;
  tail = newNode;
}

function prepend(value) {
  const newNode = new Node(value);
  newNode.next = head;
  head = newNode;

  if (!tail) {
    tail = newNode;
  }
}

// prepend(10);
// prepend(1);
// prepend(3);
// prepend(20);

// append(50);
// prepend(100);

const formEl = document.querySelector('#form');
const appendTxt = document.querySelector('#append');
const prependTxt = document.querySelector('#prepend');
formEl.addEventListener('submit', (e) => {
  e.preventDefault();
  if (prependTxt.value) {
    prepend(prependTxt.value);

    const el = document.querySelector('#root');

    el.innerHTML = `
    <code>
    HEAD: ${JSON.stringify(head)}<br />
    NEW OBJ: ${JSON.stringify(tail)}<br />
    </code>
`;

    prependTxt.value = '';
  }
  //   if (prependTxt.value) {
  //     prepend(prependTxt.value);
  //   }
});

const firstUniqueChar = (s) => {
  const hashTable = {};

  for (const char of s) {
    if (hashTable[char]) hashTable[char]++;
    else hashTable[char] = 1;
  }

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (hashTable[char] === 1) return i;
  }

  return -1;
};

const firstUniqueChar = (s) => {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i]))
      return { index: i, char: s[i] };
  }
  return -1;
};

console.log(firstUniqueChar('aaadddc'));
