import './Main.css';
import heroBg from '../../assets/hero-bg.jpg';
// Service Card
import ServiceCard from '../ServiceCard/ServiceCard';
import committedHelp from '../../assets/committed-help.png';
// Pick Card
import PickCard from '../PickCard/PickCard';
import healthInsurance from '../../assets/health-insurance-icon.png';
import medicare from '../../assets/medicare-icon.png';
import lifeInsurance from '../../assets/life-insurance-icon.png';
import medicareAdvantage from '../../assets/medicare-advantage-icon.png';
import obamacare from '../../assets/obamacare-icon.png';
import shortTerm from '../../assets/short-term-icon.png';
import protecting from '../../assets/protecting.png';
import HelpCard from '../HelpCard/HelpCard';
// Help card
import doctor from '../../assets/doctor.jpg';
import familyTogether from '../../assets/family-together.jpg';
import medicalAppointment from '../../assets/medical-appointment.jpg';
import manSigning from '../../assets/man-signing.jpg';
// Third card
import saveMoney from '../../assets/saveMoney.png';
import agents from '../../assets/agents.png';

const Main = () => {
  return (
    <main>
      <section className="first">
        <div>
          <h1>Your guide to quality coverage</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
            totam atque et, architecto distinctio vitae rel voluptatum.
            Repudiandae dignissimos.
          </p>
          <button>Find Plans</button>
        </div>
        <img src={heroBg} alt="A happy family smiling together" />
      </section>

      <section className="second">
        <div>
          <ServiceCard img={medicare} text={'Health insurance'} />
          <ServiceCard img={medicareAdvantage} text={'Medicare supplement'} />
          <ServiceCard img={healthInsurance} text={'Medicare Advantage'} />
          <ServiceCard img={obamacare} text={'Life insurance'} />
          <ServiceCard img={shortTerm} text={'ACA obamacare'} />
        </div>
        <div className="dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </section>

      <section className="third">
        <img
          src={committedHelp}
          alt="Commited to help you"
          className="third-img"
        />
        <div className="third-title">
          <h1>Committed to help you find the right plan</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
            iusto dicta ipsam voluptatem eveniet omnis saepe, dignissimos, nemo
            voluptas voluptates eum vel voluptate harum, nobis repellat tempore?
            Voluptatem, assumenda doloribus.
          </p>
          <button>About insurezella</button>
          <div className="third-info">
            <div>
              <img src={saveMoney} alt="Save Money" />
              <span>Save Money Compare Plans</span>
            </div>
            <div>
              <img src={agents} alt="Agents" />
              <span>Licensed Agents</span>
            </div>
          </div>
        </div>
      </section>

      <section className="four">
        <h1 className="four-title">
          Pick the insurance that suits your needs.
        </h1>
        <div className="four-info">
          <PickCard img={healthInsurance} text={'Health insurance'} />
          <PickCard img={medicare} text={'Medicare Supplement'} />
          <PickCard img={lifeInsurance} text={'Life Insurance'} />
          <PickCard img={medicareAdvantage} text={'Medicare Advantage'} />
          <PickCard img={obamacare} text={'ACA / Obamacare'} />
          <PickCard img={shortTerm} text={'Short-Term Medical'} />
        </div>
      </section>

      <section className="five">
        <img src={protecting} alt="Consumer Protections" className="five-img" />
        <div className="five-title">
          <h1>Protecting people, one policy at a time.</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
            iusto dicta ipsam voluptatem eveniet omnis saepe, dignissimos, nemo
            voluptas voluptates eum vel voluptate harum, nobis repellat tempore?
            Voluptatem, assumenda doloribus. Voluptates eum vel voluptate harum,
            nobis repellat tempore? Voluptatem, assumenda doloribus voluptatem
            eveniet omnis saepe, dignissimos, nemo voluptas voluptates eum vel
            vol.
          </p>
          <button>Learn More</button>
        </div>
      </section>

      <section className="six">
        <h1>We're here to help</h1>
        <div className="six-info">
          <HelpCard
            img={doctor}
            text={'Health Insurance'}
            buttonText={'Compare plans'}
          />
          <HelpCard
            img={familyTogether}
            text={'Life Insurance'}
            buttonText={'Compare plans'}
          />
          <HelpCard
            img={medicalAppointment}
            text={'Medicare Supplement'}
            buttonText={'View plans'}
          />
          <HelpCard
            img={manSigning}
            text={'Medicare Advantage'}
            buttonText={'View plans'}
          />
        </div>
        <div className="dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </section>
    </main>
  );
};

export default Main;
