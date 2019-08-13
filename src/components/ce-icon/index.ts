
import {LitElement, html, customElement, property, unsafeCSS} from 'lit-element';

import template from './template';
import loadingIcon from './loading';
import errorIcon from './error';
import deleteIcon from './delete';
import moreIcon from './more';

@customElement('Ce-icon')
export default class CeIcon extends LitElement {
  static readonly styles = unsafeCSS(require('./style.pcss'));

  @property({attribute: true})
  icon: string = '';

  protected render() {
    if(this.icon === 'loading') {
      return html`${loadingIcon()}`;
    }

    if(this.icon === 'error') {
      return html`${errorIcon()}`;
    }

    if(this.icon === 'delete') {
      return html`${deleteIcon()}`;
    }

    if(this.icon === 'more') {
      return html`${moreIcon()}`;
    }
  
    return html`${template(this)}`;
  }
}
