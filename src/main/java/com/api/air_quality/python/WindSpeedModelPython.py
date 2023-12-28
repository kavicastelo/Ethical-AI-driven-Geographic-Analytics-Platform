from py4j.java_gateway import JavaGateway
import numpy as np
import pickle


class WindSpeedModelPython:
    def __init__(self):
        self.gateway = JavaGateway()
        self.java_model = self.gateway.entry_point
        with open("../../../../../../../AI_Models/wind_speed_model.pkl", 'rb') as f:
            self.model = pickle.load(f)

    def predict_wind_speed(self, features):
        try:
            features_2d = np.array(features).reshape(1, -1)
            prediction = self.model.predict(features_2d)
            return self.java_model.receivedWindSpeedPrediction(prediction[0])
        except Exception as e:
            return str(e)


if __name__ == "__main__":
    wind_speed_model = WindSpeedModelPython()
    test_data = wind_speed_model.java_model.predict()
    result = wind_speed_model.predict_wind_speed(test_data)
    print(result)
