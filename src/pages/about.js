import React, { Component } from 'react';
import Layout from '../components/layout';

export default class About extends Component {
  render() {
    const { location } = this.props;
    return (
      <Layout location={location}>
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor amet kogi yuccie yr ramps next level kinfolk paleo
          schlitz sartorial pop-up etsy raclette man braid. Banh mi deep v
          celiac pitchfork DIY. Glossier tote bag offal tofu art party next
          level authentic slow-carb skateboard church-key mlkshk ethical lomo.
          Cloud bread lyft kickstarter tote bag adaptogen helvetica celiac vinyl
          williamsburg banh mi yuccie chartreuse fam seitan hammock. Kickstarter
          tumblr church-key normcore green juice. Hexagon freegan messenger bag
          cold-pressed leggings vegan asymmetrical fashion axe meggings
          dreamcatcher bushwick banjo glossier viral.
        </p>
        <p>
          Tofu mumblecore fingerstache, truffaut subway tile tilde pok pok
          sriracha tote bag celiac iPhone unicorn squid pickled raclette. Photo
          booth kogi chartreuse franzen ramps la croix sartorial man braid YOLO.
          Artisan post-ironic bitters woke, locavore chicharrones banjo ugh.
          Master cleanse tumeric cray tacos sriracha bicycle rights. Health goth
          af yr pug letterpress 8-bit, YOLO pickled you probably haven't heard
          of them pabst man bun flannel sartorial.
        </p>
      </Layout>
    );
  }
}
