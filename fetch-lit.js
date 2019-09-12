import { html, render } from 'lit-html';
import { LitElement, css } from 'lit-element';

export default class FetchLit extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 5px;
      }
    `;
  }

  static get properties() {
    console.log('console 1');
    return {
      users: { type: Array },
    };
  }

  constructor() {
    console.log('console 2');
    super();
    this.users = [];
    console.log('this.users constructor', this.users);
    this.addEventListener('load-complete', async (e) => {
      console.log('e', e.detail.data);
      console.log(await this.requestUpdate());
    });
  }

  render() {
    console.log('console 4');
    return html`
      <button  @click=${this.clickHandler}> Click me</button>
    `;
  }

  clickHandler() {
    console.log('clicked!');
    console.log('console 3');
    fetch(`https://demo.vaadin.com/demo-data/1.0/people?count=10`)
      .then(r => r.json())
      .then(async data => {
        if (data) {
          this.users = data.result;
          console.log('this.users', this.users);
          let newData = new CustomEvent('load-complete', {
            detail: { data: this.users }
          })
          this.dispatchEvent(newData)
        }
      });
  };
}

window.customElements.define('fetch-lit', FetchLit);
