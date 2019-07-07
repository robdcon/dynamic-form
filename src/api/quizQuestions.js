var quizQuestions = [
  {
      question: "What type of website is it for?",
      label: "Website_Type",
      answers: [
          {
              type: "radio",
              content: "Blog"
          },
          {
              type: "radio",
              content: "Business"
          },
          {
              type: "radio",
              content: "E-commerce/online store"
          },
          {
              type: "radio",
              content: "Informational Website"
          },
          {
              type: "radio",
              content: "Non-profit"
          },
          {
              type: "radio",
              content: "Personal website"
          },
          {
              type: "radio",
              content: "I'm not sure"
          },
      ]
  },
  {
      question: "Which of these best describes your web design requirement?",
      label: "Project_Requirement",
      answers: [
          {
              type: "radio",
              content: "Create a new website"
          },
          {
              type: "radio",
              content: "Major changes to my website"
          },
          {
              type: "radio",
              content: "Minor changes to my website"
          }
      ]
  },
  {
      question: "What are the objectives of your website?",
      label: "Website_Objectives",
      answers: [
          {
              type: "checkbox",
              content: "Help customers find my business online"
          },
          {
              type: "checkbox",
              content: "Provide information to the public"
          },
          {
              type: "checkbox",
              content: "Sell my product or service, taking payments offline"
          },
          {
              type: "checkbox",
              content: "Sell my product or service, taking payments online"
          },
      ]
  },
  {
      question: "What is your estimated budget for this project?",
      label: "Website_Budget",
      answers: [
          {
              type: "radioradio",
              content: "Less than £250"
          },
          {
              type: "radioradio",
              content: "£250 - £1,000"
          },
          {
              type: "radioradio",
              content: "£1,000 - £2,000"
          },
           {
              type: "radioradio",
              content: "£2,000 - £3,000"
          },
          {
              type: "radioradio",
              content: "£3,000 - £5,000"
          },
          {
              type: "radioradio",
              content: "More than £5,000"
          },
          {
              type: "radioradio",
              content: "I don't know"
          },
      ]
  },
  {
      question: "How soon would you like the project to begin?",
      label: "Project_Start",
      answers: [
          {
              type: "radio",
              content: "ASAP"
          },
          {
              type: "radio",
              content: "In the next few days"
          },
          {
              type: "radio",
              content: "In the next few weeks"
          },
           {
              type: "radio",
              content: "In the next month"
          },
          {
              type: "radio",
              content: "In the next 2-3 months"
          },
          {
              type: "radio",
              content: "I would like to discuss this with the pro"
          }
      ]
  }
];

export default quizQuestions;
