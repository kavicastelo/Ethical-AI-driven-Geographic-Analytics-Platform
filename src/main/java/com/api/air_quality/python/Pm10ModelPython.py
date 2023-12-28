from py4j.java_gateway import JavaGateway
import numpy as np
import pickle


class Pm10ModelPython:
    def __init__(self):
        self.gateway = JavaGateway()
        self.java_model = self.gateway.entry_point
        with open("../../../../../../../AI_Models/pm10_model.pkl", 'rb') as f:
            self.model = pickle.load(f)

    def predict_pm10(self, features):
        try:
            features_2d = np.array(features).reshape(1, -1)
            prediction = self.model.predict(features_2d)
            return self.java_model.receivedPm10Prediction(prediction[0])
        except Exception as e:
            return str(e)


if __name__ == "__main__":
    pm10_model = Pm10ModelPython()
    test_data = pm10_model.java_model.predict()
    result = pm10_model.predict_pm10(test_data)
    print(result)
