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

  const closeButton = document.createElement("span");
  closeButton.classList.add("close-button");
  closeButton.textContent = "&times;";

  const modalText = document.createElement("p");
  modalText.textContent = "Это содержимое модального окна.";

  modalContent.appendChild(closeButton);
  modalContent.appendChild(modalText);
  modal.appendChild(modalContent);
  document.body.appendChild(modal);

  // Обработчик клика на кнопку закрытия
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