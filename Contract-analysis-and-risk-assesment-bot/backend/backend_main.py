from fastapi import FastAPI, File, UploadFile
import os

app = FastAPI()

UPLOAD_DIR = "uploaded_contracts"
os.makedirs(UPLOAD_DIR, exist_ok=True)

@app.get("/")
def read_root():
    return {"message": "Welcome to Contract Analysis & Risk Assessment Bot!"}

@app.post("/upload/")
async def upload_file(file: UploadFile = File(...)):
    file_path = os.path.join(UPLOAD_DIR, file.filename)
    with open(file_path, "wb") as buffer:
        buffer.write(await file.read())
    return {"filename": file.filename, "status": "success"}