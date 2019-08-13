import { html } from 'lit-element';

export default (self) => html`
<div class="wrapper">
    <p>${self.label || ''}${self.text || ''}</p>
</div>
`;
