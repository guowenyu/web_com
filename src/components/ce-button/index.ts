
import {LitElement, html, customElement, property, unsafeCSS} from 'lit-element';

import template from './template';

@customElement('Ce-button')
class CeButton extends LitElement {
  static readonly styles = unsafeCSS(require('./style.pcss'));

  @property({attribute: true})
  width: string = '0';

  @property({attribute: true})
  height: string = '0';

  @property({attribute: true})
  icon: string = '';

  @property({attribute: true})
  color: string = '#333';

  @property({attribute: true})
  ['background-color']: string = '#fff';

  @property({type: Boolean})
  round: boolean = false;

  @property({attribute: true})
  radius: string = '0';

  @property({attribute: true})
  disabled: boolean = false;

  @property({attribute: true})
  text: string = '';

  protected render() {
    const classList:string[] = [];

    if(!this.icon) {
      classList.push()
    }

    if(this.disabled) {
      classList.push('is-disabled');
    }

    const widthVal = parseFloat(this.width),
      heightVal = parseFloat(this.height);

    if(!widthVal && !heightVal) {
      classList.push('is-default');
    }

    if(this.round) {
      this.radius = '50%';

      if(!widthVal) {
        this.width = this.height;
      }

      if(!heightVal) {
        this.height = this.width;
      }

      if(!widthVal || !heightVal) {
        classList.push('is-center');
      }
    }

    return html`${template(this, classList.join(' '))}`;
  }
}

export { CeButton }
