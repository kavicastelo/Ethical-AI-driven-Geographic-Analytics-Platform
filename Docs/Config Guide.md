# Instructions to set up project to local:
*Note:* Default configurations are set up for running the project on server.

## Clone the repository:
```markdown
https://github.com/kavicastelo/Ethical-AI-driven-Geographic-Analytics-Platform.git
```

## Pre requests
- Install Angular CLI 15.2.x
- Node version 16.19.0
- Java JDK 17
- Python 3.10
- Different runnable environment supportive IDEA (intellij ultimate is recommended)

## Frontend
- Move to the frontend branch
  ```markdown
  git switch frontend
  ```
- Move to the `client` directory
  ```markdown
  cd client
  ```
- Navigates to `src\environment\environment.development.ts`
- Commented out the production base url and uncomment the local (`port 3269 is recommended and default`)
- Move to the client directory in terminal and run `npm install --force` command
  > [!IMPORTANT]
  > Use --force for install deprecated packages. don't use --legacy-peers
- Run `ng serve` command to start the development server
- Project starts to run on `localhost:4200/` port

## Backend
Move to the `backend` branch
  ```markdown
  git switch backend
  ```

You have to change few files to run the project locally.
1. AIModel.java (*./src/main/java/com/api/air_quality/model/ai_models/AIModel.java*)
    - Comment out line **143** and **145**.
    - Uncomment line **142** and **144**.
2. All Python models except AIModelPython.py (*./src/main/java/com/api/air_quality/python/\*.py*)
    - Replace all file paths in `class *ModelPython:` classes with actual file paths.
    - Ex: `"/app/AI_Models/airHumidity_model.pkl"` to `"./AI_Models/airHumidity_model.pkl"`
3. CorsConfig.java (*./src/main/java/com/api/air_quality/CorsConfig.java*)
    - Uncomment line **17** and **29**.
    - Comment out line **18** and **30**.

If you need to use your own localhost database,
- Create `.env` file in the root directory of the project.
- Add `SPRINGBOOT_URL_PYTHON` environment variable in `.env` file. (Optional)
- Add `PYTHON_EXE_PATH` environment variable in `.env` file. (Optional)
- Add `DATABASE` environment variable in `.env` file. (Default `Urban_Air`)
- Add `DATABASE_PORT` environment variable in `.env` file.
- Add `DATABASE_URI` environment variable in `.env` file.
- Add `SERVER_PORT` environment variable in `.env` file. (default 3269)

Add Environment for Python Models.
- <python.exe path to computer drive> -m venv venv
- source venv\bin\activate (Linux or Mac)
- .\venv\Scripts\activate (Windows)
- pip install -r requirements.txt (recommended)
- venv\Scripts\python.exe -m pip install -r requirements.txt (only if **not working** `pip install -r requirements.txt`)
- deactivate

> [!NOTE]
> If you're facing any idea error, delete the `.idea` directory and rebuild the project
