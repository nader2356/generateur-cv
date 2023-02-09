import { Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import AboutMe, {
  aboutMeInitialValues,
  aboutMeValidationSchema,
} from "../Section/AboutMe";


const MainForm = () => {
  const validationSchema = Yup.object({
    aboutMe: aboutMeValidationSchema,
  
  });

  const [Active, setActive] = useState("aboutMe");

  const mainSectionInitialValues = {
    aboutMe: aboutMeInitialValues,
    
  };

  return (
    <div className="flex min-h-screen flex-col justify-center bg-[white] py-6 sm:px-6 lg:px-8">
      <Formik
        initialValues={mainSectionInitialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => {
          return (
            <div className=" w-11/12  h-full lg:ml-28">
              <form onSubmit={formik.handleSubmit}>
                <AboutMe
                  handleChange={formik.handleChange}
                  namespace="aboutMe"
                  values={formik.values.aboutMe}
                  setActive={setActive}
                  Active={Active}
                  Titre="aboutMe"
                />
               
               
                
                <div className="flex w-96 ml-28 mt-8 ">
                  <button
                    className="inline-flex items-center text-sm font-medium h-15  py-4 mr-5 rounded-md border border-transparent text-white bg-black  focus:outline-none 
                            focus:ring-2 focus:ring-offset-2   w-48 justify-center "
                    type="submit"
                  >
                    Sauvgarder
                  </button>
                </div>
              </form>
            </div>
          );
        }}
      </Formik>
    </div>
  );
};

export default MainForm;
