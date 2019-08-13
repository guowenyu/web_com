
import {LitElement, html, customElement, property, unsafeCSS} from 'lit-element';

import template from './template';

@customElement('Ce-image')
class CeImage extends LitElement {
  static readonly styles = unsafeCSS(require('./style.pcss'));

  @property({attribute: true})
  width: string = '0';

  @property({attribute: true})
  height: string = '0';

  @property({attribute: true})
  src: string = '';

  @property({attribute: true})
  alt: string = '';

  @property({type: String})
  ratio: string = '';

  @property({type: Boolean})
  round: boolean = false;

  @property({type: String})
  paddingTop: string = '0';

  @property({attribute: true})
  radius: string = '0';

  protected render() {
    const classList:string[] = [];

    if(this.ratio) {
      let ratio:string[] = this.ratio.split(':');

      if(ratio.length === 2) {
        classList.push('is-respective');
        this.paddingTop = (+ratio[0] / +ratio[1] * 100).toFixed(2) + '%';
      }
    }

    if(this.round) {
      this.radius = '50%';
    }

    if(!this.src) {
      classList.push('is-empty');
    }

    return html`${template(this, classList.join(' '))}`;
  }
}

export { CeImage }
