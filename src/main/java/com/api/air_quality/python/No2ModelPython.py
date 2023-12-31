import sys

import requests
from py4j.java_gateway import JavaGateway
import numpy as np
import pickle
# to ignore warnings
import warnings
warnings.filterwarnings('ignore')


class No2ModelPython:
    def __init__(self):
        self.gateway = JavaGateway()
        self.java_model = self.gateway.entry_point
        with open("./AI_Models/no2_model.pkl", 'rb') as f:
            self.model = pickle.load(f)

    def predict_no2(self, features):
        try:
            features_2d = np.array(features).reshape(1, -1)
            prediction = self.model.predict(features_2d)
            spring_boot_url = "http://localhost:3269/api/v1/airQuality/predict/res/no2"
            response = requests.post(spring_boot_url, json=float(prediction))
            # print(response.text)

            return prediction
        except Exception as e:
            return str(e)


if __name__ == "__main__":
    no2_model = No2ModelPython()
    data_from_java = [float(arg) for arg in sys.argv[1:]]
    result = no2_model.predict_no2(data_from_java)
