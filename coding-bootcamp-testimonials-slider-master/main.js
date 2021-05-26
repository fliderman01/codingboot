const right = document.querySelector('#right'); // მარჯვენა ღილაკი
const left = document.querySelector('#left'); // მარცხენა ღილაკი

// მარჯვენა ღილაკი
right.addEventListener('click', (e) => {
    document.querySelector('#tanya').style.display = 'none'; // ტანიას პარაგრაფის გაქრობა
    document.querySelector('#john').style.display = 'initial'; // ჯონის პარაგრაფის გაჩენა
    document.querySelector('#engineer').style.display = 'none'; // ტანიას ფოტოს გაქრობა
    document.querySelector('#developer').style.display = 'initial'; // ჯონის ფოტოს გაჩენა
  });

// მარცხენა ღილაკი
  left.addEventListener('click', (e) => {
    document.querySelector('#tanya').style.display = 'initial'; // ტანიას პარაგრაფის გაჩენა
    document.querySelector('#john').style.display = 'none'; // ჯონის პარაგრაფის გაქრობა
    document.querySelector('#engineer').style.display = 'initial'; // ტანიას ფოტოს გაჩენა
    document.querySelector('#developer').style.display = 'none'; // ჯონის ფოტოს გაქრობა
  });