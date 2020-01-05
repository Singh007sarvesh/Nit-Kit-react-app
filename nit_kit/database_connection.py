import mysql.connector  

#Create the connection object   
myconn = mysql.connector.connect(host = "localhost", user = "root", password = "test", database = "nit_kit")  
  
#printing the connection object   
print(myconn)   
  
#creating the cursor object  
cur = myconn.cursor()  
  
def insert_item(itemname, itempicture, itemdesc, itemprice, itemcategory, itemstatus, uploadedBy):
	sql = "INSERT INTO item (itemid, itemname, itempicture, itemdesc, itemprice, itemcategory, itemstatus, uploadedBy) VALUES (%s, %s, %s, %s, %s, %s, %s, %s)"
	val = (0, itemname, itempicture, itemdesc, itemprice, itemcategory, itemstatus, uploadedBy)
	cur.execute(sql, val)
	myconn.commit()
	# print(sql,val)

def get_item():
	sql = "select * from item"
	cur.execute(sql)
	data = cur.fetchall()
	# print(data)
	return data

def get_item_based_on_user(email):
	sql = "select itemid, itemname, itempicture from item where email = '"+email+"'"
	cur.execute(sql)
	data = cur.fetchall()
	return data

def login(email):
	sql = "select id, email from users where email = '"+email+"' "
	cur.execute(sql)
	data = cur.fetchone()
	try:
		if data != None:
			return data
		else:
			return "failed"
	except Exception as e:
		return "failed"
	else:
		pass
	finally:
		pass
		

# get_item()