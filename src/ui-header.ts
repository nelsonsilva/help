import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js'

@customElement('ui-header')
export class HeaderElement extends LitElement {
  static styles = css`
    div {
      background: var(--ui-background, #46596b);
      color: var(--ui-color, #ffffff);
      border-color: transparent;
      padding-bottom: 5px;
      margin-top: 18px;
      padding-right: 2px;
      padding-left: 2px;
      margin-right: 6px;
      margin-left: 6px;
    }
    ::slotted(h1) {
      font-size: 1.6em;
      font-weight: bold;
    }
  `;
  render() {
    return html` <div><slot></slot></div> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ui-header': HeaderElement
  }
}
