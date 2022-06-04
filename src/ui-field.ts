import { LitElement, html, css, PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators.js'

@customElement('ui-field')
export class FieldElement extends LitElement {
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

  @property({ type: String })
  label = ''

  @property({ type: Object, state: true })
  private _field: HTMLFormElement | undefined

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
    const suffix = this._field.required ? html`<span class="required">*</span>` : '';
    return html`<label>${this.label}${suffix}</label>`;
  }

  _onFieldChange() {
    const slot = this.shadowRoot?.querySelector('slot');
    this._field = slot?.assignedElements()[0] as HTMLFormElement;
    if (this.label) {
      this._updateLabel();
    }
    this.requestUpdate();
  }

  _updateLabel() {
    this._field?.setAttribute('aria-label', this.label);
  }

  willUpdate(changedProperties: PropertyValues) {
    if (this._field && changedProperties.has('label')) {
      this._updateLabel();
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ui-field': FieldElement
  }
}
