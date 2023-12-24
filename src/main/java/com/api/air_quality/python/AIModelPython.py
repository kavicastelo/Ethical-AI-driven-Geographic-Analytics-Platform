from py4j.java_gateway import JavaGateway
from joblib import load


class AIModelPython:
    def __init__(self, model_path):
        self.model = load(model_path)

    def predict(self, features):
        return self.model.predict(features)


if __name__ == "__main__":
    gateway = JavaGateway()
    msgObjectFromJavaApp = gateway.entry_point
    print(msgObjectFromJavaApp.Message())
    print(msgObjectFromJavaApp.AirHumidity())
