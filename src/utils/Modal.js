export const ShowModal = () => {
  const modalEl = document.getElementById("modal");
  modalEl.showModal();
};

export const CloseModal = () => {
  const modalEl = document.getElementById("modal");
  modalEl.close();
};

export const imgShow = () => {
  const imgEl = document.getElementById("img");
  imgEl.showModal();
};

export const imgClose = () => {
  const imgEl = document.getElementById("img");
  imgEl.close();
};
