import os
import sys
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


class AirTemperatureModelPython:
    def __init__(self):
        # Connect to the Py4J gateway server
        self.gateway = JavaGateway()

        # Retrieve the Java instance of the model
        self.java_model = self.gateway.entry_point

        # Load the PMML model
        with open("/app/AI_Models/airTemperature_model.pkl", 'rb') as f:
            self.model = pickle.load(f)

    def predict_air_temperature(self, features):
        try:
            features_2d = np.array(features).reshape(1, -1)

            prediction = self.model.predict(features_2d)

            url = os.getenv("SPRINGBOOT_URL_PYTHON")
            spring_boot_url = url+"/airTemperature"
            response = requests.post(spring_boot_url, json=float(prediction))
            # print(response.text)

            return prediction
        except Exception as e:
            return str(e)


if __name__ == "__main__":
    load_dotenv()
    # Create an instance of the Python class
    air_temperature_model = AirTemperatureModelPython()
    data_from_java = [float(arg) for arg in sys.argv[1:]]
    result = air_temperature_model.predict_air_temperature(data_from_java)
