
import {LitElement, html, customElement, property, unsafeCSS} from 'lit-element';

import template from './template';

@customElement('Ce-p')
class CeP extends LitElement {
  static readonly styles = unsafeCSS(require('./style.pcss'));

  @property({attribute: true})
  text: string = '';

  @property({attribute: true})
  label: string = '';

  protected render() {
    return html`${template(this)}`;
  }
}

export { CeP }
