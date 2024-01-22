import {FAQModel} from "../model/FAQ.model";

export var faqDataStore: FAQModel[] = [
  {
    id: "1",
    question: 'How are machine learning models utilized in the application?',
    answer: 'Machine learning models, particularly Linear Regression, are employed to predict air quality, meteorological conditions, and land use factors. These models are trained with historical data to learn patterns and make predictions based on current input.'
  },
  {
    id: "2",
    question: 'Can I access historical data for analysis?',
    answer: 'Yes, the application provides APIs to retrieve historical data for specific date ranges. Users can analyze trends, calculate means and medians, and explore correlations between different factors over time.'
  },
  {
    id: "3",
    question: 'How are ethical concerns addressed in data collection and analysis?',
    answer: 'Ethical considerations are paramount in our application. We ensure that all data collection is done responsibly, adhering to privacy standards. Moreover, the application is built for educational purposes, and we use generated model values for calculations to avoid real-world data privacy concerns.'
  },
  {
    id: "4",
    question: 'How accurate are the predictions made by the application?',
    answer: 'The accuracy of predictions depends on the quality of the data and the effectiveness of the machine learning models. We continuously refine our models and algorithms to improve accuracy. Users are encouraged to interpret predictions with an understanding of the inherent uncertainties in environmental predictions.'
  },
  {
    id: "5",
    question: 'Can I contribute or provide feedback to the project?',
    answer: 'Absolutely! We welcome contributions and feedback from users. If you have ideas for improvements, encounter issues, or want to contribute to the project, please reach out through our contact page. Your input is valuable in making the application more robust and user-friendly.'
  }
]
