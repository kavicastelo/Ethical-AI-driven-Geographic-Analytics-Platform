from py4j.java_gateway import JavaGateway
import numpy as np
import pickle


class TemperatureModelPython:
    def __init__(self):
        self.gateway = JavaGateway()
        self.java_model = self.gateway.entry_point
        with open("../../../../../../../AI_Models/temperature_model.pkl", 'rb') as f:
            self.model = pickle.load(f)

    def predict_temperature(self, features):
        try:
            features_2d = np.array(features).reshape(1, -1)
            prediction = self.model.predict(features_2d)
            return self.java_model.receivedTemperaturePrediction(prediction[0])
        except Exception as e:
            return str(e)


if __name__ == "__main__":
    temperature_model = TemperatureModelPython()
    test_data = temperature_model.java_model.predict()
    result = temperature_model.predict_temperature(test_data)
    print(result)
