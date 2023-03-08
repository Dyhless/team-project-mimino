(() => {
  const refs = {
    openModalBtn: document.querySelector('[room-modal-hotel-1-open]'),
    closeModalBtn: document.querySelector('[room-modal-hotel-1-close]'),
    modal: document.querySelector('[room-modal-hotel-1]'),
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
