import sys
import os
from dotenv import load_dotenv
import requests
from py4j.java_gateway import JavaGateway
import numpy as np
import pickle
# to ignore warnings
import warnings
warnings.filterwarnings('ignore')

venv_path = "../../../../../../../venv"
sys.path.append(venv_path + '/Lib/site-packages')


class HumidityModelPython:
    def __init__(self):
        self.gateway = JavaGateway()
        self.java_model = self.gateway.entry_point
        with open("./AI_Models/humidity_model.pkl", 'rb') as f:
            self.model = pickle.load(f)

    def predict_humidity(self, features):
        try:
            features_2d = np.array(features).reshape(1, -1)
            prediction = self.model.predict(features_2d)
            url = os.getenv("SPRINGBOOT_URL_PYTHON")
            spring_boot_url = url+"/humidity"
            response = requests.post(spring_boot_url, json=float(prediction))
            # print(response.text)

            return prediction
        except Exception as e:
            return str(e)


if __name__ == "__main__":
    load_dotenv()
    humidity_model = HumidityModelPython()
    data_from_java = [float(arg) for arg in sys.argv[1:]]
    result = humidity_model.predict_humidity(data_from_java)
