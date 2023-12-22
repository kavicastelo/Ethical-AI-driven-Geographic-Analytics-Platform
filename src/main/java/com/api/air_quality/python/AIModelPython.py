from py4j.java_gateway import JavaGateway
from joblib import load


class AIModelPython:
    def __init__(self, model_path):
        self.model = load(model_path)

    def predict(self, features):
        return self.model.predict(features)


if __name__ == "__main__":
    # Connect to the existing gateway
    gateway = JavaGateway()

    # Create an instance of your Python class
    air_quality_model = AIModelPython("../../../../../../../AI_Models/humidity_model.joblib")

    # Attach the Python object to the Java gateway
    gateway.entry_point = air_quality_model
