(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-main-room-open]'),
    closeModalBtn: document.querySelector('[data-modal-main-room-close]'),
    modal: document.querySelector('[data-modal-main-room]'),
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
