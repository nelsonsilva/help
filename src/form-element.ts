import { LitElement, PropertyValues } from 'lit'

/**
 * Base form associated element that just sets form value and validity from wrapped native element
 */
 export class FormElement extends LitElement {

  static formAssociated = true;
   private _internals: ElementInternals;

  constructor() {
    super();
    this._internals = this.attachInternals();
  }

  get _formElement() {
    return this.shadowRoot?.children[0] as HTMLFormElement;
  }

  _updateInternals() {
    const target = this._formElement;
    this._internals.setFormValue(target.value);
    this._internals.setValidity(target.validity, target.validationMessage, target);
  }

  protected override firstUpdated(props: PropertyValues): void {
    super.firstUpdated(props);
    this._updateInternals();
  }
}
