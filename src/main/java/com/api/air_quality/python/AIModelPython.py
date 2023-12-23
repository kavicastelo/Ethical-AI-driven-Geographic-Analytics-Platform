from py4j.java_gateway import JavaGateway
from joblib import load


class AIModelPython:
    def __init__(self, model_path):
        self.model = load(model_path)

    def predict(self, features):
        return self.model.predict(features)


