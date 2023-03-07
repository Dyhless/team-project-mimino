(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-room-main-open]'),
    closeModalBtn: document.querySelector('[data-modal-room-main-close]'),
    modal: document.querySelector('[data-modal-room-main]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    const isModalOpen = refs.openModalBtn.getAttribute('aria-expanded') === 'true' || false;
    refs.openModalBtn.setAttribute('aria-expanded', !isModalOpen);
    refs.modal.classList.toggle('is-hidden');

    const scrollLockMethod = !isModalOpen ? 'disableBodyScroll' : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  }
})();

(() => {
  const refs = {
     openModalBtn: document.querySelector('[data-modal-room-room-open]'),
    closeModalBtn: document.querySelector('[data-modal-room-room-close]'),
    modal: document.querySelector('[data-room-room-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    const isModalOpen =
      refs.openModalBtn.getAttribute('aria-expanded') === 'true' || false;
    refs.openModalBtn.setAttribute('aria-expanded', !isModalOpen);
    refs.modal.classList.toggle('is-hidden');

    const scrollLockMethod = !isModalOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  }
})();

(() => {
  const refs = {
     openModalBtn: document.querySelector('[data-modal-room-main-2-open]'),
    closeModalBtn: document.querySelector('[data-modal-room-main-2-close]'),
    modal: document.querySelector('[data-room-main-2-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    const isModalOpen =
      refs.openModalBtn.getAttribute('aria-expanded') === 'true' || false;
    refs.openModalBtn.setAttribute('aria-expanded', !isModalOpen);
    refs.modal.classList.toggle('is-hidden');

    const scrollLockMethod = !isModalOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  }
})();

(() => {
  const refs = {
     openModalBtn: document.querySelector('[data-modal-hotel-room-open]'),
    closeModalBtn: document.querySelector('[data-modal-hotel-room-close]'),
    modal: document.querySelector('[data-room-hotel-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    const isModalOpen =
      refs.openModalBtn.getAttribute('aria-expanded') === 'true' || false;
    refs.openModalBtn.setAttribute('aria-expanded', !isModalOpen);
    refs.modal.classList.toggle('is-hidden');

    const scrollLockMethod = !isModalOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  }
})();