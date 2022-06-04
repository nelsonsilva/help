import { html } from 'lit';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { live } from 'lit-html/directives/live.js';
import { customElement, property } from 'lit/decorators.js'
import { FormElement } from './form-element';

@customElement('ui-input')
export class InputElement extends FormElement {

  @property({ type: String })
  type = 'text'

  @property({ type: String })
  name = ''

  @property({ type: String })
  value = ''

  @property({ type: String })
  placeholder = ''

  @property({ type: Boolean })
  required = false

  @property({ type: Boolean })
  disabled = false

  @property({ type: Boolean })
  readonly = false

  @property({ type: Number })
  size: number | undefined

  _onInput({ target } : Event) {
    this.value = (target as HTMLInputElement).value;
    this._updateInternals();
  }
  
  // form associated callbacks
  formResetCallback() {
    this.value = this.getAttribute('value') || '';
    this._updateInternals();
  }

  formStateRestoreCallback(state: string) {
    this.value = state;
    this._updateInternals();
  }

  render() {
    return html`
      <input
        type="${this.type}"
        .value="${live(this.value)}"
        ?disabled="${this.disabled}"
        placeholder="${this.placeholder}"
        ?required="${this.required}"
        ?readonly="${this.readonly}"
        size="${ifDefined(this.size === null ? undefined : this.size)}"
        name="${ifDefined(this.name === '' ? undefined : this.name)}"
        @input="${this._onInput}">
    `;
  }
}