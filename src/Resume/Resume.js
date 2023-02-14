import { base64OfImage } from "../Component/Base64OfImage";

const getEducationObject = () => {
  const exs = [];
  if (localStorage.getItem("education")) {
    console.log(localStorage.getItem("education"));
    localStorage.setItem("education", localStorage.getItem("education"));
    const education = JSON.parse(localStorage.getItem("education")).education;
    education.map((education) => {
      exs.push([
        {
          columns: [
            [
              {
                text: education.startDate + " " + "-" + " " + education.endDate,
                style: "date_experience",
              },

              {
                text: education.Lieu,
                style: "Lieu",
              },
            ],
            [
              {
                text: education.nomDuDiplome,
                style: "Nom_du_diplome",
              },

              {
                text: education.nomDeLecole,
                style: "Nom_de_l_ecole",
              },
            ],
          ],
        },
      ]);
    });

    return {
      table: {
        widths: ["*"],
        body: [...exs],
      },
    };
  }

  return null;
};

const getProfilePicObject = () => {
  if (localStorage.getItem("personal_info"))
    console.log(localStorage.getItem("personal_info"));
  localStorage.setItem("personal_info", localStorage.getItem("personal_info"));

  if (JSON.parse(localStorage.getItem("personal_info")).photo !== "") {
    return {
      image: JSON.parse(localStorage.getItem("personal_info") || "").photo,
      width: 75,
      alignment: "right",
    };
  } else {
    return {
      image: `data:image/jpeg;base64,${base64OfImage}`,
      width: 75,
      alignment: "right",
    };
  }
};


const getExperienceObject = () => {
  const exs = [];
  if (localStorage.getItem("experience_professionelles")) {
    console.log(localStorage.getItem("experience_professionelles"));
    localStorage.setItem("experience_professionelles", localStorage.getItem("experience_professionelles"));
    const experience_professionelle = JSON.parse(localStorage.getItem("experience_professionelles")).experienceProfessionnelle;
    experience_professionelle.map((experience_professionelle) => {
      exs.push([
        {
          columns: [
            [
              {
                text: experience_professionelle.startDate + " " + "-" + " " + experience_professionelle.endDate,
                style: "date_experience",
              },

              {
                text:experience_professionelle.nomDulEntreprise + "," + " " + experience_professionelle.lieu,
                style: "Lieu",
              },
            ],
            [
              {
                text: experience_professionelle.typeDEmploi,
                style: "Nom_du_diplome",
              },

              {
                text: experience_professionelle.detail,
                style: "Nom_de_l_ecole",
              },
            ],
          ],
        },
      ]);
    });

    return {
      table: {
        widths: ["*"],
        body: [...exs],
      },
    };
  }

  return null;
};


export const getDocumentDefinition = () => {
  if (localStorage.getItem("personal_info"))
    console.log(localStorage.getItem("personal_info"));
  localStorage.setItem("personal_info", localStorage.getItem("personal_info"));

  return {
    content: [
      {
        text: "RESUME",
        bold: true,
        fontSize: 20,
        alignment: "center",
        margin: [0, 0, 0, 20],
      },

      {
        text: "Information Personnelle",
        style: "header",
      },
      {
        columns: [
          [
            {
              text:
                "Nom : " +
                `${
                  localStorage.getItem("personal_info")
                    ? JSON.parse(localStorage.getItem("personal_info") || "")
                        .nom
                    : ""
                }` +
                " " +
                `${
                  localStorage.getItem("personal_info")
                    ? JSON.parse(localStorage.getItem("personal_info") || "")
                        .prenom
                    : ""
                }`,
              style: "name",
            },
            {
              text:
                "Adresse : " +
                `${
                  localStorage.getItem("personal_info")
                    ? JSON.parse(localStorage.getItem("personal_info") || "")
                        .adresse
                    : ""
                }`,
              style: "adresse",
            },
            {
              text:
                "Email : " +
                `${
                  localStorage.getItem("personal_info")
                    ? JSON.parse(localStorage.getItem("personal_info") || "")
                        .email
                    : ""
                }`,
              style: "email",
            },
            {
              text:
                "Contant No : " +
                `${
                  localStorage.getItem("personal_info")
                    ? JSON.parse(localStorage.getItem("personal_info") || "")
                        .phone
                    : ""
                }`,
              style: "phone",
            },
            {
              text:
                "GitHub: " +
                `${
                  localStorage.getItem("personal_info")
                    ? JSON.parse(localStorage.getItem("personal_info") || "")
                        .git
                    : ""
                }`,
              link: `${
                localStorage.getItem("personal_info")
                  ? JSON.parse(localStorage.getItem("personal_info") || "").git
                  : ""
              }`,
              color: "blue",
            },
          ],
          [getProfilePicObject()],
        ],
      },
      {
        text: "Parcour Academique",
        style: "Parcour",
      },
      getEducationObject(),

      {
        text: "Experiences professionnelles",
        style: "Experience",
      },
      getExperienceObject()
    ],
    styles: {
      header: {
        fontSize: 18,
        bold: true,
        margin: [0, 20, 0, 10],
        decoration: "underline",
      },
      Parcour: {
        fontSize: 18,
        bold: true,
        margin: [0, 20, 0, 20],
        decoration: "underline",
      },

      Experience: {
        fontSize: 18,
        bold: true,
        margin: [0, 20, 0, 20],
        decoration: "underline",
      },
      jobTit: {},
      name: {
        margin: [0, 5, 0, 0],
        fontSize: 14,
      },
      email: {
        margin: [0, 0, 0, 10],
      },
      adresse: {
        margin: [0, 10, 0, 10],
      },

      phone: {
        margin: [0, 0, 0, 10],
      },
      Nom_de_l_ecole: {
        margin: [10, 10, 0, 20],
      },
      Lieu: {
        margin: [10, 10, 0, 20],
      },
      jobTitle: {
        fontSize: 14,
        margin: [10, 20, 0, 5],
        bold: true,
        italics: true,
      },
      Nom_du_diplome: {
        fontSize: 14,
        margin: [10, 10, 0, 5],
        bold: true,
        italics: true,
      },
      entreprise_experience: {
        margin: [10, 10, 0, 20],
      },
      detail: {
        margin: [10, 10, 0, 20],
      },
      date_experience: {
        fontSize: 14,
        margin: [10, 10, 0, 5],
        bold: true,
        italics: true,
      },
      Type_D_Emploi: {
        fontSize: 14,
        margin: [10, 10, 0, 5],
        bold: true,
        italics: true,
      },
    },
  };
};
