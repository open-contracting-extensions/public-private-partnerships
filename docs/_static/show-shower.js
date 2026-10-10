document.addEventListener("click", (event) => {
  const link = event.target.closest('a[href^="https://open-contracting.github.io/ocds-show-ppp/?load="]');
  if (!link) {
    return;
  }
  event.preventDefault();

  const iframe = document.createElement("iframe");
  iframe.src = link.getAttribute("href");

  const dialog = document.createElement("dialog");
  dialog.className = "show-shower";
  dialog.tabIndex = -1;
  dialog.append(iframe);
  // A click on the backdrop targets the dialog, like a click on its border, so compare coordinates.
  dialog.addEventListener("click", (event) => {
    const rect = dialog.getBoundingClientRect();
    if (
      event.clientX < rect.left ||
      event.clientX > rect.right ||
      event.clientY < rect.top ||
      event.clientY > rect.bottom
    ) {
      dialog.close();
    }
  });
  // sphinx_highlight.js prevents the default action of Escape, which would close the dialog.
  const onKeydown = (event) => {
    if (event.key === "Escape") {
      dialog.close();
    }
  };
  document.addEventListener("keydown", onKeydown);
  dialog.addEventListener("close", () => {
    document.removeEventListener("keydown", onKeydown);
    dialog.remove();
  });

  document.body.append(dialog);
  dialog.showModal();
  dialog.focus();
});
