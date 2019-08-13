import { html } from 'lit-element';

export default (self, classList = '') => html`
<style>
    .img-wrapper {
        width: ${self.width};
        height: ${self.height};
        padding-top: ${self.paddingTop || 0};
        border-radius: ${self.radius}
    }
</style>
<div class="wrapper">
    <div class="img-wrapper ${classList}">
        <img src="${self.src}" alt="${self.alt}" />
    </div>
</div>
`;
