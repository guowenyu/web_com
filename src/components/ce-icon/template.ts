import { html } from 'lit-element';

export default (self) => html`
<style>
    .wrapper {
        display: inline-block;
        width: 24px;
        height: 24px;
    }

    .wrapper img {
        width: 100%;
    }
</style>
<div class="wrapper">
    <img src="${self.icon}" alt="" />
    <slot></slot>
</div>
`;
