import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js'

@customElement('ui-button')
export class ButtonElement extends LitElement {
  static styles = css`
    ::slotted(button) {
      background: var(--ui-highlight-color, #d6e9ff);
      color: var(--ui-page-color, #1f5f8e);
      border: 1px solid var(--ui-page-color, #1f5f8e);
      font-size: 1em;
      cursor: pointer;
      padding: 4px;
      margin: 3px;
    }
  `;

  render() {
    return html`<div><slot></slot></div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ui-button': ButtonElement
  }
}
