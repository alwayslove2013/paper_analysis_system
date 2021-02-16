from flask import Flask, request
import flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/')
def hello():
    return 'hello'

@app.route('/test_post', methods=['POST'])
def test_post():
  data = request.json

  print('==>', data)
  return {'message': 'hello'}




if __name__ == "__main__":
  app.run(debug=True, port=12358)