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
      <div className="bg-secondary mx-auto rounded-5 py-3 d-grid gap-3 TechContainer fadeIn" id="fourth">
        <div className="d-flex flex-row justify-content-between py-3 fadeIn" id="fifth">
          {<img className="stackIcon" id="first" src={images['javascript.svg']} alt=""/>}
          {<img className="stackIcon" id="first" src={images['bootstrap.svg']} alt=""/>}
          {<img className="stackIcon" id="first" src={images['css-3.svg']} alt=""/>}
          {<img className="stackIcon" id="first" src={images['express.svg']} alt=""/>}
        </div>
        <div className="d-flex flex-row justify-content-between py-3 fadeIn" id="fifth">
          {<img className="stackIcon" id="second" src={images['git-icon.svg']} alt=""/>}
          {<img className="stackIcon" id="second" src={images['html-5.svg']} alt=""/>}
          {<img className="stackIcon" id="second" src={images['leaflet.svg']} alt=""/>}
          {<img className="stackIcon" id="second" src={images['git-icon.svg']} alt=""/>}
        </div>
        <div className="d-flex flex-row justify-content-between py-3 fadeIn" id="fifth">
          {<img className="stackIcon" id="third" src={images['mocha.svg']} alt=""/>}
          {<img className="stackIcon" id="third" src={images['nodejs-icon.svg']} alt=""/>}
          {<img className="stackIcon" id="third" src={images['postgresql.svg']} alt=""/>}
          {<img className="stackIcon" id="third" src={images['python.svg']} alt=""/>}
        </div>
        <div className="d-flex flex-row justify-content-between py-3 fadeIn" id="fifth">
          {<img className="stackIcon" id="fourth" src={images['rails.svg']} alt=""/>}
          {<img className="stackIcon" id="fourth" src={images['react.svg']} alt=""/>}
          {<img className="stackIcon" id="fourth" src={images['sass.svg']} alt=""/>}
          {<img className="stackIcon" id="fourth" src={images['selenium.svg']} alt=""/>}
        </div>
        <div className="d-flex flex-row justify-content-center py-3 fadeIn" id="fifth">
          {<img className="stackIcon" id="fifth" src={images['storybook-icon.svg']} alt=""/>}
        </div>
      </div>
    </main>
  )
}

export default TechStack;