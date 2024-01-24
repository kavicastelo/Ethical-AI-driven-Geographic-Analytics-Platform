# Instructions:
*Note:* Default configurations are setup for running the project on server.

You have to change few files to run the project locally.
1. AIModel.java (*./src/main/java/com/api/air_quality/model/ai_models/AIModel.java*)
    - Comment out line **143** and **145**.
    - Uncomment line **142** and **144**.
2. All Python models except AIModelPython.py (*./src/main/java/com/api/air_quality/python/\*.py*)
    - Replace all file paths in `class *ModelPython:` classes with actual file paths.
    - Ex: `"/app/AI_Models/airHumidity_model.pkl"` to `"./AI_Models/airHumidity_model.pkl"`

If you need to use your own localhost database,
- Create `.env` file in the root directory of the project.
- Add `SPRINGBOOT_URL_PYTHON` environment variable in `.env` file. (Optional)
- Add `PYTHON_EXE_PATH` environment variable in `.env` file. (Optional)
- Add `DATABASE` environment variable in `.env` file. (Default `Urban_Air`)
- Add `DATABASE_PORT` environment variable in `.env` file.
- Add `DATABASE_URI` environment variable in `.env` file.
- Add `SERVER_PORT` environment variable in `.env` file. (default 3269)
