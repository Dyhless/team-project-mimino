(()=>{const o={openModalBtn:document.querySelector("[data-modal-main-room-open]"),closeModalBtn:document.querySelector("[data-modal-main-room-close]"),modal:document.querySelector("[data-modal-main-room]")};o.openModalBtn.addEventListener("click",e),o.closeModalBtn.addEventListener("click",e);function e(){const t=o.openModalBtn.getAttribute("aria-expanded")==="true"||!1;o.openModalBtn.setAttribute("aria-expanded",!t),o.modal.classList.toggle("is-hidden");const d=t?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[d](document.body)}})();
