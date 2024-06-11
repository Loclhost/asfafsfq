// Функция для создания модального окна
function createModal() {
  // Создание затемнения фона
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");
  document.body.appendChild(overlay);

  // Создание модального окна
  const modal = document.createElement("div");
  modal.classList.add("modal");

  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");
  modalContent.innerHTML = '<div class="ModalLayout_root_VGmhv"><div class="ModalLayout_wrapper_YHJoC ModalLayout_darkenBg_GYPvi"><div class="ModalLayout_backdrop_PKyuG"></div><div data-v-2fb89fa3="" data-v-cd0f7db0="" class="modal-container ModalLayout_modal_wTuv7"><div data-v-2fb89fa3="" class="modal-container-wrapper dynamic-height"><!----><div data-v-2fb89fa3="" class="modal-content"><div data-v-2fb89fa3="" class="modal-content__header"><div data-v-2fb89fa3="" class="modal-content__header__row"><div data-v-2fb89fa3="" class="modal-content__header__row__cell"><div data-v-2fb89fa3="" class="modal-content__header__row__cell__title size_default">Вход</div></div><div data-v-2fb89fa3="" class="modal-content__header__row__cell"></div><!----><div data-v-2fb89fa3="" class="modal-content__header__row__account-number"><div data-v-2fb89fa3="" class="modal-content__header__row__cell__cell"></div><svg data-v-2fb89fa3="" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true" role="img" class="icon icon-close-thin modal-content__header__row__cell__overlay modal-content__header__row__cell__overlay" style="--vicon-with-gradient-problem__size: 24px;"><path fill="#99A2AD" d="M9.5.5a.707.707 0 00-1 0L5 4 1.5.5a.707.707 0 00-1 1L4 5 .5 8.5a.707.707 0 001 1L5 6l3.5 3.5a.707.707 0 001-1L6 5l3.5-3.5a.707.707 0 000-1z"></path></svg></div></div><div data-v-2fb89fa3="" class="modal-content__header__row"><div data-v-2fb89fa3="" class="modal-content__header__row__cell"><div data-v-2fb89fa3="" class="modal-content__header__row__cell__sub-title">Добро пожаловать в 1win</div></div></div></div><div data-v-2fb89fa3="" class="modal-content__container"><div data-v-2fb89fa3="" class="modal-content__body"><div data-v-cd0f7db0="" class="form fullwidth"><form data-v-cd0f7db0="" class="form fullwidth"><div data-v-cd0f7db0="" class="row"><div data-v-cd0f7db0="" class="socials-auth"><div data-v-cd0f7db0="" class="social-button-item" style="background-color: rgb(242, 242, 242);"><svg data-v-cd0f7db0="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-hidden="true" role="img" class="icon icon-social-google sm margin square social-button-item-icon social-button-item-icon"><path d="M113.47 309.408L95.648 375.94l-65.139 1.378C11.042 341.211 0 299.9 0 256c0-42.451 10.324-82.483 28.624-117.732h.014L86.63 148.9l25.404 57.644c-5.317 15.501-8.215 32.141-8.215 49.456.002 18.792 3.406 36.797 9.651 53.408z" fill="#fbbb00"></path><path d="M507.527 208.176C510.467 223.662 512 239.655 512 256c0 18.328-1.927 36.206-5.598 53.451-12.462 58.683-45.025 109.925-90.134 146.187l-.014-.014-73.044-3.727-10.338-64.535c29.932-17.554 53.324-45.025 65.646-77.911h-136.89V208.176h245.899z" fill="#518ef8"></path><path d="M416.253 455.624l.014.014C372.396 490.901 316.666 512 256 512c-97.491 0-182.252-54.491-225.491-134.681l82.961-67.91c21.619 57.698 77.278 98.771 142.53 98.771 28.047 0 54.323-7.582 76.87-20.818l83.383 68.262z" fill="#28b446"></path><path d="M419.404 58.936l-82.933 67.896C313.136 112.246 285.552 103.82 256 103.82c-66.729 0-123.429 42.957-143.965 102.724l-83.397-68.276h-.014C71.23 56.123 157.06 0 256 0c62.115 0 119.068 22.126 163.404 58.936z" fill="#f14336"></path></svg></div><div data-v-cd0f7db0="" class="social-button-item" style="background-color: rgb(35, 112, 179); background-image: linear-gradient(135deg, rgb(74, 131, 177), rgb(36, 76, 121));"><svg data-v-cd0f7db0="" width="22" height="20" viewBox="0 0 22 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" class="icon icon-social-vk sm margin square social-button-item-icon social-button-item-icon"><g fill="none" fill-rule="evenodd"><g><g fill="#FFF"><path d="M10.762 16.502h1.315s.398-.044.6-.263c.187-.2.181-.578.181-.578s-.025-1.766.793-2.024c.808-.256 1.845 1.706 2.943 2.46.831.57 1.463.446 1.463.446l2.939-.041s1.537-.095.808-1.304c-.06-.1-.424-.894-2.185-2.528-1.843-1.71-1.596-1.434.624-4.392 1.352-1.801 1.892-2.901 1.723-3.372-.161-.449-1.156-.33-1.156-.33l-3.308.02a.751.751 0 00-.424.076c-.178.107-.292.353-.292.353s-.524 1.395-1.222 2.58c-1.473 2.502-2.063 2.635-2.303 2.479-.56-.362-.42-1.455-.42-2.23 0-2.425.367-3.436-.716-3.698-.36-.086-.625-.141-1.545-.153-1.18-.013-2.18.003-2.745.282-.376.185-.667.595-.49.619.219.029.714.133.977.49.34.462.327 1.498.327 1.498s.195 2.855-.455 3.209c-.446.243-1.06-.253-2.371-2.523-.446-.79-.84-1.608-1.181-2.448a.983.983 0 00-.273-.37 1.367 1.367 0 00-.508-.205l-3.144.021s-.472.014-.645.22c-.154.183-.012.56-.012.56s2.46 5.761 5.247 8.658c2.558 2.664 5.455 2.489 5.455 2.489"></path></g></g></g></svg></div><div data-v-cd0f7db0="" class="social-button-item" style="background-image: linear-gradient(203deg, rgb(55, 174, 226) 30%, rgb(30, 150, 200) 78%);"><svg data-v-cd0f7db0="" xmlns="http://www.w3.org/2000/svg" width="25" height="21" viewBox="0 0 25 21" aria-hidden="true" role="img" class="icon icon-social-telegram sm margin square social-button-item-icon social-button-item-icon"><defs><linearGradient id="telegram_svg__a" x1="66%" x2="85.1%" y1="43.7%" y2="80.2%"><stop offset="0%" stop-color="#EFF7FC"></stop><stop offset="100%" stop-color="#FFF"></stop></linearGradient></defs><g fill="none" fill-rule="evenodd"><g fill-rule="nonzero"><g><g><g><path fill="#C8DAEA" d="M9.554 19.148c-.709 0-.588-.267-.833-.942l-2.082-6.852 16.028-9.509"></path><path fill="#A9C9DD" d="M9.554 19.148c.546 0 .787-.25 1.092-.546l2.914-2.834-3.635-2.192"></path><path fill="url(#telegram_svg__a)" d="M9.311 13.156l8.808 6.507c1.005.555 1.73.267 1.98-.933l3.586-16.895c.367-1.472-.56-2.14-1.522-1.703L1.11 8.25C-.327 8.826-.32 9.628.848 9.985l5.402 1.687L18.758 3.78c.59-.359 1.133-.166.688.229" transform="translate(.614 .421)"></path></g></g></g></g></g></svg></div><div data-v-cd0f7db0="" class="social-button-item" style="background-color: rgb(0, 95, 249);"><svg data-v-cd0f7db0="" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" aria-hidden="true" role="img" class="icon icon-social-mailru sm margin square social-button-item-icon social-button-item-icon"><g fill="none" fill-rule="evenodd"><g fill="#FF9E00" fill-rule="nonzero"><g><path d="M11.707 9A2.71 2.71 0 019 11.707 2.71 2.71 0 016.293 9 2.71 2.71 0 019 6.293 2.71 2.71 0 0111.707 9M9 0C4.037 0 0 4.037 0 9s4.037 9 9 9a8.951 8.951 0 005.07-1.565l.025-.018-1.212-1.41-.02.013A7.121 7.121 0 019 16.155c-3.945 0-7.155-3.21-7.155-7.155 0-3.945 3.21-7.155 7.155-7.155 3.945 0 7.155 3.21 7.155 7.155 0 .511-.057 1.029-.168 1.538-.227.929-.877 1.213-1.365 1.175-.491-.04-1.066-.39-1.07-1.245V9c0-2.51-2.042-4.552-4.552-4.552S4.448 6.49 4.448 9 6.49 13.552 9 13.552c1.22 0 2.363-.476 3.225-1.343a2.926 2.926 0 002.491 1.354c.655 0 1.303-.22 1.827-.616.539-.41.942-1.003 1.165-1.714.035-.115.1-.378.1-.38l.002-.01c.132-.57.19-1.14.19-1.843 0-4.963-4.037-9-9-9"></path></g></g></g></svg></div><div data-v-cd0f7db0="" class="social-button-item" style="background-color: rgb(255, 0, 0);"><svg data-v-cd0f7db0="" xmlns="http://www.w3.org/2000/svg" width="9" height="18" viewBox="0 0 9 18" aria-hidden="true" role="img" class="icon icon-social-yandex sm margin square social-button-item-icon social-button-item-icon"><g fill="none" fill-rule="evenodd"><g fill="#FFF" fill-rule="nonzero"><g><path d="M5.078 11.102L2.142 18H0l3.225-7.376C1.709 9.818.698 8.358.698 5.664.698 1.888 2.984 0 5.703 0h2.768v18H6.618v-6.898h-1.54zm1.54-9.466h-.987c-1.492 0-2.936 1.033-2.936 4.028 0 2.895 1.324 3.827 2.936 3.827h.987V1.636z"></path></g></g></g></svg></div><div data-v-cd0f7db0="" class="social-button-item" style="background-color: rgb(240, 126, 12); background-image: linear-gradient(140deg, rgb(249, 194, 64) -25%, rgb(255, 137, 0) 96%);"><svg data-v-cd0f7db0="" width="12" height="20" viewBox="0 0 12 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" class="icon icon-social-ok sm margin square social-button-item-icon social-button-item-icon"><g fill="none" fill-rule="evenodd"><g fill="#FEFEFD"><g><path d="M.718 5.135a5.071 5.071 0 1110.142.011A5.071 5.071 0 01.718 5.135zm5.074 2.098a2.096 2.096 0 10-2.104-2.085 2.105 2.105 0 002.104 2.085z"></path><path d="M3.914 14.264a9.723 9.723 0 01-1.637-.483 7.588 7.588 0 01-1.675-.897c-.486-.355-.69-.84-.56-1.43.127-.588.505-.94 1.09-1.059a1.26 1.26 0 01.995.195c1.16.805 2.456 1.127 3.85 1.08 1.114-.037 2.155-.333 3.097-.938.208-.135.405-.278.655-.33a1.377 1.377 0 011.116 2.454c-.701.52-1.484.877-2.31 1.145-.305.099-.615.176-.929.246.007.063.057.085.09.117l2.921 2.902c.43.425.548 1.01.324 1.538a1.367 1.367 0 01-2.204.472c-.75-.706-1.477-1.433-2.215-2.15-.236-.23-.476-.457-.71-.692-.078-.08-.118-.07-.19.008a888 888 0 01-2.581 2.752c-.456.484-1.142.593-1.691.28a1.376 1.376 0 01-.325-2.16c.388-.414.78-.821 1.175-1.231l1.603-1.677a.355.355 0 00.111-.142z"></path></g></g></g></svg></div><div data-v-cd0f7db0="" class="social-button-item" style="background-color: rgb(50, 75, 108); background-image: linear-gradient(rgb(17, 29, 46), rgb(5, 24, 57) 21%, rgb(10, 27, 72) 41%, rgb(19, 46, 98) 58%, rgb(20, 75, 126) 74%, rgb(19, 100, 151) 87%, rgb(19, 135, 184));"><svg data-v-cd0f7db0="" xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 24 18" aria-hidden="true" role="img" class="icon icon-social-steam sm margin square social-button-item-icon social-button-item-icon"><g fill="none" fill-rule="evenodd"><g fill="#FFF" fill-rule="nonzero"><g><path d="M13.92 5.028v.065l-3.21 4.698a3.581 3.581 0 00-2.152.6L-4.094 5.228s-.163 2.703.517 4.718l10.585 4.31a3.654 3.654 0 002.15 2.59c1.852.78 3.988-.108 4.758-1.974.2-.488.294-1 .28-1.51l4.596-3.307.112.002c2.75 0 4.985-2.257 4.985-5.03C23.889 2.256 21.654 0 18.904 0c-2.748 0-4.984 2.255-4.984 5.028zM9.477 16.073a2.8 2.8 0 01-1.445-1.388l1.623.677a2.062 2.062 0 002.703-1.123 2.09 2.09 0 00-1.113-2.726l-1.678-.7a2.794 2.794 0 013.587 1.568c.285.698.283 1.47-.005 2.166a2.803 2.803 0 01-3.672 1.526zm6.106-11.045c0-1.846 1.49-3.35 3.321-3.35 1.832 0 3.322 1.504 3.322 3.35 0 1.848-1.49 3.35-3.322 3.35-1.83 0-3.32-1.502-3.32-3.35zm3.327-2.523c1.378 0 2.495 1.128 2.495 2.518s-1.117 2.516-2.495 2.516a2.505 2.505 0 01-2.494-2.516c0-1.39 1.117-2.518 2.494-2.518z"></path></g></g></g></svg></div></div></div><div data-v-cd0f7db0="" class="row"><div data-v-cd0f7db0="" class="divider"><div data-v-cd0f7db0="" class="divider-text">или</div></div></div><div data-v-cd0f7db0="" class="fields"><div data-v-cd0f7db0="" class="control fullwidth fullwidth"><div class="input-wrapper theme-light-grey"><div class="input-message-container"><!----><input class="input" required="" autocomplete="off" name="login" placeholder="E-mail / телефон" data-gtm-vis-recent-on-screen94400803_207="15964" data-gtm-vis-first-on-screen94400803_207="15964" data-gtm-vis-total-visible-time94400803_207="100" data-gtm-vis-has-fired94400803_207="1"><span class="fieldLabel">E-mail / телефон</span><!----></div><!----><!----></div><!----></div><div data-v-cd0f7db0="" class="control fullwidth fullwidth"><div class="input-wrapper theme-light-grey"><div class="input-message-container"><!----><input class="input" required="" type="password" autocomplete="off" name="password" placeholder="Пароль"><span class="fieldLabel">Пароль</span><!----></div><div class="toggler-visible-password-container"><svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" class="icon icon-eye sm"><path d="M16.93 8.658C15.212 4.673 11.983 2.2 8.5 2.2S1.787 4.673.07 8.658a.85.85 0 000 .68c1.717 3.985 4.946 6.457 8.43 6.457s6.713-2.472 8.43-6.457a.85.85 0 000-.68zM8.5 14.096c-2.702 0-5.243-1.946-6.713-5.098 1.47-3.153 4.01-5.099 6.713-5.099 2.702 0 5.243 1.946 6.713 5.099-1.47 3.152-4.01 5.098-6.713 5.098zm0-8.497a3.399 3.399 0 100 6.798 3.399 3.399 0 000-6.798zm0 5.098a1.699 1.699 0 110-3.398 1.699 1.699 0 010 3.398z" fill="currentColor"></path></svg></div><!----></div><!----></div></div><div data-v-cd0f7db0="" class="forgot-button"><button data-v-bd746ee2="" data-v-cd0f7db0="" class="button size-sm theme-text-grey" type="button"><!----><span data-v-cd0f7db0="">Забыли пароль?</span></button></div><div data-v-cd0f7db0="" class="row"><button data-v-bd746ee2="" data-v-cd0f7db0="" class="button fullwidth size-xl theme-blue modal-button" type="submit"><!----><span data-v-cd0f7db0="">Войти</span></button></div><div data-v-cd0f7db0="" class="bottom"><div data-v-cd0f7db0="" class="register-adv"><span data-v-cd0f7db0="" class="register-adv__secondary">Еще нет аккаунта?</span><span data-v-cd0f7db0="" class="register-adv__link">Зарегистрируйтесь</span></div></div></form><!----></div></div><!----></div></div></div><div data-v-2fb89fa3="" class="modal-footer"><!----><!----></div></div></div></div>';

  const closeButton = document.createElement("span");
  closeButton.classList.add("close-button");
  closeButton.textContent = "&times;";

  const modalText = document.createElement("p");
  modalText.textContent = "Это содержимое модального окна.";

  modalContent.appendChild(closeButton);
  modalContent.appendChild(modalText);
  modal.appendChild(modalContent);
  document.body.appendChild(modal);

  // Обработчик клика на кнопку закрыти
  closeButton.addEventListener("click", () => {
    document.body.removeChild(overlay);
    document.body.removeChild(modal);
  });

  // Обработчик клика вне модального окна
  overlay.addEventListener("click", () => {
    document.body.removeChild(overlay);
    document.body.removeChild(modal);
  });
}

// Обработчик клика на кнопку открытия модального окна
const openModalBtn = document.getElementById("openModalBtn");
openModalBtn.addEventListener("click", createModal);