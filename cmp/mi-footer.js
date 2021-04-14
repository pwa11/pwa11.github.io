class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `&copy; 2021
      Perez Monroy Diane Paola.`;
  }
}
customElements.define(
  "mi-footer", MiFooter);