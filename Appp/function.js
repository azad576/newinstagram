const sendata = (key, datas) => {
  let lsdat = [];
  if (localStorage.getItem(key)) {
    lsdat = JSON.parse(localStorage.getItem(key));
  }
  lsdat.push(datas);
  localStorage.setItem(key, JSON.stringify(lsdat));
};
// get loca data

const getdat = (key) => {
  let lsdat = [];
  if (localStorage.getItem(key)) {
    return JSON.parse(localStorage.getItem(key));
  } else {
    return lsdat;
  }
};

//alert

const createalert = (msg, type = `danger`) => {
  return `
  <p class="d-flex justify-content-between  alert alert-${type}">${msg}<button data-bs-dismiss="alert" class="btn-close"></button></p>
  `;
};
