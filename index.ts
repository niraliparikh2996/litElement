import './fetch-lit.js';
// <ul>
//     ${
//         this.users.map(
//             u =>
//                 html`
//               <li>${u.lastName}, ${u.firstName} - ${u.email}</li>
//             `,
//         )
// }
// </ul>


// render() {
//     console.log('console 4');
//     return html`
//       <button  @click=${this.clickHandler}> Click me</button>
//     `;
// }
// clickHandler() {
//     console.log('clicked!');
//     return html`<ul>
//       ${
//         this.users.map(
//             u =>
//                 html`
//               <li>${u.lastName}, ${u.firstName} - ${u.email}</li>
//             `,
//         )
//         }
//     </ul>`
// };


// render() {
//     console.log('console 4');
//     return html`
//       <ul>
//         ${this.users.map(
//         u =>
//             html`
//               <li>${u.lastName}, ${u.firstName} - ${u.email}</li>
//             `,
//     )}
//       </ul>
//     `;
// }