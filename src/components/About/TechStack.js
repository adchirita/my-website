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
      <div class="bg-secondary mx-auto rounded-5 py-3 d-grid gap-3 TechContainer fadeIn" id="fourth">
        <div class="d-flex flex-row justify-content-between py-3 fadeIn" id="fifth">
          {<img class="stackIcon" id="first" src={images['javascript.svg']} alt=""/>}
          {<img class="stackIcon" id="first" src={images['bootstrap.svg']} alt=""/>}
          {<img class="stackIcon" id="first" src={images['css-3.svg']} alt=""/>}
          {<img class="stackIcon" id="first" src={images['express.svg']} alt=""/>}
        </div>
        <div class="d-flex flex-row justify-content-between py-3 fadeIn" id="fifth">
          {<img class="stackIcon" id="second" src={images['git-icon.svg']} alt=""/>}
          {<img class="stackIcon" id="second" src={images['html-5.svg']} alt=""/>}
          {<img class="stackIcon" id="second" src={images['leaflet.svg']} alt=""/>}
          {<img class="stackIcon" id="second" src={images['git-icon.svg']} alt=""/>}
        </div>
        <div class="d-flex flex-row justify-content-between py-3 fadeIn" id="fifth">
          {<img class="stackIcon" id="third" src={images['mocha.svg']} alt=""/>}
          {<img class="stackIcon" id="third" src={images['nodejs-icon.svg']} alt=""/>}
          {<img class="stackIcon" id="third" src={images['postgresql.svg']} alt=""/>}
          {<img class="stackIcon" id="third" src={images['python.svg']} alt=""/>}
        </div>
        <div class="d-flex flex-row justify-content-between py-3 fadeIn" id="fifth">
          {<img class="stackIcon" id="fourth" src={images['rails.svg']} alt=""/>}
          {<img class="stackIcon" id="fourth" src={images['react.svg']} alt=""/>}
          {<img class="stackIcon" id="fourth" src={images['sass.svg']} alt=""/>}
          {<img class="stackIcon" id="fourth" src={images['selenium.svg']} alt=""/>}
        </div>
        <div class="d-flex flex-row justify-content-center py-3 fadeIn" id="fifth">
          {<img class="stackIcon" id="fifth" src={images['storybook-icon.svg']} alt=""/>}
        </div>
      </div>
    </main>
  )
}

export default TechStack;