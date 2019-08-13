import { html } from 'lit-element';

export default () => html`
<style>
    .icon {
        transform-origin: center;
        animation: 1s loading linear infinite;
        fill: #bfbfbf;
        width: 32px;
        height: 32px;
    }

    @keyframes loading {
        from {
            transform: rotate(0deg);
        }

        to {
            transform: rotate(360deg);
        }
    }
</style>
<svg class="icon" width="64px" height="64.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M128 512c0-211.2 172.8-384 384-384s384 172.8 384 384c0 38.4-25.6 64-64 64s-64-25.6-64-64c0-140.8-115.2-256-256-256S256 371.2 256 512s115.2 256 256 256c38.4 0 64 25.6 64 64s-25.6 64-64 64C300.8 896 128 723.2 128 512z" />
</svg>
`;
