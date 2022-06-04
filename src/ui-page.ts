import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js'

@customElement('ui-page')
export class PageElement extends LitElement {
  static styles = css`
      div {
        background-color: var(--ui-page-background, #fcfdfd);
        color: var(--ui-page-color, #1f5f8e);
        font-size: 0.8em;
        min-height: 200px;
        clear: both;
        padding-bottom: 6px;
        padding-top: 6px;
        padding-right: 2px;
        padding-left: 2px;
        margin-right: 6px;
        margin-left: 6px;
      }
    `;
  render() {
    return html` <div><slot></slot></div> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ui-page': PageElement
  }
}
