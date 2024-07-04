from app import app, db
from flask import request, jsonify
from model import Friend

# get all friends
@app.route('/api/friends', methods = ['GET'])
def get_friends():
    friends = Friend.query.all()

    return jsonify({
        "friends": [friend.to_json() for friend in friends],
        "count": len(friends)
    })

# create a new friend
@app.route('/api/friends', methods = ['POST'])
def create_friend():
    try:
        data = request.json

        required_fields = ['name', 'role', 'description', 'gender']
        for field in required_fields:
            if field not in data:
                return jsonify({"error": f"Missing required field: {field}"}), 400
            
        name = data.get('name')
        role = data.get('role')
        description = data.get('description')
        gender = data.get('gender')
        img_url = data.get('imgUrl')
        # fetch avatar image
        img_url = f'https://avatar.iran.liara.run/username?username={name}'
        
        friend = Friend(
            name=name, 
            role=role, 
            description=description, 
            gender=gender, 
            img_url=img_url
        )

        friend.create()

        return jsonify({'msg': 'Friend created successfully'}), 201  
      
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500

@app.route('/api/friends/<int:friend_id>', methods=['DELETE', 'PATCH', 'GET'])
def delete_friend(friend_id):
    if request.method == 'DELETE':
        return delete_friend_logic(friend_id)
    elif request.method == 'PATCH':
        return update_friend_logic(friend_id)
    else:
        return get_friend_byId(friend_id)


def delete_friend_logic(id):
    friend = Friend.query.get(id)
    if not friend:
        return jsonify({"error": "Friend not found"}), 404

    friend.delete()
    
    return jsonify({"msg": "Friend deleted successfully"}), 201

def update_friend_logic(id):
    friend = Friend.query.get(id)
    if not friend:
        return jsonify({"error": "Friend not found"}), 404

    try:
        data = request.json
    
        friend.name = data.get('name', friend.name)
        friend.role = data.get('role', friend.role)
        friend.description = data.get('description', friend.description)
        friend.gender = data.get('gender', friend.gender)
        friend.img_url = data.get('imgUrl', friend.img_url)
       
        friend.update()

        return jsonify(friend.to_json())
    
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500
    
def get_friend_byId(id):
    friend = Friend.query.get(id)

    if not friend:
        return jsonify({"error": "Friend not found"}), 404

    return jsonify(friend.to_json())