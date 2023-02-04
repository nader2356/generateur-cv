import { Formik } from "formik";

import * as Yup from "yup";

import { Collapse } from "antd";


const { Panel } = Collapse;

const MainForm = () => {
  const validationSchema = Yup.object({
    //about_me: aboutMeValidationSchema,
  });

  const mainSectionInitialValues = {
    //aboutMe: aboutMeInitialValues,
  };
  console.log(mainSectionInitialValues);

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
            <div className="mt-8 w-11/12 lg:-mt-80 lg:ml-14 ">
              <form onSubmit={formik.handleSubmit}>
                <Collapse accordion>
                  <Panel
                    showArrow={false}
                    header={
                      <h4 className="text-xl font-bold text-text_panel">
                        Profil
                      </h4>
                    }
                    key="2"
                  >
                    <div className="w-11/12 ">
                   
                    </div>
                  </Panel>
                </Collapse>
              </form>
            </div>
          );
        }}
      </Formik>
    </div>
  );
};

export default MainForm;
