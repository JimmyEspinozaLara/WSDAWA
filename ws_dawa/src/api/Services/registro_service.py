from flask import request
from flask_restful import Resource

from ..Components.registro_component import RegistroComponent
from ..Model.Request.registro_request import RegistroRequest
from ...utils.general.logs import HandleLogs
from ...utils.general.response import response_error, response_success

class RegistroService(Resource):
    @staticmethod
    def post():
        try:
            HandleLogs.write_log("Ejecutando servicio de Registro de Usuario")
            # Obtener el request
            rq_json = request.get_json()
            # Validar que el request sea compatible con el modelo
            new_request = RegistroRequest()
            error_en_validacion = new_request.validate(rq_json)
            if error_en_validacion:
                HandleLogs.write_error("Error al validar el request -> " + str(error_en_validacion))
                return response_error("Error al validar el request -> " + str(error_en_validacion))

            resultado = RegistroComponent.Register(
                rq_json['user_login'],
                rq_json['user_password'],
                rq_json['user_nombre'],
                rq_json['user_apellido'],
                rq_json['user_facultad'],
                rq_json['user_carrera'],
                rq_json['user_state']
            )
            if resultado['result']:
                return response_success(resultado['data'])
            else:
                return response_error(resultado['message'])

        except Exception as err:
            HandleLogs.write_error(err)
            return response_error("Error en el método: " + err.__str__())
