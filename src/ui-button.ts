import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'

@customElement('ui-button')
export class ButtonElement extends LitElement {
  static styles = css`
    button {
      background: var(--ui-highlight-color, #d6e9ff);
      color: var(--ui-page-color, #1f5f8e);
      border: 1px solid var(--ui-page-color, #1f5f8e);
      font-size: 1em;
      cursor: pointer;
      padding: 4px;
      margin: 3px;
    }
  `;

  static formAssociated = true;

  private _internals: ElementInternals;

  @property({ type: String })
  type = ''

  constructor() {
    super();
    this._internals = this.attachInternals();
  }

  private _onClick() {
    switch (this.type) {
      case 'submit':
        this._internals.form?.requestSubmit();
        break;
      case 'reset':
        this._internals.form?.reset();
        break;
    }
  }

  render() {
    return html`
      <button @click=${this._onClick}><slot></slot></button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ui-button': ButtonElement
  }
}
