import './app-home';
import '@greycat/web';

// initialize GreyCat SDK
await gc.sdk.init({ debug: true });

document.body.replaceChildren(
  <gui-layout>
    <div slot="main">
      <app-home></app-home>
    </div>
  </gui-layout>,
);
