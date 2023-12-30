import requests
from py4j.java_gateway import JavaGateway
import numpy as np
import pickle


class Co2ModelPython:
    def __init__(self):
        self.gateway = JavaGateway()
        self.java_model = self.gateway.entry_point
        with open("../../../../../../../AI_Models/co2_model.pkl", 'rb') as f:
            self.model = pickle.load(f)

    def predict_co2(self, features):
        try:
            features_2d = np.array(features).reshape(1, -1)
            prediction = self.model.predict(features_2d)
            spring_boot_url = "http://localhost:3269/api/v1/airQuality/predict/res/co2"
            response = requests.post(spring_boot_url, json=float(prediction))
            print(response.text)

            return prediction
        except Exception as e:
            return str(e)


if __name__ == "__main__":
    co2_model = Co2ModelPython()
    test_data = co2_model.java_model.predict()
    result = co2_model.predict_co2(test_data)
    print(result)