from ...utils.database.connection_db import DataBaseHandle
from ...utils.general.logs import HandleLogs
from ...utils.general.response import internal_response


class PublicacionesComponent:

    @staticmethod
    def crear_publicacion(user_id, content):
        try:
            result = False
            data = None
            message = None

            # Validar que el usuario exista y esté activo
            sql_user = "SELECT count(*) as valor FROM public.Users WHERE user_id = %s AND user_state = true"
            record_user = (user_id,)
            result_user = DataBaseHandle.getRecords(sql_user, 1, record_user)

            if not result_user['result'] or result_user['data']['valor'] == 0:
                message = 'Usuario no válido o inactivo'
                return internal_response(result, data, message)

            # Insertar la nueva publicación
            sql_insert = "INSERT INTO public.Posts (user_id, content) VALUES (%s, %s) RETURNING post_id"
            record_insert = (user_id, content)
            result_insert = DataBaseHandle.ExecuteNonQuery(sql_insert, record_insert)

            if result_insert['result']:
                result = True
                data = {"post_id": result_insert['data']}
                message = 'Publicación creada exitosamente'
            else:
                message = result_insert['message']

        except Exception as err:
            HandleLogs.write_error(err)
            message = err.__str__()
        finally:
            return internal_response(result, data, message)
