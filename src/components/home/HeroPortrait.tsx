function HeroPortrait() {
  return (
    <div className="portrait-wrap">
      <div className="portrait-copy" aria-hidden="true"><span className="portrait-line" /><span>IDEIAS</span><span>CÓDIGO</span><span>PESSOAS</span><span>RESULTADOS</span></div>
      <div className="portrait-frame portrait-frame--photo">
        <img src={`${import.meta.env.BASE_URL}images/profile.png`} alt="Retrato de João, Full Stack Developer" fetchPriority="high" />
      </div>
    </div>
  )
}

export default HeroPortrait
