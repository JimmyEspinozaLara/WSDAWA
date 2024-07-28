from marshmallow import Schema, fields

class RegistroRequest(Schema):
    user_login = fields.String(required=True)
    user_password = fields.String(required=True)
    user_nombre = fields.String(required=True)
    user_apellido = fields.String(required=True)
    user_facultad = fields.String(required=True)
    user_carrera = fields.String(required=True)
    user_state = fields.Boolean(required=True)
