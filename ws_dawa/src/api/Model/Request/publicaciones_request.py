from marshmallow import Schema, fields

class PublicacionRequest(Schema):
    user_id = fields.Int(required=True)
    content = fields.String(required=True)
