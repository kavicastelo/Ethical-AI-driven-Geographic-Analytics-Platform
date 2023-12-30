import requests
from py4j.java_gateway import JavaGateway
import numpy as np
import pickle


class OzoneModelPython:
    def __init__(self):
        self.gateway = JavaGateway()
        self.java_model = self.gateway.entry_point
        with open("../../../../../../../AI_Models/ozone_model.pkl", 'rb') as f:
            self.model = pickle.load(f)

    def predict_ozone(self, features):
        try:
            features_2d = np.array(features).reshape(1, -1)
            prediction = self.model.predict(features_2d)
            spring_boot_url = "http://localhost:3269/api/v1/airQuality/predict/res/ozone"
            response = requests.post(spring_boot_url, json=float(prediction))
            print(response.text)

            return prediction
        except Exception as e:
            return str(e)


if __name__ == "__main__":
    ozone_model = OzoneModelPython()
    test_data = ozone_model.java_model.predict()
    result = ozone_model.predict_ozone(test_data)
    print(result)
