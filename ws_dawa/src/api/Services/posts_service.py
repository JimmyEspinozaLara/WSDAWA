from flask_restful import Resource
from flask import request

from ..Components.posts_component import PublicacionesComponent
from ...utils.general.logs import HandleLogs
from ...utils.general.response import response_error, response_success
from ..Components.jwt_component import JwtComponent

class PublicacionListService(Resource):
    @staticmethod
    def get():
        try:
            HandleLogs.write_log("Ejecutando servicio para obtener todas las publicaciones")

            # Validar el Token de seguridad
            token = request.headers.get('tokenapp')
            if not token or not JwtComponent.TokenValidate(token):
                return response_error("Token de autenticación NO válido")

            resultado = PublicacionesComponent.getAllPublicaciones()
            if resultado['result']:
                return response_success(resultado['data'])
            else:
                return response_error(resultado['message'])

        except Exception as err:
            HandleLogs.write_error(err)
            return response_error("Error en el método: " + err.__str__())
