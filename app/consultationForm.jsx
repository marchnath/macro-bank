import Cost from "./cost";
import Consult from "./consult";
const ConsultationForm = () => {
  return (
    <section
      className="pt-16 mt-10 px-4 bg-[url('/bg/bgconsult.svg')] bg-no-repeat bg-cover border z-50"
      id="consultation"
    >
      <Consult />
      <Cost />
    </section>
  );
};

export default ConsultationForm;
