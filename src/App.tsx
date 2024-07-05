import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      data-path-to-root="./"
      data-include-products="true"
      className="u-body u-xl-mode"
      data-lang="en"
    >
      <header className="u-clearfix u-header u-header" id="sec-dc05">
        <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
          <a
            href="#"
            className="u-enable-responsive u-image u-logo u-image-1"
            data-image-width={200}
            data-image-height={33}
          >
            <img
              src="./images/logopreto.png"
              className="u-logo-image u-logo-image-1"
            />
          </a>
          <nav className="u-menu u-menu-one-level u-offcanvas u-menu-1">
            <div
              className="menu-collapse"
              style={{
                fontSize: "1rem",
                letterSpacing: 0,
                textTransform: "uppercase",
                fontWeight: 500,
              }}
            >
              <a
                className="u-button-style u-custom-active-color u-custom-border u-custom-border-color u-custom-hover-color u-custom-left-right-menu-spacing u-custom-padding-bottom u-custom-text-active-color u-custom-text-color u-custom-text-hover-color u-custom-top-bottom-menu-spacing u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base"
                href="#"
              >
                <svg className="u-svg-link" viewBox="0 0 24 24">
                  <use xlinkHref="#menu-hamburger" />
                </svg>
                <svg
                  className="u-svg-content"
                  version="1.1"
                  id="menu-hamburger"
                  viewBox="0 0 16 16"
                  x="0px"
                  y="0px"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <rect y={1} width={16} height={2} />
                    <rect y={7} width={16} height={2} />
                    <rect y={13} width={16} height={2} />
                  </g>
                </svg>
              </a>
            </div>
            <div className="u-custom-menu u-nav-container">
              <ul className="u-nav u-spacing-2 u-unstyled u-nav-1">
                <li className="u-nav-item">
                  <a
                    className="u-active-palette-1-base u-button-style u-hover-palette-1-light-1 u-nav-link u-text-active-white u-text-grey-90 u-text-hover-white"
                    href="Home.html"
                    style={{ padding: "10px 20px" }}
                  >
                    Inicial
                  </a>
                </li>
                <li className="u-nav-item">
                  <a
                    className="u-active-palette-1-base u-button-style u-hover-palette-1-light-1 u-nav-link u-text-active-white u-text-grey-90 u-text-hover-white"
                    href="Page-1.html"
                    style={{ padding: "10px 20px" }}
                  >
                    Serviços
                  </a>
                </li>
                <li className="u-nav-item">
                  <a
                    className="u-active-palette-1-base u-button-style u-hover-palette-1-light-1 u-nav-link u-text-active-white u-text-grey-90 u-text-hover-white"
                    href="About.html"
                    style={{ padding: "10px 20px" }}
                  >
                    Sobre Nós
                  </a>
                </li>
                <li className="u-nav-item">
                  <a
                    className="u-active-palette-1-base u-button-style u-hover-palette-1-light-1 u-nav-link u-text-active-white u-text-grey-90 u-text-hover-white"
                    href="Galeria.html"
                    style={{ padding: "10px 20px" }}
                  >
                    Galeria
                  </a>
                </li>
                <li className="u-nav-item">
                  <a
                    className="u-active-palette-1-base u-button-style u-hover-palette-1-light-1 u-nav-link u-text-active-white u-text-grey-90 u-text-hover-white"
                    href="Contact.html"
                    style={{ padding: "10px 20px" }}
                  >
                    Contactos
                  </a>
                </li>
              </ul>
            </div>
            <div className="u-custom-menu u-nav-container-collapse">
              <div className="u-black u-container-style u-inner-container-layout u-opacity u-opacity-95 u-sidenav">
                <div className="u-inner-container-layout u-sidenav-overflow">
                  <div className="u-menu-close" />
                  <ul className="u-align-center u-nav u-popupmenu-items u-unstyled u-nav-2">
                    <li className="u-nav-item">
                      <a className="u-button-style u-nav-link" href="Home.html">
                        Inicial
                      </a>
                    </li>
                    <li className="u-nav-item">
                      <a
                        className="u-button-style u-nav-link"
                        href="Page-1.html"
                      >
                        Serviços
                      </a>
                    </li>
                    <li className="u-nav-item">
                      <a
                        className="u-button-style u-nav-link"
                        href="About.html"
                      >
                        Sobre Nós
                      </a>
                    </li>
                    <li className="u-nav-item">
                      <a
                        className="u-button-style u-nav-link"
                        href="Galeria.html"
                      >
                        Galeria
                      </a>
                    </li>
                    <li className="u-nav-item">
                      <a
                        className="u-button-style u-nav-link"
                        href="Contact.html"
                      >
                        Contactos
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="u-black u-menu-overlay u-opacity u-opacity-70" />
            </div>
          </nav>
        </div>
      </header>
      <section
        className="u-clearfix u-image u-section-1"
        id="carousel_42b3"
        data-image-width={2048}
        data-image-height={1536}
      >
        <div className="u-clearfix u-sheet u-sheet-1">
          <div
            className="u-align-left u-container-align-left u-container-style u-group u-palette-1-base u-group-1"
            data-animation-name="customAnimationIn"
            data-animation-duration={1750}
            data-animation-delay={500}
          >
            <div className="u-container-layout u-valign-middle u-container-layout-1">
              <h1 className="u-align-left u-text u-text-1">A Melhor Escolha</h1>
              <p className="u-align-left u-large-text u-text u-text-variant u-text-2">
                Noiva deslumbrante encanta todos com seu sorriso radiante e
                vestido elegante.
              </p>
              <p className="u-align-left u-text u-text-3">
                Imagens da&nbsp;
                <a
                  href="https://www.freepik.com/free-photos/flower"
                  className="u-border-1 u-border-black u-border-no-left u-border-no-right u-border-no-top u-btn u-button-link u-button-style u-none u-text-body-color u-btn-1"
                >
                  Candstudio
                </a>
              </p>
              <a
                href="Solicitar_preco.html"
                className="u-active-white u-align-left u-border-2 u-border-active-white u-border-black u-border-hover-white u-btn u-button-style u-hover-white u-none u-text-active-black u-text-black u-text-hover-black u-btn-2"
              >
                solicitar pacote
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="u-clearfix u-section-2" id="sec-2131">
        <div
          className="u-align-right u-palette-1-light-2 u-shape u-shape-rectangle u-shape-1"
          data-animation-name="customAnimationIn"
          data-animation-duration={1500}
          data-animation-delay={750}
        />
        <div className="custom-expanded data-layout-selected u-clearfix u-layout-wrap u-layout-wrap-1">
          <div className="u-layout">
            <div className="u-layout-row">
              <div className="u-container-style u-layout-cell u-size-34 u-layout-cell-1">
                <div className="u-container-layout u-valign-middle-xs u-container-layout-1">
                  <div
                    className="custom-expanded u-palette-1-base u-shape u-shape-rectangle u-shape-2"
                    data-animation-name="customAnimationIn"
                    data-animation-duration={1500}
                    data-animation-delay={500}
                  />
                  <div
                    className="u-container-style u-group u-image u-image-tiles u-image-1"
                    data-animation-name="customAnimationIn"
                    data-animation-duration={1500}
                    data-animation-delay={500}
                  >
                    <div className="u-container-layout u-container-layout-2" />
                  </div>
                  images/0fd3416c.jpeg
                  <img
                    src="./images/IMG_2142.jpg"
                    alt
                    className="u-image u-image-default u-image-2"
                    data-animation-name="customAnimationIn"
                    data-animation-duration={1500}
                    data-animation-delay={500}
                    data-image-width={5815}
                    data-image-height={3271}
                  />
                </div>
              </div>
              <div
                className="u-container-align-left u-container-style u-layout-cell u-size-26 u-layout-cell-2"
                data-animation-name="customAnimationIn"
                data-animation-duration={1500}
                data-animation-delay={500}
              >
                <div className="u-container-layout u-valign-middle u-container-layout-3">
                  <h2 className="u-align-left u-text u-text-1">
                    Luzes Naturais
                    <br />
                  </h2>
                  <p className="u-align-left u-large-text u-text u-text-variant u-text-2">
                    Descubra a beleza natural das paisagens intocadas através da
                    lente de nossos fotógrafos talentosos. Explore conosco
                    momentos únicos e emocionantes!
                  </p>
                  <p className="u-align-left u-text u-text-3">
                    Imagens da&nbsp;
                    <a
                      href="https://www.freepik.com/photos/wedding"
                      className="u-active-none u-border-1 u-border-active-palette-1-base u-border-black u-border-hover-palette-1-base u-border-no-left u-border-no-right u-border-no-top u-btn u-button-link u-button-style u-hover-none u-none u-text-body-color u-btn-1"
                    >
                      Candstudio
                    </a>
                  </p>
                  <a
                    href="Blog.html"
                    className="u-align-left u-border-2 u-border-active-black u-border-hover-black u-border-palette-1-base u-btn u-button-style u-none u-text-active-black u-text-black u-text-hover-black u-btn-2"
                  >
                    ver mais
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="u-clearfix u-valign-bottom-xl u-white u-section-3"
        id="sec-744b"
      >
        <div
          className="u-align-right u-palette-1-light-2 u-shape u-shape-rectangle u-shape-1"
          data-animation-name="customAnimationIn"
          data-animation-duration={1000}
          data-animation-delay={0}
        />
        <div className="data-layout-selected u-clearfix u-layout-wrap u-layout-wrap-1">
          <div className="u-layout">
            <div className="u-layout-row">
              <div
                className="u-container-style u-layout-cell u-left-cell u-size-30 u-layout-cell-1"
                data-animation-name="customAnimationIn"
                data-animation-duration={1500}
                data-animation-delay={500}
              >
                <div className="u-container-layout u-valign-top u-container-layout-1">
                  <h2 className="u-text u-text-1">
                    Explorando a Beleza Natural: Fotografia que Captura Momentos
                    Únicos
                  </h2>
                  <div className="u-border-6 u-border-palette-1-base u-line u-line-horizontal u-line-1" />
                </div>
              </div>
              <div
                className="u-container-align-left u-container-style u-layout-cell u-right-cell u-size-30 u-layout-cell-2"
                data-animation-name="customAnimationIn"
                data-animation-duration={1500}
                data-animation-delay={250}
              >
                <div className="u-container-layout u-valign-top u-container-layout-2">
                  <p className="u-align-left u-text u-text-2">
                    Descubra conosco a arte de capturar a beleza da natureza em
                    suas formas mais puras e fascinantes. Nossos fotógrafos
                    especializados utilizam técnicas avançadas para garantir que
                    cada momento seja eternizado com perfeição. De paisagens
                    exuberantes a retratos emocionantes, cada imagem conta uma
                    história única. Explore nosso portfólio diversificado e
                    deixe-se encantar pela magia da fotografia de alta
                    qualidade.
                  </p>
                  <a
                    href="Solicitar_preco.html"
                    className="u-align-left u-btn u-button-style u-text-body-alt-color u-btn-1"
                  >
                    solicitar pacote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="u-clearfix u-section-4" id="carousel_4d37">
        <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
          <div className="data-layout-selected u-clearfix u-expanded-width u-gutter-30 u-layout-wrap u-layout-wrap-1">
            <div className="u-gutter-0 u-layout">
              <div className="u-layout-row">
                <div className="u-size-30">
                  <div className="u-layout-col">
                    <div
                      className="u-align-left u-container-style u-image u-layout-cell u-left-cell u-size-30 u-image-1"
                      data-image-width={3264}
                      data-image-height={4928}
                      data-animation-name="customAnimationIn"
                      data-animation-duration={1500}
                      data-animation-delay={500}
                    >
                      <div className="u-container-layout u-container-layout-1" />
                    </div>
                    <div
                      className="u-align-left u-container-align-left u-container-style u-layout-cell u-left-cell u-size-30 u-layout-cell-2"
                      data-animation-name="customAnimationIn"
                      data-animation-duration={1500}
                      data-animation-delay={250}
                    >
                      <div className="u-container-layout u-valign-top u-container-layout-2">
                        <h2 className="u-align-left u-text u-text-1">
                          Cores do&nbsp;
                          <span style={{ fontWeight: 700 }} />
                          <span style={{ fontWeight: 700 }}>Noivado</span>
                        </h2>
                        <p className="u-align-left u-text u-text-2">
                          Capturando a magia do seu noivado: momentos de amor e
                          alegria que durarão para sempre.
                        </p>
                        <p className="u-align-left u-text u-text-3">
                          Imagens de&nbsp;
                          <a
                            href="https://freepik.com/photos/people"
                            className="u-active-none u-border-1 u-border-black u-border-no-left u-border-no-right u-border-no-top u-btn u-button-link u-button-style u-hover-none u-none u-text-body-color u-btn-1"
                          >
                            F.Candieiro
                          </a>
                        </p>
                        <a
                          href="Pacotes.html"
                          className="u-align-left u-btn u-button-style u-text-body-alt-color u-btn-2"
                        >
                          solicitar pacote
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="u-size-30">
                  <div className="u-layout-row">
                    <div className="u-align-left u-container-style u-layout-cell u-right-cell u-size-60 u-layout-cell-3">
                      <div className="u-container-layout u-container-layout-3">
                        <div
                          className="u-align-left u-palette-1-light-2 u-shape u-shape-1"
                          data-animation-name="customAnimationIn"
                          data-animation-duration={1500}
                          data-animation-delay={500}
                        />
                        <p
                          className="u-text u-text-4"
                          data-animation-name="customAnimationIn"
                          data-animation-duration={1500}
                          data-animation-delay={500}
                        >
                          Trabalhamos com paixão e dedicação, respeitando os
                          desafios como oportunidades de crescimento pessoal e
                          profissional.
                        </p>
                        <img
                          src="./images/IMG_1093.jpg"
                          alt
                          className="u-align-left u-image u-image-2"
                          data-animation-name="customAnimationIn"
                          data-animation-duration={1500}
                          data-animation-delay={250}
                          data-image-width={1638}
                          data-image-height={2048}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="u-align-center u-clearfix u-container-align-center u-section-5"
        id="carousel_4e04"
      >
        <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
          <div className="data-layout-selected u-clearfix u-expanded-width u-gutter-0 u-layout-wrap u-layout-wrap-1">
            <div className="u-gutter-0 u-layout">
              <div className="u-layout-row">
                <div className="u-size-30 u-size-60-md">
                  <div className="u-layout-col">
                    <div className="u-size-30">
                      <div className="u-layout-row">
                        <div
                          className="u-align-left u-container-style u-layout-cell u-size-60 u-layout-cell-1"
                          data-animation-name="customAnimationIn"
                          data-animation-duration={1750}
                          data-animation-delay={500}
                        >
                          <div className="u-container-layout u-container-layout-1">
                            <h3 className="u-text u-text-1">Eternidade</h3>
                            <blockquote className="u-text u-text-2">
                              Momentos inesquecíveis, risos compartilhados e
                              memórias guardadas. Celebre cada instante,
                              eternize seu aniversário!
                            </blockquote>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="u-size-30">
                      <div className="u-layout-row">
                        <div
                          className="u-align-left u-container-style u-layout-cell u-size-60 u-layout-cell-2"
                          data-animation-name="customAnimationIn"
                          data-animation-duration={1500}
                          data-animation-delay={750}
                        >
                          <div className="u-container-layout u-valign-top u-container-layout-2">
                            <h3 className="u-text u-text-3">Essência</h3>
                            <blockquote className="u-text u-text-4">
                              A magia do seu aniversário capturada em cada foto,
                              preservando a essência dos seus momentos mais
                              preciosos.
                            </blockquote>
                            <p className="u-text u-text-5">
                              Image from
                              <a
                                href="https://www.freepik.com/photos/luxury"
                                className="u-border-1 u-border-black u-border-no-left u-border-no-right u-border-no-top u-btn u-button-link u-button-style u-none u-text-body-color u-btn-1"
                              >
                                Freepik
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="u-size-30 u-size-60-md">
                  <div className="u-layout-col">
                    <div
                      className="u-container-style u-image u-layout-cell u-right-cell u-size-60 u-image-1"
                      data-animation-name="customAnimationIn"
                      data-animation-duration={1500}
                      data-animation-delay={500}
                      data-image-width={3264}
                      data-image-height={4928}
                    >
                      <div className="u-container-layout u-container-layout-3" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="u-clearfix u-container-align-center u-palette-1-light-2 u-section-6"
        id="sec-a07a"
      >
        <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
          <div
            className="u-border-10 u-border-white u-image u-image-circle u-image-1"
            data-animation-name="customAnimationIn"
            data-animation-duration={1500}
            data-animation-delay={500}
            data-image-width={2048}
            data-image-height={1365}
          />
          <div
            className="u-image u-image-circle u-image-2"
            data-animation-name="customAnimationIn"
            data-animation-duration={1500}
            data-animation-delay={250}
            data-image-width={1638}
            data-image-height={2048}
          />
          <div
            className="u-border-20 u-border-white u-image u-image-circle u-image-3"
            data-image-width={1365}
            data-image-height={2048}
            data-animation-name="customAnimationIn"
            data-animation-duration={1500}
            data-animation-delay={500}
          />
          <div
            className="u-shape u-shape-svg u-text-palette-1-base u-shape-1"
            data-animation-name="customAnimationIn"
            data-animation-duration={1500}
            data-animation-delay={750}
          >
            <svg
              className="u-svg-link"
              preserveAspectRatio="none"
              viewBox="0 0 160 160"
              style={{}}
            >
              <use xlinkHref="#svg-1186" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              xmlSpace="preserve"
              className="u-svg-content"
              viewBox="0 0 160 160"
              x="0px"
              y="0px"
              id="svg-1186"
              style={{ enableBackground: "new 0 0 160 160" }}
            >
              <path
                d="M80,30c27.6,0,50,22.4,50,50s-22.4,50-50,50s-50-22.4-50-50S52.4,30,80,30 M80,0C35.8,0,0,35.8,0,80s35.8,80,80,80
	s80-35.8,80-80S124.2,0,80,0L80,0z"
              />
            </svg>
          </div>
          <div
            className="u-shape u-shape-svg u-text-palette-1-base u-shape-2"
            data-animation-name="customAnimationIn"
            data-animation-duration={1500}
            data-animation-delay={750}
          >
            <svg
              className="u-svg-link"
              preserveAspectRatio="none"
              viewBox="0 0 160 160"
              style={{}}
            >
              <use xlinkHref="#svg-525f" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              xmlSpace="preserve"
              className="u-svg-content"
              viewBox="0 0 160 160"
              x="0px"
              y="0px"
              id="svg-525f"
              style={{ enableBackground: "new 0 0 160 160" }}
            >
              <path
                d="M80,30c27.6,0,50,22.4,50,50s-22.4,50-50,50s-50-22.4-50-50S52.4,30,80,30 M80,0C35.8,0,0,35.8,0,80s35.8,80,80,80
	s80-35.8,80-80S124.2,0,80,0L80,0z"
              />
            </svg>
          </div>
          <div
            className="u-align-center u-container-align-center u-container-style u-expanded-width u-group u-shape-rectangle u-group-1"
            data-animation-name="flipIn"
            data-animation-duration={1500}
            data-animation-direction="X"
            data-animation-delay={750}
          >
            <div className="u-container-layout u-container-layout-1">
              <h2 className="u-align-center u-text u-text-1">
                Cerimónia de Casamentos
              </h2>
              <p className="u-align-center u-text u-text-2">
                Deixe-nos contar a sua história de amor. Fotografias autênticas
                e emocionantes que refletem a essência e a beleza do seu
                casamento, para sempre.
              </p>
              <p className="u-align-center u-text u-text-default u-text-3">
                Imagens de&nbsp;
                <a
                  href="https://www.freepik.com/photos/background"
                  className="u-border-1 u-border-black u-border-no-left u-border-no-right u-border-no-top u-btn u-button-link u-button-style u-none u-text-body-color u-btn-1"
                >
                  F.Candieiro
                </a>
              </p>
              <a
                href="Blog.html"
                className="u-active-white u-align-center u-border-2 u-border-active-white u-border-black u-border-hover-white u-btn u-button-style u-hover-white u-none u-text-active-black u-text-black u-text-hover-black u-btn-2"
              >
                saber mais
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="u-clearfix u-section-7" id="carousel_ca86">
        <div className="u-expanded-width u-gallery u-layout-grid u-lightbox u-no-transition u-show-text-on-hover u-gallery-1">
          <div className="u-gallery-inner u-gallery-inner-1">
            <div className="u-effect-fade u-gallery-item">
              <div
                className="u-back-slide"
                data-image-width={768}
                data-image-height={1153}
              >
                <img
                  className="u-back-image u-expanded"
                  src="./images/IMG_1195_a.jpg"
                />
              </div>
              <div className="u-over-slide u-shading u-over-slide-1" />
            </div>
            <div className="u-effect-fade u-gallery-item">
              <div
                className="u-back-slide"
                data-image-width={1638}
                data-image-height={2048}
              >
                <img
                  className="u-back-image u-expanded"
                  src="./images/IMG_1070.jpg"
                />
              </div>
              <div className="u-over-slide u-shading u-over-slide-2" />
            </div>
            <div className="u-effect-fade u-gallery-item">
              <div
                className="u-back-slide"
                data-image-width={3264}
                data-image-height={4928}
              >
                <img
                  className="u-back-image u-expanded"
                  src="./images/CTS_6220.jpg"
                />
              </div>
              <div className="u-over-slide u-shading u-over-slide-3" />
            </div>
          </div>
        </div>
      </section>
      <section
        className="u-clearfix u-container-align-center u-section-8"
        id="carousel_987d"
      >
        <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
          <div className="data-layout-selected u-clearfix u-expanded-width u-gutter-20 u-layout-wrap u-layout-wrap-1">
            <div className="u-layout">
              <div className="u-layout-row">
                <div className="u-size-30 u-size-60-md">
                  <div className="u-layout-col">
                    <div
                      className="u-align-left u-container-align-left u-container-style u-layout-cell u-palette-1-light-2 u-right-cell u-size-60 u-layout-cell-1"
                      data-animation-name="customAnimationIn"
                      data-animation-duration={1500}
                      data-animation-delay={500}
                    >
                      <div className="u-container-layout u-valign-middle u-container-layout-1">
                        <h2 className="u-align-left u-text u-text-1">
                          Fale Conosco
                        </h2>
                        <p className="u-align-left u-text u-text-2">
                          Queremos capturar seus momentos especiais! Preencha o
                          formulário abaixo e entraremos em contato em breve.
                        </p>
                        <div className="u-form u-form-1">
                          <form
                            action="https://forms.nicepagesrv.com/v2/form/process"
                            className="u-clearfix u-form-spacing-30 u-form-vertical u-inner-form"
                            style={{ padding: 0 }}
                            source="email"
                            name="form"
                          >
                            <div className="u-form-email u-form-group u-form-partition-factor-2 u-form-group-1">
                              <label
                                htmlFor="email-da30"
                                className="u-form-control-hidden u-label"
                                wfd-invisible="true"
                              >
                                Email
                              </label>
                              <input
                                type="email"
                                placeholder="Digite um endereço de e-mail válido."
                                id="email-da30"
                                name="email"
                                className="u-border-2 u-border-grey-75 u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle"
                                required
                              />
                            </div>
                            <div className="u-form-group u-form-name u-form-partition-factor-2 u-form-group-2">
                              <label
                                htmlFor="name-da30"
                                className="u-form-control-hidden u-label"
                                wfd-invisible="true"
                              >
                                Name
                              </label>
                              <input
                                type="text"
                                placeholder="Digite seu Nome"
                                id="name-da30"
                                name="name"
                                className="u-border-2 u-border-grey-75 u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle"
                                required
                              />
                            </div>
                            <div className="u-form-agree u-form-group u-form-group-3">
                              <label
                                className="u-block-2cb1-32 u-field-label"
                                style={{}}
                              />
                              <input
                                type="checkbox"
                                id="agree-1d18"
                                name="agree"
                                className="u-agree-checkbox u-field-input"
                                required
                              />
                              <label
                                htmlFor="agree-1d18"
                                className="u-block-2cb1-32 u-field-label"
                                style={{}}
                              >
                                I accept the <a href="#">Terms of Service</a>
                              </label>
                            </div>
                            <div className="u-form-group u-form-message u-form-group-4">
                              <label
                                htmlFor="message-da30"
                                className="u-form-control-hidden u-label"
                                wfd-invisible="true"
                              >
                                Message
                              </label>
                              <textarea
                                placeholder="Digite a sua mensagem"
                                rows={4}
                                cols={50}
                                id="message-da30"
                                name="message"
                                className="u-border-2 u-border-grey-75 u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle"
                                required
                                defaultValue={""}
                              />
                            </div>
                            <div className="u-align-left u-form-group u-form-submit u-form-group-5">
                              <a
                                href="#"
                                className="u-border-2 u-border-black u-btn u-btn-submit u-button-style u-hover-black u-none u-text-black u-text-hover-white u-btn-1"
                              >
                                Enviar
                              </a>
                              <input
                                type="submit"
                                defaultValue="submit"
                                className="u-form-control-hidden"
                                wfd-invisible="true"
                              />
                            </div>
                            <div
                              className="u-form-send-message u-form-send-success"
                              wfd-invisible="true"
                            >
                              Thank you! Your message has been sent.
                            </div>
                            <div
                              className="u-form-send-error u-form-send-message"
                              wfd-invisible="true"
                            >
                              Unable to send your message. Please fix errors
                              then try again.
                            </div>
                            <input
                              type="hidden"
                              defaultValue
                              name="recaptchaResponse"
                              wfd-invisible="true"
                            />
                            <input
                              type="hidden"
                              name="formServices"
                              defaultValue="ce721c94-39dc-1d6e-af2f-7b8813c45aff"
                            />
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="u-size-30 u-size-60-md">
                  <div className="u-layout-col">
                    <div className="u-size-40">
                      <div className="u-layout-row">
                        <div
                          className="u-container-align-left u-container-style u-layout-cell u-left-cell u-size-60 u-layout-cell-2"
                          data-animation-name="customAnimationIn"
                          data-animation-duration={1500}
                          data-animation-delay={250}
                        >
                          <div className="u-container-layout u-valign-top u-container-layout-2">
                            <p className="u-align-left u-text u-text-3">
                              <b />
                              <b>
                                Capture cada momento especial do seu grande dia
                                com um fotógrafo profissional. Transforme suas
                                memórias em imagens inesquecíveis, cheias de
                                emoção e beleza. Garantimos fotos autênticas,
                                criativas e de alta qualidade, para que você
                                possa reviver a magia do seu casamento sempre
                                que desejar.
                              </b>
                              <br />
                              <br />
                              Escolher o fotógrafo certo é essencial para
                              eternizar seu casamento. Com atenção aos detalhes
                              e um olhar artístico, oferecemos um serviço
                              personalizado que captura a essência e a alegria
                              de cada instante, para memórias que duram para
                              sempre.
                              <br />
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="u-size-20">
                      <div className="u-layout-row">
                        <div
                          className="u-container-align-left u-container-style u-layout-cell u-size-36 u-layout-cell-3"
                          data-animation-name="customAnimationIn"
                          data-animation-duration={1500}
                          data-animation-delay={250}
                        >
                          <div className="u-container-layout u-valign-top u-container-layout-3">
                            <p className="u-align-left u-text u-text-4">
                              Fotos capturam momentos únicos, destacando luz,
                              cor e emoção em cada detalhe.
                            </p>
                          </div>
                        </div>
                        <div
                          className="u-align-left u-container-style u-image u-layout-cell u-left-cell u-size-24 u-image-1"
                          data-image-width={1365}
                          data-image-height={2048}
                          data-animation-name="customAnimationIn"
                          data-animation-duration={1500}
                          data-animation-delay={500}
                        >
                          <div className="u-container-layout u-container-layout-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="u-clearfix u-footer u-grey-80" id="sec-b18c">
        <div className="u-clearfix u-sheet u-sheet-1">
          <div className="data-layout-selected u-clearfix u-expanded-width u-gutter-30 u-layout-wrap u-layout-wrap-1">
            <div className="u-gutter-0 u-layout">
              <div className="u-layout-row">
                <div className="u-align-left u-container-style u-layout-cell u-left-cell u-size-20 u-layout-cell-1">
                  <div className="u-container-layout u-valign-middle u-container-layout-1">
                    {/*position*/}
                    <div data-position className="u-position">
                      {/*block*/}
                      <div className="u-block">
                        <div className="u-block-container u-clearfix">
                          {/*block_header*/}
                          <h5 className="u-block-header u-text u-text-1">
                            {/*block_header_content*/}+244 924 983 488
                            {/*/block_header_content*/}
                          </h5>
                          {/*/block_header*/}
                          {/*block_content*/}
                          <div className="u-block-content u-text">
                            {/*block_content_content*/}© 2024 Candstudio. Todos
                            os direitos reservados. Siga-nos nas redes sociais
                            para mais novidades!
                            {/*/block_content_content*/}
                          </div>
                          {/*/block_content*/}
                        </div>
                      </div>
                      {/*/block*/}
                    </div>
                    {/*/position*/}
                  </div>
                </div>
                <div className="u-container-style u-layout-cell u-size-20 u-layout-cell-2">
                  <div className="u-container-layout u-valign-middle u-container-layout-2">
                    <a
                      href="#"
                      className="u-image u-logo u-image-1"
                      data-image-width={2007}
                      data-image-height={2017}
                    >
                      <img
                        src="./images/374423296_716933023806042_509836287334985367_n.jpg"
                        className="u-logo-image u-logo-image-1"
                      />
                    </a>
                  </div>
                </div>
                <div className="u-align-right u-container-style u-layout-cell u-right-cell u-size-20 u-layout-cell-3">
                  <div className="u-container-layout u-valign-middle u-container-layout-3">
                    <div className="u-social-icons u-spacing-10 u-social-icons-1">
                      <a
                        className="u-social-url"
                        title="facebook"
                        target="_blank"
                        href
                      >
                        <span className="u-icon u-social-facebook u-social-icon u-icon-1">
                          <svg
                            className="u-svg-link"
                            preserveAspectRatio="xMidYMin slice"
                            viewBox="0 0 112 112"
                            style={{}}
                          >
                            <use xlinkHref="#svg-201e" />
                          </svg>
                          <svg
                            className="u-svg-content"
                            viewBox="0 0 112 112"
                            x={0}
                            y={0}
                            id="svg-201e"
                          >
                            <circle
                              fill="currentColor"
                              cx="56.1"
                              cy="56.1"
                              r={55}
                            />
                            <path
                              fill="#FFFFFF"
                              d="M73.5,31.6h-9.1c-1.4,0-3.6,0.8-3.6,3.9v8.5h12.6L72,58.3H60.8v40.8H43.9V58.3h-8V43.9h8v-9.2
c0-6.7,3.1-17,17-17h12.5v13.9H73.5z"
                            />
                          </svg>
                        </span>
                      </a>
                      <a
                        className="u-social-url"
                        title="twitter"
                        target="_blank"
                        href
                      >
                        <span className="u-icon u-social-icon u-social-twitter u-icon-2">
                          <svg
                            className="u-svg-link"
                            preserveAspectRatio="xMidYMin slice"
                            viewBox="0 0 112 112"
                            style={{}}
                          >
                            <use xlinkHref="#svg-b684" />
                          </svg>
                          <svg
                            className="u-svg-content"
                            viewBox="0 0 112 112"
                            x={0}
                            y={0}
                            id="svg-b684"
                          >
                            <circle
                              fill="currentColor"
                              className="st0"
                              cx="56.1"
                              cy="56.1"
                              r={55}
                            />
                            <path
                              fill="#FFFFFF"
                              d="M83.8,47.3c0,0.6,0,1.2,0,1.7c0,17.7-13.5,38.2-38.2,38.2C38,87.2,31,85,25,81.2c1,0.1,2.1,0.2,3.2,0.2
c6.3,0,12.1-2.1,16.7-5.7c-5.9-0.1-10.8-4-12.5-9.3c0.8,0.2,1.7,0.2,2.5,0.2c1.2,0,2.4-0.2,3.5-0.5c-6.1-1.2-10.8-6.7-10.8-13.1
c0-0.1,0-0.1,0-0.2c1.8,1,3.9,1.6,6.1,1.7c-3.6-2.4-6-6.5-6-11.2c0-2.5,0.7-4.8,1.8-6.7c6.6,8.1,16.5,13.5,27.6,14
c-0.2-1-0.3-2-0.3-3.1c0-7.4,6-13.4,13.4-13.4c3.9,0,7.3,1.6,9.8,4.2c3.1-0.6,5.9-1.7,8.5-3.3c-1,3.1-3.1,5.8-5.9,7.4
c2.7-0.3,5.3-1,7.7-2.1C88.7,43,86.4,45.4,83.8,47.3z"
                            />
                          </svg>
                        </span>
                      </a>
                      <a
                        className="u-social-url"
                        title="instagram"
                        target="_blank"
                        href
                      >
                        <span className="u-icon u-social-icon u-social-instagram u-icon-3">
                          <svg
                            className="u-svg-link"
                            preserveAspectRatio="xMidYMin slice"
                            viewBox="0 0 112 112"
                            style={{}}
                          >
                            <use xlinkHref="#svg-25cb" />
                          </svg>
                          <svg
                            className="u-svg-content"
                            viewBox="0 0 112 112"
                            x={0}
                            y={0}
                            id="svg-25cb"
                          >
                            <circle
                              fill="currentColor"
                              cx="56.1"
                              cy="56.1"
                              r={55}
                            />
                            <path
                              fill="#FFFFFF"
                              d="M55.9,38.2c-9.9,0-17.9,8-17.9,17.9C38,66,46,74,55.9,74c9.9,0,17.9-8,17.9-17.9C73.8,46.2,65.8,38.2,55.9,38.2
z M55.9,66.4c-5.7,0-10.3-4.6-10.3-10.3c-0.1-5.7,4.6-10.3,10.3-10.3c5.7,0,10.3,4.6,10.3,10.3C66.2,61.8,61.6,66.4,55.9,66.4z"
                            />
                            <path
                              fill="#FFFFFF"
                              d="M74.3,33.5c-2.3,0-4.2,1.9-4.2,4.2s1.9,4.2,4.2,4.2s4.2-1.9,4.2-4.2S76.6,33.5,74.3,33.5z"
                            />
                            <path
                              fill="#FFFFFF"
                              d="M73.1,21.3H38.6c-9.7,0-17.5,7.9-17.5,17.5v34.5c0,9.7,7.9,17.6,17.5,17.6h34.5c9.7,0,17.5-7.9,17.5-17.5V38.8
C90.6,29.1,82.7,21.3,73.1,21.3z M83,73.3c0,5.5-4.5,9.9-9.9,9.9H38.6c-5.5,0-9.9-4.5-9.9-9.9V38.8c0-5.5,4.5-9.9,9.9-9.9h34.5
c5.5,0,9.9,4.5,9.9,9.9V73.3z"
                            />
                          </svg>
                        </span>
                      </a>
                      <a
                        className="u-social-url"
                        title="linkedin"
                        target="_blank"
                        href
                      >
                        <span className="u-icon u-social-icon u-social-linkedin u-icon-4">
                          <svg
                            className="u-svg-link"
                            preserveAspectRatio="xMidYMin slice"
                            viewBox="0 0 112 112"
                            style={{}}
                          >
                            <use xlinkHref="#svg-0f17" />
                          </svg>
                          <svg
                            className="u-svg-content"
                            viewBox="0 0 112 112"
                            x={0}
                            y={0}
                            id="svg-0f17"
                          >
                            <circle
                              fill="currentColor"
                              cx="56.1"
                              cy="56.1"
                              r={55}
                            />
                            <path
                              fill="#FFFFFF"
                              d="M41.3,83.7H27.9V43.4h13.4V83.7z M34.6,37.9L34.6,37.9c-4.6,0-7.5-3.1-7.5-7c0-4,3-7,7.6-7s7.4,3,7.5,7
C42.2,34.8,39.2,37.9,34.6,37.9z M89.6,83.7H76.2V62.2c0-5.4-1.9-9.1-6.8-9.1c-3.7,0-5.9,2.5-6.9,4.9c-0.4,0.9-0.4,2.1-0.4,3.3v22.5
H48.7c0,0,0.2-36.5,0-40.3h13.4v5.7c1.8-2.7,5-6.7,12.1-6.7c8.8,0,15.4,5.8,15.4,18.1V83.7z"
                            />
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <section className="u-backlink u-clearfix u-grey-80">
        <p className="u-text">
          <span>This site was created with the </span>
          <a
            className="u-link"
            href="https://nicepage.com/"
            target="_blank"
            rel="nofollow"
          >
            <span>Nicepage</span>
          </a>
        </p>
      </section>
    </div>
  );
}

export default App;
