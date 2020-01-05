from flask import request, redirect, Flask, jsonify, session
from werkzeug.utils import secure_filename
import base64
import json
from json import loads, dumps
from flask_cors import CORS
import os
from database_connection import insert_item, get_item, login, get_item_based_on_user
import cv2
import numpy as np
from flask_json import FlaskJSON, JsonError, json_response, as_json
app = Flask(__name__)
CORS(app, supports_credentials=True)
app.config['SECRET_KEY'] = 'the quick brown fox jumps over the lazy   dog'
app.config['CORS_HEADERS'] = 'Content-Type'
FlaskJSON(app)
app.config["IMAGE_UPLOADS"] = "image"
app.config["ALLOWED_IMAGE_EXTENSIONS"] = ["JPEG", "JPG", "PNG", "GIF"]

def allowed_image(filename):

    if not "." in filename:
        return False

    ext = filename.rsplit(".", 1)[1]

    if ext.upper() in app.config["ALLOWED_IMAGE_EXTENSIONS"]:
        return True
    else:
        return False

@app.route("/items", methods=["POST"])
def upload_image():

    if request.method == "POST":
        if request.files:
            image = request.files["itempicture"]
            itemname = request.form["itemname"]
            itemdesc = request.form["itemdesc"]
            itemprice = request.form["itemprice"]
            itemcategory = request.form["itemcategory"]
            itemstatus = request.form["itemstatus"]
            uploadedBy = request.form["uploadedBy"]
            if image.filename == "":
                print("No filename")
                return "No"

            if allowed_image(image.filename):
                filename = secure_filename(image.filename)
                image.save(os.path.join(app.config["IMAGE_UPLOADS"], filename))
                apath = 'image'
                fileDir = os.path.dirname(os.path.realpath('__file__'))
                filename = os.path.join(fileDir, 'image/'+filename)
                print(filename)
                
                with open(filename, 'rb') as f:
                    photo = f.read()
                encodestring = base64.b64encode(photo)
                print(encodestring)
                # insert_item(itemname, filename, itemdesc, itemprice, itemcategory, itemstatus, uploadedBy)

                

                return "yes"

            else:
                print("That file extension is not allowed")
                return "not allowed"
        elif request.headers.get('content-type') == 'application/json':
            image = json.loads(request.data)
            if image['image'] == "":
                print("No filename")
                return "No"
            if allowed_image(image['itempicture']):
                filename = secure_filename(image['itempicture'])
                print("$$$$$$$$$$$$$$$$$$$$$$$$")
                img = np.copy(filename)
                files = {'media': open(filename, 'rb')}
                print(img,files)
                print("########################")
                # img_file = request.session.get('image_file')
                # img = cv2.UMat(img)
                # tmp_img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
                # files = {'media': open(filename, 'rb')}
                # imgUMat = cv2.imread(filename)
                # print(files)
                # gray = cv2.cvtColor(filename, cv2.COLOR_RGB2GRAY)
                # print(gray)
                # img = base64.b64encode(cv2.imencode('.jpg', files)[1])
                # img = base64.b64encode(cv2.imencode('.jpg', tmp_img)[1])
                # with open(filename , "wb") as fh:
                #     fh.write(base64.decodebytes(img))

                # image.save(os.path.join(app.config["IMAGE_UPLOADS"], filename))

                print("Image saved")

                return "yes"

            else:
                print("That file extension is not allowed")
                return "not allowed"

    return "render_template('public/upload_image.html')"

@app.route('/items',methods=['GET'])
@as_json
# @cross_origin(origin='localhost',headers=['Content- Type','Authorization'])
def fetch_item():
    response = get_item()
    payload = []
    
    for result in response:
        content = {}
        content = {'id': result[0], 'itemname': result[1], 'itempicture': result[2], 'itemdesc':result[3],'itemprice':result[4],
                    'itemcategory':result[5], 'iitemstatus':result[6], 'uploadedBy':result[7]
        }
        payload.append(content)
        # content = {} 
    # for x in result:
    #     print(x)
    # print(result)
    return jsonify(payload)

@app.route('/login', methods=['POST'])
@as_json
def user_login():
    payload = request.get_json()
    email = payload["email"]
    result = login(email)
    if result != 'failed':
        session['loggedin'] = True
        # session['username'] = account['username'] 
        payload = {
            "id": result[0],
            "email": result[1],
            "data":""
        }
        return payload
    else:
        payload = {
            "id": '',
            "email":'' ,
            "data":"failed"
        }
        return payload

@app.route('/logout', methods=['GET', 'POST'])
def  logout():
    session.pop('loggedin', None)
    session.pop('id', None)
    session.pop('username', None)
    # Redirect to login page
    payload = {
        "data":False
    }
    return payload

@app.route('/items/users', methods=['POST'])
def get_item_by_email():
    payload = request.get_json()
    email = payload["email"]
    response = get_item_based_on_user(email)
    payload = []
    for result in response:
        content = {}
        content = {'id': result[0], 'itemname': result[1], 'itempicture': result[2]
        }
        payload.append(content)
    return jsonify(payload)

if __name__ == '__main__':
    app.run(port=5000,debug=True)