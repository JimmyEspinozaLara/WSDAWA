from flask_restful import Resource

from ..Components.posts_component import PublicacionesComponent
from ...utils.general.logs import HandleLogs
from ...utils.general.response import response_error, response_success


class PublicacionListService(Resource):
    @staticmethod
    def get():
        try:
            HandleLogs.write_log("Ejecutando servicio para obtener todas las publicaciones")
            resultado = PublicacionesComponent.getAllPublicaciones()
            if resultado['result']:
                return response_success(resultado['data'])
            else:
                return response_error(resultado['message'])

        except Exception as err:
            HandleLogs.write_error(err)
            return response_error("Error en el método: " + err.__str__())
