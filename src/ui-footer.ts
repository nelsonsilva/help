import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js'

@customElement('ui-footer')
export class FooterElement extends LitElement {
  static styles = css`
      div {
        background: var(--ui-background, #46596b);
        color: var(--ui-color, #ffffff);
        border-color: transparent;
        padding-top: 6px;
        padding-bottom: 6px;
        padding-right: 2px;
        padding-left: 2px;
        margin-right: 6px;
        margin-left: 6px;
      }
    `;
  render() {
    return html` <div><slot></slot></div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ui-footer': FooterElement
  }
}
