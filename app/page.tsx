import { Content } from "./components/Content";
import { Item } from "./components/Item";
import { Social } from "./components/Social";
import * as content from "./content.json";

export default function Page() {
  const { intro, about, services } = content;

  return (
    <>
      <section className="section">
        <Content id="intro" blockName="intro" isHeadingLarge={true} {...intro}>
          <ul className="intro__socials">
            {intro.socials.map((v) => (
              <li id={v.id} key={v.id}>
                <Social key={v.id} {...v} />
              </li>
            ))}
          </ul>
        </Content>
      </section>
      <section className="section">
        <Content id="about" blockName="about" {...about} />
      </section>
      <section className="section">
        <Content id="services" blockName="services" {...services}>
          <div className="services__articles">
            {services.items.map((v) => (
              <Item key={v.id} blockName="services_article" {...v} />
            ))}
          </div>
        </Content>
      </section>
    </>
  );
}
