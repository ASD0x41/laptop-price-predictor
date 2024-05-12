from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import numpy as np
import joblib

app = Flask(__name__)
CORS(app)

pipeline = joblib.load('laptoplens.pkl')

@app.route('/predict', methods=['POST'])
def predict():
    data = pd.DataFrame(request.json)
    print("laptop specs:", data)
    prediction = round(pipeline.predict(data)[0], 0)
    print('prediction: ', prediction)
    return jsonify({'prediction': prediction})

if __name__ == '__main__':
    app.run(debug=True)