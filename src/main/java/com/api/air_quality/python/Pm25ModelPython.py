from py4j.java_gateway import JavaGateway
import numpy as np
import pickle


class Pm25ModelPython:
    def __init__(self):
        self.gateway = JavaGateway()
        self.java_model = self.gateway.entry_point
        with open("../../../../../../../AI_Models/pm25_model.pkl", 'rb') as f:
            self.model = pickle.load(f)

    def predict_pm25(self, features):
        try:
            features_2d = np.array(features).reshape(1, -1)
            prediction = self.model.predict(features_2d)
            return self.java_model.receivedPm25Prediction(prediction[0])
        except Exception as e:
            return str(e)


if __name__ == "__main__":
    pm25_model = Pm25ModelPython()
    test_data = pm25_model.java_model.predict()
    result = pm25_model.predict_pm25(test_data)
    print(result)
