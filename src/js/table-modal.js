(() => {
  const refs = {
     openModalBtn: document.querySelector('[data-modal-table-main-open]'),
    closeModalBtn: document.querySelector('[data-modal-main-close]'),
    modal: document.querySelector('[data-main-modal]'),
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
     openModalBtn: document.querySelector('[data-modal-table-main-2-open]'),
    closeModalBtn: document.querySelector('[data-modal-table-main-2-close]'),
    modal: document.querySelector('[data-table-main-2-modal]'),
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
     openModalBtn: document.querySelector('[data-modal-table-rest-1-open]'),
    closeModalBtn: document.querySelector('[data-modal-rest-1-close]'),
    modal: document.querySelector('[data-rest-1-modal]'),
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
     openModalBtn: document.querySelector('[data-modal-table-rest-2-open]'),
    closeModalBtn: document.querySelector('[data-modal-rest-2-close]'),
    modal: document.querySelector('[data-rest-2-modal]'),
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

