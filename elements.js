import { LitElement, html, css } from 'lit-element';

class HeaderElement extends LitElement {
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

class PageElement extends LitElement {
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

class FooterElement extends LitElement {
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

class FieldElement extends LitElement {
  static styles = css`
    div {
      padding: 4px;
      margin: 2px 2px 4px 2px;
    }
    label {
      display: block;
      white-space: normal;
      font-weight: bold;
    }
    :host([inline]) label {
      display: inline-block;
    }
    .required {
      color: #ff0000;
    }
    ::slotted(input) {
      background: var(--ui-page-background, #fcfdfd);
      color: var(--ui-page-color, #1f5f8e);
      border: 1px solid var(--ui-page-color, #1f5f8e);
      font-size: 1em;
    }
    ::slotted(textarea) {
      width: 90%;
    }
  `;

  static properties = {
    label: { type: String },
  };

  render() {
    return html`
      <div>
        ${this._labelHtml}
        <slot @slotchange="${this._onFieldChange}"></slot>
      </div>
    `;
  }

  get _labelHtml() {
    if (!this._field) return '';
    const { id, required } = this._field;
    const suffix = required ? html`<span class="required">*</span>` : '';
    return html` <label for="${id}">${this.label}${suffix}</label>`;
  }

  _onFieldChange() {
    const slot = this.shadowRoot.querySelector('slot');
    this._field = slot.assignedElements()[0];
    // just be sure to set an id
    if (!this._field.id) {
      this._field.id = this._field.name || 'field';
    }
    this.requestUpdate();
  }
}

class ButtonElement extends LitElement {
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

customElements.define('ui-button', ButtonElement);
customElements.define('ui-header', HeaderElement);
customElements.define('ui-page', PageElement);
customElements.define('ui-footer', FooterElement);
customElements.define('ui-field', FieldElement);
