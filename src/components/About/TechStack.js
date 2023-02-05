import './TechStack.scss'

function TechStack() {

  function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
  }

  const images = importAll(require.context('../../images', false, /\.(png|jpe?g|svg)$/));



  return (
    <main>
      <h1 class="display-2 text-white text-center"><strong><u>Tech Stack</u></strong></h1>
      <div class="bg-secondary mx-auto rounded-5 py-3 d-grid gap-3 TechContainer">
        <div class="d-flex flex-row justify-content-between py-3">
          {<img src={images['javascript.svg']} />}
          {<img src={images['bootstrap.svg']} />}
          {<img src={images['css-3.svg']} />}
          {<img src={images['express.svg']} />}
        </div>
        <div class="d-flex flex-row justify-content-between py-3">
          {<img src={images['git-icon.svg']} />}
          {<img src={images['html-5.svg']} />}
          {<img src={images['leaflet.svg']} />}
          {<img src={images['git-icon.svg']} />}
        </div>
        <div class="d-flex flex-row justify-content-between py-3">
          {<img src={images['mocha.svg']} />}
          {<img src={images['nodejs-icon.svg']} />}
          {<img src={images['postgresql.svg']} />}
          {<img src={images['python.svg']} />}
        </div>
        <div class="d-flex flex-row justify-content-between py-3">
          {<img src={images['rails.svg']} />}
          {<img src={images['react.svg']} />}
          {<img src={images['sass.svg']} />}
          {<img src={images['selenium.svg']} />}
        </div>
        <div class="d-flex flex-row justify-content-center py-3">
          {<img src={images['storybook-icon.svg']} />}
        </div>
      </div>
    </main>
  )
}

export default TechStack;