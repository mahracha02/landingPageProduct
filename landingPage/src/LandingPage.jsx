import FakeCounter from "./Counter";
import FloatingButtons from "./FloatingButtons";

const LandingPage = () => {
  return (
    
    <div className="container-fluid " style={{ overflowX: "hidden", backgroundColor: "#FDF2E6",}} id="accueil">
      <FakeCounter variant="header"/>
      {/* Header Section */}
      <div className="text-center">
        <img src="photos/Reloji.png" className="img-fluid w-50" alt="Reloji" style={{ marginTop: "-3rem" }}/>
        <img src="photos/photo1.png" className="img-fluid w-100" alt="Montre Redmi" style={{ marginTop: "-5rem" }} />
        
        

        <h1
          className="fs-2 fs-md-1 fw-semibold"
          style={{ marginTop: "-5rem",
                   marginBottom: "3rem"
           }}
        >
          Redmi Watch 5 Active
        </h1>
        <div
          className="d-flex flex-column flex-md-row justify-content-center align-items-center"
          
        >
          <a href="#formulaire-commande" className="btn btn-danger btn-lg mx-3 mb-3 mb-md-0 fs-5 px-4 rounded-5">
            Commander
          </a>
          <a href="#decouvrir" className="btn btn-info btn-lg mx-3 mb-3 mb-md-0 text-white fs-5 px-4 rounded-5">
            Découvrir
          </a>

        </div>
        <div className="text-center">
          <img
            src="photos/down.png"
            className="img-fluid mx-auto d-block mt-5"
            alt="Watches"
            style={{
              width: "80px",
              height: "80px",
            }}
          />
        </div>


      </div>

      {/*Les raisons qui vous laissent penser à acheter votre montre Redmi 5 Active*/}
      <div className="text-center mt-5" id="p1">
        <div className="row ">
          <div className="col-5">
            <img
              src="photos/pic1.png"
              className="img-fluid w-100 h-100"
              alt="Watches"
            />
          </div>
          <div className="col-7">
            <img
              src="photos/pic4.png"
              className="img-fluid rounded-5 w-100 h-100"
              alt="Watches"
            />
          </div>
        </div>
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-12 col-md-5">
              <p
                className="mt-3 fw-semibold fst-italic text-center text-md-start"
                style={{
                  fontSize: "2.5rem", // Adjusted to be responsive
                  fontFamily: "Inter, sans-serif",
                }}
              >
                7 raisons qui vous laissent penser à acheter votre montre Redmi 5 Active
              </p>
            </div>
            <div className="col-12 col-md-7">
              <img
                src="photos/pic3.png"
                className="img-fluid mx-auto d-block"
                alt="Watches"
                style={{
                  maxWidth: "100%", // Ensures responsiveness
                  height: "auto",
                }}
              />
            </div>
          </div>
          <div className="text-center mt-5">
            <img
              src="photos/down.png"
              className="img-fluid mx-auto d-block"
              alt="Watches"
              style={{
                width: "80px",
                height: "80px",
              }}
            />
          </div>
        </div>
      </div>

      <div className="container-fluid" id="decouvrir">
        <div className="row mt-5">
          <div className="col-12 col-md-7">
            <h5
              className="mt-3 fw-semibold fst-italic text-center text-md-start"
              style={{
                fontSize: "2.5rem", 
                fontFamily: "Inter, sans-serif",
                marginBottom: "2rem",
              }}
            >
              Autonomie de la batterie de 18 jours
            </h5>
            <p
              className="fs-4 fw-light fst-italic text-center text-md-start"
              style={{
                lineHeight: "1.8", // Better readability
              }}
            >
              Sa batterie de 470v mAh offre une autonomie de 18 jours en mode
              utilisation standard et élimine le besoin de recharge fréquente
              en extérieur ou en déplacement.
            </p>
            <div className="d-flex justify-content-center justify-content-md-start mt-5">
            <a href="#formulaire-commande" className="btn btn-danger btn-lg mx-3 mb-3 mb-md-0 fs-5 px-4 rounded-5">
              Commander
            </a>


            </div>
          </div>

          <div className="col-12 col-md-5 d-flex justify-content-center align-items-center mt-4 mt-md-0">
            <img
              src="photos/batterie.png"
              className="img-fluid"
              style={{
                maxWidth: "80%", 
                height: "auto",
              }}
              alt="Battery"
            />
          </div>
        </div>

        <div className="text-center mt-5">
          <img
            src="photos/down.png"
            className="img-fluid mx-auto"
            alt="Down Arrow"
            style={{
              width: "80px",
              height: "80px",
            }}
          />
        </div>
      </div>





      <div className="container-fluid" id="p2">
        <div className="row mt-5">
          <div className="col-12 col-md-5">
            <img
              src="photos/pic5.png"
              className="img-fluid w-100"
              style={{
                marginTop: "-100px",
                marginLeft: "-20px",
                height: "auto", 
              }}
              alt="Watches"
            />
          </div>

          <div className="col-12 col-md-7 d-flex flex-column justify-content-center">
            <h5
              className="mt-3 fw-semibold fst-italic text-center text-md-start"
              style={{
                fontSize: "2.5rem", 
                fontFamily: "Inter, sans-serif",
                marginBottom: "2rem",
              }}
            >
              Réduction de bruit avec double microphone et appels Bluetooth®
            </h5>
            <div className="d-flex justify-content-center justify-content-md-start mt-5">
              <a href="#formulaire-commande" className="btn btn-danger btn-lg mx-3 mb-3 mb-md-0 fs-5 px-4 rounded-5">
                Commander
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-5">
          <img
            src="photos/down.png"
            className="img-fluid mx-auto"
            alt="Down Arrow"
            style={{
              width: "80px",
              height: "80px",
            }}
          />
        </div>
      </div>


      <div className="row mt-5" id="p3">
        <div className="col-6">
          <h5
            className="mt-3 fw-semibold fst-italic"
            style={{
              fontSize: "2.5rem",
              fontFamily: "Inter, sans-serif",
              marginBottom: "100px"
            }}
          >
            Analyse de la fréquence cardiaque
          </h5>
          
          <div className="d-flex justify-content-center justify-content-md-start mt-5">
            <a href="#formulaire-commande" className="btn btn-danger btn-lg mx-3 mb-3 mb-md-0 fs-5 px-4 rounded-5">
              Commander
            </a>
          </div>
        </div>
        <div className="col-6 d-flex align-items-center">
          <img
            src="photos/pic6.png"
            className="img-fluid "
            style={{marginTop: "-400px", 
              marginLeft: "20px",  
              height: "1000px",
              width: "1000px",
            }}
            alt="Battery"
          />
        </div>
        <div className="text-center">
          <img
            src="photos/down.png"
            className="img-fluid mx-auto d-block mt-5"
            alt="Watches"
            style={{
              width: "80px",
              height: "80px",
            }}
          />
        </div>
      </div>

      <div className="row mt-5" id="p4">
        <div className="col-5">
          <img
            src="photos/pic7.png"
            className="img-fluid w-100 "
            style={{marginTop: "-400px", marginLeft: "-20px", height: "1000px"}}
            alt="Watches"
          />
        </div>
        <div className="col-7 ">
          <h5
              className="mt-3 fw-semibold fst-italic"
              style={{
                fontSize: "2.5rem",
                fontFamily: "Inter, sans-serif",
                marginBottom: "100px",
                marginRight: "2rem",
              }}
            >
              Surveillance du taux d&apos;oxygène dans le sang
          </h5>
          <div className="d-flex justify-content-center justify-content-md-start mt-5">
            <a href="#formulaire-commande" className="btn btn-danger btn-lg mx-3 mb-3 mb-md-0 fs-5 px-4 rounded-5">
              Commander
            </a>
          </div>   
        </div>
        <div className="text-center">
          <img
            src="photos/down.png"
            className="img-fluid mx-auto d-block mt-5"
            alt="Watches"
            style={{
              width: "80px",
              height: "80px",
            }}
          />
        </div>
      </div>

      <div className="row mt-5" id="p5">
        <div className="col-6">
          <h5 className="mt-3 fw-semibold fst-italic text-danger" style={{fontsize: "30px"}}>
            Ne manquez pas cette opportunité ! Offrez-vous la montre connectée qui révolutionnera votre quotidien.
            <br /><br />
            Cliquez ci-dessous pour commander maintenant à un prix exclusif !!
          </h5>   

          <img
            src="photos/prix.png"
            className="img-fluid w-100 mt-2 px-1"
            style={{marginTop: "-100px", marginLeft: "-20px", height: "200px"}}
            alt="Watches"
          />
          <div className="d-flex justify-content-center justify-content-md-start mt-5">
            <a href="#formulaire-commande" className="btn btn-danger btn-lg mx-3 mb-3 mb-md-0 fs-5 px-4 rounded-5">
              Commander
            </a>
          </div>
        </div>
        <div className="col-6 d-flex flex-column align-items-center">
          <h4 className="text-center fw-semibold" style={{ fontFamily: 'Inter', fontSize: '40px' }}>
            &lsquo;Écran LCD 2&rsquo;
          </h4>
          <img
            src="photos/pic8.png"
            className="img-fluid"
            style={{ marginTop: "10px", height: "20rem" }}
            alt="Battery"
          />
        </div>

        <div className="text-center">
          <img
            src="photos/down.png"
            className="img-fluid mx-auto d-block mt-5"
            alt="Watches"
            style={{
              width: "80px",
              height: "80px",
            }}
          />
        </div>
      </div>

      <div className="row mt-5" id="p6">
        <div className="col-12">
            <img
              src="photos/pic9.png"
              className="img-fluid rounded-5 w-100"
              
              alt="Battery"
            />
        </div>
        <div className="col-12">
          <p className="fs-3 fw-light fst-italic text-start mt-8"
            
          >
          Prend en charge plus de 140 modes d&apos;entraînement, avec détection automatique des activités comme la course à pied, la marche, le vélo, le vélo elliptique, le rameur, et de la corde à sauter.
          <br /><br />
          Suit avec précision le niveau d&apos;effort quotidien, le score de vitalité et d&apos;autres indicateurs de santé, pour garantir que chaque entraînement est plus efficace et axé sur les données.


          </p>
          
        </div>
        <div className="text-center">
          <img
            src="photos/down.png"
            className="img-fluid mx-auto d-block mt-5"
            alt="Watches"
            style={{
              width: "80px",
              height: "80px",
            }}
          />
        </div>

      </div>

      <div className="row mt-5">
        <div className="col-5">
        <p className="fs-3 fw-light fst-italic text-start "
            style={{ marginTop: "50%" }}
            >
            Portez-la sans crainte sous la douche ou à la piscine.
            <br /><br />

            Ce produit est étanche jusqu&apos;à une pression de 5 ATM et
            peut être utilisé dans l&apos;eau sans aucun problème.
  
            </p>
            <img
              src="photos/prix.png"
              className="img-fluid w-100 mt-2 px-1"
              style={{marginTop: "-100px", marginLeft: "-20px", height: "200px"}}
              alt="Watches"
            />

        <div className="d-flex justify-content-center justify-content-md-start mt-5">
            <a href="#formulaire-commande" className="btn btn-danger btn-lg mx-3 mb-3 mb-md-0 fs-5 px-4 rounded-5">
              Commander
            </a>
        </div>
        </div>
        <div className="col-7 d-flex flex-column align-items-center">
        <h4 className="text-center" style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '5vw', marginLeft: '10%' }}>
          Résistance à l&apos;eau 5ATM
        </h4>      

          <img
            src="photos/photo6.webp"
            className="img-fluid"
            style={{ marginTop: "10px", height: "500px" }}
            alt="Battery"
          />
        </div>

        <div className="text-center">
          <img
            src="photos/down.png"
            className="img-fluid mx-auto d-block mt-5"
            alt="Watches"
            style={{
              width: "80px",
              height: "80px",
            }}
          />
        </div>
      </div>
      
      <div className="row mt-5" id="p7">
  
        <div className="col-12">
          <h4
            className="text-center fw-semibold"
            style={{ fontFamily: 'Inter', fontSize: '5vw', marginLeft: '10%' }}
          >
            Plus de 200 cadrans de montre pour mettre en valeur votre personnalité
          </h4>
        </div>

        <div className="col-12">
          <img
            src="photos/pic10.png"
            className="img-fluid rounded-5 mx-auto d-block mt-5"
            alt="Battery"
          />
        
          <div className="d-flex justify-content-center justify-content-md-start mt-5">
            <a href="#formulaire-commande" className="btn btn-danger btn-lg mx-3 mb-3 mb-md-0 fs-5 px-4 rounded-5">
              Commander
            </a>
          </div>
        </div>

        <div className="text-center mt-5">
          <img
            src="photos/down.png"
            className="img-fluid mx-auto d-block"
            alt="Watches"
            style={{
              width: "80px",
              height: "80px",
            }}
          />
        </div>
      </div>


      <div className="row mt-5" id="p8">
        <div className="col-4">
        <h5
          className="mt-3 fw-semibold fst-italic text-center"
          style={{
            fontSize: "2em",
            fontFamily: "Inter, sans-serif",
            marginBottom: "150px",
            color: "#FF3131",
            
          }}
        >
          <span >2 achetés</span><br></br>
          <span >=</span><br></br>
          <span >1 offert</span>
        </h5>
        <img 
            src="photos/fleche.png"
            className="img-fluid mx-auto d-block "
            alt="Watches"
            style={{width: "200px", height: "200px", marginTop:"-7rem"}}
        />

        </div>
        <div className="col-12 col-md-8 mx-auto mt-5">
          <h1 className="card-title text-center mb-4">Veuillez remplir le formulaire :</h1>
          <div className="card mx-auto mt-5 rounded-5" style={{ maxwidth: "600px", padding: "20px"}}>
            <div className="card-body " style={{backgroundcolor: "#F4BB7B"}}>
              <form>
                <div className="row mb-3">
                  <label  className="col-3 col-form-label">Nom</label>
                  <div className="col-9">
                    <input type="text" className="form-control" id="nom" placeholder="Votre nom" required />
                  </div>
                </div>

                <div className="row mb-3">
                  <label  className="col-3 col-form-label">Prénom</label>
                  <div className="col-9">
                    <input type="text" className="form-control" id="prenom" placeholder="Votre prénom" required />
                  </div>
                </div>

                <div className="row mb-3">
                  <label  className="col-3 col-form-label">Adresse</label>
                  <div className="col-9">
                    <input type="text" className="form-control" id="adresse" placeholder="Votre adresse" required />
                  </div>
                </div>

                <div className="row mb-3">
                  <label  className="col-3 col-form-label">Téléphone</label>
                  <div className="col-9">
                    <input type="tel" className="form-control" id="numero" placeholder="Votre numéro" required />
                  </div>
                </div>

                <div className="text-center my-4">
                  <span className="fw-bold fs-1" style={{color: "#ff3131"}}>79,98€</span>
                </div>

                
                <div className="d-flex justify-content-center">
                  <button type="submit" className="btn btn-danger btn-lg w-75 w-md-50 w-lg-25">
                    Commander maintenant
                  </button>
                </div>
              </form> 
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12">
            <h4 className="text-center" style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '5vw', marginLeft: '10%', color:"#ff3131"}}>
            Offre limitée : Prix spécial valable jusqu’à ce soir !
            </h4>
          </div>
          <div className="col-8 ">
              <img
                src="photos/pic11.png"
                className="img-fluid rounded-5"
                
                alt="securityPayment"
              />
            
            
          </div>
          <div className="col-4">
            <span className="fw-bold fs-1 " style={{marginLeft:"1.2em", color: "#000000"}}>39,99€</span>
            <div className="d-flex justify-content-center justify-content-md-start mt-5">
              <a href="#formulaire-commande" className="btn btn-danger btn-lg mx-3 mb-3 mb-md-0 fs-5 px-4 rounded-5">
                Commander
              </a>  
            </div>
          </div>

          <div className="container mt-5">
          <h1 className="text-center mb-5">Avis</h1>
          <div className="row">
            <div className="col-12 col-md-6 mb-4">
              <div className="card bg-white p-4 h-100 shadow-sm">
                <div className="d-flex align-items-center mb-3">
                  <span className="text-muted" style={{fontsize: "1em"}}>Publié il y a 2 heures :</span>
                  <span className="fw-bold ms-3" style={{fontsize: "1.2em"}}>Sofia M.</span>
                </div>
                <p className="text-muted">
                &lsquo;J&apos;adore cette montre ! Elle suit mes activités quotidiennes et reste élégante. 
                  La batterie tient incroyablement bien.&rsquo;
                </p>
                <div className="d-flex justify-content-center mb-3">
                  <i className="bi bi-star-fill text-warning fs-4">🌟</i>
                  <i className="bi bi-star-fill text-warning fs-4">🌟</i>
                  <i className="bi bi-star-fill text-warning fs-4">🌟</i>
                  <i className="bi bi-star-fill text-warning fs-4">🌟</i>
                  <i className="bi bi-star-fill text-warning fs-4">🌟</i>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 mb-4">
              <div className="card bg-white p-4 h-100 shadow-sm">
                <div className="d-flex align-items-center mb-3">
                  <span className="text-muted" style={{fontsize: "1em"}}>Publié il y a 21 heures :</span>
                  <span className="fw-bold ms-3" style={{fontsize: "1.2em"}}>Ahmed B.</span>
                </div>
                <p className="text-muted">
                  &apos;Rapport qualité/prix exceptionnel. Elle fait tout ce que je veux, et plus encore !&rsquo;
                </p>
                <div className="d-flex justify-content-center mb-3">
                  <i className="bi bi-star-fill text-warning fs-4">🌟</i>
                  <i className="bi bi-star-fill text-warning fs-4">🌟</i>
                  <i className="bi bi-star-fill text-warning fs-4">🌟</i>
                  <i className="bi bi-star-fill text-warning fs-4">🌟</i>
                  <i className="bi bi-star-fill text-warning fs-4">🌟</i>
                </div>
              </div>
            </div>
          </div>
        </div>

        </div>

        <div className="text-center">
          <a href="#p9" 
          >
            <img
              src="photos/down.png"
              className="img-fluid mx-auto d-block mt-5"
              alt="Watches"
              style={{
                width: "80px",
                height: "80px",
              }}
            />
          </a>
        </div>
        

      </div>

      <div className="text-center" id="p9">
        <div className="row ">
          <div className="col-12">
            <img src="photos/Reloji.png" 
            className="img-fluid w-75" 
            style={{marginTop:"-5em"}}
            alt="Reloji" />
          </div>
        </div> 

        <div className="card" style={{ width: "100%", margintop: "-1em" }} id="formulaire-commande">
            <div className="card-body p-2" style={{ backgroundColor: "#F4BB7B" }}>
              <div className="row p-4">
                <div className="col-12">
                  <div className="row">
                    <div className="col-12 col-lg-8">
                      <h1 className="card-title text-center mb-4">Veuillez remplir le formulaire :</h1>
                      <form>
                        <div className="row">
                          <div className="col-12 col-md-6">
                            <div className="mb-3">
                              <input type="text" className="form-control" id="nom" placeholder="Votre nom" required />
                            </div>
                            <div className="mb-3">
                              <input type="email" className="form-control" id="email" placeholder="Votre email" required />
                            </div>
                            <div className="mb-3">
                              <input type="text" className="form-control" id="adresse" placeholder="Votre adresse" required />
                            </div>
                          </div>
                          <div className="col-12 col-md-6">
                            <div className="mb-3">
                              <input type="text" className="form-control" id="prenom" placeholder="Votre prénom" required />
                            </div>
                            <div className="mb-3">
                            <input type="text" className="form-control" id="ville" placeholder="Votre ville" required />
                            </div>
                            <div className="mb-3">
                              <input type="tel" className="form-control" id="numero" placeholder="Votre numéro" required />
                            </div>
                          </div>
                        </div>
                      <div className="text-center my-4">
                        <span className="fw-bold fs-1" style={{color: "#ff3131"}}>39,99€</span>
                      </div>  
                      <FakeCounter variant="form" />
                      <div className="d-flex justify-content-center mt-5">
                        <button type="submit" className="btn btn-danger btn-lg w-75 w-md-50 w-lg-25 fw-bold fs-3 ">Commander maintenant</button>
                      </div>
                    </form>
                  </div>

                  <div className="col-12 col-lg-4 mt-4 mt-lg-0">
                    <img
                      src="photos/form.jpg"
                      className="img-fluid rounded-5 w-100 h-100"
                      alt="Form Visual"
                    />
                    <img
                      src="photos/safe-secure-checkout.webp"
                      className="img-fluid w-100 "
                      style={{ marginTop: "-3.7rem" }}
                      alt="Secure Checkout"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      

      <footer className="text-dark text-center py-3 mt-5" style={{ bottom: "0", width: "100%"}}>
        <p className="mb-0">© 2025 Copyright: 
          <span className="fw-bold">
            <a className="text-reset fw-bold" href="#accueil">
              Reloji
            </a>
          </span></p>
      </footer>
      
      {/* circle buttons whatsapp et revenir en haut */}
      <FloatingButtons />
    </div>
    
  );
};

export default LandingPage;
