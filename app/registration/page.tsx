import Reg from "../../features/auth/reg";

export async function generateMetadata() {
  return {
    title: "Registration",
  };
}

const RegistrationPage = async () => {
  return <Reg title="Նոր օգտատիրոջ գրանցում" />;
};

export default RegistrationPage;
