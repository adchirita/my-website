import './TechStack.scss'

function TechStack() {

  function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
  }

  const images = importAll(require.context('../../images', false, /\.(png|jpe?g|svg)$/));



  return (
    <main className="px-auto Techstack">
      <div className="bg-secondary rounded-5 px-5 py-4 fadeIn" id="fourth">
        <div className="d-flex px-auto justify-content-between py-4 fadeIn" id="fifth">
          {<img className="stackIcon px-1" id="first" src={images['javascript.svg']} alt=""/>}
          {<img className="stackIcon px-1" id="first" src={images['bootstrap.svg']} alt=""/>}
          {<img className="stackIcon px-1" id="first" src={images['css-3.svg']} alt=""/>}
          {<img className="stackIcon px-1" id="first" src={images['express.svg']} alt=""/>}
        </div>
        <div className="d-flex px-auto justify-content-between py-4 fadeIn" id="fifth">
          {<img className="stackIcon px-1" id="second" src={images['git-icon.svg']} alt=""/>}
          {<img className="stackIcon px-1" id="second" src={images['html-5.svg']} alt=""/>}
          {<img className="stackIcon px-1" id="second" src={images['leaflet.svg']} alt=""/>}
          {<img className="stackIcon px-1" id="second" src={images['storybook-icon.svg']} alt=""/>}
        </div>
        <div className="d-flex px-auto justify-content-between py-4 fadeIn" id="fifth">
          {<img className="stackIcon px-1" id="third" src={images['mocha.svg']} alt=""/>}
          {<img className="stackIcon px-1" id="third" src={images['nodejs-icon.svg']} alt=""/>}
          {<img className="stackIcon px-1" id="third" src={images['postgresql.svg']} alt=""/>}
          {<img className="stackIcon px-1" id="third" src={images['python.svg']} alt=""/>}
        </div>
        <div className="d-flex px-auto justify-content-between py-4 fadeIn" id="fifth">
          {<img className="stackIcon px-1" id="fourth" src={images['rails.svg']} alt=""/>}
          {<img className="stackIcon px-1" id="fourth" src={images['react.svg']} alt=""/>}
          {<img className="stackIcon px-1" id="fourth" src={images['sass.svg']} alt=""/>}
          {<img className="stackIcon px-1" id="fourth" src={images['selenium.svg']} alt=""/>}
        </div>
      </div>
    </main>
  )
}

export default TechStack;