from ...utils.database.connection_db import DataBaseHandle
from ...utils.general.logs import HandleLogs
from ...utils.general.response import internal_response


class PublicacionesComponent:

    @staticmethod
    def getAllPublicaciones():
        try:
            result = False
            data = None
            message = None
            sql = "SELECT * FROM public.Posts sss"

            result_publicaciones = DataBaseHandle.getRecords(sql, 0)
            if result_publicaciones['result']:
                result = True
                data = result_publicaciones['data']
            else:
                message = 'Error al obtener datos de publicaciones -> ' + result_publicaciones['message']
        except Exception as err:
            HandleLogs.write_error(err)
            message = err.__str__()
        finally:
            return internal_response(result, data, message)
