import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import GenericProjectsHeader from "../../components/GenericProjectsHeader";
import ProjectDescription from "../../components/ProjectDescription";
import Clinton from "../../assets/images/clinton.jpg";

const Covid19Project = () => {
  return;
  <div>
    <Navbar />
    <GenericProjectsHeader
      heading="COVID-19 Project"
      text="A foray in Covid-19 data analysis"
      backgroundImage={Clinton}
    />
    <ProjectDescription
      heading="Cicero's Oration against Catiline"
      text1="How far will you (continue to) abuse our patience, Catiline? For how much longer
will that rage of yours make a mockery of us? To what point will your unbridled
audacity show itself? Did the nocturnal garrison on the Palatine, the watch patrols of
the city, the fear of the people, the assemblies of all the good men, this most fortified
place of holding the senate, the faces and expressions of all these people [the senators]
not move you at all? Do you not realise that your plans lie revealed? Do you not see
that your plot is already held in check by the knowledge of all these people? Do you
think that any of us do not know what you did last night, what you did the night
before, where you were, who you summoned, and what plans you made?"
      image1={Clinton}
      text2="O what times (we live in)! O what customs (we pursue)! The senate understands
these things; the consul sees these things; this man, however, lives. He lives? No
indeed, he even comes to the senate. He even takes part in public affairs. He points
out and designates with his eyes, individuals amongst us for slaughter. But we, brave
men, seem to do enough for the state, if we avoid, the rage and the weapons of that
man. You, Catiline, should have been led to death already long ago [lit. it behoved
you to be led…] by order of the consul, that ruin, which you are devising against us,
should have been conferred upon you.  Indeed a most distinguished man, Publius Scipio, pontifex maximus, as a private man
killed Tiberius Gracchus, (although) weakening the affairs of state (only) moderately:
Will we consuls put up with Catiline, wanting to lay waste to the whole earth with
slaughter and fire? For I pass over those old times too much, because Gaius Servilius
Ahala killed with his own hand Spurius Manlius, striving after a new state of affairs.
There was, there was once in this state that courage so that brave men might check a
harmful citizen with fiercer penalties than the bitterest enemy. We have a decree of the
state against you, Catiline, both strong and grave; the state does not lack the advice or
authority of this class [senate]. We, we, I say it openly, we consuls are lacking."
      image2={Deacon}
    />
  </div>;
};

export default Covid19Project;
